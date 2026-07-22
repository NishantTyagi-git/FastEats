import { IndianRupee, ShoppingBag, Users, Receipt, ArrowUpRight } from "lucide-react";

const stats = [
    {
        title: "Revenue",
        value: "₹18,420",
        change: "+12.4%",
        icon: IndianRupee,
    },
    {
        title: "Orders",
        value: "124",
        change: "+18",
        icon: ShoppingBag,
    },
    {
        title: "Customers",
        value: "86",
        change: "+6",
        icon: Users,
    },
    {
        title: "Avg. Order",
        value: "₹148",
        change: "+4.8%",
        icon: Receipt,
    },
];

export default function DashboardStats() {
    return (
        <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                    <article key={stat.title} className="group rounded-3xl border border-white/10 bg-[#151515] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40">
                        <div className="flex items-start justify-between">
                            <div className="rounded-2xl bg-orange-500/10 p-3">
                                <Icon
                                    size={24}
                                    className="text-orange-500"
                                />
                            </div>

                            <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-400">
                                <ArrowUpRight size={15} />
                                {stat.change}
                            </div>
                        </div>

                        <p className="mt-6 text-sm text-zinc-500">{stat.title}</p>

                        <h2 className="mt-2 text-4xl font-black text-white">{stat.value}</h2>
                    </article>
                );
            })}
        </section>
    );
}