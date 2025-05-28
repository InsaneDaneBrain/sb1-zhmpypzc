/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        'background-secondary': '#1E1E1E',
        'text-primary': '#FFFFFF',
        'text-secondary': '#D3D3D3',
      },
      fontFamily: {
        heading: ['Lalezar', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'purple-red-gradient': 'linear-gradient(135deg, #8A2BE2, #FF1493)',
        'teal-magenta-gradient': 'linear-gradient(135deg, #00CED1, #FF00FF)',
      },
      boxShadow: {
        'neon-purple': '0 0 10px rgba(138, 43, 226, 0.5)',
        'neon-teal': '0 0 10px rgba(0, 206, 209, 0.5)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(138, 43, 226, 0.5)' },
          '50%': { boxShadow: '0 0 16px rgba(255, 20, 147, 0.7)' },
        }
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};