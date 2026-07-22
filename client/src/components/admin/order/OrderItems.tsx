import Image from "next/image";

const items = [
    {
        id: 1,
        name: "Paneer Tikka Pizza",
        image: "/images/dishes/paneer-tikka.png",
        quantity: 2,
        price: 299,
    },
    {
        id: 2,
        name: "Masala Dosa",
        image: "/images/dishes/masala-dosa.png",
        quantity: 1,
        price: 149,
    },
    {
        id: 3,
        name: "Gulab Jamun",
        image: "/images/dishes/gulab-jamun.png",
        quantity: 1,
        price: 99,
    },
];

export default function OrderItems() {
    return (
        <section className="rounded-3xl border border-white/10 bg-[#151515] p-6">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Ordered Items</h2>

                <p className="mt-1 text-sm text-zinc-500">{items.length} Items</p>
            </div>

            <div className="space-y-4">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111] p-4">
                        <div className="flex items-center gap-4">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={64}
                                height={64}
                                className="h-16 w-16 rounded-xl object-cover"
                            />

                            <div>
                                <h3 className="font-semibold text-white">{item.name}</h3>

                                <p className="mt-1 text-sm text-zinc-500">₹{item.price} × {item.quantity}</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-lg font-bold text-white">₹{item.price * item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}