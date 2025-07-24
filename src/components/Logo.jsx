import React from "react";

export default function Logo({ onClick }) {
  return (
    <button
    onClick={onClick}
    aria-label="Voltar para o início"
    className="text-2xl md:text-3xl font-extrabold tracking-widest font-[Orbitron] text-yellow-400 hover:opacity-90 transition duration-300"
    style={{ background: "none", border: "none" }}
    >
    URBZ<span className="text-zinc-100">TOKEN</span>
    </button>
  );
}
