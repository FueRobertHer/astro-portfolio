import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggleButton = () => {
  // Render a stable default on the server and the first client render so
  // hydration matches; resolve the real theme only after mount.
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} theme`;

  return (
    <div className="flex w-fit justify-between rounded-full border-2 border-current hover:border-accent dark:hover:border-accent-dark">
      <button
        className="group flex w-fit justify-between *:transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent dark:focus-visible:outline-accent-dark"
        title={label}
        aria-label={label}
        aria-pressed={theme === "dark"}
        aria-live="polite"
        onClick={() => {
          // Briefly ease theme colors instead of snapping (see global.css).
          const root = document.documentElement;
          root.classList.add("theme-transition");
          window.setTimeout(() => root.classList.remove("theme-transition"), 350);

          const matchesDarkTheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;

          const otherTheme = theme === "dark" ? "light" : "dark";

          if (
            (matchesDarkTheme && theme === "dark") ||
            (!matchesDarkTheme && theme === "light")
          ) {
            localStorage.removeItem("theme");
          } else {
            localStorage.setItem("theme", otherTheme);
          }

          setTheme(otherTheme);
        }}
      >
        <Sun
          className="m-1 text-accent-dark dark:text-current dark:group-hover:rotate-[24deg]"
          aria-hidden="true"
          size={20}
        />
        <Moon
          className="m-1 text-current group-hover:rotate-[24deg] dark:text-accent dark:group-hover:rotate-0"
          aria-hidden="true"
          size={20}
        />
      </button>
    </div>
  );
};

export default ThemeToggleButton;
