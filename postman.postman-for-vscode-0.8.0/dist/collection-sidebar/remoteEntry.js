var collection_sidebar;(()=>{"use strict";var e,t,a,r,n,o,l,d,i,s,f,c,p,u,h,m,b,v,g,y={3501:(e,t,a)=>{var r={"./CollectionSidebar":()=>Promise.all([a.e(8202),a.e(605),a.e(4438),a.e(540),a.e(1730),a.e(5892),a.e(2229),a.e(7082),a.e(607),a.e(8722),a.e(2932),a.e(3723),a.e(2723),a.e(916),a.e(4025),a.e(6081),a.e(5837),a.e(3274),a.e(877)]).then((()=>()=>a(5650)))},n=(e,t)=>(a.R=t,t=a.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),a.R=void 0,t),o=(e,t)=>{if(a.S){var r="default",n=a.S[r];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return a.S[r]=e,a.I(r,t)}};a.d(t,{get:()=>n,init:()=>o}),function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};e.SENTRY_RELEASES=e.SENTRY_RELEASES||{},e.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2023-09-12.06-24"}}()}},x={};function P(e){var t=x[e];if(void 0!==t)return t.exports;var a=x[e]={id:e,loaded:!1,exports:{}};return y[e].call(a.exports,a,a.exports,P),a.loaded=!0,a.exports}P.m=y,P.c=x,P.amdO={},P.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return P.d(t,{a:t}),t},P.d=(e,t)=>{for(var a in t)P.o(t,a)&&!P.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((t,a)=>(P.f[a](e,t),t)),[])),P.u=e=>e+"."+{75:"c4e2160f9492f912",157:"3e14ee23554c4377",376:"1b4d597586b8f679",540:"76d5fba12094c4f3",605:"23a47ff7d47e7b17",607:"5cbcc4598d3204f4",686:"054754537ce44dc0",721:"995fde15cbd2dc78",730:"a791145807d86929",766:"72f70f86b1ffbcb7",770:"50faec2bd4169bf1",877:"f4da45a76823d236",916:"6815e6898f84af08",923:"8edd37b8da86aed8",1204:"243adc13a229bb22",1222:"47a0f8e9a9ee0d0e",1303:"fba2ed8c58d7740b",1327:"9d1728b9047d8c7e",1586:"acef3e4db960d935",1597:"8f80213635389b4b",1685:"1c777a6f8c41fa7b",1730:"4de087d41ef90190",2223:"872ef4c742320374",2229:"c555274320a13eea",2254:"c0e882b948f11798",2339:"3c610f0c98184790",2723:"51d8f7d95bf53cf6",2772:"b3a3e9f0029e8bd0",2784:"e86e23506202eaee",2932:"c432307cd21f15ce",2955:"428c24419fa2bd40",3274:"b98d88a95bfd266f",3723:"2186abc5d3cabf86",3911:"7809da79fb77eb0f",3980:"652f24146d5f9be7",4024:"f0af601d7031e040",4025:"dc9967a66044a3b2",4174:"b5de61089e8dd474",4302:"c2426b7ca615c208",4422:"65f3c793da716109",4438:"d91f0a2d60e1b320",4492:"5693372be3fd7c93",4803:"4574a804f7ddd1cd",4810:"358c97cef858a531",4958:"04c1ae95a243e9f5",5348:"4728b95591011ec2",5505:"8b00bb4f0be0b8bf",5624:"a2a422339e640dc8",5837:"766c664bf1865a90",5882:"846909ebd5defc47",5892:"43e308267f996fdc",6081:"c8d4dbcd4428f4c7",6277:"45dc7f6a3146f753",6353:"a5df831eef2ac872",6371:"6f0f1ace2c1408fa",6462:"30e64a2b315f5902",6591:"0bd0ba64a95cc1d8",6686:"00ccde7def0ba6f9",6776:"ce88c8f1384b2d35",6983:"dcecdc3a30320c71",7067:"97cd471d7acb0db1",7082:"ba33d090bbfa6e9e",7494:"60b26e3bd783a256",7500:"e3e5898ed1ee69e4",7617:"02785fb7818d4539",7688:"d92b0f61b15cd74a",7768:"cd394ba6aead3915",7864:"5f6bc18109839a9f",7908:"e6541fca794fb2ec",8013:"586356e1d5edc919",8079:"08aebc9da2f5c56b",8107:"f11aa7855056c163",8202:"0fbb13460fe4f9d7",8210:"5095082be119cf17",8316:"8e7981c88a8bc719",8320:"3d2125e78539e1a0",8495:"3e14add9fb548f83",8535:"fb9b6d75786e8485",8537:"c5c8dd42f1100d5a",8609:"d9d7f331a8d1b71a",8665:"c2ed08767c0434f0",8722:"37e4ffd92982eedb",8864:"ec81efe1d1274e8e",9239:"dd204b8ac28ad999",9304:"382af98d4a8cb5ec",9543:"d33565f9084f8101",9605:"0e85111738661dd0",9721:"2224985832d55ee7",9806:"0ca0444e863489de"}[e]+".js",P.miniCssF=e=>e+"."+{376:"2d1b534e352b17b8",877:"1ff0e295d4faf2ea",2254:"2d1b534e352b17b8"}[e]+".css",P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),P.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="collection-sidebar:",P.l=(a,r,n,o)=>{if(e[a])e[a].push(r);else{var l,d;if(void 0!==n)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var f=i[s];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==t+n){l=f;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,P.nc&&l.setAttribute("nonce",P.nc),l.setAttribute("data-webpack",t+n),l.src=a),e[a]=[r];var c=(t,r)=>{l.onerror=l.onload=null,clearTimeout(p);var n=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),d&&document.head.appendChild(l)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{P.S={};var e={},t={};P.I=(a,r)=>{r||(r=[]);var n=t[a];if(n||(n=t[a]={}),!(r.indexOf(n)>=0)){if(r.push(n),e[a])return e[a];P.o(P.S,a)||(P.S[a]={});var o=P.S[a],l="collection-sidebar",d=(e,t,a,r)=>{var n=o[e]=o[e]||{},d=n[t];(!d||!d.loaded&&(!r!=!d.eager?r:l>d.from))&&(n[t]={get:a,from:l,eager:!!r})},i=[];return"default"===a&&(d("@postman-app-next/analytics-service","0.0.0",(()=>Promise.all([P.e(4302),P.e(721)]).then((()=>()=>P(721))))),d("@postman-app-next/auth","0.0.0",(()=>P.e(9806).then((()=>()=>P(9806))))),d("@postman-app-next/collection-service","0.0.0",(()=>Promise.all([P.e(540),P.e(8722),P.e(4958),P.e(8079),P.e(4025),P.e(1303)]).then((()=>()=>P(1303))))),d("@postman-app-next/data-fetching","0.0.0",(()=>Promise.all([P.e(540),P.e(4302),P.e(7864),P.e(8013)]).then((()=>()=>P(8013))))),d("@postman-app-next/desktop-communication-sdk","0.0.0",(()=>P.e(6983).then((()=>()=>P(6983))))),d("@postman-app-next/dialogs","0.0.0",(()=>Promise.all([P.e(8202),P.e(605),P.e(5348),P.e(540),P.e(4302),P.e(1730),P.e(5892),P.e(2229),P.e(7082),P.e(8107)]).then((()=>()=>P(3911))))),d("@postman-app-next/error-handling","0.0.0",(()=>Promise.all([P.e(8202),P.e(157),P.e(540),P.e(4302),P.e(1730),P.e(5892),P.e(2229),P.e(7082),P.e(607),P.e(2772),P.e(5624)]).then((()=>()=>P(730))))),d("@postman-app-next/inline-editor","0.0.0",(()=>Promise.all([P.e(540),P.e(5892),P.e(4174)]).then((()=>()=>P(4174))))),d("@postman-app-next/navigation","0.0.0",(()=>Promise.all([P.e(540),P.e(4302),P.e(607),P.e(9605),P.e(8535)]).then((()=>()=>P(8535))))),d("@postman-app-next/network","0.0.0",(()=>Promise.all([P.e(540),P.e(4302),P.e(923),P.e(4810),P.e(8320),P.e(4492)]).then((()=>()=>P(8320))))),d("@postman-app-next/performance-utils","0.0.0",(()=>Promise.all([P.e(540),P.e(8722),P.e(5837),P.e(9239)]).then((()=>()=>P(1597))))),d("@postman-app-next/storage","0.0.0",(()=>Promise.all([P.e(540),P.e(4302),P.e(4810),P.e(4422)]).then((()=>()=>P(4422))))),d("@postman-app-next/ui","0.0.0",(()=>Promise.all([P.e(8202),P.e(605),P.e(157),P.e(540),P.e(4302),P.e(1730),P.e(5892),P.e(2229),P.e(7082),P.e(3723),P.e(5882),P.e(2254)]).then((()=>()=>P(5882))))),d("@postman-app-next/variable-session","0.0.0",(()=>P.e(7494).then((()=>()=>P(7494))))),d("@postman-app-next/vscode-utils","0.0.0",(()=>Promise.all([P.e(540),P.e(607),P.e(8722),P.e(770)]).then((()=>()=>P(770))))),d("@postman-app-next/workspace-service","0.0.0",(()=>Promise.all([P.e(540),P.e(4302),P.e(607),P.e(4958),P.e(8079),P.e(6081),P.e(766)]).then((()=>()=>P(766))))),d("@postman/aether-design-tokens","1.2.0",(()=>P.e(6462).then((()=>()=>P(6462))))),d("@sentry/react","7.49.0",(()=>Promise.all([P.e(7500),P.e(540)]).then((()=>()=>P(7500))))),d("@tanstack/react-query-devtools","4.29.5",(()=>P.e(2223).then((()=>()=>P(2223))))),d("@tanstack/react-query","4.29.5",(()=>Promise.all([P.e(8609),P.e(540)]).then((()=>()=>P(8609))))),d("@tippyjs/react","4.2.0",(()=>Promise.all([P.e(9721),P.e(540),P.e(1730)]).then((()=>()=>P(9721))))),d("clsx","1.2.1",(()=>P.e(6277).then((()=>()=>P(6277))))),d("eventemitter3","5.0.0",(()=>P.e(686).then((()=>()=>P(686))))),d("immer","10.0.2",(()=>P.e(7067).then((()=>()=>P(7067))))),d("mobx-react-lite","3.4.3",(()=>Promise.all([P.e(540),P.e(1730),P.e(2932),P.e(6776)]).then((()=>()=>P(6776))))),d("mobx-react","7.6.0",(()=>Promise.all([P.e(8495),P.e(540),P.e(2932),P.e(916)]).then((()=>()=>P(8495))))),d("mobx","6.6.2",(()=>P.e(75).then((()=>()=>P(75))))),d("prop-types","15.8.1",(()=>P.e(3980).then((()=>()=>P(3980))))),d("react-dom","16.14.0",(()=>Promise.all([P.e(8316),P.e(540)]).then((()=>()=>P(8316))))),d("react-draggable","4.4.5",(()=>Promise.all([P.e(1327),P.e(540),P.e(1730),P.e(2229),P.e(3723)]).then((()=>()=>P(1327))))),d("react-error-boundary","4.0.10",(()=>Promise.all([P.e(540),P.e(2955)]).then((()=>()=>P(2955))))),d("react-router-dom","6.11.2",(()=>Promise.all([P.e(6591),P.e(540)]).then((()=>()=>P(6591))))),d("react-virtualized-auto-sizer","1.0.7",(()=>Promise.all([P.e(540),P.e(7688)]).then((()=>()=>P(7688))))),d("react-window","1.8.8",(()=>Promise.all([P.e(1586),P.e(540),P.e(1204)]).then((()=>()=>P(1586))))),d("react","16.14.0",(()=>P.e(2784).then((()=>()=>P(2784))))),d("rxjs/operators","7.8.1",(()=>Promise.all([P.e(6686),P.e(4803)]).then((()=>()=>P(4803))))),d("rxjs","7.8.1",(()=>Promise.all([P.e(6686),P.e(8210)]).then((()=>()=>P(8210))))),d("shallowequal","1.1.0",(()=>P.e(8665).then((()=>()=>P(8665))))),d("socket.io-client","2.5.0",(()=>Promise.all([P.e(7768),P.e(8864)]).then((()=>()=>P(7768))))),d("styled-components","5.3.6",(()=>Promise.all([P.e(5505),P.e(540),P.e(2723)]).then((()=>()=>P(5505))))),d("ua-parser-js","1.0.33",(()=>P.e(6353).then((()=>()=>P(6353))))),d("uuid","8.3.2",(()=>P.e(9304).then((()=>()=>P(9304))))),d("web-vitals","3.0.4",(()=>P.e(9543).then((()=>()=>P(9543)))))),e[a]=i.length?Promise.all(i).then((()=>e[a]=1)):1}}})(),(()=>{var e;P.g.importScripts&&(e=P.g.location+"");var t=P.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),P.p=e})(),a=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=a[1]?t(a[1]):[];return a[2]&&(r.length++,r.push.apply(r,t(a[2]))),a[3]&&(r.push([]),r.push.apply(r,t(a[3]))),r},r=(e,t)=>{e=a(e),t=a(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var l=t[r],d=(typeof l)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;r++}},n=e=>{var t=e[0],a="";if(1===e.length)return"*";if(t+.5){a+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var r=1,o=1;o<e.length;o++)r--,a+="u"==(typeof(d=e[o]))[0]?"-":(r>0?".":"")+(r=2,d);return a}var l=[];for(o=1;o<e.length;o++){var d=e[o];l.push(0===d?"not("+i()+")":1===d?"("+i()+" || "+i()+")":2===d?l.pop()+" "+l.pop():n(d))}return i();function i(){return l.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=a(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var l=0,d=1,i=!0;;d++,l++){var s,f,c=d<e.length?(typeof e[d])[0]:"";if(l>=t.length||"o"==(f=(typeof(s=t[l]))[0]))return!i||("u"==c?d>r&&!n:""==c!=n);if("u"==f){if(!i||"u"!=c)return!1}else if(i)if(c==f)if(d<=r){if(s!=e[d])return!1}else{if(n?s>e[d]:s<e[d])return!1;s!=e[d]&&(i=!1)}else if("s"!=c&&"n"!=c){if(n||d<=r)return!1;i=!1,d--}else{if(d<=r||f<c!=n)return!1;i=!1}else"s"!=c&&"n"!=c&&(i=!1,d--)}}var p=[],u=p.pop.bind(p);for(l=1;l<e.length;l++){var h=e[l];p.push(1==h?u()|u():2==h?u()&u():h?o(h,t):!u())}return!!u()},l=(e,t)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&a[t]},d=(e,t)=>{var a=e[t];return Object.keys(a).reduce(((e,t)=>!e||!a[e].loaded&&r(e,t)?t:e),0)},i=(e,t,a,r)=>"Unsatisfied version "+a+" from "+(a&&e[t][a].from)+" of shared singleton module "+t+" (required "+n(r)+")",s=(e,t,a,r)=>{var n=d(e,a);if(!o(r,n))throw new Error(i(e,a,n,r));return f(e[a][n])},f=e=>(e.loaded=1,e.get()),p=(c=e=>function(t,a,r,n){var o=P.I(t);return o&&o.then?o.then(e.bind(e,t,P.S[t],a,r,n)):e(t,P.S[t],a,r,n)})(((e,t,a,r)=>t&&P.o(t,a)?f(l(t,a)):r())),u=c(((e,t,a,r,n)=>t&&P.o(t,a)?s(t,0,a,r):n())),h={},m={4302:()=>p("default","@postman-app-next/vscode-utils",(()=>Promise.all([P.e(540),P.e(607),P.e(8722),P.e(770)]).then((()=>()=>P(770))))),4515:()=>u("default","ua-parser-js",[1,1,0,33],(()=>P.e(6353).then((()=>()=>P(6353))))),6468:()=>u("default","web-vitals",[1,3,0,4],(()=>P.e(9543).then((()=>()=>P(9543))))),540:()=>u("default","react",[4,16,14,0],(()=>P.e(2784).then((()=>()=>P(2784))))),8722:()=>u("default","uuid",[1,8,3,2],(()=>P.e(9304).then((()=>()=>P(9304))))),4958:()=>p("default","@postman-app-next/data-fetching",(()=>Promise.all([P.e(4302),P.e(7864),P.e(1685)]).then((()=>()=>P(8013))))),8079:()=>p("default","@postman-app-next/network",(()=>Promise.all([P.e(4302),P.e(923),P.e(4810),P.e(8320)]).then((()=>()=>P(8320))))),4025:()=>p("default","@postman-app-next/ui",(()=>Promise.all([P.e(8202),P.e(605),P.e(157),P.e(4302),P.e(1730),P.e(5892),P.e(2229),P.e(7082),P.e(3723),P.e(5882),P.e(376)]).then((()=>()=>P(5882))))),3154:()=>p("default","@postman-app-next/variable-session",(()=>P.e(7494).then((()=>()=>P(7494))))),5193:()=>u("default","immer",[1,10,0,2],(()=>P.e(7067).then((()=>()=>P(7067))))),2600:()=>u("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>P.e(2223).then((()=>()=>P(2223))))),4527:()=>u("default","@tanstack/react-query",[1,4,29,1],(()=>P.e(8609).then((()=>()=>P(8609))))),1730:()=>u("default","react-dom",[4,16,14,0],(()=>P.e(8316).then((()=>()=>P(8316))))),5892:()=>u("default","styled-components",[4,5,3,6],(()=>Promise.all([P.e(5505),P.e(2723)]).then((()=>()=>P(5505))))),2229:()=>u("default","prop-types",[1,15,8,1],(()=>P.e(3980).then((()=>()=>P(3980))))),5577:()=>u("default","@postman/aether-design-tokens",[1,1,2,0],(()=>P.e(7908).then((()=>()=>P(6462))))),5626:()=>u("default","@tippyjs/react",[1,4,2,0],(()=>P.e(9721).then((()=>()=>P(9721))))),607:()=>u("default","react-router-dom",[4,6,11,2],(()=>P.e(6591).then((()=>()=>P(6591))))),6230:()=>u("default","@sentry/react",[1,7,49,0],(()=>P.e(7500).then((()=>()=>P(7500))))),609:()=>u("default","react-error-boundary",[1,4,0,4],(()=>P.e(8537).then((()=>()=>P(2955))))),9605:()=>p("default","@postman-app-next/desktop-communication-sdk",(()=>P.e(6983).then((()=>()=>P(6983))))),923:()=>p("default","@postman-app-next/error-handling",(()=>Promise.all([P.e(8202),P.e(157),P.e(4302),P.e(1730),P.e(5892),P.e(2229),P.e(7082),P.e(607),P.e(2772),P.e(730)]).then((()=>()=>P(730))))),4810:()=>p("default","@postman-app-next/auth",(()=>P.e(9806).then((()=>()=>P(9806))))),1801:()=>u("default","socket.io-client",[1,2,1,1],(()=>Promise.all([P.e(7768),P.e(8864)]).then((()=>()=>P(7768))))),4021:()=>u("default","rxjs",[1,7,8,1],(()=>Promise.all([P.e(6686),P.e(8210)]).then((()=>()=>P(8210))))),4475:()=>u("default","eventemitter3",[1,5,0,0],(()=>P.e(686).then((()=>()=>P(686))))),8160:()=>u("default","rxjs/operators",[1,7,8,1],(()=>Promise.all([P.e(6686),P.e(4803)]).then((()=>()=>P(4803))))),5837:()=>p("default","@postman-app-next/analytics-service",(()=>Promise.all([P.e(4302),P.e(721)]).then((()=>()=>P(721))))),3723:()=>u("default","clsx",[1,1,2,1],(()=>P.e(6277).then((()=>()=>P(6277))))),7569:()=>u("default","react-draggable",[1,4,4,5],(()=>P.e(1327).then((()=>()=>P(1327))))),8851:()=>u("default","mobx-react",[1,7,6,0],(()=>Promise.all([P.e(8495),P.e(2932),P.e(916)]).then((()=>()=>P(8495))))),747:()=>p("default","@postman-app-next/storage",(()=>Promise.all([P.e(540),P.e(4302),P.e(4810),P.e(4422)]).then((()=>()=>P(4422))))),6081:()=>p("default","@postman-app-next/navigation",(()=>Promise.all([P.e(4302),P.e(9605),P.e(1222)]).then((()=>()=>P(8535))))),2932:()=>u("default","mobx",[1,6,6,2],(()=>P.e(75).then((()=>()=>P(75))))),916:()=>u("default","mobx-react-lite",[1,3,4,3],(()=>Promise.all([P.e(1730),P.e(4024)]).then((()=>()=>P(6776))))),2723:()=>u("default","shallowequal",[1,1,1,0],(()=>P.e(8665).then((()=>()=>P(8665))))),949:()=>u("default","react-window",[1,1,8,8],(()=>P.e(1586).then((()=>()=>P(1586))))),3401:()=>p("default","@postman-app-next/inline-editor",(()=>P.e(7617).then((()=>()=>P(4174))))),3587:()=>u("default","react-virtualized-auto-sizer",[1,1,0,7],(()=>P.e(2339).then((()=>()=>P(7688))))),3720:()=>p("default","@postman-app-next/performance-utils",(()=>P.e(1597).then((()=>()=>P(1597))))),4181:()=>p("default","@postman-app-next/collection-service",(()=>Promise.all([P.e(4958),P.e(8079),P.e(1303)]).then((()=>()=>P(1303))))),7363:()=>p("default","@postman-app-next/dialogs",(()=>Promise.all([P.e(5348),P.e(4302),P.e(3911)]).then((()=>()=>P(3911))))),9972:()=>p("default","@postman-app-next/workspace-service",(()=>Promise.all([P.e(4302),P.e(4958),P.e(8079),P.e(6371)]).then((()=>()=>P(766)))))},b={540:[540],607:[607],721:[4515,6468],916:[916],923:[923],1303:[3154,5193],1730:[1730],2229:[2229],2723:[2723],2772:[6230,609],2932:[2932],3274:[949,3401,3587,3720,4181,7363,9972],3723:[3723],4025:[4025],4302:[4302],4810:[4810],4958:[4958],5837:[5837],5882:[7569,8851],5892:[5892],6081:[6081],7082:[5577,5626],7494:[747],7864:[2600,4527],8079:[8079],8320:[1801,4021,4475,8160],8722:[8722],9605:[9605]},P.f.consumes=(e,t)=>{P.o(b,e)&&b[e].forEach((e=>{if(P.o(h,e))return t.push(h[e]);var a=t=>{h[e]=0,P.m[e]=a=>{delete P.c[e],a.exports=t()}},r=t=>{delete h[e],P.m[e]=a=>{throw delete P.c[e],t}};try{var n=m[e]();n.then?t.push(h[e]=n.then(a).catch(r)):a(n)}catch(e){r(e)}}))},v=e=>new Promise(((t,a)=>{var r=P.miniCssF(e),n=P.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=(l=a[r]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===t))return l}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var l;if((n=(l=o[r]).getAttribute("data-href"))===e||n===t)return l}})(r,n))return t();((e,t,a,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)a();else{var l=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=l,i.request=d,n.parentNode.removeChild(n),r(i)}},n.href=t,document.head.appendChild(n)})(e,n,t,a)})),g={4341:0},P.f.miniCss=(e,t)=>{g[e]?t.push(g[e]):0!==g[e]&&{376:1,877:1,2254:1}[e]&&t.push(g[e]=v(e).then((()=>{g[e]=0}),(t=>{throw delete g[e],t})))},(()=>{var e={4341:0};P.f.j=(t,a)=>{var r=P.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(2(229|254|723|772|932)|37(23|6)|4(025|302|810|958)|5(40|837|892)|60(7|81)|9(16|23|605)|1730|7082|7864|8079|8722)$/.test(t))e[t]=0;else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var o=P.p+P.u(t),l=new Error;P.l(o,(a=>{if(P.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}}),"chunk-"+t,t)}};var t=(t,a)=>{var r,n,[o,l,d]=a,i=0;if(o.some((t=>0!==e[t]))){for(r in l)P.o(l,r)&&(P.m[r]=l[r]);d&&d(P)}for(t&&t(a);i<o.length;i++)n=o[i],P.o(e,n)&&e[n]&&e[n][0](),e[n]=0},a=self.webpackChunkcollection_sidebar=self.webpackChunkcollection_sidebar||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),P.nc=void 0;var w=P(3501);collection_sidebar=w})();
//# sourceMappingURL=remoteEntry.js.map