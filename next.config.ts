import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'], // Add allowed domains here
  },
};

export default nextConfig;
