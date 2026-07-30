"use client";

import Link from "next/link";
import { ArrowLeft, Check, Edit3, Home, MapPin, MoreHorizontal, Plus, Trash2 } from "lucide-react";
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

const initialAddresses: Address[] = [
    {
        id: "1",
        label: "Home",
        name: "Nishant Tyagi",
        street: "123 Main Street",
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        postalCode: "201001",
        country: "India",
        phone: "+91 98765 43210",
        isDefault: true,
    },
];

export default function AddressesPage() {
    const [addresses, setAddresses] =
        useState<Address[]>(initialAddresses);

    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        label: "Home",
        name: "Nishant Tyagi",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India",
        phone: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddAddress = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const newAddress: Address = {
            id: crypto.randomUUID(),
            ...formData,
            isDefault: addresses.length === 0,
        };

        setAddresses((prev) => [...prev, newAddress]);
        setShowForm(false);

        setFormData({
            label: "Home",
            name: "Nishant Tyagi",
            street: "",
            city: "",
            state: "",
            postalCode: "",
            country: "India",
            phone: "",
        });
    };

    const handleDelete = (id: string) => {
        setAddresses((prev) => {
            const remaining = prev.filter(
                (address) => address.id !== id
            );

            if (
                remaining.length > 0 &&
                !remaining.some((address) => address.isDefault)
            ) {
                remaining[0].isDefault = true;
            }

            return remaining;
        });
    };

    const setDefault = (id: string) => {
        setAddresses((prev) =>
            prev.map((address) => ({
                ...address,
                isDefault: address.id === id,
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

                        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight md:text-5xl">Saved Addresses</h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">Save your favorite delivery locations for faster checkout.</p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowForm(true)}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 text-xs font-semibold text-white transition hover:bg-orange-600"
                    >
                        <Plus size={16} />
                        Add New Address
                    </button>
                </div>

                {addresses.length > 0 ? (
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {addresses.map((address) => (
                            <AddressCard
                                key={address.id}
                                address={address}
                                onDelete={handleDelete}
                                onSetDefault={setDefault}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="mt-10 rounded-3xl border border-white/10 bg-[#141414] px-6 py-16 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                            <MapPin size={26} />
                        </div>

                        <h2 className="mt-6 font-serif text-2xl font-bold">No saved addresses</h2>

                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-600">Add your home, work, or any other delivery location to make checkout faster.</p>

                        <button
                            type="button"
                            onClick={() => setShowForm(true)}
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-xs font-semibold text-white transition hover:bg-orange-600"
                        >
                            <Plus size={15} />
                            Add Address
                        </button>
                    </div>
                )}

                <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
                    <Link href="/profile" className="flex items-center gap-2 text-xs text-zinc-600 transition hover:text-white">
                        <ArrowLeft size={14} />
                        Profile
                    </Link>

                    <Link href="/profile/personal-info" className="text-xs text-zinc-600 transition hover:text-orange-500">
                        Personal Information
                    </Link>
                </div>
            </div>

            {showForm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
                    <div className="absolute inset-0" onClick={() => setShowForm(false)} />

                    <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#141414] shadow-2xl">
                        <div className="sticky top-0 z-10 border-b border-white/10 bg-[#141414] px-6 py-5 md:px-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-500">New Address</p>

                                    <h2 className="mt-1 font-serif text-2xl font-bold">Add Delivery Address</h2>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-white/20 hover:text-white"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleAddAddress} className="space-y-6 px-6 py-7 md:px-8">
                            <div>
                                <label className="mb-3 block text-xs font-medium text-zinc-400">
                                    Address Type
                                </label>

                                <div className="flex gap-2">
                                    {["Home", "Work", "Other"].map(
                                        (label) => (
                                            <button
                                                key={label}
                                                type="button"
                                                onClick={() =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        label,
                                                    }))
                                                }
                                                className={`rounded-xl px-5 py-2.5 text-xs font-medium transition ${formData.label === label
                                                    ? "bg-orange-500 text-white"
                                                    : "border border-white/10 bg-[#0d0d0d] text-zinc-500 hover:text-white"
                                                    }`}
                                            >
                                                {label}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <Field
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nishant Tyagi"
                                />

                                <Field
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                />

                                <div className="md:col-span-2">
                                    <Field
                                        label="Street Address"
                                        name="street"
                                        value={formData.street}
                                        onChange={handleChange}
                                        placeholder="House number, street, area"
                                        required
                                    />
                                </div>

                                <Field
                                    label="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Ghaziabad"
                                    required
                                />

                                <Field
                                    label="State"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="Uttar Pradesh"
                                    required
                                />

                                <Field
                                    label="Postal Code"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    placeholder="201001"
                                    required
                                />

                                <Field
                                    label="Country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="India"
                                    required
                                />
                            </div>

                            <div className="flex justify-end gap-3 border-t border-white/10 pt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="h-11 rounded-xl border border-white/10 px-5 text-xs font-semibold text-zinc-400 transition hover:text-white"
                                >
                                    Cancel
                                </button>

                                <button type="submit" className="inline-flex h-11 items-center gap-2 rounded-xl bg-orange-500 px-6 text-xs font-semibold text-white transition hover:bg-orange-600">
                                    <Plus size={15} />
                                    Save Address
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}

function AddressCard({
    address,
    onDelete,
    onSetDefault,
}: {
    address: Address;
    onDelete: (id: string) => void;
    onSetDefault: (id: string) => void;
}) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <article className="group relative rounded-3xl border border-white/10 bg-[#141414] p-6 transition hover:border-white/15">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                        <Home size={18} />
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="font-serif text-lg font-bold">{address.label}</h2>

                            {address.isDefault && (
                                <span className="rounded-full bg-orange-500/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-orange-500">
                                    Default
                                </span>
                            )}
                        </div>

                        <p className="mt-0.5 text-xs text-zinc-600">Delivery address</p>
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
                                onClick={() => {
                                    setMenuOpen(false);
                                }}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs text-zinc-400 transition hover:bg-white/5 hover:text-white"
                            >
                                <Edit3 size={14} />
                                Edit Address
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setMenuOpen(false);
                                    onDelete(address.id);
                                }}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs text-red-400 transition hover:bg-red-500/10"
                            >
                                <Trash2 size={14} />
                                Delete
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
                    <p className="font-medium text-zinc-300">{address.name}</p>

                    <p>{address.street}</p>

                    <p>
                        {address.city}, {address.state}{" "}
                        {address.postalCode}
                    </p>

                    <p>{address.country}</p>

                    {address.phone && (
                        <p className="mt-2 text-xs text-zinc-600">{address.phone}</p>
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
            <label htmlFor={name} className="mb-2 block text-xs font-medium text-zinc-400">
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