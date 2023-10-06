/*! For license information please see 770.c948f5d4340757e2.js.LICENSE.txt */
"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[770],{770:(o,e,r)=>{function t(){return"vscode-utils"}r.r(e),r.d(e,{Storages:()=>y,VSCodeCommunicationsService:()=>a,VSCodeKVAbstractStorage:()=>k,VSCodeKVInMemoryStorage:()=>m,VSCodeKVPermanentStorage:()=>T,VSCodeLink:()=>g,extendAppThemeTokens:()=>p,extendVSCodeThemeTokens:()=>u,onTabTitleChange:()=>h,onWorkspaceChange:()=>v,vsCodeOpenExternalLink:()=>f,vscodeNavigate:()=>b,vscodeUtils:()=>t});var s=r(8722);const a=new class{constructor(){this.vsCodeApi=void 0,this.subscribers=new Map,this.handleExtensionMessages=o=>{var e;const r=o.data,{type:t,payload:s}=r;(null!=(e=this.subscribers.get(t))?e:[]).map((o=>o(s)))},"function"==typeof globalThis.acquireVsCodeApi&&(this.vsCodeApi=globalThis.acquireVsCodeApi())}init(){window.addEventListener("message",this.handleExtensionMessages.bind(this))}cleanup(){this.subscribers.clear();const o=this.handleExtensionMessages.bind(this);return window.removeEventListener("message",o)}subscribe(o,e){var r;return this.subscribers.set(o,[...null!=(r=this.subscribers.get(o))?r:[],e]),()=>{var r;this.subscribers.has(o)&&this.subscribers.set(o,(null!=(r=this.subscribers.get(o))?r:[]).filter((o=>o!==e)))}}postMessageToExtension(o){var e;null==(e=this.vsCodeApi)||e.postMessage(o)}postMessageToExtensionAsPromise(o){const e=(0,s.v4)(),r={type:"promise-message",payload:{uid:e,originalMessage:o}};return this.postMessageToExtension(r),new Promise((o=>{const r=this.subscribe(`promise-message-${e}`,(e=>{r(),o(e)}))}))}};a.init();var n=r(7560),c=r(8283),i=(r(540),r(607)),d=r(2322);const l=["children","to"],g=o=>{let{children:e,to:r}=o,t=(0,c.Z)(o,l);const s=()=>{t.customNavEvent&&a.postMessageToExtension({type:t.customNavEvent,payload:{to:r.toString(),params:{}}})};return t["customNavEvent-updateURL"]?(0,d.jsx)(i.Link,(0,n.Z)({to:r,onClick:s},t,{children:e})):(0,d.jsx)("a",(0,n.Z)({href:"/#",onClick:s},t,{children:e}))},u=(o,e)=>(0,n.Z)({},o,{"base-color-info":`var(--vscode-button-background, ${o["base-color-info"]})`,"highlight-background-color-info":`var(--vscode-button-hoverBackground, ${o["highlight-background-color-info"]})`,"highlight-background-color-primary":`var(--vscode-list-hoverBackground, ${o["highlight-background-color-primary"]})`,"highlight-background-color-secondary":`var(--vscode-list-hoverBackground, ${o["highlight-background-color-secondary"]})`,"content-color-constant":`var(--vscode-button-foreground, ${o["content-color-constant"]})`,"content-color-primary":`var(--vscode-editor-foreground, var(--vscode-foreground, ${o["content-color-primary"]}))`,"content-color-secondary":`var(--vscode-sideBar-foreground, var(--vscode-foreground, ${o["content-color-secondary"]}))`,"background-color-primary":`var(--vscode-editor-background, ${o["background-color-primary"]})`,"background-color-secondary":`var(--vscode-sideBar-background, ${o["background-color-secondary"]})`,"background-color-tertiary":`var(--vscode-settings-dropdownBackground, ${o["background-color-tertiary"]})`,"highlight-background-color-tertiary":`var(--vscode-list-hoverBackground, ${o["highlight-background-color-tertiary"]})`,"button-primary-background-color":`var(--vscode-button-background, ${o["button-primary-background-color"]})`,"button-primary-content-color":`var(--vscode-button-foreground, ${o["button-primary-content-color"]})`,"button-primary-hover-background-color":`var(--vscode-button-hoverBackground, ${o["button-primary-hover-background-color"]})`,"button-primary-active-background-color":`var(--vscode-button-background, ${o["button-primary-active-background-color"]})`,"button-secondary-active-background-color":`var(--vscode-button-secondaryBackground, ${o["button-secondary-active-background-color"]})`,"border-color-default":"var(--postman-vscode-border-color-default)","border-color-strong":"var(--postman-vscode-border-color-strong)","tab-selected-border":`inset 0px -2px 0px var(--vscode-button-background, ${o["tab-selected-border"]})`,"postman-vscode-border-color-default":"rgba(128, 128, 128, .40)","postman-vscode-border-color-strong":"rgba(128, 128, 128, .80)","code-editor-background":"var(--vscode-editor-background)","code-editor-lineHighlightBackground":"var(--vscode-editor-lineHighlightBackground, var(--background-color-tertiary))"}),p=(o,e)=>(0,n.Z)({},o,{"content-color-patch-method":`${"dark"===e.type?o["purple-30"]:o["purple-60"]}`,"content-color-options-method":`${"dark"===e.type?o["pink-40"]:o["pink-60"]}`,"request-url-highlight-border-color":`${"dark"===e.type?o["blue-50"]:o["blue-30"]}`}),b=(o,e,r)=>{a.postMessageToExtension({type:r.customNavEvent,payload:{to:o,params:e||{},options:r}})},v=o=>{a.postMessageToExtension({type:"WORKSPACE_SWITCH",payload:{workspaceId:o}})},h=(o,e,r)=>{const{isDirty:t,isConflicted:s}=(0,n.Z)({isDirty:!1,isConflicted:!1},r);a.postMessageToExtension({type:"SET_TAB_METADATA",payload:{title:o,type:e,tabState:{isDirty:t,isConflicted:s}}})},y={KV:"KV"};class k{constructor(o=y.KV,e){this._storageMessageType=e,this.storageType=void 0,this.storageType=o}setItem(o,e){return a.postMessageToExtensionAsPromise({type:this._storageMessageType,payload:{method:"setItem",storageType:this.storageType,key:o,value:e}})}getItem(o){return a.postMessageToExtensionAsPromise({type:this._storageMessageType,payload:{method:"getItem",storageType:this.storageType,key:o}})}removeItem(o){return a.postMessageToExtensionAsPromise({type:this._storageMessageType,payload:{method:"removeItem",storageType:this.storageType,key:o}})}clearAll(){return a.postMessageToExtensionAsPromise({type:this._storageMessageType,payload:{method:"clearAll",storageType:this.storageType}})}}class m extends k{constructor(o=y.KV){super(o,"SESSION_STORAGE")}}class T extends k{constructor(o=y.KV){super(o,"PERMANENT_STORAGE")}}async function f(o){await a.postMessageToExtensionAsPromise({type:"OPEN_EXTERNAL_LINK",payload:{url:o}})}},1837:(o,e,r)=>{var t=r(540),s=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),e.Fragment=a("react.fragment")}var n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function d(o,e,r){var t,a={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(l=e.ref),e)c.call(e,t)&&!i.hasOwnProperty(t)&&(a[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps)void 0===a[t]&&(a[t]=e[t]);return{$$typeof:s,type:o,key:d,ref:l,props:a,_owner:n.current}}e.jsx=d,e.jsxs=d},2322:(o,e,r)=>{o.exports=r(1837)}}]);
//# sourceMappingURL=770.c948f5d4340757e2.js.map