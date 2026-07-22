"use client";

import Link from "next/link";
import { Eye, ArrowUpRight } from "lucide-react";

const orders = [
    {
        id: "FE102394",
        customer: "Nishant Tyagi",
        amount: 749,
        payment: "Paid",
        status: "Delivered",
        time: "2 mins ago",
    },
    {
        id: "FE102395",
        customer: "Rahul Sharma",
        amount: 529,
        payment: "Paid",
        status: "Preparing",
        time: "8 mins ago",
    },
    {
        id: "FE102396",
        customer: "Aman Gupta",
        amount: 1299,
        payment: "Pending",
        status: "Pending",
        time: "15 mins ago",
    },
    {
        id: "FE102397",
        customer: "Ananya Singh",
        amount: 389,
        payment: "Paid",
        status: "Out for Delivery",
        time: "22 mins ago",
    },
    {
        id: "FE102398",
        customer: "Rohit Verma",
        amount: 899,
        payment: "Refunded",
        status: "Cancelled",
        time: "1 hour ago",
    },
];

function paymentClasses(payment: string) {
    switch (payment) {
        case "Paid":
            return "bg-green-500/10 text-green-400";
        case "Pending":
            return "bg-amber-500/10 text-amber-400";
        default:
            return "bg-red-500/10 text-red-400";
    }
}

function statusClasses(status: string) {
    switch (status) {
        case "Delivered":
            return "bg-green-500/10 text-green-400";
        case "Preparing":
            return "bg-sky-500/10 text-sky-400";
        case "Pending":
            return "bg-amber-500/10 text-amber-400";
        case "Cancelled":
            return "bg-red-500/10 text-red-400";
        default:
            return "bg-violet-500/10 text-violet-400";
    }
}

export default function OrdersTable() {
    return (
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#151515]">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10 text-left">
                            <th className="px-6 py-5 text-sm font-semibold text-zinc-500">Order</th>

                            <th className="px-6 py-5 text-sm font-semibold text-zinc-500">Customer</th>

                            <th className="px-6 py-5 text-sm font-semibold text-zinc-500">Amount</th>

                            <th className="px-6 py-5 text-sm font-semibold text-zinc-500">Payment</th>

                            <th className="px-6 py-5 text-sm font-semibold text-zinc-500">Status</th>

                            <th className="px-6 py-5 text-sm font-semibold text-zinc-500">Time</th>

                            <th className="px-6 py-5 text-right text-sm font-semibold text-zinc-500">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b border-white/5 transition hover:bg-white/5">
                                <td className="px-6 py-5">
                                    <p className="font-semibold text-white">#{order.id}</p>
                                </td>

                                <td className="px-6 py-5 text-zinc-300">{order.customer}</td>

                                <td className="px-6 py-5 font-semibold text-white">₹{order.amount}</td>

                                <td className="px-6 py-5">
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${paymentClasses(order.payment)}`}>
                                        {order.payment}
                                    </span>
                                </td>

                                <td className="px-6 py-5">
                                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>

                                <td className="px-6 py-5 text-zinc-500">{order.time}</td>

                                <td className="px-6 py-5">
                                    <div className="flex justify-end">
                                        <Link
                                            href={`/admin/orders/${order.id}`}
                                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition hover:border-orange-500 hover:text-orange-500"
                                        >
                                            <Eye size={18} />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-6 py-5">
                <p className="text-sm text-zinc-500">Showing
                    <span className="text-white"> 5</span> of{" "}
                    <span className="text-white">124</span> orders
                </p>

                <button className="flex items-center gap-2 font-semibold text-orange-500 transition hover:text-orange-400">
                    View All Orders
                    <ArrowUpRight size={16} />
                </button>
            </div>
        </section>
    );
}