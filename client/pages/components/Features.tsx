import React from "react";

type Props = {};

const featureCards = [
  {
    imgLogo: '../../public/LOGO.svg' ,
    title: "Low cost",
    description: "Utilize resources, and leveragetechnology to the maximum. They areeasy to set up, expand & modify."
  },
  {
    imgLogo: '../../public/LOGO.svg' ,
    title: "Low cost",
    description: "Utilize resources, and leveragetechnology to the maximum. They areeasy to set up, expand & modify."
  },
  {
    imgLogo: '../../public/LOGO.svg' ,
    title: "Low cost",
    description: "Utilize resources, and leveragetechnology to the maximum. They areeasy to set up, expand & modify."
  },
]


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
        <div>
          <div className="grid grid-cols-3 gap-4 mx-[70px] my-10">
            {featureCards.map((card, index) => (
              <div className="flex flex-col justify-center items-center" key={index}>
                <div className="flex justify-center items-center">
                  <img src={card.imgLogo} width={100} height={100} alt="logo" />
                </div>
                <p className="text-[#000000] text-[20px] font-semibold my-5">{card.title}</p>
                <p className="text-[#73767f] text-[18px] font-semibold">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
