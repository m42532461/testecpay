import React from "react";

const Deal = () => {
  return (
    <div className="flex justify-between px-24 text-start gap-[65px] pt-[138px] pb-[109px]">
      <div className="flex flex-col gap-6">
        <h1 className="text-[50px] leading-[50px]">
          Hot <br />
          deals for you
        </h1>
        <p className="text-[16px] leading-[26px] max-w-[233px]">
          Online shopping for retail sales direct to consumers
        </p>
      </div>
      <div className="flex gap-[120px]">
        <div className="flex flex-col gap-6 max-w-[188px]">
          icon
          <h1 className="text-[20px] leading-[28px]">1.5% cashback</h1>
          <span className="text-[16px] leading-[26px]">
            Online shopping for retail sales direct to consumers
          </span>
        </div>
        <div className="flex flex-col gap-6 max-w-[188px]">
          icon
          <h1 className="text-[20px] leading-[28px]">30-day terms</h1>
          <span className="text-[16px] leading-[26px]">
            Online shopping for retail sales direct to consumers
          </span>
        </div>
        <div className="flex flex-col gap-6 max-w-[188px]">
          icon
          <h1 className="text-[20px] leading-[28px]">Save Money</h1>
          <span className="text-[16px] leading-[26px]">
            Online shopping for retail sales direct to consumers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Deal;
