import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "appdeveloperalex.com",
        // pathname: "/tutor/**",
      },
    ],
  },
};

export default nextConfig;
