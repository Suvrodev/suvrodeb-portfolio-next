import { TEducation } from "@/components/types/globalTypes";
import React from "react";

interface IProps {
  education: TEducation;
}

const TimeLine = ({ education }: IProps) => {
  return (
    <div className="flex items-start md:items-center gap-4 ">
      <div className="flex items-center gap-4 w-auto md:w-[35%]  ">
        <p className="w-[20px] h-[20px] rounded-full bg-gradient-to-tr from-[#4A6FA5] via-[#6A8FBF] to-[#9BB8E0] relative right-[10px] top-3 md:top-0"></p>
        <p
          className={`
       bg-gradient-to-tr from-[#3657A6] via-[#4F77BE] to-[#7CA9E8]
          w-[140px]   text-white py-2 px-4 rounded-2xl hidden md:flex justify-center`}
        >
          {education?.year}
        </p>
      </div>
      <div className="flex flex-col gap-5 md:gap-0 w-auto md:w-[65%]">
        <p className="bg-gradient-to-tr from-[#4A6FA5] via-[#6A8FBF] to-[#9BB8E0] text-white py-2 px-4 rounded-2xl  md:hidden">
          {education?.year}
        </p>
        <p className="text-xl font-bold pText">{education?.institute}</p>
        <p className="pText">{education?.topic}</p>
      </div>
    </div>
  );
};

export default TimeLine;
