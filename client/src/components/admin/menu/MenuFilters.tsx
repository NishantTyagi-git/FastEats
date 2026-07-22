"use client";

import { Search, ChevronDown, ArrowUpDown } from "lucide-react";

export default function MenuFilters() {
    return (
        <section className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#151515] p-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
                <Search
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                    type="text"
                    placeholder="Search food items..."
                    className="h-12 w-full rounded-2xl border border-white/10 bg-[#111111] pl-14 pr-5 text-white outline-none transition focus:border-orange-500"
                />
            </div>

            <div className="flex flex-wrap gap-3">
                <button className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] px-5 text-white transition hover:border-orange-500">
                    <span>All Categories</span>
                    <ChevronDown size={18} />
                </button>

                <button className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] px-5 text-white transition hover:border-orange-500">
                    <span>Availability</span>
                    <ChevronDown size={18} />
                </button>

                <button className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] px-5 text-white transition hover:border-orange-500">
                    <ArrowUpDown size={18} />
                    <span>Sort</span>
                </button>
            </div>
        </section>
    );
}