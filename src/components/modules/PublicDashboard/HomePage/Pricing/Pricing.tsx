import React from "react";
import "./Pricing.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const Pricing = () => {
  return (
    <div
      className="py-16 md:py-28 bg-gradient-to-b from-gray-50 to-gray-200"
      id="pricing"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
        Choose Your Plan
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* ================= Basic Package ================= */}
          <div className="group relative h-auto md:h-[560px] perspective-[1000px] transform-gpu">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
              {/* FRONT SIDE */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl md:shadow-2xl overflow-hidden [backface-visibility:hidden]">
                <div className="h-40 bg-gradient-to-r from-amber-400 to-red-600 clip-path-polygon"></div>
                <h4 className="absolute top-20 right-4 text-xl md:text-2xl font-bold text-white uppercase tracking-wider bg-gradient-to-r from-amber-400/95 to-red-600/95 py-3 px-6 rounded-lg shadow-sm">
                  Basic Package
                </h4>
                <div className="p-6 pt-12">
                  <ul className="space-y-4 text-gray-700 text-center text-base md:text-lg">
                    <li className="flex items-center justify-center gap-3">
                      <CloseIcon className="text-red-500 text-xl" /> Revisions
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CloseIcon className="text-red-500 text-xl" /> Server
                      Upload
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" />{" "}
                      Responsive Design
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" /> Basic 1
                      Page
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" /> Browser
                      Compatibility
                    </li>
                  </ul>
                  {/* Mobile view */}
                  <div className="md:hidden mt-6 p-6 bg-gradient-to-r from-amber-400/10 to-red-600/10 text-center">
                    <p className="text-lg uppercase font-semibold text-gray-800">
                      Only
                    </p>
                    <p className="text-4xl font-light text-gray-900 mb-4">
                      $99
                    </p>
                    <a
                      href="#"
                      className="inline-block px-8 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-400 to-red-600 rounded-2xl shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="text-center text-white">
                  <p className="text-lg uppercase font-semibold tracking-wide">
                    Only
                  </p>
                  <p className="text-6xl font-light mb-8">$99</p>
                  <a
                    href="#"
                    className="inline-block px-8 py-3 bg-white text-red-500 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Standard Package ================= */}
          <div className="group relative h-auto md:h-[560px] perspective-[1000px] md:mt-12 transform-gpu">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
              {/* FRONT SIDE */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border-2 border-teal-100 [backface-visibility:hidden]">
                <div className="h-40 bg-gradient-to-r from-teal-500 to-indigo-700 clip-path-polygon"></div>
                <h4 className="absolute top-20 right-4 text-xl md:text-2xl font-bold text-white uppercase tracking-wider bg-gradient-to-r from-teal-500/95 to-indigo-700/95 py-3 px-6 rounded-lg shadow-sm">
                  Standard Package
                </h4>
                <div className="p-6 pt-12">
                  <ul className="space-y-4 text-gray-700 text-center text-base md:text-lg">
                    <li className="flex items-center justify-center gap-3">
                      <CloseIcon className="text-red-500 text-xl" /> Revisions
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" /> Server
                      Upload
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" />{" "}
                      Responsive Design
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" /> Standard
                      2 Pages
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" /> Browser
                      Compatibility
                    </li>
                  </ul>
                  {/* Mobile view */}
                  <div className="md:hidden mt-6 p-6 bg-gradient-to-r from-teal-500/10 to-indigo-700/10 text-center">
                    <p className="text-lg uppercase font-semibold text-gray-800">
                      Only
                    </p>
                    <p className="text-4xl font-light text-gray-900 mb-4">
                      $199
                    </p>
                    <a
                      href="#"
                      className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-teal-500 to-indigo-700 rounded-2xl shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="text-center text-white">
                  <p className="text-lg uppercase font-semibold tracking-wide">
                    Only
                  </p>
                  <p className="text-6xl font-light mb-8">$199</p>
                  <a
                    href="#"
                    className="inline-block px-10 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-700 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Premium Package ================= */}
          <div className="group relative h-auto md:h-[560px] perspective-[1000px] md:mt-24 transform-gpu">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
              {/* FRONT SIDE */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border-2 border-purple-100 [backface-visibility:hidden]">
                <div className="h-40 bg-gradient-to-r from-purple-600 to-blue-800 clip-path-polygon"></div>
                <h4 className="absolute top-20 right-4 text-xl md:text-2xl font-bold text-white uppercase tracking-wider bg-gradient-to-r from-purple-600/95 to-blue-800/95 py-3 px-6 rounded-lg shadow-sm">
                  Premium Package
                </h4>
                <div className="p-6 pt-12">
                  <ul className="space-y-4 text-gray-700 text-center text-base md:text-lg">
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" /> 3
                      Revisions
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" /> Server
                      Upload
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" />{" "}
                      Responsive Design
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" /> Premium
                      3 Pages
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <CheckIcon className="text-indigo-600 text-xl" /> Browser
                      Compatibility
                    </li>
                  </ul>
                  {/* Mobile view */}
                  <div className="md:hidden mt-6 p-6 bg-gradient-to-r from-purple-600/10 to-blue-800/10 text-center">
                    <p className="text-lg uppercase font-semibold text-gray-800">
                      Only
                    </p>
                    <p className="text-4xl font-light text-gray-900 mb-4">
                      $299
                    </p>
                    <a
                      href="#"
                      className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-800 rounded-2xl shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="text-center text-white">
                  <p className="text-lg uppercase font-semibold tracking-wide">
                    Only
                  </p>
                  <p className="text-6xl font-light mb-8">$299</p>
                  <a
                    href="#"
                    className="inline-block px-10 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-700 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
