"use client";

import ReviewCard from "./ReviewCard";

const reviews = [
    {
        image: "/images/testimonials/user1.png",
        name: "Rahul Sharma",
        review: "The Butter Chicken was absolutely delicious. Every bite tasted authentic and fresh.",
    },
    {
        image: "/images/testimonials/user2.png",
        name: "Priya Verma",
        review: "Beautiful ambience, quick service and amazing desserts. Highly recommended.",
    },
    {
        image: "/images/testimonials/user3.png",
        name: "Aman Gupta",
        review: "Fast delivery, generous portions and premium quality food every single time.",
    },
    {
        image: "/images/testimonials/user1.png",
        name: "Sneha Kapoor",
        review: "One of the finest Indian restaurants I've visited. Everything was simply perfect.",
    },
    {
        image: "/images/testimonials/user2.png",
        name: "Arjun Mehta",
        review: "The biryani was aromatic and packed with flavour. I'll definitely order again.",
    },
];

export default function Testimonials() {
    return (
        <section className="overflow-hidden bg-[#0b0b0b] py-32">
            <div className="mx-auto mb-20 max-w-7xl px-8 text-center">
                <p className="font-semibold uppercase tracking-[5px] text-orange-500">
                    Testimonials
                </p>
                
                <h2 className="mt-4 text-5xl font-black text-white xl:text-6xl">
                    What Our <span className="text-orange-500">{" "}Customers Say</span>
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
                    Thousands of food lovers trust FastEat for authentic Indian flavours, premium quality and unforgettable dining experiences.
                </p>
            </div>
            <div className="marquee">
                <div className="marquee-content">
                    {[...reviews, ...reviews].map((review, index) => (
                        <ReviewCard
                            key={index}
                            {...review}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}