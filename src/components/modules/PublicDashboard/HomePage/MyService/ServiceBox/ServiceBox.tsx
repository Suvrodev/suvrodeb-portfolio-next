"use client";
import "./ServiceBox.css";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TService } from "@/components/types/globalTypes";
import CustomModal from "./CustomModal/CustomModal";
import { AiFillHeart } from "react-icons/ai";

interface IProps {
  service: TService;
}

const ServiceBox = ({ service }: IProps) => {
  // console.log(service);
  const { id, title, desc, image } = service;
  const [open, setOpen] = useState(false);

  const identifier = id;

  /**
   * Bring
   */

  useEffect(() => {
    const CONTAINER = document.querySelector<HTMLElement>(
      `.glow-container-${identifier}`
    );
    const CARDS = document.querySelectorAll<HTMLElement>(
      `.glow-card-${identifier}`
    );

    if (!CONTAINER || CARDS.length === 0) return; // Fix: Prevent errors if elements are null

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: MouseEvent) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty("--active", "1");
        } else {
          CARD.style.setProperty("--active", CONFIG.opacity.toString());
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event.y - CARD_CENTER[1], event.x - CARD_CENTER[0]) *
            180) /
          Math.PI;
        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty("--start", (ANGLE + 90).toString());
      }
    };

    document.body.addEventListener("pointermove", UPDATE);

    const RESTYLE = () => {
      if (!CONTAINER) return; // Fix: Prevent errors if null

      CONTAINER.style.setProperty("--gap", CONFIG.gap.toString());
      CONTAINER.style.setProperty("--blur", CONFIG.blur.toString());
      CONTAINER.style.setProperty("--spread", CONFIG.spread.toString());
      CONTAINER.style.setProperty(
        "--direction",
        CONFIG.vertical ? "column" : "row"
      );
    };

    RESTYLE();
    UPDATE(new MouseEvent("mousemove"));

    // Cleanup event listener
    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);
  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer  border-[#2a2e5a] transition-all duration-300 relative bg-transparent  rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {/* {children} */}
        <div className="w-auto h-[250px] shadow-lg p-4 relative">
          <div className="flex flex-col gap-6">
            <h1 className="text-xl text-black font-bold">{title}</h1>
            <p className="">{desc}</p>
          </div>
          {/* ✅ Cute Button */}
          <button
            onClick={() => setOpen(true)}
            className="absolute bottom-6 left-4 flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white px-5 py-2 rounded-md shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {/* <AiOutlineHeart className="text-white text-lg" /> */}
            <AiFillHeart className="text-white text-lg" />
            <span>Read More</span>
          </button>
        </div>
      </article>

      {/* ✅ Custom Modal */}
      <CustomModal isOpen={open} onClose={() => setOpen(false)} title={title}>
        <Image
          src={image}
          alt="Service Image"
          width={450}
          height={400}
          className="rounded-md mx-auto"
        />
        <p className="mt-6">{desc}</p>
      </CustomModal>
    </div>
  );
};

export default ServiceBox;
