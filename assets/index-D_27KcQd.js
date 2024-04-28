var Xc=Object.defineProperty;var Zc=(n,e,t)=>e in n?Xc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var zt=(n,e,t)=>(Zc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function ne(){}const ci=n=>n;function Ul(n){return n()}function Vr(){return Object.create(null)}function Qe(n){n.forEach(Ul)}function pn(n){return typeof n=="function"}function Je(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Ts;function Ke(n,e){return n===e?!0:(Ts||(Ts=document.createElement("a")),Ts.href=e,n===Ts.href)}function eu(n){return Object.keys(n).length===0}function zl(n,...e){if(n==null){for(const s of e)s(void 0);return ne}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ui(n){let e;return zl(n,t=>e=t)(),e}function oe(n,e,t){n.$$.on_destroy.push(zl(e,t))}function re(n,e,t){return n.set(t),e}function Vl(n){return n&&pn(n.destroy)?n.destroy:ne}const Yl=typeof window<"u";let ar=Yl?()=>window.performance.now():()=>Date.now(),cr=Yl?n=>requestAnimationFrame(n):ne;const En=new Set;function $l(n){En.forEach(e=>{e.c(n)||(En.delete(e),e.f())}),En.size!==0&&cr($l)}function ur(n){let e;return En.size===0&&cr($l),{promise:new Promise(t=>{En.add(e={c:n,f:t})}),abort(){En.delete(e)}}}const tu=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function f(n,e){n.appendChild(e)}function Kl(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function nu(n){const e=m("style");return e.textContent="/* empty */",su(Kl(n),e),e.sheet}function su(n,e){return f(n.head||n,e),e.sheet}function S(n,e,t){n.insertBefore(e,t||null)}function E(n){n.parentNode&&n.parentNode.removeChild(n)}function nt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function m(n){return document.createElement(n)}function iu(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Y(n){return document.createTextNode(n)}function b(){return Y(" ")}function _t(){return Y("")}function ve(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ge(n,e,t){const s=e.toLowerCase();s in n?n[s]=typeof n[s]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function Ls(n){return n===""?null:+n}function ru(n){return Array.from(n.childNodes)}function le(n,e){e=""+e,n.data!==e&&(n.data=e)}function Ns(n,e){n.value=e??""}function Dn(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function qe(n,e,t){n.classList.toggle(e,!!t)}function Ql(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class Jl{constructor(e=!1){zt(this,"is_svg",!1);zt(this,"e");zt(this,"n");zt(this,"t");zt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=iu(t.nodeName):this.e=m(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)S(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}function Fs(n,e){return new n(e)}const qs=new Map;let Ws=0;function ou(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function lu(n,e){const t={stylesheet:nu(e),rules:{}};return qs.set(n,t),t}function js(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let w=0;w<=1;w+=a){const N=e+(t-e)*r(w);c+=w*100+`%{${o(N,1-N)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,d=`__svelte_${ou(u)}_${l}`,h=Kl(n),{stylesheet:p,rules:g}=qs.get(h)||lu(h,n);g[d]||(g[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${d} ${s}ms linear ${i}ms 1 both`,Ws+=1,d}function fr(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),Ws-=i,Ws||au())}function au(){cr(()=>{Ws||(qs.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&E(e)}),qs.clear())})}function cu(n,e,t,s){if(!e)return ne;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return ne;const{delay:r=0,duration:o=300,easing:l=ci,start:a=ar()+r,end:c=a+o,tick:u=ne,css:d}=t(n,{from:e,to:i},s);let h=!0,p=!1,g;function v(){d&&(g=js(n,0,1,o,r,l,d)),r||(p=!0)}function w(){d&&fr(n,g),h=!1}return ur(N=>{if(!p&&N>=a&&(p=!0),p&&N>=c&&(u(1,0),w()),!h)return!1;if(p){const k=N-a,A=0+1*l(k/o);u(A,1-A)}return!0}),v(),u(0,1),w}function uu(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,fu(n,i)}}function fu(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let ss;function Jn(n){ss=n}function Xl(){if(!ss)throw new Error("Function called outside component initialization");return ss}function hu(n){Xl().$$.on_mount.push(n)}function Zl(){const n=Xl();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=Ql(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const wn=[],Be=[];let In=[];const Wi=[],du=Promise.resolve();let ji=!1;function _u(){ji||(ji=!0,du.then(ea))}function Ve(n){In.push(n)}function kt(n){Wi.push(n)}const Si=new Set;let vn=0;function ea(){if(vn!==0)return;const n=ss;do{try{for(;vn<wn.length;){const e=wn[vn];vn++,Jn(e),pu(e.$$)}}catch(e){throw wn.length=0,vn=0,e}for(Jn(null),wn.length=0,vn=0;Be.length;)Be.pop()();for(let e=0;e<In.length;e+=1){const t=In[e];Si.has(t)||(Si.add(t),t())}In.length=0}while(wn.length);for(;Wi.length;)Wi.pop()();ji=!1,Si.clear(),Jn(n)}function pu(n){if(n.fragment!==null){n.update(),Qe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ve)}}function mu(n){const e=[],t=[];In.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),In=e}let zn;function ta(){return zn||(zn=Promise.resolve(),zn.then(()=>{zn=null})),zn}function Xn(n,e,t){n.dispatchEvent(Ql(`${e?"intro":"outro"}${t}`))}const Ps=new Set;let Lt;function bt(){Lt={r:0,c:[],p:Lt}}function yt(){Lt.r||Qe(Lt.c),Lt=Lt.p}function J(n,e){n&&n.i&&(Ps.delete(n),n.i(e))}function se(n,e,t,s){if(n&&n.o){if(Ps.has(n))return;Ps.add(n),Lt.c.push(()=>{Ps.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const na={duration:0};function gu(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=Lt;l.r+=1;let a;function c(){const{delay:u=0,duration:d=300,easing:h=ci,tick:p=ne,css:g}=i||na;g&&(o=js(n,1,0,d,u,h,g));const v=ar()+u,w=v+d;Ve(()=>Xn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),ur(N=>{if(r){if(N>=w)return p(0,1),Xn(n,!1,"end"),--l.r||Qe(l.c),!1;if(N>=v){const k=h((N-v)/d);p(1-k,k)}}return r})}return pn(i)?ta().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&fr(n,o),r=!1)}}}function ke(n,e,t,s){let r=e(n,t,{direction:"both"}),o=s?0:1,l=null,a=null,c=null,u;function d(){c&&fr(n,c)}function h(g,v){const w=g.b-o;return v*=Math.abs(w),{a:o,b:g.b,d:w,duration:v,start:g.start,end:g.start+v,group:g.group}}function p(g){const{delay:v=0,duration:w=300,easing:N=ci,tick:k=ne,css:A}=r||na,D={start:ar()+v,b:g};g||(D.group=Lt,Lt.r+=1),"inert"in n&&(g?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=D:(A&&(d(),c=js(n,o,g,w,v,N,A)),g&&k(0,1),l=h(D,w),Ve(()=>Xn(n,g,"start")),ur(R=>{if(a&&R>a.start&&(l=h(a,w),a=null,Xn(n,l.b,"start"),A&&(d(),c=js(n,o,l.b,l.duration,0,N,r.css))),l){if(R>=l.end)k(o=l.b,1-o),Xn(n,l.b,"end"),a||(l.b?d():--l.group.r||Qe(l.group.c)),l=null;else if(R>=l.start){const q=R-l.start;o=l.a+l.d*N(q/l.duration),k(o,1-o)}}return!!(l||a)}))}return{run(g){pn(r)?ta().then(()=>{r=r({direction:g?"in":"out"}),p(g)}):p(g)},end(){d(),l=a=null}}}function _e(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function vu(n,e){se(n,1,1,()=>{e.delete(n.key)})}function bu(n,e){n.f(),vu(n,e)}function yu(n,e,t,s,i,r,o,l,a,c,u,d){let h=n.length,p=r.length,g=h;const v={};for(;g--;)v[n[g].key]=g;const w=[],N=new Map,k=new Map,A=[];for(g=p;g--;){const P=d(i,r,g),I=t(P);let T=o.get(I);T?s&&A.push(()=>T.p(P,e)):(T=c(I,P),T.c()),N.set(I,w[g]=T),I in v&&k.set(I,Math.abs(g-v[I]))}const D=new Set,R=new Set;function q(P){J(P,1),P.m(l,u),o.set(P.key,P),u=P.first,p--}for(;h&&p;){const P=w[p-1],I=n[h-1],T=P.key,H=I.key;P===I?(u=P.first,h--,p--):N.has(H)?!o.has(T)||D.has(T)?q(P):R.has(H)?h--:k.get(T)>k.get(H)?(R.add(T),q(P)):(D.add(H),h--):(a(I,o),h--)}for(;h--;){const P=n[h];N.has(P.key)||a(P,o)}for(;p;)q(w[p-1]);return Qe(A),w}function Tt(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function Fe(n){n&&n.c()}function Me(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),Ve(()=>{const r=n.$$.on_mount.map(Ul).filter(pn);n.$$.on_destroy?n.$$.on_destroy.push(...r):Qe(r),n.$$.on_mount=[]}),i.forEach(Ve)}function Le(n,e){const t=n.$$;t.fragment!==null&&(mu(t.after_update),Qe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function wu(n,e){n.$$.dirty[0]===-1&&(wn.push(n),_u(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ot(n,e,t,s,i,r,o=null,l=[-1]){const a=ss;Jn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:ne,not_equal:i,bound:Vr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Vr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,h,...p)=>{const g=p.length?p[0]:h;return c.ctx&&i(c.ctx[d],c.ctx[d]=g)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](g),u&&wu(n,d)),h}):[],c.update(),u=!0,Qe(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const d=ru(e.target);c.fragment&&c.fragment.l(d),d.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&J(n.$$.fragment),Me(n,e.target,e.anchor),ea()}Jn(a)}class lt{constructor(){zt(this,"$$");zt(this,"$$set")}$destroy(){Le(this,1),this.$destroy=ne}$on(e,t){if(!pn(t))return ne;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!eu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Cu="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Cu);function sa(n){const e=n-1;return e*e*e+1}function Bt(n,{delay:e=0,duration:t=400,easing:s=ci}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}function Ze(n,{delay:e=0,duration:t=400,easing:s=sa,start:i=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-i,u=l*(1-r);return{delay:e,duration:t,easing:s,css:(d,h)=>`
			transform: ${a} scale(${1-c*h});
			opacity: ${l-u*h}
		`}}const bn=[];function pt(n,e=ne){let t;const s=new Set;function i(l){if(Je(n,l)&&(n=l,t)){const a=!bn.length;for(const c of s)c[1](),bn.push(c,n);if(a){for(let c=0;c<bn.length;c+=2)bn[c][0](bn[c+1]);bn.length=0}}}function r(l){i(l(n))}function o(l,a=ne){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||ne),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}var Yr={};/**
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
 */const x=function(n,e){if(!n)throw Fn(e)},Fn=function(n){return new Error("Firebase Database ("+ia.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const ra=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Eu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},hr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,d=(r&3)<<4|l>>4;let h=(l&15)<<2|c>>6,p=c&63;a||(p=64,o||(h=64)),s.push(t[u],t[d],t[h],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ra(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Eu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||d==null)throw new Iu;const h=r<<2|l>>4;if(s.push(h),c!==64){const p=l<<4&240|c>>2;if(s.push(p),d!==64){const g=c<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Iu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oa=function(n){const e=ra(n);return hr.encodeByteArray(e,!0)},xs=function(n){return oa(n).replace(/\./g,"")},xi=function(n){try{return hr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Su(n){return la(void 0,n)}function la(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ku(t)||(n[t]=la(n[t],e[t]));return n}function ku(n){return n!=="__proto__"}/**
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
 */function Tu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nu=()=>Tu().__FIREBASE_DEFAULTS__,Ru=()=>{if(typeof process>"u"||typeof Yr>"u")return;const n=Yr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Du=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xi(n[1]);return e&&JSON.parse(e)},aa=()=>{try{return Nu()||Ru()||Du()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Au=n=>{var e,t;return(t=(e=aa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Pu=n=>{const e=Au(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ca=()=>{var n;return(n=aa())===null||n===void 0?void 0:n.config};/**
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
 */class fi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ou(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xs(JSON.stringify(t)),xs(JSON.stringify(o)),""].join(".")}/**
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
 */function Mu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ua(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mu())}function Lu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fa(){return ia.NODE_ADMIN===!0}function Fu(){try{return typeof indexedDB=="object"}catch{return!1}}function qu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Wu="FirebaseError";class vs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Wu,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ju(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vs(i,l,s)}}function ju(n,e){return n.replace(xu,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const xu=/\{\$([^}]+)}/g;/**
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
 */function is(n){return JSON.parse(n)}function Ye(n){return JSON.stringify(n)}/**
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
 */const da=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=is(xi(r[0])||""),t=is(xi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Bu=function(n){const e=da(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Gu=function(n){const e=da(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ht(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function An(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function $r(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Bi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Kr(r)&&Kr(o)){if(!Bi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Kr(n){return n!==null&&typeof n=="object"}/**
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
 */function Hu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Uu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):d<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const h=(i<<5|i>>>27)+c+a+u+s[d]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function dr(n,e){return`${n} failed: ${e} argument `}/**
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
 */const zu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hi=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */class Vu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new fi;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($u(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yu(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yu(n){return n===en?void 0:n}function $u(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ku{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Te||(Te={}));const Qu={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},Ju=Te.INFO,Xu={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},Zu=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Xu[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _a{constructor(e){this.name=e,this._logLevel=Ju,this._logHandler=Zu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const ef=(n,e)=>e.some(t=>n instanceof t);let Qr,Jr;function tf(){return Qr||(Qr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nf(){return Jr||(Jr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pa=new WeakMap,Gi=new WeakMap,ma=new WeakMap,ki=new WeakMap,_r=new WeakMap;function sf(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Vt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pa.set(t,n)}).catch(()=>{}),_r.set(e,n),e}function rf(n){if(Gi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Gi.set(n,e)}let Hi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Gi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ma.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function of(n){Hi=n(Hi)}function lf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ti(this),e,...t);return ma.set(s,e.sort?e.sort():[e]),Vt(s)}:nf().includes(n)?function(...e){return n.apply(Ti(this),e),Vt(pa.get(this))}:function(...e){return Vt(n.apply(Ti(this),e))}}function af(n){return typeof n=="function"?lf(n):(n instanceof IDBTransaction&&rf(n),ef(n,tf())?new Proxy(n,Hi):n)}function Vt(n){if(n instanceof IDBRequest)return sf(n);if(ki.has(n))return ki.get(n);const e=af(n);return e!==n&&(ki.set(n,e),_r.set(e,n)),e}const Ti=n=>_r.get(n);function cf(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Vt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Vt(o.result),a.oldVersion,a.newVersion,Vt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const uf=["get","getKey","getAll","getAllKeys","count"],ff=["put","add","delete","clear"],Ni=new Map;function Xr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ni.get(e))return Ni.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=ff.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||uf.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return Ni.set(e,r),r}of(n=>({...n,get:(e,t,s)=>Xr(e,t)||n.get(e,t,s),has:(e,t)=>!!Xr(e,t)||n.has(e,t)}));/**
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
 */class hf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(df(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function df(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ui="@firebase/app",Zr="0.9.29";/**
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
 */const cn=new _a("@firebase/app"),_f="@firebase/app-compat",pf="@firebase/analytics-compat",mf="@firebase/analytics",gf="@firebase/app-check-compat",vf="@firebase/app-check",bf="@firebase/auth",yf="@firebase/auth-compat",wf="@firebase/database",Cf="@firebase/database-compat",Ef="@firebase/functions",If="@firebase/functions-compat",Sf="@firebase/installations",kf="@firebase/installations-compat",Tf="@firebase/messaging",Nf="@firebase/messaging-compat",Rf="@firebase/performance",Df="@firebase/performance-compat",Af="@firebase/remote-config",Pf="@firebase/remote-config-compat",Of="@firebase/storage",Mf="@firebase/storage-compat",Lf="@firebase/firestore",Ff="@firebase/firestore-compat",qf="firebase",Wf="10.9.0";/**
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
 */const zi="[DEFAULT]",jf={[Ui]:"fire-core",[_f]:"fire-core-compat",[mf]:"fire-analytics",[pf]:"fire-analytics-compat",[vf]:"fire-app-check",[gf]:"fire-app-check-compat",[bf]:"fire-auth",[yf]:"fire-auth-compat",[wf]:"fire-rtdb",[Cf]:"fire-rtdb-compat",[Ef]:"fire-fn",[If]:"fire-fn-compat",[Sf]:"fire-iid",[kf]:"fire-iid-compat",[Tf]:"fire-fcm",[Nf]:"fire-fcm-compat",[Rf]:"fire-perf",[Df]:"fire-perf-compat",[Af]:"fire-rc",[Pf]:"fire-rc-compat",[Of]:"fire-gcs",[Mf]:"fire-gcs-compat",[Lf]:"fire-fst",[Ff]:"fire-fst-compat","fire-js":"fire-js",[qf]:"fire-js-all"};/**
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
 */const Gs=new Map,Vi=new Map;function xf(n,e){try{n.container.addComponent(e)}catch(t){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hs(n){const e=n.name;if(Vi.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;Vi.set(e,n);for(const t of Gs.values())xf(t,n);return!0}function Bf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Gf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new ha("app","Firebase",Gf);/**
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
 */class Hf{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const Uf=Wf;function pr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:zi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(t||(t=ca()),!t)throw Yt.create("no-options");const r=Gs.get(i);if(r){if(Bi(t,r.options)&&Bi(s,r.config))return r;throw Yt.create("duplicate-app",{appName:i})}const o=new Ku(i);for(const a of Vi.values())o.addComponent(a);const l=new Hf(t,s,o);return Gs.set(i,l),l}function zf(n=zi){const e=Gs.get(n);if(!e&&n===zi&&ca())return pr();if(!e)throw Yt.create("no-app",{appName:n});return e}function Sn(n,e,t){var s;let i=(s=jf[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(l.join(" "));return}Hs(new rs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Vf="firebase-heartbeat-database",Yf=1,os="firebase-heartbeat-store";let Ri=null;function ga(){return Ri||(Ri=cf(Vf,Yf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(os)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),Ri}async function $f(n){try{const t=(await ga()).transaction(os),s=await t.objectStore(os).get(va(n));return await t.done,s}catch(e){if(e instanceof vs)cn.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(t.message)}}}async function eo(n,e){try{const s=(await ga()).transaction(os,"readwrite");await s.objectStore(os).put(e,va(n)),await s.done}catch(t){if(t instanceof vs)cn.warn(t.message);else{const s=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});cn.warn(s.message)}}}function va(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Kf=1024,Qf=30*24*60*60*1e3;class Jf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zf(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=to();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Qf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=to(),{heartbeatsToSend:s,unsentEntries:i}=Xf(this._heartbeatsCache.heartbeats),r=xs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function to(){return new Date().toISOString().substring(0,10)}function Xf(n,e=Kf){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),no(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),no(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Zf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fu()?qu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $f(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return eo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return eo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function no(n){return xs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function eh(n){Hs(new rs("platform-logger",e=>new hf(e),"PRIVATE")),Hs(new rs("heartbeat",e=>new Jf(e),"PRIVATE")),Sn(Ui,Zr,n),Sn(Ui,Zr,"esm2017"),Sn("fire-js","")}eh("");var th="firebase",nh="10.9.0";/**
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
 */Sn(th,nh,"app");var so={};const io="@firebase/database",ro="1.0.3";/**
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
 */let ba="";function sh(n){ba=n}/**
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
 */class ih{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ye(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:is(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class rh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ya=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ih(e)}}catch{}return new rh},sn=ya("localStorage"),Yi=ya("sessionStorage");/**
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
 */const kn=new _a("@firebase/database"),oh=function(){let n=1;return function(){return n++}}(),wa=function(n){const e=zu(n),t=new Uu;t.update(e);const s=t.digest();return hr.encodeByteArray(s)},bs=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=bs.apply(null,s):typeof s=="object"?e+=Ye(s):e+=s,e+=" "}return e};let an=null,oo=!0;const lh=function(n,e){x(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(kn.logLevel=Te.VERBOSE,an=kn.log.bind(kn),e&&Yi.set("logging_enabled",!0)):typeof n=="function"?an=n:(an=null,Yi.remove("logging_enabled"))},ut=function(...n){if(oo===!0&&(oo=!1,an===null&&Yi.get("logging_enabled")===!0&&lh(!0)),an){const e=bs.apply(null,n);an(e)}},ys=function(n){return function(...e){ut(n,...e)}},$i=function(...n){const e="FIREBASE INTERNAL ERROR: "+bs(...n);kn.error(e)},Gt=function(...n){const e=`FIREBASE FATAL ERROR: ${bs(...n)}`;throw kn.error(e),new Error(e)},wt=function(...n){const e="FIREBASE WARNING: "+bs(...n);kn.warn(e)},ah=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ca=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ch=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Pn="[MIN_NAME]",un="[MAX_NAME]",qn=function(n,e){if(n===e)return 0;if(n===Pn||e===un)return-1;if(e===Pn||n===un)return 1;{const t=lo(n),s=lo(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},uh=function(n,e){return n===e?0:n<e?-1:1},Vn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ye(e))},mr=function(n){if(typeof n!="object"||n===null)return Ye(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Ye(e[s]),t+=":",t+=mr(n[e[s]]);return t+="}",t},Ea=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Et(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ia=function(n){x(!Ca(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(u.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},fh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const _h=new RegExp("^-?(0*)\\d{1,10}$"),ph=-2147483648,mh=2147483647,lo=function(n){if(_h.test(n)){const e=Number(n);if(e>=ph&&e<=mh)return e}return null},Wn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw wt("Exception was thrown by user callback.",t),e},Math.floor(0))}},gh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class vh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class bh{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class Tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tn.OWNER="owner";/**
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
 */const gr="5",Sa="v",ka="s",Ta="r",Na="f",Ra=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Da="ls",Aa="p",Ki="ac",Pa="websocket",Oa="long_polling";/**
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
 */class Ma{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function yh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function La(n,e,t){x(typeof e=="string","typeof type must == string"),x(typeof t=="object","typeof params must == object");let s;if(e===Pa)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Oa)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yh(n)&&(t.ns=n.namespace);const i=[];return Et(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class wh{constructor(){this.counters_={}}incrementCounter(e,t=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Su(this.counters_)}}/**
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
 */const Di={},Ai={};function vr(n){const e=n.toString();return Di[e]||(Di[e]=new wh),Di[e]}function Ch(n,e){const t=n.toString();return Ai[t]||(Ai[t]=e()),Ai[t]}/**
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
 */class Eh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Wn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ao="start",Ih="close",Sh="pLPCommand",kh="pRTLPCB",Fa="id",qa="pw",Wa="ser",Th="cb",Nh="seg",Rh="ts",Dh="d",Ah="dframe",ja=1870,xa=30,Ph=ja-xa,Oh=25e3,Mh=3e4;class Cn{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ys(e),this.stats_=vr(t),this.urlFn=a=>(this.appCheckToken&&(a[Ki]=this.appCheckToken),La(t,Oa,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Eh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mh)),ch(()=>{if(this.isClosed_)return;this.scriptTagHolder=new br((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ao)this.id=l,this.password=a;else if(o===Ih)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ao]="t",s[Wa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Th]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Sa]=gr,this.transportSessionId&&(s[ka]=this.transportSessionId),this.lastSessionId&&(s[Da]=this.lastSessionId),this.applicationId&&(s[Aa]=this.applicationId),this.appCheckToken&&(s[Ki]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ra.test(location.hostname)&&(s[Ta]=Na);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cn.forceAllow_=!0}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){return Cn.forceAllow_?!0:!Cn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fh()&&!hh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=oa(t),i=Ea(s,Ph);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ah]="t",s[Fa]=e,s[qa]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ye(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class br{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=oh(),window[Sh+this.uniqueCallbackIdentifier]=e,window[kh+this.uniqueCallbackIdentifier]=t,this.myIFrame=br.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ut("frame writing exception"),l.stack&&ut(l.stack),ut(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ut("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fa]=this.myID,e[qa]=this.myPW,e[Wa]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xa+s.length<=ja;){const o=this.pendingSegs.shift();s=s+"&"+Nh+i+"="+o.seg+"&"+Rh+i+"="+o.ts+"&"+Dh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Oh)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ut("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Lh=16384,Fh=45e3;let Us=null;typeof MozWebSocket<"u"?Us=MozWebSocket:typeof WebSocket<"u"&&(Us=WebSocket);class Nt{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ys(this.connId),this.stats_=vr(t),this.connURL=Nt.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Sa]=gr,typeof location<"u"&&location.hostname&&Ra.test(location.hostname)&&(o[Ta]=Na),t&&(o[ka]=t),s&&(o[Da]=s),i&&(o[Ki]=i),r&&(o[Aa]=r),La(e,Pa,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sn.set("previous_websocket_failure",!0);try{let s;fa(),this.mySock=new Us(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Us!==null&&!Nt.forceDisallow_}static previouslyFailed(){return sn.isInMemoryStorage||sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=is(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ea(t,Lh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nt.responsesRequiredToBeHealthy=2;Nt.healthyTimeout=3e4;/**
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
 */class ls{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cn,Nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Nt&&Nt.isAvailable();let s=t&&!Nt.previouslyFailed();if(e.webSocketOnly&&(t||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Nt];else{const i=this.transports_=[];for(const r of ls.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ls.globalTransportInitialized_=!1;/**
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
 */const qh=6e4,Wh=5e3,jh=10*1024,xh=100*1024,Pi="t",co="d",Bh="s",uo="r",Gh="e",fo="o",ho="a",_o="n",po="p",Hh="h";class Uh{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ys("c:"+this.id+":"),this.transportManager_=new ls(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pi in e){const t=e[Pi];t===ho?this.upgradeIfSecondaryHealthy_():t===uo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===fo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Vn("t",e),s=Vn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:po,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ho,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_o,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Vn("t",e),s=Vn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Vn(Pi,e);if(co in e){const s=e[co];if(t===Hh){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===_o){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Bh?this.onConnectionShutdown_(s):t===uo?this.onReset_(s):t===Gh?$i("Server Error: "+s):t===fo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$i("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),gr!==s&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Zn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Wh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:po,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ga{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class zs extends Ga{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ua()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zs}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const mo=32,go=768;class Ie{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function me(){return new Ie("")}function he(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Qt(n){return n.pieces_.length-n.pieceNum_}function Ne(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ie(n.pieces_,e)}function Ha(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function zh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ua(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function za(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ie(e,0)}function $e(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Ie(t,0)}function ce(n){return n.pieceNum_>=n.pieces_.length}function dt(n,e){const t=he(n),s=he(e);if(t===null)return e;if(t===s)return dt(Ne(n),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Va(n,e){if(Qt(n)!==Qt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Dt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Qt(n)>Qt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Vh{constructor(e,t){this.errorPrefix_=t,this.parts_=Ua(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=hi(this.parts_[s]);Ya(this)}}function Yh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=hi(e),Ya(n)}function $h(n){const e=n.parts_.pop();n.byteLength_-=hi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ya(n){if(n.byteLength_>go)throw new Error(n.errorPrefix_+"has a key path longer than "+go+" bytes ("+n.byteLength_+").");if(n.parts_.length>mo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mo+") or object contains a cycle "+tn(n))}function tn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class yr extends Ga{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new yr}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Yn=1e3,Kh=60*5*1e3,vo=30*1e3,Qh=1.3,Jh=3e4,Xh="server_kill",bo=3;class xt extends Ba{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yn,this.maxReconnectDelay_=Kh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!fa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Ye(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new fi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;xt.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ht(e,"w")){const s=An(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Bu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ye(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):$i("Unrecognized action received from server: "+Ye(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Jh&&(this.reconnectDelay_=Yn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Qh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(d){x(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ut("getToken() completed but was canceled"):(ut("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new Uh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{wt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xh)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&wt(d),a())}}}interrupt(e){ut("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ut("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$r(this.interruptReasons_)&&(this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>mr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Ie(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ut("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bo&&(this.reconnectDelay_=vo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ut("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ba.replace(/\./g,"-")]=1,ua()?e["framework.cordova"]=1:Lu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zs.getInstance().currentlyOnline();return $r(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
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
 */class ae{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ae(e,t)}}/**
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
 */class di{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ae(Pn,e),i=new ae(Pn,t);return this.compare(s,i)!==0}minPost(){return ae.MIN}}/**
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
 */let Rs;class $a extends di{static get __EMPTY_NODE(){return Rs}static set __EMPTY_NODE(e){Rs=e}compare(e,t){return qn(e.name,t.name)}isDefinedOn(e){throw Fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ae.MIN}maxPost(){return new ae(un,Rs)}makePost(e,t){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Rs)}toString(){return".key"}}const Nn=new $a;/**
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
 */class Ds{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??tt.RED,this.left=i??vt.EMPTY_NODE,this.right=r??vt.EMPTY_NODE}copy(e,t,s,i,r){return new tt(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class Zh{copy(e,t,s,i,r){return this}insert(e,t,s){return new tt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(e,t=vt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new vt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ds(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ds(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}vt.EMPTY_NODE=new Zh;/**
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
 */function ed(n,e){return qn(n.name,e.name)}function wr(n,e){return qn(n,e)}/**
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
 */let Qi;function td(n){Qi=n}const Ka=function(n){return typeof n=="number"?"number:"+Ia(n):"string:"+n},Qa=function(n){if(n.isLeafNode()){const e=n.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else x(n===Qi||n.isEmpty(),"priority of unexpected type.");x(n===Qi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let yo;class et{constructor(e,t=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qa(this.priorityNode_)}static set __childrenNodeConstructor(e){yo=e}static get __childrenNodeConstructor(){return yo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:he(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=he(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||Qt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ka(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ia(this.value_):e+=this.value_,this.lazyHash_=wa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=et.VALUE_TYPE_ORDER.indexOf(t),r=et.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+t),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ja,Xa;function nd(n){Ja=n}function sd(n){Xa=n}class id extends di{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?qn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(un,new et("[PRIORITY-POST]",Xa))}makePost(e,t){const s=Ja(e);return new ae(t,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const We=new id;/**
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
 */const rd=Math.log(2);class od{constructor(e){const t=r=>parseInt(Math.log(r)/rd,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vs=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let d,h;if(u===0)return null;if(u===1)return d=n[a],h=t?t(d):d,new tt(h,d.node,tt.BLACK,null,null);{const p=parseInt(u/2,10)+a,g=i(a,p),v=i(p+1,c);return d=n[p],h=t?t(d):d,new tt(h,d.node,tt.BLACK,g,v)}},r=function(a){let c=null,u=null,d=n.length;const h=function(g,v){const w=d-g,N=d;d-=g;const k=i(w+1,N),A=n[w],D=t?t(A):A;p(new tt(D,A.node,v,null,k))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(g+1));v?h(w,tt.BLACK):(h(w,tt.BLACK),h(w,tt.RED))}return u},o=new od(n.length),l=r(o);return new vt(s||e,l)};/**
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
 */let Oi;const yn={};class jt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return x(yn&&We,"ChildrenNode.ts has not been loaded"),Oi=Oi||new jt({".priority":yn},{".priority":We}),Oi}get(e){const t=An(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof vt?t:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,t){x(e!==Nn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(ae.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Vs(s,e.getCompare()):l=yn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new jt(u,c)}addToIndexes(e,t){const s=Bs(this.indexes_,(i,r)=>{const o=An(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===yn)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(ae.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Vs(l,o.getCompare())}else return yn;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new ae(e.name,l))),a.insert(e,e.node)}});return new jt(s,this.indexSet_)}removeFromIndexes(e,t){const s=Bs(this.indexes_,i=>{if(i===yn)return i;{const r=t.get(e.name);return r?i.remove(new ae(e.name,r)):i}});return new jt(s,this.indexSet_)}}/**
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
 */let $n;class te{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Qa(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $n||($n=new te(new vt(wr),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$n}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?$n:t}}getChild(e){const t=he(e);return t===null?this:this.getImmediateChild(t).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(x(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ae(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$n:this.priorityNode_;return new te(i,o,r)}}updateChild(e,t){const s=he(e);if(s===null)return t;{x(he(e)!==".priority"||Qt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ne(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(We,(o,l)=>{t[o]=l.val(e),s++,r&&te.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ka(this.getPriority().val())+":"),this.forEachChild(We,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":wa(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ae(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ae(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ae(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ws?-1:0}withIndex(e){if(e===Nn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Nn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(We),i=t.getIterator(We);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nn?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ld extends te{constructor(){super(new vt(wr),te.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const ws=new ld;Object.defineProperties(ae,{MIN:{value:new ae(Pn,te.EMPTY_NODE)},MAX:{value:new ae(un,ws)}});$a.__EMPTY_NODE=te.EMPTY_NODE;et.__childrenNodeConstructor=te;td(ws);sd(ws);/**
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
 */const ad=!0;function st(n,e=null){if(n===null)return te.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new et(t,st(e))}if(!(n instanceof Array)&&ad){const t=[];let s=!1;if(Et(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=st(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new ae(o,a)))}}),t.length===0)return te.EMPTY_NODE;const r=Vs(t,ed,o=>o.name,wr);if(s){const o=Vs(t,We.getCompare());return new te(r,st(e),new jt({".priority":o},{".priority":We}))}else return new te(r,st(e),jt.Default)}else{let t=te.EMPTY_NODE;return Et(n,(s,i)=>{if(Ht(n,s)&&s.substring(0,1)!=="."){const r=st(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(st(e))}}nd(st);/**
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
 */class cd extends di{constructor(e){super(),this.indexPath_=e,x(!ce(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?qn(e.name,t.name):r}makePost(e,t){const s=st(e),i=te.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(t,i)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,ws);return new ae(un,e)}toString(){return Ua(this.indexPath_,0).join("/")}}/**
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
 */class ud extends di{compare(e,t){const s=e.node.compareTo(t.node);return s===0?qn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,t){const s=st(e);return new ae(t,s)}toString(){return".value"}}const fd=new ud;/**
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
 */class Cr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(as(t,l)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(On(t,s)):o.trackChildChange(cs(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(We,(i,r)=>{t.hasChild(i)||s.trackChildChange(as(i,r))}),t.isLeafNode()||t.forEachChild(We,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(cs(i,r,o))}else s.trackChildChange(On(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class us{constructor(e){this.indexedFilter_=new Cr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=us.getStartPost_(e),this.endPost_=us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new ae(t,s))||(s=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=te.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(te.EMPTY_NODE);const r=this;return t.forEachChild(We,(o,l)=>{r.matches(new ae(o,l))||(i=i.updateImmediateChild(o,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class dd{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new ae(t,s))||(s=te.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=te.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(te.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const l=e;x(l.numChildren()===this.limit_,"");const a=new ae(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const d=l.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,a);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(cs(t,s,d)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(as(t,d));const v=l.updateImmediateChild(t,te.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(On(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(as(c.name,c.node)),r.trackChildChange(On(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,te.EMPTY_NODE)):e}}/**
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
 */class Er{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pn}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new Er;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _d(n){return n.loadsAllData()?new Cr(n.getIndex()):n.hasLimit()?new dd(n):new us(n)}function wo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===We?t="$priority":n.index_===fd?t="$value":n.index_===Nn?t="$key":(x(n.index_ instanceof cd,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ye(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Ye(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Ye(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Ye(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Ye(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Co(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==We&&(e.i=n.index_.toString()),e}/**
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
 */class Ys extends Ba{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ys("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ys.getListenId_(e,s),l={};this.listens_[o]=l;const a=wo(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),An(this.listens_,o)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,t){const s=Ys.getListenId_(e,t);delete this.listens_[s]}get(e){const t=wo(e._queryParams),s=e._path.toString(),i=new fi;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hu(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=is(l.responseText)}catch{wt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&wt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class pd{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function $s(){return{value:null,children:new Map}}function ec(n,e,t){if(ce(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=he(e);n.children.has(s)||n.children.set(s,$s());const i=n.children.get(s);e=Ne(e),ec(i,e,t)}}function Ji(n,e,t){n.value!==null?t(e,n.value):md(n,(s,i)=>{const r=new Ie(e.toString()+"/"+s);Ji(i,r,t)})}function md(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class gd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Et(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Eo=10*1e3,vd=30*1e3,bd=5*60*1e3;class yd{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gd(e);const s=Eo+(vd-Eo)*Math.random();Zn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Et(e,(i,r)=>{r>0&&Ht(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Zn(this.reportStats_.bind(this),Math.floor(Math.random()*2*bd))}}/**
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
 */var At;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(At||(At={}));function tc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ir(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ks{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=At.ACK_USER_WRITE,this.source=tc()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ie(e));return new Ks(me(),t,this.revert)}}else return x(he(this.path)===e,"operationForChild called for unrelated child."),new Ks(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class fs{constructor(e,t){this.source=e,this.path=t,this.type=At.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new fs(this.source,me()):new fs(this.source,Ne(this.path))}}/**
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
 */class fn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=At.OVERWRITE}operationForChild(e){return ce(this.path)?new fn(this.source,me(),this.snap.getImmediateChild(e)):new fn(this.source,Ne(this.path),this.snap)}}/**
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
 */class hs{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=At.MERGE}operationForChild(e){if(ce(this.path)){const t=this.children.subtree(new Ie(e));return t.isEmpty()?null:t.value?new fn(this.source,me(),t.value):new hs(this.source,me(),t)}else return x(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hs(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Jt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=he(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class wd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Cd(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(hd(o.childName,o.snapshotNode))}),Kn(n,i,"child_removed",e,s,t),Kn(n,i,"child_added",e,s,t),Kn(n,i,"child_moved",r,s,t),Kn(n,i,"child_changed",e,s,t),Kn(n,i,"value",e,s,t),i}function Kn(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>Id(n,l,a)),o.forEach(l=>{const a=Ed(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function Ed(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Id(n,e,t){if(e.childName==null||t.childName==null)throw Fn("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),i=new ae(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function _i(n,e){return{eventCache:n,serverCache:e}}function es(n,e,t,s){return _i(new Jt(e,t,s),n.serverCache)}function nc(n,e,t,s){return _i(n.eventCache,new Jt(e,t,s))}function Qs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function hn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Mi;const Sd=()=>(Mi||(Mi=new vt(uh)),Mi);class Ae{constructor(e,t=Sd()){this.value=e,this.children=t}static fromObject(e){let t=new Ae(null);return Et(e,(s,i)=>{t=t.set(new Ie(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:me(),value:this.value};if(ce(e))return null;{const s=he(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ne(e),t);return r!=null?{path:$e(new Ie(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const t=he(e),s=this.children.get(t);return s!==null?s.subtree(Ne(e)):new Ae(null)}}set(e,t){if(ce(e))return new Ae(t,this.children);{const s=he(e),r=(this.children.get(s)||new Ae(null)).set(Ne(e),t),o=this.children.insert(s,r);return new Ae(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const t=he(e),s=this.children.get(t);if(s){const i=s.remove(Ne(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Ae(null):new Ae(this.value,r)}else return this}}get(e){if(ce(e))return this.value;{const t=he(e),s=this.children.get(t);return s?s.get(Ne(e)):null}}setTree(e,t){if(ce(e))return t;{const s=he(e),r=(this.children.get(s)||new Ae(null)).setTree(Ne(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ae(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_($e(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,me(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(ce(e))return null;{const r=he(e),o=this.children.get(r);return o?o.findOnPath_(Ne(e),$e(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,me(),t)}foreachOnPath_(e,t,s){if(ce(e))return this;{this.value&&s(t,this.value);const i=he(e),r=this.children.get(i);return r?r.foreachOnPath_(Ne(e),$e(t,i),s):new Ae(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_($e(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Pt{constructor(e){this.writeTree_=e}static empty(){return new Pt(new Ae(null))}}function ts(n,e,t){if(ce(e))return new Pt(new Ae(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=dt(i,e);return r=r.updateChild(o,t),new Pt(n.writeTree_.set(i,r))}else{const i=new Ae(t),r=n.writeTree_.setTree(e,i);return new Pt(r)}}}function Io(n,e,t){let s=n;return Et(t,(i,r)=>{s=ts(s,$e(e,i),r)}),s}function So(n,e){if(ce(e))return Pt.empty();{const t=n.writeTree_.setTree(e,new Ae(null));return new Pt(t)}}function Xi(n,e){return gn(n,e)!=null}function gn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(dt(t.path,e)):null}function ko(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(We,(s,i)=>{e.push(new ae(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ae(s,i.value))}),e}function $t(n,e){if(ce(e))return n;{const t=gn(n,e);return t!=null?new Pt(new Ae(t)):new Pt(n.writeTree_.subtree(e))}}function Zi(n){return n.writeTree_.isEmpty()}function Mn(n,e){return sc(me(),n.writeTree_,e)}function sc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=sc($e(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild($e(n,".priority"),s)),t}}/**
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
 */function pi(n,e){return lc(e,n)}function kd(n,e,t,s,i){x(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=ts(n.visibleWrites,e,t)),n.lastWriteId=s}function Td(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Nd(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);x(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Rd(l,s.path)?i=!1:Dt(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Dd(n),!0;if(s.snap)n.visibleWrites=So(n.visibleWrites,s.path);else{const l=s.children;Et(l,a=>{n.visibleWrites=So(n.visibleWrites,$e(s.path,a))})}return!0}else return!1}function Rd(n,e){if(n.snap)return Dt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Dt($e(n.path,t),e))return!0;return!1}function Dd(n){n.visibleWrites=ic(n.allWrites,Ad,me()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ad(n){return n.visible}function ic(n,e,t){let s=Pt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)Dt(t,o)?(l=dt(t,o),s=ts(s,l,r.snap)):Dt(o,t)&&(l=dt(o,t),s=ts(s,me(),r.snap.getChild(l)));else if(r.children){if(Dt(t,o))l=dt(t,o),s=Io(s,l,r.children);else if(Dt(o,t))if(l=dt(o,t),ce(l))s=Io(s,me(),r.children);else{const a=An(r.children,he(l));if(a){const c=a.getChild(Ne(l));s=ts(s,me(),c)}}}else throw Fn("WriteRecord should have .snap or .children")}}return s}function rc(n,e,t,s,i){if(!s&&!i){const r=gn(n.visibleWrites,e);if(r!=null)return r;{const o=$t(n.visibleWrites,e);if(Zi(o))return t;if(t==null&&!Xi(o,me()))return null;{const l=t||te.EMPTY_NODE;return Mn(o,l)}}}else{const r=$t(n.visibleWrites,e);if(!i&&Zi(r))return t;if(!i&&t==null&&!Xi(r,me()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Dt(c.path,e)||Dt(e,c.path))},l=ic(n.allWrites,o,e),a=t||te.EMPTY_NODE;return Mn(l,a)}}}function Pd(n,e,t){let s=te.EMPTY_NODE;const i=gn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(We,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=$t(n.visibleWrites,e);return t.forEachChild(We,(o,l)=>{const a=Mn($t(r,new Ie(o)),l);s=s.updateImmediateChild(o,a)}),ko(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=$t(n.visibleWrites,e);return ko(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Od(n,e,t,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=$e(e,t);if(Xi(n.visibleWrites,r))return null;{const o=$t(n.visibleWrites,r);return Zi(o)?i.getChild(t):Mn(o,i.getChild(t))}}function Md(n,e,t,s){const i=$e(e,t),r=gn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=$t(n.visibleWrites,i);return Mn(o,s.getNode().getImmediateChild(t))}else return null}function Ld(n,e){return gn(n.visibleWrites,e)}function Fd(n,e,t,s,i,r,o){let l;const a=$t(n.visibleWrites,e),c=gn(a,me());if(c!=null)l=c;else if(t!=null)l=Mn(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],d=o.getCompare(),h=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let p=h.getNext();for(;p&&u.length<i;)d(p,s)!==0&&u.push(p),p=h.getNext();return u}else return[]}function qd(){return{visibleWrites:Pt.empty(),allWrites:[],lastWriteId:-1}}function Js(n,e,t,s){return rc(n.writeTree,n.treePath,e,t,s)}function kr(n,e){return Pd(n.writeTree,n.treePath,e)}function To(n,e,t,s){return Od(n.writeTree,n.treePath,e,t,s)}function Xs(n,e){return Ld(n.writeTree,$e(n.treePath,e))}function Wd(n,e,t,s,i,r){return Fd(n.writeTree,n.treePath,e,t,s,i,r)}function Tr(n,e,t){return Md(n.writeTree,n.treePath,e,t)}function oc(n,e){return lc($e(n.treePath,e),n.writeTree)}function lc(n,e){return{treePath:n,writeTree:e}}/**
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
 */class jd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;x(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,cs(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,as(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,On(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,cs(s,e.snapshotNode,i.oldSnap));else throw Fn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class xd{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ac=new xd;class Nr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hn(this.viewCache_),r=Wd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Bd(n){return{filter:n}}function Gd(n,e){x(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Hd(n,e,t,s,i){const r=new jd;let o,l;if(t.type===At.OVERWRITE){const c=t;c.source.fromUser?o=er(n,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=Zs(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===At.MERGE){const c=t;c.source.fromUser?o=zd(n,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=tr(n,e,c.path,c.children,s,i,l,r))}else if(t.type===At.ACK_USER_WRITE){const c=t;c.revert?o=$d(n,e,c.path,s,i,r):o=Vd(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===At.LISTEN_COMPLETE)o=Yd(n,e,t.path,s,r);else throw Fn("Unknown operation type: "+t.type);const a=r.getChanges();return Ud(e,o,a),{viewCache:o,changes:a}}function Ud(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Qs(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Za(Qs(e)))}}function cc(n,e,t,s,i,r){const o=e.eventCache;if(Xs(s,t)!=null)return e;{let l,a;if(ce(t))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hn(e),u=c instanceof te?c:te.EMPTY_NODE,d=kr(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Js(s,hn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=he(t);if(c===".priority"){x(Qt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const d=To(s,t,u,a);d!=null?l=n.filter.updatePriority(u,d):l=o.getNode()}else{const u=Ne(t);let d;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const h=To(s,t,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Tr(s,c,e.serverCache);d!=null?l=n.filter.updateChild(o.getNode(),c,d,u,i,r):l=o.getNode()}}return es(e,l,o.isFullyInitialized()||ce(t),n.filter.filtersNodes())}}function Zs(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(ce(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),p,null)}else{const p=he(t);if(!a.isCompleteForPath(t)&&Qt(t)>1)return e;const g=Ne(t),w=a.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=u.updatePriority(a.getNode(),w):c=u.updateChild(a.getNode(),p,w,g,ac,null)}const d=nc(e,c,a.isFullyInitialized()||ce(t),u.filtersNodes()),h=new Nr(i,d,r);return cc(n,d,t,i,h,l)}function er(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Nr(i,e,r);if(ce(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=es(e,c,!0,n.filter.filtersNodes());else{const d=he(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=es(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=Ne(t),p=l.getNode().getImmediateChild(d);let g;if(ce(h))g=s;else{const v=u.getCompleteChild(d);v!=null?Ha(h)===".priority"&&v.getChild(za(h)).isEmpty()?g=v:g=v.updateChild(h,s):g=te.EMPTY_NODE}if(p.equals(g))a=e;else{const v=n.filter.updateChild(l.getNode(),d,g,h,u,o);a=es(e,v,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function No(n,e){return n.eventCache.isCompleteForChild(e)}function zd(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=$e(t,a);No(e,he(u))&&(l=er(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=$e(t,a);No(e,he(u))||(l=er(n,l,u,c,i,r,o))}),l}function Ro(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function tr(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;ce(t)?c=s:c=new Ae(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=Ro(n,p,h);a=Zs(n,a,new Ie(d),g,i,r,o,l)}}),c.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),v=Ro(n,g,h);a=Zs(n,a,new Ie(d),v,i,r,o,l)}}),a}function Vd(n,e,t,s,i,r,o){if(Xs(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(ce(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Zs(n,e,t,a.getNode().getChild(t),i,r,l,o);if(ce(t)){let c=new Ae(null);return a.getNode().forEachChild(Nn,(u,d)=>{c=c.set(new Ie(u),d)}),tr(n,e,t,c,i,r,l,o)}else return e}else{let c=new Ae(null);return s.foreach((u,d)=>{const h=$e(t,u);a.isCompleteForPath(h)&&(c=c.set(u,a.getNode().getChild(h)))}),tr(n,e,t,c,i,r,l,o)}}function Yd(n,e,t,s,i){const r=e.serverCache,o=nc(e,r.getNode(),r.isFullyInitialized()||ce(t),r.isFiltered());return cc(n,o,t,s,ac,i)}function $d(n,e,t,s,i,r){let o;if(Xs(s,t)!=null)return e;{const l=new Nr(s,e,i),a=e.eventCache.getNode();let c;if(ce(t)||he(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Js(s,hn(e));else{const d=e.serverCache.getNode();x(d instanceof te,"serverChildren would be complete if leaf node"),u=kr(s,d)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=he(t);let d=Tr(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=a.getImmediateChild(u)),d!=null?c=n.filter.updateChild(a,u,d,Ne(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,te.EMPTY_NODE,Ne(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Js(s,hn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Xs(s,me())!=null,es(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Kd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Cr(s.getIndex()),r=_d(s);this.processor_=Bd(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(te.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(te.EMPTY_NODE,l.getNode(),null),u=new Jt(a,o.isFullyInitialized(),i.filtersNodes()),d=new Jt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=_i(d,u),this.eventGenerator_=new wd(this.query_)}get query(){return this.query_}}function Qd(n){return n.viewCache_.serverCache.getNode()}function Jd(n){return Qs(n.viewCache_)}function Xd(n,e){const t=hn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ce(e)&&!t.getImmediateChild(he(e)).isEmpty())?t.getChild(e):null}function Do(n){return n.eventRegistrations_.length===0}function Zd(n,e){n.eventRegistrations_.push(e)}function Ao(n,e,t){const s=[];if(t){x(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Po(n,e,t,s){e.type===At.MERGE&&e.source.queryId!==null&&(x(hn(n.viewCache_),"We should always have a full cache before handling merges"),x(Qs(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Hd(n.processor_,i,e,t,s);return Gd(n.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,uc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function e_(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(We,(r,o)=>{s.push(On(r,o))}),t.isFullyInitialized()&&s.push(Za(t.getNode())),uc(n,s,t.getNode(),e)}function uc(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Cd(n.eventGenerator_,e,t,i)}/**
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
 */let ei;class fc{constructor(){this.views=new Map}}function t_(n){x(!ei,"__referenceConstructor has already been defined"),ei=n}function n_(){return x(ei,"Reference.ts has not been loaded"),ei}function s_(n){return n.views.size===0}function Rr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),Po(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Po(o,e,t,s));return r}}function hc(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Js(t,i?s:null),a=!1;l?a=!0:s instanceof te?(l=kr(t,s),a=!1):(l=te.EMPTY_NODE,a=!1);const c=_i(new Jt(l,a,!1),new Jt(s,i,!1));return new Kd(e,c)}return o}function i_(n,e,t,s,i,r){const o=hc(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Zd(o,t),e_(o,t)}function r_(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Xt(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(Ao(c,t,s)),Do(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(Ao(a,t,s)),Do(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Xt(n)&&r.push(new(n_())(e._repo,e._path)),{removed:r,events:o}}function dc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Kt(n,e){let t=null;for(const s of n.views.values())t=t||Xd(s,e);return t}function _c(n,e){if(e._queryParams.loadsAllData())return mi(n);{const s=e._queryIdentifier;return n.views.get(s)}}function pc(n,e){return _c(n,e)!=null}function Xt(n){return mi(n)!=null}function mi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ti;function o_(n){x(!ti,"__referenceConstructor has already been defined"),ti=n}function l_(){return x(ti,"Reference.ts has not been loaded"),ti}let a_=1;class Oo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=qd(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mc(n,e,t,s,i){return kd(n.pendingWriteTree_,e,t,s,i),i?Es(n,new fn(tc(),e,t)):[]}function rn(n,e,t=!1){const s=Td(n.pendingWriteTree_,e);if(Nd(n.pendingWriteTree_,e)){let r=new Ae(null);return s.snap!=null?r=r.set(me(),!0):Et(s.children,o=>{r=r.set(new Ie(o),!0)}),Es(n,new Ks(s.path,r,t))}else return[]}function Cs(n,e,t){return Es(n,new fn(Ir(),e,t))}function c_(n,e,t){const s=Ae.fromObject(t);return Es(n,new hs(Ir(),e,s))}function u_(n,e){return Es(n,new fs(Ir(),e))}function f_(n,e,t){const s=Ar(n,t);if(s){const i=Pr(s),r=i.path,o=i.queryId,l=dt(r,e),a=new fs(Sr(o),l);return Or(n,r,a)}else return[]}function gc(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||pc(o,e))){const a=r_(o,e,t,s);s_(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,p)=>Xt(p));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=p_(h);for(let g=0;g<p.length;++g){const v=p[g],w=v.query,N=wc(n,v);n.listenProvider_.startListening(ns(w),ds(n,w),N.hashFn,N.onComplete)}}}!d&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(ns(e),null):c.forEach(h=>{const p=n.queryToTagMap.get(gi(h));n.listenProvider_.stopListening(ns(h),p)}))}m_(n,c)}return l}function vc(n,e,t,s){const i=Ar(n,s);if(i!=null){const r=Pr(i),o=r.path,l=r.queryId,a=dt(o,e),c=new fn(Sr(l),a,t);return Or(n,o,c)}else return[]}function h_(n,e,t,s){const i=Ar(n,s);if(i){const r=Pr(i),o=r.path,l=r.queryId,a=dt(o,e),c=Ae.fromObject(t),u=new hs(Sr(l),a,c);return Or(n,o,u)}else return[]}function d_(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(h,p)=>{const g=dt(h,i);r=r||Kt(p,g),o=o||Xt(p)});let l=n.syncPointTree_.get(i);l?(o=o||Xt(l),r=r||Kt(l,me())):(l=new fc,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=te.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,g)=>{const v=Kt(g,me());v&&(r=r.updateImmediateChild(p,v))}));const c=pc(l,e);if(!c&&!e._queryParams.loadsAllData()){const h=gi(e);x(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=g_();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const u=pi(n.pendingWriteTree_,i);let d=i_(l,e,t,u,r,a);if(!c&&!o&&!s){const h=_c(l,e);d=d.concat(v_(n,e,h))}return d}function Dr(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=dt(o,e),c=Kt(l,a);if(c)return c});return rc(i,e,r,t,!0)}function __(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=dt(c,t);s=s||Kt(u,d)});let i=n.syncPointTree_.get(t);i?s=s||Kt(i,me()):(i=new fc,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Jt(s,!0,!1):null,l=pi(n.pendingWriteTree_,e._path),a=hc(i,e,l,r?o.getNode():te.EMPTY_NODE,r);return Jd(a)}function Es(n,e){return bc(e,n.syncPointTree_,null,pi(n.pendingWriteTree_,me()))}function bc(n,e,t,s){if(ce(n.path))return yc(n,e,t,s);{const i=e.get(me());t==null&&i!=null&&(t=Kt(i,me()));let r=[];const o=he(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=oc(s,o);r=r.concat(bc(l,a,c,u))}return i&&(r=r.concat(Rr(i,n,s,t))),r}}function yc(n,e,t,s){const i=e.get(me());t==null&&i!=null&&(t=Kt(i,me()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=oc(s,o),u=n.operationForChild(o);u&&(r=r.concat(yc(u,l,a,c)))}),i&&(r=r.concat(Rr(i,n,s,t))),r}function wc(n,e){const t=e.query,s=ds(n,t);return{hashFn:()=>(Qd(e)||te.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?f_(n,t._path,s):u_(n,t._path);{const r=dh(i,t);return gc(n,t,null,r)}}}}function ds(n,e){const t=gi(e);return n.queryToTagMap.get(t)}function gi(n){return n._path.toString()+"$"+n._queryIdentifier}function Ar(n,e){return n.tagToQueryMap.get(e)}function Pr(n){const e=n.indexOf("$");return x(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ie(n.substr(0,e))}}function Or(n,e,t){const s=n.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=pi(n.pendingWriteTree_,e);return Rr(s,t,i,null)}function p_(n){return n.fold((e,t,s)=>{if(t&&Xt(t))return[mi(t)];{let i=[];return t&&(i=dc(t)),Et(s,(r,o)=>{i=i.concat(o)}),i}})}function ns(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(l_())(n._repo,n._path):n}function m_(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=gi(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function g_(){return a_++}function v_(n,e,t){const s=e._path,i=ds(n,e),r=wc(n,t),o=n.listenProvider_.startListening(ns(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)x(!Xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,d)=>{if(!ce(c)&&u&&Xt(u))return[mi(u).query];{let h=[];return u&&(h=h.concat(dc(u).map(p=>p.query))),Et(d,(p,g)=>{h=h.concat(g)}),h}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(ns(u),ds(n,u))}}return o}/**
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
 */class Mr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Mr(t)}node(){return this.node_}}class Lr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=$e(this.path_,e);return new Lr(this.syncTree_,t)}node(){return Dr(this.syncTree_,this.path_)}}const b_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Mo=function(n,e,t){if(!n||typeof n!="object")return n;if(x(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return y_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return w_(n[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},y_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:x(!1,"Unexpected server value: "+n)}},w_=function(n,e,t){n.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},C_=function(n,e,t,s){return Fr(e,new Lr(t,n),s)},Cc=function(n,e,t){return Fr(n,new Mr(e),t)};function Fr(n,e,t){const s=n.getPriority().val(),i=Mo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Mo(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new et(l,st(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new et(i))),o.forEachChild(We,(l,a)=>{const c=Fr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class qr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Wr(n,e){let t=e instanceof Ie?e:new Ie(e),s=n,i=he(t);for(;i!==null;){const r=An(s.node.children,i)||{children:{},childCount:0};s=new qr(i,s,r),t=Ne(t),i=he(t)}return s}function jn(n){return n.node.value}function Ec(n,e){n.node.value=e,nr(n)}function Ic(n){return n.node.childCount>0}function E_(n){return jn(n)===void 0&&!Ic(n)}function vi(n,e){Et(n.node.children,(t,s)=>{e(new qr(t,n,s))})}function Sc(n,e,t,s){t&&!s&&e(n),vi(n,i=>{Sc(i,e,!0,s)}),t&&s&&e(n)}function I_(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Is(n){return new Ie(n.parent===null?n.name:Is(n.parent)+"/"+n.name)}function nr(n){n.parent!==null&&S_(n.parent,n.name,n)}function S_(n,e,t){const s=E_(t),i=Ht(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,nr(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,nr(n))}/**
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
 */const k_=/[\[\].#$\/\u0000-\u001F\u007F]/,T_=/[\[\].#$\u0000-\u001F\u007F]/,Li=10*1024*1024,kc=function(n){return typeof n=="string"&&n.length!==0&&!k_.test(n)},Tc=function(n){return typeof n=="string"&&n.length!==0&&!T_.test(n)},N_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Tc(n)},R_=function(n,e,t,s){s&&e===void 0||jr(dr(n,"value"),e,t)},jr=function(n,e,t){const s=t instanceof Ie?new Vh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+tn(s));if(typeof e=="function")throw new Error(n+"contains a function "+tn(s)+" with contents = "+e.toString());if(Ca(e))throw new Error(n+"contains "+e.toString()+" "+tn(s));if(typeof e=="string"&&e.length>Li/3&&hi(e)>Li)throw new Error(n+"contains a string greater than "+Li+" utf8 bytes "+tn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Et(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!kc(o)))throw new Error(n+" contains an invalid key ("+o+") "+tn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Yh(s,o),jr(n,l,s),$h(s)}),i&&r)throw new Error(n+' contains ".value" child '+tn(s)+" in addition to actual children.")}},Nc=function(n,e,t,s){if(!(s&&t===void 0)&&!Tc(t))throw new Error(dr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},D_=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Nc(n,e,t,s)},A_=function(n,e){if(he(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},P_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!N_(t))throw new Error(dr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class O_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rc(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Va(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Wt(n,e,t){Rc(n,t),M_(n,s=>Dt(s,e)||Dt(e,s))}function M_(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(L_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function L_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();an&&ut("event: "+t.toString()),Wn(s)}}}/**
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
 */const F_="repo_interrupt",q_=25;class W_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new O_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$s(),this.transactionQueueTree_=new qr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function j_(n,e,t){if(n.stats_=vr(n.repoInfo_),n.forceRestClient_||gh())n.server_=new Ys(n.repoInfo_,(s,i,r,o)=>{Lo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Fo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ye(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new xt(n.repoInfo_,e,(s,i,r,o)=>{Lo(n,s,i,r,o)},s=>{Fo(n,s)},s=>{B_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ch(n.repoInfo_,()=>new yd(n.stats_,n.server_)),n.infoData_=new pd,n.infoSyncTree_=new Oo({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=Cs(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Br(n,"connected",!1),n.serverSyncTree_=new Oo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Wt(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function x_(n){const t=n.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function xr(n){return b_({timestamp:x_(n)})}function Lo(n,e,t,s,i){n.dataUpdateCount++;const r=new Ie(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Bs(t,c=>st(c));o=h_(n.serverSyncTree_,r,a,i)}else{const a=st(t);o=vc(n.serverSyncTree_,r,a,i)}else if(s){const a=Bs(t,c=>st(c));o=c_(n.serverSyncTree_,r,a)}else{const a=st(t);o=Cs(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=yi(n,r)),Wt(n.eventQueue_,l,o)}function Fo(n,e){Br(n,"connected",e),e===!1&&U_(n)}function B_(n,e){Et(e,(t,s)=>{Br(n,t,s)})}function Br(n,e,t){const s=new Ie("/.info/"+e),i=st(t);n.infoData_.updateSnapshot(s,i);const r=Cs(n.infoSyncTree_,s,i);Wt(n.eventQueue_,s,r)}function Dc(n){return n.nextWriteId_++}function G_(n,e,t){const s=__(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=st(i).withIndex(e._queryParams.getIndex());d_(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Cs(n.serverSyncTree_,e._path,r);else{const l=ds(n.serverSyncTree_,e);o=vc(n.serverSyncTree_,e._path,r,l)}return Wt(n.eventQueue_,e._path,o),gc(n.serverSyncTree_,e,t,null,!0),r},i=>(bi(n,"get for query "+Ye(e)+" failed: "+i),Promise.reject(new Error(i))))}function H_(n,e,t,s,i){bi(n,"set",{path:e.toString(),value:t,priority:s});const r=xr(n),o=st(t,s),l=Dr(n.serverSyncTree_,e),a=Cc(o,l,r),c=Dc(n),u=mc(n.serverSyncTree_,e,a,c,!0);Rc(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const g=h==="ok";g||wt("set at "+e+" failed: "+h);const v=rn(n.serverSyncTree_,c,!g);Wt(n.eventQueue_,e,v),V_(n,i,h,p)});const d=Lc(n,e);yi(n,d),Wt(n.eventQueue_,d,[])}function U_(n){bi(n,"onDisconnectEvents");const e=xr(n),t=$s();Ji(n.onDisconnect_,me(),(i,r)=>{const o=C_(i,r,n.serverSyncTree_,e);ec(t,i,o)});let s=[];Ji(t,me(),(i,r)=>{s=s.concat(Cs(n.serverSyncTree_,i,r));const o=Lc(n,i);yi(n,o)}),n.onDisconnect_=$s(),Wt(n.eventQueue_,me(),s)}function z_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(F_)}function bi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ut(t,...e)}function V_(n,e,t,s){e&&Wn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ac(n,e,t){return Dr(n.serverSyncTree_,e,t)||te.EMPTY_NODE}function Gr(n,e=n.transactionQueueTree_){if(e||wi(n,e),jn(e)){const t=Oc(n,e);x(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Y_(n,Is(e),t)}else Ic(e)&&vi(e,t=>{Gr(n,t)})}function Y_(n,e,t){const s=t.map(c=>c.currentWriteId),i=Ac(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=dt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{bi(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(rn(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();wi(n,Wr(n.transactionQueueTree_,e)),Gr(n,n.transactionQueueTree_),Wt(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)Wn(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{wt("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}yi(n,e)}},o)}function yi(n,e){const t=Pc(n,e),s=Is(t),i=Oc(n,t);return $_(n,i,s),s}function $_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=dt(t,a.path);let u=!1,d;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,d=a.abortReason,i=i.concat(rn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=q_)u=!0,d="maxretry",i=i.concat(rn(n.serverSyncTree_,a.currentWriteId,!0));else{const h=Ac(n,a.path,o);a.currentInputSnapshot=h;const p=e[l].update(h.val());if(p!==void 0){jr("transaction failed: Data returned ",p,a.path);let g=st(p);typeof p=="object"&&p!=null&&Ht(p,".priority")||(g=g.updatePriority(h.getPriority()));const w=a.currentWriteId,N=xr(n),k=Cc(g,h,N);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=k,a.currentWriteId=Dc(n),o.splice(o.indexOf(w),1),i=i.concat(mc(n.serverSyncTree_,a.path,k,a.currentWriteId,a.applyLocally)),i=i.concat(rn(n.serverSyncTree_,w,!0))}else u=!0,d="nodata",i=i.concat(rn(n.serverSyncTree_,a.currentWriteId,!0))}Wt(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}wi(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Wn(s[l]);Gr(n,n.transactionQueueTree_)}function Pc(n,e){let t,s=n.transactionQueueTree_;for(t=he(e);t!==null&&jn(s)===void 0;)s=Wr(s,t),e=Ne(e),t=he(e);return s}function Oc(n,e){const t=[];return Mc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Mc(n,e,t){const s=jn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);vi(e,i=>{Mc(n,i,t)})}function wi(n,e){const t=jn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ec(e,t.length>0?t:void 0)}vi(e,s=>{wi(n,s)})}function Lc(n,e){const t=Is(Pc(n,e)),s=Wr(n.transactionQueueTree_,e);return I_(s,i=>{Fi(n,i)}),Fi(n,s),Sc(s,i=>{Fi(n,i)}),t}function Fi(n,e){const t=jn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(x(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(rn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ec(e,void 0):t.length=r+1,Wt(n.eventQueue_,Is(e),i);for(let o=0;o<s.length;o++)Wn(s[o])}}/**
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
 */function K_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Q_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):wt(`Invalid query segment '${t}' in query '${n}'`)}return e}const qo=function(n,e){const t=J_(n),s=t.namespace;t.domain==="firebase.com"&&Gt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ah();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ma(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Ie(t.pathString)}},J_=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(i=K_(n.substring(u,d)));const h=Q_(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class X_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ye(this.snapshot.exportVal())}}class Z_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ep{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Hr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return ce(this._path)?null:Ha(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=Co(this._queryParams),t=mr(e);return t==="{}"?"default":t}get _queryObject(){return Co(this._queryParams)}isEqual(e){if(e=mn(e),!(e instanceof Hr))return!1;const t=this._repo===e._repo,s=Va(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zh(this._path)}}class Ut extends Hr{constructor(e,t){super(e,t,new Er,!1)}get parent(){const e=za(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ie(e),s=ps(this.ref,e);return new _s(this._node.getChild(t),s,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new _s(i,ps(this.ref,s),We)))}hasChild(e){const t=new Ie(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function sr(n,e){return n=mn(n),n._checkNotDeleted("ref"),e!==void 0?ps(n._root,e):n._root}function ps(n,e){return n=mn(n),he(n._path)===null?D_("child","path",e,!1):Nc("child","path",e,!1),new Ut(n._repo,$e(n._path,e))}function Fc(n,e){n=mn(n),A_("set",n._path),R_("set",e,n._path,!1);const t=new fi;return H_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function tp(n){n=mn(n);const e=new ep(()=>{}),t=new Ur(e);return G_(n._repo,n,t).then(s=>new _s(s,new Ut(n._repo,n._path),n._queryParams.getIndex()))}class Ur{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new X_("value",this,new _s(e.snapshotNode,new Ut(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Z_(this,e,t):null}matches(e){return e instanceof Ur?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function np(n,...e){let t=mn(n);for(const s of e)t=s._apply(t);return t}t_(Ut);o_(Ut);/**
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
 */const sp="FIREBASE_DATABASE_EMULATOR_HOST",ir={};let ip=!1;function rp(n,e,t,s){n.repoInfo_=new Ma(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function op(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ut("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=qo(r,i),l=o.repoInfo,a,c;typeof process<"u"&&so&&(c=so[sp]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=qo(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Tn(Tn.OWNER):new bh(n.name,n.options,e);P_("Invalid Firebase Database URL",o),ce(o.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ap(l,n,u,new vh(n.name,t));return new cp(d,n)}function lp(n,e){const t=ir[e];(!t||t[n.key]!==n)&&Gt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),z_(n),delete t[n.key]}function ap(n,e,t,s){let i=ir[e.name];i||(i={},ir[e.name]=i);let r=i[n.toURLString()];return r&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new W_(n,ip,t,s),i[n.toURLString()]=r,r}class cp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(j_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lp(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gt("Cannot call "+e+" on a deleted database.")}}function qc(n=zf(),e){const t=Bf(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Pu("database");s&&up(t,...s)}return t}function up(n,e,t,s={}){n=mn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Gt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Tn(Tn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Ou(s.mockUserToken,n.app.options.projectId);r=new Tn(o)}rp(i,e,t,r)}/**
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
 */function fp(n){sh(Uf),Hs(new rs("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return op(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Sn(io,ro,n),Sn(io,ro,"esm2017")}xt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};fp();var ms={},Wc={},Ci={};Object.defineProperty(Ci,"__esModule",{value:!0});Ci.rotx=void 0;function hp(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}Ci.rotx=hp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=Ci;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(Wc);var jc={},Ei={};Object.defineProperty(Ei,"__esModule",{value:!0});Ei.base64=void 0;class dp{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const _p=new dp;Ei.base64=_p;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=Ei;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(jc);var xc={},Ii={};Object.defineProperty(Ii,"__esModule",{value:!0});Ii.hex=void 0;class pp{encode(e){let t="",s="";for(let i=0;i<e.length;i++)t=e.charCodeAt(i).toString(16),s+=("000"+t).slice(-4);return s}decode(e){let t=e.match(/.{1,4}/g)||[],s="";for(let i=0;i<t.length;i++)s+=String.fromCharCode(parseInt(t[i],16));return s}}const mp=new pp;Ii.hex=mp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=Ii;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(xc);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=Wc;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=jc;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var s=xc;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return s.hex}})})(ms);let gp={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},Bc={},vp={ixqSmg:"IQhiAgLdRq06vESQ81ncFDq8YCUrePFURt-_wRQ",icbpLwuiqv:"nzwvbqmzltm-zwwua.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-zwwua-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm-zwwua",abwziomJcksmb:"nzwvbqmzltm-zwwua.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"932448152432",ixxQl:"1:932448152432:emj:77m89n4801k6703i3i7lj5",umiaczmumvbQl:"O-ZSNPG52H5N"},Gc={};for(let[n,e]of Object.entries(gp))Bc[ms.rotx(n,18)]=ms.rotx(e,18);for(let[n,e]of Object.entries(vp))Gc[ms.rotx(n,18)]=ms.rotx(e,18);let ni={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},si={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},bp=["head","body","legs","feet","neck","back","ring","misc"],ii={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",none:"None"},yp=qc(pr(Bc,"fd")),Hc=qc(pr(Gc,"fd-rooms")),Ln="https://fantastic-frontier-roblox.fandom.com/wiki/",Zt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Rt={currentGameData:{equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1}},settings:{muted:!1,hardMode:{equipment:!1,weapons:!1,endless_equipment:!1,endless_weapons:!1},mode:"equipment"},playerStats:{equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},hard_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},hard_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},endless_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0},endless_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0}}},wp={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function rr(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function Ft(n){n.target.closest("button").blur()}function on(n){return Object.keys(n).length}function qt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function zr(){if(ui(li)){li.set(!1);return}rr("?ls=true"),setTimeout(rr)}let Wo=localStorage.getItem("fd-currentGameData"),jo=localStorage.getItem("fd-settings"),xo=localStorage.getItem("fd-playerStats"),Bo=localStorage.getItem("fd-changelogSeen"),Go=localStorage.getItem("fd-helpSeen"),Ho=localStorage.getItem("fd-supportMe");localStorage.getItem("fd-userId");let Mt=pt(Wo?JSON.parse(Wo):Rt.currentGameData),gt=pt(),Ct=pt(jo?{...JSON.parse(jo),mode:"equipment"}:Rt.settings),dn=pt(),Rn=pt(xo?JSON.parse(xo):Rt.playerStats),ri=pt({}),Uo=pt({}),rt=pt({component:null,complete:!1}),Os=pt({host:!1,id:null}),oi=pt(7),_n=pt(!1),gs=pt(Bo?JSON.parse(Bo):!1),or=pt(Go?JSON.parse(Go):!1),ln=pt(Ho?JSON.parse(Ho):{showAgain:!0,timesDenied:0,lastGamesPlayed:0}),li=pt(!1),zo=[Mt,Ct,Rn];for(let n=0;n<zo.length;n++){let e=ui(zo[n]),t=Rt[Object.keys(Rt)[n]];for(let s of Object.keys(t))e[s]===void 0&&(e[s]=t[s]);for(let s of Object.keys(e))t[s]===void 0&&delete e[s]}Ct.subscribe(n=>{zr(),gt.set(ui(Mt)[n.mode]),dn.set(n.hardMode[n.mode]),localStorage.setItem("fd-settings",JSON.stringify(n))});Mt.subscribe(n=>{zr(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});gt.subscribe(n=>{Mt.update(e=>({...e,[ui(Ct).mode]:n}))});Rn.subscribe(n=>{zr(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});dn.subscribe(n=>{Ct.update(e=>({...e,hardMode:{...e.hardMode,[e.mode]:n}})),oi.set(n?6:7)});gs.subscribe(n=>localStorage.setItem("fd-changelogSeen",JSON.stringify(n)));or.subscribe(n=>localStorage.setItem("fd-helpSeen",JSON.stringify(n)));ln.subscribe(n=>localStorage.setItem("fd-supportMe",JSON.stringify(n)));function Cp(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:d=p=>Math.sqrt(p)*120,easing:h=sa}=s;return{delay:u,duration:pn(d)?d(Math.sqrt(a*a+c*c)):d,easing:h,css:(p,g)=>{const v=g*a,w=g*c,N=p+g*e.width/t.width,k=p+g*e.height/t.height;return`transform: ${r} translate(${v}px, ${w}px) scale(${N}, ${k});`}}}function Vo(n,e,t){const s=n.slice();s[12]=e[t];const i=s[5][s[0].mode].find(function(...A){return n[11](s[12],...A)});s[13]=i;const r=s[2]?null:s[13].special==s[1].special;s[14]=r;const o=s[2]?null:qi(s[1].types,s[13].types);s[15]=o;const l=s[2]?null:s[15]==s[1].types.length&&s[13].types.length==s[1].types.length;s[16]=l;const a=s[2]?s[13].slot==s[1].slot:null;s[17]=a;const c=s[2]?qi(s[1].stats,s[13].stats):null;s[18]=c;const u=s[2]?s[18]==s[1].stats.length&&s[13].stats.length==s[1].stats.length:null;s[19]=u;const d=Math.ceil((s[13].cost.min+s[13].cost.max)/2);s[20]=d;const h=Math.ceil((s[1].cost.min+s[1].cost.max)/2);s[21]=h;const p=s[20]==s[21];s[22]=p;const g=qi(s[1].colors,s[13].colors);s[23]=g;const v=s[23]==s[1].colors.length&&s[13].colors.length==s[1].colors.length;s[24]=v;const w=s[13].outline==s[1].outline;s[25]=w;const N=s[13].release==s[1].release;return s[26]=N,s}function Yo(n,e,t){const s=n.slice();return s[29]=e[t],s}function $o(n,e,t){const s=n.slice();return s[35]=e[t],s}function Ko(n,e,t){const s=n.slice();return s[32]=e[t],s}function Qo(n){let e=[],t=new Map,s,i,r=_e(n[4].chosenItems.toReversed());const o=l=>l[12];for(let l=0;l<r.length;l+=1){let a=Vo(n,r,l),c=o(a);t.set(c,e[l]=il(c,a))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=_t()},m(l,a){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(l,a);S(l,s,a),i=!0},p(l,a){if(a[0]&255){r=_e(l[4].chosenItems.toReversed()),bt();for(let c=0;c<e.length;c+=1)e[c].r();e=yu(e,a,o,1,l,r,t,s.parentNode,bu,il,s,Vo);for(let c=0;c<e.length;c+=1)e[c].a();yt()}},i(l){if(!i){for(let a=0;a<r.length;a+=1)J(e[a]);i=!0}},o(l){for(let a=0;a<e.length;a+=1)se(e[a]);i=!1},d(l){l&&E(s);for(let a=0;a<e.length;a+=1)e[a].d(l)}}}function Ep(n){let e,t;function s(l,a){return l[13].types.length?kp:Sp}let i=s(n),r=i(n),o=!n[6]&&n[15]&&!n[16]&&Xo(n);return{c(){r.c(),e=b(),o&&o.c(),t=_t()},m(l,a){r.m(l,a),S(l,e,a),o&&o.m(l,a),S(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[6]&&l[15]&&!l[16]?o?o.p(l,a):(o=Xo(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(E(e),E(t)),r.d(l),o&&o.d(l)}}}function Ip(n){let e,t;function s(l,a){return l[13].stats.length?Np:Tp}let i=s(n),r=i(n),o=!n[6]&&n[18]&&!n[19]&&el(n);return{c(){r.c(),e=b(),o&&o.c(),t=_t()},m(l,a){r.m(l,a),S(l,e,a),o&&o.m(l,a),S(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[6]&&l[18]&&!l[19]?o?o.p(l,a):(o=el(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(E(e),E(t)),r.d(l),o&&o.d(l)}}}function Sp(n){let e;return{c(){e=Y("None")},m(t,s){S(t,e,s)},p:ne,d(t){t&&E(e)}}}function kp(n){let e,t=_e(n[13].types),s=[];for(let i=0;i<t.length;i+=1)s[i]=Jo($o(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=_t()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);S(i,e,r)},p(i,r){if(r[0]&49){t=_e(i[13].types);let o;for(o=0;o<t.length;o+=1){const l=$o(i,t,o);s[o]?s[o].p(l,r):(s[o]=Jo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&E(e),nt(s,i)}}}function Jo(n){let e=ii[n[35]]+(n[35]==n[13].types[n[13].types.length-1]?"":", "),t;return{c(){t=Y(e)},m(s,i){S(s,t,i)},p(s,i){i[0]&49&&e!==(e=ii[s[35]]+(s[35]==s[13].types[s[13].types.length-1]?"":", "))&&le(t,e)},d(s){s&&E(t)}}}function Xo(n){let e,t=n[15]+"",s;return{c(){e=m("span"),s=Y(t),_(e,"class","bgInfo")},m(i,r){S(i,e,r),f(e,s)},p(i,r){r[0]&55&&t!==(t=i[15]+"")&&le(s,t)},d(i){i&&E(e)}}}function Tp(n){let e;return{c(){e=Y("None")},m(t,s){S(t,e,s)},p:ne,d(t){t&&E(e)}}}function Np(n){let e,t=_e(n[13].stats),s=[];for(let i=0;i<t.length;i+=1)s[i]=Zo(Ko(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=_t()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);S(i,e,r)},p(i,r){if(r[0]&49){t=_e(i[13].stats);let o;for(o=0;o<t.length;o+=1){const l=Ko(i,t,o);s[o]?s[o].p(l,r):(s[o]=Zo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&E(e),nt(s,i)}}}function Zo(n){let e=si[n[32]]+(n[32]==n[13].stats[n[13].stats.length-1]?"":", "),t;return{c(){t=Y(e)},m(s,i){S(s,t,i)},p(s,i){i[0]&49&&e!==(e=si[s[32]]+(s[32]==s[13].stats[s[13].stats.length-1]?"":", "))&&le(t,e)},d(s){s&&E(t)}}}function el(n){let e,t=n[18]+"",s;return{c(){e=m("span"),s=Y(t),_(e,"class","bgInfo")},m(i,r){S(i,e,r),f(e,s)},p(i,r){r[0]&55&&t!==(t=i[18]+"")&&le(s,t)},d(i){i&&E(e)}}}function Rp(n){let e=n[20].toLocaleString()+"",t,s,i,r;return{c(){t=Y(e),s=b(),i=m("br"),r=Y(`\r
                        Gold`)},m(o,l){S(o,t,l),S(o,s,l),S(o,i,l),S(o,r,l)},p(o,l){l[0]&49&&e!==(e=o[20].toLocaleString()+"")&&le(t,e)},d(o){o&&(E(t),E(s),E(i),E(r))}}}function Dp(n){let e;return{c(){e=Y("Unpurchasable")},m(t,s){S(t,e,s)},p:ne,d(t){t&&E(e)}}}function tl(n){let e,t;return{c(){e=m("iconify-icon"),Ge(e,"class","bgInfo"),Ge(e,"icon","mingcute:arrow-up-fill"),Ge(e,"flip",t=n[20]>n[21]?"vertical":"")},m(s,i){S(s,e,i)},p(s,i){i[0]&51&&t!==(t=s[20]>s[21]?"vertical":"")&&Ge(e,"flip",t)},d(s){s&&E(e)}}}function nl(n){let e=(n[29]==n[13].colors[0]?qt(n[29]):n[29])+(n[29]==n[13].colors[n[13].colors.length-1]?"":", "),t;return{c(){t=Y(e)},m(s,i){S(s,t,i)},p(s,i){i[0]&49&&e!==(e=(s[29]==s[13].colors[0]?qt(s[29]):s[29])+(s[29]==s[13].colors[s[13].colors.length-1]?"":", "))&&le(t,e)},d(s){s&&E(t)}}}function sl(n){let e,t=n[23]+"",s;return{c(){e=m("span"),s=Y(t),_(e,"class","bgInfo")},m(i,r){S(i,e,r),f(e,s)},p(i,r){r[0]&51&&t!==(t=i[23]+"")&&le(s,t)},d(i){i&&E(e)}}}function il(n,e){let t,s,i,r,o,l,a,c,u,d,h,p=e[13].name+"",g,v,w,N,k,A=(e[2]?qt(e[13].slot):e[13].special?"Yes":"No")+"",D,R,q,P,I,T,H,z,B,Z,ue,G,O,F,ie,X,$,Q,W,y=qt(e[13].outline)+"",M,V,L,pe,be,at=ni[e[13].release]+"",je,ft,It,Ce,ze,St,Re=ne,fe,it,ht;function Ot(ee,de){return ee[2]?Ip:Ep}let He=Ot(e),Se=He(e);function Xe(ee,de){return ee[13].cost.min==null?Dp:Rp}let ct=Xe(e),ge=ct(e),De=!e[6]&&!e[22]&&e[20]&&tl(e),ye=_e(e[13].colors),xe=[];for(let ee=0;ee<ye.length;ee+=1)xe[ee]=nl(Yo(e,ye,ee));let Pe=!e[6]&&e[23]&&!e[24]&&sl(e);return{key:n,first:null,c(){t=m("div"),s=m("div"),i=m("a"),r=m("img"),a=b(),c=m("iconify-icon"),d=b(),h=m("span"),g=Y(p),N=b(),k=m("span"),D=Y(A),P=b(),I=m("span"),Se.c(),z=b(),B=m("span"),ge.c(),Z=b(),De&&De.c(),O=b(),F=m("span");for(let ee=0;ee<xe.length;ee+=1)xe[ee].c();ie=b(),Pe&&Pe.c(),Q=b(),W=m("span"),M=Y(y),pe=b(),be=m("span"),je=Y(at),ft=Y(" Update"),ze=b(),Ke(r.src,o=Zt+e[13].image)||_(r,"src",o),_(r,"alt",l=e[13].name),_(r,"class","svelte-1iqikjy"),Ge(c,"icon","tabler:link"),Ge(c,"class","svelte-1iqikjy"),_(i,"class","flex fjc-center fai-center svelte-1iqikjy"),_(i,"href",u=Ln+e[13].link),_(i,"target","_blank"),_(h,"class","tooltip"),_(h,"id","right"),_(s,"id","itemImage"),_(s,"class","ff-item svelte-1iqikjy"),_(k,"class","ff-bg ff-item svelte-1iqikjy"),_(k,"id",R=(e[2]?e[17]:e[14])?"correct":"wrong"),_(I,"class","ff-bg ff-item svelte-1iqikjy"),_(I,"id",T=(e[2]?e[19]:e[16])?"correct":(e[2]?e[18]:e[15])?"partial":"wrong"),qe(I,"smallerStats",e[2]&&e[13].stats.length>=7),_(B,"class","ff-bg ff-item svelte-1iqikjy"),_(B,"id",ue=e[22]?"correct":"wrong"),_(F,"class","ff-bg ff-item svelte-1iqikjy"),_(F,"id",X=e[24]?"correct":e[23]?"partial":"wrong"),_(W,"class","ff-bg ff-item svelte-1iqikjy"),_(W,"id",V=e[25]?"correct":"wrong"),_(be,"class","ff-bg ff-item svelte-1iqikjy"),_(be,"id",It=e[26]?"correct":"wrong"),_(t,"class","itemRow svelte-1iqikjy"),this.first=t},m(ee,de){S(ee,t,de),f(t,s),f(s,i),f(i,r),f(i,a),f(i,c),f(s,d),f(s,h),f(h,g),f(t,N),f(t,k),f(k,D),f(t,P),f(t,I),Se.m(I,null),f(t,z),f(t,B),ge.m(B,null),f(B,Z),De&&De.m(B,null),f(t,O),f(t,F);for(let we=0;we<xe.length;we+=1)xe[we]&&xe[we].m(F,null);f(F,ie),Pe&&Pe.m(F,null),f(t,Q),f(t,W),f(W,M),f(t,pe),f(t,be),f(be,je),f(be,ft),f(t,ze),fe=!0,it||(ht=[Vl(v=e[8].call(null,s,[e[14],e[15],e[16],e[17],e[18],e[19],e[22],e[23],e[24],e[25],e[26]])),ve(be,"introend",e[10])],it=!0)},p(ee,de){if(e=ee,(!fe||de[0]&49&&!Ke(r.src,o=Zt+e[13].image))&&_(r,"src",o),(!fe||de[0]&49&&l!==(l=e[13].name))&&_(r,"alt",l),(!fe||de[0]&49&&u!==(u=Ln+e[13].link))&&_(i,"href",u),(!fe||de[0]&49)&&p!==(p=e[13].name+"")&&le(g,p),v&&pn(v.update)&&de[0]&55&&v.update.call(null,[e[14],e[15],e[16],e[17],e[18],e[19],e[22],e[23],e[24],e[25],e[26]]),(!fe||de[0]&53)&&A!==(A=(e[2]?qt(e[13].slot):e[13].special?"Yes":"No")+"")&&le(D,A),(!fe||de[0]&55&&R!==(R=(e[2]?e[17]:e[14])?"correct":"wrong"))&&_(k,"id",R),He===(He=Ot(e))&&Se?Se.p(e,de):(Se.d(1),Se=He(e),Se&&(Se.c(),Se.m(I,null))),(!fe||de[0]&55&&T!==(T=(e[2]?e[19]:e[16])?"correct":(e[2]?e[18]:e[15])?"partial":"wrong"))&&_(I,"id",T),(!fe||de[0]&53)&&qe(I,"smallerStats",e[2]&&e[13].stats.length>=7),ct===(ct=Xe(e))&&ge?ge.p(e,de):(ge.d(1),ge=ct(e),ge&&(ge.c(),ge.m(B,Z))),!e[6]&&!e[22]&&e[20]?De?De.p(e,de):(De=tl(e),De.c(),De.m(B,null)):De&&(De.d(1),De=null),(!fe||de[0]&51&&ue!==(ue=e[22]?"correct":"wrong"))&&_(B,"id",ue),de[0]&49){ye=_e(e[13].colors);let we;for(we=0;we<ye.length;we+=1){const Oe=Yo(e,ye,we);xe[we]?xe[we].p(Oe,de):(xe[we]=nl(Oe),xe[we].c(),xe[we].m(F,ie))}for(;we<xe.length;we+=1)xe[we].d(1);xe.length=ye.length}!e[6]&&e[23]&&!e[24]?Pe?Pe.p(e,de):(Pe=sl(e),Pe.c(),Pe.m(F,null)):Pe&&(Pe.d(1),Pe=null),(!fe||de[0]&51&&X!==(X=e[24]?"correct":e[23]?"partial":"wrong"))&&_(F,"id",X),(!fe||de[0]&49)&&y!==(y=qt(e[13].outline)+"")&&le(M,y),(!fe||de[0]&51&&V!==(V=e[25]?"correct":"wrong"))&&_(W,"id",V),(!fe||de[0]&49)&&at!==(at=ni[e[13].release]+"")&&le(je,at),(!fe||de[0]&51&&It!==(It=e[26]?"correct":"wrong"))&&_(be,"id",It)},r(){St=t.getBoundingClientRect()},f(){uu(t),Re()},a(){Re(),Re=cu(t,St,Cp,{duration:125})},i(ee){fe||(ee&&Ve(()=>{fe&&(w||(w=ke(s,Ze,{duration:e[3]?0:300},!0)),w.run(1))}),ee&&Ve(()=>{fe&&(q||(q=ke(k,Ze,{duration:e[3]?0:300,delay:e[3]?0:250},!0)),q.run(1))}),ee&&Ve(()=>{fe&&(H||(H=ke(I,Ze,{duration:e[3]?0:300,delay:e[3]?0:550},!0)),H.run(1))}),ee&&Ve(()=>{fe&&(G||(G=ke(B,Ze,{duration:e[3]?0:300,delay:e[3]?0:850},!0)),G.run(1))}),ee&&Ve(()=>{fe&&($||($=ke(F,Ze,{duration:e[3]?0:300,delay:e[3]?0:1150},!0)),$.run(1))}),ee&&Ve(()=>{fe&&(L||(L=ke(W,Ze,{duration:e[3]?0:300,delay:e[3]?0:1450},!0)),L.run(1))}),ee&&Ve(()=>{fe&&(Ce||(Ce=ke(be,Ze,{duration:e[3]?0:300,delay:e[3]?0:1750},!0)),Ce.run(1))}),fe=!0)},o(ee){ee&&(w||(w=ke(s,Ze,{duration:e[3]?0:300},!1)),w.run(0)),ee&&(q||(q=ke(k,Ze,{duration:e[3]?0:300,delay:e[3]?0:250},!1)),q.run(0)),ee&&(H||(H=ke(I,Ze,{duration:e[3]?0:300,delay:e[3]?0:550},!1)),H.run(0)),ee&&(G||(G=ke(B,Ze,{duration:e[3]?0:300,delay:e[3]?0:850},!1)),G.run(0)),ee&&($||($=ke(F,Ze,{duration:e[3]?0:300,delay:e[3]?0:1150},!1)),$.run(0)),ee&&(L||(L=ke(W,Ze,{duration:e[3]?0:300,delay:e[3]?0:1450},!1)),L.run(0)),ee&&(Ce||(Ce=ke(be,Ze,{duration:e[3]?0:300,delay:e[3]?0:1750},!1)),Ce.run(0)),fe=!1},d(ee){ee&&E(t),ee&&w&&w.end(),ee&&q&&q.end(),Se.d(),ee&&H&&H.end(),ge.d(),De&&De.d(),ee&&G&&G.end(),nt(xe,ee),Pe&&Pe.d(),ee&&$&&$.end(),ee&&L&&L.end(),ee&&Ce&&Ce.end(),it=!1,Qe(ht)}}}function Ap(n){let e,t,s,i,r,o=n[2]?"Slot":"Has Special",l,a,c,u=n[2]?"Stats":"Stat Intakes",d,h,p,g,v,w,N,k,A,D,R,q=!n[3]&&Qo(n);return{c(){e=m("div"),t=m("div"),s=m("span"),s.textContent="Item",i=b(),r=m("span"),l=Y(o),a=b(),c=m("span"),d=Y(u),h=b(),p=m("span"),p.textContent="Avg. Cost",g=b(),v=m("span"),v.textContent="Colors",w=b(),N=m("span"),N.textContent="Outline",k=b(),A=m("span"),A.textContent="Release",D=b(),q&&q.c(),_(s,"class","ff-item svelte-1iqikjy"),_(r,"class","ff-item svelte-1iqikjy"),qe(r,"smaller-fs",!n[2]),_(c,"class","ff-item svelte-1iqikjy"),qe(c,"smaller-fs",!n[2]),_(p,"class","ff-item svelte-1iqikjy"),_(v,"class","ff-item svelte-1iqikjy"),_(N,"class","ff-item svelte-1iqikjy"),_(A,"class","ff-item svelte-1iqikjy"),_(t,"id","categories"),_(t,"class","svelte-1iqikjy"),_(e,"class","gameboard ff-bg fd-col flex posrel border-tp bs svelte-1iqikjy")},m(P,I){S(P,e,I),f(e,t),f(t,s),f(t,i),f(t,r),f(r,l),f(t,a),f(t,c),f(c,d),f(t,h),f(t,p),f(t,g),f(t,v),f(t,w),f(t,N),f(t,k),f(t,A),f(e,D),q&&q.m(e,null),R=!0},p(P,I){(!R||I[0]&4)&&o!==(o=P[2]?"Slot":"Has Special")&&le(l,o),(!R||I[0]&4)&&qe(r,"smaller-fs",!P[2]),(!R||I[0]&4)&&u!==(u=P[2]?"Stats":"Stat Intakes")&&le(d,u),(!R||I[0]&4)&&qe(c,"smaller-fs",!P[2]),P[3]?q&&(bt(),se(q,1,1,()=>{q=null}),yt()):q?(q.p(P,I),I[0]&8&&J(q,1)):(q=Qo(P),q.c(),J(q,1),q.m(e,null))},i(P){R||(J(q),R=!0)},o(P){se(q),R=!1},d(P){P&&E(e),q&&q.d()}}}function qi(n,e){return n===void 0||e===void 0?void 0:n.filter(s=>e.includes(s)).length}function Pp(n,e,t){let s,i,r,o,l;oe(n,Ct,v=>t(0,s=v)),oe(n,gt,v=>t(4,i=v)),oe(n,ri,v=>t(5,r=v)),oe(n,dn,v=>t(6,o=v)),oe(n,_n,v=>t(7,l=v));let{dailyItemsData:a}=e,c,u,d=!1;function h(v,[w,N,k,A,D,R,q,P,I,T,H]){i.chosenItems.length==i.rowInfo.length+1&&gt.update(z=>({...z,rowInfo:[...z.rowInfo,[u?A:w,(u?R:k)?1:(u?D:N)?0:-1,q,I?1:P?0:-1,T,H]]}))}const p=()=>re(_n,l=!1,l),g=(v,w)=>w.name==v.name;return n.$$set=v=>{"dailyItemsData"in v&&t(9,a=v.dailyItemsData)},n.$$.update=()=>{n.$$.dirty[0]&1&&s.mode&&(t(3,d=!0),setTimeout(()=>t(3,d=!1),10)),n.$$.dirty[0]&513&&on(a)==2&&t(1,c=a[s.mode]),n.$$.dirty[0]&1&&(s.mode.includes("equipment")?t(2,u=!0):s.mode.includes("weapons")&&t(2,u=!1))},[s,c,u,d,i,r,o,l,h,a,p,g]}class Op extends lt{constructor(e){super(),ot(this,e,Pp,Ap,Je,{dailyItemsData:9},null,[-1,-1])}}function Mp(n){let e,t,s,i;return{c(){e=m("div"),t=m("input"),_(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],_(t,"type","checkbox"),t.checked=n[1],_(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),qe(e,"unavailable",n[2]),Dn(e,"--s",`${n[0]}rem`)},m(r,o){S(r,e,o),f(e,t),s||(i=[ve(t,"change",n[5]),ve(t,"keydown",n[6])],s=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&qe(e,"unavailable",r[2]),o&1&&Dn(e,"--s",`${r[0]}rem`)},i:ne,o:ne,d(r){r&&E(e),s=!1,Qe(i)}}}function Lp(n,e,t){let{size:s,checked:i=!1,disabled:r=!1,forced:o=!1}=e;const l=Zl(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,s=u.size),"checked"in u&&t(1,i=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[s,i,r,o,l,a,c]}class Ms extends lt{constructor(e){super(),ot(this,e,Lp,Mp,Je,{size:0,checked:1,disabled:2,forced:3})}}function rl(n,e,t){const s=n.slice();s[22]=e[t];const i=s[1]?!1:s[9].chosenItems.find(function(...o){return n[20](s[22],...o)})!=null;return s[23]=i,s}function ol(n){let e,t,s,i=_e(n[5]),r=[];for(let o=0;o<i.length;o+=1)r[o]=ll(rl(n,i,o));return{c(){e=m("div");for(let o=0;o<r.length;o+=1)r[o].c();_(e,"class","itemList ff-bg flex fd-col svelte-1up5u20"),qe(e,"noGuess",n[1])},m(o,l){S(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[21](e),s=!0},p(o,l){if(l&2674){i=_e(o[5]);let a;for(a=0;a<i.length;a+=1){const c=rl(o,i,a);r[a]?r[a].p(c,l):(r[a]=ll(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}(!s||l&2)&&qe(e,"noGuess",o[1])},i(o){s||(o&&Ve(()=>{s&&(t||(t=ke(e,Bt,{duration:75},!0)),t.run(1))}),s=!0)},o(o){o&&(t||(t=ke(e,Bt,{duration:75},!1)),t.run(0)),s=!1},d(o){o&&E(e),nt(r,o),n[21](null),o&&t&&t.end()}}}function ll(n){let e,t,s,i,r,o=n[22].name+"",l,a,c,u,d;function h(){return n[18](n[23],n[22])}return{c(){e=m("button"),t=m("img"),i=b(),r=m("span"),l=Y(o),a=b(),Ke(t.src,s=Zt+n[22].image)||_(t,"src",s),_(t,"alt",""),_(t,"class","svelte-1up5u20"),e.disabled=c=n[23],_(e,"class","listItem flex fai-center no-bg-change svelte-1up5u20"),qe(e,"unavailable",n[23])},m(p,g){S(p,e,g),f(e,t),f(e,i),f(e,r),f(r,l),f(e,a),u||(d=[ve(e,"click",h),ve(e,"focusout",n[19])],u=!0)},p(p,g){n=p,g&32&&!Ke(t.src,s=Zt+n[22].image)&&_(t,"src",s),g&32&&o!==(o=n[22].name+"")&&le(l,o),g&546&&c!==(c=n[23])&&(e.disabled=c),g&546&&qe(e,"unavailable",n[23])},d(p){p&&E(e),u=!1,Qe(d)}}}function Fp(n){let e,t,s,i,r,o,l=n[8]&&n[5].length&&n[6]&&ol(n);return{c(){e=m("input"),s=b(),l&&l.c(),i=_t(),e.disabled=n[7],_(e,"type","text"),_(e,"class","searcherInput border-tp br-1 svelte-1up5u20"),_(e,"placeholder",t=n[1]?"Item to be guessed...":`Guess the item for game #${n[0]+1} (${n[3]})...`)},m(a,c){S(a,e,c),n[16](e),S(a,s,c),l&&l.m(a,c),S(a,i,c),r||(o=[ve(window,"mousedown",n[15]),ve(e,"input",n[10]),ve(e,"focusin",n[17])],r=!0)},p(a,[c]){c&128&&(e.disabled=a[7]),c&11&&t!==(t=a[1]?"Item to be guessed...":`Guess the item for game #${a[0]+1} (${a[3]})...`)&&_(e,"placeholder",t),a[8]&&a[5].length&&a[6]?l?(l.p(a,c),c&352&&J(l,1)):(l=ol(a),l.c(),J(l,1),l.m(i.parentNode,i)):l&&(bt(),se(l,1,1,()=>{l=null}),yt())},i(a){J(l)},o(a){se(l)},d(a){a&&(E(e),E(s),E(i)),n[16](null),l&&l.d(a),r=!1,Qe(o)}}}function qp(n,e,t){let s,i,r,o,l;oe(n,Ct,T=>t(14,i=T)),oe(n,_n,T=>t(7,r=T)),oe(n,ri,T=>t(8,o=T)),oe(n,gt,T=>t(9,l=T));let{gameNumber:a=0,noGuess:c=!1,noGuessMode:u=null,noGuessItem:d=""}=e,h,p,g=[],v=!1;function w(){let T=h.value.toLowerCase();if(t(5,g=[]),!!T)for(let H of o[s])H.name.toLowerCase().includes(T)&&g.push(H)}function N(T){r||(c?(t(12,d=T.name),t(6,v=!1)):(re(_n,r=!0,r),gt.update(H=>({...H,chosenItems:[...H.chosenItems,{name:T.name}]}))),t(2,h.value="",h),w())}const k=T=>{p&&T.target!=h&&!p.contains(T.target)&&t(6,v=!1)};function A(T){Be[T?"unshift":"push"](()=>{h=T,t(2,h)})}const D=()=>t(6,v=!0),R=(T,H)=>{T||N(H)},q=T=>{p.contains(T.relatedTarget)||t(6,v=!1)},P=(T,H)=>H.name==T.name;function I(T){Be[T?"unshift":"push"](()=>{p=T,t(4,p)})}return n.$$set=T=>{"gameNumber"in T&&t(0,a=T.gameNumber),"noGuess"in T&&t(1,c=T.noGuess),"noGuessMode"in T&&t(13,u=T.noGuessMode),"noGuessItem"in T&&t(12,d=T.noGuessItem)},n.$$.update=()=>{n.$$.dirty&24576&&t(3,s=u||i.mode),n.$$.dirty&12&&s&&h&&w()},[a,c,h,s,p,g,v,r,o,l,w,N,d,u,i,k,A,D,R,q,P,I]}class Uc extends lt{constructor(e){super(),ot(this,e,qp,Fp,Je,{gameNumber:0,noGuess:1,noGuessMode:13,noGuessItem:12})}}function al(n){let e,t,s;return{c(){e=m("span"),_(e,"id","HPFlash"),_(e,"class","svelte-nha9gw")},m(i,r){S(i,e,r),s=!0},i(i){s||(t&&t.end(1),s=!0)},o(i){i&&(t=gu(e,Bt,{duration:200})),s=!1},d(i){i&&E(e),i&&t&&t.end()}}}function Wp(n){let e,t,s,i,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,d,h,p,g,v,w=n[4]?"You've lost your remaining armor.":"Your armor is protecting you.",N,k,A,D,R,q,P,I,T,H,z,B=n[1]&&al();function Z(G){n[6](G)}let ue={};return n[0]!==void 0&&(ue.gameNumber=n[0]),T=new Uc({props:ue}),Be.push(()=>Tt(T,"gameNumber",Z)),{c(){e=m("div"),t=m("div"),s=m("div"),i=m("div"),r=m("div"),o=m("span"),a=Y(l),c=Y("/600"),u=b(),d=m("button"),h=m("img"),g=b(),v=m("span"),N=Y(w),k=b(),A=m("br"),D=Y(`\r
                You can take `),R=Y(n[2]),q=Y(" hits at most!"),P=b(),B&&B.c(),I=b(),Fe(T.$$.fragment),_(o,"class","svelte-nha9gw"),_(r,"class","HPBackground svelte-nha9gw"),Dn(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),_(i,"class","innerGameHP flex posrel svelte-nha9gw"),_(s,"class","outerGameHP posrel svelte-nha9gw"),Ke(h.src,p="misc/armor.svg")||_(h,"src",p),_(h,"alt","Armor"),_(h,"class","svelte-nha9gw"),qe(h,"noArmor",n[4]),_(v,"class","tooltip svelte-nha9gw"),_(v,"id","right"),_(d,"class","ff-item posrel br-1 svelte-nha9gw"),_(d,"id","armorIcon"),_(t,"class","gameHPCont flex cg-1 svelte-nha9gw"),_(e,"class","currentGameInfo ff-bg flex fd-row fw fjc-center fai-center posrel border-tp br-1 bs svelte-nha9gw")},m(G,O){S(G,e,O),f(e,t),f(t,s),f(s,i),f(i,r),f(r,o),f(o,a),f(o,c),f(t,u),f(t,d),f(d,h),f(d,g),f(d,v),f(v,N),f(v,k),f(v,A),f(v,D),f(v,R),f(v,q),f(e,P),B&&B.m(e,null),f(e,I),Me(T,e,null),z=!0},p(G,[O]){(!z||O&12)&&l!==(l=Math.round(600-G[3].chosenItems.length*(600/G[2]))+"")&&le(a,l),O&12&&Dn(r,"width",`${Math.floor(100*(G[2]-G[3].chosenItems.length)/G[2])}%`),(!z||O&16)&&qe(h,"noArmor",G[4]),(!z||O&16)&&w!==(w=G[4]?"You've lost your remaining armor.":"Your armor is protecting you.")&&le(N,w),(!z||O&4)&&le(R,G[2]),G[1]?B?O&2&&J(B,1):(B=al(),B.c(),J(B,1),B.m(e,I)):B&&(bt(),se(B,1,1,()=>{B=null}),yt());const F={};!H&&O&1&&(H=!0,F.gameNumber=G[0],kt(()=>H=!1)),T.$set(F)},i(G){z||(J(B),J(T.$$.fragment,G),z=!0)},o(G){se(B),se(T.$$.fragment,G),z=!1},d(G){G&&E(e),B&&B.d(),Le(T)}}}function jp(n,e,t){let s,i,r,o;oe(n,_n,u=>t(5,s=u)),oe(n,oi,u=>t(2,i=u)),oe(n,gt,u=>t(3,r=u)),oe(n,dn,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&s&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,i,r,o,s,c]}class xp extends lt{constructor(e){super(),ot(this,e,jp,Wp,Je,{gameNumber:0})}}function cl(n,e,t){const s=n.slice();return s[9]=e[t],s}function ul(n,e,t){const s=n.slice();return s[12]=e[t],s}function fl(n){let e,t=(n[12]===!0||n[12]===1?n[4].html.blue:n[12]===0?n[4].html.yellow:n[12]===!1||n[12]===-1?n[4].html.red:null)+"",s;return{c(){e=new Jl(!1),s=_t(),e.a=s},m(i,r){e.m(t,i,r),S(i,s,r)},p(i,r){r&1&&t!==(t=(i[12]===!0||i[12]===1?i[4].html.blue:i[12]===0?i[4].html.yellow:i[12]===!1||i[12]===-1?i[4].html.red:null)+"")&&e.p(t)},d(i){i&&(E(s),e.d())}}}function hl(n){let e,t,s=_e(n[9]),i=[];for(let r=0;r<s.length;r+=1)i[r]=fl(ul(n,s,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=b(),t=m("br")},m(r,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(r,o);S(r,e,o),S(r,t,o)},p(r,o){if(o&17){s=_e(r[9]);let l;for(l=0;l<s.length;l+=1){const a=ul(r,s,l);i[l]?i[l].p(a,o):(i[l]=fl(a),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},d(r){r&&(E(e),E(t)),nt(i,r)}}}function Bp(n){let e,t,s,i,r,o,l,a,c,u,d,h,p,g,v=n[2]?"Copied!":"Copy",w,N,k,A=_e(n[0].rowInfo.toReversed()),D=[];for(let R=0;R<A.length;R+=1)D[R]=hl(cl(n,A,R));return{c(){e=m("div"),t=m("span"),t.textContent="Game Stats",s=b(),i=m("span"),r=Y(n[3]),o=b(),l=m("br"),a=b();for(let R=0;R<D.length;R+=1)D[R].c();c=b(),u=m("button"),d=Y(`Share Stats\r
        `),h=m("iconify-icon"),p=b(),g=m("span"),w=Y(v),_(i,"class","smaller-fs"),Ge(h,"icon","ri:share-fill"),_(g,"class","tooltip"),_(g,"id","top"),_(u,"class","flex fai-center cg-1 posrel border-tp br-1 smaller-fs svelte-q44wd4"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs")},m(R,q){S(R,e,q),f(e,t),f(e,s),f(e,i),f(i,r),f(i,o),f(i,l),f(i,a);for(let P=0;P<D.length;P+=1)D[P]&&D[P].m(i,null);f(e,c),f(e,u),f(u,d),f(u,h),f(u,p),f(u,g),f(g,w),N||(k=ve(u,"click",n[8]),N=!0)},p(R,[q]){if(q&8&&le(r,R[3]),q&17){A=_e(R[0].rowInfo.toReversed());let P;for(P=0;P<A.length;P+=1){const I=cl(R,A,P);D[P]?D[P].p(I,q):(D[P]=hl(I),D[P].c(),D[P].m(i,null))}for(;P<D.length;P+=1)D[P].d(1);D.length=A.length}q&4&&v!==(v=R[2]?"Copied!":"Copy")&&le(w,v)},i:ne,o:ne,d(R){R&&E(e),nt(D,R),N=!1,k()}}}function Gp(n,e,t){let s,i,r,o;oe(n,gt,h=>t(0,i=h)),oe(n,Ct,h=>t(6,r=h)),oe(n,dn,h=>t(7,o=h));let{gameNumber:l}=e,a={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},c="",u=!1;const d=h=>{Ft(h),navigator.clipboard.writeText(`${s}
${c}
${location.origin+location.pathname}`),t(2,u=!0),setTimeout(()=>t(2,u=!1),1e3)};return n.$$set=h=>{"gameNumber"in h&&t(5,l=h.gameNumber)},n.$$.update=()=>{n.$$.dirty&224&&t(3,s=`${o?"(Nightmare)":""} Frontierdle - ${qt(r.mode)} #${l+1}`),n.$$.dirty&67&&r.mode&&setTimeout(()=>{t(1,c="");for(let h of i.rowInfo.toReversed()){let p="";for(let g of h)p+=g===!0||g===1?a.js.blue:g===0?a.js.yellow:g===!1||g===-1?a.js.red:null;t(1,c+=p+`
`)}})},[i,c,u,s,a,l,r,o,d]}class Hp extends lt{constructor(e){super(),ot(this,e,Gp,Bp,Je,{gameNumber:5})}}function dl(n,e,t){const s=n.slice();s[8]=e[t];const i=s[1]?s[2]:s[4][s[8]+s[3]];s[9]=i;const r=s[8].includes("hard");s[10]=r;const o=Math.max(...Object.values(s[9].winInfo));return s[11]=o,s}function _l(n,e,t){const s=n.slice();return s[14]=e[t][0],s[15]=e[t][1],s}function pl(n){let e,t,s=n[9].streak+"",i,r,o;return{c(){e=m("div"),t=m("span"),i=Y(s),r=b(),o=m("span"),o.textContent="Current Streak",_(o,"id","statsTitle"),_(o,"class","svelte-1dnm67b"),_(e,"class","svelte-1dnm67b")},m(l,a){S(l,e,a),f(e,t),f(t,i),f(e,r),f(e,o)},p(l,a){a&94&&s!==(s=l[9].streak+"")&&le(i,s)},d(l){l&&E(e)}}}function ml(n){let e,t,s=n[14]+"",i,r,o,l,a,c=n[15]+"",u,d;return{c(){e=m("div"),t=m("span"),i=Y(s),r=b(),o=m("span"),o.innerHTML="",l=b(),a=m("span"),u=Y(c),d=b(),_(t,"id","guessNum"),_(t,"class","svelte-1dnm67b"),_(o,"class","posrel border-tp svelte-1dnm67b"),_(o,"id","winsBar"),Dn(o,"width",`${n[15]*80/n[11]}%`),_(a,"class","smaller-fs svelte-1dnm67b"),_(a,"id","winsNum"),_(e,"class","flex fai-center svelte-1dnm67b")},m(h,p){S(h,e,p),f(e,t),f(t,i),f(e,r),f(e,o),f(e,l),f(e,a),f(a,u),f(e,d)},p(h,p){p&94&&s!==(s=h[14]+"")&&le(i,s),p&94&&Dn(o,"width",`${h[15]*80/h[11]}%`),p&94&&c!==(c=h[15]+"")&&le(u,c)},d(h){h&&E(e)}}}function gl(n){let e;return{c(){e=m("hr"),_(e,"class","svelte-1dnm67b")},m(t,s){S(t,e,s)},d(t){t&&E(e)}}}function vl(n){let e,t,s=n[1]?"Total":n[10]?"Nightmare":"Normal",i,r,o,l,a,c,u=n[9].gamesPlayed+"",d,h,p,g,v,w,N=Math.floor(n[9].gamesWon*100/(n[9].gamesPlayed?n[9].gamesPlayed:1))+"",k,A,D,R,q,P,I,T,H=n[9].maxStreak+"",z,B,Z,ue,G,O,F,ie,X,$=!n[1]&&pl(n),Q=_e(Object.entries(n[9].winInfo)),W=[];for(let M=0;M<Q.length;M+=1)W[M]=ml(_l(n,Q,M));let y=n[8]!=n[6][n[6].length-1]&&gl();return{c(){e=m("div"),t=m("span"),i=Y(s),r=b(),o=m("div"),l=m("div"),a=m("div"),c=m("span"),d=Y(u),h=b(),p=m("span"),p.textContent="Games Played",g=b(),v=m("div"),w=m("span"),k=Y(N),A=Y("%"),D=b(),R=m("span"),R.textContent="Win Rate",q=b(),$&&$.c(),P=b(),I=m("div"),T=m("span"),z=Y(H),B=b(),Z=m("span"),Z.textContent="Max Streak",ue=b(),G=m("span"),G.textContent="Win Distribution",O=b(),F=m("div");for(let M=0;M<W.length;M+=1)W[M].c();ie=b(),y&&y.c(),X=_t(),_(t,"class","smaller-fs"),_(p,"id","statsTitle"),_(p,"class","svelte-1dnm67b"),_(a,"class","svelte-1dnm67b"),_(R,"id","statsTitle"),_(R,"class","svelte-1dnm67b"),_(v,"class","svelte-1dnm67b"),_(Z,"id","statsTitle"),_(Z,"class","svelte-1dnm67b"),_(I,"class","svelte-1dnm67b"),_(l,"class","flex svelte-1dnm67b"),_(l,"id","playerStatsInfo"),_(G,"class","smaller-fs"),_(F,"class","flex fd-col smaller-fs svelte-1dnm67b"),_(F,"id","distributionChart"),_(e,"class","flex fd-col svelte-1dnm67b"),_(e,"id","modeStatCont")},m(M,V){S(M,e,V),f(e,t),f(t,i),f(e,r),f(e,o),f(o,l),f(l,a),f(a,c),f(c,d),f(a,h),f(a,p),f(l,g),f(l,v),f(v,w),f(w,k),f(w,A),f(v,D),f(v,R),f(l,q),$&&$.m(l,null),f(l,P),f(l,I),f(I,T),f(T,z),f(I,B),f(I,Z),f(e,ue),f(e,G),f(e,O),f(e,F);for(let L=0;L<W.length;L+=1)W[L]&&W[L].m(F,null);S(M,ie,V),y&&y.m(M,V),S(M,X,V)},p(M,V){if(V&66&&s!==(s=M[1]?"Total":M[10]?"Nightmare":"Normal")&&le(i,s),V&94&&u!==(u=M[9].gamesPlayed+"")&&le(d,u),V&94&&N!==(N=Math.floor(M[9].gamesWon*100/(M[9].gamesPlayed?M[9].gamesPlayed:1))+"")&&le(k,N),M[1]?$&&($.d(1),$=null):$?$.p(M,V):($=pl(M),$.c(),$.m(l,P)),V&94&&H!==(H=M[9].maxStreak+"")&&le(z,H),V&94){Q=_e(Object.entries(M[9].winInfo));let L;for(L=0;L<Q.length;L+=1){const pe=_l(M,Q,L);W[L]?W[L].p(pe,V):(W[L]=ml(pe),W[L].c(),W[L].m(F,null))}for(;L<W.length;L+=1)W[L].d(1);W.length=Q.length}M[8]!=M[6][M[6].length-1]?y||(y=gl(),y.c(),y.m(X.parentNode,X)):y&&(y.d(1),y=null)},d(M){M&&(E(e),E(ie),E(X)),$&&$.d(),nt(W,M),y&&y.d(M)}}}function bl(n){let e,t=_e(n[6]),s=[];for(let i=0;i<t.length;i+=1)s[i]=vl(dl(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=_t()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);S(i,e,r)},p(i,r){if(r&94){t=_e(i[6]);let o;for(o=0;o<t.length;o+=1){const l=dl(i,t,o);s[o]?s[o].p(l,r):(s[o]=vl(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&E(e),nt(s,i)}}}function Up(n){let e,t,s,i,r=qt(n[3])+"",o,l,a,c,u,d,h,p=n[5].mode,g,v,w,N,k=bl(n);return{c(){e=m("div"),t=m("div"),s=m("span"),i=Y("Your Stats - "),o=Y(r),l=b(),a=m("button"),a.textContent="Switch View",c=b(),u=m("hr"),d=b(),h=m("div"),k.c(),_(a,"class","border-tp br-1 smaller-fs svelte-1dnm67b"),_(t,"class","flex fd-col fai-center rg-1 svelte-1dnm67b"),_(t,"id","title"),_(u,"class","svelte-1dnm67b"),_(h,"class","flex fai-center svelte-1dnm67b"),_(h,"id","modeStatsCont"),_(e,"class","statsCont ff-bg flex fd-col cg-1 fai-center border-tp br-1 bs svelte-1dnm67b"),_(e,"id","playerStats"),qe(e,"totalView",n[1])},m(A,D){S(A,e,D),f(e,t),f(t,s),f(s,i),f(s,o),f(t,l),f(t,a),f(e,c),f(e,u),f(e,d),f(e,h),k.m(h,null),v=!0,w||(N=ve(a,"click",n[7]),w=!0)},p(A,[D]){n=A,(!v||D&8)&&r!==(r=qt(n[3])+"")&&le(o,r),D&32&&Je(p,p=n[5].mode)?(k.d(1),k=bl(n),k.c(),k.m(h,null)):k.p(n,D),(!v||D&2)&&qe(e,"totalView",n[1])},i(A){v||(A&&Ve(()=>{v&&(g||(g=ke(e,Ze,{duration:n[0]?200:0},!0)),g.run(1))}),v=!0)},o(A){A&&(g||(g=ke(e,Ze,{duration:n[0]?200:0},!1)),g.run(0)),v=!1},d(A){A&&E(e),k.d(A),A&&g&&g.end(),w=!1,N()}}}function zp(n,e,t){let s,i,r,o;oe(n,Rn,d=>t(4,r=d)),oe(n,Ct,d=>t(5,o=d));let{prompted:l=!1}=e,a=!0,c;const u=d=>{Ft(d),t(1,a=!a)};return n.$$set=d=>{"prompted"in d&&t(0,l=d.prompted)},n.$$.update=()=>{if(n.$$.dirty&32&&t(3,s=o.mode),n.$$.dirty&2&&t(6,i=a?[""]:["","hard_"]),n.$$.dirty&60&&o.mode){t(2,c=structuredClone(Rt.playerStats.equipment));for(let d of["","hard_"]){let h=r[d+s];for(let p of["gamesPlayed","gamesWon"])t(2,c[p]+=h[p],c);h.maxStreak>c.maxStreak&&t(2,c.maxStreak=h.maxStreak,c);for(let p in h.winInfo)t(2,c.winInfo[p]+=h.winInfo[p],c)}}},[l,a,c,s,r,o,i,u]}class zc extends lt{constructor(e){super(),ot(this,e,zp,Up,Je,{prompted:0})}}function yl(n,e,t){const s=n.slice();return s[5]=e[t],s}function Vp(n){let e,t=_e(n[1]),s=[];for(let i=0;i<t.length;i+=1)s[i]=wl(yl(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=_t()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);S(i,e,r)},p(i,r){if(r&2){t=_e(i[1]);let o;for(o=0;o<t.length;o+=1){const l=yl(i,t,o);s[o]?s[o].p(l,r):(s[o]=wl(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&E(e),nt(s,i)}}}function Yp(n){let e,t,s;return{c(){e=m("span"),t=Y("— "),s=Y(n[1]),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(i,r){S(i,e,r),f(e,t),f(e,s)},p(i,r){r&2&&le(s,i[1])},d(i){i&&E(e)}}}function wl(n){let e,t,s=n[5]+"",i;return{c(){e=m("span"),t=Y("— "),i=Y(s),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(r,o){S(r,e,o),f(e,t),f(e,i)},p(r,o){o&2&&s!==(s=r[5]+"")&&le(i,s)},d(r){r&&E(e)}}}function $p(n){let e,t,s,i,r,o,l,a,c;function u(p,g){return typeof p[1]=="string"?Yp:Vp}let d=u(n),h=d(n);return{c(){e=m("hr"),t=b(),s=m("li"),i=m("span"),r=Y("v"),o=Y(n[0]),l=b(),a=m("i"),a.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":wp[n[2][0]%10])+", 20"+n[2][2]}`,c=b(),h.c(),_(i,"id","version"),_(i,"class","svelte-1vq8gvl"),_(a,"id","date"),_(a,"class","svelte-1vq8gvl"),_(s,"class","flex fw fai-center svelte-1vq8gvl")},m(p,g){S(p,e,g),S(p,t,g),S(p,s,g),f(s,i),f(i,r),f(i,o),f(s,l),f(s,a),f(s,c),h.m(s,null)},p(p,[g]){g&1&&le(o,p[0]),d===(d=u(p))&&h?h.p(p,g):(h.d(1),h=d(p),h&&(h.c(),h.m(s,null)))},i:ne,o:ne,d(p){p&&(E(e),E(t),E(s)),h.d()}}}function Kp(n,e,t){let{version:s,date:i,text:r}=e,o=i.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,s=a.version),"date"in a&&t(4,i=a.date),"text"in a&&t(1,r=a.text)},[s,r,o,l,i]}class As extends lt{constructor(e){super(),ot(this,e,Kp,$p,Je,{version:0,date:4,text:1})}}function Qp(n){let e,t,s,i,r,o,l,a,c,u,d;return i=new As({props:{version:"1.1.2",date:"9/4/24",text:"Normal and Nightmare mode stats are now separate"}}),o=new As({props:{version:"1.1.1",date:"5/4/24",text:["Fixed 'Game Stats' section not updating when switching game categories","Fixed page size and zoom occasionally breaking"]}}),a=new As({props:{version:"1.1.0",date:"4/4/24",text:["Added 'Weapons' game category","'Game Help' prompt now appears on first visit"]}}),u=new As({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=m("span"),e.textContent="Changelog",t=b(),s=m("ul"),Fe(i.$$.fragment),r=b(),Fe(o.$$.fragment),l=b(),Fe(a.$$.fragment),c=b(),Fe(u.$$.fragment),_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-1hn7lke"),_(s,"id","contents")},m(h,p){S(h,e,p),S(h,t,p),S(h,s,p),Me(i,s,null),f(s,r),Me(o,s,null),f(s,l),Me(a,s,null),f(s,c),Me(u,s,null),d=!0},p:ne,i(h){d||(J(i.$$.fragment,h),J(o.$$.fragment,h),J(a.$$.fragment,h),J(u.$$.fragment,h),d=!0)},o(h){se(i.$$.fragment,h),se(o.$$.fragment,h),se(a.$$.fragment,h),se(u.$$.fragment,h),d=!1},d(h){h&&(E(e),E(t),E(s)),Le(i),Le(o),Le(a),Le(u)}}}class Jp extends lt{constructor(e){super(),ot(this,e,null,Qp,Je,{})}}function Xp(n){let e,t,s;return{c(){e=m("span"),e.textContent="Credits",t=b(),s=m("div"),s.innerHTML=`<p class="flex fai-center cg-1">This is a personal project. Contact me directly on
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
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,_(e,"class","title"),_(s,"class","smaller-fs"),_(s,"id","contents")},m(i,r){S(i,e,r),S(i,t,r),S(i,s,r)},p:ne,i:ne,o:ne,d(i){i&&(E(e),E(t),E(s))}}}class Zp extends lt{constructor(e){super(),ot(this,e,null,Xp,Je,{})}}function Cl(n,e,t){const s=n.slice();return s[0]=e[t],s}function em(n,e,t){const s=n.slice();return s[3]=e[t],s}function tm(n,e,t){const s=n.slice();return s[6]=e[t],s}function El(n,e,t){const s=n.slice();return s[9]=e[t],s}function Il(n,e,t){const s=n.slice();return s[12]=e[t],s}function nm(n,e,t){const s=n.slice();return s[15]=e[t],s}function sm(n){let e;return{c(){e=m("li"),e.textContent=`— ${qt(n[15])} `},m(t,s){S(t,e,s)},p:ne,d(t){t&&E(e)}}}function Sl(n){let e;return{c(){e=m("li"),e.textContent=`— ${n[12]} `},m(t,s){S(t,e,s)},p:ne,d(t){t&&E(e)}}}function kl(n){let e;return{c(){e=m("li"),e.textContent=`— ${n[9]}`},m(t,s){S(t,e,s)},p:ne,d(t){t&&E(e)}}}function im(n){let e;return{c(){e=m("li"),e.textContent=`— ${n[6]}`},m(t,s){S(t,e,s)},p:ne,d(t){t&&E(e)}}}function rm(n){let e;return{c(){e=m("li"),e.textContent=`— ${n[3]}`},m(t,s){S(t,e,s)},p:ne,d(t){t&&E(e)}}}function Tl(n){let e;return{c(){e=m("li"),e.textContent=`— ${n[0]} Update`},m(t,s){S(t,e,s)},p:ne,d(t){t&&E(e)}}}function om(n){let e,t,s,i,r,o,l,a,c,u,d,h,p,g,v,w,N,k,A,D,R,q,P,I,T,H,z,B,Z,ue,G,O,F,ie,X,$,Q,W,y,M,V,L,pe,be,at,je,ft,It,Ce,ze,St,Re,fe,it,ht,Ot,He,Se=_e(bp),Xe=[];for(let j=0;j<Se.length;j+=1)Xe[j]=sm(nm(n,Se,j));let ct=_e(Object.values(si)),ge=[];for(let j=0;j<ct.length;j+=1)ge[j]=Sl(Il(n,ct,j));let De=_e(Object.values(ii)),ye=[];for(let j=0;j<De.length;j+=1)ye[j]=kl(El(n,De,j));let xe=_e(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),Pe=[];for(let j=0;j<12;j+=1)Pe[j]=im(tm(n,xe,j));let ee=_e(["Black","Blue","Green","Purple","Red","White","Yellow"]),de=[];for(let j=0;j<7;j+=1)de[j]=rm(em(n,ee,j));let we=_e(Object.values(ni).slice(0,-1)),Oe=[];for(let j=0;j<we.length;j+=1)Oe[j]=Tl(Cl(n,we,j));return{c(){e=m("span"),e.textContent="Game Help",t=b(),s=m("div"),i=m("p"),i.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece and/or\r
        weapon from Fantastic Frontier, which both change every day.`,r=b(),o=m("hr"),l=b(),a=m("div"),a.innerHTML=`<span class="title">Color Guide</span> <div class="flex cg-1 svelte-2q3hs4" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-2q3hs4" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-2q3hs4" id="partial">Partial
                <span class="bgInfo svelte-2q3hs4">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-2q3hs4" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-2q3hs4" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,c=b(),u=m("hr"),d=b(),h=m("span"),h.textContent="Categories",p=b(),g=m("div"),v=m("div"),w=m("b"),w.textContent="Equipment",N=b(),k=m("span"),A=m("b"),A.textContent="Slot:",D=b(),R=m("ul");for(let j=0;j<Xe.length;j+=1)Xe[j].c();q=b(),P=m("span"),I=m("b"),I.textContent="Stats:",T=b(),H=m("ul");for(let j=0;j<ge.length;j+=1)ge[j].c();z=b(),B=m("div"),Z=m("b"),Z.textContent="Weapons",ue=b(),G=m("span"),G.innerHTML="<b>Has Special:</b> <span>Whether the weapon has a Special Ability.</span>",O=b(),F=m("span"),ie=m("b"),ie.textContent="Stat Intakes:",X=b(),$=m("ul");for(let j=0;j<ye.length;j+=1)ye[j].c();Q=b(),W=m("div"),y=m("div"),M=m("b"),M.textContent="General",V=b(),L=m("span"),L.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item(s) can be
                    purchased at. &quot;Unpurchasable&quot; if it cannot be purchased,
                    equivalent to 0 for the game&#39;s purposes.</span>`,pe=b(),be=m("span"),at=m("b"),at.textContent="Colors:",je=b(),ft=m("ul");for(let j=0;j<12;j+=1)Pe[j].c();It=b(),Ce=m("span"),ze=m("b"),ze.textContent="Outline:",St=b(),Re=m("ul");for(let j=0;j<7;j+=1)de[j].c();fe=b(),it=m("span"),ht=m("b"),ht.textContent="Release:",Ot=b(),He=m("ul");for(let j=0;j<Oe.length;j+=1)Oe[j].c();_(e,"class","title"),_(a,"class","flex fd-col fai-center"),_(h,"class","title"),_(w,"class","categoryTitle svelte-2q3hs4"),_(A,"class","svelte-2q3hs4"),_(R,"class","svelte-2q3hs4"),_(k,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(I,"class","svelte-2q3hs4"),_(H,"class","svelte-2q3hs4"),_(P,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(v,"class","flex fw fjc-center categories svelte-2q3hs4"),_(Z,"class","categoryTitle svelte-2q3hs4"),_(G,"class","flex fd-col smaller-fs limit-width svelte-2q3hs4"),_(ie,"class","svelte-2q3hs4"),_($,"class","svelte-2q3hs4"),_(F,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(B,"class","flex fw fjc-center categories svelte-2q3hs4"),_(g,"class","flex categoriesCont svelte-2q3hs4"),_(M,"class","categoryTitle svelte-2q3hs4"),_(L,"class","flex fd-col smaller-fs limit-width svelte-2q3hs4"),_(at,"class","svelte-2q3hs4"),_(ft,"class","svelte-2q3hs4"),_(be,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(ze,"class","svelte-2q3hs4"),_(Re,"class","svelte-2q3hs4"),_(Ce,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(ht,"class","svelte-2q3hs4"),_(He,"class","svelte-2q3hs4"),_(it,"class","flex fd-col smaller-fs list svelte-2q3hs4"),_(y,"class","flex fw fjc-center categories svelte-2q3hs4"),_(W,"class","flex categoriesCont svelte-2q3hs4"),_(s,"class","flex fd-col smaller-fs svelte-2q3hs4"),_(s,"id","contents")},m(j,mt){S(j,e,mt),S(j,t,mt),S(j,s,mt),f(s,i),f(s,r),f(s,o),f(s,l),f(s,a),f(s,c),f(s,u),f(s,d),f(s,h),f(s,p),f(s,g),f(g,v),f(v,w),f(v,N),f(v,k),f(k,A),f(k,D),f(k,R);for(let U=0;U<Xe.length;U+=1)Xe[U]&&Xe[U].m(R,null);f(v,q),f(v,P),f(P,I),f(P,T),f(P,H);for(let U=0;U<ge.length;U+=1)ge[U]&&ge[U].m(H,null);f(g,z),f(g,B),f(B,Z),f(B,ue),f(B,G),f(B,O),f(B,F),f(F,ie),f(F,X),f(F,$);for(let U=0;U<ye.length;U+=1)ye[U]&&ye[U].m($,null);f(s,Q),f(s,W),f(W,y),f(y,M),f(y,V),f(y,L),f(y,pe),f(y,be),f(be,at),f(be,je),f(be,ft);for(let U=0;U<12;U+=1)Pe[U]&&Pe[U].m(ft,null);f(y,It),f(y,Ce),f(Ce,ze),f(Ce,St),f(Ce,Re);for(let U=0;U<7;U+=1)de[U]&&de[U].m(Re,null);f(y,fe),f(y,it),f(it,ht),f(it,Ot),f(it,He);for(let U=0;U<Oe.length;U+=1)Oe[U]&&Oe[U].m(He,null)},p(j,[mt]){if(mt&0){ct=_e(Object.values(si));let U;for(U=0;U<ct.length;U+=1){const K=Il(j,ct,U);ge[U]?ge[U].p(K,mt):(ge[U]=Sl(K),ge[U].c(),ge[U].m(H,null))}for(;U<ge.length;U+=1)ge[U].d(1);ge.length=ct.length}if(mt&0){De=_e(Object.values(ii));let U;for(U=0;U<De.length;U+=1){const K=El(j,De,U);ye[U]?ye[U].p(K,mt):(ye[U]=kl(K),ye[U].c(),ye[U].m($,null))}for(;U<ye.length;U+=1)ye[U].d(1);ye.length=De.length}if(mt&0){we=_e(Object.values(ni).slice(0,-1));let U;for(U=0;U<we.length;U+=1){const K=Cl(j,we,U);Oe[U]?Oe[U].p(K,mt):(Oe[U]=Tl(K),Oe[U].c(),Oe[U].m(He,null))}for(;U<Oe.length;U+=1)Oe[U].d(1);Oe.length=we.length}},i:ne,o:ne,d(j){j&&(E(e),E(t),E(s)),nt(Xe,j),nt(ge,j),nt(ye,j),nt(Pe,j),nt(de,j),nt(Oe,j)}}}class Vc extends lt{constructor(e){super(),ot(this,e,null,om,Je,{})}}function lm(n){let e,t,s;return{c(){e=m("span"),e.textContent="Frontierdle Policy",t=b(),s=m("div"),s.innerHTML=`<hr/> <span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-932r7h"),_(s,"id","contents")},m(i,r){S(i,e,r),S(i,t,r),S(i,s,r)},p:ne,i:ne,o:ne,d(i){i&&(E(e),E(t),E(s))}}}class am extends lt{constructor(e){super(),ot(this,e,null,lm,Je,{})}}function Nl(n){let e,t,s;return{c(){e=m("iconify-icon"),Ge(e,"icon","uil:exclamation"),Ge(e,"id","unseen"),Ge(e,"class","svelte-1o089h7")},m(i,r){S(i,e,r),s=!0},i(i){s||(i&&Ve(()=>{s&&(t||(t=ke(e,Bt,{duration:150},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=ke(e,Bt,{duration:150},!1)),t.run(0)),s=!1},d(i){i&&E(e),i&&t&&t.end()}}}function cm(n){let e,t,s,i,r,o,l,a,c,u,d,h,p,g,v,w,N,k,A=!n[2]&&Nl();return{c(){e=m("button"),e.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',t=b(),s=m("a"),s.innerHTML=`Support me
    <img src="misc/kofi-badge.png" alt="" class="svelte-1o089h7"/>`,i=b(),r=m("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=b(),l=m("button"),a=m("iconify-icon"),c=b(),u=m("span"),u.textContent="Changelog",d=b(),A&&A.c(),h=b(),p=m("button"),p.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',g=b(),v=m("span"),w=Y(n[0]),_(e,"class","info p-1 svelte-1o089h7"),_(e,"id","credits"),_(s,"class","info p-1 svelte-1o089h7"),_(s,"id","donate"),_(s,"href","https://ko-fi.com/xt8ss"),_(s,"target","_blank"),_(r,"class","info p-1 svelte-1o089h7"),_(r,"id","help"),Ge(a,"icon","octicon:log-16"),_(u,"class","tooltip"),_(u,"id","right"),_(l,"class","info svelte-1o089h7"),_(l,"id","changelog"),_(p,"class","info p-1 svelte-1o089h7"),_(p,"id","policy"),_(v,"class","info svelte-1o089h7"),_(v,"id","version")},m(D,R){S(D,e,R),S(D,t,R),S(D,s,R),S(D,i,R),S(D,r,R),S(D,o,R),S(D,l,R),f(l,a),f(l,c),f(l,u),f(l,d),A&&A.m(l,null),S(D,h,R),S(D,p,R),S(D,g,R),S(D,v,R),f(v,w),N||(k=[ve(e,"click",n[3]),ve(r,"click",n[4]),ve(l,"click",n[5]),ve(p,"click",n[6])],N=!0)},p(D,[R]){D[2]?A&&(bt(),se(A,1,1,()=>{A=null}),yt()):A?R&4&&J(A,1):(A=Nl(),A.c(),J(A,1),A.m(l,null)),R&1&&le(w,D[0])},i(D){J(A)},o(D){se(A)},d(D){D&&(E(e),E(t),E(s),E(i),E(r),E(o),E(l),E(h),E(p),E(g),E(v)),A&&A.d(),N=!1,Qe(k)}}}function um(n,e,t){let s,i;oe(n,rt,u=>t(1,s=u)),oe(n,gs,u=>t(2,i=u));let{version:r}=e;const o=u=>{Ft(u),re(rt,s.component=Zp,s)},l=u=>{Ft(u),re(rt,s.component=Vc,s)},a=u=>{Ft(u),re(rt,s.component=Jp,s),re(gs,i=!0,i)},c=u=>{Ft(u),re(rt,s.component=am,s)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,s,i,o,l,a,c]}class fm extends lt{constructor(e){super(),ot(this,e,um,cm,Je,{version:0})}}function hm(n){let e,t,s,i,r,o,l,a,c,u,d,h,p,g,v,w;return{c(){e=m("div"),t=m("span"),t.textContent="Choose your category",s=b(),i=m("button"),r=m("img"),l=b(),a=m("span"),a.textContent="Equipment",c=b(),u=m("button"),d=m("img"),p=b(),g=m("span"),g.textContent="Weapons",_(t,"id","title"),_(t,"class","svelte-w2ulp9"),Ke(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/7/7a/WhiteSpectralVanguardIcon.png")||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-w2ulp9"),i.disabled=n[0],_(i,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-w2ulp9"),qe(i,"selected",n[1].mode=="equipment"),Ke(d.src,h="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/9/95/TheJadeTwin.png")||_(d,"src",h),_(d,"alt",""),_(d,"class","svelte-w2ulp9"),u.disabled=n[0],_(u,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-w2ulp9"),qe(u,"selected",n[1].mode=="weapons"),_(e,"class","chooseModeCont ff-bg flex fd-row fw border-tp br-1 bs svelte-w2ulp9")},m(N,k){S(N,e,k),f(e,t),f(e,s),f(e,i),f(i,r),f(i,l),f(i,a),f(e,c),f(e,u),f(u,d),f(u,p),f(u,g),v||(w=[ve(i,"click",n[2]),ve(u,"click",n[3])],v=!0)},p(N,[k]){k&1&&(i.disabled=N[0]),k&2&&qe(i,"selected",N[1].mode=="equipment"),k&1&&(u.disabled=N[0]),k&2&&qe(u,"selected",N[1].mode=="weapons")},i:ne,o:ne,d(N){N&&E(e),v=!1,Qe(w)}}}function dm(n,e,t){let s,i;return oe(n,_n,l=>t(0,s=l)),oe(n,Ct,l=>t(1,i=l)),[s,i,l=>{Ft(l),s||re(Ct,i.mode="equipment",i)},l=>{Ft(l),s||re(Ct,i.mode="weapons",i)}]}class _m extends lt{constructor(e){super(),ot(this,e,dm,hm,Je,{})}}function Rl(n,e,t){const s=n.slice();return s[6]=e[t][0],s[7]=e[t][1],s[8]=e[t][2],s[10]=t,s}function Dl(n){let e,t,s=n[6]+"",i,r,o,l,a;function c(){return n[5](n[8],n[7])}return{c(){e=m("div"),t=m("button"),i=Y(s),o=b(),t.disabled=r=n[8],_(t,"class","flex fjc-center fai-center light-hover svelte-1mwja36"),_(e,"class","ff-bg posrel border-tp br-1 svelte-1mwja36")},m(u,d){S(u,e,d),f(e,t),f(t,i),f(e,o),l||(a=[ve(t,"click",c),Vl(n[3].call(null,t,n[10]))],l=!0)},p(u,d){n=u,d&1&&s!==(s=n[6]+"")&&le(i,s),d&1&&r!==(r=n[8])&&(t.disabled=r)},d(u){u&&E(e),l=!1,Qe(a)}}}function pm(n){let e,t=_e(n[0]),s=[];for(let i=0;i<t.length;i+=1)s[i]=Dl(Rl(n,t,i));return{c(){e=m("div");for(let i=0;i<s.length;i+=1)s[i].c();_(e,"class","options flex svelte-1mwja36")},m(i,r){S(i,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(i,[r]){if(r&7){t=_e(i[0]);let o;for(o=0;o<t.length;o+=1){const l=Rl(i,t,o);s[o]?s[o].p(l,r):(s[o]=Dl(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},i:ne,o:ne,d(i){i&&E(e),nt(s,i)}}}function mm(n,e,t){let s;oe(n,rt,c=>t(1,s=c));const i=Zl();let{options:r=[],focus:o=null}=e;function l(c,u){u+1===o&&c.focus()}const a=(c,u)=>{c||(i("clicked"),u(),re(rt,s.component=null,s))};return n.$$set=c=>{"options"in c&&t(0,r=c.options),"focus"in c&&t(4,o=c.focus)},[r,s,i,l,o,a]}class Yc extends lt{constructor(e){super(),ot(this,e,mm,pm,Je,{options:0,focus:4})}}function gm(n){let e,t,s,i,r,o,l,a,c,u,d,h,p;return h=new Yc({props:{options:[["Don't show again",n[3]],["Maybe later",n[4]]],focus:2}}),h.$on("clicked",n[5]),{c(){e=m("span"),e.textContent="Support Me",t=b(),s=m("div"),i=m("p"),i.textContent="Thank you for your continuous use of my site!",r=b(),o=m("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,l=b(),a=m("p"),a.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,c=b(),u=m("a"),u.innerHTML='<img src="misc/kofi-badge.png" alt="Ko-fi" class="svelte-1wbcr77"/>',d=b(),Fe(h.$$.fragment),_(e,"class","title"),_(u,"class","flex br-1 bg-change light-hover svelte-1wbcr77"),_(u,"href","https://ko-fi.com/xt8ss"),_(u,"target","_blank"),_(s,"class","flex fd-col fai-center smaller-fs svelte-1wbcr77"),_(s,"id","contents")},m(g,v){S(g,e,v),S(g,t,v),S(g,s,v),f(s,i),f(s,r),f(s,o),f(s,l),f(s,a),f(s,c),f(s,u),f(s,d),Me(h,s,null),p=!0},p(g,[v]){const w={};v&2&&(w.options=[["Don't show again",g[3]],["Maybe later",g[4]]]),h.$set(w)},i(g){p||(J(h.$$.fragment,g),p=!0)},o(g){se(h.$$.fragment,g),p=!1},d(g){g&&(E(e),E(t),E(s)),Le(h)}}}function vm(n,e,t){let s,i;oe(n,ln,c=>t(1,s=c)),oe(n,rt,c=>t(2,i=c));let r=!1;const o=()=>re(ln,s.showAgain=!1,s),l=()=>re(ln,s.timesDenied++,s),a=()=>t(0,r=!0);return n.$$.update=()=>{n.$$.dirty&7&&i.component===null&&!r&&re(ln,s.timesDenied++,s)},[r,s,i,o,l,a]}class bm extends lt{constructor(e){super(),ot(this,e,vm,gm,Je,{})}}function Al(n){let e,t;return{c(){e=m("span"),t=Y(n[4]),_(e,"class","ff-item svelte-1w4quf3")},m(s,i){S(s,e,i),f(e,t)},p(s,i){i&16&&le(t,s[4])},d(s){s&&E(e)}}}function ym(n){let e,t,s,i,r,o,l,a,c,u,d,h,p,g,v,w,N,k,A,D,R,q,P,I,T,H,z,B,Z,ue,G,O,F,ie,X,$,Q,W,y,M,V,L,pe,be,at,je,ft,It,Ce,ze,St,Re,fe,it,ht,Ot,He,Se,Xe,ct;function ge(K){n[8](K)}function De(K){n[9](K)}let ye={size:"4.5"};n[0]!==void 0&&(ye.checked=n[0]),n[0]!==void 0&&(ye.forced=n[0]),d=new Ms({props:ye}),Be.push(()=>Tt(d,"checked",ge)),Be.push(()=>Tt(d,"forced",De)),d.$on("toggle",n[10]);function xe(K){n[11](K)}function Pe(K){n[12](K)}let ee={size:"4.5"};n[3]!==void 0&&(ee.checked=n[3]),n[3]!==void 0&&(ee.forced=n[3]),k=new Ms({props:ee}),Be.push(()=>Tt(k,"checked",xe)),Be.push(()=>Tt(k,"forced",Pe)),k.$on("toggle",n[13]);function de(K){n[14](K)}function we(K){n[15](K)}let Oe={noGuess:!0};n[6]!==void 0&&(Oe.noGuessMode=n[6]),n[4]!==void 0&&(Oe.noGuessItem=n[4]),T=new Uc({props:Oe}),Be.push(()=>Tt(T,"noGuessMode",de)),Be.push(()=>Tt(T,"noGuessItem",we));let j=n[4]&&Al(n);function mt(K){n[16](K)}let U={size:"4.5",disabled:!n[4]};return n[5]!==void 0&&(U.checked=n[5]),W=new Ms({props:U}),Be.push(()=>Tt(W,"checked",mt)),W.$on("toggle",n[17]),He=new Yc({props:{options:[["Create",n[7],!n[4]]]}}),{c(){e=m("div"),e.textContent="Create a Room",t=b(),s=m("div"),i=m("hr"),r=b(),o=m("div"),l=m("span"),l.textContent="Mode:",a=b(),c=m("div"),u=m("span"),Fe(d.$$.fragment),g=b(),v=m("span"),v.textContent="Equipment",w=b(),N=m("span"),Fe(k.$$.fragment),R=b(),q=m("span"),q.textContent="Weapons",P=b(),I=m("div"),Fe(T.$$.fragment),B=b(),Z=m("div"),ue=m("span"),ue.textContent="Item:",G=b(),j&&j.c(),O=b(),F=m("hr"),ie=b(),X=m("div"),$=m("span"),$.innerHTML='<button class="flex posrel no-bg-change"><iconify-icon icon="eva:info-outline" id="infoIcon" class="svelte-1w4quf3"></iconify-icon> <span class="tooltip" id="left">Does not affect attempt count</span></button> <span>Nightmare Mode:</span>',Q=b(),Fe(W.$$.fragment),M=b(),V=m("hr"),L=b(),pe=m("div"),be=m("span"),be.textContent="Max Player Count:",at=b(),je=m("input"),It=b(),Ce=m("div"),ze=m("span"),ze.textContent="Max Attempt Count:",St=b(),Re=m("input"),it=b(),ht=m("hr"),Ot=b(),Fe(He.$$.fragment),_(e,"class","title"),_(u,"class","flex fai-center cg-1"),_(N,"class","flex fai-center cg-1"),_(c,"class","flex fd-col rg-1"),_(o,"class","flex fjc-center fai-center svelte-1w4quf3"),_(o,"id","modeChooser"),_(I,"class","flex fjc-center posrel"),_(Z,"class","flex fjc-center fai-center cg-1 svelte-1w4quf3"),_(Z,"id","itemName"),_($,"class","flex fai-center cg-1"),_(X,"class","flex fjc-center fai-center cg-1"),_(je,"type","number"),_(je,"placeholder","4"),je.disabled=ft=!n[4],_(je,"class","border-tp br-1 svelte-1w4quf3"),_(pe,"class","flex fjc-center fai-center cg-1"),_(Re,"type","number"),_(Re,"placeholder","7"),Re.disabled=fe=!n[4],_(Re,"class","border-tp br-1 svelte-1w4quf3"),_(Ce,"class","flex fjc-center fai-center cg-1"),_(s,"class","flex fd-col smaller-fs svelte-1w4quf3"),_(s,"id","contents")},m(K,Ue){S(K,e,Ue),S(K,t,Ue),S(K,s,Ue),f(s,i),f(s,r),f(s,o),f(o,l),f(o,a),f(o,c),f(c,u),Me(d,u,null),f(u,g),f(u,v),f(c,w),f(c,N),Me(k,N,null),f(N,R),f(N,q),f(s,P),f(s,I),Me(T,I,null),f(s,B),f(s,Z),f(Z,ue),f(Z,G),j&&j.m(Z,null),f(s,O),f(s,F),f(s,ie),f(s,X),f(X,$),f(X,Q),Me(W,X,null),f(s,M),f(s,V),f(s,L),f(s,pe),f(pe,be),f(pe,at),f(pe,je),Ns(je,n[1]),f(s,It),f(s,Ce),f(Ce,ze),f(Ce,St),f(Ce,Re),Ns(Re,n[2]),f(s,it),f(s,ht),f(s,Ot),Me(He,s,null),Se=!0,Xe||(ct=[ve(je,"input",n[18]),ve(Re,"input",n[19])],Xe=!0)},p(K,[Ue]){const xn={};!h&&Ue&1&&(h=!0,xn.checked=K[0],kt(()=>h=!1)),!p&&Ue&1&&(p=!0,xn.forced=K[0],kt(()=>p=!1)),d.$set(xn);const Bn={};!A&&Ue&8&&(A=!0,Bn.checked=K[3],kt(()=>A=!1)),!D&&Ue&8&&(D=!0,Bn.forced=K[3],kt(()=>D=!1)),k.$set(Bn);const Gn={};!H&&Ue&64&&(H=!0,Gn.noGuessMode=K[6],kt(()=>H=!1)),!z&&Ue&16&&(z=!0,Gn.noGuessItem=K[4],kt(()=>z=!1)),T.$set(Gn),K[4]?j?j.p(K,Ue):(j=Al(K),j.c(),j.m(Z,null)):j&&(j.d(1),j=null);const Hn={};Ue&16&&(Hn.disabled=!K[4]),!y&&Ue&32&&(y=!0,Hn.checked=K[5],kt(()=>y=!1)),W.$set(Hn),(!Se||Ue&16&&ft!==(ft=!K[4]))&&(je.disabled=ft),Ue&2&&Ls(je.value)!==K[1]&&Ns(je,K[1]),(!Se||Ue&16&&fe!==(fe=!K[4]))&&(Re.disabled=fe),Ue&4&&Ls(Re.value)!==K[2]&&Ns(Re,K[2]);const Ss={};Ue&16&&(Ss.options=[["Create",K[7],!K[4]]]),He.$set(Ss)},i(K){Se||(J(d.$$.fragment,K),J(k.$$.fragment,K),J(T.$$.fragment,K),J(W.$$.fragment,K),J(He.$$.fragment,K),Se=!0)},o(K){se(d.$$.fragment,K),se(k.$$.fragment,K),se(T.$$.fragment,K),se(W.$$.fragment,K),se(He.$$.fragment,K),Se=!1},d(K){K&&(E(e),E(t),E(s)),Le(d),Le(k),Le(T),j&&j.d(),Le(W),Le(He),Xe=!1,Qe(ct)}}}function wm(n,e,t){let s,i;oe(n,Os,I=>t(20,i=I));let r=!0,o=!1,l="",a=!1,c=4,u=7;function d(){re(Os,i.host=!0,i),re(Os,i.id=1,i);let I={mode:s,item:l,hardMode:a,playerCount:c,attemptCount:u,players:{}};Fc(ps(sr(Hc),`rooms/${i.id}`),I).then(()=>{})}function h(I){r=I,t(0,r)}function p(I){r=I,t(0,r)}const g=I=>{t(0,r=I.detail.checked),t(3,o=!1),t(4,l="")};function v(I){o=I,t(3,o)}function w(I){o=I,t(3,o)}const N=I=>{t(3,o=I.detail.checked),t(0,r=!1),t(4,l="")};function k(I){s=I,t(6,s),t(0,r)}function A(I){l=I,t(4,l)}function D(I){a=I,t(5,a)}const R=I=>t(5,a=I.detail.checked);function q(){c=Ls(this.value),t(1,c)}function P(){u=Ls(this.value),t(2,u)}return n.$$.update=()=>{n.$$.dirty&2&&c<1&&t(1,c=1),n.$$.dirty&2&&c>6&&t(1,c=6),n.$$.dirty&2&&c&&t(1,c=Math.floor(c)),n.$$.dirty&1&&t(6,s=r?"equipment":"weapons"),n.$$.dirty&4&&u<1&&t(2,u=1),n.$$.dirty&4&&u>7&&t(2,u=7),n.$$.dirty&4&&u&&t(2,u=Math.floor(u))},[r,c,u,o,l,a,s,d,h,p,g,v,w,N,k,A,D,R,q,P]}class Cm extends lt{constructor(e){super(),ot(this,e,wm,ym,Je,{})}}const{document:Qn,window:nn}=tu;function Pl(n,e,t){const s=n.slice();return s[80]=e[t],s}function Ol(n,e,t){const s=n.slice();return s[80]=e[t],s}function Ml(n){let e;return{c(){e=m("link"),_(e,"rel","preload"),_(e,"as","image"),_(e,"href",n[80])},m(t,s){S(t,e,s)},p:ne,d(t){t&&E(e)}}}function Ll(n){let e;return{c(){e=m("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,s){S(t,e,s)},d(t){t&&E(e)}}}function Fl(n){let e,t;return{c(){e=m("img"),_(e,"class","background svelte-105j5xd"),Ke(e.src,t=n[80])||_(e,"src",t),_(e,"alt",""),qe(e,"active",n[32].indexOf(n[80])==n[23])},m(s,i){S(s,e,i)},p(s,i){i[0]&8388608|i[1]&2&&qe(e,"active",s[32].indexOf(s[80])==s[23])},d(s){s&&E(e)}}}function ql(n){let e,t,s=Math.floor(n[29][n[2]]*100)+"",i,r,o,l;return{c(){e=m("span"),t=Y("Zoom: "),i=Y(s),r=m("b"),r.textContent="%",_(e,"class","info svelte-105j5xd"),_(e,"id","zoomLevel")},m(a,c){S(a,e,c),f(e,t),f(e,i),f(e,r),l=!0},p(a,c){(!l||c[0]&4)&&s!==(s=Math.floor(a[29][a[2]]*100)+"")&&le(i,s)},i(a){l||(a&&Ve(()=>{l&&(o||(o=ke(e,Bt,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=ke(e,Bt,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&E(e),a&&o&&o.end()}}}function Wl(n){let e,t,s,i,r,o,l,a,c=n[9].muted?"Muted":"Unmuted",u,d,h,p,g,v,w,N,k,A,D,R=ai(n[20],n[21],n[22])+"",q,P,I,T,H,z,B,Z,ue,G,O,F;const ie=[Im,Em],X=[];function $(y,M){return y[26].host?0:1}H=$(n),z=X[H]=ie[H](n);let Q=n[24].component&&n[24].complete&&Gl(n),W=n[24].component&&!n[24].complete&&Hl(n);return{c(){e=m("main"),t=m("div"),s=m("div"),i=m("button"),r=m("iconify-icon"),l=b(),a=m("span"),u=Y(c),d=b(),h=m("button"),p=m("img"),v=b(),w=m("span"),N=Y(`Next items in...
                    `),k=m("br"),A=b(),D=new Jl(!1),q=b(),P=m("div"),I=m("button"),I.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-105j5xd"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',T=b(),z.c(),B=b(),Q&&Q.c(),Z=b(),W&&W.c(),ue=_t(),Ge(r,"icon",o="f7:speaker-"+(n[9].muted?"slash":"2")+"-fill"),Ge(r,"class","svelte-105j5xd"),_(a,"class","tooltip"),_(a,"id","bottom"),_(i,"class","flex light-hover svelte-105j5xd"),_(s,"class","iconToggle ff-bg posrel border-tp br-1 bs svelte-105j5xd"),Ke(p.src,g="frontierdle.svg")||_(p,"src",g),_(p,"alt","Frontierdle"),_(p,"class","svelte-105j5xd"),D.a=null,_(w,"class","tooltip svelte-105j5xd"),_(w,"id","bottom"),_(h,"class","iconCont ff-bg posrel border-tp br-1 bs no-bg-change svelte-105j5xd"),_(I,"class","flex posrel light-hover svelte-105j5xd"),_(P,"class","iconToggle ff-bg border-tp br-1 bs svelte-105j5xd"),_(t,"class","upperMenu flex fai-center svelte-105j5xd"),_(e,"class","flex fd-col fai-center posrel svelte-105j5xd")},m(y,M){S(y,e,M),f(e,t),f(t,s),f(s,i),f(i,r),f(i,l),f(i,a),f(a,u),f(t,d),f(t,h),f(h,p),f(h,v),f(h,w),f(w,N),f(w,k),f(w,A),D.m(R,w),f(t,q),f(t,P),f(P,I),f(e,T),X[H].m(e,null),S(y,B,M),Q&&Q.m(y,M),S(y,Z,M),W&&W.m(y,M),S(y,ue,M),G=!0,O||(F=[ve(i,"click",n[49]),ve(I,"click",n[50])],O=!0)},p(y,M){(!G||M[0]&512&&o!==(o="f7:speaker-"+(y[9].muted?"slash":"2")+"-fill"))&&Ge(r,"icon",o),(!G||M[0]&512)&&c!==(c=y[9].muted?"Muted":"Unmuted")&&le(u,c),(!G||M[0]&7340032)&&R!==(R=ai(y[20],y[21],y[22])+"")&&D.p(R);let V=H;H=$(y),H===V?X[H].p(y,M):(bt(),se(X[V],1,1,()=>{X[V]=null}),yt(),z=X[H],z?z.p(y,M):(z=X[H]=ie[H](y),z.c()),J(z,1),z.m(e,null)),y[24].component&&y[24].complete?Q?(Q.p(y,M),M[0]&16777216&&J(Q,1)):(Q=Gl(y),Q.c(),J(Q,1),Q.m(Z.parentNode,Z)):Q&&(bt(),se(Q,1,1,()=>{Q=null}),yt()),y[24].component&&!y[24].complete?W?(W.p(y,M),M[0]&16777216&&J(W,1)):(W=Hl(y),W.c(),J(W,1),W.m(ue.parentNode,ue)):W&&(bt(),se(W,1,1,()=>{W=null}),yt())},i(y){G||(J(z),J(Q),J(W),G=!0)},o(y){se(z),se(Q),se(W),G=!1},d(y){y&&(E(e),E(B),E(Z),E(ue)),X[H].d(),Q&&Q.d(y),W&&W.d(y),O=!1,Qe(F)}}}function Em(n){let e,t,s,i,r,o,l,a,c,u,d,h=n[3].includes("equipment")?"stat":" stat intake",p,g,v,w,N,k,A,D,R,q,P,I,T,H;e=new _m({}),k=new Ms({props:{size:"5",checked:n[5],disabled:n[6].chosenItems.length!=0}}),k.$on("toggle",n[53]);let z=!n[6].gameWin&&!n[6].gameOver&&jl(n),B=(n[6].gameWin||n[6].gameOver)&&xl(n);function Z(O){n[56](O)}let ue={};n[12]!==void 0&&(ue.dailyItemsData=n[12]),q=new Op({props:ue}),Be.push(()=>Tt(q,"dailyItemsData",Z));let G=n[13][n[3]]&&Bl(n);return{c(){Fe(e.$$.fragment),t=b(),s=b(),i=m("div"),r=m("button"),o=m("iconify-icon"),l=b(),a=m("span"),c=Y(`No armor (more damage taken).
                        `),u=m("br"),d=Y(`
                        No `),p=Y(h),g=Y(" / avg. cost / color clues."),v=b(),w=m("span"),w.textContent="Nightmare Mode",N=b(),Fe(k.$$.fragment),A=b(),z&&z.c(),D=b(),B&&B.c(),R=b(),Fe(q.$$.fragment),I=b(),G&&G.c(),T=_t(),Ge(o,"icon","eva:info-outline"),Ge(o,"id","info"),Ge(o,"class","svelte-105j5xd"),_(a,"class","tooltip svelte-105j5xd"),_(a,"id","bottom"),_(r,"class","flex posrel no-bg-change"),_(i,"class","hardModeCont ff-bg flex fai-center cg-1 border-tp br-1 bs svelte-105j5xd")},m(O,F){Me(e,O,F),S(O,t,F),S(O,s,F),S(O,i,F),f(i,r),f(r,o),f(r,l),f(r,a),f(a,c),f(a,u),f(a,d),f(a,p),f(a,g),f(i,v),f(i,w),f(i,N),Me(k,i,null),S(O,A,F),z&&z.m(O,F),S(O,D,F),B&&B.m(O,F),S(O,R,F),Me(q,O,F),S(O,I,F),G&&G.m(O,F),S(O,T,F),H=!0},p(O,F){(!H||F[0]&8)&&h!==(h=O[3].includes("equipment")?"stat":" stat intake")&&le(p,h);const ie={};F[0]&32&&(ie.checked=O[5]),F[0]&64&&(ie.disabled=O[6].chosenItems.length!=0),k.$set(ie),!O[6].gameWin&&!O[6].gameOver?z?(z.p(O,F),F[0]&64&&J(z,1)):(z=jl(O),z.c(),J(z,1),z.m(D.parentNode,D)):z&&(bt(),se(z,1,1,()=>{z=null}),yt()),O[6].gameWin||O[6].gameOver?B?(B.p(O,F),F[0]&64&&J(B,1)):(B=xl(O),B.c(),J(B,1),B.m(R.parentNode,R)):B&&(bt(),se(B,1,1,()=>{B=null}),yt());const X={};!P&&F[0]&4096&&(P=!0,X.dailyItemsData=O[12],kt(()=>P=!1)),q.$set(X),O[13][O[3]]?G?G.p(O,F):(G=Bl(O),G.c(),G.m(T.parentNode,T)):G&&(G.d(1),G=null)},i(O){H||(J(e.$$.fragment,O),J(k.$$.fragment,O),J(z),J(B),J(q.$$.fragment,O),H=!0)},o(O){se(e.$$.fragment,O),se(k.$$.fragment,O),se(z),se(B),se(q.$$.fragment,O),H=!1},d(O){O&&(E(t),E(s),E(i),E(A),E(D),E(R),E(I),E(T)),Le(e,O),Le(k),z&&z.d(O),B&&B.d(O),Le(q,O),G&&G.d(O)}}}function Im(n){let e;return{c(){e=Y(`if you're seeing this you have the right to reprimand me for being a
            bad coder`)},m(t,s){S(t,e,s)},p:ne,i:ne,o:ne,d(t){t&&E(e)}}}function jl(n){let e,t,s;function i(o){n[54](o)}let r={};return n[19][n[3]]!==void 0&&(r.gameNumber=n[19][n[3]]),e=new xp({props:r}),Be.push(()=>Tt(e,"gameNumber",i)),{c(){Fe(e.$$.fragment)},m(o,l){Me(e,o,l),s=!0},p(o,l){const a={};!t&&l[0]&524296&&(t=!0,a.gameNumber=o[19][o[3]],kt(()=>t=!1)),e.$set(a)},i(o){s||(J(e.$$.fragment,o),s=!0)},o(o){se(e.$$.fragment,o),s=!1},d(o){Le(e,o)}}}function xl(n){let e,t,s=n[6].gameWin?"Fantastic!":"Farewell...",i,r,o,l,a,c=n[6].gameWin?"won":"lost",u,d,h,p,g,v,w,N,k,A,D,R,q,P,I=n[12][n[3]].name+"",T,H,z,B,Z,ue,G,O=ai(n[20],n[21],n[22])+"",F,ie,X,$,Q,W,y;function M(L){n[55](L)}let V={};return n[19][n[3]]!==void 0&&(V.gameNumber=n[19][n[3]]),X=new Hp({props:V}),Be.push(()=>Tt(X,"gameNumber",M)),W=new zc({}),{c(){e=m("div"),t=m("span"),i=Y(s),r=b(),o=m("img"),a=Y(`
                        You `),u=Y(c),d=Y("!"),h=b(),p=m("span"),p.textContent="Today's item was...",g=b(),v=m("div"),w=m("a"),N=m("img"),A=b(),D=m("iconify-icon"),q=b(),P=m("span"),T=Y(I),H=b(),z=m("span"),B=Y(`Next item available in...
                        `),Z=m("br"),ue=b(),G=m("span"),ie=b(),Fe(X.$$.fragment),Q=b(),Fe(W.$$.fragment),Ke(o.src,l=n[6].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||_(o,"src",l),_(o,"id","gameFinishIcon"),_(o,"alt",""),_(o,"class","svelte-105j5xd"),_(t,"class","flex fai-center svelte-105j5xd"),_(t,"id","gameFinishMessage"),_(p,"class","smaller-fs"),Ke(N.src,k=Zt+n[12][n[3]].image)||_(N,"src",k),_(N,"alt",""),_(N,"class","svelte-105j5xd"),Ge(D,"icon","tabler:link"),Ge(D,"class","svelte-105j5xd"),_(w,"class","flex fjc-center fai-center svelte-105j5xd"),_(w,"href",R=Ln+n[12][n[3]].link),_(w,"target","_blank"),_(v,"class","itemImg ff-item flex svelte-105j5xd"),_(v,"id","dailyItemImg"),_(P,"class","ff-item itemName svelte-105j5xd"),_(P,"id","dailyItemName"),_(G,"class","ff-item svelte-105j5xd"),_(G,"id","nextItemTime"),_(z,"class","flex fd-col svelte-105j5xd"),_(z,"id","nextItemCont"),_(e,"class","gameFinishCont ff-bg flex fd-col fai-center rg-1 border-tp br-1 bs svelte-105j5xd")},m(L,pe){S(L,e,pe),f(e,t),f(t,i),f(t,r),f(t,o),f(t,a),f(t,u),f(t,d),f(e,h),f(e,p),f(e,g),f(e,v),f(v,w),f(w,N),f(w,A),f(w,D),f(e,q),f(e,P),f(P,T),f(e,H),f(e,z),f(z,B),f(z,Z),f(z,ue),f(z,G),G.innerHTML=O,S(L,ie,pe),Me(X,L,pe),S(L,Q,pe),Me(W,L,pe),y=!0},p(L,pe){(!y||pe[0]&64)&&s!==(s=L[6].gameWin?"Fantastic!":"Farewell...")&&le(i,s),(!y||pe[0]&64&&!Ke(o.src,l=L[6].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&_(o,"src",l),(!y||pe[0]&64)&&c!==(c=L[6].gameWin?"won":"lost")&&le(u,c),(!y||pe[0]&4104&&!Ke(N.src,k=Zt+L[12][L[3]].image))&&_(N,"src",k),(!y||pe[0]&4104&&R!==(R=Ln+L[12][L[3]].link))&&_(w,"href",R),(!y||pe[0]&4104)&&I!==(I=L[12][L[3]].name+"")&&le(T,I),(!y||pe[0]&7340032)&&O!==(O=ai(L[20],L[21],L[22])+"")&&(G.innerHTML=O);const be={};!$&&pe[0]&524296&&($=!0,be.gameNumber=L[19][L[3]],kt(()=>$=!1)),X.$set(be)},i(L){y||(L&&Ve(()=>{y&&(F||(F=ke(e,Bt,{duration:150},!0)),F.run(1))}),J(X.$$.fragment,L),J(W.$$.fragment,L),y=!0)},o(L){L&&(F||(F=ke(e,Bt,{duration:150},!1)),F.run(0)),se(X.$$.fragment,L),se(W.$$.fragment,L),y=!1},d(L){L&&(E(e),E(ie),E(Q)),L&&F&&F.end(),Le(X,L),Le(W,L)}}}function Bl(n){let e,t,s,i,r,o,l,a,c,u,d,h=n[13][n[3]].name+"",p;return{c(){e=m("div"),t=Y(`Yesterday's item was...
                    `),s=m("div"),i=m("a"),r=m("img"),l=b(),a=m("iconify-icon"),u=b(),d=m("span"),p=Y(h),Ke(r.src,o=Zt+n[13][n[3]].image)||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-105j5xd"),Ge(a,"icon","tabler:link"),Ge(a,"class","svelte-105j5xd"),_(i,"class","flex fjc-center fai-center svelte-105j5xd"),_(i,"href",c=Ln+n[13][n[3]].link),_(i,"target","_blank"),_(s,"class","itemImg ff-item flex svelte-105j5xd"),_(s,"id","previousItemImg"),_(d,"class","ff-item itemName svelte-105j5xd"),_(d,"id","previousItemName"),_(e,"class","previousItemCont ff-bg flex fd-col fai-center rg-1 border-tp br-1 bs svelte-105j5xd")},m(g,v){S(g,e,v),f(e,t),f(e,s),f(s,i),f(i,r),f(i,l),f(i,a),f(e,u),f(e,d),f(d,p)},p(g,v){v[0]&8200&&!Ke(r.src,o=Zt+g[13][g[3]].image)&&_(r,"src",o),v[0]&8200&&c!==(c=Ln+g[13][g[3]].link)&&_(i,"href",c),v[0]&8200&&h!==(h=g[13][g[3]].name+"")&&le(p,h)},d(g){g&&E(e)}}}function Gl(n){let e,t,s,i,r;var o=n[24].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=Fs(o,l())),{c(){e=m("div"),t&&Fe(t.$$.fragment),_(e,"class","promptCont")},m(a,c){S(a,e,c),t&&Me(t,e,null),n[57](e),s=!0,i||(r=ve(e,"click",n[58]),i=!0)},p(a,c){if(c[0]&16777216&&o!==(o=a[24].component)){if(t){bt();const u=t;se(u.$$.fragment,1,0,()=>{Le(u,1)}),yt()}o?(t=Fs(o,l()),Fe(t.$$.fragment),J(t.$$.fragment,1),Me(t,e,null)):t=null}},i(a){s||(t&&J(t.$$.fragment,a),s=!0)},o(a){t&&se(t.$$.fragment,a),s=!1},d(a){a&&E(e),t&&Le(t),n[57](null),i=!1,r()}}}function Hl(n){let e,t,s,i,r,o,l;var a=n[24].component;function c(u,d){return{props:{prompted:!0}}}return a&&(s=Fs(a,c())),{c(){e=m("div"),t=m("div"),s&&Fe(s.$$.fragment),_(t,"class","flex fd-col border-tp br-1 bs"),_(e,"class","promptCont")},m(u,d){S(u,e,d),f(e,t),s&&Me(s,t,null),n[60](e),r=!0,o||(l=[ve(t,"introstart",n[59]),ve(e,"click",n[61])],o=!0)},p(u,d){if(d[0]&16777216&&a!==(a=u[24].component)){if(s){bt();const h=s;se(h.$$.fragment,1,0,()=>{Le(h,1)}),yt()}a?(s=Fs(a,c()),Fe(s.$$.fragment),J(s.$$.fragment,1),Me(s,t,null)):s=null}},i(u){r||(s&&J(s.$$.fragment,u),u&&Ve(()=>{r&&(i||(i=ke(t,Ze,{duration:200},!0)),i.run(1))}),r=!0)},o(u){s&&se(s.$$.fragment,u),u&&(i||(i=ke(t,Ze,{duration:200},!1)),i.run(0)),r=!1},d(u){u&&E(e),s&&Le(s),u&&i&&i.end(),n[60](null),o=!1,Qe(l)}}}function Sm(n){let e,t,s,i,r,o,l,a,c,u,d,h,p,g,v,w,N,k,A,D,R,q,P,I,T,H,z=on(n[8])&&on(n[7])&&n[10],B,Z,ue,G;Ve(n[43]);let O=_e(n[32]),F=[];for(let y=0;y<O.length;y+=1)F[y]=Ml(Ol(n,O,y));let ie=n[24].component&&Ll(),X=_e(n[32]),$=[];for(let y=0;y<X.length;y+=1)$[y]=Fl(Pl(n,X,y));let Q=n[11]&&ql(n);T=new fm({props:{version:lr}});let W=z&&Wl(n);return{c(){e=b();for(let y=0;y<F.length;y+=1)F[y].c();t=_t(),ie&&ie.c(),s=_t(),i=b(),r=m("div"),o=m("audio"),c=b(),u=m("audio"),p=b(),g=m("audio"),N=b(),k=m("audio"),R=b(),q=m("div");for(let y=0;y<$.length;y+=1)$[y].c();P=b(),Q&&Q.c(),I=b(),Fe(T.$$.fragment),H=b(),W&&W.c(),B=_t(),Ke(o.src,l="audio/lucky.mp3")||_(o,"src",l),o.muted=a=n[9].muted,Ke(u.src,d="audio/farewell.mp3")||_(u,"src",d),u.muted=h=n[9].muted,Ke(g.src,v="audio/heDidItAgain.mp3")||_(g,"src",v),g.muted=w=n[9].muted,Ke(k.src,A="audio/fishCatch.mp3")||_(k,"src",A),k.muted=D=n[9].muted,_(q,"class","backgrounds")},m(y,M){S(y,e,M);for(let V=0;V<F.length;V+=1)F[V]&&F[V].m(Qn.head,null);f(Qn.head,t),ie&&ie.m(Qn.head,null),f(Qn.head,s),S(y,i,M),S(y,r,M),f(r,o),n[45](o),f(r,c),f(r,u),n[46](u),f(r,p),f(r,g),n[47](g),f(r,N),f(r,k),n[48](k),S(y,R,M),S(y,q,M);for(let V=0;V<$.length;V+=1)$[V]&&$[V].m(q,null);S(y,P,M),Q&&Q.m(y,M),S(y,I,M),Me(T,y,M),S(y,H,M),W&&W.m(y,M),S(y,B,M),Z=!0,ue||(G=[ve(nn,"beforeunload",n[39]),ve(nn,"storage",n[40]),ve(nn,"wheel",n[41],{passive:!1}),ve(nn,"keydown",n[42]),ve(nn,"resize",n[43]),ve(Qn,"visibilitychange",n[44])],ue=!0)},p(y,M){if(M[1]&2){O=_e(y[32]);let V;for(V=0;V<O.length;V+=1){const L=Ol(y,O,V);F[V]?F[V].p(L,M):(F[V]=Ml(L),F[V].c(),F[V].m(t.parentNode,t))}for(;V<F.length;V+=1)F[V].d(1);F.length=O.length}if(y[24].component?ie||(ie=Ll(),ie.c(),ie.m(s.parentNode,s)):ie&&(ie.d(1),ie=null),(!Z||M[0]&512&&a!==(a=y[9].muted))&&(o.muted=a),(!Z||M[0]&512&&h!==(h=y[9].muted))&&(u.muted=h),(!Z||M[0]&512&&w!==(w=y[9].muted))&&(g.muted=w),(!Z||M[0]&512&&D!==(D=y[9].muted))&&(k.muted=D),M[0]&8388608|M[1]&2){X=_e(y[32]);let V;for(V=0;V<X.length;V+=1){const L=Pl(y,X,V);$[V]?$[V].p(L,M):($[V]=Fl(L),$[V].c(),$[V].m(q,null))}for(;V<$.length;V+=1)$[V].d(1);$.length=X.length}y[11]?Q?(Q.p(y,M),M[0]&2048&&J(Q,1)):(Q=ql(y),Q.c(),J(Q,1),Q.m(I.parentNode,I)):Q&&(bt(),se(Q,1,1,()=>{Q=null}),yt()),M[0]&1408&&(z=on(y[8])&&on(y[7])&&y[10]),z?W?(W.p(y,M),M[0]&1408&&J(W,1)):(W=Wl(y),W.c(),J(W,1),W.m(B.parentNode,B)):W&&(bt(),se(W,1,1,()=>{W=null}),yt())},i(y){Z||(J(Q),J(T.$$.fragment,y),J(W),Z=!0)},o(y){se(Q),se(T.$$.fragment,y),se(W),Z=!1},d(y){y&&(E(e),E(i),E(r),E(R),E(q),E(P),E(I),E(H),E(B)),nt(F,y),E(t),ie&&ie.d(y),E(s),n[45](null),n[46](null),n[47](null),n[48](null),nt($,y),Q&&Q.d(y),Le(T,y),W&&W.d(y),ue=!1,Qe(G)}}}let lr="v1.1.2";function ai(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function km(n,e,t){let s,i,r,o,l,a,c,u,d,h,p,g,v,w,N,k,A,D;oe(n,Rn,C=>t(4,o=C)),oe(n,dn,C=>t(5,l=C)),oe(n,oi,C=>t(38,a=C)),oe(n,gt,C=>t(6,c=C)),oe(n,Uo,C=>t(7,u=C)),oe(n,ri,C=>t(8,d=C)),oe(n,Ct,C=>t(9,h=C)),oe(n,rt,C=>t(24,p=C)),oe(n,gs,C=>t(68,g=C)),oe(n,Mt,C=>t(25,v=C)),oe(n,ln,C=>t(69,w=C)),oe(n,or,C=>t(70,N=C)),oe(n,Os,C=>t(26,k=C)),oe(n,li,C=>t(27,A=C)),oe(n,_n,C=>t(28,D=C));let R,q,P=!1,I=7,T=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],H=!1,z,B,Z={},ue={},G=["version","builds","changelogSeen","fd-userId"],O,F,ie,X,$,Q=0;hu(()=>{if(t(10,P=!0),!N)re(or,N=!0,N),re(rt,p.component=Vc,p);else if(w.showAgain){for(let Ee in o)Q+=o[Ee].gamesPlayed;let C=Math.floor((Q-w.lastGamesPlayed)/3);C&&C>=w.timesDenied&&(re(ln,w.lastGamesPlayed=Q,w),re(rt,p.component=bm,p))}});function W(){z=setTimeout(()=>{t(11,H=!1)},750)}function y(){clearTimeout(z),t(11,H=!0),W()}let M={equipment:19816,weapons:19818},V,L,pe=58,be=58,at=58,je;function ft(){let C=0;clearInterval(je),V=Date.now()/1e3/60/60/24+C,t(19,L={equipment:Math.floor(V)-M.equipment,weapons:Math.floor(V)-M.weapons}),setTimeout(()=>{for(let Ee of["equipment","weapons"])v[Ee].gameNum!=L[Ee]+1&&(re(gt,c=Rt.currentGameData[h.mode],c),re(Mt,v[Ee]=Rt.currentGameData[Ee],v),re(Mt,v[Ee].gameNum=L[Ee]+1,v));tp(np(sr(yp))).then(Ee=>{re(Uo,u={equipment:Ee.val().rng_equipment_list[L.equipment],weapons:Ee.val().rng_weapons_list[L.weapons]},u),t(35,Z={equipment:Ee.val().rng_equipment_list[L.equipment-1],weapons:Ee.val().rng_weapons_list[L.weapons-1]})}),je=setInterval(()=>{let Ee=Date.now(),Un=(Math.floor(V)+1-C)*24*60*60*1e3-Ee;t(20,pe=Math.floor(Un/1e3/60/60)),t(21,be=Math.floor(Un%(1e3*60*60)/(1e3*60))),t(22,at=Math.floor(Un%(1e3*60)/1e3)),pe==0&&be==0&&at==0&&(re(gt,c=Rt.currentGameData[h.mode],c),re(Mt,v.equipment=Rt.currentGameData.equipment,v),re(Mt,v.weapons=Rt.currentGameData.weapons,v),setTimeout(ft,1e3))},1e3)})}ft();let It=["equipment","weapons"];for(let C of It)fetch(`https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/item-data/${C}Data.json`).then(async Ee=>{if(Ee.status!=200){console.error(`Failed to fetch ${C}!
Status: ${Ee.status}`);return}let ks=await Ee.json();re(ri,d[C]=ks.sort((Un,Jc)=>Un.name.toLowerCase().localeCompare(Jc.name.toLowerCase())),d)});let Ce=[],ze=[],St,Re,fe=9;for(let C=0;C<fe;C++)Ce.push(`backgrounds/BG${C}.jpg`);function it(C){Re=Math.floor(Math.random()*C.length)}it(Ce);function ht(){t(23,St=Re),ze.push(Re)}ht(),function C(){setTimeout(()=>{if(it(Ce),!ze.length)ht();else if(ze.length>3&&(ze=ze.slice(1)),!ze.includes(Re))ht();else{let Ee=[...Array(fe).keys()].filter(ks=>!ze.includes(ks));it(Ee),ht()}document.visibilityState=="visible"&&C()},45e3)}(),localStorage.getItem("fd-version")!=lr&&(re(gs,g=!1,g),localStorage.setItem("fd-version",lr));function Ot(){re(gt,c.gameWin=!0,c),t(36,r.gamesPlayed++,r),t(36,r.gamesWon++,r),t(36,r.streak++,r),t(36,r.winInfo[c.chosenItems.length]++,r),(c.chosenItems.length===1?$:r.streak>=3?X:F).play()}function He(){re(gt,c.gameOver=!0,c),t(36,r.gamesPlayed++,r),t(36,r.streak=0,r),ie.play()}function Se(){re(rt,p.component=null,p),re(rt,p.complete=!1,p)}function Xe(){let C=q>R;document.documentElement.style.fontSize=`${(C?.75:q/R*.8)*T[I]}vh`}const ct=()=>{k.id&&Fc(ps(sr(Hc),`rooms/${k.id}`),null)},ge=C=>{G.includes(C.key)?localStorage.setItem(C.key,C.oldValue):C.key=="fd-currentGameData"?C.url.includes("ls=true")?(console.log("oh"),re(li,A=!0,A),re(Mt,v=JSON.parse(C.newValue),v),re(gt,c=structuredClone(v[s]),c)):localStorage.setItem("fd-currentGameData",JSON.stringify(v)):C.key=="fd-settings"?C.url.includes("ls=true")?re(Ct,h=JSON.parse(C.newValue),h):localStorage.setItem("fd-settings",JSON.stringify(h)):C.key=="fd-playerStats"&&(C.url.includes("ls=true")?re(Rn,o=JSON.parse(C.newValue),o):localStorage.setItem("fd-playerStats",JSON.stringify(o)))},De=C=>{let Ee=C.wheelDeltaY;if(C.ctrlKey){if(C.preventDefault(),T[I]==.2&&Ee<0||T[I]==5&&Ee>0)return;Ee>0?t(2,I++,I):t(2,I--,I),y()}},ye=C=>{let Ee=["Enter"," ","Escape"];C.ctrlKey&&(C.key=="-"||C.key=="+"||C.code=="Equal"||C.key=="0")&&(C.preventDefault(),(C.key=="+"||C.code=="Equal")&&T[I]!=5?t(2,I++,I):C.key=="-"&&T[I]!=.2?t(2,I--,I):C.key=="0"&&T[I]!=1&&t(2,I=7),y()),p.component&&O&&(!C.ctrlKey&&!C.shiftKey&&!C.altKey&&Ee.includes(C.key)?Se():setTimeout(()=>{C.key=="Tab"&&!O.contains(document.activeElement)&&Se()}))};function xe(){t(0,R=nn.outerHeight),t(1,q=nn.outerWidth)}const Pe=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,R=window.outerHeight),t(1,q=window.outerWidth),Xe()})};function ee(C){Be[C?"unshift":"push"](()=>{F=C,t(15,F)})}function de(C){Be[C?"unshift":"push"](()=>{ie=C,t(16,ie)})}function we(C){Be[C?"unshift":"push"](()=>{X=C,t(17,X)})}function Oe(C){Be[C?"unshift":"push"](()=>{$=C,t(18,$)})}const j=C=>{Ft(C),!D&&re(Ct,h.muted=!h.muted,h)},mt=C=>{Ft(C),c.gameWin||c.gameOver?(location.hash="playerStats",rr()):(re(rt,p.complete=!0,p),re(rt,p.component=zc,p))},U=()=>{D||re(rt,p.component=Cm,p)},K=()=>{D||re(rt,p.component="PLACEHOLDER",p)},Ue=C=>{if(c.chosenItems.length){C.detail.checked=!C.detail.checked;return}re(dn,l=C.detail.checked,l)};function xn(C){n.$$.not_equal(L[s],C)&&(L[s]=C,t(19,L))}function Bn(C){n.$$.not_equal(L[s],C)&&(L[s]=C,t(19,L))}function Gn(C){B=C,t(12,B),t(8,d),t(7,u),t(35,Z)}function Hn(C){Be[C?"unshift":"push"](()=>{O=C,t(14,O)})}const Ss=C=>{O.children[0].contains(C.target)||Se()},$c=()=>{let C=O.querySelector("a, button, input");C&&C.focus()};function Kc(C){Be[C?"unshift":"push"](()=>{O=C,t(14,O)})}const Qc=C=>{O.children[0].contains(C.target)||Se()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(R||q||I)&&Xe(),n.$$.dirty[0]&512&&t(3,s=h.mode),n.$$.dirty[0]&384|n.$$.dirty[1]&16&&on(d)==2&&on(u)==2&&(t(12,B={equipment:d.equipment.find(C=>C.name==u.equipment),weapons:d.weapons.find(C=>C.name==u.weapons)}),t(13,ue={equipment:d.equipment.find(C=>C.name==Z.equipment),weapons:d.weapons.find(C=>C.name==Z.weapons)})),n.$$.dirty[0]&32&&re(oi,a=l?6:7,a),n.$$.dirty[0]&200|n.$$.dirty[1]&128&&c.chosenItems.length&&!c.gameWin&&!c.gameOver&&(c.chosenItems[c.chosenItems.length-1].name==u[s]?Ot():c.chosenItems.length==a&&He()),n.$$.dirty[0]&40&&t(37,i=(l?"hard_":"")+s),n.$$.dirty[0]&16|n.$$.dirty[1]&64&&t(36,r=o[i]),n.$$.dirty[1]&32&&r.streak>r.maxStreak&&t(36,r.maxStreak=r.streak,r),n.$$.dirty[1]&96&&r&&Rn.update(C=>({...C,[i]:r}))},[R,q,I,s,o,l,c,u,d,h,P,H,B,ue,O,F,ie,X,$,L,pe,be,at,St,p,v,k,A,D,T,G,y,Ce,Se,Xe,Z,r,i,a,ct,ge,De,ye,xe,Pe,ee,de,we,Oe,j,mt,U,K,Ue,xn,Bn,Gn,Hn,Ss,$c,Kc,Qc]}class Tm extends lt{constructor(e){super(),ot(this,e,km,Sm,Je,{},null,[-1,-1,-1])}}new Tm({target:document.body});
