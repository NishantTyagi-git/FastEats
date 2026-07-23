import MenuForm from "@/components/admin/menu/MenuForm";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditMenuItemPage({ params }: Props) {
    await params;

    return (
        <main className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h1 className="text-4xl font-black text-white">Edit Food Item</h1>

                <p className="mt-2 text-zinc-500">Update menu item details.</p>
            </section>

            <MenuForm mode="edit" />
        </main>
    );
}