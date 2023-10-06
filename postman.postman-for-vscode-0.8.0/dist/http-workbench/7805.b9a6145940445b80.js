(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[7805,4489],{43641:(e,t,r)=>{"use strict";r.d(t,{G0:()=>o,Pn:()=>i,jx:()=>n});var s=r(54302),a=r(47069);async function o(){return localStorage.getItem(`${window.USER_ID}:workbench-layout`)||a.N}async function n(e){localStorage.setItem(`${window.USER_ID}:workbench-layout`,e),s.VSCodeCommunicationsService.postMessageToExtension({type:"SET_WORKBENCH_LAYOUT",payload:e})}function i(e){return s.VSCodeCommunicationsService.subscribe("SET_WORKBENCH_LAYOUT",(t=>{localStorage.setItem(`${window.USER_ID}:workbench-layout`,t),e(t)}))}},25883:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l}),r(40540);var s=r(25892),a=r.n(s),o=r(52322);let n;const i=a().div(n||(n=(e=>e)`
  display: inline-flex;
  width: calc(0.5 * var(--spacing-m));
  height: calc(0.5 * var(--spacing-m));
  margin-left: var(--spacing-xs);
  border-radius: calc(0.5 * var(--spacing-m));
  background-color: var(--base-color-success);

  &.error {
    background-color: var(--base-color-error);
  }
`)),l=({isError:e=!1})=>(0,o.jsx)(i,{"aria-label":e?"tab with errors":"tab with active values",className:e?"error":"","data-testid":"tab-indicator-dot"})},68637:(e,t,r)=>{"use strict";r.d(t,{y:()=>i});var s=r(25892),a=r.n(s),o=r(15761);let n;const i=a()(o.Z)(n||(n=(e=>e)`
  box-sizing: border-box;
  width: auto;
  padding: ${0};
`),(e=>e.theme["spacing-zero"]))},96529:(e,t,r)=>{"use strict";r.d(t,{B7:()=>s,Ei:()=>o,NF:()=>d,RM:()=>n,ll:()=>a,m3:()=>i,ob:()=>l});const s={JSON:"JSON",XML:"XML",HTML:"HTML",TEXT:"Text"},a={PRETTY:0,RAW:1,PREVIEW:2},o=(s.TEXT,"Enter the URL and click Send to get a response"),n="video",i="audio",l="image",d="embed"},5111:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ResponseTestResultsHeader:()=>K,ResponseTestResultsPanel:()=>H});var s=r(40540),a=r.n(s),o=r(25892),n=r.n(o),i=r(59596),l=r(68637),d=r(58560),c=r(27366),u=r(71132),h=r(87459);const p=e=>e.passed||e.skipped,m=e=>!e.skipped&&e.passed,g=e=>e.skipped,v={0:e=>e.passed||e.skipped||!!e.error,1:m,2:g,3:e=>!e.skipped&&!!e.error};var b=r(52322);let x,y,f=e=>e;const S=n()(h.Z)(x||(x=f`
  box-sizing: content-box;
  padding: var(--spacing-xs);
  min-width: 40px;
  text-align: center;
  border-radius: var(--border-radius-default);
`)),k=n().span(y||(y=f`
  color: var(--content-color-secondary);
`)),w=e=>m(e)?{status:"success",text:"pass",label:"Passed assertion item"}:g(e)?{status:"neutral",text:"skipped",label:"Skipped assertion item"}:{status:"critical",text:"fail",label:"Failed assertion item"},j=e=>null!=e?e:"";function T({item:e}){var t,r;const s=w(e);return(0,b.jsx)("li",{"aria-label":s.label,children:(0,b.jsxs)(d.Z,{gap:"spacing-s",alignItems:"center",children:[(0,b.jsx)(S,{status:s.status,text:s.text}),(0,b.jsx)(k,{children:p(e)?e.name:`${e.name} | ${j(null==(t=e.error)?void 0:t.name)}: ${j(null==(r=e.error)?void 0:r.message)}`})]})})}function I({activeTab:e,assertions:t}){const r=t.filter((t=>v[e](t)));return r.length>0?(0,b.jsx)(b.Fragment,{children:r.map((e=>(0,b.jsx)(T,{item:e},e.index)))}):(0,b.jsx)(d.Z,{height:"100%",alignItems:"center",justifyContent:"center",children:"No tests available for the selected filter"})}var C=r(50916),q=r(26081),R=r(49437),E=r(63622),P=r(80047);function Z(){return(0,b.jsx)(R.Z,{title:"There are no tests for this request",description:(0,b.jsxs)(E.ZP,{type:"para",children:["Write a test script to automate debugging. Learn more about"," ",(0,b.jsx)(q.Link,{to:"https://go.pstmn.io/docs-test-scripts",target:"_blank",children:(0,b.jsx)(E.ZP,{type:"link-default",isExternal:!0,children:"writing tests"})})]}),children:(0,b.jsx)(P.Z,{name:"illustration-write-tests"})})}let D;const A=n().div(D||(D=(e=>e)`
  padding: var(--spacing-s);
  margin: var(--spacing-s);
  background-color: var(--background-color-error);
  border-radius: var(--border-radius-default);
  text-align: center;
  color: var(--content-color-error);
`)),L=(0,C.observer)((()=>{const e=(0,i.aD)();return(0,b.jsxs)(A,{children:["There was an error in evaluating the test script: ",(0,b.jsxs)(E.ZP,{type:"strong",children:[null==e?void 0:e.name,": ",null==e?void 0:e.message]})]})}));let O,z,_,F=e=>e;const B=[{label:"All"},{label:"Passed"},{label:"Skipped"},{label:"Failed"}],M=n()(d.Z)(O||(O=F`
  padding: var(--spacing-s);
`)),N=n().div(z||(z=F`
  flex: 1 1 auto;
  height: 100%;
  overflow: hidden;
`)),$=n().ul(_||(_=F`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  gap: var(--spacing-s);
`)),H=(0,C.observer)((function(){const e=(0,i.$x)(),t=(0,i.aD)(),[r,s]=a().useState(0);return t?(0,b.jsx)(L,{}):0===e.length?(0,b.jsx)(Z,{}):(0,b.jsxs)(M,{direction:"column",gap:"spacing-m",height:"100%",children:[(0,b.jsx)(l.y,{activeTabIndex:r,onChange:s,type:"secondary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,b.jsx)(c.Z,{children:B.map((e=>(0,b.jsx)(u.Z,{label:e.label},e.label)))})}),(0,b.jsx)(N,{children:(0,b.jsx)($,{children:(0,b.jsx)(I,{activeTab:r,assertions:e})})})]})}));var V=r(25883);let U;const W=n().span(U||(U=(e=>e)`
  margin-left: var(--spacing-xs);
  color: ${0};
`),(e=>e.success?"var(--content-color-success)":"var(--content-color-error)")),K=(0,C.observer)((function(){const e=(0,i.aD)(),t=(0,i.$x)();if(e)return(0,b.jsxs)(d.Z,{alignItems:"center",children:[(0,b.jsx)(E.ZP,{children:"Test Results"}),(0,b.jsx)(V.Z,{isError:!0})]});if(0===t.length)return(0,b.jsx)("span",{children:"Test Results"});const r=t.filter((e=>p(e)));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("span",{children:"Test Results"}),(0,b.jsxs)(W,{success:r.length===t.length,children:["(",r.length,"/",t.length,")"]})]})}))},7336:(e,t,r)=>{"use strict";r.d(t,{Is:()=>s,WJ:()=>a,_A:()=>i,gg:()=>o,tU:()=>n});const s={GET:{label:"GET",value:"GET",color:"content-color-success"},POST:{label:"POST",value:"POST",color:"content-color-warning"},PUT:{label:"PUT",value:"PUT",color:"content-color-info"},PATCH:{label:"PATCH",value:"PATCH",color:"content-color-patch-method"},DELETE:{label:"DELETE",value:"DELETE",color:"content-color-error"},HEAD:{label:"HEAD",value:"HEAD",color:"content-color-success"},OPTIONS:{label:"OPTIONS",value:"OPTIONS",color:"content-color-options-method"}},a={COPY:{label:"COPY",value:"COPY",color:"content-color-primary"},LINK:{label:"LINK",value:"LINK",color:"content-color-primary"},UNLINK:{label:"UNLINK",value:"UNLINK",color:"content-color-primary"},PURGE:{label:"PURGE",value:"PURGE",color:"content-color-primary"},LOCK:{label:"LOCK",value:"LOCK",color:"content-color-primary"},UNLOCK:{label:"UNLOCK",value:"UNLOCK",color:"content-color-primary"},PROPFIND:{label:"PROPFIND",value:"PROPFIND",color:"content-color-primary"},VIEW:{label:"VIEW",value:"VIEW",color:"content-color-primary"}},o="GET",n={EMPTY_URL:{title:"Request URL is empty",status:"error"}},i="http-request-method-dropdown"},47069:(e,t,r)=>{"use strict";r.d(t,{N:()=>s});const s="vertical"},85332:(e,t,r)=>{"use strict";r.d(t,{n:()=>n});var s=r(40540),a=r(21219),o=r(50429);const n=()=>{const{data:e}=(0,a.useActiveVariables)();return(0,s.useCallback)((e=>(t,r)=>{let s=t.getCurrentWord();const a=t.getCurrentLine();if(s||(s=t.getWordBeforePosition(r)),"{{"!==a.slice(0,Math.max(0,s.startColumn-1)).slice(-2))return[];const n=(null!=e?e:[]).filter((e=>(0,o.B)(e.key).toLowerCase().includes(s.word.toLowerCase()))),i={startLineNumber:r.lineNumber,endLineNumber:r.lineNumber,startColumn:s.startColumn,endColumn:s.endColumn};return(0,o.a)(n,i)})(e),[e])}},77805:(e,t,r)=>{"use strict";r.d(t,{Z:()=>pl});var s=r(40540),a=r.n(s),o=r(50916),n=r(36306),i=r(35736),l=r(44025),d=r(25892),c=r.n(d),u=r(58560),h=r(63622),p=r(80605),m=r(82196),g=r(64495),v=r(42632),b=r(49886),x=r(4779);const y=()=>(0,x.x)().name;var f=r(60607),S=r(22922),k=r(44306),w=r(29706),j=r(26081),T=r(20856);let I;const C=c()(T.ZP)(I||(I=(e=>e)`
  .tippy-content {
    background-color: var(--background-color-primary);
  }

  .tippy-svg-arrow > svg > path {
    fill: var(--background-color-primary);
  }
`)),q="http",R="ws-raw",E="grpc";var P=r(15837),Z=r(52322);let D,A,L,O,z,_=e=>e;const F=c().div(D||(D=_`
  height: 24px;
  width: 24px;
  box-sizing: border-box;
`)),B=c()(p.Z)(A||(A=_`
  height: 24px;
  width: 24px;
  background-color: var(--background-color-tertiary);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  cursor: pointer;

  &:hover {
    background-color: var(--highlight-background-color-tertiary);
  }

  > i > svg > path {
    fill: ${0};
  }
`),(e=>e.theme[e.color])),M=c().div(L||(L=_`
  padding-left: var(--spacing-s);
  padding-top: var(--spacing-xs);
`)),N=c()(j.Link)(O||(O=_`
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
`)),$=c().div(z||(z=_`
  margin-left: var(--spacing-s);
`)),H={[q]:{label:"HTTP",Icon:S.Z,iconColor:"content-color-success"},[R]:{label:"WebSocket",Icon:k.Z,iconColor:"content-color-brand"},[E]:{label:"gRPC",Icon:w.Z,iconColor:"content-color-info"}},V={[q]:"/request/create",[R]:"/ws-raw-request/create",[E]:"/grpc-request/create"},U=()=>{const e=(0,f.useParams)(),t=(0,f.useMatch)("/workspace/:workspaceId/:protocol/create"),[r,s]=a().useState(!1);if(!t)return(0,Z.jsx)(M,{children:(0,Z.jsx)(S.Z,{color:"content-color-success","data-testid":"aether-icon-HTTP"})});const o=(0,Z.jsx)(B,{type:"secondary",icon:(0,Z.jsx)(S.Z,{"data-testid":"aether-icon-HTTP"}),color:"content-color-success",onClick:()=>s((e=>!e)),"data-testid":"protocol-switcher"});return(0,Z.jsx)(F,{children:(0,Z.jsx)(C,{trigger:o,isOpen:r,onClickOutside:()=>s(!1),children:Object.keys(H).map((t=>{const{label:r,Icon:a}=H[t];return(0,Z.jsxs)(N,{to:`/workspace/${e.workspaceId}${V[t]}`,onClick:()=>{P.AnalyticsService.addEventV2({category:"request",action:"switch-protocol",label:t}),s(!1)},children:[(0,Z.jsx)(a,{color:H[t].iconColor}),(0,Z.jsx)($,{children:r})]},t)}))})})};var W=r(21219),K=r(88691),Q=r(42427),Y=r(24502),G=r(27363),X=r(7560),J=r(48722),ee=r(74962),te=r(81397),re=r(68206),se=r(37110),ae=r(49627),oe=r(94181),ne=r(8851),ie=r(56259),le=r(35482),de=r(71233),ce=r(62932);class ue{constructor(){this.filterText="",this.openNodeIds=ce.observable.map({}),this.visibleNodeIds=ce.observable.map({}),this.isVisibilityFilterActive=void 0,this.selectedNodeId=void 0,this.selectionData=void 0,this.treeData=void 0,this.toggleItemExpansion=e=>{this.openNodeIds.has(e)?this.openNodeIds.delete(e):this.openNodeIds.set(e,!0)},this.setFilterText=e=>{this.filterText=e,this.updateNodesOnFilterChange()},this.updateNodesOnFilterChange=()=>{(0,ce.runInAction)((()=>{if(this.filterText||(this.isVisibilityFilterActive=!1,this.visibleNodeIds.clear(),this.openNodeIds.clear()),this.treeData&&this.filterText){const e=function(e,t,r=[]){const s=[];for(const a of e)s.push(...he(a,t,r));return s}(this.treeData,this.filterText.toLowerCase());this.isVisibilityFilterActive=!0,this.visibleNodeIds.clear(),this.openNodeIds.clear();for(const t of e){this.visibleNodeIds.set(t.id,!0);for(const e of t.parentIds)this.visibleNodeIds.set(e,!0),this.openNodeIds.set(e,!0);for(const e of t.childIds)this.visibleNodeIds.set(e,!0)}}}))},this.setSelected=(e,t)=>{this.selectedNodeId=e,this.selectionData=t},(0,ce.makeObservable)(this,{filterText:ce.observable,isVisibilityFilterActive:ce.observable,selectedNodeId:ce.observable,toggleItemExpansion:ce.action,setSelected:ce.action}),this.updateNodesOnFilterChange=function(e,t){let r;return function(...t){clearTimeout(r),r=setTimeout((()=>{e(...t)}),250)}}(this.updateNodesOnFilterChange)}setTreeData(e){this.treeData=e}}function he(e,t,r=[]){const s=[];if(e.name.toLowerCase().includes(t)){const t={id:e.id,parentIds:[...r],childIds:e.children.map((e=>e.id))};s.push(t)}for(const a of e.children){const o=[...r,e.id];s.push(...he(a,t,o))}return s}const pe=(0,s.createContext)(new ue),me=e=>{const t=(0,s.useRef)(new ue);return(0,s.useEffect)((()=>(0,ce.reaction)((()=>t.current.selectedNodeId),(()=>{e.onSelect(t.current.selectedNodeId,t.current.selectionData)}))),[]),(0,Z.jsx)(pe.Provider,{value:t.current,children:e.children})},ge=()=>(0,s.useContext)(pe),ve=pe;let be;const xe=c().ul(be||(be=(e=>e)`
  all: unset;
  overflow-y: auto;

  overflow: auto;
`)),ye=(0,o.observer)((function(e){const t=ge();return(0,s.useEffect)((()=>{t.setTreeData(e.data)}),[e.data]),(0,Z.jsxs)(u.Z,{gap:e.enableSearch&&"spacing-xs",direction:"column",children:[e.enableSearch&&(0,Z.jsx)(re.Z,{type:"text",placeholder:e.searchPlaceholder,value:t.filterText,onChange:e=>t.setFilterText(e.target.value),prefix:(0,Z.jsx)(de.Z,{})}),(0,Z.jsx)(xe,{role:"tree","aria-label":e.label,style:{height:e.treeHeight},id:e.id,children:e.children})]})}));var fe=r(28176),Se=r(35547),ke=r(3341);function we(e){const t=(0,s.useContext)(ve),r=(0,s.useRef)((()=>t.toggleItemExpansion(e)));return[t.openNodeIds.has(e),r.current]}let je,Te,Ie,Ce,qe,Re,Ee,Pe,Ze,De=e=>e;const Ae=c().div(je||(je=De`
  opacity: 0;
  position: relative;
  zindex: -1;
  margin-left: var(--spacing-s);
`)),Le=c().li(Te||(Te=De`
  all: unset;
`)),Oe=c().div(Ie||(Ie=De`
  padding-left: var(--spacing-xs);
  padding-right: var(--spacing-m);
  height: ${0};
  cursor: pointer;

  display: flex;
  align-items: center;

  ${0}

  ${0}

  &:hover {
    background-color: var(--highlight-background-color-secondary);

    ${0} {
      visibility: visible;
      opacity: 1;
      zindex: 0;
    }
  }
`),(({size:e})=>"large"===e?"40px":"28px"),(({isDisabled:e})=>e&&"\n    opacity: 0.4;\n    pointer-events: none;\n  "),(({isSelected:e})=>e&&"background-color: var(--highlight-background-color-secondary);"),Ae),ze=c().div(Ce||(Ce=De`
  height: ${0};
  width: 11px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),_e=c().div(qe||(qe=De`
  height: ${0};
  border-left: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  width: 7px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),Fe=e=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(ze,{size:e.size}),(0,Z.jsx)(_e,{size:e.size})]}),Be=c().div(Re||(Re=De`
  display: flex;
  align-items: center;
  margin-left: var(--spacing-s);
  margin-right: var(--spacing-xs);
`)),Me=c().button(Ee||(Ee=De`
  all: unset;
  display: flex;
  align-items: center;
  margin-left: var(--spacing-xs);
  height: var(--size-xs);
  width: var(--size-xs);
  border-radius: var(--border-radius-default);

  ${0}

  &:hover {
    background-color: var(--highlight-background-color-tertiary);
  }

  & > i {
    transform: rotate(${0});
  }
`),(({expandable:e})=>!e&&"\n    opacity: 0;\n    zIndex: -1;\n  "),(({expanded:e})=>e?"90deg":0)),Ne=c().ul(Pe||(Pe=De`
  all: unset;
`)),$e=c().div(Ze||(Ze=De`
  flex: auto;
  margin-left: var(--spacing-xs);
`)),He=(0,o.observer)((function(e){const[t,r]=we(e.id),[a,o]=function(e){const t=(0,s.useContext)(ve),r=(0,s.useRef)((r=>t.setSelected(e,r)));return[t.selectedNodeId===e,r.current]}(e.id),n=function(e){const t=(0,s.useContext)(ve);return!t.isVisibilityFilterActive||t.visibleNodeIds.has(e)}(e.id),i=(0,s.useRef)(null),l=e.metaIcons||[],d=(0,s.useCallback)((s=>{s.preventDefault(),s.stopPropagation(),e.disabled||(!t&&r(),o(e.data))}),[t,o,r,e.data,e.disabled]);return n?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(Le,{role:"treeitem","aria-expanded":t,"aria-selected":a,"aria-disabled":e.disabled,"aria-label":e.label,ref:i,onClick:d,children:[(0,Z.jsxs)(Oe,{size:e.size,isSelected:a,isDisabled:e.disabled,children:[Array.from({length:e.depth}).fill("").map((()=>(0,Z.jsx)(Fe,{size:e.size}))),(0,Z.jsx)(Me,{expanded:t,expandable:e.expandable,disabled:!e.expandable||e.disabled,"aria-label":t?`collapse ${e.label}`:`expand ${e.label}`,onClick:e=>{e.preventDefault(),e.stopPropagation(),r()},children:(0,Z.jsx)(ke.Z,{})}),(0,Z.jsx)(Be,{children:e.icon}),(0,Z.jsx)(h.ZP,{type:"body-medium",isTruncated:!0,color:"content-color-primary",children:e.label}),(0,Z.jsx)($e,{children:l}),e.renderOnHoverActionTriggers&&(0,Z.jsx)(Ae,{children:e.renderOnHoverActionTriggers()})]}),t&&(0,Z.jsx)(Ne,{role:"group",children:e.children})]}),e.tooltipText&&(0,Z.jsx)(te.Z,{content:e.tooltipText,placement:"bottom",triggerRef:i})]}):null}));function Ve(e,t,r){const s=t[0],a=t.slice(1);if(!s)return;const o=r.find((e=>e.id===s));return o?a.length>0?Ve(e,a,o.folders):o.folders.find((t=>t.id===e)):void 0}function Ue(e){const t=(0,s.useCallback)((t=>{const r=t.data.find((t=>t.id===e.collectionId));if(r)return e.parentFolderIds?Ve(e.folderId,e.parentFolderIds,r.folders):r.folders.find((t=>t.id===e.folderId))}),[e.collectionId,e.parentFolderIds,e.folderId]),{data:r}=(0,oe.useCollectionListRawQuery)({workspaceId:e.workspaceId,select:t});return r}let We,Ke,Qe,Ye,Ge,Xe,Je=e=>e;const et=c().div(We||(We=Je`
  opacity: 0;
  position: relative;
  zindex: -1;
  margin-left: var(--spacing-s);
`)),tt=c().li(Ke||(Ke=Je`
  all: unset;
`)),rt=c().div(Qe||(Qe=Je`
  padding-left: var(--spacing-xs);
  padding-right: var(--spacing-m);
  height: ${0};

  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    background-color: var(--highlight-background-color-secondary);

    ${0} {
      visibility: visible;
      opacity: 1;
      zindex: 0;
    }
  }
`),(({size:e})=>"large"===e?"40px":"28px"),et),st=c().div(Ye||(Ye=Je`
  height: ${0};
  width: 11px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),at=c().div(Ge||(Ge=Je`
  height: ${0};
  border-left: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  width: 7px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),ot=e=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(st,{size:e.size}),(0,Z.jsx)(at,{size:e.size})]}),nt=c().div(Xe||(Xe=Je`
  margin-left: var(--spacing-s);
`)),it=(0,o.observer)((function(e){const[t,r]=we(e.id);return(0,Z.jsx)(tt,{role:"treeitem","aria-expanded":t,"aria-selected":"false",expanded:t,children:(0,Z.jsxs)(rt,{size:e.size,onClick:r,children:[Array.from({length:e.depth}).fill("").map((()=>(0,Z.jsx)(ot,{size:e.size}))),(0,Z.jsx)(nt,{children:e.children})]})})})),lt=(0,o.observer)((function(e){return(0,Z.jsx)(it,{depth:e.depth,id:"empty-folder",size:"large",expandable:!1,children:(0,Z.jsx)(h.ZP,{type:"body-small",color:"content-color-secondary",children:"This folder is empty."})})}));function dt(e,t,r){const s=t[0],a=t.slice(1);if(!s)return;const o=r.find((e=>e.id===s));return o?a.length>0?dt(e,a,o.folders):o.requests.find((t=>t.id===e)):void 0}function ct(e){const t=(0,s.useCallback)((t=>{const r=t.data.find((t=>t.id===e.collectionId));if(r)return e.parentFolderIds?dt(e.requestId,e.parentFolderIds,r.folders):r.requests.find((t=>t.id===e.requestId))}),[e.collectionId,e.parentFolderIds,e.requestId]),{data:r}=(0,oe.useCollectionListRawQuery)({workspaceId:e.workspaceId,select:t});return r}let ut;const ht={PROPFIND:"PROP",DELETE:"DEL",OPTIONS:"OPT",UNLINK:"UNLNK",UNLOCK:"UNLCK"},pt=e=>e?ht[e]||e.slice(0,5):null,mt=c().div(ut||(ut=(e=>e)`
  font-family: var(--text-family-code);
  // These values are custom as this is an icon.
  font-weight: 450;
  font-size: 8px;
  line-height: 15px;
  color: ${0};
`),(({method:e})=>{switch(e){case"GET":return"var(--base-color-success, #0CBB52)";case"PUT":return"var(--base-color-info, #097BED)";case"POST":return"var(--base-color-warning, #FFB400)";case"DELETE":return"var(--base-color-error, #EB2013)";default:return"var(--content-color-primary, #212121)"}}));function gt(e){const t=e.method.toUpperCase();return(0,Z.jsx)(mt,{method:t,children:(0,Z.jsx)("div",{children:pt(t)})})}const vt=(0,o.observer)((function(e){const t=ct({collectionId:e.collectionId,requestId:e.requestId,parentFolderIds:e.parentFolderIds,workspaceId:e.workspaceId});return t?(0,Z.jsx)(He,{id:t.id,depth:e.depth,icon:(0,Z.jsx)(gt,{method:t.method}),label:t.name,size:"small",expandable:!1,disabled:!0},t.id):null}));var bt=r(52385);const xt=new Set(["Alt","Meta","Control","Shift"]),yt=({ctrlKey:e,shiftKey:t,altKey:r,keys:a,callback:o})=>{const n=(0,s.useRef)([]),i=(0,s.useRef)(!1),l=(0,s.useRef)(!1),d=(0,s.useRef)(!1),c=(0,s.useRef)(null),u=(0,s.useRef)(o);u.current=o,(0,s.useEffect)((()=>{const s=s=>{if((s.ctrlKey||s.metaKey)&&(i.current=!0),s.shiftKey&&(l.current=!0),s.altKey&&(d.current=!0),!xt.has(s.key)&&Array.isArray(a)){const e=a.findIndex((e=>e.toLowerCase()===s.key.toLowerCase()));-1!==e&&(n.current[e]=s.key)}const o=!e||i.current,h=!t||l.current,p=!r||d.current;if(c.current=setTimeout((()=>{i.current=!1,l.current=!1,d.current=!1,n.current=[]}),250),o&&h&&p){if(Array.isArray(a)&&((e,t)=>{let r=0;for(const a of e){var s;if(a.toLowerCase()!==(null==(s=t[r])?void 0:s.toLowerCase()))return!1;r++}return!0})(a,n.current))return u.current();if(a===s.key)return u.current()}};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s),c.current&&clearTimeout(c.current)}}),[e,t,r,a])};let ft,St,kt,wt,jt,Tt,It,Ct=e=>e;const qt=c()(re.Z)(ft||(ft=Ct`
  margin-top: 2px;
  height: 28px;
  width: auto;
  margin-right: var(--spacing-xs); ;
`)),Rt=c().div(St||(St=Ct`
  display: flex;
  align-items: center;
`)),Et=c().li(kt||(kt=Ct`
  display: flex;

  .draft-list-item {
    align-items: center;
    display: flex;
    padding-left: var(--spacing-xs);
    padding-right: var(--spacing-xs);
    width: -webkit-fill-available;
  }
`)),Pt=c().div(wt||(wt=Ct`
  display: flex;
  align-items: center;
  margin-left: var(--spacing-xs);
  margin-right: var(--spacing-xs);
`)),Zt=c().div(jt||(jt=Ct`
  display: flex;
  align-items: center;
  margin-left: var(--spacing-xs);
  margin-right: var(--spacing-xs);
`)),Dt=c().div(Tt||(Tt=Ct`
  height: ${0};
  width: 11px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),At=c().div(It||(It=Ct`
  height: ${0};
  border-left: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  width: 7px;
  flex-shrink: 0;
`),(({size:e})=>"large"===e?"40px":"28px")),Lt=e=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Dt,{size:e.size}),(0,Z.jsx)(At,{size:e.size})]}),Ot=e=>(yt({keys:"Enter",callback:e.handleSubmit}),e.isCreatingItem?(0,Z.jsxs)(Rt,{children:[(0,Z.jsx)(He,{id:"dummy",depth:e.depth,icon:e.icon,label:e.name,expandable:!0,size:"large",disabled:!0},"dummy"),(0,Z.jsx)(i.Z,{})]}):(0,Z.jsx)(Et,{children:(0,Z.jsxs)("div",{className:"draft-list-item",children:[Array.from({length:e.depth}).fill("").map((()=>(0,Z.jsx)(Lt,{size:"large"}))),(0,Z.jsx)(Pt,{children:(0,Z.jsx)(ke.Z,{})}),(0,Z.jsx)(Zt,{children:e.icon}),(0,Z.jsx)(qt,{autoFocus:!0,onBlur:()=>setTimeout((()=>{e.handleClose()}),200),className:"placeholder-input-field",placeholder:e.placeholder,value:e.name,onChange:t=>e.onChange(t.target.value)}),(0,Z.jsx)(p.Z,{onClick:e.handleSubmit,type:"tertiary",isDisabled:!e.name,icon:(0,Z.jsx)(bt.Z,{})}),(0,Z.jsx)(p.Z,{onClick:()=>{e.handleClose()},type:"tertiary",icon:(0,Z.jsx)(ae.Z,{})})]})})),zt=(0,o.observer)((function e(t){const r=ge(),a=Ue({collectionId:t.collectionId,folderId:t.folderId,parentFolderIds:t.parentFolderIds,workspaceId:t.workspaceId}),o=(0,s.useMemo)((()=>t.parentFolderIds?[...t.parentFolderIds,t.folderId]:[t.folderId]),[t.parentFolderIds,t.folderId]),i=(0,s.useRef)({collectionId:t.collectionId,folderId:t.folderId}),[l,d]=(0,s.useState)(!1),[c,u]=(0,s.useState)(!1),[h,m]=(0,s.useState)(""),g=(0,oe.useCreateNewFolder)(),{addToast:v}=(0,n.ZP)(),b=(0,s.useCallback)((()=>{if(!h)return;const e=(0,J.v4)();d(!0),g.mutate({workspaceId:t.workspaceId,collectionId:t.collectionId,parentFolderIds:o||[],requestBody:{id:e,name:h,folder:t.folderId}},{onSettled:s=>{if(d(!1),u(!1),m(""),!s)return;const a=(0,oe.composeUID)(e,s.data.owner);r.setSelected(a,{folderId:a,collectionId:t.collectionId})},onSuccess:()=>{P.AnalyticsService.addEventV2({category:"http-folder",action:"create",label:"request-popover",value:1})},onError:()=>{v({status:"error",description:"Could not create folder."})}})}),[h]),x=(0,s.useCallback)((()=>{u(!1)}),[]);return a?(0,Z.jsxs)(He,{id:a.id,depth:t.depth,icon:(0,Z.jsx)(Se.Z,{}),label:a.name,size:"large",expandable:!0,data:i.current,renderOnHoverActionTriggers:()=>(0,Z.jsx)(p.Z,{onClick:()=>{u(!0)},type:"tertiary",icon:(0,Z.jsx)(fe.Z,{}),tooltip:"Create a folder"}),children:[a.folders_order.map((r=>(0,Z.jsx)(e,{folderId:r,collectionId:t.collectionId,workspaceId:t.workspaceId,depth:t.depth+1,parentFolderIds:o},r))),(c||l)&&(0,Z.jsx)(Ot,{name:h,placeholder:"Name your folder",depth:t.depth+1,icon:(0,Z.jsx)(Se.Z,{}),isCreatingItem:l,handleSubmit:b,isEditMode:c,onChange:m,handleClose:x}),a.order.map((e=>(0,Z.jsx)(vt,{requestId:e,collectionId:t.collectionId,workspaceId:t.workspaceId,depth:t.depth+1,parentFolderIds:o},e))),0===a.folders_order.length&&0===a.order.length&&!c&&!l&&(0,Z.jsx)(lt,{depth:t.depth+1})]},a.id):null})),_t=(0,o.observer)((function(e){return(0,Z.jsx)(it,{depth:e.depth,id:"empty-collection",size:"small",expandable:!1,children:(0,Z.jsx)(h.ZP,{type:"body-small",color:"content-color-secondary",children:"This collection is empty."})})}));var Ft=r(37691);let Bt,Mt,Nt=e=>e;const $t=c().div(Bt||(Bt=Nt`
  display: flex;
  align-items: center;
  overflow: hidden;
`)),Ht=c().p(Mt||(Mt=Nt`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  margin-left: var(--spacing-xs);
  font-size: var(--text-size-s);
  font-weight: var(--text-weight-regular);
  text-overflow: ellipsis;
  color: var(--content-color-tertiary);
`)),Vt=({label:e})=>(0,Z.jsxs)($t,{children:[(0,Z.jsx)(Ft.Z,{color:"content-color-tertiary",size:"small"}),(0,Z.jsx)(Ht,{children:e})]}),Ut=(0,o.observer)((function(e){var t;const r=ge(),a=function(e,t){const r=(0,s.useCallback)((e=>e.data.find((e=>e.id===t))),[t]),{data:a}=(0,oe.useCollectionListRawQuery)({workspaceId:e,select:r});return a}(e.workspaceId,e.collectionId),o=(0,s.useRef)({collectionId:e.collectionId}),[i,l]=(0,s.useState)(!1),[d,c]=(0,s.useState)(!1),u=(0,oe.useCreateNewFolder)(),[h,m]=(0,s.useState)(""),{addToast:g}=(0,n.ZP)(),v=(0,s.useCallback)((()=>{if(!h)return;const t=(0,J.v4)();l(!0),u.mutate({workspaceId:e.workspaceId,collectionId:e.collectionId,parentFolderIds:[],requestBody:{id:t,name:h}},{onSettled:s=>{if(l(!1),c(!1),m(""),!s)return;const a=(0,oe.composeUID)(t,s.data.owner);r.setSelected(a,{folderId:a,collectionId:e.collectionId})},onSuccess:()=>{P.AnalyticsService.addEventV2({category:"http-folder",action:"create",label:"request-popover",value:1})},onError:()=>{g({status:"error",description:"Could not create folder."})}})}),[h]),b=(0,s.useCallback)((()=>{c(!1)}),[]);if(!a)return null;const x=[];var y;return null!=(t=a.attributes.fork)&&t.forkLabel&&x.push((0,Z.jsx)(Vt,{label:null==(y=a.attributes.fork)?void 0:y.forkLabel})),(0,Z.jsxs)(He,{id:a.id,depth:0,icon:(0,Z.jsx)(ie.Z,{}),label:a.name,size:"large",expandable:!0,data:o.current,disabled:!a.attributes.permissions.userCanUpdate,tooltipText:a.attributes.permissions.userCanUpdate?void 0:"You don’t have permission to save to this collection.",metaIcons:x,renderOnHoverActionTriggers:()=>(0,Z.jsx)(p.Z,{onClick:()=>{c(!0)},type:"tertiary",icon:(0,Z.jsx)(fe.Z,{}),tooltip:"Create a folder"}),children:[a.folders_order.map((t=>(0,Z.jsx)(zt,{folderId:t,collectionId:a.id,workspaceId:e.workspaceId,depth:1},t))),(d||i)&&(0,Z.jsx)(Ot,{name:h,placeholder:"Name your folder",depth:1,icon:(0,Z.jsx)(Se.Z,{}),isCreatingItem:i,handleSubmit:v,isEditMode:d,onChange:m,handleClose:b}),a.order.map((t=>(0,Z.jsx)(vt,{requestId:t,collectionId:e.collectionId,workspaceId:e.workspaceId,depth:1},t))),0===a.folders_order.length&&0===a.order.length&&!d&&!i&&(0,Z.jsx)(_t,{depth:1})]},a.id)}));function Wt(e){return e.map((e=>({id:e.id,name:e.name,type:"folder",children:Wt(e.folders)})))}let Kt;const Qt=c()(u.Z)(Kt||(Kt=(e=>e)`
  text-align: center;
`)),Yt=(0,ne.observer)((function(e){const{data:t,isLoading:r,error:a,refetch:o,isFetching:l}=function(e){const t=(0,s.useCallback)((e=>{const t=e.data.map((e=>({type:"collection",id:e.id,name:e.name,children:e.attributes.permissions.userCanUpdate?Wt(e.folders):[]})));return t.sort(((e,t)=>e.name.toLowerCase().localeCompare(t.name.toLowerCase()))),t}),[]);return(0,oe.useCollectionListRawQuery)({workspaceId:e,select:t})}(e.workspaceId),d=ge(),[c,m]=(0,s.useState)(!1),[g,v]=(0,s.useState)(""),b=(0,oe.useCreateNewCollection)(),{addToast:x}=(0,n.ZP)(),y=(0,s.useCallback)((()=>{g&&(m(!0),b.mutate({workspaceId:e.workspaceId,requestBody:{id:(0,J.v4)(),name:g}},{onSettled:t=>{if(m(!1),e.setShowDraftItem(!1),v(""),!t)return;const r=(0,oe.composeUID)(t.data.id,t.data.owner);d.setSelected(r,{collectionId:r})},onSuccess:()=>{P.AnalyticsService.addEventV2({category:"http-collection",action:"create",label:"request-popover",value:1})},onError:()=>{x({status:"error",description:"Could not create collection."})}}))}),[g]),f=(0,s.useCallback)((()=>{e.setShowDraftItem(!1)}),[]),S=(0,Z.jsxs)(Qt,{direction:"column",height:"300px",alignItems:"center",justifyContent:"center",alignSelf:"center",gap:"spacing-s",children:[(0,Z.jsx)(ie.Z,{color:"content-color-secondary"}),(0,Z.jsx)(h.ZP,{type:"strong",children:"You don’t have any collections. "}),(0,Z.jsxs)(h.ZP,{type:"para",children:["Collections let you group related requests, making",(0,Z.jsx)("br",{}),"them easier to access and run. "]})]});return r||!t&&l?(0,Z.jsx)(u.Z,{height:"300px",alignItems:"center",justifyContent:"center",children:(0,Z.jsx)(i.Z,{size:"small",description:"Loading collections"})}):!t&&a?(0,Z.jsxs)(u.Z,{height:"300px",alignItems:"center",justifyContent:"center",gap:"spacing-s",children:[(0,Z.jsx)(le.Z,{color:"content-color-secondary"}),(0,Z.jsxs)(h.ZP,{type:"para",children:["Failed to load collections. ",(0,Z.jsx)(p.Z,{onClick:o,type:"monochrome-plain",text:"Retry"})]})]}):!t||0!==t.length||e.showDraftItem||c?(0,Z.jsxs)(ye,{enableSearch:t&&t.length>0,label:"collections",treeHeight:264,id:e.id,data:t||[],searchPlaceholder:"Search for collection or folder",children:[(t||[]).map((t=>(0,Z.jsx)(Ut,{workspaceId:e.workspaceId,collectionId:t.id}))),(e.showDraftItem||c)&&(0,Z.jsx)(Ot,{name:g,placeholder:"Name your collection",depth:0,icon:(0,Z.jsx)(ie.Z,{}),isCreatingItem:c,handleSubmit:y,isEditMode:e.showDraftItem,onChange:v,handleClose:f})]}):S}));let Gt;const Xt=c()(p.Z)(Gt||(Gt=(e=>e)`
  height: var(--controls-size-default);
  background-color: var(--base-color-info);
  color: var(--content-color-constant);
  margin-left: var(--spacing-m);

  &:hover,
  &.is-hovered {
    background-color: var(--highlight-background-color-info);
  }

  &:disabled,
  &.is-disabled {
    opacity: 0.5;
    background-color: var(--base-color-info);
    color: var(--content-color-constant);
  }

  &:active,
  &.is-active {
    background-color: var(--highlight-background-color-info);
  }
`)),Jt=(0,o.observer)((function(e){const{requestData:t,onSaved:r,onClose:a,workspaceId:o}=e,i=y(),[l,d]=(0,s.useState)(i),[c,h]=(0,s.useState)(),[m,g]=(0,s.useState)(!1),{addToast:v}=(0,n.ZP)(),[b,x]=(0,s.useState)(!1),f=(0,oe.useWorkspacePermissions)(o),S=(0,s.useCallback)(((e,t)=>{e&&!t||h(null),h(t)}),[]),k=(0,oe.useCreateRequest)(),w=(0,s.useCallback)((()=>{if(!c)return;const e=(0,X.Z)({},t,{id:(0,J.v4)(),name:l,collection:c.collectionId,folder:c.folderId});g(!0),k.mutate({request:e,workspaceId:o,invalidateListCache:!0},{onSuccess:e=>{r(e.data.id,c.collectionId),P.AnalyticsService.addEventV2({category:"http-request",action:"create",label:"request-popover",value:1})},onError:()=>{v({status:"error",description:"Could not save request."})},onSettled:()=>{g(!1)}})}),[c,k,v,t,r,l]);return(0,Z.jsxs)(u.Z,{padding:"spacing-s",width:"408px",gap:"spacing-l",direction:"column",children:[(0,Z.jsxs)(u.Z,{alignItems:"center",children:[(0,Z.jsx)(ee.Z,{type:"h3",text:"Save Request",color:"content-color-primary"}),(0,Z.jsx)("span",{style:{flex:"auto"}}),(0,Z.jsx)(p.Z,{onClick:a,type:"tertiary",icon:(0,Z.jsx)(ae.Z,{}),tooltip:(0,Z.jsx)(te.Z,{content:"Close",placement:"bottom"})})]}),(0,Z.jsx)(re.Z,{type:"text",label:(0,Z.jsx)(se.Z,{text:"Request Name",htmlFor:"save-request-name-input"}),value:l,validationStatus:!l&&"error",validationMessage:"Please enter a valid request name",onChange:e=>{d(e.target.value)},id:"save-request-name-input"}),(0,Z.jsxs)(u.Z,{direction:"column",gap:"spacing-s",children:[(0,Z.jsxs)(u.Z,{justifyContent:"space-between",alignItems:"center",children:[(0,Z.jsx)(se.Z,{text:"Select Collection",htmlFor:"save-request-collection-tree"}),(0,Z.jsx)(p.Z,{type:"plain",size:"medium",text:"Create Collection",onClick:()=>{x(!0)},isDisabled:!f.userCanCreate})]}),(0,Z.jsx)(me,{onSelect:S,children:(0,Z.jsx)(Yt,{workspaceId:o,id:"save-request-collection-tree",showDraftItem:b,setShowDraftItem:x})})]}),(0,Z.jsx)(u.Z,{justifyContent:"flex-end",alignItems:"center",children:(0,Z.jsx)(Xt,{type:"primary",size:"medium",text:"Save",isLoading:m,isDisabled:!l||!c,onClick:w})})]})}));var er=r(19972),tr=r(18712),rr=r(48491);const sr=()=>{const e=(0,x.x)();return{isDirty:e.isDirty,isConflicted:e.isConflicted,isSaving:e.isSaving}};var ar=r(98283),or=r(44958);const nr=["mutate"],ir=(0,oe.updateRequestMutation)(),lr=()=>{const e=(0,x.x)(),t=(0,or.useMutation)(ir),{mutate:r}=t,s=(0,ar.Z)(t,nr);return(0,X.Z)({mutate:t=>{const s=e.getUpdateRequestPayload(),a={requestStore:e.trackedState,urlStore:e.urlStore.trackedState,headerData:e.headerData.trackedState,preRequestStore:e.preRequestStore.trackedState,testScriptStore:e.testScriptStore.trackedState,formDataStore:e.formDataStore.trackedState,urlEncodedDataStore:e.urlEncodedDataStore.trackedState,binaryEditor:e.binaryEditor.trackedState,graphqlPayloadStore:e.graphqlPayloadStore.trackedState},o=e.isConflicted;return t&&(s.name=t),e.resetAllTrackedState(),e.setIsSaving(!0),r({requestId:e.metadata.id,patch:s},{onError:()=>{e.revertTrackedStateChange(a,o),(0,n.Am)({title:"Unable to save changes",description:"Could not save changes. Please try again.",status:"error"})},onSettled:()=>{e.setIsSaving(!1)}})}},s)},dr=()=>{var e,t;const r=(0,x.x)();return 0===Object.keys(r.permissions).length?{canEdit:!0,canDelete:!0}:{canEdit:null==(e=r.permissions[oe.CollectionPermissionNames.UPDATE_COLLECTION])?void 0:e.allowed,canDelete:null==(t=r.permissions[oe.CollectionPermissionNames.DELETE_COLLECTION])?void 0:t.allowed}};var cr=r(59596);let ur;const hr=c()(T.ZP)(ur||(ur=(e=>e)`
  .tippy-content {
    background: var(--background-color-primary);
  }
`)),pr=(0,o.observer)((function(){const[e,t]=(0,s.useState)(!1),[r,a]=(0,s.useState)(!1),o=(0,er.useActiveWorkspaceId)(),n=(0,tr.q)(),i=(0,j.useNavigate)(),l=(0,rr.i)(),{isDirty:d,isSaving:c,isConflicted:u}=sr(),{mutate:h}=lr(),m=(0,s.useMemo)((()=>n()),[e,n]),{canEdit:g}=dr(),v=d&&g,b=y(),x=G.Modals.getModals(),{data:f}=(0,W.useActiveEnvironment)(),S=(0,cr.gr)(),k=(0,oe.useWorkspacePermissions)(o),w=(0,oe.useCollectionListRawQuery)({workspaceId:o}),T=async()=>{if(!l)return t(!0);if(!v)return;if(!u)return h();const e=await x.showWarningDialog({uid:"request-workbench-tab-conflict-confirmation",subject:"DO YOU WANT TO SAVE?",message:`This tab ${b} has been modified from another tab. Saving these changes will overwrite this request.`,options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Save and overwrite",isPrimary:!0}]});return e&&"Save and overwrite"===e.title?h():void 0};yt({ctrlKey:!0,keys:"s",callback:T});const I=(0,s.useRef)(null);return(0,s.useEffect)((()=>{w.data&&(e=>{const t=[];if(e)for(const s of e){var r;(null==s||null==(r=s.attributes)||null==(r=r.permissions)?void 0:r.userCanUpdate)&&t.push(s)}return t})(w.data.data).length>0&&a(!0)}),[w]),(0,Z.jsx)(hr,{isOpen:e,maxWidth:440,onClickOutside:()=>{t(!1)},trigger:(0,Z.jsx)("div",{children:(0,Z.jsx)(K.Z,{type:"tertiary",text:c?"Saving...":"Save",onClick:()=>{l&&T(),!l&&t(!0)},icon:(0,Z.jsx)(Y.Z,{}),isDisabled:!!l&&(!v||c),secondaryButton:(0,Z.jsx)(p.Z,{ref:I,onClick:()=>t(!1),"data-testid":"save-as-menu-button"}),children:(0,Z.jsx)(hr,{triggerRef:I,padding:"spacing-s",children:(0,Z.jsx)(Q.Z,{onClick:()=>{t(!0)},isDisabled:!k.userCanCreate&&!r,children:"Save As.."})})})}),children:e&&(0,Z.jsx)(Jt,{onClose:()=>t(!1),workspaceId:o,requestData:m,onSaved:(e,r)=>{t(!1);const s=S();(0,W.setActiveEnvironment)({model:"collection",modelId:r},f).finally((()=>i(`/workspace/${o}/request/${e}`,{state:{response:s}})))}})})}));var mr=r(38394),gr=r(95617),vr=r(84492);const br=({pathname:e})=>{const[t,r]=(0,s.useState)(!1),a=(0,s.useRef)(),o=(0,s.useCallback)((()=>{const t=vr.Z.ARTEMIS_URL;navigator.clipboard.writeText(t+e).then((()=>{r(!0),null!=a&&a.current&&clearTimeout(a.current),a.current=setTimeout((()=>{r(!1)}),1500)}))}),[e,a]);return(0,Z.jsx)(p.Z,{type:"tertiary",className:"copy-link-btn",size:"small",icon:t?(0,Z.jsx)(mr.Z,{size:"small",color:"base-color-success"}):(0,Z.jsx)(gr.Z,{size:"small"}),onClick:o,tooltip:t?"Copied":"Copy link to request"})},xr=()=>{let e="new-request";const{historyId:t,requestId:r}=(0,f.useParams)();return t&&(e="history-request"),r&&(e="saved-request"),e};var yr=r(73720);const fr="http-workbench",Sr="request-send-button-paint-time",kr="environment-selector-value-paint-time",wr="request-send-button-paint-mark",jr="environment-selector-value-paint-mark";let Tr,Ir,Cr,qr,Rr=e=>e;const{PerfContext:Er}=yr.perfComponents,Pr=c().div(Tr||(Tr=Rr`
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
  box-sizing: border-box;
  height: 48px;
  padding: ${0};
  border-bottom: ${0};
`),(e=>`${e.theme["spacing-s"]} ${e.theme["spacing-s"]}`),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["border-color-default"]}`)),Zr=c().div(Ir||(Ir=Rr`
  // Temporary for style override, aether for some reason does not pass down classname to its breadcrumbs component
  color: var(--content-color-primary);
  font-weight: var(--text-weight-medium);
  width: 100%;

  nav {
    .copy-link-btn {
      display: none;
    }

    :hover {
      .copy-link-btn {
        display: inline-flex;
      }
    }
  }
`)),Dr=c()(u.Z)(Cr||(Cr=Rr`
  width: 100%;
  overflow: hidden;
`)),Ar=(0,o.observer)((()=>{const e=(0,er.useActiveWorkspaceId)(),t=(0,x.x)().exampleMeta,r=(0,j.useNavigate)();return t?(0,Z.jsx)(h.ZP,{type:"body-medium",color:"",children:(0,Z.jsxs)(u.Z,{gap:"spacing-xs",alignItems:"center",padding:{paddingLeft:"spacing-xs"},children:[(0,Z.jsx)("span",{children:"From"}),(0,Z.jsx)(v.Z,{}),(0,Z.jsx)(p.Z,{onClick:()=>{r(`/workspace/${e}/example/${t.id}`,{},{customNavEvent:j.OPEN_EXTENSION_URL})},type:"muted-plain",text:t.name})]})}):null})),Lr=(0,o.observer)((()=>{const e=(0,x.x)().breadcrumbs,{pathname:t}=(0,f.useLocation)(),r=y(),{canEdit:a}=dr(),{isDirty:o,isConflicted:n}=sr(),i=(0,j.useNavigate)(),{mutate:d}=lr(),c=(0,rr.i)(),h=(0,er.useActiveWorkspaceId)();(0,s.useEffect)((()=>{const{setTabTitle:e}=(0,l.useTabTitleMeta)();e(r,"http",{isDirty:o,isConflicted:n})}),[r,o,n]);const p=(0,s.useRef)(null),{rename:v}=(0,j.useAdditionalRouteContext)();(0,s.useEffect)((()=>{var e;v&&(null==(e=p.current)||e.triggerRenameMode())}),[v]);const S=e=>{r!==e&&d(e)};return(0,Z.jsxs)(Dr,{direction:"row",shrink:"1",grow:"0",alignItems:"center",gap:"spacing-s",children:[(0,Z.jsx)(U,{}),(0,Z.jsx)(Zr,{children:e&&(0,Z.jsx)(m.aG,{metaInfo:{custom:(0,Z.jsxs)(u.Z,{alignItems:"center",gap:"spacing-s",children:[(0,Z.jsx)(Ar,{}),!a&&c&&(0,Z.jsx)(b.Z,{title:"You do not have permissions to edit this request"})]})},appendActions:c&&(0,Z.jsx)(br,{pathname:t}),onItemClick:e=>{i(`/workspace/${h}/${e.entityType}/${e.id}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})},ref:p,children:e.map((e=>(0,Z.jsx)(g.Z,{enableRename:"request"===e.entityType&&c&&a,renameInputConfig:{onSubmit:S,value:r},itemData:e,children:e.name},e.name)))})})]})})),Or=c()(u.Z)(qr||(qr=Rr`
  margin-left: var(--spacing-s);
`)),zr=(0,o.observer)((()=>{const e=xr();return(0,Z.jsx)(Er.Provider,{value:{markName:jr,callback:()=>{return t=e,performance.measure(kr,{},jr),void(0,yr.sendMeasureEvent)({name:kr,label:t,entityType:fr});var t}},children:(0,Z.jsxs)(Or,{className:"request-meta-header-right-section",direction:"row",alignItems:"center",gap:"spacing-s",children:[(0,Z.jsx)(pr,{}),(0,Z.jsx)(W.ActiveEnvironmentSelector,{})]})})})),_r=()=>(0,Z.jsxs)(Pr,{children:[(0,Z.jsx)(Lr,{}),(0,Z.jsx)(zr,{})]});var Fr=r(7336),Br=r(26259);const Mr=()=>{const e=(0,x.x)(),{data:t}=(0,W.useActiveEnvironment)();return()=>e.sendRequest({activeEnvironment:t})},Nr=()=>(0,x.x)().sending;var $r=r(79233),Hr=r(48391),Vr=r(9029);let Ur,Wr,Kr,Qr=e=>e;const Yr=c()($r.AutoSuggestionInput)(Ur||(Ur=Qr`
  border-radius: 0 var(--border-radius-default) var(--border-radius-default) 0;
  background: var(--background-color-primary);
  border-left: none;
  &:focus-within {
    box-shadow: ${0};
    border: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default);
    border-left: none;
    z-index: 1;
  }
`),(e=>e.isHardFocused?"0 0 0 2px var(--base-color-info)":"none")),Gr=c().div(Wr||(Wr=Qr`
  display: flex;
  flex-direction: column;
  width: 100%;
`)),Xr=c().div(Kr||(Kr=Qr`
  z-index: 9999;
  // Using negative margin to overlap the gradient with the input component
  margin-top: -2px;

  @keyframes animateBottomBorder {
    from {
      width: 50%;
    }

    to {
      width: 0%;
    }
  }
  .request-editor__main__url-gradient {
    width: 100%;
  }

  .request-editor__main__url-gradient-left {
    height: 2px;
    background: linear-gradient(
      270deg,
      rgb(255, 108, 55),
      rgba(255, 108, 55, 0.5),
      transparent 50%
    );
    animation: animateBottomBorder 0.5s ease-in;
    float: left;
    width: 50%;
  }

  .request-editor__main__url-gradient-right {
    height: 2px;
    background: linear-gradient(
      90deg,
      rgb(255, 108, 55),
      rgba(255, 108, 55, 0.5),
      transparent 50%
    );
    animation: animateBottomBorder 0.5s ease-in;
    float: right;
    width: 50%;
  }
`)),Jr=(0,o.observer)((()=>{const{url:e,setUrl:t}=(0,Br.I)(),{workspaceId:r}=(0,f.useParams)(),a=Mr(),{data:o=[]}=(0,Hr.useHistoryUrls)({workspaceId:r,pageSize:10,filterFn:e=>"request"===e.type}),{transformCurl:n,hydrateStore:i,isValidCurl:l}=(()=>{const e=(0,x.x)();return{transformCurl:async e=>await(0,Vr.transformCurlToRequest)(e),isValidCurl:async e=>{var t;const r=await(0,Vr.checkImportFormat)(e);return!r.err&&!(null==r||!r.ok||"curl"!==(null==(t=r.val)?void 0:t.format))},hydrateStore:e.hydrateStore.bind(e)}})(),[d,c]=(0,s.useState)(!1),[u,h]=(0,s.useState)(!1),p=async e=>{var t;const r=null==(t=e.clipboardData)?void 0:t.getData("text");await l(r)&&(h(!0),setTimeout((async()=>{const e=await n(r);e&&0!==Object.keys(e).length?(i(e),h(!1)):h(!1)}),500))},m=(0,$r.usePostmanInputFeatureFlag)(),{rename:g}=(0,j.useAdditionalRouteContext)();return m?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)($r.URLInput,{value:e,onChange:t,suggestions:o,placeholder:"Enter URL or paste text",onEnter:a,onPaste:p,autofocus:!e&&!g}),u&&!d&&(0,Z.jsx)(Xr,{"data-testid":"animation-gradient-container",children:(0,Z.jsxs)("div",{className:"request-editor__main__url-gradient",children:[(0,Z.jsx)("div",{className:"request-editor__main__url-gradient-left"}),(0,Z.jsx)("div",{className:"request-editor__main__url-gradient-right"})]})})]}):(0,Z.jsxs)(Gr,{children:[(0,Z.jsx)(Yr,{value:e,onChange:t,suggestions:o,placeholder:"Enter URL or paste text",onPaste:p,setIsHardFocused:c,isHardFocused:d}),u&&!d&&(0,Z.jsx)(Xr,{"data-testid":"animation-gradient-container",children:(0,Z.jsxs)("div",{className:"request-editor__main__url-gradient",children:[(0,Z.jsx)("div",{className:"request-editor__main__url-gradient-left"}),(0,Z.jsx)("div",{className:"request-editor__main__url-gradient-right"})]})})]})}));Jr.displayName="observer(RequestURLInput)";const es=Jr;var ts=r(64382);let rs;const ss=c()(ts.Z)(rs||(rs=(e=>e)`
  .aether-dropdown__control {
    height: 40px;
    z-index: 1;
    border-radius: ${0};
    background-color: var(--background-color-primary);
    border: ${0};
    border-right: none;
    &:hover {
      border-color: ${0};
    }
    &--is-focused {
      background-color: ${0};
      border: ${0};
      box-shadow: var(--request-url-highlight-border-color) 0 0 0 2px;
      border-right: none;
      &:hover {
        border-color: ${0};
        border-right: none;
      }
    }
    &::after {
      content: '';
      background-color: var(--border-color-default);
      position: absolute;
      top: 25%;
      bottom: 25%;
      right: 0px;
      width: var(--border-width-default);
    }
    &:focus-within {
      &::after {
        content: '';
        background-color: var(--request-url-highlight-border-color);
        position: absolute;
        top: 0%;
        bottom: 0%;
        right: 0px;
        width: var(--border-width-default);
      }
    }

    .aether-dropdown__value-container {
      .aether-dropdown__single-value {
        font-weight: var(--text-weight-medium);
        color: ${0};
      }
    }

    // This removes the clear icon from the dropdown, which is displayed by default when we set isClearable to true
    .aether-dropdown__indicators {
      .aether-dropdown__clear-indicator {
        display: none;
      }
    }
  }
`),(e=>`${e.theme["border-radius-default"]} 0 0 ${e.theme["border-radius-default"]}`),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["border-color-default"]}`),(e=>e.theme["border-color-default"]),(e=>e.theme["background-color-primary"]),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["request-url-highlight-border-color"]}`),(e=>e.theme["request-url-highlight-border-color"]),(e=>{var t;return e.value&&e.theme[null==(t=Fr.Is[e.value.label])?void 0:t.color]})),as=e=>(0,Z.jsx)(h.ZP,{color:null==e?void 0:e.color,typographyStyle:{fontWeight:"text-weight-medium"},isTruncated:!0,children:null==e?void 0:e.label}),os=(0,o.observer)((()=>{const[e,t]=(()=>{const e=(0,x.x)();return[e.method,e.setMethod]})(),[r,a]=(0,s.useState)({label:e,value:e}),o=Object.values((0,X.Z)({},Fr.Is,Fr.WJ)),n=(0,s.useRef)(null),i=e=>{e.target.value&&a(null)};return(0,s.useEffect)((()=>{(e=>{a({label:e,value:e})})(e)}),[e]),(0,s.useEffect)((()=>{const e=n.current,t=null==e?void 0:e.querySelector(`#${Fr._A}`);return null==t||t.addEventListener("keyup",i),()=>{null==t||t.removeEventListener("keyup",i)}}),[]),(0,Z.jsx)("div",{ref:n,"data-testid":"method-dropdown-container",children:(0,Z.jsx)(ss,{id:Fr._A,onChange:e=>{e?t(e.value):a(null)},options:o,triggerWidth:115,menuMinWidth:115,placeholder:"METHOD",menuPlacement:"bottom-start",allowCreateNewOption:!0,isClearable:!0,value:r,customOptionComponent:as,onClose:()=>{r||a({label:e,value:e})}})})}));let ns,is,ls,ds=e=>e;const{PerformanceMarkPaint:cs}=yr.perfComponents,us=c().form(ns||(ns=ds`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: ${0};
`),(e=>e.theme["spacing-s"])),hs=c().div(is||(is=ds`
  display: flex;
  flex-direction: row;
  height: 40px;
  flex: 1;
  box-sizing: border-box;
  padding-right: ${0};
`),(e=>e.theme["spacing-s"])),ps=c()(p.Z)(ls||(ls=ds`
  height: 40px;
  width: 100px;
  background-color: ${0};
  font-size: ${0};
  font-weight: ${0};
  color: ${0};

  &:hover,
  &.is-hovered {
    background-color: ${0};
  }

  &:disabled,
  &.is-disabled {
    opacity: 0.5;
    background-color: ${0};
    color: ${0};
  }

  &:active,
  &.is-active {
    background-color: ${0};
  }
`),(e=>e.theme["base-color-info"]),(e=>e.theme["text-size-l"]),(e=>e.theme["text-weight-medium"]),(e=>e.theme["content-color-constant"]),(e=>e.theme["highlight-background-color-info"]),(e=>e.theme["base-color-info"]),(e=>e.theme["content-color-constant"]),(e=>e.theme["highlight-background-color-info"])),ms=(0,o.observer)((()=>{const e=Nr(),{url:t}=(0,Br.I)(),{addToast:r}=(0,n.ZP)(),s=e?"Sending...":"Send",a=Mr(),o=e=>{if(!t)return null==e||e.preventDefault(),r(Fr.tU.EMPTY_URL),!1;a()};return yt({ctrlKey:!0,keys:"Enter",callback:o}),(0,Z.jsx)(ps,{type:"primary",text:(0,Z.jsx)("span",{id:"send-request-button-title","aria-label":"Send Request",children:s}),isDisabled:e,onClick:o})})),gs=()=>{const e=xr(),t=Mr(),r=(()=>{const e=(0,x.x)(),{data:t}=(0,W.useActiveEnvironment)();return()=>{e.isExampleRequestSent||e.sendRequest({activeEnvironment:t}),e.setExampleRequestSent()}})(),a=!!(0,x.x)().exampleMeta,{autoRunRequest:o}={autoRunRequest:(0,x.x)().autoRunRequest},n=(0,s.useCallback)((e=>{e.preventDefault(),t()}),[t]);return(0,s.useEffect)((()=>{a&&r()}),[]),(0,s.useEffect)((()=>{o&&t()}),[]),(0,Z.jsxs)(us,{onSubmit:n,children:[(0,Z.jsxs)(hs,{children:[(0,Z.jsx)(os,{}),(0,Z.jsx)(es,{})]}),(0,Z.jsx)(cs,{markName:wr,callback:()=>{return t=e,performance.measure(Sr,{},wr),void(0,yr.sendMeasureEvent)({name:Sr,label:t,entityType:fr});var t},children:(0,Z.jsx)(ms,{})})]})};var vs=r(15761),bs=r(27366),xs=r(71132),ys=r(27162),fs=r(5246),Ss=r(96497);const ks=()=>({queryParamsToShow:(0,x.x)().urlStore.allQueryParams}),ws=()=>{const e=(0,x.x)().urlStore;return{pathVariables:e.pathVariables,updatePathVariables:e.updatePathVariables}};let js,Ts,Is=e=>e;const Cs=c().div(js||(js=Is`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  flex-shrink: 0;
  height: ${0};
  font-size: ${0};
  color: ${0};
  font-weight: ${0};
  margin: var(--spacing-xs) var(--spacing-zero);
`),(e=>e.theme["size-m"]),(e=>e.theme["text-size-m"]),(e=>e.theme["content-color-secondary"]),(e=>e.theme["text-weight-medium"])),qs=c()(u.Z)(Ts||(Ts=Is`
  flex: 1;
  overflow: auto;
`)),Rs=(0,o.observer)((()=>{const{updateQueryParams:e}=(()=>{const e=(0,x.x)().urlStore;return{queryParams:e.queryParams,updateQueryParams:e.updateQueryParams}})(),{queryParamsToShow:t}=ks(),{pathVariables:r,updatePathVariables:s}=ws(),a=r&&r.length>0;return(0,Z.jsxs)(qs,{direction:"column",children:[(0,Z.jsx)(Cs,{children:"Query Params"}),(0,Z.jsx)(Ss.KeyValueEditor,{tableName:"Query Params",allowedColumns:["key","value"],showColumns:["key","value"],values:t,onChange:e,disableSorting:!1,nonEditableKeys:!1,nonEditableValues:!1,nonEditableToggles:!1,disableBulkEdit:!0,disableMultilineKey:!0,disableMultilineValue:!0,enableVariableSuggestions:!0}),a&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Cs,{children:"Path Variables"}),(0,Z.jsx)(Ss.KeyValueEditor,{tableName:"Path Variables",allowedColumns:["key","value"],showColumns:["key","value"],values:r,onChange:s,disableSorting:!1,nonEditableKeys:!0,nonEditableValues:!1,nonEditableToggles:!1,disableBulkEdit:!0,disableDelete:!0,disableCreate:!0,disableToggle:!0,disableMultilineKey:!0,disableMultilineValue:!0,enableVariableSuggestions:!0})]})]})}));var Es=r(31987),Ps=r(38163);function Zs(){const e=(0,x.x)(),t=(0,s.useRef)((t=>e.setRawEditorState({language:t})));return[e.rawEditorState.language,t.current]}function Ds(e){const t=(0,x.x)(),r=(0,s.useRef)(t.rawEditorState.beautify),a=t.rawEditorState.beautify,o=(0,s.useRef)((()=>t.setRawEditorState({beautify:[]})));return(0,s.useEffect)((()=>{r.current!==a&&e&&(r.current=a,e())}),[a,e]),o.current}let As,Ls,Os=e=>e;const zs=c().div(As||(As=Os`
  flex: 1;
  display: flex;
  justify-content: space-between;
`)),_s=c()(ts.Z)(Ls||(Ls=Os`
  .aether-dropdown__control {
    &--is-focused {
      box-shadow: none;
      border-color: transparent;
    }
    &:hover,
    &:focus {
      border-color: transparent;
    }
    .aether-dropdown__single-value {
      color: var(--content-color-link);
    }
    .aether-dropdown__indicators {
      svg path {
        fill: var(--content-color-link);
      }
    }
  }
`));function Fs({showBeautifyBtn:e,defaultValue:t,options:r,onChange:a}){const[o,n]=(0,s.useState)(t),i=Ds();return(0,s.useEffect)((()=>{n(t)}),[t]),(0,Z.jsxs)(zs,{"data-testid":"raw-body-action-container",children:[(0,Z.jsx)(_s,{value:o,onChange:e=>{n(e),null==a||a(e.value)},options:r,isClearable:!1,isSearchable:!1,triggerType:"tertiary",triggerWidth:"auto",viaPortal:!0}),(0,Z.jsx)("div",{children:e?(0,Z.jsx)(p.Z,{onClick:i,text:"Beautify"}):null})]})}const Bs=[{value:"text",label:"Text"},{value:"javascript",label:"JavaScript"},{value:"json",label:"JSON"},{value:"html",label:"HTML"},{value:"xml",label:"XML"}],Ms=[...Bs],Ns=e=>e!==Bs[0].value,$s=(0,o.observer)((function(){const[e,t]=Zs();return(0,Z.jsx)(Fs,{defaultValue:(r=e,null!=(s=Bs.find((e=>e.value===r)))?s:Bs[0]),showBeautifyBtn:Ns(e),options:Ms,onChange:t});var r,s}));var Hs=r(85332);let Vs;const Us=(0,s.lazy)((()=>r.e(1544).then(r.t.bind(r,31544,23)))),Ws=c()(u.Z)(Vs||(Vs=(e=>e)`
  height: 100%;
  .text-editor {
    border: var(--border-width-default) solid var(--border-color-default);
    border-radius: var(--border-radius-s);
    height: calc(100% - var(--spacing-s)) !important;
  }
`)),Ks=(0,o.observer)((function(){const[e]=Zs(),[t,r]=function(){const e=(0,x.x)(),t=(0,s.useRef)((t=>e.setRawEditorState({content:t})));return[e.rawEditorState.content,t.current]}(),a=(0,s.useRef)(null);Ds((()=>{var e;null==(e=a.current)||e.beautifyContent()}));const o=(0,Hs.n)();return(0,Z.jsx)(Ws,{height:"100%",children:(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{}),children:(0,Z.jsx)(Us,{ref:e=>{e?(a.current=e,a.current.focus()):a.current=null},showNonPrintableCharacters:!0,fontSize:12,language:"json"===e?"postman_json":e,codeCompletionProviders:[{provider:o}],wordWrap:!0,value:t,onChange:r,autoFormat:!0})})})}));function Qs(){const[e,t]=(e=>{const{historyId:t}=(0,f.useParams)(),r=(0,x.x)(),a=(0,s.useRef)(((e,s)=>{(0,ce.runInAction)((()=>{r.setRequestBodyState({activeBodyType:s}),"activeBodyType"===e&&"graphql"===s&&!t&&"GET"===r.method&&(r.method="POST",(0,n.Am)({title:"Request method changed",status:"info",description:"Request method has been changed to POST for the selected body type - GraphQL"}))}))}));return[e(r.requestBodyState),a.current]})((e=>e.activeBodyType)),r=(0,s.useRef)((e=>{t("activeBodyType",e)}));return[e,r.current]}const Ys=[["none","none"],["params","form-data"],["urlencoded","x-www-form-urlencoded"],["raw","raw"],["binary","binary"],["graphql","GraphQL"]];let Gs,Xs,Js=e=>e;const ea=(0,s.lazy)((()=>r.e(4045).then(r.bind(r,74045)))),ta=c().nav(Gs||(Gs=Js`
  padding: var(--spacing-s) 0;
  // TODO: Integrate vertical menu for smaller screens or two-pane layout
  max-width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`)),ra=c().div(Xs||(Xs=Js`
  min-height: var(--spacing-xxl);
`)),sa=e=>{const{bodyType:t}=e;switch(t){case"raw":return(0,Z.jsx)($s,{});case"graphql":return(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(Z.Fragment,{children:" "}),children:(0,Z.jsx)(ea,{})});default:return(0,Z.jsx)(ra,{})}},aa=(0,o.observer)((function({bodyType:e}){const[,t]=Qs();return(0,Z.jsx)(ta,{children:(0,Z.jsxs)(u.Z,{gap:"spacing-s",children:[(0,Z.jsx)(Es.Z,{name:"workbench-request-body-group",value:e,onChange:t,children:Ys.map((([e,t])=>(0,Z.jsx)(Ps.Z,{value:e,id:e,label:t})))}),(0,Z.jsx)(sa,{bodyType:e})]})})}));let oa;const na=c()(u.Z)(oa||(oa=(e=>e)`
  padding: var(--spacing-s) 0;
`)),ia=(0,o.observer)((function(){const[e,t,r]=function(){const e=(0,x.x)();return[e.binaryEditor.files,e.binaryEditor.processFiles,e.binaryEditor.resetFiles]}(),[a]=[(0,x.x)().binaryEditor.error],[o,n]=(0,s.useState)(!1),i=null==e?void 0:e.map((e=>e.path));return(0,Z.jsx)(na,{height:"100%",width:"100%",children:(0,Z.jsx)(Ss.FileUploader,{label:"Select File",id:"request-body-binary",multiple:!1,value:i,loading:o,error:a,onChange:e=>{n(!0),t(e).finally((()=>n(!1)))},onReset:r})})})),la=(0,o.observer)((function(){const[e,t]=function(){const e=(0,x.x)();return[e.formDataStore.items,e.formDataStore.setFormDataState]}(),[r]=[(0,x.x)().formDataStore.processFiles];return(0,Z.jsx)(Ss.KeyValueEditor,{enableFiles:!0,onFilesSelect:r,tableName:"Request Body Form Data",allowedColumns:["key","value"],showColumns:["key","value"],values:e,onChange:t,disableSorting:!1,nonEditableKeys:!1,nonEditableValues:!1,nonEditableToggles:!1,disableBulkEdit:!0,enableVariableSuggestions:!0})}));function da(){return(0,Z.jsx)(u.Z,{height:"100%",justifyContent:"center",alignItems:"center",children:(0,Z.jsx)(h.ZP,{type:"body-medium",color:"content-color-tertiary",children:"This request does not have a body"})})}const ca=(0,o.observer)((()=>{const[e,t]=(()=>{const e=(0,x.x)();return[e.urlEncodedDataStore.items,e.urlEncodedDataStore.setFormDataState]})();return(0,Z.jsx)(Ss.KeyValueEditor,{tableName:"Request Body URL Encoded",allowedColumns:["key","value"],showColumns:["key","value"],values:e,onChange:e=>t(e),disableSorting:!1,nonEditableKeys:!1,nonEditableValues:!1,nonEditableToggles:!1,disableBulkEdit:!0,enableVariableSuggestions:!0})}));var ua=r(49437),ha=r(80047);let pa;const ma=c()(u.Z)(pa||(pa=(e=>e)`
  overflow: hidden;
`));function ga({description:e}){return(0,Z.jsx)(ma,{direction:"column",height:"100%",justifyContent:"center",alignItems:"center",children:(0,Z.jsx)(ua.Z,{title:"Coming Soon",description:e,children:(0,Z.jsx)(ha.Z,{name:"illustration-no-custom-domain"})})})}const va=(0,s.lazy)((()=>Promise.all([r.e(3723),r.e(7569),r.e(9513)]).then(r.bind(r,89513))));function ba(e){if(!e.bodyType)return null;switch(e.bodyType){case"raw":return(0,Z.jsx)(Ks,{});case"urlencoded":return(0,Z.jsx)(ca,{});case"params":return(0,Z.jsx)(la,{});case"none":return(0,Z.jsx)(da,{});case"binary":return(0,Z.jsx)(ia,{});case"graphql":return(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{}),children:(0,Z.jsx)(va,{})});default:{var t;const[,r]=null!=(t=Ys.find((([t])=>t===e.bodyType)))?t:Ys[0];return(0,Z.jsx)(ga,{description:`Support for ${r} in request body is coming soon.`})}}}let xa;const ya=c().div(xa||(xa=(e=>e)`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`)),fa=(0,o.observer)((function(){const[e]=Qs();return(0,Z.jsxs)(u.Z,{direction:"column",height:"100%",children:[(0,Z.jsx)(aa,{bodyType:e}),(0,Z.jsx)(ya,{role:"tabpanel","aria-labelledby":e,children:(0,Z.jsx)(ba,{bodyType:e})})]})}));var Sa=r(33105),ka=r(36166);const wa=()=>{const e=(0,x.x)();return[e.headerData.headers,e.headerData.setHeaders]};let ja,Ta,Ia=e=>e;const Ca=c()(p.Z)(ja||(ja=Ia`
  margin: var(--spacing-s) 0;
`)),qa=c().div(Ta||(Ta=Ia`
  flex: 1;
  overflow: auto;
`)),Ra=(0,o.observer)((function(){const[e,t]=wa(),[r]=[(0,x.x)().headerData.systemHeaders],[a,o]=(()=>{const e=(0,x.x)();return[e.headerData.systemHeadersHidden,e.headerData.setSystemHeadersHidden]})(),n=(0,s.useMemo)((()=>a?e.filter((e=>!r.includes(e))):e),[e,r,a]),i=a?{text:`${r.length} hidden`,icon:(0,Z.jsx)(Sa.Z,{}),tooltip:"These headers will be automatically added and sent with the request. Click to view and modify these headers."}:{text:"Hide auto-generated headers",icon:(0,Z.jsx)(ka.Z,{}),tooltip:"Click to hide these headers. They will still be automatically added and sent with the request."};return(0,Z.jsxs)(qa,{children:[(0,Z.jsxs)(u.Z,{role:"heading",alignItems:"center",gap:"spacing-s",children:[(0,Z.jsx)(h.ZP,{typographyStyle:{fontWeight:"text-weight-medium"},children:"Headers"}),(0,Z.jsx)(Ca,(0,X.Z)({},i,{size:"small",onClick:()=>o(!a)}))]}),(0,Z.jsx)(Ss.KeyValueEditor,{tableName:"Request Headers",allowedColumns:["key","value"],showColumns:["key","value"],values:n,onChange:e=>{a&&(e=[...r,...e]),t(e)},disableSorting:!1,nonEditableKeys:!1,nonEditableValues:!1,nonEditableToggles:!1,disableBulkEdit:!0,disableMultilineKey:!0,disableMultilineValue:!0,enableVariableSuggestions:!0})]})}));var Ea=r(54660);const Pa=()=>{const e=(0,x.x)();return[e.requestAuthState,e.setRequestAuthState]};var Za=r(71453);let Da,Aa,La=e=>e;const Oa=c()(u.Z)(Da||(Da=La`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`)),za=c()(j.Link)(Aa||(Aa=La`
  display: inline-flex;
  align-items: center;
  text-decoration: underline;
  color: var(--content-color-secondary);
`)),_a=()=>(0,Z.jsxs)(za,{type:"link-default",to:"https://go.pstmn.io/docs-auth",target:"_blank",rel:"noopener noreferer",children:["authorization",(0,Z.jsx)(Za.Z,{})]}),Fa=()=>(0,Z.jsx)(Oa,{children:(0,Z.jsxs)("div",{children:["This request does not use any authorization. Learn more about ",(0,Z.jsx)(_a,{})]})});let Ba,Ma,Na=e=>e;const $a=c()(u.Z)(Ba||(Ba=Na`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`)),Ha=c()(j.Link)(Ma||(Ma=Na`
  text-decoration: underline;
`)),Va=(0,o.observer)((()=>{const e=(0,x.x)().inheritAuthParent;if(null==e||!e.id)return(0,Z.jsx)($a,{children:(0,Z.jsx)("div",{children:"This request is not inheriting any authorization helper at the moment. Save it in a collection to use the parent's authorization helper."})});const t=((e,t)=>{switch(null==e?void 0:e.type){case"folder":return`/workspace/${t}/folder/${e.id}`;case"collection":return`/workspace/${t}/collection/${e.id}`;default:return""}})(e,(0,er.useActiveWorkspaceId)()),r=(e=>{const t=Ea.supportedAuthOptions.find((t=>{var r;return t.value===(null==e||null==(r=e.auth)?void 0:r.type)}));return null==t?void 0:t.label})(e);return(0,Z.jsx)($a,{children:(0,Z.jsxs)("div",{children:["This request is using ",r," from ",null==e?void 0:e.type," ",(0,Z.jsx)(Ha,{to:t,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST",children:null==e?void 0:e.name})]})})}));var Ua=r(50767);const Wa=(0,o.observer)((function(){const[e,t]=Pa(),[r,a]=(()=>{const e=(0,x.x)(),t=(0,Ua.o)(),{value:r,setValue:a}=(0,Ea.useAuthSessionSafe)({model:"request",modelId:t.id});return(0,s.useEffect)((()=>{r&&t.id&&e.setRequestAuthSessionState(r)}),[r,e]),[e.requestAuthSessionState,(r,s)=>{const o=(0,X.Z)({},e.requestAuthSessionState);var n;o.oauth2||(o.oauth2=[]),o.oauth2=o.oauth2.filter((e=>"token_id"!==e.key)),o.oauth2.push({key:r,value:s}),n=o,t.id?a(n):e.setRequestAuthSessionState(n)}]})();return(0,Z.jsx)(Ea.AuthPanel,{authState:e,authSessionState:r,authDescriptions:{[Ea.AUTH_OPTIONS.inherit]:(0,Z.jsx)(Va,{}),[Ea.AUTH_OPTIONS.noauth]:(0,Z.jsx)(Fa,{})},setAuthState:t,setAuthSessionState:a})}));var Ka=r(25883);const Qa=(0,o.observer)((()=>{const{queryParamsToShow:e}=ks(),{pathVariables:t}=ws();return(0,Z.jsxs)(Z.Fragment,{children:["Params",(e.length>0||t.length>0)&&(0,Z.jsx)(Ka.Z,{})]})})),Ya=(0,o.observer)((()=>{const[e]=Pa(),t=!["noauth","inherit"].includes(e.activeAuthType);return(0,Z.jsxs)(Z.Fragment,{children:["Authorization",t&&(0,Z.jsx)(Ka.Z,{})]})})),Ga=(0,o.observer)((()=>{const{requestBodyState:e,urlEncodedDataStore:t,formDataStore:r,rawEditorState:a}=(0,x.x)(),o=(0,s.useMemo)((()=>"urlencoded"===e.activeBodyType?t.items.length>0:"params"===e.activeBodyType?r.items.length>0:"raw"===e.activeBodyType?a.content.length>0:"graphql"===e.activeBodyType),[e.activeBodyType,t.items,r.items,a.content.length]);return(0,Z.jsxs)(Z.Fragment,{children:["Body",o&&(0,Z.jsx)(Ka.Z,{})]})}));var Xa=r(50429);const Ja=()=>{const{data:e}=(0,W.useActiveVariables)();return(0,s.useCallback)(((t,r)=>{const s=new RegExp(/pm.(environment|globals|collectionVariables|variables).(((get|set|unset|has)\(('|").*))$/),a=t.getWordBeforePosition(r);let o=t.getLineContent(r.lineNumber);o&&(o=o.slice(0,Math.max(0,r.column-1)));let n=[];const i=s.exec(o);if(!i||i.length<6)return[];const l=i[1],d=e;let c=[];if(!d)return[];const u={globals:"globals",environment:"environment",collectionVariables:"collection"};if("variables"===l)c=d.filter((e=>(0,Xa.B)(e.key).toLowerCase().includes(a.word.toLowerCase())));else if(u[l]){const e=u[l];c=d.filter((t=>t.scope===e&&"dynamic"!==t.type&&(0,Xa.B)(t.key).toLowerCase().includes(a.word.toLowerCase())))}const h={startLineNumber:r.lineNumber,endLineNumber:r.lineNumber,startColumn:a.startColumn,endColumn:a.endColumn};return n=(0,Xa.a)(c,h),n}),[e])},eo=(0,s.lazy)((()=>r.e(1544).then(r.t.bind(r,31544,23)))),to=a().forwardRef(((e,t)=>(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{}),children:(0,Z.jsx)(eo,(0,X.Z)({},e,{ref:t}))})));var ro=r(66893),so=r.n(ro),ao=r(3071);let oo,no,io=e=>e;const lo=c()(u.Z)(oo||(oo=io`
  flex: 1;
`)),co=c().div(no||(no=io`
  flex: 1;
  overflow: hidden;
  height: 100%;
  margin-top: var(--spacing-l);
  margin-right: calc(-1 * var(--spacing-xxl));
`));function uo(e){const[t,r]=(0,s.useState)(!0);return(0,Z.jsxs)(u.Z,{height:"100%",children:[t&&(0,Z.jsxs)(lo,{direction:"column",children:[(0,Z.jsx)("div",{children:e.header}),(0,Z.jsx)(co,{children:e.children})]}),(0,Z.jsx)("div",{children:(0,Z.jsx)(p.Z,{onClick:()=>r((e=>!e)),type:"tertiary",icon:t?(0,Z.jsx)(ke.Z,{}):(0,Z.jsx)(ao.Z,{})})})]})}let ho,po,mo,go=e=>e;const vo=c().h5(ho||(ho=go`
  flex: 0;
  margin: 0;
  margin-bottom: 4px;
  font-weight: 600;
  word-break: normal;
  font-size: 12px;
  line-height: 1.4;
  /* This color value was already hardcoded */
  color: #6b6b6b;
`)),bo=c().ul(po||(po=go`
  position: relative;
  z-index: 1;
  overflow: auto;
  height: calc(100% - var(--spacing-l));
  flex: 1;
  margin: 0;
  padding: 0;
  padding-right: var(--spacing-l);
  color: var(--content-color-link);
  box-sizing: border-box;
  font-family: var(--text-family-default);
`)),xo=c().li(mo||(mo=go`
  list-style: none;
  user-select: none;
  cursor: pointer;
  padding: var(--spacing-s) var(--spacing-zero);
`)),yo=so().getExamples("prerequest");function fo({onSelect:e}){return(0,Z.jsx)(uo,{header:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(h.ZP,{type:"small",children:"Pre-request scripts are written in JavaScript, and are run before the request is sent. Learn more about "}),(0,Z.jsx)(j.Link,{to:"https://go.pstmn.io/docs-prerequest-scripts",target:"_blank",children:(0,Z.jsx)(h.ZP,{type:"link-default",isExternal:!0,children:"pre-request scripts"})})]}),children:(0,Z.jsxs)(u.Z,{direction:"column",height:"100%",children:[(0,Z.jsx)(vo,{children:"Snippets"}),(0,Z.jsx)(bo,{children:yo.map(((t,r)=>(0,Z.jsx)(xo,{"data-id":r,title:t.description,onClick:()=>null==e?void 0:e(t.code),children:t.name},r)))})]})})}let So,ko,wo,jo=e=>e;const To=c()(u.Z)(So||(So=jo`
  height: calc(100% - var(--spacing-s));
`)),Io=c().div(ko||(ko=jo`
  flex: 1 1 70%;
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
  border-radius: var(--border-radius-default);
  // since the monaco editor inside the panel has a resize observer present,
  // the parent body needs a fixed width otherwise the resize observer gets
  // triggered for pixel increase when the snippet panel is opened.
  width: calc(100% - ${0}px - var(--text-size-m));
`),250),Co=c().div(wo||(wo=jo`
  flex: 0 0 auto;
  max-width: ${0}px;
  padding-left: var(--spacing-m);
  font-size: var(--text-size-s);
`),250);function qo(e){return(0,Z.jsx)(u.Z,{direction:"column",height:"100%",children:(0,Z.jsxs)(To,{children:[(0,Z.jsx)(Io,{children:e.leftPanel}),(0,Z.jsx)(Co,{children:e.rightPanel})]})})}function Ro(){const e=(0,x.x)();return[e.preRequestStore.content,e.preRequestStore.setContent]}function Eo(){const e=(0,x.x)();return[e.testScriptStore.content,e.testScriptStore.setContent]}const Po=["jsLib","node","postman-collection","chai","pre-script"],Zo=(0,o.observer)((function(){const e=(0,s.useRef)(null),[t,r]=Ro(),a=(0,s.useCallback)((t=>{var r;null==(r=e.current)||r.insertTextBlock(t)}),[]),o=Ja();return(0,Z.jsx)(qo,{leftPanel:(0,Z.jsx)(to,{ref:e,showNonPrintableCharacters:!0,fontSize:12,language:"javascript",codeCompletionProviders:[{provider:o}],wordWrap:!0,autoFormat:!0,value:t,onChange:r,typeDefinitionTypes:Po}),rightPanel:(0,Z.jsx)(fo,{onSelect:a})})})),Do=so().getExamples("test");function Ao({onSelect:e}){return(0,Z.jsx)(uo,{header:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(h.ZP,{type:"small",children:"Test scripts are written in JavaScript, and are run after the response is received. Learn more about "}),(0,Z.jsx)(j.Link,{to:"https://go.pstmn.io/docs-test-scripts",target:"_blank",children:(0,Z.jsx)(h.ZP,{type:"link-default",isExternal:!0,children:"tests scripts"})})]}),children:(0,Z.jsxs)(u.Z,{direction:"column",height:"100%",children:[(0,Z.jsx)(vo,{children:"Snippets"}),(0,Z.jsx)(bo,{children:Do.map(((t,r)=>(0,Z.jsx)(xo,{"data-id":r,title:t.description,onClick:()=>null==e?void 0:e(t.code),children:t.name},r)))})]})})}const Lo=["jsLib","node","postman-collection","chai","tests-script"],Oo=(0,o.observer)((function(){const e=(0,s.useRef)(null),[t,r]=Eo(),a=(0,s.useCallback)((t=>{var r;null==(r=e.current)||r.insertTextBlock(t)}),[]),o=Ja();return(0,Z.jsx)(qo,{leftPanel:(0,Z.jsx)(to,{ref:e,showNonPrintableCharacters:!0,fontSize:12,language:"javascript",codeCompletionProviders:[{provider:o}],wordWrap:!0,autoFormat:!0,value:t,onChange:r,typeDefinitionTypes:Lo}),rightPanel:(0,Z.jsx)(Ao,{onSelect:a})})}));let zo;const _o=c().div(zo||(zo=(e=>e)`
  display: inline-flex;
  background-color: var(--base-color-error);
  width: 5px;
  height: 5px;
  margin-left: var(--spacing-xs);
  transform: rotate(45deg);
`)),Fo=()=>(0,Z.jsx)(_o,{"aria-label":"tab with errors","data-testid":"tab-error-indicator"}),Bo=(0,o.observer)((({type:e="prerequest",title:t})=>{const[r]=Ro(),[s]=Eo(),a=(0,cr.KB)(),o=(0,cr.aD)(),n="test"===e?!!s:!!r,i="test"===e?!!o:!!a;return(0,Z.jsxs)(Z.Fragment,{children:[t,n&&!i&&(0,Z.jsx)(Ka.Z,{}),i&&n&&(0,Z.jsx)(Fo,{})]})}));let Mo;const No=c().span(Mo||(Mo=(e=>e)`
  padding: var(--spacing-zero) var(--spacing-xs);
  color: var(--content-color-success);
`)),$o=(0,o.observer)((()=>{const[e]=wa(),t=e.length>0?(0,Z.jsxs)(No,{children:["(",e.length,")"]}):null;return(0,Z.jsxs)("div",{children:["Headers",t]})}));$o.displayName="observer(RequestHeadersTabHeader)";const Ho=$o;var Vo=r(70906);const Uo=()=>{const e=(0,x.x)();return[e.activeRequestEditorTabIndex,e.setActiveRequestEditorTabIndex]};let Wo,Ko,Qo,Yo,Go,Xo=e=>e;const Jo=c()(l.PaneContent)(Wo||(Wo=Xo`
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
`)),en=c()(vs.Z)(Ko||(Ko=Xo`
  box-sizing: border-box;
  padding: ${0};
  width: 100%;
`),(e=>`${e.theme["spacing-zero"]} ${e.theme["spacing-s"]}`)),tn=c()(vs.Z)(Qo||(Qo=Xo`
  box-sizing: border-box;
  padding: ${0};

  /**
   * Following selectors help provide TabPanels height of the parent.
   */
  &,
  > div,
  > div > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`),(e=>`${e.theme["spacing-zero"]} ${e.theme["spacing-s"]}`)),rn=e=>(0,Z.jsx)(l.PaneHeader,(0,X.Z)({},e,{defaultLayout:"horizontal",horizontalComponent:null,verticalComponent:(0,Z.jsx)(l.PaneLabel,{layout:"vertical",label:(0,Z.jsx)(ee.Z,{type:"h5",text:"Request Editor",color:"content-color-primary"}),arrowDirection:"right"})})),sn=c()(u.Z)(Yo||(Yo=Xo`
  padding-inline-end: var(--spacing-l);
`)),an=e=>{const{isCollapsedX:t}=e;return t?null:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(nn,{}),(0,Z.jsx)(Jo,{children:(0,Z.jsx)(ln,{})})]})},on=c()(p.Z)(Go||(Go=Xo`
  float: right;
  margin-left: auto;
  margin-right: var(--spacing-s) !important;
`)),nn=(0,o.observer)((()=>{const[e,t]=(0,f.useSearchParams)(),[r,s]=Uo();return(0,Z.jsxs)(sn,{children:[(0,Z.jsx)(en,{activeTabIndex:r,onChange:s,type:"primary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,Z.jsxs)(bs.Z,{children:[(0,Z.jsx)(xs.Z,{label:(0,Z.jsx)(Qa,{})}),(0,Z.jsx)(xs.Z,{label:(0,Z.jsx)(Ya,{})}),(0,Z.jsx)(xs.Z,{label:(0,Z.jsx)(Ho,{})}),(0,Z.jsx)(xs.Z,{label:(0,Z.jsx)(Ga,{})}),(0,Z.jsx)(xs.Z,{label:(0,Z.jsx)(Bo,{title:"Pre-request Script"})}),(0,Z.jsx)(xs.Z,{label:(0,Z.jsx)(Bo,{type:"test",title:"Tests"})}),(0,Z.jsx)(xs.Z,{label:"Settings"})]})}),(0,Z.jsx)(on,{type:"plain",text:"Code",onClick:()=>{e.set("ctx","code"),t(e)}}),(0,Z.jsx)(p.Z,{type:"plain",text:"Cookies",onClick:e=>{e.stopPropagation(),P.AnalyticsService.addEventV2({category:"request-cookies-ux",action:"request-cookies-click",label:"request-cookies",entityType:"request"}),(0,Vo.getCookieManager)().openCookiesEditor()}})]})})),ln=(0,o.observer)((()=>{const[e]=Uo();return(0,Z.jsx)(tn,{activeTabIndex:e,incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,Z.jsxs)(ys.Z,{children:[(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(Rs,{})}),(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(Wa,{})}),(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(Ra,{})}),(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(fa,{})}),(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(Zo,{})}),(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(Oo,{})}),(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(ga,{description:"Support for Settings is coming soon."})})]})})}));var dn=r(5714),cn=r(31113),un=r(53195);const hn=(0,s.createContext)({activeResponseInfoTab:0,setActiveResponseInfoTab:()=>null}),pn=()=>{const e=(0,s.useContext)(hn);if(!e)throw new Error("useResponseViewerContext should be used within a ResponseViewerContext.Provider");return e},mn=({children:e})=>{const[t,r]=(0,s.useState)(0),a=(0,s.useMemo)((()=>({activeResponseInfoTab:t,setActiveResponseInfoTab:r})),[t,r]);return(0,Z.jsx)(hn.Provider,{value:a,children:e})};var gn=r(5111);let vn,bn,xn=e=>e;const yn=(0,s.lazy)((()=>r.e(3331).then(r.bind(r,63331)))),fn=c()(vs.Z)(vn||(vn=xn`
  box-sizing: border-box;
  padding: ${0};
  width: 100%;
`),(e=>e.theme["spacing-zero"])),Sn=c()(h.ZP)(bn||(bn=xn`
  margin-left: var(--spacing-xs);
`)),kn=({numberOfItems:e})=>e?(0,Z.jsxs)(Sn,{color:"content-color-success",children:["(",e,")"]}):null,wn=(0,o.observer)((()=>{const e=(0,cr.Oj)(),t=(0,cr.Fp)(),{activeResponseInfoTab:r,setActiveResponseInfoTab:s}=pn();return(0,cr.A5)()?(0,Z.jsx)(fn,{activeTabIndex:r,onChange:e=>{s(e)},type:"primary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,role:"tablist","data-testid":"response-viewer-tablist",children:(0,Z.jsxs)(bs.Z,{children:[(0,Z.jsx)(xs.Z,{label:"Body"}),(0,Z.jsx)(xs.Z,{label:(0,Z.jsxs)(Z.Fragment,{children:["Cookies",(0,Z.jsx)(kn,{numberOfItems:(null==t?void 0:t.length)||0})]})}),(0,Z.jsx)(xs.Z,{label:(0,Z.jsxs)(Z.Fragment,{children:["Headers",(0,Z.jsx)(kn,{numberOfItems:(null==e?void 0:e.length)||0})]})}),(0,Z.jsx)(xs.Z,{label:(0,Z.jsx)(gn.ResponseTestResultsHeader,{})})]})}):null}));function jn({loading:e,error:t}){return e||t?(0,Z.jsx)(ee.Z,{type:"h5",text:"Response",color:"content-color-primary"}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(wn,{}),(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(Z.Fragment,{children:" "}),children:(0,Z.jsx)(yn,{})})]})}let Tn;const In=c()(u.Z)(Tn||(Tn=(e=>e)``)),Cn=(0,o.observer)((()=>{const{layout:e,setLayout:t}=(0,un.W)();return"vertical"===e?(0,Z.jsx)(p.Z,{type:"plain",onClick:()=>t("horizontal"),"data-testid":"toggle-layout-button",icon:(0,Z.jsx)(dn.Z,{}),tooltip:"Two pane view"}):(0,Z.jsx)(p.Z,{type:"plain",onClick:()=>t("vertical"),"data-testid":"toggle-layout-button",icon:(0,Z.jsx)(cn.Z,{}),tooltip:"Single pane view"})})),qn=(0,o.observer)((e=>{const{layoutAxis:t,getCollapseArrowDirection:r}=(0,un.W)(),s=(0,cr.A5)(),a=(0,cr.as)(),o=(0,cr.KB)();return(0,Z.jsx)(l.PaneHeader,(0,X.Z)({},e,{"data-testid":"response-pane-header",defaultLayout:"horizontal",layoutAxis:t,horizontalComponent:(0,Z.jsx)(l.PaneLabel,{layout:"horizontal",label:(0,Z.jsx)(In,{alignItems:"center",children:(0,Z.jsx)(jn,{loading:!s,error:a||o})}),actions:(0,Z.jsx)(Cn,{}),arrowDirection:r}),verticalComponent:(0,Z.jsx)(l.PaneLabel,{layout:"vertical",actions:(0,Z.jsx)(Cn,{}),label:(0,Z.jsx)(ee.Z,{type:"h5",text:"Response",color:"content-color-primary"}),arrowDirection:r})}))}));var Rn=r(95624);const En=({children:e})=>{const{requestId:t}=(0,f.useParams)(),[r]=(0,f.useSearchParams)();let s;t?s=t:r.has("request")&&(s=r.get("request"));const a=(0,er.useActiveWorkspaceId)(),o=s?(0,oe.requestFindOneSelectCollectionQuery)({requestId:s}):void 0,n=new W.VariablesContextStore({collectionFetchOptions:o},{workspaceId:a});return(0,Z.jsx)(W.VariablesContextProvider,{store:n,children:e})};var Pn=r(96529),Zn=r(83125),Dn=r(68637);let An;const Ln=c().button(An||(An=(e=>e)`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  line-height: 1;
  height: 32px;
  background-color: transparent;
  padding: var(--spacing-xs) var(--spacing-s);
  border-radius: var(--border-radius-default);

  &:hover {
    background-color: var(--highlight-background-color-primary);
  }
`)),On=a().forwardRef((function(e,t){return(0,Z.jsx)(Ln,(0,X.Z)({},e,{ref:t}))}));var zn=r(45261),_n=r(32054);const Fn={editor:null,setEditor:()=>{}},Bn=a().createContext(Fn);function Mn(e){const[t,r]=(0,s.useState)(null),a=(0,s.useMemo)((()=>({editor:t,setEditor:r})),[t]);return(0,Z.jsx)(Bn.Provider,{value:a,children:e.children})}const Nn=()=>{const{editor:e,setEditor:t}=(0,s.useContext)(Bn);if(!t)throw new Error("EditorContextProvider must be used to access useEditorContext");return[e,t]};function $n(e){const{enabled:t}=e,[r]=Nn(),{addToast:s}=(0,n.ZP)();return t?(0,Z.jsxs)(u.Z,{gap:"spacing-s",children:[(0,Z.jsx)(te.Z,{content:"Copy to clipboard",placement:"top",children:(0,Z.jsx)(On,{"aria-label":"Copy to Clipboard",onClick:()=>(null==r||r.copyToClipboard(),void s({title:"Copied to clipboard",status:"success",description:null})),children:(0,Z.jsx)(zn.Z,{})})}),(0,Z.jsx)(te.Z,{content:"Find in response",placement:"top",children:(0,Z.jsx)(On,{"aria-label":"Find in Response",onClick:()=>null==r?void 0:r.openFindWidget(),children:(0,Z.jsx)(_n.Z,{})})})]}):null}var Hn=r(64691),Vn=r(48263),Un=r(30610),Wn=r(17282);function Kn({language:e,onLangaugeSelect:t,onLanguageReset:r}){return(0,Z.jsxs)(Hn.Z,{"data-testid":"response-language-selector-menu",children:[(0,Z.jsx)(Vn.Z,{text:(0,Z.jsx)("span",{"aria-label":"Switch language",children:e})}),(0,Z.jsxs)(Un.Z,{children:[Object.keys(Pn.B7).map((e=>{const r=Pn.B7[e];return(0,Z.jsx)(Wn.Z,{"data-testid":`response-language-${r}`,onClick:()=>t(r),children:r},r)})),(0,Z.jsx)(Wn.Z,{"data-testid":"response-language-auto",onClick:r,children:"Auto"},"Auto")]})]})}const Qn=["wordWrap","setWordWrap","activeTab","onTabChange"];let Yn,Gn,Xn=e=>e;const Jn=c()(p.Z)(Yn||(Yn=Xn`
  > i > svg > path {
    fill: ${0};
  }
`),(e=>e.wordWrap&&e.theme["content-color-brand"])),ei=c()(u.Z)(Gn||(Gn=Xn`
  padding: ${0};
`),(e=>e.theme["spacing-s"]));function ti(e){const{wordWrap:t,setWordWrap:r,activeTab:a,onTabChange:o}=e,n=(0,ar.Z)(e,Qn),[i,l]=(0,s.useState)(null!=a?a:Pn.ll.PRETTY),d=i===Pn.ll.PRETTY;i!==a&&a&&l(a);const c=[Pn.ll.PRETTY,Pn.ll.RAW].includes(i);return(0,Z.jsxs)(ei,{direction:"row",gap:"spacing-s",children:[(0,Z.jsx)(Dn.y,{activeTabIndex:i,onChange:e=>{null==o||o(e),l(e)},type:"secondary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,Z.jsxs)(bs.Z,{children:[(0,Z.jsx)(xs.Z,{label:"Pretty"}),(0,Z.jsx)(xs.Z,{label:"Raw"}),(0,Z.jsx)(xs.Z,{label:"Preview"})]})}),(0,Z.jsxs)(u.Z,{justifyContent:"space-between",grow:"1",children:[(0,Z.jsx)(u.Z,{gap:"spacing-s",children:d&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Kn,(0,X.Z)({},n)),(0,Z.jsx)(Jn,{type:"secondary",icon:(0,Z.jsx)(Zn.Z,{}),wordWrap:t,onClick:()=>r(!t)})]})}),(0,Z.jsx)($n,{enabled:c})]})]})}var ri=r(64019),si=r(30923);let ai,oi,ni=e=>e;const ii=(0,s.lazy)((()=>r.e(1544).then(r.t.bind(r,31544,23)))),li=(0,s.lazy)((()=>r.e(8360).then(r.bind(r,58360)).then((e=>({default:e.ResponsePreviewPanel}))))),di=c()(l.PaneContent)(ai||(ai=ni`
  height: 100%;
`)),ci=c().div(oi||(oi=ni`
  height: 100%;
  padding: ${0};
`),(e=>`${e.theme["spacing-s"]}`)),ui=(e,t,r)=>{const s=[...e];return s[t]=r,s},hi=(0,o.observer)((()=>{const[e,t]=a().useState(!0),[,r]=Nn(),o=(0,cr.j2)(),[n,l,d]=(0,cr.Sb)(),c=ii,[u,h]=(0,s.useState)(Pn.ll.PRETTY),[p,m]=(0,s.useState)([n,Pn.B7.TEXT]);(0,s.useEffect)((()=>{m((e=>ui(e,Pn.ll.PRETTY,n)))}),[n]);const g=(0,s.useCallback)((e=>m((t=>{if(u===Pn.ll.PRETTY)l(e);else if(u===Pn.ll.RAW)return ui(t,u,e);return t}))),[u,l]),v=p[u];let b;return b=u===Pn.ll.PREVIEW?(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{}),children:(0,Z.jsx)(li,{})}):(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{}),children:(0,Z.jsx)(c,{language:null==v?void 0:v.toLowerCase(),wordWrap:e,readOnly:!0,enableLinks:!0,value:o,ref:r,autoFormat:!0})}),(0,Z.jsxs)(di,{children:[(0,Z.jsx)(ti,{wordWrap:e,setWordWrap:t,activeTab:u,onTabChange:h,language:v,onLangaugeSelect:g,onLanguageReset:()=>g(d)}),(0,Z.jsx)(ci,{children:b})]})})),pi=(0,o.observer)((function(){const[e]=(0,cr.Ik)(),t=(0,ri.n)(null==e?void 0:e.mimeType);return(0,Z.jsx)(si.CustomErrorBoundary,{appId:"http-workbench",errorElementId:"code-editor-provider",children:(0,Z.jsx)(Mn,{children:t?(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{}),children:(0,Z.jsx)(li,{})}):(0,Z.jsx)(hi,{})})})}));let mi;const gi=c()(u.Z)(mi||(mi=(e=>e)`
  overflow: hidden;
`)),vi=()=>(0,Z.jsx)(gi,{height:"calc(100% - var(--spacing-xxl))",alignItems:"center",children:(0,Z.jsx)(ua.Z,{description:Pn.Ei,children:(0,Z.jsx)(ha.Z,{name:"illustration-hit-send"})})}),bi=r.p+"failed-request.dfb3897ba46b8e21cd9a7434584860fe.svg";let xi,yi,fi,Si,ki,wi=e=>e;const ji=c()(u.Z)(xi||(xi=wi`
  font-size: var(--text-size-m, 12px);
  gap: var(--spacing-l);
`)),Ti=c().div(yi||(yi=wi`
  padding: var(--spacing-xs) var(--spacing-s);
  background-color: var(--background-color-error);
  border-radius: 20px;
  margin: var(--spacing-m) var(--spacing-xxxl) var(--spacing-m)
    var(--spacing-xxxl);
  font-size: var(--text-size-m, 12px);
`)),Ii=c()(h.ZP)(fi||(fi=wi``)),Ci=c().img(Si||(Si=wi`
  width: 120px;
  height: 120px;
`)),qi=c()(j.Link)(ki||(ki=wi`
  font-weight: 600;
  &,
  &:visited,
  &:active,
  &:hover,
  &:focus {
    color: var(--content-color-link);
  }
`)),Ri=()=>{const e=(0,cr.as)();return e?(0,Z.jsxs)(ji,{alignItems:"center",justifyContent:"center",direction:"column",height:"100%",children:[(0,Z.jsx)(Ci,{src:bi,alt:"Could not send request"}),(0,Z.jsx)(Ii,{children:"Could not send request"}),(0,Z.jsx)(Ti,{children:(0,Z.jsxs)(Z.Fragment,{children:["Error: ",null==e?void 0:e.message]})}),(0,Z.jsx)(qi,{to:"https://go.pstmn.io/troubleshooting-request",children:"Learn more about troubleshooting API requests"})]}):null};let Ei,Pi,Zi=e=>e;const Di=c().div(Ei||(Ei=Zi`
  font-size: var(--text-size-m, 12px);
  padding: var(--spacing-s);
`)),Ai=c().div(Pi||(Pi=Zi`
  padding: var(--spacing-s);
  margin: var(--spacing-s);
  background-color: var(--background-color-error);
  border-radius: var(--border-radius-default);
  text-align: center;
`)),Li=(0,o.observer)((()=>{const e=(0,cr.KB)();return(0,Z.jsx)(Di,{children:(0,Z.jsxs)(Ai,{children:[(0,Z.jsx)(h.ZP,{type:"body-medium",color:"content-color-error",children:"There was an error in evaluating the Pre-request Script:"})," ",(0,Z.jsxs)(h.ZP,{color:"content-color-error",typographyStyle:{fontSize:"text-size-m",fontWeight:"text-weight-medium",lineHeight:"line-height-m"},children:[null==e?void 0:e.name,": ",null==e?void 0:e.message]})]})})}));let Oi;const zi=c()(vs.Z)(Oi||(Oi=(e=>e)`
  padding: 0;
  overflow-y: auto;

  /**
   * Following selectors help provide TabPanels height of the parent.
   * Ref: apps/http-workbench/src/components/request-editor/index.tsx
   */
  & {
    height: calc(100% - var(--spacing-xxl));
  }
  & > div,
  & > div > div {
    height: 100%;
  }
`)),_i=(0,s.lazy)((()=>Promise.all([r.e(3468),r.e(3478)]).then(r.bind(r,63478)))),Fi=(0,s.lazy)((()=>r.e(1507).then(r.bind(r,41507)))),Bi=(0,s.lazy)((()=>Promise.resolve().then(r.bind(r,5111)).then((e=>({default:e.ResponseTestResultsPanel}))))),Mi=(0,o.observer)((({isCollapsedX:e,isCollapsedY:t})=>{const{activeResponseInfoTab:r}=pn(),a=(0,cr.A5)(),o=(0,cr.as)(),n=(0,cr.KB)();return e||t?null:n?(0,Z.jsx)(Li,{}):o?(0,Z.jsx)(Ri,{}):a?(0,Z.jsx)(zi,{activeTabIndex:r,incrementallyCreateTabs:!0,destroyInactiveTabs:!0,padding:0,"data-testid":"response-viewer-tabs",children:(0,Z.jsxs)(ys.Z,{children:[(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(pi,{})}),(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{size:"large"}),children:(0,Z.jsx)(_i,{})})}),(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{size:"large"}),children:(0,Z.jsx)(Fi,{})})}),(0,Z.jsx)(fs.Z,{children:(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{size:"large"}),children:(0,Z.jsx)(Bi,{})})})]})}):(0,Z.jsx)(vi,{})}));let Ni,$i,Hi,Vi,Ui,Wi,Ki=e=>e;const Qi=c()(u.Z)(Ni||(Ni=Ki`
  gap: var(--spacing-xl);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
`)),Yi=c().div($i||($i=Ki`
  position: absolute;
  height: 2px;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 101;
`)),Gi=(0,d.keyframes)(Hi||(Hi=Ki`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(200%);
  }
`)),Xi=c().div(Vi||(Vi=Ki`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(
    78.82deg,
    var(--background-color-primary),
    var(--base-color-brand) 49.98%,
    var(--background-color-primary)
  );
  animation: ${0} 1s ease-in-out infinite;
`),Gi),Ji=c().div(Ui||(Ui=Ki`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: var(--background-color-primary);
  opacity: 0.8;
`)),el=c()(p.Z)(Wi||(Wi=Ki`
  width: calc(3 * var(--spacing-xl));
`)),tl=(0,o.observer)((e=>{const t=Nr(),r=(0,cr.fX)(),{isCollapsedX:s,isCollapsedY:a}=e;return t?s||a?(0,Z.jsx)(Ji,{}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ji,{}),(0,Z.jsx)(Yi,{children:(0,Z.jsx)(Xi,{})}),(0,Z.jsxs)(Qi,{alignItems:"center",justifyContent:"center",height:"100%",width:"100%",direction:"column",children:[(0,Z.jsx)(h.ZP,{type:"strong",children:"Sending request..."}),(0,Z.jsx)(el,{type:"secondary",text:"Cancel",onClick:r})]})]}):null}));let rl;const sl=c()(u.Z)(rl||(rl=(e=>e)`
  height: 100vh;
  width: 100vw;
  min-width: 650px;
  max-width: 100%;
  background-color: var(--background-color-primary);
  color: var(--content-color-primary);
  overflow: hidden;
`)),al=(0,o.observer)((({children:e})=>{var t;const{isLoading:r,error:s}=(()=>{const e=(0,x.x)();return{isLoading:e.isLoading,error:e.error}})(),a=(0,x.x)(),{requestId:o}=(0,f.useParams)();if((0,oe.useCollectionSubscription)({collectionId:a.collection.id||"",workspaceId:(0,er.useActiveWorkspaceId)(),subscribingEntity:{id:null!=(t=a.metadata.id)?t:o,type:"request"}}),!r&&s)throw s;return(0,Z.jsx)(sl,{direction:"column",children:r?(0,Z.jsx)(i.Z,{size:"large",description:"Loading Request"}):e})}));var ol=r(20684);const nl=()=>{var e;const t=(0,x.x)(),r=(0,X.Z)({id:null==(e=t.metadata)?void 0:e.id,url:t.urlStore.url,headerData:t.headerData.headers,method:t.method,pathVariableData:t.urlStore.pathVariables,queryParams:t.urlStore.allQueryParams,auth:t.requestAuthState,data:"",parentCollectionId:t.metadata.collectionId},t.previewRequestBody);return"raw"===t.requestBodyState.activeBodyType?r.data=t.rawEditorState.content:"graphql"===t.requestBodyState.activeBodyType&&(r.data=t.graphqlPayloadStore.payload),r},il=(0,s.lazy)((()=>r.e(2936).then(r.t.bind(r,82936,23)))),ll=e=>(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{}),children:(0,Z.jsx)(il,(0,X.Z)({},e))}),dl={mode:"hidden",defaultElementId:"code",elements:[{id:"code",title:"Code snippet",icon:(0,Z.jsx)(ol.Z,{color:"content-color-primary"}),View:(0,ne.observer)((()=>{const e=nl();return(0,Z.jsx)(ll,{requestData:e,type:"request"})}))}]},cl=(ol.Z,(0,ne.observer)((()=>{const e=nl();return(0,Z.jsx)(ll,{requestData:e,type:"request"})})),ol.Z,(0,ne.observer)((()=>{const e=nl();return(0,Z.jsx)(ll,{requestData:e,type:"request"})})),(0,s.lazy)((()=>r.e(3688).then(r.t.bind(r,53688,23))))),ul=(0,o.observer)((e=>{const t=dl;return(0,Z.jsx)(cl,{configuration:t,children:e.children})})),hl=(0,o.observer)((()=>{const{layout:e}=(0,un.W)();return(0,Z.jsxs)(l.PaneGroup,{defaultLayout:e,scrollToResize:!0,"data-testid":"response-pane-group",children:[(0,Z.jsxs)(l.Pane,{height:{default:200,collapsed:33,uncollapsed:400,min:100,resizableByDefault:!0},width:{default:400,collapsed:33,uncollapsed:400,min:300,resizableByDefault:!0},resizableByDefault:!0,children:[(0,Z.jsx)(rn,{}),(0,Z.jsx)(an,{})]}),(0,Z.jsxs)(l.Pane,{height:{default:200,collapsed:33,uncollapsed:200,min:100,resizableByDefault:!0},width:{default:400,collapsed:33,uncollapsed:400,min:400,resizableByDefault:!0},resizableByDefault:!0,children:[(0,Z.jsx)(tl,{}),(0,Z.jsx)(qn,{}),(0,Z.jsx)(Mi,{})]})]})})),pl=(0,o.observer)((()=>{const{requestId:e,historyId:t}=(0,f.useParams)();return(0,s.useEffect)((()=>{t&&P.AnalyticsService.addEventV2({category:"http",action:"open-tab",label:"history",value:1}),e&&oe.ENABLE_COLLECTIONS&&P.AnalyticsService.addEventV2({category:"http",action:"open-tab",label:"sidebar",value:1})}),[]),e&&!oe.ENABLE_COLLECTIONS?(0,Z.jsx)(ga,{description:"Request coming soon"}):(0,Z.jsx)(Rn.p,{children:(0,Z.jsx)(En,{children:(0,Z.jsx)(n.VW,{children:(0,Z.jsx)(mn,{children:(0,Z.jsx)(al,{direction:"column",children:(0,Z.jsx)(s.Suspense,{fallback:(0,Z.jsx)(i.Z,{}),children:(0,Z.jsxs)(ul,{children:[(0,Z.jsx)(_r,{}),(0,Z.jsx)(gs,{}),(0,Z.jsx)(hl,{})]})})})})})})})}))},59596:(e,t,r)=>{"use strict";r.d(t,{$x:()=>v,A5:()=>m,Fp:()=>c,HX:()=>o,I2:()=>d,Ik:()=>n,KB:()=>h,Oj:()=>i,Sb:()=>l,Yf:()=>g,aD:()=>p,as:()=>u,fX:()=>b,gr:()=>x,j2:()=>a});var s=r(4779);const a=()=>{var e;return null!=(e=(0,s.x)().editorResponseStore.body)?e:void 0},o=()=>{const e=(0,s.x)();return[e.editorResponseStore.body,e.editorResponseStore.bodyStream]},n=()=>[(0,s.x)().editorResponseStore.contentInfo],i=()=>(0,s.x)().editorResponseStore.headers,l=()=>{const e=(0,s.x)();return[e.editorResponseStore.language,e.editorResponseStore.setLanguage,e.editorResponseStore.languageAuto]},d=()=>(0,s.x)().editorResponseStore.meta,c=()=>(0,s.x)().editorResponseStore.cookies,u=()=>(0,s.x)().editorResponseStore.error,h=()=>(0,s.x)().editorResponseStore.prerequestScriptError,p=()=>(0,s.x)().editorResponseStore.testScriptError,m=()=>(0,s.x)().editorResponseStore.initialized,g=()=>(0,s.x)().clearResponse,v=()=>(0,s.x)().editorResponseStore.assertions,b=()=>(0,s.x)().cancelRequest,x=()=>(0,s.x)().getLastResponseDetails},48491:(e,t,r)=>{"use strict";r.d(t,{i:()=>a});var s=r(60607);const a=()=>{var e;const t=(0,s.useMatch)("workspace/:workspaceId/request/:requestId");return!!t&&"create"!==(null==t||null==(e=t.params)?void 0:e.requestId)}},18712:(e,t,r)=>{"use strict";r.d(t,{q:()=>a});var s=r(4779);const a=()=>(0,s.x)().getCreateRequestPayload},4779:(e,t,r)=>{"use strict";r.d(t,{x:()=>n});var s=r(40540),a=r.n(s),o=r(95624);const n=()=>{const e=a().useContext(o.K);if(!e)throw new Error("useRequestEditorStore should be used within a RequestEditorContext.Provider");return e}},50767:(e,t,r)=>{"use strict";r.d(t,{o:()=>a});var s=r(4779);const a=()=>(0,s.x)().metadata},26259:(e,t,r)=>{"use strict";r.d(t,{I:()=>a});var s=r(4779);const a=()=>{const e=(0,s.x)().urlStore;return{url:e.url,setUrl:e.setUrl.bind(e)}}},53195:(e,t,r)=>{"use strict";r.d(t,{W:()=>a});var s=r(4779);const a=()=>{const e=(0,s.x)();return{layout:e.workbenchLayout,setLayout:e.setWorkbenchLayout,layoutAxis:"vertical"===e.workbenchLayout?"y":"x",getCollapseArrowDirection:t=>"vertical"===e.workbenchLayout?t?"up":"down":t?"left":"right"}}},95624:(e,t,r)=>{"use strict";r.d(t,{K:()=>fe,p:()=>Se});var s=r(40540),a=r.n(s),o=r(43641),n=r(60607),i=r(7336),l=r(89539),d=r(38879),c=r(7560),u=r(62932),h=r(9029),p=r(48391);async function m(e){return(0,h.processFiles)(e)}class g{setTrackedState(e,t){t&&e&&(this.trackedState=(0,c.Z)({},this.trackedState,{[e]:t}))}constructor(e){this.trackedState={},this.items=void 0,this.setFormDataState=e=>{this.items=e,this.setTrackedState("data",this.items)},this.setItem=(0,u.action)(((e,t)=>{const r=this.items.findIndex(((t,r)=>e===t.id||e===r));-1!==r&&(this.items[r]=(0,c.Z)({},this.items[r],t))})),this.processFiles=(e,t)=>(this.setItem(e,{fileUploadError:""}),m(t).then((t=>t&&this.setItem(e,{value:t.map((e=>e.path))}))).catch((t=>{const r="Connection Error"===t.message?"Check your toolbar to make sure the Postman Desktop Agent is running.":"Make sure that Postman can read files inside the working directory.";this.setItem(e,{fileUploadError:r})}))),(0,u.makeObservable)(this,{items:!0,setFormDataState:u.action,trackedState:!0,setTrackedState:u.action}),this.items=e}}class v{setTrackedState(e,t){t&&e&&(this.trackedState=(0,c.Z)({},this.trackedState,{[e]:t}))}constructor(){this.trackedState={},this.files=null,this.error=void 0,this.setFiles=e=>{this.files=e},this.processFiles=e=>(this.error="",m(e).then((e=>{this.setFiles(e),this.setTrackedState("data",e&&e[0].path)})).catch((e=>{const t="Connection Error"===e.message?"Check your toolbar to make sure the Postman Desktop Agent is running.":"Make sure that Postman can read files inside the working directory.";this.error=t}))),this.resetFiles=()=>{this.files=null},(0,u.makeObservable)(this,{files:!0,processFiles:u.action,setFiles:u.action,resetFiles:u.action,trackedState:!0,setTrackedState:u.action})}}const b={infoTitle:"This query param was automatically added",info:"This query param is added because of the authorization method used for this request.\n\nUse the authorization tab to remove authorization or to change the value of this param.",enabled:!0,disableEdit:!0,previewSettingsLink:"Go to authorization",system:!0};var x=r(79233);class y{constructor(e,t=(0,x.getUpdatedQueryParamsFromURL)(e,[]),r=[]){this.queryParameters=void 0,this.pathVars=void 0,this.url=void 0,this.previewQueryParams=void 0,this.trackedState={},this.updateQueryParams=e=>{(0,u.runInAction)((()=>{this.queryParameters=e.filter((e=>!e.system)),this.updateUrlFromQueryParams()})),this.setTrackedState("queryParams",this.queryParameters)},this.updatePathVariables=e=>{(0,u.runInAction)((()=>{this.pathVars=u.observable.map(e.reduce(((e,t)=>(void 0!==t.value&&e.set(t.key,t),e)),new Map)),this.setTrackedState("pathVariableData",e)}))},this.updateQueryParamsFromUrl=()=>{const e=(0,x.getUpdatedQueryParamsFromURL)(this.url,this.queryParams);(0,u.runInAction)((()=>{this.queryParameters=e,this.setTrackedState("queryParams",this.queryParams)}))},this.updatePathVariablesFromUrl=()=>{const e=(0,x.getPathVariablesValues)(this.url,this.pathVariables);(0,u.runInAction)((()=>{const t=e.reduce(((e,t)=>{const r=t.key;return e.set(r,(0,c.Z)({},t,{value:t.value||"",type:"text"})),e}),new Map);t&&(this.pathVars=u.observable.map(t))})),this.setTrackedState("pathVariableData",this.pathVariables)},(0,u.makeObservable)(this,{pathVars:!0,queryParameters:!0,pathVariables:u.computed,url:u.observable,setUrl:u.action,queryParams:u.computed,updateQueryParams:u.action,updatePathVariables:u.action,previewQueryParams:u.observable,updatePreviewQueryParams:u.action,allQueryParams:u.computed,trackedState:!0,setTrackedState:u.action}),this.url=e,this.queryParameters=u.observable.array(t),this.pathVars=u.observable.map(r.reduce(((e,t)=>(void 0!==t.value&&e.set(t.key,t),e)),new Map)),this.previewQueryParams=[]}hydrateStore(e,t,r){this.url=e,t&&(this.queryParameters=u.observable.array(t)),r&&(this.pathVars=u.observable.map(r.reduce(((e,t)=>(void 0!==t.value&&e.set(t.key,t),e)),new Map)))}get queryParams(){return[...this.queryParameters.filter((e=>!e.system))]}get allQueryParams(){return[...this.previewQueryParams,...this.queryParameters]}get pathVariables(){return[...this.pathVars.entries()].map((([,e])=>(0,c.Z)({},e)))}setTrackedState(e,t){e&&(this.trackedState=(0,c.Z)({},this.trackedState,{[e]:t}))}updateUrlFromQueryParams(){(0,u.runInAction)((()=>{const e=(0,x.getURLFromQueryParams)(this.queryParameters);null!=this.url||(this.url="");const t=e?`$1?${e}`:"$1";this.url=this.url.replace(/([^?]*)?(.*)/,t),this.setTrackedState("url",this.url)}))}setUrl(e){(0,u.runInAction)((()=>{this.url=e,this.updateQueryParamsFromUrl(),this.updatePathVariablesFromUrl(),this.setTrackedState("url",this.url)}))}updatePreviewQueryParams({auth:e}){var t,r;if("apikey"!==(null==e?void 0:e.type))return void(this.previewQueryParams=[]);const s=e.apikey,a="query"==(s.some((e=>"in"===e.key))?"query":"header")?[(0,c.Z)({},b,{key:null==(t=s.find((e=>"key"===e.key)))?void 0:t.value,value:null==(r=s.find((e=>"value"===e.key)))?void 0:r.value})]:[];this.previewQueryParams=a.filter((e=>e.key||e.value))}destroy(){}}const f={noauth:[],apikey:[],bearer:[],basic:[],inherit:null,oauth2:[]};var S=r(21219),k=r(36306),w=r(96529);const j={[w.B7.JSON]:/^application\/(\S+\+)?json/,[w.B7.XML]:/^(text|application)\/(\S+\+)?xml/,[w.B7.HTML]:/^text\/html/},T=w.B7.TEXT,I="prerequest";var C=r(94181),q=r(17712),R=(0,d.Z)("languageAuto");class E{get languageAuto(){return(0,l.Z)(this,R)[R]}constructor({workspaceId:e,requestId:t}){this.workspaceId=void 0,this.requestId=void 0,this.initialized=!1,this.body=null,this.bodyStream=null,this.headers=[],this.cookies=[],this.error=null,this.errorsByPhase=[],this.language=w.B7.TEXT,this.contentInfo=null,Object.defineProperty(this,R,{writable:!0,value:w.B7.TEXT}),this.meta={code:0,status:"",requestSize:{body:0,header:0,total:0},size:{body:0,header:0,total:0},timingPhases:{},networkDetails:{}},this.assertions=u.observable.array(),this.responseStart=e=>{var t;this.initialized=!0,this.errorsByPhase=[];const{error:r}=e;if(r)return void(this.error=r);const{response:{code:s,status:a,headers:o,size:n},history:i,cookies:d,request:u}=e;this.headers=null!=(t=null==o?void 0:o.map((e=>(0,c.Z)({},e,{type:"text"}))))?t:[],(0,l.Z)(this,R)[R]=function(e){if(!e)return T;const t=e.findIndex((e=>"content-type"===e.key.toLowerCase()));if(!e[t]||!e[t].value)return T;const r=e[t].value.toLowerCase(),s=Object.entries(j).find((([e,t])=>t.test(r)));return s?s[0]:T}(this.headers)||this.language,this.language=(0,l.Z)(this,R)[R],this.cookies=d,this.error=r,this.assertions.length=0,this.meta={code:s,status:a,size:n,requestSize:null==u?void 0:u.size,timingPhases:(0,h.getTimingPhasesForLastHistoryExecution)(i),networkDetails:(0,h.getLastHistoryExecutionNetworkDetails)(i)}},this.console=e=>{q.pmConsole.logConsole({level:e.level,messages:e.messages,cloud:!1})},this.setLanguage=e=>{this.language=e},this.response=e=>{this.initialized=!0;const{history:t,response:r,error:s,request:a}=e;if(s)this.error=s;else if(this.meta=(0,c.Z)({},this.meta,{size:null==r?void 0:r.size,requestSize:null==a?void 0:a.size,responseTime:null==r?void 0:r.responseTime,timingPhases:(0,h.getTimingPhasesForLastHistoryExecution)(t)}),null!=r&&r.stream){var o,n,i;const e=null==r?void 0:r.stream,t=null!=(o=null==r||null==(n=r.contentInfo)?void 0:n.charset)?o:"utf8";this.contentInfo=null!=(i=null==r?void 0:r.contentInfo)?i:null,this.bodyStream=e,this.body=new TextDecoder(t).decode(e)}},this.assertion=e=>{var t;null!=(t=e.cursor)&&t.scriptId&&Array.isArray(e.assertions)&&e.assertions[0]&&this.assertions.push(e.assertions[0])},this.exception=e=>{(0,k.Am)({status:"error",description:"Something went wrong while running your scripts"})},this.script=({error:e,event:t,mutations:r})=>{if(e)return this.initialized||(this.errorsByPhase=[]),void(this.errorsByPhase=[...this.errorsByPhase,{phase:t?t.listen:"test",error:e}]);null!=r&&r.environment&&S.environmentVariablesHandler.add(r.environment,{workspaceId:this.workspaceId}),null!=r&&r.globals&&S.globalVariablesHandler.add(r.globals,{workspaceId:this.workspaceId}),null!=r&&r.collectionVariables&&C.collectionVariablesHandler.add(r.collectionVariables,{workspaceId:this.workspaceId,requestId:this.requestId})},this.workspaceId=e,this.requestId=t,(0,u.makeObservable)(this,{initialized:u.observable,body:u.observable,bodyStream:!0,contentInfo:!0,headers:u.observable,language:u.observable,cookies:u.observable,error:u.observable,errorsByPhase:u.observable,meta:u.observable,responseStart:u.action,response:u.action,assertion:u.action,setLanguage:u.action,script:u.action,exception:u.action,prerequestScriptError:u.computed,testScriptError:u.computed})}get prerequestScriptError(){return P(this.errorsByPhase,I)}get testScriptError(){return P(this.errorsByPhase,"test")}}function P(e,t){const r=e.find((e=>e.phase===t));return r?r.error:null}var Z=r(48722);class D{parsePayload(e){var t;const r=null==(t=e.events)?void 0:t.filter((e=>e.listen===this.type))[0];return r?r.script.exec.join("\n"):""}constructor(e,t){this.type="prerequest",this.content="",this.trackedState={},this.setContent=e=>{this.content=e,this.setTrackedState("events",[{listen:this.type,script:{id:(0,Z.v4)(),exec:this.content.split("\n"),type:"text/javascript"}}])},this.hydrateStore(e,t),(0,u.makeObservable)(this,{content:!0,setContent:u.action,trackedState:!0,setTrackedState:u.action})}hydrateStore(e,t){this.type=e,this.content=this.parsePayload(t)}setTrackedState(e,t){t&&e&&(this.trackedState[e]=t)}getPayload(){return this.content?[{listen:this.type,script:{id:(0,Z.v4)(),exec:this.content.split("\n"),type:"text/javascript"}}]:[]}}function A(e,t,r){let s,a,o,n,i,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");if(t=+t||0,r&&function(e){const t=typeof e;return null!=e&&("object"===t||"function"===t)}(r)){if(c=!(null==r||!r.leading),u="maxWait"in r,u){const e=(null==r?void 0:r.maxWait)||0;o=Math.max(+e,t)}h="trailing"in r?!(null==r||!r.trailing):h}function p(t){const r=s,o=a;return s=a=void 0,d=t,n=e.apply(o,r),n}function m(e,t){return setTimeout(e,t)}function g(e){const r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=o}function v(){const e=Date.now();if(g(e))return b(e);i=m(v,function(e){const r=e-d,s=t-(e-l);return u?Math.min(s,o-r):s}(e))}function b(e){return i=void 0,h&&s?p(e):(s=a=void 0,n)}function x(...e){const r=Date.now(),o=g(r);if(s=e,a=this,l=r,o){if(void 0===i)return function(e){return d=e,i=m(v,t),c?p(e):n}(l);if(u)return i=m(v,t),p(l)}return void 0===i&&(i=m(v,t)),n}return x.cancel=function(){void 0!==i&&clearTimeout(i),d=0,s=l=a=i=void 0},x.flush=function(){return void 0===i?n:b(Date.now())},x.pending=function(){return void 0!==i},x}const L="authorization",O="cookie",z="cache-control",_="postman-token",F="content-type",B="content-length",M="host",N="user-agent",$="accept",H="accept-encoding",V="connection",U=Object.freeze({[L]:{name:L,sortOrder:0,infoTitle:"This header was automatically added",info:"This header is added because of the authorization method used for this request.\n\nThe value of this header is tentative. You can find the exact value in the console once the request is sent.\n\nUse the authorization tab to remove authorization or to change the value of this header.",allowedToToggle:!1,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to authorization"},[O]:{name:O,sortOrder:1,infoTitle:"This header was automatically added",info:"The Cookie header is added to send the cookies that are associated with this endpoint.\n\nUse the cookie manager to remove the header or to change the value.",allowedToToggle:!1,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to cookies"},[z]:{name:z,sortOrder:2,infoTitle:"We recommend using this header",info:'Postman added "Cache-Control: no-cache" as a precautionary measure to prevent the server from returning stale response when one makes repeated requests.\n\nYou can remove this header in the app settings or enter a new one with a different value.',allowedToToggle:!1,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to settings"},[_]:{name:_,sortOrder:3,infoTitle:"We recommend using this header",info:"The Postman-Token header appends a random UUID to every outgoing request. Postman adds this header for API developers to better debug requests sent and to ensure separate requests appear distinct to the receiving server.\n\nYou can remove this header in the app settings.",allowedToToggle:!1,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to settings"},[F]:{name:F,sortOrder:4,infoTitle:"This header was automatically added",info:"The Content-Type header is added to help the server identify the media type of the request body that is present in this request.\n\nUse the request body tab to control the value or to remove this header.",allowedToToggle:!0,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to body"},[B]:{name:B,sortOrder:5,infoTitle:"This header was automatically added",info:"The Content-Length header was added to indicate to the server the size of the request body that is added to this request. Server uses this value to parse the request body accurately.\n\nYou can remove the header or enter a new one with a different value.",allowedToToggle:!0,enabled:!0,disableEdit:!0,previewSettingsLink:"Go to body"},[M]:{name:M,sortOrder:6,infoTitle:"We recommend using this header",info:"The Host header is added to identify the domain name for which a request is being sent to the server. This header is implicitly sent by every HTTP client.\n\nYou can remove the header or enter a new one with a different value. It is most likely that without this header, your request will return an HTTP 400 error.",allowedToToggle:!0,enabled:!0,disableEdit:!0},[N]:{name:N,sortOrder:7,infoTitle:"We recommend using this header",info:"The User-Agent header is added to help the server identify Postman as the HTTP requesting application or client.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.",allowedToToggle:!0,enabled:!0,disableEdit:!0},[$]:{name:$,sortOrder:8,infoTitle:"We recommend using this header",info:'The "Accept: */*" header is added to tell the server that Postman can understand and process all forms of response content types.\n\nIt is recommended that this header be sent, but you can remove the header or enter a new one with a different value.',allowedToToggle:!0,enabled:!0,disableEdit:!0},[H]:{name:H,sortOrder:9,infoTitle:"We recommend using this header",info:"The Accept-Encoding header is added to indicate to the server that Postman HTTP client supports a defined list of content-encoding or compression algorithms as response.\n\nYou can remove the header or enter a new one with a different value. Doing that may not accurately render the response within the app.",allowedToToggle:!0,enabled:!0,disableEdit:!0},[V]:{name:V,sortOrder:10,infoTitle:"We recommend using this header",info:"Postman added the Connection header to indicate the server to keep the underlying network connection open once the current response is received. This allows Postman to reuse the same connection for faster response times in subsequent requests to the same server.\n\nYou can remove this header or enter a new one with a different value, such as `Connection: Close` to control this behaviour.",allowedToToggle:!0,enabled:!0,disableEdit:!0}}),W={name:"",sortOrder:0,infoTitle:"",info:"",allowedToToggle:!0,disableEdit:!0};var K=(0,d.Z)("userHeaders"),Q=(0,d.Z)("systemHeaders"),Y=(0,d.Z)("handler");class G{setTrackedState(e,t){e&&(this.trackedState=(0,c.Z)({},this.trackedState,{[e]:t}))}get systemHeaders(){return(0,l.Z)(this,Q)[Q]}get userHeaders(){return(0,l.Z)(this,K)[K]}get headers(){return[...(0,l.Z)(this,Q)[Q],...(0,l.Z)(this,K)[K]]}get disabledSystemHeaders(){const e={};for(const t of(0,l.Z)(this,Q)[Q])t.enabled||(e[t.key.toLowerCase()]=!0);return e}getPopulatedPreviewHeaders(e){const t=[];for(const[a,o]of e.entries()){var r,s;const e=(0,l.Z)(this,Q)[Q].find((e=>e.key.toLowerCase()===o.key.toLowerCase())),n=null!=(r=U[o.key.toLowerCase()])?r:(0,c.Z)({},W,{name:o.key.toLowerCase(),sortOrder:a}),i=(0,c.Z)({},n,e,o,{type:null!=(s=null==e?void 0:e.type)?s:"text"});t.push(i)}return t.sort(((e,t)=>e.sortOrder-t.sortOrder))}constructor(e,t={}){var r;Object.defineProperty(this,K,{writable:!0,value:u.observable.array()}),Object.defineProperty(this,Q,{writable:!0,value:u.observable.array()}),Object.defineProperty(this,Y,{writable:!0,value:void 0}),this.trackedState={},this.systemHeadersHidden=!0,this.hydrateHeaders=(0,u.action)((e=>{var t;const r=[],s=[];for(const t of e)t.system?s.push(t):(r.push(t),(0,l.Z)(this,K)[K].push(t));this.setSystemHeaders(s),this.setUserHeaders(r),null==(t=(0,l.Z)(this,Y)[Y])||t.onHeadersUpdate(this.headers)})),this.setHeaders=(0,u.action)((e=>{this.hydrateHeaders(e),this.setTrackedState("headerData",this.headers),this.setTrackedState("headers",this.stringifyHeaders(this.headers))})),this.setSystemHeaders=(0,u.action)((e=>{(0,l.Z)(this,Q)[Q].replace(e)})),this.setUserHeaders=(0,u.action)((e=>{(0,l.Z)(this,K)[K].replace(e)})),this.stringifyHeaders=e=>e.filter((e=>!!e.key)).map((e=>`${e.key}: ${e.value}`)).join("\n"),this.setSystemHeadersHidden=(e=!1)=>{this.systemHeadersHidden=e},this.onPreviewHeadersReceived=e=>{if(null==e||!e.length)return;const t=this.getPopulatedPreviewHeaders(e.filter((e=>e.system)));this.setSystemHeaders(t)},(0,u.makeObservable)(this,{systemHeadersHidden:!0,headers:u.computed,systemHeaders:u.computed,disabledSystemHeaders:u.computed,setSystemHeadersHidden:u.action,destroy:u.action,trackedState:!0,setTrackedState:u.action}),this.hydrateHeaders(e),(0,l.Z)(this,Y)[Y]=null!=(r=t.handler)?r:null}destroy(){(0,l.Z)(this,K)[K].clear(),(0,l.Z)(this,Q)[Q].clear()}}var X=r(15837);const J="text",ee={json:/^application\/(\S+\+)?json/,javascript:/^(text|application)\/(\S+\+)?javascript/,xml:/^(text|application)\/(\S+\+)?xml/,html:/^text\/html/,[J]:/^text/};var te=r(34885);class re{constructor(e){var t=this;this.schemaMeta="introspect",this.isRefreshing=!1,this.editorStore=void 0,this.schemaString=void 0,this.schema=void 0,this.error=void 0,this.cancelSchemaFetching=void 0,this.setSchemaMeta=e=>{this.schemaMeta=e},this.setSchemaString=e=>{this.schemaString=e},this.setIsSchemaRefreshing=e=>{this.isRefreshing=e},this.setError=e=>{this.error=e},this.introspectionHandlers={finishIntrospection:async function({error:e,schemaString:r}){if(t.setIsSchemaRefreshing(!1),e)return t.setError(e);t.setSchemaString(r),t.setError(null)},parseResponse:async function(e){const{error:r,schemaString:s}=await h.agentManager.agent.parseGQLIntrospectionResponse(e);return t.introspectionHandlers.finishIntrospection({error:r,schemaString:s})},handleIntrospection:()=>{var e;if(this.cancelSchemaFetching&&(this.cancelSchemaFetching(),this.cancelSchemaFetching=null),!this.editorStore)return;if(!this.editorStore.urlStore.url)return this.introspectionHandlers.finishIntrospection({error:new Error("No URL provided")});const r=null==(e=this.editorStore)?void 0:e.getAgentPayload();return r.graphqlModeData={query:(0,te.K)(),variables:""},this.setIsSchemaRefreshing(!0),this.cancelSchemaFetching=(0,h.sendRequestViaAgent)(r,{variables:{},runOptionsOverrides:{timeout:{global:null,request:15e3,script:null}},start:({error:e})=>{this.introspectionHandlers.finishIntrospection({error:e})},console:e=>{q.pmConsole.logConsole({level:e.level,messages:e.messages,cloud:!1})},exception:({error:e})=>{this.introspectionHandlers.finishIntrospection({error:e}),e instanceof Error?q.pmConsole.logException({error:e}):q.pmConsole.logException({error:{message:`Introspection failed: ${String(e)}`,name:"Error"}})},response:async function({request:e,error:r,response:s}){return q.pmConsole.logRequest({indirect:"Introspection",request:e,response:s,error:r}),r?t.introspectionHandlers.finishIntrospection({error:r}):(s.stream instanceof ArrayBuffer&&(s.stream=new Uint8Array(s.stream)),await t.introspectionHandlers.parseResponse(new TextDecoder(s.contentInfo.charset).decode(s.stream)))},responseStart:()=>null,assertion:()=>null,script:()=>null})}},this.editorStore=e,(0,u.makeObservable)(this,{schemaMeta:!0,isRefreshing:!0,error:!0,schemaString:!0,schema:!0,setSchemaMeta:u.action,setError:u.action,setIsSchemaRefreshing:u.action})}}class se{setTrackedState(e,t){e&&(this.trackedState=(0,c.Z)({},this.trackedState,{[e]:t}))}get payload(){return{query:this.query,variables:this.variables}}constructor(e){this.trackedState={},this.query="",this.variables="",this.schemaStore=void 0,this.setQuery=e=>{this.query=e,this.setTrackedState("graphqlModeData",e)},this.setVariables=e=>{this.variables=e,this.setTrackedState("graphqlModeData",e)},this.hydrateStore=e=>{this.query=e.query,this.variables=e.variables};const{historyPayload:t,requestEditorStore:r}=e;this.schemaStore=new re(r),(0,u.makeObservable)(this,{query:!0,variables:!0,setQuery:u.action,setVariables:u.action,trackedState:!0,setTrackedState:u.action}),t&&this.hydrateStore(t)}}const ae="Untitled Request";var oe=r(44958);const ne=e=>e&&"object"==typeof e?e.auth?{name:e.name,id:e.id,auth:e.auth,type:"folder"}:ne(e.folder):null;var ie=r(54660);const le="-",de=(e,t)=>{const r=e.split(le);return!r||!t||r.length>=6?e:`${t}${le}${e}`};var ce=r(32018),ue=r.n(ce);var he=r(54302);class pe{constructor(){var e=this;this.refreshTokenMessageId="",this.refreshCallbackDispose=null,this.cancelRefreshCallbackDispose=null,this.postOauth2FinishMessageToExtension=e=>{he.VSCodeCommunicationsService.postMessageToExtension({type:"FINISH_OAUTH2_AUTO_REFRESH",payload:e})},this.handleAutoRefreshToken=async function(t){var r,s,a;const o=null==(r=t.find((e=>"token_id"===e.key)))?void 0:r.value,n=null==(s=t.find((e=>"message_id"===e.key)))?void 0:s.value,i=null==(a=t.find((e=>"refresh_callback_id"===e.key)))?void 0:a.value;if(n!==e.refreshTokenMessageId)return;if(!o)return e.postOauth2FinishMessageToExtension({access_token:null,refresh_callback_id:i});const l=await(0,ie.getOAuth2AccessToken)(o);if(l&&!(0,ie.isTokenAutoRefreshable)(l))return e.postOauth2FinishMessageToExtension({access_token:null,refresh_callback_id:i});await ie.OAuth2TokenFetcher.refreshTokenByTokenId(o,((t,r)=>{if(t)return e.postOauth2FinishMessageToExtension({access_token:null,refresh_callback_id:i});const s=null==l?void 0:l.data.token_key,a=s&&"id_token"===s?null==r?void 0:r.id_token:null==r?void 0:r.access_token;e.postOauth2FinishMessageToExtension({access_token:a,refresh_callback_id:i}),e.updateTokenStore(o,r)}))},this.handleAutoRefreshCancel=async function(t){var r;(null==(r=t.find((e=>"message_id"===e.key)))?void 0:r.value)===e.refreshTokenMessageId&&ie.OAuth2TokenFetcher.finishRefreshFlow(new Error("Cancel the refresh flow"))},this.updateTokenStore=async function(e,t){if(!t)return;const r=await(0,ie.getOAuth2AccessToken)(e);r&&(r.data=(0,c.Z)({},r.data,t.access_token&&{access_token:t.access_token},t.id_token&&{id_token:t.id_token},t.refresh_token&&{refresh_token:t.refresh_token},t.expires_in&&{expires_in:t.expires_in},t.token_type&&{token_type:t.token_type}),r.timestamp=Date.now(),(0,ie.updateOAuth2Token)(r.id,r))},this.refreshCallbackDispose=he.VSCodeCommunicationsService.subscribe("START_OAUTH2_AUTO_REFRESH",(e=>{this.handleAutoRefreshToken(e.data)})),this.cancelRefreshCallbackDispose=he.VSCodeCommunicationsService.subscribe("CANCEL_OAUTH2_AUTO_REFRESH",(e=>{this.handleAutoRefreshCancel(e.data)})),this.refreshTokenMessageId=(0,Z.v4)()}destroy(){var e,t;null==(e=this.cancelRefreshCallbackDispose)||e.call(this),null==(t=this.refreshCallbackDispose)||t.call(this)}getRefreshTokenMessageId(){return this.refreshTokenMessageId}}const me=e=>{var t;if("inherit"===e.requestAuthState.activeAuthType)return null;const r=e.requestAuthState.activeAuthType||"noauth";return"noauth"===r?{type:r}:{type:r,[r]:[...(null==(t=e.requestAuthState)?void 0:t[r])||[]]}};var ge=(0,d.Z)("reactionDisposers"),ve=(0,d.Z)("updateWithPreviewRequestState");class be{get previewRequestBody(){var e;switch(this.requestBodyState.activeBodyType){case"none":return null;case"raw":return{dataMode:this.requestBodyState.activeBodyType,data:this.rawEditorState.content?"truncated for performance reasons":this.rawEditorState.content,dataOptions:{raw:{language:this.rawEditorState.language}}};case"binary":return{dataMode:this.requestBodyState.activeBodyType,data:null==(e=this.binaryEditor.files)?void 0:e[0].path};case"params":return{dataMode:this.requestBodyState.activeBodyType,data:(0,u.toJS)(this.formDataStore.items)};case"urlencoded":return{dataMode:this.requestBodyState.activeBodyType,data:(0,u.toJS)(this.urlEncodedDataStore.items)};case"graphql":return{dataMode:this.requestBodyState.activeBodyType,graphqlModeData:(0,u.toJS)(this.graphqlPayloadStore.payload),dataOptions:{graphql:{}}}}}get isDirty(){return[...Object.keys(this.trackedState),...Object.keys(this.headerData.trackedState),...Object.keys(this.urlStore.trackedState),...Object.keys(this.preRequestStore.trackedState),...Object.keys(this.testScriptStore.trackedState),...Object.keys(this.formDataStore.trackedState),...Object.keys(this.urlEncodedDataStore.trackedState),...Object.keys(this.binaryEditor.trackedState),...Object.keys(this.graphqlPayloadStore.trackedState)].length>0}getContentTypeLanguage(){var e;const t=this.headerData.headers||[],r=t.findIndex((e=>{var t;return"content-type"===(null==(t=e.key)||null==t.toLowerCase?void 0:t.toLowerCase())&&!1!==e.enabled}));if(!t[r]||!t[r].value)return;const s=null==(e=t[r].value)||null==e.toLowerCase?void 0:e.toLowerCase();for(const e in ee)if(ee[e].test(s))return e;return J}hydrateStore(e,t){var r,s,a,o;switch(t&&(this.workbenchLayout=t),e.id&&(this.metadata.id=e.id),e.workspace&&(this.metadata.workspaceId=e.workspace),e.team&&(this.metadata.teamId=e.team),e.owner&&(this.metadata.ownerId=e.owner),e.collection&&(this.metadata.collectionId=e.collection.id),e.headerData&&this.headerData.hydrateHeaders(e.headerData),e.method&&(this.method=e.method),e.preRequestScript&&(this.preRequestScript=e.preRequestScript),e.name&&(this.metadata.name=e.name),e.tests&&(this.tests=e.tests),this.requestBodyState.activeBodyType=null!=(r=e.dataMode)?r:"none",this.removeResponseListeners=null,this.urlStore.hydrateStore(e.url,null!=(s=e.queryParams)?s:[],null!=(a=e.pathVariableData)?a:[]),this.preRequestStore.hydrateStore("prerequest",e),this.testScriptStore.hydrateStore("test",e),this.hasInheritedAuth=null===e.auth,this.requestAuthState=!(o=e.auth)||"object"==typeof o&&0===Object.keys(o).length?(0,c.Z)({activeAuthType:"inherit",type:"inherit"},f):(0,c.Z)({},f,o,{activeAuthType:o.type||"noauth"}),e.collection&&(this.collection=e.collection),e.folder&&(this.folder=e.folder),e.graphqlModeData&&this.graphqlPayloadStore.hydrateStore(e.graphqlModeData),this.requestBodyState.activeBodyType){case"raw":{var n,i;const t={language:(null==(n=e.dataOptions)||null==(n=n.raw)?void 0:n.language)||this.getContentTypeLanguage(),content:null!=(i=e.rawModeData)?i:""};this.rawEditorState=(0,c.Z)({},this.rawEditorState,t);break}case"binary":e.rawModeData&&(this.binaryEditor.files=[{type:"",name:e.rawModeData,actual:null,path:e.rawModeData}]);break;case"params":var l;this.formDataStore.items=null!=(l=e.data)?l:[];break;case"urlencoded":var d;this.urlEncodedDataStore.items=null!=(d=e.data)?d:[]}this.updateInheritAuthParent(e),this.autoTriggerPreviewRequest()}constructor(e,t,r){var s,a=this;if(this.isLoading=!1,this.isSaving=!1,this.isConflicted=!1,this.error=null,this.unsubscribeFromRequestCache=void 0,this.workbenchLayout=void 0,this.urlStore=new y("",[],[]),this.method=i.gg,this.preRequestScript="",this.tests="",this.headerData=new G([],{handler:this}),this.sending=!1,this.metadata={name:"",id:"",workspaceId:"",teamId:"",ownerId:"",collectionId:"",folderId:""},this.preRequestStore=new D("prerequest",{}),this.testScriptStore=new D("test",{}),this.editorResponseStore=void 0,this.refreshTokenManager=void 0,this.removeResponseListeners=null,this.formDataStore=new g([]),this.graphqlPayloadStore=new se({requestEditorStore:this}),this.urlEncodedDataStore=new g([]),this.binaryEditor=new v,this.requestBodyState={activeBodyType:"none"},this.rawEditorState={language:"text",content:"",beautify:[]},this.requestAuthState=(0,c.Z)({activeAuthType:"noauth",type:"noauth"},f),this.requestAuthSessionState=ie.defaultAuthSession,this.collection={},this.folder={},this.hasInheritedAuth=!1,this.unsubscribeFromPermissionsCache=void 0,this.permissions={},this.inheritAuthParent=null,this.trackedState={},Object.defineProperty(this,ge,{writable:!0,value:new Map}),this.exampleMeta=void 0,this.isExampleRequestSent=void 0,this.cachedRequestItem=void 0,this.autoRunRequest=void 0,this.lastResponse=void 0,this.lastAssertion=void 0,this.lastException=void 0,this.lastResponseStartData=void 0,this.isSavedRequest=void 0,this.activeRequestEditorTabIndex=0,this.setActiveRequestEditorTabIndex=e=>{this.activeRequestEditorTabIndex=e},this.setTrackedState=(e,t)=>{e&&(this.trackedState=(0,c.Z)({},this.trackedState,{[e]:t}))},this.startListeningToRequestCache=()=>{var e;this.isLoading=!0;const t=new oe.CacheObserver(oe.cacheClient,(0,C.requestFindOneQuery)({requestId:this.metadata.id})),r=t.getCurrentResult();this.onRequestCacheUpdate(r),this.cachedRequestItem=null==(e=r.data)?void 0:e.data,this.unsubscribeFromRequestCache=t.subscribe(this.onRequestCacheUpdate)},this.onRequestCacheUpdate=e=>{var t;this.isLoading=!e.data&&!e.error,this.error=e.error;const r=null==(t=e.data)?void 0:t.data;r&&(this.isDirty&&!this.isSaving&&this.cachedRequestItem&&function(e,t,r){for(const r of["name","method","url","queryParams","pathVariables","pathVariableData","auth","headers","headerData","data","dataMode","dataOptions","rawModeData","events","graphqlModeData"])if(e[r]!==t[r])return!0;return!1}(r,this.cachedRequestItem)&&(0,u.runInAction)((()=>{this.isConflicted=!0})),this.isDirty||(this.metadata.collectionId!==r.collection.id&&this.startListeningToCollectionsCache(r.collection.id),(0,u.runInAction)((()=>{this.hydrateStore(r)})),this.setMetadata((0,c.Z)({},this.metadata)),this.cachedRequestItem=r),this.updateInheritAuthParent(r))},this.updateInheritAuthParent=e=>{const t=(e=>{var t,r,s,a,o,n;let i=ne(e.folder);return i||(i=null!=(t=e.collection)&&t.auth?{id:null==(r=e.collection)?void 0:r.id,name:null==(s=e.collection)?void 0:s.name,auth:null==(a=e.collection)?void 0:a.auth,type:"collection"}:{id:null==(o=e.collection)?void 0:o.id,name:null==(n=e.collection)?void 0:n.name,auth:{type:"noauth"},type:"collection"},i)})(e);this.setInheritAuthParent(t)},this.setInheritAuthParent=e=>{this.inheritAuthParent=e},this.startListeningToCollectionsCache=e=>{if(e){var t;const r=new oe.CacheObserver(oe.cacheClient,(0,C.collectionPermissionsQuery)({collectionId:e})),s=r.getCurrentResult();this.onCollectionPermissionsUpdate(s),null==(t=this.unsubscribeFromPermissionsCache)||t.call(this),this.unsubscribeFromPermissionsCache=r.subscribe((e=>{this.onCollectionPermissionsUpdate(e)}))}},this.onCollectionPermissionsUpdate=e=>{const t=e.data;t&&(0,u.runInAction)((()=>{this.permissions=t}))},this.setSending=e=>{this.sending=e},this.onHeadersUpdate=()=>{(0,l.Z)(this,ve)[ve](this.method,this.urlStore.url,this.previewRequestBody)},this.autoTriggerPreviewRequest=()=>{const e=(0,u.autorun)((()=>{(0,l.Z)(this,ve)[ve](this.method,this.urlStore.url,this.previewRequestBody)}));(0,l.Z)(this,ge)[ge].set("preview-request",e)},Object.defineProperty(this,ve,{writable:!0,value:A((async function(e,t,r){a.urlStore.updatePreviewQueryParams({auth:me(a)});const s=a.getAgentOptions(),o=await(async(e,t)=>await(0,h.previewRequest)(e,t))((0,c.Z)({auth:me(a),header:[],method:(0,u.toJS)(e),url:(0,u.toJS)(null!=t?t:"")},r),s);a.headerData.onPreviewHeadersReceived(null==o?void 0:o.header)}),100)}),this.setExampleRequestSent=()=>{this.isExampleRequestSent=!0},this.getRequestBodyFormat=e=>{switch(e){case"raw":return{dataMode:e,dataOptions:{raw:{language:this.rawEditorState.language}},rawModeData:this.rawEditorState.content};case"params":return{dataMode:e,data:this.formDataStore.items};case"urlencoded":return{dataMode:e,data:this.urlEncodedDataStore.items};case"binary":return this.binaryEditor.files&&this.binaryEditor.files.length>0?{dataMode:e,rawModeData:this.binaryEditor.files[0].path}:{dataMode:e,rawModeData:""};case"graphql":return{dataMode:e,graphqlModeData:{query:this.graphqlPayloadStore.query,variables:this.graphqlPayloadStore.variables}};default:return{dataMode:e}}},this.sendRequest=async function({activeEnvironment:e}){X.AnalyticsService.addEventV2({category:"http",action:"send-request",label:"http-workbench",value:1}),(0,u.runInAction)((()=>{a.sending=!0}));const t=await(async({activeEnvironment:e,workspaceId:t,collectionItem:r})=>{const[s,a,o]=await Promise.all([(0,S.getActiveGlobalsSession)(t),(0,S.getActiveEnvironmentSession)(null==e?void 0:e.id),(0,C.getActiveCollectionSession)(r)].map((e=>e&&e.catch((()=>{})))));return{globals:s,environment:a,collection:o}})({activeEnvironment:e,workspaceId:a.metadata.workspaceId,collectionItem:a.collection}).catch((()=>{}));let r=a.getAgentPayload();try{r=await(async(e,t,r,s)=>{var a;const o={collection:{},folder:{},request:{}};if("oauth2"===(null==(a=e.auth)?void 0:a.type)){var n;const t=null==r||null==(n=r.oauth2)||null==(n=n.find((e=>"token_id"===e.key)))?void 0:n.value;if(!t)return e;const a=await(0,ie.getTokenValuesForTokenId)(t).catch((()=>{}));if(!a)return e;const o=[{key:"token_id",value:t}];return null!=s&&s.refreshTokenMessageId&&o.push({key:"message_id",value:null==s?void 0:s.refreshTokenMessageId}),e.auth.oauth2=[...e.auth.oauth2||[],...a.oauth2||[],{key:"id",value:o}],e}try{var i;const r=null==t?void 0:t.type,a=(null==t?void 0:t.id)&&de(null==t?void 0:t.id,s.owner);if("oauth2"===(null==t||null==(i=t.auth)?void 0:i.type)&&r&&a){const n=await(0,ie.getTokenValuesForAuthSession)({model:r,modelId:a}).catch((()=>{})),i=await(0,ie.getTokenIdForAuthSession)({model:r,modelId:a}).catch((()=>{})),l=[{key:"token_id",value:i}];null!=s&&s.refreshTokenMessageId&&l.push({key:"message_id",value:null==s?void 0:s.refreshTokenMessageId}),i&&(null==n?void 0:n.oauth2)&&n.oauth2.push({key:"id",value:l}),n&&(o[r]={[a]:n});const d=((e,t,r,s)=>{var a;if(s&&(0!==Object.keys(e.collection).length||0!==Object.keys(e.folder).length)){var o;if("collection"===(null==s?void 0:s.type)&&"oauth2"===(null==t||null==(a=t.auth)?void 0:a.type)&&Object.keys(e.collection).length>0)return{collection:(0,c.Z)({},t,{auth:(0,c.Z)({},t.auth,{oauth2:[...t.auth.oauth2||[],...(null==(o=e.collection)||null==(o=o[t.id])?void 0:o.oauth2)||[]]})}),folder:r};if("folder"===(null==s?void 0:s.type)&&r&&t&&Object.keys(e.folder).length>0){const a=s.id,o=(e=>{const t="string"==typeof e&&e.split(le);return!t||t.length<6?{id:e}:{owner:t.shift(),id:t.join(le)}})(t.id).owner,n=de(a,o||""),i=ue()(r);return(t=>{for(;"object"==typeof t;){var r;if(t.id===a&&"oauth2"===(null==(r=t.auth)?void 0:r.type)){var s;t.auth={type:"oauth2",oauth2:[...t.auth.oauth2||[],...(null==(s=e.folder)||null==(s=s[n])?void 0:s.oauth2)||[]]};break}t=t.folder}})(i),{collection:t,folder:i}}}})(o,e.collection,e.folder,t);(null==d?void 0:d.collection)&&(e.collection=d.collection),(null==d?void 0:d.folder)&&(e.folder=d.folder)}}catch(t){return e}return e})(r,a.inheritAuthParent,a.requestAuthSessionState,{owner:a.metadata.ownerId||"",refreshTokenMessageId:a.refreshTokenManager.getRefreshTokenMessageId()})}catch(e){}var s,o;a.lastAssertion=null,a.lastException=null,a.lastAssertion=null,a.lastResponseStartData=null,a.removeResponseListeners=(s=r,o=(0,c.Z)({variables:{globals:null==t?void 0:t.globals,environment:null==t?void 0:t.environment,collectionVariables:null==t?void 0:t.collection}},a.getAgentOptions(),{response:e=>{q.pmConsole.logRequest({request:e.request,response:e.response,error:e.error,cursor:e.cursor,history:e.history}),(0,u.runInAction)((()=>{a.sending=!1,a.isSavedRequest||(a.lastResponse=e),a.editorResponseStore.response(e)}))},console:e=>{q.pmConsole.logConsole({level:e.level,messages:e.messages,cloud:!1})},responseStart:e=>{a.removeResponseListeners=null,a.isSavedRequest||(a.lastResponseStartData=e),a.editorResponseStore.responseStart(e)},assertion:e=>{a.isSavedRequest||(a.lastAssertion=e),a.editorResponseStore.assertion(e)},exception:e=>{a.isSavedRequest||(a.lastException=e),a.editorResponseStore.exception(e),q.pmConsole.logException({error:{name:e.error.name||"Error",message:e.error.message||"Unknown error"}})},script:e=>{var r,s;const o=e.event;null!=e&&null!=(r=e.mutations)&&r.collectionVariables&&null!=t&&null!=(s=t.collection)&&s.id&&(e.mutations.collectionVariables.id=t.collection.id),e.error&&(null==o?void 0:o.listen)===I&&a.cancelRequest(),a.editorResponseStore.script(e)}}),(0,p.createHttpHistoryItem)(s).catch((()=>{})),(0,h.sendRequestViaAgent)(s,o))},this.setWorkbenchLayout=e=>{e!==this.workbenchLayout&&(o.jx(e),this.workbenchLayout=e)},this.setMethod=e=>{this.method=e,this.setTrackedState("method",e)},this.setPreRequestScript=e=>{this.preRequestScript=e},this.setRequestAuthState=e=>{this.requestAuthState=e,(0,l.Z)(this,ve)[ve](this.method,this.urlStore.url,this.previewRequestBody),"inherit"===this.requestAuthState.activeAuthType?this.setTrackedState("auth",null):this.setTrackedState("auth",this.requestAuthState.activeAuthType)},this.setRequestAuthSessionState=e=>{this.requestAuthSessionState=e},this.setTests=e=>{this.tests=e},this.setMetadata=e=>{this.metadata=e},this.setRequestBodyState=e=>{var t;this.requestBodyState.activeBodyType=null!=(t=null==e?void 0:e.activeBodyType)?t:"none",this.setTrackedState("dataMode",null==e?void 0:e.activeBodyType)},this.setRawEditorState=e=>{this.rawEditorState=(0,c.Z)({},this.rawEditorState,e),this.setTrackedState("data",e.content),this.setTrackedState("dataOptions",e.language)},this.cancelRequest=()=>{(0,u.runInAction)((()=>{this.sending&&this.removeResponseListeners&&(this.sending=!1,this.removeResponseListeners(),this.removeResponseListeners=null)}))},this.clearResponse=()=>{this.cancelRequest(),this.sending=!1,this.editorResponseStore=new E({workspaceId:this.metadata.workspaceId,requestId:this.metadata.id}),this.lastAssertion=null,this.lastException=null,this.lastResponse=null,this.lastResponseStartData=null},this.generateRequestBody=e=>{switch(e){case"raw":return{dataMode:e,dataOptions:{raw:{language:this.rawEditorState.language}},rawModeData:this.rawEditorState.content};case"params":return{dataMode:e,data:this.formDataStore.items};case"urlencoded":return{dataMode:e,data:this.urlEncodedDataStore.items};case"binary":return this.binaryEditor.files&&this.binaryEditor.files.length>0?{dataMode:e,rawModeData:this.binaryEditor.files[0].path}:{dataMode:e,rawModeData:""};case"graphql":return{dataMode:e,graphqlModeData:{query:this.graphqlPayloadStore.query,variables:this.graphqlPayloadStore.variables}};default:return{dataMode:e}}},this.getCreateRequestPayload=()=>{const e=this.generateRequestBody(this.requestBodyState.activeBodyType);return(0,c.Z)({method:this.method,url:this.urlStore.url,auth:{[this.requestAuthState.activeAuthType]:this.requestAuthState[this.requestAuthState.activeAuthType],type:this.requestAuthState.activeAuthType},pathVariableData:this.urlStore.pathVariables.map((e=>(0,c.Z)({},e,{description:e.description||""}))),queryParams:this.urlStore.queryParams.map(((e,t)=>(0,c.Z)({},e,{sortOrder:t}))),events:[...this.preRequestStore.getPayload(),...this.testScriptStore.getPayload()],headerData:this.headerData.userHeaders,responses:[],responses_order:[]},e)},this.setIsSaving=e=>{this.isSaving=e},this.resetAllTrackedState=()=>{(0,u.runInAction)((()=>{this.trackedState={},this.urlStore.trackedState={},this.headerData.trackedState={},this.preRequestStore.trackedState={},this.testScriptStore.trackedState={},this.formDataStore.trackedState={},this.urlEncodedDataStore.trackedState={},this.binaryEditor.trackedState={},this.graphqlPayloadStore.trackedState={},this.isConflicted=!1}))},this.revertTrackedStateChange=(e,t)=>{(0,u.runInAction)((()=>{this.trackedState=e.requestStore,this.urlStore.trackedState=e.urlStore,this.headerData.trackedState=e.headerData,this.preRequestStore.trackedState=e.preRequestStore,this.testScriptStore.trackedState=e.testScriptStore,this.formDataStore.trackedState=e.formDataStore,this.urlEncodedDataStore.trackedState=e.urlEncodedDataStore,this.binaryEditor.trackedState=e.binaryEditor,this.graphqlPayloadStore.trackedState=e.graphqlPayloadStore,this.isConflicted=t}))},this.getUpdateRequestPayload=()=>{const e=this.getRequestBodyFormat(this.requestBodyState.activeBodyType),t=me(this);return(0,c.Z)({id:this.metadata.id,name:this.trackedState.name,method:this.trackedState.method||this.method,url:this.urlStore.trackedState.url,auth:t,pathVariableData:this.urlStore.trackedState.pathVariableData,queryParams:this.urlStore.trackedState.queryParams,events:[...this.preRequestStore.trackedState.events||this.preRequestStore.getPayload(),...this.testScriptStore.trackedState.events||this.testScriptStore.getPayload()],headers:this.headerData.trackedState.headers,headerData:this.headerData.trackedState.headerData},e)},this.getLastResponseDetails=()=>({assertion:this.lastAssertion,exception:this.lastException,responseData:this.lastResponse,responseStartData:this.lastResponseStartData}),(0,u.makeObservable)(this,{isLoading:!0,isSaving:!0,isConflicted:!0,error:!0,workbenchLayout:!0,setWorkbenchLayout:u.action,breadcrumbs:u.computed,headerData:!0,sending:!0,setSending:u.action,metadata:!0,setMetadata:u.action,method:!0,setMethod:u.action,preRequestScript:!0,setPreRequestScript:u.action,rawEditorState:!0,setRawEditorState:u.action,requestAuthState:!0,requestAuthSessionState:!0,setRequestAuthState:u.action,setRequestAuthSessionState:u.action,requestBodyState:!0,graphqlPayloadStore:!0,setRequestBodyState:u.action,tests:!0,setTests:u.action,urlEncodedDataStore:!0,editorResponseStore:!0,urlStore:!0,previewRequestBody:u.computed,clearResponse:u.action,isDirty:u.computed,trackedState:!0,setTrackedState:u.action,onRequestCacheUpdate:u.action,setIsSaving:u.action,permissions:!0,inheritAuthParent:!0,setInheritAuthParent:u.action,isExampleRequestSent:!0,setExampleRequestSent:u.action,activeRequestEditorTabIndex:!0,setActiveRequestEditorTabIndex:u.action,autoRunRequest:!0}),this.isSavedRequest=r,this.workbenchLayout=t,this.editorResponseStore=new E({workspaceId:null!=(s=e.workspace)?s:"",requestId:e.id}),this.refreshTokenManager=new pe,this.metadata.id=e.id,this.exampleMeta=e.exampleMeta,this.autoRunRequest=e.autoRunRequest,e.workspace&&(this.metadata.workspaceId=e.workspace),this.metadata.id&&(0,ie.getAuthSession)({model:"request",modelId:this.metadata.id}).then((e=>{e&&this.setRequestAuthSessionState(e)})).catch((()=>{})),r)return this.startListeningToRequestCache(),void(e.responseDetails&&(e.responseDetails.responseStartData&&this.editorResponseStore.responseStart(e.responseDetails.responseStartData),e.responseDetails.assertion&&this.editorResponseStore.assertion(e.responseDetails.assertion),e.responseDetails.exception&&this.editorResponseStore.exception(e.responseDetails.exception),e.responseDetails.responseData&&this.editorResponseStore.response(e.responseDetails.responseData)));this.hydrateStore(e,t)}get breadcrumbs(){var e,t,r;return((e,t,r,s,a,o)=>{let n,i=[],l={};return n=t||r||ae,l={id:e,name:n,entityType:"request",workspaceId:s},i=(0,C.getBreadcrumbItems)(s,a,o),i.push(l),i})(null==(e=this.metadata)?void 0:e.id,null==(t=this.metadata)?void 0:t.name,this.urlStore.url,null==(r=this.metadata)?void 0:r.workspaceId,this.collection,this.folder)}get name(){return this.metadata.name?this.metadata.name:this.urlStore.url?this.urlStore.url:ae}getAgentPayload(){var e,t;const r=this.requestBodyState.activeBodyType,s=this.headerData.headers.filter((e=>!!e.key&&!e.system)),a=this.getRequestBodyFormat(r),o=me(this),n=s,i=s.map((e=>`${e.key}: ${e.value}`)).join("\n");return(0,c.Z)({id:this.metadata.id,name:this.metadata.name,workspace:this.metadata.workspaceId,team:this.metadata.teamId,owner:this.metadata.ownerId,method:this.method,url:this.urlStore.url,preRequestScript:null!=(e=this.preRequestStore.content)?e:this.preRequestScript,tests:null!=(t=this.testScriptStore.content)?t:this.tests,queryParams:this.urlStore.queryParameters,pathVariableData:this.urlStore.pathVariables,headerData:n,headers:i,auth:o,events:[...this.preRequestStore.getPayload(),...this.testScriptStore.getPayload()]},a,{collection:this.collection,folder:this.folder})}getAgentOptions(){return{implicitCacheControl:!0,implicitTraceHeader:!0,protocolProfileBehavior:{disabledSystemHeaders:this.headerData.disabledSystemHeaders}}}destroy(){var e,t,r,s;for(const[,e]of(0,l.Z)(this,ge)[ge])e();this.headerData.destroy(),this.urlStore.destroy(),null==(e=this.unsubscribeFromRequestCache)||e.call(this),null==(t=this.unsubscribeFromPermissionsCache)||t.call(this),null==(r=(s=this.refreshTokenManager).destroy)||r.call(s),this.lastAssertion=null,this.lastException=null,this.lastResponse=null}}var xe=r(47069),ye=r(52322);const fe=a().createContext({}),Se=({children:e})=>{if(!(0,n.useInRouterContext)())throw new Error("RequestEditorProvider must be used within a Router");const t=(()=>{const e=(0,n.useLoaderData)();return e&&e.workbenchLayout&&["vertical","horizontal"].includes(e.workbenchLayout)?e.workbenchLayout:xe.N})(),r=(()=>{const e=(0,n.useLoaderData)(),{workspaceId:t}=(0,n.useParams)(),r=(0,n.useLocation)(),s=function(e){if(e)return"string"==typeof e?JSON.parse(e):e}(r.state);var a;if(null!=e&&e.requestData&&"object"==typeof e.requestData&&Object.keys(e.requestData).length>0)return null!=(a=e.requestData)&&a.data?(e.requestData.data.workspace=t,s&&(e.requestData.data.responseDetails=s.response),e.requestData.data):e.requestData;const o=new URLSearchParams(r.search);return{id:o.get("id")||"",method:o.get("method")||i.gg,workspace:t,responseDetails:null==s?void 0:s.response}})(),{requestId:a,workspaceId:l,historyId:d}=(0,n.useParams)();a&&(r.id=a,r.workspace=l);const c=(0,s.useMemo)((()=>new be(r,t,!!a)),[a,d]);return(0,s.useEffect)((()=>{const e=o.Pn((e=>{c.setWorkbenchLayout(e)}));return()=>{c.destroy(),e()}}),[]),(0,ye.jsx)(fe.Provider,{value:c,children:e})}},50429:(e,t,r)=>{"use strict";r.d(t,{B:()=>a,a:()=>o});const s=e=>e.charAt(0).toUpperCase()+e.slice(1),a=e=>"string"==typeof e?e:"object"==typeof e?JSON.stringify(e):String(e),o=(e,t)=>e.map((e=>{let r={environment:"a",collection:"b",global:"c"}[e.scope]||"y";return"dynamic"===e.type?(r="z",{label:e.key,detail:`Details: ${a(e.value)}`,documentation:`Scope: ${s(e.scope)}\n\n`,insertText:e.key,range:t,sortText:`${r}-${e.key}`}):{label:e.key,detail:`Current: ${e.sessionValue}`,documentation:`Initial: ${a(e.value)} \nScope: ${s(e.scope)}\n\n`,insertText:e.key,range:t,sortText:`${r}-${e.key}`}}))},64019:(e,t,r)=>{"use strict";r.d(t,{n:()=>o});var s=r(96529);const a=new Set([s.RM,s.m3,s.ob,s.NF]),o=e=>!!e&&a.has(e)},84492:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(7560),a=r(69730),o=r.n(a);const n=(0,s.Z)({},o(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback"})},69730:()=>{}}]);
//# sourceMappingURL=7805.b9a6145940445b80.js.map