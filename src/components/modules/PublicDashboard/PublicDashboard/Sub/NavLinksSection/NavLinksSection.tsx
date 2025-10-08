"use client";
import Link from "next/link";

import { publicDashboardContents } from "@/components/modules/utils/dashboard/publicDashboardContent";

interface Props {
  handleScroll: (id: string) => void;
}

const NavLinksSection = ({ handleScroll }: Props) => {
  return (
    <div className="flex flex-col gap-1 z-10">
      {publicDashboardContents.map(({ id, label, href, icon: Icon }) => (
        <div key={id} className="flex gap-2 items-center">
          <Icon className="opacity-50" />
          <Link
            href={href}
            className="cursor-pointer u-line-effect"
            onClick={() => handleScroll(id)}
          >
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinksSection;
