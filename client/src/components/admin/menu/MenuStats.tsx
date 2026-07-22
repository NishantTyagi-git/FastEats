import { UtensilsCrossed, Grid2X2, CircleCheckBig, CircleX, LucideIcon } from "lucide-react";

const colors = {
    orange: {
        bg: "bg-orange-500/10",
        text: "text-orange-500",
    },
    green: {
        bg: "bg-green-500/10",
        text: "text-green-500",
    },
    blue: {
        bg: "bg-sky-500/10",
        text: "text-sky-500",
    },
    red: {
        bg: "bg-red-500/10",
        text: "text-red-500",
    },
} as const;

type Stat = {
    title: string;
    value: number;
    subtitle: string;
    icon: LucideIcon;
    color: keyof typeof colors;
};

const stats: Stat[] = [
    {
        title: "Total Items",
        value: 128,
        subtitle: "Across all categories",
        icon: UtensilsCrossed,
        color: "orange",
    },
    {
        title: "Categories",
        value: 12,
        subtitle: "Food & beverages",
        icon: Grid2X2,
        color: "blue",
    },
    {
        title: "Available",
        value: 116,
        subtitle: "Ready to order",
        icon: CircleCheckBig,
        color: "green",
    },
    {
        title: "Out of Stock",
        value: 12,
        subtitle: "Currently unavailable",
        icon: CircleX,
        color: "red",
    },
];

export default function MenuStats() {
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

                            <span className="text-xs text-zinc-500">{stat.subtitle}</span>
                        </div>

                        <h2 className="mt-6 text-4xl font-black text-white">{stat.value}</h2>

                        <p className="mt-2 text-zinc-500">{stat.title}</p>
                    </article>
                );
            })}
        </section>
    );
}