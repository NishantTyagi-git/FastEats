import DishCard from "./DishCard";
import { dishes } from "../../data/Dishes";

type Props = {
    dishes: typeof dishes;
};

export default function DishGrid({ dishes }: Props) {
    return (
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {dishes.map((dish) => (
                <DishCard
                    key={dish.title}
                    {...dish}
                />
            ))}
        </div>
    );
}