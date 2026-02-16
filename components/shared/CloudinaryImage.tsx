"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
import { cn } from "@/lib/utils";

interface CloudinaryImageProps extends Omit<CldImageProps, "src"> {
  src: string;
  alt: string;
  className?: string;
}

export default function CloudinaryImage({
  src,
  alt,
  className,
  ...props
}: CloudinaryImageProps) {
  return (
    <div className={cn("overflow-hidden relative", className)}>
      <CldImage
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
        gravity="auto"
        format="auto"
        quality="auto"
        {...props}
      />
    </div>
  );
}
