"use client";

import CanvasScrollClip from "canvas-scroll-clip";
import React, {useEffect, useRef} from "react";

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      new CanvasScrollClip(ref.current, {
        framePath: "https://www.healform.de/clip4/my-film-000001.jpg",
        frameCount: 360,
        scrollArea: 2000,
      });
    }
  }, []);

  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-2 items-center sm:items-start text-center">
        <h2 className="text-center text-4xl sm:text-6xl py-16 w-full">
          HEALFORM — die coole Therapie.
        </h2>
        <div className="items-center w-full" ref={ref}></div>
        <h2 className="text-center text-4xl font-bold text-white sm:text-6xl py-16 w-full">
          HEALFORM
        </h2>
      </main>
    </div>
  );
}
