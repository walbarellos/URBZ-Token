import React from "react";
import FooterInfo from "./FooterInfo";
export default function CallToAction() {
  return (
    <section className="py-16 px-4 bg-zinc-950 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 font-poppins uppercase">
        Junte-se à Comunidade URBZToken
      </h2>
      <p className="text-gray-300 mb-6 font-inter">
        Insira seu e-mail para receber novidades e oportunidades exclusivas sobre tokenização imobiliária, eventos e lançamentos!
      </p>
      <form
        className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto"
        onSubmit={e => { e.preventDefault(); alert("Cadastro enviado! 🚀"); }}
      >
        <input
          type="email"
          required
          placeholder="Seu melhor e-mail"
          className="rounded-lg px-4 py-3 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 font-inter"
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-300 text-zinc-900 px-6 py-3 rounded-lg font-semibold transition font-poppins uppercase"
        >
          Quero receber
        </button>
      </form>
      <FooterInfo />
    </section>
  );
}

