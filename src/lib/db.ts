import { PrismaClient, TEvent } from "@prisma/client";

const prismaClientSingleton = () => {
	return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const getAllEvents = async (page = "1") => {
	const events = await prisma.tEvent.findMany({
		orderBy: { date: "desc" },
		take: 6,
		skip: (Number(page) - 1) * 6,
	});
	const totalCount = await prisma.tEvent.count();
	return { events, totalCount };
};
export const getSlugEvent = async (slug: string): Promise<TEvent | null> =>
	prisma.tEvent.findUnique({ where: { slug } });
