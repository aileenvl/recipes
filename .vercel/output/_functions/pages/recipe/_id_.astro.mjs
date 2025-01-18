/* empty css                                    */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro } from '../../chunks/astro/server_Cyawyvi5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CK1LfQYM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
function getStaticPaths() {
  return [{ params: { id: "default" } }];
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const name = Astro2.url.searchParams.get("name");
  if (!id || !name) {
    return Astro2.redirect("/", 302);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Recipe" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RecipeDetail", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/aileenvillanueva/Documents/code/orama/demo-apps/recipes/src/components/RecipeDetail", "client:component-export": "default" })} ` })}`;
}, "/Users/aileenvillanueva/Documents/code/orama/demo-apps/recipes/src/pages/recipe/[id].astro", undefined);

const $$file = "/Users/aileenvillanueva/Documents/code/orama/demo-apps/recipes/src/pages/recipe/[id].astro";
const $$url = "/recipe/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
