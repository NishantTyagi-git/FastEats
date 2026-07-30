"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, Loader2 } from "lucide-react";
import { useState } from "react";

import type { CartItem as CartItemType } from "@/types/cart";
import { useCart } from "@/context/CartContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Props = {
    item: CartItemType;
    onChange: () => Promise<void>;
};

export default function CartItem({
    item,
    onChange,
}: Props) {
    const { dishId: dish, quantity } = item;

    const { refreshCart } = useCart();

    const [isUpdating, setIsUpdating] = useState(false);

    const updateQuantity = async (newQuantity: number) => {
        if (isUpdating) return;

        try {
            setIsUpdating(true);

            if (newQuantity === 0) {
                const response = await fetch(
                    `${API_URL}/api/cart/${dish._id}`,
                    {
                        method: "DELETE",
                        credentials: "include",
                    }
                );

                const result = await response.json();

                if (!response.ok || !result.success) {
                    throw new Error(
                        result.message || "Failed to remove item."
                    );
                }
            } else {
                const response = await fetch(
                    `${API_URL}/api/cart/${dish._id}`,
                    {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include",
                        body: JSON.stringify({
                            quantity: newQuantity,
                        }),
                    }
                );

                const result = await response.json();

                if (!response.ok || !result.success) {
                    throw new Error(
                        result.message || "Failed to update quantity."
                    );
                }
            }

            await onChange();

            await refreshCart();
        } catch (error) {
            console.error("Cart update error:", error);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <article className={`flex flex-col gap-6 rounded-[28px] border border-white/10 bg-[#151515] p-6 transition hover:border-orange-500/30 md:flex-row ${isUpdating ? "opacity-60" : ""}`}>
            <Link href={`/menu/${dish.slug}`} className="relative h-36 w-full overflow-hidden rounded-2xl md:w-44">
                <Image
                    src={dish.images[0]}
                    alt={dish.title}
                    fill
                    sizes="176px"
                    className="object-cover transition duration-500 hover:scale-110"
                />
            </Link>

            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <p className="text-sm font-medium text-orange-500">{dish.category}</p>

                    <Link href={`/menu/${dish.slug}`}>
                        <h3 className="mt-2 text-2xl font-bold text-white transition hover:text-orange-500">{dish.title}</h3>
                    </Link>

                    <p className="mt-3 text-3xl font-black text-orange-500">₹{dish.price}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center rounded-full border border-white/10 bg-[#1b1b1b]">
                        <button
                            type="button"
                            disabled={isUpdating}
                            onClick={() => updateQuantity(quantity - 1)}
                            className="flex h-12 w-12 items-center justify-center transition hover:text-orange-500 disabled:cursor-not-allowed"
                            aria-label={`Decrease ${dish.title} quantity`}
                        >
                            <Minus size={18} />
                        </button>

                        <span className="flex w-12 items-center justify-center text-lg font-bold text-white">
                            {isUpdating ? (
                                <Loader2
                                    size={18}
                                    className="animate-spin text-orange-500"
                                />
                            ) : (
                                quantity
                            )}
                        </span>

                        <button
                            type="button"
                            disabled={isUpdating}
                            onClick={() => updateQuantity(quantity + 1)}
                            className="flex h-12 w-12 items-center justify-center transition hover:text-orange-500 disabled:cursor-not-allowed"
                            aria-label={`Increase ${dish.title} quantity`}
                        >
                            <Plus size={18} />
                        </button>
                    </div>

                    <button
                        type="button"
                        disabled={isUpdating}
                        onClick={() => updateQuantity(0)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-red-400 transition hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <Trash2 size={18} />
                        Remove
                    </button>
                </div>
            </div>
        </article>
    );
}