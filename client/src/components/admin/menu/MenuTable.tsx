"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

const items = [
    {
        id: "1",
        name: "Paneer Tikka Pizza",
        image: "/images/dishes/paneer-tikka.png",
        category: "Pizza",
        price: 299,
        available: true,
    },
    {
        id: "2",
        name: "Masala Dosa",
        image: "/images/dishes/masala-dosa.png",
        category: "South Indian",
        price: 189,
        available: true,
    },
    {
        id: "3",
        name: "Gulab Jamun",
        image: "/images/dishes/gulab-jamun.png",
        category: "Dessert",
        price: 99,
        available: false,
    },
];

export default function MenuTable() {
    return (
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#151515]">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">
                    <thead className="border-b border-white/10 bg-[#111111]">
                        <tr>
                            <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                                Item
                            </th>

                            <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                                Category
                            </th>

                            <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-400">
                                Price
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
                        {items.map((item) => (
                            <tr key={item.id} className="border-b border-white/10 transition hover:bg-white/[0.02]">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={64}
                                            height={64}
                                            className="h-16 w-16 rounded-2xl object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-white">{item.name}</h3>

                                            <p className="mt-1 text-sm text-zinc-500">ID #{item.id}</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-5">
                                    <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400">{item.category}</span>
                                </td>

                                <td className="px-6 py-5 font-semibold text-white">
                                    ₹{item.price}
                                </td>

                                <td className="px-6 py-5">
                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-semibold ${item.available
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-red-500/10 text-red-400"
                                            }`}
                                    >
                                        {item.available ? "Available" : "Out of Stock"}
                                    </span>
                                </td>

                                <td className="px-6 py-5">
                                    <div className="flex justify-end gap-3">
                                        <Link
                                            href={`/admin/menu/add/${item.id}`}
                                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111111] text-zinc-400 transition hover:border-orange-500 hover:text-orange-500"
                                        >
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