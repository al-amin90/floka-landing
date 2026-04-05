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
import GetinTouch from "./Components/Sections/GetinTouch";
import Bars from "./Components/Sections/Bars";
import Avengers from "./Components/Sections/Avengers";
import FAQ from "./Components/Sections/FAQ";
import SpinScroll from "./Components/Sections/SpinScroll";
import Blog from "./Components/Sections/Blog";
import Footer from "./Components/Sections/Footer";

export default function Home() {
  return (
    <div className="p-4">
      <Navbar />
      <Hero />
      <One />
      <CarouselText />
      <div>
        <p className="text-black">PORTFOLIO </p>
      </div>
      <div className="mt-3">
        <Bigimg />
      </div>
      <div>
        <Accordion />
      </div>
      <div>
        <OverRide />
      </div>
      <div>
        <Users />
      </div>
      <PlayReel />
      <div>
        <Feedbacks />
      </div>
      <div className="pt-[100px] rounded-[12px]">
        <GetinTouch />
      </div>
      <Bars />
      <div>
        <Avengers />
      </div>
      <div className="pt-[100px]">
        <FAQ />
      </div>
      <div className="py-[50px]">
        <SpinScroll />
      </div>
      <div>
        <Blog/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
