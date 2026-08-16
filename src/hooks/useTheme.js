import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialTheme() {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "day" || attr === "night") return attr;
  }
  return "night";
}

// Day/night color-grading toggle. The <html data-theme> attribute drives the
// CSS variables in index.css; this hook just keeps React, the DOM attribute,
// and localStorage in sync.
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // storage unavailable (private browsing, etc.) — theme still applies for this session
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "night" ? "day" : "night"));

  return { theme, toggleTheme };
}
