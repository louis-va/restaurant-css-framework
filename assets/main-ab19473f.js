(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();if(document.querySelector("body").getAttribute("id")=="menu"){let n=function(r){c.forEach(e=>{e.container==r?(e.counter.classList.remove("hidden"),e.counter.classList.add("block"),e.button.classList.remove("text-light-brown","bg-light-grey"),e.button.classList.add("text-white","bg-pink"),e.container.classList.remove("hidden"),e.container.classList.add("grid"),e.counter.scrollIntoView(),window.scrollBy(0,-120)):(e.counter.classList.add("hidden"),e.counter.classList.remove("block"),e.button.classList.add("text-light-brown","bg-light-grey"),e.button.classList.remove("text-white","bg-pink"),e.container.classList.add("hidden"),e.container.classList.remove("grid"))})};var y=n;const c=[{container:document.querySelector("#page-1"),button:document.querySelector("#btn-page-1"),counter:document.querySelector("#counter-1")},{container:document.querySelector("#page-2"),button:document.querySelector("#btn-page-2"),counter:document.querySelector("#counter-2")},{container:document.querySelector("#page-3"),button:document.querySelector("#btn-page-3"),counter:document.querySelector("#counter-3")}];c.forEach(r=>{r.button.addEventListener("click",()=>n(r.container))})}const a=document.querySelector("#nav"),u=document.querySelector("#nav-overlay"),m=document.querySelector("#nav-button"),i=document.querySelector("#nav-line-1"),l=document.querySelector("#nav-line-2");m.addEventListener("click",()=>d());u.addEventListener("click",()=>d());function d(){a.classList.toggle("hidden"),u.classList.toggle("hidden"),i.classList.toggle("rotate-45"),i.classList.toggle("translate-y-[3px]"),l.classList.toggle("-rotate-45"),l.classList.toggle("-translate-y-[3px]")}