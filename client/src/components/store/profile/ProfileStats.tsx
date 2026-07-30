import Link from "next/link";
import { Package, Heart, MapPin, Star } from "lucide-react";

const stats = [
    {
        title: "Orders",
        value: "28",
        href: "/orders",
        icon: Package,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
    {
        title: "Wishlist",
        value: "14",
        href: "/profile/wishlist",
        icon: Heart,
        color: "text-red-500",
        bg: "bg-red-500/10",
    },
    {
        title: "Addresses",
        value: "3",
        href: "/profile/addresses",
        icon: MapPin,
        color: "text-sky-500",
        bg: "bg-sky-500/10",
    },
    {
        title: "Reward Points",
        value: "1,280",
        href: "/profile/rewards",
        icon: Star,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
    },
];

export default function ProfileStats() {
    return (
        <section className="mt-10">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Link
                            key={stat.title}
                            href={stat.href}
                            className="group rounded-[28px] border border-white/10 bg-[#151515] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)]"
                        >
                            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg}`}>
                                <Icon
                                    size={26}
                                    className={`${stat.color} transition-transform duration-300 group-hover:scale-110`}
                                />
                            </div>

                            <h2 className="mt-6 text-4xl font-black text-white">{stat.value}</h2>

                            <div className="mt-2 flex items-center justify-between">
                                <p className="text-zinc-400">{stat.title}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}