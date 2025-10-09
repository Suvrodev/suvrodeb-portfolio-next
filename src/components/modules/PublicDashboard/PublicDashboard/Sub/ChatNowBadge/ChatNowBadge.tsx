"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

const ChatNowBadge = () => {
  const [hovered, setHovered] = useState(false);

  const handleChatClick = () => {
    const phoneNumber = "+880518748081"; // তোমার WhatsApp নাম্বার
    const url = `https://wa.me/${phoneNumber}?text=Hi%20Suvrodeb!%20I%20want%20to%20chat%20with%20you.`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="absolute -top-8 right-0 z-50 cursor-pointer select-none animate-[float_3s_ease-in-out_infinite]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleChatClick}
    >
      <div
        className={`flex items-center gap-2 px-3 py-[4px] rounded-full border backdrop-blur-md transition-all duration-500 ease-out shadow-md
        ${
          hovered
            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white scale-105 shadow-lg shadow-emerald-400/30"
            : "bg-white/80 text-emerald-600 border-emerald-200 hover:shadow-md"
        }`}
      >
        {/* Icon - only visible when hovered */}
        <div
          className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-500 transform
          ${
            hovered
              ? "opacity-100 translate-x-0 bg-white/25"
              : "opacity-0 -translate-x-2"
          }
          `}
        >
          <MessageCircle
            size={12}
            className={`transition-all duration-500 ${
              hovered ? "text-white" : "text-emerald-600"
            }`}
          />
        </div>

        {/* Text */}
        <span
          className={`text-[12px] font-medium whitespace-nowrap transition-all duration-500 overflow-hidden
          ${hovered ? "text-white w-[70px]" : "text-emerald-700 w-[55px]"}`}
        >
          {hovered ? "Chat Now" : "Online"}
        </span>

        {/* Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e]"></span>
        </span>
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </div>
  );
};

export default ChatNowBadge;
