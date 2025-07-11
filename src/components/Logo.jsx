import React from "react";

export default function Logo({ onClick }) {
  return (
    <button
    onClick={onClick}
    style={{
      fontFamily: 'Orbitron, sans-serif',
      letterSpacing: '0.15em',
      color: '#facc15',
      fontWeight: '900',
      fontSize: 32,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    }}
    aria-label="Voltar para o início"
    >
    URBZ<span style={{ color: '#f4f4f5' }}>TOKEN</span>
    </button>
  );
}
