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
    title: "Astro Portfolio",
    eyebrow: "Personal site",
    summary:
      "A fast, responsive portfolio built with Astro, React islands, Tailwind CSS, and Vercel previews.",
    role: "Designed, built, and maintained the site end to end.",
    stack: ["Astro", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Migrated the stack to Astro 6, React 19, and Tailwind 4.",
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
    featured: true,
  },
  {
    title: "Her Family",
    eyebrow: "Family site",
    summary:
      "An Astro site for sharing family-focused information in a clear, approachable format.",
    role: "Built the public-facing site and deployment workflow.",
    stack: ["Astro", "Vercel", "Responsive UI"],
    highlights: [
      "Structured content for simple browsing across devices.",
      "Used Astro to keep the site lightweight and maintainable.",
      "Published with a live Vercel deployment.",
    ],
    links: [
      {
        label: "View code",
        href: "https://github.com/FueRobertHer/her-family",
      },
      {
        label: "View site",
        href: "https://her-family.vercel.app",
      },
    ],
    featured: true,
  },
  {
    title: "Nspect",
    eyebrow: "Single-page app",
    summary:
      "A single-page iNaturalist-inspired app for exploring nature observations and discovery workflows.",
    role: "Built the application UI and interaction model.",
    stack: ["JavaScript", "Single-page app", "API integration"],
    highlights: [
      "Translated a real product pattern into a focused clone.",
      "Practiced data-driven UI flows and browsing states.",
      "Balanced visual browsing with practical interaction details.",
    ],
    links: [
      {
        label: "View code",
        href: "https://github.com/FueRobertHer/Nspect",
      },
    ],
    featured: true,
  },
  {
    title: "TabbyNotes",
    eyebrow: "Browser extension",
    summary:
      "A React-powered Chrome extension for keeping lightweight notes close to the browser workflow.",
    role: "Built the extension UI and browser integration.",
    stack: ["React", "JavaScript", "Chrome Extension"],
    highlights: [
      "Explored extension constraints and browser APIs.",
      "Designed for quick capture instead of a full productivity suite.",
      "Kept the UI compact for repeated everyday use.",
    ],
    links: [
      {
        label: "View code",
        href: "https://github.com/FueRobertHer/TabbyNotes",
      },
    ],
  },
  {
    title: "Jumpy Kart",
    eyebrow: "Game project",
    summary:
      "A Mario-themed take on a Flappy Bird-style platformer, built as a playful JavaScript game project.",
    role: "Built the game loop, controls, and browser experience.",
    stack: ["JavaScript", "Game UI", "Browser APIs"],
    highlights: [
      "Implemented a simple arcade interaction loop.",
      "Worked through timing, collision, and restart states.",
      "Used a familiar game pattern to practice responsive feedback.",
    ],
    links: [
      {
        label: "View code",
        href: "https://github.com/FueRobertHer/jumpy_kart",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
