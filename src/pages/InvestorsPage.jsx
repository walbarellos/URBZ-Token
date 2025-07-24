import React from "react";

export default function InvestorsPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center text-zinc-200 font-[Orbitron]">

    <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow-sm">
    Investidores URBZToken
    </h1>

    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-10">
    Transparência, rentabilidade e segurança para quem acredita no futuro do <span className="text-yellow-300 font-semibold">mercado imobiliário digital</span>.
    </p>

    <ul className="space-y-6 text-left text-zinc-300 text-base md:text-lg leading-relaxed">
    <li>
    <span className="text-yellow-400 font-semibold">✔ Diversificação:</span> Amplie seu portfólio com <strong className="text-white">ativos reais tokenizados</strong>.
    </li>
    <li>
    <span className="text-yellow-400 font-semibold">✔ Governança transparente:</span> Todo investimento registrado de forma <strong className="text-white">imutável via blockchain</strong>.
    </li>
    <li>
    <span className="text-yellow-400 font-semibold">✔ Baixo valor de entrada:</span> Invista com acessibilidade e inovação — <strong className="text-white">a partir de frações</strong>.
    </li>
    </ul>

    </section>
  );
}
