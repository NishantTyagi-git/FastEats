import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import PopularDishes from "@/components/home/popular/PopularDishes";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <Hero />
      <About />
      <PopularDishes />
      {/* <Features /> */}
    </div>
  );
}
