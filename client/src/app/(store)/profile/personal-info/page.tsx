"use client";

import Link from "next/link";
import { ArrowLeft, Camera, Check, ChevronRight, LockKeyhole, MapPin, Phone, Save, UserRound, Mail, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";

interface FormData {
    fullName: string;
    email: string;
    contact: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export default function PersonalInfoPage() {
    const { user, isLoading, refreshUser } = useAuth();

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        contact: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
    });

    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) return;

        setFormData({
            fullName: user.fullName || "",
            email: user.email || "",
            contact: user.contact || "",
            street: user.address?.street || "",
            city: user.address?.city || "",
            state: "",
            postalCode: "",
            country: user.address?.country || "",
        });
    }, [user]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSaved(false);
        setError("");
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setIsSaving(true);
        setSaved(false);
        setError("");

        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        
        try {
            const response = await fetch(
                `${API_URL}/api/users/me`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        fullName: formData.fullName,
                        contact: formData.contact,
                        address: {
                            street: formData.street,
                            city: formData.city,
                            country: formData.country,
                        },
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to update information."
                );
            }

            await refreshUser();
            setSaved(true);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong."
            );
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <main className="min-h-screen bg-[#090909] pt-28">
                <div className="flex min-h-[60vh] items-center justify-center">
                    <Loader2
                        size={30}
                        className="animate-spin text-orange-500"
                    />
                </div>
            </main>
        );
    }

    if (!user) {
        return (
            <main className="min-h-screen bg-[#090909] px-6 pt-32 text-white">
                <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-[#141414] p-10 text-center">
                    <h1 className="font-serif text-3xl font-bold">Login required</h1>

                    <p className="mt-3 text-sm text-zinc-500">Please login to manage your personal information.</p>

                    <Link href="/login" className="mt-7 inline-flex rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                        Login
                    </Link>
                </div>
            </main>
        );
    }

    const initials = user.fullName
        .trim()
        .split(" ")
        .slice(0, 2)
        .map((name) => name[0])
        .join("")
        .toUpperCase();

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

                <div className="mt-9">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-500">Account</p>

                    <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight md:text-5xl">Personal Information</h1>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">Keep your personal details and delivery information up to date.</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                    <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#141414]">
                        <div className="border-b border-white/10 px-6 py-5 md:px-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600">Profile</p>

                            <h2 className="mt-1 font-serif text-xl font-bold">Your account</h2>
                        </div>

                        <div className="flex flex-col gap-6 px-6 py-7 md:flex-row md:items-center md:px-8">

                            <div className="relative shrink-0">
                                {user.profilePicture ? (
                                    <img
                                        src={user.profilePicture}
                                        alt={user.fullName}
                                        className="h-24 w-24 rounded-full border border-orange-500/30 object-cover"
                                    />
                                ) : (
                                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 font-serif text-2xl font-bold text-orange-500">
                                        {initials}
                                    </div>
                                )}

                                <button type="button" className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#141414] bg-orange-500 text-white transition hover:bg-orange-600" title="Change profile photo">
                                    <Camera size={14} />
                                </button>
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className="font-serif text-2xl font-bold">{user.fullName}</h2>

                                    {user.isVerified && (
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                                            <Check size={11} />
                                            Verified
                                        </span>
                                    )}
                                </div>

                                <p className="mt-2 text-sm text-zinc-500">{user.email}</p>

                                <p className="mt-1 text-xs text-zinc-700">Personal account</p>
                            </div>

                            <button type="button" className="hidden rounded-xl border border-white/10 px-5 py-3 text-xs font-semibold text-zinc-300 transition hover:border-orange-500/40 hover:text-orange-500 md:block">
                                Change Photo
                            </button>
                        </div>
                    </section>

                    <section className="rounded-3xl border border-white/10 bg-[#141414]">
                        <div className="border-b border-white/10 px-6 py-5 md:px-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                                    <UserRound size={18} />
                                </div>

                                <div>
                                    <h2 className="font-serif text-xl font-bold">Personal Details</h2>

                                    <p className="mt-0.5 text-xs text-zinc-600">Your basic contact information</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 px-6 py-7 md:grid-cols-2 md:px-8">
                            <Field
                                label="Full Name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                icon={<UserRound size={16} />}
                            />

                            <Field
                                label="Phone Number"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                icon={<Phone size={16} />}
                            />

                            <div className="md:col-span-2">
                                <label htmlFor="email" className="mb-2 flex items-center justify-between text-xs font-medium text-zinc-400">
                                    <span>Email Address</span>

                                    <span className="flex items-center gap-1.5 text-[10px] text-zinc-600">
                                        <LockKeyhole size={11} />
                                        Protected
                                    </span>
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={16}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700"
                                    />

                                    <input
                                        id="email"
                                        value={formData.email}
                                        disabled
                                        className="h-12 w-full cursor-not-allowed rounded-xl border border-white/5 bg-[#0d0d0d] pl-11 pr-4 text-sm text-zinc-600 outline-none"
                                    />
                                </div>

                                <p className="mt-2 text-[10px] text-zinc-700">Your email is used for account access and order notifications.</p>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-3xl border border-white/10 bg-[#141414]">
                        <div className="border-b border-white/10 px-6 py-5 md:px-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                                    <MapPin size={18} />
                                </div>

                                <div>
                                    <h2 className="font-serif text-xl font-bold">Delivery Address</h2>

                                    <p className="mt-0.5 text-xs text-zinc-600">Your default food delivery location</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 px-6 py-7 md:grid-cols-2 md:px-8">

                            <div className="md:col-span-2">
                                <Field
                                    label="Street Address"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    placeholder="House number, street, area"
                                />
                            </div>

                            <Field
                                label="City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Ghaziabad"
                            />

                            <Field
                                label="State"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="Uttar Pradesh"
                            />

                            <Field
                                label="Postal Code"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                placeholder="201001"
                            />

                            <Field
                                label="Country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="India"
                            />
                        </div>
                    </section>

                    <section className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#141414] p-5 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            {saved ? (
                                <div className="flex items-center gap-2 text-sm text-emerald-400">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10">
                                        <Check size={14} />
                                    </span>

                                    Changes saved successfully.
                                </div>
                            ) : error ? (
                                <p className="text-sm text-red-400">
                                    {error}
                                </p>
                            ) : (
                                <p className="text-xs text-zinc-600">
                                    Make sure your delivery details are correct.
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            <Link href="/profile" className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 px-5 text-xs font-semibold text-zinc-400 transition hover:border-white/20 hover:text-white">
                                Cancel
                            </Link>

                            <button type="submit" disabled={isSaving} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 text-xs font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60">
                                {isSaving ? (
                                    <>
                                        <Loader2 size={15} className="animate-spin" />
                                        Saving
                                    </>
                                ) : (
                                    <>
                                        <Save size={15} />
                                        Save Changes
                                    </>
                                )}
                            </button>
                        </div>
                    </section>
                </form>

                <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-6">
                    <Link href="/profile" className="flex items-center gap-2 text-xs text-zinc-600 transition hover:text-white">
                        <ArrowLeft size={14} />
                        Profile
                    </Link>

                    <Link href="/profile/addresses" className="flex items-center gap-1 text-xs text-zinc-600 transition hover:text-orange-500">
                        Manage saved addresses
                        <ChevronRight size={14} />
                    </Link>
                </div>
            </div>
        </main>
    );
}

interface FieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    icon?: React.ReactNode;
}

function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    icon,
}: FieldProps) {
    return (
        <div>
            <label htmlFor={name} className="mb-2 block text-xs font-medium text-zinc-400">
                {label}
            </label>

            <div className="relative">
                {icon && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700">
                        {icon}
                    </span>
                )}

                <input
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`h-12 w-full rounded-xl border border-white/10 bg-[#0d0d0d] pr-4 text-sm text-white outline-none transition placeholder:text-zinc-700 hover:border-white/15 focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/10 ${icon ? "pl-11" : "pl-4"
                        }`}
                />
            </div>
        </div>
    );
}