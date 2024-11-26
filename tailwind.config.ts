import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-text':'#F2F7FC'
      },
      boxShadow:{
        'cardShadow': '10px 10px 2px rgba(255,0,0);',
      },
  },
  plugins: [],
}
} satisfies Config;
