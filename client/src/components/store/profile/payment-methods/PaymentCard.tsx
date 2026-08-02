"use client";

import { CreditCard, Loader2, MoreHorizontal, Trash2, WalletCards } from "lucide-react";
import { useState } from "react";

type PaymentMethod = {
    id: string;
    type: "card" | "upi";
    name: string;
    last4?: string;
    expiry?: string;
    upiId?: string;
    isDefault: boolean;
};

export default function PaymentCard({
    method,
    onDelete,
    onSetDefault,
}: {
    method: PaymentMethod;
    onDelete: (id: string) => void;
    onSetDefault: (id: string) => void;
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        if (deleting) return;

        setDeleting(true);

        try {
            await onDelete(method.id);
            setMenuOpen(false);
        } finally {
            setDeleting(false);
        }
    };

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
                            {method.type === "card" ? method.name : "UPI"}
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
                        onClick={() =>
                            setMenuOpen((prev) => !prev)
                        }
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
                                onClick={handleDelete}
                                disabled={deleting}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs text-red-400 transition hover:bg-red-500/10 disabled:opacity-50"
                            >
                                {deleting ? (
                                    <Loader2
                                        size={14}
                                        className="animate-spin"
                                    />
                                ) : (
                                    <Trash2 size={14} />
                                )}

                                {deleting ? "Removing..." : "Remove"}
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