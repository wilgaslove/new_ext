"use strict";(self.webpackChunkhttp_response_workbench=self.webpackChunkhttp_response_workbench||[]).push([[8243],{78243:(e,t,n)=>{n.r(t),n.d(t,{ResponsePreviewPanel:()=>I});var r=n(40540),s=n.n(r),c=n(48722),o=n(50916),i=n(58560),a=n(98283),l=n(25892),d=n.n(l),u=n(35736),p=n(49437),h=n(63622),f=n(80605),m=n(80047),w=n(52322);const g=["title","loading","error","onRetry","src","srcDoc"],y=d()(i.Z).withConfig({displayName:"iframe-container__StyledIFrameContainer",componentId:"sc-mdcrc8-0"})(["background-color:var(--grey-00);flex:1;"]),v=d().iframe.withConfig({displayName:"iframe-container__StyledIFrame",componentId:"sc-mdcrc8-1"})(["width:100%;height:100%;border:0;",";"],(e=>e.hidden?"display: none":"")),j="https://dl-preview-container.pstmn.io/iframe-viewer-container/v1",x=(e,t)=>{e&&(t&&t(),e.src="",e.src=j)};function b(e,t){const{title:n,loading:s,error:c,onRetry:o,src:l,srcDoc:d}=e,b=(0,a.Z)(e,g),k=(0,r.useRef)(null),C=(0,r.useRef)(o);return C.current=o,(0,r.useEffect)((()=>{x(k.current,C.current)}),[l,d]),(0,w.jsxs)(y,{height:"100%",width:"100%",children:[s&&(0,w.jsx)(i.Z,{width:"100%",height:"100%",justifyContent:"center",children:(0,w.jsx)(u.Z,{description:"Loading"})}),c&&(0,w.jsx)(p.Z,{title:"Preview failed to load",description:(0,w.jsx)(h.ZP,{children:"That wasn't supposed to happen. Reload the preview or try again later."}),primaryAction:(0,w.jsx)(f.Z,{type:"primary",text:"Reload the preview",onClick:()=>x(k.current,C.current)}),children:(0,w.jsx)(m.Z,{name:"illustration-check-internet-connection"})}),(0,w.jsx)(v,Object.assign({hidden:s||c,title:n,src:j,ref:e=>{k.current=e,t&&("function"==typeof t?t(e):t.current=e)},allow:"fullscreen 'none'; payment 'none';",sandbox:"allow-forms allow-scripts"},b))]})}const k=s().forwardRef(b),C=`<meta http-equiv="Content-Security-Policy" content="${["default-src 'none'","script-src 'none'","style-src http: https: 'unsafe-inline'","img-src http: https: data:","font-src http: https:","connect-src http: https:","media-src http: https:","object-src 'none'","child-src 'none'","frame-src 'none'"].join("; ")}">`,R=(e,t,n)=>{var r,s;t.length>0&&n&&(null==(r=n.contentWindow)||r.postMessage(Object.assign({namespace:"containerFrame",id:e},"error"===(s=t)[0]?{type:"error",data:s[1]}:{type:"getContent",data:{type:s[0],value:s[1]}}),"*"))};function Z(e){const{title:t,name:n,src:s,srcdoc:c}=e,[o,i]=(0,r.useState)(!0),[a,l]=(0,r.useState)(!1),d=(0,r.useRef)(null);return(0,r.useEffect)((()=>{let e=setTimeout((()=>l(!0)),5e3);function t(t){if(!t||!t.data||"containerFrame"!==t.data.namespace||t.data.id!==n)return;e&&clearTimeout(e),e=null,i(!1);const{type:r}=t.data;switch(r){case"getContent":{let e=null;c?e=["srcdoc",C+c]:s&&(e=["src",s]),e&&R(n,e,d.current);break}default:R(n,["error",`Invalid message type received: ${r}`],d.current)}}return window.addEventListener("message",t),()=>{e&&clearTimeout(e),window.removeEventListener("message",t)}}),[n,s,c]),s||c?(0,w.jsx)(k,{loading:o,error:a,title:t,name:n,ref:d,src:s,srcDoc:c,onRetry:()=>i(!0)}):null}var _=n(44519);const P=(0,c.v4)(),I=(0,o.observer)((function(){const e=(()=>{const[e]=(0,_._)();return{srcdoc:null!=e?e:void 0}})();return(0,w.jsx)(i.Z,{height:"100%",children:(0,w.jsx)(Z,Object.assign({title:"Preview",name:P},e))})}))}}]);
//# sourceMappingURL=8243.923ad58e349b8548.js.map