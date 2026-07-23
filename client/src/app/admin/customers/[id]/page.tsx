type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function CustomerDetailsPage({ params }: Props) {
    const { id } = await params;

    return (
        <main className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl font-bold text-white">
                        R
                    </div>

                    <div>
                        <h1 className="text-4xl font-black text-white">Rahul Sharma</h1>

                        <p className="mt-2 text-zinc-500">Customer ID #{id}</p>
                    </div>
                </div>
            </section>

            <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
                <section className="space-y-8">
                    <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                        <h2 className="text-xl font-bold text-white">Profile Information</h2>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div>
                                <p className="text-sm text-zinc-500">Full Name</p>

                                <p className="mt-1 font-semibold text-white">Rahul Sharma</p>
                            </div>

                            <div>
                                <p className="text-sm text-zinc-500">Phone</p>

                                <p className="mt-1 font-semibold text-white">+91 9876543210</p>
                            </div>

                            <div>
                                <p className="text-sm text-zinc-500">Email</p>

                                <p className="mt-1 font-semibold text-white">rahul@gmail.com</p>
                            </div>

                            <div>
                                <p className="text-sm text-zinc-500">Joined</p>

                                <p className="mt-1 font-semibold text-white">12 July 2026</p>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                        <h2 className="text-xl font-bold text-white">Recent Orders</h2>

                        <div className="mt-6 space-y-4">
                            {[1, 2, 3].map((order) => (
                                <div key={order} className="flex items-center justify-between rounded-2xl bg-[#111111] p-5">
                                    <div>
                                        <h3 className="font-semibold text-white">Order #{1000 + order}</h3>

                                        <p className="mt-1 text-sm text-zinc-500">2 Items • Delivered</p>
                                    </div>

                                    <span className="font-bold text-orange-500">₹540</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>

                <aside className="space-y-8">
                    <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                        <h2 className="text-xl font-bold text-white">Statistics</h2>

                        <div className="mt-6 space-y-5">
                            <div className="rounded-2xl bg-[#111111] p-5">
                                <p className="text-sm text-zinc-500">Total Orders</p>

                                <p className="mt-2 text-3xl font-black text-white">18</p>
                            </div>

                            <div className="rounded-2xl bg-[#111111] p-5">
                                <p className="text-sm text-zinc-500">Total Spent</p>

                                <p className="mt-2 text-3xl font-black text-orange-500">₹12,480</p>
                            </div>

                            <div className="rounded-2xl bg-[#111111] p-5">
                                <p className="text-sm text-zinc-500">Status</p>

                                <span className="mt-3 inline-flex rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">Active</span>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
                        <h2 className="text-xl font-bold text-white">Saved Address</h2>

                        <p className="mt-6 leading-7 text-zinc-400">
                            House 24, Raj Nagar Extension, Ghaziabad, Uttar Pradesh, India - 201017
                        </p>
                    </section>
                </aside>
            </div>
        </main>
    );
}