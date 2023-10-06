"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[2063,7560,2389,3911],{7560:(t,e,n)=>{function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},o.apply(this,arguments)}n.d(e,{Z:()=>o})},23911:(t,e,n)=>{n.r(e),n.d(e,{Modals:()=>r});var o={};n.r(o),n.d(o,{ModalDialog:()=>p});var r={};n.r(r),n.d(r,{Ui:()=>o,getModals:()=>s});var a=n(54302);class i{async showWarningDialog(t){const{subject:e,message:n,options:o}=t;return a.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"UI_SHOW_MODAL_DIALOG",payload:{severity:"warning",subject:e,message:n,options:o}})}}function s(){return new i}var c=n(40540),l=n(35348),u=n(58560),h=n(80605),d=n(52322);const p=t=>{const[e,n]=(0,c.useState)(null),[o,r]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{function e(e){const{detail:o}=e;t.uid===o.uid&&(n(o),r(!0))}return window.addEventListener("pm:modal:request",e),()=>{window.removeEventListener("pm:modal:request",e)}}),[t.uid]),e?(0,d.jsxs)(l.u_,{isOpen:o,size:"small",onClose:()=>r(!1),children:[(0,d.jsx)(l.xB,{heading:e.subject}),(0,d.jsx)(l.hz,{children:(0,d.jsx)("p",{children:e.message})}),(0,d.jsx)(l.mz,{children:(0,d.jsx)(u.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:e.options.map((t=>(0,d.jsx)(h.Z,{type:!0===t.isPrimary?"primary":"secondary",text:t.title,onClick:()=>{e.callback(t),r(!1)}},t.title)))})})]}):null}},49627:(t,e,n)=>{n.d(e,{Z:()=>l});var o=n(7560),r=n(40540),a=n.n(r),i=n(207),s=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),c=a().forwardRef((function(t,e){return a().createElement(i.Z,(0,o.Z)({},t,{svg:s,ref:e}))}));c.getName=function(){return"icon-action-close-stroke"};const l=c},74962:(t,e,n)=>{n.d(e,{Z:()=>g});var o=n(72247),r=n(54047),a=n(40540),i=n.n(a),s=n(72229),c=n.n(s),l=n(25892),u=n.n(l),h=n(65577),d=n(90265);function p(t,e){switch(t){case"h1":return"\n        font-size: ".concat(e["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(e["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(e["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(e["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(e["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(e["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(e["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(e["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(e["content-color-secondary"],";\n      ");default:return null}}var m=u().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(t){return t.theme["spacing-zero"]}),(function(t){return t.theme["text-family-default"]}),(function(t){return t.theme["text-weight-medium"]}),(function(t){return t.wordBreak}),(function(t){return t.styleAs?p(t.styleAs,t.theme):p(t.as,t.theme)}),(function(t){return t.color&&"color: ".concat(t.theme[t.color],";")}),(function(t){return t.hasBottomSpacing&&function(t,e){switch(t){case"h1":return"margin-bottom: ".concat(e["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(e["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(e["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(e["spacing-xs"]," !important");default:return"margin: ".concat(e["spacing-zero"]," !important")}}(t.as,t.theme)}),(function(t){return e=t.isTruncated,n=t.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(e?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?o:"","\n    ");var e,n,o}));function g(t){var e=t.text,n=t.type,o=t.styleAs,s=t.color,c=t._wordBreak,l=t.className,u=t.hasBottomSpacing,h=t.isTruncated,p=t.maxLines,g=t.tooltip,f=t["data-testid"],w=t["data-click"],x=(0,a.useState)(!1),y=(0,r.Z)(x,2),b=y[0],v=y[1],k=i().createElement(m,{as:n,styleAs:o,color:s,className:l,"data-aether-id":"aether-heading","data-testid":f,"data-click":w,hasBottomSpacing:u,isTruncated:h,maxLines:p,onMouseEnter:function(t){t.target&&t.target.scrollWidth>t.target.offsetWidth?v(!0):v(!1)},wordBreak:c},e);return b&&(0,d.LX)(t)?(0,d.Ur)(k,g||e):k}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:c().oneOf(["h1","h2","h3","h4","h5","h6"]),text:c().string.isRequired,color:c().oneOf([""].concat((0,o.Z)(Object.keys(h.globals.colors)),(0,o.Z)(Object.keys(h.aliases.light.content)))),styleAs:c().oneOf(["h1","h2","h3","h4","h5","h6"]),className:c().string,hasBottomSpacing:c().bool,isTruncated:function(t){var e=t.isTruncated,n=t.maxLines;return"boolean"!=typeof e?new Error("Heading: expected a boolean value for isTruncated prop"):e&&n?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:c().number,tooltip:function(t){var e=t.tooltip,n=t.isTruncated,o=t.maxLines;return"string"!=typeof e?new Error("Heading: tooltip prop should only have a string value."):!e||n&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:c().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":c().string,"data-click":c().string}}}]);
//# sourceMappingURL=2063.11b0d56a9dab6c36.js.map