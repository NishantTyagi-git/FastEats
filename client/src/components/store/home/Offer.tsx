import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Offer() {
    return (
        <section className="py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-8">
                <div className="relative overflow-hidden rounded-[36px]">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/offer-food.png')"}}
                    />

                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 grid items-center px-14 py-20 lg:grid-cols-2">

                        <div>
                            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">Today&apos;s Special</span>
                            <h2 className="mt-8 text-5xl font-black text-white xl:text-7xl">30% OFF</h2>

                            <p className="mt-5 text-2xl font-semibold text-white">
                                On Your First Online Order
                            </p>

                            <p className="mt-6 max-w-lg text-lg leading-8 text-orange-100">
                                Enjoy authentic Indian flavours with exclusive discounts. Order today and experience freshly prepared dishes delivered straight to your doorstep.
                            </p>

                            <Link href="/menu" className="mt-10 inline-flex h-12 items-center gap-3 rounded-full bg-white px-8 font-semibold text-orange-600 transition hover:scale-105">
                                Order Now
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div />
                    </div>
                </div>
            </div>
        </section>
    );
}