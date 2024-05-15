import Image from "next/image";
import React, { FC } from "react";
import FeatureCards from "./FeatureCards";

type Props = {
  className?: string;
};


const Features:FC<Props> = ({className} )=> {
  return (
    <div className={`h-[calc(100vh_-_107px)] ${className}`}>
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
