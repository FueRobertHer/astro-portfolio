/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_DRYuNIHL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$ContentLayout, $ as $$BaseLayout } from './about_kJwYBP9s.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Fue Her" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentLayout", $$ContentLayout, { "header": "Projects" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="mt-20">
I had stuff here but decided to clean it up
</section> ` })} ` })}`;
}, "/home/fue/repo/astro-portfolio/src/pages/projects.astro", void 0);

const $$file = "/home/fue/repo/astro-portfolio/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
