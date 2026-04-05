import Image from "next/image";
import React from "react";

const socialLinks = ["DRIBBBLE", "BEHANCE", "LINKEDIN", "X", "XING"];

const avatars = [1, 2, 3, 4];

const impressions = [
  { label: "Solutions", value: "100%", highlight: false },
  { label: "UI/UX", value: "90%", highlight: true },
  { label: "Explore", value: "72%", highlight: false },
];

const One = () => {
  return (
    <section className="w-full py-10 px-6">
      {/* Top Row */}
      <div className="flex items-start justify-between w-full">
        <div className="">
          <Image
            src="/img/logo/f.png"
            alt="logo"
            width={60}
            height={60}
            className="rounded-[16px] bg-black p-2 mb-4"
          />
          <p className="text-gray-500 text-sm mt-4 leading-relaxed">
            We design every project with long- <br /> term success in mind.
          </p>
        </div>

        <div className="">
          <h1 className="text-[28px] md:text-[36px] font-medium text-black leading-tight">
            Our approach is straightforward— <br />
            prioritizing functionality, speed, and <br />
            clarity for solutions.
          </h1>
        </div>
      </div>

      {/* Main 3-column grid */}
      <div className="flex items-start gap-4 mt-8">
        {/* Column 1: Stats card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between w-[20%] h-[540px]">
          <div>
            <div className="flex items-end leading-none mb-1">
              <span className="text-[80px] font-semibold text-black leading-none">
                25
              </span>
              <span className="text-[50px] font-semibold text-gray-300 leading-none mb-1">
                +
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Years of experience</p>

            <div className="h-px bg-gray-100 my-5" />

            <p className="text-sm text-gray-500 leading-relaxed">
              Explore how we transform ideas into extraordinary digital
              experiences.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center mb-2">
              {avatars.map((a, i) => (
                <div
                  key={a}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                  style={{
                    marginLeft: i === 0 ? 0 : "-8px",
                    zIndex: avatars.length - i,
                  }}
                >
                  <Image
                    src={`/img/avatars/avatar-${a}.jpg`}
                    alt="user"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-700">
              1200+ happy users review
            </p>
          </div>
        </div>

        {/* Column 2: Hero image card */}
        <div
          className="relative bg-black rounded-2xl w-[60%] min-h-[540px] flex flex-col justify-end"
          style={{ overflow: "visible" }}
        >
          {/* CEO image — left aligned, overflows top */}
          <div
            className="absolute left-6 z-0"
            style={{ width: 390, height: 530, bottom: 0, top: -40 }}
          >
            <Image
              src="/img/people/CEO.webp"
              alt="CEO"
              width={390}
              height={530}
              className="object-cover object-top  h-full w-full"
              style={{ borderRadius: "16px 16px 0 0" }}
            />
          </div>

          {/* Award badges top-right */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 items-center z-10">
            <div
              className="rounded-full bg-black/50 backdrop-blur-sm px-3 py-2 flex flex-col items-center"
              style={{ minWidth: 72 }}
            >
              <Image
                src={"/img/logo/awardOne.svg"}
                alt="award"
                width={98}
                height={47}
                className="mb-1"
              />
            </div>
            <div
              className="rounded-full bg-black/50 backdrop-blur-sm px-3 py-2 flex flex-col items-center"
              style={{ minWidth: 72 }}
            >
              <Image
                src={"/img/logo/awardTwo.svg"}
                alt="award"
                width={98}
                height={47}
                className="mb-1"
              />
            </div>
          </div>

          {/* Quote overlay */}
          <div
            className="relative z-10 bottom-[40px] p-5"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.88) 70%, transparent)",
            }}
          >
            <p className="text-white text-2xl leading-relaxed mb-3">
              " At Floka, we merge strategy, creativity, and <br /> technology
              to shape brands that people love. "
            </p>
            <p className="text-gray-400 text-xs tracking-wide">
              Merizo H. Yelso{" "}
              <span className="text-gray-500 font-light">/CEO</span>
            </p>
          </div>
        </div>

        {/* Column 3: Social + Impressions */}
        <div className="flex flex-col gap-4 w-[20%]">
          {/* Social card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm flex-1">
            <p className="text-xs text-gray-400 mb-0.5">Follow us</p>
            <p className="text-sm font-medium text-black mb-4">
              For check updates
            </p>

            <div className="flex flex-wrap gap-2 pt-[90px]">
              {socialLinks.map((link) => (
                <span
                  key={link}
                  className="text-[11px] px-3 py-1.5 border border-gray-200 rounded-full text-gray-600 cursor-pointer hover:border-gray-400 hover:text-gray-900 transition-colors"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>

          {/* Impressions card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-xs text-gray-400 mb-4">Impressions</p>

            <div className="flex flex-col gap-1.5 pt-[90px]">
              {impressions.map((item) =>
                item.highlight ? (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-full px-4 py-2.5 bg-black"
                  >
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold text-white">
                      {item.value}
                    </span>
                  </div>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-1 py-2"
                  >
                    <span className="text-xs text-gray-700">{item.label}</span>
                    <span className="text-xs text-gray-500">{item.value}</span> 
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default One;