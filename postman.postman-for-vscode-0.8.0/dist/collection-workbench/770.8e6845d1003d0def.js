/*! For license information please see 770.8e6845d1003d0def.js.LICENSE.txt */
"use strict";(self.webpackChunkcollection_workbench=self.webpackChunkcollection_workbench||[]).push([[770,8283],{98283:(o,e,r)=>{function t(o,e){if(null==o)return{};var r,t,s={},n=Object.keys(o);for(t=0;t<n.length;t++)r=n[t],e.indexOf(r)>=0||(s[r]=o[r]);return s}r.d(e,{Z:()=>t})},30770:(o,e,r)=>{function t(){return"vscode-utils"}r.r(e),r.d(e,{Storages:()=>h,VSCodeCommunicationsService:()=>n,VSCodeKVAbstractStorage:()=>y,VSCodeKVInMemoryStorage:()=>k,VSCodeKVPermanentStorage:()=>m,VSCodeLink:()=>l,extendAppThemeTokens:()=>u,extendVSCodeThemeTokens:()=>g,onTabTitleChange:()=>v,onWorkspaceChange:()=>b,vsCodeOpenExternalLink:()=>T,vscodeNavigate:()=>p,vscodeUtils:()=>t});var s=r(48722);const n=new class{constructor(){this.vsCodeApi=void 0,this.subscribers=new Map,this.handleExtensionMessages=o=>{var e;const r=o.data,{type:t,payload:s}=r;(null!=(e=this.subscribers.get(t))?e:[]).map((o=>o(s)))},"function"==typeof globalThis.acquireVsCodeApi&&(this.vsCodeApi=globalThis.acquireVsCodeApi())}init(){window.addEventListener("message",this.handleExtensionMessages.bind(this))}cleanup(){this.subscribers.clear();const o=this.handleExtensionMessages.bind(this);return window.removeEventListener("message",o)}subscribe(o,e){var r;return this.subscribers.set(o,[...null!=(r=this.subscribers.get(o))?r:[],e]),()=>{var r;this.subscribers.has(o)&&this.subscribers.set(o,(null!=(r=this.subscribers.get(o))?r:[]).filter((o=>o!==e)))}}postMessageToExtension(o){var e;null==(e=this.vsCodeApi)||e.postMessage(o)}postMessageToExtensionAsPromise(o){const e=(0,s.v4)(),r={type:"promise-message",payload:{uid:e,originalMessage:o}};return this.postMessageToExtension(r),new Promise((o=>{const r=this.subscribe(`promise-message-${e}`,(e=>{r(),o(e)}))}))}};n.init();var a=r(98283),c=(r(40540),r(60607)),i=r(52322);const d=["children","to"],l=o=>{let{children:e,to:r}=o,t=(0,a.Z)(o,d);const s=()=>{t.customNavEvent&&n.postMessageToExtension({type:t.customNavEvent,payload:{to:r.toString(),params:{}}})};return t["customNavEvent-updateURL"]?(0,i.jsx)(c.Link,Object.assign({to:r,onClick:s},t,{children:e})):(0,i.jsx)("a",Object.assign({href:"/#",onClick:s},t,{children:e}))},g=(o,e)=>Object.assign({},o,{"base-color-info":`var(--vscode-button-background, ${o["base-color-info"]})`,"highlight-background-color-info":`var(--vscode-button-hoverBackground, ${o["highlight-background-color-info"]})`,"highlight-background-color-primary":`var(--vscode-list-hoverBackground, ${o["highlight-background-color-primary"]})`,"highlight-background-color-secondary":`var(--vscode-list-hoverBackground, ${o["highlight-background-color-secondary"]})`,"content-color-constant":`var(--vscode-button-foreground, ${o["content-color-constant"]})`,"content-color-primary":`var(--vscode-editor-foreground, var(--vscode-foreground, ${o["content-color-primary"]}))`,"content-color-secondary":`var(--vscode-sideBar-foreground, var(--vscode-foreground, ${o["content-color-secondary"]}))`,"background-color-primary":`var(--vscode-editor-background, ${o["background-color-primary"]})`,"background-color-secondary":`var(--vscode-sideBar-background, ${o["background-color-secondary"]})`,"background-color-tertiary":`var(--vscode-settings-dropdownBackground, ${o["background-color-tertiary"]})`,"highlight-background-color-tertiary":`var(--vscode-list-hoverBackground, ${o["highlight-background-color-tertiary"]})`,"button-primary-background-color":`var(--vscode-button-background, ${o["button-primary-background-color"]})`,"button-primary-content-color":`var(--vscode-button-foreground, ${o["button-primary-content-color"]})`,"button-primary-hover-background-color":`var(--vscode-button-hoverBackground, ${o["button-primary-hover-background-color"]})`,"button-primary-active-background-color":`var(--vscode-button-background, ${o["button-primary-active-background-color"]})`,"button-secondary-active-background-color":`var(--vscode-button-secondaryBackground, ${o["button-secondary-active-background-color"]})`,"border-color-default":"var(--postman-vscode-border-color-default)","border-color-strong":"var(--postman-vscode-border-color-strong)","tab-selected-border":`inset 0px -2px 0px var(--vscode-button-background, ${o["tab-selected-border"]})`,"postman-vscode-border-color-default":"rgba(128, 128, 128, .40)","postman-vscode-border-color-strong":"rgba(128, 128, 128, .80)","code-editor-background":"var(--vscode-editor-background)","code-editor-lineHighlightBackground":"var(--vscode-editor-lineHighlightBackground, var(--background-color-tertiary))"}),u=(o,e)=>Object.assign({},o,{"content-color-patch-method":`${"dark"===e.type?o["purple-30"]:o["purple-60"]}`,"content-color-options-method":`${"dark"===e.type?o["pink-40"]:o["pink-60"]}`,"request-url-highlight-border-color":`${"dark"===e.type?o["blue-50"]:o["blue-30"]}`}),p=(o,e,r)=>{n.postMessageToExtension({type:r.customNavEvent,payload:{to:o,params:e||{},options:r}})},b=o=>{n.postMessageToExtension({type:"WORKSPACE_SWITCH",payload:{workspaceId:o}})},v=(o,e,r)=>{const{isDirty:t,isConflicted:s}=Object.assign({isDirty:!1,isConflicted:!1},r);n.postMessageToExtension({type:"SET_TAB_METADATA",payload:{title:o,type:e,tabState:{isDirty:t,isConflicted:s}}})},h={KV:"KV"};class y{constructor(o=h.KV,e){this._storageMessageType=e,this.storageType=void 0,this.storageType=o}setItem(o,e){return n.postMessageToExtensionAsPromise({type:this._storageMessageType,payload:{method:"setItem",storageType:this.storageType,key:o,value:e}})}getItem(o){return n.postMessageToExtensionAsPromise({type:this._storageMessageType,payload:{method:"getItem",storageType:this.storageType,key:o}})}removeItem(o){return n.postMessageToExtensionAsPromise({type:this._storageMessageType,payload:{method:"removeItem",storageType:this.storageType,key:o}})}clearAll(){return n.postMessageToExtensionAsPromise({type:this._storageMessageType,payload:{method:"clearAll",storageType:this.storageType}})}}class k extends y{constructor(o=h.KV){super(o,"SESSION_STORAGE")}}class m extends y{constructor(o=h.KV){super(o,"PERMANENT_STORAGE")}}async function T(o){await n.postMessageToExtensionAsPromise({type:"OPEN_EXTERNAL_LINK",payload:{url:o}})}},11837:(o,e,r)=>{var t=r(40540),s=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;s=n("react.element"),e.Fragment=n("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function d(o,e,r){var t,n={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(l=e.ref),e)c.call(e,t)&&!i.hasOwnProperty(t)&&(n[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps)void 0===n[t]&&(n[t]=e[t]);return{$$typeof:s,type:o,key:d,ref:l,props:n,_owner:a.current}}e.jsx=d,e.jsxs=d},52322:(o,e,r)=>{o.exports=r(11837)}}]);
//# sourceMappingURL=770.8e6845d1003d0def.js.map