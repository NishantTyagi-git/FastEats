"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Field from "@/components/store/profile/addresses/Field";
import AddressCard from "@/components/store/profile/addresses/AddressCard";

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

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const emptyForm = {
    label: "Home",
    name: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    phone: "",
};

export default function AddressesPage() {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const [editingId, setEditingId] = useState<string | null>(null);

    const [formData, setFormData] = useState(emptyForm);

    const fetchAddresses = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                `${API_URL}/api/addresses`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to fetch addresses."
                );
            }

            const data = Array.isArray(result.data)
                ? result.data
                : result.data?.addresses || [];

            setAddresses(
                data.map((address: any) => ({
                    id: address._id || address.id,
                    label: address.label,
                    name: address.name,
                    street: address.street,
                    city: address.city,
                    state: address.state,
                    postalCode: address.postalCode,
                    country: address.country,
                    phone: address.phone || "",
                    isDefault: address.isDefault,
                }))
            );
        } catch (error) {
            console.error("Fetch addresses error:", error);

            setError(error instanceof Error ? error.message : "Failed to fetch addresses.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAddresses();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const openAddForm = () => {
        setEditingId(null);
        setFormData(emptyForm);
        setShowForm(true);
    };

    const openEditForm = (address: Address) => {
        setEditingId(address.id);

        setFormData({
            label: address.label,
            name: address.name,
            street: address.street,
            city: address.city,
            state: address.state,
            postalCode: address.postalCode,
            country: address.country,
            phone: address.phone,
        });

        setShowForm(true);
    };

    const closeForm = () => {
        if (saving) return;

        setShowForm(false);
        setEditingId(null);
        setFormData(emptyForm);
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setSaving(true);
            setError("");

            const isEditing = Boolean(editingId);

            const response = await fetch(
                isEditing ? `${API_URL}/api/addresses/${editingId}` : `${API_URL}/api/addresses`,
                {
                    method: isEditing ? "PATCH" : "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || `Failed to ${isEditing ? "update" : "add"} address.`);
            }

            closeForm();

            await fetchAddresses();
        } catch (error) {
            console.error("Save address error:", error);

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to save address."
            );
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            setError("");

            const response = await fetch(
                `${API_URL}/api/addresses/${id}`,
                {
                    method: "DELETE",
                    credentials: "include",
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Failed to delete address.");
            }

            setAddresses((prev) =>
                prev.filter((address) => address.id !== id)
            );
        } catch (error) {
            console.error("Delete address error:", error);

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to delete address."
            );
        }
    };

    const setDefault = async (id: string) => {
        try {
            setError("");

            const response = await fetch(
                `${API_URL}/api/addresses/${id}/default`,
                {
                    method: "PATCH",
                    credentials: "include",
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Failed to change default address.");
            }

            setAddresses((prev) =>
                prev.map((address) => ({
                    ...address,
                    isDefault: address.id === id,
                }))
            );
        } catch (error) {
            console.error("Set default address error:", error);

            setError(error instanceof Error ? error.message : "Failed to change default address.");
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
                            Saved Addresses
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                            Save your favorite delivery locations for faster checkout.
                        </p>
                    </div>

                    <button type="button" onClick={openAddForm} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 text-xs font-semibold text-white transition hover:bg-orange-600">
                        <Plus size={16} />
                        Add New Address
                    </button>
                </div>

                {error && (
                    <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {[1, 2].map((item) => (
                            <div key={item} className="h-64 animate-pulse rounded-3xl border border-white/10 bg-[#141414]" />
                        ))}
                    </div>
                ) : addresses.length > 0 ? (
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {addresses.map((address) => (
                            <AddressCard
                                key={address.id}
                                address={address}
                                onDelete={handleDelete}
                                onSetDefault={setDefault}
                                onEdit={openEditForm}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="mt-10 rounded-3xl border border-white/10 bg-[#141414] px-6 py-16 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                            <MapPin size={26} />
                        </div>

                        <h2 className="mt-6 font-serif text-2xl font-bold">
                            No saved addresses
                        </h2>

                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-600">
                            Add your home, work, or any other delivery location to make checkout faster.
                        </p>

                        <button type="button" onClick={openAddForm} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-xs font-semibold text-white transition hover:bg-orange-600">
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
                    <div className="absolute inset-0" onClick={closeForm} />

                    <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#141414] shadow-2xl">
                        <div className="sticky top-0 z-10 border-b border-white/10 bg-[#141414] px-6 py-5 md:px-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-500">
                                        {editingId ? "Edit Address" : "New Address"}
                                    </p>

                                    <h2 className="mt-1 font-serif text-2xl font-bold">
                                        {editingId ? "Update Delivery Address" : "Add Delivery Address"}
                                    </h2>
                                </div>

                                <button
                                    type="button"
                                    onClick={closeForm}
                                    disabled={saving}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-white/20 hover:text-white"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 px-6 py-7 md:px-8">
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
                                                onClick={() => setFormData((prev) => ({ ...prev, label }))}
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
                                    required
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
                                    onClick={closeForm}
                                    disabled={saving}
                                    className="h-11 rounded-xl border border-white/10 px-5 text-xs font-semibold text-zinc-400 transition hover:text-white"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-orange-500 px-6 text-xs font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {saving ? (
                                        <>
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Plus size={15} />
                                            {editingId
                                                ? "Update Address"
                                                : "Save Address"}
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



