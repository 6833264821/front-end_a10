import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            _id: string;
            role: string;
            token: string;
        } & DefaultSession['user'];
    }

    interface User {
        id: string;
        _id: string;
        role: string;
        token: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id?: string;
        _id?: string;
        role?: string;
        token?: string;
    }
}