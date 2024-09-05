/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        'home-gray': '#3F3F3F',
        'home-yellow': '#E9B137',
        'home-service':'#393939'
       },
       fontFamily: {
        khand: ['Khand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
