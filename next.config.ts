import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "*.github.com",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
