import{Q as Z,S as nt,i as at,s as lt,k as y,a as w,q as D,R as ot,l as S,h as u,c as k,m as g,r as R,n as m,F as p,b as O,T as $,G as T,U as ht,g as P,d as q,f as et,L as st,V as ut,e as z,v as rt,u as dt,W as ft,X as Q}from"../chunks/index.af31daf7.js";function ct(o){const r=o-1;return r*r*r+1}function W(o,{delay:r=0,duration:l=400,easing:s=ct,x:t=0,y:e=0,opacity:i=0}={}){const n=getComputedStyle(o),d=+n.opacity,E=n.transform==="none"?"":n.transform,f=d*(1-i),[_,c]=Z(t),[v,b]=Z(e);return{delay:r,duration:l,easing:s,css:(I,C)=>`
			transform: ${E} translate(${(1-I)*_}${c}, ${(1-I)*v}${b});
			opacity: ${d-f*C}`}}var it={};(function(o){var r=function(l,s){if(!(this instanceof r))return new r(l,s);this.INITIALIZING=-1,this.CONNECTING=0,this.OPEN=1,this.CLOSED=2,this.url=l,s=s||{},this.headers=s.headers||{},this.payload=s.payload!==void 0?s.payload:"",this.method=s.method||this.payload&&"POST"||"GET",this.withCredentials=!!s.withCredentials,this.FIELD_SEPARATOR=":",this.listeners={},this.xhr=null,this.readyState=this.INITIALIZING,this.progress=0,this.chunk="",this.addEventListener=function(t,e){this.listeners[t]===void 0&&(this.listeners[t]=[]),this.listeners[t].indexOf(e)===-1&&this.listeners[t].push(e)},this.removeEventListener=function(t,e){if(this.listeners[t]!==void 0){var i=[];this.listeners[t].forEach(function(n){n!==e&&i.push(n)}),i.length===0?delete this.listeners[t]:this.listeners[t]=i}},this.dispatchEvent=function(t){if(!t)return!0;t.source=this;var e="on"+t.type;return this.hasOwnProperty(e)&&(this[e].call(this,t),t.defaultPrevented)?!1:this.listeners[t.type]?this.listeners[t.type].every(function(i){return i(t),!t.defaultPrevented}):!0},this._setReadyState=function(t){var e=new CustomEvent("readystatechange");e.readyState=t,this.readyState=t,this.dispatchEvent(e)},this._onStreamFailure=function(t){var e=new CustomEvent("error");e.data=t.currentTarget.response,this.dispatchEvent(e),this.close()},this._onStreamAbort=function(t){this.dispatchEvent(new CustomEvent("abort")),this.close()},this._onStreamProgress=function(t){if(this.xhr){if(this.xhr.status!==200){this._onStreamFailure(t);return}this.readyState==this.CONNECTING&&(this.dispatchEvent(new CustomEvent("open")),this._setReadyState(this.OPEN));var e=this.xhr.responseText.substring(this.progress);this.progress+=e.length,e.split(/(\r\n|\r|\n){2}/g).forEach(function(i){i.trim().length===0?(this.dispatchEvent(this._parseEventChunk(this.chunk.trim())),this.chunk=""):this.chunk+=i}.bind(this))}},this._onStreamLoaded=function(t){this._onStreamProgress(t),this.dispatchEvent(this._parseEventChunk(this.chunk)),this.chunk=""},this._parseEventChunk=function(t){if(!t||t.length===0)return null;var e={id:null,retry:null,data:"",event:"message"};t.split(/\n|\r\n|\r/).forEach(function(n){n=n.trimRight();var d=n.indexOf(this.FIELD_SEPARATOR);if(!(d<=0)){var E=n.substring(0,d);if(E in e){var f=n.substring(d+1).trimLeft();E==="data"?e[E]+=f:e[E]=f}}}.bind(this));var i=new CustomEvent(e.event);return i.data=e.data,i.id=e.id,i},this._checkStreamClosed=function(){this.xhr&&this.xhr.readyState===XMLHttpRequest.DONE&&this._setReadyState(this.CLOSED)},this.stream=function(){this._setReadyState(this.CONNECTING),this.xhr=new XMLHttpRequest,this.xhr.addEventListener("progress",this._onStreamProgress.bind(this)),this.xhr.addEventListener("load",this._onStreamLoaded.bind(this)),this.xhr.addEventListener("readystatechange",this._checkStreamClosed.bind(this)),this.xhr.addEventListener("error",this._onStreamFailure.bind(this)),this.xhr.addEventListener("abort",this._onStreamAbort.bind(this)),this.xhr.open(this.method,this.url);for(var t in this.headers)this.xhr.setRequestHeader(t,this.headers[t]);this.xhr.withCredentials=this.withCredentials,this.xhr.send(this.payload)},this.close=function(){this.readyState!==this.CLOSED&&(this.xhr.abort(),this.xhr=null,this._setReadyState(this.CLOSED))}};o.SSE=r})(it);const{document:M}=ut;function K(o){let r,l,s=o[0]&&tt(o);return{c(){s&&s.c(),r=z()},l(t){s&&s.l(t),r=z()},m(t,e){s&&s.m(t,e),O(t,r,e),l=!0},p(t,e){t[0]?s?(s.p(t,e),e&1&&P(s,1)):(s=tt(t),s.c(),P(s,1),s.m(r.parentNode,r)):s&&(rt(),q(s,1,1,()=>{s=null}),et())},i(t){l||(P(s),l=!0)},o(t){q(s),l=!1},d(t){s&&s.d(t),t&&u(r)}}}function tt(o){let r,l,s,t,e,i,n,d,E,f;return{c(){r=y("div"),l=y("h2"),s=D("flirtatiousAI:"),t=w(),e=y("p"),i=D(o[2]),this.h()},l(_){r=S(_,"DIV",{class:!0});var c=g(r);l=S(c,"H2",{class:!0});var v=g(l);s=R(v,"flirtatiousAI:"),v.forEach(u),t=k(c),e=S(c,"P",{class:!0});var b=g(e);i=R(b,o[2]),b.forEach(u),c.forEach(u),this.h()},h(){m(l,"class","text-2xl font-bold text-right text-green-500 mb-1"),m(e,"class","text-2xl border-2 border-[#7F7D76] p-4"),m(r,"class","pt-4")},m(_,c){O(_,r,c),p(r,l),p(l,s),p(r,t),p(r,e),p(e,i),d=!0,E||(f=[T(r,"introstart",o[5]),T(r,"outrostart",o[6]),T(r,"introend",o[7]),T(r,"outroend",o[8])],E=!0)},p(_,c){(!d||c&4)&&dt(i,_[2])},i(_){d||(ft(()=>{d&&(n||(n=Q(r,W,{x:200,duration:2e3},!0)),n.run(1))}),d=!0)},o(_){n||(n=Q(r,W,{x:200,duration:2e3},!1)),n.run(0),d=!1},d(_){_&&u(r),_&&n&&n.end(),E=!1,st(f)}}}function mt(o){let r,l,s,t,e,i,n,d,E,f,_,c,v,b,I,C,A,N,G,F,H,j,h=o[2]&&K(o);return{c(){r=y("meta"),l=w(),s=y("h1"),t=D("flirtatiousAI"),e=w(),i=y("form"),n=y("label"),d=D("Introduce yourself to the AI:"),E=w(),f=y("input"),_=w(),c=y("div"),v=y("button"),b=D("Introduce Yourself"),I=w(),h&&h.c(),C=w(),A=y("div"),N=y("a"),G=D("Read about this project!"),this.h()},l(a){const x=ot("svelte-14v2q",M.head);r=S(x,"META",{name:!0,content:!0}),x.forEach(u),l=k(a),s=S(a,"H1",{class:!0});var V=g(s);t=R(V,"flirtatiousAI"),V.forEach(u),e=k(a),i=S(a,"FORM",{class:!0});var L=g(i);n=S(L,"LABEL",{class:!0,for:!0});var U=g(n);d=R(U,"Introduce yourself to the AI:"),U.forEach(u),E=k(L),f=S(L,"INPUT",{placeholder:!0,class:!0,name:!0}),_=k(L),c=S(L,"DIV",{class:!0});var X=g(c);v=S(X,"BUTTON",{type:!0,class:!0});var B=g(v);b=R(B,"Introduce Yourself"),B.forEach(u),X.forEach(u),I=k(L),h&&h.l(L),L.forEach(u),C=k(a),A=S(a,"DIV",{class:!0});var J=g(A);N=S(J,"A",{href:!0,class:!0});var Y=g(N);G=R(Y,"Read about this project!"),Y.forEach(u),J.forEach(u),this.h()},h(){M.title="flirtatiousAI | MaDr",m(r,"name","description"),m(r,"content","A bot that flirts with you by MaDrCloudDev."),m(s,"class","text-4xl sm:text-5xl font-bold text-[#328eef] text-center"),m(n,"class","text-[#fffb00] text-xl sm:text-2xl px-1 mb-1 ml-1"),m(n,"for","context"),m(f,"placeholder","e.g. Hi, I'm MaDr, I'm a developer from Arizona..."),m(f,"class","bg-black placeholder:text-gray-400 border-2 border-[#7F7D76] text-[#328eef] text-sm sm:text-xl px-3 py-2 mx-1"),m(f,"name","context"),m(v,"type","submit"),m(v,"class","btn btn-primary text-[#7F7D76] hover:text-black text-lg svelte-ydt01x"),m(c,"class","flex justify-center mt-3 mb-3"),m(i,"class","flex flex-col max-w-lg w-full mx-auto overflow-hidden"),m(N,"href","https://madr.io/flirtatiousai"),m(N,"class","justify-center text-lg sm:text-2xl hover:text-[#fffb00] text-[#328eef] cursor-pointer"),m(A,"class","flex justify-center mt-2")},m(a,x){p(M.head,r),O(a,l,x),O(a,s,x),p(s,t),O(a,e,x),O(a,i,x),p(i,n),p(n,d),p(i,E),p(i,f),$(f,o[1]),p(i,_),p(i,c),p(c,v),p(v,b),p(i,I),h&&h.m(i,null),O(a,C,x),O(a,A,x),p(A,N),p(N,G),F=!0,H||(j=[T(f,"input",o[4]),T(i,"submit",ht(o[3]))],H=!0)},p(a,[x]){x&2&&f.value!==a[1]&&$(f,a[1]),a[2]?h?(h.p(a,x),x&4&&P(h,1)):(h=K(a),h.c(),P(h,1),h.m(i,null)):h&&(rt(),q(h,1,1,()=>{h=null}),et())},i(a){F||(P(h),F=!0)},o(a){q(h),F=!1},d(a){u(r),a&&u(l),a&&u(s),a&&u(e),a&&u(i),h&&h.d(),a&&u(C),a&&u(A),H=!1,st(j)}}}function pt(){document.querySelector("input").value="",document.activeElement.blur()}function _t(o,r,l){let s=!1,t="",e=!1,i="";const n=async()=>{e=!0,l(2,i="");const v=new it.SSE("/api/flirt",{headers:{"Content-Type":"application/json"},payload:JSON.stringify({context:t})});l(1,t=""),v.addEventListener("error",b=>{e=!1,alert("OpenAI API has reached its limit!")}),v.addEventListener("message",b=>{try{if(e=!1,b.data==="[DONE]")return;const I=JSON.parse(b.data),[{text:C}]=I.choices;l(2,i=(i??"")+C)}catch(I){e=!1,console.error(I),alert("Something went wrong!")}}),v.stream(),pt(),l(0,s=!0)};function d(){t=this.value,l(1,t)}return[s,t,i,n,d,()=>status="intro started",()=>status="outro started",()=>status="intro ended",()=>status="outro ended"]}class Et extends nt{constructor(r){super(),at(this,r,_t,mt,lt,{})}}export{Et as component};
