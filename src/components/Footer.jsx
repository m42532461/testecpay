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
    <div className="bg-bg text-white flex flex-col px-24">
      <div className="flex justify-between pt-[120px] pb-[75px] w-full items-center border-b-[1px] border-white">
        <h1 className="text-[45px] leading-[60px] max-w-[60%] text-start">
          Start your business today for $0+ state fees.
        </h1>
        <div className="flex gap-5">
          <button className="rounded-full bg-white text-bg text-[19px] py-5 px-12">
            Get Started
          </button>
          <button className="rounded-full bg-[#3A5F5F] text-[#FCFBFF] text-[19px] py-5 px-12">
            Contact Sales
          </button>
        </div>
      </div>
      <div className="flex justify-between pt-[90px] pb-[65px]">
        <div className="text-start gap-[30px] flex flex-col">
          <h1 className="text-[26px] font-bold">furni.shop</h1>
          <p className="text-[#EEEEEE] text-[15px] leading-[27px] max-w-[220px]">
            Optix seamlessly connects your members with the community,
            resources.
          </p>
          <div className="flex gap-[25px] text-[20px]">
            <ImFacebook />
            <ImPinterest />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
        <div className="flex gap-20">
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
                  <li key={sub + subIndex} className="text-[15px] ">
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
