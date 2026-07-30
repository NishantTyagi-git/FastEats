"use client";

import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

import CartItem from "@/components/store/cart/CartItem";
import CartSummary from "@/components/store/cart/CartSummary";
import EmptyCart from "@/components/store/cart/EmptyCart";
import type { Cart } from "@/types/cart";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CartPage() {
    const [cart, setCart] = useState<Cart | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch(`${API_URL}/api/cart`, {
                    credentials: "include",
                    cache: "no-store",
                });

                if (!response.ok) {
                    setCart(null);
                    return;
                }

                const result = await response.json();

                if (!result.success || !result.data) {
                    setCart(null);
                    return;
                }

                setCart(result.data);
            } catch (error) {
                console.error("Failed to fetch cart:", error);
                setCart(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCart();
    }, []);

    if (isLoading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] text-white">
                <Loader2
                    size={32}
                    className="animate-spin text-orange-500"
                />
            </main>
        );
    }

    if (!cart || cart.items.length === 0) return <EmptyCart />;

    const subtotal = cart.items.reduce((total, item) => total + item.dishId.price * item.quantity, 0);

    return (
        <main className="min-h-screen bg-[#0b0b0b] pb-32 pt-32 text-white">
            <div className="mx-auto max-w-7xl px-8">
                <Link href="/menu" className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500">
                    <ArrowLeft size={18} />
                    Continue Shopping
                </Link>

                <div className="mt-8 flex items-end justify-between">
                    <div>
                        <p className="font-semibold uppercase tracking-[5px] text-orange-500">Cart</p>

                        <h1 className="mt-3 text-5xl font-black">Shopping Cart</h1>
                    </div>

                    <span className="rounded-full border border-white/10 bg-[#151515] px-5 py-3 font-semibold text-zinc-300">
                        {cart.items.reduce((total, item) => total + item.quantity, 0)}{" "} Items
                    </span>
                </div>

                <div className="mt-16 grid gap-10 xl:grid-cols-[2fr_1fr]">
                    <div className="space-y-8">
                        {cart.items.map((item) => (<CartItem key={item.dishId._id} item={item} />))}
                    </div>

                    <CartSummary subtotal={subtotal} />
                </div>
            </div>
        </main>
    );
}