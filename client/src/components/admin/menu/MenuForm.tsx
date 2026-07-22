"use client";

import { useState } from "react";
import { Upload, ImageIcon } from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";

type Props = {
    mode: "create" | "edit";
};

const categories = [
    { value: "pizza", label: "Pizza" },
    { value: "burger", label: "Burger" },
    { value: "dessert", label: "Dessert" },
    { value: "drinks", label: "Drinks" },
];

const availability = [
    { value: "available", label: "Available" },
    { value: "out-of-stock", label: "Out of Stock" },
];

export default function MenuForm({ mode }: Props) {
    const [category, setCategory] = useState(categories[0]);
    const [status, setStatus] = useState(availability[0]);

    return (
        <form className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h2 className="text-xl font-bold text-white">Food Image</h2>

                <div className="mt-6 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-white/10 bg-[#111111] p-12">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10">
                        <ImageIcon
                            size={36}
                            className="text-orange-500"
                        />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-white">Upload Food Image</h3>

                    <p className="mt-2 text-center text-sm text-zinc-500">PNG, JPG or WEBP up to 5MB</p>

                    <button type="button" className="mt-6 flex h-11 items-center gap-2 rounded-2xl bg-orange-500 px-5 font-semibold text-white transition hover:bg-orange-600">
                        <Upload size={18} />
                        Choose Image
                    </button>
                </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h2 className="text-xl font-bold text-white">Food Information</h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium text-zinc-400">Food Name</label>

                        <input
                            type="text"
                            placeholder="Paneer Tikka Pizza"
                            className="h-12 w-full rounded-2xl border border-white/10 bg-[#111111] px-5 text-white outline-none transition focus:border-orange-500"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium text-zinc-400">Description</label>

                        <textarea
                            rows={5}
                            placeholder="Write a short description..."
                            className="w-full rounded-2xl border border-white/10 bg-[#111111] p-5 text-white outline-none transition focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">Category</label>

                        <CustomSelect
                            options={categories}
                            value={category}
                            onChange={setCategory}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">Price</label>

                        <input
                            type="number"
                            placeholder="299"
                            className="h-12 w-full rounded-2xl border border-white/10 bg-[#111111] px-5 text-white outline-none transition focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">Discount Price</label>

                        <input
                            type="number"
                            placeholder="249"
                            className="h-12 w-full rounded-2xl border border-white/10 bg-[#111111] px-5 text-white outline-none transition focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">Availability</label>

                        <CustomSelect
                            options={availability}
                            value={status}
                            onChange={setStatus}
                        />
                    </div>
                </div>
            </section>

            <div className="flex justify-end gap-4">
                <button type="button" className="h-12 rounded-2xl border border-white/10 px-6 font-semibold text-white transition hover:border-red-500">
                    Cancel
                </button>

                <button type="submit" className="h-12 rounded-2xl bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600">
                    {mode === "create" ? "Create Item" : "Save Changes"}
                </button>
            </div>
        </form>
    );
}