import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

type Props = {
    title?: string;
    description?: string;
};

export default function EmptyOrders({
    title = "No Orders Found",
    description = "Looks like you haven't placed any orders yet. Explore our menu and treat yourself to something delicious.",
}: Props) {
    return (
        <section className="overflow-hidden rounded-[36px] border border-dashed border-white/10 bg-[#151515]">
            <div className="flex flex-col items-center px-8 py-20 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500/10">
                    <ShoppingBag size={42} className="text-orange-500" />
                </div>

                <h2 className="mt-8 text-4xl font-black text-white">{title}</h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">{description}</p>

                <Link href="/menu" className="mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-orange-500 px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600">
                    Browse Menu
                    <ArrowRight size={18} />
                </Link>
            </div>
        </section>
    );
}