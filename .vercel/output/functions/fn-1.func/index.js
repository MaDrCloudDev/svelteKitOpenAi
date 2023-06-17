globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index3.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component3) {
  current_component = component3;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function validate_component(component3, name) {
  if (!component3 || !component3.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component3;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html2 = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html2;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html2 = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html: html2,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_classes(classes) {
  return classes ? ` class="${classes}"` : "";
}
var globals, current_component, _boolean_attributes, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_index3 = __esm({
  ".svelte-kit/output/server/chunks/index3.js"() {
    globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
    "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
    _boolean_attributes = [
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ];
    /* @__PURE__ */ new Set([..._boolean_attributes]);
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index.js
function error(status, message) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, message);
}
function json(data, init2) {
  const body = JSON.stringify(data);
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
function text(body, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder.encode(body).byteLength.toString());
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
var HttpError, Redirect, ActionFailure, encoder;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    HttpError = class HttpError2 {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body) {
        this.status = status;
        if (typeof body === "string") {
          this.body = { message: body };
        } else if (body) {
          this.body = body;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class Redirect2 {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    ActionFailure = class ActionFailure2 {
      /**
       * @param {number} status
       * @param {T} [data]
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
    encoder = new TextEncoder();
  }
});

// .svelte-kit/output/server/chunks/index2.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_index3();
    subscriber_queue = [];
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index3 = 0;
      while (index3 < str.length) {
        var eqIdx = str.indexOf("=", index3);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index3);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index3 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index3, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index3 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/stores.js
function notifiable_store(value) {
  const store = writable(value);
  let ready = true;
  function notify() {
    ready = true;
    store.update((val) => val);
  }
  function set(new_value) {
    ready = false;
    store.set(new_value);
  }
  function subscribe2(run2) {
    let old_value;
    return store.subscribe((new_value) => {
      if (old_value === void 0 || ready && new_value !== old_value) {
        run2(old_value = new_value);
      }
    });
  }
  return { notify, set, subscribe: subscribe2 };
}
function create_updated_store() {
  const { set, subscribe: subscribe2 } = writable(false);
  async function check() {
    return false;
  }
  return {
    subscribe: subscribe2,
    check
  };
}
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_index3();
    init_index2();
    ({
      url: notifiable_store({}),
      page: notifiable_store({}),
      navigating: writable(
        /** @type {import('types').Navigation | null} */
        null
      ),
      updated: create_updated_store()
    });
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
    };
    page = {
      /** @param {(value: any) => void} fn */
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var css$2, Hamburger, LogoNavBw, Navbar, LogoBW, css$1, Sidebar, Footer, css, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_index3();
    init_stores();
    css$2 = {
      code: "svg.svelte-1prbcdr.svelte-1prbcdr{min-height:24px;transition:transform 0.3s ease-in-out}svg.svelte-1prbcdr line.svelte-1prbcdr{stroke:currentColor;stroke-width:3;transition:transform 0.3s ease-in-out}button.svelte-1prbcdr.svelte-1prbcdr{z-index:20}.open.svelte-1prbcdr svg.svelte-1prbcdr{transform:scale(0.7)}.open.svelte-1prbcdr #top.svelte-1prbcdr{transform:translate(6px, 0px) rotate(45deg)}.open.svelte-1prbcdr #middle.svelte-1prbcdr{opacity:0}.open.svelte-1prbcdr #bottom.svelte-1prbcdr{transform:translate(-12px, 9px) rotate(-45deg)}",
      map: null
    };
    Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    LogoNavBw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg width="25" height="50" viewBox="0 0 25 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_801_66)"><rect x="9.01862" y="32.0518" width="6.52408" height="9.78613" fill="black"></rect><path d="M7.33593 33.3155C8.46671 32.1405 9.60548 31.5391 10.7522 31.5111C10.099 32.1725 9.66102 32.8376 9.43826 33.5064C9.2155 34.1752 9.11736 35.0531 9.14384 36.1401C9.15606 36.6418 9.38577 37.3623 9.83297 38.3017C10.2802 39.241 10.7277 40.0698 11.1754 40.788C11.6232 41.5062 11.8467 41.8474 11.8458 41.8115C11.8668 41.6915 11.8959 41.5354 11.933 41.3433C11.9702 41.1511 12.0688 40.7842 12.2289 40.2424C12.389 39.7006 12.5709 39.1942 12.7746 38.7231C12.9783 38.252 13.268 37.7548 13.6437 37.2317C14.0194 36.7086 14.4307 36.2982 14.8777 36.0004C15.2422 35.7525 15.4296 35.3505 15.44 34.7945C15.4503 34.2384 15.3348 33.6675 15.0934 33.0817C14.8521 32.496 14.5518 31.9445 14.1926 31.4273C14.8376 31.4116 15.9057 32.0789 17.3968 33.429C17.8976 33.871 18.2715 34.3759 18.5184 34.9436C18.7653 35.5113 18.8943 36.0221 18.9053 36.476C18.924 37.2406 18.7313 38.0431 18.3275 38.8836C17.9237 39.7242 17.3711 40.4697 16.6698 41.1203C16.0739 41.6846 15.5953 42.276 15.2339 42.8944C14.8724 43.5128 14.6446 44.095 14.5503 44.6412C14.456 45.1873 14.4242 45.723 14.455 46.2481C14.4857 46.7733 14.5778 47.2432 14.7313 47.6578C14.8849 48.0724 15.0372 48.4392 15.1884 48.7582C15.3397 49.0773 15.477 49.3189 15.6005 49.4833L15.7863 49.7477C15.6295 49.6917 15.4213 49.6072 15.1615 49.494C14.9018 49.3808 14.3997 49.13 13.6551 48.7418C12.9106 48.3535 12.2044 47.9464 11.5367 47.5204C10.8689 47.0945 10.1383 46.5415 9.34479 45.8616C8.55131 45.1817 7.89484 44.4836 7.37538 43.7671C6.6581 42.7806 6.10296 41.7034 5.70996 40.5357C5.31696 39.3679 5.12703 38.3177 5.14017 37.3851C5.15242 36.9067 5.31253 36.3649 5.62051 35.7598C5.92849 35.1547 6.22736 34.6663 6.51712 34.2947C6.80689 33.9231 7.07982 33.5967 7.33593 33.3155Z" fill="white"></path></g><path d="M14.6578 29.4598V35.2107H10.0572V31.7601H8.90701C7.99188 31.7601 7.11423 31.3966 6.46713 30.7495C5.82004 30.1024 5.4565 29.2248 5.4565 28.3096V24.8591C5.4565 24.5541 5.57768 24.2616 5.79338 24.0459C6.00908 23.8302 6.30163 23.709 6.60667 23.709C6.91172 23.709 7.20426 23.8302 7.41996 24.0459C7.63566 24.2616 7.75684 24.5541 7.75684 24.8591V28.3096C7.75684 28.9537 8.27441 29.4598 8.90701 29.4598H10.0572V17.9581C10.0572 17.3481 10.2995 16.763 10.7309 16.3316C11.1623 15.9002 11.7474 15.6578 12.3575 15.6578C12.9676 15.6578 13.5527 15.9002 13.9841 16.3316C14.4155 16.763 14.6578 17.3481 14.6578 17.9581V27.1595H15.808C16.1131 27.1595 16.4056 27.0383 16.6213 26.8226C16.837 26.6069 16.9582 26.3144 16.9582 26.0093V23.709C16.9582 23.4039 17.0794 23.1114 17.2951 22.8957C17.5107 22.68 17.8033 22.5588 18.1083 22.5588C18.4134 22.5588 18.7059 22.68 18.9216 22.8957C19.1373 23.1114 19.2585 23.4039 19.2585 23.709V26.0093C19.2585 26.9244 18.895 27.8021 18.2479 28.4492C17.6008 29.0963 16.7231 29.4598 15.808 29.4598H14.6578Z" fill="white"></path><rect x="12.8109" y="9.01508" width="6.41344" height="4.66" fill="black"></rect><path d="M15.6842 12.9825C15.7679 12.9825 15.8489 12.969 15.9218 12.942L15.803 13.7706H15.0932L15.5115 12.9636C15.5682 12.9771 15.6249 12.9825 15.6842 12.9825ZM4.3212 5.12282C4.66128 5.12282 4.99057 5.1633 5.30636 5.23618C5.88396 4.19974 6.98787 3.50068 8.25643 3.50068C8.44267 3.50068 8.6235 3.51688 8.80164 3.54387C9.75711 1.45479 11.8624 0.00539845 14.305 0.00539845C17.3361 0.00539845 19.8462 2.23482 20.2861 5.14441C22.4751 5.35764 24.1836 7.20109 24.1836 9.44671C24.1836 11.8327 22.2511 13.7679 19.8651 13.7706H18.5156L18.1593 13.0257C18.8664 12.8016 19.328 12.2429 19.2146 11.7085C19.0905 11.1255 18.3293 10.7935 17.5115 10.9663C16.8934 11.0985 16.4211 11.4818 16.2834 11.9137C16.2206 11.8118 16.1329 11.7276 16.0285 11.6691C15.9242 11.6105 15.8066 11.5795 15.6869 11.579H15.6815C15.7031 11.4926 15.7139 11.4035 15.7139 11.3118C15.7139 10.7693 15.3145 10.3212 14.7936 10.2429V9.55737C14.7936 9.43862 14.6964 9.34145 14.5776 9.34145C14.4589 9.34145 14.3617 9.43862 14.3617 9.55737V10.2672C14.2376 10.2996 14.1242 10.3536 14.0216 10.4238L13.4953 9.84618C13.4143 9.75711 13.2794 9.75171 13.1903 9.83268C13.1012 9.91365 13.0958 10.0486 13.1768 10.1377L13.7166 10.7315L13.722 10.7369C13.6022 10.926 13.5441 11.1478 13.5558 11.3715C13.5676 11.5951 13.6487 11.8096 13.7877 11.9852C13.9268 12.1607 14.117 12.2887 14.3321 12.3513C14.5471 12.4139 14.7763 12.4081 14.9879 12.3347C14.9987 12.4859 15.0581 12.6235 15.1498 12.7342L14.61 13.7706H4.21054V13.7679C1.87585 13.7085 9.31789e-07 11.7976 9.31789e-07 9.44671C9.31789e-07 7.05804 1.93523 5.12282 4.3212 5.12282ZM16.7828 12.9609L16.8988 13.7706H16.2403L16.3995 12.6505C16.494 12.7747 16.6235 12.8799 16.7828 12.9609ZM4.38598 1.29555C4.38598 1.63915 4.24948 1.96868 4.00652 2.21164C3.76355 2.4546 3.43403 2.5911 3.09043 2.5911C2.74683 2.5911 2.4173 2.4546 2.17434 2.21164C1.93137 1.96868 1.79488 1.63915 1.79488 1.29555C1.79488 0.951948 1.93137 0.62242 2.17434 0.379457C2.4173 0.136495 2.74683 0 3.09043 0C3.43403 0 3.76355 0.136495 4.00652 0.379457C4.24948 0.62242 4.38598 0.951948 4.38598 1.29555ZM6.15926 2.95007C6.15926 3.03514 6.14251 3.11937 6.10995 3.19797C6.0774 3.27656 6.02968 3.34797 5.96953 3.40812C5.90938 3.46827 5.83797 3.51599 5.75938 3.54854C5.68079 3.58109 5.59655 3.59785 5.51149 3.59785C5.42642 3.59785 5.34218 3.58109 5.26359 3.54854C5.185 3.51599 5.11359 3.46827 5.05344 3.40812C4.99329 3.34797 4.94557 3.27656 4.91302 3.19797C4.88047 3.11937 4.86371 3.03514 4.86371 2.95007C4.86371 2.86501 4.88047 2.78077 4.91302 2.70218C4.94557 2.62359 4.99329 2.55218 5.05344 2.49203C5.11359 2.43188 5.185 2.38416 5.26359 2.35161C5.34218 2.31905 5.42642 2.3023 5.51149 2.3023C5.59655 2.3023 5.68079 2.31905 5.75938 2.35161C5.83797 2.38416 5.90938 2.43188 5.96953 2.49203C6.02968 2.55218 6.0774 2.62359 6.10995 2.70218C6.14251 2.78077 6.15926 2.86501 6.15926 2.95007ZM17.722 13.1147L18.0351 13.7706H17.3334L17.2389 13.1039C17.3928 13.1255 17.5547 13.1309 17.722 13.1147Z" fill="white"></path><defs><clipPath id="clip0_801_66"><rect width="13.802" height="18.3537" fill="white" transform="translate(19.2269 49.6639) rotate(178.605)"></rect></clipPath></defs></svg>`;
    });
    Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    LogoBW = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg width="40" height="83" viewBox="0 0 40 83" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_309_5)"><rect x="14.9169" y="53.0141" width="10.7909" height="16.1864" fill="black"></rect><path d="M12.1337 55.1044C14.0041 53.1609 15.8876 52.1661 17.7844 52.1199C16.7039 53.2138 15.9795 54.3138 15.611 55.42C15.2426 56.5262 15.0802 57.9783 15.124 59.7763C15.1442 60.6061 15.5242 61.7979 16.2639 63.3515C17.0035 64.9052 17.7437 66.276 18.4843 67.4639C19.225 68.6518 19.5946 69.2162 19.5931 69.1569C19.6278 68.9583 19.6759 68.7002 19.7374 68.3823C19.7988 68.0645 19.962 67.4576 20.2268 66.5615C20.4916 65.6654 20.7925 64.8277 21.1294 64.0485C21.4662 63.2693 21.9454 62.4471 22.5668 61.5818C23.1883 60.7166 23.8686 60.0377 24.6079 59.5452C25.2108 59.1352 25.5208 58.4703 25.5379 57.5506C25.555 56.6309 25.364 55.6866 24.9648 54.7177C24.5655 53.7488 24.0688 52.8367 23.4747 51.9813C24.5416 51.9553 26.3082 53.0589 28.7745 55.2921C29.6029 56.0232 30.2213 56.8582 30.6297 57.7972C31.0381 58.7362 31.2514 59.5811 31.2697 60.3319C31.3005 61.5964 30.9819 62.9238 30.3139 64.3141C29.646 65.7044 28.732 66.9375 27.572 68.0136C26.5865 68.947 25.7948 69.9251 25.197 70.9479C24.5992 71.9707 24.2223 72.9338 24.0664 73.8371C23.9105 74.7405 23.8579 75.6264 23.9087 76.4951C23.9595 77.3637 24.1119 78.1409 24.3659 78.8266C24.6198 79.5124 24.8718 80.1191 25.1219 80.6468C25.372 81.1745 25.5992 81.5743 25.8035 81.8461L26.1107 82.2834C25.8515 82.1909 25.507 82.051 25.0774 81.8637C24.6478 81.6765 23.8173 81.2618 22.5858 80.6196C21.3543 79.9775 20.1863 79.3041 19.0818 78.5995C17.9773 77.8949 16.7688 76.9804 15.4564 75.8558C14.144 74.7312 13.0582 73.5765 12.199 72.3914C11.0126 70.7597 10.0944 68.978 9.44434 67.0466C8.79432 65.1151 8.48017 63.378 8.5019 61.8355C8.52217 61.0442 8.787 60.1481 9.2964 59.1472C9.8058 58.1463 10.3001 57.3385 10.7794 56.7239C11.2587 56.1092 11.7101 55.5694 12.1337 55.1044Z" fill="white"></path></g><path d="M24.2443 48.7269V58.2389H16.6347V52.5317H14.7323C13.2187 52.5317 11.767 51.9304 10.6967 50.8601C9.62644 49.7898 9.02515 48.3382 9.02515 46.8245V41.1174C9.02515 40.6128 9.22558 40.1289 9.58234 39.7722C9.93911 39.4154 10.423 39.215 10.9275 39.215C11.4321 39.215 11.916 39.4154 12.2727 39.7722C12.6295 40.1289 12.8299 40.6128 12.8299 41.1174V46.8245C12.8299 47.8899 13.686 48.7269 14.7323 48.7269H16.6347V29.703C16.6347 28.6939 17.0356 27.7262 17.7491 27.0126C18.4626 26.2991 19.4304 25.8982 20.4395 25.8982C21.4486 25.8982 22.4164 26.2991 23.1299 27.0126C23.8434 27.7262 24.2443 28.6939 24.2443 29.703V44.9222H26.1467C26.6512 44.9222 27.1351 44.7217 27.4919 44.365C27.8486 44.0082 28.0491 43.5243 28.0491 43.0198V39.215C28.0491 38.7104 28.2495 38.2265 28.6063 37.8698C28.963 37.513 29.4469 37.3126 29.9515 37.3126C30.456 37.3126 30.9399 37.513 31.2967 37.8698C31.6534 38.2265 31.8539 38.7104 31.8539 39.215V43.0198C31.8539 44.5334 31.2526 45.985 30.1823 47.0553C29.112 48.1256 27.6603 48.7269 26.1467 48.7269H24.2443Z" fill="white"></path><rect x="21.1895" y="14.9111" width="10.6079" height="7.70771" fill="black"></rect><path d="M25.942 21.4732C26.0804 21.4732 26.2143 21.4509 26.3348 21.4062L26.1384 22.7768H24.9643L25.6563 21.442C25.75 21.4643 25.8438 21.4732 25.942 21.4732ZM7.14732 8.47321C7.70982 8.47321 8.25446 8.54018 8.77679 8.66071C9.73214 6.94643 11.558 5.79018 13.6563 5.79018C13.9643 5.79018 14.2634 5.81696 14.558 5.8616C16.1384 2.40625 19.6205 0.00892911 23.6607 0.00892911C28.6741 0.00892911 32.8259 3.69643 33.5536 8.50893C37.1741 8.86161 40 11.9107 40 15.625C40 19.5714 36.8036 22.7723 32.8571 22.7768H30.625L30.0357 21.5446C31.2054 21.1741 31.9688 20.25 31.7813 19.3661C31.5759 18.4018 30.317 17.8527 28.9643 18.1384C27.942 18.3571 27.1607 18.9911 26.933 19.7054C26.8291 19.5369 26.684 19.3976 26.5114 19.3008C26.3388 19.2039 26.1444 19.1527 25.9464 19.1518H25.9375C25.9732 19.0089 25.9911 18.8616 25.9911 18.7098C25.9911 17.8125 25.3304 17.0714 24.4688 16.942V15.808C24.4688 15.6116 24.308 15.4509 24.1116 15.4509C23.9152 15.4509 23.7545 15.6116 23.7545 15.808V16.9821C23.5491 17.0357 23.3616 17.125 23.192 17.2411L22.3214 16.2857C22.1875 16.1384 21.9643 16.1295 21.817 16.2634C21.6696 16.3973 21.6607 16.6205 21.7946 16.7679L22.6875 17.75L22.6964 17.7589C22.4981 18.0718 22.4021 18.4387 22.4216 18.8086C22.441 19.1785 22.5751 19.5333 22.8051 19.8236C23.0351 20.114 23.3498 20.3256 23.7055 20.4292C24.0611 20.5328 24.4402 20.5232 24.7902 20.4018C24.808 20.6518 24.9062 20.8795 25.058 21.0625L24.1652 22.7768H6.96429V22.7723C3.10268 22.6741 1.00289e-06 19.5134 1.00289e-06 15.625C1.00289e-06 11.6741 3.20089 8.47321 7.14732 8.47321ZM27.7589 21.4375L27.9509 22.7768H26.8616L27.125 20.9241C27.2813 21.1295 27.4955 21.3036 27.7589 21.4375ZM7.25447 2.14286C7.25447 2.71118 7.0287 3.25622 6.62683 3.65809C6.22497 4.05995 5.67993 4.28571 5.11161 4.28571C4.54329 4.28571 3.99825 4.05995 3.59638 3.65809C3.19452 3.25622 2.96875 2.71118 2.96875 2.14286C2.96875 1.57454 3.19452 1.02949 3.59638 0.627628C3.99825 0.225764 4.54329 0 5.11161 0C5.67993 0 6.22497 0.225764 6.62683 0.627628C7.0287 1.02949 7.25447 1.57454 7.25447 2.14286ZM10.1875 4.87946C10.1875 5.02016 10.1598 5.15949 10.1059 5.28948C10.0521 5.41947 9.97318 5.53759 9.87369 5.63708C9.7742 5.73657 9.65608 5.81549 9.52609 5.86933C9.3961 5.92318 9.25678 5.95089 9.11607 5.95089C8.97537 5.95089 8.83605 5.92318 8.70606 5.86933C8.57606 5.81549 8.45795 5.73657 8.35846 5.63708C8.25896 5.53759 8.18005 5.41947 8.1262 5.28948C8.07236 5.15949 8.04464 5.02016 8.04464 4.87946C8.04464 4.73876 8.07236 4.59944 8.1262 4.46945C8.18005 4.33945 8.25896 4.22134 8.35846 4.12185C8.45795 4.02236 8.57606 3.94344 8.70606 3.88959C8.83605 3.83575 8.97537 3.80803 9.11607 3.80803C9.25678 3.80803 9.3961 3.83575 9.52609 3.88959C9.65608 3.94344 9.7742 4.02236 9.87369 4.12185C9.97318 4.22134 10.0521 4.33945 10.1059 4.46945C10.1598 4.59944 10.1875 4.73876 10.1875 4.87946ZM29.3125 21.692L29.8304 22.7768H28.6696L28.5134 21.6741C28.7679 21.7098 29.0357 21.7187 29.3125 21.692Z" fill="white"></path><defs><clipPath id="clip0_309_5"><rect width="22.8287" height="30.3573" fill="white" transform="translate(31.8016 82.1448) rotate(178.605)"></rect></clipPath></defs></svg>`;
    });
    css$1 = {
      code: "menu.svelte-12ldxm3{left:-100%;transition:left 0.3s ease-in-out}.open.svelte-12ldxm3{left:0}",
      map: null
    };
    Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<footer class="text-gray-400 text-[.6rem] text-center pt-4">Copyright \xA9 2023 MaDr\u2122, MaDrCloudDev\u2122, Matthew Drish | <a href="https://madr.io">MaDr.io</a></footer>`;
    });
    css = {
      code: ".svelte-w9qs9i{font-family:'Fredoka', sans-serif}",
      map: null
    };
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    imports = ["_app/immutable/nodes/0.cb769321.js", "_app/immutable/chunks/index.af31daf7.js", "_app/immutable/chunks/stores.023561fb.js", "_app/immutable/chunks/singletons.ccca09d5.js"];
    stylesheets = ["_app/immutable/assets/0.73a12084.css"];
    fonts = ["_app/immutable/assets/fredoka-hebrew-400-normal.3670d704.woff2", "_app/immutable/assets/fredoka-all-400-normal.ebcddc29.woff", "_app/immutable/assets/fredoka-latin-400-normal.777ebba2.woff2"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_index3();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>
<p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    imports2 = ["_app/immutable/nodes/1.65ad97d9.js", "_app/immutable/chunks/index.af31daf7.js", "_app/immutable/chunks/stores.023561fb.js", "_app/immutable/chunks/singletons.ccca09d5.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// node_modules/common-tags/es/TemplateTag/TemplateTag.js
function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var _createClass, _templateObject, TemplateTag, TemplateTag_default;
var init_TemplateTag = __esm({
  "node_modules/common-tags/es/TemplateTag/TemplateTag.js"() {
    _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    _templateObject = _taggedTemplateLiteral(["", ""], ["", ""]);
    TemplateTag = function() {
      function TemplateTag2() {
        var _this = this;
        for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
          transformers[_key] = arguments[_key];
        }
        _classCallCheck(this, TemplateTag2);
        this.tag = function(strings) {
          for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            expressions[_key2 - 1] = arguments[_key2];
          }
          if (typeof strings === "function") {
            return _this.interimTag.bind(_this, strings);
          }
          if (typeof strings === "string") {
            return _this.transformEndResult(strings);
          }
          strings = strings.map(_this.transformString.bind(_this));
          return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
        };
        if (transformers.length > 0 && Array.isArray(transformers[0])) {
          transformers = transformers[0];
        }
        this.transformers = transformers.map(function(transformer) {
          return typeof transformer === "function" ? transformer() : transformer;
        });
        return this.tag;
      }
      _createClass(TemplateTag2, [{
        key: "interimTag",
        /**
         * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
         * template tag to our own template tag.
         * @param  {Function}        nextTag          - the received template tag
         * @param  {Array<String>}   template         - the template to process
         * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
         * @return {*}                                - the final processed value
         */
        value: function interimTag(previousTag, template) {
          for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            substitutions[_key3 - 2] = arguments[_key3];
          }
          return this.tag(_templateObject, previousTag.apply(void 0, [template].concat(substitutions)));
        }
        /**
         * Performs bulk processing on the tagged template, transforming each substitution and then
         * concatenating the resulting values into a string.
         * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
         * @param  {String}   resultSoFar   - this iteration's result string so far
         * @param  {String}   remainingPart - the template chunk after the current substitution
         * @return {String}                 - the result of joining this iteration's processed substitution with the result
         */
      }, {
        key: "processSubstitutions",
        value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
          var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
          return "".concat(resultSoFar, substitution, remainingPart);
        }
        /**
         * Iterate through each transformer, applying the transformer's `onString` method to the template
         * strings before all substitutions are processed.
         * @param {String}  str - The input string
         * @return {String}     - The final results of processing each transformer
         */
      }, {
        key: "transformString",
        value: function transformString(str) {
          var cb = function cb2(res, transform) {
            return transform.onString ? transform.onString(res) : res;
          };
          return this.transformers.reduce(cb, str);
        }
        /**
         * When a substitution is encountered, iterates through each transformer and applies the transformer's
         * `onSubstitution` method to the substitution.
         * @param  {*}      substitution - The current substitution
         * @param  {String} resultSoFar  - The result up to and excluding this substitution.
         * @return {*}                   - The final result of applying all substitution transformations.
         */
      }, {
        key: "transformSubstitution",
        value: function transformSubstitution(substitution, resultSoFar) {
          var cb = function cb2(res, transform) {
            return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
          };
          return this.transformers.reduce(cb, substitution);
        }
        /**
         * Iterates through each transformer, applying the transformer's `onEndResult` method to the
         * template literal after all substitutions have finished processing.
         * @param  {String} endResult - The processed template, just before it is returned from the tag
         * @return {String}           - The final results of processing each transformer
         */
      }, {
        key: "transformEndResult",
        value: function transformEndResult(endResult) {
          var cb = function cb2(res, transform) {
            return transform.onEndResult ? transform.onEndResult(res) : res;
          };
          return this.transformers.reduce(cb, endResult);
        }
      }]);
      return TemplateTag2;
    }();
    TemplateTag_default = TemplateTag;
  }
});

// node_modules/common-tags/es/TemplateTag/index.js
var init_TemplateTag2 = __esm({
  "node_modules/common-tags/es/TemplateTag/index.js"() {
    init_TemplateTag();
  }
});

// node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js
var trimResultTransformer, trimResultTransformer_default;
var init_trimResultTransformer = __esm({
  "node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js"() {
    trimResultTransformer = function trimResultTransformer2() {
      var side = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return {
        onEndResult: function onEndResult(endResult) {
          if (side === "") {
            return endResult.trim();
          }
          side = side.toLowerCase();
          if (side === "start" || side === "left") {
            return endResult.replace(/^\s*/, "");
          }
          if (side === "end" || side === "right") {
            return endResult.replace(/\s*$/, "");
          }
          throw new Error("Side not supported: " + side);
        }
      };
    };
    trimResultTransformer_default = trimResultTransformer;
  }
});

// node_modules/common-tags/es/trimResultTransformer/index.js
var init_trimResultTransformer2 = __esm({
  "node_modules/common-tags/es/trimResultTransformer/index.js"() {
    init_trimResultTransformer();
  }
});

// node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var stripIndentTransformer, stripIndentTransformer_default;
var init_stripIndentTransformer = __esm({
  "node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js"() {
    stripIndentTransformer = function stripIndentTransformer2() {
      var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "initial";
      return {
        onEndResult: function onEndResult(endResult) {
          if (type === "initial") {
            var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
            var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function(el) {
              return el.length;
            })));
            if (indent) {
              var regexp = new RegExp("^.{" + indent + "}", "gm");
              return endResult.replace(regexp, "");
            }
            return endResult;
          }
          if (type === "all") {
            return endResult.replace(/^[^\S\n]+/gm, "");
          }
          throw new Error("Unknown type: " + type);
        }
      };
    };
    stripIndentTransformer_default = stripIndentTransformer;
  }
});

// node_modules/common-tags/es/stripIndentTransformer/index.js
var init_stripIndentTransformer2 = __esm({
  "node_modules/common-tags/es/stripIndentTransformer/index.js"() {
    init_stripIndentTransformer();
  }
});

// node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js
var replaceResultTransformer, replaceResultTransformer_default;
var init_replaceResultTransformer = __esm({
  "node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js"() {
    replaceResultTransformer = function replaceResultTransformer2(replaceWhat, replaceWith) {
      return {
        onEndResult: function onEndResult(endResult) {
          if (replaceWhat == null || replaceWith == null) {
            throw new Error("replaceResultTransformer requires at least 2 arguments.");
          }
          return endResult.replace(replaceWhat, replaceWith);
        }
      };
    };
    replaceResultTransformer_default = replaceResultTransformer;
  }
});

// node_modules/common-tags/es/replaceResultTransformer/index.js
var init_replaceResultTransformer2 = __esm({
  "node_modules/common-tags/es/replaceResultTransformer/index.js"() {
    init_replaceResultTransformer();
  }
});

// node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js
var replaceSubstitutionTransformer, replaceSubstitutionTransformer_default;
var init_replaceSubstitutionTransformer = __esm({
  "node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js"() {
    replaceSubstitutionTransformer = function replaceSubstitutionTransformer2(replaceWhat, replaceWith) {
      return {
        onSubstitution: function onSubstitution(substitution, resultSoFar) {
          if (replaceWhat == null || replaceWith == null) {
            throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");
          }
          if (substitution == null) {
            return substitution;
          } else {
            return substitution.toString().replace(replaceWhat, replaceWith);
          }
        }
      };
    };
    replaceSubstitutionTransformer_default = replaceSubstitutionTransformer;
  }
});

// node_modules/common-tags/es/replaceSubstitutionTransformer/index.js
var init_replaceSubstitutionTransformer2 = __esm({
  "node_modules/common-tags/es/replaceSubstitutionTransformer/index.js"() {
    init_replaceSubstitutionTransformer();
  }
});

// node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js
var init_replaceStringTransformer = __esm({
  "node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js"() {
  }
});

// node_modules/common-tags/es/replaceStringTransformer/index.js
var init_replaceStringTransformer2 = __esm({
  "node_modules/common-tags/es/replaceStringTransformer/index.js"() {
    init_replaceStringTransformer();
  }
});

// node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js
var defaults, inlineArrayTransformer, inlineArrayTransformer_default;
var init_inlineArrayTransformer = __esm({
  "node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js"() {
    defaults = {
      separator: "",
      conjunction: "",
      serial: false
    };
    inlineArrayTransformer = function inlineArrayTransformer2() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaults;
      return {
        onSubstitution: function onSubstitution(substitution, resultSoFar) {
          if (Array.isArray(substitution)) {
            var arrayLength = substitution.length;
            var separator = opts.separator;
            var conjunction = opts.conjunction;
            var serial = opts.serial;
            var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
            if (indent) {
              substitution = substitution.join(separator + indent[1]);
            } else {
              substitution = substitution.join(separator + " ");
            }
            if (conjunction && arrayLength > 1) {
              var separatorIndex = substitution.lastIndexOf(separator);
              substitution = substitution.slice(0, separatorIndex) + (serial ? separator : "") + " " + conjunction + substitution.slice(separatorIndex + 1);
            }
          }
          return substitution;
        }
      };
    };
    inlineArrayTransformer_default = inlineArrayTransformer;
  }
});

// node_modules/common-tags/es/inlineArrayTransformer/index.js
var init_inlineArrayTransformer2 = __esm({
  "node_modules/common-tags/es/inlineArrayTransformer/index.js"() {
    init_inlineArrayTransformer();
  }
});

// node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js
var splitStringTransformer, splitStringTransformer_default;
var init_splitStringTransformer = __esm({
  "node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js"() {
    splitStringTransformer = function splitStringTransformer2(splitBy) {
      return {
        onSubstitution: function onSubstitution(substitution, resultSoFar) {
          if (splitBy != null && typeof splitBy === "string") {
            if (typeof substitution === "string" && substitution.includes(splitBy)) {
              substitution = substitution.split(splitBy);
            }
          } else {
            throw new Error("You need to specify a string character to split by.");
          }
          return substitution;
        }
      };
    };
    splitStringTransformer_default = splitStringTransformer;
  }
});

// node_modules/common-tags/es/splitStringTransformer/index.js
var init_splitStringTransformer2 = __esm({
  "node_modules/common-tags/es/splitStringTransformer/index.js"() {
    init_splitStringTransformer();
  }
});

// node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js
var isValidValue, removeNonPrintingValuesTransformer, removeNonPrintingValuesTransformer_default;
var init_removeNonPrintingValuesTransformer = __esm({
  "node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js"() {
    isValidValue = function isValidValue2(x) {
      return x != null && !Number.isNaN(x) && typeof x !== "boolean";
    };
    removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer2() {
      return {
        onSubstitution: function onSubstitution(substitution) {
          if (Array.isArray(substitution)) {
            return substitution.filter(isValidValue);
          }
          if (isValidValue(substitution)) {
            return substitution;
          }
          return "";
        }
      };
    };
    removeNonPrintingValuesTransformer_default = removeNonPrintingValuesTransformer;
  }
});

// node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js
var init_removeNonPrintingValuesTransformer2 = __esm({
  "node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js"() {
    init_removeNonPrintingValuesTransformer();
  }
});

// node_modules/common-tags/es/commaLists/commaLists.js
var commaLists;
var init_commaLists = __esm({
  "node_modules/common-tags/es/commaLists/commaLists.js"() {
    init_TemplateTag2();
    init_stripIndentTransformer2();
    init_inlineArrayTransformer2();
    init_trimResultTransformer2();
    commaLists = new TemplateTag_default(inlineArrayTransformer_default({ separator: "," }), stripIndentTransformer_default, trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/commaLists/index.js
var init_commaLists2 = __esm({
  "node_modules/common-tags/es/commaLists/index.js"() {
    init_commaLists();
  }
});

// node_modules/common-tags/es/commaListsAnd/commaListsAnd.js
var commaListsAnd;
var init_commaListsAnd = __esm({
  "node_modules/common-tags/es/commaListsAnd/commaListsAnd.js"() {
    init_TemplateTag2();
    init_stripIndentTransformer2();
    init_inlineArrayTransformer2();
    init_trimResultTransformer2();
    commaListsAnd = new TemplateTag_default(inlineArrayTransformer_default({ separator: ",", conjunction: "and" }), stripIndentTransformer_default, trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/commaListsAnd/index.js
var init_commaListsAnd2 = __esm({
  "node_modules/common-tags/es/commaListsAnd/index.js"() {
    init_commaListsAnd();
  }
});

// node_modules/common-tags/es/commaListsOr/commaListsOr.js
var commaListsOr;
var init_commaListsOr = __esm({
  "node_modules/common-tags/es/commaListsOr/commaListsOr.js"() {
    init_TemplateTag2();
    init_stripIndentTransformer2();
    init_inlineArrayTransformer2();
    init_trimResultTransformer2();
    commaListsOr = new TemplateTag_default(inlineArrayTransformer_default({ separator: ",", conjunction: "or" }), stripIndentTransformer_default, trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/commaListsOr/index.js
var init_commaListsOr2 = __esm({
  "node_modules/common-tags/es/commaListsOr/index.js"() {
    init_commaListsOr();
  }
});

// node_modules/common-tags/es/html/html.js
var html;
var init_html = __esm({
  "node_modules/common-tags/es/html/html.js"() {
    init_TemplateTag2();
    init_stripIndentTransformer2();
    init_inlineArrayTransformer2();
    init_trimResultTransformer2();
    init_splitStringTransformer2();
    init_removeNonPrintingValuesTransformer2();
    html = new TemplateTag_default(splitStringTransformer_default("\n"), removeNonPrintingValuesTransformer_default, inlineArrayTransformer_default, stripIndentTransformer_default, trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/html/index.js
var init_html2 = __esm({
  "node_modules/common-tags/es/html/index.js"() {
    init_html();
  }
});

// node_modules/common-tags/es/codeBlock/index.js
var init_codeBlock = __esm({
  "node_modules/common-tags/es/codeBlock/index.js"() {
    init_html2();
  }
});

// node_modules/common-tags/es/source/index.js
var init_source = __esm({
  "node_modules/common-tags/es/source/index.js"() {
    init_html2();
  }
});

// node_modules/common-tags/es/safeHtml/safeHtml.js
var safeHtml;
var init_safeHtml = __esm({
  "node_modules/common-tags/es/safeHtml/safeHtml.js"() {
    init_TemplateTag2();
    init_stripIndentTransformer2();
    init_inlineArrayTransformer2();
    init_trimResultTransformer2();
    init_splitStringTransformer2();
    init_replaceSubstitutionTransformer2();
    safeHtml = new TemplateTag_default(splitStringTransformer_default("\n"), inlineArrayTransformer_default, stripIndentTransformer_default, trimResultTransformer_default, replaceSubstitutionTransformer_default(/&/g, "&amp;"), replaceSubstitutionTransformer_default(/</g, "&lt;"), replaceSubstitutionTransformer_default(/>/g, "&gt;"), replaceSubstitutionTransformer_default(/"/g, "&quot;"), replaceSubstitutionTransformer_default(/'/g, "&#x27;"), replaceSubstitutionTransformer_default(/`/g, "&#x60;"));
  }
});

// node_modules/common-tags/es/safeHtml/index.js
var init_safeHtml2 = __esm({
  "node_modules/common-tags/es/safeHtml/index.js"() {
    init_safeHtml();
  }
});

// node_modules/common-tags/es/oneLine/oneLine.js
var oneLine, oneLine_default;
var init_oneLine = __esm({
  "node_modules/common-tags/es/oneLine/oneLine.js"() {
    init_TemplateTag2();
    init_trimResultTransformer2();
    init_replaceResultTransformer2();
    oneLine = new TemplateTag_default(replaceResultTransformer_default(/(?:\n(?:\s*))+/g, " "), trimResultTransformer_default);
    oneLine_default = oneLine;
  }
});

// node_modules/common-tags/es/oneLine/index.js
var init_oneLine2 = __esm({
  "node_modules/common-tags/es/oneLine/index.js"() {
    init_oneLine();
  }
});

// node_modules/common-tags/es/oneLineTrim/oneLineTrim.js
var oneLineTrim;
var init_oneLineTrim = __esm({
  "node_modules/common-tags/es/oneLineTrim/oneLineTrim.js"() {
    init_TemplateTag2();
    init_trimResultTransformer2();
    init_replaceResultTransformer2();
    oneLineTrim = new TemplateTag_default(replaceResultTransformer_default(/(?:\n\s*)/g, ""), trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/oneLineTrim/index.js
var init_oneLineTrim2 = __esm({
  "node_modules/common-tags/es/oneLineTrim/index.js"() {
    init_oneLineTrim();
  }
});

// node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js
var oneLineCommaLists;
var init_oneLineCommaLists = __esm({
  "node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js"() {
    init_TemplateTag2();
    init_inlineArrayTransformer2();
    init_trimResultTransformer2();
    init_replaceResultTransformer2();
    oneLineCommaLists = new TemplateTag_default(inlineArrayTransformer_default({ separator: "," }), replaceResultTransformer_default(/(?:\s+)/g, " "), trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/oneLineCommaLists/index.js
var init_oneLineCommaLists2 = __esm({
  "node_modules/common-tags/es/oneLineCommaLists/index.js"() {
    init_oneLineCommaLists();
  }
});

// node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js
var oneLineCommaListsOr;
var init_oneLineCommaListsOr = __esm({
  "node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js"() {
    init_TemplateTag2();
    init_inlineArrayTransformer2();
    init_trimResultTransformer2();
    init_replaceResultTransformer2();
    oneLineCommaListsOr = new TemplateTag_default(inlineArrayTransformer_default({ separator: ",", conjunction: "or" }), replaceResultTransformer_default(/(?:\s+)/g, " "), trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/oneLineCommaListsOr/index.js
var init_oneLineCommaListsOr2 = __esm({
  "node_modules/common-tags/es/oneLineCommaListsOr/index.js"() {
    init_oneLineCommaListsOr();
  }
});

// node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js
var oneLineCommaListsAnd;
var init_oneLineCommaListsAnd = __esm({
  "node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js"() {
    init_TemplateTag2();
    init_inlineArrayTransformer2();
    init_trimResultTransformer2();
    init_replaceResultTransformer2();
    oneLineCommaListsAnd = new TemplateTag_default(inlineArrayTransformer_default({ separator: ",", conjunction: "and" }), replaceResultTransformer_default(/(?:\s+)/g, " "), trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/oneLineCommaListsAnd/index.js
var init_oneLineCommaListsAnd2 = __esm({
  "node_modules/common-tags/es/oneLineCommaListsAnd/index.js"() {
    init_oneLineCommaListsAnd();
  }
});

// node_modules/common-tags/es/inlineLists/inlineLists.js
var inlineLists;
var init_inlineLists = __esm({
  "node_modules/common-tags/es/inlineLists/inlineLists.js"() {
    init_TemplateTag2();
    init_stripIndentTransformer2();
    init_inlineArrayTransformer2();
    init_trimResultTransformer2();
    inlineLists = new TemplateTag_default(inlineArrayTransformer_default, stripIndentTransformer_default, trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/inlineLists/index.js
var init_inlineLists2 = __esm({
  "node_modules/common-tags/es/inlineLists/index.js"() {
    init_inlineLists();
  }
});

// node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js
var oneLineInlineLists;
var init_oneLineInlineLists = __esm({
  "node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js"() {
    init_TemplateTag2();
    init_inlineArrayTransformer2();
    init_trimResultTransformer2();
    init_replaceResultTransformer2();
    oneLineInlineLists = new TemplateTag_default(inlineArrayTransformer_default, replaceResultTransformer_default(/(?:\s+)/g, " "), trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/oneLineInlineLists/index.js
var init_oneLineInlineLists2 = __esm({
  "node_modules/common-tags/es/oneLineInlineLists/index.js"() {
    init_oneLineInlineLists();
  }
});

// node_modules/common-tags/es/stripIndent/stripIndent.js
var stripIndent, stripIndent_default;
var init_stripIndent = __esm({
  "node_modules/common-tags/es/stripIndent/stripIndent.js"() {
    init_TemplateTag2();
    init_stripIndentTransformer2();
    init_trimResultTransformer2();
    stripIndent = new TemplateTag_default(stripIndentTransformer_default, trimResultTransformer_default);
    stripIndent_default = stripIndent;
  }
});

// node_modules/common-tags/es/stripIndent/index.js
var init_stripIndent2 = __esm({
  "node_modules/common-tags/es/stripIndent/index.js"() {
    init_stripIndent();
  }
});

// node_modules/common-tags/es/stripIndents/stripIndents.js
var stripIndents;
var init_stripIndents = __esm({
  "node_modules/common-tags/es/stripIndents/stripIndents.js"() {
    init_TemplateTag2();
    init_stripIndentTransformer2();
    init_trimResultTransformer2();
    stripIndents = new TemplateTag_default(stripIndentTransformer_default("all"), trimResultTransformer_default);
  }
});

// node_modules/common-tags/es/stripIndents/index.js
var init_stripIndents2 = __esm({
  "node_modules/common-tags/es/stripIndents/index.js"() {
    init_stripIndents();
  }
});

// node_modules/common-tags/es/index.js
var init_es = __esm({
  "node_modules/common-tags/es/index.js"() {
    init_TemplateTag2();
    init_trimResultTransformer2();
    init_stripIndentTransformer2();
    init_replaceResultTransformer2();
    init_replaceSubstitutionTransformer2();
    init_replaceStringTransformer2();
    init_inlineArrayTransformer2();
    init_splitStringTransformer2();
    init_removeNonPrintingValuesTransformer2();
    init_commaLists2();
    init_commaListsAnd2();
    init_commaListsOr2();
    init_html2();
    init_codeBlock();
    init_source();
    init_safeHtml2();
    init_oneLine2();
    init_oneLineTrim2();
    init_oneLineCommaLists2();
    init_oneLineCommaListsOr2();
    init_oneLineCommaListsAnd2();
    init_inlineLists2();
    init_oneLineInlineLists2();
    init_stripIndent2();
    init_stripIndents2();
  }
});

// .svelte-kit/output/server/entries/endpoints/api/flirt/_server.ts.js
var server_ts_exports = {};
__export(server_ts_exports, {
  POST: () => POST,
  config: () => config
});
var OPENAI_KEY, config, POST;
var init_server_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/api/flirt/_server.ts.js"() {
    init_es();
    init_chunks();
    OPENAI_KEY = "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";
    config = {
      runtime: "edge"
    };
    POST = async ({ request }) => {
      try {
        if (!OPENAI_KEY)
          ;
        const requestData = await request.json();
        if (!requestData) {
          throw new Error("Request data missing");
        }
        const { context } = requestData;
        if (!context) {
          throw new Error("No context provided");
        }
        const prompt = stripIndent_default`
        ${oneLine_default`
        You are a flirtatious human who finds everyone attractive and interesting. Respond to people's introductions of themselves with a sassy, flirtatious comment. Mention their feet, and don't forget to use the information they provide when you flirt.
        `}

        Context:"""${context.trim()}"""

        Answer:
        `;
        const completionOpts = {
          model: "text-davinci-003",
          prompt,
          max_tokens: 256,
          temperature: 0.9,
          stream: true
        };
        const response = await fetch("https://api.openai.com/v1/completions", {
          headers: {
            Authorization: `Bearer ${OPENAI_KEY}`,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(completionOpts)
        });
        if (!response.ok) {
          const err = await response.json();
          console.error(err);
          throw new Error("Failed to create completion", err);
        }
        return new Response(response.body, {
          headers: {
            "Content-Type": "text/event-stream"
          }
        });
      } catch (err) {
        console.error(err);
        throw error(500, "An error occurred");
      }
    };
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_index3();
var base = "";
var assets = base;
var initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page2);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link\n			rel="icon"\n			type="image/svg"\n			sizes="any"\n			href="https://raw.githubusercontent.com/MaDrCloudDev/projectsImages/master/MaDrLogo.svg"\n		/>\n		<!-- <link rel="icon" href="' + assets2 + '/favicon.png" /> -->\n		<meta name="viewport" content="width=device-width" />\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1d0eier"
};
function get_hooks() {
  return {};
}

// .svelte-kit/output/server/index.js
init_chunks();

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index4 = p++;
    indexes.set(thing, index4);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index4] = `["${key2}",${flatten(value2)}]`;
        return index4;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index4] = str;
    return index4;
  }
  const index3 = flatten(value);
  if (index3 < 0)
    return `${index3}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_index2();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {Redirect | HttpError | Error} */
    error2
  );
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"].filter(
    (method) => method in mod
  );
  if ("GET" in mod || "HEAD" in mod)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return await options2.hooks.handleError({ error: error2, event }) ?? {
      message: event.route.id != null ? "Internal Error" : "Not Found"
    };
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent)
    uses.push(`"parent":1`);
  if (node.uses?.route)
    uses.push(`"route":1`);
  if (node.uses?.url)
    uses.push(`"url":1`);
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await handler(
      /** @type {import('types').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE" || method === "OPTIONS") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = (
  /** @type {const} */
  [
    "href",
    "pathname",
    "search",
    "searchParams",
    "toString",
    "toJSON"
  ]
);
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error(`Cannot "throw fail()". Use "return fail()"`) : error2;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")})`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error2 = (
      /** @type {any} */
      e
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
async function load_server_data({ event, state, node, parent }) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      uses.dependencies.add(url2.href);
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        uses.route = true;
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url
  });
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result) : null;
  return data;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  return async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
              method: event.request.method,
              request_body: (
                /** @type {string | ArrayBufferView | undefined} */
                input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
              ),
              request_headers: init2?.headers,
              response_body: body,
              response: response2
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i)
        hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let vary = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
    if (key2 === "vary")
      vary = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !vary) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes, void 0);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp, void 0);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp, void 0);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src, void 0);
    /** @type {string} */
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types').CspConfig} config
   * @param {import('./types').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  let deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done)
              deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets3 = new Set(client.stylesheets);
  const fonts3 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  if (!state.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value
    };
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports)
        modulepreloads.add(url);
      for (const url of node.stylesheets)
        stylesheets3.add(url);
      for (const url of node.fonts)
        fonts3.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets3) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts3) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global2 = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    global2
  );
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const properties = [
      assets && `assets: ${s(assets)}`,
      `base: ${base_expression}`,
      `env: ${s(public_env)}`
    ].filter(Boolean);
    if (chunks) {
      blocks.push(`const deferred = new Map();`);
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global2} = {
						${properties.join(",\n						")}
					};`);
    const args = [`app`, `element`];
    blocks.push(`const element = document.currentScript.parentElement;`);
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        `data`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      args.push(`{
							${hydrate.join(",\n							")}
						}`);
    }
    blocks.push(`Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html2 = options2.templates.app({
    head,
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html: html2,
    done: true
  }) || "";
  if (!chunks) {
    headers.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options2, nodes, global2) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch (e) {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          push(`<script>${global2}.resolve(${str})<\/script>
`);
          if (count === 0)
            done();
        }
      );
      return `${global2}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      e instanceof HttpError ? e.status : 500,
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var encoder2 = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest2._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder2.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder2.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch (e) {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0)
              done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index3 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index3]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    const value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      result[param.name] = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
      continue;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults2 = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('types').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder = opts?.decode || decodeURIComponent;
      const cookies2 = (0, import_cookie.parse)(header, { decode: decoder });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      let path = opts.path ?? default_path;
      new_cookies[name] = {
        name,
        value,
        options: {
          ...defaults2,
          ...opts,
          path
        }
      };
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults2,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  return { cookies, new_cookies, get_cookie_header };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return await options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        let response;
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str);
            event.cookies.set(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  function validate(module, file) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2))
        continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  let supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(`, `)}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var valid_layout_exports = /* @__PURE__ */ new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
var valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
var valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "actions"]);
var valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "entries"]);
var valid_server_exports = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "prerender",
  "trailingSlash",
  "config",
  "entries"
]);
var validate_layout_exports = validator(valid_layout_exports);
var validate_page_exports = validator(valid_page_exports);
var validate_layout_server_exports = validator(valid_layout_server_exports);
var validate_page_server_exports = validator(valid_page_server_exports);
var validate_server_exports = validator(valid_server_exports);
var default_transform = ({ html: html2 }) => html2;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
async function respond(request, options2, manifest2, state) {
  let url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) || "/";
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
    }
    const { cookies, new_cookies, get_cookie_header } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : route?.page && is_action_json_request(event) ? action_json_redirect(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
var _options, _manifest;
var Server = class {
  /** @param {import('types').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options, void 0);
    /** @type {import('types').SSRManifest} */
    __privateAdd(this, _manifest, void 0);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    const entries = Object.entries(env);
    const prefix = __privateGet(this, _options).env_public_prefix;
    Object.fromEntries(entries.filter(([k]) => !k.startsWith(prefix)));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith(prefix)));
    set_public_env(pub);
    if (!__privateGet(this, _options).hooks) {
      try {
        const module = await get_hooks();
        __privateGet(this, _options).hooks = {
          handle: module.handle || (({ event, resolve }) => resolve(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
        };
      } catch (error2) {
        {
          throw error2;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/vercel-tmp/fn-1/manifest.js
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set([]),
  mimeTypes: {},
  _: {
    client: { "start": "_app/immutable/entry/start.f304b83b.js", "app": "_app/immutable/entry/app.8d013a3d.js", "imports": ["_app/immutable/entry/start.f304b83b.js", "_app/immutable/chunks/index.af31daf7.js", "_app/immutable/chunks/singletons.ccca09d5.js", "_app/immutable/entry/app.8d013a3d.js", "_app/immutable/chunks/index.af31daf7.js"], "stylesheets": [], "fonts": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2))
    ],
    routes: [
      {
        id: "/api/flirt",
        pattern: /^\/api\/flirt\/?$/,
        params: [],
        page: null,
        endpoint: () => Promise.resolve().then(() => (init_server_ts(), server_ts_exports))
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

// .svelte-kit/vercel-tmp/fn-1/edge.js
var server = new Server(manifest);
var initialized = server.init({
  env: (
    /** @type {Record<string, string>} */
    process.env
  )
});
var edge_default = async (request, context) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return (
        /** @type {string} */
        request.headers.get("x-forwarded-for")
      );
    },
    platform: {
      context
    }
  });
};
export {
  edge_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=index.js.map
