var ja=Object.defineProperty;var Ga=(n,e,t)=>e in n?ja(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var It=(n,e,t)=>(Ga(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Z(){}const Os=n=>n;function Yo(n){return n()}function dr(){return Object.create(null)}function Ve(n){n.forEach(Yo)}function zt(n){return typeof n=="function"}function qe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ss;function Be(n,e){return n===e?!0:(ss||(ss=document.createElement("a")),ss.href=e,n===ss.href)}function za(n){return Object.keys(n).length===0}function Va(n,...e){if(n==null){for(const s of e)s(void 0);return Z}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Se(n,e,t){n.$$.on_destroy.push(Va(e,t))}function oe(n,e,t){return n.set(t),e}function qa(n){return n&&zt(n.destroy)?n.destroy:Z}const Ko=typeof window<"u";let Di=Ko?()=>window.performance.now():()=>Date.now(),Ai=Ko?n=>requestAnimationFrame(n):Z;const rn=new Set;function Qo(n){rn.forEach(e=>{e.c(n)||(rn.delete(e),e.f())}),rn.size!==0&&Ai(Qo)}function Pi(n){let e;return rn.size===0&&Ai(Qo),{promise:new Promise(t=>{rn.add(e={c:n,f:t})}),abort(){rn.delete(e)}}}const Ya=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function d(n,e){n.appendChild(e)}function Jo(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Ka(n){const e=g("style");return e.textContent="/* empty */",Qa(Jo(n),e),e.sheet}function Qa(n,e){return d(n.head||n,e),e.sheet}function R(n,e,t){n.insertBefore(e,t||null)}function S(n){n.parentNode&&n.parentNode.removeChild(n)}function je(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function g(n){return document.createElement(n)}function Ja(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function U(n){return document.createTextNode(n)}function I(){return U(" ")}function Tt(){return U("")}function ke(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Me(n,e,t){const s=e.toLowerCase();s in n?n[s]=typeof n[s]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function Xa(n){return Array.from(n.childNodes)}function fe(n,e){e=""+e,n.data!==e&&(n.data=e)}function hn(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function pt(n,e,t){n.classList.toggle(e,!!t)}function Xo(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class Zo{constructor(e=!1){It(this,"is_svg",!1);It(this,"e");It(this,"n");It(this,"t");It(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=Ja(t.nodeName):this.e=g(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)R(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}function as(n,e){return new n(e)}const cs=new Map;let us=0;function Za(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function ec(n,e){const t={stylesheet:Ka(e),rules:{}};return cs.set(n,t),t}function hs(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let b=0;b<=1;b+=a){const M=e+(t-e)*r(b);c+=b*100+`%{${o(M,1-M)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${Za(u)}_${l}`,f=Jo(n),{stylesheet:p,rules:m}=cs.get(f)||ec(f,n);m[h]||(m[h]=!0,p.insertRule(`@keyframes ${h} ${u}`,p.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${h} ${s}ms linear ${i}ms 1 both`,us+=1,h}function Oi(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),us-=i,us||tc())}function tc(){Ai(()=>{us||(cs.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&S(e)}),cs.clear())})}function nc(n,e,t,s){if(!e)return Z;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return Z;const{delay:r=0,duration:o=300,easing:l=Os,start:a=Di()+r,end:c=a+o,tick:u=Z,css:h}=t(n,{from:e,to:i},s);let f=!0,p=!1,m;function v(){h&&(m=hs(n,0,1,o,r,l,h)),r||(p=!0)}function b(){h&&Oi(n,m),f=!1}return Pi(M=>{if(!p&&M>=a&&(p=!0),p&&M>=c&&(u(1,0),b()),!f)return!1;if(p){const F=M-a,C=0+1*l(F/o);u(C,1-C)}return!0}),v(),u(0,1),b}function sc(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,ic(n,i)}}function ic(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Mn;function Nn(n){Mn=n}function el(){if(!Mn)throw new Error("Function called outside component initialization");return Mn}function rc(n){el().$$.on_mount.push(n)}function oc(){const n=el();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=Xo(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const Xt=[],rt=[];let on=[];const ri=[],lc=Promise.resolve();let oi=!1;function ac(){oi||(oi=!0,lc.then(tl))}function Ne(n){on.push(n)}function Ms(n){ri.push(n)}const qs=new Set;let Kt=0;function tl(){if(Kt!==0)return;const n=Mn;do{try{for(;Kt<Xt.length;){const e=Xt[Kt];Kt++,Nn(e),cc(e.$$)}}catch(e){throw Xt.length=0,Kt=0,e}for(Nn(null),Xt.length=0,Kt=0;rt.length;)rt.pop()();for(let e=0;e<on.length;e+=1){const t=on[e];qs.has(t)||(qs.add(t),t())}on.length=0}while(Xt.length);for(;ri.length;)ri.pop()();oi=!1,qs.clear(),Nn(n)}function cc(n){if(n.fragment!==null){n.update(),Ve(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ne)}}function uc(n){const e=[],t=[];on.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),on=e}let En;function nl(){return En||(En=Promise.resolve(),En.then(()=>{En=null})),En}function Rn(n,e,t){n.dispatchEvent(Xo(`${e?"intro":"outro"}${t}`))}const ls=new Set;let _t;function ot(){_t={r:0,c:[],p:_t}}function lt(){_t.r||Ve(_t.c),_t=_t.p}function K(n,e){n&&n.i&&(ls.delete(n),n.i(e))}function ce(n,e,t,s){if(n&&n.o){if(ls.has(n))return;ls.add(n),_t.c.push(()=>{ls.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const sl={duration:0};function hc(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=_t;l.r+=1;let a;function c(){const{delay:u=0,duration:h=300,easing:f=Os,tick:p=Z,css:m}=i||sl;m&&(o=hs(n,1,0,h,u,f,m));const v=Di()+u,b=v+h;Ne(()=>Rn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),Pi(M=>{if(r){if(M>=b)return p(0,1),Rn(n,!1,"end"),--l.r||Ve(l.c),!1;if(M>=v){const F=f((M-v)/h);p(1-F,F)}}return r})}return zt(i)?nl().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&Oi(n,o),r=!1)}}}function be(n,e,t,s){let r=e(n,t,{direction:"both"}),o=s?0:1,l=null,a=null,c=null,u;function h(){c&&Oi(n,c)}function f(m,v){const b=m.b-o;return v*=Math.abs(b),{a:o,b:m.b,d:b,duration:v,start:m.start,end:m.start+v,group:m.group}}function p(m){const{delay:v=0,duration:b=300,easing:M=Os,tick:F=Z,css:C}=r||sl,O={start:Di()+v,b:m};m||(O.group=_t,_t.r+=1),"inert"in n&&(m?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=O:(C&&(h(),c=hs(n,o,m,b,v,M,C)),m&&F(0,1),l=f(O,b),Ne(()=>Rn(n,m,"start")),Pi(A=>{if(a&&A>a.start&&(l=f(a,b),a=null,Rn(n,l.b,"start"),C&&(h(),c=hs(n,o,l.b,l.duration,0,M,r.css))),l){if(A>=l.end)F(o=l.b,1-o),Rn(n,l.b,"end"),a||(l.b?h():--l.group.r||Ve(l.group.c)),l=null;else if(A>=l.start){const H=A-l.start;o=l.a+l.d*M(H/l.duration),F(o,1-o)}}return!!(l||a)}))}return{run(m){zt(r)?nl().then(()=>{r=r({direction:m?"in":"out"}),p(m)}):p(m)},end(){h(),l=a=null}}}function ge(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function fc(n,e){ce(n,1,1,()=>{e.delete(n.key)})}function dc(n,e){n.f(),fc(n,e)}function _c(n,e,t,s,i,r,o,l,a,c,u,h){let f=n.length,p=r.length,m=f;const v={};for(;m--;)v[n[m].key]=m;const b=[],M=new Map,F=new Map,C=[];for(m=p;m--;){const k=h(i,r,m),L=t(k);let $=o.get(L);$?s&&C.push(()=>$.p(k,e)):($=c(L,k),$.c()),M.set(L,b[m]=$),L in v&&F.set(L,Math.abs(m-v[L]))}const O=new Set,A=new Set;function H(k){K(k,1),k.m(l,u),o.set(k.key,k),u=k.first,p--}for(;f&&p;){const k=b[p-1],L=n[f-1],$=k.key,j=L.key;k===L?(u=k.first,f--,p--):M.has(j)?!o.has($)||O.has($)?H(k):A.has(j)?f--:F.get($)>F.get(j)?(A.add($),H(k)):(O.add(j),f--):(a(L,o),f--)}for(;f--;){const k=n[f];M.has(k.key)||a(k,o)}for(;p;)H(b[p-1]);return Ve(C),b}function Ls(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function at(n){n&&n.c()}function Je(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),Ne(()=>{const r=n.$$.on_mount.map(Yo).filter(zt);n.$$.on_destroy?n.$$.on_destroy.push(...r):Ve(r),n.$$.on_mount=[]}),i.forEach(Ne)}function Xe(n,e){const t=n.$$;t.fragment!==null&&(uc(t.after_update),Ve(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function pc(n,e){n.$$.dirty[0]===-1&&(Xt.push(n),ac(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ze(n,e,t,s,i,r,o=null,l=[-1]){const a=Mn;Nn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:Z,not_equal:i,bound:dr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:dr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,f,...p)=>{const m=p.length?p[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&pc(n,h)),f}):[],c.update(),u=!0,Ve(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=Xa(e.target);c.fragment&&c.fragment.l(h),h.forEach(S)}else c.fragment&&c.fragment.c();e.intro&&K(n.$$.fragment),Je(n,e.target,e.anchor),tl()}Nn(a)}class et{constructor(){It(this,"$$");It(this,"$$set")}$destroy(){Xe(this,1),this.$destroy=Z}$on(e,t){if(!zt(t))return Z;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!za(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mc="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(mc);function il(n){const e=n-1;return e*e*e+1}function vt(n,{delay:e=0,duration:t=400,easing:s=Os}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}function Ae(n,{delay:e=0,duration:t=400,easing:s=il,start:i=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-i,u=l*(1-r);return{delay:e,duration:t,easing:s,css:(h,f)=>`
			transform: ${a} scale(${1-c*f});
			opacity: ${l-u*f}
		`}}const Qt=[];function bt(n,e=Z){let t;const s=new Set;function i(l){if(qe(n,l)&&(n=l,t)){const a=!Qt.length;for(const c of s)c[1](),Qt.push(c,n);if(a){for(let c=0;c<Qt.length;c+=2)Qt[c][0](Qt[c+1]);Qt.length=0}}}function r(l){i(l(n))}function o(l,a=Z){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||Z),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}var _r={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const D=function(n,e){if(!n)throw gn(e)},gn=function(n){return new Error("Firebase Database ("+rl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},gc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Mi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,p=c&63;a||(p=64,o||(f=64)),s.push(t[u],t[h],t[f],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ol(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new vc;const f=r<<2|l>>4;if(s.push(f),c!==64){const p=l<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ll=function(n){const e=ol(n);return Mi.encodeByteArray(e,!0)},fs=function(n){return ll(n).replace(/\./g,"")},li=function(n){try{return Mi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const wc=()=>Cc().__FIREBASE_DEFAULTS__,Ec=()=>{if(typeof process>"u"||typeof _r>"u")return;const n=_r.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ic=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&li(n[1]);return e&&JSON.parse(e)},cl=()=>{try{return wc()||Ec()||Ic()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sc=n=>{var e,t;return(t=(e=cl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Tc=n=>{const e=Sc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ul=()=>{var n;return(n=cl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function kc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fs(JSON.stringify(t)),fs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nc())}function Rc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fl(){return rl.NODE_ADMIN===!0}function Dc(){try{return typeof indexedDB=="object"}catch{return!1}}function Ac(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _l=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Ln(li(r[0])||""),t=Ln(li(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Lc=function(n){const e=_l(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Fc=function(n){const e=_l(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function fn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function pr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ds(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function ai(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(mr(r)&&mr(o)){if(!ai(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function mr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Bc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fs=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const xt="[DEFAULT]";/**
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
 */class Hc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Li;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($c(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Uc(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uc(n){return n===xt?void 0:n}function $c(n){return n.instantiationMode==="EAGER"}/**
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
 */var Ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ce||(Ce={}));const Gc={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},zc=Ce.INFO,Vc={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},qc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Vc[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=zc,this._logHandler=qc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const Yc=(n,e)=>e.some(t=>n instanceof t);let gr,vr;function Kc(){return gr||(gr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qc(){return vr||(vr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gl=new WeakMap,ci=new WeakMap,vl=new WeakMap,Ys=new WeakMap,Fi=new WeakMap;function Jc(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(kt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&gl.set(t,n)}).catch(()=>{}),Fi.set(e,n),e}function Xc(n){if(ci.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ci.set(n,e)}let ui={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ci.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zc(n){ui=n(ui)}function eu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ks(this),e,...t);return vl.set(s,e.sort?e.sort():[e]),kt(s)}:Qc().includes(n)?function(...e){return n.apply(Ks(this),e),kt(gl.get(this))}:function(...e){return kt(n.apply(Ks(this),e))}}function tu(n){return typeof n=="function"?eu(n):(n instanceof IDBTransaction&&Xc(n),Yc(n,Kc())?new Proxy(n,ui):n)}function kt(n){if(n instanceof IDBRequest)return Jc(n);if(Ys.has(n))return Ys.get(n);const e=tu(n);return e!==n&&(Ys.set(n,e),Fi.set(e,n)),e}const Ks=n=>Fi.get(n);function nu(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=kt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(kt(o.result),a.oldVersion,a.newVersion,kt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const su=["get","getKey","getAll","getAllKeys","count"],iu=["put","add","delete","clear"],Qs=new Map;function yr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qs.get(e))return Qs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=iu.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||su.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return Qs.set(e,r),r}Zc(n=>({...n,get:(e,t,s)=>yr(e,t)||n.get(e,t,s),has:(e,t)=>!!yr(e,t)||n.has(e,t)}));/**
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
 */class ru{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ou(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ou(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",br="0.9.29";/**
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
 */const Ut=new ml("@firebase/app"),lu="@firebase/app-compat",au="@firebase/analytics-compat",cu="@firebase/analytics",uu="@firebase/app-check-compat",hu="@firebase/app-check",fu="@firebase/auth",du="@firebase/auth-compat",_u="@firebase/database",pu="@firebase/database-compat",mu="@firebase/functions",gu="@firebase/functions-compat",vu="@firebase/installations",yu="@firebase/installations-compat",bu="@firebase/messaging",Cu="@firebase/messaging-compat",wu="@firebase/performance",Eu="@firebase/performance-compat",Iu="@firebase/remote-config",Su="@firebase/remote-config-compat",Tu="@firebase/storage",ku="@firebase/storage-compat",Nu="@firebase/firestore",Ru="@firebase/firestore-compat",Du="firebase",Au="10.9.0";/**
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
 */const fi="[DEFAULT]",Pu={[hi]:"fire-core",[lu]:"fire-core-compat",[cu]:"fire-analytics",[au]:"fire-analytics-compat",[hu]:"fire-app-check",[uu]:"fire-app-check-compat",[fu]:"fire-auth",[du]:"fire-auth-compat",[_u]:"fire-rtdb",[pu]:"fire-rtdb-compat",[mu]:"fire-fn",[gu]:"fire-fn-compat",[vu]:"fire-iid",[yu]:"fire-iid-compat",[bu]:"fire-fcm",[Cu]:"fire-fcm-compat",[wu]:"fire-perf",[Eu]:"fire-perf-compat",[Iu]:"fire-rc",[Su]:"fire-rc-compat",[Tu]:"fire-gcs",[ku]:"fire-gcs-compat",[Nu]:"fire-fst",[Ru]:"fire-fst-compat","fire-js":"fire-js",[Du]:"fire-js-all"};/**
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
 */const _s=new Map,di=new Map;function Ou(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ps(n){const e=n.name;if(di.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;di.set(e,n);for(const t of _s.values())Ou(t,n);return!0}function Mu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Lu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nt=new dl("app","Firebase",Lu);/**
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
 */class Fu{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const xu=Au;function yl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(t||(t=ul()),!t)throw Nt.create("no-options");const r=_s.get(i);if(r){if(ai(t,r.options)&&ai(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const o=new jc(i);for(const a of di.values())o.addComponent(a);const l=new Fu(t,s,o);return _s.set(i,l),l}function Wu(n=fi){const e=_s.get(n);if(!e&&n===fi&&ul())return yl();if(!e)throw Nt.create("no-app",{appName:n});return e}function ln(n,e,t){var s;let i=(s=Pu[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(l.join(" "));return}ps(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Bu="firebase-heartbeat-database",Hu=1,xn="firebase-heartbeat-store";let Js=null;function bl(){return Js||(Js=nu(Bu,Hu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nt.create("idb-open",{originalErrorMessage:n.message})})),Js}async function Uu(n){try{const t=(await bl()).transaction(xn),s=await t.objectStore(xn).get(Cl(n));return await t.done,s}catch(e){if(e instanceof qn)Ut.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function Cr(n,e){try{const s=(await bl()).transaction(xn,"readwrite");await s.objectStore(xn).put(e,Cl(n)),await s.done}catch(t){if(t instanceof qn)Ut.warn(t.message);else{const s=Nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(s.message)}}}function Cl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $u=1024,ju=30*24*60*60*1e3;class Gu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vu(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ju}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wr(),{heartbeatsToSend:s,unsentEntries:i}=zu(this._heartbeatsCache.heartbeats),r=fs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function wr(){return new Date().toISOString().substring(0,10)}function zu(n,e=$u){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Er(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Er(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Vu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dc()?Ac().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Uu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Er(n){return fs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function qu(n){ps(new Fn("platform-logger",e=>new ru(e),"PRIVATE")),ps(new Fn("heartbeat",e=>new Gu(e),"PRIVATE")),ln(hi,br,n),ln(hi,br,"esm2017"),ln("fire-js","")}qu("");var Yu="firebase",Ku="10.9.0";/**
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
 */ln(Yu,Ku,"app");var Ir={};const Sr="@firebase/database",Tr="1.0.3";/**
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
 */class Xu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ju(e)}}catch{}return new Xu},Bt=El("localStorage"),_i=El("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new ml("@firebase/database"),Zu=function(){let n=1;return function(){return n++}}(),Il=function(n){const e=Bc(n),t=new Wc;t.update(e);const s=t.digest();return Mi.encodeByteArray(s)},Yn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Yn.apply(null,s):typeof s=="object"?e+=Re(s):e+=s,e+=" "}return e};let Ht=null,kr=!0;const eh=function(n,e){D(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(an.logLevel=Ce.VERBOSE,Ht=an.log.bind(an),e&&_i.set("logging_enabled",!0)):typeof n=="function"?Ht=n:(Ht=null,_i.remove("logging_enabled"))},xe=function(...n){if(kr===!0&&(kr=!1,Ht===null&&_i.get("logging_enabled")===!0&&eh(!0)),Ht){const e=Yn.apply(null,n);Ht(e)}},Kn=function(n){return function(...e){xe(n,...e)}},pi=function(...n){const e="FIREBASE INTERNAL ERROR: "+Yn(...n);an.error(e)},yt=function(...n){const e=`FIREBASE FATAL ERROR: ${Yn(...n)}`;throw an.error(e),new Error(e)},Qe=function(...n){const e="FIREBASE WARNING: "+Yn(...n);an.warn(e)},th=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},nh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},dn="[MIN_NAME]",$t="[MAX_NAME]",yn=function(n,e){if(n===e)return 0;if(n===dn||e===$t)return-1;if(e===dn||n===$t)return 1;{const t=Nr(n),s=Nr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},sh=function(n,e){return n===e?0:n<e?-1:1},In=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Re(e))},xi=function(n){if(typeof n!="object"||n===null)return Re(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Re(e[s]),t+=":",t+=xi(n[e[s]]);return t+="}",t},Tl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ze(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const kl=function(n){D(!Sl(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},ih=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function oh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const lh=new RegExp("^-?(0*)\\d{1,10}$"),ah=-2147483648,ch=2147483647,Nr=function(n){if(lh.test(n)){const e=Number(n);if(e>=ah&&e<=ch)return e}return null},Qn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Qe("Exception was thrown by user callback.",t),e},Math.floor(0))}},uh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Dn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class hh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class cn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="5",Nl="v",Rl="s",Dl="r",Al="f",Pl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ol="ls",Ml="p",mi="ac",Ll="websocket",Fl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function dh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Wl(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let s;if(e===Ll)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Fl)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dh(n)&&(t.ns=n.namespace);const i=[];return ze(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.counters_={}}incrementCounter(e,t=1){Ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs={},Zs={};function Bi(n){const e=n.toString();return Xs[e]||(Xs[e]=new _h),Xs[e]}function ph(n,e){const t=n.toString();return Zs[t]||(Zs[t]=e()),Zs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Rr="start",gh="close",vh="pLPCommand",yh="pRTLPCB",Bl="id",Hl="pw",Ul="ser",bh="cb",Ch="seg",wh="ts",Eh="d",Ih="dframe",$l=1870,jl=30,Sh=$l-jl,Th=25e3,kh=3e4;class Zt{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kn(e),this.stats_=Bi(t),this.urlFn=a=>(this.appCheckToken&&(a[mi]=this.appCheckToken),Wl(t,Fl,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new mh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kh)),nh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hi((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rr)this.id=l,this.password=a;else if(o===gh)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Rr]="t",s[Ul]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[bh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Nl]=Wi,this.transportSessionId&&(s[Rl]=this.transportSessionId),this.lastSessionId&&(s[Ol]=this.lastSessionId),this.applicationId&&(s[Ml]=this.applicationId),this.appCheckToken&&(s[mi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pl.test(location.hostname)&&(s[Dl]=Al);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zt.forceAllow_=!0}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){return Zt.forceAllow_?!0:!Zt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ih()&&!rh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ll(t),i=Tl(s,Sh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ih]="t",s[Bl]=e,s[Hl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Hi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zu(),window[vh+this.uniqueCallbackIdentifier]=e,window[yh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Hi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){xe("frame writing exception"),l.stack&&xe(l.stack),xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bl]=this.myID,e[Hl]=this.myPW,e[Ul]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jl+s.length<=$l;){const o=this.pendingSegs.shift();s=s+"&"+Ch+i+"="+o.seg+"&"+wh+i+"="+o.ts+"&"+Eh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Th)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=16384,Rh=45e3;let ms=null;typeof MozWebSocket<"u"?ms=MozWebSocket:typeof WebSocket<"u"&&(ms=WebSocket);class ut{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kn(this.connId),this.stats_=Bi(t),this.connURL=ut.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Nl]=Wi,typeof location<"u"&&location.hostname&&Pl.test(location.hostname)&&(o[Dl]=Al),t&&(o[Rl]=t),s&&(o[Ol]=s),i&&(o[mi]=i),r&&(o[Ml]=r),Wl(e,Ll,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bt.set("previous_websocket_failure",!0);try{let s;fl(),this.mySock=new ms(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ms!==null&&!ut.forceDisallow_}static previouslyFailed(){return Bt.isInMemoryStorage||Bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ln(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Tl(t,Nh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ut.responsesRequiredToBeHealthy=2;ut.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zt,ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ut&&ut.isAvailable();let s=t&&!ut.previouslyFailed();if(e.webSocketOnly&&(t||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ut];else{const i=this.transports_=[];for(const r of Wn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=6e4,Ah=5e3,Ph=10*1024,Oh=100*1024,ei="t",Dr="d",Mh="s",Ar="r",Lh="e",Pr="o",Or="a",Mr="n",Lr="p",Fh="h";class xh{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kn("c:"+this.id+":"),this.transportManager_=new Wn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Dn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Oh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ph?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ei in e){const t=e[ei];t===Or?this.upgradeIfSecondaryHealthy_():t===Ar?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Pr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=In("t",e),s=In("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Or,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=In("t",e),s=In("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=In(ei,e);if(Dr in e){const s=e[Dr];if(t===Fh){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Mr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Mh?this.onConnectionShutdown_(s):t===Ar?this.onReset_(s):t===Lh?pi("Server Error: "+s):t===Pr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Wi!==s&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Dn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Dh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Dn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ah))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zl{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends zl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gs}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=32,xr=768;class ve{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ue(){return new ve("")}function ie(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function At(n){return n.pieces_.length-n.pieceNum_}function we(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ve(n.pieces_,e)}function Vl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Wh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ql(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Yl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ve(e,0)}function De(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new ve(t,0)}function se(n){return n.pieceNum_>=n.pieces_.length}function He(n,e){const t=ie(n),s=ie(e);if(t===null)return e;if(t===s)return He(we(n),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Kl(n,e){if(At(n)!==At(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ht(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(At(n)>At(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Bh{constructor(e,t){this.errorPrefix_=t,this.parts_=ql(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fs(this.parts_[s]);Ql(this)}}function Hh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Fs(e),Ql(n)}function Uh(n){const e=n.parts_.pop();n.byteLength_-=Fs(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ql(n){if(n.byteLength_>xr)throw new Error(n.errorPrefix_+"has a key path longer than "+xr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Fr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fr+") or object contains a cycle "+Wt(n))}function Wt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends zl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ui}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=1e3,$h=60*5*1e3,Wr=30*1e3,jh=1.3,Gh=3e4,zh="server_kill",Br=3;class gt extends Gl{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=gt.nextPersistentConnectionId_++,this.log_=Kn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sn,this.maxReconnectDelay_=$h,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!fl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ui.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Re(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Li,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;gt.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ct(e,"w")){const s=fn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Lc(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):pi("Unrecognized action received from server: "+Re(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gh&&(this.reconnectDelay_=Sn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){D(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new xh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{Qe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(zh)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Qe(h),a())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pr(this.interruptReasons_)&&(this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>xi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new ve(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){xe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Br&&(this.reconnectDelay_=Wr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){xe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Br&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+wl.replace(/\./g,"-")]=1,hl()?e["framework.cordova"]=1:Rc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gs.getInstance().currentlyOnline();return pr(this.interruptReasons_)&&e}}gt.nextPersistentConnectionId_=0;gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new X(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new X(dn,e),i=new X(dn,t);return this.compare(s,i)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is;class Jl extends xs{static get __EMPTY_NODE(){return is}static set __EMPTY_NODE(e){is=e}compare(e,t){return yn(e.name,t.name)}isDefinedOn(e){throw gn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return X.MIN}maxPost(){return new X($t,is)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,is)}toString(){return".key"}}const un=new Jl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Oe.RED,this.left=i??Ge.EMPTY_NODE,this.right=r??Ge.EMPTY_NODE}copy(e,t,s,i,r){return new Oe(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class Vh{copy(e,t,s,i,r){return this}insert(e,t,s){return new Oe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,t=Ge.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ge(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new rs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new rs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new rs(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new Vh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,e){return yn(n.name,e.name)}function $i(n,e){return yn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;function Yh(n){gi=n}const Xl=function(n){return typeof n=="number"?"number:"+kl(n):"string:"+n},Zl=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ct(e,".sv"),"Priority must be a string or number.")}else D(n===gi||n.isEmpty(),"priority of unexpected type.");D(n===gi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;class Pe{constructor(e,t=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zl(this.priorityNode_)}static set __childrenNodeConstructor(e){Hr=e}static get __childrenNodeConstructor(){return Hr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ie(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ie(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||At(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=kl(this.value_):e+=this.value_,this.lazyHash_=Il(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(t),r=Pe.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+t),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea,ta;function Kh(n){ea=n}function Qh(n){ta=n}class Jh extends xs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?yn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return X.MIN}maxPost(){return new X($t,new Pe("[PRIORITY-POST]",ta))}makePost(e,t){const s=ea(e);return new X(t,new Pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new Jh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=Math.log(2);class Zh{constructor(e){const t=r=>parseInt(Math.log(r)/Xh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vs=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=n[a],f=t?t(h):h,new Oe(f,h.node,Oe.BLACK,null,null);{const p=parseInt(u/2,10)+a,m=i(a,p),v=i(p+1,c);return h=n[p],f=t?t(h):h,new Oe(f,h.node,Oe.BLACK,m,v)}},r=function(a){let c=null,u=null,h=n.length;const f=function(m,v){const b=h-m,M=h;h-=m;const F=i(b+1,M),C=n[b],O=t?t(C):C;p(new Oe(O,C.node,v,null,F))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const v=a.nextBitIsOne(),b=Math.pow(2,a.count-(m+1));v?f(b,Oe.BLACK):(f(b,Oe.BLACK),f(b,Oe.RED))}return u},o=new Zh(n.length),l=r(o);return new Ge(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;const Jt={};class mt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return D(Jt&&Te,"ChildrenNode.ts has not been loaded"),ti=ti||new mt({".priority":Jt},{".priority":Te}),ti}get(e){const t=fn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ge?t:null}hasIndex(e){return Ct(this.indexSet_,e.toString())}addIndex(e,t){D(e!==un,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(X.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=vs(s,e.getCompare()):l=Jt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new mt(u,c)}addToIndexes(e,t){const s=ds(this.indexes_,(i,r)=>{const o=fn(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),i===Jt)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(X.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),vs(l,o.getCompare())}else return Jt;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new X(e.name,l))),a.insert(e,e.node)}});return new mt(s,this.indexSet_)}removeFromIndexes(e,t){const s=ds(this.indexes_,i=>{if(i===Jt)return i;{const r=t.get(e.name);return r?i.remove(new X(e.name,r)):i}});return new mt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn;class z{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Zl(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Tn||(Tn=new z(new Ge($i),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tn}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Tn:t}}getChild(e){const t=ie(e);return t===null?this:this.getImmediateChild(t).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new X(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Tn:this.priorityNode_;return new z(i,o,r)}}updateChild(e,t){const s=ie(e);if(s===null)return t;{D(ie(e)!==".priority"||At(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(we(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Te,(o,l)=>{t[o]=l.val(e),s++,r&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xl(this.getPriority().val())+":"),this.forEachChild(Te,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Il(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new X(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new X(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new X(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jn?-1:0}withIndex(e){if(e===un||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===un||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Te),i=t.getIterator(Te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===un?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ef extends z{constructor(){super(new Ge($i),z.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const Jn=new ef;Object.defineProperties(X,{MIN:{value:new X(dn,z.EMPTY_NODE)},MAX:{value:new X($t,Jn)}});Jl.__EMPTY_NODE=z.EMPTY_NODE;Pe.__childrenNodeConstructor=z;Yh(Jn);Qh(Jn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=!0;function Fe(n,e=null){if(n===null)return z.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Pe(t,Fe(e))}if(!(n instanceof Array)&&tf){const t=[];let s=!1;if(ze(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=Fe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new X(o,a)))}}),t.length===0)return z.EMPTY_NODE;const r=vs(t,qh,o=>o.name,$i);if(s){const o=vs(t,Te.getCompare());return new z(r,Fe(e),new mt({".priority":o},{".priority":Te}))}else return new z(r,Fe(e),mt.Default)}else{let t=z.EMPTY_NODE;return ze(n,(s,i)=>{if(Ct(n,s)&&s.substring(0,1)!=="."){const r=Fe(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Fe(e))}}Kh(Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends xs{constructor(e){super(),this.indexPath_=e,D(!se(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?yn(e.name,t.name):r}makePost(e,t){const s=Fe(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,s);return new X(t,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,Jn);return new X($t,e)}toString(){return ql(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends xs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?yn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,t){const s=Fe(e);return new X(t,s)}toString(){return".value"}}const rf=new sf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ji{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Bn(t,l)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(_n(t,s)):o.trackChildChange(Hn(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,r)=>{t.hasChild(i)||s.trackChildChange(Bn(i,r))}),t.isLeafNode()||t.forEachChild(Te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Hn(i,r,o))}else s.trackChildChange(_n(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.indexedFilter_=new ji(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Un.getStartPost_(e),this.endPost_=Un.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new X(t,s))||(s=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=z.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const r=this;return t.forEachChild(Te,(o,l)=>{r.matches(new X(o,l))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Un(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new X(t,s))||(s=z.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const l=e;D(l.numChildren()===this.limit_,"");const a=new X(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const h=l.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,a);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Hn(t,s,h)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Bn(t,h));const v=l.updateImmediateChild(t,z.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(_n(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Bn(c.name,c.node)),r.trackChildChange(_n(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:dn}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$t}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Gi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function af(n){return n.loadsAllData()?new ji(n.getIndex()):n.hasLimit()?new lf(n):new Un(n)}function Ur(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Te?t="$priority":n.index_===rf?t="$value":n.index_===un?t="$key":(D(n.index_ instanceof nf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Re(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Re(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Re(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Re(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Re(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function $r(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Te&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Gl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Kn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ys.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ur(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),fn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=ys.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Ur(e._queryParams),s=e._path.toString(),i=new Li;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xc(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ln(l.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(){return{value:null,children:new Map}}function sa(n,e,t){if(se(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ie(e);n.children.has(s)||n.children.set(s,bs());const i=n.children.get(s);e=we(e),sa(i,e,t)}}function vi(n,e,t){n.value!==null?t(e,n.value):uf(n,(s,i)=>{const r=new ve(e.toString()+"/"+s);vi(i,r,t)})}function uf(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jr=10*1e3,ff=30*1e3,df=5*60*1e3;class _f{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new hf(e);const s=jr+(ff-jr)*Math.random();Dn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ze(e,(i,r)=>{r>0&&Ct(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Dn(this.reportStats_.bind(this),Math.floor(Math.random()*2*df))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function ia(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ft.ACK_USER_WRITE,this.source=ia()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ve(e));return new Cs(ue(),t,this.revert)}}else return D(ie(this.path)===e,"operationForChild called for unrelated child."),new Cs(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.source=e,this.path=t,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new $n(this.source,ue()):new $n(this.source,we(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ft.OVERWRITE}operationForChild(e){return se(this.path)?new jt(this.source,ue(),this.snap.getImmediateChild(e)):new jt(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ft.MERGE}operationForChild(e){if(se(this.path)){const t=this.children.subtree(new ve(e));return t.isEmpty()?null:t.value?new jt(this.source,ue(),t.value):new jn(this.source,ue(),t)}else return D(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jn(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const t=ie(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mf(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(of(o.childName,o.snapshotNode))}),kn(n,i,"child_removed",e,s,t),kn(n,i,"child_added",e,s,t),kn(n,i,"child_moved",r,s,t),kn(n,i,"child_changed",e,s,t),kn(n,i,"value",e,s,t),i}function kn(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>vf(n,l,a)),o.forEach(l=>{const a=gf(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function gf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function vf(n,e,t){if(e.childName==null||t.childName==null)throw gn("Should only compare child_ events.");const s=new X(e.childName,e.snapshotNode),i=new X(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,e){return{eventCache:n,serverCache:e}}function An(n,e,t,s){return Ws(new Pt(e,t,s),n.serverCache)}function ra(n,e,t,s){return Ws(n.eventCache,new Pt(e,t,s))}function ws(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Gt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni;const yf=()=>(ni||(ni=new Ge(sh)),ni);class Ie{constructor(e,t=yf()){this.value=e,this.children=t}static fromObject(e){let t=new Ie(null);return ze(e,(s,i)=>{t=t.set(new ve(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ue(),value:this.value};if(se(e))return null;{const s=ie(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(we(e),t);return r!=null?{path:De(new ve(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const t=ie(e),s=this.children.get(t);return s!==null?s.subtree(we(e)):new Ie(null)}}set(e,t){if(se(e))return new Ie(t,this.children);{const s=ie(e),r=(this.children.get(s)||new Ie(null)).set(we(e),t),o=this.children.insert(s,r);return new Ie(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const t=ie(e),s=this.children.get(t);if(s){const i=s.remove(we(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Ie(null):new Ie(this.value,r)}else return this}}get(e){if(se(e))return this.value;{const t=ie(e),s=this.children.get(t);return s?s.get(we(e)):null}}setTree(e,t){if(se(e))return t;{const s=ie(e),r=(this.children.get(s)||new Ie(null)).setTree(we(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ie(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(De(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ue(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(se(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(we(e),De(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ue(),t)}foreachOnPath_(e,t,s){if(se(e))return this;{this.value&&s(t,this.value);const i=ie(e),r=this.children.get(i);return r?r.foreachOnPath_(we(e),De(t,i),s):new Ie(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(De(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.writeTree_=e}static empty(){return new dt(new Ie(null))}}function Pn(n,e,t){if(se(e))return new dt(new Ie(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=He(i,e);return r=r.updateChild(o,t),new dt(n.writeTree_.set(i,r))}else{const i=new Ie(t),r=n.writeTree_.setTree(e,i);return new dt(r)}}}function Gr(n,e,t){let s=n;return ze(t,(i,r)=>{s=Pn(s,De(e,i),r)}),s}function zr(n,e){if(se(e))return dt.empty();{const t=n.writeTree_.setTree(e,new Ie(null));return new dt(t)}}function yi(n,e){return Vt(n,e)!=null}function Vt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(He(t.path,e)):null}function Vr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Te,(s,i)=>{e.push(new X(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new X(s,i.value))}),e}function Rt(n,e){if(se(e))return n;{const t=Vt(n,e);return t!=null?new dt(new Ie(t)):new dt(n.writeTree_.subtree(e))}}function bi(n){return n.writeTree_.isEmpty()}function pn(n,e){return oa(ue(),n.writeTree_,e)}function oa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=oa(De(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(De(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n,e){return ua(e,n)}function bf(n,e,t,s,i){D(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Pn(n.visibleWrites,e,t)),n.lastWriteId=s}function Cf(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function wf(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Ef(l,s.path)?i=!1:ht(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return If(n),!0;if(s.snap)n.visibleWrites=zr(n.visibleWrites,s.path);else{const l=s.children;ze(l,a=>{n.visibleWrites=zr(n.visibleWrites,De(s.path,a))})}return!0}else return!1}function Ef(n,e){if(n.snap)return ht(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ht(De(n.path,t),e))return!0;return!1}function If(n){n.visibleWrites=la(n.allWrites,Sf,ue()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Sf(n){return n.visible}function la(n,e,t){let s=dt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)ht(t,o)?(l=He(t,o),s=Pn(s,l,r.snap)):ht(o,t)&&(l=He(o,t),s=Pn(s,ue(),r.snap.getChild(l)));else if(r.children){if(ht(t,o))l=He(t,o),s=Gr(s,l,r.children);else if(ht(o,t))if(l=He(o,t),se(l))s=Gr(s,ue(),r.children);else{const a=fn(r.children,ie(l));if(a){const c=a.getChild(we(l));s=Pn(s,ue(),c)}}}else throw gn("WriteRecord should have .snap or .children")}}return s}function aa(n,e,t,s,i){if(!s&&!i){const r=Vt(n.visibleWrites,e);if(r!=null)return r;{const o=Rt(n.visibleWrites,e);if(bi(o))return t;if(t==null&&!yi(o,ue()))return null;{const l=t||z.EMPTY_NODE;return pn(o,l)}}}else{const r=Rt(n.visibleWrites,e);if(!i&&bi(r))return t;if(!i&&t==null&&!yi(r,ue()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ht(c.path,e)||ht(e,c.path))},l=la(n.allWrites,o,e),a=t||z.EMPTY_NODE;return pn(l,a)}}}function Tf(n,e,t){let s=z.EMPTY_NODE;const i=Vt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Rt(n.visibleWrites,e);return t.forEachChild(Te,(o,l)=>{const a=pn(Rt(r,new ve(o)),l);s=s.updateImmediateChild(o,a)}),Vr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Rt(n.visibleWrites,e);return Vr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function kf(n,e,t,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=De(e,t);if(yi(n.visibleWrites,r))return null;{const o=Rt(n.visibleWrites,r);return bi(o)?i.getChild(t):pn(o,i.getChild(t))}}function Nf(n,e,t,s){const i=De(e,t),r=Vt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Rt(n.visibleWrites,i);return pn(o,s.getNode().getImmediateChild(t))}else return null}function Rf(n,e){return Vt(n.visibleWrites,e)}function Df(n,e,t,s,i,r,o){let l;const a=Rt(n.visibleWrites,e),c=Vt(a,ue());if(c!=null)l=c;else if(t!=null)l=pn(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function Af(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function Es(n,e,t,s){return aa(n.writeTree,n.treePath,e,t,s)}function qi(n,e){return Tf(n.writeTree,n.treePath,e)}function qr(n,e,t,s){return kf(n.writeTree,n.treePath,e,t,s)}function Is(n,e){return Rf(n.writeTree,De(n.treePath,e))}function Pf(n,e,t,s,i,r){return Df(n.writeTree,n.treePath,e,t,s,i,r)}function Yi(n,e,t){return Nf(n.writeTree,n.treePath,e,t)}function ca(n,e){return ua(De(n.treePath,e),n.writeTree)}function ua(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Hn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Bn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,_n(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Hn(s,e.snapshotNode,i.oldSnap));else throw gn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ha=new Mf;class Ki{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yi(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gt(this.viewCache_),r=Pf(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n){return{filter:n}}function Ff(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function xf(n,e,t,s,i){const r=new Of;let o,l;if(t.type===ft.OVERWRITE){const c=t;c.source.fromUser?o=Ci(n,e,c.path,c.snap,s,i,r):(D(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=Ss(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===ft.MERGE){const c=t;c.source.fromUser?o=Bf(n,e,c.path,c.children,s,i,r):(D(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=wi(n,e,c.path,c.children,s,i,l,r))}else if(t.type===ft.ACK_USER_WRITE){const c=t;c.revert?o=$f(n,e,c.path,s,i,r):o=Hf(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===ft.LISTEN_COMPLETE)o=Uf(n,e,t.path,s,r);else throw gn("Unknown operation type: "+t.type);const a=r.getChanges();return Wf(e,o,a),{viewCache:o,changes:a}}function Wf(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ws(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(na(ws(e)))}}function fa(n,e,t,s,i,r){const o=e.eventCache;if(Is(s,t)!=null)return e;{let l,a;if(se(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gt(e),u=c instanceof z?c:z.EMPTY_NODE,h=qi(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Es(s,Gt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ie(t);if(c===".priority"){D(At(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=qr(s,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=we(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=qr(s,t,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Yi(s,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return An(e,l,o.isFullyInitialized()||se(t),n.filter.filtersNodes())}}function Ss(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(se(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),p,null)}else{const p=ie(t);if(!a.isCompleteForPath(t)&&At(t)>1)return e;const m=we(t),b=a.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(a.getNode(),b):c=u.updateChild(a.getNode(),p,b,m,ha,null)}const h=ra(e,c,a.isFullyInitialized()||se(t),u.filtersNodes()),f=new Ki(i,h,r);return fa(n,h,t,i,f,l)}function Ci(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Ki(i,e,r);if(se(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=An(e,c,!0,n.filter.filtersNodes());else{const h=ie(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=An(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=we(t),p=l.getNode().getImmediateChild(h);let m;if(se(f))m=s;else{const v=u.getCompleteChild(h);v!=null?Vl(f)===".priority"&&v.getChild(Yl(f)).isEmpty()?m=v:m=v.updateChild(f,s):m=z.EMPTY_NODE}if(p.equals(m))a=e;else{const v=n.filter.updateChild(l.getNode(),h,m,f,u,o);a=An(e,v,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function Yr(n,e){return n.eventCache.isCompleteForChild(e)}function Bf(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=De(t,a);Yr(e,ie(u))&&(l=Ci(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=De(t,a);Yr(e,ie(u))||(l=Ci(n,l,u,c,i,r,o))}),l}function Kr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function wi(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;se(t)?c=s:c=new Ie(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Kr(n,p,f);a=Ss(n,a,new ve(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),v=Kr(n,m,f);a=Ss(n,a,new ve(h),v,i,r,o,l)}}),a}function Hf(n,e,t,s,i,r,o){if(Is(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(se(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Ss(n,e,t,a.getNode().getChild(t),i,r,l,o);if(se(t)){let c=new Ie(null);return a.getNode().forEachChild(un,(u,h)=>{c=c.set(new ve(u),h)}),wi(n,e,t,c,i,r,l,o)}else return e}else{let c=new Ie(null);return s.foreach((u,h)=>{const f=De(t,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),wi(n,e,t,c,i,r,l,o)}}function Uf(n,e,t,s,i){const r=e.serverCache,o=ra(e,r.getNode(),r.isFullyInitialized()||se(t),r.isFiltered());return fa(n,o,t,s,ha,i)}function $f(n,e,t,s,i,r){let o;if(Is(s,t)!=null)return e;{const l=new Ki(s,e,i),a=e.eventCache.getNode();let c;if(se(t)||ie(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Es(s,Gt(e));else{const h=e.serverCache.getNode();D(h instanceof z,"serverChildren would be complete if leaf node"),u=qi(s,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=ie(t);let h=Yi(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,we(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,z.EMPTY_NODE,we(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Es(s,Gt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Is(s,ue())!=null,An(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ji(s.getIndex()),r=af(s);this.processor_=Lf(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(z.EMPTY_NODE,l.getNode(),null),u=new Pt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Pt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ws(h,u),this.eventGenerator_=new pf(this.query_)}get query(){return this.query_}}function Gf(n){return n.viewCache_.serverCache.getNode()}function zf(n){return ws(n.viewCache_)}function Vf(n,e){const t=Gt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!se(e)&&!t.getImmediateChild(ie(e)).isEmpty())?t.getChild(e):null}function Qr(n){return n.eventRegistrations_.length===0}function qf(n,e){n.eventRegistrations_.push(e)}function Jr(n,e,t){const s=[];if(t){D(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Xr(n,e,t,s){e.type===ft.MERGE&&e.source.queryId!==null&&(D(Gt(n.viewCache_),"We should always have a full cache before handling merges"),D(ws(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=xf(n.processor_,i,e,t,s);return Ff(n.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,da(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Yf(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Te,(r,o)=>{s.push(_n(r,o))}),t.isFullyInitialized()&&s.push(na(t.getNode())),da(n,s,t.getNode(),e)}function da(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return mf(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;class _a{constructor(){this.views=new Map}}function Kf(n){D(!Ts,"__referenceConstructor has already been defined"),Ts=n}function Qf(){return D(Ts,"Reference.ts has not been loaded"),Ts}function Jf(n){return n.views.size===0}function Qi(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),Xr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Xr(o,e,t,s));return r}}function pa(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Es(t,i?s:null),a=!1;l?a=!0:s instanceof z?(l=qi(t,s),a=!1):(l=z.EMPTY_NODE,a=!1);const c=Ws(new Pt(l,a,!1),new Pt(s,i,!1));return new jf(e,c)}return o}function Xf(n,e,t,s,i,r){const o=pa(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),qf(o,t),Yf(o,t)}function Zf(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ot(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(Jr(c,t,s)),Qr(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(Jr(a,t,s)),Qr(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ot(n)&&r.push(new(Qf())(e._repo,e._path)),{removed:r,events:o}}function ma(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Dt(n,e){let t=null;for(const s of n.views.values())t=t||Vf(s,e);return t}function ga(n,e){if(e._queryParams.loadsAllData())return Hs(n);{const s=e._queryIdentifier;return n.views.get(s)}}function va(n,e){return ga(n,e)!=null}function Ot(n){return Hs(n)!=null}function Hs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;function ed(n){D(!ks,"__referenceConstructor has already been defined"),ks=n}function td(){return D(ks,"Reference.ts has not been loaded"),ks}let nd=1;class Zr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=Af(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sd(n,e,t,s,i){return bf(n.pendingWriteTree_,e,t,s,i),i?Zn(n,new jt(ia(),e,t)):[]}function en(n,e,t=!1){const s=Cf(n.pendingWriteTree_,e);if(wf(n.pendingWriteTree_,e)){let r=new Ie(null);return s.snap!=null?r=r.set(ue(),!0):ze(s.children,o=>{r=r.set(new ve(o),!0)}),Zn(n,new Cs(s.path,r,t))}else return[]}function Xn(n,e,t){return Zn(n,new jt(zi(),e,t))}function id(n,e,t){const s=Ie.fromObject(t);return Zn(n,new jn(zi(),e,s))}function rd(n,e){return Zn(n,new $n(zi(),e))}function od(n,e,t){const s=Ji(n,t);if(s){const i=Xi(s),r=i.path,o=i.queryId,l=He(r,e),a=new $n(Vi(o),l);return Zi(n,r,a)}else return[]}function ya(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||va(o,e))){const a=Zf(o,e,t,s);Jf(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(f,p)=>Ot(p));if(u&&!h){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=ud(f);for(let m=0;m<p.length;++m){const v=p[m],b=v.query,M=Ia(n,v);n.listenProvider_.startListening(On(b),Gn(n,b),M.hashFn,M.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(On(e),null):c.forEach(f=>{const p=n.queryToTagMap.get(Us(f));n.listenProvider_.stopListening(On(f),p)}))}hd(n,c)}return l}function ba(n,e,t,s){const i=Ji(n,s);if(i!=null){const r=Xi(i),o=r.path,l=r.queryId,a=He(o,e),c=new jt(Vi(l),a,t);return Zi(n,o,c)}else return[]}function ld(n,e,t,s){const i=Ji(n,s);if(i){const r=Xi(i),o=r.path,l=r.queryId,a=He(o,e),c=Ie.fromObject(t),u=new jn(Vi(l),a,c);return Zi(n,o,u)}else return[]}function ad(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,p)=>{const m=He(f,i);r=r||Dt(p,m),o=o||Ot(p)});let l=n.syncPointTree_.get(i);l?(o=o||Ot(l),r=r||Dt(l,ue())):(l=new _a,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=z.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,m)=>{const v=Dt(m,ue());v&&(r=r.updateImmediateChild(p,v))}));const c=va(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Us(e);D(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=fd();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const u=Bs(n.pendingWriteTree_,i);let h=Xf(l,e,t,u,r,a);if(!c&&!o&&!s){const f=ga(l,e);h=h.concat(dd(n,e,f))}return h}function Ca(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=He(o,e),c=Dt(l,a);if(c)return c});return aa(i,e,r,t,!0)}function cd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=He(c,t);s=s||Dt(u,h)});let i=n.syncPointTree_.get(t);i?s=s||Dt(i,ue()):(i=new _a,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Pt(s,!0,!1):null,l=Bs(n.pendingWriteTree_,e._path),a=pa(i,e,l,r?o.getNode():z.EMPTY_NODE,r);return zf(a)}function Zn(n,e){return wa(e,n.syncPointTree_,null,Bs(n.pendingWriteTree_,ue()))}function wa(n,e,t,s){if(se(n.path))return Ea(n,e,t,s);{const i=e.get(ue());t==null&&i!=null&&(t=Dt(i,ue()));let r=[];const o=ie(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=ca(s,o);r=r.concat(wa(l,a,c,u))}return i&&(r=r.concat(Qi(i,n,s,t))),r}}function Ea(n,e,t,s){const i=e.get(ue());t==null&&i!=null&&(t=Dt(i,ue()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=ca(s,o),u=n.operationForChild(o);u&&(r=r.concat(Ea(u,l,a,c)))}),i&&(r=r.concat(Qi(i,n,s,t))),r}function Ia(n,e){const t=e.query,s=Gn(n,t);return{hashFn:()=>(Gf(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?od(n,t._path,s):rd(n,t._path);{const r=oh(i,t);return ya(n,t,null,r)}}}}function Gn(n,e){const t=Us(e);return n.queryToTagMap.get(t)}function Us(n){return n._path.toString()+"$"+n._queryIdentifier}function Ji(n,e){return n.tagToQueryMap.get(e)}function Xi(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ve(n.substr(0,e))}}function Zi(n,e,t){const s=n.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=Bs(n.pendingWriteTree_,e);return Qi(s,t,i,null)}function ud(n){return n.fold((e,t,s)=>{if(t&&Ot(t))return[Hs(t)];{let i=[];return t&&(i=ma(t)),ze(s,(r,o)=>{i=i.concat(o)}),i}})}function On(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(td())(n._repo,n._path):n}function hd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Us(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function fd(){return nd++}function dd(n,e,t){const s=e._path,i=Gn(n,e),r=Ia(n,t),o=n.listenProvider_.startListening(On(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)D(!Ot(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!se(c)&&u&&Ot(u))return[Hs(u).query];{let f=[];return u&&(f=f.concat(ma(u).map(p=>p.query))),ze(h,(p,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(On(u),Gn(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new er(t)}node(){return this.node_}}class tr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=De(this.path_,e);return new tr(this.syncTree_,t)}node(){return Ca(this.syncTree_,this.path_)}}const _d=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},eo=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return md(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},md=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},gd=function(n,e,t,s){return nr(e,new tr(t,n),s)},vd=function(n,e,t){return nr(n,new er(e),t)};function nr(n,e,t){const s=n.getPriority().val(),i=eo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=eo(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new Pe(l,Fe(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Pe(i))),o.forEachChild(Te,(l,a)=>{const c=nr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ir(n,e){let t=e instanceof ve?e:new ve(e),s=n,i=ie(t);for(;i!==null;){const r=fn(s.node.children,i)||{children:{},childCount:0};s=new sr(i,s,r),t=we(t),i=ie(t)}return s}function bn(n){return n.node.value}function Sa(n,e){n.node.value=e,Ei(n)}function Ta(n){return n.node.childCount>0}function yd(n){return bn(n)===void 0&&!Ta(n)}function $s(n,e){ze(n.node.children,(t,s)=>{e(new sr(t,n,s))})}function ka(n,e,t,s){t&&!s&&e(n),$s(n,i=>{ka(i,e,!0,s)}),t&&s&&e(n)}function bd(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function es(n){return new ve(n.parent===null?n.name:es(n.parent)+"/"+n.name)}function Ei(n){n.parent!==null&&Cd(n.parent,n.name,n)}function Cd(n,e,t){const s=yd(t),i=Ct(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Ei(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Ei(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=/[\[\].#$\/\u0000-\u001F\u007F]/,Ed=/[\[\].#$\u0000-\u001F\u007F]/,si=10*1024*1024,Na=function(n){return typeof n=="string"&&n.length!==0&&!wd.test(n)},Ra=function(n){return typeof n=="string"&&n.length!==0&&!Ed.test(n)},Id=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ra(n)},Da=function(n,e,t){const s=t instanceof ve?new Bh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Wt(s));if(typeof e=="function")throw new Error(n+"contains a function "+Wt(s)+" with contents = "+e.toString());if(Sl(e))throw new Error(n+"contains "+e.toString()+" "+Wt(s));if(typeof e=="string"&&e.length>si/3&&Fs(e)>si)throw new Error(n+"contains a string greater than "+si+" utf8 bytes "+Wt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ze(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Na(o)))throw new Error(n+" contains an invalid key ("+o+") "+Wt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hh(s,o),Da(n,l,s),Uh(s)}),i&&r)throw new Error(n+' contains ".value" child '+Wt(s)+" in addition to actual children.")}},Aa=function(n,e,t,s){if(!(s&&t===void 0)&&!Ra(t))throw new Error(pl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Aa(n,e,t,s)},Td=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Na(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Id(t))throw new Error(pl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Kl(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Lt(n,e,t){Nd(n,t),Rd(n,s=>ht(s,e)||ht(e,s))}function Rd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Dd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Dd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ht&&xe("event: "+t.toString()),Qn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="repo_interrupt",Pd=25;class Od{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bs(),this.transactionQueueTree_=new sr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Md(n,e,t){if(n.stats_=Bi(n.repoInfo_),n.forceRestClient_||uh())n.server_=new ys(n.repoInfo_,(s,i,r,o)=>{to(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>no(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new gt(n.repoInfo_,e,(s,i,r,o)=>{to(n,s,i,r,o)},s=>{no(n,s)},s=>{Fd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=ph(n.repoInfo_,()=>new _f(n.stats_,n.server_)),n.infoData_=new cf,n.infoSyncTree_=new Zr({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=Xn(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),rr(n,"connected",!1),n.serverSyncTree_=new Zr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Lt(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ld(n){const t=n.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Pa(n){return _d({timestamp:Ld(n)})}function to(n,e,t,s,i){n.dataUpdateCount++;const r=new ve(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=ds(t,c=>Fe(c));o=ld(n.serverSyncTree_,r,a,i)}else{const a=Fe(t);o=ba(n.serverSyncTree_,r,a,i)}else if(s){const a=ds(t,c=>Fe(c));o=id(n.serverSyncTree_,r,a)}else{const a=Fe(t);o=Xn(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ar(n,r)),Lt(n.eventQueue_,l,o)}function no(n,e){rr(n,"connected",e),e===!1&&Bd(n)}function Fd(n,e){ze(e,(t,s)=>{rr(n,t,s)})}function rr(n,e,t){const s=new ve("/.info/"+e),i=Fe(t);n.infoData_.updateSnapshot(s,i);const r=Xn(n.infoSyncTree_,s,i);Lt(n.eventQueue_,s,r)}function xd(n){return n.nextWriteId_++}function Wd(n,e,t){const s=cd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Fe(i).withIndex(e._queryParams.getIndex());ad(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Xn(n.serverSyncTree_,e._path,r);else{const l=Gn(n.serverSyncTree_,e);o=ba(n.serverSyncTree_,e._path,r,l)}return Lt(n.eventQueue_,e._path,o),ya(n.serverSyncTree_,e,t,null,!0),r},i=>(or(n,"get for query "+Re(e)+" failed: "+i),Promise.reject(new Error(i))))}function Bd(n){or(n,"onDisconnectEvents");const e=Pa(n),t=bs();vi(n.onDisconnect_,ue(),(i,r)=>{const o=gd(i,r,n.serverSyncTree_,e);sa(t,i,o)});let s=[];vi(t,ue(),(i,r)=>{s=s.concat(Xn(n.serverSyncTree_,i,r));const o=jd(n,i);ar(n,o)}),n.onDisconnect_=bs(),Lt(n.eventQueue_,ue(),s)}function Hd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ad)}function or(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),xe(t,...e)}function Oa(n,e,t){return Ca(n.serverSyncTree_,e,t)||z.EMPTY_NODE}function lr(n,e=n.transactionQueueTree_){if(e||js(n,e),bn(e)){const t=La(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Ud(n,es(e),t)}else Ta(e)&&$s(e,t=>{lr(n,t)})}function Ud(n,e,t){const s=t.map(c=>c.currentWriteId),i=Oa(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=He(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{or(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(en(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();js(n,ir(n.transactionQueueTree_,e)),lr(n,n.transactionQueueTree_),Lt(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)Qn(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Qe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}ar(n,e)}},o)}function ar(n,e){const t=Ma(n,e),s=es(t),i=La(n,t);return $d(n,i,s),s}function $d(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=He(t,a.path);let u=!1,h;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(en(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Pd)u=!0,h="maxretry",i=i.concat(en(n.serverSyncTree_,a.currentWriteId,!0));else{const f=Oa(n,a.path,o);a.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){Da("transaction failed: Data returned ",p,a.path);let m=Fe(p);typeof p=="object"&&p!=null&&Ct(p,".priority")||(m=m.updatePriority(f.getPriority()));const b=a.currentWriteId,M=Pa(n),F=vd(m,f,M);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=F,a.currentWriteId=xd(n),o.splice(o.indexOf(b),1),i=i.concat(sd(n.serverSyncTree_,a.path,F,a.currentWriteId,a.applyLocally)),i=i.concat(en(n.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(en(n.serverSyncTree_,a.currentWriteId,!0))}Lt(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}js(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Qn(s[l]);lr(n,n.transactionQueueTree_)}function Ma(n,e){let t,s=n.transactionQueueTree_;for(t=ie(e);t!==null&&bn(s)===void 0;)s=ir(s,t),e=we(e),t=ie(e);return s}function La(n,e){const t=[];return Fa(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Fa(n,e,t){const s=bn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);$s(e,i=>{Fa(n,i,t)})}function js(n,e){const t=bn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Sa(e,t.length>0?t:void 0)}$s(e,s=>{js(n,s)})}function jd(n,e){const t=es(Ma(n,e)),s=ir(n.transactionQueueTree_,e);return bd(s,i=>{ii(n,i)}),ii(n,s),ka(s,i=>{ii(n,i)}),t}function ii(n,e){const t=bn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(D(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(en(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sa(e,void 0):t.length=r+1,Lt(n.eventQueue_,es(e),i);for(let o=0;o<s.length;o++)Qn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function zd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Qe(`Invalid query segment '${t}' in query '${n}'`)}return e}const so=function(n,e){const t=Vd(n),s=t.namespace;t.domain==="firebase.com"&&yt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||th();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new xl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new ve(t.pathString)}},Vd=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Gd(n.substring(u,h)));const f=zd(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return se(this._path)?null:Vl(this._path)}get ref(){return new wt(this._repo,this._path)}get _queryIdentifier(){const e=$r(this._queryParams),t=xi(e);return t==="{}"?"default":t}get _queryObject(){return $r(this._queryParams)}isEqual(e){if(e=vn(e),!(e instanceof cr))return!1;const t=this._repo===e._repo,s=Kl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wh(this._path)}}class wt extends cr{constructor(e,t){super(e,t,new Gi,!1)}get parent(){const e=Yl(this._path);return e===null?null:new wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ve(e),s=Ii(this.ref,e);return new zn(this._node.getChild(t),s,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zn(i,Ii(this.ref,s),Te)))}hasChild(e){const t=new ve(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qd(n,e){return n=vn(n),n._checkNotDeleted("ref"),e!==void 0?Ii(n._root,e):n._root}function Ii(n,e){return n=vn(n),ie(n._path)===null?Sd("child","path",e,!1):Aa("child","path",e,!1),new wt(n._repo,De(n._path,e))}function Jd(n){n=vn(n);const e=new Kd(()=>{}),t=new ur(e);return Wd(n._repo,n,t).then(s=>new zn(s,new wt(n._repo,n._path),n._queryParams.getIndex()))}class ur{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new qd("value",this,new zn(e.snapshotNode,new wt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yd(this,e,t):null}matches(e){return e instanceof ur?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Xd(n,...e){let t=vn(n);for(const s of e)t=s._apply(t);return t}Kf(wt);ed(wt);/**
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
 */const Zd="FIREBASE_DATABASE_EMULATOR_HOST",Si={};let e_=!1;function t_(n,e,t,s){n.repoInfo_=new xl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function n_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=so(r,i),l=o.repoInfo,a,c;typeof process<"u"&&Ir&&(c=Ir[Zd]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=so(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new cn(cn.OWNER):new fh(n.name,n.options,e);Td("Invalid Firebase Database URL",o),se(o.path)||yt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=i_(l,n,u,new hh(n.name,t));return new r_(h,n)}function s_(n,e){const t=Si[e];(!t||t[n.key]!==n)&&yt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Hd(n),delete t[n.key]}function i_(n,e,t,s){let i=Si[e.name];i||(i={},Si[e.name]=i);let r=i[n.toURLString()];return r&&yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Od(n,e_,t,s),i[n.toURLString()]=r,r}class r_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Md(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wt(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(s_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yt("Cannot call "+e+" on a deleted database.")}}function o_(n=Wu(),e){const t=Mu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Tc("database");s&&l_(t,...s)}return t}function l_(n,e,t,s={}){n=vn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&yt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new cn(cn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:kc(s.mockUserToken,n.app.options.projectId);r=new cn(o)}t_(i,e,t,r)}/**
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
 */function a_(n){Qu(xu),ps(new Fn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return n_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),ln(Sr,Tr,n),ln(Sr,Tr,"esm2017")}gt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};gt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};a_();var Ti={},xa={},Gs={};Object.defineProperty(Gs,"__esModule",{value:!0});Gs.rotx=void 0;function c_(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}Gs.rotx=c_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=Gs;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(xa);var Wa={},zs={};Object.defineProperty(zs,"__esModule",{value:!0});zs.base64=void 0;class u_{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const h_=new u_;zs.base64=h_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=zs;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(Wa);var Ba={},Vs={};Object.defineProperty(Vs,"__esModule",{value:!0});Vs.hex=void 0;class f_{encode(e){let t="",s="";for(let i=0;i<e.length;i++)t=e.charCodeAt(i).toString(16),s+=("000"+t).slice(-4);return s}decode(e){let t=e.match(/.{1,4}/g)||[],s="";for(let i=0;i<t.length;i++)s+=String.fromCharCode(parseInt(t[i],16));return s}}const d_=new f_;Vs.hex=d_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=Vs;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(Ba);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=xa;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=Wa;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var s=Ba;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return s.hex}})})(Ti);let __={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},Ha={};for(let[n,e]of Object.entries(__))Ha[Ti.rotx(n,18)]=Ti.rotx(e,18);let Ns={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},Rs={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},p_=["head","body","legs","feet","neck","back","ring","misc"],m_=o_(yl(Ha)),mn="https://fantastic-frontier-roblox.fandom.com/wiki/",Mt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Ua={chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},g_={hardMode:!1,muted:!1},v_={gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},y_={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function ki(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function tn(n){n.target.closest("button").blur()}function hr(){ki("?ls=true"),setTimeout(ki)}let io=localStorage.getItem("fd-currentGameData"),ro=localStorage.getItem("fd-settings"),oo=localStorage.getItem("fd-playerStats"),it=bt(io?JSON.parse(io):Ua),St=bt(ro?JSON.parse(ro):g_),ct=bt(oo?JSON.parse(oo):v_),Ni=bt([]),lo=bt(""),Ke=bt({component:null,complete:!1}),Ds=bt(7),Vn=bt(!1),As=bt(!1);it.subscribe(n=>{hr(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});St.subscribe(n=>{hr(),Ds.set(n.hardMode?6:7),localStorage.setItem("fd-settings",JSON.stringify(n))});ct.subscribe(n=>{hr(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});function b_(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:h=p=>Math.sqrt(p)*120,easing:f=il}=s;return{delay:u,duration:zt(h)?h(Math.sqrt(a*a+c*c)):h,easing:f,css:(p,m)=>{const v=m*a,b=m*c,M=p+m*e.width/t.width,F=p+m*e.height/t.height;return`transform: ${r} translate(${v}px, ${b}px) scale(${M}, ${F});`}}}function ao(n,e,t){const s=n.slice();s[6]=e[t];const i=s[6].slot==s[0].slot;s[7]=i;const r=vo(s[0].stats,s[6].stats);s[8]=r;const o=s[8]==s[0].stats.length&&s[6].stats.length==s[0].stats.length;s[9]=o;const l=Math.ceil((s[6].cost.min+s[6].cost.max)/2);s[10]=l;const a=Math.ceil((s[0].cost.min+s[0].cost.max)/2);s[11]=a;const c=s[10]==s[11];s[12]=c;const u=vo(s[0].colors,s[6].colors);s[13]=u;const h=s[13]==s[0].colors.length&&s[6].colors.length==s[0].colors.length;s[14]=h;const f=s[6].outline==s[0].outline;s[15]=f;const p=s[6].release==s[0].release;return s[16]=p,s}function co(n,e,t){const s=n.slice();return s[19]=e[t],s}function uo(n,e,t){const s=n.slice();return s[22]=e[t],s}function C_(n){let e;return{c(){e=U("None")},m(t,s){R(t,e,s)},p:Z,d(t){t&&S(e)}}}function w_(n){let e,t=ge(n[6].stats),s=[];for(let i=0;i<t.length;i+=1)s[i]=ho(uo(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Tt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);R(i,e,r)},p(i,r){if(r&2){t=ge(i[6].stats);let o;for(o=0;o<t.length;o+=1){const l=uo(i,t,o);s[o]?s[o].p(l,r):(s[o]=ho(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),je(s,i)}}}function ho(n){let e=Rs[n[22]]+(n[22]==n[6].stats[n[6].stats.length-1]?"":", "),t;return{c(){t=U(e)},m(s,i){R(s,t,i)},p(s,i){i&2&&e!==(e=Rs[s[22]]+(s[22]==s[6].stats[s[6].stats.length-1]?"":", "))&&fe(t,e)},d(s){s&&S(t)}}}function fo(n){let e,t=n[8]+"",s;return{c(){e=g("span"),s=U(t),_(e,"class","bgInfo")},m(i,r){R(i,e,r),d(e,s)},p(i,r){r&3&&t!==(t=i[8]+"")&&fe(s,t)},d(i){i&&S(e)}}}function E_(n){let e=n[10].toLocaleString()+"",t,s,i,r;return{c(){t=U(e),s=I(),i=g("br"),r=U(`\r
                    Gold`)},m(o,l){R(o,t,l),R(o,s,l),R(o,i,l),R(o,r,l)},p(o,l){l&2&&e!==(e=o[10].toLocaleString()+"")&&fe(t,e)},d(o){o&&(S(t),S(s),S(i),S(r))}}}function I_(n){let e;return{c(){e=U("Unpurchasable")},m(t,s){R(t,e,s)},p:Z,d(t){t&&S(e)}}}function _o(n){let e,t;return{c(){e=g("iconify-icon"),Me(e,"class","bgInfo"),Me(e,"icon","mingcute:arrow-up-fill"),Me(e,"flip",t=n[10]>n[11]?"vertical":"")},m(s,i){R(s,e,i)},p(s,i){i&3&&t!==(t=s[10]>s[11]?"vertical":"")&&Me(e,"flip",t)},d(s){s&&S(e)}}}function po(n){let e=(n[19]==n[6].colors[0]?nn(n[19]):n[19])+(n[19]==n[6].colors[n[6].colors.length-1]?"":", "),t;return{c(){t=U(e)},m(s,i){R(s,t,i)},p(s,i){i&2&&e!==(e=(s[19]==s[6].colors[0]?nn(s[19]):s[19])+(s[19]==s[6].colors[s[6].colors.length-1]?"":", "))&&fe(t,e)},d(s){s&&S(t)}}}function mo(n){let e,t=n[13]+"",s;return{c(){e=g("span"),s=U(t),_(e,"class","bgInfo")},m(i,r){R(i,e,r),d(e,s)},p(i,r){r&3&&t!==(t=i[13]+"")&&fe(s,t)},d(i){i&&S(e)}}}function go(n,e){let t,s,i,r,o,l,a,c,u,h,f,p=e[6].name+"",m,v,b,M,F,C=nn(e[6].slot)+"",O,A,H,k,L,$,j,W,x,E,V,T,q,Q,de,pe,_e,he,ee,G,te=nn(e[6].outline)+"",le,N,B,re,Ee,ne=Ns[e[6].release]+"",P,ae,w,J,Et,Ft,Cn=Z,me,wn,ts;function ns(Y,ye){return Y[6].stats.length?w_:C_}let qt=ns(e),tt=qt(e),y=!e[2].hardMode&&e[8]&&!e[9]&&fo(e);function Ye(Y,ye){return Y[6].cost.min==null?I_:E_}let nt=Ye(e),st=nt(e),Ue=!e[2].hardMode&&!e[12]&&e[10]&&_o(e),Yt=ge(e[6].colors),We=[];for(let Y=0;Y<Yt.length;Y+=1)We[Y]=po(co(e,Yt,Y));let $e=!e[2].hardMode&&e[13]&&!e[14]&&mo(e);return{key:n,first:null,c(){t=g("div"),s=g("div"),i=g("a"),r=g("img"),a=I(),c=g("iconify-icon"),h=I(),f=g("span"),m=U(p),M=I(),F=g("span"),O=U(C),k=I(),L=g("span"),tt.c(),$=I(),y&&y.c(),x=I(),E=g("span"),st.c(),V=I(),Ue&&Ue.c(),Q=I(),de=g("span");for(let Y=0;Y<We.length;Y+=1)We[Y].c();pe=I(),$e&&$e.c(),ee=I(),G=g("span"),le=U(te),re=I(),Ee=g("span"),P=U(ne),ae=U(" Update"),Et=I(),Be(r.src,o=Mt+e[6].image)||_(r,"src",o),_(r,"alt",l=e[6].name),_(r,"class","svelte-pl04pb"),Me(c,"icon","tabler:link"),Me(c,"class","svelte-pl04pb"),_(i,"class","flex fjc-center fai-center svelte-pl04pb"),_(i,"href",u=mn+e[6].link),_(i,"target","_blank"),_(f,"class","tooltip"),_(f,"id","right"),_(s,"id","itemImage"),_(s,"class","ff-item svelte-pl04pb"),_(F,"class","ff-bg ff-item svelte-pl04pb"),_(F,"id",A=e[7]?"correct":"wrong"),_(L,"class","ff-bg ff-item svelte-pl04pb"),_(L,"id",j=e[9]?"correct":e[8]?"partial":"wrong"),pt(L,"smallerStats",e[6].stats.length>=7),_(E,"class","ff-bg ff-item svelte-pl04pb"),_(E,"id",T=e[12]?"correct":"wrong"),_(de,"class","ff-bg ff-item svelte-pl04pb"),_(de,"id",_e=e[14]?"correct":e[13]?"partial":"wrong"),_(G,"class","ff-bg ff-item svelte-pl04pb"),_(G,"id",N=e[15]?"correct":"wrong"),_(Ee,"class","ff-bg ff-item svelte-pl04pb"),_(Ee,"id",w=e[16]?"correct":"wrong"),_(t,"class","itemRow svelte-pl04pb"),this.first=t},m(Y,ye){R(Y,t,ye),d(t,s),d(s,i),d(i,r),d(i,a),d(i,c),d(s,h),d(s,f),d(f,m),d(t,M),d(t,F),d(F,O),d(t,k),d(t,L),tt.m(L,null),d(L,$),y&&y.m(L,null),d(t,x),d(t,E),st.m(E,null),d(E,V),Ue&&Ue.m(E,null),d(t,Q),d(t,de);for(let Le=0;Le<We.length;Le+=1)We[Le]&&We[Le].m(de,null);d(de,pe),$e&&$e.m(de,null),d(t,ee),d(t,G),d(G,le),d(t,re),d(t,Ee),d(Ee,P),d(Ee,ae),d(t,Et),me=!0,wn||(ts=[qa(v=e[4].call(null,s,[e[7],e[8],e[9],e[12],e[13],e[14],e[15],e[16]])),ke(Ee,"introend",e[5])],wn=!0)},p(Y,ye){if(e=Y,(!me||ye&2&&!Be(r.src,o=Mt+e[6].image))&&_(r,"src",o),(!me||ye&2&&l!==(l=e[6].name))&&_(r,"alt",l),(!me||ye&2&&u!==(u=mn+e[6].link))&&_(i,"href",u),(!me||ye&2)&&p!==(p=e[6].name+"")&&fe(m,p),v&&zt(v.update)&&ye&3&&v.update.call(null,[e[7],e[8],e[9],e[12],e[13],e[14],e[15],e[16]]),(!me||ye&2)&&C!==(C=nn(e[6].slot)+"")&&fe(O,C),(!me||ye&3&&A!==(A=e[7]?"correct":"wrong"))&&_(F,"id",A),qt===(qt=ns(e))&&tt?tt.p(e,ye):(tt.d(1),tt=qt(e),tt&&(tt.c(),tt.m(L,$))),!e[2].hardMode&&e[8]&&!e[9]?y?y.p(e,ye):(y=fo(e),y.c(),y.m(L,null)):y&&(y.d(1),y=null),(!me||ye&3&&j!==(j=e[9]?"correct":e[8]?"partial":"wrong"))&&_(L,"id",j),(!me||ye&2)&&pt(L,"smallerStats",e[6].stats.length>=7),nt===(nt=Ye(e))&&st?st.p(e,ye):(st.d(1),st=nt(e),st&&(st.c(),st.m(E,V))),!e[2].hardMode&&!e[12]&&e[10]?Ue?Ue.p(e,ye):(Ue=_o(e),Ue.c(),Ue.m(E,null)):Ue&&(Ue.d(1),Ue=null),(!me||ye&3&&T!==(T=e[12]?"correct":"wrong"))&&_(E,"id",T),ye&2){Yt=ge(e[6].colors);let Le;for(Le=0;Le<Yt.length;Le+=1){const fr=co(e,Yt,Le);We[Le]?We[Le].p(fr,ye):(We[Le]=po(fr),We[Le].c(),We[Le].m(de,pe))}for(;Le<We.length;Le+=1)We[Le].d(1);We.length=Yt.length}!e[2].hardMode&&e[13]&&!e[14]?$e?$e.p(e,ye):($e=mo(e),$e.c(),$e.m(de,null)):$e&&($e.d(1),$e=null),(!me||ye&3&&_e!==(_e=e[14]?"correct":e[13]?"partial":"wrong"))&&_(de,"id",_e),(!me||ye&2)&&te!==(te=nn(e[6].outline)+"")&&fe(le,te),(!me||ye&3&&N!==(N=e[15]?"correct":"wrong"))&&_(G,"id",N),(!me||ye&2)&&ne!==(ne=Ns[e[6].release]+"")&&fe(P,ne),(!me||ye&3&&w!==(w=e[16]?"correct":"wrong"))&&_(Ee,"id",w)},r(){Ft=t.getBoundingClientRect()},f(){sc(t),Cn()},a(){Cn(),Cn=nc(t,Ft,b_,{duration:125})},i(Y){me||(Y&&Ne(()=>{me&&(b||(b=be(s,Ae,{duration:300},!0)),b.run(1))}),Y&&Ne(()=>{me&&(H||(H=be(F,Ae,{duration:300,delay:250},!0)),H.run(1))}),Y&&Ne(()=>{me&&(W||(W=be(L,Ae,{duration:300,delay:550},!0)),W.run(1))}),Y&&Ne(()=>{me&&(q||(q=be(E,Ae,{duration:300,delay:850},!0)),q.run(1))}),Y&&Ne(()=>{me&&(he||(he=be(de,Ae,{duration:300,delay:1150},!0)),he.run(1))}),Y&&Ne(()=>{me&&(B||(B=be(G,Ae,{duration:300,delay:1450},!0)),B.run(1))}),Y&&Ne(()=>{me&&(J||(J=be(Ee,Ae,{duration:300,delay:1750},!0)),J.run(1))}),me=!0)},o(Y){Y&&(b||(b=be(s,Ae,{duration:300},!1)),b.run(0)),Y&&(H||(H=be(F,Ae,{duration:300,delay:250},!1)),H.run(0)),Y&&(W||(W=be(L,Ae,{duration:300,delay:550},!1)),W.run(0)),Y&&(q||(q=be(E,Ae,{duration:300,delay:850},!1)),q.run(0)),Y&&(he||(he=be(de,Ae,{duration:300,delay:1150},!1)),he.run(0)),Y&&(B||(B=be(G,Ae,{duration:300,delay:1450},!1)),B.run(0)),Y&&(J||(J=be(Ee,Ae,{duration:300,delay:1750},!1)),J.run(0)),me=!1},d(Y){Y&&S(t),Y&&b&&b.end(),Y&&H&&H.end(),tt.d(),y&&y.d(),Y&&W&&W.end(),st.d(),Ue&&Ue.d(),Y&&q&&q.end(),je(We,Y),$e&&$e.d(),Y&&he&&he.end(),Y&&B&&B.end(),Y&&J&&J.end(),wn=!1,Ve(ts)}}}function S_(n){let e,t,s,i=[],r=new Map,o,l=ge(n[1].chosenItems.toReversed());const a=c=>c[6];for(let c=0;c<l.length;c+=1){let u=ao(n,l,c),h=a(u);r.set(h,i[c]=go(h,u))}return{c(){e=g("div"),t=g("div"),t.innerHTML='<span class="ff-item svelte-pl04pb">Item</span> <span class="ff-item svelte-pl04pb">Slot</span> <span class="ff-item svelte-pl04pb">Stats</span> <span class="ff-item svelte-pl04pb">Avg. Cost</span> <span class="ff-item svelte-pl04pb">Colors</span> <span class="ff-item svelte-pl04pb">Outline</span> <span class="ff-item svelte-pl04pb">Release</span>',s=I();for(let c=0;c<i.length;c+=1)i[c].c();_(t,"id","categories"),_(t,"class","svelte-pl04pb"),_(e,"class","gameboard ff-bg fd-col flex posrel border-tp svelte-pl04pb")},m(c,u){R(c,e,u),d(e,t),d(e,s);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(e,null);o=!0},p(c,[u]){if(u&15){l=ge(c[1].chosenItems.toReversed()),ot();for(let h=0;h<i.length;h+=1)i[h].r();i=_c(i,u,a,1,c,l,r,e,dc,go,null,ao);for(let h=0;h<i.length;h+=1)i[h].a();lt()}},i(c){if(!o){for(let u=0;u<l.length;u+=1)K(i[u]);o=!0}},o(c){for(let u=0;u<i.length;u+=1)ce(i[u]);o=!1},d(c){c&&S(e);for(let u=0;u<i.length;u+=1)i[u].d()}}}function nn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function vo(n,e){return n.filter(s=>e.includes(s)).length}function T_(n,e,t){let s,i,r;Se(n,it,c=>t(1,s=c)),Se(n,St,c=>t(2,i=c)),Se(n,Vn,c=>t(3,r=c));let{dailyItemData:o}=e;function l(c,[u,h,f,p,m,v,b,M]){s.chosenItems.length==s.rowInfo.length+1&&it.update(F=>({...F,rowInfo:[...F.rowInfo,[u,f?1:h?0:-1,p,v?1:m?0:-1,b,M]]}))}const a=()=>oe(Vn,r=!1,r);return n.$$set=c=>{"dailyItemData"in c&&t(0,o=c.dailyItemData)},[o,s,i,r,l,a]}class k_ extends et{constructor(e){super(),Ze(this,e,T_,S_,qe,{dailyItemData:0})}}function N_(n){let e,t,s,i;return{c(){e=g("div"),t=g("input"),_(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],_(t,"type","checkbox"),t.checked=n[1],_(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),pt(e,"unavailable",n[2]),hn(e,"--s",`${n[0]}rem`)},m(r,o){R(r,e,o),d(e,t),s||(i=[ke(t,"change",n[5]),ke(t,"keydown",n[6])],s=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&pt(e,"unavailable",r[2]),o&1&&hn(e,"--s",`${r[0]}rem`)},i:Z,o:Z,d(r){r&&S(e),s=!1,Ve(i)}}}function R_(n,e,t){let{size:s,checked:i=!1,disabled:r=!1,forced:o=!1}=e;const l=oc(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,s=u.size),"checked"in u&&t(1,i=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[s,i,r,o,l,a,c]}class D_ extends et{constructor(e){super(),Ze(this,e,R_,N_,qe,{size:0,checked:1,disabled:2,forced:3})}}function yo(n,e,t){const s=n.slice();s[16]=e[t];const i=s[7].chosenItems.find(function(...o){return n[14](s[16],...o)})!=null;return s[17]=i,s}function bo(n){let e,t,s,i=ge(n[3]),r=[];for(let o=0;o<i.length;o+=1)r[o]=Co(yo(n,i,o));return{c(){e=g("div");for(let o=0;o<r.length;o+=1)r[o].c();_(e,"class","itemList ff-bg flex fd-col svelte-1k366gl")},m(o,l){R(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[15](e),s=!0},p(o,l){if(l&680){i=ge(o[3]);let a;for(a=0;a<i.length;a+=1){const c=yo(o,i,a);r[a]?r[a].p(c,l):(r[a]=Co(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}},i(o){s||(o&&Ne(()=>{s&&(t||(t=be(e,vt,{duration:75},!0)),t.run(1))}),s=!0)},o(o){o&&(t||(t=be(e,vt,{duration:75},!1)),t.run(0)),s=!1},d(o){o&&S(e),je(r,o),n[15](null),o&&t&&t.end()}}}function Co(n){let e,t,s,i,r,o=n[16].name+"",l,a,c,u,h;function f(){return n[13](n[17],n[16])}return{c(){e=g("button"),t=g("img"),i=I(),r=g("span"),l=U(o),a=I(),Be(t.src,s=Mt+n[16].image)||_(t,"src",s),_(t,"alt",""),_(t,"class","svelte-1k366gl"),e.disabled=c=n[17],_(e,"class","listItem flex fai-center no-bg-change svelte-1k366gl"),pt(e,"unavailable",n[17])},m(p,m){R(p,e,m),d(e,t),d(e,i),d(e,r),d(r,l),d(e,a),u||(h=ke(e,"click",f),u=!0)},p(p,m){n=p,m&8&&!Be(t.src,s=Mt+n[16].image)&&_(t,"src",s),m&8&&o!==(o=n[16].name+"")&&fe(l,o),m&136&&c!==(c=n[17])&&(e.disabled=c),m&136&&pt(e,"unavailable",n[17])},d(p){p&&S(e),u=!1,h()}}}function A_(n){let e,t,s,i,r,o,l=n[6].length&&n[3].length&&n[4]&&bo(n);return{c(){e=g("input"),s=I(),l&&l.c(),i=Tt(),e.disabled=n[5],_(e,"type","text"),_(e,"class","searcherInput svelte-1k366gl"),_(e,"placeholder",t=`Guess the item for game #${n[0]+1}...`)},m(a,c){R(a,e,c),n[11](e),R(a,s,c),l&&l.m(a,c),R(a,i,c),r||(o=[ke(window,"mousedown",n[10]),ke(e,"input",n[8]),ke(e,"focusin",n[12])],r=!0)},p(a,[c]){c&32&&(e.disabled=a[5]),c&1&&t!==(t=`Guess the item for game #${a[0]+1}...`)&&_(e,"placeholder",t),a[6].length&&a[3].length&&a[4]?l?(l.p(a,c),c&88&&K(l,1)):(l=bo(a),l.c(),K(l,1),l.m(i.parentNode,i)):l&&(ot(),ce(l,1,1,()=>{l=null}),lt())},i(a){K(l)},o(a){ce(l)},d(a){a&&(S(e),S(s),S(i)),n[11](null),l&&l.d(a),r=!1,Ve(o)}}}function P_(n,e,t){let s,i,r;Se(n,Vn,C=>t(5,s=C)),Se(n,Ni,C=>t(6,i=C)),Se(n,it,C=>t(7,r=C));let{gameNumber:o}=e,l,a,c=[],u=!1;function h(){let C=l.value.toLowerCase();if(t(3,c=[]),!!C)for(let O of i)O.name.toLowerCase().includes(C)&&c.push(O)}function f(C){s||(it.update(O=>({...O,chosenItems:[...O.chosenItems,C]})),t(1,l.value="",l),h())}const p=C=>{a&&C.target!=l&&!a.contains(C.target)&&t(4,u=!1)};function m(C){rt[C?"unshift":"push"](()=>{l=C,t(1,l)})}const v=()=>t(4,u=!0),b=(C,O)=>{C||(f(O),oe(Vn,s=!0,s))},M=(C,O)=>O.name==C.name;function F(C){rt[C?"unshift":"push"](()=>{a=C,t(2,a)})}return n.$$set=C=>{"gameNumber"in C&&t(0,o=C.gameNumber)},[o,l,a,c,u,s,i,r,h,f,p,m,v,b,M,F]}class O_ extends et{constructor(e){super(),Ze(this,e,P_,A_,qe,{gameNumber:0})}}function wo(n){let e,t,s;return{c(){e=g("span"),_(e,"id","HPFlash"),_(e,"class","svelte-9b9oo1")},m(i,r){R(i,e,r),s=!0},i(i){s||(t&&t.end(1),s=!0)},o(i){i&&(t=hc(e,vt,{duration:200})),s=!1},d(i){i&&S(e),i&&t&&t.end()}}}function M_(n){let e,t,s,i,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,h,f,p,m,v,b=n[4].hardMode?"You've lost your remaining armor.":"Your armor is protecting you.",M,F,C,O,A,H,k,L,$,j,W,x=n[1]&&wo();function E(T){n[6](T)}let V={};return n[0]!==void 0&&(V.gameNumber=n[0]),$=new O_({props:V}),rt.push(()=>Ls($,"gameNumber",E)),{c(){e=g("div"),t=g("div"),s=g("div"),i=g("div"),r=g("div"),o=g("span"),a=U(l),c=U("/600"),u=I(),h=g("button"),f=g("img"),m=I(),v=g("span"),M=U(b),F=I(),C=g("br"),O=U(`\r
                You can take `),A=U(n[2]),H=U(" hits at most!"),k=I(),x&&x.c(),L=I(),at($.$$.fragment),_(o,"class","svelte-9b9oo1"),_(r,"class","HPBackground svelte-9b9oo1"),hn(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),_(i,"class","innerGameHP flex posrel svelte-9b9oo1"),_(s,"class","outerGameHP posrel svelte-9b9oo1"),Be(f.src,p="misc/armor.svg")||_(f,"src",p),_(f,"alt","Armor"),_(f,"class","svelte-9b9oo1"),pt(f,"noArmor",n[4].hardMode),_(v,"class","tooltip svelte-9b9oo1"),_(v,"id","right"),_(h,"class","posrel br-1 svelte-9b9oo1"),_(h,"id","armorIcon"),_(t,"class","gameHPCont flex svelte-9b9oo1"),_(e,"class","currentGameInfo ff-bg flex fjc-center fai-center posrel border-tp br-1 svelte-9b9oo1")},m(T,q){R(T,e,q),d(e,t),d(t,s),d(s,i),d(i,r),d(r,o),d(o,a),d(o,c),d(t,u),d(t,h),d(h,f),d(h,m),d(h,v),d(v,M),d(v,F),d(v,C),d(v,O),d(v,A),d(v,H),d(e,k),x&&x.m(e,null),d(e,L),Je($,e,null),W=!0},p(T,[q]){(!W||q&12)&&l!==(l=Math.round(600-T[3].chosenItems.length*(600/T[2]))+"")&&fe(a,l),q&12&&hn(r,"width",`${Math.floor(100*(T[2]-T[3].chosenItems.length)/T[2])}%`),(!W||q&16)&&pt(f,"noArmor",T[4].hardMode),(!W||q&16)&&b!==(b=T[4].hardMode?"You've lost your remaining armor.":"Your armor is protecting you.")&&fe(M,b),(!W||q&4)&&fe(A,T[2]),T[1]?x?q&2&&K(x,1):(x=wo(),x.c(),K(x,1),x.m(e,L)):x&&(ot(),ce(x,1,1,()=>{x=null}),lt());const Q={};!j&&q&1&&(j=!0,Q.gameNumber=T[0],Ms(()=>j=!1)),$.$set(Q)},i(T){W||(K(x),K($.$$.fragment,T),W=!0)},o(T){ce(x),ce($.$$.fragment,T),W=!1},d(T){T&&S(e),x&&x.d(),Xe($)}}}function L_(n,e,t){let s,i,r,o;Se(n,Vn,u=>t(5,s=u)),Se(n,Ds,u=>t(2,i=u)),Se(n,it,u=>t(3,r=u)),Se(n,St,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&s&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,i,r,o,s,c]}class F_ extends et{constructor(e){super(),Ze(this,e,L_,M_,qe,{gameNumber:0})}}function Eo(n,e,t){const s=n.slice();return s[8]=e[t],s}function Io(n,e,t){const s=n.slice();return s[11]=e[t],s}function So(n){let e,t=(n[11]===!0||n[11]===1?n[3].html.blue:n[11]===0?n[3].html.yellow:n[11]===!1||n[11]===-1?n[3].html.red:null)+"",s;return{c(){e=new Zo(!1),s=Tt(),e.a=s},m(i,r){e.m(t,i,r),R(i,s,r)},p(i,r){r&4&&t!==(t=(i[11]===!0||i[11]===1?i[3].html.blue:i[11]===0?i[3].html.yellow:i[11]===!1||i[11]===-1?i[3].html.red:null)+"")&&e.p(t)},d(i){i&&(S(s),e.d())}}}function To(n){let e,t,s=ge(n[8]),i=[];for(let r=0;r<s.length;r+=1)i[r]=So(Io(n,s,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=I(),t=g("br")},m(r,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(r,o);R(r,e,o),R(r,t,o)},p(r,o){if(o&12){s=ge(r[8]);let l;for(l=0;l<s.length;l+=1){const a=Io(r,s,l);i[l]?i[l].p(a,o):(i[l]=So(a),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},d(r){r&&(S(e),S(t)),je(i,r)}}}function x_(n){let e,t,s,i,r,o,l,a,c,u,h,f,p,m,v=n[1]?"Copied!":"Copy",b,M,F,C=ge(n[2].rowInfo.toReversed()),O=[];for(let A=0;A<C.length;A+=1)O[A]=To(Eo(n,C,A));return{c(){e=g("div"),t=g("span"),t.textContent="Game Stats",s=I(),i=g("span"),r=U(n[4]),o=I(),l=g("br"),a=I();for(let A=0;A<O.length;A+=1)O[A].c();c=I(),u=g("button"),h=U(`Share Stats\r
        `),f=g("iconify-icon"),p=I(),m=g("span"),b=U(v),_(i,"class","smaller-fs"),Me(f,"icon","ri:share-fill"),_(m,"class","tooltip"),_(m,"id","top"),_(u,"class","flex fai-center posrel border-tp br-1 smaller-fs svelte-14jqt1l"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1")},m(A,H){R(A,e,H),d(e,t),d(e,s),d(e,i),d(i,r),d(i,o),d(i,l),d(i,a);for(let k=0;k<O.length;k+=1)O[k]&&O[k].m(i,null);d(e,c),d(e,u),d(u,h),d(u,f),d(u,p),d(u,m),d(m,b),M||(F=ke(u,"click",n[6]),M=!0)},p(A,[H]){if(H&12){C=ge(A[2].rowInfo.toReversed());let k;for(k=0;k<C.length;k+=1){const L=Eo(A,C,k);O[k]?O[k].p(L,H):(O[k]=To(L),O[k].c(),O[k].m(i,null))}for(;k<O.length;k+=1)O[k].d(1);O.length=C.length}H&2&&v!==(v=A[1]?"Copied!":"Copy")&&fe(b,v)},i:Z,o:Z,d(A){A&&S(e),je(O,A),M=!1,F()}}}function W_(n,e,t){let s,i;Se(n,it,h=>t(2,s=h)),Se(n,St,h=>t(7,i=h));let{gameNumber:r}=e,o={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},l=`${i.hardMode?"(Nightmare)":""} Frontierdle #${r+1}`,a="",c=!1;setTimeout(()=>{for(let h of s.rowInfo.toReversed()){let f="";for(let p of h)f+=p===!0||p===1?o.js.blue:p===0?o.js.yellow:p===!1||p===-1?o.js.red:null;t(0,a+=f+`
`)}});const u=()=>{navigator.clipboard.writeText(`${l}
${a}
${location.origin+location.pathname}`),t(1,c=!0),setTimeout(()=>t(1,c=!1),1e3)};return n.$$set=h=>{"gameNumber"in h&&t(5,r=h.gameNumber)},[a,c,s,o,l,r,u]}class B_ extends et{constructor(e){super(),Ze(this,e,W_,x_,qe,{gameNumber:5})}}function ko(n,e,t){const s=n.slice();return s[3]=e[t][0],s[4]=e[t][1],s[6]=t,s}function No(n){let e,t,s=n[3]+"",i,r,o,l,a,c=n[4]+"",u,h;return{c(){e=g("div"),t=g("span"),i=U(s),r=I(),o=g("span"),o.innerHTML="",l=I(),a=g("span"),u=U(c),h=I(),_(t,"id","guessNum"),_(t,"class","svelte-mzhi8s"),_(o,"class","posrel border-tp svelte-mzhi8s"),_(o,"id","winsBar"),hn(o,"width",`${n[4]*80/n[2]}%`),_(a,"class","smaller-fs svelte-mzhi8s"),_(a,"id","winsNum"),_(e,"class","flex fai-center svelte-mzhi8s")},m(f,p){R(f,e,p),d(e,t),d(t,i),d(e,r),d(e,o),d(e,l),d(e,a),d(a,u),d(e,h)},p(f,p){p&2&&s!==(s=f[3]+"")&&fe(i,s),p&2&&hn(o,"width",`${f[4]*80/f[2]}%`),p&2&&c!==(c=f[4]+"")&&fe(u,c)},d(f){f&&S(e)}}}function H_(n){let e,t,s,i,r,o,l,a=n[1].gamesPlayed+"",c,u,h,f,p,m,v=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"",b,M,F,C,O,A,H,k=n[1].streak+"",L,$,j,W,x,E,V=n[1].maxStreak+"",T,q,Q,de,pe,_e,he,ee,G,te=ge(Object.entries(n[1].winInfo)),le=[];for(let N=0;N<te.length;N+=1)le[N]=No(ko(n,te,N));return{c(){e=g("div"),t=g("span"),t.textContent="Your Stats",s=I(),i=g("div"),r=g("div"),o=g("div"),l=g("span"),c=U(a),u=I(),h=g("span"),h.textContent="Games Played",f=I(),p=g("div"),m=g("span"),b=U(v),M=U("%"),F=I(),C=g("span"),C.textContent="Win Rate",O=I(),A=g("div"),H=g("span"),L=U(k),$=I(),j=g("span"),j.textContent="Current Streak",W=I(),x=g("div"),E=g("span"),T=U(V),q=I(),Q=g("span"),Q.textContent="Max Streak",de=I(),pe=g("span"),pe.textContent="Win Distribution",_e=I(),he=g("div");for(let N=0;N<le.length;N+=1)le[N].c();_(h,"id","statsTitle"),_(h,"class","svelte-mzhi8s"),_(o,"class","svelte-mzhi8s"),_(C,"id","statsTitle"),_(C,"class","svelte-mzhi8s"),_(p,"class","svelte-mzhi8s"),_(j,"id","statsTitle"),_(j,"class","svelte-mzhi8s"),_(A,"class","svelte-mzhi8s"),_(Q,"id","statsTitle"),_(Q,"class","svelte-mzhi8s"),_(x,"class","svelte-mzhi8s"),_(r,"class","flex svelte-mzhi8s"),_(r,"id","playerStatsInfo"),_(pe,"class","smaller-fs"),_(he,"class","flex fd-col smaller-fs svelte-mzhi8s"),_(he,"id","distributionChart"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1"),_(e,"id","playerStats")},m(N,B){R(N,e,B),d(e,t),d(e,s),d(e,i),d(i,r),d(r,o),d(o,l),d(l,c),d(o,u),d(o,h),d(r,f),d(r,p),d(p,m),d(m,b),d(m,M),d(p,F),d(p,C),d(r,O),d(r,A),d(A,H),d(H,L),d(A,$),d(A,j),d(r,W),d(r,x),d(x,E),d(E,T),d(x,q),d(x,Q),d(e,de),d(e,pe),d(e,_e),d(e,he);for(let re=0;re<le.length;re+=1)le[re]&&le[re].m(he,null);G=!0},p(N,[B]){if(n=N,(!G||B&2)&&a!==(a=n[1].gamesPlayed+"")&&fe(c,a),(!G||B&2)&&v!==(v=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"")&&fe(b,v),(!G||B&2)&&k!==(k=n[1].streak+"")&&fe(L,k),(!G||B&2)&&V!==(V=n[1].maxStreak+"")&&fe(T,V),B&6){te=ge(Object.entries(n[1].winInfo));let re;for(re=0;re<te.length;re+=1){const Ee=ko(n,te,re);le[re]?le[re].p(Ee,B):(le[re]=No(Ee),le[re].c(),le[re].m(he,null))}for(;re<le.length;re+=1)le[re].d(1);le.length=te.length}},i(N){G||(N&&Ne(()=>{G&&(ee||(ee=be(e,Ae,{duration:n[0]?200:0},!0)),ee.run(1))}),G=!0)},o(N){N&&(ee||(ee=be(e,Ae,{duration:n[0]?200:0},!1)),ee.run(0)),G=!1},d(N){N&&S(e),je(le,N),N&&ee&&ee.end()}}}function U_(n,e,t){let s;Se(n,ct,o=>t(1,s=o));let{prompted:i=!1}=e,r=Math.max(...Object.values(s.winInfo));return n.$$set=o=>{"prompted"in o&&t(0,i=o.prompted)},[i,s,r]}class $a extends et{constructor(e){super(),Ze(this,e,U_,H_,qe,{prompted:0})}}function Ro(n,e,t){const s=n.slice();return s[5]=e[t],s}function $_(n){let e,t=ge(n[1]),s=[];for(let i=0;i<t.length;i+=1)s[i]=Do(Ro(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Tt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);R(i,e,r)},p(i,r){if(r&2){t=ge(i[1]);let o;for(o=0;o<t.length;o+=1){const l=Ro(i,t,o);s[o]?s[o].p(l,r):(s[o]=Do(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),je(s,i)}}}function j_(n){let e,t,s;return{c(){e=g("span"),t=U("— "),s=U(n[1]),_(e,"id","info"),_(e,"class","svelte-hhfk27")},m(i,r){R(i,e,r),d(e,t),d(e,s)},p(i,r){r&2&&fe(s,i[1])},d(i){i&&S(e)}}}function Do(n){let e,t,s=n[5]+"",i;return{c(){e=g("span"),t=U("— "),i=U(s),_(e,"id","info"),_(e,"class","svelte-hhfk27")},m(r,o){R(r,e,o),d(e,t),d(e,i)},p(r,o){o&2&&s!==(s=r[5]+"")&&fe(i,s)},d(r){r&&S(e)}}}function G_(n){let e,t,s,i,r,o,l;function a(h,f){return typeof h[1]=="string"?j_:$_}let c=a(n),u=c(n);return{c(){e=g("li"),t=g("span"),s=U("v"),i=U(n[0]),r=I(),o=g("i"),o.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":y_[n[2][0]%10])+", 20"+n[2][2]}`,l=I(),u.c(),_(t,"id","version"),_(t,"class","svelte-hhfk27"),_(o,"id","date"),_(o,"class","svelte-hhfk27"),_(e,"class","flex fai-center svelte-hhfk27")},m(h,f){R(h,e,f),d(e,t),d(t,s),d(t,i),d(e,r),d(e,o),d(e,l),u.m(e,null)},p(h,[f]){f&1&&fe(i,h[0]),c===(c=a(h))&&u?u.p(h,f):(u.d(1),u=c(h),u&&(u.c(),u.m(e,null)))},i:Z,o:Z,d(h){h&&S(e),u.d()}}}function z_(n,e,t){let{version:s,date:i,text:r}=e,o=i.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,s=a.version),"date"in a&&t(4,i=a.date),"text"in a&&t(1,r=a.text)},[s,r,o,l,i]}class V_ extends et{constructor(e){super(),Ze(this,e,z_,G_,qe,{version:0,date:4,text:1})}}function q_(n){let e,t,s,i,r;return i=new V_({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=g("span"),e.textContent="Changelog",t=I(),s=g("ul"),at(i.$$.fragment),_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-1hn7lke"),_(s,"id","contents")},m(o,l){R(o,e,l),R(o,t,l),R(o,s,l),Je(i,s,null),r=!0},p:Z,i(o){r||(K(i.$$.fragment,o),r=!0)},o(o){ce(i.$$.fragment,o),r=!1},d(o){o&&(S(e),S(t),S(s)),Xe(i)}}}class Y_ extends et{constructor(e){super(),Ze(this,e,null,q_,qe,{})}}function K_(n){let e,t,s;return{c(){e=g("span"),e.textContent="Credits",t=I(),s=g("div"),s.innerHTML=`<p class="flex fai-center svelte-19w41p3">This is a personal project. Contact me directly on
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
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,_(e,"class","title"),_(s,"class","smaller-fs"),_(s,"id","contents")},m(i,r){R(i,e,r),R(i,t,r),R(i,s,r)},p:Z,i:Z,o:Z,d(i){i&&(S(e),S(t),S(s))}}}class Q_ extends et{constructor(e){super(),Ze(this,e,null,K_,qe,{})}}function Ao(n,e,t){const s=n.slice();return s[1]=e[t],s}function J_(n,e,t){const s=n.slice();return s[4]=e[t],s}function X_(n,e,t){const s=n.slice();return s[7]=e[t],s}function Po(n,e,t){const s=n.slice();return s[10]=e[t],s}function Z_(n,e,t){const s=n.slice();return s[13]=e[t],s}function ep(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[13].charAt(0).toUpperCase()+n[13].slice(1)} `},m(t,s){R(t,e,s)},p:Z,d(t){t&&S(e)}}}function Oo(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[10]} `},m(t,s){R(t,e,s)},p:Z,d(t){t&&S(e)}}}function tp(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[7]}`},m(t,s){R(t,e,s)},p:Z,d(t){t&&S(e)}}}function np(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[4]}`},m(t,s){R(t,e,s)},p:Z,d(t){t&&S(e)}}}function Mo(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[1]} Update`},m(t,s){R(t,e,s)},p:Z,d(t){t&&S(e)}}}function sp(n){let e,t,s,i,r,o,l,a,c,u,h,f,p,m,v,b,M,F,C,O,A,H,k,L,$,j,W,x,E,V,T,q,Q,de,pe,_e,he=ge(p_),ee=[];for(let P=0;P<he.length;P+=1)ee[P]=ep(Z_(n,he,P));let G=ge(Object.values(Rs)),te=[];for(let P=0;P<G.length;P+=1)te[P]=Oo(Po(n,G,P));let le=ge(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),N=[];for(let P=0;P<12;P+=1)N[P]=tp(X_(n,le,P));let B=ge(["Black","Blue","Green","Purple","Red","White","Yellow"]),re=[];for(let P=0;P<7;P+=1)re[P]=np(J_(n,B,P));let Ee=ge(Object.values(Ns).slice(0,-1)),ne=[];for(let P=0;P<Ee.length;P+=1)ne[P]=Mo(Ao(n,Ee,P));return{c(){e=g("span"),e.textContent="Help",t=I(),s=g("div"),i=g("p"),i.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece from\r
        Fantastic Frontier, which changes every day.`,r=I(),o=g("div"),o.innerHTML=`<span class="title">Color Guide</span> <div class="flex svelte-sr8e7f" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-sr8e7f" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-sr8e7f" id="partial">Partial
                <span class="bgInfo svelte-sr8e7f">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-sr8e7f" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-sr8e7f" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,l=I(),a=g("span"),a.textContent="Categories",c=I(),u=g("p"),h=g("span"),f=g("b"),f.textContent="Slot:",p=I(),m=g("ul");for(let P=0;P<ee.length;P+=1)ee[P].c();v=I(),b=g("span"),M=g("b"),M.textContent="Stats:",F=I(),C=g("ul");for(let P=0;P<te.length;P+=1)te[P].c();O=I(),A=g("span"),A.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item can be purchased at.
                &quot;Unpurchasable&quot; if it cannot be purchased, equivalent to 0 for
                the game&#39;s purposes.</span>`,H=I(),k=g("span"),L=g("b"),L.textContent="Colors:",$=I(),j=g("ul");for(let P=0;P<12;P+=1)N[P].c();W=I(),x=g("span"),E=g("b"),E.textContent="Outline:",V=I(),T=g("ul");for(let P=0;P<7;P+=1)re[P].c();q=I(),Q=g("span"),de=g("b"),de.textContent="Release:",pe=I(),_e=g("ul");for(let P=0;P<ne.length;P+=1)ne[P].c();_(e,"class","title"),_(o,"class","flex fd-col fai-center"),_(a,"class","title"),_(f,"class","svelte-sr8e7f"),_(m,"class","svelte-sr8e7f"),_(h,"class","flex fd-col list svelte-sr8e7f"),_(M,"class","svelte-sr8e7f"),_(C,"class","svelte-sr8e7f"),_(b,"class","flex fd-col list svelte-sr8e7f"),_(A,"class","flex fd-col limit-width svelte-sr8e7f"),_(L,"class","svelte-sr8e7f"),_(j,"class","svelte-sr8e7f"),_(k,"class","flex fd-col list svelte-sr8e7f"),_(E,"class","svelte-sr8e7f"),_(T,"class","svelte-sr8e7f"),_(x,"class","flex fd-col list svelte-sr8e7f"),_(de,"class","svelte-sr8e7f"),_(_e,"class","svelte-sr8e7f"),_(Q,"class","flex fd-col list svelte-sr8e7f"),_(u,"class","flex fjc-center smaller-fs svelte-sr8e7f"),_(u,"id","categories"),_(s,"class","flex fd-col smaller-fs svelte-sr8e7f"),_(s,"id","contents")},m(P,ae){R(P,e,ae),R(P,t,ae),R(P,s,ae),d(s,i),d(s,r),d(s,o),d(s,l),d(s,a),d(s,c),d(s,u),d(u,h),d(h,f),d(h,p),d(h,m);for(let w=0;w<ee.length;w+=1)ee[w]&&ee[w].m(m,null);d(u,v),d(u,b),d(b,M),d(b,F),d(b,C);for(let w=0;w<te.length;w+=1)te[w]&&te[w].m(C,null);d(u,O),d(u,A),d(u,H),d(u,k),d(k,L),d(k,$),d(k,j);for(let w=0;w<12;w+=1)N[w]&&N[w].m(j,null);d(u,W),d(u,x),d(x,E),d(x,V),d(x,T);for(let w=0;w<7;w+=1)re[w]&&re[w].m(T,null);d(u,q),d(u,Q),d(Q,de),d(Q,pe),d(Q,_e);for(let w=0;w<ne.length;w+=1)ne[w]&&ne[w].m(_e,null)},p(P,[ae]){if(ae&0){G=ge(Object.values(Rs));let w;for(w=0;w<G.length;w+=1){const J=Po(P,G,w);te[w]?te[w].p(J,ae):(te[w]=Oo(J),te[w].c(),te[w].m(C,null))}for(;w<te.length;w+=1)te[w].d(1);te.length=G.length}if(ae&0){Ee=ge(Object.values(Ns).slice(0,-1));let w;for(w=0;w<Ee.length;w+=1){const J=Ao(P,Ee,w);ne[w]?ne[w].p(J,ae):(ne[w]=Mo(J),ne[w].c(),ne[w].m(_e,null))}for(;w<ne.length;w+=1)ne[w].d(1);ne.length=Ee.length}},i:Z,o:Z,d(P){P&&(S(e),S(t),S(s)),je(ee,P),je(te,P),je(N,P),je(re,P),je(ne,P)}}}function ip(n){return[]}class rp extends et{constructor(e){super(),Ze(this,e,ip,sp,qe,{})}}function op(n){let e,t,s;return{c(){e=g("span"),e.textContent="Frontierdle Policy",t=I(),s=g("div"),s.innerHTML=`<span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-932r7h"),_(s,"id","contents")},m(i,r){R(i,e,r),R(i,t,r),R(i,s,r)},p:Z,i:Z,o:Z,d(i){i&&(S(e),S(t),S(s))}}}class lp extends et{constructor(e){super(),Ze(this,e,null,op,qe,{})}}function Lo(n){let e,t,s;return{c(){e=g("iconify-icon"),Me(e,"icon","uil:exclamation"),Me(e,"id","unseen"),Me(e,"class","svelte-yexcnj")},m(i,r){R(i,e,r),s=!0},i(i){s||(i&&Ne(()=>{s&&(t||(t=be(e,vt,{duration:150},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=be(e,vt,{duration:150},!1)),t.run(0)),s=!1},d(i){i&&S(e),i&&t&&t.end()}}}function ap(n){let e,t,s,i,r,o,l,a,c,u,h,f,p,m,v,b,M,F,C=!n[2]&&Lo();return{c(){e=g("button"),e.textContent="Credits",t=I(),s=g("button"),s.innerHTML=`<a href="https://ko-fi.com/xt8ss" target="_blank" class="svelte-yexcnj">Support me
        <img src="misc/kofi-badge.png" alt="" class="svelte-yexcnj"/></a>`,i=I(),r=g("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=I(),l=g("button"),a=g("iconify-icon"),c=I(),u=g("span"),u.textContent="Changelog",h=I(),C&&C.c(),f=I(),p=g("button"),p.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',m=I(),v=g("span"),b=U(n[0]),_(e,"class","info svelte-yexcnj"),_(e,"id","credits"),_(s,"class","info svelte-yexcnj"),_(s,"id","donate"),_(r,"class","info svelte-yexcnj"),_(r,"id","help"),Me(a,"icon","octicon:log-16"),_(u,"class","tooltip"),_(u,"id","right"),_(l,"class","info svelte-yexcnj"),_(l,"id","changelog"),_(p,"class","info svelte-yexcnj"),_(p,"id","policy"),_(v,"class","info svelte-yexcnj"),_(v,"id","version")},m(O,A){R(O,e,A),R(O,t,A),R(O,s,A),R(O,i,A),R(O,r,A),R(O,o,A),R(O,l,A),d(l,a),d(l,c),d(l,u),d(l,h),C&&C.m(l,null),R(O,f,A),R(O,p,A),R(O,m,A),R(O,v,A),d(v,b),M||(F=[ke(e,"click",n[3]),ke(r,"click",n[4]),ke(l,"click",n[5]),ke(p,"click",n[6])],M=!0)},p(O,[A]){O[2]?C&&(ot(),ce(C,1,1,()=>{C=null}),lt()):C?A&4&&K(C,1):(C=Lo(),C.c(),K(C,1),C.m(l,null)),A&1&&fe(b,O[0])},i(O){K(C)},o(O){ce(C)},d(O){O&&(S(e),S(t),S(s),S(i),S(r),S(o),S(l),S(f),S(p),S(m),S(v)),C&&C.d(),M=!1,Ve(F)}}}function cp(n,e,t){let s,i;Se(n,Ke,u=>t(1,s=u)),Se(n,As,u=>t(2,i=u));let{version:r}=e;const o=u=>{tn(u),oe(Ke,s.component=Q_,s)},l=u=>{tn(u),oe(Ke,s.component=rp,s)},a=u=>{tn(u),oe(Ke,s.component=Y_,s),oe(As,i=!0,i)},c=u=>{tn(u),oe(Ke,s.component=lp,s)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,s,i,o,l,a,c]}class up extends et{constructor(e){super(),Ze(this,e,cp,ap,qe,{version:0})}}const{document:os,window:sn}=Ya;function Fo(n,e,t){const s=n.slice();return s[57]=e[t],s}function xo(n,e,t){const s=n.slice();return s[57]=e[t],s}function Wo(n){let e;return{c(){e=g("link"),_(e,"rel","preload"),_(e,"as","image"),_(e,"href",n[57])},m(t,s){R(t,e,s)},p:Z,d(t){t&&S(e)}}}function Bo(n){let e;return{c(){e=g("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,s){R(t,e,s)},d(t){t&&S(e)}}}function Ho(n){let e,t;return{c(){e=g("img"),_(e,"class","background svelte-14hsuft"),Be(e.src,t=n[57])||_(e,"src",t),_(e,"alt",""),pt(e,"active",n[23].indexOf(n[57])==n[19])},m(s,i){R(s,e,i)},p(s,i){i[0]&8912896&&pt(e,"active",s[23].indexOf(s[57])==s[19])},d(s){s&&S(e)}}}function Uo(n){let e,t,s=Math.floor(n[21][n[2]]*100)+"",i,r,o,l;return{c(){e=g("span"),t=U("Zoom: "),i=U(s),r=g("b"),r.textContent="%",_(e,"class","info svelte-14hsuft"),_(e,"id","zoomLevel")},m(a,c){R(a,e,c),d(e,t),d(e,i),d(e,r),l=!0},p(a,c){(!l||c[0]&4)&&s!==(s=Math.floor(a[21][a[2]]*100)+"")&&fe(i,s)},i(a){l||(a&&Ne(()=>{l&&(o||(o=be(e,vt,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=be(e,vt,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&S(e),a&&o&&o.end()}}}function $o(n){let e,t,s,i,r,o,l,a,c=n[7].muted?"Muted":"Unmuted",u,h,f,p,m,v,b,M,F,C=Ps(n[3],n[4],n[5])+"",O,A,H,k,L,$,j,W,x,E,V,T,q,Q,de,pe,_e,he,ee,G,te,le;E=new D_({props:{size:"5",checked:n[7].hardMode,disabled:n[8].chosenItems.length!=0}}),E.$on("toggle",n[34]);let N=!n[8].gameWin&&!n[8].gameOver&&jo(n),B=(n[8].gameWin||n[8].gameOver)&&Go(n);function re(w){n[37](w)}let Ee={};n[13]!==void 0&&(Ee.dailyItemData=n[13]),Q=new k_({props:Ee}),rt.push(()=>Ls(Q,"dailyItemData",re));let ne=n[14]&&zo(n),P=n[20].component&&n[20].complete&&Vo(n),ae=n[20].component&&!n[20].complete&&qo(n);return{c(){e=g("main"),t=g("div"),s=g("div"),i=g("button"),r=g("iconify-icon"),l=I(),a=g("span"),u=U(c),h=I(),f=g("button"),p=g("img"),v=I(),b=g("span"),M=U(`Next item available in...
                    `),F=new Zo(!1),O=I(),A=g("div"),H=g("button"),H.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-14hsuft"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',k=I(),L=g("div"),$=g("button"),$.innerHTML=`<iconify-icon icon="eva:info-outline" id="info" class="svelte-14hsuft"></iconify-icon> <span class="tooltip svelte-14hsuft" id="bottom">No armor (more damage taken)
                    <br/>
                    No stat / avg. cost / color clues</span>`,j=I(),W=g("span"),W.textContent="Nightmare Mode",x=I(),at(E.$$.fragment),V=I(),N&&N.c(),T=I(),B&&B.c(),q=I(),at(Q.$$.fragment),pe=I(),ne&&ne.c(),_e=I(),P&&P.c(),he=I(),ae&&ae.c(),ee=Tt(),Me(r,"icon",o="f7:speaker-"+(n[7].muted?"slash":"2")+"-fill"),Me(r,"class","svelte-14hsuft"),_(a,"class","tooltip"),_(a,"id","bottom"),_(i,"class","flex light-hover svelte-14hsuft"),_(s,"class","iconToggle ff-bg posrel border-tp br-1 svelte-14hsuft"),Be(p.src,m="frontierdle.svg")||_(p,"src",m),_(p,"alt","Frontierdle"),_(p,"class","svelte-14hsuft"),F.a=null,_(b,"class","tooltip svelte-14hsuft"),_(b,"id","bottom"),_(f,"class","iconCont ff-bg posrel border-tp br-1 no-bg-change svelte-14hsuft"),_(H,"class","flex posrel light-hover svelte-14hsuft"),_(A,"class","iconToggle ff-bg border-tp br-1 svelte-14hsuft"),_(t,"class","upperMenu flex fai-center svelte-14hsuft"),_($,"class","flex posrel no-bg-change"),_(L,"class","hardModeCont ff-bg flex fai-center border-tp br-1 svelte-14hsuft"),_(e,"class","flex fd-col fai-center posrel svelte-14hsuft")},m(w,J){R(w,e,J),d(e,t),d(t,s),d(s,i),d(i,r),d(i,l),d(i,a),d(a,u),d(t,h),d(t,f),d(f,p),d(f,v),d(f,b),d(b,M),F.m(C,b),d(t,O),d(t,A),d(A,H),d(e,k),d(e,L),d(L,$),d(L,j),d(L,W),d(L,x),Je(E,L,null),d(e,V),N&&N.m(e,null),d(e,T),B&&B.m(e,null),d(e,q),Je(Q,e,null),d(e,pe),ne&&ne.m(e,null),R(w,_e,J),P&&P.m(w,J),R(w,he,J),ae&&ae.m(w,J),R(w,ee,J),G=!0,te||(le=[ke(i,"click",n[32]),ke(H,"click",n[33])],te=!0)},p(w,J){(!G||J[0]&128&&o!==(o="f7:speaker-"+(w[7].muted?"slash":"2")+"-fill"))&&Me(r,"icon",o),(!G||J[0]&128)&&c!==(c=w[7].muted?"Muted":"Unmuted")&&fe(u,c),(!G||J[0]&56)&&C!==(C=Ps(w[3],w[4],w[5])+"")&&F.p(C);const Et={};J[0]&128&&(Et.checked=w[7].hardMode),J[0]&256&&(Et.disabled=w[8].chosenItems.length!=0),E.$set(Et),!w[8].gameWin&&!w[8].gameOver?N?(N.p(w,J),J[0]&256&&K(N,1)):(N=jo(w),N.c(),K(N,1),N.m(e,T)):N&&(ot(),ce(N,1,1,()=>{N=null}),lt()),w[8].gameWin||w[8].gameOver?B?(B.p(w,J),J[0]&256&&K(B,1)):(B=Go(w),B.c(),K(B,1),B.m(e,q)):B&&(ot(),ce(B,1,1,()=>{B=null}),lt());const Ft={};!de&&J[0]&8192&&(de=!0,Ft.dailyItemData=w[13],Ms(()=>de=!1)),Q.$set(Ft),w[14]?ne?ne.p(w,J):(ne=zo(w),ne.c(),ne.m(e,null)):ne&&(ne.d(1),ne=null),w[20].component&&w[20].complete?P?(P.p(w,J),J[0]&1048576&&K(P,1)):(P=Vo(w),P.c(),K(P,1),P.m(he.parentNode,he)):P&&(ot(),ce(P,1,1,()=>{P=null}),lt()),w[20].component&&!w[20].complete?ae?(ae.p(w,J),J[0]&1048576&&K(ae,1)):(ae=qo(w),ae.c(),K(ae,1),ae.m(ee.parentNode,ee)):ae&&(ot(),ce(ae,1,1,()=>{ae=null}),lt())},i(w){G||(K(E.$$.fragment,w),K(N),K(B),K(Q.$$.fragment,w),K(P),K(ae),G=!0)},o(w){ce(E.$$.fragment,w),ce(N),ce(B),ce(Q.$$.fragment,w),ce(P),ce(ae),G=!1},d(w){w&&(S(e),S(_e),S(he),S(ee)),Xe(E),N&&N.d(),B&&B.d(),Xe(Q),ne&&ne.d(),P&&P.d(w),ae&&ae.d(w),te=!1,Ve(le)}}}function jo(n){let e,t,s;function i(o){n[35](o)}let r={};return n[18]!==void 0&&(r.gameNumber=n[18]),e=new F_({props:r}),rt.push(()=>Ls(e,"gameNumber",i)),{c(){at(e.$$.fragment)},m(o,l){Je(e,o,l),s=!0},p(o,l){const a={};!t&&l[0]&262144&&(t=!0,a.gameNumber=o[18],Ms(()=>t=!1)),e.$set(a)},i(o){s||(K(e.$$.fragment,o),s=!0)},o(o){ce(e.$$.fragment,o),s=!1},d(o){Xe(e,o)}}}function Go(n){let e,t,s=n[8].gameWin?"Fantastic!":"Farewell...",i,r,o,l,a,c=n[8].gameWin?"won":"lost",u,h,f,p,m,v,b,M,F,C,O,A,H,k,L=n[13].name+"",$,j,W,x,E,V,T,q=Ps(n[3],n[4],n[5])+"",Q,de,pe,_e,he,ee,G;function te(N){n[36](N)}let le={};return n[18]!==void 0&&(le.gameNumber=n[18]),pe=new B_({props:le}),rt.push(()=>Ls(pe,"gameNumber",te)),ee=new $a({}),{c(){e=g("div"),t=g("span"),i=U(s),r=I(),o=g("img"),a=U(`
                    You `),u=U(c),h=U("!"),f=I(),p=g("span"),p.textContent="Today's item was...",m=I(),v=g("div"),b=g("a"),M=g("img"),C=I(),O=g("iconify-icon"),H=I(),k=g("span"),$=U(L),j=I(),W=g("span"),x=U(`Next item available in...
                    `),E=g("br"),V=I(),T=g("span"),de=I(),at(pe.$$.fragment),he=I(),at(ee.$$.fragment),Be(o.src,l=n[8].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||_(o,"src",l),_(o,"id","gameFinishIcon"),_(o,"alt",""),_(o,"class","svelte-14hsuft"),_(t,"class","flex fai-center svelte-14hsuft"),_(t,"id","gameFinishMessage"),_(p,"class","smaller-fs"),Be(M.src,F=Mt+n[13].image)||_(M,"src",F),_(M,"alt",""),_(M,"class","svelte-14hsuft"),Me(O,"icon","tabler:link"),Me(O,"class","svelte-14hsuft"),_(b,"class","flex fjc-center fai-center svelte-14hsuft"),_(b,"href",A=mn+n[13].link),_(b,"target","_blank"),_(v,"class","itemImg ff-item flex svelte-14hsuft"),_(v,"id","dailyItemImg"),_(k,"class","ff-item itemName svelte-14hsuft"),_(k,"id","dailyItemName"),_(T,"class","ff-item svelte-14hsuft"),_(T,"id","nextItemTime"),_(W,"class","flex fd-col svelte-14hsuft"),_(W,"id","nextItemCont"),_(e,"class","gameFinishCont ff-bg flex fd-col fai-center border-tp br-1 svelte-14hsuft")},m(N,B){R(N,e,B),d(e,t),d(t,i),d(t,r),d(t,o),d(t,a),d(t,u),d(t,h),d(e,f),d(e,p),d(e,m),d(e,v),d(v,b),d(b,M),d(b,C),d(b,O),d(e,H),d(e,k),d(k,$),d(e,j),d(e,W),d(W,x),d(W,E),d(W,V),d(W,T),T.innerHTML=q,R(N,de,B),Je(pe,N,B),R(N,he,B),Je(ee,N,B),G=!0},p(N,B){(!G||B[0]&256)&&s!==(s=N[8].gameWin?"Fantastic!":"Farewell...")&&fe(i,s),(!G||B[0]&256&&!Be(o.src,l=N[8].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&_(o,"src",l),(!G||B[0]&256)&&c!==(c=N[8].gameWin?"won":"lost")&&fe(u,c),(!G||B[0]&8192&&!Be(M.src,F=Mt+N[13].image))&&_(M,"src",F),(!G||B[0]&8192&&A!==(A=mn+N[13].link))&&_(b,"href",A),(!G||B[0]&8192)&&L!==(L=N[13].name+"")&&fe($,L),(!G||B[0]&56)&&q!==(q=Ps(N[3],N[4],N[5])+"")&&(T.innerHTML=q);const re={};!_e&&B[0]&262144&&(_e=!0,re.gameNumber=N[18],Ms(()=>_e=!1)),pe.$set(re)},i(N){G||(N&&Ne(()=>{G&&(Q||(Q=be(e,vt,{duration:150},!0)),Q.run(1))}),K(pe.$$.fragment,N),K(ee.$$.fragment,N),G=!0)},o(N){N&&(Q||(Q=be(e,vt,{duration:150},!1)),Q.run(0)),ce(pe.$$.fragment,N),ce(ee.$$.fragment,N),G=!1},d(N){N&&(S(e),S(de),S(he)),N&&Q&&Q.end(),Xe(pe,N),Xe(ee,N)}}}function zo(n){let e,t,s,i,r,o,l,a,c,u,h,f=n[14].name+"",p;return{c(){e=g("div"),t=U(`Yesterday's item was...
                `),s=g("div"),i=g("a"),r=g("img"),l=I(),a=g("iconify-icon"),u=I(),h=g("span"),p=U(f),Be(r.src,o=Mt+n[14].image)||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-14hsuft"),Me(a,"icon","tabler:link"),Me(a,"class","svelte-14hsuft"),_(i,"class","flex fjc-center fai-center svelte-14hsuft"),_(i,"href",c=mn+n[14].link),_(i,"target","_blank"),_(s,"class","itemImg ff-item flex svelte-14hsuft"),_(s,"id","previousItemImg"),_(h,"class","ff-item itemName svelte-14hsuft"),_(h,"id","previousItemName"),_(e,"class","previousItemCont ff-bg flex fd-col fai-center border-tp br-1 svelte-14hsuft")},m(m,v){R(m,e,v),d(e,t),d(e,s),d(s,i),d(i,r),d(i,l),d(i,a),d(e,u),d(e,h),d(h,p)},p(m,v){v[0]&16384&&!Be(r.src,o=Mt+m[14].image)&&_(r,"src",o),v[0]&16384&&c!==(c=mn+m[14].link)&&_(i,"href",c),v[0]&16384&&f!==(f=m[14].name+"")&&fe(p,f)},d(m){m&&S(e)}}}function Vo(n){let e,t,s,i,r;var o=n[20].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=as(o,l())),{c(){e=g("div"),t&&at(t.$$.fragment),_(e,"class","promptCont")},m(a,c){R(a,e,c),t&&Je(t,e,null),n[38](e),s=!0,i||(r=ke(e,"click",n[39]),i=!0)},p(a,c){if(c[0]&1048576&&o!==(o=a[20].component)){if(t){ot();const u=t;ce(u.$$.fragment,1,0,()=>{Xe(u,1)}),lt()}o?(t=as(o,l()),at(t.$$.fragment),K(t.$$.fragment,1),Je(t,e,null)):t=null}},i(a){s||(t&&K(t.$$.fragment,a),s=!0)},o(a){t&&ce(t.$$.fragment,a),s=!1},d(a){a&&S(e),t&&Xe(t),n[38](null),i=!1,r()}}}function qo(n){let e,t,s,i,r,o,l;var a=n[20].component;function c(u,h){return{props:{prompted:!0}}}return a&&(s=as(a,c())),{c(){e=g("div"),t=g("div"),s&&at(s.$$.fragment),_(t,"class","flex fd-col border-tp br-1"),_(e,"class","promptCont")},m(u,h){R(u,e,h),d(e,t),s&&Je(s,t,null),n[40](e),r=!0,o||(l=ke(e,"click",n[41]),o=!0)},p(u,h){if(h[0]&1048576&&a!==(a=u[20].component)){if(s){ot();const f=s;ce(f.$$.fragment,1,0,()=>{Xe(f,1)}),lt()}a?(s=as(a,c()),at(s.$$.fragment),K(s.$$.fragment,1),Je(s,t,null)):s=null}},i(u){r||(s&&K(s.$$.fragment,u),u&&Ne(()=>{r&&(i||(i=be(t,Ae,{duration:200},!0)),i.run(1))}),r=!0)},o(u){s&&ce(s.$$.fragment,u),u&&(i||(i=be(t,Ae,{duration:200},!1)),i.run(0)),r=!1},d(u){u&&S(e),s&&Xe(s),u&&i&&i.end(),n[40](null),o=!1,l()}}}function hp(n){let e,t,s,i,r,o,l,a,c,u,h,f,p,m,v,b,M,F,C,O,A;Ne(n[29]);let H=ge(n[23]),k=[];for(let E=0;E<H.length;E+=1)k[E]=Wo(xo(n,H,E));let L=n[20].component&&Bo(),$=ge(n[23]),j=[];for(let E=0;E<$.length;E+=1)j[E]=Ho(Fo(n,$,E));let W=n[12]&&Uo(n);b=new up({props:{version:Ri}});let x=n[10]&&n[9]&&n[11]&&$o(n);return{c(){for(let E=0;E<k.length;E+=1)k[E].c();e=Tt(),L&&L.c(),t=Tt(),s=I(),i=g("div"),r=g("audio"),a=I(),c=g("audio"),f=I(),p=g("div");for(let E=0;E<j.length;E+=1)j[E].c();m=I(),W&&W.c(),v=I(),at(b.$$.fragment),M=I(),x&&x.c(),F=Tt(),Be(r.src,o="audio/lucky.mp3")||_(r,"src",o),r.muted=l=n[7].muted,Be(c.src,u="audio/farewell.mp3")||_(c,"src",u),c.muted=h=n[7].muted,_(p,"class","backgrounds")},m(E,V){for(let T=0;T<k.length;T+=1)k[T]&&k[T].m(os.head,null);d(os.head,e),L&&L.m(os.head,null),d(os.head,t),R(E,s,V),R(E,i,V),d(i,r),n[30](r),d(i,a),d(i,c),n[31](c),R(E,f,V),R(E,p,V);for(let T=0;T<j.length;T+=1)j[T]&&j[T].m(p,null);R(E,m,V),W&&W.m(E,V),R(E,v,V),Je(b,E,V),R(E,M,V),x&&x.m(E,V),R(E,F,V),C=!0,O||(A=[ke(sn,"storage",n[26]),ke(sn,"wheel",n[27],{passive:!1}),ke(sn,"keydown",n[28]),ke(sn,"resize",n[29])],O=!0)},p(E,V){if(V[0]&8388608){H=ge(E[23]);let T;for(T=0;T<H.length;T+=1){const q=xo(E,H,T);k[T]?k[T].p(q,V):(k[T]=Wo(q),k[T].c(),k[T].m(e.parentNode,e))}for(;T<k.length;T+=1)k[T].d(1);k.length=H.length}if(E[20].component?L||(L=Bo(),L.c(),L.m(t.parentNode,t)):L&&(L.d(1),L=null),(!C||V[0]&128&&l!==(l=E[7].muted))&&(r.muted=l),(!C||V[0]&128&&h!==(h=E[7].muted))&&(c.muted=h),V[0]&8912896){$=ge(E[23]);let T;for(T=0;T<$.length;T+=1){const q=Fo(E,$,T);j[T]?j[T].p(q,V):(j[T]=Ho(q),j[T].c(),j[T].m(p,null))}for(;T<j.length;T+=1)j[T].d(1);j.length=$.length}E[12]?W?(W.p(E,V),V[0]&4096&&K(W,1)):(W=Uo(E),W.c(),K(W,1),W.m(v.parentNode,v)):W&&(ot(),ce(W,1,1,()=>{W=null}),lt()),E[10]&&E[9]&&E[11]?x?(x.p(E,V),V[0]&3584&&K(x,1)):(x=$o(E),x.c(),K(x,1),x.m(F.parentNode,F)):x&&(ot(),ce(x,1,1,()=>{x=null}),lt())},i(E){C||(K(W),K(b.$$.fragment,E),K(x),C=!0)},o(E){ce(W),ce(b.$$.fragment,E),ce(x),C=!1},d(E){E&&(S(s),S(i),S(f),S(p),S(m),S(v),S(M),S(F)),je(k,E),S(e),L&&L.d(E),S(t),n[30](null),n[31](null),je(j,E),W&&W.d(E),Xe(b,E),x&&x.d(E),O=!1,Ve(A)}}}let Ri="v1.0.0";function Ps(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function fp(n,e,t){let s,i,r,o,l,a,c,u;Se(n,ct,y=>t(6,s=y)),Se(n,St,y=>t(7,i=y)),Se(n,Ds,y=>t(25,r=y)),Se(n,it,y=>t(8,o=y)),Se(n,lo,y=>t(9,l=y)),Se(n,Ni,y=>t(10,a=y)),Se(n,As,y=>t(47,c=y)),Se(n,Ke,y=>t(20,u=y));let h,f,p=!1,m=7,v=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],b=!1,M,F,C,O,A,H,k;rc(()=>t(11,p=!0));function L(){M=setTimeout(()=>{t(12,b=!1)},750)}function $(){clearTimeout(M),t(12,b=!0),L()}let j=19814,W,x,E=58,V=58,T=58,q;function Q(){clearInterval(q),setTimeout(()=>{W=Date.now()/1e3/60/60/24,t(18,x=Math.floor(W)-j),Jd(Xd(Qd(m_))).then(y=>{oe(lo,l=y.val().rngItemList[x],l),t(24,C=y.val().rngItemList[x-1])}),q=setInterval(()=>{let y=Date.now(),nt=(j+x+1)*24*60*60*1e3-y;t(3,E=Math.floor(nt/1e3/60/60)),t(4,V=Math.floor(nt%(1e3*60*60)/(1e3*60))),t(5,T=Math.floor(nt%(1e3*60)/1e3))},1e3)},1e3)}Q(),fetch("https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/itemData.json").then(async y=>{if(y.status!=200){console.error(`Failed to fetch item data!
Status: ${y.status}`);return}let Ye=await y.json();oe(Ni,a=Ye.sort((nt,st)=>nt.name.toLowerCase().localeCompare(st.name.toLowerCase())),a)});let pe=[],_e=[],he,ee,G=9;for(let y=0;y<G;y++)pe.push(`backgrounds/BG${y}.jpg`);function te(y){ee=Math.floor(Math.random()*y.length)}te(pe);function le(){t(19,he=ee),_e.push(ee)}le(),function y(){setTimeout(()=>{if(te(pe),!_e.length)le();else if(_e.length>3&&(_e=_e.slice(1)),!_e.includes(ee))le();else{let Ye=[...Array(G).keys()].filter(nt=>!_e.includes(nt));te(Ye),le()}document.visibilityState=="visible"&&y()},45e3)}(),localStorage.getItem("fd-version")!=Ri&&(oe(As,c=!1,c),localStorage.setItem("fd-version",Ri));function N(){oe(it,o.gameWin=!0,o),oe(ct,s.gamesPlayed++,s),oe(ct,s.gamesWon++,s),oe(ct,s.streak++,s),oe(ct,s.winInfo[o.chosenItems.length]++,s),H.play()}function B(){oe(it,o.gameOver=!0,o),oe(ct,s.gamesPlayed++,s),oe(ct,s.streak=0,s),k.play()}const re=y=>{y.key=="fd-currentGameData"?y.url.includes("ls=true")?oe(it,o=JSON.parse(y.newValue),o):localStorage.setItem("fd-currentGameData",JSON.stringify(o)):y.key=="fd-settings"?y.url.includes("ls=true")?oe(St,i=JSON.parse(y.newValue),i):localStorage.setItem("fd-settings",JSON.stringify(i)):y.key=="fd-playerStats"&&(y.url.includes("ls=true")?oe(ct,s=JSON.parse(y.newValue),s):localStorage.setItem("fd-playerStats",JSON.stringify(s)))},Ee=y=>{let Ye=y.wheelDeltaY;if(y.ctrlKey){if(y.preventDefault(),v[m]==.2&&Ye<0||v[m]==5&&Ye>0)return;Ye>0?t(2,m++,m):t(2,m--,m),$()}},ne=y=>{let Ye=["Enter"," ","Escape"];y.ctrlKey&&(y.key=="-"||y.key=="+"||y.code=="Equal"||y.key=="0")&&(y.preventDefault(),(y.key=="+"||y.code=="Equal")&&v[m]!=5?t(2,m++,m):y.key=="-"&&v[m]!=.2?t(2,m--,m):y.key=="0"&&v[m]!=1&&t(2,m=7),$()),u.component&&A&&!y.ctrlKey&&!y.shiftKey&&!y.altKey&&Ye.includes(y.key)&&oe(Ke,u.component=null,u)};function P(){t(0,h=sn.outerHeight),t(1,f=sn.outerWidth)}function ae(y){rt[y?"unshift":"push"](()=>{H=y,t(16,H)})}function w(y){rt[y?"unshift":"push"](()=>{k=y,t(17,k)})}const J=y=>{tn(y),oe(St,i.muted=!i.muted,i)},Et=y=>{tn(y),o.gameWin||o.gameOver?(location.hash="playerStats",ki()):(oe(Ke,u.complete=!0,u),oe(Ke,u.component=$a,u))},Ft=y=>{if(o.chosenItems.length){y.detail.checked=!y.detail.checked;return}oe(St,i.hardMode=y.detail.checked,i)};function Cn(y){x=y,t(18,x)}function me(y){x=y,t(18,x)}function wn(y){F=y,t(13,F),t(10,a),t(9,l),t(24,C)}function ts(y){rt[y?"unshift":"push"](()=>{A=y,t(15,A)})}const ns=y=>{A.children[0].contains(y.target)||(oe(Ke,u.component=null,u),oe(Ke,u.complete=!1,u))};function qt(y){rt[y?"unshift":"push"](()=>{A=y,t(15,A)})}const tt=y=>{A.children[0].contains(y.target)||(oe(Ke,u.component=null,u),oe(Ke,u.complete=!1,u))};return n.$$.update=()=>{if(n.$$.dirty[0]&7&&(h||f)){let y=f>h;document.documentElement.style.setProperty("font-size",`${(y?.75:window.outerWidth/window.outerHeight*.8)*v[m]}vh`)}n.$$.dirty[0]&16778752&&a.length&&l&&(t(13,F=a.find(y=>y.name==l)),t(14,O=a.find(y=>y.name==C))),n.$$.dirty[0]&56&&E==0&&V==0&&T==0&&(oe(it,o=Ua,o),Q(),setTimeout(()=>location.reload(),1500)),n.$$.dirty[0]&128&&oe(Ds,r=i.hardMode?6:7,r),n.$$.dirty[0]&33555200&&o.chosenItems.length&&!o.gameWin&&!o.gameOver&&(o.chosenItems[o.chosenItems.length-1].name==l?N():o.chosenItems.length==r&&B()),n.$$.dirty[0]&64&&s.streak>s.maxStreak&&oe(ct,s.maxStreak=s.streak,s)},[h,f,m,E,V,T,s,i,o,l,a,p,b,F,O,A,H,k,x,he,u,v,$,pe,C,r,re,Ee,ne,P,ae,w,J,Et,Ft,Cn,me,wn,ts,ns,qt,tt]}class dp extends et{constructor(e){super(),Ze(this,e,fp,hp,qe,{},null,[-1,-1])}}new dp({target:document.body});
