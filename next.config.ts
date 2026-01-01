import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: GitHub Pages için /pruva_cleaning, Vercel için boş
  // Vercel'de deploy ederken basePath'i kaldırın veya environment variable ile kontrol edin
  basePath: process.env.VERCEL ? '' : (process.env.NODE_ENV === 'production' ? '/pruva_cleaning' : ''),
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
