import React from "react";
import Product from "./Product";
import productsFromDumb from "../dumbData/index";
import { useSelector } from "react-redux";

const Products = () => {
  const { products } = useSelector((state) => state.products);

  console.log(products);
  return (
    <div className="flex flex-col px-10 xl:px-24 pb-10 pt-[50px]">
      <div className="flex justify-between items-between">
        <h1 className="text-[36px] xl:text-[50px] font-semibold text-bg">
          Products
        </h1>
        <button className="text-[17px] font-semibold text-[#3d3d3f] hover:-translate-y-1 duration-300 delay-200">
          {"See All ->"}
        </button>
      </div>
      <div className="flex flex-col pt-16 justify-center items-center w-full">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-4 text-[18px] text-[#a9a7a6] pb-[40px] xl:pb-[140px]">
          <span className="text-[#3d3d3f]">All</span>
          <span className="hover:text-[#3d3d3f] hover:font-medium duration-500 delay-100">
            Bed
          </span>
          <span className="hover:text-[#3d3d3f] hover:font-medium duration-500 delay-100">
            Sofa
          </span>
          <span className="hover:text-[#3d3d3f] hover:font-medium duration-500 delay-100">
            Chair
          </span>
          <span className="hover:text-[#3d3d3f] hover:font-medium duration-500 delay-100">
            Light
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-14  w-full justify-center">
          {products.map((product) => (
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
