"use client";

import { Check, Clock3, Flame, Heart, ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";

import QuantitySelector from "./QuantitySelector";
import type { Dish } from "@/types/dish";
import { useCart } from "@/context/CartContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Props = {
    dish: Dish;
};

export default function DishInfo({ dish }: Props) {
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [wishlistLoading, setWishlistLoading] = useState(false);

    const [status, setStatus] = useState<"idle" | "adding" | "success" | "error">("idle");

    const { addToCart } = useCart();

    useEffect(() => {
        const checkWishlist = async () => {
            try {
                const response = await fetch(`${API_URL}/api/wishlist`, {
                    credentials: "include",
                });

                if (!response.ok) return;

                const result = await response.json();

                const items = result.data?.items ?? [];

                setIsWishlisted(
                    items.some(
                        (item: { dishId: string | { _id: string } }) =>
                            String(
                                typeof item.dishId === "string"
                                    ? item.dishId
                                    : item.dishId._id
                            ) === String(dish._id)
                    )
                );
            } catch (error) {
                console.error("Check wishlist error:", error);
            }
        };

        checkWishlist();
    }, [dish._id]);

    const handleWishlist = async () => {
        if (wishlistLoading) return;

        try {
            setWishlistLoading(true);

            if (isWishlisted) {
                const response = await fetch(
                    `${API_URL}/api/wishlist/${dish._id}`,
                    {
                        method: "DELETE",
                        credentials: "include",
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to remove from wishlist");
                }

                setIsWishlisted(false);
            } else {
                const response = await fetch(`${API_URL}/api/wishlist`, {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ dishId: dish._id }),
                });

                if (!response.ok) throw new Error("Failed to add to wishlist");

                setIsWishlisted(true);
            }
        } catch (error) {
            console.error("Wishlist error:", error);
        } finally {
            setWishlistLoading(false);
        }
    };

    const handleAddToCart = async () => {
        if (status === "adding") return;

        try {
            setStatus("adding");

            await addToCart(dish._id, quantity);

            setStatus("success");

            setTimeout(() => {
                setStatus("idle");
            }, 1500);
        } catch (error) {
            console.error("Add to cart failed:", error);

            setStatus("error");

            setTimeout(() => {
                setStatus("idle");
            }, 2000);
        }
    };

    const buttonContent = {
        idle: (
            <>
                <ShoppingCart size={19} />
                Add To Cart
            </>
        ),

        adding: (
            <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Adding...
            </>
        ),

        success: (
            <>
                <Check size={19} />
                Added to Cart
            </>
        ),

        error: <>Try Again</>,
    };

    return (
        <div>
            <div className="flex items-start justify-between gap-5">
                <div>
                    <p className="font-semibold text-orange-500">
                        {dish.category}
                    </p>

                    <h1 className="mt-3 text-5xl font-black text-white">
                        {dish.title}
                    </h1>
                </div>

                <button
                    type="button"
                    onClick={handleWishlist}
                    disabled={wishlistLoading}
                    aria-label={
                        isWishlisted
                            ? `Remove ${dish.title} from wishlist`
                            : `Add ${dish.title} to wishlist`
                    }
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition ${isWishlisted
                        ? "border-orange-500/40 bg-orange-500/10 text-orange-500"
                        : "border-white/10 bg-white/5 text-zinc-400 hover:border-orange-500/40 hover:text-orange-500"
                        }`}
                >
                    <Heart
                        size={21}
                        fill={isWishlisted ? "currentColor" : "none"}
                        className={wishlistLoading ? "animate-pulse" : ""}
                    />
                </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                    <Star
                        size={18}
                        fill="currentColor"
                        className="text-orange-500"
                    />

                    <span>{dish.rating}</span>
                </div>

                <div className="flex items-center gap-2">
                    <Clock3 size={18} />
                    {dish.preparationTime}
                </div>

                <div className="flex items-center gap-2">
                    <Flame size={18} />
                    {dish.spicy}
                </div>
            </div>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
                {dish.description}
            </p>

            <h2 className="mt-10 text-4xl font-black text-orange-500">
                ₹{dish.price}
            </h2>

            <div className="mt-10">
                <QuantitySelector
                    quantity={quantity}
                    onChange={setQuantity}
                />
            </div>

            <button
                type="button"
                onClick={handleAddToCart}
                disabled={status === "adding"}
                className={`mt-10 inline-flex h-14 items-center gap-3 rounded-full px-10 font-semibold text-white transition ${status === "success"
                    ? "bg-green-600"
                    : status === "error"
                        ? "bg-red-500"
                        : "bg-orange-500 hover:bg-orange-600"
                    }`}
            >
                {buttonContent[status]}
            </button>
        </div>
    );
}