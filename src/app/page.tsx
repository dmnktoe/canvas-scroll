"use client";

import CanvasScrollClip from "canvas-scroll-clip";
import React, {useEffect, useRef} from "react";


export default function Home() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  


  useEffect(() => {
    if (ref.current) {
      new CanvasScrollClip(ref.current, {
        framePath: "http://abc.robinroecker.de/Main/MainAnim-0001.jpg",
        frameCount: 390,
        scrollArea: 6000,
      });
    }

  }, []);

  useEffect(() => {
    if (ref2.current) {
      new CanvasScrollClip(ref2.current, {
        framePath: "http://abc.robinroecker.de/NewClip/newclip-0001.jpg",
        frameCount: 360,
        scrollArea: 4000,
      });
    }

  }, []);

  useEffect(() => {
    if (ref3.current) {
      new CanvasScrollClip(ref3.current, {
        framePath: "http://abc.robinroecker.de/NewClip2/newclip2-00001.jpg",
        frameCount: 160,
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
          src="https://www.healform.de/img/hf_logo.png" alt="Healform Logo"
          height={120}
          width={120}
        />
        </div>
        <div className="flex gap-4 justify-between">
          <nav className="flex gap-4 text-white">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">Praxis Kassel</a>
          <a href="#services" className="text-white">Praxis Baunatal</a>
        </nav>
        <button className="text-white border px-4 py-2 rounded-xl text-xs">Termin vereinbaren</button>
        <button className="text-white border px-4 py-2 rounded-xl text-xs">Jobs</button>
        </div>
      </div>

        
      <div className="items-center w-full" ref={ref}></div>

        <div className="container mx-auto flex flex-col sm:flex-row content-center w-full py-16">
         
          <div className="w-full p-8">
            <h2 className="text-left text-4xl text-white sm:text-6xl pt-32 py-16 w-full">
              HEALFORM® - Cryocenter
            </h2>
            <h3 className="text-left text-xl text-white sm:text-2xl pb-32 w-full">
              Die erste Cryosauna in Kassel und Baunatal gilt als eine moderne Ganzkörperkälteanwendung
              für Gesundheit*, Fitness*, Leistungsfähigkeit* und Schönheit*.
            </h3>
          </div>
     
        </div>

        <div className="items-center w-full" ref={ref2}></div>

        <div className="container mx-auto flex flex-col sm:flex-row content-center w-full py-16 ">
          <div className="w-full">
            <h2 className="text-center text-2xl text-white sm:text-4xl py-16 w-full">
              More Features of Cryo Therapy
            </h2>
            <div className="flex justify-center gap-8 ">
              <div className="flex flex-col items-center text-black w-1/4 bg-white rounded-lg sm:w-1/4 p-8">
                <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <h3 className="text-xl pb-4">Better Sleep</h3>
                <p className="text-center text-base">Cryo therapy can improve sleep quality.</p>
              </div>
              <div className="flex flex-col items-center text-black w-1/4 bg-white rounded-lg sm:w-1/4 p-8">
                <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <h3 className="text-xl pb-4">Reduced Stress</h3>
                <p className="text-center text-base">Helps in reducing stress and anxiety.</p>
              </div>
              <div className="flex flex-col items-center text-black w-1/4 bg-white rounded-lg sm:w-1/4 p-8">
                <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <h3 className="text-xl pb-4">Skin Rejuvenation</h3>
                <p className="text-center text-base">Promotes healthier and younger-looking skin.</p>
              </div>
              <div className="flex flex-col items-center text-black w-1/4 bg-white rounded-lg sm:w-1/4 p-8">
                <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <h3 className="text-xl pb-4">Boosted Immunity</h3>
                <p className="text-center text-base">Strengthens the immune system.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center w-full" ref={ref3}></div>

      </main>
    </div>
  );
}
