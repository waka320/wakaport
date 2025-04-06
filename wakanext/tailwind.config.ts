import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "var(--foreground)",
            h1: { color: "var(--foreground)" },
            h2: { color: "var(--foreground)" },
            h3: { color: "var(--foreground)" },
            h4: { color: "var(--foreground)" },
            h5: { color: "var(--foreground)" },
            h6: { color: "var(--foreground)" },
            strong: { color: "var(--foreground)" },
            a: { color: "var(--link-color)" },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
