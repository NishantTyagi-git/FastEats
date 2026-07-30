"use client";

import { useEffect, useState } from "react";

import GalleryCard from "./GalleryCard";

import type { Dish } from "@/types/dish";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const gallerySlugs = [
    { slug: "butter-chicken", large: true },
    { slug: "chicken-biryani" },
    { slug: "paneer-tikka" },
    { slug: "dal-makhani" },
    { slug: "masala-dosa", large: true },
    { slug: "gulab-jamun" },
];

export default function Gallery() {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGalleryDishes = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/api/dishes`
                );

                if (!response.ok) {
                    throw new Error("Failed to load gallery.");
                }

                const result = await response.json();

                if (result.success) {
                    setDishes(result.data);
                }
            } catch (error) {
                console.error("Failed to load gallery:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGalleryDishes();
    }, []);

    const galleryItems = gallerySlugs
        .map((item) => {
            const dish = dishes.find(
                (dish) => dish.slug === item.slug
            );

            if (!dish) return null;

            return {
                dish,
                large: item.large ?? false,
            };
        })
        .filter((item) => item !== null);

    return (
        <section className="bg-[#0b0b0b] py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-8">
                <div className="text-center">
                    <p className="font-semibold uppercase tracking-[5px] text-orange-500">Gallery</p>

                    <h2 className="mt-4 text-5xl font-black text-white xl:text-6xl">
                        Crafted With
                        <span className="text-orange-500">{" "}Passion</span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">Every dish is handcrafted using authentic recipes, premium ingredients and the finest Indian spices.</p>
                </div>

                {loading ? (
                    <div className="mt-20 flex min-h-[520px] items-center justify-center text-zinc-400">
                        Loading gallery...
                    </div>
                ) : (
                    <div className="mt-20 grid auto-rows-[260px] gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {galleryItems.map(({ dish, large }) => (
                            <GalleryCard
                                key={dish._id}
                                slug={dish.slug}
                                image={dish.images[0]}
                                title={dish.title}
                                category={dish.category}
                                large={large}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}