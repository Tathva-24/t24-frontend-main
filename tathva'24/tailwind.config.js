/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        jakarta: ['"Plus Jakarta Sans"',"sans-serif"],
        pricedown: ["Pricedown","sans-serif"]
      },
      height: {
        '115': '115%', // Add a custom height of 60vh
        '95': '95%',
        '120': '125%',
        '98': '98%', // Add a custom height of 60vh
      },

      screens: {
        'custom-md': { 'max': '950px' }, 
        'custom-sm': { 'max': '450px' },// Custom media query for below 1040px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
