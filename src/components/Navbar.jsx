import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const scrollToId = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/#" + id;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
    {open && (
      <div
      className="fixed inset-0 z-40 bg-black/60 transition-opacity lg:hidden"
      onClick={() => setOpen(false)}
      />
    )}
    <header className="bg-zinc-950 shadow-md fixed w-full z-50 top-0 left-0">
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 text-white font-poppins">
    <Logo
    onClick={() => {
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/";
      }
    }}
    />
    <ul className="hidden lg:flex gap-8 text-sm font-medium">
    <li>
    <button className="hover:text-yellow-400" onClick={() => scrollToId("hero")}>
    Home
    </button>
    </li>
    <li>
    <button className="hover:text-yellow-400" onClick={() => scrollToId("como-funciona")}>
    Como Funciona
    </button>
    </li>
    <li>
    <button className="hover:text-yellow-400" onClick={() => scrollToId("faq")}>
    FAQ
    </button>
    </li>
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
    <span className={`block w-6 h-0.5 mb-1 bg-yellow-400 transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
    <span className={`block w-6 h-0.5 mb-1 bg-yellow-400 transition ${open ? "opacity-0" : ""}`} />
    <span className={`block w-6 h-0.5 bg-yellow-400 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
    </button>
    </nav>

    <div
    className={`fixed top-0 left-0 w-4/5 max-w-xs h-full z-50 bg-zinc-900 shadow-2xl transition-transform duration-300 font-poppins ${
      open ? "translate-x-0" : "-translate-x-full"
    } lg:hidden`}
    >
    <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-700">
    <Logo
    onClick={() => {
      setOpen(false);
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/";
      }
    }}
    />
    <button onClick={() => setOpen(false)} className="p-2 rounded hover:bg-zinc-800">
    <span className="block w-6 h-0.5 mb-1 bg-yellow-400" />
    <span className="block w-6 h-0.5 bg-yellow-400" />
    </button>
    </div>
    <ul className="flex flex-col gap-4 px-6 py-6">
    <li>
    <button className="hover:text-yellow-400" onClick={() => scrollToId("hero")}>
    Home
    </button>
    </li>
    <li>
    <button className="hover:text-yellow-400" onClick={() => scrollToId("como-funciona")}>
    Como Funciona
    </button>
    </li>
    <li>
    <button className="hover:text-yellow-400" onClick={() => scrollToId("faq")}>
    FAQ
    </button>
    </li>
    <li>
    <a
    href="/whitepaper.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-400 hover:underline"
    onClick={() => setOpen(false)}
    >
    Whitepaper
    </a>
    </li>
    </ul>
    </div>
    </header>
    <div className="h-20" />
    </>
  );
}
