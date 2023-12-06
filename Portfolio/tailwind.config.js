/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'portfolio': {
            '50': '#eef4ff',
            '100': '#e0eaff',
            '200': '#c8d8fd',
            '300': '#a6befb',
            '400': '#829af7',
            '500': '#6476f0',
            '600': '#454de3',
            '700': '#393dc9',
            '800': '#3136a2',
            '900': '#2f3580',      
      },       
      }
    },
  },
  plugins: [],
}

