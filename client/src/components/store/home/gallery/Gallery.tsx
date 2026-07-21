import GalleryCard from "./GalleryCard";

const images = [
    {
        image: "/images/gallery/gallery1.png",
        title: "Butter Chicken",
        category: "North Indian",
        large: true,
    },
    {
        image: "/images/gallery/gallery2.png",
        title: "Chicken Biryani",
        category: "Biryani",
    },
    {
        image: "/images/gallery/gallery3.png",
        title: "Paneer Tikka",
        category: "Starter",
    },
    {
        image: "/images/gallery/gallery4.png",
        title: "Dal Makhani",
        category: "North Indian",
    },
    {
        image: "/images/gallery/gallery5.png",
        title: "Masala Dosa",
        category: "South Indian",
        large: true,
    },
    {
        image: "/images/gallery/gallery6.png",
        title: "Gulab Jamun",
        category: "Dessert",
    },
];

export default function Gallery() {
    return (
        <section className="bg-[#0b0b0b] py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-8">
                <div className="text-center">
                    <p className="font-semibold uppercase tracking-[5px] text-orange-500">Gallery</p>

                    <h2 className="mt-4 text-5xl font-black text-white xl:text-6xl">
                        Crafted With
                        <span className="text-orange-500">{" "}Passion</span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
                        Every dish is handcrafted using authentic recipes, premium ingredients and the finest Indian spices.
                    </p>
                </div>

                <div className="mt-20 grid auto-rows-[260px] gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {images.map((item) => (
                        <GalleryCard
                            key={item.title}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}