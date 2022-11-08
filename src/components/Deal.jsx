import React from "react";
import { icon1, iconFire } from "../assets/index";
const Deal = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between px-10 xl:px-24 text-start gap-[65px] pt-[60px] xl:pt-[138px] pb-[50px] xl:pb-[109px]">
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-[36px] xl:text-[50px] leading-[45px] xl:leading-[50px] xl:w-[400px] text-bg font-bold">
          <span className="flex items-center">
            Hot <img src={iconFire} alt="" />
          </span>
          deals for you
        </h1>
        <p className="text-[14px] xl:text-[16px] text-[#5f5f64] leading-[20px] xl:leading-[26px] xl:max-w-[233px]">
          Online shopping for retail sales direct to consumers
        </p>
      </div>
      <div className="flex flex-wrap xl:flex-none gap-[60px] xl:gap-[120px]">
        <div className="flex flex-col gap-6 max-w-[188px]">
          <img src={icon1} className="w-[32px] h-[35px] " alt="" />
          <h1 className="text-[20px] leading-[28px] font-bold text-[#3d3d3f]">
            1.5% cashback
          </h1>
          <span className="text-[16px] text-[#5f5f64] leading-[26px]">
            Online shopping for retail sales direct to consumers
          </span>
        </div>
        <div className="flex flex-col gap-6 max-w-[188px]">
          <img src={icon1} className="w-[32px] h-[35px] " alt="" />
          <h1 className="text-[20px] leading-[28px] font-bold text-[#3d3d3f]">
            30-day terms
          </h1>
          <span className="text-[16px] text-[#5f5f64] leading-[26px]">
            Online shopping for retail sales direct to consumers
          </span>
        </div>
        <div className="flex flex-col gap-6 max-w-[188px]">
          <img src={icon1} className="w-[32px] h-[35px] " alt="" />
          <h1 className="text-[20px] leading-[28px] font-bold text-[#3d3d3f]">
            Save Money
          </h1>
          <span className="text-[16px] text-[#5f5f64] leading-[26px]">
            Online shopping for retail sales direct to consumers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Deal;
