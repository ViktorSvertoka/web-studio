!function(){var e,t,n,o;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),function(){var e=document.querySelector("[data-modal-open]"),t=document.querySelector("[data-modal-close]"),n=document.querySelector("[data-modal]"),o=document.querySelector(".backdrop");function c(){n.classList.toggle("is-hidden")}e.addEventListener("click",c),t.addEventListener("click",c),o.addEventListener("click",(function(e){e.target===o&&c()})),window.addEventListener("keydown",(function(e){"Escape"!==e.code||n.classList.contains("is-hidden")||c()}))}()}();
//# sourceMappingURL=portfolio.35904795.js.map
