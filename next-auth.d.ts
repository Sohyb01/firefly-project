// import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      firstName: string;
      lastName: string;
      email: string;
      balance: number;
      password: string;
      id: string;
      role: string;
      // createdAt: Date;
      // updatedAt: Date;
    };
  }

  interface User {
    firstName: string;
    lastName: string;
    email: string;
    balance: number;
    password: string;
    id: string;
    role: string;
    // createdAt: Date;
    // updatedAt: Date;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    firstName: string;
    lastName: string;
    email: string;
    balance: number;
    password: string;
    id: string;
    role: string;
    // createdAt: Date;
    // updatedAt: Date;
  }
}
