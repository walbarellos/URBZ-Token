import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
        fixed bottom-6 right-6 z-50 p-3 rounded-full bg-yellow-400 text-zinc-900 shadow-lg
        hover:bg-yellow-300 transition-all duration-200
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M12 4v16M12 4l-6 6M12 4l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

