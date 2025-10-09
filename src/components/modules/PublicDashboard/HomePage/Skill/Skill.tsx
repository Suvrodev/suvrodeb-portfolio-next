"use client";
import TailwindSVG from "@/components/utils/svg/Skills/TailwindSVG";
import Marquee from "react-fast-marquee";
import SkillBox from "./SkillBox/SkillBox";
import TypeScriptSVG from "@/components/utils/svg/Skills/TypeScriptSVG";
import HtmlSVG from "@/components/utils/svg/Skills/HtmlSVG";
import CssSVG from "@/components/utils/svg/Skills/CssSVG";
import JS_SVG from "@/components/utils/svg/Skills/JS_SVG";
import ReactSVG from "@/components/utils/svg/Skills/ReactSVG";
import NextSVG from "@/components/utils/svg/Skills/NextSVG";
import GoSVG from "@/components/utils/svg/Skills/GoSVG";
import FigmaSVG from "@/components/utils/svg/Skills/FigmaSVG";
import FirebaseSVG from "@/components/utils/svg/Skills/FirebaseSVG";
import StrapiSVG from "@/components/utils/svg/Skills/StrapiSVG";
import GitSVG from "@/components/utils/svg/Skills/GitSVG";
import DockerSVG from "@/components/utils/svg/Skills/DockerSVG";
import BootstrapSVG from "@/components/utils/svg/Skills/BootstrapSVG";
import MySqlSVG from "@/components/utils/svg/Skills/MySqlSVG";
import { TSkill } from "@/components/types/globalTypes";
import PostgressSql from "@/components/utils/svg/Skills/PostgressSql";
import AWS_SVG from "@/components/utils/svg/Skills/AWS_SVG";
import MaterialSVG from "@/components/utils/svg/Skills/MaterialSVG";
import PhpSVG from "@/components/utils/svg/Skills/PhpSVG";
import PhotoshopSVG from "@/components/utils/svg/Skills/PhotoshopSVG";
import IllustratorSVG from "@/components/utils/svg/Skills/IllustratorSVG";
import PrProSVG from "@/components/utils/svg/Skills/PrProSVG";
import MongooseSVG from "@/components/utils/svg/Skills/MongooseSVG";
import VSCodeSVG from "@/components/utils/svg/Skills/VSCodeSVG";
import MongoDbSVG from "@/components/utils/svg/Skills/MongoDbSVG";

const Skill = () => {
  const skillsArray = [
    { id: 1, title: "HTML", svgImage: HtmlSVG },
    { id: 2, title: "CSS", svgImage: CssSVG },
    { id: 3, title: "Tailwind", svgImage: TailwindSVG },
    { id: 4, title: "PHP", svgImage: PhpSVG },
    { id: 5, title: "Bootstrap", svgImage: BootstrapSVG },
    { id: 6, title: "Javascript", svgImage: JS_SVG },
    { id: 7, title: "Git", svgImage: GitSVG },
    { id: 8, title: "Typescript", svgImage: TypeScriptSVG },
    { id: 9, title: "React", svgImage: ReactSVG },
    { id: 10, title: "Next JS", svgImage: NextSVG },
    { id: 11, title: "MongoDB", svgImage: MongoDbSVG },
    { id: 12, title: "Mongoose", svgImage: MongooseSVG },
    { id: 13, title: "MySQL", svgImage: MySqlSVG },
    { id: 14, title: "PostgreSQL", svgImage: PostgressSql },
    { id: 15, title: "AWS", svgImage: AWS_SVG },
    { id: 16, title: "Docker", svgImage: DockerSVG },
    { id: 17, title: "Go", svgImage: GoSVG },
    { id: 18, title: "Figma", svgImage: FigmaSVG },
    { id: 19, title: "Firebase", svgImage: FirebaseSVG },
    { id: 20, title: "MaterialUI", svgImage: MaterialSVG },
    { id: 21, title: "Strapi", svgImage: StrapiSVG },
    { id: 22, title: "VS Code", svgImage: VSCodeSVG },
    { id: 23, title: "Photoshop", svgImage: PhotoshopSVG },
    { id: 24, title: "Premium pro", svgImage: PrProSVG },
    { id: 25, title: "Illustrator", svgImage: IllustratorSVG },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold pText mb-10">Skill</h1>

      <div className="w-full mt-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          <div className="flex gap-5 ml-5">
            {skillsArray.map((skill: TSkill, idx: number) => (
              <SkillBox skill={skill} key={idx} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skill;
