var Wc=Object.defineProperty;var jc=(n,e,t)=>e in n?Wc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ut=(n,e,t)=>(jc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function oe(){}const ri=n=>n;function Fl(n){return n()}function Wr(){return Object.create(null)}function at(n){n.forEach(Fl)}function fn(n){return typeof n=="function"}function st(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Ss;function nt(n,e){return n===e?!0:(Ss||(Ss=document.createElement("a")),Ss.href=e,n===Ss.href)}function xc(n){return Object.keys(n).length===0}function ql(n,...e){if(n==null){for(const s of e)s(void 0);return oe}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function er(n){let e;return ql(n,t=>e=t)(),e}function pe(n,e,t){n.$$.on_destroy.push(ql(e,t))}function _e(n,e,t){return n.set(t),e}function Wl(n){return n&&fn(n.destroy)?n.destroy:oe}const jl=typeof window<"u";let tr=jl?()=>window.performance.now():()=>Date.now(),nr=jl?n=>requestAnimationFrame(n):oe;const Cn=new Set;function xl(n){Cn.forEach(e=>{e.c(n)||(Cn.delete(e),e.f())}),Cn.size!==0&&nr(xl)}function sr(n){let e;return Cn.size===0&&nr(xl),{promise:new Promise(t=>{Cn.add(e={c:n,f:t})}),abort(){Cn.delete(e)}}}const Bc=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(n,e){n.appendChild(e)}function Bl(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Gc(n){const e=p("style");return e.textContent="/* empty */",Hc(Bl(n),e),e.sheet}function Hc(n,e){return h(n.head||n,e),e.sheet}function k(n,e,t){n.insertBefore(e,t||null)}function I(n){n.parentNode&&n.parentNode.removeChild(n)}function lt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function p(n){return document.createElement(n)}function Uc(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function H(n){return document.createTextNode(n)}function b(){return H(" ")}function bt(){return H("")}function Re(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ye(n,e,t){const s=e.toLowerCase();s in n?n[s]=typeof n[s]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function Ps(n){return n===""?null:+n}function zc(n){return Array.from(n.childNodes)}function de(n,e){e=""+e,n.data!==e&&(n.data=e)}function ks(n,e){n.value=e??""}function Rn(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function Ue(n,e,t){n.classList.toggle(e,!!t)}function Gl(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class Hl{constructor(e=!1){Ut(this,"is_svg",!1);Ut(this,"e");Ut(this,"n");Ut(this,"t");Ut(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=Uc(t.nodeName):this.e=p(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)k(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(I)}}function Os(n,e){return new n(e)}const Ms=new Map;let Ls=0;function Vc(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Yc(n,e){const t={stylesheet:Gc(e),rules:{}};return Ms.set(n,t),t}function Fs(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let w=0;w<=1;w+=a){const N=e+(t-e)*r(w);c+=w*100+`%{${o(N,1-N)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${Vc(u)}_${l}`,d=Bl(n),{stylesheet:m,rules:g}=Ms.get(d)||Yc(d,n);g[f]||(g[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,Ls+=1,f}function ir(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),Ls-=i,Ls||$c())}function $c(){nr(()=>{Ls||(Ms.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&I(e)}),Ms.clear())})}function Kc(n,e,t,s){if(!e)return oe;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return oe;const{delay:r=0,duration:o=300,easing:l=ri,start:a=tr()+r,end:c=a+o,tick:u=oe,css:f}=t(n,{from:e,to:i},s);let d=!0,m=!1,g;function v(){f&&(g=Fs(n,0,1,o,r,l,f)),r||(m=!0)}function w(){f&&ir(n,g),d=!1}return sr(N=>{if(!m&&N>=a&&(m=!0),m&&N>=c&&(u(1,0),w()),!d)return!1;if(m){const T=N-a,R=0+1*l(T/o);u(R,1-R)}return!0}),v(),u(0,1),w}function Qc(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,Jc(n,i)}}function Jc(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let ns;function Qn(n){ns=n}function Ul(){if(!ns)throw new Error("Function called outside component initialization");return ns}function Xc(n){Ul().$$.on_mount.push(n)}function zl(){const n=Ul();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=Gl(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const gn=[],Ve=[];let En=[];const Di=[],Zc=Promise.resolve();let Ai=!1;function eu(){Ai||(Ai=!0,Zc.then(Vl))}function Ze(n){En.push(n)}function Tt(n){Di.push(n)}const gi=new Set;let _n=0;function Vl(){if(_n!==0)return;const n=ns;do{try{for(;_n<gn.length;){const e=gn[_n];_n++,Qn(e),tu(e.$$)}}catch(e){throw gn.length=0,_n=0,e}for(Qn(null),gn.length=0,_n=0;Ve.length;)Ve.pop()();for(let e=0;e<En.length;e+=1){const t=En[e];gi.has(t)||(gi.add(t),t())}En.length=0}while(gn.length);for(;Di.length;)Di.pop()();Ai=!1,gi.clear(),Qn(n)}function tu(n){if(n.fragment!==null){n.update(),at(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ze)}}function nu(n){const e=[],t=[];En.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),En=e}let Un;function Yl(){return Un||(Un=Promise.resolve(),Un.then(()=>{Un=null})),Un}function Jn(n,e,t){n.dispatchEvent(Gl(`${e?"intro":"outro"}${t}`))}const Ds=new Set;let Lt;function Et(){Lt={r:0,c:[],p:Lt}}function It(){Lt.r||at(Lt.c),Lt=Lt.p}function $(n,e){n&&n.i&&(Ds.delete(n),n.i(e))}function re(n,e,t,s){if(n&&n.o){if(Ds.has(n))return;Ds.add(n),Lt.c.push(()=>{Ds.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const $l={duration:0};function su(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=Lt;l.r+=1;let a;function c(){const{delay:u=0,duration:f=300,easing:d=ri,tick:m=oe,css:g}=i||$l;g&&(o=Fs(n,1,0,f,u,d,g));const v=tr()+u,w=v+f;Ze(()=>Jn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),sr(N=>{if(r){if(N>=w)return m(0,1),Jn(n,!1,"end"),--l.r||at(l.c),!1;if(N>=v){const T=d((N-v)/f);m(1-T,T)}}return r})}return fn(i)?Yl().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&ir(n,o),r=!1)}}}function Oe(n,e,t,s){let r=e(n,t,{direction:"both"}),o=s?0:1,l=null,a=null,c=null,u;function f(){c&&ir(n,c)}function d(g,v){const w=g.b-o;return v*=Math.abs(w),{a:o,b:g.b,d:w,duration:v,start:g.start,end:g.start+v,group:g.group}}function m(g){const{delay:v=0,duration:w=300,easing:N=ri,tick:T=oe,css:R}=r||$l,D={start:tr()+v,b:g};g||(D.group=Lt,Lt.r+=1),"inert"in n&&(g?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=D:(R&&(f(),c=Fs(n,o,g,w,v,N,R)),g&&T(0,1),l=d(D,w),Ze(()=>Jn(n,g,"start")),sr(A=>{if(a&&A>a.start&&(l=d(a,w),a=null,Jn(n,l.b,"start"),R&&(f(),c=Fs(n,o,l.b,l.duration,0,N,r.css))),l){if(A>=l.end)T(o=l.b,1-o),Jn(n,l.b,"end"),a||(l.b?f():--l.group.r||at(l.group.c)),l=null;else if(A>=l.start){const O=A-l.start;o=l.a+l.d*N(O/l.duration),T(o,1-o)}}return!!(l||a)}))}return{run(g){fn(r)?Yl().then(()=>{r=r({direction:g?"in":"out"}),m(g)}):m(g)},end(){f(),l=a=null}}}function be(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function iu(n,e){re(n,1,1,()=>{e.delete(n.key)})}function ru(n,e){n.f(),iu(n,e)}function ou(n,e,t,s,i,r,o,l,a,c,u,f){let d=n.length,m=r.length,g=d;const v={};for(;g--;)v[n[g].key]=g;const w=[],N=new Map,T=new Map,R=[];for(g=m;g--;){const C=f(i,r,g),S=t(C);let B=o.get(S);B?s&&R.push(()=>B.p(C,e)):(B=c(S,C),B.c()),N.set(S,w[g]=B),S in v&&T.set(S,Math.abs(g-v[S]))}const D=new Set,A=new Set;function O(C){$(C,1),C.m(l,u),o.set(C.key,C),u=C.first,m--}for(;d&&m;){const C=w[m-1],S=n[d-1],B=C.key,K=S.key;C===S?(u=C.first,d--,m--):N.has(K)?!o.has(B)||D.has(B)?O(C):A.has(K)?d--:T.get(B)>T.get(K)?(A.add(B),O(C)):(D.add(K),d--):(a(S,o),d--)}for(;d--;){const C=n[d];N.has(C.key)||a(C,o)}for(;m;)O(w[m-1]);return at(R),w}function Nt(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function He(n){n&&n.c()}function xe(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),Ze(()=>{const r=n.$$.on_mount.map(Fl).filter(fn);n.$$.on_destroy?n.$$.on_destroy.push(...r):at(r),n.$$.on_mount=[]}),i.forEach(Ze)}function Be(n,e){const t=n.$$;t.fragment!==null&&(nu(t.after_update),at(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function lu(n,e){n.$$.dirty[0]===-1&&(gn.push(n),eu(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ht(n,e,t,s,i,r,o=null,l=[-1]){const a=ns;Qn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:oe,not_equal:i,bound:Wr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Wr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,d,...m)=>{const g=m.length?m[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&lu(n,f)),d}):[],c.update(),u=!0,at(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=zc(e.target);c.fragment&&c.fragment.l(f),f.forEach(I)}else c.fragment&&c.fragment.c();e.intro&&$(n.$$.fragment),xe(n,e.target,e.anchor),Vl()}Qn(a)}class ft{constructor(){Ut(this,"$$");Ut(this,"$$set")}$destroy(){Be(this,1),this.$destroy=oe}$on(e,t){if(!fn(t))return oe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!xc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const au="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(au);function Kl(n){const e=n-1;return e*e*e+1}function xt(n,{delay:e=0,duration:t=400,easing:s=ri}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}function it(n,{delay:e=0,duration:t=400,easing:s=Kl,start:i=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-i,u=l*(1-r);return{delay:e,duration:t,easing:s,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${l-u*d}
		`}}const pn=[];function kt(n,e=oe){let t;const s=new Set;function i(l){if(st(n,l)&&(n=l,t)){const a=!pn.length;for(const c of s)c[1](),pn.push(c,n);if(a){for(let c=0;c<pn.length;c+=2)pn[c][0](pn[c+1]);pn.length=0}}}function r(l){i(l(n))}function o(l,a=oe){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||oe),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}var jr={};/**
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
 */const Ql={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const L=function(n,e){if(!n)throw Ln(e)},Ln=function(n){return new Error("Firebase Database ("+Ql.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Jl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},cu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},rr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(d=64)),s.push(t[u],t[f],t[d],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||f==null)throw new uu;const d=r<<2|l>>4;if(s.push(d),c!==64){const m=l<<4&240|c>>2;if(s.push(m),f!==64){const g=c<<6&192|f;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class uu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xl=function(n){const e=Jl(n);return rr.encodeByteArray(e,!0)},qs=function(n){return Xl(n).replace(/\./g,"")},Pi=function(n){try{return rr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hu(n){return Zl(void 0,n)}function Zl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!fu(t)||(n[t]=Zl(n[t],e[t]));return n}function fu(n){return n!=="__proto__"}/**
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
 */function du(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _u=()=>du().__FIREBASE_DEFAULTS__,pu=()=>{if(typeof process>"u"||typeof jr>"u")return;const n=jr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},mu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pi(n[1]);return e&&JSON.parse(e)},ea=()=>{try{return _u()||pu()||mu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gu=n=>{var e,t;return(t=(e=ea())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vu=n=>{const e=gu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ta=()=>{var n;return(n=ea())===null||n===void 0?void 0:n.config};/**
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
 */class or{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function bu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qs(JSON.stringify(t)),qs(JSON.stringify(o)),""].join(".")}/**
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
 */function yu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function na(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yu())}function wu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sa(){return Ql.NODE_ADMIN===!0}function Cu(){try{return typeof indexedDB=="object"}catch{return!1}}function Eu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Iu="FirebaseError";class ms extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Iu,Object.setPrototypeOf(this,ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Su(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ms(i,l,s)}}function Su(n,e){return n.replace(ku,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ku=/\{\$([^}]+)}/g;/**
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
 */function ss(n){return JSON.parse(n)}function et(n){return JSON.stringify(n)}/**
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
 */const ra=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=ss(Pi(r[0])||""),t=ss(Pi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Tu=function(n){const e=ra(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Nu=function(n){const e=ra(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Gt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Dn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function xr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ws(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Oi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Br(r)&&Br(o)){if(!Oi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Br(n){return n!==null&&typeof n=="object"}/**
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
 */function Ru(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Du{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const d=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):f<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[f]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function oa(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Au=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,L(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},oi=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Fn(n){return n&&n._delegate?n._delegate:n}class is{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Pu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new or;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mu(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ou(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ou(n){return n===en?void 0:n}function Mu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Lu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Me||(Me={}));const Fu={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},qu=Me.INFO,Wu={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},ju=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Wu[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=qu,this._logHandler=ju,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const xu=(n,e)=>e.some(t=>n instanceof t);let Gr,Hr;function Bu(){return Gr||(Gr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gu(){return Hr||(Hr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aa=new WeakMap,Mi=new WeakMap,ca=new WeakMap,vi=new WeakMap,lr=new WeakMap;function Hu(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(zt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&aa.set(t,n)}).catch(()=>{}),lr.set(e,n),e}function Uu(n){if(Mi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Mi.set(n,e)}let Li={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ca.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zu(n){Li=n(Li)}function Vu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(bi(this),e,...t);return ca.set(s,e.sort?e.sort():[e]),zt(s)}:Gu().includes(n)?function(...e){return n.apply(bi(this),e),zt(aa.get(this))}:function(...e){return zt(n.apply(bi(this),e))}}function Yu(n){return typeof n=="function"?Vu(n):(n instanceof IDBTransaction&&Uu(n),xu(n,Bu())?new Proxy(n,Li):n)}function zt(n){if(n instanceof IDBRequest)return Hu(n);if(vi.has(n))return vi.get(n);const e=Yu(n);return e!==n&&(vi.set(n,e),lr.set(e,n)),e}const bi=n=>lr.get(n);function $u(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=zt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(zt(o.result),a.oldVersion,a.newVersion,zt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ku=["get","getKey","getAll","getAllKeys","count"],Qu=["put","add","delete","clear"],yi=new Map;function Ur(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yi.get(e))return yi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Qu.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ku.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return yi.set(e,r),r}zu(n=>({...n,get:(e,t,s)=>Ur(e,t)||n.get(e,t,s),has:(e,t)=>!!Ur(e,t)||n.has(e,t)}));/**
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
 */class Ju{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xu(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Xu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fi="@firebase/app",zr="0.9.29";/**
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
 */const on=new la("@firebase/app"),Zu="@firebase/app-compat",eh="@firebase/analytics-compat",th="@firebase/analytics",nh="@firebase/app-check-compat",sh="@firebase/app-check",ih="@firebase/auth",rh="@firebase/auth-compat",oh="@firebase/database",lh="@firebase/database-compat",ah="@firebase/functions",ch="@firebase/functions-compat",uh="@firebase/installations",hh="@firebase/installations-compat",fh="@firebase/messaging",dh="@firebase/messaging-compat",_h="@firebase/performance",ph="@firebase/performance-compat",mh="@firebase/remote-config",gh="@firebase/remote-config-compat",vh="@firebase/storage",bh="@firebase/storage-compat",yh="@firebase/firestore",wh="@firebase/firestore-compat",Ch="firebase",Eh="10.9.0";/**
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
 */const qi="[DEFAULT]",Ih={[Fi]:"fire-core",[Zu]:"fire-core-compat",[th]:"fire-analytics",[eh]:"fire-analytics-compat",[sh]:"fire-app-check",[nh]:"fire-app-check-compat",[ih]:"fire-auth",[rh]:"fire-auth-compat",[oh]:"fire-rtdb",[lh]:"fire-rtdb-compat",[ah]:"fire-fn",[ch]:"fire-fn-compat",[uh]:"fire-iid",[hh]:"fire-iid-compat",[fh]:"fire-fcm",[dh]:"fire-fcm-compat",[_h]:"fire-perf",[ph]:"fire-perf-compat",[mh]:"fire-rc",[gh]:"fire-rc-compat",[vh]:"fire-gcs",[bh]:"fire-gcs-compat",[yh]:"fire-fst",[wh]:"fire-fst-compat","fire-js":"fire-js",[Ch]:"fire-js-all"};/**
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
 */const js=new Map,Wi=new Map;function Sh(n,e){try{n.container.addComponent(e)}catch(t){on.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xs(n){const e=n.name;if(Wi.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;Wi.set(e,n);for(const t of js.values())Sh(t,n);return!0}function kh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Th={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new ia("app","Firebase",Th);/**
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
 */class Nh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Rh=Eh;function ar(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:qi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(t||(t=ta()),!t)throw Vt.create("no-options");const r=js.get(i);if(r){if(Oi(t,r.options)&&Oi(s,r.config))return r;throw Vt.create("duplicate-app",{appName:i})}const o=new Lu(i);for(const a of Wi.values())o.addComponent(a);const l=new Nh(t,s,o);return js.set(i,l),l}function Dh(n=qi){const e=js.get(n);if(!e&&n===qi&&ta())return ar();if(!e)throw Vt.create("no-app",{appName:n});return e}function In(n,e,t){var s;let i=(s=Ih[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(l.join(" "));return}xs(new is(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ah="firebase-heartbeat-database",Ph=1,rs="firebase-heartbeat-store";let wi=null;function ua(){return wi||(wi=$u(Ah,Ph,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),wi}async function Oh(n){try{const t=(await ua()).transaction(rs),s=await t.objectStore(rs).get(ha(n));return await t.done,s}catch(e){if(e instanceof ms)on.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});on.warn(t.message)}}}async function Vr(n,e){try{const s=(await ua()).transaction(rs,"readwrite");await s.objectStore(rs).put(e,ha(n)),await s.done}catch(t){if(t instanceof ms)on.warn(t.message);else{const s=Vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});on.warn(s.message)}}}function ha(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Mh=1024,Lh=30*24*60*60*1e3;class Fh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Lh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yr(),{heartbeatsToSend:s,unsentEntries:i}=qh(this._heartbeatsCache.heartbeats),r=qs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yr(){return new Date().toISOString().substring(0,10)}function qh(n,e=Mh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),$r(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),$r(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Wh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cu()?Eu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Oh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $r(n){return qs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function jh(n){xs(new is("platform-logger",e=>new Ju(e),"PRIVATE")),xs(new is("heartbeat",e=>new Fh(e),"PRIVATE")),In(Fi,zr,n),In(Fi,zr,"esm2017"),In("fire-js","")}jh("");var xh="firebase",Bh="10.9.0";/**
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
 */In(xh,Bh,"app");var Kr={};const Qr="@firebase/database",Jr="1.0.3";/**
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
 */let fa="";function Gh(n){fa=n}/**
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
 */class Hh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ss(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Uh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Gt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const da=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Hh(e)}}catch{}return new Uh},nn=da("localStorage"),ji=da("sessionStorage");/**
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
 */const Sn=new la("@firebase/database"),zh=function(){let n=1;return function(){return n++}}(),_a=function(n){const e=Au(n),t=new Du;t.update(e);const s=t.digest();return rr.encodeByteArray(s)},gs=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=gs.apply(null,s):typeof s=="object"?e+=et(s):e+=s,e+=" "}return e};let rn=null,Xr=!0;const Vh=function(n,e){L(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Sn.logLevel=Me.VERBOSE,rn=Sn.log.bind(Sn),e&&ji.set("logging_enabled",!0)):typeof n=="function"?rn=n:(rn=null,ji.remove("logging_enabled"))},_t=function(...n){if(Xr===!0&&(Xr=!1,rn===null&&ji.get("logging_enabled")===!0&&Vh(!0)),rn){const e=gs.apply(null,n);rn(e)}},vs=function(n){return function(...e){_t(n,...e)}},xi=function(...n){const e="FIREBASE INTERNAL ERROR: "+gs(...n);Sn.error(e)},Bt=function(...n){const e=`FIREBASE FATAL ERROR: ${gs(...n)}`;throw Sn.error(e),new Error(e)},St=function(...n){const e="FIREBASE WARNING: "+gs(...n);Sn.warn(e)},Yh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&St("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pa=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},$h=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},An="[MIN_NAME]",ln="[MAX_NAME]",qn=function(n,e){if(n===e)return 0;if(n===An||e===ln)return-1;if(e===An||n===ln)return 1;{const t=Zr(n),s=Zr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Kh=function(n,e){return n===e?0:n<e?-1:1},zn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+et(e))},cr=function(n){if(typeof n!="object"||n===null)return et(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=et(e[s]),t+=":",t+=cr(n[e[s]]);return t+="}",t},ma=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function wt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ga=function(n){L(!pa(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Qh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Jh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Xh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Zh=new RegExp("^-?(0*)\\d{1,10}$"),ef=-2147483648,tf=2147483647,Zr=function(n){if(Zh.test(n)){const e=Number(n);if(e>=ef&&e<=tf)return e}return null},bs=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw St("Exception was thrown by user callback.",t),e},Math.floor(0))}},nf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class sf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){St(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class rf{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',St(e)}}class kn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kn.OWNER="owner";/**
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
 */const ur="5",va="v",ba="s",ya="r",wa="f",Ca=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ea="ls",Ia="p",Bi="ac",Sa="websocket",ka="long_polling";/**
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
 */class Ta{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=nn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&nn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function of(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Na(n,e,t){L(typeof e=="string","typeof type must == string"),L(typeof t=="object","typeof params must == object");let s;if(e===Sa)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ka)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);of(n)&&(t.ns=n.namespace);const i=[];return wt(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class lf{constructor(){this.counters_={}}incrementCounter(e,t=1){Gt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return hu(this.counters_)}}/**
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
 */const Ci={},Ei={};function hr(n){const e=n.toString();return Ci[e]||(Ci[e]=new lf),Ci[e]}function af(n,e){const t=n.toString();return Ei[t]||(Ei[t]=e()),Ei[t]}/**
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
 */class cf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const eo="start",uf="close",hf="pLPCommand",ff="pRTLPCB",Ra="id",Da="pw",Aa="ser",df="cb",_f="seg",pf="ts",mf="d",gf="dframe",Pa=1870,Oa=30,vf=Pa-Oa,bf=25e3,yf=3e4;class vn{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vs(e),this.stats_=hr(t),this.urlFn=a=>(this.appCheckToken&&(a[Bi]=this.appCheckToken),Na(t,ka,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new cf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yf)),$h(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===eo)this.id=l,this.password=a;else if(o===uf)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[eo]="t",s[Aa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[df]=this.scriptTagHolder.uniqueCallbackIdentifier),s[va]=ur,this.transportSessionId&&(s[ba]=this.transportSessionId),this.lastSessionId&&(s[Ea]=this.lastSessionId),this.applicationId&&(s[Ia]=this.applicationId),this.appCheckToken&&(s[Bi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ca.test(location.hostname)&&(s[ya]=wa);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vn.forceAllow_=!0}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){return vn.forceAllow_?!0:!vn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qh()&&!Jh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Xl(t),i=ma(s,vf);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[gf]="t",s[Ra]=e,s[Da]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=et(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class fr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zh(),window[hf+this.uniqueCallbackIdentifier]=e,window[ff+this.uniqueCallbackIdentifier]=t,this.myIFrame=fr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){_t("frame writing exception"),l.stack&&_t(l.stack),_t(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ra]=this.myID,e[Da]=this.myPW,e[Aa]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Oa+s.length<=Pa;){const o=this.pendingSegs.shift();s=s+"&"+_f+i+"="+o.seg+"&"+pf+i+"="+o.ts+"&"+mf+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(bf)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const wf=16384,Cf=45e3;let Bs=null;typeof MozWebSocket<"u"?Bs=MozWebSocket:typeof WebSocket<"u"&&(Bs=WebSocket);class Rt{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vs(this.connId),this.stats_=hr(t),this.connURL=Rt.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[va]=ur,typeof location<"u"&&location.hostname&&Ca.test(location.hostname)&&(o[ya]=wa),t&&(o[ba]=t),s&&(o[Ea]=s),i&&(o[Bi]=i),r&&(o[Ia]=r),Na(e,Sa,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,nn.set("previous_websocket_failure",!0);try{let s;sa(),this.mySock=new Bs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Bs!==null&&!Rt.forceDisallow_}static previouslyFailed(){return nn.isInMemoryStorage||nn.get("previous_websocket_failure")===!0}markConnectionHealthy(){nn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ss(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ma(t,wf);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Cf))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rt.responsesRequiredToBeHealthy=2;Rt.healthyTimeout=3e4;/**
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
 */class os{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vn,Rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Rt&&Rt.isAvailable();let s=t&&!Rt.previouslyFailed();if(e.webSocketOnly&&(t||St("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Rt];else{const i=this.transports_=[];for(const r of os.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);os.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}os.globalTransportInitialized_=!1;/**
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
 */const Ef=6e4,If=5e3,Sf=10*1024,kf=100*1024,Ii="t",to="d",Tf="s",no="r",Nf="e",so="o",io="a",ro="n",oo="p",Rf="h";class Df{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vs("c:"+this.id+":"),this.transportManager_=new os(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Sf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ii in e){const t=e[Ii];t===io?this.upgradeIfSecondaryHealthy_():t===no?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===so&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zn("t",e),s=zn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:oo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:io,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ro,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zn("t",e),s=zn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zn(Ii,e);if(to in e){const s=e[to];if(t===Rf){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ro){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Tf?this.onConnectionShutdown_(s):t===no?this.onReset_(s):t===Nf?xi("Server Error: "+s):t===so?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ur!==s&&St("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Xn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ef))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(If))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:oo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(nn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ma{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class La{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){L(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Gs extends La{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!na()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Gs}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const lo=32,ao=768;class Ae{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ce(){return new Ae("")}function ye(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Kt(n){return n.pieces_.length-n.pieceNum_}function Le(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ae(n.pieces_,e)}function Fa(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Af(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function qa(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Wa(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ae(e,0)}function tt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Ae(t,0)}function ge(n){return n.pieceNum_>=n.pieces_.length}function mt(n,e){const t=ye(n),s=ye(e);if(t===null)return e;if(t===s)return mt(Le(n),Le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ja(n,e){if(Kt(n)!==Kt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function At(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Kt(n)>Kt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Pf{constructor(e,t){this.errorPrefix_=t,this.parts_=qa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=oi(this.parts_[s]);xa(this)}}function Of(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=oi(e),xa(n)}function Mf(n){const e=n.parts_.pop();n.byteLength_-=oi(e),n.parts_.length>0&&(n.byteLength_-=1)}function xa(n){if(n.byteLength_>ao)throw new Error(n.errorPrefix_+"has a key path longer than "+ao+" bytes ("+n.byteLength_+").");if(n.parts_.length>lo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lo+") or object contains a cycle "+tn(n))}function tn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class dr extends La{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new dr}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Vn=1e3,Lf=60*5*1e3,co=30*1e3,Ff=1.3,qf=3e4,Wf="server_kill",uo=3;class jt extends Ma{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=jt.nextPersistentConnectionId_++,this.log_=vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vn,this.maxReconnectDelay_=Lf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!sa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");dr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(et(r)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new or,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;jt.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Gt(e,"w")){const s=Dn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();St(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Nu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=co)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Tu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):xi("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qf&&(this.reconnectDelay_=Vn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ff)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(f){L(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,l=new Df(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{St(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wf)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&St(f),a())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xr(this.interruptReasons_)&&(this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>cr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Ae(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){_t("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=uo&&(this.reconnectDelay_=co,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){_t("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=uo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+fa.replace(/\./g,"-")]=1,na()?e["framework.cordova"]=1:wu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gs.getInstance().currentlyOnline();return xr(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
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
 */class me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new me(e,t)}}/**
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
 */class li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new me(An,e),i=new me(An,t);return this.compare(s,i)!==0}minPost(){return me.MIN}}/**
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
 */let Ts;class Ba extends li{static get __EMPTY_NODE(){return Ts}static set __EMPTY_NODE(e){Ts=e}compare(e,t){return qn(e.name,t.name)}isDefinedOn(e){throw Ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return me.MIN}maxPost(){return new me(ln,Ts)}makePost(e,t){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new me(e,Ts)}toString(){return".key"}}const Tn=new Ba;/**
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
 */class Ns{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ot{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ot.RED,this.left=i??vt.EMPTY_NODE,this.right=r??vt.EMPTY_NODE}copy(e,t,s,i,r){return new ot(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ot.RED=!0;ot.BLACK=!1;class jf{copy(e,t,s,i,r){return this}insert(e,t,s){return new ot(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(e,t=vt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new vt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ot.BLACK,null,null))}remove(e){return new vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ot.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ns(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ns(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ns(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ns(this.root_,null,this.comparator_,!0,e)}}vt.EMPTY_NODE=new jf;/**
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
 */function xf(n,e){return qn(n.name,e.name)}function _r(n,e){return qn(n,e)}/**
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
 */let Gi;function Bf(n){Gi=n}const Ga=function(n){return typeof n=="number"?"number:"+ga(n):"string:"+n},Ha=function(n){if(n.isLeafNode()){const e=n.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gt(e,".sv"),"Priority must be a string or number.")}else L(n===Gi||n.isEmpty(),"priority of unexpected type.");L(n===Gi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ho;class rt{constructor(e,t=rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ha(this.priorityNode_)}static set __childrenNodeConstructor(e){ho=e}static get __childrenNodeConstructor(){return ho}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ge(e)?this:ye(e)===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ye(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||Kt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Le(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ga(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ga(this.value_):e+=this.value_,this.lazyHash_=_a(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rt.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=rt.VALUE_TYPE_ORDER.indexOf(t),r=rt.VALUE_TYPE_ORDER.indexOf(s);return L(i>=0,"Unknown leaf type: "+t),L(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ua,za;function Gf(n){Ua=n}function Hf(n){za=n}class Uf extends li{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?qn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return me.MIN}maxPost(){return new me(ln,new rt("[PRIORITY-POST]",za))}makePost(e,t){const s=Ua(e);return new me(t,new rt("[PRIORITY-POST]",s))}toString(){return".priority"}}const ze=new Uf;/**
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
 */const zf=Math.log(2);class Vf{constructor(e){const t=r=>parseInt(Math.log(r)/zf,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Hs=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let f,d;if(u===0)return null;if(u===1)return f=n[a],d=t?t(f):f,new ot(d,f.node,ot.BLACK,null,null);{const m=parseInt(u/2,10)+a,g=i(a,m),v=i(m+1,c);return f=n[m],d=t?t(f):f,new ot(d,f.node,ot.BLACK,g,v)}},r=function(a){let c=null,u=null,f=n.length;const d=function(g,v){const w=f-g,N=f;f-=g;const T=i(w+1,N),R=n[w],D=t?t(R):R;m(new ot(D,R.node,v,null,T))},m=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(g+1));v?d(w,ot.BLACK):(d(w,ot.BLACK),d(w,ot.RED))}return u},o=new Vf(n.length),l=r(o);return new vt(s||e,l)};/**
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
 */let Si;const mn={};class Wt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return L(mn&&ze,"ChildrenNode.ts has not been loaded"),Si=Si||new Wt({".priority":mn},{".priority":ze}),Si}get(e){const t=Dn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof vt?t:null}hasIndex(e){return Gt(this.indexSet_,e.toString())}addIndex(e,t){L(e!==Tn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(me.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Hs(s,e.getCompare()):l=mn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Wt(u,c)}addToIndexes(e,t){const s=Ws(this.indexes_,(i,r)=>{const o=Dn(this.indexSet_,r);if(L(o,"Missing index implementation for "+r),i===mn)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(me.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Hs(l,o.getCompare())}else return mn;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new me(e.name,l))),a.insert(e,e.node)}});return new Wt(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ws(this.indexes_,i=>{if(i===mn)return i;{const r=t.get(e.name);return r?i.remove(new me(e.name,r)):i}});return new Wt(s,this.indexSet_)}}/**
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
 */let Yn;class Z{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ha(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Yn||(Yn=new Z(new vt(_r),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Yn}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Yn:t}}getChild(e){const t=ye(e);return t===null?this:this.getImmediateChild(t).getChild(Le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(L(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new me(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Yn:this.priorityNode_;return new Z(i,o,r)}}updateChild(e,t){const s=ye(e);if(s===null)return t;{L(ye(e)!==".priority"||Kt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Le(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(ze,(o,l)=>{t[o]=l.val(e),s++,r&&Z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ga(this.getPriority().val())+":"),this.forEachChild(ze,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":_a(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new me(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new me(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,me.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,me.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ys?-1:0}withIndex(e){if(e===Tn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Tn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(ze),i=t.getIterator(ze);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Tn?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Yf extends Z{constructor(){super(new vt(_r),Z.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const ys=new Yf;Object.defineProperties(me,{MIN:{value:new me(An,Z.EMPTY_NODE)},MAX:{value:new me(ln,ys)}});Ba.__EMPTY_NODE=Z.EMPTY_NODE;rt.__childrenNodeConstructor=Z;Bf(ys);Hf(ys);/**
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
 */const $f=!0;function ut(n,e=null){if(n===null)return Z.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new rt(t,ut(e))}if(!(n instanceof Array)&&$f){const t=[];let s=!1;if(wt(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=ut(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new me(o,a)))}}),t.length===0)return Z.EMPTY_NODE;const r=Hs(t,xf,o=>o.name,_r);if(s){const o=Hs(t,ze.getCompare());return new Z(r,ut(e),new Wt({".priority":o},{".priority":ze}))}else return new Z(r,ut(e),Wt.Default)}else{let t=Z.EMPTY_NODE;return wt(n,(s,i)=>{if(Gt(n,s)&&s.substring(0,1)!=="."){const r=ut(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ut(e))}}Gf(ut);/**
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
 */class Kf extends li{constructor(e){super(),this.indexPath_=e,L(!ge(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?qn(e.name,t.name):r}makePost(e,t){const s=ut(e),i=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new me(t,i)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,ys);return new me(ln,e)}toString(){return qa(this.indexPath_,0).join("/")}}/**
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
 */class Qf extends li{compare(e,t){const s=e.node.compareTo(t.node);return s===0?qn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(e,t){const s=ut(e);return new me(t,s)}toString(){return".value"}}const Jf=new Qf;/**
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
 */function Va(n){return{type:"value",snapshotNode:n}}function Pn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ls(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function as(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Xf(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class pr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(ls(t,l)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Pn(t,s)):o.trackChildChange(as(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ze,(i,r)=>{t.hasChild(i)||s.trackChildChange(ls(i,r))}),t.isLeafNode()||t.forEachChild(ze,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(as(i,r,o))}else s.trackChildChange(Pn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class cs{constructor(e){this.indexedFilter_=new pr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=cs.getStartPost_(e),this.endPost_=cs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new me(t,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Z.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Z.EMPTY_NODE);const r=this;return t.forEachChild(ze,(o,l)=>{r.matches(new me(o,l))||(i=i.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Zf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new cs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new me(t,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Z.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Z.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,m)=>f(m,d)}else o=this.index_.getCompare();const l=e;L(l.numChildren()===this.limit_,"");const a=new me(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const f=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,a);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(as(t,s,f)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(ls(t,f));const v=l.updateImmediateChild(t,Z.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Pn(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ls(c.name,c.node)),r.trackChildChange(Pn(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,Z.EMPTY_NODE)):e}}/**
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
 */class mr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:An}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new mr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ed(n){return n.loadsAllData()?new pr(n.getIndex()):n.hasLimit()?new Zf(n):new cs(n)}function fo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ze?t="$priority":n.index_===Jf?t="$value":n.index_===Tn?t="$key":(L(n.index_ instanceof Kf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=et(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=et(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+et(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=et(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+et(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function _o(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ze&&(e.i=n.index_.toString()),e}/**
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
 */class Us extends Ma{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=vs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Us.getListenId_(e,s),l={};this.listens_[o]=l;const a=fo(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),Dn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Us.getListenId_(e,t);delete this.listens_[s]}get(e){const t=fo(e._queryParams),s=e._path.toString(),i=new or;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ru(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ss(l.responseText)}catch{St("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&St("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class td{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function zs(){return{value:null,children:new Map}}function Ya(n,e,t){if(ge(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ye(e);n.children.has(s)||n.children.set(s,zs());const i=n.children.get(s);e=Le(e),Ya(i,e,t)}}function Hi(n,e,t){n.value!==null?t(e,n.value):nd(n,(s,i)=>{const r=new Ae(e.toString()+"/"+s);Hi(i,r,t)})}function nd(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class sd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&wt(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const po=10*1e3,id=30*1e3,rd=5*60*1e3;class od{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new sd(e);const s=po+(id-po)*Math.random();Xn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;wt(e,(i,r)=>{r>0&&Gt(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Xn(this.reportStats_.bind(this),Math.floor(Math.random()*2*rd))}}/**
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
 */var Pt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function $a(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Vs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Pt.ACK_USER_WRITE,this.source=$a()}operationForChild(e){if(ge(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ae(e));return new Vs(Ce(),t,this.revert)}}else return L(ye(this.path)===e,"operationForChild called for unrelated child."),new Vs(Le(this.path),this.affectedTree,this.revert)}}/**
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
 */class us{constructor(e,t){this.source=e,this.path=t,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return ge(this.path)?new us(this.source,Ce()):new us(this.source,Le(this.path))}}/**
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
 */class an{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Pt.OVERWRITE}operationForChild(e){return ge(this.path)?new an(this.source,Ce(),this.snap.getImmediateChild(e)):new an(this.source,Le(this.path),this.snap)}}/**
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
 */class hs{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Pt.MERGE}operationForChild(e){if(ge(this.path)){const t=this.children.subtree(new Ae(e));return t.isEmpty()?null:t.value?new an(this.source,Ce(),t.value):new hs(this.source,Ce(),t)}else return L(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hs(this.source,Le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Qt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ge(e))return this.isFullyInitialized()&&!this.filtered_;const t=ye(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class ld{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ad(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Xf(o.childName,o.snapshotNode))}),$n(n,i,"child_removed",e,s,t),$n(n,i,"child_added",e,s,t),$n(n,i,"child_moved",r,s,t),$n(n,i,"child_changed",e,s,t),$n(n,i,"value",e,s,t),i}function $n(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>ud(n,l,a)),o.forEach(l=>{const a=cd(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function cd(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ud(n,e,t){if(e.childName==null||t.childName==null)throw Ln("Should only compare child_ events.");const s=new me(e.childName,e.snapshotNode),i=new me(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function ai(n,e){return{eventCache:n,serverCache:e}}function Zn(n,e,t,s){return ai(new Qt(e,t,s),n.serverCache)}function Ka(n,e,t,s){return ai(n.eventCache,new Qt(e,t,s))}function Ys(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function cn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ki;const hd=()=>(ki||(ki=new vt(Kh)),ki);class Fe{constructor(e,t=hd()){this.value=e,this.children=t}static fromObject(e){let t=new Fe(null);return wt(e,(s,i)=>{t=t.set(new Ae(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ce(),value:this.value};if(ge(e))return null;{const s=ye(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Le(e),t);return r!=null?{path:tt(new Ae(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ge(e))return this;{const t=ye(e),s=this.children.get(t);return s!==null?s.subtree(Le(e)):new Fe(null)}}set(e,t){if(ge(e))return new Fe(t,this.children);{const s=ye(e),r=(this.children.get(s)||new Fe(null)).set(Le(e),t),o=this.children.insert(s,r);return new Fe(this.value,o)}}remove(e){if(ge(e))return this.children.isEmpty()?new Fe(null):new Fe(null,this.children);{const t=ye(e),s=this.children.get(t);if(s){const i=s.remove(Le(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Fe(null):new Fe(this.value,r)}else return this}}get(e){if(ge(e))return this.value;{const t=ye(e),s=this.children.get(t);return s?s.get(Le(e)):null}}setTree(e,t){if(ge(e))return t;{const s=ye(e),r=(this.children.get(s)||new Fe(null)).setTree(Le(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Fe(this.value,o)}}fold(e){return this.fold_(Ce(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(tt(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ce(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(ge(e))return null;{const r=ye(e),o=this.children.get(r);return o?o.findOnPath_(Le(e),tt(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ce(),t)}foreachOnPath_(e,t,s){if(ge(e))return this;{this.value&&s(t,this.value);const i=ye(e),r=this.children.get(i);return r?r.foreachOnPath_(Le(e),tt(t,i),s):new Fe(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(tt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new Fe(null))}}function es(n,e,t){if(ge(e))return new Ot(new Fe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=mt(i,e);return r=r.updateChild(o,t),new Ot(n.writeTree_.set(i,r))}else{const i=new Fe(t),r=n.writeTree_.setTree(e,i);return new Ot(r)}}}function mo(n,e,t){let s=n;return wt(t,(i,r)=>{s=es(s,tt(e,i),r)}),s}function go(n,e){if(ge(e))return Ot.empty();{const t=n.writeTree_.setTree(e,new Fe(null));return new Ot(t)}}function Ui(n,e){return dn(n,e)!=null}function dn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(mt(t.path,e)):null}function vo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ze,(s,i)=>{e.push(new me(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new me(s,i.value))}),e}function Yt(n,e){if(ge(e))return n;{const t=dn(n,e);return t!=null?new Ot(new Fe(t)):new Ot(n.writeTree_.subtree(e))}}function zi(n){return n.writeTree_.isEmpty()}function On(n,e){return Qa(Ce(),n.writeTree_,e)}function Qa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(L(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Qa(tt(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(tt(n,".priority"),s)),t}}/**
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
 */function ci(n,e){return ec(e,n)}function fd(n,e,t,s,i){L(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=es(n.visibleWrites,e,t)),n.lastWriteId=s}function dd(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function _d(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);L(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&pd(l,s.path)?i=!1:At(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return md(n),!0;if(s.snap)n.visibleWrites=go(n.visibleWrites,s.path);else{const l=s.children;wt(l,a=>{n.visibleWrites=go(n.visibleWrites,tt(s.path,a))})}return!0}else return!1}function pd(n,e){if(n.snap)return At(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&At(tt(n.path,t),e))return!0;return!1}function md(n){n.visibleWrites=Ja(n.allWrites,gd,Ce()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function gd(n){return n.visible}function Ja(n,e,t){let s=Ot.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)At(t,o)?(l=mt(t,o),s=es(s,l,r.snap)):At(o,t)&&(l=mt(o,t),s=es(s,Ce(),r.snap.getChild(l)));else if(r.children){if(At(t,o))l=mt(t,o),s=mo(s,l,r.children);else if(At(o,t))if(l=mt(o,t),ge(l))s=mo(s,Ce(),r.children);else{const a=Dn(r.children,ye(l));if(a){const c=a.getChild(Le(l));s=es(s,Ce(),c)}}}else throw Ln("WriteRecord should have .snap or .children")}}return s}function Xa(n,e,t,s,i){if(!s&&!i){const r=dn(n.visibleWrites,e);if(r!=null)return r;{const o=Yt(n.visibleWrites,e);if(zi(o))return t;if(t==null&&!Ui(o,Ce()))return null;{const l=t||Z.EMPTY_NODE;return On(o,l)}}}else{const r=Yt(n.visibleWrites,e);if(!i&&zi(r))return t;if(!i&&t==null&&!Ui(r,Ce()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(At(c.path,e)||At(e,c.path))},l=Ja(n.allWrites,o,e),a=t||Z.EMPTY_NODE;return On(l,a)}}}function vd(n,e,t){let s=Z.EMPTY_NODE;const i=dn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ze,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Yt(n.visibleWrites,e);return t.forEachChild(ze,(o,l)=>{const a=On(Yt(r,new Ae(o)),l);s=s.updateImmediateChild(o,a)}),vo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Yt(n.visibleWrites,e);return vo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function bd(n,e,t,s,i){L(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=tt(e,t);if(Ui(n.visibleWrites,r))return null;{const o=Yt(n.visibleWrites,r);return zi(o)?i.getChild(t):On(o,i.getChild(t))}}function yd(n,e,t,s){const i=tt(e,t),r=dn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Yt(n.visibleWrites,i);return On(o,s.getNode().getImmediateChild(t))}else return null}function wd(n,e){return dn(n.visibleWrites,e)}function Cd(n,e,t,s,i,r,o){let l;const a=Yt(n.visibleWrites,e),c=dn(a,Ce());if(c!=null)l=c;else if(t!=null)l=On(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=d.getNext();for(;m&&u.length<i;)f(m,s)!==0&&u.push(m),m=d.getNext();return u}else return[]}function Ed(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function $s(n,e,t,s){return Xa(n.writeTree,n.treePath,e,t,s)}function br(n,e){return vd(n.writeTree,n.treePath,e)}function bo(n,e,t,s){return bd(n.writeTree,n.treePath,e,t,s)}function Ks(n,e){return wd(n.writeTree,tt(n.treePath,e))}function Id(n,e,t,s,i,r){return Cd(n.writeTree,n.treePath,e,t,s,i,r)}function yr(n,e,t){return yd(n.writeTree,n.treePath,e,t)}function Za(n,e){return ec(tt(n.treePath,e),n.writeTree)}function ec(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Sd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;L(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,as(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,ls(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Pn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,as(s,e.snapshotNode,i.oldSnap));else throw Ln("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class kd{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const tc=new kd;class wr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cn(this.viewCache_),r=Id(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Td(n){return{filter:n}}function Nd(n,e){L(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Rd(n,e,t,s,i){const r=new Sd;let o,l;if(t.type===Pt.OVERWRITE){const c=t;c.source.fromUser?o=Vi(n,e,c.path,c.snap,s,i,r):(L(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!ge(c.path),o=Qs(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===Pt.MERGE){const c=t;c.source.fromUser?o=Ad(n,e,c.path,c.children,s,i,r):(L(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Yi(n,e,c.path,c.children,s,i,l,r))}else if(t.type===Pt.ACK_USER_WRITE){const c=t;c.revert?o=Md(n,e,c.path,s,i,r):o=Pd(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Pt.LISTEN_COMPLETE)o=Od(n,e,t.path,s,r);else throw Ln("Unknown operation type: "+t.type);const a=r.getChanges();return Dd(e,o,a),{viewCache:o,changes:a}}function Dd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ys(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Va(Ys(e)))}}function nc(n,e,t,s,i,r){const o=e.eventCache;if(Ks(s,t)!=null)return e;{let l,a;if(ge(t))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cn(e),u=c instanceof Z?c:Z.EMPTY_NODE,f=br(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=$s(s,cn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ye(t);if(c===".priority"){L(Kt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const f=bo(s,t,u,a);f!=null?l=n.filter.updatePriority(u,f):l=o.getNode()}else{const u=Le(t);let f;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=bo(s,t,o.getNode(),a);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=yr(s,c,e.serverCache);f!=null?l=n.filter.updateChild(o.getNode(),c,f,u,i,r):l=o.getNode()}}return Zn(e,l,o.isFullyInitialized()||ge(t),n.filter.filtersNodes())}}function Qs(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(ge(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),m,null)}else{const m=ye(t);if(!a.isCompleteForPath(t)&&Kt(t)>1)return e;const g=Le(t),w=a.getNode().getImmediateChild(m).updateChild(g,s);m===".priority"?c=u.updatePriority(a.getNode(),w):c=u.updateChild(a.getNode(),m,w,g,tc,null)}const f=Ka(e,c,a.isFullyInitialized()||ge(t),u.filtersNodes()),d=new wr(i,f,r);return nc(n,f,t,i,d,l)}function Vi(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new wr(i,e,r);if(ge(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Zn(e,c,!0,n.filter.filtersNodes());else{const f=ye(t);if(f===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=Zn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Le(t),m=l.getNode().getImmediateChild(f);let g;if(ge(d))g=s;else{const v=u.getCompleteChild(f);v!=null?Fa(d)===".priority"&&v.getChild(Wa(d)).isEmpty()?g=v:g=v.updateChild(d,s):g=Z.EMPTY_NODE}if(m.equals(g))a=e;else{const v=n.filter.updateChild(l.getNode(),f,g,d,u,o);a=Zn(e,v,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function yo(n,e){return n.eventCache.isCompleteForChild(e)}function Ad(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=tt(t,a);yo(e,ye(u))&&(l=Vi(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=tt(t,a);yo(e,ye(u))||(l=Vi(n,l,u,c,i,r,o))}),l}function wo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Yi(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;ge(t)?c=s:c=new Fe(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),g=wo(n,m,d);a=Qs(n,a,new Ae(f),g,i,r,o,l)}}),c.children.inorderTraversal((f,d)=>{const m=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!m){const g=e.serverCache.getNode().getImmediateChild(f),v=wo(n,g,d);a=Qs(n,a,new Ae(f),v,i,r,o,l)}}),a}function Pd(n,e,t,s,i,r,o){if(Ks(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(ge(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Qs(n,e,t,a.getNode().getChild(t),i,r,l,o);if(ge(t)){let c=new Fe(null);return a.getNode().forEachChild(Tn,(u,f)=>{c=c.set(new Ae(u),f)}),Yi(n,e,t,c,i,r,l,o)}else return e}else{let c=new Fe(null);return s.foreach((u,f)=>{const d=tt(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Yi(n,e,t,c,i,r,l,o)}}function Od(n,e,t,s,i){const r=e.serverCache,o=Ka(e,r.getNode(),r.isFullyInitialized()||ge(t),r.isFiltered());return nc(n,o,t,s,tc,i)}function Md(n,e,t,s,i,r){let o;if(Ks(s,t)!=null)return e;{const l=new wr(s,e,i),a=e.eventCache.getNode();let c;if(ge(t)||ye(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$s(s,cn(e));else{const f=e.serverCache.getNode();L(f instanceof Z,"serverChildren would be complete if leaf node"),u=br(s,f)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=ye(t);let f=yr(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=a.getImmediateChild(u)),f!=null?c=n.filter.updateChild(a,u,f,Le(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,Z.EMPTY_NODE,Le(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$s(s,cn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ks(s,Ce())!=null,Zn(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Ld{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new pr(s.getIndex()),r=ed(s);this.processor_=Td(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Z.EMPTY_NODE,l.getNode(),null),u=new Qt(a,o.isFullyInitialized(),i.filtersNodes()),f=new Qt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ai(f,u),this.eventGenerator_=new ld(this.query_)}get query(){return this.query_}}function Fd(n){return n.viewCache_.serverCache.getNode()}function qd(n){return Ys(n.viewCache_)}function Wd(n,e){const t=cn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ge(e)&&!t.getImmediateChild(ye(e)).isEmpty())?t.getChild(e):null}function Co(n){return n.eventRegistrations_.length===0}function jd(n,e){n.eventRegistrations_.push(e)}function Eo(n,e,t){const s=[];if(t){L(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Io(n,e,t,s){e.type===Pt.MERGE&&e.source.queryId!==null&&(L(cn(n.viewCache_),"We should always have a full cache before handling merges"),L(Ys(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Rd(n.processor_,i,e,t,s);return Nd(n.processor_,r.viewCache),L(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,sc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function xd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ze,(r,o)=>{s.push(Pn(r,o))}),t.isFullyInitialized()&&s.push(Va(t.getNode())),sc(n,s,t.getNode(),e)}function sc(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return ad(n.eventGenerator_,e,t,i)}/**
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
 */let Js;class ic{constructor(){this.views=new Map}}function Bd(n){L(!Js,"__referenceConstructor has already been defined"),Js=n}function Gd(){return L(Js,"Reference.ts has not been loaded"),Js}function Hd(n){return n.views.size===0}function Cr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return L(r!=null,"SyncTree gave us an op for an invalid query."),Io(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Io(o,e,t,s));return r}}function rc(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=$s(t,i?s:null),a=!1;l?a=!0:s instanceof Z?(l=br(t,s),a=!1):(l=Z.EMPTY_NODE,a=!1);const c=ai(new Qt(l,a,!1),new Qt(s,i,!1));return new Ld(e,c)}return o}function Ud(n,e,t,s,i,r){const o=rc(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),jd(o,t),xd(o,t)}function zd(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Jt(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(Eo(c,t,s)),Co(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(Eo(a,t,s)),Co(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Jt(n)&&r.push(new(Gd())(e._repo,e._path)),{removed:r,events:o}}function oc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function $t(n,e){let t=null;for(const s of n.views.values())t=t||Wd(s,e);return t}function lc(n,e){if(e._queryParams.loadsAllData())return ui(n);{const s=e._queryIdentifier;return n.views.get(s)}}function ac(n,e){return lc(n,e)!=null}function Jt(n){return ui(n)!=null}function ui(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Xs;function Vd(n){L(!Xs,"__referenceConstructor has already been defined"),Xs=n}function Yd(){return L(Xs,"Reference.ts has not been loaded"),Xs}let $d=1;class So{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Fe(null),this.pendingWriteTree_=Ed(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kd(n,e,t,s,i){return fd(n.pendingWriteTree_,e,t,s,i),i?Cs(n,new an($a(),e,t)):[]}function bn(n,e,t=!1){const s=dd(n.pendingWriteTree_,e);if(_d(n.pendingWriteTree_,e)){let r=new Fe(null);return s.snap!=null?r=r.set(Ce(),!0):wt(s.children,o=>{r=r.set(new Ae(o),!0)}),Cs(n,new Vs(s.path,r,t))}else return[]}function ws(n,e,t){return Cs(n,new an(gr(),e,t))}function Qd(n,e,t){const s=Fe.fromObject(t);return Cs(n,new hs(gr(),e,s))}function Jd(n,e){return Cs(n,new us(gr(),e))}function Xd(n,e,t){const s=Er(n,t);if(s){const i=Ir(s),r=i.path,o=i.queryId,l=mt(r,e),a=new us(vr(o),l);return Sr(n,r,a)}else return[]}function cc(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ac(o,e))){const a=zd(o,e,t,s);Hd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(d,m)=>Jt(m));if(u&&!f){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const m=n_(d);for(let g=0;g<m.length;++g){const v=m[g],w=v.query,N=_c(n,v);n.listenProvider_.startListening(ts(w),fs(n,w),N.hashFn,N.onComplete)}}}!f&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(ts(e),null):c.forEach(d=>{const m=n.queryToTagMap.get(hi(d));n.listenProvider_.stopListening(ts(d),m)}))}s_(n,c)}return l}function uc(n,e,t,s){const i=Er(n,s);if(i!=null){const r=Ir(i),o=r.path,l=r.queryId,a=mt(o,e),c=new an(vr(l),a,t);return Sr(n,o,c)}else return[]}function Zd(n,e,t,s){const i=Er(n,s);if(i){const r=Ir(i),o=r.path,l=r.queryId,a=mt(o,e),c=Fe.fromObject(t),u=new hs(vr(l),a,c);return Sr(n,o,u)}else return[]}function e_(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,m)=>{const g=mt(d,i);r=r||$t(m,g),o=o||Jt(m)});let l=n.syncPointTree_.get(i);l?(o=o||Jt(l),r=r||$t(l,Ce())):(l=new ic,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=Z.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,g)=>{const v=$t(g,Ce());v&&(r=r.updateImmediateChild(m,v))}));const c=ac(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=hi(e);L(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=i_();n.queryToTagMap.set(d,m),n.tagToQueryMap.set(m,d)}const u=ci(n.pendingWriteTree_,i);let f=Ud(l,e,t,u,r,a);if(!c&&!o&&!s){const d=lc(l,e);f=f.concat(r_(n,e,d))}return f}function hc(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=mt(o,e),c=$t(l,a);if(c)return c});return Xa(i,e,r,t,!0)}function t_(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const f=mt(c,t);s=s||$t(u,f)});let i=n.syncPointTree_.get(t);i?s=s||$t(i,Ce()):(i=new ic,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Qt(s,!0,!1):null,l=ci(n.pendingWriteTree_,e._path),a=rc(i,e,l,r?o.getNode():Z.EMPTY_NODE,r);return qd(a)}function Cs(n,e){return fc(e,n.syncPointTree_,null,ci(n.pendingWriteTree_,Ce()))}function fc(n,e,t,s){if(ge(n.path))return dc(n,e,t,s);{const i=e.get(Ce());t==null&&i!=null&&(t=$t(i,Ce()));let r=[];const o=ye(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=Za(s,o);r=r.concat(fc(l,a,c,u))}return i&&(r=r.concat(Cr(i,n,s,t))),r}}function dc(n,e,t,s){const i=e.get(Ce());t==null&&i!=null&&(t=$t(i,Ce()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Za(s,o),u=n.operationForChild(o);u&&(r=r.concat(dc(u,l,a,c)))}),i&&(r=r.concat(Cr(i,n,s,t))),r}function _c(n,e){const t=e.query,s=fs(n,t);return{hashFn:()=>(Fd(e)||Z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Xd(n,t._path,s):Jd(n,t._path);{const r=Xh(i,t);return cc(n,t,null,r)}}}}function fs(n,e){const t=hi(e);return n.queryToTagMap.get(t)}function hi(n){return n._path.toString()+"$"+n._queryIdentifier}function Er(n,e){return n.tagToQueryMap.get(e)}function Ir(n){const e=n.indexOf("$");return L(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ae(n.substr(0,e))}}function Sr(n,e,t){const s=n.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const i=ci(n.pendingWriteTree_,e);return Cr(s,t,i,null)}function n_(n){return n.fold((e,t,s)=>{if(t&&Jt(t))return[ui(t)];{let i=[];return t&&(i=oc(t)),wt(s,(r,o)=>{i=i.concat(o)}),i}})}function ts(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Yd())(n._repo,n._path):n}function s_(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=hi(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function i_(){return $d++}function r_(n,e,t){const s=e._path,i=fs(n,e),r=_c(n,t),o=n.listenProvider_.startListening(ts(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)L(!Jt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,f)=>{if(!ge(c)&&u&&Jt(u))return[ui(u).query];{let d=[];return u&&(d=d.concat(oc(u).map(m=>m.query))),wt(f,(m,g)=>{d=d.concat(g)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(ts(u),fs(n,u))}}return o}/**
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
 */class kr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new kr(t)}node(){return this.node_}}class Tr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=tt(this.path_,e);return new Tr(this.syncTree_,t)}node(){return hc(this.syncTree_,this.path_)}}const o_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ko=function(n,e,t){if(!n||typeof n!="object")return n;if(L(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return l_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return a_(n[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},l_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:L(!1,"Unexpected server value: "+n)}},a_=function(n,e,t){n.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},c_=function(n,e,t,s){return Nr(e,new Tr(t,n),s)},u_=function(n,e,t){return Nr(n,new kr(e),t)};function Nr(n,e,t){const s=n.getPriority().val(),i=ko(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=ko(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new rt(l,ut(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new rt(i))),o.forEachChild(ze,(l,a)=>{const c=Nr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Rr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Dr(n,e){let t=e instanceof Ae?e:new Ae(e),s=n,i=ye(t);for(;i!==null;){const r=Dn(s.node.children,i)||{children:{},childCount:0};s=new Rr(i,s,r),t=Le(t),i=ye(t)}return s}function Wn(n){return n.node.value}function pc(n,e){n.node.value=e,$i(n)}function mc(n){return n.node.childCount>0}function h_(n){return Wn(n)===void 0&&!mc(n)}function fi(n,e){wt(n.node.children,(t,s)=>{e(new Rr(t,n,s))})}function gc(n,e,t,s){t&&!s&&e(n),fi(n,i=>{gc(i,e,!0,s)}),t&&s&&e(n)}function f_(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Es(n){return new Ae(n.parent===null?n.name:Es(n.parent)+"/"+n.name)}function $i(n){n.parent!==null&&d_(n.parent,n.name,n)}function d_(n,e,t){const s=h_(t),i=Gt(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,$i(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,$i(n))}/**
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
 */const __=/[\[\].#$\/\u0000-\u001F\u007F]/,p_=/[\[\].#$\u0000-\u001F\u007F]/,Ti=10*1024*1024,vc=function(n){return typeof n=="string"&&n.length!==0&&!__.test(n)},bc=function(n){return typeof n=="string"&&n.length!==0&&!p_.test(n)},m_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bc(n)},yc=function(n,e,t){const s=t instanceof Ae?new Pf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+tn(s));if(typeof e=="function")throw new Error(n+"contains a function "+tn(s)+" with contents = "+e.toString());if(pa(e))throw new Error(n+"contains "+e.toString()+" "+tn(s));if(typeof e=="string"&&e.length>Ti/3&&oi(e)>Ti)throw new Error(n+"contains a string greater than "+Ti+" utf8 bytes "+tn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(wt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!vc(o)))throw new Error(n+" contains an invalid key ("+o+") "+tn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Of(s,o),yc(n,l,s),Mf(s)}),i&&r)throw new Error(n+' contains ".value" child '+tn(s)+" in addition to actual children.")}},wc=function(n,e,t,s){if(!(s&&t===void 0)&&!bc(t))throw new Error(oa(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},g_=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wc(n,e,t,s)},v_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!m_(t))throw new Error(oa(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class b_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function y_(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ja(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Zt(n,e,t){y_(n,t),w_(n,s=>At(s,e)||At(e,s))}function w_(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(C_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function C_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();rn&&_t("event: "+t.toString()),bs(s)}}}/**
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
 */const E_="repo_interrupt",I_=25;class S_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zs(),this.transactionQueueTree_=new Rr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function k_(n,e,t){if(n.stats_=hr(n.repoInfo_),n.forceRestClient_||nf())n.server_=new Us(n.repoInfo_,(s,i,r,o)=>{To(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>No(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new jt(n.repoInfo_,e,(s,i,r,o)=>{To(n,s,i,r,o)},s=>{No(n,s)},s=>{N_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=af(n.repoInfo_,()=>new od(n.stats_,n.server_)),n.infoData_=new td,n.infoSyncTree_=new So({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=ws(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ar(n,"connected",!1),n.serverSyncTree_=new So({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Zt(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function T_(n){const t=n.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Cc(n){return o_({timestamp:T_(n)})}function To(n,e,t,s,i){n.dataUpdateCount++;const r=new Ae(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Ws(t,c=>ut(c));o=Zd(n.serverSyncTree_,r,a,i)}else{const a=ut(t);o=uc(n.serverSyncTree_,r,a,i)}else if(s){const a=Ws(t,c=>ut(c));o=Qd(n.serverSyncTree_,r,a)}else{const a=ut(t);o=ws(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Mr(n,r)),Zt(n.eventQueue_,l,o)}function No(n,e){Ar(n,"connected",e),e===!1&&A_(n)}function N_(n,e){wt(e,(t,s)=>{Ar(n,t,s)})}function Ar(n,e,t){const s=new Ae("/.info/"+e),i=ut(t);n.infoData_.updateSnapshot(s,i);const r=ws(n.infoSyncTree_,s,i);Zt(n.eventQueue_,s,r)}function R_(n){return n.nextWriteId_++}function D_(n,e,t){const s=t_(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=ut(i).withIndex(e._queryParams.getIndex());e_(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=ws(n.serverSyncTree_,e._path,r);else{const l=fs(n.serverSyncTree_,e);o=uc(n.serverSyncTree_,e._path,r,l)}return Zt(n.eventQueue_,e._path,o),cc(n.serverSyncTree_,e,t,null,!0),r},i=>(Pr(n,"get for query "+et(e)+" failed: "+i),Promise.reject(new Error(i))))}function A_(n){Pr(n,"onDisconnectEvents");const e=Cc(n),t=zs();Hi(n.onDisconnect_,Ce(),(i,r)=>{const o=c_(i,r,n.serverSyncTree_,e);Ya(t,i,o)});let s=[];Hi(t,Ce(),(i,r)=>{s=s.concat(ws(n.serverSyncTree_,i,r));const o=L_(n,i);Mr(n,o)}),n.onDisconnect_=zs(),Zt(n.eventQueue_,Ce(),s)}function P_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(E_)}function Pr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),_t(t,...e)}function Ec(n,e,t){return hc(n.serverSyncTree_,e,t)||Z.EMPTY_NODE}function Or(n,e=n.transactionQueueTree_){if(e||di(n,e),Wn(e)){const t=Sc(n,e);L(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&O_(n,Es(e),t)}else mc(e)&&fi(e,t=>{Or(n,t)})}function O_(n,e,t){const s=t.map(c=>c.currentWriteId),i=Ec(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];L(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=mt(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{Pr(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(bn(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&f.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();di(n,Dr(n.transactionQueueTree_,e)),Or(n,n.transactionQueueTree_),Zt(n.eventQueue_,e,u);for(let d=0;d<f.length;d++)bs(f[d])}else{if(c==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{St("transaction at "+a.toString()+" failed: "+c);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=c}Mr(n,e)}},o)}function Mr(n,e){const t=Ic(n,e),s=Es(t),i=Sc(n,t);return M_(n,i,s),s}function M_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=mt(t,a.path);let u=!1,f;if(L(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,f=a.abortReason,i=i.concat(bn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=I_)u=!0,f="maxretry",i=i.concat(bn(n.serverSyncTree_,a.currentWriteId,!0));else{const d=Ec(n,a.path,o);a.currentInputSnapshot=d;const m=e[l].update(d.val());if(m!==void 0){yc("transaction failed: Data returned ",m,a.path);let g=ut(m);typeof m=="object"&&m!=null&&Gt(m,".priority")||(g=g.updatePriority(d.getPriority()));const w=a.currentWriteId,N=Cc(n),T=u_(g,d,N);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=T,a.currentWriteId=R_(n),o.splice(o.indexOf(w),1),i=i.concat(Kd(n.serverSyncTree_,a.path,T,a.currentWriteId,a.applyLocally)),i=i.concat(bn(n.serverSyncTree_,w,!0))}else u=!0,f="nodata",i=i.concat(bn(n.serverSyncTree_,a.currentWriteId,!0))}Zt(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(f),!1,null))))}di(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)bs(s[l]);Or(n,n.transactionQueueTree_)}function Ic(n,e){let t,s=n.transactionQueueTree_;for(t=ye(e);t!==null&&Wn(s)===void 0;)s=Dr(s,t),e=Le(e),t=ye(e);return s}function Sc(n,e){const t=[];return kc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function kc(n,e,t){const s=Wn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);fi(e,i=>{kc(n,i,t)})}function di(n,e){const t=Wn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,pc(e,t.length>0?t:void 0)}fi(e,s=>{di(n,s)})}function L_(n,e){const t=Es(Ic(n,e)),s=Dr(n.transactionQueueTree_,e);return f_(s,i=>{Ni(n,i)}),Ni(n,s),gc(s,i=>{Ni(n,i)}),t}function Ni(n,e){const t=Wn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(L(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(L(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(bn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?pc(e,void 0):t.length=r+1,Zt(n.eventQueue_,Es(e),i);for(let o=0;o<s.length;o++)bs(s[o])}}/**
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
 */function F_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function q_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):St(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ro=function(n,e){const t=W_(n),s=t.namespace;t.domain==="firebase.com"&&Bt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Yh();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ta(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Ae(t.pathString)}},W_=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(u,f)),u<f&&(i=F_(n.substring(u,f)));const d=q_(n.substring(Math.min(n.length,f)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class j_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class x_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class B_{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Lr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return ge(this._path)?null:Fa(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=_o(this._queryParams),t=cr(e);return t==="{}"?"default":t}get _queryObject(){return _o(this._queryParams)}isEqual(e){if(e=Fn(e),!(e instanceof Lr))return!1;const t=this._repo===e._repo,s=ja(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Af(this._path)}}class Ht extends Lr{constructor(e,t){super(e,t,new mr,!1)}get parent(){const e=Wa(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ds{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ae(e),s=Ki(this.ref,e);return new ds(this._node.getChild(t),s,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ds(i,Ki(this.ref,s),ze)))}hasChild(e){const t=new Ae(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function G_(n,e){return n=Fn(n),n._checkNotDeleted("ref"),e!==void 0?Ki(n._root,e):n._root}function Ki(n,e){return n=Fn(n),ye(n._path)===null?g_("child","path",e,!1):wc("child","path",e,!1),new Ht(n._repo,tt(n._path,e))}function H_(n){n=Fn(n);const e=new B_(()=>{}),t=new Fr(e);return D_(n._repo,n,t).then(s=>new ds(s,new Ht(n._repo,n._path),n._queryParams.getIndex()))}class Fr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new j_("value",this,new ds(e.snapshotNode,new Ht(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new x_(this,e,t):null}matches(e){return e instanceof Fr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function U_(n,...e){let t=Fn(n);for(const s of e)t=s._apply(t);return t}Bd(Ht);Vd(Ht);/**
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
 */const z_="FIREBASE_DATABASE_EMULATOR_HOST",Qi={};let V_=!1;function Y_(n,e,t,s){n.repoInfo_=new Ta(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function $_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ro(r,i),l=o.repoInfo,a,c;typeof process<"u"&&Kr&&(c=Kr[z_]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ro(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new kn(kn.OWNER):new rf(n.name,n.options,e);v_("Invalid Firebase Database URL",o),ge(o.path)||Bt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Q_(l,n,u,new sf(n.name,t));return new J_(f,n)}function K_(n,e){const t=Qi[e];(!t||t[n.key]!==n)&&Bt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),P_(n),delete t[n.key]}function Q_(n,e,t,s){let i=Qi[e.name];i||(i={},Qi[e.name]=i);let r=i[n.toURLString()];return r&&Bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new S_(n,V_,t,s),i[n.toURLString()]=r,r}class J_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(k_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(K_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bt("Cannot call "+e+" on a deleted database.")}}function Tc(n=Dh(),e){const t=kh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=vu("database");s&&X_(t,...s)}return t}function X_(n,e,t,s={}){n=Fn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Bt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new kn(kn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:bu(s.mockUserToken,n.app.options.projectId);r=new kn(o)}Y_(i,e,t,r)}/**
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
 */function Z_(n){Gh(Rh),xs(new is("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return $_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),In(Qr,Jr,n),In(Qr,Jr,"esm2017")}jt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};jt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Z_();var _s={},Nc={},_i={};Object.defineProperty(_i,"__esModule",{value:!0});_i.rotx=void 0;function ep(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}_i.rotx=ep;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=_i;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(Nc);var Rc={},pi={};Object.defineProperty(pi,"__esModule",{value:!0});pi.base64=void 0;class tp{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const np=new tp;pi.base64=np;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=pi;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(Rc);var Dc={},mi={};Object.defineProperty(mi,"__esModule",{value:!0});mi.hex=void 0;class sp{encode(e){let t="",s="";for(let i=0;i<e.length;i++)t=e.charCodeAt(i).toString(16),s+=("000"+t).slice(-4);return s}decode(e){let t=e.match(/.{1,4}/g)||[],s="";for(let i=0;i<t.length;i++)s+=String.fromCharCode(parseInt(t[i],16));return s}}const ip=new sp;mi.hex=ip;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=mi;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(Dc);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=Nc;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=Rc;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var s=Dc;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return s.hex}})})(_s);let rp={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},Ac={},op={ixqSmg:"IQhiAgLdRq06vESQ81ncFDq8YCUrePFURt-_wRQ",icbpLwuiqv:"nzwvbqmzltm-zwwua.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-zwwua-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm-zwwua",abwziomJcksmb:"nzwvbqmzltm-zwwua.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"932448152432",ixxQl:"1:932448152432:emj:77m89n4801k6703i3i7lj5",umiaczmumvbQl:"O-ZSNPG52H5N"},Pc={};for(let[n,e]of Object.entries(rp))Ac[_s.rotx(n,18)]=_s.rotx(e,18);for(let[n,e]of Object.entries(op))Pc[_s.rotx(n,18)]=_s.rotx(e,18);let Zs={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},ei={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},lp=["head","body","legs","feet","neck","back","ring","misc"],ti={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged"},ap=Tc(ar(Ac,"fd"));Tc(ar(Pc,"fd-rooms"));let Mn="https://fantastic-frontier-roblox.fandom.com/wiki/",Xt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Dt={currentGameData:{equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1}},settings:{muted:!1,hardMode:{equipment:!1,weapons:!1,endless_equipment:!1,endless_weapons:!1},mode:"equipment"},playerStats:{equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},hard_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},hard_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},endless_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0},endless_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0}}},cp={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function Ji(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function Ft(n){n.target.closest("button").blur()}function yn(n){return Object.keys(n).length!==0}function qt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function qr(){Ji("?ls=true"),setTimeout(Ji)}let Do=localStorage.getItem("fd-currentGameData"),Ao=localStorage.getItem("fd-settings"),Po=localStorage.getItem("fd-playerStats"),Oo=localStorage.getItem("fd-changelogSeen"),Mo=localStorage.getItem("fd-helpSeen"),Lo=localStorage.getItem("fd-supportMe"),Mt=kt(Do?JSON.parse(Do):Dt.currentGameData),Ct=kt(),yt=kt(Ao?{...JSON.parse(Ao),mode:"equipment"}:Dt.settings),un=kt(),Nn=kt(Po?JSON.parse(Po):Dt.playerStats),ni=kt({}),Fo=kt({}),dt=kt({component:null,complete:!1}),si=kt(7),hn=kt(!1),ps=kt(Oo?JSON.parse(Oo):!1),Xi=kt(Mo?JSON.parse(Mo):!1),sn=kt(Lo?JSON.parse(Lo):{showAgain:!0,timesDenied:0,lastGamesPlayed:0}),qo=[Mt,yt,Nn];for(let n=0;n<qo.length;n++){let e=er(qo[n]),t=Dt[Object.keys(Dt)[n]];for(let s of Object.keys(t))e[s]===void 0&&(e[s]=t[s]);for(let s of Object.keys(e))t[s]===void 0&&delete e[s]}yt.subscribe(n=>{qr(),Ct.set(er(Mt)[n.mode]),un.set(n.hardMode[n.mode]),localStorage.setItem("fd-settings",JSON.stringify(n))});Mt.subscribe(n=>{qr(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});Ct.subscribe(n=>{Mt.update(e=>({...e,[er(yt).mode]:n}))});Nn.subscribe(n=>{qr(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});un.subscribe(n=>{yt.update(e=>({...e,hardMode:{...e.hardMode,[e.mode]:n}})),si.set(n?6:7)});ps.subscribe(n=>localStorage.setItem("fd-changelogSeen",JSON.stringify(n)));Xi.subscribe(n=>localStorage.setItem("fd-helpSeen",JSON.stringify(n)));sn.subscribe(n=>localStorage.setItem("fd-supportMe",JSON.stringify(n)));function up(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:f=m=>Math.sqrt(m)*120,easing:d=Kl}=s;return{delay:u,duration:fn(f)?f(Math.sqrt(a*a+c*c)):f,easing:d,css:(m,g)=>{const v=g*a,w=g*c,N=m+g*e.width/t.width,T=m+g*e.height/t.height;return`transform: ${r} translate(${v}px, ${w}px) scale(${N}, ${T});`}}}function Wo(n,e,t){const s=n.slice();s[12]=e[t];const i=s[5][s[0].mode].find(function(...R){return n[11](s[12],...R)});s[13]=i;const r=s[2]?null:s[13].special==s[1].special;s[14]=r;const o=s[2]?null:Ri(s[1].types,s[13].types);s[15]=o;const l=s[2]?null:s[15]==s[1].types.length&&s[13].types.length==s[1].types.length;s[16]=l;const a=s[2]?s[13].slot==s[1].slot:null;s[17]=a;const c=s[2]?Ri(s[1].stats,s[13].stats):null;s[18]=c;const u=s[2]?s[18]==s[1].stats.length&&s[13].stats.length==s[1].stats.length:null;s[19]=u;const f=Math.ceil((s[13].cost.min+s[13].cost.max)/2);s[20]=f;const d=Math.ceil((s[1].cost.min+s[1].cost.max)/2);s[21]=d;const m=s[20]==s[21];s[22]=m;const g=Ri(s[1].colors,s[13].colors);s[23]=g;const v=s[23]==s[1].colors.length&&s[13].colors.length==s[1].colors.length;s[24]=v;const w=s[13].outline==s[1].outline;s[25]=w;const N=s[13].release==s[1].release;return s[26]=N,s}function jo(n,e,t){const s=n.slice();return s[29]=e[t],s}function xo(n,e,t){const s=n.slice();return s[35]=e[t],s}function Bo(n,e,t){const s=n.slice();return s[32]=e[t],s}function Go(n){let e=[],t=new Map,s,i,r=be(n[4].chosenItems.toReversed());const o=l=>l[12];for(let l=0;l<r.length;l+=1){let a=Wo(n,r,l),c=o(a);t.set(c,e[l]=Qo(c,a))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=bt()},m(l,a){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(l,a);k(l,s,a),i=!0},p(l,a){if(a[0]&255){r=be(l[4].chosenItems.toReversed()),Et();for(let c=0;c<e.length;c+=1)e[c].r();e=ou(e,a,o,1,l,r,t,s.parentNode,ru,Qo,s,Wo);for(let c=0;c<e.length;c+=1)e[c].a();It()}},i(l){if(!i){for(let a=0;a<r.length;a+=1)$(e[a]);i=!0}},o(l){for(let a=0;a<e.length;a+=1)re(e[a]);i=!1},d(l){l&&I(s);for(let a=0;a<e.length;a+=1)e[a].d(l)}}}function hp(n){let e,t;function s(l,a){return l[13].types.length?_p:dp}let i=s(n),r=i(n),o=!n[6]&&n[15]&&!n[16]&&Uo(n);return{c(){r.c(),e=b(),o&&o.c(),t=bt()},m(l,a){r.m(l,a),k(l,e,a),o&&o.m(l,a),k(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[6]&&l[15]&&!l[16]?o?o.p(l,a):(o=Uo(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(I(e),I(t)),r.d(l),o&&o.d(l)}}}function fp(n){let e,t;function s(l,a){return l[13].stats.length?mp:pp}let i=s(n),r=i(n),o=!n[6]&&n[18]&&!n[19]&&Vo(n);return{c(){r.c(),e=b(),o&&o.c(),t=bt()},m(l,a){r.m(l,a),k(l,e,a),o&&o.m(l,a),k(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[6]&&l[18]&&!l[19]?o?o.p(l,a):(o=Vo(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(I(e),I(t)),r.d(l),o&&o.d(l)}}}function dp(n){let e;return{c(){e=H("None")},m(t,s){k(t,e,s)},p:oe,d(t){t&&I(e)}}}function _p(n){let e,t=be(n[13].types),s=[];for(let i=0;i<t.length;i+=1)s[i]=Ho(xo(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);k(i,e,r)},p(i,r){if(r[0]&49){t=be(i[13].types);let o;for(o=0;o<t.length;o+=1){const l=xo(i,t,o);s[o]?s[o].p(l,r):(s[o]=Ho(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&I(e),lt(s,i)}}}function Ho(n){let e=ti[n[35]]+(n[35]==n[13].types[n[13].types.length-1]?"":", "),t;return{c(){t=H(e)},m(s,i){k(s,t,i)},p(s,i){i[0]&49&&e!==(e=ti[s[35]]+(s[35]==s[13].types[s[13].types.length-1]?"":", "))&&de(t,e)},d(s){s&&I(t)}}}function Uo(n){let e,t=n[15]+"",s;return{c(){e=p("span"),s=H(t),_(e,"class","bgInfo")},m(i,r){k(i,e,r),h(e,s)},p(i,r){r[0]&55&&t!==(t=i[15]+"")&&de(s,t)},d(i){i&&I(e)}}}function pp(n){let e;return{c(){e=H("None")},m(t,s){k(t,e,s)},p:oe,d(t){t&&I(e)}}}function mp(n){let e,t=be(n[13].stats),s=[];for(let i=0;i<t.length;i+=1)s[i]=zo(Bo(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);k(i,e,r)},p(i,r){if(r[0]&49){t=be(i[13].stats);let o;for(o=0;o<t.length;o+=1){const l=Bo(i,t,o);s[o]?s[o].p(l,r):(s[o]=zo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&I(e),lt(s,i)}}}function zo(n){let e=ei[n[32]]+(n[32]==n[13].stats[n[13].stats.length-1]?"":", "),t;return{c(){t=H(e)},m(s,i){k(s,t,i)},p(s,i){i[0]&49&&e!==(e=ei[s[32]]+(s[32]==s[13].stats[s[13].stats.length-1]?"":", "))&&de(t,e)},d(s){s&&I(t)}}}function Vo(n){let e,t=n[18]+"",s;return{c(){e=p("span"),s=H(t),_(e,"class","bgInfo")},m(i,r){k(i,e,r),h(e,s)},p(i,r){r[0]&55&&t!==(t=i[18]+"")&&de(s,t)},d(i){i&&I(e)}}}function gp(n){let e=n[20].toLocaleString()+"",t,s,i,r;return{c(){t=H(e),s=b(),i=p("br"),r=H(`\r
                        Gold`)},m(o,l){k(o,t,l),k(o,s,l),k(o,i,l),k(o,r,l)},p(o,l){l[0]&49&&e!==(e=o[20].toLocaleString()+"")&&de(t,e)},d(o){o&&(I(t),I(s),I(i),I(r))}}}function vp(n){let e;return{c(){e=H("Unpurchasable")},m(t,s){k(t,e,s)},p:oe,d(t){t&&I(e)}}}function Yo(n){let e,t;return{c(){e=p("iconify-icon"),Ye(e,"class","bgInfo"),Ye(e,"icon","mingcute:arrow-up-fill"),Ye(e,"flip",t=n[20]>n[21]?"vertical":"")},m(s,i){k(s,e,i)},p(s,i){i[0]&51&&t!==(t=s[20]>s[21]?"vertical":"")&&Ye(e,"flip",t)},d(s){s&&I(e)}}}function $o(n){let e=(n[29]==n[13].colors[0]?qt(n[29]):n[29])+(n[29]==n[13].colors[n[13].colors.length-1]?"":", "),t;return{c(){t=H(e)},m(s,i){k(s,t,i)},p(s,i){i[0]&49&&e!==(e=(s[29]==s[13].colors[0]?qt(s[29]):s[29])+(s[29]==s[13].colors[s[13].colors.length-1]?"":", "))&&de(t,e)},d(s){s&&I(t)}}}function Ko(n){let e,t=n[23]+"",s;return{c(){e=p("span"),s=H(t),_(e,"class","bgInfo")},m(i,r){k(i,e,r),h(e,s)},p(i,r){r[0]&51&&t!==(t=i[23]+"")&&de(s,t)},d(i){i&&I(e)}}}function Qo(n,e){let t,s,i,r,o,l,a,c,u,f,d,m=e[13].name+"",g,v,w,N,T,R=(e[2]?qt(e[13].slot):e[13].special?"Yes":"No")+"",D,A,O,C,S,B,K,ee,V,J,ce,U,ue,j,he,le,Y,te,x,E=qt(e[13].outline)+"",P,G,F,ae,Ie,Qe=Zs[e[13].release]+"",qe,Pe,Ge,ke,$e,ct,Se=oe,ne,Je,pt;function we(Q,ve){return Q[2]?fp:hp}let fe=we(e),We=fe(e);function Xe(Q,ve){return Q[13].cost.min==null?vp:gp}let Ee=Xe(e),X=Ee(e),ie=!e[6]&&!e[22]&&e[20]&&Yo(e),q=be(e[13].colors),se=[];for(let Q=0;Q<q.length;Q+=1)se[Q]=$o(jo(e,q,Q));let Te=!e[6]&&e[23]&&!e[24]&&Ko(e);return{key:n,first:null,c(){t=p("div"),s=p("div"),i=p("a"),r=p("img"),a=b(),c=p("iconify-icon"),f=b(),d=p("span"),g=H(m),N=b(),T=p("span"),D=H(R),C=b(),S=p("span"),We.c(),ee=b(),V=p("span"),X.c(),J=b(),ie&&ie.c(),ue=b(),j=p("span");for(let Q=0;Q<se.length;Q+=1)se[Q].c();he=b(),Te&&Te.c(),te=b(),x=p("span"),P=H(E),ae=b(),Ie=p("span"),qe=H(Qe),Pe=H(" Update"),$e=b(),nt(r.src,o=Xt+e[13].image)||_(r,"src",o),_(r,"alt",l=e[13].name),_(r,"class","svelte-1iqikjy"),Ye(c,"icon","tabler:link"),Ye(c,"class","svelte-1iqikjy"),_(i,"class","flex fjc-center fai-center svelte-1iqikjy"),_(i,"href",u=Mn+e[13].link),_(i,"target","_blank"),_(d,"class","tooltip"),_(d,"id","right"),_(s,"id","itemImage"),_(s,"class","ff-item svelte-1iqikjy"),_(T,"class","ff-bg ff-item svelte-1iqikjy"),_(T,"id",A=(e[2]?e[17]:e[14])?"correct":"wrong"),_(S,"class","ff-bg ff-item svelte-1iqikjy"),_(S,"id",B=(e[2]?e[19]:e[16])?"correct":(e[2]?e[18]:e[15])?"partial":"wrong"),Ue(S,"smallerStats",e[2]&&e[13].stats.length>=7),_(V,"class","ff-bg ff-item svelte-1iqikjy"),_(V,"id",ce=e[22]?"correct":"wrong"),_(j,"class","ff-bg ff-item svelte-1iqikjy"),_(j,"id",le=e[24]?"correct":e[23]?"partial":"wrong"),_(x,"class","ff-bg ff-item svelte-1iqikjy"),_(x,"id",G=e[25]?"correct":"wrong"),_(Ie,"class","ff-bg ff-item svelte-1iqikjy"),_(Ie,"id",Ge=e[26]?"correct":"wrong"),_(t,"class","itemRow svelte-1iqikjy"),this.first=t},m(Q,ve){k(Q,t,ve),h(t,s),h(s,i),h(i,r),h(i,a),h(i,c),h(s,f),h(s,d),h(d,g),h(t,N),h(t,T),h(T,D),h(t,C),h(t,S),We.m(S,null),h(t,ee),h(t,V),X.m(V,null),h(V,J),ie&&ie.m(V,null),h(t,ue),h(t,j);for(let Ne=0;Ne<se.length;Ne+=1)se[Ne]&&se[Ne].m(j,null);h(j,he),Te&&Te.m(j,null),h(t,te),h(t,x),h(x,P),h(t,ae),h(t,Ie),h(Ie,qe),h(Ie,Pe),h(t,$e),ne=!0,Je||(pt=[Wl(v=e[8].call(null,s,[e[14],e[15],e[16],e[17],e[18],e[19],e[22],e[23],e[24],e[25],e[26]])),Re(Ie,"introend",e[10])],Je=!0)},p(Q,ve){if(e=Q,(!ne||ve[0]&49&&!nt(r.src,o=Xt+e[13].image))&&_(r,"src",o),(!ne||ve[0]&49&&l!==(l=e[13].name))&&_(r,"alt",l),(!ne||ve[0]&49&&u!==(u=Mn+e[13].link))&&_(i,"href",u),(!ne||ve[0]&49)&&m!==(m=e[13].name+"")&&de(g,m),v&&fn(v.update)&&ve[0]&55&&v.update.call(null,[e[14],e[15],e[16],e[17],e[18],e[19],e[22],e[23],e[24],e[25],e[26]]),(!ne||ve[0]&53)&&R!==(R=(e[2]?qt(e[13].slot):e[13].special?"Yes":"No")+"")&&de(D,R),(!ne||ve[0]&55&&A!==(A=(e[2]?e[17]:e[14])?"correct":"wrong"))&&_(T,"id",A),fe===(fe=we(e))&&We?We.p(e,ve):(We.d(1),We=fe(e),We&&(We.c(),We.m(S,null))),(!ne||ve[0]&55&&B!==(B=(e[2]?e[19]:e[16])?"correct":(e[2]?e[18]:e[15])?"partial":"wrong"))&&_(S,"id",B),(!ne||ve[0]&53)&&Ue(S,"smallerStats",e[2]&&e[13].stats.length>=7),Ee===(Ee=Xe(e))&&X?X.p(e,ve):(X.d(1),X=Ee(e),X&&(X.c(),X.m(V,J))),!e[6]&&!e[22]&&e[20]?ie?ie.p(e,ve):(ie=Yo(e),ie.c(),ie.m(V,null)):ie&&(ie.d(1),ie=null),(!ne||ve[0]&51&&ce!==(ce=e[22]?"correct":"wrong"))&&_(V,"id",ce),ve[0]&49){q=be(e[13].colors);let Ne;for(Ne=0;Ne<q.length;Ne+=1){const je=jo(e,q,Ne);se[Ne]?se[Ne].p(je,ve):(se[Ne]=$o(je),se[Ne].c(),se[Ne].m(j,he))}for(;Ne<se.length;Ne+=1)se[Ne].d(1);se.length=q.length}!e[6]&&e[23]&&!e[24]?Te?Te.p(e,ve):(Te=Ko(e),Te.c(),Te.m(j,null)):Te&&(Te.d(1),Te=null),(!ne||ve[0]&51&&le!==(le=e[24]?"correct":e[23]?"partial":"wrong"))&&_(j,"id",le),(!ne||ve[0]&49)&&E!==(E=qt(e[13].outline)+"")&&de(P,E),(!ne||ve[0]&51&&G!==(G=e[25]?"correct":"wrong"))&&_(x,"id",G),(!ne||ve[0]&49)&&Qe!==(Qe=Zs[e[13].release]+"")&&de(qe,Qe),(!ne||ve[0]&51&&Ge!==(Ge=e[26]?"correct":"wrong"))&&_(Ie,"id",Ge)},r(){ct=t.getBoundingClientRect()},f(){Qc(t),Se()},a(){Se(),Se=Kc(t,ct,up,{duration:125})},i(Q){ne||(Q&&Ze(()=>{ne&&(w||(w=Oe(s,it,{duration:e[3]?0:300},!0)),w.run(1))}),Q&&Ze(()=>{ne&&(O||(O=Oe(T,it,{duration:e[3]?0:300,delay:e[3]?0:250},!0)),O.run(1))}),Q&&Ze(()=>{ne&&(K||(K=Oe(S,it,{duration:e[3]?0:300,delay:e[3]?0:550},!0)),K.run(1))}),Q&&Ze(()=>{ne&&(U||(U=Oe(V,it,{duration:e[3]?0:300,delay:e[3]?0:850},!0)),U.run(1))}),Q&&Ze(()=>{ne&&(Y||(Y=Oe(j,it,{duration:e[3]?0:300,delay:e[3]?0:1150},!0)),Y.run(1))}),Q&&Ze(()=>{ne&&(F||(F=Oe(x,it,{duration:e[3]?0:300,delay:e[3]?0:1450},!0)),F.run(1))}),Q&&Ze(()=>{ne&&(ke||(ke=Oe(Ie,it,{duration:e[3]?0:300,delay:e[3]?0:1750},!0)),ke.run(1))}),ne=!0)},o(Q){Q&&(w||(w=Oe(s,it,{duration:e[3]?0:300},!1)),w.run(0)),Q&&(O||(O=Oe(T,it,{duration:e[3]?0:300,delay:e[3]?0:250},!1)),O.run(0)),Q&&(K||(K=Oe(S,it,{duration:e[3]?0:300,delay:e[3]?0:550},!1)),K.run(0)),Q&&(U||(U=Oe(V,it,{duration:e[3]?0:300,delay:e[3]?0:850},!1)),U.run(0)),Q&&(Y||(Y=Oe(j,it,{duration:e[3]?0:300,delay:e[3]?0:1150},!1)),Y.run(0)),Q&&(F||(F=Oe(x,it,{duration:e[3]?0:300,delay:e[3]?0:1450},!1)),F.run(0)),Q&&(ke||(ke=Oe(Ie,it,{duration:e[3]?0:300,delay:e[3]?0:1750},!1)),ke.run(0)),ne=!1},d(Q){Q&&I(t),Q&&w&&w.end(),Q&&O&&O.end(),We.d(),Q&&K&&K.end(),X.d(),ie&&ie.d(),Q&&U&&U.end(),lt(se,Q),Te&&Te.d(),Q&&Y&&Y.end(),Q&&F&&F.end(),Q&&ke&&ke.end(),Je=!1,at(pt)}}}function bp(n){let e,t,s,i,r,o=n[2]?"Slot":"Has Special",l,a,c,u=n[2]?"Stats":"Stat Intakes",f,d,m,g,v,w,N,T,R,D,A,O=!n[3]&&Go(n);return{c(){e=p("div"),t=p("div"),s=p("span"),s.textContent="Item",i=b(),r=p("span"),l=H(o),a=b(),c=p("span"),f=H(u),d=b(),m=p("span"),m.textContent="Avg. Cost",g=b(),v=p("span"),v.textContent="Colors",w=b(),N=p("span"),N.textContent="Outline",T=b(),R=p("span"),R.textContent="Release",D=b(),O&&O.c(),_(s,"class","ff-item svelte-1iqikjy"),_(r,"class","ff-item svelte-1iqikjy"),Ue(r,"smaller-fs",!n[2]),_(c,"class","ff-item svelte-1iqikjy"),Ue(c,"smaller-fs",!n[2]),_(m,"class","ff-item svelte-1iqikjy"),_(v,"class","ff-item svelte-1iqikjy"),_(N,"class","ff-item svelte-1iqikjy"),_(R,"class","ff-item svelte-1iqikjy"),_(t,"id","categories"),_(t,"class","svelte-1iqikjy"),_(e,"class","gameboard ff-bg fd-col flex posrel border-tp bs svelte-1iqikjy")},m(C,S){k(C,e,S),h(e,t),h(t,s),h(t,i),h(t,r),h(r,l),h(t,a),h(t,c),h(c,f),h(t,d),h(t,m),h(t,g),h(t,v),h(t,w),h(t,N),h(t,T),h(t,R),h(e,D),O&&O.m(e,null),A=!0},p(C,S){(!A||S[0]&4)&&o!==(o=C[2]?"Slot":"Has Special")&&de(l,o),(!A||S[0]&4)&&Ue(r,"smaller-fs",!C[2]),(!A||S[0]&4)&&u!==(u=C[2]?"Stats":"Stat Intakes")&&de(f,u),(!A||S[0]&4)&&Ue(c,"smaller-fs",!C[2]),C[3]?O&&(Et(),re(O,1,1,()=>{O=null}),It()):O?(O.p(C,S),S[0]&8&&$(O,1)):(O=Go(C),O.c(),$(O,1),O.m(e,null))},i(C){A||($(O),A=!0)},o(C){re(O),A=!1},d(C){C&&I(e),O&&O.d()}}}function Ri(n,e){return n===void 0||e===void 0?void 0:n.filter(s=>e.includes(s)).length}function yp(n,e,t){let s,i,r,o,l;pe(n,yt,v=>t(0,s=v)),pe(n,Ct,v=>t(4,i=v)),pe(n,ni,v=>t(5,r=v)),pe(n,un,v=>t(6,o=v)),pe(n,hn,v=>t(7,l=v));let{dailyItemsData:a}=e,c,u,f=!1;function d(v,[w,N,T,R,D,A,O,C,S,B,K]){i.chosenItems.length==i.rowInfo.length+1&&Ct.update(ee=>({...ee,rowInfo:[...ee.rowInfo,[u?R:w,(u?A:T)?1:(u?D:N)?0:-1,O,S?1:C?0:-1,B,K]]}))}const m=()=>_e(hn,l=!1,l),g=(v,w)=>w.name==v.name;return n.$$set=v=>{"dailyItemsData"in v&&t(9,a=v.dailyItemsData)},n.$$.update=()=>{n.$$.dirty[0]&1&&s.mode&&(t(3,f=!0),setTimeout(()=>t(3,f=!1),10)),n.$$.dirty[0]&513&&t(1,c=a[s.mode]),n.$$.dirty[0]&1&&(s.mode.includes("equipment")?t(2,u=!0):s.mode.includes("weapons")&&t(2,u=!1))},[s,c,u,f,i,r,o,l,d,a,m,g]}class wp extends ft{constructor(e){super(),ht(this,e,yp,bp,st,{dailyItemsData:9},null,[-1,-1])}}function Cp(n){let e,t,s,i;return{c(){e=p("div"),t=p("input"),_(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],_(t,"type","checkbox"),t.checked=n[1],_(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),Ue(e,"unavailable",n[2]),Rn(e,"--s",`${n[0]}rem`)},m(r,o){k(r,e,o),h(e,t),s||(i=[Re(t,"change",n[5]),Re(t,"keydown",n[6])],s=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&Ue(e,"unavailable",r[2]),o&1&&Rn(e,"--s",`${r[0]}rem`)},i:oe,o:oe,d(r){r&&I(e),s=!1,at(i)}}}function Ep(n,e,t){let{size:s,checked:i=!1,disabled:r=!1,forced:o=!1}=e;const l=zl(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,s=u.size),"checked"in u&&t(1,i=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[s,i,r,o,l,a,c]}class As extends ft{constructor(e){super(),ht(this,e,Ep,Cp,st,{size:0,checked:1,disabled:2,forced:3})}}function Jo(n,e,t){const s=n.slice();s[21]=e[t];const i=s[1]?!1:s[9].chosenItems.find(function(...o){return n[19](s[21],...o)})!=null;return s[22]=i,s}function Xo(n){let e,t,s,i=be(n[1]?n[5].length?n[5]:n[8][n[3]]:n[5]),r=[];for(let o=0;o<i.length;o+=1)r[o]=Zo(Jo(n,i,o));return{c(){e=p("div");for(let o=0;o<r.length;o+=1)r[o].c();_(e,"class","itemList ff-bg flex fd-col svelte-1up5u20"),Ue(e,"noGuess",n[1])},m(o,l){k(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[20](e),s=!0},p(o,l){if(l&2858){i=be(o[1]?o[5].length?o[5]:o[8][o[3]]:o[5]);let a;for(a=0;a<i.length;a+=1){const c=Jo(o,i,a);r[a]?r[a].p(c,l):(r[a]=Zo(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}(!s||l&2)&&Ue(e,"noGuess",o[1])},i(o){s||(o&&Ze(()=>{s&&(t||(t=Oe(e,xt,{duration:75},!0)),t.run(1))}),s=!0)},o(o){o&&(t||(t=Oe(e,xt,{duration:75},!1)),t.run(0)),s=!1},d(o){o&&I(e),lt(r,o),n[20](null),o&&t&&t.end()}}}function Zo(n){let e,t,s,i,r,o=n[21].name+"",l,a,c,u,f;function d(){return n[18](n[22],n[21])}return{c(){e=p("button"),t=p("img"),i=b(),r=p("span"),l=H(o),a=b(),nt(t.src,s=Xt+n[21].image)||_(t,"src",s),_(t,"alt",""),_(t,"class","svelte-1up5u20"),e.disabled=c=n[22],_(e,"class","listItem flex fai-center no-bg-change svelte-1up5u20"),Ue(e,"unavailable",n[22])},m(m,g){k(m,e,g),h(e,t),h(e,i),h(e,r),h(r,l),h(e,a),u||(f=Re(e,"click",d),u=!0)},p(m,g){n=m,g&298&&!nt(t.src,s=Xt+n[21].image)&&_(t,"src",s),g&298&&o!==(o=n[21].name+"")&&de(l,o),g&810&&c!==(c=n[22])&&(e.disabled=c),g&810&&Ue(e,"unavailable",n[22])},d(m){m&&I(e),u=!1,f()}}}function Ip(n){let e,t,s,i,r,o,l=n[8]&&(n[1]?!0:n[5].length)&&n[6]&&Xo(n);return{c(){e=p("input"),s=b(),l&&l.c(),i=bt(),e.disabled=n[7],_(e,"type","text"),_(e,"class","searcherInput border-tp br-1 svelte-1up5u20"),_(e,"placeholder",t=n[1]?"Item to be guessed...":`Guess the item for game #${n[0]+1} (${n[3]})...`)},m(a,c){k(a,e,c),n[16](e),k(a,s,c),l&&l.m(a,c),k(a,i,c),r||(o=[Re(window,"mousedown",n[15]),Re(e,"input",n[10]),Re(e,"focusin",n[17])],r=!0)},p(a,[c]){c&128&&(e.disabled=a[7]),c&11&&t!==(t=a[1]?"Item to be guessed...":`Guess the item for game #${a[0]+1} (${a[3]})...`)&&_(e,"placeholder",t),a[8]&&(a[1]||a[5].length)&&a[6]?l?(l.p(a,c),c&354&&$(l,1)):(l=Xo(a),l.c(),$(l,1),l.m(i.parentNode,i)):l&&(Et(),re(l,1,1,()=>{l=null}),It())},i(a){$(l)},o(a){re(l)},d(a){a&&(I(e),I(s),I(i)),n[16](null),l&&l.d(a),r=!1,at(o)}}}function Sp(n,e,t){let s,i,r,o,l;pe(n,yt,S=>t(14,i=S)),pe(n,hn,S=>t(7,r=S)),pe(n,ni,S=>t(8,o=S)),pe(n,Ct,S=>t(9,l=S));let{gameNumber:a=0,noGuess:c=!1,noGuessMode:u=null,noGuessItem:f=""}=e,d,m,g=[],v=!1;function w(){let S=d.value.toLowerCase();if(t(5,g=[]),!!S)for(let B of o[s])B.name.toLowerCase().includes(S)&&g.push(B)}function N(S){r||(c?(t(12,f=S.name),t(6,v=!1)):(_e(hn,r=!0,r),Ct.update(B=>({...B,chosenItems:[...B.chosenItems,{name:S.name}]}))),t(2,d.value="",d),w())}const T=S=>{m&&S.target!=d&&!m.contains(S.target)&&t(6,v=!1)};function R(S){Ve[S?"unshift":"push"](()=>{d=S,t(2,d)})}const D=()=>t(6,v=!0),A=(S,B)=>{S||N(B)},O=(S,B)=>B.name==S.name;function C(S){Ve[S?"unshift":"push"](()=>{m=S,t(4,m)})}return n.$$set=S=>{"gameNumber"in S&&t(0,a=S.gameNumber),"noGuess"in S&&t(1,c=S.noGuess),"noGuessMode"in S&&t(13,u=S.noGuessMode),"noGuessItem"in S&&t(12,f=S.noGuessItem)},n.$$.update=()=>{n.$$.dirty&24576&&t(3,s=u||i.mode),n.$$.dirty&12&&s&&d&&w()},[a,c,d,s,m,g,v,r,o,l,w,N,f,u,i,T,R,D,A,O,C]}class Oc extends ft{constructor(e){super(),ht(this,e,Sp,Ip,st,{gameNumber:0,noGuess:1,noGuessMode:13,noGuessItem:12})}}function el(n){let e,t,s;return{c(){e=p("span"),_(e,"id","HPFlash"),_(e,"class","svelte-nha9gw")},m(i,r){k(i,e,r),s=!0},i(i){s||(t&&t.end(1),s=!0)},o(i){i&&(t=su(e,xt,{duration:200})),s=!1},d(i){i&&I(e),i&&t&&t.end()}}}function kp(n){let e,t,s,i,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,f,d,m,g,v,w=n[4]?"You've lost your remaining armor.":"Your armor is protecting you.",N,T,R,D,A,O,C,S,B,K,ee,V=n[1]&&el();function J(U){n[6](U)}let ce={};return n[0]!==void 0&&(ce.gameNumber=n[0]),B=new Oc({props:ce}),Ve.push(()=>Nt(B,"gameNumber",J)),{c(){e=p("div"),t=p("div"),s=p("div"),i=p("div"),r=p("div"),o=p("span"),a=H(l),c=H("/600"),u=b(),f=p("button"),d=p("img"),g=b(),v=p("span"),N=H(w),T=b(),R=p("br"),D=H(`\r
                You can take `),A=H(n[2]),O=H(" hits at most!"),C=b(),V&&V.c(),S=b(),He(B.$$.fragment),_(o,"class","svelte-nha9gw"),_(r,"class","HPBackground svelte-nha9gw"),Rn(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),_(i,"class","innerGameHP flex posrel svelte-nha9gw"),_(s,"class","outerGameHP posrel svelte-nha9gw"),nt(d.src,m="misc/armor.svg")||_(d,"src",m),_(d,"alt","Armor"),_(d,"class","svelte-nha9gw"),Ue(d,"noArmor",n[4]),_(v,"class","tooltip svelte-nha9gw"),_(v,"id","right"),_(f,"class","ff-item posrel br-1 svelte-nha9gw"),_(f,"id","armorIcon"),_(t,"class","gameHPCont flex cg-1 svelte-nha9gw"),_(e,"class","currentGameInfo ff-bg flex fd-row fw fjc-center fai-center posrel border-tp br-1 bs svelte-nha9gw")},m(U,ue){k(U,e,ue),h(e,t),h(t,s),h(s,i),h(i,r),h(r,o),h(o,a),h(o,c),h(t,u),h(t,f),h(f,d),h(f,g),h(f,v),h(v,N),h(v,T),h(v,R),h(v,D),h(v,A),h(v,O),h(e,C),V&&V.m(e,null),h(e,S),xe(B,e,null),ee=!0},p(U,[ue]){(!ee||ue&12)&&l!==(l=Math.round(600-U[3].chosenItems.length*(600/U[2]))+"")&&de(a,l),ue&12&&Rn(r,"width",`${Math.floor(100*(U[2]-U[3].chosenItems.length)/U[2])}%`),(!ee||ue&16)&&Ue(d,"noArmor",U[4]),(!ee||ue&16)&&w!==(w=U[4]?"You've lost your remaining armor.":"Your armor is protecting you.")&&de(N,w),(!ee||ue&4)&&de(A,U[2]),U[1]?V?ue&2&&$(V,1):(V=el(),V.c(),$(V,1),V.m(e,S)):V&&(Et(),re(V,1,1,()=>{V=null}),It());const j={};!K&&ue&1&&(K=!0,j.gameNumber=U[0],Tt(()=>K=!1)),B.$set(j)},i(U){ee||($(V),$(B.$$.fragment,U),ee=!0)},o(U){re(V),re(B.$$.fragment,U),ee=!1},d(U){U&&I(e),V&&V.d(),Be(B)}}}function Tp(n,e,t){let s,i,r,o;pe(n,hn,u=>t(5,s=u)),pe(n,si,u=>t(2,i=u)),pe(n,Ct,u=>t(3,r=u)),pe(n,un,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&s&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,i,r,o,s,c]}class Np extends ft{constructor(e){super(),ht(this,e,Tp,kp,st,{gameNumber:0})}}function tl(n,e,t){const s=n.slice();return s[9]=e[t],s}function nl(n,e,t){const s=n.slice();return s[12]=e[t],s}function sl(n){let e,t=(n[12]===!0||n[12]===1?n[4].html.blue:n[12]===0?n[4].html.yellow:n[12]===!1||n[12]===-1?n[4].html.red:null)+"",s;return{c(){e=new Hl(!1),s=bt(),e.a=s},m(i,r){e.m(t,i,r),k(i,s,r)},p(i,r){r&1&&t!==(t=(i[12]===!0||i[12]===1?i[4].html.blue:i[12]===0?i[4].html.yellow:i[12]===!1||i[12]===-1?i[4].html.red:null)+"")&&e.p(t)},d(i){i&&(I(s),e.d())}}}function il(n){let e,t,s=be(n[9]),i=[];for(let r=0;r<s.length;r+=1)i[r]=sl(nl(n,s,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=b(),t=p("br")},m(r,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(r,o);k(r,e,o),k(r,t,o)},p(r,o){if(o&17){s=be(r[9]);let l;for(l=0;l<s.length;l+=1){const a=nl(r,s,l);i[l]?i[l].p(a,o):(i[l]=sl(a),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},d(r){r&&(I(e),I(t)),lt(i,r)}}}function Rp(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v=n[2]?"Copied!":"Copy",w,N,T,R=be(n[0].rowInfo.toReversed()),D=[];for(let A=0;A<R.length;A+=1)D[A]=il(tl(n,R,A));return{c(){e=p("div"),t=p("span"),t.textContent="Game Stats",s=b(),i=p("span"),r=H(n[3]),o=b(),l=p("br"),a=b();for(let A=0;A<D.length;A+=1)D[A].c();c=b(),u=p("button"),f=H(`Share Stats\r
        `),d=p("iconify-icon"),m=b(),g=p("span"),w=H(v),_(i,"class","smaller-fs"),Ye(d,"icon","ri:share-fill"),_(g,"class","tooltip"),_(g,"id","top"),_(u,"class","flex fai-center cg-1 posrel border-tp br-1 smaller-fs svelte-q44wd4"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs")},m(A,O){k(A,e,O),h(e,t),h(e,s),h(e,i),h(i,r),h(i,o),h(i,l),h(i,a);for(let C=0;C<D.length;C+=1)D[C]&&D[C].m(i,null);h(e,c),h(e,u),h(u,f),h(u,d),h(u,m),h(u,g),h(g,w),N||(T=Re(u,"click",n[8]),N=!0)},p(A,[O]){if(O&8&&de(r,A[3]),O&17){R=be(A[0].rowInfo.toReversed());let C;for(C=0;C<R.length;C+=1){const S=tl(A,R,C);D[C]?D[C].p(S,O):(D[C]=il(S),D[C].c(),D[C].m(i,null))}for(;C<D.length;C+=1)D[C].d(1);D.length=R.length}O&4&&v!==(v=A[2]?"Copied!":"Copy")&&de(w,v)},i:oe,o:oe,d(A){A&&I(e),lt(D,A),N=!1,T()}}}function Dp(n,e,t){let s,i,r,o;pe(n,Ct,d=>t(0,i=d)),pe(n,yt,d=>t(6,r=d)),pe(n,un,d=>t(7,o=d));let{gameNumber:l}=e,a={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},c="",u=!1;const f=d=>{Ft(d),navigator.clipboard.writeText(`${s}
${c}
${location.origin+location.pathname}`),t(2,u=!0),setTimeout(()=>t(2,u=!1),1e3)};return n.$$set=d=>{"gameNumber"in d&&t(5,l=d.gameNumber)},n.$$.update=()=>{n.$$.dirty&224&&t(3,s=`${o?"(Nightmare)":""} Frontierdle - ${qt(r.mode)} #${l+1}`),n.$$.dirty&67&&r.mode&&setTimeout(()=>{t(1,c="");for(let d of i.rowInfo.toReversed()){let m="";for(let g of d)m+=g===!0||g===1?a.js.blue:g===0?a.js.yellow:g===!1||g===-1?a.js.red:null;t(1,c+=m+`
`)}})},[i,c,u,s,a,l,r,o,f]}class Ap extends ft{constructor(e){super(),ht(this,e,Dp,Rp,st,{gameNumber:5})}}function rl(n,e,t){const s=n.slice();s[8]=e[t];const i=s[1]?s[2]:s[4][s[8]+s[3]];s[9]=i;const r=s[8].includes("hard");s[10]=r;const o=Math.max(...Object.values(s[9].winInfo));return s[11]=o,s}function ol(n,e,t){const s=n.slice();return s[14]=e[t][0],s[15]=e[t][1],s}function ll(n){let e,t,s=n[9].streak+"",i,r,o;return{c(){e=p("div"),t=p("span"),i=H(s),r=b(),o=p("span"),o.textContent="Current Streak",_(o,"id","statsTitle"),_(o,"class","svelte-1dnm67b"),_(e,"class","svelte-1dnm67b")},m(l,a){k(l,e,a),h(e,t),h(t,i),h(e,r),h(e,o)},p(l,a){a&94&&s!==(s=l[9].streak+"")&&de(i,s)},d(l){l&&I(e)}}}function al(n){let e,t,s=n[14]+"",i,r,o,l,a,c=n[15]+"",u,f;return{c(){e=p("div"),t=p("span"),i=H(s),r=b(),o=p("span"),o.innerHTML="",l=b(),a=p("span"),u=H(c),f=b(),_(t,"id","guessNum"),_(t,"class","svelte-1dnm67b"),_(o,"class","posrel border-tp svelte-1dnm67b"),_(o,"id","winsBar"),Rn(o,"width",`${n[15]*80/n[11]}%`),_(a,"class","smaller-fs svelte-1dnm67b"),_(a,"id","winsNum"),_(e,"class","flex fai-center svelte-1dnm67b")},m(d,m){k(d,e,m),h(e,t),h(t,i),h(e,r),h(e,o),h(e,l),h(e,a),h(a,u),h(e,f)},p(d,m){m&94&&s!==(s=d[14]+"")&&de(i,s),m&94&&Rn(o,"width",`${d[15]*80/d[11]}%`),m&94&&c!==(c=d[15]+"")&&de(u,c)},d(d){d&&I(e)}}}function cl(n){let e;return{c(){e=p("hr"),_(e,"class","svelte-1dnm67b")},m(t,s){k(t,e,s)},d(t){t&&I(e)}}}function ul(n){let e,t,s=n[1]?"Total":n[10]?"Nightmare":"Normal",i,r,o,l,a,c,u=n[9].gamesPlayed+"",f,d,m,g,v,w,N=Math.floor(n[9].gamesWon*100/(n[9].gamesPlayed?n[9].gamesPlayed:1))+"",T,R,D,A,O,C,S,B,K=n[9].maxStreak+"",ee,V,J,ce,U,ue,j,he,le,Y=!n[1]&&ll(n),te=be(Object.entries(n[9].winInfo)),x=[];for(let P=0;P<te.length;P+=1)x[P]=al(ol(n,te,P));let E=n[8]!=n[6][n[6].length-1]&&cl();return{c(){e=p("div"),t=p("span"),i=H(s),r=b(),o=p("div"),l=p("div"),a=p("div"),c=p("span"),f=H(u),d=b(),m=p("span"),m.textContent="Games Played",g=b(),v=p("div"),w=p("span"),T=H(N),R=H("%"),D=b(),A=p("span"),A.textContent="Win Rate",O=b(),Y&&Y.c(),C=b(),S=p("div"),B=p("span"),ee=H(K),V=b(),J=p("span"),J.textContent="Max Streak",ce=b(),U=p("span"),U.textContent="Win Distribution",ue=b(),j=p("div");for(let P=0;P<x.length;P+=1)x[P].c();he=b(),E&&E.c(),le=bt(),_(t,"class","smaller-fs"),_(m,"id","statsTitle"),_(m,"class","svelte-1dnm67b"),_(a,"class","svelte-1dnm67b"),_(A,"id","statsTitle"),_(A,"class","svelte-1dnm67b"),_(v,"class","svelte-1dnm67b"),_(J,"id","statsTitle"),_(J,"class","svelte-1dnm67b"),_(S,"class","svelte-1dnm67b"),_(l,"class","flex svelte-1dnm67b"),_(l,"id","playerStatsInfo"),_(U,"class","smaller-fs"),_(j,"class","flex fd-col smaller-fs svelte-1dnm67b"),_(j,"id","distributionChart"),_(e,"class","flex fd-col svelte-1dnm67b"),_(e,"id","modeStatCont")},m(P,G){k(P,e,G),h(e,t),h(t,i),h(e,r),h(e,o),h(o,l),h(l,a),h(a,c),h(c,f),h(a,d),h(a,m),h(l,g),h(l,v),h(v,w),h(w,T),h(w,R),h(v,D),h(v,A),h(l,O),Y&&Y.m(l,null),h(l,C),h(l,S),h(S,B),h(B,ee),h(S,V),h(S,J),h(e,ce),h(e,U),h(e,ue),h(e,j);for(let F=0;F<x.length;F+=1)x[F]&&x[F].m(j,null);k(P,he,G),E&&E.m(P,G),k(P,le,G)},p(P,G){if(G&66&&s!==(s=P[1]?"Total":P[10]?"Nightmare":"Normal")&&de(i,s),G&94&&u!==(u=P[9].gamesPlayed+"")&&de(f,u),G&94&&N!==(N=Math.floor(P[9].gamesWon*100/(P[9].gamesPlayed?P[9].gamesPlayed:1))+"")&&de(T,N),P[1]?Y&&(Y.d(1),Y=null):Y?Y.p(P,G):(Y=ll(P),Y.c(),Y.m(l,C)),G&94&&K!==(K=P[9].maxStreak+"")&&de(ee,K),G&94){te=be(Object.entries(P[9].winInfo));let F;for(F=0;F<te.length;F+=1){const ae=ol(P,te,F);x[F]?x[F].p(ae,G):(x[F]=al(ae),x[F].c(),x[F].m(j,null))}for(;F<x.length;F+=1)x[F].d(1);x.length=te.length}P[8]!=P[6][P[6].length-1]?E||(E=cl(),E.c(),E.m(le.parentNode,le)):E&&(E.d(1),E=null)},d(P){P&&(I(e),I(he),I(le)),Y&&Y.d(),lt(x,P),E&&E.d(P)}}}function hl(n){let e,t=be(n[6]),s=[];for(let i=0;i<t.length;i+=1)s[i]=ul(rl(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);k(i,e,r)},p(i,r){if(r&94){t=be(i[6]);let o;for(o=0;o<t.length;o+=1){const l=rl(i,t,o);s[o]?s[o].p(l,r):(s[o]=ul(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&I(e),lt(s,i)}}}function Pp(n){let e,t,s,i,r=qt(n[3])+"",o,l,a,c,u,f,d,m=n[5].mode,g,v,w,N,T=hl(n);return{c(){e=p("div"),t=p("div"),s=p("span"),i=H("Your Stats - "),o=H(r),l=b(),a=p("button"),a.textContent="Switch View",c=b(),u=p("hr"),f=b(),d=p("div"),T.c(),_(a,"class","border-tp br-1 smaller-fs svelte-1dnm67b"),_(t,"class","flex fd-col fai-center rg-1 svelte-1dnm67b"),_(t,"id","title"),_(u,"class","svelte-1dnm67b"),_(d,"class","flex fai-center svelte-1dnm67b"),_(d,"id","modeStatsCont"),_(e,"class","statsCont ff-bg flex fd-col cg-1 fai-center border-tp br-1 bs svelte-1dnm67b"),_(e,"id","playerStats"),Ue(e,"totalView",n[1])},m(R,D){k(R,e,D),h(e,t),h(t,s),h(s,i),h(s,o),h(t,l),h(t,a),h(e,c),h(e,u),h(e,f),h(e,d),T.m(d,null),v=!0,w||(N=Re(a,"click",n[7]),w=!0)},p(R,[D]){n=R,(!v||D&8)&&r!==(r=qt(n[3])+"")&&de(o,r),D&32&&st(m,m=n[5].mode)?(T.d(1),T=hl(n),T.c(),T.m(d,null)):T.p(n,D),(!v||D&2)&&Ue(e,"totalView",n[1])},i(R){v||(R&&Ze(()=>{v&&(g||(g=Oe(e,it,{duration:n[0]?200:0},!0)),g.run(1))}),v=!0)},o(R){R&&(g||(g=Oe(e,it,{duration:n[0]?200:0},!1)),g.run(0)),v=!1},d(R){R&&I(e),T.d(R),R&&g&&g.end(),w=!1,N()}}}function Op(n,e,t){let s,i,r,o;pe(n,Nn,f=>t(4,r=f)),pe(n,yt,f=>t(5,o=f));let{prompted:l=!1}=e,a=!0,c;const u=f=>{Ft(f),t(1,a=!a)};return n.$$set=f=>{"prompted"in f&&t(0,l=f.prompted)},n.$$.update=()=>{if(n.$$.dirty&32&&t(3,s=o.mode),n.$$.dirty&2&&t(6,i=a?[""]:["","hard_"]),n.$$.dirty&60&&o.mode){t(2,c=structuredClone(Dt.playerStats.equipment));for(let f of["","hard_"]){let d=r[f+s];for(let m of["gamesPlayed","gamesWon"])t(2,c[m]+=d[m],c);d.maxStreak>c.maxStreak&&t(2,c.maxStreak=d.maxStreak,c);for(let m in d.winInfo)t(2,c.winInfo[m]+=d.winInfo[m],c)}}},[l,a,c,s,r,o,i,u]}class Mc extends ft{constructor(e){super(),ht(this,e,Op,Pp,st,{prompted:0})}}function fl(n,e,t){const s=n.slice();return s[5]=e[t],s}function Mp(n){let e,t=be(n[1]),s=[];for(let i=0;i<t.length;i+=1)s[i]=dl(fl(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);k(i,e,r)},p(i,r){if(r&2){t=be(i[1]);let o;for(o=0;o<t.length;o+=1){const l=fl(i,t,o);s[o]?s[o].p(l,r):(s[o]=dl(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&I(e),lt(s,i)}}}function Lp(n){let e,t,s;return{c(){e=p("span"),t=H("— "),s=H(n[1]),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(i,r){k(i,e,r),h(e,t),h(e,s)},p(i,r){r&2&&de(s,i[1])},d(i){i&&I(e)}}}function dl(n){let e,t,s=n[5]+"",i;return{c(){e=p("span"),t=H("— "),i=H(s),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(r,o){k(r,e,o),h(e,t),h(e,i)},p(r,o){o&2&&s!==(s=r[5]+"")&&de(i,s)},d(r){r&&I(e)}}}function Fp(n){let e,t,s,i,r,o,l,a,c;function u(m,g){return typeof m[1]=="string"?Lp:Mp}let f=u(n),d=f(n);return{c(){e=p("hr"),t=b(),s=p("li"),i=p("span"),r=H("v"),o=H(n[0]),l=b(),a=p("i"),a.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":cp[n[2][0]%10])+", 20"+n[2][2]}`,c=b(),d.c(),_(i,"id","version"),_(i,"class","svelte-1vq8gvl"),_(a,"id","date"),_(a,"class","svelte-1vq8gvl"),_(s,"class","flex fw fai-center svelte-1vq8gvl")},m(m,g){k(m,e,g),k(m,t,g),k(m,s,g),h(s,i),h(i,r),h(i,o),h(s,l),h(s,a),h(s,c),d.m(s,null)},p(m,[g]){g&1&&de(o,m[0]),f===(f=u(m))&&d?d.p(m,g):(d.d(1),d=f(m),d&&(d.c(),d.m(s,null)))},i:oe,o:oe,d(m){m&&(I(e),I(t),I(s)),d.d()}}}function qp(n,e,t){let{version:s,date:i,text:r}=e,o=i.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,s=a.version),"date"in a&&t(4,i=a.date),"text"in a&&t(1,r=a.text)},[s,r,o,l,i]}class Rs extends ft{constructor(e){super(),ht(this,e,qp,Fp,st,{version:0,date:4,text:1})}}function Wp(n){let e,t,s,i,r,o,l,a,c,u,f;return i=new Rs({props:{version:"1.1.2",date:"9/4/24",text:"Normal and Nightmare mode stats are now separate"}}),o=new Rs({props:{version:"1.1.1",date:"5/4/24",text:["Fixed 'Game Stats' section not updating when switching game categories","Fixed page size and zoom occasionally breaking"]}}),a=new Rs({props:{version:"1.1.0",date:"4/4/24",text:["Added 'Weapons' game category","'Game Help' prompt now appears on first visit"]}}),u=new Rs({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=p("span"),e.textContent="Changelog",t=b(),s=p("ul"),He(i.$$.fragment),r=b(),He(o.$$.fragment),l=b(),He(a.$$.fragment),c=b(),He(u.$$.fragment),_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-1hn7lke"),_(s,"id","contents")},m(d,m){k(d,e,m),k(d,t,m),k(d,s,m),xe(i,s,null),h(s,r),xe(o,s,null),h(s,l),xe(a,s,null),h(s,c),xe(u,s,null),f=!0},p:oe,i(d){f||($(i.$$.fragment,d),$(o.$$.fragment,d),$(a.$$.fragment,d),$(u.$$.fragment,d),f=!0)},o(d){re(i.$$.fragment,d),re(o.$$.fragment,d),re(a.$$.fragment,d),re(u.$$.fragment,d),f=!1},d(d){d&&(I(e),I(t),I(s)),Be(i),Be(o),Be(a),Be(u)}}}class jp extends ft{constructor(e){super(),ht(this,e,null,Wp,st,{})}}function xp(n){let e,t,s;return{c(){e=p("span"),e.textContent="Credits",t=b(),s=p("div"),s.innerHTML=`<p class="flex fai-center cg-1">This is a personal project. Contact me directly on
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
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,_(e,"class","title"),_(s,"class","smaller-fs"),_(s,"id","contents")},m(i,r){k(i,e,r),k(i,t,r),k(i,s,r)},p:oe,i:oe,o:oe,d(i){i&&(I(e),I(t),I(s))}}}class Bp extends ft{constructor(e){super(),ht(this,e,null,xp,st,{})}}function _l(n,e,t){const s=n.slice();return s[0]=e[t],s}function Gp(n,e,t){const s=n.slice();return s[3]=e[t],s}function Hp(n,e,t){const s=n.slice();return s[6]=e[t],s}function pl(n,e,t){const s=n.slice();return s[9]=e[t],s}function ml(n,e,t){const s=n.slice();return s[12]=e[t],s}function Up(n,e,t){const s=n.slice();return s[15]=e[t],s}function zp(n){let e;return{c(){e=p("li"),e.textContent=`— ${qt(n[15])} `},m(t,s){k(t,e,s)},p:oe,d(t){t&&I(e)}}}function gl(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[12]} `},m(t,s){k(t,e,s)},p:oe,d(t){t&&I(e)}}}function vl(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[9]}`},m(t,s){k(t,e,s)},p:oe,d(t){t&&I(e)}}}function Vp(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[6]}`},m(t,s){k(t,e,s)},p:oe,d(t){t&&I(e)}}}function Yp(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[3]}`},m(t,s){k(t,e,s)},p:oe,d(t){t&&I(e)}}}function bl(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[0]} Update`},m(t,s){k(t,e,s)},p:oe,d(t){t&&I(e)}}}function $p(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v,w,N,T,R,D,A,O,C,S,B,K,ee,V,J,ce,U,ue,j,he,le,Y,te,x,E,P,G,F,ae,Ie,Qe,qe,Pe,Ge,ke,$e,ct,Se,ne,Je,pt,we,fe,We=be(lp),Xe=[];for(let M=0;M<We.length;M+=1)Xe[M]=zp(Up(n,We,M));let Ee=be(Object.values(ei)),X=[];for(let M=0;M<Ee.length;M+=1)X[M]=gl(ml(n,Ee,M));let ie=be(Object.values(ti)),q=[];for(let M=0;M<ie.length;M+=1)q[M]=vl(pl(n,ie,M));let se=be(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),Te=[];for(let M=0;M<12;M+=1)Te[M]=Vp(Hp(n,se,M));let Q=be(["Black","Blue","Green","Purple","Red","White","Yellow"]),ve=[];for(let M=0;M<7;M+=1)ve[M]=Yp(Gp(n,Q,M));let Ne=be(Object.values(Zs).slice(0,-1)),je=[];for(let M=0;M<Ne.length;M+=1)je[M]=bl(_l(n,Ne,M));return{c(){e=p("span"),e.textContent="Game Help",t=b(),s=p("div"),i=p("p"),i.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece from\r
        Fantastic Frontier, which changes every day.`,r=b(),o=p("hr"),l=b(),a=p("div"),a.innerHTML=`<span class="title">Color Guide</span> <div class="flex cg-1 svelte-2q3hs4" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-2q3hs4" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-2q3hs4" id="partial">Partial
                <span class="bgInfo svelte-2q3hs4">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-2q3hs4" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-2q3hs4" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,c=b(),u=p("hr"),f=b(),d=p("span"),d.textContent="Categories",m=b(),g=p("div"),v=p("div"),w=p("b"),w.textContent="Equipment",N=b(),T=p("span"),R=p("b"),R.textContent="Slot:",D=b(),A=p("ul");for(let M=0;M<Xe.length;M+=1)Xe[M].c();O=b(),C=p("span"),S=p("b"),S.textContent="Stats:",B=b(),K=p("ul");for(let M=0;M<X.length;M+=1)X[M].c();ee=b(),V=p("div"),J=p("b"),J.textContent="Weapons",ce=b(),U=p("span"),U.innerHTML="<b>Has Special:</b> <span>Whether the weapon has a Special Ability.</span>",ue=b(),j=p("span"),he=p("b"),he.textContent="Stat Intakes:",le=b(),Y=p("ul");for(let M=0;M<q.length;M+=1)q[M].c();te=b(),x=p("div"),E=p("div"),P=p("b"),P.textContent="General",G=b(),F=p("span"),F.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item(s) can be
                    purchased at. &quot;Unpurchasable&quot; if it cannot be purchased,
                    equivalent to 0 for the game&#39;s purposes.</span>`,ae=b(),Ie=p("span"),Qe=p("b"),Qe.textContent="Colors:",qe=b(),Pe=p("ul");for(let M=0;M<12;M+=1)Te[M].c();Ge=b(),ke=p("span"),$e=p("b"),$e.textContent="Outline:",ct=b(),Se=p("ul");for(let M=0;M<7;M+=1)ve[M].c();ne=b(),Je=p("span"),pt=p("b"),pt.textContent="Release:",we=b(),fe=p("ul");for(let M=0;M<je.length;M+=1)je[M].c();_(e,"class","title"),_(a,"class","flex fd-col fai-center"),_(d,"class","title"),_(w,"class","categoryTitle svelte-2q3hs4"),_(R,"class","svelte-2q3hs4"),_(A,"class","svelte-2q3hs4"),_(T,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(S,"class","svelte-2q3hs4"),_(K,"class","svelte-2q3hs4"),_(C,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(v,"class","flex fw fjc-center categories svelte-2q3hs4"),_(J,"class","categoryTitle svelte-2q3hs4"),_(U,"class","flex fd-col smaller-fs limit-width svelte-2q3hs4"),_(he,"class","svelte-2q3hs4"),_(Y,"class","svelte-2q3hs4"),_(j,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(V,"class","flex fw fjc-center categories svelte-2q3hs4"),_(g,"class","flex categoriesCont svelte-2q3hs4"),_(P,"class","categoryTitle svelte-2q3hs4"),_(F,"class","flex fd-col smaller-fs limit-width svelte-2q3hs4"),_(Qe,"class","svelte-2q3hs4"),_(Pe,"class","svelte-2q3hs4"),_(Ie,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_($e,"class","svelte-2q3hs4"),_(Se,"class","svelte-2q3hs4"),_(ke,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(pt,"class","svelte-2q3hs4"),_(fe,"class","svelte-2q3hs4"),_(Je,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(E,"class","flex fw fjc-center categories svelte-2q3hs4"),_(x,"class","flex categoriesCont svelte-2q3hs4"),_(s,"class","flex fd-col smaller-fs svelte-2q3hs4"),_(s,"id","contents")},m(M,gt){k(M,e,gt),k(M,t,gt),k(M,s,gt),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(s,f),h(s,d),h(s,m),h(s,g),h(g,v),h(v,w),h(v,N),h(v,T),h(T,R),h(T,D),h(T,A);for(let W=0;W<Xe.length;W+=1)Xe[W]&&Xe[W].m(A,null);h(v,O),h(v,C),h(C,S),h(C,B),h(C,K);for(let W=0;W<X.length;W+=1)X[W]&&X[W].m(K,null);h(g,ee),h(g,V),h(V,J),h(V,ce),h(V,U),h(V,ue),h(V,j),h(j,he),h(j,le),h(j,Y);for(let W=0;W<q.length;W+=1)q[W]&&q[W].m(Y,null);h(s,te),h(s,x),h(x,E),h(E,P),h(E,G),h(E,F),h(E,ae),h(E,Ie),h(Ie,Qe),h(Ie,qe),h(Ie,Pe);for(let W=0;W<12;W+=1)Te[W]&&Te[W].m(Pe,null);h(E,Ge),h(E,ke),h(ke,$e),h(ke,ct),h(ke,Se);for(let W=0;W<7;W+=1)ve[W]&&ve[W].m(Se,null);h(E,ne),h(E,Je),h(Je,pt),h(Je,we),h(Je,fe);for(let W=0;W<je.length;W+=1)je[W]&&je[W].m(fe,null)},p(M,[gt]){if(gt&0){Ee=be(Object.values(ei));let W;for(W=0;W<Ee.length;W+=1){const z=ml(M,Ee,W);X[W]?X[W].p(z,gt):(X[W]=gl(z),X[W].c(),X[W].m(K,null))}for(;W<X.length;W+=1)X[W].d(1);X.length=Ee.length}if(gt&0){ie=be(Object.values(ti));let W;for(W=0;W<ie.length;W+=1){const z=pl(M,ie,W);q[W]?q[W].p(z,gt):(q[W]=vl(z),q[W].c(),q[W].m(Y,null))}for(;W<q.length;W+=1)q[W].d(1);q.length=ie.length}if(gt&0){Ne=be(Object.values(Zs).slice(0,-1));let W;for(W=0;W<Ne.length;W+=1){const z=_l(M,Ne,W);je[W]?je[W].p(z,gt):(je[W]=bl(z),je[W].c(),je[W].m(fe,null))}for(;W<je.length;W+=1)je[W].d(1);je.length=Ne.length}},i:oe,o:oe,d(M){M&&(I(e),I(t),I(s)),lt(Xe,M),lt(X,M),lt(q,M),lt(Te,M),lt(ve,M),lt(je,M)}}}class Lc extends ft{constructor(e){super(),ht(this,e,null,$p,st,{})}}function Kp(n){let e,t,s;return{c(){e=p("span"),e.textContent="Frontierdle Policy",t=b(),s=p("div"),s.innerHTML=`<hr/> <span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-932r7h"),_(s,"id","contents")},m(i,r){k(i,e,r),k(i,t,r),k(i,s,r)},p:oe,i:oe,o:oe,d(i){i&&(I(e),I(t),I(s))}}}class Qp extends ft{constructor(e){super(),ht(this,e,null,Kp,st,{})}}function yl(n){let e,t,s;return{c(){e=p("iconify-icon"),Ye(e,"icon","uil:exclamation"),Ye(e,"id","unseen"),Ye(e,"class","svelte-1o089h7")},m(i,r){k(i,e,r),s=!0},i(i){s||(i&&Ze(()=>{s&&(t||(t=Oe(e,xt,{duration:150},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=Oe(e,xt,{duration:150},!1)),t.run(0)),s=!1},d(i){i&&I(e),i&&t&&t.end()}}}function Jp(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v,w,N,T,R=!n[2]&&yl();return{c(){e=p("button"),e.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',t=b(),s=p("a"),s.innerHTML=`Support me
    <img src="misc/kofi-badge.png" alt="" class="svelte-1o089h7"/>`,i=b(),r=p("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=b(),l=p("button"),a=p("iconify-icon"),c=b(),u=p("span"),u.textContent="Changelog",f=b(),R&&R.c(),d=b(),m=p("button"),m.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',g=b(),v=p("span"),w=H(n[0]),_(e,"class","info p-1 svelte-1o089h7"),_(e,"id","credits"),_(s,"class","info p-1 svelte-1o089h7"),_(s,"id","donate"),_(s,"href","https://ko-fi.com/xt8ss"),_(s,"target","_blank"),_(r,"class","info p-1 svelte-1o089h7"),_(r,"id","help"),Ye(a,"icon","octicon:log-16"),_(u,"class","tooltip"),_(u,"id","right"),_(l,"class","info svelte-1o089h7"),_(l,"id","changelog"),_(m,"class","info p-1 svelte-1o089h7"),_(m,"id","policy"),_(v,"class","info svelte-1o089h7"),_(v,"id","version")},m(D,A){k(D,e,A),k(D,t,A),k(D,s,A),k(D,i,A),k(D,r,A),k(D,o,A),k(D,l,A),h(l,a),h(l,c),h(l,u),h(l,f),R&&R.m(l,null),k(D,d,A),k(D,m,A),k(D,g,A),k(D,v,A),h(v,w),N||(T=[Re(e,"click",n[3]),Re(r,"click",n[4]),Re(l,"click",n[5]),Re(m,"click",n[6])],N=!0)},p(D,[A]){D[2]?R&&(Et(),re(R,1,1,()=>{R=null}),It()):R?A&4&&$(R,1):(R=yl(),R.c(),$(R,1),R.m(l,null)),A&1&&de(w,D[0])},i(D){$(R)},o(D){re(R)},d(D){D&&(I(e),I(t),I(s),I(i),I(r),I(o),I(l),I(d),I(m),I(g),I(v)),R&&R.d(),N=!1,at(T)}}}function Xp(n,e,t){let s,i;pe(n,dt,u=>t(1,s=u)),pe(n,ps,u=>t(2,i=u));let{version:r}=e;const o=u=>{Ft(u),_e(dt,s.component=Bp,s)},l=u=>{Ft(u),_e(dt,s.component=Lc,s)},a=u=>{Ft(u),_e(dt,s.component=jp,s),_e(ps,i=!0,i)},c=u=>{Ft(u),_e(dt,s.component=Qp,s)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,s,i,o,l,a,c]}class Zp extends ft{constructor(e){super(),ht(this,e,Xp,Jp,st,{version:0})}}function em(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v,w;return{c(){e=p("div"),t=p("span"),t.textContent="Choose your category",s=b(),i=p("button"),r=p("img"),l=b(),a=p("span"),a.textContent="Equipment",c=b(),u=p("button"),f=p("img"),m=b(),g=p("span"),g.textContent="Weapons",_(t,"id","title"),_(t,"class","svelte-w2ulp9"),nt(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/7/7a/WhiteSpectralVanguardIcon.png")||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-w2ulp9"),i.disabled=n[0],_(i,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-w2ulp9"),Ue(i,"selected",n[1].mode=="equipment"),nt(f.src,d="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/9/95/TheJadeTwin.png")||_(f,"src",d),_(f,"alt",""),_(f,"class","svelte-w2ulp9"),u.disabled=n[0],_(u,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-w2ulp9"),Ue(u,"selected",n[1].mode=="weapons"),_(e,"class","chooseModeCont ff-bg flex fd-row fw border-tp br-1 bs svelte-w2ulp9")},m(N,T){k(N,e,T),h(e,t),h(e,s),h(e,i),h(i,r),h(i,l),h(i,a),h(e,c),h(e,u),h(u,f),h(u,m),h(u,g),v||(w=[Re(i,"click",n[2]),Re(u,"click",n[3])],v=!0)},p(N,[T]){T&1&&(i.disabled=N[0]),T&2&&Ue(i,"selected",N[1].mode=="equipment"),T&1&&(u.disabled=N[0]),T&2&&Ue(u,"selected",N[1].mode=="weapons")},i:oe,o:oe,d(N){N&&I(e),v=!1,at(w)}}}function tm(n,e,t){let s,i;return pe(n,hn,l=>t(0,s=l)),pe(n,yt,l=>t(1,i=l)),[s,i,l=>{Ft(l),s||_e(yt,i.mode="equipment",i)},l=>{Ft(l),s||_e(yt,i.mode="weapons",i)}]}class nm extends ft{constructor(e){super(),ht(this,e,tm,em,st,{})}}function wl(n,e,t){const s=n.slice();return s[6]=e[t][0],s[7]=e[t][1],s[8]=e[t][2],s[10]=t,s}function Cl(n){let e,t,s=n[6]+"",i,r,o,l,a;function c(){return n[5](n[8],n[7])}return{c(){e=p("div"),t=p("button"),i=H(s),o=b(),t.disabled=r=n[8],_(t,"class","flex fjc-center fai-center light-hover svelte-1mwja36"),_(e,"class","ff-bg posrel border-tp br-1 svelte-1mwja36")},m(u,f){k(u,e,f),h(e,t),h(t,i),h(e,o),l||(a=[Re(t,"click",c),Wl(n[3].call(null,t,n[10]))],l=!0)},p(u,f){n=u,f&1&&s!==(s=n[6]+"")&&de(i,s),f&1&&r!==(r=n[8])&&(t.disabled=r)},d(u){u&&I(e),l=!1,at(a)}}}function sm(n){let e,t=be(n[0]),s=[];for(let i=0;i<t.length;i+=1)s[i]=Cl(wl(n,t,i));return{c(){e=p("div");for(let i=0;i<s.length;i+=1)s[i].c();_(e,"class","options flex svelte-1mwja36")},m(i,r){k(i,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(i,[r]){if(r&7){t=be(i[0]);let o;for(o=0;o<t.length;o+=1){const l=wl(i,t,o);s[o]?s[o].p(l,r):(s[o]=Cl(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},i:oe,o:oe,d(i){i&&I(e),lt(s,i)}}}function im(n,e,t){let s;pe(n,dt,c=>t(1,s=c));const i=zl();let{options:r=[],focus:o=null}=e;function l(c,u){u+1===o&&c.focus()}const a=(c,u)=>{c||(i("clicked"),u(),_e(dt,s.component=null,s))};return n.$$set=c=>{"options"in c&&t(0,r=c.options),"focus"in c&&t(4,o=c.focus)},[r,s,i,l,o,a]}class Fc extends ft{constructor(e){super(),ht(this,e,im,sm,st,{options:0,focus:4})}}function rm(n){let e,t,s,i,r,o,l,a,c,u,f,d,m;return d=new Fc({props:{options:[["Don't show again",n[3]],["Maybe later",n[4]]],focus:2}}),d.$on("clicked",n[5]),{c(){e=p("span"),e.textContent="Support Me",t=b(),s=p("div"),i=p("p"),i.textContent="Thank you for your continuous use of my site!",r=b(),o=p("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,l=b(),a=p("p"),a.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,c=b(),u=p("a"),u.innerHTML='<img src="misc/kofi-badge.png" alt="Ko-fi" class="svelte-1wbcr77"/>',f=b(),He(d.$$.fragment),_(e,"class","title"),_(u,"class","flex br-1 bg-change light-hover svelte-1wbcr77"),_(u,"href","https://ko-fi.com/xt8ss"),_(u,"target","_blank"),_(s,"class","flex fd-col fai-center smaller-fs svelte-1wbcr77"),_(s,"id","contents")},m(g,v){k(g,e,v),k(g,t,v),k(g,s,v),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(s,f),xe(d,s,null),m=!0},p(g,[v]){const w={};v&2&&(w.options=[["Don't show again",g[3]],["Maybe later",g[4]]]),d.$set(w)},i(g){m||($(d.$$.fragment,g),m=!0)},o(g){re(d.$$.fragment,g),m=!1},d(g){g&&(I(e),I(t),I(s)),Be(d)}}}function om(n,e,t){let s,i;pe(n,sn,c=>t(1,s=c)),pe(n,dt,c=>t(2,i=c));let r=!1;const o=()=>_e(sn,s.showAgain=!1,s),l=()=>_e(sn,s.timesDenied++,s),a=()=>t(0,r=!0);return n.$$.update=()=>{n.$$.dirty&7&&i.component===null&&!r&&_e(sn,s.timesDenied++,s)},[r,s,i,o,l,a]}class lm extends ft{constructor(e){super(),ht(this,e,om,rm,st,{})}}function El(n){let e,t;return{c(){e=p("span"),t=H(n[4]),_(e,"class","ff-item svelte-1u4nbi9")},m(s,i){k(s,e,i),h(e,t)},p(s,i){i&16&&de(t,s[4])},d(s){s&&I(e)}}}function am(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v,w,N,T,R,D,A,O,C,S,B,K,ee,V,J,ce,U,ue,j,he,le,Y,te,x,E,P,G,F,ae,Ie,Qe,qe,Pe,Ge,ke,$e,ct,Se,ne,Je,pt,we,fe,We,Xe,Ee;function X(z){n[8](z)}function ie(z){n[9](z)}let q={size:"4.5"};n[0]!==void 0&&(q.checked=n[0]),n[0]!==void 0&&(q.forced=n[0]),f=new As({props:q}),Ve.push(()=>Nt(f,"checked",X)),Ve.push(()=>Nt(f,"forced",ie)),f.$on("toggle",n[10]);function se(z){n[11](z)}function Te(z){n[12](z)}let Q={size:"4.5"};n[3]!==void 0&&(Q.checked=n[3]),n[3]!==void 0&&(Q.forced=n[3]),T=new As({props:Q}),Ve.push(()=>Nt(T,"checked",se)),Ve.push(()=>Nt(T,"forced",Te)),T.$on("toggle",n[13]);function ve(z){n[14](z)}function Ne(z){n[15](z)}let je={noGuess:!0};n[6]!==void 0&&(je.noGuessMode=n[6]),n[4]!==void 0&&(je.noGuessItem=n[4]),B=new Oc({props:je}),Ve.push(()=>Nt(B,"noGuessMode",ve)),Ve.push(()=>Nt(B,"noGuessItem",Ne));let M=n[4]&&El(n);function gt(z){n[16](z)}let W={size:"4.5",disabled:!n[4]};return n[5]!==void 0&&(W.checked=n[5]),x=new As({props:W}),Ve.push(()=>Nt(x,"checked",gt)),x.$on("toggle",n[17]),fe=new Fc({props:{options:[["Create",n[7],!n[4]]]}}),{c(){e=p("div"),e.textContent="Create a Room",t=b(),s=p("div"),i=p("hr"),r=b(),o=p("div"),l=p("span"),l.textContent="Mode:",a=b(),c=p("div"),u=p("span"),He(f.$$.fragment),g=b(),v=p("span"),v.textContent="Equipment",w=b(),N=p("span"),He(T.$$.fragment),A=b(),O=p("span"),O.textContent="Weapons",C=b(),S=p("div"),He(B.$$.fragment),V=b(),J=p("div"),ce=p("span"),ce.textContent="Item:",U=b(),M&&M.c(),ue=b(),j=p("hr"),he=b(),le=p("div"),Y=p("span"),Y.innerHTML='<button class="flex posrel no-bg-change"><iconify-icon icon="eva:info-outline" id="infoIcon" class="svelte-1u4nbi9"></iconify-icon> <span class="tooltip" id="left">Does not affect attempt count</span></button> <span>Nightmare Mode:</span>',te=b(),He(x.$$.fragment),P=b(),G=p("hr"),F=b(),ae=p("div"),Ie=p("span"),Ie.textContent="Max Player Count:",Qe=b(),qe=p("input"),Ge=b(),ke=p("div"),$e=p("span"),$e.textContent="Max Attempt Count:",ct=b(),Se=p("input"),Je=b(),pt=p("hr"),we=b(),He(fe.$$.fragment),_(e,"class","title"),_(u,"class","flex fai-center cg-1"),_(N,"class","flex fai-center cg-1"),_(c,"class","flex fd-col rg-1"),_(o,"class","flex fjc-center fai-center svelte-1u4nbi9"),_(o,"id","modeChooser"),_(S,"class","flex fjc-center posrel"),_(J,"class","flex fjc-center fai-center cg-1 svelte-1u4nbi9"),_(J,"id","itemName"),_(Y,"class","flex fai-center cg-1"),_(le,"class","flex fjc-center fai-center cg-1"),_(qe,"type","number"),_(qe,"placeholder","4"),qe.disabled=Pe=!n[4],_(qe,"class","border-tp br-1 svelte-1u4nbi9"),_(ae,"class","flex fjc-center fai-center cg-1"),_(Se,"type","number"),_(Se,"placeholder","7"),Se.disabled=ne=!n[4],_(Se,"class","border-tp br-1 svelte-1u4nbi9"),_(ke,"class","flex fjc-center fai-center cg-1"),_(s,"class","flex fd-col smaller-fs svelte-1u4nbi9"),_(s,"id","contents")},m(z,Ke){k(z,e,Ke),k(z,t,Ke),k(z,s,Ke),h(s,i),h(s,r),h(s,o),h(o,l),h(o,a),h(o,c),h(c,u),xe(f,u,null),h(u,g),h(u,v),h(c,w),h(c,N),xe(T,N,null),h(N,A),h(N,O),h(s,C),h(s,S),xe(B,S,null),h(s,V),h(s,J),h(J,ce),h(J,U),M&&M.m(J,null),h(s,ue),h(s,j),h(s,he),h(s,le),h(le,Y),h(le,te),xe(x,le,null),h(s,P),h(s,G),h(s,F),h(s,ae),h(ae,Ie),h(ae,Qe),h(ae,qe),ks(qe,n[1]),h(s,Ge),h(s,ke),h(ke,$e),h(ke,ct),h(ke,Se),ks(Se,n[2]),h(s,Je),h(s,pt),h(s,we),xe(fe,s,null),We=!0,Xe||(Ee=[Re(qe,"input",n[18]),Re(Se,"input",n[19])],Xe=!0)},p(z,[Ke]){const jn={};!d&&Ke&1&&(d=!0,jn.checked=z[0],Tt(()=>d=!1)),!m&&Ke&1&&(m=!0,jn.forced=z[0],Tt(()=>m=!1)),f.$set(jn);const xn={};!R&&Ke&8&&(R=!0,xn.checked=z[3],Tt(()=>R=!1)),!D&&Ke&8&&(D=!0,xn.forced=z[3],Tt(()=>D=!1)),T.$set(xn);const Bn={};!K&&Ke&64&&(K=!0,Bn.noGuessMode=z[6],Tt(()=>K=!1)),!ee&&Ke&16&&(ee=!0,Bn.noGuessItem=z[4],Tt(()=>ee=!1)),B.$set(Bn),z[4]?M?M.p(z,Ke):(M=El(z),M.c(),M.m(J,null)):M&&(M.d(1),M=null);const Gn={};Ke&16&&(Gn.disabled=!z[4]),!E&&Ke&32&&(E=!0,Gn.checked=z[5],Tt(()=>E=!1)),x.$set(Gn),(!We||Ke&16&&Pe!==(Pe=!z[4]))&&(qe.disabled=Pe),Ke&2&&Ps(qe.value)!==z[1]&&ks(qe,z[1]),(!We||Ke&16&&ne!==(ne=!z[4]))&&(Se.disabled=ne),Ke&4&&Ps(Se.value)!==z[2]&&ks(Se,z[2]);const y={};Ke&16&&(y.options=[["Create",z[7],!z[4]]]),fe.$set(y)},i(z){We||($(f.$$.fragment,z),$(T.$$.fragment,z),$(B.$$.fragment,z),$(x.$$.fragment,z),$(fe.$$.fragment,z),We=!0)},o(z){re(f.$$.fragment,z),re(T.$$.fragment,z),re(B.$$.fragment,z),re(x.$$.fragment,z),re(fe.$$.fragment,z),We=!1},d(z){z&&(I(e),I(t),I(s)),Be(f),Be(T),Be(B),M&&M.d(),Be(x),Be(fe),Xe=!1,at(Ee)}}}function cm(n,e,t){let s,i=!0,r=!1,o="",l=!1,a=4,c=7;function u(){console.log({mode:s,item:o,hardMode:l,playerCount:a,attemptCount:c,players:{}})}function f(C){i=C,t(0,i)}function d(C){i=C,t(0,i)}const m=C=>{t(0,i=C.detail.checked),t(3,r=!1)};function g(C){r=C,t(3,r)}function v(C){r=C,t(3,r)}const w=C=>{t(3,r=C.detail.checked),t(0,i=!1)};function N(C){s=C,t(6,s),t(0,i)}function T(C){o=C,t(4,o)}function R(C){l=C,t(5,l)}const D=C=>t(5,l=C.detail.checked);function A(){a=Ps(this.value),t(1,a)}function O(){c=Ps(this.value),t(2,c)}return n.$$.update=()=>{n.$$.dirty&2&&a<1&&t(1,a=1),n.$$.dirty&2&&a>6&&t(1,a=6),n.$$.dirty&2&&a&&t(1,a=Math.floor(a)),n.$$.dirty&1&&t(6,s=i?"equipment":"weapons"),n.$$.dirty&4&&c<1&&t(2,c=1),n.$$.dirty&4&&c>7&&t(2,c=7),n.$$.dirty&4&&c&&t(2,c=Math.floor(c))},[i,a,c,r,o,l,s,u,f,d,m,g,v,w,N,T,R,D,A,O]}class um extends ft{constructor(e){super(),ht(this,e,cm,am,st,{})}}const{document:Kn,window:wn}=Bc;function Il(n,e,t){const s=n.slice();return s[76]=e[t],s}function Sl(n,e,t){const s=n.slice();return s[76]=e[t],s}function kl(n){let e;return{c(){e=p("link"),_(e,"rel","preload"),_(e,"as","image"),_(e,"href",n[76])},m(t,s){k(t,e,s)},p:oe,d(t){t&&I(e)}}}function Tl(n){let e;return{c(){e=p("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,s){k(t,e,s)},d(t){t&&I(e)}}}function Nl(n){let e,t;return{c(){e=p("img"),_(e,"class","background svelte-105j5xd"),nt(e.src,t=n[76])||_(e,"src",t),_(e,"alt",""),Ue(e,"active",n[30].indexOf(n[76])==n[23])},m(s,i){k(s,e,i)},p(s,i){i[0]&1082130432&&Ue(e,"active",s[30].indexOf(s[76])==s[23])},d(s){s&&I(e)}}}function Rl(n){let e,t,s=Math.floor(n[27][n[2]]*100)+"",i,r,o,l;return{c(){e=p("span"),t=H("Zoom: "),i=H(s),r=p("b"),r.textContent="%",_(e,"class","info svelte-105j5xd"),_(e,"id","zoomLevel")},m(a,c){k(a,e,c),h(e,t),h(e,i),h(e,r),l=!0},p(a,c){(!l||c[0]&4)&&s!==(s=Math.floor(a[27][a[2]]*100)+"")&&de(i,s)},i(a){l||(a&&Ze(()=>{l&&(o||(o=Oe(e,xt,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=Oe(e,xt,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&I(e),a&&o&&o.end()}}}function Dl(n){let e,t,s,i,r,o,l,a,c=n[9].muted?"Muted":"Unmuted",u,f,d,m,g,v,w,N,T,R,D,A=ii(n[20],n[21],n[22])+"",O,C,S,B,K,ee,V,J,ce,U,ue,j,he,le,Y,te=n[3].includes("equipment")?"stat":" stat intake",x,E,P,G,F,ae,Ie,Qe,qe,Pe,Ge,ke,$e,ct,Se,ne,Je,pt;K=new nm({}),ae=new As({props:{size:"5",checked:n[5],disabled:n[6].chosenItems.length!=0}}),ae.$on("toggle",n[49]);let we=!n[6].gameWin&&!n[6].gameOver&&Al(n),fe=(n[6].gameWin||n[6].gameOver)&&Pl(n);function We(q){n[52](q)}let Xe={};n[12]!==void 0&&(Xe.dailyItemsData=n[12]),Pe=new wp({props:Xe}),Ve.push(()=>Nt(Pe,"dailyItemsData",We));let Ee=n[13][n[3]]&&Ol(n),X=n[24].component&&n[24].complete&&Ml(n),ie=n[24].component&&!n[24].complete&&Ll(n);return{c(){e=p("main"),t=p("div"),s=p("div"),i=p("button"),r=p("iconify-icon"),l=b(),a=p("span"),u=H(c),f=b(),d=p("button"),m=p("img"),v=b(),w=p("span"),N=H(`Next items in...
                    `),T=p("br"),R=b(),D=new Hl(!1),O=b(),C=p("div"),S=p("button"),S.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-105j5xd"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',B=b(),He(K.$$.fragment),ee=b(),V=b(),J=p("div"),ce=p("button"),U=p("iconify-icon"),ue=b(),j=p("span"),he=H(`No armor (more damage taken).
                    `),le=p("br"),Y=H(`
                    No `),x=H(te),E=H(` / avg.
                    cost / color clues.`),P=b(),G=p("span"),G.textContent="Nightmare Mode",F=b(),He(ae.$$.fragment),Ie=b(),we&&we.c(),Qe=b(),fe&&fe.c(),qe=b(),He(Pe.$$.fragment),ke=b(),Ee&&Ee.c(),$e=b(),X&&X.c(),ct=b(),ie&&ie.c(),Se=bt(),Ye(r,"icon",o="f7:speaker-"+(n[9].muted?"slash":"2")+"-fill"),Ye(r,"class","svelte-105j5xd"),_(a,"class","tooltip"),_(a,"id","bottom"),_(i,"class","flex light-hover svelte-105j5xd"),_(s,"class","iconToggle ff-bg posrel border-tp br-1 bs svelte-105j5xd"),nt(m.src,g="frontierdle.svg")||_(m,"src",g),_(m,"alt","Frontierdle"),_(m,"class","svelte-105j5xd"),D.a=null,_(w,"class","tooltip svelte-105j5xd"),_(w,"id","bottom"),_(d,"class","iconCont ff-bg posrel border-tp br-1 bs no-bg-change svelte-105j5xd"),_(S,"class","flex posrel light-hover svelte-105j5xd"),_(C,"class","iconToggle ff-bg border-tp br-1 bs svelte-105j5xd"),_(t,"class","upperMenu flex fai-center svelte-105j5xd"),Ye(U,"icon","eva:info-outline"),Ye(U,"id","info"),Ye(U,"class","svelte-105j5xd"),_(j,"class","tooltip svelte-105j5xd"),_(j,"id","bottom"),_(ce,"class","flex posrel no-bg-change"),_(J,"class","hardModeCont ff-bg flex fai-center cg-1 border-tp br-1 bs svelte-105j5xd"),_(e,"class","flex fd-col fai-center posrel svelte-105j5xd")},m(q,se){k(q,e,se),h(e,t),h(t,s),h(s,i),h(i,r),h(i,l),h(i,a),h(a,u),h(t,f),h(t,d),h(d,m),h(d,v),h(d,w),h(w,N),h(w,T),h(w,R),D.m(A,w),h(t,O),h(t,C),h(C,S),h(e,B),xe(K,e,null),h(e,ee),h(e,V),h(e,J),h(J,ce),h(ce,U),h(ce,ue),h(ce,j),h(j,he),h(j,le),h(j,Y),h(j,x),h(j,E),h(J,P),h(J,G),h(J,F),xe(ae,J,null),h(e,Ie),we&&we.m(e,null),h(e,Qe),fe&&fe.m(e,null),h(e,qe),xe(Pe,e,null),h(e,ke),Ee&&Ee.m(e,null),k(q,$e,se),X&&X.m(q,se),k(q,ct,se),ie&&ie.m(q,se),k(q,Se,se),ne=!0,Je||(pt=[Re(i,"click",n[46]),Re(S,"click",n[47])],Je=!0)},p(q,se){(!ne||se[0]&512&&o!==(o="f7:speaker-"+(q[9].muted?"slash":"2")+"-fill"))&&Ye(r,"icon",o),(!ne||se[0]&512)&&c!==(c=q[9].muted?"Muted":"Unmuted")&&de(u,c),(!ne||se[0]&7340032)&&A!==(A=ii(q[20],q[21],q[22])+"")&&D.p(A),(!ne||se[0]&8)&&te!==(te=q[3].includes("equipment")?"stat":" stat intake")&&de(x,te);const Te={};se[0]&32&&(Te.checked=q[5]),se[0]&64&&(Te.disabled=q[6].chosenItems.length!=0),ae.$set(Te),!q[6].gameWin&&!q[6].gameOver?we?(we.p(q,se),se[0]&64&&$(we,1)):(we=Al(q),we.c(),$(we,1),we.m(e,Qe)):we&&(Et(),re(we,1,1,()=>{we=null}),It()),q[6].gameWin||q[6].gameOver?fe?(fe.p(q,se),se[0]&64&&$(fe,1)):(fe=Pl(q),fe.c(),$(fe,1),fe.m(e,qe)):fe&&(Et(),re(fe,1,1,()=>{fe=null}),It());const Q={};!Ge&&se[0]&4096&&(Ge=!0,Q.dailyItemsData=q[12],Tt(()=>Ge=!1)),Pe.$set(Q),q[13][q[3]]?Ee?Ee.p(q,se):(Ee=Ol(q),Ee.c(),Ee.m(e,null)):Ee&&(Ee.d(1),Ee=null),q[24].component&&q[24].complete?X?(X.p(q,se),se[0]&16777216&&$(X,1)):(X=Ml(q),X.c(),$(X,1),X.m(ct.parentNode,ct)):X&&(Et(),re(X,1,1,()=>{X=null}),It()),q[24].component&&!q[24].complete?ie?(ie.p(q,se),se[0]&16777216&&$(ie,1)):(ie=Ll(q),ie.c(),$(ie,1),ie.m(Se.parentNode,Se)):ie&&(Et(),re(ie,1,1,()=>{ie=null}),It())},i(q){ne||($(K.$$.fragment,q),$(ae.$$.fragment,q),$(we),$(fe),$(Pe.$$.fragment,q),$(X),$(ie),ne=!0)},o(q){re(K.$$.fragment,q),re(ae.$$.fragment,q),re(we),re(fe),re(Pe.$$.fragment,q),re(X),re(ie),ne=!1},d(q){q&&(I(e),I($e),I(ct),I(Se)),Be(K),Be(ae),we&&we.d(),fe&&fe.d(),Be(Pe),Ee&&Ee.d(),X&&X.d(q),ie&&ie.d(q),Je=!1,at(pt)}}}function Al(n){let e,t,s;function i(o){n[50](o)}let r={};return n[19][n[3]]!==void 0&&(r.gameNumber=n[19][n[3]]),e=new Np({props:r}),Ve.push(()=>Nt(e,"gameNumber",i)),{c(){He(e.$$.fragment)},m(o,l){xe(e,o,l),s=!0},p(o,l){const a={};!t&&l[0]&524296&&(t=!0,a.gameNumber=o[19][o[3]],Tt(()=>t=!1)),e.$set(a)},i(o){s||($(e.$$.fragment,o),s=!0)},o(o){re(e.$$.fragment,o),s=!1},d(o){Be(e,o)}}}function Pl(n){let e,t,s=n[6].gameWin?"Fantastic!":"Farewell...",i,r,o,l,a,c=n[6].gameWin?"won":"lost",u,f,d,m,g,v,w,N,T,R,D,A,O,C,S=n[12][n[3]].name+"",B,K,ee,V,J,ce,U,ue=ii(n[20],n[21],n[22])+"",j,he,le,Y,te,x,E;function P(F){n[51](F)}let G={};return n[19][n[3]]!==void 0&&(G.gameNumber=n[19][n[3]]),le=new Ap({props:G}),Ve.push(()=>Nt(le,"gameNumber",P)),x=new Mc({}),{c(){e=p("div"),t=p("span"),i=H(s),r=b(),o=p("img"),a=H(`
                    You `),u=H(c),f=H("!"),d=b(),m=p("span"),m.textContent="Today's item was...",g=b(),v=p("div"),w=p("a"),N=p("img"),R=b(),D=p("iconify-icon"),O=b(),C=p("span"),B=H(S),K=b(),ee=p("span"),V=H(`Next item available in...
                    `),J=p("br"),ce=b(),U=p("span"),he=b(),He(le.$$.fragment),te=b(),He(x.$$.fragment),nt(o.src,l=n[6].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||_(o,"src",l),_(o,"id","gameFinishIcon"),_(o,"alt",""),_(o,"class","svelte-105j5xd"),_(t,"class","flex fai-center svelte-105j5xd"),_(t,"id","gameFinishMessage"),_(m,"class","smaller-fs"),nt(N.src,T=Xt+n[12][n[3]].image)||_(N,"src",T),_(N,"alt",""),_(N,"class","svelte-105j5xd"),Ye(D,"icon","tabler:link"),Ye(D,"class","svelte-105j5xd"),_(w,"class","flex fjc-center fai-center svelte-105j5xd"),_(w,"href",A=Mn+n[12][n[3]].link),_(w,"target","_blank"),_(v,"class","itemImg ff-item flex svelte-105j5xd"),_(v,"id","dailyItemImg"),_(C,"class","ff-item itemName svelte-105j5xd"),_(C,"id","dailyItemName"),_(U,"class","ff-item svelte-105j5xd"),_(U,"id","nextItemTime"),_(ee,"class","flex fd-col svelte-105j5xd"),_(ee,"id","nextItemCont"),_(e,"class","gameFinishCont ff-bg flex fd-col fai-center rg-1 border-tp br-1 bs svelte-105j5xd")},m(F,ae){k(F,e,ae),h(e,t),h(t,i),h(t,r),h(t,o),h(t,a),h(t,u),h(t,f),h(e,d),h(e,m),h(e,g),h(e,v),h(v,w),h(w,N),h(w,R),h(w,D),h(e,O),h(e,C),h(C,B),h(e,K),h(e,ee),h(ee,V),h(ee,J),h(ee,ce),h(ee,U),U.innerHTML=ue,k(F,he,ae),xe(le,F,ae),k(F,te,ae),xe(x,F,ae),E=!0},p(F,ae){(!E||ae[0]&64)&&s!==(s=F[6].gameWin?"Fantastic!":"Farewell...")&&de(i,s),(!E||ae[0]&64&&!nt(o.src,l=F[6].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&_(o,"src",l),(!E||ae[0]&64)&&c!==(c=F[6].gameWin?"won":"lost")&&de(u,c),(!E||ae[0]&4104&&!nt(N.src,T=Xt+F[12][F[3]].image))&&_(N,"src",T),(!E||ae[0]&4104&&A!==(A=Mn+F[12][F[3]].link))&&_(w,"href",A),(!E||ae[0]&4104)&&S!==(S=F[12][F[3]].name+"")&&de(B,S),(!E||ae[0]&7340032)&&ue!==(ue=ii(F[20],F[21],F[22])+"")&&(U.innerHTML=ue);const Ie={};!Y&&ae[0]&524296&&(Y=!0,Ie.gameNumber=F[19][F[3]],Tt(()=>Y=!1)),le.$set(Ie)},i(F){E||(F&&Ze(()=>{E&&(j||(j=Oe(e,xt,{duration:150},!0)),j.run(1))}),$(le.$$.fragment,F),$(x.$$.fragment,F),E=!0)},o(F){F&&(j||(j=Oe(e,xt,{duration:150},!1)),j.run(0)),re(le.$$.fragment,F),re(x.$$.fragment,F),E=!1},d(F){F&&(I(e),I(he),I(te)),F&&j&&j.end(),Be(le,F),Be(x,F)}}}function Ol(n){let e,t,s,i,r,o,l,a,c,u,f,d=n[13][n[3]].name+"",m;return{c(){e=p("div"),t=H(`Yesterday's item was...
                `),s=p("div"),i=p("a"),r=p("img"),l=b(),a=p("iconify-icon"),u=b(),f=p("span"),m=H(d),nt(r.src,o=Xt+n[13][n[3]].image)||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-105j5xd"),Ye(a,"icon","tabler:link"),Ye(a,"class","svelte-105j5xd"),_(i,"class","flex fjc-center fai-center svelte-105j5xd"),_(i,"href",c=Mn+n[13][n[3]].link),_(i,"target","_blank"),_(s,"class","itemImg ff-item flex svelte-105j5xd"),_(s,"id","previousItemImg"),_(f,"class","ff-item itemName svelte-105j5xd"),_(f,"id","previousItemName"),_(e,"class","previousItemCont ff-bg flex fd-col fai-center rg-1 border-tp br-1 bs svelte-105j5xd")},m(g,v){k(g,e,v),h(e,t),h(e,s),h(s,i),h(i,r),h(i,l),h(i,a),h(e,u),h(e,f),h(f,m)},p(g,v){v[0]&8200&&!nt(r.src,o=Xt+g[13][g[3]].image)&&_(r,"src",o),v[0]&8200&&c!==(c=Mn+g[13][g[3]].link)&&_(i,"href",c),v[0]&8200&&d!==(d=g[13][g[3]].name+"")&&de(m,d)},d(g){g&&I(e)}}}function Ml(n){let e,t,s,i,r;var o=n[24].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=Os(o,l())),{c(){e=p("div"),t&&He(t.$$.fragment),_(e,"class","promptCont")},m(a,c){k(a,e,c),t&&xe(t,e,null),n[53](e),s=!0,i||(r=Re(e,"click",n[54]),i=!0)},p(a,c){if(c[0]&16777216&&o!==(o=a[24].component)){if(t){Et();const u=t;re(u.$$.fragment,1,0,()=>{Be(u,1)}),It()}o?(t=Os(o,l()),He(t.$$.fragment),$(t.$$.fragment,1),xe(t,e,null)):t=null}},i(a){s||(t&&$(t.$$.fragment,a),s=!0)},o(a){t&&re(t.$$.fragment,a),s=!1},d(a){a&&I(e),t&&Be(t),n[53](null),i=!1,r()}}}function Ll(n){let e,t,s,i,r,o,l;var a=n[24].component;function c(u,f){return{props:{prompted:!0}}}return a&&(s=Os(a,c())),{c(){e=p("div"),t=p("div"),s&&He(s.$$.fragment),_(t,"class","flex fd-col border-tp br-1 bs"),_(e,"class","promptCont")},m(u,f){k(u,e,f),h(e,t),s&&xe(s,t,null),n[56](e),r=!0,o||(l=[Re(t,"introstart",n[55]),Re(e,"click",n[57])],o=!0)},p(u,f){if(f[0]&16777216&&a!==(a=u[24].component)){if(s){Et();const d=s;re(d.$$.fragment,1,0,()=>{Be(d,1)}),It()}a?(s=Os(a,c()),He(s.$$.fragment),$(s.$$.fragment,1),xe(s,t,null)):s=null}},i(u){r||(s&&$(s.$$.fragment,u),u&&Ze(()=>{r&&(i||(i=Oe(t,it,{duration:200},!0)),i.run(1))}),r=!0)},o(u){s&&re(s.$$.fragment,u),u&&(i||(i=Oe(t,it,{duration:200},!1)),i.run(0)),r=!1},d(u){u&&I(e),s&&Be(s),u&&i&&i.end(),n[56](null),o=!1,at(l)}}}function hm(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v,w,N,T,R,D,A,O,C,S,B,K,ee=yn(n[8])&&yn(n[7])&&n[10],V,J,ce,U;Ze(n[40]);let ue=be(n[30]),j=[];for(let E=0;E<ue.length;E+=1)j[E]=kl(Sl(n,ue,E));let he=n[24].component&&Tl(),le=be(n[30]),Y=[];for(let E=0;E<le.length;E+=1)Y[E]=Nl(Il(n,le,E));let te=n[11]&&Rl(n);B=new Zp({props:{version:Zi}});let x=ee&&Dl(n);return{c(){e=b();for(let E=0;E<j.length;E+=1)j[E].c();t=bt(),he&&he.c(),s=bt(),i=b(),r=p("div"),o=p("audio"),c=b(),u=p("audio"),m=b(),g=p("audio"),N=b(),T=p("audio"),A=b(),O=p("div");for(let E=0;E<Y.length;E+=1)Y[E].c();C=b(),te&&te.c(),S=b(),He(B.$$.fragment),K=b(),x&&x.c(),V=bt(),nt(o.src,l="audio/lucky.mp3")||_(o,"src",l),o.muted=a=n[9].muted,nt(u.src,f="audio/farewell.mp3")||_(u,"src",f),u.muted=d=n[9].muted,nt(g.src,v="audio/heDidItAgain.mp3")||_(g,"src",v),g.muted=w=n[9].muted,nt(T.src,R="audio/fishCatch.mp3")||_(T,"src",R),T.muted=D=n[9].muted,_(O,"class","backgrounds")},m(E,P){k(E,e,P);for(let G=0;G<j.length;G+=1)j[G]&&j[G].m(Kn.head,null);h(Kn.head,t),he&&he.m(Kn.head,null),h(Kn.head,s),k(E,i,P),k(E,r,P),h(r,o),n[42](o),h(r,c),h(r,u),n[43](u),h(r,m),h(r,g),n[44](g),h(r,N),h(r,T),n[45](T),k(E,A,P),k(E,O,P);for(let G=0;G<Y.length;G+=1)Y[G]&&Y[G].m(O,null);k(E,C,P),te&&te.m(E,P),k(E,S,P),xe(B,E,P),k(E,K,P),x&&x.m(E,P),k(E,V,P),J=!0,ce||(U=[Re(wn,"storage",n[37]),Re(wn,"wheel",n[38],{passive:!1}),Re(wn,"keydown",n[39]),Re(wn,"resize",n[40]),Re(Kn,"visibilitychange",n[41])],ce=!0)},p(E,P){if(P[0]&1073741824){ue=be(E[30]);let G;for(G=0;G<ue.length;G+=1){const F=Sl(E,ue,G);j[G]?j[G].p(F,P):(j[G]=kl(F),j[G].c(),j[G].m(t.parentNode,t))}for(;G<j.length;G+=1)j[G].d(1);j.length=ue.length}if(E[24].component?he||(he=Tl(),he.c(),he.m(s.parentNode,s)):he&&(he.d(1),he=null),(!J||P[0]&512&&a!==(a=E[9].muted))&&(o.muted=a),(!J||P[0]&512&&d!==(d=E[9].muted))&&(u.muted=d),(!J||P[0]&512&&w!==(w=E[9].muted))&&(g.muted=w),(!J||P[0]&512&&D!==(D=E[9].muted))&&(T.muted=D),P[0]&1082130432){le=be(E[30]);let G;for(G=0;G<le.length;G+=1){const F=Il(E,le,G);Y[G]?Y[G].p(F,P):(Y[G]=Nl(F),Y[G].c(),Y[G].m(O,null))}for(;G<Y.length;G+=1)Y[G].d(1);Y.length=le.length}E[11]?te?(te.p(E,P),P[0]&2048&&$(te,1)):(te=Rl(E),te.c(),$(te,1),te.m(S.parentNode,S)):te&&(Et(),re(te,1,1,()=>{te=null}),It()),P[0]&1408&&(ee=yn(E[8])&&yn(E[7])&&E[10]),ee?x?(x.p(E,P),P[0]&1408&&$(x,1)):(x=Dl(E),x.c(),$(x,1),x.m(V.parentNode,V)):x&&(Et(),re(x,1,1,()=>{x=null}),It())},i(E){J||($(te),$(B.$$.fragment,E),$(x),J=!0)},o(E){re(te),re(B.$$.fragment,E),re(x),J=!1},d(E){E&&(I(e),I(i),I(r),I(A),I(O),I(C),I(S),I(K),I(V)),lt(j,E),I(t),he&&he.d(E),I(s),n[42](null),n[43](null),n[44](null),n[45](null),lt(Y,E),te&&te.d(E),Be(B,E),x&&x.d(E),ce=!1,at(U)}}}let Zi="v1.1.2";function ii(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function fm(n,e,t){let s,i,r,o,l,a,c,u,f,d,m,g,v,w,N,T;pe(n,Nn,y=>t(4,o=y)),pe(n,un,y=>t(5,l=y)),pe(n,si,y=>t(36,a=y)),pe(n,Ct,y=>t(6,c=y)),pe(n,Fo,y=>t(7,u=y)),pe(n,ni,y=>t(8,f=y)),pe(n,yt,y=>t(9,d=y)),pe(n,dt,y=>t(24,m=y)),pe(n,ps,y=>t(64,g=y)),pe(n,Mt,y=>t(25,v=y)),pe(n,sn,y=>t(65,w=y)),pe(n,Xi,y=>t(66,N=y)),pe(n,hn,y=>t(26,T=y));let R,D,A=!1,O=7,C=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],S=!1,B,K,ee={},V={},J=["version","builds","changelogSeen","fd-userId"],ce,U,ue,j,he,le=0;Xc(()=>{if(t(10,A=!0),!N)_e(Xi,N=!0,N),_e(dt,m.component=Lc,m);else if(w.showAgain){for(let De in o)le+=o[De].gamesPlayed;let y=Math.floor((le-w.lastGamesPlayed)/3);y&&y>=w.timesDenied&&(_e(sn,w.lastGamesPlayed=le,w),_e(dt,m.component=lm,m))}});function Y(){B=setTimeout(()=>{t(11,S=!1)},750)}function te(){clearTimeout(B),t(11,S=!0),Y()}let x={equipment:19816,weapons:19818},E,P,G=58,F=58,ae=58,Ie;function Qe(){let y=0;clearInterval(Ie),E=Date.now()/1e3/60/60/24+y,t(19,P={equipment:Math.floor(E)-x.equipment,weapons:Math.floor(E)-x.weapons}),setTimeout(()=>{for(let De of["equipment","weapons"])v[De].gameNum!=P[De]+1&&(_e(Ct,c=Dt.currentGameData[d.mode],c),_e(Mt,v[De]=Dt.currentGameData[De],v),_e(Mt,v[De].gameNum=P[De]+1,v));H_(U_(G_(ap))).then(De=>{_e(Fo,u={equipment:De.val().rng_equipment_list[P.equipment],weapons:De.val().rng_weapons_list[P.weapons]},u),t(33,ee={equipment:De.val().rng_equipment_list[P.equipment-1],weapons:De.val().rng_weapons_list[P.weapons-1]})}),Ie=setInterval(()=>{let De=Date.now(),Hn=(Math.floor(E)+1-y)*24*60*60*1e3-De;t(20,G=Math.floor(Hn/1e3/60/60)),t(21,F=Math.floor(Hn%(1e3*60*60)/(1e3*60))),t(22,ae=Math.floor(Hn%(1e3*60)/1e3)),G==0&&F==0&&ae==0&&(_e(Ct,c=Dt.currentGameData[d.mode],c),_e(Mt,v.equipment=Dt.currentGameData.equipment,v),_e(Mt,v.weapons=Dt.currentGameData.weapons,v),setTimeout(Qe,1e3))},1e3)})}Qe();let qe=["equipment","weapons"];for(let y of qe)fetch(`https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/item-data/${y}Data.json`).then(async De=>{if(De.status!=200){console.error(`Failed to fetch ${y}!
Status: ${De.status}`);return}let Is=await De.json();_e(ni,f[y]=Is.sort((Hn,qc)=>Hn.name.toLowerCase().localeCompare(qc.name.toLowerCase())),f)});let Pe=[],Ge=[],ke,$e,ct=9;for(let y=0;y<ct;y++)Pe.push(`backgrounds/BG${y}.jpg`);function Se(y){$e=Math.floor(Math.random()*y.length)}Se(Pe);function ne(){t(23,ke=$e),Ge.push($e)}ne(),function y(){setTimeout(()=>{if(Se(Pe),!Ge.length)ne();else if(Ge.length>3&&(Ge=Ge.slice(1)),!Ge.includes($e))ne();else{let De=[...Array(ct).keys()].filter(Is=>!Ge.includes(Is));Se(De),ne()}document.visibilityState=="visible"&&y()},45e3)}(),localStorage.getItem("fd-version")!=Zi&&(_e(ps,g=!1,g),localStorage.setItem("fd-version",Zi));function Je(){_e(Ct,c.gameWin=!0,c),t(34,r.gamesPlayed++,r),t(34,r.gamesWon++,r),t(34,r.streak++,r),t(34,r.winInfo[c.chosenItems.length]++,r),(c.chosenItems.length===1?he:r.streak>=3?j:U).play()}function pt(){_e(Ct,c.gameOver=!0,c),t(34,r.gamesPlayed++,r),t(34,r.streak=0,r),ue.play()}function we(){_e(dt,m.component=null,m),_e(dt,m.complete=!1,m)}function fe(){let y=D>R;document.documentElement.style.fontSize=`${(y?.75:D/R*.8)*C[O]}vh`}const We=y=>{J.includes(y.key)?localStorage.setItem(y.key,y.oldValue):y.key=="fd-currentGameData"?y.url.includes("ls=true")?_e(Mt,v=JSON.parse(y.newValue),v):localStorage.setItem("fd-currentGameData",JSON.stringify(v)):y.key=="fd-settings"?y.url.includes("ls=true")?_e(yt,d=JSON.parse(y.newValue),d):localStorage.setItem("fd-settings",JSON.stringify(d)):y.key=="fd-playerStats"&&(y.url.includes("ls=true")?_e(Nn,o=JSON.parse(y.newValue),o):localStorage.setItem("fd-playerStats",JSON.stringify(o)))},Xe=y=>{let De=y.wheelDeltaY;if(y.ctrlKey){if(y.preventDefault(),C[O]==.2&&De<0||C[O]==5&&De>0)return;De>0?t(2,O++,O):t(2,O--,O),te()}},Ee=y=>{let De=["Enter"," ","Escape"];y.ctrlKey&&(y.key=="-"||y.key=="+"||y.code=="Equal"||y.key=="0")&&(y.preventDefault(),(y.key=="+"||y.code=="Equal")&&C[O]!=5?t(2,O++,O):y.key=="-"&&C[O]!=.2?t(2,O--,O):y.key=="0"&&C[O]!=1&&t(2,O=7),te()),m.component&&ce&&(!y.ctrlKey&&!y.shiftKey&&!y.altKey&&De.includes(y.key)?we():setTimeout(()=>{y.key=="Tab"&&!ce.contains(document.activeElement)&&we()}))};function X(){t(0,R=wn.outerHeight),t(1,D=wn.outerWidth)}const ie=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,R=window.outerHeight),t(1,D=window.outerWidth),fe()})};function q(y){Ve[y?"unshift":"push"](()=>{U=y,t(15,U)})}function se(y){Ve[y?"unshift":"push"](()=>{ue=y,t(16,ue)})}function Te(y){Ve[y?"unshift":"push"](()=>{j=y,t(17,j)})}function Q(y){Ve[y?"unshift":"push"](()=>{he=y,t(18,he)})}const ve=y=>{Ft(y),!T&&_e(yt,d.muted=!d.muted,d)},Ne=y=>{Ft(y),c.gameWin||c.gameOver?(location.hash="playerStats",Ji()):(_e(dt,m.complete=!0,m),_e(dt,m.component=Mc,m))},je=()=>{T||_e(dt,m.component=um,m)},M=y=>{if(c.chosenItems.length){y.detail.checked=!y.detail.checked;return}_e(un,l=y.detail.checked,l)};function gt(y){n.$$.not_equal(P[s],y)&&(P[s]=y,t(19,P))}function W(y){n.$$.not_equal(P[s],y)&&(P[s]=y,t(19,P))}function z(y){K=y,t(12,K),t(8,f),t(7,u),t(33,ee)}function Ke(y){Ve[y?"unshift":"push"](()=>{ce=y,t(14,ce)})}const jn=y=>{ce.children[0].contains(y.target)||we()},xn=()=>{let y=ce.querySelector("a, button, input");y&&y.focus()};function Bn(y){Ve[y?"unshift":"push"](()=>{ce=y,t(14,ce)})}const Gn=y=>{ce.children[0].contains(y.target)||we()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(R||D||O)&&fe(),n.$$.dirty[0]&512&&t(3,s=d.mode),n.$$.dirty[0]&384|n.$$.dirty[1]&4&&yn(f)&&yn(u)&&(t(12,K={equipment:f.equipment.find(y=>y.name==u.equipment),weapons:f.weapons.find(y=>y.name==u.weapons)}),t(13,V={equipment:f.equipment.find(y=>y.name==ee.equipment),weapons:f.weapons.find(y=>y.name==ee.weapons)})),n.$$.dirty[0]&32&&_e(si,a=l?6:7,a),n.$$.dirty[0]&200|n.$$.dirty[1]&32&&c.chosenItems.length&&!c.gameWin&&!c.gameOver&&(c.chosenItems[c.chosenItems.length-1].name==u[s]?Je():c.chosenItems.length==a&&pt()),n.$$.dirty[0]&40&&t(35,i=(l?"hard_":"")+s),n.$$.dirty[0]&16|n.$$.dirty[1]&16&&t(34,r=o[i]),n.$$.dirty[1]&8&&r.streak>r.maxStreak&&t(34,r.maxStreak=r.streak,r),n.$$.dirty[1]&24&&r&&Nn.update(y=>({...y,[i]:r}))},[R,D,O,s,o,l,c,u,f,d,A,S,K,V,ce,U,ue,j,he,P,G,F,ae,ke,m,v,T,C,J,te,Pe,we,fe,ee,r,i,a,We,Xe,Ee,X,ie,q,se,Te,Q,ve,Ne,je,M,gt,W,z,Ke,jn,xn,Bn,Gn]}class dm extends ft{constructor(e){super(),ht(this,e,fm,hm,st,{},null,[-1,-1,-1])}}new dm({target:document.body});
