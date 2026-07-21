"use client";

import { useState } from "react";
import { MapPin, Pencil, X } from "lucide-react";

export default function BillingForm() {
    const [editing, setEditing] = useState(false);

    return (
        <section className="rounded-[32px] border border-white/10 bg-[#151515] p-8">
            <p className="font-semibold uppercase tracking-[5px] text-orange-500">Delivery</p>

            <h2 className="mt-3 text-4xl font-black text-white">Billing Details</h2>

            <div className="mt-10 rounded-[28px] border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-orange-500/5 p-6">
                <div className="flex items-start justify-between gap-5">
                    <div className="flex gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                            <MapPin size={24} />
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold text-white">Home</h3>

                                <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white">Default</span>
                            </div>

                            <p className="mt-3 leading-7 text-zinc-400">Raj Nagar Extension<br />Ghaziabad, Uttar Pradesh - 201001</p>
                            <p className="mt-3 text-sm text-zinc-500">+91 9876543210</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setEditing(!editing)}
                        className="flex items-center gap-2 rounded-full border border-orange-500/30 px-5 py-2 text-sm font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                    >
                        {editing ? (
                            <>
                                <X size={16} />
                                Cancel
                            </>
                        ) : (
                            <>
                                <Pencil size={16} />
                                Change
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ${editing ? "mt-10 max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="grid gap-7 md:grid-cols-2">
                    <div>
                        <label className="mb-3 block text-sm font-semibold text-zinc-300">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="h-14 w-full rounded-2xl border border-white/10 bg-[#101010] px-5 text-white outline-none transition-all duration-300 hover:border-orange-500/30 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        />
                    </div>

                    <div>
                        <label className="mb-3 block text-sm font-semibold text-zinc-300">Phone Number</label>

                        <input
                            type="tel"
                            placeholder="+91 9876543210"
                            className="h-14 w-full rounded-2xl border border-white/10 bg-[#101010] px-5 text-white outline-none transition-all duration-300 hover:border-orange-500/30 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="mb-3 block text-sm font-semibold text-zinc-300">Email Address</label>

                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="h-14 w-full rounded-2xl border border-white/10 bg-[#101010] px-5 text-white outline-none transition-all duration-300 hover:border-orange-500/30 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="mb-3 block text-sm font-semibold text-zinc-300">Delivery Address</label>
                        <textarea
                            rows={4}
                            placeholder="House No., Street, Area..."
                            className="w-full rounded-2xl border border-white/10 bg-[#101010] p-5 text-white outline-none transition-all duration-300 hover:border-orange-500/30 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        />
                    </div>

                    <div>
                        <label className="mb-3 block text-sm font-semibold text-zinc-300">City</label>

                        <input
                            type="text"
                            placeholder="Ghaziabad"
                            className="h-14 w-full rounded-2xl border border-white/10 bg-[#101010] px-5 text-white outline-none transition-all duration-300 hover:border-orange-500/30 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        />
                    </div>

                    <div>
                        <label className="mb-3 block text-sm font-semibold text-zinc-300">State</label>
                        <input
                            type="text"
                            placeholder="Uttar Pradesh"
                            className="h-14 w-full rounded-2xl border border-white/10 bg-[#101010] px-5 text-white outline-none transition-all duration-300 hover:border-orange-500/30 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        />
                    </div>

                    <div>
                        <label className="mb-3 block text-sm font-semibold text-zinc-300">Pincode</label>

                        <input
                            type="text"
                            placeholder="201001"
                            className="h-14 w-full rounded-2xl border border-white/10 bg-[#101010] px-5 text-white outline-none transition-all duration-300 hover:border-orange-500/30 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="mb-3 block text-sm font-semibold text-zinc-300">Delivery Instructions</label>
                        <textarea
                            rows={3}
                            placeholder="Ring the bell, leave at the door, don't call..."
                            className="w-full rounded-2xl border border-white/10 bg-[#101010] p-5 text-white outline-none transition-all duration-300 hover:border-orange-500/30 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <button
                            className="mt-2 h-14 rounded-2xl bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600"
                            onClick={() => setEditing(false)}
                        >
                            Save Address
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}