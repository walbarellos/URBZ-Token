import React, { useState } from "react";
import produto1 from "../assets/produto1.png";
import produto2 from "../assets/produto2.png";
import produto3 from "../assets/produto3.png";

const properties = [
  {
    name: "Edifício Z – Perdizes",
    status: "Tokenizado",
    img: produto2,
  },
{
  name: "Residencial Alpha",
  status: "Pré-tokenização",
  img: produto3,
},
{
  name: "URBZ Tower",
  status: "Em análise",
  img: produto1,
}
];

export default function PropertiesGallery() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 px-4 bg-zinc-900 text-white" id="imoveis">
    <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">Imóveis Tokenizados</h2>
    <div className="grid md:grid-cols-3 gap-8">
    {properties.map((item, idx) => (
      <div key={idx} className="bg-zinc-800 rounded-2xl overflow-hidden shadow hover:scale-105 transition">
      <button
      onClick={() => setOpen(idx)}
      className="block focus:outline-none w-full"
      aria-label={`Expandir imagem de ${item.name}`}
      >
      <div className="w-full h-44 flex items-center justify-center bg-zinc-700">
      <img
      src={item.img}
      alt={item.name}
      className="max-h-full max-w-full object-cover object-center"
      style={{ aspectRatio: "4/3" }}
      />
      </div>
      </button>
      <div className="p-5">
      <h3 className="font-semibold text-lg mb-1 text-center">{item.name}</h3>
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold
        ${item.status === "Tokenizado" ? "bg-yellow-400 text-zinc-900" : "bg-zinc-700 text-gray-200"}
        `}>
        {item.status}
        </span>
        </div>
        </div>

    ))}
    </div>
    </div>
    {/* Modal expandido */}
    {open !== null && (
      <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={() => setOpen(null)}
      aria-modal="true"
      tabIndex={-1}
      >
      <div className="relative max-w-md w-full mx-4">
      <button
      className="absolute -top-4 -right-4 bg-yellow-400 text-zinc-900 p-2 rounded-full shadow-xl z-10 hover:bg-yellow-300 transition"
      onClick={() => setOpen(null)}
      aria-label="Fechar imagem"
      >✕</button>
      <img
      src={properties[open].img}
      alt={properties[open].name}
      className="w-full rounded-2xl shadow-xl border-4 border-yellow-400 animate-zoomIn object-cover"
      style={{ maxHeight: "70vh", objectPosition: "center" }}
      onClick={e => e.stopPropagation()}
      />
      <div className="bg-zinc-900 p-4 mt-2 rounded-b-2xl text-white">
      <div className="font-bold text-lg">{properties[open].name}</div>
      <div>{properties[open].status}</div>
      </div>
      </div>
      </div>
    )}
    <style>
    {`
      @keyframes zoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      .animate-zoomIn { animation: zoomIn 0.3s cubic-bezier(0.68,-0.55,0.27,1.55) both; }
      `}
      </style>
      </section>
  );
}
