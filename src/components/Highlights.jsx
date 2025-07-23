import React from "react";

const highlights = [
  {
    title: "Segurança Blockchain",
    desc: "Imutabilidade, transparência e rastreabilidade garantidas em todas as transações.",
  },
{
  title: "Tokenização de Imóveis",
  desc: "Transformamos imóveis reais em ativos digitais acessíveis a qualquer investidor.",
},
{
  title: "Investimento Fracionado",
  desc: "Compre frações de propriedades, democratizando o acesso a ativos imobiliários.",
},
];

export default function Highlights() {
  return (
    <section className="-mt-12 pt-24 pb-16 bg-zinc-900 text-white border-t border-zinc-800 relative z-10">
    <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
    Por que o URBZToken?
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
    {highlights.map((item, i) => (
      <div
      key={i}
      className="bg-zinc-800 p-7 rounded-2xl shadow-md hover:shadow-yellow-500/30 hover:scale-105 transition-transform duration-300"
      style={{ transitionDelay: `${i * 100}ms` }}
      >
      <h3 className="text-xl font-semibold mb-3 text-yellow-400 group-hover:underline transition">
      {item.title}
      </h3>
      <p className="text-gray-300">{item.desc}</p>
      </div>
    ))}
    </div>
    </div>
    </section>
  );
}
