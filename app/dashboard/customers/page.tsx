import prisma from '@/lib/prisma';

type Customer = {
  id: number | string;
  name: string;
  email: string;
};

export default async function Page() {
  const customers = await prisma.customer.findMany();

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((c: Customer) => (
          <li key={c.id}>
            {c.name} — {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
