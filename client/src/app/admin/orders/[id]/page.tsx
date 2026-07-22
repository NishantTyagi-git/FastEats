import CustomerCard from "@/components/admin/order/CustomerCard";
import DeliveryAddress from "@/components/admin/order/DeliveryAddress";
import OrderHeader from "@/components/admin/order/OrderHeader";
import OrderItems from "@/components/admin/order/OrderItems";
import OrderSummary from "@/components/admin/order/OrderSummary";
import OrderTimeline from "@/components/admin/order/OrderTimeline";
import PaymentDetails from "@/components/admin/order/PaymentDetails";
import RiderCard from "@/components/admin/order/RiderCard";
import StatusCard from "@/components/admin/order/StatusCard";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function OrderDetailsPage({ params }: Props) {
    const { id } = await params;

    return (
        <main className="space-y-8">

            <OrderHeader orderId={id} />

            <div className="grid gap-8 xl:grid-cols-3">
                <div className="space-y-8 xl:col-span-2">

                    <OrderSummary />

                    <OrderItems />

                    <DeliveryAddress />

                    <RiderCard />

                    <OrderTimeline />

                </div>

                <div className="space-y-8">

                    <CustomerCard />

                    <StatusCard />

                    <PaymentDetails />

                </div>
            </div>
        </main>
    );
}