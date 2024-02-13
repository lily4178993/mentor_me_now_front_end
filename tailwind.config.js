/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#97BF0F',
        'primary-orange': '#FFB400',
        'primary-blue': '#10BBB5',
        'primary-gray': '#BCBCBE',
        'primary-black': '#252525',
        'primary-red': '#B32A31',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        splash_bg: "url('/src/assets/splash-screen/splash_bg_2.jpg')",
        video: "url('/src/assets/video.mp4')",
      },
    },
  },
  plugins: [],
};
