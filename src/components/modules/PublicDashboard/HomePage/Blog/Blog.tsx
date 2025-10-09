import { TBlog } from "@/components/types/globalTypes";
import myConfig from "@/components/utils/configFile/myConfig";
import React from "react";
import BlogCard from "./BlogCard/BlogCard";

const Blog = async () => {
  const res = await fetch(`${myConfig.baseApi}/blog`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const blogs = data?.data;
  console.log("Blog: ", blogs);
  return (
    <div className="">
      <h1 className="text-2xl font-bold pText mb-10 text-white">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  justify-items-center gap-4 ">
        {blogs.map((blog: TBlog, idx: number) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
