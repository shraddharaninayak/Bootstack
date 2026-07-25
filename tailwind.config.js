/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F7AA00",
          blue: "#235784",
          "blue-dark": "#1A425F",
          cyan: "#40A8C4",
          bg: "#EEF6F7",
        },
        ink: {
          900: "#1E293B",
          500: "#64748B",
        },
        line: "rgba(35,87,132,0.08)",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,41,59,0.04), 0 8px 24px -12px rgba(35,87,132,0.12)",
        "card-hover": "0 4px 8px rgba(30,41,59,0.06), 0 16px 32px -12px rgba(35,87,132,0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
