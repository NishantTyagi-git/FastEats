import Link from "next/link";
import { Store, Users, Clock3, Bike, CreditCard, Bell, Shield, Receipt, ChevronRight } from "lucide-react";

const settings = [
    {
        title: "Restaurant",
        description: "Restaurant profile and information",
        href: "/admin/settings/restaurant",
        icon: Store,
    },
    {
        title: "Employees",
        description: "Manage admins, chefs and riders",
        href: "/admin/settings/employees",
        icon: Users,
    },
    {
        title: "Business Hours",
        description: "Opening and closing timings",
        href: "/admin/settings/business-hours",
        icon: Clock3,
    },
    {
        title: "Delivery",
        description: "Delivery fees and service area",
        href: "/admin/settings/delivery",
        icon: Bike,
    },
    {
        title: "Payments",
        description: "Payment methods and gateways",
        href: "/admin/settings/payments",
        icon: CreditCard,
    },
    {
        title: "Notifications",
        description: "Email and push notification settings",
        href: "/admin/settings/notifications",
        icon: Bell,
    },
    {
        title: "Security",
        description: "Password and account security",
        href: "/admin/settings/security",
        icon: Shield,
    },
    {
        title: "Taxes & Fees",
        description: "GST, platform fees and charges",
        href: "/admin/settings/taxes",
        icon: Receipt,
    },
];

export default function SettingsGrid() {
    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {settings.map((item) => (
                <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-3xl border border-white/10 bg-[#151515] p-6 transition hover:border-orange-500/50 hover:-translate-y-1"
                >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
                        <item.icon
                            size={26}
                            className="text-orange-500"
                        />
                    </div>

                    <h2 className="mt-6 text-xl font-bold text-white">{item.title}</h2>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">{item.description}</p>

                    <div className="mt-8 flex items-center justify-end">
                        <ChevronRight
                            size={22}
                            className="text-zinc-500 transition group-hover:text-orange-500 group-hover:translate-x-1"
                        />
                    </div>
                </Link>
            ))}
        </section>
    );
}