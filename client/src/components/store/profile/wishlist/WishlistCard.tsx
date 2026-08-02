"use client";

import { Dish } from "@/types/dish";
import { Heart, Loader2, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WishlistCard({
    item,
    isRemoving,
    onRemove,
}: {
    item: Dish;
    isRemoving: boolean;
    onRemove: (id: string) => void;
}) {
    return (
        <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#151515] transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {item.bestseller && (
                    <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
                        Bestseller
                    </span>
                )}

                <button
                    type="button"
                    disabled={isRemoving}
                    onClick={() => onRemove(item._id)}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition duration-300 hover:border-red-500/30 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isRemoving ? (
                        <Loader2
                            size={18}
                            className="animate-spin"
                        />
                    ) : (
                        <Heart
                            size={18}
                            fill="currentColor"
                        />
                    )}
                </button>
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h3 className="truncate text-2xl font-bold text-white">
                            {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-orange-500">
                            {item.category}
                        </p>
                    </div>

                    <span className="shrink-0 text-2xl font-black text-orange-500">
                        ₹{item.price}
                    </span>
                </div>

                <p className="mt-4 line-clamp-2 leading-7 text-zinc-400">
                    {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Star
                            size={18}
                            fill="currentColor"
                            className="text-orange-500"
                        />

                        <span className="font-semibold text-white">
                            {item.rating}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link href={`/menu/${item.slug}`} className="flex h-11 items-center justify-center rounded-full border border-white/10 px-4 text-sm font-semibold text-zinc-300 transition duration-300 hover:border-orange-500/40 hover:text-white">
                            View
                        </Link>

                        <button type="button" className="inline-flex h-11 items-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600">
                            <ShoppingCart size={17} />
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}