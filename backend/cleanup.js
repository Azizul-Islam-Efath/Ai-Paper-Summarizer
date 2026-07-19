import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function run() {
  console.log('Cleaning up failed and pending syntheses...');
  
  const comp = await prisma.comparison.deleteMany({
    where: { status: { in: ['FAILED', 'PENDING', 'PROCESSING'] } }
  });
  console.log(`Deleted ${comp.count} failed/pending/processing comparisons.`);

  const gap = await prisma.researchGap.deleteMany({
    where: { status: { in: ['FAILED', 'PENDING', 'PROCESSING'] } }
  });
  console.log(`Deleted ${gap.count} failed/pending/processing research gaps.`);

  console.log('Cleanup complete.');
}

run()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
