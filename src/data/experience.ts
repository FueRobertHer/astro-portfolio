// Mirrors the résumé in public/Fue_Her_Resume.pdf; update both together.
export const resumeHref = "/Fue_Her_Resume.pdf";

export interface Role {
  title: string;
  company: string;
  dates: string;
  highlights: string[];
}

export const roles: Role[] = [
  {
    title: "Software Engineer",
    company: "Atlassian (Growth)",
    dates: "Sept 2022 to Aug 2026",
    highlights: [
      "Led a machine-learning personalization program on high-traffic acquisition pages: 8 contextual-bandit experiments, with shipped treatments at +11.3% and +33.2% conversion lift.",
      "Built the personalization platform and generalized it across 3 product lines, scaling 18 hand-built variants into 1,632 targeted permutations.",
      "Cut experiment QA from 60 to 15 minutes and content ingest from over a day to about 2 hours; mentored engineers and interns through promotion.",
    ],
  },
  {
    title: "Software Engineer II",
    company: "Remesh",
    dates: "Nov 2021 to Jul 2022",
    highlights: [
      "Built features across Django, React, and a Go ML pipeline, including a release that beat quarterly goals within its first month.",
      "Added image cropping and video captions, and trained engineers to translate the platform into 28+ languages.",
    ],
  },
  {
    title: "Software Engineer I",
    company: "Remesh",
    dates: "Oct 2020 to Nov 2021",
    highlights: [
      "Started the accessibility work that brought the platform to WCAG A and AA compliance, and helped make it CCPA and GDPR compliant.",
      "Built developer tooling that turned repetitive tasks into one click across the engineering team.",
    ],
  },
];

export interface Education {
  name: string;
  school: string;
  year: string;
}

export const education: Education[] = [
  {
    name: "Software Engineering Immersive",
    school: "App Academy",
    year: "2019",
  },
  {
    name: "B.S. Biology, Ecology and Evolution",
    school: "University of California, Merced",
    year: "2013",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const impact: Stat[] = [
  {
    value: "+33.2%",
    label: "Conversion lift from a contextual-bandit experiment I shipped",
  },
  {
    value: "1,632",
    label: "Targeted page variants, scaled from 18 hand-built ones",
  },
  {
    value: "4x",
    label: "Faster experiment QA, from 60 minutes down to 15",
  },
  {
    value: "28+",
    label: "Languages I helped take the Remesh platform to",
  },
];
