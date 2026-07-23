import EmployeeForm from "@/components/admin/employees/EmployeeForm";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditEmployeePage({ params }: Props) {
    await params;

    return (
        <main className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h1 className="text-4xl font-black text-white">Edit Employee</h1>

                <p className="mt-2 text-zinc-500">Update employee information and permissions.</p>
            </section>

            <EmployeeForm mode="edit" />

        </main>
    );
}