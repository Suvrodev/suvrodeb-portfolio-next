"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/app/assets/HeaderImage/myLogo.png";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const AdminDrawerMobileHeader = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-white shadow-md p-4 flex justify-between items-center">
      <Link href={"/"} className="flex items-center gap-x-2">
        <Image
          src={logoImage}
          alt="Suvrodeb"
          width={30}
          className="rounded-full"
        />
        <h1 className="text-[14px] font-bold text-[#6741E9]">Suvrodeb</h1>
      </Link>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  );
};

export default AdminDrawerMobileHeader;
