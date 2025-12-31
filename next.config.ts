import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath'i sadece production build'de kullan
  basePath: process.env.NODE_ENV === 'production' ? '/pruva_cleaning' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
