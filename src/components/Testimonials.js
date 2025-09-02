'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Testimonials() {
  const industryTextRef = useRef(null);
  const approvedTextRef = useRef(null);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Create animation for "INDUSTRY" text coming from left
    gsap.fromTo(industryTextRef.current, 
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: industryTextRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1
        }
      }
    );
    
    // Create animation for "APPROVED" text coming from right
    gsap.fromTo(approvedTextRef.current,
      {
        x: 200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: approvedTextRef.current,
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

  const testimonials = [
    {
      id: 1,
      name: "Rashid",
      title: "CEO",
      company: "NexDef International",
      avatar: "/testimonials/nexdef.webp",
      testimonial: "Motion Studio transformed our complex defense content into a crisp, authoritative website that balances technical depth with modern aesthetics. They understood the sensitivity of our work, structured our publications for easy discovery, and delivered a secure, professional experience on schedule. It was a pleasure collaborating with a team that truly owns the project."
    },
    {
      id: 2,
      name: "Abu Bakar Badar",
      title: "Founder",
      company: "Neuroticure",
      avatar: "/testimonials/neuroticure.webp",
      testimonial: "Motion Studio created an appealing, feel-good design that brings Neuroticure's mission to life. The site highlights our AI-driven services with intuitive navigation and friendly visuals that make information easy to find and engage with on any device."
    },
    {
      id: 3,
      name: "Simon Bennett",
      title: "Director",
      company: "Clarygen",
      avatar: "/testimonials/clarygen.webp",
      testimonial: "Motion Studio delivered a conversion-focused website for Clarygen and matched it with exceptional communication — they responded to every request, implemented our changes quickly, and continuously improved the site to meet our exact requirements. The collaboration was efficient, transparent, and results-driven."
    }
  ];

  return (
    <section className="testimonials bg-gray-100 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-16 gap-8">
          <div className="flex-1">
            <h2 className="text-black text-7xl md:text-8xl font-anton leading-none">
              <span ref={industryTextRef} className="block">INDUSTRY</span>
              <span ref={approvedTextRef} className="block">APPROVED</span>
            </h2>
          </div>
          <div className="w-full lg:w-auto lg:max-w-md text-right">
            <p className="text-black font-manrope text-sm font-light uppercase tracking-wide leading-relaxed">
              HEAR FROM CLIENTS AND OTHER<br />
              PROFESSIONALS ON WHAT YOU CAN EXPECT<br />
              WHEN WORKING WITH ME
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-black mb-16"></div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex-grow">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100 mb-6 mx-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 font-manrope text-base leading-relaxed mb-6 text-center">
                  {testimonial.testimonial}
                </p>
              </div>

              {/* Author Info - This will always be at the bottom */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <h4 className="text-black font-manrope font-semibold text-lg mb-1 text-center">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 font-manrope text-sm text-center">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}