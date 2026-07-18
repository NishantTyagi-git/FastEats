import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import About from "@/components/home/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <Hero />
      <About />
      {/* <Features /> */}
    </div>
  );
}
