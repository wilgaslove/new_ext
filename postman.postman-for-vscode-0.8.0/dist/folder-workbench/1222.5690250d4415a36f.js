/*! For license information please see 1222.5690250d4415a36f.js.LICENSE.txt */
"use strict";(self.webpackChunkfolder_workbench=self.webpackChunkfolder_workbench||[]).push([[1222,8283,8535],{98283:(e,n,t)=>{function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,{Z:()=>r})},58535:(e,n,t)=>{function r(e){return window&&window.open(e,"_self","noopener,noreferrer")}t.r(n),t.d(n,{Link:()=>f,OPEN_EXTENSION_URL:()=>v,checkContextAndNavigate:()=>r,openExternalLink:()=>p,useAdditionalRouteContext:()=>_,useNavigate:()=>d,withRouter:()=>i});var o=t(40540),a=t(60607),s=t(52322);function i(e){return n=>{const t=(0,a.useLocation)(),r=(0,a.useNavigate)(),o=(0,a.useParams)();return(0,s.jsx)(e,Object.assign({location:t,navigate:r,params:o},n))}}var c=t(98283),u=t(54302);t(29605);const l=["children","to"],f=e=>{let{children:n,to:t}=e,r=(0,c.Z)(e,l);if(r.customNavEvent)return(0,s.jsx)(u.VSCodeLink,Object.assign({to:t},r,{children:n}));const o=Object.assign({},{target:"_self",rel:"noreferrer noopener"},r),i=t.toString();return new RegExp("https?:\\/\\/").test(i)?(0,s.jsx)("a",Object.assign({href:i},o,{onClick:async e=>{r.onClick&&r.onClick(e),e.defaultPrevented},children:n})):(0,s.jsx)(a.Link,Object.assign({to:t},o,{children:n}))},d=()=>{const e=(0,a.useNavigate)();return(n,t,r)=>{if(null==r||!r.customNavEvent||((0,u.vscodeNavigate)(n,{},r),r["customNavEvent-updateURL"]))return e(n,t)}},v="VIEW_COLLECTION_FOLDER_REQUEST";async function p(e){await(0,u.vsCodeOpenExternalLink)(e)}const _=()=>{const e=(0,a.useLocation)();return(0,o.useMemo)((()=>(()=>{try{var e;return(null==(e=JSON.parse(window.NAVIGATION_CONTEXT))||null==(e=e.options)?void 0:e.additionalContext)||{}}catch(e){return{}}})()),[e.state])}},11837:(e,n,t)=>{var r=t(40540),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),n.Fragment=a("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,a={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:s.current}}n.jsx=u,n.jsxs=u},52322:(e,n,t)=>{e.exports=t(11837)}}]);
//# sourceMappingURL=1222.5690250d4415a36f.js.map