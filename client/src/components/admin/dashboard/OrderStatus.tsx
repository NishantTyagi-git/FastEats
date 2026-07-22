import { Clock3, ChefHat, Bike, CheckCircle2, XCircle } from "lucide-react";

const statuses = [
    {
        label: "Pending",
        orders: 18,
        color: "bg-amber-500",
        icon: Clock3,
    },
    {
        label: "Preparing",
        orders: 12,
        color: "bg-sky-500",
        icon: ChefHat,
    },
    {
        label: "Out for Delivery",
        orders: 8,
        color: "bg-violet-500",
        icon: Bike,
    },
    {
        label: "Delivered",
        orders: 82,
        color: "bg-green-500",
        icon: CheckCircle2,
    },
    {
        label: "Cancelled",
        orders: 3,
        color: "bg-red-500",
        icon: XCircle,
    },
];

export default function OrderStatus() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <h2 className="text-xl font-bold text-white">Order Status</h2>

            <p className="mt-1 text-sm text-zinc-500">Live order distribution</p>

            <div className="mt-8 space-y-5">
                {statuses.map((status) => {
                    const Icon = status.icon;
                    return (
                        <div key={status.label} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${status.color}/15`}>
                                    <Icon size={20} className={status.color.replace("bg-", "text-")} />
                                </div>

                                <div>
                                    <p className="font-semibold text-white">{status.label}</p>

                                    <p className="text-sm text-zinc-500">{status.orders} orders</p>
                                </div>
                            </div>

                            <div className={`h-3 w-3 rounded-full ${status.color}`} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}