"use client";
import "./PublicDashboard.css";

import Image from "next/image";
import Link from "next/link";
import logoImage from "@/app/assets/HeaderImage/myLogo.png";

import { useRouter } from "next/navigation";
import NavLinksSection from "./Sub/NavLinksSection/NavLinksSection";
import SocialIconSection from "./Sub/SocialIconSection/SocialIconSection";

const PublicDashboard = () => {
  const router = useRouter();

  // const handleScroll = (id: string) => {
  //   // Same page e scroll korar jonno
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   } else {
  //     // Jodi onno page theke scroll korte hoy
  //     router.push(`/#${id}`);
  //     setTimeout(() => {
  //       const section = document.getElementById(id);
  //       if (section) section.scrollIntoView({ behavior: "smooth" });
  //     }, 50);
  //   }
  // };

  /**
   * Sccroll-2
   */

  // const handleScroll = (id: string) => {
  //   // remove # if accidentally passed
  //   const cleanId = id.replace("#", "");
  //   const section = document.getElementById(cleanId);

  //   if (section) {
  //     // ✅ Precise smooth scroll with offset correction
  //     const yOffset = -80; // top header or sticky offset adjust
  //     const y =
  //       section.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   } else {
  //     // ✅ if not found (different route), push then scroll after DOM loads
  //     router.push(`/#${cleanId}`);
  //     setTimeout(() => {
  //       const target = document.getElementById(cleanId);
  //       if (target) {
  //         const yOffset = -80;
  //         const y =
  //           target.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //         window.scrollTo({ top: y, behavior: "smooth" });
  //       }
  //     }, 5);
  //   }
  // };

  /**
   * Scroll:3
   */

  // const handleScroll = (id: string) => {
  //   const cleanId = id.replace("#", "");
  //   const section = document.getElementById(cleanId);

  //   if (section) {
  //     // Same page scroll
  //     const yOffset = -80;
  //     const y =
  //       section.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   } else {
  //     // Different route e gele push kore, page load howar pore scroll
  //     router.push(`/#${cleanId}`);

  //     const scrollAfterLoad = () => {
  //       const target = document.getElementById(cleanId);
  //       if (target) {
  //         const yOffset = -80;
  //         const y =
  //           target.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //         window.scrollTo({ top: y, behavior: "smooth" });
  //         window.removeEventListener("load", scrollAfterLoad);
  //       }
  //     };

  //     // Add listener to wait until new route fully loaded
  //     window.addEventListener("load", scrollAfterLoad);
  //   }
  // };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" }); // instant smooth scroll
    } else {
      router.push(`/#${id}`);

      // wait until the section is actually available in DOM
      const tryScroll = () => {
        const sectionAfter = document.getElementById(id);
        if (sectionAfter) {
          const yOffset = -80;
          const y =
            sectionAfter.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else {
          // check again in the next animation frame (very fast loop)
          requestAnimationFrame(tryScroll);
        }
      };

      requestAnimationFrame(tryScroll);
    }
  };

  return (
    <div className="sticky top-0">
      <div className="bg-[#F3F9FF] h-[100vh] w-full flex flex-col items-center text-black overflow-hidden relative">
        <div className="mt-10 mb-8">
          <Link href={"banner"} className="cursor-pointer z-10">
            <div>
              <Image
                src={logoImage}
                alt="Suvrodeb"
                className="w-[150px] h-[150px] rounded-full"
              />
            </div>
          </Link>
          <h1
            className={`text-center mt-2 font-bold text-[24px] animate-text resizeForHeader z-10 `}
          >
            Suvrodeb
          </h1>
        </div>

        {/* Link start */}
        <NavLinksSection handleScroll={handleScroll} />
        {/* Link End */}

        {/* Icon Start */}
        <SocialIconSection />
        {/* Icon End */}

        {/* Footer */}
        <div className="absolute h-[100px] w-full bottom-0 flex justify-center z-0">
          <h1 className="z-20 bottom-1 absolute text-white text-center">
            Copyright © 2024 Suvrodeb <br /> All rights reserved.
          </h1>
          <div>
            <div className="waveHeader"></div>
            <div className="waveHeader"></div>
            <div className="waveHeader"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicDashboard;
