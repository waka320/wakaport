import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
    additionalData: `
      @use "sass:color";
      $grid-color: #e0e0e0;
      $grid-size: 24px;
      $thick-line-interval: 5;
    `,
  },
};

export default nextConfig;
