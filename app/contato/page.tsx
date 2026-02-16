import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Contato() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      <section className="bg-brand-charcoal py-20 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">FALE CONOSCO</h1>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          Localização privilegiada e fácil acesso. Venha nos visitar.
        </p>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-red mb-6">Informações</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-brand-gold/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">Endereço</h3>
                    <p className="text-gray-600">Av. Magistrado Renato Sales Abreu, 450</p>
                    <p className="text-gray-600">Prolongamento Jardim Aeroporto I, Franca - SP</p>
                    <p className="text-gray-600">CEP: 14404-066</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-brand-gold/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">Telefone</h3>
                    <p className="text-gray-600">(16) 99239-8512</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-charcoal text-xl">Horário de Funcionamento</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-bold text-brand-red">Almoço</p>
                  <p>Seg a Sex: 11h30 - 15h00</p>
                  <p>Sáb, Dom e Feriados: 11h30 - 16h00</p>
                </div>
                <div>
                  <p className="font-bold text-brand-red">Jantar</p>
                  <p>Ter a Sáb: 19h00 - 23h30</p>
                  <p>Dom e Seg: Fechado</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button size="lg" className="w-full flex items-center gap-2" asChild>
                <Link href="https://waze.com/ul?ll=-20.572885,-47.3786458&navigate=yes" target="_blank" rel="noopener noreferrer">
                  <Navigation size={20} />
                  IR COM WAZE
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="w-full flex items-center gap-2" asChild>
                <Link href="tel:+5516999999999">
                  <Phone size={20} />
                  LIGAR AGORA
                </Link>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
             <iframe 
               src="https://maps.google.com/maps?q=-20.572885,-47.3786458&hl=pt&z=16&output=embed"
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
