"use client";
import React from "react";
import imageBG from "../assets/Oval.svg";
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

const TestimonialCardsData = [
  {
    imgLogo: imageBG,
    description:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
    name: "Isabella Chovez",
    occupation: "Graphic Designer",
  },
  {
    imgLogo: imageBG,
    description:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
    name: "Isabella Chovez",
    occupation: "Graphic Designer",
  },
  {
    imgLogo: imageBG,
    description:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
    name: "Isabella Chovez",
    occupation: "Graphic Designer",
  },
  {
    imgLogo: imageBG,
    description:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
    name: "Isabella Chovez",
    occupation: "Graphic Designer",
  },
  {
    imgLogo: imageBG,
    description:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
    name: "Isabella Chovez",
    occupation: "Graphic Designer",
  },
];

/**
 * Renders a carousel of testimonial cards with client logos.
 *
 * The carousel is configured to automatically play with a 2-second delay between slides.
 * Each testimonial card is displayed in a responsive layout, with the cards taking up
 * half the width on medium screens and 2/5 the width on large screens.
 *
 * The data for the testimonial cards is provided through the `TestimonialCardsData` array.
 * Each card displays the client's logo image.
 *
 * @param props - The component props, which are not used in this implementation.
 * @returns The rendered testimonial cards carousel.
 */
const TestimonialCards = (props: Props) => {
  return (
    <div>
      {/* <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="max-w-[calc(100vw-140px)] mx-[70px]"
      >
        <CarouselContent>
          {TestimonialCardsData.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-[68vh] bg-[#dff4ff]">
                  <CardContent className="flex aspect-video items-center justify-center">
                    {index + 1}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="max-w-[calc(100vw-140px)] mx-[70px] mt-20"
      >
        <CarouselContent>
          {TestimonialCardsData.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/5 ">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-video">
                    <div className="basis-1/3 items-start mt-7">
                      <Image
                        src={data.imgLogo}
                        alt="client"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-[20px] font-bold">
                        {data.description}
                      </p>
                    </div>
                    <div className="flex  justify-end mt-5 font-semibold italic">
                      -{data.name}, {data.occupation}
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

export default TestimonialCards;
