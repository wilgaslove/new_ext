"use strict";(self.webpackChunkws_workbench=self.webpackChunkws_workbench||[]).push([[3694],{83694:(e,s,o)=>{const n=o(45779);e.exports=(e,s={})=>{if(!Number.isFinite(e))throw new TypeError("Expected a finite number");s.colonNotation&&(s.compact=!1,s.formatSubMilliseconds=!1,s.separateMilliseconds=!1,s.verbose=!1),s.verbose&&(s.padUnits=!0),s.compact&&(s.secondsDecimalDigits=0,s.millisecondsDecimalDigits=0);const o=[],i=(e,n,i,t)=>{if(!(0!==o.length&&s.colonNotation||0!==e||s.colonNotation&&"m"===i))return;let c,l;if(t=(t||e||"0").toString(),s.colonNotation){c=o.length>0?":":"",l="";const e=t.includes(".")?t.split(".")[0].length:t.length,s=o.length>0?2:1;t="0".repeat(Math.max(0,s-e))+t}else c="",l=(s.padUnits?" ":"")+(s.verbose?(r=n,1===e?r:`${r}s`):i);var r;o.push(c+t+l)};if(("number"==typeof s.secondsDecimalDigits?s.secondsDecimalDigits:1)<1){const s=1e3-e%1e3;s<500&&(e+=s)}if(e>=59950&&!s.separateMilliseconds&&!s.formatSubMilliseconds){const s=60-e%60;s<=50&&(e+=s)}const t=n(e);if(i(Math.trunc(t.days/365),"year","y"),i(t.days%365,"day","d"),i(t.hours,"hour","h"),i(t.minutes,"minute","m"),s.separateMilliseconds||s.formatSubMilliseconds||e<1e3)if(i(t.seconds,"second","s"),s.formatSubMilliseconds)i(t.milliseconds,"millisecond","ms"),i(t.microseconds,"microsecond","µs"),i(t.nanoseconds,"nanosecond","ns");else{const e=t.milliseconds+t.microseconds/1e3+t.nanoseconds/1e6,o="number"==typeof s.millisecondsDecimalDigits?s.millisecondsDecimalDigits:0,n=e>=1?Math.round(e):Math.ceil(e),c=o?e.toFixed(o):n;i(parseFloat(c,10),"millisecond","ms",c)}else{const o=e/1e3%60,n="number"==typeof s.secondsDecimalDigits?s.secondsDecimalDigits:1,t=o.toFixed(n),c=s.keepDecimalsOnWholeSeconds?t:t.replace(/\.0+$/,"");i(parseFloat(c,10),"second","s",c)}if(0===o.length)return"0"+(s.verbose?" milliseconds":"ms");if(s.compact)return o[0];if("number"==typeof s.unitCount){const e=s.colonNotation?"":" ";return o.slice(0,Math.max(s.unitCount,1)).join(e)}return s.colonNotation?o.join(""):o.join(" ")}},45779:e=>{e.exports=e=>{if("number"!=typeof e)throw new TypeError("Expected a number");const s=e>0?Math.floor:Math.ceil;return{days:s(e/864e5),hours:s(e/36e5)%24,minutes:s(e/6e4)%60,seconds:s(e/1e3)%60,milliseconds:s(e)%1e3,microseconds:s(1e3*e)%1e3,nanoseconds:s(1e6*e)%1e3}}}}]);
//# sourceMappingURL=3694.2ea3f1e62621268a.js.map