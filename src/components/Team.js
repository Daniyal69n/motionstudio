'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Team() {
  const ourTextRef = useRef(null);
  const teamTextRef = useRef(null);
  
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
    
    // Create animation for "TEAM" text coming from right
    gsap.fromTo(teamTextRef.current,
      {
        x: 200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: teamTextRef.current,
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

  return (
    <section className="team-section" style={{ backgroundColor: '#EFEEEC' }}>
      <div className="w-full mx-auto px-8 lg:px-50 py-20">
        {/* Team Header */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-black text-8xl font-anton leading-none">
            <span ref={ourTextRef} className="block">OUR</span>
            <span ref={teamTextRef} className="block">TEAM</span>
          </h2>
          <div className="text-right max-w-md">
            <p className="text-black font-manrope text-sm font-light uppercase tracking-wide leading-relaxed">
              MEET THE CREATIVE MINDS BEHIND<br />
              MOTION STUDIO. WE'RE A PASSIONATE<br />
              TEAM DEDICATED TO BRINGING YOUR<br />
              VISION TO LIFE
            </p>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="group">
            <div className="w-full h-96 bg-gray-300 rounded-2xl mb-4 overflow-hidden">
              <img 
                src="/teams/daniyal.webp" 
                alt="daniyal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-manrope text-xl font-semibold mb-2" style={{ color: '#222725' }}>
              Daniyal Ahmed Gul
            </h4>
          </div>

          {/* Team Member 2 */}
          <div className="group">
            <div className="w-full h-96 bg-gray-300 rounded-2xl mb-4 overflow-hidden">
              <img 
                src="/teams/seemab.jpg" 
                alt="seemab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-manrope text-xl font-semibold mb-2" style={{ color: '#222725' }}>
              Seemab Anas
            </h4>
          </div>

          {/* Team Member 3 */}
          <div className="group">
            <div className="w-full h-96 bg-gray-300 rounded-2xl mb-4 overflow-hidden">
              <img 
                src="/teams/saif.jpeg" 
                alt="saif"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-manrope text-xl font-semibold mb-2" style={{ color: '#222725' }}>
              Saif
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}