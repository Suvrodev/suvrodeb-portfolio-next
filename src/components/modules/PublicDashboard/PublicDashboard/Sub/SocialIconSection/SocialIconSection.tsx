"use client";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import goLink from "@/components/utils/Functions/goLink";
import sendEmail from "@/components/utils/Functions/sendEmail";
import goCall from "@/components/utils/Functions/goCall";

const SocialIconSection = () => {
  return (
    <>
      {/* Social Icons */}
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

      {/* Contact Info */}
      <div className="pt-10 text-black text-[15px] z-10 text-center">
        <p>
          <span className="font-bold ">Email: </span>
          <span onClick={() => sendEmail()} className="cursor-pointer">
            {" "}
            suvrodeb.cse@gmail.com
          </span>
        </p>
        <p>
          <span className="font-bold ">Phone: </span>
          <span onClick={() => goCall()} className="cursor-pointer">
            {" "}
            +880 1951912997
          </span>
        </p>
      </div>
    </>
  );
};

export default SocialIconSection;
