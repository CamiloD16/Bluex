/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./web/themes/bluex/templates/**/*.twig",
  ],
  theme: {
    extend: {
      height: {
        "104":"26rem",
        "128":"32rem",
      },
      minHeight: {
        "104":"26rem",
        "128": '32rem',
      },
    },
  },
  plugins: [],
}