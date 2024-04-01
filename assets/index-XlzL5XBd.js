var ja=Object.defineProperty;var Ga=(n,e,t)=>e in n?ja(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var St=(n,e,t)=>(Ga(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function J(){}const Ps=n=>n;function Yo(n){return n()}function dr(){return Object.create(null)}function Ve(n){n.forEach(Yo)}function qt(n){return typeof n=="function"}function qe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ns;function Qe(n,e){return n===e?!0:(ns||(ns=document.createElement("a")),ns.href=e,n===ns.href)}function za(n){return Object.keys(n).length===0}function Va(n,...e){if(n==null){for(const s of e)s(void 0);return J}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Se(n,e,t){n.$$.on_destroy.push(Va(e,t))}function oe(n,e,t){return n.set(t),e}function qa(n){return n&&qt(n.destroy)?n.destroy:J}const Ko=typeof window<"u";let Ri=Ko?()=>window.performance.now():()=>Date.now(),Di=Ko?n=>requestAnimationFrame(n):J;const on=new Set;function Qo(n){on.forEach(e=>{e.c(n)||(on.delete(e),e.f())}),on.size!==0&&Di(Qo)}function Ai(n){let e;return on.size===0&&Di(Qo),{promise:new Promise(t=>{on.add(e={c:n,f:t})}),abort(){on.delete(e)}}}const Ya=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function d(n,e){n.appendChild(e)}function Jo(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Ka(n){const e=g("style");return e.textContent="/* empty */",Qa(Jo(n),e),e.sheet}function Qa(n,e){return d(n.head||n,e),e.sheet}function P(n,e,t){n.insertBefore(e,t||null)}function T(n){n.parentNode&&n.parentNode.removeChild(n)}function je(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function g(n){return document.createElement(n)}function Ja(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function W(n){return document.createTextNode(n)}function I(){return W(" ")}function Nt(){return W("")}function Ne(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Me(n,e,t){const s=e.toLowerCase();s in n?n[s]=typeof n[s]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function Xa(n){return Array.from(n.childNodes)}function he(n,e){e=""+e,n.data!==e&&(n.data=e)}function $t(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function pt(n,e,t){n.classList.toggle(e,!!t)}function Xo(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class Zo{constructor(e=!1){St(this,"is_svg",!1);St(this,"e");St(this,"n");St(this,"t");St(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=Ja(t.nodeName):this.e=g(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)P(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(T)}}function ls(n,e){return new n(e)}const as=new Map;let cs=0;function Za(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function ec(n,e){const t={stylesheet:Ka(e),rules:{}};return as.set(n,t),t}function us(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let C=0;C<=1;C+=a){const N=e+(t-e)*r(C);c+=C*100+`%{${o(N,1-N)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${Za(u)}_${l}`,f=Jo(n),{stylesheet:m,rules:p}=as.get(f)||ec(f,n);p[h]||(p[h]=!0,m.insertRule(`@keyframes ${h} ${u}`,m.cssRules.length));const y=n.style.animation||"";return n.style.animation=`${y?`${y}, `:""}${h} ${s}ms linear ${i}ms 1 both`,cs+=1,h}function Pi(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),cs-=i,cs||tc())}function tc(){Di(()=>{cs||(as.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&T(e)}),as.clear())})}function nc(n,e,t,s){if(!e)return J;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return J;const{delay:r=0,duration:o=300,easing:l=Ps,start:a=Ri()+r,end:c=a+o,tick:u=J,css:h}=t(n,{from:e,to:i},s);let f=!0,m=!1,p;function y(){h&&(p=us(n,0,1,o,r,l,h)),r||(m=!0)}function C(){h&&Pi(n,p),f=!1}return Ai(N=>{if(!m&&N>=a&&(m=!0),m&&N>=c&&(u(1,0),C()),!f)return!1;if(m){const A=N-a,b=0+1*l(A/o);u(b,1-b)}return!0}),y(),u(0,1),C}function sc(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,ic(n,i)}}function ic(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Mn;function kn(n){Mn=n}function el(){if(!Mn)throw new Error("Function called outside component initialization");return Mn}function rc(n){el().$$.on_mount.push(n)}function oc(){const n=el();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=Xo(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const Zt=[],mt=[];let ln=[];const ii=[],lc=Promise.resolve();let ri=!1;function ac(){ri||(ri=!0,lc.then(tl))}function ke(n){ln.push(n)}function Os(n){ii.push(n)}const Vs=new Set;let Qt=0;function tl(){if(Qt!==0)return;const n=Mn;do{try{for(;Qt<Zt.length;){const e=Zt[Qt];Qt++,kn(e),cc(e.$$)}}catch(e){throw Zt.length=0,Qt=0,e}for(kn(null),Zt.length=0,Qt=0;mt.length;)mt.pop()();for(let e=0;e<ln.length;e+=1){const t=ln[e];Vs.has(t)||(Vs.add(t),t())}ln.length=0}while(Zt.length);for(;ii.length;)ii.pop()();ri=!1,Vs.clear(),kn(n)}function cc(n){if(n.fragment!==null){n.update(),Ve(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ke)}}function uc(n){const e=[],t=[];ln.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),ln=e}let En;function nl(){return En||(En=Promise.resolve(),En.then(()=>{En=null})),En}function Rn(n,e,t){n.dispatchEvent(Xo(`${e?"intro":"outro"}${t}`))}const os=new Set;let _t;function rt(){_t={r:0,c:[],p:_t}}function ot(){_t.r||Ve(_t.c),_t=_t.p}function j(n,e){n&&n.i&&(os.delete(n),n.i(e))}function ae(n,e,t,s){if(n&&n.o){if(os.has(n))return;os.add(n),_t.c.push(()=>{os.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const sl={duration:0};function hc(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=_t;l.r+=1;let a;function c(){const{delay:u=0,duration:h=300,easing:f=Ps,tick:m=J,css:p}=i||sl;p&&(o=us(n,1,0,h,u,f,p));const y=Ri()+u,C=y+h;ke(()=>Rn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),Ai(N=>{if(r){if(N>=C)return m(0,1),Rn(n,!1,"end"),--l.r||Ve(l.c),!1;if(N>=y){const A=f((N-y)/h);m(1-A,A)}}return r})}return qt(i)?nl().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&Pi(n,o),r=!1)}}}function ye(n,e,t,s){let r=e(n,t,{direction:"both"}),o=s?0:1,l=null,a=null,c=null,u;function h(){c&&Pi(n,c)}function f(p,y){const C=p.b-o;return y*=Math.abs(C),{a:o,b:p.b,d:C,duration:y,start:p.start,end:p.start+y,group:p.group}}function m(p){const{delay:y=0,duration:C=300,easing:N=Ps,tick:A=J,css:b}=r||sl,v={start:Ri()+y,b:p};p||(v.group=_t,_t.r+=1),"inert"in n&&(p?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=v:(b&&(h(),c=us(n,o,p,C,y,N,b)),p&&A(0,1),l=f(v,C),ke(()=>Rn(n,p,"start")),Ai(E=>{if(a&&E>a.start&&(l=f(a,C),a=null,Rn(n,l.b,"start"),b&&(h(),c=us(n,o,l.b,l.duration,0,N,r.css))),l){if(E>=l.end)A(o=l.b,1-o),Rn(n,l.b,"end"),a||(l.b?h():--l.group.r||Ve(l.group.c)),l=null;else if(E>=l.start){const O=E-l.start;o=l.a+l.d*N(O/l.duration),A(o,1-o)}}return!!(l||a)}))}return{run(p){qt(r)?nl().then(()=>{r=r({direction:p?"in":"out"}),m(p)}):m(p)},end(){h(),l=a=null}}}function _e(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function fc(n,e){ae(n,1,1,()=>{e.delete(n.key)})}function dc(n,e){n.f(),fc(n,e)}function _c(n,e,t,s,i,r,o,l,a,c,u,h){let f=n.length,m=r.length,p=f;const y={};for(;p--;)y[n[p].key]=p;const C=[],N=new Map,A=new Map,b=[];for(p=m;p--;){const M=h(i,r,p),L=t(M);let G=o.get(L);G?s&&b.push(()=>G.p(M,e)):(G=c(L,M),G.c()),N.set(L,C[p]=G),L in y&&A.set(L,Math.abs(p-y[L]))}const v=new Set,E=new Set;function O(M){j(M,1),M.m(l,u),o.set(M.key,M),u=M.first,m--}for(;f&&m;){const M=C[m-1],L=n[f-1],G=M.key,V=L.key;M===L?(u=M.first,f--,m--):N.has(V)?!o.has(G)||v.has(G)?O(M):E.has(V)?f--:A.get(G)>A.get(V)?(E.add(G),O(M)):(v.add(V),f--):(a(L,o),f--)}for(;f--;){const M=n[f];N.has(M.key)||a(M,o)}for(;m;)O(C[m-1]);return Ve(b),C}function Ms(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function lt(n){n&&n.c()}function Xe(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),ke(()=>{const r=n.$$.on_mount.map(Yo).filter(qt);n.$$.on_destroy?n.$$.on_destroy.push(...r):Ve(r),n.$$.on_mount=[]}),i.forEach(ke)}function Ze(n,e){const t=n.$$;t.fragment!==null&&(uc(t.after_update),Ve(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function pc(n,e){n.$$.dirty[0]===-1&&(Zt.push(n),ac(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function et(n,e,t,s,i,r,o=null,l=[-1]){const a=Mn;kn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:J,not_equal:i,bound:dr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:dr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,f,...m)=>{const p=m.length?m[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&pc(n,h)),f}):[],c.update(),u=!0,Ve(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=Xa(e.target);c.fragment&&c.fragment.l(h),h.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&j(n.$$.fragment),Xe(n,e.target,e.anchor),tl()}kn(a)}class tt{constructor(){St(this,"$$");St(this,"$$set")}$destroy(){Ze(this,1),this.$destroy=J}$on(e,t){if(!qt(t))return J;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!za(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mc="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(mc);function il(n){const e=n-1;return e*e*e+1}function yt(n,{delay:e=0,duration:t=400,easing:s=Ps}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}function Ae(n,{delay:e=0,duration:t=400,easing:s=il,start:i=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-i,u=l*(1-r);return{delay:e,duration:t,easing:s,css:(h,f)=>`
			transform: ${a} scale(${1-c*f});
			opacity: ${l-u*f}
		`}}const Jt=[];function Ct(n,e=J){let t;const s=new Set;function i(l){if(qe(n,l)&&(n=l,t)){const a=!Jt.length;for(const c of s)c[1](),Jt.push(c,n);if(a){for(let c=0;c<Jt.length;c+=2)Jt[c][0](Jt[c+1]);Jt.length=0}}}function r(l){i(l(n))}function o(l,a=J){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||J),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}var _r={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(n,e){if(!n)throw gn(e)},gn=function(n){return new Error("Firebase Database ("+rl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},gc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(f=64)),s.push(t[u],t[h],t[f],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ol(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new vc;const f=r<<2|l>>4;if(s.push(f),c!==64){const m=l<<4&240|c>>2;if(s.push(m),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ll=function(n){const e=ol(n);return Oi.encodeByteArray(e,!0)},hs=function(n){return ll(n).replace(/\./g,"")},oi=function(n){try{return Oi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){return al(void 0,n)}function al(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!bc(t)||(n[t]=al(n[t],e[t]));return n}function bc(n){return n!=="__proto__"}/**
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
 */function Cc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wc=()=>Cc().__FIREBASE_DEFAULTS__,Ec=()=>{if(typeof process>"u"||typeof _r>"u")return;const n=_r.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ic=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&oi(n[1]);return e&&JSON.parse(e)},cl=()=>{try{return wc()||Ec()||Ic()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sc=n=>{var e,t;return(t=(e=cl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Tc=n=>{const e=Sc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ul=()=>{var n;return(n=cl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Nc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hs(JSON.stringify(t)),hs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kc())}function Rc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fl(){return rl.NODE_ADMIN===!0}function Dc(){try{return typeof indexedDB=="object"}catch{return!1}}function Ac(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="FirebaseError";class qn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Pc,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dl.prototype.create)}}class dl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Oc(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new qn(i,l,s)}}function Oc(n,e){return n.replace(Mc,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Mc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n){return JSON.parse(n)}function Re(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Ln(oi(r[0])||""),t=Ln(oi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Lc=function(n){const e=_l(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Fc=function(n){const e=_l(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function fn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function pr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function fs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function li(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(mr(r)&&mr(o)){if(!li(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function mr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function pl(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,R(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ls=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function vn(n){return n&&n._delegate?n._delegate:n}class Fn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class Hc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Mi;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($c(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Uc(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uc(n){return n===Wt?void 0:n}function $c(n){return n.instantiationMode==="EAGER"}/**
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
 */class jc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const Gc={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},zc=be.INFO,Vc={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},qc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Vc[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=zc,this._logHandler=qc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const Yc=(n,e)=>e.some(t=>n instanceof t);let gr,vr;function Kc(){return gr||(gr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qc(){return vr||(vr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gl=new WeakMap,ai=new WeakMap,vl=new WeakMap,qs=new WeakMap,Li=new WeakMap;function Jc(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(kt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&gl.set(t,n)}).catch(()=>{}),Li.set(e,n),e}function Xc(n){if(ai.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ai.set(n,e)}let ci={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ai.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zc(n){ci=n(ci)}function eu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ys(this),e,...t);return vl.set(s,e.sort?e.sort():[e]),kt(s)}:Qc().includes(n)?function(...e){return n.apply(Ys(this),e),kt(gl.get(this))}:function(...e){return kt(n.apply(Ys(this),e))}}function tu(n){return typeof n=="function"?eu(n):(n instanceof IDBTransaction&&Xc(n),Yc(n,Kc())?new Proxy(n,ci):n)}function kt(n){if(n instanceof IDBRequest)return Jc(n);if(qs.has(n))return qs.get(n);const e=tu(n);return e!==n&&(qs.set(n,e),Li.set(e,n)),e}const Ys=n=>Li.get(n);function nu(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=kt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(kt(o.result),a.oldVersion,a.newVersion,kt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const su=["get","getKey","getAll","getAllKeys","count"],iu=["put","add","delete","clear"],Ks=new Map;function yr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ks.get(e))return Ks.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=iu.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||su.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return Ks.set(e,r),r}Zc(n=>({...n,get:(e,t,s)=>yr(e,t)||n.get(e,t,s),has:(e,t)=>!!yr(e,t)||n.has(e,t)}));/**
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
 */class ru{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ou(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ou(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ui="@firebase/app",br="0.9.29";/**
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
 */const jt=new ml("@firebase/app"),lu="@firebase/app-compat",au="@firebase/analytics-compat",cu="@firebase/analytics",uu="@firebase/app-check-compat",hu="@firebase/app-check",fu="@firebase/auth",du="@firebase/auth-compat",_u="@firebase/database",pu="@firebase/database-compat",mu="@firebase/functions",gu="@firebase/functions-compat",vu="@firebase/installations",yu="@firebase/installations-compat",bu="@firebase/messaging",Cu="@firebase/messaging-compat",wu="@firebase/performance",Eu="@firebase/performance-compat",Iu="@firebase/remote-config",Su="@firebase/remote-config-compat",Tu="@firebase/storage",Nu="@firebase/storage-compat",ku="@firebase/firestore",Ru="@firebase/firestore-compat",Du="firebase",Au="10.9.0";/**
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
 */const hi="[DEFAULT]",Pu={[ui]:"fire-core",[lu]:"fire-core-compat",[cu]:"fire-analytics",[au]:"fire-analytics-compat",[hu]:"fire-app-check",[uu]:"fire-app-check-compat",[fu]:"fire-auth",[du]:"fire-auth-compat",[_u]:"fire-rtdb",[pu]:"fire-rtdb-compat",[mu]:"fire-fn",[gu]:"fire-fn-compat",[vu]:"fire-iid",[yu]:"fire-iid-compat",[bu]:"fire-fcm",[Cu]:"fire-fcm-compat",[wu]:"fire-perf",[Eu]:"fire-perf-compat",[Iu]:"fire-rc",[Su]:"fire-rc-compat",[Tu]:"fire-gcs",[Nu]:"fire-gcs-compat",[ku]:"fire-fst",[Ru]:"fire-fst-compat","fire-js":"fire-js",[Du]:"fire-js-all"};/**
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
 */const ds=new Map,fi=new Map;function Ou(n,e){try{n.container.addComponent(e)}catch(t){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _s(n){const e=n.name;if(fi.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;fi.set(e,n);for(const t of ds.values())Ou(t,n);return!0}function Mu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Lu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new dl("app","Firebase",Lu);/**
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
 */class Fu{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const xu=Au;function yl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:hi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(t||(t=ul()),!t)throw Rt.create("no-options");const r=ds.get(i);if(r){if(li(t,r.options)&&li(s,r.config))return r;throw Rt.create("duplicate-app",{appName:i})}const o=new jc(i);for(const a of fi.values())o.addComponent(a);const l=new Fu(t,s,o);return ds.set(i,l),l}function Wu(n=hi){const e=ds.get(n);if(!e&&n===hi&&ul())return yl();if(!e)throw Rt.create("no-app",{appName:n});return e}function an(n,e,t){var s;let i=(s=Pu[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(l.join(" "));return}_s(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Bu="firebase-heartbeat-database",Hu=1,xn="firebase-heartbeat-store";let Qs=null;function bl(){return Qs||(Qs=nu(Bu,Hu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rt.create("idb-open",{originalErrorMessage:n.message})})),Qs}async function Uu(n){try{const t=(await bl()).transaction(xn),s=await t.objectStore(xn).get(Cl(n));return await t.done,s}catch(e){if(e instanceof qn)jt.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(t.message)}}}async function Cr(n,e){try{const s=(await bl()).transaction(xn,"readwrite");await s.objectStore(xn).put(e,Cl(n)),await s.done}catch(t){if(t instanceof qn)jt.warn(t.message);else{const s=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jt.warn(s.message)}}}function Cl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $u=1024,ju=30*24*60*60*1e3;class Gu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vu(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ju}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wr(),{heartbeatsToSend:s,unsentEntries:i}=zu(this._heartbeatsCache.heartbeats),r=hs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function wr(){return new Date().toISOString().substring(0,10)}function zu(n,e=$u){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Er(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Er(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Vu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dc()?Ac().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Uu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Er(n){return hs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function qu(n){_s(new Fn("platform-logger",e=>new ru(e),"PRIVATE")),_s(new Fn("heartbeat",e=>new Gu(e),"PRIVATE")),an(ui,br,n),an(ui,br,"esm2017"),an("fire-js","")}qu("");var Yu="firebase",Ku="10.9.0";/**
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
 */an(Yu,Ku,"app");var Ir={};const Sr="@firebase/database",Tr="1.0.3";/**
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
 */let wl="";function Qu(n){wl=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ln(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ju(e)}}catch{}return new Xu},Ht=El("localStorage"),di=El("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new ml("@firebase/database"),Zu=function(){let n=1;return function(){return n++}}(),Il=function(n){const e=Bc(n),t=new Wc;t.update(e);const s=t.digest();return Oi.encodeByteArray(s)},Yn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Yn.apply(null,s):typeof s=="object"?e+=Re(s):e+=s,e+=" "}return e};let Ut=null,Nr=!0;const eh=function(n,e){R(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(cn.logLevel=be.VERBOSE,Ut=cn.log.bind(cn),e&&di.set("logging_enabled",!0)):typeof n=="function"?Ut=n:(Ut=null,di.remove("logging_enabled"))},xe=function(...n){if(Nr===!0&&(Nr=!1,Ut===null&&di.get("logging_enabled")===!0&&eh(!0)),Ut){const e=Yn.apply(null,n);Ut(e)}},Kn=function(n){return function(...e){xe(n,...e)}},_i=function(...n){const e="FIREBASE INTERNAL ERROR: "+Yn(...n);cn.error(e)},bt=function(...n){const e=`FIREBASE FATAL ERROR: ${Yn(...n)}`;throw cn.error(e),new Error(e)},Je=function(...n){const e="FIREBASE WARNING: "+Yn(...n);cn.warn(e)},th=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},nh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},dn="[MIN_NAME]",Gt="[MAX_NAME]",yn=function(n,e){if(n===e)return 0;if(n===dn||e===Gt)return-1;if(e===dn||n===Gt)return 1;{const t=kr(n),s=kr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},sh=function(n,e){return n===e?0:n<e?-1:1},In=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Re(e))},Fi=function(n){if(typeof n!="object"||n===null)return Re(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Re(e[s]),t+=":",t+=Fi(n[e[s]]);return t+="}",t},Tl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ze(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Nl=function(n){R(!Sl(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},ih=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function oh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const lh=new RegExp("^-?(0*)\\d{1,10}$"),ah=-2147483648,ch=2147483647,kr=function(n){if(lh.test(n)){const e=Number(n);if(e>=ah&&e<=ch)return e}return null},Qn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Je("Exception was thrown by user callback.",t),e},Math.floor(0))}},uh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Dn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class hh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(e)}}class un{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}un.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="5",kl="v",Rl="s",Dl="r",Al="f",Pl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ol="ls",Ml="p",pi="ac",Ll="websocket",Fl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ht.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ht.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function dh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Wl(n,e,t){R(typeof e=="string","typeof type must == string"),R(typeof t=="object","typeof params must == object");let s;if(e===Ll)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Fl)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dh(n)&&(t.ns=n.namespace);const i=[];return ze(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.counters_={}}incrementCounter(e,t=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js={},Xs={};function Wi(n){const e=n.toString();return Js[e]||(Js[e]=new _h),Js[e]}function ph(n,e){const t=n.toString();return Xs[t]||(Xs[t]=e()),Xs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Qn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="start",gh="close",vh="pLPCommand",yh="pRTLPCB",Bl="id",Hl="pw",Ul="ser",bh="cb",Ch="seg",wh="ts",Eh="d",Ih="dframe",$l=1870,jl=30,Sh=$l-jl,Th=25e3,Nh=3e4;class en{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kn(e),this.stats_=Wi(t),this.urlFn=a=>(this.appCheckToken&&(a[pi]=this.appCheckToken),Wl(t,Fl,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new mh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Nh)),nh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bi((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rr)this.id=l,this.password=a;else if(o===gh)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Rr]="t",s[Ul]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[bh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[kl]=xi,this.transportSessionId&&(s[Rl]=this.transportSessionId),this.lastSessionId&&(s[Ol]=this.lastSessionId),this.applicationId&&(s[Ml]=this.applicationId),this.appCheckToken&&(s[pi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pl.test(location.hostname)&&(s[Dl]=Al);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){en.forceAllow_=!0}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){return en.forceAllow_?!0:!en.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ih()&&!rh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ll(t),i=Tl(s,Sh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ih]="t",s[Bl]=e,s[Hl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Bi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zu(),window[vh+this.uniqueCallbackIdentifier]=e,window[yh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Bi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){xe("frame writing exception"),l.stack&&xe(l.stack),xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bl]=this.myID,e[Hl]=this.myPW,e[Ul]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jl+s.length<=$l;){const o=this.pendingSegs.shift();s=s+"&"+Ch+i+"="+o.seg+"&"+wh+i+"="+o.ts+"&"+Eh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Th)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=16384,Rh=45e3;let ps=null;typeof MozWebSocket<"u"?ps=MozWebSocket:typeof WebSocket<"u"&&(ps=WebSocket);class ct{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kn(this.connId),this.stats_=Wi(t),this.connURL=ct.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[kl]=xi,typeof location<"u"&&location.hostname&&Pl.test(location.hostname)&&(o[Dl]=Al),t&&(o[Rl]=t),s&&(o[Ol]=s),i&&(o[pi]=i),r&&(o[Ml]=r),Wl(e,Ll,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ht.set("previous_websocket_failure",!0);try{let s;fl(),this.mySock=new ps(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ps!==null&&!ct.forceDisallow_}static previouslyFailed(){return Ht.isInMemoryStorage||Ht.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ht.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ln(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Tl(t,kh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[en,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ct&&ct.isAvailable();let s=t&&!ct.previouslyFailed();if(e.webSocketOnly&&(t||Je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ct];else{const i=this.transports_=[];for(const r of Wn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=6e4,Ah=5e3,Ph=10*1024,Oh=100*1024,Zs="t",Dr="d",Mh="s",Ar="r",Lh="e",Pr="o",Or="a",Mr="n",Lr="p",Fh="h";class xh{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kn("c:"+this.id+":"),this.transportManager_=new Wn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Dn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Oh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ph?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zs in e){const t=e[Zs];t===Or?this.upgradeIfSecondaryHealthy_():t===Ar?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Pr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=In("t",e),s=In("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Or,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=In("t",e),s=In("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=In(Zs,e);if(Dr in e){const s=e[Dr];if(t===Fh){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Mr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Mh?this.onConnectionShutdown_(s):t===Ar?this.onReset_(s):t===Lh?_i("Server Error: "+s):t===Pr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_i("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),xi!==s&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Dn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Dh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Dn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ah))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ht.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends zl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ms}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=32,xr=768;class pe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ce(){return new pe("")}function se(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Pt(n){return n.pieces_.length-n.pieceNum_}function Ce(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new pe(n.pieces_,e)}function Vl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Wh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ql(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Yl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new pe(e,0)}function De(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new pe(t,0)}function Z(n){return n.pieceNum_>=n.pieces_.length}function Be(n,e){const t=se(n),s=se(e);if(t===null)return e;if(t===s)return Be(Ce(n),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Kl(n,e){if(Pt(n)!==Pt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ut(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Pt(n)>Pt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Bh{constructor(e,t){this.errorPrefix_=t,this.parts_=ql(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ls(this.parts_[s]);Ql(this)}}function Hh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ls(e),Ql(n)}function Uh(n){const e=n.parts_.pop();n.byteLength_-=Ls(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ql(n){if(n.byteLength_>xr)throw new Error(n.errorPrefix_+"has a key path longer than "+xr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Fr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fr+") or object contains a cycle "+Bt(n))}function Bt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends zl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Hi}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=1e3,$h=60*5*1e3,Wr=30*1e3,jh=1.3,Gh=3e4,zh="server_kill",Br=3;class vt extends Gl{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=vt.nextPersistentConnectionId_++,this.log_=Kn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sn,this.maxReconnectDelay_=$h,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!fl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ms.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Re(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Mi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;vt.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&wt(e,"w")){const s=fn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Lc(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):_i("Unrecognized action received from server: "+Re(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gh&&(this.reconnectDelay_=Sn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new xh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{Je(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(zh)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Je(h),a())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pr(this.interruptReasons_)&&(this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Fi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){xe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Br&&(this.reconnectDelay_=Wr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){xe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Br&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+wl.replace(/\./g,"-")]=1,hl()?e["framework.cordova"]=1:Rc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ms.getInstance().currentlyOnline();return pr(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Q(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Q(dn,e),i=new Q(dn,t);return this.compare(s,i)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;class Jl extends Fs{static get __EMPTY_NODE(){return ss}static set __EMPTY_NODE(e){ss=e}compare(e,t){return yn(e.name,t.name)}isDefinedOn(e){throw gn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Gt,ss)}makePost(e,t){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,ss)}toString(){return".key"}}const hn=new Jl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Oe.RED,this.left=i??Ge.EMPTY_NODE,this.right=r??Ge.EMPTY_NODE}copy(e,t,s,i,r){return new Oe(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class Vh{copy(e,t,s,i,r){return this}insert(e,t,s){return new Oe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,t=Ge.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ge(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new is(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new is(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new is(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new Vh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,e){return yn(n.name,e.name)}function Ui(n,e){return yn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi;function Yh(n){mi=n}const Xl=function(n){return typeof n=="number"?"number:"+Nl(n):"string:"+n},Zl=function(n){if(n.isLeafNode()){const e=n.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else R(n===mi||n.isEmpty(),"priority of unexpected type.");R(n===mi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;class Pe{constructor(e,t=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zl(this.priorityNode_)}static set __childrenNodeConstructor(e){Hr=e}static get __childrenNodeConstructor(){return Hr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:se(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=se(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(R(s!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Nl(this.value_):e+=this.value_,this.lazyHash_=Il(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(t),r=Pe.VALUE_TYPE_ORDER.indexOf(s);return R(i>=0,"Unknown leaf type: "+t),R(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea,ta;function Kh(n){ea=n}function Qh(n){ta=n}class Jh extends Fs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?yn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Gt,new Pe("[PRIORITY-POST]",ta))}makePost(e,t){const s=ea(e);return new Q(t,new Pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new Jh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=Math.log(2);class Zh{constructor(e){const t=r=>parseInt(Math.log(r)/Xh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gs=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=n[a],f=t?t(h):h,new Oe(f,h.node,Oe.BLACK,null,null);{const m=parseInt(u/2,10)+a,p=i(a,m),y=i(m+1,c);return h=n[m],f=t?t(h):h,new Oe(f,h.node,Oe.BLACK,p,y)}},r=function(a){let c=null,u=null,h=n.length;const f=function(p,y){const C=h-p,N=h;h-=p;const A=i(C+1,N),b=n[C],v=t?t(b):b;m(new Oe(v,b.node,y,null,A))},m=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<a.count;++p){const y=a.nextBitIsOne(),C=Math.pow(2,a.count-(p+1));y?f(C,Oe.BLACK):(f(C,Oe.BLACK),f(C,Oe.RED))}return u},o=new Zh(n.length),l=r(o);return new Ge(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei;const Xt={};class gt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return R(Xt&&Te,"ChildrenNode.ts has not been loaded"),ei=ei||new gt({".priority":Xt},{".priority":Te}),ei}get(e){const t=fn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ge?t:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,t){R(e!==hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(Q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=gs(s,e.getCompare()):l=Xt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new gt(u,c)}addToIndexes(e,t){const s=fs(this.indexes_,(i,r)=>{const o=fn(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),i===Xt)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(Q.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),gs(l,o.getCompare())}else return Xt;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new Q(e.name,l))),a.insert(e,e.node)}});return new gt(s,this.indexSet_)}removeFromIndexes(e,t){const s=fs(this.indexes_,i=>{if(i===Xt)return i;{const r=t.get(e.name);return r?i.remove(new Q(e.name,r)):i}});return new gt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn;class B{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Zl(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Tn||(Tn=new B(new Ge(Ui),null,gt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Tn:t}}getChild(e){const t=se(e);return t===null?this:this.getImmediateChild(t).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(R(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Q(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Tn:this.priorityNode_;return new B(i,o,r)}}updateChild(e,t){const s=se(e);if(s===null)return t;{R(se(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ce(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Te,(o,l)=>{t[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xl(this.getPriority().val())+":"),this.forEachChild(Te,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Il(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Q(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Q(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Q(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jn?-1:0}withIndex(e){if(e===hn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===hn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Te),i=t.getIterator(Te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ef extends B{constructor(){super(new Ge(Ui),B.EMPTY_NODE,gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Jn=new ef;Object.defineProperties(Q,{MIN:{value:new Q(dn,B.EMPTY_NODE)},MAX:{value:new Q(Gt,Jn)}});Jl.__EMPTY_NODE=B.EMPTY_NODE;Pe.__childrenNodeConstructor=B;Yh(Jn);Qh(Jn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=!0;function Fe(n,e=null){if(n===null)return B.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Pe(t,Fe(e))}if(!(n instanceof Array)&&tf){const t=[];let s=!1;if(ze(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=Fe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new Q(o,a)))}}),t.length===0)return B.EMPTY_NODE;const r=gs(t,qh,o=>o.name,Ui);if(s){const o=gs(t,Te.getCompare());return new B(r,Fe(e),new gt({".priority":o},{".priority":Te}))}else return new B(r,Fe(e),gt.Default)}else{let t=B.EMPTY_NODE;return ze(n,(s,i)=>{if(wt(n,s)&&s.substring(0,1)!=="."){const r=Fe(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Fe(e))}}Kh(Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends Fs{constructor(e){super(),this.indexPath_=e,R(!Z(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?yn(e.name,t.name):r}makePost(e,t){const s=Fe(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new Q(t,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Jn);return new Q(Gt,e)}toString(){return ql(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends Fs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?yn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,t){const s=Fe(e);return new Q(t,s)}toString(){return".value"}}const rf=new sf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n){return{type:"value",snapshotNode:n}}function _n(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Bn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Hn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function of(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Bn(t,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(_n(t,s)):o.trackChildChange(Hn(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,r)=>{t.hasChild(i)||s.trackChildChange(Bn(i,r))}),t.isLeafNode()||t.forEachChild(Te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Hn(i,r,o))}else s.trackChildChange(_n(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.indexedFilter_=new $i(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Un.getStartPost_(e),this.endPost_=Un.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new Q(t,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=B.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return t.forEachChild(Te,(o,l)=>{r.matches(new Q(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Un(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new Q(t,s))||(s=B.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,m)=>h(m,f)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const a=new Q(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const h=l.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,a);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Hn(t,s,h)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Bn(t,h));const y=l.updateImmediateChild(t,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(_n(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Bn(c.name,c.node)),r.trackChildChange(_n(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:dn}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new ji;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function af(n){return n.loadsAllData()?new $i(n.getIndex()):n.hasLimit()?new lf(n):new Un(n)}function Ur(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Te?t="$priority":n.index_===rf?t="$value":n.index_===hn?t="$key":(R(n.index_ instanceof nf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Re(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Re(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Re(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Re(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Re(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function $r(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Te&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Gl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Kn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ur(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),fn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=vs.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Ur(e._queryParams),s=e._path.toString(),i=new Mi;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xc(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ln(l.responseText)}catch{Je("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Je("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(){return{value:null,children:new Map}}function sa(n,e,t){if(Z(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=se(e);n.children.has(s)||n.children.set(s,ys());const i=n.children.get(s);e=Ce(e),sa(i,e,t)}}function gi(n,e,t){n.value!==null?t(e,n.value):uf(n,(s,i)=>{const r=new pe(e.toString()+"/"+s);gi(i,r,t)})}function uf(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ze(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=10*1e3,ff=30*1e3,df=5*60*1e3;class _f{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new hf(e);const s=jr+(ff-jr)*Math.random();Dn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ze(e,(i,r)=>{r>0&&wt(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Dn(this.reportStats_.bind(this),Math.floor(Math.random()*2*df))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function ia(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ht.ACK_USER_WRITE,this.source=ia()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new pe(e));return new bs(ce(),t,this.revert)}}else return R(se(this.path)===e,"operationForChild called for unrelated child."),new bs(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.source=e,this.path=t,this.type=ht.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new $n(this.source,ce()):new $n(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ht.OVERWRITE}operationForChild(e){return Z(this.path)?new zt(this.source,ce(),this.snap.getImmediateChild(e)):new zt(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ht.MERGE}operationForChild(e){if(Z(this.path)){const t=this.children.subtree(new pe(e));return t.isEmpty()?null:t.value?new zt(this.source,ce(),t.value):new jn(this.source,ce(),t)}else return R(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jn(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const t=se(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mf(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(of(o.childName,o.snapshotNode))}),Nn(n,i,"child_removed",e,s,t),Nn(n,i,"child_added",e,s,t),Nn(n,i,"child_moved",r,s,t),Nn(n,i,"child_changed",e,s,t),Nn(n,i,"value",e,s,t),i}function Nn(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>vf(n,l,a)),o.forEach(l=>{const a=gf(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function gf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function vf(n,e,t){if(e.childName==null||t.childName==null)throw gn("Should only compare child_ events.");const s=new Q(e.childName,e.snapshotNode),i=new Q(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n,e){return{eventCache:n,serverCache:e}}function An(n,e,t,s){return xs(new Ot(e,t,s),n.serverCache)}function ra(n,e,t,s){return xs(n.eventCache,new Ot(e,t,s))}function Cs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Vt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;const yf=()=>(ti||(ti=new Ge(sh)),ti);class Ee{constructor(e,t=yf()){this.value=e,this.children=t}static fromObject(e){let t=new Ee(null);return ze(e,(s,i)=>{t=t.set(new pe(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ce(),value:this.value};if(Z(e))return null;{const s=se(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ce(e),t);return r!=null?{path:De(new pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const t=se(e),s=this.children.get(t);return s!==null?s.subtree(Ce(e)):new Ee(null)}}set(e,t){if(Z(e))return new Ee(t,this.children);{const s=se(e),r=(this.children.get(s)||new Ee(null)).set(Ce(e),t),o=this.children.insert(s,r);return new Ee(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const t=se(e),s=this.children.get(t);if(s){const i=s.remove(Ce(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Ee(null):new Ee(this.value,r)}else return this}}get(e){if(Z(e))return this.value;{const t=se(e),s=this.children.get(t);return s?s.get(Ce(e)):null}}setTree(e,t){if(Z(e))return t;{const s=se(e),r=(this.children.get(s)||new Ee(null)).setTree(Ce(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ee(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(De(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ce(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(Z(e))return null;{const r=se(e),o=this.children.get(r);return o?o.findOnPath_(Ce(e),De(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ce(),t)}foreachOnPath_(e,t,s){if(Z(e))return this;{this.value&&s(t,this.value);const i=se(e),r=this.children.get(i);return r?r.foreachOnPath_(Ce(e),De(t,i),s):new Ee(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(De(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new Ee(null))}}function Pn(n,e,t){if(Z(e))return new ft(new Ee(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Be(i,e);return r=r.updateChild(o,t),new ft(n.writeTree_.set(i,r))}else{const i=new Ee(t),r=n.writeTree_.setTree(e,i);return new ft(r)}}}function Gr(n,e,t){let s=n;return ze(t,(i,r)=>{s=Pn(s,De(e,i),r)}),s}function zr(n,e){if(Z(e))return ft.empty();{const t=n.writeTree_.setTree(e,new Ee(null));return new ft(t)}}function vi(n,e){return Yt(n,e)!=null}function Yt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Be(t.path,e)):null}function Vr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Te,(s,i)=>{e.push(new Q(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Q(s,i.value))}),e}function Dt(n,e){if(Z(e))return n;{const t=Yt(n,e);return t!=null?new ft(new Ee(t)):new ft(n.writeTree_.subtree(e))}}function yi(n){return n.writeTree_.isEmpty()}function pn(n,e){return oa(ce(),n.writeTree_,e)}function oa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=oa(De(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(De(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,e){return ua(e,n)}function bf(n,e,t,s,i){R(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Pn(n.visibleWrites,e,t)),n.lastWriteId=s}function Cf(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function wf(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);R(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Ef(l,s.path)?i=!1:ut(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return If(n),!0;if(s.snap)n.visibleWrites=zr(n.visibleWrites,s.path);else{const l=s.children;ze(l,a=>{n.visibleWrites=zr(n.visibleWrites,De(s.path,a))})}return!0}else return!1}function Ef(n,e){if(n.snap)return ut(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ut(De(n.path,t),e))return!0;return!1}function If(n){n.visibleWrites=la(n.allWrites,Sf,ce()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Sf(n){return n.visible}function la(n,e,t){let s=ft.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)ut(t,o)?(l=Be(t,o),s=Pn(s,l,r.snap)):ut(o,t)&&(l=Be(o,t),s=Pn(s,ce(),r.snap.getChild(l)));else if(r.children){if(ut(t,o))l=Be(t,o),s=Gr(s,l,r.children);else if(ut(o,t))if(l=Be(o,t),Z(l))s=Gr(s,ce(),r.children);else{const a=fn(r.children,se(l));if(a){const c=a.getChild(Ce(l));s=Pn(s,ce(),c)}}}else throw gn("WriteRecord should have .snap or .children")}}return s}function aa(n,e,t,s,i){if(!s&&!i){const r=Yt(n.visibleWrites,e);if(r!=null)return r;{const o=Dt(n.visibleWrites,e);if(yi(o))return t;if(t==null&&!vi(o,ce()))return null;{const l=t||B.EMPTY_NODE;return pn(o,l)}}}else{const r=Dt(n.visibleWrites,e);if(!i&&yi(r))return t;if(!i&&t==null&&!vi(r,ce()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ut(c.path,e)||ut(e,c.path))},l=la(n.allWrites,o,e),a=t||B.EMPTY_NODE;return pn(l,a)}}}function Tf(n,e,t){let s=B.EMPTY_NODE;const i=Yt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Dt(n.visibleWrites,e);return t.forEachChild(Te,(o,l)=>{const a=pn(Dt(r,new pe(o)),l);s=s.updateImmediateChild(o,a)}),Vr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Dt(n.visibleWrites,e);return Vr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Nf(n,e,t,s,i){R(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=De(e,t);if(vi(n.visibleWrites,r))return null;{const o=Dt(n.visibleWrites,r);return yi(o)?i.getChild(t):pn(o,i.getChild(t))}}function kf(n,e,t,s){const i=De(e,t),r=Yt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Dt(n.visibleWrites,i);return pn(o,s.getNode().getImmediateChild(t))}else return null}function Rf(n,e){return Yt(n.visibleWrites,e)}function Df(n,e,t,s,i,r,o){let l;const a=Dt(n.visibleWrites,e),c=Yt(a,ce());if(c!=null)l=c;else if(t!=null)l=pn(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=f.getNext();for(;m&&u.length<i;)h(m,s)!==0&&u.push(m),m=f.getNext();return u}else return[]}function Af(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function ws(n,e,t,s){return aa(n.writeTree,n.treePath,e,t,s)}function Vi(n,e){return Tf(n.writeTree,n.treePath,e)}function qr(n,e,t,s){return Nf(n.writeTree,n.treePath,e,t,s)}function Es(n,e){return Rf(n.writeTree,De(n.treePath,e))}function Pf(n,e,t,s,i,r){return Df(n.writeTree,n.treePath,e,t,s,i,r)}function qi(n,e,t){return kf(n.writeTree,n.treePath,e,t)}function ca(n,e){return ua(De(n.treePath,e),n.writeTree)}function ua(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;R(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),R(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Hn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Bn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,_n(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Hn(s,e.snapshotNode,i.oldSnap));else throw gn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ha=new Mf;class Yi{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qi(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vt(this.viewCache_),r=Pf(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n){return{filter:n}}function Ff(n,e){R(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function xf(n,e,t,s,i){const r=new Of;let o,l;if(t.type===ht.OVERWRITE){const c=t;c.source.fromUser?o=bi(n,e,c.path,c.snap,s,i,r):(R(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!Z(c.path),o=Is(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===ht.MERGE){const c=t;c.source.fromUser?o=Bf(n,e,c.path,c.children,s,i,r):(R(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ci(n,e,c.path,c.children,s,i,l,r))}else if(t.type===ht.ACK_USER_WRITE){const c=t;c.revert?o=$f(n,e,c.path,s,i,r):o=Hf(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===ht.LISTEN_COMPLETE)o=Uf(n,e,t.path,s,r);else throw gn("Unknown operation type: "+t.type);const a=r.getChanges();return Wf(e,o,a),{viewCache:o,changes:a}}function Wf(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Cs(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(na(Cs(e)))}}function fa(n,e,t,s,i,r){const o=e.eventCache;if(Es(s,t)!=null)return e;{let l,a;if(Z(t))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Vt(e),u=c instanceof B?c:B.EMPTY_NODE,h=Vi(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ws(s,Vt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=se(t);if(c===".priority"){R(Pt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=qr(s,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=Ce(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=qr(s,t,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=qi(s,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return An(e,l,o.isFullyInitialized()||Z(t),n.filter.filtersNodes())}}function Is(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(Z(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),m,null)}else{const m=se(t);if(!a.isCompleteForPath(t)&&Pt(t)>1)return e;const p=Ce(t),C=a.getNode().getImmediateChild(m).updateChild(p,s);m===".priority"?c=u.updatePriority(a.getNode(),C):c=u.updateChild(a.getNode(),m,C,p,ha,null)}const h=ra(e,c,a.isFullyInitialized()||Z(t),u.filtersNodes()),f=new Yi(i,h,r);return fa(n,h,t,i,f,l)}function bi(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Yi(i,e,r);if(Z(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=An(e,c,!0,n.filter.filtersNodes());else{const h=se(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=An(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=Ce(t),m=l.getNode().getImmediateChild(h);let p;if(Z(f))p=s;else{const y=u.getCompleteChild(h);y!=null?Vl(f)===".priority"&&y.getChild(Yl(f)).isEmpty()?p=y:p=y.updateChild(f,s):p=B.EMPTY_NODE}if(m.equals(p))a=e;else{const y=n.filter.updateChild(l.getNode(),h,p,f,u,o);a=An(e,y,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function Yr(n,e){return n.eventCache.isCompleteForChild(e)}function Bf(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=De(t,a);Yr(e,se(u))&&(l=bi(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=De(t,a);Yr(e,se(u))||(l=bi(n,l,u,c,i,r,o))}),l}function Kr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ci(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;Z(t)?c=s:c=new Ee(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),p=Kr(n,m,f);a=Is(n,a,new pe(h),p,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const m=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!m){const p=e.serverCache.getNode().getImmediateChild(h),y=Kr(n,p,f);a=Is(n,a,new pe(h),y,i,r,o,l)}}),a}function Hf(n,e,t,s,i,r,o){if(Es(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(Z(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Is(n,e,t,a.getNode().getChild(t),i,r,l,o);if(Z(t)){let c=new Ee(null);return a.getNode().forEachChild(hn,(u,h)=>{c=c.set(new pe(u),h)}),Ci(n,e,t,c,i,r,l,o)}else return e}else{let c=new Ee(null);return s.foreach((u,h)=>{const f=De(t,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Ci(n,e,t,c,i,r,l,o)}}function Uf(n,e,t,s,i){const r=e.serverCache,o=ra(e,r.getNode(),r.isFullyInitialized()||Z(t),r.isFiltered());return fa(n,o,t,s,ha,i)}function $f(n,e,t,s,i,r){let o;if(Es(s,t)!=null)return e;{const l=new Yi(s,e,i),a=e.eventCache.getNode();let c;if(Z(t)||se(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ws(s,Vt(e));else{const h=e.serverCache.getNode();R(h instanceof B,"serverChildren would be complete if leaf node"),u=Vi(s,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=se(t);let h=qi(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,Ce(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,B.EMPTY_NODE,Ce(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ws(s,Vt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Es(s,ce())!=null,An(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new $i(s.getIndex()),r=af(s);this.processor_=Lf(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new Ot(a,o.isFullyInitialized(),i.filtersNodes()),h=new Ot(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=xs(h,u),this.eventGenerator_=new pf(this.query_)}get query(){return this.query_}}function Gf(n){return n.viewCache_.serverCache.getNode()}function zf(n){return Cs(n.viewCache_)}function Vf(n,e){const t=Vt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Z(e)&&!t.getImmediateChild(se(e)).isEmpty())?t.getChild(e):null}function Qr(n){return n.eventRegistrations_.length===0}function qf(n,e){n.eventRegistrations_.push(e)}function Jr(n,e,t){const s=[];if(t){R(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Xr(n,e,t,s){e.type===ht.MERGE&&e.source.queryId!==null&&(R(Vt(n.viewCache_),"We should always have a full cache before handling merges"),R(Cs(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=xf(n.processor_,i,e,t,s);return Ff(n.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,da(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Yf(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Te,(r,o)=>{s.push(_n(r,o))}),t.isFullyInitialized()&&s.push(na(t.getNode())),da(n,s,t.getNode(),e)}function da(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return mf(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class _a{constructor(){this.views=new Map}}function Kf(n){R(!Ss,"__referenceConstructor has already been defined"),Ss=n}function Qf(){return R(Ss,"Reference.ts has not been loaded"),Ss}function Jf(n){return n.views.size===0}function Ki(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return R(r!=null,"SyncTree gave us an op for an invalid query."),Xr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Xr(o,e,t,s));return r}}function pa(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=ws(t,i?s:null),a=!1;l?a=!0:s instanceof B?(l=Vi(t,s),a=!1):(l=B.EMPTY_NODE,a=!1);const c=xs(new Ot(l,a,!1),new Ot(s,i,!1));return new jf(e,c)}return o}function Xf(n,e,t,s,i,r){const o=pa(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),qf(o,t),Yf(o,t)}function Zf(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Mt(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(Jr(c,t,s)),Qr(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(Jr(a,t,s)),Qr(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Mt(n)&&r.push(new(Qf())(e._repo,e._path)),{removed:r,events:o}}function ma(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function At(n,e){let t=null;for(const s of n.views.values())t=t||Vf(s,e);return t}function ga(n,e){if(e._queryParams.loadsAllData())return Bs(n);{const s=e._queryIdentifier;return n.views.get(s)}}function va(n,e){return ga(n,e)!=null}function Mt(n){return Bs(n)!=null}function Bs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;function ed(n){R(!Ts,"__referenceConstructor has already been defined"),Ts=n}function td(){return R(Ts,"Reference.ts has not been loaded"),Ts}let nd=1;class Zr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=Af(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sd(n,e,t,s,i){return bf(n.pendingWriteTree_,e,t,s,i),i?Zn(n,new zt(ia(),e,t)):[]}function tn(n,e,t=!1){const s=Cf(n.pendingWriteTree_,e);if(wf(n.pendingWriteTree_,e)){let r=new Ee(null);return s.snap!=null?r=r.set(ce(),!0):ze(s.children,o=>{r=r.set(new pe(o),!0)}),Zn(n,new bs(s.path,r,t))}else return[]}function Xn(n,e,t){return Zn(n,new zt(Gi(),e,t))}function id(n,e,t){const s=Ee.fromObject(t);return Zn(n,new jn(Gi(),e,s))}function rd(n,e){return Zn(n,new $n(Gi(),e))}function od(n,e,t){const s=Qi(n,t);if(s){const i=Ji(s),r=i.path,o=i.queryId,l=Be(r,e),a=new $n(zi(o),l);return Xi(n,r,a)}else return[]}function ya(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||va(o,e))){const a=Zf(o,e,t,s);Jf(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(f,m)=>Mt(m));if(u&&!h){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const m=ud(f);for(let p=0;p<m.length;++p){const y=m[p],C=y.query,N=Ia(n,y);n.listenProvider_.startListening(On(C),Gn(n,C),N.hashFn,N.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(On(e),null):c.forEach(f=>{const m=n.queryToTagMap.get(Hs(f));n.listenProvider_.stopListening(On(f),m)}))}hd(n,c)}return l}function ba(n,e,t,s){const i=Qi(n,s);if(i!=null){const r=Ji(i),o=r.path,l=r.queryId,a=Be(o,e),c=new zt(zi(l),a,t);return Xi(n,o,c)}else return[]}function ld(n,e,t,s){const i=Qi(n,s);if(i){const r=Ji(i),o=r.path,l=r.queryId,a=Be(o,e),c=Ee.fromObject(t),u=new jn(zi(l),a,c);return Xi(n,o,u)}else return[]}function ad(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,m)=>{const p=Be(f,i);r=r||At(m,p),o=o||Mt(m)});let l=n.syncPointTree_.get(i);l?(o=o||Mt(l),r=r||At(l,ce())):(l=new _a,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=B.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,p)=>{const y=At(p,ce());y&&(r=r.updateImmediateChild(m,y))}));const c=va(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Hs(e);R(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=fd();n.queryToTagMap.set(f,m),n.tagToQueryMap.set(m,f)}const u=Ws(n.pendingWriteTree_,i);let h=Xf(l,e,t,u,r,a);if(!c&&!o&&!s){const f=ga(l,e);h=h.concat(dd(n,e,f))}return h}function Ca(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=Be(o,e),c=At(l,a);if(c)return c});return aa(i,e,r,t,!0)}function cd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=Be(c,t);s=s||At(u,h)});let i=n.syncPointTree_.get(t);i?s=s||At(i,ce()):(i=new _a,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Ot(s,!0,!1):null,l=Ws(n.pendingWriteTree_,e._path),a=pa(i,e,l,r?o.getNode():B.EMPTY_NODE,r);return zf(a)}function Zn(n,e){return wa(e,n.syncPointTree_,null,Ws(n.pendingWriteTree_,ce()))}function wa(n,e,t,s){if(Z(n.path))return Ea(n,e,t,s);{const i=e.get(ce());t==null&&i!=null&&(t=At(i,ce()));let r=[];const o=se(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=ca(s,o);r=r.concat(wa(l,a,c,u))}return i&&(r=r.concat(Ki(i,n,s,t))),r}}function Ea(n,e,t,s){const i=e.get(ce());t==null&&i!=null&&(t=At(i,ce()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=ca(s,o),u=n.operationForChild(o);u&&(r=r.concat(Ea(u,l,a,c)))}),i&&(r=r.concat(Ki(i,n,s,t))),r}function Ia(n,e){const t=e.query,s=Gn(n,t);return{hashFn:()=>(Gf(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?od(n,t._path,s):rd(n,t._path);{const r=oh(i,t);return ya(n,t,null,r)}}}}function Gn(n,e){const t=Hs(e);return n.queryToTagMap.get(t)}function Hs(n){return n._path.toString()+"$"+n._queryIdentifier}function Qi(n,e){return n.tagToQueryMap.get(e)}function Ji(n){const e=n.indexOf("$");return R(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new pe(n.substr(0,e))}}function Xi(n,e,t){const s=n.syncPointTree_.get(e);R(s,"Missing sync point for query tag that we're tracking");const i=Ws(n.pendingWriteTree_,e);return Ki(s,t,i,null)}function ud(n){return n.fold((e,t,s)=>{if(t&&Mt(t))return[Bs(t)];{let i=[];return t&&(i=ma(t)),ze(s,(r,o)=>{i=i.concat(o)}),i}})}function On(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(td())(n._repo,n._path):n}function hd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Hs(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function fd(){return nd++}function dd(n,e,t){const s=e._path,i=Gn(n,e),r=Ia(n,t),o=n.listenProvider_.startListening(On(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)R(!Mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!Z(c)&&u&&Mt(u))return[Bs(u).query];{let f=[];return u&&(f=f.concat(ma(u).map(m=>m.query))),ze(h,(m,p)=>{f=f.concat(p)}),f}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(On(u),Gn(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zi(t)}node(){return this.node_}}class er{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=De(this.path_,e);return new er(this.syncTree_,t)}node(){return Ca(this.syncTree_,this.path_)}}const _d=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},eo=function(n,e,t){if(!n||typeof n!="object")return n;if(R(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return md(n[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:R(!1,"Unexpected server value: "+n)}},md=function(n,e,t){n.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&R(!1,"Unexpected increment value: "+s);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},gd=function(n,e,t,s){return tr(e,new er(t,n),s)},vd=function(n,e,t){return tr(n,new Zi(e),t)};function tr(n,e,t){const s=n.getPriority().val(),i=eo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=eo(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new Pe(l,Fe(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Pe(i))),o.forEachChild(Te,(l,a)=>{const c=tr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function sr(n,e){let t=e instanceof pe?e:new pe(e),s=n,i=se(t);for(;i!==null;){const r=fn(s.node.children,i)||{children:{},childCount:0};s=new nr(i,s,r),t=Ce(t),i=se(t)}return s}function bn(n){return n.node.value}function Sa(n,e){n.node.value=e,wi(n)}function Ta(n){return n.node.childCount>0}function yd(n){return bn(n)===void 0&&!Ta(n)}function Us(n,e){ze(n.node.children,(t,s)=>{e(new nr(t,n,s))})}function Na(n,e,t,s){t&&!s&&e(n),Us(n,i=>{Na(i,e,!0,s)}),t&&s&&e(n)}function bd(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function es(n){return new pe(n.parent===null?n.name:es(n.parent)+"/"+n.name)}function wi(n){n.parent!==null&&Cd(n.parent,n.name,n)}function Cd(n,e,t){const s=yd(t),i=wt(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,wi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,wi(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=/[\[\].#$\/\u0000-\u001F\u007F]/,Ed=/[\[\].#$\u0000-\u001F\u007F]/,ni=10*1024*1024,ka=function(n){return typeof n=="string"&&n.length!==0&&!wd.test(n)},Ra=function(n){return typeof n=="string"&&n.length!==0&&!Ed.test(n)},Id=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ra(n)},Da=function(n,e,t){const s=t instanceof pe?new Bh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Bt(s));if(typeof e=="function")throw new Error(n+"contains a function "+Bt(s)+" with contents = "+e.toString());if(Sl(e))throw new Error(n+"contains "+e.toString()+" "+Bt(s));if(typeof e=="string"&&e.length>ni/3&&Ls(e)>ni)throw new Error(n+"contains a string greater than "+ni+" utf8 bytes "+Bt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ze(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ka(o)))throw new Error(n+" contains an invalid key ("+o+") "+Bt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hh(s,o),Da(n,l,s),Uh(s)}),i&&r)throw new Error(n+' contains ".value" child '+Bt(s)+" in addition to actual children.")}},Aa=function(n,e,t,s){if(!(s&&t===void 0)&&!Ra(t))throw new Error(pl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Aa(n,e,t,s)},Td=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ka(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Id(t))throw new Error(pl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Kl(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Ft(n,e,t){kd(n,t),Rd(n,s=>ut(s,e)||ut(e,s))}function Rd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Dd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Dd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ut&&xe("event: "+t.toString()),Qn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="repo_interrupt",Pd=25;class Od{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Nd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ys(),this.transactionQueueTree_=new nr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Md(n,e,t){if(n.stats_=Wi(n.repoInfo_),n.forceRestClient_||uh())n.server_=new vs(n.repoInfo_,(s,i,r,o)=>{to(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>no(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new vt(n.repoInfo_,e,(s,i,r,o)=>{to(n,s,i,r,o)},s=>{no(n,s)},s=>{Fd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=ph(n.repoInfo_,()=>new _f(n.stats_,n.server_)),n.infoData_=new cf,n.infoSyncTree_=new Zr({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=Xn(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ir(n,"connected",!1),n.serverSyncTree_=new Zr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Ft(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ld(n){const t=n.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Pa(n){return _d({timestamp:Ld(n)})}function to(n,e,t,s,i){n.dataUpdateCount++;const r=new pe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=fs(t,c=>Fe(c));o=ld(n.serverSyncTree_,r,a,i)}else{const a=Fe(t);o=ba(n.serverSyncTree_,r,a,i)}else if(s){const a=fs(t,c=>Fe(c));o=id(n.serverSyncTree_,r,a)}else{const a=Fe(t);o=Xn(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=lr(n,r)),Ft(n.eventQueue_,l,o)}function no(n,e){ir(n,"connected",e),e===!1&&Bd(n)}function Fd(n,e){ze(e,(t,s)=>{ir(n,t,s)})}function ir(n,e,t){const s=new pe("/.info/"+e),i=Fe(t);n.infoData_.updateSnapshot(s,i);const r=Xn(n.infoSyncTree_,s,i);Ft(n.eventQueue_,s,r)}function xd(n){return n.nextWriteId_++}function Wd(n,e,t){const s=cd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Fe(i).withIndex(e._queryParams.getIndex());ad(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Xn(n.serverSyncTree_,e._path,r);else{const l=Gn(n.serverSyncTree_,e);o=ba(n.serverSyncTree_,e._path,r,l)}return Ft(n.eventQueue_,e._path,o),ya(n.serverSyncTree_,e,t,null,!0),r},i=>(rr(n,"get for query "+Re(e)+" failed: "+i),Promise.reject(new Error(i))))}function Bd(n){rr(n,"onDisconnectEvents");const e=Pa(n),t=ys();gi(n.onDisconnect_,ce(),(i,r)=>{const o=gd(i,r,n.serverSyncTree_,e);sa(t,i,o)});let s=[];gi(t,ce(),(i,r)=>{s=s.concat(Xn(n.serverSyncTree_,i,r));const o=jd(n,i);lr(n,o)}),n.onDisconnect_=ys(),Ft(n.eventQueue_,ce(),s)}function Hd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ad)}function rr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),xe(t,...e)}function Oa(n,e,t){return Ca(n.serverSyncTree_,e,t)||B.EMPTY_NODE}function or(n,e=n.transactionQueueTree_){if(e||$s(n,e),bn(e)){const t=La(n,e);R(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Ud(n,es(e),t)}else Ta(e)&&Us(e,t=>{or(n,t)})}function Ud(n,e,t){const s=t.map(c=>c.currentWriteId),i=Oa(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Be(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{rr(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(tn(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();$s(n,sr(n.transactionQueueTree_,e)),or(n,n.transactionQueueTree_),Ft(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)Qn(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Je("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}lr(n,e)}},o)}function lr(n,e){const t=Ma(n,e),s=es(t),i=La(n,t);return $d(n,i,s),s}function $d(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Be(t,a.path);let u=!1,h;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(tn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Pd)u=!0,h="maxretry",i=i.concat(tn(n.serverSyncTree_,a.currentWriteId,!0));else{const f=Oa(n,a.path,o);a.currentInputSnapshot=f;const m=e[l].update(f.val());if(m!==void 0){Da("transaction failed: Data returned ",m,a.path);let p=Fe(m);typeof m=="object"&&m!=null&&wt(m,".priority")||(p=p.updatePriority(f.getPriority()));const C=a.currentWriteId,N=Pa(n),A=vd(p,f,N);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=A,a.currentWriteId=xd(n),o.splice(o.indexOf(C),1),i=i.concat(sd(n.serverSyncTree_,a.path,A,a.currentWriteId,a.applyLocally)),i=i.concat(tn(n.serverSyncTree_,C,!0))}else u=!0,h="nodata",i=i.concat(tn(n.serverSyncTree_,a.currentWriteId,!0))}Ft(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}$s(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Qn(s[l]);or(n,n.transactionQueueTree_)}function Ma(n,e){let t,s=n.transactionQueueTree_;for(t=se(e);t!==null&&bn(s)===void 0;)s=sr(s,t),e=Ce(e),t=se(e);return s}function La(n,e){const t=[];return Fa(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Fa(n,e,t){const s=bn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Us(e,i=>{Fa(n,i,t)})}function $s(n,e){const t=bn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Sa(e,t.length>0?t:void 0)}Us(e,s=>{$s(n,s)})}function jd(n,e){const t=es(Ma(n,e)),s=sr(n.transactionQueueTree_,e);return bd(s,i=>{si(n,i)}),si(n,s),Na(s,i=>{si(n,i)}),t}function si(n,e){const t=bn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(R(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(tn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sa(e,void 0):t.length=r+1,Ft(n.eventQueue_,es(e),i);for(let o=0;o<s.length;o++)Qn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function zd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Je(`Invalid query segment '${t}' in query '${n}'`)}return e}const so=function(n,e){const t=Vd(n),s=t.namespace;t.domain==="firebase.com"&&bt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||th();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new xl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new pe(t.pathString)}},Vd=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Gd(n.substring(u,h)));const f=zd(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Re(this.snapshot.exportVal())}}class Yd{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ar{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return Z(this._path)?null:Vl(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=$r(this._queryParams),t=Fi(e);return t==="{}"?"default":t}get _queryObject(){return $r(this._queryParams)}isEqual(e){if(e=vn(e),!(e instanceof ar))return!1;const t=this._repo===e._repo,s=Kl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wh(this._path)}}class Et extends ar{constructor(e,t){super(e,t,new ji,!1)}get parent(){const e=Yl(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new pe(e),s=Ei(this.ref,e);return new zn(this._node.getChild(t),s,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zn(i,Ei(this.ref,s),Te)))}hasChild(e){const t=new pe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qd(n,e){return n=vn(n),n._checkNotDeleted("ref"),e!==void 0?Ei(n._root,e):n._root}function Ei(n,e){return n=vn(n),se(n._path)===null?Sd("child","path",e,!1):Aa("child","path",e,!1),new Et(n._repo,De(n._path,e))}function Jd(n){n=vn(n);const e=new Kd(()=>{}),t=new cr(e);return Wd(n._repo,n,t).then(s=>new zn(s,new Et(n._repo,n._path),n._queryParams.getIndex()))}class cr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new qd("value",this,new zn(e.snapshotNode,new Et(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yd(this,e,t):null}matches(e){return e instanceof cr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Xd(n,...e){let t=vn(n);for(const s of e)t=s._apply(t);return t}Kf(Et);ed(Et);/**
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
 */const Zd="FIREBASE_DATABASE_EMULATOR_HOST",Ii={};let e_=!1;function t_(n,e,t,s){n.repoInfo_=new xl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function n_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=so(r,i),l=o.repoInfo,a,c;typeof process<"u"&&Ir&&(c=Ir[Zd]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=so(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new un(un.OWNER):new fh(n.name,n.options,e);Td("Invalid Firebase Database URL",o),Z(o.path)||bt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=i_(l,n,u,new hh(n.name,t));return new r_(h,n)}function s_(n,e){const t=Ii[e];(!t||t[n.key]!==n)&&bt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Hd(n),delete t[n.key]}function i_(n,e,t,s){let i=Ii[e.name];i||(i={},Ii[e.name]=i);let r=i[n.toURLString()];return r&&bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Od(n,e_,t,s),i[n.toURLString()]=r,r}class r_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Md(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(s_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bt("Cannot call "+e+" on a deleted database.")}}function o_(n=Wu(),e){const t=Mu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Tc("database");s&&l_(t,...s)}return t}function l_(n,e,t,s={}){n=vn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&bt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new un(un.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Nc(s.mockUserToken,n.app.options.projectId);r=new un(o)}t_(i,e,t,r)}/**
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
 */function a_(n){Qu(xu),_s(new Fn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return n_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),an(Sr,Tr,n),an(Sr,Tr,"esm2017")}vt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};vt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};a_();var Si={},xa={},js={};Object.defineProperty(js,"__esModule",{value:!0});js.rotx=void 0;function c_(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}js.rotx=c_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=js;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(xa);var Wa={},Gs={};Object.defineProperty(Gs,"__esModule",{value:!0});Gs.base64=void 0;class u_{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const h_=new u_;Gs.base64=h_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=Gs;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(Wa);var Ba={},zs={};Object.defineProperty(zs,"__esModule",{value:!0});zs.hex=void 0;class f_{encode(e){let t="",s="";for(let i=0;i<e.length;i++)t=e.charCodeAt(i).toString(16),s+=("000"+t).slice(-4);return s}decode(e){let t=e.match(/.{1,4}/g)||[],s="";for(let i=0;i<t.length;i++)s+=String.fromCharCode(parseInt(t[i],16));return s}}const d_=new f_;zs.hex=d_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=zs;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(Ba);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=xa;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=Wa;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var s=Ba;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return s.hex}})})(Si);let __={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},Ha={};for(let[n,e]of Object.entries(__))Ha[Si.rotx(n,18)]=Si.rotx(e,18);let Ns={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},ks={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},p_=["head","body","legs","feet","neck","back","ring","misc"],m_=o_(yl(Ha)),mn="https://fantastic-frontier-roblox.fandom.com/wiki/",Lt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Ua={chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},g_={hardMode:!1,muted:!1},v_={gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},y_={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function Ti(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function nn(n){n.target.closest("button").blur()}function ur(){Ti("?ls=true"),setTimeout(Ti)}let io=localStorage.getItem("fd-currentGameData"),ro=localStorage.getItem("fd-settings"),oo=localStorage.getItem("fd-playerStats"),it=Ct(io?JSON.parse(io):Ua),Tt=Ct(ro?JSON.parse(ro):g_),at=Ct(oo?JSON.parse(oo):v_),Ni=Ct([]),lo=Ct(""),Ke=Ct({component:null,complete:!1}),Rs=Ct(7),Vn=Ct(!1),Ds=Ct(!1);it.subscribe(n=>{ur(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});Tt.subscribe(n=>{ur(),Rs.set(n.hardMode?6:7),localStorage.setItem("fd-settings",JSON.stringify(n))});at.subscribe(n=>{ur(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});function b_(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:h=m=>Math.sqrt(m)*120,easing:f=il}=s;return{delay:u,duration:qt(h)?h(Math.sqrt(a*a+c*c)):h,easing:f,css:(m,p)=>{const y=p*a,C=p*c,N=m+p*e.width/t.width,A=m+p*e.height/t.height;return`transform: ${r} translate(${y}px, ${C}px) scale(${N}, ${A});`}}}function ao(n,e,t){const s=n.slice();s[6]=e[t];const i=s[6].slot==s[0].slot;s[7]=i;const r=vo(s[0].stats,s[6].stats);s[8]=r;const o=s[8]==s[0].stats.length&&s[6].stats.length==s[0].stats.length;s[9]=o;const l=Math.ceil((s[6].cost.min+s[6].cost.max)/2);s[10]=l;const a=Math.ceil((s[0].cost.min+s[0].cost.max)/2);s[11]=a;const c=s[10]==s[11];s[12]=c;const u=vo(s[0].colors,s[6].colors);s[13]=u;const h=s[13]==s[0].colors.length&&s[6].colors.length==s[0].colors.length;s[14]=h;const f=s[6].outline==s[0].outline;s[15]=f;const m=s[6].release==s[0].release;return s[16]=m,s}function co(n,e,t){const s=n.slice();return s[19]=e[t],s}function uo(n,e,t){const s=n.slice();return s[22]=e[t],s}function C_(n){let e;return{c(){e=W("None")},m(t,s){P(t,e,s)},p:J,d(t){t&&T(e)}}}function w_(n){let e,t=_e(n[6].stats),s=[];for(let i=0;i<t.length;i+=1)s[i]=ho(uo(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Nt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);P(i,e,r)},p(i,r){if(r&2){t=_e(i[6].stats);let o;for(o=0;o<t.length;o+=1){const l=uo(i,t,o);s[o]?s[o].p(l,r):(s[o]=ho(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&T(e),je(s,i)}}}function ho(n){let e=ks[n[22]]+(n[22]==n[6].stats[n[6].stats.length-1]?"":", "),t;return{c(){t=W(e)},m(s,i){P(s,t,i)},p(s,i){i&2&&e!==(e=ks[s[22]]+(s[22]==s[6].stats[s[6].stats.length-1]?"":", "))&&he(t,e)},d(s){s&&T(t)}}}function fo(n){let e,t=n[8]+"",s;return{c(){e=g("span"),s=W(t),_(e,"class","bgInfo")},m(i,r){P(i,e,r),d(e,s)},p(i,r){r&3&&t!==(t=i[8]+"")&&he(s,t)},d(i){i&&T(e)}}}function E_(n){let e=n[10].toLocaleString()+"",t,s,i,r;return{c(){t=W(e),s=I(),i=g("br"),r=W(`\r
                    Gold`)},m(o,l){P(o,t,l),P(o,s,l),P(o,i,l),P(o,r,l)},p(o,l){l&2&&e!==(e=o[10].toLocaleString()+"")&&he(t,e)},d(o){o&&(T(t),T(s),T(i),T(r))}}}function I_(n){let e;return{c(){e=W("Unpurchasable")},m(t,s){P(t,e,s)},p:J,d(t){t&&T(e)}}}function _o(n){let e,t;return{c(){e=g("iconify-icon"),Me(e,"class","bgInfo"),Me(e,"icon","mingcute:arrow-up-fill"),Me(e,"flip",t=n[10]>n[11]?"vertical":"")},m(s,i){P(s,e,i)},p(s,i){i&3&&t!==(t=s[10]>s[11]?"vertical":"")&&Me(e,"flip",t)},d(s){s&&T(e)}}}function po(n){let e=(n[19]==n[6].colors[0]?sn(n[19]):n[19])+(n[19]==n[6].colors[n[6].colors.length-1]?"":", "),t;return{c(){t=W(e)},m(s,i){P(s,t,i)},p(s,i){i&2&&e!==(e=(s[19]==s[6].colors[0]?sn(s[19]):s[19])+(s[19]==s[6].colors[s[6].colors.length-1]?"":", "))&&he(t,e)},d(s){s&&T(t)}}}function mo(n){let e,t=n[13]+"",s;return{c(){e=g("span"),s=W(t),_(e,"class","bgInfo")},m(i,r){P(i,e,r),d(e,s)},p(i,r){r&3&&t!==(t=i[13]+"")&&he(s,t)},d(i){i&&T(e)}}}function go(n,e){let t,s,i,r,o,l,a,c,u,h,f,m=e[6].name+"",p,y,C,N,A,b=sn(e[6].slot)+"",v,E,O,M,L,G,V,q,U,Y,Ie,H,ie,z,ee,me,ge,ue,te,x,ne=sn(e[6].outline)+"",fe,k,F,re,we,X=Ns[e[6].release]+"",D,le,w,K,It,xt,Cn=J,de,wn,S;function Ye($,ve){return $[6].stats.length?w_:C_}let nt=Ye(e),st=nt(e),He=!e[2].hardMode&&e[8]&&!e[9]&&fo(e);function hr($,ve){return $[6].cost.min==null?I_:E_}let ts=hr(e),dt=ts(e),Ue=!e[2].hardMode&&!e[12]&&e[10]&&_o(e),Kt=_e(e[6].colors),We=[];for(let $=0;$<Kt.length;$+=1)We[$]=po(co(e,Kt,$));let $e=!e[2].hardMode&&e[13]&&!e[14]&&mo(e);return{key:n,first:null,c(){t=g("div"),s=g("div"),i=g("a"),r=g("img"),a=I(),c=g("iconify-icon"),h=I(),f=g("span"),p=W(m),N=I(),A=g("span"),v=W(b),M=I(),L=g("span"),st.c(),G=I(),He&&He.c(),U=I(),Y=g("span"),dt.c(),Ie=I(),Ue&&Ue.c(),z=I(),ee=g("span");for(let $=0;$<We.length;$+=1)We[$].c();me=I(),$e&&$e.c(),te=I(),x=g("span"),fe=W(ne),re=I(),we=g("span"),D=W(X),le=W(" Update"),It=I(),Qe(r.src,o=Lt+e[6].image)||_(r,"src",o),_(r,"alt",l=e[6].name),_(r,"class","svelte-pl04pb"),Me(c,"icon","tabler:link"),Me(c,"class","svelte-pl04pb"),_(i,"class","flex fjc-center fai-center svelte-pl04pb"),_(i,"href",u=mn+e[6].link),_(i,"target","_blank"),_(f,"class","tooltip"),_(f,"id","right"),_(s,"id","itemImage"),_(s,"class","ff-item svelte-pl04pb"),_(A,"class","ff-bg ff-item svelte-pl04pb"),_(A,"id",E=e[7]?"correct":"wrong"),_(L,"class","ff-bg ff-item svelte-pl04pb"),_(L,"id",V=e[9]?"correct":e[8]?"partial":"wrong"),pt(L,"smallerStats",e[6].stats.length>=7),_(Y,"class","ff-bg ff-item svelte-pl04pb"),_(Y,"id",H=e[12]?"correct":"wrong"),_(ee,"class","ff-bg ff-item svelte-pl04pb"),_(ee,"id",ge=e[14]?"correct":e[13]?"partial":"wrong"),_(x,"class","ff-bg ff-item svelte-pl04pb"),_(x,"id",k=e[15]?"correct":"wrong"),_(we,"class","ff-bg ff-item svelte-pl04pb"),_(we,"id",w=e[16]?"correct":"wrong"),_(t,"class","itemRow svelte-pl04pb"),this.first=t},m($,ve){P($,t,ve),d(t,s),d(s,i),d(i,r),d(i,a),d(i,c),d(s,h),d(s,f),d(f,p),d(t,N),d(t,A),d(A,v),d(t,M),d(t,L),st.m(L,null),d(L,G),He&&He.m(L,null),d(t,U),d(t,Y),dt.m(Y,null),d(Y,Ie),Ue&&Ue.m(Y,null),d(t,z),d(t,ee);for(let Le=0;Le<We.length;Le+=1)We[Le]&&We[Le].m(ee,null);d(ee,me),$e&&$e.m(ee,null),d(t,te),d(t,x),d(x,fe),d(t,re),d(t,we),d(we,D),d(we,le),d(t,It),de=!0,wn||(S=[qa(y=e[4].call(null,s,[e[7],e[8],e[9],e[12],e[13],e[14],e[15],e[16]])),Ne(we,"introend",e[5])],wn=!0)},p($,ve){if(e=$,(!de||ve&2&&!Qe(r.src,o=Lt+e[6].image))&&_(r,"src",o),(!de||ve&2&&l!==(l=e[6].name))&&_(r,"alt",l),(!de||ve&2&&u!==(u=mn+e[6].link))&&_(i,"href",u),(!de||ve&2)&&m!==(m=e[6].name+"")&&he(p,m),y&&qt(y.update)&&ve&3&&y.update.call(null,[e[7],e[8],e[9],e[12],e[13],e[14],e[15],e[16]]),(!de||ve&2)&&b!==(b=sn(e[6].slot)+"")&&he(v,b),(!de||ve&3&&E!==(E=e[7]?"correct":"wrong"))&&_(A,"id",E),nt===(nt=Ye(e))&&st?st.p(e,ve):(st.d(1),st=nt(e),st&&(st.c(),st.m(L,G))),!e[2].hardMode&&e[8]&&!e[9]?He?He.p(e,ve):(He=fo(e),He.c(),He.m(L,null)):He&&(He.d(1),He=null),(!de||ve&3&&V!==(V=e[9]?"correct":e[8]?"partial":"wrong"))&&_(L,"id",V),(!de||ve&2)&&pt(L,"smallerStats",e[6].stats.length>=7),ts===(ts=hr(e))&&dt?dt.p(e,ve):(dt.d(1),dt=ts(e),dt&&(dt.c(),dt.m(Y,Ie))),!e[2].hardMode&&!e[12]&&e[10]?Ue?Ue.p(e,ve):(Ue=_o(e),Ue.c(),Ue.m(Y,null)):Ue&&(Ue.d(1),Ue=null),(!de||ve&3&&H!==(H=e[12]?"correct":"wrong"))&&_(Y,"id",H),ve&2){Kt=_e(e[6].colors);let Le;for(Le=0;Le<Kt.length;Le+=1){const fr=co(e,Kt,Le);We[Le]?We[Le].p(fr,ve):(We[Le]=po(fr),We[Le].c(),We[Le].m(ee,me))}for(;Le<We.length;Le+=1)We[Le].d(1);We.length=Kt.length}!e[2].hardMode&&e[13]&&!e[14]?$e?$e.p(e,ve):($e=mo(e),$e.c(),$e.m(ee,null)):$e&&($e.d(1),$e=null),(!de||ve&3&&ge!==(ge=e[14]?"correct":e[13]?"partial":"wrong"))&&_(ee,"id",ge),(!de||ve&2)&&ne!==(ne=sn(e[6].outline)+"")&&he(fe,ne),(!de||ve&3&&k!==(k=e[15]?"correct":"wrong"))&&_(x,"id",k),(!de||ve&2)&&X!==(X=Ns[e[6].release]+"")&&he(D,X),(!de||ve&3&&w!==(w=e[16]?"correct":"wrong"))&&_(we,"id",w)},r(){xt=t.getBoundingClientRect()},f(){sc(t),Cn()},a(){Cn(),Cn=nc(t,xt,b_,{duration:125})},i($){de||($&&ke(()=>{de&&(C||(C=ye(s,Ae,{duration:300},!0)),C.run(1))}),$&&ke(()=>{de&&(O||(O=ye(A,Ae,{duration:300,delay:250},!0)),O.run(1))}),$&&ke(()=>{de&&(q||(q=ye(L,Ae,{duration:300,delay:550},!0)),q.run(1))}),$&&ke(()=>{de&&(ie||(ie=ye(Y,Ae,{duration:300,delay:850},!0)),ie.run(1))}),$&&ke(()=>{de&&(ue||(ue=ye(ee,Ae,{duration:300,delay:1150},!0)),ue.run(1))}),$&&ke(()=>{de&&(F||(F=ye(x,Ae,{duration:300,delay:1450},!0)),F.run(1))}),$&&ke(()=>{de&&(K||(K=ye(we,Ae,{duration:300,delay:1750},!0)),K.run(1))}),de=!0)},o($){$&&(C||(C=ye(s,Ae,{duration:300},!1)),C.run(0)),$&&(O||(O=ye(A,Ae,{duration:300,delay:250},!1)),O.run(0)),$&&(q||(q=ye(L,Ae,{duration:300,delay:550},!1)),q.run(0)),$&&(ie||(ie=ye(Y,Ae,{duration:300,delay:850},!1)),ie.run(0)),$&&(ue||(ue=ye(ee,Ae,{duration:300,delay:1150},!1)),ue.run(0)),$&&(F||(F=ye(x,Ae,{duration:300,delay:1450},!1)),F.run(0)),$&&(K||(K=ye(we,Ae,{duration:300,delay:1750},!1)),K.run(0)),de=!1},d($){$&&T(t),$&&C&&C.end(),$&&O&&O.end(),st.d(),He&&He.d(),$&&q&&q.end(),dt.d(),Ue&&Ue.d(),$&&ie&&ie.end(),je(We,$),$e&&$e.d(),$&&ue&&ue.end(),$&&F&&F.end(),$&&K&&K.end(),wn=!1,Ve(S)}}}function S_(n){let e,t,s,i=[],r=new Map,o,l=_e(n[1].chosenItems.toReversed());const a=c=>c[6];for(let c=0;c<l.length;c+=1){let u=ao(n,l,c),h=a(u);r.set(h,i[c]=go(h,u))}return{c(){e=g("div"),t=g("div"),t.innerHTML='<span class="ff-item svelte-pl04pb">Item</span> <span class="ff-item svelte-pl04pb">Slot</span> <span class="ff-item svelte-pl04pb">Stats</span> <span class="ff-item svelte-pl04pb">Avg. Cost</span> <span class="ff-item svelte-pl04pb">Colors</span> <span class="ff-item svelte-pl04pb">Outline</span> <span class="ff-item svelte-pl04pb">Release</span>',s=I();for(let c=0;c<i.length;c+=1)i[c].c();_(t,"id","categories"),_(t,"class","svelte-pl04pb"),_(e,"class","gameboard ff-bg fd-col flex posrel border-tp svelte-pl04pb")},m(c,u){P(c,e,u),d(e,t),d(e,s);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(e,null);o=!0},p(c,[u]){if(u&15){l=_e(c[1].chosenItems.toReversed()),rt();for(let h=0;h<i.length;h+=1)i[h].r();i=_c(i,u,a,1,c,l,r,e,dc,go,null,ao);for(let h=0;h<i.length;h+=1)i[h].a();ot()}},i(c){if(!o){for(let u=0;u<l.length;u+=1)j(i[u]);o=!0}},o(c){for(let u=0;u<i.length;u+=1)ae(i[u]);o=!1},d(c){c&&T(e);for(let u=0;u<i.length;u+=1)i[u].d()}}}function sn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function vo(n,e){return n.filter(s=>e.includes(s)).length}function T_(n,e,t){let s,i,r;Se(n,it,c=>t(1,s=c)),Se(n,Tt,c=>t(2,i=c)),Se(n,Vn,c=>t(3,r=c));let{dailyItemData:o}=e;function l(c,[u,h,f,m,p,y,C,N]){s.chosenItems.length==s.rowInfo.length+1&&it.update(A=>({...A,rowInfo:[...A.rowInfo,[u,f?1:h?0:-1,m,y?1:p?0:-1,C,N]]}))}const a=()=>oe(Vn,r=!1,r);return n.$$set=c=>{"dailyItemData"in c&&t(0,o=c.dailyItemData)},[o,s,i,r,l,a]}class N_ extends tt{constructor(e){super(),et(this,e,T_,S_,qe,{dailyItemData:0})}}function k_(n){let e,t,s,i;return{c(){e=g("div"),t=g("input"),_(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],_(t,"type","checkbox"),t.checked=n[1],_(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),pt(e,"unavailable",n[2]),$t(e,"--s",`${n[0]}rem`)},m(r,o){P(r,e,o),d(e,t),s||(i=[Ne(t,"change",n[5]),Ne(t,"keydown",n[6])],s=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&pt(e,"unavailable",r[2]),o&1&&$t(e,"--s",`${r[0]}rem`)},i:J,o:J,d(r){r&&T(e),s=!1,Ve(i)}}}function R_(n,e,t){let{size:s,checked:i=!1,disabled:r=!1,forced:o=!1}=e;const l=oc(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,s=u.size),"checked"in u&&t(1,i=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[s,i,r,o,l,a,c]}class D_ extends tt{constructor(e){super(),et(this,e,R_,k_,qe,{size:0,checked:1,disabled:2,forced:3})}}function yo(n,e,t){const s=n.slice();s[16]=e[t];const i=s[7].chosenItems.find(function(...o){return n[14](s[16],...o)})!=null;return s[17]=i,s}function bo(n){let e,t,s,i=_e(n[3]),r=[];for(let o=0;o<i.length;o+=1)r[o]=Co(yo(n,i,o));return{c(){e=g("div");for(let o=0;o<r.length;o+=1)r[o].c();_(e,"class","itemList ff-bg flex fd-col svelte-1k366gl")},m(o,l){P(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[15](e),s=!0},p(o,l){if(l&680){i=_e(o[3]);let a;for(a=0;a<i.length;a+=1){const c=yo(o,i,a);r[a]?r[a].p(c,l):(r[a]=Co(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}},i(o){s||(o&&ke(()=>{s&&(t||(t=ye(e,yt,{duration:75},!0)),t.run(1))}),s=!0)},o(o){o&&(t||(t=ye(e,yt,{duration:75},!1)),t.run(0)),s=!1},d(o){o&&T(e),je(r,o),n[15](null),o&&t&&t.end()}}}function Co(n){let e,t,s,i,r,o=n[16].name+"",l,a,c,u,h;function f(){return n[13](n[17],n[16])}return{c(){e=g("button"),t=g("img"),i=I(),r=g("span"),l=W(o),a=I(),Qe(t.src,s=Lt+n[16].image)||_(t,"src",s),_(t,"alt",""),_(t,"class","svelte-1k366gl"),e.disabled=c=n[17],_(e,"class","listItem flex fai-center no-bg-change svelte-1k366gl"),pt(e,"unavailable",n[17])},m(m,p){P(m,e,p),d(e,t),d(e,i),d(e,r),d(r,l),d(e,a),u||(h=Ne(e,"click",f),u=!0)},p(m,p){n=m,p&8&&!Qe(t.src,s=Lt+n[16].image)&&_(t,"src",s),p&8&&o!==(o=n[16].name+"")&&he(l,o),p&136&&c!==(c=n[17])&&(e.disabled=c),p&136&&pt(e,"unavailable",n[17])},d(m){m&&T(e),u=!1,h()}}}function A_(n){let e,t,s,i,r,o,l=n[6].length&&n[3].length&&n[4]&&bo(n);return{c(){e=g("input"),s=I(),l&&l.c(),i=Nt(),e.disabled=n[5],_(e,"type","text"),_(e,"class","searcherInput svelte-1k366gl"),_(e,"placeholder",t=`Guess the item for game #${n[0]+1}...`)},m(a,c){P(a,e,c),n[11](e),P(a,s,c),l&&l.m(a,c),P(a,i,c),r||(o=[Ne(window,"mousedown",n[10]),Ne(e,"input",n[8]),Ne(e,"focusin",n[12])],r=!0)},p(a,[c]){c&32&&(e.disabled=a[5]),c&1&&t!==(t=`Guess the item for game #${a[0]+1}...`)&&_(e,"placeholder",t),a[6].length&&a[3].length&&a[4]?l?(l.p(a,c),c&88&&j(l,1)):(l=bo(a),l.c(),j(l,1),l.m(i.parentNode,i)):l&&(rt(),ae(l,1,1,()=>{l=null}),ot())},i(a){j(l)},o(a){ae(l)},d(a){a&&(T(e),T(s),T(i)),n[11](null),l&&l.d(a),r=!1,Ve(o)}}}function P_(n,e,t){let s,i,r;Se(n,Vn,b=>t(5,s=b)),Se(n,Ni,b=>t(6,i=b)),Se(n,it,b=>t(7,r=b));let{gameNumber:o}=e,l,a,c=[],u=!1;function h(){let b=l.value.toLowerCase();if(t(3,c=[]),!!b)for(let v of i)v.name.toLowerCase().includes(b)&&c.push(v)}function f(b){s||(it.update(v=>({...v,chosenItems:[...v.chosenItems,b]})),t(1,l.value="",l),h())}const m=b=>{a&&b.target!=l&&!a.contains(b.target)&&t(4,u=!1)};function p(b){mt[b?"unshift":"push"](()=>{l=b,t(1,l)})}const y=()=>t(4,u=!0),C=(b,v)=>{b||(f(v),oe(Vn,s=!0,s))},N=(b,v)=>v.name==b.name;function A(b){mt[b?"unshift":"push"](()=>{a=b,t(2,a)})}return n.$$set=b=>{"gameNumber"in b&&t(0,o=b.gameNumber)},[o,l,a,c,u,s,i,r,h,f,m,p,y,C,N,A]}class O_ extends tt{constructor(e){super(),et(this,e,P_,A_,qe,{gameNumber:0})}}function wo(n){let e,t,s;return{c(){e=g("span"),_(e,"id","HPFlash"),_(e,"class","svelte-9b9oo1")},m(i,r){P(i,e,r),s=!0},i(i){s||(t&&t.end(1),s=!0)},o(i){i&&(t=hc(e,yt,{duration:200})),s=!1},d(i){i&&T(e),i&&t&&t.end()}}}function M_(n){let e,t,s,i,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,h,f,m,p,y,C=n[4].hardMode?"You've lost your remaining armor.":"Your armor is protecting you.",N,A,b,v,E,O,M,L,G,V,q,U=n[1]&&wo();function Y(H){n[6](H)}let Ie={};return n[0]!==void 0&&(Ie.gameNumber=n[0]),G=new O_({props:Ie}),mt.push(()=>Ms(G,"gameNumber",Y)),{c(){e=g("div"),t=g("div"),s=g("div"),i=g("div"),r=g("div"),o=g("span"),a=W(l),c=W("/600"),u=I(),h=g("button"),f=g("img"),p=I(),y=g("span"),N=W(C),A=I(),b=g("br"),v=W(`\r
                You can take `),E=W(n[2]),O=W(" hits at most!"),M=I(),U&&U.c(),L=I(),lt(G.$$.fragment),_(o,"class","svelte-9b9oo1"),_(r,"class","HPBackground svelte-9b9oo1"),$t(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),_(i,"class","innerGameHP flex posrel svelte-9b9oo1"),_(s,"class","outerGameHP posrel svelte-9b9oo1"),Qe(f.src,m="misc/armor.svg")||_(f,"src",m),_(f,"alt","Armor"),_(f,"class","svelte-9b9oo1"),pt(f,"noArmor",n[4].hardMode),_(y,"class","tooltip svelte-9b9oo1"),_(y,"id","right"),_(h,"class","posrel br-1 svelte-9b9oo1"),_(h,"id","armorIcon"),_(t,"class","gameHPCont flex svelte-9b9oo1"),_(e,"class","currentGameInfo ff-bg flex fjc-center fai-center posrel border-tp br-1 svelte-9b9oo1")},m(H,ie){P(H,e,ie),d(e,t),d(t,s),d(s,i),d(i,r),d(r,o),d(o,a),d(o,c),d(t,u),d(t,h),d(h,f),d(h,p),d(h,y),d(y,N),d(y,A),d(y,b),d(y,v),d(y,E),d(y,O),d(e,M),U&&U.m(e,null),d(e,L),Xe(G,e,null),q=!0},p(H,[ie]){(!q||ie&12)&&l!==(l=Math.round(600-H[3].chosenItems.length*(600/H[2]))+"")&&he(a,l),ie&12&&$t(r,"width",`${Math.floor(100*(H[2]-H[3].chosenItems.length)/H[2])}%`),(!q||ie&16)&&pt(f,"noArmor",H[4].hardMode),(!q||ie&16)&&C!==(C=H[4].hardMode?"You've lost your remaining armor.":"Your armor is protecting you.")&&he(N,C),(!q||ie&4)&&he(E,H[2]),H[1]?U?ie&2&&j(U,1):(U=wo(),U.c(),j(U,1),U.m(e,L)):U&&(rt(),ae(U,1,1,()=>{U=null}),ot());const z={};!V&&ie&1&&(V=!0,z.gameNumber=H[0],Os(()=>V=!1)),G.$set(z)},i(H){q||(j(U),j(G.$$.fragment,H),q=!0)},o(H){ae(U),ae(G.$$.fragment,H),q=!1},d(H){H&&T(e),U&&U.d(),Ze(G)}}}function L_(n,e,t){let s,i,r,o;Se(n,Vn,u=>t(5,s=u)),Se(n,Rs,u=>t(2,i=u)),Se(n,it,u=>t(3,r=u)),Se(n,Tt,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&s&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,i,r,o,s,c]}class F_ extends tt{constructor(e){super(),et(this,e,L_,M_,qe,{gameNumber:0})}}function Eo(n,e,t){const s=n.slice();return s[8]=e[t],s}function Io(n,e,t){const s=n.slice();return s[11]=e[t],s}function So(n){let e,t=(n[11]===!0||n[11]===1?n[3].html.blue:n[11]===0?n[3].html.yellow:n[11]===!1||n[11]===-1?n[3].html.red:null)+"",s;return{c(){e=new Zo(!1),s=Nt(),e.a=s},m(i,r){e.m(t,i,r),P(i,s,r)},p(i,r){r&4&&t!==(t=(i[11]===!0||i[11]===1?i[3].html.blue:i[11]===0?i[3].html.yellow:i[11]===!1||i[11]===-1?i[3].html.red:null)+"")&&e.p(t)},d(i){i&&(T(s),e.d())}}}function To(n){let e,t,s=_e(n[8]),i=[];for(let r=0;r<s.length;r+=1)i[r]=So(Io(n,s,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=I(),t=g("br")},m(r,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(r,o);P(r,e,o),P(r,t,o)},p(r,o){if(o&12){s=_e(r[8]);let l;for(l=0;l<s.length;l+=1){const a=Io(r,s,l);i[l]?i[l].p(a,o):(i[l]=So(a),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},d(r){r&&(T(e),T(t)),je(i,r)}}}function x_(n){let e,t,s,i,r,o,l,a,c,u,h,f,m,p,y=n[1]?"Copied!":"Copy",C,N,A,b=_e(n[2].rowInfo.toReversed()),v=[];for(let E=0;E<b.length;E+=1)v[E]=To(Eo(n,b,E));return{c(){e=g("div"),t=g("span"),t.textContent="Game Stats",s=I(),i=g("span"),r=W(n[4]),o=I(),l=g("br"),a=I();for(let E=0;E<v.length;E+=1)v[E].c();c=I(),u=g("button"),h=W(`Share Stats\r
        `),f=g("iconify-icon"),m=I(),p=g("span"),C=W(y),_(i,"class","smaller-fs"),Me(f,"icon","ri:share-fill"),_(p,"class","tooltip"),_(p,"id","top"),_(u,"class","flex fai-center posrel border-tp br-1 smaller-fs svelte-14jqt1l"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1")},m(E,O){P(E,e,O),d(e,t),d(e,s),d(e,i),d(i,r),d(i,o),d(i,l),d(i,a);for(let M=0;M<v.length;M+=1)v[M]&&v[M].m(i,null);d(e,c),d(e,u),d(u,h),d(u,f),d(u,m),d(u,p),d(p,C),N||(A=Ne(u,"click",n[6]),N=!0)},p(E,[O]){if(O&12){b=_e(E[2].rowInfo.toReversed());let M;for(M=0;M<b.length;M+=1){const L=Eo(E,b,M);v[M]?v[M].p(L,O):(v[M]=To(L),v[M].c(),v[M].m(i,null))}for(;M<v.length;M+=1)v[M].d(1);v.length=b.length}O&2&&y!==(y=E[1]?"Copied!":"Copy")&&he(C,y)},i:J,o:J,d(E){E&&T(e),je(v,E),N=!1,A()}}}function W_(n,e,t){let s,i;Se(n,it,h=>t(2,s=h)),Se(n,Tt,h=>t(7,i=h));let{gameNumber:r}=e,o={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},l=`${i.hardMode?"(Nightmare)":""} Frontierdle #${r+1}`,a="",c=!1;for(let h of s.rowInfo.toReversed()){let f="";for(let m of h)f+=m===!0||m===1?o.js.blue:m===0?o.js.yellow:m===!1||m===-1?o.js.red:null;a+=f+`
`}const u=()=>{navigator.clipboard.writeText(`${l}
${a}
${location.origin+location.pathname}`),t(1,c=!0),setTimeout(()=>t(1,c=!1),1e3)};return n.$$set=h=>{"gameNumber"in h&&t(5,r=h.gameNumber)},[a,c,s,o,l,r,u]}class B_ extends tt{constructor(e){super(),et(this,e,W_,x_,qe,{gameNumber:5})}}function No(n,e,t){const s=n.slice();return s[3]=e[t][0],s[4]=e[t][1],s[6]=t,s}function ko(n){let e,t,s=n[3]+"",i,r,o,l,a,c=n[4]+"",u,h;return{c(){e=g("div"),t=g("span"),i=W(s),r=I(),o=g("span"),o.innerHTML="",l=I(),a=g("span"),u=W(c),h=I(),_(t,"id","guessNum"),_(t,"class","svelte-mzhi8s"),_(o,"class","posrel border-tp svelte-mzhi8s"),_(o,"id","winsBar"),$t(o,"width",`${n[4]*80/n[2]}%`),_(a,"class","smaller-fs svelte-mzhi8s"),_(a,"id","winsNum"),_(e,"class","flex fai-center svelte-mzhi8s")},m(f,m){P(f,e,m),d(e,t),d(t,i),d(e,r),d(e,o),d(e,l),d(e,a),d(a,u),d(e,h)},p(f,m){m&2&&s!==(s=f[3]+"")&&he(i,s),m&2&&$t(o,"width",`${f[4]*80/f[2]}%`),m&2&&c!==(c=f[4]+"")&&he(u,c)},d(f){f&&T(e)}}}function H_(n){let e,t,s,i,r,o,l,a=n[1].gamesPlayed+"",c,u,h,f,m,p,y=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"",C,N,A,b,v,E,O,M=n[1].streak+"",L,G,V,q,U,Y,Ie=n[1].maxStreak+"",H,ie,z,ee,me,ge,ue,te,x,ne=_e(Object.entries(n[1].winInfo)),fe=[];for(let k=0;k<ne.length;k+=1)fe[k]=ko(No(n,ne,k));return{c(){e=g("div"),t=g("span"),t.textContent="Your Stats",s=I(),i=g("div"),r=g("div"),o=g("div"),l=g("span"),c=W(a),u=I(),h=g("span"),h.textContent="Games Played",f=I(),m=g("div"),p=g("span"),C=W(y),N=W("%"),A=I(),b=g("span"),b.textContent="Win Rate",v=I(),E=g("div"),O=g("span"),L=W(M),G=I(),V=g("span"),V.textContent="Current Streak",q=I(),U=g("div"),Y=g("span"),H=W(Ie),ie=I(),z=g("span"),z.textContent="Max Streak",ee=I(),me=g("span"),me.textContent="Win Distribution",ge=I(),ue=g("div");for(let k=0;k<fe.length;k+=1)fe[k].c();_(h,"id","statsTitle"),_(h,"class","svelte-mzhi8s"),_(o,"class","svelte-mzhi8s"),_(b,"id","statsTitle"),_(b,"class","svelte-mzhi8s"),_(m,"class","svelte-mzhi8s"),_(V,"id","statsTitle"),_(V,"class","svelte-mzhi8s"),_(E,"class","svelte-mzhi8s"),_(z,"id","statsTitle"),_(z,"class","svelte-mzhi8s"),_(U,"class","svelte-mzhi8s"),_(r,"class","flex svelte-mzhi8s"),_(r,"id","playerStatsInfo"),_(me,"class","smaller-fs"),_(ue,"class","flex fd-col smaller-fs svelte-mzhi8s"),_(ue,"id","distributionChart"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1"),_(e,"id","playerStats")},m(k,F){P(k,e,F),d(e,t),d(e,s),d(e,i),d(i,r),d(r,o),d(o,l),d(l,c),d(o,u),d(o,h),d(r,f),d(r,m),d(m,p),d(p,C),d(p,N),d(m,A),d(m,b),d(r,v),d(r,E),d(E,O),d(O,L),d(E,G),d(E,V),d(r,q),d(r,U),d(U,Y),d(Y,H),d(U,ie),d(U,z),d(e,ee),d(e,me),d(e,ge),d(e,ue);for(let re=0;re<fe.length;re+=1)fe[re]&&fe[re].m(ue,null);x=!0},p(k,[F]){if(n=k,(!x||F&2)&&a!==(a=n[1].gamesPlayed+"")&&he(c,a),(!x||F&2)&&y!==(y=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"")&&he(C,y),(!x||F&2)&&M!==(M=n[1].streak+"")&&he(L,M),(!x||F&2)&&Ie!==(Ie=n[1].maxStreak+"")&&he(H,Ie),F&6){ne=_e(Object.entries(n[1].winInfo));let re;for(re=0;re<ne.length;re+=1){const we=No(n,ne,re);fe[re]?fe[re].p(we,F):(fe[re]=ko(we),fe[re].c(),fe[re].m(ue,null))}for(;re<fe.length;re+=1)fe[re].d(1);fe.length=ne.length}},i(k){x||(k&&ke(()=>{x&&(te||(te=ye(e,Ae,{duration:n[0]?200:0},!0)),te.run(1))}),x=!0)},o(k){k&&(te||(te=ye(e,Ae,{duration:n[0]?200:0},!1)),te.run(0)),x=!1},d(k){k&&T(e),je(fe,k),k&&te&&te.end()}}}function U_(n,e,t){let s;Se(n,at,o=>t(1,s=o));let{prompted:i=!1}=e,r=Math.max(...Object.values(s.winInfo));return n.$$set=o=>{"prompted"in o&&t(0,i=o.prompted)},[i,s,r]}class $a extends tt{constructor(e){super(),et(this,e,U_,H_,qe,{prompted:0})}}function Ro(n,e,t){const s=n.slice();return s[5]=e[t],s}function $_(n){let e,t=_e(n[1]),s=[];for(let i=0;i<t.length;i+=1)s[i]=Do(Ro(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Nt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);P(i,e,r)},p(i,r){if(r&2){t=_e(i[1]);let o;for(o=0;o<t.length;o+=1){const l=Ro(i,t,o);s[o]?s[o].p(l,r):(s[o]=Do(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&T(e),je(s,i)}}}function j_(n){let e,t,s;return{c(){e=g("span"),t=W("— "),s=W(n[1]),_(e,"id","info"),_(e,"class","svelte-hhfk27")},m(i,r){P(i,e,r),d(e,t),d(e,s)},p(i,r){r&2&&he(s,i[1])},d(i){i&&T(e)}}}function Do(n){let e,t,s=n[5]+"",i;return{c(){e=g("span"),t=W("— "),i=W(s),_(e,"id","info"),_(e,"class","svelte-hhfk27")},m(r,o){P(r,e,o),d(e,t),d(e,i)},p(r,o){o&2&&s!==(s=r[5]+"")&&he(i,s)},d(r){r&&T(e)}}}function G_(n){let e,t,s,i,r,o,l;function a(h,f){return typeof h[1]=="string"?j_:$_}let c=a(n),u=c(n);return{c(){e=g("li"),t=g("span"),s=W("v"),i=W(n[0]),r=I(),o=g("i"),o.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":y_[n[2][0]%10])+", 20"+n[2][2]}`,l=I(),u.c(),_(t,"id","version"),_(t,"class","svelte-hhfk27"),_(o,"id","date"),_(o,"class","svelte-hhfk27"),_(e,"class","flex fai-center svelte-hhfk27")},m(h,f){P(h,e,f),d(e,t),d(t,s),d(t,i),d(e,r),d(e,o),d(e,l),u.m(e,null)},p(h,[f]){f&1&&he(i,h[0]),c===(c=a(h))&&u?u.p(h,f):(u.d(1),u=c(h),u&&(u.c(),u.m(e,null)))},i:J,o:J,d(h){h&&T(e),u.d()}}}function z_(n,e,t){let{version:s,date:i,text:r}=e,o=i.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,s=a.version),"date"in a&&t(4,i=a.date),"text"in a&&t(1,r=a.text)},[s,r,o,l,i]}class V_ extends tt{constructor(e){super(),et(this,e,z_,G_,qe,{version:0,date:4,text:1})}}function q_(n){let e,t,s,i,r;return i=new V_({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=g("span"),e.textContent="Changelog",t=I(),s=g("ul"),lt(i.$$.fragment),_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-1hn7lke"),_(s,"id","contents")},m(o,l){P(o,e,l),P(o,t,l),P(o,s,l),Xe(i,s,null),r=!0},p:J,i(o){r||(j(i.$$.fragment,o),r=!0)},o(o){ae(i.$$.fragment,o),r=!1},d(o){o&&(T(e),T(t),T(s)),Ze(i)}}}class Y_ extends tt{constructor(e){super(),et(this,e,null,q_,qe,{})}}function K_(n){let e,t,s;return{c(){e=g("span"),e.textContent="Credits",t=I(),s=g("div"),s.innerHTML=`<p class="flex fai-center svelte-19w41p3">This is a personal project. Contact me directly on
        <iconify-icon id="discord" icon="ic:baseline-discord" class="svelte-19w41p3"></iconify-icon> <bl class="svelte-19w41p3">Discord</bl> at<hl>xt.ss</hl>,</p> <p class="svelte-19w41p3">or in the
        <a class="cg-1 svelte-19w41p3" href="https://discord.gg/ff" target="_blank">Fantastic Frontier Discord Server</a>
        for inquiries or feedback!</p> <br/> <p class="flex fjc-center fai-center svelte-19w41p3">Frontierdle especially took heavy inspiration from
        <a class="flex fai-center cg-1 svelte-19w41p3" href="https://isaacle.net/" target="_blank"><img src="misc/isaac.png" alt="" class="svelte-19w41p3"/>
            Isaacle
        </a>,</p> <p class="flex fjc-center fai-center svelte-19w41p3">and certainly wouldn&#39;t be here without the
        <a class="flex fjc-center fai-center cg-1 svelte-19w41p3" href="https://fantastic-frontier-roblox.fandom.com/wiki/Fantastic_Frontier_-_Roblox_Wiki" target="_blank"><iconify-icon id="fandom" icon="simple-icons:fandom" class="svelte-19w41p3"></iconify-icon>
            Fantastic Frontier Wiki
        </a>.</p> <br/> <p class="flex fd-col svelte-19w41p3"><span class="title">Special Thanks to:</span> <span>— Spectrabox and Gorbachelli, for creating such a fantastic game</span> <span class="flex fjc-center fai-center cg-1 svelte-19w41p3">—
            <img src="misc/isaac-ribbon.png" alt="" class="svelte-19w41p3"/>
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,_(e,"class","title"),_(s,"class","smaller-fs"),_(s,"id","contents")},m(i,r){P(i,e,r),P(i,t,r),P(i,s,r)},p:J,i:J,o:J,d(i){i&&(T(e),T(t),T(s))}}}class Q_ extends tt{constructor(e){super(),et(this,e,null,K_,qe,{})}}function Ao(n,e,t){const s=n.slice();return s[1]=e[t],s}function J_(n,e,t){const s=n.slice();return s[4]=e[t],s}function X_(n,e,t){const s=n.slice();return s[7]=e[t],s}function Po(n,e,t){const s=n.slice();return s[10]=e[t],s}function Z_(n,e,t){const s=n.slice();return s[13]=e[t],s}function ep(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[13].charAt(0).toUpperCase()+n[13].slice(1)} `},m(t,s){P(t,e,s)},p:J,d(t){t&&T(e)}}}function Oo(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[10]} `},m(t,s){P(t,e,s)},p:J,d(t){t&&T(e)}}}function tp(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[7]}`},m(t,s){P(t,e,s)},p:J,d(t){t&&T(e)}}}function np(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[4]}`},m(t,s){P(t,e,s)},p:J,d(t){t&&T(e)}}}function Mo(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[1]} Update`},m(t,s){P(t,e,s)},p:J,d(t){t&&T(e)}}}function sp(n){let e,t,s,i,r,o,l,a,c,u,h,f,m,p,y,C,N,A,b,v,E,O,M,L,G,V,q,U,Y,Ie,H,ie,z,ee,me,ge,ue=_e(p_),te=[];for(let D=0;D<ue.length;D+=1)te[D]=ep(Z_(n,ue,D));let x=_e(Object.values(ks)),ne=[];for(let D=0;D<x.length;D+=1)ne[D]=Oo(Po(n,x,D));let fe=_e(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),k=[];for(let D=0;D<12;D+=1)k[D]=tp(X_(n,fe,D));let F=_e(["Black","Blue","Green","Purple","Red","White","Yellow"]),re=[];for(let D=0;D<7;D+=1)re[D]=np(J_(n,F,D));let we=_e(Object.values(Ns).slice(0,-1)),X=[];for(let D=0;D<we.length;D+=1)X[D]=Mo(Ao(n,we,D));return{c(){e=g("span"),e.textContent="Help",t=I(),s=g("div"),i=g("p"),i.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece from\r
        Fantastic Frontier, which changes every day.`,r=I(),o=g("div"),o.innerHTML=`<span class="title">Color Guide</span> <div class="flex svelte-sr8e7f" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-sr8e7f" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-sr8e7f" id="partial">Partial
                <span class="bgInfo svelte-sr8e7f">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-sr8e7f" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-sr8e7f" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,l=I(),a=g("span"),a.textContent="Categories",c=I(),u=g("p"),h=g("span"),f=g("b"),f.textContent="Slot:",m=I(),p=g("ul");for(let D=0;D<te.length;D+=1)te[D].c();y=I(),C=g("span"),N=g("b"),N.textContent="Stats:",A=I(),b=g("ul");for(let D=0;D<ne.length;D+=1)ne[D].c();v=I(),E=g("span"),E.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item can be purchased at.
                &quot;Unpurchasable&quot; if it cannot be purchased.</span>`,O=I(),M=g("span"),L=g("b"),L.textContent="Colors:",G=I(),V=g("ul");for(let D=0;D<12;D+=1)k[D].c();q=I(),U=g("span"),Y=g("b"),Y.textContent="Outline:",Ie=I(),H=g("ul");for(let D=0;D<7;D+=1)re[D].c();ie=I(),z=g("span"),ee=g("b"),ee.textContent="Release:",me=I(),ge=g("ul");for(let D=0;D<X.length;D+=1)X[D].c();_(e,"class","title"),_(o,"class","flex fd-col fai-center"),_(a,"class","title"),_(f,"class","svelte-sr8e7f"),_(p,"class","svelte-sr8e7f"),_(h,"class","flex fd-col list svelte-sr8e7f"),_(N,"class","svelte-sr8e7f"),_(b,"class","svelte-sr8e7f"),_(C,"class","flex fd-col list svelte-sr8e7f"),_(E,"class","flex fd-col limit-width svelte-sr8e7f"),_(L,"class","svelte-sr8e7f"),_(V,"class","svelte-sr8e7f"),_(M,"class","flex fd-col list svelte-sr8e7f"),_(Y,"class","svelte-sr8e7f"),_(H,"class","svelte-sr8e7f"),_(U,"class","flex fd-col list svelte-sr8e7f"),_(ee,"class","svelte-sr8e7f"),_(ge,"class","svelte-sr8e7f"),_(z,"class","flex fd-col list svelte-sr8e7f"),_(u,"class","flex fjc-center smaller-fs svelte-sr8e7f"),_(u,"id","categories"),_(s,"class","flex fd-col smaller-fs svelte-sr8e7f"),_(s,"id","contents")},m(D,le){P(D,e,le),P(D,t,le),P(D,s,le),d(s,i),d(s,r),d(s,o),d(s,l),d(s,a),d(s,c),d(s,u),d(u,h),d(h,f),d(h,m),d(h,p);for(let w=0;w<te.length;w+=1)te[w]&&te[w].m(p,null);d(u,y),d(u,C),d(C,N),d(C,A),d(C,b);for(let w=0;w<ne.length;w+=1)ne[w]&&ne[w].m(b,null);d(u,v),d(u,E),d(u,O),d(u,M),d(M,L),d(M,G),d(M,V);for(let w=0;w<12;w+=1)k[w]&&k[w].m(V,null);d(u,q),d(u,U),d(U,Y),d(U,Ie),d(U,H);for(let w=0;w<7;w+=1)re[w]&&re[w].m(H,null);d(u,ie),d(u,z),d(z,ee),d(z,me),d(z,ge);for(let w=0;w<X.length;w+=1)X[w]&&X[w].m(ge,null)},p(D,[le]){if(le&0){x=_e(Object.values(ks));let w;for(w=0;w<x.length;w+=1){const K=Po(D,x,w);ne[w]?ne[w].p(K,le):(ne[w]=Oo(K),ne[w].c(),ne[w].m(b,null))}for(;w<ne.length;w+=1)ne[w].d(1);ne.length=x.length}if(le&0){we=_e(Object.values(Ns).slice(0,-1));let w;for(w=0;w<we.length;w+=1){const K=Ao(D,we,w);X[w]?X[w].p(K,le):(X[w]=Mo(K),X[w].c(),X[w].m(ge,null))}for(;w<X.length;w+=1)X[w].d(1);X.length=we.length}},i:J,o:J,d(D){D&&(T(e),T(t),T(s)),je(te,D),je(ne,D),je(k,D),je(re,D),je(X,D)}}}function ip(n){return[]}class rp extends tt{constructor(e){super(),et(this,e,ip,sp,qe,{})}}function op(n){let e,t,s;return{c(){e=g("span"),e.textContent="Frontierdle Policy",t=I(),s=g("div"),s.innerHTML=`<span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-932r7h"),_(s,"id","contents")},m(i,r){P(i,e,r),P(i,t,r),P(i,s,r)},p:J,i:J,o:J,d(i){i&&(T(e),T(t),T(s))}}}class lp extends tt{constructor(e){super(),et(this,e,null,op,qe,{})}}function Lo(n){let e,t,s;return{c(){e=g("iconify-icon"),Me(e,"icon","uil:exclamation"),Me(e,"id","unseen"),Me(e,"class","svelte-yexcnj")},m(i,r){P(i,e,r),s=!0},i(i){s||(i&&ke(()=>{s&&(t||(t=ye(e,yt,{duration:150},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=ye(e,yt,{duration:150},!1)),t.run(0)),s=!1},d(i){i&&T(e),i&&t&&t.end()}}}function ap(n){let e,t,s,i,r,o,l,a,c,u,h,f,m,p,y,C,N,A,b=!n[2]&&Lo();return{c(){e=g("button"),e.textContent="Credits",t=I(),s=g("button"),s.innerHTML=`<a href="https://ko-fi.com/xt8ss" target="_blank" class="svelte-yexcnj">Support me
        <img src="misc/kofi-badge.png" alt="" class="svelte-yexcnj"/></a>`,i=I(),r=g("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=I(),l=g("button"),a=g("iconify-icon"),c=I(),u=g("span"),u.textContent="Changelog",h=I(),b&&b.c(),f=I(),m=g("button"),m.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',p=I(),y=g("span"),C=W(n[0]),_(e,"class","info svelte-yexcnj"),_(e,"id","credits"),_(s,"class","info svelte-yexcnj"),_(s,"id","donate"),_(r,"class","info svelte-yexcnj"),_(r,"id","help"),Me(a,"icon","octicon:log-16"),_(u,"class","tooltip"),_(u,"id","right"),_(l,"class","info svelte-yexcnj"),_(l,"id","changelog"),_(m,"class","info svelte-yexcnj"),_(m,"id","policy"),_(y,"class","info svelte-yexcnj"),_(y,"id","version")},m(v,E){P(v,e,E),P(v,t,E),P(v,s,E),P(v,i,E),P(v,r,E),P(v,o,E),P(v,l,E),d(l,a),d(l,c),d(l,u),d(l,h),b&&b.m(l,null),P(v,f,E),P(v,m,E),P(v,p,E),P(v,y,E),d(y,C),N||(A=[Ne(e,"click",n[3]),Ne(r,"click",n[4]),Ne(l,"click",n[5]),Ne(m,"click",n[6])],N=!0)},p(v,[E]){v[2]?b&&(rt(),ae(b,1,1,()=>{b=null}),ot()):b?E&4&&j(b,1):(b=Lo(),b.c(),j(b,1),b.m(l,null)),E&1&&he(C,v[0])},i(v){j(b)},o(v){ae(b)},d(v){v&&(T(e),T(t),T(s),T(i),T(r),T(o),T(l),T(f),T(m),T(p),T(y)),b&&b.d(),N=!1,Ve(A)}}}function cp(n,e,t){let s,i;Se(n,Ke,u=>t(1,s=u)),Se(n,Ds,u=>t(2,i=u));let{version:r}=e;const o=u=>{nn(u),oe(Ke,s.component=Q_,s)},l=u=>{nn(u),oe(Ke,s.component=rp,s)},a=u=>{nn(u),oe(Ke,s.component=Y_,s),oe(Ds,i=!0,i)},c=u=>{nn(u),oe(Ke,s.component=lp,s)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,s,i,o,l,a,c]}class up extends tt{constructor(e){super(),et(this,e,cp,ap,qe,{version:0})}}const{document:rs,window:rn}=Ya;function Fo(n,e,t){const s=n.slice();return s[53]=e[t],s}function xo(n,e,t){const s=n.slice();return s[53]=e[t],s}function Wo(n){let e;return{c(){e=g("link"),_(e,"rel","preload"),_(e,"as","image"),_(e,"href",n[53])},m(t,s){P(t,e,s)},p:J,d(t){t&&T(e)}}}function Bo(n){let e;return{c(){e=g("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,s){P(t,e,s)},d(t){t&&T(e)}}}function Ho(n){let e,t;return{c(){e=g("img"),_(e,"class","background svelte-14hsuft"),Qe(e.src,t=n[53])||_(e,"src",t),_(e,"alt",""),pt(e,"active",n[21].indexOf(n[53])==n[17])},m(s,i){P(s,e,i)},p(s,i){i[0]&2228224&&pt(e,"active",s[21].indexOf(s[53])==s[17])},d(s){s&&T(e)}}}function Uo(n){let e,t,s=Math.floor(n[19][n[2]]*100)+"",i,r,o,l;return{c(){e=g("span"),t=W("Zoom: "),i=W(s),r=g("b"),r.textContent="%",_(e,"class","info svelte-14hsuft"),_(e,"id","zoomLevel")},m(a,c){P(a,e,c),d(e,t),d(e,i),d(e,r),l=!0},p(a,c){(!l||c[0]&4)&&s!==(s=Math.floor(a[19][a[2]]*100)+"")&&he(i,s)},i(a){l||(a&&ke(()=>{l&&(o||(o=ye(e,yt,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=ye(e,yt,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&T(e),a&&o&&o.end()}}}function $o(n){let e,t,s,i,r,o,l,a,c=n[7].muted?"Muted":"Unmuted",u,h,f,m,p,y,C,N,A,b=As(n[3],n[4],n[5])+"",v,E,O,M,L,G,V,q,U,Y,Ie,H,ie,z,ee,me,ge,ue,te,x,ne,fe;Y=new D_({props:{size:"5",checked:n[7].hardMode,disabled:n[8].chosenItems.length!=0}}),Y.$on("toggle",n[30]);let k=!n[8].gameWin&&!n[8].gameOver&&jo(n),F=(n[8].gameWin||n[8].gameOver)&&Go(n);function re(w){n[33](w)}let we={};n[13]!==void 0&&(we.dailyItemData=n[13]),z=new N_({props:we}),mt.push(()=>Ms(z,"dailyItemData",re));let X=n[14]&&zo(n),D=n[18].component&&n[18].complete&&Vo(n),le=n[18].component&&!n[18].complete&&qo(n);return{c(){e=g("main"),t=g("div"),s=g("div"),i=g("button"),r=g("iconify-icon"),l=I(),a=g("span"),u=W(c),h=I(),f=g("button"),m=g("img"),y=I(),C=g("span"),N=W(`Next item available in...
                    `),A=new Zo(!1),v=I(),E=g("div"),O=g("button"),O.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-14hsuft"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',M=I(),L=g("div"),G=g("button"),G.innerHTML=`<iconify-icon icon="eva:info-outline" id="info" class="svelte-14hsuft"></iconify-icon> <span class="tooltip svelte-14hsuft" id="bottom">No armor (more damage taken)
                    <br/>
                    No stat / avg. cost / color clues</span>`,V=I(),q=g("span"),q.textContent="Nightmare Mode",U=I(),lt(Y.$$.fragment),Ie=I(),k&&k.c(),H=I(),F&&F.c(),ie=I(),lt(z.$$.fragment),me=I(),X&&X.c(),ge=I(),D&&D.c(),ue=I(),le&&le.c(),te=Nt(),Me(r,"icon",o="f7:speaker-"+(n[7].muted?"slash":"2")+"-fill"),Me(r,"class","svelte-14hsuft"),_(a,"class","tooltip"),_(a,"id","bottom"),_(i,"class","flex light-hover svelte-14hsuft"),_(s,"class","iconToggle ff-bg posrel border-tp br-1 svelte-14hsuft"),$t(s,"visibility","hidden"),Qe(m.src,p="frontierdle.svg")||_(m,"src",p),_(m,"alt","Frontierdle"),_(m,"class","svelte-14hsuft"),A.a=null,_(C,"class","tooltip svelte-14hsuft"),_(C,"id","bottom"),_(f,"class","iconCont ff-bg posrel border-tp br-1 no-bg-change svelte-14hsuft"),_(O,"class","flex posrel light-hover svelte-14hsuft"),_(E,"class","iconToggle ff-bg border-tp br-1 svelte-14hsuft"),_(t,"class","upperMenu flex fai-center svelte-14hsuft"),_(G,"class","flex posrel no-bg-change"),_(L,"class","hardModeCont ff-bg flex fai-center border-tp br-1 svelte-14hsuft"),_(e,"class","flex fd-col fai-center posrel svelte-14hsuft")},m(w,K){P(w,e,K),d(e,t),d(t,s),d(s,i),d(i,r),d(i,l),d(i,a),d(a,u),d(t,h),d(t,f),d(f,m),d(f,y),d(f,C),d(C,N),A.m(b,C),d(t,v),d(t,E),d(E,O),d(e,M),d(e,L),d(L,G),d(L,V),d(L,q),d(L,U),Xe(Y,L,null),d(e,Ie),k&&k.m(e,null),d(e,H),F&&F.m(e,null),d(e,ie),Xe(z,e,null),d(e,me),X&&X.m(e,null),P(w,ge,K),D&&D.m(w,K),P(w,ue,K),le&&le.m(w,K),P(w,te,K),x=!0,ne||(fe=[Ne(i,"click",n[28]),Ne(O,"click",n[29])],ne=!0)},p(w,K){(!x||K[0]&128&&o!==(o="f7:speaker-"+(w[7].muted?"slash":"2")+"-fill"))&&Me(r,"icon",o),(!x||K[0]&128)&&c!==(c=w[7].muted?"Muted":"Unmuted")&&he(u,c),(!x||K[0]&56)&&b!==(b=As(w[3],w[4],w[5])+"")&&A.p(b);const It={};K[0]&128&&(It.checked=w[7].hardMode),K[0]&256&&(It.disabled=w[8].chosenItems.length!=0),Y.$set(It),!w[8].gameWin&&!w[8].gameOver?k?(k.p(w,K),K[0]&256&&j(k,1)):(k=jo(w),k.c(),j(k,1),k.m(e,H)):k&&(rt(),ae(k,1,1,()=>{k=null}),ot()),w[8].gameWin||w[8].gameOver?F?(F.p(w,K),K[0]&256&&j(F,1)):(F=Go(w),F.c(),j(F,1),F.m(e,ie)):F&&(rt(),ae(F,1,1,()=>{F=null}),ot());const xt={};!ee&&K[0]&8192&&(ee=!0,xt.dailyItemData=w[13],Os(()=>ee=!1)),z.$set(xt),w[14]?X?X.p(w,K):(X=zo(w),X.c(),X.m(e,null)):X&&(X.d(1),X=null),w[18].component&&w[18].complete?D?(D.p(w,K),K[0]&262144&&j(D,1)):(D=Vo(w),D.c(),j(D,1),D.m(ue.parentNode,ue)):D&&(rt(),ae(D,1,1,()=>{D=null}),ot()),w[18].component&&!w[18].complete?le?(le.p(w,K),K[0]&262144&&j(le,1)):(le=qo(w),le.c(),j(le,1),le.m(te.parentNode,te)):le&&(rt(),ae(le,1,1,()=>{le=null}),ot())},i(w){x||(j(Y.$$.fragment,w),j(k),j(F),j(z.$$.fragment,w),j(D),j(le),x=!0)},o(w){ae(Y.$$.fragment,w),ae(k),ae(F),ae(z.$$.fragment,w),ae(D),ae(le),x=!1},d(w){w&&(T(e),T(ge),T(ue),T(te)),Ze(Y),k&&k.d(),F&&F.d(),Ze(z),X&&X.d(),D&&D.d(w),le&&le.d(w),ne=!1,Ve(fe)}}}function jo(n){let e,t,s;function i(o){n[31](o)}let r={};return n[16]!==void 0&&(r.gameNumber=n[16]),e=new F_({props:r}),mt.push(()=>Ms(e,"gameNumber",i)),{c(){lt(e.$$.fragment)},m(o,l){Xe(e,o,l),s=!0},p(o,l){const a={};!t&&l[0]&65536&&(t=!0,a.gameNumber=o[16],Os(()=>t=!1)),e.$set(a)},i(o){s||(j(e.$$.fragment,o),s=!0)},o(o){ae(e.$$.fragment,o),s=!1},d(o){Ze(e,o)}}}function Go(n){let e,t,s=n[8].gameWin?"Fantastic!":"Farewell...",i,r,o,l,a,c=n[8].gameWin?"won":"lost",u,h,f,m,p,y,C,N,A,b,v,E,O,M,L=n[13].name+"",G,V,q,U,Y,Ie,H,ie=As(n[3],n[4],n[5])+"",z,ee,me,ge,ue,te,x;function ne(k){n[32](k)}let fe={};return n[16]!==void 0&&(fe.gameNumber=n[16]),me=new B_({props:fe}),mt.push(()=>Ms(me,"gameNumber",ne)),te=new $a({}),{c(){e=g("div"),t=g("span"),i=W(s),r=I(),o=g("img"),a=W(`
                    You `),u=W(c),h=W("!"),f=I(),m=g("span"),m.textContent="Today's item was...",p=I(),y=g("div"),C=g("a"),N=g("img"),b=I(),v=g("iconify-icon"),O=I(),M=g("span"),G=W(L),V=I(),q=g("span"),U=W(`Next item available in...
                    `),Y=g("br"),Ie=I(),H=g("span"),ee=I(),lt(me.$$.fragment),ue=I(),lt(te.$$.fragment),Qe(o.src,l=n[8].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||_(o,"src",l),_(o,"id","gameFinishIcon"),_(o,"alt",""),_(o,"class","svelte-14hsuft"),_(t,"class","flex fai-center svelte-14hsuft"),_(t,"id","gameFinishMessage"),_(m,"class","smaller-fs"),Qe(N.src,A=Lt+n[13].image)||_(N,"src",A),_(N,"alt",""),_(N,"class","svelte-14hsuft"),Me(v,"icon","tabler:link"),Me(v,"class","svelte-14hsuft"),_(C,"class","flex fjc-center fai-center svelte-14hsuft"),_(C,"href",E=mn+n[13].link),_(C,"target","_blank"),_(y,"class","itemImg ff-item flex svelte-14hsuft"),_(y,"id","dailyItemImg"),_(M,"class","ff-item itemName svelte-14hsuft"),_(M,"id","dailyItemName"),_(H,"class","ff-item svelte-14hsuft"),_(H,"id","nextItemTime"),_(q,"class","flex fd-col svelte-14hsuft"),_(q,"id","nextItemCont"),_(e,"class","gameFinishCont ff-bg flex fd-col fai-center border-tp br-1 svelte-14hsuft")},m(k,F){P(k,e,F),d(e,t),d(t,i),d(t,r),d(t,o),d(t,a),d(t,u),d(t,h),d(e,f),d(e,m),d(e,p),d(e,y),d(y,C),d(C,N),d(C,b),d(C,v),d(e,O),d(e,M),d(M,G),d(e,V),d(e,q),d(q,U),d(q,Y),d(q,Ie),d(q,H),H.innerHTML=ie,P(k,ee,F),Xe(me,k,F),P(k,ue,F),Xe(te,k,F),x=!0},p(k,F){(!x||F[0]&256)&&s!==(s=k[8].gameWin?"Fantastic!":"Farewell...")&&he(i,s),(!x||F[0]&256&&!Qe(o.src,l=k[8].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&_(o,"src",l),(!x||F[0]&256)&&c!==(c=k[8].gameWin?"won":"lost")&&he(u,c),(!x||F[0]&8192&&!Qe(N.src,A=Lt+k[13].image))&&_(N,"src",A),(!x||F[0]&8192&&E!==(E=mn+k[13].link))&&_(C,"href",E),(!x||F[0]&8192)&&L!==(L=k[13].name+"")&&he(G,L),(!x||F[0]&56)&&ie!==(ie=As(k[3],k[4],k[5])+"")&&(H.innerHTML=ie);const re={};!ge&&F[0]&65536&&(ge=!0,re.gameNumber=k[16],Os(()=>ge=!1)),me.$set(re)},i(k){x||(k&&ke(()=>{x&&(z||(z=ye(e,yt,{duration:150},!0)),z.run(1))}),j(me.$$.fragment,k),j(te.$$.fragment,k),x=!0)},o(k){k&&(z||(z=ye(e,yt,{duration:150},!1)),z.run(0)),ae(me.$$.fragment,k),ae(te.$$.fragment,k),x=!1},d(k){k&&(T(e),T(ee),T(ue)),k&&z&&z.end(),Ze(me,k),Ze(te,k)}}}function zo(n){let e,t,s,i,r,o,l,a,c,u,h,f=n[14].name+"",m;return{c(){e=g("div"),t=W(`Yesterday's item was...
                `),s=g("div"),i=g("a"),r=g("img"),l=I(),a=g("iconify-icon"),u=I(),h=g("span"),m=W(f),Qe(r.src,o=Lt+n[14].image)||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-14hsuft"),Me(a,"icon","tabler:link"),Me(a,"class","svelte-14hsuft"),_(i,"class","flex fjc-center fai-center svelte-14hsuft"),_(i,"href",c=mn+n[14].link),_(i,"target","_blank"),_(s,"class","itemImg ff-item flex svelte-14hsuft"),_(s,"id","previousItemImg"),_(h,"class","ff-item itemName svelte-14hsuft"),_(h,"id","previousItemName"),_(e,"class","previousItemCont ff-bg flex fd-col fai-center border-tp br-1 svelte-14hsuft")},m(p,y){P(p,e,y),d(e,t),d(e,s),d(s,i),d(i,r),d(i,l),d(i,a),d(e,u),d(e,h),d(h,m)},p(p,y){y[0]&16384&&!Qe(r.src,o=Lt+p[14].image)&&_(r,"src",o),y[0]&16384&&c!==(c=mn+p[14].link)&&_(i,"href",c),y[0]&16384&&f!==(f=p[14].name+"")&&he(m,f)},d(p){p&&T(e)}}}function Vo(n){let e,t,s,i,r;var o=n[18].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=ls(o,l())),{c(){e=g("div"),t&&lt(t.$$.fragment),_(e,"class","promptCont")},m(a,c){P(a,e,c),t&&Xe(t,e,null),n[34](e),s=!0,i||(r=Ne(e,"click",n[35]),i=!0)},p(a,c){if(c[0]&262144&&o!==(o=a[18].component)){if(t){rt();const u=t;ae(u.$$.fragment,1,0,()=>{Ze(u,1)}),ot()}o?(t=ls(o,l()),lt(t.$$.fragment),j(t.$$.fragment,1),Xe(t,e,null)):t=null}},i(a){s||(t&&j(t.$$.fragment,a),s=!0)},o(a){t&&ae(t.$$.fragment,a),s=!1},d(a){a&&T(e),t&&Ze(t),n[34](null),i=!1,r()}}}function qo(n){let e,t,s,i,r,o,l;var a=n[18].component;function c(u,h){return{props:{prompted:!0}}}return a&&(s=ls(a,c())),{c(){e=g("div"),t=g("div"),s&&lt(s.$$.fragment),_(t,"class","flex fd-col border-tp br-1"),_(e,"class","promptCont")},m(u,h){P(u,e,h),d(e,t),s&&Xe(s,t,null),n[36](e),r=!0,o||(l=Ne(e,"click",n[37]),o=!0)},p(u,h){if(h[0]&262144&&a!==(a=u[18].component)){if(s){rt();const f=s;ae(f.$$.fragment,1,0,()=>{Ze(f,1)}),ot()}a?(s=ls(a,c()),lt(s.$$.fragment),j(s.$$.fragment,1),Xe(s,t,null)):s=null}},i(u){r||(s&&j(s.$$.fragment,u),u&&ke(()=>{r&&(i||(i=ye(t,Ae,{duration:200},!0)),i.run(1))}),r=!0)},o(u){s&&ae(s.$$.fragment,u),u&&(i||(i=ye(t,Ae,{duration:200},!1)),i.run(0)),r=!1},d(u){u&&T(e),s&&Ze(s),u&&i&&i.end(),n[36](null),o=!1,l()}}}function hp(n){let e,t,s,i,r,o,l,a,c,u,h,f;ke(n[27]);let m=_e(n[21]),p=[];for(let v=0;v<m.length;v+=1)p[v]=Wo(xo(n,m,v));let y=n[18].component&&Bo(),C=_e(n[21]),N=[];for(let v=0;v<C.length;v+=1)N[v]=Ho(Fo(n,C,v));let A=n[12]&&Uo(n);l=new up({props:{version:ki}});let b=n[10]&&n[9]&&n[11]&&$o(n);return{c(){for(let v=0;v<p.length;v+=1)p[v].c();e=Nt(),y&&y.c(),t=Nt(),s=I(),i=g("div");for(let v=0;v<N.length;v+=1)N[v].c();r=I(),A&&A.c(),o=I(),lt(l.$$.fragment),a=I(),b&&b.c(),c=Nt(),_(i,"class","backgrounds")},m(v,E){for(let O=0;O<p.length;O+=1)p[O]&&p[O].m(rs.head,null);d(rs.head,e),y&&y.m(rs.head,null),d(rs.head,t),P(v,s,E),P(v,i,E);for(let O=0;O<N.length;O+=1)N[O]&&N[O].m(i,null);P(v,r,E),A&&A.m(v,E),P(v,o,E),Xe(l,v,E),P(v,a,E),b&&b.m(v,E),P(v,c,E),u=!0,h||(f=[Ne(rn,"storage",n[24]),Ne(rn,"wheel",n[25],{passive:!1}),Ne(rn,"keydown",n[26]),Ne(rn,"resize",n[27])],h=!0)},p(v,E){if(E[0]&2097152){m=_e(v[21]);let O;for(O=0;O<m.length;O+=1){const M=xo(v,m,O);p[O]?p[O].p(M,E):(p[O]=Wo(M),p[O].c(),p[O].m(e.parentNode,e))}for(;O<p.length;O+=1)p[O].d(1);p.length=m.length}if(v[18].component?y||(y=Bo(),y.c(),y.m(t.parentNode,t)):y&&(y.d(1),y=null),E[0]&2228224){C=_e(v[21]);let O;for(O=0;O<C.length;O+=1){const M=Fo(v,C,O);N[O]?N[O].p(M,E):(N[O]=Ho(M),N[O].c(),N[O].m(i,null))}for(;O<N.length;O+=1)N[O].d(1);N.length=C.length}v[12]?A?(A.p(v,E),E[0]&4096&&j(A,1)):(A=Uo(v),A.c(),j(A,1),A.m(o.parentNode,o)):A&&(rt(),ae(A,1,1,()=>{A=null}),ot()),v[10]&&v[9]&&v[11]?b?(b.p(v,E),E[0]&3584&&j(b,1)):(b=$o(v),b.c(),j(b,1),b.m(c.parentNode,c)):b&&(rt(),ae(b,1,1,()=>{b=null}),ot())},i(v){u||(j(A),j(l.$$.fragment,v),j(b),u=!0)},o(v){ae(A),ae(l.$$.fragment,v),ae(b),u=!1},d(v){v&&(T(s),T(i),T(r),T(o),T(a),T(c)),je(p,v),T(e),y&&y.d(v),T(t),je(N,v),A&&A.d(v),Ze(l,v),b&&b.d(v),h=!1,Ve(f)}}}let ki="v1.0.0";function As(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function fp(n,e,t){let s,i,r,o,l,a,c,u;Se(n,at,S=>t(6,s=S)),Se(n,Tt,S=>t(7,i=S)),Se(n,Rs,S=>t(23,r=S)),Se(n,it,S=>t(8,o=S)),Se(n,lo,S=>t(9,l=S)),Se(n,Ni,S=>t(10,a=S)),Se(n,Ds,S=>t(43,c=S)),Se(n,Ke,S=>t(18,u=S));let h,f,m=!1,p=7,y=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],C=!1,N,A,b,v,E;rc(()=>t(11,m=!0));function O(){N=setTimeout(()=>{t(12,C=!1)},750)}function M(){clearTimeout(N),t(12,C=!0),O()}let L=19814,G,V,q=58,U=58,Y=58,Ie;function H(){clearInterval(Ie),setTimeout(()=>{G=Date.now()/1e3/60/60/24,t(16,V=Math.floor(G)-L),Jd(Xd(Qd(m_))).then(S=>{oe(lo,l=S.val().rngItemList[V],l),t(22,b=S.val().rngItemList[V-1])}),Ie=setInterval(()=>{let S=Date.now(),nt=(L+V+1)*24*60*60*1e3-S;t(3,q=Math.floor(nt/1e3/60/60)),t(4,U=Math.floor(nt%(1e3*60*60)/(1e3*60))),t(5,Y=Math.floor(nt%(1e3*60)/1e3))},1e3)},1e3)}H(),fetch("https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/itemData.json").then(async S=>{if(S.status!=200){console.error(`Failed to fetch item data!
Status: ${S.status}`);return}let Ye=await S.json();oe(Ni,a=Ye.sort((nt,st)=>nt.name.toLowerCase().localeCompare(st.name.toLowerCase())),a)});let z=[],ee=[],me,ge,ue=9;for(let S=0;S<ue;S++)z.push(`backgrounds/BG${S}.jpg`);function te(S){ge=Math.floor(Math.random()*S.length)}te(z);function x(){t(17,me=ge),ee.push(ge)}x(),function S(){setTimeout(()=>{if(te(z),!ee.length)x();else if(ee.length>3&&(ee=ee.slice(1)),!ee.includes(ge))x();else{let Ye=[...Array(ue).keys()].filter(nt=>!ee.includes(nt));te(Ye),x()}document.visibilityState=="visible"&&S()},45e3)}(),localStorage.getItem("fd-version")!=ki&&(oe(Ds,c=!1,c),localStorage.setItem("fd-version",ki));function ne(){oe(it,o.gameWin=!0,o),oe(at,s.gamesPlayed++,s),oe(at,s.gamesWon++,s),oe(at,s.streak++,s),oe(at,s.winInfo[o.chosenItems.length]++,s)}function fe(){oe(it,o.gameOver=!0,o),oe(at,s.gamesPlayed++,s),oe(at,s.streak=0,s)}const k=S=>{S.key=="fd-currentGameData"?S.url.includes("ls=true")?oe(it,o=JSON.parse(S.newValue),o):localStorage.setItem("fd-currentGameData",JSON.stringify(o)):S.key=="fd-settings"?S.url.includes("ls=true")?oe(Tt,i=JSON.parse(S.newValue),i):localStorage.setItem("fd-settings",JSON.stringify(i)):S.key=="fd-playerStats"&&(S.url.includes("ls=true")?oe(at,s=JSON.parse(S.newValue),s):localStorage.setItem("fd-playerStats",JSON.stringify(s)))},F=S=>{let Ye=S.wheelDeltaY;if(S.ctrlKey){if(S.preventDefault(),y[p]==.2&&Ye<0||y[p]==5&&Ye>0)return;Ye>0?t(2,p++,p):t(2,p--,p),M()}},re=S=>{let Ye=["Enter"," ","Escape"];S.ctrlKey&&(S.key=="-"||S.key=="+"||S.code=="Equal"||S.key=="0")&&(S.preventDefault(),(S.key=="+"||S.code=="Equal")&&y[p]!=5?t(2,p++,p):S.key=="-"&&y[p]!=.2?t(2,p--,p):S.key=="0"&&y[p]!=1&&t(2,p=7),M()),u.component&&E&&!S.ctrlKey&&!S.shiftKey&&!S.altKey&&Ye.includes(S.key)&&oe(Ke,u.component=null,u)};function we(){t(0,h=rn.outerHeight),t(1,f=rn.outerWidth)}const X=S=>{nn(S),oe(Tt,i.muted=!i.muted,i)},D=S=>{nn(S),o.gameWin||o.gameOver?(location.hash="playerStats",Ti()):(oe(Ke,u.complete=!0,u),oe(Ke,u.component=$a,u))},le=S=>{if(o.chosenItems.length){S.detail.checked=!S.detail.checked;return}oe(Tt,i.hardMode=S.detail.checked,i)};function w(S){V=S,t(16,V)}function K(S){V=S,t(16,V)}function It(S){A=S,t(13,A),t(10,a),t(9,l),t(22,b)}function xt(S){mt[S?"unshift":"push"](()=>{E=S,t(15,E)})}const Cn=S=>{E.children[0].contains(S.target)||(oe(Ke,u.component=null,u),oe(Ke,u.complete=!1,u))};function de(S){mt[S?"unshift":"push"](()=>{E=S,t(15,E)})}const wn=S=>{E.children[0].contains(S.target)||(oe(Ke,u.component=null,u),oe(Ke,u.complete=!1,u))};return n.$$.update=()=>{if(n.$$.dirty[0]&7&&(h||f)){let S=f>h;document.documentElement.style.setProperty("font-size",`${(S?.75:window.outerWidth/window.outerHeight*.8)*y[p]}vh`)}n.$$.dirty[0]&4195840&&a.length&&l&&(t(13,A=a.find(S=>S.name==l)),t(14,v=a.find(S=>S.name==b))),n.$$.dirty[0]&56&&q==0&&U==0&&Y==0&&(oe(it,o=Ua,o),H(),setTimeout(()=>location.reload(),1500)),n.$$.dirty[0]&128&&oe(Rs,r=i.hardMode?6:7,r),n.$$.dirty[0]&8389376&&o.chosenItems.length&&!o.gameWin&&!o.gameOver&&(o.chosenItems[o.chosenItems.length-1].name==l?ne():o.chosenItems.length==r&&fe()),n.$$.dirty[0]&64&&s.streak>s.maxStreak&&oe(at,s.maxStreak=s.streak,s)},[h,f,p,q,U,Y,s,i,o,l,a,m,C,A,v,E,V,me,u,y,M,z,b,r,k,F,re,we,X,D,le,w,K,It,xt,Cn,de,wn]}class dp extends tt{constructor(e){super(),et(this,e,fp,hp,qe,{},null,[-1,-1])}}new dp({target:document.body});
