import Link from "next/link";
import { ArrowRight, TicketPercent } from "lucide-react";

type Props = {
    subtotal: number;
    delivery?: number;
    tax?: number;
};

export default function CartSummary({
    subtotal,
    delivery = 49,
    tax = 62,
}: Props) {

    const total = subtotal + delivery + tax;

    return (
        <aside className="sticky top-28 rounded-[32px] border border-white/10 bg-[#151515] p-8">
            <h2 className="text-3xl font-black text-white">Order Summary</h2>

            <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span className="font-semibold text-white">₹{subtotal}</span>
                </div>

                <div className="flex items-center justify-between text-zinc-400">
                    <span>Delivery</span>
                    <span className="font-semibold text-white">₹{delivery}</span>
                </div>

                <div className="flex items-center justify-between text-zinc-400">
                    <span>GST & Taxes</span>
                    <span className="font-semibold text-white">₹{tax}</span>
                </div>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-white">Total</span>
                <span className="text-4xl font-black text-orange-500">₹{total}</span>
            </div>

            <div className="mt-10">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-orange-500">
                    <TicketPercent size={18} />
                    Promo Code
                </label>

                <div className="flex overflow-hidden rounded-full border border-white/10">
                    <input
                        type="text"
                        placeholder="FASTEAT20"
                        className="flex-1 bg-[#0f0f0f] px-5 py-4 text-white outline-none placeholder:text-zinc-500"
                    />

                    <button className="bg-orange-500 px-5 text-sm font-semibold text-white transition hover:bg-orange-600">
                        Apply
                    </button>
                </div>
            </div>

            <Link
                href="/checkout"
                className="mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-orange-500 text-base font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
                Proceed to Checkout
                <ArrowRight size={20} />
            </Link>
        </aside>
    );
}