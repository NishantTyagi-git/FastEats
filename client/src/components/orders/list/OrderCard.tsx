import Link from "next/link";
import { ArrowRight, RotateCcw, CheckCircle2, XCircle } from "lucide-react";

type Props = {
    status: "Delivered" | "Cancelled";
    color: "green" | "red";
};

export default function OrderCard({
    status,
    color,
}: Props) {
    const delivered = color === "green";

    return (
        <article className="overflow-hidden rounded-[32px] border border-white/10 bg-[#151515] transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]">
            <div className="p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-3xl font-black text-white">#FE102120</h2>

                            <span
                                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${delivered
                                        ? "border border-green-500/20 bg-green-500/10 text-green-400"
                                        : "border border-red-500/20 bg-red-500/10 text-red-400"
                                    }`}
                            >
                                {delivered ? (<CheckCircle2 size={16} />) : (<XCircle size={16} />)}
                                {status}
                            </span>
                        </div>

                        <p className="mt-4 text-zinc-400">Margherita Pizza • Garlic Bread • Coke</p>
                    </div>

                    <div className="text-left lg:text-right">
                        <p className="text-sm uppercase tracking-[3px] text-zinc-500">Total</p>

                        <h3 className="mt-2 text-4xl font-black text-white">₹699</h3>
                    </div>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                    <div className="rounded-2xl bg-[#101010] p-5">
                        <p className="text-sm uppercase tracking-[3px] text-zinc-500">Ordered</p>

                        <p className="mt-3 text-white">18 July 2026</p>
                    </div>

                    <div className="rounded-2xl bg-[#101010] p-5">
                        <p className="text-sm uppercase tracking-[3px] text-zinc-500">Items</p>

                        <p className="mt-3 text-white">3 Items</p>
                    </div>

                    <div className="rounded-2xl bg-[#101010] p-5">
                        <p className="text-sm uppercase tracking-[3px] text-zinc-500">Payment</p>

                        <p className="mt-3 text-white">UPI</p>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href="/orders/FE102120" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/10 bg-[#101010] px-8 font-semibold text-white transition hover:border-orange-500 hover:text-orange-500">
                        View Details
                        <ArrowRight size={18} />
                    </Link>

                    <button className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600">
                        <RotateCcw size={18} />
                        Order Again
                    </button>
                </div>
            </div>
        </article>
    );
}