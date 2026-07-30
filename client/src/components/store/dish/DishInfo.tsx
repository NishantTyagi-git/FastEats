"use client";

import { Check, Clock3, Flame, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

import QuantitySelector from "./QuantitySelector";
import type { Dish } from "@/types/dish";
import { useCart } from "@/context/CartContext";

type Props = {
    dish: Dish;
};

export default function DishInfo({ dish }: Props) {
    const [quantity, setQuantity] = useState(1);

    const [status, setStatus] = useState<"idle" | "adding" | "success" | "error">("idle");

    const { addToCart } = useCart();

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
            <p className="font-semibold text-orange-500">{dish.category}</p>

            <h1 className="mt-3 text-5xl font-black text-white">{dish.title}</h1>

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

            <p className="mt-8 text-lg leading-8 text-zinc-400">{dish.description}</p>

            <h2 className="mt-10 text-4xl font-black text-orange-500">₹{dish.price}</h2>

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