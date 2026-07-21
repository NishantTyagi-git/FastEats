type Props = {
    nutrition: {
        calories: number;
        protein: string;
        carbs: string;
        fat: string;
    };
};

export default function Nutrition({
    nutrition,
}: Props) {

    const items = [
        {
            label: "Calories",
            value: nutrition.calories,
        },
        {
            label: "Protein",
            value: nutrition.protein,
        },
        {
            label: "Carbs",
            value: nutrition.carbs,
        },
        {
            label: "Fat",
            value: nutrition.fat,
        },
    ];

    return (
        <section className="mt-24">
            <h2 className="text-4xl font-black text-white">Nutrition</h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-3xl border border-white/10 bg-[#151515] p-8"
                    >
                        <p className="text-zinc-500">{item.label}</p>

                        <h3 className="mt-3 text-3xl font-black text-orange-500">{item.value}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}