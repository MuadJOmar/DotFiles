var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{b:()=>HomeApp});var o=(e=>(e.Free="free",e.FreePlus="free+",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(o||{}),n=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",e[e.Paid=6]="Paid",e))(n||{});function s(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function r(e,t){return a(e.plan.effective.expiresOn,t)}function a(e,t){return null!=e?function(e,t,o,n){const s=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),r=n??Math.floor;switch(o){case"days":return r(s/864e5);case"hours":return r(s/36e5);case"minutes":return r(s/6e4);case"seconds":return r(s/1e3);default:return s}}(Date.now(),new Date(e),t,Math.round):void 0}const l=[{key:"launchpad",code:"GLLAUNCHPAD24",states:[n.Free,n.FreeInPreviewTrial,n.FreePreviewTrialExpired,n.FreePlusInTrial,n.FreePlusTrialExpired,n.FreePlusTrialReactivationEligible],expiresOn:new Date("2024-09-27T06:59:00.000Z").getTime(),commandTooltip:"Launchpad Sale: Save 75% or more on GitLens Pro"},{key:"launchpad-extended",code:"GLLAUNCHPAD24",states:[n.Free,n.FreeInPreviewTrial,n.FreePreviewTrialExpired,n.FreePlusInTrial,n.FreePlusTrialExpired,n.FreePlusTrialReactivationEligible],startsOn:new Date("2024-09-27T06:59:00.000Z").getTime(),expiresOn:new Date("2024-10-14T06:59:00.000Z").getTime(),commandTooltip:"Launchpad Sale: Save 75% or more on GitLens Pro"},{key:"pro50",states:[n.Free,n.FreeInPreviewTrial,n.FreePreviewTrialExpired,n.FreePlusInTrial,n.FreePlusTrialExpired,n.FreePlusTrialReactivationEligible],commandTooltip:"Limited-Time Sale: Save 33% or more on your 1st seat of Pro. See your special price"}];function c(e,t){if(null!=e)for(const o of l)if((null==t||t===o.key)&&h(o,e))return o}function h(e,t){const o=Date.now();return(null==e.states||e.states.includes(t))&&(null==e.expiresOn||e.expiresOn>o)&&(null==e.startsOn||e.startsOn<o)}class IpcCall{constructor(e,t,o=!1,n=!1){this.scope=e,this.reset=o,this.pack=n,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const p=new IpcCommand("core","webview/ready"),d=new IpcCommand("core","webview/focus/changed"),u=new IpcCommand("core","command/execute"),g=(new IpcCommand("core","configuration/update"),new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const f="home",m=new IpcCommand(f,"section/collapse"),v=new IpcNotification(f,"repositories/didChange"),y=new IpcNotification(f,"integrations/didChange"),w=new IpcNotification(f,"subscription/didChange"),x=new IpcNotification(f,"org/settings/didChange");class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function C(e,t,o){let n,s,r,a,l;function c(e){const o=e-(s??0);return null==s||o>=t||o<0}function h(){const e=Date.now();if(c(e))p();else{l=setTimeout(h,t-(e-(s??0)))}}function p(){return l=void 0,n?function(){const t=n,o=r;return n=r=void 0,a=e.apply(o,t),a}():(n=void 0,r=void 0,a)}function d(...e){const p=Date.now(),d=c(p);return n=null!=o&&n?o(n,e):e,r=this,s=p,d&&null==l?(l=setTimeout(h,t),a):(null==l&&(l=setTimeout(h,t)),a)}return d.cancel=function(){null!=l&&clearTimeout(l),n=void 0,s=void 0,r=void 0,l=void 0},d.flush=function(){return null==l?a:(clearTimeout(l),p())},d.pending=function(){return null!=l},d}const $=",",_="=",S="{",P="(",A=")",T=/\(([\s\S]*)\)/,D=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,E=/\s?=.*$/;function O(e){const t=.001*performance.now();let o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],n-=e[1],n<0&&(o--,n+=1e9)),[o,n]}const F=500;function B(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const z=B(),U=new Map;function W(e){U.delete(e)}function N(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function G(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?z.current:void 0,n=z.next();return{scopeId:n,prevScopeId:o,prefix:`${N(n)} ${e}`}}Error;function q(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;var j=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(j||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const Q="utm_source=gitlens-extension&utm_medium=in-app-links",{fromCharCode:K}=(Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${Q}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${Q}`,graph:`https://gitkraken.com/solutions/commit-graph?${Q}`,launchpad:`https://gitkraken.com/solutions/launchpad?${Q}`,platform:`https://gitkraken.com/devex?${Q}`,pricing:`https://gitkraken.com/gitlens/pricing?${Q}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${Q}`,security:`https://help.gitkraken.com/gitlens/security?${Q}`,workspaces:`https://gitkraken.com/solutions/workspaces?${Q}`,cli:`https://gitkraken.com/cli?${Q}`,browserExtension:`https://gitkraken.com/browser-extension?${Q}`,desktop:`https://gitkraken.com/git-client?${Q}`,releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:`https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?${Q}`}),String);new TextEncoder;function J(e){const[t,o]=O(e);return 1e3*t+Math.floor(o/1e6)}function Y(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}const Z=Symbol("logInstanceNameFn");function X(e){return function(e,t=!1){let o,n,s,r,a,l=0,c=!1,h=!1,p=!0;null!=e&&({args:o,if:n,enter:s,exit:r,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:p=!0}=e);l>0&&(h=!0,p=!0);p&&(c=!0);const d=ie.isDebugging,u=t?ie.debug:ie.log,g=d?"debug":"info";return(e,t,f)=>{let m,v;if("function"==typeof f.value?(m=f.value,v="value"):"function"==typeof f.get&&(m=f.get,v="get"),null==m||null==v)throw new Error("Not supported");const y=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(D,"")||t,t=t.slice(0,t.indexOf(S));let o=t.indexOf(P),n=t.indexOf(A);o=o>=0?o+1:0,n=n>0?n:t.indexOf(_),t=t.slice(o,n),t=`(${t})`;const s=T.exec(t);return null!=s?s[1].split($).map((e=>e.trim().replace(E,""))):[]}(m):[];f[v]=function(...e){if(!d&&!ie.enabled(g)||null!=n&&!n.apply(this,e))return m.apply(this,e);const f=z.current,v=z.next(),w=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const n=o.indexOf("_");o=-1===n?o:o.substr(n+1),null!=t?.[Z]&&(o=t[Z](e,o));return o}(this):void 0;let x,C=w?c?`${N(v,f)} ${w}.${t}`:`${w}.${t}`:t;null!=a&&(C=a({id:v,instance:this,instanceName:w??"",name:t,prefix:C},...e)),c&&(x=function(e,t){return t={prevScopeId:z.current,...t},U.set(e,t),t}(v,{scopeId:v,prevScopeId:f,prefix:C}));const $=null!=s?s(...e):"";let _;if(!1===o||0===e.length)_="",h||u.call(ie,`${C}${$}`);else{let t;_="";let n,s,r,a=-1;for(r of e){if(n=y[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(_.length>0&&(_+=", "),"string"==typeof t){_+=t;continue}s=String(t(r))}else _.length>0&&(_+=", "),s=ie.toLoggable(r);_+=n?`${n}=${s}`:s}h||u.call(ie,_?`${C}${$}(${_})`:`${C}${$}`)}if(h||p||null!=r){const t=p?O():void 0,o=e=>{const o=void 0!==t?` [${J(t)}ms]`:"";h?ie.error(e,_?`${C}${$}(${_})`:`${C}${$}`,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`):ie.error(e,C,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`),c&&W(v)};let n;try{n=m.apply(this,e)}catch(e){throw o(e),e}const s=e=>{let o,n,s,a;if(null!=t?(o=J(t),o>F?(n=ie.warn,s=` [*${o}ms] (slow)`):(n=u,s=` [${o}ms]`)):(s="",n=u),null!=r)if("function"==typeof r)try{a=r(e)}catch(e){a=`@log.exit error: ${e}`}else!0===r&&(a=`returned ${ie.toLoggable(e)}`);else x?.exitFailed?(a=x.exitFailed,n=ie.error):a="completed";h?(0===l||o>l)&&n.call(ie,_?`${C}${$}(${_}) ${a}${x?.exitDetails||""}${s}`:`${C}${$} ${a}${x?.exitDetails||""}${s}`):n.call(ie,_?`${C}(${_}) ${a}${x?.exitDetails||""}${s}`:`${C} ${a}${x?.exitDetails||""}${s}`),c&&W(v)};return null!=n&&q(n)?n.then(s,o):s(n),n}return m.apply(this,e)}}}(e,!0)}const ee=new Set(["accessToken","password","token"]),te=function(e,t){return ee.has(e)?`<${t}>`:t},ie=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=oe(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=oe(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(t??=this.provider.sanitize??te,Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function oe(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const ne={enabled:e=>ie.enabled(e)||ie.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":ie.error("",t,o,...n);break;case"warn":ie.warn(t,o,...n);break;case"info":ie.log(t,o,...n);break;default:ie.debug(t,o,...n)}}};class LoggerContext{constructor(e){this.scope=G(e,void 0),ie.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off")}log(e,...t){"string"==typeof e?ie.log(this.scope,e,...t):ie.log(e,t.shift(),...t)}}var se;function re(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function ae(e,t){return new Promise((o=>{e.addEventListener(t,(function n(s){s.target===e&&(e.removeEventListener(t,n),o())}))}))}(se||(se={})).on=function(e,t,o,n){let s=!1;if("string"==typeof e){const r=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,r,n??!0),{dispose:()=>{s||(s=!0,document.removeEventListener(t,r,n??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,n??!1),{dispose:()=>{s||(s=!0,e.removeEventListener(t,r,n??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:G(e??"",!1),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??ne,this._time=O(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=O(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=O(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,n]=O(this._time),s=1e3*o+Math.floor(n/1e6),r=e?.message??"";this.logProvider.log(s>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${s}ms]${e?.suffix??""}`)}}const le=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const n=this.listeners.push(null==t?e:[e,t]),s={dispose:()=>{s.dispose=_Emitter._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(s),s}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};le._noop=function(){};let ce=le;const he={done:!0,value:void 0},pe=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};pe.Undefined=new pe(void 0);let de=pe;class LinkedList{constructor(){this._first=de.Undefined,this._last=de.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===de.Undefined}clear(){this._first=de.Undefined,this._last=de.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new de(e);if(this._first===de.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===de.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===de.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==de.Undefined&&e.next!==de.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===de.Undefined&&e.next===de.Undefined?(this._first=de.Undefined,this._last=de.Undefined):e.next===de.Undefined?(this._last=this._last.prev,this._last.next=de.Undefined):e.prev===de.Undefined&&(this._first=this._first.next,this._first.prev=de.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===de.Undefined?he:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==de.Undefined;t=t.next)e.push(t.element);return e}}var ue=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,fe=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?ge(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&ue(t,o,r),r};let me;function be(){return me??=acquireVsCodeApi()}const ve=B();function ye(){return`webview:${ve.next()}`}let we=class{constructor(e){this.appName=e,this._onReceiveMessage=new ce,this._pendingHandlers=new Map,this._api=be(),this._disposable=se.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=U.get(z.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const n=function(e,t,...o){return(t?.provider??ne).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(G(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),n?.stop()}if(null==o.completionId)this._onReceiveMessage.fire(o);else{const e=Ce(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}sendCommand(e,t){const o=ye();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=ye(),n=new Promise(((t,n)=>{const s=Ce(e.response.method,o);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(s)}r=setTimeout((()=>{a.call(this),n(new Error(`Timed out waiting for completion of ${s}`))}),6e4),this._pendingHandlers.set(s,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),n}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var xe;function Ce(e,t){return`${e}|${t}`}fe([X({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],we.prototype,"onMessageReceived",1),fe([X({args:{0:e=>e.method,1:!1}})],we.prototype,"sendCommand",1),fe([X({args:{0:e=>e.method,1:!1,2:!1}})],we.prototype,"sendRequest",1),fe([X({args:{0:e=>`${e.id}, method=${e.method}`}})],we.prototype,"postMessage",1),we=fe([(xe=(e,t)=>`${e.appName}(${t})`,e=>{e[Z]=xe})],we);function ke(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=ke(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ke(Math.max(Math.min(1,t),0),3),this.l=ke(Math.max(Math.min(1,o),0),3),this.a=ke(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,s=e.a,r=Math.max(t,o,n),a=Math.min(t,o,n);let l=0,c=0;const h=(a+r)/2,p=r-a;if(p>0){switch(c=Math.min(h<=.5?p/(2*h):p/(2-2*h),1),r){case t:l=(o-n)/p+(o<n?6:0);break;case o:l=(n-t)/p+2;break;case n:l=(t-o)/p+4}l*=60,l=Math.round(l)}return new HSLA(l,c,h,s)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:s}=e;let r,a,l;if(0===o)r=a=l=n;else{const e=n<.5?n*(1+o):n+o-n*o,s=2*n-e;r=HSLA._hue2rgb(s,e,t+1/3),a=HSLA._hue2rgb(s,e,t),l=HSLA._hue2rgb(s,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),s)}}class HSVA{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ke(Math.max(Math.min(1,t),0),3),this.v=ke(Math.max(Math.min(1,o),0),3),this.a=ke(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,s=Math.max(t,o,n),r=s-Math.min(t,o,n),a=0===s?0:r/s;let l;return l=0===r?0:s===t?((o-n)/r%6+6)%6:s===o?(n-t)/r+2:(t-o)/r+4,new HSVA(Math.round(60*l),a,s,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:s}=e,r=n*o,a=r*(1-Math.abs(t/60%2-1)),l=n-r;let[c,h,p]=[0,0,0];return t<60?(c=r,h=a):t<120?(c=a,h=r):t<180?(h=r,p=a):t<240?(h=a,p=r):t<300?(c=a,p=r):t<=360&&(c=r,p=a),c=Math.round(255*(c+l)),h=Math.round(255*(h+l)),p=Math.round(255*(p+l)),new RGBA(c,h,p,s)}}function $e(e,t){return t.getPropertyValue(e).trim()}const _e=class _Color{static from(e){return e instanceof _Color?e:De(e)||_Color.red}static fromCssVariable(e,t){return De($e(e,t))||_Color.red}static fromHex(e){return Le(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return ke(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new Se(new RGBA(0,0,0,e.rgba.a));if(1===t)return new Se(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const s=(e,o)=>{const r=e.mix(o,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!n--?r:a>t?s(e,r):s(r,o)},r=(o>t?s(Se.black,e):s(e,Se.white)).rgba;return new Se(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:n,a:s}=this.rgba;return new _Color(new RGBA(t,o,n,s*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,n=t.a,s=o+n*(1-o);if(s<1e-6)return _Color.transparent;const r=this.rgba.r*o/s+t.r*n*(1-o)/s,a=this.rgba.g*o/s+t.g*n*(1-o)/s,l=this.rgba.b*o/s+t.b*n*(1-o)/s;return new _Color(new RGBA(r,a,l,s))}mix(e,t){return function(e,t,o){const n=e.rgba,s=t.rgba;return new Se(new RGBA(n.r+o*(s.r-n.r),n.g+o*(s.g-n.g),n.b+o*(s.b-n.b),n.a+o*(s.a-n.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:n,a:s}=this.rgba;return new _Color(new RGBA(e.rgba.r-s*(e.rgba.r-t),e.rgba.g-s*(e.rgba.g-o),e.rgba.b-s*(e.rgba.b-n),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return Ae(e);return Pe(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),s=t.getRelativeLuminance();return o=o*(s-n)/s,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};_e.white=new _e(new RGBA(255,255,255,1)),_e.black=new _e(new RGBA(0,0,0,1)),_e.red=new _e(new RGBA(255,0,0,1)),_e.blue=new _e(new RGBA(0,0,255,1)),_e.green=new _e(new RGBA(0,255,0,1)),_e.cyan=new _e(new RGBA(0,255,255,1)),_e.lightgrey=new _e(new RGBA(211,211,211,1)),_e.transparent=new _e(new RGBA(0,0,0,0));let Se=_e;function Pe(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function Re(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function Ae(e){return`#${Re(e.rgba.r)}${Re(e.rgba.g)}${Re(e.rgba.b)}`}const Te=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function De(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===j.Hash)return Le(e);const t=Te.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new Se(new RGBA(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new Se(new HSLA(n[0],n[1],n[2],n[3]))}return Se.red}function Le(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==j.Hash)return null;switch(t){case 7:{const t=16*Ee(e.charCodeAt(1))+Ee(e.charCodeAt(2)),o=16*Ee(e.charCodeAt(3))+Ee(e.charCodeAt(4)),n=16*Ee(e.charCodeAt(5))+Ee(e.charCodeAt(6));return new Se(new RGBA(t,o,n,1))}case 9:{const t=16*Ee(e.charCodeAt(1))+Ee(e.charCodeAt(2)),o=16*Ee(e.charCodeAt(3))+Ee(e.charCodeAt(4)),n=16*Ee(e.charCodeAt(5))+Ee(e.charCodeAt(6)),s=16*Ee(e.charCodeAt(7))+Ee(e.charCodeAt(8));return new Se(new RGBA(t,o,n,s/255))}case 4:{const t=Ee(e.charCodeAt(1)),o=Ee(e.charCodeAt(2)),n=Ee(e.charCodeAt(3));return new Se(new RGBA(16*t+t,16*o+o,16*n+n))}case 5:{const t=Ee(e.charCodeAt(1)),o=Ee(e.charCodeAt(2)),n=Ee(e.charCodeAt(3)),s=Ee(e.charCodeAt(4));return new Se(new RGBA(16*t+t,16*o+o,16*n+n,(16*s+s)/255))}default:return null}}function Ee(e){switch(e){case j.Digit0:return 0;case j.Digit1:return 1;case j.Digit2:return 2;case j.Digit3:return 3;case j.Digit4:return 4;case j.Digit5:return 5;case j.Digit6:return 6;case j.Digit7:return 7;case j.Digit8:return 8;case j.Digit9:return 9;case j.a:case j.A:return 10;case j.b:case j.B:return 11;case j.c:case j.C:return 12;case j.d:case j.D:return 13;case j.e:case j.E:return 14;case j.f:case j.F:return 15}return 0}const Oe=new ce,Fe=Oe.event;function Be(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,s=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),r=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),a=$e("--vscode-editor-background",o);let l=$e("--vscode-editor-foreground",o);return l||(l=$e("--vscode-foreground",o)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:s,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],o=Be();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(Fe(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=be(),this._hostIpc=new we(this.appName),t.push(this._hostIpc),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Oe.fire(Be(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===g.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(p,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(se.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0}))),this.log("opened")}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=C((e=>{this.sendCommand(d,e)}),150);this.bindDisposables.push(se.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),se.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}const Ie=globalThis,ze=Ie.ShadowRoot&&(void 0===Ie.ShadyCSS||Ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Me=Symbol(),Ue=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ze&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Ue.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ue.set(t,e))}return e}toString(){return this.cssText}}const We=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,Me),He=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new css_tag_n(o,e,Me)},Ve=ze?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return We(t)})(e):e,{is:Ne,defineProperty:Ge,getOwnPropertyDescriptor:qe,getOwnPropertyNames:je,getOwnPropertySymbols:Qe,getPrototypeOf:Ke}=Object,Je=globalThis,Ye=Je.trustedTypes,Ze=Ye?Ye.emptyScript:"",Xe=Je.reactiveElementPolyfillSupport,et=(e,t)=>e,tt={toAttribute(e,t){switch(t){case Boolean:e=e?Ze:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},it=(e,t)=>!Ne(e,t),ot={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:it};Symbol.metadata??=Symbol("metadata"),Je.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ot){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Ge(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:s}=qe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const r=n?.call(this);s.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ot}static _$Ei(){if(this.hasOwnProperty(et("elementProperties")))return;const e=Ke(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(et("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(et("properties"))){const e=this.properties,t=[...je(e),...Qe(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Ve(e))}else void 0!==e&&t.push(Ve(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(ze)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),n=Ie.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:tt).toAttribute(t,o.type);this._$Em=e,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:tt;this._$Em=n,this[n]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??it)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[et("elementProperties")]=new Map,b[et("finalized")]=new Map,Xe?.({ReactiveElement:b}),(Je.reactiveElementVersions??=[]).push("2.0.4");const nt=globalThis,st=nt.trustedTypes,rt=st?st.createPolicy("lit-html",{createHTML:e=>e}):void 0,at="$lit$",lt=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+lt,ht=`<${ct}>`,pt=document,dt=()=>pt.createComment(""),ut=e=>null===e||"object"!=typeof e&&"function"!=typeof e,gt=Array.isArray,ft=e=>gt(e)||"function"==typeof e?.[Symbol.iterator],mt="[ \t\n\f\r]",bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,yt=/>/g,wt=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),xt=/'/g,Ct=/"/g,kt=/^(?:script|style|textarea|title)$/i,$t=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),_t=$t(1),St=($t(2),Symbol.for("lit-noChange")),Pt=Symbol.for("lit-nothing"),Rt=new WeakMap,At=pt.createTreeWalker(pt,129);function Tt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==rt?rt.createHTML(t):t}const Dt=(e,t)=>{const o=e.length-1,n=[];let s,r=2===t?"<svg>":"",a=bt;for(let t=0;t<o;t++){const o=e[t];let l,c,h=-1,p=0;for(;p<o.length&&(a.lastIndex=p,c=a.exec(o),null!==c);)p=a.lastIndex,a===bt?"!--"===c[1]?a=vt:void 0!==c[1]?a=yt:void 0!==c[2]?(kt.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=wt):void 0!==c[3]&&(a=wt):a===wt?">"===c[0]?(a=s??bt,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?wt:'"'===c[3]?Ct:xt):a===Ct||a===xt?a=wt:a===vt||a===yt?a=bt:(a=wt,s=void 0);const d=a===wt&&e[t+1].startsWith("/>")?" ":"";r+=a===bt?o+ht:h>=0?(n.push(l),o.slice(0,h)+at+o.slice(h)+lt+d):o+lt+(-2===h?t:d)}return[Tt(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class V{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let s=0,r=0;const a=e.length-1,l=this.parts,[c,h]=Dt(e,t);if(this.el=V.createElement(c,o),At.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=At.nextNode())&&l.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(at)){const t=h[r++],o=n.getAttribute(e).split(lt),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:a[2],strings:o,ctor:"."===a[1]?k:"?"===a[1]?H:"@"===a[1]?I:R}),n.removeAttribute(e)}else e.startsWith(lt)&&(l.push({type:6,index:s}),n.removeAttribute(e));if(kt.test(n.tagName)){const e=n.textContent.split(lt),t=e.length-1;if(t>0){n.textContent=st?st.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],dt()),At.nextNode(),l.push({type:2,index:++s});n.append(e[t],dt())}}}else if(8===n.nodeType)if(n.data===ct)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(lt,e+1));)l.push({type:7,index:s}),e+=lt.length-1}s++}}static createElement(e,t){const o=pt.createElement("template");return o.innerHTML=e,o}}function Lt(e,t,o=e,n){if(t===St)return t;let s=void 0!==n?o._$Co?.[n]:o._$Cl;const r=ut(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=s:o._$Cl=s),void 0!==s&&(t=Lt(e,s._$AS(e,t.values),s,n)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??pt).importNode(t,!0);At.currentNode=n;let s=At.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new M(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new L(s,this,e)),this._$AV.push(t),l=o[++a]}r!==l?.index&&(s=At.nextNode(),r++)}return At.currentNode=pt,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=Pt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Lt(this,e,t),ut(e)?e===Pt||null==e||""===e?(this._$AH!==Pt&&this._$AR(),this._$AH=Pt):e!==this._$AH&&e!==St&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ft(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Pt&&ut(this._$AH)?this._$AA.nextSibling.data=e:this.T(pt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(Tt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new lit_html_S(n,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Rt.get(e.strings);return void 0===t&&Rt.set(e.strings,t=new V(e)),t}k(e){gt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const s of e)n===t.length?t.push(o=new M(this.S(dt()),this.S(dt()),this,this.options)):o=t[n],o._$AI(s),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,s){this.type=1,this._$AH=Pt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Pt}_$AI(e,t=this,o,n){const s=this.strings;let r=!1;if(void 0===s)e=Lt(this,e,t,0),r=!ut(e)||e!==this._$AH&&e!==St,r&&(this._$AH=e);else{const n=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=Lt(this,n[o+a],t,a),l===St&&(l=this._$AH[a]),r||=!ut(l)||l!==this._$AH[a],l===Pt?e=Pt:e!==Pt&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(e)}j(e){e===Pt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Pt?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Pt)}}class I extends R{constructor(e,t,o,n,s){super(e,t,o,n,s),this.type=5}_$AI(e,t=this){if((e=Lt(this,e,t,0)??Pt)===St)return;const o=this._$AH,n=e===Pt&&o!==Pt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==Pt&&(o===Pt||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Lt(this,e)}}const Et=nt.litHtmlPolyfillSupport;Et?.(V,M),(nt.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let s=n._$litPart$;if(void 0===s){const e=o?.renderBefore??null;n._$litPart$=s=new M(t.insertBefore(dt(),e),e,void 0,o??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return St}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const Ot=globalThis.litElementPolyfillSupport;Ot?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const Ft=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Bt={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:it},It=(e=Bt,t,o)=>{const{kind:n,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const s=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,s,e)},init(t){return void 0!==t&&this.P(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const s=this[n];t.call(this,o),this.requestUpdate(n,s,e)}}throw Error("Unsupported decorator location: "+n)};function zt(e){return(t,o)=>"object"==typeof o?It(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const Mt=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function Ut(e,t){return(o,n,s)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof n?o:s??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Mt(o,n,{get(){let o=e.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return Mt(o,n,{get(){return r(this)}})}}He`
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
`;const Wt=He`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Ht=He`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,Vt=He`
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
`,Nt=He`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Wt}
	}
	a:hover {
		text-decoration: underline;
	}
`;He`
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
`;var Gt=Object.defineProperty,qt=Object.defineProperties,jt=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyDescriptors,Kt=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable,Zt=(e,t,o)=>t in e?Gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Xt=(e,t)=>{for(var o in t||(t={}))Jt.call(t,o)&&Zt(e,o,t[o]);if(Kt)for(var o of Kt(t))Yt.call(t,o)&&Zt(e,o,t[o]);return e},ei=(e,t)=>qt(e,Qt(t)),ti=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?jt(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&Gt(t,o,r),r},ii=new Map,oi=new WeakMap;function ni(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function si(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ri(e,t){ii.set(e,ni(t))}function ai(e,t,o){const n=oi.get(e);if(null==n?void 0:n[t])return si(n[t],o.dir);const s=ii.get(t);return s?si(s,o.dir):{keyframes:[],options:{duration:0}}}var li=He`
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
`,ci=He`
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
`,hi=He`
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
`,pi=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,Xt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const n=customElements.get(e);if(!n)return void customElements.define(e,class extends t{},o);let s=" (unknown version)",r=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in n&&n.version&&(r=" v"+n.version)}};pi.version="2.15.1",pi.dependencies={},ti([zt()],pi.prototype,"dir",2),ti([zt()],pi.prototype,"lang",2);const di=Math.min,ui=Math.max,gi=Math.round,fi=Math.floor,mi=e=>({x:e,y:e}),bi={left:"right",right:"left",bottom:"top",top:"bottom"},vi={start:"end",end:"start"};function yi(e,t,o){return ui(e,di(t,o))}function wi(e,t){return"function"==typeof e?e(t):e}function xi(e){return e.split("-")[0]}function Ci(e){return e.split("-")[1]}function ki(e){return"x"===e?"y":"x"}function $i(e){return"y"===e?"height":"width"}function _i(e){return["top","bottom"].includes(xi(e))?"y":"x"}function Si(e){return ki(_i(e))}function Pi(e){return e.replace(/start|end/g,(e=>vi[e]))}function Ri(e){return e.replace(/left|right|bottom|top/g,(e=>bi[e]))}function Ai(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Ti(e){const{x:t,y:o,width:n,height:s}=e;return{width:n,height:s,top:o,left:t,right:t+n,bottom:o+s,x:t,y:o}}function Di(e,t,o){let{reference:n,floating:s}=e;const r=_i(t),a=Si(t),l=$i(a),c=xi(t),h="y"===r,p=n.x+n.width/2-s.width/2,d=n.y+n.height/2-s.height/2,u=n[l]/2-s[l]/2;let g;switch(c){case"top":g={x:p,y:n.y-s.height};break;case"bottom":g={x:p,y:n.y+n.height};break;case"right":g={x:n.x+n.width,y:d};break;case"left":g={x:n.x-s.width,y:d};break;default:g={x:n.x,y:n.y}}switch(Ci(t)){case"start":g[a]-=u*(o&&h?-1:1);break;case"end":g[a]+=u*(o&&h?-1:1)}return g}async function Li(e,t){var o;void 0===t&&(t={});const{x:n,y:s,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:u=!1,padding:g=0}=wi(t,e),f=Ai(g),m=l[u?"floating"===d?"reference":"floating":d],v=Ti(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(m)))||o?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:h,rootBoundary:p,strategy:c})),y="floating"===d?{x:n,y:s,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),x=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},C=Ti(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-C.top+f.top)/x.y,bottom:(C.bottom-v.bottom+f.bottom)/x.y,left:(v.left-C.left+f.left)/x.x,right:(C.right-v.right+f.right)/x.x}}function Ei(e){return Bi(e)?(e.nodeName||"").toLowerCase():"#document"}function Oi(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Fi(e){var t;return null==(t=(Bi(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Bi(e){return e instanceof Node||e instanceof Oi(e).Node}function Ii(e){return e instanceof Element||e instanceof Oi(e).Element}function zi(e){return e instanceof HTMLElement||e instanceof Oi(e).HTMLElement}function Mi(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Oi(e).ShadowRoot)}function Ui(e){const{overflow:t,overflowX:o,overflowY:n,display:s}=qi(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(s)}function Wi(e){return["table","td","th"].includes(Ei(e))}function Hi(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Vi(e){const t=Ni(),o=Ii(e)?qi(e):e;return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ni(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Gi(e){return["html","body","#document"].includes(Ei(e))}function qi(e){return Oi(e).getComputedStyle(e)}function ji(e){return Ii(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Qi(e){if("html"===Ei(e))return e;const t=e.assignedSlot||e.parentNode||Mi(e)&&e.host||Fi(e);return Mi(t)?t.host:t}function Ki(e){const t=Qi(e);return Gi(t)?e.ownerDocument?e.ownerDocument.body:e.body:zi(t)&&Ui(t)?t:Ki(t)}function Ji(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const s=Ki(e),r=s===(null==(n=e.ownerDocument)?void 0:n.body),a=Oi(s);return r?t.concat(a,a.visualViewport||[],Ui(s)?s:[],a.frameElement&&o?Ji(a.frameElement):[]):t.concat(s,Ji(s,[],o))}function Yi(e){const t=qi(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const s=zi(e),r=s?e.offsetWidth:o,a=s?e.offsetHeight:n,l=gi(o)!==r||gi(n)!==a;return l&&(o=r,n=a),{width:o,height:n,$:l}}function Zi(e){return Ii(e)?e:e.contextElement}function Xi(e){const t=Zi(e);if(!zi(t))return mi(1);const o=t.getBoundingClientRect(),{width:n,height:s,$:r}=Yi(t);let a=(r?gi(o.width):o.width)/n,l=(r?gi(o.height):o.height)/s;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const eo=mi(0);function to(e){const t=Oi(e);return Ni()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:eo}function io(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const s=e.getBoundingClientRect(),r=Zi(e);let a=mi(1);t&&(n?Ii(n)&&(a=Xi(n)):a=Xi(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Oi(e))&&t}(r,o,n)?to(r):mi(0);let c=(s.left+l.x)/a.x,h=(s.top+l.y)/a.y,p=s.width/a.x,d=s.height/a.y;if(r){const e=Oi(r),t=n&&Ii(n)?Oi(n):n;let o=e,s=o.frameElement;for(;s&&n&&t!==o;){const e=Xi(s),t=s.getBoundingClientRect(),n=qi(s),r=t.left+(s.clientLeft+parseFloat(n.paddingLeft))*e.x,a=t.top+(s.clientTop+parseFloat(n.paddingTop))*e.y;c*=e.x,h*=e.y,p*=e.x,d*=e.y,c+=r,h+=a,o=Oi(s),s=o.frameElement}}return Ti({width:p,height:d,x:c,y:h})}function oo(e){return io(Fi(e)).left+ji(e).scrollLeft}function no(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=Oi(e),n=Fi(e),s=o.visualViewport;let r=n.clientWidth,a=n.clientHeight,l=0,c=0;if(s){r=s.width,a=s.height;const e=Ni();(!e||e&&"fixed"===t)&&(l=s.offsetLeft,c=s.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,o);else if("document"===t)n=function(e){const t=Fi(e),o=ji(e),n=e.ownerDocument.body,s=ui(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=ui(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let a=-o.scrollLeft+oo(e);const l=-o.scrollTop;return"rtl"===qi(n).direction&&(a+=ui(t.clientWidth,n.clientWidth)-s),{width:s,height:r,x:a,y:l}}(Fi(e));else if(Ii(t))n=function(e,t){const o=io(e,!0,"fixed"===t),n=o.top+e.clientTop,s=o.left+e.clientLeft,r=zi(e)?Xi(e):mi(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:s*r.x,y:n*r.y}}(t,o);else{const o=to(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return Ti(n)}function so(e,t){const o=Qi(e);return!(o===t||!Ii(o)||Gi(o))&&("fixed"===qi(o).position||so(o,t))}function ro(e,t,o){const n=zi(t),s=Fi(t),r="fixed"===o,a=io(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=mi(0);if(n||!n&&!r)if(("body"!==Ei(t)||Ui(s))&&(l=ji(t)),n){const e=io(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else s&&(c.x=oo(s));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function ao(e){return"static"===qi(e).position}function lo(e,t){return zi(e)&&"fixed"!==qi(e).position?t?t(e):e.offsetParent:null}function co(e,t){const o=Oi(e);if(Hi(e))return o;if(!zi(e)){let t=Qi(e);for(;t&&!Gi(t);){if(Ii(t)&&!ao(t))return t;t=Qi(t)}return o}let n=lo(e,t);for(;n&&Wi(n)&&ao(n);)n=lo(n,t);return n&&Gi(n)&&ao(n)&&!Vi(n)?o:n||function(e){let t=Qi(e);for(;zi(t)&&!Gi(t);){if(Vi(t))return t;if(Hi(t))return null;t=Qi(t)}return null}(e)||o}const ho={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:n,strategy:s}=e;const r="fixed"===s,a=Fi(n),l=!!t&&Hi(t.floating);if(n===a||l&&r)return o;let c={scrollLeft:0,scrollTop:0},h=mi(1);const p=mi(0),d=zi(n);if((d||!d&&!r)&&(("body"!==Ei(n)||Ui(a))&&(c=ji(n)),zi(n))){const e=io(n);h=Xi(n),p.x=e.x+n.clientLeft,p.y=e.y+n.clientTop}return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-c.scrollLeft*h.x+p.x,y:o.y*h.y-c.scrollTop*h.y+p.y}},getDocumentElement:Fi,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:s}=e;const r=[..."clippingAncestors"===o?Hi(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let n=Ji(e,[],!1).filter((e=>Ii(e)&&"body"!==Ei(e))),s=null;const r="fixed"===qi(e).position;let a=r?Qi(e):e;for(;Ii(a)&&!Gi(a);){const t=qi(a),o=Vi(a);o||"fixed"!==t.position||(s=null),(r?!o&&!s:!o&&"static"===t.position&&s&&["absolute","fixed"].includes(s.position)||Ui(a)&&!o&&so(e,a))?n=n.filter((e=>e!==a)):s=t,a=Qi(a)}return t.set(e,n),n}(t,this._c):[].concat(o),n],a=r[0],l=r.reduce(((e,o)=>{const n=no(t,o,s);return e.top=ui(n.top,e.top),e.right=di(n.right,e.right),e.bottom=di(n.bottom,e.bottom),e.left=ui(n.left,e.left),e}),no(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:co,getElementRects:async function(e){const t=this.getOffsetParent||co,o=this.getDimensions,n=await o(e.floating);return{reference:ro(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=Yi(e);return{width:t,height:o}},getScale:Xi,isElement:Ii,isRTL:function(e){return"rtl"===qi(e).direction}};function po(e,t,o,n){void 0===n&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=n,h=Zi(e),p=s||r?[...h?Ji(h):[],...Ji(t)]:[];p.forEach((e=>{s&&e.addEventListener("scroll",o,{passive:!0}),r&&e.addEventListener("resize",o)}));const d=h&&l?function(e,t){let o,n=null;const s=Fi(e);function r(){var e;clearTimeout(o),null==(e=n)||e.disconnect(),n=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:h,top:p,width:d,height:u}=e.getBoundingClientRect();if(l||t(),!d||!u)return;const g={rootMargin:-fi(p)+"px "+-fi(s.clientWidth-(h+d))+"px "+-fi(s.clientHeight-(p+u))+"px "+-fi(h)+"px",threshold:ui(0,di(1,c))||1};let f=!0;function m(e){const t=e[0].intersectionRatio;if(t!==c){if(!f)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}f=!1}try{n=new IntersectionObserver(m,{...g,root:s.ownerDocument})}catch(e){n=new IntersectionObserver(m,g)}n.observe(e)}(!0),r}(h,o):null;let u,g=-1,f=null;a&&(f=new ResizeObserver((e=>{let[n]=e;n&&n.target===h&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=f)||e.observe(t)}))),o()})),h&&!c&&f.observe(h),f.observe(t));let m=c?io(e):null;return c&&function t(){const n=io(e);!m||n.x===m.x&&n.y===m.y&&n.width===m.width&&n.height===m.height||o();m=n,u=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach((e=>{s&&e.removeEventListener("scroll",o),r&&e.removeEventListener("resize",o)})),null==d||d(),null==(e=f)||e.disconnect(),f=null,c&&cancelAnimationFrame(u)}}const uo=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:s,y:r,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:o,platform:n,elements:s}=e,r=await(null==n.isRTL?void 0:n.isRTL(s.floating)),a=xi(o),l=Ci(o),c="y"===_i(o),h=["left","top"].includes(a)?-1:1,p=r&&c?-1:1,d=wi(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof f&&(g="end"===l?-1*f:f),c?{x:g*p,y:u*h}:{x:u*h,y:g*p}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(n=l.arrow)&&n.alignmentOffset?{}:{x:s+c.x,y:r+c.y,data:{...c,placement:a}}}}},go=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=wi(e,t),h={x:o,y:n},p=await Li(t,c),d=_i(xi(s)),u=ki(d);let g=h[u],f=h[d];if(r){const e="y"===u?"bottom":"right";g=yi(g+p["y"===u?"top":"left"],g,g-p[e])}if(a){const e="y"===d?"bottom":"right";f=yi(f+p["y"===d?"top":"left"],f,f-p[e])}const m=l.fn({...t,[u]:g,[d]:f});return{...m,data:{x:m.x-o,y:m.y-n}}}}},fo=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:s,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:h}=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...v}=wi(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const y=xi(s),w=_i(l),x=xi(l)===l,C=await(null==c.isRTL?void 0:c.isRTL(h.floating)),$=u||(x||!m?[Ri(l)]:function(e){const t=Ri(e);return[Pi(e),t,Pi(t)]}(l)),_="none"!==f;!u&&_&&$.push(...function(e,t,o,n){const s=Ci(e);let r=function(e,t,o){const n=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:n:t?n:s;case"left":case"right":return t?r:a;default:return[]}}(xi(e),"start"===o,n);return s&&(r=r.map((e=>e+"-"+s)),t&&(r=r.concat(r.map(Pi)))),r}(l,m,f,C));const S=[l,...$],P=await Li(t,v),A=[];let T=(null==(n=r.flip)?void 0:n.overflows)||[];if(p&&A.push(P[y]),d){const e=function(e,t,o){void 0===o&&(o=!1);const n=Ci(e),s=Si(e),r=$i(s);let a="x"===s?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Ri(a)),[a,Ri(a)]}(s,a,C);A.push(P[e[0]],P[e[1]])}if(T=[...T,{placement:s,overflows:A}],!A.every((e=>e<=0))){var D,E;const e=((null==(D=r.flip)?void 0:D.index)||0)+1,t=S[e];if(t)return{data:{index:e,overflows:T},reset:{placement:t}};let o=null==(E=T.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!o)switch(g){case"bestFit":{var O;const e=null==(O=T.filter((e=>{if(_){const t=_i(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:O[0];e&&(o=e);break}case"initialPlacement":o=l}if(s!==o)return{reset:{placement:o}}}return{}}}},mo=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:n,platform:s,elements:r}=t,{apply:a=()=>{},...l}=wi(e,t),c=await Li(t,l),h=xi(o),p=Ci(o),d="y"===_i(o),{width:u,height:g}=n.floating;let f,m;"top"===h||"bottom"===h?(f=h,m=p===(await(null==s.isRTL?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(m=h,f="end"===p?"top":"bottom");const v=g-c.top-c.bottom,y=u-c.left-c.right,w=di(g-c[f],v),x=di(u-c[m],y),C=!t.middlewareData.shift;let $=w,_=x;if(d?_=p||C?di(x,y):y:$=p||C?di(w,v):v,C&&!p){const e=ui(c.left,0),t=ui(c.right,0),o=ui(c.top,0),n=ui(c.bottom,0);d?_=u-2*(0!==e||0!==t?e+t:ui(c.left,c.right)):$=g-2*(0!==o||0!==n?o+n:ui(c.top,c.bottom))}await a({...t,availableWidth:_,availableHeight:$});const S=await s.getDimensions(r.floating);return u!==S.width||g!==S.height?{reset:{rects:!0}}:{}}}},bo=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:s,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:h,padding:p=0}=wi(e,t)||{};if(null==h)return{};const d=Ai(p),u={x:o,y:n},g=Si(s),f=$i(g),m=await a.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",x=v?"clientHeight":"clientWidth",C=r.reference[f]+r.reference[g]-u[g]-r.floating[f],$=u[g]-r.reference[g],_=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let S=_?_[x]:0;S&&await(null==a.isElement?void 0:a.isElement(_))||(S=l.floating[x]||r.floating[f]);const P=C/2-$/2,A=S/2-m[f]/2-1,T=di(d[y],A),D=di(d[w],A),E=T,O=S-m[f]-D,F=S/2-m[f]/2+P,B=yi(E,F,O),z=!c.arrow&&null!=Ci(s)&&F!==B&&r.reference[f]/2-(F<E?T:D)-m[f]/2<0,U=z?F<E?F-E:F-O:0;return{[g]:u[g]+U,data:{[g]:B,centerOffset:F-B-U,...z&&{alignmentOffset:U}},reset:z}}}),vo=(e,t,o)=>{const n=new Map,s={platform:ho,...o},r={...s.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:d}=Di(h,n,c),u=n,g={},f=0;for(let o=0;o<l.length;o++){const{name:r,fn:m}=l[o],{x:v,y,data:w,reset:x}=await m({x:p,y:d,initialPlacement:n,placement:u,strategy:s,middlewareData:g,rects:h,platform:a,elements:{reference:e,floating:t}});p=null!=v?v:p,d=null!=y?y:d,g={...g,[r]:{...g[r],...w}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(u=x.placement),x.rects&&(h=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:s}):x.rects),({x:p,y:d}=Di(h,u,c))),o=-1)}return{x:p,y:d,placement:u,strategy:s,middlewareData:g}})(e,t,{...s,platform:r})},yo=1;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const wo=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==yo||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return St}});function xo(e){return ko(e)}function Co(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ko(e){for(let t=e;t;t=Co(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Co(e);t;t=Co(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var $o=class extends pi{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,n=0,s=0,r=0,a=0,l=0,c=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,n=e.bottom,s=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(o=t.left,n=t.bottom,s=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(o=e.right,n=e.top,s=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(o=t.right,n=t.top,s=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=po(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[uo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(mo({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(fo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(go({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(mo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(bo({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>ho.getOffsetParent(e,xo):ho.getOffsetParent;vo(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:ei(Xt({},ho),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:n})=>{const s="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let n="",a="",l="",c="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?o:"",c=s?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":o,c=s?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",n="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",n="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:n,right:a,bottom:l,left:c,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return _t`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${wo({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${wo({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?_t`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function _o(e,t){return new Promise((o=>{e.addEventListener(t,(function n(s){s.target===e&&(e.removeEventListener(t,n),o())}))}))}function So(e,t,o){return new Promise((n=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,ei(Xt({},o),{duration:Ro()?0:o.duration}));s.addEventListener("cancel",n,{once:!0}),s.addEventListener("finish",n,{once:!0})}))}function Po(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Ro(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ao(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}$o.styles=[hi,ci],ti([Ut(".popup")],$o.prototype,"popup",2),ti([Ut(".popup__arrow")],$o.prototype,"arrowEl",2),ti([zt()],$o.prototype,"anchor",2),ti([zt({type:Boolean,reflect:!0})],$o.prototype,"active",2),ti([zt({reflect:!0})],$o.prototype,"placement",2),ti([zt({reflect:!0})],$o.prototype,"strategy",2),ti([zt({type:Number})],$o.prototype,"distance",2),ti([zt({type:Number})],$o.prototype,"skidding",2),ti([zt({type:Boolean})],$o.prototype,"arrow",2),ti([zt({attribute:"arrow-placement"})],$o.prototype,"arrowPlacement",2),ti([zt({attribute:"arrow-padding",type:Number})],$o.prototype,"arrowPadding",2),ti([zt({type:Boolean})],$o.prototype,"flip",2),ti([zt({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],$o.prototype,"flipFallbackPlacements",2),ti([zt({attribute:"flip-fallback-strategy"})],$o.prototype,"flipFallbackStrategy",2),ti([zt({type:Object})],$o.prototype,"flipBoundary",2),ti([zt({attribute:"flip-padding",type:Number})],$o.prototype,"flipPadding",2),ti([zt({type:Boolean})],$o.prototype,"shift",2),ti([zt({type:Object})],$o.prototype,"shiftBoundary",2),ti([zt({attribute:"shift-padding",type:Number})],$o.prototype,"shiftPadding",2),ti([zt({attribute:"auto-size"})],$o.prototype,"autoSize",2),ti([zt()],$o.prototype,"sync",2),ti([zt({type:Object})],$o.prototype,"autoSizeBoundary",2),ti([zt({attribute:"auto-size-padding",type:Number})],$o.prototype,"autoSizePadding",2),ti([zt({attribute:"hover-bridge",type:Boolean})],$o.prototype,"hoverBridge",2);const To=new Set,Do=new Map;let Lo,Eo="ltr",Oo="en";const Fo="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Fo){const e=new MutationObserver(Io);Eo=document.documentElement.dir||"ltr",Oo=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Bo(...e){e.map((e=>{const t=e.$code.toLowerCase();Do.has(t)?Do.set(t,Object.assign(Object.assign({},Do.get(t)),e)):Do.set(t,e),Lo||(Lo=e)})),Io()}function Io(){Fo&&(Eo=document.documentElement.dir||"ltr",Oo=document.documentElement.lang||navigator.language),[...To.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){To.add(this.host)}hostDisconnected(){To.delete(this.host)}dir(){return`${this.host.dir||Eo}`.toLowerCase()}lang(){return`${this.host.lang||Oo}`.toLowerCase()}getTranslationData(e){var t,o;const n=new Intl.Locale(e.replace(/_/g,"-")),s=null==n?void 0:n.language.toLowerCase(),r=null!==(o=null===(t=null==n?void 0:n.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:n,language:s,region:r,primary:Do.get(`${s}-${r}`),secondary:Do.get(s)}}exists(e,t){var o;const{primary:n,secondary:s}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||s&&s[e]||t.includeFallback&&Lo&&Lo[e])}term(e,...t){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let s;if(o&&o[e])s=o[e];else if(n&&n[e])s=n[e];else{if(!Lo||!Lo[e])return String(e);s=Lo[e]}return"function"==typeof s?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var zo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Bo(zo);var Mo=zo,Uo=class extends LocalizeController{};function Wo(e,t){const o=Xt({waitUntilFirstUpdate:!1},t);return(t,n)=>{const{update:s}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const s=t;if(e.has(s)){const t=e.get(s),r=this[s];t!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[n](t,r))}})),s.call(this,e)}}}Bo(Mo);var Ho=class extends pi{constructor(){super(),this.localize=new Uo(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Po(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Po(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Ao(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=ai(this,"tooltip.show",{dir:this.localize.dir()});await So(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Ao(this.body);const{keyframes:e,options:o}=ai(this,"tooltip.hide",{dir:this.localize.dir()});await So(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,_o(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_o(this,"sl-after-hide")}render(){return _t`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${wo({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Ho.styles=[hi,li],Ho.dependencies={"sl-popup":$o},ti([Ut("slot:not([name])")],Ho.prototype,"defaultSlot",2),ti([Ut(".tooltip__body")],Ho.prototype,"body",2),ti([Ut("sl-popup")],Ho.prototype,"popup",2),ti([zt()],Ho.prototype,"content",2),ti([zt()],Ho.prototype,"placement",2),ti([zt({type:Boolean,reflect:!0})],Ho.prototype,"disabled",2),ti([zt({type:Number})],Ho.prototype,"distance",2),ti([zt({type:Boolean,reflect:!0})],Ho.prototype,"open",2),ti([zt({type:Number})],Ho.prototype,"skidding",2),ti([zt()],Ho.prototype,"trigger",2),ti([zt({type:Boolean})],Ho.prototype,"hoist",2),ti([Wo("open",{waitUntilFirstUpdate:!0})],Ho.prototype,"handleOpenChange",1),ti([Wo(["content","distance","hoist","placement","skidding"])],Ho.prototype,"handleOptionsChange",1),ti([Wo("disabled")],Ho.prototype,"handleDisabledChange",1),ri("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),ri("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Ho.define("sl-tooltip");var Vo=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Go=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?No(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&Vo(t,o,r),r};ri("tooltip.show",null),ri("tooltip.hide",null);let qo=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return _t`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??Pt}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};qo.styles=He`
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
	`,Go([zt()],qo.prototype,"content",2),Go([zt({reflect:!0})],qo.prototype,"placement",2),Go([zt({type:Boolean})],qo.prototype,"disabled",2),Go([zt({type:Number})],qo.prototype,"distance",2),Go([zt({type:Boolean})],qo.prototype,"hoist",2),qo=Go([Ft("gl-tooltip")],qo);var jo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,Ko=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?Qo(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&jo(t,o,r),r};let Jo=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?_t`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?_t`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?_t`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:_t`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};Jo.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},Jo.styles=[Vt,He`
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
				${Ht}
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
		`],Ko([Ut(".control")],Jo.prototype,"control",2),Ko([zt({reflect:!0})],Jo.prototype,"appearance",2),Ko([zt({type:Boolean,reflect:!0})],Jo.prototype,"disabled",2),Ko([zt({reflect:!0})],Jo.prototype,"density",2),Ko([zt({type:Boolean,reflect:!0})],Jo.prototype,"full",2),Ko([zt()],Jo.prototype,"href",2),Ko([zt({reflect:!0})],Jo.prototype,"role",1),Ko([zt()],Jo.prototype,"tooltip",2),Jo=Ko([Ft("gl-button")],Jo);var Yo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,Xo=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?Zo(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&Yo(t,o,r),r};const en=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let tn=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};tn.styles=He`
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

		${We(Object.entries(en).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

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
	`,Xo([zt({reflect:!0})],tn.prototype,"icon",2),Xo([zt({reflect:!0})],tn.prototype,"modifier",2),Xo([zt({type:Number})],tn.prototype,"size",2),Xo([zt({reflect:!0})],tn.prototype,"flip",2),Xo([zt({reflect:!0})],tn.prototype,"rotate",2),tn=Xo([Ft("code-icon")],tn);var on=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.PastePatchFromClipboard="gitlens.pastePatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusConnectCloudIntegrations="gitlens.plus.cloudIntegrations.connect",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowFocusPage="gitlens.showFocusPage",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLaunchpadView="gitlens.showLaunchpadView",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWelcomePage="gitlens.showWelcomePage",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(on||{});$o.define("sl-popup");const nn=new WeakMap;function sn(e,t){return function(o,n,s){let r=nn.get(o.constructor);null==r&&nn.set(o.constructor,r=[]),r.push({method:s.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_s{emit(e,t,o){const n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(n),n}update(e){const t=nn.get(this.constructor);if(null!=t)for(const{keys:o,method:n,afterFirstUpdate:s}of t){if(s&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&n.call(this,t)}super.update(e)}}var rn=Object.defineProperty,an=Object.getOwnPropertyDescriptor,ln=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?an(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&rn(t,o,r),r};let cn=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=re(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const o=re(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ae(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,ae(this,"gl-popover-after-hide")}render(){return _t`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			arrow
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}};cn.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},cn.styles=He`
		:host {
			--hide-delay: 0ms;
			--show-delay: 500ms;

			display: contents;
		}

		.popover {
			--arrow-size: var(--sl-tooltip-arrow-size);
			--arrow-color: var(--sl-tooltip-background-color);
		}

		.popover::part(popup) {
			z-index: var(--sl-z-index-tooltip);
		}

		.popover::part(arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		.popover[placement^='top']::part(popup) {
			transform-origin: bottom;
		}

		.popover[placement^='bottom']::part(popup) {
			transform-origin: top;
		}

		.popover[placement^='left']::part(popup) {
			transform-origin: right;
		}

		.popover[placement^='right']::part(popup) {
			transform-origin: left;
		}

		.popover[data-current-placement^='top']::part(arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		.popover[data-current-placement^='bottom']::part(arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		.popover[data-current-placement^='left']::part(arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		.popover[data-current-placement^='right']::part(arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		.popover__body {
			display: block;
			width: fit-content;
			border: 1px solid var(--gl-tooltip-border-color);
			border-radius: var(--sl-tooltip-border-radius);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
			background-color: var(--sl-tooltip-background-color);
			font-family: var(--sl-tooltip-font-family);
			font-size: var(--sl-tooltip-font-size);
			font-weight: var(--sl-tooltip-font-weight);
			line-height: var(--sl-tooltip-line-height);
			text-align: start;
			white-space: normal;
			color: var(--sl-tooltip-color);
			padding: var(--sl-tooltip-padding);
			user-select: none;
			-webkit-user-select: none;
			max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
			/* max-height: var(--auto-size-available-height);
			overflow: auto; */
			pointer-events: all;
		}

		.popover[data-current-placement^='top'] .popover__body,
		.popover[data-current-placement^='bottom'] .popover__body {
			width: max-content;
		}

		/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
	`,ln([Ut("#popover")],cn.prototype,"body",2),ln([Ut("sl-popup")],cn.prototype,"popup",2),ln([zt({reflect:!0})],cn.prototype,"placement",2),ln([zt({type:Object})],cn.prototype,"anchor",2),ln([zt({reflect:!0,type:Boolean})],cn.prototype,"disabled",2),ln([zt({type:Number})],cn.prototype,"distance",2),ln([zt({reflect:!0,type:Boolean})],cn.prototype,"open",2),ln([zt({type:Number})],cn.prototype,"skidding",2),ln([zt()],cn.prototype,"trigger",2),ln([zt({type:Boolean})],cn.prototype,"hoist",2),ln([sn("open",{afterFirstUpdate:!0})],cn.prototype,"handleOpenChange",1),ln([sn(["distance","hoist","placement","skidding"])],cn.prototype,"handleOptionsChange",1),ln([sn("disabled")],cn.prototype,"handleDisabledChange",1),cn=ln([Ft("gl-popover")],cn);var hn=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,dn=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?pn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&hn(t,o,r),r};let un=class extends lit_element_s{constructor(){super(...arguments),this.type="info"}render(){if(!this.promo)return;const e=this.renderPromo(this.promo);return e?"link"===this.type?_t`<a
				class="link"
				href="${this.promo.command??"command:gitlens.plus.upgrade"}"
				title="${this.promo.commandTooltip}"
				>${e}</a
			>`:_t`<p class="promo">${e}</p>`:void 0}renderPromo(e){switch(e.key){case"pro50":return _t`<span class="content${"link"===this.type?Pt:" muted"}"
					>Limited-Time Sale: <b>Save 33% or more on your 1st seat of Pro.</b></span
				>`;case"launchpad":case"launchpad-extended":return _t`<span class="content${"link"===this.type?Pt:" muted"}"
					>Launchpad Sale: <b>Save 75% or more on GitLens Pro.</b></span
				>`}}};un.styles=[He`
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
		`],dn([zt({type:Object})],un.prototype,"promo",2),dn([zt({reflect:!0,type:String})],un.prototype,"type",2),un=dn([Ft("gl-promo")],un);var gn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,mn=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?fn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&gn(t,o,r),r};let bn=class extends lit_element_s{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:r(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return _t`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===n.VerificationRequired)return _t`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(o=this.subscription,"free"!==(s=o.plan.actual.id)&&"free+"!==s||this.cloud&&null!=this.subscription.account)return _t`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(1===t||3===t))return _t`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t,o,s;return this.cloud?_t`${e}<span class="badge-icon">☁️</span>`:e}renderPopoverHeader(){const e=_t`<span class="popup-title"
			>${this.preview?"Preview feature":"Pro feature"}${this.cloud?" ☁️":""}</span
		>`;return this.state===n.Paid?_t`<div class="popup-header">${e}</div>`:this.cloud?this.preview?_t`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require a paid plan in the future</span
					>
				</div>`:_t`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires a paid plan</span>
			</div>`:this.preview?_t`<div class="popup-header">
				${e}<span class="popup-subtitle">May require a paid plan in the future</span>
			</div>`:_t`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires a paid plan for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return Pt;let e;switch(this.state){case n.Paid:e=_t`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${vn(on.ShowAccountView,void 0)}"
							>${s(this.subscription?.plan.actual.id??o.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case n.VerificationRequired:e=_t`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${vn(on.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${vn(on.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case n.FreePlusInTrial:{const t=this.daysRemaining;e=_t`<p>
						You have
						<strong>${t<1?"<1 day":Y("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case n.FreePlusTrialExpired:e=_t`<p>
						Your Pro trial as ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(_t`<p>Please upgrade for full access to Pro features:</p>`)}`;break;case n.FreePlusTrialReactivationEligible:e=_t`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another 7 days!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${vn(on.PlusReactivateProTrial,this.source)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===n.FreeInPreviewTrial){const t=this.daysRemaining;e=_t`<p>
							You have
							<strong>${t<1?"<1 day":Y("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=_t`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return _t`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return _t`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${vn(on.PlusSignUp,this.source)}"
				>Start 7-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${vn(on.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){const t=c(this.state);return _t`<div class="actions">
			${e??Pt}
			<gl-button
				appearance="primary"
				density="tight"
				href="${vn(on.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo(t)}
		</div>`}renderPromo(e){return _t`<gl-promo .promo=${e}></gl-promo>`}};function vn(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}bn.styles=[Vt,Nt,He`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus {
				${We(Wt)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],mn([zt({type:Boolean})],bn.prototype,"cloud",2),mn([zt({reflect:!0})],bn.prototype,"placement",2),mn([zt({type:Boolean})],bn.prototype,"preview",2),mn([zt({type:Object})],bn.prototype,"source",2),mn([zt({attribute:!1})],bn.prototype,"subscription",2),bn=mn([Ft("gl-feature-badge")],bn);class HomeApp extends App{constructor(){super("HomeApp")}get blockRepoFeatures(){const{repositories:{openCount:e,hasUnsafe:t,trusted:o}}=this.state;return!o||0===e||t}onInitialize(){this.state=this.getState()??this.state,this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(se.on("[data-action]","click",((e,t)=>this.onDataActionClicked(e,t))),se.on('[data-requires="repo"]',"click",((e,t)=>this.onRepoFeatureClicked(e,t))),se.on("[data-section-toggle]","click",((e,t)=>this.onSectionToggleClicked(e,t))),se.on("[data-section-expand]","click",((e,t)=>this.onSectionExpandClicked(e,t)))),e}onMessageReceived(e){switch(!0){case v.is(e):this.state.repositories=e.params,this.state.timestamp=Date.now(),this.setState(this.state),this.updateNoRepo();break;case w.is(e):this.state.subscription=e.params.subscription,this.setState(this.state),this.updatePromos(),this.updateSourceAndSubscription();break;case x.is(e):this.state.orgSettings=e.params.orgSettings,this.setState(this.state),this.updateOrgSettings();break;case y.is(e):this.state.hasAnyIntegrationConnected=e.params.hasAnyIntegrationConnected,this.setState(this.state),this.updateIntegrations();break;default:super.onMessageReceived?.(e)}}onRepoFeatureClicked(e,t){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}onDataActionClicked(e,t){const o=t.dataset.action;this.onActionClickedCore(o)}onActionClickedCore(e){e?.startsWith("command:")&&this.sendCommand(u,{command:e.slice(8)})}onSectionToggleClicked(e,t){e.stopImmediatePropagation();"walkthrough"===t.dataset.sectionToggle&&this.updateCollapsedSections(!this.state.walkthroughCollapsed)}onSectionExpandClicked(e,t){"walkthrough"===t.dataset.sectionExpand&&this.updateCollapsedSections(!1)}updateNoRepo(){const{repositories:{openCount:e,hasUnsafe:t,trusted:o}}=this.state,n=document.getElementById("header");if(!o)return n.hidden=!1,yn("untrusted-alert",!0),yn("no-repo-alert",!1),void yn("unsafe-repo-alert",!1);yn("untrusted-alert",!1);const s=0===e;yn("no-repo-alert",s&&!t),yn("unsafe-repo-alert",t),n.hidden=!s&&!t}updatePromos(){const e=c(this.state.subscription.state);document.getElementById("promo").promo=e}updateOrgSettings(){const{orgSettings:{drafts:e}}=this.state;for(const t of document.querySelectorAll('[data-org-requires="drafts"]'))yn(t,e)}updateSourceAndSubscription(){const{subscription:e}=this.state,t=document.querySelectorAll("gl-feature-badge");for(const o of t)o.source={source:"home",detail:"badge"},o.subscription=e}updateCollapsedSections(e=this.state.walkthroughCollapsed){this.state.walkthroughCollapsed=e,this.setState({walkthroughCollapsed:e}),document.getElementById("section-walkthrough").classList.toggle("is-collapsed",e),this.sendCommand(m,{section:"walkthrough",collapsed:e})}updateIntegrations(){const{hasAnyIntegrationConnected:e}=this.state,t=document.querySelectorAll("[data-integrations]"),o=e?"connected":"none";for(const e of t)yn(e,e.dataset.integrations===o)}updateState(){this.updateNoRepo(),this.updatePromos(),this.updateSourceAndSubscription(),this.updateOrgSettings(),this.updateCollapsedSections(),this.updateIntegrations()}}function yn(e,t){let o;o="string"==typeof e?document.getElementById(e):e,null!=o&&(t?(o.removeAttribute("aria-hidden"),o.removeAttribute("hidden")):(o.setAttribute("aria-hidden",""),o?.setAttribute("hidden","")))}new HomeApp;var wn=t.b;export{wn as HomeApp};