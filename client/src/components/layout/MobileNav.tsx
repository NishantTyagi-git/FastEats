"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";

import NavLinks from "./NavLinks";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="text-white lg:hidden">
                <Menu size={28} />
            </button>

            <div onClick={() => setIsOpen(false)} className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} />

            <aside className={`fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col bg-[#111315] shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div className="flex items-center justify-between border-b border-white/10 p-6">
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Fast<span className="text-orange-500">Eat</span>
                        </h2>

                        <p className="text-xs uppercase tracking-[4px] text-zinc-400">
                            Indian Restaurant
                        </p>
                    </div>

                    <button onClick={() => setIsOpen(false)} className="text-white">
                        <X size={28} />
                    </button>
                </div>

                <div className="flex flex-1 flex-col gap-8 p-8">

                    <nav className="flex flex-col gap-6 text-lg" onClick={() => setIsOpen(false)}>
                        <NavLinks onClick={() => setIsOpen(false)} />
                    </nav>

                    <div className="border-t border-white/10 pt-8">

                        <button className="mb-5 flex items-center gap-3 text-white transition hover:text-orange-500">
                            <Search size={20} />
                            Search
                        </button>

                        <button className="mb-5 flex items-center gap-3 text-white transition hover:text-orange-500">
                            <ShoppingCart size={20} />
                            Cart
                        </button>

                        <Link href="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-lg bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600">
                            <User size={20} />
                            Login
                        </Link>

                    </div>

                </div>
            </aside>
        </>
    );
}