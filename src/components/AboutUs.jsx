import React from "react";
import aboutus from "../assets/aboutus.png";
const AboutUs = () => {
  return (
    <div className="flex flex-col px-10 xl:px-24 pb-20">
      <div className="flex flex-col xl:flex-row gap-20 xl:gap-0 justify-between items-center pb-20">
        <div className="flex flex-col gap-10 text-start">
          <h1 className="text-[36px] xl:text-[50px] leading-[76px] font-bold text-bg">
            About Us
          </h1>
          <span className="text-[14px] xl:text-[20px] leading-[32px] text-[#64717C]">
            At Besnik Consultancy, we take pride in our values <br />– service,
            integrity, and excellence.
          </span>
        </div>
        <button className="bg-[#F4F6F6] text-[#5f5f64] text-[18px] font-semibold py-[15px] px-[34px] rounded-2xl shadow-2xl hover:-translate-y-1 hover:translate-x-[1px] duration-300 delay-200">
          Learn more
        </button>
      </div>
      <div className="flex flex-col xl:flex-row gap-[60px] justify-center items-center">
        <div className="grid grid-cols-2 text-start gap-x-[30px] xl:gap-x-[63px] gap-y-[30px] xl:gap-y-[82px] flex-1">
          <div className="flex flex-col gap-3">
            <h1 className="text-[50px] font-extrabold text-bg pb-3">1.</h1>
            <h2 className="text-[20px] font-extrabold text-bg">Who We Are</h2>

            <span className="text-[16px] leading-[24px] text-[#64717c]">
              You get a 2-week free trial to kick the Smarty tries. We want you
              to.
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[50px] font-extrabold text-bg pb-3">2.</h1>
            <h2 className="text-[20px] font-extrabold text-bg">
              What Do We Do
            </h2>

            <span className="text-[16px] leading-[24px] text-[#64717c]">
              We give you a free course that guides you through the process.
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[50px] font-extrabold text-bg pb-3">3.</h1>
            <h2 className="text-[20px] font-extrabold text-bg">
              How Do We Help
            </h2>

            <span className="text-[16px] leading-[24px] text-[#64717c]">
              Use our multimedia lecturers, videos, and coaching sessions.
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[50px] font-extrabold text-bg pb-3">4.</h1>
            <h2 className="text-[20px] font-extrabold text-bg">
              Create success story
            </h2>

            <span className="text-[16px] leading-[24px] text-[#64717c]">
              With access to online learning resources anyone can transfrm.
            </span>
          </div>
        </div>
        <div className="flex w-full h-full flex-1 pt-5">
          <img src={aboutus} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
