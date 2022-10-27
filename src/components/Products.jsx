import React from "react";
import Product from "./Product";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "../assets/index.js";

const products = [
  { title: "Hand Base Lamp", price: 55, discountPrice: 35, img: product1 },
  { title: "Vintage Chair", price: 95, discountPrice: 65, img: product2 },
  { title: "Lamp Tool", price: 45, discountPrice: 35, img: product3 },
  { title: "Stylish Chair", price: 55, discountPrice: 45, img: product4 },
  { title: "Vintage Chair", price: 95, discountPrice: 65, img: product5 },
  { title: "Stackable Chair", price: 97, discountPrice: 87, img: product6 },
];
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
