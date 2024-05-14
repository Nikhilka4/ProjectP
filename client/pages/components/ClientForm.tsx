import React from "react";
import FormComp from "./FormComp";

type Props = {};

const ClientForm = (props: Props) => {
  return (
    <div>
      <div className="h-[calc(100vh_-_107px)] mt-10 mx-[70px]">
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
    </div>
  );
};

export default ClientForm;
