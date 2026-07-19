"use client";

import { useMemo, useState } from "react";

import CategoryTabs from "./Category";
import DishCard from "./DishCard";

const dishes = [
    {
        image: "/images/dishes/butter-chicken.png",
        title: "Butter Chicken",
        category: "North Indian",
        description: "Creamy tomato curry cooked with grilled chicken.",
        price: 349,
        rating: 4.9,
    },
    {
        image: "/images/dishes/paneer-tikka.png",
        title: "Paneer Tikka",
        category: "North Indian",
        description: "Smoky grilled cottage cheese.",
        price: 279,
        rating: 4.8,
    },
    {
        image: "/images/dishes/biryani.png",
        title: "Chicken Biryani",
        category: "Biryani",
        description: "Traditional dum biryani.",
        price: 399,
        rating: 4.9,
    },
    {
        image: "/images/dishes/dal-makhani.png",
        title: "Dal Makhani",
        category: "North Indian",
        description: "Slow-cooked black lentils.",
        price: 249,
        rating: 4.8,
    },
    {
        image: "/images/dishes/chole-bhature.png",
        title: "Chole Bhature",
        category: "North Indian",
        description: "Fluffy bhature served with spicy chickpea curry.",
        price: 229,
        rating: 4.7,
    },
    {
        image: "/images/dishes/veg-pulao.png",
        title: "Veg Pulao",
        category: "North Indian",
        description: "Fragrant basmati rice cooked with vegetables.",
        price: 239,
        rating: 4.6,
    },
    {
        image: "/images/dishes/hakka-noodles.png",
        title: "Veg Hakka Noodles",
        category: "Chinese",
        description: "Stir-fried noodles tossed with fresh vegetables.",
        price: 269,
        rating: 4.7,
    },
    {
        image: "/images/dishes/gulab-jamun.png",
        title: "Gulab Jamun",
        category: "Desserts",
        description: "Soft milk dumplings soaked in saffron syrup.",
        price: 149,
        rating: 4.9,
    },
    {
        image: "/images/dishes/masala-dosa.png",
        title: "Masala Dosa",
        category: "South Indian",
        description: "Crispy dosa filled with spiced potato masala.",
        price: 199,
        rating: 4.8,
    },
];

export default function DishGrid() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredDishes = useMemo(() => {
        if (selectedCategory === "All") return dishes;

        return dishes.filter(
            (dish) => dish.category === selectedCategory
        );
    }, [selectedCategory]);

    return (
        <>
            <CategoryTabs
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {filteredDishes.map((dish) => (
                    <DishCard
                        key={dish.title}
                        {...dish}
                    />
                ))}

            </div>
        </>
    );
}