import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
