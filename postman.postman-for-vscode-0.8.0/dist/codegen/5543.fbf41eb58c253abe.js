"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[5543,2254],{74962:(t,n,e)=>{e.d(n,{Z:()=>g});var o=e(72247),a=e(54047),r=e(40540),i=e.n(r),c=e(72229),s=e.n(c),l=e(25892),h=e.n(l),u=e(65577),p=e(90265);function d(t,n){switch(t){case"h1":return"\n        font-size: ".concat(n["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(n["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(n["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(n["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(n["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(n["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(n["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(n["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(n["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(n["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(n["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(n["content-color-secondary"],";\n      ");default:return null}}var m=h().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(t){return t.theme["spacing-zero"]}),(function(t){return t.theme["text-family-default"]}),(function(t){return t.theme["text-weight-medium"]}),(function(t){return t.wordBreak}),(function(t){return t.styleAs?d(t.styleAs,t.theme):d(t.as,t.theme)}),(function(t){return t.color&&"color: ".concat(t.theme[t.color],";")}),(function(t){return t.hasBottomSpacing&&function(t,n){switch(t){case"h1":return"margin-bottom: ".concat(n["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(n["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(n["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(n["spacing-xs"]," !important");default:return"margin: ".concat(n["spacing-zero"]," !important")}}(t.as,t.theme)}),(function(t){return n=t.isTruncated,e=t.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(e,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(n?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(e?o:"","\n    ");var n,e,o}));function g(t){var n=t.text,e=t.type,o=t.styleAs,c=t.color,s=t._wordBreak,l=t.className,h=t.hasBottomSpacing,u=t.isTruncated,d=t.maxLines,g=t.tooltip,f=t["data-testid"],x=t["data-click"],w=(0,r.useState)(!1),y=(0,a.Z)(w,2),b=y[0],k=y[1],v=i().createElement(m,{as:e,styleAs:o,color:c,className:l,"data-aether-id":"aether-heading","data-testid":f,"data-click":x,hasBottomSpacing:h,isTruncated:u,maxLines:d,onMouseEnter:function(t){t.target&&t.target.scrollWidth>t.target.offsetWidth?k(!0):k(!1)},wordBreak:s},n);return b&&(0,p.LX)(t)?(0,p.Ur)(v,g||n):v}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:s().oneOf(["h1","h2","h3","h4","h5","h6"]),text:s().string.isRequired,color:s().oneOf([""].concat((0,o.Z)(Object.keys(u.globals.colors)),(0,o.Z)(Object.keys(u.aliases.light.content)))),styleAs:s().oneOf(["h1","h2","h3","h4","h5","h6"]),className:s().string,hasBottomSpacing:s().bool,isTruncated:function(t){var n=t.isTruncated,e=t.maxLines;return"boolean"!=typeof n?new Error("Heading: expected a boolean value for isTruncated prop"):n&&e?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:s().number,tooltip:function(t){var n=t.tooltip,e=t.isTruncated,o=t.maxLines;return"string"!=typeof n?new Error("Heading: tooltip prop should only have a string value."):!n||e&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:s().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":s().string,"data-click":s().string}}}]);
//# sourceMappingURL=5543.fbf41eb58c253abe.js.map