import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

import type { Dish } from "@/types/dish";

type Props = {
    currentSlug: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function RelatedDishes({
    currentSlug,
}: Props) {
    try {
        const response = await fetch(
            `${API_URL}/api/dishes`,
            {
                cache: "no-store",
            }
        );

        if (!response.ok) return null;

        const result = await response.json();

        if (!result.success || !result.data) return null;

        const dishes: Dish[] = result.data;

        const currentDish = dishes.find(
            (dish) => dish.slug === currentSlug
        );

        if (!currentDish) return null;

        const sameCategory = dishes.filter(
            (dish) =>
                dish.category === currentDish.category &&
                dish.slug !== currentDish.slug
        );

        const others = dishes.filter(
            (dish) =>
                dish.category !== currentDish.category &&
                dish.slug !== currentDish.slug
        );

        const related = [
            ...sameCategory,
            ...others,
        ].slice(0, 4);

        if (related.length === 0) return null;

        return (
            <section className="mt-28">
                <div className="mb-14 flex items-end justify-between">
                    <div>
                        <p className="font-semibold uppercase tracking-[5px] text-orange-500">Recommended</p>

                        <h2 className="mt-3 text-5xl font-black text-white">You May Also Like</h2>
                    </div>

                    <Link href="/menu" className="text-lg font-semibold text-orange-500 transition hover:text-orange-400">
                        View All →
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {related.map((dish) => (
                        <Link
                            key={dish._id}
                            href={`/menu/${dish.slug}`}
                            className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#151515] transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={dish.images[0]}
                                    alt={dish.title}
                                    fill
                                    sizes="(max-width:768px)100vw,(max-width:1280px)50vw,25vw"
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />

                                {dish.bestseller && (
                                    <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
                                        Bestseller
                                    </span>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            </div>

                            <div className="p-7">
                                <p className="text-sm font-medium text-orange-500">{dish.category}</p>

                                <h3 className="mt-2 text-2xl font-bold text-white">{dish.title}</h3>

                                <div className="mt-6 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Star
                                            size={17}
                                            fill="currentColor"
                                            className="text-orange-500"
                                        />

                                        <span className="font-semibold text-white">{dish.rating}</span>
                                    </div>

                                    <span className="text-2xl font-black text-orange-500">₹{dish.price}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        );
    } catch (error) {
        console.error("Failed to load related dishes:", error);
        return null;
    }
}