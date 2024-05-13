import Image from "next/image";
import React from "react";
import FeatureCards from "./FeatureCards";

type Props = {};


const Features = (props: Props) => {
  return (
    <div className="h-[calc(100vh_-_107px)]">
      <div className="h-[15vh] bg-[#d9d9d9] grid grid-cols-4 mx-[70px] rounded-[25px]">
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
      <div>
        <div className="flex flex-col justify-center items-center mx-[70px] my-10">
          <p className="text-[#000000] text-[30px] font-semibold"><span className="text-[#fb503f]">More than</span><span className="font-bold"> &#8220;just Steel Structures&#8221;</span></p>
          <p className="text-[#73767f] text-[18px] font-semibold">We deliver complete building solutions with</p>
        </div>
      </div>
      <FeatureCards />
    </div>
  );
};

export default Features;
