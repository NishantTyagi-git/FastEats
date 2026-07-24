import Image from "next/image";
import { KeyRound } from "lucide-react";

export default function ForgotPasswordHero() {
    return (
        <section className="relative hidden overflow-hidden lg:flex lg:w-[58%]">
            <Image
                src="/images/auth/forgot.png"
                alt="Forgot Password"
                fill
                priority
                sizes="58vw"
                className="object-cover object-right"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

            <div className="absolute left-14 top-32 max-w-[480px]">

                <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white xl:text-6xl">
                    Forgot Your<br />Password?
                </h1>

                <p className="mt-6 max-w-md text-lg leading-8 text-zinc-300">
                    No worries. We'll send you a secure password reset link so you can regain access to your FastEats account.
                </p>
            </div>

            <div className="absolute bottom-16 left-14 z-20">
                <div className="flex items-center gap-5 rounded-full border border-white/10 bg-black/35 px-6 py-4 backdrop-blur-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
                        <KeyRound className="h-6 w-6 text-orange-400" />
                    </div>

                    <div>
                        <p className="font-semibold text-white">Reset your password securely.</p>

                        <p className="text-zinc-400">Your account stays protected.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}