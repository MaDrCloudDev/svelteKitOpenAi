import{S as j,i as z,s as K,k as p,a as L,q as N,J as U,l as _,h as u,c as g,m as y,r as O,n as m,G as d,b as I,K as F,L as J,M as V,H as X,N as Q,u as W}from"../chunks/index.e839a3cc.js";var Z={};(function(f){var i=function(h,s){if(!(this instanceof i))return new i(h,s);this.INITIALIZING=-1,this.CONNECTING=0,this.OPEN=1,this.CLOSED=2,this.url=h,s=s||{},this.headers=s.headers||{},this.payload=s.payload!==void 0?s.payload:"",this.method=s.method||this.payload&&"POST"||"GET",this.withCredentials=!!s.withCredentials,this.FIELD_SEPARATOR=":",this.listeners={},this.xhr=null,this.readyState=this.INITIALIZING,this.progress=0,this.chunk="",this.addEventListener=function(t,e){this.listeners[t]===void 0&&(this.listeners[t]=[]),this.listeners[t].indexOf(e)===-1&&this.listeners[t].push(e)},this.removeEventListener=function(t,e){if(this.listeners[t]!==void 0){var r=[];this.listeners[t].forEach(function(a){a!==e&&r.push(a)}),r.length===0?delete this.listeners[t]:this.listeners[t]=r}},this.dispatchEvent=function(t){if(!t)return!0;t.source=this;var e="on"+t.type;return this.hasOwnProperty(e)&&(this[e].call(this,t),t.defaultPrevented)?!1:this.listeners[t.type]?this.listeners[t.type].every(function(r){return r(t),!t.defaultPrevented}):!0},this._setReadyState=function(t){var e=new CustomEvent("readystatechange");e.readyState=t,this.readyState=t,this.dispatchEvent(e)},this._onStreamFailure=function(t){var e=new CustomEvent("error");e.data=t.currentTarget.response,this.dispatchEvent(e),this.close()},this._onStreamAbort=function(t){this.dispatchEvent(new CustomEvent("abort")),this.close()},this._onStreamProgress=function(t){if(this.xhr){if(this.xhr.status!==200){this._onStreamFailure(t);return}this.readyState==this.CONNECTING&&(this.dispatchEvent(new CustomEvent("open")),this._setReadyState(this.OPEN));var e=this.xhr.responseText.substring(this.progress);this.progress+=e.length,e.split(/(\r\n|\r|\n){2}/g).forEach(function(r){r.trim().length===0?(this.dispatchEvent(this._parseEventChunk(this.chunk.trim())),this.chunk=""):this.chunk+=r}.bind(this))}},this._onStreamLoaded=function(t){this._onStreamProgress(t),this.dispatchEvent(this._parseEventChunk(this.chunk)),this.chunk=""},this._parseEventChunk=function(t){if(!t||t.length===0)return null;var e={id:null,retry:null,data:"",event:"message"};t.split(/\n|\r\n|\r/).forEach(function(a){a=a.trimRight();var b=a.indexOf(this.FIELD_SEPARATOR);if(!(b<=0)){var c=a.substring(0,b);if(c in e){var o=a.substring(b+1).trimLeft();c==="data"?e[c]+=o:e[c]=o}}}.bind(this));var r=new CustomEvent(e.event);return r.data=e.data,r.id=e.id,r},this._checkStreamClosed=function(){this.xhr&&this.xhr.readyState===XMLHttpRequest.DONE&&this._setReadyState(this.CLOSED)},this.stream=function(){this._setReadyState(this.CONNECTING),this.xhr=new XMLHttpRequest,this.xhr.addEventListener("progress",this._onStreamProgress.bind(this)),this.xhr.addEventListener("load",this._onStreamLoaded.bind(this)),this.xhr.addEventListener("readystatechange",this._checkStreamClosed.bind(this)),this.xhr.addEventListener("error",this._onStreamFailure.bind(this)),this.xhr.addEventListener("abort",this._onStreamAbort.bind(this)),this.xhr.open(this.method,this.url);for(var t in this.headers)this.xhr.setRequestHeader(t,this.headers[t]);this.xhr.withCredentials=this.withCredentials,this.xhr.send(this.payload)},this.close=function(){this.readyState!==this.CLOSED&&(this.xhr.abort(),this.xhr=null,this._setReadyState(this.CLOSED))}};f.SSE=i})(Z);function Y(f){let i,h;return{c(){i=p("p"),h=N(f[1])},l(s){i=_(s,"P",{});var t=y(i);h=O(t,f[1]),t.forEach(u)},m(s,t){I(s,i,t),d(i,h)},p(s,t){t&2&&W(h,s[1])},d(s){s&&u(i)}}}function $(f){let i,h,s,t,e,r,a,b,c,o,C,x,k,R,E,w,D,A,P,B,l=f[1]&&Y(f);return{c(){i=p("meta"),h=L(),s=p("h1"),t=N("flirtatiousBot"),e=L(),r=p("form"),a=p("label"),b=N("Introduce yourself to the bot:"),c=L(),o=p("textarea"),C=L(),x=p("button"),k=N("Introduce Yourself"),R=L(),E=p("div"),w=p("h2"),D=N("flirtatiousBot:"),A=L(),l&&l.c(),this.h()},l(n){const v=U("svelte-d5zvqt",document.head);i=_(v,"META",{name:!0,content:!0}),v.forEach(u),h=g(n),s=_(n,"H1",{class:!0});var G=y(s);t=O(G,"flirtatiousBot"),G.forEach(u),e=g(n),r=_(n,"FORM",{class:!0});var S=y(r);a=_(S,"LABEL",{class:!0,for:!0});var H=y(a);b=O(H,"Introduce yourself to the bot:"),H.forEach(u),c=g(S),o=_(S,"TEXTAREA",{class:!0,name:!0,rows:!0}),y(o).forEach(u),C=g(S),x=_(S,"BUTTON",{class:!0});var M=y(x);k=O(M,"Introduce Yourself"),M.forEach(u),R=g(S),E=_(S,"DIV",{class:!0});var T=y(E);w=_(T,"H2",{class:!0});var q=y(w);D=O(q,"flirtatiousBot:"),q.forEach(u),A=g(T),l&&l.l(T),T.forEach(u),S.forEach(u),this.h()},h(){document.title="flirtatiousBot | MaDr",m(i,"name","description"),m(i,"content","A bot that flirts with you by MaDrCloudDev."),m(s,"class","text-4xl font-bold text-[#328eef] text-center"),m(a,"class","text-[#fffb00] text-xl mb-1"),m(a,"for","context"),m(o,"class","bg-black border text-[#328eef]"),m(o,"name","context"),m(o,"rows","5"),m(x,"class","btn btn-black w-fit mx-auto mt-3 p-4 rounded-full border border-gray-900 text-[#7f7d76] shadow-md shadow-gray-700 hover:scale-110 ease-in duration-200 hover:text-[#fffb00] hover:border-[#328eef] hover:shadow-[#328eef] text-sm md:text-lg"),m(w,"class","text-2xl font-bold"),m(E,"class","pt-4"),m(r,"class","flex flex-col pt-8 max-w-lg w-full mx-auto")},m(n,v){d(document.head,i),I(n,h,v),I(n,s,v),d(s,t),I(n,e,v),I(n,r,v),d(r,a),d(a,b),d(r,c),d(r,o),F(o,f[0]),d(r,C),d(r,x),d(x,k),d(r,R),d(r,E),d(E,w),d(w,D),d(E,A),l&&l.m(E,null),P||(B=[J(o,"input",f[3]),J(r,"submit",V(f[4]))],P=!0)},p(n,[v]){v&1&&F(o,n[0]),n[1]?l?l.p(n,v):(l=Y(n),l.c(),l.m(E,null)):l&&(l.d(1),l=null)},i:X,o:X,d(n){u(i),n&&u(h),n&&u(s),n&&u(e),n&&u(r),l&&l.d(),P=!1,Q(B)}}}function tt(f,i,h){let s="",t=!1,e="";const r=async()=>{t=!0,h(1,e="");const c=new Z.SSE("/api/explain",{headers:{"Content-Type":"application/json"},payload:JSON.stringify({context:s})});h(0,s=""),c.addEventListener("error",o=>{t=!1,alert("Did not work!")}),c.addEventListener("message",o=>{try{if(t=!1,o.data==="[DONE]")return;const C=JSON.parse(o.data),[{text:x}]=C.choices;h(1,e=(e??"")+x)}catch(C){t=!1,console.error(C),alert("Did not work!")}}),c.stream()};function a(){s=this.value,h(0,s)}return[s,e,r,a,()=>r()]}class st extends j{constructor(i){super(),z(this,i,tt,$,K,{})}}export{st as default};
