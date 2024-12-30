/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(356, 100%, 66%)',
        'very-light-red': 'hsl(355, 100%, 74%)',
        'very-dark-blue': 'hsl(208, 49%, 24%)',
        'grayish-blue': 'hsl(240, 2%, 79%)',
        'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
        'very-dark-black-blue': 'hsl(240, 10%, 16%)',
      },
      backgroundImage: {
        'gradient-very-light-red': 'linear-gradient(135deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))',
        'gradient-very-dark-gray': 'linear-gradient(135deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))',
      },
    },
  },
  plugins: [],
}
