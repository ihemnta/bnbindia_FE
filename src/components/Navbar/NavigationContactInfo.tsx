import React from "react";
import IconWrapper from "../Wrapper/IconWrapper";

const NavigationContactInfo = () => {
  return (
    <div className="flex justify-center sm:justify-between border-b border-gray-300 ">
      <div className="flex gap-7 -ml-3 items-center">
        <div className="flex flex-col sm:flex-row sm:gap-3 items-center  justify-center w-full">
          <img
            src="/assets/logo/logo-gold.png"
            alt="logo-bnb-india"
            className="sm:w-36 sm:h-16 sm:-ml-4 w-36 h-16 object-fill"
          />
          <h1 className=" sm:mt-8 font-medium tracking-widest  text-pretty text-yellow-600 text-md  uppercase font-verdana">
            bNb India
          </h1>
        </div>

        <div className=" hidden sm:flex gap-3 mt-6">
          <IconWrapper iconPath="/assets/svgs/pinterest.svg" />
          <IconWrapper iconPath="/assets/svgs/instagram.svg" />
          <IconWrapper iconPath="/assets/svgs/facebook.svg" />
        </div>
      </div>
      <div className="sm:flex hidden gap-4 mt-6 text-sm">
        <div className="flex  gap-1  items-center">
          <IconWrapper
            width={30}
            height={30}
            iconPath="/assets/svgs/mail.svg"
          />
          <span className="text-xs">Email: </span>
          <span className="font-verdana">bhupeshbhaskar21@gmail.com</span>
        </div>
        <div className="flex gap-1  items-center">
          <IconWrapper
            width={30}
            height={30}
            iconPath="/assets/svgs/phone.svg"
          />
          <span className="text-xs"> Call Us: </span>
          <span className="font-verdana">098110 01353</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationContactInfo;
