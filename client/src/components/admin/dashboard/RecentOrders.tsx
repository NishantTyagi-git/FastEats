import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";

const orders = [
    {
        id: "#FE102394",
        customer: "Nishant Tyagi",
        amount: "₹749",
        payment: "Paid",
        status: "Delivered",
    },
    {
        id: "#FE102395",
        customer: "Rohit Sharma",
        amount: "₹499",
        payment: "Paid",
        status: "Preparing",
    },
    {
        id: "#FE102396",
        customer: "Amit Kumar",
        amount: "₹1299",
        payment: "Pending",
        status: "Pending",
    },
    {
        id: "#FE102397",
        customer: "Ananya Singh",
        amount: "₹289",
        payment: "Paid",
        status: "Out for Delivery",
    },
];

function statusColor(status: string) {
    switch (status) {
        case "Delivered":
            return "bg-green-500";
        case "Preparing":
            return "bg-sky-500";
        case "Pending":
            return "bg-amber-500";
        default:
            return "bg-violet-500";
    }
}

export default function RecentOrders() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515]">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div>
                    <h2 className="text-xl font-bold text-white">Recent Orders</h2>
                    <p className="mt-1 text-sm text-zinc-500">Latest customer orders</p>
                </div>

                <Link href="/admin/orders" className="flex items-center gap-2 text-sm font-semibold text-orange-500 transition hover:text-orange-400">
                    View All
                    <ArrowRight size={16} />
                </Link>
            </div>

            <div className="divide-y divide-white/10">
                {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between px-6 py-5 transition hover:bg-white/5">
                        <div>
                            <p className="font-semibold text-white">{order.id}</p>

                            <p className="mt-1 text-sm text-zinc-500">{order.customer}</p>
                        </div>

                        <div className="hidden text-center md:block">
                            <p className="font-semibold text-white">{order.amount}</p>

                            <p className={`mt-1 text-sm ${order.payment === "Paid" ? "text-green-400" : "text-amber-400"}`}>
                                {order.payment}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Circle
                                size={10}
                                fill="currentColor"
                                className={statusColor(order.status)}
                            />

                            <span className="text-sm font-medium text-zinc-300">{order.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}