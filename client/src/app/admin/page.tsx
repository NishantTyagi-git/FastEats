import DashboardHeader from "@/components/admin/dashboard/DashboardHeader";
import DashboardStats from "@/components/admin/dashboard/DashboardStats";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import OrderStatus from "@/components/admin/dashboard/OrderStatus";
import RecentOrders from "@/components/admin/dashboard/RecentOrders";
import PopularItems from "@/components/admin/dashboard/PopularItems";

export default function AdminDashboardPage() {
    return (
        <main className="space-y-8">

            <DashboardHeader />

            <DashboardStats />

            <section className="grid gap-8 xl:grid-cols-[2fr_1fr]">

                <RevenueChart />

                <OrderStatus />

            </section>

            <section className="grid gap-8 xl:grid-cols-[1.8fr_1.2fr]">

                <RecentOrders />

                <PopularItems />

            </section>
        </main>
    );
}