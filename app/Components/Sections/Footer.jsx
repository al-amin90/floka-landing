import React from "react";
import Image from "next/image";

const Footer = () => {
  const navLinks = ["About Us", "Journal", "Faq", "Get In Touch", "Careers"];

  const socials = [
    { label: "f", aria: "Facebook" },
    { label: "X", aria: "Twitter" },
    { label: "in", aria: "LinkedIn" },
    { label: "Be", aria: "Behance" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white w-full overflow-hidden">
      <div className="relative flex flex-col items-center justify-center py-24 px-6">
        <h2 className="text-[10vw] font-bold leading-none tracking-tighter text-[#888888] select-none">
          Let&apos;s
        </h2>
        <h2 className="text-[13vw] font-bold leading-none tracking-tighter text-[#2e2e2e] select-none">
          talk now
        </h2>

        <div className="relative mt-10 w-20 h-20 flex items-center justify-center cursor-pointer group">
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: "8s" }}
            viewBox="0 0 80 80"
          >
            <defs>
              <path
                id="footerCircle"
                d="M 40,40 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
              />
            </defs>
            <text
              fill="white"
              style={{ fontSize: "7.5px", letterSpacing: "3.2px" }}
            >
              <textPath href="#footerCircle">
                GET IN TOUCH · GET IN TOUCH ·{" "}
              </textPath>
            </text>
          </svg>
          <span className="text-white text-lg z-10 group-hover:translate-x-1 transition-transform duration-200">
            &#8594;
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10 md:px-16 pt-16 pb-10 border-t border-white/10">
        <div className="relative">
          <div className="relative w-[280px] h-[280px] rounded-xl overflow-hidden">
            <Image
              src="/footer-photo.jpg"
              alt="Floka team"
              fill
              className="object-cover"
            />
            <div className="absolute top-1/2 left-6 -translate-y-1/2 bg-white p-2 rounded">
              <span className="text-black text-3xl font-black leading-none">
                F
              </span>
            </div>
          </div>
          <p
            className="mt-4 text-[72px] font-bold leading-none tracking-tighter select-none pointer-events-none"
            style={{ color: "#1a1a1a" }}
          >
            Floka
          </p>
        </div>

        <nav className="flex flex-col gap-5 pt-1">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[28px] font-medium text-white hover:text-gray-300 transition-colors duration-200 leading-tight"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="pt-1 flex flex-col gap-6">
          <p className="text-[#888888] text-sm leading-relaxed max-w-xs">
            At <strong className="text-white">Floka</strong>, we believe
            furniture should be more than just functional it should tell your
            story. With a focus on timeless design, sustainable materials, and
            expert craftsmanship, we create pieces that feel personal.
          </p>

          <div className="flex flex-col gap-1 text-[#aaaaaa] text-sm">
            <span>info@floka-design.com</span>
            <span>+123 (456 789 00)</span>
            <span>12/A, Booston Tower, NYC</span>
          </div>

          <div className="flex gap-3">
            {socials.map(({ label, aria }) => (
              <button
                key={aria}
                aria-label={aria}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-content text-[#aaaaaa] text-sm hover:border-white/50 hover:text-white transition-all duration-200"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
