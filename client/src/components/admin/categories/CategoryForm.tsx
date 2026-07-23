"use client";

import { useState } from "react";
import { Upload, ImageIcon } from "lucide-react";

type Props = {
    mode: "create" | "edit";
};

export default function CategoryForm({ mode }: Props) {
    const [active, setActive] = useState(true);

    return (
        <form className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h2 className="text-xl font-bold text-white">Category Image</h2>

                <div className="mt-6 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-white/10 bg-[#111111] p-12">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange/10">
                        <ImageIcon
                            size={36}
                            className="text-orange"
                        />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-white">Upload Category Image</h3>

                    <p className="mt-2 text-center text-sm text-zinc-500">PNG, JPG or WEBP up to 5MB</p>

                    <button type="button" className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 font-semibold text-white transition hover:bg-orange-600">
                        <Upload size={18} />
                        Choose Image
                    </button>
                </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h2 className="text-xl font-bold text-white">Category Information</h2>

                <div className="mt-6 space-y-6">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">
                            Category Name
                        </label>

                        <input
                            type="text"
                            placeholder="Pizza"
                            className="h-12 w-full rounded-2xl border border-white/10 bg-[#111111] px-5 text-white outline-none transition focus:border-orange"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">
                            Description
                        </label>

                        <textarea
                            rows={5}
                            placeholder="Short description..."
                            className="w-full rounded-2xl border border-white/10 bg-[#111111] p-5 text-white outline-none transition focus:border-orange"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-400">
                            Status
                        </label>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setActive(true)}
                                className={`inline-flex h-12 flex-1 items-center justify-center rounded-2xl font-semibold transition ${active
                                    ? "bg-orange-500 text-white hover:bg-orange-600"
                                    : "border border-white/10 bg-[#111111] text-zinc-400 hover:border-orange-500 hover:text-white"
                                    }`}
                            >
                                Active
                            </button>

                            <button
                                type="button"
                                onClick={() => setActive(false)}
                                className={`inline-flex h-12 flex-1 items-center justify-center rounded-2xl font-semibold transition ${!active
                                    ? "bg-orange-500 text-white hover:bg-orange-600"
                                    : "border border-white/10 bg-[#111111] text-zinc-400 hover:border-orange-500 hover:text-white"
                                    }`}
                            >
                                Hidden
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    className="h-12 rounded-2xl border border-white/10 px-6 font-semibold text-white transition hover:border-red-500"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 font-semibold text-white transition hover:bg-orange-600"
                >
                    {mode === "create"
                        ? "Create Category"
                        : "Save Changes"}
                </button>
            </div>
        </form>
    );
}