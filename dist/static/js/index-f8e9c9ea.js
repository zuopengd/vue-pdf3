import{c as g}from"./_@vue_runtime-dom@3.2.40@@vue-0a7ffd7d.js";import{b as w,o as v,r as _,h as P}from"./_@vue_runtime-core@3.2.40@@vue-6145b0ae.js";import{W as y}from"./_pdfjs-dist@2.16.105@pdfjs-dist-1ff10491.js";import"./_@vue_shared@3.2.40@@vue-b138ca7b.js";import"./_@vue_reactivity@3.2.40@@vue-5edaa959.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const k={__name:"App",setup(o){const r="./\u6B22\u8FCE\u4F7F\u7528WPS Office for Mac\u540C\u6B65\u6587\u4EF6\u5939.pdf";return(s,i)=>{const e=_("pdf-preview");return v(),w(e,{url:r})}}},L="modulepreload",C=function(o,r){return new URL(o,r).href},p={},E=function(r,s,i){return!s||s.length===0?r():Promise.all(s.map(e=>{if(e=C(e,i),e in p)return;p[e]=!0;const t=e.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${c}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":L,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t)return new Promise((a,l)=>{n.addEventListener("load",a),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())};const O="vue-pdf3-"+Math.ceil(Math.random()*1e10),f={name:"PdfPreview",props:{url:{type:String,required:!0}},setup(o){return()=>P("div",{id:O,class:"vue-pdf3",ref:"pdf"})},mounted(){this.init()},methods:{async init(){const o=await E(()=>import("./_pdfjs-dist@2.16.105@pdfjs-dist-1ff10491.js").then(i=>i.p),[],import.meta.url),r={url:this.url};typeof window<"u"&&"Worker"in window&&(o.GlobalWorkerOptions.workerPort=new y);let s=o.getDocument(r);s.__PDFDocumentLoadingTask=!0,s.promise.then(i=>{let e=i.numPages;for(let t=1;t<=e;t++)i.getPage(t).then(c=>{let n=3,a=c.getViewport({scale:1}),l=window.document.createElement("div"),u=window.document.createElement("div");u.className="loading",l.appendChild(u);let d=l.appendChild(window.document.createElement("canvas"));l.className="page",this.$refs.pdf.appendChild(l),d.width=a.width*n,d.height=a.height*n;let h={canvasContext:d.getContext("2d"),viewport:a,transform:[n,0,0,n,0,0]};c.render(h).promise.then(()=>{l.className="page complete"}).catch(()=>{})})})}}},S=function(o){o.component(f.name,f)},m=g(k);m.use(S);m.mount("#app");