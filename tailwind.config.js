// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Main brand colors
        jade: {
          50: '#E6F0ED',
          100: '#C2D9D1',
          200: '#9EC2B5',
          300: '#7AAB99',
          400: '#56947D',
          500: '#0F4C3A', // Primary jade
          600: '#0D4334',
          700: '#0B3A2E',
          800: '#093128',
          900: '#072822',
        },
        gold: {
          50: '#FDF6E3',
          100: '#FAE9B8',
          200: '#F7DC8D',
          300: '#F4CF62',
          400: '#F1C237',
          500: '#DAA520', // Primary gold
          600: '#C4941D',
          700: '#AE8319',
          800: '#987216',
          900: '#826112',
        },
        stone: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#1A1A1A', // Primary background
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif', 'Georgia', 'serif'],
        chinese: ['Noto Sans SC', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'flow': 'flow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        flow: {
          '0%, 100%': { transform: 'translateX(0) scale(1)' },
          '50%': { transform: 'translateX(25%) scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-texture': 'url("/textures/paper.png")',
      },
    },
  },
  plugins: [],
}