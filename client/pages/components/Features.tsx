import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <div>
      <div className="h-[15vh] bg-[#d9d9d9] flex justify-evenly items-center mx-[70px] rounded-[25px]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#000000] text-[40px] font-bold">8</p>
          <p className="text-[#73767f] text-[18px] font-semibold">Years since the start of the company</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#000000] text-[40px] font-bold">20+</p>
          <p className="text-[#73767f] text-[18px] font-semibold">Years of experience in the field</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#000000] text-[40px] font-bold">100+</p>
          <p className="text-[#73767f] text-[18px] font-semibold">Projects completed</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#000000] text-[40px] font-bold">3</p>
          <p className="text-[#73767f] text-[18px] font-semibold">Ongoing projects</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
