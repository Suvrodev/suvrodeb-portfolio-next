import React from "react";

const SSLEommerzSVG = () => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-labelledby="sslEcommerzTitle"
      role="img"
    >
      <title id="sslEcommerzTitle">SSL Ecommerz logo</title>

      {/* background rounded square with diagonal gradient */}
      <rect width="256" height="256" rx="40" fill="url(#bgGradient)" />

      {/* shield base */}
      <path
        d="M128 56c-24 0-44 16-48 38v34c0 28 32 54 48 64 16-10 48-36 48-64v-34c-4-22-24-38-48-38z"
        fill="url(#shieldGradient)"
        opacity="0.98"
      />

      {/* lock body (over shield) */}
      <rect
        x="100"
        y="106"
        width="56"
        height="46"
        rx="6"
        fill="#FFFFFF"
        opacity="0.95"
      />
      <path
        d="M128 118c6 0 10 4 10 9v3h-20v-3c0-5 4-9 10-9z"
        fill="#E6F7FF"
        opacity="0.9"
      />

      {/* shopping-cart handle + wheel hint (subtle) */}
      <path
        d="M86 154h18l6-28h68l10 28h-86"
        stroke="#BEEFFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.75"
      />
      <circle cx="174" cy="158" r="6" fill="#BEEFFF" opacity="0.9" />
      <circle cx="110" cy="158" r="6" fill="#BEEFFF" opacity="0.9" />

      {/* SSL text — simple geometric letterforms, filled with accent gradient */}
      <g transform="translate(48,34)">
        <path
          d="M12 148v-72h18l18 44 18-44h18v72h-18v-44l-18 44h-6l-18-44v44H12z"
          fill="url(#accentGradient)"
        />
      </g>

      <defs>
        <linearGradient
          id="bgGradient"
          x1="0"
          y1="0"
          x2="256"
          y2="256"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#002A4A" />
          <stop offset="1" stopColor="#00395E" />
        </linearGradient>

        <linearGradient id="shieldGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00C8FF" />
          <stop offset="1" stopColor="#0077B6" />
        </linearGradient>

        <linearGradient id="accentGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A7F3D0" />
          <stop offset="1" stopColor="#00C8FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SSLEommerzSVG;
