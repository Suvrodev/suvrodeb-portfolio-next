import React from "react";

const PhpSVG = () => {
  return (
    <svg
      width="200"
      height="70"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label="PHP logo"
    >
      {/* outer rounded background (keeps same dark-blue vibe) */}
      <rect width="256" height="256" rx="40" fill="url(#bgGradient)" />

      {/* inner oval badge with purple gradient */}
      <ellipse
        cx="128"
        cy="128"
        rx="94"
        ry="62"
        fill="url(#ovalGradient)"
        opacity="0.98"
      />

      {/* subtle highlight on top-left of the oval */}
      <ellipse
        cx="96"
        cy="96"
        rx="58"
        ry="28"
        fill="url(#highlight)"
        opacity="0.12"
      />

      {/* PHP text */}
      <text
        x="128"
        y="142"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Verdana, Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="64"
        fill="#FFFFFF"
        letterSpacing="2"
      >
        PHP
      </text>

      {/* small opening tag to hint 'code' (optional visual touch) */}
      <text
        x="56"
        y="92"
        fontFamily="Verdana, Arial, Helvetica, sans-serif"
        fontSize="12"
        fill="#E6F7FF"
      >
        &lt;?php
      </text>

      <defs>
        <linearGradient
          id="bgGradient"
          x1="0"
          y1="0"
          x2="256"
          y2="256"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#001E36" />
          <stop offset="1" stopColor="#041C33" />
        </linearGradient>

        <linearGradient
          id="ovalGradient"
          x1="64"
          y1="64"
          x2="192"
          y2="192"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6C2BD9" />
          <stop offset="1" stopColor="#4B1EA8" />
        </linearGradient>

        <radialGradient id="highlight" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default PhpSVG;
