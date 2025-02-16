import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
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
