"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "5516992398512";
  const message = encodeURIComponent("Olá, gostaria de fazer uma reserva na Churrascaria Beta.");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} />
    </Link>
  );
}
