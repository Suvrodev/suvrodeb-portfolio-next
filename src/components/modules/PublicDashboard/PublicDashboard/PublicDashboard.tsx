"use client";
import "./PublicDashboard.css";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import {
  Home as HomeIcon,
  Info as InfoIcon,
  RssFeed as RssFeedIcon,
  Email as EmailIcon,
  Build as BuildIcon, // 🛠️ for Skill
  Psychology as PsychologyIcon, // 🧠 optional alternative
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/app/assets/HeaderImage/myLogo.png";
import goLink from "@/components/utils/Functions/goLink";
import sendEmail from "@/components/utils/Functions/sendEmail";
import goCall from "@/components/utils/Functions/goCall";

const PublicDashboard = () => {
  return (
    <div className="sticky top-0">
      <div className="bg-[#F3F9FF] h-[100vh] w-full flex flex-col items-center text-black overflow-hidden relative">
        <div className="mt-10 mb-8">
          <Link href={"banner"} className="cursor-pointer z-10">
            <div>
              <Image
                src={logoImage}
                alt=""
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
        <div className="flex flex-col gap-1 z-10">
          {/* Link Items */}
          <div className="flex gap-2 items-center">
            <HomeIcon className="opacity-50" />
            <Link href="banner" className="cursor-pointer u-line-effect">
              Home
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <InfoIcon className="opacity-50" />
            <Link href="about" className="cursor-pointer u-line-effect">
              About me
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <PsychologyIcon className="opacity-50" />
            <Link href="skill" className="cursor-pointer u-line-effect">
              Skill
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <ManageAccountsIcon className="opacity-50" />
            <Link href="service" className="cursor-pointer u-line-effect">
              Service
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <RssFeedIcon className="opacity-50" />
            <Link href="blog" className="cursor-pointer u-line-effect">
              Blog
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <EmailIcon className="opacity-50" />
            <Link href="contact" className="cursor-pointer u-line-effect">
              Contact
            </Link>
          </div>

          {/* Other Links */}
          {/* ... */}
        </div>
        {/* Link End */}

        {/* <button
          className="btn btn-primary z-50"
          onClick={() => handleCheck("1st")}
        >
          Press
        </button> */}

        {/* Icon Start */}
        <div className="flex gap-4 items-center mt-8 z-40">
          <div onClick={() => goLink("https://www.facebook.com/suvrodev.1122")}>
            <FaFacebookF />
          </div>

          <Link href="" onClick={() => goLink("https://x.com/suvrodev1408")}>
            <FaTwitter />
          </Link>

          <Link
            href=""
            onClick={() =>
              goLink("https://www.linkedin.com/in/suvrodeb-howlader/")
            }
          >
            <LinkedInIcon />
          </Link>
          <Link href="" onClick={() => goLink("https://github.com/Suvrodev")}>
            <GitHubIcon />
          </Link>

          <Link href="" onClick={() => goLink("https://Wa.me/+8801518748081")}>
            <FaWhatsapp />
          </Link>
        </div>
        {/* Icon End */}

        {/* Mail Number Start */}
        <div className="pt-10 text-black text-[15px] z-10 text-center">
          <p>
            <span className="font-bold">Email: </span>
            <span onClick={() => sendEmail()}> suvrodeb.cse@gmail.com</span>
          </p>
          <p>
            <span className="font-bold">Phone: </span>
            <span onClick={() => goCall()}> +880 1951912997</span>
          </p>
        </div>
        {/* Mail Number End */}

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
