"use client";

import { TSkill } from "@/components/types/globalTypes";
import Image from "next/image";

interface IProps {
  skill: TSkill;
}

const SkillBox = ({ skill }: IProps) => {
  const { title, svgImage } = skill;
  const isSvgComponent = typeof svgImage === "function";
  const SvgIcon = isSvgComponent
    ? (svgImage as unknown as React.FC<React.SVGProps<SVGSVGElement>>)
    : null;

  return (
    // <div className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] bg-[#130f49] rounded-lg flex flex-col items-center justify-center gap-1 md:gap-4">
    //   <Image
    //     src={image}
    //     alt="skill Image"
    //     height={25}
    //     width={25}
    //     className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]"
    //   />
    //   <h1 className="text-white font-bold text-[12px] md:text-xl">{title}</h1>
    // </div>

    <div className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] bg-[#130f49] rounded-lg flex flex-col items-center justify-center gap-1 md:gap-4 hover:bg-[#1a1660] transition-colors duration-300">
      {isSvgComponent && SvgIcon ? (
        <SvgIcon className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]" />
      ) : (
        <Image
          src={svgImage as string}
          alt={`${title} logo`}
          height={50}
          width={50}
          className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]"
        />
      )}
      <h1 className="text-white font-bold text-[12px] md:text-xl">{title}</h1>
    </div>
  );
};

export default SkillBox;
