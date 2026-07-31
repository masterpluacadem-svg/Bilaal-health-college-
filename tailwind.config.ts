import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bilaal: {
          primary: "#1E5AA8",      // Primary Blue
          secondary: "#2E8BCB",    // Secondary Blue
          light: "#F5F9FD",        // Light Blue Background
          dark: "#1F2937",         // Dark Text
          accent: "#16A34A",       // Accent Green
          navy: "#0F2E5A",         // Darker Navy for high-contrast footers/accents
          surface: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(30, 90, 168, 0.08)',
        'card': '0 10px 30px -5px rgba(30, 90, 168, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(30, 90, 168, 0.15), 0 8px 12px -4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
