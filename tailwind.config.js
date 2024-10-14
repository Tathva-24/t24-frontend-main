const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        title: ['PP Supply Mono', 'monospace'], // For titles
        subtitle: ['Supply', 'sans-serif'],     // For subtitles
        question: ['Plus Jakarta Sans', 'sans-serif'], // For questions
        answer: ['Plus Jakarta Sans', 'sans-serif'],   // For answers
      },
    },
  },
  plugins: [nextui()],
};




