import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";

export default function OrdersHeader() {
    return (
        <section>
            <Link href="/profile" className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500">
                <ArrowLeft size={18} />
                Back to Profile
            </Link>

            <div className="relative mt-8 overflow-hidden rounded-[36px] border border-white/10 bg-[#151515]">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

                <div className="relative flex flex-col gap-8 px-10 py-12 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="font-semibold uppercase tracking-[5px] text-orange-500">Orders</p>

                        <h1 className="mt-4 text-5xl font-black text-white">My Orders</h1>

                        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                            Track your active deliveries, view previous purchases and quickly reorder your favourite meals.
                        </p>
                    </div>

                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500/10">
                        <Package size={46} className="text-orange-500" />
                    </div>
                </div>
            </div>
        </section>
    );
}