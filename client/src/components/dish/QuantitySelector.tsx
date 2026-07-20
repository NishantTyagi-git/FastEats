"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function QuantitySelector() {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex items-center gap-4">
            <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="rounded-full border border-white/10 p-3 hover:border-orange-500"
            >
                <Minus size={18} />
            </button>

            <span className="w-8 text-center text-xl font-bold">{quantity}</span>

            <button
                onClick={() => setQuantity((q) => q + 1)}
                className="rounded-full border border-white/10 p-3 hover:border-orange-500"
            >
                <Plus size={18} />
            </button>
        </div>
    );
}