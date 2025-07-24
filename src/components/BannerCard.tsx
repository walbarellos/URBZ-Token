import React from "react";
import { ShieldCheck } from "lucide-react";

export default function BannerCard() {
    return (
        <div className="w-full max-w-3xl mx-auto px-4 md:px-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-6 md:p-10 text-center">
        {/* Linha central com ícone e título absolutamente centralizados */}
        <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
        <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center ring-2 ring-white/90 shadow-sm">
        <ShieldCheck className="text-white w-5 h-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
        URBX Jurídico & Institucional
        </h2>
        </div>
        <p className="text-base md:text-lg text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)] leading-relaxed mt-2">
        Este projeto opera sob rigor jurídico, com foco em transparência,
        auditoria e governança urbana. Todas as interações estão protegidas
        por cláusulas contratuais e registro público.
        </p>
        </div>
        </div>
        </div>
    );
}
