import React from "react";
import product1 from "../assets/product1.png";

const Product = ({ title, price, dicountPrice, img }) => {
  return (
    <div className="max-w-[312px] relative mx-auto">
      <div className="flex flex-col gap-10 text-start pt-14 relative z-10 px-[50px]">
        <h1 className="text-[#3d3d3f] text-[26px]">{title}</h1>
        <div className="flex items-center gap-[34px] ">
          <h2 className="text-[#3d3d3f] text-[19px]">${dicountPrice}</h2>
          <h3 className="text-[#a9a7a6] text-[15px]">${price}</h3>
        </div>
        <div className="flex items-center">
          <img className="mx-auto" src={img} alt="" />
        </div>
      </div>
      <div className="absolute top-4 w-full h-[305px] bg-[#eeebeb]"></div>
      <div className="absolute top-0 right-5">icon</div>
    </div>
  );
};

export default Product;
