// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//     theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing:{
        'h2-padding-reset': '0px',
        'p-padding-reset':'0px',
      },
      fontFamily: {
        matter: ['"Matter-TRIAL"', 'sans-serif'],
        matterLight: ['"Matter-TRIAL-Light"', 'sans-serif'],
        matterMedium: ['"Matter-TRIAL-Medium"', 'sans-serif'],
        reckless: ['"Reckless TRIAL"', 'sans-serif'],
        recklessBold: ['"Reckless TRIAL Bold"', 'sans-serif'],
        recklessLight: ['"Reckless TRIAL Light"', 'sans-serif'],
        recklessItalic: ['"Reckless TRIAL Italic"', 'sans-serif'],
        recklessRegularItalic: ['"Reckless TRIAL Regular Italic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
