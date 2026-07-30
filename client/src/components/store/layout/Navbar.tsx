"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User, LogOut, Settings, ChevronDown, ShoppingBag, Heart, MapPin, CreditCard } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const pathname = usePathname();
    const profileRef = useRef<HTMLDivElement>(null);

    const { user, isLoading, logout } = useAuth();

    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target as Node)
            ) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        setIsProfileOpen(false);
        await logout();
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isHome
                ? scrolled
                    ? "border-b border-white/10 bg-black/60 shadow-[0_8px_30px_rgba(0,0,0,.22)] backdrop-blur-xl"
                    : "border-b border-transparent bg-gradient-to-b from-black/25 to-transparent"
                : "border-b border-white/10 bg-black/70 shadow-[0_8px_30px_rgba(0,0,0,.22)] backdrop-blur-md"
                }`}
        >
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-8">

                <div className="flex w-64 items-center">
                    <Link href="/" className="transition-transform duration-300 hover:scale-105">
                        <Image
                            src="/images/Logo.png"
                            alt="FastEats"
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
                    <button type="button" className="text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-500">
                        <Search size={24} />
                    </button>

                    <button type="button" className="relative text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-500">
                        <ShoppingCart size={24} />

                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-semibold text-white">0</span>
                    </button>

                    {!isLoading &&
                        (user ? (
                            <div ref={profileRef} className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsProfileOpen((prev) => !prev)}
                                    className="group flex items-center gap-2 text-[#f5ead7] transition-colors duration-300 hover:text-orange-500"
                                >
                                    <span className="font-serif text-[15px] font-semibold">
                                        {user.fullName}
                                    </span>

                                    <ChevronDown
                                        size={15}
                                        strokeWidth={1.8}
                                        className={`transition-transform duration-300 ${isProfileOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {isProfileOpen && (
                                    <div className="absolute right-0 top-10 w-64 overflow-hidden rounded-xl border border-orange-500/20 bg-[#15110e]/95 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                                        <div className="border-b border-white/10 px-4 py-4">
                                            <p className="font-semibold text-white">{user.fullName}</p>

                                            <p className="mt-1 truncate text-sm text-zinc-500">{user.email}</p>
                                        </div>

                                        <div className="p-2">
                                            <Link
                                                href="/profile"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                                            >
                                                <User size={17} />
                                                Profile
                                            </Link>

                                            <Link
                                                href="/orders"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                                            >
                                                <ShoppingBag size={17} />
                                                My Orders
                                            </Link>

                                            <Link
                                                href="/profile/wishlist"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                                            >
                                                <Heart size={17} />
                                                Wishlist
                                            </Link>

                                            <Link
                                                href="/profile/addresses"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                                            >
                                                <MapPin size={17} />
                                                Addresses
                                            </Link>

                                            <Link
                                                href="/profile/payment-methods"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                                            >
                                                <CreditCard size={17} />
                                                Payment Methods
                                            </Link>

                                            <Link
                                                href="/profile/settings"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                                            >
                                                <Settings size={17} />
                                                Settings
                                            </Link>
                                        </div>

                                        <div className="border-t border-white/10 p-2">
                                            <button
                                                type="button"
                                                onClick={handleLogout}
                                                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-400 hover:bg-red-500/10"
                                            >
                                                <LogOut size={17} />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link href="/login" className="flex h-11 items-center gap-2 rounded-full bg-orange-500 px-6 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">
                                <User size={17} />
                                Login
                            </Link>
                        ))}
                </div>

                <MobileNav />
            </div>
        </header>
    );
}