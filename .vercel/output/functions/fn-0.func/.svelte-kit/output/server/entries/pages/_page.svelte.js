import { c as create_ssr_component } from "../../chunks/index2.js";
import "sse.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-4xl font-bold text-[#328eef]"}">flirtatiousBot</h1>
<form><label class="${"text-[#fffb00] text-xl mb-1"}" for="${"context"}">Introduce yourself to the bot:</label>
	<textarea class="${"bg-black border text-[#328eef]"}" name="${"context"}" rows="${"5"}">${""}</textarea>
	<button class="${"btn btn-black w-fit mx-auto mt-3 p-4 rounded-full border border-gray-900 text-[#7f7d76] shadow-md shadow-gray-700 hover:scale-110 ease-in duration-200 hover:text-[#fffb00] hover:border-[#328eef] hover:shadow-[#328eef] text-sm md:text-lg"}">Introduce Yourself</button>
	<div class="${"pt-4"}"><h2 class="${"text-2xl font-bold"}">flirtatiousBot:</h2>
		${``}</div></form>`;
});
export {
  Page as default
};
