import{r as i}from"./chunks/index.e71fce8a.js";var s={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=i.exports,p=Symbol.for("react.element"),f=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,g=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function h(r,t,o){var e,a={},l=null,n=null;o!==void 0&&(l=""+o),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(n=t.ref);for(e in t)x.call(t,e)&&!v.hasOwnProperty(e)&&(a[e]=t[e]);if(r&&r.defaultProps)for(e in t=r.defaultProps,t)a[e]===void 0&&(a[e]=t[e]);return{$$typeof:p,type:r,key:l,ref:n,props:a,_owner:g.current}}c.Fragment=f;c.jsx=h;c.jsxs=h;(function(r){r.exports=c})(s);const w=["light","dark"],k=[s.exports.jsx("svg",{className:"fill-[#C63D32] dark:fill-current",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:s.exports.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}),s.exports.jsx("svg",{className:"fill-current dark:fill-[#366CC6]",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:s.exports.jsx("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})];function y({labels:r}){const[t,o]=i.exports.useState(()=>document.documentElement.classList.contains("dark")?"dark":"light");return i.exports.useEffect(()=>{document.documentElement.classList.contains("dark")&&o("dark")},[o]),i.exports.useEffect(()=>{const e=document.documentElement;t==="light"?e.classList.remove("dark"):e.classList.add("dark"),localStorage.setItem("theme",t)},[t]),s.exports.jsx("div",{className:"flex w-fit justify-between border border-current rounded-full",children:w.map((e,a)=>{const l=k[a],n=e===t,m=e==="light"?r.useLight:r.useDark;return s.exports.jsxs("label",{title:m,className:"p-1 cursor-pointer ",children:[l,s.exports.jsx("input",{className:"hidden",type:"radio",name:"theme-toggle",checked:n,value:e,"aria-label":m,onChange:()=>{const d=window.matchMedia("(prefers-color-scheme: dark)").matches;d&&e==="dark"||!d&&e==="light"?localStorage.removeItem("theme"):localStorage.setItem("theme",e),o(e)}})]},e)})})}export{y as default};