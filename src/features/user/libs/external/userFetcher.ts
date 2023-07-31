import { fetcher } from "@/features/base/libs/fetcher"

export const fetchToken = async (email: string, password: string) => {
    const { status, data: { access, refresh } } = await fetcher.post("/auth/jwt/create/", {
        email,
        password
    })

    if (status !== 200) throw new Error("ログインに失敗しました");

    return {
        access,
        refresh
    }
}

export const fetchMe = async () => {
    const { status, data } = await fetcher.get("/auth/users/me/");

    if (status !== 200) throw new Error("ユーザー情報の取得に失敗しました");

    return data;
}