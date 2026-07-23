import { Crown } from "lucide-react";

const customers = [
    {
        name: "Rahul Sharma",
        orders: 24,
        spent: "₹18,540",
    },
    {
        name: "Ananya Verma",
        orders: 21,
        spent: "₹16,920",
    },
    {
        name: "Priya Singh",
        orders: 19,
        spent: "₹15,380",
    },
    {
        name: "Aman Gupta",
        orders: 17,
        spent: "₹13,910",
    },
    {
        name: "Rohit Kumar",
        orders: 15,
        spent: "₹12,240",
    },
];

export default function TopCustomers() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                    <Crown
                        size={22}
                        className="text-orange-500"
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white">Top Customers</h2>

                    <p className="text-zinc-500">Highest spending customers</p>
                </div>

            </div>

            <div className="space-y-4">
                {customers.map((customer, index) => (
                    <div key={customer.name} className="flex items-center justify-between rounded-2xl bg-[#111111] p-4 transition hover:border hover:border-orange-500/40">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                                {customer.name.charAt(0)}
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">{customer.name}</h3>

                                <p className="text-sm text-zinc-500">{customer.orders} Orders</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-bold text-orange-500">{customer.spent}</p>

                            <p className="text-xs text-zinc-500">#{index + 1}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}