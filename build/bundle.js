/*! riot-app - 02/06/2017 */
!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=16)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=f[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(a(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(a(i.parts[r],t));f[i.id]={id:i.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],s=o[1],u=o[2],a=o[3],c={css:s,media:u,sourceMap:a};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function o(e,t){var n=h(),i=g[g.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function a(e,t){var n,i,o;if(t.singleton){var a=m++;n=b||(b=s(t)),i=c.bind(null,n,a,!1),o=c.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),i=d.bind(null,n),o=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),i=l.bind(null,n),o=function(){r(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function c(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function l(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var f={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,g=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=i(e);return n(o,t),function(e){for(var r=[],s=0;s<o.length;s++){var u=o[s],a=f[u.id];a.refs--,r.push(a)}if(e){var c=i(e);n(c,t)}for(var s=0;s<r.length;s++){var a=r[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete f[a.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";n(3),n(4),n(6),n(11),riot.tag2("notes",'<div class="Notes"> <folder-picker></Folder-Picker> <div class="container"> <div class="col-3"> <list></List> </div> <div class="col-9"> <editor></Editor> </div> </div> </div>',"","",function(e){})},function(e,t,n){"use strict";n(22),riot.tag2("editor",'<div class="Editor"> </div>',"","",function(e){})},function(e,t,n){"use strict";n(20),riot.tag2("folder-picker",'<div class="Folder-Picker"> <div class="container"> <ul class="Picker-buttons"> <li class="active"><button>Active</button></li> <li><button>Deleted</button></li> </ul> </div> </div>',"","",function(e){})},function(e,t,n){"use strict";riot.tag2("actions",'<div class="Actions"> <button>Add Note</button> <button>Select Notes</button> </div>',"","",function(e){})},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(15),r=i(o);n(5),n(18),riot.tag2("list",'<div class="List"> <actions></Actions> <ul class="List-notes"> <li each="{notes}" role="button" class="{selected: this.selected}" data-id="{this.id}" onclick="{clickNote}"> <span>{title}</span> </li> </ul> </div>',"","",function(e){this.notes=r.default,this.clickNote=function(e){var t=e.item;t.selected=!t.selected}})},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".Notes .container {\n  display: flex; }\n",""])},,,,function(e,t,n){var i=n(7);"string"==typeof i&&(i=[[e.i,i,""]]);n(1)(i,{});i.locals&&(e.exports=i.locals)},,,,function(e,t){e.exports=[{userId:1,id:1,title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",selected:!1},{userId:1,id:2,title:"qui est esse",body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",selected:!1},{userId:1,id:3,title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",selected:!1}]},function(e,t,n){"use strict";n(2),riot.mount("*")},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".List-notes {\n  list-style-type: none; }\n  .List-notes > li {\n    background-color: white;\n    width: 100%;\n    margin: 5px 0;\n    padding: 10px;\n    border: 1px solid #000; }\n    .List-notes > li.selected {\n      background-color: #e2e5fb; }\n",""])},function(e,t,n){var i=n(17);"string"==typeof i&&(i=[[e.i,i,""]]);n(1)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".Folder-Picker {\n  background-color: #95a5a6;\n  width: 100%;\n  color: white; }\n  .Folder-Picker .Picker-buttons {\n    list-style-type: none;\n    font-size: 0; }\n    .Folder-Picker .Picker-buttons > li {\n      display: inline-block;\n      font-size: 16px; }\n      .Folder-Picker .Picker-buttons > li.active {\n        background-color: #fff;\n        color: #95a5a6; }\n      .Folder-Picker .Picker-buttons > li > button {\n        padding: 15px 20px; }\n",""])},function(e,t,n){var i=n(19);"string"==typeof i&&(i=[[e.i,i,""]]);n(1)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".Editor {\n  background-color: white;\n  width: 100%;\n  min-height: 300px; }\n",""])},function(e,t,n){var i=n(21);"string"==typeof i&&(i=[[e.i,i,""]]);n(1)(i,{});i.locals&&(e.exports=i.locals)}]);