/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        weather:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),url(https://wallpapers.com/images/hd/orange-sky-in-perfect-weather-6vq4ixi29juk0ayh.jpg)",
      },
    },
  },
  plugins: [],
};
