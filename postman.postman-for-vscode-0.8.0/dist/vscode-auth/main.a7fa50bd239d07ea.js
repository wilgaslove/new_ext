(()=>{var e,t,r,a,n,o,d,l,i,s,f,u,c,p,h,m,b,v,g,y={629:(e,t,r)=>{"use strict";r(2924),Promise.all([r.e(484),r.e(734),r.e(540),r.e(517),r.e(229),r.e(286),r.e(792)]).then(r.bind(r,4792))},2924:(e,t,r)=>{r.p=window.BASE_URL_PREFIX?`${window.BASE_URL_PREFIX}/vscode-auth/`:""},3078:(e,t,r)=>{var a="undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};a.SENTRY_RELEASE={id:"prod.2023-09-12.06-24"},a.SENTRY_RELEASES=a.SENTRY_RELEASES||{},a.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2023-09-12.06-24"}}},E={};function w(e){var t=E[e];if(void 0!==t)return t.exports;var r=E[e]={id:e,loaded:!1,exports:{}};return y[e](r,r.exports,w),r.loaded=!0,r.exports}w.m=y,w.c=E,w.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return w.d(t,{a:t}),t},w.d=(e,t)=>{for(var r in t)w.o(t,r)&&!w.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((t,r)=>(w.f[r](e,t),t)),[])),w.u=e=>e+"."+{7:"3a1c924b97d820fe",32:"941cd868f7f3077c",229:"d6b1f1ad4a3477d2",254:"ec489ee0bdd3afd9",277:"9eabd99c245201ed",286:"2973498927e30912",304:"d6906ad3dc7f99d2",316:"9d9de703ed075bec",327:"be344c1d3e16e9e8",376:"43d2fd437715759f",462:"b5ffcae66da28560",473:"4b6cbae961ee960a",484:"dae804e6315a76f7",490:"34894024d6d3d02f",500:"5cae85f96b7c4e91",505:"f06d4acd8941535f",517:"b4f3f9774c6c6fe7",531:"5dee87e46e9236cf",537:"bf3cbff5d6e2dbb7",540:"dd9bc5051d19c308",591:"e548986508345301",607:"70cf3f5cb324ae8a",609:"ad8d24562e869223",624:"1a5b2fe07fdf389a",722:"9c6338b403ee8352",723:"7272870e97129dc9",730:"158664f0b98123ac",734:"54c57bbeddf6656a",770:"42acf981fa71fba7",784:"cd015ea3929ef817",792:"65b3e4e08c7455da",836:"52a5a286c6264a70",908:"a3a621d2f887552e",955:"52863b1448a2d302",980:"b32644e6f539a23f"}[e]+".js",w.miniCssF=e=>e+"."+{254:"c85e5fe424137309",376:"c85e5fe424137309",792:"e9707f47a81fabb2"}[e]+".css",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="vscode-auth:",w.l=(r,a,n,o)=>{if(e[r])e[r].push(a);else{var d,l;if(void 0!==n)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var f=i[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+n){d=f;break}}d||(l=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,w.nc&&d.setAttribute("nonce",w.nc),d.setAttribute("data-webpack",t+n),d.src=r),e[r]=[a];var u=(t,a)=>{d.onerror=d.onload=null,clearTimeout(c);var n=e[r];if(delete e[r],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(a))),t)return t(a)},c=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),l&&document.head.appendChild(d)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},t={};w.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];w.o(w.S,r)||(w.S[r]={});var o=w.S[r],d="vscode-auth",l=(e,t,r,a)=>{var n=o[e]=o[e]||{},l=n[t];(!l||!l.loaded&&(!a!=!l.eager?a:d>l.from))&&(n[t]={get:r,from:d,eager:!!a})},i=[];return"default"===r&&(l("@postman-app-next/error-handling","0.0.0",(()=>Promise.all([w.e(484),w.e(540),w.e(607),w.e(517),w.e(229),w.e(286),w.e(304),w.e(609),w.e(624)]).then((()=>()=>w(730))))),l("@postman-app-next/sentry","0.0.0",(()=>Promise.all([w.e(540),w.e(607),w.e(304),w.e(531)]).then((()=>()=>w(3032))))),l("@postman-app-next/ui","0.0.0",(()=>Promise.all([w.e(484),w.e(734),w.e(540),w.e(517),w.e(229),w.e(286),w.e(723),w.e(490),w.e(376)]).then((()=>()=>w(2490))))),l("@postman-app-next/vscode-utils","0.0.0",(()=>Promise.all([w.e(540),w.e(607),w.e(722),w.e(473)]).then((()=>()=>w(770))))),l("@postman/aether-design-tokens","1.2.0",(()=>w.e(462).then((()=>()=>w(6462))))),l("@sentry/react","7.49.0",(()=>Promise.all([w.e(500),w.e(540)]).then((()=>()=>w(7500))))),l("clsx","1.2.1",(()=>w.e(277).then((()=>()=>w(6277))))),l("mobx-react","7.6.0",(()=>Promise.all([w.e(7),w.e(540),w.e(517)]).then((()=>()=>w(8007))))),l("prop-types","15.8.1",(()=>w.e(980).then((()=>()=>w(3980))))),l("react-dom","16.14.0",(()=>Promise.all([w.e(316),w.e(540)]).then((()=>()=>w(8316))))),l("react-draggable","4.4.5",(()=>Promise.all([w.e(327),w.e(540),w.e(517),w.e(229),w.e(723)]).then((()=>()=>w(1327))))),l("react-error-boundary","4.0.10",(()=>Promise.all([w.e(540),w.e(955)]).then((()=>()=>w(2955))))),l("react-router-dom","6.11.2",(()=>Promise.all([w.e(591),w.e(540)]).then((()=>()=>w(6591))))),l("react","16.14.0",(()=>w.e(784).then((()=>()=>w(2784))))),l("styled-components","5.3.6",(()=>Promise.all([w.e(505),w.e(540)]).then((()=>()=>w(5505))))),l("uuid","8.3.2",(()=>w.e(836).then((()=>()=>w(9304)))))),e[r]=i.length?Promise.all(i).then((()=>e[r]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var t=w.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var n=e[a],o=(typeof n)[0];if(a>=t.length)return"u"==o;var d=t[a],l=(typeof d)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=d)return n<d;a++}},n=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,r+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return r}var d=[];for(o=1;o<e.length;o++){var l=e[o];d.push(0===l?"not("+i()+")":1===l?"("+i()+" || "+i()+")":2===l?d.pop()+" "+d.pop():n(l))}return i();function i(){return d.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=r(t);var a=e[0],n=a<0;n&&(a=-a-1);for(var d=0,l=1,i=!0;;l++,d++){var s,f,u=l<e.length?(typeof e[l])[0]:"";if(d>=t.length||"o"==(f=(typeof(s=t[d]))[0]))return!i||("u"==u?l>a&&!n:""==u!=n);if("u"==f){if(!i||"u"!=u)return!1}else if(i)if(u==f)if(l<=a){if(s!=e[l])return!1}else{if(n?s>e[l]:s<e[l])return!1;s!=e[l]&&(i=!1)}else if("s"!=u&&"n"!=u){if(n||l<=a)return!1;i=!1,l--}else{if(l<=a||f<u!=n)return!1;i=!1}else"s"!=u&&"n"!=u&&(i=!1,l--)}}var c=[],p=c.pop.bind(c);for(d=1;d<e.length;d++){var h=e[d];c.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},d=(e,t)=>{var r=e[t];return(t=Object.keys(r).reduce(((e,t)=>!e||a(e,t)?t:e),0))&&r[t]},l=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&a(e,t)?t:e),0)},i=(e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+n(a)+")",s=(e,t,r,a)=>{var n=l(e,r);if(!o(a,n))throw new Error(i(e,r,n,a));return f(e[r][n])},f=e=>(e.loaded=1,e.get()),c=(u=e=>function(t,r,a,n){var o=w.I(t);return o&&o.then?o.then(e.bind(e,t,w.S[t],r,a,n)):e(t,w.S[t],r,a,n)})(((e,t,r,a)=>t&&w.o(t,r)?f(d(t,r)):a())),p=u(((e,t,r,a,n)=>t&&w.o(t,r)?s(t,0,r,a):n())),h={},m={540:()=>p("default","react",[4,16,14,0],(()=>w.e(784).then((()=>()=>w(2784))))),1730:()=>p("default","react-dom",[4,16,14,0],(()=>w.e(316).then((()=>()=>w(8316))))),2229:()=>p("default","prop-types",[1,15,8,1],(()=>w.e(980).then((()=>()=>w(3980))))),4302:()=>c("default","@postman-app-next/vscode-utils",(()=>Promise.all([w.e(607),w.e(722),w.e(770)]).then((()=>()=>w(770))))),5577:()=>p("default","@postman/aether-design-tokens",[1,1,2,0],(()=>w.e(908).then((()=>()=>w(6462))))),5892:()=>p("default","styled-components",[4,5,3,6],(()=>w.e(505).then((()=>()=>w(5505))))),923:()=>c("default","@postman-app-next/error-handling",(()=>Promise.all([w.e(607),w.e(304),w.e(609),w.e(730)]).then((()=>()=>w(730))))),4025:()=>c("default","@postman-app-next/ui",(()=>Promise.all([w.e(723),w.e(490),w.e(254)]).then((()=>()=>w(2490))))),4836:()=>c("default","@postman-app-next/sentry",(()=>Promise.all([w.e(607),w.e(304),w.e(32)]).then((()=>()=>w(3032))))),607:()=>p("default","react-router-dom",[4,6,11,2],(()=>w.e(591).then((()=>()=>w(6591))))),5304:()=>p("default","@sentry/react",[1,7,49,0],(()=>w.e(500).then((()=>()=>w(7500))))),609:()=>p("default","react-error-boundary",[1,4,0,4],(()=>w.e(537).then((()=>()=>w(2955))))),3723:()=>p("default","clsx",[1,1,2,1],(()=>w.e(277).then((()=>()=>w(6277))))),7569:()=>p("default","react-draggable",[1,4,4,5],(()=>w.e(327).then((()=>()=>w(1327))))),8851:()=>p("default","mobx-react",[1,7,6,0],(()=>w.e(7).then((()=>()=>w(8007))))),8722:()=>p("default","uuid",[1,8,3,2],(()=>w.e(836).then((()=>()=>w(9304)))))},b={229:[2229],286:[4302,5577,5892],304:[5304],490:[7569,8851],517:[1730],540:[540],607:[607],609:[609],722:[8722],723:[3723],792:[923,4025,4836]},w.f.consumes=(e,t)=>{w.o(b,e)&&b[e].forEach((e=>{if(w.o(h,e))return t.push(h[e]);var r=t=>{h[e]=0,w.m[e]=r=>{delete w.c[e],r.exports=t()}},a=t=>{delete h[e],w.m[e]=r=>{throw delete w.c[e],t}};try{var n=m[e]();n.then?t.push(h[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},v=e=>new Promise(((t,r)=>{var a=w.miniCssF(e),n=w.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(d=r[a]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(n===e||n===t))return d}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var d;if((n=(d=o[a]).getAttribute("data-href"))===e||n===t)return d}})(a,n))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var d=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=d,i.request=l,n.parentNode.removeChild(n),a(i)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),g={179:0},w.f.miniCss=(e,t)=>{g[e]?t.push(g[e]):0!==g[e]&&{254:1,376:1,792:1}[e]&&t.push(g[e]=v(e).then((()=>{g[e]=0}),(t=>{throw delete g[e],t})))},(()=>{var e={179:0};w.f.j=(t,r)=>{var a=w.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(2(29|54|86)|60[79]|72[23]|304|376|517|540)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=w.p+w.u(t),d=new Error;w.l(o,(r=>{if(w.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,d,l]=r,i=0;if(o.some((t=>0!==e[t]))){for(a in d)w.o(d,a)&&(w.m[a]=d[a]);l&&l(w)}for(t&&t(r);i<o.length;i++)n=o[i],w.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkvscode_auth=self.webpackChunkvscode_auth||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),w.nc=void 0,w(3078),w(629)})();
//# sourceMappingURL=main.a7fa50bd239d07ea.js.map