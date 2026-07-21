"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, UtensilsCrossed, Grid2X2, Users, TicketPercent, BarChart3, Settings, LogOut, } from "lucide-react";

const links = [
    {
        name: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        name: "Orders",
        href: "/admin/orders",
        icon: ShoppingBag,
    },
    {
        name: "Menu",
        href: "/admin/menu",
        icon: UtensilsCrossed,
    },
    {
        name: "Categories",
        href: "/admin/categories",
        icon: Grid2X2,
    },
    {
        name: "Customers",
        href: "/admin/customers",
        icon: Users,
    },
    {
        name: "Coupons",
        href: "/admin/coupons",
        icon: TicketPercent,
    },
    {
        name: "Analytics",
        href: "/admin/analytics",
        icon: BarChart3,
    },
    {
        name: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-white/10 bg-[#111111] lg:flex lg:flex-col">
            <div className="border-b border-white/10 p-8">
                <Link href="/admin" className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-xl font-black text-white">
                        F
                    </div>

                    <div>
                        <h1 className="text-2xl font-black text-white">FastEat</h1>

                        <p className="text-sm text-orange-500">Admin Panel</p>
                    </div>
                </Link>
            </div>

            <nav className="flex-1 space-y-2 p-6">
                {links.map((link) => {
                    const Icon = link.icon;
                    const active = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${active
                                    ? "bg-orange-500 text-white shadow-lg"
                                    : "text-zinc-400 hover:bg-[#1b1b1b] hover:text-white"
                                }`}
                        >
                            <Icon
                                size={22}
                                className={`transition ${active
                                        ? "text-white"
                                        : "group-hover:text-orange-500"
                                    }`}
                            />

                            <span className="font-semibold">{link.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t border-white/10 p-6">
                <button className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-zinc-400 transition hover:bg-red-500/10 hover:text-red-500">
                    <LogOut size={22} />

                    <span className="font-semibold">Logout</span>
                </button>
            </div>
        </aside>
    );
}