"use strict";(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[8062],{8062:(e,r,o)=>{o.d(r,{Z:()=>fr});var t=o(7155),n=o.n(t),a=o(2723),i=o.n(a),s=o(540),l=o(5892),c=o.n(l),d=o(8283),p=o(3723),u=o.n(p),b=o(7560),h=o(2322);const v=["children","onClick","size"];let x;const g=c().button(x||(x=(e=>e)`
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  outline: none;

  padding: ${0};
`),(({size:e})=>"default"===e?"0":"padding: var(--spacing-s, calc(24px / 2));"));function m(e){let{children:r,onClick:o,size:t="default"}=e,n=(0,d.Z)(e,v);return(0,h.jsx)(g,(0,b.Z)({onClick:o,size:t},n,{children:r}))}const w=(0,s.createContext)({activeSidebar:null,navCollapsed:!1,setActiveSidebar:()=>{}}),f=()=>{const e=(0,s.useContext)(w);if(!e)throw new Error("useSidebarContext should be used within a SidebarContext.Provider");return e},k=({value:e,children:r})=>(0,h.jsx)(w.Provider,{value:e,children:r}),y=["showVerticalSidebarOnSingleConfig"];let j,C,S,I=e=>e;const E=c().ul(j||(j=I`
  flex: 1;
  list-style: none;
  margin: 0;
  padding: ${0};
  width: ${0};

  ${0}
`),(({collapsed:e})=>e?"0":"var(--spacing-xs, 4px) 0"),(({collapsed:e})=>e?"40px":"max-content"),(({collapsed:e})=>!e&&"\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-xs, 4px);\n    border-right: 1px solid var(--border-color-default, #ededed);\n    background: var(--background-color-secondary);\n\n    font-size: var(--text-size-xs, 10px);\n    line-height: var(--text-size-xl, 16px);\n    text-align: center;\n  ")),Z=c().li(C||(C=I`
  position: relative;
  box-sizing: border-box;
  width: ${0};
  height: ${0};

  &:hover,
  &:focus {
    background: var(--highlight-background-color-tertiary, rgba(0, 0, 0, 0.05));
  }

  ${0}
`),(({collapsed:e})=>e?"40px":"80px"),(({collapsed:e})=>e?"40px":"52px"),(({collapsed:e})=>!e&&"\n    margin: 0 var(--spacing-xs, 4px);\n    border-radius: var(--border-radius-default, 4px);\n\n    &.active {\n      background: var(--highlight-background-color-tertiary, rgba(0, 0, 0, 0.05));\n      box-shadow: var(--base-color-brand);\n      color: var(--content-color-primary);\n\n      &:before {\n        content: '';\n        position: absolute;\n        left: 0;\n        width: 2px;\n        background: var(--base-color-brand, #f37a00);\n        border-radius: 0 var(--border-radius-s, 8px) var(--border-radius-s, 8px) 0;\n        top: var(--spacing-xs, 4px);\n        bottom: var(--spacing-xs, 4px);\n      }\n    }\n  ")),O=c().h3(S||(S=I`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  font-size: 1em;
  margin: 0;
  font-weight: normal;
  color: var(--content-color-primary);
`));function _(e){let{showVerticalSidebarOnSingleConfig:r=!0}=e,o=(0,d.Z)(e,y);const{navCollapsed:t}=f(),n=o.collapsed||t;return 1!==o.items.length||r?(0,h.jsx)(E,{role:"tablist",collapsed:o.collapsed,children:o.items.map((e=>(0,h.jsx)(Z,{role:"tab",collapsed:n,className:u()({active:e.id===o.activeItemId}),"aria-label":e.title,"aria-selected":e.id===o.activeItemId,"aria-expanded":!o.collapsed,children:(0,h.jsxs)(m,{onClick:()=>o.onClick&&o.onClick(e.id),size:n?"sm":"default",children:[e.icon,!n&&(0,h.jsx)(O,{children:e.title})]})},e.id)))}):null}function z(e){const{activeSidebar:r,collapsed:o,setActiveSidebar:t}=f();return(0,h.jsx)(_,{collapsed:o,items:e.menus,showVerticalSidebarOnSingleConfig:e.showVerticalSidebarOnSingleConfig,activeItemId:r,onClick:t})}var N=o(8560),R=o(5736),W=o(2156),A=o(6081),T=o(8722),V=o(607),P=o(8691),$=o(347),q=o(2922),L=o(4306),H=o(9706),B=o(5286),F=o(4302);const U="http",D="ws-raw",M="grpc",Y=U;var Q=o(856);let K;const X=c()(Q.ZP)(K||(K=(e=>e)`
  .tippy-content {
    background-color: var(--background-color-secondary);
  }

  .tippy-svg-arrow > svg > path {
    fill: var(--background-color-secondary);
  }
`));var G=o(5837),J=o(9972);let ee,re,oe,te=e=>e;const ne={[U]:"/request/create",[D]:"/ws-raw-request/create",[M]:"/grpc-request/create"},ae=c()(V.Link)(ee||(ee=te`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: var(--line-height-xl);
  padding: var(--spacing-zero) var(--spacing-s);
  border-radius: var(--border-radius-default);

  &:hover {
    background-color: var(--background-color-tertiary);
  }

  color: var(--content-color-primary);
`)),ie=c().div(re||(re=te`
  margin-left: var(--spacing-s);
`)),se={[U]:{label:"HTTP",Icon:q.Z,iconColor:"content-color-success"},[D]:{label:"WebSocket",Icon:L.Z,iconColor:"content-color-brand"},[M]:{label:"gRPC",Icon:H.Z,iconColor:"content-color-info"}},le=c()(P.Z)(oe||(oe=te`
  --secondary-btn-width: var(--spacing-xxl);
  --splitter-width: 1px;
  height: var(--controls-size-default);
  width: 100%;

  background-color: var(--button-primary-background-color);
  color: var(--button-primary-content-color);
  cursor: pointer;

  > button {
    background-color: inherit;
    padding: 0 var(--spacing-s);

    > span {
      color: var(--button-primary-content-color);
    }

    :hover {
      background-color: var(--button-primary-hover-background-color);
    }

    &:active,
    &.is-active {
      background-color: var(--button-primary-active-background-color);
    }
  }

  .aether-split-button__primary-btn {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    width: calc(100% - var(--secondary-btn-width) - var(--splitter-width));

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .aether-split-button__secondary-btn {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    width: var(--secondary-btn-width);
  }

  .aether-split-button__splitter {
    border-left-color: var(--vscode-button-separator);
    width: var(--splitter-width);
  }
  &:hover {
    .aether-split-button__splitter {
      border-left-color: var(--vscode-button-separator);
    }
  }
`)),ce=()=>{const e=(0,J.useActiveWorkspaceId)(),r=localStorage.getItem(`activeProtocol:${window.USER_ID}`),[o,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(r||Y),i=(0,A.useNavigate)(),l=r=>{i(`/workspace/${e}${ne[r]}?requestId=${(0,T.v4)()}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),G.AnalyticsService.addEventV2({category:r,action:"open-tab",label:"new-request",value:1})},c=se[n].iconColor,d=(0,s.useRef)();return(0,h.jsx)(le,{type:"primary",text:`New ${se[n].label} Request`,onClick:()=>l(n),secondaryButton:(0,h.jsx)(W.Z,{type:"primary",color:c,onClick:()=>t((e=>!e)),ref:d}),children:(0,h.jsxs)(X,{isOpen:o,onClickOutside:()=>t(!1),triggerRef:d,children:[Object.keys(se).map((e=>{const{label:r,Icon:o}=se[e];return(0,h.jsxs)(ae,{to:"",onClick:()=>{var r;r=e,t(!1),a(r),l(r),localStorage.setItem(`activeProtocol:${window.USER_ID}`,r)},children:[(0,h.jsx)(o,{color:se[e].iconColor}),(0,h.jsx)(ie,{children:r})]},e)})),(0,h.jsx)($.Z,{}),(0,h.jsxs)(ae,{to:"",onClick:()=>{F.VSCodeCommunicationsService.postMessageToExtension({type:"INITIATE_IMPORT",payload:{}}),t(!1)},children:[(0,h.jsx)(B.Z,{}),(0,h.jsx)(ie,{children:"Import cURL"})]},"import")]})})};var de=o(1397);let pe,ue,be,he,ve=e=>e;const xe=c().div(pe||(pe=ve`
  width: 100%;
  display: flex;
`)),ge=c().div(ue||(ue=ve`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 var(--spacing-s);
  border-radius: var(--border-radius-default);
  border: 0px var(--border-style-solid) transparent;
  overflow: hidden;
  background-color: var(--highlight-background-color-primary);
`)),me=c().button(be||(be=ve`
  display: flex;
  flex: 1;
  flex-flow: column;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: var(--spacing-zero);
  border-bottom: none;
  cursor: pointer;
  height: var(--controls-size-default);
  &.active {
    border-radius: var(--border-radius-default);
    background: var(--background-color-primary);
    border: none;
    box-shadow: var(--border-color-default) 0px 0px 0px 1px inset;
  }
`)),we=c().div(he||(he=ve`
  padding: var(--spacing-s);
`)),fe=({elements:e})=>{const{activeSidebar:r,setActiveSidebar:o}=f();return(0,h.jsx)(xe,{children:(0,h.jsx)(ge,{children:null==e?void 0:e.map((e=>{const t=e.id===r;return(0,h.jsx)(de.Z,{content:e.title,placement:"bottom",children:(0,h.jsx)(me,{onClick:()=>o(e.id),"aria-label":e.title+" Tab",className:t?"active":"",children:(0,h.jsx)(we,{children:e.icon})})})}))})})};var ke=o(9460),ye=o(5482),je=o(923);const Ce=({children:e})=>(0,h.jsx)(je.CustomErrorBoundary,{appId:"sidebar",errorElementId:"workspace-switcher",fallback:(0,h.jsxs)(N.Z,{gap:"spacing-s",height:"var(--size-m)",alignItems:"center",children:[(0,h.jsx)(ye.Z,{color:"content-color-error"}),(0,h.jsx)(ke.ZP,{color:"content-color-error",type:"para",children:"Failed to load workspaces"})]}),children:e});var Se=o(3720);const Ie="workspace-label-paint-time",Ee="workspace-label-paint-mark";let Ze,Oe,_e,ze,Ne=e=>e;const{PerformanceMarkPaint:Re}=Se.perfComponents,We=()=>{performance.measure(Ie,{},Ee),(0,Se.sendMeasureEvent)({name:Ie})},Ae=(0,s.lazy)((()=>o.e(5757).then(o.t.bind(o,5757,23)))),Te=(0,s.lazy)((()=>o.e(634).then(o.t.bind(o,634,23)))),Ve=c()(Te)(Ze||(Ze=Ne`
  flex: 1;
  padding: 0 !important;
  margin-left: 4px;
  :hover {
    color: var(--base-color-info);
    background: transparent !important;
    path {
      fill: var(--base-color-info);
    }
  }
`)),Pe=c().header(Oe||(Oe=Ne`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: var(--background-color-secondary);

  &.bottom-border {
    /* TODO: Validate if we need default color */
    border-bottom: var(--border-width-default, 1px)
      var(--border-style-solid, solid) var(--border-color-default, #ededed);
  }
`)),$e=c().div(_e||(_e=Ne`
  padding: var(--spacing-s);
  align-self: stretch;
`)),qe=c()(N.Z)(ze||(ze=Ne`
  width: 100%;
  margin: var(--spacing-s) 0;
  gap: var(--spacing-s);

  padding: 0 var(--spacing-xs);

  @media (min-width: 220px) {
    padding: 0 var(--spacing-s);
  }
`));function Le({showActions:e=!0,showNewRequestButton:r,showSidebarHeaderTabs:o,showWorkspaceSwitcherConfig:t=!0,elements:n=[]}){const a=(0,A.useNavigate)(),i=(0,J.useActiveWorkspaceId)(),l=(0,s.useCallback)((()=>{}),[]),[c,d]=(0,s.useState)(!1),p=(0,s.useCallback)((()=>{i&&a(`/workspace/${i}/request/create?requestId=${(0,T.v4)()}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}),[i,a]);return(0,h.jsxs)(Pe,{className:o?"":"bottom-border",children:[t&&(0,h.jsxs)(qe,{direction:"column",children:[(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(R.Z,{}),children:(0,h.jsx)(Ce,{children:(0,h.jsx)(Re,{markName:Ee,callback:We,children:(0,h.jsx)(Ae,{isOpen:c,setIsOpen:d})})})}),r&&(0,h.jsx)(ce,{})]}),e&&(0,h.jsx)($e,{children:(0,h.jsxs)(N.Z,{gap:"spacing-xs",alignItems:"center",children:[!t&&(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(R.Z,{}),children:(0,h.jsx)(Ce,{children:(0,h.jsx)(Ve,{})})}),(0,h.jsx)(W.Z,{type:"secondary",size:"small",text:"New",onClick:p,disabled:!1,tooltip:!1}),(0,h.jsx)(W.Z,{type:"secondary",size:"small",text:"Import",onClick:l,disabled:!1,tooltip:"You don't have permission to take this action."})]})}),o&&(null==n?void 0:n.length)>0&&(0,h.jsx)(fe,{elements:n})]})}var He=o(6259),Be=o(678),Fe=o(455),Ue=o(1777),De=o(9754),Me=o(1592),Ye=o(623);const Qe=(0,s.lazy)((()=>o.e(7926).then(o.t.bind(o,7926,23)))),Ke=()=>(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(R.Z,{}),children:(0,h.jsx)(Qe,{})});var Xe=o(4664),Ge=o(47),Je=o(4181);const er=(0,s.lazy)((()=>o.e(9113).then(o.t.bind(o,9113,23)))),rr=()=>{const e=(0,J.useActiveWorkspaceId)();return Je.ENABLE_COLLECTIONS?(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(R.Z,{}),children:(0,h.jsx)(er,{activeWorkspaceId:e})}):(0,h.jsx)(Xe.Z,{title:"Collections coming soon",description:"Work with collections in your workspace, right in VS Code!",children:(0,h.jsx)(Ge.Z,{name:"illustration-no-collection"})})};var or=o(1219);const tr=(0,s.lazy)((()=>o.e(9499).then(o.t.bind(o,9499,23)))),nr=()=>(0,or.useEnvironmentFeatureFlag)()?(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(R.Z,{}),children:(0,h.jsx)(tr,{})}):(0,h.jsx)(Xe.Z,{title:"Environments coming soon",description:"Work with environments in your workspace, right in VS Code!",children:(0,h.jsx)(Ge.Z,{name:"illustration-no-environment"})}),ar=(He.Z,Be.Z,Fe.Z,Ue.Z,De.Z,Me.Z,Ye.Z,{position:"horizontal",activeElement:"collection",collapsed:!1,navCollapsed:!0,showVerticalSidebarOnSingleConfig:!1,showActions:!1,showWorkspaceSwitcher:!0,showNewRequestButton:!0,showSidebarHeaderTabs:!0,fullWidthWorkspaceSwitcher:!0,elements:[{id:"collection",title:"Collections",position:1,icon:(0,h.jsx)(He.Z,{color:"content-color-primary"}),element:(0,h.jsx)(rr,{})},{id:"environment",title:"Environments",position:2,icon:(0,h.jsx)(Fe.Z,{color:"content-color-primary"}),element:(0,h.jsx)(nr,{})},{id:"history",title:"History",position:3,icon:(0,h.jsx)(Ye.Z,{color:"content-color-primary"}),element:(0,h.jsx)(Ke,{})}]});Ye.Z,He.Z,Fe.Z;var ir=o(4025);const sr=new class{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:r=e.workspaceId,subscriptionHandler:o}){if(""===r)return;if(e.workspaceId!==r&&e.changeWorkspace(r),e.observer||e.asyncObserver)return;const{asyncObserver:t,abortController:n}=(0,J.subscribeToWorkspaceEvents)(r);e.abortController=n,e.asyncObserver=t,e.observer=await t,e.abortController=null,e.observer.subscribe({next:e=>{o(e,{workspaceId:r})},complete:()=>{e.unsubscribe()},error:async function(t){e.cleanup(),await e.subscribe({subscriptionHandler:o,workspaceId:r})}})},this.unsubscribe=()=>{var e,r;null==(e=this.abortController)||e.abort(),null==(r=this.observer)||r.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}};var lr=o(4958);const cr=e=>{"workspace"===(null==e?void 0:e.meta.model)&&"update_roles"===e.meta.action&&((0,lr.invalidateCache)(["workspace","collection-permissions",e.data.id]),(0,lr.invalidateCache)([or.WORKSPACE_QUERY_KEY_PREFIX,or.ENVIRONMENTS_SIDEBAR_PERMISSIONS_QUERY_KEY_PREFIX,e.data.id]))};let dr,pr,ur,br=e=>e;const hr=(0,s.lazy)((()=>o.e(7122).then(o.bind(o,7122)))),vr=(0,s.lazy)((()=>o.e(3890).then(o.bind(o,3890)))),xr=c().nav(dr||(dr=br`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`)),gr=c().div(pr||(pr=br`
  flex: 1 1 100%;
  display: flex;
  height: 100%;
`)),mr=c().div(ur||(ur=br`
  contain: strict;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  background-color: var(--background-color-secondary);
  box-shadow: inset -1px 0 0 var(--background-color-secondary);
  box-sizing: border-box;
  z-index: 20;
`)),wr=n()((e=>e),i()),fr=()=>{const e=(0,J.useActiveWorkspaceId)(),r=ar,[o,t]=(0,s.useState)(r.activeElement),[n,a]=(0,s.useState)(r.collapsed),i=(0,s.useCallback)((e=>{t(e),a(!e)}),[]);(()=>{const e=(0,A.useNavigate)();(0,s.useEffect)((()=>{const r=F.VSCodeCommunicationsService.subscribe("ACTIVE_TAB_CHANGED",(r=>r.route&&e(r.route,{},{customNavEvent:"","customNavEvent-updateURL":!0})));return()=>r&&r()}),[e])})(),(0,ir.usePreventContextMenu)(),(()=>{const e=(0,J.useActiveWorkspaceId)();(0,s.useEffect)((()=>{if(e)return sr.subscribe({workspaceId:e,subscriptionHandler:cr}),()=>{sr.unsubscribe()}}),[e])})();const l=r.elements.find((e=>e.id===o));let c=null;return e?l&&(c=l.element||(0,h.jsx)(vr,{title:l.title})):c=(0,h.jsx)(hr,{}),(0,s.useEffect)((()=>{G.AnalyticsService.addEventV2({category:"sidebar",action:"open",label:"initial-load",value:1})}),[]),(0,h.jsx)(k,{value:wr({collapsed:n,activeSidebar:o,navCollapsed:r.navCollapsed,setActiveSidebar:i}),children:(0,h.jsxs)(xr,{children:[!n&&(0,h.jsx)(Le,{showActions:r.showActions,showNewRequestButton:r.showNewRequestButton,showSidebarHeaderTabs:r.showSidebarHeaderTabs,elements:r.elements,showWorkspaceSwitcherConfig:r.showWorkspaceSwitcher,fullWidthWorkspaceSwitcher:r.fullWidthWorkspaceSwitcher}),(0,h.jsxs)(gr,{role:"presentation",children:[!r.navCollapsed&&(0,h.jsx)(z,{menus:r.elements,showVerticalSidebarOnSingleConfig:r.showVerticalSidebarOnSingleConfig}),!n&&(0,h.jsx)(mr,{children:(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(h.Fragment,{children:" "}),children:c})})]})]})})}}}]);
//# sourceMappingURL=8062.bebfec4c8555c222.js.map