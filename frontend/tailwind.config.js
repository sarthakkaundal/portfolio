/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)',
        neonBlue: 'rgb(var(--color-neonBlue) / <alpha-value>)',
        electricPurple: 'rgb(var(--color-electricPurple) / <alpha-value>)',
        darkGray: 'rgb(var(--color-darkGray) / <alpha-value>)',
        lightGray: 'rgb(var(--color-lightGray) / <alpha-value>)',
        glassBg: 'rgb(var(--color-glassBg) / <alpha-value>)',
        glassBorder: 'rgb(var(--color-glassBorder) / <alpha-value>)',
        gray: {
          300: 'rgb(var(--color-gray-300) / <alpha-value>)',
          400: 'rgb(var(--color-gray-400) / <alpha-value>)',
          500: 'rgb(var(--color-gray-500) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(to right, rgb(var(--color-neonBlue)), rgb(var(--color-electricPurple)))',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgb(var(--color-neonBlue)), 0 0 10px rgb(var(--color-neonBlue))' },
          '100%': { boxShadow: '0 0 20px rgb(var(--color-electricPurple)), 0 0 30px rgb(var(--color-electricPurple))' },
        }
      }
    },
  },
  plugins: [],
}
