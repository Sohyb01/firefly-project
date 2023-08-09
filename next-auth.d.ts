import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      password: string;
      id: string;
      role: string;
      // createdAt: Date;
      // updatedAt: Date;
    };
  }

  interface User {
    name: string;
    email: string;
    password: string;
    id: string;
    role: string;
    // createdAt: Date;
    // updatedAt: Date;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    name: string;
    email: string;
    password: string;
    id: string;
    role: string;
    // createdAt: Date;
    // updatedAt: Date;
  }
}
