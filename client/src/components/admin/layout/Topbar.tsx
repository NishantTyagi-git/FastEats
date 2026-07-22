"use client";

import { Bell, Search, Menu, ChevronDown, CalendarDays, Clock3 } from "lucide-react";

export default function Topbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b0b]/80 backdrop-blur-xl">
            <div className="flex h-20 items-center justify-between px-8">
                <div className="flex items-center gap-6">
                    <button className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:border-orange-500 hover:text-orange-500 lg:hidden">
                        <Menu size={20} />
                    </button>

                    <div className="relative hidden lg:block">
                        <Search
                            size={18}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            placeholder="Search orders, dishes, customers..."
                            className="h-12 w-[360px] rounded-2xl border border-white/10 bg-[#151515] pl-14 pr-5 text-white placeholder:text-zinc-500 outline-none transition focus:border-orange-500"
                        />
                    </div>

                    <div className="hidden xl:flex items-center gap-3 rounded-2xl border border-white/10 bg-[#151515] px-5 py-3">
                        <CalendarDays
                            size={18}
                            className="text-orange-500"
                        />

                        <div>
                            <p className="text-xs uppercase tracking-[2px] text-zinc-500">Today</p>

                            <p className="font-semibold text-white">22 July 2026</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-white/10 bg-[#151515] px-5 py-3">
                        <Clock3
                            size={18}
                            className="text-orange-500"
                        />

                        <div>
                            <p className="text-xs uppercase tracking-[2px] text-zinc-500">Time</p>

                            <p className="font-semibold text-white">10:42 AM</p>
                        </div>
                    </div>

                    <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#151515] transition hover:border-orange-500">
                        <Bell
                            size={20}
                            className="text-zinc-300"
                        />

                        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">3</span>
                    </button>

                    <button className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#151515] px-3 py-2 transition hover:border-orange-500">
                        <img
                            src="/images/profile.png"
                            alt="Admin"
                            className="h-12 w-12 rounded-full object-cover"
                        />

                        <div className="hidden text-left md:block">
                            <p className="font-bold text-white">Nishant Tyagi</p>

                            <p className="text-sm text-zinc-500">Restaurant Owner</p>
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