/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        trispace: "'Trispace', serif",
      },
      backgroundImage: {
        rocket:
          'url("https://github.com/ColdAndromeda/AstroCruise/blob/main/dist/Images/SpaceX-Falcon-9-launch-in-night-sky.jpg?raw=true")',
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("prettier-plugin-tailwindcss"),
  ],
};
