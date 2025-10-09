import { TBlog } from "@/components/types/globalTypes";
import myConfig from "@/components/utils/configFile/myConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Calendar, ArrowLeft, Clock, Tag } from "lucide-react";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: IProps) {
  const id = (await params)?.id;
  const res = await fetch(`${myConfig.baseApi}/blog/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blog: TBlog = data?.data;

  return {
    title: `${blog?.title} | Blog`,
    description: blog?.content?.replace(/<[^>]*>/g, "").substring(0, 160),
    openGraph: {
      title: blog?.title,
      description: blog?.content?.replace(/<[^>]*>/g, "").substring(0, 160),
      images: [blog?.image],
      type: "article",
    },
  };
}

const BlogDetailPage = async ({ params }: IProps) => {
  const id = (await params)?.id;
  const res = await fetch(`${myConfig.baseApi}/blog/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blog: TBlog = data?.data;

  // Calculate reading time (rough estimate)
  const readingTime =
    Math.ceil(blog?.content?.replace(/<[^>]*>/g, "").length / 200) || 5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/blog"
              className="group flex items-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full capitalize">
              {blog?.category}
            </span>
            <span className="text-slate-400">•</span>
            <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            {blog?.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {readingTime} min read
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-1" />
              {blog?.category}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-16 group">
          <Image
            src={blog?.image}
            alt={blog?.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg md:prose-xl max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-slate-900 dark:prose-strong:text-white prose-blockquote:border-blue-200 dark:prose-blockquote:border-slate-700 prose-blockquote:text-slate-600 dark:prose-blockquote:text-slate-400">
          <div
            dangerouslySetInnerHTML={{ __html: blog?.content }}
            className="leading-relaxed"
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/blog"
              className="group inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Articles
            </Link>

            <div className="text-sm text-slate-500 dark:text-slate-400">
              Published on{" "}
              {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </footer>
      </article>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-8 right-8 md:hidden">
        <Link
          href="/blog"
          className="flex items-center justify-center w-14 h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailPage;
