
import Navbar from "@/components/navbar/Navbar";
import Promotions from "@/components/promotions/promotions";
import WhatsappButton from "@/components/whatsapp/WhatsappButton";
import Footer from "@/components/footer/Footer";

export default function PromocionesPage() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
      <Navbar />
      <Promotions />
      <WhatsappButton />
      <Footer />
    </main>
  );
}
