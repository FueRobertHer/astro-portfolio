import * as React from "react";
import { useState, useEffect } from "react";

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

  return (
    <div className="flex w-fit justify-between border-2 border-current rounded-full hover:border-[#366CC6] dark:hover:border-[#C63D32]">
      <button
        className="group flex w-fit justify-between *:transition-transform"
        title="Toggles light & dark"
        aria-label="auto"
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
        <svg
          className="m-1 fill-[#C63D32] dark:fill-current dark:group-hover:rotate-[24deg] "
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-label="sun"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className="m-1 fill-current dark:fill-[#366CC6] group-hover:rotate-[24deg] dark:group-hover:rotate-0"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-label="moon"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
