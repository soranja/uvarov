/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        body: "#111",
        junost: "#EBE9C2",
        expeditions: "#CCAD8A",
        family: "#CFD5D5",
        activities: "#E3CCA3",
        museum: "#E8DFCC",
        epilogue: "#CDA26C",
        materials: "#EEE",
      },
      backgroundImage: {
        "chapter-bg": "url('../data/common/_images/chapter-bg.png')",
        "junost-bg": "url('../data/biography/_images/junost/junost-img.jpg')",
        "expeditions-bg": "url('../data/biography/_images/expeditions/expeditions-img.jpg')",
        "porechye-bg": "url('../data/biography/_images/porechye/porechye-img.jpg')",
        "praskovya-bg": "url('../data/biography/_images/praskovya/praskovya-img.jpg')",
        "family-bg": "url('../data/biography/_images/family/family-img.png')",
        "activities-bg": "url('../data/biography/_images/activities/activities-img.png')",
        "museum-bg": "url('../data/biography/_images/museum/museum-img.jpg')",
        "epilogue-bg": "url('../data/biography/_images/epilogue/epilogue-img.jpg')",
        "header-black": "url('../data/common/_images/header-black.svg')",
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
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        110: "110",
        120: "120",
        130: "130",
        140: "140",
        150: "150",
        160: "160",
        200: "200",
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
