/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'text': '#FFFFFF',
        'background': '#121212',
        'background-dark': '#232323',
        'primary': '#232323',
        'secondary': '#444444',
        'accent': '#ced4da',


        // 'text':'#35605A',
        // 'background':'#E6E8E6',
        // 'background-dark': '#D0D2D0',
        // 'primary':'#29524A',
        // 'secondary':'#425054',
        // 'accent': '#D7E5E1' // light: '#D0F4EA'
      },
    },
  },
  plugins: [],
}
