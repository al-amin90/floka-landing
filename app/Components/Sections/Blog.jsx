import React from 'react';
import Image from 'next/image';

const TagDate = ({ tag, date, dark = false }) => (
  <div className={`flex items-center gap-3 text-xs font-medium tracking-widest uppercase ${dark ? 'text-white/70' : 'text-neutral-400'}`}>
    <span>{tag}</span>
    <span className={`w-1 h-1 rounded-full ${dark ? 'bg-white/40' : 'bg-neutral-400'}`} />
    <span>{date}</span>
  </div>
);

const Blog = () => {
  return (
    <section className="bg-[#f2f2f0] min-h-screen">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a0a0a] mb-4">
          Insights
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
          Company blog &amp; updates
        </h2>
      </div>

      {/* 3-column grid — all columns same height, children stretch to fill */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 items-stretch" style={{ gridAutoRows: '600px' }}>

        {/* ── Column 1: dark text card (top, fixed height) + image (bottom, grows) ── */}
        <div className="flex flex-col gap-4 h-full">
          <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col gap-3 shrink-0">
            <TagDate tag="WEB3" date="NOV 07, 2025" dark />
            <p className="text-white text-lg font-semibold leading-snug">
              Seamless user interfaces, crafted with intent.
            </p>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden flex-1">
            <Image
              src="/img/people/Blog1.webp"
              alt="Team discussion"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ── Column 2: image (top, grows) + white text card (bottom, fixed height) ── */}
        <div className="flex flex-col gap-4 h-full">
          <div className="relative w-full rounded-2xl overflow-hidden flex-1">
            <Image
              src="/img/people/Blog2.webp"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white rounded-2xl p-6 flex flex-col gap-2 shrink-0">
            <TagDate tag="WEB3" date="NOV 07, 2025" />
            <p className="text-neutral-900 text-lg font-semibold leading-snug">
              Creative web platforms, designed for growth.
            </p>
          </div>
        </div>

        {/* ── Column 3: dark text card (top, fixed height) + image (bottom, grows) ── */}
        <div className="flex flex-col gap-4 h-full">
          <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col gap-3 shrink-0">
            <TagDate tag="WEB3" date="NOV 07, 2025" dark />
            <p className="text-white text-lg font-semibold leading-snug">
              Immersive virtual journeys, built with precision
            </p>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden flex-1">
            <Image
              src="/img/people/Blog3.webp"
              alt="Developer working"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;