'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SelectedWorks() {
  const selectedTextRef = useRef(null);
  const workTextRef = useRef(null);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Create animation for "SELECTED" text coming from left
    gsap.fromTo(selectedTextRef.current, 
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: selectedTextRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1
        }
      }
    );
    
    // Create animation for "WORK" text coming from right
    gsap.fromTo(workTextRef.current,
      {
        x: 200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: workTextRef.current,
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

  const works = [
    {
      id: 1,
      title: "StudySure",
      subtitle: "Study Abroad Website",
      image: "/our-works/mockup1.webp",
      category: "education",
      link: "https://www.studysure.org/"
    },
    {
      id: 2,
      title: "NEXDEF",
      subtitle: "News Website",
      image: "/our-works/mockup2.webp",
      category: "news",
      link: "https://nex-def.com/"
    },
    {
      id: 3,
      title: "Neuroticure",
      subtitle: "AI Therapist Platform",
      image: "/our-works/mockup3.webp",
      category: "healthcare",
      link: "https://neuroticure.vercel.app/"
    },
    {
      id: 4,
      title: "Clarygen",
      subtitle: "IT & Financial Services",
      image: "/our-works/mockup4.webp",
      category: "business",
      link: "https://clarygen.com/"
    }
  ];

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="selected-works bg-black text-white min-h-screen py-20 mx-8 mb-8 rounded-3xl">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
            <span ref={selectedTextRef} className="block">SELECTED</span>
            <span ref={workTextRef} className="block">WORK</span>
          </h2>
          <div className="max-w-md">
            <p className="text-white text-sm font-light uppercase tracking-wide">
              IMPACTFUL SOLUTIONS THAT<br />
              STAND OUT,<br />
              CAPTURE ATTENTION,<br />
              AND DRIVE MEASURABLE SUCCESS
            </p>
          </div>
        </div>

        {/* Latest Work Label */}
        <div className="mb-8">
          <p className="text-white text-sm uppercase tracking-wider">
            LATEST WORK
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="work-card group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer"
              onClick={() => handleCardClick(work.link)}
            >
              {/* Image Container */}
              <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                {/* Card Image */}
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                
                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                {/* Visit Site Capsule - Hover Effect (positioned lower) */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-16 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                    <span className="text-white text-sm font-medium">
                      Visit Site
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Status Dots */}
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    {work.id === 4 && (
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">
                      {work.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {work.subtitle}
                    </p>
                  </div>
                </div>
                
                <button 
                  className="text-white text-sm uppercase tracking-wider hover:text-gray-300 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(work.link);
                  }}
                >
                  EXPLORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}