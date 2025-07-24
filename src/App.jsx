import React from "react";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import PropertiesGallery from "./components/PropertiesGallery";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import FooterInfo from "./components/FooterInfo";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BannerPerdizes from "./components/BannerPerdizes";

export default function App() {
  return (
    <div className="relative min-h-screen bg-zinc-900 text-white font-[Orbitron] overflow-x-hidden">

    {/* Background fixo com leve scroll parallax e transição suave */}
    <div
    className="fixed inset-0 -z-20 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
    style={{
      backgroundImage: `url('/assets/perdizes.jpg')`,
          backgroundAttachment: "scroll", // Mantém o movimento no scroll
    }}
    />

    {/* Camada de gradiente escuro superior para suavizar topo */}
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-transparent pointer-events-none transition-opacity duration-1000" />

    {/* Barra de navegação fixa */}
    <Navbar />

    {/* Previne espaço em branco entre navbar e banner */}
    <div className="h-4 lg:h-6" />

    {/* Banner institucional (imagem, texto, etc) */}
    <BannerPerdizes />

    {/* Conteúdo principal com fundo translúcido e leve blur */}
    <main role="main" className="min-h-screen backdrop-blur-md bg-zinc-900/75 transition-all duration-700">

    <section id="hero">
    <Highlights />
    </section>

    <section id="como-funciona">
    <PropertiesGallery />
    </section>

    <section id="faq">
    <FAQ />
    </section>

    <section>
    <CallToAction />
    </section>

    </main>

    {/* Rodapé refinado */}
    <footer className="py-6 bg-zinc-950 text-center border-t border-zinc-800">
    <FooterInfo />
    </footer>

    {/* Botão de voltar ao topo */}
    <ScrollToTopButton />
    </div>
  );
}
