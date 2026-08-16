import { HiSun, HiMoon } from "react-icons/hi";
import useTheme from "../../hooks/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === "night";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isNight ? "Switch to day view" : "Switch to night view"}
      title={isNight ? "Day view" : "Night view"}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded border border-hairline text-ink-secondary transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {isNight ? <HiSun className="text-base" /> : <HiMoon className="text-base" />}
    </button>
  );
}
