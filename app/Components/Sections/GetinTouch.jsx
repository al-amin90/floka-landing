import React, { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$1000 - $5000",
    service: "CONSULTANCY",
    message: "",
  });
  const [errors, setErrors] = useState({ name: false, email: false });

  const handleSubmit = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
    };
    setErrors(newErrors);
  };

  return (
    <section
      className="relative rounded-2xl w-full min-h-[520px] flex items-center overflow-hidden"
      style={{
        background: `url('/bg-texture.jpg') center/cover no-repeat, #111`,
        backgroundBlendMode: "overlay",
        backgroundColor: "#0f0f0f",
      }}
    >
      {/* Dark grainy overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(10,10,10,0.72)",
          backgroundImage: `url("/img/common/MidBg.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "full",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-white">
          <p
            className="text-sm tracking-[0.22em] text-gray-400 mb-5 uppercase"
            
          >
            GET IN TOUCH
          </p>
          <p className="text-[48px] text-white whitespace-nowrap leading-tight">
            Tell us about your <br />
            project —whether it’s a <br />
            website, SEO, or <br />
            marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-12 mt-[73px]">
            {/* Talk to us */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm tracking-widest text-white uppercase">
                  TALK TO US
                </span>
              </div>
              <p className="text-lg text-[#999999] whitespace-nowrap">
                Work and general inquiries
              </p>
              <p className="text-lg text-[#999999]">+123 456 789 00</p>
            </div>

            {/* Post Address */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm tracking-widest text-white uppercase">
                  POST ADDRESS
                </span>
              </div>
              <p className="text-lg text-[#999999] whitespace-nowrap">
                541 Melville Ave, Palo Alto, CA
              </p>
              <p className="text-lg text-[#999999]">94301, United States</p>
            </div>
          </div>
        </div>

        {/* Right: Form Card */}
        <div
          className="w-[50%] h-[470px] bg-white rounded-2xl p-8 shadow-2xl flex-shrink-0"
          style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.45)" }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Have a project in mind?
          </h3>

          {/* Name + Email Row */}
          <div className="flex gap-6 mb-1">
            <div className="flex-1">
              <input
                type="text"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full  rounded-md p-[18px]! text-xs tracking-widest placeholder-gray-400 text-gray-800 outline-none focus:border-gray-400 transition-colors bg-[#f5f5f5]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  Please fill out this field.
                </p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder="BUSINESS EMAIL"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full  rounded-md  p-[18px]! text-xs tracking-widest placeholder-gray-400 text-gray-800 outline-none focus:border-gray-400 transition-colors bg-[#f5f5f5]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  Please fill out this field.
                </p>
              )}
            </div>
          </div>

          {/* Budget + Service Row */}
          <div className="flex gap-6 mt-4 mb-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-800 mb-1.5 tracking-wider">
                BUDGET
              </label>
              <div className="relative">
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full  bg-[#f5f5f5] rounded-md  p-[18px]! text-xs text-gray-700  outline-none focus:border-gray-400 appearance-none cursor-pointer"
                >
                  <option>$1000 - $5000</option>
                  <option>$5000 - $10000</option>
                  <option>$10000+</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-800 mb-1.5 tracking-wider">
                SERVICE
              </label>
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full bg-[#f5f5f5] rounded-md  p-[18px]! text-xs text-gray-700  outline-none focus:border-gray-400 appearance-none cursor-pointer"
                >
                  <option>CONSULTANCY</option>
                  <option>WEB DESIGN</option>
                  <option>SEO</option>
                  <option>MARKETING</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Textarea */}
          <textarea
            placeholder="MESSAGE"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={4}
            className="w-full  bg-[#f5f5f5] rounded-md px-3 py-2.5 text-xs text-gray-700 placeholder-[#aeaeae] bg-gray-50 outline-none focus:border-gray-400 transition-colors resize-y mb-5"
            style={{ minHeight: "140px" }}
          />

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="flex items-center gap-3 group cursor-pointer"
          >
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
    </section>
  );
};

export default GetInTouch;
