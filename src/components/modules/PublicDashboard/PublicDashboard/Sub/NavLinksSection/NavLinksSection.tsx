"use client";
import Link from "next/link";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  ManageAccounts as ManageAccountsIcon,
  Psychology as PsychologyIcon,
  Work as WorkIcon,
  RssFeed as RssFeedIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

interface Props {
  handleScroll: (id: string) => void;
}

const NavLinksSection = ({ handleScroll }: Props) => {
  return (
    <div className="flex flex-col gap-1 z-10">
      <div className="flex gap-2 items-center">
        <HomeIcon className="opacity-50" />
        <Link
          href="#banner"
          className="cursor-pointer u-line-effect"
          onClick={() => handleScroll("home")}
        >
          Home
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <InfoIcon className="opacity-50" />
        <Link
          href="#about"
          className="cursor-pointer u-line-effect"
          onClick={() => handleScroll("about")}
        >
          About me
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <ManageAccountsIcon className="opacity-50" />
        <Link
          href="#service"
          className="cursor-pointer u-line-effect"
          onClick={() => handleScroll("service")}
        >
          Service
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <PsychologyIcon className="opacity-50" />
        <Link
          href="#skill"
          className="cursor-pointer u-line-effect"
          onClick={() => handleScroll("skill")}
        >
          Skill
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <WorkIcon className="opacity-50" />
        <Link
          href="#project"
          className="cursor-pointer u-line-effect"
          onClick={() => handleScroll("project")}
        >
          Project
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <RssFeedIcon className="opacity-50" />
        <Link
          href="#blog"
          className="cursor-pointer u-line-effect"
          onClick={() => handleScroll("blog")}
        >
          Blog
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <EmailIcon className="opacity-50" />
        <Link
          href="#contact"
          className="cursor-pointer u-line-effect"
          onClick={() => handleScroll("contact")}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavLinksSection;
