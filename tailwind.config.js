/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        blue: '#2CBCE9',
        red: '#DC4492',
        yellow: '#FDCC49',
        grey: '#ededed',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'fadeIn_0.5sec': 'fadeIn 0.5s ease-in-out',
        'fadeIn_0.4sec': 'fadeIn 0.4s ease-in-out',
        'fadeIn_0.3sec': 'fadeIn 0.3s ease-in-out',
        slideAnimation: 'slideAnimation 2s ease-in-out infinite',
        displacer: 'displacer 4s ease-in-out infinite',
        stars: 'starsPulses 1.5s ease-in infinite',
      },
      keyframes: {
        starsPulses: {
          '0%': {
            opacity: 0,
          },
          '90%, 100%': {
            opacity: 1,
          },
        },
        displacer: {
          '0%, 25%': {
            'margin-top': '0',
            opacity: 1,
          },
          '30%,70%': {
            'margin-top': '-2.3rem',
            opacity: 0,
          },
          '100%': {
            'margin-top': '0rem',
            opacity: 1,
          },
        },
        //fadein keyframe
        fadeIn: {
          from: {
            opacity: 0,
            transform: 'translateY(-50px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
        //text slider keyframe
        slideAnimation: {
          '0%,10%,15%,20%,25%,30%': {
            width: '4.3rem',
          },
          '50%': {
            width: '0rem',
          },
          '100%': {
            width: '4.3rem',
          },
        },
      },
      //hide animation

      //fonts
      fontFamily: {
        sora: ['var(--font-sora)'],
      },

      backgroundImage: {
        site: "url('../public/assets/pages/site-bg.svg')",
        explosion: "url('../public/assets/pages/bg-explosion.png')",
        cardsBG_1: "url('../public/assets/pages/cardsBG_1.jpg')",
        cardsBG_2: "url('../public/assets/pages/cardsBG_2.jpg')",
      },
    },
  },
  plugins: [],
};
