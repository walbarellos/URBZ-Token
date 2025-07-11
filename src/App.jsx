import React from "react";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import PropertiesGallery from "./components/PropertiesGallery";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import FooterInfo from "./components/FooterInfo";
import perdizesBg from './assets/perdizes.jpg'; // importando a imagem
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <div className="relative min-h-screen">
    {/* BG fixo com imagem perdizes.jpg */}
    <div
    className="fixed inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')`,
      backgroundAttachment: "fixed",
    }}


    />
    <Navbar />
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
