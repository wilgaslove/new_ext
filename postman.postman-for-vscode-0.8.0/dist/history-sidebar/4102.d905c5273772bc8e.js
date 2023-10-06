"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[4102],{4102:(e,t,r)=>{r.d(t,{Z:()=>Lt});var s=r(540),n=r(5892),i=r.n(n),o=r(949),a=r(3587),c=r.n(a),l=r(6930),d=r.n(l),h=r(8391),u=r(5736),p=r(605),x=r(923),g=r(6081),y=r(8722),m=r(6122),f=r(5837),v=r(2322);function j({workspaceId:e}){const t=(0,g.useNavigate)();return(0,v.jsx)(x.GenericErrorMessage,{illustration:"illustration-no-history",title:"You haven't sent any requests.",description:"Any request you send in this workspace will appear here.",primaryAction:(0,v.jsx)(p.Z,{type:"primary",text:"Show me how",onClick:()=>{f.AnalyticsService.addEventV2({category:"http",action:"open-tab",label:"show-me-how",value:1}),t(`/workspace/${e}/request/create?requestId=${(0,y.v4)()}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST",requestData:m.Base64.encode(JSON.stringify({data:{url:"https://postman-echo.com/get",method:"GET",workspace:e}}))})}})})}function w({searchQuery:e}){return(0,v.jsx)(x.GenericErrorMessage,{illustration:"illustration-no-history",title:`No results found for "${e}"`,description:"Please try again using different keywords, and don’t forget to check for typos."})}function b(e){return"more"===e.type?32:28}var k=r(4926);const E="yyyy MM dd",C=(e,t,r,s="asc")=>{let n=0,i=e.length;for(;n<i;){const o=n+i>>>1;("asc"===s?r(e[o])<r(t):r(e[o])>r(t))?n=o+1:i=o}const o=n;return e.splice(o,0,t),e},Z=e=>(0,k.parse)(e,E,new Date).getTime(),I=(e,t)=>({id:e,type:"meta",depth:0,value:(0,k.parse)(e,E,new Date),children:t}),N=e=>+e.createdAt,S=(e,t)=>{if(null==e)return[];let r=[];const s=(e=>{const t=new Map;for(const r of e){const e=(0,k.format)(r.createdAt,E);if(t.has(e)){const s=t.get(e);C(s,r,N,"desc")}else t.set(e,[r])}return t})(e),n=[...s.keys()].sort(((e,t)=>Z(t)-Z(e)));for(const e of n){const n=s.get(e),i=I(e,null!=n?n:[]),o=t.has(e)?[]:null!=n?n:[];r=[...r,i,...o]}return r};var L=r(8560),M=r(8069),z=r(4691),O=r(8263),R=r(610),T=r(7282),P=r(7647),_=r(9225),A=r(9972);let D;const $=i()(L.Z)(D||(D=(e=>e)`
  flex-grow: 1;
  margin: var(--spacing-s);
`));function q(e){const t=(0,A.useActiveWorkspaceId)();return(0,v.jsxs)($,{alignItems:"center",justifyContent:"space-between",gap:"spacing-s",children:[(0,v.jsx)(M.Z,{onChange:t=>e.onSearchQueryChange(t.target.value),value:e.searchQuery,placeholder:"Filter",prefix:(0,v.jsx)(P.Z,{}),onClear:()=>e.onSearchQueryChange(""),"data-testid":"history-top-bar-search-input"}),(0,v.jsxs)(z.Z,{children:[(0,v.jsx)(O.Z,{children:(0,v.jsx)(p.Z,{"data-testid":"history-top-bar-menu-button",icon:(0,v.jsx)(_.Z,{}),type:"tertiary"})}),(0,v.jsx)(R.Z,{children:(0,v.jsx)(T.Z,{onClick:()=>(0,h.deleteAllHistory)(t),type:"destructive",children:"Clear All"})})]})]})}var U=r(7560);let Q;const H=i().ul(Q||(Q=(e=>e)`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .indent {
    flex: 0 0 var(--spacing-s);
    box-sizing: border-box;
    height: inherit;
    border-right: thin solid transparent;
  }

  &:hover,
  &:focus {
    .indent {
      border-right: thin solid var(--border-color-default);
    }
  }
`)),B=(0,s.forwardRef)(((e,t)=>(0,v.jsx)(H,(0,U.Z)({role:"tree",tabIndex:0,ref:t},e,{children:e.children}))));B.displayName="forwardRef(ReactWindowList)";const F=B;var K=r(8283),W=r(2723),G=r.n(W),V=r(3723),X=r.n(V),Y=r(1397),J=r(3088);let ee;const te={PROPFIND:"PROP",DELETE:"DEL",OPTIONS:"OPT",UNLINK:"UNLNK",UNLOCK:"UNLCK"},re=e=>e?te[e]||e.slice(0,5):null,se=i().div(ee||(ee=(e=>e)`
  color: ${0};
`),(({method:e})=>{switch(e){case"GET":return"var(--base-color-success, #0CBB52)";case"PUT":return"var(--base-color-info, #097BED)";case"POST":return"var(--base-color-warning, #FFB400)";case"PATCH":return"var(--content-color-patch-method)";case"OPTIONS":return"var(--content-color-options-method)";case"DELETE":return"var(--base-color-error, #EB2013)";default:return"var(--content-color-primary, #212121)"}}));function ne(e){const t=e.method.toUpperCase();return(0,v.jsx)(se,{method:t,children:(0,v.jsx)("div",{children:re(t)})})}let ie,oe,ae,ce,le=e=>e;const de=i()(g.Link)(ie||(ie=le`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  color: var(--content-color-primary);
  &:hover {
    color: var(--content-color-primary);
  }
`)),he=i().span(oe||(oe=le`
  flex: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: var(--spacing-s, 8px);
  height: var(--size-xs, 16px);
  min-width: 32px;
  font-size: 9px;
`)),ue=i().span(ae||(ae=le`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`)),pe=i().div(ce||(ce=le`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-size-m);
  line-height: var(--line-height-m);
  padding: var(--spacing-xs) 0;
  color: var(--content-color-tertiary);
  border-top: thin solid var(--border-color-default);
  border-bottom: thin solid var(--border-color-default);
`));let xe,ge,ye,me=e=>e;const fe=i()(p.Z)(xe||(xe=me`
  height: var(--spacing-xl);
  margin-left: auto;
`)),ve=i()(de)(ge||(ge=me`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),je=i().div(ye||(ye=me`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function we(e){const[t,r]=(0,s.useState)(!1),n=(0,A.useActiveWorkspaceId)();return(0,v.jsxs)(je,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,v.jsxs)(ve,{to:`/workspace/${n}/history/${e.id}`,customNavEvent:g.OPEN_EXTENSION_URL,children:[(0,v.jsx)(he,{children:(0,v.jsx)(ne,{method:e.method})}),(0,v.jsx)(Y.Z,{content:e.url,children:(0,v.jsx)(ue,{children:e.url})})]}),t&&(0,v.jsx)(fe,{"data-testid":"delete-http-history-item",onClick:()=>{(0,h.deleteHttpHistoryItem)(n,[`${e.id}`]).catch((()=>{}))},icon:(0,v.jsx)(J.Z,{}),type:"tertiary"})]})}var be=r(9706);let ke,Ee,Ce,Ze=e=>e;const Ie=i()(p.Z)(ke||(ke=Ze`
  height: var(--spacing-xl);
  margin-left: auto;
`)),Ne=i()(de)(Ee||(Ee=Ze`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),Se=i().div(Ce||(Ce=Ze`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function Le(e){const[t,r]=(0,s.useState)(!1),n=(0,A.useActiveWorkspaceId)();return(0,v.jsxs)(Se,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,v.jsxs)(Ne,{to:`/workspace/${n}/grpc-request/history/${e.id}`,customNavEvent:g.OPEN_EXTENSION_URL,children:[(0,v.jsx)(he,{children:(0,v.jsx)(be.Z,{color:"content-color-info"})}),(0,v.jsx)(Y.Z,{content:e.url,children:(0,v.jsx)(ue,{children:e.url})})]}),t&&(0,v.jsx)(Ie,{"data-testid":"delete-grpc-history-item",onClick:()=>{(0,h.deleteMultiprotocolHistory)(n,[e.id]).catch((()=>{}))},icon:(0,v.jsx)(J.Z,{}),type:"tertiary"})]})}var Me=r(4306),ze=r(7747);let Oe,Re,Te,Pe=e=>e;const _e=i()(p.Z)(Oe||(Oe=Pe`
  height: var(--spacing-xl);
  margin-left: auto;
`)),Ae=i()(de)(Re||(Re=Pe`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 85%;
`)),De=i().div(Te||(Te=Pe`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`));function $e(e){const t="ws-raw-request"===e.type?Me.Z:ze.Z,[r,n]=(0,s.useState)(!1),i=(0,A.useActiveWorkspaceId)();return(0,v.jsxs)(De,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[(0,v.jsxs)(Ae,{to:`/workspace/${i}/${e.type}/history/${e.id}`,customNavEvent:g.OPEN_EXTENSION_URL,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[(0,v.jsx)(he,{children:(0,v.jsx)(t,{color:"content-color-brand"})}),(0,v.jsx)(Y.Z,{content:e.url,children:(0,v.jsx)(ue,{children:e.url})})]}),r&&(0,v.jsx)(_e,{"data-testid":"delete-ws-history-item",onClick:()=>{(0,h.deleteMultiprotocolHistory)(i,[e.id]).catch((()=>{}))},icon:(0,v.jsx)(J.Z,{}),type:"tertiary"})]})}var qe=r(3341),Ue=r(6415);const Qe=(e,t)=>{const r=(0,k.startOfDay)(new Date),s=(0,k.addDays)(r,-1);return+r<=+e?"Today":+s<=+e?"Yesterday":(0,k.format)(e,t)};let He,Be,Fe,Ke,We,Ge=e=>e;const Ve=i()(p.Z)(He||(He=Ge`
  margin-left: auto;
  height: var(--spacing-xl);
`)),Xe=i().div(Be||(Be=Ge`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin-right: var(--spacing-s);
`)),Ye=i().div(Fe||(Fe=Ge`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`)),Je=i().div(Ke||(Ke=Ge`
  margin-right: var(--spacing-s, 8px);
  display: flex;
  justify-content: center;
  align-items: center;
`)),et=i().div(We||(We=Ge`
  user-select: none;
  font-size: var(--text-size-m, 12px);
  font-weight: var(--text-weight-regular, 400);
  color: var(--content-color-secondary, #6b6b6b);
`));function tt(e){const[t,r]=(0,s.useState)(!1);return(0,v.jsxs)(Xe,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,v.jsxs)(Ye,{onClick:()=>e.onClick&&e.onClick(e.id,e.isCollapsed),children:[(0,v.jsx)(Je,{children:e.isCollapsed?(0,v.jsx)(qe.Z,{}):(0,v.jsx)(Ue.Z,{})}),(0,v.jsx)(et,{children:Qe(e.date,"MMMM dd")})]}),t&&(0,v.jsx)(Ve,{"data-testid":"delete-history-day-meta-item",onClick:()=>(()=>{const t=e.children.map((e=>({id:e.id,type:e.type})));(0,h.deleteHistory)(e.workspaceId,t)})(),icon:(0,v.jsx)(J.Z,{}),type:"tertiary"})]})}let rt;const st=i().div(rt||(rt=(e=>e)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`));function nt({srText:e="Loading more items"}){return(0,v.jsx)(pe,{children:(0,v.jsxs)(st,{children:[(0,v.jsx)(u.Z,{size:"small"}),(0,v.jsx)("span",{className:"sr-only",children:e})]})})}const it=["item","workspaceId","style"];let ot;const at=i().li(ot||(ot=(e=>e)`
  display: flex;
  height: 28px;
  align-items: center;
  font-size: var(--text-size-m, 12px);
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
  color: var(--content-color-primary, #212121);

  /* Depth starts with 0 index */
  padding: var(--spacing-zero) var(--spacing-s);

  > * {
    box-sizing: border-box;
  }

  .indent + *:not(.indent) {
    padding-right: var(--spacing-s);
  }

  &.action {
    cursor: pointer;

    // Backwards compatibility
    &:hover {
      background-color: var(--highlight-background-color-secondary);

      .sidebar-list-item__right-section-actions,
      .actions-dropdown {
        .btn {
          height: var(--size-s);
        }
      }
    }

    &:has(*:hover),
    &:has(*:focus) {
      background-color: var(--highlight-background-color-secondary);

      .sidebar-list-item__right-section-actions,
      .actions-dropdown {
        .btn {
          height: var(--size-s);
        }
      }
    }
  }
`)),ct=e=>{const{item:t,workspaceId:r,isCollapsed:s,onCollapse:n}=e;switch(t.type){case"grpc-request":return(0,v.jsx)(Le,(0,U.Z)({},t));case"request":return(0,v.jsx)(we,(0,U.Z)({},t));case"ws-raw-request":case"ws-socketio-request":return(0,v.jsx)($e,(0,U.Z)({},t));case"meta":return(0,v.jsx)(tt,{id:t.id,workspaceId:r,children:t.children,date:t.value,isCollapsed:s,onClick:n});case"more":return(0,v.jsx)(nt,{});default:return null}},lt=e=>{const{item:t,workspaceId:r,style:s}=e,n=(0,K.Z)(e,it),i=0===t.depth?!n.isCollapsed:void 0;return(0,v.jsxs)(at,{className:X()({action:"more"!==t.type}),style:s,role:"treeitem","aria-expanded":i,tabIndex:-1,children:[Array.from({length:t.depth}).fill(null).map(((e,t)=>(0,v.jsx)("div",{className:"indent"},`indent-${t}`))),(0,v.jsx)(ct,(0,U.Z)({item:t,workspaceId:r},n))]})},dt=["items"],ht=["style","data"],ut=["items"],pt=["style","data"],xt=["collapsedKeys","items"];function gt(e,t){const{style:r,data:{items:s}}=e,n=(0,K.Z)(e.data,dt),i=(0,K.Z)(e,ht),{style:o,data:{items:a}}=t,c=(0,K.Z)(t.data,ut),l=(0,K.Z)(t,pt);return G()(r,o)&&G()(s,a)&&G()(n,c)&&G()(i,l)}const yt=(0,s.memo)((({data:e,index:t,style:r})=>{const{collapsedKeys:s,items:n}=e,i=(0,K.Z)(e,xt),o=n[t];return(0,v.jsx)(lt,(0,U.Z)({item:o,style:r,isCollapsed:s.has(o.id)},i),o.id)}),gt);yt.displayName="memo(ItemRenderer)";const mt=yt;var ft=r(9460);let vt;const jt=i().button(vt||(vt=(e=>e)`
  all: unset;
  color: var(--content-color-brand);
  cursor: pointer;
  display: inline-block;
  margin-left: var(--spacing-xs);
`));function wt({isRefetching:e,onRetry:t}){return e?(0,v.jsx)(nt,{srText:"Refetching failed items"}):(0,v.jsx)(pe,{children:(0,v.jsxs)(ft.ZP,{type:"para",children:["Unable to load items.",t&&(0,v.jsx)(jt,{onClick:t,children:"Retry"})]})})}let bt,kt,Et,Ct=e=>e;const Zt=i().div(bt||(bt=Ct`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`)),It=i().div(kt||(kt=Ct`
  max-height: ${0}px;
`),b({type:"more"})),Nt=()=>{const e=(0,A.useActiveWorkspaceId)(),{data:t,fetchNextPage:r,hasNextPage:n,hasPageError:i,refetch:a,isRefetching:l}=(0,h.useHistoryItems)({workspaceId:e,pageSize:h.PAGE_SIZE});(0,h.useHistorySubscription)({workspaceId:e});const[p,x]=(0,s.useState)(new Set),[g,y]=(0,s.useState)(""),m=e=>{y(e)},f=e=>""===g||null==e?e:e.filter((e=>{var t;return null==(t=e.url)?void 0:t.toLowerCase().includes(g.toLowerCase())})),k=(0,s.useMemo)((()=>{const e=n?[(r=n,{type:"more",id:"more",depth:0,loading:null==r||r})]:[];var r;return[...S(f(t),p),...e]}),[t,p,n]),E={collapsedKeys:p,items:k,workspaceId:e,onCollapse:(e,t)=>{x((()=>(t?p.delete(e):p.add(e),new Set(p))))}};return null==t?(0,v.jsxs)(Zt,{children:[(0,v.jsx)(u.Z,{size:"large"}),(0,v.jsx)("span",{className:"sr-only",children:"Loading..."})]}):0===t.length?(0,v.jsx)(j,{workspaceId:e}):0===k.length?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(q,{onSearchQueryChange:m,searchQuery:g}),(0,v.jsx)(w,{searchQuery:g})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(q,{onSearchQueryChange:m,searchQuery:g}),i&&(0,v.jsx)(It,{children:(0,v.jsx)(wt,{isRefetching:l,onRetry:a})}),(0,v.jsx)(c(),{children:({height:e,width:t})=>(0,v.jsx)(d(),{isItemLoaded:e=>!n||e<k.length-1,itemCount:k.length,loadMoreItems:()=>{r()},children:({onItemsRendered:r,ref:s})=>(0,v.jsx)(o.VariableSizeList,{ref:s,onItemsRendered:r,height:e,itemData:E,itemCount:k.length,itemSize:e=>b(k[e]),width:t,innerElementType:F,children:mt})})})]})},St=i().div(Et||(Et=Ct`
  height: 100%;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`)),Lt=()=>(0,v.jsx)(x.CustomErrorBoundary,{appId:"history-sidebar",errorElementId:"history-sidebar",fallback:(0,v.jsx)(x.GenericErrorMessage,{title:"Couldn't load history",description:"Something went wrong while trying to load history items. Check your internet and try again."}),children:(0,v.jsx)(St,{children:(0,v.jsx)(Nt,{})})})}}]);
//# sourceMappingURL=4102.d905c5273772bc8e.js.map