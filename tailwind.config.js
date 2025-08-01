/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      spacing: {
        // Clock dimensions
        75: "300px", // DIMENSION
        18.75: "75px", // DIMENSION / 4

        // Clock hand specific spacing
        17.5: "70px", // Hour hand margin-bottom
        25: "100px", // Hour hand height & minute hand margin-bottom
        30: "120px", // Second hand margin-bottom
        35: "140px", // Minute hand height
        36.25: "145px", // Second hand long height
      },
      width: {
        0.75: "3px", // Second hand width
        1: "4px", // Minute hand width & clock mark small width
        1.5: "6px", // Clock mark large width
        1.75: "7px", // Hour hand width
        75: "300px", // DIMENSION
      },
      height: {
        4: "16px", // Clock mark small height
        6: "24px", // Clock mark large height
        25: "100px", // Hour hand height
        35: "140px", // Minute hand height
        36.25: "145px", // Second hand long height
        75: "300px", // DIMENSION
      },
      borderWidth: {
        0.5: "0.5px",
      },
      rotate: {
        // Dynamic rotation values for clock hands
        ...Array.from({ length: 360 }, (_, i) => ({ [i]: `${i}deg` })).reduce(
          (a, b) => ({ ...a, ...b }),
          {}
        ),
      },
    },
  },
  plugins: [],
};
