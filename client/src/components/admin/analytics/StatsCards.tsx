import { IndianRupee, ShoppingBag, Users, TrendingUp } from "lucide-react";

const stats = [
    {
        title: "Revenue",
        value: "₹1,24,850",
        icon: IndianRupee,
    },
    {
        title: "Orders",
        value: "548",
        icon: ShoppingBag,
    },
    {
        title: "Customers",
        value: "184",
        icon: Users,
    },
    {
        title: "Growth",
        value: "+12.8%",
        icon: TrendingUp,
    },
];

export default function StatsCards() {
    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-zinc-500">{item.title}</p>

                            <h2 className="mt-3 text-3xl font-black text-white">{item.value}</h2>
                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
                            <item.icon
                                size={26}
                                className="text-orange-500"
                            />
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}