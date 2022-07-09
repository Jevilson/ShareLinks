/** @type {import('tailwindcss').Config} */
const brandColors = {
  'EDF2FF': '#EDF2FF',
  '00082F': '#00082F',
  '4263EB': '#4263EB',
  '364FC7': '#364FC7',
  'FFFFFF': '#FFFFFF',
  'FFF0F6': '#FFF0F6',
  '1F000B': '#1F000B',
  'D6336C': '#D6336C',
  'A61E4D': '#A61E4D',
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ...brandColors,
      }
    },
  },
  plugins: [],
}
