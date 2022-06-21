"use strict";(self.webpackChunkkelvin_portfolio=self.webpackChunkkelvin_portfolio||[]).push([[179],{426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"body {\r\n  box-sizing: border-box;\r\n}\r\n\r\n#menu {\r\n  margin: 3rem 20rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#footer-text {\r\n  text-align: center;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\n#logo {\r\n  border: solid black 0.3rem;\r\n  border-radius: 50%;\r\n  padding: 1rem;\r\n}\r\n\r\n.menu-link:hover {\r\n  cursor: pointer;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n#footer {\r\n  border-top: solid black 0.25rem;\r\n}\r\n",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},705:(e,n,t)=>{var r=t(379),o=t.n(r),a=t(795),c=t.n(a),i=t(569),s=t.n(i),l=t(565),d=t.n(l),u=t(216),p=t.n(u),m=t(589),f=t.n(m),v=t(426),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const y=document.getElementById("display-Movies");async function b(){try{const e=await fetch("https://api.tvmaze.com/search/shows?q=crime");return await e.json()}catch(e){return!1}}(async()=>{const e=await b(),n=await async function(){try{const e=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/movielikes/likes/");return await e.json()}catch(e){return!1}}();y.innerHTML="",e.forEach((e=>{const t=document.createElement("div"),r=document.createElement("label");r.innerHTML=`${e.show.name}`,t.classList.add("movie-div");const o=document.createElement("label");o.innerHTML=`${n.likes}`;const a=document.createElement("img");a.src=e.show.image.medium;const c=document.createElement("button");c.classList.add("comment-button"),c.innerHTML="Comments",c.id=e.show.id,t.append(r),t.append(a),t.append(c),t.append(o),y.append(t),c.onclick=n=>{n.preventDefault(),(async e=>{const n=await b(),t=document.createElement("div");t.innerHTML="",n.forEach((n=>{if(e===n.show.id){const e=document.createElement("div"),r=document.createElement("label");r.innerHTML=`${n.show.name}`,e.classList.add("movie-div");const o=document.createElement("img");o.src=n.show.image.medium;const a=document.createElement("label");a.innerHTML=`${n.show.status}`;const c=document.createElement("label");c.innerHTML=`${n.show.premiered}`,e.append(o),e.append(r),e.append(a),e.append(c),t.append(e),document.body.append(t)}}))})(e.show.id)}}))})()}},e=>{e(e.s=705)}]);