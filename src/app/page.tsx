"use client";

import CanvasScrollClip from "canvas-scroll-clip";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import CryoniqLogo from "./../../public/logo-cryoniq.svg";

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      new CanvasScrollClip(ref.current, {
        framePath: "/images/MainSmoke/MainSmoke-0000001.jpg",
        frameCount: 390,
        scrollArea: 4000,
      });
    }
  }, []);



  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)] antialiased bg-black">
      <main className="flex flex-col gap-2 items-center sm:items-start text-center">
        <div className="flex justify-between items-center w-full p-4 bg-opacity-50 fixed top-0 left-0 right-0 z-50 align-middle">
          <div className="flex items-center">
            <Image
              src={CryoniqLogo}
              alt="Cryoniq Logo"
              height={120}
              width={160}
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <nav className="flex gap-4 text-white">
              <a href="#home" className="text-white">
                Home
              </a>
              <a href="#about" className="text-white">
                Franchise
              </a>
              <a href="#services" className="text-white">
                Services
              </a>
            </nav>
            <button className="text-white border px-4 py-2 rounded-xl text-xs">
              Kontakt
            </button>
          </div>
        </div>

        <div className="items-center w-full" ref={ref}></div>

        <div className="container mx-auto flex flex-col sm:flex-row content-center w-full pb-16 bg-black border border-solid border-white/40 rounded-2xl h-auto">
          <div className="w-full p-40">
            <h2 className="text-center text-4xl sm:text-6xl pb-16 text-white/40">
              CRYO XC
            </h2>
          </div>
        </div>


        <div className="container mx-auto flex flex-col sm:flex-row content-center w-full pb-16 bg-black border border-solid border-white/40 rounded-2xl h-auto">
          <div className="w-full p-40">
            <h2 className="text-center text-4xl sm:text-6xl pb-16 text-white/40">
              CRYO LC
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
