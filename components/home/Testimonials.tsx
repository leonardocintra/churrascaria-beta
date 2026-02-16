import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ricardo Silva",
      role: "Cliente Local",
      content: "A melhor picanha que já comi em Franca! O atendimento é espetacular e o ambiente muito familiar. Recomendo demais.",
      stars: 5,
    },
    {
      name: "Ana Souza",
      role: "Visitante",
      content: "Fomos em família no domingo e fomos super bem atendidos. O buffet de saladas é enorme e as carnes passam toda hora.",
      stars: 5,
    },
    {
      name: "Marcos Oliveira",
      role: "Frequentador Assíduo",
      content: "Preço justo pela qualidade oferecida. O cupim casqueirado derrete na boca. Com certeza voltarei mais vezes.",
      stars: 5,
    }
  ];

  return (
    <section className="py-24 bg-brand-charcoal text-cream relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-wider text-sm uppercase mb-2 block">Depoimentos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            O QUE DIZEM NOSSOS CLIENTES
          </h2>
          <div className="h-1.5 w-24 bg-brand-red mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-gold/30 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1 text-brand-gold">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />
                  ))}
                </div>
                <div className="text-6xl font-serif leading-none text-white/10 group-hover:text-brand-red/20 transition-colors">"</div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                {t.content}
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="h-10 w-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-gold font-bold font-display text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-lg tracking-wide">{t.name}</h4>
                  <p className="text-sm text-gray-400 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 flex flex-col items-center gap-2">
           <div className="flex items-center gap-2">
            <span className="flex text-brand-gold">
              <Star size={16} fill="currentColor"/>
              <Star size={16} fill="currentColor"/>
              <Star size={16} fill="currentColor"/>
              <Star size={16} fill="currentColor"/>
              <Star size={16} fill="currentColor"/>
            </span>
            <span className="font-bold text-white text-lg">4.8/5</span>
           </div>
          <p className="text-gray-400 text-sm">
            Baseado em mais de 500 avaliações reais no Google
          </p>
        </div>
      </div>
    </section>
  );
}
