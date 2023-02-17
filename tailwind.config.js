/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#009aa3',
          DEFAULT: '#006c72',
          dark: '#14303d',
        },
        secondary: {
          light: '#22c55e',
          DEFAULT: '#16a34a',
          dark: '#166534',
        },
      },
    },
  },
  plugins: [],
}
