import prisma from '../../../lib/prisma';


export default async function Page() {
  const invoices = await prisma.invoice.findMany({
    include: { customer: true },
  });

  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        {invoices.map((inv) => (
          <li key={inv.id}>
            {inv.customer.name} — ${inv.amount} ({inv.status})
          </li>
        ))}
      </ul>
    </div>
  );
}
