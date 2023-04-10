import { c as create_ssr_component, f as add_attribute } from "../../chunks/index2.js";
import "sse.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let context = "";
  return `${$$result.head += `<!-- HEAD_svelte-14v2q_START -->${$$result.title = `<title>flirtatiousAI | MaDr</title>`, ""}<meta name="${"description"}" content="${"A bot that flirts with you by MaDrCloudDev."}"><!-- HEAD_svelte-14v2q_END -->`, ""}

<h1 class="${"text-4xl font-bold text-[#328eef] text-center"}">flirtatiousAI</h1>
<form class="${"flex flex-col max-w-lg w-full mx-auto overflow-hidden"}"><label class="${"text-[#fffb00] text-xl mb-1"}" for="${"context"}">Introduce yourself to the bot:</label>
	<input placeholder="${"e.g. Hi, I'm MaDr, I'm a developer from Arizona..."}" class="${"bg-black rounded-md border-[#7f7d76] border text-[#328eef] p-4"}" name="${"context"}"${add_attribute("value", context, 0)}>
	<button type="${"submit"}" class="${"btn mb-2 btn-black w-fit mx-auto mt-3 p-4 rounded-full border border-gray-900 text-[#7f7d76] shadow-md shadow-gray-700 hover:scale-110 ease-in duration-200 hover:text-[#fffb00] hover:border-[#328eef] hover:shadow-[#328eef] text-sm md:text-lg"}">Introduce Yourself</button>
	${``}</form>

<div class="${"flex justify-center mt-2"}"><a href="${"https://madr.io/flirtatiousai"}" class="${"justify-center text-lg sm:text-xl hover:text-[#fffb00] text-[#328eef] cursor-pointer"}">Read about this project!</a></div>`;
});
export {
  Page as default
};
