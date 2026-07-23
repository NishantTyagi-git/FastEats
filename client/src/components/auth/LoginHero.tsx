import Image from "next/image";

export default function LoginHero() {
    return (
        <section className="relative h-full overflow-hidden">
            <Image
                src="/images/auth/login.png"
                alt="Food"
                fill
                priority
                sizes="(max-width: 1024px) 0vw, 56vw"
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

            <div className="absolute left-14 top-14">
                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400">
                    🍔 FastEats
                </span>
            </div>

            <div className="absolute left-14 top-40 max-w-lg">
                <h1 className="text-7xl font-black leading-[1.05] tracking-tight text-white">
                    Delicious Food, <br />Delivered <span className="text-orange-500"> Fast.</span>
                </h1>

                <p className="mt-8 text-xl leading-9 text-zinc-300">
                    Experience premium meals, lightning-fast delivery and effortless ordering.
                </p>
            </div>

            <div className="absolute bottom-14 left-14">
                <div className="flex items-center gap-5 rounded-full border border-white/10 bg-black/35 px-6 py-4 backdrop-blur-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
                        ⚡
                    </div>

                    <div>
                        <p className="font-semibold text-white">Premium food.</p>

                        <p className="text-zinc-400">Delivered in minutes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}