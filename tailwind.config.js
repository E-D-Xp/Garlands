/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f3e7',
        maroon: '#6b0f14',
        maroonDeep: '#4a0b0f',
        gold: '#c19859',
        brown: '#5a3a28',
        sand: '#f1e4cf',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 15px 35px rgba(107, 15, 20, 0.08)',
        glow: '0 10px 30px rgba(193, 152, 89, 0.25)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(193,152,89,0.12), transparent 30%), radial-gradient(circle at 80% 10%, rgba(107,15,20,0.12), transparent 32%), radial-gradient(circle at 50% 80%, rgba(193,152,89,0.1), transparent 35%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.9s ease forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
