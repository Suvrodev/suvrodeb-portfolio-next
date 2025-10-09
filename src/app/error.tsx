"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for debugging
    console.error("Error occurred:", error?.message || error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center border border-white/20">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-red-400 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
          Something Went Wrong
        </h1>
        <p className="text-gray-300 font-bold mb-6 leading-relaxed bg-red-600 py-4 px-10 rounded-md">
          {error?.message
            ? `Error: ${error.message}`
            : "Oops! An unexpected error occurred. Don’t worry, we’re on it."}
        </p>
        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="inline-block w-full px-6 py-3 bg-red-400 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Try Again
          </button>
          <Link
            href="/support"
            className="inline-block w-full px-6 py-3 bg-transparent border border-gray-300 text-gray-200 font-semibold rounded-lg hover:bg-gray-800/50 transition-all duration-300 ease-in-out"
          >
            Contact Support
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          Return to{" "}
          <Link
            href="/"
            className="underline hover:text-white transition-colors"
          >
            Homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
