import{j as s,R as c,a as d}from"./vendor.7ed681d2.js";const u=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};u();const r=s.exports.jsx,t=s.exports.jsxs,m=s.exports.Fragment;function h(){return t(m,{children:[t("div",{className:"grid grid-flow-col bg-purple-500 px-10 py-5 dark:bg-gray-900",children:[r("h1",{className:"text-3xl font-bold dark:text-white",children:"Dashboard"}),t("ul",{className:"lg:grid grid-flow-col content-center font-semibold hidden dark:text-white",children:[r("li",{children:"Tasks"}),r("li",{children:"Reports"}),r("li",{children:"Settings"}),r("li",{children:"Profiles"})]}),r("button",{className:"lg:hidden text-lg font-semibold hover:bg-white hover:px-2 dark:text-white",children:"Menu"})]}),t("div",{className:"border-4 border-purple-300 border-dashed rounded-xl m-5 p-5 h-96 overflow-y-scroll scroll-snap-type",children:[r("h2",{className:"scroll-snap-align",children:"Dashboard Content"}),r("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'}),r("button",{className:"bsf-btn-blue scroll-snap-align",children:"Log In"}),r("button",{className:"bsf-btn-blue scroll-snap-align",children:"Sign Up"})]})]})}c.render(r(d.StrictMode,{children:r(h,{})}),document.getElementById("root"));