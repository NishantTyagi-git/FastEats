import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import OrderHero from "@/components/orders/details/OrderHero";
import OrderProgress from "@/components/orders/details/OrderProgress";
import RiderCard from "@/components/orders/details/RiderCard";
import DeliveryStatusCard from "@/components/orders/details/DeliveryStatusCard";
import ReceiptAccordion from "@/components/orders/details/ReceiptAccordion";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function OrderTrackingPage({ params }: Props) {
    const { id } = await params;

    return (
        <main className="min-h-screen bg-[#0b0b0b] pt-24 pb-16 text-white">
            <div className="mx-auto max-w-7xl px-8">
                <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500"
                >
                    <ArrowLeft size={18} />
                    Continue Shopping
                </Link>

                <OrderHero orderId={id} />

                <div className="mt-10">
                    <OrderProgress />
                </div>

                <div className="mt-8">
                    <DeliveryStatusCard />
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    <RiderCard />
                    <DeliveryStatusCard />
                </div>

                <div className="mt-8">
                    <ReceiptAccordion />
                </div>
            </div>
        </main>
    );
}