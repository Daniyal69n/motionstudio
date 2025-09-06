'use client';

import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <section className="hero relative w-full h-screen bg-[#F3F4F6] overflow-hidden">
      {/* Red Box at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#EFEEEC] z-999999999999"></div>
      
      {/* Mobile Layout - Only visible on small screens */}
      <div className="md:hidden absolute inset-0 px-8 z-10">
        {/* Mobile Title - Centered and bigger */}
        <div className="flex items-center justify-start h-full">
          <h1 className="font-anton text-8xl sm:text-8xl font-black leading-none uppercase tracking-tight text-black">
            <span className="block">MOTION</span>
            <span className="block">STUDIO</span>
          </h1>
        </div>
        
        {/* Mobile Description - At bottom */}
        <div className="absolute bottom-32 left-8 right-8">
          <p className="text-gray-900 font-manrope text-lg font-light max-w-2xl">
            At Motion Studio, we craft visually stunning and highly engaging websites that blend creativity with modern technology. Our focus is on delivering smooth animations, clean design, and aesthetic user experiences that help brands stand out.
          </p>
        </div>
      </div>
      
      {/* Desktop Layout - UnicornStudio Background visible on md and up */}
      <div className="hidden md:block" data-us-project="GuQWVZGCks9u2ICuQTld" style={{width: '100vw', height: '100vh'}}></div>
      
      {/* Desktop Content - Only visible on md and up */}
      <div className="hidden md:flex absolute inset-0 flex-col justify-end items-start px-8 lg:px-50 z-10 pb-32">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-gray-900 font-manrope max-w-2xl text-lg font-light">
            At Motion Studio, we craft visually stunning and highly engaging websites that blend creativity with modern technology. Our focus is on delivering smooth animations, clean design, and aesthetic user experiences that help brands stand out. Whether it's a portfolio, business site, or a digital presence, we bring ideas to life with elegance and impact.
          </p>
        </div>
      </div>
    </section>
  );
}