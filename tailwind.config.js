/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: '#18181b',
        whiteText: '#f9fafb',
        lightDark: '#1f2937',
        textlight: '#cbd5e1',
        textdark: '#475569 ',
   

      },
    },
  },
  plugins: [],
};

