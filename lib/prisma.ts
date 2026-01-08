import { PrismaClient } from "@prisma/client";

// Extend globalThis to store Prisma client globally in development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Use existing Prisma client if it exists (prevents creating multiple instances in dev)
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient();

// Store the Prisma client globally in development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
