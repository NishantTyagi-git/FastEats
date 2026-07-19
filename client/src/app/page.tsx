import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import PopularDishes from "@/components/home/popular/PopularDishes";
import Offer from "@/components/home/Offer";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Gallery from "@/components/home/gallery/Gallery";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Hero />
      <About />
      <PopularDishes />
      <Offer />
      <Testimonials />
      <Gallery /> 
      <CTA /> 
    </div>
  );
}
