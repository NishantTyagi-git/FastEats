"use client";

import Image from "next/image";
import { Check, Heart, Plus, Star } from "lucide-react";
import { useState } from "react";

import type { Dish } from "@/types/dish";
import { useCart } from "@/context/CartContext";

type Props = {
    dish: Dish;
};

export default function DishCard({ dish }: Props) {
    const { addToCart } = useCart();

    const [isAdding, setIsAdding] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = async () => {
        if (isAdding || isAdded) return;

        try {
            setIsAdding(true);

            await addToCart(dish._id);

            setIsAdded(true);

            setTimeout(() => {
                setIsAdded(false);
            }, 1500);
        } catch (error) {
            console.error("Add to cart error:", error);
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#181818] transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-[0_25px_50px_rgba(0,0,0,.35)]">
            <div className="relative overflow-hidden">
                <Image
                    src={dish.images[0]}
                    alt={dish.title}
                    width={500}
                    height={350}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <button
                    type="button"
                    aria-label={`Add ${dish.title} to wishlist`}
                    className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-orange-500"
                >
                    <Heart
                        size={19}
                        className="text-white"
                    />
                </button>

                {dish.bestseller && (
                    <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
                        Bestseller
                    </span>
                )}
            </div>

            <div className="p-7">
                <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[3px] text-orange-500">{dish.category}</p>

                        <h3 className="text-2xl font-bold text-white">{dish.title}</h3>
                    </div>

                    <span className="shrink-0 text-2xl font-black text-orange-500">₹{dish.price}</span>
                </div>

                <p className="line-clamp-2 leading-8 text-zinc-400">{dish.description}</p>

                <div className="mt-7 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Star
                            size={18}
                            fill="currentColor"
                            className="text-orange-500"
                        />

                        <span className="font-semibold text-white">{dish.rating}</span>

                        <span className="text-sm text-zinc-500">Rating</span>
                    </div>

                    <button
                        type="button"
                        onClick={handleAddToCart}
                        disabled={isAdding || isAdded}
                        aria-label={
                            isAdded
                                ? `${dish.title} added to cart`
                                : `Add ${dish.title} to cart`
                        }
                        className={`flex h-12 items-center justify-center rounded-full font-semibold text-white transition-all duration-300 ${isAdded
                            ? "w-28 bg-emerald-500"
                            : "w-12 bg-orange-500 hover:w-28 hover:bg-orange-600"
                            }`}
                    >
                        {isAdding ? (
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        ) : isAdded ? (
                            <>
                                <Check size={19} />

                                <span className="ml-2 text-sm">Added</span>
                            </>
                        ) : (
                            <Plus size={22} />
                        )}
                    </button>
                </div>
            </div>
        </article>
    );
}