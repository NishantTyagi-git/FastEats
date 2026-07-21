import { User, MapPin, CreditCard, Package, Heart, Bell, Settings } from "lucide-react";

import ProfileMenuItem from "./ProfileMenuItem";

const menuItems = [
    {
        href: "/profile/personal-info",
        icon: User,
        title: "Personal Information",
        subtitle: "Update your name, email and phone",
        color: "text-sky-500",
        bg: "bg-sky-500/10",
    },
    {
        href: "/profile/addresses",
        icon: MapPin,
        title: "Saved Addresses",
        subtitle: "Manage delivery locations",
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
    {
        href: "/profile/payment-methods",
        icon: CreditCard,
        title: "Payment Methods",
        subtitle: "Cards, UPI & wallets",
        color: "text-violet-500",
        bg: "bg-violet-500/10",
    },
    {
        href: "/profile/orders",
        icon: Package,
        title: "My Orders",
        subtitle: "Track and reorder previous meals",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
    {
        href: "/profile/wishlist",
        icon: Heart,
        title: "Wishlist",
        subtitle: "Your favourite dishes",
        color: "text-red-500",
        bg: "bg-red-500/10",
    },
    {
        href: "/profile/notifications",
        icon: Bell,
        title: "Notifications",
        subtitle: "Offers and order updates",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
    },
    {
        href: "/profile/settings",
        icon: Settings,
        title: "Settings",
        subtitle: "Privacy, language & preferences",
        color: "text-zinc-300",
        bg: "bg-zinc-700/30",
    },
];

export default function ProfileMenu() {
    return (
        <section className="mt-12">
            <div className="mb-6">
                <p className="font-semibold uppercase tracking-[5px] text-orange-500">Account</p>

                <h2 className="mt-2 text-4xl font-black text-white">Manage Your Account</h2>
            </div>

            <div className="space-y-5">
                {menuItems.map((item) => (
                    <ProfileMenuItem key={item.href} {...item} />
                ))}
            </div>
        </section>
    );
}