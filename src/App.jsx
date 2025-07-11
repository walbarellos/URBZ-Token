import React from "react";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import PropertiesGallery from "./components/PropertiesGallery";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import FooterInfo from "./components/FooterInfo";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BannerPerdizes from "./components/BannerPerdizes"; // Certifique-se de criar este componente!

export default function App() {
  return (
    <div className="relative min-h-screen">
    {/* BG fixo global (se quiser manter!) */}
    <div
    className="fixed inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url('/imagens/perdizes.jpg')`, // Ou troque pelo global desejado
          backgroundAttachment: "fixed",
    }}
    />
    <Navbar />
    {/* Banner institucional Perdizes (DEPOIS da navbar, ANTES do conteúdo) */}
    <BannerPerdizes />
    <main className="min-h-screen bg-zinc-900/85 backdrop-blur-md">
    <section id="hero"><Highlights /></section>
    <section id="como-funciona"><PropertiesGallery /></section>
    <section id="imoveis"><FAQ /></section>
    <section id="faq"><CallToAction /></section>
    </main>
    <footer className="py-6 bg-zinc-950 text-center">
    <FooterInfo />
    </footer>
    <ScrollToTopButton />
    </div>
  );
}
