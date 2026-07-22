import { Mail, Phone, User, MapPin } from "lucide-react";

export default function CustomerCard() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Customer Details</h2>

                <p className="mt-1 text-sm text-zinc-500">Contact Information</p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111111] p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-black text-white">
                    N
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white">Nishant Tyagi</h3>

                    <p className="text-sm text-zinc-500">Customer since Mar 2026</p>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-[#111111] p-4">
                    <Mail
                        size={20}
                        className="text-orange-500"
                    />

                    <div>
                        <p className="text-xs text-zinc-500">Email</p>

                        <p className="font-medium text-white">nishant@example.com</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-[#111111] p-4">
                    <Phone
                        size={20}
                        className="text-orange-500"
                    />

                    <div>
                        <p className="text-xs text-zinc-500">Phone</p>

                        <p className="font-medium text-white">+91 9876543210</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-[#111111] p-4">
                    <User
                        size={20}
                        className="text-orange-500"
                    />

                    <div>
                        <p className="text-xs text-zinc-500">Total Orders</p>

                        <p className="font-medium text-white">24 Orders</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-[#111111] p-4">
                    <MapPin
                        size={20}
                        className="text-orange-500"
                    />

                    <div>
                        <p className="text-xs text-zinc-500">City</p>

                        <p className="font-medium text-white">Ghaziabad, Uttar Pradesh</p>
                    </div>
                </div>
            </div>
        </section>
    );
}