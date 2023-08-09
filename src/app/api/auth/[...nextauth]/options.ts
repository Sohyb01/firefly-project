import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "example@mail.com",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) return null;

        if (user.password == credentials.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  //   callbacks: {
  //     async jwt({ token, user }) {
  //       if (user && user.email) {
  //         token.email = user.email;
  //         token.id = user.id;
  //         token.fullName = user.fullName;
  //       }
  //       return token;
  //     },
  //     async session({ session, token, user }) {
  //       if (session?.user) {
  //         session.user.email = token.email;
  //         session.user.id = token.id;
  //         session.user.fullName = token.fullName;
  //       }
  //       return session;
  //     },
  //   },

  //   Callbacks is how you persist the user role!
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) token.role = user.role;
  //     return token;
  //   },
  //   // If you want to use the role in client components:
  //   async session({ session, token }) {
  //     if (session?.user) session.user.role = token.role;
  //     return session;
  //   },
  // },
  // pages: [],
  // secret: process.env["NEXTAUTH_SECRET"]
};
