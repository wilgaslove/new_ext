(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[766,4489,7560,4492,7397,2389,25,6371],{7560:(t,e,s)=>{"use strict";function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o])}return t},o.apply(this,arguments)}s.d(e,{Z:()=>o})},98283:(t,e,s)=>{"use strict";function o(t,e){if(null==t)return{};var s,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)s=a[o],e.indexOf(s)>=0||(r[s]=t[s]);return r}s.d(e,{Z:()=>o})},84492:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var o=s(7560),r=s(69730),a=s.n(r);const n=(0,o.Z)({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback"})},60766:(t,e,s)=>{"use strict";s.r(e),s.d(e,{subscribeToWorkspaceEvents:()=>k,useActiveWorkspaceId:()=>r,useActiveWorkspaceInfo:()=>b,useNavigateToWorkspace:()=>v,useWorkspace:()=>l});var o=s(60607);const r=()=>{const{workspaceId:t}=(0,o.useParams)();return t?(t=>(null==t?void 0:t.split("~").pop())||"")(t):""};var a=s(7560),n=s(98283),c=s(44958),p=s(98079),u=s(84492);const i=["data"],l=t=>{const e=(0,c.useDataFetch)(((t,e)=>({queryKey:["workspace",t],queryFn:()=>(async(t,e)=>await p.postmanGateway.post({url:`${u.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${t}`,method:"GET",signal:e,service:"workspaces"}))(t),enabled:!!t,useErrorBoundary:void 0}))(t)),{data:s}=e,o=(0,n.Z)(e,i);return(0,a.Z)({data:null==s?void 0:s.data},o)},b=()=>{const t=r();return l(t)};var d=s(40540),w=s(26081),h=s(54302);const v=()=>{const t=(0,w.useNavigate)();return(0,d.useCallback)((e=>{(0,h.onWorkspaceChange)(e),e&&t("/workspace/"+e)}),[t])},k=t=>{const e=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:e.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${t}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1"],responseFilter:t=>{var e;return null==t||null==(e=t.body)||null==(e=e.data)?void 0:e.id},broadcastFilter:t=>{var e;return null==t||null==(e=t.meta)||null==(e=e.timeline)?void 0:e.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${t}/subscribe`,service:"workspaces"}}),abortController:e}}},69730:()=>{}}]);
//# sourceMappingURL=766.45a4069529249a3f.js.map