import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["res.cloudinary.com"], // Add the hostname here
  },
};

export default nextConfig;