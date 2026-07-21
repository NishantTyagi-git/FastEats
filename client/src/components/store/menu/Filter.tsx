"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, SlidersHorizontal } from "lucide-react";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const options = [
    {
        value: "popular",
        label: "Popular",
    },
    {
        value: "rating",
        label: "Highest Rated",
    },
    {
        value: "priceLow",
        label: "Price: Low to High",
    },
    {
        value: "priceHigh",
        label: "Price: High to Low",
    },
];

export default function SortDropdown({
    value,
    onChange,
}: Props) {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selected = options.find((o) => o.value === value) ?? options[0];

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex h-14 min-w-[260px] items-center justify-between rounded-full border border-white/10 bg-[#151515] px-6 text-white transition-all duration-300 hover:border-orange-500"
            >
                <div className="flex items-center gap-3">
                    <SlidersHorizontal
                        size={18}
                        className="text-orange-500"
                    />

                    <span className="font-medium">{selected.label}</span>
                </div>

                <ChevronDown
                    size={18}
                    className={`transition duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>

            <div
                className={`absolute right-0 top-16 z-50 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#151515] shadow-[0_25px_60px_rgba(0,0,0,.55)] transition-all duration-300 ${open
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
            >
                {options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => {
                            onChange(option.value);
                            setOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-6 py-4 text-left transition-all duration-200 ${value === option.value
                            ? "bg-orange-500 text-white"
                            : "text-zinc-300 hover:bg-orange-500/10 hover:text-orange-500"
                            }`}
                    >
                        <span>{option.label}</span>

                        {value === option.value && (
                            <Check size={18} />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}