"use client"

import { Heart } from "lucide-react";
import Link from "next/link";

export default function EmptyWishlist() {
    return (
        <div className="mt-10 rounded-[28px] border border-white/10 bg-[#151515] px-6 py-24 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/10">
                <Heart size={32} className="text-orange-500" />
            </div>

            <h2 className="mt-7 text-2xl font-bold text-white">
                Your wishlist is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md leading-7 text-zinc-500">
                You haven't saved any dishes yet. Explore the menu and tap the heart to save your favourites.
            </p>

            <Link href="/menu" className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-7 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600">
                Explore Menu
            </Link>
        </div>
    );
}