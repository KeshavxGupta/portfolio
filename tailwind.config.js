/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#181818',
        white: '#ffffff',
        brightBlue: '#00eaff',
        yellow: '#ffe600',
        green: '#00ff85',
        purple: '#a855f7', // Added Tailwind's purple-500 color
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'bounce-subtle': 'bounce-subtle 1.5s ease-in-out infinite',
      },
      animationDelay: {
        '200': '200ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
