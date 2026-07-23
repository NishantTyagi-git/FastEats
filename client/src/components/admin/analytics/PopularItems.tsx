import { Flame } from "lucide-react";

const items = [
    {
        name: "Paneer Tikka Pizza",
        orders: 148,
        revenue: "₹42,600",
    },
    {
        name: "Veg Burger",
        orders: 126,
        revenue: "₹31,500",
    },
    {
        name: "Chocolate Brownie",
        orders: 94,
        revenue: "₹18,900",
    },
    {
        name: "Cold Coffee",
        orders: 82,
        revenue: "₹14,760",
    },
    {
        name: "French Fries",
        orders: 76,
        revenue: "₹12,900",
    },
];

export default function PopularItems() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                    <Flame
                        size={22}
                        className="text-orange-500"
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white">Popular Items</h2>

                    <p className="text-zinc-500">Best selling menu items</p>
                </div>
            </div>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={item.name} className="flex items-center justify-between rounded-2xl bg-[#111111] p-4 transition hover:border hover:border-orange-500/40">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 font-bold text-white">
                                #{index + 1}
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">{item.name}</h3>

                                <p className="text-sm text-zinc-500">{item.orders} Orders</p>
                            </div>
                        </div>

                        <span className="font-bold text-orange-500">{item.revenue}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}