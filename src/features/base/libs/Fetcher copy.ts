import axios, { AxiosError, AxiosInstance } from 'axios';

export class Fetcher {
    private instance: AxiosInstance;

    constructor(token: string | null | undefined) {
        this.instance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
            headers: token
                ? { Authorization: `Bearer ${token}` }
                : {},
        });
    }

    async get(url: string, params?: any) {
        try {
            return await this.instance.get(url, { params });
        } catch (error) {
            const message = this.handleError(error);
            throw new Error(message);
        }
    }

    async post(url: string, data: any) {
        try {
            return await this.instance.post(url, data);
        } catch (error) {
            const message = this.handleError(error);
            throw new Error(message);
        }
    }

    async put(url: string, data: any) {
        try {
            return await this.instance.put(url, data);
        } catch (error) {
            const message = this.handleError(error);
            throw new Error(message);
        }
    }

    async delete(url: string) {
        try {
            return await this.instance.delete(url);
        } catch (error) {
            const message = this.handleError(error);
            throw new Error(message);
        }
    }

    setToken(token: string | null) {
        if (token) {
            this.instance.defaults.headers['Authorization'] = `Bearer ${token}`;
        } else {
            delete this.instance.defaults.headers['Authorization'];
        }
    }

    private handleError(error: any): string {
        console.error(error);
        if (error instanceof AxiosError) {
            if (error.response?.data) {
                const data = error.response.data as any;

                if (typeof data === 'string') {
                    return data;
                }

                if (typeof data?.detail === 'string') {
                    return data.detail;
                }

                let messages: string[] = [];

                for (const [key, value] of Object.entries(data)) {
                    messages.push(`${value}`);
                }

                if (messages.length > 0) {
                    return messages.join('\n').trim();
                }
            }
        }

        return '未知のエラーが発生しました。';
    }
}
