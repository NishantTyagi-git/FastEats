import { Users } from "lucide-react";

export default function CustomerHeader() {
    return (
        <section className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#151515] p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
                    <Users
                        size={28}
                        className="text-orange-500"
                    />
                </div>

                <h1 className="text-4xl font-black text-white">Customers</h1>

                <p className="mt-2 text-zinc-500">Manage registered customers, monitor activity and view order history.</p>
            </div>
        </section>
    );
}