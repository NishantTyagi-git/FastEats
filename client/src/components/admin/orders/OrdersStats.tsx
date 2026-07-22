import { ShoppingBag, IndianRupee, Clock3, Bike, LucideIcon } from "lucide-react";

const colors = {
    orange: {
        bg: "bg-orange-500/10",
        text: "text-orange-500",
    },
    green: {
        bg: "bg-green-500/10",
        text: "text-green-500",
    },
    amber: {
        bg: "bg-amber-500/10",
        text: "text-amber-500",
    },
    blue: {
        bg: "bg-sky-500/10",
        text: "text-sky-500",
    },
} as const;

type Stat = {
    title: string;
    value: string | number;
    change: string;
    icon: LucideIcon;
    color: keyof typeof colors;
};

const stats: Stat[] = [
    {
        title: "Today's Orders",
        value: 124,
        change: "+18 Today",
        icon: ShoppingBag,
        color: "orange",
    },
    {
        title: "Revenue Today",
        value: "₹18,420",
        change: "+12.4%",
        icon: IndianRupee,
        color: "green",
    },
    {
        title: "Active Orders",
        value: 30,
        change: "Preparing & Delivery",
        icon: Bike,
        color: "blue",
    },
    {
        title: "Pending Orders",
        value: 18,
        change: "Needs Attention",
        icon: Clock3,
        color: "amber",
    },
];

export default function OrdersStats() {
    return (
        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;
                const color = colors[stat.color];

                return (
                    <article key={stat.title} className="rounded-3xl border border-white/10 bg-[#151515] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30">
                        <div className="flex items-start justify-between">
                            <div className={`rounded-2xl p-3 ${color.bg}`}>
                                <Icon
                                    size={22}
                                    className={color.text}
                                />
                            </div>

                            <span className="text-xs font-medium text-zinc-500">{stat.change}</span>
                        </div>

                        <h2 className="mt-6 text-4xl font-black text-white">{stat.value}</h2>

                        <p className="mt-2 text-zinc-500">{stat.title}</p>
                    </article>
                );
            })}
        </section>
    );
}