var T=Object.defineProperty;var F=(t,e,n)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var E=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function y(){}function V(t){return t()}function j(){return Object.create(null)}function k(t){t.forEach(V)}function I(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function R(t){return Object.keys(t).length===0}function l(t,e){t.appendChild(e)}function q(t,e,n){t.insertBefore(e,n||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function b(){return G(" ")}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function K(t){return Array.from(t.childNodes)}let P;function w(t){P=t}const x=[],S=[];let v=[];const M=[],U=Promise.resolve();let O=!1;function Y(){O||(O=!0,U.then(z))}function N(t){v.push(t)}const L=new Set;let _=0;function z(){if(_!==0)return;const t=P;do{try{for(;_<x.length;){const e=x[_];_++,w(e),Z(e.$$)}}catch(e){throw x.length=0,_=0,e}for(w(null),x.length=0,_=0;S.length;)S.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];L.has(n)||(L.add(n),n())}v.length=0}while(x.length);for(;M.length;)M.pop()();O=!1,L.clear(),w(t)}function Z(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function D(t){const e=[],n=[];v.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),v=e}const Q=new Set;function W(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function X(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),N(()=>{const o=t.$$.on_mount.map(V).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...o):k(o),t.$$.on_mount=[]}),r.forEach(N)}function tt(t,e){const n=t.$$;n.fragment!==null&&(D(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(x.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(t,e,n,s,r,o,f=null,h=[-1]){const u=P;w(t);const i=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:j(),dirty:h,skip_bound:!1,root:e.target||u.$$.root};f&&f(i.root);let g=!1;if(i.ctx=n?n(t,e.props||{},(a,d,...p)=>{const $=p.length?p[0]:d;return i.ctx&&r(i.ctx[a],i.ctx[a]=$)&&(!i.skip_bound&&i.bound[a]&&i.bound[a]($),g&&et(t,a)),d}):[],i.update(),g=!0,k(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){const a=K(e.target);i.fragment&&i.fragment.l(a),a.forEach(B)}else i.fragment&&i.fragment.c();e.intro&&W(t.$$.fragment),X(t,e.target,e.anchor),z()}w(u)}class rt{constructor(){E(this,"$$");E(this,"$$set")}$destroy(){tt(this,1),this.$destroy=y}$on(e,n){if(!I(n))return y;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const st="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(st);function ot(t){let e,n,s,r,o,f,h,u,i,g,a,d,p,$,C;return{c(){e=c("div"),n=c("div"),n.innerHTML='<h1 class="text-3xl font-sans-serif font-bold mb-2">Andree Christian Yulianto</h1> <p class="text-lg text-gray-600 mb-8">I am a software engineer in Indonesia.</p> <div class="flex justify-center space-x-1 mb-2"><a href="https://github.com/andreecy" target="_blank" class="svelte-1m3r02m"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" fill="currentColor"></path></svg></a> <a href="https://www.linkedin.com/in/andree-christian-yulianto-381378116" target="_blank" class="svelte-1m3r02m"><svg width="24px" height="24px" viewBox="0 0 16 16"><path fill="currentColor" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></svg></a></div> <a href="mailto:andreechristianyulianto@gmail.com" class="text-blue-500 hover:underline text-sm svelte-1m3r02m">andreechristianyulianto@gmail.com</a>',s=b(),r=c("div"),o=c("h2"),o.textContent="Skills",f=b(),h=c("div"),u=c("h3"),u.textContent="Programming Languages",i=b(),g=c("p"),g.textContent=`${t[0].sort().join(", ")}, etc.`,a=b(),d=c("div"),p=c("h3"),p.textContent="Frameworks",$=b(),C=c("p"),C.textContent=`${t[1].sort().join(", ")}, etc.`,m(n,"class","text-center"),m(o,"class","text-2xl font-bold mb-4 font-sans-serif"),m(u,"class","text-xl font-bold mb-2"),m(p,"class","text-xl font-bold mb-2"),m(d,"class","mt-4"),m(r,"class","my-8"),m(e,"class","max-w-3xl mx-auto p-8")},m(A,H){q(A,e,H),l(e,n),l(e,s),l(e,r),l(r,o),l(r,f),l(r,h),l(h,u),l(h,i),l(h,g),l(r,a),l(r,d),l(d,p),l(d,$),l(d,C)},p:y,i:y,o:y,d(A){A&&B(e)}}}function it(t){return[["C#","Go","Java","Javascript","Typescript","PHP"],["React","Next.js","Svelte","Laravel","Express"]]}class lt extends rt{constructor(e){super(),nt(this,e,it,ot,J,{})}}new lt({target:document.getElementById("app")});