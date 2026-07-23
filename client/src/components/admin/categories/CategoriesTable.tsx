"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

const categories = [
    {
        id: "1",
        name: "Pizza",
        image: "/images/categories/pizza.png",
        items: 12,
        active: true,
    },
    {
        id: "2",
        name: "Burger",
        image: "/images/categories/burger.png",
        items: 8,
        active: true,
    },
    {
        id: "3",
        name: "Dessert",
        image: "/images/categories/dessert.png",
        items: 5,
        active: false,
    },
];

export default function CategoriesTable() {
    return (
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#151515]">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[850px]">
                    <thead className="border-b border-white/10 bg-[#111111]">
                        <tr>
                            <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                                Category
                            </th>

                            <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                                Total Items
                            </th>

                            <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                                Status
                            </th>

                            <th className="px-6 py-5 text-right text-sm font-semibold text-zinc-400">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id} className="border-b border-white/10 transition hover:bg-white/[0.02]">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={64}
                                            height={64}
                                            className="rounded-2xl object-cover"
                                        />

                                        <div>
                                            <h3 className="font-semibold text-white">{category.name}</h3>

                                            <p className="mt-1 text-sm text-zinc-500">ID #{category.id}</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-5 font-semibold text-white">
                                    {category.items} Items
                                </td>

                                <td className="px-6 py-5">
                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-semibold ${category.active
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-red-500/10 text-red-400"
                                            }`}
                                    >
                                        {category.active ? "Active" : "Hidden"}
                                    </span>
                                </td>

                                <td className="px-6 py-5">
                                    <div className="flex justify-end gap-3">
                                        <Link href={`/admin/categories/${category.id}`} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111111] text-zinc-400 transition hover:border-orange-500 hover:text-orange-500">
                                            <Pencil size={18} />
                                        </Link>

                                        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111111] text-zinc-400 transition hover:border-red-500 hover:text-red-500">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}