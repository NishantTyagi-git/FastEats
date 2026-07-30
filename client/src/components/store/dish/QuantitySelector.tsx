"use client";

import { Minus, Plus } from "lucide-react";

type Props = {
    quantity: number;
    onChange: (quantity: number) => void;
};

export default function QuantitySelector({
    quantity,
    onChange,
}: Props) {
    return (
        <div className="flex items-center gap-4">
            <button
                type="button"
                onClick={() => onChange(Math.max(1, quantity - 1))}
                className="rounded-full border border-white/10 p-3 text-white transition hover:border-orange-500 hover:text-orange-500"
            >
                <Minus size={18} />
            </button>

            <span className="w-8 text-center text-xl font-bold text-white">{quantity}</span>

            <button
                type="button"
                onClick={() => onChange(quantity + 1)}
                className="rounded-full border border-white/10 p-3 text-white transition hover:border-orange-500 hover:text-orange-500"
            >
                <Plus size={18} />
            </button>
        </div>
    );
}