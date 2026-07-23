import Link from "next/link";
import { Plus } from "lucide-react";

export default function EmployeeHeader() {
    return (
        <section className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#151515] p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <h1 className="text-4xl font-black text-white">Employee Management</h1>

                <p className="mt-2 text-zinc-500">Manage riders and restaurant staff from one place.</p>
            </div>

            <Link href="/admin/employees/add" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 font-semibold text-white transition hover:bg-orange-600">
                <Plus size={20} />
                Add Employee
            </Link>
        </section>
    );
}