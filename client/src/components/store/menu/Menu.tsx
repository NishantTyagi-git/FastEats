"use client";

import { useEffect, useMemo, useState } from "react";

import DishGrid from "./DishGrid";
import MenuSearch from "./Search";
import CategoryTabs from "./Category";
import SortDropdown from "./Filter";

import type { Dish } from "@/types/dish";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Category = {
    category: string;
    count: number;
};

export default function Menu() {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("popular");

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                setIsLoading(true);
                setError("");

                const [dishesResponse, categoriesResponse] =
                    await Promise.all([
                        fetch(`${API_URL}/api/dishes`),
                        fetch(`${API_URL}/api/dishes/categories`),
                    ]);

                if (!dishesResponse.ok || !categoriesResponse.ok) {
                    throw new Error("Failed to load menu.");
                }

                const dishesData = await dishesResponse.json();
                const categoriesData = await categoriesResponse.json();

                setDishes(dishesData.data);
                setCategories(categoriesData.data);
            } catch (error) {
                console.error("Failed to load menu:", error);

                setError(
                    error instanceof Error
                        ? error.message
                        : "Failed to load menu."
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchMenuData();
    }, []);

    const filteredDishes = useMemo(() => {
        let data = [...dishes];

        if (category !== "All") {
            data = data.filter((dish) => dish.category === category);
        }

        if (search.trim()) {
            const searchValue = search.toLowerCase().trim();
            data = data.filter((dish) => dish.title.toLowerCase().includes(searchValue));
        }

        switch (sort) {
            case "priceLow":
                data.sort((a, b) => a.price - b.price);
                break;

            case "priceHigh":
                data.sort((a, b) => b.price - a.price);
                break;

            case "rating":
                data.sort((a, b) => b.rating - a.rating);
                break;
        }

        return data;
    }, [dishes, category, search, sort]);

    const categoryNames = [
        "All",
        ...categories.map((item) => item.category),
    ];

    return (
        <section className="bg-[#0b0b0b] py-16">
            <div className="mx-auto max-w-7xl px-8">
                <div className="flex flex-col gap-5 lg:flex-row">
                    <MenuSearch
                        value={search}
                        onChange={setSearch}
                    />

                    <SortDropdown
                        value={sort}
                        onChange={setSort}
                    />
                </div>

                <CategoryTabs
                    categories={categoryNames}
                    active={category}
                    onChange={setCategory}
                />

                {isLoading ? (
                    <div className="mt-12 flex min-h-[300px] items-center justify-center">
                        <div className="flex items-center gap-3 text-zinc-400">
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-orange-500" />
                            Loading dishes...
                        </div>
                    </div>
                ) : error ? (
                    <div className="mt-12 rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
                        <p className="text-red-400">{error}</p>
                    </div>
                ) : (
                    <>
                        <div className="mt-12 flex items-center justify-between">
                            <h2 className="text-3xl font-bold text-white">{filteredDishes.length} Dishes Found</h2>
                        </div>

                        <div className="mt-10">
                            <DishGrid dishes={filteredDishes} />
                        </div>
                    </>
                )}

            </div>
        </section>
    );
}