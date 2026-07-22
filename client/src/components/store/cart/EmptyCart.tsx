import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function EmptyCart() {

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-8">
            <div className="text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-orange-500/10">
                    <ShoppingBag
                        size={48}
                        className="text-orange-500"
                    />
                </div>

                <h1 className="mt-8 text-5xl font-black text-white">Your Cart is Empty</h1>

                <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-zinc-400">
                    Looks like you haven&apos;t added anything yet. Explore our delicious menu and find your next favorite meal.
                </p>

                <Link
                    href="/menu"
                    className="mt-10 inline-flex h-14 items-center rounded-full bg-orange-500 px-10 font-semibold text-white transition hover:bg-orange-600"
                >
                    Browse Menu
                </Link>
            </div>
        </main>
    );
}