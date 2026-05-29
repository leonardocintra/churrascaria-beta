import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Pricing() {
  const prices = [
    {
      day: "Segunda a Quinta",
      value: "60,00",
      message: "Ol%C3%A1%2C%20gostaria%20de%20reservar%20para%20Segunda%20a%20Quinta%20(R%24%2060%2C00%20por%20pessoa).",
      highlight: false,
    },
    {
      day: "Sexta-feira",
      value: "65,00",
      message: "Ol%C3%A1%2C%20gostaria%20de%20reservar%20para%20Sexta-feira%20(R%24%2065%2C00%20por%20pessoa).",
      highlight: true,
    },
    {
      day: "Sábado e Domingo",
      value: "75,00",
      message: "Ol%C3%A1%2C%20gostaria%20de%20reservar%20para%20S%C3%A1bado%20e%20Domingo%20(R%24%2075%2C00%20por%20pessoa).",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-red mb-4">
            NOSSOS PREÇOS
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto">
            Funcionamento: 10h30 às 14h30, todos os dias da semana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prices.map((price) => (
            <div
              key={price.day}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border transition-all hover:shadow-2xl hover:-translate-y-1 ${
                price.highlight ? "border-2 border-brand-gold" : "border-gray-100"
              }`}
            >
              <div className={`${price.highlight ? "bg-brand-red" : "bg-brand-charcoal"} p-6 text-center`}>
                <h3 className="font-display text-2xl text-white tracking-wider">{price.day}</h3>
                <p className={`${price.highlight ? "text-red-100" : "text-gray-300"} text-sm mt-1`}>Almoço por pessoa</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <span className="text-sm text-gray-500 align-top">R$</span>
                  <span className="text-6xl font-bold text-brand-red">{price.value.split(",")[0]}</span>
                  <span className="text-xl text-gray-500">,{price.value.split(",")[1]}</span>
                  <p className="text-gray-500 text-sm mt-2">por pessoa</p>
                </div>
                <Button className={`w-full ${price.highlight ? "bg-brand-gold text-charcoal hover:bg-yellow-500" : ""}`} asChild>
                  <Link href={`https://wa.me/5516992398512?text=${price.message}`} target="_blank" rel="noopener noreferrer">
                    RESERVAR AGORA
                  </Link>
                </Button>
              </div>
            </div>
          ))}
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
