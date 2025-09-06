'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function AllWorks() {
  const allTextRef = useRef(null);
  const worksTextRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Add scroll event listener for Back to Top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
    // Create animation for "ALL" text coming from left
    gsap.fromTo(allTextRef.current, 
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: allTextRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1
        }
      }
    );
    
    // Create animation for "WORKS" text coming from right
    gsap.fromTo(worksTextRef.current,
      {
        x: 200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: worksTextRef.current,
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
    },
    {
      id: 5,
      title: "Muslim Counsellor",
      subtitle: "Faith-Informed Therapy",
      image: "/our-works/mockup5.webp",
      category: "healthcare",
      link: "https://www.themuslimcounsellor.com/"
    },
    {
      id: 6,
      title: "SIBBS Holdings",
      subtitle: "Property Management",
      image: "/our-works/mockup6.webp",
      category: "real-estate",
      link: "https://sibbsholdings.com/"
    },
    {
      id: 7,
      title: "West Asia Watch",
      subtitle: "Digital Media Platform",
      image: "/our-works/mockup7.webp",
      category: "news",
      link: "https://westasiawatch.com/"
    },
    {
      id: 8,
      title: "Hope Springs",
      subtitle: "Healthcare Services",
      image: "/our-works/mockup8.webp",
      category: "healthcare",
      link: "https://hopespringshealthcare.co.uk/"
    },
    {
      id: 9,
      title: "Veritas Analytica",
      subtitle: "Data-Driven AI Solutions",
      image: "/our-works/mockup9.webp",
      category: "technology",
      link: "https://veritas-analytica.vercel.app/"
    }
  ];

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="all-works bg-black text-white min-h-screen py-20 px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Back to Top Button */}
        {showBackToTop && (
          <button 
            onClick={scrollToTop}
            className="fixed top-8 left-8 z-50 bg-white/10 backdrop-blur-md text-white rounded-full p-3 hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
            <span ref={allTextRef} className="block">ALL</span>
            <span ref={worksTextRef} className="block">WORKS</span>
          </h2>
          <div className="max-w-md">
            <p className="text-white text-sm font-light uppercase tracking-wide">
              EXPLORE OUR COMPLETE<br />
              PORTFOLIO OF PROJECTS<br />
              THAT SHOWCASE OUR<br />
              EXPERTISE AND CREATIVITY
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-white text-sm uppercase tracking-wider">
            ALL PROJECTS
          </p>
          <Link 
            href="/" 
            className="text-white border border-white/30 rounded-full px-6 py-2 text-sm hover:bg-white/10 transition-colors duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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

                {/* Visit Site Capsule - Hover Effect */}
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
                    {work.id >= 4 && (
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
