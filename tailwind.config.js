/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leather: {
          dark: '#141414',
          base: '#1a1816',
          border: '#2c2724',
          stitch: '#4a3f35',
          gold: '#c5a059',
        },
        paper: {
          bg: '#fcfaf2',
          grid: '#e2decb',
          line: '#d8d2bd',
          aged: '#f4ede0',
        },
        ink: {
          black: '#1f2421',
          red: '#c0392b',
          blue: '#1a5276',
          pencil: '#4a4e51',
        },
        pitch: {
          bg: '#1b432a',
          grassDark: '#173a24',
          lines: 'rgba(255, 255, 255, 0.45)',
          guide: 'rgba(255, 255, 255, 0.18)',
        }
      },
      fontFamily: {
        ink: ['"Nanum Pen Script"', '"Caveat"', '"Patrick Hand"', 'cursive'],
        monoNote: ['"Courier Prime"', 'Courier', 'monospace'],
        tactical: ['"Outfit"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'ring-metal': 'inset 2px 2px 4px rgba(255,255,255,0.7), inset -3px -3px 6px rgba(0,0,0,0.8), 4px 6px 10px rgba(0,0,0,0.4)',
        'leather-deep': 'inset 0 0 40px rgba(0,0,0,0.9), 0 25px 60px -15px rgba(0,0,0,0.8)',
        'postit': '2px 4px 10px rgba(0,0,0,0.15)',
        'magnet': '0 4px 8px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.6)',
      }
    },
  },
  plugins: [],
}
