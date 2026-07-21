"use client";

import Lottie from "lottie-react";
import animationData from "@/../public/lottie/Success.json";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function SuccessHero() {
    const orderId = "#FE102394";
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(orderId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="text-center">
            <div className="mx-auto w-44">
                <Lottie
                    animationData={animationData}
                    loop={false}
                />
            </div>

            <p className="mt-4 font-semibold uppercase tracking-[6px] text-orange-500">Order Confirmed</p>

            <h1 className="mt-4 text-6xl font-black text-white">Thank You!</h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Your order has been placed successfully and our chefs have already started preparing your meal.
            </p>

            <div className="mx-auto mt-12 grid max-w-xl gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                    <p className="text-xs uppercase tracking-[3px] text-zinc-500">Order ID</p>

                    <button
                        onClick={handleCopy}
                        className="mt-3 flex w-full items-center justify-between rounded-2xl bg-[#101010] px-4 py-3 transition hover:bg-[#1b1b1b]"
                    >
                        <span className="text-2xl font-black text-white">{orderId}</span>

                        {copied ? (
                            <div className="flex items-center gap-2 text-green-500">
                                <Check size={18} />
                                <span className="text-sm font-semibold">Copied</span>
                            </div>
                        ) : (
                            <Copy size={18} className="text-zinc-400" />
                        )}
                    </button>

                </div>

                <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">
                    <p className="text-xs uppercase tracking-[3px] text-orange-400">Estimated Delivery</p>

                    <h2 className="mt-2 text-3xl font-black text-orange-500">25–35 mins</h2>
                </div>
            </div>
        </section>
    );
}