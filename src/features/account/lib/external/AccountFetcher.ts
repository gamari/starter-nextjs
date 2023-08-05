import { Fetcher } from "@/features/base/libs/Fetcher copy";
import { Account } from "../../types";

export class AccountFetcher extends Fetcher {
    constructor(token?: string | null) {
        super(token);
    }

    async getToken(email: string, password: string) {
        const response = await this.post('/auth/jwt/create/', { email, password });

        return response.data;
    }

    async getMe() {
        // TODO fix 
        const response = await this.get('/accounts/me/');
        console.log(response);

        return response.data;
    }

    async refreshToken(refresh: string) {
        const response = await this.post('/auth/jwt/refresh/', { refresh });
        return response.data;
    }

    async createAccount(newAccount: Account) {
        const response = await this.post('/accounts/', newAccount);
        return response.data;
    }
}