"use strict";(self.webpackChunkpostman_console=self.webpackChunkpostman_console||[]).push([[2298],{7560:(e,t,i)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},r.apply(this,arguments)}i.d(t,{Z:()=>r})},2298:(e,t,i)=>{i.r(t),i.d(t,{pmConsole:()=>S});var r=i(747),s=i(8722),n=i(7560);const o=new Set(["iso-2022-cn","iso-2022-cn-ext"]),a="utf-16",_="utf-16be",c=254,d=255,u={first:e=>e?e[0]:void 0,last:e=>e?e[e.length-1]:void 0,get:(e,t)=>{const i=i=>String.prototype.split.call(t,i).filter(Boolean).reduce(((e,t)=>null!=e?e[t]:e),e),r=i(/[,[\]]+?/)||i(/[,.[\]]+?/);return void 0===r||r===e?void 0:r},has:(e,t)=>{const i=t.split(".");return!!e&&(i.length>1?u.has(e[t.split(".")[0]],i.slice(1).join(".")):Object.prototype.hasOwnProperty.call(e,t))}};function l(e,t){if(o.has(t))return"";t===a&&e.length>=2&&e[0]===c&&e[1]===d&&(t=_);try{return new TextDecoder(t||"utf8").decode(e)}catch(t){return new TextDecoder("utf8").decode(e)}}const E={UNSPECIFIED:"Unspecified certificate verification error",UNABLE_TO_GET_ISSUER_CERT:"Unable to get issuer certificate",UNABLE_TO_GET_CRL:"Unable to get certificate CRL",UNABLE_TO_DECRYPT_CERT_SIGNATURE:"Unable to decrypt certificate's signature",UNABLE_TO_DECRYPT_CRL_SIGNATURE:"Unable to decrypt CRL's signature",UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY:"Unable to decode issuer public key",CERT_SIGNATURE_FAILURE:"Certificate signature failure",CRL_SIGNATURE_FAILURE:"CRL signature failure",CERT_NOT_YET_VALID:"Certificate is not yet valid",CERT_HAS_EXPIRED:"Certificate has expired",CRL_NOT_YET_VALID:"CRL is not yet valid",CRL_HAS_EXPIRED:"CRL has expired",ERROR_IN_CERT_NOT_BEFORE_FIELD:"Format error in certificate's notBefore field",ERR_TLS_CERT_ALTNAME_INVALID:"Hostname/IP does not match certificate's altnames",ERROR_IN_CERT_NOT_AFTER_FIELD:"Format error in certificate's notAfter field",ERROR_IN_CRL_LAST_UPDATE_FIELD:"Format error in CRL's lastUpdate field",ERROR_IN_CRL_NEXT_UPDATE_FIELD:"Format error in CRL's nextUpdate field",OUT_OF_MEM:"Out of memory",DEPTH_ZERO_SELF_SIGNED_CERT:"Self signed certificate",SELF_SIGNED_CERT_IN_CHAIN:"Self signed certificate in certificate chain",UNABLE_TO_GET_ISSUER_CERT_LOCALLY:"Unable to get local issuer certificate",UNABLE_TO_VERIFY_LEAF_SIGNATURE:"Unable to verify the first certificate",CERT_CHAIN_TOO_LONG:"Certificate chain too long",CERT_REVOKED:"Certificate revoked",INVALID_CA:"Invalid CA certificate",PATH_LENGTH_EXCEEDED:"Path length constraint exceeded",INVALID_PURPOSE:"Unsupported certificate purpose",CERT_UNTRUSTED:"Certificate not trusted",CERT_REJECTED:"Certificate rejected",SUBJECT_ISSUER_MISMATCH:"Subject issuer mismatch",AKID_SKID_MISMATCH:"Authority and subject key identifier mismatch",AKID_ISSUER_SERIAL_MISMATCH:"Authority and issuer serial number mismatch",KEYUSAGE_NO_CERTSIGN:"Key usage does not include certificate signing",UNABLE_TO_GET_CRL_ISSUER:"Unable to get CRL issuer certificate",UNHANDLED_CRITICAL_EXTENSION:"Unhandled critical extension",KEYUSAGE_NO_CRL_SIGN:"Key usage does not include CRL signing",UNHANDLED_CRITICAL_CRL_EXTENSION:"Unhandled critical CRL extension",INVALID_NON_CA:"Invalid non-CA certificate (has CA markings)",PROXY_PATH_LENGTH_EXCEEDED:"Proxy path length constraint exceeded",KEYUSAGE_NO_DIGITAL_SIGNATURE:"Key usage does not include digital signature",PROXY_CERTIFICATES_NOT_ALLOWED:"Proxy certificates not allowed, please set the appropriate flag",INVALID_EXTENSION:"Invalid or inconsistent certificate extension",INVALID_POLICY_EXTENSION:"Invalid or inconsistent certificate policy extension",NO_EXPLICIT_POLICY:"No explicit policy",DIFFERENT_CRL_SCOPE:"Different CRL scope",UNSUPPORTED_EXTENSION_FEATURE:"Unsupported extension feature",UNNESTED_RESOURCE:"RFC 3779 resource not subset of parent's resources",PERMITTED_VIOLATION:"Permitted subtree violation",EXCLUDED_VIOLATION:"Excluded subtree violation",SUBTREE_MINMAX:"Name constraints minimum and maximum not supported",APPLICATION_VERIFICATION:"Application verification failure",UNSUPPORTED_CONSTRAINT_TYPE:"Unsupported name constraint type",UNSUPPORTED_CONSTRAINT_SYNTAX:"Unsupported or invalid name constraint syntax",UNSUPPORTED_NAME_SYNTAX:"Unsupported or invalid name syntax",CRL_PATH_VALIDATION_ERROR:"CRL path validation error",PATH_LOOP:"Path Loop",SUITE_B_INVALID_VERSION:"Suite B: certificate version invalid",SUITE_B_INVALID_ALGORITHM:"Suite B: invalid public key algorithm",SUITE_B_INVALID_CURVE:"Suite B: invalid ECC curve",SUITE_B_INVALID_SIGNATURE_ALGORITHM:"Suite B: invalid signature algorithm",SUITE_B_LOS_NOT_ALLOWED:"Suite B: curve not allowed for this LOS",SUITE_B_CANNOT_SIGN_P_384_WITH_P_256:"Suite B: cannot sign P-384 with P-256",HOSTNAME_MISMATCH:"Hostname mismatch",EMAIL_MISMATCH:"Email address mismatch",IP_ADDRESS_MISMATCH:"IP address mismatch",DANE_NO_MATCH:"No matching DANE TLSA records",EE_KEY_TOO_SMALL:"EE certificate key too weak",CA_KEY_TOO_SMALL:"CA certificate key too weak",CA_MD_TOO_WEAK:"CA signature digest algorithm too weak",INVALID_CALL:"Invalid certificate verification context",STORE_LOOKUP:"Issuer certificate lookup error",NO_VALID_SCTS:"Certificate Transparency required, but no valid SCTs found",PROXY_SUBJECT_NAME_VIOLATION:"Proxy subject name violation",OCSP_VERIFY_NEEDED:"OCSP verification needed",OCSP_VERIFY_FAILED:"OCSP verification failed",OCSP_CERT_UNKNOWN:"OCSP unknown cert"};var I=i(9712);const T=5242880,h=new Set(["video","audio","image","embed"]);function f(e){if("stream"in e){if(e.stream instanceof ArrayBuffer)return l(new Uint8Array(e.stream),e.contentInfo.charset);if(e.stream instanceof Uint8Array)return l(e.stream,e.contentInfo.charset)}return""}function A(e,t){return"httpVersion"in e?e.httpVersion:"stream"in e?u.get(u.last(t),"response.httpVersion")||"":u.get(u.first(t),"request.httpVersion")||""}function p(e){return"url"in e?function({protocol:e,host:t,path:i,query:r}){const s=new URLSearchParams(r.map((({key:e,value:t})=>[e,t]))),n=r.length>0?`?${s.toString()}`:"";return`${e}://${t.join(".")}/${i}${n}`}(e.url):e.href}function C(e,t){return"httpVersion"in e?e.httpVersion:u.get(u.first(t),"request.httpVersion")||""}function R(e){return e.body?{body:e.body}:{}}function g(e){return"responseTime"in e&&e.responseTime||0}class N{constructor(){this._items=[]}clear(){this._items=[]}enqueue(e){var t=this;this._items.push((async function(){await e(),t._items.length>0&&(t._items.shift(),t._items.length>0&&t._items[0]())})),1==this._items.length&&this._items[0]()}}const S=new class{constructor(e,t){this._storage=e,this.blobData=t,this._sequence=0,this._timelineId="default-timeline",this._queue=new N}getTimelineId(){return this._timelineId}write(e,t,i,r,o=Date.now()){var a=this;const _={id:(0,s.v4)(),timeline:this._timelineId,sequence:this._sequence++,timestamp:o,type:t,severity:e,source:i||void 0,details:r},c=this.getTimelineId();"log"===t&&"clear"===e?this._queue.enqueue((async function(){await a._storage.set(c,[_])})):this._queue.enqueue((async function(){const e=await a._storage.get(c)||[],t=await Promise.all((i=_,"log"===i.type&&"clear"===i.severity?[i]:"network"===i.type?function(e){var t;const i=function(e){const t=e.details.request.headers;return Array.isArray(t)&&(e.details.request.headers=t.filter((e=>!e.disabled))),e}((0,n.Z)({},e));if("error"===i.severity||i.details&&i.details.browserRequest)return[i];const{data:r,sessions:s}=(null==(t=i.details.history)?void 0:t.execution)||{};return Array.isArray(r)?r.map(((e,t)=>((e=(0,n.Z)({},e)).session.id&&s?(e.session=s[e.session.id],e.session||(e.session={session:"A previous session was reused"})):e.session={session:"A previous session was reused"},t!==r.length-1?e.redirect=!0:(e.request=(0,n.Z)({},e.request,i.details.request),e.response=(0,n.Z)({},e.response,i.details.response),e.indirect=i.details.indirect,e.warning=i.details.warning,e.agentUsed=i.details.agentUsed||"vscode"),(0,n.Z)({},i,{id:`${i.id}-${t}`,details:e})))):[e]}(i):"log"===i.type?function(e){try{e.details=(0,I.parse)(e.details)}catch(e){}return[e]}(i):[i]).map((async function(e){return"network"===e.type?await async function(e,t){let i,r;if(t.details.request.body&&"raw"===t.details.request.body.mode&&!("___ignored___"in t.details.request.body)){const e=t.details.request.body.raw,i=t.details.request.body.options;e.length>T?(r={id:`${t.id}-request`,data:e.slice(0,Math.max(0,T))},t.details.request.body={___truncated___:!0,___ignored___:!0,blobId:r.id,mode:"raw",options:i}):e.length>10240&&(r={id:`${t.id}-request`,data:e},t.details.request.body={___ignored___:!0,blobId:r.id,mode:"raw",options:i})}if(t.details.response){var s;const e=(null==(s=t.details.response)||null==(s=s.contentInfo)?void 0:s.mimeFormat)||"";if(h.has(e))t.details.response.body={___unsupported___:!0};else{const e=t.details.response.body||"";e.length>T?(i={id:`${t.id}-response`,data:e.slice(0,T)},t.details.response.body={___truncated___:!0,___ignored___:!0,blobId:i.id}):e.length>10240&&(i={id:`${t.id}-response`,data:e},t.details.response.body={___ignored___:!0,blobId:i.id})}}return r&&await e.push(r),i&&await e.push(i),t}(a.blobData,e):_})));var i;await a._storage.set(c,[...e,...t])}))}error(e,t,i){return this.write("error",e,t,i)}info(e,t,i){return this.write("info",e,t,i)}log(e,t,i){return this.write("log",e,t,i)}warn(e,t,i){return this.write("warn",e,t,i)}clear(){this._queue.clear(),this._queue.enqueue((()=>this._storage.set(this.getTimelineId(),[])))}logRequest(e){e&&e.request&&function(e,t){var i;const r=null==(i=t.history)||null==(i=i.execution)?void 0:i.data,s={agentUsed:"vscode",request:(0,n.Z)({},t.request,{url:p(t.request),headers:(o=t.request,"header"in o?o.header:o.headers)},"body"in t.request&&R(t.request),{httpVersion:C(t.request,r)})};var o,a;if(u.has(t.cursor,"scriptId")&&(s.indirect="request"),t.indirect&&(s.indirect=t.indirect),t.history&&(s.history=t.history),t.response&&(s.response=(0,n.Z)({headers:t.response.headers,statusCode:(a=t.response,"statusCode"in a?`${a.statusCode} ${a.statusMessage}`:String(a.code)),httpVersion:A(t.response,r),body:f(t.response),responseTime:g(t.response)},"contentInfo"in t.response&&{contentInfo:t.response.contentInfo})),t.error)return s.error={name:t.error.name,message:t.error.message},e.error("network",{cloud:t.cloud},s);if(t.history){const i=function(e){const t=e.execution.data,i=t&&u.last(t),r=u.get(e,["execution","sessions",u.get(i,"session.id")]);return!1===u.get(r,"tls.authorized")?("string"!=typeof(s=u.get(r,"tls.authorizationError"))?"Certificate verification failed":E[s]||s)||"Certificate verification failed":null;var s}(t.history);if(i)return s.warning=i,e.warn("network",{cloud:t.cloud},s)}e.log("network",{cloud:t.cloud},s)}(this,e)}logConsole(e){e&&e.messages&&e.level&&this.write(e.level,"log",{cloud:e.cloud},e.messages)}logException(e){e&&e.error&&this.error("exception",{cloud:e.cloud},e.error)}getAllLogs(){return this._storage.get(this.getTimelineId())}}(new r.InMemoryKVStorage("Console"),new class{constructor(e){this._storage=e}async push(e){return this._storage.set(e.id,e.data)}async remove(e){return this._storage.remove(e.id)}async get(e){return this._storage.get(e.id)}}(new r.InMemoryKVStorage("ConsoleBlob")))}}]);
//# sourceMappingURL=2298.f9e567a250c8d55e.js.map