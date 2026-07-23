import EmployeeForm from "@/components/admin/employees/EmployeeForm";

export default function AddEmployeePage() {
    return (
        <main className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <h1 className="text-4xl font-black text-white">Add Employee</h1>

                <p className="mt-2 text-zinc-500">Create a new employee profile for your restaurant.</p>
            </section>

            <EmployeeForm mode="create" />

        </main>
    );
}