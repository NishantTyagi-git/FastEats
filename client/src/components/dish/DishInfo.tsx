import { Clock3, Flame, Star } from "lucide-react";

import QuantitySelector from "./QuantitySelector";

type Props = {
    dish: any;
};

export default function DishInfo({
    dish,
}: Props) {

    return (
        <div>
            <p className="font-semibold text-orange-500">{dish.category}</p>

            <h1 className="mt-3 text-5xl font-black text-white">{dish.title}</h1>

            <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                    <Star
                        size={18}
                        fill="currentColor"
                        className="text-orange-500"
                    />

                    <span>{dish.rating}</span>
                </div>

                <div className="flex items-center gap-2">
                    <Clock3 size={18} />
                    {dish.preparationTime}
                </div>

                <div className="flex items-center gap-2">
                    <Flame size={18} />
                    {dish.spicy}
                </div>
            </div>

            <p className="mt-8 text-lg leading-8 text-zinc-400">{dish.description}</p>

            <h2 className="mt-10 text-4xl font-black text-orange-500">₹{dish.price}</h2>

            <div className="mt-10">
                <QuantitySelector />
            </div>

            <button className="mt-10 h-14 rounded-full bg-orange-500 px-10 font-semibold text-white transition hover:bg-orange-600">
                Add To Cart
            </button>
        </div>
    );
}