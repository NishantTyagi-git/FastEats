"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const filters = [
    "All",
    "Pending",
    "Preparing",
    "Out for Delivery",
    "Delivered",
    "Cancelled",
];

export default function OrdersFilters() {
    const [active, setActive] = useState("All");

    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                <div className="relative w-full xl:max-w-md">
                    <Search
                        size={18}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                    />

                    <input
                        type="text"
                        placeholder="Search order ID or customer..."
                        className="h-12 w-full rounded-2xl border border-white/10 bg-[#111111] pl-14 pr-5 text-white placeholder:text-zinc-500 outline-none transition focus:border-orange-500"
                    />
                </div>

                <div className="flex flex-wrap gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActive(filter)}
                            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${active === filter
                                ? "bg-orange-500 text-white"
                                : "border border-white/10 bg-[#111111] text-zinc-400 hover:border-orange-500 hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <button className="flex h-12 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#111111] px-5 text-white transition hover:border-orange-500">
                    <SlidersHorizontal size={18} />
                    Sort
                </button>
            </div>
        </section>
    );
}