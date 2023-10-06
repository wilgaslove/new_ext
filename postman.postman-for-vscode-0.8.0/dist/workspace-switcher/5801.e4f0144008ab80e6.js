"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[5801],{4415:(e,r,t)=>{t.r(r);var s=t(540),i=t(1730),a=t(607),o=t(5736),c=t(9316),n=t(2322);const l=()=>{const[e,r]=(0,s.useState)(!1);return(0,n.jsx)(c.Z,{isOpen:e,setIsOpen:r})};var d=t(923);const p=(0,a.createBrowserRouter)([{path:"/",element:(0,n.jsx)(l,{}),errorElement:(0,n.jsx)(d.RouteErrorBoundary,{appId:"workspace-switcher",errorElementId:"index-route"})},{path:"/workspace/:workspaceId/*",element:(0,n.jsx)(l,{}),errorElement:(0,n.jsx)(d.RouteErrorBoundary,{appId:"workspace-switcher",errorElementId:"workspace-page-route"})}]);function h(){return(0,n.jsx)(a.RouterProvider,{router:p,fallbackElement:(0,n.jsx)(o.Z,{})})}var u=t(4025),w=t(4958);(0,t(5837).initializeAnalytics)(),t(7567);const x=document.querySelector("#workspace-switcher_root");i.render((0,n.jsx)(s.StrictMode,{children:(0,n.jsx)(d.CustomErrorBoundary,{appId:"workspace-switcher",errorElementId:"global-error-boundary",children:(0,n.jsx)(u.ThemeContextProvider,{children:(0,n.jsx)(w.DataFetchCacheProvider,{children:(0,n.jsx)(h,{})})})})}),x)},1075:(e,r,t)=>{t.d(r,{ZP:()=>Z}),t(540);var s=t(9460),i=t(8560),a=t(6081),o=t(1437),c=t(9342),n=t(634),l=t(346),d=t(6285),p=t(2385),h=t(5892),u=t.n(h),w=t(2322);let x,v,m,g=e=>e;const j=u()(s.ZP)(x||(x=g`
  width: 70%;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (min-width: 320px) {
    margin-left: var(--spacing-s);
  }
`)),k=u()(a.Link)(v||(v=g`
  display: flex;
  height: var(--size-m);
  width: 100%;
  padding: var(--spacing-zero) var(--spacing-s);
  height: var(--size-m);
  align-items: center;
  cursor: pointer;
  gap: var(--spacing-s);
  color: var(--content-color-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;

  &:hover {
    background-color: var(--highlight-background-color-primary);
  }

  @media (min-width: 320px) {
    padding: var(--spacing-zero) var(--spacing-l);
  }
`)),b=u()(i.Z)(m||(m=g`
  height: var(--size-xs);
  width: var(--size-xs);
  justify-content: center;

  @media (min-width: 320px) {
    margin-right: var(--spacing-s);
  }
`)),y=({visibilityStatus:e})=>{switch(e){case"team":return(0,w.jsx)(o.Z,{});case"public":return(0,w.jsx)(c.Z,{});case"partner":return(0,w.jsx)(n.Z,{});case"private":return(0,w.jsx)(l.Z,{});default:return(0,w.jsx)(d.Z,{})}},f=({isActive:e})=>(0,w.jsx)(b,{children:e?(0,w.jsx)(p.Z,{"data-testid":"checked-workspace-icon"}):""}),Z=({workspace:e,onClick:r,isActive:t,style:s})=>(0,w.jsxs)(k,{to:`/workspace/${e.id}`,onClick:t=>{r&&(t.preventDefault(),r(e))},style:s,className:t?"active":"","data-testid":t?"active-workspace":"",children:[(0,w.jsx)(f,{isActive:t}),(0,w.jsx)(y,{visibilityStatus:e.visibilityStatus}),(0,w.jsx)(j,{children:e.name||e.label})]})},7567:(e,r,t)=>{t.r(r)}}]);
//# sourceMappingURL=5801.e4f0144008ab80e6.js.map