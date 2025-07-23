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
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/perdizes.jpg')`,
          backgroundAttachment: "fixed",
        }}
      />
      <Navbar />
      <BannerPerdizes />
      <main className="min-h-screen bg-zinc-900">
        <section id="hero"><Highlights /></section>
        <section id="como-funciona"><PropertiesGallery /></section>
        <section id="faq"><FAQ /></section> {/* Aqui o FAQ real permanece */}
        <section><CallToAction /></section>
      </main>
      <footer className="py-6 bg-zinc-950 text-center">
        <FooterInfo />
      </footer>
      <ScrollToTopButton />
    </div>
  );
}
