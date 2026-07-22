import { CircleCheckBig, ChefHat, Bike, PackageCheck, ShoppingCart } from "lucide-react";

const timeline = [
    {
        title: "Order Placed",
        time: "22 Jul 2026 • 2:05 PM",
        completed: true,
        icon: ShoppingCart,
    },
    {
        title: "Payment Received",
        time: "22 Jul 2026 • 2:07 PM",
        completed: true,
        icon: CircleCheckBig,
    },
    {
        title: "Preparing",
        time: "22 Jul 2026 • 2:15 PM",
        completed: true,
        current: true,
        icon: ChefHat,
    },
    {
        title: "Out for Delivery",
        time: "--",
        completed: false,
        icon: Bike,
    },
    {
        title: "Delivered",
        time: "--",
        completed: false,
        icon: PackageCheck,
    },
];

export default function OrderTimeline() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-white">Order Timeline</h2>

                <p className="mt-1 text-sm text-zinc-500">Live order progress</p>
            </div>

            <div className="space-y-6">
                {timeline.map((step, index) => {
                    const Icon = step.icon;

                    return (
                        <div key={step.title} className="relative flex gap-5">
                            {index !== timeline.length - 1 && (
                                <div
                                    className={`absolute left-[18px] top-10 h-14 w-0.5 ${step.completed
                                        ? "bg-orange-500"
                                        : "bg-white/10"
                                        }`}
                                />
                            )}

                            <div
                                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full ${step.completed
                                    ? "bg-orange-500 text-white"
                                    : "border border-white/10 bg-[#111111] text-zinc-500"
                                    }`}
                            >
                                <Icon size={18} />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-semibold text-white">{step.title}</h3>

                                    {step.current && (
                                        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400">Current</span>
                                    )}
                                </div>

                                <p className="mt-1 text-sm text-zinc-500">{step.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}