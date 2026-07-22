"use client";

import Link from "next/link";
import { Clock3, PhoneCall } from "lucide-react";
import Lottie from "lottie-react";

import successAnimation from "@/../public/lottie/Success.json";

type Props = {
    orderId: string;
};

export default function OrderHero({ orderId }: Props) {
    return (
        <section className="mt-10">
            <div className="flex flex-col items-center text-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
                    <Lottie
                        animationData={successAnimation}
                        loop={false}
                        className="h-24 w-24"
                    />
                </div>

                <p className="mt-6 font-semibold uppercase tracking-[6px] text-green-500">Order Confirmed</p>

                <h1 className="mt-4 text-5xl font-black">Preparing Your Order</h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                    Our chefs have started preparing your meal. We&apos;ll notify you once your order is picked up by the rider.
                </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-3">
                <div className="rounded-[28px] border border-white/10 bg-[#151515] p-6">
                    <p className="text-xs uppercase tracking-[4px] text-zinc-500">Order ID</p>

                    <div className="mt-3 flex items-center justify-between">
                        <h2 className="text-3xl font-black text-white">#{orderId}</h2>

                        <button
                            onClick={() => navigator.clipboard.writeText(orderId)}
                            className="rounded-full border border-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
                        >
                            Copy
                        </button>
                    </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-[#151515] p-6">
                    <div className="flex items-center gap-3">
                        <Clock3
                            className="text-orange-500"
                            size={22}
                        />

                        <span className="font-semibold text-zinc-400">Estimated Arrival</span>
                    </div>

                    <h2 className="mt-4 text-4xl font-black text-orange-500">25–35 min</h2>

                    <p className="mt-2 text-zinc-500">Live updates will appear automatically.</p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-[#151515] p-6">
                    <p className="text-xs uppercase tracking-[4px] text-zinc-500">Need Help?</p>

                    <p className="mt-3 text-zinc-400">Contact FastEat support anytime regarding your order.</p>

                    <Link
                        href="/contact"
                        className="mt-6 inline-flex h-12 items-center gap-3 rounded-full bg-orange-500 px-6 font-semibold text-white transition hover:bg-orange-600"
                    >
                        <PhoneCall size={18} />
                        Contact Support
                    </Link>
                </div>
            </div>
        </section>
    );
}