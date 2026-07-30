"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import type { CartItem as CartItemType } from "@/types/cart";

type Props = {
    item: CartItemType;
};

export default function CartItem({ item }: Props) {
    const { dishId: dish, quantity } = item;

    return (
        <article className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-[#151515] p-6 transition hover:border-orange-500/30 md:flex-row">
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
                        <button type="button" className="flex h-12 w-12 items-center justify-center transition hover:text-orange-500">
                            <Minus size={18} />
                        </button>

                        <span className="w-12 text-center text-lg font-bold text-white">{quantity}</span>

                        <button type="button" className="flex h-12 w-12 items-center justify-center transition hover:text-orange-500">
                            <Plus size={18} />
                        </button>
                    </div>

                    <button type="button" className="inline-flex items-center gap-2 text-sm font-medium text-red-400 transition hover:text-red-500">
                        <Trash2 size={18} />
                        Remove
                    </button>
                </div>
            </div>
        </article>
    );
}