import React, { lazy, Suspense } from "react";

// Lazy loading dos blocos principais da homepage
const HeroSection = lazy(() => import("../components/HeroSection"));
const Highlights = lazy(() => import("../components/Highlights"));
const PropertiesGallery = lazy(() => import("../components/PropertiesGallery"));
const FAQ = lazy(() => import("../components/FAQ"));

export default function HomePage() {
  return (
    <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-yellow-400 font-[Orbitron] text-lg tracking-wide">
      Carregando conteúdo...
      </div>
    }
    >
    <main className="bg-zinc-900 text-white font-[Orbitron]">
    <HeroSection />
    <Highlights />
    <PropertiesGallery />
    <FAQ />
    </main>
    </Suspense>
  );
}
