import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "./Product";

const Products = ({ products }) => {
  const navigate = useNavigate();
  const cate = useLocation().pathname?.split("/")[2];
  return (
    <div
      className="flex flex-col px-10 xl:px-24 pb-10 pt-[50px] xl:w-[1440px]"
      id="products"
    >
      <div className="flex justify-between items-between">
        <h1 className="text-[36px] xl:text-[50px] font-semibold text-bg">
          Products
        </h1>
        <button
          className="text-[17px] font-semibold text-[#3d3d3f] hover:-translate-y-1 duration-300 delay-200"
          onClick={() => {
            navigate("/products/all");
          }}
        >
          {"See All ->"}
        </button>
      </div>
      <div className="flex flex-col pt-16 justify-center items-center w-full">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-4 text-[18px] text-[#a9a7a6] pb-[40px] xl:pb-[140px]">
          <span
            className={`cursor-pointer ${
              cate === "all" || !cate ? "text-[#3d3d3f]" : ""
            }`}
            onClick={() => navigate("/products/all")}
          >
            All
          </span>
          <span
            className={`cursor-pointer hover:text-[#3d3d3f] hover:font-medium duration-500 delay-100 ${
              cate === "bed" ? "text-[#3d3d3f]" : ""
            }`}
            onClick={() => navigate("/products/bed")}
          >
            Bed
          </span>
          <span
            className={`cursor-pointer hover:text-[#3d3d3f] hover:font-medium duration-500 delay-100 ${
              cate === "sofa" ? "text-[#3d3d3f]" : ""
            }`}
            onClick={() => navigate("/products/sofa")}
          >
            Sofa
          </span>
          <span
            className={`cursor-pointer hover:text-[#3d3d3f] hover:font-medium duration-500 delay-100 ${
              cate === "chair" ? "text-[#3d3d3f]" : ""
            }`}
            onClick={() => navigate("/products/chair")}
          >
            Chair
          </span>
          <span
            className={`cursor-pointer hover:text-[#3d3d3f] hover:font-medium duration-500 delay-100 ${
              cate === "light" ? "text-[#3d3d3f]" : ""
            }`}
            onClick={() => navigate("/products/light")}
          >
            Light
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-14  w-full justify-center">
          {products?.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              discountPrice={product.discountPrice}
              img={product.img}
              id={product.id}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
