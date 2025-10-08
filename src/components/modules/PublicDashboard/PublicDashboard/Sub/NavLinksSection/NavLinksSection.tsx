"use client";
import Link from "next/link";

import { publicDashboardContents } from "@/components/modules/utils/dashboard/publicDashboardContent";
import { useEffect, useState } from "react";

interface Props {
  handleScroll: (id: string) => void;
}

const NavLinksSection = ({ handleScroll }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-1 z-10">
      {publicDashboardContents.map(
        ({ id, label, href, icon: Icon, iconSize, mobileIconSize }) => {
          const isLucide = !("muiName" in Icon);

          return (
            <div key={id} className="flex gap-2 items-center">
              {isLucide ? (
                <Icon
                  size={isMobile ? mobileIconSize : iconSize}
                  className="opacity-50"
                />
              ) : (
                <Icon
                  className="opacity-50"
                  style={{
                    fontSize: isMobile ? mobileIconSize : iconSize,
                  }}
                />
              )}

              <Link
                href={href}
                className="cursor-pointer u-line-effect"
                onClick={() => handleScroll(id)}
              >
                {label}
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default NavLinksSection;
