import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
    additionalData: `
      @use "sass:color";
      @use "sass:math";
      
      $grid-color: #e0e0e0;
      $grid-size: 24px;
      $thick-line-interval: 5;
      
      $breakpoints: (
        'sm': 576px,
        'md': 768px,
        'lg': 992px,
        'xl': 1200px
      );
    `,
    includePaths: ['./src/styles']
  },
};

export default nextConfig;
