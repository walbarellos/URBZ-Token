import React from "react";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import PropertiesGallery from "./components/PropertiesGallery";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import FooterInfo from "./components/FooterInfo";

export default function App() {
  return (
    <div
    style={{
      backgroundImage: "url('/imagens/perdizes.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          minHeight: "100vh"
    }}
    className="bg-zinc-900"
    >
    <Navbar />
    <main className="backdrop-blur-[2px] bg-zinc-900/80 min-h-screen">
    <section id="hero"><Highlights /></section>
    <section id="como-funciona"><PropertiesGallery /></section>
    <section id="imoveis"><FAQ /></section>
    <section id="faq"><CallToAction /></section>
    </main>
    <footer className="py-6 bg-zinc-950 text-center">
    <FooterInfo />
    </footer>
    </div>
  );
}

// PREP: Para domínio URBZ.tec.br, basta atualizar as referências e config Vercel.
