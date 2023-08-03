/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgwhite: "#FFFFF2",
        bggreen: "#CCEDB2",
        bgyellow: "#EDEDB2",
        bgorange: "#EDBDB2",
        bgred:"#EDB2B2"
      } 
    },
  },
}
