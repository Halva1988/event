import { PrismaClient, TEvent } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const getAllEvents = async (): Promise<TEvent[]> => prisma.tEvent.findMany({
  orderBy: { date: "desc" },
});
export const getSlugEvent = async (slug: string): Promise<TEvent | null>=> prisma.tEvent.findUnique({ where: { slug } });