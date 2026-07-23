import { Settings } from "lucide-react";

export default function SettingsHeader() {
    return (
        <section className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#151515] p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
                    <Settings
                        size={28}
                        className="text-orange-500"
                    />
                </div>

                <h1 className="text-4xl font-black text-white">Settings</h1>

                <p className="mt-2 text-zinc-500">Manage restaurant preferences, employees and business configuration.</p>
            </div>
        </section>
    );
}