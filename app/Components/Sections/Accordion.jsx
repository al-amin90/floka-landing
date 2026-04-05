"use client";
import Image from "next/image";
import React, { useState } from "react";

const accordionData = [
  {
    title: "User Interface & Experience Design",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions that captivate audiences and drive real engagement.",
    tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
    image: "/img/Common/Stear.webp",
  },
  {
    title: "Web Development & Engineering",
    desc: "We architect robust, scalable web applications using modern frameworks and cutting-edge technologies tailored to your business needs.",
    tags: ["REACT", "NEXT.JS", "NODE", "API"],
    image: "/img/Common/Holetwo.webp",
  },
  {
    title: "Motion & Creative Direction",
    desc: "Breathing life into static ideas through motion design, interactive storytelling, and cohesive visual narratives across every platform.",
    tags: ["ANIMATION", "3D", "VIDEO", "DESIGN"],
    image: "/img/Common/Sprint.webp",
  },
  {
    title: "Strategy & Digital Consulting",
    desc: "Aligning technology with vision — we guide teams through digital transformation, product roadmaps, and go-to-market strategies.",
    tags: ["RESEARCH", "ROADMAP", "GROWTH", "SEO"],
    image: "/img/Common/Cloth.webp",
  },
];

const reviews = [
  { quote: "Delivered beyond our expectations.", image: "/img/People/Girl.jpg" },
  { quote: "Clean, fast, and beautifully crafted.", image: "/img/People/Girl.jpg" },
  { quote: "Best agency we've ever worked with.", image: "/img/People/Girl.jpg" },
  { quote: "They nailed our brand perfectly.", image: "/img/People/Girl.jpg" },
  { quote: "Incredible attention to detail.", image: "/img/People/Girl.jpg" },
  { quote: "Shipped on time, zero compromises.", image: "/img/People/Girl.jpg" },
];

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-t border-[#66666671] last:border-b">
      <div
        className="flex items-center gap-x-[160px] py-[20px] cursor-pointer select-none"
        onClick={onToggle}
      >
        <div>
          <p
            className="text-[24px] text-white py-[4px] px-[14px] border border-[#666] w-fit rounded-full transition-transform duration-400"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </p>
        </div>
        <div className="text-white text-xl">{item.title}</div>
      </div>

      <div
        className="grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden min-h-0">
          <div
            className="flex items-start justify-between pb-[40px] gap-[40px] transition-all duration-400 ease-in-out"
            style={{
              paddingLeft: "calc(44px + 160px)",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-12px)",
              transitionDelay: isOpen ? "0.1s" : "0s",
            }}
          >
            <div>
              <p className="text-[#999999dc] mt-[43px] mb-[40px] leading-relaxed">
                {item.desc}
              </p>
              <ul className="grid grid-cols-2 w-fit gap-[12px]">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-white bg-[#ffffff14] px-[16px] w-fit rounded-full text-sm py-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={250}
                className="object-cover object-top rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Duplicate reviews for seamless infinite loop
  const loopedReviews = [...reviews, ...reviews];

  return (
    <div className="bg-black rounded-[12px] p-10 mt-[40px]">
      <div>
        <p className="text-white text-[120px] text-center leading-none">
          Company{" "}
          <span className="text-[#4d4d4d]">
            <br /> expertise
          </span>
        </p>
      </div>
      <div className="mt-[80px]">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      <div className="ml-[200px] flex items-center gap-x-3 mt-[40px]">
        <div className="text-black px-[15px] py-2 rounded-full bg-white text-base">
          +
        </div>
        <p className="text-white text-sm ml-2">HIRE US TODAY</p>
      </div>

      {/* Infinite running carousel */}
      <div className="mt-[100px] overflow-hidden">
        <style>{`
          @keyframes scroll-left {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .carousel-track {
            display: flex;
            width: max-content;
            animation: scroll-left 18s linear infinite;
          }
        `}</style>
        <div className="carousel-track pb-[70px]">
          {loopedReviews.map((review, i) => (
            <div key={i} className="flex items-center gap-x-4 mx-[40px] flex-shrink-0">
              <Image
                src={review.image}
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-white text-lg font-medium whitespace-nowrap">
                "{review.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;