"use client";

import { ArrowLeft, Heart, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { Dish } from "@/types/dish";
import EmptyWishlist from "@/components/store/profile/wishlist/EmptyWishlist";
import WishlistCard from "@/components/store/profile/wishlist/WishlistCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type WishlistItem = {
    dishId: Dish;
};

export default function WishlistPage() {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [removingId, setRemovingId] = useState<string | null>(null);

    const fetchWishlist = async () => {
        try {
            const response = await fetch(`${API_URL}/api/wishlist`, {
                credentials: "include",
                cache: "no-store",
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to fetch wishlist."
                );
            }

            setWishlist(result.data?.items || []);
        } catch (error) {
            console.error("Wishlist fetch error:", error);
            setWishlist([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => { fetchWishlist(); }, []);

    const removeFromWishlist = async (dishId: string) => {
        if (removingId) return;

        try {
            setRemovingId(dishId);

            const response = await fetch(
                `${API_URL}/api/wishlist/${dishId}`,
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

            setWishlist((current) =>
                current.filter(
                    (item) => item.dishId._id !== dishId
                )
            );
        } catch (error) {
            console.error("Remove wishlist error:", error);
        } finally {
            setRemovingId(null);
        }
    };

    if (isLoading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#090909] text-white">
                <Loader2
                    size={32}
                    className="animate-spin text-orange-500"
                />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#090909] px-5 pb-24 pt-28 text-white md:px-8">
            <div className="mx-auto max-w-7xl">
                <Link href="/profile" className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-orange-500">
                    <ArrowLeft
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Back to Profile
                </Link>

                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
                            Your Favourites
                        </p>

                        <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
                            Wishlist
                        </h1>

                        <p className="mt-3 max-w-xl leading-7 text-zinc-500">
                            Keep your favourite dishes close and order them whenever you're ready.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                        <Heart
                            size={17}
                            fill="currentColor"
                            className="text-orange-500"
                        />

                        <span>
                            {wishlist.length}{" "}
                            {wishlist.length === 1 ? "item" : "items"}
                        </span>
                    </div>
                </div>

                {wishlist.length > 0 ? (
                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {wishlist.map(({ dishId: dish }) => (
                            <WishlistCard
                                key={dish._id}
                                item={dish}
                                isRemoving={removingId === dish._id}
                                onRemove={removeFromWishlist}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyWishlist />
                )}
            </div>
        </main>
    );
}
