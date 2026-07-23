import AnalyticsHeader from "@/components/admin/analytics/AnalyticsHeader";
import StatsCards from "@/components/admin/analytics/StatsCards";
import RevenueChart from "@/components/admin/analytics/RevenueChart";
import OrdersChart from "@/components/admin/analytics/OrdersChart";
import PopularItems from "@/components/admin/analytics/PopularItems";
import TopCustomers from "@/components/admin/analytics/TopCustomers";
import RecentActivity from "@/components/admin/analytics/RecentActivity";

export default function AnalyticsPage() {
    return (
        <main className="space-y-8">

            <AnalyticsHeader />

            <StatsCards />

            <div className="grid gap-8 xl:grid-cols-2">

                <RevenueChart />

                <OrdersChart />

            </div>

            <div className="grid gap-8 xl:grid-cols-2">

                <PopularItems />

                <TopCustomers />

            </div>

            <RecentActivity />

        </main>
    );
}