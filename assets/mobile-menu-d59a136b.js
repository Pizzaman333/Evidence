(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();(()=>{const t={openMenuBtn:document.querySelector("[data-log-in-open]"),closeMenuBtn:document.querySelector("[data-log-in-close]"),menu:document.querySelector("[data-log-in]")};t.openMenuBtn.addEventListener("click",n),t.closeMenuBtn.addEventListener("click",n);function n(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const t={openMenuBtn:document.querySelector("[data-register-open]"),closeMenuBtn:document.querySelector("[data-register-close]"),menu:document.querySelector("[data-register]")};t.openMenuBtn.addEventListener("click",n),t.closeMenuBtn.addEventListener("click",n);function n(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",n),t.closeMenuBtn.addEventListener("click",n);function n(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();
//# sourceMappingURL=mobile-menu-d59a136b.js.map
