/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#FC4747',
        'dark-blue': '#10141E',
        'greyish-blue': '#5A698F',
        'semi-dark-blue': '#161D2F',
        'white': '#FFFFFF',
      },
      fontSize: {
        sm: '0.81rem', // 13px
        base: '0.93rem', // 15px
        md: '1.125rem', // 18px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
      }

    },
  },
  plugins: [],
}

