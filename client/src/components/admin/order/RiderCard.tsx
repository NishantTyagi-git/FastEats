"use client";

import { Bike, Plus, Phone, Star, MapPin } from "lucide-react";
import { useState } from "react";

export default function RiderCard() {
    const [assigned] = useState(true);

    if (!assigned) {
        return (
            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <div>
                    <h2 className="text-xl font-bold text-white">Delivery Partner</h2>

                    <p className="mt-1 text-sm text-zinc-500">Assign a rider for delivery</p>
                </div>

                <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-[#111111] p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10">
                        <Bike size={28} className="text-orange-500" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white">No Rider Assigned</h3>

                    <p className="mt-2 text-sm text-zinc-500">Assign an available rider to start delivery.</p>

                    <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
                        <Plus size={18} />
                        Assign Rider
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div>
                <h2 className="text-xl font-bold text-white">Delivery Partner</h2>

                <p className="mt-1 text-sm text-zinc-500">Assigned Rider</p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#111111] p-5">
                <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-black text-white">
                        R
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white">Rahul Sharma</h3>

                        <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            4.9 Rating
                        </div>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Phone</span>

                        <span className="text-white">+91 9876543210</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Vehicle</span>

                        <span className="text-white">UP14 AB 1234</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Status</span>

                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">Delivering</span>
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <button className="flex-1 rounded-2xl border border-white/10 bg-[#181818] py-3 font-semibold text-white transition hover:border-orange-500">
                        Change Rider
                    </button>

                    <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#181818] text-white transition hover:border-orange-500">
                        <Phone size={18} />
                    </button>

                    <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#181818] text-white transition hover:border-orange-500">
                        <MapPin size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}