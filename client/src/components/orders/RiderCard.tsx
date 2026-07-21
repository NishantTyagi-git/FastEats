import Image from "next/image";
import { Phone, MessageCircle, Star, Bike } from "lucide-react";

export default function RiderCard() {
    return (
        <section className="rounded-[32px] border border-white/10 bg-[#151515] p-8">
            <p className="font-semibold uppercase tracking-[5px] text-orange-500">Delivery Partner</p>

            <h2 className="mt-3 text-3xl font-black text-white">Rider Details</h2>

            <div className="mt-8 flex items-center gap-5">
                <div className="h-[72px] w-[72px] overflow-hidden rounded-full border border-white/10">
                    <Image
                        src="/images/rider.png"
                        alt="Delivery Rider"
                        width={72}
                        height={72}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">Raj Kumar</h3>

                    <div className="mt-2 flex items-center gap-2">
                        <Star
                            size={16}
                            fill="currentColor"
                            className="text-orange-500"
                        />

                        <span className="text-zinc-300">4.9 Rating</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#101010] p-5">
                <div className="flex items-center gap-3">
                    <Bike
                        size={20}
                        className="text-orange-500"
                    />

                    <div>
                        <p className="text-sm uppercase tracking-[3px] text-zinc-500">Vehicle</p>

                        <h4 className="mt-1 text-xl font-bold text-white">UP14 AB 2481</h4>
                    </div>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
                <button className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-orange-500 font-semibold text-white transition hover:bg-orange-600">
                    <Phone size={18} />
                    Call
                </button>

                <button className="flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#101010] font-semibold text-white transition hover:border-orange-500 hover:text-orange-500">
                    <MessageCircle size={18} />
                    Chat
                </button>
            </div>
        </section>
    );
}