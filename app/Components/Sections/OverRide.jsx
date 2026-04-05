"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const OverRide = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const currentY = useRef(0);
  const targetY = useRef(0);
  const rafId = useRef(null);

 useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const calculate = () => {
      const container = containerRef.current;
      const image = imageRef.current;
      if (!container || !image) return 0;

      const containerRect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const containerHeight = containerRect.height;
      const imageHeight = image.offsetHeight;
      const maxOffset = Math.max(0, containerHeight - imageHeight);

      // Start: when container top enters viewport top
      // End: when container bottom reaches viewport bottom
      const start = containerRect.top;        // positive = not yet entered
      const end = containerRect.bottom - viewportHeight; // negative = bottom passed viewport

      // progress 0 when top is at viewport top, 1 when bottom is at viewport bottom
      const totalRange = containerHeight;
      const scrolled = -start;
      const progress = Math.max(0, Math.min(1, scrolled / totalRange));

      return progress * maxOffset;
    };

    const tick = () => {
      targetY.current = calculate();
      currentY.current = lerp(currentY.current, targetY.current, 0.08);

      if (Math.abs(currentY.current - targetY.current) < 0.1) {
        currentY.current = targetY.current;
      }

      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${currentY.current}px)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex items-start gap-x-6 w-full mt-[35px]">
      {/* Left: Parallax image */}
      <div className="w-[40%] relative">
        <div
          ref={imageRef}
          style={{ willChange: "transform" }}
        >
          <Image
            src={"/img/people/Move.webp"}
            alt="OverRide"
            width={0}
            height={0}
            className="object-cover w-full h-auto object-top rounded-[12px]"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-[60%] flex flex-col gap-y-6">
        <div>
          <p className="text-[#0a0a0a] text-sm tracking-widest uppercase">Fun Facts</p>
          <p className="text-[#0a0a0a] text-[48px] leading-tight mt-5">
            Consistently delivering <br />
            impactful results through a <br />
            perfect blend of design and <br />
            functionality.
          </p>
        </div>

        <div className="flex gap-4 items-stretch flex-1">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-white rounded-[16px] border border-gray-100 shadow-sm p-5 flex items-center justify-between">
              <p className="text-[#0a0a0a] text-sm leading-snug">
                Successful projects <br /> completed
              </p>
              <p className="text-[#0a0a0a] text-[36px] font-bold leading-none">
                2k<span className="text-orange-400">+</span>
              </p>
            </div>

            <div className="bg-[#0a0a0a] rounded-[16px] overflow-hidden flex flex-col flex-1">
              <div className="relative flex-1 min-h-[160px]">
                <div
                  className="w-[85px] h-[110px] rounded-[12px] overflow-hidden shadow-lg absolute"
                  style={{ transform: "rotate(-12deg)", left: "12px", top: "50%", marginTop: "-55px", zIndex: 1 }}
                >
                  <Image src="/img/people/Move.webp" alt="work sample 1" width={85} height={110} className="object-cover w-full h-full" />
                </div>
                <div
                  className="w-[85px] h-[110px] rounded-[12px] overflow-hidden shadow-lg absolute"
                  style={{ transform: "rotate(0deg)", left: "50%", marginLeft: "-42px", top: "50%", marginTop: "-55px", zIndex: 3 }}
                >
                  <Image src="/img/people/Move.webp" alt="work sample 2" width={85} height={110} className="object-cover w-full h-full" />
                </div>
                <div
                  className="w-[85px] h-[110px] rounded-[12px] overflow-hidden shadow-lg absolute"
                  style={{ transform: "rotate(12deg)", right: "12px", top: "50%", marginTop: "-55px", zIndex: 1 }}
                >
                  <Image src="/img/people/Move.webp" alt="work sample 3" width={85} height={110} className="object-cover w-full h-full" />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[70px] pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
                />
              </div>
              <div className="px-5 pb-5 pt-2">
                <p className="text-white text-base font-semibold leading-snug">
                  More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-white rounded-[16px] border border-gray-100 shadow-sm p-[34px] flex flex-col gap-y-[20px]">
              <div className="flex gap-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#0a0a0a] text-[100px] font-bold leading-none">4.9/5</p>
              <hr className="border-gray-200" />
              <p className="text-gray-500 text-sm leading-snug py-[30px]">
                We offer end-to-end creative <br />solutions that make brands <br /> unforgettable.
              </p>
              <div className="flex items-center gap-x-3 mt-1">
                <div className="w-9 h-9 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                  <span className="text-white text-lg leading-none">+</span>
                </div>
                <p className="text-[#0a0a0a] text-sm font-semibold tracking-wider uppercase">Hire Us Now</p>
              </div>
            </div>

            <div className="relative bg-gray-800 rounded-[16px] overflow-hidden flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-80" />
              <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <p className="text-white text-base font-semibold leading-snug">
                    Worldwide base <br /> around the world
                  </p>
                  <p className="text-white text-[40px] font-bold leading-none">5<span>+</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverRide;