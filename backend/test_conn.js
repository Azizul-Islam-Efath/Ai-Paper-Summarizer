import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("Successfully connected to the database.");
    const [projectsCount, papersCount, summariesCount, gapsCount, comparisonsCount, generatedCount] = await Promise.all([
      prisma.project.count(),
      prisma.paper.count(),
      prisma.summary.count(),
      prisma.researchGap.count(),
      prisma.comparison.count(),
      prisma.generatedPaper.count()
    ]);
    console.log(`Database Statistics:`);
    console.log(`- Projects: ${projectsCount}`);
    console.log(`- Papers: ${papersCount}`);
    console.log(`- Summaries: ${summariesCount}`);
    console.log(`- Research Gaps: ${gapsCount}`);
    console.log(`- Comparisons: ${comparisonsCount}`);
    console.log(`- Generated Papers: ${generatedCount}`);
    
    if (projectsCount > 0) {
      const latestProj = await prisma.project.findFirst({
        orderBy: { createdAt: 'desc' },
        include: {
          papers: true
        }
      });
      console.log(`Latest Project: "${latestProj.name}" (ID: ${latestProj.id})`);
      console.log(`- Papers count: ${latestProj.papers.length}`);
      latestProj.papers.forEach(p => {
        console.log(`  * Paper [${p.status}]: "${p.title}"`);
      });
    }
  } catch (e) {
    console.error("Connection failed:", e.message);
  } finally {
    await prisma.$disconnect();
  }
}
main();
