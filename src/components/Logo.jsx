// src/components/Logo.jsx
export default function Logo({ onClick }) {
  return (
    <button
    onClick={onClick}
    className="
    group text-3xl md:text-4xl font-extrabold tracking-widest
    uppercase select-none
    text-yellow-400
    font-orbitron
    relative
    transition
    focus:outline-none
    hover:text-yellow-300
    hover:scale-105
    drop-shadow-[0_1.5px_7px_rgba(236,197,77,0.55)]
    "
    style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.15em' }}
    aria-label="Voltar para o início"
    >
    <span
    className="
    relative
    after:content-['▣']
    after:absolute after:-right-7 after:top-0 after:text-purple-500 after:text-xl after:opacity-75 group-hover:after:animate-pulse
    "
    >
    URBZ
    </span>
    <span className="text-zinc-100 ml-1">TOKEN</span>
    </button>
  );
}
