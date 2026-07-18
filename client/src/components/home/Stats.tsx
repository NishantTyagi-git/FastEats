const STATS = [
    {
        value: "10+",
        label: "Years Experience",
    },
    {
        value: "25K+",
        label: "Happy Customers",
    },
    {
        value: "120+",
        label: "Signature Dishes",
    },
    {
        value: "4.9★",
        label: "Customer Rating",
    },
];

export default function Stats() {
    return (
        <div className="grid grid-cols-2 gap-8">

            {STATS.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-[#181818] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-[#1d1d1d]">
                    <h3 className="text-4xl font-black text-orange-500">
                        {item.value}
                    </h3>

                    <p className="mt-3 text-sm uppercase tracking-[2px] text-zinc-400">
                        {item.label}
                    </p>
                </div>
            ))}

        </div>
    );
}