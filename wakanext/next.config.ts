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
  },
  async redirects() {
    return [
      { source: '/news', destination: '/about', permanent: false },
      { source: '/news/:path*', destination: '/about', permanent: false },
    ]
  }
};

export default nextConfig;
