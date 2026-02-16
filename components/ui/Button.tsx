import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot"; 

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-brand-gold text-charcoal hover:bg-yellow-400": variant === "primary",
            "bg-brand-red text-cream hover:bg-red-800": variant === "secondary",
            "border border-brand-charcoal text-charcoal hover:bg-gray-100": variant === "outline",
            "hover:bg-gray-100 text-charcoal": variant === "ghost",
            "h-9 px-4 py-2 text-sm": size === "sm",
            "h-10 px-6 py-2": size === "md",
            "h-12 px-8 py-3 text-lg font-bold": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
