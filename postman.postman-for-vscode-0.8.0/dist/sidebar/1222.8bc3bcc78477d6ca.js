/*! For license information please see 1222.8bc3bcc78477d6ca.js.LICENSE.txt */
"use strict";(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[1222],{8535:(e,t,n)=>{function r(e){return window&&window.open(e,"_self","noopener,noreferrer")}n.r(t),n.d(t,{Link:()=>d,OPEN_EXTENSION_URL:()=>p,checkContextAndNavigate:()=>r,openExternalLink:()=>_,useAdditionalRouteContext:()=>E,useNavigate:()=>v,withRouter:()=>u});var o=n(7560),a=n(540),i=n(607),s=n(2322);function u(e){return t=>{const n=(0,i.useLocation)(),r=(0,i.useNavigate)(),a=(0,i.useParams)();return(0,s.jsx)(e,(0,o.Z)({location:n,navigate:r,params:a},t))}}var c=n(8283),l=n(4302);n(9605);const f=["children","to"],d=e=>{let{children:t,to:n}=e,r=(0,c.Z)(e,f);if(r.customNavEvent)return(0,s.jsx)(l.VSCodeLink,(0,o.Z)({to:n},r,{children:t}));const a=(0,o.Z)({},{target:"_self",rel:"noreferrer noopener"},r),u=n.toString();return new RegExp("https?:\\/\\/").test(u)?(0,s.jsx)("a",(0,o.Z)({href:u},a,{onClick:async e=>{r.onClick&&r.onClick(e),e.defaultPrevented},children:t})):(0,s.jsx)(i.Link,(0,o.Z)({to:n},a,{children:t}))},v=()=>{const e=(0,i.useNavigate)();return(t,n,r)=>{if(null==r||!r.customNavEvent||((0,l.vscodeNavigate)(t,{},r),r["customNavEvent-updateURL"]))return e(t,n)}},p="VIEW_COLLECTION_FOLDER_REQUEST";async function _(e){await(0,l.vsCodeOpenExternalLink)(e)}const E=()=>{const e=(0,i.useLocation)();return(0,a.useMemo)((()=>(()=>{try{var e;return(null==(e=JSON.parse(window.NAVIGATION_CONTEXT))||null==(e=e.options)?void 0:e.additionalContext)||{}}catch(e){return{}}})()),[e.state])}},1837:(e,t,n)=>{var r=n(540),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:i.current}}t.jsx=c,t.jsxs=c},2322:(e,t,n)=>{e.exports=n(1837)}}]);
//# sourceMappingURL=1222.8bc3bcc78477d6ca.js.map