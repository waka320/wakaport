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
