"use client";

import React from "react";
// import { useRouter } from "next/navigation";
import { clearTokenAction } from "@/components/utils/Function/Actions/Auth/cookiesAction/authService/getCurrentUser";
import { useAppDispatch } from "@/redux/hooks";
import { logOut } from "@/redux/features/auth/authSlice";
// import LogoutIcon from "@mui/icons-material/Logout";
import LogoutSVG from "@/components/svg/LogoutSVG";

const Logout = () => {
  const dispatch = useAppDispatch();

  // const router = useRouter();

  const handleLogout = async () => {
    await clearTokenAction();
    dispatch(logOut());
    // window.location.reload();
    // router.push("/");
    window.location.href = "/";
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-[#EBECF0] text-black rounded-lg hover:bg-[#D0D4DD] transition-colors flex justify-center items-center gap-x-2"
    >
      Logout
      {/* <LogoutIcon /> */}
      <LogoutSVG />
    </button>
  );
};

export default Logout;
