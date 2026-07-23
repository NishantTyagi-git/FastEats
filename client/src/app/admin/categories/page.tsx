import Link from "next/link";
import { Plus } from "lucide-react";

import CategoriesTable from "@/components/admin/categories/CategoriesTable";

export default function CategoriesPage() {
    return (
        <main className="space-y-8">
            <section className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-4xl font-black text-white">Categories</h1>

                    <p className="mt-2 text-zinc-500">Organize your menu with categories.</p>
                </div>

                <Link href="/admin/categories/add" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 font-semibold text-white transition hover:bg-orange-600">
                    <Plus size={20} />
                    Add Category
                </Link>
            </section>

            <CategoriesTable />

        </main>
    );
}