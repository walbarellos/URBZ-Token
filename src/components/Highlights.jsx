
import React from "react";

const highlights = [
  {
    title: "Segurança Blockchain",
    desc: "Imutabilidade, transparência e rastreabilidade garantidas em todas as transações."
  },
  {
    title: "Investimento Acessível",
    desc: "Participe a partir de valores reduzidos e tenha liquidez futura nos tokens imobiliários."
  },
  {
    title: "Imóveis Reais Tokenizados",
    desc: "Empreendimentos reais, já disponíveis para investimento digital em Perdizes/SP."
  }
];

export default function Highlights() {
  return (
    <section className="py-16 px-4 bg-zinc-950 text-white" id="como-funciona">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Por que o URBZToken?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <div key={i} className="bg-zinc-800 p-7 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
