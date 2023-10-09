/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      cursive: ['Cherry Bomb One', 'cursive'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': 'rgb(255, 255, 255)',
      'white-80': 'rgba(255, 255, 255, .8)',
      'orange': 'rgb(255, 77, 0)',
      'orange-dark': 'rgb(224, 65, 0)',
      'turquoise': 'rgb(26, 222, 210)',
      'pink': 'rgb(243, 101, 170)',
      'brown': 'rgb(67, 50, 42)',
      'brown-15': 'rgba(67, 50, 42, .15)',
      'brown-25': 'rgba(67, 50, 42, .30)',
      'brown-50': 'rgba(67, 50, 42, .50)',
      'light-brown': 'rgb(148, 134, 128)',
      'light-grey': 'rgb(243, 243, 243)',
    },
    extend: {
      backgroundImage: {
        'wave-pattern': "url('./assets/images/wave.svg')",
        'wave-b-pattern': "url('./assets/images/wave-b.svg')",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(10px)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        spin: 'spin 5s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}