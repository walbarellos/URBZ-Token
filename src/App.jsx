import React from "react";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import PropertiesGallery from "./components/PropertiesGallery";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import FooterInfo from "./components/FooterInfo";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Highlights />
        <PropertiesGallery />
        <FAQ />
        <CallToAction />
      </main>
      <footer className="py-6 bg-zinc-950 text-center">
        <FooterInfo />
      </footer>
    </>
  );
}

