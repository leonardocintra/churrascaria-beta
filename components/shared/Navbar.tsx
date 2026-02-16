import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-brand-red/95 backdrop-blur shadow-md">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-white/10 p-1">
             <Image 
              src="/logo.png" 
              alt="Churrascaria Beta Logo" 
              width={48} 
              height={48} 
              className="object-contain w-full h-full"
            />
          </div>
          <span className="font-serif text-2xl font-bold text-cream tracking-wide">
            CHURRASCARIA BETA
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/quem-somos" className="text-balck/90 hover:text-white transition-colors font-medium">
            Quem Somos
          </Link>
          <Link href="/trabalhe-conosco" className="text-cream/90 hover:text-white transition-colors font-medium">
            Trabalhe Conosco
          </Link>
          <Link href="/contato" className="text-cream/90 hover:text-white transition-colors font-medium">
            Contato
          </Link>
          <Button variant="primary" size="sm" asChild>
             <Link href="https://wa.me/5516992398512?text=Ol%C3%A1%2C%20gostaria%20de%20reservar...">
               RESERVAR MESA
             </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
