import React, { useState } from "react";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Erro ao enviar e-mail:", err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-black text-white py-20 text-center">
    <h2 className="text-3xl font-bold text-yellow-400 mb-4">
    JUNTE-SE À COMUNIDADE URBZTOKEN
    </h2>
    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
    Insira seu e-mail para receber novidades e oportunidades exclusivas sobre
    tokenização imobiliária, eventos e lançamentos!
    </p>

    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
    <input
    type="email"
    required
    className="px-4 py-2 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none w-full sm:w-auto"
    placeholder="Seu melhor e-mail"
    value={email}
    onChange={(e) => {
      setStatus("idle");
      setEmail(e.target.value);
    }}
    />
    <button
    type="submit"
    className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-semibold transition"
    disabled={status === "loading"}
    >
    {status === "loading" ? "Enviando..." : "QUERO RECEBER"}
    </button>
    </form>

    {status === "success" && (
      <p className="text-green-400 mt-4">E-mail enviado com sucesso!</p>
    )}
    {status === "error" && (
      <p className="text-red-500 mt-4">Erro ao enviar. Verifique o e-mail ou tente novamente.</p>
    )}
    </section>
  );
}
