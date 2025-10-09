import React from "react";

const CheckAdmin = async () => {
  // এখানে তুমি তোমার বাস্তব admin checking logic বসাতে পারো
  // যেমন: JWT token verify, database query ইত্যাদি।
  const isAdmin = Math.random() > 0.5; // temporary fake check

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[90%] sm:w-[400px] text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          🔐 Check Admin Access
        </h2>

        {isAdmin ? (
          <div className="text-green-600 flex flex-col items-center">
            <span className="text-5xl mb-2">✅</span>
            <p className="text-lg font-medium">Access Granted</p>
          </div>
        ) : (
          <div className="text-red-600 flex flex-col items-center">
            <span className="text-5xl mb-2">❌</span>
            <p className="text-lg font-medium">Access Denied</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckAdmin;
