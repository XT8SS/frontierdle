var _c=Object.defineProperty;var pc=(n,e,t)=>e in n?_c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Wt=(n,e,t)=>(pc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function ne(){}const Us=n=>n;function _l(n){return n()}function Sr(){return Object.create(null)}function lt(n){n.forEach(_l)}function rn(n){return typeof n=="function"}function at(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let _s;function Ge(n,e){return n===e?!0:(_s||(_s=document.createElement("a")),_s.href=e,n===_s.href)}function mc(n){return Object.keys(n).length===0}function pl(n,...e){if(n==null){for(const s of e)s(void 0);return ne}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function zn(n){let e;return pl(n,t=>e=t)(),e}function ve(n,e,t){n.$$.on_destroy.push(pl(e,t))}function X(n,e,t){return n.set(t),e}function gc(n){return n&&rn(n.destroy)?n.destroy:ne}const ml=typeof window<"u";let Ui=ml?()=>window.performance.now():()=>Date.now(),Gi=ml?n=>requestAnimationFrame(n):ne;const pn=new Set;function gl(n){pn.forEach(e=>{e.c(n)||(pn.delete(e),e.f())}),pn.size!==0&&Gi(gl)}function zi(n){let e;return pn.size===0&&Gi(gl),{promise:new Promise(t=>{pn.add(e={c:n,f:t})}),abort(){pn.delete(e)}}}const vc=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(n,e){n.appendChild(e)}function vl(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function yc(n){const e=m("style");return e.textContent="/* empty */",bc(vl(n),e),e.sheet}function bc(n,e){return h(n.head||n,e),e.sheet}function T(n,e,t){n.insertBefore(e,t||null)}function I(n){n.parentNode&&n.parentNode.removeChild(n)}function Xe(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function m(n){return document.createElement(n)}function wc(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function q(n){return document.createTextNode(n)}function b(){return q(" ")}function bt(){return q("")}function Le(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function We(n,e,t){const s=e.toLowerCase();s in n?n[s]=typeof n[s]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function Cc(n){return Array.from(n.childNodes)}function de(n,e){e=""+e,n.data!==e&&(n.data=e)}function wn(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function Ke(n,e,t){n.classList.toggle(e,!!t)}function yl(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class bl{constructor(e=!1){Wt(this,"is_svg",!1);Wt(this,"e");Wt(this,"n");Wt(this,"t");Wt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=wc(t.nodeName):this.e=m(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)T(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(I)}}function vs(n,e){return new n(e)}const ys=new Map;let bs=0;function Ec(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Ic(n,e){const t={stylesheet:yc(e),rules:{}};return ys.set(n,t),t}function ws(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let E=0;E<=1;E+=a){const k=e+(t-e)*r(E);c+=E*100+`%{${o(k,1-k)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${Ec(u)}_${l}`,d=vl(n),{stylesheet:p,rules:g}=ys.get(d)||Ic(d,n);g[f]||(g[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const y=n.style.animation||"";return n.style.animation=`${y?`${y}, `:""}${f} ${s}ms linear ${i}ms 1 both`,bs+=1,f}function Vi(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),bs-=i,bs||Sc())}function Sc(){Gi(()=>{bs||(ys.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&I(e)}),ys.clear())})}function Tc(n,e,t,s){if(!e)return ne;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return ne;const{delay:r=0,duration:o=300,easing:l=Us,start:a=Ui()+r,end:c=a+o,tick:u=ne,css:f}=t(n,{from:e,to:i},s);let d=!0,p=!1,g;function y(){f&&(g=ws(n,0,1,o,r,l,f)),r||(p=!0)}function E(){f&&Vi(n,g),d=!1}return zi(k=>{if(!p&&k>=a&&(p=!0),p&&k>=c&&(u(1,0),E()),!d)return!1;if(p){const A=k-a,O=0+1*l(A/o);u(O,1-O)}return!0}),y(),u(0,1),E}function kc(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,Nc(n,i)}}function Nc(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Vn;function Bn(n){Vn=n}function wl(){if(!Vn)throw new Error("Function called outside component initialization");return Vn}function Rc(n){wl().$$.on_mount.push(n)}function Dc(){const n=wl();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=yl(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const un=[],ct=[];let mn=[];const gi=[],Ac=Promise.resolve();let vi=!1;function Pc(){vi||(vi=!0,Ac.then(Cl))}function je(n){mn.push(n)}function Gs(n){gi.push(n)}const si=new Set;let ln=0;function Cl(){if(ln!==0)return;const n=Vn;do{try{for(;ln<un.length;){const e=un[ln];ln++,Bn(e),Oc(e.$$)}}catch(e){throw un.length=0,ln=0,e}for(Bn(null),un.length=0,ln=0;ct.length;)ct.pop()();for(let e=0;e<mn.length;e+=1){const t=mn[e];si.has(t)||(si.add(t),t())}mn.length=0}while(un.length);for(;gi.length;)gi.pop()();vi=!1,si.clear(),Bn(n)}function Oc(n){if(n.fragment!==null){n.update(),lt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(je)}}function Mc(n){const e=[],t=[];mn.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),mn=e}let On;function El(){return On||(On=Promise.resolve(),On.then(()=>{On=null})),On}function qn(n,e,t){n.dispatchEvent(yl(`${e?"intro":"outro"}${t}`))}const gs=new Set;let Rt;function mt(){Rt={r:0,c:[],p:Rt}}function gt(){Rt.r||lt(Rt.c),Rt=Rt.p}function Q(n,e){n&&n.i&&(gs.delete(n),n.i(e))}function he(n,e,t,s){if(n&&n.o){if(gs.has(n))return;gs.add(n),Rt.c.push(()=>{gs.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const Il={duration:0};function Lc(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=Rt;l.r+=1;let a;function c(){const{delay:u=0,duration:f=300,easing:d=Us,tick:p=ne,css:g}=i||Il;g&&(o=ws(n,1,0,f,u,d,g));const y=Ui()+u,E=y+f;je(()=>qn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),zi(k=>{if(r){if(k>=E)return p(0,1),qn(n,!1,"end"),--l.r||lt(l.c),!1;if(k>=y){const A=d((k-y)/f);p(1-A,A)}}return r})}return rn(i)?El().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&Vi(n,o),r=!1)}}}function Re(n,e,t,s){let r=e(n,t,{direction:"both"}),o=s?0:1,l=null,a=null,c=null,u;function f(){c&&Vi(n,c)}function d(g,y){const E=g.b-o;return y*=Math.abs(E),{a:o,b:g.b,d:E,duration:y,start:g.start,end:g.start+y,group:g.group}}function p(g){const{delay:y=0,duration:E=300,easing:k=Us,tick:A=ne,css:O}=r||Il,v={start:Ui()+y,b:g};g||(v.group=Rt,Rt.r+=1),"inert"in n&&(g?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=v:(O&&(f(),c=ws(n,o,g,E,y,k,O)),g&&A(0,1),l=d(v,E),je(()=>qn(n,g,"start")),zi(S=>{if(a&&S>a.start&&(l=d(a,E),a=null,qn(n,l.b,"start"),O&&(f(),c=ws(n,o,l.b,l.duration,0,k,r.css))),l){if(S>=l.end)A(o=l.b,1-o),qn(n,l.b,"end"),a||(l.b?f():--l.group.r||lt(l.group.c)),l=null;else if(S>=l.start){const F=S-l.start;o=l.a+l.d*k(F/l.duration),A(o,1-o)}}return!!(l||a)}))}return{run(g){rn(r)?El().then(()=>{r=r({direction:g?"in":"out"}),p(g)}):p(g)},end(){f(),l=a=null}}}function Ee(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Fc(n,e){he(n,1,1,()=>{e.delete(n.key)})}function xc(n,e){n.f(),Fc(n,e)}function Wc(n,e,t,s,i,r,o,l,a,c,u,f){let d=n.length,p=r.length,g=d;const y={};for(;g--;)y[n[g].key]=g;const E=[],k=new Map,A=new Map,O=[];for(g=p;g--;){const P=f(i,r,g),M=t(P);let H=o.get(M);H?s&&O.push(()=>H.p(P,e)):(H=c(M,P),H.c()),k.set(M,E[g]=H),M in y&&A.set(M,Math.abs(g-y[M]))}const v=new Set,S=new Set;function F(P){Q(P,1),P.m(l,u),o.set(P.key,P),u=P.first,p--}for(;d&&p;){const P=E[p-1],M=n[d-1],H=P.key,Z=M.key;P===M?(u=P.first,d--,p--):k.has(Z)?!o.has(H)||v.has(H)?F(P):S.has(Z)?d--:A.get(H)>A.get(Z)?(S.add(H),F(P)):(v.add(Z),d--):(a(M,o),d--)}for(;d--;){const P=n[d];k.has(P.key)||a(P,o)}for(;p;)F(E[p-1]);return lt(O),E}function zs(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function rt(n){n&&n.c()}function et(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),je(()=>{const r=n.$$.on_mount.map(_l).filter(rn);n.$$.on_destroy?n.$$.on_destroy.push(...r):lt(r),n.$$.on_mount=[]}),i.forEach(je)}function tt(n,e){const t=n.$$;t.fragment!==null&&(Mc(t.after_update),lt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Bc(n,e){n.$$.dirty[0]===-1&&(un.push(n),Pc(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ft(n,e,t,s,i,r,o=null,l=[-1]){const a=Vn;Bn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:ne,not_equal:i,bound:Sr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Sr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,d,...p)=>{const g=p.length?p[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&Bc(n,f)),d}):[],c.update(),u=!0,lt(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=Cc(e.target);c.fragment&&c.fragment.l(f),f.forEach(I)}else c.fragment&&c.fragment.c();e.intro&&Q(n.$$.fragment),et(n,e.target,e.anchor),Cl()}Bn(a)}class dt{constructor(){Wt(this,"$$");Wt(this,"$$set")}$destroy(){tt(this,1),this.$destroy=ne}$on(e,t){if(!rn(t))return ne;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!mc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const qc="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qc);function Sl(n){const e=n-1;return e*e*e+1}function Mt(n,{delay:e=0,duration:t=400,easing:s=Us}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}function Ve(n,{delay:e=0,duration:t=400,easing:s=Sl,start:i=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-i,u=l*(1-r);return{delay:e,duration:t,easing:s,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${l-u*d}
		`}}const an=[];function yt(n,e=ne){let t;const s=new Set;function i(l){if(at(n,l)&&(n=l,t)){const a=!an.length;for(const c of s)c[1](),an.push(c,n);if(a){for(let c=0;c<an.length;c+=2)an[c][0](an[c+1]);an.length=0}}}function r(l){i(l(n))}function o(l,a=ne){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||ne),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}var Tr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(n,e){if(!n)throw Nn(e)},Nn=function(n){return new Error("Firebase Database ("+Tl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},jc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,p=c&63;a||(p=64,o||(d=64)),s.push(t[u],t[f],t[d],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||f==null)throw new Hc;const d=r<<2|l>>4;if(s.push(d),c!==64){const p=l<<4&240|c>>2;if(s.push(p),f!==64){const g=c<<6&192|f;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nl=function(n){const e=kl(n);return $i.encodeByteArray(e,!0)},Cs=function(n){return Nl(n).replace(/\./g,"")},yi=function(n){try{return $i.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n){return Rl(void 0,n)}function Rl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Gc(t)||(n[t]=Rl(n[t],e[t]));return n}function Gc(n){return n!=="__proto__"}/**
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
 */function zc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vc=()=>zc().__FIREBASE_DEFAULTS__,$c=()=>{if(typeof process>"u"||typeof Tr>"u")return;const n=Tr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&yi(n[1]);return e&&JSON.parse(e)},Dl=()=>{try{return Vc()||$c()||Yc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kc=n=>{var e,t;return(t=(e=Dl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Qc=n=>{const e=Kc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Al=()=>{var n;return(n=Dl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Jc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Cs(JSON.stringify(t)),Cs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xc())}function Zc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ol(){return Tl.NODE_ADMIN===!0}function eu(){try{return typeof indexedDB=="object"}catch{return!1}}function tu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="FirebaseError";class rs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nu,Object.setPrototypeOf(this,rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ml.prototype.create)}}class Ml{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?su(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new rs(i,l,s)}}function su(n,e){return n.replace(iu,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const iu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n){return JSON.parse(n)}function He(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=$n(yi(r[0])||""),t=$n(yi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ru=function(n){const e=Ll(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ou=function(n){const e=Ll(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Cn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function kr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Es(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function bi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Nr(r)&&Nr(o)){if(!bi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Nr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const d=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):f<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[f]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Fl(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vs=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Rn(n){return n&&n._delegate?n._delegate:n}class Yn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class uu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Yi;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fu(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hu(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hu(n){return n===Yt?void 0:n}function fu(n){return n.instantiationMode==="EAGER"}/**
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
 */class du{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const _u={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},pu=De.INFO,mu={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},gu=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=mu[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=pu,this._logHandler=gu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_u[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const vu=(n,e)=>e.some(t=>n instanceof t);let Rr,Dr;function yu(){return Rr||(Rr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bu(){return Dr||(Dr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wl=new WeakMap,wi=new WeakMap,Bl=new WeakMap,ii=new WeakMap,Ki=new WeakMap;function wu(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Bt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wl.set(t,n)}).catch(()=>{}),Ki.set(e,n),e}function Cu(n){if(wi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});wi.set(n,e)}let Ci={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return wi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Eu(n){Ci=n(Ci)}function Iu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ri(this),e,...t);return Bl.set(s,e.sort?e.sort():[e]),Bt(s)}:bu().includes(n)?function(...e){return n.apply(ri(this),e),Bt(Wl.get(this))}:function(...e){return Bt(n.apply(ri(this),e))}}function Su(n){return typeof n=="function"?Iu(n):(n instanceof IDBTransaction&&Cu(n),vu(n,yu())?new Proxy(n,Ci):n)}function Bt(n){if(n instanceof IDBRequest)return wu(n);if(ii.has(n))return ii.get(n);const e=Su(n);return e!==n&&(ii.set(n,e),Ki.set(e,n)),e}const ri=n=>Ki.get(n);function Tu(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Bt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Bt(o.result),a.oldVersion,a.newVersion,Bt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const ku=["get","getKey","getAll","getAllKeys","count"],Nu=["put","add","delete","clear"],oi=new Map;function Ar(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oi.get(e))return oi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Nu.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ku.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return oi.set(e,r),r}Eu(n=>({...n,get:(e,t,s)=>Ar(e,t)||n.get(e,t,s),has:(e,t)=>!!Ar(e,t)||n.has(e,t)}));/**
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
 */class Ru{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Du(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Du(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ei="@firebase/app",Pr="0.9.29";/**
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
 */const Xt=new xl("@firebase/app"),Au="@firebase/app-compat",Pu="@firebase/analytics-compat",Ou="@firebase/analytics",Mu="@firebase/app-check-compat",Lu="@firebase/app-check",Fu="@firebase/auth",xu="@firebase/auth-compat",Wu="@firebase/database",Bu="@firebase/database-compat",qu="@firebase/functions",ju="@firebase/functions-compat",Hu="@firebase/installations",Uu="@firebase/installations-compat",Gu="@firebase/messaging",zu="@firebase/messaging-compat",Vu="@firebase/performance",$u="@firebase/performance-compat",Yu="@firebase/remote-config",Ku="@firebase/remote-config-compat",Qu="@firebase/storage",Ju="@firebase/storage-compat",Xu="@firebase/firestore",Zu="@firebase/firestore-compat",eh="firebase",th="10.9.0";/**
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
 */const Ii="[DEFAULT]",nh={[Ei]:"fire-core",[Au]:"fire-core-compat",[Ou]:"fire-analytics",[Pu]:"fire-analytics-compat",[Lu]:"fire-app-check",[Mu]:"fire-app-check-compat",[Fu]:"fire-auth",[xu]:"fire-auth-compat",[Wu]:"fire-rtdb",[Bu]:"fire-rtdb-compat",[qu]:"fire-fn",[ju]:"fire-fn-compat",[Hu]:"fire-iid",[Uu]:"fire-iid-compat",[Gu]:"fire-fcm",[zu]:"fire-fcm-compat",[Vu]:"fire-perf",[$u]:"fire-perf-compat",[Yu]:"fire-rc",[Ku]:"fire-rc-compat",[Qu]:"fire-gcs",[Ju]:"fire-gcs-compat",[Xu]:"fire-fst",[Zu]:"fire-fst-compat","fire-js":"fire-js",[eh]:"fire-js-all"};/**
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
 */const Is=new Map,Si=new Map;function sh(n,e){try{n.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ss(n){const e=n.name;if(Si.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Si.set(e,n);for(const t of Is.values())sh(t,n);return!0}function ih(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const rh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qt=new Ml("app","Firebase",rh);/**
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
 */class oh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const lh=th;function ql(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ii,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(t||(t=Al()),!t)throw qt.create("no-options");const r=Is.get(i);if(r){if(bi(t,r.options)&&bi(s,r.config))return r;throw qt.create("duplicate-app",{appName:i})}const o=new du(i);for(const a of Si.values())o.addComponent(a);const l=new oh(t,s,o);return Is.set(i,l),l}function ah(n=Ii){const e=Is.get(n);if(!e&&n===Ii&&Al())return ql();if(!e)throw qt.create("no-app",{appName:n});return e}function gn(n,e,t){var s;let i=(s=nh[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(l.join(" "));return}Ss(new Yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ch="firebase-heartbeat-database",uh=1,Kn="firebase-heartbeat-store";let li=null;function jl(){return li||(li=Tu(ch,uh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Kn)}catch(t){console.warn(t)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),li}async function hh(n){try{const t=(await jl()).transaction(Kn),s=await t.objectStore(Kn).get(Hl(n));return await t.done,s}catch(e){if(e instanceof rs)Xt.warn(e.message);else{const t=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(t.message)}}}async function Or(n,e){try{const s=(await jl()).transaction(Kn,"readwrite");await s.objectStore(Kn).put(e,Hl(n)),await s.done}catch(t){if(t instanceof rs)Xt.warn(t.message);else{const s=qt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(s.message)}}}function Hl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const fh=1024,dh=30*24*60*60*1e3;class _h{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=dh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mr(),{heartbeatsToSend:s,unsentEntries:i}=ph(this._heartbeatsCache.heartbeats),r=Cs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Mr(){return new Date().toISOString().substring(0,10)}function ph(n,e=fh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Lr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Lr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class mh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eu()?tu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Or(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Or(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lr(n){return Cs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function gh(n){Ss(new Yn("platform-logger",e=>new Ru(e),"PRIVATE")),Ss(new Yn("heartbeat",e=>new _h(e),"PRIVATE")),gn(Ei,Pr,n),gn(Ei,Pr,"esm2017"),gn("fire-js","")}gh("");var vh="firebase",yh="10.9.0";/**
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
 */gn(vh,yh,"app");var Fr={};const xr="@firebase/database",Wr="1.0.3";/**
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
 */let Ul="";function bh(n){Ul=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:$n(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wh(e)}}catch{}return new Ch},Qt=Gl("localStorage"),Ti=Gl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new xl("@firebase/database"),Eh=function(){let n=1;return function(){return n++}}(),zl=function(n){const e=cu(n),t=new au;t.update(e);const s=t.digest();return $i.encodeByteArray(s)},os=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=os.apply(null,s):typeof s=="object"?e+=He(s):e+=s,e+=" "}return e};let Jt=null,Br=!0;const Ih=function(n,e){D(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(vn.logLevel=De.VERBOSE,Jt=vn.log.bind(vn),e&&Ti.set("logging_enabled",!0)):typeof n=="function"?Jt=n:(Jt=null,Ti.remove("logging_enabled"))},Ze=function(...n){if(Br===!0&&(Br=!1,Jt===null&&Ti.get("logging_enabled")===!0&&Ih(!0)),Jt){const e=os.apply(null,n);Jt(e)}},ls=function(n){return function(...e){Ze(n,...e)}},ki=function(...n){const e="FIREBASE INTERNAL ERROR: "+os(...n);vn.error(e)},Lt=function(...n){const e=`FIREBASE FATAL ERROR: ${os(...n)}`;throw vn.error(e),new Error(e)},vt=function(...n){const e="FIREBASE WARNING: "+os(...n);vn.warn(e)},Sh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Th=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},En="[MIN_NAME]",Zt="[MAX_NAME]",Dn=function(n,e){if(n===e)return 0;if(n===En||e===Zt)return-1;if(e===En||n===Zt)return 1;{const t=qr(n),s=qr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},kh=function(n,e){return n===e?0:n<e?-1:1},Mn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+He(e))},Qi=function(n){if(typeof n!="object"||n===null)return He(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=He(e[s]),t+=":",t+=Qi(n[e[s]]);return t+="}",t},$l=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ht(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Yl=function(n){D(!Vl(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Nh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Rh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Dh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ah=new RegExp("^-?(0*)\\d{1,10}$"),Ph=-2147483648,Oh=2147483647,qr=function(n){if(Ah.test(n)){const e=Number(n);if(e>=Ph&&e<=Oh)return e}return null},as=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw vt("Exception was thrown by user callback.",t),e},Math.floor(0))}},Mh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},jn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Lh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vt(e)}}class yn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="5",Kl="v",Ql="s",Jl="r",Xl="f",Zl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ea="ls",ta="p",Ni="ac",na="websocket",sa="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function xh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ra(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let s;if(e===na)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===sa)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xh(n)&&(t.ns=n.namespace);const i=[];return ht(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.counters_={}}incrementCounter(e,t=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Uc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai={},ci={};function Xi(n){const e=n.toString();return ai[e]||(ai[e]=new Wh),ai[e]}function Bh(n,e){const t=n.toString();return ci[t]||(ci[t]=e()),ci[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&as(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="start",jh="close",Hh="pLPCommand",Uh="pRTLPCB",oa="id",la="pw",aa="ser",Gh="cb",zh="seg",Vh="ts",$h="d",Yh="dframe",ca=1870,ua=30,Kh=ca-ua,Qh=25e3,Jh=3e4;class hn{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ls(e),this.stats_=Xi(t),this.urlFn=a=>(this.appCheckToken&&(a[Ni]=this.appCheckToken),ra(t,sa,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new qh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Jh)),Th(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zi((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jr)this.id=l,this.password=a;else if(o===jh)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[jr]="t",s[aa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Gh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kl]=Ji,this.transportSessionId&&(s[Ql]=this.transportSessionId),this.lastSessionId&&(s[ea]=this.lastSessionId),this.applicationId&&(s[ta]=this.applicationId),this.appCheckToken&&(s[Ni]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zl.test(location.hostname)&&(s[Jl]=Xl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Nh()&&!Rh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=He(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Nl(t),i=$l(s,Kh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Yh]="t",s[oa]=e,s[la]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=He(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Zi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Eh(),window[Hh+this.uniqueCallbackIdentifier]=e,window[Uh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Zi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ze("frame writing exception"),l.stack&&Ze(l.stack),Ze(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oa]=this.myID,e[la]=this.myPW,e[aa]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ua+s.length<=ca;){const o=this.pendingSegs.shift();s=s+"&"+zh+i+"="+o.seg+"&"+Vh+i+"="+o.ts+"&"+$h+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Qh)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=16384,Zh=45e3;let Ts=null;typeof MozWebSocket<"u"?Ts=MozWebSocket:typeof WebSocket<"u"&&(Ts=WebSocket);class Et{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ls(this.connId),this.stats_=Xi(t),this.connURL=Et.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Kl]=Ji,typeof location<"u"&&location.hostname&&Zl.test(location.hostname)&&(o[Jl]=Xl),t&&(o[Ql]=t),s&&(o[ea]=s),i&&(o[Ni]=i),r&&(o[ta]=r),ra(e,na,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qt.set("previous_websocket_failure",!0);try{let s;Ol(),this.mySock=new Ts(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ts!==null&&!Et.forceDisallow_}static previouslyFailed(){return Qt.isInMemoryStorage||Qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=$n(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=He(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=$l(t,Xh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Zh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hn,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Et&&Et.isAvailable();let s=t&&!Et.previouslyFailed();if(e.webSocketOnly&&(t||vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Et];else{const i=this.transports_=[];for(const r of Qn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Qn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=6e4,tf=5e3,nf=10*1024,sf=100*1024,ui="t",Hr="d",rf="s",Ur="r",of="e",Gr="o",zr="a",Vr="n",$r="p",lf="h";class af{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ls("c:"+this.id+":"),this.transportManager_=new Qn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=jn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ui in e){const t=e[ui];t===zr?this.upgradeIfSecondaryHealthy_():t===Ur?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Gr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Mn("t",e),s=Mn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$r,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Mn("t",e),s=Mn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Mn(ui,e);if(Hr in e){const s=e[Hr];if(t===lf){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Vr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===rf?this.onConnectionShutdown_(s):t===Ur?this.onReset_(s):t===of?ki("Server Error: "+s):t===Gr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ki("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ji!==s&&vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),jn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ef))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):jn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$r,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends fa{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ks}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=32,Kr=768;class Ne{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function we(){return new Ne("")}function me(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ut(n){return n.pieces_.length-n.pieceNum_}function Ae(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ne(n.pieces_,e)}function da(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function cf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function _a(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function pa(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ne(e,0)}function Ue(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Ne(t,0)}function fe(n){return n.pieceNum_>=n.pieces_.length}function it(n,e){const t=me(n),s=me(e);if(t===null)return e;if(t===s)return it(Ae(n),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ma(n,e){if(Ut(n)!==Ut(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function It(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ut(n)>Ut(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class uf{constructor(e,t){this.errorPrefix_=t,this.parts_=_a(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Vs(this.parts_[s]);ga(this)}}function hf(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Vs(e),ga(n)}function ff(n){const e=n.parts_.pop();n.byteLength_-=Vs(e),n.parts_.length>0&&(n.byteLength_-=1)}function ga(n){if(n.byteLength_>Kr)throw new Error(n.errorPrefix_+"has a key path longer than "+Kr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Yr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yr+") or object contains a cycle "+Kt(n))}function Kt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends fa{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new er}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=1e3,df=60*5*1e3,Qr=30*1e3,_f=1.3,pf=3e4,mf="server_kill",Jr=3;class Ot extends ha{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ln,this.maxReconnectDelay_=df,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ol())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");er.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ks.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(He(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Yi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Ot.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ft(e,"w")){const s=Cn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ou(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ru(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ki("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pf&&(this.reconnectDelay_=Ln),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_f)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ot.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(f){D(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,l=new af(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{vt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(mf)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&vt(f),a())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kr(this.interruptReasons_)&&(this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Qi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Ze("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jr&&(this.reconnectDelay_=Qr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ze("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ul.replace(/\./g,"-")]=1,Pl()?e["framework.cordova"]=1:Zc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ks.getInstance().currentlyOnline();return kr(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $s{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ae(En,e),i=new ae(En,t);return this.compare(s,i)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;class va extends $s{static get __EMPTY_NODE(){return ps}static set __EMPTY_NODE(e){ps=e}compare(e,t){return Dn(e.name,t.name)}isDefinedOn(e){throw Nn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Zt,ps)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,ps)}toString(){return".key"}}const bn=new va;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Ye.RED,this.left=i??ut.EMPTY_NODE,this.right=r??ut.EMPTY_NODE}copy(e,t,s,i,r){return new Ye(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class gf{copy(e,t,s,i,r){return this}insert(e,t,s){return new Ye(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,t=ut.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ut(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ms(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ms(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ms(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new gf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(n,e){return Dn(n.name,e.name)}function tr(n,e){return Dn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;function yf(n){Ri=n}const ya=function(n){return typeof n=="number"?"number:"+Yl(n):"string:"+n},ba=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else D(n===Ri||n.isEmpty(),"priority of unexpected type.");D(n===Ri||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr;class $e{constructor(e,t=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ba(this.priorityNode_)}static set __childrenNodeConstructor(e){Xr=e}static get __childrenNodeConstructor(){return Xr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:me(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=me(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Ut(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ya(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Yl(this.value_):e+=this.value_,this.lazyHash_=zl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=$e.VALUE_TYPE_ORDER.indexOf(t),r=$e.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+t),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa,Ca;function bf(n){wa=n}function wf(n){Ca=n}class Cf extends $s{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Dn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Zt,new $e("[PRIORITY-POST]",Ca))}makePost(e,t){const s=wa(e);return new ae(t,new $e("[PRIORITY-POST]",s))}toString(){return".priority"}}const xe=new Cf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=Math.log(2);class If{constructor(e){const t=r=>parseInt(Math.log(r)/Ef,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ns=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let f,d;if(u===0)return null;if(u===1)return f=n[a],d=t?t(f):f,new Ye(d,f.node,Ye.BLACK,null,null);{const p=parseInt(u/2,10)+a,g=i(a,p),y=i(p+1,c);return f=n[p],d=t?t(f):f,new Ye(d,f.node,Ye.BLACK,g,y)}},r=function(a){let c=null,u=null,f=n.length;const d=function(g,y){const E=f-g,k=f;f-=g;const A=i(E+1,k),O=n[E],v=t?t(O):O;p(new Ye(v,O.node,y,null,A))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const y=a.nextBitIsOne(),E=Math.pow(2,a.count-(g+1));y?d(E,Ye.BLACK):(d(E,Ye.BLACK),d(E,Ye.RED))}return u},o=new If(n.length),l=r(o);return new ut(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;const cn={};class At{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return D(cn&&xe,"ChildrenNode.ts has not been loaded"),hi=hi||new At({".priority":cn},{".priority":xe}),hi}get(e){const t=Cn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ut?t:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,t){D(e!==bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(ae.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ns(s,e.getCompare()):l=cn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new At(u,c)}addToIndexes(e,t){const s=Es(this.indexes_,(i,r)=>{const o=Cn(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),i===cn)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(ae.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ns(l,o.getCompare())}else return cn;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new ae(e.name,l))),a.insert(e,e.node)}});return new At(s,this.indexSet_)}removeFromIndexes(e,t){const s=Es(this.indexes_,i=>{if(i===cn)return i;{const r=t.get(e.name);return r?i.remove(new ae(e.name,r)):i}});return new At(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;class K{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ba(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fn||(Fn=new K(new ut(tr),null,At.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fn}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Fn:t}}getChild(e){const t=me(e);return t===null?this:this.getImmediateChild(t).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ae(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fn:this.priorityNode_;return new K(i,o,r)}}updateChild(e,t){const s=me(e);if(s===null)return t;{D(me(e)!==".priority"||Ut(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ae(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(xe,(o,l)=>{t[o]=l.val(e),s++,r&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ya(this.getPriority().val())+":"),this.forEachChild(xe,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":zl(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ae(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ae(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ae(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cs?-1:0}withIndex(e){if(e===bn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(xe),i=t.getIterator(xe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bn?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Sf extends K{constructor(){super(new ut(tr),K.EMPTY_NODE,At.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const cs=new Sf;Object.defineProperties(ae,{MIN:{value:new ae(En,K.EMPTY_NODE)},MAX:{value:new ae(Zt,cs)}});va.__EMPTY_NODE=K.EMPTY_NODE;$e.__childrenNodeConstructor=K;yf(cs);wf(cs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=!0;function Je(n,e=null){if(n===null)return K.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new $e(t,Je(e))}if(!(n instanceof Array)&&Tf){const t=[];let s=!1;if(ht(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=Je(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new ae(o,a)))}}),t.length===0)return K.EMPTY_NODE;const r=Ns(t,vf,o=>o.name,tr);if(s){const o=Ns(t,xe.getCompare());return new K(r,Je(e),new At({".priority":o},{".priority":xe}))}else return new K(r,Je(e),At.Default)}else{let t=K.EMPTY_NODE;return ht(n,(s,i)=>{if(Ft(n,s)&&s.substring(0,1)!=="."){const r=Je(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Je(e))}}bf(Je);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends $s{constructor(e){super(),this.indexPath_=e,D(!fe(e)&&me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Dn(e.name,t.name):r}makePost(e,t){const s=Je(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(t,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,cs);return new ae(Zt,e)}toString(){return _a(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends $s{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Dn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,t){const s=Je(e);return new ae(t,s)}toString(){return".value"}}const Rf=new Nf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){return{type:"value",snapshotNode:n}}function In(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Jn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Xn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Df(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Jn(t,l)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(In(t,s)):o.trackChildChange(Xn(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,r)=>{t.hasChild(i)||s.trackChildChange(Jn(i,r))}),t.isLeafNode()||t.forEachChild(xe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Xn(i,r,o))}else s.trackChildChange(In(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.indexedFilter_=new nr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zn.getStartPost_(e),this.endPost_=Zn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new ae(t,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=K.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const r=this;return t.forEachChild(xe,(o,l)=>{r.matches(new ae(o,l))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Zn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new ae(t,s))||(s=K.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,p)=>f(p,d)}else o=this.index_.getCompare();const l=e;D(l.numChildren()===this.limit_,"");const a=new ae(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const f=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,a);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Xn(t,s,f)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Jn(t,f));const y=l.updateImmediateChild(t,K.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(In(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Jn(c.name,c.node)),r.trackChildChange(In(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:En}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new sr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pf(n){return n.loadsAllData()?new nr(n.getIndex()):n.hasLimit()?new Af(n):new Zn(n)}function Zr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===xe?t="$priority":n.index_===Rf?t="$value":n.index_===bn?t="$key":(D(n.index_ instanceof kf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=He(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=He(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+He(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=He(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+He(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function eo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==xe&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends ha{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ls("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Rs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Zr(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),Cn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Rs.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Zr(e._queryParams),s=e._path.toString(),i=new Yi;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lu(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=$n(l.responseText)}catch{vt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&vt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(){return{value:null,children:new Map}}function Ia(n,e,t){if(fe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=me(e);n.children.has(s)||n.children.set(s,Ds());const i=n.children.get(s);e=Ae(e),Ia(i,e,t)}}function Di(n,e,t){n.value!==null?t(e,n.value):Mf(n,(s,i)=>{const r=new Ne(e.toString()+"/"+s);Di(i,r,t)})}function Mf(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ht(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=10*1e3,Ff=30*1e3,xf=5*60*1e3;class Wf{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Lf(e);const s=to+(Ff-to)*Math.random();jn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ht(e,(i,r)=>{r>0&&Ft(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),jn(this.reportStats_.bind(this),Math.floor(Math.random()*2*xf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Sa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ir(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=Sa()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ne(e));return new As(we(),t,this.revert)}}else return D(me(this.path)===e,"operationForChild called for unrelated child."),new As(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.source=e,this.path=t,this.type=St.LISTEN_COMPLETE}operationForChild(e){return fe(this.path)?new es(this.source,we()):new es(this.source,Ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return fe(this.path)?new en(this.source,we(),this.snap.getImmediateChild(e)):new en(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=St.MERGE}operationForChild(e){if(fe(this.path)){const t=this.children.subtree(new Ne(e));return t.isEmpty()?null:t.value?new en(this.source,we(),t.value):new ts(this.source,we(),t)}else return D(me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ts(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const t=me(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qf(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Df(o.childName,o.snapshotNode))}),xn(n,i,"child_removed",e,s,t),xn(n,i,"child_added",e,s,t),xn(n,i,"child_moved",r,s,t),xn(n,i,"child_changed",e,s,t),xn(n,i,"value",e,s,t),i}function xn(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>Hf(n,l,a)),o.forEach(l=>{const a=jf(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function jf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Hf(n,e,t){if(e.childName==null||t.childName==null)throw Nn("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),i=new ae(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n,e){return{eventCache:n,serverCache:e}}function Hn(n,e,t,s){return Ys(new Gt(e,t,s),n.serverCache)}function Ta(n,e,t,s){return Ys(n.eventCache,new Gt(e,t,s))}function Ps(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function tn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;const Uf=()=>(fi||(fi=new ut(kh)),fi);class Oe{constructor(e,t=Uf()){this.value=e,this.children=t}static fromObject(e){let t=new Oe(null);return ht(e,(s,i)=>{t=t.set(new Ne(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:we(),value:this.value};if(fe(e))return null;{const s=me(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ae(e),t);return r!=null?{path:Ue(new Ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const t=me(e),s=this.children.get(t);return s!==null?s.subtree(Ae(e)):new Oe(null)}}set(e,t){if(fe(e))return new Oe(t,this.children);{const s=me(e),r=(this.children.get(s)||new Oe(null)).set(Ae(e),t),o=this.children.insert(s,r);return new Oe(this.value,o)}}remove(e){if(fe(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const t=me(e),s=this.children.get(t);if(s){const i=s.remove(Ae(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Oe(null):new Oe(this.value,r)}else return this}}get(e){if(fe(e))return this.value;{const t=me(e),s=this.children.get(t);return s?s.get(Ae(e)):null}}setTree(e,t){if(fe(e))return t;{const s=me(e),r=(this.children.get(s)||new Oe(null)).setTree(Ae(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Oe(this.value,o)}}fold(e){return this.fold_(we(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ue(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,we(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(fe(e))return null;{const r=me(e),o=this.children.get(r);return o?o.findOnPath_(Ae(e),Ue(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,we(),t)}foreachOnPath_(e,t,s){if(fe(e))return this;{this.value&&s(t,this.value);const i=me(e),r=this.children.get(i);return r?r.foreachOnPath_(Ae(e),Ue(t,i),s):new Oe(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(Ue(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.writeTree_=e}static empty(){return new Tt(new Oe(null))}}function Un(n,e,t){if(fe(e))return new Tt(new Oe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=it(i,e);return r=r.updateChild(o,t),new Tt(n.writeTree_.set(i,r))}else{const i=new Oe(t),r=n.writeTree_.setTree(e,i);return new Tt(r)}}}function no(n,e,t){let s=n;return ht(t,(i,r)=>{s=Un(s,Ue(e,i),r)}),s}function so(n,e){if(fe(e))return Tt.empty();{const t=n.writeTree_.setTree(e,new Oe(null));return new Tt(t)}}function Ai(n,e){return on(n,e)!=null}function on(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(it(t.path,e)):null}function io(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(xe,(s,i)=>{e.push(new ae(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ae(s,i.value))}),e}function jt(n,e){if(fe(e))return n;{const t=on(n,e);return t!=null?new Tt(new Oe(t)):new Tt(n.writeTree_.subtree(e))}}function Pi(n){return n.writeTree_.isEmpty()}function Sn(n,e){return ka(we(),n.writeTree_,e)}function ka(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ka(Ue(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Ue(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n,e){return Aa(e,n)}function Gf(n,e,t,s,i){D(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Un(n.visibleWrites,e,t)),n.lastWriteId=s}function zf(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Vf(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&$f(l,s.path)?i=!1:It(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Yf(n),!0;if(s.snap)n.visibleWrites=so(n.visibleWrites,s.path);else{const l=s.children;ht(l,a=>{n.visibleWrites=so(n.visibleWrites,Ue(s.path,a))})}return!0}else return!1}function $f(n,e){if(n.snap)return It(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&It(Ue(n.path,t),e))return!0;return!1}function Yf(n){n.visibleWrites=Na(n.allWrites,Kf,we()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Kf(n){return n.visible}function Na(n,e,t){let s=Tt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)It(t,o)?(l=it(t,o),s=Un(s,l,r.snap)):It(o,t)&&(l=it(o,t),s=Un(s,we(),r.snap.getChild(l)));else if(r.children){if(It(t,o))l=it(t,o),s=no(s,l,r.children);else if(It(o,t))if(l=it(o,t),fe(l))s=no(s,we(),r.children);else{const a=Cn(r.children,me(l));if(a){const c=a.getChild(Ae(l));s=Un(s,we(),c)}}}else throw Nn("WriteRecord should have .snap or .children")}}return s}function Ra(n,e,t,s,i){if(!s&&!i){const r=on(n.visibleWrites,e);if(r!=null)return r;{const o=jt(n.visibleWrites,e);if(Pi(o))return t;if(t==null&&!Ai(o,we()))return null;{const l=t||K.EMPTY_NODE;return Sn(o,l)}}}else{const r=jt(n.visibleWrites,e);if(!i&&Pi(r))return t;if(!i&&t==null&&!Ai(r,we()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(It(c.path,e)||It(e,c.path))},l=Na(n.allWrites,o,e),a=t||K.EMPTY_NODE;return Sn(l,a)}}}function Qf(n,e,t){let s=K.EMPTY_NODE;const i=on(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=jt(n.visibleWrites,e);return t.forEachChild(xe,(o,l)=>{const a=Sn(jt(r,new Ne(o)),l);s=s.updateImmediateChild(o,a)}),io(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=jt(n.visibleWrites,e);return io(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Jf(n,e,t,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ue(e,t);if(Ai(n.visibleWrites,r))return null;{const o=jt(n.visibleWrites,r);return Pi(o)?i.getChild(t):Sn(o,i.getChild(t))}}function Xf(n,e,t,s){const i=Ue(e,t),r=on(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=jt(n.visibleWrites,i);return Sn(o,s.getNode().getImmediateChild(t))}else return null}function Zf(n,e){return on(n.visibleWrites,e)}function ed(n,e,t,s,i,r,o){let l;const a=jt(n.visibleWrites,e),c=on(a,we());if(c!=null)l=c;else if(t!=null)l=Sn(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)f(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function td(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function Os(n,e,t,s){return Ra(n.writeTree,n.treePath,e,t,s)}function or(n,e){return Qf(n.writeTree,n.treePath,e)}function ro(n,e,t,s){return Jf(n.writeTree,n.treePath,e,t,s)}function Ms(n,e){return Zf(n.writeTree,Ue(n.treePath,e))}function nd(n,e,t,s,i,r){return ed(n.writeTree,n.treePath,e,t,s,i,r)}function lr(n,e,t){return Xf(n.writeTree,n.treePath,e,t)}function Da(n,e){return Aa(Ue(n.treePath,e),n.writeTree)}function Aa(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Xn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Jn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,In(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Xn(s,e.snapshotNode,i.oldSnap));else throw Nn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Pa=new id;class ar{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tn(this.viewCache_),r=nd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n){return{filter:n}}function od(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ld(n,e,t,s,i){const r=new sd;let o,l;if(t.type===St.OVERWRITE){const c=t;c.source.fromUser?o=Oi(n,e,c.path,c.snap,s,i,r):(D(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!fe(c.path),o=Ls(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===St.MERGE){const c=t;c.source.fromUser?o=cd(n,e,c.path,c.children,s,i,r):(D(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Mi(n,e,c.path,c.children,s,i,l,r))}else if(t.type===St.ACK_USER_WRITE){const c=t;c.revert?o=fd(n,e,c.path,s,i,r):o=ud(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===St.LISTEN_COMPLETE)o=hd(n,e,t.path,s,r);else throw Nn("Unknown operation type: "+t.type);const a=r.getChanges();return ad(e,o,a),{viewCache:o,changes:a}}function ad(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ps(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Ea(Ps(e)))}}function Oa(n,e,t,s,i,r){const o=e.eventCache;if(Ms(s,t)!=null)return e;{let l,a;if(fe(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=tn(e),u=c instanceof K?c:K.EMPTY_NODE,f=or(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Os(s,tn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=me(t);if(c===".priority"){D(Ut(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const f=ro(s,t,u,a);f!=null?l=n.filter.updatePriority(u,f):l=o.getNode()}else{const u=Ae(t);let f;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=ro(s,t,o.getNode(),a);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=lr(s,c,e.serverCache);f!=null?l=n.filter.updateChild(o.getNode(),c,f,u,i,r):l=o.getNode()}}return Hn(e,l,o.isFullyInitialized()||fe(t),n.filter.filtersNodes())}}function Ls(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(fe(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),p,null)}else{const p=me(t);if(!a.isCompleteForPath(t)&&Ut(t)>1)return e;const g=Ae(t),E=a.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=u.updatePriority(a.getNode(),E):c=u.updateChild(a.getNode(),p,E,g,Pa,null)}const f=Ta(e,c,a.isFullyInitialized()||fe(t),u.filtersNodes()),d=new ar(i,f,r);return Oa(n,f,t,i,d,l)}function Oi(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new ar(i,e,r);if(fe(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Hn(e,c,!0,n.filter.filtersNodes());else{const f=me(t);if(f===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=Hn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Ae(t),p=l.getNode().getImmediateChild(f);let g;if(fe(d))g=s;else{const y=u.getCompleteChild(f);y!=null?da(d)===".priority"&&y.getChild(pa(d)).isEmpty()?g=y:g=y.updateChild(d,s):g=K.EMPTY_NODE}if(p.equals(g))a=e;else{const y=n.filter.updateChild(l.getNode(),f,g,d,u,o);a=Hn(e,y,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function oo(n,e){return n.eventCache.isCompleteForChild(e)}function cd(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=Ue(t,a);oo(e,me(u))&&(l=Oi(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=Ue(t,a);oo(e,me(u))||(l=Oi(n,l,u,c,i,r,o))}),l}function lo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Mi(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;fe(t)?c=s:c=new Oe(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),g=lo(n,p,d);a=Ls(n,a,new Ne(f),g,i,r,o,l)}}),c.children.inorderTraversal((f,d)=>{const p=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!p){const g=e.serverCache.getNode().getImmediateChild(f),y=lo(n,g,d);a=Ls(n,a,new Ne(f),y,i,r,o,l)}}),a}function ud(n,e,t,s,i,r,o){if(Ms(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(fe(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Ls(n,e,t,a.getNode().getChild(t),i,r,l,o);if(fe(t)){let c=new Oe(null);return a.getNode().forEachChild(bn,(u,f)=>{c=c.set(new Ne(u),f)}),Mi(n,e,t,c,i,r,l,o)}else return e}else{let c=new Oe(null);return s.foreach((u,f)=>{const d=Ue(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Mi(n,e,t,c,i,r,l,o)}}function hd(n,e,t,s,i){const r=e.serverCache,o=Ta(e,r.getNode(),r.isFullyInitialized()||fe(t),r.isFiltered());return Oa(n,o,t,s,Pa,i)}function fd(n,e,t,s,i,r){let o;if(Ms(s,t)!=null)return e;{const l=new ar(s,e,i),a=e.eventCache.getNode();let c;if(fe(t)||me(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Os(s,tn(e));else{const f=e.serverCache.getNode();D(f instanceof K,"serverChildren would be complete if leaf node"),u=or(s,f)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=me(t);let f=lr(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=a.getImmediateChild(u)),f!=null?c=n.filter.updateChild(a,u,f,Ae(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,K.EMPTY_NODE,Ae(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Os(s,tn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ms(s,we())!=null,Hn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new nr(s.getIndex()),r=Pf(s);this.processor_=rd(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(K.EMPTY_NODE,l.getNode(),null),u=new Gt(a,o.isFullyInitialized(),i.filtersNodes()),f=new Gt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ys(f,u),this.eventGenerator_=new Bf(this.query_)}get query(){return this.query_}}function _d(n){return n.viewCache_.serverCache.getNode()}function pd(n){return Ps(n.viewCache_)}function md(n,e){const t=tn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!fe(e)&&!t.getImmediateChild(me(e)).isEmpty())?t.getChild(e):null}function ao(n){return n.eventRegistrations_.length===0}function gd(n,e){n.eventRegistrations_.push(e)}function co(n,e,t){const s=[];if(t){D(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function uo(n,e,t,s){e.type===St.MERGE&&e.source.queryId!==null&&(D(tn(n.viewCache_),"We should always have a full cache before handling merges"),D(Ps(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=ld(n.processor_,i,e,t,s);return od(n.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ma(n,r.changes,r.viewCache.eventCache.getNode(),null)}function vd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(xe,(r,o)=>{s.push(In(r,o))}),t.isFullyInitialized()&&s.push(Ea(t.getNode())),Ma(n,s,t.getNode(),e)}function Ma(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return qf(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class La{constructor(){this.views=new Map}}function yd(n){D(!Fs,"__referenceConstructor has already been defined"),Fs=n}function bd(){return D(Fs,"Reference.ts has not been loaded"),Fs}function wd(n){return n.views.size===0}function cr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),uo(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(uo(o,e,t,s));return r}}function Fa(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Os(t,i?s:null),a=!1;l?a=!0:s instanceof K?(l=or(t,s),a=!1):(l=K.EMPTY_NODE,a=!1);const c=Ys(new Gt(l,a,!1),new Gt(s,i,!1));return new dd(e,c)}return o}function Cd(n,e,t,s,i,r){const o=Fa(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),gd(o,t),vd(o,t)}function Ed(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=zt(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(co(c,t,s)),ao(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(co(a,t,s)),ao(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!zt(n)&&r.push(new(bd())(e._repo,e._path)),{removed:r,events:o}}function xa(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ht(n,e){let t=null;for(const s of n.views.values())t=t||md(s,e);return t}function Wa(n,e){if(e._queryParams.loadsAllData())return Qs(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Ba(n,e){return Wa(n,e)!=null}function zt(n){return Qs(n)!=null}function Qs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;function Id(n){D(!xs,"__referenceConstructor has already been defined"),xs=n}function Sd(){return D(xs,"Reference.ts has not been loaded"),xs}let Td=1;class ho{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=td(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kd(n,e,t,s,i){return Gf(n.pendingWriteTree_,e,t,s,i),i?hs(n,new en(Sa(),e,t)):[]}function fn(n,e,t=!1){const s=zf(n.pendingWriteTree_,e);if(Vf(n.pendingWriteTree_,e)){let r=new Oe(null);return s.snap!=null?r=r.set(we(),!0):ht(s.children,o=>{r=r.set(new Ne(o),!0)}),hs(n,new As(s.path,r,t))}else return[]}function us(n,e,t){return hs(n,new en(ir(),e,t))}function Nd(n,e,t){const s=Oe.fromObject(t);return hs(n,new ts(ir(),e,s))}function Rd(n,e){return hs(n,new es(ir(),e))}function Dd(n,e,t){const s=ur(n,t);if(s){const i=hr(s),r=i.path,o=i.queryId,l=it(r,e),a=new es(rr(o),l);return fr(n,r,a)}else return[]}function qa(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ba(o,e))){const a=Ed(o,e,t,s);wd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(d,p)=>zt(p));if(u&&!f){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=Md(d);for(let g=0;g<p.length;++g){const y=p[g],E=y.query,k=za(n,y);n.listenProvider_.startListening(Gn(E),ns(n,E),k.hashFn,k.onComplete)}}}!f&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Gn(e),null):c.forEach(d=>{const p=n.queryToTagMap.get(Js(d));n.listenProvider_.stopListening(Gn(d),p)}))}Ld(n,c)}return l}function ja(n,e,t,s){const i=ur(n,s);if(i!=null){const r=hr(i),o=r.path,l=r.queryId,a=it(o,e),c=new en(rr(l),a,t);return fr(n,o,c)}else return[]}function Ad(n,e,t,s){const i=ur(n,s);if(i){const r=hr(i),o=r.path,l=r.queryId,a=it(o,e),c=Oe.fromObject(t),u=new ts(rr(l),a,c);return fr(n,o,u)}else return[]}function Pd(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=it(d,i);r=r||Ht(p,g),o=o||zt(p)});let l=n.syncPointTree_.get(i);l?(o=o||zt(l),r=r||Ht(l,we())):(l=new La,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=K.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,g)=>{const y=Ht(g,we());y&&(r=r.updateImmediateChild(p,y))}));const c=Ba(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Js(e);D(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=Fd();n.queryToTagMap.set(d,p),n.tagToQueryMap.set(p,d)}const u=Ks(n.pendingWriteTree_,i);let f=Cd(l,e,t,u,r,a);if(!c&&!o&&!s){const d=Wa(l,e);f=f.concat(xd(n,e,d))}return f}function Ha(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=it(o,e),c=Ht(l,a);if(c)return c});return Ra(i,e,r,t,!0)}function Od(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const f=it(c,t);s=s||Ht(u,f)});let i=n.syncPointTree_.get(t);i?s=s||Ht(i,we()):(i=new La,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Gt(s,!0,!1):null,l=Ks(n.pendingWriteTree_,e._path),a=Fa(i,e,l,r?o.getNode():K.EMPTY_NODE,r);return pd(a)}function hs(n,e){return Ua(e,n.syncPointTree_,null,Ks(n.pendingWriteTree_,we()))}function Ua(n,e,t,s){if(fe(n.path))return Ga(n,e,t,s);{const i=e.get(we());t==null&&i!=null&&(t=Ht(i,we()));let r=[];const o=me(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=Da(s,o);r=r.concat(Ua(l,a,c,u))}return i&&(r=r.concat(cr(i,n,s,t))),r}}function Ga(n,e,t,s){const i=e.get(we());t==null&&i!=null&&(t=Ht(i,we()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Da(s,o),u=n.operationForChild(o);u&&(r=r.concat(Ga(u,l,a,c)))}),i&&(r=r.concat(cr(i,n,s,t))),r}function za(n,e){const t=e.query,s=ns(n,t);return{hashFn:()=>(_d(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Dd(n,t._path,s):Rd(n,t._path);{const r=Dh(i,t);return qa(n,t,null,r)}}}}function ns(n,e){const t=Js(e);return n.queryToTagMap.get(t)}function Js(n){return n._path.toString()+"$"+n._queryIdentifier}function ur(n,e){return n.tagToQueryMap.get(e)}function hr(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ne(n.substr(0,e))}}function fr(n,e,t){const s=n.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=Ks(n.pendingWriteTree_,e);return cr(s,t,i,null)}function Md(n){return n.fold((e,t,s)=>{if(t&&zt(t))return[Qs(t)];{let i=[];return t&&(i=xa(t)),ht(s,(r,o)=>{i=i.concat(o)}),i}})}function Gn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Sd())(n._repo,n._path):n}function Ld(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Js(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Fd(){return Td++}function xd(n,e,t){const s=e._path,i=ns(n,e),r=za(n,t),o=n.listenProvider_.startListening(Gn(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)D(!zt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,f)=>{if(!fe(c)&&u&&zt(u))return[Qs(u).query];{let d=[];return u&&(d=d.concat(xa(u).map(p=>p.query))),ht(f,(p,g)=>{d=d.concat(g)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(Gn(u),ns(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new dr(t)}node(){return this.node_}}class _r{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ue(this.path_,e);return new _r(this.syncTree_,t)}node(){return Ha(this.syncTree_,this.path_)}}const Wd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},fo=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Bd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return qd(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Bd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},qd=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},jd=function(n,e,t,s){return pr(e,new _r(t,n),s)},Hd=function(n,e,t){return pr(n,new dr(e),t)};function pr(n,e,t){const s=n.getPriority().val(),i=fo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=fo(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new $e(l,Je(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new $e(i))),o.forEachChild(xe,(l,a)=>{const c=pr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function gr(n,e){let t=e instanceof Ne?e:new Ne(e),s=n,i=me(t);for(;i!==null;){const r=Cn(s.node.children,i)||{children:{},childCount:0};s=new mr(i,s,r),t=Ae(t),i=me(t)}return s}function An(n){return n.node.value}function Va(n,e){n.node.value=e,Li(n)}function $a(n){return n.node.childCount>0}function Ud(n){return An(n)===void 0&&!$a(n)}function Xs(n,e){ht(n.node.children,(t,s)=>{e(new mr(t,n,s))})}function Ya(n,e,t,s){t&&!s&&e(n),Xs(n,i=>{Ya(i,e,!0,s)}),t&&s&&e(n)}function Gd(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fs(n){return new Ne(n.parent===null?n.name:fs(n.parent)+"/"+n.name)}function Li(n){n.parent!==null&&zd(n.parent,n.name,n)}function zd(n,e,t){const s=Ud(t),i=Ft(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Li(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Li(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=/[\[\].#$\/\u0000-\u001F\u007F]/,$d=/[\[\].#$\u0000-\u001F\u007F]/,di=10*1024*1024,Ka=function(n){return typeof n=="string"&&n.length!==0&&!Vd.test(n)},Qa=function(n){return typeof n=="string"&&n.length!==0&&!$d.test(n)},Yd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qa(n)},Ja=function(n,e,t){const s=t instanceof Ne?new uf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Kt(s));if(typeof e=="function")throw new Error(n+"contains a function "+Kt(s)+" with contents = "+e.toString());if(Vl(e))throw new Error(n+"contains "+e.toString()+" "+Kt(s));if(typeof e=="string"&&e.length>di/3&&Vs(e)>di)throw new Error(n+"contains a string greater than "+di+" utf8 bytes "+Kt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ht(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ka(o)))throw new Error(n+" contains an invalid key ("+o+") "+Kt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hf(s,o),Ja(n,l,s),ff(s)}),i&&r)throw new Error(n+' contains ".value" child '+Kt(s)+" in addition to actual children.")}},Xa=function(n,e,t,s){if(!(s&&t===void 0)&&!Qa(t))throw new Error(Fl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Kd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xa(n,e,t,s)},Qd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ka(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Yd(t))throw new Error(Fl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ma(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function $t(n,e,t){Xd(n,t),Zd(n,s=>It(s,e)||It(e,s))}function Zd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(e_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function e_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Jt&&Ze("event: "+t.toString()),as(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="repo_interrupt",n_=25;class s_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ds(),this.transactionQueueTree_=new mr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function i_(n,e,t){if(n.stats_=Xi(n.repoInfo_),n.forceRestClient_||Mh())n.server_=new Rs(n.repoInfo_,(s,i,r,o)=>{_o(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>po(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ot(n.repoInfo_,e,(s,i,r,o)=>{_o(n,s,i,r,o)},s=>{po(n,s)},s=>{o_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Bh(n.repoInfo_,()=>new Wf(n.stats_,n.server_)),n.infoData_=new Of,n.infoSyncTree_=new ho({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=us(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),vr(n,"connected",!1),n.serverSyncTree_=new ho({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);$t(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function r_(n){const t=n.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Za(n){return Wd({timestamp:r_(n)})}function _o(n,e,t,s,i){n.dataUpdateCount++;const r=new Ne(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Es(t,c=>Je(c));o=Ad(n.serverSyncTree_,r,a,i)}else{const a=Je(t);o=ja(n.serverSyncTree_,r,a,i)}else if(s){const a=Es(t,c=>Je(c));o=Nd(n.serverSyncTree_,r,a)}else{const a=Je(t);o=us(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=wr(n,r)),$t(n.eventQueue_,l,o)}function po(n,e){vr(n,"connected",e),e===!1&&c_(n)}function o_(n,e){ht(e,(t,s)=>{vr(n,t,s)})}function vr(n,e,t){const s=new Ne("/.info/"+e),i=Je(t);n.infoData_.updateSnapshot(s,i);const r=us(n.infoSyncTree_,s,i);$t(n.eventQueue_,s,r)}function l_(n){return n.nextWriteId_++}function a_(n,e,t){const s=Od(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Je(i).withIndex(e._queryParams.getIndex());Pd(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=us(n.serverSyncTree_,e._path,r);else{const l=ns(n.serverSyncTree_,e);o=ja(n.serverSyncTree_,e._path,r,l)}return $t(n.eventQueue_,e._path,o),qa(n.serverSyncTree_,e,t,null,!0),r},i=>(yr(n,"get for query "+He(e)+" failed: "+i),Promise.reject(new Error(i))))}function c_(n){yr(n,"onDisconnectEvents");const e=Za(n),t=Ds();Di(n.onDisconnect_,we(),(i,r)=>{const o=jd(i,r,n.serverSyncTree_,e);Ia(t,i,o)});let s=[];Di(t,we(),(i,r)=>{s=s.concat(us(n.serverSyncTree_,i,r));const o=d_(n,i);wr(n,o)}),n.onDisconnect_=Ds(),$t(n.eventQueue_,we(),s)}function u_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(t_)}function yr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ze(t,...e)}function ec(n,e,t){return Ha(n.serverSyncTree_,e,t)||K.EMPTY_NODE}function br(n,e=n.transactionQueueTree_){if(e||Zs(n,e),An(e)){const t=nc(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&h_(n,fs(e),t)}else $a(e)&&Xs(e,t=>{br(n,t)})}function h_(n,e,t){const s=t.map(c=>c.currentWriteId),i=ec(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=it(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{yr(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(fn(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&f.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Zs(n,gr(n.transactionQueueTree_,e)),br(n,n.transactionQueueTree_),$t(n.eventQueue_,e,u);for(let d=0;d<f.length;d++)as(f[d])}else{if(c==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{vt("transaction at "+a.toString()+" failed: "+c);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=c}wr(n,e)}},o)}function wr(n,e){const t=tc(n,e),s=fs(t),i=nc(n,t);return f_(n,i,s),s}function f_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=it(t,a.path);let u=!1,f;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,f=a.abortReason,i=i.concat(fn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=n_)u=!0,f="maxretry",i=i.concat(fn(n.serverSyncTree_,a.currentWriteId,!0));else{const d=ec(n,a.path,o);a.currentInputSnapshot=d;const p=e[l].update(d.val());if(p!==void 0){Ja("transaction failed: Data returned ",p,a.path);let g=Je(p);typeof p=="object"&&p!=null&&Ft(p,".priority")||(g=g.updatePriority(d.getPriority()));const E=a.currentWriteId,k=Za(n),A=Hd(g,d,k);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=A,a.currentWriteId=l_(n),o.splice(o.indexOf(E),1),i=i.concat(kd(n.serverSyncTree_,a.path,A,a.currentWriteId,a.applyLocally)),i=i.concat(fn(n.serverSyncTree_,E,!0))}else u=!0,f="nodata",i=i.concat(fn(n.serverSyncTree_,a.currentWriteId,!0))}$t(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(f),!1,null))))}Zs(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)as(s[l]);br(n,n.transactionQueueTree_)}function tc(n,e){let t,s=n.transactionQueueTree_;for(t=me(e);t!==null&&An(s)===void 0;)s=gr(s,t),e=Ae(e),t=me(e);return s}function nc(n,e){const t=[];return sc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function sc(n,e,t){const s=An(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Xs(e,i=>{sc(n,i,t)})}function Zs(n,e){const t=An(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Va(e,t.length>0?t:void 0)}Xs(e,s=>{Zs(n,s)})}function d_(n,e){const t=fs(tc(n,e)),s=gr(n.transactionQueueTree_,e);return Gd(s,i=>{_i(n,i)}),_i(n,s),Ya(s,i=>{_i(n,i)}),t}function _i(n,e){const t=An(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(D(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(fn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Va(e,void 0):t.length=r+1,$t(n.eventQueue_,fs(e),i);for(let o=0;o<s.length;o++)as(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function p_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):vt(`Invalid query segment '${t}' in query '${n}'`)}return e}const mo=function(n,e){const t=m_(n),s=t.namespace;t.domain==="firebase.com"&&Lt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Sh();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ia(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Ne(t.pathString)}},m_=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(u,f)),u<f&&(i=__(n.substring(u,f)));const d=p_(n.substring(Math.min(n.length,f)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class v_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Cr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return fe(this._path)?null:da(this._path)}get ref(){return new xt(this._repo,this._path)}get _queryIdentifier(){const e=eo(this._queryParams),t=Qi(e);return t==="{}"?"default":t}get _queryObject(){return eo(this._queryParams)}isEqual(e){if(e=Rn(e),!(e instanceof Cr))return!1;const t=this._repo===e._repo,s=ma(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+cf(this._path)}}class xt extends Cr{constructor(e,t){super(e,t,new sr,!1)}get parent(){const e=pa(this._path);return e===null?null:new xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ss{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ne(e),s=Fi(this.ref,e);return new ss(this._node.getChild(t),s,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ss(i,Fi(this.ref,s),xe)))}hasChild(e){const t=new Ne(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function b_(n,e){return n=Rn(n),n._checkNotDeleted("ref"),e!==void 0?Fi(n._root,e):n._root}function Fi(n,e){return n=Rn(n),me(n._path)===null?Kd("child","path",e,!1):Xa("child","path",e,!1),new xt(n._repo,Ue(n._path,e))}function w_(n){n=Rn(n);const e=new y_(()=>{}),t=new Er(e);return a_(n._repo,n,t).then(s=>new ss(s,new xt(n._repo,n._path),n._queryParams.getIndex()))}class Er{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new g_("value",this,new ss(e.snapshotNode,new xt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new v_(this,e,t):null}matches(e){return e instanceof Er?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function C_(n,...e){let t=Rn(n);for(const s of e)t=s._apply(t);return t}yd(xt);Id(xt);/**
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
 */const E_="FIREBASE_DATABASE_EMULATOR_HOST",xi={};let I_=!1;function S_(n,e,t,s){n.repoInfo_=new ia(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function T_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=mo(r,i),l=o.repoInfo,a,c;typeof process<"u"&&Fr&&(c=Fr[E_]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=mo(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new yn(yn.OWNER):new Fh(n.name,n.options,e);Qd("Invalid Firebase Database URL",o),fe(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=N_(l,n,u,new Lh(n.name,t));return new R_(f,n)}function k_(n,e){const t=xi[e];(!t||t[n.key]!==n)&&Lt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),u_(n),delete t[n.key]}function N_(n,e,t,s){let i=xi[e.name];i||(i={},xi[e.name]=i);let r=i[n.toURLString()];return r&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new s_(n,I_,t,s),i[n.toURLString()]=r,r}class R_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(i_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xt(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(k_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function D_(n=ah(),e){const t=ih(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Qc("database");s&&A_(t,...s)}return t}function A_(n,e,t,s={}){n=Rn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new yn(yn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Jc(s.mockUserToken,n.app.options.projectId);r=new yn(o)}S_(i,e,t,r)}/**
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
 */function P_(n){bh(lh),Ss(new Yn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return T_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),gn(xr,Wr,n),gn(xr,Wr,"esm2017")}Ot.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ot.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};P_();var Wi={},ic={},ei={};Object.defineProperty(ei,"__esModule",{value:!0});ei.rotx=void 0;function O_(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}ei.rotx=O_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=ei;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(ic);var rc={},ti={};Object.defineProperty(ti,"__esModule",{value:!0});ti.base64=void 0;class M_{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const L_=new M_;ti.base64=L_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=ti;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(rc);var oc={},ni={};Object.defineProperty(ni,"__esModule",{value:!0});ni.hex=void 0;class F_{encode(e){let t="",s="";for(let i=0;i<e.length;i++)t=e.charCodeAt(i).toString(16),s+=("000"+t).slice(-4);return s}decode(e){let t=e.match(/.{1,4}/g)||[],s="";for(let i=0;i<t.length;i++)s+=String.fromCharCode(parseInt(t[i],16));return s}}const x_=new F_;ni.hex=x_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=ni;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(oc);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=ic;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=rc;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var s=oc;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return s.hex}})})(Wi);let W_={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},lc={};for(let[n,e]of Object.entries(W_))lc[Wi.rotx(n,18)]=Wi.rotx(e,18);let Ws={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},Bs={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},B_=["head","body","legs","feet","neck","back","ring","misc"],qs={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged"},q_=D_(ql(lc)),Tn="https://fantastic-frontier-roblox.fandom.com/wiki/",Vt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Nt={currentGameData:{equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1}},settings:{muted:!1,hardMode:{equipment:!1,weapons:!1,endless_equipment:!1,endless_weapons:!1},mode:"equipment"},playerStats:{equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},endless_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0},endless_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0}}},j_={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function Bi(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function Pt(n){n.target.closest("button").blur()}function dn(n){return Object.keys(n).length!==0}function Dt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Ir(){Bi("?ls=true"),setTimeout(Bi)}let go=localStorage.getItem("fd-currentGameData"),vo=localStorage.getItem("fd-settings"),yo=localStorage.getItem("fd-playerStats"),bo=localStorage.getItem("fd-changelogSeen"),wo=localStorage.getItem("fd-helpSeen"),kt=yt(go?JSON.parse(go):Nt.currentGameData),pt=yt(),ot=yt(vo?{...JSON.parse(vo),mode:"equipment"}:Nt.settings),nn=yt(),kn=yt(yo?JSON.parse(yo):Nt.playerStats),Ct=yt(),qi=yt({}),Co=yt({}),st=yt({component:null,complete:!1}),js=yt(7),sn=yt(!1),is=yt(bo?JSON.parse(bo):!1),ji=yt(wo?JSON.parse(wo):!1),Eo=[kt,ot,kn];for(let n=0;n<Eo.length;n++){let e=zn(Eo[n]),t=Nt[Object.keys(Nt)[n]];for(let s of Object.keys(t))e[s]===void 0&&(e[s]=t[s]);for(let s of Object.keys(e))t[s]===void 0&&delete e[s]}ot.subscribe(n=>{Ir(),pt.set(zn(kt)[n.mode]),Ct.set(zn(kn)[n.mode]),nn.set(n.hardMode[n.mode]),localStorage.setItem("fd-settings",JSON.stringify(n))});kt.subscribe(n=>{Ir(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});pt.subscribe(n=>{kt.update(e=>({...e,[zn(ot).mode]:n}))});kn.subscribe(n=>{Ir(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});Ct.subscribe(n=>{kn.update(e=>({...e,[zn(ot).mode]:n}))});nn.subscribe(n=>{ot.update(e=>({...e,hardMode:{...e.hardMode,[e.mode]:n}})),js.set(n?6:7)});is.subscribe(n=>localStorage.setItem("fd-changelogSeen",n));ji.subscribe(n=>localStorage.setItem("fd-helpSeen",n));function H_(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:f=p=>Math.sqrt(p)*120,easing:d=Sl}=s;return{delay:u,duration:rn(f)?f(Math.sqrt(a*a+c*c)):f,easing:d,css:(p,g)=>{const y=g*a,E=g*c,k=p+g*e.width/t.width,A=p+g*e.height/t.height;return`transform: ${r} translate(${y}px, ${E}px) scale(${k}, ${A});`}}}function Io(n,e,t){const s=n.slice();s[10]=e[t];const i=s[1]?null:s[10].special==s[0].special;s[11]=i;const r=s[1]?null:pi(s[0].types,s[10].types);s[12]=r;const o=s[1]?null:s[12]==s[0].types.length&&s[10].types.length==s[0].types.length;s[13]=o;const l=s[1]?s[10].slot==s[0].slot:null;s[14]=l;const a=s[1]?pi(s[0].stats,s[10].stats):null;s[15]=a;const c=s[1]?s[15]==s[0].stats.length&&s[10].stats.length==s[0].stats.length:null;s[16]=c;const u=Math.ceil((s[10].cost.min+s[10].cost.max)/2);s[17]=u;const f=Math.ceil((s[0].cost.min+s[0].cost.max)/2);s[18]=f;const d=s[17]==s[18];s[19]=d;const p=pi(s[0].colors,s[10].colors);s[20]=p;const g=s[20]==s[0].colors.length&&s[10].colors.length==s[0].colors.length;s[21]=g;const y=s[10].outline==s[0].outline;s[22]=y;const E=s[10].release==s[0].release;return s[23]=E,s}function So(n,e,t){const s=n.slice();return s[26]=e[t],s}function To(n,e,t){const s=n.slice();return s[32]=e[t],s}function ko(n,e,t){const s=n.slice();return s[29]=e[t],s}function No(n){let e=[],t=new Map,s,i,r=Ee(n[3].chosenItems.toReversed());const o=l=>l[10];for(let l=0;l<r.length;l+=1){let a=Io(n,r,l),c=o(a);t.set(c,e[l]=Fo(c,a))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=bt()},m(l,a){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(l,a);T(l,s,a),i=!0},p(l,a){if(a[0]&63){r=Ee(l[3].chosenItems.toReversed()),mt();for(let c=0;c<e.length;c+=1)e[c].r();e=Wc(e,a,o,1,l,r,t,s.parentNode,xc,Fo,s,Io);for(let c=0;c<e.length;c+=1)e[c].a();gt()}},i(l){if(!i){for(let a=0;a<r.length;a+=1)Q(e[a]);i=!0}},o(l){for(let a=0;a<e.length;a+=1)he(e[a]);i=!1},d(l){l&&I(s);for(let a=0;a<e.length;a+=1)e[a].d(l)}}}function U_(n){let e,t;function s(l,a){return l[10].types.length?V_:z_}let i=s(n),r=i(n),o=!n[4]&&n[12]&&!n[13]&&Do(n);return{c(){r.c(),e=b(),o&&o.c(),t=bt()},m(l,a){r.m(l,a),T(l,e,a),o&&o.m(l,a),T(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[4]&&l[12]&&!l[13]?o?o.p(l,a):(o=Do(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(I(e),I(t)),r.d(l),o&&o.d(l)}}}function G_(n){let e,t;function s(l,a){return l[10].stats.length?Y_:$_}let i=s(n),r=i(n),o=!n[4]&&n[15]&&!n[16]&&Po(n);return{c(){r.c(),e=b(),o&&o.c(),t=bt()},m(l,a){r.m(l,a),T(l,e,a),o&&o.m(l,a),T(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[4]&&l[15]&&!l[16]?o?o.p(l,a):(o=Po(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(I(e),I(t)),r.d(l),o&&o.d(l)}}}function z_(n){let e;return{c(){e=q("None")},m(t,s){T(t,e,s)},p:ne,d(t){t&&I(e)}}}function V_(n){let e,t=Ee(n[10].types),s=[];for(let i=0;i<t.length;i+=1)s[i]=Ro(To(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);T(i,e,r)},p(i,r){if(r[0]&8){t=Ee(i[10].types);let o;for(o=0;o<t.length;o+=1){const l=To(i,t,o);s[o]?s[o].p(l,r):(s[o]=Ro(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&I(e),Xe(s,i)}}}function Ro(n){let e=qs[n[32]]+(n[32]==n[10].types[n[10].types.length-1]?"":", "),t;return{c(){t=q(e)},m(s,i){T(s,t,i)},p(s,i){i[0]&8&&e!==(e=qs[s[32]]+(s[32]==s[10].types[s[10].types.length-1]?"":", "))&&de(t,e)},d(s){s&&I(t)}}}function Do(n){let e,t=n[12]+"",s;return{c(){e=m("span"),s=q(t),_(e,"class","bgInfo")},m(i,r){T(i,e,r),h(e,s)},p(i,r){r[0]&11&&t!==(t=i[12]+"")&&de(s,t)},d(i){i&&I(e)}}}function $_(n){let e;return{c(){e=q("None")},m(t,s){T(t,e,s)},p:ne,d(t){t&&I(e)}}}function Y_(n){let e,t=Ee(n[10].stats),s=[];for(let i=0;i<t.length;i+=1)s[i]=Ao(ko(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);T(i,e,r)},p(i,r){if(r[0]&8){t=Ee(i[10].stats);let o;for(o=0;o<t.length;o+=1){const l=ko(i,t,o);s[o]?s[o].p(l,r):(s[o]=Ao(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&I(e),Xe(s,i)}}}function Ao(n){let e=Bs[n[29]]+(n[29]==n[10].stats[n[10].stats.length-1]?"":", "),t;return{c(){t=q(e)},m(s,i){T(s,t,i)},p(s,i){i[0]&8&&e!==(e=Bs[s[29]]+(s[29]==s[10].stats[s[10].stats.length-1]?"":", "))&&de(t,e)},d(s){s&&I(t)}}}function Po(n){let e,t=n[15]+"",s;return{c(){e=m("span"),s=q(t),_(e,"class","bgInfo")},m(i,r){T(i,e,r),h(e,s)},p(i,r){r[0]&11&&t!==(t=i[15]+"")&&de(s,t)},d(i){i&&I(e)}}}function K_(n){let e=n[17].toLocaleString()+"",t,s,i,r;return{c(){t=q(e),s=b(),i=m("br"),r=q(`\r
                        Gold`)},m(o,l){T(o,t,l),T(o,s,l),T(o,i,l),T(o,r,l)},p(o,l){l[0]&8&&e!==(e=o[17].toLocaleString()+"")&&de(t,e)},d(o){o&&(I(t),I(s),I(i),I(r))}}}function Q_(n){let e;return{c(){e=q("Unpurchasable")},m(t,s){T(t,e,s)},p:ne,d(t){t&&I(e)}}}function Oo(n){let e,t;return{c(){e=m("iconify-icon"),We(e,"class","bgInfo"),We(e,"icon","mingcute:arrow-up-fill"),We(e,"flip",t=n[17]>n[18]?"vertical":"")},m(s,i){T(s,e,i)},p(s,i){i[0]&9&&t!==(t=s[17]>s[18]?"vertical":"")&&We(e,"flip",t)},d(s){s&&I(e)}}}function Mo(n){let e=(n[26]==n[10].colors[0]?Dt(n[26]):n[26])+(n[26]==n[10].colors[n[10].colors.length-1]?"":", "),t;return{c(){t=q(e)},m(s,i){T(s,t,i)},p(s,i){i[0]&8&&e!==(e=(s[26]==s[10].colors[0]?Dt(s[26]):s[26])+(s[26]==s[10].colors[s[10].colors.length-1]?"":", "))&&de(t,e)},d(s){s&&I(t)}}}function Lo(n){let e,t=n[20]+"",s;return{c(){e=m("span"),s=q(t),_(e,"class","bgInfo")},m(i,r){T(i,e,r),h(e,s)},p(i,r){r[0]&9&&t!==(t=i[20]+"")&&de(s,t)},d(i){i&&I(e)}}}function Fo(n,e){let t,s,i,r,o,l,a,c,u,f,d,p=e[10].name+"",g,y,E,k,A,O=(e[1]?Dt(e[10].slot):e[10].special?"Yes":"No")+"",v,S,F,P,M,H,Z,ie,W,ee,ye,j,$,G,ce,te,Y,V,z,N=Dt(e[10].outline)+"",U,B,L,ge,se,J=Ws[e[10].release]+"",Ie,be,ze,qe,Be,nt,Qe=ne,re,wt,Ce;function Se(C,le){return C[1]?G_:U_}let Me=Se(e),Fe=Me(e);function _e(C,le){return C[10].cost.min==null?Q_:K_}let ke=_e(e),ue=ke(e),x=!e[4]&&!e[19]&&e[17]&&Oo(e),oe=Ee(e[10].colors),Te=[];for(let C=0;C<oe.length;C+=1)Te[C]=Mo(So(e,oe,C));let pe=!e[4]&&e[20]&&!e[21]&&Lo(e);return{key:n,first:null,c(){t=m("div"),s=m("div"),i=m("a"),r=m("img"),a=b(),c=m("iconify-icon"),f=b(),d=m("span"),g=q(p),k=b(),A=m("span"),v=q(O),P=b(),M=m("span"),Fe.c(),ie=b(),W=m("span"),ue.c(),ee=b(),x&&x.c(),$=b(),G=m("span");for(let C=0;C<Te.length;C+=1)Te[C].c();ce=b(),pe&&pe.c(),V=b(),z=m("span"),U=q(N),ge=b(),se=m("span"),Ie=q(J),be=q(" Update"),Be=b(),Ge(r.src,o=Vt+e[10].image)||_(r,"src",o),_(r,"alt",l=e[10].name),_(r,"class","svelte-pl04pb"),We(c,"icon","tabler:link"),We(c,"class","svelte-pl04pb"),_(i,"class","flex fjc-center fai-center svelte-pl04pb"),_(i,"href",u=Tn+e[10].link),_(i,"target","_blank"),_(d,"class","tooltip"),_(d,"id","right"),_(s,"id","itemImage"),_(s,"class","ff-item svelte-pl04pb"),_(A,"class","ff-bg ff-item svelte-pl04pb"),_(A,"id",S=(e[1]?e[14]:e[11])?"correct":"wrong"),_(M,"class","ff-bg ff-item svelte-pl04pb"),_(M,"id",H=(e[1]?e[16]:e[13])?"correct":(e[1]?e[15]:e[12])?"partial":"wrong"),Ke(M,"smallerStats",e[1]&&e[10].stats.length>=7),_(W,"class","ff-bg ff-item svelte-pl04pb"),_(W,"id",ye=e[19]?"correct":"wrong"),_(G,"class","ff-bg ff-item svelte-pl04pb"),_(G,"id",te=e[21]?"correct":e[20]?"partial":"wrong"),_(z,"class","ff-bg ff-item svelte-pl04pb"),_(z,"id",B=e[22]?"correct":"wrong"),_(se,"class","ff-bg ff-item svelte-pl04pb"),_(se,"id",ze=e[23]?"correct":"wrong"),_(t,"class","itemRow svelte-pl04pb"),this.first=t},m(C,le){T(C,t,le),h(t,s),h(s,i),h(i,r),h(i,a),h(i,c),h(s,f),h(s,d),h(d,g),h(t,k),h(t,A),h(A,v),h(t,P),h(t,M),Fe.m(M,null),h(t,ie),h(t,W),ue.m(W,null),h(W,ee),x&&x.m(W,null),h(t,$),h(t,G);for(let R=0;R<Te.length;R+=1)Te[R]&&Te[R].m(G,null);h(G,ce),pe&&pe.m(G,null),h(t,V),h(t,z),h(z,U),h(t,ge),h(t,se),h(se,Ie),h(se,be),h(t,Be),re=!0,wt||(Ce=[gc(y=e[6].call(null,s,[e[11],e[12],e[13],e[14],e[15],e[16],e[19],e[20],e[21],e[22],e[23]])),Le(se,"introend",e[9])],wt=!0)},p(C,le){if(e=C,(!re||le[0]&8&&!Ge(r.src,o=Vt+e[10].image))&&_(r,"src",o),(!re||le[0]&8&&l!==(l=e[10].name))&&_(r,"alt",l),(!re||le[0]&8&&u!==(u=Tn+e[10].link))&&_(i,"href",u),(!re||le[0]&8)&&p!==(p=e[10].name+"")&&de(g,p),y&&rn(y.update)&&le[0]&11&&y.update.call(null,[e[11],e[12],e[13],e[14],e[15],e[16],e[19],e[20],e[21],e[22],e[23]]),(!re||le[0]&10)&&O!==(O=(e[1]?Dt(e[10].slot):e[10].special?"Yes":"No")+"")&&de(v,O),(!re||le[0]&11&&S!==(S=(e[1]?e[14]:e[11])?"correct":"wrong"))&&_(A,"id",S),Me===(Me=Se(e))&&Fe?Fe.p(e,le):(Fe.d(1),Fe=Me(e),Fe&&(Fe.c(),Fe.m(M,null))),(!re||le[0]&11&&H!==(H=(e[1]?e[16]:e[13])?"correct":(e[1]?e[15]:e[12])?"partial":"wrong"))&&_(M,"id",H),(!re||le[0]&10)&&Ke(M,"smallerStats",e[1]&&e[10].stats.length>=7),ke===(ke=_e(e))&&ue?ue.p(e,le):(ue.d(1),ue=ke(e),ue&&(ue.c(),ue.m(W,ee))),!e[4]&&!e[19]&&e[17]?x?x.p(e,le):(x=Oo(e),x.c(),x.m(W,null)):x&&(x.d(1),x=null),(!re||le[0]&9&&ye!==(ye=e[19]?"correct":"wrong"))&&_(W,"id",ye),le[0]&8){oe=Ee(e[10].colors);let R;for(R=0;R<oe.length;R+=1){const _t=So(e,oe,R);Te[R]?Te[R].p(_t,le):(Te[R]=Mo(_t),Te[R].c(),Te[R].m(G,ce))}for(;R<Te.length;R+=1)Te[R].d(1);Te.length=oe.length}!e[4]&&e[20]&&!e[21]?pe?pe.p(e,le):(pe=Lo(e),pe.c(),pe.m(G,null)):pe&&(pe.d(1),pe=null),(!re||le[0]&9&&te!==(te=e[21]?"correct":e[20]?"partial":"wrong"))&&_(G,"id",te),(!re||le[0]&8)&&N!==(N=Dt(e[10].outline)+"")&&de(U,N),(!re||le[0]&9&&B!==(B=e[22]?"correct":"wrong"))&&_(z,"id",B),(!re||le[0]&8)&&J!==(J=Ws[e[10].release]+"")&&de(Ie,J),(!re||le[0]&9&&ze!==(ze=e[23]?"correct":"wrong"))&&_(se,"id",ze)},r(){nt=t.getBoundingClientRect()},f(){kc(t),Qe()},a(){Qe(),Qe=Tc(t,nt,H_,{duration:125})},i(C){re||(C&&je(()=>{re&&(E||(E=Re(s,Ve,{duration:e[2]?0:300},!0)),E.run(1))}),C&&je(()=>{re&&(F||(F=Re(A,Ve,{duration:e[2]?0:300,delay:e[2]?0:250},!0)),F.run(1))}),C&&je(()=>{re&&(Z||(Z=Re(M,Ve,{duration:e[2]?0:300,delay:e[2]?0:550},!0)),Z.run(1))}),C&&je(()=>{re&&(j||(j=Re(W,Ve,{duration:e[2]?0:300,delay:e[2]?0:850},!0)),j.run(1))}),C&&je(()=>{re&&(Y||(Y=Re(G,Ve,{duration:e[2]?0:300,delay:e[2]?0:1150},!0)),Y.run(1))}),C&&je(()=>{re&&(L||(L=Re(z,Ve,{duration:e[2]?0:300,delay:e[2]?0:1450},!0)),L.run(1))}),C&&je(()=>{re&&(qe||(qe=Re(se,Ve,{duration:e[2]?0:300,delay:e[2]?0:1750},!0)),qe.run(1))}),re=!0)},o(C){C&&(E||(E=Re(s,Ve,{duration:e[2]?0:300},!1)),E.run(0)),C&&(F||(F=Re(A,Ve,{duration:e[2]?0:300,delay:e[2]?0:250},!1)),F.run(0)),C&&(Z||(Z=Re(M,Ve,{duration:e[2]?0:300,delay:e[2]?0:550},!1)),Z.run(0)),C&&(j||(j=Re(W,Ve,{duration:e[2]?0:300,delay:e[2]?0:850},!1)),j.run(0)),C&&(Y||(Y=Re(G,Ve,{duration:e[2]?0:300,delay:e[2]?0:1150},!1)),Y.run(0)),C&&(L||(L=Re(z,Ve,{duration:e[2]?0:300,delay:e[2]?0:1450},!1)),L.run(0)),C&&(qe||(qe=Re(se,Ve,{duration:e[2]?0:300,delay:e[2]?0:1750},!1)),qe.run(0)),re=!1},d(C){C&&I(t),C&&E&&E.end(),C&&F&&F.end(),Fe.d(),C&&Z&&Z.end(),ue.d(),x&&x.d(),C&&j&&j.end(),Xe(Te,C),pe&&pe.d(),C&&Y&&Y.end(),C&&L&&L.end(),C&&qe&&qe.end(),wt=!1,lt(Ce)}}}function J_(n){let e,t,s,i,r,o=n[1]?"Slot":"Has Special",l,a,c,u=n[1]?"Stats":"Stat Intakes",f,d,p,g,y,E,k,A,O,v,S,F=!n[2]&&No(n);return{c(){e=m("div"),t=m("div"),s=m("span"),s.textContent="Item",i=b(),r=m("span"),l=q(o),a=b(),c=m("span"),f=q(u),d=b(),p=m("span"),p.textContent="Avg. Cost",g=b(),y=m("span"),y.textContent="Colors",E=b(),k=m("span"),k.textContent="Outline",A=b(),O=m("span"),O.textContent="Release",v=b(),F&&F.c(),_(s,"class","ff-item svelte-pl04pb"),_(r,"class","ff-item svelte-pl04pb"),Ke(r,"smaller-fs",!n[1]),_(c,"class","ff-item svelte-pl04pb"),Ke(c,"smaller-fs",!n[1]),_(p,"class","ff-item svelte-pl04pb"),_(y,"class","ff-item svelte-pl04pb"),_(k,"class","ff-item svelte-pl04pb"),_(O,"class","ff-item svelte-pl04pb"),_(t,"id","categories"),_(t,"class","svelte-pl04pb"),_(e,"class","gameboard ff-bg fd-col flex posrel border-tp bs svelte-pl04pb")},m(P,M){T(P,e,M),h(e,t),h(t,s),h(t,i),h(t,r),h(r,l),h(t,a),h(t,c),h(c,f),h(t,d),h(t,p),h(t,g),h(t,y),h(t,E),h(t,k),h(t,A),h(t,O),h(e,v),F&&F.m(e,null),S=!0},p(P,M){(!S||M[0]&2)&&o!==(o=P[1]?"Slot":"Has Special")&&de(l,o),(!S||M[0]&2)&&Ke(r,"smaller-fs",!P[1]),(!S||M[0]&2)&&u!==(u=P[1]?"Stats":"Stat Intakes")&&de(f,u),(!S||M[0]&2)&&Ke(c,"smaller-fs",!P[1]),P[2]?F&&(mt(),he(F,1,1,()=>{F=null}),gt()):F?(F.p(P,M),M[0]&4&&Q(F,1)):(F=No(P),F.c(),Q(F,1),F.m(e,null))},i(P){S||(Q(F),S=!0)},o(P){he(F),S=!1},d(P){P&&I(e),F&&F.d()}}}function pi(n,e){return n===void 0||e===void 0?void 0:n.filter(s=>e.includes(s)).length}function X_(n,e,t){let s,i,r,o;ve(n,ot,p=>t(8,s=p)),ve(n,pt,p=>t(3,i=p)),ve(n,nn,p=>t(4,r=p)),ve(n,sn,p=>t(5,o=p));let{dailyItemsData:l}=e,a,c,u=!1;function f(p,[g,y,E,k,A,O,v,S,F,P,M]){i.chosenItems.length==i.rowInfo.length+1&&pt.update(H=>({...H,rowInfo:[...H.rowInfo,[c?k:g,(c?O:E)?1:(c?A:y)?0:-1,v,F?1:S?0:-1,P,M]]}))}const d=()=>X(sn,o=!1,o);return n.$$set=p=>{"dailyItemsData"in p&&t(7,l=p.dailyItemsData)},n.$$.update=()=>{n.$$.dirty[0]&256&&s.mode&&(t(2,u=!0),setTimeout(()=>t(2,u=!1),10)),n.$$.dirty[0]&384&&t(0,a=l[s.mode]),n.$$.dirty[0]&256&&(s.mode.includes("equipment")?t(1,c=!0):s.mode.includes("weapons")&&t(1,c=!1))},[a,c,u,i,r,o,f,l,s,d]}class Z_ extends dt{constructor(e){super(),ft(this,e,X_,J_,at,{dailyItemsData:7},null,[-1,-1])}}function ep(n){let e,t,s,i;return{c(){e=m("div"),t=m("input"),_(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],_(t,"type","checkbox"),t.checked=n[1],_(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),Ke(e,"unavailable",n[2]),wn(e,"--s",`${n[0]}rem`)},m(r,o){T(r,e,o),h(e,t),s||(i=[Le(t,"change",n[5]),Le(t,"keydown",n[6])],s=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&Ke(e,"unavailable",r[2]),o&1&&wn(e,"--s",`${r[0]}rem`)},i:ne,o:ne,d(r){r&&I(e),s=!1,lt(i)}}}function tp(n,e,t){let{size:s,checked:i=!1,disabled:r=!1,forced:o=!1}=e;const l=Dc(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,s=u.size),"checked"in u&&t(1,i=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[s,i,r,o,l,a,c]}class np extends dt{constructor(e){super(),ft(this,e,tp,ep,at,{size:0,checked:1,disabled:2,forced:3})}}function xo(n,e,t){const s=n.slice();s[17]=e[t];const i=s[8].chosenItems.find(function(...o){return n[15](s[17],...o)})!=null;return s[18]=i,s}function Wo(n){let e,t,s,i=Ee(n[4]),r=[];for(let o=0;o<i.length;o+=1)r[o]=Bo(xo(n,i,o));return{c(){e=m("div");for(let o=0;o<r.length;o+=1)r[o].c();_(e,"class","itemList ff-bg flex fd-col svelte-1k366gl")},m(o,l){T(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[16](e),s=!0},p(o,l){if(l&1360){i=Ee(o[4]);let a;for(a=0;a<i.length;a+=1){const c=xo(o,i,a);r[a]?r[a].p(c,l):(r[a]=Bo(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}},i(o){s||(o&&je(()=>{s&&(t||(t=Re(e,Mt,{duration:75},!0)),t.run(1))}),s=!0)},o(o){o&&(t||(t=Re(e,Mt,{duration:75},!1)),t.run(0)),s=!1},d(o){o&&I(e),Xe(r,o),n[16](null),o&&t&&t.end()}}}function Bo(n){let e,t,s,i,r,o=n[17].name+"",l,a,c,u,f;function d(){return n[14](n[18],n[17])}return{c(){e=m("button"),t=m("img"),i=b(),r=m("span"),l=q(o),a=b(),Ge(t.src,s=Vt+n[17].image)||_(t,"src",s),_(t,"alt",""),_(t,"class","svelte-1k366gl"),e.disabled=c=n[18],_(e,"class","listItem flex fai-center no-bg-change svelte-1k366gl"),Ke(e,"unavailable",n[18])},m(p,g){T(p,e,g),h(e,t),h(e,i),h(e,r),h(r,l),h(e,a),u||(f=Le(e,"click",d),u=!0)},p(p,g){n=p,g&16&&!Ge(t.src,s=Vt+n[17].image)&&_(t,"src",s),g&16&&o!==(o=n[17].name+"")&&de(l,o),g&272&&c!==(c=n[18])&&(e.disabled=c),g&272&&Ke(e,"unavailable",n[18])},d(p){p&&I(e),u=!1,f()}}}function sp(n){let e,t,s,i,r,o,l=n[7]&&n[4].length&&n[5]&&Wo(n);return{c(){e=m("input"),s=b(),l&&l.c(),i=bt(),e.disabled=n[6],_(e,"type","text"),_(e,"class","searcherInput svelte-1k366gl"),_(e,"placeholder",t=`Guess the item for game #${n[0]+1} (${n[2].mode})...`)},m(a,c){T(a,e,c),n[12](e),T(a,s,c),l&&l.m(a,c),T(a,i,c),r||(o=[Le(window,"mousedown",n[11]),Le(e,"input",n[9]),Le(e,"focusin",n[13])],r=!0)},p(a,[c]){c&64&&(e.disabled=a[6]),c&5&&t!==(t=`Guess the item for game #${a[0]+1} (${a[2].mode})...`)&&_(e,"placeholder",t),a[7]&&a[4].length&&a[5]?l?(l.p(a,c),c&176&&Q(l,1)):(l=Wo(a),l.c(),Q(l,1),l.m(i.parentNode,i)):l&&(mt(),he(l,1,1,()=>{l=null}),gt())},i(a){Q(l)},o(a){he(l)},d(a){a&&(I(e),I(s),I(i)),n[12](null),l&&l.d(a),r=!1,lt(o)}}}function ip(n,e,t){let s,i,r,o;ve(n,ot,v=>t(2,s=v)),ve(n,sn,v=>t(6,i=v)),ve(n,qi,v=>t(7,r=v)),ve(n,pt,v=>t(8,o=v));let{gameNumber:l}=e,a,c,u=[],f=!1;function d(){let v=a.value.toLowerCase();if(t(4,u=[]),!!v)for(let S of r[s.mode])S.name.toLowerCase().includes(v)&&u.push(S)}function p(v){i||(pt.update(S=>({...S,chosenItems:[...S.chosenItems,v]})),t(1,a.value="",a),d())}const g=v=>{c&&v.target!=a&&!c.contains(v.target)&&t(5,f=!1)};function y(v){ct[v?"unshift":"push"](()=>{a=v,t(1,a)})}const E=()=>t(5,f=!0),k=(v,S)=>{v||(p(S),X(sn,i=!0,i))},A=(v,S)=>S.name==v.name;function O(v){ct[v?"unshift":"push"](()=>{c=v,t(3,c)})}return n.$$set=v=>{"gameNumber"in v&&t(0,l=v.gameNumber)},n.$$.update=()=>{n.$$.dirty&6&&s.mode&&a&&d()},[l,a,s,c,u,f,i,r,o,d,p,g,y,E,k,A,O]}class rp extends dt{constructor(e){super(),ft(this,e,ip,sp,at,{gameNumber:0})}}function qo(n){let e,t,s;return{c(){e=m("span"),_(e,"id","HPFlash"),_(e,"class","svelte-14eask9")},m(i,r){T(i,e,r),s=!0},i(i){s||(t&&t.end(1),s=!0)},o(i){i&&(t=Lc(e,Mt,{duration:200})),s=!1},d(i){i&&I(e),i&&t&&t.end()}}}function op(n){let e,t,s,i,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,f,d,p,g,y,E=n[4]?"You've lost your remaining armor.":"Your armor is protecting you.",k,A,O,v,S,F,P,M,H,Z,ie,W=n[1]&&qo();function ee(j){n[6](j)}let ye={};return n[0]!==void 0&&(ye.gameNumber=n[0]),H=new rp({props:ye}),ct.push(()=>zs(H,"gameNumber",ee)),{c(){e=m("div"),t=m("div"),s=m("div"),i=m("div"),r=m("div"),o=m("span"),a=q(l),c=q("/600"),u=b(),f=m("button"),d=m("img"),g=b(),y=m("span"),k=q(E),A=b(),O=m("br"),v=q(`\r
                You can take `),S=q(n[2]),F=q(" hits at most!"),P=b(),W&&W.c(),M=b(),rt(H.$$.fragment),_(o,"class","svelte-14eask9"),_(r,"class","HPBackground svelte-14eask9"),wn(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),_(i,"class","innerGameHP flex posrel svelte-14eask9"),_(s,"class","outerGameHP posrel svelte-14eask9"),Ge(d.src,p="misc/armor.svg")||_(d,"src",p),_(d,"alt","Armor"),_(d,"class","svelte-14eask9"),Ke(d,"noArmor",n[4]),_(y,"class","tooltip svelte-14eask9"),_(y,"id","right"),_(f,"class","ff-item posrel br-1 svelte-14eask9"),_(f,"id","armorIcon"),_(t,"class","gameHPCont flex svelte-14eask9"),_(e,"class","currentGameInfo ff-bg flex fd-row fw fjc-center fai-center posrel border-tp br-1 bs svelte-14eask9")},m(j,$){T(j,e,$),h(e,t),h(t,s),h(s,i),h(i,r),h(r,o),h(o,a),h(o,c),h(t,u),h(t,f),h(f,d),h(f,g),h(f,y),h(y,k),h(y,A),h(y,O),h(y,v),h(y,S),h(y,F),h(e,P),W&&W.m(e,null),h(e,M),et(H,e,null),ie=!0},p(j,[$]){(!ie||$&12)&&l!==(l=Math.round(600-j[3].chosenItems.length*(600/j[2]))+"")&&de(a,l),$&12&&wn(r,"width",`${Math.floor(100*(j[2]-j[3].chosenItems.length)/j[2])}%`),(!ie||$&16)&&Ke(d,"noArmor",j[4]),(!ie||$&16)&&E!==(E=j[4]?"You've lost your remaining armor.":"Your armor is protecting you.")&&de(k,E),(!ie||$&4)&&de(S,j[2]),j[1]?W?$&2&&Q(W,1):(W=qo(),W.c(),Q(W,1),W.m(e,M)):W&&(mt(),he(W,1,1,()=>{W=null}),gt());const G={};!Z&&$&1&&(Z=!0,G.gameNumber=j[0],Gs(()=>Z=!1)),H.$set(G)},i(j){ie||(Q(W),Q(H.$$.fragment,j),ie=!0)},o(j){he(W),he(H.$$.fragment,j),ie=!1},d(j){j&&I(e),W&&W.d(),tt(H)}}}function lp(n,e,t){let s,i,r,o;ve(n,sn,u=>t(5,s=u)),ve(n,js,u=>t(2,i=u)),ve(n,pt,u=>t(3,r=u)),ve(n,nn,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&s&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,i,r,o,s,c]}class ap extends dt{constructor(e){super(),ft(this,e,lp,op,at,{gameNumber:0})}}function jo(n,e,t){const s=n.slice();return s[9]=e[t],s}function Ho(n,e,t){const s=n.slice();return s[12]=e[t],s}function Uo(n){let e,t=(n[12]===!0||n[12]===1?n[4].html.blue:n[12]===0?n[4].html.yellow:n[12]===!1||n[12]===-1?n[4].html.red:null)+"",s;return{c(){e=new bl(!1),s=bt(),e.a=s},m(i,r){e.m(t,i,r),T(i,s,r)},p(i,r){r&1&&t!==(t=(i[12]===!0||i[12]===1?i[4].html.blue:i[12]===0?i[4].html.yellow:i[12]===!1||i[12]===-1?i[4].html.red:null)+"")&&e.p(t)},d(i){i&&(I(s),e.d())}}}function Go(n){let e,t,s=Ee(n[9]),i=[];for(let r=0;r<s.length;r+=1)i[r]=Uo(Ho(n,s,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=b(),t=m("br")},m(r,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(r,o);T(r,e,o),T(r,t,o)},p(r,o){if(o&17){s=Ee(r[9]);let l;for(l=0;l<s.length;l+=1){const a=Ho(r,s,l);i[l]?i[l].p(a,o):(i[l]=Uo(a),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},d(r){r&&(I(e),I(t)),Xe(i,r)}}}function cp(n){let e,t,s,i,r,o,l,a,c,u,f,d,p,g,y=n[2]?"Copied!":"Copy",E,k,A,O=Ee(n[0].rowInfo.toReversed()),v=[];for(let S=0;S<O.length;S+=1)v[S]=Go(jo(n,O,S));return{c(){e=m("div"),t=m("span"),t.textContent="Game Stats",s=b(),i=m("span"),r=q(n[3]),o=b(),l=m("br"),a=b();for(let S=0;S<v.length;S+=1)v[S].c();c=b(),u=m("button"),f=q(`Share Stats\r
        `),d=m("iconify-icon"),p=b(),g=m("span"),E=q(y),_(i,"class","smaller-fs"),We(d,"icon","ri:share-fill"),_(g,"class","tooltip"),_(g,"id","top"),_(u,"class","flex fai-center posrel border-tp br-1 smaller-fs svelte-14jqt1l"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs")},m(S,F){T(S,e,F),h(e,t),h(e,s),h(e,i),h(i,r),h(i,o),h(i,l),h(i,a);for(let P=0;P<v.length;P+=1)v[P]&&v[P].m(i,null);h(e,c),h(e,u),h(u,f),h(u,d),h(u,p),h(u,g),h(g,E),k||(A=Le(u,"click",n[8]),k=!0)},p(S,[F]){if(F&8&&de(r,S[3]),F&17){O=Ee(S[0].rowInfo.toReversed());let P;for(P=0;P<O.length;P+=1){const M=jo(S,O,P);v[P]?v[P].p(M,F):(v[P]=Go(M),v[P].c(),v[P].m(i,null))}for(;P<v.length;P+=1)v[P].d(1);v.length=O.length}F&4&&y!==(y=S[2]?"Copied!":"Copy")&&de(E,y)},i:ne,o:ne,d(S){S&&I(e),Xe(v,S),k=!1,A()}}}function up(n,e,t){let s,i,r,o;ve(n,pt,d=>t(0,i=d)),ve(n,ot,d=>t(6,r=d)),ve(n,nn,d=>t(7,o=d));let{gameNumber:l}=e,a={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},c="",u=!1;const f=d=>{Pt(d),navigator.clipboard.writeText(`${s}
${c}
${location.origin+location.pathname}`),t(2,u=!0),setTimeout(()=>t(2,u=!1),1e3)};return n.$$set=d=>{"gameNumber"in d&&t(5,l=d.gameNumber)},n.$$.update=()=>{n.$$.dirty&224&&t(3,s=`${o?"(Nightmare)":""} Frontierdle - ${Dt(r.mode)} #${l+1}`),n.$$.dirty&67&&r.mode&&setTimeout(()=>{t(1,c="");for(let d of i.rowInfo.toReversed()){let p="";for(let g of d)p+=g===!0||g===1?a.js.blue:g===0?a.js.yellow:g===!1||g===-1?a.js.red:null;t(1,c+=p+`
`)}})},[i,c,u,s,a,l,r,o,f]}class hp extends dt{constructor(e){super(),ft(this,e,up,cp,at,{gameNumber:5})}}function zo(n,e,t){const s=n.slice();return s[5]=e[t][0],s[6]=e[t][1],s}function Vo(n){let e,t,s=n[5]+"",i,r,o,l,a,c=n[6]+"",u,f;return{c(){e=m("div"),t=m("span"),i=q(s),r=b(),o=m("span"),o.innerHTML="",l=b(),a=m("span"),u=q(c),f=b(),_(t,"id","guessNum"),_(t,"class","svelte-mzhi8s"),_(o,"class","posrel border-tp svelte-mzhi8s"),_(o,"id","winsBar"),wn(o,"width",`${n[6]*80/n[3]}%`),_(a,"class","smaller-fs svelte-mzhi8s"),_(a,"id","winsNum"),_(e,"class","flex fai-center svelte-mzhi8s")},m(d,p){T(d,e,p),h(e,t),h(t,i),h(e,r),h(e,o),h(e,l),h(e,a),h(a,u),h(e,f)},p(d,p){p&2&&s!==(s=d[5]+"")&&de(i,s),p&10&&wn(o,"width",`${d[6]*80/d[3]}%`),p&2&&c!==(c=d[6]+"")&&de(u,c)},d(d){d&&I(e)}}}function fp(n){let e,t,s,i=Dt(n[2])+"",r,o,l,a,c,u,f=n[1].gamesPlayed+"",d,p,g,y,E,k,A=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"",O,v,S,F,P,M,H,Z=n[1].streak+"",ie,W,ee,ye,j,$,G=n[1].maxStreak+"",ce,te,Y,V,z,N,U,B,L,ge=Ee(Object.entries(n[1].winInfo)),se=[];for(let J=0;J<ge.length;J+=1)se[J]=Vo(zo(n,ge,J));return{c(){e=m("div"),t=m("span"),s=q("Your Stats - "),r=q(i),o=b(),l=m("div"),a=m("div"),c=m("div"),u=m("span"),d=q(f),p=b(),g=m("span"),g.textContent="Games Played",y=b(),E=m("div"),k=m("span"),O=q(A),v=q("%"),S=b(),F=m("span"),F.textContent="Win Rate",P=b(),M=m("div"),H=m("span"),ie=q(Z),W=b(),ee=m("span"),ee.textContent="Current Streak",ye=b(),j=m("div"),$=m("span"),ce=q(G),te=b(),Y=m("span"),Y.textContent="Max Streak",V=b(),z=m("span"),z.textContent="Win Distribution",N=b(),U=m("div");for(let J=0;J<se.length;J+=1)se[J].c();_(g,"id","statsTitle"),_(g,"class","svelte-mzhi8s"),_(c,"class","svelte-mzhi8s"),_(F,"id","statsTitle"),_(F,"class","svelte-mzhi8s"),_(E,"class","svelte-mzhi8s"),_(ee,"id","statsTitle"),_(ee,"class","svelte-mzhi8s"),_(M,"class","svelte-mzhi8s"),_(Y,"id","statsTitle"),_(Y,"class","svelte-mzhi8s"),_(j,"class","svelte-mzhi8s"),_(a,"class","flex svelte-mzhi8s"),_(a,"id","playerStatsInfo"),_(z,"class","smaller-fs"),_(U,"class","flex fd-col smaller-fs svelte-mzhi8s"),_(U,"id","distributionChart"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs"),_(e,"id","playerStats")},m(J,Ie){T(J,e,Ie),h(e,t),h(t,s),h(t,r),h(e,o),h(e,l),h(l,a),h(a,c),h(c,u),h(u,d),h(c,p),h(c,g),h(a,y),h(a,E),h(E,k),h(k,O),h(k,v),h(E,S),h(E,F),h(a,P),h(a,M),h(M,H),h(H,ie),h(M,W),h(M,ee),h(a,ye),h(a,j),h(j,$),h($,ce),h(j,te),h(j,Y),h(e,V),h(e,z),h(e,N),h(e,U);for(let be=0;be<se.length;be+=1)se[be]&&se[be].m(U,null);L=!0},p(J,[Ie]){if(n=J,(!L||Ie&4)&&i!==(i=Dt(n[2])+"")&&de(r,i),(!L||Ie&2)&&f!==(f=n[1].gamesPlayed+"")&&de(d,f),(!L||Ie&2)&&A!==(A=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"")&&de(O,A),(!L||Ie&2)&&Z!==(Z=n[1].streak+"")&&de(ie,Z),(!L||Ie&2)&&G!==(G=n[1].maxStreak+"")&&de(ce,G),Ie&10){ge=Ee(Object.entries(n[1].winInfo));let be;for(be=0;be<ge.length;be+=1){const ze=zo(n,ge,be);se[be]?se[be].p(ze,Ie):(se[be]=Vo(ze),se[be].c(),se[be].m(U,null))}for(;be<se.length;be+=1)se[be].d(1);se.length=ge.length}},i(J){L||(J&&je(()=>{L&&(B||(B=Re(e,Ve,{duration:n[0]?200:0},!0)),B.run(1))}),L=!0)},o(J){J&&(B||(B=Re(e,Ve,{duration:n[0]?200:0},!1)),B.run(0)),L=!1},d(J){J&&I(e),Xe(se,J),J&&B&&B.end()}}}function dp(n,e,t){let s,i,r,o;ve(n,ot,a=>t(4,r=a)),ve(n,Ct,a=>t(1,o=a));let{prompted:l=!1}=e;return n.$$set=a=>{"prompted"in a&&t(0,l=a.prompted)},n.$$.update=()=>{n.$$.dirty&2&&t(3,s=Math.max(...Object.values(o.winInfo))),n.$$.dirty&16&&t(2,i=r.mode)},[l,o,i,s,r]}class ac extends dt{constructor(e){super(),ft(this,e,dp,fp,at,{prompted:0})}}function $o(n,e,t){const s=n.slice();return s[5]=e[t],s}function _p(n){let e,t=Ee(n[1]),s=[];for(let i=0;i<t.length;i+=1)s[i]=Yo($o(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);T(i,e,r)},p(i,r){if(r&2){t=Ee(i[1]);let o;for(o=0;o<t.length;o+=1){const l=$o(i,t,o);s[o]?s[o].p(l,r):(s[o]=Yo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&I(e),Xe(s,i)}}}function pp(n){let e,t,s;return{c(){e=m("span"),t=q("— "),s=q(n[1]),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(i,r){T(i,e,r),h(e,t),h(e,s)},p(i,r){r&2&&de(s,i[1])},d(i){i&&I(e)}}}function Yo(n){let e,t,s=n[5]+"",i;return{c(){e=m("span"),t=q("— "),i=q(s),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(r,o){T(r,e,o),h(e,t),h(e,i)},p(r,o){o&2&&s!==(s=r[5]+"")&&de(i,s)},d(r){r&&I(e)}}}function mp(n){let e,t,s,i,r,o,l;function a(f,d){return typeof f[1]=="string"?pp:_p}let c=a(n),u=c(n);return{c(){e=m("li"),t=m("span"),s=q("v"),i=q(n[0]),r=b(),o=m("i"),o.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":j_[n[2][0]%10])+", 20"+n[2][2]}`,l=b(),u.c(),_(t,"id","version"),_(t,"class","svelte-1vq8gvl"),_(o,"id","date"),_(o,"class","svelte-1vq8gvl"),_(e,"class","flex fw fai-center svelte-1vq8gvl")},m(f,d){T(f,e,d),h(e,t),h(t,s),h(t,i),h(e,r),h(e,o),h(e,l),u.m(e,null)},p(f,[d]){d&1&&de(i,f[0]),c===(c=a(f))&&u?u.p(f,d):(u.d(1),u=c(f),u&&(u.c(),u.m(e,null)))},i:ne,o:ne,d(f){f&&I(e),u.d()}}}function gp(n,e,t){let{version:s,date:i,text:r}=e,o=i.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,s=a.version),"date"in a&&t(4,i=a.date),"text"in a&&t(1,r=a.text)},[s,r,o,l,i]}class mi extends dt{constructor(e){super(),ft(this,e,gp,mp,at,{version:0,date:4,text:1})}}function vp(n){let e,t,s,i,r,o,l,a,c;return i=new mi({props:{version:"1.1.1",date:"5/4/24",text:["Fixed 'Game Stats' section not updating when switching game categories","Fixed page size and zoom occasionally breaking"]}}),o=new mi({props:{version:"1.1.0",date:"4/4/24",text:["Added 'Weapons' game category","'Game Help' prompt now appears on first visit"]}}),a=new mi({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=m("span"),e.textContent="Changelog",t=b(),s=m("ul"),rt(i.$$.fragment),r=b(),rt(o.$$.fragment),l=b(),rt(a.$$.fragment),_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-1hn7lke"),_(s,"id","contents")},m(u,f){T(u,e,f),T(u,t,f),T(u,s,f),et(i,s,null),h(s,r),et(o,s,null),h(s,l),et(a,s,null),c=!0},p:ne,i(u){c||(Q(i.$$.fragment,u),Q(o.$$.fragment,u),Q(a.$$.fragment,u),c=!0)},o(u){he(i.$$.fragment,u),he(o.$$.fragment,u),he(a.$$.fragment,u),c=!1},d(u){u&&(I(e),I(t),I(s)),tt(i),tt(o),tt(a)}}}class yp extends dt{constructor(e){super(),ft(this,e,null,vp,at,{})}}function bp(n){let e,t,s;return{c(){e=m("span"),e.textContent="Credits",t=b(),s=m("div"),s.innerHTML=`<p class="flex fai-center svelte-19w41p3">This is a personal project. Contact me directly on
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
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,_(e,"class","title"),_(s,"class","smaller-fs"),_(s,"id","contents")},m(i,r){T(i,e,r),T(i,t,r),T(i,s,r)},p:ne,i:ne,o:ne,d(i){i&&(I(e),I(t),I(s))}}}class wp extends dt{constructor(e){super(),ft(this,e,null,bp,at,{})}}function Ko(n,e,t){const s=n.slice();return s[0]=e[t],s}function Cp(n,e,t){const s=n.slice();return s[3]=e[t],s}function Ep(n,e,t){const s=n.slice();return s[6]=e[t],s}function Qo(n,e,t){const s=n.slice();return s[9]=e[t],s}function Jo(n,e,t){const s=n.slice();return s[12]=e[t],s}function Ip(n,e,t){const s=n.slice();return s[15]=e[t],s}function Sp(n){let e;return{c(){e=m("li"),e.textContent=`— ${Dt(n[15])} `},m(t,s){T(t,e,s)},p:ne,d(t){t&&I(e)}}}function Xo(n){let e;return{c(){e=m("li"),e.textContent=`— ${n[12]} `},m(t,s){T(t,e,s)},p:ne,d(t){t&&I(e)}}}function Zo(n){let e;return{c(){e=m("li"),e.textContent=`— ${n[9]}`},m(t,s){T(t,e,s)},p:ne,d(t){t&&I(e)}}}function Tp(n){let e;return{c(){e=m("li"),e.textContent=`— ${n[6]}`},m(t,s){T(t,e,s)},p:ne,d(t){t&&I(e)}}}function kp(n){let e;return{c(){e=m("li"),e.textContent=`— ${n[3]}`},m(t,s){T(t,e,s)},p:ne,d(t){t&&I(e)}}}function el(n){let e;return{c(){e=m("li"),e.textContent=`— ${n[0]} Update`},m(t,s){T(t,e,s)},p:ne,d(t){t&&I(e)}}}function Np(n){let e,t,s,i,r,o,l,a,c,u,f,d,p,g,y,E,k,A,O,v,S,F,P,M,H,Z,ie,W,ee,ye,j,$,G,ce,te,Y,V,z,N,U,B,L,ge,se,J,Ie,be,ze,qe,Be,nt,Qe,re,wt=Ee(B_),Ce=[];for(let C=0;C<wt.length;C+=1)Ce[C]=Sp(Ip(n,wt,C));let Se=Ee(Object.values(Bs)),Me=[];for(let C=0;C<Se.length;C+=1)Me[C]=Xo(Jo(n,Se,C));let Fe=Ee(Object.values(qs)),_e=[];for(let C=0;C<Fe.length;C+=1)_e[C]=Zo(Qo(n,Fe,C));let ke=Ee(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),ue=[];for(let C=0;C<12;C+=1)ue[C]=Tp(Ep(n,ke,C));let x=Ee(["Black","Blue","Green","Purple","Red","White","Yellow"]),oe=[];for(let C=0;C<7;C+=1)oe[C]=kp(Cp(n,x,C));let Te=Ee(Object.values(Ws).slice(0,-1)),pe=[];for(let C=0;C<Te.length;C+=1)pe[C]=el(Ko(n,Te,C));return{c(){e=m("span"),e.textContent="Game Help",t=b(),s=m("div"),i=m("p"),i.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece from\r
        Fantastic Frontier, which changes every day.`,r=b(),o=m("div"),o.innerHTML=`<span class="title">Color Guide</span> <div class="flex svelte-f1c9xj" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-f1c9xj" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-f1c9xj" id="partial">Partial
                <span class="bgInfo svelte-f1c9xj">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-f1c9xj" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-f1c9xj" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,l=b(),a=m("span"),a.textContent="Categories",c=b(),u=m("div"),f=m("div"),d=m("b"),d.textContent="Equipment",p=b(),g=m("span"),y=m("b"),y.textContent="Slot:",E=b(),k=m("ul");for(let C=0;C<Ce.length;C+=1)Ce[C].c();A=b(),O=m("span"),v=m("b"),v.textContent="Stats:",S=b(),F=m("ul");for(let C=0;C<Me.length;C+=1)Me[C].c();P=b(),M=m("div"),H=m("b"),H.textContent="Weapons",Z=b(),ie=m("span"),ie.innerHTML="<b>Has Special:</b> <span>Whether the weapon has a Special Ability.</span>",W=b(),ee=m("span"),ye=m("b"),ye.textContent="Stat Intakes:",j=b(),$=m("ul");for(let C=0;C<_e.length;C+=1)_e[C].c();G=b(),ce=m("div"),te=m("div"),Y=m("b"),Y.textContent="General",V=b(),z=m("span"),z.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item can be purchased
                    at. &quot;Unpurchasable&quot; if it cannot be purchased, equivalent to
                    0 for the game&#39;s purposes.</span>`,N=b(),U=m("span"),B=m("b"),B.textContent="Colors:",L=b(),ge=m("ul");for(let C=0;C<12;C+=1)ue[C].c();se=b(),J=m("span"),Ie=m("b"),Ie.textContent="Outline:",be=b(),ze=m("ul");for(let C=0;C<7;C+=1)oe[C].c();qe=b(),Be=m("span"),nt=m("b"),nt.textContent="Release:",Qe=b(),re=m("ul");for(let C=0;C<pe.length;C+=1)pe[C].c();_(e,"class","title"),_(o,"class","flex fd-col fai-center"),_(a,"class","title"),_(d,"class","categoryTitle svelte-f1c9xj"),_(y,"class","svelte-f1c9xj"),_(k,"class","svelte-f1c9xj"),_(g,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(v,"class","svelte-f1c9xj"),_(F,"class","svelte-f1c9xj"),_(O,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(f,"class","flex fw fjc-center categories svelte-f1c9xj"),_(H,"class","categoryTitle svelte-f1c9xj"),_(ie,"class","flex fd-col smaller-fs limit-width svelte-f1c9xj"),_(ye,"class","svelte-f1c9xj"),_($,"class","svelte-f1c9xj"),_(ee,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(M,"class","flex fw fjc-center categories svelte-f1c9xj"),_(u,"class","flex categoriesCont svelte-f1c9xj"),_(Y,"class","categoryTitle svelte-f1c9xj"),_(z,"class","flex fd-col smaller-fs limit-width svelte-f1c9xj"),_(B,"class","svelte-f1c9xj"),_(ge,"class","svelte-f1c9xj"),_(U,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(Ie,"class","svelte-f1c9xj"),_(ze,"class","svelte-f1c9xj"),_(J,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(nt,"class","svelte-f1c9xj"),_(re,"class","svelte-f1c9xj"),_(Be,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(te,"class","flex fw fjc-center categories svelte-f1c9xj"),_(ce,"class","flex categoriesCont svelte-f1c9xj"),_(s,"class","flex fd-col smaller-fs svelte-f1c9xj"),_(s,"id","contents")},m(C,le){T(C,e,le),T(C,t,le),T(C,s,le),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(u,f),h(f,d),h(f,p),h(f,g),h(g,y),h(g,E),h(g,k);for(let R=0;R<Ce.length;R+=1)Ce[R]&&Ce[R].m(k,null);h(f,A),h(f,O),h(O,v),h(O,S),h(O,F);for(let R=0;R<Me.length;R+=1)Me[R]&&Me[R].m(F,null);h(u,P),h(u,M),h(M,H),h(M,Z),h(M,ie),h(M,W),h(M,ee),h(ee,ye),h(ee,j),h(ee,$);for(let R=0;R<_e.length;R+=1)_e[R]&&_e[R].m($,null);h(s,G),h(s,ce),h(ce,te),h(te,Y),h(te,V),h(te,z),h(te,N),h(te,U),h(U,B),h(U,L),h(U,ge);for(let R=0;R<12;R+=1)ue[R]&&ue[R].m(ge,null);h(te,se),h(te,J),h(J,Ie),h(J,be),h(J,ze);for(let R=0;R<7;R+=1)oe[R]&&oe[R].m(ze,null);h(te,qe),h(te,Be),h(Be,nt),h(Be,Qe),h(Be,re);for(let R=0;R<pe.length;R+=1)pe[R]&&pe[R].m(re,null)},p(C,[le]){if(le&0){Se=Ee(Object.values(Bs));let R;for(R=0;R<Se.length;R+=1){const _t=Jo(C,Se,R);Me[R]?Me[R].p(_t,le):(Me[R]=Xo(_t),Me[R].c(),Me[R].m(F,null))}for(;R<Me.length;R+=1)Me[R].d(1);Me.length=Se.length}if(le&0){Fe=Ee(Object.values(qs));let R;for(R=0;R<Fe.length;R+=1){const _t=Qo(C,Fe,R);_e[R]?_e[R].p(_t,le):(_e[R]=Zo(_t),_e[R].c(),_e[R].m($,null))}for(;R<_e.length;R+=1)_e[R].d(1);_e.length=Fe.length}if(le&0){Te=Ee(Object.values(Ws).slice(0,-1));let R;for(R=0;R<Te.length;R+=1){const _t=Ko(C,Te,R);pe[R]?pe[R].p(_t,le):(pe[R]=el(_t),pe[R].c(),pe[R].m(re,null))}for(;R<pe.length;R+=1)pe[R].d(1);pe.length=Te.length}},i:ne,o:ne,d(C){C&&(I(e),I(t),I(s)),Xe(Ce,C),Xe(Me,C),Xe(_e,C),Xe(ue,C),Xe(oe,C),Xe(pe,C)}}}class cc extends dt{constructor(e){super(),ft(this,e,null,Np,at,{})}}function Rp(n){let e,t,s;return{c(){e=m("span"),e.textContent="Frontierdle Policy",t=b(),s=m("div"),s.innerHTML=`<span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-932r7h"),_(s,"id","contents")},m(i,r){T(i,e,r),T(i,t,r),T(i,s,r)},p:ne,i:ne,o:ne,d(i){i&&(I(e),I(t),I(s))}}}class Dp extends dt{constructor(e){super(),ft(this,e,null,Rp,at,{})}}function tl(n){let e,t,s;return{c(){e=m("iconify-icon"),We(e,"icon","uil:exclamation"),We(e,"id","unseen"),We(e,"class","svelte-1aydprt")},m(i,r){T(i,e,r),s=!0},i(i){s||(i&&je(()=>{s&&(t||(t=Re(e,Mt,{duration:150},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=Re(e,Mt,{duration:150},!1)),t.run(0)),s=!1},d(i){i&&I(e),i&&t&&t.end()}}}function Ap(n){let e,t,s,i,r,o,l,a,c,u,f,d,p,g,y,E,k,A,O=!n[2]&&tl();return{c(){e=m("button"),e.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',t=b(),s=m("button"),s.innerHTML=`<a href="https://ko-fi.com/xt8ss" target="_blank" class="svelte-1aydprt">Support me
        <img src="misc/kofi-badge.png" alt="" class="svelte-1aydprt"/></a>`,i=b(),r=m("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=b(),l=m("button"),a=m("iconify-icon"),c=b(),u=m("span"),u.textContent="Changelog",f=b(),O&&O.c(),d=b(),p=m("button"),p.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',g=b(),y=m("span"),E=q(n[0]),_(e,"class","info p-1 svelte-1aydprt"),_(e,"id","credits"),_(s,"class","info p-1 svelte-1aydprt"),_(s,"id","donate"),_(r,"class","info p-1 svelte-1aydprt"),_(r,"id","help"),We(a,"icon","octicon:log-16"),_(u,"class","tooltip"),_(u,"id","right"),_(l,"class","info svelte-1aydprt"),_(l,"id","changelog"),_(p,"class","info p-1 svelte-1aydprt"),_(p,"id","policy"),_(y,"class","info svelte-1aydprt"),_(y,"id","version")},m(v,S){T(v,e,S),T(v,t,S),T(v,s,S),T(v,i,S),T(v,r,S),T(v,o,S),T(v,l,S),h(l,a),h(l,c),h(l,u),h(l,f),O&&O.m(l,null),T(v,d,S),T(v,p,S),T(v,g,S),T(v,y,S),h(y,E),k||(A=[Le(e,"click",n[3]),Le(r,"click",n[4]),Le(l,"click",n[5]),Le(p,"click",n[6])],k=!0)},p(v,[S]){v[2]?O&&(mt(),he(O,1,1,()=>{O=null}),gt()):O?S&4&&Q(O,1):(O=tl(),O.c(),Q(O,1),O.m(l,null)),S&1&&de(E,v[0])},i(v){Q(O)},o(v){he(O)},d(v){v&&(I(e),I(t),I(s),I(i),I(r),I(o),I(l),I(d),I(p),I(g),I(y)),O&&O.d(),k=!1,lt(A)}}}function Pp(n,e,t){let s,i;ve(n,st,u=>t(1,s=u)),ve(n,is,u=>t(2,i=u));let{version:r}=e;const o=u=>{Pt(u),X(st,s.component=wp,s)},l=u=>{Pt(u),X(st,s.component=cc,s)},a=u=>{Pt(u),X(st,s.component=yp,s),X(is,i=!0,i)},c=u=>{Pt(u),X(st,s.component=Dp,s)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,s,i,o,l,a,c]}class Op extends dt{constructor(e){super(),ft(this,e,Pp,Ap,at,{version:0})}}function Mp(n){let e,t,s,i,r,o,l,a,c,u,f,d,p,g,y,E;return{c(){e=m("div"),t=m("span"),t.textContent="Choose your category",s=b(),i=m("button"),r=m("img"),l=b(),a=m("span"),a.textContent="Equipment",c=b(),u=m("button"),f=m("img"),p=b(),g=m("span"),g.textContent="Weapons",_(t,"id","title"),_(t,"class","svelte-jlt3e9"),Ge(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/7/7a/WhiteSpectralVanguardIcon.png")||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-jlt3e9"),i.disabled=n[0],_(i,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-jlt3e9"),Ke(i,"selected",n[1].mode=="equipment"),Ge(f.src,d="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/9/95/TheJadeTwin.png")||_(f,"src",d),_(f,"alt",""),_(f,"class","svelte-jlt3e9"),u.disabled=n[0],_(u,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-jlt3e9"),Ke(u,"selected",n[1].mode=="weapons"),_(e,"class","chooseModeCont ff-bg flex fd-row fw border-tp br-1 bs svelte-jlt3e9")},m(k,A){T(k,e,A),h(e,t),h(e,s),h(e,i),h(i,r),h(i,l),h(i,a),h(e,c),h(e,u),h(u,f),h(u,p),h(u,g),y||(E=[Le(i,"click",n[2]),Le(u,"click",n[3])],y=!0)},p(k,[A]){A&1&&(i.disabled=k[0]),A&2&&Ke(i,"selected",k[1].mode=="equipment"),A&1&&(u.disabled=k[0]),A&2&&Ke(u,"selected",k[1].mode=="weapons")},i:ne,o:ne,d(k){k&&I(e),y=!1,lt(E)}}}function Lp(n,e,t){let s,i;return ve(n,sn,l=>t(0,s=l)),ve(n,ot,l=>t(1,i=l)),[s,i,l=>{Pt(l),s||X(ot,i.mode="equipment",i)},l=>{Pt(l),s||X(ot,i.mode="weapons",i)}]}class Fp extends dt{constructor(e){super(),ft(this,e,Lp,Mp,at,{})}}const{document:Wn,window:_n}=vc;function nl(n,e,t){const s=n.slice();return s[70]=e[t],s}function sl(n,e,t){const s=n.slice();return s[70]=e[t],s}function il(n){let e;return{c(){e=m("link"),_(e,"rel","preload"),_(e,"as","image"),_(e,"href",n[70])},m(t,s){T(t,e,s)},p:ne,d(t){t&&I(e)}}}function rl(n){let e;return{c(){e=m("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,s){T(t,e,s)},d(t){t&&I(e)}}}function ol(n){let e,t;return{c(){e=m("img"),_(e,"class","background svelte-1vlfqbw"),Ge(e.src,t=n[70])||_(e,"src",t),_(e,"alt",""),Ke(e,"active",n[30].indexOf(n[70])==n[22])},m(s,i){T(s,e,i)},p(s,i){i[0]&1077936128&&Ke(e,"active",s[30].indexOf(s[70])==s[22])},d(s){s&&I(e)}}}function ll(n){let e,t,s=Math.floor(n[27][n[2]]*100)+"",i,r,o,l;return{c(){e=m("span"),t=q("Zoom: "),i=q(s),r=m("b"),r.textContent="%",_(e,"class","info svelte-1vlfqbw"),_(e,"id","zoomLevel")},m(a,c){T(a,e,c),h(e,t),h(e,i),h(e,r),l=!0},p(a,c){(!l||c[0]&4)&&s!==(s=Math.floor(a[27][a[2]]*100)+"")&&de(i,s)},i(a){l||(a&&je(()=>{l&&(o||(o=Re(e,Mt,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=Re(e,Mt,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&I(e),a&&o&&o.end()}}}function al(n){let e,t,s,i,r,o,l,a,c=n[8].muted?"Muted":"Unmuted",u,f,d,p,g,y,E,k,A,O,v,S=Hs(n[19],n[20],n[21])+"",F,P,M,H,Z,ie,W,ee,ye,j,$,G,ce,te,Y=n[3].includes("equipment")?"stat":" stat intake",V,z,N,U,B,L,ge,se,J,Ie,be,ze,qe,Be,nt,Qe,re,wt;Z=new Fp({}),L=new np({props:{size:"5",checked:n[4],disabled:n[5].chosenItems.length!=0}}),L.$on("toggle",n[46]);let Ce=!n[5].gameWin&&!n[5].gameOver&&cl(n),Se=(n[5].gameWin||n[5].gameOver)&&ul(n);function Me(x){n[49](x)}let Fe={};n[11]!==void 0&&(Fe.dailyItemsData=n[11]),Ie=new Z_({props:Fe}),ct.push(()=>zs(Ie,"dailyItemsData",Me));let _e=n[12][n[3]]&&hl(n),ke=n[24].component&&n[24].complete&&fl(n),ue=n[24].component&&!n[24].complete&&dl(n);return{c(){e=m("main"),t=m("div"),s=m("div"),i=m("button"),r=m("iconify-icon"),l=b(),a=m("span"),u=q(c),f=b(),d=m("button"),p=m("img"),y=b(),E=m("span"),k=q(`Next item in...
                    `),A=m("br"),O=b(),v=new bl(!1),F=b(),P=m("div"),M=m("button"),M.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-1vlfqbw"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',H=b(),rt(Z.$$.fragment),ie=b(),W=m("div"),ee=m("button"),ye=m("iconify-icon"),j=b(),$=m("span"),G=q(`No armor (more damage taken).
                    `),ce=m("br"),te=q(`
                    No `),V=q(Y),z=q(` / avg.
                    cost / color clues.`),N=b(),U=m("span"),U.textContent="Nightmare Mode",B=b(),rt(L.$$.fragment),ge=b(),Ce&&Ce.c(),se=b(),Se&&Se.c(),J=b(),rt(Ie.$$.fragment),ze=b(),_e&&_e.c(),qe=b(),ke&&ke.c(),Be=b(),ue&&ue.c(),nt=bt(),We(r,"icon",o="f7:speaker-"+(n[8].muted?"slash":"2")+"-fill"),We(r,"class","svelte-1vlfqbw"),_(a,"class","tooltip"),_(a,"id","bottom"),_(i,"class","flex light-hover svelte-1vlfqbw"),_(s,"class","iconToggle ff-bg posrel border-tp br-1 bs svelte-1vlfqbw"),Ge(p.src,g="frontierdle.svg")||_(p,"src",g),_(p,"alt","Frontierdle"),_(p,"class","svelte-1vlfqbw"),v.a=null,_(E,"class","tooltip svelte-1vlfqbw"),_(E,"id","bottom"),_(d,"class","iconCont ff-bg posrel border-tp br-1 bs no-bg-change svelte-1vlfqbw"),_(M,"class","flex posrel light-hover svelte-1vlfqbw"),_(P,"class","iconToggle ff-bg border-tp br-1 bs svelte-1vlfqbw"),_(t,"class","upperMenu flex fai-center svelte-1vlfqbw"),We(ye,"icon","eva:info-outline"),We(ye,"id","info"),We(ye,"class","svelte-1vlfqbw"),_($,"class","tooltip svelte-1vlfqbw"),_($,"id","bottom"),_(ee,"class","flex posrel no-bg-change"),_(W,"class","hardModeCont ff-bg flex fai-center border-tp br-1 bs svelte-1vlfqbw"),_(e,"class","flex fd-col fai-center posrel svelte-1vlfqbw")},m(x,oe){T(x,e,oe),h(e,t),h(t,s),h(s,i),h(i,r),h(i,l),h(i,a),h(a,u),h(t,f),h(t,d),h(d,p),h(d,y),h(d,E),h(E,k),h(E,A),h(E,O),v.m(S,E),h(t,F),h(t,P),h(P,M),h(e,H),et(Z,e,null),h(e,ie),h(e,W),h(W,ee),h(ee,ye),h(ee,j),h(ee,$),h($,G),h($,ce),h($,te),h($,V),h($,z),h(W,N),h(W,U),h(W,B),et(L,W,null),h(e,ge),Ce&&Ce.m(e,null),h(e,se),Se&&Se.m(e,null),h(e,J),et(Ie,e,null),h(e,ze),_e&&_e.m(e,null),T(x,qe,oe),ke&&ke.m(x,oe),T(x,Be,oe),ue&&ue.m(x,oe),T(x,nt,oe),Qe=!0,re||(wt=[Le(i,"click",n[44]),Le(M,"click",n[45])],re=!0)},p(x,oe){(!Qe||oe[0]&256&&o!==(o="f7:speaker-"+(x[8].muted?"slash":"2")+"-fill"))&&We(r,"icon",o),(!Qe||oe[0]&256)&&c!==(c=x[8].muted?"Muted":"Unmuted")&&de(u,c),(!Qe||oe[0]&3670016)&&S!==(S=Hs(x[19],x[20],x[21])+"")&&v.p(S),(!Qe||oe[0]&8)&&Y!==(Y=x[3].includes("equipment")?"stat":" stat intake")&&de(V,Y);const Te={};oe[0]&16&&(Te.checked=x[4]),oe[0]&32&&(Te.disabled=x[5].chosenItems.length!=0),L.$set(Te),!x[5].gameWin&&!x[5].gameOver?Ce?(Ce.p(x,oe),oe[0]&32&&Q(Ce,1)):(Ce=cl(x),Ce.c(),Q(Ce,1),Ce.m(e,se)):Ce&&(mt(),he(Ce,1,1,()=>{Ce=null}),gt()),x[5].gameWin||x[5].gameOver?Se?(Se.p(x,oe),oe[0]&32&&Q(Se,1)):(Se=ul(x),Se.c(),Q(Se,1),Se.m(e,J)):Se&&(mt(),he(Se,1,1,()=>{Se=null}),gt());const pe={};!be&&oe[0]&2048&&(be=!0,pe.dailyItemsData=x[11],Gs(()=>be=!1)),Ie.$set(pe),x[12][x[3]]?_e?_e.p(x,oe):(_e=hl(x),_e.c(),_e.m(e,null)):_e&&(_e.d(1),_e=null),x[24].component&&x[24].complete?ke?(ke.p(x,oe),oe[0]&16777216&&Q(ke,1)):(ke=fl(x),ke.c(),Q(ke,1),ke.m(Be.parentNode,Be)):ke&&(mt(),he(ke,1,1,()=>{ke=null}),gt()),x[24].component&&!x[24].complete?ue?(ue.p(x,oe),oe[0]&16777216&&Q(ue,1)):(ue=dl(x),ue.c(),Q(ue,1),ue.m(nt.parentNode,nt)):ue&&(mt(),he(ue,1,1,()=>{ue=null}),gt())},i(x){Qe||(Q(Z.$$.fragment,x),Q(L.$$.fragment,x),Q(Ce),Q(Se),Q(Ie.$$.fragment,x),Q(ke),Q(ue),Qe=!0)},o(x){he(Z.$$.fragment,x),he(L.$$.fragment,x),he(Ce),he(Se),he(Ie.$$.fragment,x),he(ke),he(ue),Qe=!1},d(x){x&&(I(e),I(qe),I(Be),I(nt)),tt(Z),tt(L),Ce&&Ce.d(),Se&&Se.d(),tt(Ie),_e&&_e.d(),ke&&ke.d(x),ue&&ue.d(x),re=!1,lt(wt)}}}function cl(n){let e,t,s;function i(o){n[47](o)}let r={};return n[18][n[3]]!==void 0&&(r.gameNumber=n[18][n[3]]),e=new ap({props:r}),ct.push(()=>zs(e,"gameNumber",i)),{c(){rt(e.$$.fragment)},m(o,l){et(e,o,l),s=!0},p(o,l){const a={};!t&&l[0]&262152&&(t=!0,a.gameNumber=o[18][o[3]],Gs(()=>t=!1)),e.$set(a)},i(o){s||(Q(e.$$.fragment,o),s=!0)},o(o){he(e.$$.fragment,o),s=!1},d(o){tt(e,o)}}}function ul(n){let e,t,s=n[5].gameWin?"Fantastic!":"Farewell...",i,r,o,l,a,c=n[5].gameWin?"won":"lost",u,f,d,p,g,y,E,k,A,O,v,S,F,P,M=n[11][n[3]].name+"",H,Z,ie,W,ee,ye,j,$=Hs(n[19],n[20],n[21])+"",G,ce,te,Y,V,z,N;function U(L){n[48](L)}let B={};return n[18][n[3]]!==void 0&&(B.gameNumber=n[18][n[3]]),te=new hp({props:B}),ct.push(()=>zs(te,"gameNumber",U)),z=new ac({}),{c(){e=m("div"),t=m("span"),i=q(s),r=b(),o=m("img"),a=q(`
                    You `),u=q(c),f=q("!"),d=b(),p=m("span"),p.textContent="Today's item was...",g=b(),y=m("div"),E=m("a"),k=m("img"),O=b(),v=m("iconify-icon"),F=b(),P=m("span"),H=q(M),Z=b(),ie=m("span"),W=q(`Next item available in...
                    `),ee=m("br"),ye=b(),j=m("span"),ce=b(),rt(te.$$.fragment),V=b(),rt(z.$$.fragment),Ge(o.src,l=n[5].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||_(o,"src",l),_(o,"id","gameFinishIcon"),_(o,"alt",""),_(o,"class","svelte-1vlfqbw"),_(t,"class","flex fai-center svelte-1vlfqbw"),_(t,"id","gameFinishMessage"),_(p,"class","smaller-fs"),Ge(k.src,A=Vt+n[11][n[3]].image)||_(k,"src",A),_(k,"alt",""),_(k,"class","svelte-1vlfqbw"),We(v,"icon","tabler:link"),We(v,"class","svelte-1vlfqbw"),_(E,"class","flex fjc-center fai-center svelte-1vlfqbw"),_(E,"href",S=Tn+n[11][n[3]].link),_(E,"target","_blank"),_(y,"class","itemImg ff-item flex svelte-1vlfqbw"),_(y,"id","dailyItemImg"),_(P,"class","ff-item itemName svelte-1vlfqbw"),_(P,"id","dailyItemName"),_(j,"class","ff-item svelte-1vlfqbw"),_(j,"id","nextItemTime"),_(ie,"class","flex fd-col svelte-1vlfqbw"),_(ie,"id","nextItemCont"),_(e,"class","gameFinishCont ff-bg flex fd-col fai-center border-tp br-1 bs svelte-1vlfqbw")},m(L,ge){T(L,e,ge),h(e,t),h(t,i),h(t,r),h(t,o),h(t,a),h(t,u),h(t,f),h(e,d),h(e,p),h(e,g),h(e,y),h(y,E),h(E,k),h(E,O),h(E,v),h(e,F),h(e,P),h(P,H),h(e,Z),h(e,ie),h(ie,W),h(ie,ee),h(ie,ye),h(ie,j),j.innerHTML=$,T(L,ce,ge),et(te,L,ge),T(L,V,ge),et(z,L,ge),N=!0},p(L,ge){(!N||ge[0]&32)&&s!==(s=L[5].gameWin?"Fantastic!":"Farewell...")&&de(i,s),(!N||ge[0]&32&&!Ge(o.src,l=L[5].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&_(o,"src",l),(!N||ge[0]&32)&&c!==(c=L[5].gameWin?"won":"lost")&&de(u,c),(!N||ge[0]&2056&&!Ge(k.src,A=Vt+L[11][L[3]].image))&&_(k,"src",A),(!N||ge[0]&2056&&S!==(S=Tn+L[11][L[3]].link))&&_(E,"href",S),(!N||ge[0]&2056)&&M!==(M=L[11][L[3]].name+"")&&de(H,M),(!N||ge[0]&3670016)&&$!==($=Hs(L[19],L[20],L[21])+"")&&(j.innerHTML=$);const se={};!Y&&ge[0]&262152&&(Y=!0,se.gameNumber=L[18][L[3]],Gs(()=>Y=!1)),te.$set(se)},i(L){N||(L&&je(()=>{N&&(G||(G=Re(e,Mt,{duration:150},!0)),G.run(1))}),Q(te.$$.fragment,L),Q(z.$$.fragment,L),N=!0)},o(L){L&&(G||(G=Re(e,Mt,{duration:150},!1)),G.run(0)),he(te.$$.fragment,L),he(z.$$.fragment,L),N=!1},d(L){L&&(I(e),I(ce),I(V)),L&&G&&G.end(),tt(te,L),tt(z,L)}}}function hl(n){let e,t,s,i,r,o,l,a,c,u,f,d=n[12][n[3]].name+"",p;return{c(){e=m("div"),t=q(`Yesterday's item was...
                `),s=m("div"),i=m("a"),r=m("img"),l=b(),a=m("iconify-icon"),u=b(),f=m("span"),p=q(d),Ge(r.src,o=Vt+n[12][n[3]].image)||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-1vlfqbw"),We(a,"icon","tabler:link"),We(a,"class","svelte-1vlfqbw"),_(i,"class","flex fjc-center fai-center svelte-1vlfqbw"),_(i,"href",c=Tn+n[12][n[3]].link),_(i,"target","_blank"),_(s,"class","itemImg ff-item flex svelte-1vlfqbw"),_(s,"id","previousItemImg"),_(f,"class","ff-item itemName svelte-1vlfqbw"),_(f,"id","previousItemName"),_(e,"class","previousItemCont ff-bg flex fd-col fai-center border-tp br-1 bs svelte-1vlfqbw")},m(g,y){T(g,e,y),h(e,t),h(e,s),h(s,i),h(i,r),h(i,l),h(i,a),h(e,u),h(e,f),h(f,p)},p(g,y){y[0]&4104&&!Ge(r.src,o=Vt+g[12][g[3]].image)&&_(r,"src",o),y[0]&4104&&c!==(c=Tn+g[12][g[3]].link)&&_(i,"href",c),y[0]&4104&&d!==(d=g[12][g[3]].name+"")&&de(p,d)},d(g){g&&I(e)}}}function fl(n){let e,t,s,i,r;var o=n[24].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=vs(o,l())),{c(){e=m("div"),t&&rt(t.$$.fragment),_(e,"class","promptCont")},m(a,c){T(a,e,c),t&&et(t,e,null),n[50](e),s=!0,i||(r=Le(e,"click",n[51]),i=!0)},p(a,c){if(c[0]&16777216&&o!==(o=a[24].component)){if(t){mt();const u=t;he(u.$$.fragment,1,0,()=>{tt(u,1)}),gt()}o?(t=vs(o,l()),rt(t.$$.fragment),Q(t.$$.fragment,1),et(t,e,null)):t=null}},i(a){s||(t&&Q(t.$$.fragment,a),s=!0)},o(a){t&&he(t.$$.fragment,a),s=!1},d(a){a&&I(e),t&&tt(t),n[50](null),i=!1,r()}}}function dl(n){let e,t,s,i,r,o,l;var a=n[24].component;function c(u,f){return{props:{prompted:!0}}}return a&&(s=vs(a,c())),{c(){e=m("div"),t=m("div"),s&&rt(s.$$.fragment),_(t,"class","flex fd-col border-tp br-1 bs"),_(e,"class","promptCont")},m(u,f){T(u,e,f),h(e,t),s&&et(s,t,null),n[52](e),r=!0,o||(l=Le(e,"click",n[53]),o=!0)},p(u,f){if(f[0]&16777216&&a!==(a=u[24].component)){if(s){mt();const d=s;he(d.$$.fragment,1,0,()=>{tt(d,1)}),gt()}a?(s=vs(a,c()),rt(s.$$.fragment),Q(s.$$.fragment,1),et(s,t,null)):s=null}},i(u){r||(s&&Q(s.$$.fragment,u),u&&je(()=>{r&&(i||(i=Re(t,Ve,{duration:200},!0)),i.run(1))}),r=!0)},o(u){s&&he(s.$$.fragment,u),u&&(i||(i=Re(t,Ve,{duration:200},!1)),i.run(0)),r=!1},d(u){u&&I(e),s&&tt(s),u&&i&&i.end(),n[52](null),o=!1,l()}}}function xp(n){let e,t,s,i,r,o,l,a,c,u,f,d,p,g,y,E,k,A,O,v,S,F,P,M,H,Z,ie=dn(n[7])&&dn(n[6])&&n[9],W,ee,ye,j;je(n[38]);let $=Ee(n[30]),G=[];for(let N=0;N<$.length;N+=1)G[N]=il(sl(n,$,N));let ce=n[24].component&&rl(),te=Ee(n[30]),Y=[];for(let N=0;N<te.length;N+=1)Y[N]=ol(nl(n,te,N));let V=n[10]&&ll(n);H=new Op({props:{version:Hi}});let z=ie&&al(n);return{c(){e=b();for(let N=0;N<G.length;N+=1)G[N].c();t=bt(),ce&&ce.c(),s=bt(),i=b(),r=m("div"),o=m("audio"),c=b(),u=m("audio"),p=b(),g=m("audio"),k=b(),A=m("audio"),S=b(),F=m("div");for(let N=0;N<Y.length;N+=1)Y[N].c();P=b(),V&&V.c(),M=b(),rt(H.$$.fragment),Z=b(),z&&z.c(),W=bt(),Ge(o.src,l="audio/lucky.mp3")||_(o,"src",l),o.muted=a=n[8].muted,Ge(u.src,f="audio/farewell.mp3")||_(u,"src",f),u.muted=d=n[8].muted,Ge(g.src,y="audio/heDidItAgain.mp3")||_(g,"src",y),g.muted=E=n[8].muted,Ge(A.src,O="audio/fishCatch.mp3")||_(A,"src",O),A.muted=v=n[8].muted,_(F,"class","backgrounds")},m(N,U){T(N,e,U);for(let B=0;B<G.length;B+=1)G[B]&&G[B].m(Wn.head,null);h(Wn.head,t),ce&&ce.m(Wn.head,null),h(Wn.head,s),T(N,i,U),T(N,r,U),h(r,o),n[40](o),h(r,c),h(r,u),n[41](u),h(r,p),h(r,g),n[42](g),h(r,k),h(r,A),n[43](A),T(N,S,U),T(N,F,U);for(let B=0;B<Y.length;B+=1)Y[B]&&Y[B].m(F,null);T(N,P,U),V&&V.m(N,U),T(N,M,U),et(H,N,U),T(N,Z,U),z&&z.m(N,U),T(N,W,U),ee=!0,ye||(j=[Le(_n,"storage",n[35]),Le(_n,"wheel",n[36],{passive:!1}),Le(_n,"keydown",n[37]),Le(_n,"resize",n[38]),Le(Wn,"visibilitychange",n[39])],ye=!0)},p(N,U){if(U[0]&1073741824){$=Ee(N[30]);let B;for(B=0;B<$.length;B+=1){const L=sl(N,$,B);G[B]?G[B].p(L,U):(G[B]=il(L),G[B].c(),G[B].m(t.parentNode,t))}for(;B<G.length;B+=1)G[B].d(1);G.length=$.length}if(N[24].component?ce||(ce=rl(),ce.c(),ce.m(s.parentNode,s)):ce&&(ce.d(1),ce=null),(!ee||U[0]&256&&a!==(a=N[8].muted))&&(o.muted=a),(!ee||U[0]&256&&d!==(d=N[8].muted))&&(u.muted=d),(!ee||U[0]&256&&E!==(E=N[8].muted))&&(g.muted=E),(!ee||U[0]&256&&v!==(v=N[8].muted))&&(A.muted=v),U[0]&1077936128){te=Ee(N[30]);let B;for(B=0;B<te.length;B+=1){const L=nl(N,te,B);Y[B]?Y[B].p(L,U):(Y[B]=ol(L),Y[B].c(),Y[B].m(F,null))}for(;B<Y.length;B+=1)Y[B].d(1);Y.length=te.length}N[10]?V?(V.p(N,U),U[0]&1024&&Q(V,1)):(V=ll(N),V.c(),Q(V,1),V.m(M.parentNode,M)):V&&(mt(),he(V,1,1,()=>{V=null}),gt()),U[0]&704&&(ie=dn(N[7])&&dn(N[6])&&N[9]),ie?z?(z.p(N,U),U[0]&704&&Q(z,1)):(z=al(N),z.c(),Q(z,1),z.m(W.parentNode,W)):z&&(mt(),he(z,1,1,()=>{z=null}),gt())},i(N){ee||(Q(V),Q(H.$$.fragment,N),Q(z),ee=!0)},o(N){he(V),he(H.$$.fragment,N),he(z),ee=!1},d(N){N&&(I(e),I(i),I(r),I(S),I(F),I(P),I(M),I(Z),I(W)),Xe(G,N),I(t),ce&&ce.d(N),I(s),n[40](null),n[41](null),n[42](null),n[43](null),Xe(Y,N),V&&V.d(N),tt(H,N),z&&z.d(N),ye=!1,lt(j)}}}let Hi="v1.1.1";function Hs(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function Wp(n,e,t){let s,i,r,o,l,a,c,u,f,d,p,g,y,E;ve(n,Ct,w=>t(33,i=w)),ve(n,nn,w=>t(4,r=w)),ve(n,js,w=>t(34,o=w)),ve(n,pt,w=>t(5,l=w)),ve(n,Co,w=>t(6,a=w)),ve(n,qi,w=>t(7,c=w)),ve(n,ot,w=>t(8,u=w)),ve(n,is,w=>t(59,f=w)),ve(n,kt,w=>t(23,d=w)),ve(n,st,w=>t(24,p=w)),ve(n,ji,w=>t(60,g=w)),ve(n,kn,w=>t(25,y=w)),ve(n,sn,w=>t(26,E=w));let k,A,O=!1,v=7,S=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],F=!1,P,M,H={},Z={},ie=["version","builds","changelogSeen"],W,ee,ye,j,$;Rc(()=>{t(9,O=!0),g||(X(ji,g=!0,g),X(st,p.component=cc,p))});function G(){P=setTimeout(()=>{t(10,F=!1)},750)}function ce(){clearTimeout(P),t(10,F=!0),G()}let te={equipment:19816,weapons:19818},Y,V,z=58,N=58,U=58,B;function L(){let w=0;clearInterval(B),Y=Date.now()/1e3/60/60/24+w,t(18,V={equipment:Math.floor(Y)-te.equipment,weapons:Math.floor(Y)-te.weapons});for(let Pe of["equipment","weapons"])d[Pe].gameNum!=V[Pe]+1&&(X(pt,l=Nt.currentGameData[u.mode],l),X(kt,d[Pe]=Nt.currentGameData[Pe],d),X(kt,d[Pe].gameNum=V[Pe]+1,d));w_(C_(b_(q_))).then(Pe=>{X(Co,a={equipment:Pe.val().rng_equipment_list[V.equipment],weapons:Pe.val().rng_weapons_list[V.weapons]},a),t(32,H={equipment:Pe.val().rng_equipment_list[V.equipment-1],weapons:Pe.val().rng_weapons_list[V.weapons-1]})}),B=setInterval(()=>{let Pe=Date.now(),Pn=(Math.floor(Y)+1-w)*24*60*60*1e3-Pe;t(19,z=Math.floor(Pn/1e3/60/60)),t(20,N=Math.floor(Pn%(1e3*60*60)/(1e3*60))),t(21,U=Math.floor(Pn%(1e3*60)/1e3)),z==0&&N==0&&U==0&&(X(pt,l=Nt.currentGameData[u.mode],l),X(kt,d.equipment=Nt.currentGameData.equipment,d),X(kt,d.weapons=Nt.currentGameData.weapons,d),setTimeout(L,1e3))},1e3)}L();let ge=["equipment","weapons"];for(let w of ge)fetch(`https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/item-data/${w}Data.json`).then(async Pe=>{if(Pe.status!=200){console.error(`Failed to fetch ${w}!
Status: ${Pe.status}`);return}let ds=await Pe.json();X(qi,c[w]=ds.sort((Pn,dc)=>Pn.name.toLowerCase().localeCompare(dc.name.toLowerCase())),c)});let se=[],J=[],Ie,be,ze=9;for(let w=0;w<ze;w++)se.push(`backgrounds/BG${w}.jpg`);function qe(w){be=Math.floor(Math.random()*w.length)}qe(se);function Be(){t(22,Ie=be),J.push(be)}Be(),function w(){setTimeout(()=>{if(qe(se),!J.length)Be();else if(J.length>3&&(J=J.slice(1)),!J.includes(be))Be();else{let Pe=[...Array(ze).keys()].filter(ds=>!J.includes(ds));qe(Pe),Be()}document.visibilityState=="visible"&&w()},45e3)}(),localStorage.getItem("fd-version")!=Hi&&(X(is,f=!1,f),localStorage.setItem("fd-version",Hi));function nt(){X(pt,l.gameWin=!0,l),X(Ct,i.gamesPlayed++,i),X(Ct,i.gamesWon++,i),X(Ct,i.streak++,i),X(Ct,i.winInfo[l.chosenItems.length]++,i),(l.chosenItems.length===1?$:i.streak>=3?j:ee).play()}function Qe(){X(pt,l.gameOver=!0,l),X(Ct,i.gamesPlayed++,i),X(Ct,i.streak=0,i),ye.play()}function re(){let w=A>k;document.documentElement.style.fontSize=`${(w?.75:A/k*.8)*S[v]}vh`}const wt=w=>{ie.includes(w.key)?localStorage.setItem(w.key,w.oldValue):w.key=="fd-currentGameData"?w.url.includes("ls=true")?X(kt,d=JSON.parse(w.newValue),d):localStorage.setItem("fd-currentGameData",JSON.stringify(d)):w.key=="fd-settings"?w.url.includes("ls=true")?X(ot,u=JSON.parse(w.newValue),u):localStorage.setItem("fd-settings",JSON.stringify(u)):w.key=="fd-playerStats"&&(w.url.includes("ls=true")?X(kn,y=JSON.parse(w.newValue),y):localStorage.setItem("fd-playerStats",JSON.stringify(y)))},Ce=w=>{let Pe=w.wheelDeltaY;if(w.ctrlKey){if(w.preventDefault(),S[v]==.2&&Pe<0||S[v]==5&&Pe>0)return;Pe>0?t(2,v++,v):t(2,v--,v),ce()}},Se=w=>{let Pe=["Enter"," ","Escape"];w.ctrlKey&&(w.key=="-"||w.key=="+"||w.code=="Equal"||w.key=="0")&&(w.preventDefault(),(w.key=="+"||w.code=="Equal")&&S[v]!=5?t(2,v++,v):w.key=="-"&&S[v]!=.2?t(2,v--,v):w.key=="0"&&S[v]!=1&&t(2,v=7),ce()),p.component&&W&&(!w.ctrlKey&&!w.shiftKey&&!w.altKey&&Pe.includes(w.key)||w.key=="Tab")&&X(st,p.component=null,p)};function Me(){t(0,k=_n.outerHeight),t(1,A=_n.outerWidth)}const Fe=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,k=window.outerHeight),t(1,A=window.outerWidth),re()})};function _e(w){ct[w?"unshift":"push"](()=>{ee=w,t(14,ee)})}function ke(w){ct[w?"unshift":"push"](()=>{ye=w,t(15,ye)})}function ue(w){ct[w?"unshift":"push"](()=>{j=w,t(16,j)})}function x(w){ct[w?"unshift":"push"](()=>{$=w,t(17,$)})}const oe=w=>{Pt(w),!E&&X(ot,u.muted=!u.muted,u)},Te=w=>{Pt(w),l.gameWin||l.gameOver?(location.hash="playerStats",Bi()):(X(st,p.complete=!0,p),X(st,p.component=ac,p))},pe=w=>{if(l.chosenItems.length){w.detail.checked=!w.detail.checked;return}X(nn,r=w.detail.checked,r)};function C(w){n.$$.not_equal(V[s],w)&&(V[s]=w,t(18,V))}function le(w){n.$$.not_equal(V[s],w)&&(V[s]=w,t(18,V))}function R(w){M=w,t(11,M),t(7,c),t(6,a),t(32,H)}function _t(w){ct[w?"unshift":"push"](()=>{W=w,t(13,W)})}const uc=w=>{W.children[0].contains(w.target)||(X(st,p.component=null,p),X(st,p.complete=!1,p))};function hc(w){ct[w?"unshift":"push"](()=>{W=w,t(13,W)})}const fc=w=>{W.children[0].contains(w.target)||(X(st,p.component=null,p),X(st,p.complete=!1,p))};return n.$$.update=()=>{n.$$.dirty[0]&7&&(k||A||v)&&re(),n.$$.dirty[0]&256&&t(3,s=u.mode),n.$$.dirty[0]&192|n.$$.dirty[1]&2&&dn(c)&&dn(a)&&(t(11,M={equipment:c.equipment.find(w=>w.name==a.equipment),weapons:c.weapons.find(w=>w.name==a.weapons)}),t(12,Z={equipment:c.equipment.find(w=>w.name==H.equipment),weapons:c.weapons.find(w=>w.name==H.weapons)})),n.$$.dirty[0]&16&&X(js,o=r?6:7,o),n.$$.dirty[0]&104|n.$$.dirty[1]&8&&l.chosenItems.length&&!l.gameWin&&!l.gameOver&&(l.chosenItems[l.chosenItems.length-1].name==a[s]?nt():l.chosenItems.length==o&&Qe()),n.$$.dirty[1]&4&&i.streak>i.maxStreak&&X(Ct,i.maxStreak=i.streak,i)},[k,A,v,s,r,l,a,c,u,O,F,M,Z,W,ee,ye,j,$,V,z,N,U,Ie,d,p,y,E,S,ie,ce,se,re,H,i,o,wt,Ce,Se,Me,Fe,_e,ke,ue,x,oe,Te,pe,C,le,R,_t,uc,hc,fc]}class Bp extends dt{constructor(e){super(),ft(this,e,Wp,xp,at,{},null,[-1,-1,-1])}}new Bp({target:document.body});
