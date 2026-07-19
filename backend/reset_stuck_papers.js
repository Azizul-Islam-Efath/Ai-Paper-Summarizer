import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    const result = await prisma.paper.updateMany({
      where: { status: 'SUMMARIZING' },
      data: { status: 'READY' }
    });
    console.log(`Reset ${result.count} stuck papers to READY status.`);
  } catch (e) {
    console.error("Failed to reset papers:", e);
  } finally {
    await prisma.$disconnect();
  }
}
main();
