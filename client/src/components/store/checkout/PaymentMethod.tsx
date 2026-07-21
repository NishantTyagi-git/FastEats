"use client";

import { useState } from "react";
import { CreditCard, Smartphone, Banknote, Check, ChevronDown, ChevronUp, } from "lucide-react";

export default function PaymentMethod() {
    const [selected, setSelected] = useState("upi");
    const [open, setOpen] = useState(false);

    const methods = [
        {
            id: "upi",
            title: "UPI",
            subtitle: "Google Pay, PhonePe, Paytm",
            icon: Smartphone,
        },
        {
            id: "card",
            title: "Credit / Debit Card",
            subtitle: "Visa, Mastercard, RuPay",
            icon: CreditCard,
        },
        {
            id: "cod",
            title: "Cash on Delivery",
            subtitle: "Pay when your order arrives",
            icon: Banknote,
        },
    ];

    const selectedMethod = methods.find(
        (method) => method.id === selected
    );

    return (
        <section className="rounded-[32px] border border-white/10 bg-[#151515] p-8">
            <p className="font-semibold uppercase tracking-[5px] text-orange-500">Payment</p>
            <h2 className="mt-3 text-4xl font-black text-white">Payment Method</h2>

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="mt-10 flex w-full items-center justify-between rounded-[24px] border border-white/10 bg-[#101010] px-6 py-5 transition hover:border-orange-500/40"
            >

                <div className="text-left">
                    <p className="text-sm text-zinc-400">Choose Payment Method</p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{selectedMethod?.title}</h3>
                </div>

                {open ? (
                    <ChevronUp size={24} className="text-orange-500" />
                ) : (
                    <ChevronDown size={24} className="text-orange-500" />
                )}

            </button>

            <div className={`overflow-hidden transition-all duration-500 ${open ? "mt-6 max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-5">
                    {methods.map((method) => {
                        const Icon = method.icon;
                        const active = selected === method.id;
                        return (
                            <button
                                key={method.id}
                                type="button"
                                onClick={() => { setSelected(method.id); setOpen(false); }}
                                className={`group flex w-full items-center justify-between rounded-[24px] border px-6 py-6 text-left transition-all duration-300 ${active
                                        ? "border-orange-500 bg-gradient-to-r from-orange-500/15 to-orange-500/5"
                                        : "border-white/10 bg-[#101010] hover:border-orange-500/40"
                                    }`}
                            >
                                <div className="flex items-center gap-5">
                                    <div
                                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${active
                                                ? "bg-orange-500 text-white"
                                                : "bg-white/5 text-zinc-400"
                                            }`}
                                    >
                                        <Icon size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-white">{method.title}</h3>
                                        <p className="mt-1 text-sm text-zinc-400">{method.subtitle}</p>
                                    </div>
                                </div>

                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-full border ${active
                                            ? "border-orange-500 bg-orange-500"
                                            : "border-white/20"
                                        }`}
                                >
                                    {active && (<Check size={16} className="text-white" />)}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}