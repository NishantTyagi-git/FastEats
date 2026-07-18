import { Bike, ChefHat, Leaf, Star } from "lucide-react";

const FEATURES = [
    {
        icon: Bike,
        title: "Fast Delivery",
        description: "Hot & fresh food delivered to your doorstep in no time.",
    },
    {
        icon: ChefHat,
        title: "Master Chefs",
        description: "Traditional Indian recipes prepared by expert chefs.",
    },
    {
        icon: Leaf,
        title: "Fresh Ingredients",
        description: "Premium vegetables, spices and herbs sourced daily.",
    },
    {
        icon: Star,
        title: "Top Rated",
        description: "Loved by thousands of happy customers across the city.",
    },
];

export default function Features1() {
    return (
        <section className="relative min-h-screen pt-40 lg:pt-44">
            <div className="mx-auto max-w-[1500px] px-10 lg:px-16">
                <div className="rounded-[30px] border border-white/10 bg-[#151515]/90 backdrop-blur-xl shadow-2xl">
                    <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
                        {FEATURES.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="flex items-start gap-5 p-8">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/5">
                                        <Icon
                                            size={30}
                                            className="text-orange-500"
                                        />

                                    </div>

                                    <div>
                                        <h3 className="mb-2 text-2xl font-bold text-white">
                                            {feature.title}
                                        </h3>

                                        <p className="leading-8 text-zinc-400">
                                            {feature.description}
                                        </p>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}