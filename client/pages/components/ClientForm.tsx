import React, { FC } from "react";
import FormComp from "./FormComp";
import Footer from "@/pages/components/Footer";

type Props = {
  className?: string;
};

const ClientForm:FC<Props> = ({className} ) => {
  return (
    <div>
      <div className={`h-[calc(100vh_-_271px)] mt-10 mx-[70px] ${className}`}>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[30px] font-bold">Ready to get started?</p>
          <p className="max-w-[700px] text-center text-[18px] text-[#999697]">
            Please fill the appointment form below
          </p>
        </div>
        <div>
            <div>
                <FormComp />
            </div>
        </div>
      </div>
            <Footer/>
    </div>
  );
};

export default ClientForm;
