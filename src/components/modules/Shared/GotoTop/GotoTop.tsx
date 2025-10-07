"use client";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";
const GotoTop = () => {
  const [showTopButton, setshowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshowTopButton(true);
      } else {
        setshowTopButton(false);
      }
    });
  }, []);
  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showTopButton && (
        <div
          className="fixed bottom-[30px] right-[20px] w-[50px] h-[50px] bg-green-500 rounded-md flex items-center justify-center text-white p-5"
          onClick={handleGoTop}
        >
          <ArrowUpwardIcon />
        </div>
      )}
    </div>
  );
};

export default GotoTop;
