import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
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
        // console.log(credentials);
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // console.log(user);
        if (!user) return null;

        if (user.password == credentials.password) {
          console.log("login successful");
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/SigninPage",
  },

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

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = `${user.firstName} ${user.lastName}`;
        token.email = user.email;
        token.balance = user.balance;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    // If you want to use the role in client components:
    async session({ session, token }) {
      if (session?.user) {
        // session.user.name = token.name
        session.user.email = token.email;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return "/";
    },
  },
  secret: process.env["NEXTAUTH_SECRET"],
};
