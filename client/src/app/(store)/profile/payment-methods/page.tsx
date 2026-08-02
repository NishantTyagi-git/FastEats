"use client";

import Link from "next/link";
import { ArrowLeft, CreditCard, LockKeyhole, Plus, ShieldCheck, WalletCards, Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import PaymentCard from "@/components/store/profile/payment-methods/PaymentCard";
import Field from "@/components/store/profile/addresses/Field";
import ErrorMessage from "@/components/store/profile/payment-methods/ErrorMessage";

type PaymentMethod = {
    id: string;
    type: "card" | "upi";
    name: string;
    last4?: string;
    expiry?: string;
    upiId?: string;
    isDefault: boolean;
};

type ApiPaymentMethod = {
    _id: string;
    type: "card" | "upi";
    brand?: string;
    last4?: string;
    expiry?: string;
    upiId?: string;
    isDefault: boolean;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function PaymentMethodsPage() {
    const [methods, setMethods] = useState<PaymentMethod[]>([]);

    const [loading, setLoading] = useState(true);
    const [showAdd, setShowAdd] = useState(false);

    const [methodType, setMethodType] = useState<"card" | "upi">("card");

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [cardData, setCardData] = useState({
        number: "",
        name: "",
        expiry: "",
        cvv: "",
    });

    const [upiId, setUpiId] = useState("");

    const fetchPaymentMethods = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                `${API_URL}/api/payment-methods`,
                {
                    method: "GET",
                    credentials: "include",
                    cache: "no-store",
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to fetch payment methods.");
            }

            const apiMethods: ApiPaymentMethod[] =
                Array.isArray(result.data) ? result.data : [];

            const formattedMethods: PaymentMethod[] = apiMethods.map((method) => ({
                id: method._id,
                type: method.type,
                name: method.type === "card" ? method.brand || "Card" : "UPI",
                last4: method.last4,
                expiry: method.expiry,
                upiId: method.upiId,
                isDefault: method.isDefault,
            }));

            setMethods(formattedMethods);
        } catch (error) {
            console.error("Fetch payment methods error:", error);
            setError(error instanceof Error ? error.message : "Failed to fetch payment methods.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPaymentMethods();
    }, []);

    const handleCardChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setCardData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError("");
    };

    const openAddModal = () => {
        setError("");
        setSuccess("");
        setMethodType("card");
        setShowAdd(true);
    };

    const closeAddModal = () => {
        if (submitting) return;

        setShowAdd(false);
        setError("");

        setCardData({
            number: "",
            name: "",
            expiry: "",
            cvv: "",
        });

        setUpiId("");
    };

    const addPaymentMethod = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (submitting) return;

        setError("");
        setSuccess("");


        if (methodType === "upi") {
            const cleanUpi = upiId.trim().toLowerCase();

            if (!cleanUpi) {
                setError("Please enter your UPI ID.");
                return;
            }

            const upiRegex = /^[\w.-]+@[\w.-]+$/;

            if (!upiRegex.test(cleanUpi)) {
                setError("Please enter a valid UPI ID.");
                return;
            }

            try {
                setSubmitting(true);

                const response = await fetch(`${API_URL}/api/payment-methods`, {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json", },
                    body: JSON.stringify({ type: "upi", upiId: cleanUpi, }),
                });

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(
                        result.message ||
                        "Failed to add payment method."
                    );
                }

                const method: ApiPaymentMethod = result.data;

                const newMethod: PaymentMethod = {
                    id: method._id,
                    type: method.type,
                    name: "UPI",
                    upiId: method.upiId,
                    isDefault: method.isDefault,
                };

                setMethods((prev) => [
                    ...prev,
                    newMethod,
                ]);

                setSuccess("UPI payment method added successfully.");

                setUpiId("");

                setTimeout(() => {
                    setShowAdd(false);
                    setSuccess("");
                }, 1000);
            } catch (error) {
                console.error("Add UPI payment method error:", error);

                setError(error instanceof Error ? error.message : "Failed to add payment method.");
            } finally {
                setSubmitting(false);
            }

            return;
        }

        const cardNumber = cardData.number.replace(/\s/g, "");

        if (!/^\d{12,19}$/.test(cardNumber)) {
            setError("Please enter a valid card number.");
            return;
        }

        if (!cardData.name.trim()) {
            setError("Please enter the name on your card.");
            return;
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardData.expiry.trim())) {
            setError("Please enter expiry as MM/YY.");
            return;
        }

        if (!/^\d{3,4}$/.test(cardData.cvv)) {
            setError("Please enter a valid CVV.");
            return;
        }

        try {
            setSubmitting(true);

            const response = await fetch(
                `${API_URL}/api/payment-methods`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json", },
                    body: JSON.stringify({
                        type: "card",

                        brand: "Visa",
                        last4: cardNumber.slice(-4),
                        expiry: cardData.expiry.trim(),
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                    "Failed to add payment method."
                );
            }

            const method: ApiPaymentMethod = result.data;

            const newMethod: PaymentMethod = {
                id: method._id,
                type: method.type,
                name: method.brand || "Card",
                last4: method.last4,
                expiry: method.expiry,
                isDefault: method.isDefault,
            };

            setMethods((prev) => [
                ...prev,
                newMethod,
            ]);

            setSuccess("Payment method added successfully.");

            setCardData({
                number: "",
                name: "",
                expiry: "",
                cvv: "",
            });

            setTimeout(() => {
                setShowAdd(false);
                setSuccess("");
            }, 1000);
        } catch (error) {
            console.error("Add card payment method error:", error);

            setError(error instanceof Error ? error.message : "Failed to add payment method.");
        } finally {
            setSubmitting(false);
        }
    };

    const deleteMethod = async (id: string) => {
        try {
            setError("");

            const response = await fetch(
                `${API_URL}/api/payment-methods/${id}`,
                {
                    method: "DELETE",
                    credentials: "include",
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                    "Failed to remove payment method."
                );
            }

            setMethods((prev) => {
                const remaining = prev.filter(
                    (method) => method.id !== id
                );

                return remaining;
            });

            await fetchPaymentMethods();
        } catch (error) {
            console.error("Delete payment method error:", error);

            setError(error instanceof Error ? error.message : "Failed to remove payment method.");
        }
    };

    const setDefault = async (id: string) => {
        try {
            setError("");

            const response = await fetch(
                `${API_URL}/api/payment-methods/${id}/default`,
                {
                    method: "PATCH",
                    credentials: "include",
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to update default payment method.");
            }

            setMethods((prev) =>
                prev.map((method) => ({
                    ...method,
                    isDefault: method.id === id,
                }))
            );
        } catch (error) {
            console.error("Set default payment method error:", error);

            setError(error instanceof Error ? error.message : "Failed to update default payment method.");
        }
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
                        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-500">
                            Account
                        </p>

                        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight md:text-5xl">
                            Payment Methods
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                            Manage your saved payment methods for
                            faster and easier checkout.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={openAddModal}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 text-xs font-semibold text-white transition hover:bg-orange-600"
                    >
                        <Plus size={16} />
                        Add Payment Method
                    </button>
                </div>


                {error && !showAdd && (
                    <ErrorMessage
                        message={error}
                        onClose={() => setError("")}
                    />
                )}

                <div className="mt-9 flex items-start gap-4 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.04] px-5 py-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                        <ShieldCheck size={18} />
                    </div>

                    <div>
                        <p className="text-sm font-medium text-zinc-300">
                            Your payment information is secure
                        </p>

                        <p className="mt-1 text-xs leading-5 text-zinc-600">
                            Payment details are protected and your full card information is never displayed.
                        </p>
                    </div>
                </div>

                {loading ? (
                    <div className="mt-10 flex justify-center py-20">
                        <Loader2
                            size={28}
                            className="animate-spin text-orange-500"
                        />
                    </div>
                ) : methods.length > 0 ? (
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

                        <h2 className="mt-6 font-serif text-2xl font-bold">
                            No payment methods
                        </h2>

                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-600">
                            Add a card or UPI account to make your checkout experience faster.
                        </p>

                        <button
                            type="button"
                            onClick={openAddModal}
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
                    <div className="absolute inset-0" onClick={closeAddModal} />

                    <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#141414] shadow-2xl">
                        <div className="border-b border-white/10 px-6 py-5 md:px-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-500">
                                        Payment
                                    </p>

                                    <h2 className="mt-1 font-serif text-2xl font-bold">
                                        Add Payment Method
                                    </h2>
                                </div>

                                <button
                                    type="button"
                                    onClick={closeAddModal}
                                    disabled={submitting}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-white/20 hover:text-white disabled:opacity-50"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="px-6 pt-5 md:px-8">
                                <ErrorMessage
                                    message={error}
                                    onClose={() => setError("")}
                                />
                            </div>
                        )}

                        {success && (
                            <div className="px-6 pt-5 md:px-8">
                                <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                                    <Check size={17} />
                                    {success}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-2 px-6 pt-6 md:px-8">
                            <button
                                type="button"
                                onClick={() => { setMethodType("card"); setError(""); }}
                                className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-semibold transition ${methodType === "card" ? "border-orange-500/40 bg-orange-500/10 text-orange-500" : "border-white/10 bg-[#0d0d0d] text-zinc-500 hover:text-white"}`}
                            >
                                <CreditCard size={16} />
                                Card
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setMethodType("upi"); setError("");
                                }}
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
                                        onChange={(e) => { setUpiId(e.target.value); setError(""); }}
                                        placeholder="yourname@upi"
                                        required
                                    />

                                    <div className="rounded-xl border border-white/5 bg-[#0d0d0d] p-4 text-xs leading-5 text-zinc-600">
                                        Example:
                                        <br />
                                        yourname@oksbi
                                        <br />
                                        yourname@ybl
                                        <br />
                                        yourname@paytm
                                    </div>
                                </>
                            )}


                            <div className="flex justify-end gap-3 border-t border-white/10 pt-6">
                                <button
                                    type="button"
                                    onClick={closeAddModal}
                                    disabled={submitting}
                                    className="h-11 rounded-xl border border-white/10 px-5 text-xs font-semibold text-zinc-400 transition hover:text-white disabled:opacity-50"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-orange-500 px-6 text-xs font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {submitting ? (
                                        <>
                                            <Loader2
                                                size={15}
                                                className="animate-spin"
                                            />
                                            Adding...
                                        </>
                                    ) : (
                                        <>
                                            <Plus size={15} />
                                            Add Method
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}