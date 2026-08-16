/** @type {import('tailwindcss').Config} */

// Resolves a color utility against a CSS custom property holding an
// "R G B" triplet, so Tailwind's opacity modifiers (e.g. bg-night/90)
// keep working while the actual value can flip between day/night themes.
function withOpacity(variable) {
  return ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;
}

module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: withOpacity("--color-night"),
        panel: withOpacity("--color-panel"),
        "panel-soft": withOpacity("--color-panel-soft"),
        "panel-elev": withOpacity("--color-panel-elev"),
        hairline: "var(--color-hairline)",
        strong: "var(--color-strong)",
        accent: {
          DEFAULT: withOpacity("--color-accent"),
          bright: withOpacity("--color-accent-bright"),
          dim: withOpacity("--color-accent-dim"),
        },
        ink: {
          DEFAULT: withOpacity("--color-ink"),
          secondary: withOpacity("--color-ink-secondary"),
          muted: withOpacity("--color-ink-muted"),
        },
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "Segoe UI", "sans-serif"],
        mono: ["'JetBrains Mono'", "Consolas", "monospace"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        panel: "var(--shadow-panel)",
      },
      backgroundImage: {
        "grid-texture":
          "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
