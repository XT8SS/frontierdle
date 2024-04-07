var Ec=Object.defineProperty;var Ic=(n,e,t)=>e in n?Ec(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Wt=(n,e,t)=>(Ic(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Z(){}const Gs=n=>n;function vl(n){return n()}function kr(){return Object.create(null)}function ot(n){n.forEach(vl)}function on(n){return typeof n=="function"}function nt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let _s;function Ge(n,e){return n===e?!0:(_s||(_s=document.createElement("a")),_s.href=e,n===_s.href)}function Sc(n){return Object.keys(n).length===0}function yl(n,...e){if(n==null){for(const s of e)s(void 0);return Z}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Vn(n){let e;return yl(n,t=>e=t)(),e}function le(n,e,t){n.$$.on_destroy.push(yl(e,t))}function J(n,e,t){return n.set(t),e}function bl(n){return n&&on(n.destroy)?n.destroy:Z}const wl=typeof window<"u";let Gi=wl?()=>window.performance.now():()=>Date.now(),zi=wl?n=>requestAnimationFrame(n):Z;const mn=new Set;function Cl(n){mn.forEach(e=>{e.c(n)||(mn.delete(e),e.f())}),mn.size!==0&&zi(Cl)}function Vi(n){let e;return mn.size===0&&zi(Cl),{promise:new Promise(t=>{mn.add(e={c:n,f:t})}),abort(){mn.delete(e)}}}const kc=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(n,e){n.appendChild(e)}function El(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Tc(n){const e=_("style");return e.textContent="/* empty */",Nc(El(n),e),e.sheet}function Nc(n,e){return h(n.head||n,e),e.sheet}function T(n,e,t){n.insertBefore(e,t||null)}function S(n){n.parentNode&&n.parentNode.removeChild(n)}function Xe(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function _(n){return document.createElement(n)}function Rc(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function B(n){return document.createTextNode(n)}function y(){return B(" ")}function bt(){return B("")}function Le(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function d(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function We(n,e,t){const s=e.toLowerCase();s in n?n[s]=typeof n[s]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:d(n,e,t)}function Dc(n){return Array.from(n.childNodes)}function ue(n,e){e=""+e,n.data!==e&&(n.data=e)}function Cn(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,s?"important":"")}function Qe(n,e,t){n.classList.toggle(e,!!t)}function Il(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}class Sl{constructor(e=!1){Wt(this,"is_svg",!1);Wt(this,"e");Wt(this,"n");Wt(this,"t");Wt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,s=null){this.e||(this.is_svg?this.e=Rc(t.nodeName):this.e=_(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)T(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}function ys(n,e){return new n(e)}const bs=new Map;let ws=0;function Ac(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Pc(n,e){const t={stylesheet:Tc(e),rules:{}};return bs.set(n,t),t}function Cs(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let w=0;w<=1;w+=a){const N=e+(t-e)*r(w);c+=w*100+`%{${o(N,1-N)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${Ac(u)}_${l}`,p=El(n),{stylesheet:m,rules:g}=bs.get(p)||Pc(p,n);g[f]||(g[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,ws+=1,f}function $i(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),ws-=i,ws||Oc())}function Oc(){zi(()=>{ws||(bs.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&S(e)}),bs.clear())})}function Mc(n,e,t,s){if(!e)return Z;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return Z;const{delay:r=0,duration:o=300,easing:l=Gs,start:a=Gi()+r,end:c=a+o,tick:u=Z,css:f}=t(n,{from:e,to:i},s);let p=!0,m=!1,g;function v(){f&&(g=Cs(n,0,1,o,r,l,f)),r||(m=!0)}function w(){f&&$i(n,g),p=!1}return Vi(N=>{if(!m&&N>=a&&(m=!0),m&&N>=c&&(u(1,0),w()),!p)return!1;if(m){const P=N-a,O=0+1*l(P/o);u(O,1-O)}return!0}),v(),u(0,1),w}function Lc(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=s,Fc(n,i)}}function Fc(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let $n;function jn(n){$n=n}function kl(){if(!$n)throw new Error("Function called outside component initialization");return $n}function xc(n){kl().$$.on_mount.push(n)}function Tl(){const n=kl();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=Il(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const hn=[],ht=[];let gn=[];const vi=[],Wc=Promise.resolve();let yi=!1;function Bc(){yi||(yi=!0,Wc.then(Nl))}function qe(n){gn.push(n)}function zs(n){vi.push(n)}const ii=new Set;let an=0;function Nl(){if(an!==0)return;const n=$n;do{try{for(;an<hn.length;){const e=hn[an];an++,jn(e),jc(e.$$)}}catch(e){throw hn.length=0,an=0,e}for(jn(null),hn.length=0,an=0;ht.length;)ht.pop()();for(let e=0;e<gn.length;e+=1){const t=gn[e];ii.has(t)||(ii.add(t),t())}gn.length=0}while(hn.length);for(;vi.length;)vi.pop()();yi=!1,ii.clear(),jn(n)}function jc(n){if(n.fragment!==null){n.update(),ot(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(qe)}}function qc(n){const e=[],t=[];gn.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),gn=e}let Mn;function Rl(){return Mn||(Mn=Promise.resolve(),Mn.then(()=>{Mn=null})),Mn}function qn(n,e,t){n.dispatchEvent(Il(`${e?"intro":"outro"}${t}`))}const vs=new Set;let Rt;function gt(){Rt={r:0,c:[],p:Rt}}function vt(){Rt.r||ot(Rt.c),Rt=Rt.p}function $(n,e){n&&n.i&&(vs.delete(n),n.i(e))}function ae(n,e,t,s){if(n&&n.o){if(vs.has(n))return;vs.add(n),Rt.c.push(()=>{vs.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const Dl={duration:0};function Hc(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=Rt;l.r+=1;let a;function c(){const{delay:u=0,duration:f=300,easing:p=Gs,tick:m=Z,css:g}=i||Dl;g&&(o=Cs(n,1,0,f,u,p,g));const v=Gi()+u,w=v+f;qe(()=>qn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),Vi(N=>{if(r){if(N>=w)return m(0,1),qn(n,!1,"end"),--l.r||ot(l.c),!1;if(N>=v){const P=p((N-v)/f);m(1-P,P)}}return r})}return on(i)?Rl().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&$i(n,o),r=!1)}}}function De(n,e,t,s){let r=e(n,t,{direction:"both"}),o=s?0:1,l=null,a=null,c=null,u;function f(){c&&$i(n,c)}function p(g,v){const w=g.b-o;return v*=Math.abs(w),{a:o,b:g.b,d:w,duration:v,start:g.start,end:g.start+v,group:g.group}}function m(g){const{delay:v=0,duration:w=300,easing:N=Gs,tick:P=Z,css:O}=r||Dl,E={start:Gi()+v,b:g};g||(E.group=Rt,Rt.r+=1),"inert"in n&&(g?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=E:(O&&(f(),c=Cs(n,o,g,w,v,N,O)),g&&P(0,1),l=p(E,w),qe(()=>qn(n,g,"start")),Vi(I=>{if(a&&I>a.start&&(l=p(a,w),a=null,qn(n,l.b,"start"),O&&(f(),c=Cs(n,o,l.b,l.duration,0,N,r.css))),l){if(I>=l.end)P(o=l.b,1-o),qn(n,l.b,"end"),a||(l.b?f():--l.group.r||ot(l.group.c)),l=null;else if(I>=l.start){const M=I-l.start;o=l.a+l.d*N(M/l.duration),P(o,1-o)}}return!!(l||a)}))}return{run(g){on(r)?Rl().then(()=>{r=r({direction:g?"in":"out"}),m(g)}):m(g)},end(){f(),l=a=null}}}function Ce(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Uc(n,e){ae(n,1,1,()=>{e.delete(n.key)})}function Gc(n,e){n.f(),Uc(n,e)}function zc(n,e,t,s,i,r,o,l,a,c,u,f){let p=n.length,m=r.length,g=p;const v={};for(;g--;)v[n[g].key]=g;const w=[],N=new Map,P=new Map,O=[];for(g=m;g--;){const A=f(i,r,g),F=t(A);let U=o.get(F);U?s&&O.push(()=>U.p(A,e)):(U=c(F,A),U.c()),N.set(F,w[g]=U),F in v&&P.set(F,Math.abs(g-v[F]))}const E=new Set,I=new Set;function M(A){$(A,1),A.m(l,u),o.set(A.key,A),u=A.first,m--}for(;p&&m;){const A=w[m-1],F=n[p-1],U=A.key,X=F.key;A===F?(u=A.first,p--,m--):N.has(X)?!o.has(U)||E.has(U)?M(A):I.has(X)?p--:P.get(U)>P.get(X)?(I.add(U),M(A)):(E.add(X),p--):(a(F,o),p--)}for(;p--;){const A=n[p];N.has(A.key)||a(A,o)}for(;m;)M(w[m-1]);return ot(O),w}function Vs(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function rt(n){n&&n.c()}function et(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),qe(()=>{const r=n.$$.on_mount.map(vl).filter(on);n.$$.on_destroy?n.$$.on_destroy.push(...r):ot(r),n.$$.on_mount=[]}),i.forEach(qe)}function tt(n,e){const t=n.$$;t.fragment!==null&&(qc(t.after_update),ot(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Vc(n,e){n.$$.dirty[0]===-1&&(hn.push(n),Bc(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function lt(n,e,t,s,i,r,o=null,l=[-1]){const a=$n;jn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:Z,not_equal:i,bound:kr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:kr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,p,...m)=>{const g=m.length?m[0]:p;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&Vc(n,f)),p}):[],c.update(),u=!0,ot(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=Dc(e.target);c.fragment&&c.fragment.l(f),f.forEach(S)}else c.fragment&&c.fragment.c();e.intro&&$(n.$$.fragment),et(n,e.target,e.anchor),Nl()}jn(a)}class at{constructor(){Wt(this,"$$");Wt(this,"$$set")}$destroy(){tt(this,1),this.$destroy=Z}$on(e,t){if(!on(t))return Z;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Sc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $c="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($c);function Al(n){const e=n-1;return e*e*e+1}function Mt(n,{delay:e=0,duration:t=400,easing:s=Gs}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}function $e(n,{delay:e=0,duration:t=400,easing:s=Al,start:i=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-i,u=l*(1-r);return{delay:e,duration:t,easing:s,css:(f,p)=>`
			transform: ${a} scale(${1-c*p});
			opacity: ${l-u*p}
		`}}const cn=[];function pt(n,e=Z){let t;const s=new Set;function i(l){if(nt(n,l)&&(n=l,t)){const a=!cn.length;for(const c of s)c[1](),cn.push(c,n);if(a){for(let c=0;c<cn.length;c+=2)cn[c][0](cn[c+1]);cn.length=0}}}function r(l){i(l(n))}function o(l,a=Z){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||Z),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}var Tr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(n,e){if(!n)throw Rn(e)},Rn=function(n){return new Error("Firebase Database ("+Pl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Yc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Yi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let p=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(p=64)),s.push(t[u],t[f],t[p],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ol(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Yc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||f==null)throw new Kc;const p=r<<2|l>>4;if(s.push(p),c!==64){const m=l<<4&240|c>>2;if(s.push(m),f!==64){const g=c<<6&192|f;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ml=function(n){const e=Ol(n);return Yi.encodeByteArray(e,!0)},Es=function(n){return Ml(n).replace(/\./g,"")},bi=function(n){try{return Yi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){return Ll(void 0,n)}function Ll(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Jc(t)||(n[t]=Ll(n[t],e[t]));return n}function Jc(n){return n!=="__proto__"}/**
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
 */function Xc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zc=()=>Xc().__FIREBASE_DEFAULTS__,eu=()=>{if(typeof process>"u"||typeof Tr>"u")return;const n=Tr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bi(n[1]);return e&&JSON.parse(e)},Fl=()=>{try{return Zc()||eu()||tu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nu=n=>{var e,t;return(t=(e=Fl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},su=n=>{const e=nu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},xl=()=>{var n;return(n=Fl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function iu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Es(JSON.stringify(t)),Es(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ru())}function ou(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bl(){return Pl.NODE_ADMIN===!0}function lu(){try{return typeof indexedDB=="object"}catch{return!1}}function au(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="FirebaseError";class os extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=cu,Object.setPrototypeOf(this,os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jl.prototype.create)}}class jl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?uu(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new os(i,l,s)}}function uu(n,e){return n.replace(hu,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const hu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n){return JSON.parse(n)}function He(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Yn(bi(r[0])||""),t=Yn(bi(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},fu=function(n){const e=ql(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},du=function(n){const e=ql(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function En(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Nr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Is(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function wi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Rr(r)&&Rr(o)){if(!wi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Rr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const p=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):f<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const p=(i<<5|i>>>27)+c+a+u+s[f]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Hl(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},$s=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Dn(n){return n&&n._delegate?n._delegate:n}class Kn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class gu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ki;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yu(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vu(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vu(n){return n===Yt?void 0:n}function yu(n){return n.instantiationMode==="EAGER"}/**
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
 */class bu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ae||(Ae={}));const wu={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},Cu=Ae.INFO,Eu={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},Iu=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Eu[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=Cu,this._logHandler=Iu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const Su=(n,e)=>e.some(t=>n instanceof t);let Dr,Ar;function ku(){return Dr||(Dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tu(){return Ar||(Ar=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gl=new WeakMap,Ci=new WeakMap,zl=new WeakMap,ri=new WeakMap,Qi=new WeakMap;function Nu(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Bt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Gl.set(t,n)}).catch(()=>{}),Qi.set(e,n),e}function Ru(n){if(Ci.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ci.set(n,e)}let Ei={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ci.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Du(n){Ei=n(Ei)}function Au(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(oi(this),e,...t);return zl.set(s,e.sort?e.sort():[e]),Bt(s)}:Tu().includes(n)?function(...e){return n.apply(oi(this),e),Bt(Gl.get(this))}:function(...e){return Bt(n.apply(oi(this),e))}}function Pu(n){return typeof n=="function"?Au(n):(n instanceof IDBTransaction&&Ru(n),Su(n,ku())?new Proxy(n,Ei):n)}function Bt(n){if(n instanceof IDBRequest)return Nu(n);if(ri.has(n))return ri.get(n);const e=Pu(n);return e!==n&&(ri.set(n,e),Qi.set(e,n)),e}const oi=n=>Qi.get(n);function Ou(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Bt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Bt(o.result),a.oldVersion,a.newVersion,Bt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Mu=["get","getKey","getAll","getAllKeys","count"],Lu=["put","add","delete","clear"],li=new Map;function Pr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(li.get(e))return li.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Lu.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Mu.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return li.set(e,r),r}Du(n=>({...n,get:(e,t,s)=>Pr(e,t)||n.get(e,t,s),has:(e,t)=>!!Pr(e,t)||n.has(e,t)}));/**
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
 */class Fu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xu(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function xu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ii="@firebase/app",Or="0.9.29";/**
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
 */const Zt=new Ul("@firebase/app"),Wu="@firebase/app-compat",Bu="@firebase/analytics-compat",ju="@firebase/analytics",qu="@firebase/app-check-compat",Hu="@firebase/app-check",Uu="@firebase/auth",Gu="@firebase/auth-compat",zu="@firebase/database",Vu="@firebase/database-compat",$u="@firebase/functions",Yu="@firebase/functions-compat",Ku="@firebase/installations",Qu="@firebase/installations-compat",Ju="@firebase/messaging",Xu="@firebase/messaging-compat",Zu="@firebase/performance",eh="@firebase/performance-compat",th="@firebase/remote-config",nh="@firebase/remote-config-compat",sh="@firebase/storage",ih="@firebase/storage-compat",rh="@firebase/firestore",oh="@firebase/firestore-compat",lh="firebase",ah="10.9.0";/**
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
 */const Si="[DEFAULT]",ch={[Ii]:"fire-core",[Wu]:"fire-core-compat",[ju]:"fire-analytics",[Bu]:"fire-analytics-compat",[Hu]:"fire-app-check",[qu]:"fire-app-check-compat",[Uu]:"fire-auth",[Gu]:"fire-auth-compat",[zu]:"fire-rtdb",[Vu]:"fire-rtdb-compat",[$u]:"fire-fn",[Yu]:"fire-fn-compat",[Ku]:"fire-iid",[Qu]:"fire-iid-compat",[Ju]:"fire-fcm",[Xu]:"fire-fcm-compat",[Zu]:"fire-perf",[eh]:"fire-perf-compat",[th]:"fire-rc",[nh]:"fire-rc-compat",[sh]:"fire-gcs",[ih]:"fire-gcs-compat",[rh]:"fire-fst",[oh]:"fire-fst-compat","fire-js":"fire-js",[lh]:"fire-js-all"};/**
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
 */const Ss=new Map,ki=new Map;function uh(n,e){try{n.container.addComponent(e)}catch(t){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ks(n){const e=n.name;if(ki.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;ki.set(e,n);for(const t of Ss.values())uh(t,n);return!0}function hh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const fh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jt=new jl("app","Firebase",fh);/**
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
 */class dh{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const ph=ah;function Vl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Si,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(t||(t=xl()),!t)throw jt.create("no-options");const r=Ss.get(i);if(r){if(wi(t,r.options)&&wi(s,r.config))return r;throw jt.create("duplicate-app",{appName:i})}const o=new bu(i);for(const a of ki.values())o.addComponent(a);const l=new dh(t,s,o);return Ss.set(i,l),l}function _h(n=Si){const e=Ss.get(n);if(!e&&n===Si&&xl())return Vl();if(!e)throw jt.create("no-app",{appName:n});return e}function vn(n,e,t){var s;let i=(s=ch[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(l.join(" "));return}ks(new Kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mh="firebase-heartbeat-database",gh=1,Qn="firebase-heartbeat-store";let ai=null;function $l(){return ai||(ai=Ou(mh,gh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qn)}catch(t){console.warn(t)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),ai}async function vh(n){try{const t=(await $l()).transaction(Qn),s=await t.objectStore(Qn).get(Yl(n));return await t.done,s}catch(e){if(e instanceof os)Zt.warn(e.message);else{const t=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(t.message)}}}async function Mr(n,e){try{const s=(await $l()).transaction(Qn,"readwrite");await s.objectStore(Qn).put(e,Yl(n)),await s.done}catch(t){if(t instanceof os)Zt.warn(t.message);else{const s=jt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(s.message)}}}function Yl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yh=1024,bh=30*24*60*60*1e3;class wh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Eh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=bh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lr(),{heartbeatsToSend:s,unsentEntries:i}=Ch(this._heartbeatsCache.heartbeats),r=Es(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Lr(){return new Date().toISOString().substring(0,10)}function Ch(n,e=yh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Eh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lu()?au().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fr(n){return Es(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ih(n){ks(new Kn("platform-logger",e=>new Fu(e),"PRIVATE")),ks(new Kn("heartbeat",e=>new wh(e),"PRIVATE")),vn(Ii,Or,n),vn(Ii,Or,"esm2017"),vn("fire-js","")}Ih("");var Sh="firebase",kh="10.9.0";/**
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
 */vn(Sh,kh,"app");var xr={};const Wr="@firebase/database",Br="1.0.3";/**
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
 */let Kl="";function Th(n){Kl=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Yn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Nh(e)}}catch{}return new Rh},Qt=Ql("localStorage"),Ti=Ql("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new Ul("@firebase/database"),Dh=function(){let n=1;return function(){return n++}}(),Jl=function(n){const e=mu(n),t=new _u;t.update(e);const s=t.digest();return Yi.encodeByteArray(s)},ls=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ls.apply(null,s):typeof s=="object"?e+=He(s):e+=s,e+=" "}return e};let Xt=null,jr=!0;const Ah=function(n,e){D(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(yn.logLevel=Ae.VERBOSE,Xt=yn.log.bind(yn),e&&Ti.set("logging_enabled",!0)):typeof n=="function"?Xt=n:(Xt=null,Ti.remove("logging_enabled"))},it=function(...n){if(jr===!0&&(jr=!1,Xt===null&&Ti.get("logging_enabled")===!0&&Ah(!0)),Xt){const e=ls.apply(null,n);Xt(e)}},as=function(n){return function(...e){it(n,...e)}},Ni=function(...n){const e="FIREBASE INTERNAL ERROR: "+ls(...n);yn.error(e)},Lt=function(...n){const e=`FIREBASE FATAL ERROR: ${ls(...n)}`;throw yn.error(e),new Error(e)},yt=function(...n){const e="FIREBASE WARNING: "+ls(...n);yn.warn(e)},Ph=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Oh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},In="[MIN_NAME]",en="[MAX_NAME]",An=function(n,e){if(n===e)return 0;if(n===In||e===en)return-1;if(e===In||n===en)return 1;{const t=qr(n),s=qr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Mh=function(n,e){return n===e?0:n<e?-1:1},Ln=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+He(e))},Ji=function(n){if(typeof n!="object"||n===null)return He(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=He(e[s]),t+=":",t+=Ji(n[e[s]]);return t+="}",t},Zl=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function dt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ea=function(n){D(!Xl(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(a=0;a<64;a+=8){let p=parseInt(u.substr(a,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},Lh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Fh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Wh=new RegExp("^-?(0*)\\d{1,10}$"),Bh=-2147483648,jh=2147483647,qr=function(n){if(Wh.test(n)){const e=Number(n);if(e>=Bh&&e<=jh)return e}return null},cs=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw yt("Exception was thrown by user callback.",t),e},Math.floor(0))}},qh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Hn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Hh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class bn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="5",ta="v",na="s",sa="r",ia="f",ra=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oa="ls",la="p",Ri="ac",aa="websocket",ca="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Gh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ha(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let s;if(e===aa)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ca)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gh(n)&&(t.ns=n.namespace);const i=[];return dt(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.counters_={}}incrementCounter(e,t=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Qc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci={},ui={};function Zi(n){const e=n.toString();return ci[e]||(ci[e]=new zh),ci[e]}function Vh(n,e){const t=n.toString();return ui[t]||(ui[t]=e()),ui[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&cs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="start",Yh="close",Kh="pLPCommand",Qh="pRTLPCB",fa="id",da="pw",pa="ser",Jh="cb",Xh="seg",Zh="ts",ef="d",tf="dframe",_a=1870,ma=30,nf=_a-ma,sf=25e3,rf=3e4;class fn{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=as(e),this.stats_=Zi(t),this.urlFn=a=>(this.appCheckToken&&(a[Ri]=this.appCheckToken),ha(t,ca,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new $h(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rf)),Oh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new er((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hr)this.id=l,this.password=a;else if(o===Yh)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hr]="t",s[pa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Jh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ta]=Xi,this.transportSessionId&&(s[na]=this.transportSessionId),this.lastSessionId&&(s[oa]=this.lastSessionId),this.applicationId&&(s[la]=this.applicationId),this.appCheckToken&&(s[Ri]=this.appCheckToken),typeof location<"u"&&location.hostname&&ra.test(location.hostname)&&(s[sa]=ia);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fn.forceAllow_=!0}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){return fn.forceAllow_?!0:!fn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Lh()&&!Fh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=He(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ml(t),i=Zl(s,nf);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[tf]="t",s[fa]=e,s[da]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=He(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class er{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Dh(),window[Kh+this.uniqueCallbackIdentifier]=e,window[Qh+this.uniqueCallbackIdentifier]=t,this.myIFrame=er.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){it("frame writing exception"),l.stack&&it(l.stack),it(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fa]=this.myID,e[da]=this.myPW,e[pa]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ma+s.length<=_a;){const o=this.pendingSegs.shift();s=s+"&"+Xh+i+"="+o.seg+"&"+Zh+i+"="+o.ts+"&"+ef+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(sf)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=16384,lf=45e3;let Ts=null;typeof MozWebSocket<"u"?Ts=MozWebSocket:typeof WebSocket<"u"&&(Ts=WebSocket);class Et{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=as(this.connId),this.stats_=Zi(t),this.connURL=Et.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[ta]=Xi,typeof location<"u"&&location.hostname&&ra.test(location.hostname)&&(o[sa]=ia),t&&(o[na]=t),s&&(o[oa]=s),i&&(o[Ri]=i),r&&(o[la]=r),ha(e,aa,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qt.set("previous_websocket_failure",!0);try{let s;Bl(),this.mySock=new Ts(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ts!==null&&!Et.forceDisallow_}static previouslyFailed(){return Qt.isInMemoryStorage||Qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Yn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=He(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Zl(t,of);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lf))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fn,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Et&&Et.isAvailable();let s=t&&!Et.previouslyFailed();if(e.webSocketOnly&&(t||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Et];else{const i=this.transports_=[];for(const r of Jn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Jn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=6e4,cf=5e3,uf=10*1024,hf=100*1024,hi="t",Ur="d",ff="s",Gr="r",df="e",zr="o",Vr="a",$r="n",Yr="p",pf="h";class _f{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=as("c:"+this.id+":"),this.transportManager_=new Jn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Hn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hi in e){const t=e[hi];t===Vr?this.upgradeIfSecondaryHealthy_():t===Gr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ln("t",e),s=Ln("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$r,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ln("t",e),s=Ln("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ln(hi,e);if(Ur in e){const s=e[Ur];if(t===pf){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===$r){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ff?this.onConnectionShutdown_(s):t===Gr?this.onReset_(s):t===df?Ni("Server Error: "+s):t===zr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ni("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Xi!==s&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Hn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(af))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends va{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ns}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=32,Qr=768;class Re{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Se(){return new Re("")}function be(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ut(n){return n.pieces_.length-n.pieceNum_}function Pe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Re(n.pieces_,e)}function ya(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function mf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ba(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function wa(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Re(e,0)}function Ue(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new Re(t,0)}function pe(n){return n.pieceNum_>=n.pieces_.length}function ct(n,e){const t=be(n),s=be(e);if(t===null)return e;if(t===s)return ct(Pe(n),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ca(n,e){if(Ut(n)!==Ut(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function It(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ut(n)>Ut(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class gf{constructor(e,t){this.errorPrefix_=t,this.parts_=ba(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$s(this.parts_[s]);Ea(this)}}function vf(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=$s(e),Ea(n)}function yf(n){const e=n.parts_.pop();n.byteLength_-=$s(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ea(n){if(n.byteLength_>Qr)throw new Error(n.errorPrefix_+"has a key path longer than "+Qr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Kr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kr+") or object contains a cycle "+Kt(n))}function Kt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends va{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new tr}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=1e3,bf=60*5*1e3,Jr=30*1e3,wf=1.3,Cf=3e4,Ef="server_kill",Xr=3;class Ot extends ga{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=as("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fn,this.maxReconnectDelay_=bf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Bl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ns.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(He(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Ki,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Ot.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ft(e,"w")){const s=En(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||du(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=fu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ni("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Cf&&(this.reconnectDelay_=Fn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ot.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(f){D(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,l=new _f(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{yt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ef)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&yt(f),a())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nr(this.interruptReasons_)&&(this.reconnectDelay_=Fn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ji(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new Re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){it("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xr&&(this.reconnectDelay_=Jr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){it("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Kl.replace(/\./g,"-")]=1,Wl()?e["framework.cordova"]=1:ou()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ns.getInstance().currentlyOnline();return Nr(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ce(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ce(In,e),i=new ce(In,t);return this.compare(s,i)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms;class Ia extends Ys{static get __EMPTY_NODE(){return ms}static set __EMPTY_NODE(e){ms=e}compare(e,t){return An(e.name,t.name)}isDefinedOn(e){throw Rn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ce.MIN}maxPost(){return new ce(en,ms)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,ms)}toString(){return".key"}}const wn=new Ia;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Ke.RED,this.left=i??ft.EMPTY_NODE,this.right=r??ft.EMPTY_NODE}copy(e,t,s,i,r){return new Ke(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0;Ke.BLACK=!1;class If{copy(e,t,s,i,r){return this}insert(e,t,s){return new Ke(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ft{constructor(e,t=ft.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ft(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new gs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new gs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new gs(this.root_,null,this.comparator_,!0,e)}}ft.EMPTY_NODE=new If;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n,e){return An(n.name,e.name)}function nr(n,e){return An(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;function kf(n){Di=n}const Sa=function(n){return typeof n=="number"?"number:"+ea(n):"string:"+n},ka=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else D(n===Di||n.isEmpty(),"priority of unexpected type.");D(n===Di||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;class Ye{constructor(e,t=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ka(this.priorityNode_)}static set __childrenNodeConstructor(e){Zr=e}static get __childrenNodeConstructor(){return Zr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:be(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=be(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Ut(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sa(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ea(this.value_):e+=this.value_,this.lazyHash_=Jl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(t),r=Ye.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+t),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta,Na;function Tf(n){Ta=n}function Nf(n){Na=n}class Rf extends Ys{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?An(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(en,new Ye("[PRIORITY-POST]",Na))}makePost(e,t){const s=Ta(e);return new ce(t,new Ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const xe=new Rf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=Math.log(2);class Af{constructor(e){const t=r=>parseInt(Math.log(r)/Df,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rs=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let f,p;if(u===0)return null;if(u===1)return f=n[a],p=t?t(f):f,new Ke(p,f.node,Ke.BLACK,null,null);{const m=parseInt(u/2,10)+a,g=i(a,m),v=i(m+1,c);return f=n[m],p=t?t(f):f,new Ke(p,f.node,Ke.BLACK,g,v)}},r=function(a){let c=null,u=null,f=n.length;const p=function(g,v){const w=f-g,N=f;f-=g;const P=i(w+1,N),O=n[w],E=t?t(O):O;m(new Ke(E,O.node,v,null,P))},m=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(g+1));v?p(w,Ke.BLACK):(p(w,Ke.BLACK),p(w,Ke.RED))}return u},o=new Af(n.length),l=r(o);return new ft(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;const un={};class At{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return D(un&&xe,"ChildrenNode.ts has not been loaded"),fi=fi||new At({".priority":un},{".priority":xe}),fi}get(e){const t=En(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ft?t:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,t){D(e!==wn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(ce.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Rs(s,e.getCompare()):l=un;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new At(u,c)}addToIndexes(e,t){const s=Is(this.indexes_,(i,r)=>{const o=En(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),i===un)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(ce.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Rs(l,o.getCompare())}else return un;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new ce(e.name,l))),a.insert(e,e.node)}});return new At(s,this.indexSet_)}removeFromIndexes(e,t){const s=Is(this.indexes_,i=>{if(i===un)return i;{const r=t.get(e.name);return r?i.remove(new ce(e.name,r)):i}});return new At(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn;class Y{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ka(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xn||(xn=new Y(new ft(nr),null,At.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xn}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?xn:t}}getChild(e){const t=be(e);return t===null?this:this.getImmediateChild(t).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ce(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?xn:this.priorityNode_;return new Y(i,o,r)}}updateChild(e,t){const s=be(e);if(s===null)return t;{D(be(e)!==".priority"||Ut(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Pe(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(xe,(o,l)=>{t[o]=l.val(e),s++,r&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sa(this.getPriority().val())+":"),this.forEachChild(xe,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Jl(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ce(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ce(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ce(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===us?-1:0}withIndex(e){if(e===wn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(xe),i=t.getIterator(xe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wn?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Pf extends Y{constructor(){super(new ft(nr),Y.EMPTY_NODE,At.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const us=new Pf;Object.defineProperties(ce,{MIN:{value:new ce(In,Y.EMPTY_NODE)},MAX:{value:new ce(en,us)}});Ia.__EMPTY_NODE=Y.EMPTY_NODE;Ye.__childrenNodeConstructor=Y;kf(us);Nf(us);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=!0;function Ze(n,e=null){if(n===null)return Y.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ye(t,Ze(e))}if(!(n instanceof Array)&&Of){const t=[];let s=!1;if(dt(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ze(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new ce(o,a)))}}),t.length===0)return Y.EMPTY_NODE;const r=Rs(t,Sf,o=>o.name,nr);if(s){const o=Rs(t,xe.getCompare());return new Y(r,Ze(e),new At({".priority":o},{".priority":xe}))}else return new Y(r,Ze(e),At.Default)}else{let t=Y.EMPTY_NODE;return dt(n,(s,i)=>{if(Ft(n,s)&&s.substring(0,1)!=="."){const r=Ze(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Ze(e))}}Tf(Ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends Ys{constructor(e){super(),this.indexPath_=e,D(!pe(e)&&be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?An(e.name,t.name):r}makePost(e,t){const s=Ze(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,s);return new ce(t,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,us);return new ce(en,e)}toString(){return ba(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf extends Ys{compare(e,t){const s=e.node.compareTo(t.node);return s===0?An(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,t){const s=Ze(e);return new ce(t,s)}toString(){return".value"}}const Ff=new Lf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n){return{type:"value",snapshotNode:n}}function Sn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Xn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Zn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function xf(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Xn(t,l)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Sn(t,s)):o.trackChildChange(Zn(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,r)=>{t.hasChild(i)||s.trackChildChange(Xn(i,r))}),t.isLeafNode()||t.forEachChild(xe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Zn(i,r,o))}else s.trackChildChange(Sn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.indexedFilter_=new sr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=es.getStartPost_(e),this.endPost_=es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new ce(t,s))||(s=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Y.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const r=this;return t.forEachChild(xe,(o,l)=>{r.matches(new ce(o,l))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new ce(t,s))||(s=Y.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,m)=>f(m,p)}else o=this.index_.getCompare();const l=e;D(l.numChildren()===this.limit_,"");const a=new ce(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const f=l.getImmediateChild(t);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===t||l.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const m=p==null?1:o(p,a);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Zn(t,s,f)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Xn(t,f));const v=l.updateImmediateChild(t,Y.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Sn(p.name,p.node)),v.updateImmediateChild(p.name,p.node)):v}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Xn(c.name,c.node)),r.trackChildChange(Sn(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:In}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new ir;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Bf(n){return n.loadsAllData()?new sr(n.getIndex()):n.hasLimit()?new Wf(n):new es(n)}function eo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===xe?t="$priority":n.index_===Ff?t="$value":n.index_===wn?t="$key":(D(n.index_ instanceof Mf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=He(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=He(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+He(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=He(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+He(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function to(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==xe&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends ga{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=as("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ds.getListenId_(e,s),l={};this.listens_[o]=l;const a=eo(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),En(this.listens_,o)===l){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,t){const s=Ds.getListenId_(e,t);delete this.listens_[s]}get(e){const t=eo(e._queryParams),s=e._path.toString(),i=new Ki;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pu(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Yn(l.responseText)}catch{yt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&yt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(){return{value:null,children:new Map}}function Da(n,e,t){if(pe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=be(e);n.children.has(s)||n.children.set(s,As());const i=n.children.get(s);e=Pe(e),Da(i,e,t)}}function Ai(n,e,t){n.value!==null?t(e,n.value):qf(n,(s,i)=>{const r=new Re(e.toString()+"/"+s);Ai(i,r,t)})}function qf(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&dt(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=10*1e3,Uf=30*1e3,Gf=5*60*1e3;class zf{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Hf(e);const s=no+(Uf-no)*Math.random();Hn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;dt(e,(i,r)=>{r>0&&Ft(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Hn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Aa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function or(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=Aa()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Re(e));return new Ps(Se(),t,this.revert)}}else return D(be(this.path)===e,"operationForChild called for unrelated child."),new Ps(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.source=e,this.path=t,this.type=St.LISTEN_COMPLETE}operationForChild(e){return pe(this.path)?new ts(this.source,Se()):new ts(this.source,Pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return pe(this.path)?new tn(this.source,Se(),this.snap.getImmediateChild(e)):new tn(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=St.MERGE}operationForChild(e){if(pe(this.path)){const t=this.children.subtree(new Re(e));return t.isEmpty()?null:t.value?new tn(this.source,Se(),t.value):new ns(this.source,Se(),t)}else return D(be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ns(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const t=be(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $f(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xf(o.childName,o.snapshotNode))}),Wn(n,i,"child_removed",e,s,t),Wn(n,i,"child_added",e,s,t),Wn(n,i,"child_moved",r,s,t),Wn(n,i,"child_changed",e,s,t),Wn(n,i,"value",e,s,t),i}function Wn(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>Kf(n,l,a)),o.forEach(l=>{const a=Yf(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function Yf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Kf(n,e,t){if(e.childName==null||t.childName==null)throw Rn("Should only compare child_ events.");const s=new ce(e.childName,e.snapshotNode),i=new ce(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n,e){return{eventCache:n,serverCache:e}}function Un(n,e,t,s){return Ks(new Gt(e,t,s),n.serverCache)}function Pa(n,e,t,s){return Ks(n.eventCache,new Gt(e,t,s))}function Os(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function nn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;const Qf=()=>(di||(di=new ft(Mh)),di);class Oe{constructor(e,t=Qf()){this.value=e,this.children=t}static fromObject(e){let t=new Oe(null);return dt(e,(s,i)=>{t=t.set(new Re(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Se(),value:this.value};if(pe(e))return null;{const s=be(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Pe(e),t);return r!=null?{path:Ue(new Re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const t=be(e),s=this.children.get(t);return s!==null?s.subtree(Pe(e)):new Oe(null)}}set(e,t){if(pe(e))return new Oe(t,this.children);{const s=be(e),r=(this.children.get(s)||new Oe(null)).set(Pe(e),t),o=this.children.insert(s,r);return new Oe(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const t=be(e),s=this.children.get(t);if(s){const i=s.remove(Pe(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Oe(null):new Oe(this.value,r)}else return this}}get(e){if(pe(e))return this.value;{const t=be(e),s=this.children.get(t);return s?s.get(Pe(e)):null}}setTree(e,t){if(pe(e))return t;{const s=be(e),r=(this.children.get(s)||new Oe(null)).setTree(Pe(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Oe(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ue(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Se(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(pe(e))return null;{const r=be(e),o=this.children.get(r);return o?o.findOnPath_(Pe(e),Ue(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Se(),t)}foreachOnPath_(e,t,s){if(pe(e))return this;{this.value&&s(t,this.value);const i=be(e),r=this.children.get(i);return r?r.foreachOnPath_(Pe(e),Ue(t,i),s):new Oe(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(Ue(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new Oe(null))}}function Gn(n,e,t){if(pe(e))return new kt(new Oe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ct(i,e);return r=r.updateChild(o,t),new kt(n.writeTree_.set(i,r))}else{const i=new Oe(t),r=n.writeTree_.setTree(e,i);return new kt(r)}}}function so(n,e,t){let s=n;return dt(t,(i,r)=>{s=Gn(s,Ue(e,i),r)}),s}function io(n,e){if(pe(e))return kt.empty();{const t=n.writeTree_.setTree(e,new Oe(null));return new kt(t)}}function Pi(n,e){return ln(n,e)!=null}function ln(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ct(t.path,e)):null}function ro(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(xe,(s,i)=>{e.push(new ce(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ce(s,i.value))}),e}function qt(n,e){if(pe(e))return n;{const t=ln(n,e);return t!=null?new kt(new Oe(t)):new kt(n.writeTree_.subtree(e))}}function Oi(n){return n.writeTree_.isEmpty()}function kn(n,e){return Oa(Se(),n.writeTree_,e)}function Oa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Oa(Ue(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Ue(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,e){return xa(e,n)}function Jf(n,e,t,s,i){D(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Gn(n.visibleWrites,e,t)),n.lastWriteId=s}function Xf(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Zf(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&ed(l,s.path)?i=!1:It(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return td(n),!0;if(s.snap)n.visibleWrites=io(n.visibleWrites,s.path);else{const l=s.children;dt(l,a=>{n.visibleWrites=io(n.visibleWrites,Ue(s.path,a))})}return!0}else return!1}function ed(n,e){if(n.snap)return It(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&It(Ue(n.path,t),e))return!0;return!1}function td(n){n.visibleWrites=Ma(n.allWrites,nd,Se()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function nd(n){return n.visible}function Ma(n,e,t){let s=kt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)It(t,o)?(l=ct(t,o),s=Gn(s,l,r.snap)):It(o,t)&&(l=ct(o,t),s=Gn(s,Se(),r.snap.getChild(l)));else if(r.children){if(It(t,o))l=ct(t,o),s=so(s,l,r.children);else if(It(o,t))if(l=ct(o,t),pe(l))s=so(s,Se(),r.children);else{const a=En(r.children,be(l));if(a){const c=a.getChild(Pe(l));s=Gn(s,Se(),c)}}}else throw Rn("WriteRecord should have .snap or .children")}}return s}function La(n,e,t,s,i){if(!s&&!i){const r=ln(n.visibleWrites,e);if(r!=null)return r;{const o=qt(n.visibleWrites,e);if(Oi(o))return t;if(t==null&&!Pi(o,Se()))return null;{const l=t||Y.EMPTY_NODE;return kn(o,l)}}}else{const r=qt(n.visibleWrites,e);if(!i&&Oi(r))return t;if(!i&&t==null&&!Pi(r,Se()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(It(c.path,e)||It(e,c.path))},l=Ma(n.allWrites,o,e),a=t||Y.EMPTY_NODE;return kn(l,a)}}}function sd(n,e,t){let s=Y.EMPTY_NODE;const i=ln(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=qt(n.visibleWrites,e);return t.forEachChild(xe,(o,l)=>{const a=kn(qt(r,new Re(o)),l);s=s.updateImmediateChild(o,a)}),ro(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=qt(n.visibleWrites,e);return ro(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function id(n,e,t,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ue(e,t);if(Pi(n.visibleWrites,r))return null;{const o=qt(n.visibleWrites,r);return Oi(o)?i.getChild(t):kn(o,i.getChild(t))}}function rd(n,e,t,s){const i=Ue(e,t),r=ln(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=qt(n.visibleWrites,i);return kn(o,s.getNode().getImmediateChild(t))}else return null}function od(n,e){return ln(n.visibleWrites,e)}function ld(n,e,t,s,i,r,o){let l;const a=qt(n.visibleWrites,e),c=ln(a,Se());if(c!=null)l=c;else if(t!=null)l=kn(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),p=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=p.getNext();for(;m&&u.length<i;)f(m,s)!==0&&u.push(m),m=p.getNext();return u}else return[]}function ad(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Ms(n,e,t,s){return La(n.writeTree,n.treePath,e,t,s)}function lr(n,e){return sd(n.writeTree,n.treePath,e)}function oo(n,e,t,s){return id(n.writeTree,n.treePath,e,t,s)}function Ls(n,e){return od(n.writeTree,Ue(n.treePath,e))}function cd(n,e,t,s,i,r){return ld(n.writeTree,n.treePath,e,t,s,i,r)}function ar(n,e,t){return rd(n.writeTree,n.treePath,e,t)}function Fa(n,e){return xa(Ue(n.treePath,e),n.writeTree)}function xa(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Zn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Xn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Sn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Zn(s,e.snapshotNode,i.oldSnap));else throw Rn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Wa=new hd;class cr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ar(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),r=cd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){return{filter:n}}function dd(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function pd(n,e,t,s,i){const r=new ud;let o,l;if(t.type===St.OVERWRITE){const c=t;c.source.fromUser?o=Mi(n,e,c.path,c.snap,s,i,r):(D(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!pe(c.path),o=Fs(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===St.MERGE){const c=t;c.source.fromUser?o=md(n,e,c.path,c.children,s,i,r):(D(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Li(n,e,c.path,c.children,s,i,l,r))}else if(t.type===St.ACK_USER_WRITE){const c=t;c.revert?o=yd(n,e,c.path,s,i,r):o=gd(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===St.LISTEN_COMPLETE)o=vd(n,e,t.path,s,r);else throw Rn("Unknown operation type: "+t.type);const a=r.getChanges();return _d(e,o,a),{viewCache:o,changes:a}}function _d(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Os(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Ra(Os(e)))}}function Ba(n,e,t,s,i,r){const o=e.eventCache;if(Ls(s,t)!=null)return e;{let l,a;if(pe(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=nn(e),u=c instanceof Y?c:Y.EMPTY_NODE,f=lr(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Ms(s,nn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=be(t);if(c===".priority"){D(Ut(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const f=oo(s,t,u,a);f!=null?l=n.filter.updatePriority(u,f):l=o.getNode()}else{const u=Pe(t);let f;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const p=oo(s,t,o.getNode(),a);p!=null?f=o.getNode().getImmediateChild(c).updateChild(u,p):f=o.getNode().getImmediateChild(c)}else f=ar(s,c,e.serverCache);f!=null?l=n.filter.updateChild(o.getNode(),c,f,u,i,r):l=o.getNode()}}return Un(e,l,o.isFullyInitialized()||pe(t),n.filter.filtersNodes())}}function Fs(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(pe(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),m,null)}else{const m=be(t);if(!a.isCompleteForPath(t)&&Ut(t)>1)return e;const g=Pe(t),w=a.getNode().getImmediateChild(m).updateChild(g,s);m===".priority"?c=u.updatePriority(a.getNode(),w):c=u.updateChild(a.getNode(),m,w,g,Wa,null)}const f=Pa(e,c,a.isFullyInitialized()||pe(t),u.filtersNodes()),p=new cr(i,f,r);return Ba(n,f,t,i,p,l)}function Mi(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new cr(i,e,r);if(pe(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Un(e,c,!0,n.filter.filtersNodes());else{const f=be(t);if(f===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=Un(e,c,l.isFullyInitialized(),l.isFiltered());else{const p=Pe(t),m=l.getNode().getImmediateChild(f);let g;if(pe(p))g=s;else{const v=u.getCompleteChild(f);v!=null?ya(p)===".priority"&&v.getChild(wa(p)).isEmpty()?g=v:g=v.updateChild(p,s):g=Y.EMPTY_NODE}if(m.equals(g))a=e;else{const v=n.filter.updateChild(l.getNode(),f,g,p,u,o);a=Un(e,v,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function lo(n,e){return n.eventCache.isCompleteForChild(e)}function md(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=Ue(t,a);lo(e,be(u))&&(l=Mi(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=Ue(t,a);lo(e,be(u))||(l=Mi(n,l,u,c,i,r,o))}),l}function ao(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Li(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;pe(t)?c=s:c=new Oe(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),g=ao(n,m,p);a=Fs(n,a,new Re(f),g,i,r,o,l)}}),c.children.inorderTraversal((f,p)=>{const m=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!u.hasChild(f)&&!m){const g=e.serverCache.getNode().getImmediateChild(f),v=ao(n,g,p);a=Fs(n,a,new Re(f),v,i,r,o,l)}}),a}function gd(n,e,t,s,i,r,o){if(Ls(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(pe(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Fs(n,e,t,a.getNode().getChild(t),i,r,l,o);if(pe(t)){let c=new Oe(null);return a.getNode().forEachChild(wn,(u,f)=>{c=c.set(new Re(u),f)}),Li(n,e,t,c,i,r,l,o)}else return e}else{let c=new Oe(null);return s.foreach((u,f)=>{const p=Ue(t,u);a.isCompleteForPath(p)&&(c=c.set(u,a.getNode().getChild(p)))}),Li(n,e,t,c,i,r,l,o)}}function vd(n,e,t,s,i){const r=e.serverCache,o=Pa(e,r.getNode(),r.isFullyInitialized()||pe(t),r.isFiltered());return Ba(n,o,t,s,Wa,i)}function yd(n,e,t,s,i,r){let o;if(Ls(s,t)!=null)return e;{const l=new cr(s,e,i),a=e.eventCache.getNode();let c;if(pe(t)||be(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ms(s,nn(e));else{const f=e.serverCache.getNode();D(f instanceof Y,"serverChildren would be complete if leaf node"),u=lr(s,f)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=be(t);let f=ar(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=a.getImmediateChild(u)),f!=null?c=n.filter.updateChild(a,u,f,Pe(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,Y.EMPTY_NODE,Pe(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ms(s,nn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ls(s,Se())!=null,Un(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new sr(s.getIndex()),r=Bf(s);this.processor_=fd(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Y.EMPTY_NODE,l.getNode(),null),u=new Gt(a,o.isFullyInitialized(),i.filtersNodes()),f=new Gt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ks(f,u),this.eventGenerator_=new Vf(this.query_)}get query(){return this.query_}}function wd(n){return n.viewCache_.serverCache.getNode()}function Cd(n){return Os(n.viewCache_)}function Ed(n,e){const t=nn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!pe(e)&&!t.getImmediateChild(be(e)).isEmpty())?t.getChild(e):null}function co(n){return n.eventRegistrations_.length===0}function Id(n,e){n.eventRegistrations_.push(e)}function uo(n,e,t){const s=[];if(t){D(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ho(n,e,t,s){e.type===St.MERGE&&e.source.queryId!==null&&(D(nn(n.viewCache_),"We should always have a full cache before handling merges"),D(Os(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=pd(n.processor_,i,e,t,s);return dd(n.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ja(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Sd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(xe,(r,o)=>{s.push(Sn(r,o))}),t.isFullyInitialized()&&s.push(Ra(t.getNode())),ja(n,s,t.getNode(),e)}function ja(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return $f(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;class qa{constructor(){this.views=new Map}}function kd(n){D(!xs,"__referenceConstructor has already been defined"),xs=n}function Td(){return D(xs,"Reference.ts has not been loaded"),xs}function Nd(n){return n.views.size===0}function ur(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),ho(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ho(o,e,t,s));return r}}function Ha(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Ms(t,i?s:null),a=!1;l?a=!0:s instanceof Y?(l=lr(t,s),a=!1):(l=Y.EMPTY_NODE,a=!1);const c=Ks(new Gt(l,a,!1),new Gt(s,i,!1));return new bd(e,c)}return o}function Rd(n,e,t,s,i,r){const o=Ha(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Id(o,t),Sd(o,t)}function Dd(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=zt(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(uo(c,t,s)),co(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(uo(a,t,s)),co(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!zt(n)&&r.push(new(Td())(e._repo,e._path)),{removed:r,events:o}}function Ua(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ht(n,e){let t=null;for(const s of n.views.values())t=t||Ed(s,e);return t}function Ga(n,e){if(e._queryParams.loadsAllData())return Js(n);{const s=e._queryIdentifier;return n.views.get(s)}}function za(n,e){return Ga(n,e)!=null}function zt(n){return Js(n)!=null}function Js(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;function Ad(n){D(!Ws,"__referenceConstructor has already been defined"),Ws=n}function Pd(){return D(Ws,"Reference.ts has not been loaded"),Ws}let Od=1;class fo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=ad(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Md(n,e,t,s,i){return Jf(n.pendingWriteTree_,e,t,s,i),i?fs(n,new tn(Aa(),e,t)):[]}function dn(n,e,t=!1){const s=Xf(n.pendingWriteTree_,e);if(Zf(n.pendingWriteTree_,e)){let r=new Oe(null);return s.snap!=null?r=r.set(Se(),!0):dt(s.children,o=>{r=r.set(new Re(o),!0)}),fs(n,new Ps(s.path,r,t))}else return[]}function hs(n,e,t){return fs(n,new tn(rr(),e,t))}function Ld(n,e,t){const s=Oe.fromObject(t);return fs(n,new ns(rr(),e,s))}function Fd(n,e){return fs(n,new ts(rr(),e))}function xd(n,e,t){const s=hr(n,t);if(s){const i=fr(s),r=i.path,o=i.queryId,l=ct(r,e),a=new ts(or(o),l);return dr(n,r,a)}else return[]}function Va(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||za(o,e))){const a=Dd(o,e,t,s);Nd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(r,(p,m)=>zt(m));if(u&&!f){const p=n.syncPointTree_.subtree(r);if(!p.isEmpty()){const m=qd(p);for(let g=0;g<m.length;++g){const v=m[g],w=v.query,N=Ja(n,v);n.listenProvider_.startListening(zn(w),ss(n,w),N.hashFn,N.onComplete)}}}!f&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(zn(e),null):c.forEach(p=>{const m=n.queryToTagMap.get(Xs(p));n.listenProvider_.stopListening(zn(p),m)}))}Hd(n,c)}return l}function $a(n,e,t,s){const i=hr(n,s);if(i!=null){const r=fr(i),o=r.path,l=r.queryId,a=ct(o,e),c=new tn(or(l),a,t);return dr(n,o,c)}else return[]}function Wd(n,e,t,s){const i=hr(n,s);if(i){const r=fr(i),o=r.path,l=r.queryId,a=ct(o,e),c=Oe.fromObject(t),u=new ns(or(l),a,c);return dr(n,o,u)}else return[]}function Bd(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(p,m)=>{const g=ct(p,i);r=r||Ht(m,g),o=o||zt(m)});let l=n.syncPointTree_.get(i);l?(o=o||zt(l),r=r||Ht(l,Se())):(l=new qa,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=Y.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,g)=>{const v=Ht(g,Se());v&&(r=r.updateImmediateChild(m,v))}));const c=za(l,e);if(!c&&!e._queryParams.loadsAllData()){const p=Xs(e);D(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const m=Ud();n.queryToTagMap.set(p,m),n.tagToQueryMap.set(m,p)}const u=Qs(n.pendingWriteTree_,i);let f=Rd(l,e,t,u,r,a);if(!c&&!o&&!s){const p=Ga(l,e);f=f.concat(Gd(n,e,p))}return f}function Ya(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=ct(o,e),c=Ht(l,a);if(c)return c});return La(i,e,r,t,!0)}function jd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const f=ct(c,t);s=s||Ht(u,f)});let i=n.syncPointTree_.get(t);i?s=s||Ht(i,Se()):(i=new qa,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Gt(s,!0,!1):null,l=Qs(n.pendingWriteTree_,e._path),a=Ha(i,e,l,r?o.getNode():Y.EMPTY_NODE,r);return Cd(a)}function fs(n,e){return Ka(e,n.syncPointTree_,null,Qs(n.pendingWriteTree_,Se()))}function Ka(n,e,t,s){if(pe(n.path))return Qa(n,e,t,s);{const i=e.get(Se());t==null&&i!=null&&(t=Ht(i,Se()));let r=[];const o=be(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=Fa(s,o);r=r.concat(Ka(l,a,c,u))}return i&&(r=r.concat(ur(i,n,s,t))),r}}function Qa(n,e,t,s){const i=e.get(Se());t==null&&i!=null&&(t=Ht(i,Se()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Fa(s,o),u=n.operationForChild(o);u&&(r=r.concat(Qa(u,l,a,c)))}),i&&(r=r.concat(ur(i,n,s,t))),r}function Ja(n,e){const t=e.query,s=ss(n,t);return{hashFn:()=>(wd(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?xd(n,t._path,s):Fd(n,t._path);{const r=xh(i,t);return Va(n,t,null,r)}}}}function ss(n,e){const t=Xs(e);return n.queryToTagMap.get(t)}function Xs(n){return n._path.toString()+"$"+n._queryIdentifier}function hr(n,e){return n.tagToQueryMap.get(e)}function fr(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Re(n.substr(0,e))}}function dr(n,e,t){const s=n.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=Qs(n.pendingWriteTree_,e);return ur(s,t,i,null)}function qd(n){return n.fold((e,t,s)=>{if(t&&zt(t))return[Js(t)];{let i=[];return t&&(i=Ua(t)),dt(s,(r,o)=>{i=i.concat(o)}),i}})}function zn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Pd())(n._repo,n._path):n}function Hd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Xs(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Ud(){return Od++}function Gd(n,e,t){const s=e._path,i=ss(n,e),r=Ja(n,t),o=n.listenProvider_.startListening(zn(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)D(!zt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,f)=>{if(!pe(c)&&u&&zt(u))return[Js(u).query];{let p=[];return u&&(p=p.concat(Ua(u).map(m=>m.query))),dt(f,(m,g)=>{p=p.concat(g)}),p}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(zn(u),ss(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new pr(t)}node(){return this.node_}}class _r{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ue(this.path_,e);return new _r(this.syncTree_,t)}node(){return Ya(this.syncTree_,this.path_)}}const zd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},po=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Vd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return $d(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Vd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},$d=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Yd=function(n,e,t,s){return mr(e,new _r(t,n),s)},Kd=function(n,e,t){return mr(n,new pr(e),t)};function mr(n,e,t){const s=n.getPriority().val(),i=po(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=po(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new Ye(l,Ze(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ye(i))),o.forEachChild(xe,(l,a)=>{const c=mr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function vr(n,e){let t=e instanceof Re?e:new Re(e),s=n,i=be(t);for(;i!==null;){const r=En(s.node.children,i)||{children:{},childCount:0};s=new gr(i,s,r),t=Pe(t),i=be(t)}return s}function Pn(n){return n.node.value}function Xa(n,e){n.node.value=e,Fi(n)}function Za(n){return n.node.childCount>0}function Qd(n){return Pn(n)===void 0&&!Za(n)}function Zs(n,e){dt(n.node.children,(t,s)=>{e(new gr(t,n,s))})}function ec(n,e,t,s){t&&!s&&e(n),Zs(n,i=>{ec(i,e,!0,s)}),t&&s&&e(n)}function Jd(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ds(n){return new Re(n.parent===null?n.name:ds(n.parent)+"/"+n.name)}function Fi(n){n.parent!==null&&Xd(n.parent,n.name,n)}function Xd(n,e,t){const s=Qd(t),i=Ft(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Fi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Fi(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=/[\[\].#$\/\u0000-\u001F\u007F]/,ep=/[\[\].#$\u0000-\u001F\u007F]/,pi=10*1024*1024,tc=function(n){return typeof n=="string"&&n.length!==0&&!Zd.test(n)},nc=function(n){return typeof n=="string"&&n.length!==0&&!ep.test(n)},tp=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nc(n)},sc=function(n,e,t){const s=t instanceof Re?new gf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Kt(s));if(typeof e=="function")throw new Error(n+"contains a function "+Kt(s)+" with contents = "+e.toString());if(Xl(e))throw new Error(n+"contains "+e.toString()+" "+Kt(s));if(typeof e=="string"&&e.length>pi/3&&$s(e)>pi)throw new Error(n+"contains a string greater than "+pi+" utf8 bytes "+Kt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(dt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!tc(o)))throw new Error(n+" contains an invalid key ("+o+") "+Kt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vf(s,o),sc(n,l,s),yf(s)}),i&&r)throw new Error(n+' contains ".value" child '+Kt(s)+" in addition to actual children.")}},ic=function(n,e,t,s){if(!(s&&t===void 0)&&!nc(t))throw new Error(Hl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},np=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ic(n,e,t,s)},sp=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!tp(t))throw new Error(Hl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rp(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Ca(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function $t(n,e,t){rp(n,t),op(n,s=>It(s,e)||It(e,s))}function op(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(lp(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function lp(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Xt&&it("event: "+t.toString()),cs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="repo_interrupt",cp=25;class up{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ip,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=As(),this.transactionQueueTree_=new gr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hp(n,e,t){if(n.stats_=Zi(n.repoInfo_),n.forceRestClient_||qh())n.server_=new Ds(n.repoInfo_,(s,i,r,o)=>{_o(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>mo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ot(n.repoInfo_,e,(s,i,r,o)=>{_o(n,s,i,r,o)},s=>{mo(n,s)},s=>{dp(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Vh(n.repoInfo_,()=>new zf(n.stats_,n.server_)),n.infoData_=new jf,n.infoSyncTree_=new fo({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=hs(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),yr(n,"connected",!1),n.serverSyncTree_=new fo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);$t(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function fp(n){const t=n.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function rc(n){return zd({timestamp:fp(n)})}function _o(n,e,t,s,i){n.dataUpdateCount++;const r=new Re(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Is(t,c=>Ze(c));o=Wd(n.serverSyncTree_,r,a,i)}else{const a=Ze(t);o=$a(n.serverSyncTree_,r,a,i)}else if(s){const a=Is(t,c=>Ze(c));o=Ld(n.serverSyncTree_,r,a)}else{const a=Ze(t);o=hs(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Cr(n,r)),$t(n.eventQueue_,l,o)}function mo(n,e){yr(n,"connected",e),e===!1&&mp(n)}function dp(n,e){dt(e,(t,s)=>{yr(n,t,s)})}function yr(n,e,t){const s=new Re("/.info/"+e),i=Ze(t);n.infoData_.updateSnapshot(s,i);const r=hs(n.infoSyncTree_,s,i);$t(n.eventQueue_,s,r)}function pp(n){return n.nextWriteId_++}function _p(n,e,t){const s=jd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Ze(i).withIndex(e._queryParams.getIndex());Bd(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=hs(n.serverSyncTree_,e._path,r);else{const l=ss(n.serverSyncTree_,e);o=$a(n.serverSyncTree_,e._path,r,l)}return $t(n.eventQueue_,e._path,o),Va(n.serverSyncTree_,e,t,null,!0),r},i=>(br(n,"get for query "+He(e)+" failed: "+i),Promise.reject(new Error(i))))}function mp(n){br(n,"onDisconnectEvents");const e=rc(n),t=As();Ai(n.onDisconnect_,Se(),(i,r)=>{const o=Yd(i,r,n.serverSyncTree_,e);Da(t,i,o)});let s=[];Ai(t,Se(),(i,r)=>{s=s.concat(hs(n.serverSyncTree_,i,r));const o=bp(n,i);Cr(n,o)}),n.onDisconnect_=As(),$t(n.eventQueue_,Se(),s)}function gp(n){n.persistentConnection_&&n.persistentConnection_.interrupt(ap)}function br(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),it(t,...e)}function oc(n,e,t){return Ya(n.serverSyncTree_,e,t)||Y.EMPTY_NODE}function wr(n,e=n.transactionQueueTree_){if(e||ei(n,e),Pn(e)){const t=ac(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&vp(n,ds(e),t)}else Za(e)&&Zs(e,t=>{wr(n,t)})}function vp(n,e,t){const s=t.map(c=>c.currentWriteId),i=oc(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=ct(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{br(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let p=0;p<t.length;p++)t[p].status=2,u=u.concat(dn(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&f.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();ei(n,vr(n.transactionQueueTree_,e)),wr(n,n.transactionQueueTree_),$t(n.eventQueue_,e,u);for(let p=0;p<f.length;p++)cs(f[p])}else{if(c==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{yt("transaction at "+a.toString()+" failed: "+c);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=c}Cr(n,e)}},o)}function Cr(n,e){const t=lc(n,e),s=ds(t),i=ac(n,t);return yp(n,i,s),s}function yp(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ct(t,a.path);let u=!1,f;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,f=a.abortReason,i=i.concat(dn(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=cp)u=!0,f="maxretry",i=i.concat(dn(n.serverSyncTree_,a.currentWriteId,!0));else{const p=oc(n,a.path,o);a.currentInputSnapshot=p;const m=e[l].update(p.val());if(m!==void 0){sc("transaction failed: Data returned ",m,a.path);let g=Ze(m);typeof m=="object"&&m!=null&&Ft(m,".priority")||(g=g.updatePriority(p.getPriority()));const w=a.currentWriteId,N=rc(n),P=Kd(g,p,N);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=P,a.currentWriteId=pp(n),o.splice(o.indexOf(w),1),i=i.concat(Md(n.serverSyncTree_,a.path,P,a.currentWriteId,a.applyLocally)),i=i.concat(dn(n.serverSyncTree_,w,!0))}else u=!0,f="nodata",i=i.concat(dn(n.serverSyncTree_,a.currentWriteId,!0))}$t(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(p){setTimeout(p,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(f),!1,null))))}ei(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)cs(s[l]);wr(n,n.transactionQueueTree_)}function lc(n,e){let t,s=n.transactionQueueTree_;for(t=be(e);t!==null&&Pn(s)===void 0;)s=vr(s,t),e=Pe(e),t=be(e);return s}function ac(n,e){const t=[];return cc(n,e,t),t.sort((s,i)=>s.order-i.order),t}function cc(n,e,t){const s=Pn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Zs(e,i=>{cc(n,i,t)})}function ei(n,e){const t=Pn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Xa(e,t.length>0?t:void 0)}Zs(e,s=>{ei(n,s)})}function bp(n,e){const t=ds(lc(n,e)),s=vr(n.transactionQueueTree_,e);return Jd(s,i=>{_i(n,i)}),_i(n,s),ec(s,i=>{_i(n,i)}),t}function _i(n,e){const t=Pn(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(D(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(dn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Xa(e,void 0):t.length=r+1,$t(n.eventQueue_,ds(e),i);for(let o=0;o<s.length;o++)cs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Cp(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):yt(`Invalid query segment '${t}' in query '${n}'`)}return e}const go=function(n,e){const t=Ep(n),s=t.namespace;t.domain==="firebase.com"&&Lt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ph();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ua(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new Re(t.pathString)}},Ep=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(u,f)),u<f&&(i=wp(n.substring(u,f)));const p=Cp(n.substring(Math.min(n.length,f)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class Sp{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Er{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return pe(this._path)?null:ya(this._path)}get ref(){return new xt(this._repo,this._path)}get _queryIdentifier(){const e=to(this._queryParams),t=Ji(e);return t==="{}"?"default":t}get _queryObject(){return to(this._queryParams)}isEqual(e){if(e=Dn(e),!(e instanceof Er))return!1;const t=this._repo===e._repo,s=Ca(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mf(this._path)}}class xt extends Er{constructor(e,t){super(e,t,new ir,!1)}get parent(){const e=wa(this._path);return e===null?null:new xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class is{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Re(e),s=xi(this.ref,e);return new is(this._node.getChild(t),s,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new is(i,xi(this.ref,s),xe)))}hasChild(e){const t=new Re(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Tp(n,e){return n=Dn(n),n._checkNotDeleted("ref"),e!==void 0?xi(n._root,e):n._root}function xi(n,e){return n=Dn(n),be(n._path)===null?np("child","path",e,!1):ic("child","path",e,!1),new xt(n._repo,Ue(n._path,e))}function Np(n){n=Dn(n);const e=new kp(()=>{}),t=new Ir(e);return _p(n._repo,n,t).then(s=>new is(s,new xt(n._repo,n._path),n._queryParams.getIndex()))}class Ir{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Ip("value",this,new is(e.snapshotNode,new xt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Sp(this,e,t):null}matches(e){return e instanceof Ir?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Rp(n,...e){let t=Dn(n);for(const s of e)t=s._apply(t);return t}kd(xt);Ad(xt);/**
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
 */const Dp="FIREBASE_DATABASE_EMULATOR_HOST",Wi={};let Ap=!1;function Pp(n,e,t,s){n.repoInfo_=new ua(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Op(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=go(r,i),l=o.repoInfo,a,c;typeof process<"u"&&xr&&(c=xr[Dp]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=go(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new bn(bn.OWNER):new Uh(n.name,n.options,e);sp("Invalid Firebase Database URL",o),pe(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Lp(l,n,u,new Hh(n.name,t));return new Fp(f,n)}function Mp(n,e){const t=Wi[e];(!t||t[n.key]!==n)&&Lt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),gp(n),delete t[n.key]}function Lp(n,e,t,s){let i=Wi[e.name];i||(i={},Wi[e.name]=i);let r=i[n.toURLString()];return r&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new up(n,Ap,t,s),i[n.toURLString()]=r,r}class Fp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xt(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Mp(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function xp(n=_h(),e){const t=hh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=su("database");s&&Wp(t,...s)}return t}function Wp(n,e,t,s={}){n=Dn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new bn(bn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:iu(s.mockUserToken,n.app.options.projectId);r=new bn(o)}Pp(i,e,t,r)}/**
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
 */function Bp(n){Th(ph),ks(new Kn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Op(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),vn(Wr,Br,n),vn(Wr,Br,"esm2017")}Ot.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ot.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Bp();var Bi={},uc={},ti={};Object.defineProperty(ti,"__esModule",{value:!0});ti.rotx=void 0;function jp(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}ti.rotx=jp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=ti;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(uc);var hc={},ni={};Object.defineProperty(ni,"__esModule",{value:!0});ni.base64=void 0;class qp{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const Hp=new qp;ni.base64=Hp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=ni;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(hc);var fc={},si={};Object.defineProperty(si,"__esModule",{value:!0});si.hex=void 0;class Up{encode(e){let t="",s="";for(let i=0;i<e.length;i++)t=e.charCodeAt(i).toString(16),s+=("000"+t).slice(-4);return s}decode(e){let t=e.match(/.{1,4}/g)||[],s="";for(let i=0;i<t.length;i++)s+=String.fromCharCode(parseInt(t[i],16));return s}}const Gp=new Up;si.hex=Gp;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=si;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(fc);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=uc;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=hc;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var s=fc;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return s.hex}})})(Bi);let zp={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},dc={};for(let[n,e]of Object.entries(zp))dc[Bi.rotx(n,18)]=Bi.rotx(e,18);let Bs={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},js={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},Vp=["head","body","legs","feet","neck","back","ring","misc"],qs={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged"},$p=xp(Vl(dc)),Tn="https://fantastic-frontier-roblox.fandom.com/wiki/",Vt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Nt={currentGameData:{equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_equipment:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},endless_weapons:{gameNum:0,chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1}},settings:{muted:!1,hardMode:{equipment:!1,weapons:!1,endless_equipment:!1,endless_weapons:!1},mode:"equipment"},playerStats:{equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},endless_equipment:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0},endless_weapons:{gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0}}},Yp={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function ji(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function Pt(n){n.target.closest("button").blur()}function pn(n){return Object.keys(n).length!==0}function Dt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Sr(){ji("?ls=true"),setTimeout(ji)}let vo=localStorage.getItem("fd-currentGameData"),yo=localStorage.getItem("fd-settings"),bo=localStorage.getItem("fd-playerStats"),wo=localStorage.getItem("fd-changelogSeen"),Co=localStorage.getItem("fd-helpSeen"),Eo=localStorage.getItem("fd-supportMe"),Tt=pt(vo?JSON.parse(vo):Nt.currentGameData),mt=pt(),ut=pt(yo?{...JSON.parse(yo),mode:"equipment"}:Nt.settings),sn=pt(),Nn=pt(bo?JSON.parse(bo):Nt.playerStats),Ct=pt(),qi=pt({}),Io=pt({}),st=pt({component:null,complete:!1}),Hs=pt(7),rn=pt(!1),rs=pt(wo?JSON.parse(wo):!1),Hi=pt(Co?JSON.parse(Co):!1),Jt=pt(Eo?JSON.parse(Eo):{showAgain:!0,timesDenied:0,lastGamesPlayed:0}),So=[Tt,ut,Nn];for(let n=0;n<So.length;n++){let e=Vn(So[n]),t=Nt[Object.keys(Nt)[n]];for(let s of Object.keys(t))e[s]===void 0&&(e[s]=t[s]);for(let s of Object.keys(e))t[s]===void 0&&delete e[s]}ut.subscribe(n=>{Sr(),mt.set(Vn(Tt)[n.mode]),Ct.set(Vn(Nn)[n.mode]),sn.set(n.hardMode[n.mode]),localStorage.setItem("fd-settings",JSON.stringify(n))});Tt.subscribe(n=>{Sr(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});mt.subscribe(n=>{Tt.update(e=>({...e,[Vn(ut).mode]:n}))});Nn.subscribe(n=>{Sr(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});Ct.subscribe(n=>{Nn.update(e=>({...e,[Vn(ut).mode]:n}))});sn.subscribe(n=>{ut.update(e=>({...e,hardMode:{...e.hardMode,[e.mode]:n}})),Hs.set(n?6:7)});rs.subscribe(n=>localStorage.setItem("fd-changelogSeen",JSON.stringify(n)));Hi.subscribe(n=>localStorage.setItem("fd-helpSeen",JSON.stringify(n)));Jt.subscribe(n=>localStorage.setItem("fd-supportMe",JSON.stringify(n)));function Kp(n,{from:e,to:t},s={}){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:f=m=>Math.sqrt(m)*120,easing:p=Al}=s;return{delay:u,duration:on(f)?f(Math.sqrt(a*a+c*c)):f,easing:p,css:(m,g)=>{const v=g*a,w=g*c,N=m+g*e.width/t.width,P=m+g*e.height/t.height;return`transform: ${r} translate(${v}px, ${w}px) scale(${N}, ${P});`}}}function ko(n,e,t){const s=n.slice();s[10]=e[t];const i=s[1]?null:s[10].special==s[0].special;s[11]=i;const r=s[1]?null:mi(s[0].types,s[10].types);s[12]=r;const o=s[1]?null:s[12]==s[0].types.length&&s[10].types.length==s[0].types.length;s[13]=o;const l=s[1]?s[10].slot==s[0].slot:null;s[14]=l;const a=s[1]?mi(s[0].stats,s[10].stats):null;s[15]=a;const c=s[1]?s[15]==s[0].stats.length&&s[10].stats.length==s[0].stats.length:null;s[16]=c;const u=Math.ceil((s[10].cost.min+s[10].cost.max)/2);s[17]=u;const f=Math.ceil((s[0].cost.min+s[0].cost.max)/2);s[18]=f;const p=s[17]==s[18];s[19]=p;const m=mi(s[0].colors,s[10].colors);s[20]=m;const g=s[20]==s[0].colors.length&&s[10].colors.length==s[0].colors.length;s[21]=g;const v=s[10].outline==s[0].outline;s[22]=v;const w=s[10].release==s[0].release;return s[23]=w,s}function To(n,e,t){const s=n.slice();return s[26]=e[t],s}function No(n,e,t){const s=n.slice();return s[32]=e[t],s}function Ro(n,e,t){const s=n.slice();return s[29]=e[t],s}function Do(n){let e=[],t=new Map,s,i,r=Ce(n[3].chosenItems.toReversed());const o=l=>l[10];for(let l=0;l<r.length;l+=1){let a=ko(n,r,l),c=o(a);t.set(c,e[l]=Wo(c,a))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=bt()},m(l,a){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(l,a);T(l,s,a),i=!0},p(l,a){if(a[0]&63){r=Ce(l[3].chosenItems.toReversed()),gt();for(let c=0;c<e.length;c+=1)e[c].r();e=zc(e,a,o,1,l,r,t,s.parentNode,Gc,Wo,s,ko);for(let c=0;c<e.length;c+=1)e[c].a();vt()}},i(l){if(!i){for(let a=0;a<r.length;a+=1)$(e[a]);i=!0}},o(l){for(let a=0;a<e.length;a+=1)ae(e[a]);i=!1},d(l){l&&S(s);for(let a=0;a<e.length;a+=1)e[a].d(l)}}}function Qp(n){let e,t;function s(l,a){return l[10].types.length?Zp:Xp}let i=s(n),r=i(n),o=!n[4]&&n[12]&&!n[13]&&Po(n);return{c(){r.c(),e=y(),o&&o.c(),t=bt()},m(l,a){r.m(l,a),T(l,e,a),o&&o.m(l,a),T(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[4]&&l[12]&&!l[13]?o?o.p(l,a):(o=Po(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(S(e),S(t)),r.d(l),o&&o.d(l)}}}function Jp(n){let e,t;function s(l,a){return l[10].stats.length?t_:e_}let i=s(n),r=i(n),o=!n[4]&&n[15]&&!n[16]&&Mo(n);return{c(){r.c(),e=y(),o&&o.c(),t=bt()},m(l,a){r.m(l,a),T(l,e,a),o&&o.m(l,a),T(l,t,a)},p(l,a){i===(i=s(l))&&r?r.p(l,a):(r.d(1),r=i(l),r&&(r.c(),r.m(e.parentNode,e))),!l[4]&&l[15]&&!l[16]?o?o.p(l,a):(o=Mo(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(l){l&&(S(e),S(t)),r.d(l),o&&o.d(l)}}}function Xp(n){let e;return{c(){e=B("None")},m(t,s){T(t,e,s)},p:Z,d(t){t&&S(e)}}}function Zp(n){let e,t=Ce(n[10].types),s=[];for(let i=0;i<t.length;i+=1)s[i]=Ao(No(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);T(i,e,r)},p(i,r){if(r[0]&8){t=Ce(i[10].types);let o;for(o=0;o<t.length;o+=1){const l=No(i,t,o);s[o]?s[o].p(l,r):(s[o]=Ao(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),Xe(s,i)}}}function Ao(n){let e=qs[n[32]]+(n[32]==n[10].types[n[10].types.length-1]?"":", "),t;return{c(){t=B(e)},m(s,i){T(s,t,i)},p(s,i){i[0]&8&&e!==(e=qs[s[32]]+(s[32]==s[10].types[s[10].types.length-1]?"":", "))&&ue(t,e)},d(s){s&&S(t)}}}function Po(n){let e,t=n[12]+"",s;return{c(){e=_("span"),s=B(t),d(e,"class","bgInfo")},m(i,r){T(i,e,r),h(e,s)},p(i,r){r[0]&11&&t!==(t=i[12]+"")&&ue(s,t)},d(i){i&&S(e)}}}function e_(n){let e;return{c(){e=B("None")},m(t,s){T(t,e,s)},p:Z,d(t){t&&S(e)}}}function t_(n){let e,t=Ce(n[10].stats),s=[];for(let i=0;i<t.length;i+=1)s[i]=Oo(Ro(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);T(i,e,r)},p(i,r){if(r[0]&8){t=Ce(i[10].stats);let o;for(o=0;o<t.length;o+=1){const l=Ro(i,t,o);s[o]?s[o].p(l,r):(s[o]=Oo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),Xe(s,i)}}}function Oo(n){let e=js[n[29]]+(n[29]==n[10].stats[n[10].stats.length-1]?"":", "),t;return{c(){t=B(e)},m(s,i){T(s,t,i)},p(s,i){i[0]&8&&e!==(e=js[s[29]]+(s[29]==s[10].stats[s[10].stats.length-1]?"":", "))&&ue(t,e)},d(s){s&&S(t)}}}function Mo(n){let e,t=n[15]+"",s;return{c(){e=_("span"),s=B(t),d(e,"class","bgInfo")},m(i,r){T(i,e,r),h(e,s)},p(i,r){r[0]&11&&t!==(t=i[15]+"")&&ue(s,t)},d(i){i&&S(e)}}}function n_(n){let e=n[17].toLocaleString()+"",t,s,i,r;return{c(){t=B(e),s=y(),i=_("br"),r=B(`\r
                        Gold`)},m(o,l){T(o,t,l),T(o,s,l),T(o,i,l),T(o,r,l)},p(o,l){l[0]&8&&e!==(e=o[17].toLocaleString()+"")&&ue(t,e)},d(o){o&&(S(t),S(s),S(i),S(r))}}}function s_(n){let e;return{c(){e=B("Unpurchasable")},m(t,s){T(t,e,s)},p:Z,d(t){t&&S(e)}}}function Lo(n){let e,t;return{c(){e=_("iconify-icon"),We(e,"class","bgInfo"),We(e,"icon","mingcute:arrow-up-fill"),We(e,"flip",t=n[17]>n[18]?"vertical":"")},m(s,i){T(s,e,i)},p(s,i){i[0]&9&&t!==(t=s[17]>s[18]?"vertical":"")&&We(e,"flip",t)},d(s){s&&S(e)}}}function Fo(n){let e=(n[26]==n[10].colors[0]?Dt(n[26]):n[26])+(n[26]==n[10].colors[n[10].colors.length-1]?"":", "),t;return{c(){t=B(e)},m(s,i){T(s,t,i)},p(s,i){i[0]&8&&e!==(e=(s[26]==s[10].colors[0]?Dt(s[26]):s[26])+(s[26]==s[10].colors[s[10].colors.length-1]?"":", "))&&ue(t,e)},d(s){s&&S(t)}}}function xo(n){let e,t=n[20]+"",s;return{c(){e=_("span"),s=B(t),d(e,"class","bgInfo")},m(i,r){T(i,e,r),h(e,s)},p(i,r){r[0]&9&&t!==(t=i[20]+"")&&ue(s,t)},d(i){i&&S(e)}}}function Wo(n,e){let t,s,i,r,o,l,a,c,u,f,p,m=e[10].name+"",g,v,w,N,P,O=(e[1]?Dt(e[10].slot):e[10].special?"Yes":"No")+"",E,I,M,A,F,U,X,te,j,Q,we,q,V,H,he,ee,K,se,z,k=Dt(e[10].outline)+"",G,W,L,_e,ne,ie=Bs[e[10].release]+"",Ee,me,ze,Be,Ve,Je,je=Z,fe,wt,ge;function Ie(C,oe){return C[1]?Jp:Qp}let Me=Ie(e),Fe=Me(e);function ve(C,oe){return C[10].cost.min==null?s_:n_}let Te=ve(e),de=Te(e),x=!e[4]&&!e[19]&&e[17]&&Lo(e),re=Ce(e[10].colors),ke=[];for(let C=0;C<re.length;C+=1)ke[C]=Fo(To(e,re,C));let ye=!e[4]&&e[20]&&!e[21]&&xo(e);return{key:n,first:null,c(){t=_("div"),s=_("div"),i=_("a"),r=_("img"),a=y(),c=_("iconify-icon"),f=y(),p=_("span"),g=B(m),N=y(),P=_("span"),E=B(O),A=y(),F=_("span"),Fe.c(),te=y(),j=_("span"),de.c(),Q=y(),x&&x.c(),V=y(),H=_("span");for(let C=0;C<ke.length;C+=1)ke[C].c();he=y(),ye&&ye.c(),se=y(),z=_("span"),G=B(k),_e=y(),ne=_("span"),Ee=B(ie),me=B(" Update"),Ve=y(),Ge(r.src,o=Vt+e[10].image)||d(r,"src",o),d(r,"alt",l=e[10].name),d(r,"class","svelte-pl04pb"),We(c,"icon","tabler:link"),We(c,"class","svelte-pl04pb"),d(i,"class","flex fjc-center fai-center svelte-pl04pb"),d(i,"href",u=Tn+e[10].link),d(i,"target","_blank"),d(p,"class","tooltip"),d(p,"id","right"),d(s,"id","itemImage"),d(s,"class","ff-item svelte-pl04pb"),d(P,"class","ff-bg ff-item svelte-pl04pb"),d(P,"id",I=(e[1]?e[14]:e[11])?"correct":"wrong"),d(F,"class","ff-bg ff-item svelte-pl04pb"),d(F,"id",U=(e[1]?e[16]:e[13])?"correct":(e[1]?e[15]:e[12])?"partial":"wrong"),Qe(F,"smallerStats",e[1]&&e[10].stats.length>=7),d(j,"class","ff-bg ff-item svelte-pl04pb"),d(j,"id",we=e[19]?"correct":"wrong"),d(H,"class","ff-bg ff-item svelte-pl04pb"),d(H,"id",ee=e[21]?"correct":e[20]?"partial":"wrong"),d(z,"class","ff-bg ff-item svelte-pl04pb"),d(z,"id",W=e[22]?"correct":"wrong"),d(ne,"class","ff-bg ff-item svelte-pl04pb"),d(ne,"id",ze=e[23]?"correct":"wrong"),d(t,"class","itemRow svelte-pl04pb"),this.first=t},m(C,oe){T(C,t,oe),h(t,s),h(s,i),h(i,r),h(i,a),h(i,c),h(s,f),h(s,p),h(p,g),h(t,N),h(t,P),h(P,E),h(t,A),h(t,F),Fe.m(F,null),h(t,te),h(t,j),de.m(j,null),h(j,Q),x&&x.m(j,null),h(t,V),h(t,H);for(let R=0;R<ke.length;R+=1)ke[R]&&ke[R].m(H,null);h(H,he),ye&&ye.m(H,null),h(t,se),h(t,z),h(z,G),h(t,_e),h(t,ne),h(ne,Ee),h(ne,me),h(t,Ve),fe=!0,wt||(ge=[bl(v=e[6].call(null,s,[e[11],e[12],e[13],e[14],e[15],e[16],e[19],e[20],e[21],e[22],e[23]])),Le(ne,"introend",e[9])],wt=!0)},p(C,oe){if(e=C,(!fe||oe[0]&8&&!Ge(r.src,o=Vt+e[10].image))&&d(r,"src",o),(!fe||oe[0]&8&&l!==(l=e[10].name))&&d(r,"alt",l),(!fe||oe[0]&8&&u!==(u=Tn+e[10].link))&&d(i,"href",u),(!fe||oe[0]&8)&&m!==(m=e[10].name+"")&&ue(g,m),v&&on(v.update)&&oe[0]&11&&v.update.call(null,[e[11],e[12],e[13],e[14],e[15],e[16],e[19],e[20],e[21],e[22],e[23]]),(!fe||oe[0]&10)&&O!==(O=(e[1]?Dt(e[10].slot):e[10].special?"Yes":"No")+"")&&ue(E,O),(!fe||oe[0]&11&&I!==(I=(e[1]?e[14]:e[11])?"correct":"wrong"))&&d(P,"id",I),Me===(Me=Ie(e))&&Fe?Fe.p(e,oe):(Fe.d(1),Fe=Me(e),Fe&&(Fe.c(),Fe.m(F,null))),(!fe||oe[0]&11&&U!==(U=(e[1]?e[16]:e[13])?"correct":(e[1]?e[15]:e[12])?"partial":"wrong"))&&d(F,"id",U),(!fe||oe[0]&10)&&Qe(F,"smallerStats",e[1]&&e[10].stats.length>=7),Te===(Te=ve(e))&&de?de.p(e,oe):(de.d(1),de=Te(e),de&&(de.c(),de.m(j,Q))),!e[4]&&!e[19]&&e[17]?x?x.p(e,oe):(x=Lo(e),x.c(),x.m(j,null)):x&&(x.d(1),x=null),(!fe||oe[0]&9&&we!==(we=e[19]?"correct":"wrong"))&&d(j,"id",we),oe[0]&8){re=Ce(e[10].colors);let R;for(R=0;R<re.length;R+=1){const _t=To(e,re,R);ke[R]?ke[R].p(_t,oe):(ke[R]=Fo(_t),ke[R].c(),ke[R].m(H,he))}for(;R<ke.length;R+=1)ke[R].d(1);ke.length=re.length}!e[4]&&e[20]&&!e[21]?ye?ye.p(e,oe):(ye=xo(e),ye.c(),ye.m(H,null)):ye&&(ye.d(1),ye=null),(!fe||oe[0]&9&&ee!==(ee=e[21]?"correct":e[20]?"partial":"wrong"))&&d(H,"id",ee),(!fe||oe[0]&8)&&k!==(k=Dt(e[10].outline)+"")&&ue(G,k),(!fe||oe[0]&9&&W!==(W=e[22]?"correct":"wrong"))&&d(z,"id",W),(!fe||oe[0]&8)&&ie!==(ie=Bs[e[10].release]+"")&&ue(Ee,ie),(!fe||oe[0]&9&&ze!==(ze=e[23]?"correct":"wrong"))&&d(ne,"id",ze)},r(){Je=t.getBoundingClientRect()},f(){Lc(t),je()},a(){je(),je=Mc(t,Je,Kp,{duration:125})},i(C){fe||(C&&qe(()=>{fe&&(w||(w=De(s,$e,{duration:e[2]?0:300},!0)),w.run(1))}),C&&qe(()=>{fe&&(M||(M=De(P,$e,{duration:e[2]?0:300,delay:e[2]?0:250},!0)),M.run(1))}),C&&qe(()=>{fe&&(X||(X=De(F,$e,{duration:e[2]?0:300,delay:e[2]?0:550},!0)),X.run(1))}),C&&qe(()=>{fe&&(q||(q=De(j,$e,{duration:e[2]?0:300,delay:e[2]?0:850},!0)),q.run(1))}),C&&qe(()=>{fe&&(K||(K=De(H,$e,{duration:e[2]?0:300,delay:e[2]?0:1150},!0)),K.run(1))}),C&&qe(()=>{fe&&(L||(L=De(z,$e,{duration:e[2]?0:300,delay:e[2]?0:1450},!0)),L.run(1))}),C&&qe(()=>{fe&&(Be||(Be=De(ne,$e,{duration:e[2]?0:300,delay:e[2]?0:1750},!0)),Be.run(1))}),fe=!0)},o(C){C&&(w||(w=De(s,$e,{duration:e[2]?0:300},!1)),w.run(0)),C&&(M||(M=De(P,$e,{duration:e[2]?0:300,delay:e[2]?0:250},!1)),M.run(0)),C&&(X||(X=De(F,$e,{duration:e[2]?0:300,delay:e[2]?0:550},!1)),X.run(0)),C&&(q||(q=De(j,$e,{duration:e[2]?0:300,delay:e[2]?0:850},!1)),q.run(0)),C&&(K||(K=De(H,$e,{duration:e[2]?0:300,delay:e[2]?0:1150},!1)),K.run(0)),C&&(L||(L=De(z,$e,{duration:e[2]?0:300,delay:e[2]?0:1450},!1)),L.run(0)),C&&(Be||(Be=De(ne,$e,{duration:e[2]?0:300,delay:e[2]?0:1750},!1)),Be.run(0)),fe=!1},d(C){C&&S(t),C&&w&&w.end(),C&&M&&M.end(),Fe.d(),C&&X&&X.end(),de.d(),x&&x.d(),C&&q&&q.end(),Xe(ke,C),ye&&ye.d(),C&&K&&K.end(),C&&L&&L.end(),C&&Be&&Be.end(),wt=!1,ot(ge)}}}function i_(n){let e,t,s,i,r,o=n[1]?"Slot":"Has Special",l,a,c,u=n[1]?"Stats":"Stat Intakes",f,p,m,g,v,w,N,P,O,E,I,M=!n[2]&&Do(n);return{c(){e=_("div"),t=_("div"),s=_("span"),s.textContent="Item",i=y(),r=_("span"),l=B(o),a=y(),c=_("span"),f=B(u),p=y(),m=_("span"),m.textContent="Avg. Cost",g=y(),v=_("span"),v.textContent="Colors",w=y(),N=_("span"),N.textContent="Outline",P=y(),O=_("span"),O.textContent="Release",E=y(),M&&M.c(),d(s,"class","ff-item svelte-pl04pb"),d(r,"class","ff-item svelte-pl04pb"),Qe(r,"smaller-fs",!n[1]),d(c,"class","ff-item svelte-pl04pb"),Qe(c,"smaller-fs",!n[1]),d(m,"class","ff-item svelte-pl04pb"),d(v,"class","ff-item svelte-pl04pb"),d(N,"class","ff-item svelte-pl04pb"),d(O,"class","ff-item svelte-pl04pb"),d(t,"id","categories"),d(t,"class","svelte-pl04pb"),d(e,"class","gameboard ff-bg fd-col flex posrel border-tp bs svelte-pl04pb")},m(A,F){T(A,e,F),h(e,t),h(t,s),h(t,i),h(t,r),h(r,l),h(t,a),h(t,c),h(c,f),h(t,p),h(t,m),h(t,g),h(t,v),h(t,w),h(t,N),h(t,P),h(t,O),h(e,E),M&&M.m(e,null),I=!0},p(A,F){(!I||F[0]&2)&&o!==(o=A[1]?"Slot":"Has Special")&&ue(l,o),(!I||F[0]&2)&&Qe(r,"smaller-fs",!A[1]),(!I||F[0]&2)&&u!==(u=A[1]?"Stats":"Stat Intakes")&&ue(f,u),(!I||F[0]&2)&&Qe(c,"smaller-fs",!A[1]),A[2]?M&&(gt(),ae(M,1,1,()=>{M=null}),vt()):M?(M.p(A,F),F[0]&4&&$(M,1)):(M=Do(A),M.c(),$(M,1),M.m(e,null))},i(A){I||($(M),I=!0)},o(A){ae(M),I=!1},d(A){A&&S(e),M&&M.d()}}}function mi(n,e){return n===void 0||e===void 0?void 0:n.filter(s=>e.includes(s)).length}function r_(n,e,t){let s,i,r,o;le(n,ut,m=>t(8,s=m)),le(n,mt,m=>t(3,i=m)),le(n,sn,m=>t(4,r=m)),le(n,rn,m=>t(5,o=m));let{dailyItemsData:l}=e,a,c,u=!1;function f(m,[g,v,w,N,P,O,E,I,M,A,F]){i.chosenItems.length==i.rowInfo.length+1&&mt.update(U=>({...U,rowInfo:[...U.rowInfo,[c?N:g,(c?O:w)?1:(c?P:v)?0:-1,E,M?1:I?0:-1,A,F]]}))}const p=()=>J(rn,o=!1,o);return n.$$set=m=>{"dailyItemsData"in m&&t(7,l=m.dailyItemsData)},n.$$.update=()=>{n.$$.dirty[0]&256&&s.mode&&(t(2,u=!0),setTimeout(()=>t(2,u=!1),10)),n.$$.dirty[0]&384&&t(0,a=l[s.mode]),n.$$.dirty[0]&256&&(s.mode.includes("equipment")?t(1,c=!0):s.mode.includes("weapons")&&t(1,c=!1))},[a,c,u,i,r,o,f,l,s,p]}class o_ extends at{constructor(e){super(),lt(this,e,r_,i_,nt,{dailyItemsData:7},null,[-1,-1])}}function l_(n){let e,t,s,i;return{c(){e=_("div"),t=_("input"),d(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],d(t,"type","checkbox"),t.checked=n[1],d(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),Qe(e,"unavailable",n[2]),Cn(e,"--s",`${n[0]}rem`)},m(r,o){T(r,e,o),h(e,t),s||(i=[Le(t,"change",n[5]),Le(t,"keydown",n[6])],s=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&Qe(e,"unavailable",r[2]),o&1&&Cn(e,"--s",`${r[0]}rem`)},i:Z,o:Z,d(r){r&&S(e),s=!1,ot(i)}}}function a_(n,e,t){let{size:s,checked:i=!1,disabled:r=!1,forced:o=!1}=e;const l=Tl(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,s=u.size),"checked"in u&&t(1,i=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[s,i,r,o,l,a,c]}class c_ extends at{constructor(e){super(),lt(this,e,a_,l_,nt,{size:0,checked:1,disabled:2,forced:3})}}function Bo(n,e,t){const s=n.slice();s[17]=e[t];const i=s[8].chosenItems.find(function(...o){return n[15](s[17],...o)})!=null;return s[18]=i,s}function jo(n){let e,t,s,i=Ce(n[4]),r=[];for(let o=0;o<i.length;o+=1)r[o]=qo(Bo(n,i,o));return{c(){e=_("div");for(let o=0;o<r.length;o+=1)r[o].c();d(e,"class","itemList ff-bg flex fd-col svelte-1k366gl")},m(o,l){T(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[16](e),s=!0},p(o,l){if(l&1360){i=Ce(o[4]);let a;for(a=0;a<i.length;a+=1){const c=Bo(o,i,a);r[a]?r[a].p(c,l):(r[a]=qo(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}},i(o){s||(o&&qe(()=>{s&&(t||(t=De(e,Mt,{duration:75},!0)),t.run(1))}),s=!0)},o(o){o&&(t||(t=De(e,Mt,{duration:75},!1)),t.run(0)),s=!1},d(o){o&&S(e),Xe(r,o),n[16](null),o&&t&&t.end()}}}function qo(n){let e,t,s,i,r,o=n[17].name+"",l,a,c,u,f;function p(){return n[14](n[18],n[17])}return{c(){e=_("button"),t=_("img"),i=y(),r=_("span"),l=B(o),a=y(),Ge(t.src,s=Vt+n[17].image)||d(t,"src",s),d(t,"alt",""),d(t,"class","svelte-1k366gl"),e.disabled=c=n[18],d(e,"class","listItem flex fai-center no-bg-change svelte-1k366gl"),Qe(e,"unavailable",n[18])},m(m,g){T(m,e,g),h(e,t),h(e,i),h(e,r),h(r,l),h(e,a),u||(f=Le(e,"click",p),u=!0)},p(m,g){n=m,g&16&&!Ge(t.src,s=Vt+n[17].image)&&d(t,"src",s),g&16&&o!==(o=n[17].name+"")&&ue(l,o),g&272&&c!==(c=n[18])&&(e.disabled=c),g&272&&Qe(e,"unavailable",n[18])},d(m){m&&S(e),u=!1,f()}}}function u_(n){let e,t,s,i,r,o,l=n[7]&&n[4].length&&n[5]&&jo(n);return{c(){e=_("input"),s=y(),l&&l.c(),i=bt(),e.disabled=n[6],d(e,"type","text"),d(e,"class","searcherInput svelte-1k366gl"),d(e,"placeholder",t=`Guess the item for game #${n[0]+1} (${n[2].mode})...`)},m(a,c){T(a,e,c),n[12](e),T(a,s,c),l&&l.m(a,c),T(a,i,c),r||(o=[Le(window,"mousedown",n[11]),Le(e,"input",n[9]),Le(e,"focusin",n[13])],r=!0)},p(a,[c]){c&64&&(e.disabled=a[6]),c&5&&t!==(t=`Guess the item for game #${a[0]+1} (${a[2].mode})...`)&&d(e,"placeholder",t),a[7]&&a[4].length&&a[5]?l?(l.p(a,c),c&176&&$(l,1)):(l=jo(a),l.c(),$(l,1),l.m(i.parentNode,i)):l&&(gt(),ae(l,1,1,()=>{l=null}),vt())},i(a){$(l)},o(a){ae(l)},d(a){a&&(S(e),S(s),S(i)),n[12](null),l&&l.d(a),r=!1,ot(o)}}}function h_(n,e,t){let s,i,r,o;le(n,ut,E=>t(2,s=E)),le(n,rn,E=>t(6,i=E)),le(n,qi,E=>t(7,r=E)),le(n,mt,E=>t(8,o=E));let{gameNumber:l}=e,a,c,u=[],f=!1;function p(){let E=a.value.toLowerCase();if(t(4,u=[]),!!E)for(let I of r[s.mode])I.name.toLowerCase().includes(E)&&u.push(I)}function m(E){i||(mt.update(I=>({...I,chosenItems:[...I.chosenItems,E]})),t(1,a.value="",a),p())}const g=E=>{c&&E.target!=a&&!c.contains(E.target)&&t(5,f=!1)};function v(E){ht[E?"unshift":"push"](()=>{a=E,t(1,a)})}const w=()=>t(5,f=!0),N=(E,I)=>{E||(m(I),J(rn,i=!0,i))},P=(E,I)=>I.name==E.name;function O(E){ht[E?"unshift":"push"](()=>{c=E,t(3,c)})}return n.$$set=E=>{"gameNumber"in E&&t(0,l=E.gameNumber)},n.$$.update=()=>{n.$$.dirty&6&&s.mode&&a&&p()},[l,a,s,c,u,f,i,r,o,p,m,g,v,w,N,P,O]}class f_ extends at{constructor(e){super(),lt(this,e,h_,u_,nt,{gameNumber:0})}}function Ho(n){let e,t,s;return{c(){e=_("span"),d(e,"id","HPFlash"),d(e,"class","svelte-14eask9")},m(i,r){T(i,e,r),s=!0},i(i){s||(t&&t.end(1),s=!0)},o(i){i&&(t=Hc(e,Mt,{duration:200})),s=!1},d(i){i&&S(e),i&&t&&t.end()}}}function d_(n){let e,t,s,i,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,f,p,m,g,v,w=n[4]?"You've lost your remaining armor.":"Your armor is protecting you.",N,P,O,E,I,M,A,F,U,X,te,j=n[1]&&Ho();function Q(q){n[6](q)}let we={};return n[0]!==void 0&&(we.gameNumber=n[0]),U=new f_({props:we}),ht.push(()=>Vs(U,"gameNumber",Q)),{c(){e=_("div"),t=_("div"),s=_("div"),i=_("div"),r=_("div"),o=_("span"),a=B(l),c=B("/600"),u=y(),f=_("button"),p=_("img"),g=y(),v=_("span"),N=B(w),P=y(),O=_("br"),E=B(`\r
                You can take `),I=B(n[2]),M=B(" hits at most!"),A=y(),j&&j.c(),F=y(),rt(U.$$.fragment),d(o,"class","svelte-14eask9"),d(r,"class","HPBackground svelte-14eask9"),Cn(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),d(i,"class","innerGameHP flex posrel svelte-14eask9"),d(s,"class","outerGameHP posrel svelte-14eask9"),Ge(p.src,m="misc/armor.svg")||d(p,"src",m),d(p,"alt","Armor"),d(p,"class","svelte-14eask9"),Qe(p,"noArmor",n[4]),d(v,"class","tooltip svelte-14eask9"),d(v,"id","right"),d(f,"class","ff-item posrel br-1 svelte-14eask9"),d(f,"id","armorIcon"),d(t,"class","gameHPCont flex svelte-14eask9"),d(e,"class","currentGameInfo ff-bg flex fd-row fw fjc-center fai-center posrel border-tp br-1 bs svelte-14eask9")},m(q,V){T(q,e,V),h(e,t),h(t,s),h(s,i),h(i,r),h(r,o),h(o,a),h(o,c),h(t,u),h(t,f),h(f,p),h(f,g),h(f,v),h(v,N),h(v,P),h(v,O),h(v,E),h(v,I),h(v,M),h(e,A),j&&j.m(e,null),h(e,F),et(U,e,null),te=!0},p(q,[V]){(!te||V&12)&&l!==(l=Math.round(600-q[3].chosenItems.length*(600/q[2]))+"")&&ue(a,l),V&12&&Cn(r,"width",`${Math.floor(100*(q[2]-q[3].chosenItems.length)/q[2])}%`),(!te||V&16)&&Qe(p,"noArmor",q[4]),(!te||V&16)&&w!==(w=q[4]?"You've lost your remaining armor.":"Your armor is protecting you.")&&ue(N,w),(!te||V&4)&&ue(I,q[2]),q[1]?j?V&2&&$(j,1):(j=Ho(),j.c(),$(j,1),j.m(e,F)):j&&(gt(),ae(j,1,1,()=>{j=null}),vt());const H={};!X&&V&1&&(X=!0,H.gameNumber=q[0],zs(()=>X=!1)),U.$set(H)},i(q){te||($(j),$(U.$$.fragment,q),te=!0)},o(q){ae(j),ae(U.$$.fragment,q),te=!1},d(q){q&&S(e),j&&j.d(),tt(U)}}}function p_(n,e,t){let s,i,r,o;le(n,rn,u=>t(5,s=u)),le(n,Hs,u=>t(2,i=u)),le(n,mt,u=>t(3,r=u)),le(n,sn,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&s&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,i,r,o,s,c]}class __ extends at{constructor(e){super(),lt(this,e,p_,d_,nt,{gameNumber:0})}}function Uo(n,e,t){const s=n.slice();return s[9]=e[t],s}function Go(n,e,t){const s=n.slice();return s[12]=e[t],s}function zo(n){let e,t=(n[12]===!0||n[12]===1?n[4].html.blue:n[12]===0?n[4].html.yellow:n[12]===!1||n[12]===-1?n[4].html.red:null)+"",s;return{c(){e=new Sl(!1),s=bt(),e.a=s},m(i,r){e.m(t,i,r),T(i,s,r)},p(i,r){r&1&&t!==(t=(i[12]===!0||i[12]===1?i[4].html.blue:i[12]===0?i[4].html.yellow:i[12]===!1||i[12]===-1?i[4].html.red:null)+"")&&e.p(t)},d(i){i&&(S(s),e.d())}}}function Vo(n){let e,t,s=Ce(n[9]),i=[];for(let r=0;r<s.length;r+=1)i[r]=zo(Go(n,s,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=y(),t=_("br")},m(r,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(r,o);T(r,e,o),T(r,t,o)},p(r,o){if(o&17){s=Ce(r[9]);let l;for(l=0;l<s.length;l+=1){const a=Go(r,s,l);i[l]?i[l].p(a,o):(i[l]=zo(a),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},d(r){r&&(S(e),S(t)),Xe(i,r)}}}function m_(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v=n[2]?"Copied!":"Copy",w,N,P,O=Ce(n[0].rowInfo.toReversed()),E=[];for(let I=0;I<O.length;I+=1)E[I]=Vo(Uo(n,O,I));return{c(){e=_("div"),t=_("span"),t.textContent="Game Stats",s=y(),i=_("span"),r=B(n[3]),o=y(),l=_("br"),a=y();for(let I=0;I<E.length;I+=1)E[I].c();c=y(),u=_("button"),f=B(`Share Stats\r
        `),p=_("iconify-icon"),m=y(),g=_("span"),w=B(v),d(i,"class","smaller-fs"),We(p,"icon","ri:share-fill"),d(g,"class","tooltip"),d(g,"id","top"),d(u,"class","flex fai-center posrel border-tp br-1 smaller-fs svelte-14jqt1l"),d(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs")},m(I,M){T(I,e,M),h(e,t),h(e,s),h(e,i),h(i,r),h(i,o),h(i,l),h(i,a);for(let A=0;A<E.length;A+=1)E[A]&&E[A].m(i,null);h(e,c),h(e,u),h(u,f),h(u,p),h(u,m),h(u,g),h(g,w),N||(P=Le(u,"click",n[8]),N=!0)},p(I,[M]){if(M&8&&ue(r,I[3]),M&17){O=Ce(I[0].rowInfo.toReversed());let A;for(A=0;A<O.length;A+=1){const F=Uo(I,O,A);E[A]?E[A].p(F,M):(E[A]=Vo(F),E[A].c(),E[A].m(i,null))}for(;A<E.length;A+=1)E[A].d(1);E.length=O.length}M&4&&v!==(v=I[2]?"Copied!":"Copy")&&ue(w,v)},i:Z,o:Z,d(I){I&&S(e),Xe(E,I),N=!1,P()}}}function g_(n,e,t){let s,i,r,o;le(n,mt,p=>t(0,i=p)),le(n,ut,p=>t(6,r=p)),le(n,sn,p=>t(7,o=p));let{gameNumber:l}=e,a={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},c="",u=!1;const f=p=>{Pt(p),navigator.clipboard.writeText(`${s}
${c}
${location.origin+location.pathname}`),t(2,u=!0),setTimeout(()=>t(2,u=!1),1e3)};return n.$$set=p=>{"gameNumber"in p&&t(5,l=p.gameNumber)},n.$$.update=()=>{n.$$.dirty&224&&t(3,s=`${o?"(Nightmare)":""} Frontierdle - ${Dt(r.mode)} #${l+1}`),n.$$.dirty&67&&r.mode&&setTimeout(()=>{t(1,c="");for(let p of i.rowInfo.toReversed()){let m="";for(let g of p)m+=g===!0||g===1?a.js.blue:g===0?a.js.yellow:g===!1||g===-1?a.js.red:null;t(1,c+=m+`
`)}})},[i,c,u,s,a,l,r,o,f]}class v_ extends at{constructor(e){super(),lt(this,e,g_,m_,nt,{gameNumber:5})}}function $o(n,e,t){const s=n.slice();return s[5]=e[t][0],s[6]=e[t][1],s}function Yo(n){let e,t,s=n[5]+"",i,r,o,l,a,c=n[6]+"",u,f;return{c(){e=_("div"),t=_("span"),i=B(s),r=y(),o=_("span"),o.innerHTML="",l=y(),a=_("span"),u=B(c),f=y(),d(t,"id","guessNum"),d(t,"class","svelte-mzhi8s"),d(o,"class","posrel border-tp svelte-mzhi8s"),d(o,"id","winsBar"),Cn(o,"width",`${n[6]*80/n[3]}%`),d(a,"class","smaller-fs svelte-mzhi8s"),d(a,"id","winsNum"),d(e,"class","flex fai-center svelte-mzhi8s")},m(p,m){T(p,e,m),h(e,t),h(t,i),h(e,r),h(e,o),h(e,l),h(e,a),h(a,u),h(e,f)},p(p,m){m&2&&s!==(s=p[5]+"")&&ue(i,s),m&10&&Cn(o,"width",`${p[6]*80/p[3]}%`),m&2&&c!==(c=p[6]+"")&&ue(u,c)},d(p){p&&S(e)}}}function y_(n){let e,t,s,i=Dt(n[2])+"",r,o,l,a,c,u,f=n[1].gamesPlayed+"",p,m,g,v,w,N,P=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"",O,E,I,M,A,F,U,X=n[1].streak+"",te,j,Q,we,q,V,H=n[1].maxStreak+"",he,ee,K,se,z,k,G,W,L,_e=Ce(Object.entries(n[1].winInfo)),ne=[];for(let ie=0;ie<_e.length;ie+=1)ne[ie]=Yo($o(n,_e,ie));return{c(){e=_("div"),t=_("span"),s=B("Your Stats - "),r=B(i),o=y(),l=_("div"),a=_("div"),c=_("div"),u=_("span"),p=B(f),m=y(),g=_("span"),g.textContent="Games Played",v=y(),w=_("div"),N=_("span"),O=B(P),E=B("%"),I=y(),M=_("span"),M.textContent="Win Rate",A=y(),F=_("div"),U=_("span"),te=B(X),j=y(),Q=_("span"),Q.textContent="Current Streak",we=y(),q=_("div"),V=_("span"),he=B(H),ee=y(),K=_("span"),K.textContent="Max Streak",se=y(),z=_("span"),z.textContent="Win Distribution",k=y(),G=_("div");for(let ie=0;ie<ne.length;ie+=1)ne[ie].c();d(g,"id","statsTitle"),d(g,"class","svelte-mzhi8s"),d(c,"class","svelte-mzhi8s"),d(M,"id","statsTitle"),d(M,"class","svelte-mzhi8s"),d(w,"class","svelte-mzhi8s"),d(Q,"id","statsTitle"),d(Q,"class","svelte-mzhi8s"),d(F,"class","svelte-mzhi8s"),d(K,"id","statsTitle"),d(K,"class","svelte-mzhi8s"),d(q,"class","svelte-mzhi8s"),d(a,"class","flex svelte-mzhi8s"),d(a,"id","playerStatsInfo"),d(z,"class","smaller-fs"),d(G,"class","flex fd-col smaller-fs svelte-mzhi8s"),d(G,"id","distributionChart"),d(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1 bs"),d(e,"id","playerStats")},m(ie,Ee){T(ie,e,Ee),h(e,t),h(t,s),h(t,r),h(e,o),h(e,l),h(l,a),h(a,c),h(c,u),h(u,p),h(c,m),h(c,g),h(a,v),h(a,w),h(w,N),h(N,O),h(N,E),h(w,I),h(w,M),h(a,A),h(a,F),h(F,U),h(U,te),h(F,j),h(F,Q),h(a,we),h(a,q),h(q,V),h(V,he),h(q,ee),h(q,K),h(e,se),h(e,z),h(e,k),h(e,G);for(let me=0;me<ne.length;me+=1)ne[me]&&ne[me].m(G,null);L=!0},p(ie,[Ee]){if(n=ie,(!L||Ee&4)&&i!==(i=Dt(n[2])+"")&&ue(r,i),(!L||Ee&2)&&f!==(f=n[1].gamesPlayed+"")&&ue(p,f),(!L||Ee&2)&&P!==(P=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"")&&ue(O,P),(!L||Ee&2)&&X!==(X=n[1].streak+"")&&ue(te,X),(!L||Ee&2)&&H!==(H=n[1].maxStreak+"")&&ue(he,H),Ee&10){_e=Ce(Object.entries(n[1].winInfo));let me;for(me=0;me<_e.length;me+=1){const ze=$o(n,_e,me);ne[me]?ne[me].p(ze,Ee):(ne[me]=Yo(ze),ne[me].c(),ne[me].m(G,null))}for(;me<ne.length;me+=1)ne[me].d(1);ne.length=_e.length}},i(ie){L||(ie&&qe(()=>{L&&(W||(W=De(e,$e,{duration:n[0]?200:0},!0)),W.run(1))}),L=!0)},o(ie){ie&&(W||(W=De(e,$e,{duration:n[0]?200:0},!1)),W.run(0)),L=!1},d(ie){ie&&S(e),Xe(ne,ie),ie&&W&&W.end()}}}function b_(n,e,t){let s,i,r,o;le(n,ut,a=>t(4,r=a)),le(n,Ct,a=>t(1,o=a));let{prompted:l=!1}=e;return n.$$set=a=>{"prompted"in a&&t(0,l=a.prompted)},n.$$.update=()=>{n.$$.dirty&2&&t(3,s=Math.max(...Object.values(o.winInfo))),n.$$.dirty&16&&t(2,i=r.mode)},[l,o,i,s,r]}class pc extends at{constructor(e){super(),lt(this,e,b_,y_,nt,{prompted:0})}}function Ko(n,e,t){const s=n.slice();return s[5]=e[t],s}function w_(n){let e,t=Ce(n[1]),s=[];for(let i=0;i<t.length;i+=1)s[i]=Qo(Ko(n,t,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=bt()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);T(i,e,r)},p(i,r){if(r&2){t=Ce(i[1]);let o;for(o=0;o<t.length;o+=1){const l=Ko(i,t,o);s[o]?s[o].p(l,r):(s[o]=Qo(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},d(i){i&&S(e),Xe(s,i)}}}function C_(n){let e,t,s;return{c(){e=_("span"),t=B("— "),s=B(n[1]),d(e,"id","info"),d(e,"class","svelte-1vq8gvl")},m(i,r){T(i,e,r),h(e,t),h(e,s)},p(i,r){r&2&&ue(s,i[1])},d(i){i&&S(e)}}}function Qo(n){let e,t,s=n[5]+"",i;return{c(){e=_("span"),t=B("— "),i=B(s),d(e,"id","info"),d(e,"class","svelte-1vq8gvl")},m(r,o){T(r,e,o),h(e,t),h(e,i)},p(r,o){o&2&&s!==(s=r[5]+"")&&ue(i,s)},d(r){r&&S(e)}}}function E_(n){let e,t,s,i,r,o,l;function a(f,p){return typeof f[1]=="string"?C_:w_}let c=a(n),u=c(n);return{c(){e=_("li"),t=_("span"),s=B("v"),i=B(n[0]),r=y(),o=_("i"),o.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":Yp[n[2][0]%10])+", 20"+n[2][2]}`,l=y(),u.c(),d(t,"id","version"),d(t,"class","svelte-1vq8gvl"),d(o,"id","date"),d(o,"class","svelte-1vq8gvl"),d(e,"class","flex fw fai-center svelte-1vq8gvl")},m(f,p){T(f,e,p),h(e,t),h(t,s),h(t,i),h(e,r),h(e,o),h(e,l),u.m(e,null)},p(f,[p]){p&1&&ue(i,f[0]),c===(c=a(f))&&u?u.p(f,p):(u.d(1),u=c(f),u&&(u.c(),u.m(e,null)))},i:Z,o:Z,d(f){f&&S(e),u.d()}}}function I_(n,e,t){let{version:s,date:i,text:r}=e,o=i.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,s=a.version),"date"in a&&t(4,i=a.date),"text"in a&&t(1,r=a.text)},[s,r,o,l,i]}class gi extends at{constructor(e){super(),lt(this,e,I_,E_,nt,{version:0,date:4,text:1})}}function S_(n){let e,t,s,i,r,o,l,a,c;return i=new gi({props:{version:"1.1.1",date:"5/4/24",text:["Fixed 'Game Stats' section not updating when switching game categories","Fixed page size and zoom occasionally breaking"]}}),o=new gi({props:{version:"1.1.0",date:"4/4/24",text:["Added 'Weapons' game category","'Game Help' prompt now appears on first visit"]}}),a=new gi({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=_("span"),e.textContent="Changelog",t=y(),s=_("ul"),rt(i.$$.fragment),r=y(),rt(o.$$.fragment),l=y(),rt(a.$$.fragment),d(e,"class","title"),d(s,"class","flex fd-col smaller-fs svelte-1hn7lke"),d(s,"id","contents")},m(u,f){T(u,e,f),T(u,t,f),T(u,s,f),et(i,s,null),h(s,r),et(o,s,null),h(s,l),et(a,s,null),c=!0},p:Z,i(u){c||($(i.$$.fragment,u),$(o.$$.fragment,u),$(a.$$.fragment,u),c=!0)},o(u){ae(i.$$.fragment,u),ae(o.$$.fragment,u),ae(a.$$.fragment,u),c=!1},d(u){u&&(S(e),S(t),S(s)),tt(i),tt(o),tt(a)}}}class k_ extends at{constructor(e){super(),lt(this,e,null,S_,nt,{})}}function T_(n){let e,t,s;return{c(){e=_("span"),e.textContent="Credits",t=y(),s=_("div"),s.innerHTML=`<p class="flex fai-center svelte-19w41p3">This is a personal project. Contact me directly on
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
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,d(e,"class","title"),d(s,"class","smaller-fs"),d(s,"id","contents")},m(i,r){T(i,e,r),T(i,t,r),T(i,s,r)},p:Z,i:Z,o:Z,d(i){i&&(S(e),S(t),S(s))}}}class N_ extends at{constructor(e){super(),lt(this,e,null,T_,nt,{})}}function Jo(n,e,t){const s=n.slice();return s[0]=e[t],s}function R_(n,e,t){const s=n.slice();return s[3]=e[t],s}function D_(n,e,t){const s=n.slice();return s[6]=e[t],s}function Xo(n,e,t){const s=n.slice();return s[9]=e[t],s}function Zo(n,e,t){const s=n.slice();return s[12]=e[t],s}function A_(n,e,t){const s=n.slice();return s[15]=e[t],s}function P_(n){let e;return{c(){e=_("li"),e.textContent=`— ${Dt(n[15])} `},m(t,s){T(t,e,s)},p:Z,d(t){t&&S(e)}}}function el(n){let e;return{c(){e=_("li"),e.textContent=`— ${n[12]} `},m(t,s){T(t,e,s)},p:Z,d(t){t&&S(e)}}}function tl(n){let e;return{c(){e=_("li"),e.textContent=`— ${n[9]}`},m(t,s){T(t,e,s)},p:Z,d(t){t&&S(e)}}}function O_(n){let e;return{c(){e=_("li"),e.textContent=`— ${n[6]}`},m(t,s){T(t,e,s)},p:Z,d(t){t&&S(e)}}}function M_(n){let e;return{c(){e=_("li"),e.textContent=`— ${n[3]}`},m(t,s){T(t,e,s)},p:Z,d(t){t&&S(e)}}}function nl(n){let e;return{c(){e=_("li"),e.textContent=`— ${n[0]} Update`},m(t,s){T(t,e,s)},p:Z,d(t){t&&S(e)}}}function L_(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v,w,N,P,O,E,I,M,A,F,U,X,te,j,Q,we,q,V,H,he,ee,K,se,z,k,G,W,L,_e,ne,ie,Ee,me,ze,Be,Ve,Je,je,fe,wt=Ce(Vp),ge=[];for(let C=0;C<wt.length;C+=1)ge[C]=P_(A_(n,wt,C));let Ie=Ce(Object.values(js)),Me=[];for(let C=0;C<Ie.length;C+=1)Me[C]=el(Zo(n,Ie,C));let Fe=Ce(Object.values(qs)),ve=[];for(let C=0;C<Fe.length;C+=1)ve[C]=tl(Xo(n,Fe,C));let Te=Ce(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),de=[];for(let C=0;C<12;C+=1)de[C]=O_(D_(n,Te,C));let x=Ce(["Black","Blue","Green","Purple","Red","White","Yellow"]),re=[];for(let C=0;C<7;C+=1)re[C]=M_(R_(n,x,C));let ke=Ce(Object.values(Bs).slice(0,-1)),ye=[];for(let C=0;C<ke.length;C+=1)ye[C]=nl(Jo(n,ke,C));return{c(){e=_("span"),e.textContent="Game Help",t=y(),s=_("div"),i=_("p"),i.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece from\r
        Fantastic Frontier, which changes every day.`,r=y(),o=_("div"),o.innerHTML=`<span class="title">Color Guide</span> <div class="flex svelte-f1c9xj" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-f1c9xj" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-f1c9xj" id="partial">Partial
                <span class="bgInfo svelte-f1c9xj">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-f1c9xj" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-f1c9xj" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,l=y(),a=_("span"),a.textContent="Categories",c=y(),u=_("div"),f=_("div"),p=_("b"),p.textContent="Equipment",m=y(),g=_("span"),v=_("b"),v.textContent="Slot:",w=y(),N=_("ul");for(let C=0;C<ge.length;C+=1)ge[C].c();P=y(),O=_("span"),E=_("b"),E.textContent="Stats:",I=y(),M=_("ul");for(let C=0;C<Me.length;C+=1)Me[C].c();A=y(),F=_("div"),U=_("b"),U.textContent="Weapons",X=y(),te=_("span"),te.innerHTML="<b>Has Special:</b> <span>Whether the weapon has a Special Ability.</span>",j=y(),Q=_("span"),we=_("b"),we.textContent="Stat Intakes:",q=y(),V=_("ul");for(let C=0;C<ve.length;C+=1)ve[C].c();H=y(),he=_("div"),ee=_("div"),K=_("b"),K.textContent="General",se=y(),z=_("span"),z.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item(s) can be
                    purchased at. &quot;Unpurchasable&quot; if it cannot be purchased,
                    equivalent to 0 for the game&#39;s purposes.</span>`,k=y(),G=_("span"),W=_("b"),W.textContent="Colors:",L=y(),_e=_("ul");for(let C=0;C<12;C+=1)de[C].c();ne=y(),ie=_("span"),Ee=_("b"),Ee.textContent="Outline:",me=y(),ze=_("ul");for(let C=0;C<7;C+=1)re[C].c();Be=y(),Ve=_("span"),Je=_("b"),Je.textContent="Release:",je=y(),fe=_("ul");for(let C=0;C<ye.length;C+=1)ye[C].c();d(e,"class","title"),d(o,"class","flex fd-col fai-center"),d(a,"class","title"),d(p,"class","categoryTitle svelte-f1c9xj"),d(v,"class","svelte-f1c9xj"),d(N,"class","svelte-f1c9xj"),d(g,"class","flex fd-col smaller-fs list svelte-f1c9xj"),d(E,"class","svelte-f1c9xj"),d(M,"class","svelte-f1c9xj"),d(O,"class","flex fd-col smaller-fs list svelte-f1c9xj"),d(f,"class","flex fw fjc-center categories svelte-f1c9xj"),d(U,"class","categoryTitle svelte-f1c9xj"),d(te,"class","flex fd-col smaller-fs limit-width svelte-f1c9xj"),d(we,"class","svelte-f1c9xj"),d(V,"class","svelte-f1c9xj"),d(Q,"class","flex fd-col smaller-fs list svelte-f1c9xj"),d(F,"class","flex fw fjc-center categories svelte-f1c9xj"),d(u,"class","flex categoriesCont svelte-f1c9xj"),d(K,"class","categoryTitle svelte-f1c9xj"),d(z,"class","flex fd-col smaller-fs limit-width svelte-f1c9xj"),d(W,"class","svelte-f1c9xj"),d(_e,"class","svelte-f1c9xj"),d(G,"class","flex fd-col smaller-fs list svelte-f1c9xj"),d(Ee,"class","svelte-f1c9xj"),d(ze,"class","svelte-f1c9xj"),d(ie,"class","flex fd-col smaller-fs list svelte-f1c9xj"),d(Je,"class","svelte-f1c9xj"),d(fe,"class","svelte-f1c9xj"),d(Ve,"class","flex fd-col smaller-fs list svelte-f1c9xj"),d(ee,"class","flex fw fjc-center categories svelte-f1c9xj"),d(he,"class","flex categoriesCont svelte-f1c9xj"),d(s,"class","flex fd-col smaller-fs svelte-f1c9xj"),d(s,"id","contents")},m(C,oe){T(C,e,oe),T(C,t,oe),T(C,s,oe),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(u,f),h(f,p),h(f,m),h(f,g),h(g,v),h(g,w),h(g,N);for(let R=0;R<ge.length;R+=1)ge[R]&&ge[R].m(N,null);h(f,P),h(f,O),h(O,E),h(O,I),h(O,M);for(let R=0;R<Me.length;R+=1)Me[R]&&Me[R].m(M,null);h(u,A),h(u,F),h(F,U),h(F,X),h(F,te),h(F,j),h(F,Q),h(Q,we),h(Q,q),h(Q,V);for(let R=0;R<ve.length;R+=1)ve[R]&&ve[R].m(V,null);h(s,H),h(s,he),h(he,ee),h(ee,K),h(ee,se),h(ee,z),h(ee,k),h(ee,G),h(G,W),h(G,L),h(G,_e);for(let R=0;R<12;R+=1)de[R]&&de[R].m(_e,null);h(ee,ne),h(ee,ie),h(ie,Ee),h(ie,me),h(ie,ze);for(let R=0;R<7;R+=1)re[R]&&re[R].m(ze,null);h(ee,Be),h(ee,Ve),h(Ve,Je),h(Ve,je),h(Ve,fe);for(let R=0;R<ye.length;R+=1)ye[R]&&ye[R].m(fe,null)},p(C,[oe]){if(oe&0){Ie=Ce(Object.values(js));let R;for(R=0;R<Ie.length;R+=1){const _t=Zo(C,Ie,R);Me[R]?Me[R].p(_t,oe):(Me[R]=el(_t),Me[R].c(),Me[R].m(M,null))}for(;R<Me.length;R+=1)Me[R].d(1);Me.length=Ie.length}if(oe&0){Fe=Ce(Object.values(qs));let R;for(R=0;R<Fe.length;R+=1){const _t=Xo(C,Fe,R);ve[R]?ve[R].p(_t,oe):(ve[R]=tl(_t),ve[R].c(),ve[R].m(V,null))}for(;R<ve.length;R+=1)ve[R].d(1);ve.length=Fe.length}if(oe&0){ke=Ce(Object.values(Bs).slice(0,-1));let R;for(R=0;R<ke.length;R+=1){const _t=Jo(C,ke,R);ye[R]?ye[R].p(_t,oe):(ye[R]=nl(_t),ye[R].c(),ye[R].m(fe,null))}for(;R<ye.length;R+=1)ye[R].d(1);ye.length=ke.length}},i:Z,o:Z,d(C){C&&(S(e),S(t),S(s)),Xe(ge,C),Xe(Me,C),Xe(ve,C),Xe(de,C),Xe(re,C),Xe(ye,C)}}}class _c extends at{constructor(e){super(),lt(this,e,null,L_,nt,{})}}function F_(n){let e,t,s;return{c(){e=_("span"),e.textContent="Frontierdle Policy",t=y(),s=_("div"),s.innerHTML=`<span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,d(e,"class","title"),d(s,"class","flex fd-col smaller-fs svelte-932r7h"),d(s,"id","contents")},m(i,r){T(i,e,r),T(i,t,r),T(i,s,r)},p:Z,i:Z,o:Z,d(i){i&&(S(e),S(t),S(s))}}}class x_ extends at{constructor(e){super(),lt(this,e,null,F_,nt,{})}}function sl(n){let e,t,s;return{c(){e=_("iconify-icon"),We(e,"icon","uil:exclamation"),We(e,"id","unseen"),We(e,"class","svelte-hjaz47")},m(i,r){T(i,e,r),s=!0},i(i){s||(i&&qe(()=>{s&&(t||(t=De(e,Mt,{duration:150},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=De(e,Mt,{duration:150},!1)),t.run(0)),s=!1},d(i){i&&S(e),i&&t&&t.end()}}}function W_(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v,w,N,P,O=!n[2]&&sl();return{c(){e=_("button"),e.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',t=y(),s=_("a"),s.innerHTML=`Support me
    <img src="misc/kofi-badge.png" alt="" class="svelte-hjaz47"/>`,i=y(),r=_("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=y(),l=_("button"),a=_("iconify-icon"),c=y(),u=_("span"),u.textContent="Changelog",f=y(),O&&O.c(),p=y(),m=_("button"),m.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',g=y(),v=_("span"),w=B(n[0]),d(e,"class","info p-1 svelte-hjaz47"),d(e,"id","credits"),d(s,"class","info p-1 svelte-hjaz47"),d(s,"id","donate"),d(s,"href","https://ko-fi.com/xt8ss"),d(s,"target","_blank"),d(r,"class","info p-1 svelte-hjaz47"),d(r,"id","help"),We(a,"icon","octicon:log-16"),d(u,"class","tooltip"),d(u,"id","right"),d(l,"class","info svelte-hjaz47"),d(l,"id","changelog"),d(m,"class","info p-1 svelte-hjaz47"),d(m,"id","policy"),d(v,"class","info svelte-hjaz47"),d(v,"id","version")},m(E,I){T(E,e,I),T(E,t,I),T(E,s,I),T(E,i,I),T(E,r,I),T(E,o,I),T(E,l,I),h(l,a),h(l,c),h(l,u),h(l,f),O&&O.m(l,null),T(E,p,I),T(E,m,I),T(E,g,I),T(E,v,I),h(v,w),N||(P=[Le(e,"click",n[3]),Le(r,"click",n[4]),Le(l,"click",n[5]),Le(m,"click",n[6])],N=!0)},p(E,[I]){E[2]?O&&(gt(),ae(O,1,1,()=>{O=null}),vt()):O?I&4&&$(O,1):(O=sl(),O.c(),$(O,1),O.m(l,null)),I&1&&ue(w,E[0])},i(E){$(O)},o(E){ae(O)},d(E){E&&(S(e),S(t),S(s),S(i),S(r),S(o),S(l),S(p),S(m),S(g),S(v)),O&&O.d(),N=!1,ot(P)}}}function B_(n,e,t){let s,i;le(n,st,u=>t(1,s=u)),le(n,rs,u=>t(2,i=u));let{version:r}=e;const o=u=>{Pt(u),J(st,s.component=N_,s)},l=u=>{Pt(u),J(st,s.component=_c,s)},a=u=>{Pt(u),J(st,s.component=k_,s),J(rs,i=!0,i)},c=u=>{Pt(u),J(st,s.component=x_,s)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,s,i,o,l,a,c]}class j_ extends at{constructor(e){super(),lt(this,e,B_,W_,nt,{version:0})}}function q_(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v,w;return{c(){e=_("div"),t=_("span"),t.textContent="Choose your category",s=y(),i=_("button"),r=_("img"),l=y(),a=_("span"),a.textContent="Equipment",c=y(),u=_("button"),f=_("img"),m=y(),g=_("span"),g.textContent="Weapons",d(t,"id","title"),d(t,"class","svelte-jlt3e9"),Ge(r.src,o="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/7/7a/WhiteSpectralVanguardIcon.png")||d(r,"src",o),d(r,"alt",""),d(r,"class","svelte-jlt3e9"),i.disabled=n[0],d(i,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-jlt3e9"),Qe(i,"selected",n[1].mode=="equipment"),Ge(f.src,p="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/9/95/TheJadeTwin.png")||d(f,"src",p),d(f,"alt",""),d(f,"class","svelte-jlt3e9"),u.disabled=n[0],d(u,"class","modeCont ff-item flex fd-col fjc-center fai-center smaller-fs svelte-jlt3e9"),Qe(u,"selected",n[1].mode=="weapons"),d(e,"class","chooseModeCont ff-bg flex fd-row fw border-tp br-1 bs svelte-jlt3e9")},m(N,P){T(N,e,P),h(e,t),h(e,s),h(e,i),h(i,r),h(i,l),h(i,a),h(e,c),h(e,u),h(u,f),h(u,m),h(u,g),v||(w=[Le(i,"click",n[2]),Le(u,"click",n[3])],v=!0)},p(N,[P]){P&1&&(i.disabled=N[0]),P&2&&Qe(i,"selected",N[1].mode=="equipment"),P&1&&(u.disabled=N[0]),P&2&&Qe(u,"selected",N[1].mode=="weapons")},i:Z,o:Z,d(N){N&&S(e),v=!1,ot(w)}}}function H_(n,e,t){let s,i;return le(n,rn,l=>t(0,s=l)),le(n,ut,l=>t(1,i=l)),[s,i,l=>{Pt(l),s||J(ut,i.mode="equipment",i)},l=>{Pt(l),s||J(ut,i.mode="weapons",i)}]}class U_ extends at{constructor(e){super(),lt(this,e,H_,q_,nt,{})}}function il(n,e,t){const s=n.slice();return s[6]=e[t][0],s[7]=e[t][1],s[9]=t,s}function rl(n){let e,t,s=n[6]+"",i,r,o,l;function a(){return n[5](n[7])}return{c(){e=_("div"),t=_("button"),i=B(s),r=y(),d(t,"class","flex fjc-center fai-center light-hover svelte-wmh9x3"),d(e,"class","ff-bg posrel border-tp br-1 svelte-wmh9x3")},m(c,u){T(c,e,u),h(e,t),h(t,i),h(e,r),o||(l=[Le(t,"click",a),bl(n[3].call(null,t,n[9]))],o=!0)},p(c,u){n=c,u&1&&s!==(s=n[6]+"")&&ue(i,s)},d(c){c&&S(e),o=!1,ot(l)}}}function G_(n){let e,t=Ce(n[0]),s=[];for(let i=0;i<t.length;i+=1)s[i]=rl(il(n,t,i));return{c(){e=_("div");for(let i=0;i<s.length;i+=1)s[i].c();d(e,"class","options flex svelte-wmh9x3")},m(i,r){T(i,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(i,[r]){if(r&7){t=Ce(i[0]);let o;for(o=0;o<t.length;o+=1){const l=il(i,t,o);s[o]?s[o].p(l,r):(s[o]=rl(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},i:Z,o:Z,d(i){i&&S(e),Xe(s,i)}}}function z_(n,e,t){let s;le(n,st,c=>t(1,s=c));const i=Tl();let{options:r=[],focus:o}=e;function l(c,u){u+1===o&&c.focus()}const a=c=>{i("clicked"),c(),J(st,s.component=null,s)};return n.$$set=c=>{"options"in c&&t(0,r=c.options),"focus"in c&&t(4,o=c.focus)},[r,s,i,l,o,a]}class V_ extends at{constructor(e){super(),lt(this,e,z_,G_,nt,{options:0,focus:4})}}function $_(n){let e,t,s,i,r,o,l,a,c,u,f,p,m;return p=new V_({props:{options:[["Don't show again",n[3]],["Maybe later",n[4]]],focus:2}}),p.$on("clicked",n[5]),{c(){e=_("span"),e.textContent="Support Me",t=y(),s=_("div"),i=_("p"),i.textContent="Thank you for your continuous use of my site!",r=y(),o=_("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,l=y(),a=_("p"),a.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,c=y(),u=_("a"),u.innerHTML='<img src="misc/kofi-badge.png" alt="Ko-fi" class="svelte-1wbcr77"/>',f=y(),rt(p.$$.fragment),d(e,"class","title"),d(u,"class","flex br-1 light-hover svelte-1wbcr77"),d(u,"href","https://ko-fi.com/xt8ss"),d(u,"target","_blank"),d(s,"class","flex fd-col fai-center smaller-fs svelte-1wbcr77"),d(s,"id","contents")},m(g,v){T(g,e,v),T(g,t,v),T(g,s,v),h(s,i),h(s,r),h(s,o),h(s,l),h(s,a),h(s,c),h(s,u),h(s,f),et(p,s,null),m=!0},p(g,[v]){const w={};v&2&&(w.options=[["Don't show again",g[3]],["Maybe later",g[4]]]),p.$set(w)},i(g){m||($(p.$$.fragment,g),m=!0)},o(g){ae(p.$$.fragment,g),m=!1},d(g){g&&(S(e),S(t),S(s)),tt(p)}}}function Y_(n,e,t){let s,i;le(n,Jt,c=>t(1,s=c)),le(n,st,c=>t(2,i=c));let r=!1;const o=()=>J(Jt,s.showAgain=!1,s),l=()=>J(Jt,s.timesDenied++,s),a=()=>t(0,r=!0);return n.$$.update=()=>{n.$$.dirty&7&&i.component===null&&!r&&J(Jt,s.timesDenied++,s)},[r,s,i,o,l,a]}class K_ extends at{constructor(e){super(),lt(this,e,Y_,$_,nt,{})}}const{document:Bn,window:_n}=kc;function ol(n,e,t){const s=n.slice();return s[73]=e[t],s}function ll(n,e,t){const s=n.slice();return s[73]=e[t],s}function al(n){let e;return{c(){e=_("link"),d(e,"rel","preload"),d(e,"as","image"),d(e,"href",n[73])},m(t,s){T(t,e,s)},p:Z,d(t){t&&S(e)}}}function cl(n){let e;return{c(){e=_("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,s){T(t,e,s)},d(t){t&&S(e)}}}function ul(n){let e,t;return{c(){e=_("img"),d(e,"class","background svelte-1vlfqbw"),Ge(e.src,t=n[73])||d(e,"src",t),d(e,"alt",""),Qe(e,"active",n[30].indexOf(n[73])==n[22])},m(s,i){T(s,e,i)},p(s,i){i[0]&1077936128&&Qe(e,"active",s[30].indexOf(s[73])==s[22])},d(s){s&&S(e)}}}function hl(n){let e,t,s=Math.floor(n[27][n[2]]*100)+"",i,r,o,l;return{c(){e=_("span"),t=B("Zoom: "),i=B(s),r=_("b"),r.textContent="%",d(e,"class","info svelte-1vlfqbw"),d(e,"id","zoomLevel")},m(a,c){T(a,e,c),h(e,t),h(e,i),h(e,r),l=!0},p(a,c){(!l||c[0]&4)&&s!==(s=Math.floor(a[27][a[2]]*100)+"")&&ue(i,s)},i(a){l||(a&&qe(()=>{l&&(o||(o=De(e,Mt,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=De(e,Mt,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&S(e),a&&o&&o.end()}}}function fl(n){let e,t,s,i,r,o,l,a,c=n[8].muted?"Muted":"Unmuted",u,f,p,m,g,v,w,N,P,O,E,I=Us(n[19],n[20],n[21])+"",M,A,F,U,X,te,j,Q,we,q,V,H,he,ee,K=n[3].includes("equipment")?"stat":" stat intake",se,z,k,G,W,L,_e,ne,ie,Ee,me,ze,Be,Ve,Je,je,fe,wt;X=new U_({}),L=new c_({props:{size:"5",checked:n[4],disabled:n[5].chosenItems.length!=0}}),L.$on("toggle",n[47]);let ge=!n[5].gameWin&&!n[5].gameOver&&dl(n),Ie=(n[5].gameWin||n[5].gameOver)&&pl(n);function Me(x){n[50](x)}let Fe={};n[11]!==void 0&&(Fe.dailyItemsData=n[11]),Ee=new o_({props:Fe}),ht.push(()=>Vs(Ee,"dailyItemsData",Me));let ve=n[12][n[3]]&&_l(n),Te=n[23].component&&n[23].complete&&ml(n),de=n[23].component&&!n[23].complete&&gl(n);return{c(){e=_("main"),t=_("div"),s=_("div"),i=_("button"),r=_("iconify-icon"),l=y(),a=_("span"),u=B(c),f=y(),p=_("button"),m=_("img"),v=y(),w=_("span"),N=B(`Next item in...
                    `),P=_("br"),O=y(),E=new Sl(!1),M=y(),A=_("div"),F=_("button"),F.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-1vlfqbw"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',U=y(),rt(X.$$.fragment),te=y(),j=_("div"),Q=_("button"),we=_("iconify-icon"),q=y(),V=_("span"),H=B(`No armor (more damage taken).
                    `),he=_("br"),ee=B(`
                    No `),se=B(K),z=B(` / avg.
                    cost / color clues.`),k=y(),G=_("span"),G.textContent="Nightmare Mode",W=y(),rt(L.$$.fragment),_e=y(),ge&&ge.c(),ne=y(),Ie&&Ie.c(),ie=y(),rt(Ee.$$.fragment),ze=y(),ve&&ve.c(),Be=y(),Te&&Te.c(),Ve=y(),de&&de.c(),Je=bt(),We(r,"icon",o="f7:speaker-"+(n[8].muted?"slash":"2")+"-fill"),We(r,"class","svelte-1vlfqbw"),d(a,"class","tooltip"),d(a,"id","bottom"),d(i,"class","flex light-hover svelte-1vlfqbw"),d(s,"class","iconToggle ff-bg posrel border-tp br-1 bs svelte-1vlfqbw"),Ge(m.src,g="frontierdle.svg")||d(m,"src",g),d(m,"alt","Frontierdle"),d(m,"class","svelte-1vlfqbw"),E.a=null,d(w,"class","tooltip svelte-1vlfqbw"),d(w,"id","bottom"),d(p,"class","iconCont ff-bg posrel border-tp br-1 bs no-bg-change svelte-1vlfqbw"),d(F,"class","flex posrel light-hover svelte-1vlfqbw"),d(A,"class","iconToggle ff-bg border-tp br-1 bs svelte-1vlfqbw"),d(t,"class","upperMenu flex fai-center svelte-1vlfqbw"),We(we,"icon","eva:info-outline"),We(we,"id","info"),We(we,"class","svelte-1vlfqbw"),d(V,"class","tooltip svelte-1vlfqbw"),d(V,"id","bottom"),d(Q,"class","flex posrel no-bg-change"),d(j,"class","hardModeCont ff-bg flex fai-center border-tp br-1 bs svelte-1vlfqbw"),d(e,"class","flex fd-col fai-center posrel svelte-1vlfqbw")},m(x,re){T(x,e,re),h(e,t),h(t,s),h(s,i),h(i,r),h(i,l),h(i,a),h(a,u),h(t,f),h(t,p),h(p,m),h(p,v),h(p,w),h(w,N),h(w,P),h(w,O),E.m(I,w),h(t,M),h(t,A),h(A,F),h(e,U),et(X,e,null),h(e,te),h(e,j),h(j,Q),h(Q,we),h(Q,q),h(Q,V),h(V,H),h(V,he),h(V,ee),h(V,se),h(V,z),h(j,k),h(j,G),h(j,W),et(L,j,null),h(e,_e),ge&&ge.m(e,null),h(e,ne),Ie&&Ie.m(e,null),h(e,ie),et(Ee,e,null),h(e,ze),ve&&ve.m(e,null),T(x,Be,re),Te&&Te.m(x,re),T(x,Ve,re),de&&de.m(x,re),T(x,Je,re),je=!0,fe||(wt=[Le(i,"click",n[45]),Le(F,"click",n[46])],fe=!0)},p(x,re){(!je||re[0]&256&&o!==(o="f7:speaker-"+(x[8].muted?"slash":"2")+"-fill"))&&We(r,"icon",o),(!je||re[0]&256)&&c!==(c=x[8].muted?"Muted":"Unmuted")&&ue(u,c),(!je||re[0]&3670016)&&I!==(I=Us(x[19],x[20],x[21])+"")&&E.p(I),(!je||re[0]&8)&&K!==(K=x[3].includes("equipment")?"stat":" stat intake")&&ue(se,K);const ke={};re[0]&16&&(ke.checked=x[4]),re[0]&32&&(ke.disabled=x[5].chosenItems.length!=0),L.$set(ke),!x[5].gameWin&&!x[5].gameOver?ge?(ge.p(x,re),re[0]&32&&$(ge,1)):(ge=dl(x),ge.c(),$(ge,1),ge.m(e,ne)):ge&&(gt(),ae(ge,1,1,()=>{ge=null}),vt()),x[5].gameWin||x[5].gameOver?Ie?(Ie.p(x,re),re[0]&32&&$(Ie,1)):(Ie=pl(x),Ie.c(),$(Ie,1),Ie.m(e,ie)):Ie&&(gt(),ae(Ie,1,1,()=>{Ie=null}),vt());const ye={};!me&&re[0]&2048&&(me=!0,ye.dailyItemsData=x[11],zs(()=>me=!1)),Ee.$set(ye),x[12][x[3]]?ve?ve.p(x,re):(ve=_l(x),ve.c(),ve.m(e,null)):ve&&(ve.d(1),ve=null),x[23].component&&x[23].complete?Te?(Te.p(x,re),re[0]&8388608&&$(Te,1)):(Te=ml(x),Te.c(),$(Te,1),Te.m(Ve.parentNode,Ve)):Te&&(gt(),ae(Te,1,1,()=>{Te=null}),vt()),x[23].component&&!x[23].complete?de?(de.p(x,re),re[0]&8388608&&$(de,1)):(de=gl(x),de.c(),$(de,1),de.m(Je.parentNode,Je)):de&&(gt(),ae(de,1,1,()=>{de=null}),vt())},i(x){je||($(X.$$.fragment,x),$(L.$$.fragment,x),$(ge),$(Ie),$(Ee.$$.fragment,x),$(Te),$(de),je=!0)},o(x){ae(X.$$.fragment,x),ae(L.$$.fragment,x),ae(ge),ae(Ie),ae(Ee.$$.fragment,x),ae(Te),ae(de),je=!1},d(x){x&&(S(e),S(Be),S(Ve),S(Je)),tt(X),tt(L),ge&&ge.d(),Ie&&Ie.d(),tt(Ee),ve&&ve.d(),Te&&Te.d(x),de&&de.d(x),fe=!1,ot(wt)}}}function dl(n){let e,t,s;function i(o){n[48](o)}let r={};return n[18][n[3]]!==void 0&&(r.gameNumber=n[18][n[3]]),e=new __({props:r}),ht.push(()=>Vs(e,"gameNumber",i)),{c(){rt(e.$$.fragment)},m(o,l){et(e,o,l),s=!0},p(o,l){const a={};!t&&l[0]&262152&&(t=!0,a.gameNumber=o[18][o[3]],zs(()=>t=!1)),e.$set(a)},i(o){s||($(e.$$.fragment,o),s=!0)},o(o){ae(e.$$.fragment,o),s=!1},d(o){tt(e,o)}}}function pl(n){let e,t,s=n[5].gameWin?"Fantastic!":"Farewell...",i,r,o,l,a,c=n[5].gameWin?"won":"lost",u,f,p,m,g,v,w,N,P,O,E,I,M,A,F=n[11][n[3]].name+"",U,X,te,j,Q,we,q,V=Us(n[19],n[20],n[21])+"",H,he,ee,K,se,z,k;function G(L){n[49](L)}let W={};return n[18][n[3]]!==void 0&&(W.gameNumber=n[18][n[3]]),ee=new v_({props:W}),ht.push(()=>Vs(ee,"gameNumber",G)),z=new pc({}),{c(){e=_("div"),t=_("span"),i=B(s),r=y(),o=_("img"),a=B(`
                    You `),u=B(c),f=B("!"),p=y(),m=_("span"),m.textContent="Today's item was...",g=y(),v=_("div"),w=_("a"),N=_("img"),O=y(),E=_("iconify-icon"),M=y(),A=_("span"),U=B(F),X=y(),te=_("span"),j=B(`Next item available in...
                    `),Q=_("br"),we=y(),q=_("span"),he=y(),rt(ee.$$.fragment),se=y(),rt(z.$$.fragment),Ge(o.src,l=n[5].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||d(o,"src",l),d(o,"id","gameFinishIcon"),d(o,"alt",""),d(o,"class","svelte-1vlfqbw"),d(t,"class","flex fai-center svelte-1vlfqbw"),d(t,"id","gameFinishMessage"),d(m,"class","smaller-fs"),Ge(N.src,P=Vt+n[11][n[3]].image)||d(N,"src",P),d(N,"alt",""),d(N,"class","svelte-1vlfqbw"),We(E,"icon","tabler:link"),We(E,"class","svelte-1vlfqbw"),d(w,"class","flex fjc-center fai-center svelte-1vlfqbw"),d(w,"href",I=Tn+n[11][n[3]].link),d(w,"target","_blank"),d(v,"class","itemImg ff-item flex svelte-1vlfqbw"),d(v,"id","dailyItemImg"),d(A,"class","ff-item itemName svelte-1vlfqbw"),d(A,"id","dailyItemName"),d(q,"class","ff-item svelte-1vlfqbw"),d(q,"id","nextItemTime"),d(te,"class","flex fd-col svelte-1vlfqbw"),d(te,"id","nextItemCont"),d(e,"class","gameFinishCont ff-bg flex fd-col fai-center border-tp br-1 bs svelte-1vlfqbw")},m(L,_e){T(L,e,_e),h(e,t),h(t,i),h(t,r),h(t,o),h(t,a),h(t,u),h(t,f),h(e,p),h(e,m),h(e,g),h(e,v),h(v,w),h(w,N),h(w,O),h(w,E),h(e,M),h(e,A),h(A,U),h(e,X),h(e,te),h(te,j),h(te,Q),h(te,we),h(te,q),q.innerHTML=V,T(L,he,_e),et(ee,L,_e),T(L,se,_e),et(z,L,_e),k=!0},p(L,_e){(!k||_e[0]&32)&&s!==(s=L[5].gameWin?"Fantastic!":"Farewell...")&&ue(i,s),(!k||_e[0]&32&&!Ge(o.src,l=L[5].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&d(o,"src",l),(!k||_e[0]&32)&&c!==(c=L[5].gameWin?"won":"lost")&&ue(u,c),(!k||_e[0]&2056&&!Ge(N.src,P=Vt+L[11][L[3]].image))&&d(N,"src",P),(!k||_e[0]&2056&&I!==(I=Tn+L[11][L[3]].link))&&d(w,"href",I),(!k||_e[0]&2056)&&F!==(F=L[11][L[3]].name+"")&&ue(U,F),(!k||_e[0]&3670016)&&V!==(V=Us(L[19],L[20],L[21])+"")&&(q.innerHTML=V);const ne={};!K&&_e[0]&262152&&(K=!0,ne.gameNumber=L[18][L[3]],zs(()=>K=!1)),ee.$set(ne)},i(L){k||(L&&qe(()=>{k&&(H||(H=De(e,Mt,{duration:150},!0)),H.run(1))}),$(ee.$$.fragment,L),$(z.$$.fragment,L),k=!0)},o(L){L&&(H||(H=De(e,Mt,{duration:150},!1)),H.run(0)),ae(ee.$$.fragment,L),ae(z.$$.fragment,L),k=!1},d(L){L&&(S(e),S(he),S(se)),L&&H&&H.end(),tt(ee,L),tt(z,L)}}}function _l(n){let e,t,s,i,r,o,l,a,c,u,f,p=n[12][n[3]].name+"",m;return{c(){e=_("div"),t=B(`Yesterday's item was...
                `),s=_("div"),i=_("a"),r=_("img"),l=y(),a=_("iconify-icon"),u=y(),f=_("span"),m=B(p),Ge(r.src,o=Vt+n[12][n[3]].image)||d(r,"src",o),d(r,"alt",""),d(r,"class","svelte-1vlfqbw"),We(a,"icon","tabler:link"),We(a,"class","svelte-1vlfqbw"),d(i,"class","flex fjc-center fai-center svelte-1vlfqbw"),d(i,"href",c=Tn+n[12][n[3]].link),d(i,"target","_blank"),d(s,"class","itemImg ff-item flex svelte-1vlfqbw"),d(s,"id","previousItemImg"),d(f,"class","ff-item itemName svelte-1vlfqbw"),d(f,"id","previousItemName"),d(e,"class","previousItemCont ff-bg flex fd-col fai-center border-tp br-1 bs svelte-1vlfqbw")},m(g,v){T(g,e,v),h(e,t),h(e,s),h(s,i),h(i,r),h(i,l),h(i,a),h(e,u),h(e,f),h(f,m)},p(g,v){v[0]&4104&&!Ge(r.src,o=Vt+g[12][g[3]].image)&&d(r,"src",o),v[0]&4104&&c!==(c=Tn+g[12][g[3]].link)&&d(i,"href",c),v[0]&4104&&p!==(p=g[12][g[3]].name+"")&&ue(m,p)},d(g){g&&S(e)}}}function ml(n){let e,t,s,i,r;var o=n[23].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=ys(o,l())),{c(){e=_("div"),t&&rt(t.$$.fragment),d(e,"class","promptCont")},m(a,c){T(a,e,c),t&&et(t,e,null),n[51](e),s=!0,i||(r=Le(e,"click",n[52]),i=!0)},p(a,c){if(c[0]&8388608&&o!==(o=a[23].component)){if(t){gt();const u=t;ae(u.$$.fragment,1,0,()=>{tt(u,1)}),vt()}o?(t=ys(o,l()),rt(t.$$.fragment),$(t.$$.fragment,1),et(t,e,null)):t=null}},i(a){s||(t&&$(t.$$.fragment,a),s=!0)},o(a){t&&ae(t.$$.fragment,a),s=!1},d(a){a&&S(e),t&&tt(t),n[51](null),i=!1,r()}}}function gl(n){let e,t,s,i,r,o,l;var a=n[23].component;function c(u,f){return{props:{prompted:!0}}}return a&&(s=ys(a,c())),{c(){e=_("div"),t=_("div"),s&&rt(s.$$.fragment),d(t,"class","flex fd-col border-tp br-1 bs"),d(e,"class","promptCont")},m(u,f){T(u,e,f),h(e,t),s&&et(s,t,null),n[53](e),r=!0,o||(l=Le(e,"click",n[54]),o=!0)},p(u,f){if(f[0]&8388608&&a!==(a=u[23].component)){if(s){gt();const p=s;ae(p.$$.fragment,1,0,()=>{tt(p,1)}),vt()}a?(s=ys(a,c()),rt(s.$$.fragment),$(s.$$.fragment,1),et(s,t,null)):s=null}},i(u){r||(s&&$(s.$$.fragment,u),u&&qe(()=>{r&&(i||(i=De(t,$e,{duration:200},!0)),i.run(1))}),r=!0)},o(u){s&&ae(s.$$.fragment,u),u&&(i||(i=De(t,$e,{duration:200},!1)),i.run(0)),r=!1},d(u){u&&S(e),s&&tt(s),u&&i&&i.end(),n[53](null),o=!1,l()}}}function Q_(n){let e,t,s,i,r,o,l,a,c,u,f,p,m,g,v,w,N,P,O,E,I,M,A,F,U,X,te=pn(n[7])&&pn(n[6])&&n[9],j,Q,we,q;qe(n[39]);let V=Ce(n[30]),H=[];for(let k=0;k<V.length;k+=1)H[k]=al(ll(n,V,k));let he=n[23].component&&cl(),ee=Ce(n[30]),K=[];for(let k=0;k<ee.length;k+=1)K[k]=ul(ol(n,ee,k));let se=n[10]&&hl(n);U=new j_({props:{version:Ui}});let z=te&&fl(n);return{c(){e=y();for(let k=0;k<H.length;k+=1)H[k].c();t=bt(),he&&he.c(),s=bt(),i=y(),r=_("div"),o=_("audio"),c=y(),u=_("audio"),m=y(),g=_("audio"),N=y(),P=_("audio"),I=y(),M=_("div");for(let k=0;k<K.length;k+=1)K[k].c();A=y(),se&&se.c(),F=y(),rt(U.$$.fragment),X=y(),z&&z.c(),j=bt(),Ge(o.src,l="audio/lucky.mp3")||d(o,"src",l),o.muted=a=n[8].muted,Ge(u.src,f="audio/farewell.mp3")||d(u,"src",f),u.muted=p=n[8].muted,Ge(g.src,v="audio/heDidItAgain.mp3")||d(g,"src",v),g.muted=w=n[8].muted,Ge(P.src,O="audio/fishCatch.mp3")||d(P,"src",O),P.muted=E=n[8].muted,d(M,"class","backgrounds")},m(k,G){T(k,e,G);for(let W=0;W<H.length;W+=1)H[W]&&H[W].m(Bn.head,null);h(Bn.head,t),he&&he.m(Bn.head,null),h(Bn.head,s),T(k,i,G),T(k,r,G),h(r,o),n[41](o),h(r,c),h(r,u),n[42](u),h(r,m),h(r,g),n[43](g),h(r,N),h(r,P),n[44](P),T(k,I,G),T(k,M,G);for(let W=0;W<K.length;W+=1)K[W]&&K[W].m(M,null);T(k,A,G),se&&se.m(k,G),T(k,F,G),et(U,k,G),T(k,X,G),z&&z.m(k,G),T(k,j,G),Q=!0,we||(q=[Le(_n,"storage",n[36]),Le(_n,"wheel",n[37],{passive:!1}),Le(_n,"keydown",n[38]),Le(_n,"resize",n[39]),Le(Bn,"visibilitychange",n[40])],we=!0)},p(k,G){if(G[0]&1073741824){V=Ce(k[30]);let W;for(W=0;W<V.length;W+=1){const L=ll(k,V,W);H[W]?H[W].p(L,G):(H[W]=al(L),H[W].c(),H[W].m(t.parentNode,t))}for(;W<H.length;W+=1)H[W].d(1);H.length=V.length}if(k[23].component?he||(he=cl(),he.c(),he.m(s.parentNode,s)):he&&(he.d(1),he=null),(!Q||G[0]&256&&a!==(a=k[8].muted))&&(o.muted=a),(!Q||G[0]&256&&p!==(p=k[8].muted))&&(u.muted=p),(!Q||G[0]&256&&w!==(w=k[8].muted))&&(g.muted=w),(!Q||G[0]&256&&E!==(E=k[8].muted))&&(P.muted=E),G[0]&1077936128){ee=Ce(k[30]);let W;for(W=0;W<ee.length;W+=1){const L=ol(k,ee,W);K[W]?K[W].p(L,G):(K[W]=ul(L),K[W].c(),K[W].m(M,null))}for(;W<K.length;W+=1)K[W].d(1);K.length=ee.length}k[10]?se?(se.p(k,G),G[0]&1024&&$(se,1)):(se=hl(k),se.c(),$(se,1),se.m(F.parentNode,F)):se&&(gt(),ae(se,1,1,()=>{se=null}),vt()),G[0]&704&&(te=pn(k[7])&&pn(k[6])&&k[9]),te?z?(z.p(k,G),G[0]&704&&$(z,1)):(z=fl(k),z.c(),$(z,1),z.m(j.parentNode,j)):z&&(gt(),ae(z,1,1,()=>{z=null}),vt())},i(k){Q||($(se),$(U.$$.fragment,k),$(z),Q=!0)},o(k){ae(se),ae(U.$$.fragment,k),ae(z),Q=!1},d(k){k&&(S(e),S(i),S(r),S(I),S(M),S(A),S(F),S(X),S(j)),Xe(H,k),S(t),he&&he.d(k),S(s),n[41](null),n[42](null),n[43](null),n[44](null),Xe(K,k),se&&se.d(k),tt(U,k),z&&z.d(k),we=!1,ot(q)}}}let Ui="v1.1.1";function Us(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function J_(n,e,t){let s,i,r,o,l,a,c,u,f,p,m,g,v,w,N;le(n,Ct,b=>t(34,i=b)),le(n,sn,b=>t(4,r=b)),le(n,Hs,b=>t(35,o=b)),le(n,mt,b=>t(5,l=b)),le(n,Io,b=>t(6,a=b)),le(n,qi,b=>t(7,c=b)),le(n,ut,b=>t(8,u=b)),le(n,st,b=>t(23,f=b)),le(n,rs,b=>t(61,p=b)),le(n,Tt,b=>t(24,m=b)),le(n,Jt,b=>t(62,g=b)),le(n,Nn,b=>t(25,v=b)),le(n,Hi,b=>t(63,w=b)),le(n,rn,b=>t(26,N=b));let P,O,E=!1,I=7,M=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],A=!1,F,U,X={},te={},j=["version","builds","changelogSeen"],Q,we,q,V,H,he=0;xc(()=>{if(t(9,E=!0),!w)J(Hi,w=!0,w),J(st,f.component=_c,f);else if(g.showAgain){for(let Ne in v)he+=v[Ne].gamesPlayed;let b=Math.floor((he-g.lastGamesPlayed)/3);b>0&&b>=g.timesDenied&&(J(Jt,g.lastGamesPlayed=he,g),J(st,f.hasOptions=!0,f),J(st,f.component=K_,f))}});function ee(){F=setTimeout(()=>{t(10,A=!1)},750)}function K(){clearTimeout(F),t(10,A=!0),ee()}let se={equipment:19816,weapons:19818},z,k,G=58,W=58,L=58,_e;function ne(){let b=0;clearInterval(_e),z=Date.now()/1e3/60/60/24+b,t(18,k={equipment:Math.floor(z)-se.equipment,weapons:Math.floor(z)-se.weapons});for(let Ne of["equipment","weapons"])m[Ne].gameNum!=k[Ne]+1&&(J(mt,l=Nt.currentGameData[u.mode],l),J(Tt,m[Ne]=Nt.currentGameData[Ne],m),J(Tt,m[Ne].gameNum=k[Ne]+1,m));Np(Rp(Tp($p))).then(Ne=>{J(Io,a={equipment:Ne.val().rng_equipment_list[k.equipment],weapons:Ne.val().rng_weapons_list[k.weapons]},a),t(33,X={equipment:Ne.val().rng_equipment_list[k.equipment-1],weapons:Ne.val().rng_weapons_list[k.weapons-1]})}),_e=setInterval(()=>{let Ne=Date.now(),On=(Math.floor(z)+1-b)*24*60*60*1e3-Ne;t(19,G=Math.floor(On/1e3/60/60)),t(20,W=Math.floor(On%(1e3*60*60)/(1e3*60))),t(21,L=Math.floor(On%(1e3*60)/1e3)),G==0&&W==0&&L==0&&(J(mt,l=Nt.currentGameData[u.mode],l),J(Tt,m.equipment=Nt.currentGameData.equipment,m),J(Tt,m.weapons=Nt.currentGameData.weapons,m),setTimeout(ne,1e3))},1e3)}ne();let ie=["equipment","weapons"];for(let b of ie)fetch(`https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/item-data/${b}Data.json`).then(async Ne=>{if(Ne.status!=200){console.error(`Failed to fetch ${b}!
Status: ${Ne.status}`);return}let ps=await Ne.json();J(qi,c[b]=ps.sort((On,Cc)=>On.name.toLowerCase().localeCompare(Cc.name.toLowerCase())),c)});let Ee=[],me=[],ze,Be,Ve=9;for(let b=0;b<Ve;b++)Ee.push(`backgrounds/BG${b}.jpg`);function Je(b){Be=Math.floor(Math.random()*b.length)}Je(Ee);function je(){t(22,ze=Be),me.push(Be)}je(),function b(){setTimeout(()=>{if(Je(Ee),!me.length)je();else if(me.length>3&&(me=me.slice(1)),!me.includes(Be))je();else{let Ne=[...Array(Ve).keys()].filter(ps=>!me.includes(ps));Je(Ne),je()}document.visibilityState=="visible"&&b()},45e3)}(),localStorage.getItem("fd-version")!=Ui&&(J(rs,p=!1,p),localStorage.setItem("fd-version",Ui));function fe(){J(mt,l.gameWin=!0,l),J(Ct,i.gamesPlayed++,i),J(Ct,i.gamesWon++,i),J(Ct,i.streak++,i),J(Ct,i.winInfo[l.chosenItems.length]++,i),(l.chosenItems.length===1?H:i.streak>=3?V:we).play()}function wt(){J(mt,l.gameOver=!0,l),J(Ct,i.gamesPlayed++,i),J(Ct,i.streak=0,i),q.play()}function ge(){J(st,f.component=null,f),J(st,f.complete=!1,f)}function Ie(){let b=O>P;document.documentElement.style.fontSize=`${(b?.75:O/P*.8)*M[I]}vh`}const Me=b=>{j.includes(b.key)?localStorage.setItem(b.key,b.oldValue):b.key=="fd-currentGameData"?b.url.includes("ls=true")?J(Tt,m=JSON.parse(b.newValue),m):localStorage.setItem("fd-currentGameData",JSON.stringify(m)):b.key=="fd-settings"?b.url.includes("ls=true")?J(ut,u=JSON.parse(b.newValue),u):localStorage.setItem("fd-settings",JSON.stringify(u)):b.key=="fd-playerStats"&&(b.url.includes("ls=true")?J(Nn,v=JSON.parse(b.newValue),v):localStorage.setItem("fd-playerStats",JSON.stringify(v)))},Fe=b=>{let Ne=b.wheelDeltaY;if(b.ctrlKey){if(b.preventDefault(),M[I]==.2&&Ne<0||M[I]==5&&Ne>0)return;Ne>0?t(2,I++,I):t(2,I--,I),K()}},ve=b=>{let Ne=["Enter"," ","Escape"];b.ctrlKey&&(b.key=="-"||b.key=="+"||b.code=="Equal"||b.key=="0")&&(b.preventDefault(),(b.key=="+"||b.code=="Equal")&&M[I]!=5?t(2,I++,I):b.key=="-"&&M[I]!=.2?t(2,I--,I):b.key=="0"&&M[I]!=1&&t(2,I=7),K()),f.component&&Q&&(!b.ctrlKey&&!b.shiftKey&&!b.altKey&&Ne.includes(b.key)?ge():setTimeout(()=>{b.key=="Tab"&&!Q.contains(document.activeElement)&&ge()}))};function Te(){t(0,P=_n.outerHeight),t(1,O=_n.outerWidth)}const de=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,P=window.outerHeight),t(1,O=window.outerWidth),Ie()})};function x(b){ht[b?"unshift":"push"](()=>{we=b,t(14,we)})}function re(b){ht[b?"unshift":"push"](()=>{q=b,t(15,q)})}function ke(b){ht[b?"unshift":"push"](()=>{V=b,t(16,V)})}function ye(b){ht[b?"unshift":"push"](()=>{H=b,t(17,H)})}const C=b=>{Pt(b),!N&&J(ut,u.muted=!u.muted,u)},oe=b=>{Pt(b),l.gameWin||l.gameOver?(location.hash="playerStats",ji()):(J(st,f.complete=!0,f),J(st,f.component=pc,f))},R=b=>{if(l.chosenItems.length){b.detail.checked=!b.detail.checked;return}J(sn,r=b.detail.checked,r)};function _t(b){n.$$.not_equal(k[s],b)&&(k[s]=b,t(18,k))}function mc(b){n.$$.not_equal(k[s],b)&&(k[s]=b,t(18,k))}function gc(b){U=b,t(11,U),t(7,c),t(6,a),t(33,X)}function vc(b){ht[b?"unshift":"push"](()=>{Q=b,t(13,Q)})}const yc=b=>{Q.children[0].contains(b.target)||ge()};function bc(b){ht[b?"unshift":"push"](()=>{Q=b,t(13,Q)})}const wc=b=>{Q.children[0].contains(b.target)||ge()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(P||O||I)&&Ie(),n.$$.dirty[0]&256&&t(3,s=u.mode),n.$$.dirty[0]&192|n.$$.dirty[1]&4&&pn(c)&&pn(a)&&(t(11,U={equipment:c.equipment.find(b=>b.name==a.equipment),weapons:c.weapons.find(b=>b.name==a.weapons)}),t(12,te={equipment:c.equipment.find(b=>b.name==X.equipment),weapons:c.weapons.find(b=>b.name==X.weapons)})),n.$$.dirty[0]&16&&J(Hs,o=r?6:7,o),n.$$.dirty[0]&104|n.$$.dirty[1]&16&&l.chosenItems.length&&!l.gameWin&&!l.gameOver&&(l.chosenItems[l.chosenItems.length-1].name==a[s]?fe():l.chosenItems.length==o&&wt()),n.$$.dirty[1]&8&&i.streak>i.maxStreak&&J(Ct,i.maxStreak=i.streak,i)},[P,O,I,s,r,l,a,c,u,E,A,U,te,Q,we,q,V,H,k,G,W,L,ze,f,m,v,N,M,j,K,Ee,ge,Ie,X,i,o,Me,Fe,ve,Te,de,x,re,ke,ye,C,oe,R,_t,mc,gc,vc,yc,bc,wc]}class X_ extends at{constructor(e){super(),lt(this,e,J_,Q_,nt,{},null,[-1,-1,-1])}}new X_({target:document.body});
