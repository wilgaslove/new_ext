"use strict";(self.webpackChunkhttp_response_workbench=self.webpackChunkhttp_response_workbench||[]).push([[5624,8283,730],{98283:(r,e,t)=>{function n(r,e){if(null==r)return{};var t,n,o={},s=Object.keys(r);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}t.d(e,{Z:()=>n})},730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>j,CustomErrorBoundary:()=>x,GenericErrorMessage:()=>h,RouteErrorBoundary:()=>I,logError:()=>i}),t(40540);var n=t(60607),o=t(98283),s=t(54302),a=t(25304);const c=["crash"],i=(r,e)=>{let{crash:t=!1}=e,n=(0,o.Z)(e,c);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,Object.assign({crash:t},n)),((r,e)=>{a.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),a.captureException(r)}))})(r,Object.assign({crash:t},n)),((r,e)=>{s.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,n)};var l=t(49437),p=t(80047);const d="Something Went Wrong",u="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var E=t(52322);const m=["title","description","message","illustration","error"],h=r=>{let{title:e=d,description:t=u,message:n,illustration:s="illustration-unable-to-load",error:a}=r,c=(0,o.Z)(r,m);const i=n||a&&a.message;return(0,E.jsxs)(l.Z,Object.assign({title:e,description:t},c,{children:[i&&(0,E.jsx)("p",{children:(0,E.jsx)("i",{children:i})}),(0,E.jsx)(p.Z,{name:s})]}))},I=({children:r,title:e,description:t,message:o,appId:s,errorElementId:a})=>{const c=(0,n.useRouteError)();return i(c,{stack:c.stack,appId:s,errorElementId:a}),r||(0,E.jsx)(h,{title:e,description:t,error:c,message:o})};var g=t(20609);const k=["children","onError","appId","errorElementId","FallbackComponent"],b=(r,e,t,n)=>{i(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:n})},x=r=>{let{children:e,onError:t,appId:n,errorElementId:s,FallbackComponent:a=h}=r,c=(0,o.Z)(r,k);return(0,E.jsx)(g.ErrorBoundary,Object.assign({FallbackComponent:a,onError:(r,e)=>(t||b)(r,e,n,s)},c,{children:e}))},j=({children:r,title:e,description:t,message:o,appId:s,errorElementId:a})=>{const c=(0,n.useAsyncError)();return i(c,{stack:c.stack,appId:s,errorElementId:a}),r||(0,E.jsx)(h,{title:e,description:t,error:c,message:o})}}}]);
//# sourceMappingURL=5624.95bf065acf02e95f.js.map