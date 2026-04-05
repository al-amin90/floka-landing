"use client";
import React, { useEffect, useRef } from "react";

const CarouselText = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const speed = 2.2; // Increased speed for faster animation

  // The main text
  const mainText =
    "See how our team combines creativity, technology, and strategy";

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;

    const animate = () => {
      if (!scrollContainer) return;

      // Increment scroll position
      scrollPos += speed;

      // Get the actual width of the content (first child)
      const contentWidth = scrollContainer.children[0]?.offsetWidth || 0;

      // Reset position when we've scrolled past half of the content
      // This creates a seamless loop effect
      if (scrollPos >= contentWidth / 2) {
        scrollPos -= contentWidth / 2;
      }

      scrollContainer.style.transform = `translateX(-${scrollPos}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-8 bg-transparent">
      {/* Stronger gradient fade left - more #f5f5f5, less black text visible */}
      <div
        className="absolute left-0 top-0 bottom-0 w-48 md:w-64 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #f5f5f5 0%, #f5f5f5 20%, rgba(245,245,245,0.95) 40%, rgba(245,245,245,0.7) 60%, transparent 100%)",
        }}
      />

      {/* Stronger gradient fade right - more #f5f5f5, less black text visible */}
      <div
        className="absolute right-0 top-0 bottom-0 w-48 md:w-64 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, #f5f5f5 0%, #f5f5f5 20%, rgba(245,245,245,0.95) 40%, rgba(245,245,245,0.7) 60%, transparent 100%)",
        }}
      />

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div ref={scrollRef} className="flex whitespace-nowrap">
          {/* Render the text multiple times for smooth infinite scroll */}
          <div className="flex items-center">
            <span className="text-[100px]  whitespace-nowrap text-black font-funnel px-8">
              {mainText}
            </span>
            <span className="text-[100px]  whitespace-nowrap text-black font-funnel px-8">
              •
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[100px]  whitespace-nowrap text-black font-funnel px-8">
              {mainText}
            </span>
            <span className="text-[100px]  whitespace-nowrap text-black font-funnel px-8">
              •
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[100px]  whitespace-nowrap text-black font-funnel px-8">
              {mainText}
            </span>
            <span className="text-[100px]  whitespace-nowrap text-black font-funnel px-8">
              •
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[100px]  whitespace-nowrap text-black font-funnel px-8">
              {mainText}
            </span>
            <span className="text-[100px]  whitespace-nowrap text-black font-funnel px-8">
              •
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-black">portfolio</p>
      </div>
    </div>
  );
};

export default CarouselText;
