import { Receipt, ShoppingBag, Bike, Percent, IndianRupee } from "lucide-react";

export default function OrderSummary() {
    const subtotal = 657;
    const deliveryFee = 49;
    const discount = 50;
    const tax = 93;
    const total = subtotal + deliveryFee + tax - discount;

    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Order Summary</h2>

                <p className="mt-1 text-sm text-zinc-500">Billing Breakdown</p>
            </div>

            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-zinc-400">Grand Total</p>

                        <h2 className="mt-2 text-4xl font-black text-white">₹{total}</h2>
                    </div>

                    <div className="rounded-2xl bg-orange-500 p-4">
                        <Receipt
                            size={26}
                            className="text-white"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-[#111111] p-4">
                    <div className="flex items-center gap-3">
                        <ShoppingBag
                            size={18}
                            className="text-orange-500"
                        />

                        <span className="text-zinc-400">Items Total</span>
                    </div>

                    <span className="font-semibold text-white">₹{subtotal}</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[#111111] p-4">
                    <div className="flex items-center gap-3">
                        <Bike
                            size={18}
                            className="text-orange-500"
                        />

                        <span className="text-zinc-400">Delivery Fee</span>
                    </div>

                    <span className="font-semibold text-white">₹{deliveryFee}</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[#111111] p-4">
                    <div className="flex items-center gap-3">
                        <IndianRupee
                            size={18}
                            className="text-orange-500"
                        />

                        <span className="text-zinc-400">Taxes</span>
                    </div>

                    <span className="font-semibold text-white">₹{tax}</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[#111111] p-4">
                    <div className="flex items-center gap-3">
                        <Percent
                            size={18}
                            className="text-orange-500"
                        />

                        <span className="text-zinc-400">Discount</span>
                    </div>

                    <span className="font-semibold text-red-400">-₹{discount}</span>
                </div>
            </div>
        </section>
    );
}