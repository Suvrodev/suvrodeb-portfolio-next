// "use client";
// import React from "react";

// const DownloadResume = () => {
//   const handleDownload = () => {
//     const resumeUrl = "/suvrodeb_resume.pdf";
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Suvrodeb_Howlader_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="fixed bottom-10 right-6 z-50">
//       <button
//         onClick={handleDownload}
//         className="group relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900
//                    text-white font-medium px-8 py-4 rounded-xl
//                    shadow-2xl hover:shadow-xl
//                    hover:shadow-blue-500/20
//                    border border-slate-600/30
//                    hover:border-slate-500/50
//                    hover:scale-[1.02] active:scale-100
//                    transition-all duration-300 ease-out
//                    flex items-center gap-3
//                    backdrop-blur-sm
//                    before:absolute before:inset-0
//                    before:rounded-xl before:bg-gradient-to-r
//                    before:from-transparent before:via-white/10 before:to-transparent
//                    before:translate-x-[-100%] before:transition-transform before:duration-600
//                    hover:before:translate-x-[100%] overflow-hidden"
//       >
//         {/* Animated background shine */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

//         {/* Professional download icon */}
//         <div className="relative z-10 flex items-center justify-center">
//           <svg
//             className="w-5 h-5 text-white transition-transform group-hover:scale-110"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//             />
//           </svg>
//         </div>

//         {/* Text with better typography */}
//         <span className="relative z-10 text-sm tracking-wider font-semibold text-white/90 group-hover:text-white">
//           Download CV
//         </span>
//       </button>
//     </div>
//   );
// };

// export default DownloadResume;

"use client";
import React from "react";

const DownloadResume = () => {
  const handleDownload = () => {
    const resumeUrl = "/suvrodeb_resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Suvrodeb_Howlader_Resume.pdf";
    link.setAttribute("aria-label", "Download resume as PDF"); // Accessibility improvement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <button
        onClick={handleDownload}
        className="group relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900/90
                   text-white font-semibold px-6 py-3 rounded-xl shadow-2xl hover:shadow-2xl
                   hover:shadow-slate-500/25 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-offset-2 focus:ring-offset-slate-900/50
                   border border-slate-600/50 hover:border-slate-500/60
                   hover:scale-105 active:scale-95 active:shadow-lg
                   transition-all duration-300 ease-out
                   flex items-center gap-2.5
                   backdrop-blur-md bg-clip-padding
                   overflow-hidden
                   before:absolute before:inset-0 before:rounded-xl
                   before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent
                   before:-skew-x-12 before:translate-x-[-100%] before:transition-transform before:duration-700 before:origin-left
                   group-hover:before:translate-x-[calc(100%+4px)]
                   after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent
                   after:-skew-y-12 after:translate-y-[-100%] after:transition-transform after:duration-1000 after:origin-top
                   group-hover:after:translate-y-[100%]"
        aria-label="Download CV"
      >
        {/* Subtle inner glow for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Professional download icon with subtle bounce on hover */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white/90 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:-translate-y-0.5 group-active:translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        {/* Enhanced text with letter spacing and subtle glow */}
        <span className="relative z-10 text-sm tracking-wide font-semibold text-white/95 group-hover:text-white transition-colors duration-300">
          Download CV
        </span>
      </button>
    </div>
  );
};

export default DownloadResume;
