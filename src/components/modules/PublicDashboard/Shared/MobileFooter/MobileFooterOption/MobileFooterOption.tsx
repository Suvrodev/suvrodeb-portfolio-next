"use client";
import { publicDashboardContents } from "@/components/modules/utils/dashboard/publicDashboardContent";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileFooterOption = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#130f49] text-white py-5 w-full z-50  pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around">
        {publicDashboardContents.map(
          ({ id, label, href, icon: Icon, iconSize, mobileIconSize }) => {
            const isLucide = !("muiName" in Icon);

            return (
              <Link
                key={id}
                href={href}
                className="flex flex-col justify-center items-center h-[60px] cursor-pointer  u-line-effect "
              >
                <div className=" min-h-[30px] ">
                  {isLucide ? (
                    <Icon
                      size={isMobile ? mobileIconSize : iconSize}
                      className="opacity-70 mhI"
                    />
                  ) : (
                    <Icon
                      className="opacity-70 mhI"
                      style={{
                        fontSize: isMobile ? mobileIconSize : iconSize,
                      }}
                    />
                  )}
                </div>
                <p className="text-[10px] mt-1 ">{label}</p>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MobileFooterOption;
