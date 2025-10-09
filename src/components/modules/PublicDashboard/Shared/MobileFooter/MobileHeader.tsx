"use client";
import "./MobileFooter.css";
import Image from "next/image";

import logoImage from "@/app/assets/HeaderImage/myLogo.png";
import MobileFooterOption from "./MobileFooterOption/MobileFooterOption";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setIsOpenMobileFooter } from "@/redux/features/Resume/ResumeSlice";
import { motion, AnimatePresence } from "framer-motion";

const MobileHeader = () => {
  const { isOpen } = useAppSelector((state) => state.mobileFooterStore);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setIsOpenMobileFooter(!isOpen));
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

      {/* Animated Footer Option */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="footer"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed bottom-0 left-0 w-full z-20"
          >
            <MobileFooterOption />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;
