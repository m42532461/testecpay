import React from "react";
import {
  BusinessWeb,
  Entrepreneur,
  Mashable,
  Microsoft,
  Fortune,
} from "../assets/index";
const Brand = () => {
  return (
    <div className="flex flex-col gap-10 bg-[#F4F6F6] w-full px-10 xl:px-24 py-[55px]">
      <h1 className="text-[20px] font-medium text-[#031745] tracking-widest">
        TRUSTED BY OVER 1K+ COMPANIES
      </h1>
      <div className="flex flex-wrap overflow-clip gap-4 xl:gap-24 items-center justify-center">
        <img src={BusinessWeb} alt="" />
        <img src={Entrepreneur} alt="" />
        <img src={Mashable} alt="" />
        <img src={Microsoft} alt="" />
        <img src={Fortune} alt="" />
      </div>
    </div>
  );
};

export default Brand;
