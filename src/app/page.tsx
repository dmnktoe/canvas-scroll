"use client";

import CanvasScrollClip from "canvas-scroll-clip";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    if (ref.current) {
      new CanvasScrollClip(ref.current, {
        framePath: "https://abc.robinroecker.de/Main/MainAnim-0001.jpg",
        frameCount: 390,
        scrollArea: 4000,
      });
    }
  }, []);

  useEffect(() => {
    if (ref2.current) {
      new CanvasScrollClip(ref2.current, {
        framePath: "https://abc.robinroecker.de/NewClip/newclip-0001.jpg",
        frameCount: 360,
        scrollArea: 2000,
      });
    }
  }, []);

  useEffect(() => {
    if (ref3.current) {
      new CanvasScrollClip(ref3.current, {
        framePath: "https://abc.robinroecker.de/SmokeBase/SmokeBase-00001.jpg",
        frameCount: 100,
        scrollArea: 2000,
      });
    }
  }, []);

  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)] antialiased bg-black">
      <main className="flex flex-col gap-2 items-center sm:items-start text-center">
        <div className="flex justify-between items-center w-full p-4 bg-opacity-50 fixed top-0 left-0 right-0 z-50 align-middle">
          <div className="flex items-center">
            <img
              src="https://www.healform.de/img/hf_logo.png"
              alt="Healform Logo"
              height={120}
              width={120}
            />
          </div>
          <div className="flex gap-4 justify-between">
            <nav className="flex gap-4 text-white">
              <a href="#home" className="text-white">
                Home
              </a>
              <a href="#about" className="text-white">
                Praxis Kassel
              </a>
              <a href="#services" className="text-white">
                Praxis Baunatal
              </a>
            </nav>
            <button className="text-white border px-4 py-2 rounded-xl text-xs">
              Termin vereinbaren
            </button>
            <button className="text-white border px-4 py-2 rounded-xl text-xs">
              Jobs
            </button>
          </div>
        </div>

        <div className="items-center w-full" ref={ref}></div>

        <div
          className="container mx-auto flex flex-col sm:flex-row content-center w-full pb-16 bg-violet-300 rounded-xl h-auto bg-[url('https://abc.robinroecker.de/Main/MainAnim-0222.jpg')] bg-cover bg-fixed bg-center-center"
          id="home"
        >
          <div className="w-full p-40">
            <h2 className="text-center text-4xl text-white sm:text-6xl pb-16">
              HEALFORM® - Cryocenter
            </h2>
            <h3 className="text-center text-base text-white sm:text-xl">
              Die erste Cryosauna in Kassel und Baunatal gilt als eine moderne
              Ganzkörperkälteanwendung für Gesundheit*, Fitness*,
              Leistungsfähigkeit* und Schönheit*.
            </h3>
            <div className="flex justify-center gap-4 mt-12">
              <button className="text-white border border-white px-4 py-2 rounded-xl text-xs bg-transparent">
                Email
              </button>
              <button className="text-white border border-white px-4 py-2 rounded-xl text-xs bg-transparent">
                Termin vereinbaren
              </button>
              <button className="text-white border border-white px-4 py-2 rounded-xl text-xs bg-transparent">
                0561 73 64 283
              </button>
              <button className="text-white border border-white px-4 py-2 rounded-xl text-xs bg-transparent">
                Social Media
              </button>
            </div>
          </div>
        </div>

        <div className="items-center w-full pb-32" ref={ref2}></div>

        <div className="container mx-auto flex flex-col sm:flex-row content-center w-full pb-16 bg-orange-300 rounded-lg h-auto">
          <div className="w-full p-40">
            <h2 className="text-center text-4xl text-white sm:text-6xl pb-16">
              Gesundheit & Schönheit
            </h2>

            <h3 className="text-center text-base text-white sm:text-xl">
              HEALFORM® - Cryocenter bietet Ihnen ein ganzheitliches Konzept für
              Gesundheit und Schönheit.
            </h3>
            <h3 className="text-center text-base text-white sm:text-xl">
              Lebensqualität, Wohlbefinden und Vitalität möglich sind, wenn
              Körper, Geist und Seele im Einklang sind.
            </h3>
          </div>
        </div>
        <div className="items-center w-full p-32" ref={ref3}></div>

        <div className="container mx-auto flex flex-col sm:flex-row content-center w-full pb-16 bg-green-100 rounded-2xl h-auto">
          <div className="w-full p-40">
            <h2 className="text-center text-4xl sm:text-6xl pb-16 text-green-400">
              Leistungssportler
            </h2>

            <div className="sm:ml-8 mt-8 sm:mt-0 text-green-400 text-center border border-green-200 rounded-xl p-4">
              <p className="text-base sm:text-xl">
                Unsere Cryosauna bietet zahlreiche Vorteile für
                Leistungssportler:
              </p>
              <ul className="list-none mt-4 ">
                <li>Verbesserte Regeneration</li>
                <li>Schmerzlinderung</li>
                <li>Reduzierung von Entzündungen</li>
                <li>Steigerung der Leistungsfähigkeit</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
