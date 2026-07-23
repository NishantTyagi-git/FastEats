import Link from "next/link";
import { Mail, Phone, ShoppingBag } from "lucide-react";

type Props = {
    id: number;
    name: string;
    email: string;
    phone: string;
    orders: number;
    spent: number;
};

export default function CustomerCard({
    id,
    name,
    email,
    phone,
    orders,
    spent,
}: Props) {
    return (
        <article className="rounded-3xl border border-white/10 bg-[#151515] p-6 transition hover:border-orange-500/40">
            <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                    {name.charAt(0)}
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">{name}</h2>

                    <p className="text-sm text-zinc-500">Customer</p>
                </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-zinc-300">
                    <Mail size={16} />
                    {email}
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                    <Phone size={16} />
                    {phone}
                </div>

            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#111111] p-4">
                <div>
                    <p className="text-xs text-zinc-500">Orders</p>

                    <p className="font-bold text-white">{orders}</p>
                </div>

                <div>
                    <p className="text-xs text-zinc-500">Total Spent</p>

                    <p className="font-bold text-orange-500">₹{spent}</p>
                </div>

                <ShoppingBag
                    className="text-orange-500"
                    size={22}
                />
            </div>

            <Link href={`/admin/customers/${id}`} className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-orange-500 font-semibold text-white transition hover:bg-orange-600">
                View Details
            </Link>
        </article>
    );
}