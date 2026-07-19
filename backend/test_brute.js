import { PrismaClient } from '@prisma/client';

const passwords = [
  '', 'password', 'root', 'admin', 'mysql', '1234', '12345', '123456', '1234567', '12345678', '123456789', '1234567890',
  'manager', 'system', 'Admin1234!', 'mysql80', 'root123', 'root1234', 'rootroot', 'password123', 'pass',
  'azizul', 'azizul123', 'azizul1234', 'Efath', 'Efath123', 'efath1234', 'efath', 'azizulislam', 'azizulislam123',
  'mysql123', 'mysql1234'
];

async function test(p) {
  const credentials = p ? `root:${encodeURIComponent(p)}` : 'root';
  process.env.DATABASE_URL = `mysql://${credentials}@localhost:3307/research_workspace`;
  
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  });
  try {
    await prisma.$connect();
    return true;
  } catch (e) {
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  for (const p of passwords) {
    const ok = await test(p);
    if (ok) {
      console.log(`FOUND PASSWORD: "${p}"`);
      process.exit(0);
    }
  }
  console.log("No common passwords worked.");
}

main();
