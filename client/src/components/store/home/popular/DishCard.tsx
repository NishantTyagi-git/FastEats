import Image from "next/image";
import { Heart, Plus, Star } from "lucide-react";
import type { Dish } from "@/types/dish";

type Props = {
    dish: Dish;
};

export default function DishCard({ dish }: Props) {
    return (
        <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#181818] transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-[0_25px_50px_rgba(0,0,0,.35)]">
            <div className="relative overflow-hidden">
                <Image
                    src={dish.images[0]}
                    alt={dish.title}
                    width={500}
                    height={350}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 backdrop-blur-lg transition hover:bg-orange-500">
                    <Heart
                        size={20}
                        className="text-white"
                    />
                </button>
            </div>

            <div className="p-7">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">
                        {dish.title}
                    </h3>

                    <span className="text-2xl font-black text-orange-500">
                        ₹{dish.price}
                    </span>
                </div>

                <p className="leading-8 text-zinc-400">
                    {dish.description}
                </p>

                <div className="mt-7 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Star
                            size={18}
                            fill="currentColor"
                            className="text-orange-500"
                        />

                        <span className="font-semibold text-white">{dish.rating}</span>

                        <span className="text-zinc-500">Rating</span>
                    </div>
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 transition-all duration-300 hover:rotate-90 hover:bg-orange-600">
                        <Plus
                            size={22}
                            className="text-white"
                        />
                    </button>
                </div>
            </div>
        </article>
    );
}