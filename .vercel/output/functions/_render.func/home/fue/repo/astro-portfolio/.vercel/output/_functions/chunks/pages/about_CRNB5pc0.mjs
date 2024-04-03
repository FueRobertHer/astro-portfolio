/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_DRYuNIHL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';

const $$Astro$6 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Link;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`text-blue-700 hover:text-blue-400 dark:text-blue-200 dark:hover:text-blue-400 ${props.class}`, "class")}${addAttribute(props.href, "href")}${addAttribute(props.target, "target")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/fue/repo/astro-portfolio/src/components/Link.astro", void 0);

const $$Astro$5 = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<svg class=" fill-[#366CC6] dark:fill-[#C63D32]" width="2rem" height="2rem" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.95245 9.496C1.95245 9.88 1.71645 10.072 1.24445 10.072C0.772453 10.072 0.536453 9.88 0.536453 9.496V1.192C0.536453 1.008 0.588453 0.844 0.692453 0.7C0.796453 0.548 0.996453 0.472 1.29245 0.472H5.37245C5.66045 0.472 5.81245 0.672 5.82845 1.072C5.84445 1.48 5.69245 1.684 5.37245 1.684H1.95245V9.496ZM5.02445 5.044C5.02445 5.18 4.99645 5.312 4.94045 5.44C4.89245 5.56 4.82045 5.664 4.72445 5.752C4.63645 5.84 4.53245 5.912 4.41245 5.968C4.29245 6.016 4.16045 6.04 4.01645 6.04C3.74445 6.04 3.51245 5.944 3.32045 5.752C3.12845 5.56 3.03245 5.324 3.03245 5.044C3.03245 4.764 3.12845 4.528 3.32045 4.336C3.51245 4.144 3.74445 4.048 4.01645 4.048C4.16045 4.048 4.29245 4.076 4.41245 4.132C4.53245 4.18 4.63645 4.252 4.72445 4.348C4.82045 4.436 4.89245 4.54 4.94045 4.66C4.99645 4.78 5.02445 4.908 5.02445 5.044ZM12.2098 0.987999C12.2098 0.604 12.4458 0.412 12.9178 0.412C13.3978 0.412 13.6378 0.604 13.6378 0.987999V9.496C13.6378 9.88 13.3978 10.072 12.9178 10.072C12.4458 10.072 12.2098 9.88 12.2098 9.496V0.987999ZM8.56183 9.496C8.56183 9.88 8.32183 10.072 7.84183 10.072C7.36983 10.072 7.13383 9.88 7.13383 9.496V0.987999C7.13383 0.604 7.36983 0.412 7.84183 0.412C8.32183 0.412 8.56183 0.604 8.56183 0.987999V9.496ZM11.3698 5.044C11.3698 5.324 11.2738 5.56 11.0818 5.752C10.8898 5.944 10.6538 6.04 10.3738 6.04C10.1018 6.04 9.86983 5.944 9.67783 5.752C9.48583 5.56 9.38983 5.324 9.38983 5.044C9.38983 4.764 9.48583 4.528 9.67783 4.336C9.86983 4.144 10.1018 4.048 10.3738 4.048C10.6538 4.048 10.8898 4.144 11.0818 4.336C11.2738 4.528 11.3698 4.764 11.3698 5.044Z"></path> </svg>`;
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

const Menu = (props) => {
  const dialogRef = React.useRef(null);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          const dialog = dialogRef.current;
          dialog.showModal();
        },
        title: "Open navigation menu",
        "aria-label": "Open navigation menu",
        className: "size-8 mx-6 text-3xl ",
        children: "☰"
      }
    ),
    /* @__PURE__ */ jsx(
      "dialog",
      {
        ref: dialogRef,
        onClick: (e) => {
          const dialog = dialogRef.current;
          const wrapper = dialog.firstChild;
          if (wrapper !== null && !wrapper.contains(e.target)) {
            dialog.close();
          }
        },
        className: "relative w-10/12 text-stone-700 mt-8 rounded-md dark:text-stone-200 bg-stone-200 dark:bg-stone-950  backdrop:bg-black backdrop:opacity-20 dark:backdrop:opacity-50",
        children: /* @__PURE__ */ jsxs("div", { className: "px-8 py-12", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                const dialog = dialogRef.current;
                dialog.close();
              },
              title: "Close menu",
              "aria-label": "Close menu",
              className: "absolute top-2 right-2 flex items-center justify-center size-8 rounded-md",
              children: "✕"
            }
          ),
          props.children
        ] })
      }
    )
  ] });
};

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
  return /* @__PURE__ */ jsx("div", { className: "flex w-fit justify-between border-2 border-current rounded-full hover:border-[#366CC6] dark:hover:border-[#C63D32]", children: /* @__PURE__ */ jsxs(
    "button",
    {
      className: "group flex w-fit justify-between *:transition-transform",
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
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "m-1 fill-[#C63D32] dark:fill-current dark:group-hover:rotate-[24deg] ",
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
        ),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "m-1 fill-current dark:fill-[#366CC6] group-hover:rotate-[24deg] dark:group-hover:rotate-0",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            "aria-label": "moon",
            children: /* @__PURE__ */ jsx("path", { d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" })
          }
        )
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
  return renderTemplate`${maybeRenderHead()}<header class="flex w-full justify-between py-4 sm:px-8"> <a class="size-8 mx-6" href="/" aria-label="Home"> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class=" hidden sm:flex items-center justify-between w-full sm:w-fit sm:justify-normal"> ${links.map((link) => renderTemplate`<span class="mx-4"> ${renderComponent($$result, "NavLink", $$NavLink, { "href": link.href }, { "default": ($$result2) => renderTemplate`${link.text}` })} </span>`)} <span class="mx-4"> ${renderComponent($$result, "ThemeToggleButton", ThemeToggleButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/fue/repo/astro-portfolio/src/components/ThemeToggleButton", "client:component-export": "default" })} </span> </div> <div class=" sm:hidden"> ${renderComponent($$result, "Menu", Menu, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/fue/repo/astro-portfolio/src/components/Menu", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <menu class="flex flex-col items-center text-lg gap-4"> <div> ${renderComponent($$result2, "ThemeToggleButton", ThemeToggleButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/fue/repo/astro-portfolio/src/components/ThemeToggleButton", "client:component-export": "default" })} </div> ${links.map((link) => renderTemplate`<div> ${renderComponent($$result2, "NavLink", $$NavLink, { "href": link.href }, { "default": ($$result3) => renderTemplate`${link.text}` })} </div>`)} </menu> ` })} </div> </header>`;
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
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="font-sans"> <head><title>', '</title><meta charset="UTF-8"><meta name="author" content="Fue Her"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="HTML, CSS, JavaScript, software, engineer, full-stack, React, Astro, Tailwind, Python, Hmong"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="msapplication-config" content="/browserconfig.xml"><meta name="msapplication-TileColor" content="#ffffff"><meta name="theme-color" content="#ffffff"><meta name="generator"', ">", "<!-- inline to prevent FOUC --><script>\n      const root = document.documentElement;\n      const theme = localStorage.getItem('theme');\n      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n        root.classList.add('dark');\n      } else {\n        root.classList.remove('dark');\n      }\n    <\/script>", '</head> <body class="flex flex-col items-center justify-center min-h-screen min-w-full p-4 sm:p-12 sm:pb-2 bg-stone-200 dark:bg-stone-900 text-stone-700 dark:text-stone-200"> <div class="relative flex flex-col items-center max-w-full sm:max-w-screen-2xl w-full grow bg-stone-200 dark:bg-stone-950 rounded shadow-[0_0_0.5em_0.5em_rgba(135,135,135,0.15)] dark:shadow-[0_0_0.5em_0.5em_rgba(40,40,40,0.35)]"> ', ' <!-- <div class="w-2/12">\n       <Sidebar />\n      </div> --> <div class="mx-4 w-full sm:w-10/12 sm:mx-20 sm:max-w-6xl"> ', ' </div> </div> <footer class="m-4 text-"> <p class=" text-center text-xs sm:text-sm">\nDesigned and coded by me. Built with\n', " and\n", ", deployed with\n", ".\n</p> </footer> </body></html>"])), title, addAttribute(Astro2.generator, "content"), renderSlot($$result, $$slots["meta"]), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Link", $$Link, { "href": "https://astro.build/", "target": "_blank" }, { "default": ($$result2) => renderTemplate`Astro` }), renderComponent($$result, "Link", $$Link, { "href": "https://tailwindcss.com/", "target": "_blank" }, { "default": ($$result2) => renderTemplate`Tailwind CSS` }), renderComponent($$result, "Link", $$Link, { "href": "https://vercel.com", "target": "_blank" }, { "default": ($$result2) => renderTemplate`Vercel` }));
}, "/home/fue/repo/astro-portfolio/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContentLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { header } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="w-full p-10 sm:mt-20"> <h1 class="text-lg font-bold">${header}</h1> ${renderSlot($$result, $$slots["default"])} </main>`;
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
				the latest web novel I'm following, or watching my favorite
${renderComponent($$result3, "Link", $$Link, { "href": "https://www.dropout.tv/game-changer", "target": "_blank", "class": "group" }, { "default": ($$result4) => renderTemplate`
Game Changer.
<img src="/sam.png"${addAttribute(`Sam Reich with caption, "I've been here the whole time"`, "alt")} height="100" width="108" aria-hidden="true" class=" opacity-0 -z-10 absolute bottom-0 right-0 transition-opacity duration-1000 group-focus:opacity-100 group-hover:opacity-100 group-hover:z-10 group-focus:z-10 "> ` })}
Away from a screen I spend time with my partner gardening, cooking, or taking in nature on a hike.
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
