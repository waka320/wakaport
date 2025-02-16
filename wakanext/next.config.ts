import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
    includePaths: ['./src/styles']
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

export default nextConfig;
