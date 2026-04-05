import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Image
          src="/img/logo/logo.png"
          alt="Description"
          width={100}
          height={100}
        />
      </div>
      <div>
        <ul className="flex gap-35 text-base text-[#202020] font-medium">
          <li>Home</li>
          <li>Pages</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="flex items-center gap-x-3">
        <p className="text-lg text-black font-medium ">ijesun30@gmail.com </p>
        <div className="w-[1px] h-[15px] bg-gray-600 mx-2"></div>
        <div className="flex items-center gap-x-[8px]">
          <div className="w-[3px] h-[3px] bg-black ">.</div>
          <div className="flex flex-col gap-y-[8px]">
            <div className="w-[3px] h-[3px] bg-black "></div>
            <div className="w-[3px] h-[3px] bg-black "></div>
            <div className="w-[3px] h-[3px] bg-black "></div>
          </div>
          <div className="w-[3px] h-[3px] bg-black ">.</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
