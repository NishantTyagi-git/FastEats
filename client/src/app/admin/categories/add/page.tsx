import CategoryForm from "@/components/admin/categories/CategoryForm";

export default function AddCategoryPage() {
    return (
        <main className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h1 className="text-4xl font-black text-white">Add Category</h1>

                <p className="mt-2 text-zinc-500">Create a new category for your menu.</p>
            </section>

            <CategoryForm mode="create" />

        </main>
    );
}