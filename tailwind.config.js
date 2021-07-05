module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#239593",
        "primary-cyan": "#2AB2AF",
        "primary-yellow": "#C0DF34",
        neutral: "#E5EFF5",
        "neutral-gray": "#BAD3E3",
        "neutral-blue": "#98A6BD",
        "neutral-bg": '#47C2C0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
