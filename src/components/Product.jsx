import React from "react";
import product1 from "../assets/product1.png";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router";
const Product = ({ title, price, discountPrice, img, id }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <div className="w-[312px] relative mx-auto">
      <div
        className="flex flex-col gap-10 text-start pt-14 relative z-10 px-[50px] cursor-pointer"
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      >
        <h1 className="text-[#3d3d3f] text-[26px]">{title}</h1>
        <div className="flex items-center gap-[34px] ">
          <h2 className="text-[#3d3d3f] text-[19px]">${discountPrice}</h2>
          <h3 className="text-[#a9a7a6] text-[15px] line-through">${price}</h3>
        </div>
        <div className="flex items-center">
          <img className="mx-auto" src={img} alt="" />
        </div>
      </div>
      <div className="absolute top-4 w-full h-[305px] bg-[#eeebeb]"></div>
      <div
        className="absolute top-0 right-5 bg-[#D6C4B8] rounded-full p-3 text-white cursor-pointer z-10"
        onClick={handleAddToCart}
      >
        <BsCart3 />
      </div>
    </div>
  );
};

export default Product;
