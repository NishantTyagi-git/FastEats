import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";

type Props = {
    href: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    color?: string;
    bg?: string;
};

export default function ProfileMenuItem({
    href,
    icon: Icon,
    title,
    subtitle,
    color = "text-orange-500",
    bg = "bg-orange-500/10",
}: Props) {
    return (
        <Link href={href} className="group flex items-center justify-between rounded-[28px] border border-white/10 bg-[#151515] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-[#181818]">
            <div className="flex items-center gap-5">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg}`}>
                    <Icon size={24} className={color} />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>

                    <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
                </div>
            </div>

            <ChevronRight size={22} className="text-zinc-500 transition group-hover:translate-x-1 group-hover:text-orange-500" />
        </Link>
    );
}