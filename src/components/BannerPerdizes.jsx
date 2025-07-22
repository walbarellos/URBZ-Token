import React from "react";

export default function BannerPerdizes() {
  return (
    <section
      className="w-full h-[600px] md:h-[700px] lg:h-[800px] relative"
      style={{
        backgroundImage: "url('/imagens/perdizes.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
          URBZToken transforma imóveis reais em ativos digitais acessíveis
        </h2>
      </div>
    </section>
  );
}