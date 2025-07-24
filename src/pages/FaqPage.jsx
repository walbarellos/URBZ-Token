import React, { lazy, Suspense } from "react";

// Carregamento assíncrono do componente FAQ
const FAQ = lazy(() => import("../components/FAQ"));

export default function FaqPage() {
  return (
    <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-yellow-400 font-[Orbitron] text-lg tracking-wide">
      Carregando FAQ...
      </div>
    }
    >
    <main className="bg-zinc-900 text-white font-[Orbitron] min-h-screen px-4 py-12">
    <FAQ />
    </main>
    </Suspense>
  );
}
