import React, { useState } from "react";

// Use os imports diretos com Vite
import Imovel1 from "../assets/imovel1.png";
import Imovel2 from "../assets/imovel2.png";
import Imovel3 from "../assets/imovel3.png";

const properties = [
  {
    name: "Residencial Alpha",
    img: Imovel1,
    status: "Tokenizado",
  },
{
  name: "Vila Bela Vista",
  img: Imovel2,
  status: "Pré-tokenizado",
},
{
  name: "Edifício Prisma",
  img: Imovel3,
  status: "Tokenizado",
},
];

export default function PropertiesGallery() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 bg-zinc-900 text-white">
    <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
    Imóveis Tokenizados
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
    {properties.map((item, idx) => (
      <div
      key={idx}
      className="bg-zinc-800 rounded-2xl overflow-hidden shadow hover:scale-[1.03] hover:-translate-y-1 hover:ring-2 ring-yellow-500/30 transition-transform duration-300"
      >
      <button
      onClick={() => setOpen(idx)}
      className="block focus:outline-none w-full"
      aria-label={`Expandir imagem de ${item.name}`}
      >
      <div className="w-full h-44 flex items-center justify-center bg-zinc-700 overflow-hidden">
      <img
      src={item.img}
      alt={item.name}
      className="max-h-full max-w-full object-cover object-center transition-transform duration-300 hover:scale-110"
      style={{ aspectRatio: "4 / 3" }}
      />
      </div>
      </button>
      <div className="p-5 text-center">
      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
      <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
        item.status === "Tokenizado"
        ? "bg-yellow-400 text-zinc-900 animate-badge-pulse"
        : "bg-zinc-700 text-gray-200"
      }`}
      >
      {item.status}
      </span>
      </div>
      </div>
    ))}
    </div>
    </div>
    </section>
  );
}
