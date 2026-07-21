import DishGrid from "./DishGrid";

export default function PopularDishes() {
    return (
        <section className="bg-[#0b0b0b] py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mb-16 text-center">
                    <div className="mb-5 flex items-center justify-center gap-4">
                        <span className="h-[2px] w-12 bg-orange-500" />

                        <p className="text-sm font-semibold uppercase tracking-[6px] text-orange-500">
                            Popular Dishes
                        </p>

                        <span className="h-[2px] w-12 bg-orange-500" />
                    </div>

                    <h2 className="text-5xl font-black text-white xl:text-6xl">
                        Our Signature <span className="ml-3 text-orange-500">Menu</span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
                        Discover our most loved dishes, prepared with authentic recipes, premium ingredients and unforgettable flavours.
                    </p>
                </div>

                <DishGrid />
            </div>
        </section>
    );
}