import CustomerCard from "./CustomerCard";

const customers = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        phone: "+91 9876543210",
        orders: 18,
        spent: 12480,
    },
    {
        id: 2,
        name: "Aarav Singh",
        email: "aarav@gmail.com",
        phone: "+91 9876543211",
        orders: 9,
        spent: 5640,
    },
    {
        id: 3,
        name: "Priya Verma",
        email: "priya@gmail.com",
        phone: "+91 9876543212",
        orders: 23,
        spent: 18600,
    },
];

export default function CustomerGrid() {
    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {customers.map((customer) => (
                <CustomerCard
                    key={customer.id}
                    {...customer}
                />
            ))}
        </section>
    );
}