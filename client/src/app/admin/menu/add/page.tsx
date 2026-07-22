import MenuForm from "@/components/admin/menu/MenuForm";

export default function AddMenuItemPage() {
    return (
        <main className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h1 className="text-4xl font-black text-white">Add Food Item</h1>

                <p className="mt-2 text-zinc-500">Create a new menu item for your restaurant.</p>
            </section>

            <MenuForm mode="create" />
        </main>
    );
}