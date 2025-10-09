"use client";

import { motion } from "framer-motion";

const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

const MessageLoading = () => {
  return (
    <div className="h-screen bg-[#0A192F] text-white flex flex-col md:flex-row overflow-hidden border border-gray-700 shadow-xl">
      {/* Left Sidebar Skeleton */}
      <div className="hidden md:flex flex-col w-[28%] border-r border-gray-700 bg-[#0E1C2E]/80 p-4">
        <div className="h-6 w-32 bg-gray-700/50 rounded mb-5 animate-pulse" />

        {[...Array(6)].map((_, idx) => (
          <motion.div
            key={idx}
            className={`flex justify-between items-center mb-3 p-3 rounded-md bg-[#142236] ${shimmer}`}
          >
            <div className="flex flex-col gap-2 w-[80%]">
              <div className="h-3 w-1/2 bg-gray-600/60 rounded" />
              <div className="h-2 w-1/3 bg-gray-700/60 rounded" />
              <div className="h-2 w-1/4 bg-gray-700/60 rounded" />
            </div>
            <div className="h-4 w-4 bg-gray-600/70 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Right Detail Skeleton */}
      <div className="flex-1 bg-gradient-to-b from-[#0A192F] to-[#091624] p-6 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
          <div className="h-4 w-20 bg-gray-700/50 rounded" />
          <div className="h-4 w-44 bg-gray-600/50 rounded" />
        </div>

        <div className="flex-1 bg-[#0E1C2E]/70 border border-gray-700 rounded-lg p-5 overflow-hidden">
          <div className="flex flex-col gap-3">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="h-3 bg-gray-700/60 rounded w-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageLoading;
