import { PrismaClient } from '@prisma/client';

// Prevent multiple instances during development (hot reload)
const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({
    log: ['query'], // optional: logs SQL queries
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
