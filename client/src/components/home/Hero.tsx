import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-[#090909]">

            <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero12.png')",
                    backgroundPosition: "right center",
                    backgroundSize: "cover",
                    filter: "brightness(.95)",
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-24 pb-40">
                <div className="max-w-xl">
                    <div className="mb-8 flex items-center gap-4">
                        <span className="h-[2px] w-12 bg-orange-500" />

                        <p className="text-xs font-semibold uppercase tracking-[6px] text-orange-500 sm:text-sm">
                            Authentic Indian Cuisine
                        </p>
                    </div>

                    <h1 className="font-black uppercase leading-[0.84] tracking-[-0.03em]">
                        <span className="block text-5xl text-white sm:text-6xl xl:text-[72px]">
                            GOOD
                        </span>

                        <span className="block text-5xl text-orange-500 sm:text-6xl xl:text-[72px]">
                            FOOD
                        </span>

                        <span className="mt-1 block text-5xl text-white sm:text-6xl xl:text-[72px]">
                            GOOD
                        </span>

                        <span className="block text-5xl text-orange-500 sm:text-6xl xl:text-[72px]">
                            MOOD
                        </span>
                    </h1>

                    <p className="mt-7 max-w-md text-[17px] leading-8 text-zinc-300">
                        Experience authentic Indian flavours crafted by expert chefs using traditional recipes, premium ingredients, and rich Indian spices.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    fill="currentColor"
                                    className="text-orange-500"
                                />
                            ))}
                        </div>

                        <span className="text-2xl font-bold text-white">
                            4.9
                        </span>

                        <span className="h-6 w-px bg-zinc-600" />

                        <span className="text-base text-zinc-400">
                            1200+ Reviews
                        </span>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link href="/menu" className="inline-flex h-12 w-48 items-center justify-center rounded-full bg-orange-500 text-base font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600">
                            Explore Menu
                        </Link>

                        <Link href="/menu" className="inline-flex h-12 w-48 items-center justify-center gap-2 rounded-full border border-orange-500 bg-transparent text-base font-semibold text-white transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/10 hover:shadow-[0_8px_20px_rgba(249,115,22,.15)]">
                            <ShoppingBag size={18} />
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}