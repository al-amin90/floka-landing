import React from "react";

const Accordion = () => {
  return (
    <div className="bg-black rounded-[12px] p-10 mt-[40px]">
      <div>
        <p className="text-white text-[120px] text-center leading-none">
          Company <span className="text-[#4d4d4d]"> <br /> expertise</span>
        </p>
      </div>
      <div>
        <div>
            <div>
                <div>
                    <p className="text-[24px]  text-white py-[4px] px-[12px] border border-[#666] w-fit rounded-full">+</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Accordion;
