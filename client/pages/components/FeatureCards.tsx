import Image from "next/image";
import React from "react";
import lowCost from "../assets/lowCost.svg";
import highQuality from "../assets/qualityControl.svg";
import fastDelivery from "../assets/onTimeIcon.svg";

type Props = {};

const featureCardsData = [
  {
    imgLogo: lowCost,
    title: "Low cost",
    description:
      "Utilize resources, and leverage technology to the maximum. They areeasy to set up, expand & modify.",
  },
  {
    imgLogo: highQuality,
    title: "Quality Control",
    description:
      "Products are inspected at all stages of fabrication for welding quality, dimensional tolerance, surface.",
  },
  {
    imgLogo: fastDelivery,
    title: "On time Delivery",
    description:
      "With Quick design capabilities and advanced techniques we deliver our services on time .",
  },
];

const FeatureCards = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-3 col-span-1 gap-[45px] mx-[70px] my-10">
        {featureCardsData.map((card, index) => (
          <div className="bg-[#dff4ff] rounded-3xl pt-10 shadow-2xl" key={index}>
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <Image
                  src={card.imgLogo}
                  width={index === 0 ? 150 : 100}
                  height={index === 0 ? 150 : 100}
                  alt="logo"
                />
              </div>
              <p className="text-[#000000]  text-[20px] font-semibold my-5">
                {card.title}
              </p>
              <p className="text-[#73767f] text-justify text-[18px] font-semibold px-10 pb-5">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
