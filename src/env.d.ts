/// <reference types="astro/client" />

interface Window {
  // Defined by the inline theme script in BaseLayout.astro.
  __applyTheme: (theme: "light" | "dark") => void;
}
