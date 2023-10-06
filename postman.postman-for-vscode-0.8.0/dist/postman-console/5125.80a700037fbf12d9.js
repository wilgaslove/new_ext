/*! For license information please see 5125.80a700037fbf12d9.js.LICENSE.txt */
"use strict";(self.webpackChunkpostman_console=self.webpackChunkpostman_console||[]).push([[5125],{5125:(r,a,e)=>{e.r(a),e.d(a,{default:()=>t,parse:()=>i,stringify:()=>s});var n=function(r,a){var e={undefined:"u",number:"n",bigint:"b",symbol:"s",Map:"M",Set:"S",Date:"D",RegExp:"R",Buffer:"B",Int8Array:"H",Uint8Array:"I",Uint8ClampedArray:"J",Int16Array:"P",Uint16Array:"Q",Int32Array:"F",Uint32Array:"G",Float32Array:"K",Float64Array:"L"},n={parse:function(r,a){var e=JSON.parse(r,c).map(y),n=e.length,f=n>1?e[n-1]:[],o=e[0],p=a||t,u="object"==typeof o&&o?s(e,f,new Set,o,p):"_0"===o&&f.length?i(f,0):o;return p.call({"":u},"",u)},stringify:function(i,s,y){for(var c,o=new Map,p=new Map,u=[],l=[],A=[],b=s&&typeof s==typeof l?function(r,a){if(""===r||s.indexOf(r)>-1)return a}:s||t,g=+f(o,l,b.call({"":i},"",i)),S=function(t,i){var s=b.call(this,t,i),y=function(a,t,i,s,f){var y,c;switch(typeof s){case"string":f[i]instanceof Date&&(y=e.Date+s);break;case"undefined":y=e.undefined;break;case"number":Number.isFinite(s)||(y=e.number+r(s));break;case"bigint":y=e.bigint+r(s);break;case"symbol":var o=r(s);y=e.symbol+o.substring(7,o.length-1);break;case"object":if(null===s)break;if("Buffer"===s.type&&s.data&&Buffer.isBuffer(f[i]))y=e.Buffer+JSON.stringify(s.data);else if(s instanceof RegExp)y=e.RegExp+r(s);else if(s instanceof Map){var p=[];for(c of s.entries())p.push(c);y=e.Map+n.stringify(p)}else if(s instanceof Set){var u=[];for(c of s.values())u.push(c);y=e.Set+n.stringify(u)}else s instanceof Int8Array?y=e.Int8Array+JSON.stringify(Array.apply([],s)):s instanceof Uint8Array?y=e.Uint8Array+JSON.stringify(Array.apply([],s)):s instanceof Uint8ClampedArray?y=e.Uint8ClampedArray+JSON.stringify(Array.apply([],s)):s instanceof Int16Array?y=e.Int16Array+JSON.stringify(Array.apply([],s)):s instanceof Uint16Array?y=e.Uint16Array+JSON.stringify(Array.apply([],s)):s instanceof Int32Array?y=e.Int32Array+JSON.stringify(Array.apply([],s)):s instanceof Uint32Array?y=e.Uint32Array+JSON.stringify(Array.apply([],s)):s instanceof Float32Array?y=e.Float32Array+JSON.stringify(Array.apply([],s)):s instanceof Float64Array&&(y=e.Float64Array+JSON.stringify(Array.apply([],s)))}if(y){var l=a.get(y);return l||(l="_"+r(t.push(y)-1),a.set(y,l),l)}}(p,u,t,s,this);if(y)return y;if(c)return c=!c,i;switch(typeof s){case"object":if(null===s)return s;case a:return o.get(s)||f(o,l,s)}return s};g<l.length;g++)c=!0,A[g]=JSON.stringify(l[g],S,y);return u.length&&A.push(JSON.stringify(u)),"["+A.join(",")+"]"}};return n;function t(r,a){return a}function i(r,a){var t=r[a].substring(1);switch(r[a].charAt(0)){case e.undefined:r[a]=void 0;break;case e.number:r[a]=Number(t);break;case e.bigint:r[a]=BigInt(t);break;case e.symbol:r[a]=Symbol.for(t);break;case e.RegExp:var i=/\/(.*)\/(.*)/.exec(t);r[a]=new RegExp(i[1],i[2]);break;case e.Buffer:r[a]=Buffer.from(JSON.parse(t));break;case e.Date:r[a]=new Date(t);break;case e.Map:r[a]=new Map(n.parse(t));break;case e.Set:r[a]=new Set(n.parse(t));break;case e.Int8Array:r[a]=new Int8Array(JSON.parse(t));break;case e.Uint8Array:r[a]=new Uint8Array(JSON.parse(t));break;case e.Uint8ClampedArray:r[a]=new Uint8ClampedArray(JSON.parse(t));break;case e.Int16Array:r[a]=new Int16Array(JSON.parse(t));break;case e.Uint16Array:r[a]=new Uint16Array(JSON.parse(t));break;case e.Int32Array:r[a]=new Int32Array(JSON.parse(t));break;case e.Uint32Array:r[a]=new Uint32Array(JSON.parse(t));break;case e.Float32Array:r[a]=new Float32Array(JSON.parse(t));break;case e.Float64Array:r[a]=new Float64Array(JSON.parse(t))}return r[a]}function s(a,e,n,t,f){return Object.keys(t).reduce((function(t,y){var c=t[y];if(c instanceof r){if(c.startsWith("_")){var o=c.substring(1);return e[o]instanceof r&&i(e,o),t[y]=e[o],t}var p=a[c];"object"!=typeof p||n.has(p)?t[y]=f.call(t,y,p):(n.add(p),t[y]=f.call(t,y,s(a,e,n,p,f)))}else t[y]=f.call(t,y,c);return t}),t)}function f(a,e,n){var t=r(e.push(n)-1);return a.set(n,t),t}function y(a){return a instanceof r?r(a):a}function c(e,n){return typeof n===a?new r(n):n}}(String,"string");const t=n;var i=n.parse,s=n.stringify}}]);
//# sourceMappingURL=5125.80a700037fbf12d9.js.map