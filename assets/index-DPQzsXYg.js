var Oc=Object.defineProperty;var Mc=(n,e,t)=>e in n?Oc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ut=(n,e,t)=>(Mc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function ae(){}const ri=n=>n;function Al(n){return n()}function Wr(){return Object.create(null)}function at(n){n.forEach(Al)}function dn(n){return typeof n=="function"}function ct(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ks;function nt(n,e){return n===e?!0:(ks||(ks=document.createElement("a")),ks.href=e,n===ks.href)}function Lc(n){return Object.keys(n).length===0}function Pl(n,...e){if(n==null){for(const s of e)s(void 0);return ae}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ns(n){let e;return Pl(n,t=>e=t)(),e}function _e(n,e,t){n.$$.on_destroy.push(Pl(e,t))}function se(n,e,t){return n.set(t),e}function Ol(n){return n&&dn(n.destroy)?n.destroy:ae}const Ml=typeof window<"u";let tr=Ml?()=>window.performance.now():()=>Date.now(),nr=Ml?n=>requestAnimationFrame(n):ae;const En=new Set;function Ll(n){En.forEach(e=>{e.c(n)||(En.delete(e),e.f())}),En.size!==0&&nr(Ll)}function sr(n){let e;return En.size===0&&nr(Ll),{promise:new Promise(t=>{En.add(e={c:n,f:t})}),abort(){En.delete(e)}}}const Fc=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(n,e){n.appendChild(e)}function Fl(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function qc(n){const e=_("style");return e.textContent="/* empty */",Wc(Fl(n),e),e.sheet}function Wc(n,e){return h(n.head||n,e),e.sheet}function T(n,e,t){n.insertBefore(e,t||null)}function S(n){n.parentNode&&n.parentNode.removeChild(n)}function ut(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function _(n){return document.createElement(n)}function Bc(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function z(n){return document.createTextNode(n)}function b(){return z(" ")}function kt(){return z("")}function Oe(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function d(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ue(n,e,t){const s=e.toLowerCase();s in n?n[s]=typeof n[s]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:d(n,e,t)}function Ps(n){return n===""?null:+n}function Gc(n){return Array.from(n.childNodes)}function me(n,e){e=""+e,n.data!==e&&(n.data=e)}function Ts(n,e){n.value=e??""}function Rn(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function Ke(n,e,t){n.classList.toggle(e,!!t)}function ql(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class Wl{constructor(e=!1){Ut(this,"is_svg",!1);Ut(this,"e");Ut(this,"n");Ut(this,"t");Ut(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=Bc(t.nodeName):this.e=_(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)T(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}function Os(n,e){return new n(e)}const Ms=new Map;let Ls=0;function Hc(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function zc(n,e){const t={stylesheet:qc(e),rules:{}};return Ms.set(n,t),t}function Fs(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let w=0;w<=1;w+=a){const N=e+(t-e)*r(w);c+=w*100+`%{${o(N,1-N)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${Hc(u)}_${l}`,p=Fl(n),{stylesheet:m,rules:g}=Ms.get(p)||zc(p,n);g[f]||(g[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,Ls+=1,f}function ir(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),Ls-=i,Ls||xc())}function xc(){nr(()=>{Ls||(Ms.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&S(e)}),Ms.clear())})}function jc(n,e,t,s){if(!e)return ae;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return ae;const{delay:r=0,duration:o=300,easing:l=ri,start:a=tr()+r,end:c=a+o,tick:u=ae,css:f}=t(n,{from:e,to:i},s);let p=!0,m=!1,g;function v(){f&&(g=Fs(n,0,1,o,r,l,f)),r||(m=!0)}function w(){f&&ir(n,g),p=!1}return sr(N=>{if(!m&&N>=a&&(m=!0),m&&N>=c&&(u(1,0),w()),!p)return!1;if(m){const R=N-a,D=0+1*l(R/o);u(D,1-D)}return!0}),v(),u(0,1),w}function Uc(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,Vc(n,i)}}function Vc(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let ss;function Qn(n){ss=n}function Bl(){if(!ss)throw new Error("Function called outside component initialization");return ss}function $c(n){Bl().$$.on_mount.push(n)}function Gl(){const n=Bl();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=ql(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const vn=[],je=[];let In=[];const Ai=[],Yc=Promise.resolve();let Pi=!1;function Kc(){Pi||(Pi=!0,Yc.then(Hl))}function Ze(n){In.push(n)}function Nt(n){Ai.push(n)}const gi=new Set;let _n=0;function Hl(){if(_n!==0)return;const n=ss;do{try{for(;_n<vn.length;){const e=vn[_n];_n++,Qn(e),Qc(e.$$)}}catch(e){throw vn.length=0,_n=0,e}for(Qn(null),vn.length=0,_n=0;je.length;)je.pop()();for(let e=0;e<In.length;e+=1){const t=In[e];gi.has(t)||(gi.add(t),t())}In.length=0}while(vn.length);for(;Ai.length;)Ai.pop()();Pi=!1,gi.clear(),Qn(n)}function Qc(n){if(n.fragment!==null){n.update(),at(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ze)}}function Jc(n){const e=[],t=[];In.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),In=e}let jn;function zl(){return jn||(jn=Promise.resolve(),jn.then(()=>{jn=null})),jn}function Jn(n,e,t){n.dispatchEvent(ql(`${e?"intro":"outro"}${t}`))}const Ds=new Set;let Ft;function Et(){Ft={r:0,c:[],p:Ft}}function It(){Ft.r||at(Ft.c),Ft=Ft.p}function K(n,e){n&&n.i&&(Ds.delete(n),n.i(e))}function ce(n,e,t,s){if(n&&n.o){if(Ds.has(n))return;Ds.add(n),Ft.c.push(()=>{Ds.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const xl={duration:0};function Xc(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=Ft;l.r+=1;let a;function c(){const{delay:u=0,duration:f=300,easing:p=ri,tick:m=ae,css:g}=i||xl;g&&(o=Fs(n,1,0,f,u,p,g));const v=tr()+u,w=v+f;Ze(()=>Jn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),sr(N=>{if(r){if(N>=w)return m(0,1),Jn(n,!1,"end"),--l.r||at(l.c),!1;if(N>=v){const R=p((N-v)/f);m(1-R,R)}}return r})}return dn(i)?zl().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&ir(n,o),r=!1)}}}function Le(n,e,t,s){let r=e(n,t,{direction:"both"}),o=s?0:1,l=null,a=null,c=null,u;function f(){c&&ir(n,c)}function p(g,v){const w=g.b-o;return v*=Math.abs(w),{a:o,b:g.b,d:w,duration:v,start:g.start,end:g.start+v,group:g.group}}function m(g){const{delay:v=0,duration:w=300,easing:N=ri,tick:R=ae,css:D}=r||xl,A={start:tr()+v,b:g};g||(A.group=Ft,Ft.r+=1),"inert"in n&&(g?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=A:(D&&(f(),c=Fs(n,o,g,w,v,N,D)),g&&R(0,1),l=p(A,w),Ze(()=>Jn(n,g,"start")),sr(k=>{if(a&&k>a.start&&(l=p(a,w),a=null,Jn(n,l.b,"start"),D&&(f(),c=Fs(n,o,l.b,l.duration,0,N,r.css))),l){if(k>=l.end)R(o=l.b,1-o),Jn(n,l.b,"end"),a||(l.b?f():--l.group.r||at(l.group.c)),l=null;else if(k>=l.start){const M=k-l.start;o=l.a+l.d*N(M/l.duration),R(o,1-o)}}return!!(l||a)}))}return{run(g){dn(r)?zl().then(()=>{r=r({direction:g?"in":"out"}),m(g)}):m(g)},end(){f(),l=a=null}}}function Ie(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Zc(n,e){ce(n,1,1,()=>{e.delete(n.key)})}function eu(n,e){n.f(),Zc(n,e)}function tu(n,e,t,s,i,r,o,l,a,c,u,f){let p=n.length,m=r.length,g=p;const v={};for(;g--;)v[n[g].key]=g;const w=[],N=new Map,R=new Map,D=[];for(g=m;g--;){const E=f(i,r,g),I=t(E);let W=o.get(I);W?s&&D.push(()=>W.p(E,e)):(W=c(I,E),W.c()),N.set(I,w[g]=W),I in v&&R.set(I,Math.abs(g-v[I]))}const A=new Set,k=new Set;function M(E){K(E,1),E.m(l,u),o.set(E.key,E),u=E.first,m--}for(;p&&m;){const E=w[m-1],I=n[p-1],W=E.key,$=I.key;E===I?(u=E.first,p--,m--):N.has($)?!o.has(W)||A.has(W)?M(E):k.has($)?p--:R.get(W)>R.get($)?(k.add(W),M(E)):(A.add($),p--):(a(I,o),p--)}for(;p--;){const E=n[p];N.has(E.key)||a(E,o)}for(;m;)M(w[m-1]);return at(D),w}function Rt(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function Ve(n){n&&n.c()}function He(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),Ze(()=>{const r=n.$$.on_mount.map(Al).filter(dn);n.$$.on_destroy?n.$$.on_destroy.push(...r):at(r),n.$$.on_mount=[]}),i.forEach(Ze)}function ze(n,e){const t=n.$$;t.fragment!==null&&(Jc(t.after_update),at(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function nu(n,e){n.$$.dirty[0]===-1&&(vn.push(n),Kc(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ft(n,e,t,s,i,r,o=null,l=[-1]){const a=ss;Qn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:ae,not_equal:i,bound:Wr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Wr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,p,...m)=>{const g=m.length?m[0]:p;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&nu(n,f)),p}):[],c.update(),u=!0,at(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=Gc(e.target);c.fragment&&c.fragment.l(f),f.forEach(S)}else c.fragment&&c.fragment.c();e.intro&&K(n.$$.fragment),He(n,e.target,e.anchor),Hl()}Qn(a)}class dt{constructor(){Ut(this,"$$");Ut(this,"$$set")}$destroy(){ze(this,1),this.$destroy=ae}$on(e,t){if(!dn(t))return ae;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Lc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const su="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(su);function jl(n){const e=n-1;return e*e*e+1}function Ht(n,{delay:e=0,duration:t=400,easing:s=ri}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}function rt(n,{delay:e=0,duration:t=400,easing:s=jl,start:i=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-i,u=l*(1-r);return{delay:e,duration:t,easing:s,css:(f,p)=>`
			transform: ${a} scale(${1-c*p});
			opacity: ${l-u*p}
		`}}const mn=[];function wt(n,e=ae){let t;const s=new Set;function i(l){if(ct(n,l)&&(n=l,t)){const a=!mn.length;for(const c of s)c[1](),mn.push(c,n);if(a){for(let c=0;c<mn.length;c+=2)mn[c][0](mn[c+1]);mn.length=0}}}function r(l){i(l(n))}function o(l,a=ae){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||ae),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}var Br={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(n,e){if(!n)throw Fn(e)},Fn=function(n){return new Error("Firebase Database ("+Ul.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},iu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},rr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let p=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(p=64)),s.push(t[u],t[f],t[p],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):iu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||f==null)throw new ru;const p=r<<2|l>>4;if(s.push(p),c!==64){const m=l<<4&240|c>>2;if(s.push(m),f!==64){const g=c<<6&192|f;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ru extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $l=function(n){const e=Vl(n);return rr.encodeByteArray(e,!0)},qs=function(n){return $l(n).replace(/\./g,"")},Oi=function(n){try{return rr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(n){return Yl(void 0,n)}function Yl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!lu(t)||(n[t]=Yl(n[t],e[t]));return n}function lu(n){return n!=="__proto__"}/**
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
 */function au(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cu=()=>au().__FIREBASE_DEFAULTS__,uu=()=>{if(typeof process>"u"||typeof Br>"u")return;const n=Br.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Oi(n[1]);return e&&JSON.parse(e)},Kl=()=>{try{return cu()||uu()||hu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fu=n=>{var e,t;return(t=(e=Kl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},du=n=>{const e=fu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ql=()=>{var n;return(n=Kl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function pu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qs(JSON.stringify(t)),qs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_u())}function mu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xl(){return Ul.NODE_ADMIN===!0}function gu(){try{return typeof indexedDB=="object"}catch{return!1}}function vu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="FirebaseError";class gs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=bu,Object.setPrototypeOf(this,gs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zl.prototype.create)}}class Zl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?yu(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new gs(i,l,s)}}function yu(n,e){return n.replace(wu,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const wu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ea=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=is(Oi(r[0])||""),t=is(Oi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Cu=function(n){const e=ea(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Eu=function(n){const e=ea(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Dn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Gr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ws(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Mi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Hr(r)&&Hr(o)){if(!Mi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Hr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const p=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):f<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const p=(i<<5|i>>>27)+c+a+u+s[f]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ta(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},oi=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function qn(n){return n&&n._delegate?n._delegate:n}class rs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class Tu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new or;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ru(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Nu(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nu(n){return n===tn?void 0:n}function Ru(n){return n.instantiationMode==="EAGER"}/**
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
 */class Du{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Fe||(Fe={}));const Au={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},Pu=Fe.INFO,Ou={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},Mu=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ou[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class na{constructor(e){this.name=e,this._logLevel=Pu,this._logHandler=Mu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Au[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const Lu=(n,e)=>e.some(t=>n instanceof t);let zr,xr;function Fu(){return zr||(zr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qu(){return xr||(xr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sa=new WeakMap,Li=new WeakMap,ia=new WeakMap,vi=new WeakMap,lr=new WeakMap;function Wu(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Vt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&sa.set(t,n)}).catch(()=>{}),lr.set(e,n),e}function Bu(n){if(Li.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Li.set(n,e)}let Fi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Li.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ia.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gu(n){Fi=n(Fi)}function Hu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(bi(this),e,...t);return ia.set(s,e.sort?e.sort():[e]),Vt(s)}:qu().includes(n)?function(...e){return n.apply(bi(this),e),Vt(sa.get(this))}:function(...e){return Vt(n.apply(bi(this),e))}}function zu(n){return typeof n=="function"?Hu(n):(n instanceof IDBTransaction&&Bu(n),Lu(n,Fu())?new Proxy(n,Fi):n)}function Vt(n){if(n instanceof IDBRequest)return Wu(n);if(vi.has(n))return vi.get(n);const e=zu(n);return e!==n&&(vi.set(n,e),lr.set(e,n)),e}const bi=n=>lr.get(n);function xu(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Vt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Vt(o.result),a.oldVersion,a.newVersion,Vt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const ju=["get","getKey","getAll","getAllKeys","count"],Uu=["put","add","delete","clear"],yi=new Map;function jr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yi.get(e))return yi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Uu.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ju.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return yi.set(e,r),r}Gu(n=>({...n,get:(e,t,s)=>jr(e,t)||n.get(e,t,s),has:(e,t)=>!!jr(e,t)||n.has(e,t)}));/**
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
 */class Vu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($u(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function $u(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qi="@firebase/app",Ur="0.9.29";/**
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
 */const ln=new na("@firebase/app"),Yu="@firebase/app-compat",Ku="@firebase/analytics-compat",Qu="@firebase/analytics",Ju="@firebase/app-check-compat",Xu="@firebase/app-check",Zu="@firebase/auth",eh="@firebase/auth-compat",th="@firebase/database",nh="@firebase/database-compat",sh="@firebase/functions",ih="@firebase/functions-compat",rh="@firebase/installations",oh="@firebase/installations-compat",lh="@firebase/messaging",ah="@firebase/messaging-compat",ch="@firebase/performance",uh="@firebase/performance-compat",hh="@firebase/remote-config",fh="@firebase/remote-config-compat",dh="@firebase/storage",ph="@firebase/storage-compat",_h="@firebase/firestore",mh="@firebase/firestore-compat",gh="firebase",vh="10.9.0";/**
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
 */const Wi="[DEFAULT]",bh={[qi]:"fire-core",[Yu]:"fire-core-compat",[Qu]:"fire-analytics",[Ku]:"fire-analytics-compat",[Xu]:"fire-app-check",[Ju]:"fire-app-check-compat",[Zu]:"fire-auth",[eh]:"fire-auth-compat",[th]:"fire-rtdb",[nh]:"fire-rtdb-compat",[sh]:"fire-fn",[ih]:"fire-fn-compat",[rh]:"fire-iid",[oh]:"fire-iid-compat",[lh]:"fire-fcm",[ah]:"fire-fcm-compat",[ch]:"fire-perf",[uh]:"fire-perf-compat",[hh]:"fire-rc",[fh]:"fire-rc-compat",[dh]:"fire-gcs",[ph]:"fire-gcs-compat",[_h]:"fire-fst",[mh]:"fire-fst-compat","fire-js":"fire-js",[gh]:"fire-js-all"};/**
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
 */const Bs=new Map,Bi=new Map;function yh(n,e){try{n.container.addComponent(e)}catch(t){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gs(n){const e=n.name;if(Bi.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;Bi.set(e,n);for(const t of Bs.values())yh(t,n);return!0}function wh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Ch={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new Zl("app","Firebase",Ch);/**
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
 */class Eh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const Ih=vh;function ar(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(t||(t=Ql()),!t)throw $t.create("no-options");const r=Bs.get(i);if(r){if(Mi(t,r.options)&&Mi(s,r.config))return r;throw $t.create("duplicate-app",{appName:i})}const o=new Du(i);for(const a of Bi.values())o.addComponent(a);const l=new Eh(t,s,o);return Bs.set(i,l),l}function Sh(n=Wi){const e=Bs.get(n);if(!e&&n===Wi&&Ql())return ar();if(!e)throw $t.create("no-app",{appName:n});return e}function Sn(n,e,t){var s;let i=(s=bh[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(l.join(" "));return}Gs(new rs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kh="firebase-heartbeat-database",Th=1,os="firebase-heartbeat-store";let wi=null;function ra(){return wi||(wi=xu(kh,Th,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(os)}catch(t){console.warn(t)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),wi}async function Nh(n){try{const t=(await ra()).transaction(os),s=await t.objectStore(os).get(oa(n));return await t.done,s}catch(e){if(e instanceof gs)ln.warn(e.message);else{const t=$t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(t.message)}}}async function Vr(n,e){try{const s=(await ra()).transaction(os,"readwrite");await s.objectStore(os).put(e,oa(n)),await s.done}catch(t){if(t instanceof gs)ln.warn(t.message);else{const s=$t.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ln.warn(s.message)}}}function oa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Rh=1024,Dh=30*24*60*60*1e3;class Ah{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$r();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Dh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$r(),{heartbeatsToSend:s,unsentEntries:i}=Ph(this._heartbeatsCache.heartbeats),r=qs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function $r(){return new Date().toISOString().substring(0,10)}function Ph(n,e=Rh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Yr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Yr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Oh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gu()?vu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Nh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yr(n){return qs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Mh(n){Gs(new rs("platform-logger",e=>new Vu(e),"PRIVATE")),Gs(new rs("heartbeat",e=>new Ah(e),"PRIVATE")),Sn(qi,Ur,n),Sn(qi,Ur,"esm2017"),Sn("fire-js","")}Mh("");var Lh="firebase",Fh="10.9.0";/**
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
 */Sn(Lh,Fh,"app");var Kr={};const Qr="@firebase/database",Jr="1.0.3";/**
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
 */let la="";function qh(n){la=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:is(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Wh(e)}}catch{}return new Bh},sn=aa("localStorage"),Gi=aa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new na("@firebase/database"),Gh=function(){let n=1;return function(){return n++}}(),ca=function(n){const e=ku(n),t=new Su;t.update(e);const s=t.digest();return rr.encodeByteArray(s)},vs=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=vs.apply(null,s):typeof s=="object"?e+=et(s):e+=s,e+=" "}return e};let on=null,Xr=!0;const Hh=function(n,e){O(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(kn.logLevel=Fe.VERBOSE,on=kn.log.bind(kn),e&&Gi.set("logging_enabled",!0)):typeof n=="function"?on=n:(on=null,Gi.remove("logging_enabled"))},_t=function(...n){if(Xr===!0&&(Xr=!1,on===null&&Gi.get("logging_enabled")===!0&&Hh(!0)),on){const e=vs.apply(null,n);on(e)}},bs=function(n){return function(...e){_t(n,...e)}},Hi=function(...n){const e="FIREBASE INTERNAL ERROR: "+vs(...n);kn.error(e)},zt=function(...n){const e=`FIREBASE FATAL ERROR: ${vs(...n)}`;throw kn.error(e),new Error(e)},St=function(...n){const e="FIREBASE WARNING: "+vs(...n);kn.warn(e)},zh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&St("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ua=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},xh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},An="[MIN_NAME]",an="[MAX_NAME]",Wn=function(n,e){if(n===e)return 0;if(n===An||e===an)return-1;if(e===An||n===an)return 1;{const t=Zr(n),s=Zr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},jh=function(n,e){return n===e?0:n<e?-1:1},Un=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+et(e))},cr=function(n){if(typeof n!="object"||n===null)return et(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=et(e[s]),t+=":",t+=cr(n[e[s]]);return t+="}",t},ha=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function yt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const fa=function(n){O(!ua(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(a=0;a<64;a+=8){let p=parseInt(u.substr(a,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},Uh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $h(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Yh=new RegExp("^-?(0*)\\d{1,10}$"),Kh=-2147483648,Qh=2147483647,Zr=function(n){if(Yh.test(n)){const e=Number(n);if(e>=Kh&&e<=Qh)return e}return null},ys=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw St("Exception was thrown by user callback.",t),e},Math.floor(0))}},Jh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Xh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){St(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',St(e)}}class Tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="5",da="v",pa="s",_a="r",ma="f",ga=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,va="ls",ba="p",zi="ac",ya="websocket",wa="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ef(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ea(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let s;if(e===ya)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===wa)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ef(n)&&(t.ns=n.namespace);const i=[];return yt(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.counters_={}}incrementCounter(e,t=1){xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ou(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci={},Ei={};function hr(n){const e=n.toString();return Ci[e]||(Ci[e]=new tf),Ci[e]}function nf(n,e){const t=n.toString();return Ei[t]||(Ei[t]=e()),Ei[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ys(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="start",rf="close",of="pLPCommand",lf="pRTLPCB",Ia="id",Sa="pw",ka="ser",af="cb",cf="seg",uf="ts",hf="d",ff="dframe",Ta=1870,Na=30,df=Ta-Na,pf=25e3,_f=3e4;class bn{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=hr(t),this.urlFn=a=>(this.appCheckToken&&(a[zi]=this.appCheckToken),Ea(t,wa,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new sf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_f)),xh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===eo)this.id=l,this.password=a;else if(o===rf)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[eo]="t",s[ka]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[af]=this.scriptTagHolder.uniqueCallbackIdentifier),s[da]=ur,this.transportSessionId&&(s[pa]=this.transportSessionId),this.lastSessionId&&(s[va]=this.lastSessionId),this.applicationId&&(s[ba]=this.applicationId),this.appCheckToken&&(s[zi]=this.appCheckToken),typeof location<"u"&&location.hostname&&ga.test(location.hostname)&&(s[_a]=ma);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bn.forceAllow_=!0}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){return bn.forceAllow_?!0:!bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Uh()&&!Vh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=$l(t),i=ha(s,df);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[ff]="t",s[Ia]=e,s[Sa]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=et(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class fr{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Gh(),window[of+this.uniqueCallbackIdentifier]=e,window[lf+this.uniqueCallbackIdentifier]=t,this.myIFrame=fr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){_t("frame writing exception"),l.stack&&_t(l.stack),_t(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ia]=this.myID,e[Sa]=this.myPW,e[ka]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Na+s.length<=Ta;){const o=this.pendingSegs.shift();s=s+"&"+cf+i+"="+o.seg+"&"+uf+i+"="+o.ts+"&"+hf+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(pf)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=16384,gf=45e3;let Hs=null;typeof MozWebSocket<"u"?Hs=MozWebSocket:typeof WebSocket<"u"&&(Hs=WebSocket);class Dt{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=hr(t),this.connURL=Dt.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[da]=ur,typeof location<"u"&&location.hostname&&ga.test(location.hostname)&&(o[_a]=ma),t&&(o[pa]=t),s&&(o[va]=s),i&&(o[zi]=i),r&&(o[ba]=r),Ea(e,ya,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sn.set("previous_websocket_failure",!0);try{let s;Xl(),this.mySock=new Hs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Hs!==null&&!Dt.forceDisallow_}static previouslyFailed(){return sn.isInMemoryStorage||sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=is(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ha(t,mf);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gf))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dt.responsesRequiredToBeHealthy=2;Dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bn,Dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Dt&&Dt.isAvailable();let s=t&&!Dt.previouslyFailed();if(e.webSocketOnly&&(t||St("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Dt];else{const i=this.transports_=[];for(const r of ls.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ls.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=6e4,bf=5e3,yf=10*1024,wf=100*1024,Ii="t",to="d",Cf="s",no="r",Ef="e",so="o",io="a",ro="n",oo="p",If="h";class Sf{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new ls(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>yf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ii in e){const t=e[Ii];t===io?this.upgradeIfSecondaryHealthy_():t===no?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===so&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Un("t",e),s=Un("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:oo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:io,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ro,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Un("t",e),s=Un("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Un(Ii,e);if(to in e){const s=e[to];if(t===If){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ro){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Cf?this.onConnectionShutdown_(s):t===no?this.onReset_(s):t===Ef?Hi("Server Error: "+s):t===so?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ur!==s&&St("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Xn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:oo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Da{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zs}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=32,ao=768;class Me{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Se(){return new Me("")}function Ee(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Qt(n){return n.pieces_.length-n.pieceNum_}function qe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Me(n.pieces_,e)}function Aa(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function kf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Pa(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Oa(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Me(e,0)}function tt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Me(t,0)}function ye(n){return n.pieceNum_>=n.pieces_.length}function mt(n,e){const t=Ee(n),s=Ee(e);if(t===null)return e;if(t===s)return mt(qe(n),qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ma(n,e){if(Qt(n)!==Qt(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function At(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Qt(n)>Qt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Tf{constructor(e,t){this.errorPrefix_=t,this.parts_=Pa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=oi(this.parts_[s]);La(this)}}function Nf(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=oi(e),La(n)}function Rf(n){const e=n.parts_.pop();n.byteLength_-=oi(e),n.parts_.length>0&&(n.byteLength_-=1)}function La(n){if(n.byteLength_>ao)throw new Error(n.errorPrefix_+"has a key path longer than "+ao+" bytes ("+n.byteLength_+").");if(n.parts_.length>lo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lo+") or object contains a cycle "+nn(n))}function nn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Da{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new dr}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=1e3,Df=60*5*1e3,co=30*1e3,Af=1.3,Pf=3e4,Of="server_kill",uo=3;class Gt extends Ra{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Gt.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vn,this.maxReconnectDelay_=Df,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Xl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");dr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(et(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new or,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Gt.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&xt(e,"w")){const s=Dn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();St(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Eu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=co)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Cu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Hi("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Pf&&(this.reconnectDelay_=Vn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Af)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Gt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(f){O(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,l=new Sf(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{St(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Of)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&St(f),a())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gr(this.interruptReasons_)&&(this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>cr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Me(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){_t("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=uo&&(this.reconnectDelay_=co,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){_t("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=uo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+la.replace(/\./g,"-")]=1,Jl()?e["framework.cordova"]=1:mu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zs.getInstance().currentlyOnline();return Gr(this.interruptReasons_)&&e}}Gt.nextPersistentConnectionId_=0;Gt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ve(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ve(An,e),i=new ve(An,t);return this.compare(s,i)!==0}minPost(){return ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;class Fa extends li{static get __EMPTY_NODE(){return Ns}static set __EMPTY_NODE(e){Ns=e}compare(e,t){return Wn(e.name,t.name)}isDefinedOn(e){throw Fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ve.MIN}maxPost(){return new ve(an,Ns)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,Ns)}toString(){return".key"}}const Nn=new Fa;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??lt.RED,this.left=i??bt.EMPTY_NODE,this.right=r??bt.EMPTY_NODE}copy(e,t,s,i,r){return new lt(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return bt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class Mf{copy(e,t,s,i,r){return this}insert(e,t,s){return new lt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,t=bt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new bt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Rs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Rs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Rs(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new Mf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n,e){return Wn(n.name,e.name)}function pr(n,e){return Wn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;function Ff(n){xi=n}const qa=function(n){return typeof n=="number"?"number:"+fa(n):"string:"+n},Wa=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xt(e,".sv"),"Priority must be a string or number.")}else O(n===xi||n.isEmpty(),"priority of unexpected type.");O(n===xi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;class ot{constructor(e,t=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wa(this.priorityNode_)}static set __childrenNodeConstructor(e){ho=e}static get __childrenNodeConstructor(){return ho}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:Ee(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ee(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||Qt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(qe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qa(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=fa(this.value_):e+=this.value_,this.lazyHash_=ca(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ot.VALUE_TYPE_ORDER.indexOf(t),r=ot.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+t),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba,Ga;function qf(n){Ba=n}function Wf(n){Ga=n}class Bf extends li{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Wn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(an,new ot("[PRIORITY-POST]",Ga))}makePost(e,t){const s=Ba(e);return new ve(t,new ot("[PRIORITY-POST]",s))}toString(){return".priority"}}const xe=new Bf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=Math.log(2);class Hf{constructor(e){const t=r=>parseInt(Math.log(r)/Gf,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xs=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let f,p;if(u===0)return null;if(u===1)return f=n[a],p=t?t(f):f,new lt(p,f.node,lt.BLACK,null,null);{const m=parseInt(u/2,10)+a,g=i(a,m),v=i(m+1,c);return f=n[m],p=t?t(f):f,new lt(p,f.node,lt.BLACK,g,v)}},r=function(a){let c=null,u=null,f=n.length;const p=function(g,v){const w=f-g,N=f;f-=g;const R=i(w+1,N),D=n[w],A=t?t(D):D;m(new lt(A,D.node,v,null,R))},m=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(g+1));v?p(w,lt.BLACK):(p(w,lt.BLACK),p(w,lt.RED))}return u},o=new Hf(n.length),l=r(o);return new bt(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;const gn={};class Wt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return O(gn&&xe,"ChildrenNode.ts has not been loaded"),Si=Si||new Wt({".priority":gn},{".priority":xe}),Si}get(e){const t=Dn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof bt?t:null}hasIndex(e){return xt(this.indexSet_,e.toString())}addIndex(e,t){O(e!==Nn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(ve.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=xs(s,e.getCompare()):l=gn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Wt(u,c)}addToIndexes(e,t){const s=Ws(this.indexes_,(i,r)=>{const o=Dn(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===gn)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(ve.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),xs(l,o.getCompare())}else return gn;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new ve(e.name,l))),a.insert(e,e.node)}});return new Wt(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ws(this.indexes_,i=>{if(i===gn)return i;{const r=t.get(e.name);return r?i.remove(new ve(e.name,r)):i}});return new Wt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n;class Z{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Wa(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $n||($n=new Z(new bt(pr),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$n}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?$n:t}}getChild(e){const t=Ee(e);return t===null?this:this.getImmediateChild(t).getChild(qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ve(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$n:this.priorityNode_;return new Z(i,o,r)}}updateChild(e,t){const s=Ee(e);if(s===null)return t;{O(Ee(e)!==".priority"||Qt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(qe(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(xe,(o,l)=>{t[o]=l.val(e),s++,r&&Z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qa(this.getPriority().val())+":"),this.forEachChild(xe,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ca(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ve(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ve(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ve(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ve.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ws?-1:0}withIndex(e){if(e===Nn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Nn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(xe),i=t.getIterator(xe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nn?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zf extends Z{constructor(){super(new bt(pr),Z.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const ws=new zf;Object.defineProperties(ve,{MIN:{value:new ve(An,Z.EMPTY_NODE)},MAX:{value:new ve(an,ws)}});Fa.__EMPTY_NODE=Z.EMPTY_NODE;ot.__childrenNodeConstructor=Z;Ff(ws);Wf(ws);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=!0;function ht(n,e=null){if(n===null)return Z.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ot(t,ht(e))}if(!(n instanceof Array)&&xf){const t=[];let s=!1;if(yt(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=ht(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new ve(o,a)))}}),t.length===0)return Z.EMPTY_NODE;const r=xs(t,Lf,o=>o.name,pr);if(s){const o=xs(t,xe.getCompare());return new Z(r,ht(e),new Wt({".priority":o},{".priority":xe}))}else return new Z(r,ht(e),Wt.Default)}else{let t=Z.EMPTY_NODE;return yt(n,(s,i)=>{if(xt(n,s)&&s.substring(0,1)!=="."){const r=ht(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ht(e))}}qf(ht);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends li{constructor(e){super(),this.indexPath_=e,O(!ye(e)&&Ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Wn(e.name,t.name):r}makePost(e,t){const s=ht(e),i=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new ve(t,i)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,ws);return new ve(an,e)}toString(){return Pa(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends li{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Wn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,t){const s=ht(e);return new ve(t,s)}toString(){return".value"}}const Vf=new Uf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n){return{type:"value",snapshotNode:n}}function Pn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function as(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function cs(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function $f(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(as(t,l)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Pn(t,s)):o.trackChildChange(cs(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,r)=>{t.hasChild(i)||s.trackChildChange(as(i,r))}),t.isLeafNode()||t.forEachChild(xe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(cs(i,r,o))}else s.trackChildChange(Pn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.indexedFilter_=new _r(e.getIndex()),this.index_=e.getIndex(),this.startPost_=us.getStartPost_(e),this.endPost_=us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new ve(t,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Z.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Z.EMPTY_NODE);const r=this;return t.forEachChild(xe,(o,l)=>{r.matches(new ve(o,l))||(i=i.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new ve(t,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Z.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Z.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,m)=>f(m,p)}else o=this.index_.getCompare();const l=e;O(l.numChildren()===this.limit_,"");const a=new ve(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const f=l.getImmediateChild(t);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===t||l.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const m=p==null?1:o(p,a);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(cs(t,s,f)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(as(t,f));const v=l.updateImmediateChild(t,Z.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Pn(p.name,p.node)),v.updateImmediateChild(p.name,p.node)):v}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(as(c.name,c.node)),r.trackChildChange(Pn(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,Z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:An}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:an}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new mr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kf(n){return n.loadsAllData()?new _r(n.getIndex()):n.hasLimit()?new Yf(n):new us(n)}function fo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===xe?t="$priority":n.index_===Vf?t="$value":n.index_===Nn?t="$key":(O(n.index_ instanceof jf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=et(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=et(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+et(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=et(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+et(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function po(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==xe&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Ra{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=bs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=js.getListenId_(e,s),l={};this.listens_[o]=l;const a=fo(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),Dn(this.listens_,o)===l){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,t){const s=js.getListenId_(e,t);delete this.listens_[s]}get(e){const t=fo(e._queryParams),s=e._path.toString(),i=new or;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Iu(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=is(l.responseText)}catch{St("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&St("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){return{value:null,children:new Map}}function za(n,e,t){if(ye(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Ee(e);n.children.has(s)||n.children.set(s,Us());const i=n.children.get(s);e=qe(e),za(i,e,t)}}function ji(n,e,t){n.value!==null?t(e,n.value):Jf(n,(s,i)=>{const r=new Me(e.toString()+"/"+s);ji(i,r,t)})}function Jf(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&yt(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=10*1e3,Zf=30*1e3,ed=5*60*1e3;class td{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Xf(e);const s=_o+(Zf-_o)*Math.random();Xn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;yt(e,(i,r)=>{r>0&&xt(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Xn(this.reportStats_.bind(this),Math.floor(Math.random()*2*ed))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function xa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Pt.ACK_USER_WRITE,this.source=xa()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Me(e));return new Vs(Se(),t,this.revert)}}else return O(Ee(this.path)===e,"operationForChild called for unrelated child."),new Vs(qe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.source=e,this.path=t,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return ye(this.path)?new hs(this.source,Se()):new hs(this.source,qe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Pt.OVERWRITE}operationForChild(e){return ye(this.path)?new cn(this.source,Se(),this.snap.getImmediateChild(e)):new cn(this.source,qe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Pt.MERGE}operationForChild(e){if(ye(this.path)){const t=this.children.subtree(new Me(e));return t.isEmpty()?null:t.value?new cn(this.source,Se(),t.value):new fs(this.source,Se(),t)}else return O(Ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fs(this.source,qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ee(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sd(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push($f(o.childName,o.snapshotNode))}),Yn(n,i,"child_removed",e,s,t),Yn(n,i,"child_added",e,s,t),Yn(n,i,"child_moved",r,s,t),Yn(n,i,"child_changed",e,s,t),Yn(n,i,"value",e,s,t),i}function Yn(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>rd(n,l,a)),o.forEach(l=>{const a=id(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function id(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function rd(n,e,t){if(e.childName==null||t.childName==null)throw Fn("Should only compare child_ events.");const s=new ve(e.childName,e.snapshotNode),i=new ve(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n,e){return{eventCache:n,serverCache:e}}function Zn(n,e,t,s){return ai(new Jt(e,t,s),n.serverCache)}function ja(n,e,t,s){return ai(n.eventCache,new Jt(e,t,s))}function $s(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function un(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;const od=()=>(ki||(ki=new bt(jh)),ki);class We{constructor(e,t=od()){this.value=e,this.children=t}static fromObject(e){let t=new We(null);return yt(e,(s,i)=>{t=t.set(new Me(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Se(),value:this.value};if(ye(e))return null;{const s=Ee(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(qe(e),t);return r!=null?{path:tt(new Me(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const t=Ee(e),s=this.children.get(t);return s!==null?s.subtree(qe(e)):new We(null)}}set(e,t){if(ye(e))return new We(t,this.children);{const s=Ee(e),r=(this.children.get(s)||new We(null)).set(qe(e),t),o=this.children.insert(s,r);return new We(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new We(null):new We(null,this.children);{const t=Ee(e),s=this.children.get(t);if(s){const i=s.remove(qe(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new We(null):new We(this.value,r)}else return this}}get(e){if(ye(e))return this.value;{const t=Ee(e),s=this.children.get(t);return s?s.get(qe(e)):null}}setTree(e,t){if(ye(e))return t;{const s=Ee(e),r=(this.children.get(s)||new We(null)).setTree(qe(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new We(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(tt(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Se(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(ye(e))return null;{const r=Ee(e),o=this.children.get(r);return o?o.findOnPath_(qe(e),tt(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Se(),t)}foreachOnPath_(e,t,s){if(ye(e))return this;{this.value&&s(t,this.value);const i=Ee(e),r=this.children.get(i);return r?r.foreachOnPath_(qe(e),tt(t,i),s):new We(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(tt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new We(null))}}function es(n,e,t){if(ye(e))return new Ot(new We(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=mt(i,e);return r=r.updateChild(o,t),new Ot(n.writeTree_.set(i,r))}else{const i=new We(t),r=n.writeTree_.setTree(e,i);return new Ot(r)}}}function mo(n,e,t){let s=n;return yt(t,(i,r)=>{s=es(s,tt(e,i),r)}),s}function go(n,e){if(ye(e))return Ot.empty();{const t=n.writeTree_.setTree(e,new We(null));return new Ot(t)}}function Ui(n,e){return pn(n,e)!=null}function pn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(mt(t.path,e)):null}function vo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(xe,(s,i)=>{e.push(new ve(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ve(s,i.value))}),e}function Yt(n,e){if(ye(e))return n;{const t=pn(n,e);return t!=null?new Ot(new We(t)):new Ot(n.writeTree_.subtree(e))}}function Vi(n){return n.writeTree_.isEmpty()}function On(n,e){return Ua(Se(),n.writeTree_,e)}function Ua(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Ua(tt(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(tt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n,e){return Ka(e,n)}function ld(n,e,t,s,i){O(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=es(n.visibleWrites,e,t)),n.lastWriteId=s}function ad(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function cd(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&ud(l,s.path)?i=!1:At(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return hd(n),!0;if(s.snap)n.visibleWrites=go(n.visibleWrites,s.path);else{const l=s.children;yt(l,a=>{n.visibleWrites=go(n.visibleWrites,tt(s.path,a))})}return!0}else return!1}function ud(n,e){if(n.snap)return At(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&At(tt(n.path,t),e))return!0;return!1}function hd(n){n.visibleWrites=Va(n.allWrites,fd,Se()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function fd(n){return n.visible}function Va(n,e,t){let s=Ot.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)At(t,o)?(l=mt(t,o),s=es(s,l,r.snap)):At(o,t)&&(l=mt(o,t),s=es(s,Se(),r.snap.getChild(l)));else if(r.children){if(At(t,o))l=mt(t,o),s=mo(s,l,r.children);else if(At(o,t))if(l=mt(o,t),ye(l))s=mo(s,Se(),r.children);else{const a=Dn(r.children,Ee(l));if(a){const c=a.getChild(qe(l));s=es(s,Se(),c)}}}else throw Fn("WriteRecord should have .snap or .children")}}return s}function $a(n,e,t,s,i){if(!s&&!i){const r=pn(n.visibleWrites,e);if(r!=null)return r;{const o=Yt(n.visibleWrites,e);if(Vi(o))return t;if(t==null&&!Ui(o,Se()))return null;{const l=t||Z.EMPTY_NODE;return On(o,l)}}}else{const r=Yt(n.visibleWrites,e);if(!i&&Vi(r))return t;if(!i&&t==null&&!Ui(r,Se()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(At(c.path,e)||At(e,c.path))},l=Va(n.allWrites,o,e),a=t||Z.EMPTY_NODE;return On(l,a)}}}function dd(n,e,t){let s=Z.EMPTY_NODE;const i=pn(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Yt(n.visibleWrites,e);return t.forEachChild(xe,(o,l)=>{const a=On(Yt(r,new Me(o)),l);s=s.updateImmediateChild(o,a)}),vo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Yt(n.visibleWrites,e);return vo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function pd(n,e,t,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=tt(e,t);if(Ui(n.visibleWrites,r))return null;{const o=Yt(n.visibleWrites,r);return Vi(o)?i.getChild(t):On(o,i.getChild(t))}}function _d(n,e,t,s){const i=tt(e,t),r=pn(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Yt(n.visibleWrites,i);return On(o,s.getNode().getImmediateChild(t))}else return null}function md(n,e){return pn(n.visibleWrites,e)}function gd(n,e,t,s,i,r,o){let l;const a=Yt(n.visibleWrites,e),c=pn(a,Se());if(c!=null)l=c;else if(t!=null)l=On(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),p=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=p.getNext();for(;m&&u.length<i;)f(m,s)!==0&&u.push(m),m=p.getNext();return u}else return[]}function vd(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function Ys(n,e,t,s){return $a(n.writeTree,n.treePath,e,t,s)}function br(n,e){return dd(n.writeTree,n.treePath,e)}function bo(n,e,t,s){return pd(n.writeTree,n.treePath,e,t,s)}function Ks(n,e){return md(n.writeTree,tt(n.treePath,e))}function bd(n,e,t,s,i,r){return gd(n.writeTree,n.treePath,e,t,s,i,r)}function yr(n,e,t){return _d(n.writeTree,n.treePath,e,t)}function Ya(n,e){return Ka(tt(n.treePath,e),n.writeTree)}function Ka(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,cs(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,as(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Pn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,cs(s,e.snapshotNode,i.oldSnap));else throw Fn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Qa=new wd;class wr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yr(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:un(this.viewCache_),r=bd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n){return{filter:n}}function Ed(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Id(n,e,t,s,i){const r=new yd;let o,l;if(t.type===Pt.OVERWRITE){const c=t;c.source.fromUser?o=$i(n,e,c.path,c.snap,s,i,r):(O(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!ye(c.path),o=Qs(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===Pt.MERGE){const c=t;c.source.fromUser?o=kd(n,e,c.path,c.children,s,i,r):(O(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Yi(n,e,c.path,c.children,s,i,l,r))}else if(t.type===Pt.ACK_USER_WRITE){const c=t;c.revert?o=Rd(n,e,c.path,s,i,r):o=Td(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Pt.LISTEN_COMPLETE)o=Nd(n,e,t.path,s,r);else throw Fn("Unknown operation type: "+t.type);const a=r.getChanges();return Sd(e,o,a),{viewCache:o,changes:a}}function Sd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=$s(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Ha($s(e)))}}function Ja(n,e,t,s,i,r){const o=e.eventCache;if(Ks(s,t)!=null)return e;{let l,a;if(ye(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=un(e),u=c instanceof Z?c:Z.EMPTY_NODE,f=br(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Ys(s,un(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Ee(t);if(c===".priority"){O(Qt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const f=bo(s,t,u,a);f!=null?l=n.filter.updatePriority(u,f):l=o.getNode()}else{const u=qe(t);let f;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const p=bo(s,t,o.getNode(),a);p!=null?f=o.getNode().getImmediateChild(c).updateChild(u,p):f=o.getNode().getImmediateChild(c)}else f=yr(s,c,e.serverCache);f!=null?l=n.filter.updateChild(o.getNode(),c,f,u,i,r):l=o.getNode()}}return Zn(e,l,o.isFullyInitialized()||ye(t),n.filter.filtersNodes())}}function Qs(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(ye(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),m,null)}else{const m=Ee(t);if(!a.isCompleteForPath(t)&&Qt(t)>1)return e;const g=qe(t),w=a.getNode().getImmediateChild(m).updateChild(g,s);m===".priority"?c=u.updatePriority(a.getNode(),w):c=u.updateChild(a.getNode(),m,w,g,Qa,null)}const f=ja(e,c,a.isFullyInitialized()||ye(t),u.filtersNodes()),p=new wr(i,f,r);return Ja(n,f,t,i,p,l)}function $i(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new wr(i,e,r);if(ye(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Zn(e,c,!0,n.filter.filtersNodes());else{const f=Ee(t);if(f===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=Zn(e,c,l.isFullyInitialized(),l.isFiltered());else{const p=qe(t),m=l.getNode().getImmediateChild(f);let g;if(ye(p))g=s;else{const v=u.getCompleteChild(f);v!=null?Aa(p)===".priority"&&v.getChild(Oa(p)).isEmpty()?g=v:g=v.updateChild(p,s):g=Z.EMPTY_NODE}if(m.equals(g))a=e;else{const v=n.filter.updateChild(l.getNode(),f,g,p,u,o);a=Zn(e,v,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function yo(n,e){return n.eventCache.isCompleteForChild(e)}function kd(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=tt(t,a);yo(e,Ee(u))&&(l=$i(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=tt(t,a);yo(e,Ee(u))||(l=$i(n,l,u,c,i,r,o))}),l}function wo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Yi(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;ye(t)?c=s:c=new We(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),g=wo(n,m,p);a=Qs(n,a,new Me(f),g,i,r,o,l)}}),c.children.inorderTraversal((f,p)=>{const m=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!u.hasChild(f)&&!m){const g=e.serverCache.getNode().getImmediateChild(f),v=wo(n,g,p);a=Qs(n,a,new Me(f),v,i,r,o,l)}}),a}function Td(n,e,t,s,i,r,o){if(Ks(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(ye(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Qs(n,e,t,a.getNode().getChild(t),i,r,l,o);if(ye(t)){let c=new We(null);return a.getNode().forEachChild(Nn,(u,f)=>{c=c.set(new Me(u),f)}),Yi(n,e,t,c,i,r,l,o)}else return e}else{let c=new We(null);return s.foreach((u,f)=>{const p=tt(t,u);a.isCompleteForPath(p)&&(c=c.set(u,a.getNode().getChild(p)))}),Yi(n,e,t,c,i,r,l,o)}}function Nd(n,e,t,s,i){const r=e.serverCache,o=ja(e,r.getNode(),r.isFullyInitialized()||ye(t),r.isFiltered());return Ja(n,o,t,s,Qa,i)}function Rd(n,e,t,s,i,r){let o;if(Ks(s,t)!=null)return e;{const l=new wr(s,e,i),a=e.eventCache.getNode();let c;if(ye(t)||Ee(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ys(s,un(e));else{const f=e.serverCache.getNode();O(f instanceof Z,"serverChildren would be complete if leaf node"),u=br(s,f)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=Ee(t);let f=yr(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=a.getImmediateChild(u)),f!=null?c=n.filter.updateChild(a,u,f,qe(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,Z.EMPTY_NODE,qe(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ys(s,un(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ks(s,Se())!=null,Zn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new _r(s.getIndex()),r=Kf(s);this.processor_=Cd(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Z.EMPTY_NODE,l.getNode(),null),u=new Jt(a,o.isFullyInitialized(),i.filtersNodes()),f=new Jt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ai(f,u),this.eventGenerator_=new nd(this.query_)}get query(){return this.query_}}function Ad(n){return n.viewCache_.serverCache.getNode()}function Pd(n){return $s(n.viewCache_)}function Od(n,e){const t=un(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ye(e)&&!t.getImmediateChild(Ee(e)).isEmpty())?t.getChild(e):null}function Co(n){return n.eventRegistrations_.length===0}function Md(n,e){n.eventRegistrations_.push(e)}function Eo(n,e,t){const s=[];if(t){O(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Io(n,e,t,s){e.type===Pt.MERGE&&e.source.queryId!==null&&(O(un(n.viewCache_),"We should always have a full cache before handling merges"),O($s(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Id(n.processor_,i,e,t,s);return Ed(n.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Xa(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ld(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(xe,(r,o)=>{s.push(Pn(r,o))}),t.isFullyInitialized()&&s.push(Ha(t.getNode())),Xa(n,s,t.getNode(),e)}function Xa(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return sd(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js;class Za{constructor(){this.views=new Map}}function Fd(n){O(!Js,"__referenceConstructor has already been defined"),Js=n}function qd(){return O(Js,"Reference.ts has not been loaded"),Js}function Wd(n){return n.views.size===0}function Cr(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),Io(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Io(o,e,t,s));return r}}function ec(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Ys(t,i?s:null),a=!1;l?a=!0:s instanceof Z?(l=br(t,s),a=!1):(l=Z.EMPTY_NODE,a=!1);const c=ai(new Jt(l,a,!1),new Jt(s,i,!1));return new Dd(e,c)}return o}function Bd(n,e,t,s,i,r){const o=ec(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Md(o,t),Ld(o,t)}function Gd(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Xt(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(Eo(c,t,s)),Co(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(Eo(a,t,s)),Co(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Xt(n)&&r.push(new(qd())(e._repo,e._path)),{removed:r,events:o}}function tc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Kt(n,e){let t=null;for(const s of n.views.values())t=t||Od(s,e);return t}function nc(n,e){if(e._queryParams.loadsAllData())return ui(n);{const s=e._queryIdentifier;return n.views.get(s)}}function sc(n,e){return nc(n,e)!=null}function Xt(n){return ui(n)!=null}function ui(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;function Hd(n){O(!Xs,"__referenceConstructor has already been defined"),Xs=n}function zd(){return O(Xs,"Reference.ts has not been loaded"),Xs}let xd=1;class So{constructor(e){this.listenProvider_=e,this.syncPointTree_=new We(null),this.pendingWriteTree_=vd(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jd(n,e,t,s,i){return ld(n.pendingWriteTree_,e,t,s,i),i?Es(n,new cn(xa(),e,t)):[]}function yn(n,e,t=!1){const s=ad(n.pendingWriteTree_,e);if(cd(n.pendingWriteTree_,e)){let r=new We(null);return s.snap!=null?r=r.set(Se(),!0):yt(s.children,o=>{r=r.set(new Me(o),!0)}),Es(n,new Vs(s.path,r,t))}else return[]}function Cs(n,e,t){return Es(n,new cn(gr(),e,t))}function Ud(n,e,t){const s=We.fromObject(t);return Es(n,new fs(gr(),e,s))}function Vd(n,e){return Es(n,new hs(gr(),e))}function $d(n,e,t){const s=Er(n,t);if(s){const i=Ir(s),r=i.path,o=i.queryId,l=mt(r,e),a=new hs(vr(o),l);return Sr(n,r,a)}else return[]}function ic(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||sc(o,e))){const a=Gd(o,e,t,s);Wd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(p,m)=>Xt(m));if(u&&!f){const p=n.syncPointTree_.subtree(r);if(!p.isEmpty()){const m=Jd(p);for(let g=0;g<m.length;++g){const v=m[g],w=v.query,N=cc(n,v);n.listenProvider_.startListening(ts(w),ds(n,w),N.hashFn,N.onComplete)}}}!f&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(ts(e),null):c.forEach(p=>{const m=n.queryToTagMap.get(hi(p));n.listenProvider_.stopListening(ts(p),m)}))}Xd(n,c)}return l}function rc(n,e,t,s){const i=Er(n,s);if(i!=null){const r=Ir(i),o=r.path,l=r.queryId,a=mt(o,e),c=new cn(vr(l),a,t);return Sr(n,o,c)}else return[]}function Yd(n,e,t,s){const i=Er(n,s);if(i){const r=Ir(i),o=r.path,l=r.queryId,a=mt(o,e),c=We.fromObject(t),u=new fs(vr(l),a,c);return Sr(n,o,u)}else return[]}function Kd(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(p,m)=>{const g=mt(p,i);r=r||Kt(m,g),o=o||Xt(m)});let l=n.syncPointTree_.get(i);l?(o=o||Xt(l),r=r||Kt(l,Se())):(l=new Za,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=Z.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,g)=>{const v=Kt(g,Se());v&&(r=r.updateImmediateChild(m,v))}));const c=sc(l,e);if(!c&&!e._queryParams.loadsAllData()){const p=hi(e);O(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const m=Zd();n.queryToTagMap.set(p,m),n.tagToQueryMap.set(m,p)}const u=ci(n.pendingWriteTree_,i);let f=Bd(l,e,t,u,r,a);if(!c&&!o&&!s){const p=nc(l,e);f=f.concat(ep(n,e,p))}return f}function oc(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=mt(o,e),c=Kt(l,a);if(c)return c});return $a(i,e,r,t,!0)}function Qd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const f=mt(c,t);s=s||Kt(u,f)});let i=n.syncPointTree_.get(t);i?s=s||Kt(i,Se()):(i=new Za,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Jt(s,!0,!1):null,l=ci(n.pendingWriteTree_,e._path),a=ec(i,e,l,r?o.getNode():Z.EMPTY_NODE,r);return Pd(a)}function Es(n,e){return lc(e,n.syncPointTree_,null,ci(n.pendingWriteTree_,Se()))}function lc(n,e,t,s){if(ye(n.path))return ac(n,e,t,s);{const i=e.get(Se());t==null&&i!=null&&(t=Kt(i,Se()));let r=[];const o=Ee(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=Ya(s,o);r=r.concat(lc(l,a,c,u))}return i&&(r=r.concat(Cr(i,n,s,t))),r}}function ac(n,e,t,s){const i=e.get(Se());t==null&&i!=null&&(t=Kt(i,Se()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Ya(s,o),u=n.operationForChild(o);u&&(r=r.concat(ac(u,l,a,c)))}),i&&(r=r.concat(Cr(i,n,s,t))),r}function cc(n,e){const t=e.query,s=ds(n,t);return{hashFn:()=>(Ad(e)||Z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?$d(n,t._path,s):Vd(n,t._path);{const r=$h(i,t);return ic(n,t,null,r)}}}}function ds(n,e){const t=hi(e);return n.queryToTagMap.get(t)}function hi(n){return n._path.toString()+"$"+n._queryIdentifier}function Er(n,e){return n.tagToQueryMap.get(e)}function Ir(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Me(n.substr(0,e))}}function Sr(n,e,t){const s=n.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=ci(n.pendingWriteTree_,e);return Cr(s,t,i,null)}function Jd(n){return n.fold((e,t,s)=>{if(t&&Xt(t))return[ui(t)];{let i=[];return t&&(i=tc(t)),yt(s,(r,o)=>{i=i.concat(o)}),i}})}function ts(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(zd())(n._repo,n._path):n}function Xd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=hi(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Zd(){return xd++}function ep(n,e,t){const s=e._path,i=ds(n,e),r=cc(n,t),o=n.listenProvider_.startListening(ts(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)O(!Xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,f)=>{if(!ye(c)&&u&&Xt(u))return[ui(u).query];{let p=[];return u&&(p=p.concat(tc(u).map(m=>m.query))),yt(f,(m,g)=>{p=p.concat(g)}),p}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(ts(u),ds(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new kr(t)}node(){return this.node_}}class Tr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=tt(this.path_,e);return new Tr(this.syncTree_,t)}node(){return oc(this.syncTree_,this.path_)}}const tp=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ko=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return np(n[".sv"],e,t);if(typeof n[".sv"]=="object")return sp(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},np=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},sp=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ip=function(n,e,t,s){return Nr(e,new Tr(t,n),s)},rp=function(n,e,t){return Nr(n,new kr(e),t)};function Nr(n,e,t){const s=n.getPriority().val(),i=ko(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=ko(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new ot(l,ht(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ot(i))),o.forEachChild(xe,(l,a)=>{const c=Nr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Dr(n,e){let t=e instanceof Me?e:new Me(e),s=n,i=Ee(t);for(;i!==null;){const r=Dn(s.node.children,i)||{children:{},childCount:0};s=new Rr(i,s,r),t=qe(t),i=Ee(t)}return s}function Bn(n){return n.node.value}function uc(n,e){n.node.value=e,Ki(n)}function hc(n){return n.node.childCount>0}function op(n){return Bn(n)===void 0&&!hc(n)}function fi(n,e){yt(n.node.children,(t,s)=>{e(new Rr(t,n,s))})}function fc(n,e,t,s){t&&!s&&e(n),fi(n,i=>{fc(i,e,!0,s)}),t&&s&&e(n)}function lp(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Is(n){return new Me(n.parent===null?n.name:Is(n.parent)+"/"+n.name)}function Ki(n){n.parent!==null&&ap(n.parent,n.name,n)}function ap(n,e,t){const s=op(t),i=xt(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Ki(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Ki(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=/[\[\].#$\/\u0000-\u001F\u007F]/,up=/[\[\].#$\u0000-\u001F\u007F]/,Ti=10*1024*1024,dc=function(n){return typeof n=="string"&&n.length!==0&&!cp.test(n)},pc=function(n){return typeof n=="string"&&n.length!==0&&!up.test(n)},hp=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pc(n)},_c=function(n,e,t){const s=t instanceof Me?new Tf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+nn(s));if(typeof e=="function")throw new Error(n+"contains a function "+nn(s)+" with contents = "+e.toString());if(ua(e))throw new Error(n+"contains "+e.toString()+" "+nn(s));if(typeof e=="string"&&e.length>Ti/3&&oi(e)>Ti)throw new Error(n+"contains a string greater than "+Ti+" utf8 bytes "+nn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(yt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!dc(o)))throw new Error(n+" contains an invalid key ("+o+") "+nn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Nf(s,o),_c(n,l,s),Rf(s)}),i&&r)throw new Error(n+' contains ".value" child '+nn(s)+" in addition to actual children.")}},mc=function(n,e,t,s){if(!(s&&t===void 0)&&!pc(t))throw new Error(ta(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fp=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mc(n,e,t,s)},dp=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!hp(t))throw new Error(ta(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _p(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Ma(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function en(n,e,t){_p(n,t),mp(n,s=>At(s,e)||At(e,s))}function mp(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(gp(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function gp(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();on&&_t("event: "+t.toString()),ys(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="repo_interrupt",bp=25;class yp{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pp,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Us(),this.transactionQueueTree_=new Rr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wp(n,e,t){if(n.stats_=hr(n.repoInfo_),n.forceRestClient_||Jh())n.server_=new js(n.repoInfo_,(s,i,r,o)=>{To(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>No(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Gt(n.repoInfo_,e,(s,i,r,o)=>{To(n,s,i,r,o)},s=>{No(n,s)},s=>{Ep(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=nf(n.repoInfo_,()=>new td(n.stats_,n.server_)),n.infoData_=new Qf,n.infoSyncTree_=new So({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=Cs(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ar(n,"connected",!1),n.serverSyncTree_=new So({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);en(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Cp(n){const t=n.infoData_.getNode(new Me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function gc(n){return tp({timestamp:Cp(n)})}function To(n,e,t,s,i){n.dataUpdateCount++;const r=new Me(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Ws(t,c=>ht(c));o=Yd(n.serverSyncTree_,r,a,i)}else{const a=ht(t);o=rc(n.serverSyncTree_,r,a,i)}else if(s){const a=Ws(t,c=>ht(c));o=Ud(n.serverSyncTree_,r,a)}else{const a=ht(t);o=Cs(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Mr(n,r)),en(n.eventQueue_,l,o)}function No(n,e){Ar(n,"connected",e),e===!1&&kp(n)}function Ep(n,e){yt(e,(t,s)=>{Ar(n,t,s)})}function Ar(n,e,t){const s=new Me("/.info/"+e),i=ht(t);n.infoData_.updateSnapshot(s,i);const r=Cs(n.infoSyncTree_,s,i);en(n.eventQueue_,s,r)}function Ip(n){return n.nextWriteId_++}function Sp(n,e,t){const s=Qd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=ht(i).withIndex(e._queryParams.getIndex());Kd(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Cs(n.serverSyncTree_,e._path,r);else{const l=ds(n.serverSyncTree_,e);o=rc(n.serverSyncTree_,e._path,r,l)}return en(n.eventQueue_,e._path,o),ic(n.serverSyncTree_,e,t,null,!0),r},i=>(Pr(n,"get for query "+et(e)+" failed: "+i),Promise.reject(new Error(i))))}function kp(n){Pr(n,"onDisconnectEvents");const e=gc(n),t=Us();ji(n.onDisconnect_,Se(),(i,r)=>{const o=ip(i,r,n.serverSyncTree_,e);za(t,i,o)});let s=[];ji(t,Se(),(i,r)=>{s=s.concat(Cs(n.serverSyncTree_,i,r));const o=Dp(n,i);Mr(n,o)}),n.onDisconnect_=Us(),en(n.eventQueue_,Se(),s)}function Tp(n){n.persistentConnection_&&n.persistentConnection_.interrupt(vp)}function Pr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),_t(t,...e)}function vc(n,e,t){return oc(n.serverSyncTree_,e,t)||Z.EMPTY_NODE}function Or(n,e=n.transactionQueueTree_){if(e||di(n,e),Bn(e)){const t=yc(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Np(n,Is(e),t)}else hc(e)&&fi(e,t=>{Or(n,t)})}function Np(n,e,t){const s=t.map(c=>c.currentWriteId),i=vc(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=mt(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{Pr(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let p=0;p<t.length;p++)t[p].status=2,u=u.concat(yn(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&f.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();di(n,Dr(n.transactionQueueTree_,e)),Or(n,n.transactionQueueTree_),en(n.eventQueue_,e,u);for(let p=0;p<f.length;p++)ys(f[p])}else{if(c==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{St("transaction at "+a.toString()+" failed: "+c);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=c}Mr(n,e)}},o)}function Mr(n,e){const t=bc(n,e),s=Is(t),i=yc(n,t);return Rp(n,i,s),s}function Rp(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=mt(t,a.path);let u=!1,f;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,f=a.abortReason,i=i.concat(yn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=bp)u=!0,f="maxretry",i=i.concat(yn(n.serverSyncTree_,a.currentWriteId,!0));else{const p=vc(n,a.path,o);a.currentInputSnapshot=p;const m=e[l].update(p.val());if(m!==void 0){_c("transaction failed: Data returned ",m,a.path);let g=ht(m);typeof m=="object"&&m!=null&&xt(m,".priority")||(g=g.updatePriority(p.getPriority()));const w=a.currentWriteId,N=gc(n),R=rp(g,p,N);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=R,a.currentWriteId=Ip(n),o.splice(o.indexOf(w),1),i=i.concat(jd(n.serverSyncTree_,a.path,R,a.currentWriteId,a.applyLocally)),i=i.concat(yn(n.serverSyncTree_,w,!0))}else u=!0,f="nodata",i=i.concat(yn(n.serverSyncTree_,a.currentWriteId,!0))}en(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(p){setTimeout(p,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(f),!1,null))))}di(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)ys(s[l]);Or(n,n.transactionQueueTree_)}function bc(n,e){let t,s=n.transactionQueueTree_;for(t=Ee(e);t!==null&&Bn(s)===void 0;)s=Dr(s,t),e=qe(e),t=Ee(e);return s}function yc(n,e){const t=[];return wc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function wc(n,e,t){const s=Bn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);fi(e,i=>{wc(n,i,t)})}function di(n,e){const t=Bn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,uc(e,t.length>0?t:void 0)}fi(e,s=>{di(n,s)})}function Dp(n,e){const t=Is(bc(n,e)),s=Dr(n.transactionQueueTree_,e);return lp(s,i=>{Ni(n,i)}),Ni(n,s),fc(s,i=>{Ni(n,i)}),t}function Ni(n,e){const t=Bn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(O(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(yn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?uc(e,void 0):t.length=r+1,en(n.eventQueue_,Is(e),i);for(let o=0;o<s.length;o++)ys(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Pp(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):St(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ro=function(n,e){const t=Op(n),s=t.namespace;t.domain==="firebase.com"&&zt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||zh();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ca(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Me(t.pathString)}},Op=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(u,f)),u<f&&(i=Ap(n.substring(u,f)));const p=Pp(n.substring(Math.min(n.length,f)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class Lp{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Lr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return ye(this._path)?null:Aa(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=po(this._queryParams),t=cr(e);return t==="{}"?"default":t}get _queryObject(){return po(this._queryParams)}isEqual(e){if(e=qn(e),!(e instanceof Lr))return!1;const t=this._repo===e._repo,s=Ma(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kf(this._path)}}class jt extends Lr{constructor(e,t){super(e,t,new mr,!1)}get parent(){const e=Oa(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ps{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Me(e),s=Qi(this.ref,e);return new ps(this._node.getChild(t),s,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ps(i,Qi(this.ref,s),xe)))}hasChild(e){const t=new Me(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qp(n,e){return n=qn(n),n._checkNotDeleted("ref"),e!==void 0?Qi(n._root,e):n._root}function Qi(n,e){return n=qn(n),Ee(n._path)===null?fp("child","path",e,!1):mc("child","path",e,!1),new jt(n._repo,tt(n._path,e))}function Wp(n){n=qn(n);const e=new Fp(()=>{}),t=new Fr(e);return Sp(n._repo,n,t).then(s=>new ps(s,new jt(n._repo,n._path),n._queryParams.getIndex()))}class Fr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Mp("value",this,new ps(e.snapshotNode,new jt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Lp(this,e,t):null}matches(e){return e instanceof Fr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Bp(n,...e){let t=qn(n);for(const s of e)t=s._apply(t);return t}Fd(jt);Hd(jt);/**
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
 */const Gp="FIREBASE_DATABASE_EMULATOR_HOST",Ji={};let Hp=!1;function zp(n,e,t,s){n.repoInfo_=new Ca(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function xp(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ro(r,i),l=o.repoInfo,a,c;typeof process<"u"&&Kr&&(c=Kr[Gp]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ro(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Tn(Tn.OWNER):new Zh(n.name,n.options,e);dp("Invalid Firebase Database URL",o),ye(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Up(l,n,u,new Xh(n.name,t));return new Vp(f,n)}function jp(n,e){const t=Ji[e];(!t||t[n.key]!==n)&&zt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Tp(n),delete t[n.key]}function Up(n,e,t,s){let i=Ji[e.name];i||(i={},Ji[e.name]=i);let r=i[n.toURLString()];return r&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new yp(n,Hp,t,s),i[n.toURLString()]=r,r}class Vp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jp(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function Cc(n=Sh(),e){const t=wh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=du("database");s&&$p(t,...s)}return t}function $p(n,e,t,s={}){n=qn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Tn(Tn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:pu(s.mockUserToken,n.app.options.projectId);r=new Tn(o)}zp(i,e,t,r)}/**
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
 */function Yp(n){qh(Ih),Gs(new rs("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xp(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Sn(Qr,Jr,n),Sn(Qr,Jr,"esm2017")}Gt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Gt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Yp();var _s={},Ec={},pi={};Object.defineProperty(pi,"__esModule",{value:!0});pi.rotx=void 0;function Kp(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}pi.rotx=Kp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=pi;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(Ec);var Ic={},_i={};Object.defineProperty(_i,"__esModule",{value:!0});_i.base64=void 0;class Qp{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const Jp=new Qp;_i.base64=Jp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=_i;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(Ic);var Sc={},mi={};Object.defineProperty(mi,"__esModule",{value:!0});mi.hex=void 0;class Xp{encode(e){let t="",s="";for(let i=0;i<e.length;i++)t=e.charCodeAt(i).toString(16),s+=("000"+t).slice(-4);return s}decode(e){let t=e.match(/.{1,4}/g)||[],s="";for(let i=0;i<t.length;i++)s+=String.fromCharCode(parseInt(t[i],16));return s}}const Zp=new Xp;mi.hex=Zp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=mi;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(Sc);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=Ec;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=Ic;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var s=Sc;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return s.hex}})})(_s);let e_={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},kc={},t_={ixqSmg:"IQhiAgLdRq06vESQ81ncFDq8YCUrePFURt-_wRQ",icbpLwuiqv:"nzwvbqmzltm-zwwua.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-zwwua-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm-zwwua",abwziomJcksmb:"nzwvbqmzltm-zwwua.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"932448152432",ixxQl:"1:932448152432:emj:77m89n4801k6703i3i7lj5",umiaczmumvbQl:"O-ZSNPG52H5N"},Tc={};for(let[n,e]of Object.entries(e_))kc[_s.rotx(n,18)]=_s.rotx(e,18);for(let[n,e]of Object.entries(t_))Tc[_s.rotx(n,18)]=_s.rotx(e,18);let Zs={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},ei={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},n_=["head","body","legs","feet","neck","back","ring","misc"],ti={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged"},s_=Cc(ar(kc,"fd"));Cc(ar(Tc,"fd-rooms"));let Mn="https://fantastic-frontier-roblox.fandom.com/wiki/",Zt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Lt={currentGameData:{equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1}},settings:{muted:!1,hardMode:{equipment:!1,weapons:!1,endless_equipment:!1,endless_weapons:!1},mode:"equipment"},playerStats:{equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},endless_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0},endless_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0}}},i_={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function Xi(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function Bt(n){n.target.closest("button").blur()}function wn(n){return Object.keys(n).length!==0}function qt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function qr(){Xi("?ls=true"),setTimeout(Xi)}let Do=localStorage.getItem("fd-currentGameData"),Ao=localStorage.getItem("fd-settings"),Po=localStorage.getItem("fd-playerStats"),Oo=localStorage.getItem("fd-changelogSeen"),Mo=localStorage.getItem("fd-helpSeen"),Lo=localStorage.getItem("fd-supportMe"),Mt=wt(Do?JSON.parse(Do):Lt.currentGameData),Ct=wt(),gt=wt(Ao?{...JSON.parse(Ao),mode:"equipment"}:Lt.settings),hn=wt(),Ln=wt(Po?JSON.parse(Po):Lt.playerStats),Tt=wt(),ni=wt({}),Fo=wt({}),pt=wt({component:null,complete:!1}),si=wt(7),fn=wt(!1),ms=wt(Oo?JSON.parse(Oo):!1),Zi=wt(Mo?JSON.parse(Mo):!1),rn=wt(Lo?JSON.parse(Lo):{showAgain:!0,timesDenied:0,lastGamesPlayed:0}),qo=[Mt,gt,Ln];for(let n=0;n<qo.length;n++){let e=ns(qo[n]),t=Lt[Object.keys(Lt)[n]];for(let s of Object.keys(t))e[s]===void 0&&(e[s]=t[s]);for(let s of Object.keys(e))t[s]===void 0&&delete e[s]}gt.subscribe(n=>{qr(),Ct.set(ns(Mt)[n.mode]),Tt.set(ns(Ln)[n.mode]),hn.set(n.hardMode[n.mode]),localStorage.setItem("fd-settings",JSON.stringify(n))});Mt.subscribe(n=>{qr(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});Ct.subscribe(n=>{Mt.update(e=>({...e,[ns(gt).mode]:n}))});Ln.subscribe(n=>{qr(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});Tt.subscribe(n=>{Ln.update(e=>({...e,[ns(gt).mode]:n}))});hn.subscribe(n=>{gt.update(e=>({...e,hardMode:{...e.hardMode,[e.mode]:n}})),si.set(n?6:7)});ms.subscribe(n=>localStorage.setItem("fd-changelogSeen",JSON.stringify(n)));Zi.subscribe(n=>localStorage.setItem("fd-helpSeen",JSON.stringify(n)));rn.subscribe(n=>localStorage.setItem("fd-supportMe",JSON.stringify(n)));function r_(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:f=m=>Math.sqrt(m)*120,easing:p=jl}=s;return{delay:u,duration:dn(f)?f(Math.sqrt(a*a+c*c)):f,easing:p,css:(m,g)=>{const v=g*a,w=g*c,N=m+g*e.width/t.width,R=m+g*e.height/t.height;return`transform: ${r} translate(${v}px, ${w}px) scale(${N}, ${R});`}}}function Wo(n,e,t){const s=n.slice();s[12]=e[t];const i=s[5][s[0].mode].find(function(...D){return n[11](s[12],...D)});s[13]=i;const r=s[2]?null:s[13].special==s[1].special;s[14]=r;const o=s[2]?null:Ri(s[1].types,s[13].types);s[15]=o;const l=s[2]?null:s[15]==s[1].types.length&&s[13].types.length==s[1].types.length;s[16]=l;const a=s[2]?s[13].slot==s[1].slot:null;s[17]=a;const c=s[2]?Ri(s[1].stats,s[13].stats):null;s[18]=c;const u=s[2]?s[18]==s[1].stats.length&&s[13].stats.length==s[1].stats.length:null;s[19]=u;const f=Math.ceil((s[13].cost.min+s[13].cost.max)/2);s[20]=f;const p=Math.ceil((s[1].cost.min+s[1].cost.max)/2);s[21]=p;const m=s[20]==s[21];s[22]=m;const g=Ri(s[1].colors,s[13].colors);s[23]=g;const v=s[23]==s[1].colors.length&&s[13].colors.length==s[1].colors.length;s[24]=v;const w=s[13].outline==s[1].outline;s[25]=w;const N=s[13].release==s[1].release;return s[26]=N,s}function Bo(n,e,t){const s=n.slice();return s[29]=e[t],s}function Go(n,e,t){const s=n.slice();return s[35]=e[t],s}function Ho(n,e,t){const s=n.slice();return s[32]=e[t],s}function zo(n){let e=[],t=new Map,s,i,r=Ie(n[4].chosenItems.toReversed());const o=l=>l[12];for(let l=0;l<r.length;l+=1){let a=Wo(n,r,l),c=o(a);t.set(c,e[l]=Qo(c,a))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=kt()},m(l,a){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(l,a);T(l,s,a),i=!0},p(l,a){if(a[0]&255){r=Ie(l[4].chosenItems.toReversed()),Et();for(let c=0;c<e.length;c+=1)e[c].r();e=tu(e,a,o,1,l,r,t,s.parentNode,eu,Qo,s,Wo);for(let c=0;c<e.length;c+=1)e[c].a();It()}},i(l){if(!i){for(let a=0;a<r.length;a+=1)K(e[a]);i=!0}},o(l){for(let a=0;a<e.length;a+=1)ce(e[a]);i=!1},d(l){l&&S(s);for(let a=0;a<e.length;a+=1)e[a].d(l)}}}function o_(n){let e,t;function s(l,a){return l[13].types.length?c_:a_}let i=s(n),r=i(n),o=!n[6]&&n[15]&&!n[16]&&jo(n);return{c(){r.c(),e=b(),o&&o.c(),t=kt()},m(l,a){r.m(l,a),T(l,e,a),o&&o.m(l,a),T(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[6]&&l[15]&&!l[16]?o?o.p(l,a):(o=jo(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(S(e),S(t)),r.d(l),o&&o.d(l)}}}function l_(n){let e,t;function s(l,a){return l[13].stats.length?h_:u_}let i=s(n),r=i(n),o=!n[6]&&n[18]&&!n[19]&&Vo(n);return{c(){r.c(),e=b(),o&&o.c(),t=kt()},m(l,a){r.m(l,a),T(l,e,a),o&&o.m(l,a),T(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[6]&&l[18]&&!l[19]?o?o.p(l,a):(o=Vo(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(S(e),S(t)),r.d(l),o&&o.d(l)}}}function a_(n){let e;return{c(){e=z("None")},m(t,s){T(t,e,s)},p:ae,d(t){t&&S(e)}}}function c_(n){let e,t=Ie(n[13].types),s=[];for(let i=0;i<t.length;i+=1)s[i]=xo(Go(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=kt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);T(i,e,r)},p(i,r){if(r[0]&49){t=Ie(i[13].types);let o;for(o=0;o<t.length;o+=1){const l=Go(i,t,o);s[o]?s[o].p(l,r):(s[o]=xo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),ut(s,i)}}}function xo(n){let e=ti[n[35]]+(n[35]==n[13].types[n[13].types.length-1]?"":", "),t;return{c(){t=z(e)},m(s,i){T(s,t,i)},p(s,i){i[0]&49&&e!==(e=ti[s[35]]+(s[35]==s[13].types[s[13].types.length-1]?"":", "))&&me(t,e)},d(s){s&&S(t)}}}function jo(n){let e,t=n[15]+"",s;return{c(){e=_("span"),s=z(t),d(e,"class","bgInfo")},m(i,r){T(i,e,r),h(e,s)},p(i,r){r[0]&55&&t!==(t=i[15]+"")&&me(s,t)},d(i){i&&S(e)}}}function u_(n){let e;return{c(){e=z("None")},m(t,s){T(t,e,s)},p:ae,d(t){t&&S(e)}}}function h_(n){let e,t=Ie(n[13].stats),s=[];for(let i=0;i<t.length;i+=1)s[i]=Uo(Ho(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=kt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);T(i,e,r)},p(i,r){if(r[0]&49){t=Ie(i[13].stats);let o;for(o=0;o<t.length;o+=1){const l=Ho(i,t,o);s[o]?s[o].p(l,r):(s[o]=Uo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),ut(s,i)}}}function Uo(n){let e=ei[n[32]]+(n[32]==n[13].stats[n[13].stats.length-1]?"":", "),t;return{c(){t=z(e)},m(s,i){T(s,t,i)},p(s,i){i[0]&49&&e!==(e=ei[s[32]]+(s[32]==s[13].stats[s[13].stats.length-1]?"":", "))&&me(t,e)},d(s){s&&S(t)}}}function Vo(n){let e,t=n[18]+"",s;return{c(){e=_("span"),s=z(t),d(e,"class","bgInfo")},m(i,r){T(i,e,r),h(e,s)},p(i,r){r[0]&55&&t!==(t=i[18]+"")&&me(s,t)},d(i){i&&S(e)}}}function f_(n){let e=n[20].toLocaleString()+"",t,s,i,r;return{c(){t=z(e),s=b(),i=_("br"),r=z(`\r
                        Gold`)},m(o,l){T(o,t,l),T(o,s,l),T(o,i,l),T(o,r,l)},p(o,l){l[0]&49&&e!==(e=o[20].toLocaleString()+"")&&me(t,e)},d(o){o&&(S(t),S(s),S(i),S(r))}}}function d_(n){let e;return{c(){e=z("Unpurchasable")},m(t,s){T(t,e,s)},p:ae,d(t){t&&S(e)}}}function $o(n){let e,t;return{c(){e=_("iconify-icon"),Ue(e,"class","bgInfo"),Ue(e,"icon","mingcute:arrow-up-fill"),Ue(e,"flip",t=n[20]>n[21]?"vertical":"")},m(s,i){T(s,e,i)},p(s,i){i[0]&51&&t!==(t=s[20]>s[21]?"vertical":"")&&Ue(e,"flip",t)},d(s){s&&S(e)}}}function Yo(n){let e=(n[29]==n[13].colors[0]?qt(n[29]):n[29])+(n[29]==n[13].colors[n[13].colors.length-1]?"":", "),t;return{c(){t=z(e)},m(s,i){T(s,t,i)},p(s,i){i[0]&49&&e!==(e=(s[29]==s[13].colors[0]?qt(s[29]):s[29])+(s[29]==s[13].colors[s[13].colors.length-1]?"":", "))&&me(t,e)},d(s){s&&S(t)}}}function Ko(n){let e,t=n[23]+"",s;return{c(){e=_("span"),s=z(t),d(e,"class","bgInfo")},m(i,r){T(i,e,r),h(e,s)},p(i,r){r[0]&51&&t!==(t=i[23]+"")&&me(s,t)},d(i){i&&S(e)}}}function Qo(n,e){let t,s,i,r,o,l,a,c,u,f,p,m=e[13].name+"",g,v,w,N,R,D=(e[2]?qt(e[13].slot):e[13].special?"Yes":"No")+"",A,k,M,E,I,W,$,re,U,V,we,H,ue,B,fe,ge,J,he,x,C=qt(e[13].outline)+"",Y,G,F,te,ne,de=Zs[e[13].release]+"",be,ee,$e,Re,st,it,ke=ae,oe,Qe,Je;function Te(Q,Ce){return Q[2]?l_:o_}let pe=Te(e),Be=pe(e);function Xe(Q,Ce){return Q[13].cost.min==null?d_:f_}let Ne=Xe(e),X=Ne(e),le=!e[6]&&!e[22]&&e[20]&&$o(e),L=Ie(e[13].colors),ie=[];for(let Q=0;Q<L.length;Q+=1)ie[Q]=Yo(Bo(e,L,Q));let Ae=!e[6]&&e[23]&&!e[24]&&Ko(e);return{key:n,first:null,c(){t=_("div"),s=_("div"),i=_("a"),r=_("img"),a=b(),c=_("iconify-icon"),f=b(),p=_("span"),g=z(m),N=b(),R=_("span"),A=z(D),E=b(),I=_("span"),Be.c(),re=b(),U=_("span"),X.c(),V=b(),le&&le.c(),ue=b(),B=_("span");for(let Q=0;Q<ie.length;Q+=1)ie[Q].c();fe=b(),Ae&&Ae.c(),he=b(),x=_("span"),Y=z(C),te=b(),ne=_("span"),be=z(de),ee=z(" Update"),st=b(),nt(r.src,o=Zt+e[13].image)||d(r,"src",o),d(r,"alt",l=e[13].name),d(r,"class","svelte-pl04pb"),Ue(c,"icon","tabler:link"),Ue(c,"class","svelte-pl04pb"),d(i,"class","flex fjc-center fai-center svelte-pl04pb"),d(i,"href",u=Mn+e[13].link),d(i,"target","_blank"),d(p,"class","tooltip"),d(p,"id","right"),d(s,"id","itemImage"),d(s,"class","ff-item svelte-pl04pb"),d(R,"class","ff-bg ff-item svelte-pl04pb"),d(R,"id",k=(e[2]?e[17]:e[14])?"correct":"wrong"),d(I,"class","ff-bg ff-item svelte-pl04pb"),d(I,"id",W=(e[2]?e[19]:e[16])?"correct":(e[2]?e[18]:e[15])?"partial":"wrong"),Ke(I,"smallerStats",e[2]&&e[13].stats.length>=7),d(U,"class","ff-bg ff-item svelte-pl04pb"),d(U,"id",we=e[22]?"correct":"wrong"),d(B,"class","ff-bg ff-item svelte-pl04pb"),d(B,"id",ge=e[24]?"correct":e[23]?"partial":"wrong"),d(x,"class","ff-bg ff-item svelte-pl04pb"),d(x,"id",G=e[25]?"correct":"wrong"),d(ne,"class","ff-bg ff-item svelte-pl04pb"),d(ne,"id",$e=e[26]?"correct":"wrong"),d(t,"class","itemRow svelte-pl04pb"),this.first=t},m(Q,Ce){T(Q,t,Ce),h(t,s),h(s,i),h(i,r),h(i,a),h(i,c),h(s,f),h(s,p),h(p,g),h(t,N),h(t,R),h(R,A),h(t,E),h(t,I),Be.m(I,null),h(t,re),h(t,U),X.m(U,null),h(U,V),le&&le.m(U,null),h(t,ue),h(t,B);for(let Pe=0;Pe<ie.length;Pe+=1)ie[Pe]&&ie[Pe].m(B,null);h(B,fe),Ae&&Ae.m(B,null),h(t,he),h(t,x),h(x,Y),h(t,te),h(t,ne),h(ne,be),h(ne,ee),h(t,st),oe=!0,Qe||(Je=[Ol(v=e[8].call(null,s,[e[14],e[15],e[16],e[17],e[18],e[19],e[22],e[23],e[24],e[25],e[26]])),Oe(ne,"introend",e[10])],Qe=!0)},p(Q,Ce){if(e=Q,(!oe||Ce[0]&49&&!nt(r.src,o=Zt+e[13].image))&&d(r,"src",o),(!oe||Ce[0]&49&&l!==(l=e[13].name))&&d(r,"alt",l),(!oe||Ce[0]&49&&u!==(u=Mn+e[13].link))&&d(i,"href",u),(!oe||Ce[0]&49)&&m!==(m=e[13].name+"")&&me(g,m),v&&dn(v.update)&&Ce[0]&55&&v.update.call(null,[e[14],e[15],e[16],e[17],e[18],e[19],e[22],e[23],e[24],e[25],e[26]]),(!oe||Ce[0]&53)&&D!==(D=(e[2]?qt(e[13].slot):e[13].special?"Yes":"No")+"")&&me(A,D),(!oe||Ce[0]&55&&k!==(k=(e[2]?e[17]:e[14])?"correct":"wrong"))&&d(R,"id",k),pe===(pe=Te(e))&&Be?Be.p(e,Ce):(Be.d(1),Be=pe(e),Be&&(Be.c(),Be.m(I,null))),(!oe||Ce[0]&55&&W!==(W=(e[2]?e[19]:e[16])?"correct":(e[2]?e[18]:e[15])?"partial":"wrong"))&&d(I,"id",W),(!oe||Ce[0]&53)&&Ke(I,"smallerStats",e[2]&&e[13].stats.length>=7),Ne===(Ne=Xe(e))&&X?X.p(e,Ce):(X.d(1),X=Ne(e),X&&(X.c(),X.m(U,V))),!e[6]&&!e[22]&&e[20]?le?le.p(e,Ce):(le=$o(e),le.c(),le.m(U,null)):le&&(le.d(1),le=null),(!oe||Ce[0]&51&&we!==(we=e[22]?"correct":"wrong"))&&d(U,"id",we),Ce[0]&49){L=Ie(e[13].colors);let Pe;for(Pe=0;Pe<L.length;Pe+=1){const Ge=Bo(e,L,Pe);ie[Pe]?ie[Pe].p(Ge,Ce):(ie[Pe]=Yo(Ge),ie[Pe].c(),ie[Pe].m(B,fe))}for(;Pe<ie.length;Pe+=1)ie[Pe].d(1);ie.length=L.length}!e[6]&&e[23]&&!e[24]?Ae?Ae.p(e,Ce):(Ae=Ko(e),Ae.c(),Ae.m(B,null)):Ae&&(Ae.d(1),Ae=null),(!oe||Ce[0]&51&&ge!==(ge=e[24]?"correct":e[23]?"partial":"wrong"))&&d(B,"id",ge),(!oe||Ce[0]&49)&&C!==(C=qt(e[13].outline)+"")&&me(Y,C),(!oe||Ce[0]&51&&G!==(G=e[25]?"correct":"wrong"))&&d(x,"id",G),(!oe||Ce[0]&49)&&de!==(de=Zs[e[13].release]+"")&&me(be,de),(!oe||Ce[0]&51&&$e!==($e=e[26]?"correct":"wrong"))&&d(ne,"id",$e)},r(){it=t.getBoundingClientRect()},f(){Uc(t),ke()},a(){ke(),ke=jc(t,it,r_,{duration:125})},i(Q){oe||(Q&&Ze(()=>{oe&&(w||(w=Le(s,rt,{duration:e[3]?0:300},!0)),w.run(1))}),Q&&Ze(()=>{oe&&(M||(M=Le(R,rt,{duration:e[3]?0:300,delay:e[3]?0:250},!0)),M.run(1))}),Q&&Ze(()=>{oe&&($||($=Le(I,rt,{duration:e[3]?0:300,delay:e[3]?0:550},!0)),$.run(1))}),Q&&Ze(()=>{oe&&(H||(H=Le(U,rt,{duration:e[3]?0:300,delay:e[3]?0:850},!0)),H.run(1))}),Q&&Ze(()=>{oe&&(J||(J=Le(B,rt,{duration:e[3]?0:300,delay:e[3]?0:1150},!0)),J.run(1))}),Q&&Ze(()=>{oe&&(F||(F=Le(x,rt,{duration:e[3]?0:300,delay:e[3]?0:1450},!0)),F.run(1))}),Q&&Ze(()=>{oe&&(Re||(Re=Le(ne,rt,{duration:e[3]?0:300,delay:e[3]?0:1750},!0)),Re.run(1))}),oe=!0)},o(Q){Q&&(w||(w=Le(s,rt,{duration:e[3]?0:300},!1)),w.run(0)),Q&&(M||(M=Le(R,rt,{duration:e[3]?0:300,delay:e[3]?0:250},!1)),M.run(0)),Q&&($||($=Le(I,rt,{duration:e[3]?0:300,delay:e[3]?0:550},!1)),$.run(0)),Q&&(H||(H=Le(U,rt,{duration:e[3]?0:300,delay:e[3]?0:850},!1)),H.run(0)),Q&&(J||(J=Le(B,rt,{duration:e[3]?0:300,delay:e[3]?0:1150},!1)),J.run(0)),Q&&(F||(F=Le(x,rt,{duration:e[3]?0:300,delay:e[3]?0:1450},!1)),F.run(0)),Q&&(Re||(Re=Le(ne,rt,{duration:e[3]?0:300,delay:e[3]?0:1750},!1)),Re.run(0)),oe=!1},d(Q){Q&&S(t),Q&&w&&w.end(),Q&&M&&M.end(),Be.d(),Q&&$&&$.end(),X.d(),le&&le.d(),Q&&H&&H.end(),ut(ie,Q),Ae&&Ae.d(),Q&&J&&J.end(),Q&&F&&F.end(),Q&&Re&&Re.end(),Qe=!1,at(Je)}}}function p_(n){let e,t,s,i,r,o=n[2]?"Slot":"Has Special",l,a,c,u=n[2]?"Stats":"Stat Intakes",f,p,m,g,v,w,N,R,D,A,k,M=!n[3]&&zo(n);return{c(){e=_("div"),t=_("div"),s=_("span"),s.textContent="Item",i=b(),r=_("span"),l=z(o),a=b(),c=_("span"),f=z(u),p=b(),m=_("span"),m.textContent="Avg. Cost",g=b(),v=_("span"),v.textContent="Colors",w=b(),N=_("span"),N.textContent="Outline",R=b(),D=_("span"),D.textContent="Release",A=b(),M&&M.c(),d(s,"class","ff-item svelte-pl04pb"),d(r,"class","ff-item svelte-pl04pb"),Ke(r,"smaller-fs",!n[2]),d(c,"class","ff-item svelte-pl04pb"),Ke(c,"smaller-fs",!n[2]),d(m,"class","ff-item svelte-pl04pb"),d(v,"class","ff-item svelte-pl04pb"),d(N,"class","ff-item svelte-pl04pb"),d(D,"class","ff-item svelte-pl04pb"),d(t,"id","categories"),d(t,"class","svelte-pl04pb"),d(e,"class","gameboard ff-bg fd-col flex posrel border-tp bs svelte-pl04pb")},m(E,I){T(E,e,I),h(e,t),h(t,s),h(t,i),h(t,r),h(r,l),h(t,a),h(t,c),h(c,f),h(t,p),h(t,m),h(t,g),h(t,v),h(t,w),h(t,N),h(t,R),h(t,D),h(e,A),M&&M.m(e,null),k=!0},p(E,I){(!k||I[0]&4)&&o!==(o=E[2]?"Slot":"Has Special")&&me(l,o),(!k||I[0]&4)&&Ke(r,"smaller-fs",!E[2]),(!k||I[0]&4)&&u!==(u=E[2]?"Stats":"Stat Intakes")&&me(f,u),(!k||I[0]&4)&&Ke(c,"smaller-fs",!E[2]),E[3]?M&&(Et(),ce(M,1,1,()=>{M=null}),It()):M?(M.p(E,I),I[0]&8&&K(M,1)):(M=zo(E),M.c(),K(M,1),M.m(e,null))},i(E){k||(K(M),k=!0)},o(E){ce(M),k=!1},d(E){E&&S(e),M&&M.d()}}}function Ri(n,e){return n===void 0||e===void 0?void 0:n.filter(s=>e.includes(s)).length}function __(n,e,t){let s,i,r,o,l;_e(n,gt,v=>t(0,s=v)),_e(n,Ct,v=>t(4,i=v)),_e(n,ni,v=>t(5,r=v)),_e(n,hn,v=>t(6,o=v)),_e(n,fn,v=>t(7,l=v));let{dailyItemsData:a}=e,c,u,f=!1;function p(v,[w,N,R,D,A,k,M,E,I,W,$]){i.chosenItems.length==i.rowInfo.length+1&&Ct.update(re=>({...re,rowInfo:[...re.rowInfo,[u?D:w,(u?k:R)?1:(u?A:N)?0:-1,M,I?1:E?0:-1,W,$]]}))}const m=()=>se(fn,l=!1,l),g=(v,w)=>w.name==v.name;return n.$$set=v=>{"dailyItemsData"in v&&t(9,a=v.dailyItemsData)},n.$$.update=()=>{n.$$.dirty[0]&1&&s.mode&&(t(3,f=!0),setTimeout(()=>t(3,f=!1),10)),n.$$.dirty[0]&513&&t(1,c=a[s.mode]),n.$$.dirty[0]&1&&(s.mode.includes("equipment")?t(2,u=!0):s.mode.includes("weapons")&&t(2,u=!1))},[s,c,u,f,i,r,o,l,p,a,m,g]}class m_ extends dt{constructor(e){super(),ft(this,e,__,p_,ct,{dailyItemsData:9},null,[-1,-1])}}function g_(n){let e,t,s,i;return{c(){e=_("div"),t=_("input"),d(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],d(t,"type","checkbox"),t.checked=n[1],d(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),Ke(e,"unavailable",n[2]),Rn(e,"--s",`${n[0]}rem`)},m(r,o){T(r,e,o),h(e,t),s||(i=[Oe(t,"change",n[5]),Oe(t,"keydown",n[6])],s=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&Ke(e,"unavailable",r[2]),o&1&&Rn(e,"--s",`${r[0]}rem`)},i:ae,o:ae,d(r){r&&S(e),s=!1,at(i)}}}function v_(n,e,t){let{size:s,checked:i=!1,disabled:r=!1,forced:o=!1}=e;const l=Gl(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,s=u.size),"checked"in u&&t(1,i=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[s,i,r,o,l,a,c]}class As extends dt{constructor(e){super(),ft(this,e,v_,g_,ct,{size:0,checked:1,disabled:2,forced:3})}}function Jo(n,e,t){const s=n.slice();s[21]=e[t];const i=s[1]?!1:s[9].chosenItems.find(function(...o){return n[19](s[21],...o)})!=null;return s[22]=i,s}function Xo(n){let e,t,s,i=Ie(n[1]?n[5].length?n[5]:n[8][n[3]]:n[5]),r=[];for(let o=0;o<i.length;o+=1)r[o]=Zo(Jo(n,i,o));return{c(){e=_("div");for(let o=0;o<r.length;o+=1)r[o].c();d(e,"class","itemList ff-bg flex fd-col svelte-1up5u20"),Ke(e,"noGuess",n[1])},m(o,l){T(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[20](e),s=!0},p(o,l){if(l&2858){i=Ie(o[1]?o[5].length?o[5]:o[8][o[3]]:o[5]);let a;for(a=0;a<i.length;a+=1){const c=Jo(o,i,a);r[a]?r[a].p(c,l):(r[a]=Zo(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}(!s||l&2)&&Ke(e,"noGuess",o[1])},i(o){s||(o&&Ze(()=>{s&&(t||(t=Le(e,Ht,{duration:75},!0)),t.run(1))}),s=!0)},o(o){o&&(t||(t=Le(e,Ht,{duration:75},!1)),t.run(0)),s=!1},d(o){o&&S(e),ut(r,o),n[20](null),o&&t&&t.end()}}}function Zo(n){let e,t,s,i,r,o=n[21].name+"",l,a,c,u,f;function p(){return n[18](n[22],n[21])}return{c(){e=_("button"),t=_("img"),i=b(),r=_("span"),l=z(o),a=b(),nt(t.src,s=Zt+n[21].image)||d(t,"src",s),d(t,"alt",""),d(t,"class","svelte-1up5u20"),e.disabled=c=n[22],d(e,"class","listItem flex fai-center no-bg-change svelte-1up5u20"),Ke(e,"unavailable",n[22])},m(m,g){T(m,e,g),h(e,t),h(e,i),h(e,r),h(r,l),h(e,a),u||(f=Oe(e,"click",p),u=!0)},p(m,g){n=m,g&298&&!nt(t.src,s=Zt+n[21].image)&&d(t,"src",s),g&298&&o!==(o=n[21].name+"")&&me(l,o),g&810&&c!==(c=n[22])&&(e.disabled=c),g&810&&Ke(e,"unavailable",n[22])},d(m){m&&S(e),u=!1,f()}}}function b_(n){let e,t,s,i,r,o,l=n[8]&&(n[1]?!0:n[5].length)&&n[6]&&Xo(n);return{c(){e=_("input"),s=b(),l&&l.c(),i=kt(),e.disabled=n[7],d(e,"type","text"),d(e,"class","searcherInput border-tp br-1 svelte-1up5u20"),d(e,"placeholder",t=n[1]?"Item to be guessed...":`Guess the item for game #${n[0]+1} (${n[3]})...`)},m(a,c){T(a,e,c),n[16](e),T(a,s,c),l&&l.m(a,c),T(a,i,c),r||(o=[Oe(window,"mousedown",n[15]),Oe(e,"input",n[10]),Oe(e,"focusin",n[17])],r=!0)},p(a,[c]){c&128&&(e.disabled=a[7]),c&11&&t!==(t=a[1]?"Item to be guessed...":`Guess the item for game #${a[0]+1} (${a[3]})...`)&&d(e,"placeholder",t),a[8]&&(a[1]||a[5].length)&&a[6]?l?(l.p(a,c),c&354&&K(l,1)):(l=Xo(a),l.c(),K(l,1),l.m(i.parentNode,i)):l&&(Et(),ce(l,1,1,()=>{l=null}),It())},i(a){K(l)},o(a){ce(l)},d(a){a&&(S(e),S(s),S(i)),n[16](null),l&&l.d(a),r=!1,at(o)}}}function y_(n,e,t){let s,i,r,o,l;_e(n,gt,I=>t(14,i=I)),_e(n,fn,I=>t(7,r=I)),_e(n,ni,I=>t(8,o=I)),_e(n,Ct,I=>t(9,l=I));let{gameNumber:a=0,noGuess:c=!1,noGuessMode:u=null,noGuessItem:f=""}=e,p,m,g=[],v=!1;function w(){let I=p.value.toLowerCase();if(t(5,g=[]),!!I)for(let W of o[s])W.name.toLowerCase().includes(I)&&g.push(W)}function N(I){r||(c?(t(12,f=I.name),t(6,v=!1)):(se(fn,r=!0,r),Ct.update(W=>({...W,chosenItems:[...W.chosenItems,{name:I.name}]}))),t(2,p.value="",p),w())}const R=I=>{m&&I.target!=p&&!m.contains(I.target)&&t(6,v=!1)};function D(I){je[I?"unshift":"push"](()=>{p=I,t(2,p)})}const A=()=>t(6,v=!0),k=(I,W)=>{I||N(W)},M=(I,W)=>W.name==I.name;function E(I){je[I?"unshift":"push"](()=>{m=I,t(4,m)})}return n.$$set=I=>{"gameNumber"in I&&t(0,a=I.gameNumber),"noGuess"in I&&t(1,c=I.noGuess),"noGuessMode"in I&&t(13,u=I.noGuessMode),"noGuessItem"in I&&t(12,f=I.noGuessItem)},n.$$.update=()=>{n.$$.dirty&24576&&t(3,s=u||i.mode),n.$$.dirty&12&&s&&p&&w()},[a,c,p,s,m,g,v,r,o,l,w,N,f,u,i,R,D,A,k,M,E]}class Nc extends dt{constructor(e){super(),ft(this,e,y_,b_,ct,{gameNumber:0,noGuess:1,noGuessMode:13,noGuessItem:12})}}function el(n){let e,t,s;return{c(){e=_("span"),d(e,"id","HPFlash"),d(e,"class","svelte-nha9gw")},m(i,r){T(i,e,r),s=!0},i(i){s||(t&&t.end(1),s=!0)},o(i){i&&(t=Xc(e,Ht,{duration:200})),s=!1},d(i){i&&S(e),i&&t&&t.end()}}}function w_(n){let e,t,s,i,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,f,p,m,g,v,w=n[4]?"You've lost your remaining armor.":"Your armor is protecting you.",N,R,D,A,k,M,E,I,W,$,re,U=n[1]&&el();function V(H){n[6](H)}let we={};return n[0]!==void 0&&(we.gameNumber=n[0]),W=new Nc({props:we}),je.push(()=>Rt(W,"gameNumber",V)),{c(){e=_("div"),t=_("div"),s=_("div"),i=_("div"),r=_("div"),o=_("span"),a=z(l),c=z("/600"),u=b(),f=_("button"),p=_("img"),g=b(),v=_("span"),N=z(w),R=b(),D=_("br"),A=z(`\r
                You can take `),k=z(n[2]),M=z(" hits at most!"),E=b(),U&&U.c(),I=b(),Ve(W.$$.fragment),d(o,"class","svelte-nha9gw"),d(r,"class","HPBackground svelte-nha9gw"),Rn(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),d(i,"class","innerGameHP flex posrel svelte-nha9gw"),d(s,"class","outerGameHP posrel svelte-nha9gw"),nt(p.src,m="misc/armor.svg")||d(p,"src",m),d(p,"alt","Armor"),d(p,"class","svelte-nha9gw"),Ke(p,"noArmor",n[4]),d(v,"class","tooltip svelte-nha9gw"),d(v,"id","right"),d(f,"class","ff-item posrel br-1 svelte-nha9gw"),d(f,"id","armorIcon"),d(t,"class","gameHPCont flex cg-1 svelte-nha9gw"),d(e,"class","currentGameInfo ff-bg flex fd-row fw fjc-center fai-center posrel border-tp br-1 bs svelte-nha9gw")},m(H,ue){T(H,e,ue),h(e,t),h(t,s),h(s,i),h(i,r),h(r,o),h(o,a),h(o,c),h(t,u),h(t,f),h(f,p),h(f,g),h(f,v),h(v,N),h(v,R),h(v,D),h(v,A),h(v,k),h(v,M),h(e,E),U&&U.m(e,null),h(e,I),He(W,e,null),re=!0},p(H,[ue]){(!re||ue&12)&&l!==(l=Math.round(600-H[3].chosenItems.length*(600/H[2]))+"")&&me(a,l),ue&12&&Rn(r,"width",`${Math.floor(100*(H[2]-H[3].chosenItems.length)/H[2])}%`),(!re||ue&16)&&Ke(p,"noArmor",H[4]),(!re||ue&16)&&w!==(w=H[4]?"You've lost your remaining armor.":"Your armor is protecting you.")&&me(N,w),(!re||ue&4)&&me(k,H[2]),H[1]?U?ue&2&&K(U,1):(U=el(),U.c(),K(U,1),U.m(e,I)):U&&(Et(),ce(U,1,1,()=>{U=null}),It());const B={};!$&&ue&1&&($=!0,B.gameNumber=H[0],Nt(()=>$=!1)),W.$set(B)},i(H){re||(K(U),K(W.$$.fragment,H),re=!0)},o(H){ce(U),ce(W.$$.fragment,H),re=!1},d(H){H&&S(e),U&&U.d(),ze(W)}}}function C_(n,e,t){let s,i,r,o;_e(n,fn,u=>t(5,s=u)),_e(n,si,u=>t(2,i=u)),_e(n,Ct,u=>t(3,r=u)),_e(n,hn,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&s&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,i,r,o,s,c]}class E_ extends dt{constructor(e){super(),ft(this,e,C_,w_,ct,{gameNumber:0})}}function tl(n,e,t){const s=n.slice();return s[9]=e[t],s}function nl(n,e,t){const s=n.slice();return s[12]=e[t],s}function sl(n){let e,t=(n[12]===!0||n[12]===1?n[4].html.blue:n[12]===0?n[4].html.yellow:n[12]===!1||n[12]===-1?n[4].html.red:null)+"",s;return{c(){e=new Wl(!1),s=kt(),e.a=s},m(i,r){e.m(t,i,r),T(i,s,r)},p(i,r){r&1&&t!==(t=(i[12]===!0||i[12]===1?i[4].html.blue:i[12]===0?i[4].html.yellow:i[12]===!1||i[12]===-1?i[4].html.red:null)+"")&&e.p(t)},d(i){i&&(S(s),e.d())}}}function il(n){let e,t,s=Ie(n[9]),i=[];for(let r=0;r<s.length;r+=1)i[r]=sl(nl(n,s,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=b(),t=_("br")},m(r,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(r,o);T(r,e,o),T(r,t,o)},p(r,o){if(o&17){s=Ie(r[9]);let l;for(l=0;l<s.length;l+=1){const a=nl(r,s,l);i[l]?i[l].p(a,o):(i[l]=sl(a),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},d(r){r&&(S(e),S(t)),ut(i,r)}}}function I_(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v=n[2]?"Copied!":"Copy",w,N,R,D=Ie(n[0].rowInfo.toReversed()),A=[];for(let k=0;k<D.length;k+=1)A[k]=il(tl(n,D,k));return{c(){e=_("div"),t=_("span"),t.textContent="Game Stats",s=b(),i=_("span"),r=z(n[3]),o=b(),l=_("br"),a=b();for(let k=0;k<A.length;k+=1)A[k].c();c=b(),u=_("button"),f=z(`Share Stats\r
        `),p=_("iconify-icon"),m=b(),g=_("span"),w=z(v),d(i,"class","smaller-fs"),Ue(p,"icon","ri:share-fill"),d(g,"class","tooltip"),d(g,"id","top"),d(u,"class","flex fai-center cg-1 posrel border-tp br-1 smaller-fs svelte-q44wd4"),d(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs")},m(k,M){T(k,e,M),h(e,t),h(e,s),h(e,i),h(i,r),h(i,o),h(i,l),h(i,a);for(let E=0;E<A.length;E+=1)A[E]&&A[E].m(i,null);h(e,c),h(e,u),h(u,f),h(u,p),h(u,m),h(u,g),h(g,w),N||(R=Oe(u,"click",n[8]),N=!0)},p(k,[M]){if(M&8&&me(r,k[3]),M&17){D=Ie(k[0].rowInfo.toReversed());let E;for(E=0;E<D.length;E+=1){const I=tl(k,D,E);A[E]?A[E].p(I,M):(A[E]=il(I),A[E].c(),A[E].m(i,null))}for(;E<A.length;E+=1)A[E].d(1);A.length=D.length}M&4&&v!==(v=k[2]?"Copied!":"Copy")&&me(w,v)},i:ae,o:ae,d(k){k&&S(e),ut(A,k),N=!1,R()}}}function S_(n,e,t){let s,i,r,o;_e(n,Ct,p=>t(0,i=p)),_e(n,gt,p=>t(6,r=p)),_e(n,hn,p=>t(7,o=p));let{gameNumber:l}=e,a={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},c="",u=!1;const f=p=>{Bt(p),navigator.clipboard.writeText(`${s}
${c}
${location.origin+location.pathname}`),t(2,u=!0),setTimeout(()=>t(2,u=!1),1e3)};return n.$$set=p=>{"gameNumber"in p&&t(5,l=p.gameNumber)},n.$$.update=()=>{n.$$.dirty&224&&t(3,s=`${o?"(Nightmare)":""} Frontierdle - ${qt(r.mode)} #${l+1}`),n.$$.dirty&67&&r.mode&&setTimeout(()=>{t(1,c="");for(let p of i.rowInfo.toReversed()){let m="";for(let g of p)m+=g===!0||g===1?a.js.blue:g===0?a.js.yellow:g===!1||g===-1?a.js.red:null;t(1,c+=m+`
`)}})},[i,c,u,s,a,l,r,o,f]}class k_ extends dt{constructor(e){super(),ft(this,e,S_,I_,ct,{gameNumber:5})}}function rl(n,e,t){const s=n.slice();return s[5]=e[t][0],s[6]=e[t][1],s}function ol(n){let e,t,s=n[5]+"",i,r,o,l,a,c=n[6]+"",u,f;return{c(){e=_("div"),t=_("span"),i=z(s),r=b(),o=_("span"),o.innerHTML="",l=b(),a=_("span"),u=z(c),f=b(),d(t,"id","guessNum"),d(t,"class","svelte-mzhi8s"),d(o,"class","posrel border-tp svelte-mzhi8s"),d(o,"id","winsBar"),Rn(o,"width",`${n[6]*80/n[3]}%`),d(a,"class","smaller-fs svelte-mzhi8s"),d(a,"id","winsNum"),d(e,"class","flex fai-center svelte-mzhi8s")},m(p,m){T(p,e,m),h(e,t),h(t,i),h(e,r),h(e,o),h(e,l),h(e,a),h(a,u),h(e,f)},p(p,m){m&2&&s!==(s=p[5]+"")&&me(i,s),m&10&&Rn(o,"width",`${p[6]*80/p[3]}%`),m&2&&c!==(c=p[6]+"")&&me(u,c)},d(p){p&&S(e)}}}function T_(n){let e,t,s,i=qt(n[2])+"",r,o,l,a,c,u,f=n[1].gamesPlayed+"",p,m,g,v,w,N,R=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"",D,A,k,M,E,I,W,$=n[1].streak+"",re,U,V,we,H,ue,B=n[1].maxStreak+"",fe,ge,J,he,x,C,Y,G,F,te=Ie(Object.entries(n[1].winInfo)),ne=[];for(let de=0;de<te.length;de+=1)ne[de]=ol(rl(n,te,de));return{c(){e=_("div"),t=_("span"),s=z("Your Stats - "),r=z(i),o=b(),l=_("div"),a=_("div"),c=_("div"),u=_("span"),p=z(f),m=b(),g=_("span"),g.textContent="Games Played",v=b(),w=_("div"),N=_("span"),D=z(R),A=z("%"),k=b(),M=_("span"),M.textContent="Win Rate",E=b(),I=_("div"),W=_("span"),re=z($),U=b(),V=_("span"),V.textContent="Current Streak",we=b(),H=_("div"),ue=_("span"),fe=z(B),ge=b(),J=_("span"),J.textContent="Max Streak",he=b(),x=_("span"),x.textContent="Win Distribution",C=b(),Y=_("div");for(let de=0;de<ne.length;de+=1)ne[de].c();d(g,"id","statsTitle"),d(g,"class","svelte-mzhi8s"),d(c,"class","svelte-mzhi8s"),d(M,"id","statsTitle"),d(M,"class","svelte-mzhi8s"),d(w,"class","svelte-mzhi8s"),d(V,"id","statsTitle"),d(V,"class","svelte-mzhi8s"),d(I,"class","svelte-mzhi8s"),d(J,"id","statsTitle"),d(J,"class","svelte-mzhi8s"),d(H,"class","svelte-mzhi8s"),d(a,"class","flex svelte-mzhi8s"),d(a,"id","playerStatsInfo"),d(x,"class","smaller-fs"),d(Y,"class","flex fd-col smaller-fs svelte-mzhi8s"),d(Y,"id","distributionChart"),d(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs"),d(e,"id","playerStats")},m(de,be){T(de,e,be),h(e,t),h(t,s),h(t,r),h(e,o),h(e,l),h(l,a),h(a,c),h(c,u),h(u,p),h(c,m),h(c,g),h(a,v),h(a,w),h(w,N),h(N,D),h(N,A),h(w,k),h(w,M),h(a,E),h(a,I),h(I,W),h(W,re),h(I,U),h(I,V),h(a,we),h(a,H),h(H,ue),h(ue,fe),h(H,ge),h(H,J),h(e,he),h(e,x),h(e,C),h(e,Y);for(let ee=0;ee<ne.length;ee+=1)ne[ee]&&ne[ee].m(Y,null);F=!0},p(de,[be]){if(n=de,(!F||be&4)&&i!==(i=qt(n[2])+"")&&me(r,i),(!F||be&2)&&f!==(f=n[1].gamesPlayed+"")&&me(p,f),(!F||be&2)&&R!==(R=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"")&&me(D,R),(!F||be&2)&&$!==($=n[1].streak+"")&&me(re,$),(!F||be&2)&&B!==(B=n[1].maxStreak+"")&&me(fe,B),be&10){te=Ie(Object.entries(n[1].winInfo));let ee;for(ee=0;ee<te.length;ee+=1){const $e=rl(n,te,ee);ne[ee]?ne[ee].p($e,be):(ne[ee]=ol($e),ne[ee].c(),ne[ee].m(Y,null))}for(;ee<ne.length;ee+=1)ne[ee].d(1);ne.length=te.length}},i(de){F||(de&&Ze(()=>{F&&(G||(G=Le(e,rt,{duration:n[0]?200:0},!0)),G.run(1))}),F=!0)},o(de){de&&(G||(G=Le(e,rt,{duration:n[0]?200:0},!1)),G.run(0)),F=!1},d(de){de&&S(e),ut(ne,de),de&&G&&G.end()}}}function N_(n,e,t){let s,i,r,o;_e(n,gt,a=>t(4,r=a)),_e(n,Tt,a=>t(1,o=a));let{prompted:l=!1}=e;return n.$$set=a=>{"prompted"in a&&t(0,l=a.prompted)},n.$$.update=()=>{n.$$.dirty&2&&t(3,s=Math.max(...Object.values(o.winInfo))),n.$$.dirty&16&&t(2,i=r.mode)},[l,o,i,s,r]}class Rc extends dt{constructor(e){super(),ft(this,e,N_,T_,ct,{prompted:0})}}function ll(n,e,t){const s=n.slice();return s[5]=e[t],s}function R_(n){let e,t=Ie(n[1]),s=[];for(let i=0;i<t.length;i+=1)s[i]=al(ll(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=kt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);T(i,e,r)},p(i,r){if(r&2){t=Ie(i[1]);let o;for(o=0;o<t.length;o+=1){const l=ll(i,t,o);s[o]?s[o].p(l,r):(s[o]=al(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),ut(s,i)}}}function D_(n){let e,t,s;return{c(){e=_("span"),t=z("— "),s=z(n[1]),d(e,"id","info"),d(e,"class","svelte-1vq8gvl")},m(i,r){T(i,e,r),h(e,t),h(e,s)},p(i,r){r&2&&me(s,i[1])},d(i){i&&S(e)}}}function al(n){let e,t,s=n[5]+"",i;return{c(){e=_("span"),t=z("— "),i=z(s),d(e,"id","info"),d(e,"class","svelte-1vq8gvl")},m(r,o){T(r,e,o),h(e,t),h(e,i)},p(r,o){o&2&&s!==(s=r[5]+"")&&me(i,s)},d(r){r&&S(e)}}}function A_(n){let e,t,s,i,r,o,l,a,c;function u(m,g){return typeof m[1]=="string"?D_:R_}let f=u(n),p=f(n);return{c(){e=_("hr"),t=b(),s=_("li"),i=_("span"),r=z("v"),o=z(n[0]),l=b(),a=_("i"),a.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":i_[n[2][0]%10])+", 20"+n[2][2]}`,c=b(),p.c(),d(i,"id","version"),d(i,"class","svelte-1vq8gvl"),d(a,"id","date"),d(a,"class","svelte-1vq8gvl"),d(s,"class","flex fw fai-center svelte-1vq8gvl")},m(m,g){T(m,e,g),T(m,t,g),T(m,s,g),h(s,i),h(i,r),h(i,o),h(s,l),h(s,a),h(s,c),p.m(s,null)},p(m,[g]){g&1&&me(o,m[0]),f===(f=u(m))&&p?p.p(m,g):(p.d(1),p=f(m),p&&(p.c(),p.m(s,null)))},i:ae,o:ae,d(m){m&&(S(e),S(t),S(s)),p.d()}}}function P_(n,e,t){let{version:s,date:i,text:r}=e,o=i.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,s=a.version),"date"in a&&t(4,i=a.date),"text"in a&&t(1,r=a.text)},[s,r,o,l,i]}class Di extends dt{constructor(e){super(),ft(this,e,P_,A_,ct,{version:0,date:4,text:1})}}function O_(n){let e,t,s,i,r,o,l,a,c;return i=new Di({props:{version:"1.1.1",date:"5/4/24",text:["Fixed 'Game Stats' section not updating when switching game categories","Fixed page size and zoom occasionally breaking"]}}),o=new Di({props:{version:"1.1.0",date:"4/4/24",text:["Added 'Weapons' game category","'Game Help' prompt now appears on first visit"]}}),a=new Di({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=_("span"),e.textContent="Changelog",t=b(),s=_("ul"),Ve(i.$$.fragment),r=b(),Ve(o.$$.fragment),l=b(),Ve(a.$$.fragment),d(e,"class","title"),d(s,"class","flex fd-col smaller-fs svelte-1hn7lke"),d(s,"id","contents")},m(u,f){T(u,e,f),T(u,t,f),T(u,s,f),He(i,s,null),h(s,r),He(o,s,null),h(s,l),He(a,s,null),c=!0},p:ae,i(u){c||(K(i.$$.fragment,u),K(o.$$.fragment,u),K(a.$$.fragment,u),c=!0)},o(u){ce(i.$$.fragment,u),ce(o.$$.fragment,u),ce(a.$$.fragment,u),c=!1},d(u){u&&(S(e),S(t),S(s)),ze(i),ze(o),ze(a)}}}class M_ extends dt{constructor(e){super(),ft(this,e,null,O_,ct,{})}}function L_(n){let e,t,s;return{c(){e=_("span"),e.textContent="Credits",t=b(),s=_("div"),s.innerHTML=`<p class="flex fai-center cg-1">This is a personal project. Contact me directly on
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
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,d(e,"class","title"),d(s,"class","smaller-fs"),d(s,"id","contents")},m(i,r){T(i,e,r),T(i,t,r),T(i,s,r)},p:ae,i:ae,o:ae,d(i){i&&(S(e),S(t),S(s))}}}class F_ extends dt{constructor(e){super(),ft(this,e,null,L_,ct,{})}}function cl(n,e,t){const s=n.slice();return s[0]=e[t],s}function q_(n,e,t){const s=n.slice();return s[3]=e[t],s}function W_(n,e,t){const s=n.slice();return s[6]=e[t],s}function ul(n,e,t){const s=n.slice();return s[9]=e[t],s}function hl(n,e,t){const s=n.slice();return s[12]=e[t],s}function B_(n,e,t){const s=n.slice();return s[15]=e[t],s}function G_(n){let e;return{c(){e=_("li"),e.textContent=`— ${qt(n[15])} `},m(t,s){T(t,e,s)},p:ae,d(t){t&&S(e)}}}function fl(n){let e;return{c(){e=_("li"),e.textContent=`— ${n[12]} `},m(t,s){T(t,e,s)},p:ae,d(t){t&&S(e)}}}function dl(n){let e;return{c(){e=_("li"),e.textContent=`— ${n[9]}`},m(t,s){T(t,e,s)},p:ae,d(t){t&&S(e)}}}function H_(n){let e;return{c(){e=_("li"),e.textContent=`— ${n[6]}`},m(t,s){T(t,e,s)},p:ae,d(t){t&&S(e)}}}function z_(n){let e;return{c(){e=_("li"),e.textContent=`— ${n[3]}`},m(t,s){T(t,e,s)},p:ae,d(t){t&&S(e)}}}function pl(n){let e;return{c(){e=_("li"),e.textContent=`— ${n[0]} Update`},m(t,s){T(t,e,s)},p:ae,d(t){t&&S(e)}}}function x_(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v,w,N,R,D,A,k,M,E,I,W,$,re,U,V,we,H,ue,B,fe,ge,J,he,x,C,Y,G,F,te,ne,de,be,ee,$e,Re,st,it,ke,oe,Qe,Je,Te,pe,Be=Ie(n_),Xe=[];for(let P=0;P<Be.length;P+=1)Xe[P]=G_(B_(n,Be,P));let Ne=Ie(Object.values(ei)),X=[];for(let P=0;P<Ne.length;P+=1)X[P]=fl(hl(n,Ne,P));let le=Ie(Object.values(ti)),L=[];for(let P=0;P<le.length;P+=1)L[P]=dl(ul(n,le,P));let ie=Ie(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),Ae=[];for(let P=0;P<12;P+=1)Ae[P]=H_(W_(n,ie,P));let Q=Ie(["Black","Blue","Green","Purple","Red","White","Yellow"]),Ce=[];for(let P=0;P<7;P+=1)Ce[P]=z_(q_(n,Q,P));let Pe=Ie(Object.values(Zs).slice(0,-1)),Ge=[];for(let P=0;P<Pe.length;P+=1)Ge[P]=pl(cl(n,Pe,P));return{c(){e=_("span"),e.textContent="Game Help",t=b(),s=_("div"),i=_("p"),i.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece from\r
        Fantastic Frontier, which changes every day.`,r=b(),o=_("hr"),l=b(),a=_("div"),a.innerHTML=`<span class="title">Color Guide</span> <div class="flex cg-1 svelte-2q3hs4" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-2q3hs4" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-2q3hs4" id="partial">Partial
                <span class="bgInfo svelte-2q3hs4">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-2q3hs4" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-2q3hs4" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,c=b(),u=_("hr"),f=b(),p=_("span"),p.textContent="Categories",m=b(),g=_("div"),v=_("div"),w=_("b"),w.textContent="Equipment",N=b(),R=_("span"),D=_("b"),D.textContent="Slot:",A=b(),k=_("ul");for(let P=0;P<Xe.length;P+=1)Xe[P].c();M=b(),E=_("span"),I=_("b"),I.textContent="Stats:",W=b(),$=_("ul");for(let P=0;P<X.length;P+=1)X[P].c();re=b(),U=_("div"),V=_("b"),V.textContent="Weapons",we=b(),H=_("span"),H.innerHTML="<b>Has Special:</b> <span>Whether the weapon has a Special Ability.</span>",ue=b(),B=_("span"),fe=_("b"),fe.textContent="Stat Intakes:",ge=b(),J=_("ul");for(let P=0;P<L.length;P+=1)L[P].c();he=b(),x=_("div"),C=_("div"),Y=_("b"),Y.textContent="General",G=b(),F=_("span"),F.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item(s) can be
                    purchased at. &quot;Unpurchasable&quot; if it cannot be purchased,
                    equivalent to 0 for the game&#39;s purposes.</span>`,te=b(),ne=_("span"),de=_("b"),de.textContent="Colors:",be=b(),ee=_("ul");for(let P=0;P<12;P+=1)Ae[P].c();$e=b(),Re=_("span"),st=_("b"),st.textContent="Outline:",it=b(),ke=_("ul");for(let P=0;P<7;P+=1)Ce[P].c();oe=b(),Qe=_("span"),Je=_("b"),Je.textContent="Release:",Te=b(),pe=_("ul");for(let P=0;P<Ge.length;P+=1)Ge[P].c();d(e,"class","title"),d(a,"class","flex fd-col fai-center"),d(p,"class","title"),d(w,"class","categoryTitle svelte-2q3hs4"),d(D,"class","svelte-2q3hs4"),d(k,"class","svelte-2q3hs4"),d(R,"class","flex fd-col smaller-fs list svelte-2q3hs4"),d(I,"class","svelte-2q3hs4"),d($,"class","svelte-2q3hs4"),d(E,"class","flex fd-col smaller-fs list svelte-2q3hs4"),d(v,"class","flex fw fjc-center categories svelte-2q3hs4"),d(V,"class","categoryTitle svelte-2q3hs4"),d(H,"class","flex fd-col smaller-fs limit-width svelte-2q3hs4"),d(fe,"class","svelte-2q3hs4"),d(J,"class","svelte-2q3hs4"),d(B,"class","flex fd-col smaller-fs list svelte-2q3hs4"),d(U,"class","flex fw fjc-center categories svelte-2q3hs4"),d(g,"class","flex categoriesCont svelte-2q3hs4"),d(Y,"class","categoryTitle svelte-2q3hs4"),d(F,"class","flex fd-col smaller-fs limit-width svelte-2q3hs4"),d(de,"class","svelte-2q3hs4"),d(ee,"class","svelte-2q3hs4"),d(ne,"class","flex fd-col smaller-fs list svelte-2q3hs4"),d(st,"class","svelte-2q3hs4"),d(ke,"class","svelte-2q3hs4"),d(Re,"class","flex fd-col smaller-fs list svelte-2q3hs4"),d(Je,"class","svelte-2q3hs4"),d(pe,"class","svelte-2q3hs4"),d(Qe,"class","flex fd-col smaller-fs list svelte-2q3hs4"),d(C,"class","flex fw fjc-center categories svelte-2q3hs4"),d(x,"class","flex categoriesCont svelte-2q3hs4"),d(s,"class","flex fd-col smaller-fs svelte-2q3hs4"),d(s,"id","contents")},m(P,vt){T(P,e,vt),T(P,t,vt),T(P,s,vt),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(s,f),h(s,p),h(s,m),h(s,g),h(g,v),h(v,w),h(v,N),h(v,R),h(R,D),h(R,A),h(R,k);for(let q=0;q<Xe.length;q+=1)Xe[q]&&Xe[q].m(k,null);h(v,M),h(v,E),h(E,I),h(E,W),h(E,$);for(let q=0;q<X.length;q+=1)X[q]&&X[q].m($,null);h(g,re),h(g,U),h(U,V),h(U,we),h(U,H),h(U,ue),h(U,B),h(B,fe),h(B,ge),h(B,J);for(let q=0;q<L.length;q+=1)L[q]&&L[q].m(J,null);h(s,he),h(s,x),h(x,C),h(C,Y),h(C,G),h(C,F),h(C,te),h(C,ne),h(ne,de),h(ne,be),h(ne,ee);for(let q=0;q<12;q+=1)Ae[q]&&Ae[q].m(ee,null);h(C,$e),h(C,Re),h(Re,st),h(Re,it),h(Re,ke);for(let q=0;q<7;q+=1)Ce[q]&&Ce[q].m(ke,null);h(C,oe),h(C,Qe),h(Qe,Je),h(Qe,Te),h(Qe,pe);for(let q=0;q<Ge.length;q+=1)Ge[q]&&Ge[q].m(pe,null)},p(P,[vt]){if(vt&0){Ne=Ie(Object.values(ei));let q;for(q=0;q<Ne.length;q+=1){const j=hl(P,Ne,q);X[q]?X[q].p(j,vt):(X[q]=fl(j),X[q].c(),X[q].m($,null))}for(;q<X.length;q+=1)X[q].d(1);X.length=Ne.length}if(vt&0){le=Ie(Object.values(ti));let q;for(q=0;q<le.length;q+=1){const j=ul(P,le,q);L[q]?L[q].p(j,vt):(L[q]=dl(j),L[q].c(),L[q].m(J,null))}for(;q<L.length;q+=1)L[q].d(1);L.length=le.length}if(vt&0){Pe=Ie(Object.values(Zs).slice(0,-1));let q;for(q=0;q<Pe.length;q+=1){const j=cl(P,Pe,q);Ge[q]?Ge[q].p(j,vt):(Ge[q]=pl(j),Ge[q].c(),Ge[q].m(pe,null))}for(;q<Ge.length;q+=1)Ge[q].d(1);Ge.length=Pe.length}},i:ae,o:ae,d(P){P&&(S(e),S(t),S(s)),ut(Xe,P),ut(X,P),ut(L,P),ut(Ae,P),ut(Ce,P),ut(Ge,P)}}}class Dc extends dt{constructor(e){super(),ft(this,e,null,x_,ct,{})}}function j_(n){let e,t,s;return{c(){e=_("span"),e.textContent="Frontierdle Policy",t=b(),s=_("div"),s.innerHTML=`<hr/> <span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,d(e,"class","title"),d(s,"class","flex fd-col smaller-fs svelte-932r7h"),d(s,"id","contents")},m(i,r){T(i,e,r),T(i,t,r),T(i,s,r)},p:ae,i:ae,o:ae,d(i){i&&(S(e),S(t),S(s))}}}class U_ extends dt{constructor(e){super(),ft(this,e,null,j_,ct,{})}}function _l(n){let e,t,s;return{c(){e=_("iconify-icon"),Ue(e,"icon","uil:exclamation"),Ue(e,"id","unseen"),Ue(e,"class","svelte-hjaz47")},m(i,r){T(i,e,r),s=!0},i(i){s||(i&&Ze(()=>{s&&(t||(t=Le(e,Ht,{duration:150},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=Le(e,Ht,{duration:150},!1)),t.run(0)),s=!1},d(i){i&&S(e),i&&t&&t.end()}}}function V_(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v,w,N,R,D=!n[2]&&_l();return{c(){e=_("button"),e.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',t=b(),s=_("a"),s.innerHTML=`Support me
    <img src="misc/kofi-badge.png" alt="" class="svelte-hjaz47"/>`,i=b(),r=_("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=b(),l=_("button"),a=_("iconify-icon"),c=b(),u=_("span"),u.textContent="Changelog",f=b(),D&&D.c(),p=b(),m=_("button"),m.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',g=b(),v=_("span"),w=z(n[0]),d(e,"class","info p-1 svelte-hjaz47"),d(e,"id","credits"),d(s,"class","info p-1 svelte-hjaz47"),d(s,"id","donate"),d(s,"href","https://ko-fi.com/xt8ss"),d(s,"target","_blank"),d(r,"class","info p-1 svelte-hjaz47"),d(r,"id","help"),Ue(a,"icon","octicon:log-16"),d(u,"class","tooltip"),d(u,"id","right"),d(l,"class","info svelte-hjaz47"),d(l,"id","changelog"),d(m,"class","info p-1 svelte-hjaz47"),d(m,"id","policy"),d(v,"class","info svelte-hjaz47"),d(v,"id","version")},m(A,k){T(A,e,k),T(A,t,k),T(A,s,k),T(A,i,k),T(A,r,k),T(A,o,k),T(A,l,k),h(l,a),h(l,c),h(l,u),h(l,f),D&&D.m(l,null),T(A,p,k),T(A,m,k),T(A,g,k),T(A,v,k),h(v,w),N||(R=[Oe(e,"click",n[3]),Oe(r,"click",n[4]),Oe(l,"click",n[5]),Oe(m,"click",n[6])],N=!0)},p(A,[k]){A[2]?D&&(Et(),ce(D,1,1,()=>{D=null}),It()):D?k&4&&K(D,1):(D=_l(),D.c(),K(D,1),D.m(l,null)),k&1&&me(w,A[0])},i(A){K(D)},o(A){ce(D)},d(A){A&&(S(e),S(t),S(s),S(i),S(r),S(o),S(l),S(p),S(m),S(g),S(v)),D&&D.d(),N=!1,at(R)}}}function $_(n,e,t){let s,i;_e(n,pt,u=>t(1,s=u)),_e(n,ms,u=>t(2,i=u));let{version:r}=e;const o=u=>{Bt(u),se(pt,s.component=F_,s)},l=u=>{Bt(u),se(pt,s.component=Dc,s)},a=u=>{Bt(u),se(pt,s.component=M_,s),se(ms,i=!0,i)},c=u=>{Bt(u),se(pt,s.component=U_,s)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,s,i,o,l,a,c]}class Y_ extends dt{constructor(e){super(),ft(this,e,$_,V_,ct,{version:0})}}function K_(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v,w;return{c(){e=_("div"),t=_("span"),t.textContent="Choose your category",s=b(),i=_("button"),r=_("img"),l=b(),a=_("span"),a.textContent="Equipment",c=b(),u=_("button"),f=_("img"),m=b(),g=_("span"),g.textContent="Weapons",d(t,"id","title"),d(t,"class","svelte-w2ulp9"),nt(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/7/7a/WhiteSpectralVanguardIcon.png")||d(r,"src",o),d(r,"alt",""),d(r,"class","svelte-w2ulp9"),i.disabled=n[0],d(i,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-w2ulp9"),Ke(i,"selected",n[1].mode=="equipment"),nt(f.src,p="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/9/95/TheJadeTwin.png")||d(f,"src",p),d(f,"alt",""),d(f,"class","svelte-w2ulp9"),u.disabled=n[0],d(u,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-w2ulp9"),Ke(u,"selected",n[1].mode=="weapons"),d(e,"class","chooseModeCont ff-bg flex fd-row fw border-tp br-1 bs svelte-w2ulp9")},m(N,R){T(N,e,R),h(e,t),h(e,s),h(e,i),h(i,r),h(i,l),h(i,a),h(e,c),h(e,u),h(u,f),h(u,m),h(u,g),v||(w=[Oe(i,"click",n[2]),Oe(u,"click",n[3])],v=!0)},p(N,[R]){R&1&&(i.disabled=N[0]),R&2&&Ke(i,"selected",N[1].mode=="equipment"),R&1&&(u.disabled=N[0]),R&2&&Ke(u,"selected",N[1].mode=="weapons")},i:ae,o:ae,d(N){N&&S(e),v=!1,at(w)}}}function Q_(n,e,t){let s,i;return _e(n,fn,l=>t(0,s=l)),_e(n,gt,l=>t(1,i=l)),[s,i,l=>{Bt(l),s||se(gt,i.mode="equipment",i)},l=>{Bt(l),s||se(gt,i.mode="weapons",i)}]}class J_ extends dt{constructor(e){super(),ft(this,e,Q_,K_,ct,{})}}function ml(n,e,t){const s=n.slice();return s[6]=e[t][0],s[7]=e[t][1],s[8]=e[t][2],s[10]=t,s}function gl(n){let e,t,s=n[6]+"",i,r,o,l,a;function c(){return n[5](n[8],n[7])}return{c(){e=_("div"),t=_("button"),i=z(s),o=b(),t.disabled=r=n[8],d(t,"class","flex fjc-center fai-center light-hover svelte-1mwja36"),d(e,"class","ff-bg posrel border-tp br-1 svelte-1mwja36")},m(u,f){T(u,e,f),h(e,t),h(t,i),h(e,o),l||(a=[Oe(t,"click",c),Ol(n[3].call(null,t,n[10]))],l=!0)},p(u,f){n=u,f&1&&s!==(s=n[6]+"")&&me(i,s),f&1&&r!==(r=n[8])&&(t.disabled=r)},d(u){u&&S(e),l=!1,at(a)}}}function X_(n){let e,t=Ie(n[0]),s=[];for(let i=0;i<t.length;i+=1)s[i]=gl(ml(n,t,i));return{c(){e=_("div");for(let i=0;i<s.length;i+=1)s[i].c();d(e,"class","options flex svelte-1mwja36")},m(i,r){T(i,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(i,[r]){if(r&7){t=Ie(i[0]);let o;for(o=0;o<t.length;o+=1){const l=ml(i,t,o);s[o]?s[o].p(l,r):(s[o]=gl(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},i:ae,o:ae,d(i){i&&S(e),ut(s,i)}}}function Z_(n,e,t){let s;_e(n,pt,c=>t(1,s=c));const i=Gl();let{options:r=[],focus:o=null}=e;function l(c,u){u+1===o&&c.focus()}const a=(c,u)=>{c||(i("clicked"),u(),se(pt,s.component=null,s))};return n.$$set=c=>{"options"in c&&t(0,r=c.options),"focus"in c&&t(4,o=c.focus)},[r,s,i,l,o,a]}class Ac extends dt{constructor(e){super(),ft(this,e,Z_,X_,ct,{options:0,focus:4})}}function em(n){let e,t,s,i,r,o,l,a,c,u,f,p,m;return p=new Ac({props:{options:[["Don't show again",n[3]],["Maybe later",n[4]]],focus:2}}),p.$on("clicked",n[5]),{c(){e=_("span"),e.textContent="Support Me",t=b(),s=_("div"),i=_("p"),i.textContent="Thank you for your continuous use of my site!",r=b(),o=_("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,l=b(),a=_("p"),a.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,c=b(),u=_("a"),u.innerHTML='<img src="misc/kofi-badge.png" alt="Ko-fi" class="svelte-1wbcr77"/>',f=b(),Ve(p.$$.fragment),d(e,"class","title"),d(u,"class","flex br-1 bg-change light-hover svelte-1wbcr77"),d(u,"href","https://ko-fi.com/xt8ss"),d(u,"target","_blank"),d(s,"class","flex fd-col fai-center smaller-fs svelte-1wbcr77"),d(s,"id","contents")},m(g,v){T(g,e,v),T(g,t,v),T(g,s,v),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(s,f),He(p,s,null),m=!0},p(g,[v]){const w={};v&2&&(w.options=[["Don't show again",g[3]],["Maybe later",g[4]]]),p.$set(w)},i(g){m||(K(p.$$.fragment,g),m=!0)},o(g){ce(p.$$.fragment,g),m=!1},d(g){g&&(S(e),S(t),S(s)),ze(p)}}}function tm(n,e,t){let s,i;_e(n,rn,c=>t(1,s=c)),_e(n,pt,c=>t(2,i=c));let r=!1;const o=()=>se(rn,s.showAgain=!1,s),l=()=>se(rn,s.timesDenied++,s),a=()=>t(0,r=!0);return n.$$.update=()=>{n.$$.dirty&7&&i.component===null&&!r&&se(rn,s.timesDenied++,s)},[r,s,i,o,l,a]}class nm extends dt{constructor(e){super(),ft(this,e,tm,em,ct,{})}}function vl(n){let e,t;return{c(){e=_("span"),t=z(n[4]),d(e,"class","ff-item svelte-1u4nbi9")},m(s,i){T(s,e,i),h(e,t)},p(s,i){i&16&&me(t,s[4])},d(s){s&&S(e)}}}function sm(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v,w,N,R,D,A,k,M,E,I,W,$,re,U,V,we,H,ue,B,fe,ge,J,he,x,C,Y,G,F,te,ne,de,be,ee,$e,Re,st,it,ke,oe,Qe,Je,Te,pe,Be,Xe,Ne;function X(j){n[8](j)}function le(j){n[9](j)}let L={size:"4.5"};n[0]!==void 0&&(L.checked=n[0]),n[0]!==void 0&&(L.forced=n[0]),f=new As({props:L}),je.push(()=>Rt(f,"checked",X)),je.push(()=>Rt(f,"forced",le)),f.$on("toggle",n[10]);function ie(j){n[11](j)}function Ae(j){n[12](j)}let Q={size:"4.5"};n[3]!==void 0&&(Q.checked=n[3]),n[3]!==void 0&&(Q.forced=n[3]),R=new As({props:Q}),je.push(()=>Rt(R,"checked",ie)),je.push(()=>Rt(R,"forced",Ae)),R.$on("toggle",n[13]);function Ce(j){n[14](j)}function Pe(j){n[15](j)}let Ge={noGuess:!0};n[6]!==void 0&&(Ge.noGuessMode=n[6]),n[4]!==void 0&&(Ge.noGuessItem=n[4]),W=new Nc({props:Ge}),je.push(()=>Rt(W,"noGuessMode",Ce)),je.push(()=>Rt(W,"noGuessItem",Pe));let P=n[4]&&vl(n);function vt(j){n[16](j)}let q={size:"4.5",disabled:!n[4]};return n[5]!==void 0&&(q.checked=n[5]),x=new As({props:q}),je.push(()=>Rt(x,"checked",vt)),x.$on("toggle",n[17]),pe=new Ac({props:{options:[["Create",n[7],!n[4]]]}}),{c(){e=_("div"),e.textContent="Create a Room",t=b(),s=_("div"),i=_("hr"),r=b(),o=_("div"),l=_("span"),l.textContent="Mode:",a=b(),c=_("div"),u=_("span"),Ve(f.$$.fragment),g=b(),v=_("span"),v.textContent="Equipment",w=b(),N=_("span"),Ve(R.$$.fragment),k=b(),M=_("span"),M.textContent="Weapons",E=b(),I=_("div"),Ve(W.$$.fragment),U=b(),V=_("div"),we=_("span"),we.textContent="Item:",H=b(),P&&P.c(),ue=b(),B=_("hr"),fe=b(),ge=_("div"),J=_("span"),J.innerHTML='<button class="flex posrel no-bg-change"><iconify-icon icon="eva:info-outline" id="infoIcon" class="svelte-1u4nbi9"></iconify-icon> <span class="tooltip" id="left">Does not affect attempt count</span></button> <span>Nightmare Mode:</span>',he=b(),Ve(x.$$.fragment),Y=b(),G=_("hr"),F=b(),te=_("div"),ne=_("span"),ne.textContent="Max Player Count:",de=b(),be=_("input"),$e=b(),Re=_("div"),st=_("span"),st.textContent="Max Attempt Count:",it=b(),ke=_("input"),Qe=b(),Je=_("hr"),Te=b(),Ve(pe.$$.fragment),d(e,"class","title"),d(u,"class","flex fai-center cg-1"),d(N,"class","flex fai-center cg-1"),d(c,"class","flex fd-col rg-1"),d(o,"class","flex fjc-center fai-center svelte-1u4nbi9"),d(o,"id","modeChooser"),d(I,"class","flex fjc-center posrel"),d(V,"class","flex fjc-center fai-center cg-1 svelte-1u4nbi9"),d(V,"id","itemName"),d(J,"class","flex fai-center cg-1"),d(ge,"class","flex fjc-center fai-center cg-1"),d(be,"type","number"),d(be,"placeholder","4"),be.disabled=ee=!n[4],d(be,"class","border-tp br-1 svelte-1u4nbi9"),d(te,"class","flex fjc-center fai-center cg-1"),d(ke,"type","number"),d(ke,"placeholder","7"),ke.disabled=oe=!n[4],d(ke,"class","border-tp br-1 svelte-1u4nbi9"),d(Re,"class","flex fjc-center fai-center cg-1"),d(s,"class","flex fd-col smaller-fs svelte-1u4nbi9"),d(s,"id","contents")},m(j,Ye){T(j,e,Ye),T(j,t,Ye),T(j,s,Ye),h(s,i),h(s,r),h(s,o),h(o,l),h(o,a),h(o,c),h(c,u),He(f,u,null),h(u,g),h(u,v),h(c,w),h(c,N),He(R,N,null),h(N,k),h(N,M),h(s,E),h(s,I),He(W,I,null),h(s,U),h(s,V),h(V,we),h(V,H),P&&P.m(V,null),h(s,ue),h(s,B),h(s,fe),h(s,ge),h(ge,J),h(ge,he),He(x,ge,null),h(s,Y),h(s,G),h(s,F),h(s,te),h(te,ne),h(te,de),h(te,be),Ts(be,n[1]),h(s,$e),h(s,Re),h(Re,st),h(Re,it),h(Re,ke),Ts(ke,n[2]),h(s,Qe),h(s,Je),h(s,Te),He(pe,s,null),Be=!0,Xe||(Ne=[Oe(be,"input",n[18]),Oe(ke,"input",n[19])],Xe=!0)},p(j,[Ye]){const Gn={};!p&&Ye&1&&(p=!0,Gn.checked=j[0],Nt(()=>p=!1)),!m&&Ye&1&&(m=!0,Gn.forced=j[0],Nt(()=>m=!1)),f.$set(Gn);const Hn={};!D&&Ye&8&&(D=!0,Hn.checked=j[3],Nt(()=>D=!1)),!A&&Ye&8&&(A=!0,Hn.forced=j[3],Nt(()=>A=!1)),R.$set(Hn);const zn={};!$&&Ye&64&&($=!0,zn.noGuessMode=j[6],Nt(()=>$=!1)),!re&&Ye&16&&(re=!0,zn.noGuessItem=j[4],Nt(()=>re=!1)),W.$set(zn),j[4]?P?P.p(j,Ye):(P=vl(j),P.c(),P.m(V,null)):P&&(P.d(1),P=null);const y={};Ye&16&&(y.disabled=!j[4]),!C&&Ye&32&&(C=!0,y.checked=j[5],Nt(()=>C=!1)),x.$set(y),(!Be||Ye&16&&ee!==(ee=!j[4]))&&(be.disabled=ee),Ye&2&&Ps(be.value)!==j[1]&&Ts(be,j[1]),(!Be||Ye&16&&oe!==(oe=!j[4]))&&(ke.disabled=oe),Ye&4&&Ps(ke.value)!==j[2]&&Ts(ke,j[2]);const De={};Ye&16&&(De.options=[["Create",j[7],!j[4]]]),pe.$set(De)},i(j){Be||(K(f.$$.fragment,j),K(R.$$.fragment,j),K(W.$$.fragment,j),K(x.$$.fragment,j),K(pe.$$.fragment,j),Be=!0)},o(j){ce(f.$$.fragment,j),ce(R.$$.fragment,j),ce(W.$$.fragment,j),ce(x.$$.fragment,j),ce(pe.$$.fragment,j),Be=!1},d(j){j&&(S(e),S(t),S(s)),ze(f),ze(R),ze(W),P&&P.d(),ze(x),ze(pe),Xe=!1,at(Ne)}}}function im(n,e,t){let s,i=!0,r=!1,o="",l=!1,a=4,c=7;function u(){console.log({mode:s,item:o,hardMode:l,playerCount:a,attemptCount:c,players:{}})}function f(E){i=E,t(0,i)}function p(E){i=E,t(0,i)}const m=E=>{t(0,i=E.detail.checked),t(3,r=!1)};function g(E){r=E,t(3,r)}function v(E){r=E,t(3,r)}const w=E=>{t(3,r=E.detail.checked),t(0,i=!1)};function N(E){s=E,t(6,s),t(0,i)}function R(E){o=E,t(4,o)}function D(E){l=E,t(5,l)}const A=E=>t(5,l=E.detail.checked);function k(){a=Ps(this.value),t(1,a)}function M(){c=Ps(this.value),t(2,c)}return n.$$.update=()=>{n.$$.dirty&2&&a<1&&t(1,a=1),n.$$.dirty&2&&a>6&&t(1,a=6),n.$$.dirty&2&&a&&t(1,a=Math.floor(a)),n.$$.dirty&1&&t(6,s=i?"equipment":"weapons"),n.$$.dirty&4&&c<1&&t(2,c=1),n.$$.dirty&4&&c>7&&t(2,c=7),n.$$.dirty&4&&c&&t(2,c=Math.floor(c))},[i,a,c,r,o,l,s,u,f,p,m,g,v,w,N,R,D,A,k,M]}class rm extends dt{constructor(e){super(),ft(this,e,im,sm,ct,{})}}const{document:Kn,window:Cn}=Fc;function bl(n,e,t){const s=n.slice();return s[75]=e[t],s}function yl(n,e,t){const s=n.slice();return s[75]=e[t],s}function wl(n){let e;return{c(){e=_("link"),d(e,"rel","preload"),d(e,"as","image"),d(e,"href",n[75])},m(t,s){T(t,e,s)},p:ae,d(t){t&&S(e)}}}function Cl(n){let e;return{c(){e=_("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,s){T(t,e,s)},d(t){t&&S(e)}}}function El(n){let e,t;return{c(){e=_("img"),d(e,"class","background svelte-md6aq2"),nt(e.src,t=n[75])||d(e,"src",t),d(e,"alt",""),Ke(e,"active",n[30].indexOf(n[75])==n[22])},m(s,i){T(s,e,i)},p(s,i){i[0]&1077936128&&Ke(e,"active",s[30].indexOf(s[75])==s[22])},d(s){s&&S(e)}}}function Il(n){let e,t,s=Math.floor(n[27][n[2]]*100)+"",i,r,o,l;return{c(){e=_("span"),t=z("Zoom: "),i=z(s),r=_("b"),r.textContent="%",d(e,"class","info svelte-md6aq2"),d(e,"id","zoomLevel")},m(a,c){T(a,e,c),h(e,t),h(e,i),h(e,r),l=!0},p(a,c){(!l||c[0]&4)&&s!==(s=Math.floor(a[27][a[2]]*100)+"")&&me(i,s)},i(a){l||(a&&Ze(()=>{l&&(o||(o=Le(e,Ht,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=Le(e,Ht,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&S(e),a&&o&&o.end()}}}function Sl(n){let e,t,s,i,r,o,l,a,c=n[8].muted?"Muted":"Unmuted",u,f,p,m,g,v,w,N,R,D,A,k=ii(n[19],n[20],n[21])+"",M,E,I,W,$,re,U,V,we,H,ue,B,fe,ge,J,he=n[3].includes("equipment")?"stat":" stat intake",x,C,Y,G,F,te,ne,de,be,ee,$e,Re,st,it,ke,oe,Qe,Je;$=new J_({}),te=new As({props:{size:"5",checked:n[4],disabled:n[5].chosenItems.length!=0}}),te.$on("toggle",n[48]);let Te=!n[5].gameWin&&!n[5].gameOver&&kl(n),pe=(n[5].gameWin||n[5].gameOver)&&Tl(n);function Be(L){n[51](L)}let Xe={};n[11]!==void 0&&(Xe.dailyItemsData=n[11]),ee=new m_({props:Xe}),je.push(()=>Rt(ee,"dailyItemsData",Be));let Ne=n[12][n[3]]&&Nl(n),X=n[23].component&&n[23].complete&&Rl(n),le=n[23].component&&!n[23].complete&&Dl(n);return{c(){e=_("main"),t=_("div"),s=_("div"),i=_("button"),r=_("iconify-icon"),l=b(),a=_("span"),u=z(c),f=b(),p=_("button"),m=_("img"),v=b(),w=_("span"),N=z(`Next item in...
                    `),R=_("br"),D=b(),A=new Wl(!1),M=b(),E=_("div"),I=_("button"),I.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-md6aq2"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',W=b(),Ve($.$$.fragment),re=b(),U=b(),V=_("div"),we=_("button"),H=_("iconify-icon"),ue=b(),B=_("span"),fe=z(`No armor (more damage taken).
                    `),ge=_("br"),J=z(`
                    No `),x=z(he),C=z(` / avg.
                    cost / color clues.`),Y=b(),G=_("span"),G.textContent="Nightmare Mode",F=b(),Ve(te.$$.fragment),ne=b(),Te&&Te.c(),de=b(),pe&&pe.c(),be=b(),Ve(ee.$$.fragment),Re=b(),Ne&&Ne.c(),st=b(),X&&X.c(),it=b(),le&&le.c(),ke=kt(),Ue(r,"icon",o="f7:speaker-"+(n[8].muted?"slash":"2")+"-fill"),Ue(r,"class","svelte-md6aq2"),d(a,"class","tooltip"),d(a,"id","bottom"),d(i,"class","flex light-hover svelte-md6aq2"),d(s,"class","iconToggle ff-bg posrel border-tp br-1 bs svelte-md6aq2"),nt(m.src,g="frontierdle.svg")||d(m,"src",g),d(m,"alt","Frontierdle"),d(m,"class","svelte-md6aq2"),A.a=null,d(w,"class","tooltip svelte-md6aq2"),d(w,"id","bottom"),d(p,"class","iconCont ff-bg posrel border-tp br-1 bs no-bg-change svelte-md6aq2"),d(I,"class","flex posrel light-hover svelte-md6aq2"),d(E,"class","iconToggle ff-bg border-tp br-1 bs svelte-md6aq2"),d(t,"class","upperMenu flex fai-center svelte-md6aq2"),Ue(H,"icon","eva:info-outline"),Ue(H,"id","info"),Ue(H,"class","svelte-md6aq2"),d(B,"class","tooltip svelte-md6aq2"),d(B,"id","bottom"),d(we,"class","flex posrel no-bg-change"),d(V,"class","hardModeCont ff-bg flex fai-center cg-1 border-tp br-1 bs svelte-md6aq2"),d(e,"class","flex fd-col fai-center posrel svelte-md6aq2")},m(L,ie){T(L,e,ie),h(e,t),h(t,s),h(s,i),h(i,r),h(i,l),h(i,a),h(a,u),h(t,f),h(t,p),h(p,m),h(p,v),h(p,w),h(w,N),h(w,R),h(w,D),A.m(k,w),h(t,M),h(t,E),h(E,I),h(e,W),He($,e,null),h(e,re),h(e,U),h(e,V),h(V,we),h(we,H),h(we,ue),h(we,B),h(B,fe),h(B,ge),h(B,J),h(B,x),h(B,C),h(V,Y),h(V,G),h(V,F),He(te,V,null),h(e,ne),Te&&Te.m(e,null),h(e,de),pe&&pe.m(e,null),h(e,be),He(ee,e,null),h(e,Re),Ne&&Ne.m(e,null),T(L,st,ie),X&&X.m(L,ie),T(L,it,ie),le&&le.m(L,ie),T(L,ke,ie),oe=!0,Qe||(Je=[Oe(i,"click",n[45]),Oe(I,"click",n[46])],Qe=!0)},p(L,ie){(!oe||ie[0]&256&&o!==(o="f7:speaker-"+(L[8].muted?"slash":"2")+"-fill"))&&Ue(r,"icon",o),(!oe||ie[0]&256)&&c!==(c=L[8].muted?"Muted":"Unmuted")&&me(u,c),(!oe||ie[0]&3670016)&&k!==(k=ii(L[19],L[20],L[21])+"")&&A.p(k),(!oe||ie[0]&8)&&he!==(he=L[3].includes("equipment")?"stat":" stat intake")&&me(x,he);const Ae={};ie[0]&16&&(Ae.checked=L[4]),ie[0]&32&&(Ae.disabled=L[5].chosenItems.length!=0),te.$set(Ae),!L[5].gameWin&&!L[5].gameOver?Te?(Te.p(L,ie),ie[0]&32&&K(Te,1)):(Te=kl(L),Te.c(),K(Te,1),Te.m(e,de)):Te&&(Et(),ce(Te,1,1,()=>{Te=null}),It()),L[5].gameWin||L[5].gameOver?pe?(pe.p(L,ie),ie[0]&32&&K(pe,1)):(pe=Tl(L),pe.c(),K(pe,1),pe.m(e,be)):pe&&(Et(),ce(pe,1,1,()=>{pe=null}),It());const Q={};!$e&&ie[0]&2048&&($e=!0,Q.dailyItemsData=L[11],Nt(()=>$e=!1)),ee.$set(Q),L[12][L[3]]?Ne?Ne.p(L,ie):(Ne=Nl(L),Ne.c(),Ne.m(e,null)):Ne&&(Ne.d(1),Ne=null),L[23].component&&L[23].complete?X?(X.p(L,ie),ie[0]&8388608&&K(X,1)):(X=Rl(L),X.c(),K(X,1),X.m(it.parentNode,it)):X&&(Et(),ce(X,1,1,()=>{X=null}),It()),L[23].component&&!L[23].complete?le?(le.p(L,ie),ie[0]&8388608&&K(le,1)):(le=Dl(L),le.c(),K(le,1),le.m(ke.parentNode,ke)):le&&(Et(),ce(le,1,1,()=>{le=null}),It())},i(L){oe||(K($.$$.fragment,L),K(te.$$.fragment,L),K(Te),K(pe),K(ee.$$.fragment,L),K(X),K(le),oe=!0)},o(L){ce($.$$.fragment,L),ce(te.$$.fragment,L),ce(Te),ce(pe),ce(ee.$$.fragment,L),ce(X),ce(le),oe=!1},d(L){L&&(S(e),S(st),S(it),S(ke)),ze($),ze(te),Te&&Te.d(),pe&&pe.d(),ze(ee),Ne&&Ne.d(),X&&X.d(L),le&&le.d(L),Qe=!1,at(Je)}}}function kl(n){let e,t,s;function i(o){n[49](o)}let r={};return n[18][n[3]]!==void 0&&(r.gameNumber=n[18][n[3]]),e=new E_({props:r}),je.push(()=>Rt(e,"gameNumber",i)),{c(){Ve(e.$$.fragment)},m(o,l){He(e,o,l),s=!0},p(o,l){const a={};!t&&l[0]&262152&&(t=!0,a.gameNumber=o[18][o[3]],Nt(()=>t=!1)),e.$set(a)},i(o){s||(K(e.$$.fragment,o),s=!0)},o(o){ce(e.$$.fragment,o),s=!1},d(o){ze(e,o)}}}function Tl(n){let e,t,s=n[5].gameWin?"Fantastic!":"Farewell...",i,r,o,l,a,c=n[5].gameWin?"won":"lost",u,f,p,m,g,v,w,N,R,D,A,k,M,E,I=n[11][n[3]].name+"",W,$,re,U,V,we,H,ue=ii(n[19],n[20],n[21])+"",B,fe,ge,J,he,x,C;function Y(F){n[50](F)}let G={};return n[18][n[3]]!==void 0&&(G.gameNumber=n[18][n[3]]),ge=new k_({props:G}),je.push(()=>Rt(ge,"gameNumber",Y)),x=new Rc({}),{c(){e=_("div"),t=_("span"),i=z(s),r=b(),o=_("img"),a=z(`
                    You `),u=z(c),f=z("!"),p=b(),m=_("span"),m.textContent="Today's item was...",g=b(),v=_("div"),w=_("a"),N=_("img"),D=b(),A=_("iconify-icon"),M=b(),E=_("span"),W=z(I),$=b(),re=_("span"),U=z(`Next item available in...
                    `),V=_("br"),we=b(),H=_("span"),fe=b(),Ve(ge.$$.fragment),he=b(),Ve(x.$$.fragment),nt(o.src,l=n[5].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||d(o,"src",l),d(o,"id","gameFinishIcon"),d(o,"alt",""),d(o,"class","svelte-md6aq2"),d(t,"class","flex fai-center svelte-md6aq2"),d(t,"id","gameFinishMessage"),d(m,"class","smaller-fs"),nt(N.src,R=Zt+n[11][n[3]].image)||d(N,"src",R),d(N,"alt",""),d(N,"class","svelte-md6aq2"),Ue(A,"icon","tabler:link"),Ue(A,"class","svelte-md6aq2"),d(w,"class","flex fjc-center fai-center svelte-md6aq2"),d(w,"href",k=Mn+n[11][n[3]].link),d(w,"target","_blank"),d(v,"class","itemImg ff-item flex svelte-md6aq2"),d(v,"id","dailyItemImg"),d(E,"class","ff-item itemName svelte-md6aq2"),d(E,"id","dailyItemName"),d(H,"class","ff-item svelte-md6aq2"),d(H,"id","nextItemTime"),d(re,"class","flex fd-col svelte-md6aq2"),d(re,"id","nextItemCont"),d(e,"class","gameFinishCont ff-bg flex fd-col fai-center rg-1 border-tp br-1 bs svelte-md6aq2")},m(F,te){T(F,e,te),h(e,t),h(t,i),h(t,r),h(t,o),h(t,a),h(t,u),h(t,f),h(e,p),h(e,m),h(e,g),h(e,v),h(v,w),h(w,N),h(w,D),h(w,A),h(e,M),h(e,E),h(E,W),h(e,$),h(e,re),h(re,U),h(re,V),h(re,we),h(re,H),H.innerHTML=ue,T(F,fe,te),He(ge,F,te),T(F,he,te),He(x,F,te),C=!0},p(F,te){(!C||te[0]&32)&&s!==(s=F[5].gameWin?"Fantastic!":"Farewell...")&&me(i,s),(!C||te[0]&32&&!nt(o.src,l=F[5].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&d(o,"src",l),(!C||te[0]&32)&&c!==(c=F[5].gameWin?"won":"lost")&&me(u,c),(!C||te[0]&2056&&!nt(N.src,R=Zt+F[11][F[3]].image))&&d(N,"src",R),(!C||te[0]&2056&&k!==(k=Mn+F[11][F[3]].link))&&d(w,"href",k),(!C||te[0]&2056)&&I!==(I=F[11][F[3]].name+"")&&me(W,I),(!C||te[0]&3670016)&&ue!==(ue=ii(F[19],F[20],F[21])+"")&&(H.innerHTML=ue);const ne={};!J&&te[0]&262152&&(J=!0,ne.gameNumber=F[18][F[3]],Nt(()=>J=!1)),ge.$set(ne)},i(F){C||(F&&Ze(()=>{C&&(B||(B=Le(e,Ht,{duration:150},!0)),B.run(1))}),K(ge.$$.fragment,F),K(x.$$.fragment,F),C=!0)},o(F){F&&(B||(B=Le(e,Ht,{duration:150},!1)),B.run(0)),ce(ge.$$.fragment,F),ce(x.$$.fragment,F),C=!1},d(F){F&&(S(e),S(fe),S(he)),F&&B&&B.end(),ze(ge,F),ze(x,F)}}}function Nl(n){let e,t,s,i,r,o,l,a,c,u,f,p=n[12][n[3]].name+"",m;return{c(){e=_("div"),t=z(`Yesterday's item was...
                `),s=_("div"),i=_("a"),r=_("img"),l=b(),a=_("iconify-icon"),u=b(),f=_("span"),m=z(p),nt(r.src,o=Zt+n[12][n[3]].image)||d(r,"src",o),d(r,"alt",""),d(r,"class","svelte-md6aq2"),Ue(a,"icon","tabler:link"),Ue(a,"class","svelte-md6aq2"),d(i,"class","flex fjc-center fai-center svelte-md6aq2"),d(i,"href",c=Mn+n[12][n[3]].link),d(i,"target","_blank"),d(s,"class","itemImg ff-item flex svelte-md6aq2"),d(s,"id","previousItemImg"),d(f,"class","ff-item itemName svelte-md6aq2"),d(f,"id","previousItemName"),d(e,"class","previousItemCont ff-bg flex fd-col fai-center rg-1 border-tp br-1 bs svelte-md6aq2")},m(g,v){T(g,e,v),h(e,t),h(e,s),h(s,i),h(i,r),h(i,l),h(i,a),h(e,u),h(e,f),h(f,m)},p(g,v){v[0]&4104&&!nt(r.src,o=Zt+g[12][g[3]].image)&&d(r,"src",o),v[0]&4104&&c!==(c=Mn+g[12][g[3]].link)&&d(i,"href",c),v[0]&4104&&p!==(p=g[12][g[3]].name+"")&&me(m,p)},d(g){g&&S(e)}}}function Rl(n){let e,t,s,i,r;var o=n[23].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=Os(o,l())),{c(){e=_("div"),t&&Ve(t.$$.fragment),d(e,"class","promptCont")},m(a,c){T(a,e,c),t&&He(t,e,null),n[52](e),s=!0,i||(r=Oe(e,"click",n[53]),i=!0)},p(a,c){if(c[0]&8388608&&o!==(o=a[23].component)){if(t){Et();const u=t;ce(u.$$.fragment,1,0,()=>{ze(u,1)}),It()}o?(t=Os(o,l()),Ve(t.$$.fragment),K(t.$$.fragment,1),He(t,e,null)):t=null}},i(a){s||(t&&K(t.$$.fragment,a),s=!0)},o(a){t&&ce(t.$$.fragment,a),s=!1},d(a){a&&S(e),t&&ze(t),n[52](null),i=!1,r()}}}function Dl(n){let e,t,s,i,r,o,l;var a=n[23].component;function c(u,f){return{props:{prompted:!0}}}return a&&(s=Os(a,c())),{c(){e=_("div"),t=_("div"),s&&Ve(s.$$.fragment),d(t,"class","flex fd-col border-tp br-1 bs"),d(e,"class","promptCont")},m(u,f){T(u,e,f),h(e,t),s&&He(s,t,null),n[55](e),r=!0,o||(l=[Oe(t,"introstart",n[54]),Oe(e,"click",n[56])],o=!0)},p(u,f){if(f[0]&8388608&&a!==(a=u[23].component)){if(s){Et();const p=s;ce(p.$$.fragment,1,0,()=>{ze(p,1)}),It()}a?(s=Os(a,c()),Ve(s.$$.fragment),K(s.$$.fragment,1),He(s,t,null)):s=null}},i(u){r||(s&&K(s.$$.fragment,u),u&&Ze(()=>{r&&(i||(i=Le(t,rt,{duration:200},!0)),i.run(1))}),r=!0)},o(u){s&&ce(s.$$.fragment,u),u&&(i||(i=Le(t,rt,{duration:200},!1)),i.run(0)),r=!1},d(u){u&&S(e),s&&ze(s),u&&i&&i.end(),n[55](null),o=!1,at(l)}}}function om(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v,w,N,R,D,A,k,M,E,I,W,$,re=wn(n[7])&&wn(n[6])&&n[9],U,V,we,H;Ze(n[39]);let ue=Ie(n[30]),B=[];for(let C=0;C<ue.length;C+=1)B[C]=wl(yl(n,ue,C));let fe=n[23].component&&Cl(),ge=Ie(n[30]),J=[];for(let C=0;C<ge.length;C+=1)J[C]=El(bl(n,ge,C));let he=n[10]&&Il(n);W=new Y_({props:{version:er}});let x=re&&Sl(n);return{c(){e=b();for(let C=0;C<B.length;C+=1)B[C].c();t=kt(),fe&&fe.c(),s=kt(),i=b(),r=_("div"),o=_("audio"),c=b(),u=_("audio"),m=b(),g=_("audio"),N=b(),R=_("audio"),k=b(),M=_("div");for(let C=0;C<J.length;C+=1)J[C].c();E=b(),he&&he.c(),I=b(),Ve(W.$$.fragment),$=b(),x&&x.c(),U=kt(),nt(o.src,l="audio/lucky.mp3")||d(o,"src",l),o.muted=a=n[8].muted,nt(u.src,f="audio/farewell.mp3")||d(u,"src",f),u.muted=p=n[8].muted,nt(g.src,v="audio/heDidItAgain.mp3")||d(g,"src",v),g.muted=w=n[8].muted,nt(R.src,D="audio/fishCatch.mp3")||d(R,"src",D),R.muted=A=n[8].muted,d(M,"class","backgrounds")},m(C,Y){T(C,e,Y);for(let G=0;G<B.length;G+=1)B[G]&&B[G].m(Kn.head,null);h(Kn.head,t),fe&&fe.m(Kn.head,null),h(Kn.head,s),T(C,i,Y),T(C,r,Y),h(r,o),n[41](o),h(r,c),h(r,u),n[42](u),h(r,m),h(r,g),n[43](g),h(r,N),h(r,R),n[44](R),T(C,k,Y),T(C,M,Y);for(let G=0;G<J.length;G+=1)J[G]&&J[G].m(M,null);T(C,E,Y),he&&he.m(C,Y),T(C,I,Y),He(W,C,Y),T(C,$,Y),x&&x.m(C,Y),T(C,U,Y),V=!0,we||(H=[Oe(Cn,"storage",n[36]),Oe(Cn,"wheel",n[37],{passive:!1}),Oe(Cn,"keydown",n[38]),Oe(Cn,"resize",n[39]),Oe(Kn,"visibilitychange",n[40])],we=!0)},p(C,Y){if(Y[0]&1073741824){ue=Ie(C[30]);let G;for(G=0;G<ue.length;G+=1){const F=yl(C,ue,G);B[G]?B[G].p(F,Y):(B[G]=wl(F),B[G].c(),B[G].m(t.parentNode,t))}for(;G<B.length;G+=1)B[G].d(1);B.length=ue.length}if(C[23].component?fe||(fe=Cl(),fe.c(),fe.m(s.parentNode,s)):fe&&(fe.d(1),fe=null),(!V||Y[0]&256&&a!==(a=C[8].muted))&&(o.muted=a),(!V||Y[0]&256&&p!==(p=C[8].muted))&&(u.muted=p),(!V||Y[0]&256&&w!==(w=C[8].muted))&&(g.muted=w),(!V||Y[0]&256&&A!==(A=C[8].muted))&&(R.muted=A),Y[0]&1077936128){ge=Ie(C[30]);let G;for(G=0;G<ge.length;G+=1){const F=bl(C,ge,G);J[G]?J[G].p(F,Y):(J[G]=El(F),J[G].c(),J[G].m(M,null))}for(;G<J.length;G+=1)J[G].d(1);J.length=ge.length}C[10]?he?(he.p(C,Y),Y[0]&1024&&K(he,1)):(he=Il(C),he.c(),K(he,1),he.m(I.parentNode,I)):he&&(Et(),ce(he,1,1,()=>{he=null}),It()),Y[0]&704&&(re=wn(C[7])&&wn(C[6])&&C[9]),re?x?(x.p(C,Y),Y[0]&704&&K(x,1)):(x=Sl(C),x.c(),K(x,1),x.m(U.parentNode,U)):x&&(Et(),ce(x,1,1,()=>{x=null}),It())},i(C){V||(K(he),K(W.$$.fragment,C),K(x),V=!0)},o(C){ce(he),ce(W.$$.fragment,C),ce(x),V=!1},d(C){C&&(S(e),S(i),S(r),S(k),S(M),S(E),S(I),S($),S(U)),ut(B,C),S(t),fe&&fe.d(C),S(s),n[41](null),n[42](null),n[43](null),n[44](null),ut(J,C),he&&he.d(C),ze(W,C),x&&x.d(C),we=!1,at(H)}}}let er="v1.1.1";function ii(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function lm(n,e,t){let s,i,r,o,l,a,c,u,f,p,m,g,v,w,N;_e(n,Tt,y=>t(34,i=y)),_e(n,hn,y=>t(4,r=y)),_e(n,si,y=>t(35,o=y)),_e(n,Ct,y=>t(5,l=y)),_e(n,Fo,y=>t(6,a=y)),_e(n,ni,y=>t(7,c=y)),_e(n,gt,y=>t(8,u=y)),_e(n,pt,y=>t(23,f=y)),_e(n,ms,y=>t(63,p=y)),_e(n,Mt,y=>t(24,m=y)),_e(n,rn,y=>t(64,g=y)),_e(n,Ln,y=>t(25,v=y)),_e(n,Zi,y=>t(65,w=y)),_e(n,fn,y=>t(26,N=y));let R,D,A=!1,k=7,M=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],E=!1,I,W,$={},re={},U=["version","builds","changelogSeen","fd-userId"],V,we,H,ue,B,fe=0;$c(()=>{if(t(9,A=!0),!w)se(Zi,w=!0,w),se(pt,f.component=Dc,f);else if(g.showAgain){for(let De in v)fe+=v[De].gamesPlayed;let y=Math.floor((fe-g.lastGamesPlayed)/3);y&&y>=g.timesDenied&&(se(rn,g.lastGamesPlayed=fe,g),se(pt,f.component=nm,f))}});function ge(){I=setTimeout(()=>{t(10,E=!1)},750)}function J(){clearTimeout(I),t(10,E=!0),ge()}let he={equipment:19816,weapons:19818},x,C,Y=58,G=58,F=58,te;function ne(){let y=0;clearInterval(te),x=Date.now()/1e3/60/60/24+y,t(18,C={equipment:Math.floor(x)-he.equipment,weapons:Math.floor(x)-he.weapons}),setTimeout(()=>{for(let De of["equipment","weapons"])m[De].gameNum!=C[De]+1&&(se(Ct,l=Lt.currentGameData[u.mode],l),se(Mt,m[De]=Lt.currentGameData[De],m),se(Mt,m[De].gameNum=C[De]+1,m))}),Wp(Bp(qp(s_))).then(De=>{se(Fo,a={equipment:De.val().rng_equipment_list[C.equipment],weapons:De.val().rng_weapons_list[C.weapons]},a),t(33,$={equipment:De.val().rng_equipment_list[C.equipment-1],weapons:De.val().rng_weapons_list[C.weapons-1]})}),te=setInterval(()=>{let De=Date.now(),xn=(Math.floor(x)+1-y)*24*60*60*1e3-De;t(19,Y=Math.floor(xn/1e3/60/60)),t(20,G=Math.floor(xn%(1e3*60*60)/(1e3*60))),t(21,F=Math.floor(xn%(1e3*60)/1e3)),Y==0&&G==0&&F==0&&(se(Ct,l=Lt.currentGameData[u.mode],l),se(Mt,m.equipment=Lt.currentGameData.equipment,m),se(Mt,m.weapons=Lt.currentGameData.weapons,m),setTimeout(ne,1e3))},1e3)}ne();let de=["equipment","weapons"];for(let y of de)fetch(`https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/item-data/${y}Data.json`).then(async De=>{if(De.status!=200){console.error(`Failed to fetch ${y}!
Status: ${De.status}`);return}let Ss=await De.json();se(ni,c[y]=Ss.sort((xn,Pc)=>xn.name.toLowerCase().localeCompare(Pc.name.toLowerCase())),c)});let be=[],ee=[],$e,Re,st=9;for(let y=0;y<st;y++)be.push(`backgrounds/BG${y}.jpg`);function it(y){Re=Math.floor(Math.random()*y.length)}it(be);function ke(){t(22,$e=Re),ee.push(Re)}ke(),function y(){setTimeout(()=>{if(it(be),!ee.length)ke();else if(ee.length>3&&(ee=ee.slice(1)),!ee.includes(Re))ke();else{let De=[...Array(st).keys()].filter(Ss=>!ee.includes(Ss));it(De),ke()}document.visibilityState=="visible"&&y()},45e3)}(),localStorage.getItem("fd-version")!=er&&(se(ms,p=!1,p),localStorage.setItem("fd-version",er));function oe(){se(Ct,l.gameWin=!0,l),se(Tt,i.gamesPlayed++,i),se(Tt,i.gamesWon++,i),se(Tt,i.streak++,i),se(Tt,i.winInfo[l.chosenItems.length]++,i),(l.chosenItems.length===1?B:i.streak>=3?ue:we).play()}function Qe(){se(Ct,l.gameOver=!0,l),se(Tt,i.gamesPlayed++,i),se(Tt,i.streak=0,i),H.play()}function Je(){se(pt,f.component=null,f),se(pt,f.complete=!1,f)}function Te(){let y=D>R;document.documentElement.style.fontSize=`${(y?.75:D/R*.8)*M[k]}vh`}const pe=y=>{U.includes(y.key)?localStorage.setItem(y.key,y.oldValue):y.key=="fd-currentGameData"?y.url.includes("ls=true")?se(Mt,m=JSON.parse(y.newValue),m):localStorage.setItem("fd-currentGameData",JSON.stringify(m)):y.key=="fd-settings"?y.url.includes("ls=true")?se(gt,u=JSON.parse(y.newValue),u):localStorage.setItem("fd-settings",JSON.stringify(u)):y.key=="fd-playerStats"&&(y.url.includes("ls=true")?se(Ln,v=JSON.parse(y.newValue),v):localStorage.setItem("fd-playerStats",JSON.stringify(v)))},Be=y=>{let De=y.wheelDeltaY;if(y.ctrlKey){if(y.preventDefault(),M[k]==.2&&De<0||M[k]==5&&De>0)return;De>0?t(2,k++,k):t(2,k--,k),J()}},Xe=y=>{let De=["Enter"," ","Escape"];y.ctrlKey&&(y.key=="-"||y.key=="+"||y.code=="Equal"||y.key=="0")&&(y.preventDefault(),(y.key=="+"||y.code=="Equal")&&M[k]!=5?t(2,k++,k):y.key=="-"&&M[k]!=.2?t(2,k--,k):y.key=="0"&&M[k]!=1&&t(2,k=7),J()),f.component&&V&&(!y.ctrlKey&&!y.shiftKey&&!y.altKey&&De.includes(y.key)?Je():setTimeout(()=>{y.key=="Tab"&&!V.contains(document.activeElement)&&Je()}))};function Ne(){t(0,R=Cn.outerHeight),t(1,D=Cn.outerWidth)}const X=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,R=window.outerHeight),t(1,D=window.outerWidth),Te()})};function le(y){je[y?"unshift":"push"](()=>{we=y,t(14,we)})}function L(y){je[y?"unshift":"push"](()=>{H=y,t(15,H)})}function ie(y){je[y?"unshift":"push"](()=>{ue=y,t(16,ue)})}function Ae(y){je[y?"unshift":"push"](()=>{B=y,t(17,B)})}const Q=y=>{Bt(y),!N&&se(gt,u.muted=!u.muted,u)},Ce=y=>{Bt(y),l.gameWin||l.gameOver?(location.hash="playerStats",Xi()):(se(pt,f.complete=!0,f),se(pt,f.component=Rc,f))},Pe=()=>{N||se(pt,f.component=rm,f)},Ge=y=>{if(l.chosenItems.length){y.detail.checked=!y.detail.checked;return}se(hn,r=y.detail.checked,r)};function P(y){n.$$.not_equal(C[s],y)&&(C[s]=y,t(18,C))}function vt(y){n.$$.not_equal(C[s],y)&&(C[s]=y,t(18,C))}function q(y){W=y,t(11,W),t(7,c),t(6,a),t(33,$)}function j(y){je[y?"unshift":"push"](()=>{V=y,t(13,V)})}const Ye=y=>{V.children[0].contains(y.target)||Je()},Gn=()=>{let y=V.querySelector("a, button, input");y&&y.focus()};function Hn(y){je[y?"unshift":"push"](()=>{V=y,t(13,V)})}const zn=y=>{V.children[0].contains(y.target)||Je()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(R||D||k)&&Te(),n.$$.dirty[0]&256&&t(3,s=u.mode),n.$$.dirty[0]&192|n.$$.dirty[1]&4&&wn(c)&&wn(a)&&(t(11,W={equipment:c.equipment.find(y=>y.name==a.equipment),weapons:c.weapons.find(y=>y.name==a.weapons)}),t(12,re={equipment:c.equipment.find(y=>y.name==$.equipment),weapons:c.weapons.find(y=>y.name==$.weapons)})),n.$$.dirty[0]&16&&se(si,o=r?6:7,o),n.$$.dirty[0]&104|n.$$.dirty[1]&16&&l.chosenItems.length&&!l.gameWin&&!l.gameOver&&(l.chosenItems[l.chosenItems.length-1].name==a[s]?oe():l.chosenItems.length==o&&Qe()),n.$$.dirty[1]&8&&i.streak>i.maxStreak&&se(Tt,i.maxStreak=i.streak,i)},[R,D,k,s,r,l,a,c,u,A,E,W,re,V,we,H,ue,B,C,Y,G,F,$e,f,m,v,N,M,U,J,be,Je,Te,$,i,o,pe,Be,Xe,Ne,X,le,L,ie,Ae,Q,Ce,Pe,Ge,P,vt,q,j,Ye,Gn,Hn,zn]}class am extends dt{constructor(e){super(),ft(this,e,lm,om,ct,{},null,[-1,-1,-1])}}new am({target:document.body});
