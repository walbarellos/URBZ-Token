
import React, { useState } from "react";

const faqs = [
  {
    q: "O que é URBZToken?",
    a: "Um projeto de tokenização de imóveis que permite investimento fracionado com segurança e transparência via blockchain."
  },
  {
    q: "Como investir?",
    a: "Em breve você poderá investir em imóveis tokenizados por meio da plataforma online. Fique atento ao lançamento oficial!"
  },
  {
    q: "É seguro?",
    a: "Toda operação é auditável e registrada em blockchain. Utilizamos práticas de compliance, KYC e segurança digital."
  },
  {
    q: "Qual o valor mínimo?",
    a: "O investimento mínimo será informado no lançamento do primeiro imóvel. Nosso objetivo é democratizar o acesso."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 px-4 bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
        <ul className="space-y-5">
          {faqs.map((item, i) => (
            <li key={i} className="border-b border-zinc-700 pb-3">
              <button
                className="w-full text-left flex justify-between items-center font-semibold text-lg hover:text-yellow-400 transition"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                {item.q}
                <span>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div id={`faq-panel-${i}`} className="text-gray-300 mt-2">{item.a}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
