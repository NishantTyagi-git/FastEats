import Link from "next/link";
import SuccessHero from "@/components/store/order-success/SuccessHero";

export default function OrderSuccessPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0b] text-white">
            <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-8 py-24">
                <div className="w-full max-w-3xl">
                    <SuccessHero />

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/orders"
                            className="flex h-14 items-center justify-center rounded-full bg-orange-500 px-10 font-semibold text-white transition hover:bg-orange-600"
                        >
                            Track Order
                        </Link>

                        <Link
                            href="/"
                            className="flex h-14 items-center justify-center rounded-full border border-white/10 px-10 font-semibold text-white transition hover:border-orange-500 hover:text-orange-500"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}