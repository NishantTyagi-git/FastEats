import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

type Props = {
    slug: string;
    image: string;
    title: string;
    category: string;
    large?: boolean;
};

export default function GalleryCard({
    slug,
    image,
    title,
    category,
    large = false,
}: Props) {
    return (
        <Link
            href={`/menu/${slug}`}
            className={clsx(
                "group relative overflow-hidden rounded-[30px]",
                large &&
                "xl:col-span-2 xl:row-span-2"
            )}
        >
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1280px) 50vw,25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
                draggable={false}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />

            <div className="absolute inset-x-0 bottom-0 p-8">
                <span className="rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                    {category}
                </span>

                <div className="mt-4 flex items-end justify-between">
                    <h3 className="text-3xl font-black text-white">{title}</h3>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 transition duration-300 group-hover:rotate-45">
                        <ArrowUpRight
                            size={20}
                            className="text-white"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}