/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  
    daisyui: {
        themes: [
          {
            light: {
              primary: "#3b82f6",
              secondary: "#f6d860",
              accent: "#37cdbe",
              neutral: "#3d4451",
              "base-100": "#ffffff",
            },
            dark: {
              primary: "#1e3a8a",
              secondary: "#d97706",
              accent: "#22d3ee",
              neutral: "#1f2937",
              "base-100": "#121212",
            },
          },
        ],
      },

  plugins: [
    require('daisyui'),
  ],

}

