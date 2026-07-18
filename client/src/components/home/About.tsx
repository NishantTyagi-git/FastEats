import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";

import Stats from "./Stats";

export default function About() {
    return (
        <section className="relative bg-[#111111] py-32 overflow-hidden">
            <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-24 px-8 lg:flex-row">
                <div className="flex-1">
                    <div>
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-[2px] w-12 bg-orange-500" />
                            <p className="text-sm font-semibold uppercase tracking-[7px] text-orange-500">
                                About FastEat
                            </p>
                        </div>

                        <h2 className="max-w-xl text-5xl font-black leading-tight text-white xl:text-6xl">
                            A Culinary Journey <span className="block text-orange-500">Rooted In Tradition</span>
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
                            At FastEat, every dish tells a story. We bring together authentic Indian recipes, handpicked spices and fresh ingredients to create unforgettable flavours. Whether you're craving rich curries, sizzling tandoori platters or aromatic biryanis, every meal is prepared with passion and served with love.
                        </p>

                        <p className="mt-6 max-w-xl text-lg leading-9 text-zinc-400">
                            Our mission is simple, to deliver restaurant-quality food with exceptional service while preserving the true taste of India.
                        </p>

                        <div className="mt-14">
                            <Stats />
                        </div>

                        <Link href="/about" className="mt-12 inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-2 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">
                            Learn More
                            <ArrowRight size={20} />
                        </Link>

                    </div>
                </div>

                <div className="flex-1">
                    <div className="relative flex justify-center">
                        <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[120px]" />
                        
                        <div className="relative overflow-hidden rounded-[32px] border border-white/10">
                            <Image
                                src="/images/about-chef.png"
                                alt="FastEat Chef"
                                width={550}
                                height={700}
                                className="h-auto w-full object-cover transition duration-700 hover:scale-105"
                                priority
                            />

                        </div>

                        <div className="absolute -bottom-8 -left-8 rounded-3xl border border-white/10 bg-[#181818]/95 p-6 shadow-2xl backdrop-blur-xl">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500">
                                    <Award
                                        size={28}
                                        className="text-white"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white">
                                        Authentic Taste
                                    </h3>

                                    <p className="mt-1 text-sm text-zinc-400">
                                        Traditional recipes crafted by experienced chefs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-6 right-6 rounded-full border border-orange-500/30 bg-[#181818]/90 px-6 py-3 backdrop-blur-xl">
                            <p className="text-sm font-semibold tracking-[3px] text-orange-500">
                                SINCE 2014
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}