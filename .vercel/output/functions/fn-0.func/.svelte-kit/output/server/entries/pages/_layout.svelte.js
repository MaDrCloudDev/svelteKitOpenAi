import { c as create_ssr_component } from "../../chunks/index2.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col items-center py-14"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
