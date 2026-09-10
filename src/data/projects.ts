export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "The Her Family",
    eyebrow: "Full-stack site",
    summary:
      "A server-rendered memorial hub with multi-memorial routing, a lightbox gallery, and a custom video player.",
    role: "Designed and built the site, admin panel, and data layer end to end.",
    stack: [
      "Astro",
      "Astro DB",
      "Turso",
      "Tailwind CSS",
      "Cloudinary",
      "Vercel",
    ],
    highlights: [
      "Built multi-memorial routing, an image carousel with lightbox, and a custom video player.",
      "Backed it with SQLite/Turso and a secure admin panel for inline editing, drag-and-drop CDN uploads, and moderated comments.",
      "Shipped a mobile-first experience with keyboard- and touch-navigable media, static-first for fast loads.",
    ],
    links: [
      {
        label: "View code",
        href: "https://github.com/FueRobertHer/her-family",
      },
      {
        label: "View site",
        href: "https://www.theherfamily.com",
      },
    ],
    featured: true,
  },
  {
    title: "Nya",
    eyebrow: "Finance PWA",
    summary:
      "A mobile-first finance app that aggregates balances, transactions, and holdings across banks, brokerages, and credit cards.",
    role: "Built the full stack, from account linking to the net-worth engine.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Bun",
      "Plaid API",
      "Upstash Redis",
    ],
    highlights: [
      "Aggregated accounts across institutions through a single account-linking API.",
      "Added category budgets with severity thresholds, recurring-bill detection, and a daily net-worth engine with estimated backfill for gapless charts.",
      "Secured tokens with AES-256-GCM, signed session cookies, and IP-based login rate limiting, with Redis-cached reads.",
    ],
    links: [
      {
        label: "View code",
        href: "https://github.com/FueRobertHer/Nya",
      },
      {
        label: "View site",
        href: "https://nya-rho.vercel.app",
      },
    ],
    featured: true,
  },
  {
    title: "Cast Guidance",
    eyebrow: "Offline-first PWA",
    summary:
      "An installable tabletop character builder that derives every stat on read and works entirely offline.",
    role: "Architected the derivation engine, local persistence, and test pipeline.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Zustand",
      "Dexie/IndexedDB",
      "Vitest",
    ],
    highlights: [
      "Wrote a pure derivation engine that recomputes proficiencies, AC, HP, initiative, attacks, and spell slots on every read, with per-field manual overrides.",
      "Persisted only user choices and play state to IndexedDB behind repository interfaces, gated by CI running lint, strict types, and tests.",
      "Added live session tracking, a dice-expression parser and roller, full-text ruleset search, and user-authored content import.",
    ],
    links: [
      {
        label: "View code",
        href: "https://github.com/FueRobertHer/cast-guidance",
      },
      {
        label: "View site",
        href: "https://cast-guidance.vercel.app",
      },
    ],
    featured: true,
  },
  {
    title: "TabbyNotes",
    eyebrow: "Browser extension",
    summary:
      "A published tabbed Markdown notebook for Chrome and Firefox, with a live preview editor and zero network requests.",
    role: "Built and published the extension across both browser stores.",
    stack: ["TypeScript", "React", "WXT", "CodeMirror", "Tailwind CSS", "Bun"],
    highlights: [
      "Built a live preview editor on CodeMirror 6 and React 19.",
      "Designed it privacy-first: zero browser permissions, zero network requests, notes stored as portable Markdown with import and export.",
      "Shipped keyboard tab navigation, drag reordering, switchable tab layouts, and light and dark themes.",
    ],
    links: [
      {
        label: "View code",
        href: "https://github.com/FueRobertHer/TabbyNotes",
      },
      {
        label: "Firefox Add-ons",
        href: "https://addons.mozilla.org/en-US/firefox/addon/tabbynotes/",
      },
    ],
    featured: true,
  },
  {
    title: "Astro Portfolio",
    eyebrow: "Personal site",
    summary:
      "A fast, responsive portfolio built with Astro, React islands, Tailwind CSS, and Vercel previews.",
    role: "Designed, built, and maintained the site end to end.",
    stack: ["Astro", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Migrated the stack to Astro 7, React 19, and Tailwind 4.",
      "Kept interactive behavior scoped to small React islands.",
      "Added deployment previews through the Vercel GitHub flow.",
    ],
    links: [
      {
        label: "View code",
        href: "https://github.com/FueRobertHer/astro-portfolio",
      },
      {
        label: "View site",
        href: "https://fueher.com",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
