import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    {open && (
      <div
      className="fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden"
      onClick={() => setOpen(false)}
      />
    )}
    <header className="bg-zinc-950 shadow-md fixed w-full z-50 top-0 left-0">
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 text-white">
    {/* Link no título para o PDF */}
    <a
    href="/whitepaper.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xl font-bold tracking-wide text-yellow-400 hover:underline"
    title="Abrir Whitepaper"
    >
    URBZToken
    </a>
    <ul className="hidden lg:flex gap-8 text-sm font-medium">
    <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
    <li><a href="#como-funciona" className="hover:text-yellow-400">Como Funciona</a></li>
    <li><a href="#imoveis" className="hover:text-yellow-400">Imóveis</a></li>
    <li><Link to="/faq" className="hover:text-yellow-400">FAQ</Link></li>
    <li>
    <a
    href="/whitepaper.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-400 hover:underline"
    >
    Whitepaper
    </a>
    </li>
    </ul>
    <button
    className="lg:hidden z-50 relative p-2 rounded transition hover:bg-zinc-800"
    onClick={() => setOpen((v) => !v)}
    aria-label={open ? "Fechar menu" : "Abrir menu"}
    aria-expanded={open}
    >
    <span className={`block w-6 h-0.5 mb-1 bg-yellow-400 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
    <span className={`block w-6 h-0.5 mb-1 bg-yellow-400 transition ${open ? "opacity-0" : ""}`}></span>
    <span className={`block w-6 h-0.5 bg-yellow-400 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
    </button>
    </nav>
    {/* ...restante do código do menu mobile... */}
    </header>
    <div className="h-20" />
    </>
  );
}
