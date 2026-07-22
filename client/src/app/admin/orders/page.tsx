import OrdersHeader from "@/components/admin/orders/OrdersHeader";
import OrdersStats from "@/components/admin/orders/OrdersStats";
import OrdersFilters from "@/components/admin/orders/OrdersFilters";
import OrdersTable from "@/components/admin/orders/OrdersTable";

export default function OrdersPage() {
    return (
        <main className="space-y-8">

            <OrdersHeader />

            <OrdersStats />

            <OrdersFilters />

            <OrdersTable />

        </main>
    );
}