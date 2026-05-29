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
      
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 md:flex-row justify-between items-center gap-2 px-4 space-y-2">
        <p className="font-semibold">&copy; {new Date().getFullYear()} - Churrascaria Beta. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por <Link href="https://leonardocintra.com.br" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Leonardo Cintra</Link>
        </p>
      </div>
    </footer>
  );
}
