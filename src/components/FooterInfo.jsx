import React from "react";
export default function FooterInfo() {
  return (
    <div className="mt-2 text-xs text-gray-400 flex flex-col md:flex-row items-center justify-center gap-1">
      <span>
        Termos &middot; Política de Privacidade &middot;{" "}
        <a
          href="mailto:contato@urbztoken.com"
          className="text-yellow-400 hover:underline"
        >
          contato@urbztoken.com
        </a>
      </span>
    </div>
  );
}

