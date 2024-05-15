import React, { FC } from "react";
import TestimonialCards from "./TestimonialCards";

type Props = {
  className?: string;
};

const Testimonials:FC<Props> = ({className} )=> {
  return (
    <div>
      <div className={`h-[calc(100vh_-_107px)] mt-16 mx-[70px] ${className}`}>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[30px] font-bold">What people say about us</p>
          <p className="max-w-[700px] text-center text-[18px] text-[#999697]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <TestimonialCards />
      </div>
    </div>
  );
};

export default Testimonials;
