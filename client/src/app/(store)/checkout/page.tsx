import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import BillingForm from "@/components/store/checkout/BillingForm";
import PaymentMethod from "@/components/store/checkout/PaymentMethod";
import CheckoutSummary from "@/components/store/checkout/CheckoutSummary";

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0b] pt-24 pb-12 text-white">
            <div className="mx-auto max-w-7xl px-8">
                <Link
                    href="/cart"
                    className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500"
                >
                    <ArrowLeft size={18} />
                    Back to Cart
                </Link>

                <div className="mt-8">
                    <p className="font-semibold uppercase tracking-[5px] text-orange-500">Checkout</p>

                    <h1 className="mt-3 text-5xl font-black">Complete Your Order</h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                        Just one final step before your delicious meal is on its way. Fill in your delivery details and choose your preferred payment method.
                    </p>

                    <div className="mt-10 flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold">✓</div>

                            <span className="font-semibold">Cart</span>
                        </div>

                        <div className="h-px w-12 bg-orange-500" />

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold">2</div>

                            <span className="font-semibold">Checkout</span>
                        </div>

                        <div className="h-px w-12 bg-white/10" />

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-zinc-500">3</div>

                            <span className="text-zinc-500">Confirmation</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid gap-12 xl:grid-cols-[1.55fr_1fr]">
                    <div className="space-y-10">
                        <BillingForm />
                        <PaymentMethod />
                    </div>

                    <CheckoutSummary />
                </div>
            </div>
        </main>
    );
}