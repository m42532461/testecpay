import React from "react";
import { ImFacebook, ImPinterest } from "react-icons/im";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
const links = [
  {
    title: "Entity types",
    subtitle: [
      "Knowledge base",
      "Security",
      "Privacy Policy",
      "Partners",
      "About us",
      "FAQs",
    ],
  },
  {
    title: "Services",
    subtitle: [
      "Contact Us",
      "Press",
      "Payrool",
      "Library",
      "Blog",
      "Help Center",
    ],
  },
  {
    title: "Resources",
    subtitle: ["Pricing", "FAQs", "Contact Support", "Privacy Policy", "Terms"],
  },
  {
    title: "Support",
    subtitle: [
      "Contact",
      "Affiliates",
      "Sitemap",
      "Cancelation Policy",
      "Pricing",
    ],
  },
];
const Footer = () => {
  return (
    <div className="bg-bg text-white flex flex-col px-10 xl:px-24 w-full items-center">
      <div className="flex flex-col xl:flex-row justify-between py-[60px] xl:pt-[120px] xl:pb-[75px] w-full items-center border-b-[1px] border-white gap-10 max-w-[1440px]">
        <h1 className="text-[30px] xl:text-[45px] leading-[45px] xl:leading-[60px] max-w-[80%] xl:max-w-[60%] text-start">
          Start your business today for $0+ state fees.
        </h1>
        <div className="flex gap-5">
          <button className="rounded-full bg-white text-bg text-[14px] xl:text-[19px] py-3 px-6 xl:py-5 xl:px-12 font-semibold">
            Get Started
          </button>
          <button className="rounded-full bg-[#3A5F5F] text-[#FCFBFF] text-[14px] xl:text-[19px] py-3 px-6 xl:py-5 xl:px-12 font-semibold">
            Contact Sales
          </button>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row  justify-between py-[60px] xl:pt-[90px] xl:pb-[65px] gap-10 w-full max-w-[1440px]">
        <div className="text-start gap-[30px] flex flex-col">
          <h1 className="text-[26px] font-bold">furni.shop</h1>
          <p className="text-[#EEEEEE] text-[15px] leading-[27px] xl:max-w-[220px]">
            Optix seamlessly connects your members with the community,
            resources.
          </p>
          <div className="flex gap-[25px] text-[20px]">
            <ImFacebook className="cursor-pointer" />
            <ImPinterest className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>
        </div>
        <div className="hidden xl:flex gap-20">
          {links.map((link, index) => (
            <div
              className="flex flex-col gap-5 text-start"
              key={link.title + index}
            >
              <a href="" className="text-[17px] font-medium ">
                {link.title}
              </a>
              <ul className="flex flex-col gap-5">
                {link.subtitle.map((sub, subIndex) => (
                  <li
                    key={sub + subIndex}
                    className="text-[15px] cursor-pointer"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
