"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MyExpertise() {
  const ourTextRef = useRef(null);
  const expertiseTextRef = useRef(null);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Create animation for "OUR" text coming from left
    gsap.fromTo(ourTextRef.current, 
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ourTextRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1
        }
      }
    );
    
    // Create animation for "EXPERTISE" text coming from right
    gsap.fromTo(expertiseTextRef.current,
      {
        x: 200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: expertiseTextRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1
        }
      }
    );
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const expertiseItems = [
    { id: "01", title: "Website Design & Development" },
    { id: "02", title: "UI/UX & Interactive Experiences" },
    { id: "03", title: "Brand Identity & Creative Direction" },
    { id: "04", title: "Motion & Web Animations" },
    { id: "05", title: "Landing Pages That Convert" },
    { id: "06", title: "Hosting, Deployment & Optimization" },
  ];

  return (
    <section className="py-20 px-8 lg:px-50 w-full" style={{ backgroundColor: '#EFEEEC' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <div className="flex-1">
            <h1 className="font-anton text-8xl md:text-8xl lg:text-9xl font-black leading-none uppercase tracking-tight" style={{ color: '#000' }}>
              <span ref={ourTextRef} className="block">OUR</span>
              <span ref={expertiseTextRef} className="block">EXPERTISE</span>
            </h1>
          </div>
          <div className="flex-1 max-w-md">
            <p className="font-manrope text-gray-600 text-sm leading-relaxed">
              CRAFTING MODERN, AESTHETIC, AND HIGH-PERFORMING
              <br />
              DIGITAL EXPERIENCES TO GROW YOUR BRAND
            </p>
          </div>
        </div>

        {/* Expertise List */}
        <div className="border-t border-gray-400">
          {/* Headers */}
          <div className="flex justify-between items-center py-4 border-b border-gray-300">
            <span className="font-manrope text-sm font-medium text-gray-700 uppercase tracking-wide">
              EXPERTISE
            </span>
            <span className="font-manrope text-sm font-medium text-gray-700 uppercase tracking-wide">
              FIELD
            </span>
          </div>

          {/* Expertise Items */}
          {expertiseItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-5 border-b border-gray-300 hover:bg-gray-50 transition-colors duration-200 group"
            >
              <div className="flex items-center space-x-8">
                <span className="font-manrope text-gray-500 text-sm w-8">
                  {item.id}
                </span>
                <h3 className="font-manrope text-gray-900 text-lg font-medium group-hover:text-black transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
              <div className="w-6 h-6 border border-gray-900 flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-200">
                <div className="w-2 h-2 bg-gray-900 group-hover:bg-white transition-colors duration-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}