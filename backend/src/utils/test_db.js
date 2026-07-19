import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';

const candidates = [
  'mysql://root:@localhost:3306/research_workspace',          // Empty password
  'mysql://root:root@localhost:3306/research_workspace',      // root
  'mysql://root:root123@localhost:3306/research_workspace',  // root123
  'mysql://root:root1234@localhost:3306/research_workspace', // root1234
  'mysql://root:admin@localhost:3306/research_workspace',    // admin
  'mysql://root:1234@localhost:3306/research_workspace',     // 1234
  'mysql://root:123456@localhost:3306/research_workspace',   // 123456
  'mysql://root:12345678@localhost:3306/research_workspace', // 12345678
  'mysql://root:password@localhost:3306/research_workspace', // password
];

async function testConnection(url) {
  const client = new PrismaClient({
    datasources: {
      db: { url },
    },
    log: [],
  });

  try {
    await client.$connect();
    await client.$queryRaw`SELECT 1`;
    await client.$disconnect();
    return true;
  } catch (err) {
    await client.$disconnect();
    return false;
  }
}

async function main() {
  console.log('Testing MySQL connection candidates...');
  
  for (const url of candidates) {
    console.log(`Testing: ${url.replace(/:[^@/]+@/, ':****@')}`);
    const isOk = await testConnection(url);
    if (isOk) {
      console.log('🎉 Found working database connection!');
      console.log(`URL: ${url}`);
      
      // Update .env file in backend
      const envPath = '.env';
      let envContent = await fs.readFile(envPath, 'utf8');
      envContent = envContent.replace(
        /DATABASE_URL="[^"]+"/,
        `DATABASE_URL="${url}"`
      );
      await fs.writeFile(envPath, envContent, 'utf8');
      console.log('Updated backend/.env with working connection string.');
      process.exit(0);
    }
  }
  
  console.log('❌ None of the standard candidates connected.');
  process.exit(1);
}

main();
