import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MenuHero() {
    return (
        <section className="relative flex h-[320px] items-end overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/menu/menu.png')" }}
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/80" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-14">
                <div className="max-w-3xl">
                    <div className="mb-5 flex items-center gap-4">
                        <span className="h-[2px] w-12 bg-orange-500" />

                        <p className="text-xs font-semibold uppercase tracking-[6px] text-orange-500">Our Menu</p>
                    </div>

                    <h1 className="text-5xl font-black text-white xl:text-6xl">
                        Discover Our
                        <span className="text-orange-500">{" "}Signature Dishes</span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-zinc-300 leading-8">
                        Freshly prepared Indian cuisine crafted using authentic recipes, premium ingredients and rich traditional flavours.
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm">
                        <Link href="/" className="text-zinc-400 hover:text-orange-500 transition">Home</Link>

                        <ChevronRight
                            size={16}
                            className="text-zinc-600"
                        />

                        <span className="text-white">Menu</span>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0b0b0b]" />
        </section>
    );
}