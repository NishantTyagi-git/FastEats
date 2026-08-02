import Link from "next/link";

import DishCard from "@/components/store/menu/DishCard";
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

        const currentDish = dishes.find((dish) => dish.slug === currentSlug);

        if (!currentDish) return null;

        const sameCategory = dishes.filter((dish) =>
            dish.category === currentDish.category &&
            dish.slug !== currentDish.slug
        );

        const others = dishes.filter((dish) =>
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
                        <p className="font-semibold uppercase tracking-[5px] text-orange-500">
                            Recommended
                        </p>

                        <h2 className="mt-3 text-5xl font-black text-white">
                            You May Also Like
                        </h2>
                    </div>

                    <Link href="/menu" className="text-lg font-semibold text-orange-500 transition hover:text-orange-400">
                        View All →
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {related.map((dish) => (
                        <DishCard key={dish._id} dish={dish} />
                    ))}
                </div>
            </section>
        );
    } catch (error) {
        console.error("Failed to load related dishes:", error);

        return null;
    }
}