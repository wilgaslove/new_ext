(self.webpackChunkworkbench=self.webpackChunkworkbench||[]).push([[8670,9951],{7560:(t,e,n)=>{"use strict";function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},o.apply(this,arguments)}n.d(e,{Z:()=>o})},4492:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(7560),s=n(9730),r=n.n(s);const a=(0,o.Z)({},r(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback"})},9951:(t,e,n)=>{"use strict";n.r(e),n.d(e,{initSentry:()=>i,sentryRouter:()=>p});var o=n(7560),s=n(4492),r=n(6230);function a(t){var e;if(null!=t&&null!=(e=t.exception)&&e.values)for(const e of t.exception.values){var n;if(null!=e&&null!=(n=e.stacktrace)&&n.frames)for(const t of e.stacktrace.frames)null!=t&&t.filename&&t.filename.replace(/\\/g,"/").includes("/dist/")&&(t.filename=["/",t.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return t}function i(t){s.Z.SENTRY_DSN&&r.init((0,o.Z)({},t,{dsn:s.Z.SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2023-09-12.06-24",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:a}))}var c=n(540),l=n(607);const p=t=>{if(s.Z.SENTRY_DSN){var e;const n=null==(e=r.getCurrentHub())?void 0:e.getClient();if(null!=n&&n.addIntegration)return n.addIntegration(new r.BrowserTracing({routingInstrumentation:r.reactRouterV6Instrumentation(c.useEffect,l.useLocation,l.useNavigationType,l.createRoutesFromChildren,l.matchRoutes)})),r.wrapCreateBrowserRouter(t)}return t}},9730:()=>{}}]);
//# sourceMappingURL=8670.179d543389749977.js.map