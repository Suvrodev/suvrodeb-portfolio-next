import myConfig from "@/components/utils/configFile/myConfig";
import React from "react";
import DownloadResume from "../DownloadResume";

const FetchResume = async () => {
  const res = await fetch(`${myConfig.baseApi}/resume/${myConfig.resume_ID}`, {
    // cache: "force-cache",
    next: {
      revalidate: Number(myConfig.revalidateTime),
      tags: ["resume"],
    },
  });

  const data = await res.json();
  const resume = data?.data?.resume;
  console.log("Resume res: ", resume);
  return (
    <div className="">
      <DownloadResume base64Data={resume} />
    </div>
  );
};

export default FetchResume;
