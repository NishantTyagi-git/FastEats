import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

interface ConstructionPageProps {
    title?: string;
    description?: string;
    backHref?: string;
    backLabel?: string;
}

export default function ConstructionPage({
    title = "This page is under construction",
    description = "We're still working on this part of FastEats. Check back soon.",
    backHref = "/",
    backLabel = "Back Home",
}: ConstructionPageProps) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#090909] px-6 text-white">
            <div className="w-full max-w-lg text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/10 bg-[#151515]">
                    <Construction
                        size={32}
                        strokeWidth={1.7}
                        className="text-orange-500"
                    />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">FastEats</p>

                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-500">{description}</p>

                <Link href={backHref} className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-semibold text-white transition hover:bg-orange-600">
                    <ArrowLeft size={16} />
                    {backLabel}
                </Link>
            </div>
        </main>
    );
}