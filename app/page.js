import Image from "next/image";
import Navbar from "./Components/Sections/Navbar";
import One from "./Components/Sections/One";
import Hero from "./Components/Sections/Hero";
import CarouselText from "./Components/Sections/LoopText";

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
      
    </div>
  );
}
