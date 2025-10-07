import { TProject } from "@/components/types/globalTypes";
import React from "react";
import ProjectBox from "./ProjectBox/ProjectBox";
import { baseUrl } from "@/components/utils/Variable/baseApi";

const Project = async () => {
  const res = await fetch(`${baseUrl}/project/`, {
    // cache: "force-cache",
    next: { revalidate: 604800 }, // 7 days
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const projects = data?.data;
  // console.log("Projects: ", projects);
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
