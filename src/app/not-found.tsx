import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-950 via-gray-900 to-purple-950 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-10 text-center border border-white/10">
        <div className="mb-8">
          <svg
            className="mx-auto h-20 w-20 text-yellow-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M12 12h.01M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          404 - Page Not Found
        </h1>
        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          Oops! The page youre looking for seems to have wandered off. It might
          be lost in the digital void or never existed.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Back to Homepage
          </Link>
          <a
            href="/search"
            className="inline-block w-full px-8 py-3 bg-transparent border border-gray-300 text-gray-200 font-semibold rounded-lg hover:bg-gray-800/50 transition-all duration-300 ease-in-out"
          >
            Search Site
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Need help?{" "}
          <a
            href="/support"
            className="underline hover:text-white transition-colors"
          >
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}
