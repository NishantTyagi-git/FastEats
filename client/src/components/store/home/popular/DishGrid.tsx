"use client";

import { useEffect, useMemo, useState } from "react";

import CategoryTabs from "./Category";
import DishCard from "./DishCard";

import type { Dish } from "@/types/dish";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function DishGrid() {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPopularDishes = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/api/dishes/popular`
                );

                if (!response.ok) {
                    throw new Error("Failed to load popular dishes.");
                }

                const result = await response.json();

                if (!result.success) {
                    throw new Error("Failed to load popular dishes.");
                }

                setDishes(result.data);
            } catch (error) {
                console.error(error);

                setError(
                    error instanceof Error
                        ? error.message
                        : "Failed to load popular dishes."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchPopularDishes();
    }, []);

    const categories = useMemo(() => {
        return [
            "All",
            ...Array.from(
                new Set(dishes.map((dish) => dish.category))
            ),
        ];
    }, [dishes]);

    const filteredDishes = useMemo(() => {
        if (selectedCategory === "All") {
            return dishes;
        }

        return dishes.filter(
            (dish) => dish.category === selectedCategory
        );
    }, [dishes, selectedCategory]);

    if (loading) {
        return (
            <div className="flex min-h-[300px] items-center justify-center">
                <div className="flex items-center gap-3 text-zinc-400">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-orange-500" />
                    Loading popular dishes...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
                <p className="text-red-400">{error}</p>
            </div>
        );
    }

    return (
        <>
            <CategoryTabs
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {filteredDishes.map((dish) => (
                    <DishCard
                        key={dish._id}
                        dish={dish}
                    />
                ))}
            </div>
        </>
    );
}