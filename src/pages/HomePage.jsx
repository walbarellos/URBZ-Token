
import React, { lazy, Suspense } from "react";
const HeroSection = lazy(() => import("../components/HeroSection"));
const Highlights = lazy(() => import("../components/Highlights"));
const PropertiesGallery = lazy(() => import("../components/PropertiesGallery"));
const FAQ = lazy(() => import("../components/FAQ"));

export default function HomePage() {
  return (
    <Suspense fallback={<div className="text-center py-10">Carregando…</div>}>
      <HeroSection />
      <Highlights />
      <PropertiesGallery />
      <FAQ />
    </Suspense>
  );
}
