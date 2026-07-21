import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera, Crown, Pencil } from "lucide-react";

export default function ProfileHeader() {
    return (
        <section>
            <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500">
                <ArrowLeft size={18} />
                Back
            </Link>

            <div className="relative mt-8 overflow-hidden rounded-[36px] border border-white/10 bg-[#151515]">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

                <div className="relative flex flex-col items-center px-10 py-12 lg:flex-row lg:justify-between">
                    <div className="flex flex-col items-center gap-8 lg:flex-row">
                        <div className="relative">
                            <div className="overflow-hidden rounded-full border-4 border-orange-500/30">
                                <Image
                                    src="/images/profile.png"
                                    alt="Profile"
                                    width={130}
                                    height={130}
                                    className="h-[130px] w-[130px] object-cover"
                                />
                            </div>

                            <button className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition hover:scale-105">
                                <Camera size={18} />
                            </button>
                        </div>

                        <div className="text-center lg:text-left">
                            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                                <h1 className="text-4xl font-black text-white">Nishant Tyagi</h1>

                                <span className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500">
                                    <Crown size={15} />
                                    Premium
                                </span>
                            </div>

                            <p className="mt-4 text-zinc-400">nishant@example.com</p>

                            <p className="mt-2 text-zinc-500">+91 98765 43210</p>
                        </div>
                    </div>

                    <button className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600 lg:mt-0">
                        <Pencil size={18} />
                        Edit Profile
                    </button>
                </div>
            </div>
        </section>
    );
}