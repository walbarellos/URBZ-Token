import React from "react";
import perdizesJPG from "../assets/perdizes.jpg"; // ou .png

export default function BannerPerdizes() {
  return (
    <div
    className="
    w-full
    h-32 md:h-48
    bg-center bg-cover
    rounded-none
    overflow-hidden
    shadow-md
    flex
    items-center
    justify-center
    "
    style={{
      backgroundImage: `url(${perdizesJPG})`,
    }}
    aria-label="Banner Perdizes"
    />
  );
}
