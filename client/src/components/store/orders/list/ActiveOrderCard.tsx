import Link from "next/link";
import { ArrowRight, Clock3, PackageCheck } from "lucide-react";

export default function ActiveOrderCard() {
    return (
        <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#151515] transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]">
            <div className="p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-3xl font-black text-white">#FE102394</h2>

                            <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500">Preparing</span>
                        </div>

                        <p className="mt-4 text-zinc-400">Paneer Tikka • Veg Burger • Coke</p>
                    </div>
                    <div className="text-left lg:text-right">
                        <p className="text-sm uppercase tracking-[3px] text-zinc-500">Total</p>

                        <h3 className="mt-2 text-4xl font-black text-orange-500">₹1,058</h3>
                    </div>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                    <div className="rounded-2xl bg-[#101010] p-5">
                        <div className="flex items-center gap-3">
                            <Clock3 size={20} className="text-orange-500" />
                            <span className="font-semibold text-white">ETA</span>
                        </div>

                        <p className="mt-3 text-zinc-400">25–35 Minutes</p>
                    </div>

                    <div className="rounded-2xl bg-[#101010] p-5">
                        <div className="flex items-center gap-3">
                            <PackageCheck size={20} className="text-orange-500" />

                            <span className="font-semibold text-white">Status</span>
                        </div>

                        <p className="mt-3 text-zinc-400">Your food is being prepared.</p>
                    </div>

                    <div className="rounded-2xl bg-[#101010] p-5">
                        <p className="text-sm uppercase tracking-[3px] text-zinc-500">Ordered</p>

                        <p className="mt-3 text-white">Today • 7:42 PM</p>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-semibold text-zinc-400">Order Progress</span>

                        <span className="text-sm font-semibold text-orange-500">60%</span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-3/5 rounded-full bg-orange-500" />
                    </div>
                </div>

                <Link href="/orders/FE102394" className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-orange-500 px-8 font-semibold text-white transition-all duration-300 hover:bg-orange-600 group-hover:translate-x-1">
                    Track Order
                    <ArrowRight size={18} />
                </Link>
            </div>
        </article>
    );
}