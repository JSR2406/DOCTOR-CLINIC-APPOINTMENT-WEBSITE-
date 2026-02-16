// Note: Prisma client will be available after running `npx prisma generate`
// This requires DATABASE_URL to be set in .env.local
// For now, we export a placeholder that will be replaced when Prisma is configured

// Uncomment the following when database is configured:
// import { PrismaClient } from '@prisma/client'
//
// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined
// }
//
// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log:
//       process.env.NODE_ENV === 'development'
//         ? ['query', 'error', 'warn']
//         : ['error'],
//   })
//
// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Placeholder export - replace with actual Prisma client when database is configured
export const prisma = null as unknown

// Helper to check if Prisma is configured
export function isPrismaConfigured(): boolean {
    return !!process.env.DATABASE_URL
}
