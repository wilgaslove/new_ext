"use strict";(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[7067],{7067:(e,t,r)=>{r.r(t),r.d(t,{Immer:()=>q,applyPatches:()=>re,castDraft:()=>oe,castImmutable:()=>ae,createDraft:()=>ne,current:()=>G,enableMapSet:()=>T,enablePatches:()=>Q,finishDraft:()=>se,freeze:()=>S,immerable:()=>s,isDraft:()=>i,isDraftable:()=>u,nothing:()=>n,original:()=>l,produce:()=>Y,produceWithPatches:()=>Z,setAutoFreeze:()=>ee,setUseStrictShallowCopy:()=>te});var n=Symbol.for("immer-nothing"),s=Symbol.for("immer-draftable"),o=Symbol.for("immer-state");function a(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var c=Object.getPrototypeOf;function i(e){return!!e&&!!e[o]}function u(e){return!!e&&(p(e)||Array.isArray(e)||!!e[s]||!!e.constructor?.[s]||v(e)||g(e))}var f=Object.prototype.constructor.toString();function p(e){if(!e||"object"!=typeof e)return!1;const t=c(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===f}function l(e){return i(e)||a(15),e[o].base_}function _(e,t){0===h(e)?Object.entries(e).forEach((([r,n])=>{t(r,n,e)})):e.forEach(((r,n)=>t(n,r,e)))}function h(e){const t=e[o];return t?t.type_:Array.isArray(e)?1:v(e)?2:g(e)?3:0}function d(e,t){return 2===h(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function y(e,t){return 2===h(e)?e.get(t):e[t]}function b(e,t,r){const n=h(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function v(e){return e instanceof Map}function g(e){return e instanceof Set}function m(e){return e.copy_||e.base_}function w(e,t){if(v(e))return new Map(e);if(g(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&p(e)){if(!c(e)){const t=Object.create(null);return Object.assign(t,e)}return{...e}}const r=Object.getOwnPropertyDescriptors(e);delete r[o];let n=Reflect.ownKeys(r);for(let t=0;t<n.length;t++){const s=n[t],o=r[s];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[s]})}return Object.create(c(e),r)}function S(e,t=!1){return z(e)||i(e)||!u(e)||(h(e)>1&&(e.set=e.add=e.clear=e.delete=P),Object.freeze(e),t&&_(e,((e,t)=>S(t,!0)))),e}function P(){a(2)}function z(e){return Object.isFrozen(e)}var O,A={};function M(e){const t=A[e];return t||a(0),t}function j(e,t){A[e]||(A[e]=t)}function k(){return O}function D(e,t){t&&(M("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function F(e){x(e),e.drafts_.forEach(E),e.drafts_=null}function x(e){e===O&&(O=e.parent_)}function C(e){return O={drafts_:[],parent_:O,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function E(e){const t=e[o];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function N(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[o].modified_&&(F(t),a(4)),u(e)&&(e=R(t,e),t.parent_||K(t,e)),t.patches_&&M("Patches").generateReplacementPatches_(r[o].base_,e,t.patches_,t.inversePatches_)):e=R(t,r,[]),F(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==n?e:void 0}function R(e,t,r){if(z(t))return t;const n=t[o];if(!n)return _(t,((s,o)=>W(e,n,t,s,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return K(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let s=t,o=!1;3===n.type_&&(s=new Set(t),t.clear(),o=!0),_(s,((s,a)=>W(e,n,t,s,a,r,o))),K(e,t,!1),r&&e.patches_&&M("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function W(e,t,r,n,s,o,a){if(i(s)){const a=R(e,s,o&&t&&3!==t.type_&&!d(t.assigned_,n)?o.concat(n):void 0);if(b(r,n,a),!i(a))return;e.canAutoFreeze_=!1}else a&&r.add(s);if(u(s)&&!z(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;R(e,s),t&&t.scope_.parent_||K(e,s)}}function K(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&S(t,r)}var U={get(e,t){if(t===o)return e;const r=m(e);if(!d(r,t))return function(e,t,r){const n=J(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!u(n)?n:n===L(e.base_,t)?($(e),e.copy_[t]=B(n,e)):n},has:(e,t)=>t in m(e),ownKeys:e=>Reflect.ownKeys(m(e)),set(e,t,r){const n=J(m(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=L(m(e),t),c=n?.[o];if(c&&c.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((s=r)===(a=n)?0!==s||1/s==1/a:s!=s&&a!=a)&&(void 0!==r||d(e.base_,t)))return!0;$(e),X(e)}var s,a;return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==L(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,$(e),X(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=m(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){a(11)},getPrototypeOf:e=>c(e.base_),setPrototypeOf(){a(12)}},I={};function L(e,t){const r=e[o];return(r?m(r):e)[t]}function J(e,t){if(!(t in e))return;let r=c(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=c(r)}}function X(e){e.modified_||(e.modified_=!0,e.parent_&&X(e.parent_))}function $(e){e.copy_||(e.copy_=w(e.base_,e.scope_.immer_.useStrictShallowCopy_))}_(U,((e,t)=>{I[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),I.deleteProperty=function(e,t){return I.set.call(this,e,t,void 0)},I.set=function(e,t,r){return U.set.call(this,e[0],t,r,e[0])};var q=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...s){return n.produce(e,(e=>t.call(this,e,...s)))}}let s;if("function"!=typeof t&&a(6),void 0!==r&&"function"!=typeof r&&a(7),u(e)){const n=C(this),o=B(e,void 0);let a=!0;try{s=t(o),a=!1}finally{a?F(n):x(n)}return D(n,r),N(s,n)}if(!e||"object"!=typeof e){if(s=t(e),void 0===s&&(s=e),s===n&&(s=void 0),this.autoFreeze_&&S(s,!0),r){const t=[],n=[];M("Patches").generateReplacementPatches_(e,s,t,n),r(t,n)}return s}a(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){u(e)||a(8),i(e)&&(e=G(e));const t=C(this),r=B(e,void 0);return r[o].isManual_=!0,x(t),r}finishDraft(e,t){const r=e&&e[o];r&&r.isManual_||a(9);const{scope_:n}=r;return D(n,t),N(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=M("Patches").applyPatches_;return i(e)?n(e,t):this.produce(e,(e=>n(e,t)))}};function B(e,t){const r=v(e)?M("MapSet").proxyMap_(e,t):g(e)?M("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:k(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,o=U;r&&(s=[n],o=I);const{revoke:a,proxy:c}=Proxy.revocable(s,o);return n.draft_=c,n.revoke_=a,c}(e,t);return(t?t.scope_:k()).drafts_.push(r),r}function G(e){return i(e)||a(10),H(e)}function H(e){if(!u(e)||z(e))return e;const t=e[o];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=w(e,t.scope_.immer_.useStrictShallowCopy_)}else r=w(e,!0);return _(r,((e,t)=>{b(r,e,H(t))})),t&&(t.finalized_=!1),r}function Q(){const e="replace",t="add",r="remove";function o(e){if(!u(e))return e;if(Array.isArray(e))return e.map(o);if(v(e))return new Map(Array.from(e.entries()).map((([e,t])=>[e,o(t)])));if(g(e))return new Set(Array.from(e).map(o));const t=Object.create(c(e));for(const r in e)t[r]=o(e[r]);return d(e,s)&&(t[s]=e[s]),t}function f(e){return i(e)?o(e):e}j("Patches",{applyPatches_:function(n,s){return s.forEach((s=>{const{path:c,op:i}=s;let u=n;for(let e=0;e<c.length-1;e++){const t=h(u);let r=c[e];"string"!=typeof r&&"number"!=typeof r&&(r=""+r),0!==t&&1!==t||"__proto__"!==r&&"constructor"!==r||a(19),"function"==typeof u&&"prototype"===r&&a(19),u=y(u,r),"object"!=typeof u&&a(18,c.join("/"))}const f=h(u),p=o(s.value),l=c[c.length-1];switch(i){case e:switch(f){case 2:return u.set(l,p);case 3:a(16);default:return u[l]=p}case t:switch(f){case 1:return"-"===l?u.push(p):u.splice(l,0,p);case 2:return u.set(l,p);case 3:return u.add(p);default:return u[l]=p}case r:switch(f){case 1:return u.splice(l,1);case 2:return u.delete(l);case 3:return u.delete(s.value);default:return delete u[l]}default:a(17)}})),n},generatePatches_:function(n,s,o,a){switch(n.type_){case 0:case 2:return function(n,s,o,a){const{base_:c,copy_:i}=n;_(n.assigned_,((n,u)=>{const p=y(c,n),l=y(i,n),_=u?d(c,n)?e:t:r;if(p===l&&_===e)return;const h=s.concat(n);o.push(_===r?{op:_,path:h}:{op:_,path:h,value:l}),a.push(_===t?{op:r,path:h}:_===r?{op:t,path:h,value:f(p)}:{op:e,path:h,value:f(p)})}))}(n,s,o,a);case 1:return function(n,s,o,a){let{base_:c,assigned_:i}=n,u=n.copy_;u.length<c.length&&([c,u]=[u,c],[o,a]=[a,o]);for(let t=0;t<c.length;t++)if(i[t]&&u[t]!==c[t]){const r=s.concat([t]);o.push({op:e,path:r,value:f(u[t])}),a.push({op:e,path:r,value:f(c[t])})}for(let e=c.length;e<u.length;e++){const r=s.concat([e]);o.push({op:t,path:r,value:f(u[e])})}for(let e=u.length-1;c.length<=e;--e){const t=s.concat([e]);a.push({op:r,path:t})}}(n,s,o,a);case 3:return function(e,n,s,o){let{base_:a,copy_:c}=e,i=0;a.forEach((e=>{if(!c.has(e)){const a=n.concat([i]);s.push({op:r,path:a,value:e}),o.unshift({op:t,path:a,value:e})}i++})),i=0,c.forEach((e=>{if(!a.has(e)){const a=n.concat([i]);s.push({op:t,path:a,value:e}),o.unshift({op:r,path:a,value:e})}i++}))}(n,s,o,a)}},generateReplacementPatches_:function(t,r,s,o){s.push({op:e,path:[],value:r===n?void 0:r}),o.push({op:e,path:[],value:t})}})}function T(){class e extends Map{constructor(e,t){super(),this[o]={type_:2,parent_:t,scope_:t?t.scope_:k(),modified_:!1,finalized_:!1,copy_:void 0,assigned_:void 0,base_:e,draft_:this,isManual_:!1,revoked_:!1}}get size(){return m(this[o]).size}has(e){return m(this[o]).has(e)}set(e,r){const n=this[o];return s(n),m(n).has(e)&&m(n).get(e)===r||(t(n),X(n),n.assigned_.set(e,!0),n.copy_.set(e,r),n.assigned_.set(e,!0)),this}delete(e){if(!this.has(e))return!1;const r=this[o];return s(r),t(r),X(r),r.base_.has(e)?r.assigned_.set(e,!1):r.assigned_.delete(e),r.copy_.delete(e),!0}clear(){const e=this[o];s(e),m(e).size&&(t(e),X(e),e.assigned_=new Map,_(e.base_,(t=>{e.assigned_.set(t,!1)})),e.copy_.clear())}forEach(e,t){m(this[o]).forEach(((r,n,s)=>{e.call(t,this.get(n),n,this)}))}get(e){const r=this[o];s(r);const n=m(r).get(e);if(r.finalized_||!u(n))return n;if(n!==r.base_.get(e))return n;const a=B(n,r);return t(r),r.copy_.set(e,a),a}keys(){return m(this[o]).keys()}values(){const e=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const t=e.next();return t.done?t:{done:!1,value:this.get(t.value)}}}}entries(){const e=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const r=this.get(t.value);return{done:!1,value:[t.value,r]}}}}[Symbol.iterator](){return this.entries()}}function t(e){e.copy_||(e.assigned_=new Map,e.copy_=new Map(e.base_))}class r extends Set{constructor(e,t){super(),this[o]={type_:3,parent_:t,scope_:t?t.scope_:k(),modified_:!1,finalized_:!1,copy_:void 0,base_:e,draft_:this,drafts_:new Map,revoked_:!1,isManual_:!1}}get size(){return m(this[o]).size}has(e){const t=this[o];return s(t),t.copy_?!!t.copy_.has(e)||!(!t.drafts_.has(e)||!t.copy_.has(t.drafts_.get(e))):t.base_.has(e)}add(e){const t=this[o];return s(t),this.has(e)||(n(t),X(t),t.copy_.add(e)),this}delete(e){if(!this.has(e))return!1;const t=this[o];return s(t),n(t),X(t),t.copy_.delete(e)||!!t.drafts_.has(e)&&t.copy_.delete(t.drafts_.get(e))}clear(){const e=this[o];s(e),m(e).size&&(n(e),X(e),e.copy_.clear())}values(){const e=this[o];return s(e),n(e),e.copy_.values()}entries(){const e=this[o];return s(e),n(e),e.copy_.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(e,t){const r=this.values();let n=r.next();for(;!n.done;)e.call(t,n.value,n.value,this),n=r.next()}}function n(e){e.copy_||(e.copy_=new Set,e.base_.forEach((t=>{if(u(t)){const r=B(t,e);e.drafts_.set(t,r),e.copy_.add(r)}else e.copy_.add(t)})))}function s(e){e.revoked_&&a(3,JSON.stringify(m(e)))}j("MapSet",{proxyMap_:function(t,r){return new e(t,r)},proxySet_:function(e,t){return new r(e,t)}})}var V=new q,Y=V.produce,Z=V.produceWithPatches.bind(V),ee=V.setAutoFreeze.bind(V),te=V.setUseStrictShallowCopy.bind(V),re=V.applyPatches.bind(V),ne=V.createDraft.bind(V),se=V.finishDraft.bind(V);function oe(e){return e}function ae(e){return e}}}]);
//# sourceMappingURL=7067.cc6625e2e5fda6a5.js.map