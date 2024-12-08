import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('alb2.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'gray-text':'#F2F7FC'
      },
      boxShadow:{
        'cardShadow': '10px 10px 2px rgba(72, 207, 203);',
      },
      fontFamily:{
        pirata:['var(--font-Pirata_One)'],
        poppins:['var(--font-Poppins)']
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 15slinear infinite',
      }
  },
  variants: {},
  plugins: [],
}
} satisfies Config;
