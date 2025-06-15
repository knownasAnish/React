/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveImage: 'move 20s linear infinite',
        moveImage1: 'move1 20s linear infinite',
        moveImage2: 'move2 20s linear infinite',
        moveImage3: 'move3 20s linear infinite',
        fadeUp: 'fade 1s ease-out',
        fadeUp2: 'fade2 2s ease-out',
        fadeUp3: 'fade3 3s ease-out',
        fadeUp4: 'fade4 4s ease-out',
        fadeUp5: 'fade5 5s ease-out',
        fadeUp6: 'fade6 6s ease-out',
        fadeUp01: 'fade01 1s ease-out',
        fadeUp21: 'fade21 2s ease-out',
        fadeUp31: 'fade31 3s ease-out',
      },
      keyframes: {
        move: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(100%)'},
        },
        move1: {
          '0%': {transform: 'translate(0%)'},
          '100%': {transform: 'translateX(-100%)'}
        },
        move2: {
          '0%': {transform: 'translate(0%)'},
          '100%': {transform: 'translateX(100%)'}
        },
        move3: {
          '0%': {transform: 'translate(0%)'},
          '100%': {transform: 'translateX(-100%)'}
        },
        fade: {
          '0%' : {opacity: 0, transform: 'translateY(20px)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}
        },
        fade01: {
          '0%' : {opacity: 0, transform: 'translateY(20px)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}
        },
        fade2: {
          '0%' : {opacity: 0, transform: 'translateY(20px)'},
          '25%' : {opacity: 0, transform: 'translateY(10px)'},
          '50%' : {opacity: 0.25, transform: 'translateY(5px)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}
        },
        fade21: {
          '0%' : {opacity: 0, transform: 'translateY(20px)'},
          '25%' : {opacity: 0, transform: 'translateY(10px)'},
          '50%' : {opacity: 0.25, transform: 'translateY(5px)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}
        },
        fade3: {
          '0%' : {opacity: 0, transform: 'translateY(20px)'},
          '25%' : {opacity: 0, transform: 'translateY(15px)'},
          '50%' : {opacity: 0, transform: 'translateY(10px)'},
          '75%' : {opacity: 0.5, transform: 'translateY(5px)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}
        },
        fade31: {
          '0%' : {opacity: 0, transform: 'translateY(20px)'},
          '25%' : {opacity: 0, transform: 'translateY(15px)'},
          '50%' : {opacity: 0, transform: 'translateY(10px)'},
          '75%' : {opacity: 0.5, transform: 'translateY(5px)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}
        },
        fade4: {
          '0%' : {opacity: 0, transform: 'translateY(20px)'},
          '25%' : {opacity: 0, transform: 'translateY(15px)'},
          '50%' : {opacity: 0, transform: 'translateY(10px)'},
          '75%' : {opacity: 0.5, transform: 'translateY(5px)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}
        },
        fade5: {
          '0%' : {opacity: 0, transform: 'translateY(20px)'},
          '25%' : {opacity: 0, transform: 'translateY(15px)'},
          '50%' : {opacity: 0, transform: 'translateY(10px)'},
          '75%' : {opacity: 0.5, transform: 'translateY(5px)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}
        },
        fade6: {
          '0%' : {opacity: 0, transform: 'translateY(20px)'},
          '25%' : {opacity: 0, transform: 'translateY(15px)'},
          '50%' : {opacity: 0, transform: 'translateY(10px)'},
          '75%' : {opacity: 0.5, transform: 'translateY(5px)'},
          '100%' : {opacity: 1, transform: 'translateY(0)'}
        },
        // fade2: {
        //   '0%' : {opacity: 0, transform: 'translateY(20px)'},
        //   '100%' : {opacity: 1, transform: 'translateY(0)'}
        // },
        // fade3: {
        //   '0%' : {opacity: 0, transform: 'translateY(20px)'},
        //   '100%' : {opacity: 1, transform: 'translateY(0)'}
        // }
      },
    },
  },
  plugins: [],
}

