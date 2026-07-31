"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon, Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import type { Dish } from "@/types/dish";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const categories = [
    "All",
    "Starters",
    "Main Course",
    "Desserts",
    "Drinks",
];

type GalleryItem = {
    id: string;
    src: string;
    title: string;
    category: string;
    slug: string;
};

export default function GalleryPage() {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await fetch(`${API_URL}/api/dishes`);

                if (!response.ok) {
                    throw new Error("Failed to fetch dishes.");
                }

                const result = await response.json();

                if (!result.success) {
                    throw new Error(
                        result.message || "Failed to fetch dishes."
                    );
                }

                setDishes(result.data);
            } catch (error) {
                console.error("Failed to fetch gallery:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDishes();
    }, []);

    const galleryItems: GalleryItem[] = useMemo(() => {
        return dishes.flatMap((dish) =>
            dish.images.map((image, index) => ({
                id: `${dish._id}-${index}`,
                src: image,
                title: dish.title,
                category: dish.category,
                slug: dish.slug,
            }))
        );
    }, [dishes]);

    const filteredItems =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter(
                (item) => item.category === activeCategory
            );

    return (
        <main className="min-h-screen bg-[#0b0b0b] pb-32 pt-32 text-white">
            <section className="mx-auto max-w-7xl px-8">
                <div className="max-w-3xl">
                    <p className="flex items-center gap-2 font-semibold uppercase tracking-[5px] text-orange-500">
                        <ImageIcon size={17} />
                        Gallery
                    </p>

                    <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl">
                        A look at<br /><span className="text-orange-500">what we serve.</span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
                        Take a look at some of the dishes we prepare fresh for you.
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-3">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() =>
                                    setActiveCategory(category)
                                }
                                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${isActive
                                    ? "bg-orange-500 text-white"
                                    : "border border-white/10 bg-[#151515] text-zinc-400 hover:border-orange-500/30 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </section>

            <section className="mx-auto mt-16 max-w-7xl px-8">
                {isLoading ? (
                    <div className="flex min-h-80 items-center justify-center rounded-[32px] border border-white/10 bg-[#151515]">
                        <Loader2
                            size={32}
                            className="animate-spin text-orange-500"
                        />
                    </div>
                ) : filteredItems.length === 0 ? (
                    <div className="flex min-h-80 items-center justify-center rounded-[32px] border border-white/10 bg-[#151515]">
                        <div className="text-center">
                            <ImageIcon
                                size={40}
                                className="mx-auto text-zinc-600"
                            />

                            <h2 className="mt-5 text-2xl font-bold">No dishes found</h2>

                            <p className="mt-2 text-zinc-500">Try another category.</p>
                        </div>
                    </div>
                ) : (
                    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
                        {filteredItems.map((item) => (
                            <article key={item.id} className="group mb-6 break-inside-avoid overflow-hidden rounded-[28px] border border-white/10 bg-[#151515]">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        width={700}
                                        height={700}
                                        className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
                                        <div className="w-full p-6">
                                            <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-500">{item.category}</p>

                                            <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>

                                            <Link href={`/menu/${item.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-orange-500">
                                                View Dish
                                                <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <section className="mx-auto mt-24 max-w-7xl px-8">
                <div className="overflow-hidden rounded-[36px] border border-orange-500/20 bg-gradient-to-br from-orange-500/15 via-[#151515] to-[#151515] p-10 text-center sm:p-14">
                    <p className="font-semibold uppercase tracking-[4px] text-orange-500">Hungry yet?</p>

                    <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                        Pictures are nice.<br /><span className="text-orange-500">The real thing is better.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
                        Explore the menu and order your next favorite meal.
                    </p>

                    <Link href="/menu" className="mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-orange-500 px-8 font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-600">
                        Explore Menu
                        <ArrowRight size={19} />
                    </Link>
                </div>
            </section>
        </main>
    );
}