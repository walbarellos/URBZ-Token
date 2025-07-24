import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-white font-[Orbitron]">
    {/* Navegação fixa no topo */}
    <Navbar />

    {/* Conteúdo principal com margem e fluidez */}
    <main className="flex-grow px-4 py-8 md:px-8 md:py-12">
    {children}
    </main>

    {/* Rodapé institucional */}
    <Footer />
    </div>
  );
}
