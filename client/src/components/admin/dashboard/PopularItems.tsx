import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

const items = [
    {
        name: "Paneer Tikka Pizza",
        sold: 184,
        revenue: "₹73,600",
    },
    {
        name: "Veg Burger",
        sold: 162,
        revenue: "₹40,500",
    },
    {
        name: "Cheese Pasta",
        sold: 141,
        revenue: "₹56,400",
    },
    {
        name: "French Fries",
        sold: 128,
        revenue: "₹25,600",
    },
    {
        name: "Cold Coffee",
        sold: 115,
        revenue: "₹28,750",
    },
];

export default function PopularItems() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515]">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div>
                    <h2 className="text-xl font-bold text-white">Popular Items</h2>

                    <p className="mt-1 text-sm text-zinc-500">Best selling dishes today</p>
                </div>

                <Link href="/admin/menu" className="flex items-center gap-2 text-sm font-semibold text-orange-500 transition hover:text-orange-400">
                    Manage Menu
                    <ArrowRight size={16} />
                </Link>
            </div>

            <div className="divide-y divide-white/10">
                {items.map((item, index) => (
                    <div key={item.name} className="flex items-center justify-between px-6 py-5 transition hover:bg-white/5">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                                <Flame
                                    size={20}
                                    className="text-orange-500"
                                />
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">{item.name}</h3>

                                <p className="mt-1 text-sm text-zinc-500">#{index + 1} Best Seller</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-bold text-white">{item.sold} Sold</p>

                            <p className="mt-1 text-sm text-green-400">{item.revenue}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}