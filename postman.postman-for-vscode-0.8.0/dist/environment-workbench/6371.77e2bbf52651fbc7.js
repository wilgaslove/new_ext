(self.webpackChunkenvironment_workbench=self.webpackChunkenvironment_workbench||[]).push([[6371,9315,766],{98283:(e,s,t)=>{"use strict";function o(e,s){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],s.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(s,{Z:()=>o})},84492:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var o=t(69730),r=t.n(o);const a=Object.assign({},r(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback"})},60766:(e,s,t)=>{"use strict";t.r(s),t.d(s,{subscribeToWorkspaceEvents:()=>k,useActiveWorkspaceId:()=>r,useActiveWorkspaceInfo:()=>l,useNavigateToWorkspace:()=>v,useWorkspace:()=>i});var o=t(60607);const r=()=>{const{workspaceId:e}=(0,o.useParams)();return e?(e=>(null==e?void 0:e.split("~").pop())||"")(e):""};var a=t(98283),n=t(44958),c=t(98079),p=t(84492);const u=["data"],i=e=>{const s=(0,n.useDataFetch)(((e,s)=>({queryKey:["workspace",e],queryFn:()=>(async(e,s)=>await c.postmanGateway.post({url:`${p.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${e}`,method:"GET",signal:s,service:"workspaces"}))(e),enabled:!!e,useErrorBoundary:void 0}))(e)),{data:t}=s,o=(0,a.Z)(s,u);return Object.assign({data:null==t?void 0:t.data},o)},l=()=>{const e=r();return i(e)};var b=t(40540),d=t(26081),w=t(54302);const v=()=>{const e=(0,d.useNavigate)();return(0,b.useCallback)((s=>{(0,w.onWorkspaceChange)(s),s&&e("/workspace/"+s)}),[e])},k=e=>{const s=new AbortController;return{asyncObserver:c.postmanWebsocketGateway.subscribe({signal:s.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1"],responseFilter:e=>{var s;return null==e||null==(s=e.body)||null==(s=s.data)?void 0:s.id},broadcastFilter:e=>{var s;return null==e||null==(s=e.meta)||null==(s=s.timeline)?void 0:s.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"}}),abortController:s}}},69730:()=>{}}]);
//# sourceMappingURL=6371.77e2bbf52651fbc7.js.map