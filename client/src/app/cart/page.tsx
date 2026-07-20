import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import { cartItems } from "@/data/cart";

export default function CartPage() {

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity,0);

    if (cartItems.length === 0) return <EmptyCart />;

    return (
        <main className="min-h-screen bg-[#0b0b0b] pb-32 pt-32 text-white">
            <div className="mx-auto max-w-7xl px-8">
                <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500"
                >
                    <ArrowLeft size={18} />
                    Continue Shopping
                </Link>

                <div className="mt-8 flex items-end justify-between">
                    <div>
                        <p className="font-semibold uppercase tracking-[5px] text-orange-500">Cart</p>
                        <h1 className="mt-3 text-5xl font-black">Shopping Cart</h1>
                    </div>

                    <span className="rounded-full border border-white/10 bg-[#151515] px-5 py-3 font-semibold text-zinc-300">
                        {cartItems.length} Items
                    </span>
                </div>

                <div className="mt-16 grid gap-10 xl:grid-cols-[2fr_1fr]">
                    <div className="space-y-8">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>

                    <CartSummary subtotal={subtotal} />
                </div>
            </div>
        </main>
    );
}