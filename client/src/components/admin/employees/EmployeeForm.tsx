"use client";

import { useState } from "react";
import { Upload, User } from "lucide-react";

import CustomSelect from "@/components/ui/CustomSelect";

type Props = {
    mode: "create" | "edit";
};

export default function EmployeeForm({ mode }: Props) {
    const [active, setActive] = useState(true);

    const roles = [
        { value: "manager", label: "Manager" },
        { value: "chef", label: "Chef" },
        { value: "cashier", label: "Cashier" },
        { value: "delivery-rider", label: "Delivery Rider" },
    ];

    const [selectedRole, setSelectedRole] = useState(roles[0]);

    return (
        <form className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h2 className="text-xl font-bold text-white">Profile Image</h2>

                <div className="mt-6 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-white/10 bg-[#111111] p-12">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10">
                        <User
                            size={36}
                            className="text-orange-500"
                        />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-white">Upload Employee Photo</h3>

                    <p className="mt-2 text-center text-sm text-zinc-500">PNG, JPG or WEBP up to 5MB</p>

                    <button type="button" className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 font-semibold text-white transition hover:bg-orange-600">
                        <Upload size={18} />
                        Choose Image
                    </button>
                </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h2 className="text-xl font-bold text-white">Employee Information</h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Rahul Sharma"
                            className="h-12 w-full rounded-2xl border border-white/10 bg-[#111111] px-5 text-white outline-none transition focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="rahul@example.com"
                            className="h-12 w-full rounded-2xl border border-white/10 bg-[#111111] px-5 text-white outline-none transition focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            placeholder="+91 9876543210"
                            className="h-12 w-full rounded-2xl border border-white/10 bg-[#111111] px-5 text-white outline-none transition focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">
                            Role
                        </label>

                        <CustomSelect
                            options={roles}
                            value={selectedRole}
                            onChange={setSelectedRole}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium text-zinc-400">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            className="h-12 w-full rounded-2xl border border-white/10 bg-[#111111] px-5 text-white outline-none transition focus:border-orange-500"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="mb-3 block text-sm font-medium text-zinc-400">
                            Status
                        </label>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setActive(true)}
                                className={`flex-1 rounded-2xl px-5 py-3 font-semibold transition ${active
                                    ? "bg-orange-500 text-white"
                                    : "border border-white/10 bg-[#111111] text-zinc-400"
                                    }`}
                            >
                                Active
                            </button>

                            <button
                                type="button"
                                onClick={() => setActive(false)}
                                className={`flex-1 rounded-2xl px-5 py-3 font-semibold transition ${!active
                                    ? "bg-red-500 text-white"
                                    : "border border-white/10 bg-[#111111] text-zinc-400"
                                    }`}
                            >
                                Inactive
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex justify-end gap-4">
                <button type="button" className="h-12 rounded-2xl border border-white/10 px-6 font-semibold text-white transition hover:border-red-500">
                    Cancel
                </button>

                <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 font-semibold text-white transition hover:bg-orange-600">
                    {mode === "create"
                        ? "Create Employee"
                        : "Save Changes"}
                </button>
            </div>
        </form>
    );
}