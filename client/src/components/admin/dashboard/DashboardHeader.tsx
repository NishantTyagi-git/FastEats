import { Plus, Download } from "lucide-react";

export default function DashboardHeader() {
    return (
        <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <p className="text-sm font-medium uppercase tracking-[3px] text-orange-500">Dashboard</p>

                <h1 className="mt-2 text-4xl font-black text-white">Welcome back, Nishant 👋</h1>

                <p className="mt-2 text-zinc-500">Here's what's happening with your restaurant today.</p>
            </div>

            <div className="flex flex-wrap gap-4">
                <button className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-[#151515] px-5 font-semibold text-white transition hover:border-orange-500">
                    <Download size={18} />
                    Export Report
                </button>

                <button className="flex h-12 items-center gap-3 rounded-2xl bg-orange-500 px-5 font-semibold text-white transition hover:bg-orange-600">
                    <Plus size={18} />
                    Add New Item
                </button>
            </div>
        </section>
    );
}