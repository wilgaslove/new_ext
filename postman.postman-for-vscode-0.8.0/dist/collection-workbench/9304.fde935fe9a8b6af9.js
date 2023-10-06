"use strict";(self.webpackChunkcollection_workbench=self.webpackChunkcollection_workbench||[]).push([[9304],{6443:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(40540),o=n(25892),a=n.n(o),i=n(20856),s=n(58560),l=n(34967),c=n(70262),u=n(95362),d=n(98366),p=n(52322);const g=a()(s.Z).withConfig({displayName:"resolved-variable-tooltip__StyledHeaderRow",componentId:"sc-t1yhmc-0"})(["align-items:center;padding:var(--spacing-zero) var(--spacing-zero) var(--spacing-s) var(--spacing-zero);margin-bottom:var(--spacing-xs);font-size:var(--text-size-s);"]),h=a().span.withConfig({displayName:"resolved-variable-tooltip__StyledScopeIcon",componentId:"sc-t1yhmc-1"})(["border-radius:var(--border-radius-default);text-align:center;color:var(--content-color-constant);font-weight:var(--text-weight-medium);line-height:var(--line-height-s);font-size:var(--line-height-xs);margin-right:5px !important;padding:0px 5px;text-transform:capitalize;flex:0 0 5%;background-color:",";"],(e=>{switch(e.scope){case"globals":return"var(--base-color-info)";case"collection":return"var(--base-color-warning)";case"environment":return"var(--base-color-success)";default:return""}})),f=a().div.withConfig({displayName:"resolved-variable-tooltip__StyledValueItemNonMasked",componentId:"sc-t1yhmc-2"})(["text-overflow:ellipsis;max-height:75px;overflow:hidden;word-wrap:break-word;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;line-height:normal;"]),v=a().span.withConfig({displayName:"resolved-variable-tooltip__StyledVariableName",componentId:"sc-t1yhmc-3"})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 var(--spacing-xs);flex:1;min-width:150px;font-weight:var(--text-weight-medium);"]),m=a().span.withConfig({displayName:"resolved-variable-tooltip__StyledToggleMaskIcon",componentId:"sc-t1yhmc-4"})(["margin-left:var(--spacing-xs);display:inline-flex;"]),b=a()(s.Z).withConfig({displayName:"resolved-variable-tooltip__StyledVariableItem",componentId:"sc-t1yhmc-5"})(["padding:2px 0px;font-size:var(--text-size-s);min-width:120px;"]),y=a().div.withConfig({displayName:"resolved-variable-tooltip__StyledVariableItemValue",componentId:"sc-t1yhmc-6"})(["-webkit-line-clamp:5;-webkit-box-orient:vertical;max-height:75px;max-width:150px;width:150px;display:inline-flex;align-items:center;"]),x=a().div.withConfig({displayName:"resolved-variable-tooltip__StyledLabel",componentId:"sc-t1yhmc-7"})(["font-size:var(--text-size-s);text-align:right;color:var(--content-color-secondary);display:flex;flex:0 0 60px;width:60px;user-select:none;"]),w=a()(l.Z).withConfig({displayName:"resolved-variable-tooltip__StyledTextInput",componentId:"sc-t1yhmc-8"})(["justify-content:center;border:none;height:var(--text-size-s);padding-left:0;button{display:none !important;}input{height:var(--text-size-s);}&:hover,&:focus-within{border:none;box-shadow:none;}"]),k=(e,t,n)=>(0,p.jsxs)(b,{children:[(0,p.jsx)(x,{className:"variable-meta-item-label",children:"current"===t?"CURRENT":"INITIAL"}),(0,p.jsx)(y,{children:n?(0,p.jsx)(w,{value:(0,d.Fn)("current"===t?e.sessionValue:e.value),type:"password",enableCopy:!0}):(0,p.jsx)(s.Z,{justifyContent:"space-between",width:"100%;",children:(0,p.jsx)(f,{children:(0,d.Fn)("current"===t?e.sessionValue:e.value)})})})]}),I=({variableMeta:e})=>{const t="secret"===e.type,[n,o]=(0,r.useState)(t);return(0,p.jsxs)("div",{tabIndex:-1,children:[(0,p.jsxs)(g,{children:[(0,p.jsx)(h,{scope:e.scope,children:e.scope&&e.scope.charAt(0)}),(0,p.jsx)(v,{children:(0,d.Fn)(e.key)}),t&&(0,p.jsx)(m,{onClick:()=>o(!n),children:n?(0,p.jsx)(u.Z,{}):(0,p.jsx)(c.Z,{})})]}),(0,p.jsxs)(s.Z,{direction:"column",children:[k(e,"initial",n),k(e,"current",n),(0,p.jsxs)(b,{children:[(0,p.jsx)(x,{children:"SCOPE"}),(0,p.jsx)(y,{children:(0,d.KN)("globals"===e.scope.toLowerCase()?(0,d.C5)(e.scope):e.scope)})]})]})]})};var C=n(74962),j=n(63622),S=n(35482);const R=()=>(0,p.jsxs)("div",{children:[(0,p.jsxs)(s.Z,{direction:"row",gap:"spacing-s",children:[(0,p.jsx)(S.Z,{color:"base-color-error"}),(0,p.jsx)(C.Z,{type:"h4",color:"content-color-primary",text:"Unresolved Variable",hasBottomSpacing:!0})]}),(0,p.jsx)(j.ZP,{type:"para",hasBottomSpacing:!0,children:(0,p.jsx)(j.ZP,{type:"body-medium",children:"Make sure the variable is defined and enabled in the active environment, collection or globals."})})]}),N=a()(i.ZP).withConfig({displayName:"variable-tooltip__StyledPopover",componentId:"sc-pn7b12-0"})(["> div.tippy-content{background-color:var(--background-color-primary);}"]),_=({trigger:e,value:t})=>e?(0,p.jsx)(N,{placement:"bottom-start",padding:"spacing-l",trigger:e,pointer:!0,triggerEvent:"mouseenter",children:t?(0,p.jsx)(I,{variableMeta:t}):(0,p.jsx)(R,{})}):null},59304:(e,t,n)=>{n.r(t),n.d(t,{AuthInput:()=>Ke,AuthInputMock:()=>Qe,AutoSuggestionInput:()=>de,KVEditorInput:()=>De,KVEditorInputMock:()=>Ue,PostmanInput:()=>oe,URLInput:()=>Ve,URLInputMock:()=>Be,addToURLValue:()=>Pe,assertURLValue:()=>Le,capitalizeFirstCharacter:()=>H.KN,castNonStringTypesToString:()=>H.Fn,extractVariablesFromString:()=>H.rn,getPathVariablesValues:()=>qe,getResolvedVariables:()=>H.w1,getURLFromQueryParams:()=>Fe,getURLInput:()=>Ae,getURLValue:()=>ze,getUpdatedQueryParamsFromURL:()=>Ee,getVariable:()=>H.E0,isUnResolvedVariable:()=>H.CS,isVariableResolved:()=>H.Q0,isVariableText:()=>H.yG,setURLValue:()=>Oe,singularize:()=>H.C5,usePostmanInputFeatureFlag:()=>ae});var r=n(40540),o=n(25892),a=n.n(o),i=n(98283),s=n(15626),l=n.n(s),c=n(52322);const u=["children","className","isOpen","gap","trigger","triggerRef","appendTo","pointer","xOffset","onClickOutside","maxWidth","placement","triggerEvent"],d=a()(l()).withConfig({displayName:"popover__StyledTippy",componentId:"sc-9cfli3-0"})(["& .tippy-content{min-width:120px;z-index:1000;border-radius:var(--border-radius-default);font-family:var(--text-family-default);font-size:var(--text-size-m);line-height:var(--line-height-m);font-weight:var(--text-weight-regular);background-color:",";box-shadow:",";}& .tippy-svg-arrow > svg{filter:",";}& .tippy-svg-arrow > svg > path{fill:",";}"],(e=>e.theme["popover-background-color"]),(e=>e.theme["popover-box-shadow"]),(e=>e.theme["popover-pointer-filter"]),(e=>e.theme["popover-background-color"]));function p(e){var t;let{children:n,className:o,isOpen:a,gap:s=4,trigger:l,triggerRef:p,appendTo:g,pointer:h,xOffset:f=0,onClickOutside:v,maxWidth:m=320,placement:b="bottom-end",triggerEvent:y="click"}=e,x=(0,i.Z)(e,u);const w=(0,r.useRef)(null),k=h?s+11:s;function I(e){var t;27===e.keyCode&&("boolean"==typeof a&&w.current?null==v||v(w.current,e):null==(t=w.current)||t.hide())}function C(){document.addEventListener("keydown",I)}function j(){document.removeEventListener("keydown",I)}var S;return null!==a?(0,c.jsx)(d,Object.assign({},x,{interactive:!0,visible:a,onCreate:e=>w.current=e,content:n,placement:b,maxWidth:m,className:`aether-popover ${o}`,arrow:!1,appendTo:null!=(S=null!=g?g:document.querySelector("#aether-popover-portal"))?S:void 0,reference:p,onShow:C,onHide:j,offset:[f,k],onClickOutside:v,children:l})):(0,c.jsx)(d,Object.assign({},x,{interactive:!0,onCreate:e=>w.current=e,content:n,placement:b,trigger:y,maxWidth:m,className:`aether-popover ${o}`,arrow:!1,appendTo:null!=(t=null!=g?g:document.querySelector("#aether-popover-portal"))?t:void 0,reference:p,onShow:C,onHide:j,offset:[f,k],onClickOutside:v,children:l}))}d.displayName="styled(Tippy)";var g=n(60949),h=n(74962),f=n(22723),v=n.n(f),m=n(53723),b=n.n(m);const y=32,x=a().li.withConfig({displayName:"suggestion-list-item-container__StyledContainer",componentId:"sc-1qimvt-0"})(["&.action{cursor:pointer;}&:hover,&.selected{background-color:var(--highlight-background-color-secondary);}"]),w=a().div.withConfig({displayName:"suggestion-list-item-container__StyledItem",componentId:"sc-1qimvt-1"})(["height:","px;width:100%;box-sizing:border-box;padding:var(--spacing-zero) var(--spacing-m);color:var(--content-color-secondary);font-size:var(--text-size-m);display:flex;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"],y),k=({value:e})=>e?(0,c.jsx)(w,{children:e}):null,I=e=>{const{style:t,isSelected:n,item:r,onSelect:o}=e;return(0,c.jsx)(x,{tabIndex:-1,role:"option","aria-label":r.value,className:b()("action",{selected:n}),style:t,onClick:()=>r.value&&(null==o?void 0:o(r.value)),children:(0,c.jsx)(k,{value:r.value})})},C=["items"],j=["style","data"],S=["items"],R=["style","data"],N=["items","selectedIndex"];function _(e,t){const{style:n,data:{items:r}}=e,o=(0,i.Z)(e.data,C),a=(0,i.Z)(e,j),{style:s,data:{items:l}}=t,c=(0,i.Z)(t.data,S),u=(0,i.Z)(t,R);return v()(n,s)&&v()(r,l)&&v()(o,c)&&v()(a,u)}const F=(0,r.memo)((({data:e,index:t,style:n})=>{const{items:r,selectedIndex:o}=e,a=(0,i.Z)(e,N),s=r[t];return(0,c.jsx)(I,Object.assign({item:s,isSelected:o===t,style:n},a))}),_);F.displayName="memo(ItemRenderer)";const E=F,q=["children","ref"],T=a().ul.withConfig({displayName:"react-window-list__StyledList",componentId:"sc-satylt-0"})(["height:100%;width:100%;margin:0;padding:0;list-style:none;box-sizing:border-box;li:last-child{&,div{border-bottom-left-radius:var(--border-radius-default);border-bottom-right-radius:var(--border-radius-default);}}"]);function z(e){let{children:t,ref:n}=e,r=(0,i.Z)(e,q);const o=n;return(0,c.jsx)(T,Object.assign({id:"autosuggest-datalist",role:"listbox","aria-label":"Autosuggest Listbox",tabIndex:-1,ref:o},r,{children:t}))}function L(e){const t=(0,r.useRef)(e);return t.current=e,t.current}const O=e=>{const t=e*y;return t>200?200:t},P=a()(h.Z).withConfig({displayName:"suggestion-list__SuggestionHeading",componentId:"sc-1tnqhww-0"})(["padding:var(--spacing-m) var(--spacing-m) var(--spacing-s) var(--spacing-m);"]);function A({suggestions:e,selectedIndex:t,onSelect:n}){const o=(0,r.useRef)(null),a=L(n),i=0===e.length;(0,r.useEffect)((()=>{"number"==typeof t&&o.current&&o.current.scrollToItem(t,"smart")}),[t]);const s={items:e,selectedIndex:t,onSelect:a};return(0,c.jsxs)(c.Fragment,{children:[!i&&(0,c.jsx)(P,{type:"h5",text:"Recently used URLs",color:"content-color-secondary"}),(0,c.jsx)(g.FixedSizeList,{ref:o,height:O(e.length),itemData:s,itemKey:(e,t)=>{const{items:n}=t;return n[e].id},itemCount:e.length,itemSize:y,innerElementType:z,width:"100%",children:E})]})}const B={modifiers:[{name:"sameWidth",enabled:!0,fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},phase:"beforeWrite",requires:["computeStyles"],effect:({state:e})=>{e.elements.popper.style.width=`${e.elements.reference.clientWidth}px`}}]},Z=function(e,t,n){let r,o,a,i,s,l,c=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){const n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n),i}function h(e,t){return setTimeout(e,t)}function f(e){const n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function v(){const e=Date.now();if(f(e))return m(e);s=h(v,function(e){const n=e-c,r=t-(e-l);return d?Math.min(r,a-n):r}(e))}function m(e){return s=void 0,p&&r?g(e):(r=o=void 0,i)}function b(...e){const n=Date.now(),a=f(n);if(r=e,o=this,l=n,a){if(void 0===s)return function(e){return c=e,s=h(v,t),u?g(e):i}(l);if(d)return s=h(v,t),g(l)}return void 0===s&&(s=h(v,t)),i}return t=+t||0,b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},b.flush=function(){return void 0===s?i:m(Date.now())},b.pending=function(){return void 0!==s},b}(((e,t)=>{t(e)}),100),V=e=>[...new Map(e.map((e=>[e.value,e]))).values()];function U({searchTerm:e,suggestions:t,customFilter:n}){const[o]=function(e){const[t,n]=(0,r.useState)(e);return e!==t&&Z(e,n),(0,r.useEffect)((()=>()=>{Z.cancel()}),[]),[t]}(e),[a,i]=(0,r.useState)(t),s=(0,r.useRef)(V(t)),l=L(n);a!==t&&(i(t),s.current=V(t));const c=(0,r.useMemo)((()=>0===a.length?[]:o?l?s.current.filter((e=>null==l?void 0:l(e))):s.current.filter((e=>{var t;return(null==(t=e.value)?void 0:t.toLowerCase().includes(o.toLowerCase()))&&e.value!==o})):s.current.filter((e=>!!e.value))),[o,a,l]);return{filteredList:c,hasNoItems:0===c.length}}const M=(e,t)=>t>e-1||t<0;function D({index:e,arraySize:t}){return(0,r.useMemo)((()=>"number"!=typeof e?e:M(t,e)?Math.max(0,Math.min(e,t-1)):e),[e,t])}var H=n(98366),W=n(21219),K=n(6443);const Q=a().div.withConfig({displayName:"postman-input-skeleton__StyledInputPlaceholder",componentId:"sc-1wze1j-0"})(["display:flex;flex:1;height:100%;box-sizing:border-box;color:",";background-color:",";height:100%;align-items:center;font-size:var(--font-size-default);position:absolute;top:var(--spacing-zero);left:var(--spacing-zero);width:100%;line-height:1.5;"],(e=>e.value?"var(--content-color-primary)":"var(--content-color-tertiary)"),(e=>e.isEditable?"var(--background-color-primary)":"var(--background-color-secondary)")),J=a().div.withConfig({displayName:"postman-input-skeleton__InputWrapper",componentId:"sc-1wze1j-1"})(["white-space:nowrap !important;text-overflow:ellipsis;overflow:hidden;padding:0 var(--spacing-s);"]);function $(e,t){if(!e)return"";if(null==t||!t.length)return e;const n=(0,H.w1)(e,t);if(null==n||!n.length)return e;const r=[];let o=0,a=0;for(const i of n){if(a++,i.startIndex>o){const t=e.slice(o,i.startIndex);r.push(t)}const n=e.slice(i.startIndex,i.endIndex),s=i.isResolved?"resolved-variable":"un-resolved-variable",l=(0,H.E0)(n,t);r.push((0,c.jsx)(K.Z,{trigger:(0,c.jsx)(X,{isResolved:!!i.isResolved,"data-testid":s,spellCheck:!1,children:n},a),value:l})),o=i.endIndex}if(o<e.length){const t=e.slice(o);r.push(t)}return r}function G({placeholderText:e,value:t,onFocus:n,onClick:r,ariaLabel:o,dataTestId:a,isEditable:i=!0}){const{data:s}=(0,W.useActiveVariables)();return(0,c.jsx)(Q,{onFocus:n,onClick:r,value:t,className:"input-skeleton",tabIndex:0,role:"textbox","aria-label":o,"data-testid":a||"input-skeleton",isEditable:i,children:(0,c.jsx)(J,{className:"input-wrapper",children:$(t,s)||e})})}const X=a().span.withConfig({displayName:"postman-input-skeleton__StyledSpan",componentId:"sc-1wze1j-2"})(["color:",";background-color:",";padding:2px;"],(({isResolved:e})=>e?"var(--base-color-brand)":"var(--content-color-error)"),(({isResolved:e})=>e?"transparent":"var(--background-color-error)")),Y=(0,r.lazy)((()=>Promise.all([n.e(7669),n.e(4025),n.e(923),n.e(9205)]).then(n.bind(n,29205)))),ee=null,te=a().div.withConfig({displayName:"postman-input__Container",componentId:"sc-1b34114-0"})(["display:flex;flex:1;width:100%;position:relative;"]),ne=a()(p).withConfig({displayName:"postman-input__StyledPopover",componentId:"sc-1b34114-1"})(["> div.tippy-content{padding:0;background-color:var(--background-color-primary);}"]);function re({onChange:e,suggestions:t=[],customFilter:n,onEnter:o,value:a,placeholder:i="",allowEnter:s=!1,onPaste:l=(()=>{}),className:u="postman-input-wrapper",ariaLabel:d,dataTestId:p,isEditable:g,onHardFocus:h}){const f={suggestions:t,searchTerm:a,customFilter:n},v=(0,r.useRef)(null),[m,b]=(0,r.useState)(!1),[y,x]=(0,r.useState)(ee),{filteredList:w}=U(f),k=(0,r.useRef)((()=>{m||(x(ee),b(!0))})),I=(0,r.useRef)((()=>{b(!1),x(ee)})),C=D({index:y,arraySize:w.length}),j=(0,r.useCallback)((t=>{null==e||e(t),I.current()}),[e,I]),S=(0,r.useCallback)((()=>{if(m&&"number"==typeof C&&w[C]){const e=w[C].value;e&&j(e)}else I.current(),null==o||o()}),[C,m,w,j,o]),R=(0,r.useCallback)((e=>{const t="number"==typeof C;return!(!m||!["ArrowDown","ArrowUp"].includes(e.key))&&(x((t?C:-1)+("ArrowDown"===e.key?1:-1)),!1)}),[C,m,w,j,o]),N=(0,r.useCallback)((t=>{null==e||e(t)}),[e]);return(0,c.jsx)(te,{ref:v,className:u,children:(0,c.jsx)(ne,{role:"presentation",appendTo:"parent",trigger:(0,c.jsx)(te,{children:(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)(G,{placeholderText:i,value:a,onFocus:()=>{},ariaLabel:d,isEditable:g,dataTestId:p}),children:(0,c.jsx)(Y,{value:a,onChange:e=>{e!==a&&N(e)},onKeyDown:R,onEnter:S,allowEnter:s,placeholder:i,onPaste:l,isEditable:g,autofocus:!0,ariaLabel:d,dataTestId:p,onHardFocus:e=>{h&&(e?k.current():I.current(),null==h||h(e))}})})}),isOpen:m,maxWidth:"none",popperOptions:B,children:(0,c.jsx)(A,{suggestions:w,selectedIndex:C,onSelect:j})})})}function oe({onChange:e,suggestions:t=[],customFilter:n,onEnter:o,value:a,placeholder:i="",allowEnter:s=!1,onPaste:l,autofocus:u=!1,className:d="postman-input-wrapper",ariaLabel:p="input",dataTestId:g="input",isEditable:h=!0,onHardFocus:f}){const[v,m]=(0,r.useState)(u);return v?(0,c.jsx)(re,{onChange:e,suggestions:t,customFilter:n,onEnter:o,value:a,placeholder:i,allowEnter:s,onPaste:l,autofocus:u,ariaLabel:p,dataTestId:g,className:d,isEditable:h,onHardFocus:f}):(0,c.jsx)(te,{className:d,children:(0,c.jsx)(G,{onFocus:()=>{null==f||f(!0),m(!0)},placeholderText:i,value:a,ariaLabel:p,dataTestId:g,isEditable:h})})}function ae(){return!0}const ie=["onChange","suggestions","customFilter","onPaste","setIsHardFocused"],se=null,le=a().div.withConfig({displayName:"autosuggestion-input__Container",componentId:"sc-ojkluc-0"})(["display:flex;flex:1;width:100%;"]),ce=a()(p).withConfig({displayName:"autosuggestion-input__StyledPopover",componentId:"sc-ojkluc-1"})(["> div.tippy-content{padding:0;background-color:var(--background-color-primary);}"]),ue=a().input.withConfig({displayName:"autosuggestion-input__StyledInput",componentId:"sc-ojkluc-2"})(["width:100%;box-sizing:border-box;padding:var(--spacing-s);color:var(--content-color-primary);background-color:var(--background-color-tertiary);border:var(--border-width-default) var(--border-style-solid) var(--border-color-default);&:focus,&.is-focused{background-color:var(--background-color-primary);border:var(--border-width-default) var(--border-style-solid) var(--border-color-default);}"]);function de(e){let{onChange:t,suggestions:n,customFilter:o,onPaste:a,setIsHardFocused:s}=e,l=(0,i.Z)(e,ie);const u={suggestions:n,searchTerm:l.value,customFilter:o},d=(0,r.useRef)(null),p=(0,r.useRef)(null),[g,h]=(0,r.useState)(!1),[f,v]=(0,r.useState)(se),{filteredList:m}=U(u),b=(0,r.useRef)((()=>{v(se),h(!0)})),y=(0,r.useRef)((()=>{h(!1),v(se)})),x=D({index:f,arraySize:m.length}),w=e=>{null==t||t(e),y.current()};return(0,c.jsx)(le,{ref:d,children:(0,c.jsx)(ce,{role:"presentation",appendTo:"parent",trigger:(0,c.jsx)(ue,Object.assign({"aria-label":"URL Input"},l,{ref:p,type:"text",list:"autosuggest-datalist","aria-owns":"autosuggest-datalist","aria-autocomplete":"list","aria-expanded":g,onChange:e=>{b.current(),null==t||t(e.target.value)},onKeyDown:e=>{const t="number"==typeof x;if(g&&["ArrowDown","ArrowUp"].includes(e.key))return e.preventDefault(),void v((t?x:-1)+("ArrowDown"===e.key?1:-1));if(g&&t&&m[x]&&"Enter"===e.key){e.preventDefault();const t=m[x].value;t&&w(t)}else"Enter"!==e.key||y.current()},onPaste:a,onClick:()=>null==s?void 0:s(!0),onBlur:()=>{null==s||s(!1)},autoFocus:!0})),isOpen:g,maxWidth:"none",onClickOutside:y.current,popperOptions:B,children:(0,c.jsx)(A,{suggestions:m,selectedIndex:x,onSelect:w})})})}var pe=n(69705),ge=n.n(pe);const he="&",fe="=",ve="#",me=/#/g,be=/=/g,ye=/&/g,xe=/{{[^{}]*[&#=][^{}]*}}/g;function we(e,t){if(!e||"string"!=typeof e)return e;let n,r,o,a="",i=0;for(;null!==(r=xe.exec(e));)n=r[0],o=r.index,a+=ke(e.slice(i,o),t)+n,i=o+n.length;return i<e.length&&(a+=ke(e.slice(i),t)),a}function ke(e,t){return e?(null!==e.includes(he)&&(e=e.replace(ye,"%26")),null!==e.includes(ve)&&(e=e.replace(me,"%23")),t&&null!==e.includes(fe)&&(e=e.replace(be,"%3D")),e):e}const Ie={unparseSingle(e){if(!e)return"";const t=e.key,n=e.value;let r="";return"string"==typeof t&&(r=we(t,!0)),"string"==typeof n&&(r+=fe+we(n)),r},parseSingle:function(e){if(""===e)return{key:null,value:null};const t="string"==typeof e?e.indexOf(fe):-1,n={};return t<0?(n.key=e,n.value=null):(n.key=e.slice(0,t),n.value=e.slice(t+1)),n}},Ce=".",je=":";class Se{constructor(e){this.url=void 0,this.url=e}toString(){let e="";if(this.url.query){const t=this.getQueryString();"string"==typeof t&&(e+=t)}return e}getQueryString(){return Ne.unparse(this.url.query)}}function Re(e){const t=ge().parse(e),n={},r=new Map;t.auth&&(n.auth={user:t.auth[0],password:t.auth[1]}),t.query&&(n.query=t.query.map((e=>Ie.parseSingle(e))));const o=(t.path||[]).reduce(((e,t)=>{const n=function(e){if(String(e).startsWith(je)){const t=e.indexOf(Ce);return e.slice(1,-1===t?void 0:t)||null}return null}(t);return n&&!r.get(n)&&(r.set(n,!0),e.push({key:n})),e}),[]);return n.variable=o.length>0?o:void 0,Object.assign({},t,n)}const Ne={unparse(e){if(!e)return"";let t=!0;return e.reduce((function(e,n){return!1===n.enabled?e:(t?t=!1:e+=he,e+Ie.unparseSingle(n))}),"")}};function _e(e){return!(!1===(null==e?void 0:e.enabled))}function Fe(e){const t=e.filter((e=>e.enabled));return new Se({query:t}).toString()}function Ee(e,t){return n=t,function(e,t){const n=[...e||[]],r=[...t||[]],o=r.filter((e=>!1===e.enabled)),a=[];if(0===e.length&&0===o.length)return e.map((e=>Object.assign({},e,{description:"",enabled:_e(e)})));if(e.length>=r.length){for(const t of e){const e=r.findIndex((e=>(e.key||"")===(t.key||"")&&!e.alreadyProcessed));var i;-1!=e?(r[e].alreadyProcessed=!0,a.push(Object.assign({},t,{description:(null==r||null==(i=r.withDescIndex)?void 0:i.description)||"",enabled:_e(t)}))):a.push(Object.assign({},t,{description:"",enabled:_e(t)}))}return[...a,...r.filter((e=>!1===e.enabled&&!e.alreadyProcessed))]}for(const e of r){const t=n.findIndex((t=>(t.key||"")===(e.key||"")&&(t.value||"")===(e.value||"")&&!t.alreadyProcessed));var s,l,c,u;-1!=t?(n[t].alreadyProcessed=!0,a.push(Object.assign({},{key:null==(s=n[t])?void 0:s.key,value:null==(l=n[t])?void 0:l.value,enabled:null==(c=n[t])?void 0:c.enabled,equals:null==(u=n[t])?void 0:u.equals},{description:(null==e?void 0:e.description)||"",enabled:_e(n[t])}))):!1===e.enabled&&a.push(e)}return[...a,...n.filter((e=>!e.alreadyProcessed))]}(function(e){return e?(Re(e).query||[]).map((e=>(e.equals=!!e.value,e))):[]}(e),n);var n}function qe(e,t){const n=function(e){return e?(Re(e).variable||[]).map((e=>e.key)):[]}(e);return n.map((e=>{const n=function(e,t){return t.find((t=>t.key===e))}(e,t);return n?Object.assign({},n,{key:e}):{key:e,value:null}}))}var Te=n(72783);async function ze(){Range.prototype.getBoundingClientRect=()=>({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON:()=>{}});try{return(await Te.screen.findByRole("textbox",{name:/request\-url/i})).textContent||""}catch(e){return Te.screen.queryByText(/enter url or paste text/i)?"":(await Te.screen.findAllByTestId("input-skeleton"))[0].textContent||""}}async function Le(e){await(0,Te.waitFor)((()=>{var t;return expect(null==(t=Te.screen.queryByRole("textbox",{name:/request\-url/i}))?void 0:t.textContent).toEqual(e)}))}async function Oe(e,t){var n,r;Range.prototype.getBoundingClientRect=()=>({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON:()=>{}});try{await Te.screen.findByRole("textbox",{name:/request\-url/i})}catch(e){const n=(await Te.screen.findAllByTestId("input-skeleton"))[0];await t.click(n)}const o=await Te.screen.findByRole("textbox",{name:/request\-url/i});await t.click(o);const a=null!=(n=null==(r=o.textContent)?void 0:r.length)?n:0;for(let e=0;e<a;e++)await t.type(o,"{backspace}"),await(0,Te.waitFor)((()=>{var t;return expect(null==(t=Te.screen.getByRole("textbox",{name:/request\-url/i}))||null==(t=t.textContent)?void 0:t.length).toEqual(a-e-1)}));await(0,Te.waitFor)((async()=>expect(null==o?void 0:o.textContent).toEqual(""))),e&&(Te.fireEvent.input(o,{data:e}),await(0,Te.waitFor)((()=>expect(Te.screen.getByRole("textbox",{name:/request\-url/i}).textContent).toEqual(e))))}async function Pe(e,t){Range.prototype.getBoundingClientRect=()=>({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON:()=>{}});try{await Te.screen.findByRole("textbox",{name:/request\-url/i})}catch(e){const n=(await Te.screen.findAllByTestId("input-skeleton"))[0];await t.click(n)}let n=await Te.screen.findByRole("textbox",{name:/request\-url/i});await t.click(n),n=Te.screen.getByRole("textbox",{name:/request\-url/i}),await t.type(n,e)}async function Ae(e){Range.prototype.getBoundingClientRect=()=>({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON:()=>{}});try{const t=await Te.screen.findByRole("textbox",{name:/request\-url/i});return await e.click(t),Te.screen.findByRole("textbox",{name:/request\-url/i})}catch(t){const n=await Te.screen.findAllByTestId("input-skeleton");await e.click(n[0])}return await Te.screen.findByRole("textbox",{name:/request\-url/i})}function Be({onChange:e,value:t}){return(0,c.jsx)("input",{"aria-label":"URL Input",type:"text",list:"autosuggest-datalist","aria-owns":"autosuggest-datalist","aria-autocomplete":"list",onChange:t=>{null==e||e(t.target.value)},autoFocus:!0,value:t})}const Ze=a()(oe).withConfig({displayName:"input__StyledPostmanInput",componentId:"sc-7p4h24-0"})(["width:100%;height:100%;.content-editable{min-height:38px;"," border:var(--border-width-default) var(--border-style-solid);border-color:"," border-radius:0 var(--border-radius-default) var(--border-radius-default) 0;border-left:none;:not(:focus) .editor-paragraph{padding:0 var(--spacing-s);}}.input-skeleton{border:var(--border-width-default) var(--border-style-solid) var(--border-color-default);border-radius:0 var(--border-radius-default) var(--border-radius-default) 0;border-left:none;}"],(({isHardFocused:e})=>e?"box-shadow: 0 0 0 3px\n              var(--request-url-highlight-border-color);":""),(({isHardFocused:e})=>e?"transparent;":"var(--border-color-default);"));function Ve(e){const[t,n]=(0,r.useState)(!1);return(0,c.jsx)(Ze,Object.assign({},e,{ariaLabel:"request-url",className:"request-url",onHardFocus:n,isHardFocused:t}))}function Ue({onChange:e,onFocus:t,value:n,ariaLabel:r,onBlur:o,actions:a,indicators:i}){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("textarea",{"aria-label":r,role:"cell",onChange:t=>{null==e||e(t.target.value)},value:n,onFocus:()=>null==t?void 0:t(),onBlur:()=>null==o?void 0:o()}),i,a]})}const Me=a()(oe).withConfig({displayName:"input__StyledPostmanInput",componentId:"sc-yi945q-0"})(["width:100%;height:100%;.content-editable{min-height:32px;:not(:focus) .editor-paragraph{padding:0 var(--spacing-s);}}"]);function De(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Me,Object.assign({},e,{className:"kv-editor"})),e.indicators,e.actions]})}const He=a()(oe).withConfig({displayName:"input__StyledPostmanInput",componentId:"sc-dkkqrg-0"})(["width:100%;height:100%;.content-editable{min-height:28px;border:var(--border-width-default) var(--border-style-solid) var(--border-color-default);border-radius:var(--border-radius-default);:not(:focus) .editor-paragraph{padding:0 var(--spacing-s);}}.input-skeleton{border:var(--border-width-default) var(--border-style-solid) var(--border-color-default);border-radius:var(--border-radius-default);}.placeholder{border-left:var(--border-width-default) var(--border-style-solid) transparent;}"]),We=a().div.withConfig({displayName:"input__Container",componentId:"sc-dkkqrg-1"})(["height:30px;"]);function Ke(e){return(0,c.jsx)(We,{children:(0,c.jsx)(He,Object.assign({},e,{className:"auth-editor"}))})}function Qe({onChange:e,value:t,placeholder:n,ariaLabel:r}){return(0,c.jsx)("input",{type:"text",onChange:t=>{null==e||e(t.target.value)},placeholder:n,value:t,"aria-label":r})}},98366:(e,t,n)=>{function r(e,t){return null!==i(e,t)}function o(e){const t=l(e);return 1===t.length&&t[0].name===e}function a(e,t){return!(!o(e)||t&&r(e,t))}function i(e,t){const n=l(e);if(1!==n.length||n[0].name!==e)return null;const r=n[0].name.slice(2,-2);let o=null;for(let e=t.length-1;e>=0;e--){const n=t[e];if(n.key===r){o=n;break}}return o}function s(e,t){if(!e)return[];const n=l(e),o=[];for(const e of n){const n=e.name,a=r(n,t);o.push({startIndex:e.lastIndex-n.length,endIndex:e.lastIndex,isResolved:a})}return o}function l(e){let t=[],n=0,r=!1,o=!1,a=!1;const i=[],s=[];for(let l=1;l<e.length;l++)r?(t.push(e.charAt(l)),"{"!==e.charAt(l)&&o&&(o=!1),"}"!==e.charAt(l)&&a&&(a=!1),"}"===e.charAt(l)?a?(0===s.pop()&&(r=!1,i.push({name:t.join(""),lastIndex:l+1}),t=[],n=0),a=!1):a=!0:"{"===e.charAt(l)&&(o?(s.push(n++),o=!1):o=!0)):"{"===e.charAt(l)&&"{"===e.charAt(l-1)&&(t.push(e.charAt(l),e.charAt(l-1)),r=!0,s.push(n++));return i}function c(e){return"string"==typeof e?e:e?"function"==typeof e.toString?String(e):Object.prototype.toString.call(e):""}function u(e){return e?(e=e.toLowerCase().trim()).charAt(0).toUpperCase()+e.slice(1):e}function d(e){return e?(e.endsWith("s")&&e.length>1&&(e=e.slice(0,-1)),e):e}n.d(t,{C5:()=>d,CS:()=>a,E0:()=>i,Fn:()=>c,KN:()=>u,Q0:()=>r,rn:()=>l,w1:()=>s,yG:()=>o})}}]);
//# sourceMappingURL=9304.fde935fe9a8b6af9.js.map