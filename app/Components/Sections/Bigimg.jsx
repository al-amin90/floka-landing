import Image from "next/image";
import React from "react";

const Bigimg = () => {
  return (
    <div>
      <div className="flex justify-end mr-[200px] mb-[60px]">
        <p className="text-[#0a0a0a] text-[48px] ">
          Strategy to build powerful <br /> digital solutions.
        </p>
      </div>
      <div className="flex items-center gap-x-3 w-full">
        <div className="w-[50%] relative">
          <div className="absolute top-5 left-5 z-10">
            <Image
              src={"/img/Common/carText.svg"}
              alt="Phone"
              width={150}
              height={420}
              className="object-cover object-top rounded-[12px] h-auto"
            />
          </div>
          <Image
            src={"/img/Common/Car.webp"}
            alt="Car"
            width={612}
            height={420}
            className="object-cover object-top rounded-[12px] w-full h-auto"
          />
        </div>
        <div className="w-[50%] relative">
          <div className="absolute top-5 left-5 z-10">
            <Image
              src={"/img/Common/vrText.svg"}
              alt="Phone"
              width={150}
              height={420}
              className="object-cover object-top rounded-[12px]  h-auto"
            />
          </div>
          <Image
            src={"/img/Common/VR.jpg"}
            alt="VR"
            width={612}
            height={420}
            className="object-cover object-top rounded-[12px] w-full h-auto"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3 w-full mt-3">
        <div className="flex justify-between items-center bg-white rounded-[12px] p-5 mb-[40px] w-full">
          <p className="text-[#0a0a0a] text-sm">Aldan Branding</p>
          <p className="text-[#999] text-sm">2025</p>
        </div>
        <div className="flex justify-between items-center bg-white rounded-[12px] p-5 mb-[40px] w-full">
          <p className="text-[#0a0a0a] text-sm">Aldan Branding</p>
          <p className="text-[#999] text-sm">2025</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-5 left-5 z-10">
          <Image
            src={"/img/Common/clothText.svg"}
            alt="Phone"
            width={150}
            height={420}
            className="object-cover object-top rounded-[12px]  h-auto"
          />
        </div>
        <Image
          src={"/img/Common/Cloth.webp"}
          alt="Cloth"
          width={1224}
          height={420}
          className="object-cover object-top rounded-[12px] w-full h-auto"
        />
      </div>
      <div className="flex justify-between items-center bg-white rounded-[12px] mt-3 p-5 mb-[40px] w-full">
        <p className="text-[#0a0a0a] text-sm">Aldan Branding</p>
        <p className="text-[#999] text-sm">2025</p>
      </div>

      <div className="flex items-center gap-x-3 w-full">
        <div className="w-[50%] relative">
          <div className="absolute top-5 left-5 z-10">
            <Image
              src={"/img/Common/carText.svg"}
              alt="Phone"
              width={150}
              height={420}
              className="object-cover object-top rounded-[12px] h-auto"
            />
          </div>
          <Image
            src={"/img/Common/Sprint.webp"}
            alt="Sprint"
            width={612}
            height={420}
            className="object-cover object-top rounded-[12px] w-full h-[419px]"
          />
        </div>
        <div className="w-[50%] relative">
          <div className="absolute top-5 left-5 z-10">
            <Image
              src={"/img/Common/vrText.svg"}
              alt="Phone"
              width={150}
              height={420}
              className="object-cover object-top rounded-[12px]  h-auto"
            />
          </div>
          <Image
            src={"/img/Common/Hole.webp"}
            alt="Hole"
            width={612}
            height={420}
            className="object-cover object-top rounded-[12px] w-full h-auto"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3 w-full mt-3">
        <div className="flex justify-between items-center bg-white rounded-[12px] p-5 mb-[40px] w-full">
          <p className="text-[#0a0a0a] text-sm">Aldan Branding</p>
          <p className="text-[#999] text-sm">2025</p>
        </div>
        <div className="flex justify-between items-center bg-white rounded-[12px] p-5 mb-[40px] w-full">
          <p className="text-[#0a0a0a] text-sm">Aldan Branding</p>
          <p className="text-[#999] text-sm">2025</p>
        </div>
      </div>

      <div className=" flex items-center justify-center">
        <div className="text-white px-[15px] py-2 rounded-full bg-black text-base">+</div>
        <p className="text-[#0a0a0a] text-sm ml-2">MORE WORKS</p>
      </div>
    </div>
  );
};

export default Bigimg;
