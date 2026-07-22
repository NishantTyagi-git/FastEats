import MenuFilters from "@/components/admin/menu/MenuFilters";
import MenuHeader from "@/components/admin/menu/MenuHeader";
import MenuStats from "@/components/admin/menu/MenuStats";
import MenuTable from "@/components/admin/menu/MenuTable";

export default function MenuPage() {
    return (
        <main className="space-y-8">

            <MenuHeader />

            <MenuStats />

            <MenuFilters />

            <MenuTable />

        </main>
    );
}