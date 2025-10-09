import React from "react";
import Link from "next/link";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-red-100 text-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <div className="text-red-500 text-7xl mb-4">🚫</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Unauthorized Access
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry! You don’t have permission to view this page.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300"
          >
            ⬅ Go Back Home
          </Link>

          <Link
            href="/login"
            className="border border-red-400 text-red-500 hover:bg-red-50 font-medium py-2 px-5 rounded-lg transition-all duration-300"
          >
            🔐 Login as Admin
          </Link>
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        If you believe this is a mistake, please contact the administrator.
      </p>
    </div>
  );
};

export default UnauthorizedPage;
