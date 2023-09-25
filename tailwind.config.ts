import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '940px',
          md: '1068px',
          lg: '1224px',
          xl: '1440px'
        },
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '1.5rem',
        }
      },
      backgroundColor: {
        skin: {
          default: 'var(--background)',
          "gray": "var(--clr-gray-100)",
          "base": "var(--text-color)",
          "hover-base": "var(--hover-base)",
        }
      },
      colors: {
        skin: {
          "gray": "var(--clr-gray-100)",
          "gray-shaded": "var(--clr-gray-shaded)",
          "base": "var(--text-color)",
        }
      },
      height: {
        ".1": "0.1rem",
        17: '4.55rem',
      },
      keyframes: {
        text_animation: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        text: 'text_animation 2s steps(40) 1s 1 normal both running',
      }
    },
  },
  plugins: [],
}
export default config
