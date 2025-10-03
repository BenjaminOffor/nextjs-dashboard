import prisma from '@/lib/prisma';

export default async function Page() {
  const customers = await prisma.customer.findMany();

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((c) => (
          <li key={c.id}>
            {c.name} — {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
