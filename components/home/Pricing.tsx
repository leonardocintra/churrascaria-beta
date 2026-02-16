import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Pricing() {
  const features = [
    "Rodízio Completo de Carnes Nobres",
    "Buffet de Saladas Variadas",
    "Pratos Quentes e Guarnições",
    "Sobremesas (Inclusas no Premium)",
    "Estacionamento Gratuito"
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-red mb-4">
            NOSSOS PREÇOS
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto">
            Escolha o melhor momento para saborear nosso churrasco. Preços justos para uma qualidade inigualável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Almoço */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="bg-brand-charcoal p-6 text-center">
              <h3 className="font-display text-2xl text-white tracking-wider">ALMOÇO</h3>
              <p className="text-gray-400 text-sm mt-1">Segunda a Sexta (Exceto Feriados)</p>
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <span className="text-sm text-gray-500 align-top">R$</span>
                <span className="text-6xl font-bold text-brand-red">59</span>
                <span className="text-xl text-gray-500">,90</span>
                <p className="text-gray-500 text-sm mt-2">por pessoa</p>
              </div>
              <ul className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <Link href="https://wa.me/5516992398512?text=Reserva%20para%20o%20Almo%C3%A7o">
                  RESERVAR ALMOÇO
                </Link>
              </Button>
            </div>
          </div>

          {/* Card Jantar/FDS */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-brand-gold relative transform scale-105 z-10">
             <div className="absolute top-0 right-0 bg-brand-gold text-charcoal text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
              Mais Vendido
            </div>
            <div className="bg-brand-red p-6 text-center">
              <h3 className="font-display text-2xl text-white tracking-wider">JANTAR & FINAIS DE SEMANA</h3>
              <p className="text-red-100 text-sm mt-1">Jantar (Todos os dias) e Almoço (Sáb/Dom/Feriados)</p>
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <span className="text-sm text-gray-500 align-top">R$</span>
                <span className="text-6xl font-bold text-brand-red">79</span>
                <span className="text-xl text-gray-500">,90</span>
                <p className="text-gray-500 text-sm mt-2">por pessoa</p>
              </div>
              <ul className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold mr-3 shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
                <li className="flex items-center text-brand-red font-bold">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold mr-3 shrink-0" />
                  + Opções Especiais do Chef
                </li>
              </ul>
              <Button className="w-full bg-brand-gold text-charcoal hover:bg-yellow-500" asChild>
                <Link href="https://wa.me/5516992398512?text=Reserva%20para%20o%20Jantar">
                  RESERVAR AGORA
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 bg-white inline-block px-6 py-3 rounded-full shadow-sm border border-gray-100">
             👶 <strong>Crianças até 5 anos não pagam.</strong> De 6 a 10 anos pagam metade.
          </p>
        </div>
      </div>
    </section>
  );
}
