"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[6663],{6663:(t,e,r)=>{r.r(e),r.d(e,{FixedSizeGrid:()=>H,FixedSizeList:()=>A,VariableSizeGrid:()=>O,VariableSizeList:()=>k,areEqual:()=>N,shouldComponentUpdate:()=>V});var o=r(7560);function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}var l=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function s(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!((o=t[r])===(n=e[r])||l(o)&&l(n)))return!1;var o,n;return!0}const c=function(t,e){var r;void 0===e&&(e=s);var o,n=[],i=!1;return function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return i&&r===this&&e(a,n)||(o=t.apply(this,a),i=!0,r=this,n=a),o}};var u=r(540),d=r(8283),f="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function h(t){cancelAnimationFrame(t.id)}function m(t,e){var r=f(),o={id:requestAnimationFrame((function n(){f()-r>=e?t.call(null):o.id=requestAnimationFrame(n)}))};return o}var p=-1;function v(t){if(void 0===t&&(t=!1),-1===p||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(e),p=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return p}var g=null;function S(t){if(void 0===t&&(t=!1),null===g||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var o=document.createElement("div"),n=o.style;return n.width="100px",n.height="100px",e.appendChild(o),document.body.appendChild(e),e.scrollLeft>0?g="positive-descending":(e.scrollLeft=1,g=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),g}return g}var I=function(t){var e=t.columnIndex;return t.data,t.rowIndex+":"+e};function w(t){var e,r=t.getColumnOffset,i=t.getColumnStartIndexForOffset,l=t.getColumnStopIndexForStartIndex,s=t.getColumnWidth,d=t.getEstimatedTotalHeight,f=t.getEstimatedTotalWidth,p=t.getOffsetForColumnAndAlignment,g=t.getOffsetForRowAndAlignment,w=t.getRowHeight,x=t.getRowOffset,_=t.getRowStartIndexForOffset,C=t.getRowStopIndexForStartIndex,R=t.initInstanceProps,y=t.shouldResetStyleCacheOnItemSizeChange,T=t.validateProps;return(e=function(t){function e(e){var o;return(o=t.call(this,e)||this)._instanceProps=R(o.props,n(o)),o._resetIsScrollingTimeoutId=null,o._outerRef=void 0,o.state={instance:n(o),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof o.props.initialScrollLeft?o.props.initialScrollLeft:0,scrollTop:"number"==typeof o.props.initialScrollTop?o.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},o._callOnItemsRendered=void 0,o._callOnItemsRendered=c((function(t,e,r,n,i,a,l,s){return o.props.onItemsRendered({overscanColumnStartIndex:t,overscanColumnStopIndex:e,overscanRowStartIndex:r,overscanRowStopIndex:n,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:l,visibleRowStopIndex:s})})),o._callOnScroll=void 0,o._callOnScroll=c((function(t,e,r,n,i){return o.props.onScroll({horizontalScrollDirection:r,scrollLeft:t,scrollTop:e,verticalScrollDirection:n,scrollUpdateWasRequested:i})})),o._getItemStyle=void 0,o._getItemStyle=function(t,e){var n,i=o.props,a=i.columnWidth,l=i.direction,c=i.rowHeight,u=o._getItemStyleCache(y&&a,y&&l,y&&c),d=t+":"+e;if(u.hasOwnProperty(d))n=u[d];else{var f=r(o.props,e,o._instanceProps),h="rtl"===l;u[d]=n={position:"absolute",left:h?void 0:f,right:h?f:void 0,top:x(o.props,t,o._instanceProps),height:w(o.props,t,o._instanceProps),width:s(o.props,e,o._instanceProps)}}return n},o._getItemStyleCache=void 0,o._getItemStyleCache=c((function(t,e,r){return{}})),o._onScroll=function(t){var e=t.currentTarget,r=e.clientHeight,n=e.clientWidth,i=e.scrollLeft,a=e.scrollTop,l=e.scrollHeight,s=e.scrollWidth;o.setState((function(t){if(t.scrollLeft===i&&t.scrollTop===a)return null;var e=o.props.direction,c=i;if("rtl"===e)switch(S()){case"negative":c=-i;break;case"positive-descending":c=s-n-i}c=Math.max(0,Math.min(c,s-n));var u=Math.max(0,Math.min(a,l-r));return{isScrolling:!0,horizontalScrollDirection:t.scrollLeft<i?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:t.scrollTop<a?"forward":"backward",scrollUpdateWasRequested:!1}}),o._resetIsScrollingDebounced)},o._outerRefSetter=function(t){var e=o.props.outerRef;o._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},o._resetIsScrollingDebounced=function(){null!==o._resetIsScrollingTimeoutId&&h(o._resetIsScrollingTimeoutId),o._resetIsScrollingTimeoutId=m(o._resetIsScrolling,150)},o._resetIsScrolling=function(){o._resetIsScrollingTimeoutId=null,o.setState({isScrolling:!1},(function(){o._getItemStyleCache(-1)}))},o}a(e,t),e.getDerivedStateFromProps=function(t,e){return M(t,e),T(t),null};var z=e.prototype;return z.scrollTo=function(t){var e=t.scrollLeft,r=t.scrollTop;void 0!==e&&(e=Math.max(0,e)),void 0!==r&&(r=Math.max(0,r)),this.setState((function(t){return void 0===e&&(e=t.scrollLeft),void 0===r&&(r=t.scrollTop),t.scrollLeft===e&&t.scrollTop===r?null:{horizontalScrollDirection:t.scrollLeft<e?"forward":"backward",scrollLeft:e,scrollTop:r,scrollUpdateWasRequested:!0,verticalScrollDirection:t.scrollTop<r?"forward":"backward"}}),this._resetIsScrollingDebounced)},z.scrollToItem=function(t){var e=t.align,r=void 0===e?"auto":e,o=t.columnIndex,n=t.rowIndex,i=this.props,a=i.columnCount,l=i.height,s=i.rowCount,c=i.width,u=this.state,h=u.scrollLeft,m=u.scrollTop,S=v();void 0!==o&&(o=Math.max(0,Math.min(o,a-1))),void 0!==n&&(n=Math.max(0,Math.min(n,s-1)));var I=d(this.props,this._instanceProps),w=f(this.props,this._instanceProps)>c?S:0,M=I>l?S:0;this.scrollTo({scrollLeft:void 0!==o?p(this.props,o,r,h,this._instanceProps,M):h,scrollTop:void 0!==n?g(this.props,n,r,m,this._instanceProps,w):m})},z.componentDidMount=function(){var t=this.props,e=t.initialScrollLeft,r=t.initialScrollTop;if(null!=this._outerRef){var o=this._outerRef;"number"==typeof e&&(o.scrollLeft=e),"number"==typeof r&&(o.scrollTop=r)}this._callPropsCallbacks()},z.componentDidUpdate=function(){var t=this.props.direction,e=this.state,r=e.scrollLeft,o=e.scrollTop;if(e.scrollUpdateWasRequested&&null!=this._outerRef){var n=this._outerRef;if("rtl"===t)switch(S()){case"negative":n.scrollLeft=-r;break;case"positive-ascending":n.scrollLeft=r;break;default:var i=n.clientWidth,a=n.scrollWidth;n.scrollLeft=a-i-r}else n.scrollLeft=Math.max(0,r);n.scrollTop=Math.max(0,o)}this._callPropsCallbacks()},z.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&h(this._resetIsScrollingTimeoutId)},z.render=function(){var t=this.props,e=t.children,r=t.className,n=t.columnCount,i=t.direction,a=t.height,l=t.innerRef,s=t.innerElementType,c=t.innerTagName,h=t.itemData,m=t.itemKey,p=void 0===m?I:m,v=t.outerElementType,g=t.outerTagName,S=t.rowCount,w=t.style,M=t.useIsScrolling,x=t.width,_=this.state.isScrolling,C=this._getHorizontalRangeToRender(),R=C[0],y=C[1],T=this._getVerticalRangeToRender(),z=T[0],O=T[1],b=[];if(n>0&&S)for(var P=z;P<=O;P++)for(var W=R;W<=y;W++)b.push((0,u.createElement)(e,{columnIndex:W,data:h,isScrolling:M?_:void 0,key:p({columnIndex:W,data:h,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var D=d(this.props,this._instanceProps),F=f(this.props,this._instanceProps);return(0,u.createElement)(v||g||"div",{className:r,onScroll:this._onScroll,ref:this._outerRefSetter,style:(0,o.Z)({position:"relative",height:a,width:x,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},w)},(0,u.createElement)(s||c||"div",{children:b,ref:l,style:{height:D,pointerEvents:_?"none":void 0,width:F}}))},z._callPropsCallbacks=function(){var t=this.props,e=t.columnCount,r=t.onItemsRendered,o=t.onScroll,n=t.rowCount;if("function"==typeof r&&e>0&&n>0){var i=this._getHorizontalRangeToRender(),a=i[0],l=i[1],s=i[2],c=i[3],u=this._getVerticalRangeToRender(),d=u[0],f=u[1],h=u[2],m=u[3];this._callOnItemsRendered(a,l,d,f,s,c,h,m)}if("function"==typeof o){var p=this.state,v=p.horizontalScrollDirection,g=p.scrollLeft,S=p.scrollTop,I=p.scrollUpdateWasRequested,w=p.verticalScrollDirection;this._callOnScroll(g,S,v,w,I)}},z._getHorizontalRangeToRender=function(){var t=this.props,e=t.columnCount,r=t.overscanColumnCount,o=t.overscanColumnsCount,n=t.overscanCount,a=t.rowCount,s=this.state,c=s.horizontalScrollDirection,u=s.isScrolling,d=s.scrollLeft,f=r||o||n||1;if(0===e||0===a)return[0,0,0,0];var h=i(this.props,d,this._instanceProps),m=l(this.props,h,d,this._instanceProps),p=u&&"backward"!==c?1:Math.max(1,f),v=u&&"forward"!==c?1:Math.max(1,f);return[Math.max(0,h-p),Math.max(0,Math.min(e-1,m+v)),h,m]},z._getVerticalRangeToRender=function(){var t=this.props,e=t.columnCount,r=t.overscanCount,o=t.overscanRowCount,n=t.overscanRowsCount,i=t.rowCount,a=this.state,l=a.isScrolling,s=a.verticalScrollDirection,c=a.scrollTop,u=o||n||r||1;if(0===e||0===i)return[0,0,0,0];var d=_(this.props,c,this._instanceProps),f=C(this.props,d,c,this._instanceProps),h=l&&"backward"!==s?1:Math.max(1,u),m=l&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,d-h),Math.max(0,Math.min(i-1,f+m)),d,f]},e}(u.PureComponent)).defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},e}var M=function(t,e){t.children,t.direction,t.height,t.innerTagName,t.outerTagName,t.overscanColumnsCount,t.overscanCount,t.overscanRowsCount,t.width,e.instance},x=function(t,e){var r=t.rowCount,o=e.rowMetadataMap,n=e.estimatedRowHeight,i=e.lastMeasuredRowIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},_=function(t,e){var r=t.columnCount,o=e.columnMetadataMap,n=e.estimatedColumnWidth,i=e.lastMeasuredColumnIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},C=function(t,e,r,o){var n,i,a;if("column"===t?(n=o.columnMetadataMap,i=e.columnWidth,a=o.lastMeasuredColumnIndex):(n=o.rowMetadataMap,i=e.rowHeight,a=o.lastMeasuredRowIndex),r>a){var l=0;if(a>=0){var s=n[a];l=s.offset+s.size}for(var c=a+1;c<=r;c++){var u=i(c);n[c]={offset:l,size:u},l+=u}"column"===t?o.lastMeasuredColumnIndex=r:o.lastMeasuredRowIndex=r}return n[r]},R=function(t,e,r,o){var n,i;return"column"===t?(n=r.columnMetadataMap,i=r.lastMeasuredColumnIndex):(n=r.rowMetadataMap,i=r.lastMeasuredRowIndex),(i>0?n[i].offset:0)>=o?y(t,e,r,i,0,o):T(t,e,r,Math.max(0,i),o)},y=function(t,e,r,o,n,i){for(;n<=o;){var a=n+Math.floor((o-n)/2),l=C(t,e,a,r).offset;if(l===i)return a;l<i?n=a+1:l>i&&(o=a-1)}return n>0?n-1:0},T=function(t,e,r,o,n){for(var i="column"===t?e.columnCount:e.rowCount,a=1;o<i&&C(t,e,o,r).offset<n;)o+=a,a*=2;return y(t,e,r,Math.min(o,i-1),Math.floor(o/2),n)},z=function(t,e,r,o,n,i,a){var l="column"===t?e.width:e.height,s=C(t,e,r,i),c="column"===t?_(e,i):x(e,i),u=Math.max(0,Math.min(c-l,s.offset)),d=Math.max(0,s.offset-l+a+s.size);switch("smart"===o&&(o=n>=d-l&&n<=u+l?"auto":"center"),o){case"start":return u;case"end":return d;case"center":return Math.round(d+(u-d)/2);default:return n>=d&&n<=u?n:d>u||n<d?d:u}},O=w({getColumnOffset:function(t,e,r){return C("column",t,e,r).offset},getColumnStartIndexForOffset:function(t,e,r){return R("column",t,r,e)},getColumnStopIndexForStartIndex:function(t,e,r,o){for(var n=t.columnCount,i=t.width,a=C("column",t,e,o),l=r+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)c++,s+=C("column",t,c,o).size;return c},getColumnWidth:function(t,e,r){return r.columnMetadataMap[e].size},getEstimatedTotalHeight:x,getEstimatedTotalWidth:_,getOffsetForColumnAndAlignment:function(t,e,r,o,n,i){return z("column",t,e,r,o,n,i)},getOffsetForRowAndAlignment:function(t,e,r,o,n,i){return z("row",t,e,r,o,n,i)},getRowOffset:function(t,e,r){return C("row",t,e,r).offset},getRowHeight:function(t,e,r){return r.rowMetadataMap[e].size},getRowStartIndexForOffset:function(t,e,r){return R("row",t,r,e)},getRowStopIndexForStartIndex:function(t,e,r,o){for(var n=t.rowCount,i=t.height,a=C("row",t,e,o),l=r+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)c++,s+=C("row",t,c,o).size;return c},initInstanceProps:function(t,e){var r=t,o={columnMetadataMap:{},estimatedColumnWidth:r.estimatedColumnWidth||50,estimatedRowHeight:r.estimatedRowHeight||50,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return e.resetAfterColumnIndex=function(t,r){void 0===r&&(r=!0),e.resetAfterIndices({columnIndex:t,shouldForceUpdate:r})},e.resetAfterRowIndex=function(t,r){void 0===r&&(r=!0),e.resetAfterIndices({rowIndex:t,shouldForceUpdate:r})},e.resetAfterIndices=function(t){var r=t.columnIndex,n=t.rowIndex,i=t.shouldForceUpdate,a=void 0===i||i;"number"==typeof r&&(o.lastMeasuredColumnIndex=Math.min(o.lastMeasuredColumnIndex,r-1)),"number"==typeof n&&(o.lastMeasuredRowIndex=Math.min(o.lastMeasuredRowIndex,n-1)),e._getItemStyleCache(-1),a&&e.forceUpdate()},o},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.columnWidth,t.rowHeight}}),b=function(t,e){return t};function P(t){var e,r=t.getItemOffset,i=t.getEstimatedTotalSize,l=t.getItemSize,s=t.getOffsetForIndexAndAlignment,d=t.getStartIndexForOffset,f=t.getStopIndexForStartIndex,p=t.initInstanceProps,g=t.shouldResetStyleCacheOnItemSizeChange,I=t.validateProps;return e=function(t){function e(e){var o;return(o=t.call(this,e)||this)._instanceProps=p(o.props,n(o)),o._outerRef=void 0,o._resetIsScrollingTimeoutId=null,o.state={instance:n(o),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof o.props.initialScrollOffset?o.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},o._callOnItemsRendered=void 0,o._callOnItemsRendered=c((function(t,e,r,n){return o.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:r,visibleStopIndex:n})})),o._callOnScroll=void 0,o._callOnScroll=c((function(t,e,r){return o.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:r})})),o._getItemStyle=void 0,o._getItemStyle=function(t){var e,n=o.props,i=n.direction,a=n.itemSize,s=n.layout,c=o._getItemStyleCache(g&&a,g&&s,g&&i);if(c.hasOwnProperty(t))e=c[t];else{var u=r(o.props,t,o._instanceProps),d=l(o.props,t,o._instanceProps),f="horizontal"===i||"horizontal"===s,h="rtl"===i,m=f?u:0;c[t]=e={position:"absolute",left:h?void 0:m,right:h?m:void 0,top:f?0:u,height:f?"100%":d,width:f?d:"100%"}}return e},o._getItemStyleCache=void 0,o._getItemStyleCache=c((function(t,e,r){return{}})),o._onScrollHorizontal=function(t){var e=t.currentTarget,r=e.clientWidth,n=e.scrollLeft,i=e.scrollWidth;o.setState((function(t){if(t.scrollOffset===n)return null;var e=o.props.direction,a=n;if("rtl"===e)switch(S()){case"negative":a=-n;break;case"positive-descending":a=i-r-n}return a=Math.max(0,Math.min(a,i-r)),{isScrolling:!0,scrollDirection:t.scrollOffset<n?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),o._resetIsScrollingDebounced)},o._onScrollVertical=function(t){var e=t.currentTarget,r=e.clientHeight,n=e.scrollHeight,i=e.scrollTop;o.setState((function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,n-r));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}}),o._resetIsScrollingDebounced)},o._outerRefSetter=function(t){var e=o.props.outerRef;o._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},o._resetIsScrollingDebounced=function(){null!==o._resetIsScrollingTimeoutId&&h(o._resetIsScrollingTimeoutId),o._resetIsScrollingTimeoutId=m(o._resetIsScrolling,150)},o._resetIsScrolling=function(){o._resetIsScrollingTimeoutId=null,o.setState({isScrolling:!1},(function(){o._getItemStyleCache(-1,null)}))},o}a(e,t),e.getDerivedStateFromProps=function(t,e){return W(t,e),I(t),null};var w=e.prototype;return w.scrollTo=function(t){t=Math.max(0,t),this.setState((function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},w.scrollToItem=function(t,e){void 0===e&&(e="auto");var r=this.props,o=r.itemCount,n=r.layout,i=this.state.scrollOffset;t=Math.max(0,Math.min(t,o-1));var a=0;if(this._outerRef){var l=this._outerRef;a="vertical"===n?l.scrollWidth>l.clientWidth?v():0:l.scrollHeight>l.clientHeight?v():0}this.scrollTo(s(this.props,t,e,i,this._instanceProps,a))},w.componentDidMount=function(){var t=this.props,e=t.direction,r=t.initialScrollOffset,o=t.layout;if("number"==typeof r&&null!=this._outerRef){var n=this._outerRef;"horizontal"===e||"horizontal"===o?n.scrollLeft=r:n.scrollTop=r}this._callPropsCallbacks()},w.componentDidUpdate=function(){var t=this.props,e=t.direction,r=t.layout,o=this.state,n=o.scrollOffset;if(o.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===e||"horizontal"===r)if("rtl"===e)switch(S()){case"negative":i.scrollLeft=-n;break;case"positive-ascending":i.scrollLeft=n;break;default:var a=i.clientWidth,l=i.scrollWidth;i.scrollLeft=l-a-n}else i.scrollLeft=n;else i.scrollTop=n}this._callPropsCallbacks()},w.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&h(this._resetIsScrollingTimeoutId)},w.render=function(){var t=this.props,e=t.children,r=t.className,n=t.direction,a=t.height,l=t.innerRef,s=t.innerElementType,c=t.innerTagName,d=t.itemCount,f=t.itemData,h=t.itemKey,m=void 0===h?b:h,p=t.layout,v=t.outerElementType,g=t.outerTagName,S=t.style,I=t.useIsScrolling,w=t.width,M=this.state.isScrolling,x="horizontal"===n||"horizontal"===p,_=x?this._onScrollHorizontal:this._onScrollVertical,C=this._getRangeToRender(),R=C[0],y=C[1],T=[];if(d>0)for(var z=R;z<=y;z++)T.push((0,u.createElement)(e,{data:f,key:m(z,f),index:z,isScrolling:I?M:void 0,style:this._getItemStyle(z)}));var O=i(this.props,this._instanceProps);return(0,u.createElement)(v||g||"div",{className:r,onScroll:_,ref:this._outerRefSetter,style:(0,o.Z)({position:"relative",height:a,width:w,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:n},S)},(0,u.createElement)(s||c||"div",{children:T,ref:l,style:{height:x?"100%":O,pointerEvents:M?"none":void 0,width:x?O:"100%"}}))},w._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],r=t[1],o=t[2],n=t[3];this._callOnItemsRendered(e,r,o,n)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},w._getRangeToRender=function(){var t=this.props,e=t.itemCount,r=t.overscanCount,o=this.state,n=o.isScrolling,i=o.scrollDirection,a=o.scrollOffset;if(0===e)return[0,0,0,0];var l=d(this.props,a,this._instanceProps),s=f(this.props,l,a,this._instanceProps),c=n&&"backward"!==i?1:Math.max(1,r),u=n&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,l-c),Math.max(0,Math.min(e-1,s+u)),l,s]},e}(u.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var W=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},D=function(t,e,r){var o=t.itemSize,n=r.itemMetadataMap,i=r.lastMeasuredIndex;if(e>i){var a=0;if(i>=0){var l=n[i];a=l.offset+l.size}for(var s=i+1;s<=e;s++){var c=o(s);n[s]={offset:a,size:c},a+=c}r.lastMeasuredIndex=e}return n[e]},F=function(t,e,r,o,n){for(;o<=r;){var i=o+Math.floor((r-o)/2),a=D(t,i,e).offset;if(a===n)return i;a<n?o=i+1:a>n&&(r=i-1)}return o>0?o-1:0},L=function(t,e){var r=t.itemCount,o=e.itemMetadataMap,n=e.estimatedItemSize,i=e.lastMeasuredIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},k=P({getItemOffset:function(t,e,r){return D(t,e,r).offset},getItemSize:function(t,e,r){return r.itemMetadataMap[e].size},getEstimatedTotalSize:L,getOffsetForIndexAndAlignment:function(t,e,r,o,n,i){var a=t.direction,l=t.height,s=t.layout,c=t.width,u="horizontal"===a||"horizontal"===s?c:l,d=D(t,e,n),f=L(t,n),h=Math.max(0,Math.min(f-u,d.offset)),m=Math.max(0,d.offset-u+d.size+i);switch("smart"===r&&(r=o>=m-u&&o<=h+u?"auto":"center"),r){case"start":return h;case"end":return m;case"center":return Math.round(m+(h-m)/2);default:return o>=m&&o<=h?o:o<m?m:h}},getStartIndexForOffset:function(t,e,r){return function(t,e,r){var o=e.itemMetadataMap,n=e.lastMeasuredIndex;return(n>0?o[n].offset:0)>=r?F(t,e,n,0,r):function(t,e,r,o){for(var n=t.itemCount,i=1;r<n&&D(t,r,e).offset<o;)r+=i,i*=2;return F(t,e,Math.min(r,n-1),Math.floor(r/2),o)}(t,e,Math.max(0,n),r)}(t,r,e)},getStopIndexForStartIndex:function(t,e,r,o){for(var n=t.direction,i=t.height,a=t.itemCount,l=t.layout,s=t.width,c="horizontal"===n||"horizontal"===l?s:i,u=D(t,e,o),d=r+c,f=u.offset+u.size,h=e;h<a-1&&f<d;)h++,f+=D(t,h,o).size;return h},initInstanceProps:function(t,e){var r={itemMetadataMap:{},estimatedItemSize:t.estimatedItemSize||50,lastMeasuredIndex:-1};return e.resetAfterIndex=function(t,o){void 0===o&&(o=!0),r.lastMeasuredIndex=Math.min(r.lastMeasuredIndex,t-1),e._getItemStyleCache(-1),o&&e.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}}),H=w({getColumnOffset:function(t,e){return e*t.columnWidth},getColumnWidth:function(t,e){return t.columnWidth},getRowOffset:function(t,e){return e*t.rowHeight},getRowHeight:function(t,e){return t.rowHeight},getEstimatedTotalHeight:function(t){var e=t.rowCount;return t.rowHeight*e},getEstimatedTotalWidth:function(t){var e=t.columnCount;return t.columnWidth*e},getOffsetForColumnAndAlignment:function(t,e,r,o,n,i){var a=t.columnCount,l=t.columnWidth,s=t.width,c=Math.max(0,a*l-s),u=Math.min(c,e*l),d=Math.max(0,e*l-s+i+l);switch("smart"===r&&(r=o>=d-s&&o<=u+s?"auto":"center"),r){case"start":return u;case"end":return d;case"center":var f=Math.round(d+(u-d)/2);return f<Math.ceil(s/2)?0:f>c+Math.floor(s/2)?c:f;default:return o>=d&&o<=u?o:d>u||o<d?d:u}},getOffsetForRowAndAlignment:function(t,e,r,o,n,i){var a=t.rowHeight,l=t.height,s=t.rowCount,c=Math.max(0,s*a-l),u=Math.min(c,e*a),d=Math.max(0,e*a-l+i+a);switch("smart"===r&&(r=o>=d-l&&o<=u+l?"auto":"center"),r){case"start":return u;case"end":return d;case"center":var f=Math.round(d+(u-d)/2);return f<Math.ceil(l/2)?0:f>c+Math.floor(l/2)?c:f;default:return o>=d&&o<=u?o:d>u||o<d?d:u}},getColumnStartIndexForOffset:function(t,e){var r=t.columnWidth,o=t.columnCount;return Math.max(0,Math.min(o-1,Math.floor(e/r)))},getColumnStopIndexForStartIndex:function(t,e,r){var o=t.columnWidth,n=t.columnCount,i=t.width,a=e*o,l=Math.ceil((i+r-a)/o);return Math.max(0,Math.min(n-1,e+l-1))},getRowStartIndexForOffset:function(t,e){var r=t.rowHeight,o=t.rowCount;return Math.max(0,Math.min(o-1,Math.floor(e/r)))},getRowStopIndexForStartIndex:function(t,e,r){var o=t.rowHeight,n=t.rowCount,i=t.height,a=e*o,l=Math.ceil((i+r-a)/o);return Math.max(0,Math.min(n-1,e+l-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.columnWidth,t.rowHeight}}),A=P({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,r,o,n,i){var a=t.direction,l=t.height,s=t.itemCount,c=t.itemSize,u=t.layout,d=t.width,f="horizontal"===a||"horizontal"===u?d:l,h=Math.max(0,s*c-f),m=Math.min(h,e*c),p=Math.max(0,e*c-f+c+i);switch("smart"===r&&(r=o>=p-f&&o<=m+f?"auto":"center"),r){case"start":return m;case"end":return p;case"center":var v=Math.round(p+(m-p)/2);return v<Math.ceil(f/2)?0:v>h+Math.floor(f/2)?h:v;default:return o>=p&&o<=m?o:o<p?p:m}},getStartIndexForOffset:function(t,e){var r=t.itemCount,o=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(e/o)))},getStopIndexForStartIndex:function(t,e,r){var o=t.direction,n=t.height,i=t.itemCount,a=t.itemSize,l=t.layout,s=t.width,c=e*a,u="horizontal"===o||"horizontal"===l?s:n,d=Math.ceil((u+r-c)/a);return Math.max(0,Math.min(i-1,e+d-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function E(t,e){for(var r in t)if(!(r in e))return!0;for(var o in e)if(t[o]!==e[o])return!0;return!1}var U=["style"],q=["style"];function N(t,e){var r=t.style,o=(0,d.Z)(t,U),n=e.style,i=(0,d.Z)(e,q);return!E(r,n)&&!E(o,i)}function V(t,e){return!N(this.props,t)||E(this.state,e)}}}]);
//# sourceMappingURL=6663.a9cdeb50c5f4c6be.js.map