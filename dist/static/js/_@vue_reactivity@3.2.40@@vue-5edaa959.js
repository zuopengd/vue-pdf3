import{d as wt,i as w,a as O,b as j,c as z,t as gt,e as Et,N as Rt,f as mt,h as V,g as y,j as st,m as bt}from"./_@vue_shared@3.2.40@@vue-b138ca7b.js";let h;class re{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&h&&(this.parent=h,this.index=(h.scopes||(h.scopes=[])).push(this)-1)}run(e){if(this.active){const s=h;try{return h=this,e()}finally{h=s}}}on(){h=this}off(){h=this.parent}stop(e){if(this.active){let s,r;for(s=0,r=this.effects.length;s<r;s++)this.effects[s].stop();for(s=0,r=this.cleanups.length;s<r;s++)this.cleanups[s]();if(this.scopes)for(s=0,r=this.scopes.length;s<r;s++)this.scopes[s].stop(!0);if(this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function vt(t,e=h){e&&e.active&&e.effects.push(t)}const D=t=>{const e=new Set(t);return e.w=0,e.n=0,e},nt=t=>(t.w&E)>0,rt=t=>(t.n&E)>0,St=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=E},It=t=>{const{deps:e}=t;if(e.length){let s=0;for(let r=0;r<e.length;r++){const n=e[r];nt(n)&&!rt(n)?n.delete(t):e[s++]=n,n.w&=~E,n.n&=~E}e.length=s}},C=new WeakMap;let v=0,E=1;const G=30;let l;const m=Symbol(""),N=Symbol("");class Mt{constructor(e,s=null,r){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,vt(this,r)}run(){if(!this.active)return this.fn();let e=l,s=g;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=l,l=this,g=!0,E=1<<++v,v<=G?St(this):L(this),this.fn()}finally{v<=G&&It(this),E=1<<--v,l=this.parent,g=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){l===this?this.deferStop=!0:this.active&&(L(this),this.onStop&&this.onStop(),this.active=!1)}}function L(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}let g=!0;const it=[];function Tt(){it.push(g),g=!1}function xt(){const t=it.pop();g=t===void 0?!0:t}function u(t,e,s){if(g&&l){let r=C.get(t);r||C.set(t,r=new Map);let n=r.get(s);n||r.set(s,n=D()),ct(n)}}function ct(t,e){let s=!1;v<=G?rt(t)||(t.n|=E,s=!nt(t)):s=!t.has(l),s&&(t.add(l),l.deps.push(t))}function R(t,e,s,r,n,i){const c=C.get(t);if(!c)return;let a=[];if(e==="clear")a=[...c.values()];else if(s==="length"&&w(t))c.forEach((f,d)=>{(d==="length"||d>=r)&&a.push(f)});else switch(s!==void 0&&a.push(c.get(s)),e){case"add":w(t)?j(s)&&a.push(c.get("length")):(a.push(c.get(m)),O(t)&&a.push(c.get(N)));break;case"delete":w(t)||(a.push(c.get(m)),O(t)&&a.push(c.get(N)));break;case"set":O(t)&&a.push(c.get(m));break}if(a.length===1)a[0]&&W(a[0]);else{const f=[];for(const d of a)d&&f.push(...d);W(D(f))}}function W(t,e){const s=w(t)?t:[...t];for(const r of s)r.computed&&Q(r);for(const r of s)r.computed||Q(r)}function Q(t,e){(t!==l||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Kt=bt("__proto__,__v_isRef,__isVue"),at=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(y)),Pt=Y(),Ot=Y(!1,!0),zt=Y(!0),X=Vt();function Vt(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...s){const r=o(this);for(let i=0,c=this.length;i<c;i++)u(r,"get",i+"");const n=r[e](...s);return n===-1||n===!1?r[e](...s.map(o)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...s){Tt();const r=o(this)[e].apply(this,s);return xt(),r}}),t}function Y(t=!1,e=!1){return function(r,n,i){if(n==="__v_isReactive")return!t;if(n==="__v_isReadonly")return t;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&i===(t?e?Jt:ht:e?ut:lt).get(r))return r;const c=w(r);if(!t&&c&&V(X,n))return Reflect.get(X,n,i);const a=Reflect.get(r,n,i);return(y(n)?at.has(n):Kt(n))||(t||u(r,"get",n),e)?a:_(a)?c&&j(n)?a:a.value:z(a)?t?pt(a):dt(a):a}}const At=ot(),Ht=ot(!0);function ot(t=!1){return function(s,r,n,i){let c=s[r];if(S(c)&&_(c)&&!_(n))return!1;if(!t&&(!Xt(n)&&!S(n)&&(c=o(c),n=o(n)),!w(s)&&_(c)&&!_(n)))return c.value=n,!0;const a=w(s)&&j(r)?Number(r)<s.length:V(s,r),f=Reflect.set(s,r,n,i);return s===o(i)&&(a?st(n,c)&&R(s,"set",r,n):R(s,"add",r,n)),f}}function Ct(t,e){const s=V(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&s&&R(t,"delete",e,void 0),r}function Gt(t,e){const s=Reflect.has(t,e);return(!y(e)||!at.has(e))&&u(t,"has",e),s}function Nt(t){return u(t,"iterate",w(t)?"length":m),Reflect.ownKeys(t)}const ft={get:Pt,set:At,deleteProperty:Ct,has:Gt,ownKeys:Nt},Wt={get:zt,set(t,e){return!0},deleteProperty(t,e){return!0}},jt=mt({},ft,{get:Ot,set:Ht}),$=t=>t,A=t=>Reflect.getPrototypeOf(t);function M(t,e,s=!1,r=!1){t=t.__v_raw;const n=o(t),i=o(e);s||(e!==i&&u(n,"get",e),u(n,"get",i));const{has:c}=A(n),a=r?$:s?J:q;if(c.call(n,e))return a(t.get(e));if(c.call(n,i))return a(t.get(i));t!==n&&t.get(e)}function T(t,e=!1){const s=this.__v_raw,r=o(s),n=o(t);return e||(t!==n&&u(r,"has",t),u(r,"has",n)),t===n?s.has(t):s.has(t)||s.has(n)}function x(t,e=!1){return t=t.__v_raw,!e&&u(o(t),"iterate",m),Reflect.get(t,"size",t)}function Z(t){t=o(t);const e=o(this);return A(e).has.call(e,t)||(e.add(t),R(e,"add",t,t)),this}function k(t,e){e=o(e);const s=o(this),{has:r,get:n}=A(s);let i=r.call(s,t);i||(t=o(t),i=r.call(s,t));const c=n.call(s,t);return s.set(t,e),i?st(e,c)&&R(s,"set",t,e):R(s,"add",t,e),this}function tt(t){const e=o(this),{has:s,get:r}=A(e);let n=s.call(e,t);n||(t=o(t),n=s.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return n&&R(e,"delete",t,void 0),i}function et(){const t=o(this),e=t.size!==0,s=t.clear();return e&&R(t,"clear",void 0,void 0),s}function K(t,e){return function(r,n){const i=this,c=i.__v_raw,a=o(c),f=e?$:t?J:q;return!t&&u(a,"iterate",m),c.forEach((d,b)=>r.call(n,f(d),f(b),i))}}function P(t,e,s){return function(...r){const n=this.__v_raw,i=o(n),c=O(i),a=t==="entries"||t===Symbol.iterator&&c,f=t==="keys"&&c,d=n[t](...r),b=s?$:e?J:q;return!e&&u(i,"iterate",f?N:m),{next(){const{value:I,done:H}=d.next();return H?{value:I,done:H}:{value:a?[b(I[0]),b(I[1])]:b(I),done:H}},[Symbol.iterator](){return this}}}}function p(t){return function(...e){return t==="delete"?!1:this}}function yt(){const t={get(i){return M(this,i)},get size(){return x(this)},has:T,add:Z,set:k,delete:tt,clear:et,forEach:K(!1,!1)},e={get(i){return M(this,i,!1,!0)},get size(){return x(this)},has:T,add:Z,set:k,delete:tt,clear:et,forEach:K(!1,!0)},s={get(i){return M(this,i,!0)},get size(){return x(this,!0)},has(i){return T.call(this,i,!0)},add:p("add"),set:p("set"),delete:p("delete"),clear:p("clear"),forEach:K(!0,!1)},r={get(i){return M(this,i,!0,!0)},get size(){return x(this,!0)},has(i){return T.call(this,i,!0)},add:p("add"),set:p("set"),delete:p("delete"),clear:p("clear"),forEach:K(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=P(i,!1,!1),s[i]=P(i,!0,!1),e[i]=P(i,!1,!0),r[i]=P(i,!0,!0)}),[t,s,e,r]}const[Dt,Yt,$t,Bt]=yt();function B(t,e){const s=e?t?Bt:$t:t?Yt:Dt;return(r,n,i)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?r:Reflect.get(V(s,n)&&n in r?s:r,n,i)}const Ft={get:B(!1,!1)},Ut={get:B(!1,!0)},qt={get:B(!0,!1)},lt=new WeakMap,ut=new WeakMap,ht=new WeakMap,Jt=new WeakMap;function Lt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qt(t){return t.__v_skip||!Object.isExtensible(t)?0:Lt(gt(t))}function dt(t){return S(t)?t:F(t,!1,ft,Ft,lt)}function ie(t){return F(t,!1,jt,Ut,ut)}function pt(t){return F(t,!0,Wt,qt,ht)}function F(t,e,s,r,n){if(!z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=n.get(t);if(i)return i;const c=Qt(t);if(c===0)return t;const a=new Proxy(t,c===2?r:s);return n.set(t,a),a}function U(t){return S(t)?U(t.__v_raw):!!(t&&t.__v_isReactive)}function S(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function ce(t){return U(t)||S(t)}function o(t){const e=t&&t.__v_raw;return e?o(e):t}function ae(t){return wt(t,"__v_skip",!0),t}const q=t=>z(t)?dt(t):t,J=t=>z(t)?pt(t):t;function Zt(t){g&&l&&(t=o(t),ct(t.dep||(t.dep=D())))}function kt(t,e){t=o(t),t.dep&&W(t.dep)}function _(t){return!!(t&&t.__v_isRef===!0)}function te(t){return _(t)?t.value:t}const ee={get:(t,e,s)=>te(Reflect.get(t,e,s)),set:(t,e,s,r)=>{const n=t[e];return _(n)&&!_(s)?(n.value=s,!0):Reflect.set(t,e,s,r)}};function oe(t){return U(t)?t:new Proxy(t,ee)}var _t;class se{constructor(e,s,r,n){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[_t]=!1,this._dirty=!0,this.effect=new Mt(e,()=>{this._dirty||(this._dirty=!0,kt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=r}get value(){const e=o(this);return Zt(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}_t="__v_isReadonly";function fe(t,e,s=!1){let r,n;const i=Et(t);return i?(r=t,n=Rt):(r=t.get,n=t.set),new se(r,n,i||!n,s)}export{re as E,Mt as R,_ as a,Tt as b,u as c,dt as d,R as e,fe as f,Xt as g,U as h,ce as i,ae as m,oe as p,xt as r,ie as s,o as t};
