import Image from 'next/image';

const logos = [
  { id: 1, src: '/img/Users/home-1-icon8.svg',  alt: 'Logo 1' },
  { id: 2, src: '/img/Users/home-1-icon9.svg',  alt: 'Logo 2' },
  { id: 3, src: '/img/Users/home-1-icon10.svg', alt: 'Logo 3' },
  { id: 4, src: '/img/Users/home-1-icon11.svg', alt: 'Logo 4' },
  { id: 5, src: '/img/Users/home-1-icon12.svg', alt: 'Logo 5' },
  { id: 6, src: '/img/Users/home-1-icon13.svg', alt: 'Logo 6' },
  { id: 7, src: '/img/Users/home-1-icon14.svg', alt: 'Logo 7' },
];

const Users = () => {
  const topRow = logos.slice(0, 4);
  const bottomRow = logos.slice(4, 7);

  return (
    <section className=" box-border mt-[100px] " style={{ fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif" }}>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[12px] font-semibold tracking-[0.05em] text-[#111] uppercase">
          HAPPY USERS
        </span>
        <span className="text-[11px] font-normal tracking-[0.04em] text-[#111]">
          ©2025 CASE-THEMES™ STUDIO
        </span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl overflow-hidden">

        {/* Top row — 4 equal columns */}
        <div className="grid grid-cols-4">
          {topRow.map((logo, i) => (
            <div key={logo.id} className="flex items-center justify-center px-6 py-16" style={{ borderRight: i < topRow.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
              {logo.src && (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={48}
                  className="object-contain max-h-12 w-auto h-auto"
                />
              )}
            </div>
          ))}
        </div>

        {/* Horizontal divider */}
        <div className="h-px bg-[#f0f0f0] mx-8" />

        {/* Bottom row — 4 equal columns (3 logos + CTA) */}
        <div className="grid grid-cols-4">
          {bottomRow.map((logo, i) => (
            <div key={logo.id} className="flex items-center justify-center px-6 py-16" style={{ borderRight: '1px solid #f0f0f0' }}>
              {logo.src && (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={48}
                  className="object-contain max-h-12 w-auto h-auto"
                />
              )}
            </div>
          ))}

          {/* CTA cell — no right border */}
          <div className="flex flex-col items-center justify-center gap-1.5 px-6 py-16">
            <p className="text-[11px] font-normal tracking-[0.08em] text-[#aaa] uppercase m-0">
              NEXT CAN BE YOU.
            </p>
            <button className="bg-transparent border-none cursor-pointer text-[12px] font-bold tracking-[0.1em] text-[#111] uppercase p-0 hover:underline hover:opacity-60 transition-opacity duration-200" style={{ fontFamily: 'inherit' }}>
              LET'S TALK
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Users;