// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        lightYellow: '#ebeadf',
        orangeButton: '#f5b13f',
        orangeButtonHighlight: '#efb658',
      },
    },
  },
  plugins: [],
}