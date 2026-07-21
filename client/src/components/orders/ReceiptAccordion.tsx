"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Receipt, Download } from "lucide-react";

export default function ReceiptAccordion() {
    const [open, setOpen] = useState(false);

    const items = [
        {
            name: "Paneer Tikka",
            quantity: 2,
            price: 598,
        },
        {
            name: "Veg Burger",
            quantity: 1,
            price: 249,
        },
        {
            name: "Margherita Pizza",
            quantity: 1,
            price: 409,
        },
    ];

    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const delivery = 49;
    const gst = 62;
    const total = subtotal + delivery + gst;

    return (
        <section className="rounded-[32px] border border-white/10 bg-[#151515]">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between p-8"
            >
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                        <Receipt
                            size={22}
                            className="text-orange-500"
                        />
                    </div>

                    <div className="text-left">
                        <p className="font-semibold uppercase tracking-[4px] text-orange-500">Receipt</p>

                        <h2 className="mt-1 text-3xl font-black text-white">Order Summary</h2>
                    </div>
                </div>

                {open ? (
                    <ChevronUp className="text-zinc-400" />
                ) : (
                    <ChevronDown className="text-zinc-400" />
                )}
            </button>

            <div
                className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-8 pb-8 pt-6">
                        <div className="space-y-5">
                            {items.map((item) => (
                                <div key={item.name} className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-white">{item.name}</h3>

                                        <p className="text-sm text-zinc-500">Qty × {item.quantity}</p>
                                    </div>

                                    <span className="font-semibold text-white">₹{item.price}</span>
                                </div>
                            ))}
                        </div>

                        <div className="my-6 h-px bg-white/10" />

                        <div className="space-y-4">
                            <div className="flex justify-between text-zinc-400">
                                <span>Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>

                            <div className="flex justify-between text-zinc-400">
                                <span>Delivery</span>
                                <span>₹{delivery}</span>
                            </div>

                            <div className="flex justify-between text-zinc-400">
                                <span>GST</span>
                                <span>₹{gst}</span>
                            </div>
                        </div>

                        <div className="my-6 h-px bg-white/10" />

                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-white">Total Paid</span>

                            <span className="text-3xl font-black text-orange-500">₹{total}</span>
                        </div>

                        <button className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 font-semibold text-white transition hover:bg-orange-600">
                            <Download size={18} /> Download Invoice
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}