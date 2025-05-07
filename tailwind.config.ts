
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Snow Pulse Day Colors
				day: {
					"blue": "#C7EFFF", // Bleu glacier
					"white": "#FFFFFF", // Blanc pur
					"gray": "#6D7A84", // Gris acier
					"turquoise": "#60F0D6", // Turquoise clair
				},
				// Snow Pulse Night Colors
				night: {
					"purple": "#8E44AD", // Violet électrique
					"pink": "#FF2D95", // Rose néon
					"blue": "#0D1B2A", // Bleu nuit
					"orange": "#FF6C00", // Orange chaud
				},
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				pulse: {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)',
					},
					'50%': { 
						opacity: '0.85',
						transform: 'scale(1.05)',
					},
				},
				glitch: {
					'0%': {
						transform: 'translate(0)',
					},
					'20%': {
						transform: 'translate(-3px, 3px)',
					},
					'40%': {
						transform: 'translate(-3px, -3px)',
					},
					'60%': {
						transform: 'translate(3px, 3px)',
					},
					'80%': {
						transform: 'translate(3px, -3px)',
					},
					'100%': {
						transform: 'translate(0)',
					},
				},
				'snowfall': {
					'0%': { 
						transform: 'translateY(0) translateX(0)',
						opacity: '0',
					},
					'10%': {
						opacity: '1',
					},
					'90%': {
						opacity: '1',
					},
					'100%': { 
						transform: 'translateY(100vh) translateX(100px)',
						opacity: '0',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse 4s ease-in-out infinite',
				'glitch': 'glitch 0.8s ease-in-out infinite',
				'snowfall': 'snowfall 10s linear infinite',
				'fade-in': 'fade-in 0.5s ease-out forwards',
			},
			backgroundImage: {
				'day-gradient': 'linear-gradient(to bottom, #C7EFFF, #FFFFFF)',
				'night-gradient': 'linear-gradient(to bottom, #0D1B2A, #8E44AD)',
				'day-to-night': 'linear-gradient(to right, #C7EFFF, #8E44AD)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
