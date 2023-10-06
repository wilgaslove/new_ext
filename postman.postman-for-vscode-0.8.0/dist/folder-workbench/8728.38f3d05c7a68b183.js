"use strict";(self.webpackChunkfolder_workbench=self.webpackChunkfolder_workbench||[]).push([[8728,8283,2241],{5858:(e,t,r)=>{function n(e){if(null==e)throw new TypeError("Cannot destructure "+e)}r.d(t,{Z:()=>n})},98283:(e,t,r)=>{function n(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:()=>n})},2241:(e,t,r)=>{r.r(t);var n=r(1173),i={};for(const e in n)"default"!==e&&(i[e]=()=>n[e]);r.d(t,i)},1173:(e,t,r)=>{r.r(t),r.d(t,{clearCache:()=>h,invalidateCache:()=>f,render:()=>v,renderWithRouter:()=>x});var n=r(98283),i=r(5858),a=(r(40540),r(81079)),s=r(44025),o=r(35736),c=r(30923),l=r(60607),d=r(44958),p=r(52322),m={};for(const e in a)["default","clearCache","invalidateCache","render","renderWithRouter"].indexOf(e)<0&&(m[e]=()=>a[e]);r.d(t,m);const u=["ui","routes","path","initialEntries","initialIndex","loader"],h=()=>d.cacheClient.clear(),f=async e=>{await d.cacheClient.invalidateQueries({queryKey:e})},y=({children:e})=>(0,p.jsxs)(p.Fragment,{children:[e,(0,p.jsxs)("div",{className:"aether-portals",children:[(0,p.jsx)("div",{id:"aether-toast-notifications__container"}),(0,p.jsx)("div",{id:"aether-popover-portal"}),(0,p.jsx)("div",{id:"aether-tab-portal"}),(0,p.jsx)("div",{id:"aether-breadcrumb-portal"}),(0,p.jsx)("div",{id:"aether-dropdown-portal"})]})]}),g=({children:e})=>(0,p.jsx)(y,{children:(0,p.jsx)(d.DataFetchCacheProvider,{children:(0,p.jsx)(s.ThemeContextProvider,{children:e})})});function v(e,t={}){let r=Object.assign({},((0,i.Z)(t),t));return h(),(0,a.render)(e,Object.assign({wrapper:g},r))}function x(e={}){let{ui:t,routes:r,path:i="/",initialEntries:s=["/"],initialIndex:d=0,loader:m=(()=>Promise.resolve(null))}=e,f=(0,n.Z)(e,u);h();const y=[{path:i,element:t,errorElement:(0,p.jsx)(c.RouteErrorBoundary,{appId:"test",errorElementId:"test"}),loader:m}],v=r||y,x=(0,l.createMemoryRouter)(v,{initialEntries:s,initialIndex:d});return(0,a.render)((0,p.jsx)(l.RouterProvider,{router:x,fallbackElement:(0,p.jsx)(o.Z,{})}),Object.assign({wrapper:g},f))}},35736:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(40540),i=r.n(n),a=r(72229),s=r.n(a),o=r(25892),c=r.n(o),l=r(63622),d=r(58560),p=(0,o.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),m=c().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["text-size-xs"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),p),u=c()(l.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(e){return e.theme["spacing-s"]}));function h(e){var t=e.description,r=e.className,n=e.type,a=e["data-testid"],s="bright"===n?"content-color-constant":"content-color-secondary";return i().createElement(d.Z,{justifyContent:"flex-start",alignItems:"center",className:r,type:n},i().createElement(m,{"data-testid":a},i().createElement("div",{className:"rect-one"}),i().createElement("div",{className:"rect-two"}),i().createElement("div",{className:"rect-three"})),t&&i().createElement(u,{color:s},t))}h.defaultProps={description:"",className:"","data-testid":"aether-spinner"},h.propTypes={description:s().string,className:s().string,type:s().oneOf(["default","bright"]).isRequired,"data-testid":s().string};var f=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(e){return"bright"===e.type?e.theme["content-color-constant"]:e.theme["content-color-tertiary"]})),y=c()(l.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(e){return e.theme["text-size-l"]})),g=(0,o.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),v=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),g);function x(e){var t=e.className,r=e.description,n=e.type,a=e["data-testid"],s="bright"===n?"content-color-constant":"content-color-secondary";return i().createElement(f,{className:t,type:n},i().createElement(v,{"data-testid":a},i().createElement("div",{className:"rect-one"}),i().createElement("div",{className:"rect-two"}),i().createElement("div",{className:"rect-three"})),i().createElement(y,{color:s},r))}function b(e){var t=e.size,r=e.className,n=e.description,a=e.type,s=e["data-testid"];return"small"===t?i().createElement(h,{type:a,className:r,description:n,"data-testid":s}):"large"===t?i().createElement(x,{type:a,description:n||"Loading",className:r,"data-aether-id":"aether-spinner","data-testid":s}):null}x.defaultProps={className:"",description:"","data-testid":"aether-spinner"},x.propTypes={className:s().string,description:s().string,type:s().oneOf(["default","bright"]).isRequired,"data-testid":s().string},b.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},b.propTypes={size:s().oneOf(["small","large"]),className:s().string,type:s().oneOf(["default","bright"]),description:function(e){var t=e.description;return"string"!=typeof t?new Error("Spinner: description prop should have a string value"):t.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":s().string}}}]);
//# sourceMappingURL=8728.38f3d05c7a68b183.js.map