import Hero from "@/components/store/home/Hero";
import About from "@/components/store/home/About";
import PopularDishes from "@/components/store/home/popular/PopularDishes";
import Offer from "@/components/store/home/Offer";
import Testimonials from "@/components/store/home/testimonials/Testimonials";
import Gallery from "@/components/store/home/gallery/Gallery";
import CTA from "@/components/store/home/CTA";

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
