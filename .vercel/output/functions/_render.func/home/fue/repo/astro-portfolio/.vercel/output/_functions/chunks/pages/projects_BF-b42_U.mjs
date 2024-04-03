/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_DmV6Xgd_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$ContentLayout, $ as $$BaseLayout } from './about_CBUpld6L.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects | Fue Her" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentLayout", $$ContentLayout, { "header": "Projects" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="*:my-4"> <p>
🚧 Page under construction. 🚧
</p> </div> ` })} ` })}`;
}, "/home/fue/repo/astro-portfolio/src/pages/projects.astro", void 0);

const $$file = "/home/fue/repo/astro-portfolio/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
