"use strict";(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[9239],{31597:(e,a,n)=>{n.r(a),n.d(a,{perfComponents:()=>t,perfConst:()=>r,sendMeasureEvent:()=>E,sessionId:()=>p});var r={};n.r(r),n.d(r,{GENERIC_CATEGORY:()=>c,PERFORMANCE_GLOBAL_NAMESPACE:()=>o});var t={};n.r(t),n.d(t,{PerfContext:()=>u,PerformanceMarkPaint:()=>f});const o="__POSTMAN_PERFORMANCE__",c="app-perf";var i=n(40540),s=n(52322);function f({children:e,markName:a,condition:n=!0,callback:r=function(){}}){const[t,o]=(0,i.useState)(!1),c=(0,i.useRef)(0),f=()=>{var e;if(n&&!t&&null!=(e=performance)&&e.mark){performance.mark(a);try{r()}catch(e){console.error("PerformanceMarkPaint: provided callback threw an error.",e)}o(!0)}};return(0,i.useLayoutEffect)((()=>(c.current=requestAnimationFrame(f),()=>cancelAnimationFrame(c.current))),[n]),(0,s.jsx)(s.Fragment,{children:e})}f.displayName="PerformanceMarkPaint";const m={markName:void 0,callback:void 0},u=(0,i.createContext)(m);u.displayName="PerfContext";var l=n(7560),d=n(15837);const p=(0,n(48722).v4)(),k=[];function v(e){const a=(0,l.Z)({},e,{traceId:p});d.AnalyticsService.addEventV2(a)}function E({name:e,category:a=c,label:n,entityType:r,once:t=!0}){if(!t||!k.includes(e)){k.push(e);for(const t of performance.getEntriesByName(e).filter((e=>e instanceof PerformanceMeasure)))v({category:a,action:t.name,value:Math.round(t.duration),label:n||"",entityType:r})}}}}]);
//# sourceMappingURL=9239.d4d47990b32dbe50.js.map