"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[730],{730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>w,CustomErrorBoundary:()=>b,GenericErrorMessage:()=>I,RouteErrorBoundary:()=>k,logError:()=>l}),t(40540);var o=t(60607),n=t(7560),s=t(98283),a=t(54302),c=t(25304);const i=["crash"],l=(r,e)=>{let{crash:t=!1}=e,o=(0,s.Z)(e,i);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,(0,n.Z)({crash:t},o)),((r,e)=>{c.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),c.captureException(r)}))})(r,(0,n.Z)({crash:t},o)),((r,e)=>{a.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,o)};var p=t(49437),d=t(80047);const E="Something Went Wrong",m="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var u=t(52322);const h=["title","description","message","illustration","error"],I=r=>{let{title:e=E,description:t=m,message:o,illustration:a="illustration-unable-to-load",error:c}=r,i=(0,s.Z)(r,h);const l=o||c&&c.message;return(0,u.jsxs)(p.Z,(0,n.Z)({title:e,description:t},i,{children:[l&&(0,u.jsx)("p",{children:(0,u.jsx)("i",{children:l})}),(0,u.jsx)(d.Z,{name:a})]}))},k=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const c=(0,o.useRouteError)();return l(c,{stack:c.stack,appId:s,errorElementId:a}),r||(0,u.jsx)(I,{title:e,description:t,error:c,message:n})};var g=t(20609);const x=["children","onError","appId","errorElementId","FallbackComponent"],S=(r,e,t,o)=>{l(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:o})},b=r=>{let{children:e,onError:t,appId:o,errorElementId:a,FallbackComponent:c=I}=r,i=(0,s.Z)(r,x);return(0,u.jsx)(g.ErrorBoundary,(0,n.Z)({FallbackComponent:c,onError:(r,e)=>(t||S)(r,e,o,a)},i,{children:e}))},w=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const c=(0,o.useAsyncError)();return l(c,{stack:c.stack,appId:s,errorElementId:a}),r||(0,u.jsx)(I,{title:e,description:t,error:c,message:n})}}}]);
//# sourceMappingURL=730.c2bf0fc69ecd6905.js.map