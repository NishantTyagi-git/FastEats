"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
    images: string[];
    title: string;
};

export default function DishGallery({
    images,
    title,
}: Props) {

    const [selected, setSelected] = useState(0);

    return (
        <div className="space-y-5">
            <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]">
                <Image
                    src={images[selected]}
                    alt={title}
                    fill
                    priority
                    sizes="(max-width:768px)100vw,50vw"
                    className="object-cover"
                />
            </div>

            <div className="flex gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelected(index)}
                        className={`relative h-24 w-24 overflow-hidden rounded-2xl border transition
                        ${selected === index ? "border-orange-500" : "border-white/10"}`}
                    >
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="96px"
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}