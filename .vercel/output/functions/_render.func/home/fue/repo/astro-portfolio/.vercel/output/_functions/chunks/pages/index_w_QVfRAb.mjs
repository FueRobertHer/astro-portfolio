/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_DRYuNIHL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from './about_kJwYBP9s.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Fue Her" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex pl-20 md:pl-40W"> <div class="flex flex-col gap-3 pt-40 md:pt-40"> <h1 class="text-6xl md:text-8xl w-fit bg-clip-text font-black text-transparent bg-gradient-to-b from-[#C63D32] to-[#366CC6]">
Fue Her
</h1> <h2 class="text-lg md:text-xl">
Full Stack Engineer
</h2> <p class="text-stone-600 dark:text-stone-300">
I build things for work and fun.
</p> </div> </main> ` })}`;
}, "/home/fue/repo/astro-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/fue/repo/astro-portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
