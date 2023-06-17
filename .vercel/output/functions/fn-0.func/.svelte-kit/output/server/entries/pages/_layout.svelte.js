import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_classes } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Hamburger_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-1prbcdr.svelte-1prbcdr{min-height:24px;transition:transform 0.3s ease-in-out}svg.svelte-1prbcdr line.svelte-1prbcdr{stroke:currentColor;stroke-width:3;transition:transform 0.3s ease-in-out}button.svelte-1prbcdr.svelte-1prbcdr{z-index:20}.open.svelte-1prbcdr svg.svelte-1prbcdr{transform:scale(0.7)}.open.svelte-1prbcdr #top.svelte-1prbcdr{transform:translate(6px, 0px) rotate(45deg)}.open.svelte-1prbcdr #middle.svelte-1prbcdr{opacity:0}.open.svelte-1prbcdr #bottom.svelte-1prbcdr{transform:translate(-12px, 9px) rotate(-45deg)}",
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$2);
  return `<button aria-label="Open menu" class="${[
    "text-white hover:text-[#fffb00] md:hidden cursor-pointer mr-1 border-none focus:outline-none mt-1 mb-3 svelte-1prbcdr",
    open ? "open" : ""
  ].join(" ").trim()}"><svg width="32" height="24" class="svelte-1prbcdr"><line id="top" x1="0" y1="2" x2="32" y2="2" class="svelte-1prbcdr"></line><line id="middle" x1="0" y1="12" x2="24" y2="12" class="svelte-1prbcdr"></line><line id="bottom" x1="0" y1="22" x2="32" y2="22" class="svelte-1prbcdr"></line></svg>
</button>`;
});
const LogoNavBw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="25" height="50" viewBox="0 0 25 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_801_66)"><rect x="9.01862" y="32.0518" width="6.52408" height="9.78613" fill="black"></rect><path d="M7.33593 33.3155C8.46671 32.1405 9.60548 31.5391 10.7522 31.5111C10.099 32.1725 9.66102 32.8376 9.43826 33.5064C9.2155 34.1752 9.11736 35.0531 9.14384 36.1401C9.15606 36.6418 9.38577 37.3623 9.83297 38.3017C10.2802 39.241 10.7277 40.0698 11.1754 40.788C11.6232 41.5062 11.8467 41.8474 11.8458 41.8115C11.8668 41.6915 11.8959 41.5354 11.933 41.3433C11.9702 41.1511 12.0688 40.7842 12.2289 40.2424C12.389 39.7006 12.5709 39.1942 12.7746 38.7231C12.9783 38.252 13.268 37.7548 13.6437 37.2317C14.0194 36.7086 14.4307 36.2982 14.8777 36.0004C15.2422 35.7525 15.4296 35.3505 15.44 34.7945C15.4503 34.2384 15.3348 33.6675 15.0934 33.0817C14.8521 32.496 14.5518 31.9445 14.1926 31.4273C14.8376 31.4116 15.9057 32.0789 17.3968 33.429C17.8976 33.871 18.2715 34.3759 18.5184 34.9436C18.7653 35.5113 18.8943 36.0221 18.9053 36.476C18.924 37.2406 18.7313 38.0431 18.3275 38.8836C17.9237 39.7242 17.3711 40.4697 16.6698 41.1203C16.0739 41.6846 15.5953 42.276 15.2339 42.8944C14.8724 43.5128 14.6446 44.095 14.5503 44.6412C14.456 45.1873 14.4242 45.723 14.455 46.2481C14.4857 46.7733 14.5778 47.2432 14.7313 47.6578C14.8849 48.0724 15.0372 48.4392 15.1884 48.7582C15.3397 49.0773 15.477 49.3189 15.6005 49.4833L15.7863 49.7477C15.6295 49.6917 15.4213 49.6072 15.1615 49.494C14.9018 49.3808 14.3997 49.13 13.6551 48.7418C12.9106 48.3535 12.2044 47.9464 11.5367 47.5204C10.8689 47.0945 10.1383 46.5415 9.34479 45.8616C8.55131 45.1817 7.89484 44.4836 7.37538 43.7671C6.6581 42.7806 6.10296 41.7034 5.70996 40.5357C5.31696 39.3679 5.12703 38.3177 5.14017 37.3851C5.15242 36.9067 5.31253 36.3649 5.62051 35.7598C5.92849 35.1547 6.22736 34.6663 6.51712 34.2947C6.80689 33.9231 7.07982 33.5967 7.33593 33.3155Z" fill="white"></path></g><path d="M14.6578 29.4598V35.2107H10.0572V31.7601H8.90701C7.99188 31.7601 7.11423 31.3966 6.46713 30.7495C5.82004 30.1024 5.4565 29.2248 5.4565 28.3096V24.8591C5.4565 24.5541 5.57768 24.2616 5.79338 24.0459C6.00908 23.8302 6.30163 23.709 6.60667 23.709C6.91172 23.709 7.20426 23.8302 7.41996 24.0459C7.63566 24.2616 7.75684 24.5541 7.75684 24.8591V28.3096C7.75684 28.9537 8.27441 29.4598 8.90701 29.4598H10.0572V17.9581C10.0572 17.3481 10.2995 16.763 10.7309 16.3316C11.1623 15.9002 11.7474 15.6578 12.3575 15.6578C12.9676 15.6578 13.5527 15.9002 13.9841 16.3316C14.4155 16.763 14.6578 17.3481 14.6578 17.9581V27.1595H15.808C16.1131 27.1595 16.4056 27.0383 16.6213 26.8226C16.837 26.6069 16.9582 26.3144 16.9582 26.0093V23.709C16.9582 23.4039 17.0794 23.1114 17.2951 22.8957C17.5107 22.68 17.8033 22.5588 18.1083 22.5588C18.4134 22.5588 18.7059 22.68 18.9216 22.8957C19.1373 23.1114 19.2585 23.4039 19.2585 23.709V26.0093C19.2585 26.9244 18.895 27.8021 18.2479 28.4492C17.6008 29.0963 16.7231 29.4598 15.808 29.4598H14.6578Z" fill="white"></path><rect x="12.8109" y="9.01508" width="6.41344" height="4.66" fill="black"></rect><path d="M15.6842 12.9825C15.7679 12.9825 15.8489 12.969 15.9218 12.942L15.803 13.7706H15.0932L15.5115 12.9636C15.5682 12.9771 15.6249 12.9825 15.6842 12.9825ZM4.3212 5.12282C4.66128 5.12282 4.99057 5.1633 5.30636 5.23618C5.88396 4.19974 6.98787 3.50068 8.25643 3.50068C8.44267 3.50068 8.6235 3.51688 8.80164 3.54387C9.75711 1.45479 11.8624 0.00539845 14.305 0.00539845C17.3361 0.00539845 19.8462 2.23482 20.2861 5.14441C22.4751 5.35764 24.1836 7.20109 24.1836 9.44671C24.1836 11.8327 22.2511 13.7679 19.8651 13.7706H18.5156L18.1593 13.0257C18.8664 12.8016 19.328 12.2429 19.2146 11.7085C19.0905 11.1255 18.3293 10.7935 17.5115 10.9663C16.8934 11.0985 16.4211 11.4818 16.2834 11.9137C16.2206 11.8118 16.1329 11.7276 16.0285 11.6691C15.9242 11.6105 15.8066 11.5795 15.6869 11.579H15.6815C15.7031 11.4926 15.7139 11.4035 15.7139 11.3118C15.7139 10.7693 15.3145 10.3212 14.7936 10.2429V9.55737C14.7936 9.43862 14.6964 9.34145 14.5776 9.34145C14.4589 9.34145 14.3617 9.43862 14.3617 9.55737V10.2672C14.2376 10.2996 14.1242 10.3536 14.0216 10.4238L13.4953 9.84618C13.4143 9.75711 13.2794 9.75171 13.1903 9.83268C13.1012 9.91365 13.0958 10.0486 13.1768 10.1377L13.7166 10.7315L13.722 10.7369C13.6022 10.926 13.5441 11.1478 13.5558 11.3715C13.5676 11.5951 13.6487 11.8096 13.7877 11.9852C13.9268 12.1607 14.117 12.2887 14.3321 12.3513C14.5471 12.4139 14.7763 12.4081 14.9879 12.3347C14.9987 12.4859 15.0581 12.6235 15.1498 12.7342L14.61 13.7706H4.21054V13.7679C1.87585 13.7085 9.31789e-07 11.7976 9.31789e-07 9.44671C9.31789e-07 7.05804 1.93523 5.12282 4.3212 5.12282ZM16.7828 12.9609L16.8988 13.7706H16.2403L16.3995 12.6505C16.494 12.7747 16.6235 12.8799 16.7828 12.9609ZM4.38598 1.29555C4.38598 1.63915 4.24948 1.96868 4.00652 2.21164C3.76355 2.4546 3.43403 2.5911 3.09043 2.5911C2.74683 2.5911 2.4173 2.4546 2.17434 2.21164C1.93137 1.96868 1.79488 1.63915 1.79488 1.29555C1.79488 0.951948 1.93137 0.62242 2.17434 0.379457C2.4173 0.136495 2.74683 0 3.09043 0C3.43403 0 3.76355 0.136495 4.00652 0.379457C4.24948 0.62242 4.38598 0.951948 4.38598 1.29555ZM6.15926 2.95007C6.15926 3.03514 6.14251 3.11937 6.10995 3.19797C6.0774 3.27656 6.02968 3.34797 5.96953 3.40812C5.90938 3.46827 5.83797 3.51599 5.75938 3.54854C5.68079 3.58109 5.59655 3.59785 5.51149 3.59785C5.42642 3.59785 5.34218 3.58109 5.26359 3.54854C5.185 3.51599 5.11359 3.46827 5.05344 3.40812C4.99329 3.34797 4.94557 3.27656 4.91302 3.19797C4.88047 3.11937 4.86371 3.03514 4.86371 2.95007C4.86371 2.86501 4.88047 2.78077 4.91302 2.70218C4.94557 2.62359 4.99329 2.55218 5.05344 2.49203C5.11359 2.43188 5.185 2.38416 5.26359 2.35161C5.34218 2.31905 5.42642 2.3023 5.51149 2.3023C5.59655 2.3023 5.68079 2.31905 5.75938 2.35161C5.83797 2.38416 5.90938 2.43188 5.96953 2.49203C6.02968 2.55218 6.0774 2.62359 6.10995 2.70218C6.14251 2.78077 6.15926 2.86501 6.15926 2.95007ZM17.722 13.1147L18.0351 13.7706H17.3334L17.2389 13.1039C17.3928 13.1255 17.5547 13.1309 17.722 13.1147Z" fill="white"></path><defs><clipPath id="clip0_801_66"><rect width="13.802" height="18.3537" fill="white" transform="translate(19.2269 49.6639) rotate(178.605)"></rect></clipPath></defs></svg>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { sidebar = false } = $$props;
  let { data } = $$props;
  if ($$props.sidebar === void 0 && $$bindings.sidebar && sidebar !== void 0)
    $$bindings.sidebar(sidebar);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<nav style="background-color: hsla(0, 0%, 0%, 0.5)" class="px-3 mt-2 flex justify-between sticky top-0 z-50 backdrop-blur-sm max-w-2xl sm:max-w-4xl mx-auto"><section class="hidden md:flex w-full gap-20 items-center text-xl"><item class="mb-2"><a href="https://madr.io/" aria-label="MaDr Logo">${validate_component(LogoNavBw, "LogoNavBw").$$render($$result, {}, {}, {})}</a></item>
		<item><a href="https://madr.io/about"${add_classes(($page.url.pathname == "/about" ? "active" : "").trim())}>about</a></item>
		<item><a href="https://madr.io/tech"${add_classes(($page.url.pathname == "/tech" ? "active" : "").trim())}>tech</a></item>
		<item><a href="https://madr.io/projects"${add_classes(($page.url.pathname == "/projects" ? "active" : "").trim())}>projects</a></item>
		<item><a href="https://madr.io/weather"${add_classes(($page.url.pathname == "/weather" ? "active" : "").trim())}>weather?</a></item>
		<item><a href="https://flirtatiousai.madr.io/"${add_classes(($page.url.pathname == "/" ? "active" : "").trim())}>ai?
			</a></item>
		<item><a href="https://madr.io/contact"${add_classes(($page.url.pathname == "/contact" ? "active" : "").trim())}>contact</a></item></section>
	<div></div>
	${validate_component(Hamburger, "Hamburger").$$render(
      $$result,
      { open: sidebar },
      {
        open: ($$value) => {
          sidebar = $$value;
          $$settled = false;
        }
      },
      {}
    )}</nav>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const LogoBW = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="40" height="83" viewBox="0 0 40 83" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_309_5)"><rect x="14.9169" y="53.0141" width="10.7909" height="16.1864" fill="black"></rect><path d="M12.1337 55.1044C14.0041 53.1609 15.8876 52.1661 17.7844 52.1199C16.7039 53.2138 15.9795 54.3138 15.611 55.42C15.2426 56.5262 15.0802 57.9783 15.124 59.7763C15.1442 60.6061 15.5242 61.7979 16.2639 63.3515C17.0035 64.9052 17.7437 66.276 18.4843 67.4639C19.225 68.6518 19.5946 69.2162 19.5931 69.1569C19.6278 68.9583 19.6759 68.7002 19.7374 68.3823C19.7988 68.0645 19.962 67.4576 20.2268 66.5615C20.4916 65.6654 20.7925 64.8277 21.1294 64.0485C21.4662 63.2693 21.9454 62.4471 22.5668 61.5818C23.1883 60.7166 23.8686 60.0377 24.6079 59.5452C25.2108 59.1352 25.5208 58.4703 25.5379 57.5506C25.555 56.6309 25.364 55.6866 24.9648 54.7177C24.5655 53.7488 24.0688 52.8367 23.4747 51.9813C24.5416 51.9553 26.3082 53.0589 28.7745 55.2921C29.6029 56.0232 30.2213 56.8582 30.6297 57.7972C31.0381 58.7362 31.2514 59.5811 31.2697 60.3319C31.3005 61.5964 30.9819 62.9238 30.3139 64.3141C29.646 65.7044 28.732 66.9375 27.572 68.0136C26.5865 68.947 25.7948 69.9251 25.197 70.9479C24.5992 71.9707 24.2223 72.9338 24.0664 73.8371C23.9105 74.7405 23.8579 75.6264 23.9087 76.4951C23.9595 77.3637 24.1119 78.1409 24.3659 78.8266C24.6198 79.5124 24.8718 80.1191 25.1219 80.6468C25.372 81.1745 25.5992 81.5743 25.8035 81.8461L26.1107 82.2834C25.8515 82.1909 25.507 82.051 25.0774 81.8637C24.6478 81.6765 23.8173 81.2618 22.5858 80.6196C21.3543 79.9775 20.1863 79.3041 19.0818 78.5995C17.9773 77.8949 16.7688 76.9804 15.4564 75.8558C14.144 74.7312 13.0582 73.5765 12.199 72.3914C11.0126 70.7597 10.0944 68.978 9.44434 67.0466C8.79432 65.1151 8.48017 63.378 8.5019 61.8355C8.52217 61.0442 8.787 60.1481 9.2964 59.1472C9.8058 58.1463 10.3001 57.3385 10.7794 56.7239C11.2587 56.1092 11.7101 55.5694 12.1337 55.1044Z" fill="white"></path></g><path d="M24.2443 48.7269V58.2389H16.6347V52.5317H14.7323C13.2187 52.5317 11.767 51.9304 10.6967 50.8601C9.62644 49.7898 9.02515 48.3382 9.02515 46.8245V41.1174C9.02515 40.6128 9.22558 40.1289 9.58234 39.7722C9.93911 39.4154 10.423 39.215 10.9275 39.215C11.4321 39.215 11.916 39.4154 12.2727 39.7722C12.6295 40.1289 12.8299 40.6128 12.8299 41.1174V46.8245C12.8299 47.8899 13.686 48.7269 14.7323 48.7269H16.6347V29.703C16.6347 28.6939 17.0356 27.7262 17.7491 27.0126C18.4626 26.2991 19.4304 25.8982 20.4395 25.8982C21.4486 25.8982 22.4164 26.2991 23.1299 27.0126C23.8434 27.7262 24.2443 28.6939 24.2443 29.703V44.9222H26.1467C26.6512 44.9222 27.1351 44.7217 27.4919 44.365C27.8486 44.0082 28.0491 43.5243 28.0491 43.0198V39.215C28.0491 38.7104 28.2495 38.2265 28.6063 37.8698C28.963 37.513 29.4469 37.3126 29.9515 37.3126C30.456 37.3126 30.9399 37.513 31.2967 37.8698C31.6534 38.2265 31.8539 38.7104 31.8539 39.215V43.0198C31.8539 44.5334 31.2526 45.985 30.1823 47.0553C29.112 48.1256 27.6603 48.7269 26.1467 48.7269H24.2443Z" fill="white"></path><rect x="21.1895" y="14.9111" width="10.6079" height="7.70771" fill="black"></rect><path d="M25.942 21.4732C26.0804 21.4732 26.2143 21.4509 26.3348 21.4062L26.1384 22.7768H24.9643L25.6563 21.442C25.75 21.4643 25.8438 21.4732 25.942 21.4732ZM7.14732 8.47321C7.70982 8.47321 8.25446 8.54018 8.77679 8.66071C9.73214 6.94643 11.558 5.79018 13.6563 5.79018C13.9643 5.79018 14.2634 5.81696 14.558 5.8616C16.1384 2.40625 19.6205 0.00892911 23.6607 0.00892911C28.6741 0.00892911 32.8259 3.69643 33.5536 8.50893C37.1741 8.86161 40 11.9107 40 15.625C40 19.5714 36.8036 22.7723 32.8571 22.7768H30.625L30.0357 21.5446C31.2054 21.1741 31.9688 20.25 31.7813 19.3661C31.5759 18.4018 30.317 17.8527 28.9643 18.1384C27.942 18.3571 27.1607 18.9911 26.933 19.7054C26.8291 19.5369 26.684 19.3976 26.5114 19.3008C26.3388 19.2039 26.1444 19.1527 25.9464 19.1518H25.9375C25.9732 19.0089 25.9911 18.8616 25.9911 18.7098C25.9911 17.8125 25.3304 17.0714 24.4688 16.942V15.808C24.4688 15.6116 24.308 15.4509 24.1116 15.4509C23.9152 15.4509 23.7545 15.6116 23.7545 15.808V16.9821C23.5491 17.0357 23.3616 17.125 23.192 17.2411L22.3214 16.2857C22.1875 16.1384 21.9643 16.1295 21.817 16.2634C21.6696 16.3973 21.6607 16.6205 21.7946 16.7679L22.6875 17.75L22.6964 17.7589C22.4981 18.0718 22.4021 18.4387 22.4216 18.8086C22.441 19.1785 22.5751 19.5333 22.8051 19.8236C23.0351 20.114 23.3498 20.3256 23.7055 20.4292C24.0611 20.5328 24.4402 20.5232 24.7902 20.4018C24.808 20.6518 24.9062 20.8795 25.058 21.0625L24.1652 22.7768H6.96429V22.7723C3.10268 22.6741 1.00289e-06 19.5134 1.00289e-06 15.625C1.00289e-06 11.6741 3.20089 8.47321 7.14732 8.47321ZM27.7589 21.4375L27.9509 22.7768H26.8616L27.125 20.9241C27.2813 21.1295 27.4955 21.3036 27.7589 21.4375ZM7.25447 2.14286C7.25447 2.71118 7.0287 3.25622 6.62683 3.65809C6.22497 4.05995 5.67993 4.28571 5.11161 4.28571C4.54329 4.28571 3.99825 4.05995 3.59638 3.65809C3.19452 3.25622 2.96875 2.71118 2.96875 2.14286C2.96875 1.57454 3.19452 1.02949 3.59638 0.627628C3.99825 0.225764 4.54329 0 5.11161 0C5.67993 0 6.22497 0.225764 6.62683 0.627628C7.0287 1.02949 7.25447 1.57454 7.25447 2.14286ZM10.1875 4.87946C10.1875 5.02016 10.1598 5.15949 10.1059 5.28948C10.0521 5.41947 9.97318 5.53759 9.87369 5.63708C9.7742 5.73657 9.65608 5.81549 9.52609 5.86933C9.3961 5.92318 9.25678 5.95089 9.11607 5.95089C8.97537 5.95089 8.83605 5.92318 8.70606 5.86933C8.57606 5.81549 8.45795 5.73657 8.35846 5.63708C8.25896 5.53759 8.18005 5.41947 8.1262 5.28948C8.07236 5.15949 8.04464 5.02016 8.04464 4.87946C8.04464 4.73876 8.07236 4.59944 8.1262 4.46945C8.18005 4.33945 8.25896 4.22134 8.35846 4.12185C8.45795 4.02236 8.57606 3.94344 8.70606 3.88959C8.83605 3.83575 8.97537 3.80803 9.11607 3.80803C9.25678 3.80803 9.3961 3.83575 9.52609 3.88959C9.65608 3.94344 9.7742 4.02236 9.87369 4.12185C9.97318 4.22134 10.0521 4.33945 10.1059 4.46945C10.1598 4.59944 10.1875 4.73876 10.1875 4.87946ZM29.3125 21.692L29.8304 22.7768H28.6696L28.5134 21.6741C28.7679 21.7098 29.0357 21.7187 29.3125 21.692Z" fill="white"></path><defs><clipPath id="clip0_309_5"><rect width="22.8287" height="30.3573" fill="white" transform="translate(31.8016 82.1448) rotate(178.605)"></rect></clipPath></defs></svg>`;
});
const Sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "menu.svelte-12ldxm3{left:-100%;transition:left 0.3s ease-in-out}.open.svelte-12ldxm3{left:0}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { open = false } = $$props;
  console.log($page.url.pathname);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<menu class="${[
    "fixed w-full h-full bg-black shadow-lg text-3xl text-center z-50 svelte-12ldxm3",
    open ? "open" : ""
  ].join(" ").trim()}"><section class="flex flex-col gap-6 content"><item class="hover:text-[#fffb00] mb-3"><a href="https://madr.io/about/"${add_classes(($page.url.pathname == "/about" ? "active" : "").trim())}>about</a></item>
		<item class="hover:text-[#fffb00] mb-3"><a href="https://madr.io/tech/"${add_classes(($page.url.pathname == "https://madr.io/tech/" ? "active" : "").trim())}><item class="hover:text-[#fffb00] mb-3">tech</item></a></item>
		<item class="hover:text-[#fffb00] mb-3"><a href="https://madr.io/projects/"${add_classes(($page.url.pathname == "https://madr.io/projects/" ? "active" : "").trim())}><item class="hover:text-[#fffb00] mb-3">projects</item></a></item>
		<item class="hover:text-[#fffb00] mb-3"><a href="https://madr.io/weather/"${add_classes(($page.url.pathname == "https://madr.io/weather/" ? "active" : "").trim())}><item class="hover:text-[#fffb00] mb-3">weather?</item></a></item>
		<item class="hover:text-[#fffb00] mb-3"><a href="https://flirtatiousai.madr.io/"${add_classes(($page.url.pathname == "/" ? "active" : "").trim())}><item class="hover:text-[#fffb00]">ai?</item></a></item>
		<item class="hover:text-[#fffb00] mb-3"><a href="https://madr.io/contact/"${add_classes(($page.url.pathname == "https://madr.io/contact/" ? "active" : "").trim())}><item class="hover:text-[#fffb00] mb-3">contact</item></a></item>
		<item class="mx-auto"><a href="https://madr.io/"${add_classes(($page.url.pathname == "https://madr.io/" ? "active" : "").trim())}>${validate_component(LogoBW, "LogoBW").$$render($$result, {}, {}, {})}</a></item></section>
</menu>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="text-gray-400 text-[.6rem] text-center pt-4">Copyright © 2023 MaDr™, MaDrCloudDev™, Matthew Drish | <a href="https://madr.io">MaDr.io</a></footer>`;
});
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-w9qs9i{font-family:'Fredoka', sans-serif}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { open = false } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Navbar, "Navbar").$$render(
      $$result,
      { data: true, sidebar: open },
      {
        sidebar: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}
<div class="max-w-2xl sm:max-w-5xl mx-auto px-4 svelte-w9qs9i">${slots.default ? slots.default({}) : ``}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
