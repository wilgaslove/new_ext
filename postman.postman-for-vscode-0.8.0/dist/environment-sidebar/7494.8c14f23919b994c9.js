"use strict";(self.webpackChunkenvironment_sidebar=self.webpackChunkenvironment_sidebar||[]).push([[7494],{7494:(e,t,s)=>{s.r(t),s.d(t,{createVariableUpdatesHandler:()=>w,deleteDependentSession:()=>m,getActiveSession:()=>p,getSession:()=>l,setSession:()=>d,subscribeToSession:()=>c,updateDependentSession:()=>v,useSession:()=>k,useSessionSafe:()=>g});var n=s(747);const a=({model:e,modelId:t})=>{if(!e||!t)throw new Error("Invalid model or modelId");return[e,t].join("/")},i=e=>{const t=String(e).split("/");if(2!==t.length)throw new Error("Invalid sessionId");const[s,n]=t;if(!s||!n)throw new Error("Invalid sessionId");return{model:s,modelId:n}},o=new n.KVStorage("variable-session"),r=e=>o.get(e),l=e=>{const t=a(e);return r(t)},u=(e,t)=>{const s=(n=t,JSON.parse(JSON.stringify(n)));var n;return o.set(e,s)},d=(e,t)=>{const s=a(e);return u(s,t)},c=(e,t)=>{const s=a(e);return o.subscribe(s,t)},h=()=>o,v=async({model:e,modelId:t},s)=>{try{var n;const a=((e,t)=>{const s=new Set,n=e.values;return{values:t.values.reduce(((e,t)=>{let a=n.findIndex(((e,n)=>e.key===t.key&&e.enabled===t.enabled&&!s.has(n)));if(-1!==a)e.push(Object.assign({},n[a])),s.add(a);else if(-1!==(a=n.findIndex((e=>e.key===t.key&&!s.has(a))))){const i=n[a];e.push({key:t.key,enabled:t.enabled,type:t.type,value:i.value}),s.add(a)}else e.push({key:t.key,value:t.value,enabled:t.enabled,type:t.type}),s.add(n.length-1);return e}),[])}})(null!=(n=await l({model:e,modelId:t}))?n:{values:[]},s);await d({model:e,modelId:t},a)}catch(e){}},m=async e=>{await(e=>{const t=a(e);return o.remove(t)})(e)},p=async(e,t)=>{var s;if(!t)throw new TypeError("No item found");const n=await l(e),i=((e,t=new Set)=>s=>{const n=(a=s,e=>a.key===e.key&&a.enabled===e.enabled&&a.type===e.type);var a;const i=e.findIndex(((e,s)=>n(e)&&!t.has(s)));return-1===i?null:(t.add(i),e[i])})(null!=(s=null==n?void 0:n.values)?s:[]),o=t.values.map((e=>{const t=i(e);return{key:e.key,value:t?t.value:e.value,enabled:e.enabled,type:e.type}})).filter((e=>!1!==e.enabled));return Object.assign({},t,{id:a(e),values:o})};class f{static isMutationsDefinition(e){return"object"==typeof e}constructor(e){if(this.autoCompact=void 0,this.compacted=void 0,this.stream=void 0,e||(e={}),!f.isMutationsDefinition(e))throw new Error("Invalid mutations");this.autoCompact=e.autoCompact||!0,this.compacted="object"==typeof e.compacted?Object.assign({},e.compacted):{},this.stream=Array.isArray(e.stream)?[...e.stream]:[]}applyOn(e){const t=t=>{e.applyMutation(2===t.length?"set":"unset",t[0],t[1])};for(const e of Object.values(this.compacted))t(e);for(const e of this.stream)t(e)}addMutation(e){const t=e[0],s=Array.isArray(t)?t.join("."):t;this.compacted[s]=e}compact(){for(const e of this.stream)this.addMutation(e);this.stream=[]}count(){return Object.keys(this.compacted).length+this.stream.length}}class b{static isVariableScopeDefinition(e){return"object"==typeof e&&null!==e&&"values"in e}constructor(e){if(this.id=void 0,this.values=void 0,this.mutations=void 0,!b.isVariableScopeDefinition(e))throw new Error("Invalid variable scope definition");this.id=e.id,this.values=[...e.values],this.mutations=new f(e.mutations)}set(e,t){const s=((t,s)=>{for(let s=t.length-1;s>=0;s--)if((n=t[s]).key===e&&!1!==n.enabled)return s;var n;return-1})(this.values);-1!==s?this.values[s]=Object.assign({},this.values[s],{value:t}):this.values.push({key:e,value:t,type:"default",enabled:!0})}unset(e){this.values=this.values.filter((t=>!(t.enabled&&t.key===e)))}applyMutation(e,t,s){"set"===e?this.set(t,s):"unset"===e&&this.unset(t)}}class y{triggerOnDoneCallback(){for(const e of this.onDoneCallbacks)e();this.onDoneCallbacks=[]}processQueue(){if(0===this.queue.length)return this.isQueued=!1,void this.triggerOnDoneCallback();const e=[...this.queue];this.queue=[],Promise.allSettled([this.handler(...e),new Promise((e=>setTimeout(e,this.interval)))]).finally((()=>{this.processQueue()})).catch((()=>{}))}constructor(e,t){this.queue=[],this.isQueued=!1,this.onDoneCallbacks=[],this.handler=void 0,this.interval=void 0,this.handler=e,this.interval=t.interval}add(...e){this.queue.push(e),this.isQueued||(this.isQueued=!0,setTimeout((()=>{this.processQueue()}),this.interval))}onDone(e){this.onDoneCallbacks.push(e)}}const w=e=>new y((e=>async(...t)=>{const s=t.map((([e,t])=>({scope:new b(e),meta:t})));var n,a;const o=Object.values((n=s,a=({scope:e})=>e.id,n.reduce(((e,t)=>{const s=a(t),n=e[s]||[];return Object.assign({},e,{[s]:[...n,t]})}),{}))).map((e=>{const[t,...s]=e;return s.reduce(((e,{scope:t})=>{const s=e.scope.mutations,n=t.mutations;for(const e of Object.values(n.compacted))s.addMutation(e);for(const e of n.stream)s.addMutation(e);return e}),t)})).map((async({scope:t,meta:s})=>{const n=t.id;try{const{model:t}=i(n);if(t!==e.model)return}catch(e){return}const{modelId:a}=i(n),o=await e.getValues(a,s);if(!o)return;const l=await e.hasEditPermission(a,s);await(async(e,{hasEditPermission:t})=>{const s=await r(e.id);if(!s||!e.mutations.count())return;const n=new b(s);if(e.mutations.applyOn(n),!1!==t)await u(e.id,Object.assign({},s,{values:n.values}));else{const t=new Set,a=[];for(const[,e]of s.values.entries()){if(!1===e.enabled)continue;const s=n.values.findIndex(((s,n)=>s.key===e.key&&s.enabled===e.enabled&&!t.has(n)));-1===s?a.push(Object.assign({},e,{value:void 0,deleted:!0})):(t.add(s),a.push(n.values[s]))}await u(e.id,Object.assign({},s,{values:a}))}})(t,{hasEditPermission:l}),await(async(e,t,s,n,{hasEditPermission:a})=>{if(!1===a)return;const{modelId:o}=i(e.id),r=[...t.values],l=new b(t);e.mutations.applyOn(l);let u=!1;const d=new Set;for(const e of l.values){if(!1===e.enabled)continue;const s=t.values.findIndex(((t,s)=>t.key===e.key&&t.enabled===e.enabled&&!d.has(s)));-1!==s?d.add(s):(r.push(Object.assign({},e,{value:""})),u=!0)}d.clear();for(const[e,t]of r.entries()){if(!t||!1===t.enabled)continue;const s=l.values.findIndex(((e,s)=>e.key===t.key&&e.enabled===t.enabled&&!d.has(s)));-1!==s?d.add(s):(r[e]=null,u=!0)}if(!u)return;const c=r.filter((e=>!!e));await n.setValues(o,c,s)})(t,o,s,e,{hasEditPermission:l})}));await Promise.allSettled(o)})(e),{interval:1e3}),k=e=>(0,n.useKVStorage)(h(),a(e)),g=({model:e,modelId:t})=>{const s=e&&t?a({model:e,modelId:t}):"";return(0,n.useKVStorage)(h(),s)}}}]);
//# sourceMappingURL=7494.8c14f23919b994c9.js.map