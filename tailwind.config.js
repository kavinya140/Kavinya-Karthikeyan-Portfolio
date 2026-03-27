/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui'],
        display: ['Outfit', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        base: {
          950: '#0f172a',
          900: '#111827',
          100: '#e2e8f0',
          50: '#f8fafc',
        },
        neon: {
          pink: '#ff4ecd',
          blue: '#3b82f6',
          cyan: '#22d3ee',
          purple: '#8b5cf6',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 60px rgba(59,130,246,0.24)',
        soft: '0 20px 45px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top, rgba(139, 92, 246, 0.2), transparent 32%), radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.18), transparent 25%), radial-gradient(circle at 80% 0%, rgba(255, 78, 205, 0.18), transparent 24%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(34, 211, 238, 0.0)' },
          '50%': { boxShadow: '0 0 35px rgba(34, 211, 238, 0.25)' },
        },
      },
    },
  },
  plugins: [],
}
