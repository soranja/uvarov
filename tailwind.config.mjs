/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        body: "#203535",
        junost: "#EBE9C2",
        expeditions: "#CCAD8A",
        family: "#CFD5D5",
        activities: "#E3CCA3",
        museum: "#E8DFCC",
        epilogue: "#CDA26C",
        materials: "#EEE"
      },
	  
    },
  },
  plugins: [],
};
