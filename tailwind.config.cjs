// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
        screens: {
                'xs': '480px',
        },
        colors: {
            lightYellow: '#ebeadf',
            darkPeach: '#000000',
            orangeButton: '#f5b13f',
            orangeButtonHighlight: '#efb658',
        },
    },
  },
  plugins: [],
}
