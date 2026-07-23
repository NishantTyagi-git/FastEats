"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2, Circle } from "lucide-react";

type Employee = {
    id: string;
    name: string;
    role: string;
    image: string;
    status: string;
};

type Props = {
    employee: Employee;
};

export default function EmployeeCard({ employee }: Props) {
    const active = employee.status === "Active";

    return (
        <article className="rounded-3xl border border-white/10 bg-[#151515] p-6 transition hover:border-orange-500/40">
            <div className="flex items-start justify-between">
                <Image
                    src={employee.image}
                    alt={employee.name}
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] rounded-2xl object-cover"
                />

                <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${active
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                        }`}
                >
                    <Circle
                        size={8}
                        fill="currentColor"
                    />

                    {employee.status}
                </span>
            </div>

            <div className="mt-5">
                <h3 className="text-xl font-bold text-white">{employee.name}</h3>

                <p className="mt-1 text-zinc-400">{employee.role}</p>

                <p className="mt-2 text-sm text-zinc-500">Employee ID #{employee.id}</p>
            </div>

            <div className="mt-6 flex gap-3">
                <Link href={`/admin/employees/${employee.id}`} className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#111111] font-semibold text-zinc-300 transition hover:border-orange-500 hover:text-orange-500">
                    <Pencil size={18} />
                    Edit
                </Link>

                <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] text-zinc-300 transition hover:border-red-500 hover:text-red-500">
                    <Trash2 size={18} />
                </button>
            </div>
        </article>
    );
}