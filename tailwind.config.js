/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        personal: "url('../public/personal_photo.jpeg')",
        brown_uni: "url('../public/brown_uni.jpeg')",
        work: "url('../public/work.jpg')",
        remote: "url('../public/remote.png')",
      },
    },
  },
  plugins: [],
};
