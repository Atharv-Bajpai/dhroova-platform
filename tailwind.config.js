/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vedic: {
          // Royal Blue (Contrast for Headings/Structure)
          primary: '#003366', 
          
          // Golden Ochre (Main Accent for Links/CTAs/Tagline)
          accent: '#CC9900',  
          
          // Off-White (Main Background)
          bg: '#FAF9F6',      
          
          // Royal Blue (Text color for great contrast on Off-White)
          text: '#003366',    
          
          // Off-White (Card/Surface color)
          surface: '#FAF9F6', 
          
          // Greenish-Gold (Secondary Accent for Hover States)
          secondaryAccent: '#99A166',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}