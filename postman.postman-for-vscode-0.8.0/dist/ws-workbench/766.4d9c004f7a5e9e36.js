(self.webpackChunkws_workbench=self.webpackChunkws_workbench||[]).push([[766,4492,7560,7397,6371],{7560:(s,e,t)=>{"use strict";function o(){return o=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[o]=t[o])}return s},o.apply(this,arguments)}t.d(e,{Z:()=>o})},98283:(s,e,t)=>{"use strict";function o(s,e){if(null==s)return{};var t,o,r={},a=Object.keys(s);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=s[t]);return r}t.d(e,{Z:()=>o})},84492:(s,e,t)=>{"use strict";t.d(e,{Z:()=>n});var o=t(7560),r=t(69730),a=t.n(r);const n=(0,o.Z)({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback"})},60766:(s,e,t)=>{"use strict";t.r(e),t.d(e,{subscribeToWorkspaceEvents:()=>k,useActiveWorkspaceId:()=>r,useActiveWorkspaceInfo:()=>b,useNavigateToWorkspace:()=>h,useWorkspace:()=>l});var o=t(60607);const r=()=>{const{workspaceId:s}=(0,o.useParams)();return s?(s=>(null==s?void 0:s.split("~").pop())||"")(s):""};var a=t(7560),n=t(98283),c=t(44958),p=t(98079),u=t(84492);const i=["data"],l=s=>{const e=(0,c.useDataFetch)(((s,e)=>({queryKey:["workspace",s],queryFn:()=>(async(s,e)=>await p.postmanGateway.post({url:`${u.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${s}`,method:"GET",signal:e,service:"workspaces"}))(s),enabled:!!s,useErrorBoundary:void 0}))(s)),{data:t}=e,o=(0,n.Z)(e,i);return(0,a.Z)({data:null==t?void 0:t.data},o)},b=()=>{const s=r();return l(s)};var d=t(40540),w=t(26081),v=t(54302);const h=()=>{const s=(0,w.useNavigate)();return(0,d.useCallback)((e=>{(0,v.onWorkspaceChange)(e),e&&s("/workspace/"+e)}),[s])},k=s=>{const e=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:e.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${s}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1"],responseFilter:s=>{var e;return null==s||null==(e=s.body)||null==(e=e.data)?void 0:e.id},broadcastFilter:s=>{var e;return null==s||null==(e=s.meta)||null==(e=e.timeline)?void 0:e.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${s}/subscribe`,service:"workspaces"}}),abortController:e}}},69730:()=>{}}]);
//# sourceMappingURL=766.4d9c004f7a5e9e36.js.map