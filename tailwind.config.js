module.exports = {
  theme: {
    extend: {
      animation: {
        marquee: "marquee 120s linear infinite",
        "marquee-reverse": "marquee-reverse 120s linear infinite",
        pause: "animation-play-state: paused;",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".pause": {
          "animation-play-state": "paused",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
