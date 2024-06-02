/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        black : {
          100 : '#141C25',
          // 200 : "#827E7E",
          // 300 : "#231F20",
        },
        secondary : '#344051',
        grey : {
          50 : "#F9FAFB",
          100 : "#E5E6E7",
          200 : "#E4E7EC",
          500 : '#667185',
          700 : '#344054',
          800 : '#1D2739'
        },
        purple : "#9546E8"
      },
      fontFamily : {
        charmonan : ["Charmonman", "cursive"],
        inter : ["Inter", 'sans-serif'],
        satoshi : ['Satoshi', 'sans-serif']
      },
      backgroundImage :{
        'champion' : "url('./src/assets/home/championBg.png')",
        'to1' : "url('./src/assets/home/to1.png')",
      },
    },
  },
  plugins: [],
}

