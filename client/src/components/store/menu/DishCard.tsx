import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import Link from "next/link";

type Props = {
    slug: string;
    images: string[];
    title: string;
    category: string;
    description: string;
    price: number;
    rating: number;
    bestseller?: boolean;
};

export default function DishCard({
    slug,
    images,
    title,
    category,
    description,
    price,
    rating,
    bestseller,
}: Props) {
    return (
        <Link href={`/menu/${slug}`}>
            <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#151515] transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40">
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={images[0]}
                        alt={title}
                        fill
                        sizes="(max-width:768px)100vw,(max-width:1280px)50vw,25vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {bestseller && (
                        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">Bestseller</span>
                    )}
                </div>

                <div className="p-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white">{title}</h3>

                            <p className="mt-1 text-sm text-orange-500">{category}</p>
                        </div>

                        <span className="text-2xl font-black text-orange-500">₹{price}</span>
                    </div>

                    <p className="mt-4 leading-7 text-zinc-400">{description}</p>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Star
                                size={18}
                                fill="currentColor"
                                className="text-orange-500"
                            />

                            <span className="font-semibold text-white">{rating}</span>
                        </div>

                        <button className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600">
                            <ShoppingCart size={17} />
                            Add
                        </button>
                    </div>
                </div>
            </article>
        </Link>
    );
}