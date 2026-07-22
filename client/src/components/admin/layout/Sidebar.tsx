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
        <aside className="fixed left-0 top-0 hidden h-screen w-72 overflow-hidden border-r border-white/10 bg-[#111111] lg:flex lg:flex-col">
            <div className="px-6 pt-6 pb-5">
                <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/15 to-orange-500/5 px-6 py-6">
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-300">Revenue Today</p>

                    <h2 className="mt-3 text-4xl font-black text-white">₹18,420</h2>

                    <div className="mt-5 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-zinc-500">Orders</p>

                            <p className="text-lg font-bold text-white">124</p>
                        </div>

                        <div>
                            <p className="text-xs text-zinc-500">Avg Order</p>

                            <p className="text-lg font-bold text-white">₹148</p>
                        </div>
                    </div>

                    <div className="mt-5 rounded-xl bg-black/20 px-4 py-3">
                        <p className="text-sm font-medium text-green-400">▲ +12.4% from yesterday</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 pb-6">
                <div className="space-y-2">
                    {links.map((link) => {
                        const Icon = link.icon;

                        const active =
                            pathname === link.href ||
                            (link.href !== "/admin" &&
                                pathname.startsWith(link.href));

                        return (

                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300 ${active
                                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                                    : "text-zinc-400 hover:bg-[#1a1a1a] hover:text-white"
                                    }`}
                            >
                                <Icon
                                    size={20}
                                    className={`transition ${active ? "text-white" : "group-hover:text-orange-500"}`} />

                                <span className="text-[15px] font-semibold">{link.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </aside >
    );
}