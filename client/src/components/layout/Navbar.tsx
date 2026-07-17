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
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#111111]/85 shadow-xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center px-10 xl:px-4">

        <div className="flex w-64 items-center">
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/Logo.png"
              alt="FastEat"
              width={210}
              height={65}
              className="h-16 w-auto"
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
            <Search size={26} strokeWidth={2} />
          </button>

          <button className="relative text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-500">
            <ShoppingCart size={26} strokeWidth={2} />

            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-[11px] font-semibold text-white">
              0
            </span>
          </button>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full bg-orange-500 px-8 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
          >
            <User size={18} />
            Login
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}