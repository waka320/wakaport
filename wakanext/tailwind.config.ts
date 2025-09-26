import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '0.5rem',
				sm: '0.75rem',
				md: '1rem'
			}
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
				}
			},
			animation: {
				slideDown: 'slideDown 0.3s ease-out forwards'
			},
			keyframes: {
				slideDown: {
					'0%': {
						transform: 'translateY(-10px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			typography: () => ({
				DEFAULT: {
					css: {
						color: 'var(--foreground)',
						h1: { color: 'var(--foreground)' },
						h2: { color: 'var(--foreground)' },
						h3: { color: 'var(--foreground)' },
						h4: { color: 'var(--foreground)' },
						h5: { color: 'var(--foreground)' },
						h6: { color: 'var(--foreground)' },
						strong: { color: 'var(--foreground)' },
						a: { color: 'var(--link-color)' }
					}
				}
			}),
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [typography, require("tailwindcss-animate")],
};

export default config;
