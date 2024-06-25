/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js},./src/media/**"],
  theme: {
    extend: {
      backgroundImage:{
        'tabletview': "url('media/bg-tablet-pattern.svg')",
        'desktopview': "url('media/bg-simplify-section-desktop.svg')",
        'mobileview': "url('media/bg-simplify-section-mobile.svg')",
      }
    },
  },
  plugins: [],
}

