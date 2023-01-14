/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "855px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
