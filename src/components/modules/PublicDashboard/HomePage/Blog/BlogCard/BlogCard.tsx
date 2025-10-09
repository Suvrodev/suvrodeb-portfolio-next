"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Trash2, CalendarDays } from "lucide-react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { TBlog } from "@/components/types/globalTypes";
import { formatDate } from "@/components/utils/Functions/formatDate";

interface IProps {
  blog: TBlog;
  admin?: boolean;
}

const BlogCard = ({ blog, admin = false }: IProps) => {
  const { _id, title, image, category, content, createdAt } = blog;

  const router = useRouter();

  const [trimmedTitle, setTrimmedTitle] = useState("");
  const [trimmedContent, setTrimmedContent] = useState("");

  const stripHtml = (html: string) => html?.replace(/<[^>]*>?/gm, "") || "";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const shortTitle =
      title.length > 60 ? title.substring(0, 60) + "..." : title;
    setTrimmedTitle(shortTitle);

    const cleanText = stripHtml(content);
    const shortContent =
      cleanText.length > 100 ? cleanText.substring(0, 100) + "..." : cleanText;
    setTrimmedContent(shortContent);
  }, [title, content]);

  const handleGoBlogDetail = (_id: string) => {
    // if (path !== "/blog") return;
    router.push(`/blog/${_id}`);
  };

  return (
    <div
      data-aos="fade-up"
      onClick={() => handleGoBlogDetail(_id)}
      className="relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group transform 
      transition-all ease-[cubic-bezier(0.25,0.8,0.25,1)]  hover:-translate-y-2 
      hover:shadow-2xl duration-700"
    >
      {/* Blog Image */}
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-[1.03] group-hover:brightness-105"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5 flex flex-col justify-between min-h-[230px]">
        <h2
          className="text-[18px] font-semibold text-gray-800 mb-3 leading-snug 
          transition-colors duration-500 ease-in-out group-hover:text-[#232D52] 
          min-h-[48px] line-clamp-2"
        >
          {trimmedTitle}
        </h2>

        <p className="text-[15px] text-gray-600 mb-4 leading-relaxed line-clamp-3 min-h-[65px]">
          {trimmedContent}
        </p>

        <div className="flex flex-wrap justify-between items-center mt-auto">
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
            {category}
          </span>

          <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 sm:mt-0">
            <CalendarDays className="w-4 h-4 text-blue-600" />
            <span className="italic font-medium">{formatDate(createdAt)}</span>
          </div>
        </div>
      </div>

      {admin && (
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <Trash2 className="text-red-500 font-bold" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
