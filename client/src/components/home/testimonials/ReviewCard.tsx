import Image from "next/image";
import { Quote, Star } from "lucide-react";

type Props = {
    image: string;
    name: string;
    review: string;
};

export default function ReviewCard({image, name, review}: Props) {
    return (
        <article className="group relative mx-4 w-[390px] shrink-0 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:border-orange-500/40 hover:shadow-[0_30px_80px_rgba(249,115,22,0.18)]">
            <div className="pointer-events-none absolute -right-28 -top-28 h-[320px] w-[320px] rounded-full bg-orange-500/15 blur-[140px] opacity-0 transition-all duration-700 group-hover:opacity-100" />
            
            <Quote
                size={72}
                strokeWidth={1.5}
                className="absolute right-8 top-8 text-white/5 transition-colors duration-500 group-hover:text-orange-500/15"
            />

            <div className="relative flex items-center gap-5">
                <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full ring-2 ring-orange-500/30">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="72px"
                        draggable={false}
                        className="object-cover transition duration-700 group-hover:scale-110"
                    />
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-white"> {name} </h3>

                    <p className="mt-1 text-sm text-zinc-500"> Google Reviews </p>

                    <div className="mt-3 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={15}
                                fill="currentColor"
                                className="text-orange-500"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <p className="relative mt-8 min-h-[110px] text-[17px] italic leading-8 text-zinc-300">
                "{review}"
            </p>

            <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-sm text-zinc-500"> Verified Customer </span>

                <span className="font-semibold text-orange-500"> ★ 4.9 </span>
            </div>
        </article>
    );
}