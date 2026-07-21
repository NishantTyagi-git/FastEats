"use client";

import { useMemo, useState } from "react";
import { dishes } from "../../../data/Dishes";
import DishGrid from "./DishGrid";
import MenuSearch from "./Search";
import CategoryTabs from "./Category";
import SortDropdown from "./Filter";

const categories = [
    "All",
    "North Indian",
    "South Indian",
    "Chinese",
    "Biryani",
    "Desserts",
    "Drinks",
];

export default function Menu() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("popular");

    const filteredDishes = useMemo(() => {
        let data = [...dishes];
        if (category !== "All") {
            data = data.filter(dish => dish.category === category);
        }

        if (search.trim()) {
            data = data.filter(dish =>
                dish.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
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

    }, [category, search, sort]);

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
                    categories={categories}
                    active={category}
                    onChange={setCategory}
                />

                <div className="mt-12 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-white">{filteredDishes.length} Dishes Found</h2>
                </div>

                <div className="mt-10">
                    <DishGrid dishes={filteredDishes} />
                </div>
            </div>
        </section>
    );
}