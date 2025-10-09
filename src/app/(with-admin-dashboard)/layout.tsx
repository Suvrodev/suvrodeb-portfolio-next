"use client";

import AdminDrawer from "@/components/modules/Shared/Drawer/AdminDrawer/AdminDrawer";
import AdminDrawerMobileHeader from "@/components/modules/Shared/Drawer/AdminDrawer/AdminDrawerMobileHeader/AdminDrawerMobileHeader";
import { useEffect, useState } from "react";

export interface ILayout {
  children: React.ReactNode;
}

const PublicHeaderLayout = ({ children }: ILayout) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (isMobile === null) return null;

  return (
    <div className="relative flex ">
      {/* Drawer */}
      <AdminDrawer isOpen={isMobile ? isOpen : true} setIsOpen={setIsOpen} />

      {/* Mobile Header */}
      {isMobile && (
        <AdminDrawerMobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      )}

      {/* Page content */}
      <div
        className={`flex-1 min-w-0 ${
          isMobile ? "mt-[70px] " : "" /* desktop drawer width = 64 */
        }`}
      >
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 land">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PublicHeaderLayout;
