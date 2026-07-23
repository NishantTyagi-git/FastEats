import CustomerHeader from "@/components/admin/customers/CustomerHeader";
import CustomerGrid from "@/components/admin/customers/CustomerGrid";

export default function CustomersPage() {
    return (
        <main className="space-y-8">

            <CustomerHeader />

            <CustomerGrid />

        </main>
    );
}