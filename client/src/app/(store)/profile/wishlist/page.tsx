"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

type WishlistItem = {
    id: string;
    slug: string;
    images: string[];
    title: string;
    category: string;
    description: string;
    price: number;
    rating: number;
    bestseller?: boolean;
};

const initialWishlist: WishlistItem[] = [
    {
        id: "1",
        slug: "chicken-biryani",
        images: ["/images/dishes/biryani.png"],
        title: "Chicken Biryani",
        category: "Biryani",
        description:
            "Fragrant basmati rice cooked with tender chicken in aromatic spices.",
        price: 399,
        rating: 4.9,
        bestseller: true,
    },
    {
        id: "2",
        slug: "paneer-tikka",
        images: ["/images/dishes/paneer-tikka.png"],
        title: "Paneer Tikka",
        category: "North Indian",
        description:
            "Smoky grilled cottage cheese marinated in spiced yogurt and herbs.",
        price: 279,
        rating: 4.8,
    },
    {
        id: "3",
        slug: "chole-bhature",
        images: ["/images/dishes/chole-bhature.png"],
        title: "Chole Bhature",
        category: "Punjabi",
        description:
            "Spicy chickpea curry served with fluffy fried bread.",
        price: 149,
        rating: 4.6,
    },
];

export default function WishlistPage() {
    const [wishlist, setWishlist] =
        useState<WishlistItem[]>(initialWishlist);

    const removeFromWishlist = (id: string) => {
        setWishlist((current) =>
            current.filter((item) => item.id !== id)
        );
    };

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
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">Your Favourites</p>

                        <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">Wishlist</h1>

                        <p className="mt-3 max-w-xl leading-7 text-zinc-500">Keep your favourite dishes close and order them whenever you're ready.</p>
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
                        {wishlist.map((item) => (
                            <WishlistCard
                                key={item.id}
                                item={item}
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

function WishlistCard({
    item,
    onRemove,
}: {
    item: WishlistItem;
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
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.title} from wishlist`}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition duration-300 hover:border-red-500/30 hover:bg-red-500"
                >
                    <Heart
                        size={18}
                        fill="currentColor"
                    />
                </button>
            </div>

            <div className="p-6">

                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h3 className="truncate text-2xl font-bold text-white">{item.title}</h3>

                        <p className="mt-1 text-sm text-orange-500">{item.category}</p>
                    </div>

                    <span className="shrink-0 text-2xl font-black text-orange-500">₹{item.price}</span>
                </div>

                <p className="mt-4 line-clamp-2 leading-7 text-zinc-400">{item.description}</p>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Star
                            size={18}
                            fill="currentColor"
                            className="text-orange-500"
                        />

                        <span className="font-semibold text-white">{item.rating}</span>
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

function EmptyWishlist() {
    return (
        <div className="mt-10 rounded-[28px] border border-white/10 bg-[#151515] px-6 py-24 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/10">
                <Heart
                    size={32}
                    className="text-orange-500"
                />
            </div>

            <h2 className="mt-7 text-2xl font-bold text-white">Your wishlist is empty</h2>

            <p className="mx-auto mt-3 max-w-md leading-7 text-zinc-500">You haven't saved any dishes yet. Explore the menu and tap the heart to save your favourites.</p>

            <Link href="/menu" className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-7 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600">
                Explore Menu
            </Link>
        </div>
    );
}