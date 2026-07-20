type Props = {
    ingredients: string[];
};

export default function Ingredients({
    ingredients,
}: Props) {

    return (
        <section className="mt-24">
            <h2 className="text-4xl font-black text-white">Ingredients</h2>

            <div className="mt-10 flex flex-wrap gap-4">
                {ingredients.map((ingredient) => (
                    <span
                        key={ingredient}
                        className="rounded-full border border-white/10 bg-[#151515] px-6 py-3 text-zinc-300"
                    >
                        {ingredient}
                    </span>
                ))}
            </div>
        </section>
    );
}