"use client";

import Link from "next/link";
import { ArrowRight, Clock3, Loader2 } from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CheckoutSummary() {
    const { cart, isLoading } = useCart();

    if (isLoading || !cart) {
        return (
            <aside className="sticky top-28 self-start rounded-[32px] border border-white/10 bg-[#151515] p-8">
                <div className="flex min-h-[300px] items-center justify-center">
                    <Loader2
                        size={30}
                        className="animate-spin text-orange-500"
                    />
                </div>
            </aside>
        );
    }

    const subtotal = cart.items.reduce((sum, item) => sum + item.dishId.price * item.quantity, 0);
    const delivery = 49;
    const tax = 62;
    const total = subtotal + delivery + tax;

    return (
        <aside className="sticky top-28 self-start rounded-[32px] border border-white/10 bg-[#151515] p-8">
            <p className="font-semibold uppercase tracking-[5px] text-orange-500">Summary</p>

            <h2 className="mt-3 text-4xl font-black text-white">Order Summary</h2>

            <div className="mt-10 space-y-6">
                {cart.items.map((item) => {
                    const dish = item.dishId;

                    return (
                        <div key={dish._id} className="flex items-center justify-between gap-6">
                            <div className="min-w-0">
                                <h3 className="truncate font-semibold text-white">{dish.title}</h3>

                                <p className="mt-1 text-sm text-zinc-500">Qty × {item.quantity}</p>
                            </div>

                            <span className="shrink-0 font-bold text-white">₹{dish.price * item.quantity}</span>
                        </div>
                    );
                })}
            </div>

            <div className="my-8 h-px bg-white/10" />

            <div className="space-y-5">
                <div className="flex justify-between">
                    <span className="text-zinc-400">Subtotal</span>

                    <span className="font-semibold text-white">₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-zinc-400">Delivery Fee</span>

                    <span className="font-semibold text-white">₹{delivery}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-zinc-400">GST & Taxes</span>

                    <span className="font-semibold text-white">₹{tax}</span>
                </div>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <div>
                <p className="text-zinc-400">Total Amount</p>

                <h3 className="mt-2 text-5xl font-black text-orange-500">₹{total}</h3>
            </div>

            <div className="mt-8 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-orange-500/5 p-6">
                <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white">
                        <Clock3 size={22} />
                    </div>

                    <div>
                        <h3 className="font-bold text-white">Estimated Delivery</h3>

                        <p className="mt-2 text-sm text-zinc-400">25–35 mins</p>

                        <p className="mt-1 text-xs text-zinc-500">Freshly prepared after order confirmation.</p>
                    </div>
                </div>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <Link href="/order-success" className="flex h-16 w-full items-center justify-center gap-3 rounded-full bg-orange-500 text-lg font-bold text-white shadow-[0_15px_35px_rgba(249,115,22,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600">
                Place Order
                <ArrowRight size={20} />
            </Link>

            <p className="mt-5 text-center text-xs leading-6 text-zinc-500">
                By placing your order you agree to our Terms & Conditions and Privacy Policy.
            </p>
        </aside>
    );
}