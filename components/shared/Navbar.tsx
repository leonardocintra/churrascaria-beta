import Link from "next/link";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import { Button } from "@/components/ui/Button";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-brand-red/95 backdrop-blur shadow-md">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-14 w-14 rounded-full overflow-hidden bg-white/10 p-0.5 md:h-16 md:w-16">
             <Image 
              src="/logo.png" 
              alt="Churrascaria Beta Logo" 
              width={160} 
              height={160} 
              className="object-contain w-full h-full scale-125"
            />
          </div>
          <span className={`${cinzel.className} text-[1.45rem] text-cream leading-none md:text-3xl`}>
            <span className="font-bold tracking-[0.04em] md:tracking-[0.08em]">BETA</span>{" "}
            <span className="font-semibold tracking-[0.02em] md:tracking-[0.05em]">Churrascaria</span>
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
