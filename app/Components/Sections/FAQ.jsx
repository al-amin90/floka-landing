"use client";
import Image from "next/image";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is artificial intelligence (AI)?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/img/people/FAQ1.webp",
  },
  {
    question: "How does machine learning differ from AI?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/img/people/FAQ1.webp",
  },
  {
    question: "Can AI replace human creativity and design?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/img/people/FAQ1.webp",
  },
  {
    question: "What industries benefit most from AI?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/img/people/FAQ1.webp",
  },
  {
    question: "Is AI safe and ethical to use in products?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/img/people/FAQ1.webp",
  },
];

const AccordionItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="w-full bg-white p-[20px] rounded-2xl mb-[16px] overflow-hidden">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggle}
      >
        <p className="text-black text-xl">{faq.question}</p>
        <div
          className="w-[30px] h-[30px] rounded-full bg-black flex items-center justify-center text-white text-xl flex-shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="flex justify-between mt-[30px]">
            <div className="w-[240px] h-[154px] flex-shrink-0">
              <Image
                src={faq.image}
                alt="FAQ Image"
                width={240}
                height={154}
                className="rounded-2xl w-[240px] h-[154px] object-cover"
              />
            </div>
            <div className="ml-6">
              <p className="text-[#666666]">{faq.answer}</p>
              <div className="mt-[50px]">
                <button className="flex items-center gap-3 group cursor-pointer">
                  <span className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold tracking-widest text-gray-900 group-hover:text-gray-600 transition-colors uppercase">
                    LET'S TALK
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1); // second item open by default (matches original)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <p className="text-black pb-3 border-b border-gray-300">
        FAQ AND GET ANSWERS
      </p>

      <div className="flex items-center justify-center mt-[50px] relative left-[50px]">
        <p className="text-[#0a0a0a] text-[48px] leading-tight">
          Have more questions? <br />
          We've answers.
        </p>
      </div>

      <div className="flex items-start justify-between w-full mt-[50px]">
        <div>
          <p className="text-[#666666]">
            Don't found anything yet. Feel free <br />
            to ask anything.{" "}
            <span className="text-[#000] underline cursor-pointer">
              Let's Talk
            </span>
          </p>
          <Image
            src={"/img/people/Face.png"}
            alt="FAQ Image"
            width={300}
            height={300}
            className="rounded-2xl w-[300px] h-[300px] mt-[40px]"
          />
        </div>

        <div className="w-[65%]">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;