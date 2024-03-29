/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_DRYuNIHL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Astro$5 = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<svg width="100%" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"> <title>fueher.com logo</title> <path d="M281 306H331V406C331 433.614 353.386 456 381 456C408.614 456 431 433.614 431 406V106C431 78.3858 408.614 56 381 56C353.386 56 331 78.3858 331 106V206H281C308.614 206 331 228.386 331 256C331 283.614 308.614 306 281 306Z" fill="#366CC6"></path> <path d="M120.923 57.0158C98.1391 61.6781 81 81.8375 81 106V406C81 433.614 103.386 456 131 456C158.614 456 181 433.614 181 406V306H281C308.614 306 331 283.614 331 256C331 228.386 308.614 206 281 206H181V106C181 78.3858 158.614 56 131 56C127.548 56 124.178 56.3498 120.923 57.0158Z" fill="#74527A"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 156H281C308.614 156 331 133.614 331 106C331 78.3858 308.614 56 281 56H131C158.614 56 181 78.3858 181 106V156Z" fill="#C63D32"></path> </svg>`;
}, "/home/fue/repo/astro-portfolio/src/components/Logo.astro", void 0);

const $$Astro$4 = createAstro();
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href } = Astro2.props;
  const path = Astro2.url.pathname;
  const isActive = path === href;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`py-2 font-bold uppercase hover:text-[#366CC6] dark:hover:text-[#C63D32] ${isActive && "text-[#366CC6] dark:text-[#C63D32]"}`, "class")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/fue/repo/astro-portfolio/src/components/NavLink.astro", void 0);

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(() => {
    return "";
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
  return /* @__PURE__ */ jsx("span", { className: "flex w-fit justify-between border border-current rounded-full", children: /* @__PURE__ */ jsxs(
    "button",
    {
      className: "flex w-fit justify-between border border-current rounded-full",
      title: "Toggles light & dark",
      "aria-label": "auto",
      "aria-live": "polite",
      onClick: () => {
        const matchesDarkTheme = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const otherTheme = theme === "dark" ? "light" : "dark";
        if (matchesDarkTheme && theme === "dark" || !matchesDarkTheme && theme === "light") {
          localStorage.removeItem("theme");
        } else {
          localStorage.setItem("theme", otherTheme);
        }
        setTheme(otherTheme);
      },
      children: [
        /* @__PURE__ */ jsx("span", { className: "p-1", children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "fill-[#C63D32] dark:fill-current dark:hover:rotate-4",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            "aria-label": "sun",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                clipRule: "evenodd"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "p-1", children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "fill-current dark:fill-[#366CC6] hover:rotate-4",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            "aria-label": "moon",
            children: /* @__PURE__ */ jsx("path", { d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" })
          }
        ) })
      ]
    }
  ) });
};

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "About",
      href: "/about"
    },
    {
      text: "Projects",
      href: "/projects"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="flex w-full justify-between py-4 px-8"> <a class=" size-8" href="/"> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class="flex items-center"> ${links.map((link) => renderTemplate`<span class="mx-4"> ${renderComponent($$result, "NavLink", $$NavLink, { "href": link.href }, { "default": ($$result2) => renderTemplate`${link.text}` })} </span>`)} <span class="mx-4"> ${renderComponent($$result, "ThemeToggleButton", ThemeToggleButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/fue/repo/astro-portfolio/src/components/Sidebar/ThemeToggleButton", "client:component-export": "default" })} </span> </div> </header>`;
}, "/home/fue/repo/astro-portfolio/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="font-sans"> <head><title>', '</title><meta charset="UTF-8"><meta name="author" content="Fue Her"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="HTML, CSS, JavaScript, software, engineer, full-stack, React, Astro, Tailwind, Python, Hmong"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="msapplication-config" content="/browserconfig.xml"><meta name="msapplication-TileColor" content="#ffffff"><meta name="theme-color" content="#ffffff"><meta name="generator"', '><!-- font family --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap" rel="stylesheet">', "<!-- inline to prevent FOUC --><script>\n      const root = document.documentElement;\n      const theme = localStorage.getItem('theme');\n      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n        root.classList.add('dark');\n      } else {\n        root.classList.remove('dark');\n      }\n    <\/script>", '</head> <body class="flex flex-col items-center justify-center min-h-screen min-w-full bg-stone-200 dark:bg-stone-900 text-stone-700 dark:text-stone-200"> <div class="flex flex-col items-center max-w-screen-2xl w-full grow bg-stone-200 dark:bg-stone-950 m-12 rounded shadow-[0_0_0.5em_0.5em_rgba(135,135,135,0.15)] dark:shadow-[0_0_0.5em_0.5em_rgba(40,40,40,0.35)]"> ', ' <!-- <div class="w-2/12">\n       <Sidebar />\n      </div> --> <div class="w-10/12 mx-20 max-w-6xl"> ', " </div> </div> </body></html>"])), title, addAttribute(Astro2.generator, "content"), renderSlot($$result, $$slots["meta"]), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]));
}, "/home/fue/repo/astro-portfolio/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContentLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { header } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="w-full mt-10 md:mt-20"> <h1 class="text-lg font-bold">${header}</h1> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/home/fue/repo/astro-portfolio/src/layouts/ContentLayout.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Fue Her" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentLayout", $$ContentLayout, { "header": "Hi, I'm Fue." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class=" *:my-4"> <p>
My name is pronounced /fu:/; like 'food' without the 'd'.
</p> <p>
Technology has always been a passion of mine but I made a professional transition
				into the field in 2019. Since then, I've been fortunate enough to find myself in
				amazing supportive teams at a start-up and a large corporation.
</p> <p>
My skills lean frontend, but my focus has always been as a full stack dev building
				reliable, accessible, and performant systems that can scale. I beleive there's always room for
				improvment and something new to learn so you might catch me playing with some new tools and tech
				every now and again.
</p> <p>
When I'm not coding, you'll probably still find me at the computer playing video games, reading
				the latest web novel I'm following, or watching my favorite Game Changer. Away from a screen 
				I spend time with my partner gardening, cooking, or taking in nature on a hike.
</p> </div> ` })} ` })}`;
}, "/home/fue/repo/astro-portfolio/src/pages/about.astro", void 0);

const $$file = "/home/fue/repo/astro-portfolio/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, $$ContentLayout as a, about as b };
