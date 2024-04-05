var hc=Object.defineProperty;var fc=(n,e,t)=>e in n?hc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var xt=(n,e,t)=>(fc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Z(){}const Hs=n=>n;function _l(n){return n()}function Ir(){return Object.create(null)}function ot(n){n.forEach(_l)}function rn(n){return typeof n=="function"}function lt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let fs;function Ue(n,e){return n===e?!0:(fs||(fs=document.createElement("a")),fs.href=e,n===fs.href)}function dc(n){return Object.keys(n).length===0}function pl(n,...e){if(n==null){for(const s of e)s(void 0);return Z}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Gn(n){let e;return pl(n,t=>e=t)(),e}function me(n,e,t){n.$$.on_destroy.push(pl(e,t))}function ne(n,e,t){return n.set(t),e}function _c(n){return n&&rn(n.destroy)?n.destroy:Z}const ml=typeof window<"u";let ji=ml?()=>window.performance.now():()=>Date.now(),Hi=ml?n=>requestAnimationFrame(n):Z;const _n=new Set;function gl(n){_n.forEach(e=>{e.c(n)||(_n.delete(e),e.f())}),_n.size!==0&&Hi(gl)}function Ui(n){let e;return _n.size===0&&Hi(gl),{promise:new Promise(t=>{_n.add(e={c:n,f:t})}),abort(){_n.delete(e)}}}const pc=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(n,e){n.appendChild(e)}function vl(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function mc(n){const e=p("style");return e.textContent="/* empty */",gc(vl(n),e),e.sheet}function gc(n,e){return h(n.head||n,e),e.sheet}function k(n,e,t){n.insertBefore(e,t||null)}function S(n){n.parentNode&&n.parentNode.removeChild(n)}function Je(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function p(n){return document.createElement(n)}function vc(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function q(n){return document.createTextNode(n)}function w(){return q(" ")}function bt(){return q("")}function Le(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function xe(n,e,t){const s=e.toLowerCase();s in n?n[s]=typeof n[s]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function yc(n){return Array.from(n.childNodes)}function he(n,e){e=""+e,n.data!==e&&(n.data=e)}function bn(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function Ye(n,e,t){n.classList.toggle(e,!!t)}function yl(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class bl{constructor(e=!1){xt(this,"is_svg",!1);xt(this,"e");xt(this,"n");xt(this,"t");xt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=vc(t.nodeName):this.e=p(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)k(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}function gs(n,e){return new n(e)}const vs=new Map;let ys=0;function bc(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function wc(n,e){const t={stylesheet:mc(e),rules:{}};return vs.set(n,t),t}function bs(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let E=0;E<=1;E+=a){const T=e+(t-e)*r(E);c+=E*100+`%{${o(T,1-T)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${bc(u)}_${l}`,d=vl(n),{stylesheet:m,rules:g}=vs.get(d)||wc(d,n);g[f]||(g[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,ys+=1,f}function Gi(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),ys-=i,ys||Cc())}function Cc(){Hi(()=>{ys||(vs.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&S(e)}),vs.clear())})}function Ec(n,e,t,s){if(!e)return Z;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return Z;const{delay:r=0,duration:o=300,easing:l=Hs,start:a=ji()+r,end:c=a+o,tick:u=Z,css:f}=t(n,{from:e,to:i},s);let d=!0,m=!1,g;function v(){f&&(g=bs(n,0,1,o,r,l,f)),r||(m=!0)}function E(){f&&Gi(n,g),d=!1}return Ui(T=>{if(!m&&T>=a&&(m=!0),m&&T>=c&&(u(1,0),E()),!d)return!1;if(m){const M=T-a,P=0+1*l(M/o);u(P,1-P)}return!0}),v(),u(0,1),E}function Ic(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,Sc(n,i)}}function Sc(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let zn;function Wn(n){zn=n}function wl(){if(!zn)throw new Error("Function called outside component initialization");return zn}function Tc(n){wl().$$.on_mount.push(n)}function kc(){const n=wl();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=yl(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const un=[],at=[];let pn=[];const pi=[],Nc=Promise.resolve();let mi=!1;function Rc(){mi||(mi=!0,Nc.then(Cl))}function qe(n){pn.push(n)}function Us(n){pi.push(n)}const ni=new Set;let ln=0;function Cl(){if(ln!==0)return;const n=zn;do{try{for(;ln<un.length;){const e=un[ln];ln++,Wn(e),Dc(e.$$)}}catch(e){throw un.length=0,ln=0,e}for(Wn(null),un.length=0,ln=0;at.length;)at.pop()();for(let e=0;e<pn.length;e+=1){const t=pn[e];ni.has(t)||(ni.add(t),t())}pn.length=0}while(un.length);for(;pi.length;)pi.pop()();mi=!1,ni.clear(),Wn(n)}function Dc(n){if(n.fragment!==null){n.update(),ot(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(qe)}}function Ac(n){const e=[],t=[];pn.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),pn=e}let On;function El(){return On||(On=Promise.resolve(),On.then(()=>{On=null})),On}function Bn(n,e,t){n.dispatchEvent(yl(`${e?"intro":"outro"}${t}`))}const ms=new Set;let Nt;function mt(){Nt={r:0,c:[],p:Nt}}function gt(){Nt.r||ot(Nt.c),Nt=Nt.p}function Q(n,e){n&&n.i&&(ms.delete(n),n.i(e))}function ue(n,e,t,s){if(n&&n.o){if(ms.has(n))return;ms.add(n),Nt.c.push(()=>{ms.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const Il={duration:0};function Pc(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=Nt;l.r+=1;let a;function c(){const{delay:u=0,duration:f=300,easing:d=Hs,tick:m=Z,css:g}=i||Il;g&&(o=bs(n,1,0,f,u,d,g));const v=ji()+u,E=v+f;qe(()=>Bn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),Ui(T=>{if(r){if(T>=E)return m(0,1),Bn(n,!1,"end"),--l.r||ot(l.c),!1;if(T>=v){const M=d((T-v)/f);m(1-M,M)}}return r})}return rn(i)?El().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&Gi(n,o),r=!1)}}}function Re(n,e,t,s){let r=e(n,t,{direction:"both"}),o=s?0:1,l=null,a=null,c=null,u;function f(){c&&Gi(n,c)}function d(g,v){const E=g.b-o;return v*=Math.abs(E),{a:o,b:g.b,d:E,duration:v,start:g.start,end:g.start+v,group:g.group}}function m(g){const{delay:v=0,duration:E=300,easing:T=Hs,tick:M=Z,css:P}=r||Il,y={start:ji()+v,b:g};g||(y.group=Nt,Nt.r+=1),"inert"in n&&(g?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=y:(P&&(f(),c=bs(n,o,g,E,v,T,P)),g&&M(0,1),l=d(y,E),qe(()=>Bn(n,g,"start")),Ui(I=>{if(a&&I>a.start&&(l=d(a,E),a=null,Bn(n,l.b,"start"),P&&(f(),c=bs(n,o,l.b,l.duration,0,T,r.css))),l){if(I>=l.end)M(o=l.b,1-o),Bn(n,l.b,"end"),a||(l.b?f():--l.group.r||ot(l.group.c)),l=null;else if(I>=l.start){const L=I-l.start;o=l.a+l.d*T(L/l.duration),M(o,1-o)}}return!!(l||a)}))}return{run(g){rn(r)?El().then(()=>{r=r({direction:g?"in":"out"}),m(g)}):m(g)},end(){f(),l=a=null}}}function Ce(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Oc(n,e){ue(n,1,1,()=>{e.delete(n.key)})}function Mc(n,e){n.f(),Oc(n,e)}function Lc(n,e,t,s,i,r,o,l,a,c,u,f){let d=n.length,m=r.length,g=d;const v={};for(;g--;)v[n[g].key]=g;const E=[],T=new Map,M=new Map,P=[];for(g=m;g--;){const D=f(i,r,g),O=t(D);let G=o.get(O);G?s&&P.push(()=>G.p(D,e)):(G=c(O,D),G.c()),T.set(O,E[g]=G),O in v&&M.set(O,Math.abs(g-v[O]))}const y=new Set,I=new Set;function L(D){Q(D,1),D.m(l,u),o.set(D.key,D),u=D.first,m--}for(;d&&m;){const D=E[m-1],O=n[d-1],G=D.key,X=O.key;D===O?(u=D.first,d--,m--):T.has(X)?!o.has(G)||y.has(G)?L(D):I.has(X)?d--:M.get(G)>M.get(X)?(I.add(G),L(D)):(y.add(X),d--):(a(O,o),d--)}for(;d--;){const D=n[d];T.has(D.key)||a(D,o)}for(;m;)L(E[m-1]);return ot(P),E}function Gs(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function ht(n){n&&n.c()}function st(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),qe(()=>{const r=n.$$.on_mount.map(_l).filter(rn);n.$$.on_destroy?n.$$.on_destroy.push(...r):ot(r),n.$$.on_mount=[]}),i.forEach(qe)}function it(n,e){const t=n.$$;t.fragment!==null&&(Ac(t.after_update),ot(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Fc(n,e){n.$$.dirty[0]===-1&&(un.push(n),Rc(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function dt(n,e,t,s,i,r,o=null,l=[-1]){const a=zn;Wn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:Z,not_equal:i,bound:Ir(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Ir(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,d,...m)=>{const g=m.length?m[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&Fc(n,f)),d}):[],c.update(),u=!0,ot(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=yc(e.target);c.fragment&&c.fragment.l(f),f.forEach(S)}else c.fragment&&c.fragment.c();e.intro&&Q(n.$$.fragment),st(n,e.target,e.anchor),Cl()}Wn(a)}class _t{constructor(){xt(this,"$$");xt(this,"$$set")}$destroy(){it(this,1),this.$destroy=Z}$on(e,t){if(!rn(t))return Z;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!dc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xc="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xc);function Sl(n){const e=n-1;return e*e*e+1}function Ot(n,{delay:e=0,duration:t=400,easing:s=Hs}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}function ze(n,{delay:e=0,duration:t=400,easing:s=Sl,start:i=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-i,u=l*(1-r);return{delay:e,duration:t,easing:s,css:(f,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${l-u*d}
		`}}const an=[];function yt(n,e=Z){let t;const s=new Set;function i(l){if(lt(n,l)&&(n=l,t)){const a=!an.length;for(const c of s)c[1](),an.push(c,n);if(a){for(let c=0;c<an.length;c+=2)an[c][0](an[c+1]);an.length=0}}}function r(l){i(l(n))}function o(l,a=Z){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||Z),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}var Sr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const A=function(n,e){if(!n)throw Nn(e)},Nn=function(n){return new Error("Firebase Database ("+Tl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Wc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},zi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(d=64)),s.push(t[u],t[f],t[d],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||f==null)throw new Bc;const d=r<<2|l>>4;if(s.push(d),c!==64){const m=l<<4&240|c>>2;if(s.push(m),f!==64){const g=c<<6&192|f;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nl=function(n){const e=kl(n);return zi.encodeByteArray(e,!0)},ws=function(n){return Nl(n).replace(/\./g,"")},gi=function(n){try{return zi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n){return Rl(void 0,n)}function Rl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!jc(t)||(n[t]=Rl(n[t],e[t]));return n}function jc(n){return n!=="__proto__"}/**
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
 */function Hc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uc=()=>Hc().__FIREBASE_DEFAULTS__,Gc=()=>{if(typeof process>"u"||typeof Sr>"u")return;const n=Sr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gi(n[1]);return e&&JSON.parse(e)},Dl=()=>{try{return Uc()||Gc()||zc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vc=n=>{var e,t;return(t=(e=Dl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},$c=n=>{const e=Vc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Al=()=>{var n;return(n=Dl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Yc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ws(JSON.stringify(t)),ws(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kc())}function Qc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ol(){return Tl.NODE_ADMIN===!0}function Jc(){try{return typeof indexedDB=="object"}catch{return!1}}function Xc(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="FirebaseError";class is extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Zc,Object.setPrototypeOf(this,is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ml.prototype.create)}}class Ml{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?eu(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new is(i,l,s)}}function eu(n,e){return n.replace(tu,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const tu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n){return JSON.parse(n)}function je(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Vn(gi(r[0])||""),t=Vn(gi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},nu=function(n){const e=Ll(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},su=function(n){const e=Ll(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function wn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Tr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function vi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(kr(r)&&kr(o)){if(!vi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function kr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const d=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):f<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[f]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Fl(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,A(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},zs=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Rn(n){return n&&n._delegate?n._delegate:n}class $n{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $t="[DEFAULT]";/**
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
 */class lu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Vi;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cu(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:au(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function au(n){return n===$t?void 0:n}function cu(n){return n.instantiationMode==="EAGER"}/**
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
 */class uu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const hu={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},fu=De.INFO,du={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},_u=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=du[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=fu,this._logHandler=_u,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const pu=(n,e)=>e.some(t=>n instanceof t);let Nr,Rr;function mu(){return Nr||(Nr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gu(){return Rr||(Rr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wl=new WeakMap,yi=new WeakMap,Bl=new WeakMap,si=new WeakMap,$i=new WeakMap;function vu(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Wt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wl.set(t,n)}).catch(()=>{}),$i.set(e,n),e}function yu(n){if(yi.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});yi.set(n,e)}let bi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bu(n){bi=n(bi)}function wu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ii(this),e,...t);return Bl.set(s,e.sort?e.sort():[e]),Wt(s)}:gu().includes(n)?function(...e){return n.apply(ii(this),e),Wt(Wl.get(this))}:function(...e){return Wt(n.apply(ii(this),e))}}function Cu(n){return typeof n=="function"?wu(n):(n instanceof IDBTransaction&&yu(n),pu(n,mu())?new Proxy(n,bi):n)}function Wt(n){if(n instanceof IDBRequest)return vu(n);if(si.has(n))return si.get(n);const e=Cu(n);return e!==n&&(si.set(n,e),$i.set(e,n)),e}const ii=n=>$i.get(n);function Eu(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Wt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Wt(o.result),a.oldVersion,a.newVersion,Wt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Iu=["get","getKey","getAll","getAllKeys","count"],Su=["put","add","delete","clear"],ri=new Map;function Dr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ri.get(e))return ri.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Su.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Iu.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return ri.set(e,r),r}bu(n=>({...n,get:(e,t,s)=>Dr(e,t)||n.get(e,t,s),has:(e,t)=>!!Dr(e,t)||n.has(e,t)}));/**
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
 */class Tu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ku(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ku(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wi="@firebase/app",Ar="0.9.29";/**
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
 */const Jt=new xl("@firebase/app"),Nu="@firebase/app-compat",Ru="@firebase/analytics-compat",Du="@firebase/analytics",Au="@firebase/app-check-compat",Pu="@firebase/app-check",Ou="@firebase/auth",Mu="@firebase/auth-compat",Lu="@firebase/database",Fu="@firebase/database-compat",xu="@firebase/functions",Wu="@firebase/functions-compat",Bu="@firebase/installations",qu="@firebase/installations-compat",ju="@firebase/messaging",Hu="@firebase/messaging-compat",Uu="@firebase/performance",Gu="@firebase/performance-compat",zu="@firebase/remote-config",Vu="@firebase/remote-config-compat",$u="@firebase/storage",Yu="@firebase/storage-compat",Ku="@firebase/firestore",Qu="@firebase/firestore-compat",Ju="firebase",Xu="10.9.0";/**
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
 */const Ci="[DEFAULT]",Zu={[wi]:"fire-core",[Nu]:"fire-core-compat",[Du]:"fire-analytics",[Ru]:"fire-analytics-compat",[Pu]:"fire-app-check",[Au]:"fire-app-check-compat",[Ou]:"fire-auth",[Mu]:"fire-auth-compat",[Lu]:"fire-rtdb",[Fu]:"fire-rtdb-compat",[xu]:"fire-fn",[Wu]:"fire-fn-compat",[Bu]:"fire-iid",[qu]:"fire-iid-compat",[ju]:"fire-fcm",[Hu]:"fire-fcm-compat",[Uu]:"fire-perf",[Gu]:"fire-perf-compat",[zu]:"fire-rc",[Vu]:"fire-rc-compat",[$u]:"fire-gcs",[Yu]:"fire-gcs-compat",[Ku]:"fire-fst",[Qu]:"fire-fst-compat","fire-js":"fire-js",[Ju]:"fire-js-all"};/**
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
 */const Es=new Map,Ei=new Map;function eh(n,e){try{n.container.addComponent(e)}catch(t){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Is(n){const e=n.name;if(Ei.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;Ei.set(e,n);for(const t of Es.values())eh(t,n);return!0}function th(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const nh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bt=new Ml("app","Firebase",nh);/**
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
 */class sh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const ih=Xu;function ql(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ci,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Bt.create("bad-app-name",{appName:String(i)});if(t||(t=Al()),!t)throw Bt.create("no-options");const r=Es.get(i);if(r){if(vi(t,r.options)&&vi(s,r.config))return r;throw Bt.create("duplicate-app",{appName:i})}const o=new uu(i);for(const a of Ei.values())o.addComponent(a);const l=new sh(t,s,o);return Es.set(i,l),l}function rh(n=Ci){const e=Es.get(n);if(!e&&n===Ci&&Al())return ql();if(!e)throw Bt.create("no-app",{appName:n});return e}function mn(n,e,t){var s;let i=(s=Zu[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(l.join(" "));return}Is(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const oh="firebase-heartbeat-database",lh=1,Yn="firebase-heartbeat-store";let oi=null;function jl(){return oi||(oi=Eu(oh,lh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Bt.create("idb-open",{originalErrorMessage:n.message})})),oi}async function ah(n){try{const t=(await jl()).transaction(Yn),s=await t.objectStore(Yn).get(Hl(n));return await t.done,s}catch(e){if(e instanceof is)Jt.warn(e.message);else{const t=Bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(t.message)}}}async function Pr(n,e){try{const s=(await jl()).transaction(Yn,"readwrite");await s.objectStore(Yn).put(e,Hl(n)),await s.done}catch(t){if(t instanceof is)Jt.warn(t.message);else{const s=Bt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(s.message)}}}function Hl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ch=1024,uh=30*24*60*60*1e3;class hh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Or();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=uh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Or(),{heartbeatsToSend:s,unsentEntries:i}=fh(this._heartbeatsCache.heartbeats),r=ws(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Or(){return new Date().toISOString().substring(0,10)}function fh(n,e=ch){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Mr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Mr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jc()?Xc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ah(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mr(n){return ws(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function _h(n){Is(new $n("platform-logger",e=>new Tu(e),"PRIVATE")),Is(new $n("heartbeat",e=>new hh(e),"PRIVATE")),mn(wi,Ar,n),mn(wi,Ar,"esm2017"),mn("fire-js","")}_h("");var ph="firebase",mh="10.9.0";/**
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
 */mn(ph,mh,"app");var Lr={};const Fr="@firebase/database",xr="1.0.3";/**
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
 */let Ul="";function gh(n){Ul=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),je(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Vn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vh(e)}}catch{}return new yh},Kt=Gl("localStorage"),Ii=Gl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new xl("@firebase/database"),bh=function(){let n=1;return function(){return n++}}(),zl=function(n){const e=ou(n),t=new ru;t.update(e);const s=t.digest();return zi.encodeByteArray(s)},rs=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=rs.apply(null,s):typeof s=="object"?e+=je(s):e+=s,e+=" "}return e};let Qt=null,Wr=!0;const wh=function(n,e){A(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(gn.logLevel=De.VERBOSE,Qt=gn.log.bind(gn),e&&Ii.set("logging_enabled",!0)):typeof n=="function"?Qt=n:(Qt=null,Ii.remove("logging_enabled"))},Xe=function(...n){if(Wr===!0&&(Wr=!1,Qt===null&&Ii.get("logging_enabled")===!0&&wh(!0)),Qt){const e=rs.apply(null,n);Qt(e)}},os=function(n){return function(...e){Xe(n,...e)}},Si=function(...n){const e="FIREBASE INTERNAL ERROR: "+rs(...n);gn.error(e)},Mt=function(...n){const e=`FIREBASE FATAL ERROR: ${rs(...n)}`;throw gn.error(e),new Error(e)},vt=function(...n){const e="FIREBASE WARNING: "+rs(...n);gn.warn(e)},Ch=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Eh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Cn="[MIN_NAME]",Xt="[MAX_NAME]",Dn=function(n,e){if(n===e)return 0;if(n===Cn||e===Xt)return-1;if(e===Cn||n===Xt)return 1;{const t=Br(n),s=Br(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Ih=function(n,e){return n===e?0:n<e?-1:1},Mn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+je(e))},Yi=function(n){if(typeof n!="object"||n===null)return je(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=je(e[s]),t+=":",t+=Yi(n[e[s]]);return t+="}",t},$l=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ft(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Yl=function(n){A(!Vl(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Sh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Th=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Nh=new RegExp("^-?(0*)\\d{1,10}$"),Rh=-2147483648,Dh=2147483647,Br=function(n){if(Nh.test(n)){const e=Number(n);if(e>=Rh&&e<=Dh)return e}return null},ls=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw vt("Exception was thrown by user callback.",t),e},Math.floor(0))}},Ah=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Ph{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vt(e)}}class vn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="5",Kl="v",Ql="s",Jl="r",Xl="f",Zl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ea="ls",ta="p",Ti="ac",na="websocket",sa="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Mh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ra(n,e,t){A(typeof e=="string","typeof type must == string"),A(typeof t=="object","typeof params must == object");let s;if(e===na)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===sa)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Mh(n)&&(t.ns=n.namespace);const i=[];return ft(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.counters_={}}incrementCounter(e,t=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={},ai={};function Qi(n){const e=n.toString();return li[e]||(li[e]=new Lh),li[e]}function Fh(n,e){const t=n.toString();return ai[t]||(ai[t]=e()),ai[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ls(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="start",Wh="close",Bh="pLPCommand",qh="pRTLPCB",oa="id",la="pw",aa="ser",jh="cb",Hh="seg",Uh="ts",Gh="d",zh="dframe",ca=1870,ua=30,Vh=ca-ua,$h=25e3,Yh=3e4;class hn{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=os(e),this.stats_=Qi(t),this.urlFn=a=>(this.appCheckToken&&(a[Ti]=this.appCheckToken),ra(t,sa,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new xh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Yh)),Eh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ji((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qr)this.id=l,this.password=a;else if(o===Wh)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[qr]="t",s[aa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[jh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kl]=Ki,this.transportSessionId&&(s[Ql]=this.transportSessionId),this.lastSessionId&&(s[ea]=this.lastSessionId),this.applicationId&&(s[ta]=this.applicationId),this.appCheckToken&&(s[Ti]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zl.test(location.hostname)&&(s[Jl]=Xl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Sh()&&!Th()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=je(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Nl(t),i=$l(s,Vh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[zh]="t",s[oa]=e,s[la]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=je(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ji{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bh(),window[Bh+this.uniqueCallbackIdentifier]=e,window[qh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ji.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Xe("frame writing exception"),l.stack&&Xe(l.stack),Xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oa]=this.myID,e[la]=this.myPW,e[aa]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ua+s.length<=ca;){const o=this.pendingSegs.shift();s=s+"&"+Hh+i+"="+o.seg+"&"+Uh+i+"="+o.ts+"&"+Gh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor($h)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=16384,Qh=45e3;let Ss=null;typeof MozWebSocket<"u"?Ss=MozWebSocket:typeof WebSocket<"u"&&(Ss=WebSocket);class Et{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=os(this.connId),this.stats_=Qi(t),this.connURL=Et.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Kl]=Ki,typeof location<"u"&&location.hostname&&Zl.test(location.hostname)&&(o[Jl]=Xl),t&&(o[Ql]=t),s&&(o[ea]=s),i&&(o[Ti]=i),r&&(o[ta]=r),ra(e,na,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let s;Ol(),this.mySock=new Ss(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ss!==null&&!Et.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Vn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=je(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=$l(t,Kh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hn,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Et&&Et.isAvailable();let s=t&&!Et.previouslyFailed();if(e.webSocketOnly&&(t||vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Et];else{const i=this.transports_=[];for(const r of Kn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Kn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Kn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=6e4,Xh=5e3,Zh=10*1024,ef=100*1024,ci="t",jr="d",tf="s",Hr="r",nf="e",Ur="o",Gr="a",zr="n",Vr="p",sf="h";class rf{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=os("c:"+this.id+":"),this.transportManager_=new Kn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ef?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ci in e){const t=e[ci];t===Gr?this.upgradeIfSecondaryHealthy_():t===Hr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ur&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Mn("t",e),s=Mn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Mn("t",e),s=Mn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Mn(ci,e);if(jr in e){const s=e[jr];if(t===sf){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===zr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===tf?this.onConnectionShutdown_(s):t===Hr?this.onReset_(s):t===nf?Si("Server Error: "+s):t===Ur?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Si("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ki!==s&&vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Jh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fa{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){A(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends fa{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ts}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=32,Yr=768;class Ne{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function be(){return new Ne("")}function _e(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ht(n){return n.pieces_.length-n.pieceNum_}function Ae(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ne(n.pieces_,e)}function da(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function of(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function _a(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function pa(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ne(e,0)}function He(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Ne(t,0)}function ce(n){return n.pieceNum_>=n.pieces_.length}function nt(n,e){const t=_e(n),s=_e(e);if(t===null)return e;if(t===s)return nt(Ae(n),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ma(n,e){if(Ht(n)!==Ht(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function It(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ht(n)>Ht(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class lf{constructor(e,t){this.errorPrefix_=t,this.parts_=_a(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zs(this.parts_[s]);ga(this)}}function af(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=zs(e),ga(n)}function cf(n){const e=n.parts_.pop();n.byteLength_-=zs(e),n.parts_.length>0&&(n.byteLength_-=1)}function ga(n){if(n.byteLength_>Yr)throw new Error(n.errorPrefix_+"has a key path longer than "+Yr+" bytes ("+n.byteLength_+").");if(n.parts_.length>$r)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$r+") or object contains a cycle "+Yt(n))}function Yt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends fa{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Xi}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=1e3,uf=60*5*1e3,Kr=30*1e3,hf=1.3,ff=3e4,df="server_kill",Qr=3;class Pt extends ha{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Pt.nextPersistentConnectionId_++,this.log_=os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ln,this.maxReconnectDelay_=uf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ol())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ts.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(je(r)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Vi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Pt.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Lt(e,"w")){const s=wn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||su(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=nu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+je(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Si("Unrecognized action received from server: "+je(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ff&&(this.reconnectDelay_=Ln),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(f){A(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,l=new rf(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{vt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(df)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&vt(f),a())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tr(this.interruptReasons_)&&(this.reconnectDelay_=Ln,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Yi(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Xe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qr&&(this.reconnectDelay_=Kr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Xe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ul.replace(/\./g,"-")]=1,Pl()?e["framework.cordova"]=1:Qc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ts.getInstance().currentlyOnline();return Tr(this.interruptReasons_)&&e}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new re(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new re(Cn,e),i=new re(Cn,t);return this.compare(s,i)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds;class va extends Vs{static get __EMPTY_NODE(){return ds}static set __EMPTY_NODE(e){ds=e}compare(e,t){return Dn(e.name,t.name)}isDefinedOn(e){throw Nn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return re.MIN}maxPost(){return new re(Xt,ds)}makePost(e,t){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,ds)}toString(){return".key"}}const yn=new va;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??$e.RED,this.left=i??ut.EMPTY_NODE,this.right=r??ut.EMPTY_NODE}copy(e,t,s,i,r){return new $e(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class _f{copy(e,t,s,i,r){return this}insert(e,t,s){return new $e(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,t=ut.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ut(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _s(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new _s(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new _s(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new _s(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new _f;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n,e){return Dn(n.name,e.name)}function Zi(n,e){return Dn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;function mf(n){ki=n}const ya=function(n){return typeof n=="number"?"number:"+Yl(n):"string:"+n},ba=function(n){if(n.isLeafNode()){const e=n.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else A(n===ki||n.isEmpty(),"priority of unexpected type.");A(n===ki||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr;class Ve{constructor(e,t=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ba(this.priorityNode_)}static set __childrenNodeConstructor(e){Jr=e}static get __childrenNodeConstructor(){return Jr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:_e(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=_e(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(A(s!==".priority"||Ht(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ya(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Yl(this.value_):e+=this.value_,this.lazyHash_=zl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Ve.VALUE_TYPE_ORDER.indexOf(t),r=Ve.VALUE_TYPE_ORDER.indexOf(s);return A(i>=0,"Unknown leaf type: "+t),A(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa,Ca;function gf(n){wa=n}function vf(n){Ca=n}class yf extends Vs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Dn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Xt,new Ve("[PRIORITY-POST]",Ca))}makePost(e,t){const s=wa(e);return new re(t,new Ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const Fe=new yf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=Math.log(2);class wf{constructor(e){const t=r=>parseInt(Math.log(r)/bf,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ks=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let f,d;if(u===0)return null;if(u===1)return f=n[a],d=t?t(f):f,new $e(d,f.node,$e.BLACK,null,null);{const m=parseInt(u/2,10)+a,g=i(a,m),v=i(m+1,c);return f=n[m],d=t?t(f):f,new $e(d,f.node,$e.BLACK,g,v)}},r=function(a){let c=null,u=null,f=n.length;const d=function(g,v){const E=f-g,T=f;f-=g;const M=i(E+1,T),P=n[E],y=t?t(P):P;m(new $e(y,P.node,v,null,M))},m=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),E=Math.pow(2,a.count-(g+1));v?d(E,$e.BLACK):(d(E,$e.BLACK),d(E,$e.RED))}return u},o=new wf(n.length),l=r(o);return new ut(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;const cn={};class Dt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return A(cn&&Fe,"ChildrenNode.ts has not been loaded"),ui=ui||new Dt({".priority":cn},{".priority":Fe}),ui}get(e){const t=wn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ut?t:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,t){A(e!==yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(re.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ks(s,e.getCompare()):l=cn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Dt(u,c)}addToIndexes(e,t){const s=Cs(this.indexes_,(i,r)=>{const o=wn(this.indexSet_,r);if(A(o,"Missing index implementation for "+r),i===cn)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(re.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ks(l,o.getCompare())}else return cn;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new re(e.name,l))),a.insert(e,e.node)}});return new Dt(s,this.indexSet_)}removeFromIndexes(e,t){const s=Cs(this.indexes_,i=>{if(i===cn)return i;{const r=t.get(e.name);return r?i.remove(new re(e.name,r)):i}});return new Dt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;class K{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ba(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fn||(Fn=new K(new ut(Zi),null,Dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fn}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Fn:t}}getChild(e){const t=_e(e);return t===null?this:this.getImmediateChild(t).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(A(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new re(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fn:this.priorityNode_;return new K(i,o,r)}}updateChild(e,t){const s=_e(e);if(s===null)return t;{A(_e(e)!==".priority"||Ht(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ae(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Fe,(o,l)=>{t[o]=l.val(e),s++,r&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ya(this.getPriority().val())+":"),this.forEachChild(Fe,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":zl(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new re(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new re(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new re(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===as?-1:0}withIndex(e){if(e===yn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Fe),i=t.getIterator(Fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yn?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cf extends K{constructor(){super(new ut(Zi),K.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const as=new Cf;Object.defineProperties(re,{MIN:{value:new re(Cn,K.EMPTY_NODE)},MAX:{value:new re(Xt,as)}});va.__EMPTY_NODE=K.EMPTY_NODE;Ve.__childrenNodeConstructor=K;mf(as);vf(as);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=!0;function Qe(n,e=null){if(n===null)return K.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ve(t,Qe(e))}if(!(n instanceof Array)&&Ef){const t=[];let s=!1;if(ft(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=Qe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new re(o,a)))}}),t.length===0)return K.EMPTY_NODE;const r=ks(t,pf,o=>o.name,Zi);if(s){const o=ks(t,Fe.getCompare());return new K(r,Qe(e),new Dt({".priority":o},{".priority":Fe}))}else return new K(r,Qe(e),Dt.Default)}else{let t=K.EMPTY_NODE;return ft(n,(s,i)=>{if(Lt(n,s)&&s.substring(0,1)!=="."){const r=Qe(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Qe(e))}}gf(Qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends Vs{constructor(e){super(),this.indexPath_=e,A(!ce(e)&&_e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Dn(e.name,t.name):r}makePost(e,t){const s=Qe(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new re(t,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,as);return new re(Xt,e)}toString(){return _a(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends Vs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Dn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,t){const s=Qe(e);return new re(t,s)}toString(){return".value"}}const Tf=new Sf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){return{type:"value",snapshotNode:n}}function En(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Qn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Jn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function kf(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Qn(t,l)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(En(t,s)):o.trackChildChange(Jn(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Fe,(i,r)=>{t.hasChild(i)||s.trackChildChange(Qn(i,r))}),t.isLeafNode()||t.forEachChild(Fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Jn(i,r,o))}else s.trackChildChange(En(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.indexedFilter_=new er(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xn.getStartPost_(e),this.endPost_=Xn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new re(t,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=K.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const r=this;return t.forEachChild(Fe,(o,l)=>{r.matches(new re(o,l))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new re(t,s))||(s=K.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,m)=>f(m,d)}else o=this.index_.getCompare();const l=e;A(l.numChildren()===this.limit_,"");const a=new re(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const f=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,a);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Jn(t,s,f)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Qn(t,f));const v=l.updateImmediateChild(t,K.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(En(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Qn(c.name,c.node)),r.trackChildChange(En(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cn}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new tr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rf(n){return n.loadsAllData()?new er(n.getIndex()):n.hasLimit()?new Nf(n):new Xn(n)}function Xr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Fe?t="$priority":n.index_===Tf?t="$value":n.index_===yn?t="$key":(A(n.index_ instanceof If,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=je(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=je(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+je(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=je(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+je(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Zr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Fe&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends ha{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=os("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ns.getListenId_(e,s),l={};this.listens_[o]=l;const a=Xr(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),wn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Ns.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Xr(e._queryParams),s=e._path.toString(),i=new Vi;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+iu(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Vn(l.responseText)}catch{vt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&vt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(){return{value:null,children:new Map}}function Ia(n,e,t){if(ce(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=_e(e);n.children.has(s)||n.children.set(s,Rs());const i=n.children.get(s);e=Ae(e),Ia(i,e,t)}}function Ni(n,e,t){n.value!==null?t(e,n.value):Af(n,(s,i)=>{const r=new Ne(e.toString()+"/"+s);Ni(i,r,t)})}function Af(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ft(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=10*1e3,Of=30*1e3,Mf=5*60*1e3;class Lf{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Pf(e);const s=eo+(Of-eo)*Math.random();qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ft(e,(i,r)=>{r>0&&Lt(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Mf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Sa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=Sa()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ne(e));return new Ds(be(),t,this.revert)}}else return A(_e(this.path)===e,"operationForChild called for unrelated child."),new Ds(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.source=e,this.path=t,this.type=St.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Zn(this.source,be()):new Zn(this.source,Ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return ce(this.path)?new Zt(this.source,be(),this.snap.getImmediateChild(e)):new Zt(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=St.MERGE}operationForChild(e){if(ce(this.path)){const t=this.children.subtree(new Ne(e));return t.isEmpty()?null:t.value?new Zt(this.source,be(),t.value):new es(this.source,be(),t)}else return A(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new es(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=_e(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xf(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(kf(o.childName,o.snapshotNode))}),xn(n,i,"child_removed",e,s,t),xn(n,i,"child_added",e,s,t),xn(n,i,"child_moved",r,s,t),xn(n,i,"child_changed",e,s,t),xn(n,i,"value",e,s,t),i}function xn(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>Bf(n,l,a)),o.forEach(l=>{const a=Wf(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function Wf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Bf(n,e,t){if(e.childName==null||t.childName==null)throw Nn("Should only compare child_ events.");const s=new re(e.childName,e.snapshotNode),i=new re(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n,e){return{eventCache:n,serverCache:e}}function jn(n,e,t,s){return $s(new Ut(e,t,s),n.serverCache)}function Ta(n,e,t,s){return $s(n.eventCache,new Ut(e,t,s))}function As(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function en(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;const qf=()=>(hi||(hi=new ut(Ih)),hi);class Pe{constructor(e,t=qf()){this.value=e,this.children=t}static fromObject(e){let t=new Pe(null);return ft(e,(s,i)=>{t=t.set(new Ne(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:be(),value:this.value};if(ce(e))return null;{const s=_e(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ae(e),t);return r!=null?{path:He(new Ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const t=_e(e),s=this.children.get(t);return s!==null?s.subtree(Ae(e)):new Pe(null)}}set(e,t){if(ce(e))return new Pe(t,this.children);{const s=_e(e),r=(this.children.get(s)||new Pe(null)).set(Ae(e),t),o=this.children.insert(s,r);return new Pe(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const t=_e(e),s=this.children.get(t);if(s){const i=s.remove(Ae(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Pe(null):new Pe(this.value,r)}else return this}}get(e){if(ce(e))return this.value;{const t=_e(e),s=this.children.get(t);return s?s.get(Ae(e)):null}}setTree(e,t){if(ce(e))return t;{const s=_e(e),r=(this.children.get(s)||new Pe(null)).setTree(Ae(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Pe(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(He(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,be(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(ce(e))return null;{const r=_e(e),o=this.children.get(r);return o?o.findOnPath_(Ae(e),He(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,be(),t)}foreachOnPath_(e,t,s){if(ce(e))return this;{this.value&&s(t,this.value);const i=_e(e),r=this.children.get(i);return r?r.foreachOnPath_(Ae(e),He(t,i),s):new Pe(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(He(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.writeTree_=e}static empty(){return new Tt(new Pe(null))}}function Hn(n,e,t){if(ce(e))return new Tt(new Pe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=nt(i,e);return r=r.updateChild(o,t),new Tt(n.writeTree_.set(i,r))}else{const i=new Pe(t),r=n.writeTree_.setTree(e,i);return new Tt(r)}}}function to(n,e,t){let s=n;return ft(t,(i,r)=>{s=Hn(s,He(e,i),r)}),s}function no(n,e){if(ce(e))return Tt.empty();{const t=n.writeTree_.setTree(e,new Pe(null));return new Tt(t)}}function Ri(n,e){return on(n,e)!=null}function on(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(nt(t.path,e)):null}function so(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Fe,(s,i)=>{e.push(new re(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new re(s,i.value))}),e}function qt(n,e){if(ce(e))return n;{const t=on(n,e);return t!=null?new Tt(new Pe(t)):new Tt(n.writeTree_.subtree(e))}}function Di(n){return n.writeTree_.isEmpty()}function In(n,e){return ka(be(),n.writeTree_,e)}function ka(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(A(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ka(He(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(He(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n,e){return Aa(e,n)}function jf(n,e,t,s,i){A(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Hn(n.visibleWrites,e,t)),n.lastWriteId=s}function Hf(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Uf(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);A(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Gf(l,s.path)?i=!1:It(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return zf(n),!0;if(s.snap)n.visibleWrites=no(n.visibleWrites,s.path);else{const l=s.children;ft(l,a=>{n.visibleWrites=no(n.visibleWrites,He(s.path,a))})}return!0}else return!1}function Gf(n,e){if(n.snap)return It(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&It(He(n.path,t),e))return!0;return!1}function zf(n){n.visibleWrites=Na(n.allWrites,Vf,be()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Vf(n){return n.visible}function Na(n,e,t){let s=Tt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)It(t,o)?(l=nt(t,o),s=Hn(s,l,r.snap)):It(o,t)&&(l=nt(o,t),s=Hn(s,be(),r.snap.getChild(l)));else if(r.children){if(It(t,o))l=nt(t,o),s=to(s,l,r.children);else if(It(o,t))if(l=nt(o,t),ce(l))s=to(s,be(),r.children);else{const a=wn(r.children,_e(l));if(a){const c=a.getChild(Ae(l));s=Hn(s,be(),c)}}}else throw Nn("WriteRecord should have .snap or .children")}}return s}function Ra(n,e,t,s,i){if(!s&&!i){const r=on(n.visibleWrites,e);if(r!=null)return r;{const o=qt(n.visibleWrites,e);if(Di(o))return t;if(t==null&&!Ri(o,be()))return null;{const l=t||K.EMPTY_NODE;return In(o,l)}}}else{const r=qt(n.visibleWrites,e);if(!i&&Di(r))return t;if(!i&&t==null&&!Ri(r,be()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(It(c.path,e)||It(e,c.path))},l=Na(n.allWrites,o,e),a=t||K.EMPTY_NODE;return In(l,a)}}}function $f(n,e,t){let s=K.EMPTY_NODE;const i=on(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=qt(n.visibleWrites,e);return t.forEachChild(Fe,(o,l)=>{const a=In(qt(r,new Ne(o)),l);s=s.updateImmediateChild(o,a)}),so(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=qt(n.visibleWrites,e);return so(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Yf(n,e,t,s,i){A(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=He(e,t);if(Ri(n.visibleWrites,r))return null;{const o=qt(n.visibleWrites,r);return Di(o)?i.getChild(t):In(o,i.getChild(t))}}function Kf(n,e,t,s){const i=He(e,t),r=on(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=qt(n.visibleWrites,i);return In(o,s.getNode().getImmediateChild(t))}else return null}function Qf(n,e){return on(n.visibleWrites,e)}function Jf(n,e,t,s,i,r,o){let l;const a=qt(n.visibleWrites,e),c=on(a,be());if(c!=null)l=c;else if(t!=null)l=In(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=d.getNext();for(;m&&u.length<i;)f(m,s)!==0&&u.push(m),m=d.getNext();return u}else return[]}function Xf(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function Ps(n,e,t,s){return Ra(n.writeTree,n.treePath,e,t,s)}function ir(n,e){return $f(n.writeTree,n.treePath,e)}function io(n,e,t,s){return Yf(n.writeTree,n.treePath,e,t,s)}function Os(n,e){return Qf(n.writeTree,He(n.treePath,e))}function Zf(n,e,t,s,i,r){return Jf(n.writeTree,n.treePath,e,t,s,i,r)}function rr(n,e,t){return Kf(n.writeTree,n.treePath,e,t)}function Da(n,e){return Aa(He(n.treePath,e),n.writeTree)}function Aa(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;A(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),A(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Jn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Qn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,En(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Jn(s,e.snapshotNode,i.oldSnap));else throw Nn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Pa=new td;class or{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ut(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:en(this.viewCache_),r=Zf(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){return{filter:n}}function sd(n,e){A(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function id(n,e,t,s,i){const r=new ed;let o,l;if(t.type===St.OVERWRITE){const c=t;c.source.fromUser?o=Ai(n,e,c.path,c.snap,s,i,r):(A(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=Ms(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===St.MERGE){const c=t;c.source.fromUser?o=od(n,e,c.path,c.children,s,i,r):(A(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Pi(n,e,c.path,c.children,s,i,l,r))}else if(t.type===St.ACK_USER_WRITE){const c=t;c.revert?o=cd(n,e,c.path,s,i,r):o=ld(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===St.LISTEN_COMPLETE)o=ad(n,e,t.path,s,r);else throw Nn("Unknown operation type: "+t.type);const a=r.getChanges();return rd(e,o,a),{viewCache:o,changes:a}}function rd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=As(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Ea(As(e)))}}function Oa(n,e,t,s,i,r){const o=e.eventCache;if(Os(s,t)!=null)return e;{let l,a;if(ce(t))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=en(e),u=c instanceof K?c:K.EMPTY_NODE,f=ir(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Ps(s,en(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=_e(t);if(c===".priority"){A(Ht(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const f=io(s,t,u,a);f!=null?l=n.filter.updatePriority(u,f):l=o.getNode()}else{const u=Ae(t);let f;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=io(s,t,o.getNode(),a);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=rr(s,c,e.serverCache);f!=null?l=n.filter.updateChild(o.getNode(),c,f,u,i,r):l=o.getNode()}}return jn(e,l,o.isFullyInitialized()||ce(t),n.filter.filtersNodes())}}function Ms(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(ce(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),m,null)}else{const m=_e(t);if(!a.isCompleteForPath(t)&&Ht(t)>1)return e;const g=Ae(t),E=a.getNode().getImmediateChild(m).updateChild(g,s);m===".priority"?c=u.updatePriority(a.getNode(),E):c=u.updateChild(a.getNode(),m,E,g,Pa,null)}const f=Ta(e,c,a.isFullyInitialized()||ce(t),u.filtersNodes()),d=new or(i,f,r);return Oa(n,f,t,i,d,l)}function Ai(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new or(i,e,r);if(ce(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=jn(e,c,!0,n.filter.filtersNodes());else{const f=_e(t);if(f===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=jn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Ae(t),m=l.getNode().getImmediateChild(f);let g;if(ce(d))g=s;else{const v=u.getCompleteChild(f);v!=null?da(d)===".priority"&&v.getChild(pa(d)).isEmpty()?g=v:g=v.updateChild(d,s):g=K.EMPTY_NODE}if(m.equals(g))a=e;else{const v=n.filter.updateChild(l.getNode(),f,g,d,u,o);a=jn(e,v,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function ro(n,e){return n.eventCache.isCompleteForChild(e)}function od(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=He(t,a);ro(e,_e(u))&&(l=Ai(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=He(t,a);ro(e,_e(u))||(l=Ai(n,l,u,c,i,r,o))}),l}function oo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Pi(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;ce(t)?c=s:c=new Pe(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),g=oo(n,m,d);a=Ms(n,a,new Ne(f),g,i,r,o,l)}}),c.children.inorderTraversal((f,d)=>{const m=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!m){const g=e.serverCache.getNode().getImmediateChild(f),v=oo(n,g,d);a=Ms(n,a,new Ne(f),v,i,r,o,l)}}),a}function ld(n,e,t,s,i,r,o){if(Os(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(ce(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Ms(n,e,t,a.getNode().getChild(t),i,r,l,o);if(ce(t)){let c=new Pe(null);return a.getNode().forEachChild(yn,(u,f)=>{c=c.set(new Ne(u),f)}),Pi(n,e,t,c,i,r,l,o)}else return e}else{let c=new Pe(null);return s.foreach((u,f)=>{const d=He(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Pi(n,e,t,c,i,r,l,o)}}function ad(n,e,t,s,i){const r=e.serverCache,o=Ta(e,r.getNode(),r.isFullyInitialized()||ce(t),r.isFiltered());return Oa(n,o,t,s,Pa,i)}function cd(n,e,t,s,i,r){let o;if(Os(s,t)!=null)return e;{const l=new or(s,e,i),a=e.eventCache.getNode();let c;if(ce(t)||_e(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ps(s,en(e));else{const f=e.serverCache.getNode();A(f instanceof K,"serverChildren would be complete if leaf node"),u=ir(s,f)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=_e(t);let f=rr(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=a.getImmediateChild(u)),f!=null?c=n.filter.updateChild(a,u,f,Ae(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,K.EMPTY_NODE,Ae(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ps(s,en(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Os(s,be())!=null,jn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new er(s.getIndex()),r=Rf(s);this.processor_=nd(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(K.EMPTY_NODE,l.getNode(),null),u=new Ut(a,o.isFullyInitialized(),i.filtersNodes()),f=new Ut(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=$s(f,u),this.eventGenerator_=new Ff(this.query_)}get query(){return this.query_}}function hd(n){return n.viewCache_.serverCache.getNode()}function fd(n){return As(n.viewCache_)}function dd(n,e){const t=en(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ce(e)&&!t.getImmediateChild(_e(e)).isEmpty())?t.getChild(e):null}function lo(n){return n.eventRegistrations_.length===0}function _d(n,e){n.eventRegistrations_.push(e)}function ao(n,e,t){const s=[];if(t){A(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function co(n,e,t,s){e.type===St.MERGE&&e.source.queryId!==null&&(A(en(n.viewCache_),"We should always have a full cache before handling merges"),A(As(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=id(n.processor_,i,e,t,s);return sd(n.processor_,r.viewCache),A(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ma(n,r.changes,r.viewCache.eventCache.getNode(),null)}function pd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Fe,(r,o)=>{s.push(En(r,o))}),t.isFullyInitialized()&&s.push(Ea(t.getNode())),Ma(n,s,t.getNode(),e)}function Ma(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return xf(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class La{constructor(){this.views=new Map}}function md(n){A(!Ls,"__referenceConstructor has already been defined"),Ls=n}function gd(){return A(Ls,"Reference.ts has not been loaded"),Ls}function vd(n){return n.views.size===0}function lr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return A(r!=null,"SyncTree gave us an op for an invalid query."),co(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(co(o,e,t,s));return r}}function Fa(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Ps(t,i?s:null),a=!1;l?a=!0:s instanceof K?(l=ir(t,s),a=!1):(l=K.EMPTY_NODE,a=!1);const c=$s(new Ut(l,a,!1),new Ut(s,i,!1));return new ud(e,c)}return o}function yd(n,e,t,s,i,r){const o=Fa(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),_d(o,t),pd(o,t)}function bd(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Gt(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(ao(c,t,s)),lo(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(ao(a,t,s)),lo(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Gt(n)&&r.push(new(gd())(e._repo,e._path)),{removed:r,events:o}}function xa(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function jt(n,e){let t=null;for(const s of n.views.values())t=t||dd(s,e);return t}function Wa(n,e){if(e._queryParams.loadsAllData())return Ks(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Ba(n,e){return Wa(n,e)!=null}function Gt(n){return Ks(n)!=null}function Ks(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;function wd(n){A(!Fs,"__referenceConstructor has already been defined"),Fs=n}function Cd(){return A(Fs,"Reference.ts has not been loaded"),Fs}let Ed=1;class uo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=Xf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Id(n,e,t,s,i){return jf(n.pendingWriteTree_,e,t,s,i),i?us(n,new Zt(Sa(),e,t)):[]}function fn(n,e,t=!1){const s=Hf(n.pendingWriteTree_,e);if(Uf(n.pendingWriteTree_,e)){let r=new Pe(null);return s.snap!=null?r=r.set(be(),!0):ft(s.children,o=>{r=r.set(new Ne(o),!0)}),us(n,new Ds(s.path,r,t))}else return[]}function cs(n,e,t){return us(n,new Zt(nr(),e,t))}function Sd(n,e,t){const s=Pe.fromObject(t);return us(n,new es(nr(),e,s))}function Td(n,e){return us(n,new Zn(nr(),e))}function kd(n,e,t){const s=ar(n,t);if(s){const i=cr(s),r=i.path,o=i.queryId,l=nt(r,e),a=new Zn(sr(o),l);return ur(n,r,a)}else return[]}function qa(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ba(o,e))){const a=bd(o,e,t,s);vd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(d,m)=>Gt(m));if(u&&!f){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const m=Ad(d);for(let g=0;g<m.length;++g){const v=m[g],E=v.query,T=za(n,v);n.listenProvider_.startListening(Un(E),ts(n,E),T.hashFn,T.onComplete)}}}!f&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Un(e),null):c.forEach(d=>{const m=n.queryToTagMap.get(Qs(d));n.listenProvider_.stopListening(Un(d),m)}))}Pd(n,c)}return l}function ja(n,e,t,s){const i=ar(n,s);if(i!=null){const r=cr(i),o=r.path,l=r.queryId,a=nt(o,e),c=new Zt(sr(l),a,t);return ur(n,o,c)}else return[]}function Nd(n,e,t,s){const i=ar(n,s);if(i){const r=cr(i),o=r.path,l=r.queryId,a=nt(o,e),c=Pe.fromObject(t),u=new es(sr(l),a,c);return ur(n,o,u)}else return[]}function Rd(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,m)=>{const g=nt(d,i);r=r||jt(m,g),o=o||Gt(m)});let l=n.syncPointTree_.get(i);l?(o=o||Gt(l),r=r||jt(l,be())):(l=new La,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=K.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,g)=>{const v=jt(g,be());v&&(r=r.updateImmediateChild(m,v))}));const c=Ba(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Qs(e);A(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=Od();n.queryToTagMap.set(d,m),n.tagToQueryMap.set(m,d)}const u=Ys(n.pendingWriteTree_,i);let f=yd(l,e,t,u,r,a);if(!c&&!o&&!s){const d=Wa(l,e);f=f.concat(Md(n,e,d))}return f}function Ha(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=nt(o,e),c=jt(l,a);if(c)return c});return Ra(i,e,r,t,!0)}function Dd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const f=nt(c,t);s=s||jt(u,f)});let i=n.syncPointTree_.get(t);i?s=s||jt(i,be()):(i=new La,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Ut(s,!0,!1):null,l=Ys(n.pendingWriteTree_,e._path),a=Fa(i,e,l,r?o.getNode():K.EMPTY_NODE,r);return fd(a)}function us(n,e){return Ua(e,n.syncPointTree_,null,Ys(n.pendingWriteTree_,be()))}function Ua(n,e,t,s){if(ce(n.path))return Ga(n,e,t,s);{const i=e.get(be());t==null&&i!=null&&(t=jt(i,be()));let r=[];const o=_e(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=Da(s,o);r=r.concat(Ua(l,a,c,u))}return i&&(r=r.concat(lr(i,n,s,t))),r}}function Ga(n,e,t,s){const i=e.get(be());t==null&&i!=null&&(t=jt(i,be()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Da(s,o),u=n.operationForChild(o);u&&(r=r.concat(Ga(u,l,a,c)))}),i&&(r=r.concat(lr(i,n,s,t))),r}function za(n,e){const t=e.query,s=ts(n,t);return{hashFn:()=>(hd(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?kd(n,t._path,s):Td(n,t._path);{const r=kh(i,t);return qa(n,t,null,r)}}}}function ts(n,e){const t=Qs(e);return n.queryToTagMap.get(t)}function Qs(n){return n._path.toString()+"$"+n._queryIdentifier}function ar(n,e){return n.tagToQueryMap.get(e)}function cr(n){const e=n.indexOf("$");return A(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ne(n.substr(0,e))}}function ur(n,e,t){const s=n.syncPointTree_.get(e);A(s,"Missing sync point for query tag that we're tracking");const i=Ys(n.pendingWriteTree_,e);return lr(s,t,i,null)}function Ad(n){return n.fold((e,t,s)=>{if(t&&Gt(t))return[Ks(t)];{let i=[];return t&&(i=xa(t)),ft(s,(r,o)=>{i=i.concat(o)}),i}})}function Un(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Cd())(n._repo,n._path):n}function Pd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Qs(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Od(){return Ed++}function Md(n,e,t){const s=e._path,i=ts(n,e),r=za(n,t),o=n.listenProvider_.startListening(Un(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)A(!Gt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,f)=>{if(!ce(c)&&u&&Gt(u))return[Ks(u).query];{let d=[];return u&&(d=d.concat(xa(u).map(m=>m.query))),ft(f,(m,g)=>{d=d.concat(g)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(Un(u),ts(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new hr(t)}node(){return this.node_}}class fr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=He(this.path_,e);return new fr(this.syncTree_,t)}node(){return Ha(this.syncTree_,this.path_)}}const Ld=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ho=function(n,e,t){if(!n||typeof n!="object")return n;if(A(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Fd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return xd(n[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Fd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:A(!1,"Unexpected server value: "+n)}},xd=function(n,e,t){n.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&A(!1,"Unexpected increment value: "+s);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Wd=function(n,e,t,s){return dr(e,new fr(t,n),s)},Bd=function(n,e,t){return dr(n,new hr(e),t)};function dr(n,e,t){const s=n.getPriority().val(),i=ho(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=ho(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new Ve(l,Qe(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ve(i))),o.forEachChild(Fe,(l,a)=>{const c=dr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function pr(n,e){let t=e instanceof Ne?e:new Ne(e),s=n,i=_e(t);for(;i!==null;){const r=wn(s.node.children,i)||{children:{},childCount:0};s=new _r(i,s,r),t=Ae(t),i=_e(t)}return s}function An(n){return n.node.value}function Va(n,e){n.node.value=e,Oi(n)}function $a(n){return n.node.childCount>0}function qd(n){return An(n)===void 0&&!$a(n)}function Js(n,e){ft(n.node.children,(t,s)=>{e(new _r(t,n,s))})}function Ya(n,e,t,s){t&&!s&&e(n),Js(n,i=>{Ya(i,e,!0,s)}),t&&s&&e(n)}function jd(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function hs(n){return new Ne(n.parent===null?n.name:hs(n.parent)+"/"+n.name)}function Oi(n){n.parent!==null&&Hd(n.parent,n.name,n)}function Hd(n,e,t){const s=qd(t),i=Lt(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Oi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Oi(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=/[\[\].#$\/\u0000-\u001F\u007F]/,Gd=/[\[\].#$\u0000-\u001F\u007F]/,fi=10*1024*1024,Ka=function(n){return typeof n=="string"&&n.length!==0&&!Ud.test(n)},Qa=function(n){return typeof n=="string"&&n.length!==0&&!Gd.test(n)},zd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qa(n)},Ja=function(n,e,t){const s=t instanceof Ne?new lf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Yt(s));if(typeof e=="function")throw new Error(n+"contains a function "+Yt(s)+" with contents = "+e.toString());if(Vl(e))throw new Error(n+"contains "+e.toString()+" "+Yt(s));if(typeof e=="string"&&e.length>fi/3&&zs(e)>fi)throw new Error(n+"contains a string greater than "+fi+" utf8 bytes "+Yt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ft(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ka(o)))throw new Error(n+" contains an invalid key ("+o+") "+Yt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);af(s,o),Ja(n,l,s),cf(s)}),i&&r)throw new Error(n+' contains ".value" child '+Yt(s)+" in addition to actual children.")}},Xa=function(n,e,t,s){if(!(s&&t===void 0)&&!Qa(t))throw new Error(Fl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Vd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xa(n,e,t,s)},$d=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ka(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!zd(t))throw new Error(Fl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Kd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ma(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Vt(n,e,t){Kd(n,t),Qd(n,s=>It(s,e)||It(e,s))}function Qd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Jd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Jd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Qt&&Xe("event: "+t.toString()),ls(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="repo_interrupt",Zd=25;class e_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rs(),this.transactionQueueTree_=new _r,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function t_(n,e,t){if(n.stats_=Qi(n.repoInfo_),n.forceRestClient_||Ah())n.server_=new Ns(n.repoInfo_,(s,i,r,o)=>{fo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>_o(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{je(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Pt(n.repoInfo_,e,(s,i,r,o)=>{fo(n,s,i,r,o)},s=>{_o(n,s)},s=>{s_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Fh(n.repoInfo_,()=>new Lf(n.stats_,n.server_)),n.infoData_=new Df,n.infoSyncTree_=new uo({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=cs(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),mr(n,"connected",!1),n.serverSyncTree_=new uo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Vt(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function n_(n){const t=n.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Za(n){return Ld({timestamp:n_(n)})}function fo(n,e,t,s,i){n.dataUpdateCount++;const r=new Ne(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Cs(t,c=>Qe(c));o=Nd(n.serverSyncTree_,r,a,i)}else{const a=Qe(t);o=ja(n.serverSyncTree_,r,a,i)}else if(s){const a=Cs(t,c=>Qe(c));o=Sd(n.serverSyncTree_,r,a)}else{const a=Qe(t);o=cs(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=yr(n,r)),Vt(n.eventQueue_,l,o)}function _o(n,e){mr(n,"connected",e),e===!1&&o_(n)}function s_(n,e){ft(e,(t,s)=>{mr(n,t,s)})}function mr(n,e,t){const s=new Ne("/.info/"+e),i=Qe(t);n.infoData_.updateSnapshot(s,i);const r=cs(n.infoSyncTree_,s,i);Vt(n.eventQueue_,s,r)}function i_(n){return n.nextWriteId_++}function r_(n,e,t){const s=Dd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Qe(i).withIndex(e._queryParams.getIndex());Rd(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=cs(n.serverSyncTree_,e._path,r);else{const l=ts(n.serverSyncTree_,e);o=ja(n.serverSyncTree_,e._path,r,l)}return Vt(n.eventQueue_,e._path,o),qa(n.serverSyncTree_,e,t,null,!0),r},i=>(gr(n,"get for query "+je(e)+" failed: "+i),Promise.reject(new Error(i))))}function o_(n){gr(n,"onDisconnectEvents");const e=Za(n),t=Rs();Ni(n.onDisconnect_,be(),(i,r)=>{const o=Wd(i,r,n.serverSyncTree_,e);Ia(t,i,o)});let s=[];Ni(t,be(),(i,r)=>{s=s.concat(cs(n.serverSyncTree_,i,r));const o=u_(n,i);yr(n,o)}),n.onDisconnect_=Rs(),Vt(n.eventQueue_,be(),s)}function l_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Xd)}function gr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Xe(t,...e)}function ec(n,e,t){return Ha(n.serverSyncTree_,e,t)||K.EMPTY_NODE}function vr(n,e=n.transactionQueueTree_){if(e||Xs(n,e),An(e)){const t=nc(n,e);A(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&a_(n,hs(e),t)}else $a(e)&&Js(e,t=>{vr(n,t)})}function a_(n,e,t){const s=t.map(c=>c.currentWriteId),i=ec(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];A(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=nt(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{gr(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(fn(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&f.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Xs(n,pr(n.transactionQueueTree_,e)),vr(n,n.transactionQueueTree_),Vt(n.eventQueue_,e,u);for(let d=0;d<f.length;d++)ls(f[d])}else{if(c==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{vt("transaction at "+a.toString()+" failed: "+c);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=c}yr(n,e)}},o)}function yr(n,e){const t=tc(n,e),s=hs(t),i=nc(n,t);return c_(n,i,s),s}function c_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=nt(t,a.path);let u=!1,f;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,f=a.abortReason,i=i.concat(fn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Zd)u=!0,f="maxretry",i=i.concat(fn(n.serverSyncTree_,a.currentWriteId,!0));else{const d=ec(n,a.path,o);a.currentInputSnapshot=d;const m=e[l].update(d.val());if(m!==void 0){Ja("transaction failed: Data returned ",m,a.path);let g=Qe(m);typeof m=="object"&&m!=null&&Lt(m,".priority")||(g=g.updatePriority(d.getPriority()));const E=a.currentWriteId,T=Za(n),M=Bd(g,d,T);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=M,a.currentWriteId=i_(n),o.splice(o.indexOf(E),1),i=i.concat(Id(n.serverSyncTree_,a.path,M,a.currentWriteId,a.applyLocally)),i=i.concat(fn(n.serverSyncTree_,E,!0))}else u=!0,f="nodata",i=i.concat(fn(n.serverSyncTree_,a.currentWriteId,!0))}Vt(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(f),!1,null))))}Xs(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)ls(s[l]);vr(n,n.transactionQueueTree_)}function tc(n,e){let t,s=n.transactionQueueTree_;for(t=_e(e);t!==null&&An(s)===void 0;)s=pr(s,t),e=Ae(e),t=_e(e);return s}function nc(n,e){const t=[];return sc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function sc(n,e,t){const s=An(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Js(e,i=>{sc(n,i,t)})}function Xs(n,e){const t=An(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Va(e,t.length>0?t:void 0)}Js(e,s=>{Xs(n,s)})}function u_(n,e){const t=hs(tc(n,e)),s=pr(n.transactionQueueTree_,e);return jd(s,i=>{di(n,i)}),di(n,s),Ya(s,i=>{di(n,i)}),t}function di(n,e){const t=An(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(A(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(A(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(fn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Va(e,void 0):t.length=r+1,Vt(n.eventQueue_,hs(e),i);for(let o=0;o<s.length;o++)ls(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function f_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):vt(`Invalid query segment '${t}' in query '${n}'`)}return e}const po=function(n,e){const t=d_(n),s=t.namespace;t.domain==="firebase.com"&&Mt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ch();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ia(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Ne(t.pathString)}},d_=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(u,f)),u<f&&(i=h_(n.substring(u,f)));const d=f_(n.substring(Math.min(n.length,f)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+je(this.snapshot.exportVal())}}class p_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class br{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return ce(this._path)?null:da(this._path)}get ref(){return new Ft(this._repo,this._path)}get _queryIdentifier(){const e=Zr(this._queryParams),t=Yi(e);return t==="{}"?"default":t}get _queryObject(){return Zr(this._queryParams)}isEqual(e){if(e=Rn(e),!(e instanceof br))return!1;const t=this._repo===e._repo,s=ma(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+of(this._path)}}class Ft extends br{constructor(e,t){super(e,t,new tr,!1)}get parent(){const e=pa(this._path);return e===null?null:new Ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ns{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ne(e),s=Mi(this.ref,e);return new ns(this._node.getChild(t),s,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ns(i,Mi(this.ref,s),Fe)))}hasChild(e){const t=new Ne(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function g_(n,e){return n=Rn(n),n._checkNotDeleted("ref"),e!==void 0?Mi(n._root,e):n._root}function Mi(n,e){return n=Rn(n),_e(n._path)===null?Vd("child","path",e,!1):Xa("child","path",e,!1),new Ft(n._repo,He(n._path,e))}function v_(n){n=Rn(n);const e=new m_(()=>{}),t=new wr(e);return r_(n._repo,n,t).then(s=>new ns(s,new Ft(n._repo,n._path),n._queryParams.getIndex()))}class wr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new __("value",this,new ns(e.snapshotNode,new Ft(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new p_(this,e,t):null}matches(e){return e instanceof wr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function y_(n,...e){let t=Rn(n);for(const s of e)t=s._apply(t);return t}md(Ft);wd(Ft);/**
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
 */const b_="FIREBASE_DATABASE_EMULATOR_HOST",Li={};let w_=!1;function C_(n,e,t,s){n.repoInfo_=new ia(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function E_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=po(r,i),l=o.repoInfo,a,c;typeof process<"u"&&Lr&&(c=Lr[b_]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=po(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new vn(vn.OWNER):new Oh(n.name,n.options,e);$d("Invalid Firebase Database URL",o),ce(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=S_(l,n,u,new Ph(n.name,t));return new T_(f,n)}function I_(n,e){const t=Li[e];(!t||t[n.key]!==n)&&Mt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),l_(n),delete t[n.key]}function S_(n,e,t,s){let i=Li[e.name];i||(i={},Li[e.name]=i);let r=i[n.toURLString()];return r&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new e_(n,w_,t,s),i[n.toURLString()]=r,r}class T_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(t_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ft(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(I_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function k_(n=rh(),e){const t=th(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=$c("database");s&&N_(t,...s)}return t}function N_(n,e,t,s={}){n=Rn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Mt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new vn(vn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Yc(s.mockUserToken,n.app.options.projectId);r=new vn(o)}C_(i,e,t,r)}/**
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
 */function R_(n){gh(ih),Is(new $n("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return E_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),mn(Fr,xr,n),mn(Fr,xr,"esm2017")}Pt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Pt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};R_();var Fi={},ic={},Zs={};Object.defineProperty(Zs,"__esModule",{value:!0});Zs.rotx=void 0;function D_(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}Zs.rotx=D_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=Zs;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(ic);var rc={},ei={};Object.defineProperty(ei,"__esModule",{value:!0});ei.base64=void 0;class A_{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const P_=new A_;ei.base64=P_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=ei;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(rc);var oc={},ti={};Object.defineProperty(ti,"__esModule",{value:!0});ti.hex=void 0;class O_{encode(e){let t="",s="";for(let i=0;i<e.length;i++)t=e.charCodeAt(i).toString(16),s+=("000"+t).slice(-4);return s}decode(e){let t=e.match(/.{1,4}/g)||[],s="";for(let i=0;i<t.length;i++)s+=String.fromCharCode(parseInt(t[i],16));return s}}const M_=new O_;ti.hex=M_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=ti;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(oc);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=ic;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=rc;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var s=oc;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return s.hex}})})(Fi);let L_={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},lc={};for(let[n,e]of Object.entries(L_))lc[Fi.rotx(n,18)]=Fi.rotx(e,18);let xs={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},Ws={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},F_=["head","body","legs","feet","neck","back","ring","misc"],Bs={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged"},x_=k_(ql(lc)),Sn="https://fantastic-frontier-roblox.fandom.com/wiki/",zt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",tn={currentGameData:{equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1}},settings:{muted:!1,hardMode:{equipment:!1,weapons:!1,endless_equipment:!1,endless_weapons:!1},mode:"equipment"},playerStats:{equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},endless_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0},endless_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0}}},W_={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function xi(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function At(n){n.target.closest("button").blur()}function dn(n){return Object.keys(n).length!==0}function Rt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Cr(){xi("?ls=true"),setTimeout(xi)}let mo=localStorage.getItem("fd-currentGameData"),go=localStorage.getItem("fd-settings"),vo=localStorage.getItem("fd-playerStats"),yo=localStorage.getItem("fd-changelogSeen"),bo=localStorage.getItem("fd-helpSeen"),Tn=yt(mo?JSON.parse(mo):tn.currentGameData),ct=yt(),rt=yt(go?{...JSON.parse(go),mode:"equipment"}:tn.settings),nn=yt(),kn=yt(vo?JSON.parse(vo):tn.playerStats),Ct=yt(),Wi=yt({}),wo=yt({}),tt=yt({component:null,complete:!1}),qs=yt(7),sn=yt(!1),ss=yt(yo?JSON.parse(yo):!1),Bi=yt(bo?JSON.parse(bo):!1),Co=[Tn,rt,kn];for(let n=0;n<Co.length;n++){let e=Gn(Co[n]),t=tn[Object.keys(tn)[n]];for(let s of Object.keys(t))e[s]===void 0&&(e[s]=t[s]);for(let s of Object.keys(e))t[s]===void 0&&delete e[s]}rt.subscribe(n=>{Cr(),ct.set(Gn(Tn)[n.mode]),Ct.set(Gn(kn)[n.mode]),nn.set(n.hardMode[n.mode]),localStorage.setItem("fd-settings",JSON.stringify(n))});Tn.subscribe(n=>{Cr(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});ct.subscribe(n=>{Tn.update(e=>({...e,[Gn(rt).mode]:n}))});kn.subscribe(n=>{Cr(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});Ct.subscribe(n=>{kn.update(e=>({...e,[Gn(rt).mode]:n}))});nn.subscribe(n=>{rt.update(e=>({...e,hardMode:{...e.hardMode,[e.mode]:n}})),qs.set(n?6:7)});ss.subscribe(n=>localStorage.setItem("fd-changelogSeen",n));Bi.subscribe(n=>localStorage.setItem("fd-helpSeen",n));function B_(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:f=m=>Math.sqrt(m)*120,easing:d=Sl}=s;return{delay:u,duration:rn(f)?f(Math.sqrt(a*a+c*c)):f,easing:d,css:(m,g)=>{const v=g*a,E=g*c,T=m+g*e.width/t.width,M=m+g*e.height/t.height;return`transform: ${r} translate(${v}px, ${E}px) scale(${T}, ${M});`}}}function Eo(n,e,t){const s=n.slice();s[10]=e[t];const i=s[1]?null:s[10].special==s[0].special;s[11]=i;const r=s[1]?null:_i(s[0].types,s[10].types);s[12]=r;const o=s[1]?null:s[12]==s[0].types.length&&s[10].types.length==s[0].types.length;s[13]=o;const l=s[1]?s[10].slot==s[0].slot:null;s[14]=l;const a=s[1]?_i(s[0].stats,s[10].stats):null;s[15]=a;const c=s[1]?s[15]==s[0].stats.length&&s[10].stats.length==s[0].stats.length:null;s[16]=c;const u=Math.ceil((s[10].cost.min+s[10].cost.max)/2);s[17]=u;const f=Math.ceil((s[0].cost.min+s[0].cost.max)/2);s[18]=f;const d=s[17]==s[18];s[19]=d;const m=_i(s[0].colors,s[10].colors);s[20]=m;const g=s[20]==s[0].colors.length&&s[10].colors.length==s[0].colors.length;s[21]=g;const v=s[10].outline==s[0].outline;s[22]=v;const E=s[10].release==s[0].release;return s[23]=E,s}function Io(n,e,t){const s=n.slice();return s[26]=e[t],s}function So(n,e,t){const s=n.slice();return s[32]=e[t],s}function To(n,e,t){const s=n.slice();return s[29]=e[t],s}function ko(n){let e=[],t=new Map,s,i,r=Ce(n[3].chosenItems.toReversed());const o=l=>l[10];for(let l=0;l<r.length;l+=1){let a=Eo(n,r,l),c=o(a);t.set(c,e[l]=Lo(c,a))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=bt()},m(l,a){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(l,a);k(l,s,a),i=!0},p(l,a){if(a[0]&63){r=Ce(l[3].chosenItems.toReversed()),mt();for(let c=0;c<e.length;c+=1)e[c].r();e=Lc(e,a,o,1,l,r,t,s.parentNode,Mc,Lo,s,Eo);for(let c=0;c<e.length;c+=1)e[c].a();gt()}},i(l){if(!i){for(let a=0;a<r.length;a+=1)Q(e[a]);i=!0}},o(l){for(let a=0;a<e.length;a+=1)ue(e[a]);i=!1},d(l){l&&S(s);for(let a=0;a<e.length;a+=1)e[a].d(l)}}}function q_(n){let e,t;function s(l,a){return l[10].types.length?U_:H_}let i=s(n),r=i(n),o=!n[4]&&n[12]&&!n[13]&&Ro(n);return{c(){r.c(),e=w(),o&&o.c(),t=bt()},m(l,a){r.m(l,a),k(l,e,a),o&&o.m(l,a),k(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[4]&&l[12]&&!l[13]?o?o.p(l,a):(o=Ro(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(S(e),S(t)),r.d(l),o&&o.d(l)}}}function j_(n){let e,t;function s(l,a){return l[10].stats.length?z_:G_}let i=s(n),r=i(n),o=!n[4]&&n[15]&&!n[16]&&Ao(n);return{c(){r.c(),e=w(),o&&o.c(),t=bt()},m(l,a){r.m(l,a),k(l,e,a),o&&o.m(l,a),k(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[4]&&l[15]&&!l[16]?o?o.p(l,a):(o=Ao(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(S(e),S(t)),r.d(l),o&&o.d(l)}}}function H_(n){let e;return{c(){e=q("None")},m(t,s){k(t,e,s)},p:Z,d(t){t&&S(e)}}}function U_(n){let e,t=Ce(n[10].types),s=[];for(let i=0;i<t.length;i+=1)s[i]=No(So(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);k(i,e,r)},p(i,r){if(r[0]&8){t=Ce(i[10].types);let o;for(o=0;o<t.length;o+=1){const l=So(i,t,o);s[o]?s[o].p(l,r):(s[o]=No(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),Je(s,i)}}}function No(n){let e=Bs[n[32]]+(n[32]==n[10].types[n[10].types.length-1]?"":", "),t;return{c(){t=q(e)},m(s,i){k(s,t,i)},p(s,i){i[0]&8&&e!==(e=Bs[s[32]]+(s[32]==s[10].types[s[10].types.length-1]?"":", "))&&he(t,e)},d(s){s&&S(t)}}}function Ro(n){let e,t=n[12]+"",s;return{c(){e=p("span"),s=q(t),_(e,"class","bgInfo")},m(i,r){k(i,e,r),h(e,s)},p(i,r){r[0]&11&&t!==(t=i[12]+"")&&he(s,t)},d(i){i&&S(e)}}}function G_(n){let e;return{c(){e=q("None")},m(t,s){k(t,e,s)},p:Z,d(t){t&&S(e)}}}function z_(n){let e,t=Ce(n[10].stats),s=[];for(let i=0;i<t.length;i+=1)s[i]=Do(To(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);k(i,e,r)},p(i,r){if(r[0]&8){t=Ce(i[10].stats);let o;for(o=0;o<t.length;o+=1){const l=To(i,t,o);s[o]?s[o].p(l,r):(s[o]=Do(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),Je(s,i)}}}function Do(n){let e=Ws[n[29]]+(n[29]==n[10].stats[n[10].stats.length-1]?"":", "),t;return{c(){t=q(e)},m(s,i){k(s,t,i)},p(s,i){i[0]&8&&e!==(e=Ws[s[29]]+(s[29]==s[10].stats[s[10].stats.length-1]?"":", "))&&he(t,e)},d(s){s&&S(t)}}}function Ao(n){let e,t=n[15]+"",s;return{c(){e=p("span"),s=q(t),_(e,"class","bgInfo")},m(i,r){k(i,e,r),h(e,s)},p(i,r){r[0]&11&&t!==(t=i[15]+"")&&he(s,t)},d(i){i&&S(e)}}}function V_(n){let e=n[17].toLocaleString()+"",t,s,i,r;return{c(){t=q(e),s=w(),i=p("br"),r=q(`\r
                        Gold`)},m(o,l){k(o,t,l),k(o,s,l),k(o,i,l),k(o,r,l)},p(o,l){l[0]&8&&e!==(e=o[17].toLocaleString()+"")&&he(t,e)},d(o){o&&(S(t),S(s),S(i),S(r))}}}function $_(n){let e;return{c(){e=q("Unpurchasable")},m(t,s){k(t,e,s)},p:Z,d(t){t&&S(e)}}}function Po(n){let e,t;return{c(){e=p("iconify-icon"),xe(e,"class","bgInfo"),xe(e,"icon","mingcute:arrow-up-fill"),xe(e,"flip",t=n[17]>n[18]?"vertical":"")},m(s,i){k(s,e,i)},p(s,i){i[0]&9&&t!==(t=s[17]>s[18]?"vertical":"")&&xe(e,"flip",t)},d(s){s&&S(e)}}}function Oo(n){let e=(n[26]==n[10].colors[0]?Rt(n[26]):n[26])+(n[26]==n[10].colors[n[10].colors.length-1]?"":", "),t;return{c(){t=q(e)},m(s,i){k(s,t,i)},p(s,i){i[0]&8&&e!==(e=(s[26]==s[10].colors[0]?Rt(s[26]):s[26])+(s[26]==s[10].colors[s[10].colors.length-1]?"":", "))&&he(t,e)},d(s){s&&S(t)}}}function Mo(n){let e,t=n[20]+"",s;return{c(){e=p("span"),s=q(t),_(e,"class","bgInfo")},m(i,r){k(i,e,r),h(e,s)},p(i,r){r[0]&9&&t!==(t=i[20]+"")&&he(s,t)},d(i){i&&S(e)}}}function Lo(n,e){let t,s,i,r,o,l,a,c,u,f,d,m=e[10].name+"",g,v,E,T,M,P=(e[1]?Rt(e[10].slot):e[10].special?"Yes":"No")+"",y,I,L,D,O,G,X,ee,W,oe,ve,j,H,V,Ee,$,z,Y,N,U=Rt(e[10].outline)+"",B,ge,F,pe,te,J=xs[e[10].release]+"",Ie,ye,Ge,Be,We,Ze,Ke=Z,le,wt,we;function Se(C,ie){return C[1]?j_:q_}let Oe=Se(e),Me=Oe(e);function fe(C,ie){return C[10].cost.min==null?$_:V_}let ke=fe(e),ae=ke(e),x=!e[4]&&!e[19]&&e[17]&&Po(e),se=Ce(e[10].colors),Te=[];for(let C=0;C<se.length;C+=1)Te[C]=Oo(Io(e,se,C));let de=!e[4]&&e[20]&&!e[21]&&Mo(e);return{key:n,first:null,c(){t=p("div"),s=p("div"),i=p("a"),r=p("img"),a=w(),c=p("iconify-icon"),f=w(),d=p("span"),g=q(m),T=w(),M=p("span"),y=q(P),D=w(),O=p("span"),Me.c(),ee=w(),W=p("span"),ae.c(),oe=w(),x&&x.c(),H=w(),V=p("span");for(let C=0;C<Te.length;C+=1)Te[C].c();Ee=w(),de&&de.c(),Y=w(),N=p("span"),B=q(U),pe=w(),te=p("span"),Ie=q(J),ye=q(" Update"),We=w(),Ue(r.src,o=zt+e[10].image)||_(r,"src",o),_(r,"alt",l=e[10].name),_(r,"class","svelte-pl04pb"),xe(c,"icon","tabler:link"),xe(c,"class","svelte-pl04pb"),_(i,"class","flex fjc-center fai-center svelte-pl04pb"),_(i,"href",u=Sn+e[10].link),_(i,"target","_blank"),_(d,"class","tooltip"),_(d,"id","right"),_(s,"id","itemImage"),_(s,"class","ff-item svelte-pl04pb"),_(M,"class","ff-bg ff-item svelte-pl04pb"),_(M,"id",I=(e[1]?e[14]:e[11])?"correct":"wrong"),_(O,"class","ff-bg ff-item svelte-pl04pb"),_(O,"id",G=(e[1]?e[16]:e[13])?"correct":(e[1]?e[15]:e[12])?"partial":"wrong"),Ye(O,"smallerStats",e[1]&&e[10].stats.length>=7),_(W,"class","ff-bg ff-item svelte-pl04pb"),_(W,"id",ve=e[19]?"correct":"wrong"),_(V,"class","ff-bg ff-item svelte-pl04pb"),_(V,"id",$=e[21]?"correct":e[20]?"partial":"wrong"),_(N,"class","ff-bg ff-item svelte-pl04pb"),_(N,"id",ge=e[22]?"correct":"wrong"),_(te,"class","ff-bg ff-item svelte-pl04pb"),_(te,"id",Ge=e[23]?"correct":"wrong"),_(t,"class","itemRow svelte-pl04pb"),this.first=t},m(C,ie){k(C,t,ie),h(t,s),h(s,i),h(i,r),h(i,a),h(i,c),h(s,f),h(s,d),h(d,g),h(t,T),h(t,M),h(M,y),h(t,D),h(t,O),Me.m(O,null),h(t,ee),h(t,W),ae.m(W,null),h(W,oe),x&&x.m(W,null),h(t,H),h(t,V);for(let R=0;R<Te.length;R+=1)Te[R]&&Te[R].m(V,null);h(V,Ee),de&&de.m(V,null),h(t,Y),h(t,N),h(N,B),h(t,pe),h(t,te),h(te,Ie),h(te,ye),h(t,We),le=!0,wt||(we=[_c(v=e[6].call(null,s,[e[11],e[12],e[13],e[14],e[15],e[16],e[19],e[20],e[21],e[22],e[23]])),Le(te,"introend",e[9])],wt=!0)},p(C,ie){if(e=C,(!le||ie[0]&8&&!Ue(r.src,o=zt+e[10].image))&&_(r,"src",o),(!le||ie[0]&8&&l!==(l=e[10].name))&&_(r,"alt",l),(!le||ie[0]&8&&u!==(u=Sn+e[10].link))&&_(i,"href",u),(!le||ie[0]&8)&&m!==(m=e[10].name+"")&&he(g,m),v&&rn(v.update)&&ie[0]&11&&v.update.call(null,[e[11],e[12],e[13],e[14],e[15],e[16],e[19],e[20],e[21],e[22],e[23]]),(!le||ie[0]&10)&&P!==(P=(e[1]?Rt(e[10].slot):e[10].special?"Yes":"No")+"")&&he(y,P),(!le||ie[0]&11&&I!==(I=(e[1]?e[14]:e[11])?"correct":"wrong"))&&_(M,"id",I),Oe===(Oe=Se(e))&&Me?Me.p(e,ie):(Me.d(1),Me=Oe(e),Me&&(Me.c(),Me.m(O,null))),(!le||ie[0]&11&&G!==(G=(e[1]?e[16]:e[13])?"correct":(e[1]?e[15]:e[12])?"partial":"wrong"))&&_(O,"id",G),(!le||ie[0]&10)&&Ye(O,"smallerStats",e[1]&&e[10].stats.length>=7),ke===(ke=fe(e))&&ae?ae.p(e,ie):(ae.d(1),ae=ke(e),ae&&(ae.c(),ae.m(W,oe))),!e[4]&&!e[19]&&e[17]?x?x.p(e,ie):(x=Po(e),x.c(),x.m(W,null)):x&&(x.d(1),x=null),(!le||ie[0]&9&&ve!==(ve=e[19]?"correct":"wrong"))&&_(W,"id",ve),ie[0]&8){se=Ce(e[10].colors);let R;for(R=0;R<se.length;R+=1){const pt=Io(e,se,R);Te[R]?Te[R].p(pt,ie):(Te[R]=Oo(pt),Te[R].c(),Te[R].m(V,Ee))}for(;R<Te.length;R+=1)Te[R].d(1);Te.length=se.length}!e[4]&&e[20]&&!e[21]?de?de.p(e,ie):(de=Mo(e),de.c(),de.m(V,null)):de&&(de.d(1),de=null),(!le||ie[0]&9&&$!==($=e[21]?"correct":e[20]?"partial":"wrong"))&&_(V,"id",$),(!le||ie[0]&8)&&U!==(U=Rt(e[10].outline)+"")&&he(B,U),(!le||ie[0]&9&&ge!==(ge=e[22]?"correct":"wrong"))&&_(N,"id",ge),(!le||ie[0]&8)&&J!==(J=xs[e[10].release]+"")&&he(Ie,J),(!le||ie[0]&9&&Ge!==(Ge=e[23]?"correct":"wrong"))&&_(te,"id",Ge)},r(){Ze=t.getBoundingClientRect()},f(){Ic(t),Ke()},a(){Ke(),Ke=Ec(t,Ze,B_,{duration:125})},i(C){le||(C&&qe(()=>{le&&(E||(E=Re(s,ze,{duration:e[2]?0:300},!0)),E.run(1))}),C&&qe(()=>{le&&(L||(L=Re(M,ze,{duration:e[2]?0:300,delay:e[2]?0:250},!0)),L.run(1))}),C&&qe(()=>{le&&(X||(X=Re(O,ze,{duration:e[2]?0:300,delay:e[2]?0:550},!0)),X.run(1))}),C&&qe(()=>{le&&(j||(j=Re(W,ze,{duration:e[2]?0:300,delay:e[2]?0:850},!0)),j.run(1))}),C&&qe(()=>{le&&(z||(z=Re(V,ze,{duration:e[2]?0:300,delay:e[2]?0:1150},!0)),z.run(1))}),C&&qe(()=>{le&&(F||(F=Re(N,ze,{duration:e[2]?0:300,delay:e[2]?0:1450},!0)),F.run(1))}),C&&qe(()=>{le&&(Be||(Be=Re(te,ze,{duration:e[2]?0:300,delay:e[2]?0:1750},!0)),Be.run(1))}),le=!0)},o(C){C&&(E||(E=Re(s,ze,{duration:e[2]?0:300},!1)),E.run(0)),C&&(L||(L=Re(M,ze,{duration:e[2]?0:300,delay:e[2]?0:250},!1)),L.run(0)),C&&(X||(X=Re(O,ze,{duration:e[2]?0:300,delay:e[2]?0:550},!1)),X.run(0)),C&&(j||(j=Re(W,ze,{duration:e[2]?0:300,delay:e[2]?0:850},!1)),j.run(0)),C&&(z||(z=Re(V,ze,{duration:e[2]?0:300,delay:e[2]?0:1150},!1)),z.run(0)),C&&(F||(F=Re(N,ze,{duration:e[2]?0:300,delay:e[2]?0:1450},!1)),F.run(0)),C&&(Be||(Be=Re(te,ze,{duration:e[2]?0:300,delay:e[2]?0:1750},!1)),Be.run(0)),le=!1},d(C){C&&S(t),C&&E&&E.end(),C&&L&&L.end(),Me.d(),C&&X&&X.end(),ae.d(),x&&x.d(),C&&j&&j.end(),Je(Te,C),de&&de.d(),C&&z&&z.end(),C&&F&&F.end(),C&&Be&&Be.end(),wt=!1,ot(we)}}}function Y_(n){let e,t,s,i,r,o=n[1]?"Slot":"Has Special",l,a,c,u=n[1]?"Stats":"Stat Intakes",f,d,m,g,v,E,T,M,P,y,I,L=!n[2]&&ko(n);return{c(){e=p("div"),t=p("div"),s=p("span"),s.textContent="Item",i=w(),r=p("span"),l=q(o),a=w(),c=p("span"),f=q(u),d=w(),m=p("span"),m.textContent="Avg. Cost",g=w(),v=p("span"),v.textContent="Colors",E=w(),T=p("span"),T.textContent="Outline",M=w(),P=p("span"),P.textContent="Release",y=w(),L&&L.c(),_(s,"class","ff-item svelte-pl04pb"),_(r,"class","ff-item svelte-pl04pb"),Ye(r,"smaller-fs",!n[1]),_(c,"class","ff-item svelte-pl04pb"),Ye(c,"smaller-fs",!n[1]),_(m,"class","ff-item svelte-pl04pb"),_(v,"class","ff-item svelte-pl04pb"),_(T,"class","ff-item svelte-pl04pb"),_(P,"class","ff-item svelte-pl04pb"),_(t,"id","categories"),_(t,"class","svelte-pl04pb"),_(e,"class","gameboard ff-bg fd-col flex posrel border-tp bs svelte-pl04pb")},m(D,O){k(D,e,O),h(e,t),h(t,s),h(t,i),h(t,r),h(r,l),h(t,a),h(t,c),h(c,f),h(t,d),h(t,m),h(t,g),h(t,v),h(t,E),h(t,T),h(t,M),h(t,P),h(e,y),L&&L.m(e,null),I=!0},p(D,O){(!I||O[0]&2)&&o!==(o=D[1]?"Slot":"Has Special")&&he(l,o),(!I||O[0]&2)&&Ye(r,"smaller-fs",!D[1]),(!I||O[0]&2)&&u!==(u=D[1]?"Stats":"Stat Intakes")&&he(f,u),(!I||O[0]&2)&&Ye(c,"smaller-fs",!D[1]),D[2]?L&&(mt(),ue(L,1,1,()=>{L=null}),gt()):L?(L.p(D,O),O[0]&4&&Q(L,1)):(L=ko(D),L.c(),Q(L,1),L.m(e,null))},i(D){I||(Q(L),I=!0)},o(D){ue(L),I=!1},d(D){D&&S(e),L&&L.d()}}}function _i(n,e){return n===void 0||e===void 0?void 0:n.filter(s=>e.includes(s)).length}function K_(n,e,t){let s,i,r,o;me(n,rt,m=>t(8,s=m)),me(n,ct,m=>t(3,i=m)),me(n,nn,m=>t(4,r=m)),me(n,sn,m=>t(5,o=m));let{dailyItemsData:l}=e,a,c,u=!1;function f(m,[g,v,E,T,M,P,y,I,L,D,O]){i.chosenItems.length==i.rowInfo.length+1&&ct.update(G=>({...G,rowInfo:[...G.rowInfo,[c?T:g,(c?P:E)?1:(c?M:v)?0:-1,y,L?1:I?0:-1,D,O]]}))}const d=()=>ne(sn,o=!1,o);return n.$$set=m=>{"dailyItemsData"in m&&t(7,l=m.dailyItemsData)},n.$$.update=()=>{n.$$.dirty[0]&256&&s.mode&&(t(2,u=!0),setTimeout(()=>t(2,u=!1),10)),n.$$.dirty[0]&384&&t(0,a=l[s.mode]),n.$$.dirty[0]&256&&(s.mode.includes("equipment")?t(1,c=!0):s.mode.includes("weapons")&&t(1,c=!1))},[a,c,u,i,r,o,f,l,s,d]}class Q_ extends _t{constructor(e){super(),dt(this,e,K_,Y_,lt,{dailyItemsData:7},null,[-1,-1])}}function J_(n){let e,t,s,i;return{c(){e=p("div"),t=p("input"),_(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],_(t,"type","checkbox"),t.checked=n[1],_(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),Ye(e,"unavailable",n[2]),bn(e,"--s",`${n[0]}rem`)},m(r,o){k(r,e,o),h(e,t),s||(i=[Le(t,"change",n[5]),Le(t,"keydown",n[6])],s=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&Ye(e,"unavailable",r[2]),o&1&&bn(e,"--s",`${r[0]}rem`)},i:Z,o:Z,d(r){r&&S(e),s=!1,ot(i)}}}function X_(n,e,t){let{size:s,checked:i=!1,disabled:r=!1,forced:o=!1}=e;const l=kc(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,s=u.size),"checked"in u&&t(1,i=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[s,i,r,o,l,a,c]}class Z_ extends _t{constructor(e){super(),dt(this,e,X_,J_,lt,{size:0,checked:1,disabled:2,forced:3})}}function Fo(n,e,t){const s=n.slice();s[17]=e[t];const i=s[8].chosenItems.find(function(...o){return n[15](s[17],...o)})!=null;return s[18]=i,s}function xo(n){let e,t,s,i=Ce(n[4]),r=[];for(let o=0;o<i.length;o+=1)r[o]=Wo(Fo(n,i,o));return{c(){e=p("div");for(let o=0;o<r.length;o+=1)r[o].c();_(e,"class","itemList ff-bg flex fd-col svelte-1k366gl")},m(o,l){k(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[16](e),s=!0},p(o,l){if(l&1360){i=Ce(o[4]);let a;for(a=0;a<i.length;a+=1){const c=Fo(o,i,a);r[a]?r[a].p(c,l):(r[a]=Wo(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}},i(o){s||(o&&qe(()=>{s&&(t||(t=Re(e,Ot,{duration:75},!0)),t.run(1))}),s=!0)},o(o){o&&(t||(t=Re(e,Ot,{duration:75},!1)),t.run(0)),s=!1},d(o){o&&S(e),Je(r,o),n[16](null),o&&t&&t.end()}}}function Wo(n){let e,t,s,i,r,o=n[17].name+"",l,a,c,u,f;function d(){return n[14](n[18],n[17])}return{c(){e=p("button"),t=p("img"),i=w(),r=p("span"),l=q(o),a=w(),Ue(t.src,s=zt+n[17].image)||_(t,"src",s),_(t,"alt",""),_(t,"class","svelte-1k366gl"),e.disabled=c=n[18],_(e,"class","listItem flex fai-center no-bg-change svelte-1k366gl"),Ye(e,"unavailable",n[18])},m(m,g){k(m,e,g),h(e,t),h(e,i),h(e,r),h(r,l),h(e,a),u||(f=Le(e,"click",d),u=!0)},p(m,g){n=m,g&16&&!Ue(t.src,s=zt+n[17].image)&&_(t,"src",s),g&16&&o!==(o=n[17].name+"")&&he(l,o),g&272&&c!==(c=n[18])&&(e.disabled=c),g&272&&Ye(e,"unavailable",n[18])},d(m){m&&S(e),u=!1,f()}}}function ep(n){let e,t,s,i,r,o,l=n[7]&&n[4].length&&n[5]&&xo(n);return{c(){e=p("input"),s=w(),l&&l.c(),i=bt(),e.disabled=n[6],_(e,"type","text"),_(e,"class","searcherInput svelte-1k366gl"),_(e,"placeholder",t=`Guess the item for game #${n[0]+1} (${n[2].mode})...`)},m(a,c){k(a,e,c),n[12](e),k(a,s,c),l&&l.m(a,c),k(a,i,c),r||(o=[Le(window,"mousedown",n[11]),Le(e,"input",n[9]),Le(e,"focusin",n[13])],r=!0)},p(a,[c]){c&64&&(e.disabled=a[6]),c&5&&t!==(t=`Guess the item for game #${a[0]+1} (${a[2].mode})...`)&&_(e,"placeholder",t),a[7]&&a[4].length&&a[5]?l?(l.p(a,c),c&176&&Q(l,1)):(l=xo(a),l.c(),Q(l,1),l.m(i.parentNode,i)):l&&(mt(),ue(l,1,1,()=>{l=null}),gt())},i(a){Q(l)},o(a){ue(l)},d(a){a&&(S(e),S(s),S(i)),n[12](null),l&&l.d(a),r=!1,ot(o)}}}function tp(n,e,t){let s,i,r,o;me(n,rt,y=>t(2,s=y)),me(n,sn,y=>t(6,i=y)),me(n,Wi,y=>t(7,r=y)),me(n,ct,y=>t(8,o=y));let{gameNumber:l}=e,a,c,u=[],f=!1;function d(){let y=a.value.toLowerCase();if(t(4,u=[]),!!y)for(let I of r[s.mode])I.name.toLowerCase().includes(y)&&u.push(I)}function m(y){i||(ct.update(I=>({...I,chosenItems:[...I.chosenItems,y]})),t(1,a.value="",a),d())}const g=y=>{c&&y.target!=a&&!c.contains(y.target)&&t(5,f=!1)};function v(y){at[y?"unshift":"push"](()=>{a=y,t(1,a)})}const E=()=>t(5,f=!0),T=(y,I)=>{y||(m(I),ne(sn,i=!0,i))},M=(y,I)=>I.name==y.name;function P(y){at[y?"unshift":"push"](()=>{c=y,t(3,c)})}return n.$$set=y=>{"gameNumber"in y&&t(0,l=y.gameNumber)},n.$$.update=()=>{n.$$.dirty&6&&s.mode&&a&&d()},[l,a,s,c,u,f,i,r,o,d,m,g,v,E,T,M,P]}class np extends _t{constructor(e){super(),dt(this,e,tp,ep,lt,{gameNumber:0})}}function Bo(n){let e,t,s;return{c(){e=p("span"),_(e,"id","HPFlash"),_(e,"class","svelte-14eask9")},m(i,r){k(i,e,r),s=!0},i(i){s||(t&&t.end(1),s=!0)},o(i){i&&(t=Pc(e,Ot,{duration:200})),s=!1},d(i){i&&S(e),i&&t&&t.end()}}}function sp(n){let e,t,s,i,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,f,d,m,g,v,E=n[4]?"You've lost your remaining armor.":"Your armor is protecting you.",T,M,P,y,I,L,D,O,G,X,ee,W=n[1]&&Bo();function oe(j){n[6](j)}let ve={};return n[0]!==void 0&&(ve.gameNumber=n[0]),G=new np({props:ve}),at.push(()=>Gs(G,"gameNumber",oe)),{c(){e=p("div"),t=p("div"),s=p("div"),i=p("div"),r=p("div"),o=p("span"),a=q(l),c=q("/600"),u=w(),f=p("button"),d=p("img"),g=w(),v=p("span"),T=q(E),M=w(),P=p("br"),y=q(`\r
                You can take `),I=q(n[2]),L=q(" hits at most!"),D=w(),W&&W.c(),O=w(),ht(G.$$.fragment),_(o,"class","svelte-14eask9"),_(r,"class","HPBackground svelte-14eask9"),bn(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),_(i,"class","innerGameHP flex posrel svelte-14eask9"),_(s,"class","outerGameHP posrel svelte-14eask9"),Ue(d.src,m="misc/armor.svg")||_(d,"src",m),_(d,"alt","Armor"),_(d,"class","svelte-14eask9"),Ye(d,"noArmor",n[4]),_(v,"class","tooltip svelte-14eask9"),_(v,"id","right"),_(f,"class","ff-item posrel br-1 svelte-14eask9"),_(f,"id","armorIcon"),_(t,"class","gameHPCont flex svelte-14eask9"),_(e,"class","currentGameInfo ff-bg flex fd-row fw fjc-center fai-center posrel border-tp br-1 bs svelte-14eask9")},m(j,H){k(j,e,H),h(e,t),h(t,s),h(s,i),h(i,r),h(r,o),h(o,a),h(o,c),h(t,u),h(t,f),h(f,d),h(f,g),h(f,v),h(v,T),h(v,M),h(v,P),h(v,y),h(v,I),h(v,L),h(e,D),W&&W.m(e,null),h(e,O),st(G,e,null),ee=!0},p(j,[H]){(!ee||H&12)&&l!==(l=Math.round(600-j[3].chosenItems.length*(600/j[2]))+"")&&he(a,l),H&12&&bn(r,"width",`${Math.floor(100*(j[2]-j[3].chosenItems.length)/j[2])}%`),(!ee||H&16)&&Ye(d,"noArmor",j[4]),(!ee||H&16)&&E!==(E=j[4]?"You've lost your remaining armor.":"Your armor is protecting you.")&&he(T,E),(!ee||H&4)&&he(I,j[2]),j[1]?W?H&2&&Q(W,1):(W=Bo(),W.c(),Q(W,1),W.m(e,O)):W&&(mt(),ue(W,1,1,()=>{W=null}),gt());const V={};!X&&H&1&&(X=!0,V.gameNumber=j[0],Us(()=>X=!1)),G.$set(V)},i(j){ee||(Q(W),Q(G.$$.fragment,j),ee=!0)},o(j){ue(W),ue(G.$$.fragment,j),ee=!1},d(j){j&&S(e),W&&W.d(),it(G)}}}function ip(n,e,t){let s,i,r,o;me(n,sn,u=>t(5,s=u)),me(n,qs,u=>t(2,i=u)),me(n,ct,u=>t(3,r=u)),me(n,nn,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&s&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,i,r,o,s,c]}class rp extends _t{constructor(e){super(),dt(this,e,ip,sp,lt,{gameNumber:0})}}function qo(n,e,t){const s=n.slice();return s[9]=e[t],s}function jo(n,e,t){const s=n.slice();return s[12]=e[t],s}function Ho(n){let e,t=(n[12]===!0||n[12]===1?n[3].html.blue:n[12]===0?n[3].html.yellow:n[12]===!1||n[12]===-1?n[3].html.red:null)+"",s;return{c(){e=new bl(!1),s=bt(),e.a=s},m(i,r){e.m(t,i,r),k(i,s,r)},p(i,r){r&4&&t!==(t=(i[12]===!0||i[12]===1?i[3].html.blue:i[12]===0?i[3].html.yellow:i[12]===!1||i[12]===-1?i[3].html.red:null)+"")&&e.p(t)},d(i){i&&(S(s),e.d())}}}function Uo(n){let e,t,s=Ce(n[9]),i=[];for(let r=0;r<s.length;r+=1)i[r]=Ho(jo(n,s,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=w(),t=p("br")},m(r,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(r,o);k(r,e,o),k(r,t,o)},p(r,o){if(o&12){s=Ce(r[9]);let l;for(l=0;l<s.length;l+=1){const a=jo(r,s,l);i[l]?i[l].p(a,o):(i[l]=Ho(a),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},d(r){r&&(S(e),S(t)),Je(i,r)}}}function op(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v=n[1]?"Copied!":"Copy",E,T,M,P=Ce(n[2].rowInfo.toReversed()),y=[];for(let I=0;I<P.length;I+=1)y[I]=Uo(qo(n,P,I));return{c(){e=p("div"),t=p("span"),t.textContent="Game Stats",s=w(),i=p("span"),r=q(n[4]),o=w(),l=p("br"),a=w();for(let I=0;I<y.length;I+=1)y[I].c();c=w(),u=p("button"),f=q(`Share Stats\r
        `),d=p("iconify-icon"),m=w(),g=p("span"),E=q(v),_(i,"class","smaller-fs"),xe(d,"icon","ri:share-fill"),_(g,"class","tooltip"),_(g,"id","top"),_(u,"class","flex fai-center posrel border-tp br-1 smaller-fs svelte-14jqt1l"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs")},m(I,L){k(I,e,L),h(e,t),h(e,s),h(e,i),h(i,r),h(i,o),h(i,l),h(i,a);for(let D=0;D<y.length;D+=1)y[D]&&y[D].m(i,null);h(e,c),h(e,u),h(u,f),h(u,d),h(u,m),h(u,g),h(g,E),T||(M=Le(u,"click",n[6]),T=!0)},p(I,[L]){if(L&12){P=Ce(I[2].rowInfo.toReversed());let D;for(D=0;D<P.length;D+=1){const O=qo(I,P,D);y[D]?y[D].p(O,L):(y[D]=Uo(O),y[D].c(),y[D].m(i,null))}for(;D<y.length;D+=1)y[D].d(1);y.length=P.length}L&2&&v!==(v=I[1]?"Copied!":"Copy")&&he(E,v)},i:Z,o:Z,d(I){I&&S(e),Je(y,I),T=!1,M()}}}function lp(n,e,t){let s,i,r;me(n,ct,d=>t(2,s=d)),me(n,rt,d=>t(7,i=d)),me(n,nn,d=>t(8,r=d));let{gameNumber:o}=e,l={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},a=`${r?"(Nightmare)":""} Frontierdle - ${Rt(i.mode)} #${o+1}`,c="",u=!1;setTimeout(()=>{for(let d of s.rowInfo.toReversed()){let m="";for(let g of d)m+=g===!0||g===1?l.js.blue:g===0?l.js.yellow:g===!1||g===-1?l.js.red:null;t(0,c+=m+`
`)}});const f=d=>{At(d),navigator.clipboard.writeText(`${a}
${c}
${location.origin+location.pathname}`),t(1,u=!0),setTimeout(()=>t(1,u=!1),1e3)};return n.$$set=d=>{"gameNumber"in d&&t(5,o=d.gameNumber)},[c,u,s,l,a,o,f]}class ap extends _t{constructor(e){super(),dt(this,e,lp,op,lt,{gameNumber:5})}}function Go(n,e,t){const s=n.slice();return s[5]=e[t][0],s[6]=e[t][1],s}function zo(n){let e,t,s=n[5]+"",i,r,o,l,a,c=n[6]+"",u,f;return{c(){e=p("div"),t=p("span"),i=q(s),r=w(),o=p("span"),o.innerHTML="",l=w(),a=p("span"),u=q(c),f=w(),_(t,"id","guessNum"),_(t,"class","svelte-mzhi8s"),_(o,"class","posrel border-tp svelte-mzhi8s"),_(o,"id","winsBar"),bn(o,"width",`${n[6]*80/n[3]}%`),_(a,"class","smaller-fs svelte-mzhi8s"),_(a,"id","winsNum"),_(e,"class","flex fai-center svelte-mzhi8s")},m(d,m){k(d,e,m),h(e,t),h(t,i),h(e,r),h(e,o),h(e,l),h(e,a),h(a,u),h(e,f)},p(d,m){m&2&&s!==(s=d[5]+"")&&he(i,s),m&10&&bn(o,"width",`${d[6]*80/d[3]}%`),m&2&&c!==(c=d[6]+"")&&he(u,c)},d(d){d&&S(e)}}}function cp(n){let e,t,s,i=Rt(n[2])+"",r,o,l,a,c,u,f=n[1].gamesPlayed+"",d,m,g,v,E,T,M=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"",P,y,I,L,D,O,G,X=n[1].streak+"",ee,W,oe,ve,j,H,V=n[1].maxStreak+"",Ee,$,z,Y,N,U,B,ge,F,pe=Ce(Object.entries(n[1].winInfo)),te=[];for(let J=0;J<pe.length;J+=1)te[J]=zo(Go(n,pe,J));return{c(){e=p("div"),t=p("span"),s=q("Your Stats - "),r=q(i),o=w(),l=p("div"),a=p("div"),c=p("div"),u=p("span"),d=q(f),m=w(),g=p("span"),g.textContent="Games Played",v=w(),E=p("div"),T=p("span"),P=q(M),y=q("%"),I=w(),L=p("span"),L.textContent="Win Rate",D=w(),O=p("div"),G=p("span"),ee=q(X),W=w(),oe=p("span"),oe.textContent="Current Streak",ve=w(),j=p("div"),H=p("span"),Ee=q(V),$=w(),z=p("span"),z.textContent="Max Streak",Y=w(),N=p("span"),N.textContent="Win Distribution",U=w(),B=p("div");for(let J=0;J<te.length;J+=1)te[J].c();_(g,"id","statsTitle"),_(g,"class","svelte-mzhi8s"),_(c,"class","svelte-mzhi8s"),_(L,"id","statsTitle"),_(L,"class","svelte-mzhi8s"),_(E,"class","svelte-mzhi8s"),_(oe,"id","statsTitle"),_(oe,"class","svelte-mzhi8s"),_(O,"class","svelte-mzhi8s"),_(z,"id","statsTitle"),_(z,"class","svelte-mzhi8s"),_(j,"class","svelte-mzhi8s"),_(a,"class","flex svelte-mzhi8s"),_(a,"id","playerStatsInfo"),_(N,"class","smaller-fs"),_(B,"class","flex fd-col smaller-fs svelte-mzhi8s"),_(B,"id","distributionChart"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs"),_(e,"id","playerStats")},m(J,Ie){k(J,e,Ie),h(e,t),h(t,s),h(t,r),h(e,o),h(e,l),h(l,a),h(a,c),h(c,u),h(u,d),h(c,m),h(c,g),h(a,v),h(a,E),h(E,T),h(T,P),h(T,y),h(E,I),h(E,L),h(a,D),h(a,O),h(O,G),h(G,ee),h(O,W),h(O,oe),h(a,ve),h(a,j),h(j,H),h(H,Ee),h(j,$),h(j,z),h(e,Y),h(e,N),h(e,U),h(e,B);for(let ye=0;ye<te.length;ye+=1)te[ye]&&te[ye].m(B,null);F=!0},p(J,[Ie]){if(n=J,(!F||Ie&4)&&i!==(i=Rt(n[2])+"")&&he(r,i),(!F||Ie&2)&&f!==(f=n[1].gamesPlayed+"")&&he(d,f),(!F||Ie&2)&&M!==(M=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"")&&he(P,M),(!F||Ie&2)&&X!==(X=n[1].streak+"")&&he(ee,X),(!F||Ie&2)&&V!==(V=n[1].maxStreak+"")&&he(Ee,V),Ie&10){pe=Ce(Object.entries(n[1].winInfo));let ye;for(ye=0;ye<pe.length;ye+=1){const Ge=Go(n,pe,ye);te[ye]?te[ye].p(Ge,Ie):(te[ye]=zo(Ge),te[ye].c(),te[ye].m(B,null))}for(;ye<te.length;ye+=1)te[ye].d(1);te.length=pe.length}},i(J){F||(J&&qe(()=>{F&&(ge||(ge=Re(e,ze,{duration:n[0]?200:0},!0)),ge.run(1))}),F=!0)},o(J){J&&(ge||(ge=Re(e,ze,{duration:n[0]?200:0},!1)),ge.run(0)),F=!1},d(J){J&&S(e),Je(te,J),J&&ge&&ge.end()}}}function up(n,e,t){let s,i,r,o;me(n,rt,a=>t(4,r=a)),me(n,Ct,a=>t(1,o=a));let{prompted:l=!1}=e;return n.$$set=a=>{"prompted"in a&&t(0,l=a.prompted)},n.$$.update=()=>{n.$$.dirty&2&&t(3,s=Math.max(...Object.values(o.winInfo))),n.$$.dirty&16&&t(2,i=r.mode)},[l,o,i,s,r]}class ac extends _t{constructor(e){super(),dt(this,e,up,cp,lt,{prompted:0})}}function Vo(n,e,t){const s=n.slice();return s[5]=e[t],s}function hp(n){let e,t=Ce(n[1]),s=[];for(let i=0;i<t.length;i+=1)s[i]=$o(Vo(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);k(i,e,r)},p(i,r){if(r&2){t=Ce(i[1]);let o;for(o=0;o<t.length;o+=1){const l=Vo(i,t,o);s[o]?s[o].p(l,r):(s[o]=$o(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),Je(s,i)}}}function fp(n){let e,t,s;return{c(){e=p("span"),t=q("— "),s=q(n[1]),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(i,r){k(i,e,r),h(e,t),h(e,s)},p(i,r){r&2&&he(s,i[1])},d(i){i&&S(e)}}}function $o(n){let e,t,s=n[5]+"",i;return{c(){e=p("span"),t=q("— "),i=q(s),_(e,"id","info"),_(e,"class","svelte-1vq8gvl")},m(r,o){k(r,e,o),h(e,t),h(e,i)},p(r,o){o&2&&s!==(s=r[5]+"")&&he(i,s)},d(r){r&&S(e)}}}function dp(n){let e,t,s,i,r,o,l;function a(f,d){return typeof f[1]=="string"?fp:hp}let c=a(n),u=c(n);return{c(){e=p("li"),t=p("span"),s=q("v"),i=q(n[0]),r=w(),o=p("i"),o.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":W_[n[2][0]%10])+", 20"+n[2][2]}`,l=w(),u.c(),_(t,"id","version"),_(t,"class","svelte-1vq8gvl"),_(o,"id","date"),_(o,"class","svelte-1vq8gvl"),_(e,"class","flex fw fai-center svelte-1vq8gvl")},m(f,d){k(f,e,d),h(e,t),h(t,s),h(t,i),h(e,r),h(e,o),h(e,l),u.m(e,null)},p(f,[d]){d&1&&he(i,f[0]),c===(c=a(f))&&u?u.p(f,d):(u.d(1),u=c(f),u&&(u.c(),u.m(e,null)))},i:Z,o:Z,d(f){f&&S(e),u.d()}}}function _p(n,e,t){let{version:s,date:i,text:r}=e,o=i.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,s=a.version),"date"in a&&t(4,i=a.date),"text"in a&&t(1,r=a.text)},[s,r,o,l,i]}class Yo extends _t{constructor(e){super(),dt(this,e,_p,dp,lt,{version:0,date:4,text:1})}}function pp(n){let e,t,s,i,r,o,l;return i=new Yo({props:{version:"1.1.0",date:"4/4/24",text:["Added 'Weapons' game category","'Game Help' prompt now appears on first visit"]}}),o=new Yo({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=p("span"),e.textContent="Changelog",t=w(),s=p("ul"),ht(i.$$.fragment),r=w(),ht(o.$$.fragment),_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-1hn7lke"),_(s,"id","contents")},m(a,c){k(a,e,c),k(a,t,c),k(a,s,c),st(i,s,null),h(s,r),st(o,s,null),l=!0},p:Z,i(a){l||(Q(i.$$.fragment,a),Q(o.$$.fragment,a),l=!0)},o(a){ue(i.$$.fragment,a),ue(o.$$.fragment,a),l=!1},d(a){a&&(S(e),S(t),S(s)),it(i),it(o)}}}class mp extends _t{constructor(e){super(),dt(this,e,null,pp,lt,{})}}function gp(n){let e,t,s;return{c(){e=p("span"),e.textContent="Credits",t=w(),s=p("div"),s.innerHTML=`<p class="flex fai-center svelte-19w41p3">This is a personal project. Contact me directly on
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
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,_(e,"class","title"),_(s,"class","smaller-fs"),_(s,"id","contents")},m(i,r){k(i,e,r),k(i,t,r),k(i,s,r)},p:Z,i:Z,o:Z,d(i){i&&(S(e),S(t),S(s))}}}class vp extends _t{constructor(e){super(),dt(this,e,null,gp,lt,{})}}function Ko(n,e,t){const s=n.slice();return s[0]=e[t],s}function yp(n,e,t){const s=n.slice();return s[3]=e[t],s}function bp(n,e,t){const s=n.slice();return s[6]=e[t],s}function Qo(n,e,t){const s=n.slice();return s[9]=e[t],s}function Jo(n,e,t){const s=n.slice();return s[12]=e[t],s}function wp(n,e,t){const s=n.slice();return s[15]=e[t],s}function Cp(n){let e;return{c(){e=p("li"),e.textContent=`— ${Rt(n[15])} `},m(t,s){k(t,e,s)},p:Z,d(t){t&&S(e)}}}function Xo(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[12]} `},m(t,s){k(t,e,s)},p:Z,d(t){t&&S(e)}}}function Zo(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[9]}`},m(t,s){k(t,e,s)},p:Z,d(t){t&&S(e)}}}function Ep(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[6]}`},m(t,s){k(t,e,s)},p:Z,d(t){t&&S(e)}}}function Ip(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[3]}`},m(t,s){k(t,e,s)},p:Z,d(t){t&&S(e)}}}function el(n){let e;return{c(){e=p("li"),e.textContent=`— ${n[0]} Update`},m(t,s){k(t,e,s)},p:Z,d(t){t&&S(e)}}}function Sp(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v,E,T,M,P,y,I,L,D,O,G,X,ee,W,oe,ve,j,H,V,Ee,$,z,Y,N,U,B,ge,F,pe,te,J,Ie,ye,Ge,Be,We,Ze,Ke,le,wt=Ce(F_),we=[];for(let C=0;C<wt.length;C+=1)we[C]=Cp(wp(n,wt,C));let Se=Ce(Object.values(Ws)),Oe=[];for(let C=0;C<Se.length;C+=1)Oe[C]=Xo(Jo(n,Se,C));let Me=Ce(Object.values(Bs)),fe=[];for(let C=0;C<Me.length;C+=1)fe[C]=Zo(Qo(n,Me,C));let ke=Ce(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),ae=[];for(let C=0;C<12;C+=1)ae[C]=Ep(bp(n,ke,C));let x=Ce(["Black","Blue","Green","Purple","Red","White","Yellow"]),se=[];for(let C=0;C<7;C+=1)se[C]=Ip(yp(n,x,C));let Te=Ce(Object.values(xs).slice(0,-1)),de=[];for(let C=0;C<Te.length;C+=1)de[C]=el(Ko(n,Te,C));return{c(){e=p("span"),e.textContent="Game Help",t=w(),s=p("div"),i=p("p"),i.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece from\r
        Fantastic Frontier, which changes every day.`,r=w(),o=p("div"),o.innerHTML=`<span class="title">Color Guide</span> <div class="flex svelte-f1c9xj" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-f1c9xj" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-f1c9xj" id="partial">Partial
                <span class="bgInfo svelte-f1c9xj">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-f1c9xj" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-f1c9xj" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,l=w(),a=p("span"),a.textContent="Categories",c=w(),u=p("div"),f=p("div"),d=p("b"),d.textContent="Equipment",m=w(),g=p("span"),v=p("b"),v.textContent="Slot:",E=w(),T=p("ul");for(let C=0;C<we.length;C+=1)we[C].c();M=w(),P=p("span"),y=p("b"),y.textContent="Stats:",I=w(),L=p("ul");for(let C=0;C<Oe.length;C+=1)Oe[C].c();D=w(),O=p("div"),G=p("b"),G.textContent="Weapons",X=w(),ee=p("span"),ee.innerHTML="<b>Has Special:</b> <span>Whether the weapon has a Special Ability.</span>",W=w(),oe=p("span"),ve=p("b"),ve.textContent="Stat Intakes:",j=w(),H=p("ul");for(let C=0;C<fe.length;C+=1)fe[C].c();V=w(),Ee=p("div"),$=p("div"),z=p("b"),z.textContent="General",Y=w(),N=p("span"),N.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item can be purchased
                    at. &quot;Unpurchasable&quot; if it cannot be purchased, equivalent to
                    0 for the game&#39;s purposes.</span>`,U=w(),B=p("span"),ge=p("b"),ge.textContent="Colors:",F=w(),pe=p("ul");for(let C=0;C<12;C+=1)ae[C].c();te=w(),J=p("span"),Ie=p("b"),Ie.textContent="Outline:",ye=w(),Ge=p("ul");for(let C=0;C<7;C+=1)se[C].c();Be=w(),We=p("span"),Ze=p("b"),Ze.textContent="Release:",Ke=w(),le=p("ul");for(let C=0;C<de.length;C+=1)de[C].c();_(e,"class","title"),_(o,"class","flex fd-col fai-center"),_(a,"class","title"),_(d,"class","categoryTitle svelte-f1c9xj"),_(v,"class","svelte-f1c9xj"),_(T,"class","svelte-f1c9xj"),_(g,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(y,"class","svelte-f1c9xj"),_(L,"class","svelte-f1c9xj"),_(P,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(f,"class","flex fw fjc-center categories svelte-f1c9xj"),_(G,"class","categoryTitle svelte-f1c9xj"),_(ee,"class","flex fd-col smaller-fs limit-width svelte-f1c9xj"),_(ve,"class","svelte-f1c9xj"),_(H,"class","svelte-f1c9xj"),_(oe,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(O,"class","flex fw fjc-center categories svelte-f1c9xj"),_(u,"class","flex categoriesCont svelte-f1c9xj"),_(z,"class","categoryTitle svelte-f1c9xj"),_(N,"class","flex fd-col smaller-fs limit-width svelte-f1c9xj"),_(ge,"class","svelte-f1c9xj"),_(pe,"class","svelte-f1c9xj"),_(B,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(Ie,"class","svelte-f1c9xj"),_(Ge,"class","svelte-f1c9xj"),_(J,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_(Ze,"class","svelte-f1c9xj"),_(le,"class","svelte-f1c9xj"),_(We,"class","flex fd-col smaller-fs list svelte-f1c9xj"),_($,"class","flex fw fjc-center categories svelte-f1c9xj"),_(Ee,"class","flex categoriesCont svelte-f1c9xj"),_(s,"class","flex fd-col smaller-fs svelte-f1c9xj"),_(s,"id","contents")},m(C,ie){k(C,e,ie),k(C,t,ie),k(C,s,ie),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(u,f),h(f,d),h(f,m),h(f,g),h(g,v),h(g,E),h(g,T);for(let R=0;R<we.length;R+=1)we[R]&&we[R].m(T,null);h(f,M),h(f,P),h(P,y),h(P,I),h(P,L);for(let R=0;R<Oe.length;R+=1)Oe[R]&&Oe[R].m(L,null);h(u,D),h(u,O),h(O,G),h(O,X),h(O,ee),h(O,W),h(O,oe),h(oe,ve),h(oe,j),h(oe,H);for(let R=0;R<fe.length;R+=1)fe[R]&&fe[R].m(H,null);h(s,V),h(s,Ee),h(Ee,$),h($,z),h($,Y),h($,N),h($,U),h($,B),h(B,ge),h(B,F),h(B,pe);for(let R=0;R<12;R+=1)ae[R]&&ae[R].m(pe,null);h($,te),h($,J),h(J,Ie),h(J,ye),h(J,Ge);for(let R=0;R<7;R+=1)se[R]&&se[R].m(Ge,null);h($,Be),h($,We),h(We,Ze),h(We,Ke),h(We,le);for(let R=0;R<de.length;R+=1)de[R]&&de[R].m(le,null)},p(C,[ie]){if(ie&0){Se=Ce(Object.values(Ws));let R;for(R=0;R<Se.length;R+=1){const pt=Jo(C,Se,R);Oe[R]?Oe[R].p(pt,ie):(Oe[R]=Xo(pt),Oe[R].c(),Oe[R].m(L,null))}for(;R<Oe.length;R+=1)Oe[R].d(1);Oe.length=Se.length}if(ie&0){Me=Ce(Object.values(Bs));let R;for(R=0;R<Me.length;R+=1){const pt=Qo(C,Me,R);fe[R]?fe[R].p(pt,ie):(fe[R]=Zo(pt),fe[R].c(),fe[R].m(H,null))}for(;R<fe.length;R+=1)fe[R].d(1);fe.length=Me.length}if(ie&0){Te=Ce(Object.values(xs).slice(0,-1));let R;for(R=0;R<Te.length;R+=1){const pt=Ko(C,Te,R);de[R]?de[R].p(pt,ie):(de[R]=el(pt),de[R].c(),de[R].m(le,null))}for(;R<de.length;R+=1)de[R].d(1);de.length=Te.length}},i:Z,o:Z,d(C){C&&(S(e),S(t),S(s)),Je(we,C),Je(Oe,C),Je(fe,C),Je(ae,C),Je(se,C),Je(de,C)}}}class cc extends _t{constructor(e){super(),dt(this,e,null,Sp,lt,{})}}function Tp(n){let e,t,s;return{c(){e=p("span"),e.textContent="Frontierdle Policy",t=w(),s=p("div"),s.innerHTML=`<span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,_(e,"class","title"),_(s,"class","flex fd-col smaller-fs svelte-932r7h"),_(s,"id","contents")},m(i,r){k(i,e,r),k(i,t,r),k(i,s,r)},p:Z,i:Z,o:Z,d(i){i&&(S(e),S(t),S(s))}}}class kp extends _t{constructor(e){super(),dt(this,e,null,Tp,lt,{})}}function tl(n){let e,t,s;return{c(){e=p("iconify-icon"),xe(e,"icon","uil:exclamation"),xe(e,"id","unseen"),xe(e,"class","svelte-1aydprt")},m(i,r){k(i,e,r),s=!0},i(i){s||(i&&qe(()=>{s&&(t||(t=Re(e,Ot,{duration:150},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=Re(e,Ot,{duration:150},!1)),t.run(0)),s=!1},d(i){i&&S(e),i&&t&&t.end()}}}function Np(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v,E,T,M,P=!n[2]&&tl();return{c(){e=p("button"),e.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',t=w(),s=p("button"),s.innerHTML=`<a href="https://ko-fi.com/xt8ss" target="_blank" class="svelte-1aydprt">Support me
        <img src="misc/kofi-badge.png" alt="" class="svelte-1aydprt"/></a>`,i=w(),r=p("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=w(),l=p("button"),a=p("iconify-icon"),c=w(),u=p("span"),u.textContent="Changelog",f=w(),P&&P.c(),d=w(),m=p("button"),m.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',g=w(),v=p("span"),E=q(n[0]),_(e,"class","info p-1 svelte-1aydprt"),_(e,"id","credits"),_(s,"class","info p-1 svelte-1aydprt"),_(s,"id","donate"),_(r,"class","info p-1 svelte-1aydprt"),_(r,"id","help"),xe(a,"icon","octicon:log-16"),_(u,"class","tooltip"),_(u,"id","right"),_(l,"class","info svelte-1aydprt"),_(l,"id","changelog"),_(m,"class","info p-1 svelte-1aydprt"),_(m,"id","policy"),_(v,"class","info svelte-1aydprt"),_(v,"id","version")},m(y,I){k(y,e,I),k(y,t,I),k(y,s,I),k(y,i,I),k(y,r,I),k(y,o,I),k(y,l,I),h(l,a),h(l,c),h(l,u),h(l,f),P&&P.m(l,null),k(y,d,I),k(y,m,I),k(y,g,I),k(y,v,I),h(v,E),T||(M=[Le(e,"click",n[3]),Le(r,"click",n[4]),Le(l,"click",n[5]),Le(m,"click",n[6])],T=!0)},p(y,[I]){y[2]?P&&(mt(),ue(P,1,1,()=>{P=null}),gt()):P?I&4&&Q(P,1):(P=tl(),P.c(),Q(P,1),P.m(l,null)),I&1&&he(E,y[0])},i(y){Q(P)},o(y){ue(P)},d(y){y&&(S(e),S(t),S(s),S(i),S(r),S(o),S(l),S(d),S(m),S(g),S(v)),P&&P.d(),T=!1,ot(M)}}}function Rp(n,e,t){let s,i;me(n,tt,u=>t(1,s=u)),me(n,ss,u=>t(2,i=u));let{version:r}=e;const o=u=>{At(u),ne(tt,s.component=vp,s)},l=u=>{At(u),ne(tt,s.component=cc,s)},a=u=>{At(u),ne(tt,s.component=mp,s),ne(ss,i=!0,i)},c=u=>{At(u),ne(tt,s.component=kp,s)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,s,i,o,l,a,c]}class Dp extends _t{constructor(e){super(),dt(this,e,Rp,Np,lt,{version:0})}}function Ap(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v,E;return{c(){e=p("div"),t=p("span"),t.textContent="Choose your category",s=w(),i=p("button"),r=p("img"),l=w(),a=p("span"),a.textContent="Equipment",c=w(),u=p("button"),f=p("img"),m=w(),g=p("span"),g.textContent="Weapons",_(t,"id","title"),_(t,"class","svelte-jlt3e9"),Ue(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/7/7a/WhiteSpectralVanguardIcon.png")||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-jlt3e9"),i.disabled=n[0],_(i,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-jlt3e9"),Ye(i,"selected",n[1].mode=="equipment"),Ue(f.src,d="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/9/95/TheJadeTwin.png")||_(f,"src",d),_(f,"alt",""),_(f,"class","svelte-jlt3e9"),u.disabled=n[0],_(u,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-jlt3e9"),Ye(u,"selected",n[1].mode=="weapons"),_(e,"class","chooseModeCont ff-bg flex fd-row fw border-tp br-1 bs svelte-jlt3e9")},m(T,M){k(T,e,M),h(e,t),h(e,s),h(e,i),h(i,r),h(i,l),h(i,a),h(e,c),h(e,u),h(u,f),h(u,m),h(u,g),v||(E=[Le(i,"click",n[2]),Le(u,"click",n[3])],v=!0)},p(T,[M]){M&1&&(i.disabled=T[0]),M&2&&Ye(i,"selected",T[1].mode=="equipment"),M&1&&(u.disabled=T[0]),M&2&&Ye(u,"selected",T[1].mode=="weapons")},i:Z,o:Z,d(T){T&&S(e),v=!1,ot(E)}}}function Pp(n,e,t){let s,i;return me(n,sn,l=>t(0,s=l)),me(n,rt,l=>t(1,i=l)),[s,i,l=>{At(l),s||ne(rt,i.mode="equipment",i)},l=>{At(l),s||ne(rt,i.mode="weapons",i)}]}class Op extends _t{constructor(e){super(),dt(this,e,Pp,Ap,lt,{})}}const{document:ps}=pc;function nl(n,e,t){const s=n.slice();return s[68]=e[t],s}function sl(n,e,t){const s=n.slice();return s[68]=e[t],s}function il(n){let e;return{c(){e=p("link"),_(e,"rel","preload"),_(e,"as","image"),_(e,"href",n[68])},m(t,s){k(t,e,s)},p:Z,d(t){t&&S(e)}}}function rl(n){let e;return{c(){e=p("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,s){k(t,e,s)},d(t){t&&S(e)}}}function ol(n){let e,t;return{c(){e=p("img"),_(e,"class","background svelte-1vlfqbw"),Ue(e.src,t=n[68])||_(e,"src",t),_(e,"alt",""),Ye(e,"active",n[30].indexOf(n[68])==n[22])},m(s,i){k(s,e,i)},p(s,i){i[0]&1077936128&&Ye(e,"active",s[30].indexOf(s[68])==s[22])},d(s){s&&S(e)}}}function ll(n){let e,t,s=Math.floor(n[27][n[2]]*100)+"",i,r,o,l;return{c(){e=p("span"),t=q("Zoom: "),i=q(s),r=p("b"),r.textContent="%",_(e,"class","info svelte-1vlfqbw"),_(e,"id","zoomLevel")},m(a,c){k(a,e,c),h(e,t),h(e,i),h(e,r),l=!0},p(a,c){(!l||c[0]&4)&&s!==(s=Math.floor(a[27][a[2]]*100)+"")&&he(i,s)},i(a){l||(a&&qe(()=>{l&&(o||(o=Re(e,Ot,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=Re(e,Ot,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&S(e),a&&o&&o.end()}}}function al(n){let e,t,s,i,r,o,l,a,c=n[8].muted?"Muted":"Unmuted",u,f,d,m,g,v,E,T,M,P,y,I=js(n[19],n[20],n[21])+"",L,D,O,G,X,ee,W,oe,ve,j,H,V,Ee,$,z=n[3].includes("equipment")?"stat":" stat intake",Y,N,U,B,ge,F,pe,te,J,Ie,ye,Ge,Be,We,Ze,Ke,le,wt;X=new Op({}),F=new Z_({props:{size:"5",checked:n[4],disabled:n[5].chosenItems.length!=0}}),F.$on("toggle",n[44]);let we=!n[5].gameWin&&!n[5].gameOver&&cl(n),Se=(n[5].gameWin||n[5].gameOver)&&ul(n);function Oe(x){n[47](x)}let Me={};n[11]!==void 0&&(Me.dailyItemsData=n[11]),Ie=new Q_({props:Me}),at.push(()=>Gs(Ie,"dailyItemsData",Oe));let fe=n[12][n[3]]&&hl(n),ke=n[23].component&&n[23].complete&&fl(n),ae=n[23].component&&!n[23].complete&&dl(n);return{c(){e=p("main"),t=p("div"),s=p("div"),i=p("button"),r=p("iconify-icon"),l=w(),a=p("span"),u=q(c),f=w(),d=p("button"),m=p("img"),v=w(),E=p("span"),T=q(`Next item in...
                    `),M=p("br"),P=w(),y=new bl(!1),L=w(),D=p("div"),O=p("button"),O.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-1vlfqbw"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',G=w(),ht(X.$$.fragment),ee=w(),W=p("div"),oe=p("button"),ve=p("iconify-icon"),j=w(),H=p("span"),V=q(`No armor (more damage taken).
                    `),Ee=p("br"),$=q(`
                    No `),Y=q(z),N=q(` / avg.
                    cost / color clues.`),U=w(),B=p("span"),B.textContent="Nightmare Mode",ge=w(),ht(F.$$.fragment),pe=w(),we&&we.c(),te=w(),Se&&Se.c(),J=w(),ht(Ie.$$.fragment),Ge=w(),fe&&fe.c(),Be=w(),ke&&ke.c(),We=w(),ae&&ae.c(),Ze=bt(),xe(r,"icon",o="f7:speaker-"+(n[8].muted?"slash":"2")+"-fill"),xe(r,"class","svelte-1vlfqbw"),_(a,"class","tooltip"),_(a,"id","bottom"),_(i,"class","flex light-hover svelte-1vlfqbw"),_(s,"class","iconToggle ff-bg posrel border-tp br-1 bs svelte-1vlfqbw"),Ue(m.src,g="frontierdle.svg")||_(m,"src",g),_(m,"alt","Frontierdle"),_(m,"class","svelte-1vlfqbw"),y.a=null,_(E,"class","tooltip svelte-1vlfqbw"),_(E,"id","bottom"),_(d,"class","iconCont ff-bg posrel border-tp br-1 bs no-bg-change svelte-1vlfqbw"),_(O,"class","flex posrel light-hover svelte-1vlfqbw"),_(D,"class","iconToggle ff-bg border-tp br-1 bs svelte-1vlfqbw"),_(t,"class","upperMenu flex fai-center svelte-1vlfqbw"),xe(ve,"icon","eva:info-outline"),xe(ve,"id","info"),xe(ve,"class","svelte-1vlfqbw"),_(H,"class","tooltip svelte-1vlfqbw"),_(H,"id","bottom"),_(oe,"class","flex posrel no-bg-change"),_(W,"class","hardModeCont ff-bg flex fai-center border-tp br-1 bs svelte-1vlfqbw"),_(e,"class","flex fd-col fai-center posrel svelte-1vlfqbw")},m(x,se){k(x,e,se),h(e,t),h(t,s),h(s,i),h(i,r),h(i,l),h(i,a),h(a,u),h(t,f),h(t,d),h(d,m),h(d,v),h(d,E),h(E,T),h(E,M),h(E,P),y.m(I,E),h(t,L),h(t,D),h(D,O),h(e,G),st(X,e,null),h(e,ee),h(e,W),h(W,oe),h(oe,ve),h(oe,j),h(oe,H),h(H,V),h(H,Ee),h(H,$),h(H,Y),h(H,N),h(W,U),h(W,B),h(W,ge),st(F,W,null),h(e,pe),we&&we.m(e,null),h(e,te),Se&&Se.m(e,null),h(e,J),st(Ie,e,null),h(e,Ge),fe&&fe.m(e,null),k(x,Be,se),ke&&ke.m(x,se),k(x,We,se),ae&&ae.m(x,se),k(x,Ze,se),Ke=!0,le||(wt=[Le(i,"click",n[42]),Le(O,"click",n[43])],le=!0)},p(x,se){(!Ke||se[0]&256&&o!==(o="f7:speaker-"+(x[8].muted?"slash":"2")+"-fill"))&&xe(r,"icon",o),(!Ke||se[0]&256)&&c!==(c=x[8].muted?"Muted":"Unmuted")&&he(u,c),(!Ke||se[0]&3670016)&&I!==(I=js(x[19],x[20],x[21])+"")&&y.p(I),(!Ke||se[0]&8)&&z!==(z=x[3].includes("equipment")?"stat":" stat intake")&&he(Y,z);const Te={};se[0]&16&&(Te.checked=x[4]),se[0]&32&&(Te.disabled=x[5].chosenItems.length!=0),F.$set(Te),!x[5].gameWin&&!x[5].gameOver?we?(we.p(x,se),se[0]&32&&Q(we,1)):(we=cl(x),we.c(),Q(we,1),we.m(e,te)):we&&(mt(),ue(we,1,1,()=>{we=null}),gt()),x[5].gameWin||x[5].gameOver?Se?(Se.p(x,se),se[0]&32&&Q(Se,1)):(Se=ul(x),Se.c(),Q(Se,1),Se.m(e,J)):Se&&(mt(),ue(Se,1,1,()=>{Se=null}),gt());const de={};!ye&&se[0]&2048&&(ye=!0,de.dailyItemsData=x[11],Us(()=>ye=!1)),Ie.$set(de),x[12][x[3]]?fe?fe.p(x,se):(fe=hl(x),fe.c(),fe.m(e,null)):fe&&(fe.d(1),fe=null),x[23].component&&x[23].complete?ke?(ke.p(x,se),se[0]&8388608&&Q(ke,1)):(ke=fl(x),ke.c(),Q(ke,1),ke.m(We.parentNode,We)):ke&&(mt(),ue(ke,1,1,()=>{ke=null}),gt()),x[23].component&&!x[23].complete?ae?(ae.p(x,se),se[0]&8388608&&Q(ae,1)):(ae=dl(x),ae.c(),Q(ae,1),ae.m(Ze.parentNode,Ze)):ae&&(mt(),ue(ae,1,1,()=>{ae=null}),gt())},i(x){Ke||(Q(X.$$.fragment,x),Q(F.$$.fragment,x),Q(we),Q(Se),Q(Ie.$$.fragment,x),Q(ke),Q(ae),Ke=!0)},o(x){ue(X.$$.fragment,x),ue(F.$$.fragment,x),ue(we),ue(Se),ue(Ie.$$.fragment,x),ue(ke),ue(ae),Ke=!1},d(x){x&&(S(e),S(Be),S(We),S(Ze)),it(X),it(F),we&&we.d(),Se&&Se.d(),it(Ie),fe&&fe.d(),ke&&ke.d(x),ae&&ae.d(x),le=!1,ot(wt)}}}function cl(n){let e,t,s;function i(o){n[45](o)}let r={};return n[18][n[3]]!==void 0&&(r.gameNumber=n[18][n[3]]),e=new rp({props:r}),at.push(()=>Gs(e,"gameNumber",i)),{c(){ht(e.$$.fragment)},m(o,l){st(e,o,l),s=!0},p(o,l){const a={};!t&&l[0]&262152&&(t=!0,a.gameNumber=o[18][o[3]],Us(()=>t=!1)),e.$set(a)},i(o){s||(Q(e.$$.fragment,o),s=!0)},o(o){ue(e.$$.fragment,o),s=!1},d(o){it(e,o)}}}function ul(n){let e,t,s=n[5].gameWin?"Fantastic!":"Farewell...",i,r,o,l,a,c=n[5].gameWin?"won":"lost",u,f,d,m,g,v,E,T,M,P,y,I,L,D,O=n[11][n[3]].name+"",G,X,ee,W,oe,ve,j,H=js(n[19],n[20],n[21])+"",V,Ee,$,z,Y,N,U;function B(F){n[46](F)}let ge={};return n[18][n[3]]!==void 0&&(ge.gameNumber=n[18][n[3]]),$=new ap({props:ge}),at.push(()=>Gs($,"gameNumber",B)),N=new ac({}),{c(){e=p("div"),t=p("span"),i=q(s),r=w(),o=p("img"),a=q(`
                    You `),u=q(c),f=q("!"),d=w(),m=p("span"),m.textContent="Today's item was...",g=w(),v=p("div"),E=p("a"),T=p("img"),P=w(),y=p("iconify-icon"),L=w(),D=p("span"),G=q(O),X=w(),ee=p("span"),W=q(`Next item available in...
                    `),oe=p("br"),ve=w(),j=p("span"),Ee=w(),ht($.$$.fragment),Y=w(),ht(N.$$.fragment),Ue(o.src,l=n[5].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||_(o,"src",l),_(o,"id","gameFinishIcon"),_(o,"alt",""),_(o,"class","svelte-1vlfqbw"),_(t,"class","flex fai-center svelte-1vlfqbw"),_(t,"id","gameFinishMessage"),_(m,"class","smaller-fs"),Ue(T.src,M=zt+n[11][n[3]].image)||_(T,"src",M),_(T,"alt",""),_(T,"class","svelte-1vlfqbw"),xe(y,"icon","tabler:link"),xe(y,"class","svelte-1vlfqbw"),_(E,"class","flex fjc-center fai-center svelte-1vlfqbw"),_(E,"href",I=Sn+n[11][n[3]].link),_(E,"target","_blank"),_(v,"class","itemImg ff-item flex svelte-1vlfqbw"),_(v,"id","dailyItemImg"),_(D,"class","ff-item itemName svelte-1vlfqbw"),_(D,"id","dailyItemName"),_(j,"class","ff-item svelte-1vlfqbw"),_(j,"id","nextItemTime"),_(ee,"class","flex fd-col svelte-1vlfqbw"),_(ee,"id","nextItemCont"),_(e,"class","gameFinishCont ff-bg flex fd-col fai-center border-tp br-1 bs svelte-1vlfqbw")},m(F,pe){k(F,e,pe),h(e,t),h(t,i),h(t,r),h(t,o),h(t,a),h(t,u),h(t,f),h(e,d),h(e,m),h(e,g),h(e,v),h(v,E),h(E,T),h(E,P),h(E,y),h(e,L),h(e,D),h(D,G),h(e,X),h(e,ee),h(ee,W),h(ee,oe),h(ee,ve),h(ee,j),j.innerHTML=H,k(F,Ee,pe),st($,F,pe),k(F,Y,pe),st(N,F,pe),U=!0},p(F,pe){(!U||pe[0]&32)&&s!==(s=F[5].gameWin?"Fantastic!":"Farewell...")&&he(i,s),(!U||pe[0]&32&&!Ue(o.src,l=F[5].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&_(o,"src",l),(!U||pe[0]&32)&&c!==(c=F[5].gameWin?"won":"lost")&&he(u,c),(!U||pe[0]&2056&&!Ue(T.src,M=zt+F[11][F[3]].image))&&_(T,"src",M),(!U||pe[0]&2056&&I!==(I=Sn+F[11][F[3]].link))&&_(E,"href",I),(!U||pe[0]&2056)&&O!==(O=F[11][F[3]].name+"")&&he(G,O),(!U||pe[0]&3670016)&&H!==(H=js(F[19],F[20],F[21])+"")&&(j.innerHTML=H);const te={};!z&&pe[0]&262152&&(z=!0,te.gameNumber=F[18][F[3]],Us(()=>z=!1)),$.$set(te)},i(F){U||(F&&qe(()=>{U&&(V||(V=Re(e,Ot,{duration:150},!0)),V.run(1))}),Q($.$$.fragment,F),Q(N.$$.fragment,F),U=!0)},o(F){F&&(V||(V=Re(e,Ot,{duration:150},!1)),V.run(0)),ue($.$$.fragment,F),ue(N.$$.fragment,F),U=!1},d(F){F&&(S(e),S(Ee),S(Y)),F&&V&&V.end(),it($,F),it(N,F)}}}function hl(n){let e,t,s,i,r,o,l,a,c,u,f,d=n[12][n[3]].name+"",m;return{c(){e=p("div"),t=q(`Yesterday's item was...
                `),s=p("div"),i=p("a"),r=p("img"),l=w(),a=p("iconify-icon"),u=w(),f=p("span"),m=q(d),Ue(r.src,o=zt+n[12][n[3]].image)||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-1vlfqbw"),xe(a,"icon","tabler:link"),xe(a,"class","svelte-1vlfqbw"),_(i,"class","flex fjc-center fai-center svelte-1vlfqbw"),_(i,"href",c=Sn+n[12][n[3]].link),_(i,"target","_blank"),_(s,"class","itemImg ff-item flex svelte-1vlfqbw"),_(s,"id","previousItemImg"),_(f,"class","ff-item itemName svelte-1vlfqbw"),_(f,"id","previousItemName"),_(e,"class","previousItemCont ff-bg flex fd-col fai-center border-tp br-1 bs svelte-1vlfqbw")},m(g,v){k(g,e,v),h(e,t),h(e,s),h(s,i),h(i,r),h(i,l),h(i,a),h(e,u),h(e,f),h(f,m)},p(g,v){v[0]&4104&&!Ue(r.src,o=zt+g[12][g[3]].image)&&_(r,"src",o),v[0]&4104&&c!==(c=Sn+g[12][g[3]].link)&&_(i,"href",c),v[0]&4104&&d!==(d=g[12][g[3]].name+"")&&he(m,d)},d(g){g&&S(e)}}}function fl(n){let e,t,s,i,r;var o=n[23].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=gs(o,l())),{c(){e=p("div"),t&&ht(t.$$.fragment),_(e,"class","promptCont")},m(a,c){k(a,e,c),t&&st(t,e,null),n[48](e),s=!0,i||(r=Le(e,"click",n[49]),i=!0)},p(a,c){if(c[0]&8388608&&o!==(o=a[23].component)){if(t){mt();const u=t;ue(u.$$.fragment,1,0,()=>{it(u,1)}),gt()}o?(t=gs(o,l()),ht(t.$$.fragment),Q(t.$$.fragment,1),st(t,e,null)):t=null}},i(a){s||(t&&Q(t.$$.fragment,a),s=!0)},o(a){t&&ue(t.$$.fragment,a),s=!1},d(a){a&&S(e),t&&it(t),n[48](null),i=!1,r()}}}function dl(n){let e,t,s,i,r,o,l;var a=n[23].component;function c(u,f){return{props:{prompted:!0}}}return a&&(s=gs(a,c())),{c(){e=p("div"),t=p("div"),s&&ht(s.$$.fragment),_(t,"class","flex fd-col border-tp br-1 bs"),_(e,"class","promptCont")},m(u,f){k(u,e,f),h(e,t),s&&st(s,t,null),n[50](e),r=!0,o||(l=Le(e,"click",n[51]),o=!0)},p(u,f){if(f[0]&8388608&&a!==(a=u[23].component)){if(s){mt();const d=s;ue(d.$$.fragment,1,0,()=>{it(d,1)}),gt()}a?(s=gs(a,c()),ht(s.$$.fragment),Q(s.$$.fragment,1),st(s,t,null)):s=null}},i(u){r||(s&&Q(s.$$.fragment,u),u&&qe(()=>{r&&(i||(i=Re(t,ze,{duration:200},!0)),i.run(1))}),r=!0)},o(u){s&&ue(s.$$.fragment,u),u&&(i||(i=Re(t,ze,{duration:200},!1)),i.run(0)),r=!1},d(u){u&&S(e),s&&it(s),u&&i&&i.end(),n[50](null),o=!1,l()}}}function Mp(n){let e,t,s,i,r,o,l,a,c,u,f,d,m,g,v,E,T,M,P,y,I,L,D,O,G,X=dn(n[7])&&dn(n[6])&&n[9],ee,W,oe,ve;qe(n[37]);let j=Ce(n[30]),H=[];for(let N=0;N<j.length;N+=1)H[N]=il(sl(n,j,N));let V=n[23].component&&rl(),Ee=Ce(n[30]),$=[];for(let N=0;N<Ee.length;N+=1)$[N]=ol(nl(n,Ee,N));let z=n[10]&&ll(n);O=new Dp({props:{version:qi}});let Y=X&&al(n);return{c(){for(let N=0;N<H.length;N+=1)H[N].c();e=bt(),V&&V.c(),t=bt(),s=w(),i=p("div"),r=p("audio"),a=w(),c=p("audio"),d=w(),m=p("audio"),E=w(),T=p("audio"),y=w(),I=p("div");for(let N=0;N<$.length;N+=1)$[N].c();L=w(),z&&z.c(),D=w(),ht(O.$$.fragment),G=w(),Y&&Y.c(),ee=bt(),Ue(r.src,o="audio/lucky.mp3")||_(r,"src",o),r.muted=l=n[8].muted,Ue(c.src,u="audio/farewell.mp3")||_(c,"src",u),c.muted=f=n[8].muted,Ue(m.src,g="audio/heDidItAgain.mp3")||_(m,"src",g),m.muted=v=n[8].muted,Ue(T.src,M="audio/fishCatch.mp3")||_(T,"src",M),T.muted=P=n[8].muted,_(I,"class","backgrounds")},m(N,U){for(let B=0;B<H.length;B+=1)H[B]&&H[B].m(ps.head,null);h(ps.head,e),V&&V.m(ps.head,null),h(ps.head,t),k(N,s,U),k(N,i,U),h(i,r),n[38](r),h(i,a),h(i,c),n[39](c),h(i,d),h(i,m),n[40](m),h(i,E),h(i,T),n[41](T),k(N,y,U),k(N,I,U);for(let B=0;B<$.length;B+=1)$[B]&&$[B].m(I,null);k(N,L,U),z&&z.m(N,U),k(N,D,U),st(O,N,U),k(N,G,U),Y&&Y.m(N,U),k(N,ee,U),W=!0,oe||(ve=[Le(window,"storage",n[34]),Le(window,"wheel",n[35],{passive:!1}),Le(window,"keydown",n[36]),Le(window,"resize",n[37])],oe=!0)},p(N,U){if(U[0]&1073741824){j=Ce(N[30]);let B;for(B=0;B<j.length;B+=1){const ge=sl(N,j,B);H[B]?H[B].p(ge,U):(H[B]=il(ge),H[B].c(),H[B].m(e.parentNode,e))}for(;B<H.length;B+=1)H[B].d(1);H.length=j.length}if(N[23].component?V||(V=rl(),V.c(),V.m(t.parentNode,t)):V&&(V.d(1),V=null),(!W||U[0]&256&&l!==(l=N[8].muted))&&(r.muted=l),(!W||U[0]&256&&f!==(f=N[8].muted))&&(c.muted=f),(!W||U[0]&256&&v!==(v=N[8].muted))&&(m.muted=v),(!W||U[0]&256&&P!==(P=N[8].muted))&&(T.muted=P),U[0]&1077936128){Ee=Ce(N[30]);let B;for(B=0;B<Ee.length;B+=1){const ge=nl(N,Ee,B);$[B]?$[B].p(ge,U):($[B]=ol(ge),$[B].c(),$[B].m(I,null))}for(;B<$.length;B+=1)$[B].d(1);$.length=Ee.length}N[10]?z?(z.p(N,U),U[0]&1024&&Q(z,1)):(z=ll(N),z.c(),Q(z,1),z.m(D.parentNode,D)):z&&(mt(),ue(z,1,1,()=>{z=null}),gt()),U[0]&704&&(X=dn(N[7])&&dn(N[6])&&N[9]),X?Y?(Y.p(N,U),U[0]&704&&Q(Y,1)):(Y=al(N),Y.c(),Q(Y,1),Y.m(ee.parentNode,ee)):Y&&(mt(),ue(Y,1,1,()=>{Y=null}),gt())},i(N){W||(Q(z),Q(O.$$.fragment,N),Q(Y),W=!0)},o(N){ue(z),ue(O.$$.fragment,N),ue(Y),W=!1},d(N){N&&(S(s),S(i),S(y),S(I),S(L),S(D),S(G),S(ee)),Je(H,N),S(e),V&&V.d(N),S(t),n[38](null),n[39](null),n[40](null),n[41](null),Je($,N),z&&z.d(N),it(O,N),Y&&Y.d(N),oe=!1,ot(ve)}}}let qi="v1.1.0";function js(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function Lp(n,e,t){let s,i,r,o,l,a,c,u,f,d,m,g,v,E;me(n,Ct,b=>t(32,i=b)),me(n,nn,b=>t(4,r=b)),me(n,qs,b=>t(33,o=b)),me(n,ct,b=>t(5,l=b)),me(n,wo,b=>t(6,a=b)),me(n,Wi,b=>t(7,c=b)),me(n,rt,b=>t(8,u=b)),me(n,ss,b=>t(57,f=b)),me(n,tt,b=>t(23,d=b)),me(n,Bi,b=>t(58,m=b)),me(n,Tn,b=>t(24,g=b)),me(n,kn,b=>t(25,v=b)),me(n,sn,b=>t(26,E=b));let T,M,P=!1,y=7,I=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],L=!1,D,O,G={},X={},ee=["version","builds","changelogSeen"],W,oe,ve,j,H;Tc(()=>{t(9,P=!0),m||(ne(Bi,m=!0,m),ne(tt,d.component=cc,d))});function V(){D=setTimeout(()=>{t(10,L=!1)},750)}function Ee(){clearTimeout(D),t(10,L=!0),V()}let $={equipment:19816,weapons:19818},z,Y,N=58,U=58,B=58,ge;function F(){let b=0;clearInterval(ge),z=Date.now()/1e3/60/60/24+b,t(18,Y={equipment:Math.floor(z)-$.equipment,weapons:Math.floor(z)-$.weapons});let et=u.mode;l.gameNum!=Y[et]+1&&(ne(ct,l=tn.currentGameData[et],l),ne(ct,l.gameNum=Y[et]+1,l)),v_(y_(g_(x_))).then(kt=>{ne(wo,a={equipment:kt.val().rng_equipment_list[Y.equipment],weapons:kt.val().rng_weapons_list[Y.weapons]},a),t(31,G={equipment:kt.val().rng_equipment_list[Y.equipment-1],weapons:kt.val().rng_weapons_list[Y.weapons-1]})}),ge=setInterval(()=>{let kt=Date.now(),Pn=(Math.floor(z)+1-b)*24*60*60*1e3-kt;t(19,N=Math.floor(Pn/1e3/60/60)),t(20,U=Math.floor(Pn%(1e3*60*60)/(1e3*60))),t(21,B=Math.floor(Pn%(1e3*60)/1e3)),N==0&&U==0&&B==0&&(ne(ct,l=tn.currentGameData,l),setTimeout(F,1e3))},1e3)}F();let pe=["equipment","weapons"];for(let b of pe)fetch(`https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/item-data/${b}Data.json`).then(async et=>{if(et.status!=200){console.error(`Failed to fetch ${b}!
Status: ${et.status}`);return}let kt=await et.json();ne(Wi,c[b]=kt.sort((Er,Pn)=>Er.name.toLowerCase().localeCompare(Pn.name.toLowerCase())),c)});let te=[],J=[],Ie,ye,Ge=9;for(let b=0;b<Ge;b++)te.push(`backgrounds/BG${b}.jpg`);function Be(b){ye=Math.floor(Math.random()*b.length)}Be(te);function We(){t(22,Ie=ye),J.push(ye)}We(),function b(){setTimeout(()=>{if(Be(te),!J.length)We();else if(J.length>3&&(J=J.slice(1)),!J.includes(ye))We();else{let et=[...Array(Ge).keys()].filter(kt=>!J.includes(kt));Be(et),We()}document.visibilityState=="visible"&&b()},45e3)}(),localStorage.getItem("fd-version")!=qi&&(ne(ss,f=!1,f),localStorage.setItem("fd-version",qi));function Ze(){ne(ct,l.gameWin=!0,l),ne(Ct,i.gamesPlayed++,i),ne(Ct,i.gamesWon++,i),ne(Ct,i.streak++,i),ne(Ct,i.winInfo[l.chosenItems.length]++,i),(l.chosenItems.length===1?H:i.streak>=3?j:oe).play()}function Ke(){ne(ct,l.gameOver=!0,l),ne(Ct,i.gamesPlayed++,i),ne(Ct,i.streak=0,i),ve.play()}const le=b=>{ee.includes(b.key)?localStorage.setItem(b.key,b.oldValue):b.key=="fd-currentGameData"?b.url.includes("ls=true")?ne(Tn,g=JSON.parse(b.newValue),g):localStorage.setItem("fd-currentGameData",JSON.stringify(g)):b.key=="fd-settings"?b.url.includes("ls=true")?ne(rt,u=JSON.parse(b.newValue),u):localStorage.setItem("fd-settings",JSON.stringify(u)):b.key=="fd-playerStats"&&(b.url.includes("ls=true")?ne(kn,v=JSON.parse(b.newValue),v):localStorage.setItem("fd-playerStats",JSON.stringify(v)))},wt=b=>{let et=b.wheelDeltaY;if(b.ctrlKey){if(b.preventDefault(),I[y]==.2&&et<0||I[y]==5&&et>0)return;et>0?t(2,y++,y):t(2,y--,y),Ee()}},we=b=>{let et=["Enter"," ","Escape"];b.ctrlKey&&(b.key=="-"||b.key=="+"||b.code=="Equal"||b.key=="0")&&(b.preventDefault(),(b.key=="+"||b.code=="Equal")&&I[y]!=5?t(2,y++,y):b.key=="-"&&I[y]!=.2?t(2,y--,y):b.key=="0"&&I[y]!=1&&t(2,y=7),Ee()),d.component&&W&&(!b.ctrlKey&&!b.shiftKey&&!b.altKey&&et.includes(b.key)||b.key=="Tab")&&ne(tt,d.component=null,d)};function Se(){t(0,T=window.outerHeight),t(1,M=window.outerWidth)}function Oe(b){at[b?"unshift":"push"](()=>{oe=b,t(14,oe)})}function Me(b){at[b?"unshift":"push"](()=>{ve=b,t(15,ve)})}function fe(b){at[b?"unshift":"push"](()=>{j=b,t(16,j)})}function ke(b){at[b?"unshift":"push"](()=>{H=b,t(17,H)})}const ae=b=>{At(b),!E&&ne(rt,u.muted=!u.muted,u)},x=b=>{At(b),l.gameWin||l.gameOver?(location.hash="playerStats",xi()):(ne(tt,d.complete=!0,d),ne(tt,d.component=ac,d))},se=b=>{if(l.chosenItems.length){b.detail.checked=!b.detail.checked;return}ne(nn,r=b.detail.checked,r)};function Te(b){n.$$.not_equal(Y[s],b)&&(Y[s]=b,t(18,Y))}function de(b){n.$$.not_equal(Y[s],b)&&(Y[s]=b,t(18,Y))}function C(b){O=b,t(11,O),t(7,c),t(6,a),t(31,G)}function ie(b){at[b?"unshift":"push"](()=>{W=b,t(13,W)})}const R=b=>{W.children[0].contains(b.target)||(ne(tt,d.component=null,d),ne(tt,d.complete=!1,d))};function pt(b){at[b?"unshift":"push"](()=>{W=b,t(13,W)})}const uc=b=>{W.children[0].contains(b.target)||(ne(tt,d.component=null,d),ne(tt,d.complete=!1,d))};return n.$$.update=()=>{if(n.$$.dirty[0]&7&&(T||M)){let b=M>T;document.documentElement.style.fontSize=`${(b?.75:M/T*.8)*I[y]}vh`}n.$$.dirty[0]&256&&t(3,s=u.mode),n.$$.dirty[0]&192|n.$$.dirty[1]&1&&dn(c)&&dn(a)&&(t(11,O={equipment:c.equipment.find(b=>b.name==a.equipment),weapons:c.weapons.find(b=>b.name==a.weapons)}),t(12,X={equipment:c.equipment.find(b=>b.name==G.equipment),weapons:c.weapons.find(b=>b.name==G.weapons)})),n.$$.dirty[0]&16&&ne(qs,o=r?6:7,o),n.$$.dirty[0]&104|n.$$.dirty[1]&4&&l.chosenItems.length&&!l.gameWin&&!l.gameOver&&(l.chosenItems[l.chosenItems.length-1].name==a[s]?Ze():l.chosenItems.length==o&&Ke()),n.$$.dirty[1]&2&&i.streak>i.maxStreak&&ne(Ct,i.maxStreak=i.streak,i)},[T,M,y,s,r,l,a,c,u,P,L,O,X,W,oe,ve,j,H,Y,N,U,B,Ie,d,g,v,E,I,ee,Ee,te,G,i,o,le,wt,we,Se,Oe,Me,fe,ke,ae,x,se,Te,de,C,ie,R,pt,uc]}class Fp extends _t{constructor(e){super(),dt(this,e,Lp,Mp,lt,{},null,[-1,-1,-1])}}new Fp({target:document.body});
