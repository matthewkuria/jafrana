import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
   images: {
      unoptimized: true,
      domains: ['localhost'],
  },
  trailingSlash: true,
   
};

export default nextConfig;
