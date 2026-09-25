import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const readTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const ThemeToggleButton = () => {
  // Render a stable default on the server and the first client render so
  // hydration matches; resolve the real theme only after mount.
  const [theme, setTheme] = useState<Theme>("light");

  // Follow the <html> class rather than owning the theme, so the desktop and
  // mobile-menu toggles (and system preference changes) stay in sync.
  useEffect(() => {
    const sync = () => setTheme(readTheme());
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

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
          const next = readTheme() === "dark" ? "light" : "dark";
          const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light";

          // Only remember an explicit choice; matching the system again means
          // "follow the system" from here on.
          if (next === systemTheme) {
            localStorage.removeItem("theme");
          } else {
            localStorage.setItem("theme", next);
          }

          // A view transition crossfades one snapshot of the whole page, so
          // every surface changes together instead of each element easing on
          // its own clock (which read as a flicker).
          const apply = () => window.__applyTheme(next);
          const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          if (document.startViewTransition && !reduceMotion) {
            document.startViewTransition(apply);
          } else {
            apply();
          }
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
