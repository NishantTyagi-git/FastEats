import { ShoppingBag, IndianRupee, UserPlus, UtensilsCrossed } from "lucide-react";

const activities = [
    {
        title: "New Order Received",
        subtitle: "Order #1028 • Paneer Tikka Pizza",
        time: "2 min ago",
        icon: ShoppingBag,
    },
    {
        title: "Payment Received",
        subtitle: "₹1,240 via UPI",
        time: "12 min ago",
        icon: IndianRupee,
    },
    {
        title: "New Customer Registered",
        subtitle: "Rahul Sharma joined",
        time: "28 min ago",
        icon: UserPlus,
    },
    {
        title: "Menu Item Updated",
        subtitle: "Veg Burger price changed",
        time: "1 hour ago",
        icon: UtensilsCrossed,
    },
    {
        title: "New Order Received",
        subtitle: "Order #1027 • Brownie",
        time: "2 hours ago",
        icon: ShoppingBag,
    },
];

export default function RecentActivity() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">Recent Activity</h2>

                <p className="mt-1 text-zinc-500">Latest restaurant updates</p>
            </div>

            <div className="space-y-5">
                {activities.map((activity) => (
                    <div key={`${activity.title}-${activity.time}`} className="flex items-center gap-4 rounded-2xl bg-[#111111] p-4 transition hover:border hover:border-orange-500/40">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                            <activity.icon
                                size={22}
                                className="text-orange-500"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-semibold text-white">{activity.title}</h3>

                            <p className="mt-1 text-sm text-zinc-500">{activity.subtitle}</p>
                        </div>

                        <span className="text-sm text-zinc-500">{activity.time}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}