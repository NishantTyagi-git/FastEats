import OrdersHeader from "@/components/store/orders/list/OrdersHeader";
import OrdersTabs from "@/components/store/orders/list/OrdersTabs";

export default function OrdersPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0b] pt-28 pb-20">
            <div className="mx-auto max-w-6xl px-6">
                <OrdersHeader />

                <div className="mt-10">
                    <OrdersTabs />
                </div>
            </div>
        </main>
    );
}