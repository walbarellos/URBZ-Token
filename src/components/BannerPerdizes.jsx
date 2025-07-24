import React from "react";

export default function BannerPerdizes() {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[600px] bg-black overflow-hidden group">
      {/* Imagem de fundo com parallax sutil e zoom on hover */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed transform transition-transform duration-[6000ms] ease-linear scale-100 group-hover:scale-105 will-change-transform"
        style={{
          backgroundImage: "url('/imagens/perdizes.jpg')",
        }}
      />

      {/* Gradiente sobre imagem para contraste e legibilidade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/60 to-zinc-900/90 backdrop-blur-sm" />

      {/* Conteúdo central animado */}
      <div className="relative z-20 flex items-center justify-center min-h-[480px] px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-4xl tracking-wide opacity-0 animate-fade-in-up animation-delay-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
          URBZToken transforma imóveis reais em{" "}
          <br className="hidden md:block" />
          <span className="text-yellow-400">ativos digitais acessíveis</span>
        </h2>
      </div>
    </section>
  );
}
