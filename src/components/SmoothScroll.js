'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis with even smoother and slower scrolling
    lenis.current = new Lenis({
      duration: 2.5, // Even slower scrolling (increased from 1.8)
      easing: (t) => {
        // Ultra-smooth ease-out curve
        return t === 1 ? 1 : 1 - Math.pow(2, -12 * t);
      },
      lerp: 0.06, // Much smoother interpolation (reduced from 0.1)
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.2, // Even more controlled touch scrolling
      infinite: false,
      direction: 'vertical',
      gestureDirection: 'vertical',
      wheelMultiplier: 0.8, // Reduce wheel scroll sensitivity
      normalizeWheel: true, // Normalize scroll across different devices
    });

    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleReducedMotion = (e) => {
      if (e.matches) {
        lenis.current.stop();
      } else {
        lenis.current.start();
      }
    };

    // Check initial preference
    if (mediaQuery.matches) {
      lenis.current.stop();
    }

    // Listen for changes in preference
    mediaQuery.addEventListener('change', handleReducedMotion);

    // Cleanup
    return () => {
      if (lenis.current) {
        lenis.current.destroy();
      }
      mediaQuery.removeEventListener('change', handleReducedMotion);
    };
  }, []);

  return children;
}