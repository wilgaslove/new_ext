(self.webpackChunkworkbench=self.webpackChunkworkbench||[]).push([[766,9315,6371],{7560:(e,s,t)=>{"use strict";function o(){return o=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)}t.d(s,{Z:()=>o})},8283:(e,s,t)=>{"use strict";function o(e,s){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],s.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(s,{Z:()=>o})},4492:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var o=t(7560),r=t(9730),a=t.n(r);const n=(0,o.Z)({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback"})},766:(e,s,t)=>{"use strict";t.r(s),t.d(s,{subscribeToWorkspaceEvents:()=>k,useActiveWorkspaceId:()=>r,useActiveWorkspaceInfo:()=>b,useNavigateToWorkspace:()=>h,useWorkspace:()=>l});var o=t(607);const r=()=>{const{workspaceId:e}=(0,o.useParams)();return e?(e=>(null==e?void 0:e.split("~").pop())||"")(e):""};var a=t(7560),n=t(8283),c=t(4958),p=t(8079),u=t(4492);const i=["data"],l=e=>{const s=(0,c.useDataFetch)(((e,s)=>({queryKey:["workspace",e],queryFn:()=>(async(e,s)=>await p.postmanGateway.post({url:`${u.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${e}`,method:"GET",signal:s,service:"workspaces"}))(e),enabled:!!e,useErrorBoundary:void 0}))(e)),{data:t}=s,o=(0,n.Z)(s,i);return(0,a.Z)({data:null==t?void 0:t.data},o)},b=()=>{const e=r();return l(e)};var d=t(540),w=t(6081),v=t(4302);const h=()=>{const e=(0,w.useNavigate)();return(0,d.useCallback)((s=>{(0,v.onWorkspaceChange)(s),s&&e("/workspace/"+s)}),[e])},k=e=>{const s=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:s.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1"],responseFilter:e=>{var s;return null==e||null==(s=e.body)||null==(s=s.data)?void 0:s.id},broadcastFilter:e=>{var s;return null==e||null==(s=e.meta)||null==(s=s.timeline)?void 0:s.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"}}),abortController:s}}},9730:()=>{}}]);
//# sourceMappingURL=766.98e8975f0dcd22ed.js.map