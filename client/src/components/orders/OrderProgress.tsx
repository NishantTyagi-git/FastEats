"use client";

import { CheckCircle2, ChefHat, Bike, PackageCheck } from "lucide-react";

const steps = [
    {
        title: "Confirmed",
        subtitle: "Order received",
        icon: CheckCircle2,
        status: "completed",
    },
    {
        title: "Preparing",
        subtitle: "Cooking food",
        icon: ChefHat,
        status: "current",
    },
    {
        title: "Picked Up",
        subtitle: "Rider assigned",
        icon: Bike,
        status: "pending",
    },
    {
        title: "Delivered",
        subtitle: "Enjoy!",
        icon: PackageCheck,
        status: "pending",
    },
] as const;

export default function OrderProgress() {
    return (
        <section className="rounded-[32px] border border-white/10 bg-[#151515] p-8">
            <p className="font-semibold uppercase tracking-[5px] text-orange-500">Live Progress</p>

            <h2 className="mt-3 text-4xl font-black text-white">Track Your Order</h2>

            <div className="mt-14">
                <div className="flex items-start justify-between">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const completed = step.status === "completed";
                        const current = step.status === "current";

                        return (
                            <div key={step.title} className="relative flex flex-1 flex-col items-center">
                                {index !== steps.length - 1 && (
                                    <div className={`absolute left-1/2 top-5 h-[3px] w-full ${completed ? "bg-green-500" : "bg-white/10"}`} />
                                )}

                                <div
                                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${completed ? "border-green-500 bg-green-500 text-white" : current
                                        ? "animate-pulse border-orange-500 bg-orange-500 text-white"
                                        : "border-white/10 bg-[#101010] text-zinc-500"
                                        }`}
                                >
                                    <Icon size={22} />
                                </div>

                                <h3 className={`mt-5 text-lg font-bold ${completed || current ? "text-white" : "text-zinc-500"}`}>
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-center text-sm text-zinc-500">{step.subtitle}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-14 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[4px] text-orange-400">Current Status</p>
                        <h3 className="mt-2 text-3xl font-black text-white">👨‍🍳 Preparing Your Meal</h3>

                        <p className="mt-3 max-w-xl leading-7 text-zinc-400">
                            Our chefs are freshly preparing your order. We'll notify you as soon as the delivery partner picks it up.
                        </p>
                    </div>

                    <div className="hidden h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-4xl lg:flex">🍳</div>
                </div>
            </div>
        </section>
    );
}