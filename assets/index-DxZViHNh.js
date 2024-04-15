var Jc=Object.defineProperty;var Xc=(n,e,t)=>e in n?Jc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var zt=(n,e,t)=>(Xc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function ae(){}const ai=n=>n;function Ul(n){return n()}function Vr(){return Object.create(null)}function nt(n){n.forEach(Ul)}function pn(n){return typeof n=="function"}function st(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Ts;function tt(n,e){return n===e?!0:(Ts||(Ts=document.createElement("a")),Ts.href=e,n===Ts.href)}function Zc(n){return Object.keys(n).length===0}function zl(n,...e){if(n==null){for(const s of e)s(void 0);return ae}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ci(n){let e;return zl(n,t=>e=t)(),e}function fe(n,e,t){n.$$.on_destroy.push(zl(e,t))}function ue(n,e,t){return n.set(t),e}function Vl(n){return n&&pn(n.destroy)?n.destroy:ae}const Yl=typeof window<"u";let ar=Yl?()=>window.performance.now():()=>Date.now(),cr=Yl?n=>requestAnimationFrame(n):ae;const En=new Set;function $l(n){En.forEach(e=>{e.c(n)||(En.delete(e),e.f())}),En.size!==0&&cr($l)}function ur(n){let e;return En.size===0&&cr($l),{promise:new Promise(t=>{En.add(e={c:n,f:t})}),abort(){En.delete(e)}}}const eu=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(n,e){n.appendChild(e)}function Kl(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function tu(n){const e=p("style");return e.textContent="/* empty */",nu(Kl(n),e),e.sheet}function nu(n,e){return h(n.head||n,e),e.sheet}function S(n,e,t){n.insertBefore(e,t||null)}function E(n){n.parentNode&&n.parentNode.removeChild(n)}function at(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function p(n){return document.createElement(n)}function su(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function H(n){return document.createTextNode(n)}function y(){return H(" ")}function wt(){return H("")}function ke(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ke(n,e,t){const s=e.toLowerCase();s in n?n[s]=typeof n[s]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function Ms(n){return n===""?null:+n}function iu(n){return Array.from(n.childNodes)}function de(n,e){e=""+e,n.data!==e&&(n.data=e)}function Ns(n,e){n.value=e??""}function Dn(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function Ue(n,e,t){n.classList.toggle(e,!!t)}function Ql(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class Jl{constructor(e=!1){zt(this,"is_svg",!1);zt(this,"e");zt(this,"n");zt(this,"t");zt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=su(t.nodeName):this.e=p(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)S(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}function Ls(n,e){return new n(e)}const Fs=new Map;let qs=0;function ru(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function ou(n,e){const t={stylesheet:tu(e),rules:{}};return Fs.set(n,t),t}function Ws(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let w=0;w<=1;w+=a){const T=e+(t-e)*r(w);c+=w*100+`%{${o(T,1-T)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,d=`__svelte_${ru(u)}_${l}`,f=Kl(n),{stylesheet:m,rules:g}=Fs.get(f)||ou(f,n);g[d]||(g[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${d} ${s}ms linear ${i}ms 1 both`,qs+=1,d}function hr(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),qs-=i,qs||lu())}function lu(){cr(()=>{qs||(Fs.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&E(e)}),Fs.clear())})}function au(n,e,t,s){if(!e)return ae;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return ae;const{delay:r=0,duration:o=300,easing:l=ai,start:a=ar()+r,end:c=a+o,tick:u=ae,css:d}=t(n,{from:e,to:i},s);let f=!0,m=!1,g;function v(){d&&(g=Ws(n,0,1,o,r,l,d)),r||(m=!0)}function w(){d&&hr(n,g),f=!1}return ur(T=>{if(!m&&T>=a&&(m=!0),m&&T>=c&&(u(1,0),w()),!f)return!1;if(m){const k=T-a,D=0+1*l(k/o);u(D,1-D)}return!0}),v(),u(0,1),w}function cu(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,uu(n,i)}}function uu(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let ss;function Jn(n){ss=n}function Xl(){if(!ss)throw new Error("Function called outside component initialization");return ss}function hu(n){Xl().$$.on_mount.push(n)}function Zl(){const n=Xl();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=Ql(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const wn=[],$e=[];let In=[];const qi=[],fu=Promise.resolve();let Wi=!1;function du(){Wi||(Wi=!0,fu.then(ea))}function Xe(n){In.push(n)}function Tt(n){qi.push(n)}const Ii=new Set;let vn=0;function ea(){if(vn!==0)return;const n=ss;do{try{for(;vn<wn.length;){const e=wn[vn];vn++,Jn(e),_u(e.$$)}}catch(e){throw wn.length=0,vn=0,e}for(Jn(null),wn.length=0,vn=0;$e.length;)$e.pop()();for(let e=0;e<In.length;e+=1){const t=In[e];Ii.has(t)||(Ii.add(t),t())}In.length=0}while(wn.length);for(;qi.length;)qi.pop()();Wi=!1,Ii.clear(),Jn(n)}function _u(n){if(n.fragment!==null){n.update(),nt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Xe)}}function pu(n){const e=[],t=[];In.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),In=e}let zn;function ta(){return zn||(zn=Promise.resolve(),zn.then(()=>{zn=null})),zn}function Xn(n,e,t){n.dispatchEvent(Ql(`${e?"intro":"outro"}${t}`))}const Ps=new Set;let Lt;function St(){Lt={r:0,c:[],p:Lt}}function kt(){Lt.r||nt(Lt.c),Lt=Lt.p}function K(n,e){n&&n.i&&(Ps.delete(n),n.i(e))}function le(n,e,t,s){if(n&&n.o){if(Ps.has(n))return;Ps.add(n),Lt.c.push(()=>{Ps.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const na={duration:0};function mu(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=Lt;l.r+=1;let a;function c(){const{delay:u=0,duration:d=300,easing:f=ai,tick:m=ae,css:g}=i||na;g&&(o=Ws(n,1,0,d,u,f,g));const v=ar()+u,w=v+d;Xe(()=>Xn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),ur(T=>{if(r){if(T>=w)return m(0,1),Xn(n,!1,"end"),--l.r||nt(l.c),!1;if(T>=v){const k=f((T-v)/d);m(1-k,k)}}return r})}return pn(i)?ta().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&hr(n,o),r=!1)}}}function Oe(n,e,t,s){let r=e(n,t,{direction:"both"}),o=s?0:1,l=null,a=null,c=null,u;function d(){c&&hr(n,c)}function f(g,v){const w=g.b-o;return v*=Math.abs(w),{a:o,b:g.b,d:w,duration:v,start:g.start,end:g.start+v,group:g.group}}function m(g){const{delay:v=0,duration:w=300,easing:T=ai,tick:k=ae,css:D}=r||na,A={start:ar()+v,b:g};g||(A.group=Lt,Lt.r+=1),"inert"in n&&(g?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=A:(D&&(d(),c=Ws(n,o,g,w,v,T,D)),g&&k(0,1),l=f(A,w),Xe(()=>Xn(n,g,"start")),ur(R=>{if(a&&R>a.start&&(l=f(a,w),a=null,Xn(n,l.b,"start"),D&&(d(),c=Ws(n,o,l.b,l.duration,0,T,r.css))),l){if(R>=l.end)k(o=l.b,1-o),Xn(n,l.b,"end"),a||(l.b?d():--l.group.r||nt(l.group.c)),l=null;else if(R>=l.start){const q=R-l.start;o=l.a+l.d*T(q/l.duration),k(o,1-o)}}return!!(l||a)}))}return{run(g){pn(r)?ta().then(()=>{r=r({direction:g?"in":"out"}),m(g)}):m(g)},end(){d(),l=a=null}}}function ye(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function gu(n,e){le(n,1,1,()=>{e.delete(n.key)})}function vu(n,e){n.f(),gu(n,e)}function yu(n,e,t,s,i,r,o,l,a,c,u,d){let f=n.length,m=r.length,g=f;const v={};for(;g--;)v[n[g].key]=g;const w=[],T=new Map,k=new Map,D=[];for(g=m;g--;){const P=d(i,r,g),C=t(P);let N=o.get(C);N?s&&D.push(()=>N.p(P,e)):(N=c(C,P),N.c()),T.set(C,w[g]=N),C in v&&k.set(C,Math.abs(g-v[C]))}const A=new Set,R=new Set;function q(P){K(P,1),P.m(l,u),o.set(P.key,P),u=P.first,m--}for(;f&&m;){const P=w[m-1],C=n[f-1],N=P.key,U=C.key;P===C?(u=P.first,f--,m--):T.has(U)?!o.has(N)||A.has(N)?q(P):R.has(U)?f--:k.get(N)>k.get(U)?(R.add(N),q(P)):(A.add(U),f--):(a(C,o),f--)}for(;f--;){const P=n[f];T.has(P.key)||a(P,o)}for(;m;)q(w[m-1]);return nt(D),w}function Nt(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function He(n){n&&n.c()}function Be(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),Xe(()=>{const r=n.$$.on_mount.map(Ul).filter(pn);n.$$.on_destroy?n.$$.on_destroy.push(...r):nt(r),n.$$.on_mount=[]}),i.forEach(Xe)}function Ge(n,e){const t=n.$$;t.fragment!==null&&(pu(t.after_update),nt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function bu(n,e){n.$$.dirty[0]===-1&&(wn.push(n),du(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ht(n,e,t,s,i,r,o=null,l=[-1]){const a=ss;Jn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:ae,not_equal:i,bound:Vr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Vr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,f,...m)=>{const g=m.length?m[0]:f;return c.ctx&&i(c.ctx[d],c.ctx[d]=g)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](g),u&&bu(n,d)),f}):[],c.update(),u=!0,nt(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const d=iu(e.target);c.fragment&&c.fragment.l(d),d.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&K(n.$$.fragment),Be(n,e.target,e.anchor),ea()}Jn(a)}class ft{constructor(){zt(this,"$$");zt(this,"$$set")}$destroy(){Ge(this,1),this.$destroy=ae}$on(e,t){if(!pn(t))return ae;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Zc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const wu="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(wu);function sa(n){const e=n-1;return e*e*e+1}function Bt(n,{delay:e=0,duration:t=400,easing:s=ai}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}function rt(n,{delay:e=0,duration:t=400,easing:s=sa,start:i=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-i,u=l*(1-r);return{delay:e,duration:t,easing:s,css:(d,f)=>`
			transform: ${a} scale(${1-c*f});
			opacity: ${l-u*f}
		`}}const yn=[];function gt(n,e=ae){let t;const s=new Set;function i(l){if(st(n,l)&&(n=l,t)){const a=!yn.length;for(const c of s)c[1](),yn.push(c,n);if(a){for(let c=0;c<yn.length;c+=2)yn[c][0](yn[c+1]);yn.length=0}}}function r(l){i(l(n))}function o(l,a=ae){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||ae),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}var Yr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(n,e){if(!n)throw Fn(e)},Fn=function(n){return new Error("Firebase Database ("+ia.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Cu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},fr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,d=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(f=64)),s.push(t[u],t[d],t[f],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ra(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||d==null)throw new Eu;const f=r<<2|l>>4;if(s.push(f),c!==64){const m=l<<4&240|c>>2;if(s.push(m),d!==64){const g=c<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Eu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oa=function(n){const e=ra(n);return fr.encodeByteArray(e,!0)},js=function(n){return oa(n).replace(/\./g,"")},ji=function(n){try{return fr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n){return la(void 0,n)}function la(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Su(t)||(n[t]=la(n[t],e[t]));return n}function Su(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=()=>ku().__FIREBASE_DEFAULTS__,Nu=()=>{if(typeof process>"u"||typeof Yr>"u")return;const n=Yr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ru=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ji(n[1]);return e&&JSON.parse(e)},aa=()=>{try{return Tu()||Nu()||Ru()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Du=n=>{var e,t;return(t=(e=aa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Au=n=>{const e=Du(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ca=()=>{var n;return(n=aa())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[js(JSON.stringify(t)),js(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ua(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ou())}function Mu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ha(){return ia.NODE_ADMIN===!0}function Lu(){try{return typeof indexedDB=="object"}catch{return!1}}function Fu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="FirebaseError";class vs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=qu,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Wu(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vs(i,l,s)}}function Wu(n,e){return n.replace(ju,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ju=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(n){return JSON.parse(n)}function Ze(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=is(ji(r[0])||""),t=is(ji(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},xu=function(n){const e=da(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Bu=function(n){const e=da(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function An(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function $r(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function xi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Kr(r)&&Kr(o)){if(!xi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Kr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):d<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[d]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function dr(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,L(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hi=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n){return n&&n._delegate?n._delegate:n}class rs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ui;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yu(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vu(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vu(n){return n===en?void 0:n}function Yu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Me||(Me={}));const Ku={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},Qu=Me.INFO,Ju={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},Xu=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ju[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _a{constructor(e){this.name=e,this._logLevel=Qu,this._logHandler=Xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ku[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const Zu=(n,e)=>e.some(t=>n instanceof t);let Qr,Jr;function eh(){return Qr||(Qr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function th(){return Jr||(Jr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pa=new WeakMap,Bi=new WeakMap,ma=new WeakMap,Si=new WeakMap,_r=new WeakMap;function nh(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Vt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pa.set(t,n)}).catch(()=>{}),_r.set(e,n),e}function sh(n){if(Bi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Bi.set(n,e)}let Gi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ma.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ih(n){Gi=n(Gi)}function rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ki(this),e,...t);return ma.set(s,e.sort?e.sort():[e]),Vt(s)}:th().includes(n)?function(...e){return n.apply(ki(this),e),Vt(pa.get(this))}:function(...e){return Vt(n.apply(ki(this),e))}}function oh(n){return typeof n=="function"?rh(n):(n instanceof IDBTransaction&&sh(n),Zu(n,eh())?new Proxy(n,Gi):n)}function Vt(n){if(n instanceof IDBRequest)return nh(n);if(Si.has(n))return Si.get(n);const e=oh(n);return e!==n&&(Si.set(n,e),_r.set(e,n)),e}const ki=n=>_r.get(n);function lh(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Vt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Vt(o.result),a.oldVersion,a.newVersion,Vt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const ah=["get","getKey","getAll","getAllKeys","count"],ch=["put","add","delete","clear"],Ti=new Map;function Xr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ti.get(e))return Ti.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=ch.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ah.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return Ti.set(e,r),r}ih(n=>({...n,get:(e,t,s)=>Xr(e,t)||n.get(e,t,s),has:(e,t)=>!!Xr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function hh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hi="@firebase/app",Zr="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new _a("@firebase/app"),fh="@firebase/app-compat",dh="@firebase/analytics-compat",_h="@firebase/analytics",ph="@firebase/app-check-compat",mh="@firebase/app-check",gh="@firebase/auth",vh="@firebase/auth-compat",yh="@firebase/database",bh="@firebase/database-compat",wh="@firebase/functions",Ch="@firebase/functions-compat",Eh="@firebase/installations",Ih="@firebase/installations-compat",Sh="@firebase/messaging",kh="@firebase/messaging-compat",Th="@firebase/performance",Nh="@firebase/performance-compat",Rh="@firebase/remote-config",Dh="@firebase/remote-config-compat",Ah="@firebase/storage",Ph="@firebase/storage-compat",Oh="@firebase/firestore",Mh="@firebase/firestore-compat",Lh="firebase",Fh="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="[DEFAULT]",qh={[Hi]:"fire-core",[fh]:"fire-core-compat",[_h]:"fire-analytics",[dh]:"fire-analytics-compat",[mh]:"fire-app-check",[ph]:"fire-app-check-compat",[gh]:"fire-auth",[vh]:"fire-auth-compat",[yh]:"fire-rtdb",[bh]:"fire-rtdb-compat",[wh]:"fire-fn",[Ch]:"fire-fn-compat",[Eh]:"fire-iid",[Ih]:"fire-iid-compat",[Sh]:"fire-fcm",[kh]:"fire-fcm-compat",[Th]:"fire-perf",[Nh]:"fire-perf-compat",[Rh]:"fire-rc",[Dh]:"fire-rc-compat",[Ah]:"fire-gcs",[Ph]:"fire-gcs-compat",[Oh]:"fire-fst",[Mh]:"fire-fst-compat","fire-js":"fire-js",[Lh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map,zi=new Map;function Wh(n,e){try{n.container.addComponent(e)}catch(t){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gs(n){const e=n.name;if(zi.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;zi.set(e,n);for(const t of Bs.values())Wh(t,n);return!0}function jh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new fa("app","Firebase",xh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=Fh;function pr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ui,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(t||(t=ca()),!t)throw Yt.create("no-options");const r=Bs.get(i);if(r){if(xi(t,r.options)&&xi(s,r.config))return r;throw Yt.create("duplicate-app",{appName:i})}const o=new $u(i);for(const a of zi.values())o.addComponent(a);const l=new Bh(t,s,o);return Bs.set(i,l),l}function Hh(n=Ui){const e=Bs.get(n);if(!e&&n===Ui&&ca())return pr();if(!e)throw Yt.create("no-app",{appName:n});return e}function Sn(n,e,t){var s;let i=(s=qh[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(l.join(" "));return}Gs(new rs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="firebase-heartbeat-database",zh=1,os="firebase-heartbeat-store";let Ni=null;function ga(){return Ni||(Ni=lh(Uh,zh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(os)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),Ni}async function Vh(n){try{const t=(await ga()).transaction(os),s=await t.objectStore(os).get(va(n));return await t.done,s}catch(e){if(e instanceof vs)cn.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(t.message)}}}async function eo(n,e){try{const s=(await ga()).transaction(os,"readwrite");await s.objectStore(os).put(e,va(n)),await s.done}catch(t){if(t instanceof vs)cn.warn(t.message);else{const s=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});cn.warn(s.message)}}}function va(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=1024,$h=30*24*60*60*1e3;class Kh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=to();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=$h}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=to(),{heartbeatsToSend:s,unsentEntries:i}=Qh(this._heartbeatsCache.heartbeats),r=js(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function to(){return new Date().toISOString().substring(0,10)}function Qh(n,e=Yh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),no(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),no(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Jh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lu()?Fu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return eo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return eo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function no(n){return js(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){Gs(new rs("platform-logger",e=>new uh(e),"PRIVATE")),Gs(new rs("heartbeat",e=>new Kh(e),"PRIVATE")),Sn(Hi,Zr,n),Sn(Hi,Zr,"esm2017"),Sn("fire-js","")}Xh("");var Zh="firebase",ef="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(Zh,ef,"app");var so={};const io="@firebase/database",ro="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya="";function tf(n){ya=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:is(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nf(e)}}catch{}return new sf},sn=ba("localStorage"),Vi=ba("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new _a("@firebase/database"),rf=function(){let n=1;return function(){return n++}}(),wa=function(n){const e=Uu(n),t=new Hu;t.update(e);const s=t.digest();return fr.encodeByteArray(s)},ys=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ys.apply(null,s):typeof s=="object"?e+=Ze(s):e+=s,e+=" "}return e};let an=null,oo=!0;const of=function(n,e){L(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(kn.logLevel=Me.VERBOSE,an=kn.log.bind(kn),e&&Vi.set("logging_enabled",!0)):typeof n=="function"?an=n:(an=null,Vi.remove("logging_enabled"))},pt=function(...n){if(oo===!0&&(oo=!1,an===null&&Vi.get("logging_enabled")===!0&&of(!0)),an){const e=ys.apply(null,n);an(e)}},bs=function(n){return function(...e){pt(n,...e)}},Yi=function(...n){const e="FIREBASE INTERNAL ERROR: "+ys(...n);kn.error(e)},Gt=function(...n){const e=`FIREBASE FATAL ERROR: ${ys(...n)}`;throw kn.error(e),new Error(e)},Ct=function(...n){const e="FIREBASE WARNING: "+ys(...n);kn.warn(e)},lf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ca=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},af=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Pn="[MIN_NAME]",un="[MAX_NAME]",qn=function(n,e){if(n===e)return 0;if(n===Pn||e===un)return-1;if(e===Pn||n===un)return 1;{const t=lo(n),s=lo(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},cf=function(n,e){return n===e?0:n<e?-1:1},Vn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ze(e))},mr=function(n){if(typeof n!="object"||n===null)return Ze(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Ze(e[s]),t+=":",t+=mr(n[e[s]]);return t+="}",t},Ea=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function It(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ia=function(n){L(!Ca(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},uf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ff(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const df=new RegExp("^-?(0*)\\d{1,10}$"),_f=-2147483648,pf=2147483647,lo=function(n){if(df.test(n)){const e=Number(n);if(e>=_f&&e<=pf)return e}return null},Wn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ct("Exception was thrown by user callback.",t),e},Math.floor(0))}},mf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ct(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ct(e)}}class Tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="5",Sa="v",ka="s",Ta="r",Na="f",Ra=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Da="ls",Aa="p",$i="ac",Pa="websocket",Oa="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function yf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function La(n,e,t){L(typeof e=="string","typeof type must == string"),L(typeof t=="object","typeof params must == object");let s;if(e===Pa)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Oa)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yf(n)&&(t.ns=n.namespace);const i=[];return It(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.counters_={}}incrementCounter(e,t=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Iu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri={},Di={};function vr(n){const e=n.toString();return Ri[e]||(Ri[e]=new bf),Ri[e]}function wf(n,e){const t=n.toString();return Di[t]||(Di[t]=e()),Di[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Wn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="start",Ef="close",If="pLPCommand",Sf="pRTLPCB",Fa="id",qa="pw",Wa="ser",kf="cb",Tf="seg",Nf="ts",Rf="d",Df="dframe",ja=1870,xa=30,Af=ja-xa,Pf=25e3,Of=3e4;class Cn{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=vr(t),this.urlFn=a=>(this.appCheckToken&&(a[$i]=this.appCheckToken),La(t,Oa,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Cf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Of)),af(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ao)this.id=l,this.password=a;else if(o===Ef)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ao]="t",s[Wa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[kf]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Sa]=gr,this.transportSessionId&&(s[ka]=this.transportSessionId),this.lastSessionId&&(s[Da]=this.lastSessionId),this.applicationId&&(s[Aa]=this.applicationId),this.appCheckToken&&(s[$i]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ra.test(location.hostname)&&(s[Ta]=Na);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cn.forceAllow_=!0}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){return Cn.forceAllow_?!0:!Cn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uf()&&!hf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ze(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=oa(t),i=Ea(s,Af);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Df]="t",s[Fa]=e,s[qa]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ze(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class yr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rf(),window[If+this.uniqueCallbackIdentifier]=e,window[Sf+this.uniqueCallbackIdentifier]=t,this.myIFrame=yr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){pt("frame writing exception"),l.stack&&pt(l.stack),pt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fa]=this.myID,e[qa]=this.myPW,e[Wa]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xa+s.length<=ja;){const o=this.pendingSegs.shift();s=s+"&"+Tf+i+"="+o.seg+"&"+Nf+i+"="+o.ts+"&"+Rf+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Pf)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=16384,Lf=45e3;let Hs=null;typeof MozWebSocket<"u"?Hs=MozWebSocket:typeof WebSocket<"u"&&(Hs=WebSocket);class Rt{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=vr(t),this.connURL=Rt.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Sa]=gr,typeof location<"u"&&location.hostname&&Ra.test(location.hostname)&&(o[Ta]=Na),t&&(o[ka]=t),s&&(o[Da]=s),i&&(o[$i]=i),r&&(o[Aa]=r),La(e,Pa,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sn.set("previous_websocket_failure",!0);try{let s;ha(),this.mySock=new Hs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Hs!==null&&!Rt.forceDisallow_}static previouslyFailed(){return sn.isInMemoryStorage||sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=is(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Ze(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ea(t,Mf);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lf))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rt.responsesRequiredToBeHealthy=2;Rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cn,Rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Rt&&Rt.isAvailable();let s=t&&!Rt.previouslyFailed();if(e.webSocketOnly&&(t||Ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Rt];else{const i=this.transports_=[];for(const r of ls.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ls.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=6e4,qf=5e3,Wf=10*1024,jf=100*1024,Ai="t",co="d",xf="s",uo="r",Bf="e",ho="o",fo="a",_o="n",po="p",Gf="h";class Hf{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new ls(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ai in e){const t=e[Ai];t===fo?this.upgradeIfSecondaryHealthy_():t===uo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ho&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Vn("t",e),s=Vn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:po,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_o,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Vn("t",e),s=Vn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Vn(Ai,e);if(co in e){const s=e[co];if(t===Gf){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===_o){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===xf?this.onConnectionShutdown_(s):t===uo?this.onReset_(s):t===Bf?Yi("Server Error: "+s):t===ho?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),gr!==s&&Ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Zn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ff))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:po,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){L(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Ga{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ua()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Us}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=32,go=768;class Pe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function we(){return new Pe("")}function ge(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Qt(n){return n.pieces_.length-n.pieceNum_}function Le(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Pe(n.pieces_,e)}function Ha(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Uf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ua(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function za(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Pe(e,0)}function et(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Pe(t,0)}function me(n){return n.pieceNum_>=n.pieces_.length}function mt(n,e){const t=ge(n),s=ge(e);if(t===null)return e;if(t===s)return mt(Le(n),Le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Va(n,e){if(Qt(n)!==Qt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function At(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Qt(n)>Qt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class zf{constructor(e,t){this.errorPrefix_=t,this.parts_=Ua(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=hi(this.parts_[s]);Ya(this)}}function Vf(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=hi(e),Ya(n)}function Yf(n){const e=n.parts_.pop();n.byteLength_-=hi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ya(n){if(n.byteLength_>go)throw new Error(n.errorPrefix_+"has a key path longer than "+go+" bytes ("+n.byteLength_+").");if(n.parts_.length>mo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mo+") or object contains a cycle "+tn(n))}function tn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Ga{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new br}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=1e3,$f=60*5*1e3,vo=30*1e3,Kf=1.3,Qf=3e4,Jf="server_kill",yo=3;class xt extends Ba{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yn,this.maxReconnectDelay_=$f,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ha())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");br.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Us.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Ze(r)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ui,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;xt.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ht(e,"w")){const s=An(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=xu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Yi("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Qf&&(this.reconnectDelay_=Yn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(d){L(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new Hf(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{Ct(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jf)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ct(d),a())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$r(this.interruptReasons_)&&(this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>mr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){pt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=yo&&(this.reconnectDelay_=vo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=yo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ya.replace(/\./g,"-")]=1,ua()?e["framework.cordova"]=1:Mu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Us.getInstance().currentlyOnline();return $r(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new pe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new pe(Pn,e),i=new pe(Pn,t);return this.compare(s,i)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs;class $a extends fi{static get __EMPTY_NODE(){return Rs}static set __EMPTY_NODE(e){Rs=e}compare(e,t){return qn(e.name,t.name)}isDefinedOn(e){throw Fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return pe.MIN}maxPost(){return new pe(un,Rs)}makePost(e,t){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,Rs)}toString(){return".key"}}const Nn=new $a;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??lt.RED,this.left=i??bt.EMPTY_NODE,this.right=r??bt.EMPTY_NODE}copy(e,t,s,i,r){return new lt(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return bt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class Xf{copy(e,t,s,i,r){return this}insert(e,t,s){return new lt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,t=bt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new bt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ds(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ds(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new Xf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n,e){return qn(n.name,e.name)}function wr(n,e){return qn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki;function ed(n){Ki=n}const Ka=function(n){return typeof n=="number"?"number:"+Ia(n):"string:"+n},Qa=function(n){if(n.isLeafNode()){const e=n.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else L(n===Ki||n.isEmpty(),"priority of unexpected type.");L(n===Ki||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo;class ot{constructor(e,t=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qa(this.priorityNode_)}static set __childrenNodeConstructor(e){bo=e}static get __childrenNodeConstructor(){return bo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:ge(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ge(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||Qt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(Le(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ka(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ia(this.value_):e+=this.value_,this.lazyHash_=wa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ot.VALUE_TYPE_ORDER.indexOf(t),r=ot.VALUE_TYPE_ORDER.indexOf(s);return L(i>=0,"Unknown leaf type: "+t),L(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja,Xa;function td(n){Ja=n}function nd(n){Xa=n}class sd extends fi{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?qn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(un,new ot("[PRIORITY-POST]",Xa))}makePost(e,t){const s=Ja(e);return new pe(t,new ot("[PRIORITY-POST]",s))}toString(){return".priority"}}const ze=new sd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=Math.log(2);class rd{constructor(e){const t=r=>parseInt(Math.log(r)/id,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zs=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let d,f;if(u===0)return null;if(u===1)return d=n[a],f=t?t(d):d,new lt(f,d.node,lt.BLACK,null,null);{const m=parseInt(u/2,10)+a,g=i(a,m),v=i(m+1,c);return d=n[m],f=t?t(d):d,new lt(f,d.node,lt.BLACK,g,v)}},r=function(a){let c=null,u=null,d=n.length;const f=function(g,v){const w=d-g,T=d;d-=g;const k=i(w+1,T),D=n[w],A=t?t(D):D;m(new lt(A,D.node,v,null,k))},m=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(g+1));v?f(w,lt.BLACK):(f(w,lt.BLACK),f(w,lt.RED))}return u},o=new rd(n.length),l=r(o);return new bt(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;const bn={};class jt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return L(bn&&ze,"ChildrenNode.ts has not been loaded"),Pi=Pi||new jt({".priority":bn},{".priority":ze}),Pi}get(e){const t=An(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof bt?t:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,t){L(e!==Nn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(pe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=zs(s,e.getCompare()):l=bn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new jt(u,c)}addToIndexes(e,t){const s=xs(this.indexes_,(i,r)=>{const o=An(this.indexSet_,r);if(L(o,"Missing index implementation for "+r),i===bn)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(pe.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),zs(l,o.getCompare())}else return bn;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new pe(e.name,l))),a.insert(e,e.node)}});return new jt(s,this.indexSet_)}removeFromIndexes(e,t){const s=xs(this.indexes_,i=>{if(i===bn)return i;{const r=t.get(e.name);return r?i.remove(new pe(e.name,r)):i}});return new jt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n;class Z{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Qa(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $n||($n=new Z(new bt(wr),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$n}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?$n:t}}getChild(e){const t=ge(e);return t===null?this:this.getImmediateChild(t).getChild(Le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(L(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new pe(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$n:this.priorityNode_;return new Z(i,o,r)}}updateChild(e,t){const s=ge(e);if(s===null)return t;{L(ge(e)!==".priority"||Qt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Le(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(ze,(o,l)=>{t[o]=l.val(e),s++,r&&Z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ka(this.getPriority().val())+":"),this.forEachChild(ze,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":wa(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new pe(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new pe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new pe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ws?-1:0}withIndex(e){if(e===Nn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Nn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(ze),i=t.getIterator(ze);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nn?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class od extends Z{constructor(){super(new bt(wr),Z.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const ws=new od;Object.defineProperties(pe,{MIN:{value:new pe(Pn,Z.EMPTY_NODE)},MAX:{value:new pe(un,ws)}});$a.__EMPTY_NODE=Z.EMPTY_NODE;ot.__childrenNodeConstructor=Z;ed(ws);nd(ws);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=!0;function ct(n,e=null){if(n===null)return Z.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ot(t,ct(e))}if(!(n instanceof Array)&&ld){const t=[];let s=!1;if(It(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=ct(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new pe(o,a)))}}),t.length===0)return Z.EMPTY_NODE;const r=zs(t,Zf,o=>o.name,wr);if(s){const o=zs(t,ze.getCompare());return new Z(r,ct(e),new jt({".priority":o},{".priority":ze}))}else return new Z(r,ct(e),jt.Default)}else{let t=Z.EMPTY_NODE;return It(n,(s,i)=>{if(Ht(n,s)&&s.substring(0,1)!=="."){const r=ct(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ct(e))}}td(ct);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends fi{constructor(e){super(),this.indexPath_=e,L(!me(e)&&ge(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?qn(e.name,t.name):r}makePost(e,t){const s=ct(e),i=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(t,i)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,ws);return new pe(un,e)}toString(){return Ua(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd extends fi{compare(e,t){const s=e.node.compareTo(t.node);return s===0?qn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,t){const s=ct(e);return new pe(t,s)}toString(){return".value"}}const ud=new cd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n){return{type:"value",snapshotNode:n}}function On(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function as(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function cs(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function hd(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(as(t,l)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(On(t,s)):o.trackChildChange(cs(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ze,(i,r)=>{t.hasChild(i)||s.trackChildChange(as(i,r))}),t.isLeafNode()||t.forEachChild(ze,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(cs(i,r,o))}else s.trackChildChange(On(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.indexedFilter_=new Cr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=us.getStartPost_(e),this.endPost_=us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new pe(t,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Z.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Z.EMPTY_NODE);const r=this;return t.forEachChild(ze,(o,l)=>{r.matches(new pe(o,l))||(i=i.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new pe(t,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Z.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Z.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const l=e;L(l.numChildren()===this.limit_,"");const a=new pe(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const d=l.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,a);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(cs(t,s,d)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(as(t,d));const v=l.updateImmediateChild(t,Z.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(On(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(as(c.name,c.node)),r.trackChildChange(On(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,Z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pn}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new Er;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dd(n){return n.loadsAllData()?new Cr(n.getIndex()):n.hasLimit()?new fd(n):new us(n)}function wo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ze?t="$priority":n.index_===ud?t="$value":n.index_===Nn?t="$key":(L(n.index_ instanceof ad,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ze(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Ze(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Ze(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Ze(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Ze(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Co(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ze&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Ba{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vs.getListenId_(e,s),l={};this.listens_[o]=l;const a=wo(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),An(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=Vs.getListenId_(e,t);delete this.listens_[s]}get(e){const t=wo(e._queryParams),s=e._path.toString(),i=new ui;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gu(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=is(l.responseText)}catch{Ct("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ct("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(){return{value:null,children:new Map}}function ec(n,e,t){if(me(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ge(e);n.children.has(s)||n.children.set(s,Ys());const i=n.children.get(s);e=Le(e),ec(i,e,t)}}function Qi(n,e,t){n.value!==null?t(e,n.value):pd(n,(s,i)=>{const r=new Pe(e.toString()+"/"+s);Qi(i,r,t)})}function pd(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&It(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=10*1e3,gd=30*1e3,vd=5*60*1e3;class yd{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new md(e);const s=Eo+(gd-Eo)*Math.random();Zn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;It(e,(i,r)=>{r>0&&Ht(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Zn(this.reportStats_.bind(this),Math.floor(Math.random()*2*vd))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function tc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ir(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Pt.ACK_USER_WRITE,this.source=tc()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Pe(e));return new $s(we(),t,this.revert)}}else return L(ge(this.path)===e,"operationForChild called for unrelated child."),new $s(Le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.source=e,this.path=t,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new hs(this.source,we()):new hs(this.source,Le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Pt.OVERWRITE}operationForChild(e){return me(this.path)?new hn(this.source,we(),this.snap.getImmediateChild(e)):new hn(this.source,Le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Pt.MERGE}operationForChild(e){if(me(this.path)){const t=this.children.subtree(new Pe(e));return t.isEmpty()?null:t.value?new hn(this.source,we(),t.value):new fs(this.source,we(),t)}else return L(ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fs(this.source,Le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const t=ge(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wd(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(hd(o.childName,o.snapshotNode))}),Kn(n,i,"child_removed",e,s,t),Kn(n,i,"child_added",e,s,t),Kn(n,i,"child_moved",r,s,t),Kn(n,i,"child_changed",e,s,t),Kn(n,i,"value",e,s,t),i}function Kn(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>Ed(n,l,a)),o.forEach(l=>{const a=Cd(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function Cd(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Ed(n,e,t){if(e.childName==null||t.childName==null)throw Fn("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),i=new pe(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n,e){return{eventCache:n,serverCache:e}}function es(n,e,t,s){return di(new Jt(e,t,s),n.serverCache)}function nc(n,e,t,s){return di(n.eventCache,new Jt(e,t,s))}function Ks(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function fn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;const Id=()=>(Oi||(Oi=new bt(cf)),Oi);class qe{constructor(e,t=Id()){this.value=e,this.children=t}static fromObject(e){let t=new qe(null);return It(e,(s,i)=>{t=t.set(new Pe(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:we(),value:this.value};if(me(e))return null;{const s=ge(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Le(e),t);return r!=null?{path:et(new Pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const t=ge(e),s=this.children.get(t);return s!==null?s.subtree(Le(e)):new qe(null)}}set(e,t){if(me(e))return new qe(t,this.children);{const s=ge(e),r=(this.children.get(s)||new qe(null)).set(Le(e),t),o=this.children.insert(s,r);return new qe(this.value,o)}}remove(e){if(me(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const t=ge(e),s=this.children.get(t);if(s){const i=s.remove(Le(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new qe(null):new qe(this.value,r)}else return this}}get(e){if(me(e))return this.value;{const t=ge(e),s=this.children.get(t);return s?s.get(Le(e)):null}}setTree(e,t){if(me(e))return t;{const s=ge(e),r=(this.children.get(s)||new qe(null)).setTree(Le(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new qe(this.value,o)}}fold(e){return this.fold_(we(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(et(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,we(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(me(e))return null;{const r=ge(e),o=this.children.get(r);return o?o.findOnPath_(Le(e),et(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,we(),t)}foreachOnPath_(e,t,s){if(me(e))return this;{this.value&&s(t,this.value);const i=ge(e),r=this.children.get(i);return r?r.foreachOnPath_(Le(e),et(t,i),s):new qe(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(et(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new qe(null))}}function ts(n,e,t){if(me(e))return new Ot(new qe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=mt(i,e);return r=r.updateChild(o,t),new Ot(n.writeTree_.set(i,r))}else{const i=new qe(t),r=n.writeTree_.setTree(e,i);return new Ot(r)}}}function Io(n,e,t){let s=n;return It(t,(i,r)=>{s=ts(s,et(e,i),r)}),s}function So(n,e){if(me(e))return Ot.empty();{const t=n.writeTree_.setTree(e,new qe(null));return new Ot(t)}}function Ji(n,e){return gn(n,e)!=null}function gn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(mt(t.path,e)):null}function ko(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ze,(s,i)=>{e.push(new pe(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new pe(s,i.value))}),e}function $t(n,e){if(me(e))return n;{const t=gn(n,e);return t!=null?new Ot(new qe(t)):new Ot(n.writeTree_.subtree(e))}}function Xi(n){return n.writeTree_.isEmpty()}function Mn(n,e){return sc(we(),n.writeTree_,e)}function sc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(L(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=sc(et(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(et(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){return lc(e,n)}function Sd(n,e,t,s,i){L(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=ts(n.visibleWrites,e,t)),n.lastWriteId=s}function kd(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Td(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);L(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Nd(l,s.path)?i=!1:At(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Rd(n),!0;if(s.snap)n.visibleWrites=So(n.visibleWrites,s.path);else{const l=s.children;It(l,a=>{n.visibleWrites=So(n.visibleWrites,et(s.path,a))})}return!0}else return!1}function Nd(n,e){if(n.snap)return At(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&At(et(n.path,t),e))return!0;return!1}function Rd(n){n.visibleWrites=ic(n.allWrites,Dd,we()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Dd(n){return n.visible}function ic(n,e,t){let s=Ot.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)At(t,o)?(l=mt(t,o),s=ts(s,l,r.snap)):At(o,t)&&(l=mt(o,t),s=ts(s,we(),r.snap.getChild(l)));else if(r.children){if(At(t,o))l=mt(t,o),s=Io(s,l,r.children);else if(At(o,t))if(l=mt(o,t),me(l))s=Io(s,we(),r.children);else{const a=An(r.children,ge(l));if(a){const c=a.getChild(Le(l));s=ts(s,we(),c)}}}else throw Fn("WriteRecord should have .snap or .children")}}return s}function rc(n,e,t,s,i){if(!s&&!i){const r=gn(n.visibleWrites,e);if(r!=null)return r;{const o=$t(n.visibleWrites,e);if(Xi(o))return t;if(t==null&&!Ji(o,we()))return null;{const l=t||Z.EMPTY_NODE;return Mn(o,l)}}}else{const r=$t(n.visibleWrites,e);if(!i&&Xi(r))return t;if(!i&&t==null&&!Ji(r,we()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(At(c.path,e)||At(e,c.path))},l=ic(n.allWrites,o,e),a=t||Z.EMPTY_NODE;return Mn(l,a)}}}function Ad(n,e,t){let s=Z.EMPTY_NODE;const i=gn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ze,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=$t(n.visibleWrites,e);return t.forEachChild(ze,(o,l)=>{const a=Mn($t(r,new Pe(o)),l);s=s.updateImmediateChild(o,a)}),ko(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=$t(n.visibleWrites,e);return ko(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Pd(n,e,t,s,i){L(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=et(e,t);if(Ji(n.visibleWrites,r))return null;{const o=$t(n.visibleWrites,r);return Xi(o)?i.getChild(t):Mn(o,i.getChild(t))}}function Od(n,e,t,s){const i=et(e,t),r=gn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=$t(n.visibleWrites,i);return Mn(o,s.getNode().getImmediateChild(t))}else return null}function Md(n,e){return gn(n.visibleWrites,e)}function Ld(n,e,t,s,i,r,o){let l;const a=$t(n.visibleWrites,e),c=gn(a,we());if(c!=null)l=c;else if(t!=null)l=Mn(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],d=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=f.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=f.getNext();return u}else return[]}function Fd(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function Qs(n,e,t,s){return rc(n.writeTree,n.treePath,e,t,s)}function kr(n,e){return Ad(n.writeTree,n.treePath,e)}function To(n,e,t,s){return Pd(n.writeTree,n.treePath,e,t,s)}function Js(n,e){return Md(n.writeTree,et(n.treePath,e))}function qd(n,e,t,s,i,r){return Ld(n.writeTree,n.treePath,e,t,s,i,r)}function Tr(n,e,t){return Od(n.writeTree,n.treePath,e,t)}function oc(n,e){return lc(et(n.treePath,e),n.writeTree)}function lc(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;L(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,cs(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,as(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,On(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,cs(s,e.snapshotNode,i.oldSnap));else throw Fn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ac=new jd;class Nr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fn(this.viewCache_),r=qd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){return{filter:n}}function Bd(n,e){L(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Gd(n,e,t,s,i){const r=new Wd;let o,l;if(t.type===Pt.OVERWRITE){const c=t;c.source.fromUser?o=Zi(n,e,c.path,c.snap,s,i,r):(L(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!me(c.path),o=Xs(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===Pt.MERGE){const c=t;c.source.fromUser?o=Ud(n,e,c.path,c.children,s,i,r):(L(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=er(n,e,c.path,c.children,s,i,l,r))}else if(t.type===Pt.ACK_USER_WRITE){const c=t;c.revert?o=Yd(n,e,c.path,s,i,r):o=zd(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Pt.LISTEN_COMPLETE)o=Vd(n,e,t.path,s,r);else throw Fn("Unknown operation type: "+t.type);const a=r.getChanges();return Hd(e,o,a),{viewCache:o,changes:a}}function Hd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ks(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Za(Ks(e)))}}function cc(n,e,t,s,i,r){const o=e.eventCache;if(Js(s,t)!=null)return e;{let l,a;if(me(t))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=fn(e),u=c instanceof Z?c:Z.EMPTY_NODE,d=kr(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Qs(s,fn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ge(t);if(c===".priority"){L(Qt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const d=To(s,t,u,a);d!=null?l=n.filter.updatePriority(u,d):l=o.getNode()}else{const u=Le(t);let d;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=To(s,t,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Tr(s,c,e.serverCache);d!=null?l=n.filter.updateChild(o.getNode(),c,d,u,i,r):l=o.getNode()}}return es(e,l,o.isFullyInitialized()||me(t),n.filter.filtersNodes())}}function Xs(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(me(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),m,null)}else{const m=ge(t);if(!a.isCompleteForPath(t)&&Qt(t)>1)return e;const g=Le(t),w=a.getNode().getImmediateChild(m).updateChild(g,s);m===".priority"?c=u.updatePriority(a.getNode(),w):c=u.updateChild(a.getNode(),m,w,g,ac,null)}const d=nc(e,c,a.isFullyInitialized()||me(t),u.filtersNodes()),f=new Nr(i,d,r);return cc(n,d,t,i,f,l)}function Zi(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Nr(i,e,r);if(me(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=es(e,c,!0,n.filter.filtersNodes());else{const d=ge(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=es(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=Le(t),m=l.getNode().getImmediateChild(d);let g;if(me(f))g=s;else{const v=u.getCompleteChild(d);v!=null?Ha(f)===".priority"&&v.getChild(za(f)).isEmpty()?g=v:g=v.updateChild(f,s):g=Z.EMPTY_NODE}if(m.equals(g))a=e;else{const v=n.filter.updateChild(l.getNode(),d,g,f,u,o);a=es(e,v,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function No(n,e){return n.eventCache.isCompleteForChild(e)}function Ud(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=et(t,a);No(e,ge(u))&&(l=Zi(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=et(t,a);No(e,ge(u))||(l=Zi(n,l,u,c,i,r,o))}),l}function Ro(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function er(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;me(t)?c=s:c=new qe(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),g=Ro(n,m,f);a=Xs(n,a,new Pe(d),g,i,r,o,l)}}),c.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!m){const g=e.serverCache.getNode().getImmediateChild(d),v=Ro(n,g,f);a=Xs(n,a,new Pe(d),v,i,r,o,l)}}),a}function zd(n,e,t,s,i,r,o){if(Js(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(me(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Xs(n,e,t,a.getNode().getChild(t),i,r,l,o);if(me(t)){let c=new qe(null);return a.getNode().forEachChild(Nn,(u,d)=>{c=c.set(new Pe(u),d)}),er(n,e,t,c,i,r,l,o)}else return e}else{let c=new qe(null);return s.foreach((u,d)=>{const f=et(t,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),er(n,e,t,c,i,r,l,o)}}function Vd(n,e,t,s,i){const r=e.serverCache,o=nc(e,r.getNode(),r.isFullyInitialized()||me(t),r.isFiltered());return cc(n,o,t,s,ac,i)}function Yd(n,e,t,s,i,r){let o;if(Js(s,t)!=null)return e;{const l=new Nr(s,e,i),a=e.eventCache.getNode();let c;if(me(t)||ge(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Qs(s,fn(e));else{const d=e.serverCache.getNode();L(d instanceof Z,"serverChildren would be complete if leaf node"),u=kr(s,d)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=ge(t);let d=Tr(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=a.getImmediateChild(u)),d!=null?c=n.filter.updateChild(a,u,d,Le(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,Z.EMPTY_NODE,Le(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qs(s,fn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Js(s,we())!=null,es(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Cr(s.getIndex()),r=dd(s);this.processor_=xd(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Z.EMPTY_NODE,l.getNode(),null),u=new Jt(a,o.isFullyInitialized(),i.filtersNodes()),d=new Jt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=di(d,u),this.eventGenerator_=new bd(this.query_)}get query(){return this.query_}}function Kd(n){return n.viewCache_.serverCache.getNode()}function Qd(n){return Ks(n.viewCache_)}function Jd(n,e){const t=fn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!me(e)&&!t.getImmediateChild(ge(e)).isEmpty())?t.getChild(e):null}function Do(n){return n.eventRegistrations_.length===0}function Xd(n,e){n.eventRegistrations_.push(e)}function Ao(n,e,t){const s=[];if(t){L(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Po(n,e,t,s){e.type===Pt.MERGE&&e.source.queryId!==null&&(L(fn(n.viewCache_),"We should always have a full cache before handling merges"),L(Ks(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Gd(n.processor_,i,e,t,s);return Bd(n.processor_,r.viewCache),L(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,uc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Zd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ze,(r,o)=>{s.push(On(r,o))}),t.isFullyInitialized()&&s.push(Za(t.getNode())),uc(n,s,t.getNode(),e)}function uc(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return wd(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;class hc{constructor(){this.views=new Map}}function e_(n){L(!Zs,"__referenceConstructor has already been defined"),Zs=n}function t_(){return L(Zs,"Reference.ts has not been loaded"),Zs}function n_(n){return n.views.size===0}function Rr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return L(r!=null,"SyncTree gave us an op for an invalid query."),Po(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Po(o,e,t,s));return r}}function fc(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Qs(t,i?s:null),a=!1;l?a=!0:s instanceof Z?(l=kr(t,s),a=!1):(l=Z.EMPTY_NODE,a=!1);const c=di(new Jt(l,a,!1),new Jt(s,i,!1));return new $d(e,c)}return o}function s_(n,e,t,s,i,r){const o=fc(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Xd(o,t),Zd(o,t)}function i_(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Xt(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(Ao(c,t,s)),Do(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(Ao(a,t,s)),Do(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Xt(n)&&r.push(new(t_())(e._repo,e._path)),{removed:r,events:o}}function dc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Kt(n,e){let t=null;for(const s of n.views.values())t=t||Jd(s,e);return t}function _c(n,e){if(e._queryParams.loadsAllData())return pi(n);{const s=e._queryIdentifier;return n.views.get(s)}}function pc(n,e){return _c(n,e)!=null}function Xt(n){return pi(n)!=null}function pi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei;function r_(n){L(!ei,"__referenceConstructor has already been defined"),ei=n}function o_(){return L(ei,"Reference.ts has not been loaded"),ei}let l_=1;class Oo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=Fd(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mc(n,e,t,s,i){return Sd(n.pendingWriteTree_,e,t,s,i),i?Es(n,new hn(tc(),e,t)):[]}function rn(n,e,t=!1){const s=kd(n.pendingWriteTree_,e);if(Td(n.pendingWriteTree_,e)){let r=new qe(null);return s.snap!=null?r=r.set(we(),!0):It(s.children,o=>{r=r.set(new Pe(o),!0)}),Es(n,new $s(s.path,r,t))}else return[]}function Cs(n,e,t){return Es(n,new hn(Ir(),e,t))}function a_(n,e,t){const s=qe.fromObject(t);return Es(n,new fs(Ir(),e,s))}function c_(n,e){return Es(n,new hs(Ir(),e))}function u_(n,e,t){const s=Ar(n,t);if(s){const i=Pr(s),r=i.path,o=i.queryId,l=mt(r,e),a=new hs(Sr(o),l);return Or(n,r,a)}else return[]}function gc(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||pc(o,e))){const a=i_(o,e,t,s);n_(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(f,m)=>Xt(m));if(u&&!d){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const m=__(f);for(let g=0;g<m.length;++g){const v=m[g],w=v.query,T=wc(n,v);n.listenProvider_.startListening(ns(w),ds(n,w),T.hashFn,T.onComplete)}}}!d&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(ns(e),null):c.forEach(f=>{const m=n.queryToTagMap.get(mi(f));n.listenProvider_.stopListening(ns(f),m)}))}p_(n,c)}return l}function vc(n,e,t,s){const i=Ar(n,s);if(i!=null){const r=Pr(i),o=r.path,l=r.queryId,a=mt(o,e),c=new hn(Sr(l),a,t);return Or(n,o,c)}else return[]}function h_(n,e,t,s){const i=Ar(n,s);if(i){const r=Pr(i),o=r.path,l=r.queryId,a=mt(o,e),c=qe.fromObject(t),u=new fs(Sr(l),a,c);return Or(n,o,u)}else return[]}function f_(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,m)=>{const g=mt(f,i);r=r||Kt(m,g),o=o||Xt(m)});let l=n.syncPointTree_.get(i);l?(o=o||Xt(l),r=r||Kt(l,we())):(l=new hc,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=Z.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,g)=>{const v=Kt(g,we());v&&(r=r.updateImmediateChild(m,v))}));const c=pc(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=mi(e);L(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=m_();n.queryToTagMap.set(f,m),n.tagToQueryMap.set(m,f)}const u=_i(n.pendingWriteTree_,i);let d=s_(l,e,t,u,r,a);if(!c&&!o&&!s){const f=_c(l,e);d=d.concat(g_(n,e,f))}return d}function Dr(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=mt(o,e),c=Kt(l,a);if(c)return c});return rc(i,e,r,t,!0)}function d_(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=mt(c,t);s=s||Kt(u,d)});let i=n.syncPointTree_.get(t);i?s=s||Kt(i,we()):(i=new hc,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Jt(s,!0,!1):null,l=_i(n.pendingWriteTree_,e._path),a=fc(i,e,l,r?o.getNode():Z.EMPTY_NODE,r);return Qd(a)}function Es(n,e){return yc(e,n.syncPointTree_,null,_i(n.pendingWriteTree_,we()))}function yc(n,e,t,s){if(me(n.path))return bc(n,e,t,s);{const i=e.get(we());t==null&&i!=null&&(t=Kt(i,we()));let r=[];const o=ge(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=oc(s,o);r=r.concat(yc(l,a,c,u))}return i&&(r=r.concat(Rr(i,n,s,t))),r}}function bc(n,e,t,s){const i=e.get(we());t==null&&i!=null&&(t=Kt(i,we()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=oc(s,o),u=n.operationForChild(o);u&&(r=r.concat(bc(u,l,a,c)))}),i&&(r=r.concat(Rr(i,n,s,t))),r}function wc(n,e){const t=e.query,s=ds(n,t);return{hashFn:()=>(Kd(e)||Z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?u_(n,t._path,s):c_(n,t._path);{const r=ff(i,t);return gc(n,t,null,r)}}}}function ds(n,e){const t=mi(e);return n.queryToTagMap.get(t)}function mi(n){return n._path.toString()+"$"+n._queryIdentifier}function Ar(n,e){return n.tagToQueryMap.get(e)}function Pr(n){const e=n.indexOf("$");return L(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Pe(n.substr(0,e))}}function Or(n,e,t){const s=n.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const i=_i(n.pendingWriteTree_,e);return Rr(s,t,i,null)}function __(n){return n.fold((e,t,s)=>{if(t&&Xt(t))return[pi(t)];{let i=[];return t&&(i=dc(t)),It(s,(r,o)=>{i=i.concat(o)}),i}})}function ns(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(o_())(n._repo,n._path):n}function p_(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=mi(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function m_(){return l_++}function g_(n,e,t){const s=e._path,i=ds(n,e),r=wc(n,t),o=n.listenProvider_.startListening(ns(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)L(!Xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,d)=>{if(!me(c)&&u&&Xt(u))return[pi(u).query];{let f=[];return u&&(f=f.concat(dc(u).map(m=>m.query))),It(d,(m,g)=>{f=f.concat(g)}),f}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(ns(u),ds(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Mr(t)}node(){return this.node_}}class Lr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=et(this.path_,e);return new Lr(this.syncTree_,t)}node(){return Dr(this.syncTree_,this.path_)}}const v_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Mo=function(n,e,t){if(!n||typeof n!="object")return n;if(L(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return y_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return b_(n[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},y_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:L(!1,"Unexpected server value: "+n)}},b_=function(n,e,t){n.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},w_=function(n,e,t,s){return Fr(e,new Lr(t,n),s)},Cc=function(n,e,t){return Fr(n,new Mr(e),t)};function Fr(n,e,t){const s=n.getPriority().val(),i=Mo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Mo(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new ot(l,ct(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ot(i))),o.forEachChild(ze,(l,a)=>{const c=Fr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Wr(n,e){let t=e instanceof Pe?e:new Pe(e),s=n,i=ge(t);for(;i!==null;){const r=An(s.node.children,i)||{children:{},childCount:0};s=new qr(i,s,r),t=Le(t),i=ge(t)}return s}function jn(n){return n.node.value}function Ec(n,e){n.node.value=e,tr(n)}function Ic(n){return n.node.childCount>0}function C_(n){return jn(n)===void 0&&!Ic(n)}function gi(n,e){It(n.node.children,(t,s)=>{e(new qr(t,n,s))})}function Sc(n,e,t,s){t&&!s&&e(n),gi(n,i=>{Sc(i,e,!0,s)}),t&&s&&e(n)}function E_(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Is(n){return new Pe(n.parent===null?n.name:Is(n.parent)+"/"+n.name)}function tr(n){n.parent!==null&&I_(n.parent,n.name,n)}function I_(n,e,t){const s=C_(t),i=Ht(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,tr(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,tr(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=/[\[\].#$\/\u0000-\u001F\u007F]/,k_=/[\[\].#$\u0000-\u001F\u007F]/,Mi=10*1024*1024,kc=function(n){return typeof n=="string"&&n.length!==0&&!S_.test(n)},Tc=function(n){return typeof n=="string"&&n.length!==0&&!k_.test(n)},T_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Tc(n)},N_=function(n,e,t,s){s&&e===void 0||jr(dr(n,"value"),e,t)},jr=function(n,e,t){const s=t instanceof Pe?new zf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+tn(s));if(typeof e=="function")throw new Error(n+"contains a function "+tn(s)+" with contents = "+e.toString());if(Ca(e))throw new Error(n+"contains "+e.toString()+" "+tn(s));if(typeof e=="string"&&e.length>Mi/3&&hi(e)>Mi)throw new Error(n+"contains a string greater than "+Mi+" utf8 bytes "+tn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(It(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!kc(o)))throw new Error(n+" contains an invalid key ("+o+") "+tn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vf(s,o),jr(n,l,s),Yf(s)}),i&&r)throw new Error(n+' contains ".value" child '+tn(s)+" in addition to actual children.")}},Nc=function(n,e,t,s){if(!(s&&t===void 0)&&!Tc(t))throw new Error(dr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},R_=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Nc(n,e,t,s)},D_=function(n,e){if(ge(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},A_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!T_(t))throw new Error(dr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rc(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Va(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Wt(n,e,t){Rc(n,t),O_(n,s=>At(s,e)||At(e,s))}function O_(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(M_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function M_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();an&&pt("event: "+t.toString()),Wn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="repo_interrupt",F_=25;class q_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new P_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ys(),this.transactionQueueTree_=new qr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function W_(n,e,t){if(n.stats_=vr(n.repoInfo_),n.forceRestClient_||mf())n.server_=new Vs(n.repoInfo_,(s,i,r,o)=>{Lo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Fo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new xt(n.repoInfo_,e,(s,i,r,o)=>{Lo(n,s,i,r,o)},s=>{Fo(n,s)},s=>{x_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=wf(n.repoInfo_,()=>new yd(n.stats_,n.server_)),n.infoData_=new _d,n.infoSyncTree_=new Oo({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=Cs(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Br(n,"connected",!1),n.serverSyncTree_=new Oo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Wt(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function j_(n){const t=n.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function xr(n){return v_({timestamp:j_(n)})}function Lo(n,e,t,s,i){n.dataUpdateCount++;const r=new Pe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=xs(t,c=>ct(c));o=h_(n.serverSyncTree_,r,a,i)}else{const a=ct(t);o=vc(n.serverSyncTree_,r,a,i)}else if(s){const a=xs(t,c=>ct(c));o=a_(n.serverSyncTree_,r,a)}else{const a=ct(t);o=Cs(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=yi(n,r)),Wt(n.eventQueue_,l,o)}function Fo(n,e){Br(n,"connected",e),e===!1&&H_(n)}function x_(n,e){It(e,(t,s)=>{Br(n,t,s)})}function Br(n,e,t){const s=new Pe("/.info/"+e),i=ct(t);n.infoData_.updateSnapshot(s,i);const r=Cs(n.infoSyncTree_,s,i);Wt(n.eventQueue_,s,r)}function Dc(n){return n.nextWriteId_++}function B_(n,e,t){const s=d_(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=ct(i).withIndex(e._queryParams.getIndex());f_(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Cs(n.serverSyncTree_,e._path,r);else{const l=ds(n.serverSyncTree_,e);o=vc(n.serverSyncTree_,e._path,r,l)}return Wt(n.eventQueue_,e._path,o),gc(n.serverSyncTree_,e,t,null,!0),r},i=>(vi(n,"get for query "+Ze(e)+" failed: "+i),Promise.reject(new Error(i))))}function G_(n,e,t,s,i){vi(n,"set",{path:e.toString(),value:t,priority:s});const r=xr(n),o=ct(t,s),l=Dr(n.serverSyncTree_,e),a=Cc(o,l,r),c=Dc(n),u=mc(n.serverSyncTree_,e,a,c,!0);Rc(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,m)=>{const g=f==="ok";g||Ct("set at "+e+" failed: "+f);const v=rn(n.serverSyncTree_,c,!g);Wt(n.eventQueue_,e,v),z_(n,i,f,m)});const d=Lc(n,e);yi(n,d),Wt(n.eventQueue_,d,[])}function H_(n){vi(n,"onDisconnectEvents");const e=xr(n),t=Ys();Qi(n.onDisconnect_,we(),(i,r)=>{const o=w_(i,r,n.serverSyncTree_,e);ec(t,i,o)});let s=[];Qi(t,we(),(i,r)=>{s=s.concat(Cs(n.serverSyncTree_,i,r));const o=Lc(n,i);yi(n,o)}),n.onDisconnect_=Ys(),Wt(n.eventQueue_,we(),s)}function U_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(L_)}function vi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),pt(t,...e)}function z_(n,e,t,s){e&&Wn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ac(n,e,t){return Dr(n.serverSyncTree_,e,t)||Z.EMPTY_NODE}function Gr(n,e=n.transactionQueueTree_){if(e||bi(n,e),jn(e)){const t=Oc(n,e);L(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&V_(n,Is(e),t)}else Ic(e)&&gi(e,t=>{Gr(n,t)})}function V_(n,e,t){const s=t.map(c=>c.currentWriteId),i=Ac(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];L(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=mt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{vi(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(rn(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&d.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();bi(n,Wr(n.transactionQueueTree_,e)),Gr(n,n.transactionQueueTree_),Wt(n.eventQueue_,e,u);for(let f=0;f<d.length;f++)Wn(d[f])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{Ct("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}yi(n,e)}},o)}function yi(n,e){const t=Pc(n,e),s=Is(t),i=Oc(n,t);return Y_(n,i,s),s}function Y_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=mt(t,a.path);let u=!1,d;if(L(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,d=a.abortReason,i=i.concat(rn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=F_)u=!0,d="maxretry",i=i.concat(rn(n.serverSyncTree_,a.currentWriteId,!0));else{const f=Ac(n,a.path,o);a.currentInputSnapshot=f;const m=e[l].update(f.val());if(m!==void 0){jr("transaction failed: Data returned ",m,a.path);let g=ct(m);typeof m=="object"&&m!=null&&Ht(m,".priority")||(g=g.updatePriority(f.getPriority()));const w=a.currentWriteId,T=xr(n),k=Cc(g,f,T);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=k,a.currentWriteId=Dc(n),o.splice(o.indexOf(w),1),i=i.concat(mc(n.serverSyncTree_,a.path,k,a.currentWriteId,a.applyLocally)),i=i.concat(rn(n.serverSyncTree_,w,!0))}else u=!0,d="nodata",i=i.concat(rn(n.serverSyncTree_,a.currentWriteId,!0))}Wt(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}bi(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Wn(s[l]);Gr(n,n.transactionQueueTree_)}function Pc(n,e){let t,s=n.transactionQueueTree_;for(t=ge(e);t!==null&&jn(s)===void 0;)s=Wr(s,t),e=Le(e),t=ge(e);return s}function Oc(n,e){const t=[];return Mc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Mc(n,e,t){const s=jn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);gi(e,i=>{Mc(n,i,t)})}function bi(n,e){const t=jn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ec(e,t.length>0?t:void 0)}gi(e,s=>{bi(n,s)})}function Lc(n,e){const t=Is(Pc(n,e)),s=Wr(n.transactionQueueTree_,e);return E_(s,i=>{Li(n,i)}),Li(n,s),Sc(s,i=>{Li(n,i)}),t}function Li(n,e){const t=jn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(L(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(L(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(rn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ec(e,void 0):t.length=r+1,Wt(n.eventQueue_,Is(e),i);for(let o=0;o<s.length;o++)Wn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function K_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ct(`Invalid query segment '${t}' in query '${n}'`)}return e}const qo=function(n,e){const t=Q_(n),s=t.namespace;t.domain==="firebase.com"&&Gt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||lf();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ma(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Pe(t.pathString)}},Q_=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(i=$_(n.substring(u,d)));const f=K_(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class X_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return me(this._path)?null:Ha(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=Co(this._queryParams),t=mr(e);return t==="{}"?"default":t}get _queryObject(){return Co(this._queryParams)}isEqual(e){if(e=mn(e),!(e instanceof Hr))return!1;const t=this._repo===e._repo,s=Va(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Uf(this._path)}}class Ut extends Hr{constructor(e,t){super(e,t,new Er,!1)}get parent(){const e=za(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Pe(e),s=ps(this.ref,e);return new _s(this._node.getChild(t),s,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new _s(i,ps(this.ref,s),ze)))}hasChild(e){const t=new Pe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function nr(n,e){return n=mn(n),n._checkNotDeleted("ref"),e!==void 0?ps(n._root,e):n._root}function ps(n,e){return n=mn(n),ge(n._path)===null?R_("child","path",e,!1):Nc("child","path",e,!1),new Ut(n._repo,et(n._path,e))}function Fc(n,e){n=mn(n),D_("set",n._path),N_("set",e,n._path,!1);const t=new ui;return G_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ep(n){n=mn(n);const e=new Z_(()=>{}),t=new Ur(e);return B_(n._repo,n,t).then(s=>new _s(s,new Ut(n._repo,n._path),n._queryParams.getIndex()))}class Ur{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new J_("value",this,new _s(e.snapshotNode,new Ut(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new X_(this,e,t):null}matches(e){return e instanceof Ur?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function tp(n,...e){let t=mn(n);for(const s of e)t=s._apply(t);return t}e_(Ut);r_(Ut);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="FIREBASE_DATABASE_EMULATOR_HOST",sr={};let sp=!1;function ip(n,e,t,s){n.repoInfo_=new Ma(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function rp(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=qo(r,i),l=o.repoInfo,a,c;typeof process<"u"&&so&&(c=so[np]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=qo(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Tn(Tn.OWNER):new vf(n.name,n.options,e);A_("Invalid Firebase Database URL",o),me(o.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=lp(l,n,u,new gf(n.name,t));return new ap(d,n)}function op(n,e){const t=sr[e];(!t||t[n.key]!==n)&&Gt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),U_(n),delete t[n.key]}function lp(n,e,t,s){let i=sr[e.name];i||(i={},sr[e.name]=i);let r=i[n.toURLString()];return r&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new q_(n,sp,t,s),i[n.toURLString()]=r,r}class ap{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(W_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(op(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gt("Cannot call "+e+" on a deleted database.")}}function qc(n=Hh(),e){const t=jh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Au("database");s&&cp(t,...s)}return t}function cp(n,e,t,s={}){n=mn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Gt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Tn(Tn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Pu(s.mockUserToken,n.app.options.projectId);r=new Tn(o)}ip(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){tf(Gh),Gs(new rs("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rp(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Sn(io,ro,n),Sn(io,ro,"esm2017")}xt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};up();var ms={},Wc={},wi={};Object.defineProperty(wi,"__esModule",{value:!0});wi.rotx=void 0;function hp(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}wi.rotx=hp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=wi;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(Wc);var jc={},Ci={};Object.defineProperty(Ci,"__esModule",{value:!0});Ci.base64=void 0;class fp{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const dp=new fp;Ci.base64=dp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=Ci;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(jc);var xc={},Ei={};Object.defineProperty(Ei,"__esModule",{value:!0});Ei.hex=void 0;class _p{encode(e){let t="",s="";for(let i=0;i<e.length;i++)t=e.charCodeAt(i).toString(16),s+=("000"+t).slice(-4);return s}decode(e){let t=e.match(/.{1,4}/g)||[],s="";for(let i=0;i<t.length;i++)s+=String.fromCharCode(parseInt(t[i],16));return s}}const pp=new _p;Ei.hex=pp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=Ei;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(xc);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=Wc;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=jc;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var s=xc;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return s.hex}})})(ms);let mp={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},Bc={},gp={ixqSmg:"IQhiAgLdRq06vESQ81ncFDq8YCUrePFURt-_wRQ",icbpLwuiqv:"nzwvbqmzltm-zwwua.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-zwwua-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm-zwwua",abwziomJcksmb:"nzwvbqmzltm-zwwua.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"932448152432",ixxQl:"1:932448152432:emj:77m89n4801k6703i3i7lj5",umiaczmumvbQl:"O-ZSNPG52H5N"},Gc={};for(let[n,e]of Object.entries(mp))Bc[ms.rotx(n,18)]=ms.rotx(e,18);for(let[n,e]of Object.entries(gp))Gc[ms.rotx(n,18)]=ms.rotx(e,18);let ti={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},ni={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},vp=["head","body","legs","feet","neck","back","ring","misc"],si={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged"},yp=qc(pr(Bc,"fd")),Hc=qc(pr(Gc,"fd-rooms")),Ln="https://fantastic-frontier-roblox.fandom.com/wiki/",Zt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Dt={currentGameData:{equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1}},settings:{muted:!1,hardMode:{equipment:!1,weapons:!1,endless_equipment:!1,endless_weapons:!1},mode:"equipment"},playerStats:{equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},hard_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},hard_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},endless_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0},endless_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0}}},bp={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function ir(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function Ft(n){n.target.closest("button").blur()}function on(n){return Object.keys(n).length}function qt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function zr(){if(ci(oi)){oi.set(!1);return}ir("?ls=true"),setTimeout(ir)}let Wo=localStorage.getItem("fd-currentGameData"),jo=localStorage.getItem("fd-settings"),xo=localStorage.getItem("fd-playerStats"),Bo=localStorage.getItem("fd-changelogSeen"),Go=localStorage.getItem("fd-helpSeen"),Ho=localStorage.getItem("fd-supportMe");localStorage.getItem("fd-userId");let Mt=gt(Wo?JSON.parse(Wo):Dt.currentGameData),yt=gt(),Et=gt(jo?{...JSON.parse(jo),mode:"equipment"}:Dt.settings),dn=gt(),Rn=gt(xo?JSON.parse(xo):Dt.playerStats),ii=gt({}),Uo=gt({}),_t=gt({component:null,complete:!1}),rr=gt(null),ri=gt(7),_n=gt(!1),gs=gt(Bo?JSON.parse(Bo):!1),or=gt(Go?JSON.parse(Go):!1),ln=gt(Ho?JSON.parse(Ho):{showAgain:!0,timesDenied:0,lastGamesPlayed:0}),oi=gt(!1),zo=[Mt,Et,Rn];for(let n=0;n<zo.length;n++){let e=ci(zo[n]),t=Dt[Object.keys(Dt)[n]];for(let s of Object.keys(t))e[s]===void 0&&(e[s]=t[s]);for(let s of Object.keys(e))t[s]===void 0&&delete e[s]}Et.subscribe(n=>{zr(),yt.set(ci(Mt)[n.mode]),dn.set(n.hardMode[n.mode]),localStorage.setItem("fd-settings",JSON.stringify(n))});Mt.subscribe(n=>{zr(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});yt.subscribe(n=>{Mt.update(e=>({...e,[ci(Et).mode]:n}))});Rn.subscribe(n=>{zr(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});dn.subscribe(n=>{Et.update(e=>({...e,hardMode:{...e.hardMode,[e.mode]:n}})),ri.set(n?6:7)});gs.subscribe(n=>localStorage.setItem("fd-changelogSeen",JSON.stringify(n)));or.subscribe(n=>localStorage.setItem("fd-helpSeen",JSON.stringify(n)));ln.subscribe(n=>localStorage.setItem("fd-supportMe",JSON.stringify(n)));function wp(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:d=m=>Math.sqrt(m)*120,easing:f=sa}=s;return{delay:u,duration:pn(d)?d(Math.sqrt(a*a+c*c)):d,easing:f,css:(m,g)=>{const v=g*a,w=g*c,T=m+g*e.width/t.width,k=m+g*e.height/t.height;return`transform: ${r} translate(${v}px, ${w}px) scale(${T}, ${k});`}}}function Vo(n,e,t){const s=n.slice();s[12]=e[t];const i=s[5][s[0].mode].find(function(...D){return n[11](s[12],...D)});s[13]=i;const r=s[2]?null:s[13].special==s[1].special;s[14]=r;const o=s[2]?null:Fi(s[1].types,s[13].types);s[15]=o;const l=s[2]?null:s[15]==s[1].types.length&&s[13].types.length==s[1].types.length;s[16]=l;const a=s[2]?s[13].slot==s[1].slot:null;s[17]=a;const c=s[2]?Fi(s[1].stats,s[13].stats):null;s[18]=c;const u=s[2]?s[18]==s[1].stats.length&&s[13].stats.length==s[1].stats.length:null;s[19]=u;const d=Math.ceil((s[13].cost.min+s[13].cost.max)/2);s[20]=d;const f=Math.ceil((s[1].cost.min+s[1].cost.max)/2);s[21]=f;const m=s[20]==s[21];s[22]=m;const g=Fi(s[1].colors,s[13].colors);s[23]=g;const v=s[23]==s[1].colors.length&&s[13].colors.length==s[1].colors.length;s[24]=v;const w=s[13].outline==s[1].outline;s[25]=w;const T=s[13].release==s[1].release;return s[26]=T,s}function Yo(n,e,t){const s=n.slice();return s[29]=e[t],s}function $o(n,e,t){const s=n.slice();return s[35]=e[t],s}function Ko(n,e,t){const s=n.slice();return s[32]=e[t],s}function Qo(n){let e=[],t=new Map,s,i,r=ye(n[4].chosenItems.toReversed());const o=l=>l[12];for(let l=0;l<r.length;l+=1){let a=Vo(n,r,l),c=o(a);t.set(c,e[l]=il(c,a))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=wt()},m(l,a){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(l,a);S(l,s,a),i=!0},p(l,a){if(a[0]&255){r=ye(l[4].chosenItems.toReversed()),St();for(let c=0;c<e.length;c+=1)e[c].r();e=yu(e,a,o,1,l,r,t,s.parentNode,vu,il,s,Vo);for(let c=0;c<e.length;c+=1)e[c].a();kt()}},i(l){if(!i){for(let a=0;a<r.length;a+=1)K(e[a]);i=!0}},o(l){for(let a=0;a<e.length;a+=1)le(e[a]);i=!1},d(l){l&&E(s);for(let a=0;a<e.length;a+=1)e[a].d(l)}}}function Cp(n){let e,t;function s(l,a){return l[13].types.length?Sp:Ip}let i=s(n),r=i(n),o=!n[6]&&n[15]&&!n[16]&&Xo(n);return{c(){r.c(),e=y(),o&&o.c(),t=wt()},m(l,a){r.m(l,a),S(l,e,a),o&&o.m(l,a),S(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[6]&&l[15]&&!l[16]?o?o.p(l,a):(o=Xo(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(E(e),E(t)),r.d(l),o&&o.d(l)}}}function Ep(n){let e,t;function s(l,a){return l[13].stats.length?Tp:kp}let i=s(n),r=i(n),o=!n[6]&&n[18]&&!n[19]&&el(n);return{c(){r.c(),e=y(),o&&o.c(),t=wt()},m(l,a){r.m(l,a),S(l,e,a),o&&o.m(l,a),S(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[6]&&l[18]&&!l[19]?o?o.p(l,a):(o=el(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(E(e),E(t)),r.d(l),o&&o.d(l)}}}function Ip(n){let e;return{c(){e=H("None")},m(t,s){S(t,e,s)},p:ae,d(t){t&&E(e)}}}function Sp(n){let e,t=ye(n[13].types),s=[];for(let i=0;i<t.length;i+=1)s[i]=Jo($o(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=wt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);S(i,e,r)},p(i,r){if(r[0]&49){t=ye(i[13].types);let o;for(o=0;o<t.length;o+=1){const l=$o(i,t,o);s[o]?s[o].p(l,r):(s[o]=Jo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&E(e),at(s,i)}}}function Jo(n){let e=si[n[35]]+(n[35]==n[13].types[n[13].types.length-1]?"":", "),t;return{c(){t=H(e)},m(s,i){S(s,t,i)},p(s,i){i[0]&49&&e!==(e=si[s[35]]+(s[35]==s[13].types[s[13].types.length-1]?"":", "))&&de(t,e)},d(s){s&&E(t)}}}function Xo(n){let e,t=n[15]+"",s;return{c(){e=p("span"),s=H(t),_(e,"class","bgInfo")},m(i,r){S(i,e,r),h(e,s)},p(i,r){r[0]&55&&t!==(t=i[15]+"")&&de(s,t)},d(i){i&&E(e)}}}function kp(n){let e;return{c(){e=H("None")},m(t,s){S(t,e,s)},p:ae,d(t){t&&E(e)}}}function Tp(n){let e,t=ye(n[13].stats),s=[];for(let i=0;i<t.length;i+=1)s[i]=Zo(Ko(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=wt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);S(i,e,r)},p(i,r){if(r[0]&49){t=ye(i[13].stats);let o;for(o=0;o<t.length;o+=1){const l=Ko(i,t,o);s[o]?s[o].p(l,r):(s[o]=Zo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&E(e),at(s,i)}}}function Zo(n){let e=ni[n[32]]+(n[32]==n[13].stats[n[13].stats.length-1]?"":", "),t;return{c(){t=H(e)},m(s,i){S(s,t,i)},p(s,i){i[0]&49&&e!==(e=ni[s[32]]+(s[32]==s[13].stats[s[13].stats.length-1]?"":", "))&&de(t,e)},d(s){s&&E(t)}}}function el(n){let e,t=n[18]+"",s;return{c(){e=p("span"),s=H(t),_(e,"class","bgInfo")},m(i,r){S(i,e,r),h(e,s)},p(i,r){r[0]&55&&t!==(t=i[18]+"")&&de(s,t)},d(i){i&&E(e)}}}function Np(n){let e=n[20].toLocaleString()+"",t,s,i,r;return{c(){t=H(e),s=y(),i=p("br"),r=H(`\r
                        Gold`)},m(o,l){S(o,t,l),S(o,s,l),S(o,i,l),S(o,r,l)},p(o,l){l[0]&49&&e!==(e=o[20].toLocaleString()+"")&&de(t,e)},d(o){o&&(E(t),E(s),E(i),E(r))}}}function Rp(n){let e;return{c(){e=H("Unpurchasable")},m(t,s){S(t,e,s)},p:ae,d(t){t&&E(e)}}}function tl(n){let e,t;return{c(){e=p("iconify-icon"),Ke(e,"class","bgInfo"),Ke(e,"icon","mingcute:arrow-up-fill"),Ke(e,"flip",t=n[20]>n[21]?"vertical":"")},m(s,i){S(s,e,i)},p(s,i){i[0]&51&&t!==(t=s[20]>s[21]?"vertical":"")&&Ke(e,"flip",t)},d(s){s&&E(e)}}}function nl(n){let e=(n[29]==n[13].colors[0]?qt(n[29]):n[29])+(n[29]==n[13].colors[n[13].colors.length-1]?"":", "),t;return{c(){t=H(e)},m(s,i){S(s,t,i)},p(s,i){i[0]&49&&e!==(e=(s[29]==s[13].colors[0]?qt(s[29]):s[29])+(s[29]==s[13].colors[s[13].colors.length-1]?"":", "))&&de(t,e)},d(s){s&&E(t)}}}function sl(n){let e,t=n[23]+"",s;return{c(){e=p("span"),s=H(t),_(e,"class","bgInfo")},m(i,r){S(i,e,r),h(e,s)},p(i,r){r[0]&51&&t!==(t=i[23]+"")&&de(s,t)},d(i){i&&E(e)}}}function il(n,e){let t,s,i,r,o,l,a,c,u,d,f,m=e[13].name+"",g,v,w,T,k,D=(e[2]?qt(e[13].slot):e[13].special?"Yes":"No")+"",A,R,q,P,C,N,U,ie,z,J,be,$,ee,x,he,re,V,te,B,I=qt(e[13].outline)+"",F,G,O,ce,Ce,Qe=ti[e[13].release]+"",Fe,We,dt,Se,xe,ut,Ee=ae,ne,Ve,it;function Te(Q,ve){return Q[2]?Ep:Cp}let _e=Te(e),Ne=_e(e);function Ye(Q,ve){return Q[13].cost.min==null?Rp:Np}let Ie=Ye(e),X=Ie(e),oe=!e[6]&&!e[22]&&e[20]&&tl(e),W=ye(e[13].colors),se=[];for(let Q=0;Q<W.length;Q+=1)se[Q]=nl(Yo(e,W,Q));let Re=!e[6]&&e[23]&&!e[24]&&sl(e);return{key:n,first:null,c(){t=p("div"),s=p("div"),i=p("a"),r=p("img"),a=y(),c=p("iconify-icon"),d=y(),f=p("span"),g=H(m),T=y(),k=p("span"),A=H(D),P=y(),C=p("span"),Ne.c(),ie=y(),z=p("span"),X.c(),J=y(),oe&&oe.c(),ee=y(),x=p("span");for(let Q=0;Q<se.length;Q+=1)se[Q].c();he=y(),Re&&Re.c(),te=y(),B=p("span"),F=H(I),ce=y(),Ce=p("span"),Fe=H(Qe),We=H(" Update"),xe=y(),tt(r.src,o=Zt+e[13].image)||_(r,"src",o),_(r,"alt",l=e[13].name),_(r,"class","svelte-1iqikjy"),Ke(c,"icon","tabler:link"),Ke(c,"class","svelte-1iqikjy"),_(i,"class","flex fjc-center fai-center svelte-1iqikjy"),_(i,"href",u=Ln+e[13].link),_(i,"target","_blank"),_(f,"class","tooltip"),_(f,"id","right"),_(s,"id","itemImage"),_(s,"class","ff-item svelte-1iqikjy"),_(k,"class","ff-bg ff-item svelte-1iqikjy"),_(k,"id",R=(e[2]?e[17]:e[14])?"correct":"wrong"),_(C,"class","ff-bg ff-item svelte-1iqikjy"),_(C,"id",N=(e[2]?e[19]:e[16])?"correct":(e[2]?e[18]:e[15])?"partial":"wrong"),Ue(C,"smallerStats",e[2]&&e[13].stats.length>=7),_(z,"class","ff-bg ff-item svelte-1iqikjy"),_(z,"id",be=e[22]?"correct":"wrong"),_(x,"class","ff-bg ff-item svelte-1iqikjy"),_(x,"id",re=e[24]?"correct":e[23]?"partial":"wrong"),_(B,"class","ff-bg ff-item svelte-1iqikjy"),_(B,"id",G=e[25]?"correct":"wrong"),_(Ce,"class","ff-bg ff-item svelte-1iqikjy"),_(Ce,"id",dt=e[26]?"correct":"wrong"),_(t,"class","itemRow svelte-1iqikjy"),this.first=t},m(Q,ve){S(Q,t,ve),h(t,s),h(s,i),h(i,r),h(i,a),h(i,c),h(s,d),h(s,f),h(f,g),h(t,T),h(t,k),h(k,A),h(t,P),h(t,C),Ne.m(C,null),h(t,ie),h(t,z),X.m(z,null),h(z,J),oe&&oe.m(z,null),h(t,ee),h(t,x);for(let De=0;De<se.length;De+=1)se[De]&&se[De].m(x,null);h(x,he),Re&&Re.m(x,null),h(t,te),h(t,B),h(B,F),h(t,ce),h(t,Ce),h(Ce,Fe),h(Ce,We),h(t,xe),ne=!0,Ve||(it=[Vl(v=e[8].call(null,s,[e[14],e[15],e[16],e[17],e[18],e[19],e[22],e[23],e[24],e[25],e[26]])),ke(Ce,"introend",e[10])],Ve=!0)},p(Q,ve){if(e=Q,(!ne||ve[0]&49&&!tt(r.src,o=Zt+e[13].image))&&_(r,"src",o),(!ne||ve[0]&49&&l!==(l=e[13].name))&&_(r,"alt",l),(!ne||ve[0]&49&&u!==(u=Ln+e[13].link))&&_(i,"href",u),(!ne||ve[0]&49)&&m!==(m=e[13].name+"")&&de(g,m),v&&pn(v.update)&&ve[0]&55&&v.update.call(null,[e[14],e[15],e[16],e[17],e[18],e[19],e[22],e[23],e[24],e[25],e[26]]),(!ne||ve[0]&53)&&D!==(D=(e[2]?qt(e[13].slot):e[13].special?"Yes":"No")+"")&&de(A,D),(!ne||ve[0]&55&&R!==(R=(e[2]?e[17]:e[14])?"correct":"wrong"))&&_(k,"id",R),_e===(_e=Te(e))&&Ne?Ne.p(e,ve):(Ne.d(1),Ne=_e(e),Ne&&(Ne.c(),Ne.m(C,null))),(!ne||ve[0]&55&&N!==(N=(e[2]?e[19]:e[16])?"correct":(e[2]?e[18]:e[15])?"partial":"wrong"))&&_(C,"id",N),(!ne||ve[0]&53)&&Ue(C,"smallerStats",e[2]&&e[13].stats.length>=7),Ie===(Ie=Ye(e))&&X?X.p(e,ve):(X.d(1),X=Ie(e),X&&(X.c(),X.m(z,J))),!e[6]&&!e[22]&&e[20]?oe?oe.p(e,ve):(oe=tl(e),oe.c(),oe.m(z,null)):oe&&(oe.d(1),oe=null),(!ne||ve[0]&51&&be!==(be=e[22]?"correct":"wrong"))&&_(z,"id",be),ve[0]&49){W=ye(e[13].colors);let De;for(De=0;De<W.length;De+=1){const je=Yo(e,W,De);se[De]?se[De].p(je,ve):(se[De]=nl(je),se[De].c(),se[De].m(x,he))}for(;De<se.length;De+=1)se[De].d(1);se.length=W.length}!e[6]&&e[23]&&!e[24]?Re?Re.p(e,ve):(Re=sl(e),Re.c(),Re.m(x,null)):Re&&(Re.d(1),Re=null),(!ne||ve[0]&51&&re!==(re=e[24]?"correct":e[23]?"partial":"wrong"))&&_(x,"id",re),(!ne||ve[0]&49)&&I!==(I=qt(e[13].outline)+"")&&de(F,I),(!ne||ve[0]&51&&G!==(G=e[25]?"correct":"wrong"))&&_(B,"id",G),(!ne||ve[0]&49)&&Qe!==(Qe=ti[e[13].release]+"")&&de(Fe,Qe),(!ne||ve[0]&51&&dt!==(dt=e[26]?"correct":"wrong"))&&_(Ce,"id",dt)},r(){ut=t.getBoundingClientRect()},f(){cu(t),Ee()},a(){Ee(),Ee=au(t,ut,wp,{duration:125})},i(Q){ne||(Q&&Xe(()=>{ne&&(w||(w=Oe(s,rt,{duration:e[3]?0:300},!0)),w.run(1))}),Q&&Xe(()=>{ne&&(q||(q=Oe(k,rt,{duration:e[3]?0:300,delay:e[3]?0:250},!0)),q.run(1))}),Q&&Xe(()=>{ne&&(U||(U=Oe(C,rt,{duration:e[3]?0:300,delay:e[3]?0:550},!0)),U.run(1))}),Q&&Xe(()=>{ne&&($||($=Oe(z,rt,{duration:e[3]?0:300,delay:e[3]?0:850},!0)),$.run(1))}),Q&&Xe(()=>{ne&&(V||(V=Oe(x,rt,{duration:e[3]?0:300,delay:e[3]?0:1150},!0)),V.run(1))}),Q&&Xe(()=>{ne&&(O||(O=Oe(B,rt,{duration:e[3]?0:300,delay:e[3]?0:1450},!0)),O.run(1))}),Q&&Xe(()=>{ne&&(Se||(Se=Oe(Ce,rt,{duration:e[3]?0:300,delay:e[3]?0:1750},!0)),Se.run(1))}),ne=!0)},o(Q){Q&&(w||(w=Oe(s,rt,{duration:e[3]?0:300},!1)),w.run(0)),Q&&(q||(q=Oe(k,rt,{duration:e[3]?0:300,delay:e[3]?0:250},!1)),q.run(0)),Q&&(U||(U=Oe(C,rt,{duration:e[3]?0:300,delay:e[3]?0:550},!1)),U.run(0)),Q&&($||($=Oe(z,rt,{duration:e[3]?0:300,delay:e[3]?0:850},!1)),$.run(0)),Q&&(V||(V=Oe(x,rt,{duration:e[3]?0:300,delay:e[3]?0:1150},!1)),V.run(0)),Q&&(O||(O=Oe(B,rt,{duration:e[3]?0:300,delay:e[3]?0:1450},!1)),O.run(0)),Q&&(Se||(Se=Oe(Ce,rt,{duration:e[3]?0:300,delay:e[3]?0:1750},!1)),Se.run(0)),ne=!1},d(Q){Q&&E(t),Q&&w&&w.end(),Q&&q&&q.end(),Ne.d(),Q&&U&&U.end(),X.d(),oe&&oe.d(),Q&&$&&$.end(),at(se,Q),Re&&Re.d(),Q&&V&&V.end(),Q&&O&&O.end(),Q&&Se&&Se.end(),Ve=!1,nt(it)}}}function Dp(n){let e,t,s,i,r,o=n[2]?"Slot":"Has Special",l,a,c,u=n[2]?"Stats":"Stat Intakes",d,f,m,g,v,w,T,k,D,A,R,q=!n[3]&&Qo(n);return{c(){e=p("div"),t=p("div"),s=p("span"),s.textContent="Item",i=y(),r=p("span"),l=H(o),a=y(),c=p("span"),d=H(u),f=y(),m=p("span"),m.textContent="Avg. Cost",g=y(),v=p("span"),v.textContent="Colors",w=y(),T=p("span"),T.textContent="Outline",k=y(),D=p("span"),D.textContent="Release",A=y(),q&&q.c(),_(s,"class","ff-item svelte-1iqikjy"),_(r,"class","ff-item svelte-1iqikjy"),Ue(r,"smaller-fs",!n[2]),_(c,"class","ff-item svelte-1iqikjy"),Ue(c,"smaller-fs",!n[2]),_(m,"class","ff-item svelte-1iqikjy"),_(v,"class","ff-item svelte-1iqikjy"),_(T,"class","ff-item svelte-1iqikjy"),_(D,"class","ff-item svelte-1iqikjy"),_(t,"id","categories"),_(t,"class","svelte-1iqikjy"),_(e,"class","gameboard ff-bg fd-col flex posrel border-tp bs svelte-1iqikjy")},m(P,C){S(P,e,C),h(e,t),h(t,s),h(t,i),h(t,r),h(r,l),h(t,a),h(t,c),h(c,d),h(t,f),h(t,m),h(t,g),h(t,v),h(t,w),h(t,T),h(t,k),h(t,D),h(e,A),q&&q.m(e,null),R=!0},p(P,C){(!R||C[0]&4)&&o!==(o=P[2]?"Slot":"Has Special")&&de(l,o),(!R||C[0]&4)&&Ue(r,"smaller-fs",!P[2]),(!R||C[0]&4)&&u!==(u=P[2]?"Stats":"Stat Intakes")&&de(d,u),(!R||C[0]&4)&&Ue(c,"smaller-fs",!P[2]),P[3]?q&&(St(),le(q,1,1,()=>{q=null}),kt()):q?(q.p(P,C),C[0]&8&&K(q,1)):(q=Qo(P),q.c(),K(q,1),q.m(e,null))},i(P){R||(K(q),R=!0)},o(P){le(q),R=!1},d(P){P&&E(e),q&&q.d()}}}function Fi(n,e){return n===void 0||e===void 0?void 0:n.filter(s=>e.includes(s)).length}function Ap(n,e,t){let s,i,r,o,l;fe(n,Et,v=>t(0,s=v)),fe(n,yt,v=>t(4,i=v)),fe(n,ii,v=>t(5,r=v)),fe(n,dn,v=>t(6,o=v)),fe(n,_n,v=>t(7,l=v));let{dailyItemsData:a}=e,c,u,d=!1;function f(v,[w,T,k,D,A,R,q,P,C,N,U]){i.chosenItems.length==i.rowInfo.length+1&&yt.update(ie=>({...ie,rowInfo:[...ie.rowInfo,[u?D:w,(u?R:k)?1:(u?A:T)?0:-1,q,C?1:P?0:-1,N,U]]}))}const m=()=>ue(_n,l=!1,l),g=(v,w)=>w.name==v.name;return n.$$set=v=>{"dailyItemsData"in v&&t(9,a=v.dailyItemsData)},n.$$.update=()=>{n.$$.dirty[0]&1&&s.mode&&(t(3,d=!0),setTimeout(()=>t(3,d=!1),10)),n.$$.dirty[0]&513&&on(a)==2&&t(1,c=a[s.mode]),n.$$.dirty[0]&1&&(s.mode.includes("equipment")?t(2,u=!0):s.mode.includes("weapons")&&t(2,u=!1))},[s,c,u,d,i,r,o,l,f,a,m,g]}class Pp extends ft{constructor(e){super(),ht(this,e,Ap,Dp,st,{dailyItemsData:9},null,[-1,-1])}}function Op(n){let e,t,s,i;return{c(){e=p("div"),t=p("input"),_(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],_(t,"type","checkbox"),t.checked=n[1],_(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),Ue(e,"unavailable",n[2]),Dn(e,"--s",`${n[0]}rem`)},m(r,o){S(r,e,o),h(e,t),s||(i=[ke(t,"change",n[5]),ke(t,"keydown",n[6])],s=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&Ue(e,"unavailable",r[2]),o&1&&Dn(e,"--s",`${r[0]}rem`)},i:ae,o:ae,d(r){r&&E(e),s=!1,nt(i)}}}function Mp(n,e,t){let{size:s,checked:i=!1,disabled:r=!1,forced:o=!1}=e;const l=Zl(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,s=u.size),"checked"in u&&t(1,i=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[s,i,r,o,l,a,c]}class Os extends ft{constructor(e){super(),ht(this,e,Mp,Op,st,{size:0,checked:1,disabled:2,forced:3})}}function rl(n,e,t){const s=n.slice();s[22]=e[t];const i=s[1]?!1:s[9].chosenItems.find(function(...o){return n[20](s[22],...o)})!=null;return s[23]=i,s}function ol(n){let e,t,s,i=ye(n[1]?n[5].length?n[5]:n[8][n[3]]:n[5]),r=[];for(let o=0;o<i.length;o+=1)r[o]=ll(rl(n,i,o));return{c(){e=p("div");for(let o=0;o<r.length;o+=1)r[o].c();_(e,"class","itemList ff-bg flex fd-col svelte-1up5u20"),Ue(e,"noGuess",n[1])},m(o,l){S(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[21](e),s=!0},p(o,l){if(l&2938){i=ye(o[1]?o[5].length?o[5]:o[8][o[3]]:o[5]);let a;for(a=0;a<i.length;a+=1){const c=rl(o,i,a);r[a]?r[a].p(c,l):(r[a]=ll(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}(!s||l&2)&&Ue(e,"noGuess",o[1])},i(o){s||(o&&Xe(()=>{s&&(t||(t=Oe(e,Bt,{duration:75},!0)),t.run(1))}),s=!0)},o(o){o&&(t||(t=Oe(e,Bt,{duration:75},!1)),t.run(0)),s=!1},d(o){o&&E(e),at(r,o),n[21](null),o&&t&&t.end()}}}function ll(n){let e,t,s,i,r,o=n[22].name+"",l,a,c,u,d;function f(){return n[18](n[23],n[22])}return{c(){e=p("button"),t=p("img"),i=y(),r=p("span"),l=H(o),a=y(),tt(t.src,s=Zt+n[22].image)||_(t,"src",s),_(t,"alt",""),_(t,"class","svelte-1up5u20"),e.disabled=c=n[23],_(e,"class","listItem flex fai-center no-bg-change svelte-1up5u20"),Ue(e,"unavailable",n[23])},m(m,g){S(m,e,g),h(e,t),h(e,i),h(e,r),h(r,l),h(e,a),u||(d=[ke(e,"click",f),ke(e,"focusout",n[19])],u=!0)},p(m,g){n=m,g&298&&!tt(t.src,s=Zt+n[22].image)&&_(t,"src",s),g&298&&o!==(o=n[22].name+"")&&de(l,o),g&810&&c!==(c=n[23])&&(e.disabled=c),g&810&&Ue(e,"unavailable",n[23])},d(m){m&&E(e),u=!1,nt(d)}}}function Lp(n){let e,t,s,i,r,o,l=n[8]&&(n[1]?!0:n[5].length)&&n[6]&&ol(n);return{c(){e=p("input"),s=y(),l&&l.c(),i=wt(),e.disabled=n[7],_(e,"type","text"),_(e,"class","searcherInput border-tp br-1 svelte-1up5u20"),_(e,"placeholder",t=n[1]?"Item to be guessed...":`Guess the item for game #${n[0]+1} (${n[3]})...`)},m(a,c){S(a,e,c),n[16](e),S(a,s,c),l&&l.m(a,c),S(a,i,c),r||(o=[ke(window,"mousedown",n[15]),ke(e,"input",n[10]),ke(e,"focusin",n[17])],r=!0)},p(a,[c]){c&128&&(e.disabled=a[7]),c&11&&t!==(t=a[1]?"Item to be guessed...":`Guess the item for game #${a[0]+1} (${a[3]})...`)&&_(e,"placeholder",t),a[8]&&(a[1]||a[5].length)&&a[6]?l?(l.p(a,c),c&354&&K(l,1)):(l=ol(a),l.c(),K(l,1),l.m(i.parentNode,i)):l&&(St(),le(l,1,1,()=>{l=null}),kt())},i(a){K(l)},o(a){le(l)},d(a){a&&(E(e),E(s),E(i)),n[16](null),l&&l.d(a),r=!1,nt(o)}}}function Fp(n,e,t){let s,i,r,o,l;fe(n,Et,N=>t(14,i=N)),fe(n,_n,N=>t(7,r=N)),fe(n,ii,N=>t(8,o=N)),fe(n,yt,N=>t(9,l=N));let{gameNumber:a=0,noGuess:c=!1,noGuessMode:u=null,noGuessItem:d=""}=e,f,m,g=[],v=!1;function w(){let N=f.value.toLowerCase();if(t(5,g=[]),!!N)for(let U of o[s])U.name.toLowerCase().includes(N)&&g.push(U)}function T(N){r||(c?(t(12,d=N.name),t(6,v=!1)):(ue(_n,r=!0,r),yt.update(U=>({...U,chosenItems:[...U.chosenItems,{name:N.name}]}))),t(2,f.value="",f),w())}const k=N=>{m&&N.target!=f&&!m.contains(N.target)&&t(6,v=!1)};function D(N){$e[N?"unshift":"push"](()=>{f=N,t(2,f)})}const A=()=>t(6,v=!0),R=(N,U)=>{N||T(U)},q=N=>{m.contains(N.relatedTarget)||t(6,v=!1)},P=(N,U)=>U.name==N.name;function C(N){$e[N?"unshift":"push"](()=>{m=N,t(4,m)})}return n.$$set=N=>{"gameNumber"in N&&t(0,a=N.gameNumber),"noGuess"in N&&t(1,c=N.noGuess),"noGuessMode"in N&&t(13,u=N.noGuessMode),"noGuessItem"in N&&t(12,d=N.noGuessItem)},n.$$.update=()=>{n.$$.dirty&24576&&t(3,s=u||i.mode),n.$$.dirty&12&&s&&f&&w()},[a,c,f,s,m,g,v,r,o,l,w,T,d,u,i,k,D,A,R,q,P,C]}class Uc extends ft{constructor(e){super(),ht(this,e,Fp,Lp,st,{gameNumber:0,noGuess:1,noGuessMode:13,noGuessItem:12})}}function al(n){let e,t,s;return{c(){e=p("span"),_(e,"id","HPFlash"),_(e,"class","svelte-nha9gw")},m(i,r){S(i,e,r),s=!0},i(i){s||(t&&t.end(1),s=!0)},o(i){i&&(t=mu(e,Bt,{duration:200})),s=!1},d(i){i&&E(e),i&&t&&t.end()}}}function qp(n){let e,t,s,i,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,d,f,m,g,v,w=n[4]?"You've lost your remaining armor.":"Your armor is protecting you.",T,k,D,A,R,q,P,C,N,U,ie,z=n[1]&&al();function J($){n[6]($)}let be={};return n[0]!==void 0&&(be.gameNumber=n[0]),N=new Uc({props:be}),$e.push(()=>Nt(N,"gameNumber",J)),{c(){e=p("div"),t=p("div"),s=p("div"),i=p("div"),r=p("div"),o=p("span"),a=H(l),c=H("/600"),u=y(),d=p("button"),f=p("img"),g=y(),v=p("span"),T=H(w),k=y(),D=p("br"),A=H(`\r
                You can take `),R=H(n[2]),q=H(" hits at most!"),P=y(),z&&z.c(),C=y(),He(N.$$.fragment),_(o,"class","svelte-nha9gw"),_(r,"class","HPBackground svelte-nha9gw"),Dn(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),_(i,"class","innerGameHP flex posrel svelte-nha9gw"),_(s,"class","outerGameHP posrel svelte-nha9gw"),tt(f.src,m="misc/armor.svg")||_(f,"src",m),_(f,"alt","Armor"),_(f,"class","svelte-nha9gw"),Ue(f,"noArmor",n[4]),_(v,"class","tooltip svelte-nha9gw"),_(v,"id","right"),_(d,"class","ff-item posrel br-1 svelte-nha9gw"),_(d,"id","armorIcon"),_(t,"class","gameHPCont flex cg-1 svelte-nha9gw"),_(e,"class","currentGameInfo ff-bg flex fd-row fw fjc-center fai-center posrel border-tp br-1 bs svelte-nha9gw")},m($,ee){S($,e,ee),h(e,t),h(t,s),h(s,i),h(i,r),h(r,o),h(o,a),h(o,c),h(t,u),h(t,d),h(d,f),h(d,g),h(d,v),h(v,T),h(v,k),h(v,D),h(v,A),h(v,R),h(v,q),h(e,P),z&&z.m(e,null),h(e,C),Be(N,e,null),ie=!0},p($,[ee]){(!ie||ee&12)&&l!==(l=Math.round(600-$[3].chosenItems.length*(600/$[2]))+"")&&de(a,l),ee&12&&Dn(r,"width",`${Math.floor(100*($[2]-$[3].chosenItems.length)/$[2])}%`),(!ie||ee&16)&&Ue(f,"noArmor",$[4]),(!ie||ee&16)&&w!==(w=$[4]?"You've lost your remaining armor.":"Your armor is protecting you.")&&de(T,w),(!ie||ee&4)&&de(R,$[2]),$[1]?z?ee&2&&K(z,1):(z=al(),z.c(),K(z,1),z.m(e,C)):z&&(St(),le(z,1,1,()=>{z=null}),kt());const x={};!U&&ee&1&&(U=!0,x.gameNumber=$[0],Tt(()=>U=!1)),N.$set(x)},i($){ie||(K(z),K(N.$$.fragment,$),ie=!0)},o($){le(z),le(N.$$.fragment,$),ie=!1},d($){$&&E(e),z&&z.d(),Ge(N)}}}function Wp(n,e,t){let s,i,r,o;fe(n,_n,u=>t(5,s=u)),fe(n,ri,u=>t(2,i=u)),fe(n,yt,u=>t(3,r=u)),fe(n,dn,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&s&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,i,r,o,s,c]}class jp extends ft{constructor(e){super(),ht(this,e,Wp,qp,st,{gameNumber:0})}}function cl(n,e,t){const s=n.slice();return s[9]=e[t],s}function ul(n,e,t){const s=n.slice();return s[12]=e[t],s}function hl(n){let e,t=(n[12]===!0||n[12]===1?n[4].html.blue:n[12]===0?n[4].html.yellow:n[12]===!1||n[12]===-1?n[4].html.red:null)+"",s;return{c(){e=new Jl(!1),s=wt(),e.a=s},m(i,r){e.m(t,i,r),S(i,s,r)},p(i,r){r&1&&t!==(t=(i[12]===!0||i[12]===1?i[4].html.blue:i[12]===0?i[4].html.yellow:i[12]===!1||i[12]===-1?i[4].html.red:null)+"")&&e.p(t)},d(i){i&&(E(s),e.d())}}}function fl(n){let e,t,s=ye(n[9]),i=[];for(let r=0;r<s.length;r+=1)i[r]=hl(ul(n,s,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=y(),t=p("br")},m(r,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(r,o);S(r,e,o),S(r,t,o)},p(r,o){if(o&17){s=ye(r[9]);let l;for(l=0;l<s.length;l+=1){const a=ul(r,s,l);i[l]?i[l].p(a,o):(i[l]=hl(a),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},d(r){r&&(E(e),E(t)),at(i,r)}}}function xp(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v=n[2]?"Copied!":"Copy",w,T,k,D=ye(n[0].rowInfo.toReversed()),A=[];for(let R=0;R<D.length;R+=1)A[R]=fl(cl(n,D,R));return{c(){e=p("div"),t=p("span"),t.textContent="Game Stats",s=y(),i=p("span"),r=H(n[3]),o=y(),l=p("br"),a=y();for(let R=0;R<A.length;R+=1)A[R].c();c=y(),u=p("button"),d=H(`Share Stats\r
        `),f=p("iconify-icon"),m=y(),g=p("span"),w=H(v),_(i,"class","smaller-fs"),Ke(f,"icon","ri:share-fill"),_(g,"class","tooltip"),_(g,"id","top"),_(u,"class","flex fai-center cg-1 posrel border-tp br-1 smaller-fs svelte-q44wd4"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs")},m(R,q){S(R,e,q),h(e,t),h(e,s),h(e,i),h(i,r),h(i,o),h(i,l),h(i,a);for(let P=0;P<A.length;P+=1)A[P]&&A[P].m(i,null);h(e,c),h(e,u),h(u,d),h(u,f),h(u,m),h(u,g),h(g,w),T||(k=ke(u,"click",n[8]),T=!0)},p(R,[q]){if(q&8&&de(r,R[3]),q&17){D=ye(R[0].rowInfo.toReversed());let P;for(P=0;P<D.length;P+=1){const C=cl(R,D,P);A[P]?A[P].p(C,q):(A[P]=fl(C),A[P].c(),A[P].m(i,null))}for(;P<A.length;P+=1)A[P].d(1);A.length=D.length}q&4&&v!==(v=R[2]?"Copied!":"Copy")&&de(w,v)},i:ae,o:ae,d(R){R&&E(e),at(A,R),T=!1,k()}}}function Bp(n,e,t){let s,i,r,o;fe(n,yt,f=>t(0,i=f)),fe(n,Et,f=>t(6,r=f)),fe(n,dn,f=>t(7,o=f));let{gameNumber:l}=e,a={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},c="",u=!1;const d=f=>{Ft(f),navigator.clipboard.writeText(`${s}
${c}
${location.origin+location.pathname}`),t(2,u=!0),setTimeout(()=>t(2,u=!1),1e3)};return n.$$set=f=>{"gameNumber"in f&&t(5,l=f.gameNumber)},n.$$.update=()=>{n.$$.dirty&224&&t(3,s=`${o?"(Nightmare)":""} Frontierdle - ${qt(r.mode)} #${l+1}`),n.$$.dirty&67&&r.mode&&setTimeout(()=>{t(1,c="");for(let f of i.rowInfo.toReversed()){let m="";for(let g of f)m+=g===!0||g===1?a.js.blue:g===0?a.js.yellow:g===!1||g===-1?a.js.red:null;t(1,c+=m+`
`)}})},[i,c,u,s,a,l,r,o,d]}class Gp extends ft{constructor(e){super(),ht(this,e,Bp,xp,st,{gameNumber:5})}}function dl(n,e,t){const s=n.slice();s[8]=e[t];const i=s[1]?s[2]:s[4][s[8]+s[3]];s[9]=i;const r=s[8].includes("hard");s[10]=r;const o=Math.max(...Object.values(s[9].winInfo));return s[11]=o,s}function _l(n,e,t){const s=n.slice();return s[14]=e[t][0],s[15]=e[t][1],s}function pl(n){let e,t,s=n[9].streak+"",i,r,o;return{c(){e=p("div"),t=p("span"),i=H(s),r=y(),o=p("span"),o.textContent="Current Streak",_(o,"id","statsTitle"),_(o,"class","svelte-1dnm67b"),_(e,"class","svelte-1dnm67b")},m(l,a){S(l,e,a),h(e,t),h(t,i),h(e,r),h(e,o)},p(l,a){a&94&&s!==(s=l[9].streak+"")&&de(i,s)},d(l){l&&E(e)}}}function ml(n){let e,t,s=n[14]+"",i,r,o,l,a,c=n[15]+"",u,d;return{c(){e=p("div"),t=p("span"),i=H(s),r=y(),o=p("span"),o.innerHTML="",l=y(),a=p("span"),u=H(c),d=y(),_(t,"id","guessNum"),_(t,"class","svelte-1dnm67b"),_(o,"class","posrel border-tp svelte-1dnm67b"),_(o,"id","winsBar"),Dn(o,"width",`${n[15]*80/n[11]}%`),_(a,"class","smaller-fs svelte-1dnm67b"),_(a,"id","winsNum"),_(e,"class","flex fai-center svelte-1dnm67b")},m(f,m){S(f,e,m),h(e,t),h(t,i),h(e,r),h(e,o),h(e,l),h(e,a),h(a,u),h(e,d)},p(f,m){m&94&&s!==(s=f[14]+"")&&de(i,s),m&94&&Dn(o,"width",`${f[15]*80/f[11]}%`),m&94&&c!==(c=f[15]+"")&&de(u,c)},d(f){f&&E(e)}}}function gl(n){let e;return{c(){e=p("hr"),_(e,"class","svelte-1dnm67b")},m(t,s){S(t,e,s)},d(t){t&&E(e)}}}function vl(n){let e,t,s=n[1]?"Total":n[10]?"Nightmare":"Normal",i,r,o,l,a,c,u=n[9].gamesPlayed+"",d,f,m,g,v,w,T=Math.floor(n[9].gamesWon*100/(n[9].gamesPlayed?n[9].gamesPlayed:1))+"",k,D,A,R,q,P,C,N,U=n[9].maxStreak+"",ie,z,J,be,$,ee,x,he,re,V=!n[1]&&pl(n),te=ye(Object.entries(n[9].winInfo)),B=[];for(let F=0;F<te.length;F+=1)B[F]=ml(_l(n,te,F));let I=n[8]!=n[6][n[6].length-1]&&gl();return{c(){e=p("div"),t=p("span"),i=H(s),r=y(),o=p("div"),l=p("div"),a=p("div"),c=p("span"),d=H(u),f=y(),m=p("span"),m.textContent="Games Played",g=y(),v=p("div"),w=p("span"),k=H(T),D=H("%"),A=y(),R=p("span"),R.textContent="Win Rate",q=y(),V&&V.c(),P=y(),C=p("div"),N=p("span"),ie=H(U),z=y(),J=p("span"),J.textContent="Max Streak",be=y(),$=p("span"),$.textContent="Win Distribution",ee=y(),x=p("div");for(let F=0;F<B.length;F+=1)B[F].c();he=y(),I&&I.c(),re=wt(),_(t,"class","smaller-fs"),_(m,"id","statsTitle"),_(m,"class","svelte-1dnm67b"),_(a,"class","svelte-1dnm67b"),_(R,"id","statsTitle"),_(R,"class","svelte-1dnm67b"),_(v,"class","svelte-1dnm67b"),_(J,"id","statsTitle"),_(J,"class","svelte-1dnm67b"),_(C,"class","svelte-1dnm67b"),_(l,"class","flex svelte-1dnm67b"),_(l,"id","playerStatsInfo"),_($,"class","smaller-fs"),_(x,"class","flex fd-col smaller-fs svelte-1dnm67b"),_(x,"id","distributionChart"),_(e,"class","flex fd-col svelte-1dnm67b"),_(e,"id","modeStatCont")},m(F,G){S(F,e,G),h(e,t),h(t,i),h(e,r),h(e,o),h(o,l),h(l,a),h(a,c),h(c,d),h(a,f),h(a,m),h(l,g),h(l,v),h(v,w),h(w,k),h(w,D),h(v,A),h(v,R),h(l,q),V&&V.m(l,null),h(l,P),h(l,C),h(C,N),h(N,ie),h(C,z),h(C,J),h(e,be),h(e,$),h(e,ee),h(e,x);for(let O=0;O<B.length;O+=1)B[O]&&B[O].m(x,null);S(F,he,G),I&&I.m(F,G),S(F,re,G)},p(F,G){if(G&66&&s!==(s=F[1]?"Total":F[10]?"Nightmare":"Normal")&&de(i,s),G&94&&u!==(u=F[9].gamesPlayed+"")&&de(d,u),G&94&&T!==(T=Math.floor(F[9].gamesWon*100/(F[9].gamesPlayed?F[9].gamesPlayed:1))+"")&&de(k,T),F[1]?V&&(V.d(1),V=null):V?V.p(F,G):(V=pl(F),V.c(),V.m(l,P)),G&94&&U!==(U=F[9].maxStreak+"")&&de(ie,U),G&94){te=ye(Object.entries(F[9].winInfo));let O;for(O=0;O<te.length;O+=1){const ce=_l(F,te,O);B[O]?B[O].p(ce,G):(B[O]=ml(ce),B[O].c(),B[O].m(x,null))}for(;O<B.length;O+=1)B[O].d(1);B.length=te.length}F[8]!=F[6][F[6].length-1]?I||(I=gl(),I.c(),I.m(re.parentNode,re)):I&&(I.d(1),I=null)},d(F){F&&(E(e),E(he),E(re)),V&&V.d(),at(B,F),I&&I.d(F)}}}function yl(n){let e,t=ye(n[6]),s=[];for(let i=0;i<t.length;i+=1)s[i]=vl(dl(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=wt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);S(i,e,r)},p(i,r){if(r&94){t=ye(i[6]);let o;for(o=0;o<t.length;o+=1){const l=dl(i,t,o);s[o]?s[o].p(l,r):(s[o]=vl(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&E(e),at(s,i)}}}function Hp(n){let e,t,s,i,r=qt(n[3])+"",o,l,a,c,u,d,f,m=n[5].mode,g,v,w,T,k=yl(n);return{c(){e=p("div"),t=p("div"),s=p("span"),i=H("Your Stats - "),o=H(r),l=y(),a=p("button"),a.textContent="Switch View",c=y(),u=p("hr"),d=y(),f=p("div"),k.c(),_(a,"class","border-tp br-1 smaller-fs svelte-1dnm67b"),_(t,"class","flex fd-col fai-center rg-1 svelte-1dnm67b"),_(t,"id","title"),_(u,"class","svelte-1dnm67b"),_(f,"class","flex fai-center svelte-1dnm67b"),_(f,"id","modeStatsCont"),_(e,"class","statsCont ff-bg flex fd-col cg-1 fai-center border-tp br-1 bs svelte-1dnm67b"),_(e,"id","playerStats"),Ue(e,"totalView",n[1])},m(D,A){S(D,e,A),h(e,t),h(t,s),h(s,i),h(s,o),h(t,l),h(t,a),h(e,c),h(e,u),h(e,d),h(e,f),k.m(f,null),v=!0,w||(T=ke(a,"click",n[7]),w=!0)},p(D,[A]){n=D,(!v||A&8)&&r!==(r=qt(n[3])+"")&&de(o,r),A&32&&st(m,m=n[5].mode)?(k.d(1),k=yl(n),k.c(),k.m(f,null)):k.p(n,A),(!v||A&2)&&Ue(e,"totalView",n[1])},i(D){v||(D&&Xe(()=>{v&&(g||(g=Oe(e,rt,{duration:n[0]?200:0},!0)),g.run(1))}),v=!0)},o(D){D&&(g||(g=Oe(e,rt,{duration:n[0]?200:0},!1)),g.run(0)),v=!1},d(D){D&&E(e),k.d(D),D&&g&&g.end(),w=!1,T()}}}function Up(n,e,t){let s,i,r,o;fe(n,Rn,d=>t(4,r=d)),fe(n,Et,d=>t(5,o=d));let{prompted:l=!1}=e,a=!0,c;const u=d=>{Ft(d),t(1,a=!a)};return n.$$set=d=>{"prompted"in d&&t(0,l=d.prompted)},n.$$.update=()=>{if(n.$$.dirty&32&&t(3,s=o.mode),n.$$.dirty&2&&t(6,i=a?[""]:["","hard_"]),n.$$.dirty&60&&o.mode){t(2,c=structuredClone(Dt.playerStats.equipment));for(let d of["","hard_"]){let f=r[d+s];for(let m of["gamesPlayed","gamesWon"])t(2,c[m]+=f[m],c);f.maxStreak>c.maxStreak&&t(2,c.maxStreak=f.maxStreak,c);for(let m in f.winInfo)t(2,c.winInfo[m]+=f.winInfo[m],c)}}},[l,a,c,s,r,o,i,u]}class zc extends ft{constructor(e){super(),ht(this,e,Up,Hp,st,{prompted:0})}}function bl(n,e,t){const s=n.slice();return s[5]=e[t],s}function zp(n){let e,t=ye(n[1]),s=[];for(let i=0;i<t.length;i+=1)s[i]=wl(bl(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=wt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);S(i,e,r)},p(i,r){if(r&2){t=ye(i[1]);let o;for(o=0;o<t.length;o+=1){const l=bl(i,t,o);s[o]?s[o].p(l,r):(s[o]=wl(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&E(e),at(s,i)}}}function Vp(n){let e,t,s;return{c(){e=p("span"),t=H("— "),s=H(n[1]),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(i,r){S(i,e,r),h(e,t),h(e,s)},p(i,r){r&2&&de(s,i[1])},d(i){i&&E(e)}}}function wl(n){let e,t,s=n[5]+"",i;return{c(){e=p("span"),t=H("— "),i=H(s),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(r,o){S(r,e,o),h(e,t),h(e,i)},p(r,o){o&2&&s!==(s=r[5]+"")&&de(i,s)},d(r){r&&E(e)}}}function Yp(n){let e,t,s,i,r,o,l,a,c;function u(m,g){return typeof m[1]=="string"?Vp:zp}let d=u(n),f=d(n);return{c(){e=p("hr"),t=y(),s=p("li"),i=p("span"),r=H("v"),o=H(n[0]),l=y(),a=p("i"),a.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":bp[n[2][0]%10])+", 20"+n[2][2]}`,c=y(),f.c(),_(i,"id","version"),_(i,"class","svelte-1vq8gvl"),_(a,"id","date"),_(a,"class","svelte-1vq8gvl"),_(s,"class","flex fw fai-center svelte-1vq8gvl")},m(m,g){S(m,e,g),S(m,t,g),S(m,s,g),h(s,i),h(i,r),h(i,o),h(s,l),h(s,a),h(s,c),f.m(s,null)},p(m,[g]){g&1&&de(o,m[0]),d===(d=u(m))&&f?f.p(m,g):(f.d(1),f=d(m),f&&(f.c(),f.m(s,null)))},i:ae,o:ae,d(m){m&&(E(e),E(t),E(s)),f.d()}}}function $p(n,e,t){let{version:s,date:i,text:r}=e,o=i.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,s=a.version),"date"in a&&t(4,i=a.date),"text"in a&&t(1,r=a.text)},[s,r,o,l,i]}class As extends ft{constructor(e){super(),ht(this,e,$p,Yp,st,{version:0,date:4,text:1})}}function Kp(n){let e,t,s,i,r,o,l,a,c,u,d;return i=new As({props:{version:"1.1.2",date:"9/4/24",text:"Normal and Nightmare mode stats are now separate"}}),o=new As({props:{version:"1.1.1",date:"5/4/24",text:["Fixed 'Game Stats' section not updating when switching game categories","Fixed page size and zoom occasionally breaking"]}}),a=new As({props:{version:"1.1.0",date:"4/4/24",text:["Added 'Weapons' game category","'Game Help' prompt now appears on first visit"]}}),u=new As({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=p("span"),e.textContent="Changelog",t=y(),s=p("ul"),He(i.$$.fragment),r=y(),He(o.$$.fragment),l=y(),He(a.$$.fragment),c=y(),He(u.$$.fragment),_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-1hn7lke"),_(s,"id","contents")},m(f,m){S(f,e,m),S(f,t,m),S(f,s,m),Be(i,s,null),h(s,r),Be(o,s,null),h(s,l),Be(a,s,null),h(s,c),Be(u,s,null),d=!0},p:ae,i(f){d||(K(i.$$.fragment,f),K(o.$$.fragment,f),K(a.$$.fragment,f),K(u.$$.fragment,f),d=!0)},o(f){le(i.$$.fragment,f),le(o.$$.fragment,f),le(a.$$.fragment,f),le(u.$$.fragment,f),d=!1},d(f){f&&(E(e),E(t),E(s)),Ge(i),Ge(o),Ge(a),Ge(u)}}}class Qp extends ft{constructor(e){super(),ht(this,e,null,Kp,st,{})}}function Jp(n){let e,t,s;return{c(){e=p("span"),e.textContent="Credits",t=y(),s=p("div"),s.innerHTML=`<p class="flex fai-center cg-1">This is a personal project. Contact me directly on
        <iconify-icon id="discord" icon="ic:baseline-discord" class="svelte-lszs1n"></iconify-icon> <bl class="svelte-lszs1n">Discord</bl> at<hl>xt.ss</hl>,</p> <p class="cg-1">or in the
        <a class="cg-1 svelte-lszs1n" href="https://discord.gg/ff" target="_blank">Fantastic Frontier Discord Server</a>
        for inquiries or feedback!</p> <br/> <p class="flex fjc-center fai-center cg-1">Frontierdle especially took heavy inspiration from
        <a class="flex fai-center cg-1 svelte-lszs1n" href="https://isaacle.net/" target="_blank"><img src="misc/isaac.png" alt="" class="svelte-lszs1n"/>
            Isaacle
        </a>,</p> <p class="flex fjc-center fai-center cg-1">and certainly wouldn&#39;t be here without the
        <a class="flex fjc-center fai-center cg-1 svelte-lszs1n" href="https://fantastic-frontier-roblox.fandom.com/wiki/Fantastic_Frontier_-_Roblox_Wiki" target="_blank"><iconify-icon id="fandom" icon="simple-icons:fandom" class="svelte-lszs1n"></iconify-icon>
            Fantastic Frontier Wiki
        </a>.</p> <br/> <p class="flex fd-col cg-1"><span class="title">Special Thanks to:</span> <span>— Spectrabox and Gorbachelli, for creating such a fantastic game</span> <span class="flex fjc-center fai-center cg-1">—
            <img src="misc/isaac-ribbon.png" alt="" class="svelte-lszs1n"/>
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,_(e,"class","title"),_(s,"class","smaller-fs"),_(s,"id","contents")},m(i,r){S(i,e,r),S(i,t,r),S(i,s,r)},p:ae,i:ae,o:ae,d(i){i&&(E(e),E(t),E(s))}}}class Xp extends ft{constructor(e){super(),ht(this,e,null,Jp,st,{})}}function Cl(n,e,t){const s=n.slice();return s[0]=e[t],s}function Zp(n,e,t){const s=n.slice();return s[3]=e[t],s}function em(n,e,t){const s=n.slice();return s[6]=e[t],s}function El(n,e,t){const s=n.slice();return s[9]=e[t],s}function Il(n,e,t){const s=n.slice();return s[12]=e[t],s}function tm(n,e,t){const s=n.slice();return s[15]=e[t],s}function nm(n){let e;return{c(){e=p("li"),e.textContent=`— ${qt(n[15])} `},m(t,s){S(t,e,s)},p:ae,d(t){t&&E(e)}}}function Sl(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[12]} `},m(t,s){S(t,e,s)},p:ae,d(t){t&&E(e)}}}function kl(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[9]}`},m(t,s){S(t,e,s)},p:ae,d(t){t&&E(e)}}}function sm(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[6]}`},m(t,s){S(t,e,s)},p:ae,d(t){t&&E(e)}}}function im(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[3]}`},m(t,s){S(t,e,s)},p:ae,d(t){t&&E(e)}}}function Tl(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[0]} Update`},m(t,s){S(t,e,s)},p:ae,d(t){t&&E(e)}}}function rm(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v,w,T,k,D,A,R,q,P,C,N,U,ie,z,J,be,$,ee,x,he,re,V,te,B,I,F,G,O,ce,Ce,Qe,Fe,We,dt,Se,xe,ut,Ee,ne,Ve,it,Te,_e,Ne=ye(vp),Ye=[];for(let M=0;M<Ne.length;M+=1)Ye[M]=nm(tm(n,Ne,M));let Ie=ye(Object.values(ni)),X=[];for(let M=0;M<Ie.length;M+=1)X[M]=Sl(Il(n,Ie,M));let oe=ye(Object.values(si)),W=[];for(let M=0;M<oe.length;M+=1)W[M]=kl(El(n,oe,M));let se=ye(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),Re=[];for(let M=0;M<12;M+=1)Re[M]=sm(em(n,se,M));let Q=ye(["Black","Blue","Green","Purple","Red","White","Yellow"]),ve=[];for(let M=0;M<7;M+=1)ve[M]=im(Zp(n,Q,M));let De=ye(Object.values(ti).slice(0,-1)),je=[];for(let M=0;M<De.length;M+=1)je[M]=Tl(Cl(n,De,M));return{c(){e=p("span"),e.textContent="Game Help",t=y(),s=p("div"),i=p("p"),i.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece and/or\r
        weapon from Fantastic Frontier, which both change every day.`,r=y(),o=p("hr"),l=y(),a=p("div"),a.innerHTML=`<span class="title">Color Guide</span> <div class="flex cg-1 svelte-2q3hs4" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-2q3hs4" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-2q3hs4" id="partial">Partial
                <span class="bgInfo svelte-2q3hs4">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-2q3hs4" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-2q3hs4" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,c=y(),u=p("hr"),d=y(),f=p("span"),f.textContent="Categories",m=y(),g=p("div"),v=p("div"),w=p("b"),w.textContent="Equipment",T=y(),k=p("span"),D=p("b"),D.textContent="Slot:",A=y(),R=p("ul");for(let M=0;M<Ye.length;M+=1)Ye[M].c();q=y(),P=p("span"),C=p("b"),C.textContent="Stats:",N=y(),U=p("ul");for(let M=0;M<X.length;M+=1)X[M].c();ie=y(),z=p("div"),J=p("b"),J.textContent="Weapons",be=y(),$=p("span"),$.innerHTML="<b>Has Special:</b> <span>Whether the weapon has a Special Ability.</span>",ee=y(),x=p("span"),he=p("b"),he.textContent="Stat Intakes:",re=y(),V=p("ul");for(let M=0;M<W.length;M+=1)W[M].c();te=y(),B=p("div"),I=p("div"),F=p("b"),F.textContent="General",G=y(),O=p("span"),O.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item(s) can be
                    purchased at. &quot;Unpurchasable&quot; if it cannot be purchased,
                    equivalent to 0 for the game&#39;s purposes.</span>`,ce=y(),Ce=p("span"),Qe=p("b"),Qe.textContent="Colors:",Fe=y(),We=p("ul");for(let M=0;M<12;M+=1)Re[M].c();dt=y(),Se=p("span"),xe=p("b"),xe.textContent="Outline:",ut=y(),Ee=p("ul");for(let M=0;M<7;M+=1)ve[M].c();ne=y(),Ve=p("span"),it=p("b"),it.textContent="Release:",Te=y(),_e=p("ul");for(let M=0;M<je.length;M+=1)je[M].c();_(e,"class","title"),_(a,"class","flex fd-col fai-center"),_(f,"class","title"),_(w,"class","categoryTitle svelte-2q3hs4"),_(D,"class","svelte-2q3hs4"),_(R,"class","svelte-2q3hs4"),_(k,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(C,"class","svelte-2q3hs4"),_(U,"class","svelte-2q3hs4"),_(P,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(v,"class","flex fw fjc-center categories svelte-2q3hs4"),_(J,"class","categoryTitle svelte-2q3hs4"),_($,"class","flex fd-col smaller-fs limit-width svelte-2q3hs4"),_(he,"class","svelte-2q3hs4"),_(V,"class","svelte-2q3hs4"),_(x,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(z,"class","flex fw fjc-center categories svelte-2q3hs4"),_(g,"class","flex categoriesCont svelte-2q3hs4"),_(F,"class","categoryTitle svelte-2q3hs4"),_(O,"class","flex fd-col smaller-fs limit-width svelte-2q3hs4"),_(Qe,"class","svelte-2q3hs4"),_(We,"class","svelte-2q3hs4"),_(Ce,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(xe,"class","svelte-2q3hs4"),_(Ee,"class","svelte-2q3hs4"),_(Se,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(it,"class","svelte-2q3hs4"),_(_e,"class","svelte-2q3hs4"),_(Ve,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(I,"class","flex fw fjc-center categories svelte-2q3hs4"),_(B,"class","flex categoriesCont svelte-2q3hs4"),_(s,"class","flex fd-col smaller-fs svelte-2q3hs4"),_(s,"id","contents")},m(M,vt){S(M,e,vt),S(M,t,vt),S(M,s,vt),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(s,d),h(s,f),h(s,m),h(s,g),h(g,v),h(v,w),h(v,T),h(v,k),h(k,D),h(k,A),h(k,R);for(let j=0;j<Ye.length;j+=1)Ye[j]&&Ye[j].m(R,null);h(v,q),h(v,P),h(P,C),h(P,N),h(P,U);for(let j=0;j<X.length;j+=1)X[j]&&X[j].m(U,null);h(g,ie),h(g,z),h(z,J),h(z,be),h(z,$),h(z,ee),h(z,x),h(x,he),h(x,re),h(x,V);for(let j=0;j<W.length;j+=1)W[j]&&W[j].m(V,null);h(s,te),h(s,B),h(B,I),h(I,F),h(I,G),h(I,O),h(I,ce),h(I,Ce),h(Ce,Qe),h(Ce,Fe),h(Ce,We);for(let j=0;j<12;j+=1)Re[j]&&Re[j].m(We,null);h(I,dt),h(I,Se),h(Se,xe),h(Se,ut),h(Se,Ee);for(let j=0;j<7;j+=1)ve[j]&&ve[j].m(Ee,null);h(I,ne),h(I,Ve),h(Ve,it),h(Ve,Te),h(Ve,_e);for(let j=0;j<je.length;j+=1)je[j]&&je[j].m(_e,null)},p(M,[vt]){if(vt&0){Ie=ye(Object.values(ni));let j;for(j=0;j<Ie.length;j+=1){const Y=Il(M,Ie,j);X[j]?X[j].p(Y,vt):(X[j]=Sl(Y),X[j].c(),X[j].m(U,null))}for(;j<X.length;j+=1)X[j].d(1);X.length=Ie.length}if(vt&0){oe=ye(Object.values(si));let j;for(j=0;j<oe.length;j+=1){const Y=El(M,oe,j);W[j]?W[j].p(Y,vt):(W[j]=kl(Y),W[j].c(),W[j].m(V,null))}for(;j<W.length;j+=1)W[j].d(1);W.length=oe.length}if(vt&0){De=ye(Object.values(ti).slice(0,-1));let j;for(j=0;j<De.length;j+=1){const Y=Cl(M,De,j);je[j]?je[j].p(Y,vt):(je[j]=Tl(Y),je[j].c(),je[j].m(_e,null))}for(;j<je.length;j+=1)je[j].d(1);je.length=De.length}},i:ae,o:ae,d(M){M&&(E(e),E(t),E(s)),at(Ye,M),at(X,M),at(W,M),at(Re,M),at(ve,M),at(je,M)}}}class Vc extends ft{constructor(e){super(),ht(this,e,null,rm,st,{})}}function om(n){let e,t,s;return{c(){e=p("span"),e.textContent="Frontierdle Policy",t=y(),s=p("div"),s.innerHTML=`<hr/> <span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-932r7h"),_(s,"id","contents")},m(i,r){S(i,e,r),S(i,t,r),S(i,s,r)},p:ae,i:ae,o:ae,d(i){i&&(E(e),E(t),E(s))}}}class lm extends ft{constructor(e){super(),ht(this,e,null,om,st,{})}}function Nl(n){let e,t,s;return{c(){e=p("iconify-icon"),Ke(e,"icon","uil:exclamation"),Ke(e,"id","unseen"),Ke(e,"class","svelte-1o089h7")},m(i,r){S(i,e,r),s=!0},i(i){s||(i&&Xe(()=>{s&&(t||(t=Oe(e,Bt,{duration:150},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=Oe(e,Bt,{duration:150},!1)),t.run(0)),s=!1},d(i){i&&E(e),i&&t&&t.end()}}}function am(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v,w,T,k,D=!n[2]&&Nl();return{c(){e=p("button"),e.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',t=y(),s=p("a"),s.innerHTML=`Support me
    <img src="misc/kofi-badge.png" alt="" class="svelte-1o089h7"/>`,i=y(),r=p("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=y(),l=p("button"),a=p("iconify-icon"),c=y(),u=p("span"),u.textContent="Changelog",d=y(),D&&D.c(),f=y(),m=p("button"),m.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',g=y(),v=p("span"),w=H(n[0]),_(e,"class","info p-1 svelte-1o089h7"),_(e,"id","credits"),_(s,"class","info p-1 svelte-1o089h7"),_(s,"id","donate"),_(s,"href","https://ko-fi.com/xt8ss"),_(s,"target","_blank"),_(r,"class","info p-1 svelte-1o089h7"),_(r,"id","help"),Ke(a,"icon","octicon:log-16"),_(u,"class","tooltip"),_(u,"id","right"),_(l,"class","info svelte-1o089h7"),_(l,"id","changelog"),_(m,"class","info p-1 svelte-1o089h7"),_(m,"id","policy"),_(v,"class","info svelte-1o089h7"),_(v,"id","version")},m(A,R){S(A,e,R),S(A,t,R),S(A,s,R),S(A,i,R),S(A,r,R),S(A,o,R),S(A,l,R),h(l,a),h(l,c),h(l,u),h(l,d),D&&D.m(l,null),S(A,f,R),S(A,m,R),S(A,g,R),S(A,v,R),h(v,w),T||(k=[ke(e,"click",n[3]),ke(r,"click",n[4]),ke(l,"click",n[5]),ke(m,"click",n[6])],T=!0)},p(A,[R]){A[2]?D&&(St(),le(D,1,1,()=>{D=null}),kt()):D?R&4&&K(D,1):(D=Nl(),D.c(),K(D,1),D.m(l,null)),R&1&&de(w,A[0])},i(A){K(D)},o(A){le(D)},d(A){A&&(E(e),E(t),E(s),E(i),E(r),E(o),E(l),E(f),E(m),E(g),E(v)),D&&D.d(),T=!1,nt(k)}}}function cm(n,e,t){let s,i;fe(n,_t,u=>t(1,s=u)),fe(n,gs,u=>t(2,i=u));let{version:r}=e;const o=u=>{Ft(u),ue(_t,s.component=Xp,s)},l=u=>{Ft(u),ue(_t,s.component=Vc,s)},a=u=>{Ft(u),ue(_t,s.component=Qp,s),ue(gs,i=!0,i)},c=u=>{Ft(u),ue(_t,s.component=lm,s)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,s,i,o,l,a,c]}class um extends ft{constructor(e){super(),ht(this,e,cm,am,st,{version:0})}}function hm(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v,w;return{c(){e=p("div"),t=p("span"),t.textContent="Choose your category",s=y(),i=p("button"),r=p("img"),l=y(),a=p("span"),a.textContent="Equipment",c=y(),u=p("button"),d=p("img"),m=y(),g=p("span"),g.textContent="Weapons",_(t,"id","title"),_(t,"class","svelte-w2ulp9"),tt(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/7/7a/WhiteSpectralVanguardIcon.png")||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-w2ulp9"),i.disabled=n[0],_(i,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-w2ulp9"),Ue(i,"selected",n[1].mode=="equipment"),tt(d.src,f="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/9/95/TheJadeTwin.png")||_(d,"src",f),_(d,"alt",""),_(d,"class","svelte-w2ulp9"),u.disabled=n[0],_(u,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-w2ulp9"),Ue(u,"selected",n[1].mode=="weapons"),_(e,"class","chooseModeCont ff-bg flex fd-row fw border-tp br-1 bs svelte-w2ulp9")},m(T,k){S(T,e,k),h(e,t),h(e,s),h(e,i),h(i,r),h(i,l),h(i,a),h(e,c),h(e,u),h(u,d),h(u,m),h(u,g),v||(w=[ke(i,"click",n[2]),ke(u,"click",n[3])],v=!0)},p(T,[k]){k&1&&(i.disabled=T[0]),k&2&&Ue(i,"selected",T[1].mode=="equipment"),k&1&&(u.disabled=T[0]),k&2&&Ue(u,"selected",T[1].mode=="weapons")},i:ae,o:ae,d(T){T&&E(e),v=!1,nt(w)}}}function fm(n,e,t){let s,i;return fe(n,_n,l=>t(0,s=l)),fe(n,Et,l=>t(1,i=l)),[s,i,l=>{Ft(l),s||ue(Et,i.mode="equipment",i)},l=>{Ft(l),s||ue(Et,i.mode="weapons",i)}]}class dm extends ft{constructor(e){super(),ht(this,e,fm,hm,st,{})}}function Rl(n,e,t){const s=n.slice();return s[6]=e[t][0],s[7]=e[t][1],s[8]=e[t][2],s[10]=t,s}function Dl(n){let e,t,s=n[6]+"",i,r,o,l,a;function c(){return n[5](n[8],n[7])}return{c(){e=p("div"),t=p("button"),i=H(s),o=y(),t.disabled=r=n[8],_(t,"class","flex fjc-center fai-center light-hover svelte-1mwja36"),_(e,"class","ff-bg posrel border-tp br-1 svelte-1mwja36")},m(u,d){S(u,e,d),h(e,t),h(t,i),h(e,o),l||(a=[ke(t,"click",c),Vl(n[3].call(null,t,n[10]))],l=!0)},p(u,d){n=u,d&1&&s!==(s=n[6]+"")&&de(i,s),d&1&&r!==(r=n[8])&&(t.disabled=r)},d(u){u&&E(e),l=!1,nt(a)}}}function _m(n){let e,t=ye(n[0]),s=[];for(let i=0;i<t.length;i+=1)s[i]=Dl(Rl(n,t,i));return{c(){e=p("div");for(let i=0;i<s.length;i+=1)s[i].c();_(e,"class","options flex svelte-1mwja36")},m(i,r){S(i,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(i,[r]){if(r&7){t=ye(i[0]);let o;for(o=0;o<t.length;o+=1){const l=Rl(i,t,o);s[o]?s[o].p(l,r):(s[o]=Dl(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},i:ae,o:ae,d(i){i&&E(e),at(s,i)}}}function pm(n,e,t){let s;fe(n,_t,c=>t(1,s=c));const i=Zl();let{options:r=[],focus:o=null}=e;function l(c,u){u+1===o&&c.focus()}const a=(c,u)=>{c||(i("clicked"),u(),ue(_t,s.component=null,s))};return n.$$set=c=>{"options"in c&&t(0,r=c.options),"focus"in c&&t(4,o=c.focus)},[r,s,i,l,o,a]}class Yc extends ft{constructor(e){super(),ht(this,e,pm,_m,st,{options:0,focus:4})}}function mm(n){let e,t,s,i,r,o,l,a,c,u,d,f,m;return f=new Yc({props:{options:[["Don't show again",n[3]],["Maybe later",n[4]]],focus:2}}),f.$on("clicked",n[5]),{c(){e=p("span"),e.textContent="Support Me",t=y(),s=p("div"),i=p("p"),i.textContent="Thank you for your continuous use of my site!",r=y(),o=p("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,l=y(),a=p("p"),a.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,c=y(),u=p("a"),u.innerHTML='<img src="misc/kofi-badge.png" alt="Ko-fi" class="svelte-1wbcr77"/>',d=y(),He(f.$$.fragment),_(e,"class","title"),_(u,"class","flex br-1 bg-change light-hover svelte-1wbcr77"),_(u,"href","https://ko-fi.com/xt8ss"),_(u,"target","_blank"),_(s,"class","flex fd-col fai-center smaller-fs svelte-1wbcr77"),_(s,"id","contents")},m(g,v){S(g,e,v),S(g,t,v),S(g,s,v),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(s,d),Be(f,s,null),m=!0},p(g,[v]){const w={};v&2&&(w.options=[["Don't show again",g[3]],["Maybe later",g[4]]]),f.$set(w)},i(g){m||(K(f.$$.fragment,g),m=!0)},o(g){le(f.$$.fragment,g),m=!1},d(g){g&&(E(e),E(t),E(s)),Ge(f)}}}function gm(n,e,t){let s,i;fe(n,ln,c=>t(1,s=c)),fe(n,_t,c=>t(2,i=c));let r=!1;const o=()=>ue(ln,s.showAgain=!1,s),l=()=>ue(ln,s.timesDenied++,s),a=()=>t(0,r=!0);return n.$$.update=()=>{n.$$.dirty&7&&i.component===null&&!r&&ue(ln,s.timesDenied++,s)},[r,s,i,o,l,a]}class vm extends ft{constructor(e){super(),ht(this,e,gm,mm,st,{})}}function Al(n){let e,t;return{c(){e=p("span"),t=H(n[4]),_(e,"class","ff-item svelte-1w4quf3")},m(s,i){S(s,e,i),h(e,t)},p(s,i){i&16&&de(t,s[4])},d(s){s&&E(e)}}}function ym(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v,w,T,k,D,A,R,q,P,C,N,U,ie,z,J,be,$,ee,x,he,re,V,te,B,I,F,G,O,ce,Ce,Qe,Fe,We,dt,Se,xe,ut,Ee,ne,Ve,it,Te,_e,Ne,Ye,Ie;function X(Y){n[8](Y)}function oe(Y){n[9](Y)}let W={size:"4.5"};n[0]!==void 0&&(W.checked=n[0]),n[0]!==void 0&&(W.forced=n[0]),d=new Os({props:W}),$e.push(()=>Nt(d,"checked",X)),$e.push(()=>Nt(d,"forced",oe)),d.$on("toggle",n[10]);function se(Y){n[11](Y)}function Re(Y){n[12](Y)}let Q={size:"4.5"};n[3]!==void 0&&(Q.checked=n[3]),n[3]!==void 0&&(Q.forced=n[3]),k=new Os({props:Q}),$e.push(()=>Nt(k,"checked",se)),$e.push(()=>Nt(k,"forced",Re)),k.$on("toggle",n[13]);function ve(Y){n[14](Y)}function De(Y){n[15](Y)}let je={noGuess:!0};n[6]!==void 0&&(je.noGuessMode=n[6]),n[4]!==void 0&&(je.noGuessItem=n[4]),N=new Uc({props:je}),$e.push(()=>Nt(N,"noGuessMode",ve)),$e.push(()=>Nt(N,"noGuessItem",De));let M=n[4]&&Al(n);function vt(Y){n[16](Y)}let j={size:"4.5",disabled:!n[4]};return n[5]!==void 0&&(j.checked=n[5]),B=new Os({props:j}),$e.push(()=>Nt(B,"checked",vt)),B.$on("toggle",n[17]),_e=new Yc({props:{options:[["Create",n[7],!n[4]]]}}),{c(){e=p("div"),e.textContent="Create a Room",t=y(),s=p("div"),i=p("hr"),r=y(),o=p("div"),l=p("span"),l.textContent="Mode:",a=y(),c=p("div"),u=p("span"),He(d.$$.fragment),g=y(),v=p("span"),v.textContent="Equipment",w=y(),T=p("span"),He(k.$$.fragment),R=y(),q=p("span"),q.textContent="Weapons",P=y(),C=p("div"),He(N.$$.fragment),z=y(),J=p("div"),be=p("span"),be.textContent="Item:",$=y(),M&&M.c(),ee=y(),x=p("hr"),he=y(),re=p("div"),V=p("span"),V.innerHTML='<button class="flex posrel no-bg-change"><iconify-icon icon="eva:info-outline" id="infoIcon" class="svelte-1w4quf3"></iconify-icon> <span class="tooltip" id="left">Does not affect attempt count</span></button> <span>Nightmare Mode:</span>',te=y(),He(B.$$.fragment),F=y(),G=p("hr"),O=y(),ce=p("div"),Ce=p("span"),Ce.textContent="Max Player Count:",Qe=y(),Fe=p("input"),dt=y(),Se=p("div"),xe=p("span"),xe.textContent="Max Attempt Count:",ut=y(),Ee=p("input"),Ve=y(),it=p("hr"),Te=y(),He(_e.$$.fragment),_(e,"class","title"),_(u,"class","flex fai-center cg-1"),_(T,"class","flex fai-center cg-1"),_(c,"class","flex fd-col rg-1"),_(o,"class","flex fjc-center fai-center svelte-1w4quf3"),_(o,"id","modeChooser"),_(C,"class","flex fjc-center posrel"),_(J,"class","flex fjc-center fai-center cg-1 svelte-1w4quf3"),_(J,"id","itemName"),_(V,"class","flex fai-center cg-1"),_(re,"class","flex fjc-center fai-center cg-1"),_(Fe,"type","number"),_(Fe,"placeholder","4"),Fe.disabled=We=!n[4],_(Fe,"class","border-tp br-1 svelte-1w4quf3"),_(ce,"class","flex fjc-center fai-center cg-1"),_(Ee,"type","number"),_(Ee,"placeholder","7"),Ee.disabled=ne=!n[4],_(Ee,"class","border-tp br-1 svelte-1w4quf3"),_(Se,"class","flex fjc-center fai-center cg-1"),_(s,"class","flex fd-col smaller-fs svelte-1w4quf3"),_(s,"id","contents")},m(Y,Je){S(Y,e,Je),S(Y,t,Je),S(Y,s,Je),h(s,i),h(s,r),h(s,o),h(o,l),h(o,a),h(o,c),h(c,u),Be(d,u,null),h(u,g),h(u,v),h(c,w),h(c,T),Be(k,T,null),h(T,R),h(T,q),h(s,P),h(s,C),Be(N,C,null),h(s,z),h(s,J),h(J,be),h(J,$),M&&M.m(J,null),h(s,ee),h(s,x),h(s,he),h(s,re),h(re,V),h(re,te),Be(B,re,null),h(s,F),h(s,G),h(s,O),h(s,ce),h(ce,Ce),h(ce,Qe),h(ce,Fe),Ns(Fe,n[1]),h(s,dt),h(s,Se),h(Se,xe),h(Se,ut),h(Se,Ee),Ns(Ee,n[2]),h(s,Ve),h(s,it),h(s,Te),Be(_e,s,null),Ne=!0,Ye||(Ie=[ke(Fe,"input",n[18]),ke(Ee,"input",n[19])],Ye=!0)},p(Y,[Je]){const xn={};!f&&Je&1&&(f=!0,xn.checked=Y[0],Tt(()=>f=!1)),!m&&Je&1&&(m=!0,xn.forced=Y[0],Tt(()=>m=!1)),d.$set(xn);const Bn={};!D&&Je&8&&(D=!0,Bn.checked=Y[3],Tt(()=>D=!1)),!A&&Je&8&&(A=!0,Bn.forced=Y[3],Tt(()=>A=!1)),k.$set(Bn);const Gn={};!U&&Je&64&&(U=!0,Gn.noGuessMode=Y[6],Tt(()=>U=!1)),!ie&&Je&16&&(ie=!0,Gn.noGuessItem=Y[4],Tt(()=>ie=!1)),N.$set(Gn),Y[4]?M?M.p(Y,Je):(M=Al(Y),M.c(),M.m(J,null)):M&&(M.d(1),M=null);const Hn={};Je&16&&(Hn.disabled=!Y[4]),!I&&Je&32&&(I=!0,Hn.checked=Y[5],Tt(()=>I=!1)),B.$set(Hn),(!Ne||Je&16&&We!==(We=!Y[4]))&&(Fe.disabled=We),Je&2&&Ms(Fe.value)!==Y[1]&&Ns(Fe,Y[1]),(!Ne||Je&16&&ne!==(ne=!Y[4]))&&(Ee.disabled=ne),Je&4&&Ms(Ee.value)!==Y[2]&&Ns(Ee,Y[2]);const Ss={};Je&16&&(Ss.options=[["Create",Y[7],!Y[4]]]),_e.$set(Ss)},i(Y){Ne||(K(d.$$.fragment,Y),K(k.$$.fragment,Y),K(N.$$.fragment,Y),K(B.$$.fragment,Y),K(_e.$$.fragment,Y),Ne=!0)},o(Y){le(d.$$.fragment,Y),le(k.$$.fragment,Y),le(N.$$.fragment,Y),le(B.$$.fragment,Y),le(_e.$$.fragment,Y),Ne=!1},d(Y){Y&&(E(e),E(t),E(s)),Ge(d),Ge(k),Ge(N),M&&M.d(),Ge(B),Ge(_e),Ye=!1,nt(Ie)}}}function bm(n,e,t){let s,i;fe(n,rr,C=>t(20,i=C));let r=!0,o=!1,l="",a=!1,c=4,u=7;function d(){ue(rr,i=1,i);let C={mode:s,item:l,hardMode:a,playerCount:c,attemptCount:u,players:{}};Fc(ps(nr(Hc),`rooms/${i}`),C).then(()=>{})}function f(C){r=C,t(0,r)}function m(C){r=C,t(0,r)}const g=C=>{t(0,r=C.detail.checked),t(3,o=!1),t(4,l="")};function v(C){o=C,t(3,o)}function w(C){o=C,t(3,o)}const T=C=>{t(3,o=C.detail.checked),t(0,r=!1),t(4,l="")};function k(C){s=C,t(6,s),t(0,r)}function D(C){l=C,t(4,l)}function A(C){a=C,t(5,a)}const R=C=>t(5,a=C.detail.checked);function q(){c=Ms(this.value),t(1,c)}function P(){u=Ms(this.value),t(2,u)}return n.$$.update=()=>{n.$$.dirty&2&&c<1&&t(1,c=1),n.$$.dirty&2&&c>6&&t(1,c=6),n.$$.dirty&2&&c&&t(1,c=Math.floor(c)),n.$$.dirty&1&&t(6,s=r?"equipment":"weapons"),n.$$.dirty&4&&u<1&&t(2,u=1),n.$$.dirty&4&&u>7&&t(2,u=7),n.$$.dirty&4&&u&&t(2,u=Math.floor(u))},[r,c,u,o,l,a,s,d,f,m,g,v,w,T,k,D,A,R,q,P]}class wm extends ft{constructor(e){super(),ht(this,e,bm,ym,st,{})}}const{document:Qn,window:nn}=eu;function Pl(n,e,t){const s=n.slice();return s[79]=e[t],s}function Ol(n,e,t){const s=n.slice();return s[79]=e[t],s}function Ml(n){let e;return{c(){e=p("link"),_(e,"rel","preload"),_(e,"as","image"),_(e,"href",n[79])},m(t,s){S(t,e,s)},p:ae,d(t){t&&E(e)}}}function Ll(n){let e;return{c(){e=p("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
                transition: filter 0.3s;
            }
            body > :not(.backgrounds, .promptCont, .info),
            .backgrounds > img {
                filter: blur(0.75rem);
                pointer-events: none;
            }
            .info:not(#zoomLevel, #version) {
                filter: blur(0.375vh);
                pointer-events: none;
            }`},m(t,s){S(t,e,s)},d(t){t&&E(e)}}}function Fl(n){let e,t;return{c(){e=p("img"),_(e,"class","background svelte-105j5xd"),tt(e.src,t=n[79])||_(e,"src",t),_(e,"alt",""),Ue(e,"active",n[32].indexOf(n[79])==n[23])},m(s,i){S(s,e,i)},p(s,i){i[0]&8388608|i[1]&2&&Ue(e,"active",s[32].indexOf(s[79])==s[23])},d(s){s&&E(e)}}}function ql(n){let e,t,s=Math.floor(n[29][n[2]]*100)+"",i,r,o,l;return{c(){e=p("span"),t=H("Zoom: "),i=H(s),r=p("b"),r.textContent="%",_(e,"class","info svelte-105j5xd"),_(e,"id","zoomLevel")},m(a,c){S(a,e,c),h(e,t),h(e,i),h(e,r),l=!0},p(a,c){(!l||c[0]&4)&&s!==(s=Math.floor(a[29][a[2]]*100)+"")&&de(i,s)},i(a){l||(a&&Xe(()=>{l&&(o||(o=Oe(e,Bt,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=Oe(e,Bt,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&E(e),a&&o&&o.end()}}}function Wl(n){let e,t,s,i,r,o,l,a,c=n[9].muted?"Muted":"Unmuted",u,d,f,m,g,v,w,T,k,D,A,R=li(n[20],n[21],n[22])+"",q,P,C,N,U,ie,z,J,be,$,ee,x,he,re,V,te=n[3].includes("equipment")?"stat":" stat intake",B,I,F,G,O,ce,Ce,Qe,Fe,We,dt,Se,xe,ut,Ee,ne,Ve,it;U=new dm({}),ce=new Os({props:{size:"5",checked:n[5],disabled:n[6].chosenItems.length!=0}}),ce.$on("toggle",n[52]);let Te=!n[6].gameWin&&!n[6].gameOver&&jl(n),_e=(n[6].gameWin||n[6].gameOver)&&xl(n);function Ne(W){n[55](W)}let Ye={};n[12]!==void 0&&(Ye.dailyItemsData=n[12]),We=new Pp({props:Ye}),$e.push(()=>Nt(We,"dailyItemsData",Ne));let Ie=n[13][n[3]]&&Bl(n),X=n[24].component&&n[24].complete&&Gl(n),oe=n[24].component&&!n[24].complete&&Hl(n);return{c(){e=p("main"),t=p("div"),s=p("div"),i=p("button"),r=p("iconify-icon"),l=y(),a=p("span"),u=H(c),d=y(),f=p("button"),m=p("img"),v=y(),w=p("span"),T=H(`Next items in...
                    `),k=p("br"),D=y(),A=new Jl(!1),q=y(),P=p("div"),C=p("button"),C.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-105j5xd"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',N=y(),He(U.$$.fragment),ie=y(),z=y(),J=p("div"),be=p("button"),$=p("iconify-icon"),ee=y(),x=p("span"),he=H(`No armor (more damage taken).
                    `),re=p("br"),V=H(`
                    No `),B=H(te),I=H(` / avg.
                    cost / color clues.`),F=y(),G=p("span"),G.textContent="Nightmare Mode",O=y(),He(ce.$$.fragment),Ce=y(),Te&&Te.c(),Qe=y(),_e&&_e.c(),Fe=y(),He(We.$$.fragment),Se=y(),Ie&&Ie.c(),xe=y(),X&&X.c(),ut=y(),oe&&oe.c(),Ee=wt(),Ke(r,"icon",o="f7:speaker-"+(n[9].muted?"slash":"2")+"-fill"),Ke(r,"class","svelte-105j5xd"),_(a,"class","tooltip"),_(a,"id","bottom"),_(i,"class","flex light-hover svelte-105j5xd"),_(s,"class","iconToggle ff-bg posrel border-tp br-1 bs svelte-105j5xd"),tt(m.src,g="frontierdle.svg")||_(m,"src",g),_(m,"alt","Frontierdle"),_(m,"class","svelte-105j5xd"),A.a=null,_(w,"class","tooltip svelte-105j5xd"),_(w,"id","bottom"),_(f,"class","iconCont ff-bg posrel border-tp br-1 bs no-bg-change svelte-105j5xd"),_(C,"class","flex posrel light-hover svelte-105j5xd"),_(P,"class","iconToggle ff-bg border-tp br-1 bs svelte-105j5xd"),_(t,"class","upperMenu flex fai-center svelte-105j5xd"),Ke($,"icon","eva:info-outline"),Ke($,"id","info"),Ke($,"class","svelte-105j5xd"),_(x,"class","tooltip svelte-105j5xd"),_(x,"id","bottom"),_(be,"class","flex posrel no-bg-change"),_(J,"class","hardModeCont ff-bg flex fai-center cg-1 border-tp br-1 bs svelte-105j5xd"),_(e,"class","flex fd-col fai-center posrel svelte-105j5xd")},m(W,se){S(W,e,se),h(e,t),h(t,s),h(s,i),h(i,r),h(i,l),h(i,a),h(a,u),h(t,d),h(t,f),h(f,m),h(f,v),h(f,w),h(w,T),h(w,k),h(w,D),A.m(R,w),h(t,q),h(t,P),h(P,C),h(e,N),Be(U,e,null),h(e,ie),h(e,z),h(e,J),h(J,be),h(be,$),h(be,ee),h(be,x),h(x,he),h(x,re),h(x,V),h(x,B),h(x,I),h(J,F),h(J,G),h(J,O),Be(ce,J,null),h(e,Ce),Te&&Te.m(e,null),h(e,Qe),_e&&_e.m(e,null),h(e,Fe),Be(We,e,null),h(e,Se),Ie&&Ie.m(e,null),S(W,xe,se),X&&X.m(W,se),S(W,ut,se),oe&&oe.m(W,se),S(W,Ee,se),ne=!0,Ve||(it=[ke(i,"click",n[49]),ke(C,"click",n[50])],Ve=!0)},p(W,se){(!ne||se[0]&512&&o!==(o="f7:speaker-"+(W[9].muted?"slash":"2")+"-fill"))&&Ke(r,"icon",o),(!ne||se[0]&512)&&c!==(c=W[9].muted?"Muted":"Unmuted")&&de(u,c),(!ne||se[0]&7340032)&&R!==(R=li(W[20],W[21],W[22])+"")&&A.p(R),(!ne||se[0]&8)&&te!==(te=W[3].includes("equipment")?"stat":" stat intake")&&de(B,te);const Re={};se[0]&32&&(Re.checked=W[5]),se[0]&64&&(Re.disabled=W[6].chosenItems.length!=0),ce.$set(Re),!W[6].gameWin&&!W[6].gameOver?Te?(Te.p(W,se),se[0]&64&&K(Te,1)):(Te=jl(W),Te.c(),K(Te,1),Te.m(e,Qe)):Te&&(St(),le(Te,1,1,()=>{Te=null}),kt()),W[6].gameWin||W[6].gameOver?_e?(_e.p(W,se),se[0]&64&&K(_e,1)):(_e=xl(W),_e.c(),K(_e,1),_e.m(e,Fe)):_e&&(St(),le(_e,1,1,()=>{_e=null}),kt());const Q={};!dt&&se[0]&4096&&(dt=!0,Q.dailyItemsData=W[12],Tt(()=>dt=!1)),We.$set(Q),W[13][W[3]]?Ie?Ie.p(W,se):(Ie=Bl(W),Ie.c(),Ie.m(e,null)):Ie&&(Ie.d(1),Ie=null),W[24].component&&W[24].complete?X?(X.p(W,se),se[0]&16777216&&K(X,1)):(X=Gl(W),X.c(),K(X,1),X.m(ut.parentNode,ut)):X&&(St(),le(X,1,1,()=>{X=null}),kt()),W[24].component&&!W[24].complete?oe?(oe.p(W,se),se[0]&16777216&&K(oe,1)):(oe=Hl(W),oe.c(),K(oe,1),oe.m(Ee.parentNode,Ee)):oe&&(St(),le(oe,1,1,()=>{oe=null}),kt())},i(W){ne||(K(U.$$.fragment,W),K(ce.$$.fragment,W),K(Te),K(_e),K(We.$$.fragment,W),K(X),K(oe),ne=!0)},o(W){le(U.$$.fragment,W),le(ce.$$.fragment,W),le(Te),le(_e),le(We.$$.fragment,W),le(X),le(oe),ne=!1},d(W){W&&(E(e),E(xe),E(ut),E(Ee)),Ge(U),Ge(ce),Te&&Te.d(),_e&&_e.d(),Ge(We),Ie&&Ie.d(),X&&X.d(W),oe&&oe.d(W),Ve=!1,nt(it)}}}function jl(n){let e,t,s;function i(o){n[53](o)}let r={};return n[19][n[3]]!==void 0&&(r.gameNumber=n[19][n[3]]),e=new jp({props:r}),$e.push(()=>Nt(e,"gameNumber",i)),{c(){He(e.$$.fragment)},m(o,l){Be(e,o,l),s=!0},p(o,l){const a={};!t&&l[0]&524296&&(t=!0,a.gameNumber=o[19][o[3]],Tt(()=>t=!1)),e.$set(a)},i(o){s||(K(e.$$.fragment,o),s=!0)},o(o){le(e.$$.fragment,o),s=!1},d(o){Ge(e,o)}}}function xl(n){let e,t,s=n[6].gameWin?"Fantastic!":"Farewell...",i,r,o,l,a,c=n[6].gameWin?"won":"lost",u,d,f,m,g,v,w,T,k,D,A,R,q,P,C=n[12][n[3]].name+"",N,U,ie,z,J,be,$,ee=li(n[20],n[21],n[22])+"",x,he,re,V,te,B,I;function F(O){n[54](O)}let G={};return n[19][n[3]]!==void 0&&(G.gameNumber=n[19][n[3]]),re=new Gp({props:G}),$e.push(()=>Nt(re,"gameNumber",F)),B=new zc({}),{c(){e=p("div"),t=p("span"),i=H(s),r=y(),o=p("img"),a=H(`
                    You `),u=H(c),d=H("!"),f=y(),m=p("span"),m.textContent="Today's item was...",g=y(),v=p("div"),w=p("a"),T=p("img"),D=y(),A=p("iconify-icon"),q=y(),P=p("span"),N=H(C),U=y(),ie=p("span"),z=H(`Next item available in...
                    `),J=p("br"),be=y(),$=p("span"),he=y(),He(re.$$.fragment),te=y(),He(B.$$.fragment),tt(o.src,l=n[6].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||_(o,"src",l),_(o,"id","gameFinishIcon"),_(o,"alt",""),_(o,"class","svelte-105j5xd"),_(t,"class","flex fai-center svelte-105j5xd"),_(t,"id","gameFinishMessage"),_(m,"class","smaller-fs"),tt(T.src,k=Zt+n[12][n[3]].image)||_(T,"src",k),_(T,"alt",""),_(T,"class","svelte-105j5xd"),Ke(A,"icon","tabler:link"),Ke(A,"class","svelte-105j5xd"),_(w,"class","flex fjc-center fai-center svelte-105j5xd"),_(w,"href",R=Ln+n[12][n[3]].link),_(w,"target","_blank"),_(v,"class","itemImg ff-item flex svelte-105j5xd"),_(v,"id","dailyItemImg"),_(P,"class","ff-item itemName svelte-105j5xd"),_(P,"id","dailyItemName"),_($,"class","ff-item svelte-105j5xd"),_($,"id","nextItemTime"),_(ie,"class","flex fd-col svelte-105j5xd"),_(ie,"id","nextItemCont"),_(e,"class","gameFinishCont ff-bg flex fd-col fai-center rg-1 border-tp br-1 bs svelte-105j5xd")},m(O,ce){S(O,e,ce),h(e,t),h(t,i),h(t,r),h(t,o),h(t,a),h(t,u),h(t,d),h(e,f),h(e,m),h(e,g),h(e,v),h(v,w),h(w,T),h(w,D),h(w,A),h(e,q),h(e,P),h(P,N),h(e,U),h(e,ie),h(ie,z),h(ie,J),h(ie,be),h(ie,$),$.innerHTML=ee,S(O,he,ce),Be(re,O,ce),S(O,te,ce),Be(B,O,ce),I=!0},p(O,ce){(!I||ce[0]&64)&&s!==(s=O[6].gameWin?"Fantastic!":"Farewell...")&&de(i,s),(!I||ce[0]&64&&!tt(o.src,l=O[6].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&_(o,"src",l),(!I||ce[0]&64)&&c!==(c=O[6].gameWin?"won":"lost")&&de(u,c),(!I||ce[0]&4104&&!tt(T.src,k=Zt+O[12][O[3]].image))&&_(T,"src",k),(!I||ce[0]&4104&&R!==(R=Ln+O[12][O[3]].link))&&_(w,"href",R),(!I||ce[0]&4104)&&C!==(C=O[12][O[3]].name+"")&&de(N,C),(!I||ce[0]&7340032)&&ee!==(ee=li(O[20],O[21],O[22])+"")&&($.innerHTML=ee);const Ce={};!V&&ce[0]&524296&&(V=!0,Ce.gameNumber=O[19][O[3]],Tt(()=>V=!1)),re.$set(Ce)},i(O){I||(O&&Xe(()=>{I&&(x||(x=Oe(e,Bt,{duration:150},!0)),x.run(1))}),K(re.$$.fragment,O),K(B.$$.fragment,O),I=!0)},o(O){O&&(x||(x=Oe(e,Bt,{duration:150},!1)),x.run(0)),le(re.$$.fragment,O),le(B.$$.fragment,O),I=!1},d(O){O&&(E(e),E(he),E(te)),O&&x&&x.end(),Ge(re,O),Ge(B,O)}}}function Bl(n){let e,t,s,i,r,o,l,a,c,u,d,f=n[13][n[3]].name+"",m;return{c(){e=p("div"),t=H(`Yesterday's item was...
                `),s=p("div"),i=p("a"),r=p("img"),l=y(),a=p("iconify-icon"),u=y(),d=p("span"),m=H(f),tt(r.src,o=Zt+n[13][n[3]].image)||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-105j5xd"),Ke(a,"icon","tabler:link"),Ke(a,"class","svelte-105j5xd"),_(i,"class","flex fjc-center fai-center svelte-105j5xd"),_(i,"href",c=Ln+n[13][n[3]].link),_(i,"target","_blank"),_(s,"class","itemImg ff-item flex svelte-105j5xd"),_(s,"id","previousItemImg"),_(d,"class","ff-item itemName svelte-105j5xd"),_(d,"id","previousItemName"),_(e,"class","previousItemCont ff-bg flex fd-col fai-center rg-1 border-tp br-1 bs svelte-105j5xd")},m(g,v){S(g,e,v),h(e,t),h(e,s),h(s,i),h(i,r),h(i,l),h(i,a),h(e,u),h(e,d),h(d,m)},p(g,v){v[0]&8200&&!tt(r.src,o=Zt+g[13][g[3]].image)&&_(r,"src",o),v[0]&8200&&c!==(c=Ln+g[13][g[3]].link)&&_(i,"href",c),v[0]&8200&&f!==(f=g[13][g[3]].name+"")&&de(m,f)},d(g){g&&E(e)}}}function Gl(n){let e,t,s,i,r;var o=n[24].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=Ls(o,l())),{c(){e=p("div"),t&&He(t.$$.fragment),_(e,"class","promptCont")},m(a,c){S(a,e,c),t&&Be(t,e,null),n[56](e),s=!0,i||(r=ke(e,"click",n[57]),i=!0)},p(a,c){if(c[0]&16777216&&o!==(o=a[24].component)){if(t){St();const u=t;le(u.$$.fragment,1,0,()=>{Ge(u,1)}),kt()}o?(t=Ls(o,l()),He(t.$$.fragment),K(t.$$.fragment,1),Be(t,e,null)):t=null}},i(a){s||(t&&K(t.$$.fragment,a),s=!0)},o(a){t&&le(t.$$.fragment,a),s=!1},d(a){a&&E(e),t&&Ge(t),n[56](null),i=!1,r()}}}function Hl(n){let e,t,s,i,r,o,l;var a=n[24].component;function c(u,d){return{props:{prompted:!0}}}return a&&(s=Ls(a,c())),{c(){e=p("div"),t=p("div"),s&&He(s.$$.fragment),_(t,"class","flex fd-col border-tp br-1 bs"),_(e,"class","promptCont")},m(u,d){S(u,e,d),h(e,t),s&&Be(s,t,null),n[59](e),r=!0,o||(l=[ke(t,"introstart",n[58]),ke(e,"click",n[60])],o=!0)},p(u,d){if(d[0]&16777216&&a!==(a=u[24].component)){if(s){St();const f=s;le(f.$$.fragment,1,0,()=>{Ge(f,1)}),kt()}a?(s=Ls(a,c()),He(s.$$.fragment),K(s.$$.fragment,1),Be(s,t,null)):s=null}},i(u){r||(s&&K(s.$$.fragment,u),u&&Xe(()=>{r&&(i||(i=Oe(t,rt,{duration:200},!0)),i.run(1))}),r=!0)},o(u){s&&le(s.$$.fragment,u),u&&(i||(i=Oe(t,rt,{duration:200},!1)),i.run(0)),r=!1},d(u){u&&E(e),s&&Ge(s),u&&i&&i.end(),n[59](null),o=!1,nt(l)}}}function Cm(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v,w,T,k,D,A,R,q,P,C,N,U,ie=on(n[8])&&on(n[7])&&n[10],z,J,be,$;Xe(n[43]);let ee=ye(n[32]),x=[];for(let I=0;I<ee.length;I+=1)x[I]=Ml(Ol(n,ee,I));let he=n[24].component&&Ll(),re=ye(n[32]),V=[];for(let I=0;I<re.length;I+=1)V[I]=Fl(Pl(n,re,I));let te=n[11]&&ql(n);N=new um({props:{version:lr}});let B=ie&&Wl(n);return{c(){e=y();for(let I=0;I<x.length;I+=1)x[I].c();t=wt(),he&&he.c(),s=wt(),i=y(),r=p("div"),o=p("audio"),c=y(),u=p("audio"),m=y(),g=p("audio"),T=y(),k=p("audio"),R=y(),q=p("div");for(let I=0;I<V.length;I+=1)V[I].c();P=y(),te&&te.c(),C=y(),He(N.$$.fragment),U=y(),B&&B.c(),z=wt(),tt(o.src,l="audio/lucky.mp3")||_(o,"src",l),o.muted=a=n[9].muted,tt(u.src,d="audio/farewell.mp3")||_(u,"src",d),u.muted=f=n[9].muted,tt(g.src,v="audio/heDidItAgain.mp3")||_(g,"src",v),g.muted=w=n[9].muted,tt(k.src,D="audio/fishCatch.mp3")||_(k,"src",D),k.muted=A=n[9].muted,_(q,"class","backgrounds")},m(I,F){S(I,e,F);for(let G=0;G<x.length;G+=1)x[G]&&x[G].m(Qn.head,null);h(Qn.head,t),he&&he.m(Qn.head,null),h(Qn.head,s),S(I,i,F),S(I,r,F),h(r,o),n[45](o),h(r,c),h(r,u),n[46](u),h(r,m),h(r,g),n[47](g),h(r,T),h(r,k),n[48](k),S(I,R,F),S(I,q,F);for(let G=0;G<V.length;G+=1)V[G]&&V[G].m(q,null);S(I,P,F),te&&te.m(I,F),S(I,C,F),Be(N,I,F),S(I,U,F),B&&B.m(I,F),S(I,z,F),J=!0,be||($=[ke(nn,"beforeunload",n[39]),ke(nn,"storage",n[40]),ke(nn,"wheel",n[41],{passive:!1}),ke(nn,"keydown",n[42]),ke(nn,"resize",n[43]),ke(Qn,"visibilitychange",n[44])],be=!0)},p(I,F){if(F[1]&2){ee=ye(I[32]);let G;for(G=0;G<ee.length;G+=1){const O=Ol(I,ee,G);x[G]?x[G].p(O,F):(x[G]=Ml(O),x[G].c(),x[G].m(t.parentNode,t))}for(;G<x.length;G+=1)x[G].d(1);x.length=ee.length}if(I[24].component?he||(he=Ll(),he.c(),he.m(s.parentNode,s)):he&&(he.d(1),he=null),(!J||F[0]&512&&a!==(a=I[9].muted))&&(o.muted=a),(!J||F[0]&512&&f!==(f=I[9].muted))&&(u.muted=f),(!J||F[0]&512&&w!==(w=I[9].muted))&&(g.muted=w),(!J||F[0]&512&&A!==(A=I[9].muted))&&(k.muted=A),F[0]&8388608|F[1]&2){re=ye(I[32]);let G;for(G=0;G<re.length;G+=1){const O=Pl(I,re,G);V[G]?V[G].p(O,F):(V[G]=Fl(O),V[G].c(),V[G].m(q,null))}for(;G<V.length;G+=1)V[G].d(1);V.length=re.length}I[11]?te?(te.p(I,F),F[0]&2048&&K(te,1)):(te=ql(I),te.c(),K(te,1),te.m(C.parentNode,C)):te&&(St(),le(te,1,1,()=>{te=null}),kt()),F[0]&1408&&(ie=on(I[8])&&on(I[7])&&I[10]),ie?B?(B.p(I,F),F[0]&1408&&K(B,1)):(B=Wl(I),B.c(),K(B,1),B.m(z.parentNode,z)):B&&(St(),le(B,1,1,()=>{B=null}),kt())},i(I){J||(K(te),K(N.$$.fragment,I),K(B),J=!0)},o(I){le(te),le(N.$$.fragment,I),le(B),J=!1},d(I){I&&(E(e),E(i),E(r),E(R),E(q),E(P),E(C),E(U),E(z)),at(x,I),E(t),he&&he.d(I),E(s),n[45](null),n[46](null),n[47](null),n[48](null),at(V,I),te&&te.d(I),Ge(N,I),B&&B.d(I),be=!1,nt($)}}}let lr="v1.1.2";function li(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function Em(n,e,t){let s,i,r,o,l,a,c,u,d,f,m,g,v,w,T,k,D,A;fe(n,Rn,b=>t(4,o=b)),fe(n,dn,b=>t(5,l=b)),fe(n,ri,b=>t(38,a=b)),fe(n,yt,b=>t(6,c=b)),fe(n,Uo,b=>t(7,u=b)),fe(n,ii,b=>t(8,d=b)),fe(n,Et,b=>t(9,f=b)),fe(n,_t,b=>t(24,m=b)),fe(n,gs,b=>t(67,g=b)),fe(n,Mt,b=>t(25,v=b)),fe(n,ln,b=>t(68,w=b)),fe(n,or,b=>t(69,T=b)),fe(n,rr,b=>t(26,k=b)),fe(n,oi,b=>t(27,D=b)),fe(n,_n,b=>t(28,A=b));let R,q,P=!1,C=7,N=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],U=!1,ie,z,J={},be={},$=["version","builds","changelogSeen","fd-userId"],ee,x,he,re,V,te=0;hu(()=>{if(t(10,P=!0),!T)ue(or,T=!0,T),ue(_t,m.component=Vc,m);else if(w.showAgain){for(let Ae in o)te+=o[Ae].gamesPlayed;let b=Math.floor((te-w.lastGamesPlayed)/3);b&&b>=w.timesDenied&&(ue(ln,w.lastGamesPlayed=te,w),ue(_t,m.component=vm,m))}});function B(){ie=setTimeout(()=>{t(11,U=!1)},750)}function I(){clearTimeout(ie),t(11,U=!0),B()}let F={equipment:19816,weapons:19818},G,O,ce=58,Ce=58,Qe=58,Fe;function We(){let b=0;clearInterval(Fe),G=Date.now()/1e3/60/60/24+b,t(19,O={equipment:Math.floor(G)-F.equipment,weapons:Math.floor(G)-F.weapons}),setTimeout(()=>{for(let Ae of["equipment","weapons"])v[Ae].gameNum!=O[Ae]+1&&(ue(yt,c=Dt.currentGameData[f.mode],c),ue(Mt,v[Ae]=Dt.currentGameData[Ae],v),ue(Mt,v[Ae].gameNum=O[Ae]+1,v));ep(tp(nr(yp))).then(Ae=>{ue(Uo,u={equipment:Ae.val().rng_equipment_list[O.equipment],weapons:Ae.val().rng_weapons_list[O.weapons]},u),t(35,J={equipment:Ae.val().rng_equipment_list[O.equipment-1],weapons:Ae.val().rng_weapons_list[O.weapons-1]})}),Fe=setInterval(()=>{let Ae=Date.now(),Un=(Math.floor(G)+1-b)*24*60*60*1e3-Ae;t(20,ce=Math.floor(Un/1e3/60/60)),t(21,Ce=Math.floor(Un%(1e3*60*60)/(1e3*60))),t(22,Qe=Math.floor(Un%(1e3*60)/1e3)),ce==0&&Ce==0&&Qe==0&&(ue(yt,c=Dt.currentGameData[f.mode],c),ue(Mt,v.equipment=Dt.currentGameData.equipment,v),ue(Mt,v.weapons=Dt.currentGameData.weapons,v),setTimeout(We,1e3))},1e3)})}We();let dt=["equipment","weapons"];for(let b of dt)fetch(`https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/item-data/${b}Data.json`).then(async Ae=>{if(Ae.status!=200){console.error(`Failed to fetch ${b}!
Status: ${Ae.status}`);return}let ks=await Ae.json();ue(ii,d[b]=ks.sort((Un,Qc)=>Un.name.toLowerCase().localeCompare(Qc.name.toLowerCase())),d)});let Se=[],xe=[],ut,Ee,ne=9;for(let b=0;b<ne;b++)Se.push(`backgrounds/BG${b}.jpg`);function Ve(b){Ee=Math.floor(Math.random()*b.length)}Ve(Se);function it(){t(23,ut=Ee),xe.push(Ee)}it(),function b(){setTimeout(()=>{if(Ve(Se),!xe.length)it();else if(xe.length>3&&(xe=xe.slice(1)),!xe.includes(Ee))it();else{let Ae=[...Array(ne).keys()].filter(ks=>!xe.includes(ks));Ve(Ae),it()}document.visibilityState=="visible"&&b()},45e3)}(),localStorage.getItem("fd-version")!=lr&&(ue(gs,g=!1,g),localStorage.setItem("fd-version",lr));function Te(){ue(yt,c.gameWin=!0,c),t(36,r.gamesPlayed++,r),t(36,r.gamesWon++,r),t(36,r.streak++,r),t(36,r.winInfo[c.chosenItems.length]++,r),(c.chosenItems.length===1?V:r.streak>=3?re:x).play()}function _e(){ue(yt,c.gameOver=!0,c),t(36,r.gamesPlayed++,r),t(36,r.streak=0,r),he.play()}function Ne(){ue(_t,m.component=null,m),ue(_t,m.complete=!1,m)}function Ye(){let b=q>R;document.documentElement.style.fontSize=`${(b?.75:q/R*.8)*N[C]}vh`}const Ie=()=>{k&&Fc(ps(nr(Hc),`rooms/${k}`),null)},X=b=>{$.includes(b.key)?localStorage.setItem(b.key,b.oldValue):b.key=="fd-currentGameData"?b.url.includes("ls=true")?(console.log("oh"),ue(oi,D=!0,D),ue(Mt,v=JSON.parse(b.newValue),v),ue(yt,c=structuredClone(v[s]),c)):localStorage.setItem("fd-currentGameData",JSON.stringify(v)):b.key=="fd-settings"?b.url.includes("ls=true")?ue(Et,f=JSON.parse(b.newValue),f):localStorage.setItem("fd-settings",JSON.stringify(f)):b.key=="fd-playerStats"&&(b.url.includes("ls=true")?ue(Rn,o=JSON.parse(b.newValue),o):localStorage.setItem("fd-playerStats",JSON.stringify(o)))},oe=b=>{let Ae=b.wheelDeltaY;if(b.ctrlKey){if(b.preventDefault(),N[C]==.2&&Ae<0||N[C]==5&&Ae>0)return;Ae>0?t(2,C++,C):t(2,C--,C),I()}},W=b=>{let Ae=["Enter"," ","Escape"];b.ctrlKey&&(b.key=="-"||b.key=="+"||b.code=="Equal"||b.key=="0")&&(b.preventDefault(),(b.key=="+"||b.code=="Equal")&&N[C]!=5?t(2,C++,C):b.key=="-"&&N[C]!=.2?t(2,C--,C):b.key=="0"&&N[C]!=1&&t(2,C=7),I()),m.component&&ee&&(!b.ctrlKey&&!b.shiftKey&&!b.altKey&&Ae.includes(b.key)?Ne():setTimeout(()=>{b.key=="Tab"&&!ee.contains(document.activeElement)&&Ne()}))};function se(){t(0,R=nn.outerHeight),t(1,q=nn.outerWidth)}const Re=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,R=window.outerHeight),t(1,q=window.outerWidth),Ye()})};function Q(b){$e[b?"unshift":"push"](()=>{x=b,t(15,x)})}function ve(b){$e[b?"unshift":"push"](()=>{he=b,t(16,he)})}function De(b){$e[b?"unshift":"push"](()=>{re=b,t(17,re)})}function je(b){$e[b?"unshift":"push"](()=>{V=b,t(18,V)})}const M=b=>{Ft(b),!A&&ue(Et,f.muted=!f.muted,f)},vt=b=>{Ft(b),c.gameWin||c.gameOver?(location.hash="playerStats",ir()):(ue(_t,m.complete=!0,m),ue(_t,m.component=zc,m))},j=()=>{A||ue(_t,m.component=wm,m)},Y=b=>{if(c.chosenItems.length){b.detail.checked=!b.detail.checked;return}ue(dn,l=b.detail.checked,l)};function Je(b){n.$$.not_equal(O[s],b)&&(O[s]=b,t(19,O))}function xn(b){n.$$.not_equal(O[s],b)&&(O[s]=b,t(19,O))}function Bn(b){z=b,t(12,z),t(8,d),t(7,u),t(35,J)}function Gn(b){$e[b?"unshift":"push"](()=>{ee=b,t(14,ee)})}const Hn=b=>{ee.children[0].contains(b.target)||Ne()},Ss=()=>{let b=ee.querySelector("a, button, input");b&&b.focus()};function $c(b){$e[b?"unshift":"push"](()=>{ee=b,t(14,ee)})}const Kc=b=>{ee.children[0].contains(b.target)||Ne()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(R||q||C)&&Ye(),n.$$.dirty[0]&512&&t(3,s=f.mode),n.$$.dirty[0]&384|n.$$.dirty[1]&16&&on(d)==2&&on(u)==2&&(t(12,z={equipment:d.equipment.find(b=>b.name==u.equipment),weapons:d.weapons.find(b=>b.name==u.weapons)}),t(13,be={equipment:d.equipment.find(b=>b.name==J.equipment),weapons:d.weapons.find(b=>b.name==J.weapons)})),n.$$.dirty[0]&32&&ue(ri,a=l?6:7,a),n.$$.dirty[0]&200|n.$$.dirty[1]&128&&c.chosenItems.length&&!c.gameWin&&!c.gameOver&&(c.chosenItems[c.chosenItems.length-1].name==u[s]?Te():c.chosenItems.length==a&&_e()),n.$$.dirty[0]&40&&t(37,i=(l?"hard_":"")+s),n.$$.dirty[0]&16|n.$$.dirty[1]&64&&t(36,r=o[i]),n.$$.dirty[1]&32&&r.streak>r.maxStreak&&t(36,r.maxStreak=r.streak,r),n.$$.dirty[1]&96&&r&&Rn.update(b=>({...b,[i]:r}))},[R,q,C,s,o,l,c,u,d,f,P,U,z,be,ee,x,he,re,V,O,ce,Ce,Qe,ut,m,v,k,D,A,N,$,I,Se,Ne,Ye,J,r,i,a,Ie,X,oe,W,se,Re,Q,ve,De,je,M,vt,j,Y,Je,xn,Bn,Gn,Hn,Ss,$c,Kc]}class Im extends ft{constructor(e){super(),ht(this,e,Em,Cm,st,{},null,[-1,-1,-1])}}new Im({target:document.body});
