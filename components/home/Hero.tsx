import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Background Image - Using a placeholder standard image for immediate visual confirmation until Cloudinary is engaged or for pure styling */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop')",
        }}
      />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight uppercase drop-shadow-lg">
          O Melhor Rodízio <br />
          <span className="text-brand-gold">Da Região</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
          Carnes nobres, buffet completo e a tradição que você já conhece.
          <br />
          Uma experiência gastronômica inesquecível.
        </p>

        <div className="pt-8">
          <Button size="lg" className="animate-pulse shadow-xl hover:scale-105 transition-transform" asChild>
            <Link href="https://wa.me/5516992398512?text=Ol%C3%A1%2C%20gostaria%20de%20reservar...">
              RESERVAR MESA AGORA
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
