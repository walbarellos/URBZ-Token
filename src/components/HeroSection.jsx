
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-zinc-900 text-white min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 via-zinc-900/80 to-zinc-900" />
      <div className="relative z-10 text-center max-w-2xl px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          URBZToken – O Futuro do Mercado Imobiliário Tokenizado
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Invista em frações de imóveis reais com segurança, transparência e blockchain.  
          <br /> Democratize o acesso ao investimento imobiliário com inovação.
        </p>
        <a
          href="https://whitepaper.urbztoken.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-300 text-zinc-900 px-8 py-3 rounded-xl font-semibold transition"
        >
          Acesse o Whitepaper
        </a>
      </div>
    </section>
  );
}
