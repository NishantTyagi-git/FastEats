"use client";

import { Bike, Clock3, MapPinned, Navigation } from "lucide-react";

export default function DeliveryStatusCard() {
    return (
        <section className="rounded-[32px] border border-white/10 bg-[#151515] p-8">
            <p className="font-semibold uppercase tracking-[5px] text-orange-500">Live Delivery</p>

            <h2 className="mt-3 text-3xl font-black text-white">Rider Status</h2>

            <div className="mt-8 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">
                <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white animate-pulse">
                        <Bike size={30} />
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-white">Rider is on the way</h3>

                        <p className="mt-2 text-zinc-300">Raj Kumar picked up your food and is heading towards your location.</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-[#101010] p-5">
                    <Clock3
                        size={20}
                        className="text-orange-500"
                    />

                    <p className="mt-4 text-sm uppercase tracking-[3px] text-zinc-500">ETA</p>

                    <h4 className="mt-2 text-2xl font-black text-white">12 min</h4>
                </div>

                <div className="rounded-2xl bg-[#101010] p-5">

                    <Navigation
                        size={20}
                        className="text-orange-500"
                    />

                    <p className="mt-4 text-sm uppercase tracking-[3px] text-zinc-500">Distance</p>

                    <h4 className="mt-2 text-2xl font-black text-white">2.3 km</h4>
                </div>

                <div className="rounded-2xl bg-[#101010] p-5">
                    <MapPinned
                        size={20}
                        className="text-orange-500"
                    />

                    <p className="mt-4 text-sm uppercase tracking-[3px] text-zinc-500">Destination</p>

                    <h4 className="mt-2 text-lg font-bold text-white">Raj Nagar</h4>
                </div>
            </div>
        </section>
    );
}