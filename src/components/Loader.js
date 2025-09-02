'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function RealProgressLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const percentageRef = useRef(null);
  const [percentage, setPercentage] = useState(0);
  const [loadedResources, setLoadedResources] = useState(0);
  const [totalResources, setTotalResources] = useState(0);

  useEffect(() => {
    const loader = loaderRef.current;
    let resourcesLoaded = 0;
    let totalResourceCount = 0;

    // Function to update progress
    const updateProgress = (loaded, total) => {
      const progress = total > 0 ? Math.round((loaded / total) * 100) : 0;
      setPercentage(progress);
      
      // Complete when 100% loaded
      if (progress >= 100) {
        setTimeout(() => {
          gsap.to(loader, {
            y: "-100%",
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }, 500); // Small delay to show 100%
      }
    };

    // Track different types of resources
    const trackResources = () => {
      // Get all images, scripts, stylesheets, and other resources
      const images = document.querySelectorAll('img');
      const scripts = document.querySelectorAll('script[src]');
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      const videos = document.querySelectorAll('video');
      
      totalResourceCount = images.length + scripts.length + stylesheets.length + videos.length;
      setTotalResources(totalResourceCount);

      // If no resources to track, complete immediately
      if (totalResourceCount === 0) {
        updateProgress(100, 100);
        return;
      }

      // Track image loading
      images.forEach(img => {
        if (img.complete) {
          resourcesLoaded++;
        } else {
          img.onload = img.onerror = () => {
            resourcesLoaded++;
            setLoadedResources(resourcesLoaded);
            updateProgress(resourcesLoaded, totalResourceCount);
          };
        }
      });

      // Track script loading
      scripts.forEach(script => {
        script.onload = script.onerror = () => {
          resourcesLoaded++;
          setLoadedResources(resourcesLoaded);
          updateProgress(resourcesLoaded, totalResourceCount);
        };
      });

      // Track stylesheet loading
      stylesheets.forEach(link => {
        link.onload = link.onerror = () => {
          resourcesLoaded++;
          setLoadedResources(resourcesLoaded);
          updateProgress(resourcesLoaded, totalResourceCount);
        };
      });

      // Track video loading
      videos.forEach(video => {
        if (video.readyState >= 2) { // HAVE_CURRENT_DATA or higher
          resourcesLoaded++;
        } else {
          video.onloadeddata = video.onerror = () => {
            resourcesLoaded++;
            setLoadedResources(resourcesLoaded);
            updateProgress(resourcesLoaded, totalResourceCount);
          };
        }
      });

      // Initial progress update
      updateProgress(resourcesLoaded, totalResourceCount);
    };

    // Wait for DOM to be ready, then track resources
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', trackResources);
    } else {
      trackResources();
    }

    // Fallback: Complete after maximum 10 seconds
    const fallbackTimer = setTimeout(() => {
      updateProgress(100, 100);
    }, 10000);

    // Animate percentage text
    gsap.fromTo(percentageRef.current, 
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.5,
        ease: "back.out(1.7)"
      }
    );

    return () => {
      clearTimeout(fallbackTimer);
      document.removeEventListener('DOMContentLoaded', trackResources);
    };

  }, [onComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: '#EFEEEC' }}
    >
      {/* Main Content - Center */}
      <div className="text-center">
        <h1 className="font-anton text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black mb-4">
          MOTION STUDIO
        </h1>
        <div className="w-32 h-0.5 bg-black mx-auto"></div>
        
        {/* Optional: Show resource count */}
        <p className="font-manrope text-sm text-gray-600 mt-4">
          Loading {loadedResources} of {totalResources} resources
        </p>
      </div>

      {/* Percentage Counter - Bottom Right */}
      <div 
        ref={percentageRef}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
      >
        <span className="font-manrope text-3xl md:text-4xl font-light text-black">
          {percentage}%
        </span>
      </div>

      {/* Progress Bar - Bottom */}
      <div className="absolute bottom-4 left-8 right-8 md:left-12 md:right-12">
        <div className="w-full h-0.5 bg-gray-400">
          <div 
            className="h-full bg-black transition-all duration-300 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}