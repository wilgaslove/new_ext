(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[8670,7560,4492,9951],{7560:(t,e,n)=>{"use strict";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},s.apply(this,arguments)}n.d(e,{Z:()=>s})},4492:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var s=n(7560),o=n(9730),r=n.n(o);const a=(0,s.Z)({},r(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback"})},9951:(t,e,n)=>{"use strict";n.r(e),n.d(e,{initSentry:()=>i,sentryRouter:()=>p});var s=n(7560),o=n(4492),r=n(6230);function a(t){var e;if(null!=t&&null!=(e=t.exception)&&e.values)for(const e of t.exception.values){var n;if(null!=e&&null!=(n=e.stacktrace)&&n.frames)for(const t of e.stacktrace.frames)null!=t&&t.filename&&t.filename.replace(/\\/g,"/").includes("/dist/")&&(t.filename=["/",t.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return t}function i(t){o.Z.SENTRY_DSN&&r.init((0,s.Z)({},t,{dsn:o.Z.SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2023-09-12.06-24",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:a}))}var c=n(540),l=n(607);const p=t=>{if(o.Z.SENTRY_DSN){var e;const n=null==(e=r.getCurrentHub())?void 0:e.getClient();if(null!=n&&n.addIntegration)return n.addIntegration(new r.BrowserTracing({routingInstrumentation:r.reactRouterV6Instrumentation(c.useEffect,l.useLocation,l.useNavigationType,l.createRoutesFromChildren,l.matchRoutes)})),r.wrapCreateBrowserRouter(t)}return t}},9730:()=>{}}]);
//# sourceMappingURL=8670.582a136982a237cd.js.map