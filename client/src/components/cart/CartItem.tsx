"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

type Props = {
    id: number;
    slug: string;
    title: string;
    image: string;
    category: string;
    price: number;
    quantity: number;
};

export default function CartItem({
    slug,
    title,
    image,
    category,
    price,
    quantity,
}: Props) {
    return (
        <article className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-[#151515] p-6 transition hover:border-orange-500/30 md:flex-row">
            <Link
                href={`/menu/${slug}`}
                className="relative h-36 w-full overflow-hidden rounded-2xl md:w-44"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    loading="eager"
                    priority
                    sizes="176px"
                    className="object-cover transition duration-500 hover:scale-110"
                />
            </Link>

            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <p className="text-sm font-medium text-orange-500">{category}</p>

                    <Link href={`/menu/${slug}`}>
                        <h3 className="mt-2 text-2xl font-bold text-white transition hover:text-orange-500">{title}</h3>
                    </Link>

                    <p className="mt-3 text-3xl font-black text-orange-500">₹{price}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center rounded-full border border-white/10 bg-[#1b1b1b]">
                        <button className="flex h-12 w-12 items-center justify-center transition hover:text-orange-500">
                            <Minus size={18} />
                        </button>

                        <span className="w-12 text-center text-lg font-bold text-white">
                            {quantity}
                        </span>

                        <button className="flex h-12 w-12 items-center justify-center transition hover:text-orange-500">
                            <Plus size={18} />
                        </button>
                    </div>

                    <button className="inline-flex items-center gap-2 text-sm font-medium text-red-400 transition hover:text-red-500">
                        <Trash2 size={18} />
                        Remove
                    </button>
                </div>
            </div>
        </article>
    );
}