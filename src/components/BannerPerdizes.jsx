import React from "react";
import BannerCard from "./BannerCard";

export default function BannerPerdizes() {
  return (
    <section
    className="relative w-full min-h-[560px] md:min-h-[640px] bg-black overflow-hidden group"
    aria-label="Apresentação Institucional URBX"
    >
    {/* Imagem de fundo com parallax e leve zoom */}
    <div
    className="absolute inset-0 z-0 bg-cover bg-center transform transition-transform duration-[6000ms] ease-linear scale-100 group-hover:scale-[1.03]"
    style={{
      backgroundImage: "url('/imagens/perdizes.jpg')",
          backgroundAttachment: "scroll", // para evitar issues em mobile
    }}
    />

    {/* Gradiente vertical sobre imagem */}
    <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/60 to-zinc-900/90 backdrop-blur-sm" />

    {/* Sombra centralizada para foco no card */}
    <div className="absolute inset-0 z-15 bg-gradient-radial from-transparent via-transparent to-black/30 pointer-events-none" />

    {/* Conteúdo central com o Card */}
    <div className="relative z-20 flex items-center justify-center min-h-[560px] px-6 text-center">
    <BannerCard />
    </div>

    {/* Título acessível para leitores de tela */}
    <h1 className="sr-only">URBX: Transparência Jurídica e Governança</h1>
    </section>
  );
}
