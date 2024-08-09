import { login } from "@/server-actions/auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/signIn",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        // email: { label: "Email", type: "email" },
        // password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const response = await login({
          email: email,
          password: password,
        });
        const user = response.data;
        console.log(response, "response");
        if (response.success && user) {
          return {
            id: user.id,
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
            name: user.name,
            email: user.email,
            role: user.role,
            profileComplete: user.profileComplete,
            message: user.message,
            success: user.success,
          };
        } else {
          return null
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: any }): Promise<any> {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = user.accessTokenExpires;
      }
      return token;
    },

    async session({ token, session }: { token: any; session: any }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.accessTokenExpires = token.accessTokenExpires;
      return session;
    },
  },
  events: {
    async signIn(message) {
      console.log("signIn", message);
    },
    async signOut(message) {
      console.log("signOut", message);
    },
    async createUser(message) {
      console.log("createUser", message);
    },
    async updateUser(message) {
      console.log("updateUser", message);
    },

    async linkAccount(message) {
      console.log("linkAccount", message);
    },
    async session(message) {
      console.log("session", message);
    },
  },
};
