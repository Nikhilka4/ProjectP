import Image from "next/image";
import React from "react";
import Imag from "../assets/IMG.svg";

type Props = {};

const Steps = (props: Props) => {
  return (
    <div>
      <div className="h-[calc(100vh_-_107px)] mt-16 mx-[70px]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[30px] font-bold">How we work?</p>
          <p className="max-w-[700px] text-center text-[18px] text-[#999697]">
            The complete process of Us providing you our Services in 3 easy
            steps.
          </p>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="w-[350px] flex justify-start items-center gap-4">
                <div className="bg-[#473bf0] text-white w-10 h-10 text-center rounded-full pt-2">
                    <span>1</span>
                </div>
                <p className="text-[25px] font-bold">Book an appointment</p>
              </div>
              <p className="w-[500px] text-[20px] pl-[55px] text-[#999697]">
                The process with in 24-48 hours after booking the appointment
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="w-[350px] flex justify-start items-center gap-4">
                <div className="bg-[#473bf0] text-white w-10 h-10 text-center rounded-full pt-2">
                    <span>2</span>
                </div>
                <p className="text-[25px] font-bold">We handle everything</p>
              </div>
              <p className="w-[500px] text-[20px] pl-[55px] text-[#999697]">
              With professional approach at every step of project. Like Design,
              Raw materials, Roofing Accessories etc
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="w-[350px] flex justify-start items-center gap-4">
                <div className="bg-[#473bf0] text-white w-10 h-10 text-center rounded-full pt-2">
                    <span>3</span>
                </div>
                <p className="text-[25px] font-bold">Book an appointment</p>
              </div>
              <p className="w-[500px] text-[20px] pl-[55px] text-[#999697]">
                We use advanced techniques to deliver our services on time.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={Imag}
              alt="how we work"
              width={600}
              height={200}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
