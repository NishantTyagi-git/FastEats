"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, ChevronLeft, Gift, Heart, LogOut, Menu, Search, Settings, ShoppingCart, User, UserRound, X } from "lucide-react";
import { useState } from "react";

import NavLinks from "./NavLinks";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const { user, isLoading, logout } = useAuth();
    const { cartCount } = useCart();

    const closeMenu = () => {
        setIsOpen(false);
        setShowProfileMenu(false);
    };

    const handleLogout = async () => {
        closeMenu();
        await logout();
    };

    const openProfileMenu = () => {
        setShowProfileMenu(true);
    };

    const closeProfileMenu = () => {
        setShowProfileMenu(false);
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
                className={`fixed right-0 top-0 z-50 flex h-screen w-[320px] max-w-[90vw] flex-col overflow-hidden bg-[#111315] shadow-2xl transition-transform duration-300 lg:hidden ${isOpen
                    ? "translate-x-0"
                    : "translate-x-full"
                    }`}
            >
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b border-white/10 p-6">
                        <Link href="/" onClick={closeMenu}>
                            <Image
                                src="/images/Logo.png"
                                alt="FastEats"
                                width={140}
                                height={45}
                                className="h-11 w-auto"
                                style={{ width: "auto" }}
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
                            <button type="button" className="mb-5 flex w-full items-center gap-3 text-zinc-300 transition hover:text-orange-500">
                                <Search size={20} />
                                Search
                            </button>

                            <Link href="/cart" onClick={closeMenu} className="mb-5 flex items-center gap-3 text-zinc-300 transition hover:text-orange-500">
                                <ShoppingCart size={20} />

                                <span>Cart</span>

                                {cartCount > 0 && (
                                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1.5 text-[10px] font-bold text-white">
                                        {cartCount > 99 ? "99+" : cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {!isLoading && (
                            <div className="mt-auto border-t border-white/10 pt-7">
                                {user ? (
                                    <button type="button" onClick={openProfileMenu} className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-[#181a1c] p-3 text-left transition hover:border-orange-500/30">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                                            {user.fullName.charAt(0).toUpperCase()}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="truncate font-semibold text-white">{user.fullName}</p>

                                            <p className="truncate text-xs text-zinc-500">{user.email}</p>
                                        </div>

                                        <span className="text-lg text-zinc-500 transition group-hover:text-orange-500">
                                            →
                                        </span>
                                    </button>
                                ) : (
                                    <Link href="/login" onClick={closeMenu} className="flex h-12 items-center justify-center gap-3 rounded-xl bg-orange-500 font-semibold text-white transition hover:bg-orange-600">
                                        <User size={19} />
                                        Login
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {user && (
                    <div
                        className={`absolute inset-0 z-20 flex h-full flex-col bg-[#111315] transition-transform duration-300 ${showProfileMenu
                            ? "translate-x-0"
                            : "translate-x-full"
                            }`}
                    >
                        <div className="flex items-center gap-4 border-b border-white/10 p-6">
                            <button
                                type="button"
                                onClick={closeProfileMenu}
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/5 hover:text-white"
                                aria-label="Back"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <div className="min-w-0">
                                <p className="text-lg font-bold text-white">My Account</p>

                                <p className="truncate text-xs text-zinc-500">Manage your FastEats account</p>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="mb-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#181a1c] p-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                                    {user.fullName.charAt(0).toUpperCase()}
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate font-bold text-white">{user.fullName}</p>

                                    <p className="truncate text-sm text-zinc-500">{user.email}</p>
                                </div>
                            </div>

                            <nav className="space-y-2">
                                <Link href="/profile" onClick={closeMenu} className="flex items-center gap-4 rounded-xl px-4 py-4 text-zinc-300 transition hover:bg-white/5 hover:text-orange-500">
                                    <User size={20} />
                                    <span>Profile</span>
                                </Link>

                                <Link href="/profile/orders" onClick={closeMenu} className="flex items-center gap-4 rounded-xl px-4 py-4 text-zinc-300 transition hover:bg-white/5 hover:text-orange-500">
                                    <ShoppingCart size={20} />
                                    <span>Orders</span>
                                </Link>

                                <Link href="/profile/wishlist" onClick={closeMenu} className="flex items-center gap-4 rounded-xl px-4 py-4 text-zinc-300 transition hover:bg-white/5 hover:text-orange-500">
                                    <Heart size={20} />
                                    <span>Wishlist</span>
                                </Link>

                                <Link href="/profile/rewards" onClick={closeMenu} className="flex items-center gap-4 rounded-xl px-4 py-4 text-zinc-300 transition hover:bg-white/5 hover:text-orange-500">
                                    <Gift size={20} />
                                    <span>Rewards</span>
                                </Link>

                                <Link href="/profile/notifications" onClick={closeMenu} className="flex items-center gap-4 rounded-xl px-4 py-4 text-zinc-300 transition hover:bg-white/5 hover:text-orange-500">
                                    <Bell size={20} />
                                    <span>Notifications</span>
                                </Link>

                                <Link href="/profile/settings" onClick={closeMenu} className="flex items-center gap-4 rounded-xl px-4 py-4 text-zinc-300 transition hover:bg-white/5 hover:text-orange-500">
                                    <Settings size={20} />
                                    <span>Settings</span>
                                </Link>
                            </nav>
                        </div>

                        <div className="border-t border-white/10 p-6">
                            <button type="button" onClick={handleLogout} className="flex w-full items-center justify-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 py-3.5 font-semibold text-red-400 transition hover:bg-red-500/10">
                                <LogOut size={18} />
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </aside>
        </>
    );
}