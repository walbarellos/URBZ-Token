
import React, { lazy, Suspense } from "react";
const FAQ = lazy(() => import("../components/FAQ"));

export default function FaqPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">Carregando FAQ…</div>}>
      <FAQ />
    </Suspense>
  );
}
