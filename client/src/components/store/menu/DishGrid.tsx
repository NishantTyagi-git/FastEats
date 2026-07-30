import DishCard from "./DishCard";
import type { Dish } from "@/types/dish";

type Props = {
    dishes: Dish[];
};

export default function DishGrid({ dishes }: Props) {
    return (
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {dishes.map((dish) => (
                <DishCard
                    key={dish._id}
                    dish={dish}
                />
            ))}
        </div>
    );
}