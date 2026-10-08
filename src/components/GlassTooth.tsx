"use client";

import Image from "next/image";

export default function GlassTooth({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Floating crystal tooth with sparkles */}
      <div className="relative aspect-square w-full max-w-[320px] lg:max-w-[400px] transition-transform duration-500 hover:scale-105">
        <Image
          src="/crystal-tooth-transparent.png"
          alt="Translucent Crystal Glass Molar Tooth with Sparkles"
          fill
          priority
          sizes="(max-width: 1024px) 300px, 400px"
          className="object-contain drop-shadow-[0_20px_35px_rgba(147,197,253,0.3)]"
        />
      </div>
    </div>
  );
}
