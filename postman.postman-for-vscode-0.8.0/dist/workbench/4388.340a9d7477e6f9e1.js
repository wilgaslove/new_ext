"use strict";(self.webpackChunkworkbench=self.webpackChunkworkbench||[]).push([[4388],{7560:(e,r,t)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:()=>n})},4623:(e,r,t)=>{t.r(r);var n=t(540),o=t(1730),a=t(607),s=t(4836),i=t(5892),c=t.n(i),l=t(8560),d=t(4025),p=t(9972);const u=new class{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:r=e.workspaceId,subscriptionHandler:t}){if(""===r)return;if(e.workspaceId!==r&&e.changeWorkspace(r),e.observer||e.asyncObserver)return;const{asyncObserver:n,abortController:o}=(0,p.subscribeToWorkspaceEvents)(r);e.abortController=o,e.asyncObserver=n,e.observer=await n,e.abortController=null,e.observer.subscribe({next:e=>{t(e,{workspaceId:r})},complete:()=>{e.unsubscribe()},error:async function(n){e.cleanup(),await e.subscribe({subscriptionHandler:t,workspaceId:r})}})},this.unsubscribe=()=>{var e,r;null==(e=this.abortController)||e.abort(),null==(r=this.observer)||r.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}};var h=t(1219),m=function(e){return e.GLOBALS="globals",e.WORKSPACE="workspace",e}(m||{});const b=(e,{workspaceId:r})=>{var t,n;const o=null==e||null==(t=e.meta)?void 0:t.model,a=e.data,s=null==(n=e.meta)?void 0:n.action;o!==m.GLOBALS&&o!==m.WORKSPACE||(0,h.environmentsSubscriptionHandler)(e,{workspaceId:r}),"update_elements"===s&&function(e,r){const t=(0,d.getTabManager)();for(const n of e){const e=n.op,o=n.value,a=n.path;"remove"===e&&(a.includes("/elements/collections")?t.closeTabByRoute(`/workspace/${r}/collection/${o}`):a.includes("/elements/environments")&&t.closeTabByRoute(`/workspace/${r}/environment/${o}`))}}(a,r)};var w=t(2322);let y;const k=c()(l.Z)(y||(y=(e=>e)`
  height: 100vh;
  width: 100vw;
  min-width: 600px;
  max-width: 100%;
  background-color: var(--background-color-primary);
  color: var(--content-color-primary);
`)),f=()=>{const e=(0,n.useRef)(null);return(()=>{const e=(0,p.useActiveWorkspaceId)();(0,n.useEffect)((()=>{if(e)return u.subscribe({workspaceId:e,subscriptionHandler:b}),()=>{u.unsubscribe()}}),[e])})(),(0,d.usePreventContextMenu)({element:e.current}),(0,w.jsx)(k,{ref:e,direction:"column",children:(0,w.jsx)(a.Outlet,{})})};var v=t(5736);let I;const g=c().div(I||(I=(e=>e)`
  position: absolute;
  top: 50%;
  left: 50%;
`)),E=()=>(0,w.jsx)(g,{children:(0,w.jsx)(v.Z,{})});var x=t(923);const j=({currentUrl:e,nextUrl:r})=>e.pathname!==r.pathname,z=[{path:"/workspace/:workspaceId/request/:requestId",lazy:()=>Promise.all([t.e(1577),t.e(2674)]).then(t.bind(t,2674)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"http-workbench",errorElementId:"saved-request-route"}),shouldRevalidate:j},{path:"/workspace/:workspaceId/request/create",lazy:()=>Promise.all([t.e(1577),t.e(1035)]).then(t.bind(t,1035)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"http-workbench",errorElementId:"create-request-route"}),shouldRevalidate:j},{path:"/workspace/:workspaceId/history/:historyId",lazy:()=>Promise.all([t.e(1577),t.e(1161)]).then(t.bind(t,5659)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"http-workbench",errorElementId:"history-request"}),shouldRevalidate:j},{path:"/workspace/:workspaceId/grpc-request/create",lazy:()=>Promise.all([t.e(7573),t.e(9424)]).then(t.bind(t,9424)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"grpc-workbench",errorElementId:"create-request-route"})},{path:"/workspace/:workspaceId/grpc-request/history/:historyId",lazy:()=>Promise.all([t.e(7573),t.e(810)]).then(t.bind(t,810)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"grpc-workbench",errorElementId:"history-request"})},{path:"/workspace/:workspaceId/ws-raw-request/create",lazy:()=>Promise.all([t.e(4350),t.e(2212)]).then(t.bind(t,2212)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"ws-workbench",errorElementId:"create-ws-raw-request-route"})},{path:"/workspace/:workspaceId/ws-raw-request/history/:historyId",lazy:()=>Promise.all([t.e(4350),t.e(8931)]).then(t.bind(t,8931)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"ws-workbench",errorElementId:"ws-raw-history-request"})},{path:"/workspace/:workspaceId/ws-socketio-request/create",lazy:()=>Promise.all([t.e(4350),t.e(2212)]).then(t.bind(t,2212)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"ws-workbench",errorElementId:"create-ws-socketio-request-route"})},{path:"/workspace/:workspaceId/environment/:environmentId",lazy:()=>t.e(2587).then(t.bind(t,2587)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"environment-workbench-route",errorElementId:"environment-workbench"})},{path:"/workspace/:workspaceId/globals",lazy:()=>t.e(3813).then(t.bind(t,3813)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"globals-workbench",errorElementId:"globals-workbench-route"})},{path:"/workspace/:workspaceId/example/:exampleId",lazy:()=>t.e(5731).then(t.bind(t,5731)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"http-response-workbench",errorElementId:"http-response-workbench-route"}),shouldRevalidate:({currentUrl:e,nextUrl:r})=>e.pathname!==r.pathname},{path:"/workspace/:workspaceId/folder/:folderId",lazy:()=>t.e(3288).then(t.bind(t,3288)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"folder-workbench-route",errorElementId:"folder-workbench"})},{path:"/workspace/:workspaceId/collection/:collectionId",lazy:()=>t.e(9717).then(t.bind(t,9717)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"collection-workbench-route",errorElementId:"collection-workbench",title:"Unable to fetch collection",description:"An error occurred while fetching the collection."})},{path:"/workspace/:workspaceId/openManageTokensTab",lazy:()=>t.e(9503).then(t.bind(t,9503)),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"oauth2-manage-tokens-workbench-route",errorElementId:"oauth2-manage-tokens-workbench"})}];(0,s.initSentry)();let S="/";try{var R;S=JSON.parse(null==(R=window)?void 0:R.NAVIGATION_CONTEXT).to}catch(e){}const N=[{path:"/",element:(0,w.jsx)(f,{}),errorElement:(0,w.jsx)(x.RouteErrorBoundary,{appId:"workbench",errorElementId:"workbench-route"}),children:z}],C=(0,s.sentryRouter)(a.createMemoryRouter)(N,{initialEntries:[S],initialIndex:0});function B(){return(0,w.jsx)(a.RouterProvider,{router:C,fallbackElement:(0,w.jsx)(E,{})})}var O=t(4958),P=t(5837);(0,O.setupCacheBroadcasts)({appId:"workbench"}),(0,P.initializeAnalytics)(),t(7567);const q=document.querySelector("#workbench_root");o.render((0,w.jsx)(n.StrictMode,{children:(0,w.jsx)(x.CustomErrorBoundary,{appId:"workbench",errorElementId:"global-error-boundary",children:(0,w.jsx)(O.DataFetchCacheProvider,{children:(0,w.jsx)(d.ThemeContextProvider,{children:(0,w.jsx)(B,{})})})})}),q)},5736:(e,r,t)=>{t.d(r,{Z:()=>v});var n=t(540),o=t.n(n),a=t(2229),s=t.n(a),i=t(5892),c=t.n(i),l=t(9460),d=t(8560),p=(0,i.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),u=c().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["text-size-xs"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),p),h=c()(l.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(e){return e.theme["spacing-s"]}));function m(e){var r=e.description,t=e.className,n=e.type,a=e["data-testid"],s="bright"===n?"content-color-constant":"content-color-secondary";return o().createElement(d.Z,{justifyContent:"flex-start",alignItems:"center",className:t,type:n},o().createElement(u,{"data-testid":a},o().createElement("div",{className:"rect-one"}),o().createElement("div",{className:"rect-two"}),o().createElement("div",{className:"rect-three"})),r&&o().createElement(h,{color:s},r))}m.defaultProps={description:"",className:"","data-testid":"aether-spinner"},m.propTypes={description:s().string,className:s().string,type:s().oneOf(["default","bright"]).isRequired,"data-testid":s().string};var b=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(e){return"bright"===e.type?e.theme["content-color-constant"]:e.theme["content-color-tertiary"]})),w=c()(l.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(e){return e.theme["text-size-l"]})),y=(0,i.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),k=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),y);function f(e){var r=e.className,t=e.description,n=e.type,a=e["data-testid"],s="bright"===n?"content-color-constant":"content-color-secondary";return o().createElement(b,{className:r,type:n},o().createElement(k,{"data-testid":a},o().createElement("div",{className:"rect-one"}),o().createElement("div",{className:"rect-two"}),o().createElement("div",{className:"rect-three"})),o().createElement(w,{color:s},t))}function v(e){var r=e.size,t=e.className,n=e.description,a=e.type,s=e["data-testid"];return"small"===r?o().createElement(m,{type:a,className:t,description:n,"data-testid":s}):"large"===r?o().createElement(f,{type:a,description:n||"Loading",className:t,"data-aether-id":"aether-spinner","data-testid":s}):null}f.defaultProps={className:"",description:"","data-testid":"aether-spinner"},f.propTypes={className:s().string,description:s().string,type:s().oneOf(["default","bright"]).isRequired,"data-testid":s().string},v.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},v.propTypes={size:s().oneOf(["small","large"]),className:s().string,type:s().oneOf(["default","bright"]),description:function(e){var r=e.description;return"string"!=typeof r?new Error("Spinner: description prop should have a string value"):r.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":s().string}},7567:(e,r,t)=>{t.r(r)}}]);
//# sourceMappingURL=4388.340a9d7477e6f9e1.js.map