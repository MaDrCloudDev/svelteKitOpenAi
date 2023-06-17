import { c as create_ssr_component, f as add_attribute } from "../../chunks/index3.js";
import "sse.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-ydt01x{background-color:black;font-weight:500;max-width:-moz-max-content;max-width:max-content;letter-spacing:2px;padding:10px 22px;box-shadow:4px 4px 0 -1px #7f7d76;transition:0.25s ease;border:1px solid black}.btn.svelte-ydt01x:is(:hover, :focus-visible){background-color:#328eef;box-shadow:5px 5px 0 -2px #fffb00;border:1px solid #328eef}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let context = "";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-14v2q_START -->${$$result.title = `<title>flirtatiousAI | MaDr</title>`, ""}<meta name="description" content="A bot that flirts with you by MaDrCloudDev."><!-- HEAD_svelte-14v2q_END -->`, ""}

<h1 class="text-4xl sm:text-5xl font-bold text-[#328eef] text-center">flirtatiousAI</h1>
<form class="flex flex-col max-w-lg w-full mx-auto overflow-hidden"><label class="text-[#fffb00] text-xl sm:text-2xl px-1 mb-1 ml-1" for="context">Introduce yourself to the AI:</label>
	<input placeholder="e.g. Hi, I'm MaDr, I'm a developer from Arizona..." class="bg-black placeholder:text-gray-400 border-2 border-[#7F7D76] text-[#328eef] text-sm sm:text-xl px-3 py-2 mx-1" name="context"${add_attribute("value", context, 0)}>
	<div class="flex justify-center mt-3 mb-3"><button type="submit" class="btn btn-primary text-[#7F7D76] hover:text-black text-lg svelte-ydt01x">Introduce Yourself</button></div>
	${``}</form>

<div class="flex justify-center mt-2"><a href="https://madr.io/flirtatiousai" class="justify-center text-lg sm:text-2xl hover:text-[#fffb00] text-[#328eef] cursor-pointer">Read about this project!</a>
</div>`;
});
export {
  Page as default
};
