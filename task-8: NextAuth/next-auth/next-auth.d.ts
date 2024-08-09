// types/next-auth.d.ts
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
    refreshToken: string;
  }

  interface User {
    id: string;
    accessToken: string;
    refreshToken: string;
    name: string;
    email: string;
    role: string;
    profileComplete: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
    error?: string;
  }
}