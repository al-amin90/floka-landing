import Image from "next/image";
import React, { useState } from "react";

const PlayReel = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className=" pt-[20px]">
      <div
        className="relative overflow-hidden rounded-[12px] cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background Image with zoom + blur on hover */}
        <div
          style={{
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            filter: hovered ? "blur(4px)" : "blur(0px)",
            width: "100%",
            height: "100vh",
          }}
        >
          <Image
            src={"/img/people/WatchVideo.webp"}
            alt="Play Reel"
            width={1100}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Dark overlay that fades in on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.25)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: "none",
          }}
        />

        {/* Play button — bottom-left at rest, center on hover */}
        <div
          style={{
            position: "absolute",
            transition:
              "bottom 0.6s cubic-bezier(0.4, 0, 0.2, 1), left 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            bottom: hovered ? "50%" : "28px",
            left: hovered ? "50%" : "28px",
            transform: hovered ? "translate(-50%, 50%)" : "translate(0, 0)",
          }}
        >
          <div className="bg-white rounded-full p-[5px] cursor-pointer shadow-lg">
            <div className="flex items-center gap-x-4">
              {/* Play icon */}
              <div className="w-[35px] h-[35px] rounded-full bg-black flex items-center justify-center">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L13 8L1 15V1Z" fill="white" />
                </svg>
              </div>
              <div className="pr-[7px]">
                <p className="text-black font-medium tracking-wide text-sm">
                  PLAY REEL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayReel;