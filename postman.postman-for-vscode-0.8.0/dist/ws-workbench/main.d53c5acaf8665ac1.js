(()=>{var e,t,a,r,n,o,s,l,d={50629:(e,t,a)=>{"use strict";a(99307),Promise.all([a.e(541),a.e(605),a.e(157),a.e(5320),a.e(5973),a.e(4774),a.e(540),a.e(1730),a.e(607),a.e(2229),a.e(427),a.e(5626),a.e(8722),a.e(2932),a.e(3723),a.e(4958),a.e(8079),a.e(923),a.e(916),a.e(7155),a.e(4025),a.e(6081),a.e(5837),a.e(949),a.e(8851),a.e(3720),a.e(2940),a.e(7535),a.e(6122),a.e(9931)]).then(a.bind(a,12816))},99307:(e,t,a)=>{a.p=window.BASE_URL_PREFIX?`${window.BASE_URL_PREFIX}/ws-workbench/`:""},53078:(e,t,a)=>{var r="undefined"!=typeof window?window:void 0!==a.g?a.g:"undefined"!=typeof self?self:{};r.SENTRY_RELEASE={id:"prod.2023-09-12.06-24"},r.SENTRY_RELEASES=r.SENTRY_RELEASES||{},r.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2023-09-12.06-24"}},47633:(e,t,a)=>{"use strict";var r=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof code_editor)return e();a.l(window.BASE_URL_PREFIX+"/code-editor/remoteEntry.js",(a=>{if("undefined"!=typeof code_editor)return e();var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;r.message="Loading script failed.\n("+n+": "+o+")",r.name="ScriptExternalLoadError",r.type=n,r.request=o,t(r)}),"code_editor")})).then((()=>code_editor))}},f={};function i(e){var t=f[e];if(void 0!==t)return t.exports;var a=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=d,i.c=f,i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"==typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"==typeof a.then)return a}var n=Object.create(null);i.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&a;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>a[e]));return o.default=()=>a,i.d(n,o),n},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,a)=>(i.f[a](e,t),t)),[])),i.u=e=>e+"."+{75:"2b70103b990bf4a4",157:"f6fec63d5d3d66c0",360:"8df3b04530992da8",427:"12a2703005f1c9a6",540:"dc00b143ba72c396",541:"f02e594c6bc75772",551:"dfe94d46f83191ac",605:"646315a5af070ae0",607:"b31428034dc87e8d",686:"77eede3eca31480f",721:"116f3a663bb1d21c",730:"dde3dc02f3e880a5",747:"b76fe2188692c856",759:"b61fe078792fd1ca",766:"4d9c004f7a5e9e36",770:"33d590844e8d9b9e",844:"554dd906d677e19d",856:"53f683d0e2fbb331",916:"eacae2bc08ff9ccf",923:"63bd04c5eeeaa720",949:"10df9fe28e431802",1079:"865c4ebf7bb43b2e",1166:"21486c691faf96d3",1222:"25aebfb20bb960a6",1322:"71c0a328f7242253",1327:"22c0eef6a67a9ee6",1335:"98b5d0f99e29ff19",1544:"b75ed2e9f74f7e61",1597:"321e17822b4e67d4",1685:"d09da171bc86e338",1730:"cf1c10c9defa4d55",2095:"02821cc3b92b86a7",2136:"cbb52b00cbb7e386",2223:"2a6dae7e72d000ad",2229:"cf369e0a285f9ea1",2241:"f48243f3c4e8287f",2254:"9125e41e183d9e28",2298:"0d6f77c0d050910e",2339:"0f87f66836cf62e7",2543:"97a69b07e8e09201",2723:"d862d8861bfc5085",2772:"ac478182d3b2629f",2784:"899704fbf61a6bd2",2932:"b45220e2fa797da2",2940:"abcfe60db7e487a9",2955:"f74a152fab9e491b",3268:"b73e467f3e406cbc",3356:"0f30cd1ae12ec18a",3640:"f4ca5cf9e1bf7f4d",3694:"2ea3f1e62621268a",3720:"31a1b60844c5398e",3723:"1a82418b4bd0ef6a",3751:"54aab912557ea820",3836:"056b6640cafcb49c",3911:"bc845b16b79fb241",3980:"bdc72064ad98dd6b",4024:"4f559bbda3a62194",4025:"dea3e3e7168902d7",4211:"dd3c2943fda488b6",4302:"fc71909c58e0b624",4422:"3bbe95bf811baee6",4475:"073530c238ed72d2",4492:"bd7ea3caf7cbc6b5",4774:"40470c32f461d3d1",4803:"8b3f6729ee38ea50",4810:"c2b56e5aa0a35b07",4958:"d40415ceff0632b0",5047:"374c052320957931",5077:"941053ffcfa0e665",5102:"c9f0dcb4a97959b0",5125:"1bbf783acab74af3",5237:"a30f51c034b3db41",5320:"9e4d1ac3c7d7e0bc",5345:"55daf6534429b2b0",5348:"256ada2369c7eb91",5624:"6e43308ff6a02b71",5626:"2a3c343abb1bda1f",5824:"5c547054c20a4c8c",5837:"bb3afc59f930a18c",5909:"c8b2eeb3ef21e731",5973:"a7f33f1fcf9e32d7",6081:"2db3c3f2f318418f",6122:"4526faa43c05d9ce",6198:"56c72a34d0474e8d",6277:"c1ecd64b770881a6",6320:"e8af9c34279d4938",6353:"8ab5fbd7861cb753",6371:"dd20e56af93b5696",6462:"e4e371fea2285dd6",6520:"96a6267717845648",6591:"914fbae683da3144",6631:"6861e94fc04690f7",6686:"bb8134993e13c7e4",6764:"74576ab50ec36813",6776:"fb39672fa9ed4238",6954:"fb78e36e98ea4b92",6983:"2d76e097981643b9",7155:"69e2a044bf040b81",7375:"9c2d0c18858d13e2",7397:"f49002f70bac7bb3",7494:"f98a5b2c3b39c534",7500:"9c09d451a19a062d",7535:"fc630fccd8e4d01a",7560:"e04ee1c278318ec8",7569:"078d35123bd3d050",7623:"8338c52b5e05bac3",7669:"db61de98b9753822",7688:"c0f4b0b7af776ee7",7768:"6b2650905419bd3b",7809:"19cb3398e4fb7c2b",7864:"3a41d05212aca932",7973:"8a435cae3876d45e",8013:"5245adf86377a663",8079:"395c3c009cc1e2d2",8183:"4473daa03b640ac3",8210:"fc9cb25369d459d2",8316:"379632f52e551151",8405:"a943698034ad6ab2",8495:"4e72977e13191224",8535:"004fc9f3b18d38f6",8537:"fc080808cd09517b",8609:"40a3c4ebde454b9b",8665:"046968e18db81de8",8722:"8f45032ac940f3b5",8728:"c361bc350fe40b85",8785:"be28a0deca764483",8834:"d43e5915a08f8ce9",8851:"5fdc5d8c3a9cd261",8864:"5900b2aa75e80498",8873:"18e1c7563227282f",9205:"4220ddbd78ea0c85",9239:"1ee7575723699a02",9304:"aaa540684f771aa7",9431:"6f993d63c7b6b6ad",9543:"10215bc43c8389b3",9605:"3cebcfc0bfac36d2",9712:"500e2e2c7d5fd3ad",9721:"bca19d60148582a2",9806:"5261cd93d5429c81",9931:"86a2384b6d691509"}[e]+".js",i.miniCssF=e=>e+"."+{844:"9fcae8d8edb06ca8",2095:"9fcae8d8edb06ca8",2254:"08d5e312ecb44432",5237:"08d5e312ecb44432",9931:"87e33b79b87451cd"}[e]+".css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},r="ws-workbench:",i.l=(e,t,n,o)=>{if(a[e])a[e].push(t);else{var s,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var c=d[f];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==r+n){s=c;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+n),s.src=e),a[e]=[t];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(u);var n=a[e];if(delete a[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n={1544:[31544]},o={31544:["default","./CodeEditor",47633]},i.f.remotes=(e,t)=>{i.o(n,e)&&n[e].forEach((e=>{var a=i.R;a||(a=[]);var r=o[e];if(!(a.indexOf(r)>=0)){if(a.push(r),r.p)return t.push(r.p);var n=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+r[1]+'" from '+r[2]),i.m[e]=()=>{throw t},r.p=0},s=(e,a,o,s,l,d)=>{try{var f=e(a,o);if(!f||!f.then)return l(f,s,d);var i=f.then((e=>l(e,s)),n);if(!d)return i;t.push(r.p=i)}catch(e){n(e)}},l=(e,t,n)=>s(t.get,r[1],a,0,d,n),d=t=>{r.p=1,i.m[e]=e=>{e.exports=t()}};s(i,r[2],0,0,((e,t,a)=>e?s(i.I,r[0],0,e,l,a):n()),1)}}))},(()=>{i.S={};var e={},t={};i.I=(a,r)=>{r||(r=[]);var n=t[a];if(n||(n=t[a]={}),!(r.indexOf(n)>=0)){if(r.push(n),e[a])return e[a];i.o(i.S,a)||(i.S[a]={});var o=i.S[a],s="ws-workbench",l=(e,t,a,r)=>{var n=o[e]=o[e]||{},l=n[t];(!l||!l.loaded&&(!r!=!l.eager?r:s>l.from))&&(n[t]={get:a,from:s,eager:!!r})},d=[];return"default"===a&&(l("@postman-app-next/analytics-service","0.0.0",(()=>Promise.all([i.e(4302),i.e(2136),i.e(721)]).then((()=>()=>i(40721))))),l("@postman-app-next/auth","0.0.0",(()=>i.e(9806).then((()=>()=>i(89806))))),l("@postman-app-next/console-api","0.0.0",(()=>Promise.all([i.e(8722),i.e(747),i.e(9712),i.e(2298)]).then((()=>()=>i(32298))))),l("@postman-app-next/data-fetching","0.0.0",(()=>Promise.all([i.e(540),i.e(4302),i.e(7864),i.e(8013)]).then((()=>()=>i(98013))))),l("@postman-app-next/desktop-communication-sdk","0.0.0",(()=>i.e(6983).then((()=>()=>i(96983))))),l("@postman-app-next/dialogs","0.0.0",(()=>Promise.all([i.e(541),i.e(605),i.e(5348),i.e(540),i.e(4302),i.e(1730),i.e(2229),i.e(427),i.e(5626),i.e(5909)]).then((()=>()=>i(23911))))),l("@postman-app-next/environment-service","0.0.0",(()=>Promise.all([i.e(541),i.e(605),i.e(5320),i.e(540),i.e(4302),i.e(1730),i.e(607),i.e(2229),i.e(427),i.e(5626),i.e(8722),i.e(2932),i.e(4958),i.e(8079),i.e(747),i.e(6081),i.e(5837),i.e(3720),i.e(8873),i.e(856)]).then((()=>()=>i(18873))))),l("@postman-app-next/error-handling","0.0.0",(()=>Promise.all([i.e(541),i.e(157),i.e(540),i.e(4302),i.e(1730),i.e(607),i.e(2229),i.e(427),i.e(5626),i.e(2772),i.e(5624)]).then((()=>()=>i(730))))),l("@postman-app-next/history-service","0.0.0",(()=>Promise.all([i.e(540),i.e(8722),i.e(4958),i.e(8079),i.e(6198)]).then((()=>()=>i(16198))))),l("@postman-app-next/kv-editor","0.0.0",(()=>Promise.all([i.e(541),i.e(605),i.e(157),i.e(5320),i.e(5973),i.e(7809),i.e(540),i.e(1730),i.e(2229),i.e(427),i.e(5626),i.e(2932),i.e(3723),i.e(2723),i.e(916),i.e(7155),i.e(949),i.e(7569),i.e(7623)]).then((()=>()=>i(17623))))),l("@postman-app-next/navigation","0.0.0",(()=>Promise.all([i.e(540),i.e(4302),i.e(607),i.e(9605),i.e(8535)]).then((()=>()=>i(58535))))),l("@postman-app-next/network","0.0.0",(()=>Promise.all([i.e(540),i.e(4302),i.e(923),i.e(4475),i.e(4810),i.e(8405),i.e(4492)]).then((()=>()=>i(68405))))),l("@postman-app-next/object-inspector","0.0.0",(()=>Promise.all([i.e(540),i.e(3723),i.e(844)]).then((()=>()=>i(50844))))),l("@postman-app-next/performance-utils","0.0.0",(()=>Promise.all([i.e(540),i.e(8722),i.e(5837),i.e(1597)]).then((()=>()=>i(31597))))),l("@postman-app-next/runtime-agent","0.0.0",(()=>Promise.all([i.e(7973),i.e(1335),i.e(4302),i.e(8722),i.e(2932),i.e(4475),i.e(9605),i.e(2940),i.e(6520),i.e(3836)]).then((()=>()=>i(46520))))),l("@postman-app-next/storage","0.0.0",(()=>Promise.all([i.e(540),i.e(4302),i.e(4810),i.e(4422)]).then((()=>()=>i(44422))))),l("@postman-app-next/test-utils","0.0.0",(()=>Promise.all([i.e(541),i.e(540),i.e(1730),i.e(607),i.e(2229),i.e(427),i.e(5626),i.e(4958),i.e(923),i.e(4025),i.e(1079),i.e(8728)]).then((()=>()=>i(2241))))),l("@postman-app-next/ui","0.0.0",(()=>Promise.all([i.e(541),i.e(605),i.e(157),i.e(540),i.e(4302),i.e(1730),i.e(2229),i.e(427),i.e(5626),i.e(3723),i.e(7569),i.e(8851),i.e(1166),i.e(5237)]).then((()=>()=>i(71166))))),l("@postman-app-next/variable-session","0.0.0",(()=>Promise.all([i.e(747),i.e(7494)]).then((()=>()=>i(57494))))),l("@postman-app-next/variable-suggestions","0.0.0",(()=>Promise.all([i.e(541),i.e(605),i.e(5320),i.e(3640),i.e(540),i.e(1730),i.e(2229),i.e(427),i.e(5626),i.e(3723),i.e(2723),i.e(949),i.e(9304),i.e(551)]).then((()=>()=>i(59304))))),l("@postman-app-next/vscode-utils","0.0.0",(()=>Promise.all([i.e(540),i.e(607),i.e(8722),i.e(770)]).then((()=>()=>i(30770))))),l("@postman-app-next/workspace-service","0.0.0",(()=>Promise.all([i.e(540),i.e(4302),i.e(607),i.e(4958),i.e(8079),i.e(6081),i.e(766)]).then((()=>()=>i(60766))))),l("@postman/aether-design-tokens","1.2.0",(()=>i.e(6462).then((()=>()=>i(86462))))),l("@postman/pretty-ms","6.1.0",(()=>i.e(3694).then((()=>()=>i(83694))))),l("@postman/protobufjs","7.2.0-postman.2",(()=>i.e(7973).then((()=>()=>i(87973))))),l("@sentry/react","7.49.0",(()=>Promise.all([i.e(7500),i.e(540)]).then((()=>()=>i(57500))))),l("@tanstack/react-query-devtools","4.29.5",(()=>i.e(2223).then((()=>()=>i(92223))))),l("@tanstack/react-query","4.29.5",(()=>Promise.all([i.e(8609),i.e(540)]).then((()=>()=>i(8609))))),l("@testing-library/react","12.1.5",(()=>Promise.all([i.e(3751),i.e(540),i.e(1730),i.e(7560)]).then((()=>()=>i(63751))))),l("@tippyjs/react","4.2.0",(()=>Promise.all([i.e(9721),i.e(540),i.e(1730)]).then((()=>()=>i(39721))))),l("buffer","6.0.3",(()=>i.e(8834).then((()=>()=>i(48834))))),l("clsx","1.2.1",(()=>i.e(6277).then((()=>()=>i(6277))))),l("date-fns","2.29.3",(()=>i.e(5102).then((()=>()=>i(35102))))),l("eventemitter3","5.0.0",(()=>i.e(686).then((()=>()=>i(30686))))),l("filesize","6.4.0",(()=>i.e(5824).then((()=>()=>i(75824))))),l("fuzzy-search","3.2.1",(()=>i.e(5345).then((()=>()=>i(45345))))),l("hexy","0.3.4",(()=>i.e(360).then((()=>()=>i(10360))))),l("js-base64","3.7.5",(()=>i.e(9431).then((()=>()=>i(49431))))),l("lexical","0.11.1",(()=>i.e(2543).then((()=>()=>i(22543))))),l("long","5.2.1",(()=>i.e(6764).then((()=>()=>i(16764))))),l("memoize-one","5.2.1",(()=>i.e(6631).then((()=>()=>i(36631))))),l("mobx-react-lite","3.4.3",(()=>Promise.all([i.e(540),i.e(1730),i.e(2932),i.e(6776)]).then((()=>()=>i(46776))))),l("mobx-react","7.6.0",(()=>Promise.all([i.e(8495),i.e(540),i.e(2932),i.e(916)]).then((()=>()=>i(18495))))),l("mobx","6.6.2",(()=>i.e(75).then((()=>()=>i(80075))))),l("postman-collection-transformer","4.1.6",(()=>i.e(8785).then((()=>()=>i(98785))))),l("prop-types","15.8.1",(()=>i.e(3980).then((()=>()=>i(13980))))),l("react-dom","16.14.0",(()=>Promise.all([i.e(8316),i.e(540)]).then((()=>()=>i(28316))))),l("react-draggable","4.4.5",(()=>Promise.all([i.e(1327),i.e(540),i.e(1730),i.e(2229),i.e(3723)]).then((()=>()=>i(41327))))),l("react-error-boundary","4.0.10",(()=>Promise.all([i.e(540),i.e(2955)]).then((()=>()=>i(32955))))),l("react-router-dom","6.11.2",(()=>Promise.all([i.e(6591),i.e(540)]).then((()=>()=>i(16591))))),l("react-virtualized-auto-sizer","1.0.7",(()=>Promise.all([i.e(540),i.e(7688)]).then((()=>()=>i(7688))))),l("react-window","1.8.8",(()=>Promise.all([i.e(4211),i.e(540),i.e(7155),i.e(7397)]).then((()=>()=>i(54211))))),l("react","16.14.0",(()=>i.e(2784).then((()=>()=>i(2784))))),l("rxjs/operators","7.8.1",(()=>Promise.all([i.e(6686),i.e(4803)]).then((()=>()=>i(34803))))),l("rxjs","7.8.1",(()=>Promise.all([i.e(6686),i.e(8210)]).then((()=>()=>i(28210))))),l("shallowequal","1.1.0",(()=>i.e(8665).then((()=>()=>i(88665))))),l("socket.io-client","2.5.0",(()=>Promise.all([i.e(7768),i.e(8864)]).then((()=>()=>i(17768))))),l("strip-json-comments","5.0.0",(()=>i.e(1322).then((()=>()=>i(81322))))),l("styled-components","5.3.6",(()=>Promise.all([i.e(3356),i.e(540),i.e(2723)]).then((()=>()=>i(63356))))),l("teleport-javascript","1.0.0",(()=>i.e(5125).then((()=>()=>i(25125))))),l("ua-parser-js","1.0.33",(()=>i.e(6353).then((()=>()=>i(46353))))),l("uuid","8.3.2",(()=>i.e(3268).then((()=>()=>i(39304))))),l("web-vitals","3.0.4",(()=>i.e(9543).then((()=>()=>i(59543))))),(e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(t));var t};try{var n=i(47633);if(!n)return;var o=e=>e&&e.init&&e.init(i.S[a],r);if(n.then)return d.push(n.then(o,t));var s=o(n);if(s&&s.then)return d.push(s.catch(t))}catch(e){t(e)}})()),d.length?e[a]=Promise.all(d).then((()=>e[a]=1)):e[a]=1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=a[1]?t(a[1]):[];return a[2]&&(r.length++,r.push.apply(r,t(a[2]))),a[3]&&(r.push([]),r.push.apply(r,t(a[3]))),r},t=(t,a)=>{t=e(t),a=e(a);for(var r=0;;){if(r>=t.length)return r<a.length&&"u"!=(typeof a[r])[0];var n=t[r],o=(typeof n)[0];if(r>=a.length)return"u"==o;var s=a[r],l=(typeof s)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=s)return n<s;r++}},a=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return r}var s=[];for(o=1;o<e.length;o++){var l=e[o];s.push(0===l?"not("+d()+")":1===l?"("+d()+" || "+d()+")":2===l?s.pop()+" "+s.pop():a(l))}return d();function d(){return s.pop().replace(/^\((.+)\)$/,"$1")}},r=(t,a)=>{if(0 in t){a=e(a);var n=t[0],o=n<0;o&&(n=-n-1);for(var s=0,l=1,d=!0;;l++,s++){var f,i,c=l<t.length?(typeof t[l])[0]:"";if(s>=a.length||"o"==(i=(typeof(f=a[s]))[0]))return!d||("u"==c?l>n&&!o:""==c!=o);if("u"==i){if(!d||"u"!=c)return!1}else if(d)if(c==i)if(l<=n){if(f!=t[l])return!1}else{if(o?f>t[l]:f<t[l])return!1;f!=t[l]&&(d=!1)}else if("s"!=c&&"n"!=c){if(o||l<=n)return!1;d=!1,l--}else{if(l<=n||i<c!=o)return!1;d=!1}else"s"!=c&&"n"!=c&&(d=!1,l--)}}var p=[],u=p.pop.bind(p);for(s=1;s<t.length;s++){var h=t[s];p.push(1==h?u()|u():2==h?u()&u():h?r(h,a):!u())}return!!u()},n=(e,n,s,l)=>{var d=((e,a)=>{var r=e[a];return Object.keys(r).reduce(((e,a)=>!e||!r[e].loaded&&t(e,a)?a:e),0)})(e,s);if(!r(l,d))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+a(n)+")")(e,s,d,l));return o(e[s][d])},o=e=>(e.loaded=1,e.get()),s=e=>function(t,a,r,n){var o=i.I(t);return o&&o.then?o.then(e.bind(e,t,i.S[t],a,r,n)):e(t,i.S[t],a,r,n)},l=s(((e,a,r,n)=>a&&i.o(a,r)?o(((e,a)=>{var r=e[a];return(a=Object.keys(r).reduce(((e,a)=>!e||t(e,a)?a:e),0))&&r[a]})(a,r)):n())),d=s(((e,t,a,r,o)=>t&&i.o(t,a)?n(t,0,a,r):o())),f={},c={40540:()=>d("default","react",[4,16,14,0],(()=>i.e(2784).then((()=>()=>i(2784))))),21730:()=>d("default","react-dom",[4,16,14,0],(()=>i.e(8316).then((()=>()=>i(28316))))),60607:()=>d("default","react-router-dom",[4,6,11,2],(()=>Promise.all([i.e(6591),i.e(540)]).then((()=>()=>i(16591))))),72229:()=>d("default","prop-types",[1,15,8,1],(()=>i.e(3980).then((()=>()=>i(13980))))),25892:()=>d("default","styled-components",[4,5,3,6],(()=>Promise.all([i.e(3356),i.e(2723)]).then((()=>()=>i(63356))))),65577:()=>d("default","@postman/aether-design-tokens",[1,1,2,0],(()=>i.e(6462).then((()=>()=>i(86462))))),15626:()=>d("default","@tippyjs/react",[1,4,2,0],(()=>i.e(9721).then((()=>()=>i(39721))))),48722:()=>d("default","uuid",[1,8,3,2],(()=>i.e(3268).then((()=>()=>i(39304))))),62932:()=>d("default","mobx",[1,6,6,2],(()=>i.e(75).then((()=>()=>i(80075))))),53723:()=>d("default","clsx",[1,1,2,1],(()=>i.e(6277).then((()=>()=>i(6277))))),44958:()=>l("default","@postman-app-next/data-fetching",(()=>Promise.all([i.e(4302),i.e(7864),i.e(1685)]).then((()=>()=>i(98013))))),98079:()=>l("default","@postman-app-next/network",(()=>Promise.all([i.e(540),i.e(4302),i.e(923),i.e(4475),i.e(4810),i.e(8405)]).then((()=>()=>i(68405))))),30923:()=>l("default","@postman-app-next/error-handling",(()=>Promise.all([i.e(541),i.e(157),i.e(4302),i.e(1730),i.e(607),i.e(2229),i.e(427),i.e(5626),i.e(2772),i.e(730)]).then((()=>()=>i(730))))),50916:()=>d("default","mobx-react-lite",[1,3,4,3],(()=>Promise.all([i.e(1730),i.e(4024)]).then((()=>()=>i(46776))))),37155:()=>d("default","memoize-one",[1,5,2,1],(()=>i.e(6631).then((()=>()=>i(36631))))),44025:()=>l("default","@postman-app-next/ui",(()=>Promise.all([i.e(605),i.e(157),i.e(4302),i.e(3723),i.e(7569),i.e(8851),i.e(1166),i.e(2254)]).then((()=>()=>i(71166))))),26081:()=>l("default","@postman-app-next/navigation",(()=>Promise.all([i.e(4302),i.e(9605),i.e(1222)]).then((()=>()=>i(58535))))),15837:()=>l("default","@postman-app-next/analytics-service",(()=>Promise.all([i.e(4302),i.e(8183)]).then((()=>()=>i(40721))))),60949:()=>d("default","react-window",[1,1,8,8],(()=>Promise.all([i.e(4211),i.e(7155)]).then((()=>()=>i(54211))))),8851:()=>d("default","mobx-react",[1,7,6,0],(()=>Promise.all([i.e(8495),i.e(2932),i.e(916)]).then((()=>()=>i(18495))))),73720:()=>l("default","@postman-app-next/performance-utils",(()=>i.e(9239).then((()=>()=>i(31597))))),32940:()=>d("default","buffer",[1,6,0,3],(()=>i.e(8834).then((()=>()=>i(48834))))),9029:()=>l("default","@postman-app-next/runtime-agent",(()=>Promise.all([i.e(7973),i.e(1335),i.e(4302),i.e(4475),i.e(9605),i.e(6520)]).then((()=>()=>i(46520))))),17712:()=>l("default","@postman-app-next/console-api",(()=>Promise.all([i.e(747),i.e(6320)]).then((()=>()=>i(32298))))),24926:()=>d("default","date-fns",[1,2,29,3],(()=>i.e(5102).then((()=>()=>i(35102))))),38095:()=>d("default","strip-json-comments",[1,5,0,0],(()=>i.e(1322).then((()=>()=>i(81322))))),42827:()=>d("default","filesize",[1,6,1,0],(()=>i.e(5824).then((()=>()=>i(75824))))),48391:()=>l("default","@postman-app-next/history-service",(()=>Promise.all([i.e(4958),i.e(8079),i.e(7375)]).then((()=>()=>i(16198))))),72586:()=>d("default","fuzzy-search",[1,3,2,1],(()=>i.e(5345).then((()=>()=>i(45345))))),83587:()=>d("default","react-virtualized-auto-sizer",[1,1,0,7],(()=>i.e(2339).then((()=>()=>i(7688))))),95897:()=>d("default","@postman/pretty-ms",[1,6,1,0],(()=>i.e(3694).then((()=>()=>i(83694))))),96497:()=>l("default","@postman-app-next/kv-editor",(()=>Promise.all([i.e(7809),i.e(2723),i.e(7569),i.e(7623)]).then((()=>()=>i(17623))))),99765:()=>d("default","hexy",[2,0,3,4],(()=>i.e(360).then((()=>()=>i(10360))))),6122:()=>d("default","js-base64",[1,3,7,5],(()=>i.e(9431).then((()=>()=>i(49431))))),54302:()=>l("default","@postman-app-next/vscode-utils",(()=>Promise.all([i.e(540),i.e(607),i.e(8722),i.e(770)]).then((()=>()=>i(30770))))),46468:()=>d("default","web-vitals",[1,3,0,4],(()=>i.e(9543).then((()=>()=>i(59543))))),54515:()=>d("default","ua-parser-js",[1,1,0,33],(()=>i.e(6353).then((()=>()=>i(46353))))),50747:()=>l("default","@postman-app-next/storage",(()=>Promise.all([i.e(540),i.e(4302),i.e(4810),i.e(4422)]).then((()=>()=>i(44422))))),69712:()=>d("default","teleport-javascript",[1,1,0,0],(()=>i.e(5125).then((()=>()=>i(25125))))),14527:()=>d("default","@tanstack/react-query",[1,4,29,1],(()=>i.e(8609).then((()=>()=>i(8609))))),22600:()=>d("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>i.e(2223).then((()=>()=>i(92223))))),19972:()=>l("default","@postman-app-next/workspace-service",(()=>i.e(6371).then((()=>()=>i(60766))))),63154:()=>l("default","@postman-app-next/variable-session",(()=>i.e(759).then((()=>()=>i(57494))))),20609:()=>d("default","react-error-boundary",[1,4,0,4],(()=>i.e(8537).then((()=>()=>i(32955))))),25304:()=>d("default","@sentry/react",[1,7,49,0],(()=>i.e(7500).then((()=>()=>i(57500))))),22723:()=>d("default","shallowequal",[1,1,1,0],(()=>i.e(8665).then((()=>()=>i(88665))))),57569:()=>d("default","react-draggable",[1,4,4,5],(()=>i.e(1327).then((()=>()=>i(41327))))),27363:()=>l("default","@postman-app-next/dialogs",(()=>Promise.all([i.e(5348),i.e(4302),i.e(3911)]).then((()=>()=>i(23911))))),79233:()=>l("default","@postman-app-next/variable-suggestions",(()=>Promise.all([i.e(3640),i.e(9304)]).then((()=>()=>i(59304))))),29605:()=>l("default","@postman-app-next/desktop-communication-sdk",(()=>i.e(6983).then((()=>()=>i(96983))))),94475:()=>d("default","eventemitter3",[1,5,0,0],(()=>i.e(686).then((()=>()=>i(30686))))),64810:()=>l("default","@postman-app-next/auth",(()=>i.e(9806).then((()=>()=>i(89806))))),18160:()=>d("default","rxjs/operators",[1,7,8,1],(()=>Promise.all([i.e(6686),i.e(4803)]).then((()=>()=>i(34803))))),61801:()=>d("default","socket.io-client",[1,2,1,1],(()=>Promise.all([i.e(7768),i.e(8864)]).then((()=>()=>i(17768))))),94021:()=>d("default","rxjs",[1,7,8,1],(()=>Promise.all([i.e(6686),i.e(8210)]).then((()=>()=>i(28210))))),10541:()=>d("default","long",[1,5,2,1],(()=>i.e(6764).then((()=>()=>i(16764))))),64354:()=>d("default","@postman/protobufjs",[1,7,2,0,,"postman",2],(()=>()=>i(87973))),98403:()=>d("default","postman-collection-transformer",[1,4,1,6],(()=>i.e(8785).then((()=>()=>i(98785))))),81079:()=>d("default","@testing-library/react",[4,12,1,5],(()=>i.e(3751).then((()=>()=>i(63751))))),21219:()=>l("default","@postman-app-next/environment-service",(()=>Promise.all([i.e(4302),i.e(607),i.e(8722),i.e(2932),i.e(4958),i.e(8079),i.e(747),i.e(6081),i.e(5837),i.e(3720),i.e(8873)]).then((()=>()=>i(18873))))),72783:()=>l("default","@postman-app-next/test-utils",(()=>Promise.all([i.e(607),i.e(4958),i.e(923),i.e(4025),i.e(1079),i.e(2241)]).then((()=>()=>i(2241))))),26954:()=>l("default","@postman-app-next/object-inspector",(()=>i.e(2095).then((()=>()=>i(50844))))),11271:()=>d("default","lexical",[2,0,11,1],(()=>i.e(2543).then((()=>()=>i(22543)))))},p={427:[25892,65577],540:[40540],607:[60607],747:[50747],916:[50916],923:[30923],949:[60949],1079:[81079],1730:[21730],2136:[46468,54515],2229:[72229],2723:[22723],2772:[20609,25304],2932:[62932],2940:[32940],3720:[73720],3723:[53723],4025:[44025],4302:[54302],4475:[94475],4810:[64810],4958:[44958],5626:[15626],5837:[15837],6081:[26081],6122:[6122],6320:[69712],6520:[10541,64354,98403],6954:[26954],7155:[37155],7535:[9029,17712,24926,38095,42827,48391,72586,83587,95897,96497,99765],7569:[57569],7623:[27363,79233],7864:[14527,22600],8079:[98079],8183:[46468,54515],8405:[18160,61801,94021],8722:[48722],8851:[8851],8873:[19972,63154],9205:[11271],9304:[21219,72783],9605:[29605],9712:[69712]};i.f.consumes=(e,t)=>{i.o(p,e)&&p[e].forEach((e=>{if(i.o(f,e))return t.push(f[e]);var a=t=>{f[e]=0,i.m[e]=a=>{delete i.c[e],a.exports=t()}},r=t=>{delete f[e],i.m[e]=a=>{throw delete i.c[e],t}};try{var n=c[e]();n.then?t.push(f[e]=n.then(a).catch(r)):a(n)}catch(e){r(e)}}))}})(),s=e=>new Promise(((t,a)=>{var r=i.miniCssF(e),n=i.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=(s=a[r]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var s;if((n=(s=o[r]).getAttribute("data-href"))===e||n===t)return s}})(r,n))return t();((e,t,a,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)a();else{var s=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=l,n.parentNode.removeChild(n),r(d)}},n.href=t,document.head.appendChild(n)})(e,n,t,a)})),l={179:0},i.f.miniCss=(e,t)=>{l[e]?t.push(l[e]):0!==l[e]&&{844:1,2095:1,2254:1,5237:1,9931:1}[e]&&t.push(l[e]=s(e).then((()=>{l[e]=0}),(t=>{throw delete l[e],t})))},(()=>{var e={179:0};i.f.j=(t,a)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(1(079|544|730)|2(136|229|254|723|772|932|940)|372[03]|4(025|27|302|475|810|958)|5(40|626|837)|6(07|081|122|954)|7(155|47|569|864)|8(079|722|851)|9(16|23|49|605|712))$/.test(t))e[t]=0;else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var o=i.p+i.u(t),s=new Error;i.l(o,(a=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}}),"chunk-"+t,t)}};var t=(t,a)=>{var r,n,[o,s,l]=a,d=0;if(o.some((t=>0!==e[t]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);l&&l(i)}for(t&&t(a);d<o.length;d++)n=o[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0},a=self.webpackChunkws_workbench=self.webpackChunkws_workbench||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),i.nc=void 0,i(53078),i(50629)})();
//# sourceMappingURL=main.d53c5acaf8665ac1.js.map