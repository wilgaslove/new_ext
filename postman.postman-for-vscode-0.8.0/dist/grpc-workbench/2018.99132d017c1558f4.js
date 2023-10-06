"use strict";(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[2018],{59363:(e,t,r)=>{r.d(t,{D:()=>o,F:()=>n});const o={OK:0,CANCELLED:1,UNKNOWN:2,INVALID_ARGUMENT:3,DEADLINE_EXCEEDED:4,NOT_FOUND:5,ALREADY_EXISTS:6,PERMISSION_DENIED:7,RESOURCE_EXHAUSTED:8,FAILED_PRECONDITION:9,ABORTED:10,OUT_OF_RANGE:11,UNIMPLEMENTED:12,INTERNAL:13,UNAVAILABLE:14,DATA_LOSS:15,UNAUTHENTICATED:16},n={[o.OK]:{tooltip:"is a standard response for successfully invoking a gRPC method.",summary:"Call completed",codeName:"OK"},[o.CANCELLED]:{tooltip:"is returned if the operation is cancelled by the caller.",summary:"Operation cancelled",description:"You have cancelled the execution of the method.",codeName:"CANCELLED"},[o.UNKNOWN]:{tooltip:"is returned if the operation couldn’t be completed because of an unknown error.\n               For example, this error may be returned when a Status value received from another\n               address space belongs to an error space that is not known in this address space.\n               Also errors raised by APIs that do not return enough error information may be converted to this error.",summary:"Unknown error",description:"Operation couldn’t be completed because of an unknown error.",codeName:"UNKNOWN"},[o.INVALID_ARGUMENT]:{tooltip:"is returned if the client has specified an invalid argument. This stands for arguments that are\n                problematic regardless of the state of the system (e.g. a malformed file name).",summary:"Invalid argument",description:"You have specified an invalid argument. Check the message and invoke the method again.",codeName:"INVALID_ARGUMENT",exampleDescription:"You have specified an invalid argument."},[o.DEADLINE_EXCEEDED]:{tooltip:"is returned if the deadline expires before the operation could be completed. For operations that change\n                the state of the system, this error may be returned even if the operation has completed successfully.\n                For example, a successful response from a server could have been delayed long.",summary:"Operation timed out",description:"Operation timed out before it could be completed.",codeName:"DEADLINE_EXCEEDED"},[o.NOT_FOUND]:{tooltip:"is returned if a requested entity (e.g., file or directory) was not found.",summary:"Could not find the entity",description:"Couldn’t find the resources you were looking for. Check the message and invoke the method again.",codeName:"NOT_FOUND",exampleDescription:"Couldn’t find the resources you were looking for."},[o.ALREADY_EXISTS]:{tooltip:"is returned if the entity you attempted to create (e.g., file or directory) already exists.",summary:"Entity already exists",description:"The entity you are trying to create already exists. Make sure you are using the correct configuration\n                    and message payload to invoke the method.",codeName:"ALREADY_EXISTS",exampleDescription:"The entity you are trying to create already exists."},[o.PERMISSION_DENIED]:{tooltip:"is returned if the caller does not have permission to execute the specified operation.\n                This error code does not imply the request is valid or the requested entity exists or satisfies other pre-conditions.",summary:"Access denied",description:"You do not have permission to execute the specified operation. Make sure you have the authentication\n                and certificates configured (if required) and try invoking the method again.",codeName:"PERMISSION_DENIED",exampleDescription:"You do not have permission to execute the specified operation."},[o.RESOURCE_EXHAUSTED]:{tooltip:"is returned if a per-user quota, or perhaps the entire file system is out of space.",summary:"Resource exhausted",description:"The operation you’re trying to perform has exceeded the allowed space.",codeName:"RESOURCE_EXHAUSTED"},[o.FAILED_PRECONDITION]:{tooltip:"is returned if the operation was rejected because of the system not being in the required state for the\n                operation's execution. For example, the directory to be deleted is non-empty, an rmdir operation is\n                applied to a non-directory, etc.",summary:"Failed precondition",description:"Make sure you’re using the correct configuration to invoke the method.",codeName:"FAILED_PRECONDITION",exampleDescription:"Configuration of the request doesn’t match the server requirements."},[o.ABORTED]:{tooltip:"is returned if the operation was aborted, typically due to a concurrency issue such as a sequencer check\n                failure or transaction abort.",summary:"Operation aborted",description:"The server has aborted the operation because of an error.",codeName:"ABORTED"},[o.OUT_OF_RANGE]:{tooltip:"is returned if the operation was attempted past the valid range. For example, seeking or reading past end-of-file.",summary:"Operation out of range",description:"The operation attempted is past the valid range.",codeName:"OUT_OF_RANGE"},[o.UNIMPLEMENTED]:{tooltip:"is returned if the operation is not implemented or is not supported/enabled in this service.",summary:"Operation unavailable",description:"The operation you’re trying perform is not supported by the server.",codeName:"UNIMPLEMENTED"},[o.INTERNAL]:{tooltip:"is returned if there’s an internal error. This means that some invariants expected by the underlying system have been broken.",summary:"Internal error",description:"Operation couldn’t be completed because of an internal error at the server.",codeName:"INTERNAL"},[o.UNAVAILABLE]:{tooltip:"is returned if the service is currently unavailable.",summary:"Service unavailable",description:"The service is currently unavailable. Make sure you are using the correct URL and have TLS enabled (if required).",codeName:"UNAVAILABLE",exampleDescription:"The service is currently unavailable."},[o.DATA_LOSS]:{tooltip:"is returned if there is an irrecoverable data loss or corruption.",summary:"Irrecoverable data loss",description:"There was an irrecoverable data loss while performing this operation.",codeName:"DATA_LOSS"},[o.UNAUTHENTICATED]:{tooltip:"is returned if the request does not have valid authentication credentials for the operation.",summary:"Could not authorize the operation",description:"Make sure you have the authentication and certificates configured (if required) and try invoking the method again.",codeName:"UNAUTHENTICATED",exampleDescription:"Authorization settings do not match the server requirements."}}},72018:(e,t,r)=>{r.d(t,{Z:()=>Tc});var o=r(7560),n=r(40540),s=r.n(n),a=r(25892),i=r.n(a),l=r(58560),c=r(49437),d=r(80047),p=r(96364),u=r(44025),h=r(63622),g=r(50916),m=r(75301);const x=()=>{const e=(0,m.Z)();return[e.url,e.setURL]};var v=r(60607),f=r(80605),b=r(22922),y=r(44306),j=r(29706),Z=r(26081),w=r(20856);let k;const S=i()(w.ZP)(k||(k=(e=>e)`
  .tippy-content {
    background-color: var(--background-color-primary);
  }

  .tippy-svg-arrow > svg > path {
    fill: var(--background-color-primary);
  }
`)),C="http",E="ws-raw",R="grpc";var P=r(15837),D=r(52322);let I,T,N,O,L,A=e=>e;const M=i().div(I||(I=A`
  height: 24px;
  width: 24px;
  box-sizing: border-box;
`)),z=i()(f.Z)(T||(T=A`
  height: 24px;
  width: 24px;
  background-color: var(--background-color-tertiary);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  cursor: pointer;

  &:hover {
    background-color: var(--highlight-background-color-tertiary);
  }

  > i > svg > path {
    fill: ${0};
  }
`),(e=>e.theme[e.color])),q=i().div(N||(N=A`
  padding-left: var(--spacing-s);
  padding-top: var(--spacing-xs);
`)),$=i()(Z.Link)(O||(O=A`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: var(--line-height-xl);
  padding: var(--spacing-zero) var(--spacing-s);
  border-radius: var(--border-radius-default);

  &:hover {
    background-color: var(--background-color-tertiary);
  }

  color: var(--content-color-primary);
`)),F=i().div(L||(L=A`
  margin-left: var(--spacing-s);
`)),_={[C]:{label:"HTTP",Icon:b.Z,iconColor:"content-color-success"},[E]:{label:"WebSocket",Icon:y.Z,iconColor:"content-color-brand"},[R]:{label:"gRPC",Icon:j.Z,iconColor:"content-color-info"}},U={[C]:"/request/create",[E]:"/ws-raw-request/create",[R]:"/grpc-request/create"},W=()=>{const e=(0,v.useParams)(),t=(0,v.useMatch)("/workspace/:workspaceId/:protocol/create"),[r,o]=s().useState(!1);if(!t)return(0,D.jsx)(q,{children:(0,D.jsx)(j.Z,{color:"content-color-info","data-testid":"aether-icon-gRPC"})});const n=(0,D.jsx)(z,{type:"secondary",icon:(0,D.jsx)(j.Z,{"data-testid":"aether-icon-gRPC"}),color:"content-color-info",onClick:()=>o((e=>!e)),"data-testid":"protocol-switcher"});return(0,D.jsx)(M,{children:(0,D.jsx)(S,{trigger:n,isOpen:r,onClickOutside:()=>o(!1),children:Object.keys(_).map((t=>{const{label:r,Icon:n}=_[t];return(0,D.jsxs)($,{to:`/workspace/${e.workspaceId}${U[t]}`,onClick:()=>{P.AnalyticsService.addEventV2({category:"request",action:"switch-protocol",label:t}),o(!1)},children:[(0,D.jsx)(n,{color:_[t].iconColor}),(0,D.jsx)(F,{children:r})]},t)}))})})};let V;const H=i().div(V||(V=(e=>e)`
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
  box-sizing: border-box;
  height: 48px;
  padding: var(--spacing-s) var(--spacing-s);
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
`)),B=(0,g.observer)((()=>{const[e]=x(),t=(0,n.useMemo)((()=>e||"Untitled gRPC Request"),[e]),{setTabTitle:r}=(0,u.useTabTitleMeta)();return(0,n.useEffect)((()=>{r(t,"grpc")}),[t,r]),(0,D.jsxs)(l.Z,{direction:"row",alignItems:"center",gap:"spacing-s",children:[(0,D.jsx)(W,{}),(0,D.jsx)(h.ZP,{color:"content-color-primary",type:"strong",children:t})]})})),G=()=>(0,D.jsx)(H,{children:(0,D.jsx)(B,{})});var J=r(80346),K=r(99419),X=r(74962);const Y=()=>{const e=(0,m.Z)();return[e.payload.settings.secureConnection,e.setSecured]},Q=({popoverTriggerRef:e,isPopoverOpen:t,showPopover:r,hidePopover:o})=>{const[n]=Y();return(0,D.jsx)(w.ZP,{maxWidth:300,padding:"spacing-zero",isOpen:t,placement:"bottom-start",triggerRef:e,children:(0,D.jsx)("div",{onMouseEnter:r,onMouseLeave:o,children:(0,D.jsx)(l.Z,{direction:"column",gap:"spacing-l",alignItems:"flex-start",padding:"spacing-l",children:(0,D.jsxs)(l.Z,{direction:"column",gap:"spacing-s",children:[(0,D.jsx)(X.Z,{type:"h3",text:n?"Disable TLS":"Enable TLS"}),(0,D.jsxs)(h.ZP,{type:"para",color:"content-color-secondary",children:[(0,D.jsx)(h.ZP,{type:"strong",children:`Currently using ${n?"a secured":"an unsecured"} connection.`}),(0,D.jsx)("br",{}),(0,D.jsx)(h.ZP,{type:"body-medium",children:n?" Disable TLS to invoke the method over an unsecured connection.":" Enable TLS to invoke the method over a secured connection."})]})]})})})})},ee=()=>{var e,t;const r=(0,m.Z)();return{error:r.proto.error,source:r.proto.source,services:null==(e=r.proto.data)?void 0:e.services,isFetching:r.proto.isFetching,fetchingSource:r.proto.fetchingSource,proto:null==(t=r.proto)?void 0:t.data}},te=()=>(0,m.Z)().response.initialized,re=()=>(0,m.Z)().response.status,oe=()=>(0,m.Z)().request.invoking,ne=()=>(0,m.Z)().cancelRequest,se=()=>(0,m.Z)().events||[],ae=()=>(0,m.Z)().response.metadata,ie=()=>{var e;return(null==(e=(0,m.Z)().response.status)?void 0:e.metadata)||[]};let le,ce,de,pe=e=>e;const ue=i()(l.Z)(le||(le=pe`
  flex: 1 1 0px;
  height: 40px;
  padding: var(--spacing-xs);
  border-top-left-radius: var(--spacing-xs);
  border-bottom-left-radius: var(--spacing-xs);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  border-right: none;

  &:focus-within {
    box-shadow: 0 0 0 2px var(--base-color-info);
    border-right: none;
    border: var(--border-width-default) var(--border-style-solid)
      var(--base-color-info);
    z-index: 1;
  }
`)),he=i()(f.Z)(ce||(ce=pe`
  background: var(--background-color-primary);
  svg path {
    fill: var(--content-color-secondary);
  }
  &:hover {
    svg path {
      fill: var(--content-color-primary);
    }
  }
`)),ge=i().input(de||(de=pe`
  background: var(--background-color-primary);
  color: var(--content-color-primary);
  font-size: var(--text-size-m);
  border-radius: 0;
  border: none;
  outline: none;
  padding-left: var(--spacing-xs);
  padding-right: var(--spacing-m);
  width: 100%;

  &::placeholder {
    color: var(--content-color-tertiary);
  }

  &:hover,
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`)),me=(0,g.observer)((()=>{const[e,t]=Y(),r=oe(),o=(0,n.useRef)(),[s,a]=x();(()=>{const[e]=x(),[t]=Y(),{services:r,isFetching:o,source:s}=ee(),a=!!r&&"cache"!==s,i=(0,m.Z)();(0,n.useEffect)((()=>{if(a||o||!e)return()=>null;const t=setTimeout((()=>{i.loadProto("reflection")}),500);return()=>{t&&clearTimeout(t)}}),[e,i]),(0,n.useEffect)((()=>{!a&&e&&i.loadProto("reflection")}),[t,i])})();const i=r,l=(0,n.useRef)(),[c,d]=(0,n.useState)(!1),p=()=>{clearTimeout(l.current),i||(l.current=setTimeout((()=>d(!0)),500))},u=()=>{clearTimeout(l.current),l.current=setTimeout((()=>d(!1)),100)};return(0,D.jsxs)(ue,{children:[(0,D.jsxs)("div",{"aria-label":e?"Secure Connection":"Unsecure Connection",children:[(0,D.jsx)(he,{icon:e?(0,D.jsx)(J.Z,{}):(0,D.jsx)(K.Z,{}),onClick:()=>t(!e),type:"button",ref:o,onMouseEnter:p,onMouseLeave:u,isDisabled:i}),(0,D.jsx)(Q,{popoverTriggerRef:o,showPopover:p,hidePopover:u,isPopoverOpen:c})]}),(0,D.jsx)(ge,{value:s,onChange:e=>{a(e.target.value)},placeholder:"Enter Server URL",disabled:i})]})}));var xe=r(81397),ve=r(31776),fe=r(10789),be=r(72229),ye=r.n(be),je=r(37110),Ze=r(54073);const we=r.n(Ze)()((async function(e,t,{offset:r,search:o,shouldReset:n},s,a){try{const a=await e({offset:r,search:""===o?void 0:o,shouldReset:n});t.current=!a,s&&s()}catch(e){a&&a(e)}}),1e3);var ke=r(92490),Se=r(35736),Ce=r(56415),Ee=r(9922);let Re,Pe,De,Ie,Te=e=>e;function Ne(e){return(0,D.jsx)(ke.c.DropdownIndicator,(0,o.Z)({},e,{children:(0,D.jsx)(Ce.Z,{})}))}const Oe=i()(f.Z)(Re||(Re=Te`
  background-color: ${0};
`),(e=>e.theme["background-color-primary"]));function Le(e){const{isFocused:t}=e;return(0,D.jsx)(D.Fragment,{children:t?(0,D.jsx)(ke.c.ClearIndicator,(0,o.Z)({},e,{children:(0,D.jsx)(Oe,{type:"tertiary",size:"small",tooltip:"Clear",icon:(0,D.jsx)(Ee.Z,{})})})):null})}const Ae=i().div(Pe||(Pe=Te`
  font-size: ${0};
  line-height: ${0};
  text-align: left;
  padding: ${0};
  color: ${0};
`),(e=>e.theme["text-size-m"]),(e=>e.theme["line-height-m"]),(e=>`${e.theme["spacing-xs"]} ${e.theme["spacing-m"]};`),(e=>e.theme["content-color-secondary"]));function Me(e){const{selectProps:{emptyStateMessage:t}}=e;return(0,D.jsx)(ke.c.NoOptionsMessage,(0,o.Z)({},e,{children:(0,D.jsx)(Ae,{children:t})}))}function ze({width:e="auto"}){return(0,D.jsx)(l.Z,{padding:{paddingTop:"spacing-xxl",paddingBottom:"spacing-xxl"},justifyContent:"center",alignItems:"center",width:e,children:(0,D.jsx)(Se.Z,{})})}const qe=i().div(De||(De=Te`
  color: ${0};
`),(e=>e.theme["content-color-secondary"]));function $e(e){const{children:t}=e;return(0,D.jsx)(ke.c.GroupHeading,(0,o.Z)({},e,{children:(0,D.jsx)(qe,{children:t})}))}const Fe=i().div(Ie||(Ie=Te`
  background-color: ${0};
  box-shadow: ${0};
  padding-left: ${0};
  padding-right: ${0};
  border-radius: ${0};
`),(e=>e.theme["background-color-primary"]),(e=>e.theme["popover-box-shadow"]),(e=>e.theme["spacing-xs"]),(e=>e.theme["spacing-xs"]),(e=>e.theme["border-radius-default"]));function _e(e){const{children:t}=e;return(0,D.jsx)(ke.c.Menu,(0,o.Z)({},e,{children:(0,D.jsx)(Fe,{children:t})}))}var Ue=r(98283),We=r(52385);const Ve=s().createContext({offsetLoading:!1,searching:!1,offsetLoadingFailed:!1,searchingFailed:!1,isCreatingOption:!1,optionLength:0,retry:()=>null}),He=Ve.Provider,Be=["isSelected","isDisabled","isFocused","children"];let Ge,Je,Ke,Xe,Ye,Qe,et,tt=e=>e;const rt=i().div(Ge||(Ge=tt`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${0};
  line-height: ${0};
  padding: ${0};
  border-radius: ${0};
  color: ${0};

  & > .aether-dropdown__selected-option {
    margin-right: ${0};
    svg path {
      fill: ${0};
    }
  }

  ${0}

  ${0}
`),(e=>e.theme["text-size-m"]),(e=>e.theme["line-height-m"]),(e=>`${e.theme["spacing-xs"]} ${e.theme["spacing-s"]};`),(e=>e.theme["border-radius-default"]),(e=>e.theme["content-color-primary"]),(e=>e.theme["spacing-s"]),(e=>e.theme["content-color-secondary"]),(e=>e.isFocused&&!e.isDisabled&&`background-color: ${e.theme["highlight-background-color-primary"]};`),(e=>e.isDisabled&&`\n      cursor: not-allowed;\n      color: ${e.theme["content-color-tertiary"]};\n    `)),ot=i().div(Je||(Je=tt`
  display: flex;
  flex-shrink: 0;
  margin-right: ${0};
  width: ${0};
  height: ${0};
`),(e=>e.theme["spacing-s"]),(e=>e.theme["size-xs"]),(e=>e.theme["size-xs"])),nt=i().div(Ke||(Ke=tt`
  padding: 4px 8px;
`));function st(e){const{isSelected:t,isDisabled:r,isFocused:s,children:a}=e,i=(0,Ue.Z)(e,Be),[l,c]=(0,n.useState)(!0);return(0,D.jsx)(ke.c.Option,(0,o.Z)({},i,{children:(0,D.jsxs)(rt,{onMouseEnter:()=>c(!1),onMouseLeave:()=>c(!0),isDisabled:r,isFocused:s&&!l,children:[t?(0,D.jsx)(We.Z,{className:"aether-dropdown__selected-option"}):(0,D.jsx)(ot,{}),a]})}))}const at=i()(ke.c.MenuList)(Xe||(Xe=tt`
  & .aether-dropdown__group:not(:last-child) {
    margin-bottom: 12px;
  }

  & .aether-dropdown__group:first-child {
    padding-top: 4px;
  }
`));function it(e){const{children:t,selectProps:{components:{Footer:r,Header:n}}}=e,{offsetLoading:a,searching:i,offsetLoadingFailed:c,searchingFailed:d,isCreatingOption:p,optionLength:u,retry:g}=s().useContext(Ve);return(0,D.jsxs)(l.Z,{direction:"column",children:[n&&(0,D.jsx)(n,{}),(0,D.jsx)(at,(0,o.Z)({},e,{children:(0,D.jsxs)("div",{children:[!(c&&0===u)&&!i&&!d&&!p&&t,(i||a||p)&&(0,D.jsx)(ze,{}),(c||d)&&(0,D.jsx)(nt,{children:(0,D.jsxs)(l.Z,{justifyContent:"center",alignItems:"center",children:[(0,D.jsx)(h.ZP,{type:"para",children:"Failed to load options. "}),(0,D.jsx)(f.Z,{onClick:g,type:"monochrome-plain",text:"Retry"})]})})]})})),r&&(0,D.jsx)(lt,{children:(0,D.jsx)(r,{})})]})}const lt=i().div(Ye||(Ye=tt`
  flex-shrink: 0;
`));function ct(){return null}const dt=i().span(Qe||(Qe=tt`
  color: ${0};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`),(e=>e.theme["content-color-tertiary"])),pt=i()(ke.c.Input)(et||(et=tt`
  && {
    margin: 0px;
    flex-grow: 0;
    flex-shrink: 0;
    display: inline-block;
    height: 32px;
    padding: 6px 0px;
    ${0}
  }
`),(e=>e.value?`width: ${8*e.value.length}px !important`:"width: 2px !important"));function ut(e){const{selectProps:t,value:r,hasValue:n}=e,{placeholder:s,controlShouldRenderValue:a}=t;return n&&a?(0,D.jsx)(pt,(0,o.Z)({},e)):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(pt,(0,o.Z)({},e)),!r&&(0,D.jsx)(dt,{children:s})]})}function ht(e){const{selectProps:t,hasValue:r,children:n}=e,{placeholder:s,isSearchable:a}=t;return r||a?(0,D.jsx)(ke.c.ValueContainer,(0,o.Z)({},e)):(0,D.jsxs)(ke.c.ValueContainer,(0,o.Z)({},e,{children:[(0,D.jsx)(dt,{children:s}),n]}))}function gt(e){const{data:t}=e;return(0,D.jsx)(ke.c.SingleValue,(0,o.Z)({},e,{children:t.label}))}let mt;const xt=(0,a.css)(mt||(mt=(e=>e)`
  & .aether-dropdown__control {
    border-color: var(--border-color-default) !important;
    background-color: ${0};
    ${0}

    & .aether-dropdown__value-container {
      color: ${0};
    }

    & .aether-dropdown__single-value {
      color: ${0};
    }

    & .aether-dropdown__dropdown-indicator {
      svg path {
        fill: ${0};
      }
      padding: ${0};
    }

    &--is-focused {
      outline: none;
      font-size: var(--text-size-m);
      border: ${0};
      box-shadow: ${0};

      &:hover {
        border: ${0};
      }
    }

    &--is-disabled {
      user-select: none;
      cursor: not-allowed;
      background: ${0};
      border: ${0};
      color: ${0};

      & .aether-dropdown__dropdown-indicator svg path {
        fill: ${0};
      }

      & .aether-dropdown__single-value {
        color: ${0};
      }

      &:hover {
        border-color: ${0};
      }
    }

    ${0}
  }

  & .aether-dropdown__input {
    caret-color: ${0};
    color: ${0} !important;
    opacity: 1 !important;
    height: 20px;

    &::placeholder {
      color: ${0};
    }
  }

  & .aether-dropdown__indicators {
    height: 100%;
  }
`),(e=>e.theme["background-color-primary"]),(e=>{const{triggerType:t,theme:r}=e;return"tertiary"===t?`\n          border: ${r["border-width-default"]} ${r["border-style-solid"]} transparent;\n\n          &:hover {\n            border: ${r["border-width-default"]} ${r["border-style-solid"]} transparent;\n          }\n\n          & .aether-dropdown__value-container {\n            padding-left: ${r["spacing-s"]};\n          }\n        `:`\n        border: ${r["border-width-default"]} ${r["border-style-solid"]} ${r["input-border-color-default"]};\n      `}),(e=>e.theme["content-color-primary"]),(e=>e.theme["content-color-primary"]),(e=>e.theme["content-color-secondary"]),(e=>`${e.theme["spacing-zero"]} ${e.theme["spacing-s"]} ${e.theme["spacing-zero"]} ${e.theme["spacing-zero"]};`),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["input-border-color-focus"]};`),(e=>`0 0 0 2px ${e.theme["input-shadow-focus"]};`),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["input-border-color-focus"]};`),(e=>e.theme["input-background-color-disabled"]),(e=>`${e.theme["border-width-default"]} ${e.theme["border-style-solid"]} ${e.theme["border-color-strong"]};`),(e=>e.theme["content-color-tertiary"]),(e=>e.theme["content-color-tertiary"]),(e=>e.theme["content-color-tertiary"]),(e=>e.theme["border-color-strong"]),(e=>{const{validationState:t,theme:r}=e;return t.status?`\n          border-color: ${r[`input-border-color-${t.status}`]};\n\n          &:hover {\n            border-color: ${r[`input-border-color-${t.status}`]};\n          }\n\n          &--is-focused,\n          &--is-focused:hover {\n            border-color: ${r["input-border-color-focus"]};;\n          }\n        `:""}),(e=>e.theme["content-color-primary"]),(e=>e.theme["content-color-primary"]),(e=>e.theme["content-color-tertiary"]));let vt;const ft=i().div(vt||(vt=(e=>e)`
  ${0};
  flex-direction: column;
`),(e=>"auto"===e.triggerWidth?"display: inline-flex;":"display: flex;")),bt=s().forwardRef(((e,t)=>{const{children:r,triggerWidth:o}=e;return(0,D.jsx)(ft,{ref:t,triggerWidth:o,"data-aether-id":"aether-dropdown",children:r})}));bt.displayName="DropdownContainer";const yt=bt;let jt;bt.propTypes={children:ye().node.isRequired};const Zt=i().div(jt||(jt=(e=>e)`
  margin-bottom: ${0};
`),(e=>e.theme["spacing-xs"]));function wt(e,t){return"string"==typeof e?(0,D.jsx)(je.Z,{type:"primary",text:e,htmlFor:t}):e&&s().isValidElement(e)&&e.type===je.Z?s().cloneElement(e,{type:"primary",htmlFor:t}):null}function kt(e){const{label:t,helperText:r,id:o}=e;return(0,D.jsx)(D.Fragment,{children:t||r?(0,D.jsxs)(Zt,{children:[wt(t,o),r&&(0,D.jsx)(h.ZP,{type:"_input-meta-text",children:r})]}):null})}kt.defaultProps={label:"",helperText:"",id:""},kt.propTypes={label:e=>{const{label:t}=e;return t&&t.type!==je.Z&&"string"!=typeof t?new Error("DropdownLabel: label prop only accepts string or the Aether's Label component as valid value."):null},helperText:ye().string,id:ye().string};var St=r(47503),Ct=r(37051),Et=r(16913);let Rt,Pt,Dt=e=>e;function It(e){switch(e){case"error":return(0,D.jsx)(St.Z,{color:"content-color-error"});case"success":return(0,D.jsx)(Ct.Z,{color:"content-color-success"});case"warning":return(0,D.jsx)(Et.Z,{color:"content-color-warning"});default:return null}}const Tt=i().span(Rt||(Rt=Dt`
  display: inline-block;
  margin-right: ${0};
`),(e=>e.theme["spacing-xs"])),Nt=i().p(Pt||(Pt=Dt`
  display: flex;
  align-items: center;
  font-size: ${0};
  line-height: ${0};
  color: ${0};
  margin: ${0};
`),(e=>e.theme["text-size-s"]),(e=>e.theme["line-height-s"]),(e=>e.theme[`content-color-${e.status}`]),(e=>`${e.theme["spacing-xs"]} ${e.theme["spacing-zero"]}; ${e.theme["spacing-zero"]} ${e.theme["spacing-zero"]};`));function Ot(e){const{validationState:t}=e;return(0,D.jsx)(D.Fragment,{children:t.status&&t.message&&(0,D.jsxs)(Nt,{status:t.status,children:[(0,D.jsx)(Tt,{children:It}),t.message]})})}Ot.defaultProps={validationState:{status:"",message:""}},Ot.propTypes={validationState:ye().shape({status:ye().oneOf(["","success","error","warning"]),message:ye().string})};let Lt,At,Mt=e=>e;const zt=i()(ve.ZP)(Lt||(Lt=Mt`
  ${0}
`),xt),qt=i()(fe.Z)(At||(At=Mt`
  ${0}
`),xt),$t=(0,n.forwardRef)(((e,t)=>{const{allowCreateNewOption:r,asyncLoader:s,className:a,customOptionComponent:i,emptyStateMessage:l,helperText:c,id:d,isClearable:p,isDisabled:u,isLoading:h,isOptionDisabled:g,isOpen:m,isSearchable:x,label:v,menuMaxHeight:f,menuMaxWidth:b,menuMinWidth:y,menuPlacement:j,menuWidth:Z,onChange:w,onClose:k,onCreateNewOption:S,onOpen:C,onInputChange:E,filterOption:R,options:P,placeholder:I,triggerType:T,triggerWidth:N,triggerMaxWidth:O,validationState:L,value:A,viaPortal:M,controlShouldRenderValue:z,"aria-label":q,"aria-labelledby":$,"data-testid":F,"data-click":_,Footer:U,Header:W}=e,V=(0,n.useRef)(null),H=(0,n.useRef)(!1),B=(0,n.useRef)(P.length),[G,J]=(0,n.useState)(""),[K,X]=(0,n.useState)(""),[Y,Q]=(0,n.useState)(""),[ee,te]=(0,n.useState)({offsetLoading:!1,offsetLoadingFailed:!1,searching:!1,searchingFailed:!1,isCreatingOption:!1}),[re,oe]=(0,n.useState)(""),[ne,se]=(0,n.useState)();function ae(e,{action:t,option:r}){w(e,{action:t,option:r})}const ie=({offset:e,search:t,shouldReset:r},o,n)=>we(s,H,{offset:e,search:t,shouldReset:r},o,n),le=()=>{!s||H.current||ee.offsetLoading||ee.offsetLoadingFailed||ee.searching||ee.searchingFailed||(te((e=>(0,o.Z)({},e,{offsetLoading:!0}))),ie({offset:B.current,search:re},(()=>{te((e=>(0,o.Z)({},e,{offsetLoading:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{offsetLoading:!1,offsetLoadingFailed:!0})))})),we.flush())},ce=(e,t)=>{if(ee.isCreatingOption)return void oe("");const r=re;oe(e),E&&E(e),s&&(H.current=!1,"input-change"===t.action?(te((e=>(0,o.Z)({},e,{searching:!0,searchingFailed:!1,offsetLoadingFailed:!1}))),ie({offset:0,shouldReset:!0,search:e},(()=>{te((e=>(0,o.Z)({},e,{searching:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{searching:!1,searchingFailed:!0})))}))):"menu-close"===t.action&&r!==e&&(te((e=>(0,o.Z)({},e,{searching:!0,searchingFailed:!1,offsetLoadingFailed:!1}))),we.cancel(),ie({offset:0,shouldReset:!0,search:e},(()=>{te((e=>(0,o.Z)({},e,{searching:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{searching:!1,searchingFailed:!0})))})),we.flush()))};(0,n.useEffect)((()=>{"parent"===N&&V.current&&(V.current.offsetWidth?Q(V.current.offsetWidth):Q("auto"))}),[Y]),(0,n.useEffect)((()=>{J("number"==typeof N?N:"auto"===N?"fit-content":"full"===N?"100%":Y)}),[Y]),(0,n.useEffect)((()=>{X("number"==typeof Z?Z:"auto"===N||"full"===N?"100%":Y)}),[N,Y]),(0,n.useEffect)((()=>{s&&(te((e=>(0,o.Z)({},e,{offsetLoading:!0,offsetLoadingFailed:!1}))),ie({offset:0,shouldReset:!0},(()=>{te((e=>(0,o.Z)({},e,{offsetLoading:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{offsetLoading:!1,offsetLoadingFailed:!0})))})),we.flush())}),[]),(0,n.useEffect)((()=>{B.current=P.length}),[P]);const de=!(ee&&(ee.offsetLoading||ee.offsetLoadingFailed));return(0,D.jsx)(He,{value:(0,o.Z)({},ee,{retry:()=>{const{searchingFailed:e,offsetLoadingFailed:t}=ee;s&&(te((r=>(0,o.Z)({},r,{searching:!!e||r.searching,offsetLoading:!!t||r.offsetLoading,offsetLoadingFailed:!1,searchingFailed:!1}))),ie({offset:e?0:B.current,shouldReset:e,search:re},(()=>{te((r=>(0,o.Z)({},r,{offsetLoading:!t&&r.offsetLoading,searching:!e&&r.searching})))}),(()=>{te((r=>(0,o.Z)({},r,{offsetLoading:!t&&r.offsetLoading,searching:!e&&r.searching,offsetLoadingFailed:!!t||r.offsetLoadingFailed,searchingFailed:!!e||r.searchingFailed})))})),we.flush())},optionLength:B.current}),children:(0,D.jsxs)(yt,{ref:V,triggerWidth:N,children:[(0,D.jsx)(kt,{id:d,label:v,helperText:c}),r?(0,D.jsx)(qt,(0,o.Z)({inputId:d,inputValue:re,onInputChange:ce,onMenuScrollToBottom:le,menuIsOpen:m},M&&{menuPortalTarget:document.querySelector("#aether-dropdown-portal")},{onChange:A?ae:se,onCreateOption:S&&(async e=>{if(s&&S){te((e=>(0,o.Z)({},e,{isCreatingOption:!0})));try{const t=await S(e);A?w(t):se(t),ie({offset:0,shouldReset:!0},(()=>{te((e=>(0,o.Z)({},e,{isCreatingOption:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{isCreatingOption:!1})))})),we.flush()}catch(e){console.error("Could not create new option"),ie({offset:0,shouldReset:!0},(()=>{te((e=>(0,o.Z)({},e,{isCreatingOption:!1})))}),(()=>{te((e=>(0,o.Z)({},e,{isCreatingOption:!1})))})),we.flush()}}}),onMenuClose:k,onMenuOpen:C,value:A||ne,options:P,placeholder:s&&ee.isCreatingOption?"Creating option":I,isClearable:p,isSearchable:x,isDisabled:u,"aria-label":q,"aria-labelledby":$},g&&{isOptionDisabled:g},{emptyStateMessage:de&&l,formatOptionLabel:i,validationState:L,classNamePrefix:"aether-dropdown",className:a,"data-testid":F,"data-click":_,maxMenuHeight:f,menuPlacement:j,filterOption:s?()=>!0:void 0,isValidNewOption:s?()=>0===B.current&&""!==re:void 0,triggerType:T,controlShouldRenderValue:z,styles:{clearIndicator:e=>(0,o.Z)({},e,{padding:0}),container:e=>(0,o.Z)({},e,{pointerEvents:"auto"}),control:e=>(0,o.Z)({},e,{width:G,maxWidth:O,boxSizing:"border-box",display:"flex",alignItems:"center",minHeight:0,height:"32px",transition:"border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out"}),input:e=>(0,o.Z)({},e,{display:"flex"}),group:e=>(0,o.Z)({},e,{padding:0,margin:0}),groupHeading:e=>(0,o.Z)({},e,{userSelect:"none",fontSize:"11px",fontWeight:600,lineHeight:"16px",marginBottom:"4px",padding:"0px 12px",textTransform:"none"}),menu:e=>(0,o.Z)({},e,{width:K,minWidth:y,maxWidth:b,paddingLeft:"4px",paddingRight:"4px",border:"none",zIndex:1e3}),menuList:e=>(0,o.Z)({},e,{paddingTop:"8px",paddingBottom:"8px"}),menuPortal:e=>(0,o.Z)({},e,{zIndex:1e3}),noOptionsMessage:e=>(0,o.Z)({},e,{padding:0}),option:e=>(0,o.Z)({},e,{padding:0,":active":{backgroundColor:"transparent"}}),placeholder:e=>(0,o.Z)({},e,{position:"static",transform:"none",fontSize:"12px",lineHeight:"20px",left:"12px",right:"16px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}),singleValue:e=>(0,o.Z)({},e,{maxWidth:"100%",position:"static",transform:"none",left:"12px",right:"24px"}),valueContainer:e=>(0,o.Z)({},e,{display:"flex",position:"static",height:"100%",flexWrap:"nowrap",padding:"0px 12px",paddingRight:"4px",fontSize:"12px"})},components:{ClearIndicator:Le,DropdownIndicator:Ne,IndicatorSeparator:null,Input:ut,Menu:_e,MenuList:h?ze:it,NoOptionsMessage:Me,Option:st,Placeholder:ct,GroupHeading:$e,SingleValue:gt,ValueContainer:ht,Footer:U,Header:W}})):(0,D.jsx)(zt,(0,o.Z)({ref:t,inputId:d,inputValue:re,onInputChange:ce,onMenuScrollToBottom:le,menuIsOpen:m},M&&{menuPortalTarget:document.querySelector("#aether-dropdown-portal"),closeMenuOnScroll:e=>e.target.contains(V.current)},{onChange:ae,onMenuClose:k,onMenuOpen:C,value:A,options:P,placeholder:I,isClearable:p,isSearchable:x,isDisabled:u,"aria-label":q,"aria-labelledby":$},g&&{isOptionDisabled:g},{emptyStateMessage:de&&l,formatOptionLabel:i,validationState:L,classNamePrefix:"aether-dropdown",className:a,maxMenuHeight:f,"data-testid":F,"data-click":_,menuPlacement:j,filterOption:s?()=>!0:R,triggerType:T,controlShouldRenderValue:z,styles:{clearIndicator:e=>(0,o.Z)({},e,{padding:0}),container:e=>(0,o.Z)({},e,{pointerEvents:"auto"}),control:e=>(0,o.Z)({},e,{width:G,maxWidth:O,boxSizing:"border-box",display:"flex",alignItems:"center",minHeight:0,height:"32px",transition:"border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out"}),input:e=>(0,o.Z)({},e,{display:"flex"}),group:e=>(0,o.Z)({},e,{padding:0,margin:0}),groupHeading:e=>(0,o.Z)({},e,{userSelect:"none",fontSize:"11px",fontWeight:600,lineHeight:"16px",marginBottom:"4px",padding:"0px 12px",textTransform:"none"}),menu:e=>(0,o.Z)({},e,{width:K,minWidth:y,maxWidth:b,paddingLeft:"0px",paddingRight:"0px",border:"none",zIndex:1e3}),menuList:e=>(0,o.Z)({},e,{paddingTop:"8px",paddingBottom:"8px"}),menuPortal:e=>(0,o.Z)({},e,{zIndex:1e3}),noOptionsMessage:e=>(0,o.Z)({},e,{padding:0}),option:e=>(0,o.Z)({},e,{padding:0,":active":{backgroundColor:"transparent"}}),placeholder:e=>(0,o.Z)({},e,{position:"static",transform:"none",fontSize:"12px",lineHeight:"20px",left:"12px",right:"16px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}),singleValue:e=>(0,o.Z)({},e,{maxWidth:"100%",position:"static",transform:"none",left:"12px",right:"24px"}),valueContainer:e=>(0,o.Z)({},e,{display:"flex",position:"static",height:"100%",flexWrap:"nowrap",padding:"0px 12px",paddingRight:"4px",fontSize:"12px"})},components:{ClearIndicator:Le,DropdownIndicator:Ne,IndicatorSeparator:null,Input:ut,Menu:_e,MenuList:h?ze:it,NoOptionsMessage:Me,Option:st,Placeholder:ct,GroupHeading:$e,SingleValue:gt,ValueContainer:ht,Footer:U,Header:W}})),(0,D.jsx)(Ot,{validationState:L})]})})}));$t.defaultProps={isOpen:void 0,onClose:null,onCreateNewOption:void 0,onOpen:null,value:null,placeholder:"Select option",emptyStateMessage:"No options found",label:"",helperText:"",id:"","aria-label":void 0,"aria-labelledby":void 0,triggerWidth:"parent",triggerMaxWidth:null,triggerType:"outline",menuMaxHeight:"auto",menuMaxWidth:"auto",menuMinWidth:200,menuPlacement:"auto",menuWidth:"parent",className:"",isClearable:!0,isSearchable:!0,isDisabled:!1,isOptionDisabled:()=>null,allowCreateNewOption:!1,customOptionComponent:null,validationState:{status:"",message:""},"data-testid":"aether-dropdown","data-click":"",isLoading:!1,viaPortal:!1,asyncLoader:void 0,onInputChange:null,filterOption:void 0,Header:null,controlShouldRenderValue:!0},$t.propTypes={asyncLoader:ye().func,onChange:ye().func.isRequired,options:ye().arrayOf(ye().shape({label:ye().string,value:ye().oneOfType([ye().string,ye().number])})).isRequired,value:ye().object,isOpen:ye().bool,onClose:ye().func,onCreateNewOption:e=>{const{allowCreateNewOption:t,onCreateNewOption:r}=e;return!t&&r?new Error("Dropdown: onCreateNewOption is only allowed to be used when the prop allowCreateNewOption is passed as true."):r&&"function"!=typeof r?new Error("Dropdown: Expected the type of the onCreateNewOption to be a function."):null},onOpen:ye().func,placeholder:ye().string,emptyStateMessage:ye().oneOfType([ye().element,ye().string]),label:e=>{const{label:t}=e;return t&&t.type!==je.Z&&"string"!=typeof t?new Error("Dropdown: label prop only accepts string or the Aether's Label component as valid value."):null},helperText:ye().string,id:ye().string,"aria-label":ye().string,"aria-labelledby":ye().string,triggerWidth:ye().oneOfType([ye().number,ye().string]),triggerMaxWidth:ye().oneOfType([ye().number,ye().string]),triggerType:ye().oneOf(["outline","tertiary"]),menuMaxHeight:ye().oneOfType([ye().number,ye().string]),menuMaxWidth:ye().oneOfType([ye().number,ye().string]),menuMinWidth:ye().oneOfType([ye().number,ye().string]),menuPlacement:ye().oneOf(["bottom","top","auto"]),menuWidth:ye().oneOfType([ye().number,ye().string]),className:ye().string,isClearable:ye().bool,isSearchable:ye().bool,isDisabled:ye().bool,isOptionDisabled:ye().func,allowCreateNewOption:ye().bool,customOptionComponent:ye().func,validationState:ye().shape({status:ye().oneOf(["","success","error","warning"]),message:ye().string}),"data-testid":ye().string,"data-click":ye().string,isLoading:ye().bool,viaPortal:ye().bool,onInputChange:ye().func,filterOption:ye().func,Header:ye().elementType,controlShouldRenderValue:ye().bool};const Ft=$t;var _t=r(17815),Ut=r(21015),Wt=r(72800),Vt=r(15780);function Ht(e,t="There are errors in your composed message"){const r=s().useMemo((()=>e?e=>""===e||JSON.parse(e):()=>!0),[e]);return e=>{try{return r(e)}catch(e){}throw Object.assign(new Error(t),{isValidationError:!0})}}var Bt=r(47985),Gt=r(84419);const Jt=()=>{const e=(0,m.Z)();return[e.isRequestStreamed,e.setIsRequestStreamed]},Kt=()=>{const e=(0,m.Z)();return[e.isResponseStreamed,e.setIsResponseStreamed]};var Xt=r(81607);const Yt=()=>{const e=(0,m.Z)();return[e.activeRequestEditorTab,e.setRequestEditorTab]},Qt=()=>(0,m.Z)().cancelProtoLoading,er=/[/\\]/g;function tr(e){var t,r;return null!=e&&null!=(t=e.files)&&null!=(t=t[0])&&t.filename?null!=(r=e.files[0].filename.split(er).pop())?r:"":"unknown file"}let rr,or,nr,sr,ar,ir,lr=e=>e;const cr=i().div(rr||(rr=lr`
  margin-top: var(--spacing-s);
`)),dr=i()(f.Z)(or||(or=lr`
  white-space: nowrap;
`)),pr=i().div(nr||(nr=lr`
  padding-inline: var(--spacing-m);
  padding-block: var(--spacing-xs);
`)),ur=i().div(sr||(sr=lr`
  height: var(--border-width-default);
  width: 100%;
  background-color: var(--border-color-default);
`)),hr=i().div(ar||(ar=lr`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: fit-content;
  min-width: var(--spacing-zero);
  height: var(--size-s);
`)),gr=i().div(ir||(ir=lr`
  width: 50%;
`)),mr=(0,g.observer)((({closeDropdown:e})=>{const[,t]=Yt(),{loadProto:r}=(0,m.Z)(),{isFetching:o,source:n,fetchingSource:s,proto:a}=ee(),i=o&&"reflection"===s,c=Qt();let d=(0,D.jsx)(gr,{});return i?d=(0,D.jsx)(l.Z,{height:"var(--size-s)",alignItems:"center",children:(0,D.jsxs)(l.Z,{gap:"spacing-m",alignItems:"center",children:[(0,D.jsx)(Se.Z,{}),(0,D.jsx)("div",{children:"Loading server reflection."}),(0,D.jsx)(f.Z,{type:"monochrome-plain",text:"Cancel",onClick:()=>{c("reflection")}})]})}):"reflection"===n&&a?d=(0,D.jsxs)(l.Z,{height:"var(--size-s)",alignItems:"center",children:["Using server reflection. ",(0,D.jsx)(f.Z,{icon:(0,D.jsx)(Xt.Z,{}),size:"small",type:"muted-plain","data-testid":"reload-server-reflection",onClick:()=>r("reflection")})]}):"url"!==n&&"file"!==n||!a?"cache"===n&&(d=(0,D.jsx)(hr,{children:"Using cache"})):d=(0,D.jsxs)(hr,{children:["Temporarily using ",(0,D.jsx)(h.ZP,{color:"content-color-secondary",isTruncated:!0,children:tr(a)})]}),(0,D.jsxs)(cr,{children:[(0,D.jsx)(ur,{}),(0,D.jsx)(pr,{children:(0,D.jsxs)(l.Z,{gap:"spacing-xs",alignItems:"center",justifyContent:"space-between",children:[d,(0,D.jsx)(dr,{type:"plain",onClick:()=>{t(3),e()},text:"Change Service Definition",justifySelf:"flex-end"})]})})]})}));var xr=r(94250);let vr,fr,br=e=>e;const yr=s().memo((({isDismissible:e,message:t,primaryAction:r,primaryActionText:o,secondaryAction:n,inline:s,secondaryActionText:a,errorInfo:i,clearError:c,onViewDetails:d})=>s?(0,D.jsxs)(Zr,{onDismiss:e&&c,status:"error",type:"global",hideIcon:!0,primaryAction:o&&(0,D.jsx)(f.Z,{type:"outline",text:o,onClick:r}),children:[(0,D.jsx)(h.ZP,{type:"body-medium",color:"content-color-primary",children:t})," ",d&&(0,D.jsx)(f.Z,{onClick:d,type:"monochrome-plain",text:"View error details"}),d&&a&&" · ",a&&(0,D.jsx)(f.Z,{type:"monochrome-plain",text:a,onClick:n})]}):(0,D.jsx)(xr.Z,{status:"error",onDismiss:e&&c,primaryAction:o&&(0,D.jsx)(f.Z,{type:"outline",text:o,onClick:r}),secondaryAction:a&&(0,D.jsx)(f.Z,{type:"monochrome-plain",text:a,onClick:n}),children:(0,D.jsxs)(l.Z,{direction:"column",gap:"spacing-xs",children:[(0,D.jsx)(h.ZP,{typographyStyle:{fontSize:"text-size-m"},children:t}),i&&(0,D.jsxs)(jr,{typographyStyle:{fontFamily:"text-family-code",fontSize:"text-size-m"},children:[(0,D.jsx)(h.ZP,{typographyStyle:{fontWeight:"text-weight-medium"},children:"Details: "}),i]})]})}))),jr=i()(h.ZP)(vr||(vr=br`
  word-break: break-word;
`)),Zr=i()(xr.Z)(fr||(fr=br`
  width: 100%;
  margin: var(--spacing-s) var(--spacing-zero);
  border-radius: var(--spacing-xs);
  div {
    align-items: center;
  }
`)),wr=yr,kr=(0,g.observer)((({inline:e,onViewDetails:t})=>{const r=(0,m.Z)(),o=(0,m.Z)().resetProtoError,{source:n,services:s,error:a,isFetching:i}=ee(),l=!!s&&"cache"!==n;var c;return a&&!i&&"reflection"===n?(0,D.jsx)(wr,{inline:e,onViewDetails:t,isDismissible:l,clearError:o,message:"Could not load server reflection.",errorInfo:null!=(c=null==a?void 0:a.message)?c:"An unknown error occurred",primaryAction:()=>{r.loadProto("reflection")},primaryActionText:"Try Again"}):null})),Sr=()=>{const{cache:e}=(0,m.Z)(),{error:t,source:r}=ee(),o=t&&"reflection"===r,n="cache"===r,s=null==e?void 0:e.service;return o?(0,D.jsx)(l.Z,{padding:"spacing-m spacing-s spacing-xs",children:(0,D.jsx)(kr,{inline:!0})}):n&&s?(0,D.jsx)(l.Z,{padding:"spacing-m spacing-s spacing-xs",children:(0,D.jsx)(wr,{inline:!0,message:"Selected method doesn’t exist in the service definition."})}):null};var Cr=r(14257),Er=r(24809);const Rr=()=>{const{apiEditor:e,setSelectedAPIEditorMode:t}=(0,m.Z)();return[e.selected,t]};let Pr,Dr,Ir,Tr,Nr=e=>e;const Or=i()(l.Z)(Pr||(Pr=Nr`
  position: relative;
  flex-direction: column;
  background: var(--background-color-primary);
  color: var(--content-color-secondary);
`)),Lr=i().div(Dr||(Dr=Nr`
  -webkit-box-align: stretch;
  align-items: stretch;
  display: flex;
  flex-flow: column nowrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  flex-direction: column;
  padding: var(--spacing-m) var(--spacing-l) var(--spacing-s);
  border-top: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  &.enabled:hover {
    background: var(--background-color-tertiary);
    cursor: pointer;
  }
`)),Ar=i()(X.Z)(Ir||(Ir=Nr`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
`)),Mr=i()(h.ZP)(Tr||(Tr=Nr`
  padding: var(--spacing-s) var(--spacing-l);
  padding-top: var(--spacing-zero);
`)),zr=(0,g.observer)((({closeDropdown:e})=>{const[t]=x(),{loadProto:r}=(0,m.Z)(),[,o]=Rr(),[,n]=Yt(),{isFetching:s,fetchingSource:a,services:i}=ee(),l=s&&"reflection"===a,c=!l&&t,d=Qt();return i&&0===i.length?(0,D.jsx)(D.Fragment,{children:"No methods found"}):(0,D.jsxs)(Or,{children:[(0,D.jsx)(Mr,{type:"body-medium",color:"content-color-secondary",children:"Add a service definition to load the services and methods."}),(0,D.jsxs)(Lr,{onClick:()=>{e(),o("file"),n(3)},className:"enabled",children:[(0,D.jsx)(Ar,{color:"content-color-primary",type:"h5",text:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Cr.Z,{}),"Import a .proto file"]})}),(0,D.jsx)(h.ZP,{type:"body-medium",color:"content-color-secondary",children:"Select a .proto file from your local system"})]}),(0,D.jsxs)(Lr,{onClick:c?()=>r("reflection"):void 0,className:c?"enabled":"",children:[(0,D.jsx)(Ar,{color:"content-color-primary",type:"h5",text:(0,D.jsxs)(D.Fragment,{children:[l?(0,D.jsx)(Se.Z,{}):(0,D.jsx)(Er.Z,{}),"Use Server Reflection"]})}),l?(0,D.jsxs)(h.ZP,{type:"body-medium",color:"content-color-secondary",children:["Loading server reflection.",(0,D.jsx)(f.Z,{type:"monochrome-plain",text:"Cancel",onClick:()=>{d("reflection")}})]}):t?(0,D.jsx)(h.ZP,{color:"content-color-secondary",children:"Load methods using server reflection."}):(0,D.jsx)(h.ZP,{type:"body-medium",color:"content-color-secondary",children:"Enter server URL to load methods using server reflection."})]})]})}));let qr,$r,Fr,_r=e=>e;const Ur=i().div(qr||(qr=_r`
  flex: 2 1 0px;
`)),Wr=i()(Ft)($r||($r=_r`
  width: 100%;
  .aether-dropdown__control {
    flex: 0.7;
    width: 100%;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border: var(--border-width-default) var(--border-style-solid) transparent;
    border-left: 0px;
    height: 40px;
    cursor: text;
    padding-left: 3px;
    &::before {
      content: '';
      background-color: var(--border-color-default);
      position: absolute;
      top: 25%;
      bottom: 25%;
      left: 0px;
      width: var(--border-width-default);
    }
    &,
    &:hover,
    &:focus {
      border: var(--border-width-default) var(--border-style-solid)
        var(--border-color-strong);
      border-left: 0px;
    }
    &:focus-within {
      padding-left: 2px;
      border-left: 1px solid var(--base-color-info);

      &::before {
        display: none;
      }
    }

    // for consistent highlight colour
    &--is-focused {
      border: 1px solid var(--base-color-info);
      box-shadow: var(--base-color-info) 0 0 0 2px;
    }

    &--is-disabled {
      background: var(--background-color-primary);
    }
  }
`)),Vr=(0,g.observer)((()=>{const e=oe(),t=(0,n.useRef)(null),{services:r,source:s}=ee(),[a,i]=(()=>{const e=(0,m.Z)();return[e.payload.methodPath,e.setSelectedMethod]})(),[,l]=Jt(),[,c]=Kt(),d="cache"===s,p=(0,n.useMemo)((()=>{var e;return(null==(e=r)?void 0:e.map((e=>({label:e.name,options:e.methods.map((t=>({label:(0,D.jsx)(Hr,{method:t}),value:`${e.name}.${t.name}`,service:e,method:t})))}))))||[]}),[r]),[u,h]=(0,n.useState)(!1),g=()=>{var e;h(!1),null==(e=t.current)||e.blur()},x=p.flatMap((e=>e.options)).find((e=>e.value===a));return(0,D.jsx)(Ur,{children:(0,D.jsx)(Wr,{options:p,ref:t,value:x&&(0,o.Z)({},x,{label:(0,D.jsx)(Gr,{serviceName:x.service.name,method:x.method,showErrorIcon:d})}),isDisabled:e,onChange:e=>{i(e.value),l(e.method.requestStream),c(e.method.responseStream)},Header:Sr,isClearable:!1,menuWidth:"parent",triggerType:"tertiary",triggerMaxWidth:"100%",menuMaxHeight:350,isOpen:u,onOpen:()=>h(!0),onClose:()=>h(!1),placeholder:u?"Search for a method":"Select a method",Footer:!!r&&!!p&&(()=>(0,D.jsx)(mr,{closeDropdown:g})),emptyStateMessage:(0,D.jsx)(zr,{closeDropdown:g})})})}));function Hr({method:e}){return(0,D.jsxs)(l.Z,{isRow:!0,gap:"spacing-s",alignItems:"center",children:[(0,D.jsx)(Br,{method:e}),(0,D.jsx)("span",{children:e.name})]})}function Br({method:e}){return e.requestStream&&e.responseStream?(0,D.jsx)(_t.Z,{color:"red-40",title:"Bidirectional streaming"}):e.requestStream?(0,D.jsx)(Ut.Z,{color:"green-30",title:"Client streaming"}):e.responseStream?(0,D.jsx)(Wt.Z,{color:"yellow-30",title:"Server streaming"}):(0,D.jsx)(Vt.Z,{color:"blue-40",title:"Unary"})}function Gr({method:e,serviceName:t,showErrorIcon:r}){const o=t.split(".").slice(-1)[0];return(0,D.jsxs)(l.Z,{isRow:!0,gap:"spacing-s",alignItems:"center",children:[(0,D.jsx)(Br,{method:e}),(0,D.jsxs)("span",{children:[(0,D.jsxs)(h.ZP,{color:"content-color-secondary",children:[o," / "]}),(0,D.jsx)(h.ZP,{children:e.name})]}),r&&(0,D.jsx)(xe.Z,{content:"Couldn’t load this method from the service definition.",placement:"bottom",closeDelay:300,children:(0,D.jsx)(Jr,{color:"content-color-error"})})]})}const Jr=i()(St.Z)(Fr||(Fr=_r`
  cursor: default;
  // Added to prevent error icon flicker when consumed in GRPCProtCombobox
  margin-left: var(--spacing-zero) !important;
`)),Kr=(0,g.observer)((()=>(0,D.jsx)(Vr,{})));var Xr=r(73720);const Yr="request-send-button-paint-time",Qr="grpc-message-code-editor-paint-time",eo="request-send-button-paint-mark",to="grpc-message-code-editor-paint-mark";let ro,oo,no=e=>e;const{PerformanceMarkPaint:so}=Xr.perfComponents,ao=i()(f.Z)(ro||(ro=no`
  height: 40px;
  flex-basis: 100px;
  margin-left: var(--spacing-s);
  background-color: var(--base-color-info);
  font-size: var(--text-size-l);
  font-weight: var(--text-weight-medium);
  color: var(--content-color-constant);

  &:hover,
  &.is-hovered {
    background-color: var(--highlight-background-color-info);
  }

  &:disabled,
  &.is-cancel-button {
    opacity: 0.5;
    background-color: var(--base-color-info);
    color: var(--content-color-constant);
  }

  &:active,
  &.is-active {
    background-color: var(--highlight-background-color-info);
  }
`)),io=i()(f.Z)(oo||(oo=no`
  height: fit-content;
  height: 40px;
  flex-basis: 100px;
  margin-left: var(--spacing-s);
  font-size: var(--text-size-l);
  font-weight: var(--text-weight-medium);
`)),lo=()=>{const e=oe(),t=ne(),r=(()=>{const{historyId:e}=(0,v.useParams)();return e?"history-request":"new-request"})();return(0,D.jsx)(so,{markName:eo,callback:()=>{return e=r,performance.measure(Yr,{},eo),void(0,Xr.sendMeasureEvent)({name:Yr,label:e,entityType:"grpc-workbench"});var e},children:e?(0,D.jsx)(io,{type:"secondary",text:"Cancel",onClick:()=>{t()}}):(0,D.jsx)(ao,{type:"primary",text:"Invoke"})})},co=()=>{const e=(0,m.Z)();return[e.request.error,e.setRequestError]},po=(0,g.observer)((()=>{const e=oe(),t=ne(),r=(()=>{const[,e]=co(),{sendRequest:t}=(0,m.Z)(),r=(0,Bt.Z)(),[o]=(0,Gt.Z)(),[n]=Jt(),s=Ht(r);return()=>{if(n)t();else try{s(o),e(null),t()}catch(t){e(t)}}})();return(0,n.useEffect)((()=>{const t=t=>{e||(t.metaKey||t.ctrlKey)&&"Enter"===t.key&&r()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)}),[e,r]),(0,D.jsx)("form",{onSubmit:e?e=>{e.preventDefault(),t()}:e=>{e.preventDefault(),r()},children:(0,D.jsxs)(l.Z,{padding:"spacing-s",children:[(0,D.jsx)(me,{}),(0,D.jsx)(Kr,{}),(0,D.jsx)(lo,{})]})})})),uo=()=>(0,D.jsx)(u.PaneHeader,{defaultLayout:"horizontal",horizontalComponent:null,verticalComponent:(0,D.jsx)(u.PaneLabel,{layout:"vertical",label:"Request Editor",arrowDirection:"right"})});var ho=r(15761),go=r(27366),mo=r(71132),xo=r(27162),vo=r(5246);let fo;const bo=i()(l.Z)(fo||(fo=(e=>e)`
  overflow: hidden;
`));function yo({featureName:e}){return(0,D.jsx)(bo,{direction:"column",height:"100%",justifyContent:"center",alignItems:"center",children:(0,D.jsx)(c.Z,{title:"Coming Soon",description:`Support for ${e} is coming soon`,children:(0,D.jsx)(d.Z,{name:"illustration-no-custom-domain"})})})}var jo=r(62932),Zo=r(43294),wo=r(48722);let ko,So,Co,Eo,Ro=e=>e;const{PerfContext:Po}=Xr.perfComponents,Do=()=>{performance.measure(Qr,{},to),(0,Xr.sendMeasureEvent)({name:Qr})},Io=(0,n.lazy)((()=>r.e(7605).then(r.bind(r,37605)))),To=(0,n.lazy)((()=>r.e(1544).then(r.t.bind(r,31544,23)))),No=i().div(ko||(ko=Ro`
  height: 100%;
  overflow: hidden;

  .text-editor {
    padding: var(--spacing-l) var(--spacing-s) var(--spacing-zero);
  }

  .monaco-editor {
    .margin-view-overlays .line-numbers {
      color: var(--content-color-tertiary);
    }

    .scroll-decoration {
      left: var(--spacing-l) !important;
      right: var(--spacing-l) !important;
      width: auto !important;
    }

    .monaco-placeholder {
      font-size: var(--text-size-m);
      line-height: var(--line-height-m);
      color: var(--content-color-tertiary);
    }
  }
`)),Oo=i()(f.Z)(So||(So=Ro`
  &:not(:disabled) {
    background-color: var(--base-color-info);
    color: var(--content-color-constant);

    &:hover,
    &.is-hovered {
      background-color: var(--button-primary-hover-background-color);
    }

    &:active,
    &.is-active {
      background-color: var(--button-primary-active-background-color);
    }
  }
`)),Lo=i().div(Co||(Co=Ro`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 var(--spacing-s);
  padding: var(--spacing-s) 0;
  margin: 0 var(--spacing-xl) 0 var(--spacing-s);
  border-top: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  min-height: calc(2 * var(--spacing-l));
`)),Ao=i().div(Eo||(Eo=Ro`
  display: flex;
  align-items: center;
  gap: 0 var(--spacing-s);
`)),Mo=(0,g.observer)((function(){const e=(0,Bt.Z)(),[t,r]=(0,Gt.Z)(),[o]=Jt(),s=(0,n.useRef)(null),a=(0,m.Z)().endStreaming,i=(()=>{const e=(0,m.Z)(),t=(0,Bt.Z)(),[r]=(0,Gt.Z)(),o=Ht(t),{addToast:n}=(0,p.ZP)();return()=>{try{o(r),e.sendStreamingMessage()}catch(e){n({status:"error",description:e.message})}}})(),c=oe(),d=(0,n.useMemo)((()=>c&&o),[c,o]),u=(0,n.useMemo)((()=>({validate:!0,schemas:[{uri:(0,wo.v4)(),schema:(0,jo.toJS)(e)||{}}]})),[e]);return(0,D.jsxs)(l.Z,{direction:"column",height:"100%",children:[(0,D.jsx)(No,{children:(0,D.jsx)(n.Suspense,{fallback:(0,D.jsx)(Se.Z,{}),children:(0,D.jsx)(Po.Provider,{value:{markName:to,callback:Do},children:(0,D.jsx)(To,{ref:s,fontSize:12,language:"json",wordWrap:!0,placeholder:"Compose message",value:t,onChange:r,autoFormat:!0,settings:u})})})}),(0,D.jsxs)(Lo,{children:[(0,D.jsxs)(Ao,{children:[(0,D.jsx)(f.Z,{type:"tertiary",icon:(0,D.jsx)(Zo.Z,{}),tooltip:"Beautify",onClick:()=>{var e;return null==(e=s.current)?void 0:e.beautifyContent()}}),e&&(0,D.jsx)(n.Suspense,{fallback:(0,D.jsx)(D.Fragment,{children:" "}),children:(0,D.jsx)(Io,{})})]}),o&&(0,D.jsxs)(Ao,{children:[(0,D.jsx)(f.Z,{text:"End Streaming",onClick:a,isDisabled:!d,tooltip:d?"":"Invoke the method to send messages"}),(0,D.jsx)(Oo,{type:d?"primary":"secondary",onClick:i,isDisabled:!d,text:"Send"})]})]})]})}));var zo=r(68206),qo=r(81410);let $o,Fo,_o,Uo=e=>e;const Wo=i()(zo.Z)($o||($o=Uo`
  &:not(:focus) {
    border-color: var(--border-color-default);
    background-color: var(--background-color-secondary);
  }
`)),Vo=i()(qo.Z)(Fo||(Fo=Uo`
  .aether-dropdown__control:not(:focus) {
    border-color: var(--border-color-default);
    background-color: var(--background-color-secondary);
  }
  .aether-dropdown__control .aether-dropdown__single-value {
    color: var(--content-color-secondary);
    font-weight: 600;
    font-size: var(--text-size-s);
  }
`)),Ho=i()(h.ZP)(_o||(_o=Uo`
  color: var(--content-color-primary);
`)),Bo=()=>{const e=(0,m.Z)();return[e.extensions.auth,e.setRequestAuthState]},Go=[{label:"No Auth",value:"noauth"},{label:"API Key",value:"apikey"},{label:"Basic Auth",value:"basic"},{label:"Bearer Token",value:"bearer"}];let Jo,Ko,Xo,Yo=e=>e;const Qo=i().div(Jo||(Jo=Yo`
  flex: 0.35;
  padding: var(--spacing-m);
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  height: 100%;
`)),en=i()(l.Z)(Ko||(Ko=Yo`
  align-items: center;
  padding: var(--spacing-s) var(--spacing-zero);
  flex-wrap: wrap;
`)),tn=i().div(Xo||(Xo=Yo`
  flex: 1;
`)),rn=(0,g.observer)((()=>{const e=oe(),[t,r]=Bo();return(0,D.jsx)(Qo,{children:(0,D.jsxs)(en,{children:[(0,D.jsx)(tn,{children:(0,D.jsx)(je.Z,{text:"Type",htmlFor:"auth-type-selector-dropdown"})}),(0,D.jsx)(tn,{children:(0,D.jsx)(Vo,{onChange:({value:e})=>{r((0,o.Z)({},t,{type:e}))},options:Go,value:Go.find((e=>e.value===t.type)),id:"auth-type-selector-dropdown",isSearchable:!1,isClearable:!1,isDisabled:e,viaPortal:!0})})]})})}));let on;const nn=i()(l.Z)(on||(on=(e=>e)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`)),sn=()=>(0,D.jsx)(nn,{children:"This request is not inheriting any authorization helper at the moment."});var an=r(71453);let ln;const cn=i()(Z.Link)(ln||(ln=(e=>e)`
  display: inline-flex;
  align-items: center;
  text-decoration: underline;
  color: var(--content-color-secondary);
`)),dn=()=>(0,D.jsxs)(cn,{type:"link-default",to:"https://go.pstmn.io/docs-auth",target:"_blank",rel:"noopener noreferer",children:["authorization",(0,D.jsx)(an.Z,{})]});let pn;const un=i()(l.Z)(pn||(pn=(e=>e)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`)),hn=()=>(0,D.jsx)(un,{children:(0,D.jsxs)("div",{children:["This request does not use any authorization. Learn more about ",(0,D.jsx)(dn,{})]})}),gn=e=>{const[t,r]=Bo();return(0,n.useCallback)((n=>{var s;const a=n.target.value,i=n.target.name;if(!a&&t[e])return r((0,o.Z)({},t,{[e]:null==(s=t[e])?void 0:s.filter((e=>e.key!==i))}));const l=[...t[e]||[]],c=l.findIndex((e=>e.key===i));if(-1===c)return r((0,o.Z)({},t,{[e]:[...t[e]||[],{key:i,value:a}]}));l[c].value=a,r((0,o.Z)({},t,{[e]:l}))}),[t,r,e])};let mn,xn,vn=e=>e;const fn=i()(l.Z)(mn||(mn=vn`
  align-items: center;
  padding-top: var(--spacing-s);
  max-width: 500px;
`)),bn=i().div(xn||(xn=vn`
  flex: 1;
`)),yn=(0,g.observer)((()=>{const e=oe(),[t]=Bo(),r=gn("bearer"),o=(0,n.useMemo)((()=>{var e;return(null==(e=t.bearer)||null==(e=e.find((e=>"token"===e.key)))?void 0:e.value)||""}),[t]);return(0,D.jsxs)(fn,{children:[(0,D.jsx)(bn,{children:(0,D.jsx)(Ho,{children:"Token"})}),(0,D.jsx)(bn,{children:(0,D.jsx)(Wo,{onChange:r,value:o,name:"token",placeholder:"Token",isDisabled:e})})]})}));let jn,Zn,wn=e=>e;const kn=i()(l.Z)(jn||(jn=wn`
  align-items: center;
  padding-top: var(--spacing-s);
  max-width: 500px;
`)),Sn=i().div(Zn||(Zn=wn`
  flex: 1;
`)),Cn=[{key:"username",label:"Username",type:"text"},{key:"password",label:"Password",type:"password"}],En=(0,g.observer)((()=>{const e=oe(),[t]=Bo(),r=gn("basic"),o=e=>{var r;return(null==(r=(t.basic||[]).find((t=>t.key===e)))?void 0:r.value)||""};return(0,D.jsx)(D.Fragment,{children:Cn.map((({key:t,label:n,type:s})=>(0,D.jsxs)(kn,{children:[(0,D.jsx)(Sn,{children:(0,D.jsx)(Ho,{children:n})}),(0,D.jsx)(Sn,{children:(0,D.jsx)(Wo,{onChange:r,name:t,value:o(t),placeholder:n,type:s,isDisabled:e})})]},t)))})}));let Rn,Pn,Dn=e=>e;const In=i()(l.Z)(Rn||(Rn=Dn`
  align-items: center;
  padding-top: var(--spacing-s);
  max-width: 500px;
`)),Tn=i().div(Pn||(Pn=Dn`
  flex: 1;
`)),Nn=[{key:"key",label:"Key"},{key:"value",label:"Value"}],On=(0,g.observer)((()=>{const e=oe(),[t]=Bo(),r=gn("apikey"),o=e=>{var r;return(null==(r=(t.apikey||[]).find((t=>t.key===e)))?void 0:r.value)||""};return(0,D.jsx)(D.Fragment,{children:Nn.map((({key:t,label:n})=>(0,D.jsxs)(In,{children:[(0,D.jsx)(Tn,{children:(0,D.jsx)(Ho,{children:n})}),(0,D.jsx)(Tn,{children:(0,D.jsx)(Wo,{onChange:r,name:t,value:o(t),placeholder:n,isDisabled:e})})]},t)))})}));let Ln;const An=i().div(Ln||(Ln=(e=>e)`
  flex: 0.65;
  padding: var(--spacing-m);
`)),Mn=(0,g.observer)((()=>{const[e]=Bo();switch(e.type){case"noauth":return(0,D.jsx)(hn,{});case"bearer":return(0,D.jsx)(yn,{});case"basic":return(0,D.jsx)(En,{});case"apikey":return(0,D.jsx)(On,{});default:return(0,D.jsx)(sn,{})}})),zn=()=>(0,D.jsx)(An,{children:(0,D.jsx)(Mn,{})});let qn;const $n=i().div(qn||(qn=(e=>e)`
  display: flex;
  min-height: 0;
  font-size: var(--text-size-m);
  color: var(--content-color-secondary);
  height: calc(100% - 2 * var(--spacing-l));
`)),Fn=()=>(0,D.jsxs)($n,{className:"auth-editor",role:"tabpanel",children:[(0,D.jsx)(rn,{}),(0,D.jsx)(zn,{})]});var _n=r(9029),Un=r(53723),Wn=r.n(Un),Vn=r(1078);let Hn,Bn,Gn,Jn,Kn,Xn=e=>e;const Yn=i()(l.Z)(Hn||(Hn=Xn`
  min-height: 48px;
  padding: var(--spacing-s) var(--spacing-l);
  box-sizing: border-box;
  width: 100%;
  &:hover {
    background: var(--background-color-tertiary);
  }
`)),Qn=i()(l.Z)(Bn||(Bn=Xn`
  width: 70%;
`)),es=i()(l.Z)(Gn||(Gn=Xn`
  width: 30%;
  margin-left: var(--spacing-l);
`)),ts=i()(zo.Z)(Jn||(Jn=Xn`
  max-width: 80px;
  input {
    appearance: textfield;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`)),rs=i()(f.Z)(Kn||(Kn=Xn`
  font-weight: 500;
  width: fit-content;
  margin-top: var(--spacing-xs);
`)),os=e=>{const t=oe(),[r,o]=(0,n.useState)(void 0===e.value?e.defaultValue:e.value),s=t=>{let n;n="boolean"===e.inputType?!r:"number"===e.inputType?t.target.value?Number(t.target.value):"":t.target.value,o(n),null==e.onChange||e.onChange(n)};return(0,D.jsxs)(Yn,{className:Wn()({enabled:!t}),children:[(0,D.jsxs)(Qn,{direction:"column",justifyContent:"flex-start",children:[(0,D.jsx)(h.ZP,{type:"strong",children:e.label}),(0,D.jsx)(h.ZP,{children:e.description})]}),(0,D.jsxs)(es,{direction:"column",justifyContent:"flex-start",children:["boolean"===e.inputType?(0,D.jsx)(Vn.Z,{isChecked:!!r,onChange:s,isDisabled:t}):(0,D.jsx)(ts,{value:r,onChange:s,type:"number"===e.inputType?"number":"text",step:1,isDisabled:t}),void 0!==e.value&&(0,D.jsx)(rs,{type:"plain",text:"Restore default",size:"small",onClick:()=>{o(e.defaultValue),null==e.onChange||e.onChange()},isDisabled:t})]})]})},ns=()=>{const e=(0,m.Z)();return[e.payload.settings,e.setRequestSettings]};let ss;const as=i().div(ss||(ss=(e=>e)`
  &.disabled {
    opacity: 0.6;
  }
`)),is=(0,g.observer)((()=>{const e=oe(),[t,r]=ns();return(0,D.jsx)(as,{role:"tabpanel",className:e?"disabled":"",children:_n.defaultGRPCSettings.map((e=>{return e.hideFromSettings?null:(0,D.jsx)(os,{label:e.title||"",description:e.description||"",value:t[e.id],defaultValue:e.defaultValue,inputType:e.inputType,onChange:(n=e.id,e=>{r((0,o.Z)({},t,{[n]:e}))})},e.id);var n}))})}));var ls=r(96497);const cs=()=>{const e=(0,m.Z)();return[e.payload.metadata,e.setRequestMetadata]};let ds;const ps=i().div(ds||(ds=(e=>e)`
  padding: var(--spacing-l) var(--spacing-s) var(--spacing-zero);
  div {
    background-color: transparent;
  }
`)),us=(0,g.observer)((function(){const e=oe(),[t,r]=cs();return(0,D.jsx)(ps,{role:"tabpanel",children:(0,D.jsx)(ls.KeyValueEditor,{tableName:"Request Metadata",allowedColumns:["key","value"],showColumns:["key","value"],values:t,onChange:e=>{r(e)},disableSorting:e,nonEditableKeys:e,nonEditableValues:e,nonEditableToggles:e,disableBulkEdit:!0,disableMultilineKey:!0,disableMultilineValue:!0})})}));var hs=r(96557);const gs=(0,g.observer)((()=>{const[,e]=Rr();return(0,D.jsxs)(l.Z,{width:"100%",direction:"column",margin:"spacing-s spacing-zero",gap:"spacing-s",children:[(0,D.jsx)(h.ZP,{type:"body-medium",children:"Have a .proto file in your local system or hosted on a URL?"}),(0,D.jsx)(l.Z,{children:(0,D.jsx)(f.Z,{type:"outline",onClick:()=>e("file"),text:"Import .proto file"})})]})}));var ms=r(29814);const xs=["isLoading","heading","children"];let vs,fs,bs=e=>e;const ys=i().div(vs||(vs=bs`
  margin-left: calc(var(--size-xs) + var(--spacing-s));
`)),js=i()(l.Z)(fs||(fs=bs`
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
`)),Zs=e=>{let{isLoading:t,heading:r,children:n}=e,s=(0,Ue.Z)(e,xs);return(0,D.jsxs)(js,(0,o.Z)({direction:"column",padding:"spacing-m",backgroundColor:"background-color-tertiary",borderRadius:"border-radius-default",gap:"spacing-s"},s,{children:[(0,D.jsxs)(l.Z,{gap:"spacing-s",alignItems:"center",children:[t?(0,D.jsx)(Se.Z,{}):(0,D.jsx)(ms.Z,{size:"large",color:"content-color-primary"}),"string"==typeof r?(0,D.jsx)(X.Z,{color:"content-color-primary",type:"h5",text:r}):r]}),n&&(0,D.jsx)(ys,{children:n})]}))},ws=(0,g.observer)((()=>{const{isFetching:e,source:t,fetchingSource:r,services:o}=ee(),[n]=x(),s=e&&"reflection"===r,a=!n,{loadProto:i}=(0,m.Z)(),c=Qt();return"reflection"===t&&o?(0,D.jsx)(ks,{}):(0,D.jsxs)(l.Z,{alignItems:"center",gap:"spacing-s",width:"100%",children:[s?(0,D.jsx)(Se.Z,{}):(0,D.jsx)(Er.Z,{}),(0,D.jsx)("div",{children:s?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h.ZP,{color:"content-color-secondary",children:"Loading server reflection. "}),(0,D.jsx)(f.Z,{type:"muted-plain",text:"Cancel",onClick:()=>{c("reflection")}})]}):(0,D.jsx)(f.Z,{type:"muted-plain",onClick:()=>{n&&i("reflection")},isDisabled:a,tooltip:a&&(0,D.jsx)(xe.Z,{content:"Enter server URL to load methods using server reflection.",placement:"top"}),text:"Use Server Reflection"})})]})})),ks=()=>{const{isFetching:e,fetchingSource:t}=ee(),r=e&&"reflection"===t,{loadProto:o}=(0,m.Z)(),n=Qt();return(0,D.jsx)(Zs,{padding:"spacing-s",background:"background-color-secondary",alignItems:"flex-start",justifyContent:"center",gap:"spacing-m",isLoading:r,heading:(0,D.jsxs)(l.Z,{gap:"spacing-s",children:[(0,D.jsx)(h.ZP,{color:"content-color-primary",children:r?"Loading server reflection":"Using Server Reflection"}),r?(0,D.jsx)(f.Z,{type:"monochrome-plain",onClick:()=>{n("reflection")},text:"Cancel"}):(0,D.jsx)(f.Z,{icon:(0,D.jsx)(Xt.Z,{}),size:"small",type:"muted-plain",onClick:()=>o("reflection"),"data-testid":"reload-server-reflection"})]})})};var Ss=r(35482);const Cs=()=>{const{apiEditor:e,setAPIEditorFiles:t}=(0,m.Z)();return[e.files,t]},Es=["children"];let Rs;const Ps=i()(f.Z)(Rs||(Rs=(e=>e)`
  min-width: fit-content;
`)),Ds=(0,n.forwardRef)(((e,t)=>{const[r,s]=(0,n.useState)(!1),[,a]=Cs(),{openProtoFileSelectorDialog:i}=(0,m.Z)(),{children:l}=e,c=(0,Ue.Z)(e,Es);return(0,D.jsx)(Ps,(0,o.Z)({type:"secondary",ref:t},c,{onClick:async()=>{s(!0);const e=await i();s(!1),a(e?[{path:e}]:null)},isLoading:r,text:l}))}));var Is=r(59713);function Ts(){const[e,t]=Cs();return(0,D.jsx)("div",{children:Array.isArray(e)&&e.map((({path:r},o)=>(0,D.jsxs)(l.Z,{as:"li",alignItems:"center",justifyContent:"space-between",children:[(0,D.jsx)(h.ZP,{isTruncated:!0,children:r}),(0,D.jsx)(f.Z,{type:"tertiary",icon:(0,D.jsx)(Is.Z,{}),onClick:()=>(r=>{const o=((e,t)=>null==e?void 0:e.filter(((e,r)=>r!==t)))(e,r);t(null!=o&&o.length?o:null)})(o),"aria-label":"Remove","data-testid":"remove-file-button"})]},r)))})}var Ns=r(85974);const Os=()=>{const{apiEditor:e,setAPIEditorImportPaths:t}=(0,m.Z)();return[e.importPaths,t]},Ls=(0,g.observer)((()=>{const[e,t]=Os(),{openProtoImportPathSelectorDialog:r}=(0,m.Z)(),[o,s]=(0,n.useState)(!1);return(0,D.jsx)(f.Z,{onClick:async()=>{s(!0);const o=await r();s(!1),null!=o&&o.length&&t([...e||[],...o.map((e=>({path:e,selected:!0})))])},type:"monochrome-plain",isLoading:o,size:"small",icon:(0,D.jsx)(Ns.Z,{}),text:"Add an import path"})}));var As=r(65848),Ms=r(43088);let zs,qs,$s=e=>e;const Fs=i()(As.Z)(zs||(zs=$s`
  span {
    width: 100%;
    label {
      word-break: break-word;
    }
  }
`)),_s=i()(f.Z)(qs||(qs=$s`
  align-self: flex-start;
`)),Us=(0,g.observer)((()=>{const[e,t]=Os();return null!=e&&e.length?(0,D.jsx)(l.Z,{direction:"column",gap:"spacing-s",children:null==e?void 0:e.map((({path:r,selected:o})=>(0,D.jsxs)(l.Z,{alignItems:"center",justifyContent:"space-between",gap:"spacing-s",children:[(0,D.jsx)(Fs,{label:r,isChecked:o,onChange:()=>(r=>{if(!e)return;const o=null==e?void 0:e.findIndex((({path:e})=>e===r));-1!==o&&(e[o].selected=!(null!=e&&e[o].selected),t(e))})(r),"data-testid":"import-path-checkbox"},r),(0,D.jsx)(_s,{type:"tertiary",size:"small",icon:(0,D.jsx)(Ms.Z,{}),onClick:()=>{return o=r,void t(null==e?void 0:e.filter((({path:e})=>e!==o)));var o},"aria-label":"Remove","data-testid":"remove-import-path-button"})]},r)))}):null}));let Ws;const Vs=i()(h.ZP)(Ws||(Ws=(e=>e)`
  word-break: break-word;
`)),Hs=(0,g.observer)((()=>{var e;const t=(0,m.Z)(),[r]=Cs(),[o,s]=(()=>{const{apiEditor:e,setAPIEditorProtoURL:t}=(0,m.Z)();return[e.url,t]})(),[a,i]=(0,n.useState)(!1),{error:c,source:d}=ee(),p="UNRESOLVED_IMPORT"===(null==c?void 0:c.code),u=c&&("file"===d||"url"===d),g=(0,n.useMemo)((()=>!(null==o||!o.data||null==o||!o.error)||!(null!=r&&r.length||null!=o&&o.data)),[o,r]);return(0,D.jsxs)(l.Z,{width:"100%",direction:"column",margin:"spacing-s spacing-zero",gap:"spacing-s",children:[u&&!p&&(0,D.jsx)(xr.Z,{status:"error",title:"Couldn't import .proto file",children:(0,D.jsxs)(l.Z,{direction:"column",gap:"spacing-m",children:[(0,D.jsx)(h.ZP,{children:"There was an error while importing the Protobuf definition."}),(0,D.jsx)(Vs,{type:"body-small",children:null!=(e=c.message)?e:"An unknown error occurred"})]})}),(0,D.jsxs)("div",{children:[(0,D.jsx)(X.Z,{type:"h5",text:"Import a .proto file",hasBottomSpacing:!0}),(0,D.jsx)(h.ZP,{color:"content-color-secondary",children:"Import a .proto file from your local system or load it from the URL where it’s hosted."})]}),(0,D.jsx)(l.Z,{children:null!=r&&r.length?(0,D.jsx)(Ts,{}):(0,D.jsxs)(l.Z,{direction:"column",gap:"spacing-s",children:[(0,D.jsxs)(l.Z,{width:"100%",gap:"spacing-m",alignItems:"start",height:"size-m",children:[(0,D.jsx)(Ds,{children:"Choose a File"}),(0,D.jsx)(l.Z,{alignSelf:"center",children:(0,D.jsx)(h.ZP,{color:"content-color-tertiary",children:"OR"})}),(0,D.jsx)(zo.Z,{maxWidth:"250px",value:(null==o?void 0:o.data)||"",onChange:e=>{s({data:e.target.value,error:!1}),i(!1)},onBlur:()=>{null!=o&&o.data&&!(e=>{try{new URL(e)}catch(e){return!1}return!0})(null==o?void 0:o.data)&&s({data:o.data,error:!0})},name:"url",placeholder:"Enter a URL",validationStatus:a||null!=o&&o.error?"error":null,validationMessage:(null==o?void 0:o.error)&&"Invalid URL"})]}),a&&(0,D.jsxs)(l.Z,{gap:"spacing-s",alignItems:"center",children:[(0,D.jsx)(Ss.Z,{color:"content-color-error"}),(0,D.jsx)(h.ZP,{color:"content-color-error",children:"File or url is required"})]})]})}),(0,D.jsxs)("div",{children:[(0,D.jsx)(X.Z,{type:"h6",text:"Import paths",hasBottomSpacing:!0}),(0,D.jsxs)(l.Z,{direction:"column",gap:"spacing-m",children:[(0,D.jsx)(h.ZP,{color:"content-color-secondary",children:'Specify import paths to look for .proto files while resolving "import" directives.'}),p&&(0,D.jsx)(xr.Z,{status:"error",title:'Unresolved "import" directives',children:(0,D.jsxs)(l.Z,{direction:"column",gap:"spacing-m",children:[(0,D.jsx)(h.ZP,{children:"We could not find some of the files imported by the .proto file. Specify import paths to those unresolved files using the options below."}),(0,D.jsx)(Vs,{type:"body-small",children:null==c?void 0:c.message})]})}),(0,D.jsx)("div",{children:(0,D.jsx)(Ls,{})}),(0,D.jsx)(Us,{})]})]}),(0,D.jsx)(l.Z,{gap:"spacing-m",children:(0,D.jsx)(f.Z,{variant:"primary",type:"primary",text:"Import Proto",onClick:()=>{if(g)return i(!0);i(!1),null!=o&&o.data?t.loadProto("url"):null!=r&&r.length&&t.loadProto("file")}})})]})}));let Bs,Gs,Js,Ks=e=>e;const Xs=i()(l.Z)(Bs||(Bs=Ks`
  padding: var(--spacing-l) var(--spacing-s);
  font-size: var(--text-size-m);
  line-height: var(--line-height-m);
  color: var(--content-color-secondary);
  width: 40em;
  justify-self: center;
`)),Ys=i().div(Gs||(Gs=Ks`
  width: 90%;
  height: 1.5px;
  background: var(--background-color-secondary);
  margin: var(--spacing-zero) var(--spacing-m);
`)),Qs=i()(f.Z)(Js||(Js=Ks`
  white-space: pre;
  justify-content: flex-start;
`)),ea=(0,g.observer)((()=>{const[e,t]=Rr(),{source:r,error:o,proto:n}=ee(),s="file"===e,a=!(e||s||o||"file"!==r&&"url"!==r),i=!e&&("file"!==r&&"url"!==r||o);return(0,D.jsx)(l.Z,{width:"100%",justifyContent:"center",children:(0,D.jsxs)(Xs,{direction:"column",gap:"spacing-l",justifyContent:"center",children:[(0,D.jsx)(kr,{}),(0,D.jsx)(h.ZP,{children:"A service definition makes the client aware of the services and methods."}),e&&(0,D.jsx)(Qs,{type:"muted-plain",onClick:()=>t(null),icon:(0,D.jsx)(hs.Z,{}),justifyContent:"flex-start",gap:"spacing-s",text:"reflection"===r?"Keep using server reflection":"Go Back"}),s&&(0,D.jsx)(Hs,{}),a&&(0,D.jsx)(Zs,{heading:`Temporarily using ${tr(n)}`,children:(0,D.jsxs)(l.Z,{direction:"column",gap:"spacign-s",children:[(0,D.jsx)(h.ZP,{children:"This .proto file is being temporarily used for invoking methods."}),(0,D.jsx)("div",{children:(0,D.jsx)(f.Z,{type:"plain",text:"Import a .proto file",onClick:()=>t("file")})})]})}),i&&(0,D.jsx)(gs,{}),!e&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(l.Z,{width:"100%",alignItems:"center",children:[(0,D.jsx)(h.ZP,{children:"OR"}),(0,D.jsx)(Ys,{})]}),(0,D.jsx)(ws,{})]})]})})}));let ta;const ra=i().div(ta||(ta=(e=>e)`
  display: inline-flex;
  width: calc(0.5 * var(--spacing-m));
  height: calc(0.5 * var(--spacing-m));
  margin-left: var(--spacing-xs);
  border-radius: calc(0.5 * var(--spacing-m));
  background-color: var(--base-color-success);
`)),oa=()=>(0,D.jsx)(ra,{"aria-label":"tab with active values","data-testid":"tab-indicator-dot"}),na=(0,g.observer)((()=>{const[e]=Bo();return(0,D.jsxs)(D.Fragment,{children:["Authorization",e.type&&"noauth"!==e.type&&(0,D.jsx)(oa,{})]})})),sa=(0,g.observer)((()=>{const[e]=cs();return(0,D.jsxs)(D.Fragment,{children:["Metadata",(null==e?void 0:e.length)>0&&(0,D.jsxs)(D.Fragment,{children:[" ",(0,D.jsxs)(h.ZP,{color:"content-color-success",children:["(",e.length,")"]})]})]})})),aa=(0,g.observer)((()=>{const[e]=ns(),t=(0,n.useMemo)((()=>{const t=Object.keys(e).filter((e=>"secureConnection"!==e));for(const r of t)if(void 0!==e[r])return!0;return!1}),[e]);return(0,D.jsxs)(D.Fragment,{children:["Settings",t&&(0,D.jsx)(oa,{})]})}));let ia,la,ca,da=e=>e;const pa=i()(u.PaneContent)(ia||(ia=da`
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
`)),ua=i()(ho.Z)(la||(la=da`
  box-sizing: border-box;
  padding: var(--spacing-zero) var(--spacing-s);
  width: 100%;
`)),ha=i()(ho.Z)(ca||(ca=da`
  box-sizing: border-box;
  padding: 0;

  /**
   * Following selectors help provide TabPanels height of the parent.
   */
  &,
  > div,
  > div > div {
    height: 100%;
  }
`)),ga=(0,g.observer)((()=>{const[e,t]=Yt();return(0,D.jsx)(ua,{activeTabIndex:e,onChange:function(e){t(e)},type:"primary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,D.jsxs)(go.Z,{children:[(0,D.jsx)(mo.Z,{label:"Message"}),(0,D.jsx)(mo.Z,{label:(0,D.jsx)(na,{})}),(0,D.jsx)(mo.Z,{label:(0,D.jsx)(sa,{})}),(0,D.jsx)(mo.Z,{label:"Service Definition"}),(0,D.jsx)(mo.Z,{label:"Scripts"}),(0,D.jsx)(mo.Z,{label:(0,D.jsx)(aa,{})})]})})})),ma=(0,g.observer)((()=>{const[e]=Yt();return(0,D.jsx)(ha,{activeTabIndex:e,incrementallyCreateTabs:!0,destroyInactiveTabs:!0,children:(0,D.jsxs)(xo.Z,{children:[(0,D.jsx)(vo.Z,{children:(0,D.jsx)(Mo,{})}),(0,D.jsx)(vo.Z,{children:(0,D.jsx)(Fn,{})}),(0,D.jsx)(vo.Z,{children:(0,D.jsx)(us,{})}),(0,D.jsx)(vo.Z,{children:(0,D.jsx)(ea,{})}),(0,D.jsx)(vo.Z,{children:(0,D.jsx)(yo,{featureName:"scripts"})}),(0,D.jsx)(vo.Z,{children:(0,D.jsx)(is,{})})]})})})),xa=()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(ga,{}),(0,D.jsx)(pa,{children:(0,D.jsx)(ma,{})})]});var va=r(63721);const fa=(0,n.createContext)({activeResponseTab:0,setActiveResponseTab:()=>null}),ba=()=>{const e=(0,n.useContext)(fa);if(!e)throw new Error("useResponseViewerContext should be used within a ResponseViewerContext.Provider");return e},ya=({children:e})=>{const[t,r]=(0,n.useState)(0),o=(0,n.useMemo)((()=>({activeResponseTab:t,setActiveResponseTab:r})),[t,r]);return(0,D.jsx)(fa.Provider,{value:o,children:e})};var ja=r(87459),Za=r(59363),wa=r(95897),ka=r.n(wa);let Sa;const Ca=i().div(Sa||(Sa=(e=>e)`
  // No pointer cursor as gRPC does not have any action on hovering over time value
  cursor: auto;
  span.time-text {
    cursor: auto;
  }
`)),Ea=(0,g.observer)((()=>{const e=re(),t=(0,m.Z)().response.responseTime,r=oe(),[o]=Jt(),[s]=Kt(),a=(0,n.useMemo)((()=>0!==(null==e?void 0:e.code)),[e]);return r&&(o||s)?(0,D.jsx)(ja.Z,{status:"info",text:"Streaming"}):(0,D.jsxs)(l.Z,{alignItems:"center",gap:"spacing-m",children:[!!e&&!!e.codeName&&(0,D.jsx)(xe.Z,{content:(0,D.jsxs)(D.Fragment,{children:["Status Code ",(0,D.jsxs)(h.ZP,{type:"strong",children:[e.code," ",Za.F[e.code].codeName]})," ",Za.F[e.code].tooltip]}),placement:"bottom-start",children:(0,D.jsx)("div",{children:(0,D.jsxs)(h.ZP,{color:"content-color-secondary",children:["Status code: ",(0,D.jsxs)(h.ZP,{color:a?"content-color-error":"content-color-success",children:[e.code," ",Za.F[e.code].codeName]})]})})}),!!t&&!s&&!o&&(0,D.jsx)(Ca,{children:(0,D.jsxs)(h.ZP,{color:"content-color-secondary",className:"time-text",children:["Time: ",(0,D.jsx)(h.ZP,{color:"content-color-success",className:"time-text",children:(i=t,i<1998?`${Math.ceil(i)} ms`:ka()(i||0,{secondsDecimalDigits:2,keepDecimalsOnWholeSeconds:!0,padUnits:!0}))})]})})]});var i}));let Ra;const Pa=i()(ho.Z)(Ra||(Ra=(e=>e)`
  box-sizing: border-box;
  padding: ${0};
  width: 100%;
`),(e=>e.theme["spacing-zero"])),Da=(0,g.observer)((()=>{const e=se(),{activeResponseTab:t,setActiveResponseTab:r}=ba(),o=ae(),s=ie(),[a]=Jt(),[i]=Kt(),l=(0,n.useMemo)((()=>i||a),[e.length]);return(0,D.jsx)(Pa,{activeTabIndex:t,onChange:e=>{r(e)},type:"primary",incrementallyCreateTabs:!0,destroyInactiveTabs:!0,role:"tablist","data-testid":"response-viewer-tablist",children:(0,D.jsxs)(go.Z,{children:[(0,D.jsx)(mo.Z,{label:l?"Responses":"Response"}),(0,D.jsx)(mo.Z,{label:(0,D.jsxs)(D.Fragment,{children:["Metadata ",o.length>0&&(0,D.jsxs)(h.ZP,{color:"content-color-success",children:["(",o.length,")"]})]})}),(0,D.jsx)(mo.Z,{label:(0,D.jsxs)(D.Fragment,{children:["Trailers ",s.length>0&&(0,D.jsxs)(h.ZP,{color:"content-color-success",children:["(",s.length,")"]})]})}),(0,D.jsx)(mo.Z,{label:"Test results"})]})})})),Ia=(0,g.observer)((()=>te()?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Da,{}),(0,D.jsx)(Ea,{})]}):(0,D.jsx)(X.Z,{type:"h5",text:"Response",color:"content-color-primary"})));let Ta;const Na=i()(l.Z)(Ta||(Ta=(e=>e)``)),Oa=(0,g.observer)((e=>(0,D.jsx)(u.PaneHeader,(0,o.Z)({},e,{defaultLayout:"horizontal",horizontalComponent:(0,D.jsx)(u.PaneLabel,{layout:"horizontal",label:(0,D.jsx)(Na,{alignItems:"center",children:(0,D.jsx)(Ia,{})}),arrowDirection:e=>e?"up":"down"}),verticalComponent:(0,D.jsx)(u.PaneLabel,{layout:"vertical",label:"Request Editor",arrowDirection:e=>e?"left":"right"})}))));let La;const Aa=i().div(La||(La=(e=>e)``)),Ma=()=>(0,D.jsx)(Aa,{children:(0,D.jsx)(c.Z,{description:"Invoke methods to get a response",children:(0,D.jsx)(d.Z,{name:"illustration-no-call-yet"})})});var za=r(99765),qa=r(83125),$a=r(10907),Fa=r(32054);let _a,Ua,Wa,Va,Ha,Ba,Ga,Ja,Ka=e=>e;const Xa=(0,n.lazy)((()=>r.e(1544).then(r.t.bind(r,31544,23)))),Ya=i().div(_a||(_a=Ka``)),Qa=i().div(Ua||(Ua=Ka`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`)),ei=i().div(Wa||(Wa=Ka`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--size-m);
  padding-left: var(--spacing-xl);
  padding-right: var(--spacing-m);
  padding-top: var(--spacing-xs);
  padding-bottom: var(--spacing-xs);

  ${0} & {
    border-bottom: var(--border-width-default) var(--border-style-solid)
      var(--border-color-strong);
  }

  ${0} & {
    margin: var(--spacing-xs) 0;
  }
`),Ya,Qa),ti=i().div(Va||(Va=Ka`
  display: flex;
  align-items: center;
  gap: 0 var(--spacing-s);
`)),ri=i().div(Ha||(Ha=Ka`
  &:first-child {
    margin-left: calc(-1 * var(--spacing-s));
  }

  ${0}
`),(e=>e.isGlowing&&(0,a.css)(Ba||(Ba=Ka`
      & svg path {
        fill: var(--content-color-brand) !important;
      }
    `)))),oi=i()(f.Z)(Ga||(Ga=Ka`
  ${0} &:last-child {
    margin-right: calc(-1 * var(--spacing-s));
  }
`),Ya),ni=i().div(Ja||(Ja=Ka`
  ${0} & {
    flex: 1;
    overflow-y: auto;
  }

  ${0} & {
    height: 220px;

    & .monaco-editor,
    & .monaco-editor .monaco-editor-background,
    & .monaco-editor .margin-view-overlays,
    & .monaco-editor .margin {
      background-color: transparent;
    }
  }

  & .monaco-editor .margin-view-overlays .line-numbers {
    color: var(--content-color-tertiary);
  }
`),Qa,Ya);function si({data:e,languages:t,allowHexdump:r=!1,fullSize:o=!1,readOnly:a=!1,onChange:i=(()=>null),settings:l={},generateMock:c=null}){const d=e instanceof Uint8Array,p=t?Object.keys(t).length:0,u=Boolean(d&&r),h=!u||p>0,[g]=s().useState(p?Object.keys(t)[0]:"text"),[m,x]=s().useState(!a),[v,b]=s().useState(u),y=s().useRef(),j=s().useMemo((()=>v?(0,za.hexy)(e,{caps:"upper",format:"twos"}):d?Buffer.from(e).toString("utf8"):String(e)),[e,v]),Z=o?Qa:Ya;return(0,D.jsxs)(Z,{children:[h&&(0,D.jsxs)(ei,{children:[(0,D.jsxs)(ti,{children:[(0,D.jsx)(ri,{isGlowing:!v&&m,children:(0,D.jsx)(f.Z,{type:"tertiary",icon:(0,D.jsx)(qa.Z,{}),tooltip:"Wrap lines",onClick:()=>x(!m),isDisabled:v})}),!a&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(f.Z,{type:"tertiary",icon:(0,D.jsx)(Zo.Z,{}),onClick:()=>{var e;return null==(e=y.current)?void 0:e.beautifyContent()},tooltip:"Beautify"}),(0,D.jsx)(f.Z,{type:"tertiary",icon:(0,D.jsx)($a.Z,{}),onClick:c,tooltip:c?"Generate example message":"Select a method to generate example message",isDisabled:!c})]})]}),(0,D.jsxs)(ti,{children:[r&&(0,D.jsx)(f.Z,{type:"tertiary",text:v?"Show Message":"Show Hexdump",onClick:()=>b(!v)}),(0,D.jsx)(oi,{type:"tertiary",icon:(0,D.jsx)(Fa.Z,{}),tooltip:"Search",onClick:()=>y.current&&y.current.toggleFindWidget()})]})]}),(0,D.jsx)(ni,{children:(0,D.jsx)(n.Suspense,{fallback:(0,D.jsx)(Se.Z,{}),children:(0,D.jsx)(Xa,{value:j,language:v?"hexdump":g,wordWrap:!v&&m,readOnly:a,autoFormat:a,fontSize:12,ref:y,onChange:i,settings:l})})})]})}var ai=r(3341);let ii,li,ci,di,pi=e=>e;const ui=(0,n.lazy)((()=>r.e(6954).then(r.t.bind(r,26954,23)).then((e=>({default:e.CustomObjectInspector}))))),hi=i().div(ii||(ii=pi`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xs);
  margin-left: ${0};
  text-align: left;

  .custom-obj-inspector {
    ${0};

    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`),(e=>!e.isUnary&&"-20px"),(e=>e.isUnary?(0,a.css)(li||(li=pi`
            margin-left: 20px;
            box-sizing: border-box;
            width: calc(100% - 20px);
            padding: var(--spacing-s);
            background-color: var(--background-color-secondary);
            border-radius: var(--spacing-xs);
            min-width: -webkit-fill-available;
            max-width: fit-content;
          `)):(0,a.css)(ci||(ci=pi`
            padding: var(--spacing-zero)
              calc(var(--spacing-l) + var(--spacing-xs));
          `)))),gi=i().div(di||(di=pi`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-xs);
  cursor: pointer;
`));function mi({data:e,isUnary:t}){const[r,o]=s().useState(!1),a=t?"content-color-primary":"content-color-secondary";return(0,D.jsxs)(hi,{isUnary:t,children:[(0,D.jsxs)(gi,{onClick:()=>o((e=>!e)),children:[r?(0,D.jsx)(Ce.Z,{color:a}):(0,D.jsx)(ai.Z,{color:a}),(0,D.jsx)(X.Z,{type:"h6",color:a,text:"Error details"})]}),r&&(0,D.jsx)(n.Suspense,{fallback:(0,D.jsx)(D.Fragment,{children:" "}),children:(0,D.jsx)(ui,{data:e})})]})}let xi,vi,fi,bi=e=>e;const yi=i()(l.Z)(xi||(xi=bi`
  width: 100%;
  height: 100%;
  & > div {
    width: 100%;
    height: 100%;
  }
  .monaco-editor .margin-view-overlays .line-numbers {
    text-align: center;
  }
`)),ji=i().div(vi||(vi=bi`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
  max-width: 552px;
`)),Zi=i().div(fi||(fi=bi`
  padding: var(--spacing-s);
  border-radius: var(--spacing-xs);
  background: var(--background-color-error);
  font-size: var(--text-size-m);
  color: var(--content-color-primary);
  word-wrap: break-word;
  box-sizing: border-box;
`)),wi={[Za.D.CANCELLED]:(0,D.jsx)(d.Z,{name:"illustration-run-aborted"}),[Za.D.UNKNOWN]:(0,D.jsx)(d.Z,{name:"illustration-internal-server-error"}),[Za.D.INVALID_ARGUMENT]:(0,D.jsx)(d.Z,{name:"illustration-test-fail"}),[Za.D.DEADLINE_EXCEEDED]:(0,D.jsx)(d.Z,{name:"illustration-unauthorized-error"}),[Za.D.NOT_FOUND]:(0,D.jsx)(d.Z,{name:"illustration-page-not-found"}),[Za.D.ALREADY_EXISTS]:(0,D.jsx)(d.Z,{name:"illustration-unable-to-load"}),[Za.D.PERMISSION_DENIED]:(0,D.jsx)(d.Z,{name:"illustration-no-permission"}),[Za.D.RESOURCE_EXHAUSTED]:(0,D.jsx)(d.Z,{name:"illustration-unable-to-pull-request"}),[Za.D.FAILED_PRECONDITION]:(0,D.jsx)(d.Z,{name:"illustration-test-fail"}),[Za.D.ABORTED]:(0,D.jsx)(d.Z,{name:"illustration-critical-danger"}),[Za.D.OUT_OF_RANGE]:(0,D.jsx)(d.Z,{name:"illustration-test-fail"}),[Za.D.UNIMPLEMENTED]:(0,D.jsx)(d.Z,{name:"illustration-unable-to-load"}),[Za.D.INTERNAL]:(0,D.jsx)(d.Z,{name:"illustration-internal-server-error"}),[Za.D.UNAVAILABLE]:(0,D.jsx)(d.Z,{name:"illustration-internal-server-error"}),[Za.D.DATA_LOSS]:(0,D.jsx)(d.Z,{name:"illustration-unauthorized-error"}),[Za.D.UNAUTHENTICATED]:(0,D.jsx)(d.Z,{name:"illustration-no-permission"})},ki=e=>{try{return JSON.stringify(e||"")}catch(e){return""}},Si=()=>{const e=(0,m.Z)().response.messages,t=re(),{code:r,summary:o,description:n,message:s,details:a}=t||{};return 0===r&&e.length>0&&void 0!==e[0].data?(0,D.jsx)(yi,{children:(0,D.jsx)(si,{data:ki(e[0].data),languages:{postman_json:"JSON"},fullSize:!0,readOnly:!0})}):t?(0,D.jsx)(c.Z,{title:o,description:(0,D.jsxs)(ji,{children:[(0,D.jsx)(h.ZP,{type:"body-medium",color:"content-color-secondary",children:n}),s&&(0,D.jsx)(Zi,{children:s}),!!a&&(0,D.jsx)(mi,{data:a,isUnary:!0})]}),children:wi[r]}):null};var Ci=r(25710),Ei=r(45261),Ri=r(94690),Pi=r(38725),Di=r(38394),Ii=r(24867),Ti=r(95362);let Ni,Oi,Li=e=>e;const Ai=i().div(Ni||(Ni=Li`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: var(--size-xs);
  min-width: var(--size-xs);

  ${0}
`),(e=>e.background&&(0,a.css)(Oi||(Oi=Li`
      background-color: var(--${0});
    `),e.background)));function Mi({type:e}){switch(e){case"incoming":return(0,D.jsx)(Ai,{background:"background-color-info",children:(0,D.jsx)(Ri.Z,{color:"content-color-info"})});case"outgoing":return(0,D.jsx)(Ai,{background:"background-color-warning",children:(0,D.jsx)(Pi.Z,{color:"content-color-warning"})});case"success":return(0,D.jsx)(Ai,{children:(0,D.jsx)(Di.Z,{color:"content-color-success"})});case"error":return(0,D.jsx)(Ai,{children:(0,D.jsx)(Ss.Z,{color:"content-color-error"})});case"info":return(0,D.jsx)(Ai,{children:(0,D.jsx)(Ii.Z,{color:"content-color-primary"})});case"CLEARED_EVENTS":return(0,D.jsx)(Ai,{children:(0,D.jsx)(Ti.Z,{color:"content-color-primary"})});default:throw new TypeError(`Unrecognized EventIcon type: ${e}`)}}let zi,qi,$i=e=>e;const Fi=i()(h.ZP)(zi||(zi=$i`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${0}
`),(e=>e.isRawData&&(0,a.css)(qi||(qi=$i`
      ${0}
      font-family: var(--text-family-code);
    `),!e.noWrap&&"white-space: pre;")));function _i({event:e,noWrap:t}){let{summary:r,data:o}=e,n=!1;return r||(o instanceof Uint8Array?r=(0,D.jsx)("i",{children:"Binary"}):"string"==typeof o?(r=o,n=!0):void 0!==o&&(r=JSON.stringify(o),n=!0)),(0,D.jsx)(Fi,{type:"body-medium",isRawData:n,noWrap:t,color:r?"content-color-primary":"content-color-secondary",children:r||"(empty)"})}var Ui=r(32940),Wi=r.n(Ui);let Vi,Hi,Bi,Gi,Ji,Ki,Xi=e=>e;const Yi=i().div(Vi||(Vi=Xi`
  margin: 0 var(--spacing-s);
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);

  ${0}
`),(e=>e.isExpanded&&(0,a.css)(Hi||(Hi=Xi`
      background: var(--background-color-secondary);

      & ${0} {
        border-bottom: var(--border-width-default) var(--border-style-solid)
          var(--border-color-strong);
      }
    `),Qi))),Qi=i().div(Bi||(Bi=Xi`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: var(--spacing-xl);
  padding-right: var(--spacing-s);
  gap: 0 var(--spacing-xl);

  &:hover {
    background: var(--background-color-secondary);
    cursor: ${0};
  }
`),(e=>e.onClick?"pointer":"default")),el=i().div(Gi||(Gi=Xi`
  display: flex;
  align-items: center;
  gap: 0 var(--spacing-s);
  overflow-x: hidden;
  flex: ${0};
`),(e=>e.isFlexible?"1 1 auto":"0 0 auto")),tl=i()(el)(Ji||(Ji=Xi`
  ${0}:not(:hover) & {
    display: none !important;
  }
`),Qi),rl=i()(l.Z)(Ki||(Ki=Xi`
  visibility: ${0};
`),(e=>e.isHidden?"hidden":"visible"));function ol({event:e,preview:t,inspector:r,noWrap:o=!1}){const[n,a]=s().useState(!1),i=s().useMemo((()=>r?r(e):null),[e,r]),l=s().useMemo((()=>t?t(e):null),[e,t]),c=i?()=>a(!n):null,d=n?Ci.Z:Ce.Z;return(0,D.jsxs)(Yi,{isExpanded:n,children:[(0,D.jsxs)(Qi,{onClick:c,"data-testid":"timeline-event",children:[(0,D.jsx)(el,{children:(0,D.jsx)(Mi,{type:e.type||"info"})}),(0,D.jsx)(el,{isFlexible:!0,children:(0,D.jsx)(_i,{event:e,noWrap:o})}),(0,D.jsxs)(el,{children:[("incoming"===e.type||"outgoing"===e.type)&&(0,D.jsx)(tl,{children:(0,D.jsx)(f.Z,{type:"tertiary",icon:(0,D.jsx)(Ei.Z,{}),"data-testid":"copy-message-button",tooltip:(0,D.jsx)(xe.Z,{content:"Copy message",placement:"bottom"}),onClick:t=>{t.stopPropagation(),sl(e.data)}})}),l,(0,D.jsx)(h.ZP,{type:"body-medium",color:"content-color-secondary","data-testid":"event-time",children:null!=e.timestamp&&new Date(e.timestamp).toTimeString().split(" ")[0]}),(0,D.jsx)(rl,{isHidden:!c,children:(0,D.jsx)(d,{color:"content-color-primary",size:"large"})})]})]}),n&&i]})}const nl=e=>{if(!e)return;const t=document.createElement("textarea");t.style="height:0;width:0;overflow:hidden;",document.body.append(t),t.value=e,t.focus(),t.select(),document.execCommand("copy",!1,null),document.execCommand("delete",null,!1),t.remove()},sl=e=>{"string"==typeof e?nl(e):e instanceof Uint8Array?nl(Wi().from(e).toString("utf8")):nl(void 0!==e?JSON.stringify(e):"")};let al,il,ll=e=>e;const cl=i().div(al||(al=ll`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: var(--spacing-xl);
  padding-right: var(--spacing-m);
  gap: 0 var(--spacing-xl);
  margin: 0 var(--spacing-s);
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-strong);
`)),dl=i().div(il||(il=ll`
  display: flex;
  align-items: center;
  flex: ${0};
`),(e=>e.isFlexible?"1 1 auto":"0 0 auto"));function pl({count:e,onRestore:t}){return(0,D.jsxs)(cl,{children:[(0,D.jsx)(dl,{children:(0,D.jsx)(Mi,{type:"CLEARED_EVENTS"})}),(0,D.jsx)(dl,{isFlexible:!0,children:(0,D.jsxs)(h.ZP,{type:"body-medium",children:[e," messages hidden"]})}),(0,D.jsx)(dl,{children:(0,D.jsx)(f.Z,{text:"Restore",size:"small",onClick:t})})]})}let ul;const hl=i()(f.Z)(ul||(ul=(e=>e)`
  position: absolute;
  top: var(--spacing-s);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  padding: var(--spacing-xs) var(--spacing-m);
  border-radius: 20px;
  background-color: var(--content-color-link) !important;
  color: var(--content-color-constant) !important;
  box-shadow: var(--shadow-default);
  z-index: 10;

  & svg path {
    fill: var(--content-color-constant) !important;
  }
`));function gl({text:e,onClick:t}){return(0,D.jsx)(hl,{type:"primary",size:"small",text:e,icon:(0,D.jsx)(Pi.Z,{}),onClick:t})}var ml=r(72586),xl=r.n(ml),vl=r(64691),fl=r(48263),bl=r(30610),yl=r(20347),jl=r(17282);let Zl,wl,kl,Sl,Cl=e=>e;const El=i().div(Zl||(Zl=Cl`
  display: flex;
  align-items: center;
  gap: 0 var(--spacing-s);
  padding: var(--spacing-xs) var(--spacing-s);

  ${0}
`),(e=>e.hasShadow&&(0,a.css)(wl||(wl=Cl`
      box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.12);
      z-index: 1;
    `)))),Rl=i().div(kl||(kl=Cl`
  width: ${0};
  padding: var(--spacing-xs) var(--spacing-zero);
`),(e=>e.compressWidth?"180px":"240px")),Pl=i()(l.Z)(Sl||(Sl=Cl`
  align-items: center;
  gap: var(--spacing-s);
`)),Dl=[{value:"outgoing",label:(0,D.jsxs)(Pl,{children:[(0,D.jsx)("div",{children:(0,D.jsx)(Mi,{type:"outgoing"})})," ","Sent Messages"]})},{value:"incoming",label:(0,D.jsxs)(Pl,{children:[(0,D.jsx)("div",{children:(0,D.jsx)(Mi,{type:"incoming"})}),"Received Messages"]})},{value:"ALL",label:"All Messages",addDivider:!0}];function Il({onFilter:e,onClear:t,isClearable:r,hasShadow:o}){const[n,a]=s().useState(""),[i,l]=s().useState(Dl[2]),{current:c}=s().useRef(new WeakMap);return s().useEffect((()=>{e({isMatch:e=>("ALL"===i.value||e.type===i.value)&&(!n||function(e,t){let r=t.get(e);return r||(r=[],t.set(e,r),e.summary&&r.push(function(e){const t=[];return s().Children.forEach(e,(function e(r){"string"==typeof r?t.push(r):s().isValidElement(r)&&s().Children.forEach(r.props.children,e)})),t.join("")}(e.summary)),void 0!==e.data&&("string"==typeof e.data?r.push(e.data):e instanceof Uint8Array?r.push(Buffer.from(e.data).toString("utf8")):r.push(JSON.stringify(e.data)))),r}(e,c).some((e=>xl().isMatch(e,n))))})}),[n,i.value]),(0,D.jsxs)(El,{hasShadow:o,children:[(0,D.jsx)(Rl,{children:(0,D.jsx)(zo.Z,{type:"search",placeholder:"Search",value:n,onChange:e=>a(e.target.value),onClear:()=>a("")})}),(0,D.jsxs)(vl.Z,{children:[(0,D.jsx)(fl.Z,{"data-testid":"filter-menu",text:i.label,type:"tertiary"}),(0,D.jsx)(bl.Z,{children:Dl.map((e=>(0,D.jsxs)(D.Fragment,{children:[e.addDivider&&(0,D.jsx)(yl.Z,{}),(0,D.jsx)(jl.Z,{onClick:()=>l(e),children:e.label})]})))})]}),(0,D.jsx)(f.Z,{type:"tertiary",icon:(0,D.jsx)(Ms.Z,{}),text:"Clear Messages",onClick:t,isDisabled:!r})]})}let Tl,Nl,Ol,Ll=e=>e;const Al=i().div(Tl||(Tl=Ll`
  display: flex;
  flex-direction: column;
  height: 100%;
`)),Ml=i().div(Nl||(Nl=Ll`
  position: relative;
  flex: 1;
  overflow-y: hidden;
`)),zl=i().div(Ol||(Ol=Ll`
  height: 100%;
  overflow-y: auto;
`));function ql({events:e=[],inspector:t,preview:r=null}){const o=s().useRef(),[n,a]=s().useState(!1),[i,l]=s().useState(!1),[c,d]=s().useState({isMatch:()=>!0}),[p,u]=s().useState(new WeakSet),h=s().useMemo((()=>e.filter((e=>p.has(e))).length),[e,p]);s().useEffect((()=>{l(n&&e.length>0)}),[e.slice(-1)[0]]),s().useEffect((()=>{n||l(!1)}),[n]);const g=s().useMemo((()=>new WeakMap),[p,c]),m=s().useMemo((()=>e.filter((e=>{let t=g.get(e);return void 0===t&&(t=!p.has(e)&&c.isMatch(e),g.set(e,t)),t})).reverse()),[e.length,g]),{current:x}=s().useRef(new WeakMap);return(0,D.jsxs)(Al,{children:[(0,D.jsx)(Il,{onFilter:d,onClear:()=>u(new WeakSet(e)),isClearable:h<e.length,hasShadow:n}),(0,D.jsxs)(Ml,{children:[i&&(0,D.jsx)(gl,{text:"New messages",onClick:()=>{o.current&&(o.current.scrollTop=0)}}),(0,D.jsxs)(zl,{ref:o,onScroll:e=>a(e.target.scrollTop>0),children:[m.map((e=>{let o=x.get(e);return o||x.set(e,o=(0,wo.v4)()),(0,D.jsx)(ol,{event:e,preview:r,inspector:t},o)})),h>0&&(0,D.jsx)(pl,{count:h,onRestore:()=>u(new WeakSet)})]})]})]})}function $l(e){const t={};for(const{key:r,value:o}of e)Object.prototype.hasOwnProperty.call(t,r)?Array.isArray(t[r])?t[r].push(o):t[r]=[t[r],o]:t[r]=o;return t}let Fl;const _l=(0,n.lazy)((()=>r.e(6954).then(r.t.bind(r,26954,23)).then((e=>({default:e.CustomObjectInspector}))))),Ul=i().div(Fl||(Fl=(e=>e)`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-l) var(--spacing-xl);
  gap: var(--spacing-s) 0;
  max-height: 240px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
`));function Wl({data:e,label:t,children:r=""}){return(0,D.jsxs)(Ul,{children:[r,e&&(0,D.jsxs)("div",{children:[t&&(0,D.jsx)(X.Z,{type:"h6",color:"content-color-secondary",text:t}),(0,D.jsx)(n.Suspense,{fallback:(0,D.jsx)(D.Fragment,{children:" "}),children:(0,D.jsx)(_l,{data:e})}),0===Object.keys(e).length&&(0,D.jsx)(h.ZP,{type:"body-medium",color:"content-color-secondary",children:"(empty)"})]})]})}let Vl,Hl,Bl,Gl=e=>e;const Jl=i()(l.Z)(Vl||(Vl=Gl`
  max-height: 240px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  ${0}
`),(e=>e.editable&&"margin-left: var(--spacing-l)")),Kl=i()(h.ZP)(Hl||(Hl=Gl`
  white-space: normal;
`)),Xl=i()(l.Z)(Bl||(Bl=Gl`
  color: var(--content-color-primary);
`)),Yl=({label:e,padding:t})=>(0,D.jsx)(Xl,{alignItems:"baseline",padding:t,children:(0,D.jsx)(h.ZP,{type:"body-medium",children:e})}),Ql=({linkText:e,onLinkClick:t,padding:r})=>(0,D.jsxs)(Xl,{alignItems:"baseline",padding:r,children:[(0,D.jsx)(h.ZP,{type:"body-medium",children:"Received"})," ",(0,D.jsx)("span",{onClick:t,children:(0,D.jsx)(h.ZP,{type:"link-default",children:e})}),"."]}),ec=()=>{const e=se(),[t]=Kt(),[r]=Jt();return(0,n.useMemo)((()=>t||r),[e.length])},tc=e=>!(null!=e&&e.find((e=>"source"in e&&"status"===e.source))),rc=(0,g.observer)((function(){const e=se(),t=oe(),r=(0,m.Z)().response.truncated,o=ec(),s=(0,n.useRef)(o),a=(0,n.useRef)(e);t&&!o&&tc(e)||(s.current=o,a.current=e);const i=(0,n.useCallback)((e=>function({event:e,editable:t=!1,responseJSONSchema:r={},requestJSONSchema:o={}}){const n=ba().setActiveResponseTab;return"responseStarted"===e.source?t?null:0===(null==e?void 0:e.data.length)?(0,D.jsx)(Yl,{label:"No metadata received.",padding:"spacing-s spacing-xl spacing-xl"}):(0,D.jsx)(Ql,{onLinkClick:()=>n(1),linkText:"metadata",padding:"spacing-s spacing-xl spacing-xl"}):"status"===e.source?(0,D.jsxs)(Jl,{direction:"column",gap:"spacing-s",padding:"spacing-s spacing-xl spacing-xl",editable:t,children:[!!e.details.description&&(0,D.jsx)(Kl,{type:"body-medium",color:"content-color-secondary",children:e.details.description}),e.details.message&&(0,D.jsx)(h.ZP,{type:"body-medium",color:"content-color-error",children:e.details.message}),!!e.details.details&&(0,D.jsx)(mi,{data:e.details.details,isUnary:!1}),0===(null==e?void 0:e.data.length)?(0,D.jsx)(Yl,{label:"No trailer received.",padding:"spacing-zero"}):(0,D.jsx)(Ql,{onLinkClick:()=>n(2),linkText:"trailers",padding:"spacing-zero"})]}):"requestStarted"===e.source?0===e.data.length?(0,D.jsx)(Yl,{label:"No metadata sent.",padding:"spacing-s spacing-xl spacing-xl"}):(0,D.jsx)(Wl,{data:$l(e.data),label:"Metadata"}):"requestData"===e.source?(0,D.jsx)(si,{data:t?e.data:JSON.stringify(e.data),languages:{postman_json:"JSON"},readOnly:!t,settings:{validate:!0,schemas:[{schema:o||{}}]}}):"responseData"===e.source?(0,D.jsx)(si,{data:t?e.data:JSON.stringify(e.data),languages:{postman_json:"JSON"},readOnly:!t,settings:{validate:!0,schemas:[{schema:r||{}}]}}):null}({event:e,editable:!1})),[]);return r?(0,D.jsx)("div",{children:(0,D.jsx)(c.Z,{title:"Response size is too large to display",description:"We could not save the response in the history because it was too large. Invoke the request again to get a response.",children:(0,D.jsx)(d.Z,{name:"illustration-unable-to-pull-request"})})}):s.current?(0,D.jsx)(ql,{events:a.current,inspector:i}):(0,D.jsx)(Si,{})}));let oc;const nc=i().div(oc||(oc=(e=>e)`
  padding: var(--spacing-l) var(--spacing-s) var(--spacing-zero);
  div {
    background-color: transparent;
  }
`)),sc=(0,g.observer)((function(){const e=ae();return null!=e&&e.length?(0,D.jsx)(nc,{children:(0,D.jsx)(ls.KeyValueEditor,{tableName:"Response Metadata",allowedColumns:["key","value"],showColumns:["key","value"],values:e,disableSorting:!0,disableBulkEdit:!0,disableToggle:!0,disableDelete:!0,disableCreate:!0,nonEditableKeys:!0,nonEditableToggles:!0,nonEditableValues:!0})}):(0,D.jsx)(l.Z,{alignItems:"center",height:"100%",justifyContent:"center",children:(0,D.jsx)(c.Z,{description:"No metadata to show",children:(0,D.jsx)(d.Z,{name:"illustration-page-not-found"})})})}));let ac;const ic=i().div(ac||(ac=(e=>e)`
  padding: var(--spacing-l) var(--spacing-s) var(--spacing-zero);
  div {
    background-color: transparent;
  }
`)),lc=(0,g.observer)((function(){const e=ie();return null!=e&&e.length?(0,D.jsx)(ic,{children:(0,D.jsx)(ls.KeyValueEditor,{tableName:"Response Trailers",allowedColumns:["key","value"],showColumns:["key","value"],values:e,disableSorting:!0,disableBulkEdit:!0,disableToggle:!0,disableDelete:!0,disableCreate:!0,nonEditableKeys:!0,nonEditableToggles:!0,nonEditableValues:!0})}):(0,D.jsx)(l.Z,{alignItems:"center",height:"100%",justifyContent:"center",children:(0,D.jsx)(c.Z,{description:"No trailers to show",children:(0,D.jsx)(d.Z,{name:"illustration-page-not-found"})})})}));let cc,dc,pc=e=>e;const uc=i()(ho.Z)(cc||(cc=pc`
  padding: 0;
  overflow-y: auto;
  /**
   * Following selectors help provide TabPanels height of the parent.
   * Ref: apps/request-workbench/src/components/request-editor/index.tsx
   */
  & {
    height: calc(100% - var(--spacing-xxl));
  }
  & > div,
  & > div > div {
    height: 100%;
  }
`)),hc=i().div(dc||(dc=pc`
  margin-top: var(--spacing-xl);
  padding: var(--spacing-s);
  border-radius: 100px;
  background: var(--background-color-error);
  font-size: var(--text-size-m);
  color: var(--content-color-primary);
`)),gc=(0,g.observer)((()=>{const e=te(),{activeResponseTab:t}=ba(),[r]=co();return r?(0,D.jsx)(c.Z,{title:(0,D.jsx)(h.ZP,{color:"content-color-primary",type:"body-large",children:"Could not invoke method"}),description:(0,D.jsxs)(hc,{children:["Error: ",r.message]}),children:(0,D.jsx)(d.Z,{name:"illustration-call-failed"})}):e?(0,D.jsx)(uc,{activeTabIndex:t,incrementallyCreateTabs:!0,destroyInactiveTabs:!0,padding:0,"data-testid":"response-viewer-tabs",children:(0,D.jsxs)(xo.Z,{children:[(0,D.jsx)(vo.Z,{children:(0,D.jsx)(rc,{})}),(0,D.jsx)(vo.Z,{children:(0,D.jsx)(sc,{})}),(0,D.jsx)(vo.Z,{children:(0,D.jsx)(lc,{})}),(0,D.jsx)(vo.Z,{children:(0,D.jsx)(yo,{featureName:"response test results"})})]})}):(0,D.jsx)(Ma,{})}));let mc,xc,vc,fc,bc,yc=e=>e;const jc=i()(l.Z)(mc||(mc=yc`
  gap: var(--spacing-xl);
  position: absolute;
  inset: 0;
  z-index: 100;
`)),Zc=i().div(xc||(xc=yc`
  position: absolute;
  height: 2px;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 101;
`)),wc=(0,a.keyframes)(vc||(vc=yc`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(200%);
  }
`)),kc=i().div(fc||(fc=yc`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(
    78.82deg,
    var(--background-color-primary),
    var(--base-color-brand) 49.98%,
    var(--background-color-primary)
  );
  animation: ${0} 1s ease-in-out infinite;
`),wc),Sc=i().div(bc||(bc=yc`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: var(--background-color-primary);
  opacity: 0.8;
`)),Cc=(0,g.observer)((()=>{const e=oe(),t=se(),r=ec();return e&&!r&&tc(t)?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Sc,{}),(0,D.jsx)(Zc,{children:(0,D.jsx)(kc,{})}),(0,D.jsx)(jc,{alignItems:"center",justifyContent:"center",height:"100%",width:"100%",direction:"column",children:(0,D.jsx)(h.ZP,{type:"strong",children:"Invoking method..."})})]}):null}));let Ec;const Rc=i()(l.Z)(Ec||(Ec=(e=>e)`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  min-width: 600px;
  max-width: 100%;
  background-color: var(--background-color-primary);
  color: var(--content-color-primary);
`)),Pc={default:200,collapsed:33,uncollapsed:400,min:100,resizableByDefault:!0},Dc=(0,o.Z)({},Pc,{uncollapsed:200}),Ic={default:400,collapsed:33,uncollapsed:400,min:300,resizableByDefault:!0},Tc=()=>{const{historyId:e}=(0,v.useParams)();return(0,n.useEffect)((()=>{e&&P.AnalyticsService.addEventV2({category:"grpc",action:"open-tab",label:"history",value:1})}),[]),(0,D.jsx)(p.VW,{children:(0,D.jsx)(va.n,{children:(0,D.jsx)(ya,{children:(0,D.jsxs)(Rc,{direction:"column",children:[(0,D.jsx)(G,{}),(0,D.jsx)(po,{}),(0,D.jsxs)(u.PaneGroup,{defaultLayout:"vertical",scrollToResize:!0,children:[(0,D.jsxs)(u.Pane,{height:Pc,width:Ic,resizableByDefault:!0,children:[(0,D.jsx)(uo,{}),(0,D.jsx)(xa,{})]}),(0,D.jsxs)(u.Pane,{height:Dc,width:Ic,resizableByDefault:!0,children:[(0,D.jsx)(Cc,{}),(0,D.jsx)(Oa,{}),(0,D.jsx)(gc,{})]})]})]})})})})}},75301:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(40540),n=r(63721);const s=()=>{const e=(0,o.useContext)(n.K);if(!e)throw new Error("useRequestEditorStore should only be used inside RequestEditorContext");return e}},47985:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(75301);const n=()=>(0,o.Z)().request.jsonSchema},84419:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(75301);const n=()=>{const e=(0,o.Z)();return[e.payload.message.content,e.setMessage]}},63721:(e,t,r)=>{r.d(t,{K:()=>Z,n:()=>w});var o=r(40540),n=r.n(o),s=r(60607),a=r(7560),i=r(62932),l=r(9029);var c=r(5858),d=r(48722);const p=function(e="info",t={}){let r=(0,a.Z)({},((0,c.Z)(t),t));return Object.freeze((0,a.Z)({type:e,id:(0,d.v4)(),timestamp:(new Date).toISOString()},r))};var u=r(59363);function h(e=""){return e.toUpperCase().replace(/_/g,"").trim()}const g={requestStarted:"sent-request-header",responseStarted:"received-response-header",requestData:"sent-request-data",responseData:"received-response-data",status:"status"};function m(e){switch(e){case 0:return"success";case 1:case 3:case 5:case 6:case 7:case 8:case 11:case 12:case 16:return"client-error";case 2:case 9:case 10:case 13:case 15:return"server-error";case 4:case 14:return"network-error";default:return null}}const x=e=>{const t={workspaceId:e.requestMetaData.workspaceId,url:e.url,collectionId:null,apiId:null,apiVersionId:null,apiReleaseId:null,method:e.payload.methodPath};return(0,a.Z)({},t,{item:{children:null,createdAt:null,extensions:e.extensions,schema:{source:"auto"},id:null,title:"Untitled gRPC Request",type:"grpc-request",payload:{url:e.url,methodPath:e.payload.methodPath,methodDescriptor:e.payload.methodDescriptor||null,message:{content:e.payload.message.content||""},metadata:e.payload.metadata||[],settings:e.payload.settings}}})};var v=r(48391);const f={auth:{type:"noauth"},documentation:{content:""},events:[{listen:"beforeInvoke",script:{exec:"",type:""}},{listen:"afterResponse",script:{exec:"",type:""}}],schema:{source:""}};var b=r(15837);class y{constructor(e,t){var r,o=this;if(this.activeRequestEditorTab=0,this.events=[],this.url="",this.requestMetaData={workspaceId:null},this.extensions=f,this.cache=null,this.payload={message:{content:""},metadata:[],settings:{},methodDescriptor:"",methodPath:""},this.isRequestStreamed=!1,this.isResponseStreamed=!1,this.apiEditor={selected:null},this.proto={},this.request={startedAt:null,invoking:!1,isCancellable:!1,messages:[],error:null},this.response={responseTime:null,initialized:!1,messages:[],metadata:[],status:null,truncated:!1},this.eventChannel=null,this.setRequestEditorTab=e=>{this.activeRequestEditorTab=e},this.setURL=e=>{this.url=e},this.setJSONSchemaAndDescriptorFromMethod=()=>{var e;const t=this.payload.methodPath,r=null==(e=this.proto.data)?void 0:e.services;if(t&&r)for(const e of r){const r=e.methods.find((r=>`${e.name}.${r.name}`===t));var o;if(r)return this.request.jsonSchema=null==r?void 0:r.jsonSchema,void(this.payload.methodDescriptor=(0,l.generateGRPCBinaryMethodDescriptor)((0,l.safeGenerateGRPCMethodDescriptor)(null==(o=this.proto.data)?void 0:o.descriptor,r.astNode)))}this.request.jsonSchema=null,this.payload.methodPath=""},this.setSelectedMethod=e=>{this.payload.methodPath=e,this.setJSONSchemaAndDescriptorFromMethod()},this.setSecured=e=>{this.payload.settings.secureConnection=e},this.setRequestMetadata=e=>{this.payload.metadata=e},this.setMessage=e=>{this.payload.message.content=e},this.setIsRequestStreamed=e=>{this.isRequestStreamed=e},this.setIsResponseStreamed=e=>{this.isResponseStreamed=e},this.sendRequest=async function(){o.payload.methodPath&&o.url&&(b.AnalyticsService.addEventV2({category:"grpc",action:"send-request",label:"grpc-workbench",value:1}),o.events=[],o.request.invoking=!0,o.request.isCancellable=!0,o.request.error=null,o.eventChannel=await(0,l.sendGRPCRequestViaAgent)((e=>{var t,r,o,n,s;const a=(0,i.toJS)(e),c=null==(t=a.payload.methodPath)?void 0:t.split(".").slice(0,-1).join("."),d=null==(r=a.payload.methodPath)?void 0:r.split(".").pop();let p=(null==(o=a.extensions)?void 0:o.auth)||{type:"noauth"};"noauth"===p.type&&(p=null);const u=a.isRequestStreamed?{}:JSON.parse(a.payload.message.content||"{}");return{location:{url:a.url,descriptor:(null==(n=a.proto.data)?void 0:n.descriptor)||{},service:c,method:d},message:u,workingDir:"/Users/Postman/files",metadata:(null==(s=a.payload.metadata)?void 0:s.filter((e=>e.enabled)))||[],auth:p,certs:{ca:null,client:null,key:null,pfx:null,passphrase:null},options:(0,l.generateSettingsObject)(a.payload.settings),proxyOptions:{useSystemProxy:!1,ignoreProxyEnvironmentVariables:!1,proxyConfigList:[{match:"http+https://*:*/*",port:8080,disabled:!0}]}}})(o),{variables:{},requestStarted:({metadata:e,host:t})=>{(0,i.runInAction)((()=>{o.isRequestStreamed&&(o.activeRequestEditorTab=0),o.response.truncated=!1,o.response.metadata=[],o.events.push(p("info",{data:e,summary:`Sent request to ${t}`,source:"requestStarted"})),(o.isRequestStreamed||o.isResponseStreamed)&&(o.response.initialized=!0),o.request.startedAt=(new Date).toISOString()}))},responseStarted:({metadata:e,host:t})=>{(0,i.runInAction)((()=>{o.response.messages=[],o.isRequestStreamed||o.isResponseStreamed||(o.request.isCancellable=!1),o.events.push(p("info",{data:e,summary:`Received response from ${t}`,source:"responseStarted"})),o.response.initialized=!0,o.response.metadata=e}))},requestData:({data:e})=>{(0,i.runInAction)((()=>{const t=p("outgoing",{data:e,source:"requestData"});o.events.push(t),o.request.messages=[...o.request.messages,{data:e,timestamp:t.timestamp}]}))},responseData:({data:e})=>{(0,i.runInAction)((()=>{const t=p("incoming",{data:e,source:"responseData"});o.events.push(t),o.response.messages=[...o.response.messages,{data:e,timestamp:t.timestamp}]}))},status:e=>{const{code:t,codeName:r,message:n,metadata:s}=e,{tooltip:l,summary:c,description:d}=u.F[t]||{};(0,i.runInAction)((()=>{o.events.push(p(t?"error":"success",{data:s,summary:c||"Unrecognized status code",details:{code:t,codeName:r,tooltip:l||"",description:d||"",message:h(n)!==h(r)&&n||""},source:"status"}));const i={result:m(t),summary:d||r},u=function(e,{requestStream:t,responseStream:r}){return e.map((e=>{let o,n=g[e.source];switch(n||(n="invalid event"),e.source){case"requestStarted":o={metadata:e.data,isRequestStreamed:!!t,isResponseStreamed:!!r};break;case"responseStarted":o={metadata:e.data};break;case"requestData":case"responseData":o={data:e.data};break;case"status":o={statusCode:e.details.code,statusMessage:e.details.message||e.details.codeName,metadata:e.data};break;default:o=null}return{type:n,timestamp:e.timestamp,payload:o}}))}(o.events,{requestStream:o.isRequestStreamed,responseStream:o.isResponseStreamed}),f=[x(o),...u,i];(0,v.createGRPCHistoryItem)(f).catch((()=>{})),o.request.startedAt&&(o.response.responseTime=Date.now()-new Date(o.request.startedAt).getTime()),o.request.invoking=!1,o.request.isCancellable=!1,o.response.status=(0,a.Z)({},e,{tooltip:l,summary:c,description:d}),o.eventChannel=null}))}}))},this.loadProto=async function(e){var t,r,n;try{var s,c;o.cancelProtoLoading(e);const d=new AbortController;let p,u,h;switch((0,i.runInAction)((()=>{o.proto=(0,a.Z)({},o.proto,{cancelController:d,error:null,isFetching:!0,fetchingSource:e})})),e){case"reflection":h={authentication:(0,i.toJS)(o.extensions.auth),metadata:(0,i.toJS)(o.payload.metadata),settings:(0,i.toJS)(o.payload.settings)},u=await(0,l.loadProtoFromReflection)(o.url,!1,h),"updatedSettings"in u&&u.updatedSettings&&(p=u.updatedSettings);break;case"file":u=await(0,l.loadProtoFromFile)(null==(t=o.apiEditor.files)||null==(t=t[0])?void 0:t.path,{importPaths:(null==(r=o.apiEditor.importPaths)||null==(r=r.filter((e=>e.selected)))?void 0:r.map((e=>e.path)))||[]});break;case"url":u=await(0,l.loadProtoFromURL)(null==(n=o.apiEditor.url)?void 0:n.data)}if(!u||null!=(s=o.proto.cancelController)&&s.signal.aborted||(null==(c=o.proto.cancelController)?void 0:c.signal)!==d.signal)return;(0,i.runInAction)((()=>{var t,r,n;o.proto=(0,a.Z)({},o.proto,{error:(null==(t=u)?void 0:t.error)||null,data:(null==(r=u)?void 0:r.proto)||null,isFetching:!1,fetchingSource:null,source:e}),o.payload.settings=(0,a.Z)({},o.payload.settings,p),null!=(n=u)&&n.error||(o.apiEditor=(0,a.Z)({},o.apiEditor,{files:null,url:null,selected:null})),o.setJSONSchemaAndDescriptorFromMethod()}))}catch(e){(0,i.runInAction)((()=>{o.proto={error:e}}))}},this.resetProtoError=()=>{this.proto.error=null},this.setRequestAuthState=e=>{this.extensions.auth=e},this.setRequestSettings=e=>{this.payload.settings=e},this.sendStreamingMessage=()=>{this.eventChannel&&this.payload.message.content&&this.eventChannel.emit("write",JSON.parse(this.payload.message.content))},this.endStreaming=()=>{this.eventChannel&&this.request.invoking&&(this.isRequestStreamed||this.isResponseStreamed)&&this.eventChannel.emit("end")},this.cancelRequest=()=>{this.eventChannel&&this.request.isCancellable&&this.request.invoking&&this.eventChannel.emit("cancel")},this.cancelProtoLoading=e=>{var t;null!=(t=this.proto)&&t.cancelController&&this.proto.cancelController.abort(),this.proto.isFetching=!1,this.proto.fetchingSource=null},this.setSelectedAPIEditorMode=e=>{this.apiEditor.selected=e},this.setAPIEditorProtoURL=e=>{this.apiEditor.url=e},this.setAPIEditorImportPaths=e=>{this.apiEditor.importPaths=e},this.setAPIEditorFiles=e=>{this.apiEditor.files=e},this.openProtoFileSelectorDialog=()=>l.agentManager.agent.grpc("openProtoSelectorDialog"),this.openProtoImportPathSelectorDialog=()=>l.agentManager.agent.grpc("openFolderSelectorDialog"),this.setRequestError=e=>{this.request.error=e},(0,i.makeObservable)(this,{activeRequestEditorTab:!0,events:!0,url:!0,apiEditor:!0,payload:!0,extensions:!0,proto:!0,isRequestStreamed:!0,isResponseStreamed:!0,request:!0,response:!0,setRequestEditorTab:i.action,setURL:i.action,setSecured:i.action,setRequestMetadata:i.action,setSelectedMethod:i.action,resetProtoError:i.action,setMessage:i.action,setIsRequestStreamed:i.action,setIsResponseStreamed:i.action,setRequestAuthState:i.action,setRequestSettings:i.action,sendRequest:i.action,cancelRequest:i.action,endStreaming:i.action,cancelProtoLoading:i.action,setSelectedAPIEditorMode:i.action,setAPIEditorFiles:i.action,setAPIEditorProtoURL:i.action,setAPIEditorImportPaths:i.action,setRequestError:i.action}),null!=t&&t.workspaceId&&(this.requestMetaData={workspaceId:t.workspaceId}),!e||0===e.length)return;const n=!(!(s=e)||0===s.length)&&s.slice(1,-1).some((e=>void 0===e.payload));var s;if(n)return this.response.truncated=n,void(this.response.initialized=!0);const c=e[0];if(c){this.requestMetaData={workspaceId:c.workspaceId},this.url=c.url,this.events=(y=e,j=this.url,y.flatMap((e=>{switch(e.type){case"sent-request-header":return[{type:"info",source:"requestStarted",timestamp:e.timestamp,data:e.payload.metadata,summary:`Sent request to ${j.replace(/^([\d+.a-z-]+):\/\//i,"")||"unknown"}`}];case"received-response-header":return[{type:"info",source:"responseStarted",timestamp:e.timestamp,data:e.payload.metadata,summary:`Received response from ${j.replace(/^([\d+.a-z-]+):\/\//i,"")||"unknown"}`}];case"sent-request-data":return[{type:"outgoing",source:"requestData",timestamp:e.timestamp,data:e.payload.data}];case"received-response-data":return[{type:"incoming",source:"responseData",timestamp:e.timestamp,data:e.payload.data}];case"status":{const t=e.payload.statusCode,r=e.payload.statusMessage,{codeName:o,tooltip:n,summary:s,description:a}=u.F[t]||{};return[{type:t?"error":"success",source:"status",timestamp:e.timestamp,data:e.payload.metadata,summary:s||"Unrecognized status code",details:{code:t,codeName:o,tooltip:n||"",description:a||"",message:h(r)!==h(o)&&r||""}}]}default:return[]}}))||[]),this.extensions=c.item.extensions,this.payload=c.item.payload;const t=(0,l.getGRPCCachedMethodDetails)(c);var d;null!=t&&t.descriptor&&null!=t&&t.service&&(this.cache=t,this.request.jsonSchema=null==(d=t.service.methods[0])?void 0:d.jsonSchema,this.proto={data:{services:[t.service],descriptor:t.descriptor,source:"cache"},source:"cache",isFetching:!1,error:null})}var y,j;const Z=e.find((e=>"type"in e&&"sent-request-header"===e.type)),w=e.find((e=>"type"in e&&"received-response-header"===e.type)),k=e.find((e=>"type"in e&&"status"===e.type));this.isRequestStreamed=Z.payload.isRequestStreamed,this.isResponseStreamed=Z.payload.isResponseStreamed;const S=e.filter((e=>"type"in e&&"received-response-data"===e.type));this.response.messages=S.map((e=>({data:e.payload.data,timestamp:e.timestamp})));const C=e.filter((e=>"type"in e&&"sent-request-data"===e.type));if(this.request.messages=C.map((e=>({data:e.payload.data,timestamp:e.timestamp}))),w&&null!=(r=w.payload)&&r.metadata&&(this.response.metadata=w.payload.metadata),k){this.response.initialized=!0;const{tooltip:e,summary:t,description:r}=u.F[k.payload.statusCode]||{};this.response.status={code:k.payload.statusCode,codeName:k.payload.statusMessage,metadata:k.payload.metadata,tooltip:e,summary:t,description:r,message:k.payload.statusMessage},Z&&(this.response.responseTime=new Date(k.timestamp).getTime()-new Date(Z.timestamp).getTime())}}}var j=r(52322);const Z=n().createContext({}),w=({children:e})=>{const{workspaceId:t,historyId:r}=(0,s.useParams)();if(!(0,s.useInRouterContext)())throw new Error("RequestEditorProvider must be used within a Router");const n=(()=>{const e=(0,s.useLoaderData)();return null!=e&&e.requestData?e.requestData:null})(),a=(0,o.useMemo)((()=>new y(n,{workspaceId:t})),[r]);return(0,j.jsx)(Z.Provider,{value:a,children:e})}}}]);
//# sourceMappingURL=2018.99132d017c1558f4.js.map