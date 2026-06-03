import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) return "";
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    }
  }, [setTheme]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} theme`;

  return (
    <div className="flex w-fit justify-between rounded-full border-2 border-current hover:border-[#366CC6] dark:hover:border-[#C63D32]">
      <button
        className="group flex w-fit justify-between *:transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#366CC6] dark:focus-visible:outline-[#C63D32]"
        title={label}
        aria-label={label}
        aria-pressed={theme === "dark"}
        aria-live="polite"
        onClick={() => {
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
          className="m-1 text-[#C63D32] dark:text-current dark:group-hover:rotate-[24deg]"
          aria-hidden="true"
          size={20}
        />
        <Moon
          className="m-1 text-current group-hover:rotate-[24deg] dark:text-[#366CC6] dark:group-hover:rotate-0"
          aria-hidden="true"
          size={20}
        />
      </button>
    </div>
  );
};

export default ThemeToggleButton;
