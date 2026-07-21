"use client";

import { Bell, Search, Menu, ChevronDown } from "lucide-react";

export default function Topbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b0b]/80 backdrop-blur-xl">
            <div className="flex h-20 items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <button className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:border-orange-500 hover:text-orange-500 lg:hidden">
                        <Menu size={20} />
                    </button>

                    <div className="hidden items-center lg:flex">
                        <div className="relative">
                            <Search
                                size={18}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                            />

                            <input
                                type="text"
                                placeholder="Search orders, menu, customers..."
                                className="h-12 w-[360px] rounded-2xl border border-white/10 bg-[#151515] pl-14 pr-5 text-white outline-none transition focus:border-orange-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#151515] text-zinc-300 transition hover:border-orange-500 hover:text-orange-500">
                        <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-orange-500" />
                    </button>

                    <button className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#151515] px-4 py-2 transition hover:border-orange-500">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-lg font-black text-white">
                            A
                        </div>

                        <div className="hidden text-left md:block">
                            <p className="font-semibold text-white">Admin</p>

                            <p className="text-sm text-zinc-500">Nishant</p>
                        </div>

                        <ChevronDown
                            size={18}
                            className="hidden text-zinc-500 md:block"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}