import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import FeaturedCarousel from "@/components/products/FeaturedCarousel";
import Catalog from "@/components/products/Catalog";
import SpecialOrder from "@/components/SpecialOrder";
import WhatsappButton from "@/components/whatsapp/WhatsappButton";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#0D1117] text-white">
      <Navbar />
      <Hero />
      <FeaturedCarousel />
      <Catalog />
      <SpecialOrder />
      <WhatsappButton />
      <Footer />
    
    </main>
  );
}
