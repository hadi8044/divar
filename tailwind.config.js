/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        maintext: 'hsl(0, 0%, 42%)',
        subtext: 'hsl(0, 0%, 65%)',
        selected: 'hsl(0, 63%, 40%)',
        backgray:'hsl(0, 0%, 96%)'
      },
      boxShadow: {
        'top': '0 0.5px 3px -1px rgba(0, 0, 0, 0.3)',
        'bottom': '0 0.7px 3px 0px rgba(0, 0, 0, 0.3)',
        'box': '0 0px 2px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

