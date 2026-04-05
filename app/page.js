"use client";
import Image from "next/image";
import Navbar from "./Components/Sections/Navbar";
import One from "./Components/Sections/One";
import Hero from "./Components/Sections/Hero";
import CarouselText from "./Components/Sections/LoopText";
import Bigimg from "./Components/Sections/Bigimg";
import Accordion from "./Components/Sections/Accordion";
import OverRide from "./Components/Sections/OverRide";
import Users from "./Components/Sections/Users";
import PlayReel from "./Components/Sections/PlayReel";
import Feedbacks from "./Components/Sections/Feedbacks";

export default function Home() {
  return (
    <div className="p-4">
      <Navbar/>
      <Hero/>
      <One/>
      <CarouselText/>
      <div>
        <p className="text-black">PORTFOLIO  </p>
      </div>
      <div className="mt-3">
        <Bigimg/>
      </div>
      <div>
        <Accordion/>
      </div>
      <div>
        <OverRide/>
      </div>
      <div>
        <Users/>
      </div>
      <PlayReel/>
      <div>
        <Feedbacks/>
      </div>
      
      
    </div>
  );
}
