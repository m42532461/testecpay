import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h1>Products</h1>
        <button>{"See All ->"}</button>
      </div>
      <div className="flex justify-center">
        <span>All</span>
        <span>Bed</span>
        <span>Sofa</span>
        <span>Chair</span>
        <span>Light</span>
      </div>
      <div className="grid grid-cols-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
