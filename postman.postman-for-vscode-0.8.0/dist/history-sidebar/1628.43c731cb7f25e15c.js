"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[1628,7128],{1628:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var o=n(540),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};const i=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o._lastRenderedStartIndex=-1,o._lastRenderedStopIndex=-1,o._memoizedUnloadedRanges=[],o._onItemsRendered=function(e){var t=e.visibleStartIndex,n=e.visibleStopIndex;o._lastRenderedStartIndex=t,o._lastRenderedStopIndex=n,o._ensureRowsLoaded(t,n)},o._setRef=function(e){o._listRef=e},a(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"resetloadMoreItemsCache",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._memoizedUnloadedRanges=[],e&&this._ensureRowsLoaded(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return(0,this.props.children)({onItemsRendered:this._onItemsRendered,ref:this._setRef})}},{key:"_ensureRowsLoaded",value:function(e,t){var n=this.props,o=n.isItemLoaded,r=n.itemCount,a=n.minimumBatchSize,i=void 0===a?10:a,s=n.threshold,d=void 0===s?15:s,l=function(e){for(var t=e.isItemLoaded,n=e.itemCount,o=e.minimumBatchSize,r=e.stopIndex,a=[],i=null,s=null,d=e.startIndex;d<=r;d++)t(d)?null!==s&&(a.push(i,s),i=s=null):(s=d,null===i&&(i=d));if(null!==s){for(var l=Math.min(Math.max(s,i+o-1),n-1),u=s+1;u<=l&&!t(u);u++)s=u;a.push(i,s)}if(a.length)for(;a[1]-a[0]+1<o&&a[0]>0;){var f=a[0]-1;if(t(f))break;a[0]=f}return a}({isItemLoaded:o,itemCount:r,minimumBatchSize:i,startIndex:Math.max(0,e-d),stopIndex:Math.min(r-1,t+d)});(this._memoizedUnloadedRanges.length!==l.length||this._memoizedUnloadedRanges.some((function(e,t){return l[t]!==e})))&&(this._memoizedUnloadedRanges=l,this._loadUnloadedRanges(l))}},{key:"_loadUnloadedRanges",value:function(e){for(var t=this,n=this.props.loadMoreItems||this.props.loadMoreRows,o=function(o){var r=e[o],a=e[o+1],i=n(r,a);null!=i&&i.then((function(){if(!((e={lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:r,stopIndex:a}).startIndex>e.lastRenderedStopIndex||e.stopIndex<e.lastRenderedStartIndex)){if(null==t._listRef)return;"function"==typeof t._listRef.resetAfterIndex?t._listRef.resetAfterIndex(r,!0):("function"==typeof t._listRef._getItemStyleCache&&t._listRef._getItemStyleCache(-1),t._listRef.forceUpdate())}var e}))},r=0;r<e.length;r+=2)o(r)}}]),t}(o.PureComponent)}}]);
//# sourceMappingURL=1628.43c731cb7f25e15c.js.map