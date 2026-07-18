import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import PopularDishes from "@/components/home/popular/PopularDishes";
import Offer from "@/components/home/Offer";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <Hero />
      <About />
      <PopularDishes />
      <Offer />
      <Testimonials />
      {/* <Features /> */}
    </div>
  );
}
