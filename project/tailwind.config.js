/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: 'hsl(259, 94%, 97%)',
          100: 'hsl(259, 94%, 92%)',
          200: 'hsl(259, 94%, 85%)',
          300: 'hsl(259, 94%, 75%)',
          400: 'hsl(259, 94%, 65%)',
          500: 'hsl(259, 94%, 51%)',
          600: 'hsl(259, 94%, 45%)',
          700: 'hsl(259, 94%, 38%)',
          800: 'hsl(259, 94%, 32%)',
          900: 'hsl(259, 94%, 26%)',
          950: 'hsl(259, 94%, 20%)',
        },
        secondary: {
          50: 'hsl(196, 100%, 95%)',
          100: 'hsl(196, 100%, 90%)',
          200: 'hsl(196, 100%, 80%)',
          300: 'hsl(196, 100%, 70%)',
          400: 'hsl(196, 100%, 60%)',
          500: 'hsl(196, 100%, 50%)',
          600: 'hsl(196, 100%, 45%)',
          700: 'hsl(196, 100%, 35%)',
          800: 'hsl(196, 100%, 30%)',
          900: 'hsl(196, 100%, 25%)',
          950: 'hsl(196, 100%, 15%)',
        },
        accent: {
          50: 'hsl(316, 100%, 97%)',
          100: 'hsl(316, 100%, 92%)',
          200: 'hsl(316, 100%, 85%)',
          300: 'hsl(316, 100%, 75%)',
          400: 'hsl(316, 100%, 65%)',
          500: 'hsl(316, 100%, 55%)',
          600: 'hsl(316, 100%, 45%)',
          700: 'hsl(316, 100%, 35%)',
          800: 'hsl(316, 100%, 30%)',
          900: 'hsl(316, 100%, 25%)',
          950: 'hsl(316, 100%, 15%)',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'url("/images/hero-pattern.svg")',
      },
    },
  },
  plugins: [],
};