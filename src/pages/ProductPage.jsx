import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Product from "../components/Product";
import products from "../dumbData";
const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [plant1, plant2, plant3] = [
    "https://images.unsplash.com/photo-1512428813834-c702c7702b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1511881346740-60bcc5769e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1512428735642-908dea4257ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
  ];
  const [chair1, chair2, chair3] = [
    "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1987&q=80",
    "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "https://images.unsplash.com/photo-1580152213601-87df3d2c56e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  ];
  const [choosenImage, setChoosenImage] = useState(chair1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(id);
  };
  console.log(id);
  const theProduct = products.find((pro) => pro.id === id);
  const { title, discountPrice, price, img, desc } = theProduct;
  return (
    <div className="flex flex-col px-24">
      <div className="py-2 px-4 text-[13.6px] text-[#888] mt-4">
        Home/Category/ <span className="text-[#333]">{title}</span>
      </div>
      <div className="flex pb-6 justify-center">
        <div className="flex-1 relative flex flex-col p-4 gap-3">
          <div className="flex w-full h-full justify-center">
            <img
              src={choosenImage}
              alt=""
              className="w-[650px] h-[370px] object-cover"
            />
          </div>
          <div className="flex gap-3 justify-center">
            <div className="" onClick={() => setChoosenImage(chair1)}>
              <img src={chair1} alt="" className="h-[170px] w-[208px]" />
            </div>
            <div className="" onClick={() => setChoosenImage(chair2)}>
              <img src={chair2} alt="" className="h-[170px] w-[208px]" />
            </div>
            <div className="" onClick={() => setChoosenImage(chair3)}>
              <img src={chair3} alt="" className="h-[170px] w-[208px]" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start items-start p-4">
          <h1 className="text-[#333333] text-[40px] mt-7 mb-4 leading-6">
            {title}
          </h1>
          <h2 className="text-[#333] text-[34px] mt-7 mb-4 leading-6">
            ${discountPrice ? discountPrice : price}
          </h2>
          <div className="my-[32px] border-t-2 ">
            <p className="text-[#333] text-[18px] mt-7 mb-4 leading-6 my-[18px] pt-4">
              {desc
                ? desc
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dicta officiis quae. Voluptate iste amet incidunt hic exercitationem, eveniet soluta magni pariatur, ipsum mollitia voluptatem ipsam ab itaque cumque nostrum."}
            </p>
            <p className="text-[#333] text-[18px] mt-7 mb-4 leading-6 my-[18px]">
              {desc
                ? desc
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dicta officiis quae. Voluptate iste amet incidunt hic exercitationem, eveniet soluta magni pariatur, ipsum mollitia voluptatem ipsam ab itaque cumque nostrum."}
            </p>
          </div>
          <button className="bg-[#3e3e3f] text-white py-5 px-10">
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="">
        <div className="p-4 ">
          <h1 className="mt-7 mb-4 leading-6 text-[32px]">You may also like</h1>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col">
            <img
              className=" w-[357px] h-[238px] object-cover "
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt=""
            />
            <h1 className="text-[#333] text-[24px] mt-8 mb-2">Black Chair</h1>
            <h2 className="text-[#888] text-[24px] mb-2">$19.99</h2>
          </div>
          <div className="flex flex-col">
            <img
              className=" w-[357px] h-[238px] object-cover "
              src="https://images.unsplash.com/photo-1506326426992-32b61983f2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
              alt=""
            />
            <h1 className="text-[#333] text-[24px] mt-8 mb-2">White Chair</h1>
            <h2 className="text-[#888] text-[24px] mb-2">$19.99</h2>
          </div>
          <div className="flex flex-col">
            <img
              className=" w-[357px] h-[238px] object-cover"
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <h1 className="text-[#333] text-[24px] mt-8 mb-2">Lamp</h1>
            <h2 className="text-[#888] text-[24px] mb-2">$19.99</h2>
          </div>
        </div>
        <div className="py-[34px]">
          <p className="text-center">&copy; Copyright 2022 PAUL HUANG</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
