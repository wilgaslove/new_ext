(self.webpackChunkenvironment_sidebar=self.webpackChunkenvironment_sidebar||[]).push([[6371],{4492:(s,e,t)=>{"use strict";t.d(e,{Z:()=>r});var o=t(9730),a=t.n(o);const r=Object.assign({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback"})},766:(s,e,t)=>{"use strict";t.r(e),t.d(e,{subscribeToWorkspaceEvents:()=>m,useActiveWorkspaceId:()=>a,useActiveWorkspaceInfo:()=>l,useNavigateToWorkspace:()=>w,useWorkspace:()=>u});var o=t(607);const a=()=>{const{workspaceId:s}=(0,o.useParams)();return s?(s=>(null==s?void 0:s.split("~").pop())||"")(s):""};var r=t(8283),n=t(4958),c=t(8079),p=t(4492);const i=["data"],u=s=>{const e=(0,n.useDataFetch)(((s,e)=>({queryKey:["workspace",s],queryFn:()=>(async(s,e)=>await c.postmanGateway.post({url:`${p.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${s}`,method:"GET",signal:e,service:"workspaces"}))(s),enabled:!!s,useErrorBoundary:void 0}))(s)),{data:t}=e,o=(0,r.Z)(e,i);return Object.assign({data:null==t?void 0:t.data},o)},l=()=>{const s=a();return u(s)};var b=t(540),d=t(6081),v=t(4302);const w=()=>{const s=(0,d.useNavigate)();return(0,b.useCallback)((e=>{(0,v.onWorkspaceChange)(e),e&&s("/workspace/"+e)}),[s])},m=s=>{const e=new AbortController;return{asyncObserver:c.postmanWebsocketGateway.subscribe({signal:e.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${s}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1"],responseFilter:s=>{var e;return null==s||null==(e=s.body)||null==(e=e.data)?void 0:e.id},broadcastFilter:s=>{var e;return null==s||null==(e=s.meta)||null==(e=e.timeline)?void 0:e.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${s}/subscribe`,service:"workspaces"}}),abortController:e}}},9730:()=>{}}]);
//# sourceMappingURL=6371.121e99266a328a4a.js.map