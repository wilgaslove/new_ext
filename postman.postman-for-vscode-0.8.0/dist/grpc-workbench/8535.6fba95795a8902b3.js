/*! For license information please see 8535.6fba95795a8902b3.js.LICENSE.txt */
"use strict";(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[8535,7397,7560,25,1222],{7560:(e,n,t)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:()=>r})},98283:(e,n,t)=>{function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,{Z:()=>r})},58535:(e,n,t)=>{function r(e){return window&&window.open(e,"_self","noopener,noreferrer")}t.r(n),t.d(n,{Link:()=>p,OPEN_EXTENSION_URL:()=>v,checkContextAndNavigate:()=>r,openExternalLink:()=>_,useAdditionalRouteContext:()=>O,useNavigate:()=>d,withRouter:()=>c});var o=t(7560),a=t(40540),i=t(60607),s=t(52322);function c(e){return n=>{const t=(0,i.useLocation)(),r=(0,i.useNavigate)(),a=(0,i.useParams)();return(0,s.jsx)(e,(0,o.Z)({location:t,navigate:r,params:a},n))}}var u=t(98283),l=t(54302);t(29605);const f=["children","to"],p=e=>{let{children:n,to:t}=e,r=(0,u.Z)(e,f);if(r.customNavEvent)return(0,s.jsx)(l.VSCodeLink,(0,o.Z)({to:t},r,{children:n}));const a=(0,o.Z)({},{target:"_self",rel:"noreferrer noopener"},r),c=t.toString();return new RegExp("https?:\\/\\/").test(c)?(0,s.jsx)("a",(0,o.Z)({href:c},a,{onClick:async e=>{r.onClick&&r.onClick(e),e.defaultPrevented},children:n})):(0,s.jsx)(i.Link,(0,o.Z)({to:t},a,{children:n}))},d=()=>{const e=(0,i.useNavigate)();return(n,t,r)=>{if(null==r||!r.customNavEvent||((0,l.vscodeNavigate)(n,{},r),r["customNavEvent-updateURL"]))return e(n,t)}},v="VIEW_COLLECTION_FOLDER_REQUEST";async function _(e){await(0,l.vsCodeOpenExternalLink)(e)}const O=()=>{const e=(0,i.useLocation)();return(0,a.useMemo)((()=>(()=>{try{var e;return(null==(e=JSON.parse(window.NAVIGATION_CONTEXT))||null==(e=e.options)?void 0:e.additionalContext)||{}}catch(e){return{}}})()),[e.state])}},11837:(e,n,t)=>{var r=t(40540),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),n.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,a={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}n.jsx=u,n.jsxs=u},52322:(e,n,t)=>{e.exports=t(11837)}}]);
//# sourceMappingURL=8535.6fba95795a8902b3.js.map