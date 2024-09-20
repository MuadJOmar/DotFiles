var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{r:()=>AccountApp});class IpcCall{constructor(e,t,o=!1,r=!1){this.scope=e,this.reset=o,this.pack=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const o=new IpcCommand("core","webview/ready"),r=new IpcCommand("core","webview/focus/changed"),n=new IpcCommand("core","command/execute"),s=(new IpcCommand("core","configuration/update"),new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const a=new IpcNotification("account","subscription/didChange");class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function l(e,t,o){let r,n,s,a,l;function c(e){const o=e-(n??0);return null==n||o>=t||o<0}function d(){const e=Date.now();if(c(e))h();else{l=setTimeout(d,t-(e-(n??0)))}}function h(){return l=void 0,r?function(){const t=r,o=s;return r=s=void 0,a=e.apply(o,t),a}():(r=void 0,s=void 0,a)}function u(...e){const h=Date.now(),u=c(h);return r=null!=o&&r?o(r,e):e,s=this,n=h,u&&null==l?(l=setTimeout(d,t),a):(null==l&&(l=setTimeout(d,t)),a)}return u.cancel=function(){null!=l&&clearTimeout(l),r=void 0,n=void 0,s=void 0,l=void 0},u.flush=function(){return null==l?a:(clearTimeout(l),h())},u.pending=function(){return null!=l},u}const c=",",d="=",h="{",u="(",p=")",f=/\(([\s\S]*)\)/,g=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,m=/\s?=.*$/;function v(e){const t=.001*performance.now();let o=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],r-=e[1],r<0&&(o--,r+=1e9)),[o,r]}const y=500;function w(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const _=w(),x=new Map;function $(e){x.delete(e)}function A(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function S(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?_.current:void 0,r=_.next();return{scopeId:r,prevScopeId:o,prefix:`${A(r)} ${e}`}}Error;function P(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;var C=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(C||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const E="utm_source=gitlens-extension&utm_medium=in-app-links",T=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${E}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${E}`,graph:`https://gitkraken.com/solutions/commit-graph?${E}`,launchpad:`https://gitkraken.com/solutions/launchpad?${E}`,platform:`https://gitkraken.com/devex?${E}`,pricing:`https://gitkraken.com/gitlens/pricing?${E}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${E}`,security:`https://help.gitkraken.com/gitlens/security?${E}`,workspaces:`https://gitkraken.com/solutions/workspaces?${E}`,cli:`https://gitkraken.com/cli?${E}`,browserExtension:`https://gitkraken.com/browser-extension?${E}`,desktop:`https://gitkraken.com/git-client?${E}`,releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:`https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?${E}`}),{fromCharCode:O}=String;new TextEncoder;function D(e){const[t,o]=v(e);return 1e3*t+Math.floor(o/1e6)}const z=Symbol("logInstanceNameFn");function B(e){return function(e,t=!1){let o,r,n,s,a,l=0,w=!1,S=!1,C=!0;null!=e&&({args:o,if:r,enter:n,exit:s,prefix:a,logThreshold:l=0,scoped:w=!0,singleLine:S=!1,timed:C=!0}=e);l>0&&(S=!0,C=!0);C&&(w=!0);const E=N.isDebugging,T=t?N.debug:N.log,O=E?"debug":"info";return(e,t,B)=>{let F,U;if("function"==typeof B.value?(F=B.value,U="value"):"function"==typeof B.get&&(F=B.get,U="get"),null==F||null==U)throw new Error("Not supported");const j=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(g,"")||t,t=t.slice(0,t.indexOf(h));let o=t.indexOf(u),r=t.indexOf(p);o=o>=0?o+1:0,r=r>0?r:t.indexOf(d),t=t.slice(o,r),t=`(${t})`;const n=f.exec(t);return null!=n?n[1].split(c).map((e=>e.trim().replace(m,""))):[]}(F):[];B[U]=function(...e){if(!E&&!N.enabled(O)||null!=r&&!r.apply(this,e))return F.apply(this,e);const c=_.current,d=_.next(),h=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const r=o.indexOf("_");o=-1===r?o:o.substr(r+1),null!=t?.[z]&&(o=t[z](e,o));return o}(this):void 0;let u,p=h?w?`${A(d,c)} ${h}.${t}`:`${h}.${t}`:t;null!=a&&(p=a({id:d,instance:this,instanceName:h??"",name:t,prefix:p},...e)),w&&(u=function(e,t){return t={prevScopeId:_.current,...t},x.set(e,t),t}(d,{scopeId:d,prevScopeId:c,prefix:p}));const f=null!=n?n(...e):"";let g;if(!1===o||0===e.length)g="",S||T.call(N,`${p}${f}`);else{let t;g="";let r,n,s,a=-1;for(s of e){if(r=j[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(g.length>0&&(g+=", "),"string"==typeof t){g+=t;continue}n=String(t(s))}else g.length>0&&(g+=", "),n=N.toLoggable(s);g+=r?`${r}=${n}`:n}S||T.call(N,g?`${p}${f}(${g})`:`${p}${f}`)}if(S||C||null!=s){const t=C?v():void 0,o=e=>{const o=void 0!==t?` [${D(t)}ms]`:"";S?N.error(e,g?`${p}${f}(${g})`:`${p}${f}`,u?.exitDetails?`failed${u.exitDetails}${o}`:`failed${o}`):N.error(e,p,u?.exitDetails?`failed${u.exitDetails}${o}`:`failed${o}`),w&&$(d)};let r;try{r=F.apply(this,e)}catch(e){throw o(e),e}const n=e=>{let o,r,n,a;if(null!=t?(o=D(t),o>y?(r=N.warn,n=` [*${o}ms] (slow)`):(r=T,n=` [${o}ms]`)):(n="",r=T),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${N.toLoggable(e)}`);else u?.exitFailed?(a=u.exitFailed,r=N.error):a="completed";S?(0===l||o>l)&&r.call(N,g?`${p}${f}(${g}) ${a}${u?.exitDetails||""}${n}`:`${p}${f} ${a}${u?.exitDetails||""}${n}`):r.call(N,g?`${p}(${g}) ${a}${u?.exitDetails||""}${n}`:`${p} ${a}${u?.exitDetails||""}${n}`),w&&$(d)};return null!=r&&P(r)?r.then(n,o):n(r),r}return F.apply(this,e)}}}(e,!0)}const F=new Set(["accessToken","password","token"]),U=function(e,t){return F.has(e)?`<${t}>`:t},N=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=j(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=j(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let r;if(r=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==r){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(r=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(t??=this.provider.sanitize??U,Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function j(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const q={enabled:e=>N.enabled(e)||N.isDebugging,log:(e,t,o,...r)=>{switch(e){case"error":N.error("",t,o,...r);break;case"warn":N.warn(t,o,...r);break;case"info":N.log(t,o,...r);break;default:N.debug(t,o,...r)}}};class LoggerContext{constructor(e){this.scope=S(e,void 0),N.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off")}log(e,...t){"string"==typeof e?N.log(this.scope,e,...t):N.log(e,t.shift(),...t)}}var G;(G||(G={})).on=function(e,t,o,r){let n=!1;if("string"==typeof e){const s=function(t){const r=t?.target?.closest(e);null!=r&&o(t,r)};return document.addEventListener(t,s,r??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,s,r??!0))}}}const s=function(e){o(e,this)};return e.addEventListener(t,s,r??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,s,r??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let r;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:S(e??"",!1),r="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??q,this._time=v(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=v(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=v(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,r]=v(this._time),n=1e3*o+Math.floor(r/1e6),s=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${n}ms]${e?.suffix??""}`)}}const W=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const r=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=_Emitter._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};W._noop=function(){};let K=W;const Y={done:!0,value:void 0},Z=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};Z.Undefined=new Z(void 0);let Q=Z;class LinkedList{constructor(){this._first=Q.Undefined,this._last=Q.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Q.Undefined}clear(){this._first=Q.Undefined,this._last=Q.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new Q(e);if(this._first===Q.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(o))}}shift(){if(this._first===Q.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Q.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Q.Undefined&&e.next!==Q.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Q.Undefined&&e.next===Q.Undefined?(this._first=Q.Undefined,this._last=Q.Undefined):e.next===Q.Undefined?(this._last=this._last.prev,this._last.next=Q.Undefined):e.prev===Q.Undefined&&(this._first=this._first.next,this._first.prev=Q.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Q.Undefined?Y:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Q.Undefined;t=t.next)e.push(t.element);return e}}var J=Object.defineProperty,X=Object.getOwnPropertyDescriptor,ee=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?X(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&J(t,o,s),s};let te;function oe(){return te??=acquireVsCodeApi()}const ie=w();function re(){return`webview:${ie.next()}`}let ne=class{constructor(e){this.appName=e,this._onReceiveMessage=new K,this._pendingHandlers=new Map,this._api=oe(),this._disposable=G.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=x.get(_.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const r=function(e,t,...o){return(t?.provider??q).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(S(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),r?.stop()}if(null==o.completionId)this._onReceiveMessage.fire(o);else{const e=ae(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}sendCommand(e,t){const o=re();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=re(),r=new Promise(((t,r)=>{const n=ae(e.response.method,o);let s;function a(){clearTimeout(s),s=void 0,this._pendingHandlers.delete(n)}s=setTimeout((()=>{a.call(this),r(new Error(`Timed out waiting for completion of ${n}`))}),6e4),this._pendingHandlers.set(n,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),r}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var se;function ae(e,t){return`${e}|${t}`}ee([B({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],ne.prototype,"onMessageReceived",1),ee([B({args:{0:e=>e.method,1:!1}})],ne.prototype,"sendCommand",1),ee([B({args:{0:e=>e.method,1:!1,2:!1}})],ne.prototype,"sendRequest",1),ee([B({args:{0:e=>`${e.id}, method=${e.method}`}})],ne.prototype,"postMessage",1),ne=ee([(se=(e,t)=>`${e.appName}(${t})`,e=>{e[z]=se})],ne);function le(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=le(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=le(Math.max(Math.min(1,t),0),3),this.l=le(Math.max(Math.min(1,o),0),3),this.a=le(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,r=e.b/255,n=e.a,s=Math.max(t,o,r),a=Math.min(t,o,r);let l=0,c=0;const d=(a+s)/2,h=s-a;if(h>0){switch(c=Math.min(d<=.5?h/(2*d):h/(2-2*d),1),s){case t:l=(o-r)/h+(o<r?6:0);break;case o:l=(r-t)/h+2;break;case r:l=(t-o)/h+4}l*=60,l=Math.round(l)}return new HSLA(l,c,d,n)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:r,a:n}=e;let s,a,l;if(0===o)s=a=l=r;else{const e=r<.5?r*(1+o):r+o-r*o,n=2*r-e;s=HSLA._hue2rgb(n,e,t+1/3),a=HSLA._hue2rgb(n,e,t),l=HSLA._hue2rgb(n,e,t-1/3)}return new RGBA(Math.round(255*s),Math.round(255*a),Math.round(255*l),n)}}class HSVA{constructor(e,t,o,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=le(Math.max(Math.min(1,t),0),3),this.v=le(Math.max(Math.min(1,o),0),3),this.a=le(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,r=e.b/255,n=Math.max(t,o,r),s=n-Math.min(t,o,r),a=0===n?0:s/n;let l;return l=0===s?0:n===t?((o-r)/s%6+6)%6:n===o?(r-t)/s+2:(t-o)/s+4,new HSVA(Math.round(60*l),a,n,e.a)}static toRGBA(e){const{h:t,s:o,v:r,a:n}=e,s=r*o,a=s*(1-Math.abs(t/60%2-1)),l=r-s;let[c,d,h]=[0,0,0];return t<60?(c=s,d=a):t<120?(c=a,d=s):t<180?(d=s,h=a):t<240?(d=a,h=s):t<300?(c=a,h=s):t<=360&&(c=s,h=a),c=Math.round(255*(c+l)),d=Math.round(255*(d+l)),h=Math.round(255*(h+l)),new RGBA(c,d,h,n)}}function ce(e,t){return t.getPropertyValue(e).trim()}const de=class _Color{static from(e){return e instanceof _Color?e:be(e)||_Color.red}static fromCssVariable(e,t){return be(ce(e,t))||_Color.red}static fromHex(e){return me(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return le(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new he(new RGBA(0,0,0,e.rgba.a));if(1===t)return new he(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let r=20;const n=(e,o)=>{const s=e.mix(o,.5),a=s.getRelativeLuminance();return Math.abs(t-a)<1e-7||!r--?s:a>t?n(e,s):n(s,o)},s=(o>t?n(he.black,e):n(e,he.white)).rgba;return new he(new RGBA(s.r,s.g,s.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:r,a:n}=this.rgba;return new _Color(new RGBA(t,o,r,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,r=t.a,n=o+r*(1-o);if(n<1e-6)return _Color.transparent;const s=this.rgba.r*o/n+t.r*r*(1-o)/n,a=this.rgba.g*o/n+t.g*r*(1-o)/n,l=this.rgba.b*o/n+t.b*r*(1-o)/n;return new _Color(new RGBA(s,a,l,n))}mix(e,t){return function(e,t,o){const r=e.rgba,n=t.rgba;return new he(new RGBA(r.r+o*(n.r-r.r),r.g+o*(n.g-r.g),r.b+o*(n.b-r.b),r.a+o*(n.a-r.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:r,a:n}=this.rgba;return new _Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-o),e.rgba.b-n*(e.rgba.b-r),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return fe(e);return ue(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const r=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(n-r)/n,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const r=e.getRelativeLuminance();return o=o*(r-t.getRelativeLuminance())/r,e.darken(o)}};de.white=new de(new RGBA(255,255,255,1)),de.black=new de(new RGBA(0,0,0,1)),de.red=new de(new RGBA(255,0,0,1)),de.blue=new de(new RGBA(0,0,255,1)),de.green=new de(new RGBA(0,255,0,1)),de.cyan=new de(new RGBA(0,255,255,1)),de.lightgrey=new de(new RGBA(211,211,211,1)),de.transparent=new de(new RGBA(0,0,0,0));let he=de;function ue(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function pe(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function fe(e){return`#${pe(e.rgba.r)}${pe(e.rgba.g)}${pe(e.rgba.b)}`}const ge=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function be(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===C.Hash)return me(e);const t=ge.exec(e);if(null==t)return null;const o=t[1];let r;switch(o){case"rgb":case"hsl":r=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":r=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new he(new RGBA(r[0],r[1],r[2],r[3]));case"hsl":case"hsla":return new he(new HSLA(r[0],r[1],r[2],r[3]))}return he.red}function me(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==C.Hash)return null;switch(t){case 7:{const t=16*ve(e.charCodeAt(1))+ve(e.charCodeAt(2)),o=16*ve(e.charCodeAt(3))+ve(e.charCodeAt(4)),r=16*ve(e.charCodeAt(5))+ve(e.charCodeAt(6));return new he(new RGBA(t,o,r,1))}case 9:{const t=16*ve(e.charCodeAt(1))+ve(e.charCodeAt(2)),o=16*ve(e.charCodeAt(3))+ve(e.charCodeAt(4)),r=16*ve(e.charCodeAt(5))+ve(e.charCodeAt(6)),n=16*ve(e.charCodeAt(7))+ve(e.charCodeAt(8));return new he(new RGBA(t,o,r,n/255))}case 4:{const t=ve(e.charCodeAt(1)),o=ve(e.charCodeAt(2)),r=ve(e.charCodeAt(3));return new he(new RGBA(16*t+t,16*o+o,16*r+r))}case 5:{const t=ve(e.charCodeAt(1)),o=ve(e.charCodeAt(2)),r=ve(e.charCodeAt(3)),n=ve(e.charCodeAt(4));return new he(new RGBA(16*t+t,16*o+o,16*r+r,(16*n+n)/255))}default:return null}}function ve(e){switch(e){case C.Digit0:return 0;case C.Digit1:return 1;case C.Digit2:return 2;case C.Digit3:return 3;case C.Digit4:return 4;case C.Digit5:return 5;case C.Digit6:return 6;case C.Digit7:return 7;case C.Digit8:return 8;case C.Digit9:return 9;case C.a:case C.A:return 10;case C.b:case C.B:return 11;case C.c:case C.C:return 12;case C.d:case C.D:return 13;case C.e:case C.E:return 14;case C.f:case C.F:return 15}return 0}const ye=new K,we=ye.event;function _e(e){const t=document.documentElement,o=window.getComputedStyle(t),r=document.body.classList,n=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),s=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),a=ce("--vscode-editor-background",o);let l=ce("--vscode-editor-foreground",o);return l||(l=ce("--vscode-foreground",o)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:n,isHighContrastTheme:s,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],r=_e();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(r),t.push(we(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=oe(),this._hostIpc=new ne(this.appName),t.push(this._hostIpc),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{ye.fire(_e(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===s.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(o,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(G.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0}))),this.log("opened")}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=l((e=>{this.sendCommand(r,e)}),150);this.bindDisposables.push(G.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),G.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}const xe=globalThis,$e=xe.ShadowRoot&&(void 0===xe.ShadyCSS||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ke=Symbol(),Ae=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($e&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Ae.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ae.set(t,e))}return e}toString(){return this.cssText}}const Se=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,ke),Pe=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1]),e[0]);return new css_tag_n(o,e,ke)},Ce=$e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Se(t)})(e):e,{is:Ee,defineProperty:Re,getOwnPropertyDescriptor:Te,getOwnPropertyNames:Le,getOwnPropertySymbols:Oe,getPrototypeOf:De}=Object,ze=globalThis,Me=ze.trustedTypes,Be=Me?Me.emptyScript:"",Fe=ze.reactiveElementPolyfillSupport,Ue=(e,t)=>e,Ie={toAttribute(e,t){switch(t){case Boolean:e=e?Be:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},Ne=(e,t)=>!Ee(e,t),He={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:Ne};Symbol.metadata??=Symbol("metadata"),ze.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=He){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&Re(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:n}=Te(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){const s=r?.call(this);n.call(this,t),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??He}static _$Ei(){if(this.hasOwnProperty(Ue("elementProperties")))return;const e=De(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ue("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ue("properties"))){const e=this.properties,t=[...Le(e),...Oe(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Ce(e))}else void 0!==e&&t.push(Ce(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if($e)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),r=xe.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:Ie).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=o.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Ie;this._$Em=r,this[r]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Ne)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[Ue("elementProperties")]=new Map,b[Ue("finalized")]=new Map,Fe?.({ReactiveElement:b}),(ze.reactiveElementVersions??=[]).push("2.0.4");const je=globalThis,qe=je.trustedTypes,Ge=qe?qe.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ve="$lit$",We=`lit$${Math.random().toFixed(9).slice(2)}$`,Ke="?"+We,Ye=`<${Ke}>`,Ze=document,Qe=()=>Ze.createComment(""),Je=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Xe=Array.isArray,et=e=>Xe(e)||"function"==typeof e?.[Symbol.iterator],tt="[ \t\n\f\r]",ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,rt=/>/g,nt=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,at=/"/g,lt=/^(?:script|style|textarea|title)$/i,ct=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),dt=ct(1),ht=(ct(2),Symbol.for("lit-noChange")),ut=Symbol.for("lit-nothing"),pt=new WeakMap,ft=Ze.createTreeWalker(Ze,129);function gt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Ge?Ge.createHTML(t):t}const bt=(e,t)=>{const o=e.length-1,r=[];let n,s=2===t?"<svg>":"",a=ot;for(let t=0;t<o;t++){const o=e[t];let l,c,d=-1,h=0;for(;h<o.length&&(a.lastIndex=h,c=a.exec(o),null!==c);)h=a.lastIndex,a===ot?"!--"===c[1]?a=it:void 0!==c[1]?a=rt:void 0!==c[2]?(lt.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=nt):void 0!==c[3]&&(a=nt):a===nt?">"===c[0]?(a=n??ot,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?nt:'"'===c[3]?at:st):a===at||a===st?a=nt:a===it||a===rt?a=ot:(a=nt,n=void 0);const u=a===nt&&e[t+1].startsWith("/>")?" ":"";s+=a===ot?o+Ye:d>=0?(r.push(l),o.slice(0,d)+Ve+o.slice(d)+We+u):o+We+(-2===d?t:u)}return[gt(e,s+(e[o]||"<?>")+(2===t?"</svg>":"")),r]};class V{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,s=0;const a=e.length-1,l=this.parts,[c,d]=bt(e,t);if(this.el=V.createElement(c,o),ft.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=ft.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(Ve)){const t=d[s++],o=r.getAttribute(e).split(We),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?k:"?"===a[1]?H:"@"===a[1]?I:R}),r.removeAttribute(e)}else e.startsWith(We)&&(l.push({type:6,index:n}),r.removeAttribute(e));if(lt.test(r.tagName)){const e=r.textContent.split(We),t=e.length-1;if(t>0){r.textContent=qe?qe.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],Qe()),ft.nextNode(),l.push({type:2,index:++n});r.append(e[t],Qe())}}}else if(8===r.nodeType)if(r.data===Ke)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(We,e+1));)l.push({type:7,index:n}),e+=We.length-1}n++}}static createElement(e,t){const o=Ze.createElement("template");return o.innerHTML=e,o}}function mt(e,t,o=e,r){if(t===ht)return t;let n=void 0!==r?o._$Co?.[r]:o._$Cl;const s=Je(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(e),n._$AT(e,o,r)),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(t=mt(e,n._$AS(e,t.values),n,r)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??Ze).importNode(t,!0);ft.currentNode=r;let n=ft.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new M(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new L(n,this,e)),this._$AV.push(t),l=o[++a]}s!==l?.index&&(n=ft.nextNode(),s++)}return ft.currentNode=Ze,r}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=ut,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=mt(this,e,t),Je(e)?e===ut||null==e||""===e?(this._$AH!==ut&&this._$AR(),this._$AH=ut):e!==this._$AH&&e!==ht&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):et(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ut&&Je(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ze.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(gt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new lit_html_S(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=pt.get(e.strings);return void 0===t&&pt.set(e.strings,t=new V(e)),t}k(e){Xe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const n of e)r===t.length?t.push(o=new M(this.S(Qe()),this.S(Qe()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,n){this.type=1,this._$AH=ut,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ut}_$AI(e,t=this,o,r){const n=this.strings;let s=!1;if(void 0===n)e=mt(this,e,t,0),s=!Je(e)||e!==this._$AH&&e!==ht,s&&(this._$AH=e);else{const r=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=mt(this,r[o+a],t,a),l===ht&&(l=this._$AH[a]),s||=!Je(l)||l!==this._$AH[a],l===ut?e=ut:e!==ut&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}s&&!r&&this.j(e)}j(e){e===ut?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ut?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ut)}}class I extends R{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){if((e=mt(this,e,t,0)??ut)===ht)return;const o=this._$AH,r=e===ut&&o!==ut||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==ut&&(o===ut||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){mt(this,e)}}const vt=je.litHtmlPolyfillSupport;vt?.(V,M),(je.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const r=o?.renderBefore??t;let n=r._$litPart$;if(void 0===n){const e=o?.renderBefore??null;r._$litPart$=n=new M(t.insertBefore(Qe(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ht}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const yt=globalThis.litElementPolyfillSupport;yt?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const wt=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},_t={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:Ne},xt=(e=_t,t,o)=>{const{kind:r,metadata:n}=o;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(o.name,e),"accessor"===r){const{name:r}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){const{name:r}=o;return function(o){const n=this[r];t.call(this,o),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)};function $t(e){return(t,o)=>"object"==typeof o?xt(e,t,o):((e,t,o)=>{const r=t.hasOwnProperty(o);return t.constructor.createProperty(o,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const kt=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function At(e,t){return(o,r,n)=>{const s=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof r?o:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return kt(o,r,{get(){let o=e.call(this);return void 0===o&&(o=s(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return kt(o,r,{get(){return s(this)}})}}function St(e,t,o){return e?t(e):o?.(e)}var Pt=(e=>(e.Free="free",e.FreePlus="free+",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(Pt||{}),Ct=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",e[e.Paid=6]="Paid",e))(Ct||{});function Et(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function Rt(e,t){return Tt(e.plan.effective.expiresOn,t)}function Tt(e,t){return null!=e?function(e,t,o,r){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=r??Math.floor;switch(o){case"days":return s(n/864e5);case"hours":return s(n/36e5);case"minutes":return s(n/6e4);case"seconds":return s(n/1e3);default:return n}}(Date.now(),new Date(e),t,Math.round):void 0}const Lt=[{key:"launchpad",code:"GLLAUNCHPAD24",states:[Ct.Free,Ct.FreeInPreviewTrial,Ct.FreePreviewTrialExpired,Ct.FreePlusInTrial,Ct.FreePlusTrialExpired,Ct.FreePlusTrialReactivationEligible],expiresOn:new Date("2024-09-27T06:59:00.000Z").getTime(),commandTooltip:"Launchpad Sale: Save 75% or more on GitLens Pro"},{key:"launchpad-extended",code:"GLLAUNCHPAD24",states:[Ct.Free,Ct.FreeInPreviewTrial,Ct.FreePreviewTrialExpired,Ct.FreePlusInTrial,Ct.FreePlusTrialExpired,Ct.FreePlusTrialReactivationEligible],startsOn:new Date("2024-09-27T06:59:00.000Z").getTime(),expiresOn:new Date("2024-10-14T06:59:00.000Z").getTime(),commandTooltip:"Launchpad Sale: Save 75% or more on GitLens Pro"},{key:"pro50",states:[Ct.Free,Ct.FreeInPreviewTrial,Ct.FreePreviewTrialExpired,Ct.FreePlusInTrial,Ct.FreePlusTrialExpired,Ct.FreePlusTrialReactivationEligible],commandTooltip:"Limited-Time Sale: Save 33% or more on your 1st seat of Pro. See your special price"}];function Ot(e,t){const o=Date.now();return(null==e.states||e.states.includes(t))&&(null==e.expiresOn||e.expiresOn>o)&&(null==e.startsOn||e.startsOn<o)}Pe`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const Dt=Pe`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,zt=Pe`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,Mt=Pe`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Pe`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`}
	}
	a:hover {
		text-decoration: underline;
	}
`;Pe`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`;var Bt=Object.defineProperty,Ft=Object.defineProperties,Ut=Object.getOwnPropertyDescriptor,It=Object.getOwnPropertyDescriptors,Nt=Object.getOwnPropertySymbols,Ht=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,qt=(e,t,o)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Gt=(e,t)=>{for(var o in t||(t={}))Ht.call(t,o)&&qt(e,o,t[o]);if(Nt)for(var o of Nt(t))jt.call(t,o)&&qt(e,o,t[o]);return e},Vt=(e,t)=>Ft(e,It(t)),Wt=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?Ut(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Bt(t,o,s),s},Kt=new Map,Yt=new WeakMap;function Zt(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function Qt(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Jt(e,t){Kt.set(e,Zt(t))}function Xt(e,t,o){const r=Yt.get(e);if(null==r?void 0:r[t])return Qt(r[t],o.dir);const n=Kt.get(t);return n?Qt(n,o.dir):{keyframes:[],options:{duration:0}}}var eo=Pe`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,to=Pe`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,oo=Pe`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,io=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,Gt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const r=customElements.get(e);if(!r)return void customElements.define(e,class extends t{},o);let n=" (unknown version)",s=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in r&&r.version&&(s=" v"+r.version)}};io.version="2.15.1",io.dependencies={},Wt([$t()],io.prototype,"dir",2),Wt([$t()],io.prototype,"lang",2);const ro=Math.min,no=Math.max,so=Math.round,ao=Math.floor,lo=e=>({x:e,y:e}),co={left:"right",right:"left",bottom:"top",top:"bottom"},ho={start:"end",end:"start"};function uo(e,t,o){return no(e,ro(t,o))}function po(e,t){return"function"==typeof e?e(t):e}function fo(e){return e.split("-")[0]}function go(e){return e.split("-")[1]}function bo(e){return"x"===e?"y":"x"}function mo(e){return"y"===e?"height":"width"}function vo(e){return["top","bottom"].includes(fo(e))?"y":"x"}function yo(e){return bo(vo(e))}function wo(e){return e.replace(/start|end/g,(e=>ho[e]))}function _o(e){return e.replace(/left|right|bottom|top/g,(e=>co[e]))}function xo(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function $o(e){const{x:t,y:o,width:r,height:n}=e;return{width:r,height:n,top:o,left:t,right:t+r,bottom:o+n,x:t,y:o}}function ko(e,t,o){let{reference:r,floating:n}=e;const s=vo(t),a=yo(t),l=mo(a),c=fo(t),d="y"===s,h=r.x+r.width/2-n.width/2,u=r.y+r.height/2-n.height/2,p=r[l]/2-n[l]/2;let f;switch(c){case"top":f={x:h,y:r.y-n.height};break;case"bottom":f={x:h,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:u};break;case"left":f={x:r.x-n.width,y:u};break;default:f={x:r.x,y:r.y}}switch(go(t)){case"start":f[a]-=p*(o&&d?-1:1);break;case"end":f[a]+=p*(o&&d?-1:1)}return f}async function Ao(e,t){var o;void 0===t&&(t={});const{x:r,y:n,platform:s,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:p=!1,padding:f=0}=po(t,e),g=xo(f),m=l[p?"floating"===u?"reference":"floating":u],v=$o(await s.getClippingRect({element:null==(o=await(null==s.isElement?void 0:s.isElement(m)))||o?m:m.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),y="floating"===u?{x:r,y:n,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),_=await(null==s.isElement?void 0:s.isElement(w))&&await(null==s.getScale?void 0:s.getScale(w))||{x:1,y:1},x=$o(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-x.top+g.top)/_.y,bottom:(x.bottom-v.bottom+g.bottom)/_.y,left:(v.left-x.left+g.left)/_.x,right:(x.right-v.right+g.right)/_.x}}function So(e){return Eo(e)?(e.nodeName||"").toLowerCase():"#document"}function Po(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Co(e){var t;return null==(t=(Eo(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Eo(e){return e instanceof Node||e instanceof Po(e).Node}function Ro(e){return e instanceof Element||e instanceof Po(e).Element}function To(e){return e instanceof HTMLElement||e instanceof Po(e).HTMLElement}function Lo(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Po(e).ShadowRoot)}function Oo(e){const{overflow:t,overflowX:o,overflowY:r,display:n}=Uo(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(n)}function Do(e){return["table","td","th"].includes(So(e))}function zo(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Mo(e){const t=Bo(),o=Ro(e)?Uo(e):e;return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Bo(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Fo(e){return["html","body","#document"].includes(So(e))}function Uo(e){return Po(e).getComputedStyle(e)}function Io(e){return Ro(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function No(e){if("html"===So(e))return e;const t=e.assignedSlot||e.parentNode||Lo(e)&&e.host||Co(e);return Lo(t)?t.host:t}function Ho(e){const t=No(e);return Fo(t)?e.ownerDocument?e.ownerDocument.body:e.body:To(t)&&Oo(t)?t:Ho(t)}function jo(e,t,o){var r;void 0===t&&(t=[]),void 0===o&&(o=!0);const n=Ho(e),s=n===(null==(r=e.ownerDocument)?void 0:r.body),a=Po(n);return s?t.concat(a,a.visualViewport||[],Oo(n)?n:[],a.frameElement&&o?jo(a.frameElement):[]):t.concat(n,jo(n,[],o))}function qo(e){const t=Uo(e);let o=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const n=To(e),s=n?e.offsetWidth:o,a=n?e.offsetHeight:r,l=so(o)!==s||so(r)!==a;return l&&(o=s,r=a),{width:o,height:r,$:l}}function Go(e){return Ro(e)?e:e.contextElement}function Vo(e){const t=Go(e);if(!To(t))return lo(1);const o=t.getBoundingClientRect(),{width:r,height:n,$:s}=qo(t);let a=(s?so(o.width):o.width)/r,l=(s?so(o.height):o.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Wo=lo(0);function Ko(e){const t=Po(e);return Bo()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Wo}function Yo(e,t,o,r){void 0===t&&(t=!1),void 0===o&&(o=!1);const n=e.getBoundingClientRect(),s=Go(e);let a=lo(1);t&&(r?Ro(r)&&(a=Vo(r)):a=Vo(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Po(e))&&t}(s,o,r)?Ko(s):lo(0);let c=(n.left+l.x)/a.x,d=(n.top+l.y)/a.y,h=n.width/a.x,u=n.height/a.y;if(s){const e=Po(s),t=r&&Ro(r)?Po(r):r;let o=e,n=o.frameElement;for(;n&&r&&t!==o;){const e=Vo(n),t=n.getBoundingClientRect(),r=Uo(n),s=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,d*=e.y,h*=e.x,u*=e.y,c+=s,d+=a,o=Po(n),n=o.frameElement}}return $o({width:h,height:u,x:c,y:d})}function Zo(e){return Yo(Co(e)).left+Io(e).scrollLeft}function Qo(e,t,o){let r;if("viewport"===t)r=function(e,t){const o=Po(e),r=Co(e),n=o.visualViewport;let s=r.clientWidth,a=r.clientHeight,l=0,c=0;if(n){s=n.width,a=n.height;const e=Bo();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:s,height:a,x:l,y:c}}(e,o);else if("document"===t)r=function(e){const t=Co(e),o=Io(e),r=e.ownerDocument.body,n=no(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=no(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-o.scrollLeft+Zo(e);const l=-o.scrollTop;return"rtl"===Uo(r).direction&&(a+=no(t.clientWidth,r.clientWidth)-n),{width:n,height:s,x:a,y:l}}(Co(e));else if(Ro(t))r=function(e,t){const o=Yo(e,!0,"fixed"===t),r=o.top+e.clientTop,n=o.left+e.clientLeft,s=To(e)?Vo(e):lo(1);return{width:e.clientWidth*s.x,height:e.clientHeight*s.y,x:n*s.x,y:r*s.y}}(t,o);else{const o=Ko(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return $o(r)}function Jo(e,t){const o=No(e);return!(o===t||!Ro(o)||Fo(o))&&("fixed"===Uo(o).position||Jo(o,t))}function Xo(e,t,o){const r=To(t),n=Co(t),s="fixed"===o,a=Yo(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=lo(0);if(r||!r&&!s)if(("body"!==So(t)||Oo(n))&&(l=Io(t)),r){const e=Yo(t,!0,s,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=Zo(n));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function ei(e){return"static"===Uo(e).position}function ti(e,t){return To(e)&&"fixed"!==Uo(e).position?t?t(e):e.offsetParent:null}function oi(e,t){const o=Po(e);if(zo(e))return o;if(!To(e)){let t=No(e);for(;t&&!Fo(t);){if(Ro(t)&&!ei(t))return t;t=No(t)}return o}let r=ti(e,t);for(;r&&Do(r)&&ei(r);)r=ti(r,t);return r&&Fo(r)&&ei(r)&&!Mo(r)?o:r||function(e){let t=No(e);for(;To(t)&&!Fo(t);){if(Mo(t))return t;if(zo(t))return null;t=No(t)}return null}(e)||o}const ii={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:r,strategy:n}=e;const s="fixed"===n,a=Co(r),l=!!t&&zo(t.floating);if(r===a||l&&s)return o;let c={scrollLeft:0,scrollTop:0},d=lo(1);const h=lo(0),u=To(r);if((u||!u&&!s)&&(("body"!==So(r)||Oo(a))&&(c=Io(r)),To(r))){const e=Yo(r);d=Vo(r),h.x=e.x+r.clientLeft,h.y=e.y+r.clientTop}return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-c.scrollLeft*d.x+h.x,y:o.y*d.y-c.scrollTop*d.y+h.y}},getDocumentElement:Co,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:n}=e;const s=[..."clippingAncestors"===o?zo(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let r=jo(e,[],!1).filter((e=>Ro(e)&&"body"!==So(e))),n=null;const s="fixed"===Uo(e).position;let a=s?No(e):e;for(;Ro(a)&&!Fo(a);){const t=Uo(a),o=Mo(a);o||"fixed"!==t.position||(n=null),(s?!o&&!n:!o&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||Oo(a)&&!o&&Jo(e,a))?r=r.filter((e=>e!==a)):n=t,a=No(a)}return t.set(e,r),r}(t,this._c):[].concat(o),r],a=s[0],l=s.reduce(((e,o)=>{const r=Qo(t,o,n);return e.top=no(r.top,e.top),e.right=ro(r.right,e.right),e.bottom=ro(r.bottom,e.bottom),e.left=no(r.left,e.left),e}),Qo(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:oi,getElementRects:async function(e){const t=this.getOffsetParent||oi,o=this.getDimensions,r=await o(e.floating);return{reference:Xo(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=qo(e);return{width:t,height:o}},getScale:Vo,isElement:Ro,isRTL:function(e){return"rtl"===Uo(e).direction}};function ri(e,t,o,r){void 0===r&&(r={});const{ancestorScroll:n=!0,ancestorResize:s=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=r,d=Go(e),h=n||s?[...d?jo(d):[],...jo(t)]:[];h.forEach((e=>{n&&e.addEventListener("scroll",o,{passive:!0}),s&&e.addEventListener("resize",o)}));const u=d&&l?function(e,t){let o,r=null;const n=Co(e);function s(){var e;clearTimeout(o),null==(e=r)||e.disconnect(),r=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),s();const{left:d,top:h,width:u,height:p}=e.getBoundingClientRect();if(l||t(),!u||!p)return;const f={rootMargin:-ao(h)+"px "+-ao(n.clientWidth-(d+u))+"px "+-ao(n.clientHeight-(h+p))+"px "+-ao(d)+"px",threshold:no(0,ro(1,c))||1};let g=!0;function m(e){const t=e[0].intersectionRatio;if(t!==c){if(!g)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}g=!1}try{r=new IntersectionObserver(m,{...f,root:n.ownerDocument})}catch(e){r=new IntersectionObserver(m,f)}r.observe(e)}(!0),s}(d,o):null;let p,f=-1,g=null;a&&(g=new ResizeObserver((e=>{let[r]=e;r&&r.target===d&&g&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var e;null==(e=g)||e.observe(t)}))),o()})),d&&!c&&g.observe(d),g.observe(t));let m=c?Yo(e):null;return c&&function t(){const r=Yo(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||o();m=r,p=requestAnimationFrame(t)}(),o(),()=>{var e;h.forEach((e=>{n&&e.removeEventListener("scroll",o),s&&e.removeEventListener("resize",o)})),null==u||u(),null==(e=g)||e.disconnect(),g=null,c&&cancelAnimationFrame(p)}}const ni=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,r;const{x:n,y:s,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:o,platform:r,elements:n}=e,s=await(null==r.isRTL?void 0:r.isRTL(n.floating)),a=fo(o),l=go(o),c="y"===vo(o),d=["left","top"].includes(a)?-1:1,h=s&&c?-1:1,u=po(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:g}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&"number"==typeof g&&(f="end"===l?-1*g:g),c?{x:f*h,y:p*d}:{x:p*d,y:f*h}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:n+c.x,y:s+c.y,data:{...c,placement:a}}}}},si=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:r,placement:n}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=po(e,t),d={x:o,y:r},h=await Ao(t,c),u=vo(fo(n)),p=bo(u);let f=d[p],g=d[u];if(s){const e="y"===p?"bottom":"right";f=uo(f+h["y"===p?"top":"left"],f,f-h[e])}if(a){const e="y"===u?"bottom":"right";g=uo(g+h["y"===u?"top":"left"],g,g-h[e])}const m=l.fn({...t,[p]:f,[u]:g});return{...m,data:{x:m.x-o,y:m.y-r}}}}},ai=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,r;const{placement:n,middlewareData:s,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...v}=po(e,t);if(null!=(o=s.arrow)&&o.alignmentOffset)return{};const y=fo(n),w=vo(l),_=fo(l)===l,x=await(null==c.isRTL?void 0:c.isRTL(d.floating)),$=p||(_||!m?[_o(l)]:function(e){const t=_o(e);return[wo(e),t,wo(t)]}(l)),A="none"!==g;!p&&A&&$.push(...function(e,t,o,r){const n=go(e);let s=function(e,t,o){const r=["left","right"],n=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?n:r:t?r:n;case"left":case"right":return t?s:a;default:return[]}}(fo(e),"start"===o,r);return n&&(s=s.map((e=>e+"-"+n)),t&&(s=s.concat(s.map(wo)))),s}(l,m,g,x));const S=[l,...$],P=await Ao(t,v),C=[];let E=(null==(r=s.flip)?void 0:r.overflows)||[];if(h&&C.push(P[y]),u){const e=function(e,t,o){void 0===o&&(o=!1);const r=go(e),n=yo(e),s=mo(n);let a="x"===n?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=_o(a)),[a,_o(a)]}(n,a,x);C.push(P[e[0]],P[e[1]])}if(E=[...E,{placement:n,overflows:C}],!C.every((e=>e<=0))){var T,O;const e=((null==(T=s.flip)?void 0:T.index)||0)+1,t=S[e];if(t)return{data:{index:e,overflows:E},reset:{placement:t}};let o=null==(O=E.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:O.placement;if(!o)switch(f){case"bestFit":{var D;const e=null==(D=E.filter((e=>{if(A){const t=vo(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:D[0];e&&(o=e);break}case"initialPlacement":o=l}if(n!==o)return{reset:{placement:o}}}return{}}}},li=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:r,platform:n,elements:s}=t,{apply:a=()=>{},...l}=po(e,t),c=await Ao(t,l),d=fo(o),h=go(o),u="y"===vo(o),{width:p,height:f}=r.floating;let g,m;"top"===d||"bottom"===d?(g=d,m=h===(await(null==n.isRTL?void 0:n.isRTL(s.floating))?"start":"end")?"left":"right"):(m=d,g="end"===h?"top":"bottom");const v=f-c.top-c.bottom,y=p-c.left-c.right,w=ro(f-c[g],v),_=ro(p-c[m],y),x=!t.middlewareData.shift;let $=w,A=_;if(u?A=h||x?ro(_,y):y:$=h||x?ro(w,v):v,x&&!h){const e=no(c.left,0),t=no(c.right,0),o=no(c.top,0),r=no(c.bottom,0);u?A=p-2*(0!==e||0!==t?e+t:no(c.left,c.right)):$=f-2*(0!==o||0!==r?o+r:no(c.top,c.bottom))}await a({...t,availableWidth:A,availableHeight:$});const S=await n.getDimensions(s.floating);return p!==S.width||f!==S.height?{reset:{rects:!0}}:{}}}},ci=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:r,placement:n,rects:s,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=po(e,t)||{};if(null==d)return{};const u=xo(h),p={x:o,y:r},f=yo(n),g=mo(f),m=await a.getDimensions(d),v="y"===f,y=v?"top":"left",w=v?"bottom":"right",_=v?"clientHeight":"clientWidth",x=s.reference[g]+s.reference[f]-p[f]-s.floating[g],$=p[f]-s.reference[f],A=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let S=A?A[_]:0;S&&await(null==a.isElement?void 0:a.isElement(A))||(S=l.floating[_]||s.floating[g]);const P=x/2-$/2,C=S/2-m[g]/2-1,E=ro(u[y],C),T=ro(u[w],C),O=E,D=S-m[g]-T,z=S/2-m[g]/2+P,B=uo(O,z,D),F=!c.arrow&&null!=go(n)&&z!==B&&s.reference[g]/2-(z<O?E:T)-m[g]/2<0,U=F?z<O?z-O:z-D:0;return{[f]:p[f]+U,data:{[f]:B,centerOffset:z-B-U,...F&&{alignmentOffset:U}},reset:F}}}),di=(e,t,o)=>{const r=new Map,n={platform:ii,...o},s={...n.platform,_c:r};return(async(e,t,o)=>{const{placement:r="bottom",strategy:n="absolute",middleware:s=[],platform:a}=o,l=s.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:u}=ko(d,r,c),p=r,f={},g=0;for(let o=0;o<l.length;o++){const{name:s,fn:m}=l[o],{x:v,y,data:w,reset:_}=await m({x:h,y:u,initialPlacement:r,placement:p,strategy:n,middlewareData:f,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=v?v:h,u=null!=y?y:u,f={...f,[s]:{...f[s],...w}},_&&g<=50&&(g++,"object"==typeof _&&(_.placement&&(p=_.placement),_.rects&&(d=!0===_.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):_.rects),({x:h,y:u}=ko(d,p,c))),o=-1)}return{x:h,y:u,placement:p,strategy:n,middlewareData:f}})(e,t,{...n,platform:s})},hi=1;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ui=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==hi||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return ht}});function pi(e){return gi(e)}function fi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function gi(e){for(let t=e;t;t=fi(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=fi(e);t;t=fi(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var bi=class extends io{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,r=0,n=0,s=0,a=0,l=0,c=0,d=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):(o=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):e.left<t.left?(o=e.right,r=e.top,n=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom):(o=t.right,r=t.top,n=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=ri(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[ni({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(li({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(ai({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(si({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(li({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(ci({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>ii.getOffsetParent(e,pi):ii.getOffsetParent;di(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Vt(Gt({},ii),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:r})=>{const n="rtl"===getComputedStyle(this).direction,s={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let r="",a="",l="",c="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=n?o:"",c=n?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=n?"":o,c=n?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",r="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:r,right:a,bottom:l,left:c,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return dt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ui({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ui({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?dt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function mi(e,t){return new Promise((o=>{e.addEventListener(t,(function r(n){n.target===e&&(e.removeEventListener(t,r),o())}))}))}function vi(e,t,o){return new Promise((r=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,Vt(Gt({},o),{duration:wi()?0:o.duration}));n.addEventListener("cancel",r,{once:!0}),n.addEventListener("finish",r,{once:!0})}))}function yi(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function wi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _i(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}bi.styles=[oo,to],Wt([At(".popup")],bi.prototype,"popup",2),Wt([At(".popup__arrow")],bi.prototype,"arrowEl",2),Wt([$t()],bi.prototype,"anchor",2),Wt([$t({type:Boolean,reflect:!0})],bi.prototype,"active",2),Wt([$t({reflect:!0})],bi.prototype,"placement",2),Wt([$t({reflect:!0})],bi.prototype,"strategy",2),Wt([$t({type:Number})],bi.prototype,"distance",2),Wt([$t({type:Number})],bi.prototype,"skidding",2),Wt([$t({type:Boolean})],bi.prototype,"arrow",2),Wt([$t({attribute:"arrow-placement"})],bi.prototype,"arrowPlacement",2),Wt([$t({attribute:"arrow-padding",type:Number})],bi.prototype,"arrowPadding",2),Wt([$t({type:Boolean})],bi.prototype,"flip",2),Wt([$t({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],bi.prototype,"flipFallbackPlacements",2),Wt([$t({attribute:"flip-fallback-strategy"})],bi.prototype,"flipFallbackStrategy",2),Wt([$t({type:Object})],bi.prototype,"flipBoundary",2),Wt([$t({attribute:"flip-padding",type:Number})],bi.prototype,"flipPadding",2),Wt([$t({type:Boolean})],bi.prototype,"shift",2),Wt([$t({type:Object})],bi.prototype,"shiftBoundary",2),Wt([$t({attribute:"shift-padding",type:Number})],bi.prototype,"shiftPadding",2),Wt([$t({attribute:"auto-size"})],bi.prototype,"autoSize",2),Wt([$t()],bi.prototype,"sync",2),Wt([$t({type:Object})],bi.prototype,"autoSizeBoundary",2),Wt([$t({attribute:"auto-size-padding",type:Number})],bi.prototype,"autoSizePadding",2),Wt([$t({attribute:"hover-bridge",type:Boolean})],bi.prototype,"hoverBridge",2);const xi=new Set,$i=new Map;let ki,Ai="ltr",Si="en";const Pi="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Pi){const e=new MutationObserver(Ei);Ai=document.documentElement.dir||"ltr",Si=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ci(...e){e.map((e=>{const t=e.$code.toLowerCase();$i.has(t)?$i.set(t,Object.assign(Object.assign({},$i.get(t)),e)):$i.set(t,e),ki||(ki=e)})),Ei()}function Ei(){Pi&&(Ai=document.documentElement.dir||"ltr",Si=document.documentElement.lang||navigator.language),[...xi.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){xi.add(this.host)}hostDisconnected(){xi.delete(this.host)}dir(){return`${this.host.dir||Ai}`.toLowerCase()}lang(){return`${this.host.lang||Si}`.toLowerCase()}getTranslationData(e){var t,o;const r=new Intl.Locale(e.replace(/_/g,"-")),n=null==r?void 0:r.language.toLowerCase(),s=null!==(o=null===(t=null==r?void 0:r.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:r,language:n,region:s,primary:$i.get(`${n}-${s}`),secondary:$i.get(n)}}exists(e,t){var o;const{primary:r,secondary:n}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(r&&r[e]||n&&n[e]||t.includeFallback&&ki&&ki[e])}term(e,...t){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(r&&r[e])n=r[e];else{if(!ki||!ki[e])return String(e);n=ki[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var Ri={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ci(Ri);var Ti=Ri,Li=class extends LocalizeController{};function Oi(e,t){const o=Gt({waitUntilFirstUpdate:!1},t);return(t,r)=>{const{update:n}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),s=this[n];t!==s&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[r](t,s))}})),n.call(this,e)}}}Ci(Ti);var Di=class extends io{constructor(){super(),this.localize=new Li(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=yi(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=yi(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await _i(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=Xt(this,"tooltip.show",{dir:this.localize.dir()});await vi(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await _i(this.body);const{keyframes:e,options:o}=Xt(this,"tooltip.hide",{dir:this.localize.dir()});await vi(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,mi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mi(this,"sl-after-hide")}render(){return dt`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ui({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Di.styles=[oo,eo],Di.dependencies={"sl-popup":bi},Wt([At("slot:not([name])")],Di.prototype,"defaultSlot",2),Wt([At(".tooltip__body")],Di.prototype,"body",2),Wt([At("sl-popup")],Di.prototype,"popup",2),Wt([$t()],Di.prototype,"content",2),Wt([$t()],Di.prototype,"placement",2),Wt([$t({type:Boolean,reflect:!0})],Di.prototype,"disabled",2),Wt([$t({type:Number})],Di.prototype,"distance",2),Wt([$t({type:Boolean,reflect:!0})],Di.prototype,"open",2),Wt([$t({type:Number})],Di.prototype,"skidding",2),Wt([$t()],Di.prototype,"trigger",2),Wt([$t({type:Boolean})],Di.prototype,"hoist",2),Wt([Oi("open",{waitUntilFirstUpdate:!0})],Di.prototype,"handleOpenChange",1),Wt([Oi(["content","distance","hoist","placement","skidding"])],Di.prototype,"handleOptionsChange",1),Wt([Oi("disabled")],Di.prototype,"handleDisabledChange",1),Jt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Jt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Di.define("sl-tooltip");var zi=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Bi=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?Mi(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&zi(t,o,s),s};Jt("tooltip.show",null),Jt("tooltip.hide",null);let Fi=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return dt`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ut}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};Fi.styles=Pe`
		sl-tooltip {
			--max-width: 320px;
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}
	`,Bi([$t()],Fi.prototype,"content",2),Bi([$t({reflect:!0})],Fi.prototype,"placement",2),Bi([$t({type:Boolean})],Fi.prototype,"disabled",2),Bi([$t({type:Number})],Fi.prototype,"distance",2),Bi([$t({type:Boolean})],Fi.prototype,"hoist",2),Fi=Bi([wt("gl-tooltip")],Fi);var Ui=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,Ni=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?Ii(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Ui(t,o,s),s};let Hi=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?dt`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?dt`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?dt`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:dt`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};Hi.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},Hi.styles=[zt,Pe`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
			}

			.control {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);

				color: inherit;
				text-decoration: none;

				width: max-content;
				height: 100%;
				cursor: pointer;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-block;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${Dt}
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			gl-tooltip {
				height: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],Ni([At(".control")],Hi.prototype,"control",2),Ni([$t({reflect:!0})],Hi.prototype,"appearance",2),Ni([$t({type:Boolean,reflect:!0})],Hi.prototype,"disabled",2),Ni([$t({reflect:!0})],Hi.prototype,"density",2),Ni([$t({type:Boolean,reflect:!0})],Hi.prototype,"full",2),Ni([$t()],Hi.prototype,"href",2),Ni([$t({reflect:!0})],Hi.prototype,"role",1),Ni([$t()],Hi.prototype,"tooltip",2),Hi=Ni([wt("gl-button")],Hi);var ji=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Gi=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?qi(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&ji(t,o,s),s};let Vi=class extends lit_element_s{constructor(){super(...arguments),this.editor=!1}render(){return dt`<div class="group"><slot></slot></div>`}};Vi.styles=[zt,Pe`
			:host {
				display: block;
				max-width: 30rem;
				margin-right: auto;
				margin-left: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			@media (min-width: 640px) {
				:host(:not([editor])) {
					max-width: 100%;
				}
			}

			.group {
				display: inline-flex;
				gap: 0.4rem;
				width: 100%;
				max-width: 30rem;
			}
		`],Gi([$t({type:Boolean})],Vi.prototype,"editor",2),Vi=Gi([wt("button-container")],Vi);var Wi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Yi=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?Ki(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Wi(t,o,s),s};const Zi=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let Qi=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Qi.styles=Pe`
		:host {
			--code-icon-size: 16px;
			--code-icon-v-align: text-bottom;

			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${Se(Object.entries(Zi).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,Yi([$t({reflect:!0})],Qi.prototype,"icon",2),Yi([$t({reflect:!0})],Qi.prototype,"modifier",2),Yi([$t({type:Number})],Qi.prototype,"size",2),Yi([$t({reflect:!0})],Qi.prototype,"flip",2),Yi([$t({reflect:!0})],Qi.prototype,"rotate",2),Qi=Yi([wt("code-icon")],Qi);var Ji=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,er=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?Xi(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&Ji(t,o,s),s};let tr=class extends lit_element_s{constructor(){super(...arguments),this.type="info"}render(){if(!this.promo)return;const e=this.renderPromo(this.promo);return e?"link"===this.type?dt`<a
				class="link"
				href="${this.promo.command??"command:gitlens.plus.upgrade"}"
				title="${this.promo.commandTooltip}"
				>${e}</a
			>`:dt`<p class="promo">${e}</p>`:void 0}renderPromo(e){switch(e.key){case"pro50":return dt`<span class="content${"link"===this.type?ut:" muted"}"
					>Limited-Time Sale: <b>Save 33% or more on your 1st seat of Pro.</b></span
				>`;case"launchpad":case"launchpad-extended":return dt`<span class="content${"link"===this.type?ut:" muted"}"
					>Launchpad Sale: <b>Save 75% or more on GitLens Pro.</b></span
				>`}}};tr.styles=[Pe`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],er([$t({type:Object})],tr.prototype,"promo",2),er([$t({reflect:!0,type:String})],tr.prototype,"type",2),tr=er([wt("gl-promo")],tr);var or=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,rr=(e,t,o,r)=>{for(var n,s=r>1?void 0:r?ir(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r?n(t,o,s):n(s))||s);return r&&s&&or(t,o,s),s};let nr=class extends lit_element_s{constructor(){super(...arguments),this.image="",this.organizationsCount=0}get daysRemaining(){return null==this.subscription?0:Rt(this.subscription,"days")??0}get hasAccount(){return null!=(e=this.state)&&0!==e&&2!==e&&1!==e;var e}get isReactivatedTrial(){return this.state===Ct.FreePlusInTrial&&(this.subscription?.plan.effective.trialReactivationCount??0)>0}get planId(){return this.subscription?.plan.actual.id??Pt.Pro}get planName(){switch(this.state){case Ct.Free:case Ct.FreePreviewTrialExpired:case Ct.FreePlusTrialExpired:case Ct.FreePlusTrialReactivationEligible:return"GitKraken Free";case Ct.FreeInPreviewTrial:case Ct.FreePlusInTrial:return"GitKraken Pro (Trial)";case Ct.VerificationRequired:return`${Et(this.planId)} (Unverified)`;default:return Et(this.planId)}}get state(){return this.subscription?.state}render(){return dt`${this.renderAccountInfo()}${this.renderOrganization()}${this.renderAccountState()}`}renderAccountInfo(){return this.hasAccount?dt`
			<div class="account">
				<div class="account__media">
					${this.image?dt`<img src=${this.image} class="account__image" />`:dt`<code-icon icon="account" size="34"></code-icon>`}
				</div>
				<div class="account__details">
					<p class="account__title">${this.subscription?.account?.name??""}</p>
					${St(0===this.organizationsCount,(()=>dt`<p class="account__access">${this.planName}</p>`))}
				</div>
				<div class="account__signout">
					<gl-button
						appearance="toolbar"
						href="command:gitlens.plus.logout"
						tooltip="Sign Out"
						aria-label="Sign Out"
						><code-icon icon="sign-out"></code-icon
					></gl-button>
				</div>
			</div>
		`:ut}renderOrganization(){const e=this.subscription?.activeOrganization?.name??"";return this.hasAccount&&e?dt`
			<div class="account account--org">
				<div class="account__media">
					<code-icon icon="organization" size="22"></code-icon>
				</div>
				<div class="account__details">
					<p class="account__title">${e}</p>
					<p class="account__access">${this.planName}</p>
				</div>
				${St(this.organizationsCount>1,(()=>dt`<div class="account__signout">
							<span class="account__badge">+${this.organizationsCount-1}</span>
							<gl-button
								appearance="toolbar"
								href="command:gitlens.gk.switchOrganization"
								tooltip="Switch Organization"
								aria-label="Switch Organization"
								><code-icon icon="arrow-swap"></code-icon
							></gl-button>
						</div>`))}
			</div>
		`:ut}renderAccountState(){const e=function(e,t){if(null!=e)for(const o of Lt)if((null==t||t===o.key)&&Ot(o,e))return o}(this.state);switch(this.state){case Ct.Paid:return dt`
					<button-container>
						<gl-button appearance="secondary" full href="command:gitlens.plus.manage"
							>Manage Account</gl-button
						>
						<gl-button
							appearance="secondary"
							full
							href="command:gitlens.plus.cloudIntegrations.manage?%7B%22source%22%3A%22account%22%7D"
							>Integrations</gl-button
						>
					</button-container>
					<p>
						Your ${Et(this.planId)} plan provides full access to all Pro features and
						our <a href="${T.platform}">DevEx platform</a>, unleashing powerful Git visualization &
						productivity capabilities everywhere you work: IDE, desktop, browser, and terminal.
					</p>
				`;case Ct.VerificationRequired:return dt`
					<p>You must verify your email before you can access Pro features.</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.resendVerification">Resend Email</gl-button>
						<gl-button appearance="secondary" href="command:gitlens.plus.validate"
							><code-icon size="20" icon="refresh"></code-icon>
						</gl-button>
					</button-container>
				`;case Ct.FreePlusInTrial:{const t=this.daysRemaining;return dt`
					${this.isReactivatedTrial?dt`<p>
								<code-icon icon="megaphone"></code-icon>
								See
								<a href="${T.releaseNotes}">what's new</a>
								in GitLens.
						  </p>`:ut}
					<p>
						You have
						<strong>${t<1?"<1 day":function(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const r=1===t?e:o.plural??`${e}s`;return o.only?r:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${r}`}("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.upgrade">Upgrade to Pro</gl-button>
					</button-container>
					${this.renderPromo(e)} ${this.renderIncludesDevEx()}
				`}case Ct.FreePlusTrialExpired:return dt`
					<p>Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.upgrade">Upgrade to Pro</gl-button>
					</button-container>
					${this.renderPromo(e)} ${this.renderIncludesDevEx()}
				`;case Ct.FreePlusTrialReactivationEligible:return dt`
					<p>Reactivate your Pro trial and experience all the new Pro features — free for another 7 days!</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.reactivateProTrial">Reactivate Pro Trial</gl-button>
					</button-container>
					${this.renderIncludesDevEx()}
				`;default:return dt`
					<p>
						Sign up for access to Pro features and our
						<a href="${T.platform}">DevEx platform</a>, or
						<a href="command:gitlens.plus.login">sign in</a>.
					</p>
					<button-container>
						<gl-button full href="command:gitlens.plus.signUp">Sign Up</gl-button>
					</button-container>
					<p>Signing up starts your free 7-day Pro trial.</p>
					${this.renderIncludesDevEx()}
				`}}renderIncludesDevEx(){return dt`
			<p>
				Includes access to our
				<a href="${T.platform}">DevEx platform</a>, unleashing powerful Git visualization & productivity
				capabilities everywhere you work: IDE, desktop, browser, and terminal.
			</p>
		`}renderPromo(e){return dt`<gl-promo .promo=${e}></gl-promo>`}};nr.styles=[zt,Mt,Pe`
			:host {
				display: block;
				margin-bottom: 1.3rem;
			}

			button-container {
				margin-bottom: 1.3rem;
			}

			.account {
				position: relative;
				display: grid;
				gap: 0 0.8rem;
				grid-template-columns: 3.4rem auto min-content;
				grid-auto-flow: column;
				margin-bottom: 1.3rem;
			}

			.account--org {
				font-size: 0.9em;
				line-height: 1.2;
				margin-top: -1rem;
			}

			.account__media {
				grid-column: 1;
				grid-row: 1 / span 2;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.account--org .account__media {
				color: var(--color-foreground--65);
			}

			.account__image {
				width: 100%;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
			}

			.account__details {
				grid-row: 1 / span 2;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.account__title {
				font-size: 1.5rem;
				font-weight: 600;
				margin: 0;
			}

			.account--org .account__title {
				font-size: 1.2rem;
				font-weight: normal;
			}

			.account__access {
				position: relative;
				margin: 0;
				color: var(--color-foreground--65);
			}

			.account__signout {
				grid-row: 1 / span 2;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			.account__badge {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 2.4rem;
				height: 2.4rem;
				line-height: 2.4rem;
				font-size: 1rem;
				font-weight: 600;
				color: var(--color-foreground--65);
				background-color: var(--vscode-toolbar-hoverBackground);
				border-radius: 50%;
			}

			.repo-access {
				font-size: 1.1em;
				margin-right: 0.2rem;
			}
			.repo-access:not(.is-pro) {
				filter: grayscale(1) brightness(0.7);
			}

			.special {
				margin-top: 0.8rem;
				text-align: center;
			}

			.special-dim {
				font-size: smaller;
				opacity: 0.6;
			}
		`],rr([$t()],nr.prototype,"image",2),rr([$t({type:Number})],nr.prototype,"organizationsCount",2),rr([$t({attribute:!1})],nr.prototype,"subscription",2),nr=rr([wt("account-content")],nr);class AccountApp extends App{constructor(){super("AccountApp")}onInitialize(){this.state=this.getState()??this.state,this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(G.on("[data-action]","click",((e,t)=>this.onDataActionClicked(e,t)))),e}onMessageReceived(e){if(!0===a.is(e))this.state.subscription=e.params.subscription,this.state.avatar=e.params.avatar,this.state.organizationsCount=e.params.organizationsCount,this.state.timestamp=Date.now(),this.setState(this.state),this.updateState();else super.onMessageReceived?.(e)}onDataActionClicked(e,t){const o=t.dataset.action;this.onActionClickedCore(o)}onActionClickedCore(e){e?.startsWith("command:")&&this.sendCommand(n,{command:e.slice(8)})}updateState(){const{subscription:e,avatar:t,organizationsCount:o}=this.state,r=document.getElementById("account-content");r.image=t??"",r.subscription=e,r.organizationsCount=o??0}}new AccountApp;var sr=t.r;export{sr as AccountApp};