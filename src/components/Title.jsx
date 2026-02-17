import React from "react";
import { flowerLogo } from "../assets/assets";

const Title = ({zerothText="",  firstText, secondText, thirdText}) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 ">
      <h1 className="text-[clamp(1.8rem,5vw,3rem)] font-light leading-tight sm:text-center text-start">
        {zerothText} <span className="text-[#ED3237] font-bold">{firstText}</span> {secondText}
      </h1>

      <p className="italic tracking-[0.3em] text-[clamp(0.7rem,1.8vw,1rem)] opacity-90 font-semibold uppercase text-end sm:text-center">
        {thirdText}
      </p>

      <div className="w-[90%]">
        <img src={flowerLogo} alt="" />
      </div>
    </div>
  );
};

export default Title;
