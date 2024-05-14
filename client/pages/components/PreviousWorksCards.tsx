"use client";
import React from "react";
import imageBG from "../assets/imagebg.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Props = {};

const PreviousWorksCardsData = [
  {
    imgLogo: imageBG,
    ProjectName: "Paramjyoti School Roofing",
    place: "Amalapuram, Andhra Pradesh.",
    area: "30,000 sq.ft",
    timeTaken: "6 Weeks",
  },
  {
    imgLogo: imageBG,
    ProjectName: "Warehouse for VsB agro tech",
    place: "Samarlakota, Andhra Pradesh.",
    area: "22,000 sq.ft",
    timeTaken: "6 Weeks",
  },
  {
    imgLogo: imageBG,
    ProjectName: "Warehouse ",
    place: " Kodangal, Telangana.",
    area: "17,000 sq.ft",
    timeTaken: "8 Weeks",
  },
  {
    imgLogo: imageBG,
    ProjectName: "Warehouse ",
    place: "Gulbarga, Karnataka.",
    area: "16,000 sq.ft",
    timeTaken: "6 Weeks",
  },
  {
    imgLogo: imageBG,
    ProjectName: "Paramjyoti School Roofing",
    place: "Amalapuram, Andhra Pradesh.",
    area: "30,000 sq.ft",
    timeTaken: "6 Weeks",
  },
];

const PreviousWorksCards = (props: Props) => {
  return (
    <div>
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="max-w-[calc(100vw-140px)] mx-[70px]"
      >
        <CarouselContent>
          {PreviousWorksCardsData.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-9/12">
              <div className="p-1">
                <Card className="h-[68vh] bg-[#dff4ff]">
                  <CardContent className="flex aspect-video items-center justify-center">
                    <div className="basis-1/3">
                      <p className="text-[35px] font-bold">
                        {data.ProjectName}
                      </p>
                      <p className="text-[20px] text-[#737373]">{data.place}</p>
                      <p className="text-[25px] font-bold">{data.area}</p>
                      <p className="text-[20px] text-[#737373] text-justify">The Project took around <span className="text-[20px] text-black font-bold">{data.timeTaken}</span> to complete from start to finsh</p>
                    </div>
                    <div className="basis-2/3">
                        <Image src={data.imgLogo} alt={data.ProjectName} width={800} height={200} className="aspect-video"/>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PreviousWorksCards;
