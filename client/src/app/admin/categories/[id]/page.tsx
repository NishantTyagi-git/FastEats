import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import CategoryForm from "@/components/admin/categories/CategoryForm";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditCategoryPage({ params }: Props) {
    await params;

    return (
        <main className="space-y-8">
            <section className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                    <Link href="/admin/categories" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-orange">
                        <ArrowLeft size={16} />
                        Back to Categories
                    </Link>

                    <h1 className="mt-3 text-4xl font-black text-white">Edit Category</h1>

                    <p className="mt-2 text-zinc-500">Update category information and visibility.</p>
                </div>
            </section>

            <CategoryForm mode="edit" />

        </main>
    );
}