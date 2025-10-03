import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clear old data
  await prisma.invoice.deleteMany();
  await prisma.customer.deleteMany();

  // Customers
  const alice = await prisma.customer.create({
    data: {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      imageUrl: 'https://i.pravatar.cc/150?u=alice',
    },
  });

  const bob = await prisma.customer.create({
    data: {
      name: 'Bob Smith',
      email: 'bob@example.com',
      imageUrl: 'https://i.pravatar.cc/150?u=bob',
    },
  });

  // Invoices
  await prisma.invoice.createMany({
    data: [
      { amount: 500, status: 'paid', customerId: alice.id },
      { amount: 200, status: 'pending', customerId: alice.id },
      { amount: 750, status: 'paid', customerId: bob.id },
      { amount: 300, status: 'pending', customerId: bob.id },
    ],
  });

  console.log('✅ Seeding completed.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
