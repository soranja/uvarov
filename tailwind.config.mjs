/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#111",
        junost: "#EBE9C2",
        expeditions: "#CCAD8A",
        museum: "#E8DFCC",
      },
      backgroundImage: {
        "chapter-tile": "url('../data/common/_images/chapter-tile-bg.png')",
        "junost-tile": "url('../data/biography/_images/junost/junost-tile-bg.png')",
        "expeditions-tile": "url('../data/biography/_images/expeditions/expeditions-tile-bg.png')",
        "museum-tile": "url('../data/biography/_images/museum/museum-tile-bg.png')",
      },
      keyframes: {
        blur: {
          "100%": { filter: "blur(0px)" },
          "0%": { filter: "blur(16px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeInBounce: {
          "0%": {
            opacity: "0",
            transform: "translateY(-25%)",
          },
          "50%": {
            opacity: "1",
            transform: "none",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(-25%)",
          },
        },
        bounce: {
          "0%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
          "100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
        },
      },
      animation: {
        blur: "blur 2s linear",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        fadeOut: "fadeOut 1s ease-in-out forwards",
        fadeInBounce: "fadeInBounce 1s ease-in-out forwards, bounce 1s infinite 1s",
      },
      zIndex: {
        150: "150",
        1000: "1000",
        1100: "1100",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
  },
  plugins: [],
};
