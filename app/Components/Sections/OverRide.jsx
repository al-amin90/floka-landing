import Image from "next/image";
import React from "react";

const OverRide = () => {
  return (
    <div>
      <div>
        <Image
          src={"/img/people/Move.webp"}
          alt="OverRide"
          width={1920}
          height={1080}
          className="object-cover object-top rounded-[12px]"
        />
      </div>
      <div>
        <div>
          <p>fun facts</p>
          <p>
            Consistently delivering <br />impactful results through a <br />perfect blend of
            design and <br />functionality.
          </p>
        </div>
        <div>
            <div>
                <p>Successful projects <br />completed</p>
                <p>25 <span>+</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OverRide;
