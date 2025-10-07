"use client";

import Image from "next/image";
import { useState } from "react";

import logoImage from "@/app/assets/HeaderImage/myLogo.png";
import MobileFooterOption from "./MobileFooterOption/MobileFooterOption";

const MobileFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" w-full flex justify-between items-center py-2 px-5 bg-[#0F172A]  ">
      <Image
        src={logoImage}
        alt="Suvrodeb"
        width={50}
        height={50}
        className="w-[50px] h-[50px] rounded-full"
      />
      <div>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed z-20 bottom-0 left-0 w-full transition-all duration-700">
          <MobileFooterOption />
        </div>
      )}
    </div>
  );
};

export default MobileFooter;
