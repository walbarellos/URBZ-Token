import React from "react";
import { ShieldCheck } from "lucide-react";

export default function BannerCard() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full py-3 px-6 flex items-center justify-center gap-3 shadow-sm">
        <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center ring-1 ring-white/80">
          <ShieldCheck className="text-white w-4 h-4" />
        </div>
        <h2 className="text-lg md:text-xl font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
          URBZ Jurídico & Institucional
        </h2>
      </div>
    </div>
  );
}
