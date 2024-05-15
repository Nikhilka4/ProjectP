import React from "react";
import imageBG from "../assets/image.svg";
import Image from "next/image";

type Props = {};

const ServicesCards = () => {
  const ServicesCardsDataLeft = [
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
  ];
  const ServicesCardsDataRight = [
    {
      imgLogo: imageBG,
      serviceName: "Specialized Structures",
      services: ["Duplex houses", "Convention centers", "Shopping centers"],
    },
  ];

  return (
    <div className=" my-10 flex gap-x-[16px] justify-center items-center">
      <div>
        <div className="flex flex-col gap-[16px]">
          {ServicesCardsDataLeft.map((serviceData, index) => (
            <div
              key={index}
              className="h-[30vh] w-[35vw] flex justify-center items-center rounded-2xl bg-[#dff4ff] shadow-2xl"
            >
              <div className="flex-1/2 px-[25px]">
                <h2 className="font-bold text-[20px] w-[150px]">
                  {serviceData.serviceName}
                </h2>
                {serviceData.services.map((service, index) => (
                  <li
                    className="list-disc list-inside pl-3 text-[#999697]"
                    key={index}
                  >
                    {service}
                  </li>
                ))}
              </div>
              <div>
                <Image
                  src={serviceData.imgLogo}
                  alt={serviceData.serviceName}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {ServicesCardsDataRight.map((serviceData, index) => (
          <div
            key={index}
            className="h-[calc(60vh_+_16px)] w-[35vw] flex flex-col justify-center items-center rounded-2xl bg-[#dff4ff] shadow-2xl"
          >
                <div className="flex-1/2">
                  <Image
                    src={serviceData.imgLogo}
                    alt={serviceData.serviceName}
                    width={300}
                    height={300}
                  />
                </div>
            <div className="flex-1/2 mt-[16px]">
              <h2 className="font-bold text-[20px] ">
                {serviceData.serviceName}
              </h2>
              {serviceData.services.map((service, index) => (
                <li
                  className="list-disc list-inside pl-3 text-[#999697]"
                  key={index}
                >
                  {service}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
