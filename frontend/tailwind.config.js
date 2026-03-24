/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cream: '#FCF3E3',
          dark: '#2C3E50',
        },
        accent: {
          teal: '#16A085',
          coral: '#E74C3C',
          gold: '#F39C12',
          purple: '#9B59B6',
          blue: '#3498DB',
          green: '#27AE60',
        },
        text: {
          dark: '#2C3E50',
          medium: '#34495E',
          light: '#7F8C8D',
        },
        bg: {
          cream: '#FCF3E3',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
