import{S as u,i as s}from"./assets/vendor-B2mb6eXk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const d="47095841-45755c038ed861ac306bdd605",m="photo",g="horizontal",h=!0,p="https://pixabay.com/api/";function y(e){const r=F(e).toString(),n=`${p}?${r}`;return fetch(n).then(a=>a.json()).then(a=>(a==null?void 0:a.hits)??[])}function F(e){return new URLSearchParams({q:e,key:d,image_type:m,orientation:g,safesearch:h})}const c=document.querySelector(".gallery"),b=[{label:"Likes",field:"likes"},{label:"Views",field:"views"},{label:"Comments",field:"comments"},{label:"Downloads",field:"downloads"}];function L(e){c.innerHTML=e}function l(e){console.log(e),c.innerHTML=e.map(S).join("")}function S(e){const r=e.previewURL,n=e.largeImageURL,a=e.tags;return`
    <a class="gallery-item" href="${n}">


    <img class="gallery-item-image" alt="${a}" src="${r}"/>
    <div class="gallery-item-details-container">
      ${b.map(t=>v(t.label,e[t.field])).join("")}
    </div>

    </a>`}function v(e,r){return`
    <div class="gallery-item-details-element">
      <span class="label">${e}</span>
      <span class="value">${r}</span>
    </div>`}const f=document.getElementById("search-form"),w=new u(".gallery-item",{captionsData:"alt",captionDelay:250,fadeSpeed:1e3});function C(e){L("Loading images, please wait..."),y(e).then(r=>{l(r),w.refresh(),r.length===0&&s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",iconColor:"#FFF",titleColor:"#FFF",messageColor:"#FFF",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"})}).catch(()=>{l([]),s.error({message:"Request failed, please try again later",position:"topRight",iconColor:"#FFF",titleColor:"#FFF",messageColor:"#FFF",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"})})}function P(e){e.preventDefault();const r=new FormData(f),n=Object.fromEntries(r);C(n.query)}function O(){f.addEventListener("submit",P)}O();
//# sourceMappingURL=index.js.map
