"use client";

import Link from "next/link";
import { ArrowLeft, CreditCard, LockKeyhole, MoreHorizontal, Plus, ShieldCheck, Trash2, WalletCards } from "lucide-react";
import { useState } from "react";

interface PaymentMethod {
    id: string;
    type: "card" | "upi";
    name: string;
    last4?: string;
    expiry?: string;
    upiId?: string;
    isDefault: boolean;
}

const initialMethods: PaymentMethod[] = [
    {
        id: "card-1",
        type: "card",
        name: "Visa",
        last4: "4242",
        expiry: "12/28",
        isDefault: true,
    },
    {
        id: "upi-1",
        type: "upi",
        name: "UPI",
        upiId: "nishant@upi",
        isDefault: false,
    },
];

export default function PaymentMethodsPage() {
    const [methods, setMethods] =
        useState<PaymentMethod[]>(initialMethods);

    const [showAdd, setShowAdd] = useState(false);
    const [methodType, setMethodType] =
        useState<"card" | "upi">("card");

    const [cardData, setCardData] = useState({
        number: "",
        name: "",
        expiry: "",
        cvv: "",
    });

    const [upiId, setUpiId] = useState("");

    const handleCardChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setCardData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addPaymentMethod = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (methodType === "card") {
            const number = cardData.number.replace(/\s/g, "");

            const newMethod: PaymentMethod = {
                id: crypto.randomUUID(),
                type: "card",
                name: "Visa",
                last4: number.slice(-4) || "0000",
                expiry: cardData.expiry || "12/28",
                isDefault: methods.length === 0,
            };

            setMethods((prev) => [...prev, newMethod]);
        } else {
            const newMethod: PaymentMethod = {
                id: crypto.randomUUID(),
                type: "upi",
                name: "UPI",
                upiId: upiId || "example@upi",
                isDefault: methods.length === 0,
            };

            setMethods((prev) => [...prev, newMethod]);
        }

        setShowAdd(false);

        setCardData({
            number: "",
            name: "",
            expiry: "",
            cvv: "",
        });

        setUpiId("");
    };

    const deleteMethod = (id: string) => {
        setMethods((prev) => {
            const remaining = prev.filter(
                (method) => method.id !== id
            );

            if (
                remaining.length > 0 &&
                !remaining.some((method) => method.isDefault)
            ) {
                remaining[0].isDefault = true;
            }

            return remaining;
        });
    };

    const setDefault = (id: string) => {
        setMethods((prev) =>
            prev.map((method) => ({
                ...method,
                isDefault: method.id === id,
            }))
        );
    };

    return (
        <main className="min-h-screen bg-[#090909] px-5 pb-24 pt-28 text-white md:px-8">
            <div className="mx-auto max-w-5xl">

                <Link href="/profile" className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-orange-500">
                    <ArrowLeft
                        size={15}
                        className="transition-transform group-hover:-translate-x-1"
                    />
                    Back to Profile
                </Link>

                <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-500">Account</p>

                        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight md:text-5xl">Payment Methods</h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">Manage your saved payment methods for faster and easier checkout.</p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowAdd(true)}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 text-xs font-semibold text-white transition hover:bg-orange-600"
                    >
                        <Plus size={16} />
                        Add Payment Method
                    </button>
                </div>

                <div className="mt-9 flex items-start gap-4 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.04] px-5 py-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                        <ShieldCheck size={18} />
                    </div>

                    <div>
                        <p className="text-sm font-medium text-zinc-300">Your payment information is secure</p>

                        <p className="mt-1 text-xs leading-5 text-zinc-600">Payment details are protected and your full card information is never displayed.</p>
                    </div>
                </div>

                {methods.length > 0 ? (
                    <div className="mt-7 space-y-4">
                        {methods.map((method) => (
                            <PaymentCard
                                key={method.id}
                                method={method}
                                onDelete={deleteMethod}
                                onSetDefault={setDefault}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="mt-9 rounded-3xl border border-white/10 bg-[#141414] px-6 py-16 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                            <WalletCards size={26} />
                        </div>

                        <h2 className="mt-6 font-serif text-2xl font-bold">No payment methods</h2>

                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-600">Add a card or UPI account to make your checkout experience faster.</p>

                        <button
                            type="button"
                            onClick={() => setShowAdd(true)}
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-xs font-semibold text-white transition hover:bg-orange-600"
                        >
                            <Plus size={15} />
                            Add Payment Method
                        </button>
                    </div>
                )}

                <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
                    <Link href="/profile" className="flex items-center gap-2 text-xs text-zinc-600 transition hover:text-white">
                        <ArrowLeft size={14} />
                        Profile
                    </Link>

                    <Link href="/profile/addresses" className="text-xs text-zinc-600 transition hover:text-orange-500">
                        Saved Addresses
                    </Link>
                </div>
            </div>

            {showAdd && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm">
                    <div className="absolute inset-0" onClick={() => setShowAdd(false)} />

                    <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#141414] shadow-2xl">
                        <div className="border-b border-white/10 px-6 py-5 md:px-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-500">Payment</p>

                                    <h2 className="mt-1 font-serif text-2xl font-bold">Add Payment Method</h2>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setShowAdd(false)}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-white/20 hover:text-white"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 px-6 pt-6 md:px-8">
                            <button
                                type="button"
                                onClick={() => setMethodType("card")}
                                className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-semibold transition ${methodType === "card"
                                    ? "border-orange-500/40 bg-orange-500/10 text-orange-500"
                                    : "border-white/10 bg-[#0d0d0d] text-zinc-500 hover:text-white"
                                    }`}
                            >
                                <CreditCard size={16} />
                                Card
                            </button>

                            <button
                                type="button"
                                onClick={() => setMethodType("upi")}
                                className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-semibold transition ${methodType === "upi"
                                    ? "border-orange-500/40 bg-orange-500/10 text-orange-500"
                                    : "border-white/10 bg-[#0d0d0d] text-zinc-500 hover:text-white"
                                    }`}
                            >
                                <WalletCards size={16} />
                                UPI
                            </button>
                        </div>

                        <form onSubmit={addPaymentMethod} className="space-y-5 px-6 py-7 md:px-8">
                            {methodType === "card" ? (
                                <>
                                    <Field
                                        label="Card Number"
                                        name="number"
                                        value={cardData.number}
                                        onChange={handleCardChange}
                                        placeholder="1234 5678 9012 3456"
                                        required
                                    />

                                    <Field
                                        label="Name on Card"
                                        name="name"
                                        value={cardData.name}
                                        onChange={handleCardChange}
                                        placeholder="Nishant Tyagi"
                                        required
                                    />

                                    <div className="grid grid-cols-2 gap-4">
                                        <Field
                                            label="Expiry Date"
                                            name="expiry"
                                            value={cardData.expiry}
                                            onChange={handleCardChange}
                                            placeholder="MM/YY"
                                            required
                                        />

                                        <Field
                                            label="CVV"
                                            name="cvv"
                                            value={cardData.cvv}
                                            onChange={handleCardChange}
                                            placeholder="•••"
                                            required
                                        />
                                    </div>

                                    <div className="flex items-center gap-2 rounded-xl bg-[#0d0d0d] px-4 py-3 text-[10px] text-zinc-600">
                                        <LockKeyhole size={13} />
                                        Your card details are encrypted and securely processed.
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Field
                                        label="UPI ID"
                                        name="upi"
                                        value={upiId}
                                        onChange={(e) =>
                                            setUpiId(e.target.value)
                                        }
                                        placeholder="yourname@upi"
                                        required
                                    />

                                    <div className="rounded-xl border border-white/5 bg-[#0d0d0d] p-4 text-xs leading-5 text-zinc-600">
                                        Example: yourname@oksbi, yourname@ybl, or yourname@paytm
                                    </div>
                                </>
                            )}

                            <div className="flex justify-end gap-3 border-t border-white/10 pt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowAdd(false)}
                                    className="h-11 rounded-xl border border-white/10 px-5 text-xs font-semibold text-zinc-400 transition hover:text-white"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-orange-500 px-6 text-xs font-semibold text-white transition hover:bg-orange-600"
                                >
                                    <Plus size={15} />
                                    Add Method
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}

function PaymentCard({
    method,
    onDelete,
    onSetDefault,
}: {
    method: PaymentMethod;
    onDelete: (id: string) => void;
    onSetDefault: (id: string) => void;
}) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <article className="relative rounded-3xl border border-white/10 bg-[#141414] p-6 transition hover:border-white/15 md:p-7">
            <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0d0d0d] text-zinc-400">
                    {method.type === "card" ? (
                        <CreditCard size={24} />
                    ) : (
                        <WalletCards size={24} />
                    )}
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-semibold text-white">
                            {method.type === "card"
                                ? method.name
                                : "UPI"}
                        </h2>

                        {method.isDefault && (
                            <span className="rounded-full bg-orange-500/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-orange-500">
                                Default
                            </span>
                        )}
                    </div>

                    {method.type === "card" ? (
                        <>
                            <p className="mt-1 text-sm tracking-widest text-zinc-500">
                                •••• •••• •••• {method.last4}
                            </p>

                            <p className="mt-1 text-[10px] text-zinc-700">
                                Expires {method.expiry}
                            </p>
                        </>
                    ) : (
                        <p className="mt-1 text-sm text-zinc-500">
                            {method.upiId}
                        </p>
                    )}
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-white/5 hover:text-white"
                    >
                        <MoreHorizontal size={18} />
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 top-11 z-20 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] p-1 shadow-2xl">
                            {!method.isDefault && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        onSetDefault(method.id);
                                        setMenuOpen(false);
                                    }}
                                    className="w-full rounded-lg px-3 py-2.5 text-left text-xs text-zinc-400 transition hover:bg-white/5 hover:text-white"
                                >
                                    Make Default
                                </button>
                            )}

                            <button
                                type="button"
                                onClick={() => {
                                    onDelete(method.id);
                                    setMenuOpen(false);
                                }}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs text-red-400 transition hover:bg-red-500/10"
                            >
                                <Trash2 size={14} />
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {method.isDefault && (
                <div className="mt-5 flex items-center gap-2 text-xs text-emerald-500">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                        ✓
                    </span>
                    Used automatically during checkout
                </div>
            )}
        </article>
    );
}

function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    required = false,
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-xs font-medium text-zinc-400"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="h-12 w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 hover:border-white/15 focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/10"
            />
        </div>
    );
}