"use strict";(self.webpackChunkenvironment_workbench=self.webpackChunkenvironment_workbench||[]).push([[5624,730],{98283:(r,e,t)=>{function n(r,e){if(null==r)return{};var t,n,o={},s=Object.keys(r);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}t.d(e,{Z:()=>n})},730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>j,CustomErrorBoundary:()=>x,GenericErrorMessage:()=>h,RouteErrorBoundary:()=>I,logError:()=>c}),t(40540);var n=t(60607),o=t(98283),s=t(54302),a=t(25304);const i=["crash"],c=(r,e)=>{let{crash:t=!1}=e,n=(0,o.Z)(e,i);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,Object.assign({crash:t},n)),((r,e)=>{a.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),a.captureException(r)}))})(r,Object.assign({crash:t},n)),((r,e)=>{s.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,n)};var l=t(49437),d=t(80047);const p="Something Went Wrong",u="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var E=t(52322);const m=["title","description","message","illustration","error"],h=r=>{let{title:e=p,description:t=u,message:n,illustration:s="illustration-unable-to-load",error:a}=r,i=(0,o.Z)(r,m);const c=n||a&&a.message;return(0,E.jsxs)(l.Z,Object.assign({title:e,description:t},i,{children:[c&&(0,E.jsx)("p",{children:(0,E.jsx)("i",{children:c})}),(0,E.jsx)(d.Z,{name:s})]}))},I=({children:r,title:e,description:t,message:o,appId:s,errorElementId:a})=>{const i=(0,n.useRouteError)();return c(i,{stack:i.stack,appId:s,errorElementId:a}),r||(0,E.jsx)(h,{title:e,description:t,error:i,message:o})};var g=t(20609);const k=["children","onError","appId","errorElementId","FallbackComponent"],b=(r,e,t,n)=>{c(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:n})},x=r=>{let{children:e,onError:t,appId:n,errorElementId:s,FallbackComponent:a=h}=r,i=(0,o.Z)(r,k);return(0,E.jsx)(g.ErrorBoundary,Object.assign({FallbackComponent:a,onError:(r,e)=>(t||b)(r,e,n,s)},i,{children:e}))},j=({children:r,title:e,description:t,message:o,appId:s,errorElementId:a})=>{const i=(0,n.useAsyncError)();return c(i,{stack:i.stack,appId:s,errorElementId:a}),r||(0,E.jsx)(h,{title:e,description:t,error:i,message:o})}}}]);
//# sourceMappingURL=5624.b726d918fb0ad165.js.map