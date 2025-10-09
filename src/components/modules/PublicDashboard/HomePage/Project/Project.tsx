import React from "react";
import ProjectBox from "./ProjectBox/ProjectBox";
import { TProject } from "@/components/types/globalTypes";
import config from "@/components/utils/configFile/myConfig";
import myConfig from "@/components/utils/configFile/myConfig";

const Project = async () => {
  const res = await fetch(`${config.baseApi}/projects/`, {
    // cache: "force-cache",
    next: {
      revalidate: Number(myConfig.revalidateTime),
      tags: ["projects"],
    },
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const projects = data?.data;
  console.log("Data: ", data);
  console.log("Projects: ", projects);
  return (
    <div>
      <h1 className="text-2xl font-bold pText mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects?.map((project: TProject, idx: number) => (
          <ProjectBox key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
