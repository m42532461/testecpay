import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Brand from "../components/Brand";
import Deal from "../components/Deal";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { MainImg, DOTS } from "../assets";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import * as actionType from "../constants/actionTypes";
const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="App w-full  relative">
      <div className="flex flex-col xl:flex-row pb-[92px] h-full">
        <div className="block xl:absolute top-[45px] z-0">
          <div className="w-full xl:w-[570px] h-full xl:h-[470px] px-10 xl:px-24 pb-10 xl:py-20 gap-[30px] xl:absolute top-[45px] z-10 flex flex-col">
            <h1 className="text-[#244D4D] text-[36px] xl:text-[54px] leading-[45px] xl:leading-[72px] font-extrabold relative z-10 text-start">
              We Help You Make Modern Interior
            </h1>
            <span className="text-[#5F5F64] text-[14px] xl:text-[20px] leading-[20px] xl:leading-[30px] font-normal relative z-10 text-start">
              We will help you to make an elegant and luxurious interior
              designed by professional interior designer.
            </span>
          </div>
          <div className="w-[570px] h-[470px] opacity-40 bg-white hidden xl:absolute top-[45px] z-0"></div>
        </div>
        <div className="hidden xl:block pl-[136px] pr-[110px] pt-10 flex-0.8">
          <img src={DOTS} alt="" className="w-full" />
        </div>
        <div className="w-full flex-[6]">
          <img src={MainImg} alt="" className=" object-fill w-full" />
        </div>
        <div className="w-24 h-full flex flex-col justify-center items-center gap-10 my-auto">
          <AiOutlineUp />
          <AiOutlineDown />
          <div className="">{"01"}</div>
          <div className="">{"|"}</div>
          <div className="">{"06"}</div>
        </div>
      </div>
      {/* <Brand />
      <Deal />
      <AboutUs />
      <Products />
      <button onClick={() => navigate("/shop")}>Go Shopping</button> */}
    </div>
  );
};

export default Home;
