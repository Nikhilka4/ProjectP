import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC } from "react";
import HeroImg from "../assets/Hero.svg";

type Props = {
  className?: string;
};

const Hero:FC<Props> = ({className} ) => {
  return (
    <div>
      {/* */}
      <div className={` h-[calc(100vh_-_107px)] mx-[70px] mb-[70px]  ${className}`}>
        <div className="flex justify-center items-center">
        <div className="basis-1/2 flex flex-col justify-center items-start">
          <h1 className="text-[50px] font-bold">
            We Build Pre-Engineered Buildings
          </h1>
          <p className="pr-[105px] text-[20px] my-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea maxime
            quas quam atque, odio, nostrum at facilis temporibus vero, dolorum
            sequi eum consequuntur quae laboriosam.
          </p>
          <Button
            variant="primary"
            className=" rounded-[10px] roboto text-[17px]"
          >
            Book Appointment
          </Button>
        </div>
        <div className="basis-1/2">
          <Image src={HeroImg} width={750} height={750} alt="logo" />
        </div>
        </div>
        <div className="mt-8">
        <div className="h-[15vh] bg-[#d9d9d9] grid grid-cols-4 mx-[70px] rounded-[25px]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#000000] text-[40px] font-bold">8</p>
            <p className="text-[#73767f] text-[18px] font-semibold">
              Years since the start of the company
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#000000] text-[40px] font-bold">20+</p>
            <p className="text-[#73767f] text-[18px] font-semibold">
              Years of experience in the field
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#000000] text-[40px] font-bold">100+</p>
            <p className="text-[#73767f] text-[18px] font-semibold">
              Projects completed
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#000000] text-[40px] font-bold">3</p>
            <p className="text-[#73767f] text-[18px] font-semibold">
              Ongoing projects
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
