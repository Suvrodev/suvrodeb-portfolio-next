"use client";

import MobileFooter from "@/components/modules/PublicDashboard/MobileFooter/MobileFooter";
import PublicDashboard from "@/components/modules/PublicDashboard/PublicDashboard/PublicDashboard";
import Footer from "@/components/modules/Shared/Footer/Footer";
import GotoTop from "@/components/modules/Shared/GotoTop/GotoTop";
import SocialIconInBody from "@/components/modules/Shared/SocialIconInBody/SocialIconInBody";

interface IProps {
  children: React.ReactNode;
}

const PublicDashboardLayout = ({ children }: IProps) => {
  console.log("Public Dashboard Layout");
  return (
    <div className="flex">
      <div className="w-[20%] hidden md:block h-[100vh] sticky top-0 ">
        <PublicDashboard />
      </div>
      <div className="w-full md:w-[80%] bg-[#1c2854] ">
        <div className="md:hidden sticky top-0 z-50">
          <MobileFooter />
        </div>
        <div>{children}</div>
        <div className="sticky top-0 bg-yellow-500">
          <Footer />
        </div>
      </div>
      <div>
        <SocialIconInBody />
        <GotoTop />
      </div>
    </div>
  );
};

export default PublicDashboardLayout;
