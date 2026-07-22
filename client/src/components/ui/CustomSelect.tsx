"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  value: Option;
  onChange: (option: Option) => void;
};

export default function CustomSelect({
  options,
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-12 w-full items-center justify-between rounded-2xl border border-white/10 bg-[#111111] px-5 text-white transition hover:border-orange-500"
      >
        {value.label}

        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180 text-orange-500" : "text-zinc-500"
            }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 z-50 mt-2 rounded-2xl border border-white/10 bg-[#151515] p-2 shadow-2xl">
          {options.map((option) => {
            const active = option.value === value.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => { onChange(option); setOpen(false); }}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition ${active
                  ? "bg-orange-500 text-white"
                  : "text-zinc-300 hover:bg-[#222]"
                  }`}
              >
                {option.label}
                {active && <Check size={16} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}