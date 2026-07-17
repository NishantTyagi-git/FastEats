import {
  Bike,
  ChefHat,
  Leaf,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Bike,
    title: "Fast Delivery",
    description:
      "Hot and fresh food delivered to your doorstep.",
  },
  {
    icon: ChefHat,
    title: "Master Chefs",
    description:
      "Traditional Indian recipes prepared by expert chefs.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "Premium quality vegetables, spices and herbs.",
  },
  {
    icon: Star,
    title: "Top Rated",
    description:
      "Loved by thousands of happy customers.",
  },
];

export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-6">

      <div className="grid gap-8 rounded-3xl border border-white/10 bg-[#101010]/95 p-10 backdrop-blur lg:grid-cols-4">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-orange-500/30 bg-[#171717]">

                <Icon
                  size={30}
                  className="text-orange-500"
                />

              </div>

              <div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}