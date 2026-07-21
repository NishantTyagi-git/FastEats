import Navbar from "@/components/store/layout/Navbar";
import Footer from "@/components/store/layout/Footer";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}