import jwtDecode from "jwt-decode";
import { Account, Session } from "../types";
import { AccountFetcher } from "./external/AccountFetcher";

export class Authentication {
    constructor(private access?: string | null, private refresh?: string | null) { }

    private async getNewToken(email: string, password: string): Promise<{ access: string, refresh: string }> {
        const accountFetcher = new AccountFetcher();
        return await accountFetcher.getToken(email, password);
    }

    private async refreshAccessToken(refreshToken: string): Promise<{ access: string, refresh: string }> {
        const accountFetcher = new AccountFetcher();
        return await accountFetcher.refreshToken(refreshToken);
    }

    async authenticate(email: string, password: string): Promise<Session | null> {
        const { access, refresh } = await this.getNewToken(email, password);
        const accountFetcher = new AccountFetcher(access);
        const account = await accountFetcher.getMe();
        return { access, refresh, account };
    }

    async singnup(newAccount: Account): Promise<Session | null> {
        const accountFetcher = new AccountFetcher();
        await accountFetcher.createAccount(newAccount);
        const { access, refresh } = await this.getNewToken(newAccount.email, newAccount?.password || "");
        accountFetcher.setToken(access);
        const account = await accountFetcher.getMe();
        return { access, refresh, account };
    }

    async getUserByToken(): Promise<Session | null> {
        if (!this.access || !this.refresh) return null;

        const decoded = jwtDecode<{ exp: number }>(this.access);
        const isTokenExpired = decoded.exp < Date.now() / 1000;

        if (isTokenExpired) {
            const { access, refresh } = await this.refreshAccessToken(this.refresh);
            this.access = access;
            this.refresh = refresh;

            if (!access || !refresh) throw new Error("トークンが有効期限切れです");
        }

        const accountFetcher = new AccountFetcher(this.access);
        const account = await accountFetcher.getMe();

        return {
            access: this.access,
            refresh: this.refresh,
            account,
        }
    }
}
