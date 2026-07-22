import { MapPinned, Home, Navigation, Phone } from "lucide-react";

export default function DeliveryAddress() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Delivery Address</h2>

                <p className="mt-1 text-sm text-zinc-500">Customer delivery location</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111111] p-5">
                <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-orange-500/10 p-3">
                        <Home size={22} className="text-orange-500" />
                    </div>

                    <div>
                        <h3 className="font-semibold text-white">Home</h3>

                        <p className="text-sm text-zinc-500">Primary Address</p>
                    </div>
                </div>

                <div className="mt-6 space-y-5">
                    <div className="flex items-start gap-4">
                        <MapPinned
                            size={20}
                            className="mt-1 text-orange-500"
                        />
                        <div>
                            <p className="text-sm text-zinc-500">Address</p>

                            <p className="mt-1 leading-7 text-white">
                                House No. 142, Shastri Nagar, Ghaziabad, Uttar Pradesh, 201002
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Phone size={20} className="text-orange-500" />
                        
                        <div>
                            <p className="text-sm text-zinc-500">Contact</p>

                            <p className="text-white">+91 9876543210</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#111111] font-semibold text-white transition hover:border-orange-500">
                <Navigation size={18} />
                Open in Maps
            </button>
        </section>
    );
}