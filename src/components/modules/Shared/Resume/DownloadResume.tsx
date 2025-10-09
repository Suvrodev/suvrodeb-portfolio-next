// "use client";
// import React from "react";

// const DownloadResume = () => {
//   const handleDownload = () => {
//     const resumeUrl = "/suvrodeb_resume.pdf";
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Suvrodeb_Howlader_Resume.pdf";
//     link.setAttribute("aria-label", "Download resume as PDF");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
//       <button
//         onClick={handleDownload}
//         aria-label="Download CV"
//         className="group relative
//           bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900
//           text-white font-semibold px-6 py-3 rounded-xl
//           shadow-2xl border border-slate-600/40
//           hover:border-slate-500/60
//           hover:scale-[1.03] active:scale-95
//           transition-all duration-300 ease-out
//           flex items-center gap-2.5
//           backdrop-blur-md overflow-hidden
//           hover:shadow-blue-500/20 hover:shadow-xl"
//       >
//         {/* 🔹 Animated background shine (from old code) */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms]" />

//         {/* Download icon */}
//         <div className="relative z-10 flex items-center justify-center">
//           <svg
//             className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:text-white"
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

//         {/* Button text */}
//         <span className="relative z-10 text-sm tracking-wide font-semibold text-white/95 group-hover:text-white transition-colors duration-300">
//           Download CV
//         </span>
//       </button>
//     </div>
//   );
// };

// export default DownloadResume;

"use client";
import React from "react";

interface DownloadResumeProps {
  base64Data: string; // base64 encoded PDF string
}

const DownloadResume: React.FC<DownloadResumeProps> = ({ base64Data }) => {
  const handleDownload = () => {
    try {
      // Convert base64 to blob
      const byteCharacters = atob(base64Data.split(",")[1] || base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "application/pdf" });

      // Create download link
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Suvrodeb_Howlader_Resume.pdf";
      link.setAttribute("aria-label", "Download resume as PDF");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Cleanup
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Failed to download resume:", error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <button
        onClick={handleDownload}
        aria-label="Download CV"
        className="group relative 
          bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900
          text-white font-semibold px-6 py-3 rounded-xl 
          shadow-2xl border border-slate-600/40
          hover:border-slate-500/60 
          hover:scale-[1.03] active:scale-95 
          transition-all duration-300 ease-out 
          flex items-center gap-2.5 
          backdrop-blur-md overflow-hidden
          hover:shadow-blue-500/20 hover:shadow-xl"
      >
        {/* 🔹 Animated background shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms]" />

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        {/* Text */}
        <span className="relative z-10 text-sm tracking-wide font-semibold text-white/95 group-hover:text-white transition-colors duration-300">
          Download CV
        </span>
      </button>
    </div>
  );
};

export default DownloadResume;
