var Ga=Object.defineProperty;var za=(n,e,t)=>e in n?Ga(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var St=(n,e,t)=>(za(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function re(){}const Pi=n=>n;function Yo(n){return n()}function fr(){return Object.create(null)}function Qe(n){n.forEach(Yo)}function jt(n){return typeof n=="function"}function Je(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ii;function Ge(n,e){return n===e?!0:(ii||(ii=document.createElement("a")),ii.href=e,n===ii.href)}function ja(n){return Object.keys(n).length===0}function Va(n,...e){if(n==null){for(const i of e)i(void 0);return re}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ne(n,e,t){n.$$.on_destroy.push(Va(e,t))}function ue(n,e,t){return n.set(t),e}function qa(n){return n&&jt(n.destroy)?n.destroy:re}const Ko=typeof window<"u";let Rs=Ko?()=>window.performance.now():()=>Date.now(),Ds=Ko?n=>requestAnimationFrame(n):re;const sn=new Set;function Qo(n){sn.forEach(e=>{e.c(n)||(sn.delete(e),e.f())}),sn.size!==0&&Ds(Qo)}function As(n){let e;return sn.size===0&&Ds(Qo),{promise:new Promise(t=>{sn.add(e={c:n,f:t})}),abort(){sn.delete(e)}}}const Ya=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function f(n,e){n.appendChild(e)}function Jo(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Ka(n){const e=g("style");return e.textContent="/* empty */",Qa(Jo(n),e),e.sheet}function Qa(n,e){return f(n.head||n,e),e.sheet}function T(n,e,t){n.insertBefore(e,t||null)}function I(n){n.parentNode&&n.parentNode.removeChild(n)}function qe(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function g(n){return document.createElement(n)}function Ja(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function z(n){return document.createTextNode(n)}function w(){return z(" ")}function kt(){return z("")}function De(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function xe(n,e,t){const i=e.toLowerCase();i in n?n[i]=typeof n[i]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function Xa(n){return Array.from(n.childNodes)}function pe(n,e){e=""+e,n.data!==e&&(n.data=e)}function un(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}function mt(n,e,t){n.classList.toggle(e,!!t)}function Xo(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}class Zo{constructor(e=!1){St(this,"is_svg",!1);St(this,"e");St(this,"n");St(this,"t");St(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,i=null){this.e||(this.is_svg?this.e=Ja(t.nodeName):this.e=g(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)T(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(I)}}function ai(n,e){return new n(e)}const ci=new Map;let ui=0;function Za(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function ec(n,e){const t={stylesheet:Ka(e),rules:{}};return ci.set(n,t),t}function hi(n,e,t,i,s,r,o,l=0){const a=16.666/i;let c=`{
`;for(let b=0;b<=1;b+=a){const D=e+(t-e)*r(b);c+=b*100+`%{${o(D,1-D)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${Za(u)}_${l}`,d=Jo(n),{stylesheet:p,rules:m}=ci.get(d)||ec(d,n);m[h]||(m[h]=!0,p.insertRule(`@keyframes ${h} ${u}`,p.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${h} ${i}ms linear ${s}ms 1 both`,ui+=1,h}function Ps(n,e){const t=(n.style.animation||"").split(", "),i=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-i.length;s&&(n.style.animation=i.join(", "),ui-=s,ui||tc())}function tc(){Ds(()=>{ui||(ci.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&I(e)}),ci.clear())})}function nc(n,e,t,i){if(!e)return re;const s=n.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return re;const{delay:r=0,duration:o=300,easing:l=Pi,start:a=Rs()+r,end:c=a+o,tick:u=re,css:h}=t(n,{from:e,to:s},i);let d=!0,p=!1,m;function v(){h&&(m=hi(n,0,1,o,r,l,h)),r||(p=!0)}function b(){h&&Ps(n,m),d=!1}return As(D=>{if(!p&&D>=a&&(p=!0),p&&D>=c&&(u(1,0),b()),!d)return!1;if(p){const F=D-a,C=0+1*l(F/o);u(C,1-C)}return!0}),v(),u(0,1),b}function ic(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,s=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,sc(n,s)}}function sc(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform;n.style.transform=`${s} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Pn;function Tn(n){Pn=n}function el(){if(!Pn)throw new Error("Function called outside component initialization");return Pn}function rc(n){el().$$.on_mount.push(n)}function oc(){const n=el();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=Xo(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}const Xt=[],Ze=[];let rn=[];const ss=[],lc=Promise.resolve();let rs=!1;function ac(){rs||(rs=!0,lc.then(tl))}function Ae(n){rn.push(n)}function Oi(n){ss.push(n)}const Vi=new Set;let Kt=0;function tl(){if(Kt!==0)return;const n=Pn;do{try{for(;Kt<Xt.length;){const e=Xt[Kt];Kt++,Tn(e),cc(e.$$)}}catch(e){throw Xt.length=0,Kt=0,e}for(Tn(null),Xt.length=0,Kt=0;Ze.length;)Ze.pop()();for(let e=0;e<rn.length;e+=1){const t=rn[e];Vi.has(t)||(Vi.add(t),t())}rn.length=0}while(Xt.length);for(;ss.length;)ss.pop()();rs=!1,Vi.clear(),Tn(n)}function cc(n){if(n.fragment!==null){n.update(),Qe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ae)}}function uc(n){const e=[],t=[];rn.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),rn=e}let Cn;function nl(){return Cn||(Cn=Promise.resolve(),Cn.then(()=>{Cn=null})),Cn}function kn(n,e,t){n.dispatchEvent(Xo(`${e?"intro":"outro"}${t}`))}const li=new Set;let pt;function lt(){pt={r:0,c:[],p:pt}}function at(){pt.r||Qe(pt.c),pt=pt.p}function Z(n,e){n&&n.i&&(li.delete(n),n.i(e))}function he(n,e,t,i){if(n&&n.o){if(li.has(n))return;li.add(n),pt.c.push(()=>{li.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}const il={duration:0};function hc(n,e,t){const i={direction:"out"};let s=e(n,t,i),r=!0,o;const l=pt;l.r+=1;let a;function c(){const{delay:u=0,duration:h=300,easing:d=Pi,tick:p=re,css:m}=s||il;m&&(o=hi(n,1,0,h,u,d,m));const v=Rs()+u,b=v+h;Ae(()=>kn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),As(D=>{if(r){if(D>=b)return p(0,1),kn(n,!1,"end"),--l.r||Qe(l.c),!1;if(D>=v){const F=d((D-v)/h);p(1-F,F)}}return r})}return jt(s)?nl().then(()=>{s=s(i),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&s.tick&&s.tick(1,0),r&&(o&&Ps(n,o),r=!1)}}}function we(n,e,t,i){let r=e(n,t,{direction:"both"}),o=i?0:1,l=null,a=null,c=null,u;function h(){c&&Ps(n,c)}function d(m,v){const b=m.b-o;return v*=Math.abs(b),{a:o,b:m.b,d:b,duration:v,start:m.start,end:m.start+v,group:m.group}}function p(m){const{delay:v=0,duration:b=300,easing:D=Pi,tick:F=re,css:C}=r||il,S={start:Rs()+v,b:m};m||(S.group=pt,pt.r+=1),"inert"in n&&(m?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),l||a?a=S:(C&&(h(),c=hi(n,o,m,b,v,D,C)),m&&F(0,1),l=d(S,b),Ae(()=>kn(n,m,"start")),As(N=>{if(a&&N>a.start&&(l=d(a,b),a=null,kn(n,l.b,"start"),C&&(h(),c=hi(n,o,l.b,l.duration,0,D,r.css))),l){if(N>=l.end)F(o=l.b,1-o),kn(n,l.b,"end"),a||(l.b?h():--l.group.r||Qe(l.group.c)),l=null;else if(N>=l.start){const $=N-l.start;o=l.a+l.d*D($/l.duration),F(o,1-o)}}return!!(l||a)}))}return{run(m){jt(r)?nl().then(()=>{r=r({direction:m?"in":"out"}),p(m)}):p(m)},end(){h(),l=a=null}}}function ye(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function fc(n,e){he(n,1,1,()=>{e.delete(n.key)})}function dc(n,e){n.f(),fc(n,e)}function _c(n,e,t,i,s,r,o,l,a,c,u,h){let d=n.length,p=r.length,m=d;const v={};for(;m--;)v[n[m].key]=m;const b=[],D=new Map,F=new Map,C=[];for(m=p;m--;){const R=h(s,r,m),x=t(R);let Q=o.get(x);Q?i&&C.push(()=>Q.p(R,e)):(Q=c(x,R),Q.c()),D.set(x,b[m]=Q),x in v&&F.set(x,Math.abs(m-v[x]))}const S=new Set,N=new Set;function $(R){Z(R,1),R.m(l,u),o.set(R.key,R),u=R.first,p--}for(;d&&p;){const R=b[p-1],x=n[d-1],Q=R.key,K=x.key;R===x?(u=R.first,d--,p--):D.has(K)?!o.has(Q)||S.has(Q)?$(R):N.has(K)?d--:F.get(Q)>F.get(K)?(N.add(Q),$(R)):(S.add(K),d--):(a(x,o),d--)}for(;d--;){const R=n[d];D.has(R.key)||a(R,o)}for(;p;)$(b[p-1]);return Qe(C),b}function Mi(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function ct(n){n&&n.c()}function tt(n,e,t){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),Ae(()=>{const r=n.$$.on_mount.map(Yo).filter(jt);n.$$.on_destroy?n.$$.on_destroy.push(...r):Qe(r),n.$$.on_mount=[]}),s.forEach(Ae)}function nt(n,e){const t=n.$$;t.fragment!==null&&(uc(t.after_update),Qe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function pc(n,e){n.$$.dirty[0]===-1&&(Xt.push(n),ac(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function it(n,e,t,i,s,r,o=null,l=[-1]){const a=Pn;Tn(n);const c=n.$$={fragment:null,ctx:[],props:r,update:re,not_equal:s,bound:fr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:fr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&pc(n,h)),d}):[],c.update(),u=!0,Qe(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const h=Xa(e.target);c.fragment&&c.fragment.l(h),h.forEach(I)}else c.fragment&&c.fragment.c();e.intro&&Z(n.$$.fragment),tt(n,e.target,e.anchor),tl()}Tn(a)}class st{constructor(){St(this,"$$");St(this,"$$set")}$destroy(){nt(this,1),this.$destroy=re}$on(e,t){if(!jt(t))return re;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ja(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mc="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(mc);function sl(n){const e=n-1;return e*e*e+1}function bt(n,{delay:e=0,duration:t=400,easing:i=Pi}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}function Me(n,{delay:e=0,duration:t=400,easing:i=sl,start:s=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,c=1-s,u=l*(1-r);return{delay:e,duration:t,easing:i,css:(h,d)=>`
			transform: ${a} scale(${1-c*d});
			opacity: ${l-u*d}
		`}}const Qt=[];function wt(n,e=re){let t;const i=new Set;function s(l){if(Je(n,l)&&(n=l,t)){const a=!Qt.length;for(const c of i)c[1](),Qt.push(c,n);if(a){for(let c=0;c<Qt.length;c+=2)Qt[c][0](Qt[c+1]);Qt.length=0}}}function r(l){s(l(n))}function o(l,a=re){const c=[l,a];return i.add(c),i.size===1&&(t=e(s,r)||re),l(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}var dr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const k=function(n,e){if(!n)throw mn(e)},mn=function(n){return new Error("Firebase Database ("+rl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},gc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Os={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,a=s+2<n.length,c=a?n[s+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,p=c&63;a||(p=64,o||(d=64)),i.push(t[u],t[h],t[d],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ol(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||c==null||h==null)throw new vc;const d=r<<2|l>>4;if(i.push(d),c!==64){const p=l<<4&240|c>>2;if(i.push(p),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ll=function(n){const e=ol(n);return Os.encodeByteArray(e,!0)},fi=function(n){return ll(n).replace(/\./g,"")},os=function(n){try{return Os.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const wc=()=>Cc().__FIREBASE_DEFAULTS__,Ec=()=>{if(typeof process>"u"||typeof dr>"u")return;const n=dr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ic=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&os(n[1]);return e&&JSON.parse(e)},cl=()=>{try{return wc()||Ec()||Ic()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sc=n=>{var e,t;return(t=(e=cl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Tc=n=>{const e=Sc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ul=()=>{var n;return(n=cl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function kc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fi(JSON.stringify(t)),fi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nc())}function Rc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fl(){return rl.NODE_ADMIN===!0}function Dc(){try{return typeof indexedDB=="object"}catch{return!1}}function Ac(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="FirebaseError";class Vn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Pc,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dl.prototype.create)}}class dl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Oc(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,i)}}function Oc(n,e){return n.replace(Mc,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Mc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n){return JSON.parse(n)}function Pe(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=On(os(r[0])||""),t=On(os(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Lc=function(n){const e=_l(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Fc=function(n){const e=_l(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function hn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function _r(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function di(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ls(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(pr(r)&&pr(o)){if(!ls(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function pr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(s<<5|s>>>27)+c+a+u+i[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function pl(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,k(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Li=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */class Hc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ms;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($c(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Uc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uc(n){return n===xt?void 0:n}function $c(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ee||(Ee={}));const zc={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},jc=Ee.INFO,Vc={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},qc=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Vc[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=jc,this._logHandler=qc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Yc=(n,e)=>e.some(t=>n instanceof t);let mr,gr;function Kc(){return mr||(mr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qc(){return gr||(gr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gl=new WeakMap,as=new WeakMap,vl=new WeakMap,qi=new WeakMap,Ls=new WeakMap;function Jc(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Nt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&gl.set(t,n)}).catch(()=>{}),Ls.set(e,n),e}function Xc(n){if(as.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});as.set(n,e)}let cs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return as.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zc(n){cs=n(cs)}function eu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Yi(this),e,...t);return vl.set(i,e.sort?e.sort():[e]),Nt(i)}:Qc().includes(n)?function(...e){return n.apply(Yi(this),e),Nt(gl.get(this))}:function(...e){return Nt(n.apply(Yi(this),e))}}function tu(n){return typeof n=="function"?eu(n):(n instanceof IDBTransaction&&Xc(n),Yc(n,Kc())?new Proxy(n,cs):n)}function Nt(n){if(n instanceof IDBRequest)return Jc(n);if(qi.has(n))return qi.get(n);const e=tu(n);return e!==n&&(qi.set(n,e),Ls.set(e,n)),e}const Yi=n=>Ls.get(n);function nu(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),l=Nt(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Nt(o.result),a.oldVersion,a.newVersion,Nt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const iu=["get","getKey","getAll","getAllKeys","count"],su=["put","add","delete","clear"],Ki=new Map;function vr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ki.get(e))return Ki.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=su.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||iu.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),s&&a.done]))[0]};return Ki.set(e,r),r}Zc(n=>({...n,get:(e,t,i)=>vr(e,t)||n.get(e,t,i),has:(e,t)=>!!vr(e,t)||n.has(e,t)}));/**
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
 */class ru{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ou(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ou(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const us="@firebase/app",yr="0.9.29";/**
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
 */const hs="[DEFAULT]",Pu={[us]:"fire-core",[lu]:"fire-core-compat",[cu]:"fire-analytics",[au]:"fire-analytics-compat",[hu]:"fire-app-check",[uu]:"fire-app-check-compat",[fu]:"fire-auth",[du]:"fire-auth-compat",[_u]:"fire-rtdb",[pu]:"fire-rtdb-compat",[mu]:"fire-fn",[gu]:"fire-fn-compat",[vu]:"fire-iid",[yu]:"fire-iid-compat",[bu]:"fire-fcm",[Cu]:"fire-fcm-compat",[wu]:"fire-perf",[Eu]:"fire-perf-compat",[Iu]:"fire-rc",[Su]:"fire-rc-compat",[Tu]:"fire-gcs",[ku]:"fire-gcs-compat",[Nu]:"fire-fst",[Ru]:"fire-fst-compat","fire-js":"fire-js",[Du]:"fire-js-all"};/**
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
 */const _i=new Map,fs=new Map;function Ou(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pi(n){const e=n.name;if(fs.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;fs.set(e,n);for(const t of _i.values())Ou(t,n);return!0}function Mu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */class Fu{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const xu=Au;function yl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:hs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Rt.create("bad-app-name",{appName:String(s)});if(t||(t=ul()),!t)throw Rt.create("no-options");const r=_i.get(s);if(r){if(ls(t,r.options)&&ls(i,r.config))return r;throw Rt.create("duplicate-app",{appName:s})}const o=new Gc(s);for(const a of fs.values())o.addComponent(a);const l=new Fu(t,i,o);return _i.set(s,l),l}function Wu(n=hs){const e=_i.get(n);if(!e&&n===hs&&ul())return yl();if(!e)throw Rt.create("no-app",{appName:n});return e}function on(n,e,t){var i;let s=(i=Pu[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(l.join(" "));return}pi(new Mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Bu="firebase-heartbeat-database",Hu=1,Ln="firebase-heartbeat-store";let Qi=null;function bl(){return Qi||(Qi=nu(Bu,Hu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ln)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rt.create("idb-open",{originalErrorMessage:n.message})})),Qi}async function Uu(n){try{const t=(await bl()).transaction(Ln),i=await t.objectStore(Ln).get(Cl(n));return await t.done,i}catch(e){if(e instanceof Vn)Ut.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function br(n,e){try{const i=(await bl()).transaction(Ln,"readwrite");await i.objectStore(Ln).put(e,Cl(n)),await i.done}catch(t){if(t instanceof Vn)Ut.warn(t.message);else{const i=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(i.message)}}}function Cl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $u=1024,Gu=30*24*60*60*1e3;class zu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vu(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Gu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cr(),{heartbeatsToSend:i,unsentEntries:s}=ju(this._heartbeatsCache.heartbeats),r=fi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Cr(){return new Date().toISOString().substring(0,10)}function ju(n,e=$u){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),wr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Vu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dc()?Ac().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Uu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return br(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return br(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wr(n){return fi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function qu(n){pi(new Mn("platform-logger",e=>new ru(e),"PRIVATE")),pi(new Mn("heartbeat",e=>new zu(e),"PRIVATE")),on(us,yr,n),on(us,yr,"esm2017"),on("fire-js","")}qu("");var Yu="firebase",Ku="10.9.0";/**
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
 */on(Yu,Ku,"app");var Er={};const Ir="@firebase/database",Sr="1.0.3";/**
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
 */class Ju{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:On(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ju(e)}}catch{}return new Xu},Bt=El("localStorage"),ds=El("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new ml("@firebase/database"),Zu=function(){let n=1;return function(){return n++}}(),Il=function(n){const e=Bc(n),t=new Wc;t.update(e);const i=t.digest();return Os.encodeByteArray(i)},qn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=qn.apply(null,i):typeof i=="object"?e+=Pe(i):e+=i,e+=" "}return e};let Ht=null,Tr=!0;const eh=function(n,e){k(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ln.logLevel=Ee.VERBOSE,Ht=ln.log.bind(ln),e&&ds.set("logging_enabled",!0)):typeof n=="function"?Ht=n:(Ht=null,ds.remove("logging_enabled"))},$e=function(...n){if(Tr===!0&&(Tr=!1,Ht===null&&ds.get("logging_enabled")===!0&&eh(!0)),Ht){const e=qn.apply(null,n);Ht(e)}},Yn=function(n){return function(...e){$e(n,...e)}},_s=function(...n){const e="FIREBASE INTERNAL ERROR: "+qn(...n);ln.error(e)},Ct=function(...n){const e=`FIREBASE FATAL ERROR: ${qn(...n)}`;throw ln.error(e),new Error(e)},et=function(...n){const e="FIREBASE WARNING: "+qn(...n);ln.warn(e)},th=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},nh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},fn="[MIN_NAME]",$t="[MAX_NAME]",vn=function(n,e){if(n===e)return 0;if(n===fn||e===$t)return-1;if(e===fn||n===$t)return 1;{const t=kr(n),i=kr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},ih=function(n,e){return n===e?0:n<e?-1:1},wn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Pe(e))},Fs=function(n){if(typeof n!="object"||n===null)return Pe(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Pe(e[i]),t+=":",t+=Fs(n[e[i]]);return t+="}",t},Tl=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ke(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const kl=function(n){k(!Sl(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,a;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},sh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function oh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const lh=new RegExp("^-?(0*)\\d{1,10}$"),ah=-2147483648,ch=2147483647,kr=function(n){if(lh.test(n)){const e=Number(n);if(e>=ah&&e<=ch)return e}return null},Kn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw et("Exception was thrown by user callback.",t),e},Math.floor(0))}},uh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class hh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?($e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class an{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}an.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="5",Nl="v",Rl="s",Dl="r",Al="f",Pl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ol="ls",Ml="p",ps="ac",Ll="websocket",Fl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,i,s,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function dh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Wl(n,e,t){k(typeof e=="string","typeof type must == string"),k(typeof t=="object","typeof params must == object");let i;if(e===Ll)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Fl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dh(n)&&(t.ns=n.namespace);const s=[];return Ke(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.counters_={}}incrementCounter(e,t=1){Et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji={},Xi={};function Ws(n){const e=n.toString();return Ji[e]||(Ji[e]=new _h),Ji[e]}function ph(n,e){const t=n.toString();return Xi[t]||(Xi[t]=e()),Xi[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Kn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="start",gh="close",vh="pLPCommand",yh="pRTLPCB",Bl="id",Hl="pw",Ul="ser",bh="cb",Ch="seg",wh="ts",Eh="d",Ih="dframe",$l=1870,Gl=30,Sh=$l-Gl,Th=25e3,kh=3e4;class Zt{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yn(e),this.stats_=Ws(t),this.urlFn=a=>(this.appCheckToken&&(a[ps]=this.appCheckToken),Wl(t,Fl,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new mh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kh)),nh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bs((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nr)this.id=l,this.password=a;else if(o===gh)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Nr]="t",i[Ul]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[bh]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Nl]=xs,this.transportSessionId&&(i[Rl]=this.transportSessionId),this.lastSessionId&&(i[Ol]=this.lastSessionId),this.applicationId&&(i[Ml]=this.applicationId),this.appCheckToken&&(i[ps]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pl.test(location.hostname)&&(i[Dl]=Al);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zt.forceAllow_=!0}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){return Zt.forceAllow_?!0:!Zt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sh()&&!rh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ll(t),s=Tl(i,Sh);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Ih]="t",i[Bl]=e,i[Hl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Pe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Bs{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zu(),window[vh+this.uniqueCallbackIdentifier]=e,window[yh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Bs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){$e("frame writing exception"),l.stack&&$e(l.stack),$e(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$e("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bl]=this.myID,e[Hl]=this.myPW,e[Ul]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gl+i.length<=$l;){const o=this.pendingSegs.shift();i=i+"&"+Ch+s+"="+o.seg+"&"+wh+s+"="+o.ts+"&"+Eh+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Th)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{$e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=16384,Rh=45e3;let mi=null;typeof MozWebSocket<"u"?mi=MozWebSocket:typeof WebSocket<"u"&&(mi=WebSocket);class ht{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yn(this.connId),this.stats_=Ws(t),this.connURL=ht.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Nl]=xs,typeof location<"u"&&location.hostname&&Pl.test(location.hostname)&&(o[Dl]=Al),t&&(o[Rl]=t),i&&(o[Ol]=i),s&&(o[ps]=s),r&&(o[Ml]=r),Wl(e,Ll,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bt.set("previous_websocket_failure",!0);try{let i;fl(),this.mySock=new mi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&mi!==null&&!ht.forceDisallow_}static previouslyFailed(){return Bt.isInMemoryStorage||Bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=On(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Pe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Tl(t,Nh);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Dh=6e4,Ah=5e3,Ph=10*1024,Oh=100*1024,Zi="t",Rr="d",Mh="s",Dr="r",Lh="e",Ar="o",Pr="a",Or="n",Mr="p",Fh="h";class xh{constructor(e,t,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yn("c:"+this.id+":"),this.transportManager_=new Fn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Nn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Oh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ph?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zi in e){const t=e[Zi];t===Pr?this.upgradeIfSecondaryHealthy_():t===Dr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ar&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wn("t",e),i=wn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Or,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wn("t",e),i=wn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wn(Zi,e);if(Rr in e){const i=e[Rr];if(t===Fh){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Or){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Mh?this.onConnectionShutdown_(i):t===Dr?this.onReset_(i):t===Lh?_s("Server Error: "+i):t===Ar?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_s("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),xs!==i&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Nn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Dh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ah))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends jl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gi}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=32,Fr=768;class be{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function fe(){return new be("")}function ce(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Pt(n){return n.pieces_.length-n.pieceNum_}function Ie(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new be(n.pieces_,e)}function Vl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Wh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ql(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Yl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new be(e,0)}function Oe(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof be)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new be(t,0)}function oe(n){return n.pieceNum_>=n.pieces_.length}function ze(n,e){const t=ce(n),i=ce(e);if(t===null)return e;if(t===i)return ze(Ie(n),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Kl(n,e){if(Pt(n)!==Pt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ft(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Pt(n)>Pt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Bh{constructor(e,t){this.errorPrefix_=t,this.parts_=ql(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Li(this.parts_[i]);Ql(this)}}function Hh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Li(e),Ql(n)}function Uh(n){const e=n.parts_.pop();n.byteLength_-=Li(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ql(n){if(n.byteLength_>Fr)throw new Error(n.errorPrefix_+"has a key path longer than "+Fr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Lr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Lr+") or object contains a cycle "+Wt(n))}function Wt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends jl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Hs}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=1e3,$h=60*5*1e3,xr=30*1e3,Gh=1.3,zh=3e4,jh="server_kill",Wr=3;class yt extends zl{constructor(e,t,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=yt.nextPersistentConnectionId_++,this.log_=Yn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=En,this.maxReconnectDelay_=$h,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!fl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Pe(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ms,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;yt.warnOnListenWarnings_(a,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Et(e,"w")){const i=hn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Lc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):_s("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zh&&(this.reconnectDelay_=En),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Gh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(h){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$e("getToken() completed but was canceled"):($e("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new xh(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{et(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(jh)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&et(h),a())}}}interrupt(e){$e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_r(this.interruptReasons_)&&(this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Fs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new be(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){$e("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wr&&(this.reconnectDelay_=xr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){$e("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+wl.replace(/\./g,"-")]=1,hl()?e["framework.cordova"]=1:Rc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gi.getInstance().currentlyOnline();return _r(this.interruptReasons_)&&e}}yt.nextPersistentConnectionId_=0;yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new se(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new se(fn,e),s=new se(fn,t);return this.compare(i,s)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;class Jl extends Fi{static get __EMPTY_NODE(){return si}static set __EMPTY_NODE(e){si=e}compare(e,t){return vn(e.name,t.name)}isDefinedOn(e){throw mn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return se.MIN}maxPost(){return new se($t,si)}makePost(e,t){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,si)}toString(){return".key"}}const cn=new Jl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Fe.RED,this.left=s??Ye.EMPTY_NODE,this.right=r??Ye.EMPTY_NODE}copy(e,t,i,s,r){return new Fe(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class Vh{copy(e,t,i,s,r){return this}insert(e,t,i){return new Fe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,t=Ye.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ye(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ri(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ri(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ri(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ri(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new Vh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,e){return vn(n.name,e.name)}function Us(n,e){return vn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms;function Yh(n){ms=n}const Xl=function(n){return typeof n=="number"?"number:"+kl(n):"string:"+n},Zl=function(n){if(n.isLeafNode()){const e=n.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Et(e,".sv"),"Priority must be a string or number.")}else k(n===ms||n.isEmpty(),"priority of unexpected type.");k(n===ms||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br;class Le{constructor(e,t=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zl(this.priorityNode_)}static set __childrenNodeConstructor(e){Br=e}static get __childrenNodeConstructor(){return Br}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ce(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=ce(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(k(i!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=kl(this.value_):e+=this.value_,this.lazyHash_=Il(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Le.VALUE_TYPE_ORDER.indexOf(t),r=Le.VALUE_TYPE_ORDER.indexOf(i);return k(s>=0,"Unknown leaf type: "+t),k(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea,ta;function Kh(n){ea=n}function Qh(n){ta=n}class Jh extends Fi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?vn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return se.MIN}maxPost(){return new se($t,new Le("[PRIORITY-POST]",ta))}makePost(e,t){const i=ea(e);return new se(t,new Le("[PRIORITY-POST]",i))}toString(){return".priority"}}const Re=new Jh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=Math.log(2);class Zh{constructor(e){const t=r=>parseInt(Math.log(r)/Xh,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vi=function(n,e,t,i){n.sort(e);const s=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=n[a],d=t?t(h):h,new Fe(d,h.node,Fe.BLACK,null,null);{const p=parseInt(u/2,10)+a,m=s(a,p),v=s(p+1,c);return h=n[p],d=t?t(h):h,new Fe(d,h.node,Fe.BLACK,m,v)}},r=function(a){let c=null,u=null,h=n.length;const d=function(m,v){const b=h-m,D=h;h-=m;const F=s(b+1,D),C=n[b],S=t?t(C):C;p(new Fe(S,C.node,v,null,F))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const v=a.nextBitIsOne(),b=Math.pow(2,a.count-(m+1));v?d(b,Fe.BLACK):(d(b,Fe.BLACK),d(b,Fe.RED))}return u},o=new Zh(n.length),l=r(o);return new Ye(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es;const Jt={};class vt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return k(Jt&&Re,"ChildrenNode.ts has not been loaded"),es=es||new vt({".priority":Jt},{".priority":Re}),es}get(e){const t=hn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ye?t:null}hasIndex(e){return Et(this.indexSet_,e.toString())}addIndex(e,t){k(e!==cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(se.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=vi(i,e.getCompare()):l=Jt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new vt(u,c)}addToIndexes(e,t){const i=di(this.indexes_,(s,r)=>{const o=hn(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),s===Jt)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(se.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),vi(l,o.getCompare())}else return Jt;else{const l=t.get(e.name);let a=s;return l&&(a=a.remove(new se(e.name,l))),a.insert(e,e.node)}});return new vt(i,this.indexSet_)}removeFromIndexes(e,t){const i=di(this.indexes_,s=>{if(s===Jt)return s;{const r=t.get(e.name);return r?s.remove(new se(e.name,r)):s}});return new vt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In;class V{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Zl(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return In||(In=new V(new Ye(Us),null,vt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||In}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?In:t}}getChild(e){const t=ce(e);return t===null?this:this.getImmediateChild(t).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(k(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new se(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?In:this.priorityNode_;return new V(s,o,r)}}updateChild(e,t){const i=ce(e);if(i===null)return t;{k(ce(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ie(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(Re,(o,l)=>{t[o]=l.val(e),i++,r&&V.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xl(this.getPriority().val())+":"),this.forEachChild(Re,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Il(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new se(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new se(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new se(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,se.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qn?-1:0}withIndex(e){if(e===cn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Re),s=t.getIterator(Re);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cn?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ef extends V{constructor(){super(new Ye(Us),V.EMPTY_NODE,vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Qn=new ef;Object.defineProperties(se,{MIN:{value:new se(fn,V.EMPTY_NODE)},MAX:{value:new se($t,Qn)}});Jl.__EMPTY_NODE=V.EMPTY_NODE;Le.__childrenNodeConstructor=V;Yh(Qn);Qh(Qn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=!0;function He(n,e=null){if(n===null)return V.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Le(t,He(e))}if(!(n instanceof Array)&&tf){const t=[];let i=!1;if(Ke(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=He(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),t.push(new se(o,a)))}}),t.length===0)return V.EMPTY_NODE;const r=vi(t,qh,o=>o.name,Us);if(i){const o=vi(t,Re.getCompare());return new V(r,He(e),new vt({".priority":o},{".priority":Re}))}else return new V(r,He(e),vt.Default)}else{let t=V.EMPTY_NODE;return Ke(n,(i,s)=>{if(Et(n,i)&&i.substring(0,1)!=="."){const r=He(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(He(e))}}Kh(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends Fi{constructor(e){super(),this.indexPath_=e,k(!oe(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?vn(e.name,t.name):r}makePost(e,t){const i=He(e),s=V.EMPTY_NODE.updateChild(this.indexPath_,i);return new se(t,s)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Qn);return new se($t,e)}toString(){return ql(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends Fi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?vn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,t){const i=He(e);return new se(t,i)}toString(){return".value"}}const rf=new sf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n){return{type:"value",snapshotNode:n}}function dn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function xn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Wn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function of(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(xn(t,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(dn(t,i)):o.trackChildChange(Wn(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Re,(s,r)=>{t.hasChild(s)||i.trackChildChange(xn(s,r))}),t.isLeafNode()||t.forEachChild(Re,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Wn(s,r,o))}else i.trackChildChange(dn(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.indexedFilter_=new $s(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bn.getStartPost_(e),this.endPost_=Bn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new se(t,i))||(i=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=V.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(V.EMPTY_NODE);const r=this;return t.forEachChild(Re,(o,l)=>{r.matches(new se(o,l))||(s=s.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Bn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new se(t,i))||(i=V.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new se(t,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const h=l.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,a);if(u&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Wn(t,i,h)),l.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(xn(t,h));const v=l.updateImmediateChild(t,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(dn(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return i.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(xn(c.name,c.node)),r.trackChildChange(dn(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fn}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$t}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new Gs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function af(n){return n.loadsAllData()?new $s(n.getIndex()):n.hasLimit()?new lf(n):new Bn(n)}function Hr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Re?t="$priority":n.index_===rf?t="$value":n.index_===cn?t="$key":(k(n.index_ instanceof nf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Pe(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Pe(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Pe(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Pe(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Pe(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ur(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Re&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends zl{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Yn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=yi.getListenId_(e,i),l={};this.listens_[o]=l;const a=Hr(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),hn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=yi.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Hr(e._queryParams),i=e._path.toString(),s=new Ms;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xc(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=On(l.responseText)}catch{et("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(){return{value:null,children:new Map}}function ia(n,e,t){if(oe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=ce(e);n.children.has(i)||n.children.set(i,bi());const s=n.children.get(i);e=Ie(e),ia(s,e,t)}}function gs(n,e,t){n.value!==null?t(e,n.value):uf(n,(i,s)=>{const r=new be(e.toString()+"/"+i);gs(s,r,t)})}function uf(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ke(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=10*1e3,ff=30*1e3,df=5*60*1e3;class _f{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new hf(e);const i=$r+(ff-$r)*Math.random();Nn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ke(e,(s,r)=>{r>0&&Et(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Nn(this.reportStats_.bind(this),Math.floor(Math.random()*2*df))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dt||(dt={}));function sa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function js(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=dt.ACK_USER_WRITE,this.source=sa()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new be(e));return new Ci(fe(),t,this.revert)}}else return k(ce(this.path)===e,"operationForChild called for unrelated child."),new Ci(Ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.source=e,this.path=t,this.type=dt.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new Hn(this.source,fe()):new Hn(this.source,Ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=dt.OVERWRITE}operationForChild(e){return oe(this.path)?new Gt(this.source,fe(),this.snap.getImmediateChild(e)):new Gt(this.source,Ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=dt.MERGE}operationForChild(e){if(oe(this.path)){const t=this.children.subtree(new be(e));return t.isEmpty()?null:t.value?new Gt(this.source,fe(),t.value):new Un(this.source,fe(),t)}else return k(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Un(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ce(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mf(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(of(o.childName,o.snapshotNode))}),Sn(n,s,"child_removed",e,i,t),Sn(n,s,"child_added",e,i,t),Sn(n,s,"child_moved",r,i,t),Sn(n,s,"child_changed",e,i,t),Sn(n,s,"value",e,i,t),s}function Sn(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,a)=>vf(n,l,a)),o.forEach(l=>{const a=gf(n,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function gf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function vf(n,e,t){if(e.childName==null||t.childName==null)throw mn("Should only compare child_ events.");const i=new se(e.childName,e.snapshotNode),s=new se(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(n,e){return{eventCache:n,serverCache:e}}function Rn(n,e,t,i){return xi(new Ot(e,t,i),n.serverCache)}function ra(n,e,t,i){return xi(n.eventCache,new Ot(e,t,i))}function wi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function zt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;const yf=()=>(ts||(ts=new Ye(ih)),ts);class Te{constructor(e,t=yf()){this.value=e,this.children=t}static fromObject(e){let t=new Te(null);return Ke(e,(i,s)=>{t=t.set(new be(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:fe(),value:this.value};if(oe(e))return null;{const i=ce(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ie(e),t);return r!=null?{path:Oe(new be(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const t=ce(e),i=this.children.get(t);return i!==null?i.subtree(Ie(e)):new Te(null)}}set(e,t){if(oe(e))return new Te(t,this.children);{const i=ce(e),r=(this.children.get(i)||new Te(null)).set(Ie(e),t),o=this.children.insert(i,r);return new Te(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const t=ce(e),i=this.children.get(t);if(i){const s=i.remove(Ie(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Te(null):new Te(this.value,r)}else return this}}get(e){if(oe(e))return this.value;{const t=ce(e),i=this.children.get(t);return i?i.get(Ie(e)):null}}setTree(e,t){if(oe(e))return t;{const i=ce(e),r=(this.children.get(i)||new Te(null)).setTree(Ie(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Te(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Oe(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,fe(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(oe(e))return null;{const r=ce(e),o=this.children.get(r);return o?o.findOnPath_(Ie(e),Oe(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,fe(),t)}foreachOnPath_(e,t,i){if(oe(e))return this;{this.value&&i(t,this.value);const s=ce(e),r=this.children.get(s);return r?r.foreachOnPath_(Ie(e),Oe(t,s),i):new Te(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Oe(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new Te(null))}}function Dn(n,e,t){if(oe(e))return new _t(new Te(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ze(s,e);return r=r.updateChild(o,t),new _t(n.writeTree_.set(s,r))}else{const s=new Te(t),r=n.writeTree_.setTree(e,s);return new _t(r)}}}function Gr(n,e,t){let i=n;return Ke(t,(s,r)=>{i=Dn(i,Oe(e,s),r)}),i}function zr(n,e){if(oe(e))return _t.empty();{const t=n.writeTree_.setTree(e,new Te(null));return new _t(t)}}function vs(n,e){return Vt(n,e)!=null}function Vt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ze(t.path,e)):null}function jr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Re,(i,s)=>{e.push(new se(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new se(i,s.value))}),e}function Dt(n,e){if(oe(e))return n;{const t=Vt(n,e);return t!=null?new _t(new Te(t)):new _t(n.writeTree_.subtree(e))}}function ys(n){return n.writeTree_.isEmpty()}function _n(n,e){return oa(fe(),n.writeTree_,e)}function oa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=oa(Oe(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Oe(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n,e){return ua(e,n)}function bf(n,e,t,i,s){k(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Dn(n.visibleWrites,e,t)),n.lastWriteId=i}function Cf(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function wf(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);k(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Ef(l,i.path)?s=!1:ft(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return If(n),!0;if(i.snap)n.visibleWrites=zr(n.visibleWrites,i.path);else{const l=i.children;Ke(l,a=>{n.visibleWrites=zr(n.visibleWrites,Oe(i.path,a))})}return!0}else return!1}function Ef(n,e){if(n.snap)return ft(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ft(Oe(n.path,t),e))return!0;return!1}function If(n){n.visibleWrites=la(n.allWrites,Sf,fe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Sf(n){return n.visible}function la(n,e,t){let i=_t.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)ft(t,o)?(l=ze(t,o),i=Dn(i,l,r.snap)):ft(o,t)&&(l=ze(o,t),i=Dn(i,fe(),r.snap.getChild(l)));else if(r.children){if(ft(t,o))l=ze(t,o),i=Gr(i,l,r.children);else if(ft(o,t))if(l=ze(o,t),oe(l))i=Gr(i,fe(),r.children);else{const a=hn(r.children,ce(l));if(a){const c=a.getChild(Ie(l));i=Dn(i,fe(),c)}}}else throw mn("WriteRecord should have .snap or .children")}}return i}function aa(n,e,t,i,s){if(!i&&!s){const r=Vt(n.visibleWrites,e);if(r!=null)return r;{const o=Dt(n.visibleWrites,e);if(ys(o))return t;if(t==null&&!vs(o,fe()))return null;{const l=t||V.EMPTY_NODE;return _n(o,l)}}}else{const r=Dt(n.visibleWrites,e);if(!s&&ys(r))return t;if(!s&&t==null&&!vs(r,fe()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ft(c.path,e)||ft(e,c.path))},l=la(n.allWrites,o,e),a=t||V.EMPTY_NODE;return _n(l,a)}}}function Tf(n,e,t){let i=V.EMPTY_NODE;const s=Vt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Re,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Dt(n.visibleWrites,e);return t.forEachChild(Re,(o,l)=>{const a=_n(Dt(r,new be(o)),l);i=i.updateImmediateChild(o,a)}),jr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Dt(n.visibleWrites,e);return jr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function kf(n,e,t,i,s){k(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Oe(e,t);if(vs(n.visibleWrites,r))return null;{const o=Dt(n.visibleWrites,r);return ys(o)?s.getChild(t):_n(o,s.getChild(t))}}function Nf(n,e,t,i){const s=Oe(e,t),r=Vt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Dt(n.visibleWrites,s);return _n(o,i.getNode().getImmediateChild(t))}else return null}function Rf(n,e){return Vt(n.visibleWrites,e)}function Df(n,e,t,i,s,r,o){let l;const a=Dt(n.visibleWrites,e),c=Vt(a,fe());if(c!=null)l=c;else if(t!=null)l=_n(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let p=d.getNext();for(;p&&u.length<s;)h(p,i)!==0&&u.push(p),p=d.getNext();return u}else return[]}function Af(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function Ei(n,e,t,i){return aa(n.writeTree,n.treePath,e,t,i)}function Vs(n,e){return Tf(n.writeTree,n.treePath,e)}function Vr(n,e,t,i){return kf(n.writeTree,n.treePath,e,t,i)}function Ii(n,e){return Rf(n.writeTree,Oe(n.treePath,e))}function Pf(n,e,t,i,s,r){return Df(n.writeTree,n.treePath,e,t,i,s,r)}function qs(n,e,t){return Nf(n.writeTree,n.treePath,e,t)}function ca(n,e){return ua(Oe(n.treePath,e),n.writeTree)}function ua(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;k(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),k(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Wn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,xn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,dn(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Wn(i,e.snapshotNode,s.oldSnap));else throw mn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const ha=new Mf;class Ys{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zt(this.viewCache_),r=Pf(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n){return{filter:n}}function Ff(n,e){k(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function xf(n,e,t,i,s){const r=new Of;let o,l;if(t.type===dt.OVERWRITE){const c=t;c.source.fromUser?o=bs(n,e,c.path,c.snap,i,s,r):(k(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!oe(c.path),o=Si(n,e,c.path,c.snap,i,s,l,r))}else if(t.type===dt.MERGE){const c=t;c.source.fromUser?o=Bf(n,e,c.path,c.children,i,s,r):(k(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Cs(n,e,c.path,c.children,i,s,l,r))}else if(t.type===dt.ACK_USER_WRITE){const c=t;c.revert?o=$f(n,e,c.path,i,s,r):o=Hf(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===dt.LISTEN_COMPLETE)o=Uf(n,e,t.path,i,r);else throw mn("Unknown operation type: "+t.type);const a=r.getChanges();return Wf(e,o,a),{viewCache:o,changes:a}}function Wf(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=wi(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(na(wi(e)))}}function fa(n,e,t,i,s,r){const o=e.eventCache;if(Ii(i,t)!=null)return e;{let l,a;if(oe(t))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=zt(e),u=c instanceof V?c:V.EMPTY_NODE,h=Vs(i,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ei(i,zt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ce(t);if(c===".priority"){k(Pt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Vr(i,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=Ie(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Vr(i,t,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=qs(i,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,s,r):l=o.getNode()}}return Rn(e,l,o.isFullyInitialized()||oe(t),n.filter.filtersNodes())}}function Si(n,e,t,i,s,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(oe(t))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(t,i);c=u.updateFullNode(a.getNode(),p,null)}else{const p=ce(t);if(!a.isCompleteForPath(t)&&Pt(t)>1)return e;const m=Ie(t),b=a.getNode().getImmediateChild(p).updateChild(m,i);p===".priority"?c=u.updatePriority(a.getNode(),b):c=u.updateChild(a.getNode(),p,b,m,ha,null)}const h=ra(e,c,a.isFullyInitialized()||oe(t),u.filtersNodes()),d=new Ys(s,h,r);return fa(n,h,t,s,d,l)}function bs(n,e,t,i,s,r,o){const l=e.eventCache;let a,c;const u=new Ys(s,e,r);if(oe(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),a=Rn(e,c,!0,n.filter.filtersNodes());else{const h=ce(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),a=Rn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Ie(t),p=l.getNode().getImmediateChild(h);let m;if(oe(d))m=i;else{const v=u.getCompleteChild(h);v!=null?Vl(d)===".priority"&&v.getChild(Yl(d)).isEmpty()?m=v:m=v.updateChild(d,i):m=V.EMPTY_NODE}if(p.equals(m))a=e;else{const v=n.filter.updateChild(l.getNode(),h,m,d,u,o);a=Rn(e,v,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function qr(n,e){return n.eventCache.isCompleteForChild(e)}function Bf(n,e,t,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=Oe(t,a);qr(e,ce(u))&&(l=bs(n,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=Oe(t,a);qr(e,ce(u))||(l=bs(n,l,u,c,s,r,o))}),l}function Yr(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Cs(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;oe(t)?c=i:c=new Te(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Yr(n,p,d);a=Si(n,a,new be(h),m,s,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),v=Yr(n,m,d);a=Si(n,a,new be(h),v,s,r,o,l)}}),a}function Hf(n,e,t,i,s,r,o){if(Ii(s,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(oe(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Si(n,e,t,a.getNode().getChild(t),s,r,l,o);if(oe(t)){let c=new Te(null);return a.getNode().forEachChild(cn,(u,h)=>{c=c.set(new be(u),h)}),Cs(n,e,t,c,s,r,l,o)}else return e}else{let c=new Te(null);return i.foreach((u,h)=>{const d=Oe(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Cs(n,e,t,c,s,r,l,o)}}function Uf(n,e,t,i,s){const r=e.serverCache,o=ra(e,r.getNode(),r.isFullyInitialized()||oe(t),r.isFiltered());return fa(n,o,t,i,ha,s)}function $f(n,e,t,i,s,r){let o;if(Ii(i,t)!=null)return e;{const l=new Ys(i,e,s),a=e.eventCache.getNode();let c;if(oe(t)||ce(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ei(i,zt(e));else{const h=e.serverCache.getNode();k(h instanceof V,"serverChildren would be complete if leaf node"),u=Vs(i,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=ce(t);let h=qs(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,Ie(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,V.EMPTY_NODE,Ie(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ei(i,zt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ii(i,fe())!=null,Rn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new $s(i.getIndex()),r=af(i);this.processor_=Lf(r);const o=t.serverCache,l=t.eventCache,a=s.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,l.getNode(),null),u=new Ot(a,o.isFullyInitialized(),s.filtersNodes()),h=new Ot(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=xi(h,u),this.eventGenerator_=new pf(this.query_)}get query(){return this.query_}}function zf(n){return n.viewCache_.serverCache.getNode()}function jf(n){return wi(n.viewCache_)}function Vf(n,e){const t=zt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!oe(e)&&!t.getImmediateChild(ce(e)).isEmpty())?t.getChild(e):null}function Kr(n){return n.eventRegistrations_.length===0}function qf(n,e){n.eventRegistrations_.push(e)}function Qr(n,e,t){const i=[];if(t){k(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Jr(n,e,t,i){e.type===dt.MERGE&&e.source.queryId!==null&&(k(zt(n.viewCache_),"We should always have a full cache before handling merges"),k(wi(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=xf(n.processor_,s,e,t,i);return Ff(n.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,da(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Yf(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Re,(r,o)=>{i.push(dn(r,o))}),t.isFullyInitialized()&&i.push(na(t.getNode())),da(n,i,t.getNode(),e)}function da(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return mf(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;class _a{constructor(){this.views=new Map}}function Kf(n){k(!Ti,"__referenceConstructor has already been defined"),Ti=n}function Qf(){return k(Ti,"Reference.ts has not been loaded"),Ti}function Jf(n){return n.views.size===0}function Ks(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return k(r!=null,"SyncTree gave us an op for an invalid query."),Jr(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Jr(o,e,t,i));return r}}function pa(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Ei(t,s?i:null),a=!1;l?a=!0:i instanceof V?(l=Vs(t,i),a=!1):(l=V.EMPTY_NODE,a=!1);const c=xi(new Ot(l,a,!1),new Ot(i,s,!1));return new Gf(e,c)}return o}function Xf(n,e,t,i,s,r){const o=pa(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),qf(o,t),Yf(o,t)}function Zf(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const l=Mt(n);if(s==="default")for(const[a,c]of n.views.entries())o=o.concat(Qr(c,t,i)),Kr(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(s);a&&(o=o.concat(Qr(a,t,i)),Kr(a)&&(n.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Mt(n)&&r.push(new(Qf())(e._repo,e._path)),{removed:r,events:o}}function ma(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function At(n,e){let t=null;for(const i of n.views.values())t=t||Vf(i,e);return t}function ga(n,e){if(e._queryParams.loadsAllData())return Bi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function va(n,e){return ga(n,e)!=null}function Mt(n){return Bi(n)!=null}function Bi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;function ed(n){k(!ki,"__referenceConstructor has already been defined"),ki=n}function td(){return k(ki,"Reference.ts has not been loaded"),ki}let nd=1;class Xr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=Af(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function id(n,e,t,i,s){return bf(n.pendingWriteTree_,e,t,i,s),s?Xn(n,new Gt(sa(),e,t)):[]}function en(n,e,t=!1){const i=Cf(n.pendingWriteTree_,e);if(wf(n.pendingWriteTree_,e)){let r=new Te(null);return i.snap!=null?r=r.set(fe(),!0):Ke(i.children,o=>{r=r.set(new be(o),!0)}),Xn(n,new Ci(i.path,r,t))}else return[]}function Jn(n,e,t){return Xn(n,new Gt(zs(),e,t))}function sd(n,e,t){const i=Te.fromObject(t);return Xn(n,new Un(zs(),e,i))}function rd(n,e){return Xn(n,new Hn(zs(),e))}function od(n,e,t){const i=Qs(n,t);if(i){const s=Js(i),r=s.path,o=s.queryId,l=ze(r,e),a=new Hn(js(o),l);return Xs(n,r,a)}else return[]}function ya(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||va(o,e))){const a=Zf(o,e,t,i);Jf(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,p)=>Mt(p));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=ud(d);for(let m=0;m<p.length;++m){const v=p[m],b=v.query,D=Ia(n,v);n.listenProvider_.startListening(An(b),$n(n,b),D.hashFn,D.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(An(e),null):c.forEach(d=>{const p=n.queryToTagMap.get(Hi(d));n.listenProvider_.stopListening(An(d),p)}))}hd(n,c)}return l}function ba(n,e,t,i){const s=Qs(n,i);if(s!=null){const r=Js(s),o=r.path,l=r.queryId,a=ze(o,e),c=new Gt(js(l),a,t);return Xs(n,o,c)}else return[]}function ld(n,e,t,i){const s=Qs(n,i);if(s){const r=Js(s),o=r.path,l=r.queryId,a=ze(o,e),c=Te.fromObject(t),u=new Un(js(l),a,c);return Xs(n,o,u)}else return[]}function ad(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,p)=>{const m=ze(d,s);r=r||At(p,m),o=o||Mt(p)});let l=n.syncPointTree_.get(s);l?(o=o||Mt(l),r=r||At(l,fe())):(l=new _a,n.syncPointTree_=n.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=V.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,m)=>{const v=At(m,fe());v&&(r=r.updateImmediateChild(p,v))}));const c=va(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Hi(e);k(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=fd();n.queryToTagMap.set(d,p),n.tagToQueryMap.set(p,d)}const u=Wi(n.pendingWriteTree_,s);let h=Xf(l,e,t,u,r,a);if(!c&&!o&&!i){const d=ga(l,e);h=h.concat(dd(n,e,d))}return h}function Ca(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=ze(o,e),c=At(l,a);if(c)return c});return aa(s,e,r,t,!0)}function cd(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=ze(c,t);i=i||At(u,h)});let s=n.syncPointTree_.get(t);s?i=i||At(s,fe()):(s=new _a,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Ot(i,!0,!1):null,l=Wi(n.pendingWriteTree_,e._path),a=pa(s,e,l,r?o.getNode():V.EMPTY_NODE,r);return jf(a)}function Xn(n,e){return wa(e,n.syncPointTree_,null,Wi(n.pendingWriteTree_,fe()))}function wa(n,e,t,i){if(oe(n.path))return Ea(n,e,t,i);{const s=e.get(fe());t==null&&s!=null&&(t=At(s,fe()));let r=[];const o=ce(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=ca(i,o);r=r.concat(wa(l,a,c,u))}return s&&(r=r.concat(Ks(s,n,i,t))),r}}function Ea(n,e,t,i){const s=e.get(fe());t==null&&s!=null&&(t=At(s,fe()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=ca(i,o),u=n.operationForChild(o);u&&(r=r.concat(Ea(u,l,a,c)))}),s&&(r=r.concat(Ks(s,n,i,t))),r}function Ia(n,e){const t=e.query,i=$n(n,t);return{hashFn:()=>(zf(e)||V.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?od(n,t._path,i):rd(n,t._path);{const r=oh(s,t);return ya(n,t,null,r)}}}}function $n(n,e){const t=Hi(e);return n.queryToTagMap.get(t)}function Hi(n){return n._path.toString()+"$"+n._queryIdentifier}function Qs(n,e){return n.tagToQueryMap.get(e)}function Js(n){const e=n.indexOf("$");return k(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new be(n.substr(0,e))}}function Xs(n,e,t){const i=n.syncPointTree_.get(e);k(i,"Missing sync point for query tag that we're tracking");const s=Wi(n.pendingWriteTree_,e);return Ks(i,t,s,null)}function ud(n){return n.fold((e,t,i)=>{if(t&&Mt(t))return[Bi(t)];{let s=[];return t&&(s=ma(t)),Ke(i,(r,o)=>{s=s.concat(o)}),s}})}function An(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(td())(n._repo,n._path):n}function hd(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Hi(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function fd(){return nd++}function dd(n,e,t){const i=e._path,s=$n(n,e),r=Ia(n,t),o=n.listenProvider_.startListening(An(e),s,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(i);if(s)k(!Mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!oe(c)&&u&&Mt(u))return[Bi(u).query];{let d=[];return u&&(d=d.concat(ma(u).map(p=>p.query))),Ke(h,(p,m)=>{d=d.concat(m)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(An(u),$n(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zs(t)}node(){return this.node_}}class er{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Oe(this.path_,e);return new er(this.syncTree_,t)}node(){return Ca(this.syncTree_,this.path_)}}const _d=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Zr=function(n,e,t){if(!n||typeof n!="object")return n;if(k(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return md(n[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:k(!1,"Unexpected server value: "+n)}},md=function(n,e,t){n.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&k(!1,"Unexpected increment value: "+i);const s=e.node();if(k(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},gd=function(n,e,t,i){return tr(e,new er(t,n),i)},vd=function(n,e,t){return tr(n,new Zs(e),t)};function tr(n,e,t){const i=n.getPriority().val(),s=Zr(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Zr(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new Le(l,He(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Le(s))),o.forEachChild(Re,(l,a)=>{const c=tr(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ir(n,e){let t=e instanceof be?e:new be(e),i=n,s=ce(t);for(;s!==null;){const r=hn(i.node.children,s)||{children:{},childCount:0};i=new nr(s,i,r),t=Ie(t),s=ce(t)}return i}function yn(n){return n.node.value}function Sa(n,e){n.node.value=e,ws(n)}function Ta(n){return n.node.childCount>0}function yd(n){return yn(n)===void 0&&!Ta(n)}function Ui(n,e){Ke(n.node.children,(t,i)=>{e(new nr(t,n,i))})}function ka(n,e,t,i){t&&!i&&e(n),Ui(n,s=>{ka(s,e,!0,i)}),t&&i&&e(n)}function bd(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Zn(n){return new be(n.parent===null?n.name:Zn(n.parent)+"/"+n.name)}function ws(n){n.parent!==null&&Cd(n.parent,n.name,n)}function Cd(n,e,t){const i=yd(t),s=Et(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ws(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ws(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=/[\[\].#$\/\u0000-\u001F\u007F]/,Ed=/[\[\].#$\u0000-\u001F\u007F]/,ns=10*1024*1024,Na=function(n){return typeof n=="string"&&n.length!==0&&!wd.test(n)},Ra=function(n){return typeof n=="string"&&n.length!==0&&!Ed.test(n)},Id=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ra(n)},Da=function(n,e,t){const i=t instanceof be?new Bh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Wt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Wt(i)+" with contents = "+e.toString());if(Sl(e))throw new Error(n+"contains "+e.toString()+" "+Wt(i));if(typeof e=="string"&&e.length>ns/3&&Li(e)>ns)throw new Error(n+"contains a string greater than "+ns+" utf8 bytes "+Wt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ke(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Na(o)))throw new Error(n+" contains an invalid key ("+o+") "+Wt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hh(i,o),Da(n,l,i),Uh(i)}),s&&r)throw new Error(n+' contains ".value" child '+Wt(i)+" in addition to actual children.")}},Aa=function(n,e,t,i){if(!(i&&t===void 0)&&!Ra(t))throw new Error(pl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sd=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Aa(n,e,t,i)},Td=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Na(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Id(t))throw new Error(pl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nd(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Kl(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Ft(n,e,t){Nd(n,t),Rd(n,i=>ft(i,e)||ft(e,i))}function Rd(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Dd(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Dd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ht&&$e("event: "+t.toString()),Kn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="repo_interrupt",Pd=25;class Od{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bi(),this.transactionQueueTree_=new nr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Md(n,e,t){if(n.stats_=Ws(n.repoInfo_),n.forceRestClient_||uh())n.server_=new yi(n.repoInfo_,(i,s,r,o)=>{eo(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>to(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new yt(n.repoInfo_,e,(i,s,r,o)=>{eo(n,i,s,r,o)},i=>{to(n,i)},i=>{Fd(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=ph(n.repoInfo_,()=>new _f(n.stats_,n.server_)),n.infoData_=new cf,n.infoSyncTree_=new Xr({startListening:(i,s,r,o)=>{let l=[];const a=n.infoData_.getNode(i._path);return a.isEmpty()||(l=Jn(n.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),sr(n,"connected",!1),n.serverSyncTree_=new Xr({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);Ft(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Ld(n){const t=n.infoData_.getNode(new be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Pa(n){return _d({timestamp:Ld(n)})}function eo(n,e,t,i,s){n.dataUpdateCount++;const r=new be(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const a=di(t,c=>He(c));o=ld(n.serverSyncTree_,r,a,s)}else{const a=He(t);o=ba(n.serverSyncTree_,r,a,s)}else if(i){const a=di(t,c=>He(c));o=sd(n.serverSyncTree_,r,a)}else{const a=He(t);o=Jn(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=lr(n,r)),Ft(n.eventQueue_,l,o)}function to(n,e){sr(n,"connected",e),e===!1&&Bd(n)}function Fd(n,e){Ke(e,(t,i)=>{sr(n,t,i)})}function sr(n,e,t){const i=new be("/.info/"+e),s=He(t);n.infoData_.updateSnapshot(i,s);const r=Jn(n.infoSyncTree_,i,s);Ft(n.eventQueue_,i,r)}function xd(n){return n.nextWriteId_++}function Wd(n,e,t){const i=cd(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=He(s).withIndex(e._queryParams.getIndex());ad(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Jn(n.serverSyncTree_,e._path,r);else{const l=$n(n.serverSyncTree_,e);o=ba(n.serverSyncTree_,e._path,r,l)}return Ft(n.eventQueue_,e._path,o),ya(n.serverSyncTree_,e,t,null,!0),r},s=>(rr(n,"get for query "+Pe(e)+" failed: "+s),Promise.reject(new Error(s))))}function Bd(n){rr(n,"onDisconnectEvents");const e=Pa(n),t=bi();gs(n.onDisconnect_,fe(),(s,r)=>{const o=gd(s,r,n.serverSyncTree_,e);ia(t,s,o)});let i=[];gs(t,fe(),(s,r)=>{i=i.concat(Jn(n.serverSyncTree_,s,r));const o=Gd(n,s);lr(n,o)}),n.onDisconnect_=bi(),Ft(n.eventQueue_,fe(),i)}function Hd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ad)}function rr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),$e(t,...e)}function Oa(n,e,t){return Ca(n.serverSyncTree_,e,t)||V.EMPTY_NODE}function or(n,e=n.transactionQueueTree_){if(e||$i(n,e),yn(e)){const t=La(n,e);k(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Ud(n,Zn(e),t)}else Ta(e)&&Ui(e,t=>{or(n,t)})}function Ud(n,e,t){const i=t.map(c=>c.currentWriteId),s=Oa(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ze(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{rr(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(en(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();$i(n,ir(n.transactionQueueTree_,e)),or(n,n.transactionQueueTree_),Ft(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Kn(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{et("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}lr(n,e)}},o)}function lr(n,e){const t=Ma(n,e),i=Zn(t),s=La(n,t);return $d(n,s,i),i}function $d(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ze(t,a.path);let u=!1,h;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,s=s.concat(en(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Pd)u=!0,h="maxretry",s=s.concat(en(n.serverSyncTree_,a.currentWriteId,!0));else{const d=Oa(n,a.path,o);a.currentInputSnapshot=d;const p=e[l].update(d.val());if(p!==void 0){Da("transaction failed: Data returned ",p,a.path);let m=He(p);typeof p=="object"&&p!=null&&Et(p,".priority")||(m=m.updatePriority(d.getPriority()));const b=a.currentWriteId,D=Pa(n),F=vd(m,d,D);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=F,a.currentWriteId=xd(n),o.splice(o.indexOf(b),1),s=s.concat(id(n.serverSyncTree_,a.path,F,a.currentWriteId,a.applyLocally)),s=s.concat(en(n.serverSyncTree_,b,!0))}else u=!0,h="nodata",s=s.concat(en(n.serverSyncTree_,a.currentWriteId,!0))}Ft(n.eventQueue_,t,s),s=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(h),!1,null))))}$i(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Kn(i[l]);or(n,n.transactionQueueTree_)}function Ma(n,e){let t,i=n.transactionQueueTree_;for(t=ce(e);t!==null&&yn(i)===void 0;)i=ir(i,t),e=Ie(e),t=ce(e);return i}function La(n,e){const t=[];return Fa(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Fa(n,e,t){const i=yn(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ui(e,s=>{Fa(n,s,t)})}function $i(n,e){const t=yn(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Sa(e,t.length>0?t:void 0)}Ui(e,i=>{$i(n,i)})}function Gd(n,e){const t=Zn(Ma(n,e)),i=ir(n.transactionQueueTree_,e);return bd(i,s=>{is(n,s)}),is(n,i),ka(i,s=>{is(n,s)}),t}function is(n,e){const t=yn(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(k(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(en(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sa(e,void 0):t.length=r+1,Ft(n.eventQueue_,Zn(e),s);for(let o=0;o<i.length;o++)Kn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function jd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):et(`Invalid query segment '${t}' in query '${n}'`)}return e}const no=function(n,e){const t=Vd(n),i=t.namespace;t.domain==="firebase.com"&&Ct(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||th();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new xl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new be(t.pathString)}},Vd=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=zd(n.substring(u,h)));const d=jd(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class Yd{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ar{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return oe(this._path)?null:Vl(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=Ur(this._queryParams),t=Fs(e);return t==="{}"?"default":t}get _queryObject(){return Ur(this._queryParams)}isEqual(e){if(e=gn(e),!(e instanceof ar))return!1;const t=this._repo===e._repo,i=Kl(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wh(this._path)}}class It extends ar{constructor(e,t){super(e,t,new Gs,!1)}get parent(){const e=Yl(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new be(e),i=Es(this.ref,e);return new Gn(this._node.getChild(t),i,Re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Gn(s,Es(this.ref,i),Re)))}hasChild(e){const t=new be(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qd(n,e){return n=gn(n),n._checkNotDeleted("ref"),e!==void 0?Es(n._root,e):n._root}function Es(n,e){return n=gn(n),ce(n._path)===null?Sd("child","path",e,!1):Aa("child","path",e,!1),new It(n._repo,Oe(n._path,e))}function Jd(n){n=gn(n);const e=new Kd(()=>{}),t=new cr(e);return Wd(n._repo,n,t).then(i=>new Gn(i,new It(n._repo,n._path),n._queryParams.getIndex()))}class cr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new qd("value",this,new Gn(e.snapshotNode,new It(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yd(this,e,t):null}matches(e){return e instanceof cr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Xd(n,...e){let t=gn(n);for(const i of e)t=i._apply(t);return t}Kf(It);ed(It);/**
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
 */const Zd="FIREBASE_DATABASE_EMULATOR_HOST",Is={};let e_=!1;function t_(n,e,t,i){n.repoInfo_=new xl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function n_(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$e("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=no(r,s),l=o.repoInfo,a,c;typeof process<"u"&&Er&&(c=Er[Zd]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=no(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new an(an.OWNER):new fh(n.name,n.options,e);Td("Invalid Firebase Database URL",o),oe(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const h=s_(l,n,u,new hh(n.name,t));return new r_(h,n)}function i_(n,e){const t=Is[e];(!t||t[n.key]!==n)&&Ct(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Hd(n),delete t[n.key]}function s_(n,e,t,i){let s=Is[e.name];s||(s={},Is[e.name]=s);let r=s[n.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Od(n,e_,t,i),s[n.toURLString()]=r,r}class r_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Md(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(i_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function o_(n=Wu(),e){const t=Mu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Tc("database");i&&l_(t,...i)}return t}function l_(n,e,t,i={}){n=gn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ct("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new an(an.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:kc(i.mockUserToken,n.app.options.projectId);r=new an(o)}t_(s,e,t,r)}/**
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
 */function a_(n){Qu(xu),pi(new Mn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return n_(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),on(Ir,Sr,n),on(Ir,Sr,"esm2017")}yt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};yt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};a_();var Ss={},xa={},Gi={};Object.defineProperty(Gi,"__esModule",{value:!0});Gi.rotx=void 0;function c_(n,e){return n.replace(/[a-zA-Z]/g,function(t){return String.fromCharCode((t<="Z"?90:122)>=(t=t.charCodeAt(0)+e)?t:t-26)})}Gi.rotx=c_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.rotx=void 0;var e=Gi;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}})})(xa);var Wa={},zi={};Object.defineProperty(zi,"__esModule",{value:!0});zi.base64=void 0;class u_{encode(e){return typeof btoa>"u"?Buffer.from(e,"binary").toString("base64"):btoa(e)}decode(e){return typeof atob>"u"?Buffer.from(e,"base64").toString("binary"):atob(e)}}const h_=new u_;zi.base64=h_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.base64=void 0;var e=zi;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return e.base64}})})(Wa);var Ba={},ji={};Object.defineProperty(ji,"__esModule",{value:!0});ji.hex=void 0;class f_{encode(e){let t="",i="";for(let s=0;s<e.length;s++)t=e.charCodeAt(s).toString(16),i+=("000"+t).slice(-4);return i}decode(e){let t=e.match(/.{1,4}/g)||[],i="";for(let s=0;s<t.length;s++)i+=String.fromCharCode(parseInt(t[s],16));return i}}const d_=new f_;ji.hex=d_;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=void 0;var e=ji;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return e.hex}})})(Ba);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.hex=n.base64=n.rotx=void 0;var e=xa;Object.defineProperty(n,"rotx",{enumerable:!0,get:function(){return e.rotx}});var t=Wa;Object.defineProperty(n,"base64",{enumerable:!0,get:function(){return t.base64}});var i=Ba;Object.defineProperty(n,"hex",{enumerable:!0,get:function(){return i.hex}})})(Ss);let __={ixqSmg:"IQhiAgKxljlkf5PxJkUgpUh0TXBV1nDL5V90J-Y",icbpLwuiqv:"nzwvbqmzltm.nqzmjiamixx.kwu",libijiamCZT:"pbbxa://nzwvbqmzltm-lmnictb-zblj.mczwxm-emab1.nqzmjiamlibijiam.ixx",xzwrmkbQl:"nzwvbqmzltm",abwziomJcksmb:"nzwvbqmzltm.ixxaxwb.kwu",umaaioqvoAmvlmzQl:"1037506366638",ixxQl:"1:1037506366638:emj:99366ml51ill69690k713n"},Ha={};for(let[n,e]of Object.entries(__))Ha[Ss.rotx(n,18)]=Ss.rotx(e,18);let Ni={fr:"Frontier",ow:"Otherworld",fs:"Fishing",rn:"Ratboy's Nightmare",nb:"Nightmare Boss",sp:"Spring",none:"???"},Ri={armor:"Armor",magicDmg:"Magic",meleeDmg:"Melee",rangedDmg:"Ranged",hpRegen:"HP Regen",endurance:"Endurance",sightRange:"Sight Range",walkSpeed:"Walk Speed",jumpPower:"Jump Power",ammoReturn:"Ammo Return",height:"Height"},p_=["head","body","legs","feet","neck","back","ring","misc"],m_=o_(yl(Ha)),pn="https://fantastic-frontier-roblox.fandom.com/wiki/",Lt="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/",Ua={chosenItems:[],rowInfo:[],gameWin:!1,gameOver:!1},g_={hardMode:!1,muted:!1},v_={gamesPlayed:0,gamesWon:0,streak:0,maxStreak:0,winInfo:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}},y_={0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};function Ts(n){window.history.replaceState(null,null,location.origin+location.pathname+(n||""))}function tn(n){n.target.closest("button").blur()}function ur(){Ts("?ls=true"),setTimeout(Ts)}let io=localStorage.getItem("fd-currentGameData"),so=localStorage.getItem("fd-settings"),ro=localStorage.getItem("fd-playerStats"),oo=localStorage.getItem("fd-changelogSeen"),ot=wt(io?JSON.parse(io):Ua),Tt=wt(so?JSON.parse(so):g_),ut=wt(ro?JSON.parse(ro):v_),ks=wt([]),lo=wt(""),Xe=wt({component:null,complete:!1}),Di=wt(7),zn=wt(!1),jn=wt(oo?JSON.parse(oo):!1);ot.subscribe(n=>{ur(),localStorage.setItem("fd-currentGameData",JSON.stringify(n))});Tt.subscribe(n=>{ur(),Di.set(n.hardMode?6:7),localStorage.setItem("fd-settings",JSON.stringify(n))});ut.subscribe(n=>{ur(),localStorage.setItem("fd-playerStats",JSON.stringify(n))});jn.subscribe(n=>localStorage.setItem("fd-changelogSeen",n));function b_(n,{from:e,to:t},i={}){const s=getComputedStyle(n),r=s.transform==="none"?"":s.transform,[o,l]=s.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*l/t.height-(t.top+l),{delay:u=0,duration:h=p=>Math.sqrt(p)*120,easing:d=sl}=i;return{delay:u,duration:jt(h)?h(Math.sqrt(a*a+c*c)):h,easing:d,css:(p,m)=>{const v=m*a,b=m*c,D=p+m*e.width/t.width,F=p+m*e.height/t.height;return`transform: ${r} translate(${v}px, ${b}px) scale(${D}, ${F});`}}}function ao(n,e,t){const i=n.slice();i[6]=e[t];const s=i[6].slot==i[0].slot;i[7]=s;const r=vo(i[0].stats,i[6].stats);i[8]=r;const o=i[8]==i[0].stats.length&&i[6].stats.length==i[0].stats.length;i[9]=o;const l=Math.ceil((i[6].cost.min+i[6].cost.max)/2);i[10]=l;const a=Math.ceil((i[0].cost.min+i[0].cost.max)/2);i[11]=a;const c=i[10]==i[11];i[12]=c;const u=vo(i[0].colors,i[6].colors);i[13]=u;const h=i[13]==i[0].colors.length&&i[6].colors.length==i[0].colors.length;i[14]=h;const d=i[6].outline==i[0].outline;i[15]=d;const p=i[6].release==i[0].release;return i[16]=p,i}function co(n,e,t){const i=n.slice();return i[19]=e[t],i}function uo(n,e,t){const i=n.slice();return i[22]=e[t],i}function C_(n){let e;return{c(){e=z("None")},m(t,i){T(t,e,i)},p:re,d(t){t&&I(e)}}}function w_(n){let e,t=ye(n[6].stats),i=[];for(let s=0;s<t.length;s+=1)i[s]=ho(uo(n,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=kt()},m(s,r){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(s,r);T(s,e,r)},p(s,r){if(r&2){t=ye(s[6].stats);let o;for(o=0;o<t.length;o+=1){const l=uo(s,t,o);i[o]?i[o].p(l,r):(i[o]=ho(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&I(e),qe(i,s)}}}function ho(n){let e=Ri[n[22]]+(n[22]==n[6].stats[n[6].stats.length-1]?"":", "),t;return{c(){t=z(e)},m(i,s){T(i,t,s)},p(i,s){s&2&&e!==(e=Ri[i[22]]+(i[22]==i[6].stats[i[6].stats.length-1]?"":", "))&&pe(t,e)},d(i){i&&I(t)}}}function fo(n){let e,t=n[8]+"",i;return{c(){e=g("span"),i=z(t),_(e,"class","bgInfo")},m(s,r){T(s,e,r),f(e,i)},p(s,r){r&3&&t!==(t=s[8]+"")&&pe(i,t)},d(s){s&&I(e)}}}function E_(n){let e=n[10].toLocaleString()+"",t,i,s,r;return{c(){t=z(e),i=w(),s=g("br"),r=z(`\r
                    Gold`)},m(o,l){T(o,t,l),T(o,i,l),T(o,s,l),T(o,r,l)},p(o,l){l&2&&e!==(e=o[10].toLocaleString()+"")&&pe(t,e)},d(o){o&&(I(t),I(i),I(s),I(r))}}}function I_(n){let e;return{c(){e=z("Unpurchasable")},m(t,i){T(t,e,i)},p:re,d(t){t&&I(e)}}}function _o(n){let e,t;return{c(){e=g("iconify-icon"),xe(e,"class","bgInfo"),xe(e,"icon","mingcute:arrow-up-fill"),xe(e,"flip",t=n[10]>n[11]?"vertical":"")},m(i,s){T(i,e,s)},p(i,s){s&3&&t!==(t=i[10]>i[11]?"vertical":"")&&xe(e,"flip",t)},d(i){i&&I(e)}}}function po(n){let e=(n[19]==n[6].colors[0]?nn(n[19]):n[19])+(n[19]==n[6].colors[n[6].colors.length-1]?"":", "),t;return{c(){t=z(e)},m(i,s){T(i,t,s)},p(i,s){s&2&&e!==(e=(i[19]==i[6].colors[0]?nn(i[19]):i[19])+(i[19]==i[6].colors[i[6].colors.length-1]?"":", "))&&pe(t,e)},d(i){i&&I(t)}}}function mo(n){let e,t=n[13]+"",i;return{c(){e=g("span"),i=z(t),_(e,"class","bgInfo")},m(s,r){T(s,e,r),f(e,i)},p(s,r){r&3&&t!==(t=s[13]+"")&&pe(i,t)},d(s){s&&I(e)}}}function go(n,e){let t,i,s,r,o,l,a,c,u,h,d,p=e[6].name+"",m,v,b,D,F,C=nn(e[6].slot)+"",S,N,$,R,x,Q,K,W,B,te,Y,P,H,E,U,M,me,de,ie,q,ne=nn(e[6].outline)+"",le,O,J,j,ee,ke=Ni[e[6].release]+"",L,ge,A,ae,G,ve,gt=re,_e,bn,ei;function ti(X,Ce){return X[6].stats.length?w_:C_}let qt=ti(e),rt=qt(e),Ue=!e[2].hardMode&&e[8]&&!e[9]&&fo(e);function ni(X,Ce){return X[6].cost.min==null?I_:E_}let Yt=ni(e),y=Yt(e),Se=!e[2].hardMode&&!e[12]&&e[10]&&_o(e),je=ye(e[6].colors),We=[];for(let X=0;X<je.length;X+=1)We[X]=po(co(e,je,X));let Ve=!e[2].hardMode&&e[13]&&!e[14]&&mo(e);return{key:n,first:null,c(){t=g("div"),i=g("div"),s=g("a"),r=g("img"),a=w(),c=g("iconify-icon"),h=w(),d=g("span"),m=z(p),D=w(),F=g("span"),S=z(C),R=w(),x=g("span"),rt.c(),Q=w(),Ue&&Ue.c(),B=w(),te=g("span"),y.c(),Y=w(),Se&&Se.c(),E=w(),U=g("span");for(let X=0;X<We.length;X+=1)We[X].c();M=w(),Ve&&Ve.c(),ie=w(),q=g("span"),le=z(ne),j=w(),ee=g("span"),L=z(ke),ge=z(" Update"),G=w(),Ge(r.src,o=Lt+e[6].image)||_(r,"src",o),_(r,"alt",l=e[6].name),_(r,"class","svelte-pl04pb"),xe(c,"icon","tabler:link"),xe(c,"class","svelte-pl04pb"),_(s,"class","flex fjc-center fai-center svelte-pl04pb"),_(s,"href",u=pn+e[6].link),_(s,"target","_blank"),_(d,"class","tooltip"),_(d,"id","right"),_(i,"id","itemImage"),_(i,"class","ff-item svelte-pl04pb"),_(F,"class","ff-bg ff-item svelte-pl04pb"),_(F,"id",N=e[7]?"correct":"wrong"),_(x,"class","ff-bg ff-item svelte-pl04pb"),_(x,"id",K=e[9]?"correct":e[8]?"partial":"wrong"),mt(x,"smallerStats",e[6].stats.length>=7),_(te,"class","ff-bg ff-item svelte-pl04pb"),_(te,"id",P=e[12]?"correct":"wrong"),_(U,"class","ff-bg ff-item svelte-pl04pb"),_(U,"id",me=e[14]?"correct":e[13]?"partial":"wrong"),_(q,"class","ff-bg ff-item svelte-pl04pb"),_(q,"id",O=e[15]?"correct":"wrong"),_(ee,"class","ff-bg ff-item svelte-pl04pb"),_(ee,"id",A=e[16]?"correct":"wrong"),_(t,"class","itemRow svelte-pl04pb"),this.first=t},m(X,Ce){T(X,t,Ce),f(t,i),f(i,s),f(s,r),f(s,a),f(s,c),f(i,h),f(i,d),f(d,m),f(t,D),f(t,F),f(F,S),f(t,R),f(t,x),rt.m(x,null),f(x,Q),Ue&&Ue.m(x,null),f(t,B),f(t,te),y.m(te,null),f(te,Y),Se&&Se.m(te,null),f(t,E),f(t,U);for(let Be=0;Be<We.length;Be+=1)We[Be]&&We[Be].m(U,null);f(U,M),Ve&&Ve.m(U,null),f(t,ie),f(t,q),f(q,le),f(t,j),f(t,ee),f(ee,L),f(ee,ge),f(t,G),_e=!0,bn||(ei=[qa(v=e[4].call(null,i,[e[7],e[8],e[9],e[12],e[13],e[14],e[15],e[16]])),De(ee,"introend",e[5])],bn=!0)},p(X,Ce){if(e=X,(!_e||Ce&2&&!Ge(r.src,o=Lt+e[6].image))&&_(r,"src",o),(!_e||Ce&2&&l!==(l=e[6].name))&&_(r,"alt",l),(!_e||Ce&2&&u!==(u=pn+e[6].link))&&_(s,"href",u),(!_e||Ce&2)&&p!==(p=e[6].name+"")&&pe(m,p),v&&jt(v.update)&&Ce&3&&v.update.call(null,[e[7],e[8],e[9],e[12],e[13],e[14],e[15],e[16]]),(!_e||Ce&2)&&C!==(C=nn(e[6].slot)+"")&&pe(S,C),(!_e||Ce&3&&N!==(N=e[7]?"correct":"wrong"))&&_(F,"id",N),qt===(qt=ti(e))&&rt?rt.p(e,Ce):(rt.d(1),rt=qt(e),rt&&(rt.c(),rt.m(x,Q))),!e[2].hardMode&&e[8]&&!e[9]?Ue?Ue.p(e,Ce):(Ue=fo(e),Ue.c(),Ue.m(x,null)):Ue&&(Ue.d(1),Ue=null),(!_e||Ce&3&&K!==(K=e[9]?"correct":e[8]?"partial":"wrong"))&&_(x,"id",K),(!_e||Ce&2)&&mt(x,"smallerStats",e[6].stats.length>=7),Yt===(Yt=ni(e))&&y?y.p(e,Ce):(y.d(1),y=Yt(e),y&&(y.c(),y.m(te,Y))),!e[2].hardMode&&!e[12]&&e[10]?Se?Se.p(e,Ce):(Se=_o(e),Se.c(),Se.m(te,null)):Se&&(Se.d(1),Se=null),(!_e||Ce&3&&P!==(P=e[12]?"correct":"wrong"))&&_(te,"id",P),Ce&2){je=ye(e[6].colors);let Be;for(Be=0;Be<je.length;Be+=1){const hr=co(e,je,Be);We[Be]?We[Be].p(hr,Ce):(We[Be]=po(hr),We[Be].c(),We[Be].m(U,M))}for(;Be<We.length;Be+=1)We[Be].d(1);We.length=je.length}!e[2].hardMode&&e[13]&&!e[14]?Ve?Ve.p(e,Ce):(Ve=mo(e),Ve.c(),Ve.m(U,null)):Ve&&(Ve.d(1),Ve=null),(!_e||Ce&3&&me!==(me=e[14]?"correct":e[13]?"partial":"wrong"))&&_(U,"id",me),(!_e||Ce&2)&&ne!==(ne=nn(e[6].outline)+"")&&pe(le,ne),(!_e||Ce&3&&O!==(O=e[15]?"correct":"wrong"))&&_(q,"id",O),(!_e||Ce&2)&&ke!==(ke=Ni[e[6].release]+"")&&pe(L,ke),(!_e||Ce&3&&A!==(A=e[16]?"correct":"wrong"))&&_(ee,"id",A)},r(){ve=t.getBoundingClientRect()},f(){ic(t),gt()},a(){gt(),gt=nc(t,ve,b_,{duration:125})},i(X){_e||(X&&Ae(()=>{_e&&(b||(b=we(i,Me,{duration:300},!0)),b.run(1))}),X&&Ae(()=>{_e&&($||($=we(F,Me,{duration:300,delay:250},!0)),$.run(1))}),X&&Ae(()=>{_e&&(W||(W=we(x,Me,{duration:300,delay:550},!0)),W.run(1))}),X&&Ae(()=>{_e&&(H||(H=we(te,Me,{duration:300,delay:850},!0)),H.run(1))}),X&&Ae(()=>{_e&&(de||(de=we(U,Me,{duration:300,delay:1150},!0)),de.run(1))}),X&&Ae(()=>{_e&&(J||(J=we(q,Me,{duration:300,delay:1450},!0)),J.run(1))}),X&&Ae(()=>{_e&&(ae||(ae=we(ee,Me,{duration:300,delay:1750},!0)),ae.run(1))}),_e=!0)},o(X){X&&(b||(b=we(i,Me,{duration:300},!1)),b.run(0)),X&&($||($=we(F,Me,{duration:300,delay:250},!1)),$.run(0)),X&&(W||(W=we(x,Me,{duration:300,delay:550},!1)),W.run(0)),X&&(H||(H=we(te,Me,{duration:300,delay:850},!1)),H.run(0)),X&&(de||(de=we(U,Me,{duration:300,delay:1150},!1)),de.run(0)),X&&(J||(J=we(q,Me,{duration:300,delay:1450},!1)),J.run(0)),X&&(ae||(ae=we(ee,Me,{duration:300,delay:1750},!1)),ae.run(0)),_e=!1},d(X){X&&I(t),X&&b&&b.end(),X&&$&&$.end(),rt.d(),Ue&&Ue.d(),X&&W&&W.end(),y.d(),Se&&Se.d(),X&&H&&H.end(),qe(We,X),Ve&&Ve.d(),X&&de&&de.end(),X&&J&&J.end(),X&&ae&&ae.end(),bn=!1,Qe(ei)}}}function S_(n){let e,t,i,s=[],r=new Map,o,l=ye(n[1].chosenItems.toReversed());const a=c=>c[6];for(let c=0;c<l.length;c+=1){let u=ao(n,l,c),h=a(u);r.set(h,s[c]=go(h,u))}return{c(){e=g("div"),t=g("div"),t.innerHTML='<span class="ff-item svelte-pl04pb">Item</span> <span class="ff-item svelte-pl04pb">Slot</span> <span class="ff-item svelte-pl04pb">Stats</span> <span class="ff-item svelte-pl04pb">Avg. Cost</span> <span class="ff-item svelte-pl04pb">Colors</span> <span class="ff-item svelte-pl04pb">Outline</span> <span class="ff-item svelte-pl04pb">Release</span>',i=w();for(let c=0;c<s.length;c+=1)s[c].c();_(t,"id","categories"),_(t,"class","svelte-pl04pb"),_(e,"class","gameboard ff-bg fd-col flex posrel border-tp svelte-pl04pb")},m(c,u){T(c,e,u),f(e,t),f(e,i);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(e,null);o=!0},p(c,[u]){if(u&15){l=ye(c[1].chosenItems.toReversed()),lt();for(let h=0;h<s.length;h+=1)s[h].r();s=_c(s,u,a,1,c,l,r,e,dc,go,null,ao);for(let h=0;h<s.length;h+=1)s[h].a();at()}},i(c){if(!o){for(let u=0;u<l.length;u+=1)Z(s[u]);o=!0}},o(c){for(let u=0;u<s.length;u+=1)he(s[u]);o=!1},d(c){c&&I(e);for(let u=0;u<s.length;u+=1)s[u].d()}}}function nn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function vo(n,e){return n.filter(i=>e.includes(i)).length}function T_(n,e,t){let i,s,r;Ne(n,ot,c=>t(1,i=c)),Ne(n,Tt,c=>t(2,s=c)),Ne(n,zn,c=>t(3,r=c));let{dailyItemData:o}=e;function l(c,[u,h,d,p,m,v,b,D]){i.chosenItems.length==i.rowInfo.length+1&&ot.update(F=>({...F,rowInfo:[...F.rowInfo,[u,d?1:h?0:-1,p,v?1:m?0:-1,b,D]]}))}const a=()=>ue(zn,r=!1,r);return n.$$set=c=>{"dailyItemData"in c&&t(0,o=c.dailyItemData)},[o,i,s,r,l,a]}class k_ extends st{constructor(e){super(),it(this,e,T_,S_,Je,{dailyItemData:0})}}function N_(n){let e,t,i,s;return{c(){e=g("div"),t=g("input"),_(t,"class","posrel br-1 svelte-1hx1p5z"),t.disabled=n[2],_(t,"type","checkbox"),t.checked=n[1],_(e,"class","toggleCont flex fai-center svelte-1hx1p5z"),mt(e,"unavailable",n[2]),un(e,"--s",`${n[0]}rem`)},m(r,o){T(r,e,o),f(e,t),i||(s=[De(t,"change",n[5]),De(t,"keydown",n[6])],i=!0)},p(r,[o]){o&4&&(t.disabled=r[2]),o&2&&(t.checked=r[1]),o&4&&mt(e,"unavailable",r[2]),o&1&&un(e,"--s",`${r[0]}rem`)},i:re,o:re,d(r){r&&I(e),i=!1,Qe(s)}}}function R_(n,e,t){let{size:i,checked:s=!1,disabled:r=!1,forced:o=!1}=e;const l=oc(),a=u=>{u.target.blur(),o?u.target.checked=!0:l("toggle",u.target)},c=u=>{u.key=="Enter"&&!o?(u.target.checked=!u.target.checked,l("toggle",u.target)):o&&(u.target.checked=!0)};return n.$$set=u=>{"size"in u&&t(0,i=u.size),"checked"in u&&t(1,s=u.checked),"disabled"in u&&t(2,r=u.disabled),"forced"in u&&t(3,o=u.forced)},[i,s,r,o,l,a,c]}class D_ extends st{constructor(e){super(),it(this,e,R_,N_,Je,{size:0,checked:1,disabled:2,forced:3})}}function yo(n,e,t){const i=n.slice();i[16]=e[t];const s=i[7].chosenItems.find(function(...o){return n[14](i[16],...o)})!=null;return i[17]=s,i}function bo(n){let e,t,i,s=ye(n[3]),r=[];for(let o=0;o<s.length;o+=1)r[o]=Co(yo(n,s,o));return{c(){e=g("div");for(let o=0;o<r.length;o+=1)r[o].c();_(e,"class","itemList ff-bg flex fd-col svelte-1k366gl")},m(o,l){T(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);n[15](e),i=!0},p(o,l){if(l&680){s=ye(o[3]);let a;for(a=0;a<s.length;a+=1){const c=yo(o,s,a);r[a]?r[a].p(c,l):(r[a]=Co(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=s.length}},i(o){i||(o&&Ae(()=>{i&&(t||(t=we(e,bt,{duration:75},!0)),t.run(1))}),i=!0)},o(o){o&&(t||(t=we(e,bt,{duration:75},!1)),t.run(0)),i=!1},d(o){o&&I(e),qe(r,o),n[15](null),o&&t&&t.end()}}}function Co(n){let e,t,i,s,r,o=n[16].name+"",l,a,c,u,h;function d(){return n[13](n[17],n[16])}return{c(){e=g("button"),t=g("img"),s=w(),r=g("span"),l=z(o),a=w(),Ge(t.src,i=Lt+n[16].image)||_(t,"src",i),_(t,"alt",""),_(t,"class","svelte-1k366gl"),e.disabled=c=n[17],_(e,"class","listItem flex fai-center no-bg-change svelte-1k366gl"),mt(e,"unavailable",n[17])},m(p,m){T(p,e,m),f(e,t),f(e,s),f(e,r),f(r,l),f(e,a),u||(h=De(e,"click",d),u=!0)},p(p,m){n=p,m&8&&!Ge(t.src,i=Lt+n[16].image)&&_(t,"src",i),m&8&&o!==(o=n[16].name+"")&&pe(l,o),m&136&&c!==(c=n[17])&&(e.disabled=c),m&136&&mt(e,"unavailable",n[17])},d(p){p&&I(e),u=!1,h()}}}function A_(n){let e,t,i,s,r,o,l=n[6].length&&n[3].length&&n[4]&&bo(n);return{c(){e=g("input"),i=w(),l&&l.c(),s=kt(),e.disabled=n[5],_(e,"type","text"),_(e,"class","searcherInput svelte-1k366gl"),_(e,"placeholder",t=`Guess the item for game #${n[0]+1}...`)},m(a,c){T(a,e,c),n[11](e),T(a,i,c),l&&l.m(a,c),T(a,s,c),r||(o=[De(window,"mousedown",n[10]),De(e,"input",n[8]),De(e,"focusin",n[12])],r=!0)},p(a,[c]){c&32&&(e.disabled=a[5]),c&1&&t!==(t=`Guess the item for game #${a[0]+1}...`)&&_(e,"placeholder",t),a[6].length&&a[3].length&&a[4]?l?(l.p(a,c),c&88&&Z(l,1)):(l=bo(a),l.c(),Z(l,1),l.m(s.parentNode,s)):l&&(lt(),he(l,1,1,()=>{l=null}),at())},i(a){Z(l)},o(a){he(l)},d(a){a&&(I(e),I(i),I(s)),n[11](null),l&&l.d(a),r=!1,Qe(o)}}}function P_(n,e,t){let i,s,r;Ne(n,zn,C=>t(5,i=C)),Ne(n,ks,C=>t(6,s=C)),Ne(n,ot,C=>t(7,r=C));let{gameNumber:o}=e,l,a,c=[],u=!1;function h(){let C=l.value.toLowerCase();if(t(3,c=[]),!!C)for(let S of s)S.name.toLowerCase().includes(C)&&c.push(S)}function d(C){i||(ot.update(S=>({...S,chosenItems:[...S.chosenItems,C]})),t(1,l.value="",l),h())}const p=C=>{a&&C.target!=l&&!a.contains(C.target)&&t(4,u=!1)};function m(C){Ze[C?"unshift":"push"](()=>{l=C,t(1,l)})}const v=()=>t(4,u=!0),b=(C,S)=>{C||(d(S),ue(zn,i=!0,i))},D=(C,S)=>S.name==C.name;function F(C){Ze[C?"unshift":"push"](()=>{a=C,t(2,a)})}return n.$$set=C=>{"gameNumber"in C&&t(0,o=C.gameNumber)},[o,l,a,c,u,i,s,r,h,d,p,m,v,b,D,F]}class O_ extends st{constructor(e){super(),it(this,e,P_,A_,Je,{gameNumber:0})}}function wo(n){let e,t,i;return{c(){e=g("span"),_(e,"id","HPFlash"),_(e,"class","svelte-9b9oo1")},m(s,r){T(s,e,r),i=!0},i(s){i||(t&&t.end(1),i=!0)},o(s){s&&(t=hc(e,bt,{duration:200})),i=!1},d(s){s&&I(e),s&&t&&t.end()}}}function M_(n){let e,t,i,s,r,o,l=Math.round(600-n[3].chosenItems.length*(600/n[2]))+"",a,c,u,h,d,p,m,v,b=n[4].hardMode?"You've lost your remaining armor.":"Your armor is protecting you.",D,F,C,S,N,$,R,x,Q,K,W,B=n[1]&&wo();function te(P){n[6](P)}let Y={};return n[0]!==void 0&&(Y.gameNumber=n[0]),Q=new O_({props:Y}),Ze.push(()=>Mi(Q,"gameNumber",te)),{c(){e=g("div"),t=g("div"),i=g("div"),s=g("div"),r=g("div"),o=g("span"),a=z(l),c=z("/600"),u=w(),h=g("button"),d=g("img"),m=w(),v=g("span"),D=z(b),F=w(),C=g("br"),S=z(`\r
                You can take `),N=z(n[2]),$=z(" hits at most!"),R=w(),B&&B.c(),x=w(),ct(Q.$$.fragment),_(o,"class","svelte-9b9oo1"),_(r,"class","HPBackground svelte-9b9oo1"),un(r,"width",`${Math.floor(100*(n[2]-n[3].chosenItems.length)/n[2])}%`),_(s,"class","innerGameHP flex posrel svelte-9b9oo1"),_(i,"class","outerGameHP posrel svelte-9b9oo1"),Ge(d.src,p="misc/armor.svg")||_(d,"src",p),_(d,"alt","Armor"),_(d,"class","svelte-9b9oo1"),mt(d,"noArmor",n[4].hardMode),_(v,"class","tooltip svelte-9b9oo1"),_(v,"id","right"),_(h,"class","posrel br-1 svelte-9b9oo1"),_(h,"id","armorIcon"),_(t,"class","gameHPCont flex svelte-9b9oo1"),_(e,"class","currentGameInfo ff-bg flex fjc-center fai-center posrel border-tp br-1 svelte-9b9oo1")},m(P,H){T(P,e,H),f(e,t),f(t,i),f(i,s),f(s,r),f(r,o),f(o,a),f(o,c),f(t,u),f(t,h),f(h,d),f(h,m),f(h,v),f(v,D),f(v,F),f(v,C),f(v,S),f(v,N),f(v,$),f(e,R),B&&B.m(e,null),f(e,x),tt(Q,e,null),W=!0},p(P,[H]){(!W||H&12)&&l!==(l=Math.round(600-P[3].chosenItems.length*(600/P[2]))+"")&&pe(a,l),H&12&&un(r,"width",`${Math.floor(100*(P[2]-P[3].chosenItems.length)/P[2])}%`),(!W||H&16)&&mt(d,"noArmor",P[4].hardMode),(!W||H&16)&&b!==(b=P[4].hardMode?"You've lost your remaining armor.":"Your armor is protecting you.")&&pe(D,b),(!W||H&4)&&pe(N,P[2]),P[1]?B?H&2&&Z(B,1):(B=wo(),B.c(),Z(B,1),B.m(e,x)):B&&(lt(),he(B,1,1,()=>{B=null}),at());const E={};!K&&H&1&&(K=!0,E.gameNumber=P[0],Oi(()=>K=!1)),Q.$set(E)},i(P){W||(Z(B),Z(Q.$$.fragment,P),W=!0)},o(P){he(B),he(Q.$$.fragment,P),W=!1},d(P){P&&I(e),B&&B.d(),nt(Q)}}}function L_(n,e,t){let i,s,r,o;Ne(n,zn,u=>t(5,i=u)),Ne(n,Di,u=>t(2,s=u)),Ne(n,ot,u=>t(3,r=u)),Ne(n,Tt,u=>t(4,o=u));let{gameNumber:l}=e,a=!1;function c(u){l=u,t(0,l)}return n.$$set=u=>{"gameNumber"in u&&t(0,l=u.gameNumber)},n.$$.update=()=>{n.$$.dirty&32&&i&&(t(1,a=!0),setTimeout(()=>t(1,a=!1)))},[l,a,s,r,o,i,c]}class F_ extends st{constructor(e){super(),it(this,e,L_,M_,Je,{gameNumber:0})}}function Eo(n,e,t){const i=n.slice();return i[8]=e[t],i}function Io(n,e,t){const i=n.slice();return i[11]=e[t],i}function So(n){let e,t=(n[11]===!0||n[11]===1?n[3].html.blue:n[11]===0?n[3].html.yellow:n[11]===!1||n[11]===-1?n[3].html.red:null)+"",i;return{c(){e=new Zo(!1),i=kt(),e.a=i},m(s,r){e.m(t,s,r),T(s,i,r)},p(s,r){r&4&&t!==(t=(s[11]===!0||s[11]===1?s[3].html.blue:s[11]===0?s[3].html.yellow:s[11]===!1||s[11]===-1?s[3].html.red:null)+"")&&e.p(t)},d(s){s&&(I(i),e.d())}}}function To(n){let e,t,i=ye(n[8]),s=[];for(let r=0;r<i.length;r+=1)s[r]=So(Io(n,i,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=w(),t=g("br")},m(r,o){for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(r,o);T(r,e,o),T(r,t,o)},p(r,o){if(o&12){i=ye(r[8]);let l;for(l=0;l<i.length;l+=1){const a=Io(r,i,l);s[l]?s[l].p(a,o):(s[l]=So(a),s[l].c(),s[l].m(e.parentNode,e))}for(;l<s.length;l+=1)s[l].d(1);s.length=i.length}},d(r){r&&(I(e),I(t)),qe(s,r)}}}function x_(n){let e,t,i,s,r,o,l,a,c,u,h,d,p,m,v=n[1]?"Copied!":"Copy",b,D,F,C=ye(n[2].rowInfo.toReversed()),S=[];for(let N=0;N<C.length;N+=1)S[N]=To(Eo(n,C,N));return{c(){e=g("div"),t=g("span"),t.textContent="Game Stats",i=w(),s=g("span"),r=z(n[4]),o=w(),l=g("br"),a=w();for(let N=0;N<S.length;N+=1)S[N].c();c=w(),u=g("button"),h=z(`Share Stats\r
        `),d=g("iconify-icon"),p=w(),m=g("span"),b=z(v),_(s,"class","smaller-fs"),xe(d,"icon","ri:share-fill"),_(m,"class","tooltip"),_(m,"id","top"),_(u,"class","flex fai-center posrel border-tp br-1 smaller-fs svelte-14jqt1l"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1")},m(N,$){T(N,e,$),f(e,t),f(e,i),f(e,s),f(s,r),f(s,o),f(s,l),f(s,a);for(let R=0;R<S.length;R+=1)S[R]&&S[R].m(s,null);f(e,c),f(e,u),f(u,h),f(u,d),f(u,p),f(u,m),f(m,b),D||(F=De(u,"click",n[6]),D=!0)},p(N,[$]){if($&12){C=ye(N[2].rowInfo.toReversed());let R;for(R=0;R<C.length;R+=1){const x=Eo(N,C,R);S[R]?S[R].p(x,$):(S[R]=To(x),S[R].c(),S[R].m(s,null))}for(;R<S.length;R+=1)S[R].d(1);S.length=C.length}$&2&&v!==(v=N[1]?"Copied!":"Copy")&&pe(b,v)},i:re,o:re,d(N){N&&I(e),qe(S,N),D=!1,F()}}}function W_(n,e,t){let i,s;Ne(n,ot,h=>t(2,i=h)),Ne(n,Tt,h=>t(7,s=h));let{gameNumber:r}=e,o={js:{blue:"🟦",yellow:"🟨",red:"🟥"},html:{blue:"&#128998;",yellow:"&#129000;",red:"&#128997;"}},l=`${s.hardMode?"(Nightmare)":""} Frontierdle #${r+1}`,a="",c=!1;setTimeout(()=>{for(let h of i.rowInfo.toReversed()){let d="";for(let p of h)d+=p===!0||p===1?o.js.blue:p===0?o.js.yellow:p===!1||p===-1?o.js.red:null;t(0,a+=d+`
`)}});const u=()=>{navigator.clipboard.writeText(`${l}
${a}
${location.origin+location.pathname}`),t(1,c=!0),setTimeout(()=>t(1,c=!1),1e3)};return n.$$set=h=>{"gameNumber"in h&&t(5,r=h.gameNumber)},[a,c,i,o,l,r,u]}class B_ extends st{constructor(e){super(),it(this,e,W_,x_,Je,{gameNumber:5})}}function ko(n,e,t){const i=n.slice();return i[3]=e[t][0],i[4]=e[t][1],i[6]=t,i}function No(n){let e,t,i=n[3]+"",s,r,o,l,a,c=n[4]+"",u,h;return{c(){e=g("div"),t=g("span"),s=z(i),r=w(),o=g("span"),o.innerHTML="",l=w(),a=g("span"),u=z(c),h=w(),_(t,"id","guessNum"),_(t,"class","svelte-mzhi8s"),_(o,"class","posrel border-tp svelte-mzhi8s"),_(o,"id","winsBar"),un(o,"width",`${n[4]*80/n[2]}%`),_(a,"class","smaller-fs svelte-mzhi8s"),_(a,"id","winsNum"),_(e,"class","flex fai-center svelte-mzhi8s")},m(d,p){T(d,e,p),f(e,t),f(t,s),f(e,r),f(e,o),f(e,l),f(e,a),f(a,u),f(e,h)},p(d,p){p&2&&i!==(i=d[3]+"")&&pe(s,i),p&2&&un(o,"width",`${d[4]*80/d[2]}%`),p&2&&c!==(c=d[4]+"")&&pe(u,c)},d(d){d&&I(e)}}}function H_(n){let e,t,i,s,r,o,l,a=n[1].gamesPlayed+"",c,u,h,d,p,m,v=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"",b,D,F,C,S,N,$,R=n[1].streak+"",x,Q,K,W,B,te,Y=n[1].maxStreak+"",P,H,E,U,M,me,de,ie,q,ne=ye(Object.entries(n[1].winInfo)),le=[];for(let O=0;O<ne.length;O+=1)le[O]=No(ko(n,ne,O));return{c(){e=g("div"),t=g("span"),t.textContent="Your Stats",i=w(),s=g("div"),r=g("div"),o=g("div"),l=g("span"),c=z(a),u=w(),h=g("span"),h.textContent="Games Played",d=w(),p=g("div"),m=g("span"),b=z(v),D=z("%"),F=w(),C=g("span"),C.textContent="Win Rate",S=w(),N=g("div"),$=g("span"),x=z(R),Q=w(),K=g("span"),K.textContent="Current Streak",W=w(),B=g("div"),te=g("span"),P=z(Y),H=w(),E=g("span"),E.textContent="Max Streak",U=w(),M=g("span"),M.textContent="Win Distribution",me=w(),de=g("div");for(let O=0;O<le.length;O+=1)le[O].c();_(h,"id","statsTitle"),_(h,"class","svelte-mzhi8s"),_(o,"class","svelte-mzhi8s"),_(C,"id","statsTitle"),_(C,"class","svelte-mzhi8s"),_(p,"class","svelte-mzhi8s"),_(K,"id","statsTitle"),_(K,"class","svelte-mzhi8s"),_(N,"class","svelte-mzhi8s"),_(E,"id","statsTitle"),_(E,"class","svelte-mzhi8s"),_(B,"class","svelte-mzhi8s"),_(r,"class","flex svelte-mzhi8s"),_(r,"id","playerStatsInfo"),_(M,"class","smaller-fs"),_(de,"class","flex fd-col smaller-fs svelte-mzhi8s"),_(de,"id","distributionChart"),_(e,"class","statsCont ff-bg flex fd-col fai-center border-tp br-1"),_(e,"id","playerStats")},m(O,J){T(O,e,J),f(e,t),f(e,i),f(e,s),f(s,r),f(r,o),f(o,l),f(l,c),f(o,u),f(o,h),f(r,d),f(r,p),f(p,m),f(m,b),f(m,D),f(p,F),f(p,C),f(r,S),f(r,N),f(N,$),f($,x),f(N,Q),f(N,K),f(r,W),f(r,B),f(B,te),f(te,P),f(B,H),f(B,E),f(e,U),f(e,M),f(e,me),f(e,de);for(let j=0;j<le.length;j+=1)le[j]&&le[j].m(de,null);q=!0},p(O,[J]){if(n=O,(!q||J&2)&&a!==(a=n[1].gamesPlayed+"")&&pe(c,a),(!q||J&2)&&v!==(v=Math.floor(n[1].gamesWon*100/(n[1].gamesPlayed?n[1].gamesPlayed:1))+"")&&pe(b,v),(!q||J&2)&&R!==(R=n[1].streak+"")&&pe(x,R),(!q||J&2)&&Y!==(Y=n[1].maxStreak+"")&&pe(P,Y),J&6){ne=ye(Object.entries(n[1].winInfo));let j;for(j=0;j<ne.length;j+=1){const ee=ko(n,ne,j);le[j]?le[j].p(ee,J):(le[j]=No(ee),le[j].c(),le[j].m(de,null))}for(;j<le.length;j+=1)le[j].d(1);le.length=ne.length}},i(O){q||(O&&Ae(()=>{q&&(ie||(ie=we(e,Me,{duration:n[0]?200:0},!0)),ie.run(1))}),q=!0)},o(O){O&&(ie||(ie=we(e,Me,{duration:n[0]?200:0},!1)),ie.run(0)),q=!1},d(O){O&&I(e),qe(le,O),O&&ie&&ie.end()}}}function U_(n,e,t){let i;Ne(n,ut,o=>t(1,i=o));let{prompted:s=!1}=e,r=Math.max(...Object.values(i.winInfo));return n.$$set=o=>{"prompted"in o&&t(0,s=o.prompted)},[s,i,r]}class $a extends st{constructor(e){super(),it(this,e,U_,H_,Je,{prompted:0})}}function Ro(n,e,t){const i=n.slice();return i[5]=e[t],i}function $_(n){let e,t=ye(n[1]),i=[];for(let s=0;s<t.length;s+=1)i[s]=Do(Ro(n,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=kt()},m(s,r){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(s,r);T(s,e,r)},p(s,r){if(r&2){t=ye(s[1]);let o;for(o=0;o<t.length;o+=1){const l=Ro(s,t,o);i[o]?i[o].p(l,r):(i[o]=Do(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&I(e),qe(i,s)}}}function G_(n){let e,t,i;return{c(){e=g("span"),t=z("— "),i=z(n[1]),_(e,"id","info"),_(e,"class","svelte-hhfk27")},m(s,r){T(s,e,r),f(e,t),f(e,i)},p(s,r){r&2&&pe(i,s[1])},d(s){s&&I(e)}}}function Do(n){let e,t,i=n[5]+"",s;return{c(){e=g("span"),t=z("— "),s=z(i),_(e,"id","info"),_(e,"class","svelte-hhfk27")},m(r,o){T(r,e,o),f(e,t),f(e,s)},p(r,o){o&2&&i!==(i=r[5]+"")&&pe(s,i)},d(r){r&&I(e)}}}function z_(n){let e,t,i,s,r,o,l;function a(h,d){return typeof h[1]=="string"?G_:$_}let c=a(n),u=c(n);return{c(){e=g("li"),t=g("span"),i=z("v"),s=z(n[0]),r=w(),o=g("i"),o.textContent=`${n[3][n[2][1]-1]+" "+n[2][0]+(Math.floor(n[2][0]/10)===1?"th":y_[n[2][0]%10])+", 20"+n[2][2]}`,l=w(),u.c(),_(t,"id","version"),_(t,"class","svelte-hhfk27"),_(o,"id","date"),_(o,"class","svelte-hhfk27"),_(e,"class","flex fai-center svelte-hhfk27")},m(h,d){T(h,e,d),f(e,t),f(t,i),f(t,s),f(e,r),f(e,o),f(e,l),u.m(e,null)},p(h,[d]){d&1&&pe(s,h[0]),c===(c=a(h))&&u?u.p(h,d):(u.d(1),u=c(h),u&&(u.c(),u.m(e,null)))},i:re,o:re,d(h){h&&I(e),u.d()}}}function j_(n,e,t){let{version:i,date:s,text:r}=e,o=s.split("/"),l=["January","February","March","April","May","June","July","August","Semptember","October","November","December"];return n.$$set=a=>{"version"in a&&t(0,i=a.version),"date"in a&&t(4,s=a.date),"text"in a&&t(1,r=a.text)},[i,r,o,l,s]}class V_ extends st{constructor(e){super(),it(this,e,j_,z_,Je,{version:0,date:4,text:1})}}function q_(n){let e,t,i,s,r;return s=new V_({props:{version:"1.0.0",date:"2/4/24",text:"v1 Release"}}),{c(){e=g("span"),e.textContent="Changelog",t=w(),i=g("ul"),ct(s.$$.fragment),_(e,"class","title"),_(i,"class","flex fd-col smaller-fs svelte-1hn7lke"),_(i,"id","contents")},m(o,l){T(o,e,l),T(o,t,l),T(o,i,l),tt(s,i,null),r=!0},p:re,i(o){r||(Z(s.$$.fragment,o),r=!0)},o(o){he(s.$$.fragment,o),r=!1},d(o){o&&(I(e),I(t),I(i)),nt(s)}}}class Y_ extends st{constructor(e){super(),it(this,e,null,q_,Je,{})}}function K_(n){let e,t,i;return{c(){e=g("span"),e.textContent="Credits",t=w(),i=g("div"),i.innerHTML=`<p class="flex fai-center svelte-19w41p3">This is a personal project. Contact me directly on
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
            Nini, for the moral support (and anime isaac seen here)</span> <span>— All other daily games which Frontierdle was based on</span></p>`,_(e,"class","title"),_(i,"class","smaller-fs"),_(i,"id","contents")},m(s,r){T(s,e,r),T(s,t,r),T(s,i,r)},p:re,i:re,o:re,d(s){s&&(I(e),I(t),I(i))}}}class Q_ extends st{constructor(e){super(),it(this,e,null,K_,Je,{})}}function Ao(n,e,t){const i=n.slice();return i[1]=e[t],i}function J_(n,e,t){const i=n.slice();return i[4]=e[t],i}function X_(n,e,t){const i=n.slice();return i[7]=e[t],i}function Po(n,e,t){const i=n.slice();return i[10]=e[t],i}function Z_(n,e,t){const i=n.slice();return i[13]=e[t],i}function ep(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[13].charAt(0).toUpperCase()+n[13].slice(1)} `},m(t,i){T(t,e,i)},p:re,d(t){t&&I(e)}}}function Oo(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[10]} `},m(t,i){T(t,e,i)},p:re,d(t){t&&I(e)}}}function tp(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[7]}`},m(t,i){T(t,e,i)},p:re,d(t){t&&I(e)}}}function np(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[4]}`},m(t,i){T(t,e,i)},p:re,d(t){t&&I(e)}}}function Mo(n){let e;return{c(){e=g("li"),e.textContent=`— ${n[1]} Update`},m(t,i){T(t,e,i)},p:re,d(t){t&&I(e)}}}function ip(n){let e,t,i,s,r,o,l,a,c,u,h,d,p,m,v,b,D,F,C,S,N,$,R,x,Q,K,W,B,te,Y,P,H,E,U,M,me,de=ye(p_),ie=[];for(let L=0;L<de.length;L+=1)ie[L]=ep(Z_(n,de,L));let q=ye(Object.values(Ri)),ne=[];for(let L=0;L<q.length;L+=1)ne[L]=Oo(Po(n,q,L));let le=ye(["Black","Blue","Brown","Gray","Green","None","Orange","Pink","Purple","Red","White","Yellow"]),O=[];for(let L=0;L<12;L+=1)O[L]=tp(X_(n,le,L));let J=ye(["Black","Blue","Green","Purple","Red","White","Yellow"]),j=[];for(let L=0;L<7;L+=1)j[L]=np(J_(n,J,L));let ee=ye(Object.values(Ni).slice(0,-1)),ke=[];for(let L=0;L<ee.length;L+=1)ke[L]=Mo(Ao(n,ee,L));return{c(){e=g("span"),e.textContent="Help",t=w(),i=g("div"),s=g("p"),s.textContent=`Frontierdle works similarly to many other daily games. You have a\r
        limited amount of chances to guess a random equipment piece from\r
        Fantastic Frontier, which changes every day.`,r=w(),o=g("div"),o.innerHTML=`<span class="title">Color Guide</span> <div class="flex svelte-40lcrp" id="colorGuide"><span class="flex fjc-center fai-center ff-bg ff-item svelte-40lcrp" id="correct">Correct</span> <span class="flex fjc-center fai-center ff-bg ff-item posrel svelte-40lcrp" id="partial">Partial
                <span class="bgInfo svelte-40lcrp">#</span></span> <span class="flex fjc-center fai-center ff-bg ff-item svelte-40lcrp" id="wrong">Wrong</span></div> <span class="smaller-fs svelte-40lcrp" id="mt">(# is the number of common elements found between the guessed item
            and the daily item)</span> <span class="smaller-fs">The arrow on an Avg. Cost tile indicates whether the daily item is
            more expensive (up) or cheaper (down) than the guessed item.</span>`,l=w(),a=g("span"),a.textContent="Categories",c=w(),u=g("p"),h=g("span"),d=g("b"),d.textContent="Slot:",p=w(),m=g("ul");for(let L=0;L<ie.length;L+=1)ie[L].c();v=w(),b=g("span"),D=g("b"),D.textContent="Stats:",F=w(),C=g("ul");for(let L=0;L<ne.length;L+=1)ne[L].c();S=w(),N=g("span"),N.innerHTML=`<b>Avg. Cost:</b> <span>The average of all possible prices the item can be purchased at.
                &quot;Unpurchasable&quot; if it cannot be purchased, equivalent to 0 for
                the game&#39;s purposes.</span>`,$=w(),R=g("span"),x=g("b"),x.textContent="Colors:",Q=w(),K=g("ul");for(let L=0;L<12;L+=1)O[L].c();W=w(),B=g("span"),te=g("b"),te.textContent="Outline:",Y=w(),P=g("ul");for(let L=0;L<7;L+=1)j[L].c();H=w(),E=g("span"),U=g("b"),U.textContent="Release:",M=w(),me=g("ul");for(let L=0;L<ke.length;L+=1)ke[L].c();_(e,"class","title"),_(o,"class","flex fd-col fai-center"),_(a,"class","title"),_(d,"class","svelte-40lcrp"),_(m,"class","svelte-40lcrp"),_(h,"class","flex fd-col list svelte-40lcrp"),_(D,"class","svelte-40lcrp"),_(C,"class","svelte-40lcrp"),_(b,"class","flex fd-col list svelte-40lcrp"),_(N,"class","flex fd-col limit-width svelte-40lcrp"),_(x,"class","svelte-40lcrp"),_(K,"class","svelte-40lcrp"),_(R,"class","flex fd-col list svelte-40lcrp"),_(te,"class","svelte-40lcrp"),_(P,"class","svelte-40lcrp"),_(B,"class","flex fd-col list svelte-40lcrp"),_(U,"class","svelte-40lcrp"),_(me,"class","svelte-40lcrp"),_(E,"class","flex fd-col list svelte-40lcrp"),_(u,"class","flex fjc-center smaller-fs svelte-40lcrp"),_(u,"id","categories"),_(i,"class","flex fd-col smaller-fs svelte-40lcrp"),_(i,"id","contents")},m(L,ge){T(L,e,ge),T(L,t,ge),T(L,i,ge),f(i,s),f(i,r),f(i,o),f(i,l),f(i,a),f(i,c),f(i,u),f(u,h),f(h,d),f(h,p),f(h,m);for(let A=0;A<ie.length;A+=1)ie[A]&&ie[A].m(m,null);f(u,v),f(u,b),f(b,D),f(b,F),f(b,C);for(let A=0;A<ne.length;A+=1)ne[A]&&ne[A].m(C,null);f(u,S),f(u,N),f(u,$),f(u,R),f(R,x),f(R,Q),f(R,K);for(let A=0;A<12;A+=1)O[A]&&O[A].m(K,null);f(u,W),f(u,B),f(B,te),f(B,Y),f(B,P);for(let A=0;A<7;A+=1)j[A]&&j[A].m(P,null);f(u,H),f(u,E),f(E,U),f(E,M),f(E,me);for(let A=0;A<ke.length;A+=1)ke[A]&&ke[A].m(me,null)},p(L,[ge]){if(ge&0){q=ye(Object.values(Ri));let A;for(A=0;A<q.length;A+=1){const ae=Po(L,q,A);ne[A]?ne[A].p(ae,ge):(ne[A]=Oo(ae),ne[A].c(),ne[A].m(C,null))}for(;A<ne.length;A+=1)ne[A].d(1);ne.length=q.length}if(ge&0){ee=ye(Object.values(Ni).slice(0,-1));let A;for(A=0;A<ee.length;A+=1){const ae=Ao(L,ee,A);ke[A]?ke[A].p(ae,ge):(ke[A]=Mo(ae),ke[A].c(),ke[A].m(me,null))}for(;A<ke.length;A+=1)ke[A].d(1);ke.length=ee.length}},i:re,o:re,d(L){L&&(I(e),I(t),I(i)),qe(ie,L),qe(ne,L),qe(O,L),qe(j,L),qe(ke,L)}}}function sp(n){return[]}class rp extends st{constructor(e){super(),it(this,e,sp,ip,Je,{})}}function op(n){let e,t,i;return{c(){e=g("span"),e.textContent="Frontierdle Policy",t=w(),i=g("div"),i.innerHTML=`<span class="subtitle">About</span> <p>This tool is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <span class="subtitle">Privacy Policy</span> <p>This policy explains what information Frontierdle (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
        collects, uses, and shares when you use our website.</p> <span class="subtitle">Information We Collect</span> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <span class="subtitle">How We Use This Information</span> <p>Your information may be utilized to test and improve the tool, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <span class="subtitle">Contact</span> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,_(e,"class","title"),_(i,"class","flex fd-col smaller-fs svelte-932r7h"),_(i,"id","contents")},m(s,r){T(s,e,r),T(s,t,r),T(s,i,r)},p:re,i:re,o:re,d(s){s&&(I(e),I(t),I(i))}}}class lp extends st{constructor(e){super(),it(this,e,null,op,Je,{})}}function Lo(n){let e,t,i;return{c(){e=g("iconify-icon"),xe(e,"icon","uil:exclamation"),xe(e,"id","unseen"),xe(e,"class","svelte-1aydprt")},m(s,r){T(s,e,r),i=!0},i(s){i||(s&&Ae(()=>{i&&(t||(t=we(e,bt,{duration:150},!0)),t.run(1))}),i=!0)},o(s){s&&(t||(t=we(e,bt,{duration:150},!1)),t.run(0)),i=!1},d(s){s&&I(e),s&&t&&t.end()}}}function ap(n){let e,t,i,s,r,o,l,a,c,u,h,d,p,m,v,b,D,F,C=!n[2]&&Lo();return{c(){e=g("button"),e.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',t=w(),i=g("button"),i.innerHTML=`<a href="https://ko-fi.com/xt8ss" target="_blank" class="svelte-1aydprt">Support me
        <img src="misc/kofi-badge.png" alt="" class="svelte-1aydprt"/></a>`,s=w(),r=g("button"),r.innerHTML='<iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Help</span>',o=w(),l=g("button"),a=g("iconify-icon"),c=w(),u=g("span"),u.textContent="Changelog",h=w(),C&&C.c(),d=w(),p=g("button"),p.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',m=w(),v=g("span"),b=z(n[0]),_(e,"class","info p-1 svelte-1aydprt"),_(e,"id","credits"),_(i,"class","info p-1 svelte-1aydprt"),_(i,"id","donate"),_(r,"class","info p-1 svelte-1aydprt"),_(r,"id","help"),xe(a,"icon","octicon:log-16"),_(u,"class","tooltip"),_(u,"id","right"),_(l,"class","info svelte-1aydprt"),_(l,"id","changelog"),_(p,"class","info p-1 svelte-1aydprt"),_(p,"id","policy"),_(v,"class","info svelte-1aydprt"),_(v,"id","version")},m(S,N){T(S,e,N),T(S,t,N),T(S,i,N),T(S,s,N),T(S,r,N),T(S,o,N),T(S,l,N),f(l,a),f(l,c),f(l,u),f(l,h),C&&C.m(l,null),T(S,d,N),T(S,p,N),T(S,m,N),T(S,v,N),f(v,b),D||(F=[De(e,"click",n[3]),De(r,"click",n[4]),De(l,"click",n[5]),De(p,"click",n[6])],D=!0)},p(S,[N]){S[2]?C&&(lt(),he(C,1,1,()=>{C=null}),at()):C?N&4&&Z(C,1):(C=Lo(),C.c(),Z(C,1),C.m(l,null)),N&1&&pe(b,S[0])},i(S){Z(C)},o(S){he(C)},d(S){S&&(I(e),I(t),I(i),I(s),I(r),I(o),I(l),I(d),I(p),I(m),I(v)),C&&C.d(),D=!1,Qe(F)}}}function cp(n,e,t){let i,s;Ne(n,Xe,u=>t(1,i=u)),Ne(n,jn,u=>t(2,s=u));let{version:r}=e;const o=u=>{tn(u),ue(Xe,i.component=Q_,i)},l=u=>{tn(u),ue(Xe,i.component=rp,i)},a=u=>{tn(u),ue(Xe,i.component=Y_,i),ue(jn,s=!0,s)},c=u=>{tn(u),ue(Xe,i.component=lp,i)};return n.$$set=u=>{"version"in u&&t(0,r=u.version)},[r,i,s,o,l,a,c]}class up extends st{constructor(e){super(),it(this,e,cp,ap,Je,{version:0})}}const{document:oi}=Ya;function Fo(n,e,t){const i=n.slice();return i[60]=e[t],i}function xo(n,e,t){const i=n.slice();return i[60]=e[t],i}function Wo(n){let e;return{c(){e=g("link"),_(e,"rel","preload"),_(e,"as","image"),_(e,"href",n[60])},m(t,i){T(t,e,i)},p:re,d(t){t&&I(e)}}}function Bo(n){let e;return{c(){e=g("style"),e.textContent=`*:not(.promptCont, .promptCont *) {
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
            }`},m(t,i){T(t,e,i)},d(t){t&&I(e)}}}function Ho(n){let e,t;return{c(){e=g("img"),_(e,"class","background svelte-247i5i"),Ge(e.src,t=n[60])||_(e,"src",t),_(e,"alt",""),mt(e,"active",n[25].indexOf(n[60])==n[20])},m(i,s){T(i,e,s)},p(i,s){s[0]&34603008&&mt(e,"active",i[25].indexOf(i[60])==i[20])},d(i){i&&I(e)}}}function Uo(n){let e,t,i=Math.floor(n[22][n[2]]*100)+"",s,r,o,l;return{c(){e=g("span"),t=z("Zoom: "),s=z(i),r=g("b"),r.textContent="%",_(e,"class","info svelte-247i5i"),_(e,"id","zoomLevel")},m(a,c){T(a,e,c),f(e,t),f(e,s),f(e,r),l=!0},p(a,c){(!l||c[0]&4)&&i!==(i=Math.floor(a[22][a[2]]*100)+"")&&pe(s,i)},i(a){l||(a&&Ae(()=>{l&&(o||(o=we(e,bt,{duration:150},!0)),o.run(1))}),l=!0)},o(a){a&&(o||(o=we(e,bt,{duration:150},!1)),o.run(0)),l=!1},d(a){a&&I(e),a&&o&&o.end()}}}function $o(n){let e,t,i,s,r,o,l,a,c=n[7].muted?"Muted":"Unmuted",u,h,d,p,m,v,b,D,F,C,S,N=Ai(n[3],n[4],n[5])+"",$,R,x,Q,K,W,B,te,Y,P,H,E,U,M,me,de,ie,q,ne,le,O,J;P=new D_({props:{size:"5",checked:n[7].hardMode,disabled:n[8].chosenItems.length!=0}}),P.$on("toggle",n[37]);let j=!n[8].gameWin&&!n[8].gameOver&&Go(n),ee=(n[8].gameWin||n[8].gameOver)&&zo(n);function ke(G){n[40](G)}let L={};n[13]!==void 0&&(L.dailyItemData=n[13]),M=new k_({props:L}),Ze.push(()=>Mi(M,"dailyItemData",ke));let ge=n[14]&&jo(n),A=n[21].component&&n[21].complete&&Vo(n),ae=n[21].component&&!n[21].complete&&qo(n);return{c(){e=g("main"),t=g("div"),i=g("div"),s=g("button"),r=g("iconify-icon"),l=w(),a=g("span"),u=z(c),h=w(),d=g("button"),p=g("img"),v=w(),b=g("span"),D=z(`Next item available in...
                    `),F=g("br"),C=w(),S=new Zo(!1),$=w(),R=g("div"),x=g("button"),x.innerHTML='<iconify-icon icon="uis:graph-bar" class="svelte-247i5i"></iconify-icon> <span class="tooltip" id="bottom">Your stats</span>',Q=w(),K=g("div"),W=g("button"),W.innerHTML=`<iconify-icon icon="eva:info-outline" id="info" class="svelte-247i5i"></iconify-icon> <span class="tooltip svelte-247i5i" id="bottom">No armor (more damage taken)
                    <br/>
                    No stat / avg. cost / color clues</span>`,B=w(),te=g("span"),te.textContent="Nightmare Mode",Y=w(),ct(P.$$.fragment),H=w(),j&&j.c(),E=w(),ee&&ee.c(),U=w(),ct(M.$$.fragment),de=w(),ge&&ge.c(),ie=w(),A&&A.c(),q=w(),ae&&ae.c(),ne=kt(),xe(r,"icon",o="f7:speaker-"+(n[7].muted?"slash":"2")+"-fill"),xe(r,"class","svelte-247i5i"),_(a,"class","tooltip"),_(a,"id","bottom"),_(s,"class","flex light-hover svelte-247i5i"),_(i,"class","iconToggle ff-bg posrel border-tp br-1 svelte-247i5i"),Ge(p.src,m="frontierdle.svg")||_(p,"src",m),_(p,"alt","Frontierdle"),_(p,"class","svelte-247i5i"),S.a=null,_(b,"class","tooltip svelte-247i5i"),_(b,"id","bottom"),_(d,"class","iconCont ff-bg posrel border-tp br-1 no-bg-change svelte-247i5i"),_(x,"class","flex posrel light-hover svelte-247i5i"),_(R,"class","iconToggle ff-bg border-tp br-1 svelte-247i5i"),_(t,"class","upperMenu flex fai-center svelte-247i5i"),_(W,"class","flex posrel no-bg-change"),_(K,"class","hardModeCont ff-bg flex fai-center border-tp br-1 svelte-247i5i"),_(e,"class","flex fd-col fai-center posrel svelte-247i5i")},m(G,ve){T(G,e,ve),f(e,t),f(t,i),f(i,s),f(s,r),f(s,l),f(s,a),f(a,u),f(t,h),f(t,d),f(d,p),f(d,v),f(d,b),f(b,D),f(b,F),f(b,C),S.m(N,b),f(t,$),f(t,R),f(R,x),f(e,Q),f(e,K),f(K,W),f(K,B),f(K,te),f(K,Y),tt(P,K,null),f(e,H),j&&j.m(e,null),f(e,E),ee&&ee.m(e,null),f(e,U),tt(M,e,null),f(e,de),ge&&ge.m(e,null),T(G,ie,ve),A&&A.m(G,ve),T(G,q,ve),ae&&ae.m(G,ve),T(G,ne,ve),le=!0,O||(J=[De(s,"click",n[35]),De(x,"click",n[36])],O=!0)},p(G,ve){(!le||ve[0]&128&&o!==(o="f7:speaker-"+(G[7].muted?"slash":"2")+"-fill"))&&xe(r,"icon",o),(!le||ve[0]&128)&&c!==(c=G[7].muted?"Muted":"Unmuted")&&pe(u,c),(!le||ve[0]&56)&&N!==(N=Ai(G[3],G[4],G[5])+"")&&S.p(N);const gt={};ve[0]&128&&(gt.checked=G[7].hardMode),ve[0]&256&&(gt.disabled=G[8].chosenItems.length!=0),P.$set(gt),!G[8].gameWin&&!G[8].gameOver?j?(j.p(G,ve),ve[0]&256&&Z(j,1)):(j=Go(G),j.c(),Z(j,1),j.m(e,E)):j&&(lt(),he(j,1,1,()=>{j=null}),at()),G[8].gameWin||G[8].gameOver?ee?(ee.p(G,ve),ve[0]&256&&Z(ee,1)):(ee=zo(G),ee.c(),Z(ee,1),ee.m(e,U)):ee&&(lt(),he(ee,1,1,()=>{ee=null}),at());const _e={};!me&&ve[0]&8192&&(me=!0,_e.dailyItemData=G[13],Oi(()=>me=!1)),M.$set(_e),G[14]?ge?ge.p(G,ve):(ge=jo(G),ge.c(),ge.m(e,null)):ge&&(ge.d(1),ge=null),G[21].component&&G[21].complete?A?(A.p(G,ve),ve[0]&2097152&&Z(A,1)):(A=Vo(G),A.c(),Z(A,1),A.m(q.parentNode,q)):A&&(lt(),he(A,1,1,()=>{A=null}),at()),G[21].component&&!G[21].complete?ae?(ae.p(G,ve),ve[0]&2097152&&Z(ae,1)):(ae=qo(G),ae.c(),Z(ae,1),ae.m(ne.parentNode,ne)):ae&&(lt(),he(ae,1,1,()=>{ae=null}),at())},i(G){le||(Z(P.$$.fragment,G),Z(j),Z(ee),Z(M.$$.fragment,G),Z(A),Z(ae),le=!0)},o(G){he(P.$$.fragment,G),he(j),he(ee),he(M.$$.fragment,G),he(A),he(ae),le=!1},d(G){G&&(I(e),I(ie),I(q),I(ne)),nt(P),j&&j.d(),ee&&ee.d(),nt(M),ge&&ge.d(),A&&A.d(G),ae&&ae.d(G),O=!1,Qe(J)}}}function Go(n){let e,t,i;function s(o){n[38](o)}let r={};return n[19]!==void 0&&(r.gameNumber=n[19]),e=new F_({props:r}),Ze.push(()=>Mi(e,"gameNumber",s)),{c(){ct(e.$$.fragment)},m(o,l){tt(e,o,l),i=!0},p(o,l){const a={};!t&&l[0]&524288&&(t=!0,a.gameNumber=o[19],Oi(()=>t=!1)),e.$set(a)},i(o){i||(Z(e.$$.fragment,o),i=!0)},o(o){he(e.$$.fragment,o),i=!1},d(o){nt(e,o)}}}function zo(n){let e,t,i=n[8].gameWin?"Fantastic!":"Farewell...",s,r,o,l,a,c=n[8].gameWin?"won":"lost",u,h,d,p,m,v,b,D,F,C,S,N,$,R,x=n[13].name+"",Q,K,W,B,te,Y,P,H=Ai(n[3],n[4],n[5])+"",E,U,M,me,de,ie,q;function ne(O){n[39](O)}let le={};return n[19]!==void 0&&(le.gameNumber=n[19]),M=new B_({props:le}),Ze.push(()=>Mi(M,"gameNumber",ne)),ie=new $a({}),{c(){e=g("div"),t=g("span"),s=z(i),r=w(),o=g("img"),a=z(`
                    You `),u=z(c),h=z("!"),d=w(),p=g("span"),p.textContent="Today's item was...",m=w(),v=g("div"),b=g("a"),D=g("img"),C=w(),S=g("iconify-icon"),$=w(),R=g("span"),Q=z(x),K=w(),W=g("span"),B=z(`Next item available in...
                    `),te=g("br"),Y=w(),P=g("span"),U=w(),ct(M.$$.fragment),de=w(),ct(ie.$$.fragment),Ge(o.src,l=n[8].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png")||_(o,"src",l),_(o,"id","gameFinishIcon"),_(o,"alt",""),_(o,"class","svelte-247i5i"),_(t,"class","flex fai-center svelte-247i5i"),_(t,"id","gameFinishMessage"),_(p,"class","smaller-fs"),Ge(D.src,F=Lt+n[13].image)||_(D,"src",F),_(D,"alt",""),_(D,"class","svelte-247i5i"),xe(S,"icon","tabler:link"),xe(S,"class","svelte-247i5i"),_(b,"class","flex fjc-center fai-center svelte-247i5i"),_(b,"href",N=pn+n[13].link),_(b,"target","_blank"),_(v,"class","itemImg ff-item flex svelte-247i5i"),_(v,"id","dailyItemImg"),_(R,"class","ff-item itemName svelte-247i5i"),_(R,"id","dailyItemName"),_(P,"class","ff-item svelte-247i5i"),_(P,"id","nextItemTime"),_(W,"class","flex fd-col svelte-247i5i"),_(W,"id","nextItemCont"),_(e,"class","gameFinishCont ff-bg flex fd-col fai-center border-tp br-1 svelte-247i5i")},m(O,J){T(O,e,J),f(e,t),f(t,s),f(t,r),f(t,o),f(t,a),f(t,u),f(t,h),f(e,d),f(e,p),f(e,m),f(e,v),f(v,b),f(b,D),f(b,C),f(b,S),f(e,$),f(e,R),f(R,Q),f(e,K),f(e,W),f(W,B),f(W,te),f(W,Y),f(W,P),P.innerHTML=H,T(O,U,J),tt(M,O,J),T(O,de,J),tt(ie,O,J),q=!0},p(O,J){(!q||J[0]&256)&&i!==(i=O[8].gameWin?"Fantastic!":"Farewell...")&&pe(s,i),(!q||J[0]&256&&!Ge(o.src,l=O[8].gameWin?"ff-images/rb-fantastic.png":"ff-images/rb-farewell.png"))&&_(o,"src",l),(!q||J[0]&256)&&c!==(c=O[8].gameWin?"won":"lost")&&pe(u,c),(!q||J[0]&8192&&!Ge(D.src,F=Lt+O[13].image))&&_(D,"src",F),(!q||J[0]&8192&&N!==(N=pn+O[13].link))&&_(b,"href",N),(!q||J[0]&8192)&&x!==(x=O[13].name+"")&&pe(Q,x),(!q||J[0]&56)&&H!==(H=Ai(O[3],O[4],O[5])+"")&&(P.innerHTML=H);const j={};!me&&J[0]&524288&&(me=!0,j.gameNumber=O[19],Oi(()=>me=!1)),M.$set(j)},i(O){q||(O&&Ae(()=>{q&&(E||(E=we(e,bt,{duration:150},!0)),E.run(1))}),Z(M.$$.fragment,O),Z(ie.$$.fragment,O),q=!0)},o(O){O&&(E||(E=we(e,bt,{duration:150},!1)),E.run(0)),he(M.$$.fragment,O),he(ie.$$.fragment,O),q=!1},d(O){O&&(I(e),I(U),I(de)),O&&E&&E.end(),nt(M,O),nt(ie,O)}}}function jo(n){let e,t,i,s,r,o,l,a,c,u,h,d=n[14].name+"",p;return{c(){e=g("div"),t=z(`Yesterday's item was...
                `),i=g("div"),s=g("a"),r=g("img"),l=w(),a=g("iconify-icon"),u=w(),h=g("span"),p=z(d),Ge(r.src,o=Lt+n[14].image)||_(r,"src",o),_(r,"alt",""),_(r,"class","svelte-247i5i"),xe(a,"icon","tabler:link"),xe(a,"class","svelte-247i5i"),_(s,"class","flex fjc-center fai-center svelte-247i5i"),_(s,"href",c=pn+n[14].link),_(s,"target","_blank"),_(i,"class","itemImg ff-item flex svelte-247i5i"),_(i,"id","previousItemImg"),_(h,"class","ff-item itemName svelte-247i5i"),_(h,"id","previousItemName"),_(e,"class","previousItemCont ff-bg flex fd-col fai-center border-tp br-1 svelte-247i5i")},m(m,v){T(m,e,v),f(e,t),f(e,i),f(i,s),f(s,r),f(s,l),f(s,a),f(e,u),f(e,h),f(h,p)},p(m,v){v[0]&16384&&!Ge(r.src,o=Lt+m[14].image)&&_(r,"src",o),v[0]&16384&&c!==(c=pn+m[14].link)&&_(s,"href",c),v[0]&16384&&d!==(d=m[14].name+"")&&pe(p,d)},d(m){m&&I(e)}}}function Vo(n){let e,t,i,s,r;var o=n[21].component;function l(a,c){return{props:{prompted:!0}}}return o&&(t=ai(o,l())),{c(){e=g("div"),t&&ct(t.$$.fragment),_(e,"class","promptCont")},m(a,c){T(a,e,c),t&&tt(t,e,null),n[41](e),i=!0,s||(r=De(e,"click",n[42]),s=!0)},p(a,c){if(c[0]&2097152&&o!==(o=a[21].component)){if(t){lt();const u=t;he(u.$$.fragment,1,0,()=>{nt(u,1)}),at()}o?(t=ai(o,l()),ct(t.$$.fragment),Z(t.$$.fragment,1),tt(t,e,null)):t=null}},i(a){i||(t&&Z(t.$$.fragment,a),i=!0)},o(a){t&&he(t.$$.fragment,a),i=!1},d(a){a&&I(e),t&&nt(t),n[41](null),s=!1,r()}}}function qo(n){let e,t,i,s,r,o,l;var a=n[21].component;function c(u,h){return{props:{prompted:!0}}}return a&&(i=ai(a,c())),{c(){e=g("div"),t=g("div"),i&&ct(i.$$.fragment),_(t,"class","flex fd-col border-tp br-1"),_(e,"class","promptCont")},m(u,h){T(u,e,h),f(e,t),i&&tt(i,t,null),n[43](e),r=!0,o||(l=De(e,"click",n[44]),o=!0)},p(u,h){if(h[0]&2097152&&a!==(a=u[21].component)){if(i){lt();const d=i;he(d.$$.fragment,1,0,()=>{nt(d,1)}),at()}a?(i=ai(a,c()),ct(i.$$.fragment),Z(i.$$.fragment,1),tt(i,t,null)):i=null}},i(u){r||(i&&Z(i.$$.fragment,u),u&&Ae(()=>{r&&(s||(s=we(t,Me,{duration:200},!0)),s.run(1))}),r=!0)},o(u){i&&he(i.$$.fragment,u),u&&(s||(s=we(t,Me,{duration:200},!1)),s.run(0)),r=!1},d(u){u&&I(e),i&&nt(i),u&&s&&s.end(),n[43](null),o=!1,l()}}}function hp(n){let e,t,i,s,r,o,l,a,c,u,h,d,p,m,v,b,D,F,C,S,N,$,R,x,Q;Ae(n[31]);let K=ye(n[25]),W=[];for(let E=0;E<K.length;E+=1)W[E]=Wo(xo(n,K,E));let B=n[21].component&&Bo(),te=ye(n[25]),Y=[];for(let E=0;E<te.length;E+=1)Y[E]=Ho(Fo(n,te,E));let P=n[12]&&Uo(n);S=new up({props:{version:Ns}});let H=n[10]&&n[9]&&n[11]&&$o(n);return{c(){for(let E=0;E<W.length;E+=1)W[E].c();e=kt(),B&&B.c(),t=kt(),i=w(),s=g("div"),r=g("audio"),a=w(),c=g("audio"),d=w(),p=g("audio"),b=w(),D=g("div");for(let E=0;E<Y.length;E+=1)Y[E].c();F=w(),P&&P.c(),C=w(),ct(S.$$.fragment),N=w(),H&&H.c(),$=kt(),Ge(r.src,o="audio/lucky.mp3")||_(r,"src",o),r.muted=l=n[7].muted,Ge(c.src,u="audio/farewell.mp3")||_(c,"src",u),c.muted=h=n[7].muted,Ge(p.src,m="audio/heDidItAgain.mp3")||_(p,"src",m),p.muted=v=n[7].muted,_(D,"class","backgrounds")},m(E,U){for(let M=0;M<W.length;M+=1)W[M]&&W[M].m(oi.head,null);f(oi.head,e),B&&B.m(oi.head,null),f(oi.head,t),T(E,i,U),T(E,s,U),f(s,r),n[32](r),f(s,a),f(s,c),n[33](c),f(s,d),f(s,p),n[34](p),T(E,b,U),T(E,D,U);for(let M=0;M<Y.length;M+=1)Y[M]&&Y[M].m(D,null);T(E,F,U),P&&P.m(E,U),T(E,C,U),tt(S,E,U),T(E,N,U),H&&H.m(E,U),T(E,$,U),R=!0,x||(Q=[De(window,"storage",n[28]),De(window,"wheel",n[29],{passive:!1}),De(window,"keydown",n[30]),De(window,"resize",n[31])],x=!0)},p(E,U){if(U[0]&33554432){K=ye(E[25]);let M;for(M=0;M<K.length;M+=1){const me=xo(E,K,M);W[M]?W[M].p(me,U):(W[M]=Wo(me),W[M].c(),W[M].m(e.parentNode,e))}for(;M<W.length;M+=1)W[M].d(1);W.length=K.length}if(E[21].component?B||(B=Bo(),B.c(),B.m(t.parentNode,t)):B&&(B.d(1),B=null),(!R||U[0]&128&&l!==(l=E[7].muted))&&(r.muted=l),(!R||U[0]&128&&h!==(h=E[7].muted))&&(c.muted=h),(!R||U[0]&128&&v!==(v=E[7].muted))&&(p.muted=v),U[0]&34603008){te=ye(E[25]);let M;for(M=0;M<te.length;M+=1){const me=Fo(E,te,M);Y[M]?Y[M].p(me,U):(Y[M]=Ho(me),Y[M].c(),Y[M].m(D,null))}for(;M<Y.length;M+=1)Y[M].d(1);Y.length=te.length}E[12]?P?(P.p(E,U),U[0]&4096&&Z(P,1)):(P=Uo(E),P.c(),Z(P,1),P.m(C.parentNode,C)):P&&(lt(),he(P,1,1,()=>{P=null}),at()),E[10]&&E[9]&&E[11]?H?(H.p(E,U),U[0]&3584&&Z(H,1)):(H=$o(E),H.c(),Z(H,1),H.m($.parentNode,$)):H&&(lt(),he(H,1,1,()=>{H=null}),at())},i(E){R||(Z(P),Z(S.$$.fragment,E),Z(H),R=!0)},o(E){he(P),he(S.$$.fragment,E),he(H),R=!1},d(E){E&&(I(i),I(s),I(b),I(D),I(F),I(C),I(N),I($)),qe(W,E),I(e),B&&B.d(E),I(t),n[32](null),n[33](null),n[34](null),qe(Y,E),P&&P.d(E),nt(S,E),H&&H.d(E),x=!1,Qe(Q)}}}let Ns="v1.0.0";function Ai(n,e,t){return`${(n<10?"0":"")+n}<b> : </b>${(e<10?"0":"")+e}<b> : </b>${(t<10?"0":"")+t}`}function fp(n,e,t){let i,s,r,o,l,a,c,u;Ne(n,ut,y=>t(6,i=y)),Ne(n,Tt,y=>t(7,s=y)),Ne(n,Di,y=>t(27,r=y)),Ne(n,ot,y=>t(8,o=y)),Ne(n,lo,y=>t(9,l=y)),Ne(n,ks,y=>t(10,a=y)),Ne(n,jn,y=>t(50,c=y)),Ne(n,Xe,y=>t(21,u=y));let h,d,p=!1,m=7,v=[.2,.3,.45,.6,.75,.85,.95,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],b=!1,D,F,C,S,N=["version","builds","changelogSeen"],$,R,x,Q;rc(()=>t(11,p=!0));function K(){D=setTimeout(()=>{t(12,b=!1)},750)}function W(){clearTimeout(D),t(12,b=!0),K()}let B=19814,te,Y,P=58,H=58,E=58,U;function M(){clearInterval(U),setTimeout(()=>{te=Date.now()/1e3/60/60/24,t(19,Y=Math.floor(te)-B),Jd(Xd(Qd(m_))).then(y=>{ue(lo,l=y.val().rngItemList[Y],l),t(26,C=y.val().rngItemList[Y-1])}),U=setInterval(()=>{let y=Date.now(),je=(B+Y+1)*24*60*60*1e3-y;t(3,P=Math.floor(je/1e3/60/60)),t(4,H=Math.floor(je%(1e3*60*60)/(1e3*60))),t(5,E=Math.floor(je%(1e3*60)/1e3))},1e3)},1e3)}M(),fetch("https://raw.githubusercontent.com/XT8SS/frontierdle/gh-pages/itemData.json").then(async y=>{if(y.status!=200){console.error(`Failed to fetch item data!
Status: ${y.status}`);return}let Se=await y.json();ue(ks,a=Se.sort((je,We)=>je.name.toLowerCase().localeCompare(We.name.toLowerCase())),a)});let de=[],ie=[],q,ne,le=9;for(let y=0;y<le;y++)de.push(`backgrounds/BG${y}.jpg`);function O(y){ne=Math.floor(Math.random()*y.length)}O(de);function J(){t(20,q=ne),ie.push(ne)}J(),function y(){setTimeout(()=>{if(O(de),!ie.length)J();else if(ie.length>3&&(ie=ie.slice(1)),!ie.includes(ne))J();else{let Se=[...Array(le).keys()].filter(je=>!ie.includes(je));O(Se),J()}document.visibilityState=="visible"&&y()},45e3)}(),localStorage.getItem("fd-version")!=Ns&&(ue(jn,c=!1,c),localStorage.setItem("fd-version",Ns));function j(){ue(ot,o.gameWin=!0,o),ue(ut,i.gamesPlayed++,i),ue(ut,i.gamesWon++,i),ue(ut,i.streak++,i),ue(ut,i.winInfo[o.chosenItems.length]++,i),(i.streak>=3?Q:R).play()}function ee(){ue(ot,o.gameOver=!0,o),ue(ut,i.gamesPlayed++,i),ue(ut,i.streak=0,i),x.play()}const ke=y=>{N.includes(y.key)?localStorage.setItem(y.key,y.oldValue):y.key=="fd-currentGameData"?y.url.includes("ls=true")?ue(ot,o=JSON.parse(y.newValue),o):localStorage.setItem("fd-currentGameData",JSON.stringify(o)):y.key=="fd-settings"?y.url.includes("ls=true")?ue(Tt,s=JSON.parse(y.newValue),s):localStorage.setItem("fd-settings",JSON.stringify(s)):y.key=="fd-playerStats"&&(y.url.includes("ls=true")?ue(ut,i=JSON.parse(y.newValue),i):localStorage.setItem("fd-playerStats",JSON.stringify(i)))},L=y=>{let Se=y.wheelDeltaY;if(y.ctrlKey){if(y.preventDefault(),v[m]==.2&&Se<0||v[m]==5&&Se>0)return;Se>0?t(2,m++,m):t(2,m--,m),W()}},ge=y=>{let Se=["Enter"," ","Escape"];y.ctrlKey&&(y.key=="-"||y.key=="+"||y.code=="Equal"||y.key=="0")&&(y.preventDefault(),(y.key=="+"||y.code=="Equal")&&v[m]!=5?t(2,m++,m):y.key=="-"&&v[m]!=.2?t(2,m--,m):y.key=="0"&&v[m]!=1&&t(2,m=7),W()),u.component&&$&&!y.ctrlKey&&!y.altKey&&(!y.shiftKey&&Se.includes(y.key)||y.shiftKey&&y.key=="Tab")&&ue(Xe,u.component=null,u)};function A(){t(0,h=window.outerHeight),t(1,d=window.outerWidth)}function ae(y){Ze[y?"unshift":"push"](()=>{R=y,t(16,R)})}function G(y){Ze[y?"unshift":"push"](()=>{x=y,t(17,x)})}function ve(y){Ze[y?"unshift":"push"](()=>{Q=y,t(18,Q)})}const gt=y=>{tn(y),ue(Tt,s.muted=!s.muted,s)},_e=y=>{tn(y),o.gameWin||o.gameOver?(location.hash="playerStats",Ts()):(ue(Xe,u.complete=!0,u),ue(Xe,u.component=$a,u))},bn=y=>{if(o.chosenItems.length){y.detail.checked=!y.detail.checked;return}ue(Tt,s.hardMode=y.detail.checked,s)};function ei(y){Y=y,t(19,Y)}function ti(y){Y=y,t(19,Y)}function qt(y){F=y,t(13,F),t(10,a),t(9,l),t(26,C)}function rt(y){Ze[y?"unshift":"push"](()=>{$=y,t(15,$)})}const Ue=y=>{$.children[0].contains(y.target)||(ue(Xe,u.component=null,u),ue(Xe,u.complete=!1,u))};function ni(y){Ze[y?"unshift":"push"](()=>{$=y,t(15,$)})}const Yt=y=>{$.children[0].contains(y.target)||(ue(Xe,u.component=null,u),ue(Xe,u.complete=!1,u))};return n.$$.update=()=>{if(n.$$.dirty[0]&7&&(h||d)){let y=d>h;document.documentElement.style.fontSize=`${(y?.75:d/h*.8)*v[m]}vh`}n.$$.dirty[0]&67110400&&a.length&&l&&(t(13,F=a.find(y=>y.name==l)),t(14,S=a.find(y=>y.name==C))),n.$$.dirty[0]&56&&P==0&&H==0&&E==0&&(ue(ot,o=Ua,o),M(),setTimeout(()=>location.reload(),1500)),n.$$.dirty[0]&128&&ue(Di,r=s.hardMode?6:7,r),n.$$.dirty[0]&134218496&&o.chosenItems.length&&!o.gameWin&&!o.gameOver&&(o.chosenItems[o.chosenItems.length-1].name==l?j():o.chosenItems.length==r&&ee()),n.$$.dirty[0]&64&&i.streak>i.maxStreak&&ue(ut,i.maxStreak=i.streak,i)},[h,d,m,P,H,E,i,s,o,l,a,p,b,F,S,$,R,x,Q,Y,q,u,v,N,W,de,C,r,ke,L,ge,A,ae,G,ve,gt,_e,bn,ei,ti,qt,rt,Ue,ni,Yt]}class dp extends st{constructor(e){super(),it(this,e,fp,hp,Je,{},null,[-1,-1,-1])}}new dp({target:document.body});
