(()=>{var e,t,a,r,n,o,d,f,c,l,i,s,u,p,b,h,m,v,g,y,E,w={629:(e,t,a)=>{"use strict";a(9307),Promise.all([a.e(7384),a.e(540),a.e(1730),a.e(2229),a.e(427),a.e(4025),a.e(923),a.e(5622)]).then(a.bind(a,5622))},9307:(e,t,a)=>{a.p=window.BASE_URL_PREFIX?`${window.BASE_URL_PREFIX}/code-editor/`:""},412:(e,t,a)=>{var r="undefined"!=typeof window?window:void 0!==a.g?a.g:"undefined"!=typeof self?self:{};r.SENTRY_RELEASE={id:"prod.2023-09-12.06-24"},r.SENTRY_RELEASES=r.SENTRY_RELEASES||{},r.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2023-09-12.06-24"}}},P={};function x(e){var t=P[e];if(void 0!==t)return t.exports;var a=P[e]={id:e,loaded:!1,exports:{}};return w[e].call(a.exports,a,a.exports,x),a.loaded=!0,a.exports}x.m=w,x.c=P,x.amdO={},x.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return x.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,x.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"==typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"==typeof a.then)return a}var n=Object.create(null);x.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var d=2&r&&a;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((e=>o[e]=()=>a[e]));return o.default=()=>a,x.d(n,o),n},x.d=(e,t)=>{for(var a in t)x.o(t,a)&&!x.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},x.f={},x.e=e=>Promise.all(Object.keys(x.f).reduce(((t,a)=>(x.f[a](e,t),t)),[])),x.u=e=>(6357===e?"text-editor":e)+"."+{405:"09a2356baea29e15",427:"428005868b653360",508:"811b3eddc919e0e5",540:"83dabdd64b145c51",607:"2720dcc5ca6a70c9",730:"1b878890999eb5db",770:"c5ed48e8017c606b",923:"50eb03d27f3e7024",974:"1af97046eb820972",1167:"6a8e6643afedbb23",1194:"5e19f81d7d9eb6ea",1274:"a531ec4e6c58a284",1327:"c5437f943ae6d3d5",1394:"fd86a6bdd37b64ed",1448:"86d04cb80fdc1ee0",1572:"26ccdc7240c89b2c",1597:"05fa515426de62a9",1615:"6028ce9ad057fa06",1685:"912c4da4b929b137",1730:"355a47a05d458372",1742:"8bea12a1eb48013b",1778:"da431930e265e8d2",2136:"e67c9dada45caab9",2153:"18b5c9e9b2741f9b",2220:"686cfb2207868e1a",2223:"7b4f248fed2d9efc",2229:"bb7d4115f96cf303",2254:"c47f483adb08e75a",2660:"efa317e2091d63a5",2772:"60f64131b30c71b8",2784:"96c0fa3a4d267e55",2955:"e40d56c582ff493b",3046:"723a5d122f6cd8c1",3723:"dfd031e3f68f5b86",3947:"e0804d1f29654ec1",3980:"068cdafa820f8e2c",4025:"63b29ad0c1fafb02",4302:"1e3250cd22600273",4328:"0f17592fcab32cb1",4439:"949a166864ec0661",4846:"9c5d638d017a5f74",4957:"436a943e41ae42d6",5230:"40e02e1d13765dbf",5473:"3898f9bb97c9cb53",5505:"e3fa6fd2d318c8a9",5622:"dcc8e80f9d66d7d7",5624:"9a36f151cf56d1ae",5722:"3caeb60432fcb21b",5837:"d5a0a7b28a21b2bd",6160:"92d344412b982a69",6277:"145befe594a50326",6353:"96d3b8da57d780f2",6357:"b7fe1876bfe5b1e5",6462:"1a6be382a5b73317",6591:"cbe3fe2d42dbbdd7",6621:"aaa1bb5a8ea2ff17",6631:"d43fac19be7f58d8",6773:"6328b56a46021ea0",7236:"42972e26a7ed57c3",7247:"04240664f352b477",7322:"71facbdee57eb396",7384:"16b19ed7f8bb4250",7438:"8a0a1da09d68dcaa",7500:"b8f22e5346e0768c",7864:"6a6fc50b3b6c9b0a",7908:"168d783458108681",7933:"f43b8283b7d42a6a",8007:"e5c9c23b54c00eed",8013:"dd48707e43c06a1f",8316:"2381aee25bdea481",8341:"0e4d3d3784a2b7ae",8537:"68b7c36934d05cd0",8609:"ac5ac4ffdb1df1ad",8722:"ed101f36354a33a5",8754:"dc3d09c17b340f96",9070:"18cb81c3e7438ae3",9073:"c3ff53dd53a44c96",9239:"38bcfbfa3a081e59",9304:"dc013158fb4cf499",9407:"1991ca8e8065bac8",9543:"4ebe2d19ad66f042",9838:"fec0dec0b771a361",9864:"ef56b9d16684c4bf",9963:"c573c7fa1f40378d"}[e]+".js",x.miniCssF=e=>e+"."+{2153:"da9799300b301623",2254:"0a4776230390e421",5622:"b5e820d6e4d65f95",8754:"0a4776230390e421"}[e]+".css",x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),x.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),x.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},r="code-editor:",x.l=(e,t,n,o)=>{if(a[e])a[e].push(t);else{var d,f;if(void 0!==n)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var i=c[l];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==r+n){d=i;break}}d||(f=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,x.nc&&d.setAttribute("nonce",x.nc),d.setAttribute("data-webpack",r+n),d.src=e),a[e]=[t];var s=(t,r)=>{d.onerror=d.onload=null,clearTimeout(u);var n=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(r))),t)return t(r)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),f&&document.head.appendChild(d)}},x.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{x.S={};var e={},t={};x.I=(a,r)=>{r||(r=[]);var n=t[a];if(n||(n=t[a]={}),!(r.indexOf(n)>=0)){if(r.push(n),e[a])return e[a];x.o(x.S,a)||(x.S[a]={});var o=x.S[a],d="code-editor",f=(e,t,a,r)=>{var n=o[e]=o[e]||{},f=n[t];(!f||!f.loaded&&(!r!=!f.eager?r:d>f.from))&&(n[t]={get:a,from:d,eager:!!r})},c=[];return"default"===a&&(f("@postman-app-next/analytics-service","0.0.0",(()=>Promise.all([x.e(4302),x.e(2136),x.e(7247)]).then((()=>()=>x(2660))))),f("@postman-app-next/data-fetching","0.0.0",(()=>Promise.all([x.e(540),x.e(4302),x.e(7864),x.e(8013)]).then((()=>()=>x(8013))))),f("@postman-app-next/error-handling","0.0.0",(()=>Promise.all([x.e(7384),x.e(6160),x.e(540),x.e(4302),x.e(1730),x.e(2229),x.e(427),x.e(607),x.e(2772),x.e(730)]).then((()=>()=>x(730))))),f("@postman-app-next/performance-utils","0.0.0",(()=>Promise.all([x.e(540),x.e(8722),x.e(5837),x.e(9239)]).then((()=>()=>x(1597))))),f("@postman-app-next/ui","0.0.0",(()=>Promise.all([x.e(7384),x.e(6160),x.e(3947),x.e(540),x.e(4302),x.e(1730),x.e(2229),x.e(427),x.e(3723),x.e(7438),x.e(8754)]).then((()=>()=>x(7438))))),f("@postman-app-next/vscode-utils","0.0.0",(()=>Promise.all([x.e(540),x.e(8722),x.e(607),x.e(5473)]).then((()=>()=>x(770))))),f("@postman/aether-design-tokens","1.2.0",(()=>x.e(6462).then((()=>()=>x(6462))))),f("@sentry/react","7.49.0",(()=>Promise.all([x.e(7500),x.e(540)]).then((()=>()=>x(7500))))),f("@tanstack/react-query-devtools","4.29.5",(()=>x.e(2223).then((()=>()=>x(2223))))),f("@tanstack/react-query","4.29.5",(()=>Promise.all([x.e(8609),x.e(540)]).then((()=>()=>x(8609))))),f("clsx","1.2.1",(()=>x.e(6277).then((()=>()=>x(6277))))),f("colord","2.9.3",(()=>x.e(5230).then((()=>()=>x(5230))))),f("memoize-one","5.2.1",(()=>x.e(6631).then((()=>()=>x(6631))))),f("mobx-react","7.6.0",(()=>Promise.all([x.e(8007),x.e(540),x.e(1730)]).then((()=>()=>x(8007))))),f("prop-types","15.8.1",(()=>x.e(3980).then((()=>()=>x(3980))))),f("react-dom","16.14.0",(()=>Promise.all([x.e(8316),x.e(540)]).then((()=>()=>x(8316))))),f("react-draggable","4.4.5",(()=>Promise.all([x.e(1327),x.e(540),x.e(1730),x.e(2229),x.e(3723)]).then((()=>()=>x(1327))))),f("react-error-boundary","4.0.10",(()=>Promise.all([x.e(540),x.e(2955)]).then((()=>()=>x(2955))))),f("react-router-dom","6.11.2",(()=>Promise.all([x.e(6591),x.e(540)]).then((()=>()=>x(6591))))),f("react","16.14.0",(()=>x.e(2784).then((()=>()=>x(2784))))),f("styled-components","5.3.6",(()=>Promise.all([x.e(5505),x.e(540)]).then((()=>()=>x(5505))))),f("ua-parser-js","1.0.33",(()=>x.e(405).then((()=>()=>x(6353))))),f("uuid","8.3.2",(()=>x.e(9304).then((()=>()=>x(9304))))),f("web-vitals","3.0.4",(()=>x.e(9543).then((()=>()=>x(9543)))))),e[a]=c.length?Promise.all(c).then((()=>e[a]=1)):1}}})(),(()=>{var e;x.g.importScripts&&(e=x.g.location+"");var t=x.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=e})(),n=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=a[1]?t(a[1]):[];return a[2]&&(r.length++,r.push.apply(r,t(a[2]))),a[3]&&(r.push([]),r.push.apply(r,t(a[3]))),r},o=(e,t)=>{e=n(e),t=n(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var r=e[a],o=(typeof r)[0];if(a>=t.length)return"u"==o;var d=t[a],f=(typeof d)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&r!=d)return r<d;a++}},d=e=>{var t=e[0],a="";if(1===e.length)return"*";if(t+.5){a+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var r=1,n=1;n<e.length;n++)r--,a+="u"==(typeof(f=e[n]))[0]?"-":(r>0?".":"")+(r=2,f);return a}var o=[];for(n=1;n<e.length;n++){var f=e[n];o.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?o.pop()+" "+o.pop():d(f))}return c();function c(){return o.pop().replace(/^\((.+)\)$/,"$1")}},f=(e,t)=>{if(0 in e){t=n(t);var a=e[0],r=a<0;r&&(a=-a-1);for(var o=0,d=1,c=!0;;d++,o++){var l,i,s=d<e.length?(typeof e[d])[0]:"";if(o>=t.length||"o"==(i=(typeof(l=t[o]))[0]))return!c||("u"==s?d>a&&!r:""==s!=r);if("u"==i){if(!c||"u"!=s)return!1}else if(c)if(s==i)if(d<=a){if(l!=e[d])return!1}else{if(r?l>e[d]:l<e[d])return!1;l!=e[d]&&(c=!1)}else if("s"!=s&&"n"!=s){if(r||d<=a)return!1;c=!1,d--}else{if(d<=a||i<s!=r)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,d--)}}var u=[],p=u.pop.bind(u);for(o=1;o<e.length;o++){var b=e[o];u.push(1==b?p()|p():2==b?p()&p():b?f(b,t):!p())}return!!p()},c=(e,t)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!e||o(e,t)?t:e),0))&&a[t]},l=(e,t)=>{var a=e[t];return Object.keys(a).reduce(((e,t)=>!e||!a[e].loaded&&o(e,t)?t:e),0)},i=(e,t,a,r)=>"Unsatisfied version "+a+" from "+(a&&e[t][a].from)+" of shared singleton module "+t+" (required "+d(r)+")",s=(e,t,a,r)=>{var n=l(e,a);if(!f(r,n))throw new Error(i(e,a,n,r));return u(e[a][n])},u=e=>(e.loaded=1,e.get()),b=(p=e=>function(t,a,r,n){var o=x.I(t);return o&&o.then?o.then(e.bind(e,t,x.S[t],a,r,n)):e(t,x.S[t],a,r,n)})(((e,t,a,r)=>t&&x.o(t,a)?u(c(t,a)):r())),h=p(((e,t,a,r,n)=>t&&x.o(t,a)?s(t,0,a,r):n())),m={},v={540:()=>h("default","react",[4,16,14,0],(()=>x.e(2784).then((()=>()=>x(2784))))),1730:()=>h("default","react-dom",[4,16,14,0],(()=>x.e(8316).then((()=>()=>x(8316))))),2229:()=>h("default","prop-types",[1,15,8,1],(()=>x.e(3980).then((()=>()=>x(3980))))),5577:()=>h("default","@postman/aether-design-tokens",[1,1,2,0],(()=>x.e(7908).then((()=>()=>x(6462))))),5892:()=>h("default","styled-components",[4,5,3,6],(()=>x.e(5505).then((()=>()=>x(5505))))),4025:()=>b("default","@postman-app-next/ui",(()=>Promise.all([x.e(6160),x.e(3947),x.e(4302),x.e(3723),x.e(7438),x.e(2254)]).then((()=>()=>x(7438))))),923:()=>b("default","@postman-app-next/error-handling",(()=>Promise.all([x.e(6160),x.e(4302),x.e(607),x.e(2772),x.e(5624)]).then((()=>()=>x(730))))),4958:()=>b("default","@postman-app-next/data-fetching",(()=>Promise.all([x.e(4302),x.e(7864),x.e(1685)]).then((()=>()=>x(8013))))),4302:()=>b("default","@postman-app-next/vscode-utils",(()=>Promise.all([x.e(540),x.e(8722),x.e(607),x.e(770)]).then((()=>()=>x(770))))),4515:()=>h("default","ua-parser-js",[1,1,0,33],(()=>x.e(405).then((()=>()=>x(6353))))),6468:()=>h("default","web-vitals",[1,3,0,4],(()=>x.e(9543).then((()=>()=>x(9543))))),2600:()=>h("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>x.e(2223).then((()=>()=>x(2223))))),4527:()=>h("default","@tanstack/react-query",[1,4,29,1],(()=>x.e(8609).then((()=>()=>x(8609))))),607:()=>h("default","react-router-dom",[4,6,11,2],(()=>x.e(6591).then((()=>()=>x(6591))))),609:()=>h("default","react-error-boundary",[1,4,0,4],(()=>x.e(8537).then((()=>()=>x(2955))))),5304:()=>h("default","@sentry/react",[1,7,49,0],(()=>x.e(7500).then((()=>()=>x(7500))))),8722:()=>h("default","uuid",[1,8,3,2],(()=>x.e(9304).then((()=>()=>x(9304))))),5837:()=>b("default","@postman-app-next/analytics-service",(()=>Promise.all([x.e(4302),x.e(2660)]).then((()=>()=>x(2660))))),3723:()=>h("default","clsx",[1,1,2,1],(()=>x.e(6277).then((()=>()=>x(6277))))),7569:()=>h("default","react-draggable",[1,4,4,5],(()=>x.e(1327).then((()=>()=>x(1327))))),8851:()=>h("default","mobx-react",[1,7,6,0],(()=>x.e(8007).then((()=>()=>x(8007))))),1179:()=>h("default","colord",[1,2,9,3],(()=>x.e(5230).then((()=>()=>x(5230))))),7155:()=>h("default","memoize-one",[1,5,2,1],(()=>x.e(6631).then((()=>()=>x(6631))))),3720:()=>b("default","@postman-app-next/performance-utils",(()=>Promise.all([x.e(8722),x.e(5837),x.e(1597)]).then((()=>()=>x(1597)))))},g={427:[5577,5892],540:[540],607:[607],923:[923],1730:[1730],2136:[4515,6468],2229:[2229],2660:[4515,6468],2772:[609,5304],3723:[3723],4025:[4025],4302:[4302],5622:[4958],5837:[5837],6357:[1179,7155,3720],7438:[7569,8851],7864:[2600,4527],8722:[8722]},x.f.consumes=(e,t)=>{x.o(g,e)&&g[e].forEach((e=>{if(x.o(m,e))return t.push(m[e]);var a=t=>{m[e]=0,x.m[e]=a=>{delete x.c[e],a.exports=t()}},r=t=>{delete m[e],x.m[e]=a=>{throw delete x.c[e],t}};try{var n=v[e]();n.then?t.push(m[e]=n.then(a).catch(r)):a(n)}catch(e){r(e)}}))},y=e=>new Promise(((t,a)=>{var r=x.miniCssF(e),n=x.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=(d=a[r]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(n===e||n===t))return d}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var d;if((n=(d=o[r]).getAttribute("data-href"))===e||n===t)return d}})(r,n))return t();((e,t,a,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)a();else{var d=o&&("load"===o.type?"missing":o.type),f=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=d,c.request=f,n.parentNode.removeChild(n),r(c)}},n.href=t,document.head.appendChild(n)})(e,n,t,a)})),E={179:0},x.f.miniCss=(e,t)=>{E[e]?t.push(E[e]):0!==E[e]&&{2153:1,2254:1,5622:1,8754:1}[e]&&t.push(E[e]=y(e).then((()=>{E[e]=0}),(t=>{throw delete E[e],t})))},(()=>{var e={179:0};x.f.j=(t,a)=>{var r=x.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(2(136|229|254|772)|4(025|27|302)|(37|9)23|1730|540|5837|607|7864|8722)$/.test(t))e[t]=0;else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var o=x.p+x.u(t),d=new Error;x.l(o,(a=>{if(x.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}}),"chunk-"+t,t)}};var t=(t,a)=>{var r,n,[o,d,f]=a,c=0;if(o.some((t=>0!==e[t]))){for(r in d)x.o(d,r)&&(x.m[r]=d[r]);f&&f(x)}for(t&&t(a);c<o.length;c++)n=o[c],x.o(e,n)&&e[n]&&e[n][0](),e[n]=0},a=self.webpackChunkcode_editor=self.webpackChunkcode_editor||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),x.nc=void 0,x(412),x(629)})();
//# sourceMappingURL=main.c7d03a5ef852a615.js.map