import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/Button";

export default function TrabalheConosco() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      <section className="bg-brand-charcoal py-20 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">TRABALHE CONOSCO</h1>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          Faça parte da Família Beta. Estamos sempre em busca de novos talentos.
        </p>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                placeholder="Seu nome"
                required
              />
            </div>
            
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp (Obrigatório)</label>
              <input 
                type="tel" 
                id="whatsapp" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                placeholder="(DDD) 99999-9999"
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Cargo Desejado</label>
              <select 
                id="role"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Selecione...</option>
                <option value="garcom">Garçom / Garçonete</option>
                <option value="cozinha">Auxiliar de Cozinha</option>
                <option value="churrasqueiro">Churrasqueiro</option>
                <option value="recepcao">Recepção</option>
                <option value="limpeza">Limpeza</option>
              </select>
            </div>

            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Resumo da Experiência</label>
              <textarea 
                id="summary" 
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                placeholder="Conte brevemente onde já trabalhou..."
              ></textarea>
            </div>

            <Button type="submit" className="w-full bg-brand-gold text-charcoal font-bold hover:bg-yellow-500">
              ENVIAR CURRÍCULO
            </Button>
          </form>
          
          <p className="text-xs text-center text-gray-400 mt-6">
            *Ao enviar, você concorda que entraremos em contato via WhatsApp caso seu perfil seja selecionado.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
