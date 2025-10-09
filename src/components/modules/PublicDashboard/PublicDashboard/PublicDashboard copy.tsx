import Image from "next/image";
import Link from "next/link";
import logoImage from "@/app/assets/HeaderImage/myLogo.png";

import NavLinksSection from "./Sub/NavLinksSection/NavLinksSection";
import SocialIconSection from "./Sub/SocialIconSection/SocialIconSection";
import ChatNowBadge from "./Sub/ChatNowBadge/ChatNowBadge";

const PublicDashboard = () => {
  return (
    <div className="sticky top-0">
      <div className="bg-[#F3F9FF] h-[100vh] w-full flex flex-col items-center text-black overflow-hidden relative">
        <div className="mt-10 mb-8 relative w-full flex flex-col justify-center items-center ">
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

          <div>
            <ChatNowBadge />
          </div>
        </div>

        {/* Link start */}
        <NavLinksSection />
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
