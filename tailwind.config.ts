import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(225, 39%, 8%)",
        foreground: "hsl(0, 0%, 98%)",
        primary: {
          DEFAULT: "hsl(266, 85%, 58%)",
          foreground: "hsl(0, 0%, 98%)",
          glow: "hsl(266, 85%, 70%)",
        },
        secondary: {
          DEFAULT: "hsl(225, 39%, 12%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        success: {
          DEFAULT: "hsl(142, 76%, 36%)",
          foreground: "hsl(0, 0%, 98%)",
          glow: "hsl(142, 76%, 50%)",
        },
        warning: {
          DEFAULT: "hsl(25, 95%, 53%)",
          foreground: "hsl(0, 0%, 98%)",
          glow: "hsl(25, 95%, 65%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 98%)",
          glow: "hsl(0, 84%, 70%)",
        },
        muted: {
          DEFAULT: "hsl(225, 39%, 18%)",
          foreground: "hsl(225, 7%, 70%)",
        },
        accent: {
          DEFAULT: "hsl(191, 100%, 50%)",
          foreground: "hsl(0, 0%, 98%)",
          glow: "hsl(191, 100%, 65%)",
        },
        card: {
          DEFAULT: "hsl(225, 39%, 10%)",
          foreground: "hsl(0, 0%, 98%)",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "glow-pulse": {
          "0%": { filter: "drop-shadow(0 0 5px hsl(266, 85%, 58%))" },
          "100%": { filter: "drop-shadow(0 0 20px hsl(266, 85%, 70%))" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;