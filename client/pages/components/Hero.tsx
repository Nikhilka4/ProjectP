import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import HeroImg from "../../public/Hero.svg"

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div className="h-[calc(100vh_-_107px)] flex justify-center items-center mx-[70px]">
        <div className="basis-1/2 flex flex-col justify-center items-start">
          <h1 className="text-[50px] font-bold">We Build Pre-Engineered Buildings</h1>
          <p className="pr-[105px] text-[20px] my-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea maxime quas quam atque, odio, nostrum at facilis temporibus vero, dolorum sequi eum consequuntur quae laboriosam.</p>
          <Button variant="primary" className=" rounded-[10px] roboto text-[17px]">
          Book Appointment
        </Button>
        </div>
        <div className="basis-1/2">
          <Image src={HeroImg} width={850} height={750} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
