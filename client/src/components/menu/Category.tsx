type Props = {
    categories: string[];
    active: string;
    onChange: (category: string) => void;
};

export default function CategoryTabs({
    categories,
    active,
    onChange,
}: Props) {

    return (
        <div className="mt-8 flex flex-wrap gap-3">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onChange(category)}
                    className={`rounded-full px-6 py-3 transition ${active === category
                        ? "bg-orange-500 text-white"
                        : "bg-[#151515] text-zinc-400 hover:bg-orange-500"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}