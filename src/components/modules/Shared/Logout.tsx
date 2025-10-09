"use client";

import React from "react";
// import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { clearTokenAction } from "@/components/actions/authActions/authService/getCurrentUser";
import { logOut } from "@/redux/features/AuthManagement/authSlice";
import LogoutSVG from "@/components/utils/svg/LogoutSVG";
// import LogoutIcon from "@mui/icons-material/Logout";

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
