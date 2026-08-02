"use client";

export default function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    required = false,
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label htmlFor={name} className="mb-2 block text-xs font-medium text-zinc-400">
                {label}
            </label>

            <input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="h-12 w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 hover:border-white/15 focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/10"
            />
        </div>
    );
}