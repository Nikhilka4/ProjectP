import React from "react";
import imageBG from "../assets/image.svg";
import Image from "next/image";

type Props = {};

const ServicesCardsData = [
  {
    imgLogo: imageBG,
    serviceName: "Pre Engineering Buildings",
    services: ["Duplex houses", "Convention centers", "Shopping centers"],
  },
  {
    imgLogo: imageBG,
    serviceName: "Warehouses",
    services: ["Duplex houses", "Convention centers", "Shopping centers"],
  },
  {
    imgLogo: imageBG,
    serviceName: "Specialized Structures",
    services: ["Duplex houses", "Convention centers", "Shopping centers"],
  },
];

const ServiceCard = ({ imgLogo, serviceName, services }: any) => (
  <div className="flex bg-[#dff4ff] rounded-3xl p-10 shadow-2xl">
    <div className="basis-1/2 flex flex-col justify-center items-start">
    <h2 className="font-bold text-[20px] ">{serviceName}</h2>
    <ul>
      {services.map((service: string, index: number) => (
        <li className="list-disc list-inside pl-3 text-[#999697]" key={index}>{service}</li>
      ))}
    </ul>
    </div>
    <div className="basis-1/2"><Image src={imgLogo} alt={serviceName} width={200} height={200} /></div>
  </div>
);

const ServicesCards = (props: Props) => {
  return (
    <div className="mt-[60px] grid grid-cols-3 col-span-1 gap-[25px]">
      {ServicesCardsData.map((data, index) => (
        <ServiceCard key={index} {...data} />
      ))}
    </div>
  );
};

export default ServicesCards;
