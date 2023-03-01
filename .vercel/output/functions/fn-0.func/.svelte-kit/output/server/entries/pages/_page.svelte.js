import { c as create_ssr_component } from "../../chunks/index2.js";
import "sse.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-d5zvqt_START -->${$$result.title = `<title>flirtatiousBot | MaDr</title>`, ""}<meta name="${"description"}" content="${"A bot that flirts with you by MaDrCloudDev."}"><!-- HEAD_svelte-d5zvqt_END -->`, ""}

<h1 class="${"text-4xl font-bold text-[#328eef] text-center"}">flirtatiousBot</h1>
<form class="${"flex flex-col pt-8 max-w-lg w-full mx-auto"}"><label class="${"text-[#fffb00] text-xl mb-1"}" for="${"context"}">Introduce yourself to the bot:</label>
	<textarea class="${"bg-black border text-[#328eef]"}" name="${"context"}" rows="${"5"}">${""}</textarea>
	<button class="${"btn btn-black w-fit mx-auto mt-3 p-4 rounded-full border border-gray-900 text-[#7f7d76] shadow-md shadow-gray-700 hover:scale-110 ease-in duration-200 hover:text-[#fffb00] hover:border-[#328eef] hover:shadow-[#328eef] text-sm md:text-lg"}">Introduce Yourself</button>
	<div class="${"pt-4"}"><h2 class="${"text-2xl font-bold"}">flirtatiousBot:</h2>
		${``}</div></form>`;
});
export {
  Page as default
};
