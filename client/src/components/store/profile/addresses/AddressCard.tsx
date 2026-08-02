"use client";

import { Check, Edit3, Home, MapPin, MoreHorizontal, Trash2 } from "lucide-react";
import { useState } from "react";

interface Address {
    id: string;
    label: string;
    name: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phone: string;
    isDefault: boolean;
}

export default function AddressCard({
    address,
    onDelete,
    onSetDefault,
    onEdit,
}: {
    address: Address;
    onDelete: (id: string) => void;
    onSetDefault: (id: string) => void;
    onEdit: (address: Address) => void;
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        setDeleting(true);

        await onDelete(address.id);

        setDeleting(false);
        setMenuOpen(false);
    };

    return (
        <article className="group relative rounded-3xl border border-white/10 bg-[#141414] p-6 transition hover:border-white/15">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                        <Home size={18} />
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="font-serif text-lg font-bold">
                                {address.label}
                            </h2>

                            {address.isDefault && (
                                <span className="rounded-full bg-orange-500/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-orange-500">
                                    Default
                                </span>
                            )}
                        </div>

                        <p className="mt-0.5 text-xs text-zinc-600">
                            Delivery address
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-white/5 hover:text-white"
                    >
                        <MoreHorizontal size={18} />
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 top-10 z-20 w-40 overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] p-1 shadow-2xl">
                            <button
                                type="button"
                                onClick={() => { setMenuOpen(false); onEdit(address); }}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs text-zinc-400 transition hover:bg-white/5 hover:text-white"
                            >
                                <Edit3 size={14} />
                                Edit Address
                            </button>

                            <button
                                type="button"
                                disabled={deleting}
                                onClick={handleDelete}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs text-red-400 transition hover:bg-red-500/10 disabled:opacity-50"
                            >
                                <Trash2 size={14} />
                                {deleting ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6 flex gap-3">
                <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-zinc-700"
                />

                <div className="text-sm leading-6 text-zinc-400">
                    <p className="font-medium text-zinc-300">
                        {address.name}
                    </p>

                    <p>{address.street}</p>

                    <p>
                        {address.city}, {address.state}{" "}
                        {address.postalCode}
                    </p>

                    <p>{address.country}</p>

                    {address.phone && (
                        <p className="mt-2 text-xs text-zinc-600">
                            {address.phone}
                        </p>
                    )}
                </div>
            </div>

            {!address.isDefault && (
                <button
                    type="button"
                    onClick={() => onSetDefault(address.id)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-zinc-600 transition hover:text-orange-500"
                >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-700">
                        <Check size={9} />
                    </span>

                    Make default
                </button>
            )}

            {address.isDefault && (
                <div className="mt-6 flex items-center gap-2 text-xs text-emerald-500">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                        <Check size={11} />
                    </span>

                    This is your default delivery address
                </div>
            )}
        </article>
    );
}