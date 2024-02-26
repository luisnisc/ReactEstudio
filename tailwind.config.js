/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      width:{
          '96': '24rem',
          '128': '32rem',
          '144': '36rem',
          '160': '40rem',
          '192': '48rem',
          '224': '56rem',
          '256': '64rem',
          '288': '72rem',
          '320': '80rem',
          '384': '96rem',
        }
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
