import { CreditCard, CircleCheckBig, CalendarClock, ReceiptText, IndianRupee } from "lucide-react";

export default function PaymentDetails() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Payment Details</h2>

                <p className="mt-1 text-sm text-zinc-500">Transaction Information</p>
            </div>

            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
                <div className="flex items-center gap-3">
                    <CircleCheckBig
                        size={22}
                        className="text-green-400"
                    />

                    <div>
                        <p className="text-sm text-zinc-400">Payment Status</p>

                        <h3 className="text-2xl font-black text-white">Paid</h3>
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-[#111111] p-4">
                    <div className="flex items-center gap-3">
                        <CreditCard
                            size={18}
                            className="text-orange-500"
                        />

                        <span className="text-zinc-400">Method</span>
                    </div>

                    <span className="font-semibold text-white">UPI</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[#111111] p-4">
                    <div className="flex items-center gap-3">
                        <ReceiptText
                            size={18}
                            className="text-orange-500"
                        />

                        <span className="text-zinc-400">Transaction ID</span>
                    </div>

                    <span className="font-semibold text-white">TXN84927512</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[#111111] p-4">
                    <div className="flex items-center gap-3">
                        <IndianRupee
                            size={18}
                            className="text-orange-500"
                        />

                        <span className="text-zinc-400">Amount</span>
                    </div>

                    <span className="text-xl font-bold text-green-400">₹749</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[#111111] p-4">
                    <div className="flex items-center gap-3">
                        <CalendarClock
                            size={18}
                            className="text-orange-500"
                        />
                        <span className="text-zinc-400">Paid At</span>
                    </div>

                    <span className="font-semibold text-white">22 Jul 2026 • 2:17 PM</span>
                </div>
            </div>
        </section>
    );
}