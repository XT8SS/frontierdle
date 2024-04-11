var Kc=Object.defineProperty;var Qc=(n,e,t)=>e in n?Kc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var zt=(n,e,t)=>(Qc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function le(){}const li=n=>n;function Hl(n){return n()}function zr(){return Object.create(null)}function st(n){n.forEach(Hl)}function _n(n){return typeof n=="function"}function it(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Ts;function nt(n,e){return n===e?!0:(Ts||(Ts=document.createElement("a")),Ts.href=e,n===Ts.href)}function Jc(n){return Object.keys(n).length===0}function Ul(n,...e){if(n==null){for(const s of e)s(void 0);return le}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function or(n){let e;return Ul(n,t=>e=t)(),e}function de(n,e,t){n.$$.on_destroy.push(Ul(e,t))}function fe(n,e,t){return n.set(t),e}function zl(n){return n&&_n(n.destroy)?n.destroy:le}const Vl=typeof window<"u";let lr=Vl?()=>window.performance.now():()=>Date.now(),ar=Vl?n=>requestAnimationFrame(n):le;const En=new Set;function Yl(n){En.forEach(e=>{e.c(n)||(En.delete(e),e.f())}),En.size!==0&&ar(Yl)}function cr(n){let e;return En.size===0&&ar(Yl),{promise:new Promise(t=>{En.add(e={c:n,f:t})}),abort(){En.delete(e)}}}const Xc=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(n,e){n.appendChild(e)}function $l(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Zc(n){const e=p("style");return e.textContent="/* empty */",eu($l(n),e),e.sheet}function eu(n,e){return h(n.head||n,e),e.sheet}function I(n,e,t){n.insertBefore(e,t||null)}function C(n){n.parentNode&&n.parentNode.removeChild(n)}function ct(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function p(n){return document.createElement(n)}function tu(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function U(n){return document.createTextNode(n)}function y(){return U(" ")}function yt(){return U("")}function Se(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ye(n,e,t){const s=e.toLowerCase();s in n?n[s]=typeof n[s]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function Ms(n){return n===""?null:+n}function nu(n){return Array.from(n.childNodes)}function _e(n,e){e=""+e,n.data!==e&&(n.data=e)}function Ns(n,e){n.value=e??""}function Dn(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function Ue(n,e,t){n.classList.toggle(e,!!t)}function Kl(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class Ql{constructor(e=!1){zt(this,"is_svg",!1);zt(this,"e");zt(this,"n");zt(this,"t");zt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=tu(t.nodeName):this.e=p(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)I(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}function Ls(n,e){return new n(e)}const Fs=new Map;let qs=0;function su(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function iu(n,e){const t={stylesheet:Zc(e),rules:{}};return Fs.set(n,t),t}function Ws(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let b=0;b<=1;b+=a){const N=e+(t-e)*r(b);c+=b*100+`%{${o(N,1-N)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,d=`__svelte_${su(u)}_${l}`,f=$l(n),{stylesheet:m,rules:g}=Fs.get(f)||iu(f,n);g[d]||(g[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${d} ${s}ms linear ${i}ms 1 both`,qs+=1,d}function ur(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),qs-=i,qs||ru())}function ru(){ar(()=>{qs||(Fs.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&C(e)}),Fs.clear())})}function ou(n,e,t,s){if(!e)return le;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return le;const{delay:r=0,duration:o=300,easing:l=li,start:a=lr()+r,end:c=a+o,tick:u=le,css:d}=t(n,{from:e,to:i},s);let f=!0,m=!1,g;function v(){d&&(g=Ws(n,0,1,o,r,l,d)),r||(m=!0)}function b(){d&&ur(n,g),f=!1}return cr(N=>{if(!m&&N>=a&&(m=!0),m&&N>=c&&(u(1,0),b()),!f)return!1;if(m){const T=N-a,P=0+1*l(T/o);u(P,1-P)}return!0}),v(),u(0,1),b}function lu(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,au(n,i)}}function au(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let ss;function Jn(n){ss=n}function Jl(){if(!ss)throw new Error("Function called outside component initialization");return ss}function cu(n){Jl().$$.on_mount.push(n)}function Xl(){const n=Jl();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=Kl(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const bn=[],Ve=[];let In=[];const Li=[],uu=Promise.resolve();let Fi=!1;function hu(){Fi||(Fi=!0,uu.then(Zl))}function Ze(n){In.push(n)}function Tt(n){Li.push(n)}const Ci=new Set;let gn=0;function Zl(){if(gn!==0)return;const n=ss;do{try{for(;gn<bn.length;){const e=bn[gn];gn++,Jn(e),fu(e.$$)}}catch(e){throw bn.length=0,gn=0,e}for(Jn(null),bn.length=0,gn=0;Ve.length;)Ve.pop()();for(let e=0;e<In.length;e+=1){const t=In[e];Ci.has(t)||(Ci.add(t),t())}In.length=0}while(bn.length);for(;Li.length;)Li.pop()();Fi=!1,Ci.clear(),Jn(n)}function fu(n){if(n.fragment!==null){n.update(),st(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ze)}}function du(n){const e=[],t=[];In.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),In=e}let zn;function ea(){return zn||(zn=Promise.resolve(),zn.then(()=>{zn=null})),zn}function Xn(n,e,t){n.dispatchEvent(Kl(`${e?"intro":"outro"}${t}`))}const Ps=new Set;let Lt;function St(){Lt={r:0,c:[],p:Lt}}function kt(){Lt.r||st(Lt.c),Lt=Lt.p}function K(n,e){n&&n.i&&(Ps.delete(n),n.i(e))}function oe(n,e,t,s){if(n&&n.o){if(Ps.has(n))return;Ps.add(n),Lt.c.push(()=>{Ps.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const ta={duration:0};function _u(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=Lt;l.r+=1;let a;function c(){const{delay:u=0,duration:d=300,easing:f=li,tick:m=le,css:g}=i||ta;g&&(o=Ws(n,1,0,d,u,f,g));const v=lr()+u,b=v+d;Ze(()=>Xn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),cr(N=>{if(r){if(N>=b)return m(0,1),Xn(n,!1,"end"),--l.r||st(l.c),!1;if(N>=v){const T=f((N-v)/d);m(1-T,T)}}return r})}return _n(i)?ea().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&ur(n,o),r=!1)}}}function Oe(n,e,t,s){let r=e(n,t,{direction:"both"}),o=s?0:1,l=null,a=null,c=null,u;function d(){c&&ur(n,c)}function f(g,v){const b=g.b-o;return v*=Math.abs(b),{a:o,b:g.b,d:b,duration:v,start:g.start,end:g.start+v,group:g.group}}function m(g){const{delay:v=0,duration:b=300,easing:N=li,tick:T=le,css:P}=r||ta,A={start:lr()+v,b:g};g||(A.group=Lt,Lt.r+=1),"inert"in n&&(g?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=A:(P&&(d(),c=Ws(n,o,g,b,v,N,P)),g&&T(0,1),l=f(A,b),Ze(()=>Xn(n,g,"start")),cr(R=>{if(a&&R>a.start&&(l=f(a,b),a=null,Xn(n,l.b,"start"),P&&(d(),c=Ws(n,o,l.b,l.duration,0,N,r.css))),l){if(R>=l.end)T(o=l.b,1-o),Xn(n,l.b,"end"),a||(l.b?d():--l.group.r||st(l.group.c)),l=null;else if(R>=l.start){const j=R-l.start;o=l.a+l.d*N(j/l.duration),T(o,1-o)}}return!!(l||a)}))}return{run(g){_n(r)?ea().then(()=>{r=r({direction:g?"in":"out"}),m(g)}):m(g)},end(){d(),l=a=null}}}function ye(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function pu(n,e){oe(n,1,1,()=>{e.delete(n.key)})}function mu(n,e){n.f(),pu(n,e)}function gu(n,e,t,s,i,r,o,l,a,c,u,d){let f=n.length,m=r.length,g=f;const v={};for(;g--;)v[n[g].key]=g;const b=[],N=new Map,T=new Map,P=[];for(g=m;g--;){const S=d(i,r,g),k=t(S);let D=o.get(k);D?s&&P.push(()=>D.p(S,e)):(D=c(k,S),D.c()),N.set(k,b[g]=D),k in v&&T.set(k,Math.abs(g-v[k]))}const A=new Set,R=new Set;function j(S){K(S,1),S.m(l,u),o.set(S.key,S),u=S.first,m--}for(;f&&m;){const S=b[m-1],k=n[f-1],D=S.key,Y=k.key;S===k?(u=S.first,f--,m--):N.has(Y)?!o.has(D)||A.has(D)?j(S):R.has(Y)?f--:T.get(D)>T.get(Y)?(R.add(D),j(S)):(A.add(Y),f--):(a(k,o),f--)}for(;f--;){const S=n[f];N.has(S.key)||a(S,o)}for(;m;)j(b[m-1]);return st(P),b}function Nt(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function He(n){n&&n.c()}function xe(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),Ze(()=>{const r=n.$$.on_mount.map(Hl).filter(_n);n.$$.on_destroy?n.$$.on_destroy.push(...r):st(r),n.$$.on_mount=[]}),i.forEach(Ze)}function Be(n,e){const t=n.$$;t.fragment!==null&&(du(t.after_update),st(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function vu(n,e){n.$$.dirty[0]===-1&&(bn.push(n),hu(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ht(n,e,t,s,i,r,o=null,l=[-1]){const a=ss;Jn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:le,not_equal:i,bound:zr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:zr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,f,...m)=>{const g=m.length?m[0]:f;return c.ctx&&i(c.ctx[d],c.ctx[d]=g)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](g),u&&vu(n,d)),f}):[],c.update(),u=!0,st(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const d=nu(e.target);c.fragment&&c.fragment.l(d),d.forEach(C)}else c.fragment&&c.fragment.c();e.intro&&K(n.$$.fragment),xe(n,e.target,e.anchor),Zl()}Jn(a)}class ft{constructor(){zt(this,"$$");zt(this,"$$set")}$destroy(){Be(this,1),this.$destroy=le}$on(e,t){if(!_n(t))return le;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Jc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const yu="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(yu);function na(n){const e=n-1;return e*e*e+1}function Bt(n,{delay:e=0,duration:t=400,easing:s=li}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}function ot(n,{delay:e=0,duration:t=400,easing:s=na,start:i=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-i,u=l*(1-r);return{delay:e,duration:t,easing:s,css:(d,f)=>`
			transform: ${a} scale(${1-c*f});
			opacity: ${l-u*f}
		`}}const vn=[];function Et(n,e=le){let t;const s=new Set;function i(l){if(it(n,l)&&(n=l,t)){const a=!vn.length;for(const c of s)c[1](),vn.push(c,n);if(a){for(let c=0;c<vn.length;c+=2)vn[c][0](vn[c+1]);vn.length=0}}}function r(l){i(l(n))}function o(l,a=le){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||le),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}var Vr={};/**
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
 */const sa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const M=function(n,e){if(!n)throw Fn(e)},Fn=function(n){return new Error("Firebase Database ("+sa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const ia=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},bu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},hr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,d=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(f=64)),s.push(t[u],t[d],t[f],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ia(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||d==null)throw new wu;const f=r<<2|l>>4;if(s.push(f),c!==64){const m=l<<4&240|c>>2;if(s.push(m),d!==64){const g=c<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ra=function(n){const e=ia(n);return hr.encodeByteArray(e,!0)},js=function(n){return ra(n).replace(/\./g,"")},qi=function(n){try{return hr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cu(n){return oa(void 0,n)}function oa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Eu(t)||(n[t]=oa(n[t],e[t]));return n}function Eu(n){return n!=="__proto__"}/**
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
 */function Iu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Su=()=>Iu().__FIREBASE_DEFAULTS__,ku=()=>{if(typeof process>"u"||typeof Vr>"u")return;const n=Vr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qi(n[1]);return e&&JSON.parse(e)},la=()=>{try{return Su()||ku()||Tu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nu=n=>{var e,t;return(t=(e=la())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ru=n=>{const e=Nu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},aa=()=>{var n;return(n=la())===null||n===void 0?void 0:n.config};/**
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
 */class ai{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Du(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[js(JSON.stringify(t)),js(JSON.stringify(o)),""].join(".")}/**
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
 */function Au(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ca(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Au())}function Pu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ua(){return sa.NODE_ADMIN===!0}function Ou(){try{return typeof indexedDB=="object"}catch{return!1}}function Mu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Lu="FirebaseError";class vs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Lu,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Fu(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vs(i,l,s)}}function Fu(n,e){return n.replace(qu,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qu=/\{\$([^}]+)}/g;/**
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
 */function is(n){return JSON.parse(n)}function et(n){return JSON.stringify(n)}/**
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
 */const fa=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=is(qi(r[0])||""),t=is(qi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Wu=function(n){const e=fa(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ju=function(n){const e=fa(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ht(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function An(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Wi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if($r(r)&&$r(o)){if(!Wi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function $r(n){return n!==null&&typeof n=="object"}/**
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
 */function xu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Bu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):d<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[d]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function fr(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Gu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,M(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ci=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function pn(n){return n&&n._delegate?n._delegate:n}class rs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Hu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ai;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zu(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Uu(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uu(n){return n===en?void 0:n}function zu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Me||(Me={}));const Yu={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},$u=Me.INFO,Ku={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},Qu=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ku[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class da{constructor(e){this.name=e,this._logLevel=$u,this._logHandler=Qu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const Ju=(n,e)=>e.some(t=>n instanceof t);let Kr,Qr;function Xu(){return Kr||(Kr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zu(){return Qr||(Qr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _a=new WeakMap,ji=new WeakMap,pa=new WeakMap,Ei=new WeakMap,dr=new WeakMap;function eh(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Vt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_a.set(t,n)}).catch(()=>{}),dr.set(e,n),e}function th(n){if(ji.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ji.set(n,e)}let xi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ji.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nh(n){xi=n(xi)}function sh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ii(this),e,...t);return pa.set(s,e.sort?e.sort():[e]),Vt(s)}:Zu().includes(n)?function(...e){return n.apply(Ii(this),e),Vt(_a.get(this))}:function(...e){return Vt(n.apply(Ii(this),e))}}function ih(n){return typeof n=="function"?sh(n):(n instanceof IDBTransaction&&th(n),Ju(n,Xu())?new Proxy(n,xi):n)}function Vt(n){if(n instanceof IDBRequest)return eh(n);if(Ei.has(n))return Ei.get(n);const e=ih(n);return e!==n&&(Ei.set(n,e),dr.set(e,n)),e}const Ii=n=>dr.get(n);function rh(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Vt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Vt(o.result),a.oldVersion,a.newVersion,Vt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const oh=["get","getKey","getAll","getAllKeys","count"],lh=["put","add","delete","clear"],Si=new Map;function Jr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Si.get(e))return Si.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=lh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||oh.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return Si.set(e,r),r}nh(n=>({...n,get:(e,t,s)=>Jr(e,t)||n.get(e,t,s),has:(e,t)=>!!Jr(e,t)||n.has(e,t)}));/**
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
 */class ah{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ch(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ch(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bi="@firebase/app",Xr="0.9.29";/**
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
 */const an=new da("@firebase/app"),uh="@firebase/app-compat",hh="@firebase/analytics-compat",fh="@firebase/analytics",dh="@firebase/app-check-compat",_h="@firebase/app-check",ph="@firebase/auth",mh="@firebase/auth-compat",gh="@firebase/database",vh="@firebase/database-compat",yh="@firebase/functions",bh="@firebase/functions-compat",wh="@firebase/installations",Ch="@firebase/installations-compat",Eh="@firebase/messaging",Ih="@firebase/messaging-compat",Sh="@firebase/performance",kh="@firebase/performance-compat",Th="@firebase/remote-config",Nh="@firebase/remote-config-compat",Rh="@firebase/storage",Dh="@firebase/storage-compat",Ah="@firebase/firestore",Ph="@firebase/firestore-compat",Oh="firebase",Mh="10.9.0";/**
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
 */const Gi="[DEFAULT]",Lh={[Bi]:"fire-core",[uh]:"fire-core-compat",[fh]:"fire-analytics",[hh]:"fire-analytics-compat",[_h]:"fire-app-check",[dh]:"fire-app-check-compat",[ph]:"fire-auth",[mh]:"fire-auth-compat",[gh]:"fire-rtdb",[vh]:"fire-rtdb-compat",[yh]:"fire-fn",[bh]:"fire-fn-compat",[wh]:"fire-iid",[Ch]:"fire-iid-compat",[Eh]:"fire-fcm",[Ih]:"fire-fcm-compat",[Sh]:"fire-perf",[kh]:"fire-perf-compat",[Th]:"fire-rc",[Nh]:"fire-rc-compat",[Rh]:"fire-gcs",[Dh]:"fire-gcs-compat",[Ah]:"fire-fst",[Ph]:"fire-fst-compat","fire-js":"fire-js",[Oh]:"fire-js-all"};/**
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
 */const Bs=new Map,Hi=new Map;function Fh(n,e){try{n.container.addComponent(e)}catch(t){an.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gs(n){const e=n.name;if(Hi.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,n);for(const t of Bs.values())Fh(t,n);return!0}function qh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Wh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new ha("app","Firebase",Wh);/**
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
 */class jh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const xh=Mh;function _r(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(t||(t=aa()),!t)throw Yt.create("no-options");const r=Bs.get(i);if(r){if(Wi(t,r.options)&&Wi(s,r.config))return r;throw Yt.create("duplicate-app",{appName:i})}const o=new Vu(i);for(const a of Hi.values())o.addComponent(a);const l=new jh(t,s,o);return Bs.set(i,l),l}function Bh(n=Gi){const e=Bs.get(n);if(!e&&n===Gi&&aa())return _r();if(!e)throw Yt.create("no-app",{appName:n});return e}function Sn(n,e,t){var s;let i=(s=Lh[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(l.join(" "));return}Gs(new rs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Gh="firebase-heartbeat-database",Hh=1,os="firebase-heartbeat-store";let ki=null;function ma(){return ki||(ki=rh(Gh,Hh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(os)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),ki}async function Uh(n){try{const t=(await ma()).transaction(os),s=await t.objectStore(os).get(ga(n));return await t.done,s}catch(e){if(e instanceof vs)an.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});an.warn(t.message)}}}async function Zr(n,e){try{const s=(await ma()).transaction(os,"readwrite");await s.objectStore(os).put(e,ga(n)),await s.done}catch(t){if(t instanceof vs)an.warn(t.message);else{const s=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});an.warn(s.message)}}}function ga(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zh=1024,Vh=30*24*60*60*1e3;class Yh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=eo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Vh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eo(),{heartbeatsToSend:s,unsentEntries:i}=$h(this._heartbeatsCache.heartbeats),r=js(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function eo(){return new Date().toISOString().substring(0,10)}function $h(n,e=zh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),to(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),to(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Kh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ou()?Mu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Uh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function to(n){return js(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Qh(n){Gs(new rs("platform-logger",e=>new ah(e),"PRIVATE")),Gs(new rs("heartbeat",e=>new Yh(e),"PRIVATE")),Sn(Bi,Xr,n),Sn(Bi,Xr,"esm2017"),Sn("fire-js","")}Qh("");var Jh="firebase",Xh="10.9.0";/**
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
 */Sn(Jh,Xh,"app");var no={};const so="@firebase/database",io="1.0.3";/**
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
 */let va="";function Zh(n){va=n}/**
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
 */class ef{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:is(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ya=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ef(e)}}catch{}return new tf},sn=ya("localStorage"),Ui=ya("sessionStorage");/**
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
 */const kn=new da("@firebase/database"),nf=function(){let n=1;return function(){return n++}}(),ba=function(n){const e=Gu(n),t=new Bu;t.update(e);const s=t.digest();return hr.encodeByteArray(s)},ys=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ys.apply(null,s):typeof s=="object"?e+=et(s):e+=s,e+=" "}return e};let ln=null,ro=!0;const sf=function(n,e){M(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(kn.logLevel=Me.VERBOSE,ln=kn.log.bind(kn),e&&Ui.set("logging_enabled",!0)):typeof n=="function"?ln=n:(ln=null,Ui.remove("logging_enabled"))},_t=function(...n){if(ro===!0&&(ro=!1,ln===null&&Ui.get("logging_enabled")===!0&&sf(!0)),ln){const e=ys.apply(null,n);ln(e)}},bs=function(n){return function(...e){_t(n,...e)}},zi=function(...n){const e="FIREBASE INTERNAL ERROR: "+ys(...n);kn.error(e)},Gt=function(...n){const e=`FIREBASE FATAL ERROR: ${ys(...n)}`;throw kn.error(e),new Error(e)},bt=function(...n){const e="FIREBASE WARNING: "+ys(...n);kn.warn(e)},rf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wa=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},of=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Pn="[MIN_NAME]",cn="[MAX_NAME]",qn=function(n,e){if(n===e)return 0;if(n===Pn||e===cn)return-1;if(e===Pn||n===cn)return 1;{const t=oo(n),s=oo(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},lf=function(n,e){return n===e?0:n<e?-1:1},Vn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+et(e))},pr=function(n){if(typeof n!="object"||n===null)return et(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=et(e[s]),t+=":",t+=pr(n[e[s]]);return t+="}",t},Ca=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Ct(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ea=function(n){M(!wa(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},af=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uf(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const hf=new RegExp("^-?(0*)\\d{1,10}$"),ff=-2147483648,df=2147483647,oo=function(n){if(hf.test(n)){const e=Number(n);if(e>=ff&&e<=df)return e}return null},Wn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw bt("Exception was thrown by user callback.",t),e},Math.floor(0))}},_f=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class pf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class mf{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(e)}}class Tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tn.OWNER="owner";/**
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
 */const mr="5",Ia="v",Sa="s",ka="r",Ta="f",Na=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ra="ls",Da="p",Vi="ac",Aa="websocket",Pa="long_polling";/**
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
 */class Oa{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function gf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ma(n,e,t){M(typeof e=="string","typeof type must == string"),M(typeof t=="object","typeof params must == object");let s;if(e===Aa)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Pa)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gf(n)&&(t.ns=n.namespace);const i=[];return Ct(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class vf{constructor(){this.counters_={}}incrementCounter(e,t=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Cu(this.counters_)}}/**
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
 */const Ti={},Ni={};function gr(n){const e=n.toString();return Ti[e]||(Ti[e]=new vf),Ti[e]}function yf(n,e){const t=n.toString();return Ni[t]||(Ni[t]=e()),Ni[t]}/**
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
 */class bf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Wn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const lo="start",wf="close",Cf="pLPCommand",Ef="pRTLPCB",La="id",Fa="pw",qa="ser",If="cb",Sf="seg",kf="ts",Tf="d",Nf="dframe",Wa=1870,ja=30,Rf=Wa-ja,Df=25e3,Af=3e4;class wn{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=gr(t),this.urlFn=a=>(this.appCheckToken&&(a[Vi]=this.appCheckToken),Ma(t,Pa,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new bf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Af)),of(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lo)this.id=l,this.password=a;else if(o===wf)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[lo]="t",s[qa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[If]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ia]=mr,this.transportSessionId&&(s[Sa]=this.transportSessionId),this.lastSessionId&&(s[Ra]=this.lastSessionId),this.applicationId&&(s[Da]=this.applicationId),this.appCheckToken&&(s[Vi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Na.test(location.hostname)&&(s[ka]=Ta);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wn.forceAllow_=!0}static forceDisallow(){wn.forceDisallow_=!0}static isAvailable(){return wn.forceAllow_?!0:!wn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!af()&&!cf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ra(t),i=Ca(s,Rf);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Nf]="t",s[La]=e,s[Fa]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=et(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class vr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nf(),window[Cf+this.uniqueCallbackIdentifier]=e,window[Ef+this.uniqueCallbackIdentifier]=t,this.myIFrame=vr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){_t("frame writing exception"),l.stack&&_t(l.stack),_t(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[La]=this.myID,e[Fa]=this.myPW,e[qa]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ja+s.length<=Wa;){const o=this.pendingSegs.shift();s=s+"&"+Sf+i+"="+o.seg+"&"+kf+i+"="+o.ts+"&"+Tf+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Df)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Pf=16384,Of=45e3;let Hs=null;typeof MozWebSocket<"u"?Hs=MozWebSocket:typeof WebSocket<"u"&&(Hs=WebSocket);class Rt{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=gr(t),this.connURL=Rt.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ia]=mr,typeof location<"u"&&location.hostname&&Na.test(location.hostname)&&(o[ka]=Ta),t&&(o[Sa]=t),s&&(o[Ra]=s),i&&(o[Vi]=i),r&&(o[Da]=r),Ma(e,Aa,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sn.set("previous_websocket_failure",!0);try{let s;ua(),this.mySock=new Hs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Hs!==null&&!Rt.forceDisallow_}static previouslyFailed(){return sn.isInMemoryStorage||sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=is(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ca(t,Pf);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Of))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rt.responsesRequiredToBeHealthy=2;Rt.healthyTimeout=3e4;/**
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
 */class ls{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wn,Rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Rt&&Rt.isAvailable();let s=t&&!Rt.previouslyFailed();if(e.webSocketOnly&&(t||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Rt];else{const i=this.transports_=[];for(const r of ls.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ls.globalTransportInitialized_=!1;/**
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
 */const Mf=6e4,Lf=5e3,Ff=10*1024,qf=100*1024,Ri="t",ao="d",Wf="s",co="r",jf="e",uo="o",ho="a",fo="n",_o="p",xf="h";class Bf{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new ls(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ff?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ri in e){const t=e[Ri];t===ho?this.upgradeIfSecondaryHealthy_():t===co?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===uo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Vn("t",e),s=Vn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_o,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ho,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Vn("t",e),s=Vn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Vn(Ri,e);if(ao in e){const s=e[ao];if(t===xf){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===fo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Wf?this.onConnectionShutdown_(s):t===co?this.onReset_(s):t===jf?zi("Server Error: "+s):t===uo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),mr!==s&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Zn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Mf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Lf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_o,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class xa{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Ba{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){M(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Us extends Ba{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ca()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Us}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const po=32,mo=768;class Ae{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ce(){return new Ae("")}function ge(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Qt(n){return n.pieces_.length-n.pieceNum_}function Le(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ae(n.pieces_,e)}function Ga(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Gf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ha(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ua(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ae(e,0)}function tt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Ae(t,0)}function me(n){return n.pieceNum_>=n.pieces_.length}function mt(n,e){const t=ge(n),s=ge(e);if(t===null)return e;if(t===s)return mt(Le(n),Le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function za(n,e){if(Qt(n)!==Qt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function At(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Qt(n)>Qt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Hf{constructor(e,t){this.errorPrefix_=t,this.parts_=Ha(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ci(this.parts_[s]);Va(this)}}function Uf(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ci(e),Va(n)}function zf(n){const e=n.parts_.pop();n.byteLength_-=ci(e),n.parts_.length>0&&(n.byteLength_-=1)}function Va(n){if(n.byteLength_>mo)throw new Error(n.errorPrefix_+"has a key path longer than "+mo+" bytes ("+n.byteLength_+").");if(n.parts_.length>po)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+po+") or object contains a cycle "+tn(n))}function tn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class yr extends Ba{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new yr}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Yn=1e3,Vf=60*5*1e3,go=30*1e3,Yf=1.3,$f=3e4,Kf="server_kill",vo=3;class xt extends xa{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yn,this.maxReconnectDelay_=Vf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ua())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Us.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(et(r)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ai,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;xt.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ht(e,"w")){const s=An(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ju(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=go)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Wu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):zi("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$f&&(this.reconnectDelay_=Yn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Yf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(d){M(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new Bf(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{bt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kf)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&bt(d),a())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yr(this.interruptReasons_)&&(this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>pr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Ae(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){_t("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vo&&(this.reconnectDelay_=go,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){_t("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+va.replace(/\./g,"-")]=1,ca()?e["framework.cordova"]=1:Pu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Us.getInstance().currentlyOnline();return Yr(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
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
 */class ui{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new pe(Pn,e),i=new pe(Pn,t);return this.compare(s,i)!==0}minPost(){return pe.MIN}}/**
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
 */let Rs;class Ya extends ui{static get __EMPTY_NODE(){return Rs}static set __EMPTY_NODE(e){Rs=e}compare(e,t){return qn(e.name,t.name)}isDefinedOn(e){throw Fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return pe.MIN}maxPost(){return new pe(cn,Rs)}makePost(e,t){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,Rs)}toString(){return".key"}}const Nn=new Ya;/**
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
 */class Ds{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class at{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??at.RED,this.left=i??vt.EMPTY_NODE,this.right=r??vt.EMPTY_NODE}copy(e,t,s,i,r){return new at(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}at.RED=!0;at.BLACK=!1;class Qf{copy(e,t,s,i,r){return this}insert(e,t,s){return new at(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(e,t=vt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new vt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,at.BLACK,null,null))}remove(e){return new vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,at.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ds(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ds(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}vt.EMPTY_NODE=new Qf;/**
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
 */function Jf(n,e){return qn(n.name,e.name)}function br(n,e){return qn(n,e)}/**
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
 */let Yi;function Xf(n){Yi=n}const $a=function(n){return typeof n=="number"?"number:"+Ea(n):"string:"+n},Ka=function(n){if(n.isLeafNode()){const e=n.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else M(n===Yi||n.isEmpty(),"priority of unexpected type.");M(n===Yi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let yo;class lt{constructor(e,t=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ka(this.priorityNode_)}static set __childrenNodeConstructor(e){yo=e}static get __childrenNodeConstructor(){return yo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:ge(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ge(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(M(s!==".priority"||Qt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Le(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$a(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ea(this.value_):e+=this.value_,this.lazyHash_=ba(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=lt.VALUE_TYPE_ORDER.indexOf(t),r=lt.VALUE_TYPE_ORDER.indexOf(s);return M(i>=0,"Unknown leaf type: "+t),M(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Qa,Ja;function Zf(n){Qa=n}function ed(n){Ja=n}class td extends ui{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?qn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(cn,new lt("[PRIORITY-POST]",Ja))}makePost(e,t){const s=Qa(e);return new pe(t,new lt("[PRIORITY-POST]",s))}toString(){return".priority"}}const ze=new td;/**
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
 */const nd=Math.log(2);class sd{constructor(e){const t=r=>parseInt(Math.log(r)/nd,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zs=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let d,f;if(u===0)return null;if(u===1)return d=n[a],f=t?t(d):d,new at(f,d.node,at.BLACK,null,null);{const m=parseInt(u/2,10)+a,g=i(a,m),v=i(m+1,c);return d=n[m],f=t?t(d):d,new at(f,d.node,at.BLACK,g,v)}},r=function(a){let c=null,u=null,d=n.length;const f=function(g,v){const b=d-g,N=d;d-=g;const T=i(b+1,N),P=n[b],A=t?t(P):P;m(new at(A,P.node,v,null,T))},m=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),b=Math.pow(2,a.count-(g+1));v?f(b,at.BLACK):(f(b,at.BLACK),f(b,at.RED))}return u},o=new sd(n.length),l=r(o);return new vt(s||e,l)};/**
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
 */let Di;const yn={};class jt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return M(yn&&ze,"ChildrenNode.ts has not been loaded"),Di=Di||new jt({".priority":yn},{".priority":ze}),Di}get(e){const t=An(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof vt?t:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,t){M(e!==Nn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(pe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=zs(s,e.getCompare()):l=yn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new jt(u,c)}addToIndexes(e,t){const s=xs(this.indexes_,(i,r)=>{const o=An(this.indexSet_,r);if(M(o,"Missing index implementation for "+r),i===yn)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(pe.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),zs(l,o.getCompare())}else return yn;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new pe(e.name,l))),a.insert(e,e.node)}});return new jt(s,this.indexSet_)}removeFromIndexes(e,t){const s=xs(this.indexes_,i=>{if(i===yn)return i;{const r=t.get(e.name);return r?i.remove(new pe(e.name,r)):i}});return new jt(s,this.indexSet_)}}/**
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
 */let $n;class Z{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ka(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $n||($n=new Z(new vt(br),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$n}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?$n:t}}getChild(e){const t=ge(e);return t===null?this:this.getImmediateChild(t).getChild(Le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(M(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new pe(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$n:this.priorityNode_;return new Z(i,o,r)}}updateChild(e,t){const s=ge(e);if(s===null)return t;{M(ge(e)!==".priority"||Qt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Le(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(ze,(o,l)=>{t[o]=l.val(e),s++,r&&Z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$a(this.getPriority().val())+":"),this.forEachChild(ze,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ba(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new pe(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new pe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new pe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ws?-1:0}withIndex(e){if(e===Nn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Nn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(ze),i=t.getIterator(ze);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nn?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class id extends Z{constructor(){super(new vt(br),Z.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const ws=new id;Object.defineProperties(pe,{MIN:{value:new pe(Pn,Z.EMPTY_NODE)},MAX:{value:new pe(cn,ws)}});Ya.__EMPTY_NODE=Z.EMPTY_NODE;lt.__childrenNodeConstructor=Z;Xf(ws);ed(ws);/**
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
 */const rd=!0;function ut(n,e=null){if(n===null)return Z.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new lt(t,ut(e))}if(!(n instanceof Array)&&rd){const t=[];let s=!1;if(Ct(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=ut(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new pe(o,a)))}}),t.length===0)return Z.EMPTY_NODE;const r=zs(t,Jf,o=>o.name,br);if(s){const o=zs(t,ze.getCompare());return new Z(r,ut(e),new jt({".priority":o},{".priority":ze}))}else return new Z(r,ut(e),jt.Default)}else{let t=Z.EMPTY_NODE;return Ct(n,(s,i)=>{if(Ht(n,s)&&s.substring(0,1)!=="."){const r=ut(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ut(e))}}Zf(ut);/**
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
 */class od extends ui{constructor(e){super(),this.indexPath_=e,M(!me(e)&&ge(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?qn(e.name,t.name):r}makePost(e,t){const s=ut(e),i=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(t,i)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,ws);return new pe(cn,e)}toString(){return Ha(this.indexPath_,0).join("/")}}/**
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
 */class ld extends ui{compare(e,t){const s=e.node.compareTo(t.node);return s===0?qn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,t){const s=ut(e);return new pe(t,s)}toString(){return".value"}}const ad=new ld;/**
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
 */function Xa(n){return{type:"value",snapshotNode:n}}function On(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function as(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function cs(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function cd(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class wr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(as(t,l)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(On(t,s)):o.trackChildChange(cs(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ze,(i,r)=>{t.hasChild(i)||s.trackChildChange(as(i,r))}),t.isLeafNode()||t.forEachChild(ze,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(cs(i,r,o))}else s.trackChildChange(On(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class us{constructor(e){this.indexedFilter_=new wr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=us.getStartPost_(e),this.endPost_=us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new pe(t,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Z.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Z.EMPTY_NODE);const r=this;return t.forEachChild(ze,(o,l)=>{r.matches(new pe(o,l))||(i=i.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class ud{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new pe(t,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Z.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Z.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const l=e;M(l.numChildren()===this.limit_,"");const a=new pe(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const d=l.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,a);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(cs(t,s,d)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(as(t,d));const v=l.updateImmediateChild(t,Z.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(On(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(as(c.name,c.node)),r.trackChildChange(On(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,Z.EMPTY_NODE)):e}}/**
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
 */class Cr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pn}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new Cr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hd(n){return n.loadsAllData()?new wr(n.getIndex()):n.hasLimit()?new ud(n):new us(n)}function bo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ze?t="$priority":n.index_===ad?t="$value":n.index_===Nn?t="$key":(M(n.index_ instanceof od,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=et(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=et(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+et(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=et(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+et(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function wo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ze&&(e.i=n.index_.toString()),e}/**
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
 */class Vs extends xa{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vs.getListenId_(e,s),l={};this.listens_[o]=l;const a=bo(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),An(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=Vs.getListenId_(e,t);delete this.listens_[s]}get(e){const t=bo(e._queryParams),s=e._path.toString(),i=new ai;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xu(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=is(l.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class fd{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ys(){return{value:null,children:new Map}}function Za(n,e,t){if(me(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ge(e);n.children.has(s)||n.children.set(s,Ys());const i=n.children.get(s);e=Le(e),Za(i,e,t)}}function $i(n,e,t){n.value!==null?t(e,n.value):dd(n,(s,i)=>{const r=new Ae(e.toString()+"/"+s);$i(i,r,t)})}function dd(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class _d{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ct(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Co=10*1e3,pd=30*1e3,md=5*60*1e3;class gd{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new _d(e);const s=Co+(pd-Co)*Math.random();Zn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Ct(e,(i,r)=>{r>0&&Ht(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Zn(this.reportStats_.bind(this),Math.floor(Math.random()*2*md))}}/**
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
 */var Pt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function ec(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Er(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ir(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class $s{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Pt.ACK_USER_WRITE,this.source=ec()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ae(e));return new $s(Ce(),t,this.revert)}}else return M(ge(this.path)===e,"operationForChild called for unrelated child."),new $s(Le(this.path),this.affectedTree,this.revert)}}/**
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
 */class hs{constructor(e,t){this.source=e,this.path=t,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new hs(this.source,Ce()):new hs(this.source,Le(this.path))}}/**
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
 */class un{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Pt.OVERWRITE}operationForChild(e){return me(this.path)?new un(this.source,Ce(),this.snap.getImmediateChild(e)):new un(this.source,Le(this.path),this.snap)}}/**
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
 */class fs{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Pt.MERGE}operationForChild(e){if(me(this.path)){const t=this.children.subtree(new Ae(e));return t.isEmpty()?null:t.value?new un(this.source,Ce(),t.value):new fs(this.source,Ce(),t)}else return M(ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fs(this.source,Le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class vd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yd(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(cd(o.childName,o.snapshotNode))}),Kn(n,i,"child_removed",e,s,t),Kn(n,i,"child_added",e,s,t),Kn(n,i,"child_moved",r,s,t),Kn(n,i,"child_changed",e,s,t),Kn(n,i,"value",e,s,t),i}function Kn(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>wd(n,l,a)),o.forEach(l=>{const a=bd(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function bd(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function wd(n,e,t){if(e.childName==null||t.childName==null)throw Fn("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),i=new pe(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function hi(n,e){return{eventCache:n,serverCache:e}}function es(n,e,t,s){return hi(new Jt(e,t,s),n.serverCache)}function tc(n,e,t,s){return hi(n.eventCache,new Jt(e,t,s))}function Ks(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function hn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ai;const Cd=()=>(Ai||(Ai=new vt(lf)),Ai);class qe{constructor(e,t=Cd()){this.value=e,this.children=t}static fromObject(e){let t=new qe(null);return Ct(e,(s,i)=>{t=t.set(new Ae(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ce(),value:this.value};if(me(e))return null;{const s=ge(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Le(e),t);return r!=null?{path:tt(new Ae(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const t=ge(e),s=this.children.get(t);return s!==null?s.subtree(Le(e)):new qe(null)}}set(e,t){if(me(e))return new qe(t,this.children);{const s=ge(e),r=(this.children.get(s)||new qe(null)).set(Le(e),t),o=this.children.insert(s,r);return new qe(this.value,o)}}remove(e){if(me(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const t=ge(e),s=this.children.get(t);if(s){const i=s.remove(Le(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new qe(null):new qe(this.value,r)}else return this}}get(e){if(me(e))return this.value;{const t=ge(e),s=this.children.get(t);return s?s.get(Le(e)):null}}setTree(e,t){if(me(e))return t;{const s=ge(e),r=(this.children.get(s)||new qe(null)).setTree(Le(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new qe(this.value,o)}}fold(e){return this.fold_(Ce(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(tt(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ce(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(me(e))return null;{const r=ge(e),o=this.children.get(r);return o?o.findOnPath_(Le(e),tt(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ce(),t)}foreachOnPath_(e,t,s){if(me(e))return this;{this.value&&s(t,this.value);const i=ge(e),r=this.children.get(i);return r?r.foreachOnPath_(Le(e),tt(t,i),s):new qe(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(tt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new qe(null))}}function ts(n,e,t){if(me(e))return new Ot(new qe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=mt(i,e);return r=r.updateChild(o,t),new Ot(n.writeTree_.set(i,r))}else{const i=new qe(t),r=n.writeTree_.setTree(e,i);return new Ot(r)}}}function Eo(n,e,t){let s=n;return Ct(t,(i,r)=>{s=ts(s,tt(e,i),r)}),s}function Io(n,e){if(me(e))return Ot.empty();{const t=n.writeTree_.setTree(e,new qe(null));return new Ot(t)}}function Ki(n,e){return mn(n,e)!=null}function mn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(mt(t.path,e)):null}function So(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ze,(s,i)=>{e.push(new pe(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new pe(s,i.value))}),e}function $t(n,e){if(me(e))return n;{const t=mn(n,e);return t!=null?new Ot(new qe(t)):new Ot(n.writeTree_.subtree(e))}}function Qi(n){return n.writeTree_.isEmpty()}function Mn(n,e){return nc(Ce(),n.writeTree_,e)}function nc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(M(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=nc(tt(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(tt(n,".priority"),s)),t}}/**
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
 */function fi(n,e){return oc(e,n)}function Ed(n,e,t,s,i){M(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=ts(n.visibleWrites,e,t)),n.lastWriteId=s}function Id(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Sd(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);M(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&kd(l,s.path)?i=!1:At(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Td(n),!0;if(s.snap)n.visibleWrites=Io(n.visibleWrites,s.path);else{const l=s.children;Ct(l,a=>{n.visibleWrites=Io(n.visibleWrites,tt(s.path,a))})}return!0}else return!1}function kd(n,e){if(n.snap)return At(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&At(tt(n.path,t),e))return!0;return!1}function Td(n){n.visibleWrites=sc(n.allWrites,Nd,Ce()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Nd(n){return n.visible}function sc(n,e,t){let s=Ot.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)At(t,o)?(l=mt(t,o),s=ts(s,l,r.snap)):At(o,t)&&(l=mt(o,t),s=ts(s,Ce(),r.snap.getChild(l)));else if(r.children){if(At(t,o))l=mt(t,o),s=Eo(s,l,r.children);else if(At(o,t))if(l=mt(o,t),me(l))s=Eo(s,Ce(),r.children);else{const a=An(r.children,ge(l));if(a){const c=a.getChild(Le(l));s=ts(s,Ce(),c)}}}else throw Fn("WriteRecord should have .snap or .children")}}return s}function ic(n,e,t,s,i){if(!s&&!i){const r=mn(n.visibleWrites,e);if(r!=null)return r;{const o=$t(n.visibleWrites,e);if(Qi(o))return t;if(t==null&&!Ki(o,Ce()))return null;{const l=t||Z.EMPTY_NODE;return Mn(o,l)}}}else{const r=$t(n.visibleWrites,e);if(!i&&Qi(r))return t;if(!i&&t==null&&!Ki(r,Ce()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(At(c.path,e)||At(e,c.path))},l=sc(n.allWrites,o,e),a=t||Z.EMPTY_NODE;return Mn(l,a)}}}function Rd(n,e,t){let s=Z.EMPTY_NODE;const i=mn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ze,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=$t(n.visibleWrites,e);return t.forEachChild(ze,(o,l)=>{const a=Mn($t(r,new Ae(o)),l);s=s.updateImmediateChild(o,a)}),So(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=$t(n.visibleWrites,e);return So(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Dd(n,e,t,s,i){M(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=tt(e,t);if(Ki(n.visibleWrites,r))return null;{const o=$t(n.visibleWrites,r);return Qi(o)?i.getChild(t):Mn(o,i.getChild(t))}}function Ad(n,e,t,s){const i=tt(e,t),r=mn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=$t(n.visibleWrites,i);return Mn(o,s.getNode().getImmediateChild(t))}else return null}function Pd(n,e){return mn(n.visibleWrites,e)}function Od(n,e,t,s,i,r,o){let l;const a=$t(n.visibleWrites,e),c=mn(a,Ce());if(c!=null)l=c;else if(t!=null)l=Mn(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],d=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=f.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=f.getNext();return u}else return[]}function Md(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function Qs(n,e,t,s){return ic(n.writeTree,n.treePath,e,t,s)}function Sr(n,e){return Rd(n.writeTree,n.treePath,e)}function ko(n,e,t,s){return Dd(n.writeTree,n.treePath,e,t,s)}function Js(n,e){return Pd(n.writeTree,tt(n.treePath,e))}function Ld(n,e,t,s,i,r){return Od(n.writeTree,n.treePath,e,t,s,i,r)}function kr(n,e,t){return Ad(n.writeTree,n.treePath,e,t)}function rc(n,e){return oc(tt(n.treePath,e),n.writeTree)}function oc(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Fd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;M(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),M(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,cs(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,as(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,On(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,cs(s,e.snapshotNode,i.oldSnap));else throw Fn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class qd{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const lc=new qd;class Tr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hn(this.viewCache_),r=Ld(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Wd(n){return{filter:n}}function jd(n,e){M(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function xd(n,e,t,s,i){const r=new Fd;let o,l;if(t.type===Pt.OVERWRITE){const c=t;c.source.fromUser?o=Ji(n,e,c.path,c.snap,s,i,r):(M(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!me(c.path),o=Xs(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===Pt.MERGE){const c=t;c.source.fromUser?o=Gd(n,e,c.path,c.children,s,i,r):(M(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Xi(n,e,c.path,c.children,s,i,l,r))}else if(t.type===Pt.ACK_USER_WRITE){const c=t;c.revert?o=zd(n,e,c.path,s,i,r):o=Hd(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Pt.LISTEN_COMPLETE)o=Ud(n,e,t.path,s,r);else throw Fn("Unknown operation type: "+t.type);const a=r.getChanges();return Bd(e,o,a),{viewCache:o,changes:a}}function Bd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ks(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Xa(Ks(e)))}}function ac(n,e,t,s,i,r){const o=e.eventCache;if(Js(s,t)!=null)return e;{let l,a;if(me(t))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hn(e),u=c instanceof Z?c:Z.EMPTY_NODE,d=Sr(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Qs(s,hn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ge(t);if(c===".priority"){M(Qt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const d=ko(s,t,u,a);d!=null?l=n.filter.updatePriority(u,d):l=o.getNode()}else{const u=Le(t);let d;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=ko(s,t,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=kr(s,c,e.serverCache);d!=null?l=n.filter.updateChild(o.getNode(),c,d,u,i,r):l=o.getNode()}}return es(e,l,o.isFullyInitialized()||me(t),n.filter.filtersNodes())}}function Xs(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(me(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),m,null)}else{const m=ge(t);if(!a.isCompleteForPath(t)&&Qt(t)>1)return e;const g=Le(t),b=a.getNode().getImmediateChild(m).updateChild(g,s);m===".priority"?c=u.updatePriority(a.getNode(),b):c=u.updateChild(a.getNode(),m,b,g,lc,null)}const d=tc(e,c,a.isFullyInitialized()||me(t),u.filtersNodes()),f=new Tr(i,d,r);return ac(n,d,t,i,f,l)}function Ji(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Tr(i,e,r);if(me(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=es(e,c,!0,n.filter.filtersNodes());else{const d=ge(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=es(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=Le(t),m=l.getNode().getImmediateChild(d);let g;if(me(f))g=s;else{const v=u.getCompleteChild(d);v!=null?Ga(f)===".priority"&&v.getChild(Ua(f)).isEmpty()?g=v:g=v.updateChild(f,s):g=Z.EMPTY_NODE}if(m.equals(g))a=e;else{const v=n.filter.updateChild(l.getNode(),d,g,f,u,o);a=es(e,v,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function To(n,e){return n.eventCache.isCompleteForChild(e)}function Gd(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=tt(t,a);To(e,ge(u))&&(l=Ji(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=tt(t,a);To(e,ge(u))||(l=Ji(n,l,u,c,i,r,o))}),l}function No(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Xi(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;me(t)?c=s:c=new qe(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),g=No(n,m,f);a=Xs(n,a,new Ae(d),g,i,r,o,l)}}),c.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!m){const g=e.serverCache.getNode().getImmediateChild(d),v=No(n,g,f);a=Xs(n,a,new Ae(d),v,i,r,o,l)}}),a}function Hd(n,e,t,s,i,r,o){if(Js(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(me(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Xs(n,e,t,a.getNode().getChild(t),i,r,l,o);if(me(t)){let c=new qe(null);return a.getNode().forEachChild(Nn,(u,d)=>{c=c.set(new Ae(u),d)}),Xi(n,e,t,c,i,r,l,o)}else return e}else{let c=new qe(null);return s.foreach((u,d)=>{const f=tt(t,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Xi(n,e,t,c,i,r,l,o)}}function Ud(n,e,t,s,i){const r=e.serverCache,o=tc(e,r.getNode(),r.isFullyInitialized()||me(t),r.isFiltered());return ac(n,o,t,s,lc,i)}function zd(n,e,t,s,i,r){let o;if(Js(s,t)!=null)return e;{const l=new Tr(s,e,i),a=e.eventCache.getNode();let c;if(me(t)||ge(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Qs(s,hn(e));else{const d=e.serverCache.getNode();M(d instanceof Z,"serverChildren would be complete if leaf node"),u=Sr(s,d)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=ge(t);let d=kr(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=a.getImmediateChild(u)),d!=null?c=n.filter.updateChild(a,u,d,Le(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,Z.EMPTY_NODE,Le(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qs(s,hn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Js(s,Ce())!=null,es(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Vd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new wr(s.getIndex()),r=hd(s);this.processor_=Wd(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Z.EMPTY_NODE,l.getNode(),null),u=new Jt(a,o.isFullyInitialized(),i.filtersNodes()),d=new Jt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=hi(d,u),this.eventGenerator_=new vd(this.query_)}get query(){return this.query_}}function Yd(n){return n.viewCache_.serverCache.getNode()}function $d(n){return Ks(n.viewCache_)}function Kd(n,e){const t=hn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!me(e)&&!t.getImmediateChild(ge(e)).isEmpty())?t.getChild(e):null}function Ro(n){return n.eventRegistrations_.length===0}function Qd(n,e){n.eventRegistrations_.push(e)}function Do(n,e,t){const s=[];if(t){M(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ao(n,e,t,s){e.type===Pt.MERGE&&e.source.queryId!==null&&(M(hn(n.viewCache_),"We should always have a full cache before handling merges"),M(Ks(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=xd(n.processor_,i,e,t,s);return jd(n.processor_,r.viewCache),M(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,cc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Jd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ze,(r,o)=>{s.push(On(r,o))}),t.isFullyInitialized()&&s.push(Xa(t.getNode())),cc(n,s,t.getNode(),e)}function cc(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return yd(n.eventGenerator_,e,t,i)}/**
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
 */let Zs;class uc{constructor(){this.views=new Map}}function Xd(n){M(!Zs,"__referenceConstructor has already been defined"),Zs=n}function Zd(){return M(Zs,"Reference.ts has not been loaded"),Zs}function e_(n){return n.views.size===0}function Nr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return M(r!=null,"SyncTree gave us an op for an invalid query."),Ao(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ao(o,e,t,s));return r}}function hc(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Qs(t,i?s:null),a=!1;l?a=!0:s instanceof Z?(l=Sr(t,s),a=!1):(l=Z.EMPTY_NODE,a=!1);const c=hi(new Jt(l,a,!1),new Jt(s,i,!1));return new Vd(e,c)}return o}function t_(n,e,t,s,i,r){const o=hc(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Qd(o,t),Jd(o,t)}function n_(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Xt(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(Do(c,t,s)),Ro(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(Do(a,t,s)),Ro(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Xt(n)&&r.push(new(Zd())(e._repo,e._path)),{removed:r,events:o}}function fc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Kt(n,e){let t=null;for(const s of n.views.values())t=t||Kd(s,e);return t}function dc(n,e){if(e._queryParams.loadsAllData())return di(n);{const s=e._queryIdentifier;return n.views.get(s)}}function _c(n,e){return dc(n,e)!=null}function Xt(n){return di(n)!=null}function di(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ei;function s_(n){M(!ei,"__referenceConstructor has already been defined"),ei=n}function i_(){return M(ei,"Reference.ts has not been loaded"),ei}let r_=1;class Po{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=Md(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pc(n,e,t,s,i){return Ed(n.pendingWriteTree_,e,t,s,i),i?Es(n,new un(ec(),e,t)):[]}function rn(n,e,t=!1){const s=Id(n.pendingWriteTree_,e);if(Sd(n.pendingWriteTree_,e)){let r=new qe(null);return s.snap!=null?r=r.set(Ce(),!0):Ct(s.children,o=>{r=r.set(new Ae(o),!0)}),Es(n,new $s(s.path,r,t))}else return[]}function Cs(n,e,t){return Es(n,new un(Er(),e,t))}function o_(n,e,t){const s=qe.fromObject(t);return Es(n,new fs(Er(),e,s))}function l_(n,e){return Es(n,new hs(Er(),e))}function a_(n,e,t){const s=Dr(n,t);if(s){const i=Ar(s),r=i.path,o=i.queryId,l=mt(r,e),a=new hs(Ir(o),l);return Pr(n,r,a)}else return[]}function mc(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||_c(o,e))){const a=n_(o,e,t,s);e_(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(f,m)=>Xt(m));if(u&&!d){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const m=f_(f);for(let g=0;g<m.length;++g){const v=m[g],b=v.query,N=bc(n,v);n.listenProvider_.startListening(ns(b),ds(n,b),N.hashFn,N.onComplete)}}}!d&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(ns(e),null):c.forEach(f=>{const m=n.queryToTagMap.get(_i(f));n.listenProvider_.stopListening(ns(f),m)}))}d_(n,c)}return l}function gc(n,e,t,s){const i=Dr(n,s);if(i!=null){const r=Ar(i),o=r.path,l=r.queryId,a=mt(o,e),c=new un(Ir(l),a,t);return Pr(n,o,c)}else return[]}function c_(n,e,t,s){const i=Dr(n,s);if(i){const r=Ar(i),o=r.path,l=r.queryId,a=mt(o,e),c=qe.fromObject(t),u=new fs(Ir(l),a,c);return Pr(n,o,u)}else return[]}function u_(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,m)=>{const g=mt(f,i);r=r||Kt(m,g),o=o||Xt(m)});let l=n.syncPointTree_.get(i);l?(o=o||Xt(l),r=r||Kt(l,Ce())):(l=new uc,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=Z.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,g)=>{const v=Kt(g,Ce());v&&(r=r.updateImmediateChild(m,v))}));const c=_c(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=_i(e);M(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=__();n.queryToTagMap.set(f,m),n.tagToQueryMap.set(m,f)}const u=fi(n.pendingWriteTree_,i);let d=t_(l,e,t,u,r,a);if(!c&&!o&&!s){const f=dc(l,e);d=d.concat(p_(n,e,f))}return d}function Rr(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=mt(o,e),c=Kt(l,a);if(c)return c});return ic(i,e,r,t,!0)}function h_(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=mt(c,t);s=s||Kt(u,d)});let i=n.syncPointTree_.get(t);i?s=s||Kt(i,Ce()):(i=new uc,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Jt(s,!0,!1):null,l=fi(n.pendingWriteTree_,e._path),a=hc(i,e,l,r?o.getNode():Z.EMPTY_NODE,r);return $d(a)}function Es(n,e){return vc(e,n.syncPointTree_,null,fi(n.pendingWriteTree_,Ce()))}function vc(n,e,t,s){if(me(n.path))return yc(n,e,t,s);{const i=e.get(Ce());t==null&&i!=null&&(t=Kt(i,Ce()));let r=[];const o=ge(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=rc(s,o);r=r.concat(vc(l,a,c,u))}return i&&(r=r.concat(Nr(i,n,s,t))),r}}function yc(n,e,t,s){const i=e.get(Ce());t==null&&i!=null&&(t=Kt(i,Ce()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=rc(s,o),u=n.operationForChild(o);u&&(r=r.concat(yc(u,l,a,c)))}),i&&(r=r.concat(Nr(i,n,s,t))),r}function bc(n,e){const t=e.query,s=ds(n,t);return{hashFn:()=>(Yd(e)||Z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?a_(n,t._path,s):l_(n,t._path);{const r=uf(i,t);return mc(n,t,null,r)}}}}function ds(n,e){const t=_i(e);return n.queryToTagMap.get(t)}function _i(n){return n._path.toString()+"$"+n._queryIdentifier}function Dr(n,e){return n.tagToQueryMap.get(e)}function Ar(n){const e=n.indexOf("$");return M(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ae(n.substr(0,e))}}function Pr(n,e,t){const s=n.syncPointTree_.get(e);M(s,"Missing sync point for query tag that we're tracking");const i=fi(n.pendingWriteTree_,e);return Nr(s,t,i,null)}function f_(n){return n.fold((e,t,s)=>{if(t&&Xt(t))return[di(t)];{let i=[];return t&&(i=fc(t)),Ct(s,(r,o)=>{i=i.concat(o)}),i}})}function ns(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(i_())(n._repo,n._path):n}function d_(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=_i(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function __(){return r_++}function p_(n,e,t){const s=e._path,i=ds(n,e),r=bc(n,t),o=n.listenProvider_.startListening(ns(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)M(!Xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,d)=>{if(!me(c)&&u&&Xt(u))return[di(u).query];{let f=[];return u&&(f=f.concat(fc(u).map(m=>m.query))),Ct(d,(m,g)=>{f=f.concat(g)}),f}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(ns(u),ds(n,u))}}return o}/**
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
 */class Or{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Or(t)}node(){return this.node_}}class Mr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=tt(this.path_,e);return new Mr(this.syncTree_,t)}node(){return Rr(this.syncTree_,this.path_)}}const m_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Oo=function(n,e,t){if(!n||typeof n!="object")return n;if(M(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return g_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return v_(n[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},g_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:M(!1,"Unexpected server value: "+n)}},v_=function(n,e,t){n.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&M(!1,"Unexpected increment value: "+s);const i=e.node();if(M(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},y_=function(n,e,t,s){return Lr(e,new Mr(t,n),s)},wc=function(n,e,t){return Lr(n,new Or(e),t)};function Lr(n,e,t){const s=n.getPriority().val(),i=Oo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Oo(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new lt(l,ut(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new lt(i))),o.forEachChild(ze,(l,a)=>{const c=Lr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Fr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function qr(n,e){let t=e instanceof Ae?e:new Ae(e),s=n,i=ge(t);for(;i!==null;){const r=An(s.node.children,i)||{children:{},childCount:0};s=new Fr(i,s,r),t=Le(t),i=ge(t)}return s}function jn(n){return n.node.value}function Cc(n,e){n.node.value=e,Zi(n)}function Ec(n){return n.node.childCount>0}function b_(n){return jn(n)===void 0&&!Ec(n)}function pi(n,e){Ct(n.node.children,(t,s)=>{e(new Fr(t,n,s))})}function Ic(n,e,t,s){t&&!s&&e(n),pi(n,i=>{Ic(i,e,!0,s)}),t&&s&&e(n)}function w_(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Is(n){return new Ae(n.parent===null?n.name:Is(n.parent)+"/"+n.name)}function Zi(n){n.parent!==null&&C_(n.parent,n.name,n)}function C_(n,e,t){const s=b_(t),i=Ht(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Zi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Zi(n))}/**
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
 */const E_=/[\[\].#$\/\u0000-\u001F\u007F]/,I_=/[\[\].#$\u0000-\u001F\u007F]/,Pi=10*1024*1024,Sc=function(n){return typeof n=="string"&&n.length!==0&&!E_.test(n)},kc=function(n){return typeof n=="string"&&n.length!==0&&!I_.test(n)},S_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kc(n)},k_=function(n,e,t,s){s&&e===void 0||Wr(fr(n,"value"),e,t)},Wr=function(n,e,t){const s=t instanceof Ae?new Hf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+tn(s));if(typeof e=="function")throw new Error(n+"contains a function "+tn(s)+" with contents = "+e.toString());if(wa(e))throw new Error(n+"contains "+e.toString()+" "+tn(s));if(typeof e=="string"&&e.length>Pi/3&&ci(e)>Pi)throw new Error(n+"contains a string greater than "+Pi+" utf8 bytes "+tn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ct(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Sc(o)))throw new Error(n+" contains an invalid key ("+o+") "+tn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Uf(s,o),Wr(n,l,s),zf(s)}),i&&r)throw new Error(n+' contains ".value" child '+tn(s)+" in addition to actual children.")}},Tc=function(n,e,t,s){if(!(s&&t===void 0)&&!kc(t))throw new Error(fr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},T_=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Tc(n,e,t,s)},N_=function(n,e){if(ge(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},R_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!S_(t))throw new Error(fr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class D_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nc(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!za(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Wt(n,e,t){Nc(n,t),A_(n,s=>At(s,e)||At(e,s))}function A_(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(P_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function P_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ln&&_t("event: "+t.toString()),Wn(s)}}}/**
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
 */const O_="repo_interrupt",M_=25;class L_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new D_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ys(),this.transactionQueueTree_=new Fr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function F_(n,e,t){if(n.stats_=gr(n.repoInfo_),n.forceRestClient_||_f())n.server_=new Vs(n.repoInfo_,(s,i,r,o)=>{Mo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Lo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new xt(n.repoInfo_,e,(s,i,r,o)=>{Mo(n,s,i,r,o)},s=>{Lo(n,s)},s=>{W_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=yf(n.repoInfo_,()=>new gd(n.stats_,n.server_)),n.infoData_=new fd,n.infoSyncTree_=new Po({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=Cs(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),xr(n,"connected",!1),n.serverSyncTree_=new Po({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Wt(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function q_(n){const t=n.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jr(n){return m_({timestamp:q_(n)})}function Mo(n,e,t,s,i){n.dataUpdateCount++;const r=new Ae(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=xs(t,c=>ut(c));o=c_(n.serverSyncTree_,r,a,i)}else{const a=ut(t);o=gc(n.serverSyncTree_,r,a,i)}else if(s){const a=xs(t,c=>ut(c));o=o_(n.serverSyncTree_,r,a)}else{const a=ut(t);o=Cs(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=gi(n,r)),Wt(n.eventQueue_,l,o)}function Lo(n,e){xr(n,"connected",e),e===!1&&B_(n)}function W_(n,e){Ct(e,(t,s)=>{xr(n,t,s)})}function xr(n,e,t){const s=new Ae("/.info/"+e),i=ut(t);n.infoData_.updateSnapshot(s,i);const r=Cs(n.infoSyncTree_,s,i);Wt(n.eventQueue_,s,r)}function Rc(n){return n.nextWriteId_++}function j_(n,e,t){const s=h_(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=ut(i).withIndex(e._queryParams.getIndex());u_(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Cs(n.serverSyncTree_,e._path,r);else{const l=ds(n.serverSyncTree_,e);o=gc(n.serverSyncTree_,e._path,r,l)}return Wt(n.eventQueue_,e._path,o),mc(n.serverSyncTree_,e,t,null,!0),r},i=>(mi(n,"get for query "+et(e)+" failed: "+i),Promise.reject(new Error(i))))}function x_(n,e,t,s,i){mi(n,"set",{path:e.toString(),value:t,priority:s});const r=jr(n),o=ut(t,s),l=Rr(n.serverSyncTree_,e),a=wc(o,l,r),c=Rc(n),u=pc(n.serverSyncTree_,e,a,c,!0);Nc(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,m)=>{const g=f==="ok";g||bt("set at "+e+" failed: "+f);const v=rn(n.serverSyncTree_,c,!g);Wt(n.eventQueue_,e,v),H_(n,i,f,m)});const d=Mc(n,e);gi(n,d),Wt(n.eventQueue_,d,[])}function B_(n){mi(n,"onDisconnectEvents");const e=jr(n),t=Ys();$i(n.onDisconnect_,Ce(),(i,r)=>{const o=y_(i,r,n.serverSyncTree_,e);Za(t,i,o)});let s=[];$i(t,Ce(),(i,r)=>{s=s.concat(Cs(n.serverSyncTree_,i,r));const o=Mc(n,i);gi(n,o)}),n.onDisconnect_=Ys(),Wt(n.eventQueue_,Ce(),s)}function G_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(O_)}function mi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),_t(t,...e)}function H_(n,e,t,s){e&&Wn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Dc(n,e,t){return Rr(n.serverSyncTree_,e,t)||Z.EMPTY_NODE}function Br(n,e=n.transactionQueueTree_){if(e||vi(n,e),jn(e)){const t=Pc(n,e);M(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&U_(n,Is(e),t)}else Ec(e)&&pi(e,t=>{Br(n,t)})}function U_(n,e,t){const s=t.map(c=>c.currentWriteId),i=Dc(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];M(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=mt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{mi(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(rn(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&d.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();vi(n,qr(n.transactionQueueTree_,e)),Br(n,n.transactionQueueTree_),Wt(n.eventQueue_,e,u);for(let f=0;f<d.length;f++)Wn(d[f])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{bt("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}gi(n,e)}},o)}function gi(n,e){const t=Ac(n,e),s=Is(t),i=Pc(n,t);return z_(n,i,s),s}function z_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=mt(t,a.path);let u=!1,d;if(M(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,d=a.abortReason,i=i.concat(rn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=M_)u=!0,d="maxretry",i=i.concat(rn(n.serverSyncTree_,a.currentWriteId,!0));else{const f=Dc(n,a.path,o);a.currentInputSnapshot=f;const m=e[l].update(f.val());if(m!==void 0){Wr("transaction failed: Data returned ",m,a.path);let g=ut(m);typeof m=="object"&&m!=null&&Ht(m,".priority")||(g=g.updatePriority(f.getPriority()));const b=a.currentWriteId,N=jr(n),T=wc(g,f,N);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=T,a.currentWriteId=Rc(n),o.splice(o.indexOf(b),1),i=i.concat(pc(n.serverSyncTree_,a.path,T,a.currentWriteId,a.applyLocally)),i=i.concat(rn(n.serverSyncTree_,b,!0))}else u=!0,d="nodata",i=i.concat(rn(n.serverSyncTree_,a.currentWriteId,!0))}Wt(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}vi(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Wn(s[l]);Br(n,n.transactionQueueTree_)}function Ac(n,e){let t,s=n.transactionQueueTree_;for(t=ge(e);t!==null&&jn(s)===void 0;)s=qr(s,t),e=Le(e),t=ge(e);return s}function Pc(n,e){const t=[];return Oc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Oc(n,e,t){const s=jn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);pi(e,i=>{Oc(n,i,t)})}function vi(n,e){const t=jn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Cc(e,t.length>0?t:void 0)}pi(e,s=>{vi(n,s)})}function Mc(n,e){const t=Is(Ac(n,e)),s=qr(n.transactionQueueTree_,e);return w_(s,i=>{Oi(n,i)}),Oi(n,s),Ic(s,i=>{Oi(n,i)}),t}function Oi(n,e){const t=jn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(M(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(M(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(rn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cc(e,void 0):t.length=r+1,Wt(n.eventQueue_,Is(e),i);for(let o=0;o<s.length;o++)Wn(s[o])}}/**
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
 */function V_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Y_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):bt(`Invalid query segment '${t}' in query '${n}'`)}return e}const Fo=function(n,e){const t=$_(n),s=t.namespace;t.domain==="firebase.com"&&Gt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||rf();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Oa(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Ae(t.pathString)}},$_=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(i=V_(n.substring(u,d)));const f=Y_(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class K_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class Q_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class J_{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Gr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return me(this._path)?null:Ga(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=wo(this._queryParams),t=pr(e);return t==="{}"?"default":t}get _queryObject(){return wo(this._queryParams)}isEqual(e){if(e=pn(e),!(e instanceof Gr))return!1;const t=this._repo===e._repo,s=za(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gf(this._path)}}class Ut extends Gr{constructor(e,t){super(e,t,new Cr,!1)}get parent(){const e=Ua(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ae(e),s=ps(this.ref,e);return new _s(this._node.getChild(t),s,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new _s(i,ps(this.ref,s),ze)))}hasChild(e){const t=new Ae(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function er(n,e){return n=pn(n),n._checkNotDeleted("ref"),e!==void 0?ps(n._root,e):n._root}function ps(n,e){return n=pn(n),ge(n._path)===null?T_("child","path",e,!1):Tc("child","path",e,!1),new Ut(n._repo,tt(n._path,e))}function Lc(n,e){n=pn(n),N_("set",n._path),k_("set",e,n._path,!1);const t=new ai;return x_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function X_(n){n=pn(n);const e=new J_(()=>{}),t=new Hr(e);return j_(n._repo,n,t).then(s=>new _s(s,new Ut(n._repo,n._path),n._queryParams.getIndex()))}class Hr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new K_("value",this,new _s(e.snapshotNode,new Ut(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Q_(this,e,t):null}matches(e){return e instanceof Hr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Z_(n,...e){let t=pn(n);for(const s of e)t=s._apply(t);return t}Xd(Ut);s_(Ut);/**
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
 */const ep="FIREBASE_DATABASE_EMULATOR_HOST",tr={};let tp=!1;function np(n,e,t,s){n.repoInfo_=new Oa(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function sp(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Fo(r,i),l=o.repoInfo,a,c;typeof process<"u"&&no&&(c=no[ep]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Fo(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Tn(Tn.OWNER):new mf(n.name,n.options,e);R_("Invalid Firebase Database URL",o),me(o.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=rp(l,n,u,new pf(n.name,t));return new op(d,n)}function ip(n,e){const t=tr[e];(!t||t[n.key]!==n)&&Gt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),G_(n),delete t[n.key]}function rp(n,e,t,s){let i=tr[e.name];i||(i={},tr[e.name]=i);let r=i[n.toURLString()];return r&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new L_(n,tp,t,s),i[n.toURLString()]=r,r}class op{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(F_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ip(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gt("Cannot call "+e+" on a deleted database.")}}function Fc(n=Bh(),e){const t=qh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Ru("database");s&&lp(t,...s)}return t}function lp(n,e,t,s={}){n=pn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Gt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Tn(Tn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Du(s.mockUserToken,n.app.options.projectId);r=new Tn(o)}np(i,e,t,r)}/**
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
 */function ap(n){Zh(xh),Gs(new rs("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return sp(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Sn(so,io,n),Sn(so,io,"esm2017")}xt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ap();var ms={},qc={},yi={};Object.defineProperty(yi,"__esModule",{value:!0});yi.rotx=void 0;function cp(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}yi.rotx=cp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=yi;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(qc);var Wc={},bi={};Object.defineProperty(bi,"__esModule",{value:!0});bi.base64=void 0;class up{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const hp=new up;bi.base64=hp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=bi;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(Wc);var jc={},wi={};Object.defineProperty(wi,"__esModule",{value:!0});wi.hex=void 0;class fp{encode(e){let t="",s="";for(let i=0;i<e.length;i++)t=e.charCodeAt(i).toString(16),s+=("000"+t).slice(-4);return s}decode(e){let t=e.match(/.{1,4}/g)||[],s="";for(let i=0;i<t.length;i++)s+=String.fromCharCode(parseInt(t[i],16));return s}}const dp=new fp;wi.hex=dp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=wi;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(jc);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=qc;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=Wc;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var s=jc;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return s.hex}})})(ms);let _p={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},xc={},pp={ixqSmg:"IQhiAgLdRq06vESQ81ncFDq8YCUrePFURt-_wRQ",icbpLwuiqv:"nzwvbqmzltm-zwwua.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-zwwua-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm-zwwua",abwziomJcksmb:"nzwvbqmzltm-zwwua.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"932448152432",ixxQl:"1:932448152432:emj:77m89n4801k6703i3i7lj5",umiaczmumvbQl:"O-ZSNPG52H5N"},Bc={};for(let[n,e]of Object.entries(_p))xc[ms.rotx(n,18)]=ms.rotx(e,18);for(let[n,e]of Object.entries(pp))Bc[ms.rotx(n,18)]=ms.rotx(e,18);let ti={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},ni={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},mp=["head","body","legs","feet","neck","back","ring","misc"],si={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged"},gp=Fc(_r(xc,"fd")),Gc=Fc(_r(Bc,"fd-rooms")),Ln="https://fantastic-frontier-roblox.fandom.com/wiki/",Zt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Dt={currentGameData:{equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1}},settings:{muted:!1,hardMode:{equipment:!1,weapons:!1,endless_equipment:!1,endless_weapons:!1},mode:"equipment"},playerStats:{equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},hard_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},hard_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},endless_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0},endless_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0}}},vp={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function nr(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function Ft(n){n.target.closest("button").blur()}function Cn(n){return Object.keys(n).length}function qt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Ur(){nr("?ls=true"),setTimeout(nr)}let qo=localStorage.getItem("fd-currentGameData"),Wo=localStorage.getItem("fd-settings"),jo=localStorage.getItem("fd-playerStats"),xo=localStorage.getItem("fd-changelogSeen"),Bo=localStorage.getItem("fd-helpSeen"),Go=localStorage.getItem("fd-supportMe");localStorage.getItem("fd-userId");let Mt=Et(qo?JSON.parse(qo):Dt.currentGameData),It=Et(),wt=Et(Wo?{...JSON.parse(Wo),mode:"equipment"}:Dt.settings),fn=Et(),Rn=Et(jo?JSON.parse(jo):Dt.playerStats),ii=Et({}),Ho=Et({}),dt=Et({component:null,complete:!1}),sr=Et(null),ri=Et(7),dn=Et(!1),gs=Et(xo?JSON.parse(xo):!1),ir=Et(Bo?JSON.parse(Bo):!1),on=Et(Go?JSON.parse(Go):{showAgain:!0,timesDenied:0,lastGamesPlayed:0}),Uo=[Mt,wt,Rn];for(let n=0;n<Uo.length;n++){let e=or(Uo[n]),t=Dt[Object.keys(Dt)[n]];for(let s of Object.keys(t))e[s]===void 0&&(e[s]=t[s]);for(let s of Object.keys(e))t[s]===void 0&&delete e[s]}wt.subscribe(n=>{Ur(),It.set(or(Mt)[n.mode]),fn.set(n.hardMode[n.mode]),localStorage.setItem("fd-settings",JSON.stringify(n))});Mt.subscribe(n=>{Ur(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});It.subscribe(n=>{Mt.update(e=>({...e,[or(wt).mode]:n}))});Rn.subscribe(n=>{Ur(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});fn.subscribe(n=>{wt.update(e=>({...e,hardMode:{...e.hardMode,[e.mode]:n}})),ri.set(n?6:7)});gs.subscribe(n=>localStorage.setItem("fd-changelogSeen",JSON.stringify(n)));ir.subscribe(n=>localStorage.setItem("fd-helpSeen",JSON.stringify(n)));on.subscribe(n=>localStorage.setItem("fd-supportMe",JSON.stringify(n)));function yp(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:d=m=>Math.sqrt(m)*120,easing:f=na}=s;return{delay:u,duration:_n(d)?d(Math.sqrt(a*a+c*c)):d,easing:f,css:(m,g)=>{const v=g*a,b=g*c,N=m+g*e.width/t.width,T=m+g*e.height/t.height;return`transform: ${r} translate(${v}px, ${b}px) scale(${N}, ${T});`}}}function zo(n,e,t){const s=n.slice();s[12]=e[t];const i=s[5][s[0].mode].find(function(...P){return n[11](s[12],...P)});s[13]=i;const r=s[2]?null:s[13].special==s[1].special;s[14]=r;const o=s[2]?null:Mi(s[1].types,s[13].types);s[15]=o;const l=s[2]?null:s[15]==s[1].types.length&&s[13].types.length==s[1].types.length;s[16]=l;const a=s[2]?s[13].slot==s[1].slot:null;s[17]=a;const c=s[2]?Mi(s[1].stats,s[13].stats):null;s[18]=c;const u=s[2]?s[18]==s[1].stats.length&&s[13].stats.length==s[1].stats.length:null;s[19]=u;const d=Math.ceil((s[13].cost.min+s[13].cost.max)/2);s[20]=d;const f=Math.ceil((s[1].cost.min+s[1].cost.max)/2);s[21]=f;const m=s[20]==s[21];s[22]=m;const g=Mi(s[1].colors,s[13].colors);s[23]=g;const v=s[23]==s[1].colors.length&&s[13].colors.length==s[1].colors.length;s[24]=v;const b=s[13].outline==s[1].outline;s[25]=b;const N=s[13].release==s[1].release;return s[26]=N,s}function Vo(n,e,t){const s=n.slice();return s[29]=e[t],s}function Yo(n,e,t){const s=n.slice();return s[35]=e[t],s}function $o(n,e,t){const s=n.slice();return s[32]=e[t],s}function Ko(n){let e=[],t=new Map,s,i,r=ye(n[4].chosenItems.toReversed());const o=l=>l[12];for(let l=0;l<r.length;l+=1){let a=zo(n,r,l),c=o(a);t.set(c,e[l]=sl(c,a))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=yt()},m(l,a){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(l,a);I(l,s,a),i=!0},p(l,a){if(a[0]&255){r=ye(l[4].chosenItems.toReversed()),St();for(let c=0;c<e.length;c+=1)e[c].r();e=gu(e,a,o,1,l,r,t,s.parentNode,mu,sl,s,zo);for(let c=0;c<e.length;c+=1)e[c].a();kt()}},i(l){if(!i){for(let a=0;a<r.length;a+=1)K(e[a]);i=!0}},o(l){for(let a=0;a<e.length;a+=1)oe(e[a]);i=!1},d(l){l&&C(s);for(let a=0;a<e.length;a+=1)e[a].d(l)}}}function bp(n){let e,t;function s(l,a){return l[13].types.length?Ep:Cp}let i=s(n),r=i(n),o=!n[6]&&n[15]&&!n[16]&&Jo(n);return{c(){r.c(),e=y(),o&&o.c(),t=yt()},m(l,a){r.m(l,a),I(l,e,a),o&&o.m(l,a),I(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[6]&&l[15]&&!l[16]?o?o.p(l,a):(o=Jo(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(C(e),C(t)),r.d(l),o&&o.d(l)}}}function wp(n){let e,t;function s(l,a){return l[13].stats.length?Sp:Ip}let i=s(n),r=i(n),o=!n[6]&&n[18]&&!n[19]&&Zo(n);return{c(){r.c(),e=y(),o&&o.c(),t=yt()},m(l,a){r.m(l,a),I(l,e,a),o&&o.m(l,a),I(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[6]&&l[18]&&!l[19]?o?o.p(l,a):(o=Zo(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(C(e),C(t)),r.d(l),o&&o.d(l)}}}function Cp(n){let e;return{c(){e=U("None")},m(t,s){I(t,e,s)},p:le,d(t){t&&C(e)}}}function Ep(n){let e,t=ye(n[13].types),s=[];for(let i=0;i<t.length;i+=1)s[i]=Qo(Yo(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=yt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);I(i,e,r)},p(i,r){if(r[0]&49){t=ye(i[13].types);let o;for(o=0;o<t.length;o+=1){const l=Yo(i,t,o);s[o]?s[o].p(l,r):(s[o]=Qo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&C(e),ct(s,i)}}}function Qo(n){let e=si[n[35]]+(n[35]==n[13].types[n[13].types.length-1]?"":", "),t;return{c(){t=U(e)},m(s,i){I(s,t,i)},p(s,i){i[0]&49&&e!==(e=si[s[35]]+(s[35]==s[13].types[s[13].types.length-1]?"":", "))&&_e(t,e)},d(s){s&&C(t)}}}function Jo(n){let e,t=n[15]+"",s;return{c(){e=p("span"),s=U(t),_(e,"class","bgInfo")},m(i,r){I(i,e,r),h(e,s)},p(i,r){r[0]&55&&t!==(t=i[15]+"")&&_e(s,t)},d(i){i&&C(e)}}}function Ip(n){let e;return{c(){e=U("None")},m(t,s){I(t,e,s)},p:le,d(t){t&&C(e)}}}function Sp(n){let e,t=ye(n[13].stats),s=[];for(let i=0;i<t.length;i+=1)s[i]=Xo($o(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=yt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);I(i,e,r)},p(i,r){if(r[0]&49){t=ye(i[13].stats);let o;for(o=0;o<t.length;o+=1){const l=$o(i,t,o);s[o]?s[o].p(l,r):(s[o]=Xo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&C(e),ct(s,i)}}}function Xo(n){let e=ni[n[32]]+(n[32]==n[13].stats[n[13].stats.length-1]?"":", "),t;return{c(){t=U(e)},m(s,i){I(s,t,i)},p(s,i){i[0]&49&&e!==(e=ni[s[32]]+(s[32]==s[13].stats[s[13].stats.length-1]?"":", "))&&_e(t,e)},d(s){s&&C(t)}}}function Zo(n){let e,t=n[18]+"",s;return{c(){e=p("span"),s=U(t),_(e,"class","bgInfo")},m(i,r){I(i,e,r),h(e,s)},p(i,r){r[0]&55&&t!==(t=i[18]+"")&&_e(s,t)},d(i){i&&C(e)}}}function kp(n){let e=n[20].toLocaleString()+"",t,s,i,r;return{c(){t=U(e),s=y(),i=p("br"),r=U(`\r
                        Gold`)},m(o,l){I(o,t,l),I(o,s,l),I(o,i,l),I(o,r,l)},p(o,l){l[0]&49&&e!==(e=o[20].toLocaleString()+"")&&_e(t,e)},d(o){o&&(C(t),C(s),C(i),C(r))}}}function Tp(n){let e;return{c(){e=U("Unpurchasable")},m(t,s){I(t,e,s)},p:le,d(t){t&&C(e)}}}function el(n){let e,t;return{c(){e=p("iconify-icon"),Ye(e,"class","bgInfo"),Ye(e,"icon","mingcute:arrow-up-fill"),Ye(e,"flip",t=n[20]>n[21]?"vertical":"")},m(s,i){I(s,e,i)},p(s,i){i[0]&51&&t!==(t=s[20]>s[21]?"vertical":"")&&Ye(e,"flip",t)},d(s){s&&C(e)}}}function tl(n){let e=(n[29]==n[13].colors[0]?qt(n[29]):n[29])+(n[29]==n[13].colors[n[13].colors.length-1]?"":", "),t;return{c(){t=U(e)},m(s,i){I(s,t,i)},p(s,i){i[0]&49&&e!==(e=(s[29]==s[13].colors[0]?qt(s[29]):s[29])+(s[29]==s[13].colors[s[13].colors.length-1]?"":", "))&&_e(t,e)},d(s){s&&C(t)}}}function nl(n){let e,t=n[23]+"",s;return{c(){e=p("span"),s=U(t),_(e,"class","bgInfo")},m(i,r){I(i,e,r),h(e,s)},p(i,r){r[0]&51&&t!==(t=i[23]+"")&&_e(s,t)},d(i){i&&C(e)}}}function sl(n,e){let t,s,i,r,o,l,a,c,u,d,f,m=e[13].name+"",g,v,b,N,T,P=(e[2]?qt(e[13].slot):e[13].special?"Yes":"No")+"",A,R,j,S,k,D,Y,ee,z,J,be,H,ue,G,he,ie,$,ne,x,E=qt(e[13].outline)+"",L,q,F,ae,Ee,Ke=ti[e[13].release]+"",Fe,je,Qe,we,rt,Je,ke=le,te,Ge,pt;function Te(Q,ve){return Q[2]?wp:bp}let ce=Te(e),Pe=ce(e);function Xe(Q,ve){return Q[13].cost.min==null?Tp:kp}let Ie=Xe(e),X=Ie(e),re=!e[6]&&!e[22]&&e[20]&&el(e),W=ye(e[13].colors),se=[];for(let Q=0;Q<W.length;Q+=1)se[Q]=tl(Vo(e,W,Q));let Ne=!e[6]&&e[23]&&!e[24]&&nl(e);return{key:n,first:null,c(){t=p("div"),s=p("div"),i=p("a"),r=p("img"),a=y(),c=p("iconify-icon"),d=y(),f=p("span"),g=U(m),N=y(),T=p("span"),A=U(P),S=y(),k=p("span"),Pe.c(),ee=y(),z=p("span"),X.c(),J=y(),re&&re.c(),ue=y(),G=p("span");for(let Q=0;Q<se.length;Q+=1)se[Q].c();he=y(),Ne&&Ne.c(),ne=y(),x=p("span"),L=U(E),ae=y(),Ee=p("span"),Fe=U(Ke),je=U(" Update"),rt=y(),nt(r.src,o=Zt+e[13].image)||_(r,"src",o),_(r,"alt",l=e[13].name),_(r,"class","svelte-1iqikjy"),Ye(c,"icon","tabler:link"),Ye(c,"class","svelte-1iqikjy"),_(i,"class","flex fjc-center fai-center svelte-1iqikjy"),_(i,"href",u=Ln+e[13].link),_(i,"target","_blank"),_(f,"class","tooltip"),_(f,"id","right"),_(s,"id","itemImage"),_(s,"class","ff-item svelte-1iqikjy"),_(T,"class","ff-bg ff-item svelte-1iqikjy"),_(T,"id",R=(e[2]?e[17]:e[14])?"correct":"wrong"),_(k,"class","ff-bg ff-item svelte-1iqikjy"),_(k,"id",D=(e[2]?e[19]:e[16])?"correct":(e[2]?e[18]:e[15])?"partial":"wrong"),Ue(k,"smallerStats",e[2]&&e[13].stats.length>=7),_(z,"class","ff-bg ff-item svelte-1iqikjy"),_(z,"id",be=e[22]?"correct":"wrong"),_(G,"class","ff-bg ff-item svelte-1iqikjy"),_(G,"id",ie=e[24]?"correct":e[23]?"partial":"wrong"),_(x,"class","ff-bg ff-item svelte-1iqikjy"),_(x,"id",q=e[25]?"correct":"wrong"),_(Ee,"class","ff-bg ff-item svelte-1iqikjy"),_(Ee,"id",Qe=e[26]?"correct":"wrong"),_(t,"class","itemRow svelte-1iqikjy"),this.first=t},m(Q,ve){I(Q,t,ve),h(t,s),h(s,i),h(i,r),h(i,a),h(i,c),h(s,d),h(s,f),h(f,g),h(t,N),h(t,T),h(T,A),h(t,S),h(t,k),Pe.m(k,null),h(t,ee),h(t,z),X.m(z,null),h(z,J),re&&re.m(z,null),h(t,ue),h(t,G);for(let Re=0;Re<se.length;Re+=1)se[Re]&&se[Re].m(G,null);h(G,he),Ne&&Ne.m(G,null),h(t,ne),h(t,x),h(x,L),h(t,ae),h(t,Ee),h(Ee,Fe),h(Ee,je),h(t,rt),te=!0,Ge||(pt=[zl(v=e[8].call(null,s,[e[14],e[15],e[16],e[17],e[18],e[19],e[22],e[23],e[24],e[25],e[26]])),Se(Ee,"introend",e[10])],Ge=!0)},p(Q,ve){if(e=Q,(!te||ve[0]&49&&!nt(r.src,o=Zt+e[13].image))&&_(r,"src",o),(!te||ve[0]&49&&l!==(l=e[13].name))&&_(r,"alt",l),(!te||ve[0]&49&&u!==(u=Ln+e[13].link))&&_(i,"href",u),(!te||ve[0]&49)&&m!==(m=e[13].name+"")&&_e(g,m),v&&_n(v.update)&&ve[0]&55&&v.update.call(null,[e[14],e[15],e[16],e[17],e[18],e[19],e[22],e[23],e[24],e[25],e[26]]),(!te||ve[0]&53)&&P!==(P=(e[2]?qt(e[13].slot):e[13].special?"Yes":"No")+"")&&_e(A,P),(!te||ve[0]&55&&R!==(R=(e[2]?e[17]:e[14])?"correct":"wrong"))&&_(T,"id",R),ce===(ce=Te(e))&&Pe?Pe.p(e,ve):(Pe.d(1),Pe=ce(e),Pe&&(Pe.c(),Pe.m(k,null))),(!te||ve[0]&55&&D!==(D=(e[2]?e[19]:e[16])?"correct":(e[2]?e[18]:e[15])?"partial":"wrong"))&&_(k,"id",D),(!te||ve[0]&53)&&Ue(k,"smallerStats",e[2]&&e[13].stats.length>=7),Ie===(Ie=Xe(e))&&X?X.p(e,ve):(X.d(1),X=Ie(e),X&&(X.c(),X.m(z,J))),!e[6]&&!e[22]&&e[20]?re?re.p(e,ve):(re=el(e),re.c(),re.m(z,null)):re&&(re.d(1),re=null),(!te||ve[0]&51&&be!==(be=e[22]?"correct":"wrong"))&&_(z,"id",be),ve[0]&49){W=ye(e[13].colors);let Re;for(Re=0;Re<W.length;Re+=1){const We=Vo(e,W,Re);se[Re]?se[Re].p(We,ve):(se[Re]=tl(We),se[Re].c(),se[Re].m(G,he))}for(;Re<se.length;Re+=1)se[Re].d(1);se.length=W.length}!e[6]&&e[23]&&!e[24]?Ne?Ne.p(e,ve):(Ne=nl(e),Ne.c(),Ne.m(G,null)):Ne&&(Ne.d(1),Ne=null),(!te||ve[0]&51&&ie!==(ie=e[24]?"correct":e[23]?"partial":"wrong"))&&_(G,"id",ie),(!te||ve[0]&49)&&E!==(E=qt(e[13].outline)+"")&&_e(L,E),(!te||ve[0]&51&&q!==(q=e[25]?"correct":"wrong"))&&_(x,"id",q),(!te||ve[0]&49)&&Ke!==(Ke=ti[e[13].release]+"")&&_e(Fe,Ke),(!te||ve[0]&51&&Qe!==(Qe=e[26]?"correct":"wrong"))&&_(Ee,"id",Qe)},r(){Je=t.getBoundingClientRect()},f(){lu(t),ke()},a(){ke(),ke=ou(t,Je,yp,{duration:125})},i(Q){te||(Q&&Ze(()=>{te&&(b||(b=Oe(s,ot,{duration:e[3]?0:300},!0)),b.run(1))}),Q&&Ze(()=>{te&&(j||(j=Oe(T,ot,{duration:e[3]?0:300,delay:e[3]?0:250},!0)),j.run(1))}),Q&&Ze(()=>{te&&(Y||(Y=Oe(k,ot,{duration:e[3]?0:300,delay:e[3]?0:550},!0)),Y.run(1))}),Q&&Ze(()=>{te&&(H||(H=Oe(z,ot,{duration:e[3]?0:300,delay:e[3]?0:850},!0)),H.run(1))}),Q&&Ze(()=>{te&&($||($=Oe(G,ot,{duration:e[3]?0:300,delay:e[3]?0:1150},!0)),$.run(1))}),Q&&Ze(()=>{te&&(F||(F=Oe(x,ot,{duration:e[3]?0:300,delay:e[3]?0:1450},!0)),F.run(1))}),Q&&Ze(()=>{te&&(we||(we=Oe(Ee,ot,{duration:e[3]?0:300,delay:e[3]?0:1750},!0)),we.run(1))}),te=!0)},o(Q){Q&&(b||(b=Oe(s,ot,{duration:e[3]?0:300},!1)),b.run(0)),Q&&(j||(j=Oe(T,ot,{duration:e[3]?0:300,delay:e[3]?0:250},!1)),j.run(0)),Q&&(Y||(Y=Oe(k,ot,{duration:e[3]?0:300,delay:e[3]?0:550},!1)),Y.run(0)),Q&&(H||(H=Oe(z,ot,{duration:e[3]?0:300,delay:e[3]?0:850},!1)),H.run(0)),Q&&($||($=Oe(G,ot,{duration:e[3]?0:300,delay:e[3]?0:1150},!1)),$.run(0)),Q&&(F||(F=Oe(x,ot,{duration:e[3]?0:300,delay:e[3]?0:1450},!1)),F.run(0)),Q&&(we||(we=Oe(Ee,ot,{duration:e[3]?0:300,delay:e[3]?0:1750},!1)),we.run(0)),te=!1},d(Q){Q&&C(t),Q&&b&&b.end(),Q&&j&&j.end(),Pe.d(),Q&&Y&&Y.end(),X.d(),re&&re.d(),Q&&H&&H.end(),ct(se,Q),Ne&&Ne.d(),Q&&$&&$.end(),Q&&F&&F.end(),Q&&we&&we.end(),Ge=!1,st(pt)}}}function Np(n){let e,t,s,i,r,o=n[2]?"Slot":"Has Special",l,a,c,u=n[2]?"Stats":"Stat Intakes",d,f,m,g,v,b,N,T,P,A,R,j=!n[3]&&Ko(n);return{c(){e=p("div"),t=p("div"),s=p("span"),s.textContent="Item",i=y(),r=p("span"),l=U(o),a=y(),c=p("span"),d=U(u),f=y(),m=p("span"),m.textContent="Avg. Cost",g=y(),v=p("span"),v.textContent="Colors",b=y(),N=p("span"),N.textContent="Outline",T=y(),P=p("span"),P.textContent="Release",A=y(),j&&j.c(),_(s,"class","ff-item svelte-1iqikjy"),_(r,"class","ff-item svelte-1iqikjy"),Ue(r,"smaller-fs",!n[2]),_(c,"class","ff-item svelte-1iqikjy"),Ue(c,"smaller-fs",!n[2]),_(m,"class","ff-item svelte-1iqikjy"),_(v,"class","ff-item svelte-1iqikjy"),_(N,"class","ff-item svelte-1iqikjy"),_(P,"class","ff-item svelte-1iqikjy"),_(t,"id","categories"),_(t,"class","svelte-1iqikjy"),_(e,"class","gameboard ff-bg fd-col flex posrel border-tp bs svelte-1iqikjy")},m(S,k){I(S,e,k),h(e,t),h(t,s),h(t,i),h(t,r),h(r,l),h(t,a),h(t,c),h(c,d),h(t,f),h(t,m),h(t,g),h(t,v),h(t,b),h(t,N),h(t,T),h(t,P),h(e,A),j&&j.m(e,null),R=!0},p(S,k){(!R||k[0]&4)&&o!==(o=S[2]?"Slot":"Has Special")&&_e(l,o),(!R||k[0]&4)&&Ue(r,"smaller-fs",!S[2]),(!R||k[0]&4)&&u!==(u=S[2]?"Stats":"Stat Intakes")&&_e(d,u),(!R||k[0]&4)&&Ue(c,"smaller-fs",!S[2]),S[3]?j&&(St(),oe(j,1,1,()=>{j=null}),kt()):j?(j.p(S,k),k[0]&8&&K(j,1)):(j=Ko(S),j.c(),K(j,1),j.m(e,null))},i(S){R||(K(j),R=!0)},o(S){oe(j),R=!1},d(S){S&&C(e),j&&j.d()}}}function Mi(n,e){return n===void 0||e===void 0?void 0:n.filter(s=>e.includes(s)).length}function Rp(n,e,t){let s,i,r,o,l;de(n,wt,v=>t(0,s=v)),de(n,It,v=>t(4,i=v)),de(n,ii,v=>t(5,r=v)),de(n,fn,v=>t(6,o=v)),de(n,dn,v=>t(7,l=v));let{dailyItemsData:a}=e,c,u,d=!1;function f(v,[b,N,T,P,A,R,j,S,k,D,Y]){i.chosenItems.length==i.rowInfo.length+1&&It.update(ee=>({...ee,rowInfo:[...ee.rowInfo,[u?P:b,(u?R:T)?1:(u?A:N)?0:-1,j,k?1:S?0:-1,D,Y]]}))}const m=()=>fe(dn,l=!1,l),g=(v,b)=>b.name==v.name;return n.$$set=v=>{"dailyItemsData"in v&&t(9,a=v.dailyItemsData)},n.$$.update=()=>{n.$$.dirty[0]&1&&s.mode&&(t(3,d=!0),setTimeout(()=>t(3,d=!1),10)),n.$$.dirty[0]&513&&t(1,c=a[s.mode]),n.$$.dirty[0]&1&&(s.mode.includes("equipment")?t(2,u=!0):s.mode.includes("weapons")&&t(2,u=!1))},[s,c,u,d,i,r,o,l,f,a,m,g]}class Dp extends ft{constructor(e){super(),ht(this,e,Rp,Np,it,{dailyItemsData:9},null,[-1,-1])}}function Ap(n){let e,t,s,i;return{c(){e=p("div"),t=p("input"),_(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],_(t,"type","checkbox"),t.checked=n[1],_(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),Ue(e,"unavailable",n[2]),Dn(e,"--s",`${n[0]}rem`)},m(r,o){I(r,e,o),h(e,t),s||(i=[Se(t,"change",n[5]),Se(t,"keydown",n[6])],s=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&Ue(e,"unavailable",r[2]),o&1&&Dn(e,"--s",`${r[0]}rem`)},i:le,o:le,d(r){r&&C(e),s=!1,st(i)}}}function Pp(n,e,t){let{size:s,checked:i=!1,disabled:r=!1,forced:o=!1}=e;const l=Xl(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,s=u.size),"checked"in u&&t(1,i=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[s,i,r,o,l,a,c]}class Os extends ft{constructor(e){super(),ht(this,e,Pp,Ap,it,{size:0,checked:1,disabled:2,forced:3})}}function il(n,e,t){const s=n.slice();s[22]=e[t];const i=s[1]?!1:s[9].chosenItems.find(function(...o){return n[20](s[22],...o)})!=null;return s[23]=i,s}function rl(n){let e,t,s,i=ye(n[1]?n[5].length?n[5]:n[8][n[3]]:n[5]),r=[];for(let o=0;o<i.length;o+=1)r[o]=ol(il(n,i,o));return{c(){e=p("div");for(let o=0;o<r.length;o+=1)r[o].c();_(e,"class","itemList ff-bg flex fd-col svelte-1up5u20"),Ue(e,"noGuess",n[1])},m(o,l){I(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[21](e),s=!0},p(o,l){if(l&2938){i=ye(o[1]?o[5].length?o[5]:o[8][o[3]]:o[5]);let a;for(a=0;a<i.length;a+=1){const c=il(o,i,a);r[a]?r[a].p(c,l):(r[a]=ol(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}(!s||l&2)&&Ue(e,"noGuess",o[1])},i(o){s||(o&&Ze(()=>{s&&(t||(t=Oe(e,Bt,{duration:75},!0)),t.run(1))}),s=!0)},o(o){o&&(t||(t=Oe(e,Bt,{duration:75},!1)),t.run(0)),s=!1},d(o){o&&C(e),ct(r,o),n[21](null),o&&t&&t.end()}}}function ol(n){let e,t,s,i,r,o=n[22].name+"",l,a,c,u,d;function f(){return n[18](n[23],n[22])}return{c(){e=p("button"),t=p("img"),i=y(),r=p("span"),l=U(o),a=y(),nt(t.src,s=Zt+n[22].image)||_(t,"src",s),_(t,"alt",""),_(t,"class","svelte-1up5u20"),e.disabled=c=n[23],_(e,"class","listItem flex fai-center no-bg-change svelte-1up5u20"),Ue(e,"unavailable",n[23])},m(m,g){I(m,e,g),h(e,t),h(e,i),h(e,r),h(r,l),h(e,a),u||(d=[Se(e,"click",f),Se(e,"focusout",n[19])],u=!0)},p(m,g){n=m,g&298&&!nt(t.src,s=Zt+n[22].image)&&_(t,"src",s),g&298&&o!==(o=n[22].name+"")&&_e(l,o),g&810&&c!==(c=n[23])&&(e.disabled=c),g&810&&Ue(e,"unavailable",n[23])},d(m){m&&C(e),u=!1,st(d)}}}function Op(n){let e,t,s,i,r,o,l=n[8]&&(n[1]?!0:n[5].length)&&n[6]&&rl(n);return{c(){e=p("input"),s=y(),l&&l.c(),i=yt(),e.disabled=n[7],_(e,"type","text"),_(e,"class","searcherInput border-tp br-1 svelte-1up5u20"),_(e,"placeholder",t=n[1]?"Item to be guessed...":`Guess the item for game #${n[0]+1} (${n[3]})...`)},m(a,c){I(a,e,c),n[16](e),I(a,s,c),l&&l.m(a,c),I(a,i,c),r||(o=[Se(window,"mousedown",n[15]),Se(e,"input",n[10]),Se(e,"focusin",n[17])],r=!0)},p(a,[c]){c&128&&(e.disabled=a[7]),c&11&&t!==(t=a[1]?"Item to be guessed...":`Guess the item for game #${a[0]+1} (${a[3]})...`)&&_(e,"placeholder",t),a[8]&&(a[1]||a[5].length)&&a[6]?l?(l.p(a,c),c&354&&K(l,1)):(l=rl(a),l.c(),K(l,1),l.m(i.parentNode,i)):l&&(St(),oe(l,1,1,()=>{l=null}),kt())},i(a){K(l)},o(a){oe(l)},d(a){a&&(C(e),C(s),C(i)),n[16](null),l&&l.d(a),r=!1,st(o)}}}function Mp(n,e,t){let s,i,r,o,l;de(n,wt,D=>t(14,i=D)),de(n,dn,D=>t(7,r=D)),de(n,ii,D=>t(8,o=D)),de(n,It,D=>t(9,l=D));let{gameNumber:a=0,noGuess:c=!1,noGuessMode:u=null,noGuessItem:d=""}=e,f,m,g=[],v=!1;function b(){let D=f.value.toLowerCase();if(t(5,g=[]),!!D)for(let Y of o[s])Y.name.toLowerCase().includes(D)&&g.push(Y)}function N(D){r||(c?(t(12,d=D.name),t(6,v=!1)):(fe(dn,r=!0,r),It.update(Y=>({...Y,chosenItems:[...Y.chosenItems,{name:D.name}]}))),t(2,f.value="",f),b())}const T=D=>{m&&D.target!=f&&!m.contains(D.target)&&t(6,v=!1)};function P(D){Ve[D?"unshift":"push"](()=>{f=D,t(2,f)})}const A=()=>t(6,v=!0),R=(D,Y)=>{D||N(Y)},j=D=>{m.contains(D.relatedTarget)||t(6,v=!1)},S=(D,Y)=>Y.name==D.name;function k(D){Ve[D?"unshift":"push"](()=>{m=D,t(4,m)})}return n.$$set=D=>{"gameNumber"in D&&t(0,a=D.gameNumber),"noGuess"in D&&t(1,c=D.noGuess),"noGuessMode"in D&&t(13,u=D.noGuessMode),"noGuessItem"in D&&t(12,d=D.noGuessItem)},n.$$.update=()=>{n.$$.dirty&24576&&t(3,s=u||i.mode),n.$$.dirty&12&&s&&f&&b()},[a,c,f,s,m,g,v,r,o,l,b,N,d,u,i,T,P,A,R,j,S,k]}class Hc extends ft{constructor(e){super(),ht(this,e,Mp,Op,it,{gameNumber:0,noGuess:1,noGuessMode:13,noGuessItem:12})}}function ll(n){let e,t,s;return{c(){e=p("span"),_(e,"id","HPFlash"),_(e,"class","svelte-nha9gw")},m(i,r){I(i,e,r),s=!0},i(i){s||(t&&t.end(1),s=!0)},o(i){i&&(t=_u(e,Bt,{duration:200})),s=!1},d(i){i&&C(e),i&&t&&t.end()}}}function Lp(n){let e,t,s,i,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,d,f,m,g,v,b=n[4]?"You've lost your remaining armor.":"Your armor is protecting you.",N,T,P,A,R,j,S,k,D,Y,ee,z=n[1]&&ll();function J(H){n[6](H)}let be={};return n[0]!==void 0&&(be.gameNumber=n[0]),D=new Hc({props:be}),Ve.push(()=>Nt(D,"gameNumber",J)),{c(){e=p("div"),t=p("div"),s=p("div"),i=p("div"),r=p("div"),o=p("span"),a=U(l),c=U("/600"),u=y(),d=p("button"),f=p("img"),g=y(),v=p("span"),N=U(b),T=y(),P=p("br"),A=U(`\r
                You can take `),R=U(n[2]),j=U(" hits at most!"),S=y(),z&&z.c(),k=y(),He(D.$$.fragment),_(o,"class","svelte-nha9gw"),_(r,"class","HPBackground svelte-nha9gw"),Dn(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),_(i,"class","innerGameHP flex posrel svelte-nha9gw"),_(s,"class","outerGameHP posrel svelte-nha9gw"),nt(f.src,m="misc/armor.svg")||_(f,"src",m),_(f,"alt","Armor"),_(f,"class","svelte-nha9gw"),Ue(f,"noArmor",n[4]),_(v,"class","tooltip svelte-nha9gw"),_(v,"id","right"),_(d,"class","ff-item posrel br-1 svelte-nha9gw"),_(d,"id","armorIcon"),_(t,"class","gameHPCont flex cg-1 svelte-nha9gw"),_(e,"class","currentGameInfo ff-bg flex fd-row fw fjc-center fai-center posrel border-tp br-1 bs svelte-nha9gw")},m(H,ue){I(H,e,ue),h(e,t),h(t,s),h(s,i),h(i,r),h(r,o),h(o,a),h(o,c),h(t,u),h(t,d),h(d,f),h(d,g),h(d,v),h(v,N),h(v,T),h(v,P),h(v,A),h(v,R),h(v,j),h(e,S),z&&z.m(e,null),h(e,k),xe(D,e,null),ee=!0},p(H,[ue]){(!ee||ue&12)&&l!==(l=Math.round(600-H[3].chosenItems.length*(600/H[2]))+"")&&_e(a,l),ue&12&&Dn(r,"width",`${Math.floor(100*(H[2]-H[3].chosenItems.length)/H[2])}%`),(!ee||ue&16)&&Ue(f,"noArmor",H[4]),(!ee||ue&16)&&b!==(b=H[4]?"You've lost your remaining armor.":"Your armor is protecting you.")&&_e(N,b),(!ee||ue&4)&&_e(R,H[2]),H[1]?z?ue&2&&K(z,1):(z=ll(),z.c(),K(z,1),z.m(e,k)):z&&(St(),oe(z,1,1,()=>{z=null}),kt());const G={};!Y&&ue&1&&(Y=!0,G.gameNumber=H[0],Tt(()=>Y=!1)),D.$set(G)},i(H){ee||(K(z),K(D.$$.fragment,H),ee=!0)},o(H){oe(z),oe(D.$$.fragment,H),ee=!1},d(H){H&&C(e),z&&z.d(),Be(D)}}}function Fp(n,e,t){let s,i,r,o;de(n,dn,u=>t(5,s=u)),de(n,ri,u=>t(2,i=u)),de(n,It,u=>t(3,r=u)),de(n,fn,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&s&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,i,r,o,s,c]}class qp extends ft{constructor(e){super(),ht(this,e,Fp,Lp,it,{gameNumber:0})}}function al(n,e,t){const s=n.slice();return s[9]=e[t],s}function cl(n,e,t){const s=n.slice();return s[12]=e[t],s}function ul(n){let e,t=(n[12]===!0||n[12]===1?n[4].html.blue:n[12]===0?n[4].html.yellow:n[12]===!1||n[12]===-1?n[4].html.red:null)+"",s;return{c(){e=new Ql(!1),s=yt(),e.a=s},m(i,r){e.m(t,i,r),I(i,s,r)},p(i,r){r&1&&t!==(t=(i[12]===!0||i[12]===1?i[4].html.blue:i[12]===0?i[4].html.yellow:i[12]===!1||i[12]===-1?i[4].html.red:null)+"")&&e.p(t)},d(i){i&&(C(s),e.d())}}}function hl(n){let e,t,s=ye(n[9]),i=[];for(let r=0;r<s.length;r+=1)i[r]=ul(cl(n,s,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=y(),t=p("br")},m(r,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(r,o);I(r,e,o),I(r,t,o)},p(r,o){if(o&17){s=ye(r[9]);let l;for(l=0;l<s.length;l+=1){const a=cl(r,s,l);i[l]?i[l].p(a,o):(i[l]=ul(a),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},d(r){r&&(C(e),C(t)),ct(i,r)}}}function Wp(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v=n[2]?"Copied!":"Copy",b,N,T,P=ye(n[0].rowInfo.toReversed()),A=[];for(let R=0;R<P.length;R+=1)A[R]=hl(al(n,P,R));return{c(){e=p("div"),t=p("span"),t.textContent="Game Stats",s=y(),i=p("span"),r=U(n[3]),o=y(),l=p("br"),a=y();for(let R=0;R<A.length;R+=1)A[R].c();c=y(),u=p("button"),d=U(`Share Stats\r
        `),f=p("iconify-icon"),m=y(),g=p("span"),b=U(v),_(i,"class","smaller-fs"),Ye(f,"icon","ri:share-fill"),_(g,"class","tooltip"),_(g,"id","top"),_(u,"class","flex fai-center cg-1 posrel border-tp br-1 smaller-fs svelte-q44wd4"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs")},m(R,j){I(R,e,j),h(e,t),h(e,s),h(e,i),h(i,r),h(i,o),h(i,l),h(i,a);for(let S=0;S<A.length;S+=1)A[S]&&A[S].m(i,null);h(e,c),h(e,u),h(u,d),h(u,f),h(u,m),h(u,g),h(g,b),N||(T=Se(u,"click",n[8]),N=!0)},p(R,[j]){if(j&8&&_e(r,R[3]),j&17){P=ye(R[0].rowInfo.toReversed());let S;for(S=0;S<P.length;S+=1){const k=al(R,P,S);A[S]?A[S].p(k,j):(A[S]=hl(k),A[S].c(),A[S].m(i,null))}for(;S<A.length;S+=1)A[S].d(1);A.length=P.length}j&4&&v!==(v=R[2]?"Copied!":"Copy")&&_e(b,v)},i:le,o:le,d(R){R&&C(e),ct(A,R),N=!1,T()}}}function jp(n,e,t){let s,i,r,o;de(n,It,f=>t(0,i=f)),de(n,wt,f=>t(6,r=f)),de(n,fn,f=>t(7,o=f));let{gameNumber:l}=e,a={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},c="",u=!1;const d=f=>{Ft(f),navigator.clipboard.writeText(`${s}
${c}
${location.origin+location.pathname}`),t(2,u=!0),setTimeout(()=>t(2,u=!1),1e3)};return n.$$set=f=>{"gameNumber"in f&&t(5,l=f.gameNumber)},n.$$.update=()=>{n.$$.dirty&224&&t(3,s=`${o?"(Nightmare)":""} Frontierdle - ${qt(r.mode)} #${l+1}`),n.$$.dirty&67&&r.mode&&setTimeout(()=>{t(1,c="");for(let f of i.rowInfo.toReversed()){let m="";for(let g of f)m+=g===!0||g===1?a.js.blue:g===0?a.js.yellow:g===!1||g===-1?a.js.red:null;t(1,c+=m+`
`)}})},[i,c,u,s,a,l,r,o,d]}class xp extends ft{constructor(e){super(),ht(this,e,jp,Wp,it,{gameNumber:5})}}function fl(n,e,t){const s=n.slice();s[8]=e[t];const i=s[1]?s[2]:s[4][s[8]+s[3]];s[9]=i;const r=s[8].includes("hard");s[10]=r;const o=Math.max(...Object.values(s[9].winInfo));return s[11]=o,s}function dl(n,e,t){const s=n.slice();return s[14]=e[t][0],s[15]=e[t][1],s}function _l(n){let e,t,s=n[9].streak+"",i,r,o;return{c(){e=p("div"),t=p("span"),i=U(s),r=y(),o=p("span"),o.textContent="Current Streak",_(o,"id","statsTitle"),_(o,"class","svelte-1dnm67b"),_(e,"class","svelte-1dnm67b")},m(l,a){I(l,e,a),h(e,t),h(t,i),h(e,r),h(e,o)},p(l,a){a&94&&s!==(s=l[9].streak+"")&&_e(i,s)},d(l){l&&C(e)}}}function pl(n){let e,t,s=n[14]+"",i,r,o,l,a,c=n[15]+"",u,d;return{c(){e=p("div"),t=p("span"),i=U(s),r=y(),o=p("span"),o.innerHTML="",l=y(),a=p("span"),u=U(c),d=y(),_(t,"id","guessNum"),_(t,"class","svelte-1dnm67b"),_(o,"class","posrel border-tp svelte-1dnm67b"),_(o,"id","winsBar"),Dn(o,"width",`${n[15]*80/n[11]}%`),_(a,"class","smaller-fs svelte-1dnm67b"),_(a,"id","winsNum"),_(e,"class","flex fai-center svelte-1dnm67b")},m(f,m){I(f,e,m),h(e,t),h(t,i),h(e,r),h(e,o),h(e,l),h(e,a),h(a,u),h(e,d)},p(f,m){m&94&&s!==(s=f[14]+"")&&_e(i,s),m&94&&Dn(o,"width",`${f[15]*80/f[11]}%`),m&94&&c!==(c=f[15]+"")&&_e(u,c)},d(f){f&&C(e)}}}function ml(n){let e;return{c(){e=p("hr"),_(e,"class","svelte-1dnm67b")},m(t,s){I(t,e,s)},d(t){t&&C(e)}}}function gl(n){let e,t,s=n[1]?"Total":n[10]?"Nightmare":"Normal",i,r,o,l,a,c,u=n[9].gamesPlayed+"",d,f,m,g,v,b,N=Math.floor(n[9].gamesWon*100/(n[9].gamesPlayed?n[9].gamesPlayed:1))+"",T,P,A,R,j,S,k,D,Y=n[9].maxStreak+"",ee,z,J,be,H,ue,G,he,ie,$=!n[1]&&_l(n),ne=ye(Object.entries(n[9].winInfo)),x=[];for(let L=0;L<ne.length;L+=1)x[L]=pl(dl(n,ne,L));let E=n[8]!=n[6][n[6].length-1]&&ml();return{c(){e=p("div"),t=p("span"),i=U(s),r=y(),o=p("div"),l=p("div"),a=p("div"),c=p("span"),d=U(u),f=y(),m=p("span"),m.textContent="Games Played",g=y(),v=p("div"),b=p("span"),T=U(N),P=U("%"),A=y(),R=p("span"),R.textContent="Win Rate",j=y(),$&&$.c(),S=y(),k=p("div"),D=p("span"),ee=U(Y),z=y(),J=p("span"),J.textContent="Max Streak",be=y(),H=p("span"),H.textContent="Win Distribution",ue=y(),G=p("div");for(let L=0;L<x.length;L+=1)x[L].c();he=y(),E&&E.c(),ie=yt(),_(t,"class","smaller-fs"),_(m,"id","statsTitle"),_(m,"class","svelte-1dnm67b"),_(a,"class","svelte-1dnm67b"),_(R,"id","statsTitle"),_(R,"class","svelte-1dnm67b"),_(v,"class","svelte-1dnm67b"),_(J,"id","statsTitle"),_(J,"class","svelte-1dnm67b"),_(k,"class","svelte-1dnm67b"),_(l,"class","flex svelte-1dnm67b"),_(l,"id","playerStatsInfo"),_(H,"class","smaller-fs"),_(G,"class","flex fd-col smaller-fs svelte-1dnm67b"),_(G,"id","distributionChart"),_(e,"class","flex fd-col svelte-1dnm67b"),_(e,"id","modeStatCont")},m(L,q){I(L,e,q),h(e,t),h(t,i),h(e,r),h(e,o),h(o,l),h(l,a),h(a,c),h(c,d),h(a,f),h(a,m),h(l,g),h(l,v),h(v,b),h(b,T),h(b,P),h(v,A),h(v,R),h(l,j),$&&$.m(l,null),h(l,S),h(l,k),h(k,D),h(D,ee),h(k,z),h(k,J),h(e,be),h(e,H),h(e,ue),h(e,G);for(let F=0;F<x.length;F+=1)x[F]&&x[F].m(G,null);I(L,he,q),E&&E.m(L,q),I(L,ie,q)},p(L,q){if(q&66&&s!==(s=L[1]?"Total":L[10]?"Nightmare":"Normal")&&_e(i,s),q&94&&u!==(u=L[9].gamesPlayed+"")&&_e(d,u),q&94&&N!==(N=Math.floor(L[9].gamesWon*100/(L[9].gamesPlayed?L[9].gamesPlayed:1))+"")&&_e(T,N),L[1]?$&&($.d(1),$=null):$?$.p(L,q):($=_l(L),$.c(),$.m(l,S)),q&94&&Y!==(Y=L[9].maxStreak+"")&&_e(ee,Y),q&94){ne=ye(Object.entries(L[9].winInfo));let F;for(F=0;F<ne.length;F+=1){const ae=dl(L,ne,F);x[F]?x[F].p(ae,q):(x[F]=pl(ae),x[F].c(),x[F].m(G,null))}for(;F<x.length;F+=1)x[F].d(1);x.length=ne.length}L[8]!=L[6][L[6].length-1]?E||(E=ml(),E.c(),E.m(ie.parentNode,ie)):E&&(E.d(1),E=null)},d(L){L&&(C(e),C(he),C(ie)),$&&$.d(),ct(x,L),E&&E.d(L)}}}function vl(n){let e,t=ye(n[6]),s=[];for(let i=0;i<t.length;i+=1)s[i]=gl(fl(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=yt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);I(i,e,r)},p(i,r){if(r&94){t=ye(i[6]);let o;for(o=0;o<t.length;o+=1){const l=fl(i,t,o);s[o]?s[o].p(l,r):(s[o]=gl(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&C(e),ct(s,i)}}}function Bp(n){let e,t,s,i,r=qt(n[3])+"",o,l,a,c,u,d,f,m=n[5].mode,g,v,b,N,T=vl(n);return{c(){e=p("div"),t=p("div"),s=p("span"),i=U("Your Stats - "),o=U(r),l=y(),a=p("button"),a.textContent="Switch View",c=y(),u=p("hr"),d=y(),f=p("div"),T.c(),_(a,"class","border-tp br-1 smaller-fs svelte-1dnm67b"),_(t,"class","flex fd-col fai-center rg-1 svelte-1dnm67b"),_(t,"id","title"),_(u,"class","svelte-1dnm67b"),_(f,"class","flex fai-center svelte-1dnm67b"),_(f,"id","modeStatsCont"),_(e,"class","statsCont ff-bg flex fd-col cg-1 fai-center border-tp br-1 bs svelte-1dnm67b"),_(e,"id","playerStats"),Ue(e,"totalView",n[1])},m(P,A){I(P,e,A),h(e,t),h(t,s),h(s,i),h(s,o),h(t,l),h(t,a),h(e,c),h(e,u),h(e,d),h(e,f),T.m(f,null),v=!0,b||(N=Se(a,"click",n[7]),b=!0)},p(P,[A]){n=P,(!v||A&8)&&r!==(r=qt(n[3])+"")&&_e(o,r),A&32&&it(m,m=n[5].mode)?(T.d(1),T=vl(n),T.c(),T.m(f,null)):T.p(n,A),(!v||A&2)&&Ue(e,"totalView",n[1])},i(P){v||(P&&Ze(()=>{v&&(g||(g=Oe(e,ot,{duration:n[0]?200:0},!0)),g.run(1))}),v=!0)},o(P){P&&(g||(g=Oe(e,ot,{duration:n[0]?200:0},!1)),g.run(0)),v=!1},d(P){P&&C(e),T.d(P),P&&g&&g.end(),b=!1,N()}}}function Gp(n,e,t){let s,i,r,o;de(n,Rn,d=>t(4,r=d)),de(n,wt,d=>t(5,o=d));let{prompted:l=!1}=e,a=!0,c;const u=d=>{Ft(d),t(1,a=!a)};return n.$$set=d=>{"prompted"in d&&t(0,l=d.prompted)},n.$$.update=()=>{if(n.$$.dirty&32&&t(3,s=o.mode),n.$$.dirty&2&&t(6,i=a?[""]:["","hard_"]),n.$$.dirty&60&&o.mode){t(2,c=structuredClone(Dt.playerStats.equipment));for(let d of["","hard_"]){let f=r[d+s];for(let m of["gamesPlayed","gamesWon"])t(2,c[m]+=f[m],c);f.maxStreak>c.maxStreak&&t(2,c.maxStreak=f.maxStreak,c);for(let m in f.winInfo)t(2,c.winInfo[m]+=f.winInfo[m],c)}}},[l,a,c,s,r,o,i,u]}class Uc extends ft{constructor(e){super(),ht(this,e,Gp,Bp,it,{prompted:0})}}function yl(n,e,t){const s=n.slice();return s[5]=e[t],s}function Hp(n){let e,t=ye(n[1]),s=[];for(let i=0;i<t.length;i+=1)s[i]=bl(yl(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=yt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);I(i,e,r)},p(i,r){if(r&2){t=ye(i[1]);let o;for(o=0;o<t.length;o+=1){const l=yl(i,t,o);s[o]?s[o].p(l,r):(s[o]=bl(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&C(e),ct(s,i)}}}function Up(n){let e,t,s;return{c(){e=p("span"),t=U("— "),s=U(n[1]),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(i,r){I(i,e,r),h(e,t),h(e,s)},p(i,r){r&2&&_e(s,i[1])},d(i){i&&C(e)}}}function bl(n){let e,t,s=n[5]+"",i;return{c(){e=p("span"),t=U("— "),i=U(s),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(r,o){I(r,e,o),h(e,t),h(e,i)},p(r,o){o&2&&s!==(s=r[5]+"")&&_e(i,s)},d(r){r&&C(e)}}}function zp(n){let e,t,s,i,r,o,l,a,c;function u(m,g){return typeof m[1]=="string"?Up:Hp}let d=u(n),f=d(n);return{c(){e=p("hr"),t=y(),s=p("li"),i=p("span"),r=U("v"),o=U(n[0]),l=y(),a=p("i"),a.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":vp[n[2][0]%10])+", 20"+n[2][2]}`,c=y(),f.c(),_(i,"id","version"),_(i,"class","svelte-1vq8gvl"),_(a,"id","date"),_(a,"class","svelte-1vq8gvl"),_(s,"class","flex fw fai-center svelte-1vq8gvl")},m(m,g){I(m,e,g),I(m,t,g),I(m,s,g),h(s,i),h(i,r),h(i,o),h(s,l),h(s,a),h(s,c),f.m(s,null)},p(m,[g]){g&1&&_e(o,m[0]),d===(d=u(m))&&f?f.p(m,g):(f.d(1),f=d(m),f&&(f.c(),f.m(s,null)))},i:le,o:le,d(m){m&&(C(e),C(t),C(s)),f.d()}}}function Vp(n,e,t){let{version:s,date:i,text:r}=e,o=i.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,s=a.version),"date"in a&&t(4,i=a.date),"text"in a&&t(1,r=a.text)},[s,r,o,l,i]}class As extends ft{constructor(e){super(),ht(this,e,Vp,zp,it,{version:0,date:4,text:1})}}function Yp(n){let e,t,s,i,r,o,l,a,c,u,d;return i=new As({props:{version:"1.1.2",date:"9/4/24",text:"Normal and Nightmare mode stats are now separate"}}),o=new As({props:{version:"1.1.1",date:"5/4/24",text:["Fixed 'Game Stats' section not updating when switching game categories","Fixed page size and zoom occasionally breaking"]}}),a=new As({props:{version:"1.1.0",date:"4/4/24",text:["Added 'Weapons' game category","'Game Help' prompt now appears on first visit"]}}),u=new As({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=p("span"),e.textContent="Changelog",t=y(),s=p("ul"),He(i.$$.fragment),r=y(),He(o.$$.fragment),l=y(),He(a.$$.fragment),c=y(),He(u.$$.fragment),_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-1hn7lke"),_(s,"id","contents")},m(f,m){I(f,e,m),I(f,t,m),I(f,s,m),xe(i,s,null),h(s,r),xe(o,s,null),h(s,l),xe(a,s,null),h(s,c),xe(u,s,null),d=!0},p:le,i(f){d||(K(i.$$.fragment,f),K(o.$$.fragment,f),K(a.$$.fragment,f),K(u.$$.fragment,f),d=!0)},o(f){oe(i.$$.fragment,f),oe(o.$$.fragment,f),oe(a.$$.fragment,f),oe(u.$$.fragment,f),d=!1},d(f){f&&(C(e),C(t),C(s)),Be(i),Be(o),Be(a),Be(u)}}}class $p extends ft{constructor(e){super(),ht(this,e,null,Yp,it,{})}}function Kp(n){let e,t,s;return{c(){e=p("span"),e.textContent="Credits",t=y(),s=p("div"),s.innerHTML=`<p class="flex fai-center cg-1">This is a personal project. Contact me directly on
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
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,_(e,"class","title"),_(s,"class","smaller-fs"),_(s,"id","contents")},m(i,r){I(i,e,r),I(i,t,r),I(i,s,r)},p:le,i:le,o:le,d(i){i&&(C(e),C(t),C(s))}}}class Qp extends ft{constructor(e){super(),ht(this,e,null,Kp,it,{})}}function wl(n,e,t){const s=n.slice();return s[0]=e[t],s}function Jp(n,e,t){const s=n.slice();return s[3]=e[t],s}function Xp(n,e,t){const s=n.slice();return s[6]=e[t],s}function Cl(n,e,t){const s=n.slice();return s[9]=e[t],s}function El(n,e,t){const s=n.slice();return s[12]=e[t],s}function Zp(n,e,t){const s=n.slice();return s[15]=e[t],s}function em(n){let e;return{c(){e=p("li"),e.textContent=`— ${qt(n[15])} `},m(t,s){I(t,e,s)},p:le,d(t){t&&C(e)}}}function Il(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[12]} `},m(t,s){I(t,e,s)},p:le,d(t){t&&C(e)}}}function Sl(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[9]}`},m(t,s){I(t,e,s)},p:le,d(t){t&&C(e)}}}function tm(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[6]}`},m(t,s){I(t,e,s)},p:le,d(t){t&&C(e)}}}function nm(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[3]}`},m(t,s){I(t,e,s)},p:le,d(t){t&&C(e)}}}function kl(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[0]} Update`},m(t,s){I(t,e,s)},p:le,d(t){t&&C(e)}}}function sm(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v,b,N,T,P,A,R,j,S,k,D,Y,ee,z,J,be,H,ue,G,he,ie,$,ne,x,E,L,q,F,ae,Ee,Ke,Fe,je,Qe,we,rt,Je,ke,te,Ge,pt,Te,ce,Pe=ye(mp),Xe=[];for(let O=0;O<Pe.length;O+=1)Xe[O]=em(Zp(n,Pe,O));let Ie=ye(Object.values(ni)),X=[];for(let O=0;O<Ie.length;O+=1)X[O]=Il(El(n,Ie,O));let re=ye(Object.values(si)),W=[];for(let O=0;O<re.length;O+=1)W[O]=Sl(Cl(n,re,O));let se=ye(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),Ne=[];for(let O=0;O<12;O+=1)Ne[O]=tm(Xp(n,se,O));let Q=ye(["Black","Blue","Green","Purple","Red","White","Yellow"]),ve=[];for(let O=0;O<7;O+=1)ve[O]=nm(Jp(n,Q,O));let Re=ye(Object.values(ti).slice(0,-1)),We=[];for(let O=0;O<Re.length;O+=1)We[O]=kl(wl(n,Re,O));return{c(){e=p("span"),e.textContent="Game Help",t=y(),s=p("div"),i=p("p"),i.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece from\r
        Fantastic Frontier, which changes every day.`,r=y(),o=p("hr"),l=y(),a=p("div"),a.innerHTML=`<span class="title">Color Guide</span> <div class="flex cg-1 svelte-2q3hs4" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-2q3hs4" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-2q3hs4" id="partial">Partial
                <span class="bgInfo svelte-2q3hs4">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-2q3hs4" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-2q3hs4" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,c=y(),u=p("hr"),d=y(),f=p("span"),f.textContent="Categories",m=y(),g=p("div"),v=p("div"),b=p("b"),b.textContent="Equipment",N=y(),T=p("span"),P=p("b"),P.textContent="Slot:",A=y(),R=p("ul");for(let O=0;O<Xe.length;O+=1)Xe[O].c();j=y(),S=p("span"),k=p("b"),k.textContent="Stats:",D=y(),Y=p("ul");for(let O=0;O<X.length;O+=1)X[O].c();ee=y(),z=p("div"),J=p("b"),J.textContent="Weapons",be=y(),H=p("span"),H.innerHTML="<b>Has Special:</b> <span>Whether the weapon has a Special Ability.</span>",ue=y(),G=p("span"),he=p("b"),he.textContent="Stat Intakes:",ie=y(),$=p("ul");for(let O=0;O<W.length;O+=1)W[O].c();ne=y(),x=p("div"),E=p("div"),L=p("b"),L.textContent="General",q=y(),F=p("span"),F.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item(s) can be
                    purchased at. &quot;Unpurchasable&quot; if it cannot be purchased,
                    equivalent to 0 for the game&#39;s purposes.</span>`,ae=y(),Ee=p("span"),Ke=p("b"),Ke.textContent="Colors:",Fe=y(),je=p("ul");for(let O=0;O<12;O+=1)Ne[O].c();Qe=y(),we=p("span"),rt=p("b"),rt.textContent="Outline:",Je=y(),ke=p("ul");for(let O=0;O<7;O+=1)ve[O].c();te=y(),Ge=p("span"),pt=p("b"),pt.textContent="Release:",Te=y(),ce=p("ul");for(let O=0;O<We.length;O+=1)We[O].c();_(e,"class","title"),_(a,"class","flex fd-col fai-center"),_(f,"class","title"),_(b,"class","categoryTitle svelte-2q3hs4"),_(P,"class","svelte-2q3hs4"),_(R,"class","svelte-2q3hs4"),_(T,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(k,"class","svelte-2q3hs4"),_(Y,"class","svelte-2q3hs4"),_(S,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(v,"class","flex fw fjc-center categories svelte-2q3hs4"),_(J,"class","categoryTitle svelte-2q3hs4"),_(H,"class","flex fd-col smaller-fs limit-width svelte-2q3hs4"),_(he,"class","svelte-2q3hs4"),_($,"class","svelte-2q3hs4"),_(G,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(z,"class","flex fw fjc-center categories svelte-2q3hs4"),_(g,"class","flex categoriesCont svelte-2q3hs4"),_(L,"class","categoryTitle svelte-2q3hs4"),_(F,"class","flex fd-col smaller-fs limit-width svelte-2q3hs4"),_(Ke,"class","svelte-2q3hs4"),_(je,"class","svelte-2q3hs4"),_(Ee,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(rt,"class","svelte-2q3hs4"),_(ke,"class","svelte-2q3hs4"),_(we,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(pt,"class","svelte-2q3hs4"),_(ce,"class","svelte-2q3hs4"),_(Ge,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(E,"class","flex fw fjc-center categories svelte-2q3hs4"),_(x,"class","flex categoriesCont svelte-2q3hs4"),_(s,"class","flex fd-col smaller-fs svelte-2q3hs4"),_(s,"id","contents")},m(O,gt){I(O,e,gt),I(O,t,gt),I(O,s,gt),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(s,d),h(s,f),h(s,m),h(s,g),h(g,v),h(v,b),h(v,N),h(v,T),h(T,P),h(T,A),h(T,R);for(let B=0;B<Xe.length;B+=1)Xe[B]&&Xe[B].m(R,null);h(v,j),h(v,S),h(S,k),h(S,D),h(S,Y);for(let B=0;B<X.length;B+=1)X[B]&&X[B].m(Y,null);h(g,ee),h(g,z),h(z,J),h(z,be),h(z,H),h(z,ue),h(z,G),h(G,he),h(G,ie),h(G,$);for(let B=0;B<W.length;B+=1)W[B]&&W[B].m($,null);h(s,ne),h(s,x),h(x,E),h(E,L),h(E,q),h(E,F),h(E,ae),h(E,Ee),h(Ee,Ke),h(Ee,Fe),h(Ee,je);for(let B=0;B<12;B+=1)Ne[B]&&Ne[B].m(je,null);h(E,Qe),h(E,we),h(we,rt),h(we,Je),h(we,ke);for(let B=0;B<7;B+=1)ve[B]&&ve[B].m(ke,null);h(E,te),h(E,Ge),h(Ge,pt),h(Ge,Te),h(Ge,ce);for(let B=0;B<We.length;B+=1)We[B]&&We[B].m(ce,null)},p(O,[gt]){if(gt&0){Ie=ye(Object.values(ni));let B;for(B=0;B<Ie.length;B+=1){const V=El(O,Ie,B);X[B]?X[B].p(V,gt):(X[B]=Il(V),X[B].c(),X[B].m(Y,null))}for(;B<X.length;B+=1)X[B].d(1);X.length=Ie.length}if(gt&0){re=ye(Object.values(si));let B;for(B=0;B<re.length;B+=1){const V=Cl(O,re,B);W[B]?W[B].p(V,gt):(W[B]=Sl(V),W[B].c(),W[B].m($,null))}for(;B<W.length;B+=1)W[B].d(1);W.length=re.length}if(gt&0){Re=ye(Object.values(ti).slice(0,-1));let B;for(B=0;B<Re.length;B+=1){const V=wl(O,Re,B);We[B]?We[B].p(V,gt):(We[B]=kl(V),We[B].c(),We[B].m(ce,null))}for(;B<We.length;B+=1)We[B].d(1);We.length=Re.length}},i:le,o:le,d(O){O&&(C(e),C(t),C(s)),ct(Xe,O),ct(X,O),ct(W,O),ct(Ne,O),ct(ve,O),ct(We,O)}}}class zc extends ft{constructor(e){super(),ht(this,e,null,sm,it,{})}}function im(n){let e,t,s;return{c(){e=p("span"),e.textContent="Frontierdle Policy",t=y(),s=p("div"),s.innerHTML=`<hr/> <span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-932r7h"),_(s,"id","contents")},m(i,r){I(i,e,r),I(i,t,r),I(i,s,r)},p:le,i:le,o:le,d(i){i&&(C(e),C(t),C(s))}}}class rm extends ft{constructor(e){super(),ht(this,e,null,im,it,{})}}function Tl(n){let e,t,s;return{c(){e=p("iconify-icon"),Ye(e,"icon","uil:exclamation"),Ye(e,"id","unseen"),Ye(e,"class","svelte-1o089h7")},m(i,r){I(i,e,r),s=!0},i(i){s||(i&&Ze(()=>{s&&(t||(t=Oe(e,Bt,{duration:150},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=Oe(e,Bt,{duration:150},!1)),t.run(0)),s=!1},d(i){i&&C(e),i&&t&&t.end()}}}function om(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v,b,N,T,P=!n[2]&&Tl();return{c(){e=p("button"),e.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',t=y(),s=p("a"),s.innerHTML=`Support me
    <img src="misc/kofi-badge.png" alt="" class="svelte-1o089h7"/>`,i=y(),r=p("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=y(),l=p("button"),a=p("iconify-icon"),c=y(),u=p("span"),u.textContent="Changelog",d=y(),P&&P.c(),f=y(),m=p("button"),m.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',g=y(),v=p("span"),b=U(n[0]),_(e,"class","info p-1 svelte-1o089h7"),_(e,"id","credits"),_(s,"class","info p-1 svelte-1o089h7"),_(s,"id","donate"),_(s,"href","https://ko-fi.com/xt8ss"),_(s,"target","_blank"),_(r,"class","info p-1 svelte-1o089h7"),_(r,"id","help"),Ye(a,"icon","octicon:log-16"),_(u,"class","tooltip"),_(u,"id","right"),_(l,"class","info svelte-1o089h7"),_(l,"id","changelog"),_(m,"class","info p-1 svelte-1o089h7"),_(m,"id","policy"),_(v,"class","info svelte-1o089h7"),_(v,"id","version")},m(A,R){I(A,e,R),I(A,t,R),I(A,s,R),I(A,i,R),I(A,r,R),I(A,o,R),I(A,l,R),h(l,a),h(l,c),h(l,u),h(l,d),P&&P.m(l,null),I(A,f,R),I(A,m,R),I(A,g,R),I(A,v,R),h(v,b),N||(T=[Se(e,"click",n[3]),Se(r,"click",n[4]),Se(l,"click",n[5]),Se(m,"click",n[6])],N=!0)},p(A,[R]){A[2]?P&&(St(),oe(P,1,1,()=>{P=null}),kt()):P?R&4&&K(P,1):(P=Tl(),P.c(),K(P,1),P.m(l,null)),R&1&&_e(b,A[0])},i(A){K(P)},o(A){oe(P)},d(A){A&&(C(e),C(t),C(s),C(i),C(r),C(o),C(l),C(f),C(m),C(g),C(v)),P&&P.d(),N=!1,st(T)}}}function lm(n,e,t){let s,i;de(n,dt,u=>t(1,s=u)),de(n,gs,u=>t(2,i=u));let{version:r}=e;const o=u=>{Ft(u),fe(dt,s.component=Qp,s)},l=u=>{Ft(u),fe(dt,s.component=zc,s)},a=u=>{Ft(u),fe(dt,s.component=$p,s),fe(gs,i=!0,i)},c=u=>{Ft(u),fe(dt,s.component=rm,s)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,s,i,o,l,a,c]}class am extends ft{constructor(e){super(),ht(this,e,lm,om,it,{version:0})}}function cm(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v,b;return{c(){e=p("div"),t=p("span"),t.textContent="Choose your category",s=y(),i=p("button"),r=p("img"),l=y(),a=p("span"),a.textContent="Equipment",c=y(),u=p("button"),d=p("img"),m=y(),g=p("span"),g.textContent="Weapons",_(t,"id","title"),_(t,"class","svelte-w2ulp9"),nt(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/7/7a/WhiteSpectralVanguardIcon.png")||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-w2ulp9"),i.disabled=n[0],_(i,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-w2ulp9"),Ue(i,"selected",n[1].mode=="equipment"),nt(d.src,f="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/9/95/TheJadeTwin.png")||_(d,"src",f),_(d,"alt",""),_(d,"class","svelte-w2ulp9"),u.disabled=n[0],_(u,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-w2ulp9"),Ue(u,"selected",n[1].mode=="weapons"),_(e,"class","chooseModeCont ff-bg flex fd-row fw border-tp br-1 bs svelte-w2ulp9")},m(N,T){I(N,e,T),h(e,t),h(e,s),h(e,i),h(i,r),h(i,l),h(i,a),h(e,c),h(e,u),h(u,d),h(u,m),h(u,g),v||(b=[Se(i,"click",n[2]),Se(u,"click",n[3])],v=!0)},p(N,[T]){T&1&&(i.disabled=N[0]),T&2&&Ue(i,"selected",N[1].mode=="equipment"),T&1&&(u.disabled=N[0]),T&2&&Ue(u,"selected",N[1].mode=="weapons")},i:le,o:le,d(N){N&&C(e),v=!1,st(b)}}}function um(n,e,t){let s,i;return de(n,dn,l=>t(0,s=l)),de(n,wt,l=>t(1,i=l)),[s,i,l=>{Ft(l),s||fe(wt,i.mode="equipment",i)},l=>{Ft(l),s||fe(wt,i.mode="weapons",i)}]}class hm extends ft{constructor(e){super(),ht(this,e,um,cm,it,{})}}function Nl(n,e,t){const s=n.slice();return s[6]=e[t][0],s[7]=e[t][1],s[8]=e[t][2],s[10]=t,s}function Rl(n){let e,t,s=n[6]+"",i,r,o,l,a;function c(){return n[5](n[8],n[7])}return{c(){e=p("div"),t=p("button"),i=U(s),o=y(),t.disabled=r=n[8],_(t,"class","flex fjc-center fai-center light-hover svelte-1mwja36"),_(e,"class","ff-bg posrel border-tp br-1 svelte-1mwja36")},m(u,d){I(u,e,d),h(e,t),h(t,i),h(e,o),l||(a=[Se(t,"click",c),zl(n[3].call(null,t,n[10]))],l=!0)},p(u,d){n=u,d&1&&s!==(s=n[6]+"")&&_e(i,s),d&1&&r!==(r=n[8])&&(t.disabled=r)},d(u){u&&C(e),l=!1,st(a)}}}function fm(n){let e,t=ye(n[0]),s=[];for(let i=0;i<t.length;i+=1)s[i]=Rl(Nl(n,t,i));return{c(){e=p("div");for(let i=0;i<s.length;i+=1)s[i].c();_(e,"class","options flex svelte-1mwja36")},m(i,r){I(i,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(i,[r]){if(r&7){t=ye(i[0]);let o;for(o=0;o<t.length;o+=1){const l=Nl(i,t,o);s[o]?s[o].p(l,r):(s[o]=Rl(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},i:le,o:le,d(i){i&&C(e),ct(s,i)}}}function dm(n,e,t){let s;de(n,dt,c=>t(1,s=c));const i=Xl();let{options:r=[],focus:o=null}=e;function l(c,u){u+1===o&&c.focus()}const a=(c,u)=>{c||(i("clicked"),u(),fe(dt,s.component=null,s))};return n.$$set=c=>{"options"in c&&t(0,r=c.options),"focus"in c&&t(4,o=c.focus)},[r,s,i,l,o,a]}class Vc extends ft{constructor(e){super(),ht(this,e,dm,fm,it,{options:0,focus:4})}}function _m(n){let e,t,s,i,r,o,l,a,c,u,d,f,m;return f=new Vc({props:{options:[["Don't show again",n[3]],["Maybe later",n[4]]],focus:2}}),f.$on("clicked",n[5]),{c(){e=p("span"),e.textContent="Support Me",t=y(),s=p("div"),i=p("p"),i.textContent="Thank you for your continuous use of my site!",r=y(),o=p("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,l=y(),a=p("p"),a.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,c=y(),u=p("a"),u.innerHTML='<img src="misc/kofi-badge.png" alt="Ko-fi" class="svelte-1wbcr77"/>',d=y(),He(f.$$.fragment),_(e,"class","title"),_(u,"class","flex br-1 bg-change light-hover svelte-1wbcr77"),_(u,"href","https://ko-fi.com/xt8ss"),_(u,"target","_blank"),_(s,"class","flex fd-col fai-center smaller-fs svelte-1wbcr77"),_(s,"id","contents")},m(g,v){I(g,e,v),I(g,t,v),I(g,s,v),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(s,d),xe(f,s,null),m=!0},p(g,[v]){const b={};v&2&&(b.options=[["Don't show again",g[3]],["Maybe later",g[4]]]),f.$set(b)},i(g){m||(K(f.$$.fragment,g),m=!0)},o(g){oe(f.$$.fragment,g),m=!1},d(g){g&&(C(e),C(t),C(s)),Be(f)}}}function pm(n,e,t){let s,i;de(n,on,c=>t(1,s=c)),de(n,dt,c=>t(2,i=c));let r=!1;const o=()=>fe(on,s.showAgain=!1,s),l=()=>fe(on,s.timesDenied++,s),a=()=>t(0,r=!0);return n.$$.update=()=>{n.$$.dirty&7&&i.component===null&&!r&&fe(on,s.timesDenied++,s)},[r,s,i,o,l,a]}class mm extends ft{constructor(e){super(),ht(this,e,pm,_m,it,{})}}function Dl(n){let e,t;return{c(){e=p("span"),t=U(n[4]),_(e,"class","ff-item svelte-1w4quf3")},m(s,i){I(s,e,i),h(e,t)},p(s,i){i&16&&_e(t,s[4])},d(s){s&&C(e)}}}function gm(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v,b,N,T,P,A,R,j,S,k,D,Y,ee,z,J,be,H,ue,G,he,ie,$,ne,x,E,L,q,F,ae,Ee,Ke,Fe,je,Qe,we,rt,Je,ke,te,Ge,pt,Te,ce,Pe,Xe,Ie;function X(V){n[8](V)}function re(V){n[9](V)}let W={size:"4.5"};n[0]!==void 0&&(W.checked=n[0]),n[0]!==void 0&&(W.forced=n[0]),d=new Os({props:W}),Ve.push(()=>Nt(d,"checked",X)),Ve.push(()=>Nt(d,"forced",re)),d.$on("toggle",n[10]);function se(V){n[11](V)}function Ne(V){n[12](V)}let Q={size:"4.5"};n[3]!==void 0&&(Q.checked=n[3]),n[3]!==void 0&&(Q.forced=n[3]),T=new Os({props:Q}),Ve.push(()=>Nt(T,"checked",se)),Ve.push(()=>Nt(T,"forced",Ne)),T.$on("toggle",n[13]);function ve(V){n[14](V)}function Re(V){n[15](V)}let We={noGuess:!0};n[6]!==void 0&&(We.noGuessMode=n[6]),n[4]!==void 0&&(We.noGuessItem=n[4]),D=new Hc({props:We}),Ve.push(()=>Nt(D,"noGuessMode",ve)),Ve.push(()=>Nt(D,"noGuessItem",Re));let O=n[4]&&Dl(n);function gt(V){n[16](V)}let B={size:"4.5",disabled:!n[4]};return n[5]!==void 0&&(B.checked=n[5]),x=new Os({props:B}),Ve.push(()=>Nt(x,"checked",gt)),x.$on("toggle",n[17]),ce=new Vc({props:{options:[["Create",n[7],!n[4]]]}}),{c(){e=p("div"),e.textContent="Create a Room",t=y(),s=p("div"),i=p("hr"),r=y(),o=p("div"),l=p("span"),l.textContent="Mode:",a=y(),c=p("div"),u=p("span"),He(d.$$.fragment),g=y(),v=p("span"),v.textContent="Equipment",b=y(),N=p("span"),He(T.$$.fragment),R=y(),j=p("span"),j.textContent="Weapons",S=y(),k=p("div"),He(D.$$.fragment),z=y(),J=p("div"),be=p("span"),be.textContent="Item:",H=y(),O&&O.c(),ue=y(),G=p("hr"),he=y(),ie=p("div"),$=p("span"),$.innerHTML='<button class="flex posrel no-bg-change"><iconify-icon icon="eva:info-outline" id="infoIcon" class="svelte-1w4quf3"></iconify-icon> <span class="tooltip" id="left">Does not affect attempt count</span></button> <span>Nightmare Mode:</span>',ne=y(),He(x.$$.fragment),L=y(),q=p("hr"),F=y(),ae=p("div"),Ee=p("span"),Ee.textContent="Max Player Count:",Ke=y(),Fe=p("input"),Qe=y(),we=p("div"),rt=p("span"),rt.textContent="Max Attempt Count:",Je=y(),ke=p("input"),Ge=y(),pt=p("hr"),Te=y(),He(ce.$$.fragment),_(e,"class","title"),_(u,"class","flex fai-center cg-1"),_(N,"class","flex fai-center cg-1"),_(c,"class","flex fd-col rg-1"),_(o,"class","flex fjc-center fai-center svelte-1w4quf3"),_(o,"id","modeChooser"),_(k,"class","flex fjc-center posrel"),_(J,"class","flex fjc-center fai-center cg-1 svelte-1w4quf3"),_(J,"id","itemName"),_($,"class","flex fai-center cg-1"),_(ie,"class","flex fjc-center fai-center cg-1"),_(Fe,"type","number"),_(Fe,"placeholder","4"),Fe.disabled=je=!n[4],_(Fe,"class","border-tp br-1 svelte-1w4quf3"),_(ae,"class","flex fjc-center fai-center cg-1"),_(ke,"type","number"),_(ke,"placeholder","7"),ke.disabled=te=!n[4],_(ke,"class","border-tp br-1 svelte-1w4quf3"),_(we,"class","flex fjc-center fai-center cg-1"),_(s,"class","flex fd-col smaller-fs svelte-1w4quf3"),_(s,"id","contents")},m(V,$e){I(V,e,$e),I(V,t,$e),I(V,s,$e),h(s,i),h(s,r),h(s,o),h(o,l),h(o,a),h(o,c),h(c,u),xe(d,u,null),h(u,g),h(u,v),h(c,b),h(c,N),xe(T,N,null),h(N,R),h(N,j),h(s,S),h(s,k),xe(D,k,null),h(s,z),h(s,J),h(J,be),h(J,H),O&&O.m(J,null),h(s,ue),h(s,G),h(s,he),h(s,ie),h(ie,$),h(ie,ne),xe(x,ie,null),h(s,L),h(s,q),h(s,F),h(s,ae),h(ae,Ee),h(ae,Ke),h(ae,Fe),Ns(Fe,n[1]),h(s,Qe),h(s,we),h(we,rt),h(we,Je),h(we,ke),Ns(ke,n[2]),h(s,Ge),h(s,pt),h(s,Te),xe(ce,s,null),Pe=!0,Xe||(Ie=[Se(Fe,"input",n[18]),Se(ke,"input",n[19])],Xe=!0)},p(V,[$e]){const xn={};!f&&$e&1&&(f=!0,xn.checked=V[0],Tt(()=>f=!1)),!m&&$e&1&&(m=!0,xn.forced=V[0],Tt(()=>m=!1)),d.$set(xn);const Bn={};!P&&$e&8&&(P=!0,Bn.checked=V[3],Tt(()=>P=!1)),!A&&$e&8&&(A=!0,Bn.forced=V[3],Tt(()=>A=!1)),T.$set(Bn);const Gn={};!Y&&$e&64&&(Y=!0,Gn.noGuessMode=V[6],Tt(()=>Y=!1)),!ee&&$e&16&&(ee=!0,Gn.noGuessItem=V[4],Tt(()=>ee=!1)),D.$set(Gn),V[4]?O?O.p(V,$e):(O=Dl(V),O.c(),O.m(J,null)):O&&(O.d(1),O=null);const Hn={};$e&16&&(Hn.disabled=!V[4]),!E&&$e&32&&(E=!0,Hn.checked=V[5],Tt(()=>E=!1)),x.$set(Hn),(!Pe||$e&16&&je!==(je=!V[4]))&&(Fe.disabled=je),$e&2&&Ms(Fe.value)!==V[1]&&Ns(Fe,V[1]),(!Pe||$e&16&&te!==(te=!V[4]))&&(ke.disabled=te),$e&4&&Ms(ke.value)!==V[2]&&Ns(ke,V[2]);const Ss={};$e&16&&(Ss.options=[["Create",V[7],!V[4]]]),ce.$set(Ss)},i(V){Pe||(K(d.$$.fragment,V),K(T.$$.fragment,V),K(D.$$.fragment,V),K(x.$$.fragment,V),K(ce.$$.fragment,V),Pe=!0)},o(V){oe(d.$$.fragment,V),oe(T.$$.fragment,V),oe(D.$$.fragment,V),oe(x.$$.fragment,V),oe(ce.$$.fragment,V),Pe=!1},d(V){V&&(C(e),C(t),C(s)),Be(d),Be(T),Be(D),O&&O.d(),Be(x),Be(ce),Xe=!1,st(Ie)}}}function vm(n,e,t){let s,i;de(n,sr,k=>t(20,i=k));let r=!0,o=!1,l="",a=!1,c=4,u=7;function d(){fe(sr,i=1,i);let k={mode:s,item:l,hardMode:a,playerCount:c,attemptCount:u,players:{}};Lc(ps(er(Gc),`rooms/${i}`),k).then(()=>{})}function f(k){r=k,t(0,r)}function m(k){r=k,t(0,r)}const g=k=>{t(0,r=k.detail.checked),t(3,o=!1),t(4,l="")};function v(k){o=k,t(3,o)}function b(k){o=k,t(3,o)}const N=k=>{t(3,o=k.detail.checked),t(0,r=!1),t(4,l="")};function T(k){s=k,t(6,s),t(0,r)}function P(k){l=k,t(4,l)}function A(k){a=k,t(5,a)}const R=k=>t(5,a=k.detail.checked);function j(){c=Ms(this.value),t(1,c)}function S(){u=Ms(this.value),t(2,u)}return n.$$.update=()=>{n.$$.dirty&2&&c<1&&t(1,c=1),n.$$.dirty&2&&c>6&&t(1,c=6),n.$$.dirty&2&&c&&t(1,c=Math.floor(c)),n.$$.dirty&1&&t(6,s=r?"equipment":"weapons"),n.$$.dirty&4&&u<1&&t(2,u=1),n.$$.dirty&4&&u>7&&t(2,u=7),n.$$.dirty&4&&u&&t(2,u=Math.floor(u))},[r,c,u,o,l,a,s,d,f,m,g,v,b,N,T,P,A,R,j,S]}class ym extends ft{constructor(e){super(),ht(this,e,vm,gm,it,{})}}const{document:Qn,window:nn}=Xc;function Al(n,e,t){const s=n.slice();return s[78]=e[t],s}function Pl(n,e,t){const s=n.slice();return s[78]=e[t],s}function Ol(n){let e;return{c(){e=p("link"),_(e,"rel","preload"),_(e,"as","image"),_(e,"href",n[78])},m(t,s){I(t,e,s)},p:le,d(t){t&&C(e)}}}function Ml(n){let e;return{c(){e=p("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,s){I(t,e,s)},d(t){t&&C(e)}}}function Ll(n){let e,t;return{c(){e=p("img"),_(e,"class","background svelte-105j5xd"),nt(e.src,t=n[78])||_(e,"src",t),_(e,"alt",""),Ue(e,"active",n[31].indexOf(n[78])==n[23])},m(s,i){I(s,e,i)},p(s,i){i[0]&8388608|i[1]&1&&Ue(e,"active",s[31].indexOf(s[78])==s[23])},d(s){s&&C(e)}}}function Fl(n){let e,t,s=Math.floor(n[28][n[2]]*100)+"",i,r,o,l;return{c(){e=p("span"),t=U("Zoom: "),i=U(s),r=p("b"),r.textContent="%",_(e,"class","info svelte-105j5xd"),_(e,"id","zoomLevel")},m(a,c){I(a,e,c),h(e,t),h(e,i),h(e,r),l=!0},p(a,c){(!l||c[0]&4)&&s!==(s=Math.floor(a[28][a[2]]*100)+"")&&_e(i,s)},i(a){l||(a&&Ze(()=>{l&&(o||(o=Oe(e,Bt,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=Oe(e,Bt,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&C(e),a&&o&&o.end()}}}function ql(n){let e,t,s,i,r,o,l,a,c=n[9].muted?"Muted":"Unmuted",u,d,f,m,g,v,b,N,T,P,A,R=oi(n[20],n[21],n[22])+"",j,S,k,D,Y,ee,z,J,be,H,ue,G,he,ie,$,ne=n[3].includes("equipment")?"stat":" stat intake",x,E,L,q,F,ae,Ee,Ke,Fe,je,Qe,we,rt,Je,ke,te,Ge,pt;Y=new hm({}),ae=new Os({props:{size:"5",checked:n[5],disabled:n[6].chosenItems.length!=0}}),ae.$on("toggle",n[51]);let Te=!n[6].gameWin&&!n[6].gameOver&&Wl(n),ce=(n[6].gameWin||n[6].gameOver)&&jl(n);function Pe(W){n[54](W)}let Xe={};n[12]!==void 0&&(Xe.dailyItemsData=n[12]),je=new Dp({props:Xe}),Ve.push(()=>Nt(je,"dailyItemsData",Pe));let Ie=n[13][n[3]]&&xl(n),X=n[24].component&&n[24].complete&&Bl(n),re=n[24].component&&!n[24].complete&&Gl(n);return{c(){e=p("main"),t=p("div"),s=p("div"),i=p("button"),r=p("iconify-icon"),l=y(),a=p("span"),u=U(c),d=y(),f=p("button"),m=p("img"),v=y(),b=p("span"),N=U(`Next items in...
                    `),T=p("br"),P=y(),A=new Ql(!1),j=y(),S=p("div"),k=p("button"),k.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-105j5xd"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',D=y(),He(Y.$$.fragment),ee=y(),z=y(),J=p("div"),be=p("button"),H=p("iconify-icon"),ue=y(),G=p("span"),he=U(`No armor (more damage taken).
                    `),ie=p("br"),$=U(`
                    No `),x=U(ne),E=U(` / avg.
                    cost / color clues.`),L=y(),q=p("span"),q.textContent="Nightmare Mode",F=y(),He(ae.$$.fragment),Ee=y(),Te&&Te.c(),Ke=y(),ce&&ce.c(),Fe=y(),He(je.$$.fragment),we=y(),Ie&&Ie.c(),rt=y(),X&&X.c(),Je=y(),re&&re.c(),ke=yt(),Ye(r,"icon",o="f7:speaker-"+(n[9].muted?"slash":"2")+"-fill"),Ye(r,"class","svelte-105j5xd"),_(a,"class","tooltip"),_(a,"id","bottom"),_(i,"class","flex light-hover svelte-105j5xd"),_(s,"class","iconToggle ff-bg posrel border-tp br-1 bs svelte-105j5xd"),nt(m.src,g="frontierdle.svg")||_(m,"src",g),_(m,"alt","Frontierdle"),_(m,"class","svelte-105j5xd"),A.a=null,_(b,"class","tooltip svelte-105j5xd"),_(b,"id","bottom"),_(f,"class","iconCont ff-bg posrel border-tp br-1 bs no-bg-change svelte-105j5xd"),_(k,"class","flex posrel light-hover svelte-105j5xd"),_(S,"class","iconToggle ff-bg border-tp br-1 bs svelte-105j5xd"),_(t,"class","upperMenu flex fai-center svelte-105j5xd"),Ye(H,"icon","eva:info-outline"),Ye(H,"id","info"),Ye(H,"class","svelte-105j5xd"),_(G,"class","tooltip svelte-105j5xd"),_(G,"id","bottom"),_(be,"class","flex posrel no-bg-change"),_(J,"class","hardModeCont ff-bg flex fai-center cg-1 border-tp br-1 bs svelte-105j5xd"),_(e,"class","flex fd-col fai-center posrel svelte-105j5xd")},m(W,se){I(W,e,se),h(e,t),h(t,s),h(s,i),h(i,r),h(i,l),h(i,a),h(a,u),h(t,d),h(t,f),h(f,m),h(f,v),h(f,b),h(b,N),h(b,T),h(b,P),A.m(R,b),h(t,j),h(t,S),h(S,k),h(e,D),xe(Y,e,null),h(e,ee),h(e,z),h(e,J),h(J,be),h(be,H),h(be,ue),h(be,G),h(G,he),h(G,ie),h(G,$),h(G,x),h(G,E),h(J,L),h(J,q),h(J,F),xe(ae,J,null),h(e,Ee),Te&&Te.m(e,null),h(e,Ke),ce&&ce.m(e,null),h(e,Fe),xe(je,e,null),h(e,we),Ie&&Ie.m(e,null),I(W,rt,se),X&&X.m(W,se),I(W,Je,se),re&&re.m(W,se),I(W,ke,se),te=!0,Ge||(pt=[Se(i,"click",n[48]),Se(k,"click",n[49])],Ge=!0)},p(W,se){(!te||se[0]&512&&o!==(o="f7:speaker-"+(W[9].muted?"slash":"2")+"-fill"))&&Ye(r,"icon",o),(!te||se[0]&512)&&c!==(c=W[9].muted?"Muted":"Unmuted")&&_e(u,c),(!te||se[0]&7340032)&&R!==(R=oi(W[20],W[21],W[22])+"")&&A.p(R),(!te||se[0]&8)&&ne!==(ne=W[3].includes("equipment")?"stat":" stat intake")&&_e(x,ne);const Ne={};se[0]&32&&(Ne.checked=W[5]),se[0]&64&&(Ne.disabled=W[6].chosenItems.length!=0),ae.$set(Ne),!W[6].gameWin&&!W[6].gameOver?Te?(Te.p(W,se),se[0]&64&&K(Te,1)):(Te=Wl(W),Te.c(),K(Te,1),Te.m(e,Ke)):Te&&(St(),oe(Te,1,1,()=>{Te=null}),kt()),W[6].gameWin||W[6].gameOver?ce?(ce.p(W,se),se[0]&64&&K(ce,1)):(ce=jl(W),ce.c(),K(ce,1),ce.m(e,Fe)):ce&&(St(),oe(ce,1,1,()=>{ce=null}),kt());const Q={};!Qe&&se[0]&4096&&(Qe=!0,Q.dailyItemsData=W[12],Tt(()=>Qe=!1)),je.$set(Q),W[13][W[3]]?Ie?Ie.p(W,se):(Ie=xl(W),Ie.c(),Ie.m(e,null)):Ie&&(Ie.d(1),Ie=null),W[24].component&&W[24].complete?X?(X.p(W,se),se[0]&16777216&&K(X,1)):(X=Bl(W),X.c(),K(X,1),X.m(Je.parentNode,Je)):X&&(St(),oe(X,1,1,()=>{X=null}),kt()),W[24].component&&!W[24].complete?re?(re.p(W,se),se[0]&16777216&&K(re,1)):(re=Gl(W),re.c(),K(re,1),re.m(ke.parentNode,ke)):re&&(St(),oe(re,1,1,()=>{re=null}),kt())},i(W){te||(K(Y.$$.fragment,W),K(ae.$$.fragment,W),K(Te),K(ce),K(je.$$.fragment,W),K(X),K(re),te=!0)},o(W){oe(Y.$$.fragment,W),oe(ae.$$.fragment,W),oe(Te),oe(ce),oe(je.$$.fragment,W),oe(X),oe(re),te=!1},d(W){W&&(C(e),C(rt),C(Je),C(ke)),Be(Y),Be(ae),Te&&Te.d(),ce&&ce.d(),Be(je),Ie&&Ie.d(),X&&X.d(W),re&&re.d(W),Ge=!1,st(pt)}}}function Wl(n){let e,t,s;function i(o){n[52](o)}let r={};return n[19][n[3]]!==void 0&&(r.gameNumber=n[19][n[3]]),e=new qp({props:r}),Ve.push(()=>Nt(e,"gameNumber",i)),{c(){He(e.$$.fragment)},m(o,l){xe(e,o,l),s=!0},p(o,l){const a={};!t&&l[0]&524296&&(t=!0,a.gameNumber=o[19][o[3]],Tt(()=>t=!1)),e.$set(a)},i(o){s||(K(e.$$.fragment,o),s=!0)},o(o){oe(e.$$.fragment,o),s=!1},d(o){Be(e,o)}}}function jl(n){let e,t,s=n[6].gameWin?"Fantastic!":"Farewell...",i,r,o,l,a,c=n[6].gameWin?"won":"lost",u,d,f,m,g,v,b,N,T,P,A,R,j,S,k=n[12][n[3]].name+"",D,Y,ee,z,J,be,H,ue=oi(n[20],n[21],n[22])+"",G,he,ie,$,ne,x,E;function L(F){n[53](F)}let q={};return n[19][n[3]]!==void 0&&(q.gameNumber=n[19][n[3]]),ie=new xp({props:q}),Ve.push(()=>Nt(ie,"gameNumber",L)),x=new Uc({}),{c(){e=p("div"),t=p("span"),i=U(s),r=y(),o=p("img"),a=U(`
                    You `),u=U(c),d=U("!"),f=y(),m=p("span"),m.textContent="Today's item was...",g=y(),v=p("div"),b=p("a"),N=p("img"),P=y(),A=p("iconify-icon"),j=y(),S=p("span"),D=U(k),Y=y(),ee=p("span"),z=U(`Next item available in...
                    `),J=p("br"),be=y(),H=p("span"),he=y(),He(ie.$$.fragment),ne=y(),He(x.$$.fragment),nt(o.src,l=n[6].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||_(o,"src",l),_(o,"id","gameFinishIcon"),_(o,"alt",""),_(o,"class","svelte-105j5xd"),_(t,"class","flex fai-center svelte-105j5xd"),_(t,"id","gameFinishMessage"),_(m,"class","smaller-fs"),nt(N.src,T=Zt+n[12][n[3]].image)||_(N,"src",T),_(N,"alt",""),_(N,"class","svelte-105j5xd"),Ye(A,"icon","tabler:link"),Ye(A,"class","svelte-105j5xd"),_(b,"class","flex fjc-center fai-center svelte-105j5xd"),_(b,"href",R=Ln+n[12][n[3]].link),_(b,"target","_blank"),_(v,"class","itemImg ff-item flex svelte-105j5xd"),_(v,"id","dailyItemImg"),_(S,"class","ff-item itemName svelte-105j5xd"),_(S,"id","dailyItemName"),_(H,"class","ff-item svelte-105j5xd"),_(H,"id","nextItemTime"),_(ee,"class","flex fd-col svelte-105j5xd"),_(ee,"id","nextItemCont"),_(e,"class","gameFinishCont ff-bg flex fd-col fai-center rg-1 border-tp br-1 bs svelte-105j5xd")},m(F,ae){I(F,e,ae),h(e,t),h(t,i),h(t,r),h(t,o),h(t,a),h(t,u),h(t,d),h(e,f),h(e,m),h(e,g),h(e,v),h(v,b),h(b,N),h(b,P),h(b,A),h(e,j),h(e,S),h(S,D),h(e,Y),h(e,ee),h(ee,z),h(ee,J),h(ee,be),h(ee,H),H.innerHTML=ue,I(F,he,ae),xe(ie,F,ae),I(F,ne,ae),xe(x,F,ae),E=!0},p(F,ae){(!E||ae[0]&64)&&s!==(s=F[6].gameWin?"Fantastic!":"Farewell...")&&_e(i,s),(!E||ae[0]&64&&!nt(o.src,l=F[6].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&_(o,"src",l),(!E||ae[0]&64)&&c!==(c=F[6].gameWin?"won":"lost")&&_e(u,c),(!E||ae[0]&4104&&!nt(N.src,T=Zt+F[12][F[3]].image))&&_(N,"src",T),(!E||ae[0]&4104&&R!==(R=Ln+F[12][F[3]].link))&&_(b,"href",R),(!E||ae[0]&4104)&&k!==(k=F[12][F[3]].name+"")&&_e(D,k),(!E||ae[0]&7340032)&&ue!==(ue=oi(F[20],F[21],F[22])+"")&&(H.innerHTML=ue);const Ee={};!$&&ae[0]&524296&&($=!0,Ee.gameNumber=F[19][F[3]],Tt(()=>$=!1)),ie.$set(Ee)},i(F){E||(F&&Ze(()=>{E&&(G||(G=Oe(e,Bt,{duration:150},!0)),G.run(1))}),K(ie.$$.fragment,F),K(x.$$.fragment,F),E=!0)},o(F){F&&(G||(G=Oe(e,Bt,{duration:150},!1)),G.run(0)),oe(ie.$$.fragment,F),oe(x.$$.fragment,F),E=!1},d(F){F&&(C(e),C(he),C(ne)),F&&G&&G.end(),Be(ie,F),Be(x,F)}}}function xl(n){let e,t,s,i,r,o,l,a,c,u,d,f=n[13][n[3]].name+"",m;return{c(){e=p("div"),t=U(`Yesterday's item was...
                `),s=p("div"),i=p("a"),r=p("img"),l=y(),a=p("iconify-icon"),u=y(),d=p("span"),m=U(f),nt(r.src,o=Zt+n[13][n[3]].image)||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-105j5xd"),Ye(a,"icon","tabler:link"),Ye(a,"class","svelte-105j5xd"),_(i,"class","flex fjc-center fai-center svelte-105j5xd"),_(i,"href",c=Ln+n[13][n[3]].link),_(i,"target","_blank"),_(s,"class","itemImg ff-item flex svelte-105j5xd"),_(s,"id","previousItemImg"),_(d,"class","ff-item itemName svelte-105j5xd"),_(d,"id","previousItemName"),_(e,"class","previousItemCont ff-bg flex fd-col fai-center rg-1 border-tp br-1 bs svelte-105j5xd")},m(g,v){I(g,e,v),h(e,t),h(e,s),h(s,i),h(i,r),h(i,l),h(i,a),h(e,u),h(e,d),h(d,m)},p(g,v){v[0]&8200&&!nt(r.src,o=Zt+g[13][g[3]].image)&&_(r,"src",o),v[0]&8200&&c!==(c=Ln+g[13][g[3]].link)&&_(i,"href",c),v[0]&8200&&f!==(f=g[13][g[3]].name+"")&&_e(m,f)},d(g){g&&C(e)}}}function Bl(n){let e,t,s,i,r;var o=n[24].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=Ls(o,l())),{c(){e=p("div"),t&&He(t.$$.fragment),_(e,"class","promptCont")},m(a,c){I(a,e,c),t&&xe(t,e,null),n[55](e),s=!0,i||(r=Se(e,"click",n[56]),i=!0)},p(a,c){if(c[0]&16777216&&o!==(o=a[24].component)){if(t){St();const u=t;oe(u.$$.fragment,1,0,()=>{Be(u,1)}),kt()}o?(t=Ls(o,l()),He(t.$$.fragment),K(t.$$.fragment,1),xe(t,e,null)):t=null}},i(a){s||(t&&K(t.$$.fragment,a),s=!0)},o(a){t&&oe(t.$$.fragment,a),s=!1},d(a){a&&C(e),t&&Be(t),n[55](null),i=!1,r()}}}function Gl(n){let e,t,s,i,r,o,l;var a=n[24].component;function c(u,d){return{props:{prompted:!0}}}return a&&(s=Ls(a,c())),{c(){e=p("div"),t=p("div"),s&&He(s.$$.fragment),_(t,"class","flex fd-col border-tp br-1 bs"),_(e,"class","promptCont")},m(u,d){I(u,e,d),h(e,t),s&&xe(s,t,null),n[58](e),r=!0,o||(l=[Se(t,"introstart",n[57]),Se(e,"click",n[59])],o=!0)},p(u,d){if(d[0]&16777216&&a!==(a=u[24].component)){if(s){St();const f=s;oe(f.$$.fragment,1,0,()=>{Be(f,1)}),kt()}a?(s=Ls(a,c()),He(s.$$.fragment),K(s.$$.fragment,1),xe(s,t,null)):s=null}},i(u){r||(s&&K(s.$$.fragment,u),u&&Ze(()=>{r&&(i||(i=Oe(t,ot,{duration:200},!0)),i.run(1))}),r=!0)},o(u){s&&oe(s.$$.fragment,u),u&&(i||(i=Oe(t,ot,{duration:200},!1)),i.run(0)),r=!1},d(u){u&&C(e),s&&Be(s),u&&i&&i.end(),n[58](null),o=!1,st(l)}}}function bm(n){let e,t,s,i,r,o,l,a,c,u,d,f,m,g,v,b,N,T,P,A,R,j,S,k,D,Y,ee=Cn(n[8])&&Cn(n[7])&&n[10],z,J,be,H;Ze(n[42]);let ue=ye(n[31]),G=[];for(let E=0;E<ue.length;E+=1)G[E]=Ol(Pl(n,ue,E));let he=n[24].component&&Ml(),ie=ye(n[31]),$=[];for(let E=0;E<ie.length;E+=1)$[E]=Ll(Al(n,ie,E));let ne=n[11]&&Fl(n);D=new am({props:{version:rr}});let x=ee&&ql(n);return{c(){e=y();for(let E=0;E<G.length;E+=1)G[E].c();t=yt(),he&&he.c(),s=yt(),i=y(),r=p("div"),o=p("audio"),c=y(),u=p("audio"),m=y(),g=p("audio"),N=y(),T=p("audio"),R=y(),j=p("div");for(let E=0;E<$.length;E+=1)$[E].c();S=y(),ne&&ne.c(),k=y(),He(D.$$.fragment),Y=y(),x&&x.c(),z=yt(),nt(o.src,l="audio/lucky.mp3")||_(o,"src",l),o.muted=a=n[9].muted,nt(u.src,d="audio/farewell.mp3")||_(u,"src",d),u.muted=f=n[9].muted,nt(g.src,v="audio/heDidItAgain.mp3")||_(g,"src",v),g.muted=b=n[9].muted,nt(T.src,P="audio/fishCatch.mp3")||_(T,"src",P),T.muted=A=n[9].muted,_(j,"class","backgrounds")},m(E,L){I(E,e,L);for(let q=0;q<G.length;q+=1)G[q]&&G[q].m(Qn.head,null);h(Qn.head,t),he&&he.m(Qn.head,null),h(Qn.head,s),I(E,i,L),I(E,r,L),h(r,o),n[44](o),h(r,c),h(r,u),n[45](u),h(r,m),h(r,g),n[46](g),h(r,N),h(r,T),n[47](T),I(E,R,L),I(E,j,L);for(let q=0;q<$.length;q+=1)$[q]&&$[q].m(j,null);I(E,S,L),ne&&ne.m(E,L),I(E,k,L),xe(D,E,L),I(E,Y,L),x&&x.m(E,L),I(E,z,L),J=!0,be||(H=[Se(nn,"beforeunload",n[38]),Se(nn,"storage",n[39]),Se(nn,"wheel",n[40],{passive:!1}),Se(nn,"keydown",n[41]),Se(nn,"resize",n[42]),Se(Qn,"visibilitychange",n[43])],be=!0)},p(E,L){if(L[1]&1){ue=ye(E[31]);let q;for(q=0;q<ue.length;q+=1){const F=Pl(E,ue,q);G[q]?G[q].p(F,L):(G[q]=Ol(F),G[q].c(),G[q].m(t.parentNode,t))}for(;q<G.length;q+=1)G[q].d(1);G.length=ue.length}if(E[24].component?he||(he=Ml(),he.c(),he.m(s.parentNode,s)):he&&(he.d(1),he=null),(!J||L[0]&512&&a!==(a=E[9].muted))&&(o.muted=a),(!J||L[0]&512&&f!==(f=E[9].muted))&&(u.muted=f),(!J||L[0]&512&&b!==(b=E[9].muted))&&(g.muted=b),(!J||L[0]&512&&A!==(A=E[9].muted))&&(T.muted=A),L[0]&8388608|L[1]&1){ie=ye(E[31]);let q;for(q=0;q<ie.length;q+=1){const F=Al(E,ie,q);$[q]?$[q].p(F,L):($[q]=Ll(F),$[q].c(),$[q].m(j,null))}for(;q<$.length;q+=1)$[q].d(1);$.length=ie.length}E[11]?ne?(ne.p(E,L),L[0]&2048&&K(ne,1)):(ne=Fl(E),ne.c(),K(ne,1),ne.m(k.parentNode,k)):ne&&(St(),oe(ne,1,1,()=>{ne=null}),kt()),L[0]&1408&&(ee=Cn(E[8])&&Cn(E[7])&&E[10]),ee?x?(x.p(E,L),L[0]&1408&&K(x,1)):(x=ql(E),x.c(),K(x,1),x.m(z.parentNode,z)):x&&(St(),oe(x,1,1,()=>{x=null}),kt())},i(E){J||(K(ne),K(D.$$.fragment,E),K(x),J=!0)},o(E){oe(ne),oe(D.$$.fragment,E),oe(x),J=!1},d(E){E&&(C(e),C(i),C(r),C(R),C(j),C(S),C(k),C(Y),C(z)),ct(G,E),C(t),he&&he.d(E),C(s),n[44](null),n[45](null),n[46](null),n[47](null),ct($,E),ne&&ne.d(E),Be(D,E),x&&x.d(E),be=!1,st(H)}}}let rr="v1.1.2";function oi(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function wm(n,e,t){let s,i,r,o,l,a,c,u,d,f,m,g,v,b,N,T,P;de(n,Rn,w=>t(4,o=w)),de(n,fn,w=>t(5,l=w)),de(n,ri,w=>t(37,a=w)),de(n,It,w=>t(6,c=w)),de(n,Ho,w=>t(7,u=w)),de(n,ii,w=>t(8,d=w)),de(n,wt,w=>t(9,f=w)),de(n,dt,w=>t(24,m=w)),de(n,gs,w=>t(66,g=w)),de(n,Mt,w=>t(25,v=w)),de(n,on,w=>t(67,b=w)),de(n,ir,w=>t(68,N=w)),de(n,sr,w=>t(26,T=w)),de(n,dn,w=>t(27,P=w));let A,R,j=!1,S=7,k=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],D=!1,Y,ee,z={},J={},be=["version","builds","changelogSeen","fd-userId"],H,ue,G,he,ie,$=0;cu(()=>{if(t(10,j=!0),!N)fe(ir,N=!0,N),fe(dt,m.component=zc,m);else if(b.showAgain){for(let De in o)$+=o[De].gamesPlayed;let w=Math.floor(($-b.lastGamesPlayed)/3);w&&w>=b.timesDenied&&(fe(on,b.lastGamesPlayed=$,b),fe(dt,m.component=mm,m))}});function ne(){Y=setTimeout(()=>{t(11,D=!1)},750)}function x(){clearTimeout(Y),t(11,D=!0),ne()}let E={equipment:19816,weapons:19818},L,q,F=58,ae=58,Ee=58,Ke;function Fe(){let w=0;clearInterval(Ke),L=Date.now()/1e3/60/60/24+w,t(19,q={equipment:Math.floor(L)-E.equipment,weapons:Math.floor(L)-E.weapons}),setTimeout(()=>{for(let De of["equipment","weapons"])v[De].gameNum!=q[De]+1&&(fe(It,c=Dt.currentGameData[f.mode],c),fe(Mt,v[De]=Dt.currentGameData[De],v),fe(Mt,v[De].gameNum=q[De]+1,v));X_(Z_(er(gp))).then(De=>{fe(Ho,u={equipment:De.val().rng_equipment_list[q.equipment],weapons:De.val().rng_weapons_list[q.weapons]},u),t(34,z={equipment:De.val().rng_equipment_list[q.equipment-1],weapons:De.val().rng_weapons_list[q.weapons-1]})}),Ke=setInterval(()=>{let De=Date.now(),Un=(Math.floor(L)+1-w)*24*60*60*1e3-De;t(20,F=Math.floor(Un/1e3/60/60)),t(21,ae=Math.floor(Un%(1e3*60*60)/(1e3*60))),t(22,Ee=Math.floor(Un%(1e3*60)/1e3)),F==0&&ae==0&&Ee==0&&(fe(It,c=Dt.currentGameData[f.mode],c),fe(Mt,v.equipment=Dt.currentGameData.equipment,v),fe(Mt,v.weapons=Dt.currentGameData.weapons,v),setTimeout(Fe,1e3))},1e3)})}Fe();let je=["equipment","weapons"];for(let w of je)fetch(`https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/item-data/${w}Data.json`).then(async De=>{if(De.status!=200){console.error(`Failed to fetch ${w}!
Status: ${De.status}`);return}let ks=await De.json();fe(ii,d[w]=ks.sort((Un,$c)=>Un.name.toLowerCase().localeCompare($c.name.toLowerCase())),d)});let Qe=[],we=[],rt,Je,ke=9;for(let w=0;w<ke;w++)Qe.push(`backgrounds/BG${w}.jpg`);function te(w){Je=Math.floor(Math.random()*w.length)}te(Qe);function Ge(){t(23,rt=Je),we.push(Je)}Ge(),function w(){setTimeout(()=>{if(te(Qe),!we.length)Ge();else if(we.length>3&&(we=we.slice(1)),!we.includes(Je))Ge();else{let De=[...Array(ke).keys()].filter(ks=>!we.includes(ks));te(De),Ge()}document.visibilityState=="visible"&&w()},45e3)}(),localStorage.getItem("fd-version")!=rr&&(fe(gs,g=!1,g),localStorage.setItem("fd-version",rr));function pt(){fe(It,c.gameWin=!0,c),t(35,r.gamesPlayed++,r),t(35,r.gamesWon++,r),t(35,r.streak++,r),t(35,r.winInfo[c.chosenItems.length]++,r),(c.chosenItems.length===1?ie:r.streak>=3?he:ue).play()}function Te(){fe(It,c.gameOver=!0,c),t(35,r.gamesPlayed++,r),t(35,r.streak=0,r),G.play()}function ce(){fe(dt,m.component=null,m),fe(dt,m.complete=!1,m)}function Pe(){let w=R>A;document.documentElement.style.fontSize=`${(w?.75:R/A*.8)*k[S]}vh`}const Xe=()=>{T&&Lc(ps(er(Gc),`rooms/${T}`),null)},Ie=w=>{be.includes(w.key)?localStorage.setItem(w.key,w.oldValue):w.key=="fd-currentGameData"?w.url.includes("ls=true")?fe(Mt,v=JSON.parse(w.newValue),v):localStorage.setItem("fd-currentGameData",JSON.stringify(v)):w.key=="fd-settings"?w.url.includes("ls=true")?fe(wt,f=JSON.parse(w.newValue),f):localStorage.setItem("fd-settings",JSON.stringify(f)):w.key=="fd-playerStats"&&(w.url.includes("ls=true")?fe(Rn,o=JSON.parse(w.newValue),o):localStorage.setItem("fd-playerStats",JSON.stringify(o)))},X=w=>{let De=w.wheelDeltaY;if(w.ctrlKey){if(w.preventDefault(),k[S]==.2&&De<0||k[S]==5&&De>0)return;De>0?t(2,S++,S):t(2,S--,S),x()}},re=w=>{let De=["Enter"," ","Escape"];w.ctrlKey&&(w.key=="-"||w.key=="+"||w.code=="Equal"||w.key=="0")&&(w.preventDefault(),(w.key=="+"||w.code=="Equal")&&k[S]!=5?t(2,S++,S):w.key=="-"&&k[S]!=.2?t(2,S--,S):w.key=="0"&&k[S]!=1&&t(2,S=7),x()),m.component&&H&&(!w.ctrlKey&&!w.shiftKey&&!w.altKey&&De.includes(w.key)?ce():setTimeout(()=>{w.key=="Tab"&&!H.contains(document.activeElement)&&ce()}))};function W(){t(0,A=nn.outerHeight),t(1,R=nn.outerWidth)}const se=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,A=window.outerHeight),t(1,R=window.outerWidth),Pe()})};function Ne(w){Ve[w?"unshift":"push"](()=>{ue=w,t(15,ue)})}function Q(w){Ve[w?"unshift":"push"](()=>{G=w,t(16,G)})}function ve(w){Ve[w?"unshift":"push"](()=>{he=w,t(17,he)})}function Re(w){Ve[w?"unshift":"push"](()=>{ie=w,t(18,ie)})}const We=w=>{Ft(w),!P&&fe(wt,f.muted=!f.muted,f)},O=w=>{Ft(w),c.gameWin||c.gameOver?(location.hash="playerStats",nr()):(fe(dt,m.complete=!0,m),fe(dt,m.component=Uc,m))},gt=()=>{P||fe(dt,m.component=ym,m)},B=w=>{if(c.chosenItems.length){w.detail.checked=!w.detail.checked;return}fe(fn,l=w.detail.checked,l)};function V(w){n.$$.not_equal(q[s],w)&&(q[s]=w,t(19,q))}function $e(w){n.$$.not_equal(q[s],w)&&(q[s]=w,t(19,q))}function xn(w){ee=w,t(12,ee),t(8,d),t(7,u),t(34,z)}function Bn(w){Ve[w?"unshift":"push"](()=>{H=w,t(14,H)})}const Gn=w=>{H.children[0].contains(w.target)||ce()},Hn=()=>{let w=H.querySelector("a, button, input");w&&w.focus()};function Ss(w){Ve[w?"unshift":"push"](()=>{H=w,t(14,H)})}const Yc=w=>{H.children[0].contains(w.target)||ce()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(A||R||S)&&Pe(),n.$$.dirty[0]&512&&t(3,s=f.mode),n.$$.dirty[0]&384|n.$$.dirty[1]&8&&Cn(d)==2&&Cn(u)==2&&(t(12,ee={equipment:d.equipment.find(w=>w.name==u.equipment),weapons:d.weapons.find(w=>w.name==u.weapons)}),t(13,J={equipment:d.equipment.find(w=>w.name==z.equipment),weapons:d.weapons.find(w=>w.name==z.weapons)})),n.$$.dirty[0]&32&&fe(ri,a=l?6:7,a),n.$$.dirty[0]&200|n.$$.dirty[1]&64&&c.chosenItems.length&&!c.gameWin&&!c.gameOver&&(c.chosenItems[c.chosenItems.length-1].name==u[s]?pt():c.chosenItems.length==a&&Te()),n.$$.dirty[0]&40&&t(36,i=(l?"hard_":"")+s),n.$$.dirty[0]&16|n.$$.dirty[1]&32&&t(35,r=o[i]),n.$$.dirty[1]&16&&r.streak>r.maxStreak&&t(35,r.maxStreak=r.streak,r),n.$$.dirty[1]&48&&r&&Rn.update(w=>({...w,[i]:r}))},[A,R,S,s,o,l,c,u,d,f,j,D,ee,J,H,ue,G,he,ie,q,F,ae,Ee,rt,m,v,T,P,k,be,x,Qe,ce,Pe,z,r,i,a,Xe,Ie,X,re,W,se,Ne,Q,ve,Re,We,O,gt,B,V,$e,xn,Bn,Gn,Hn,Ss,Yc]}class Cm extends ft{constructor(e){super(),ht(this,e,wm,bm,it,{},null,[-1,-1,-1])}}new Cm({target:document.body});
