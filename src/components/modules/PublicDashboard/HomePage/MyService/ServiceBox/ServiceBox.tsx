"use client";
import "./ServiceBox.css";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TService } from "@/components/types/globalTypes";
interface IProps {
  service: TService;
}

const ServiceBox = ({ service }: IProps) => {
  // console.log(service);
  const { id, title, desc, image } = service;

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

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
    <div>
      {/* Modal end */}
      <div className={`glow-container-${identifier} glow-container`}>
        <article
          className={`glow-card glow-card-${identifier} h-fit cursor-pointer  border-[#2a2e5a] transition-all duration-300 relative bg-transparent  rounded-xl hover:border-transparent w-full`}
        >
          <div className="glows"></div>
          {/* {children} */}
          <div className="w-auto h-[250px] shadow-lg p-4 relative">
            <div className="flex flex-col gap-6">
              <h1 className="text-xl text-black font-bold">{title}</h1>
              <p>{desc}</p>
            </div>
            <button
              className="btn btn-primary  absolute bottom-10 "
              onClick={showModal}
            >
              Read More
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ServiceBox;
