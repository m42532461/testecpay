import React from "react";
import Product from "./Product";
import products from "../dumbData/index";
const Products = () => {
  return (
    <div className="flex flex-col px-24 pb-10 pt-[50px]">
      <div className="flex justify-between items-between">
        <h1 className="text-[50px] font-semibold text-bg">Products</h1>
        <button className="text-[17px] text-[#3d3d3f]">{"See All ->"}</button>
      </div>
      <div className="flex flex-col pt-16 justify-center items-center w-full">
        <div className="flex justify-center gap-16 text-[18px] text-[#a9a7a6] pb-[140px]">
          <span className="text-[#3d3d3f]">All</span>
          <span>Bed</span>
          <span>Sofa</span>
          <span>Chair</span>
          <span>Light</span>
        </div>
        <div className="grid grid-cols-3 gap-14  w-full justify-center">
          {products.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              discountPrice={product.discountPrice}
              img={product.img}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
