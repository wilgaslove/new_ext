/*! For license information please see 13.4a351f67db71705f.js.LICENSE.txt */
"use strict";(self.webpackChunkcontext_bar=self.webpackChunkcontext_bar||[]).push([[13,685],{7560:(e,t,r)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},a.apply(this,arguments)}r.d(t,{Z:()=>a})},8283:(e,t,r)=>{function a(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}r.d(t,{Z:()=>a})},8013:(e,t,r)=>{r.r(t),r.d(t,{CacheObserver:()=>a.QueryObserver,DataFetchCacheProvider:()=>o,MultiCacheObserver:()=>a.QueriesObserver,cacheClient:()=>s,invalidateCache:()=>v,setupCacheBroadcasts:()=>d,updateCache:()=>h,useCacheClient:()=>f,useDataFetch:()=>a.useQuery,useInfiniteDataFetch:()=>a.useInfiniteQuery,useMutation:()=>a.useMutation});var a=r(4527);const s=new a.QueryClient({defaultOptions:{queries:{staleTime:Number.POSITIVE_INFINITY,useErrorBoundary:!0,retry:!1,refetchOnWindowFocus:!1}}});r(540);var n=r(2600),u=r(2322);const o=({children:e})=>(0,u.jsxs)(a.QueryClientProvider,{client:s,children:[e,(0,u.jsx)(n.ReactQueryDevtools,{initialIsOpen:!1})]}),c="SYNC_CLIENT_CACHE";var i=r(7560),y=r(8283),l=r(4302);const p=["type"];const d=({appId:e,broadcastChannel:t=c})=>{!function({broadcastChannel:e=c}){let t=!1;const r=(({broadcastChannel:e})=>({postMessage:t=>{const{type:r}=t,a=(0,y.Z)(t,p);l.VSCodeCommunicationsService.postMessageToExtension({type:e,payload:(0,i.Z)({eventType:r},a)})},subscribe:(e=c,t)=>{l.VSCodeCommunicationsService.subscribe(e,t)}}))({broadcastChannel:e});r.subscribe(e,(e=>{null!=e&&e.eventType&&(t=!0,(()=>{switch(e.eventType){case"query-client-updated":return(({queryHash:e,queryKey:t,state:r})=>{const a=s.getQueryCache(),n=a.get(e);n?n.setState(r):a.build(s,{queryKey:t,queryHash:e},r)})(e);case"query-client-removed":return(({queryHash:e})=>{const t=s.getQueryCache(),r=t.get(e);r&&t.remove(r)})(e);case"query-cache-invalidated":(({filters:e,options:t={}})=>{s.invalidateQueries(e,t)})(e)}})(),t=!1)})),s.getQueryCache().subscribe((e=>{if(t)return;const{query:{queryHash:a,queryKey:s,state:n},type:u,action:o}=e;"updated"===u&&"success"===o.type&&r.postMessage({type:"query-client-updated",queryHash:a,queryKey:s,state:n}),"removed"===u&&r.postMessage({type:"query-client-removed",queryHash:a,queryKey:s,state:n})}))}({appId:e,broadcastChannel:t})},h=({key:e,updater:t})=>{s.setQueryData(e,t)},v=e=>{s.invalidateQueries({queryKey:e,exact:!0})},f=()=>{var e;return null!=(e=(0,a.useQueryClient)())?e:s}},1837:(e,t,r)=>{var a=r(540),s=60103;if("function"==typeof Symbol&&Symbol.for){var n=Symbol.for;s=n("react.element"),n("react.fragment")}var u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var a,n={},i=null,y=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(y=t.ref),t)o.call(t,a)&&!c.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:s,type:e,key:i,ref:y,props:n,_owner:u.current}}t.jsx=i,t.jsxs=i},2322:(e,t,r)=>{e.exports=r(1837)}}]);
//# sourceMappingURL=13.4a351f67db71705f.js.map