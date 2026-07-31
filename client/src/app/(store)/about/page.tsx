import Link from "next/link";
import { ArrowRight, Check, Clock3, Heart, MapPin, Sparkles, Utensils } from "lucide-react";

const features = [
    {
        icon: Utensils,
        title: "Freshly Prepared",
        description: "Every order is prepared fresh with carefully selected ingredients.",
    },
    {
        icon: Clock3,
        title: "Quick Service",
        description: "We focus on getting your favorite meals prepared and delivered without unnecessary delays.",
    },
    {
        icon: Heart,
        title: "Made With Care",
        description: "From preparation to packaging, every order is handled with attention to detail.",
    },
];

const values = [
    "Fresh and quality ingredients",
    "Consistent taste and quality",
    "Simple and convenient ordering",
    "Fast and reliable service",
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0b] text-white">
            <section
                className="relative flex min-h-screen items-center overflow-hidden bg-[#0b0b0b] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/about/hero.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/95 to-[#0b0b0b]/25" />

                <div className="relative mx-auto w-full max-w-7xl px-8">
                    <div className="max-w-3xl">
                        <p className="flex items-center gap-2 font-semibold uppercase tracking-[5px] text-orange-500">
                            <Sparkles size={17} />
                            About FastEats
                        </p>

                        <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                            Good food.<br /> <span className="text-orange-500"> Made simple.</span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                            FastEats is built around one simple idea — great food should be easy to discover, simple to order, and enjoyable from the first bite to the last.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link href="/menu" className="inline-flex h-14 items-center gap-2 rounded-full bg-orange-500 px-8 font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-600">
                                Explore Our Menu
                                <ArrowRight size={19} />
                            </Link>

                            <Link href="/contact" className="inline-flex h-14 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 font-semibold text-white transition hover:border-orange-500/40 hover:bg-orange-500/10">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-white/5 bg-[#101010] py-24">
                <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="font-semibold uppercase tracking-[4px] text-orange-500">Our Story</p>

                        <h2 className="mt-4 text-4xl font-black sm:text-5xl">More than just another food order.</h2>

                        <p className="mt-7 leading-8 text-zinc-400">
                            FastEats was created to make ordering food feel effortless. Instead of complicated menus and unnecessary steps, we wanted a clean experience where you can find what you want, add it to your cart, and get back to enjoying your day.
                        </p>

                        <p className="mt-5 leading-8 text-zinc-400">
                            We care about the details that matter — quality food, straightforward service, and an experience that feels just as good as the meal itself.
                        </p>
                    </div>

                    <div className="rounded-[32px] border border-white/10 bg-[#151515] p-8 sm:p-10">
                        <div className="flex items-start justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
                                <Utensils
                                    size={26}
                                    className="text-orange-500"
                                />
                            </div>

                            <span className="rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-500">
                                Our Promise
                            </span>
                        </div>

                        <h3 className="mt-7 text-3xl font-black">Our approach</h3>

                        <p className="mt-3 max-w-md leading-7 text-zinc-400">
                            We keep the experience simple while never compromising on the things that matter most.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {values.map((value) => (
                                <div key={value} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#1b1b1b] px-4 py-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                                        <Check
                                            size={15}
                                            className="text-orange-500"
                                        />
                                    </div>

                                    <span className="text-sm leading-5 text-zinc-300">{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-t border-white/5 pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[3px] text-zinc-500">
                                        The FastEats standard
                                    </p>

                                    <p className="mt-2 text-sm text-zinc-400">
                                        Fresh food. Simple ordering. Reliable service.
                                    </p>
                                </div>

                                <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-orange-500 sm:flex">
                                    <Heart
                                        size={18}
                                        className="text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="font-semibold uppercase tracking-[4px] text-orange-500">Why FastEats</p>

                        <h2 className="mt-4 text-4xl font-black sm:text-5xl">Simple things done right.</h2>

                        <p className="mt-5 leading-7 text-zinc-400">We keep our focus on the essentials so you can focus on enjoying your food.</p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <article key={feature.title} className="rounded-[28px] border border-white/10 bg-[#151515] p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500/30">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
                                        <Icon
                                            size={25}
                                            className="text-orange-500"
                                        />
                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold">{feature.title}</h3>

                                    <p className="mt-4 leading-7 text-zinc-400">{feature.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-8">
                    <div
                        className="relative overflow-hidden rounded-[36px] border border-orange-500/20 bg-[#151515] bg-cover bg-center bg-no-repeat p-10 sm:p-14"
                        style={{ backgroundImage: "url('/images/about/cta.png')" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/95 via-[#0b0b0b]/80 to-[#0b0b0b]/40" />

                        <div className="relative max-w-2xl">
                            <div className="flex items-center gap-2 text-orange-500">
                                <MapPin size={19} />
                                <span className="font-semibold">
                                    FastEats
                                </span>
                            </div>

                            <h2 className="mt-5 text-4xl font-black sm:text-5xl">Hungry? Let&apos;s fix that.</h2>

                            <p className="mt-5 leading-7 text-zinc-400">Explore our menu and find something worth ordering today.</p>

                            <Link href="/menu" className="mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-orange-500 px-8 font-semibold transition hover:-translate-y-1 hover:bg-orange-600">
                                Browse Menu
                                <ArrowRight size={19} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}