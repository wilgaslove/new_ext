var context_bar;(()=>{"use strict";var e,t,r,a,n,o,i,l,f,d,s,c,u,p,h,b,m,v,g,y={6326:(e,t,r)=>{var a={"./ContextBar":()=>Promise.all([r.e(151),r.e(540),r.e(517),r.e(607),r.e(229),r.e(427),r.e(25),r.e(650)]).then((()=>()=>r(5650)))},n=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var a="default",n=r.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[a]=e,r.I(a,t)}};r.d(t,{get:()=>n,init:()=>o}),function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};e.SENTRY_RELEASES=e.SENTRY_RELEASES||{},e.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2023-09-12.06-24"}}()}},w={};function x(e){var t=w[e];if(void 0!==t)return t.exports;var r=w[e]={id:e,loaded:!1,exports:{}};return y[e].call(r.exports,r,r.exports,x),r.loaded=!0,r.exports}x.m=y,x.c=w,x.amdO={},x.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return x.d(t,{a:t}),t},x.d=(e,t)=>{for(var r in t)x.o(t,r)&&!x.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},x.f={},x.e=e=>Promise.all(Object.keys(x.f).reduce(((t,r)=>(x.f[r](e,t),t)),[])),x.u=e=>e+"."+{7:"6c1af4834998639a",13:"4a351f67db71705f",25:"0f6a070407342fd7",136:"ec3574464eda4420",151:"93ce2b376e929f9c",223:"fc2e987be3f819c8",229:"0e3d3cc18c8820dd",254:"5dcc8dc8bce26118",277:"80541e8cfdffbc82",302:"7f9d856bbe6cff60",304:"48792a123c707465",316:"95b523004f5bc222",327:"b8f75764e5da4c03",353:"06baf4787b22884f",376:"5a674ce56e2a4bdf",427:"f4d0aa16ee3f7892",431:"2dbcb56c5700814e",438:"1a10834836b3d992",460:"0ff7404f0a88dc6a",462:"f0ac0b046034c69e",473:"7145d35e40c012c0",500:"23b941b48207a1c2",505:"04f5a909868ad784",517:"798fbaf5422b5c76",537:"8f6ffc8e4f7e1a7b",540:"501e0d76604e1f98",543:"de6ea6826fdd183b",591:"a2b32963a98e427b",607:"54f213198bab591f",609:"a3ea424c51588fef",650:"396aba111894454b",660:"932689ca093127af",722:"9e4162f3a31fe3e1",723:"5f2abe9c4908424a",730:"401a3916deff9c52",770:"e367418866726ccd",772:"19841e9378f1348b",784:"648d0c95ff9cb0c9",864:"8a9751080a5399f2",908:"73a4080912dc2ec8",947:"8c2614f700ff4042",955:"faf8dbce6e72de57",980:"d28c3bffa352b477"}[e]+".js",x.miniCssF=e=>e+"."+{254:"c85e5fe424137309",376:"c85e5fe424137309"}[e]+".css",x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),x.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),x.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="context-bar:",x.l=(r,a,n,o)=>{if(e[r])e[r].push(a);else{var i,l;if(void 0!==n)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var s=f[d];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+n){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,x.nc&&i.setAttribute("nonce",x.nc),i.setAttribute("data-webpack",t+n),i.src=r),e[r]=[a];var c=(t,a)=>{i.onerror=i.onload=null,clearTimeout(u);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),t)return t(a)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},x.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{x.S={};var e={},t={};x.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];x.o(x.S,r)||(x.S[r]={});var o=x.S[r],i="context-bar",l=(e,t,r,a)=>{var n=o[e]=o[e]||{},l=n[t];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(n[t]={get:r,from:i,eager:!!a})},f=[];return"default"===r&&(l("@postman-app-next/analytics-service","0.0.0",(()=>Promise.all([x.e(302),x.e(136),x.e(660)]).then((()=>()=>x(2660))))),l("@postman-app-next/data-fetching","0.0.0",(()=>Promise.all([x.e(540),x.e(302),x.e(864),x.e(13)]).then((()=>()=>x(8013))))),l("@postman-app-next/error-handling","0.0.0",(()=>Promise.all([x.e(151),x.e(460),x.e(431),x.e(540),x.e(302),x.e(517),x.e(607),x.e(229),x.e(427),x.e(772),x.e(730)]).then((()=>()=>x(730))))),l("@postman-app-next/ui","0.0.0",(()=>Promise.all([x.e(151),x.e(460),x.e(431),x.e(947),x.e(540),x.e(302),x.e(517),x.e(229),x.e(427),x.e(723),x.e(438),x.e(254)]).then((()=>()=>x(7438))))),l("@postman-app-next/vscode-utils","0.0.0",(()=>Promise.all([x.e(540),x.e(607),x.e(722),x.e(473)]).then((()=>()=>x(770))))),l("@postman/aether-design-tokens","1.2.0",(()=>x.e(462).then((()=>()=>x(6462))))),l("@sentry/react","7.49.0",(()=>Promise.all([x.e(500),x.e(540)]).then((()=>()=>x(7500))))),l("@tanstack/react-query-devtools","4.29.5",(()=>x.e(223).then((()=>()=>x(2223))))),l("@tanstack/react-query","4.29.5",(()=>Promise.all([x.e(609),x.e(540)]).then((()=>()=>x(8609))))),l("clsx","1.2.1",(()=>x.e(277).then((()=>()=>x(6277))))),l("mobx-react","7.6.0",(()=>Promise.all([x.e(7),x.e(540),x.e(517)]).then((()=>()=>x(8007))))),l("prop-types","15.8.1",(()=>x.e(980).then((()=>()=>x(3980))))),l("react-dom","16.14.0",(()=>Promise.all([x.e(316),x.e(540)]).then((()=>()=>x(8316))))),l("react-draggable","4.4.5",(()=>Promise.all([x.e(327),x.e(540),x.e(517),x.e(229),x.e(723)]).then((()=>()=>x(1327))))),l("react-error-boundary","4.0.10",(()=>Promise.all([x.e(540),x.e(955)]).then((()=>()=>x(2955))))),l("react-router-dom","6.11.2",(()=>Promise.all([x.e(591),x.e(540)]).then((()=>()=>x(6591))))),l("react","16.14.0",(()=>x.e(784).then((()=>()=>x(2784))))),l("styled-components","5.3.6",(()=>Promise.all([x.e(505),x.e(540)]).then((()=>()=>x(5505))))),l("ua-parser-js","1.0.33",(()=>x.e(353).then((()=>()=>x(6353))))),l("uuid","8.3.2",(()=>x.e(304).then((()=>()=>x(9304))))),l("web-vitals","3.0.4",(()=>x.e(543).then((()=>()=>x(9543)))))),e[r]=f.length?Promise.all(f).then((()=>e[r]=1)):1}}})(),(()=>{var e;x.g.importScripts&&(e=x.g.location+"");var t=x.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var n=e[a],o=(typeof n)[0];if(a>=t.length)return"u"==o;var i=t[a],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,r+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return r}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+f()+")":1===l?"("+f()+" || "+f()+")":2===l?i.pop()+" "+i.pop():n(l))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=r(t);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,l=1,f=!0;;l++,i++){var d,s,c=l<e.length?(typeof e[l])[0]:"";if(i>=t.length||"o"==(s=(typeof(d=t[i]))[0]))return!f||("u"==c?l>a&&!n:""==c!=n);if("u"==s){if(!f||"u"!=c)return!1}else if(f)if(c==s)if(l<=a){if(d!=e[l])return!1}else{if(n?d>e[l]:d<e[l])return!1;d!=e[l]&&(f=!1)}else if("s"!=c&&"n"!=c){if(n||l<=a)return!1;f=!1,l--}else{if(l<=a||s<c!=n)return!1;f=!1}else"s"!=c&&"n"!=c&&(f=!1,l--)}}var u=[],p=u.pop.bind(u);for(i=1;i<e.length;i++){var h=e[i];u.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},i=(e,t)=>{var r=e[t];return(t=Object.keys(r).reduce(((e,t)=>!e||a(e,t)?t:e),0))&&r[t]},l=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&a(e,t)?t:e),0)},f=(e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+n(a)+")",d=(e,t,r,a)=>{var n=l(e,r);if(!o(a,n))throw new Error(f(e,r,n,a));return s(e[r][n])},s=e=>(e.loaded=1,e.get()),u=(c=e=>function(t,r,a,n){var o=x.I(t);return o&&o.then?o.then(e.bind(e,t,x.S[t],r,a,n)):e(t,x.S[t],r,a,n)})(((e,t,r,a)=>t&&x.o(t,r)?s(i(t,r)):a())),p=c(((e,t,r,a,n)=>t&&x.o(t,r)?d(t,0,r,a):n())),h={},b={4302:()=>u("default","@postman-app-next/vscode-utils",(()=>Promise.all([x.e(540),x.e(607),x.e(722),x.e(770)]).then((()=>()=>x(770))))),4515:()=>p("default","ua-parser-js",[1,1,0,33],(()=>x.e(353).then((()=>()=>x(6353))))),6468:()=>p("default","web-vitals",[1,3,0,4],(()=>x.e(543).then((()=>()=>x(9543))))),540:()=>p("default","react",[4,16,14,0],(()=>x.e(784).then((()=>()=>x(2784))))),2600:()=>p("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>x.e(223).then((()=>()=>x(2223))))),4527:()=>p("default","@tanstack/react-query",[1,4,29,1],(()=>x.e(609).then((()=>()=>x(8609))))),1730:()=>p("default","react-dom",[4,16,14,0],(()=>x.e(316).then((()=>()=>x(8316))))),607:()=>p("default","react-router-dom",[4,6,11,2],(()=>x.e(591).then((()=>()=>x(6591))))),2229:()=>p("default","prop-types",[1,15,8,1],(()=>x.e(980).then((()=>()=>x(3980))))),5577:()=>p("default","@postman/aether-design-tokens",[1,1,2,0],(()=>x.e(908).then((()=>()=>x(6462))))),5892:()=>p("default","styled-components",[4,5,3,6],(()=>x.e(505).then((()=>()=>x(5505))))),5304:()=>p("default","@sentry/react",[1,7,49,0],(()=>x.e(500).then((()=>()=>x(7500))))),609:()=>p("default","react-error-boundary",[1,4,0,4],(()=>x.e(537).then((()=>()=>x(2955))))),3723:()=>p("default","clsx",[1,1,2,1],(()=>x.e(277).then((()=>()=>x(6277))))),7569:()=>p("default","react-draggable",[1,4,4,5],(()=>x.e(327).then((()=>()=>x(1327))))),8851:()=>p("default","mobx-react",[1,7,6,0],(()=>x.e(7).then((()=>()=>x(8007))))),8722:()=>p("default","uuid",[1,8,3,2],(()=>x.e(304).then((()=>()=>x(9304))))),4025:()=>u("default","@postman-app-next/ui",(()=>Promise.all([x.e(460),x.e(431),x.e(947),x.e(302),x.e(723),x.e(438),x.e(376)]).then((()=>()=>x(7438)))))},m={25:[4025],136:[4515,6468],229:[2229],302:[4302],427:[5577,5892],438:[7569,8851],517:[1730],540:[540],607:[607],722:[8722],723:[3723],772:[5304,609],864:[2600,4527]},x.f.consumes=(e,t)=>{x.o(m,e)&&m[e].forEach((e=>{if(x.o(h,e))return t.push(h[e]);var r=t=>{h[e]=0,x.m[e]=r=>{delete x.c[e],r.exports=t()}},a=t=>{delete h[e],x.m[e]=r=>{throw delete x.c[e],t}};try{var n=b[e]();n.then?t.push(h[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},v=e=>new Promise(((t,r)=>{var a=x.miniCssF(e),n=x.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(i=r[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var i;if((n=(i=o[a]).getAttribute("data-href"))===e||n===t)return i}})(a,n))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=l,n.parentNode.removeChild(n),a(f)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),g={578:0},x.f.miniCss=(e,t)=>{g[e]?t.push(g[e]):0!==g[e]&&{254:1,376:1}[e]&&t.push(g[e]=v(e).then((()=>{g[e]=0}),(t=>{throw delete g[e],t})))},(()=>{var e={578:0};x.f.j=(t,r)=>{var a=x.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(2(29|5|54)|7(22|23|72)|(42|51|60)7|136|302|376|540|864)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=x.p+x.u(t),i=new Error;x.l(o,(r=>{if(x.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,i,l]=r,f=0;if(o.some((t=>0!==e[t]))){for(a in i)x.o(i,a)&&(x.m[a]=i[a]);l&&l(x)}for(t&&t(r);f<o.length;f++)n=o[f],x.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkcontext_bar=self.webpackChunkcontext_bar||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),x.nc=void 0;var E=x(6326);context_bar=E})();
//# sourceMappingURL=remoteEntry.js.map