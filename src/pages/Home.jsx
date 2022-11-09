import React, { useState } from "react";
import { useSelector } from "react-redux";
import AboutUs from "../components/AboutUs";
import Brand from "../components/Brand";
import Deal from "../components/Deal";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { MainImg, DOTS } from "../assets";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const Home = () => {
  const { products } = useSelector((state) => state.products);
  const [displace, setDisplace] = useState(0);

  const imgs = [
    MainImg,
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1632829882891-5047ccc421bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    "https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
    "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2765&q=80",
  ];

  const handleSlider = (direction) => {
    if (direction === "up") {
      if (displace >= 5) setDisplace(0);
      else setDisplace((prev) => prev + 1);
    } else {
      if (displace <= 0) setDisplace(5);
      else setDisplace((prev) => prev - 1);
    }
  };

  return (
    <div className="App w-full relative flex flex-col items-center">
      <div className="flex flex-col  xl:flex-row xl:pb-[92px] h-full" id="home">
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
          <div className="w-[570px] h-[470px] opacity-40 bg-white hidden xl:block absolute top-[45px] z-0"></div>
        </div>
        <div className="hidden xl:block pl-[136px] pr-[110px] pt-10 flex-0.8">
          <img src={DOTS} alt="" className="w-full" />
        </div>
        <div className=" flex-[6] h-[255px] xl:h-[700px] xl:w-[991px] overflow-hidden static z-[-10]">
          <div
            className={`w-full h-[255px] xl:h-full ease-linear duration-1000`}
          >
            <div className="w-full xl:h-[700px]  flex items-center ">
              <img
                src={imgs[displace]}
                alt=""
                className=" object-cover xl:h-[700px] w-full "
              />
            </div>
          </div>
        </div>
        <div className="hidden xl:flex w-24 h-full  flex-col justify-center items-center gap-10 my-auto select-none">
          <AiOutlineUp
            onClick={() => handleSlider("down")}
            className="cursor-pointer hover:bg-gray-200 active:-translate-y-1"
          />
          <AiOutlineDown
            onClick={() => handleSlider("up")}
            className="cursor-pointer hover:bg-gray-200 active:translate-y-1"
          />
          <div className="">{"01"}</div>
          <div className="">{"|"}</div>
          <div className="">{"06"}</div>
        </div>
      </div>
      <Brand />
      <Deal />
      <AboutUs />
      <Products products={products} />
      <Footer />
    </div>
  );
};

export default Home;
