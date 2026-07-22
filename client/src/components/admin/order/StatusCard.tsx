"use client";

import { useState } from "react";
import { Clock3, ChefHat, Bike, CheckCircle2, XCircle } from "lucide-react";

const statuses = [
    {
        label: "Pending",
        icon: Clock3,
        color: "bg-amber-500 text-white",
    },
    {
        label: "Preparing",
        icon: ChefHat,
        color: "bg-sky-500 text-white",
    },
    {
        label: "Out for Delivery",
        icon: Bike,
        color: "bg-violet-500 text-white",
    },
    {
        label: "Delivered",
        icon: CheckCircle2,
        color: "bg-green-500 text-white",
    },
    {
        label: "Cancelled",
        icon: XCircle,
        color: "bg-red-500 text-white",
    },
];

export default function StatusCard() {
    const [currentStatus, setCurrentStatus] = useState("Preparing");

    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Order Status</h2>

                <p className="mt-1 text-sm text-zinc-500">Update the progress of this order</p>
            </div>

            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
                <p className="text-sm text-zinc-400">Current Status</p>

                <h3 className="mt-2 text-3xl font-black text-white">{currentStatus}</h3>
            </div>

            <div className="mt-6 space-y-3">
                {statuses.map((status) => {
                    const Icon = status.icon;
                    const active = currentStatus === status.label;

                    return (

                        <button
                            key={status.label}
                            onClick={() => setCurrentStatus(status.label)}
                            className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${active
                                ? "border-orange-500 bg-orange-500/10"
                                : "border-white/10 bg-[#111111] hover:border-orange-500/40"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`rounded-xl p-3 ${active
                                        ? status.color
                                        : "bg-white/5 text-zinc-400"
                                        }`}
                                >
                                    <Icon size={18} />
                                </div>

                                <span className={`font-semibold ${active ? "text-white" : "text-zinc-400"}`}>{status.label}</span>
                            </div>

                            {active && (
                                <CheckCircle2
                                    size={20}
                                    className="text-orange-500"
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            <button className="mt-6 h-12 w-full rounded-2xl bg-orange-500 font-semibold text-white transition hover:bg-orange-600">
                Save Status
            </button>
        </section>
    );
}