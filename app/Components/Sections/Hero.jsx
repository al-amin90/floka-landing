import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        

        <div className="flex justify-center mt-6">
          <div className="relative w-[1234px] h-[750px] rounded-[24px] overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video/BGvideo.mp4" type="video/mp4" />
            </video>

            {/* Bottom Content */}
            <div className="relative z-10 h-full flex items-end justify-between p-10 text-white">
              {/* LEFT TEXT (BOTTOM) */}
              <div className="">
                <h1 className="text-[200px] leading-none font-semibold ">
                  Floka
                </h1>
                <p className="text-[80px] relative left-[310px] opacity-50 -mt-4">
                  Studio
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col items-end">
                {/* CARD */}
                <div className="bg-white text-black rounded-[20px] pl-[12px] py-[12px] pr-[40px]">
                  <div className="flex items-center gap-4">
                    <img    
                      src="/img/people/HeroPeople.jpg"
                      alt="profile"
                      className="w-[100px] h-[100px] rounded-[12px] object-cover"
                    />
                    <div>
                      <p className="text-xs text-gray-500">HEAD OF IDEA</p>
                      <h3 className="font-semibold">Almond D. Nelsi</h3>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
                          +
                        </div>
                        <span className="font-medium">LET’S TALK</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TEXT UNDER CARD */}
                <div className="mt-6 max-w-[300px]">
                  <p className="font-semibold">
                    No cookie-cutter websites. No fluff.
                  </p>
                  <p className="text-sm opacity-70 mt-1">
                    Just real tools and smart strategies to grow your business
                    and elevate your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
