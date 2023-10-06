"use strict";(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[4409],{44409:(e,t,n)=>{n.r(t);var a=n(40540),i=n(21730),o=n(60607),s=n(25892),r=n.n(s),d=n(58560),l=n(48263),c=n(64691),p=n(80605),h=n(30610),u=n(17282),g=n(20347),x=n(49437),m=n(80047),k=n(29225),f=n(54660),w=n(44025),v=n(27363),b=n(63622),y=n(23468),j=n(37110),_=n(81397),T=n(57775),C=n(49584),I=n(35482),Z=n(73401),N=n(52322);const A=new Set(["result","id","name","access_token","token_type","isTokenRefreshEnabled","refreshRequestParams","data"]),E=r()(d.Z).withConfig({displayName:"token-details__BodyDataWrapper",componentId:"sc-1uw8ble-0"})(["box-sizing:border-box;display:flex;flex-direction:column;width:100%;"]),S=r()(d.Z).withConfig({displayName:"token-details__TokenDataWrapper",componentId:"sc-1uw8ble-1"})(["padding-bottom:var(--spacing-l);box-sizing:border-box;display:flex;flex-direction:column;width:100%;overflow:hidden auto;flex:1;"]),O=r()(d.Z).withConfig({displayName:"token-details__RowWrapper",componentId:"sc-1uw8ble-2"})(["max-width:528px;display:flex;flex-direction:row;padding:var(--spacing-s) 0px;flex-shrink:0;line-height:var(line-height-s);width:100%;align-items:center;max-height:var(--controls-size-default);"]),W=r()(b.ZP).withConfig({displayName:"token-details__KeyWrapper",componentId:"sc-1uw8ble-3"})(["margin-left:var(--spacing-xxl);flex:0.4;color:var(--content-color-primary);font-weight:var(--text-weight-medium);"]),P=r()(b.ZP).withConfig({displayName:"token-details__ValueWrapper",componentId:"sc-1uw8ble-4"})(["margin-left:var(--spacing-xxl);flex:1;"]),D=r()(d.Z).withConfig({displayName:"token-details__AccessTokenValueWrapper",componentId:"sc-1uw8ble-5"})(["margin-left:var(--spacing-xxl);flex:1;overflow:hidden;align-items:center;"]),M=r().div.withConfig({displayName:"token-details__InputWrapper",componentId:"sc-1uw8ble-6"})(["margin-left:28px;flex:1 1 0%;word-break:break-all;align-items:center;text-overflow:ellipsis;overflow:",";white-space:nowrap;display:",";"],(e=>e.isEditMode?null:"hidden"),(e=>e.isEditMode?"flex":"block")),z=r()(Z.InlineEditor).withConfig({displayName:"token-details__Input",componentId:"sc-1uw8ble-7"})(["margin-right:0px;word-break:break-all;flex:1;align-items:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block;border:var(--border-width-default) var(--border-style-solid) var(--border-color-default);border-radius:var(--border-radius-default);padding-left:var(--spacing-s);display:",";"],(e=>e.isEditMode?"flex":"block")),R=r()(d.Z).withConfig({displayName:"token-details__WarningBanner",componentId:"sc-1uw8ble-8"})(["background-color:var(--background-color-error);height:48px;align-items:center;gap:var(--spacing-s);padding-left:var(--spacing-l);font-size:var(--text-size-m);line-height:var(--line-height-s);"]),B=r()(b.ZP).withConfig({displayName:"token-details__StyledHeading",componentId:"sc-1uw8ble-9"})(["display:flex;align-items:center;padding:var(--spacing-xxl) var(--spacing-l) var(--spacing-l) var(--spacing-xxl);font-weight:var(--text-weight-medium);font-size:var(--text-size-l);"]),q=r()(p.Z).withConfig({displayName:"token-details__CopyButton",componentId:"sc-1uw8ble-10"})(["margin-left:var(--spacing-s);background:inherit;height:var(--size-s);width:var(--size-s);"]),H=r().div.withConfig({displayName:"token-details__TableWrapper",componentId:"sc-1uw8ble-11"})(["padding-left:var(--spacing-xxl);max-width:520px;"]),$=e=>{const t=JSON.stringify(e);return t&&'"'===t[0]?t.replace(/"/g,""):t},V=e=>{if(!e)return"";switch(e){case"request_url":return"Request URL";case"request_body":return"Request Body";case"request_header":return"Request Header";default:return""}},F=e=>{var t;const{token:n}=e,{oAuth2Tokens:i,updateOAuth2Token:o}=(0,f.useOAuth2Tokens)(),[s,r]=(0,a.useState)(!1),[d,l]=(0,a.useState)(!1),[c,p]=(0,a.useState)(null);if((0,a.useEffect)((()=>{null!==c&&(clearTimeout(c),l(!1),p(null))}),[n]),!n)return null;const h=(e=>{const t={};for(const[n,a]of Object.entries(e))A.has(n)||(t[`${n}`]=a);for(const[n,a]of Object.entries(e.data))A.has(n)||(t[`${n}`]=a);return t})(n),u=!n.data.access_token&&!n.data.id_token,g=n.data.token_type&&"bearer"!==n.data.token_type.toString().toLowerCase(),x=null==(t=n.data)?void 0:t.refreshRequestParams;return(0,N.jsxs)(E,{children:[(0,f.isTokenExpired)(n)&&(0,N.jsxs)(R,{children:[(0,N.jsx)(I.Z,{color:"content-color-error"}),"This token has expired"]}),(0,N.jsxs)(S,{isTokenExpired:(0,f.isTokenExpired)(n),children:[(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(B,{children:"Token Details "}),(0,N.jsxs)(O,{children:[(0,N.jsx)(W,{children:(0,N.jsx)(j.Z,{text:"Token Name"})}),(0,N.jsx)(M,{onClick:()=>{s||r(!0)},isEditMode:s,children:(0,N.jsx)(z,{onSubmit:e=>{((e,t)=>{const n=i&&i[e];n&&(n.name=t,o(e,n))})(n.id,e)},isEditMode:s,setIsEditMode:()=>{r(!1)},value:n.name})})]}),(0,N.jsxs)(O,{children:[(0,N.jsx)(W,{children:(0,N.jsx)(j.Z,{text:"Access Token",infoText:!!u&&"access_token or id_token not found in the response. If the access token value is present elsewhere in the response, you can copy and use that in the Access Token input field."})}),(0,N.jsxs)(D,{children:[(0,N.jsx)(b.ZP,{isTruncated:!0,children:n.data.access_token}),!u&&(0,N.jsx)(q,{icon:d?(0,N.jsx)(T.Z,{}):(0,N.jsx)(C.Z,{}),tooltip:(0,N.jsx)(_.Z,{content:d?"Copied":"Copy",placement:"top"}),onClick:async()=>{if(null!==c)return;l(!0),await navigator.clipboard.writeText(`${n.data.access_token}`);const e=setTimeout((()=>{l(!1),p(null)}),1500);p(e)}})]})]}),(null==n||null==(m=n.data)?void 0:m.token_type)&&(0,N.jsxs)(O,{children:[(0,N.jsx)(W,{children:(0,N.jsx)(j.Z,{text:"Token Type",infoText:!!g&&"This token type is only partially supported by Postman. Your authorization header will continue to be prefixed with Bearer."})}),(0,N.jsx)(P,{isTruncated:!0,children:n.data.token_type})]}),Object.keys(h).map((e=>(0,N.jsxs)(O,{children:[(0,N.jsx)(W,{isTruncated:!0,children:e}),(0,N.jsx)(P,{isTruncated:!0,children:$(h[`${e}`])})]},e)))]}),Array.isArray(x)&&null!=x&&x.length?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(B,{children:"Refresh Request Data "}),(0,N.jsx)(H,{children:(0,N.jsx)(y.Z,{data:x,columns:[{Header:"Key",accessor:"key",Cell:e=>(0,N.jsx)(b.ZP,{isTruncated:!0,children:e.value})},{Header:"Value",accessor:"value",Cell:e=>(0,N.jsx)(b.ZP,{isTruncated:!0,children:$(e.value)})},{Header:"Send In",accessor:"send_as",Cell:e=>(0,N.jsx)(b.ZP,{isTruncated:!0,children:V(e.value)})}]})})]}):null]})]});var m};var J=n(87459),K=n(59713);const L=r()(d.Z).withConfig({displayName:"manage-tokens-sidebar__SidebarWrapper",componentId:"sc-1ad7od-0"})(["border-right:var(--border-width-default) var(--border-style-solid) var(--border-color-default);flex-direction:column;width:300px;"]),G=r()(d.Z).withConfig({displayName:"manage-tokens-sidebar__RowsWrapper",componentId:"sc-1ad7od-1"})(["overflow:auto;flex-direction:column;height:100%;"]),U=r().div.withConfig({displayName:"manage-tokens-sidebar__SideBarRowWrapper",componentId:"sc-1ad7od-2"})(["cursor:pointer;border-bottom:var(--border-width-default) solid var(--postman-vscode-border-color-default);background-color:",";"],(e=>e.isSelected?"var(--highlight-background-color-primary)":"null")),X=r().div.withConfig({displayName:"manage-tokens-sidebar__NameWrapper",componentId:"sc-1ad7od-3"})(["display:flex;align-items:center;min-height:var(--size-s);overflow:hidden;justify-content:space-between;width:100%;"]),Y=r()(p.Z).withConfig({displayName:"manage-tokens-sidebar__StyledButton",componentId:"sc-1ad7od-4"})(["display:none;margin-left:var(--spacing-xs);& i{padding-top:var(--spacing-xs);}"]),Q=r().div.withConfig({displayName:"manage-tokens-sidebar__SideBarContentWrapper",componentId:"sc-1ad7od-5"})(["cursor:pointer;display:flex;padding:var(--spacing-s) var(--spacing-s) var(--spacing-s) var(--spacing-l);justify-content:space-between;align-items:center;line-height:var(--line-height-l);&:hover{background-color:var(--background-color-secondary);&& ","{display:block;}}"],Y),ee=e=>{const{setActiveIndex:t,activeIndex:n}=e,{oAuth2Tokens:a,deleteOAuth2TokenById:i}=(0,f.useOAuth2Tokens)();return(0,N.jsx)(L,{children:(0,N.jsx)(G,{children:a&&Object.values(a).map((e=>(0,N.jsx)(U,{"data-testid":`manage-tokens-sidebar-element-${e.id}`,onClick:()=>{t(e.id)},isSelected:n===e.id,children:(0,N.jsxs)(Q,{children:[(0,N.jsxs)(X,{children:[(0,N.jsx)(b.ZP,{isTruncated:!0,children:e.name}),(0,f.isTokenExpired)(e)&&(0,N.jsx)(J.Z,{status:"critical",text:"Expired"})]}),(0,N.jsx)(Y,{"data-testid":`manage-tokens-sidebar-delete-icon-${e.id}`,size:"small",icon:(0,N.jsx)(K.Z,{}),onClick:t=>{var n;n=e.id,i(n),t.stopPropagation()}})]})},e.id)))})})},te=r()(d.Z).withConfig({displayName:"oauth2-manage-tokens__HeaderWrapper",componentId:"sc-op8p9p-0"})(["border-bottom:var(--border-width-default) var(--border-style-solid) var(--border-color-default);height:48px;font-weight:var(--text-weight-medium);align-items:center;padding-left:var(--spacing-l);padding-right:var(--spacing-l);justify-content:space-between;"]),ne=r()(d.Z).withConfig({displayName:"oauth2-manage-tokens__Header",componentId:"sc-op8p9p-1"})(["font-weight:var(--text-weight-medium);align-items:center;font-size:var(--text-size-l);"]),ae=r()(l.Z).withConfig({displayName:"oauth2-manage-tokens__StyledMenuButton",componentId:"sc-op8p9p-2"})(["font-weight:var(--text-weight-medium);background:inherit;"]),ie=r()(d.Z).withConfig({displayName:"oauth2-manage-tokens__TokenManagerWrapper",componentId:"sc-op8p9p-3"})(["flex-direction:column;height:100vh;width:100vw;"]),oe=r()(d.Z).withConfig({displayName:"oauth2-manage-tokens__BodyWrapper",componentId:"sc-op8p9p-4"})(["flex-direction:row;flex:1;overflow:auto hidden;"]),se=r()(d.Z).withConfig({displayName:"oauth2-manage-tokens__TokenDetailsWrapper",componentId:"sc-op8p9p-5"})(["flex:1;"]),re=()=>{const[e,t]=(0,a.useState)(""),{setTabTitle:n}=(0,w.useTabTitleMeta)(),i=v.Modals.getModals(),{oAuth2Tokens:o,deleteAllOAuth2Token:s,deleteAllExpiredOAuth2Token:r}=(0,f.useOAuth2Tokens)();(0,a.useEffect)((()=>{n("Manage Tokens","cookies-editor")}),[]),(0,a.useEffect)((()=>{(""===e||o&&!o[e])&&o&&Object.keys(o).length>0&&t(Object.keys(o)[0])}),[o]);const d=()=>!(!o||o&&0===Object.keys(o).length);return(0,N.jsxs)(ie,{children:[(0,N.jsxs)(te,{children:[(0,N.jsx)(ne,{children:"Manage Access Tokens"}),(0,N.jsxs)(c.Z,{children:[(0,N.jsx)(ae,{children:(0,N.jsx)(p.Z,{icon:(0,N.jsx)(k.Z,{}),"data-testid":"manage-tokens-sidebar-delete-icon-dropdown"})}),(0,N.jsxs)(h.Z,{placement:"bottom-end",children:[(0,N.jsx)(u.Z,{isDisabled:!d(),onClick:()=>{r()},"data-testid":"manage-tokens-delete-all-expired",children:"Delete Expired Tokens"}),(0,N.jsx)(g.Z,{}),(0,N.jsx)(u.Z,{isDisabled:!d(),onClick:async()=>{const e=await i.showWarningDialog({uid:"delete-Tokens",subject:"Delete all tokens?",message:"Are you sure you want to delete all the oauth2 tokens from Postman?",options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Delete",isPrimary:!0}]});e&&"Delete"===e.title&&s()},"data-testid":"manage-tokens-delete-all",children:"Delete All Tokens"})]})]})]}),!d()&&(0,N.jsx)(x.Z,{title:"No tokens available",children:(0,N.jsx)(m.Z,{name:"illustration-no-report"})}),d()&&(0,N.jsxs)(oe,{children:[(0,N.jsx)(ee,{setActiveIndex:t,activeIndex:e}),(0,N.jsx)(se,{children:o&&(0,N.jsx)(F,{token:o[e]})})]})]})};var de=n(30923);let le="/";try{var ce;le=JSON.parse(null==(ce=window)?void 0:ce.NAVIGATION_CONTEXT).to}catch(e){}const pe=[{path:"/workspace/:workspaceId/openManageTokensTab",element:(0,N.jsx)(re,{}),errorElement:(0,N.jsx)(de.RouteErrorBoundary,{appId:"oauth2-manage-tokens",errorElementId:"oauth2-manage-tokens-route"})}],he=(0,o.createMemoryRouter)(pe,{initialEntries:[le],initialIndex:0});function ue(){return(0,N.jsx)(o.RouterProvider,{router:he})}var ge=n(44958);(0,n(15837).initializeAnalytics)(),n(77567);const xe=document.querySelector("#oauth2-manage-tokens_root");i.render((0,N.jsx)(a.StrictMode,{children:(0,N.jsx)(de.CustomErrorBoundary,{appId:"oauth2-manage-tokens",errorElementId:"global-error-boundary",children:(0,N.jsx)(ge.DataFetchCacheProvider,{children:(0,N.jsx)(w.ThemeContextProvider,{children:(0,N.jsx)(ue,{})})})})}),xe)},77567:(e,t,n)=>{n.r(t)}}]);
//# sourceMappingURL=4409.fe3ff8293ac259ec.js.map