import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit

let prisma: PrismaClient;

prisma = new PrismaClient();

export default prisma;
