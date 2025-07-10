
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
}
