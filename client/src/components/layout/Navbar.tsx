"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";

import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setScrolled(window.scrollY > 20); };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out ${
                    scrolled
                        ? "border-b border-white/10 bg-black/60 shadow-[0_8px_30px_rgba(0,0,0,.22)] backdrop-blur-xl"
                        : "border-b border-transparent bg-gradient-to-b from-black/25 to-transparent"
                }`}
        >
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-8">

                <div className="flex w-64 items-center">
                    <Link href="/" className="transition-transform duration-300 hover:scale-105">
                        <Image
                            src="/Logo.png"
                            alt="FastEat"
                            width={170}
                            height={55}
                            className="h-14 w-auto"
                            priority
                        />
                    </Link>
                </div>

                <nav className="hidden flex-1 justify-center lg:flex">
                    <div className="flex items-center gap-12">
                        <NavLinks />
                    </div>
                </nav>

                <div className="hidden w-60 items-center justify-end gap-8 lg:flex">

                    <button className="text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-500">
                        <Search size={24} strokeWidth={2} />
                    </button>

                    <button className="relative text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-500">
                        <ShoppingCart size={24} strokeWidth={2} />

                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-semibold text-white">
                            0
                        </span>
                    </button>

                    <Link href="/login" className="flex h-11 items-center gap-2 rounded-full bg-orange-500 px-6 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">
                        <User size={17} />
                        Login
                    </Link>

                </div>

                <MobileNav />

            </div>
        </header>
    );
}