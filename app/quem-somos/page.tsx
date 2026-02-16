import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-red py-20 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">QUEM SOMOS</h1>
        <p className="text-red-100 max-w-2xl mx-auto px-4">
          Conheça a história e os valores que fazem da Churrascaria Beta uma referência.
        </p>
      </section>

      {/* Story */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
             <Image 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                alt="Equipe Churrascaria Beta"
                fill
                className="object-cover"
             />
          </div>
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold text-brand-charcoal">
              Tradição e Qualidade desde 1995
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A Churrascaria Beta nasceu do sonho de oferecer uma experiência gastronômica autêntica, 
              inspirada na tradição gaúcha. Começamos com um pequeno salão e hoje somos referência 
              em carnes nobres na região.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossa missão é servir com excelência, garantindo cortes selecionados, um buffet 
              variado e um atendimento que faz você se sentir em casa.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-gold">
                <h3 className="font-bold text-brand-charcoal">Missão</h3>
                <p className="text-sm text-gray-500">Servir felicidade em forma de churrasco.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-gold">
                <h3 className="font-bold text-brand-charcoal">Valores</h3>
                <p className="text-sm text-gray-500">Qualidade, Respeito e Tradição.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
