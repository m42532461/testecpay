import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Products from "../components/Products";

const ProductsPage = () => {
  const cate = useLocation().pathname.split("/")[2];
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="py-2 px-4 text-[13.6px] text-[#888] mt-4">
        Home/<span className="text-[#333]">{cate}</span>
      </div>
      <Products
        products={
          cate === "all"
            ? products
            : products.filter((product) => product.type === cate)
        }
      />
      <Footer />
    </>
  );
};

export default ProductsPage;
