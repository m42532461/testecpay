import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Brand from "../components/Brand";
import Deal from "../components/Deal";
import Footer from "../components/Footer";
import Products from "../components/Products";
import * as actionType from "../constants/actionTypes";
const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="App w-full  relative">
      <img src="" alt="" />
      <div className="relative">
        <div className="w-[570px] h-[470px] px-24 py-20 gap-[30px] relative z-10 flex flex-col">
          <h1 className="text-[#244D4D] text-[54px] leading-[72px] font-extrabold relative z-10 text-start">
            We Help You Make Modern Interior
          </h1>
          <span className="text-[#5F5F64] text-[20px] leading-[30px] font-normal relative z-10 text-start">
            We will help you to make an elegant and luxurious interior designed
            by professional interior designer.
          </span>
        </div>
        <div className="w-[570px] h-[470px] opacity-40 bg-white absolute top-0 z-0"></div>
      </div>
      <Brand />
      <Deal />
      <AboutUs />
      <Products />
      <Footer />
      <button onClick={() => navigate("/shop")}>Go Shopping</button>
    </div>
  );
};

export default Home;
