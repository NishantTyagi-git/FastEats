"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Download } from "lucide-react";

type Props = {
    orderId: string;
};

export default function OrderHeader({ orderId }: Props) {
    return (
        <section className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#151515] p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <Link href="/admin/orders" className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-orange-500">
                    <ArrowLeft size={18} />
                    Back to Orders
                </Link>

                <h1 className="text-4xl font-black text-white">#{orderId}</h1>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                    <span>Placed on 22 Jul 2026</span>

                    <span className="h-1 w-1 rounded-full bg-zinc-600" />

                    <span>2:15 PM</span>

                    <span className="h-1 w-1 rounded-full bg-zinc-600" />

                    <span className="rounded-full bg-orange-500/10 px-3 py-1 font-medium text-orange-400">Preparing</span>
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <button className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] px-5 font-semibold text-white transition hover:border-orange-500">
                    <Printer size={18} />
                    Print Invoice
                </button>

                <button className="flex h-12 items-center gap-3 rounded-2xl bg-orange-500 px-5 font-semibold text-white transition hover:bg-orange-600">
                    <Download size={18} />
                    Download Invoice
                </button>
            </div>
        </section>
    );
}