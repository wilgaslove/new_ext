(()=>{var e,t,r,a,n,o,s={234:(e,t,r)=>{"use strict";r(9307),performance&&performance.mark&&performance.mark("http-workbench-init"),Promise.all([r.e(9460),r.e(1125),r.e(540),r.e(1730),r.e(607),r.e(2229),r.e(6242),r.e(4958),r.e(5837),r.e(9972),r.e(923),r.e(5695),r.e(4388)]).then(r.bind(r,4623))},9307:(e,t,r)=>{r.p=window.BASE_URL_PREFIX?`${window.BASE_URL_PREFIX}/workbench/`:""},3078:(e,t,r)=>{var a="undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};a.SENTRY_RELEASE={id:"prod.2023-09-12.06-24"},a.SENTRY_RELEASES=a.SENTRY_RELEASES||{},a.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2023-09-12.06-24"}},946:(e,t,r)=>{"use strict";var a=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof collection_workbench)return e();r.l(window.BASE_URL_PREFIX+"/collection-workbench/remoteEntry.js",(r=>{if("undefined"!=typeof collection_workbench)return e();var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading script failed.\n("+n+": "+o+")",a.name="ScriptExternalLoadError",a.type=n,a.request=o,t(a)}),"collection_workbench")})).then((()=>collection_workbench))},3544:(e,t,r)=>{"use strict";var a=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof environment_workbench)return e();r.l(window.BASE_URL_PREFIX+"/environment-workbench/remoteEntry.js",(r=>{if("undefined"!=typeof environment_workbench)return e();var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading script failed.\n("+n+": "+o+")",a.name="ScriptExternalLoadError",a.type=n,a.request=o,t(a)}),"environment_workbench")})).then((()=>environment_workbench))},865:(e,t,r)=>{"use strict";var a=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof folder_workbench)return e();r.l(window.BASE_URL_PREFIX+"/folder-workbench/remoteEntry.js",(r=>{if("undefined"!=typeof folder_workbench)return e();var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading script failed.\n("+n+": "+o+")",a.name="ScriptExternalLoadError",a.type=n,a.request=o,t(a)}),"folder_workbench")})).then((()=>folder_workbench))},2070:(e,t,r)=>{"use strict";var a=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof grpc_workbench)return e();r.l(window.BASE_URL_PREFIX+"/grpc-workbench/remoteEntry.js",(r=>{if("undefined"!=typeof grpc_workbench)return e();var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading script failed.\n("+n+": "+o+")",a.name="ScriptExternalLoadError",a.type=n,a.request=o,t(a)}),"grpc_workbench")})).then((()=>grpc_workbench))},6669:(e,t,r)=>{"use strict";var a=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof http_response_workbench)return e();r.l(window.BASE_URL_PREFIX+"/http-response-workbench/remoteEntry.js",(r=>{if("undefined"!=typeof http_response_workbench)return e();var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading script failed.\n("+n+": "+o+")",a.name="ScriptExternalLoadError",a.type=n,a.request=o,t(a)}),"http_response_workbench")})).then((()=>http_response_workbench))},3595:(e,t,r)=>{"use strict";var a=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof http_workbench)return e();r.l(window.BASE_URL_PREFIX+"/http-workbench/remoteEntry.js",(r=>{if("undefined"!=typeof http_workbench)return e();var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading script failed.\n("+n+": "+o+")",a.name="ScriptExternalLoadError",a.type=n,a.request=o,t(a)}),"http_workbench")})).then((()=>http_workbench))},4184:(e,t,r)=>{"use strict";var a=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof oauth2_manage_tokens)return e();r.l(window.BASE_URL_PREFIX+"/oauth2-manage-tokens/remoteEntry.js",(r=>{if("undefined"!=typeof oauth2_manage_tokens)return e();var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading script failed.\n("+n+": "+o+")",a.name="ScriptExternalLoadError",a.type=n,a.request=o,t(a)}),"oauth2_manage_tokens")})).then((()=>oauth2_manage_tokens))},7907:(e,t,r)=>{"use strict";var a=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof ws_workbench)return e();r.l(window.BASE_URL_PREFIX+"/ws-workbench/remoteEntry.js",(r=>{if("undefined"!=typeof ws_workbench)return e();var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading script failed.\n("+n+": "+o+")",a.name="ScriptExternalLoadError",a.type=n,a.request=o,t(a)}),"ws_workbench")})).then((()=>ws_workbench))}},i={};function d(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return s[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=s,d.c=i,d.amdO={},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+"."+{75:"341bd1a0917422f0",264:"fc026a191e52936a",376:"273192c16970c6de",540:"c370583e8aca2e4f",607:"8add9621d52668be",609:"af12feaac363de91",686:"253e734ecf9f2b70",721:"f31db472ddbd8a1e",730:"4b51614e9cfff886",747:"662a29282757ac68",759:"5ab2909ed32eadb0",766:"98e8975f0dcd22ed",770:"f8311f946ec3f510",810:"d7c56f1176cea238",916:"451c4a85a3df0c04",923:"ebe0559dc081e6ae",1035:"1832c7d4ca8fe1cc",1125:"ce4a170bc425277c",1161:"d6240452aac0dc8f",1222:"20dcbea954bd51c3",1327:"3f923b07fc3fbfca",1577:"e467f87941965a55",1597:"3d72aa02e43c87b8",1617:"49e3ec9e874c5224",1685:"717a8d2d3b82ef09",1730:"3000fdf787724b07",2136:"b005ed8ca38cb888",2212:"4b911aa5ae502a18",2223:"95876403b2f8fd7f",2229:"8f2bc5e292ddd638",2254:"b71689a451484c57",2587:"318484e31ebe3f50",2674:"fce4bee8d10d1fc2",2723:"52b6174f39cd7a36",2784:"c7b9b25e8d28b09c",2902:"867db7485a3a0f95",2932:"d437d242aa85167d",2955:"6b9d678920851ebd",3288:"8fa89830166e7493",3723:"57a65b256c6e4f99",3813:"a302406238215189",3980:"5ab7ba29dc6807fb",4024:"78943aff26d925b7",4302:"0008a52b1de8dd2a",4350:"37adbf2625046aa9",4388:"340a9d7477e6f9e1",4422:"ead778c03d92bfeb",4803:"07c3b4ec887e3891",4810:"711d47e6096317b3",4958:"0a440258f1683131",5304:"3b8df0a42f145f8d",5505:"fa0d2394aa93033b",5624:"8da4ac752054ab33",5695:"2fac12616bd1e175",5731:"d2b0d9a0d645c9b1",5837:"8013b836051c96ee",6160:"665f14af9d61a262",6242:"c734022e38aef697",6277:"4306b328a8624290",6353:"905e061774b85f66",6371:"6a8d71734e7f6e84",6462:"6f6341abb9e42975",6591:"c88ebaa76fb9238a",6631:"2110dbdb33f8d63f",6686:"cb380ccf06bedbf3",6776:"d3665ba23d405942",6818:"988cb6fe4b729db7",6895:"e5a143088da6d621",6983:"b8b147fbadba2812",7155:"e34815b03d25aa07",7494:"226573a856b35ce7",7500:"8345a62a4b059947",7573:"9a883d7a5a6c68c1",7768:"8145dbe4e441774c",7864:"d64cb8e5e71882ab",7908:"764671c3f51e3be1",7913:"a69b20e1b097e3c1",8013:"7654fbc860655687",8183:"2bfb629685545111",8210:"adfb7980ec4c7c28",8316:"c26421dd50f71401",8320:"cc5753e7563cd1b0",8495:"09e6ed4c7e59a8ff",8535:"fad4e6c8f966e1ef",8537:"be857db766c81814",8609:"2cc62f28e9fb7822",8665:"1ea918a1b6b19bac",8670:"179d543389749977",8722:"05b32698acf43a69",8834:"3f9b6bfa409ec27d",8931:"c23e99af7d3017a1",9239:"0c93c47a21a9504c",9304:"ca3e23fc4c33df56",9315:"27861a72dbe871e0",9405:"9a54583978295213",9424:"b1712cd31e525bd1",9460:"d54adcb745ed0d9e",9503:"3b04e65e76165f54",9543:"5a713082c1a2c480",9605:"5078b62b675f6bc0",9717:"9f7048f260b29a61",9721:"fbca6beeb54b9c8b",9806:"6f99e4f25b8225af",9951:"e069bb422b7051e9",9972:"8c647b1735ef0959"}[e]+".js",d.miniCssF=e=>e+"."+{376:"2d1b534e352b17b8",2254:"2d1b534e352b17b8",4388:"b3a8ba77c4e2410e"}[e]+".css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="workbench:",d.l=(r,a,n,o)=>{if(e[r])e[r].push(a);else{var s,i;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+n){s=f;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.setAttribute("data-webpack",t+n),s.src=r),e[r]=[a];var p=(t,a)=>{s.onerror=s.onload=null,clearTimeout(u);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(a))),t)return t(a)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),i&&document.head.appendChild(s)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r={810:[4713],1035:[8668],1161:[7056],1577:[1577],2212:[5958],2587:[7425],3288:[7905],3813:[5665],4350:[4350],5731:[1891],7573:[7573],8931:[6671],9503:[2843],9717:[620]},a={620:["default","./CollectionWorkbench",946],1577:["default","./HttpWorkbench",3595],1891:["default","./HttpResponseWorkbench",6669],2843:["default","./Oauth2ManageTokens",4184],4350:["default","./WsWorkbench",7907],4713:["default","./GrpcHistoryRequestLoader",2070],5665:["default","./GlobalsWorkbench",3544],5958:["default","./WsNewRequestLoader",7907],6671:["default","./WsHistoryRequestLoader",7907],7056:["default","./HistoryRequestLoader",3595],7425:["default","./EnvironmentWorkbench",3544],7573:["default","./GrpcWorkbench",2070],7905:["default","./FolderWorkbench",865],8668:["default","./NewRequestLoader",3595]},d.f.remotes=(e,t)=>{d.o(r,e)&&r[e].forEach((e=>{var r=d.R;r||(r=[]);var n=a[e];if(!(r.indexOf(n)>=0)){if(r.push(n),n.p)return t.push(n.p);var o=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),d.m[e]=()=>{throw t},n.p=0},s=(e,r,a,s,i,d)=>{try{var l=e(r,a);if(!l||!l.then)return i(l,s,d);var c=l.then((e=>i(e,s)),o);if(!d)return c;t.push(n.p=c)}catch(e){o(e)}},i=(e,t,a)=>s(t.get,n[1],r,0,l,a),l=t=>{n.p=1,d.m[e]=e=>{e.exports=t()}};s(d,n[2],0,0,((e,t,r)=>e?s(d.I,n[0],0,e,i,r):o()),1)}}))},(()=>{d.S={};var e={},t={};d.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];d.o(d.S,r)||(d.S[r]={});var o=d.S[r],s="workbench",i=(e,t,r,a)=>{var n=o[e]=o[e]||{},i=n[t];(!i||!i.loaded&&(!a!=!i.eager?a:s>i.from))&&(n[t]={get:r,from:s,eager:!!a})},l=e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(t));var t};try{var n=d(e);if(!n)return;var o=e=>e&&e.init&&e.init(d.S[r],a);if(n.then)return c.push(n.then(o,t));var s=o(n);if(s&&s.then)return c.push(s.catch(t))}catch(e){t(e)}},c=[];return"default"===r&&(i("@postman-app-next/analytics-service","0.0.0",(()=>Promise.all([d.e(4302),d.e(2136),d.e(8183)]).then((()=>()=>d(721))))),i("@postman-app-next/auth","0.0.0",(()=>d.e(9806).then((()=>()=>d(9806))))),i("@postman-app-next/data-fetching","0.0.0",(()=>Promise.all([d.e(540),d.e(4302),d.e(7864),d.e(8013)]).then((()=>()=>d(8013))))),i("@postman-app-next/desktop-communication-sdk","0.0.0",(()=>d.e(6983).then((()=>()=>d(6983))))),i("@postman-app-next/environment-service","0.0.0",(()=>Promise.all([d.e(9460),d.e(1125),d.e(6818),d.e(1617),d.e(540),d.e(4302),d.e(1730),d.e(607),d.e(2229),d.e(6242),d.e(2932),d.e(4958),d.e(264),d.e(8722),d.e(5837),d.e(9972),d.e(747),d.e(7913)]).then((()=>()=>d(7913))))),i("@postman-app-next/error-handling","0.0.0",(()=>Promise.all([d.e(9460),d.e(1125),d.e(6160),d.e(540),d.e(4302),d.e(1730),d.e(607),d.e(2229),d.e(6242),d.e(5304),d.e(609),d.e(730)]).then((()=>()=>d(730))))),i("@postman-app-next/navigation","0.0.0",(()=>Promise.all([d.e(540),d.e(4302),d.e(607),d.e(9605),d.e(8535)]).then((()=>()=>d(8535))))),i("@postman-app-next/network","0.0.0",(()=>Promise.all([d.e(540),d.e(4302),d.e(923),d.e(4810),d.e(8320),d.e(9315)]).then((()=>()=>d(8320))))),i("@postman-app-next/performance-utils","0.0.0",(()=>Promise.all([d.e(540),d.e(8722),d.e(5837),d.e(9239)]).then((()=>()=>d(1597))))),i("@postman-app-next/sentry","0.0.0",(()=>Promise.all([d.e(540),d.e(607),d.e(5304),d.e(8670)]).then((()=>()=>d(9951))))),i("@postman-app-next/storage","0.0.0",(()=>Promise.all([d.e(540),d.e(4302),d.e(4810),d.e(4422)]).then((()=>()=>d(4422))))),i("@postman-app-next/ui","0.0.0",(()=>Promise.all([d.e(9460),d.e(1125),d.e(6818),d.e(6160),d.e(540),d.e(4302),d.e(1730),d.e(2229),d.e(6242),d.e(3723),d.e(9405),d.e(2254)]).then((()=>()=>d(9405))))),i("@postman-app-next/variable-session","0.0.0",(()=>Promise.all([d.e(747),d.e(759)]).then((()=>()=>d(7494))))),i("@postman-app-next/vscode-utils","0.0.0",(()=>Promise.all([d.e(540),d.e(607),d.e(8722),d.e(770)]).then((()=>()=>d(770))))),i("@postman-app-next/workspace-service","0.0.0",(()=>Promise.all([d.e(540),d.e(4302),d.e(607),d.e(4958),d.e(264),d.e(766)]).then((()=>()=>d(766))))),i("@postman/aether-design-tokens","1.2.0",(()=>d.e(6462).then((()=>()=>d(6462))))),i("@sentry/react","7.49.0",(()=>Promise.all([d.e(7500),d.e(540)]).then((()=>()=>d(7500))))),i("@tanstack/react-query-devtools","4.29.5",(()=>d.e(2223).then((()=>()=>d(2223))))),i("@tanstack/react-query","4.29.5",(()=>Promise.all([d.e(8609),d.e(540)]).then((()=>()=>d(8609))))),i("@tippyjs/react","4.2.0",(()=>Promise.all([d.e(9721),d.e(540),d.e(1730)]).then((()=>()=>d(9721))))),i("buffer","6.0.3",(()=>d.e(8834).then((()=>()=>d(8834))))),i("clsx","1.2.1",(()=>d.e(6277).then((()=>()=>d(6277))))),i("eventemitter3","5.0.0",(()=>d.e(686).then((()=>()=>d(686))))),i("memoize-one","5.2.1",(()=>d.e(6631).then((()=>()=>d(6631))))),i("mobx-react-lite","3.4.3",(()=>Promise.all([d.e(540),d.e(1730),d.e(2932),d.e(6776)]).then((()=>()=>d(6776))))),i("mobx-react","7.6.0",(()=>Promise.all([d.e(8495),d.e(540),d.e(2932),d.e(916)]).then((()=>()=>d(8495))))),i("mobx","6.6.2",(()=>d.e(75).then((()=>()=>d(75))))),i("prop-types","15.8.1",(()=>d.e(3980).then((()=>()=>d(3980))))),i("react-dom","16.14.0",(()=>Promise.all([d.e(8316),d.e(540)]).then((()=>()=>d(8316))))),i("react-draggable","4.4.5",(()=>Promise.all([d.e(1327),d.e(540),d.e(1730),d.e(2229),d.e(3723)]).then((()=>()=>d(1327))))),i("react-error-boundary","4.0.10",(()=>Promise.all([d.e(540),d.e(2955)]).then((()=>()=>d(2955))))),i("react-router-dom","6.11.2",(()=>Promise.all([d.e(6591),d.e(540)]).then((()=>()=>d(6591))))),i("react-window","1.8.8",(()=>Promise.all([d.e(6895),d.e(540),d.e(7155)]).then((()=>()=>d(6895))))),i("react","16.14.0",(()=>d.e(2784).then((()=>()=>d(2784))))),i("rxjs/operators","7.8.1",(()=>Promise.all([d.e(6686),d.e(4803)]).then((()=>()=>d(4803))))),i("rxjs","7.8.1",(()=>Promise.all([d.e(6686),d.e(8210)]).then((()=>()=>d(8210))))),i("shallowequal","1.1.0",(()=>d.e(8665).then((()=>()=>d(8665))))),i("socket.io-client","2.5.0",(()=>Promise.all([d.e(7768),d.e(2902)]).then((()=>()=>d(7768))))),i("styled-components","5.3.6",(()=>Promise.all([d.e(5505),d.e(540),d.e(2723)]).then((()=>()=>d(5505))))),i("ua-parser-js","1.0.33",(()=>d.e(6353).then((()=>()=>d(6353))))),i("uuid","8.3.2",(()=>d.e(9304).then((()=>()=>d(9304))))),i("web-vitals","3.0.4",(()=>d.e(9543).then((()=>()=>d(9543))))),l(3595),l(2070),l(7907),l(3544),l(6669),l(865),l(946),l(4184)),c.length?e[r]=Promise.all(c).then((()=>e[r]=1)):e[r]=1}}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},t=(t,r)=>{t=e(t),r=e(r);for(var a=0;;){if(a>=t.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=t[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var s=r[a],i=(typeof s)[0];if(o!=i)return"o"==o&&"n"==i||"s"==i||"u"==o;if("o"!=o&&"u"!=o&&n!=s)return n<s;a++}},r=e=>{var t=e[0],a="";if(1===e.length)return"*";if(t+.5){a+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,a+="u"==(typeof(i=e[o]))[0]?"-":(n>0?".":"")+(n=2,i);return a}var s=[];for(o=1;o<e.length;o++){var i=e[o];s.push(0===i?"not("+d()+")":1===i?"("+d()+" || "+d()+")":2===i?s.pop()+" "+s.pop():r(i))}return d();function d(){return s.pop().replace(/^\((.+)\)$/,"$1")}},a=(t,r)=>{if(0 in t){r=e(r);var n=t[0],o=n<0;o&&(n=-n-1);for(var s=0,i=1,d=!0;;i++,s++){var l,c,f=i<t.length?(typeof t[i])[0]:"";if(s>=r.length||"o"==(c=(typeof(l=r[s]))[0]))return!d||("u"==f?i>n&&!o:""==f!=o);if("u"==c){if(!d||"u"!=f)return!1}else if(d)if(f==c)if(i<=n){if(l!=t[i])return!1}else{if(o?l>t[i]:l<t[i])return!1;l!=t[i]&&(d=!1)}else if("s"!=f&&"n"!=f){if(o||i<=n)return!1;d=!1,i--}else{if(i<=n||c<f!=o)return!1;d=!1}else"s"!=f&&"n"!=f&&(d=!1,i--)}}var p=[],u=p.pop.bind(p);for(s=1;s<t.length;s++){var h=t[s];p.push(1==h?u()|u():2==h?u()&u():h?a(h,r):!u())}return!!u()},n=(e,n,s,i)=>{var d=((e,r)=>{var a=e[r];return Object.keys(a).reduce(((e,r)=>!e||!a[e].loaded&&t(e,r)?r:e),0)})(e,s);if(!a(i,d))throw new Error(((e,t,a,n)=>"Unsatisfied version "+a+" from "+(a&&e[t][a].from)+" of shared singleton module "+t+" (required "+r(n)+")")(e,s,d,i));return o(e[s][d])},o=e=>(e.loaded=1,e.get()),s=e=>function(t,r,a,n){var o=d.I(t);return o&&o.then?o.then(e.bind(e,t,d.S[t],r,a,n)):e(t,d.S[t],r,a,n)},i=s(((e,r,a,n)=>r&&d.o(r,a)?o(((e,r)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!e||t(e,r)?r:e),0))&&a[r]})(r,a)):n())),l=s(((e,t,r,a,o)=>t&&d.o(t,r)?n(t,0,r,a):o())),c={},f={540:()=>l("default","react",[4,16,14,0],(()=>d.e(2784).then((()=>()=>d(2784))))),1730:()=>l("default","react-dom",[4,16,14,0],(()=>d.e(8316).then((()=>()=>d(8316))))),607:()=>l("default","react-router-dom",[4,6,11,2],(()=>d.e(6591).then((()=>()=>d(6591))))),2229:()=>l("default","prop-types",[1,15,8,1],(()=>d.e(3980).then((()=>()=>d(3980))))),5577:()=>l("default","@postman/aether-design-tokens",[1,1,2,0],(()=>d.e(7908).then((()=>()=>d(6462))))),5626:()=>l("default","@tippyjs/react",[1,4,2,0],(()=>d.e(9721).then((()=>()=>d(9721))))),5892:()=>l("default","styled-components",[4,5,3,6],(()=>Promise.all([d.e(5505),d.e(2723)]).then((()=>()=>d(5505))))),4958:()=>i("default","@postman-app-next/data-fetching",(()=>Promise.all([d.e(4302),d.e(7864),d.e(1685)]).then((()=>()=>d(8013))))),5837:()=>i("default","@postman-app-next/analytics-service",(()=>Promise.all([d.e(4302),d.e(721)]).then((()=>()=>d(721))))),9972:()=>i("default","@postman-app-next/workspace-service",(()=>Promise.all([d.e(4302),d.e(4958),d.e(264),d.e(6371)]).then((()=>()=>d(766))))),923:()=>i("default","@postman-app-next/error-handling",(()=>Promise.all([d.e(9460),d.e(1125),d.e(6160),d.e(4302),d.e(1730),d.e(607),d.e(2229),d.e(6242),d.e(5304),d.e(609),d.e(5624)]).then((()=>()=>d(730))))),1219:()=>i("default","@postman-app-next/environment-service",(()=>Promise.all([d.e(9460),d.e(6818),d.e(1617),d.e(4302),d.e(2932),d.e(4958),d.e(264),d.e(8722),d.e(5837),d.e(747),d.e(7913)]).then((()=>()=>d(7913))))),4025:()=>i("default","@postman-app-next/ui",(()=>Promise.all([d.e(9460),d.e(6818),d.e(6160),d.e(4302),d.e(3723),d.e(9405),d.e(376)]).then((()=>()=>d(9405))))),4836:()=>i("default","@postman-app-next/sentry",(()=>Promise.all([d.e(5304),d.e(9951)]).then((()=>()=>d(9951))))),4302:()=>i("default","@postman-app-next/vscode-utils",(()=>Promise.all([d.e(540),d.e(607),d.e(8722),d.e(770)]).then((()=>()=>d(770))))),4515:()=>l("default","ua-parser-js",[1,1,0,33],(()=>d.e(6353).then((()=>()=>d(6353))))),6468:()=>l("default","web-vitals",[1,3,0,4],(()=>d.e(9543).then((()=>()=>d(9543))))),2600:()=>l("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>d.e(2223).then((()=>()=>d(2223))))),4527:()=>l("default","@tanstack/react-query",[1,4,29,1],(()=>d.e(8609).then((()=>()=>d(8609))))),2932:()=>l("default","mobx",[1,6,6,2],(()=>d.e(75).then((()=>()=>d(75))))),6081:()=>i("default","@postman-app-next/navigation",(()=>Promise.all([d.e(9605),d.e(1222)]).then((()=>()=>d(8535))))),8079:()=>i("default","@postman-app-next/network",(()=>Promise.all([d.e(923),d.e(4810),d.e(8320)]).then((()=>()=>d(8320))))),8722:()=>l("default","uuid",[1,8,3,2],(()=>d.e(9304).then((()=>()=>d(9304))))),747:()=>i("default","@postman-app-next/storage",(()=>Promise.all([d.e(540),d.e(4302),d.e(4810),d.e(4422)]).then((()=>()=>d(4422))))),3154:()=>i("default","@postman-app-next/variable-session",(()=>d.e(7494).then((()=>()=>d(7494))))),3720:()=>i("default","@postman-app-next/performance-utils",(()=>d.e(1597).then((()=>()=>d(1597))))),6230:()=>l("default","@sentry/react",[1,7,49,0],(()=>d.e(7500).then((()=>()=>d(7500))))),609:()=>l("default","react-error-boundary",[1,4,0,4],(()=>d.e(8537).then((()=>()=>d(2955))))),9605:()=>i("default","@postman-app-next/desktop-communication-sdk",(()=>d.e(6983).then((()=>()=>d(6983))))),4810:()=>i("default","@postman-app-next/auth",(()=>d.e(9806).then((()=>()=>d(9806))))),1801:()=>l("default","socket.io-client",[1,2,1,1],(()=>Promise.all([d.e(7768),d.e(2902)]).then((()=>()=>d(7768))))),4021:()=>l("default","rxjs",[1,7,8,1],(()=>Promise.all([d.e(6686),d.e(8210)]).then((()=>()=>d(8210))))),4475:()=>l("default","eventemitter3",[1,5,0,0],(()=>d.e(686).then((()=>()=>d(686))))),8160:()=>l("default","rxjs/operators",[1,7,8,1],(()=>Promise.all([d.e(6686),d.e(4803)]).then((()=>()=>d(4803))))),3723:()=>l("default","clsx",[1,1,2,1],(()=>d.e(6277).then((()=>()=>d(6277))))),7569:()=>l("default","react-draggable",[1,4,4,5],(()=>d.e(1327).then((()=>()=>d(1327))))),8851:()=>l("default","mobx-react",[1,7,6,0],(()=>Promise.all([d.e(8495),d.e(2932),d.e(916)]).then((()=>()=>d(8495))))),916:()=>l("default","mobx-react-lite",[1,3,4,3],(()=>Promise.all([d.e(1730),d.e(4024)]).then((()=>()=>d(6776))))),7155:()=>l("default","memoize-one",[1,5,2,1],(()=>d.e(6631).then((()=>()=>d(6631))))),2940:()=>l("default","buffer",[1,6,0,3],(()=>d.e(8834).then((()=>()=>d(8834))))),2723:()=>l("default","shallowequal",[1,1,1,0],(()=>d.e(8665).then((()=>()=>d(8665)))))},p={264:[6081,8079],540:[540],607:[607],609:[609],721:[4515,6468],747:[747],916:[916],923:[923],1730:[1730],2136:[4515,6468],2229:[2229],2723:[2723],2902:[2940],2932:[2932],3723:[3723],4302:[4302],4388:[4836],4810:[4810],4958:[4958],5304:[6230],5695:[1219,4025],5837:[5837],6242:[5577,5626,5892],7155:[7155],7864:[2600,4527],7913:[3154,3720],8320:[1801,4021,4475,8160],8722:[8722],9405:[7569,8851],9605:[9605],9972:[9972]};d.f.consumes=(e,t)=>{d.o(p,e)&&p[e].forEach((e=>{if(d.o(c,e))return t.push(c[e]);var r=t=>{c[e]=0,d.m[e]=r=>{delete d.c[e],r.exports=t()}},a=t=>{delete c[e],d.m[e]=r=>{throw delete d.c[e],t}};try{var n=f[e]();n.then?t.push(c[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))}})(),n=e=>new Promise(((t,r)=>{var a=d.miniCssF(e),n=d.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(s=r[a]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var s;if((n=(s=o[a]).getAttribute("data-href"))===e||n===t)return s}})(a,n))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=i,n.parentNode.removeChild(n),a(d)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),o={179:0},d.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{376:1,2254:1,4388:1}[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={179:0};d.f.j=(t,r)=>{var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(2(136|229|254|64|723|932)|37(23|6)|4(302|350|810|958)|5(304|40|695|837)|6(07|09|242)|7(155|47|573|864)|9(16|23|605|972)|1577|1730|8722)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=d.p+d.u(t),s=new Error;d.l(o,(r=>{if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,a[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,s,i]=r,l=0;if(o.some((t=>0!==e[t]))){for(a in s)d.o(s,a)&&(d.m[a]=s[a]);i&&i(d)}for(t&&t(r);l<o.length;l++)n=o[l],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkworkbench=self.webpackChunkworkbench||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d.nc=void 0,d(3078),d(234)})();
//# sourceMappingURL=main.a3af1165764b2a47.js.map