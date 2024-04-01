var $a=Object.defineProperty;var Ga=(n,e,t)=>e in n?$a(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Tt=(n,e,t)=>(Ga(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function se(){}const Pi=n=>n;function qo(n){return n()}function fr(){return Object.create(null)}function Qe(n){n.forEach(qo)}function Vt(n){return typeof n=="function"}function Je(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ni;function Ge(n,e){return n===e?!0:(ni||(ni=document.createElement("a")),ni.href=e,n===ni.href)}function za(n){return Object.keys(n).length===0}function ja(n,...e){if(n==null){for(const i of e)i(void 0);return se}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ke(n,e,t){n.$$.on_destroy.push(ja(e,t))}function he(n,e,t){return n.set(t),e}function Va(n){return n&&Vt(n.destroy)?n.destroy:se}const Yo=typeof window<"u";let Rs=Yo?()=>window.performance.now():()=>Date.now(),Ds=Yo?n=>requestAnimationFrame(n):se;const sn=new Set;function Ko(n){sn.forEach(e=>{e.c(n)||(sn.delete(e),e.f())}),sn.size!==0&&Ds(Ko)}function As(n){let e;return sn.size===0&&Ds(Ko),{promise:new Promise(t=>{sn.add(e={c:n,f:t})}),abort(){sn.delete(e)}}}const qa=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function f(n,e){n.appendChild(e)}function Qo(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Ya(n){const e=g("style");return e.textContent="/* empty */",Ka(Qo(n),e),e.sheet}function Ka(n,e){return f(n.head||n,e),e.sheet}function k(n,e,t){n.insertBefore(e,t||null)}function I(n){n.parentNode&&n.parentNode.removeChild(n)}function qe(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function g(n){return document.createElement(n)}function Qa(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function G(n){return document.createTextNode(n)}function w(){return G(" ")}function Nt(){return G("")}function Ae(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function We(n,e,t){const i=e.toLowerCase();i in n?n[i]=typeof n[i]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function Ja(n){return Array.from(n.childNodes)}function me(n,e){e=""+e,n.data!==e&&(n.data=e)}function un(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}function mt(n,e,t){n.classList.toggle(e,!!t)}function Jo(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}class Xo{constructor(e=!1){Tt(this,"is_svg",!1);Tt(this,"e");Tt(this,"n");Tt(this,"t");Tt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,i=null){this.e||(this.is_svg?this.e=Qa(t.nodeName):this.e=g(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)k(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(I)}}function li(n,e){return new n(e)}const ai=new Map;let ci=0;function Xa(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Za(n,e){const t={stylesheet:Ya(e),rules:{}};return ai.set(n,t),t}function ui(n,e,t,i,s,r,o,l=0){const a=16.666/i;let c=`{
`;for(let b=0;b<=1;b+=a){const D=e+(t-e)*r(b);c+=b*100+`%{${o(D,1-D)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${Xa(u)}_${l}`,d=Qo(n),{stylesheet:p,rules:m}=ai.get(d)||Za(d,n);m[h]||(m[h]=!0,p.insertRule(`@keyframes ${h} ${u}`,p.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${h} ${i}ms linear ${s}ms 1 both`,ci+=1,h}function Ps(n,e){const t=(n.style.animation||"").split(", "),i=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-i.length;s&&(n.style.animation=i.join(", "),ci-=s,ci||ec())}function ec(){Ds(()=>{ci||(ai.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&I(e)}),ai.clear())})}function tc(n,e,t,i){if(!e)return se;const s=n.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return se;const{delay:r=0,duration:o=300,easing:l=Pi,start:a=Rs()+r,end:c=a+o,tick:u=se,css:h}=t(n,{from:e,to:s},i);let d=!0,p=!1,m;function v(){h&&(m=ui(n,0,1,o,r,l,h)),r||(p=!0)}function b(){h&&Ps(n,m),d=!1}return As(D=>{if(!p&&D>=a&&(p=!0),p&&D>=c&&(u(1,0),b()),!d)return!1;if(p){const F=D-a,C=0+1*l(F/o);u(C,1-C)}return!0}),v(),u(0,1),b}function nc(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,s=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,ic(n,s)}}function ic(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform;n.style.transform=`${s} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Pn;function Tn(n){Pn=n}function Zo(){if(!Pn)throw new Error("Function called outside component initialization");return Pn}function sc(n){Zo().$$.on_mount.push(n)}function rc(){const n=Zo();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=Jo(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const Xt=[],Ze=[];let rn=[];const ss=[],oc=Promise.resolve();let rs=!1;function lc(){rs||(rs=!0,oc.then(el))}function Pe(n){rn.push(n)}function Oi(n){ss.push(n)}const Vi=new Set;let Kt=0;function el(){if(Kt!==0)return;const n=Pn;do{try{for(;Kt<Xt.length;){const e=Xt[Kt];Kt++,Tn(e),ac(e.$$)}}catch(e){throw Xt.length=0,Kt=0,e}for(Tn(null),Xt.length=0,Kt=0;Ze.length;)Ze.pop()();for(let e=0;e<rn.length;e+=1){const t=rn[e];Vi.has(t)||(Vi.add(t),t())}rn.length=0}while(Xt.length);for(;ss.length;)ss.pop()();rs=!1,Vi.clear(),Tn(n)}function ac(n){if(n.fragment!==null){n.update(),Qe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Pe)}}function cc(n){const e=[],t=[];rn.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),rn=e}let Cn;function tl(){return Cn||(Cn=Promise.resolve(),Cn.then(()=>{Cn=null})),Cn}function kn(n,e,t){n.dispatchEvent(Jo(`${e?"intro":"outro"}${t}`))}const oi=new Set;let pt;function lt(){pt={r:0,c:[],p:pt}}function at(){pt.r||Qe(pt.c),pt=pt.p}function J(n,e){n&&n.i&&(oi.delete(n),n.i(e))}function de(n,e,t,i){if(n&&n.o){if(oi.has(n))return;oi.add(n),pt.c.push(()=>{oi.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}const nl={duration:0};function uc(n,e,t){const i={direction:"out"};let s=e(n,t,i),r=!0,o;const l=pt;l.r+=1;let a;function c(){const{delay:u=0,duration:h=300,easing:d=Pi,tick:p=se,css:m}=s||nl;m&&(o=ui(n,1,0,h,u,d,m));const v=Rs()+u,b=v+h;Pe(()=>kn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),As(D=>{if(r){if(D>=b)return p(0,1),kn(n,!1,"end"),--l.r||Qe(l.c),!1;if(D>=v){const F=d((D-v)/h);p(1-F,F)}}return r})}return Vt(s)?tl().then(()=>{s=s(i),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&s.tick&&s.tick(1,0),r&&(o&&Ps(n,o),r=!1)}}}function we(n,e,t,i){let r=e(n,t,{direction:"both"}),o=i?0:1,l=null,a=null,c=null,u;function h(){c&&Ps(n,c)}function d(m,v){const b=m.b-o;return v*=Math.abs(b),{a:o,b:m.b,d:b,duration:v,start:m.start,end:m.start+v,group:m.group}}function p(m){const{delay:v=0,duration:b=300,easing:D=Pi,tick:F=se,css:C}=r||nl,S={start:Rs()+v,b:m};m||(S.group=pt,pt.r+=1),"inert"in n&&(m?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=S:(C&&(h(),c=ui(n,o,m,b,v,D,C)),m&&F(0,1),l=d(S,b),Pe(()=>kn(n,m,"start")),As(T=>{if(a&&T>a.start&&(l=d(a,b),a=null,kn(n,l.b,"start"),C&&(h(),c=ui(n,o,l.b,l.duration,0,D,r.css))),l){if(T>=l.end)F(o=l.b,1-o),kn(n,l.b,"end"),a||(l.b?h():--l.group.r||Qe(l.group.c)),l=null;else if(T>=l.start){const q=T-l.start;o=l.a+l.d*D(q/l.duration),F(o,1-o)}}return!!(l||a)}))}return{run(m){Vt(r)?tl().then(()=>{r=r({direction:m?"in":"out"}),p(m)}):p(m)},end(){h(),l=a=null}}}function ye(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function hc(n,e){de(n,1,1,()=>{e.delete(n.key)})}function fc(n,e){n.f(),hc(n,e)}function dc(n,e,t,i,s,r,o,l,a,c,u,h){let d=n.length,p=r.length,m=d;const v={};for(;m--;)v[n[m].key]=m;const b=[],D=new Map,F=new Map,C=[];for(m=p;m--;){const R=h(s,r,m),x=t(R);let X=o.get(x);X?i&&C.push(()=>X.p(R,e)):(X=c(x,R),X.c()),D.set(x,b[m]=X),x in v&&F.set(x,Math.abs(m-v[x]))}const S=new Set,T=new Set;function q(R){J(R,1),R.m(l,u),o.set(R.key,R),u=R.first,p--}for(;d&&p;){const R=b[p-1],x=n[d-1],X=R.key,Y=x.key;R===x?(u=R.first,d--,p--):D.has(Y)?!o.has(X)||S.has(X)?q(R):T.has(Y)?d--:F.get(X)>F.get(Y)?(T.add(X),q(R)):(S.add(Y),d--):(a(x,o),d--)}for(;d--;){const R=n[d];D.has(R.key)||a(R,o)}for(;p;)q(b[p-1]);return Qe(C),b}function Mi(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function ct(n){n&&n.c()}function tt(n,e,t){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),Pe(()=>{const r=n.$$.on_mount.map(qo).filter(Vt);n.$$.on_destroy?n.$$.on_destroy.push(...r):Qe(r),n.$$.on_mount=[]}),s.forEach(Pe)}function nt(n,e){const t=n.$$;t.fragment!==null&&(cc(t.after_update),Qe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function _c(n,e){n.$$.dirty[0]===-1&&(Xt.push(n),lc(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function it(n,e,t,i,s,r,o=null,l=[-1]){const a=Pn;Tn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:se,not_equal:s,bound:fr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:fr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&_c(n,h)),d}):[],c.update(),u=!0,Qe(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const h=Ja(e.target);c.fragment&&c.fragment.l(h),h.forEach(I)}else c.fragment&&c.fragment.c();e.intro&&J(n.$$.fragment),tt(n,e.target,e.anchor),el()}Tn(a)}class st{constructor(){Tt(this,"$$");Tt(this,"$$set")}$destroy(){nt(this,1),this.$destroy=se}$on(e,t){if(!Vt(t))return se;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!za(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pc="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pc);function il(n){const e=n-1;return e*e*e+1}function bt(n,{delay:e=0,duration:t=400,easing:i=Pi}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}function Le(n,{delay:e=0,duration:t=400,easing:i=il,start:s=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-s,u=l*(1-r);return{delay:e,duration:t,easing:i,css:(h,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${l-u*d}
		`}}const Qt=[];function wt(n,e=se){let t;const i=new Set;function s(l){if(Je(n,l)&&(n=l,t)){const a=!Qt.length;for(const c of i)c[1](),Qt.push(c,n);if(a){for(let c=0;c<Qt.length;c+=2)Qt[c][0](Qt[c+1]);Qt.length=0}}}function r(l){s(l(n))}function o(l,a=se){const c=[l,a];return i.add(c),i.size===1&&(t=e(s,r)||se),l(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}var dr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(n,e){if(!n)throw mn(e)},mn=function(n){return new Error("Firebase Database ("+sl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},mc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Os={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,a=s+2<n.length,c=a?n[s+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,p=c&63;a||(p=64,o||(d=64)),i.push(t[u],t[h],t[d],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||c==null||h==null)throw new gc;const d=r<<2|l>>4;if(i.push(d),c!==64){const p=l<<4&240|c>>2;if(i.push(p),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ol=function(n){const e=rl(n);return Os.encodeByteArray(e,!0)},hi=function(n){return ol(n).replace(/\./g,"")},os=function(n){try{return Os.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n){return ll(void 0,n)}function ll(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!yc(t)||(n[t]=ll(n[t],e[t]));return n}function yc(n){return n!=="__proto__"}/**
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
 */function bc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cc=()=>bc().__FIREBASE_DEFAULTS__,wc=()=>{if(typeof process>"u"||typeof dr>"u")return;const n=dr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ec=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&os(n[1]);return e&&JSON.parse(e)},al=()=>{try{return Cc()||wc()||Ec()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ic=n=>{var e,t;return(t=(e=al())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Sc=n=>{const e=Ic(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},cl=()=>{var n;return(n=al())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Tc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hi(JSON.stringify(t)),hi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ul(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kc())}function Nc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hl(){return sl.NODE_ADMIN===!0}function Rc(){try{return typeof indexedDB=="object"}catch{return!1}}function Dc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="FirebaseError";class jn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ac,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fl.prototype.create)}}class fl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Pc(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new jn(s,l,i)}}function Pc(n,e){return n.replace(Oc,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Oc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n){return JSON.parse(n)}function Oe(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=On(os(r[0])||""),t=On(os(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Mc=function(n){const e=dl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Lc=function(n){const e=dl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function hn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function _r(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function fi(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ls(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(pr(r)&&pr(o)){if(!ls(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function pr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(s<<5|s>>>27)+c+a+u+i[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function _l(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,N(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Li=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function gn(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Bc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ms;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uc(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Hc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hc(n){return n===Wt?void 0:n}function Uc(n){return n.instantiationMode==="EAGER"}/**
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
 */class $c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ee||(Ee={}));const Gc={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},zc=Ee.INFO,jc={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Vc=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=jc[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pl{constructor(e){this.name=e,this._logLevel=zc,this._logHandler=Vc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const qc=(n,e)=>e.some(t=>n instanceof t);let mr,gr;function Yc(){return mr||(mr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kc(){return gr||(gr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ml=new WeakMap,as=new WeakMap,gl=new WeakMap,qi=new WeakMap,Ls=new WeakMap;function Qc(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Rt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ml.set(t,n)}).catch(()=>{}),Ls.set(e,n),e}function Jc(n){if(as.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});as.set(n,e)}let cs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return as.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xc(n){cs=n(cs)}function Zc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Yi(this),e,...t);return gl.set(i,e.sort?e.sort():[e]),Rt(i)}:Kc().includes(n)?function(...e){return n.apply(Yi(this),e),Rt(ml.get(this))}:function(...e){return Rt(n.apply(Yi(this),e))}}function eu(n){return typeof n=="function"?Zc(n):(n instanceof IDBTransaction&&Jc(n),qc(n,Yc())?new Proxy(n,cs):n)}function Rt(n){if(n instanceof IDBRequest)return Qc(n);if(qi.has(n))return qi.get(n);const e=eu(n);return e!==n&&(qi.set(n,e),Ls.set(e,n)),e}const Yi=n=>Ls.get(n);function tu(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),l=Rt(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Rt(o.result),a.oldVersion,a.newVersion,Rt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const nu=["get","getKey","getAll","getAllKeys","count"],iu=["put","add","delete","clear"],Ki=new Map;function vr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ki.get(e))return Ki.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=iu.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||nu.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),s&&a.done]))[0]};return Ki.set(e,r),r}Xc(n=>({...n,get:(e,t,i)=>vr(e,t)||n.get(e,t,i),has:(e,t)=>!!vr(e,t)||n.has(e,t)}));/**
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
 */class su{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ru(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ru(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const us="@firebase/app",yr="0.9.29";/**
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
 */const $t=new pl("@firebase/app"),ou="@firebase/app-compat",lu="@firebase/analytics-compat",au="@firebase/analytics",cu="@firebase/app-check-compat",uu="@firebase/app-check",hu="@firebase/auth",fu="@firebase/auth-compat",du="@firebase/database",_u="@firebase/database-compat",pu="@firebase/functions",mu="@firebase/functions-compat",gu="@firebase/installations",vu="@firebase/installations-compat",yu="@firebase/messaging",bu="@firebase/messaging-compat",Cu="@firebase/performance",wu="@firebase/performance-compat",Eu="@firebase/remote-config",Iu="@firebase/remote-config-compat",Su="@firebase/storage",Tu="@firebase/storage-compat",ku="@firebase/firestore",Nu="@firebase/firestore-compat",Ru="firebase",Du="10.9.0";/**
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
 */const hs="[DEFAULT]",Au={[us]:"fire-core",[ou]:"fire-core-compat",[au]:"fire-analytics",[lu]:"fire-analytics-compat",[uu]:"fire-app-check",[cu]:"fire-app-check-compat",[hu]:"fire-auth",[fu]:"fire-auth-compat",[du]:"fire-rtdb",[_u]:"fire-rtdb-compat",[pu]:"fire-fn",[mu]:"fire-fn-compat",[gu]:"fire-iid",[vu]:"fire-iid-compat",[yu]:"fire-fcm",[bu]:"fire-fcm-compat",[Cu]:"fire-perf",[wu]:"fire-perf-compat",[Eu]:"fire-rc",[Iu]:"fire-rc-compat",[Su]:"fire-gcs",[Tu]:"fire-gcs-compat",[ku]:"fire-fst",[Nu]:"fire-fst-compat","fire-js":"fire-js",[Ru]:"fire-js-all"};/**
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
 */const di=new Map,fs=new Map;function Pu(n,e){try{n.container.addComponent(e)}catch(t){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _i(n){const e=n.name;if(fs.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;fs.set(e,n);for(const t of di.values())Pu(t,n);return!0}function Ou(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Mu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new fl("app","Firebase",Mu);/**
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
 */class Lu{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Fu=Du;function vl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:hs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(t||(t=cl()),!t)throw Dt.create("no-options");const r=di.get(s);if(r){if(ls(t,r.options)&&ls(i,r.config))return r;throw Dt.create("duplicate-app",{appName:s})}const o=new $c(s);for(const a of fs.values())o.addComponent(a);const l=new Lu(t,i,o);return di.set(s,l),l}function xu(n=hs){const e=di.get(n);if(!e&&n===hs&&cl())return vl();if(!e)throw Dt.create("no-app",{appName:n});return e}function on(n,e,t){var i;let s=(i=Au[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(l.join(" "));return}_i(new Mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Wu="firebase-heartbeat-database",Bu=1,Ln="firebase-heartbeat-store";let Qi=null;function yl(){return Qi||(Qi=tu(Wu,Bu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ln)}catch(t){console.warn(t)}}}}).catch(n=>{throw Dt.create("idb-open",{originalErrorMessage:n.message})})),Qi}async function Hu(n){try{const t=(await yl()).transaction(Ln),i=await t.objectStore(Ln).get(bl(n));return await t.done,i}catch(e){if(e instanceof jn)$t.warn(e.message);else{const t=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(t.message)}}}async function br(n,e){try{const i=(await yl()).transaction(Ln,"readwrite");await i.objectStore(Ln).put(e,bl(n)),await i.done}catch(t){if(t instanceof jn)$t.warn(t.message);else{const i=Dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$t.warn(i.message)}}}function bl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Uu=1024,$u=30*24*60*60*1e3;class Gu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ju(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=$u}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cr(),{heartbeatsToSend:i,unsentEntries:s}=zu(this._heartbeatsCache.heartbeats),r=hi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Cr(){return new Date().toISOString().substring(0,10)}function zu(n,e=Uu){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),wr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ju{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rc()?Dc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Hu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return br(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return br(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wr(n){return hi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Vu(n){_i(new Mn("platform-logger",e=>new su(e),"PRIVATE")),_i(new Mn("heartbeat",e=>new Gu(e),"PRIVATE")),on(us,yr,n),on(us,yr,"esm2017"),on("fire-js","")}Vu("");var qu="firebase",Yu="10.9.0";/**
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
 */on(qu,Yu,"app");var Er={};const Ir="@firebase/database",Sr="1.0.3";/**
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
 */let Cl="";function Ku(n){Cl=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:On(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qu(e)}}catch{}return new Ju},Ht=wl("localStorage"),ds=wl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new pl("@firebase/database"),Xu=function(){let n=1;return function(){return n++}}(),El=function(n){const e=Wc(n),t=new xc;t.update(e);const i=t.digest();return Os.encodeByteArray(i)},Vn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Vn.apply(null,i):typeof i=="object"?e+=Oe(i):e+=i,e+=" "}return e};let Ut=null,Tr=!0;const Zu=function(n,e){N(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ln.logLevel=Ee.VERBOSE,Ut=ln.log.bind(ln),e&&ds.set("logging_enabled",!0)):typeof n=="function"?Ut=n:(Ut=null,ds.remove("logging_enabled"))},$e=function(...n){if(Tr===!0&&(Tr=!1,Ut===null&&ds.get("logging_enabled")===!0&&Zu(!0)),Ut){const e=Vn.apply(null,n);Ut(e)}},qn=function(n){return function(...e){$e(n,...e)}},_s=function(...n){const e="FIREBASE INTERNAL ERROR: "+Vn(...n);ln.error(e)},Ct=function(...n){const e=`FIREBASE FATAL ERROR: ${Vn(...n)}`;throw ln.error(e),new Error(e)},et=function(...n){const e="FIREBASE WARNING: "+Vn(...n);ln.warn(e)},eh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Il=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},th=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},fn="[MIN_NAME]",Gt="[MAX_NAME]",vn=function(n,e){if(n===e)return 0;if(n===fn||e===Gt)return-1;if(e===fn||n===Gt)return 1;{const t=kr(n),i=kr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},nh=function(n,e){return n===e?0:n<e?-1:1},wn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Oe(e))},Fs=function(n){if(typeof n!="object"||n===null)return Oe(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Oe(e[i]),t+=":",t+=Fs(n[e[i]]);return t+="}",t},Sl=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ke(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Tl=function(n){N(!Il(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,a;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ih=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const oh=new RegExp("^-?(0*)\\d{1,10}$"),lh=-2147483648,ah=2147483647,kr=function(n){if(oh.test(n)){const e=Number(n);if(e>=lh&&e<=ah)return e}return null},Yn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw et("Exception was thrown by user callback.",t),e},Math.floor(0))}},ch=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class uh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?($e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class an{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}an.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="5",kl="v",Nl="s",Rl="r",Dl="f",Al=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pl="ls",Ol="p",ps="ac",Ml="websocket",Ll="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,i,s,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ht.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ht.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function fh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function xl(n,e,t){N(typeof e=="string","typeof type must == string"),N(typeof t=="object","typeof params must == object");let i;if(e===Ml)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ll)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fh(n)&&(t.ns=n.namespace);const s=[];return Ke(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.counters_={}}incrementCounter(e,t=1){Et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return vc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji={},Xi={};function Ws(n){const e=n.toString();return Ji[e]||(Ji[e]=new dh),Ji[e]}function _h(n,e){const t=n.toString();return Xi[t]||(Xi[t]=e()),Xi[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Yn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="start",mh="close",gh="pLPCommand",vh="pRTLPCB",Wl="id",Bl="pw",Hl="ser",yh="cb",bh="seg",Ch="ts",wh="d",Eh="dframe",Ul=1870,$l=30,Ih=Ul-$l,Sh=25e3,Th=3e4;class Zt{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qn(e),this.stats_=Ws(t),this.urlFn=a=>(this.appCheckToken&&(a[ps]=this.appCheckToken),xl(t,Ll,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ph(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Th)),th(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bs((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nr)this.id=l,this.password=a;else if(o===mh)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Nr]="t",i[Hl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[yh]=this.scriptTagHolder.uniqueCallbackIdentifier),i[kl]=xs,this.transportSessionId&&(i[Nl]=this.transportSessionId),this.lastSessionId&&(i[Pl]=this.lastSessionId),this.applicationId&&(i[Ol]=this.applicationId),this.appCheckToken&&(i[ps]=this.appCheckToken),typeof location<"u"&&location.hostname&&Al.test(location.hostname)&&(i[Rl]=Dl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zt.forceAllow_=!0}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){return Zt.forceAllow_?!0:!Zt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ih()&&!sh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Oe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ol(t),s=Sl(i,Ih);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Eh]="t",i[Wl]=e,i[Bl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Oe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Bs{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Xu(),window[gh+this.uniqueCallbackIdentifier]=e,window[vh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Bs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){$e("frame writing exception"),l.stack&&$e(l.stack),$e(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$e("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wl]=this.myID,e[Bl]=this.myPW,e[Hl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$l+i.length<=Ul;){const o=this.pendingSegs.shift();i=i+"&"+bh+s+"="+o.seg+"&"+Ch+s+"="+o.ts+"&"+wh+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Sh)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{$e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=16384,Nh=45e3;let pi=null;typeof MozWebSocket<"u"?pi=MozWebSocket:typeof WebSocket<"u"&&(pi=WebSocket);class ht{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qn(this.connId),this.stats_=Ws(t),this.connURL=ht.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[kl]=xs,typeof location<"u"&&location.hostname&&Al.test(location.hostname)&&(o[Rl]=Dl),t&&(o[Nl]=t),i&&(o[Pl]=i),s&&(o[ps]=s),r&&(o[Ol]=r),xl(e,Ml,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ht.set("previous_websocket_failure",!0);try{let i;hl(),this.mySock=new pi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&pi!==null&&!ht.forceDisallow_}static previouslyFailed(){return Ht.isInMemoryStorage||Ht.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ht.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=On(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Oe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Sl(t,kh);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zt,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ht&&ht.isAvailable();let i=t&&!ht.previouslyFailed();if(e.webSocketOnly&&(t||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ht];else{const s=this.transports_=[];for(const r of Fn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Fn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=6e4,Dh=5e3,Ah=10*1024,Ph=100*1024,Zi="t",Rr="d",Oh="s",Dr="r",Mh="e",Ar="o",Pr="a",Or="n",Mr="p",Lh="h";class Fh{constructor(e,t,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qn("c:"+this.id+":"),this.transportManager_=new Fn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Nn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ph?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ah?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zi in e){const t=e[Zi];t===Pr?this.upgradeIfSecondaryHealthy_():t===Dr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ar&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wn("t",e),i=wn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Or,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wn("t",e),i=wn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wn(Zi,e);if(Rr in e){const i=e[Rr];if(t===Lh){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Or){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Oh?this.onConnectionShutdown_(i):t===Dr?this.onReset_(i):t===Mh?_s("Server Error: "+i):t===Ar?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_s("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),xs!==i&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Nn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Rh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Dh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ht.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){N(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends zl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ul()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mi}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=32,Fr=768;class be{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function _e(){return new be("")}function ae(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ot(n){return n.pieces_.length-n.pieceNum_}function Ie(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new be(n.pieces_,e)}function jl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function xh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Vl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ql(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new be(e,0)}function Me(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof be)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new be(t,0)}function re(n){return n.pieceNum_>=n.pieces_.length}function je(n,e){const t=ae(n),i=ae(e);if(t===null)return e;if(t===i)return je(Ie(n),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Yl(n,e){if(Ot(n)!==Ot(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ft(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ot(n)>Ot(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Wh{constructor(e,t){this.errorPrefix_=t,this.parts_=Vl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Li(this.parts_[i]);Kl(this)}}function Bh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Li(e),Kl(n)}function Hh(n){const e=n.parts_.pop();n.byteLength_-=Li(e),n.parts_.length>0&&(n.byteLength_-=1)}function Kl(n){if(n.byteLength_>Fr)throw new Error(n.errorPrefix_+"has a key path longer than "+Fr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Lr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Lr+") or object contains a cycle "+Bt(n))}function Bt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends zl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Hs}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=1e3,Uh=60*5*1e3,xr=30*1e3,$h=1.3,Gh=3e4,zh="server_kill",Wr=3;class yt extends Gl{constructor(e,t,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=yt.nextPersistentConnectionId_++,this.log_=qn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=En,this.maxReconnectDelay_=Uh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!hl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Oe(r)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ms,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;yt.warnOnListenWarnings_(a,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Et(e,"w")){const i=hn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Mc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):_s("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gh&&(this.reconnectDelay_=En),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$h)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(h){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$e("getToken() completed but was canceled"):($e("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Fh(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{et(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(zh)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&et(h),a())}}}interrupt(e){$e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_r(this.interruptReasons_)&&(this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Fs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new be(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){$e("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wr&&(this.reconnectDelay_=xr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){$e("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Cl.replace(/\./g,"-")]=1,ul()?e["framework.cordova"]=1:Nc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mi.getInstance().currentlyOnline();return _r(this.interruptReasons_)&&e}}yt.nextPersistentConnectionId_=0;yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ie(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new ie(fn,e),s=new ie(fn,t);return this.compare(i,s)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;class Ql extends Fi{static get __EMPTY_NODE(){return ii}static set __EMPTY_NODE(e){ii=e}compare(e,t){return vn(e.name,t.name)}isDefinedOn(e){throw mn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Gt,ii)}makePost(e,t){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,ii)}toString(){return".key"}}const cn=new Ql;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??xe.RED,this.left=s??Ye.EMPTY_NODE,this.right=r??Ye.EMPTY_NODE}copy(e,t,i,s,r){return new xe(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class jh{copy(e,t,i,s,r){return this}insert(e,t,i){return new xe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,t=Ye.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ye(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new si(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new si(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new si(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new si(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new jh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n,e){return vn(n.name,e.name)}function Us(n,e){return vn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms;function qh(n){ms=n}const Jl=function(n){return typeof n=="number"?"number:"+Tl(n):"string:"+n},Xl=function(n){if(n.isLeafNode()){const e=n.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Et(e,".sv"),"Priority must be a string or number.")}else N(n===ms||n.isEmpty(),"priority of unexpected type.");N(n===ms||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br;class Fe{constructor(e,t=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xl(this.priorityNode_)}static set __childrenNodeConstructor(e){Br=e}static get __childrenNodeConstructor(){return Br}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ae(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=ae(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(N(i!==".priority"||Ot(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Tl(this.value_):e+=this.value_,this.lazyHash_=El(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Fe.VALUE_TYPE_ORDER.indexOf(t),r=Fe.VALUE_TYPE_ORDER.indexOf(i);return N(s>=0,"Unknown leaf type: "+t),N(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl,ea;function Yh(n){Zl=n}function Kh(n){ea=n}class Qh extends Fi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?vn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Gt,new Fe("[PRIORITY-POST]",ea))}makePost(e,t){const i=Zl(e);return new ie(t,new Fe("[PRIORITY-POST]",i))}toString(){return".priority"}}const Re=new Qh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=Math.log(2);class Xh{constructor(e){const t=r=>parseInt(Math.log(r)/Jh,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gi=function(n,e,t,i){n.sort(e);const s=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=n[a],d=t?t(h):h,new xe(d,h.node,xe.BLACK,null,null);{const p=parseInt(u/2,10)+a,m=s(a,p),v=s(p+1,c);return h=n[p],d=t?t(h):h,new xe(d,h.node,xe.BLACK,m,v)}},r=function(a){let c=null,u=null,h=n.length;const d=function(m,v){const b=h-m,D=h;h-=m;const F=s(b+1,D),C=n[b],S=t?t(C):C;p(new xe(S,C.node,v,null,F))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const v=a.nextBitIsOne(),b=Math.pow(2,a.count-(m+1));v?d(b,xe.BLACK):(d(b,xe.BLACK),d(b,xe.RED))}return u},o=new Xh(n.length),l=r(o);return new Ye(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es;const Jt={};class vt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return N(Jt&&Re,"ChildrenNode.ts has not been loaded"),es=es||new vt({".priority":Jt},{".priority":Re}),es}get(e){const t=hn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ye?t:null}hasIndex(e){return Et(this.indexSet_,e.toString())}addIndex(e,t){N(e!==cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(ie.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=gi(i,e.getCompare()):l=Jt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new vt(u,c)}addToIndexes(e,t){const i=fi(this.indexes_,(s,r)=>{const o=hn(this.indexSet_,r);if(N(o,"Missing index implementation for "+r),s===Jt)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(ie.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),gi(l,o.getCompare())}else return Jt;else{const l=t.get(e.name);let a=s;return l&&(a=a.remove(new ie(e.name,l))),a.insert(e,e.node)}});return new vt(i,this.indexSet_)}removeFromIndexes(e,t){const i=fi(this.indexes_,s=>{if(s===Jt)return s;{const r=t.get(e.name);return r?s.remove(new ie(e.name,r)):s}});return new vt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In;class V{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Xl(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return In||(In=new V(new Ye(Us),null,vt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||In}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?In:t}}getChild(e){const t=ae(e);return t===null?this:this.getImmediateChild(t).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(N(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new ie(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?In:this.priorityNode_;return new V(s,o,r)}}updateChild(e,t){const i=ae(e);if(i===null)return t;{N(ae(e)!==".priority"||Ot(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ie(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(Re,(o,l)=>{t[o]=l.val(e),i++,r&&V.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jl(this.getPriority().val())+":"),this.forEachChild(Re,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":El(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ie(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ie(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ie(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ie.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Kn?-1:0}withIndex(e){if(e===cn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Re),s=t.getIterator(Re);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cn?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zh extends V{constructor(){super(new Ye(Us),V.EMPTY_NODE,vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Kn=new Zh;Object.defineProperties(ie,{MIN:{value:new ie(fn,V.EMPTY_NODE)},MAX:{value:new ie(Gt,Kn)}});Ql.__EMPTY_NODE=V.EMPTY_NODE;Fe.__childrenNodeConstructor=V;qh(Kn);Kh(Kn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=!0;function He(n,e=null){if(n===null)return V.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Fe(t,He(e))}if(!(n instanceof Array)&&ef){const t=[];let i=!1;if(Ke(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=He(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),t.push(new ie(o,a)))}}),t.length===0)return V.EMPTY_NODE;const r=gi(t,Vh,o=>o.name,Us);if(i){const o=gi(t,Re.getCompare());return new V(r,He(e),new vt({".priority":o},{".priority":Re}))}else return new V(r,He(e),vt.Default)}else{let t=V.EMPTY_NODE;return Ke(n,(i,s)=>{if(Et(n,i)&&i.substring(0,1)!=="."){const r=He(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(He(e))}}Yh(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends Fi{constructor(e){super(),this.indexPath_=e,N(!re(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?vn(e.name,t.name):r}makePost(e,t){const i=He(e),s=V.EMPTY_NODE.updateChild(this.indexPath_,i);return new ie(t,s)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Kn);return new ie(Gt,e)}toString(){return Vl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends Fi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?vn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,t){const i=He(e);return new ie(t,i)}toString(){return".value"}}const sf=new nf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(n){return{type:"value",snapshotNode:n}}function dn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function xn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Wn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function rf(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(xn(t,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(dn(t,i)):o.trackChildChange(Wn(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Re,(s,r)=>{t.hasChild(s)||i.trackChildChange(xn(s,r))}),t.isLeafNode()||t.forEachChild(Re,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Wn(s,r,o))}else i.trackChildChange(dn(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.indexedFilter_=new $s(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bn.getStartPost_(e),this.endPost_=Bn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new ie(t,i))||(i=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=V.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(V.EMPTY_NODE);const r=this;return t.forEachChild(Re,(o,l)=>{r.matches(new ie(o,l))||(s=s.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Bn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new ie(t,i))||(i=V.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const a=new ie(t,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const h=l.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,a);if(u&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Wn(t,i,h)),l.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(xn(t,h));const v=l.updateImmediateChild(t,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(dn(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return i.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(xn(c.name,c.node)),r.trackChildChange(dn(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fn}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new Gs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lf(n){return n.loadsAllData()?new $s(n.getIndex()):n.hasLimit()?new of(n):new Bn(n)}function Hr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Re?t="$priority":n.index_===sf?t="$value":n.index_===cn?t="$key":(N(n.index_ instanceof tf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Oe(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Oe(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Oe(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Oe(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Oe(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ur(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Re&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Gl{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=qn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vi.getListenId_(e,i),l={};this.listens_[o]=l;const a=Hr(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),hn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=vi.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Hr(e._queryParams),i=e._path.toString(),s=new Ms;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fc(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=On(l.responseText)}catch{et("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(){return{value:null,children:new Map}}function na(n,e,t){if(re(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=ae(e);n.children.has(i)||n.children.set(i,yi());const s=n.children.get(i);e=Ie(e),na(s,e,t)}}function gs(n,e,t){n.value!==null?t(e,n.value):cf(n,(i,s)=>{const r=new be(e.toString()+"/"+i);gs(s,r,t)})}function cf(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ke(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=10*1e3,hf=30*1e3,ff=5*60*1e3;class df{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new uf(e);const i=$r+(hf-$r)*Math.random();Nn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ke(e,(s,r)=>{r>0&&Et(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Nn(this.reportStats_.bind(this),Math.floor(Math.random()*2*ff))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dt||(dt={}));function ia(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function js(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=dt.ACK_USER_WRITE,this.source=ia()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new be(e));return new bi(_e(),t,this.revert)}}else return N(ae(this.path)===e,"operationForChild called for unrelated child."),new bi(Ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.source=e,this.path=t,this.type=dt.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new Hn(this.source,_e()):new Hn(this.source,Ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=dt.OVERWRITE}operationForChild(e){return re(this.path)?new zt(this.source,_e(),this.snap.getImmediateChild(e)):new zt(this.source,Ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=dt.MERGE}operationForChild(e){if(re(this.path)){const t=this.children.subtree(new be(e));return t.isEmpty()?null:t.value?new zt(this.source,_e(),t.value):new Un(this.source,_e(),t)}else return N(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Un(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const t=ae(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pf(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(rf(o.childName,o.snapshotNode))}),Sn(n,s,"child_removed",e,i,t),Sn(n,s,"child_added",e,i,t),Sn(n,s,"child_moved",r,i,t),Sn(n,s,"child_changed",e,i,t),Sn(n,s,"value",e,i,t),s}function Sn(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,a)=>gf(n,l,a)),o.forEach(l=>{const a=mf(n,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function mf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function gf(n,e,t){if(e.childName==null||t.childName==null)throw mn("Should only compare child_ events.");const i=new ie(e.childName,e.snapshotNode),s=new ie(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(n,e){return{eventCache:n,serverCache:e}}function Rn(n,e,t,i){return xi(new Mt(e,t,i),n.serverCache)}function sa(n,e,t,i){return xi(n.eventCache,new Mt(e,t,i))}function Ci(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function jt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;const vf=()=>(ts||(ts=new Ye(nh)),ts);class Se{constructor(e,t=vf()){this.value=e,this.children=t}static fromObject(e){let t=new Se(null);return Ke(e,(i,s)=>{t=t.set(new be(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:_e(),value:this.value};if(re(e))return null;{const i=ae(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ie(e),t);return r!=null?{path:Me(new be(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const t=ae(e),i=this.children.get(t);return i!==null?i.subtree(Ie(e)):new Se(null)}}set(e,t){if(re(e))return new Se(t,this.children);{const i=ae(e),r=(this.children.get(i)||new Se(null)).set(Ie(e),t),o=this.children.insert(i,r);return new Se(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const t=ae(e),i=this.children.get(t);if(i){const s=i.remove(Ie(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Se(null):new Se(this.value,r)}else return this}}get(e){if(re(e))return this.value;{const t=ae(e),i=this.children.get(t);return i?i.get(Ie(e)):null}}setTree(e,t){if(re(e))return t;{const i=ae(e),r=(this.children.get(i)||new Se(null)).setTree(Ie(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Se(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Me(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,_e(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(re(e))return null;{const r=ae(e),o=this.children.get(r);return o?o.findOnPath_(Ie(e),Me(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,_e(),t)}foreachOnPath_(e,t,i){if(re(e))return this;{this.value&&i(t,this.value);const s=ae(e),r=this.children.get(s);return r?r.foreachOnPath_(Ie(e),Me(t,s),i):new Se(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Me(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new Se(null))}}function Dn(n,e,t){if(re(e))return new _t(new Se(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=je(s,e);return r=r.updateChild(o,t),new _t(n.writeTree_.set(s,r))}else{const s=new Se(t),r=n.writeTree_.setTree(e,s);return new _t(r)}}}function Gr(n,e,t){let i=n;return Ke(t,(s,r)=>{i=Dn(i,Me(e,s),r)}),i}function zr(n,e){if(re(e))return _t.empty();{const t=n.writeTree_.setTree(e,new Se(null));return new _t(t)}}function vs(n,e){return qt(n,e)!=null}function qt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(je(t.path,e)):null}function jr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Re,(i,s)=>{e.push(new ie(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ie(i,s.value))}),e}function At(n,e){if(re(e))return n;{const t=qt(n,e);return t!=null?new _t(new Se(t)):new _t(n.writeTree_.subtree(e))}}function ys(n){return n.writeTree_.isEmpty()}function _n(n,e){return ra(_e(),n.writeTree_,e)}function ra(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(N(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=ra(Me(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Me(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n,e){return ca(e,n)}function yf(n,e,t,i,s){N(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Dn(n.visibleWrites,e,t)),n.lastWriteId=i}function bf(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Cf(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);N(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&wf(l,i.path)?s=!1:ft(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return Ef(n),!0;if(i.snap)n.visibleWrites=zr(n.visibleWrites,i.path);else{const l=i.children;Ke(l,a=>{n.visibleWrites=zr(n.visibleWrites,Me(i.path,a))})}return!0}else return!1}function wf(n,e){if(n.snap)return ft(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ft(Me(n.path,t),e))return!0;return!1}function Ef(n){n.visibleWrites=oa(n.allWrites,If,_e()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function If(n){return n.visible}function oa(n,e,t){let i=_t.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)ft(t,o)?(l=je(t,o),i=Dn(i,l,r.snap)):ft(o,t)&&(l=je(o,t),i=Dn(i,_e(),r.snap.getChild(l)));else if(r.children){if(ft(t,o))l=je(t,o),i=Gr(i,l,r.children);else if(ft(o,t))if(l=je(o,t),re(l))i=Gr(i,_e(),r.children);else{const a=hn(r.children,ae(l));if(a){const c=a.getChild(Ie(l));i=Dn(i,_e(),c)}}}else throw mn("WriteRecord should have .snap or .children")}}return i}function la(n,e,t,i,s){if(!i&&!s){const r=qt(n.visibleWrites,e);if(r!=null)return r;{const o=At(n.visibleWrites,e);if(ys(o))return t;if(t==null&&!vs(o,_e()))return null;{const l=t||V.EMPTY_NODE;return _n(o,l)}}}else{const r=At(n.visibleWrites,e);if(!s&&ys(r))return t;if(!s&&t==null&&!vs(r,_e()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ft(c.path,e)||ft(e,c.path))},l=oa(n.allWrites,o,e),a=t||V.EMPTY_NODE;return _n(l,a)}}}function Sf(n,e,t){let i=V.EMPTY_NODE;const s=qt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Re,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=At(n.visibleWrites,e);return t.forEachChild(Re,(o,l)=>{const a=_n(At(r,new be(o)),l);i=i.updateImmediateChild(o,a)}),jr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=At(n.visibleWrites,e);return jr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Tf(n,e,t,i,s){N(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Me(e,t);if(vs(n.visibleWrites,r))return null;{const o=At(n.visibleWrites,r);return ys(o)?s.getChild(t):_n(o,s.getChild(t))}}function kf(n,e,t,i){const s=Me(e,t),r=qt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=At(n.visibleWrites,s);return _n(o,i.getNode().getImmediateChild(t))}else return null}function Nf(n,e){return qt(n.visibleWrites,e)}function Rf(n,e,t,i,s,r,o){let l;const a=At(n.visibleWrites,e),c=qt(a,_e());if(c!=null)l=c;else if(t!=null)l=_n(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let p=d.getNext();for(;p&&u.length<s;)h(p,i)!==0&&u.push(p),p=d.getNext();return u}else return[]}function Df(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function wi(n,e,t,i){return la(n.writeTree,n.treePath,e,t,i)}function Vs(n,e){return Sf(n.writeTree,n.treePath,e)}function Vr(n,e,t,i){return Tf(n.writeTree,n.treePath,e,t,i)}function Ei(n,e){return Nf(n.writeTree,Me(n.treePath,e))}function Af(n,e,t,i,s,r){return Rf(n.writeTree,n.treePath,e,t,i,s,r)}function qs(n,e,t){return kf(n.writeTree,n.treePath,e,t)}function aa(n,e){return ca(Me(n.treePath,e),n.writeTree)}function ca(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;N(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),N(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Wn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,xn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,dn(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Wn(i,e.snapshotNode,s.oldSnap));else throw mn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const ua=new Of;class Ys{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Mt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:jt(this.viewCache_),r=Af(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(n){return{filter:n}}function Lf(n,e){N(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Ff(n,e,t,i,s){const r=new Pf;let o,l;if(t.type===dt.OVERWRITE){const c=t;c.source.fromUser?o=bs(n,e,c.path,c.snap,i,s,r):(N(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!re(c.path),o=Ii(n,e,c.path,c.snap,i,s,l,r))}else if(t.type===dt.MERGE){const c=t;c.source.fromUser?o=Wf(n,e,c.path,c.children,i,s,r):(N(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Cs(n,e,c.path,c.children,i,s,l,r))}else if(t.type===dt.ACK_USER_WRITE){const c=t;c.revert?o=Uf(n,e,c.path,i,s,r):o=Bf(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===dt.LISTEN_COMPLETE)o=Hf(n,e,t.path,i,r);else throw mn("Unknown operation type: "+t.type);const a=r.getChanges();return xf(e,o,a),{viewCache:o,changes:a}}function xf(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ci(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(ta(Ci(e)))}}function ha(n,e,t,i,s,r){const o=e.eventCache;if(Ei(i,t)!=null)return e;{let l,a;if(re(t))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=jt(e),u=c instanceof V?c:V.EMPTY_NODE,h=Vs(i,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=wi(i,jt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ae(t);if(c===".priority"){N(Ot(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Vr(i,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=Ie(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Vr(i,t,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=qs(i,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,s,r):l=o.getNode()}}return Rn(e,l,o.isFullyInitialized()||re(t),n.filter.filtersNodes())}}function Ii(n,e,t,i,s,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(re(t))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(t,i);c=u.updateFullNode(a.getNode(),p,null)}else{const p=ae(t);if(!a.isCompleteForPath(t)&&Ot(t)>1)return e;const m=Ie(t),b=a.getNode().getImmediateChild(p).updateChild(m,i);p===".priority"?c=u.updatePriority(a.getNode(),b):c=u.updateChild(a.getNode(),p,b,m,ua,null)}const h=sa(e,c,a.isFullyInitialized()||re(t),u.filtersNodes()),d=new Ys(s,h,r);return ha(n,h,t,s,d,l)}function bs(n,e,t,i,s,r,o){const l=e.eventCache;let a,c;const u=new Ys(s,e,r);if(re(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),a=Rn(e,c,!0,n.filter.filtersNodes());else{const h=ae(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),a=Rn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Ie(t),p=l.getNode().getImmediateChild(h);let m;if(re(d))m=i;else{const v=u.getCompleteChild(h);v!=null?jl(d)===".priority"&&v.getChild(ql(d)).isEmpty()?m=v:m=v.updateChild(d,i):m=V.EMPTY_NODE}if(p.equals(m))a=e;else{const v=n.filter.updateChild(l.getNode(),h,m,d,u,o);a=Rn(e,v,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function qr(n,e){return n.eventCache.isCompleteForChild(e)}function Wf(n,e,t,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=Me(t,a);qr(e,ae(u))&&(l=bs(n,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=Me(t,a);qr(e,ae(u))||(l=bs(n,l,u,c,s,r,o))}),l}function Yr(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Cs(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;re(t)?c=i:c=new Se(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Yr(n,p,d);a=Ii(n,a,new be(h),m,s,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),v=Yr(n,m,d);a=Ii(n,a,new be(h),v,s,r,o,l)}}),a}function Bf(n,e,t,i,s,r,o){if(Ei(s,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(re(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Ii(n,e,t,a.getNode().getChild(t),s,r,l,o);if(re(t)){let c=new Se(null);return a.getNode().forEachChild(cn,(u,h)=>{c=c.set(new be(u),h)}),Cs(n,e,t,c,s,r,l,o)}else return e}else{let c=new Se(null);return i.foreach((u,h)=>{const d=Me(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Cs(n,e,t,c,s,r,l,o)}}function Hf(n,e,t,i,s){const r=e.serverCache,o=sa(e,r.getNode(),r.isFullyInitialized()||re(t),r.isFiltered());return ha(n,o,t,i,ua,s)}function Uf(n,e,t,i,s,r){let o;if(Ei(i,t)!=null)return e;{const l=new Ys(i,e,s),a=e.eventCache.getNode();let c;if(re(t)||ae(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=wi(i,jt(e));else{const h=e.serverCache.getNode();N(h instanceof V,"serverChildren would be complete if leaf node"),u=Vs(i,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=ae(t);let h=qs(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,Ie(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,V.EMPTY_NODE,Ie(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wi(i,jt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ei(i,_e())!=null,Rn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new $s(i.getIndex()),r=lf(i);this.processor_=Mf(r);const o=t.serverCache,l=t.eventCache,a=s.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,l.getNode(),null),u=new Mt(a,o.isFullyInitialized(),s.filtersNodes()),h=new Mt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=xi(h,u),this.eventGenerator_=new _f(this.query_)}get query(){return this.query_}}function Gf(n){return n.viewCache_.serverCache.getNode()}function zf(n){return Ci(n.viewCache_)}function jf(n,e){const t=jt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!re(e)&&!t.getImmediateChild(ae(e)).isEmpty())?t.getChild(e):null}function Kr(n){return n.eventRegistrations_.length===0}function Vf(n,e){n.eventRegistrations_.push(e)}function Qr(n,e,t){const i=[];if(t){N(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Jr(n,e,t,i){e.type===dt.MERGE&&e.source.queryId!==null&&(N(jt(n.viewCache_),"We should always have a full cache before handling merges"),N(Ci(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Ff(n.processor_,s,e,t,i);return Lf(n.processor_,r.viewCache),N(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,fa(n,r.changes,r.viewCache.eventCache.getNode(),null)}function qf(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Re,(r,o)=>{i.push(dn(r,o))}),t.isFullyInitialized()&&i.push(ta(t.getNode())),fa(n,i,t.getNode(),e)}function fa(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return pf(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;class da{constructor(){this.views=new Map}}function Yf(n){N(!Si,"__referenceConstructor has already been defined"),Si=n}function Kf(){return N(Si,"Reference.ts has not been loaded"),Si}function Qf(n){return n.views.size===0}function Ks(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return N(r!=null,"SyncTree gave us an op for an invalid query."),Jr(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Jr(o,e,t,i));return r}}function _a(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=wi(t,s?i:null),a=!1;l?a=!0:i instanceof V?(l=Vs(t,i),a=!1):(l=V.EMPTY_NODE,a=!1);const c=xi(new Mt(l,a,!1),new Mt(i,s,!1));return new $f(e,c)}return o}function Jf(n,e,t,i,s,r){const o=_a(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Vf(o,t),qf(o,t)}function Xf(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const l=Lt(n);if(s==="default")for(const[a,c]of n.views.entries())o=o.concat(Qr(c,t,i)),Kr(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(s);a&&(o=o.concat(Qr(a,t,i)),Kr(a)&&(n.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Lt(n)&&r.push(new(Kf())(e._repo,e._path)),{removed:r,events:o}}function pa(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Pt(n,e){let t=null;for(const i of n.views.values())t=t||jf(i,e);return t}function ma(n,e){if(e._queryParams.loadsAllData())return Bi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function ga(n,e){return ma(n,e)!=null}function Lt(n){return Bi(n)!=null}function Bi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;function Zf(n){N(!Ti,"__referenceConstructor has already been defined"),Ti=n}function ed(){return N(Ti,"Reference.ts has not been loaded"),Ti}let td=1;class Xr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=Df(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nd(n,e,t,i,s){return yf(n.pendingWriteTree_,e,t,i,s),s?Jn(n,new zt(ia(),e,t)):[]}function en(n,e,t=!1){const i=bf(n.pendingWriteTree_,e);if(Cf(n.pendingWriteTree_,e)){let r=new Se(null);return i.snap!=null?r=r.set(_e(),!0):Ke(i.children,o=>{r=r.set(new be(o),!0)}),Jn(n,new bi(i.path,r,t))}else return[]}function Qn(n,e,t){return Jn(n,new zt(zs(),e,t))}function id(n,e,t){const i=Se.fromObject(t);return Jn(n,new Un(zs(),e,i))}function sd(n,e){return Jn(n,new Hn(zs(),e))}function rd(n,e,t){const i=Qs(n,t);if(i){const s=Js(i),r=s.path,o=s.queryId,l=je(r,e),a=new Hn(js(o),l);return Xs(n,r,a)}else return[]}function va(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ga(o,e))){const a=Xf(o,e,t,i);Qf(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,p)=>Lt(p));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=cd(d);for(let m=0;m<p.length;++m){const v=p[m],b=v.query,D=Ea(n,v);n.listenProvider_.startListening(An(b),$n(n,b),D.hashFn,D.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(An(e),null):c.forEach(d=>{const p=n.queryToTagMap.get(Hi(d));n.listenProvider_.stopListening(An(d),p)}))}ud(n,c)}return l}function ya(n,e,t,i){const s=Qs(n,i);if(s!=null){const r=Js(s),o=r.path,l=r.queryId,a=je(o,e),c=new zt(js(l),a,t);return Xs(n,o,c)}else return[]}function od(n,e,t,i){const s=Qs(n,i);if(s){const r=Js(s),o=r.path,l=r.queryId,a=je(o,e),c=Se.fromObject(t),u=new Un(js(l),a,c);return Xs(n,o,u)}else return[]}function ld(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,p)=>{const m=je(d,s);r=r||Pt(p,m),o=o||Lt(p)});let l=n.syncPointTree_.get(s);l?(o=o||Lt(l),r=r||Pt(l,_e())):(l=new da,n.syncPointTree_=n.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=V.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,m)=>{const v=Pt(m,_e());v&&(r=r.updateImmediateChild(p,v))}));const c=ga(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Hi(e);N(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=hd();n.queryToTagMap.set(d,p),n.tagToQueryMap.set(p,d)}const u=Wi(n.pendingWriteTree_,s);let h=Jf(l,e,t,u,r,a);if(!c&&!o&&!i){const d=ma(l,e);h=h.concat(fd(n,e,d))}return h}function ba(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=je(o,e),c=Pt(l,a);if(c)return c});return la(s,e,r,t,!0)}function ad(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=je(c,t);i=i||Pt(u,h)});let s=n.syncPointTree_.get(t);s?i=i||Pt(s,_e()):(s=new da,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Mt(i,!0,!1):null,l=Wi(n.pendingWriteTree_,e._path),a=_a(s,e,l,r?o.getNode():V.EMPTY_NODE,r);return zf(a)}function Jn(n,e){return Ca(e,n.syncPointTree_,null,Wi(n.pendingWriteTree_,_e()))}function Ca(n,e,t,i){if(re(n.path))return wa(n,e,t,i);{const s=e.get(_e());t==null&&s!=null&&(t=Pt(s,_e()));let r=[];const o=ae(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=aa(i,o);r=r.concat(Ca(l,a,c,u))}return s&&(r=r.concat(Ks(s,n,i,t))),r}}function wa(n,e,t,i){const s=e.get(_e());t==null&&s!=null&&(t=Pt(s,_e()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=aa(i,o),u=n.operationForChild(o);u&&(r=r.concat(wa(u,l,a,c)))}),s&&(r=r.concat(Ks(s,n,i,t))),r}function Ea(n,e){const t=e.query,i=$n(n,t);return{hashFn:()=>(Gf(e)||V.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?rd(n,t._path,i):sd(n,t._path);{const r=rh(s,t);return va(n,t,null,r)}}}}function $n(n,e){const t=Hi(e);return n.queryToTagMap.get(t)}function Hi(n){return n._path.toString()+"$"+n._queryIdentifier}function Qs(n,e){return n.tagToQueryMap.get(e)}function Js(n){const e=n.indexOf("$");return N(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new be(n.substr(0,e))}}function Xs(n,e,t){const i=n.syncPointTree_.get(e);N(i,"Missing sync point for query tag that we're tracking");const s=Wi(n.pendingWriteTree_,e);return Ks(i,t,s,null)}function cd(n){return n.fold((e,t,i)=>{if(t&&Lt(t))return[Bi(t)];{let s=[];return t&&(s=pa(t)),Ke(i,(r,o)=>{s=s.concat(o)}),s}})}function An(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ed())(n._repo,n._path):n}function ud(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Hi(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function hd(){return td++}function fd(n,e,t){const i=e._path,s=$n(n,e),r=Ea(n,t),o=n.listenProvider_.startListening(An(e),s,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(i);if(s)N(!Lt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!re(c)&&u&&Lt(u))return[Bi(u).query];{let d=[];return u&&(d=d.concat(pa(u).map(p=>p.query))),Ke(h,(p,m)=>{d=d.concat(m)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(An(u),$n(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zs(t)}node(){return this.node_}}class er{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Me(this.path_,e);return new er(this.syncTree_,t)}node(){return ba(this.syncTree_,this.path_)}}const dd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Zr=function(n,e,t){if(!n||typeof n!="object")return n;if(N(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return _d(n[".sv"],e,t);if(typeof n[".sv"]=="object")return pd(n[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},_d=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:N(!1,"Unexpected server value: "+n)}},pd=function(n,e,t){n.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&N(!1,"Unexpected increment value: "+i);const s=e.node();if(N(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},md=function(n,e,t,i){return tr(e,new er(t,n),i)},gd=function(n,e,t){return tr(n,new Zs(e),t)};function tr(n,e,t){const i=n.getPriority().val(),s=Zr(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Zr(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new Fe(l,He(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Fe(s))),o.forEachChild(Re,(l,a)=>{const c=tr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ir(n,e){let t=e instanceof be?e:new be(e),i=n,s=ae(t);for(;s!==null;){const r=hn(i.node.children,s)||{children:{},childCount:0};i=new nr(s,i,r),t=Ie(t),s=ae(t)}return i}function yn(n){return n.node.value}function Ia(n,e){n.node.value=e,ws(n)}function Sa(n){return n.node.childCount>0}function vd(n){return yn(n)===void 0&&!Sa(n)}function Ui(n,e){Ke(n.node.children,(t,i)=>{e(new nr(t,n,i))})}function Ta(n,e,t,i){t&&!i&&e(n),Ui(n,s=>{Ta(s,e,!0,i)}),t&&i&&e(n)}function yd(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Xn(n){return new be(n.parent===null?n.name:Xn(n.parent)+"/"+n.name)}function ws(n){n.parent!==null&&bd(n.parent,n.name,n)}function bd(n,e,t){const i=vd(t),s=Et(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ws(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ws(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=/[\[\].#$\/\u0000-\u001F\u007F]/,wd=/[\[\].#$\u0000-\u001F\u007F]/,ns=10*1024*1024,ka=function(n){return typeof n=="string"&&n.length!==0&&!Cd.test(n)},Na=function(n){return typeof n=="string"&&n.length!==0&&!wd.test(n)},Ed=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Na(n)},Ra=function(n,e,t){const i=t instanceof be?new Wh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Bt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Bt(i)+" with contents = "+e.toString());if(Il(e))throw new Error(n+"contains "+e.toString()+" "+Bt(i));if(typeof e=="string"&&e.length>ns/3&&Li(e)>ns)throw new Error(n+"contains a string greater than "+ns+" utf8 bytes "+Bt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ke(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ka(o)))throw new Error(n+" contains an invalid key ("+o+") "+Bt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Bh(i,o),Ra(n,l,i),Hh(i)}),s&&r)throw new Error(n+' contains ".value" child '+Bt(i)+" in addition to actual children.")}},Da=function(n,e,t,i){if(!(i&&t===void 0)&&!Na(t))throw new Error(_l(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Id=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Da(n,e,t,i)},Sd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ka(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Ed(t))throw new Error(_l(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kd(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Yl(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function xt(n,e,t){kd(n,t),Nd(n,i=>ft(i,e)||ft(e,i))}function Nd(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Rd(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Rd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ut&&$e("event: "+t.toString()),Yn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="repo_interrupt",Ad=25;class Pd{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Td,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yi(),this.transactionQueueTree_=new nr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Od(n,e,t){if(n.stats_=Ws(n.repoInfo_),n.forceRestClient_||ch())n.server_=new vi(n.repoInfo_,(i,s,r,o)=>{eo(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>to(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new yt(n.repoInfo_,e,(i,s,r,o)=>{eo(n,i,s,r,o)},i=>{to(n,i)},i=>{Ld(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=_h(n.repoInfo_,()=>new df(n.stats_,n.server_)),n.infoData_=new af,n.infoSyncTree_=new Xr({startListening:(i,s,r,o)=>{let l=[];const a=n.infoData_.getNode(i._path);return a.isEmpty()||(l=Qn(n.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),sr(n,"connected",!1),n.serverSyncTree_=new Xr({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);xt(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Md(n){const t=n.infoData_.getNode(new be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Aa(n){return dd({timestamp:Md(n)})}function eo(n,e,t,i,s){n.dataUpdateCount++;const r=new be(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const a=fi(t,c=>He(c));o=od(n.serverSyncTree_,r,a,s)}else{const a=He(t);o=ya(n.serverSyncTree_,r,a,s)}else if(i){const a=fi(t,c=>He(c));o=id(n.serverSyncTree_,r,a)}else{const a=He(t);o=Qn(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=lr(n,r)),xt(n.eventQueue_,l,o)}function to(n,e){sr(n,"connected",e),e===!1&&Wd(n)}function Ld(n,e){Ke(e,(t,i)=>{sr(n,t,i)})}function sr(n,e,t){const i=new be("/.info/"+e),s=He(t);n.infoData_.updateSnapshot(i,s);const r=Qn(n.infoSyncTree_,i,s);xt(n.eventQueue_,i,r)}function Fd(n){return n.nextWriteId_++}function xd(n,e,t){const i=ad(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=He(s).withIndex(e._queryParams.getIndex());ld(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Qn(n.serverSyncTree_,e._path,r);else{const l=$n(n.serverSyncTree_,e);o=ya(n.serverSyncTree_,e._path,r,l)}return xt(n.eventQueue_,e._path,o),va(n.serverSyncTree_,e,t,null,!0),r},s=>(rr(n,"get for query "+Oe(e)+" failed: "+s),Promise.reject(new Error(s))))}function Wd(n){rr(n,"onDisconnectEvents");const e=Aa(n),t=yi();gs(n.onDisconnect_,_e(),(s,r)=>{const o=md(s,r,n.serverSyncTree_,e);na(t,s,o)});let i=[];gs(t,_e(),(s,r)=>{i=i.concat(Qn(n.serverSyncTree_,s,r));const o=$d(n,s);lr(n,o)}),n.onDisconnect_=yi(),xt(n.eventQueue_,_e(),i)}function Bd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Dd)}function rr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),$e(t,...e)}function Pa(n,e,t){return ba(n.serverSyncTree_,e,t)||V.EMPTY_NODE}function or(n,e=n.transactionQueueTree_){if(e||$i(n,e),yn(e)){const t=Ma(n,e);N(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Hd(n,Xn(e),t)}else Sa(e)&&Ui(e,t=>{or(n,t)})}function Hd(n,e,t){const i=t.map(c=>c.currentWriteId),s=Pa(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];N(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=je(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{rr(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(en(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();$i(n,ir(n.transactionQueueTree_,e)),or(n,n.transactionQueueTree_),xt(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Yn(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{et("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}lr(n,e)}},o)}function lr(n,e){const t=Oa(n,e),i=Xn(t),s=Ma(n,t);return Ud(n,s,i),i}function Ud(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=je(t,a.path);let u=!1,h;if(N(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,s=s.concat(en(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ad)u=!0,h="maxretry",s=s.concat(en(n.serverSyncTree_,a.currentWriteId,!0));else{const d=Pa(n,a.path,o);a.currentInputSnapshot=d;const p=e[l].update(d.val());if(p!==void 0){Ra("transaction failed: Data returned ",p,a.path);let m=He(p);typeof p=="object"&&p!=null&&Et(p,".priority")||(m=m.updatePriority(d.getPriority()));const b=a.currentWriteId,D=Aa(n),F=gd(m,d,D);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=F,a.currentWriteId=Fd(n),o.splice(o.indexOf(b),1),s=s.concat(nd(n.serverSyncTree_,a.path,F,a.currentWriteId,a.applyLocally)),s=s.concat(en(n.serverSyncTree_,b,!0))}else u=!0,h="nodata",s=s.concat(en(n.serverSyncTree_,a.currentWriteId,!0))}xt(n.eventQueue_,t,s),s=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(h),!1,null))))}$i(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Yn(i[l]);or(n,n.transactionQueueTree_)}function Oa(n,e){let t,i=n.transactionQueueTree_;for(t=ae(e);t!==null&&yn(i)===void 0;)i=ir(i,t),e=Ie(e),t=ae(e);return i}function Ma(n,e){const t=[];return La(n,e,t),t.sort((i,s)=>i.order-s.order),t}function La(n,e,t){const i=yn(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ui(e,s=>{La(n,s,t)})}function $i(n,e){const t=yn(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Ia(e,t.length>0?t:void 0)}Ui(e,i=>{$i(n,i)})}function $d(n,e){const t=Xn(Oa(n,e)),i=ir(n.transactionQueueTree_,e);return yd(i,s=>{is(n,s)}),is(n,i),Ta(i,s=>{is(n,s)}),t}function is(n,e){const t=yn(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(N(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(N(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(en(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ia(e,void 0):t.length=r+1,xt(n.eventQueue_,Xn(e),s);for(let o=0;o<i.length;o++)Yn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function zd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):et(`Invalid query segment '${t}' in query '${n}'`)}return e}const no=function(n,e){const t=jd(n),i=t.namespace;t.domain==="firebase.com"&&Ct(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||eh();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Fl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new be(t.pathString)}},jd=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=Gd(n.substring(u,h)));const d=zd(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class qd{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ar{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return re(this._path)?null:jl(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=Ur(this._queryParams),t=Fs(e);return t==="{}"?"default":t}get _queryObject(){return Ur(this._queryParams)}isEqual(e){if(e=gn(e),!(e instanceof ar))return!1;const t=this._repo===e._repo,i=Yl(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+xh(this._path)}}class It extends ar{constructor(e,t){super(e,t,new Gs,!1)}get parent(){const e=ql(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new be(e),i=Es(this.ref,e);return new Gn(this._node.getChild(t),i,Re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Gn(s,Es(this.ref,i),Re)))}hasChild(e){const t=new be(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Kd(n,e){return n=gn(n),n._checkNotDeleted("ref"),e!==void 0?Es(n._root,e):n._root}function Es(n,e){return n=gn(n),ae(n._path)===null?Id("child","path",e,!1):Da("child","path",e,!1),new It(n._repo,Me(n._path,e))}function Qd(n){n=gn(n);const e=new Yd(()=>{}),t=new cr(e);return xd(n._repo,n,t).then(i=>new Gn(i,new It(n._repo,n._path),n._queryParams.getIndex()))}class cr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Vd("value",this,new Gn(e.snapshotNode,new It(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new qd(this,e,t):null}matches(e){return e instanceof cr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Jd(n,...e){let t=gn(n);for(const i of e)t=i._apply(t);return t}Yf(It);Zf(It);/**
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
 */const Xd="FIREBASE_DATABASE_EMULATOR_HOST",Is={};let Zd=!1;function e_(n,e,t,i){n.repoInfo_=new Fl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function t_(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$e("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=no(r,s),l=o.repoInfo,a,c;typeof process<"u"&&Er&&(c=Er[Xd]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=no(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new an(an.OWNER):new hh(n.name,n.options,e);Sd("Invalid Firebase Database URL",o),re(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const h=i_(l,n,u,new uh(n.name,t));return new s_(h,n)}function n_(n,e){const t=Is[e];(!t||t[n.key]!==n)&&Ct(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Bd(n),delete t[n.key]}function i_(n,e,t,i){let s=Is[e.name];s||(s={},Is[e.name]=s);let r=s[n.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Pd(n,Zd,t,i),s[n.toURLString()]=r,r}class s_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Od(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(n_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function r_(n=xu(),e){const t=Ou(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Sc("database");i&&o_(t,...i)}return t}function o_(n,e,t,i={}){n=gn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ct("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new an(an.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Tc(i.mockUserToken,n.app.options.projectId);r=new an(o)}e_(s,e,t,r)}/**
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
 */function l_(n){Ku(Fu),_i(new Mn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return t_(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),on(Ir,Sr,n),on(Ir,Sr,"esm2017")}yt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};yt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};l_();var Ss={},Fa={},Gi={};Object.defineProperty(Gi,"__esModule",{value:!0});Gi.rotx=void 0;function a_(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}Gi.rotx=a_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=Gi;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(Fa);var xa={},zi={};Object.defineProperty(zi,"__esModule",{value:!0});zi.base64=void 0;class c_{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const u_=new c_;zi.base64=u_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=zi;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(xa);var Wa={},ji={};Object.defineProperty(ji,"__esModule",{value:!0});ji.hex=void 0;class h_{encode(e){let t="",i="";for(let s=0;s<e.length;s++)t=e.charCodeAt(s).toString(16),i+=("000"+t).slice(-4);return i}decode(e){let t=e.match(/.{1,4}/g)||[],i="";for(let s=0;s<t.length;s++)i+=String.fromCharCode(parseInt(t[s],16));return i}}const f_=new h_;ji.hex=f_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=ji;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(Wa);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=Fa;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=xa;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var i=Wa;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return i.hex}})})(Ss);let d_={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},Ba={};for(let[n,e]of Object.entries(d_))Ba[Ss.rotx(n,18)]=Ss.rotx(e,18);let ki={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},Ni={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},__=["head","body","legs","feet","neck","back","ring","misc"],p_=r_(vl(Ba)),pn="https://fantastic-frontier-roblox.fandom.com/wiki/",Ft="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Ha={chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},m_={hardMode:!1,muted:!1},g_={gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},v_={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function Ts(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function tn(n){n.target.closest("button").blur()}function ur(){Ts("?ls=true"),setTimeout(Ts)}let io=localStorage.getItem("fd-currentGameData"),so=localStorage.getItem("fd-settings"),ro=localStorage.getItem("fd-playerStats"),ot=wt(io?JSON.parse(io):Ha),kt=wt(so?JSON.parse(so):m_),ut=wt(ro?JSON.parse(ro):g_),ks=wt([]),oo=wt(""),Xe=wt({component:null,complete:!1}),Ri=wt(7),zn=wt(!1),Di=wt(!1);ot.subscribe(n=>{ur(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});kt.subscribe(n=>{ur(),Ri.set(n.hardMode?6:7),localStorage.setItem("fd-settings",JSON.stringify(n))});ut.subscribe(n=>{ur(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});function y_(n,{from:e,to:t},i={}){const s=getComputedStyle(n),r=s.transform==="none"?"":s.transform,[o,l]=s.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:h=p=>Math.sqrt(p)*120,easing:d=il}=i;return{delay:u,duration:Vt(h)?h(Math.sqrt(a*a+c*c)):h,easing:d,css:(p,m)=>{const v=m*a,b=m*c,D=p+m*e.width/t.width,F=p+m*e.height/t.height;return`transform: ${r} translate(${v}px, ${b}px) scale(${D}, ${F});`}}}function lo(n,e,t){const i=n.slice();i[6]=e[t];const s=i[6].slot==i[0].slot;i[7]=s;const r=go(i[0].stats,i[6].stats);i[8]=r;const o=i[8]==i[0].stats.length&&i[6].stats.length==i[0].stats.length;i[9]=o;const l=Math.ceil((i[6].cost.min+i[6].cost.max)/2);i[10]=l;const a=Math.ceil((i[0].cost.min+i[0].cost.max)/2);i[11]=a;const c=i[10]==i[11];i[12]=c;const u=go(i[0].colors,i[6].colors);i[13]=u;const h=i[13]==i[0].colors.length&&i[6].colors.length==i[0].colors.length;i[14]=h;const d=i[6].outline==i[0].outline;i[15]=d;const p=i[6].release==i[0].release;return i[16]=p,i}function ao(n,e,t){const i=n.slice();return i[19]=e[t],i}function co(n,e,t){const i=n.slice();return i[22]=e[t],i}function b_(n){let e;return{c(){e=G("None")},m(t,i){k(t,e,i)},p:se,d(t){t&&I(e)}}}function C_(n){let e,t=ye(n[6].stats),i=[];for(let s=0;s<t.length;s+=1)i[s]=uo(co(n,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=Nt()},m(s,r){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(s,r);k(s,e,r)},p(s,r){if(r&2){t=ye(s[6].stats);let o;for(o=0;o<t.length;o+=1){const l=co(s,t,o);i[o]?i[o].p(l,r):(i[o]=uo(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&I(e),qe(i,s)}}}function uo(n){let e=Ni[n[22]]+(n[22]==n[6].stats[n[6].stats.length-1]?"":", "),t;return{c(){t=G(e)},m(i,s){k(i,t,s)},p(i,s){s&2&&e!==(e=Ni[i[22]]+(i[22]==i[6].stats[i[6].stats.length-1]?"":", "))&&me(t,e)},d(i){i&&I(t)}}}function ho(n){let e,t=n[8]+"",i;return{c(){e=g("span"),i=G(t),_(e,"class","bgInfo")},m(s,r){k(s,e,r),f(e,i)},p(s,r){r&3&&t!==(t=s[8]+"")&&me(i,t)},d(s){s&&I(e)}}}function w_(n){let e=n[10].toLocaleString()+"",t,i,s,r;return{c(){t=G(e),i=w(),s=g("br"),r=G(`\r
                    Gold`)},m(o,l){k(o,t,l),k(o,i,l),k(o,s,l),k(o,r,l)},p(o,l){l&2&&e!==(e=o[10].toLocaleString()+"")&&me(t,e)},d(o){o&&(I(t),I(i),I(s),I(r))}}}function E_(n){let e;return{c(){e=G("Unpurchasable")},m(t,i){k(t,e,i)},p:se,d(t){t&&I(e)}}}function fo(n){let e,t;return{c(){e=g("iconify-icon"),We(e,"class","bgInfo"),We(e,"icon","mingcute:arrow-up-fill"),We(e,"flip",t=n[10]>n[11]?"vertical":"")},m(i,s){k(i,e,s)},p(i,s){s&3&&t!==(t=i[10]>i[11]?"vertical":"")&&We(e,"flip",t)},d(i){i&&I(e)}}}function _o(n){let e=(n[19]==n[6].colors[0]?nn(n[19]):n[19])+(n[19]==n[6].colors[n[6].colors.length-1]?"":", "),t;return{c(){t=G(e)},m(i,s){k(i,t,s)},p(i,s){s&2&&e!==(e=(i[19]==i[6].colors[0]?nn(i[19]):i[19])+(i[19]==i[6].colors[i[6].colors.length-1]?"":", "))&&me(t,e)},d(i){i&&I(t)}}}function po(n){let e,t=n[13]+"",i;return{c(){e=g("span"),i=G(t),_(e,"class","bgInfo")},m(s,r){k(s,e,r),f(e,i)},p(s,r){r&3&&t!==(t=s[13]+"")&&me(i,t)},d(s){s&&I(e)}}}function mo(n,e){let t,i,s,r,o,l,a,c,u,h,d,p=e[6].name+"",m,v,b,D,F,C=nn(e[6].slot)+"",S,T,q,R,x,X,Y,B,W,K,ee,P,H,E,U,L,fe,ce,ue,j,ne=nn(e[6].outline)+"",oe,O,te,z,Z,Te=ki[e[6].release]+"",M,ge,A,le,$,ve,gt=se,pe,bn,Zn;function ei(Q,Ce){return Q[6].stats.length?C_:b_}let Yt=ei(e),rt=Yt(e),Ue=!e[2].hardMode&&e[8]&&!e[9]&&ho(e);function ti(Q,Ce){return Q[6].cost.min==null?E_:w_}let y=ti(e),De=y(e),Ne=!e[2].hardMode&&!e[12]&&e[10]&&fo(e),St=ye(e[6].colors),ze=[];for(let Q=0;Q<St.length;Q+=1)ze[Q]=_o(ao(e,St,Q));let Ve=!e[2].hardMode&&e[13]&&!e[14]&&po(e);return{key:n,first:null,c(){t=g("div"),i=g("div"),s=g("a"),r=g("img"),a=w(),c=g("iconify-icon"),h=w(),d=g("span"),m=G(p),D=w(),F=g("span"),S=G(C),R=w(),x=g("span"),rt.c(),X=w(),Ue&&Ue.c(),W=w(),K=g("span"),De.c(),ee=w(),Ne&&Ne.c(),E=w(),U=g("span");for(let Q=0;Q<ze.length;Q+=1)ze[Q].c();L=w(),Ve&&Ve.c(),ue=w(),j=g("span"),oe=G(ne),z=w(),Z=g("span"),M=G(Te),ge=G(" Update"),$=w(),Ge(r.src,o=Ft+e[6].image)||_(r,"src",o),_(r,"alt",l=e[6].name),_(r,"class","svelte-pl04pb"),We(c,"icon","tabler:link"),We(c,"class","svelte-pl04pb"),_(s,"class","flex fjc-center fai-center svelte-pl04pb"),_(s,"href",u=pn+e[6].link),_(s,"target","_blank"),_(d,"class","tooltip"),_(d,"id","right"),_(i,"id","itemImage"),_(i,"class","ff-item svelte-pl04pb"),_(F,"class","ff-bg ff-item svelte-pl04pb"),_(F,"id",T=e[7]?"correct":"wrong"),_(x,"class","ff-bg ff-item svelte-pl04pb"),_(x,"id",Y=e[9]?"correct":e[8]?"partial":"wrong"),mt(x,"smallerStats",e[6].stats.length>=7),_(K,"class","ff-bg ff-item svelte-pl04pb"),_(K,"id",P=e[12]?"correct":"wrong"),_(U,"class","ff-bg ff-item svelte-pl04pb"),_(U,"id",fe=e[14]?"correct":e[13]?"partial":"wrong"),_(j,"class","ff-bg ff-item svelte-pl04pb"),_(j,"id",O=e[15]?"correct":"wrong"),_(Z,"class","ff-bg ff-item svelte-pl04pb"),_(Z,"id",A=e[16]?"correct":"wrong"),_(t,"class","itemRow svelte-pl04pb"),this.first=t},m(Q,Ce){k(Q,t,Ce),f(t,i),f(i,s),f(s,r),f(s,a),f(s,c),f(i,h),f(i,d),f(d,m),f(t,D),f(t,F),f(F,S),f(t,R),f(t,x),rt.m(x,null),f(x,X),Ue&&Ue.m(x,null),f(t,W),f(t,K),De.m(K,null),f(K,ee),Ne&&Ne.m(K,null),f(t,E),f(t,U);for(let Be=0;Be<ze.length;Be+=1)ze[Be]&&ze[Be].m(U,null);f(U,L),Ve&&Ve.m(U,null),f(t,ue),f(t,j),f(j,oe),f(t,z),f(t,Z),f(Z,M),f(Z,ge),f(t,$),pe=!0,bn||(Zn=[Va(v=e[4].call(null,i,[e[7],e[8],e[9],e[12],e[13],e[14],e[15],e[16]])),Ae(Z,"introend",e[5])],bn=!0)},p(Q,Ce){if(e=Q,(!pe||Ce&2&&!Ge(r.src,o=Ft+e[6].image))&&_(r,"src",o),(!pe||Ce&2&&l!==(l=e[6].name))&&_(r,"alt",l),(!pe||Ce&2&&u!==(u=pn+e[6].link))&&_(s,"href",u),(!pe||Ce&2)&&p!==(p=e[6].name+"")&&me(m,p),v&&Vt(v.update)&&Ce&3&&v.update.call(null,[e[7],e[8],e[9],e[12],e[13],e[14],e[15],e[16]]),(!pe||Ce&2)&&C!==(C=nn(e[6].slot)+"")&&me(S,C),(!pe||Ce&3&&T!==(T=e[7]?"correct":"wrong"))&&_(F,"id",T),Yt===(Yt=ei(e))&&rt?rt.p(e,Ce):(rt.d(1),rt=Yt(e),rt&&(rt.c(),rt.m(x,X))),!e[2].hardMode&&e[8]&&!e[9]?Ue?Ue.p(e,Ce):(Ue=ho(e),Ue.c(),Ue.m(x,null)):Ue&&(Ue.d(1),Ue=null),(!pe||Ce&3&&Y!==(Y=e[9]?"correct":e[8]?"partial":"wrong"))&&_(x,"id",Y),(!pe||Ce&2)&&mt(x,"smallerStats",e[6].stats.length>=7),y===(y=ti(e))&&De?De.p(e,Ce):(De.d(1),De=y(e),De&&(De.c(),De.m(K,ee))),!e[2].hardMode&&!e[12]&&e[10]?Ne?Ne.p(e,Ce):(Ne=fo(e),Ne.c(),Ne.m(K,null)):Ne&&(Ne.d(1),Ne=null),(!pe||Ce&3&&P!==(P=e[12]?"correct":"wrong"))&&_(K,"id",P),Ce&2){St=ye(e[6].colors);let Be;for(Be=0;Be<St.length;Be+=1){const hr=ao(e,St,Be);ze[Be]?ze[Be].p(hr,Ce):(ze[Be]=_o(hr),ze[Be].c(),ze[Be].m(U,L))}for(;Be<ze.length;Be+=1)ze[Be].d(1);ze.length=St.length}!e[2].hardMode&&e[13]&&!e[14]?Ve?Ve.p(e,Ce):(Ve=po(e),Ve.c(),Ve.m(U,null)):Ve&&(Ve.d(1),Ve=null),(!pe||Ce&3&&fe!==(fe=e[14]?"correct":e[13]?"partial":"wrong"))&&_(U,"id",fe),(!pe||Ce&2)&&ne!==(ne=nn(e[6].outline)+"")&&me(oe,ne),(!pe||Ce&3&&O!==(O=e[15]?"correct":"wrong"))&&_(j,"id",O),(!pe||Ce&2)&&Te!==(Te=ki[e[6].release]+"")&&me(M,Te),(!pe||Ce&3&&A!==(A=e[16]?"correct":"wrong"))&&_(Z,"id",A)},r(){ve=t.getBoundingClientRect()},f(){nc(t),gt()},a(){gt(),gt=tc(t,ve,y_,{duration:125})},i(Q){pe||(Q&&Pe(()=>{pe&&(b||(b=we(i,Le,{duration:300},!0)),b.run(1))}),Q&&Pe(()=>{pe&&(q||(q=we(F,Le,{duration:300,delay:250},!0)),q.run(1))}),Q&&Pe(()=>{pe&&(B||(B=we(x,Le,{duration:300,delay:550},!0)),B.run(1))}),Q&&Pe(()=>{pe&&(H||(H=we(K,Le,{duration:300,delay:850},!0)),H.run(1))}),Q&&Pe(()=>{pe&&(ce||(ce=we(U,Le,{duration:300,delay:1150},!0)),ce.run(1))}),Q&&Pe(()=>{pe&&(te||(te=we(j,Le,{duration:300,delay:1450},!0)),te.run(1))}),Q&&Pe(()=>{pe&&(le||(le=we(Z,Le,{duration:300,delay:1750},!0)),le.run(1))}),pe=!0)},o(Q){Q&&(b||(b=we(i,Le,{duration:300},!1)),b.run(0)),Q&&(q||(q=we(F,Le,{duration:300,delay:250},!1)),q.run(0)),Q&&(B||(B=we(x,Le,{duration:300,delay:550},!1)),B.run(0)),Q&&(H||(H=we(K,Le,{duration:300,delay:850},!1)),H.run(0)),Q&&(ce||(ce=we(U,Le,{duration:300,delay:1150},!1)),ce.run(0)),Q&&(te||(te=we(j,Le,{duration:300,delay:1450},!1)),te.run(0)),Q&&(le||(le=we(Z,Le,{duration:300,delay:1750},!1)),le.run(0)),pe=!1},d(Q){Q&&I(t),Q&&b&&b.end(),Q&&q&&q.end(),rt.d(),Ue&&Ue.d(),Q&&B&&B.end(),De.d(),Ne&&Ne.d(),Q&&H&&H.end(),qe(ze,Q),Ve&&Ve.d(),Q&&ce&&ce.end(),Q&&te&&te.end(),Q&&le&&le.end(),bn=!1,Qe(Zn)}}}function I_(n){let e,t,i,s=[],r=new Map,o,l=ye(n[1].chosenItems.toReversed());const a=c=>c[6];for(let c=0;c<l.length;c+=1){let u=lo(n,l,c),h=a(u);r.set(h,s[c]=mo(h,u))}return{c(){e=g("div"),t=g("div"),t.innerHTML='<span class="ff-item svelte-pl04pb">Item</span> <span class="ff-item svelte-pl04pb">Slot</span> <span class="ff-item svelte-pl04pb">Stats</span> <span class="ff-item svelte-pl04pb">Avg. Cost</span> <span class="ff-item svelte-pl04pb">Colors</span> <span class="ff-item svelte-pl04pb">Outline</span> <span class="ff-item svelte-pl04pb">Release</span>',i=w();for(let c=0;c<s.length;c+=1)s[c].c();_(t,"id","categories"),_(t,"class","svelte-pl04pb"),_(e,"class","gameboard ff-bg fd-col flex posrel border-tp svelte-pl04pb")},m(c,u){k(c,e,u),f(e,t),f(e,i);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(e,null);o=!0},p(c,[u]){if(u&15){l=ye(c[1].chosenItems.toReversed()),lt();for(let h=0;h<s.length;h+=1)s[h].r();s=dc(s,u,a,1,c,l,r,e,fc,mo,null,lo);for(let h=0;h<s.length;h+=1)s[h].a();at()}},i(c){if(!o){for(let u=0;u<l.length;u+=1)J(s[u]);o=!0}},o(c){for(let u=0;u<s.length;u+=1)de(s[u]);o=!1},d(c){c&&I(e);for(let u=0;u<s.length;u+=1)s[u].d()}}}function nn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function go(n,e){return n.filter(i=>e.includes(i)).length}function S_(n,e,t){let i,s,r;ke(n,ot,c=>t(1,i=c)),ke(n,kt,c=>t(2,s=c)),ke(n,zn,c=>t(3,r=c));let{dailyItemData:o}=e;function l(c,[u,h,d,p,m,v,b,D]){i.chosenItems.length==i.rowInfo.length+1&&ot.update(F=>({...F,rowInfo:[...F.rowInfo,[u,d?1:h?0:-1,p,v?1:m?0:-1,b,D]]}))}const a=()=>he(zn,r=!1,r);return n.$$set=c=>{"dailyItemData"in c&&t(0,o=c.dailyItemData)},[o,i,s,r,l,a]}class T_ extends st{constructor(e){super(),it(this,e,S_,I_,Je,{dailyItemData:0})}}function k_(n){let e,t,i,s;return{c(){e=g("div"),t=g("input"),_(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],_(t,"type","checkbox"),t.checked=n[1],_(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),mt(e,"unavailable",n[2]),un(e,"--s",`${n[0]}rem`)},m(r,o){k(r,e,o),f(e,t),i||(s=[Ae(t,"change",n[5]),Ae(t,"keydown",n[6])],i=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&mt(e,"unavailable",r[2]),o&1&&un(e,"--s",`${r[0]}rem`)},i:se,o:se,d(r){r&&I(e),i=!1,Qe(s)}}}function N_(n,e,t){let{size:i,checked:s=!1,disabled:r=!1,forced:o=!1}=e;const l=rc(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,i=u.size),"checked"in u&&t(1,s=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[i,s,r,o,l,a,c]}class R_ extends st{constructor(e){super(),it(this,e,N_,k_,Je,{size:0,checked:1,disabled:2,forced:3})}}function vo(n,e,t){const i=n.slice();i[16]=e[t];const s=i[7].chosenItems.find(function(...o){return n[14](i[16],...o)})!=null;return i[17]=s,i}function yo(n){let e,t,i,s=ye(n[3]),r=[];for(let o=0;o<s.length;o+=1)r[o]=bo(vo(n,s,o));return{c(){e=g("div");for(let o=0;o<r.length;o+=1)r[o].c();_(e,"class","itemList ff-bg flex fd-col svelte-1k366gl")},m(o,l){k(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[15](e),i=!0},p(o,l){if(l&680){s=ye(o[3]);let a;for(a=0;a<s.length;a+=1){const c=vo(o,s,a);r[a]?r[a].p(c,l):(r[a]=bo(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=s.length}},i(o){i||(o&&Pe(()=>{i&&(t||(t=we(e,bt,{duration:75},!0)),t.run(1))}),i=!0)},o(o){o&&(t||(t=we(e,bt,{duration:75},!1)),t.run(0)),i=!1},d(o){o&&I(e),qe(r,o),n[15](null),o&&t&&t.end()}}}function bo(n){let e,t,i,s,r,o=n[16].name+"",l,a,c,u,h;function d(){return n[13](n[17],n[16])}return{c(){e=g("button"),t=g("img"),s=w(),r=g("span"),l=G(o),a=w(),Ge(t.src,i=Ft+n[16].image)||_(t,"src",i),_(t,"alt",""),_(t,"class","svelte-1k366gl"),e.disabled=c=n[17],_(e,"class","listItem flex fai-center no-bg-change svelte-1k366gl"),mt(e,"unavailable",n[17])},m(p,m){k(p,e,m),f(e,t),f(e,s),f(e,r),f(r,l),f(e,a),u||(h=Ae(e,"click",d),u=!0)},p(p,m){n=p,m&8&&!Ge(t.src,i=Ft+n[16].image)&&_(t,"src",i),m&8&&o!==(o=n[16].name+"")&&me(l,o),m&136&&c!==(c=n[17])&&(e.disabled=c),m&136&&mt(e,"unavailable",n[17])},d(p){p&&I(e),u=!1,h()}}}function D_(n){let e,t,i,s,r,o,l=n[6].length&&n[3].length&&n[4]&&yo(n);return{c(){e=g("input"),i=w(),l&&l.c(),s=Nt(),e.disabled=n[5],_(e,"type","text"),_(e,"class","searcherInput svelte-1k366gl"),_(e,"placeholder",t=`Guess the item for game #${n[0]+1}...`)},m(a,c){k(a,e,c),n[11](e),k(a,i,c),l&&l.m(a,c),k(a,s,c),r||(o=[Ae(window,"mousedown",n[10]),Ae(e,"input",n[8]),Ae(e,"focusin",n[12])],r=!0)},p(a,[c]){c&32&&(e.disabled=a[5]),c&1&&t!==(t=`Guess the item for game #${a[0]+1}...`)&&_(e,"placeholder",t),a[6].length&&a[3].length&&a[4]?l?(l.p(a,c),c&88&&J(l,1)):(l=yo(a),l.c(),J(l,1),l.m(s.parentNode,s)):l&&(lt(),de(l,1,1,()=>{l=null}),at())},i(a){J(l)},o(a){de(l)},d(a){a&&(I(e),I(i),I(s)),n[11](null),l&&l.d(a),r=!1,Qe(o)}}}function A_(n,e,t){let i,s,r;ke(n,zn,C=>t(5,i=C)),ke(n,ks,C=>t(6,s=C)),ke(n,ot,C=>t(7,r=C));let{gameNumber:o}=e,l,a,c=[],u=!1;function h(){let C=l.value.toLowerCase();if(t(3,c=[]),!!C)for(let S of s)S.name.toLowerCase().includes(C)&&c.push(S)}function d(C){i||(ot.update(S=>({...S,chosenItems:[...S.chosenItems,C]})),t(1,l.value="",l),h())}const p=C=>{a&&C.target!=l&&!a.contains(C.target)&&t(4,u=!1)};function m(C){Ze[C?"unshift":"push"](()=>{l=C,t(1,l)})}const v=()=>t(4,u=!0),b=(C,S)=>{C||(d(S),he(zn,i=!0,i))},D=(C,S)=>S.name==C.name;function F(C){Ze[C?"unshift":"push"](()=>{a=C,t(2,a)})}return n.$$set=C=>{"gameNumber"in C&&t(0,o=C.gameNumber)},[o,l,a,c,u,i,s,r,h,d,p,m,v,b,D,F]}class P_ extends st{constructor(e){super(),it(this,e,A_,D_,Je,{gameNumber:0})}}function Co(n){let e,t,i;return{c(){e=g("span"),_(e,"id","HPFlash"),_(e,"class","svelte-9b9oo1")},m(s,r){k(s,e,r),i=!0},i(s){i||(t&&t.end(1),i=!0)},o(s){s&&(t=uc(e,bt,{duration:200})),i=!1},d(s){s&&I(e),s&&t&&t.end()}}}function O_(n){let e,t,i,s,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,h,d,p,m,v,b=n[4].hardMode?"You've lost your remaining armor.":"Your armor is protecting you.",D,F,C,S,T,q,R,x,X,Y,B,W=n[1]&&Co();function K(P){n[6](P)}let ee={};return n[0]!==void 0&&(ee.gameNumber=n[0]),X=new P_({props:ee}),Ze.push(()=>Mi(X,"gameNumber",K)),{c(){e=g("div"),t=g("div"),i=g("div"),s=g("div"),r=g("div"),o=g("span"),a=G(l),c=G("/600"),u=w(),h=g("button"),d=g("img"),m=w(),v=g("span"),D=G(b),F=w(),C=g("br"),S=G(`\r
                You can take `),T=G(n[2]),q=G(" hits at most!"),R=w(),W&&W.c(),x=w(),ct(X.$$.fragment),_(o,"class","svelte-9b9oo1"),_(r,"class","HPBackground svelte-9b9oo1"),un(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),_(s,"class","innerGameHP flex posrel svelte-9b9oo1"),_(i,"class","outerGameHP posrel svelte-9b9oo1"),Ge(d.src,p="misc/armor.svg")||_(d,"src",p),_(d,"alt","Armor"),_(d,"class","svelte-9b9oo1"),mt(d,"noArmor",n[4].hardMode),_(v,"class","tooltip svelte-9b9oo1"),_(v,"id","right"),_(h,"class","posrel br-1 svelte-9b9oo1"),_(h,"id","armorIcon"),_(t,"class","gameHPCont flex svelte-9b9oo1"),_(e,"class","currentGameInfo ff-bg flex fjc-center fai-center posrel border-tp br-1 svelte-9b9oo1")},m(P,H){k(P,e,H),f(e,t),f(t,i),f(i,s),f(s,r),f(r,o),f(o,a),f(o,c),f(t,u),f(t,h),f(h,d),f(h,m),f(h,v),f(v,D),f(v,F),f(v,C),f(v,S),f(v,T),f(v,q),f(e,R),W&&W.m(e,null),f(e,x),tt(X,e,null),B=!0},p(P,[H]){(!B||H&12)&&l!==(l=Math.round(600-P[3].chosenItems.length*(600/P[2]))+"")&&me(a,l),H&12&&un(r,"width",`${Math.floor(100*(P[2]-P[3].chosenItems.length)/P[2])}%`),(!B||H&16)&&mt(d,"noArmor",P[4].hardMode),(!B||H&16)&&b!==(b=P[4].hardMode?"You've lost your remaining armor.":"Your armor is protecting you.")&&me(D,b),(!B||H&4)&&me(T,P[2]),P[1]?W?H&2&&J(W,1):(W=Co(),W.c(),J(W,1),W.m(e,x)):W&&(lt(),de(W,1,1,()=>{W=null}),at());const E={};!Y&&H&1&&(Y=!0,E.gameNumber=P[0],Oi(()=>Y=!1)),X.$set(E)},i(P){B||(J(W),J(X.$$.fragment,P),B=!0)},o(P){de(W),de(X.$$.fragment,P),B=!1},d(P){P&&I(e),W&&W.d(),nt(X)}}}function M_(n,e,t){let i,s,r,o;ke(n,zn,u=>t(5,i=u)),ke(n,Ri,u=>t(2,s=u)),ke(n,ot,u=>t(3,r=u)),ke(n,kt,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&i&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,s,r,o,i,c]}class L_ extends st{constructor(e){super(),it(this,e,M_,O_,Je,{gameNumber:0})}}function wo(n,e,t){const i=n.slice();return i[8]=e[t],i}function Eo(n,e,t){const i=n.slice();return i[11]=e[t],i}function Io(n){let e,t=(n[11]===!0||n[11]===1?n[3].html.blue:n[11]===0?n[3].html.yellow:n[11]===!1||n[11]===-1?n[3].html.red:null)+"",i;return{c(){e=new Xo(!1),i=Nt(),e.a=i},m(s,r){e.m(t,s,r),k(s,i,r)},p(s,r){r&4&&t!==(t=(s[11]===!0||s[11]===1?s[3].html.blue:s[11]===0?s[3].html.yellow:s[11]===!1||s[11]===-1?s[3].html.red:null)+"")&&e.p(t)},d(s){s&&(I(i),e.d())}}}function So(n){let e,t,i=ye(n[8]),s=[];for(let r=0;r<i.length;r+=1)s[r]=Io(Eo(n,i,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=w(),t=g("br")},m(r,o){for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(r,o);k(r,e,o),k(r,t,o)},p(r,o){if(o&12){i=ye(r[8]);let l;for(l=0;l<i.length;l+=1){const a=Eo(r,i,l);s[l]?s[l].p(a,o):(s[l]=Io(a),s[l].c(),s[l].m(e.parentNode,e))}for(;l<s.length;l+=1)s[l].d(1);s.length=i.length}},d(r){r&&(I(e),I(t)),qe(s,r)}}}function F_(n){let e,t,i,s,r,o,l,a,c,u,h,d,p,m,v=n[1]?"Copied!":"Copy",b,D,F,C=ye(n[2].rowInfo.toReversed()),S=[];for(let T=0;T<C.length;T+=1)S[T]=So(wo(n,C,T));return{c(){e=g("div"),t=g("span"),t.textContent="Game Stats",i=w(),s=g("span"),r=G(n[4]),o=w(),l=g("br"),a=w();for(let T=0;T<S.length;T+=1)S[T].c();c=w(),u=g("button"),h=G(`Share Stats\r
        `),d=g("iconify-icon"),p=w(),m=g("span"),b=G(v),_(s,"class","smaller-fs"),We(d,"icon","ri:share-fill"),_(m,"class","tooltip"),_(m,"id","top"),_(u,"class","flex fai-center posrel border-tp br-1 smaller-fs svelte-14jqt1l"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1")},m(T,q){k(T,e,q),f(e,t),f(e,i),f(e,s),f(s,r),f(s,o),f(s,l),f(s,a);for(let R=0;R<S.length;R+=1)S[R]&&S[R].m(s,null);f(e,c),f(e,u),f(u,h),f(u,d),f(u,p),f(u,m),f(m,b),D||(F=Ae(u,"click",n[6]),D=!0)},p(T,[q]){if(q&12){C=ye(T[2].rowInfo.toReversed());let R;for(R=0;R<C.length;R+=1){const x=wo(T,C,R);S[R]?S[R].p(x,q):(S[R]=So(x),S[R].c(),S[R].m(s,null))}for(;R<S.length;R+=1)S[R].d(1);S.length=C.length}q&2&&v!==(v=T[1]?"Copied!":"Copy")&&me(b,v)},i:se,o:se,d(T){T&&I(e),qe(S,T),D=!1,F()}}}function x_(n,e,t){let i,s;ke(n,ot,h=>t(2,i=h)),ke(n,kt,h=>t(7,s=h));let{gameNumber:r}=e,o={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},l=`${s.hardMode?"(Nightmare)":""} Frontierdle #${r+1}`,a="",c=!1;setTimeout(()=>{for(let h of i.rowInfo.toReversed()){let d="";for(let p of h)d+=p===!0||p===1?o.js.blue:p===0?o.js.yellow:p===!1||p===-1?o.js.red:null;t(0,a+=d+`
`)}});const u=()=>{navigator.clipboard.writeText(`${l}
${a}
${location.origin+location.pathname}`),t(1,c=!0),setTimeout(()=>t(1,c=!1),1e3)};return n.$$set=h=>{"gameNumber"in h&&t(5,r=h.gameNumber)},[a,c,i,o,l,r,u]}class W_ extends st{constructor(e){super(),it(this,e,x_,F_,Je,{gameNumber:5})}}function To(n,e,t){const i=n.slice();return i[3]=e[t][0],i[4]=e[t][1],i[6]=t,i}function ko(n){let e,t,i=n[3]+"",s,r,o,l,a,c=n[4]+"",u,h;return{c(){e=g("div"),t=g("span"),s=G(i),r=w(),o=g("span"),o.innerHTML="",l=w(),a=g("span"),u=G(c),h=w(),_(t,"id","guessNum"),_(t,"class","svelte-mzhi8s"),_(o,"class","posrel border-tp svelte-mzhi8s"),_(o,"id","winsBar"),un(o,"width",`${n[4]*80/n[2]}%`),_(a,"class","smaller-fs svelte-mzhi8s"),_(a,"id","winsNum"),_(e,"class","flex fai-center svelte-mzhi8s")},m(d,p){k(d,e,p),f(e,t),f(t,s),f(e,r),f(e,o),f(e,l),f(e,a),f(a,u),f(e,h)},p(d,p){p&2&&i!==(i=d[3]+"")&&me(s,i),p&2&&un(o,"width",`${d[4]*80/d[2]}%`),p&2&&c!==(c=d[4]+"")&&me(u,c)},d(d){d&&I(e)}}}function B_(n){let e,t,i,s,r,o,l,a=n[1].gamesPlayed+"",c,u,h,d,p,m,v=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"",b,D,F,C,S,T,q,R=n[1].streak+"",x,X,Y,B,W,K,ee=n[1].maxStreak+"",P,H,E,U,L,fe,ce,ue,j,ne=ye(Object.entries(n[1].winInfo)),oe=[];for(let O=0;O<ne.length;O+=1)oe[O]=ko(To(n,ne,O));return{c(){e=g("div"),t=g("span"),t.textContent="Your Stats",i=w(),s=g("div"),r=g("div"),o=g("div"),l=g("span"),c=G(a),u=w(),h=g("span"),h.textContent="Games Played",d=w(),p=g("div"),m=g("span"),b=G(v),D=G("%"),F=w(),C=g("span"),C.textContent="Win Rate",S=w(),T=g("div"),q=g("span"),x=G(R),X=w(),Y=g("span"),Y.textContent="Current Streak",B=w(),W=g("div"),K=g("span"),P=G(ee),H=w(),E=g("span"),E.textContent="Max Streak",U=w(),L=g("span"),L.textContent="Win Distribution",fe=w(),ce=g("div");for(let O=0;O<oe.length;O+=1)oe[O].c();_(h,"id","statsTitle"),_(h,"class","svelte-mzhi8s"),_(o,"class","svelte-mzhi8s"),_(C,"id","statsTitle"),_(C,"class","svelte-mzhi8s"),_(p,"class","svelte-mzhi8s"),_(Y,"id","statsTitle"),_(Y,"class","svelte-mzhi8s"),_(T,"class","svelte-mzhi8s"),_(E,"id","statsTitle"),_(E,"class","svelte-mzhi8s"),_(W,"class","svelte-mzhi8s"),_(r,"class","flex svelte-mzhi8s"),_(r,"id","playerStatsInfo"),_(L,"class","smaller-fs"),_(ce,"class","flex fd-col smaller-fs svelte-mzhi8s"),_(ce,"id","distributionChart"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1"),_(e,"id","playerStats")},m(O,te){k(O,e,te),f(e,t),f(e,i),f(e,s),f(s,r),f(r,o),f(o,l),f(l,c),f(o,u),f(o,h),f(r,d),f(r,p),f(p,m),f(m,b),f(m,D),f(p,F),f(p,C),f(r,S),f(r,T),f(T,q),f(q,x),f(T,X),f(T,Y),f(r,B),f(r,W),f(W,K),f(K,P),f(W,H),f(W,E),f(e,U),f(e,L),f(e,fe),f(e,ce);for(let z=0;z<oe.length;z+=1)oe[z]&&oe[z].m(ce,null);j=!0},p(O,[te]){if(n=O,(!j||te&2)&&a!==(a=n[1].gamesPlayed+"")&&me(c,a),(!j||te&2)&&v!==(v=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"")&&me(b,v),(!j||te&2)&&R!==(R=n[1].streak+"")&&me(x,R),(!j||te&2)&&ee!==(ee=n[1].maxStreak+"")&&me(P,ee),te&6){ne=ye(Object.entries(n[1].winInfo));let z;for(z=0;z<ne.length;z+=1){const Z=To(n,ne,z);oe[z]?oe[z].p(Z,te):(oe[z]=ko(Z),oe[z].c(),oe[z].m(ce,null))}for(;z<oe.length;z+=1)oe[z].d(1);oe.length=ne.length}},i(O){j||(O&&Pe(()=>{j&&(ue||(ue=we(e,Le,{duration:n[0]?200:0},!0)),ue.run(1))}),j=!0)},o(O){O&&(ue||(ue=we(e,Le,{duration:n[0]?200:0},!1)),ue.run(0)),j=!1},d(O){O&&I(e),qe(oe,O),O&&ue&&ue.end()}}}function H_(n,e,t){let i;ke(n,ut,o=>t(1,i=o));let{prompted:s=!1}=e,r=Math.max(...Object.values(i.winInfo));return n.$$set=o=>{"prompted"in o&&t(0,s=o.prompted)},[s,i,r]}class Ua extends st{constructor(e){super(),it(this,e,H_,B_,Je,{prompted:0})}}function No(n,e,t){const i=n.slice();return i[5]=e[t],i}function U_(n){let e,t=ye(n[1]),i=[];for(let s=0;s<t.length;s+=1)i[s]=Ro(No(n,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=Nt()},m(s,r){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(s,r);k(s,e,r)},p(s,r){if(r&2){t=ye(s[1]);let o;for(o=0;o<t.length;o+=1){const l=No(s,t,o);i[o]?i[o].p(l,r):(i[o]=Ro(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&I(e),qe(i,s)}}}function $_(n){let e,t,i;return{c(){e=g("span"),t=G("— "),i=G(n[1]),_(e,"id","info"),_(e,"class","svelte-hhfk27")},m(s,r){k(s,e,r),f(e,t),f(e,i)},p(s,r){r&2&&me(i,s[1])},d(s){s&&I(e)}}}function Ro(n){let e,t,i=n[5]+"",s;return{c(){e=g("span"),t=G("— "),s=G(i),_(e,"id","info"),_(e,"class","svelte-hhfk27")},m(r,o){k(r,e,o),f(e,t),f(e,s)},p(r,o){o&2&&i!==(i=r[5]+"")&&me(s,i)},d(r){r&&I(e)}}}function G_(n){let e,t,i,s,r,o,l;function a(h,d){return typeof h[1]=="string"?$_:U_}let c=a(n),u=c(n);return{c(){e=g("li"),t=g("span"),i=G("v"),s=G(n[0]),r=w(),o=g("i"),o.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":v_[n[2][0]%10])+", 20"+n[2][2]}`,l=w(),u.c(),_(t,"id","version"),_(t,"class","svelte-hhfk27"),_(o,"id","date"),_(o,"class","svelte-hhfk27"),_(e,"class","flex fai-center svelte-hhfk27")},m(h,d){k(h,e,d),f(e,t),f(t,i),f(t,s),f(e,r),f(e,o),f(e,l),u.m(e,null)},p(h,[d]){d&1&&me(s,h[0]),c===(c=a(h))&&u?u.p(h,d):(u.d(1),u=c(h),u&&(u.c(),u.m(e,null)))},i:se,o:se,d(h){h&&I(e),u.d()}}}function z_(n,e,t){let{version:i,date:s,text:r}=e,o=s.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,i=a.version),"date"in a&&t(4,s=a.date),"text"in a&&t(1,r=a.text)},[i,r,o,l,s]}class j_ extends st{constructor(e){super(),it(this,e,z_,G_,Je,{version:0,date:4,text:1})}}function V_(n){let e,t,i,s,r;return s=new j_({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=g("span"),e.textContent="Changelog",t=w(),i=g("ul"),ct(s.$$.fragment),_(e,"class","title"),_(i,"class","flex fd-col smaller-fs svelte-1hn7lke"),_(i,"id","contents")},m(o,l){k(o,e,l),k(o,t,l),k(o,i,l),tt(s,i,null),r=!0},p:se,i(o){r||(J(s.$$.fragment,o),r=!0)},o(o){de(s.$$.fragment,o),r=!1},d(o){o&&(I(e),I(t),I(i)),nt(s)}}}class q_ extends st{constructor(e){super(),it(this,e,null,V_,Je,{})}}function Y_(n){let e,t,i;return{c(){e=g("span"),e.textContent="Credits",t=w(),i=g("div"),i.innerHTML=`<p class="flex fai-center svelte-19w41p3">This is a personal project. Contact me directly on
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
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,_(e,"class","title"),_(i,"class","smaller-fs"),_(i,"id","contents")},m(s,r){k(s,e,r),k(s,t,r),k(s,i,r)},p:se,i:se,o:se,d(s){s&&(I(e),I(t),I(i))}}}class K_ extends st{constructor(e){super(),it(this,e,null,Y_,Je,{})}}function Do(n,e,t){const i=n.slice();return i[1]=e[t],i}function Q_(n,e,t){const i=n.slice();return i[4]=e[t],i}function J_(n,e,t){const i=n.slice();return i[7]=e[t],i}function Ao(n,e,t){const i=n.slice();return i[10]=e[t],i}function X_(n,e,t){const i=n.slice();return i[13]=e[t],i}function Z_(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[13].charAt(0).toUpperCase()+n[13].slice(1)} `},m(t,i){k(t,e,i)},p:se,d(t){t&&I(e)}}}function Po(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[10]} `},m(t,i){k(t,e,i)},p:se,d(t){t&&I(e)}}}function ep(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[7]}`},m(t,i){k(t,e,i)},p:se,d(t){t&&I(e)}}}function tp(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[4]}`},m(t,i){k(t,e,i)},p:se,d(t){t&&I(e)}}}function Oo(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[1]} Update`},m(t,i){k(t,e,i)},p:se,d(t){t&&I(e)}}}function np(n){let e,t,i,s,r,o,l,a,c,u,h,d,p,m,v,b,D,F,C,S,T,q,R,x,X,Y,B,W,K,ee,P,H,E,U,L,fe,ce=ye(__),ue=[];for(let M=0;M<ce.length;M+=1)ue[M]=Z_(X_(n,ce,M));let j=ye(Object.values(Ni)),ne=[];for(let M=0;M<j.length;M+=1)ne[M]=Po(Ao(n,j,M));let oe=ye(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),O=[];for(let M=0;M<12;M+=1)O[M]=ep(J_(n,oe,M));let te=ye(["Black","Blue","Green","Purple","Red","White","Yellow"]),z=[];for(let M=0;M<7;M+=1)z[M]=tp(Q_(n,te,M));let Z=ye(Object.values(ki).slice(0,-1)),Te=[];for(let M=0;M<Z.length;M+=1)Te[M]=Oo(Do(n,Z,M));return{c(){e=g("span"),e.textContent="Help",t=w(),i=g("div"),s=g("p"),s.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece from\r
        Fantastic Frontier, which changes every day.`,r=w(),o=g("div"),o.innerHTML=`<span class="title">Color Guide</span> <div class="flex svelte-40lcrp" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-40lcrp" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-40lcrp" id="partial">Partial
                <span class="bgInfo svelte-40lcrp">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-40lcrp" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-40lcrp" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,l=w(),a=g("span"),a.textContent="Categories",c=w(),u=g("p"),h=g("span"),d=g("b"),d.textContent="Slot:",p=w(),m=g("ul");for(let M=0;M<ue.length;M+=1)ue[M].c();v=w(),b=g("span"),D=g("b"),D.textContent="Stats:",F=w(),C=g("ul");for(let M=0;M<ne.length;M+=1)ne[M].c();S=w(),T=g("span"),T.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item can be purchased at.
                &quot;Unpurchasable&quot; if it cannot be purchased, equivalent to 0 for
                the game&#39;s purposes.</span>`,q=w(),R=g("span"),x=g("b"),x.textContent="Colors:",X=w(),Y=g("ul");for(let M=0;M<12;M+=1)O[M].c();B=w(),W=g("span"),K=g("b"),K.textContent="Outline:",ee=w(),P=g("ul");for(let M=0;M<7;M+=1)z[M].c();H=w(),E=g("span"),U=g("b"),U.textContent="Release:",L=w(),fe=g("ul");for(let M=0;M<Te.length;M+=1)Te[M].c();_(e,"class","title"),_(o,"class","flex fd-col fai-center"),_(a,"class","title"),_(d,"class","svelte-40lcrp"),_(m,"class","svelte-40lcrp"),_(h,"class","flex fd-col list svelte-40lcrp"),_(D,"class","svelte-40lcrp"),_(C,"class","svelte-40lcrp"),_(b,"class","flex fd-col list svelte-40lcrp"),_(T,"class","flex fd-col limit-width svelte-40lcrp"),_(x,"class","svelte-40lcrp"),_(Y,"class","svelte-40lcrp"),_(R,"class","flex fd-col list svelte-40lcrp"),_(K,"class","svelte-40lcrp"),_(P,"class","svelte-40lcrp"),_(W,"class","flex fd-col list svelte-40lcrp"),_(U,"class","svelte-40lcrp"),_(fe,"class","svelte-40lcrp"),_(E,"class","flex fd-col list svelte-40lcrp"),_(u,"class","flex fjc-center smaller-fs svelte-40lcrp"),_(u,"id","categories"),_(i,"class","flex fd-col smaller-fs svelte-40lcrp"),_(i,"id","contents")},m(M,ge){k(M,e,ge),k(M,t,ge),k(M,i,ge),f(i,s),f(i,r),f(i,o),f(i,l),f(i,a),f(i,c),f(i,u),f(u,h),f(h,d),f(h,p),f(h,m);for(let A=0;A<ue.length;A+=1)ue[A]&&ue[A].m(m,null);f(u,v),f(u,b),f(b,D),f(b,F),f(b,C);for(let A=0;A<ne.length;A+=1)ne[A]&&ne[A].m(C,null);f(u,S),f(u,T),f(u,q),f(u,R),f(R,x),f(R,X),f(R,Y);for(let A=0;A<12;A+=1)O[A]&&O[A].m(Y,null);f(u,B),f(u,W),f(W,K),f(W,ee),f(W,P);for(let A=0;A<7;A+=1)z[A]&&z[A].m(P,null);f(u,H),f(u,E),f(E,U),f(E,L),f(E,fe);for(let A=0;A<Te.length;A+=1)Te[A]&&Te[A].m(fe,null)},p(M,[ge]){if(ge&0){j=ye(Object.values(Ni));let A;for(A=0;A<j.length;A+=1){const le=Ao(M,j,A);ne[A]?ne[A].p(le,ge):(ne[A]=Po(le),ne[A].c(),ne[A].m(C,null))}for(;A<ne.length;A+=1)ne[A].d(1);ne.length=j.length}if(ge&0){Z=ye(Object.values(ki).slice(0,-1));let A;for(A=0;A<Z.length;A+=1){const le=Do(M,Z,A);Te[A]?Te[A].p(le,ge):(Te[A]=Oo(le),Te[A].c(),Te[A].m(fe,null))}for(;A<Te.length;A+=1)Te[A].d(1);Te.length=Z.length}},i:se,o:se,d(M){M&&(I(e),I(t),I(i)),qe(ue,M),qe(ne,M),qe(O,M),qe(z,M),qe(Te,M)}}}function ip(n){return[]}class sp extends st{constructor(e){super(),it(this,e,ip,np,Je,{})}}function rp(n){let e,t,i;return{c(){e=g("span"),e.textContent="Frontierdle Policy",t=w(),i=g("div"),i.innerHTML=`<span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,_(e,"class","title"),_(i,"class","flex fd-col smaller-fs svelte-932r7h"),_(i,"id","contents")},m(s,r){k(s,e,r),k(s,t,r),k(s,i,r)},p:se,i:se,o:se,d(s){s&&(I(e),I(t),I(i))}}}class op extends st{constructor(e){super(),it(this,e,null,rp,Je,{})}}function Mo(n){let e,t,i;return{c(){e=g("iconify-icon"),We(e,"icon","uil:exclamation"),We(e,"id","unseen"),We(e,"class","svelte-1aydprt")},m(s,r){k(s,e,r),i=!0},i(s){i||(s&&Pe(()=>{i&&(t||(t=we(e,bt,{duration:150},!0)),t.run(1))}),i=!0)},o(s){s&&(t||(t=we(e,bt,{duration:150},!1)),t.run(0)),i=!1},d(s){s&&I(e),s&&t&&t.end()}}}function lp(n){let e,t,i,s,r,o,l,a,c,u,h,d,p,m,v,b,D,F,C=!n[2]&&Mo();return{c(){e=g("button"),e.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',t=w(),i=g("button"),i.innerHTML=`<a href="https://ko-fi.com/xt8ss" target="_blank" class="svelte-1aydprt">Support me
        <img src="misc/kofi-badge.png" alt="" class="svelte-1aydprt"/></a>`,s=w(),r=g("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=w(),l=g("button"),a=g("iconify-icon"),c=w(),u=g("span"),u.textContent="Changelog",h=w(),C&&C.c(),d=w(),p=g("button"),p.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',m=w(),v=g("span"),b=G(n[0]),_(e,"class","info p-1 svelte-1aydprt"),_(e,"id","credits"),_(i,"class","info p-1 svelte-1aydprt"),_(i,"id","donate"),_(r,"class","info p-1 svelte-1aydprt"),_(r,"id","help"),We(a,"icon","octicon:log-16"),_(u,"class","tooltip"),_(u,"id","right"),_(l,"class","info svelte-1aydprt"),_(l,"id","changelog"),_(p,"class","info p-1 svelte-1aydprt"),_(p,"id","policy"),_(v,"class","info svelte-1aydprt"),_(v,"id","version")},m(S,T){k(S,e,T),k(S,t,T),k(S,i,T),k(S,s,T),k(S,r,T),k(S,o,T),k(S,l,T),f(l,a),f(l,c),f(l,u),f(l,h),C&&C.m(l,null),k(S,d,T),k(S,p,T),k(S,m,T),k(S,v,T),f(v,b),D||(F=[Ae(e,"click",n[3]),Ae(r,"click",n[4]),Ae(l,"click",n[5]),Ae(p,"click",n[6])],D=!0)},p(S,[T]){S[2]?C&&(lt(),de(C,1,1,()=>{C=null}),at()):C?T&4&&J(C,1):(C=Mo(),C.c(),J(C,1),C.m(l,null)),T&1&&me(b,S[0])},i(S){J(C)},o(S){de(C)},d(S){S&&(I(e),I(t),I(i),I(s),I(r),I(o),I(l),I(d),I(p),I(m),I(v)),C&&C.d(),D=!1,Qe(F)}}}function ap(n,e,t){let i,s;ke(n,Xe,u=>t(1,i=u)),ke(n,Di,u=>t(2,s=u));let{version:r}=e;const o=u=>{tn(u),he(Xe,i.component=K_,i)},l=u=>{tn(u),he(Xe,i.component=sp,i)},a=u=>{tn(u),he(Xe,i.component=q_,i),he(Di,s=!0,s)},c=u=>{tn(u),he(Xe,i.component=op,i)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,i,s,o,l,a,c]}class cp extends st{constructor(e){super(),it(this,e,ap,lp,Je,{version:0})}}const{document:ri}=qa;function Lo(n,e,t){const i=n.slice();return i[59]=e[t],i}function Fo(n,e,t){const i=n.slice();return i[59]=e[t],i}function xo(n){let e;return{c(){e=g("link"),_(e,"rel","preload"),_(e,"as","image"),_(e,"href",n[59])},m(t,i){k(t,e,i)},p:se,d(t){t&&I(e)}}}function Wo(n){let e;return{c(){e=g("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,i){k(t,e,i)},d(t){t&&I(e)}}}function Bo(n){let e,t;return{c(){e=g("img"),_(e,"class","background svelte-247i5i"),Ge(e.src,t=n[59])||_(e,"src",t),_(e,"alt",""),mt(e,"active",n[24].indexOf(n[59])==n[20])},m(i,s){k(i,e,s)},p(i,s){s[0]&17825792&&mt(e,"active",i[24].indexOf(i[59])==i[20])},d(i){i&&I(e)}}}function Ho(n){let e,t,i=Math.floor(n[22][n[2]]*100)+"",s,r,o,l;return{c(){e=g("span"),t=G("Zoom: "),s=G(i),r=g("b"),r.textContent="%",_(e,"class","info svelte-247i5i"),_(e,"id","zoomLevel")},m(a,c){k(a,e,c),f(e,t),f(e,s),f(e,r),l=!0},p(a,c){(!l||c[0]&4)&&i!==(i=Math.floor(a[22][a[2]]*100)+"")&&me(s,i)},i(a){l||(a&&Pe(()=>{l&&(o||(o=we(e,bt,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=we(e,bt,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&I(e),a&&o&&o.end()}}}function Uo(n){let e,t,i,s,r,o,l,a,c=n[7].muted?"Muted":"Unmuted",u,h,d,p,m,v,b,D,F,C,S,T=Ai(n[3],n[4],n[5])+"",q,R,x,X,Y,B,W,K,ee,P,H,E,U,L,fe,ce,ue,j,ne,oe,O,te;P=new R_({props:{size:"5",checked:n[7].hardMode,disabled:n[8].chosenItems.length!=0}}),P.$on("toggle",n[36]);let z=!n[8].gameWin&&!n[8].gameOver&&$o(n),Z=(n[8].gameWin||n[8].gameOver)&&Go(n);function Te($){n[39]($)}let M={};n[13]!==void 0&&(M.dailyItemData=n[13]),L=new T_({props:M}),Ze.push(()=>Mi(L,"dailyItemData",Te));let ge=n[14]&&zo(n),A=n[21].component&&n[21].complete&&jo(n),le=n[21].component&&!n[21].complete&&Vo(n);return{c(){e=g("main"),t=g("div"),i=g("div"),s=g("button"),r=g("iconify-icon"),l=w(),a=g("span"),u=G(c),h=w(),d=g("button"),p=g("img"),v=w(),b=g("span"),D=G(`Next item available in...
                    `),F=g("br"),C=w(),S=new Xo(!1),q=w(),R=g("div"),x=g("button"),x.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-247i5i"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',X=w(),Y=g("div"),B=g("button"),B.innerHTML=`<iconify-icon icon="eva:info-outline" id="info" class="svelte-247i5i"></iconify-icon> <span class="tooltip svelte-247i5i" id="bottom">No armor (more damage taken)
                    <br/>
                    No stat / avg. cost / color clues</span>`,W=w(),K=g("span"),K.textContent="Nightmare Mode",ee=w(),ct(P.$$.fragment),H=w(),z&&z.c(),E=w(),Z&&Z.c(),U=w(),ct(L.$$.fragment),ce=w(),ge&&ge.c(),ue=w(),A&&A.c(),j=w(),le&&le.c(),ne=Nt(),We(r,"icon",o="f7:speaker-"+(n[7].muted?"slash":"2")+"-fill"),We(r,"class","svelte-247i5i"),_(a,"class","tooltip"),_(a,"id","bottom"),_(s,"class","flex light-hover svelte-247i5i"),_(i,"class","iconToggle ff-bg posrel border-tp br-1 svelte-247i5i"),Ge(p.src,m="frontierdle.svg")||_(p,"src",m),_(p,"alt","Frontierdle"),_(p,"class","svelte-247i5i"),S.a=null,_(b,"class","tooltip svelte-247i5i"),_(b,"id","bottom"),_(d,"class","iconCont ff-bg posrel border-tp br-1 no-bg-change svelte-247i5i"),_(x,"class","flex posrel light-hover svelte-247i5i"),_(R,"class","iconToggle ff-bg border-tp br-1 svelte-247i5i"),_(t,"class","upperMenu flex fai-center svelte-247i5i"),_(B,"class","flex posrel no-bg-change"),_(Y,"class","hardModeCont ff-bg flex fai-center border-tp br-1 svelte-247i5i"),_(e,"class","flex fd-col fai-center posrel svelte-247i5i")},m($,ve){k($,e,ve),f(e,t),f(t,i),f(i,s),f(s,r),f(s,l),f(s,a),f(a,u),f(t,h),f(t,d),f(d,p),f(d,v),f(d,b),f(b,D),f(b,F),f(b,C),S.m(T,b),f(t,q),f(t,R),f(R,x),f(e,X),f(e,Y),f(Y,B),f(Y,W),f(Y,K),f(Y,ee),tt(P,Y,null),f(e,H),z&&z.m(e,null),f(e,E),Z&&Z.m(e,null),f(e,U),tt(L,e,null),f(e,ce),ge&&ge.m(e,null),k($,ue,ve),A&&A.m($,ve),k($,j,ve),le&&le.m($,ve),k($,ne,ve),oe=!0,O||(te=[Ae(s,"click",n[34]),Ae(x,"click",n[35])],O=!0)},p($,ve){(!oe||ve[0]&128&&o!==(o="f7:speaker-"+($[7].muted?"slash":"2")+"-fill"))&&We(r,"icon",o),(!oe||ve[0]&128)&&c!==(c=$[7].muted?"Muted":"Unmuted")&&me(u,c),(!oe||ve[0]&56)&&T!==(T=Ai($[3],$[4],$[5])+"")&&S.p(T);const gt={};ve[0]&128&&(gt.checked=$[7].hardMode),ve[0]&256&&(gt.disabled=$[8].chosenItems.length!=0),P.$set(gt),!$[8].gameWin&&!$[8].gameOver?z?(z.p($,ve),ve[0]&256&&J(z,1)):(z=$o($),z.c(),J(z,1),z.m(e,E)):z&&(lt(),de(z,1,1,()=>{z=null}),at()),$[8].gameWin||$[8].gameOver?Z?(Z.p($,ve),ve[0]&256&&J(Z,1)):(Z=Go($),Z.c(),J(Z,1),Z.m(e,U)):Z&&(lt(),de(Z,1,1,()=>{Z=null}),at());const pe={};!fe&&ve[0]&8192&&(fe=!0,pe.dailyItemData=$[13],Oi(()=>fe=!1)),L.$set(pe),$[14]?ge?ge.p($,ve):(ge=zo($),ge.c(),ge.m(e,null)):ge&&(ge.d(1),ge=null),$[21].component&&$[21].complete?A?(A.p($,ve),ve[0]&2097152&&J(A,1)):(A=jo($),A.c(),J(A,1),A.m(j.parentNode,j)):A&&(lt(),de(A,1,1,()=>{A=null}),at()),$[21].component&&!$[21].complete?le?(le.p($,ve),ve[0]&2097152&&J(le,1)):(le=Vo($),le.c(),J(le,1),le.m(ne.parentNode,ne)):le&&(lt(),de(le,1,1,()=>{le=null}),at())},i($){oe||(J(P.$$.fragment,$),J(z),J(Z),J(L.$$.fragment,$),J(A),J(le),oe=!0)},o($){de(P.$$.fragment,$),de(z),de(Z),de(L.$$.fragment,$),de(A),de(le),oe=!1},d($){$&&(I(e),I(ue),I(j),I(ne)),nt(P),z&&z.d(),Z&&Z.d(),nt(L),ge&&ge.d(),A&&A.d($),le&&le.d($),O=!1,Qe(te)}}}function $o(n){let e,t,i;function s(o){n[37](o)}let r={};return n[19]!==void 0&&(r.gameNumber=n[19]),e=new L_({props:r}),Ze.push(()=>Mi(e,"gameNumber",s)),{c(){ct(e.$$.fragment)},m(o,l){tt(e,o,l),i=!0},p(o,l){const a={};!t&&l[0]&524288&&(t=!0,a.gameNumber=o[19],Oi(()=>t=!1)),e.$set(a)},i(o){i||(J(e.$$.fragment,o),i=!0)},o(o){de(e.$$.fragment,o),i=!1},d(o){nt(e,o)}}}function Go(n){let e,t,i=n[8].gameWin?"Fantastic!":"Farewell...",s,r,o,l,a,c=n[8].gameWin?"won":"lost",u,h,d,p,m,v,b,D,F,C,S,T,q,R,x=n[13].name+"",X,Y,B,W,K,ee,P,H=Ai(n[3],n[4],n[5])+"",E,U,L,fe,ce,ue,j;function ne(O){n[38](O)}let oe={};return n[19]!==void 0&&(oe.gameNumber=n[19]),L=new W_({props:oe}),Ze.push(()=>Mi(L,"gameNumber",ne)),ue=new Ua({}),{c(){e=g("div"),t=g("span"),s=G(i),r=w(),o=g("img"),a=G(`
                    You `),u=G(c),h=G("!"),d=w(),p=g("span"),p.textContent="Today's item was...",m=w(),v=g("div"),b=g("a"),D=g("img"),C=w(),S=g("iconify-icon"),q=w(),R=g("span"),X=G(x),Y=w(),B=g("span"),W=G(`Next item available in...
                    `),K=g("br"),ee=w(),P=g("span"),U=w(),ct(L.$$.fragment),ce=w(),ct(ue.$$.fragment),Ge(o.src,l=n[8].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||_(o,"src",l),_(o,"id","gameFinishIcon"),_(o,"alt",""),_(o,"class","svelte-247i5i"),_(t,"class","flex fai-center svelte-247i5i"),_(t,"id","gameFinishMessage"),_(p,"class","smaller-fs"),Ge(D.src,F=Ft+n[13].image)||_(D,"src",F),_(D,"alt",""),_(D,"class","svelte-247i5i"),We(S,"icon","tabler:link"),We(S,"class","svelte-247i5i"),_(b,"class","flex fjc-center fai-center svelte-247i5i"),_(b,"href",T=pn+n[13].link),_(b,"target","_blank"),_(v,"class","itemImg ff-item flex svelte-247i5i"),_(v,"id","dailyItemImg"),_(R,"class","ff-item itemName svelte-247i5i"),_(R,"id","dailyItemName"),_(P,"class","ff-item svelte-247i5i"),_(P,"id","nextItemTime"),_(B,"class","flex fd-col svelte-247i5i"),_(B,"id","nextItemCont"),_(e,"class","gameFinishCont ff-bg flex fd-col fai-center border-tp br-1 svelte-247i5i")},m(O,te){k(O,e,te),f(e,t),f(t,s),f(t,r),f(t,o),f(t,a),f(t,u),f(t,h),f(e,d),f(e,p),f(e,m),f(e,v),f(v,b),f(b,D),f(b,C),f(b,S),f(e,q),f(e,R),f(R,X),f(e,Y),f(e,B),f(B,W),f(B,K),f(B,ee),f(B,P),P.innerHTML=H,k(O,U,te),tt(L,O,te),k(O,ce,te),tt(ue,O,te),j=!0},p(O,te){(!j||te[0]&256)&&i!==(i=O[8].gameWin?"Fantastic!":"Farewell...")&&me(s,i),(!j||te[0]&256&&!Ge(o.src,l=O[8].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&_(o,"src",l),(!j||te[0]&256)&&c!==(c=O[8].gameWin?"won":"lost")&&me(u,c),(!j||te[0]&8192&&!Ge(D.src,F=Ft+O[13].image))&&_(D,"src",F),(!j||te[0]&8192&&T!==(T=pn+O[13].link))&&_(b,"href",T),(!j||te[0]&8192)&&x!==(x=O[13].name+"")&&me(X,x),(!j||te[0]&56)&&H!==(H=Ai(O[3],O[4],O[5])+"")&&(P.innerHTML=H);const z={};!fe&&te[0]&524288&&(fe=!0,z.gameNumber=O[19],Oi(()=>fe=!1)),L.$set(z)},i(O){j||(O&&Pe(()=>{j&&(E||(E=we(e,bt,{duration:150},!0)),E.run(1))}),J(L.$$.fragment,O),J(ue.$$.fragment,O),j=!0)},o(O){O&&(E||(E=we(e,bt,{duration:150},!1)),E.run(0)),de(L.$$.fragment,O),de(ue.$$.fragment,O),j=!1},d(O){O&&(I(e),I(U),I(ce)),O&&E&&E.end(),nt(L,O),nt(ue,O)}}}function zo(n){let e,t,i,s,r,o,l,a,c,u,h,d=n[14].name+"",p;return{c(){e=g("div"),t=G(`Yesterday's item was...
                `),i=g("div"),s=g("a"),r=g("img"),l=w(),a=g("iconify-icon"),u=w(),h=g("span"),p=G(d),Ge(r.src,o=Ft+n[14].image)||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-247i5i"),We(a,"icon","tabler:link"),We(a,"class","svelte-247i5i"),_(s,"class","flex fjc-center fai-center svelte-247i5i"),_(s,"href",c=pn+n[14].link),_(s,"target","_blank"),_(i,"class","itemImg ff-item flex svelte-247i5i"),_(i,"id","previousItemImg"),_(h,"class","ff-item itemName svelte-247i5i"),_(h,"id","previousItemName"),_(e,"class","previousItemCont ff-bg flex fd-col fai-center border-tp br-1 svelte-247i5i")},m(m,v){k(m,e,v),f(e,t),f(e,i),f(i,s),f(s,r),f(s,l),f(s,a),f(e,u),f(e,h),f(h,p)},p(m,v){v[0]&16384&&!Ge(r.src,o=Ft+m[14].image)&&_(r,"src",o),v[0]&16384&&c!==(c=pn+m[14].link)&&_(s,"href",c),v[0]&16384&&d!==(d=m[14].name+"")&&me(p,d)},d(m){m&&I(e)}}}function jo(n){let e,t,i,s,r;var o=n[21].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=li(o,l())),{c(){e=g("div"),t&&ct(t.$$.fragment),_(e,"class","promptCont")},m(a,c){k(a,e,c),t&&tt(t,e,null),n[40](e),i=!0,s||(r=Ae(e,"click",n[41]),s=!0)},p(a,c){if(c[0]&2097152&&o!==(o=a[21].component)){if(t){lt();const u=t;de(u.$$.fragment,1,0,()=>{nt(u,1)}),at()}o?(t=li(o,l()),ct(t.$$.fragment),J(t.$$.fragment,1),tt(t,e,null)):t=null}},i(a){i||(t&&J(t.$$.fragment,a),i=!0)},o(a){t&&de(t.$$.fragment,a),i=!1},d(a){a&&I(e),t&&nt(t),n[40](null),s=!1,r()}}}function Vo(n){let e,t,i,s,r,o,l;var a=n[21].component;function c(u,h){return{props:{prompted:!0}}}return a&&(i=li(a,c())),{c(){e=g("div"),t=g("div"),i&&ct(i.$$.fragment),_(t,"class","flex fd-col border-tp br-1"),_(e,"class","promptCont")},m(u,h){k(u,e,h),f(e,t),i&&tt(i,t,null),n[42](e),r=!0,o||(l=Ae(e,"click",n[43]),o=!0)},p(u,h){if(h[0]&2097152&&a!==(a=u[21].component)){if(i){lt();const d=i;de(d.$$.fragment,1,0,()=>{nt(d,1)}),at()}a?(i=li(a,c()),ct(i.$$.fragment),J(i.$$.fragment,1),tt(i,t,null)):i=null}},i(u){r||(i&&J(i.$$.fragment,u),u&&Pe(()=>{r&&(s||(s=we(t,Le,{duration:200},!0)),s.run(1))}),r=!0)},o(u){i&&de(i.$$.fragment,u),u&&(s||(s=we(t,Le,{duration:200},!1)),s.run(0)),r=!1},d(u){u&&I(e),i&&nt(i),u&&s&&s.end(),n[42](null),o=!1,l()}}}function up(n){let e,t,i,s,r,o,l,a,c,u,h,d,p,m,v,b,D,F,C,S,T,q,R,x,X;Pe(n[30]);let Y=ye(n[24]),B=[];for(let E=0;E<Y.length;E+=1)B[E]=xo(Fo(n,Y,E));let W=n[21].component&&Wo(),K=ye(n[24]),ee=[];for(let E=0;E<K.length;E+=1)ee[E]=Bo(Lo(n,K,E));let P=n[12]&&Ho(n);S=new cp({props:{version:Ns}});let H=n[10]&&n[9]&&n[11]&&Uo(n);return{c(){for(let E=0;E<B.length;E+=1)B[E].c();e=Nt(),W&&W.c(),t=Nt(),i=w(),s=g("div"),r=g("audio"),a=w(),c=g("audio"),d=w(),p=g("audio"),b=w(),D=g("div");for(let E=0;E<ee.length;E+=1)ee[E].c();F=w(),P&&P.c(),C=w(),ct(S.$$.fragment),T=w(),H&&H.c(),q=Nt(),Ge(r.src,o="audio/lucky.mp3")||_(r,"src",o),r.muted=l=n[7].muted,Ge(c.src,u="audio/farewell.mp3")||_(c,"src",u),c.muted=h=n[7].muted,Ge(p.src,m="audio/heDidItAgain.mp3")||_(p,"src",m),p.muted=v=n[7].muted,_(D,"class","backgrounds")},m(E,U){for(let L=0;L<B.length;L+=1)B[L]&&B[L].m(ri.head,null);f(ri.head,e),W&&W.m(ri.head,null),f(ri.head,t),k(E,i,U),k(E,s,U),f(s,r),n[31](r),f(s,a),f(s,c),n[32](c),f(s,d),f(s,p),n[33](p),k(E,b,U),k(E,D,U);for(let L=0;L<ee.length;L+=1)ee[L]&&ee[L].m(D,null);k(E,F,U),P&&P.m(E,U),k(E,C,U),tt(S,E,U),k(E,T,U),H&&H.m(E,U),k(E,q,U),R=!0,x||(X=[Ae(window,"storage",n[27]),Ae(window,"wheel",n[28],{passive:!1}),Ae(window,"keydown",n[29]),Ae(window,"resize",n[30])],x=!0)},p(E,U){if(U[0]&16777216){Y=ye(E[24]);let L;for(L=0;L<Y.length;L+=1){const fe=Fo(E,Y,L);B[L]?B[L].p(fe,U):(B[L]=xo(fe),B[L].c(),B[L].m(e.parentNode,e))}for(;L<B.length;L+=1)B[L].d(1);B.length=Y.length}if(E[21].component?W||(W=Wo(),W.c(),W.m(t.parentNode,t)):W&&(W.d(1),W=null),(!R||U[0]&128&&l!==(l=E[7].muted))&&(r.muted=l),(!R||U[0]&128&&h!==(h=E[7].muted))&&(c.muted=h),(!R||U[0]&128&&v!==(v=E[7].muted))&&(p.muted=v),U[0]&17825792){K=ye(E[24]);let L;for(L=0;L<K.length;L+=1){const fe=Lo(E,K,L);ee[L]?ee[L].p(fe,U):(ee[L]=Bo(fe),ee[L].c(),ee[L].m(D,null))}for(;L<ee.length;L+=1)ee[L].d(1);ee.length=K.length}E[12]?P?(P.p(E,U),U[0]&4096&&J(P,1)):(P=Ho(E),P.c(),J(P,1),P.m(C.parentNode,C)):P&&(lt(),de(P,1,1,()=>{P=null}),at()),E[10]&&E[9]&&E[11]?H?(H.p(E,U),U[0]&3584&&J(H,1)):(H=Uo(E),H.c(),J(H,1),H.m(q.parentNode,q)):H&&(lt(),de(H,1,1,()=>{H=null}),at())},i(E){R||(J(P),J(S.$$.fragment,E),J(H),R=!0)},o(E){de(P),de(S.$$.fragment,E),de(H),R=!1},d(E){E&&(I(i),I(s),I(b),I(D),I(F),I(C),I(T),I(q)),qe(B,E),I(e),W&&W.d(E),I(t),n[31](null),n[32](null),n[33](null),qe(ee,E),P&&P.d(E),nt(S,E),H&&H.d(E),x=!1,Qe(X)}}}let Ns="v1.0.0";function Ai(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function hp(n,e,t){let i,s,r,o,l,a,c,u;ke(n,ut,y=>t(6,i=y)),ke(n,kt,y=>t(7,s=y)),ke(n,Ri,y=>t(26,r=y)),ke(n,ot,y=>t(8,o=y)),ke(n,oo,y=>t(9,l=y)),ke(n,ks,y=>t(10,a=y)),ke(n,Di,y=>t(49,c=y)),ke(n,Xe,y=>t(21,u=y));let h,d,p=!1,m=7,v=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],b=!1,D,F,C,S,T,q,R,x;sc(()=>t(11,p=!0));function X(){D=setTimeout(()=>{t(12,b=!1)},750)}function Y(){clearTimeout(D),t(12,b=!0),X()}let B=19814,W,K,ee=58,P=58,H=58,E;function U(){clearInterval(E),setTimeout(()=>{W=Date.now()/1e3/60/60/24,t(19,K=Math.floor(W)-B),Qd(Jd(Kd(p_))).then(y=>{he(oo,l=y.val().rngItemList[K],l),t(25,C=y.val().rngItemList[K-1])}),E=setInterval(()=>{let y=Date.now(),Ne=(B+K+1)*24*60*60*1e3-y;t(3,ee=Math.floor(Ne/1e3/60/60)),t(4,P=Math.floor(Ne%(1e3*60*60)/(1e3*60))),t(5,H=Math.floor(Ne%(1e3*60)/1e3))},1e3)},1e3)}U(),fetch("https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/itemData.json").then(async y=>{if(y.status!=200){console.error(`Failed to fetch item data!
Status: ${y.status}`);return}let De=await y.json();he(ks,a=De.sort((Ne,St)=>Ne.name.toLowerCase().localeCompare(St.name.toLowerCase())),a)});let fe=[],ce=[],ue,j,ne=9;for(let y=0;y<ne;y++)fe.push(`backgrounds/BG${y}.jpg`);function oe(y){j=Math.floor(Math.random()*y.length)}oe(fe);function O(){t(20,ue=j),ce.push(j)}O(),function y(){setTimeout(()=>{if(oe(fe),!ce.length)O();else if(ce.length>3&&(ce=ce.slice(1)),!ce.includes(j))O();else{let De=[...Array(ne).keys()].filter(Ne=>!ce.includes(Ne));oe(De),O()}document.visibilityState=="visible"&&y()},45e3)}(),localStorage.getItem("fd-version")!=Ns&&(he(Di,c=!1,c),localStorage.setItem("fd-version",Ns));function te(){he(ot,o.gameWin=!0,o),he(ut,i.gamesPlayed++,i),he(ut,i.gamesWon++,i),he(ut,i.streak++,i),he(ut,i.winInfo[o.chosenItems.length]++,i),(i.streak>=3?x:q).play()}function z(){he(ot,o.gameOver=!0,o),he(ut,i.gamesPlayed++,i),he(ut,i.streak=0,i),R.play()}const Z=y=>{y.key=="fd-currentGameData"?y.url.includes("ls=true")?he(ot,o=JSON.parse(y.newValue),o):localStorage.setItem("fd-currentGameData",JSON.stringify(o)):y.key=="fd-settings"?y.url.includes("ls=true")?he(kt,s=JSON.parse(y.newValue),s):localStorage.setItem("fd-settings",JSON.stringify(s)):y.key=="fd-playerStats"&&(y.url.includes("ls=true")?he(ut,i=JSON.parse(y.newValue),i):localStorage.setItem("fd-playerStats",JSON.stringify(i)))},Te=y=>{let De=y.wheelDeltaY;if(y.ctrlKey){if(y.preventDefault(),v[m]==.2&&De<0||v[m]==5&&De>0)return;De>0?t(2,m++,m):t(2,m--,m),Y()}},M=y=>{let De=["Enter"," ","Escape"];y.ctrlKey&&(y.key=="-"||y.key=="+"||y.code=="Equal"||y.key=="0")&&(y.preventDefault(),(y.key=="+"||y.code=="Equal")&&v[m]!=5?t(2,m++,m):y.key=="-"&&v[m]!=.2?t(2,m--,m):y.key=="0"&&v[m]!=1&&t(2,m=7),Y()),u.component&&T&&!y.ctrlKey&&!y.shiftKey&&!y.altKey&&De.includes(y.key)&&he(Xe,u.component=null,u)};function ge(){t(0,h=window.outerHeight),t(1,d=window.outerWidth)}function A(y){Ze[y?"unshift":"push"](()=>{q=y,t(16,q)})}function le(y){Ze[y?"unshift":"push"](()=>{R=y,t(17,R)})}function $(y){Ze[y?"unshift":"push"](()=>{x=y,t(18,x)})}const ve=y=>{tn(y),he(kt,s.muted=!s.muted,s)},gt=y=>{tn(y),o.gameWin||o.gameOver?(location.hash="playerStats",Ts()):(he(Xe,u.complete=!0,u),he(Xe,u.component=Ua,u))},pe=y=>{if(o.chosenItems.length){y.detail.checked=!y.detail.checked;return}he(kt,s.hardMode=y.detail.checked,s)};function bn(y){K=y,t(19,K)}function Zn(y){K=y,t(19,K)}function ei(y){F=y,t(13,F),t(10,a),t(9,l),t(25,C)}function Yt(y){Ze[y?"unshift":"push"](()=>{T=y,t(15,T)})}const rt=y=>{T.children[0].contains(y.target)||(he(Xe,u.component=null,u),he(Xe,u.complete=!1,u))};function Ue(y){Ze[y?"unshift":"push"](()=>{T=y,t(15,T)})}const ti=y=>{T.children[0].contains(y.target)||(he(Xe,u.component=null,u),he(Xe,u.complete=!1,u))};return n.$$.update=()=>{if(n.$$.dirty[0]&7&&(h||d)){let y=d>h;document.documentElement.style.fontSize=`${(y?.75:d/h*.8)*v[m]}vh`}n.$$.dirty[0]&33555968&&a.length&&l&&(t(13,F=a.find(y=>y.name==l)),t(14,S=a.find(y=>y.name==C))),n.$$.dirty[0]&56&&ee==0&&P==0&&H==0&&(he(ot,o=Ha,o),U(),setTimeout(()=>location.reload(),1500)),n.$$.dirty[0]&128&&he(Ri,r=s.hardMode?6:7,r),n.$$.dirty[0]&67109632&&o.chosenItems.length&&!o.gameWin&&!o.gameOver&&(o.chosenItems[o.chosenItems.length-1].name==l?te():o.chosenItems.length==r&&z()),n.$$.dirty[0]&64&&i.streak>i.maxStreak&&he(ut,i.maxStreak=i.streak,i)},[h,d,m,ee,P,H,i,s,o,l,a,p,b,F,S,T,q,R,x,K,ue,u,v,Y,fe,C,r,Z,Te,M,ge,A,le,$,ve,gt,pe,bn,Zn,ei,Yt,rt,Ue,ti]}class fp extends st{constructor(e){super(),it(this,e,hp,up,Je,{},null,[-1,-1,-1])}}new fp({target:document.body});
