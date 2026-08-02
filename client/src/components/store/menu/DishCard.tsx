"use client";

import Image from "next/image";
import { Check, Heart, Star, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useCart } from "@/context/CartContext";
import type { Dish } from "@/types/dish";

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
                console.error("Check wishlist error:", error);
            }
        };

        checkWishlist();
    }, [dish._id]);

    const handleWishlist = async (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
        event.stopPropagation();

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
                        : {
                            body: JSON.stringify({ dishId: dish._id }),
                        }),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                console.error("Wishlist error:", result.message);
                return;
            }

            if (result.success) {
                setIsWishlisted((current) => !current);
            }
        } catch (error) {
            console.error("Wishlist error:", error);
        } finally {
            setIsWishlistLoading(false);
        }
    };

    const handleAddToCart = async (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
        event.stopPropagation();

        if (isAdding || isAdded) return;

        try {
            setIsAdding(true);

            await addToCart(dish._id);

            setIsAdded(true);

            setTimeout(() => {
                setIsAdded(false);
            }, 1500);
        } catch (error) {
            console.error("Failed to add item to cart:", error);
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <Link href={`/menu/${dish.slug}`}>
            <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#151515] transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40">
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={dish.images[0]}
                        alt={dish.title}
                        fill
                        sizes="(max-width:768px)100vw,(max-width:1280px)50vw,25vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {dish.bestseller && (
                        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
                            Bestseller
                        </span>
                    )}

                    <button
                        type="button"
                        onClick={handleWishlist}
                        disabled={isWishlistLoading}
                        className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition ${isWishlisted
                            ? "border-orange-500 bg-orange-500"
                            : "border-white/10 bg-black/50 hover:bg-orange-500"
                            }`}
                    >
                        {isWishlistLoading ? (
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        ) : (
                            <Heart
                                size={18}
                                fill={
                                    isWishlisted
                                        ? "currentColor"
                                        : "none"
                                }
                                className="text-white"
                            />
                        )}
                    </button>
                </div>

                <div className="p-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                {dish.title}
                            </h3>

                            <p className="mt-1 text-sm text-orange-500">
                                {dish.category}
                            </p>
                        </div>

                        <span className="text-2xl font-black text-orange-500">
                            ₹{dish.price}
                        </span>
                    </div>

                    <p className="mt-4 leading-7 text-zinc-400">
                        {dish.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Star
                                size={18}
                                fill="currentColor"
                                className="text-orange-500"
                            />

                            <span className="font-semibold text-white">
                                {dish.rating}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={handleAddToCart}
                            disabled={isAdding || isAdded}
                            className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition duration-300 ${isAdded
                                ? "bg-emerald-500"
                                : "bg-orange-500 hover:bg-orange-600"
                                }`}
                        >
                            {isAdding ? (
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            ) : isAdded ? (
                                <>
                                    <Check size={17} />
                                    Added
                                </>
                            ) : (
                                <>
                                    <ShoppingCart size={17} />
                                    Add
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </article>
        </Link>
    );
}