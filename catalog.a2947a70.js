!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},o.parcelRequired7c6=i),i.register("e3qpK",(function(e,t){i("gB0av"),i("JWm3P")})),i.register("gB0av",(function(t,o){var n,r=i("8nrFW"),l=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),u=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),d=matchMedia("(prefers-color-scheme: dark)"),a=document.querySelectorAll(".switcher-radio");function c(t){!function(t){var o="light"===t?"all":"not all",n="dark"===t?"all":"not all";e(r)(l).forEach((function(e){e.media=o})),e(r)(u).forEach((function(e){e.media=n}))}(t),function(e){localStorage.setItem("color-scheme",e)}(t)}function s(){return localStorage.getItem("color-scheme")}null===(n=s())&&c("dark"),n=s(),document.querySelector(".switcher-radio[value=".concat(n,"]")).checked=!0,e(r)(a).forEach((function(e){e.addEventListener("change",(function(e){c(e.target.value)}))})),function(){var e=s(),t=d.matches?"dark":"light";null!==e&&e!==t&&c(e)}()})),i.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return o.default(e)||n.default(e)||l.default(e)||r.default()};var o=u(i("kMC0W")),n=u(i("7AJDX")),r=u(i("8CtQK")),l=u(i("auk6i"));function u(e){return e&&e.__esModule?e:{default:e}}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var o,n=(o=i("8NIkP"))&&o.__esModule?o:{default:o}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n.default(e,t)};var o,n=(o=i("8NIkP"))&&o.__esModule?o:{default:o}})),i.register("JWm3P",(function(e,t){var o=i("gnsaF"),n=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),u=function(){var e="true"===r.getAttribute("aria-expanded")||!1;r.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),o[e?"enableBodyScroll":"disableBodyScroll"](document.body)};r.addEventListener("click",u),l.addEventListener("click",u),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(n.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),o.enableBodyScroll(document.body))}))})),i.register("gnsaF",(function(e,o){t(e.exports,"disableBodyScroll",(function(){return y})),t(e.exports,"clearAllBodyScrollLocks",(function(){return g})),t(e.exports,"enableBodyScroll",(function(){return h}));var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],u=!1,d=-1,a=void 0,c=void 0,s=void 0,f=function(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},p=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},v=function(){if(void 0!==c){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=c.position,document.body.style.top=c.top,document.body.style.left=c.left,window.scrollTo(t,e),c=void 0}},y=function(e,t){if(e){if(!l.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(l),[o]),i?window.requestAnimationFrame((function(){if(void 0===c){c={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(d=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-d;!f(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?m(e):e.stopPropagation())}(t,e)},u||(document.addEventListener("touchmove",m,n?{passive:!1}:void 0),u=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},g=function(){i&&(l.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),u&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),u=!1),d=-1),i?v():p(),l=[]},h=function(e){e?(l=l.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,u&&0===l.length&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),u=!1)),i?v():p()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}}))}();
//# sourceMappingURL=catalog.a2947a70.js.map