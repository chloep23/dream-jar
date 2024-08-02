/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        collegeBG:
             "url('/assets/college_dorm.jpg')",
        nycBG: 
             "url('/assets/new_york.jpg')",
        gradBG: 
             "url('/assets/grad_party.jpg')",
      },
    },
    colors:{
      'white': '#FFFFFF',
      'beigeWhite': '#F7F7F7', 
      'black': '#000000',
      'gray': '#797575',
      'light-gray': '#EAEAEA',
      'purple': '#7856FF',
      'light-blue':'#DAF5F2',
      'light-yellow':'#FCF9E2',
      'light-orange': '#F8E2D9',
      'light-pink': '#FFE4F9',
      'blue':'#9CE7E2',
      'yellow': '#E7D38B',
      'orange': '#F8A991', 
      'pink': '#F6A6E5',
    },

    fontFamily:{
     Lato: ['lato'],
    },
  },
  plugins: [],
};
