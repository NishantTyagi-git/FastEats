"use client";

type Props = {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
};

export default function CategoryTabs({
    categories,
    selected,
    onSelect,
}: Props) {
    return (
        <div className="mb-16 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    onClick={() => onSelect(category)}
                    className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${selected === category
                            ? "bg-orange-500 text-white"
                            : "border border-white/10 bg-[#181818] text-zinc-300 hover:border-orange-500 hover:text-orange-500"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}