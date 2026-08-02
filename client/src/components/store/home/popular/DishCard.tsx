"use client";

import Image from "next/image";
import { Check, Heart, Plus, Star } from "lucide-react";
import { useEffect, useState } from "react";

import type { Dish } from "@/types/dish";
import { useCart } from "@/context/CartContext";

type Props = {
    dish: Dish;
};

type WishlistItem = {
    dishId:
    | string
    | {
        _id: string;
    };
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function DishCard({ dish }: Props) {
    const { addToCart } = useCart();

    const [isAdding, setIsAdding] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isWishlistLoading, setIsWishlistLoading] = useState(false);

    useEffect(() => {
        const checkWishlist = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/api/wishlist`,
                    {
                        credentials: "include",
                    }
                );

                if (!response.ok) return;

                const result = await response.json();

                if (!result.success) return;

                const items: WishlistItem[] = result.data?.items ?? [];

                const exists = items.some((item) => {
                    if (typeof item.dishId === "string") {
                        return item.dishId === dish._id;
                    }

                    return item.dishId?._id === dish._id;
                });

                setIsWishlisted(exists);
            } catch (error) {
                console.error(
                    "Check wishlist error:",
                    error
                );
            }
        };

        checkWishlist();
    }, [dish._id]);

    const handleWishlist = async () => {
        if (isWishlistLoading) return;

        try {
            setIsWishlistLoading(true);

            const response = await fetch(
                isWishlisted
                    ? `${API_URL}/api/wishlist/${dish._id}`
                    : `${API_URL}/api/wishlist`,
                {
                    method: isWishlisted ? "DELETE" : "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    ...(isWishlisted
                        ? {}
                        : { body: JSON.stringify({ dishId: dish._id }) }),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                console.error(
                    "Wishlist error:",
                    result.message
                );

                return;
            }

            if (result.success) {
                setIsWishlisted(!isWishlisted);
            }
        } catch (error) {
            console.error("Wishlist error:", error);
        } finally {
            setIsWishlistLoading(false);
        }
    };

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
                    onClick={handleWishlist}
                    disabled={isWishlistLoading}
                    className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-lg transition-all duration-300 hover:scale-105 ${isWishlisted
                        ? "border-orange-500/30 bg-orange-500"
                        : "border-white/10 bg-black/40 hover:bg-orange-500"
                        }`}
                >
                    {isWishlistLoading ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                        <Heart
                            size={19}
                            fill={isWishlisted ? "currentColor" : "none"}
                            className="text-white"
                        />
                    )}
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
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[3px] text-orange-500">
                            {dish.category}
                        </p>

                        <h3 className="text-2xl font-bold text-white">
                            {dish.title}
                        </h3>
                    </div>

                    <span className="shrink-0 text-2xl font-black text-orange-500">
                        ₹{dish.price}
                    </span>
                </div>

                <p className="line-clamp-2 leading-8 text-zinc-400">
                    {dish.description}
                </p>

                <div className="mt-7 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Star
                            size={18}
                            fill="currentColor"
                            className="text-orange-500"
                        />

                        <span className="font-semibold text-white">
                            {dish.rating}
                        </span>

                        <span className="text-sm text-zinc-500">
                            Rating
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={handleAddToCart}
                        disabled={isAdding || isAdded}
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

                                <span className="ml-2 text-sm">
                                    Added
                                </span>
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