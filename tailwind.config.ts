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
  		screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
  		},
  		colors: {
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			gray42: '#424242',
  			gray80: '#808080',
  			gray82: '#828282',
  			gray100: '#101010',
  			grayC7: '#C7C5C5',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			primaryText: '#323232',
  			secondary: {
  				DEFAULT: '#5A6756',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			veryLightGreen: '#EEECDF',
  			veryLightRed: '#FFE6E6',
  			borderColor: '#DDDFDA',
  			disabled: '#E2E6DA',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		width: {
  			'55': '220px',
  			'318': '318px',
  			'5.5': '22px'
  		},
  		height: {
  			'55': '220px',
  			'7.5': '30px'
  		},
  		backgroundColor: {
  			primary: '#F8F8E9',
  			yellow: '#FFFBEF'
  		},
  		spacing: {
  			'25': '100px',
  			'3.75': '15px',
  			'7.5': '30px'
  		},
  		fontSize: {
  			'10': '40px',
  			'4.5': '18px'
  		},
  		lineHeight: {
  			'13': '52px',
  			'5.5': '22px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
