"use client";

import { Search } from "lucide-react";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function MenuSearch({
    value,
    onChange,
}: Props) {

    return (
        <div className="relative flex-1">
            <Search
                size={20}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search dishes..."
                className="h-14 w-full rounded-full border border-white/10 bg-[#151515] pl-14 pr-5 text-white outline-none focus:border-orange-500"
            />
        </div>
    );

}