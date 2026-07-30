import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

import DishGallery from "@/components/store/dish/DishGallery";
import DishInfo from "@/components/store/dish/DishInfo";
import Ingredients from "@/components/store/dish/Ingredients";
import Nutrition from "@/components/store/dish/Nutrition";
import ChefNote from "@/components/store/dish/ChefNote";
import RelatedDishes from "@/components/store/dish/RelatedDishes";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function DishPage({
    params,
}: Props) {
    const { slug } = await params;

    const response = await fetch(
        `${API_URL}/api/dishes/${slug}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        notFound();
    }

    const result = await response.json();

    if (!result.success || !result.data) {
        notFound();
    }

    const dish = result.data;

    return (
        <main className="min-h-screen bg-[#0b0b0b] pt-28 pb-32 text-white">
            <div className="mx-auto max-w-7xl px-8">
                <Link href="/menu" className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500">
                    <ChevronLeft size={18} />
                    Back to Menu
                </Link>

                <section className="grid gap-24 lg:grid-cols-2">
                    <DishGallery
                        images={dish.images}
                        title={dish.title}
                    />

                    <DishInfo dish={dish} />
                </section>

                <div className="mt-28">
                    <Ingredients
                        ingredients={dish.ingredients}
                    />
                </div>

                <div className="mt-20">
                    <Nutrition
                        nutrition={dish.nutrition}
                    />
                </div>

                <div className="mt-20">
                    <ChefNote
                        note={dish.chefNote}
                    />
                </div>

                <div className="mt-28">
                    <RelatedDishes
                        currentSlug={dish.slug}
                    />
                </div>
            </div>
        </main>
    );
}