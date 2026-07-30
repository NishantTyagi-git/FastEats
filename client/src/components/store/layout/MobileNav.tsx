"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User, X, LogOut, Settings, Bell, Heart, Gift, UserRound } from "lucide-react";
import { useState } from "react";

import NavLinks from "./NavLinks";
import { useAuth } from "@/context/AuthContext";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const { user, isLoading, logout } = useAuth();

    const closeMenu = () => {
        setIsOpen(false);
        setIsProfileOpen(false);
    };

    const handleLogout = async () => {
        closeMenu();
        await logout();
    };

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="text-white transition hover:text-orange-500 lg:hidden"
                aria-label="Open menu"
            >
                <Menu size={28} />
            </button>

            <div
                onClick={closeMenu}
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${isOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                    }`}
            />

            <aside
                className={`fixed right-0 top-0 z-50 flex h-screen w-[320px] max-w-[90vw] flex-col bg-[#111315] shadow-2xl transition-transform duration-300 lg:hidden ${isOpen
                    ? "translate-x-0"
                    : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b border-white/10 p-6">
                    <Link href="/" onClick={closeMenu}>
                        <Image
                            src="/images/Logo.png"
                            alt="FastEats"
                            width={140}
                            height={45}
                            className="h-11 w-auto"
                            priority
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={closeMenu}
                        className="text-zinc-400 transition hover:text-white"
                        aria-label="Close menu"
                    >
                        <X size={26} />
                    </button>
                </div>

                <div className="flex flex-1 flex-col overflow-y-auto p-7">
                    <nav className="flex flex-col gap-6 text-lg">
                        <NavLinks onClick={closeMenu} />
                    </nav>

                    <div className="mt-8 border-t border-white/10 pt-7">
                        <button type="button" className="mb-5 flex items-center gap-3 text-zinc-300 transition hover:text-orange-500">
                            <Search size={20} />
                            Search
                        </button>

                        <Link href="/cart" onClick={closeMenu} className="mb-5 flex items-center gap-3 text-zinc-300 transition hover:text-orange-500">
                            <ShoppingCart size={20} />
                            Cart
                            <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1.5 text-[10px] font-bold text-white">0</span>
                        </Link>
                    </div>

                    {!isLoading && (
                        <div className="mt-auto border-t border-white/10 pt-7">
                            {user ? (
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setIsProfileOpen((prev) => !prev)}
                                        className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-[#181a1c] p-3 text-left transition hover:border-orange-500/30"
                                    >
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                                            {user.fullName.charAt(0).toUpperCase()}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="truncate font-semibold text-white">{user.fullName}</p>
                                            <p className="truncate text-xs text-zinc-500">{user.email}</p>
                                        </div>

                                        <UserRound size={18} className={`text-zinc-500 transition-transform ${isProfileOpen ? "rotate-180 text-orange-500" : ""}`} />
                                    </button>

                                    {isProfileOpen && (
                                        <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#181a1c]">
                                            <Link href="/profile" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white">
                                                <User
                                                    size={17}
                                                />
                                                Profile
                                            </Link>

                                            <Link href="/profile/orders" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white">
                                                <ShoppingCart
                                                    size={17}
                                                />
                                                Orders
                                            </Link>

                                            <Link href="/profile/wishlist" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white">
                                                <Heart
                                                    size={17}
                                                />
                                                Wishlist
                                            </Link>

                                            <Link href="/profile/rewards" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white">
                                                <Gift
                                                    size={17}
                                                />
                                                Rewards
                                            </Link>

                                            <Link href="/profile/notifications" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white">
                                                <Bell
                                                    size={17}
                                                />
                                                Notifications
                                            </Link>

                                            <Link href="/profile/settings" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white">
                                                <Settings
                                                    size={17}
                                                />
                                                Settings
                                            </Link>

                                            <div className="border-t border-white/10" />

                                            <button type="button" onClick={handleLogout} className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/5">
                                                <LogOut
                                                    size={17}
                                                />
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link href="/login" onClick={closeMenu} className="flex h-12 items-center justify-center gap-3 rounded-xl bg-orange-500 font-semibold text-white transition hover:bg-orange-600">
                                    <User size={19} />
                                    Login
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}