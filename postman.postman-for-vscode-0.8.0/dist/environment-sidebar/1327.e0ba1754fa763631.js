"use strict";(self.webpackChunkenvironment_sidebar=self.webpackChunkenvironment_sidebar||[]).push([[1327],{1997:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return f.default}}),t.default=void 0;var o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}(r(540)),a=g(r(2229)),i=g(r(1730)),u=g(r(3723)),l=r(4688),s=r(3585),c=r(136),f=g(r(3816)),d=g(r(1177)),p=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function g(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(h,e);var t,r,a,c,g,y=(c=h,g=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(c);if(g){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}(this,e)});function h(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),P(O(t=y.call(this,e)),"onDragStart",(function(e,r){if((0,d.default)("Draggable: onDragStart: %j",r),!1===t.props.onStart(e,(0,s.createDraggableData)(O(t),r)))return!1;t.setState({dragging:!0,dragged:!0})})),P(O(t),"onDrag",(function(e,r){if(!t.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",r);var n,o,a=(0,s.createDraggableData)(O(t),r),i={x:a.x,y:a.y};if(t.props.bounds){var u=i.x,l=i.y;i.x+=t.state.slackX,i.y+=t.state.slackY;var c=(n=(0,s.getBoundPosition)(O(t),i.x,i.y),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(n,o)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=c[0],p=c[1];i.x=f,i.y=p,i.slackX=t.state.slackX+(u-i.x),i.slackY=t.state.slackY+(l-i.y),a.x=i.x,a.y=i.y,a.deltaX=i.x-t.state.x,a.deltaY=i.y-t.state.y}if(!1===t.props.onDrag(e,a))return!1;t.setState(i)})),P(O(t),"onDragStop",(function(e,r){if(!t.state.dragging)return!1;if(!1===t.props.onStop(e,(0,s.createDraggableData)(O(t),r)))return!1;(0,d.default)("Draggable: onDragStop: %j",r);var n={dragging:!1,slackX:0,slackY:0};if(Boolean(t.props.position)){var o=t.props.position,a=o.x,i=o.y;n.x=a,n.y=i}t.setState(n)})),t.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:m({},e.position),slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),t}return t=h,a=[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.position,n=t.prevPropsPosition;return!r||n&&r.x===n.x&&r.y===n.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:r,prevPropsPosition:n}),{x:r.x,y:r.y,prevPropsPosition:m({},r)})}}],(r=[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var e,t,r;return null!==(e=null===(t=this.props)||void 0===t||null===(r=t.nodeRef)||void 0===r?void 0:r.current)&&void 0!==e?e:i.default.findDOMNode(this)}},{key:"render",value:function(){var e,t=this.props,r=(t.axis,t.bounds,t.children),n=t.defaultPosition,a=t.defaultClassName,i=t.defaultClassNameDragging,c=t.defaultClassNameDragged,d=t.position,g=t.positionOffset,y=(t.scale,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,p)),h={},v=null,S=!Boolean(d)||this.state.dragging,w=d||n,O={x:(0,s.canDragX)(this)&&S?this.state.x:w.x,y:(0,s.canDragY)(this)&&S?this.state.y:w.y};this.state.isElementSVG?v=(0,l.createSVGTransform)(O,g):h=(0,l.createCSSTransform)(O,g);var D=(0,u.default)(r.props.className||"",a,(P(e={},i,this.state.dragging),P(e,c,this.state.dragged),e));return o.createElement(f.default,b({},y,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.cloneElement(o.Children.only(r),{className:D,style:m(m({},r.props.style),h),transform:v}))}}])&&S(t.prototype,r),a&&S(t,a),Object.defineProperty(t,"prototype",{writable:!1}),h}(o.Component);t.default=j,P(j,"displayName","Draggable"),P(j,"propTypes",m(m({},f.default.propTypes),{},{axis:a.default.oneOf(["both","x","y","none"]),bounds:a.default.oneOfType([a.default.shape({left:a.default.number,right:a.default.number,top:a.default.number,bottom:a.default.number}),a.default.string,a.default.oneOf([!1])]),defaultClassName:a.default.string,defaultClassNameDragging:a.default.string,defaultClassNameDragged:a.default.string,defaultPosition:a.default.shape({x:a.default.number,y:a.default.number}),positionOffset:a.default.shape({x:a.default.oneOfType([a.default.number,a.default.string]),y:a.default.oneOfType([a.default.number,a.default.string])}),position:a.default.shape({x:a.default.number,y:a.default.number}),className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe})),P(j,"defaultProps",m(m({},f.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))},3816:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}(r(540)),a=f(r(2229)),i=f(r(1730)),u=r(4688),l=r(3585),s=r(136),c=f(r(1177));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S={start:"touchstart",move:"touchmove",stop:"touchend"},w={start:"mousedown",move:"mousemove",stop:"mouseup"},O=w,D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(d,e);var t,r,a,s,f=(a=d,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(a);if(s){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,e)});function d(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return v(h(e=f.call.apply(f,[this].concat(r))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),v(h(e),"mounted",!1),v(h(e),"handleDragStart",(function(t){if(e.props.onMouseDown(t),!e.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;var r=e.findDOMNode();if(!r||!r.ownerDocument||!r.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var n=r.ownerDocument;if(!(e.props.disabled||!(t.target instanceof n.defaultView.Node)||e.props.handle&&!(0,u.matchesSelectorAndParentsTo)(t.target,e.props.handle,r)||e.props.cancel&&(0,u.matchesSelectorAndParentsTo)(t.target,e.props.cancel,r))){"touchstart"===t.type&&t.preventDefault();var o=(0,u.getTouchIdentifier)(t);e.setState({touchIdentifier:o});var a=(0,l.getControlPosition)(t,o,h(e));if(null!=a){var i=a.x,s=a.y,f=(0,l.createCoreData)(h(e),i,s);(0,c.default)("DraggableCore: handleDragStart: %j",f),(0,c.default)("calling",e.props.onStart),!1!==e.props.onStart(t,f)&&!1!==e.mounted&&(e.props.enableUserSelectHack&&(0,u.addUserSelectStyles)(n),e.setState({dragging:!0,lastX:i,lastY:s}),(0,u.addEvent)(n,O.move,e.handleDrag),(0,u.addEvent)(n,O.stop,e.handleDragStop))}}})),v(h(e),"handleDrag",(function(t){var r=(0,l.getControlPosition)(t,e.state.touchIdentifier,h(e));if(null!=r){var n=r.x,o=r.y;if(Array.isArray(e.props.grid)){var a=n-e.state.lastX,i=o-e.state.lastY,u=p((0,l.snapToGrid)(e.props.grid,a,i),2);if(a=u[0],i=u[1],!a&&!i)return;n=e.state.lastX+a,o=e.state.lastY+i}var s=(0,l.createCoreData)(h(e),n,o);if((0,c.default)("DraggableCore: handleDrag: %j",s),!1!==e.props.onDrag(t,s)&&!1!==e.mounted)e.setState({lastX:n,lastY:o});else try{e.handleDragStop(new MouseEvent("mouseup"))}catch(t){var f=document.createEvent("MouseEvents");f.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.handleDragStop(f)}}})),v(h(e),"handleDragStop",(function(t){if(e.state.dragging){var r=(0,l.getControlPosition)(t,e.state.touchIdentifier,h(e));if(null!=r){var n=r.x,o=r.y;if(Array.isArray(e.props.grid)){var a=n-e.state.lastX||0,i=o-e.state.lastY||0,s=p((0,l.snapToGrid)(e.props.grid,a,i),2);a=s[0],i=s[1],n=e.state.lastX+a,o=e.state.lastY+i}var f=(0,l.createCoreData)(h(e),n,o);if(!1===e.props.onStop(t,f)||!1===e.mounted)return!1;var d=e.findDOMNode();d&&e.props.enableUserSelectHack&&(0,u.removeUserSelectStyles)(d.ownerDocument),(0,c.default)("DraggableCore: handleDragStop: %j",f),e.setState({dragging:!1,lastX:NaN,lastY:NaN}),d&&((0,c.default)("DraggableCore: Removing handlers"),(0,u.removeEvent)(d.ownerDocument,O.move,e.handleDrag),(0,u.removeEvent)(d.ownerDocument,O.stop,e.handleDragStop))}}})),v(h(e),"onMouseDown",(function(t){return O=w,e.handleDragStart(t)})),v(h(e),"onMouseUp",(function(t){return O=w,e.handleDragStop(t)})),v(h(e),"onTouchStart",(function(t){return O=S,e.handleDragStart(t)})),v(h(e),"onTouchEnd",(function(t){return O=S,e.handleDragStop(t)})),e}return t=d,(r=[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.findDOMNode();e&&(0,u.addEvent)(e,S.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var e=this.findDOMNode();if(e){var t=e.ownerDocument;(0,u.removeEvent)(t,w.move,this.handleDrag),(0,u.removeEvent)(t,S.move,this.handleDrag),(0,u.removeEvent)(t,w.stop,this.handleDragStop),(0,u.removeEvent)(t,S.stop,this.handleDragStop),(0,u.removeEvent)(e,S.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,u.removeUserSelectStyles)(t)}}},{key:"findDOMNode",value:function(){var e,t,r;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(r=t.nodeRef)||void 0===r?void 0:r.current:i.default.findDOMNode(this)}},{key:"render",value:function(){return o.cloneElement(o.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(o.Component);t.default=D,v(D,"displayName","DraggableCore"),v(D,"propTypes",{allowAnyClick:a.default.bool,disabled:a.default.bool,enableUserSelectHack:a.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:a.default.arrayOf(a.default.number),handle:a.default.string,cancel:a.default.string,nodeRef:a.default.object,onStart:a.default.func,onDrag:a.default.func,onStop:a.default.func,onMouseDown:a.default.func,scale:a.default.number,className:s.dontSetMe,style:s.dontSetMe,transform:s.dontSetMe}),v(D,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},1327:(e,t,r)=>{var n=r(1997),o=n.default,a=n.DraggableCore;e.exports=o,e.exports.default=o,e.exports.DraggableCore=a},4688:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.addClassName=p,t.addEvent=function(e,t,r,n){if(e){var o=l({capture:!0},n);e.addEventListener?e.addEventListener(t,r,o):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r}},t.addUserSelectStyles=function(e){if(e){var t=e.getElementById("react-draggable-style-el");t||((t=e.createElement("style")).type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t)),e.body&&p(e.body,"react-draggable-transparent-selection")}},t.createCSSTransform=function(e,t){var r=d(e,t,"px");return s({},(0,a.browserPrefixToKey)("transform",a.default),r)},t.createSVGTransform=function(e,t){return d(e,t,"")},t.getTouch=function(e,t){return e.targetTouches&&(0,o.findInArray)(e.targetTouches,(function(e){return t===e.identifier}))||e.changedTouches&&(0,o.findInArray)(e.changedTouches,(function(e){return t===e.identifier}))},t.getTouchIdentifier=function(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0},t.getTranslation=d,t.innerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=(0,o.int)(r.paddingTop))-(0,o.int)(r.paddingBottom)},t.innerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=(0,o.int)(r.paddingLeft))-(0,o.int)(r.paddingRight)},t.matchesSelector=f,t.matchesSelectorAndParentsTo=function(e,t,r){var n=e;do{if(f(n,t))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1},t.offsetXYFromParent=function(e,t,r){var n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-n.left)/r,y:(e.clientY+t.scrollTop-n.top)/r}},t.outerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=(0,o.int)(r.borderTopWidth))+(0,o.int)(r.borderBottomWidth)},t.outerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=(0,o.int)(r.borderLeftWidth))+(0,o.int)(r.borderRightWidth)},t.removeClassName=g,t.removeEvent=function(e,t,r,n){if(e){var o=l({capture:!0},n);e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent?e.detachEvent("on"+t,r):e["on"+t]=null}},t.removeUserSelectStyles=function(e){if(e)try{if(e.body&&g(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(e){}};var o=r(136),a=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}(r(2185));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c="";function f(e,t){return c||(c=(0,o.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,o.isFunction)(e[t])}))),!!(0,o.isFunction)(e[c])&&e[c](t)}function d(e,t,r){var n=e.x,o=e.y,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(t){var i="".concat("string"==typeof t.x?t.x:t.x+r),u="".concat("string"==typeof t.y?t.y:t.y+r);a="translate(".concat(i,", ").concat(u,")")+a}return a}function p(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function g(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},2185:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0,t.getPrefix=n;var r=["Moz","Webkit","O","ms"];function n(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";var a=null===(e=window.document)||void 0===e||null===(t=e.documentElement)||void 0===t?void 0:t.style;if(!a)return"";if(n in a)return"";for(var i=0;i<r.length;i++)if(o(n,r[i])in a)return r[i];return""}function o(e,t){return t?"".concat(t).concat(function(e){for(var t="",r=!0,n=0;n<e.length;n++)r?(t+=e[n].toUpperCase(),r=!1):"-"===e[n]?r=!0:t+=e[n];return t}(e)):e}var a=n();t.default=a},1177:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},3585:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.createCoreData=function(e,t,r){var o=e.state,i=!(0,n.isNum)(o.lastX),u=a(e);return i?{node:u,deltaX:0,deltaY:0,lastX:t,lastY:r,x:t,y:r}:{node:u,deltaX:t-o.lastX,deltaY:r-o.lastY,lastX:o.lastX,lastY:o.lastY,x:t,y:r}},t.createDraggableData=function(e,t){var r=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/r,y:e.state.y+t.deltaY/r,deltaX:t.deltaX/r,deltaY:t.deltaY/r,lastX:e.state.x,lastY:e.state.y}},t.getBoundPosition=function(e,t,r){if(!e.props.bounds)return[t,r];var i=e.props.bounds;i="string"==typeof i?i:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(i);var u=a(e);if("string"==typeof i){var l,s=u.ownerDocument,c=s.defaultView;if(!((l="parent"===i?u.parentNode:s.querySelector(i))instanceof c.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');var f=l,d=c.getComputedStyle(u),p=c.getComputedStyle(f);i={left:-u.offsetLeft+(0,n.int)(p.paddingLeft)+(0,n.int)(d.marginLeft),top:-u.offsetTop+(0,n.int)(p.paddingTop)+(0,n.int)(d.marginTop),right:(0,o.innerWidth)(f)-(0,o.outerWidth)(u)-u.offsetLeft+(0,n.int)(p.paddingRight)-(0,n.int)(d.marginRight),bottom:(0,o.innerHeight)(f)-(0,o.outerHeight)(u)-u.offsetTop+(0,n.int)(p.paddingBottom)-(0,n.int)(d.marginBottom)}}return(0,n.isNum)(i.right)&&(t=Math.min(t,i.right)),(0,n.isNum)(i.bottom)&&(r=Math.min(r,i.bottom)),(0,n.isNum)(i.left)&&(t=Math.max(t,i.left)),(0,n.isNum)(i.top)&&(r=Math.max(r,i.top)),[t,r]},t.getControlPosition=function(e,t,r){var n="number"==typeof t?(0,o.getTouch)(e,t):null;if("number"==typeof t&&!n)return null;var i=a(r),u=r.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(n||e,u,r.props.scale)},t.snapToGrid=function(e,t,r){return[Math.round(t/e[0])*e[0],Math.round(r/e[1])*e[1]]};var n=r(136),o=r(4688);function a(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},136:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dontSetMe=function(e,t,r){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(r," - do not set this, set it on the child."))},t.findInArray=function(e,t){for(var r=0,n=e.length;r<n;r++)if(t.apply(t,[e[r],r,e]))return e[r]},t.int=function(e){return parseInt(e,10)},t.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"==typeof e&&!isNaN(e)}}}]);
//# sourceMappingURL=1327.e0ba1754fa763631.js.map