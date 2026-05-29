import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-cream pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
             <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white/10 p-1">
               <Image 
                src="/logo.png" 
                alt="Churrascaria Beta Logo" 
                width={40} 
                height={40} 
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className={`${cinzel.className} text-2xl font-bold text-brand-gold`}>
              CHURRASCARIA BETA
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-sm">
            Tradição em servir o melhor churrasco da região. 
            Ambiente familiar, carnes nobres e buffet completo.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors">Início</Link></li>
            <li><Link href="/quem-somos" className="text-gray-300 hover:text-brand-gold transition-colors">Quem Somos</Link></li>
            <li><Link href="/trabalhe-conosco" className="text-gray-300 hover:text-brand-gold transition-colors">Trabalhe Conosco</Link></li>
            <li><Link href="/contato" className="text-gray-300 hover:text-brand-gold transition-colors">Contato e Localização</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Contato</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
              <span className="text-gray-300">
                Av. Magistrado Renato Sales Abreu, 450<br />
                Prolongamento Jardim Aeroporto I, Franca - SP<br />
                CEP: 14404-066
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-gold shrink-0" />
              <Link href="tel:+5516999999999" className="text-gray-300 hover:text-brand-gold transition-colors">
                (16) 99239-8512
              </Link>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <Link href="https://www.instagram.com/churrascaria_beta" className="bg-brand-red p-2 rounded-full hover:bg-red-700 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link href="https://www.facebook.com/churrascariabeta/?locale=pt_BR" className="bg-brand-red p-2 rounded-full hover:bg-red-700 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-8">
        <div className="rounded-2xl border border-gray-700/70 bg-brand-charcoal/60 p-5 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold/90">Funcionamento</p>
              <p className="mt-2 text-white text-xl font-semibold">10h30 às 14h30</p>
              <p className="text-gray-300 text-sm">Todos os dias da semana</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:max-w-2xl">
              <Link
                href="https://wa.me/5516992398512?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20para%20Segunda%20a%20Quinta%20(R%24%2060%2C00%20por%20pessoa)."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-700 bg-black/10 p-3 transition-colors hover:border-brand-gold/70 hover:bg-black/20"
              >
                <p className="text-sm font-semibold text-white">Segunda a Quinta</p>
                <p className="text-brand-gold font-bold text-lg">R$ 60,00</p>
                <p className="text-gray-300 text-xs">por pessoa</p>
              </Link>
              <Link
                href="https://wa.me/5516992398512?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20para%20Sexta-feira%20(R%24%2065%2C00%20por%20pessoa)."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-700 bg-black/10 p-3 transition-colors hover:border-brand-gold/70 hover:bg-black/20"
              >
                <p className="text-sm font-semibold text-white">Sexta-feira</p>
                <p className="text-brand-gold font-bold text-lg">R$ 65,00</p>
                <p className="text-gray-300 text-xs">por pessoa</p>
              </Link>
              <Link
                href="https://wa.me/5516992398512?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20para%20S%C3%A1bado%20e%20Domingo%20(R%24%2075%2C00%20por%20pessoa)."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-700 bg-black/10 p-3 transition-colors hover:border-brand-gold/70 hover:bg-black/20"
              >
                <p className="text-sm font-semibold text-white">Sábado e Domingo</p>
                <p className="text-brand-gold font-bold text-lg">R$ 75,00</p>
                <p className="text-gray-300 text-xs">por pessoa</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 md:flex-row justify-between items-center gap-2 px-4 space-y-2">
        <p className="font-semibold">&copy; {new Date().getFullYear()} - Churrascaria Beta. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por <Link href="https://leonardocintra.com.br" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Leonardo Cintra</Link>
        </p>
      </div>
    </footer>
  );
}
