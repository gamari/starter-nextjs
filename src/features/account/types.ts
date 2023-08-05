export interface Account {
    id?: string;
    user_id: string;
    username: string;
    email: string;
    bio?: string;
    profile_image?: string;
    password?: string;
}

export interface Session {
    account: Account | null;
    access: string | null;
    refresh: string | null;
}