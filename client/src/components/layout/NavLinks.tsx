"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { NAV_LINKS } from "@/constants/navigation";

type Props = {
    onClick?: () => void;
};

export default function NavLinks({ onClick }: Props) {
    const pathname = usePathname();

    return (
        <>
            {NAV_LINKS.map((link) => {
                const active = pathname === link.href;

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClick}
                        className={clsx(
                            "group relative py-2 text-[15px] font-medium tracking-wide transition-all duration-300",
                            active
                                ? "text-orange-500"
                                : "text-white hover:text-orange-500"
                        )}
                    >
                        {link.title}

                        <span
                            className={clsx(
                                "absolute -bottom-1 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-300",
                                active
                                    ? "w-7 opacity-100"
                                    : "w-0 opacity-0 group-hover:w-7 group-hover:opacity-100"
                            )}
                        />
                    </Link>
                );
            })}
        </>
    );
}