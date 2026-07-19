import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-20 lg:py-24">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/reservation.png')", }}
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60" />

            <div className="relative z-10 mx-auto max-w-7xl px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <span className="h-[2px] w-12 bg-orange-500" />

                        <p className="text-sm font-semibold uppercase tracking-[6px] text-orange-500">
                            Reserve Your Table
                        </p>

                        <span className="h-[2px] w-12 bg-orange-500" />
                    </div>

                    <h2 className="text-5xl font-black leading-tight text-white xl:text-7xl">
                        Experience
                        <span className="text-orange-500">{" "}Authentic Indian</span>
                        <br />
                        Dining Like Never Before
                    </h2>

                    <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-zinc-300">
                        From handcrafted curries to freshly baked naan, every dish is prepared with passion using authentic recipes and premium ingredients. Reserve your table today and create unforgettable memories with family and friends.
                    </p>

                    <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
                        <Link
                            href="/reservation"
                            className="inline-flex h-14 items-center gap-3 rounded-full bg-orange-500 px-10 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
                        >
                            <CalendarDays size={20} />
                            Book A Table
                        </Link>

                        <Link
                            href="/menu"
                            className="inline-flex h-14 items-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10"
                        >
                            Explore Menu
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
