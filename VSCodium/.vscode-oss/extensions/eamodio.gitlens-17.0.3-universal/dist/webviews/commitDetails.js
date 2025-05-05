let e,t,o,r,n,a;var l,c,d,h,p,u,g,f={602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},6047:(e,t,o)=>{o(602)}},m={};function b(e){var t=m[e];if(void 0!==t)return t.exports;var o=m[e]={exports:{}};return f[e](o,o.exports,b),o.exports}b.d=(e,t)=>{for(var o in t)b.o(t,o)&&!b.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Object.defineProperty(b,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});var v={};b.d(v,{L:()=>CommitDetailsApp});let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,o,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=o,this.subscribe=r??!1}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let i=class i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:o}]of this.subscriptions)t.has(e)||(t.add(e),o.dispatchEvent(new context_request_event_s(this.context,o,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function y(e,t,o){let r,n,a,l,c,d,h,p,u,g,f=0;null!=o&&({edges:d,maxWait:h,signal:p,aggregator:u}=o);let m="leading"===(d??="trailing")||"both"===d,b="trailing"===d||"both"===d;function v(){if(null!=r){f=Date.now();let t=r,o=g;return g=void 0,r=void 0,a=e.apply(o,t)}}function y(){null!=l&&(clearTimeout(l),l=void 0)}function w(){null!=c&&(clearTimeout(c),c=void 0)}function k(){y(),w(),g=void 0,r=void 0,n=void 0,f=0}function x(...e){if(p?.aborted)return;let o=Date.now();null!=u&&null!=r?r=u(r,e):(g=this,r=e);let d=null==l&&null==c;n=o,y();let w=Date.now();if(n=w,l=setTimeout(()=>{l=void 0,function(e){let o=e-(n??0),r=e-f;return null==n||o>=t||o<0||null!=h&&r>=h}(Date.now())&&b&&v(),k()},t),null!=h&&!c){let e=h-(w-f);e>0?c=setTimeout(()=>{c=void 0,b&&null!=r&&v(),f=Date.now()},e):(b&&null!=r&&v(),k())}return m&&d?v():a}return x.cancel=k,x.flush=function(){return y(),w(),v()},x.pending=function(){return null!=l||null!=c},p?.addEventListener("abort",k,{once:!0}),x}let IpcCall=class IpcCall{constructor(e,t,o=!1,r=!1){this.scope=e,this.reset=o,this.pack=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,o,r){super(e,t,o,r),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let w=new IpcCommand("core","webview/ready"),k=new IpcCommand("core","webview/focus/changed"),x=new IpcCommand("core","command/execute"),_=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let C=new IpcCommand("core","telemetry/sendEvent"),S=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let A=new IpcCommand("core","webview/focus/didChange");function E(e){let t=.001*performance.now(),o=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(r-=e[1])<0&&(o--,r+=1e9)),[o,r]}new IpcNotification("core","configuration/didChange");let P=/\(([\s\S]*)\)/,R=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,T=/\s?=.*$/,O=0x40000000-1;function D(){let e=0;return{get current(){return e},next:function(){return e===O&&(e=0),++e}}}let L=D(),M=new Map;function I(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function B(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let o=t?L.current:void 0,r=L.next();return{scopeId:r,prevScopeId:o,prefix:`${I(r,o)} ${e}`}}b(6047);var N=((l=N||{})[l.Hash=35]="Hash",l[l.Slash=47]="Slash",l[l.Digit0=48]="Digit0",l[l.Digit1=49]="Digit1",l[l.Digit2=50]="Digit2",l[l.Digit3=51]="Digit3",l[l.Digit4=52]="Digit4",l[l.Digit5=53]="Digit5",l[l.Digit6=54]="Digit6",l[l.Digit7=55]="Digit7",l[l.Digit8=56]="Digit8",l[l.Digit9=57]="Digit9",l[l.Backslash=92]="Backslash",l[l.A=65]="A",l[l.B=66]="B",l[l.C=67]="C",l[l.D=68]="D",l[l.E=69]="E",l[l.F=70]="F",l[l.Z=90]="Z",l[l.a=97]="a",l[l.b=98]="b",l[l.c=99]="c",l[l.d=100]="d",l[l.e=101]="e",l[l.f=102]="f",l[l.z=122]="z",l),j=((c=j||{}).AngleBracketLeftHeavy="❰",c.AngleBracketRightHeavy="❱",c.ArrowBack="↩",c.ArrowDown="↓",c.ArrowDownUp="⇵",c.ArrowDropRight="⤷",c.ArrowHeadRight="➤",c.ArrowLeft="←",c.ArrowLeftDouble="⇐",c.ArrowLeftRight="↔",c.ArrowLeftRightDouble="⇔",c.ArrowLeftRightDoubleStrike="⇎",c.ArrowLeftRightLong="⟷",c.ArrowRight="→",c.ArrowRightDouble="⇒",c.ArrowRightHollow="⇨",c.ArrowUp="↑",c.ArrowUpDown="⇅",c.ArrowUpRight="↗",c.ArrowsHalfLeftRight="⇋",c.ArrowsHalfRightLeft="⇌",c.ArrowsLeftRight="⇆",c.ArrowsRightLeft="⇄",c.Asterisk="∗",c.Bullseye="◎",c.Check="✔",c.Dash="—",c.Dot="•",c.Ellipsis="…",c.EnDash="–",c.Envelope="✉",c.EqualsTriple="≡",c.Flag="⚑",c.FlagHollow="⚐",c.MiddleEllipsis="⋯",c.MuchLessThan="≪",c.MuchGreaterThan="≫",c.Pencil="✎",c.Space=" ",c.SpaceThin=" ",c.SpaceThinnest=" ",c.SquareWithBottomShadow="❏",c.SquareWithTopShadow="❐",c.Warning="⚠",c.ZeroWidthSpace="​",c);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var U=((d=U||{}).File="file",d.Git="git",d.GitHub="github",d.GitLens="gitlens",d.PRs="pr",d.Remote="vscode-remote",d.Vsls="vsls",d.VslsScc="vsls-scc",d.Virtual="vscode-vfs",d);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let F="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",H=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${F}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${F}`,graph:`https://gitkraken.com/solutions/commit-graph?${F}`,launchpad:`https://gitkraken.com/solutions/launchpad?${F}`,platform:`https://gitkraken.com/devex?${F}`,pricing:`https://gitkraken.com/gitlens/pricing?${F}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${F}`,security:`https://help.gitkraken.com/gitlens/security?${F}`,workspaces:`https://gitkraken.com/solutions/workspaces?${F}`,cli:`https://gitkraken.com/cli?${F}`,browserExtension:`https://gitkraken.com/browser-extension?${F}`,desktop:`https://gitkraken.com/git-client?${F}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${F}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${F}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${F}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${F}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${F}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${F}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${F}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${F}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${F}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${F}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${F}#streamline-collaboration`}),q=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,V=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,W=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],G=new Map,K=new Map,Z=["th","st","nd","rd"];function Y(t,o){null==t&&(t="decimal");let r=`${o??""}:${t}`,n=K.get(r);if(null==n){let a={localeMatcher:"best fit",style:t};n=new Intl.NumberFormat(null==o?e:"system"===o?void 0:[o],a),K.set(r,n)}return n.format}let{fromCharCode:J}=String;function X(e){let[t,o]=E(e);return 1e3*t+Math.floor(o/1e6)}function ee(e,t,o){let n;if(null==o)return r??=Y(),`${r(t)} ${e}${1===t?"":"s"}`;let a=1===t?e:o.plural??`${e}s`;return o.only?a:(0===t?n=o.zero??t:!1===o.format?n=t:null!=o.format?n=o.format(t):(r??=Y(),n=r(t)),`${n}${o.infix??" "}${a}`)}new TextEncoder,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let ei=Symbol("logInstanceNameFn");function eo(e,t=!1){let o,r,n,a,l,c=0,d=!1,h=!1,p=!0;null!=e&&({args:o,if:r,enter:n,exit:a,prefix:l,logThreshold:c=0,scoped:d=!0,singleLine:h=!1,timed:p=!0}=e),c>0&&(h=!0,p=!0),p&&(d=!0);let u=es.isDebugging,g=t?es.debug:es.log,f=u?"debug":"info";return(e,t,m)=>{let b,v;if("function"==typeof m.value?(b=m.value,v="value"):"function"==typeof m.get&&(b=m.get,v="get"),null==b||null==v)throw Error("Not supported");let y=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(R,"")||t).slice(0,t.indexOf("{"))).indexOf("("),r=t.indexOf(")");o=o>=0?o+1:0,r=r>0?r:t.indexOf("="),t=t.slice(o,r),t=`(${t})`;let n=P.exec(t);return null!=n?n[1].split(",").map(e=>e.trim().replace(T,"")):[]}(b):[];m[v]=function(...e){var m,v;let w,k;if(!u&&!es.enabled(f)||null!=r&&!r.apply(this,e))return b.apply(this,e);let x=L.current,_=L.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(e.prototype?.constructor==null)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"",r=o.indexOf("_");return o=-1===r?o:o.substring(r+1),t?.[ei]!=null&&(o=t[ei](e,o)),o}(this):void 0,S=C?d?`${I(_,x)} ${C}.${t}`:`${C}.${t}`:t;null!=l&&(S=l({id:_,instance:this,instanceName:C??"",name:t,prefix:S},...e)),d&&(m={scopeId:_,prevScopeId:x,prefix:S},m={prevScopeId:L.current,...m},M.set(_,m),w=m);let A=null!=n?n(...e):"";if(!1===o||0===e.length)k="",h||g.call(es,`${S}${A}`);else{let t,r,n,a;k="";let l=-1;for(a of e){if(r=y[++l],null!=(t=o?.[l])){if("boolean"==typeof t)continue;if(k.length>0&&(k+=", "),"string"==typeof t){k+=t;continue}n=String(t(a))}else k.length>0&&(k+=", "),n=es.toLoggable(a);k+=r?`${r}=${n}`:n}h||g.call(es,k?`${S}${A}(${k})`:`${S}${A}`)}if(h||p||null!=a){let t,o=p?E():void 0,r=e=>{let t=void 0!==o?` [${X(o)}ms]`:"";if(h?es.error(e,k?`${S}${A}(${k})`:`${S}${A}`,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`):es.error(e,S,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`),d)M.delete(_)};try{t=b.apply(this,e)}catch(e){throw r(e),e}let n=e=>{let t,r,n,l;if(null!=o?(t=X(o))>500?(r=es.warn,n=` [*${t}ms] (slow)`):(r=g,n=` [${t}ms]`):(n="",r=g),null!=a)if("function"==typeof a)try{l=a(e)}catch(e){l=`@log.exit error: ${e}`}else!0===a&&(l=`returned ${es.toLoggable(e)}`);else w?.exitFailed?(l=w.exitFailed,r=(e,...t)=>es.error(null,e,...t)):l="completed";if(h?(0===c||t>c)&&r.call(es,k?`${S}${A}(${k}) ${l}${w?.exitDetails||""}${n}`:`${S}${A} ${l}${w?.exitDetails||""}${n}`):r.call(es,k?`${S}(${k}) ${l}${w?.exitDetails||""}${n}`:`${S} ${l}${w?.exitDetails||""}${n}`),d)M.delete(_)};return null!=t&&null!=(v=t)&&(v instanceof Promise||"function"==typeof v?.then)?t.then(n,r):n(t),t}return b.apply(this,e)}}}var er=((h=er||{})[h.Off=0]="Off",h[h.Error=1]="Error",h[h.Warn=2]="Warn",h[h.Info=3]="Info",h[h.Debug=4]="Debug",h);let en=["accessToken","password","token"],es=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){if(null!=e.sanitizeKeys)for(let t of en)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(en);this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=ea(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=ea(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let r;if(!(this.level<1)||this.isDebugging){if(null==(r=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(r=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,(e,o)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(o=t(e,o)),this.provider?.sanitizer!=null&&(o=this.provider.sanitizer(e,o)),o))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function ea(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let el={enabled:e=>es.enabled(e)||es.isDebugging,log:(e,t,o,...r)=>{switch(e){case"error":es.error(void 0,t,o,...r);break;case"warn":es.warn(t,o,...r);break;case"info":es.log(t,o,...r);break;default:es.debug(t,o,...r)}}};let LoggerContext=class LoggerContext{constructor(e){this.scope=B(e,void 0),es.configure({name:e,createChannel:function(e){return{name:e,appendLine:es.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?es.log(this.scope,e,...t):es.log(e,t.shift(),...t)}};let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e}async getApplicablePromo(e){let t=this._promos.get(e);return null==t&&(t=this.ipc.sendRequest(_,{location:e}).then(e=>e.promo,()=>void 0),this._promos.set(e,t)),await t}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(C,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};function ec(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function ed(e,t){return new Promise(o=>{e.addEventListener(t,function r(n){n.target===e&&(e.removeEventListener(t,r),o())})})}(u||(u={})).on=function(e,t,o,r){let n=!1;if("string"==typeof e){let a=function(t){let r=t?.target?.closest(e);null!=r&&o(t,r)};return document.addEventListener(t,a,r??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,a,r??!0))}}}let a=function(e){o(e,this)};return e.addEventListener(t,a,r??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,a,r??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...o){let r;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:B(e??"",!1),r="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??el,this._time=E(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=E(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=E(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t){this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);return}let[o,r]=E(this._time),n=1e3*o+Math.floor(r/1e6),a=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${n}ms]${e?.suffix??""}`)}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);let r=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=Emitter._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let eh={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new events_Node(e);if(this._first===events_Node.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(o))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?eh:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var ep=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,eg=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?eu(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ep(t,o,a),a};function ef(){return n??=acquireVsCodeApi()}let em=D();function eb(){return`webview:${em.next()}`}let ev=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=ef(),this._disposable=u.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=M.get(L.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){let r=function(e,t,...o){return(t?.provider??el).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(B(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),r?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null!=o.completionId){var r,n;let e=(r=o.method,n=o.completionId,`${r}|${n}`);this._pendingHandlers.get(e)?.(o);return}this._onReceiveMessage.fire(o)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let o=e[t];null!=o&&"object"==typeof o&&"__ipc"in o&&"promise"===o.__ipc&&"id"in o&&"string"==typeof o.id&&"method"in o&&"string"==typeof o.method?e[t]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(e,t){let o=eb();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let o=eb(),r=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),r}getResponsePromise(e,t){return new Promise((o,r)=>{var n,a;let l,c=(n=e,a=t,`${n}|${a}`);function d(){clearTimeout(l),l=void 0,this._pendingHandlers.delete(c)}l=setTimeout(()=>{d.call(this),r(Error(`Timed out waiting for completion of ${c}`))},(es.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(d.call(this),e.method===S.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>r(Error(t.reason))):queueMicrotask(()=>o(t.value))}else queueMicrotask(()=>o(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};eg([eo({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],ev.prototype,"onMessageReceived",1),eg([eo({args:{0:e=>e.method,1:!1}},!0)],ev.prototype,"sendCommand",1),eg([eo({args:{0:e=>e.method,1:!1,2:!1}},!0)],ev.prototype,"sendRequest",1),eg([eo({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],ev.prototype,"postMessage",1),ev=eg([(p=(e,t)=>`${e.appName}(${t})`,e=>{e[ei]=p})],ev);function ey(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}let RGBA=class RGBA{constructor(e,t,o,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=ey(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,o,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ey(Math.max(Math.min(1,t),0),3),this.l=ey(Math.max(Math.min(1,o),0),3),this.a=ey(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,n=e.a,a=Math.max(t,o,r),l=Math.min(t,o,r),c=0,d=0,h=(l+a)/2,p=a-l;if(p>0){switch(d=Math.min(h<=.5?p/(2*h):p/(2-2*h),1),a){case t:c=(o-r)/p+6*(o<r);break;case o:c=(r-t)/p+2;break;case r:c=(t-o)/p+4}c*=60,c=Math.round(c)}return new HSLA(c,d,h,n)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,r,n=e.h/360,{s:a,l,a:c}=e;if(0===a)t=o=r=l;else{let e=l<.5?l*(1+a):l+a-l*a,c=2*l-e;t=HSLA._hue2rgb(c,e,n+1/3),o=HSLA._hue2rgb(c,e,n),r=HSLA._hue2rgb(c,e,n-1/3)}return new RGBA(Math.round(255*t),Math.round(255*o),Math.round(255*r),c)}};let HSVA=class HSVA{constructor(e,t,o,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ey(Math.max(Math.min(1,t),0),3),this.v=ey(Math.max(Math.min(1,o),0),3),this.a=ey(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t,o=e.r/255,r=e.g/255,n=e.b/255,a=Math.max(o,r,n),l=a-Math.min(o,r,n);return new HSVA(Math.round(60*(0===l?0:a===o?((r-n)/l%6+6)%6:a===r?(n-o)/l+2:(o-r)/l+4)),0===a?0:l/a,a,e.a)}static toRGBA(e){let{h:t,s:o,v:r,a:n}=e,a=r*o,l=a*(1-Math.abs(t/60%2-1)),c=r-a,[d,h,p]=[0,0,0];return t<60?(d=a,h=l):t<120?(d=l,h=a):t<180?(h=a,p=l):t<240?(h=l,p=a):t<300?(d=l,p=a):t<=360&&(d=a,p=l),new RGBA(d=Math.round((d+c)*255),h=Math.round((h+c)*255),p=Math.round((p+c)*255),n)}};function ew(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(ew(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return ey(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:o,b:r,a:n}=this.rgba;return new Color(new RGBA(t,o,r,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,o=this.rgba.a,r=t.a,n=o+r*(1-o);if(n<1e-6)return Color.transparent;let a=this.rgba.r*o/n+t.r*r*(1-o)/n;return new Color(new RGBA(a,this.rgba.g*o/n+t.g*r*(1-o)/n,this.rgba.b*o/n+t.b*r*(1-o)/n,n))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:o,b:r,a:n}=this.rgba;return new Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-o),e.rgba.b-n*(e.rgba.b-r),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let o=1-e.rgba.a;return new Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${ek(e.rgba.r)}${ek(e.rgba.g)}${ek(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(n-r)/n,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(r-n)/r,e.darken(o)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function ek(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let ex=new Emitter,e$=ex.event;function e_(e){let t=document.documentElement,o=window.getComputedStyle(t),r=document.body.classList,n=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),a=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),l=ew("--vscode-editor-background",o),c=ew("--vscode-editor-foreground",o);return c||(c=ew("--vscode-foreground",o)),{colors:{background:l,foreground:c},computedStyle:o,isLightTheme:n,isHighContrastTheme:a,isInitializing:null==e}}let App=class App{constructor(e){this.appName=e;let t=[],o=e_();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(e$(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=ef(),this._hostIpc=new ev(this.appName),t.push(this._hostIpc),this._promos=new PromosContext(this._hostIpc),t.push(this._promos),this._telemetry=new TelemetryContext(this._hostIpc),t.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"promos",initialValue:this._promos}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){let e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){let e=new MutationObserver(e=>{ex.fire(e_(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame(()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage(e=>{!0===A.is(e)?window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur")):this.onMessageReceived(e)})),this.sendCommand(w,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),t.push(u.on(window,"pagehide",()=>{t?.forEach(e=>e.dispose()),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=void 0})),t.push(u.on(window,"gl-telemetry-fired",e=>{this._telemetry.sendEvent(e.detail)})),this.log("opened")}bind(){document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let e=y(e=>{this.sendCommand(k,e)},150);this.bindDisposables.push(u.on(document,"focusin",t=>{let o=t.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==o)&&(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))}),u.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))}))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}};var eC={408:(e,t)=>{var o=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),f=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function y(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||m}function w(){}function k(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=y.prototype;var x=k.prototype=new w;x.constructor=k,b(x,y.prototype),x.isPureReactComponent=!0;var _=Array.isArray,C=Object.prototype.hasOwnProperty,S={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,a={},l=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,n)&&!A.hasOwnProperty(n)&&(a[n]=t[n]);var d=arguments.length-2;if(1===d)a.children=r;else if(1<d){for(var h=Array(d),p=0;p<d;p++)h[p]=arguments[p+2];a.children=h}if(e&&e.defaultProps)for(n in d=e.defaultProps)void 0===a[n]&&(a[n]=d[n]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:S.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function T(e,t){var o,r;return"object"==typeof e&&null!==e&&null!=e.key?(o=""+e.key,r={"=":"=0",":":"=2"},"$"+o.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function O(e,t,n){if(null==e)return e;var a=[],l=0;return function e(t,n,a,l,c){var d,h,p,u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var g=!1;if(null===t)g=!0;else switch(u){case"string":case"number":g=!0;break;case"object":switch(t.$$typeof){case o:case r:g=!0}}if(g)return c=c(g=t),t=""===l?"."+T(g,0):l,_(c)?(a="",null!=t&&(a=t.replace(R,"$&/")+"/"),e(c,n,a,"",function(e){return e})):null!=c&&(P(c)&&(d=c,h=a+(!c.key||g&&g.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+t,c={$$typeof:o,type:d.type,key:h,ref:d.ref,props:d.props,_owner:d._owner}),n.push(c)),1;if(g=0,l=""===l?".":l+":",_(t))for(var m=0;m<t.length;m++){var b=l+T(u=t[m],m);g+=e(u,n,a,b,c)}else if("function"==typeof(b=null===(p=t)||"object"!=typeof p?null:"function"==typeof(p=f&&p[f]||p["@@iterator"])?p:null))for(t=b.call(t),m=0;!(u=t.next()).done;)g+=e(u=u.value,n,a,b=l+T(u,m++),c);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return g}(e,a,"","",function(e){return t.call(n,e,l++)}),a}function D(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},M={transition:null};t.Children={map:O,forEach:function(e,t,o){O(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=n,t.Profiler=l,t.PureComponent=k,t.StrictMode=a,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:M,ReactCurrentOwner:S},t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=b({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(h in t)C.call(t,h)&&!A.hasOwnProperty(h)&&(n[h]=void 0===t[h]&&void 0!==d?d[h]:t[h])}var h=arguments.length-2;if(1===h)n.children=r;else if(1<h){d=Array(h);for(var p=0;p<h;p++)d[p]=arguments[p+2];n.children=d}return{$$typeof:o,type:e.type,key:a,ref:l,props:n,_owner:c}},t.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:g,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,o){return L.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,o){return L.current.useReducer(e,t,o)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return L.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return L.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},eS={};function eA(e){var t=eS[e];if(void 0!==t)return t.exports;var o=eS[e]={exports:{}};return eC[e](o,o.exports,eA),o.exports}eA.d=(e,t)=>{for(var o in t)eA.o(t,o)&&!eA.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},eA.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var eE={};(()=>{let e,t,o,r,n,a;eA.d(eE,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>td,ud:()=>tg,wt:()=>tf,ne:()=>tb,Ku:()=>tw,FU:()=>t$,XO:()=>tL,Ze:()=>tM,K$:()=>tz,cX:()=>tq,Js:()=>tV,J9:()=>tW,si:()=>tR,sg:()=>tK,hW:()=>tZ,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>function e(...t){t.forEach(t=>{t.elementName&&!customElements.get(t.elementName)&&(customElements.define(t.elementName,t),t.components&&t.components.length>0&&e(...t.components))})},WV:()=>eb,h4:()=>em,kZ:()=>ef});let l=globalThis,c=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),h=new WeakMap;let s=class s{constructor(e,t,o){if(this._$cssResult$=!0,o!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(c&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=h.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&h.set(t,e))}return e}toString(){return this.cssText}};let p=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]),e,d),u=(e,t)=>{if(c)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),r=l.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}},g=c?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,o="";for(let t of e.cssRules)o+=t.cssText;return new s("string"==typeof(t=o)?t:t+"",void 0,d)})(e):e,{is:f,defineProperty:m,getOwnPropertyDescriptor:b,getOwnPropertyNames:v,getOwnPropertySymbols:y,getPrototypeOf:w}=Object,k=globalThis,x=k.trustedTypes,_=x?x.emptyScript:"",C=k.reactiveElementPolyfillSupport,S=(e,t)=>e,A={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},E=(e,t)=>!f(e,t),P={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),k.litPropertyMetadata??=new WeakMap;let $=class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=P){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&m(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){let{get:r,set:n}=b(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){let a=r?.call(this);n.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??P}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;let e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){let e=this.properties;for(let t of[...v(e),...y(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(g(o));else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){let n=(void 0!==o.converter?.toAttribute?o.converter:A).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=o.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:A;this._$Em=r,this[r]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,r=!1,n){if(void 0!==e){if(!((o??=this.constructor.getPropertyOptions(e)).hasChanged??E)(r?n:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[S("elementProperties")]=new Map,$[S("finalized")]=new Map,C?.({ReactiveElement:$}),(k.reactiveElementVersions??=[]).push("2.0.0");let R=globalThis,T=R.trustedTypes,O=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,D="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,M="?"+L,I=`<${M}>`,B=document,N=()=>B.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,F=e=>U(e)||"function"==typeof e?.[Symbol.iterator],H="[ 	\n\f\r]",q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,W=/>/g,G=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,Z=/"/g,Y=/^(?:script|style|textarea|title)$/i,J=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),X=J(1),ee=(J(2),Symbol.for("lit-noChange")),ei=Symbol.for("lit-nothing"),eo=new WeakMap,er=B.createTreeWalker(B,129);function en(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==O?O.createHTML(t):t}let es=(e,t)=>{let o=e.length-1,r=[],n,a=2===t?"<svg>":"",l=q;for(let t=0;t<o;t++){let o=e[t],c,d,h=-1,p=0;for(;p<o.length&&(l.lastIndex=p,null!==(d=l.exec(o)));)p=l.lastIndex,l===q?"!--"===d[1]?l=V:void 0!==d[1]?l=W:void 0!==d[2]?(Y.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=G):void 0!==d[3]&&(l=G):l===G?">"===d[0]?(l=n??q,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?G:'"'===d[3]?Z:K):l===Z||l===K?l=G:l===V||l===W?l=q:(l=G,n=void 0);let u=l===G&&e[t+1].startsWith("/>")?" ":"";a+=l===q?o+I:h>=0?(r.push(c),o.slice(0,h)+D+o.slice(h)+L+u):o+L+(-2===h?t:u)}return[en(e,a+(e[o]||"<?>")+(2===t?"</svg>":"")),r]};let Q=class Q{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,a=0,l=e.length-1,c=this.parts,[d,h]=es(e,t);if(this.el=Q.createElement(d,o),er.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=er.nextNode())&&c.length<l;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(D)){let t=h[a++],o=r.getAttribute(e).split(L),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:n,name:l[2],strings:o,ctor:"."===l[1]?it:"?"===l[1]?rt:"@"===l[1]?st:nt}),r.removeAttribute(e)}else e.startsWith(L)&&(c.push({type:6,index:n}),r.removeAttribute(e));if(Y.test(r.tagName)){let e=r.textContent.split(L),t=e.length-1;if(t>0){r.textContent=T?T.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],N()),er.nextNode(),c.push({type:2,index:++n});r.append(e[t],N())}}}else if(8===r.nodeType)if(r.data===M)c.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(L,e+1));)c.push({type:7,index:n}),e+=L.length-1}n++}}static createElement(e,t){let o=B.createElement("template");return o.innerHTML=e,o}};function ea(e,t,o=e,r){if(t===ee)return t;let n=void 0!==r?o._$Co?.[r]:o._$Cl,a=j(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,o,r),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(t=ea(e,n._$AS(e,t.values),n,r)),t}let et=class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??B).importNode(t,!0);er.currentNode=r;let n=er.nextNode(),a=0,l=0,c=o[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new ot(n,n.nextSibling,this,e):1===c.type?t=new c.ctor(n,c.name,c.strings,this,e):6===c.type&&(t=new at(n,this,e)),this._$AV.push(t),c=o[++l]}a!==c?.index&&(n=er.nextNode(),a++)}return er.currentNode=B,r}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let ot=class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=ei,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){j(e=ea(this,e,t))?e===ei||null==e||""===e?(this._$AH!==ei&&this._$AR(),this._$AH=ei):e!==this._$AH&&e!==ee&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):F(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ei&&j(this._$AH)?this._$AA.nextSibling.data=e:this.$(B.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(en(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new et(r,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=eo.get(e.strings);return void 0===t&&eo.set(e.strings,t=new Q(e)),t}T(e){U(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,r=0;for(let n of e)r===t.length?t.push(o=new ot(this.k(N()),this.k(N()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let nt=class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,n){this.type=1,this._$AH=ei,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ei}_$AI(e,t=this,o,r){let n=this.strings,a=!1;if(void 0===n)(a=!j(e=ea(this,e,t,0))||e!==this._$AH&&e!==ee)&&(this._$AH=e);else{let r,l,c=e;for(e=n[0],r=0;r<n.length-1;r++)(l=ea(this,c[o+r],t,r))===ee&&(l=this._$AH[r]),a||=!j(l)||l!==this._$AH[r],l===ei?e=ei:e!==ei&&(e+=(l??"")+n[r+1]),this._$AH[r]=l}a&&!r&&this.j(e)}j(e){e===ei?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let it=class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ei?void 0:e}};let rt=class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ei)}};let st=class st extends nt{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){if((e=ea(this,e,t,0)??ei)===ee)return;let o=this._$AH,r=e===ei&&o!==ei||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==ei&&(o===ei||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let at=class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ea(this,e)}};let el=R.litHtmlPolyfillSupport;el?.(Q,ot),(R.litHtmlVersions??=[]).push("3.0.0");let ct=class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let r=o?.renderBefore??t,n=r._$litPart$;if(void 0===n){let e=o?.renderBefore??null;r._$litPart$=n=new ot(t.insertBefore(N(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ee}};ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});let ec=globalThis.litElementPolyfillSupport;ec?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");let ed={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:E},eh=(e=ed,t,o)=>{let{kind:r,metadata:n}=o,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let n=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===r){let{name:r}=o;return function(o){let n=this[r];t.call(this,o),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)};function ep(e){return(t,o)=>"object"==typeof o?eh(e,t,o):((e,t,o)=>{let r=t.hasOwnProperty(o);return t.constructor.createProperty(o,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}let eu=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function eg(e,t){return(o,r,n)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:l}="object"==typeof r?o:n??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eu(o,r,{get(){if(t){let t=e.call(this);return void 0===t&&(t=a(this),l.call(this,t)),t}return a(this)}})}return eu(o,r,{get(){return a(this)}})}}let gt=class gt extends ct{};let ef=p`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,em=p``,eb=p`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,ev=Math.min,ey=Math.max,ew=Math.round,ek=(Math.floor,e=>({x:e,y:e})),ex={left:"right",right:"left",bottom:"top",top:"bottom"},e$={start:"end",end:"start"};function e_(e,t){return"function"==typeof e?e(t):e}function eC(e){return e.split("-")[0]}function eS(e){return e.split("-")[1]}function eP(e){return"x"===e?"y":"x"}function eR(e){return"y"===e?"height":"width"}function eT(e){return["top","bottom"].includes(eC(e))?"y":"x"}function eO(e){return e.replace(/start|end/g,e=>e$[e])}function eD(e){return e.replace(/left|right|bottom|top/g,e=>ex[e])}function eL(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function eM(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function ez(e,t,o){let r,{reference:n,floating:a}=e,l=eT(t),c=eP(eT(t)),d=eR(c),h=eC(t),p="y"===l,u=n.x+n.width/2-a.width/2,g=n.y+n.height/2-a.height/2,f=n[d]/2-a[d]/2;switch(h){case"top":r={x:u,y:n.y-a.height};break;case"bottom":r={x:u,y:n.y+n.height};break;case"right":r={x:n.x+n.width,y:g};break;case"left":r={x:n.x-a.width,y:g};break;default:r={x:n.x,y:n.y}}switch(eS(t)){case"start":r[c]-=f*(o&&p?-1:1);break;case"end":r[c]+=f*(o&&p?-1:1)}return r}async function eI(e,t){var o;void 0===t&&(t={});let{x:r,y:n,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=e_(t,e),m=eL(f),b=c[g?"floating"===u?"reference":"floating":u],v=eM(await a.getClippingRect({element:null==(o=await (null==a.isElement?void 0:a.isElement(b)))||o?b:b.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{...l.floating,x:r,y:n}:l.reference,w=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),k=await (null==a.isElement?void 0:a.isElement(w))&&await (null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},x=eM(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-x.top+m.top)/k.y,bottom:(x.bottom-v.bottom+m.bottom)/k.y,left:(v.left-x.left+m.left)/k.x,right:(x.right-v.right+m.right)/k.x}}function eB(e){return eU(e)?(e.nodeName||"").toLowerCase():"#document"}function eN(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ej(e){var t;return null==(t=(eU(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function eU(e){return e instanceof Node||e instanceof eN(e).Node}function eF(e){return e instanceof Element||e instanceof eN(e).Element}function eH(e){return e instanceof HTMLElement||e instanceof eN(e).HTMLElement}function eq(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof eN(e).ShadowRoot)}function eV(e){let{overflow:t,overflowX:o,overflowY:r,display:n}=eZ(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(n)}function eW(e){let t=eG(),o=eZ(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some(e=>(o.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(o.contain||"").includes(e))}function eG(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function eK(e){return["html","body","#document"].includes(eB(e))}function eZ(e){return eN(e).getComputedStyle(e)}function eY(e){return eF(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function eJ(e){if("html"===eB(e))return e;let t=e.assignedSlot||e.parentNode||eq(e)&&e.host||ej(e);return eq(t)?t.host:t}function eX(e){let t=eZ(e),o=parseFloat(t.width)||0,r=parseFloat(t.height)||0,n=eH(e),a=n?e.offsetWidth:o,l=n?e.offsetHeight:r,c=ew(o)!==a||ew(r)!==l;return c&&(o=a,r=l),{width:o,height:r,$:c}}function eQ(e){return eF(e)?e:e.contextElement}function e0(e){let t=eQ(e);if(!eH(t))return ek(1);let o=t.getBoundingClientRect(),{width:r,height:n,$:a}=eX(t),l=(a?ew(o.width):o.width)/r,c=(a?ew(o.height):o.height)/n;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}let e1=ek(0);function e2(e){let t=eN(e);return eG()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:e1}function e5(e,t,o,r){var n;void 0===t&&(t=!1),void 0===o&&(o=!1);let a=e.getBoundingClientRect(),l=eQ(e),c=ek(1);t&&(r?eF(r)&&(c=e0(r)):c=e0(e));let d=(void 0===(n=o)&&(n=!1),!(!r||n&&r!==eN(l))&&n)?e2(l):ek(0),h=(a.left+d.x)/c.x,p=(a.top+d.y)/c.y,u=a.width/c.x,g=a.height/c.y;if(l){let e=eN(l),t=r&&eF(r)?eN(r):r,o=e.frameElement;for(;o&&r&&t!==e;){let e=e0(o),t=o.getBoundingClientRect(),r=eZ(o),n=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;h*=e.x,p*=e.y,u*=e.x,g*=e.y,h+=n,p+=a,o=eN(o).frameElement}}return eM({width:u,height:g,x:h,y:p})}function e3(e){return e5(ej(e)).left+eY(e).scrollLeft}function e6(e,t,o){let r;if("viewport"===t)r=function(e,t){let o=eN(e),r=ej(e),n=o.visualViewport,a=r.clientWidth,l=r.clientHeight,c=0,d=0;if(n){a=n.width,l=n.height;let e=eG();(!e||e&&"fixed"===t)&&(c=n.offsetLeft,d=n.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,o);else if("document"===t)r=function(e){let t=ej(e),o=eY(e),r=e.ownerDocument.body,n=ey(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=ey(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-o.scrollLeft+e3(e),c=-o.scrollTop;return"rtl"===eZ(r).direction&&(l+=ey(t.clientWidth,r.clientWidth)-n),{width:n,height:a,x:l,y:c}}(ej(e));else if(eF(t))r=function(e,t){let o=e5(e,!0,"fixed"===t),r=o.top+e.clientTop,n=o.left+e.clientLeft,a=eH(e)?e0(e):ek(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:n*a.x,y:r*a.y}}(t,o);else{let o=e2(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return eM(r)}function e9(e,t){return eH(e)&&"fixed"!==eZ(e).position?t?t(e):e.offsetParent:null}function e7(e,t){let o=eN(e);if(!eH(e))return o;let r=e9(e,t);for(;r&&["table","td","th"].includes(eB(r))&&"static"===eZ(r).position;)r=e9(r,t);return r&&("html"===eB(r)||"body"===eB(r)&&"static"===eZ(r).position&&!eW(r))?o:r||function(e){let t=eJ(e);for(;eH(t)&&!eK(t);){if(eW(t))return t;t=eJ(t)}return null}(e)||o}let e8={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:r}=e,n=eH(o),a=ej(o);if(o===a)return t;let l={scrollLeft:0,scrollTop:0},c=ek(1),d=ek(0);if((n||!n&&"fixed"!==r)&&(("body"!==eB(o)||eV(a))&&(l=eY(o)),eH(o))){let e=e5(o);c=e0(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+d.x,y:t.y*c.y-l.scrollTop*c.y+d.y}},getDocumentElement:ej,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:n}=e,a=[..."clippingAncestors"===o?function(e,t){let o=t.get(e);if(o)return o;let r=(function e(t,o,r){var n;void 0===o&&(o=[]),void 0===r&&(r=!0);let a=function e(t){let o=eJ(t);return eK(o)?t.ownerDocument?t.ownerDocument.body:t.body:eH(o)&&eV(o)?o:e(o)}(t),l=a===(null==(n=t.ownerDocument)?void 0:n.body),c=eN(a);return l?o.concat(c,c.visualViewport||[],eV(a)?a:[],c.frameElement&&r?e(c.frameElement):[]):o.concat(a,e(a,[],r))})(e,[],!1).filter(e=>eF(e)&&"body"!==eB(e)),n=null,a="fixed"===eZ(e).position,l=a?eJ(e):e;for(;eF(l)&&!eK(l);){let t=eZ(l),o=eW(l);o||"fixed"!==t.position||(n=null),(a?!o&&!n:!o&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||eV(l)&&!o&&function e(t,o){let r=eJ(t);return!(r===o||!eF(r)||eK(r))&&("fixed"===eZ(r).position||e(r,o))}(e,l))?r=r.filter(e=>e!==l):n=t,l=eJ(l)}return t.set(e,r),r}(t,this._c):[].concat(o),r],l=a[0],c=a.reduce((e,o)=>{let r=e6(t,o,n);return e.top=ey(r.top,e.top),e.right=ev(r.right,e.right),e.bottom=ev(r.bottom,e.bottom),e.left=ey(r.left,e.left),e},e6(t,l,n));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:e7,getElementRects:async function(e){let{reference:t,floating:o,strategy:r}=e,n=this.getOffsetParent||e7,a=this.getDimensions;return{reference:function(e,t,o){let r=eH(t),n=ej(t),a="fixed"===o,l=e5(e,!0,a,t),c={scrollLeft:0,scrollTop:0},d=ek(0);if(r||!r&&!a)if(("body"!==eB(t)||eV(n))&&(c=eY(t)),r){let e=e5(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else n&&(d.x=e3(n));return{x:l.left+c.scrollLeft-d.x,y:l.top+c.scrollTop-d.y,width:l.width,height:l.height}}(t,await n(o),r),floating:{x:0,y:0,...await a(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return eX(e)},getScale:e0,isElement:eF,isRTL:function(e){return"rtl"===eZ(e).direction}},e4=(e,t,o)=>{let r=new Map,n={platform:e8,...o},a={...n.platform,_c:r};return(async(e,t,o)=>{let{placement:r="bottom",strategy:n="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),d=await (null==l.isRTL?void 0:l.isRTL(t)),h=await l.getElementRects({reference:e,floating:t,strategy:n}),{x:p,y:u}=ez(h,r,d),g=r,f={},m=0;for(let o=0;o<c.length;o++){let{name:a,fn:b}=c[o],{x:v,y,data:w,reset:k}=await b({x:p,y:u,initialPlacement:r,placement:g,strategy:n,middlewareData:f,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,f={...f,[a]:{...f[a],...w}},k&&m<=50&&(m++,"object"==typeof k&&(k.placement&&(g=k.placement),k.rects&&(h=!0===k.rects?await l.getElementRects({reference:e,floating:t,strategy:n}):k.rects),{x:p,y:u}=ez(h,g,d)),o=-1)}return{x:p,y:u,placement:g,strategy:n,middlewareData:f}})(e,t,{...n,platform:a})},te=p`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var tt,ti=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let xe=class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[eb,ef,te]}static{this.elementName="gk-popover"}firstUpdated(e){let t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame(()=>{this.popoverEl?.focus()})):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){var e,t;let o,r=[{name:"offset",options:6,async fn(e){let{x:t,y:o}=e,r=await async function(e,t){let{placement:o,platform:r,elements:n}=e,a=await (null==r.isRTL?void 0:r.isRTL(n.floating)),l=eC(o),c=eS(o),d="y"===eT(o),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=e_(6,e),{mainAxis:g,crossAxis:f,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&"number"==typeof m&&(f="end"===c?-1*m:m),d?{x:f*p,y:g*h}:{x:g*h,y:f*p}}(e,6);return{x:t+r.x,y:o+r.y,data:r}}},(void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,r,n,a,l;let{placement:c,middlewareData:d,rects:h,initialPlacement:p,platform:u,elements:g}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...k}=e_(t,e);if(null!=(o=d.arrow)&&o.alignmentOffset)return{};let x=eC(c),_=eC(p)===p,C=await (null==u.isRTL?void 0:u.isRTL(g.floating)),S=b||(_||!w?[eD(p)]:function(e){let t=eD(e);return[eO(e),t,eO(t)]}(p));b||"none"===y||S.push(...function(e,t,o,r){let n=eS(e),a=function(e,t,o){let r=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":return o?t?n:r:t?r:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(eC(e),"start"===o,r);return n&&(a=a.map(e=>e+"-"+n),t&&(a=a.concat(a.map(eO)))),a}(p,w,y,C));let A=[p,...S],E=await eI(e,k),P=[],R=(null==(r=d.flip)?void 0:r.overflows)||[];if(f&&P.push(E[x]),m){let e=function(e,t,o){void 0===o&&(o=!1);let r=eS(e),n=eP(eT(e)),a=eR(n),l="x"===n?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=eD(l)),[l,eD(l)]}(c,h,C);P.push(E[e[0]],E[e[1]])}if(R=[...R,{placement:c,overflows:P}],!P.every(e=>e<=0)){let e=((null==(n=d.flip)?void 0:n.index)||0)+1,t=A[e];if(t)return{data:{index:e,overflows:R},reset:{placement:t}};let o=null==(a=R.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!o)switch(v){case"bestFit":{let e=null==(l=R.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(o=e);break}case"initialPlacement":o=p}if(c!==o)return{reset:{placement:o}}}return{}}}),{name:"shift",options:e={padding:5},async fn(t){let{x:o,y:r,placement:n}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=e_(e,t),h={x:o,y:r},p=await eI(t,d),u=eT(eC(n)),g=eP(u),f=h[g],m=h[u];if(a){let e="y"===g?"bottom":"right";f=ey(f+p["y"===g?"top":"left"],ev(f,f-p[e]))}if(l){let e="y"===u?"bottom":"right";m=ey(m+p["y"===u?"top":"left"],ev(m,m-p[e]))}let b=c.fn({...t,[g]:f,[u]:m});return{...b,data:{x:b.x-o,y:b.y-r}}}}];this.arrowEl&&r.push({name:"arrow",options:o={element:this.arrowEl},async fn(e){let{x:t,y:r,placement:n,rects:a,platform:l,elements:c,middlewareData:d}=e,{element:h,padding:p=0}=e_(o,e)||{};if(null==h)return{};let u=eL(p),g={x:t,y:r},f=eP(eT(n)),m=eR(f),b=await l.getDimensions(h),v="y"===f,y=v?"clientHeight":"clientWidth",w=a.reference[m]+a.reference[f]-g[f]-a.floating[m],k=g[f]-a.reference[f],x=await (null==l.getOffsetParent?void 0:l.getOffsetParent(h)),_=x?x[y]:0;_&&await (null==l.isElement?void 0:l.isElement(x))||(_=c.floating[y]||a.floating[m]);let C=_/2-b[m]/2-1,S=ev(u[v?"top":"left"],C),A=ev(u[v?"bottom":"right"],C),E=_-b[m]-A,P=_/2-b[m]/2+(w/2-k/2),R=ey(S,ev(P,E)),T=!d.arrow&&null!=eS(n)&&P!=R&&a.reference[m]/2-(P<S?S:A)-b[m]/2<0,O=T?P<S?P-S:P-E:0;return{[f]:g[f]+O,data:{[f]:R,centerOffset:P-R-O,...T&&{alignmentOffset:O}},reset:T}}}),await e4(this.triggerEl,this.popoverEl,{middleware:r,placement:this.placement}).then(({x:e,y:t,placement:o,middlewareData:r})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){let e=r.arrow?.x,t=r.arrow?.y,n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[n]:"-4px"})}})}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?X`<div part="arrow" class="arrow"></div>`:""}render(){return X`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}};ti([ep({type:Boolean})],xe.prototype,"arrow",void 0),ti([ep({type:Boolean})],xe.prototype,"hover",void 0),ti([ep()],xe.prototype,"placement",void 0),ti([ep({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),ti([ep({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),ti([eg('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),ti([eg(".popover")],xe.prototype,"popoverEl",void 0),ti([eg(".arrow")],xe.prototype,"arrowEl",void 0),ti([ep({...void 0,state:!0,attribute:!1})],xe.prototype,"open",void 0);let to=p`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;let $e=class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[eb,ef,to]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return X`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([ep({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);let tr=p`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;let Se=class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=tr}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return X`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([ep({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);let tn=new Set(["children","localName","ref","style","className"]),ts=new WeakMap,ta=(e,t,o,r,n)=>{let a,l,c=n?.[t];void 0===c||o===r?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):(void 0===(a=ts.get(e))&&ts.set(e,a=new Map),l=a.get(c),void 0!==o?void 0===l?(a.set(c,l={handleEvent:o}),e.addEventListener(c,l)):l.handleEvent=o:void 0!==l&&(a.delete(c),e.removeEventListener(c,l)))},tl=({react:e,tagName:t,elementClass:o,events:r,displayName:n})=>{let a=new Set(Object.keys(r??{})),l=e.forwardRef((n,l)=>{let c=e.useRef(null),d=e.useRef(null),h={},p={};for(let[e,t]of Object.entries(n))tn.has(e)?h["className"===e?"class":e]=t:a.has(e)||e in o.prototype?p[e]=t:h[e]=t;return e.useLayoutEffect(()=>{if(null!==d.current){for(let e in p)ta(d.current,e,n[e],c.current?c.current[e]:void 0,r);c.current=n}}),e.useLayoutEffect(()=>{d.current?.removeAttribute("defer-hydration")},[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e=>{d.current=e,"function"==typeof l?l(e):null!==l&&(l.current=e)}})});return l.displayName=n??o.name,l};var tc=eA(294);let td=tl({react:tc,tagName:Se.elementName,elementClass:Se}),th=p`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,tp=p`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var tu=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let He=class He extends gt{static{this.styles=[eb,th]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?X`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:X`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}};tu([ep()],He.prototype,"src",void 0),tu([ep()],He.prototype,"indicator",void 0);let Le=class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[eb,tp]}render(){return X`<slot class="avatar-group" part="base"></slot>`}};let tg=tl({react:tc,tagName:He.elementName,elementClass:He}),tf=tl({react:tc,tagName:Le.elementName,elementClass:Le}),tm=p`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;let Be=class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=tm}static{this.elementName="gk-badge"}render(){return X`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([ep()],Be.prototype,"variant",void 0);let tb=tl({react:tc,tagName:Be.elementName,elementClass:Be}),tv=p`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var ty=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let Ge=class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=tv}static{this.elementName="gk-button"}get allClasses(){let e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return X`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}};ty([ep({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),ty([ep({reflect:!0})],Ge.prototype,"type",void 0),ty([ep()],Ge.prototype,"variant",void 0);let tw=tl({react:tc,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),tk=p`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var tx=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let Je=class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[eb,ef,tk]}static{this.elementName="gk-complexity-indicator"}render(){let e=[];for(let t=0;t<this.level;t++)e.push(t);return X`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map(()=>X`<span class="complexity-indicator__box"></span>`)}</div>`}};tx([ep({type:Number})],Je.prototype,"level",void 0),tx([ep()],Je.prototype,"label",void 0);let t$=tl({react:tc,tagName:Je.elementName,elementClass:Je}),t_=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,tC=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,tS=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],tA=new Map,tE=["th","st","nd","rd"];var tP=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let po=class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[eb]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(n,a){let l=("number"==typeof n?n:n.getTime())-(new Date).getTime();for(let[n,c,d,h]of tS){let p=Math.abs(l);if(p>=c||1e3===c)return a?(null==e&&(e=null!=r?r.resolvedOptions().locale:null!=o?o.resolvedOptions().locale:(r=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")?`${Math.round(p/d)}${h}`:(null==r&&(r=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),r.format(Math.round(l/d),n))):(null==o&&(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),o.format(Math.round(l/d),n))}return""}(this.date,!0)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return X`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,o,r,n=!0){let a=`${(void 0)??""}:${o=o??void 0}`,l=tA.get(a);if(null==l){let e,r=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=tC.exec(e);if(null!=t?.groups){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(t_))if(null!=t)for(let e in t){let r=t[e];if(null!=r)switch(e){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===r?"2-digit":"numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}}return o}(o);e=t,l=new Intl.DateTimeFormat(e,r),n&&tA.set(a,l)}if(null==o||tC.test(o))return l.format(e);let c=l.formatToParts(e);return o.replace(t_,(o,a,l,d,h,p,u,g,f,m,b,v,y,w,k)=>{if(null!=a)return a.substring(1,a.length-1);for(let o in k){let a=k[o];if(null==a)continue;let l=c.find(e=>e.type===o);if("Do"===a&&"day"===l?.type){var x=Number(l.value);let e=x%100;return`${x}${tE[(e-20)%10]??tE[e]??tE[0]}`}if("a"===a&&"dayPeriod"===l?.type){let o=(function(e){let o=`${r??""}:time:${e}`,a=tA.get(o);if(null==a){let l;l=null==r?t:"system"===r?void 0:[r],a=new Intl.DateTimeFormat(l,{localeMatcher:"best fit",timeStyle:e}),n&&tA.set(o,a)}return a})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return`${(o??l)?.value??""}`}return l?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}};tP([ep({converter:(n=navigator.language,{toAttribute:e=>e.toLocaleDateString(n),fromAttribute:e=>new Date(e)}),reflect:!0})],po.prototype,"date",void 0),tP([ep()],po.prototype,"format",void 0);let tR=tl({react:tc,tagName:po.elementName,elementClass:po}),tT=p`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,tO=p`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,tD=p`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;let yo=class yo extends gt{static{this.styles=[eb,tD]}static{this.elementName="gk-focus-item"}render(){return X`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}};let vo=class vo extends gt{static{this.styles=[eb,tO]}static{this.elementName="gk-focus-row"}render(){return X`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}};let bo=class bo extends gt{static{this.styles=[eb,tO,tD,tT]}static{this.elementName="gk-focus-container"}render(){return X`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}};let tL=tl({react:tc,tagName:yo.elementName,elementClass:yo}),tM=tl({react:tc,tagName:vo.elementName,elementClass:vo}),tz=tl({react:tc,tagName:bo.elementName,elementClass:bo});let $o=class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let tI=(a=class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let o in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.st?.has(o)&&this.it.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.it)e in t||(o.remove(e),this.it.delete(e));for(let e in t){let r=!!t[e];r===this.it.has(e)||this.st?.has(e)||(r?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return ee}},(...e)=>({_$litDirective$:a,values:e})),tB=e=>e??ei,tN=p`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var tj=function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};let Ro=class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[eb,ef,tN]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return X`<div class="field"><label class="${tI({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${tI({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${tB(this.autocomplete)}" autocorrect="${tB(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${tB(this.name)}" part="input" placeholder="${tB(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}};tj([ep()],Ro.prototype,"autocomplete",void 0),tj([ep()],Ro.prototype,"autocorrect",void 0),tj([ep({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),tj([ep()],Ro.prototype,"label",void 0),tj([ep({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),tj([ep()],Ro.prototype,"name",void 0),tj([ep()],Ro.prototype,"placeholder",void 0),tj([ep({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),tj([ep({reflect:!0})],Ro.prototype,"type",void 0),tj([ep()],Ro.prototype,"value",void 0);let tU=p`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,tF=p`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,tH=p`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;let Mo=class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[eb,tU]}static{this.elementName="gk-menu"}_handleSlotChange(){let e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();let t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;let o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this._getAllItems(),o=t.length,r=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?r=(r-1+o)%o:"ArrowDown"===e.key?r=(r+1)%o:"Home"===e.key?r=0:"End"===e.key&&(r=o-1),this._setCurrentItem(t[r]),t[r].focus()}}_handleMouseDown(e){let t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){let t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter(e=>this._isMenuItem(e))}_setTabIndex(){this._getAllItems().forEach(e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")})}render(){return X`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([(tt={flatten:!0},(e,t)=>{let{slot:o,selector:r}=tt??{},n="slot"+(o?`[name=${o}]`:":not([name])");return eu(e,t,{get(){let e=this.renderRoot?.querySelector(n),t=e?.assignedElements(tt)??[];return void 0===r?t:t.filter(e=>e.matches(r))}})})],Mo.prototype,"slotChildren",void 0);let Do=class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[eb,tF]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return X`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([ep({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);let Ho=class Ho extends gt{static{this.styles=[eb,tH]}static{this.elementName="gk-menu-label"}render(){return X`<slot class="menu-label" part="base"></slot>`}};let tq=tl({react:tc,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),tV=tl({react:tc,tagName:Do.elementName,elementClass:Do}),tW=tl({react:tc,tagName:Ho.elementName,elementClass:Ho}),tG=p`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;let Bo=class Bo extends gt{static{this.styles=[eb,tG]}static{this.elementName="gk-tag"}render(){return X`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}};!function(e,t,o,r){var n,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([ep()],Bo.prototype,"variant",void 0);let tK=tl({react:tc,tagName:Bo.elementName,elementClass:Bo}),tZ=tl({react:tc,tagName:$e.elementName,elementClass:$e})})(),eE.Tn;var eP=eE.qE,eR=(eE.HE,eE.Ct),eT=eE.zx,eO=(eE.M1,eE.sX,eE.D0,eE.fs,eE.Tw,eE.ud,eE.wt,eE.ne,eE.Ku,eE.FU,eE.XO,eE.Ze,eE.K$,eE.cX,eE.Js,eE.J9,eE.si,eE.sg,eE.hW,eE.II,eE.v2),eD=eE.sN,eL=(eE.Lb,eE.J2),eM=(eE.$$,eE.Vp,eE.u,eE.fW);eE.WV,eE.h4,eE.kZ;let ez=globalThis,eI=ez.ShadowRoot&&(void 0===ez.ShadyCSS||ez.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,eB=Symbol(),eN=new WeakMap;let css_tag_n=class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==eB)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(eI&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=eN.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&eN.set(t,e))}return e}toString(){return this.cssText}};let ej=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,eB),eU=(e,...t)=>new css_tag_n(1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]),e,eB),eF=(e,t)=>{if(eI)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),r=ez.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}},eH=eI?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return ej(t)})(e):e,{is:eq,defineProperty:eV,getOwnPropertyDescriptor:eW,getOwnPropertyNames:eG,getOwnPropertySymbols:eK,getPrototypeOf:eZ}=Object,eY=globalThis,eJ=eY.trustedTypes,eX=eJ?eJ.emptyScript:"",eQ=eY.reactiveElementPolyfillSupport,e0=(e,t)=>e,e1={toAttribute(e,t){switch(t){case Boolean:e=e?eX:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},e2=(e,t)=>!eq(e,t),e5={attribute:!0,type:String,converter:e1,reflect:!1,hasChanged:e2};Symbol.metadata??=Symbol("metadata"),eY.litPropertyMetadata??=new WeakMap;let reactive_element_b=class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=e5){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&eV(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){let{get:r,set:n}=eW(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){let a=r?.call(this);n.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??e5}static _$Ei(){if(this.hasOwnProperty(e0("elementProperties")))return;let e=eZ(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(e0("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(e0("properties"))){let e=this.properties;for(let t of[...eG(e),...eK(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(eH(o));else void 0!==e&&t.push(eH(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return eF(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){let n=(void 0!==o.converter?.toAttribute?o.converter:e1).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=o.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:e1;this._$Em=r,this[r]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(!((o??=this.constructor.getPropertyOptions(e)).hasChanged??e2)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[e0("elementProperties")]=new Map,reactive_element_b[e0("finalized")]=new Map,eQ?.({ReactiveElement:reactive_element_b}),(eY.reactiveElementVersions??=[]).push("2.0.4");let e3=globalThis,e6=e3.trustedTypes,e9=e6?e6.createPolicy("lit-html",{createHTML:e=>e}):void 0,e7="$lit$",e8=`lit$${Math.random().toFixed(9).slice(2)}$`,e4="?"+e8,te=`<${e4}>`,tt=document,ti=()=>tt.createComment(""),to=e=>null===e||"object"!=typeof e&&"function"!=typeof e,tr=Array.isArray,tn=e=>tr(e)||"function"==typeof e?.[Symbol.iterator],ts="[ 	\n\f\r]",ta=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tl=/-->/g,tc=/>/g,td=RegExp(`>|${ts}(?:([^\\s"'>=/]+)(${ts}*=${ts}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),th=/'/g,tp=/"/g,tu=/^(?:script|style|textarea|title)$/i,tg=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),tf=tg(1),tm=(tg(2),tg(3),Symbol.for("lit-noChange")),tb=Symbol.for("lit-nothing"),tv=new WeakMap,ty=tt.createTreeWalker(tt,129);function tw(e,t){if(!tr(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e9?e9.createHTML(t):t}let tk=(e,t)=>{let o=e.length-1,r=[],n,a=2===t?"<svg>":3===t?"<math>":"",l=ta;for(let t=0;t<o;t++){let o=e[t],c,d,h=-1,p=0;for(;p<o.length&&(l.lastIndex=p,null!==(d=l.exec(o)));)p=l.lastIndex,l===ta?"!--"===d[1]?l=tl:void 0!==d[1]?l=tc:void 0!==d[2]?(tu.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=td):void 0!==d[3]&&(l=td):l===td?">"===d[0]?(l=n??ta,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?td:'"'===d[3]?tp:th):l===tp||l===th?l=td:l===tl||l===tc?l=ta:(l=td,n=void 0);let u=l===td&&e[t+1].startsWith("/>")?" ":"";a+=l===ta?o+te:h>=0?(r.push(c),o.slice(0,h)+e7+o.slice(h)+e8+u):o+e8+(-2===h?t:u)}return[tw(e,a+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};let lit_html_N=class lit_html_N{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,a=0,l=e.length-1,c=this.parts,[d,h]=tk(e,t);if(this.el=lit_html_N.createElement(d,o),ty.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=ty.nextNode())&&c.length<l;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(e7)){let t=h[a++],o=r.getAttribute(e).split(e8),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:n,name:l[2],strings:o,ctor:"."===l[1]?lit_html_H:"?"===l[1]?lit_html_I:"@"===l[1]?lit_html_L:lit_html_k}),r.removeAttribute(e)}else e.startsWith(e8)&&(c.push({type:6,index:n}),r.removeAttribute(e));if(tu.test(r.tagName)){let e=r.textContent.split(e8),t=e.length-1;if(t>0){r.textContent=e6?e6.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],ti()),ty.nextNode(),c.push({type:2,index:++n});r.append(e[t],ti())}}}else if(8===r.nodeType)if(r.data===e4)c.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(e8,e+1));)c.push({type:7,index:n}),e+=e8.length-1}n++}}static createElement(e,t){let o=tt.createElement("template");return o.innerHTML=e,o}};function tx(e,t,o=e,r){if(t===tm)return t;let n=void 0!==r?o._$Co?.[r]:o._$Cl,a=to(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,o,r),void 0!==r?(o._$Co??=[])[r]=n:o._$Cl=n),void 0!==n&&(t=tx(e,n._$AS(e,t.values),n,r)),t}let lit_html_M=class lit_html_M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??tt).importNode(t,!0);ty.currentNode=r;let n=ty.nextNode(),a=0,l=0,c=o[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new lit_html_R(n,n.nextSibling,this,e):1===c.type?t=new c.ctor(n,c.name,c.strings,this,e):6===c.type&&(t=new z(n,this,e)),this._$AV.push(t),c=o[++l]}a!==c?.index&&(n=ty.nextNode(),a++)}return ty.currentNode=tt,r}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let lit_html_R=class lit_html_R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=tb,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){to(e=tx(this,e,t))?e===tb||null==e||""===e?(this._$AH!==tb&&this._$AR(),this._$AH=tb):e!==this._$AH&&e!==tm&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):tn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==tb&&to(this._$AH)?this._$AA.nextSibling.data=e:this.T(tt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=lit_html_N.createElement(tw(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new lit_html_M(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=tv.get(e.strings);return void 0===t&&tv.set(e.strings,t=new lit_html_N(e)),t}k(e){tr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,r=0;for(let n of e)r===t.length?t.push(o=new lit_html_R(this.O(ti()),this.O(ti()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let lit_html_k=class lit_html_k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,n){this.type=1,this._$AH=tb,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=tb}_$AI(e,t=this,o,r){let n=this.strings,a=!1;if(void 0===n)(a=!to(e=tx(this,e,t,0))||e!==this._$AH&&e!==tm)&&(this._$AH=e);else{let r,l,c=e;for(e=n[0],r=0;r<n.length-1;r++)(l=tx(this,c[o+r],t,r))===tm&&(l=this._$AH[r]),a||=!to(l)||l!==this._$AH[r],l===tb?e=tb:e!==tb&&(e+=(l??"")+n[r+1]),this._$AH[r]=l}a&&!r&&this.j(e)}j(e){e===tb?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let lit_html_H=class lit_html_H extends lit_html_k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===tb?void 0:e}};let lit_html_I=class lit_html_I extends lit_html_k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==tb)}};let lit_html_L=class lit_html_L extends lit_html_k{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){if((e=tx(this,e,t,0)??tb)===tm)return;let o=this._$AH,r=e===tb&&o!==tb||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==tb&&(o===tb||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){tx(this,e)}};let t$=e3.litHtmlPolyfillSupport;t$?.(lit_html_N,lit_html_R),(e3.litHtmlVersions??=[]).push("3.2.1");let t_=(e,t,o)=>{let r=o?.renderBefore??t,n=r._$litPart$;if(void 0===n){let e=o?.renderBefore??null;r._$litPart$=n=new lit_html_R(t.insertBefore(ti(),e),e,void 0,o??{})}return n._$AI(e),n};let lit_element_r=class lit_element_r extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=t_(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tm}};lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});let tC=globalThis.litElementPolyfillSupport;tC?.({LitElement:lit_element_r}),(globalThis.litElementVersions??=[]).push("4.1.1");let tS=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},tA={attribute:!0,type:String,converter:e1,reflect:!1,hasChanged:e2},tE=(e=tA,t,o)=>{let{kind:r,metadata:n}=o,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let n=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){let{name:r}=o;return function(o){let n=this[r];t.call(this,o),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)};function tP(e){return(t,o)=>"object"==typeof o?tE(e,t,o):((e,t,o)=>{let r=t.hasOwnProperty(o);return t.constructor.createProperty(o,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function tR(e){return tP({...e,state:!0,attribute:!1})}let tT=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function tO(e,t){return(o,r,n)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof r?o:n??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return tT(o,r,{get(){let o=e.call(this);return void 0===o&&(null!==(o=a(this))||this.hasUpdated)&&t.call(this,o),o}})}return tT(o,r,{get(){return a(this)}})}}function tD(e){return(t,o)=>{let{slot:r,selector:n}=e??{},a="slot"+(r?`[name=${r}]`:":not([name])");return tT(t,o,{get(){let t=this.renderRoot?.querySelector(a),o=t?.assignedElements(e)??[];return void 0===n?o:o.filter(e=>e.matches(n))}})}}function tL(e,t,o){return e?t(e):o?.(e)}let tM="commitDetails",tz=new IpcCommand(tM,"commit/suggestChanges"),tI=new IpcCommand(tM,"commit/actions/execute"),tB=new IpcCommand(tM,"file/actions/execute"),tN=new IpcCommand(tM,"file/open"),tj=new IpcCommand(tM,"file/openOnRemote"),tU=new IpcCommand(tM,"file/compareWorking"),tF=new IpcCommand(tM,"file/comparePrevious"),tH=new IpcCommand(tM,"file/stage"),tq=new IpcCommand(tM,"file/unstage"),tV=new IpcCommand(tM,"pickCommit"),tW=new IpcCommand(tM,"searchCommit"),tG=new IpcCommand(tM,"switchMode");new IpcCommand(tM,"autolinkSettings");let tK=new IpcCommand(tM,"pin"),tZ=new IpcCommand(tM,"navigate"),tY=new IpcCommand(tM,"preferences/update"),tJ=new IpcCommand(tM,"wip/createPatch"),tX=new IpcCommand(tM,"wip/changeReviewMode"),tQ=new IpcCommand(tM,"wip/showCodeSuggestion"),t0=new IpcCommand(tM,"fetch"),t1=new IpcCommand(tM,"publish"),t2=new IpcCommand(tM,"push"),t5=new IpcCommand(tM,"pull"),t3=new IpcCommand(tM,"switch"),t6=new IpcCommand(tM,"openPullRequestChanges"),t9=new IpcCommand(tM,"openPullRequestComparison"),t7=new IpcCommand(tM,"openPullRequestOnRemote"),t8=new IpcCommand(tM,"openPullRequestDetails"),t4=new IpcRequest(tM,"explain"),ie=new IpcRequest(tM,"generate"),ii=new IpcNotification(tM,"didChange",!0),io=new IpcNotification(tM,"didChange/wip");new IpcNotification(tM,"org/settings/didChange");let ir=new IpcNotification(tM,"didChange/jira"),is=new IpcNotification(tM,"didChange/account"),ia=new IpcNotification(tM,"didChange/patch"),il=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),ic=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141"});var id=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,ip=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?ih(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&id(t,o,a),a};function iu(e,t=""){return ej(Object.entries(e).map(([e,o])=>(function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`})(e,o,t)).join(""))}let ig=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};ig.styles=eU`
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

		${iu(il)}
		${iu(ic,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

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
	`,ip([tP({reflect:!0})],ig.prototype,"icon",2),ip([tP({reflect:!0})],ig.prototype,"modifier",2),ip([tP({type:Number})],ig.prototype,"size",2),ip([tP({reflect:!0})],ig.prototype,"flip",2),ip([tP({reflect:!0})],ig.prototype,"rotate",2),ig=ip([tS("code-icon")],ig);let im=eU`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,ib=eU`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var iv=Object.defineProperty,iy=Object.getOwnPropertyDescriptor,iw=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?iy(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&iv(t,o,a),a};let ik=class extends lit_element_r{constructor(){super(...arguments),this.pulse=!1}render(){return tf`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};ik.styles=[im,ib],iw([tP({type:Boolean})],ik.prototype,"pulse",2),ik=iw([tS("gl-indicator")],ik);var ix=Object.defineProperty,i$=Object.defineProperties,i_=Object.getOwnPropertyDescriptor,iC=Object.getOwnPropertyDescriptors,iS=Object.getOwnPropertySymbols,iA=Object.prototype.hasOwnProperty,iE=Object.prototype.propertyIsEnumerable,iP=e=>{throw TypeError(e)},iR=(e,t,o)=>t in e?ix(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,iT=(e,t)=>{for(var o in t||(t={}))iA.call(t,o)&&iR(e,o,t[o]);if(iS)for(var o of iS(t))iE.call(t,o)&&iR(e,o,t[o]);return e},iO=(e,t)=>i$(e,iC(t)),iD=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?i_(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ix(t,o,a),a},iL=(e,t,o)=>t.has(e)||iP("Cannot "+o),iM=(e,t,o)=>(iL(e,t,"read from private field"),o?o.call(e):t.get(e)),iz=(e,t,o)=>t.has(e)?iP("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),iI=(e,t,o,r)=>(iL(e,t,"write to private field"),r?r.call(e,o):t.set(e,o),o),iB=new Map,iN=new WeakMap;function ij(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function iU(e,t){iB.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function iF(e,t,o){let r=iN.get(e);if(null==r?void 0:r[t])return ij(r[t],o.dir);let n=iB.get(t);return n?ij(n,o.dir):{keyframes:[],options:{duration:0}}}var iH=eU`
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
`,iq=eU`
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
`;let iV=new Set,iW=new Map,iG="ltr",iK="en",iZ="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(iZ){let e=new MutationObserver(iJ);iG=document.documentElement.dir||"ltr",iK=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function iY(...e){e.map(e=>{let t=e.$code.toLowerCase();iW.has(t)?iW.set(t,Object.assign(Object.assign({},iW.get(t)),e)):iW.set(t,e),a||(a=e)}),iJ()}function iJ(){iZ&&(iG=document.documentElement.dir||"ltr",iK=document.documentElement.lang||navigator.language),[...iV.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){iV.add(this.host)}hostDisconnected(){iV.delete(this.host)}dir(){return`${this.host.dir||iG}`.toLowerCase()}lang(){return`${this.host.lang||iK}`.toLowerCase()}getTranslationData(e){var t,o;let r=new Intl.Locale(e.replace(/_/g,"-")),n=null==r?void 0:r.language.toLowerCase(),a=null!==(o=null===(t=null==r?void 0:r.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"",l=iW.get(`${n}-${a}`),c=iW.get(n);return{locale:r,language:n,region:a,primary:l,secondary:c}}exists(e,t){var o;let{primary:r,secondary:n}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!r&&!!r[e]||!!n&&!!n[e]||!!t.includeFallback&&!!a&&!!a[e]}term(e,...t){let o,{primary:r,secondary:n}=this.getTranslationData(this.lang());if(r&&r[e])o=r[e];else if(n&&n[e])o=n[e];else{if(!a||!a[e])return String(e);o=a[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}};var iX={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};iY(iX);var iQ=class extends LocalizeController{};iY(iX);var i0=eU`
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
`,i1=class extends lit_element_r{constructor(){super(),iz(this,g,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let o=new CustomEvent(e,iT({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch(r){customElements.define(e,class extends t{},o)}return}let n=" (unknown version)",a=n;if("version"in t&&t.version&&(n=" v"+t.version),"version"in r&&r.version&&(a=" v"+r.version),n&&a&&n===a)return}attributeChangedCallback(e,t,o){iM(this,g)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),iI(this,g,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)})}};g=new WeakMap,i1.version="2.20.0",i1.dependencies={},iD([tP()],i1.prototype,"dir",2),iD([tP()],i1.prototype,"lang",2);let i2=Math.min,i5=Math.max,i3=Math.round,i6=Math.floor,i9=e=>({x:e,y:e}),i7={left:"right",right:"left",bottom:"top",top:"bottom"},i8={start:"end",end:"start"};function i4(e,t){return"function"==typeof e?e(t):e}function oe(e){return e.split("-")[0]}function oi(e){return e.split("-")[1]}function oo(e){return"x"===e?"y":"x"}function or(e){return"y"===e?"height":"width"}function on(e){return["top","bottom"].includes(oe(e))?"y":"x"}function os(e){return e.replace(/start|end/g,e=>i8[e])}function oa(e){return e.replace(/left|right|bottom|top/g,e=>i7[e])}function ol(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function oc(e){let{x:t,y:o,width:r,height:n}=e;return{width:r,height:n,top:o,left:t,right:t+r,bottom:o+n,x:t,y:o}}function od(e,t,o){let r,{reference:n,floating:a}=e,l=on(t),c=oo(on(t)),d=or(c),h=oe(t),p="y"===l,u=n.x+n.width/2-a.width/2,g=n.y+n.height/2-a.height/2,f=n[d]/2-a[d]/2;switch(h){case"top":r={x:u,y:n.y-a.height};break;case"bottom":r={x:u,y:n.y+n.height};break;case"right":r={x:n.x+n.width,y:g};break;case"left":r={x:n.x-a.width,y:g};break;default:r={x:n.x,y:n.y}}switch(oi(t)){case"start":r[c]-=f*(o&&p?-1:1);break;case"end":r[c]+=f*(o&&p?-1:1)}return r}let oh=async(e,t,o)=>{let{placement:r="bottom",strategy:n="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),d=await (null==l.isRTL?void 0:l.isRTL(t)),h=await l.getElementRects({reference:e,floating:t,strategy:n}),{x:p,y:u}=od(h,r,d),g=r,f={},m=0;for(let o=0;o<c.length;o++){let{name:a,fn:b}=c[o],{x:v,y:y,data:w,reset:k}=await b({x:p,y:u,initialPlacement:r,placement:g,strategy:n,middlewareData:f,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,f={...f,[a]:{...f[a],...w}},k&&m<=50&&(m++,"object"==typeof k&&(k.placement&&(g=k.placement),k.rects&&(h=!0===k.rects?await l.getElementRects({reference:e,floating:t,strategy:n}):k.rects),{x:p,y:u}=od(h,g,d)),o=-1)}return{x:p,y:u,placement:g,strategy:n,middlewareData:f}};async function op(e,t){var o;void 0===t&&(t={});let{x:r,y:n,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=i4(t,e),m=ol(f),b=c[g?"floating"===u?"reference":"floating":u],v=oc(await a.getClippingRect({element:null==(o=await (null==a.isElement?void 0:a.isElement(b)))||o?b:b.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{x:r,y:n,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),k=await (null==a.isElement?void 0:a.isElement(w))&&await (null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},x=oc(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-x.top+m.top)/k.y,bottom:(x.bottom-v.bottom+m.bottom)/k.y,left:(v.left-x.left+m.left)/k.x,right:(x.right-v.right+m.right)/k.x}}async function ou(e,t){let{placement:o,platform:r,elements:n}=e,a=await (null==r.isRTL?void 0:r.isRTL(n.floating)),l=oe(o),c=oi(o),d="y"===on(o),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=i4(t,e),{mainAxis:g,crossAxis:f,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&"number"==typeof m&&(f="end"===c?-1*m:m),d?{x:f*p,y:g*h}:{x:g*h,y:f*p}}function og(){return"undefined"!=typeof window}function of(e){return ov(e)?(e.nodeName||"").toLowerCase():"#document"}function om(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ob(e){var t;return null==(t=(ov(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ov(e){return!!og()&&(e instanceof Node||e instanceof om(e).Node)}function oy(e){return!!og()&&(e instanceof Element||e instanceof om(e).Element)}function ow(e){return!!og()&&(e instanceof HTMLElement||e instanceof om(e).HTMLElement)}function ok(e){return!!og()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof om(e).ShadowRoot)}function ox(e){let{overflow:t,overflowX:o,overflowY:r,display:n}=oA(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!["inline","contents"].includes(n)}function o$(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function o_(e){let t=oC(),o=oy(e)?oA(e):e;return["transform","translate","scale","rotate","perspective"].some(e=>!!o[e]&&"none"!==o[e])||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","translate","scale","rotate","perspective","filter"].some(e=>(o.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(o.contain||"").includes(e))}function oC(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function oS(e){return["html","body","#document"].includes(of(e))}function oA(e){return om(e).getComputedStyle(e)}function oE(e){return oy(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oP(e){if("html"===of(e))return e;let t=e.assignedSlot||e.parentNode||ok(e)&&e.host||ob(e);return ok(t)?t.host:t}function oR(e,t,o){var r;void 0===t&&(t=[]),void 0===o&&(o=!0);let n=function e(t){let o=oP(t);return oS(o)?t.ownerDocument?t.ownerDocument.body:t.body:ow(o)&&ox(o)?o:e(o)}(e),a=n===(null==(r=e.ownerDocument)?void 0:r.body),l=om(n);if(a){let e=oT(l);return t.concat(l,l.visualViewport||[],ox(n)?n:[],e&&o?oR(e):[])}return t.concat(n,oR(n,[],o))}function oT(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function oO(e){let t=oA(e),o=parseFloat(t.width)||0,r=parseFloat(t.height)||0,n=ow(e),a=n?e.offsetWidth:o,l=n?e.offsetHeight:r,c=i3(o)!==a||i3(r)!==l;return c&&(o=a,r=l),{width:o,height:r,$:c}}function oD(e){return oy(e)?e:e.contextElement}function oL(e){let t=oD(e);if(!ow(t))return i9(1);let o=t.getBoundingClientRect(),{width:r,height:n,$:a}=oO(t),l=(a?i3(o.width):o.width)/r,c=(a?i3(o.height):o.height)/n;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}let oM=i9(0);function oz(e){let t=om(e);return oC()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:oM}function oI(e,t,o,r){var n;void 0===t&&(t=!1),void 0===o&&(o=!1);let a=e.getBoundingClientRect(),l=oD(e),c=i9(1);t&&(r?oy(r)&&(c=oL(r)):c=oL(e));let d=(void 0===(n=o)&&(n=!1),r&&(!n||r===om(l))&&n)?oz(l):i9(0),h=(a.left+d.x)/c.x,p=(a.top+d.y)/c.y,u=a.width/c.x,g=a.height/c.y;if(l){let e=om(l),t=r&&oy(r)?om(r):r,o=e,n=oT(o);for(;n&&r&&t!==o;){let e=oL(n),t=n.getBoundingClientRect(),r=oA(n),a=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;h*=e.x,p*=e.y,u*=e.x,g*=e.y,h+=a,p+=l,n=oT(o=om(n))}}return oc({width:u,height:g,x:h,y:p})}function oB(e,t){let o=oE(e).scrollLeft;return t?t.left+o:oI(ob(e)).left+o}function oN(e,t,o){void 0===o&&(o=!1);let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(o?0:oB(e,r)),y:r.top+t.scrollTop}}function oj(e,t,o){let r;if("viewport"===t)r=function(e,t){let o=om(e),r=ob(e),n=o.visualViewport,a=r.clientWidth,l=r.clientHeight,c=0,d=0;if(n){a=n.width,l=n.height;let e=oC();(!e||e&&"fixed"===t)&&(c=n.offsetLeft,d=n.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,o);else if("document"===t)r=function(e){let t=ob(e),o=oE(e),r=e.ownerDocument.body,n=i5(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=i5(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-o.scrollLeft+oB(e),c=-o.scrollTop;return"rtl"===oA(r).direction&&(l+=i5(t.clientWidth,r.clientWidth)-n),{width:n,height:a,x:l,y:c}}(ob(e));else if(oy(t))r=function(e,t){let o=oI(e,!0,"fixed"===t),r=o.top+e.clientTop,n=o.left+e.clientLeft,a=ow(e)?oL(e):i9(1),l=e.clientWidth*a.x,c=e.clientHeight*a.y;return{width:l,height:c,x:n*a.x,y:r*a.y}}(t,o);else{let o=oz(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return oc(r)}function oU(e){return"static"===oA(e).position}function oF(e,t){if(!ow(e)||"fixed"===oA(e).position)return null;if(t)return t(e);let o=e.offsetParent;return ob(e)===o&&(o=o.ownerDocument.body),o}function oH(e,t){let o=om(e);if(o$(e))return o;if(!ow(e)){let t=oP(e);for(;t&&!oS(t);){if(oy(t)&&!oU(t))return t;t=oP(t)}return o}let r=oF(e,t);for(;r&&["table","td","th"].includes(of(r))&&oU(r);)r=oF(r,t);return r&&oS(r)&&oU(r)&&!o_(r)?o:r||function(e){let t=oP(e);for(;ow(t)&&!oS(t);){if(o_(t))return t;if(o$(t))break;t=oP(t)}return null}(e)||o}let oq=async function(e){let t=this.getOffsetParent||oH,o=this.getDimensions,r=await o(e.floating);return{reference:function(e,t,o){let r=ow(t),n=ob(t),a="fixed"===o,l=oI(e,!0,a,t),c={scrollLeft:0,scrollTop:0},d=i9(0);if(r||!r&&!a)if(("body"!==of(t)||ox(n))&&(c=oE(t)),r){let e=oI(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else n&&(d.x=oB(n));let h=!n||r||a?i9(0):oN(n,c);return{x:l.left+c.scrollLeft-d.x-h.x,y:l.top+c.scrollTop-d.y-h.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},oV={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:r,strategy:n}=e,a="fixed"===n,l=ob(r),c=!!t&&o$(t.floating);if(r===l||c&&a)return o;let d={scrollLeft:0,scrollTop:0},h=i9(1),p=i9(0),u=ow(r);if((u||!u&&!a)&&(("body"!==of(r)||ox(l))&&(d=oE(r)),ow(r))){let e=oI(r);h=oL(r),p.x=e.x+r.clientLeft,p.y=e.y+r.clientTop}let g=!l||u||a?i9(0):oN(l,d,!0);return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-d.scrollLeft*h.x+p.x+g.x,y:o.y*h.y-d.scrollTop*h.y+p.y+g.y}},getDocumentElement:ob,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:n}=e,a=[..."clippingAncestors"===o?o$(t)?[]:function(e,t){let o=t.get(e);if(o)return o;let r=oR(e,[],!1).filter(e=>oy(e)&&"body"!==of(e)),n=null,a="fixed"===oA(e).position,l=a?oP(e):e;for(;oy(l)&&!oS(l);){let t=oA(l),o=o_(l);o||"fixed"!==t.position||(n=null),(a?!o&&!n:!o&&"static"===t.position&&!!n&&["absolute","fixed"].includes(n.position)||ox(l)&&!o&&function e(t,o){let r=oP(t);return!(r===o||!oy(r)||oS(r))&&("fixed"===oA(r).position||e(r,o))}(e,l))?r=r.filter(e=>e!==l):n=t,l=oP(l)}return t.set(e,r),r}(t,this._c):[].concat(o),r],l=a[0],c=a.reduce((e,o)=>{let r=oj(t,o,n);return e.top=i5(r.top,e.top),e.right=i2(r.right,e.right),e.bottom=i2(r.bottom,e.bottom),e.left=i5(r.left,e.left),e},oj(t,l,n));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:oH,getElementRects:oq,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:o}=oO(e);return{width:t,height:o}},getScale:oL,isElement:oy,isRTL:function(e){return"rtl"===oA(e).direction}};function oW(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let oG=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,r;let n,a,{placement:l,rects:c,platform:d,elements:h}=t,{apply:p=()=>{},...u}=i4(e,t),g=await op(t,u),f=oe(l),m=oi(l),b="y"===on(l),{width:v,height:y}=c.floating;"top"===f||"bottom"===f?(n=f,a=m===(await (null==d.isRTL?void 0:d.isRTL(h.floating))?"start":"end")?"left":"right"):(a=f,n="end"===m?"top":"bottom");let w=y-g.top-g.bottom,k=v-g.left-g.right,x=i2(y-g[n],w),_=i2(v-g[a],k),C=!t.middlewareData.shift,S=x,A=_;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(A=k),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(S=w),C&&!m){let e=i5(g.left,0),t=i5(g.right,0),o=i5(g.top,0),r=i5(g.bottom,0);b?A=v-2*(0!==e||0!==t?e+t:i5(g.left,g.right)):S=y-2*(0!==o||0!==r?o+r:i5(g.top,g.bottom))}await p({...t,availableWidth:A,availableHeight:S});let E=await d.getDimensions(h.floating);return v!==E.width||y!==E.height?{reset:{rects:!0}}:{}}}},oK=e=>({name:"arrow",options:e,async fn(t){let{x:o,y:r,placement:n,rects:a,platform:l,elements:c,middlewareData:d}=t,{element:h,padding:p=0}=i4(e,t)||{};if(null==h)return{};let u=ol(p),g={x:o,y:r},f=oo(on(n)),m=or(f),b=await l.getDimensions(h),v="y"===f,y=v?"clientHeight":"clientWidth",w=a.reference[m]+a.reference[f]-g[f]-a.floating[m],k=g[f]-a.reference[f],x=await (null==l.getOffsetParent?void 0:l.getOffsetParent(h)),_=x?x[y]:0;_&&await (null==l.isElement?void 0:l.isElement(x))||(_=c.floating[y]||a.floating[m]);let C=_/2-b[m]/2-1,S=i2(u[v?"top":"left"],C),A=i2(u[v?"bottom":"right"],C),E=_-b[m]-A,P=_/2-b[m]/2+(w/2-k/2),R=i5(S,i2(P,E)),T=!d.arrow&&null!=oi(n)&&P!==R&&a.reference[m]/2-(P<S?S:A)-b[m]/2<0,O=T?P<S?P-S:P-E:0;return{[f]:g[f]+O,data:{[f]:R,centerOffset:P-R-O,...T&&{alignmentOffset:O}},reset:T}}}),oZ=(e,t,o)=>{let r=new Map,n={platform:oV,...o},a={...n.platform,_c:r};return oh(e,t,{...n,platform:a})},oY=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let oJ=oY(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let o in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.st)e in t||(o.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return tm}});function oX(e){var t=e;for(let e=t;e;e=oQ(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=oQ(t);e;e=oQ(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||o_(t)||"BODY"===e.tagName))return e}return null}function oQ(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var o0=class extends i1{constructor(){super(...arguments),this.localize=new iQ(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),r=0,n=0,a=0,l=0,c=0,d=0,h=0,p=0;o?e.top<t.top?(r=e.left,n=e.bottom,a=e.right,l=e.bottom,c=t.left,d=t.top,h=t.right,p=t.top):(r=t.left,n=t.bottom,a=t.right,l=t.bottom,c=e.left,d=e.top,h=e.right,p=e.top):e.left<t.left?(r=e.right,n=e.top,a=t.left,l=t.top,c=e.right,d=e.bottom,h=t.left,p=t.bottom):(r=t.right,n=t.top,a=e.left,l=e.top,c=t.right,d=t.bottom,h=e.left,p=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,o,r){let n;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:h=!1}=r,p=oD(e),u=a||l?[...p?oR(p):[],...oR(t)]:[];u.forEach(e=>{a&&e.addEventListener("scroll",o,{passive:!0}),l&&e.addEventListener("resize",o)});let g=p&&d?function(e,t){let o,r=null,n=ob(e);function a(){var e;clearTimeout(o),null==(e=r)||e.disconnect(),r=null}return!function l(c,d){void 0===c&&(c=!1),void 0===d&&(d=1),a();let h=e.getBoundingClientRect(),{left:p,top:u,width:g,height:f}=h;if(c||t(),!g||!f)return;let m=i6(u),b=i6(n.clientWidth-(p+g)),v={rootMargin:-m+"px "+-b+"px "+-i6(n.clientHeight-(u+f))+"px "+-i6(p)+"px",threshold:i5(0,i2(1,d))||1},y=!0;function w(t){let r=t[0].intersectionRatio;if(r!==d){if(!y)return l();r?l(!1,r):o=setTimeout(()=>{l(!1,1e-7)},1e3)}1!==r||oW(h,e.getBoundingClientRect())||l(),y=!1}try{r=new IntersectionObserver(w,{...v,root:n.ownerDocument})}catch{r=new IntersectionObserver(w,v)}r.observe(e)}(!0),a}(p,o):null,f=-1,m=null;c&&(m=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&m&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),o()}),p&&!h&&m.observe(p),m.observe(t));let b=h?oI(e):null;return h&&function t(){let r=oI(e);b&&!oW(b,r)&&o(),b=r,n=requestAnimationFrame(t)}(),o(),()=>{var e;u.forEach(e=>{a&&e.removeEventListener("scroll",o),l&&e.removeEventListener("resize",o)}),null==g||g(),null==(e=m)||e.disconnect(),m=null,h&&cancelAnimationFrame(n)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,o;if(!this.active||!this.anchorEl)return;let r=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var o,r;let{x:n,y:a,placement:l,middlewareData:c}=t,d=await ou(t,e);return l===(null==(o=c.offset)?void 0:o.placement)&&null!=(r=c.arrow)&&r.alignmentOffset?{}:{x:n+d.x,y:a+d.y,data:{...d,placement:l}}}}];this.sync?r.push(oG({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&r.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var o,r,n,a,l;let{placement:c,middlewareData:d,rects:h,initialPlacement:p,platform:u,elements:g}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...k}=i4(t,e);if(null!=(o=d.arrow)&&o.alignmentOffset)return{};let x=oe(c),_=on(p),C=oe(p)===p,S=await (null==u.isRTL?void 0:u.isRTL(g.floating)),A=b||(C||!w?[oa(p)]:function(e){let t=oa(e);return[os(e),t,os(t)]}(p)),E="none"!==y;!b&&E&&A.push(...function(e,t,o,r){let n=oi(e),a=function(e,t,o){let r=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":if(o)return t?n:r;return t?r:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(oe(e),"start"===o,r);return n&&(a=a.map(e=>e+"-"+n),t&&(a=a.concat(a.map(os)))),a}(p,w,y,S));let P=[p,...A],R=await op(e,k),T=[],O=(null==(r=d.flip)?void 0:r.overflows)||[];if(f&&T.push(R[x]),m){let e=function(e,t,o){void 0===o&&(o=!1);let r=oi(e),n=oo(on(e)),a=or(n),l="x"===n?r===(o?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=oa(l)),[l,oa(l)]}(c,h,S);T.push(R[e[0]],R[e[1]])}if(O=[...O,{placement:c,overflows:T}],!T.every(e=>e<=0)){let e=((null==(n=d.flip)?void 0:n.index)||0)+1,t=P[e];if(t)return{data:{index:e,overflows:O},reset:{placement:t}};let o=null==(a=O.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!o)switch(v){case"bestFit":{let e=null==(l=O.filter(e=>{if(E){let t=on(e.placement);return t===_||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(o=e);break}case"initialPlacement":o=p}if(c!==o)return{reset:{placement:o}}}return{}}}),this.shift&&r.push({name:"shift",options:o={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:r,placement:n}=e,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=i4(o,e),h={x:t,y:r},p=await op(e,d),u=on(oe(n)),g=oo(u),f=h[g],m=h[u];if(a){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",o=f+p[e],r=f-p[t];f=i5(o,i2(f,r))}if(l){let e="y"===u?"top":"left",t="y"===u?"bottom":"right",o=m+p[e],r=m-p[t];m=i5(o,i2(m,r))}let b=c.fn({...e,[g]:f,[u]:m});return{...b,data:{x:b.x-t,y:b.y-r,enabled:{[g]:a,[u]:l}}}}}),this.autoSize?r.push(oG({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&r.push(oK({element:this.arrowEl,padding:this.arrowPadding}));let n="absolute"===this.strategy?e=>oV.getOffsetParent(e,oX):oV.getOffsetParent;oZ(this.anchorEl,this.popup,{placement:this.placement,middleware:r,strategy:this.strategy,platform:iO(iT({},oV),{getOffsetParent:n})}).then(({x:e,y:t,middlewareData:o,placement:r})=>{let n="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=o.arrow.x,t=o.arrow.y,r="",l="",c="",d="";if("start"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",l=n?o:"",d=n?"":o}else if("end"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=n?"":o,d=n?o:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(d="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(d="number"==typeof e?`${e}px`:"",r="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:r,right:l,bottom:c,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return tf`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${oJ({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${oJ({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?tf`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function o1(e,t){return new Promise(o=>{e.addEventListener(t,function r(n){n.target===e&&(e.removeEventListener(t,r),o())})})}function o2(e,t,o){return new Promise(r=>{if((null==o?void 0:o.duration)===1/0)throw Error("Promise-based animations must be finite.");let n=e.animate(t,iO(iT({},o),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:o.duration}));n.addEventListener("cancel",r,{once:!0}),n.addEventListener("finish",r,{once:!0})})}function o5(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function o3(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function o6(e,t){let o=iT({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:n}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{if(e.has(t)){let n=e.get(t),a=this[t];n!==a&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](n,a)}}),n.call(this,e)}}}o0.styles=[i0,iq],iD([tO(".popup")],o0.prototype,"popup",2),iD([tO(".popup__arrow")],o0.prototype,"arrowEl",2),iD([tP()],o0.prototype,"anchor",2),iD([tP({type:Boolean,reflect:!0})],o0.prototype,"active",2),iD([tP({reflect:!0})],o0.prototype,"placement",2),iD([tP({reflect:!0})],o0.prototype,"strategy",2),iD([tP({type:Number})],o0.prototype,"distance",2),iD([tP({type:Number})],o0.prototype,"skidding",2),iD([tP({type:Boolean})],o0.prototype,"arrow",2),iD([tP({attribute:"arrow-placement"})],o0.prototype,"arrowPlacement",2),iD([tP({attribute:"arrow-padding",type:Number})],o0.prototype,"arrowPadding",2),iD([tP({type:Boolean})],o0.prototype,"flip",2),iD([tP({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],o0.prototype,"flipFallbackPlacements",2),iD([tP({attribute:"flip-fallback-strategy"})],o0.prototype,"flipFallbackStrategy",2),iD([tP({type:Object})],o0.prototype,"flipBoundary",2),iD([tP({attribute:"flip-padding",type:Number})],o0.prototype,"flipPadding",2),iD([tP({type:Boolean})],o0.prototype,"shift",2),iD([tP({type:Object})],o0.prototype,"shiftBoundary",2),iD([tP({attribute:"shift-padding",type:Number})],o0.prototype,"shiftPadding",2),iD([tP({attribute:"auto-size"})],o0.prototype,"autoSize",2),iD([tP()],o0.prototype,"sync",2),iD([tP({type:Object})],o0.prototype,"autoSizeBoundary",2),iD([tP({attribute:"auto-size-padding",type:Number})],o0.prototype,"autoSizePadding",2),iD([tP({attribute:"hover-bridge",type:Boolean})],o0.prototype,"hoverBridge",2);var o9=class extends i1{constructor(){super(),this.localize=new iQ(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=o5(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=o5(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await o3(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:o}=iF(this,"tooltip.show",{dir:this.localize.dir()});await o2(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await o3(this.body);let{keyframes:e,options:o}=iF(this,"tooltip.hide",{dir:this.localize.dir()});await o2(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,o1(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,o1(this,"sl-after-hide")}render(){return tf`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${oJ({tooltip:!0,"tooltip--open":this.open})}
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
    `}};o9.styles=[i0,iH],o9.dependencies={"sl-popup":o0},iD([tO("slot:not([name])")],o9.prototype,"defaultSlot",2),iD([tO(".tooltip__body")],o9.prototype,"body",2),iD([tO("sl-popup")],o9.prototype,"popup",2),iD([tP()],o9.prototype,"content",2),iD([tP()],o9.prototype,"placement",2),iD([tP({type:Boolean,reflect:!0})],o9.prototype,"disabled",2),iD([tP({type:Number})],o9.prototype,"distance",2),iD([tP({type:Boolean,reflect:!0})],o9.prototype,"open",2),iD([tP({type:Number})],o9.prototype,"skidding",2),iD([tP()],o9.prototype,"trigger",2),iD([tP({type:Boolean})],o9.prototype,"hoist",2),iD([o6("open",{waitUntilFirstUpdate:!0})],o9.prototype,"handleOpenChange",1),iD([o6(["content","distance","hoist","placement","skidding"])],o9.prototype,"handleOptionsChange",1),iD([o6("disabled")],o9.prototype,"handleDisabledChange",1),iU("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),iU("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),o9.define("sl-tooltip");var o7=Object.defineProperty,o8=Object.getOwnPropertyDescriptor,o4=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?o8(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&o7(t,o,a),a};iU("tooltip.show",null),iU("tooltip.hide",null);let re=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback()}render(){return tf`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??tb}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};re.styles=eU`
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
	`,o4([tP()],re.prototype,"content",2),o4([tP({reflect:!0})],re.prototype,"placement",2),o4([tP({type:Boolean})],re.prototype,"disabled",2),o4([tP({type:Number})],re.prototype,"distance",2),o4([tP({type:Boolean})],re.prototype,"hoist",2),re=o4([tS("gl-tooltip")],re);let ri=eU`
	:host {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
		color: var(--gl-pill-foreground, var(--vscode-foreground));
		background-color: var(--gl-pill-background, var(--vscode-editorWidget-background));
		white-space: nowrap;
	}

	.pill--outlined {
		padding: 0.1rem 0.4rem;
		background-color: transparent;
		border: 1px solid var(--gl-pill-border, var(--vscode-foreground));
	}
`;var ro=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,rn=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rr(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ro(t,o,a),a};let rs=class extends lit_element_r{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?tf`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:tf`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="check"></code-icon></span>
			</span>`:tb:tf`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${tL(this.behind>0,()=>tf`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`)}${tL(this.ahead>0,()=>tf`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`)}${tL(this.working>0,()=>tf`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`)}</span
		>`}};rs.styles=[ri,eU`
			.pill {
				gap: 0.1rem;
				text-transform: none;
			}

			.state {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.state--missing code-icon {
				color: var(--gl-tracking-missing);
			}

			.state--ahead code-icon {
				color: var(--gl-tracking-ahead);
			}

			.state--behind code-icon {
				color: var(--gl-tracking-behind);
			}

			.state--working .working {
				color: var(--gl-tracking-working);
			}

			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}

			.working {
				display: inline-block;
				width: 1rem;
				text-align: center;
				vertical-align: text-bottom;
				font-weight: normal;
			}
		`],rn([tP({type:Number})],rs.prototype,"ahead",2),rn([tP({type:Number})],rs.prototype,"behind",2),rn([tP({type:Number})],rs.prototype,"working",2),rn([tP({type:Boolean,attribute:"always-show"})],rs.prototype,"alwaysShow",2),rn([tP({type:Boolean})],rs.prototype,"outlined",2),rn([tP({type:Boolean})],rs.prototype,"colorized",2),rn([tP({type:Boolean})],rs.prototype,"missingUpstream",2),rs=rn([tS("gl-tracking-pill")],rs);let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=tb,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===tb||null==e)return this._t=void 0,this.it=e;if(e===tm)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let ra=oY(unsafe_html_e);function rl(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}function rc(e,t,o,r=!1,n){let a={name:"",relativePath:"",children:new Map,descendants:[]},l=e.reduce((e,r)=>{let n=e,a="";for(let e of t(r)){a=o(a,e),void 0===n.children&&(n.children=new Map);let t=n.children.get(e);void 0===t&&(t={name:e,relativePath:a,parent:n,children:void 0,descendants:void 0},n.children.set(e,t)),void 0===n.descendants&&(n.descendants=[]),n.descendants.push(r),n=t}return n.value=r,e},a);return r&&(l=function e(t,o,r=!0,n){if(void 0===t.children)return t;let a=[...t.children.values()];for(let t of a)e(t,o,!1,n);if(!r&&1===a.length){let e=a[0];(void 0===e.value||n?.(e.value))&&(t.name=o(t.name,e.name),t.relativePath=e.relativePath,t.children=e.children,t.descendants=e.descendants,t.value=e.value)}return t}(l,o,!0,n)),l}let rd=eU`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;eU`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${rd}
	}
`;let rh=eU`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,rp=eU`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;eU`
	:focus-visible {
		${rh}
	}
`;let ru=eU`
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
`;eU`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${rh}
	}
	a:hover {
		text-decoration: underline;
	}
`;let rg=eU`
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

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;eU`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;var rf=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,rb=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rm(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rf(t,o,a),a};let rv=class extends lit_element_r{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return tf`<div class="progress-bar"></div>`}};rv.styles=eU`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,rb([tP({reflect:!0})],rv.prototype,"mode",2),rb([tP({type:Boolean})],rv.prototype,"active",2),rb([tP()],rv.prototype,"position",2),rv=rb([tS("progress-indicator")],rv);var ry=Object.defineProperty,rw=Object.getOwnPropertyDescriptor,rk=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rw(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ry(t,o,a),a};let rx=class extends lit_element_r{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?tf`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:tf`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return tf`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};rx.styles=[rg,eU`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],rk([tP({type:Boolean,reflect:!0})],rx.prototype,"collapsable",2),rk([tP({type:Boolean,reflect:!0})],rx.prototype,"expanded",2),rk([tP({type:Boolean,reflect:!0})],rx.prototype,"loading",2),rx=rk([tS("webview-pane")],rx);var r$=Object.defineProperty,r_=Object.getOwnPropertyDescriptor,rC=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?r_(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&r$(t,o,a),a};let rS=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.disabled=!1}render(){return tf`
			<gl-tooltip hoist content="${this.label??tb}">
				<a
					role="${!this.href?"button":tb}"
					type="${!this.href?"button":tb}"
					aria-label="${this.label??tb}"
					?disabled=${this.disabled}
					href=${this.href??tb}
				>
					<code-icon icon="${this.icon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};rS.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},rS.styles=eU`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus-within) {
			${rh}
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
		}
		a:focus {
			outline: none;
		}
	`,rC([tP()],rS.prototype,"href",2),rC([tP()],rS.prototype,"label",2),rC([tP()],rS.prototype,"icon",2),rC([tP({type:Boolean})],rS.prototype,"disabled",2),rC([tO("a")],rS.prototype,"defaultFocusEl",2),rS=rC([tS("action-item")],rS);var rA=Object.defineProperty,rE=Object.getOwnPropertyDescriptor,rP=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rE(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rA(t,o,a),a};let rR=class extends lit_element_r{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback()}render(){return tf`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;let t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,r=this.actionNodes.map((e,r)=>(e.setAttribute("aria-posinset",`${r+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===r?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{r?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;let t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10),r=null;if("ArrowLeft"===e.key){let e=1===o?this.actionNodes.length-1:o-2;r=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=o===this.actionNodes.length?0:o;r=this.actionNodes[e]}null!=r&&r!==t&&(t.setAttribute("tabindex","-1"),r.setAttribute("tabindex","0"),r.focus())}};rR.styles=eU`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,rP([tD({flatten:!0})],rR.prototype,"actionNodes",2),rR=rP([tS("action-nav")],rR);let rT=new WeakMap;function rO(e,t){return function(o,r,n){let a=rT.get(o.constructor);null==a&&rT.set(o.constructor,a=[]),a.push({method:n.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_r{emit(e,t,o){let r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(r),r}update(e){let t=rT.get(this.constructor);if(null!=t)for(let{keys:o,method:r,afterFirstUpdate:n}of t){if(n&&!this.hasUpdated)continue;let t=o.filter(t=>e.has(t));t.length&&r.call(this,t)}super.update(e)}};let rD={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};var rL=Object.defineProperty,rM=Object.getOwnPropertyDescriptor,rz=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rM(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rL(t,o,a),a};let rI=class extends lit_element_r{get statusName(){return this.status?rD[this.status]??"Unknown":""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return tf`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return tf`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return tf`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return tf`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return tf`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return tf`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return tf`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return tf`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return tf`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};rI.styles=[eU`
			:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],rz([tP()],rI.prototype,"status",2),rz([tR()],rI.prototype,"statusName",1),rI=rz([tS("gl-git-status")],rI);let rB=[ru,eU``],rN=[ru,eU`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			/* padding-right: var(--gitlens-scrollbar-gutter-width); */
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--gitlens-tree-foreground, var(--vscode-foreground));

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
			cursor: pointer;
		}

		:host(:hover),
		:host(:focus-within) {
			content-visibility: visible;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		/* FIXME: remove, this is for debugging
		.item:focus {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}
 		*/
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			display: inline-block;
			margin-right: 0.6rem;
			height: 2.2rem;
			line-height: 2.2rem;
			vertical-align: text-bottom;
		}

		.text {
			line-height: 1.6rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
			pointer-events: none;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			// overflow: hidden;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}
	`];var rj=Object.defineProperty,rU=Object.getOwnPropertyDescriptor,rF=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rU(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rj(t,o,a),a};let rH=class extends lit_element_r{disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return tf`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;let e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),o=this.handleSelected.bind(this),r=this.treeItems.map(r=>(r.addEventListener("keydown",e,!1),r.addEventListener("gl-tree-item-select",t,!1),r.addEventListener("gl-tree-item-selected",o,!1),{dispose:function(){r?.removeEventListener("keydown",e,!1),r?.removeEventListener("gl-tree-item-select",t,!1),r?.removeEventListener("gl-tree-item-selected",o,!1)}}));this._slotSubscriptionsDisposer=()=>{r?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target)return;let t=e.target;if("ArrowUp"===e.key){let e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){let e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;let t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;let t=e.target,o=t.level,r=t.nextElementSibling;for(;r&&o!==r.level;){let t=function(e){let t=e.level,o=e.previousElementSibling;for(;o;){if(o.level<t)return o;o=o.previousElementSibling}}(r);r.parentExpanded=t?.expanded!==!1,r.expanded=e.detail.node.expanded,r=r.nextElementSibling}}};rH.styles=rB,rF([tP({reflect:!0})],rH.prototype,"guides",2),rF([tD({flatten:!0})],rH.prototype,"treeItems",2),rH=rF([tS("gl-tree")],rH);var rq=Object.defineProperty,rV=Object.getOwnPropertyDescriptor,rW=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rV(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rq(t,o,a),a};let rG=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClickBound=this.onComponentClick.bind(this)}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onComponentClickBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onComponentClickBound)}onComponentClick(e){this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){let e=this.level-1;if(e<1&&!this.branch)return tb;let t=[];if(e>0)for(let o=0;o<e;o++)t.push(tf`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(tf`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?tf`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:tb}renderActions(){return tf`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return tf`<slot name="decorations" class="decorations"></slot>`}render(){return tf`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${tL(this.showIcon,()=>tf`<slot name="icon" class="icon"></slot>`)}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame(()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})})}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};rG.styles=rN,rW([tP({type:Boolean})],rG.prototype,"branch",2),rW([tP({type:Boolean})],rG.prototype,"expanded",2),rW([tP({type:String})],rG.prototype,"path",2),rW([tP({type:String,attribute:"parent-path"})],rG.prototype,"parentPath",2),rW([tP({type:Boolean,attribute:"parent-expanded"})],rG.prototype,"parentExpanded",2),rW([tP({type:Number})],rG.prototype,"level",2),rW([tP({type:Number})],rG.prototype,"size",2),rW([tP({type:Number})],rG.prototype,"position",2),rW([tP({type:Boolean})],rG.prototype,"checkable",2),rW([tP({type:Boolean})],rG.prototype,"checked",2),rW([tP({type:Boolean})],rG.prototype,"disableCheck",2),rW([tP({type:Boolean})],rG.prototype,"showIcon",2),rW([tR()],rG.prototype,"selected",2),rW([tR()],rG.prototype,"focused",2),rW([tO("#button")],rG.prototype,"buttonEl",2),rG=rW([tS("gl-tree-item")],rG);var rK=Object.defineProperty,rZ=Object.getOwnPropertyDescriptor,rY=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rZ(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rK(t,o,a),a};let rJ=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){let t;if(this._model!==e){if(this._model=e,null!=this._model){let e=this._model.length;t=this._model.reduce((t,o,r)=>(t.push(...function e(t,o=1,r=1){let n={size:o,position:r};for(let[e,o]of Object.entries(t))null!=o&&"children"!==e&&(n[e]=o);let a=[n];if(null!=t.children&&t.children.length>0){let o=t.children.length;for(let r=0;r<o;r++)a.push(...e(t.children[r],o,r+1))}return a}(o,e,r+1)),t),[])}this.treeItems=t}}get model(){return this._model}renderIcon(e){return null==e?tb:"string"==typeof e?tf`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?tb:tf`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){let t=e.actions;return null==t||0===t.length?tb:t.map(t=>tf`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${o=>this.onTreeItemActionClicked(o,e,t)}
				@dblclick=${o=>this.onTreeItemActionDblClicked(o,e,t)}
			></action-item>`)}renderDecorations(e){let t=e.decorations;return null==t||0===t.length?tb:t.map(e=>"icon"===e.type?tf`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?tf`<span slot="decorations">${e.label}</span>`:void 0)}renderTreeItem(e){return tf`<gl-tree-item
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${tL(null!=e.description,()=>tf`<span slot="description">${e.description}</span>`)}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map(e=>this.renderTreeItem(e))}render(){return tf`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,o){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onTreeItemActionDblClicked(e,t,o){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};rJ.styles=eU`
		:host {
			display: contents;
		}
	`,rY([tR()],rJ.prototype,"treeItems",2),rY([tP({reflect:!0})],rJ.prototype,"guides",2),rY([tP({type:Array,attribute:!1})],rJ.prototype,"model",1),rJ=rY([tS("gl-tree-generator")],rJ);var rX=Object.defineProperty,rQ=Object.getOwnPropertyDescriptor,r0=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?rQ(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&rX(t,o,a),a};let GlDetailsBase=class GlDetailsBase extends lit_element_r{constructor(){super(...arguments),this.tab="commit",this.isUncommitted=!1,this.emptyText="No Files"}get fileLayout(){return this.preferences?.files?.layout??"auto"}get isCompact(){return this.preferences?.files?.compact??!0}get indentGuides(){return this.preferences?.indentGuides??"none"}get filesChangedPaneLabel(){let e=this.files?.length??0,t=e>0?ee("file",e):"Files";return`${t} changed`}renderChangedFiles(e,t){let o=this.files?.length??0,r=this.isTree(o),n="tree",a="list-tree",l="View as Tree";switch(this.fileLayout){case"auto":n="list",a="gl-list-auto",l="View as List";break;case"list":n="tree",a="list-flat",l="View as Tree";break;case"tree":n="auto",a="list-tree",l="View as Auto"}let c=this.createTreeModel(e,this.files??[],r,this.isCompact);return tf`
			<webview-pane collapsable expanded flexible>
				<span slot="title">${this.filesChangedPaneLabel}</span>
				<span slot="subtitle" data-region="stats">${t}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${n}"
						label="${l}"
						icon="${a}"
					></action-item>
				</action-nav>
				${tL(o>0&&"wip"===this.tab,()=>tf`<div class="section section--actions">
							<p class="button-container">
								<span class="button-group button-group--single">
									<gl-button full href="command:workbench.view.scm"
										>Commit via SCM <code-icon rotate="45" icon="arrow-up" slot="suffix"></code-icon
									></gl-button>
								</span>
							</p>
						</div>`)}
				${this.renderTreeFileModel(c)}
			</webview-pane>
		`}onShareWipChanges(e,t,o){if(!o)return;let r=new CustomEvent("share-wip",{detail:{checked:t}});this.dispatchEvent(r)}createRenderRoot(){return this}isTree(e){return"auto"===this.fileLayout?e>(this.preferences?.files?.threshold??5):"tree"===this.fileLayout}createTreeModel(e,t,o=!1,r=!0){if(!this.isUncommitted)return this.createFileTreeModel(e,t,o,r);let n=[],a=[],l=[];for(let e of t)e.staged?a.push(e):l.push(e);return 0===a.length||0===l.length?n.push(...this.createFileTreeModel(e,t,o,r)):(a.length&&n.push({label:"Staged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["staged"],children:this.createFileTreeModel(e,a,o,r,{level:2}),actions:this.getStagedActions()}),l.length&&n.push({label:"Unstaged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["unstaged"],children:this.createFileTreeModel(e,l,o,r,{level:2}),actions:this.getUnstagedActions()})),n}sortChildren(e){return e.sort((e,t)=>e.branch&&!t.branch?-1:!e.branch&&t.branch?1:e.label<t.label?-1:+(e.label>t.label)),e}createFileTreeModel(e,t,o=!1,r=!0,n={level:1}){if(void 0===n.level&&(n.level=1),!t.length)return[{label:"No changes",path:"",level:n.level,branch:!1,checkable:!1,expanded:!0,checked:!1}];let a=[];if(o){let e=rc(t,e=>e.path.split("/"),(...e)=>e.join("/"),r);if(null!=e.children)for(let t of e.children.values()){let e=this.walkFileTree(t,{level:n.level});a.push(e)}}else for(let e of t){let t=this.fileToTreeModel(e,{level:n.level,branch:!1},!0);a.push(t)}return this.sortChildren(a),a}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){let r=[];for(let o of e.children.values()){let e=this.walkFileTree(o,{...t,level:t.level+1});r.push(e)}r.length>0&&(this.sortChildren(r),o.branch=!0,o.children=r)}return o}getStagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Staged Changes",action:"staged-create-patch"}]:[]}getUnstagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Unstaged Changes",action:"unstaged-create-patch"}]:[]}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,r="/"){let n=e.path.lastIndexOf(r),a=-1!==n?e.path.substring(n+1):e.path,l=o&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:{type:"status",name:e.status},label:a,description:`${!0===o?l:""}${"R"===e.status?` \u2190 ${e.originalPath}`:""}`,context:[e],actions:this.getFileActions(e,t),...t}}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}renderTreeFileModel(e){return tf`<gl-tree-generator
			.model=${e}
			.guides=${this.indentGuides}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"staged-create-patch":this.onCreatePatch(e);break;case"unstaged-create-patch":this.onCreatePatch(e,!0);break;case"file-open":this.onOpenFile(e);break;case"file-unstage":this.onUnstageFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-compare-working":this.onCompareWorking(e);break;case"file-open-on-remote":this.onOpenFileOnRemote(e);break;case"file-more-actions":this.onMoreActions(e)}}onTreeItemSelected(e){e.detail.context&&this.onComparePrevious(e)}onCreatePatch(e,t=!1){let o=new CustomEvent("create-patch",{detail:{checked:!!t||"staged"}});this.dispatchEvent(o)}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-open",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onOpenFileOnRemote(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-compare-working",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onComparePrevious(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onMoreActions(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-more-actions",{detail:this.getEventDetail(t)});this.dispatchEvent(o)}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-stage",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context,o=new CustomEvent("file-unstage",{detail:this.getEventDetail(t,{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0})});this.dispatchEvent(o)}getEventDetail(e,t){return{path:e.path,repoPath:e.repoPath,status:e.status,staged:e.staged,showOptions:t}}};r0([tP({type:Array})],GlDetailsBase.prototype,"files",2),r0([tP({type:Boolean})],GlDetailsBase.prototype,"isUncommitted",2),r0([tP({type:Object})],GlDetailsBase.prototype,"preferences",2),r0([tP({attribute:"empty-text"})],GlDetailsBase.prototype,"emptyText",2);let r1=e=>e??tb;var r2=Object.defineProperty,r5=Object.getOwnPropertyDescriptor,r3=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?r5(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&r2(t,o,a),a};let r6=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom"}connectedCallback(){super.connectedCallback(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?tf`<gl-tooltip .content=${this.tooltip} placement=${r1(this.tooltipPlacement)}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?tf`<gl-tooltip placement=${r1(this.tooltipPlacement)}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?tf`<a
				class="control"
				tabindex="${r1(!1===this.disabled?void 0:-1)}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:tf`<button
			class="control"
			role=${r1(this.role)}
			aria-checked=${r1(this.ariaChecked)}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};r6.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},r6.styles=[ru,eU`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
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
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;

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
				max-width: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${rp}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
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

			:host([appearance='input']),
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

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
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

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],r3([tO(".control")],r6.prototype,"control",2),r3([tP({reflect:!0})],r6.prototype,"appearance",2),r3([tP({type:Boolean,reflect:!0})],r6.prototype,"disabled",2),r3([tP({reflect:!0})],r6.prototype,"density",2),r3([tP({type:Boolean,reflect:!0})],r6.prototype,"full",2),r3([tP()],r6.prototype,"href",2),r3([tP()],r6.prototype,"tooltip",2),r3([tP()],r6.prototype,"tooltipPlacement",2),r6=r3([tS("gl-button")],r6);let r9=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))});var r7=Object.defineProperty,r8=Object.getOwnPropertyDescriptor,r4=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?r8(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&r7(t,o,a),a};let ne=class extends lit_element_r{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}render(){let o=function(t,o,r,n=!0){o=o??void 0;let a=`${(void 0)??""}:${o}`,l=G.get(a);if(null==l){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=V.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(q))if(null!=t){for(let[e,r]of Object.entries(t))if(null!=r)switch(e){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===r?o.day="2-digit":o.day="numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}}return o}(o);l=new Intl.DateTimeFormat(null==r?e:"system"===r?void 0:[r],t),n&&G.set(a,l)}if(null==o||V.test(o))return l.format(t);let c=l.formatToParts(t);return o.replace(q,(o,a,l,d,h,p,u,g,f,m,b,v,y,w,k)=>{if(null!=a)return a.substring(1,a.length-1);for(let[o,a]of Object.entries(k)){if(null==a)continue;let l=c.find(e=>e.type===o);if("Do"===a&&l?.type==="day"){var x=Number(l.value);let e=x%100;return`${x}${Z[(e-20)%10]??Z[e]??Z[0]}`}if("a"===a&&l?.type==="dayPeriod"){let o=(function(t){let o=`${(void 0)??""}:time:${t}`,a=G.get(o);if(null==a){let l;l=null==r?e:"system"===r?void 0:[r],a=new Intl.DateTimeFormat(l,{localeMatcher:"best fit",timeStyle:t}),n&&G.set(o,a)}return a})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(o??l)?.value??""}`}return l?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma");return tf`<gl-tooltip content="${this.tooltip} ${o}"
			><time datetime="${this.date.toISOString()}"
				>${"relative"===this.dateStyle?function(o,r){let n=("number"==typeof o?o:o.getTime())-new Date().getTime();for(let[o,r,a,l]of W)if(Math.abs(n)>=r||1e3===r)return null==t&&(t=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})),t.format(Math.round(n/a),o);return""}(this.date):o}</time
			></gl-tooltip
		>`}};r4([tP()],ne.prototype,"format",2),r4([tP({attribute:"date-style"})],ne.prototype,"dateStyle",2),r4([tP({converter:r9(),reflect:!0})],ne.prototype,"date",2),r4([tP()],ne.prototype,"tooltip",2),ne=r4([tS("formatted-date")],ne);var ni=Object.defineProperty,no=Object.getOwnPropertyDescriptor,nr=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?no(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ni(t,o,a),a};let nn=class extends lit_element_r{constructor(){super(...arguments),this.name="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.dateStyle="relative",this.committer=!1}renderAvatar(){return this.showAvatar&&this.avatarUrl?.length?tf`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:tf`<code-icon icon="person" size="18"></code-icon>`}render(){return tf`
			<gl-tooltip>
				${tL(null!=this.url,()=>tf`<a class="author" href="${this.url}"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></a
						>`,()=>tf`<span class="author"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></span
						>`)}
				<div class="author-hover" slot="content">
					${this.avatarUrl?.length?tf`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:tb}
					<span>${this.name}</span>
				</div>
			</gl-tooltip>
			<span class="date">
				${this.actionLabel}
				<formatted-date
					.date=${this.date}
					.format=${this.dateFormat}
					.dateStyle=${this.dateStyle}
				></formatted-date>
			</span>
		`}};nn.styles=eU`
		:host,
		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0 0.6rem;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.author-hover {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.6rem;
			margin: 0.6rem 0.2rem 0.2rem 0.2rem;
		}

		.author-hover img {
			max-width: 64px;
		}

		.avatar {
			width: 1.8rem;
		}

		.thumb {
			width: 100%;
			height: auto;
			vertical-align: middle;
			border-radius: 0.4rem;
		}

		.name {
			flex: 1;
			font-size: 1.3rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.date {
			flex: none;
			margin-inline-start: auto;
			font-size: 1.3rem;
			color: var(--color-foreground--50);
		}
	`,nr([tP()],nn.prototype,"name",2),nr([tP()],nn.prototype,"url",2),nr([tP({converter:r9(),reflect:!0})],nn.prototype,"date",2),nr([tP()],nn.prototype,"avatarUrl",2),nr([tP({type:Boolean,attribute:"show-avatar",reflect:!0})],nn.prototype,"showAvatar",2),nr([tP()],nn.prototype,"dateFormat",2),nr([tP()],nn.prototype,"dateStyle",2),nr([tP({type:Boolean})],nn.prototype,"committer",2),nr([tP()],nn.prototype,"actionLabel",2),nn=nr([tS("commit-identity")],nn);var ns=Object.defineProperty,na=Object.getOwnPropertyDescriptor,nl=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?na(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ns(t,o,a),a};let nc=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","trash"]]]),nd=class extends lit_element_r{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return nc.map(([e,t])=>this.renderStat(e,t))}renderStat(e,t){let o=this[e];return null==o?tb:tf`<span class="stat ${e}" aria-label="${o} ${e}"
			><span class="label">${this.renderSymbol(t)}${o}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?tf`<code-icon class="icon" icon="${t}"></code-icon>`:tf`<span>${e}</span>`}};nd.styles=eU`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
			font-size: 1rem;
		}

		:host([symbol='icons']) {
			gap: 0.8rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.removed {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
			align-content: center;
			user-select: none;
		}

		.icon {
			--code-icon-size: 0.94017em;
			margin-inline-end: 0.2rem;
		}
	`,nl([tP({type:Number})],nd.prototype,"added",2),nl([tP({type:Number})],nd.prototype,"modified",2),nl([tP({type:Number})],nd.prototype,"removed",2),nl([tP()],nd.prototype,"symbol",2),nd=nl([tS("commit-stats")],nd);let{I:nh}={M:e7,P:e8,A:e4,C:1,L:tk,R:lit_html_M,D:tn,V:tx,I:lit_html_R,H:lit_html_k,N:lit_html_I,U:lit_html_L,B:lit_html_H,F:z},np=e=>null===e||"object"!=typeof e&&"function"!=typeof e,nu=e=>void 0===e.strings,ng=()=>document.createComment(""),nf=(e,t,o)=>{let r=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===o)o=new nh(r.insertBefore(ng(),n),r.insertBefore(ng(),n),e,e.options);else{let t=o._$AB.nextSibling,a=o._$AM,l=a!==e;if(l){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==n||l){let e=o._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,n),e=t}}}return o},nm=(e,t,o=e)=>(e._$AI(t,o),e),nb={},nv=(e,t=nb)=>e._$AH=t,ny=e=>e._$AH,nw=e=>{e._$AP?.(!1,!0);let t=e._$AA,o=e._$AB.nextSibling;for(;t!==o;){let e=t.nextSibling;t.remove(),t=e}},nk=(e,t)=>{let o=e._$AN;if(void 0===o)return!1;for(let e of o)e._$AO?.(t,!1),nk(e,t);return!0},nx=e=>{let t,o;do{if(void 0===(t=e._$AM))break;(o=t._$AN).delete(e),e=t}while(0===o?.size)},n$=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),nS(t)}};function n_(e){void 0!==this._$AN?(nx(this),this._$AM=e,n$(this)):this._$AM=e}function nC(e,t=!1,o=0){let r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let e=o;e<r.length;e++)nk(r[e],!1),nx(r[e]);else null!=r&&(nk(r,!1),nx(r));else nk(this,e)}let nS=e=>{2==e.type&&(e._$AP??=nC,e._$AQ??=n_)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),n$(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(nk(this,e),nx(this))}setValue(e){if(nu(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(e=>this.q=e)}resume(){this.q?.(),this.Z=this.q=void 0}};let nA=e=>!np(e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!nA(e))??tm}update(e,t){let o=this._$Cbt,r=o.length;this._$Cbt=t;let n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let l=t[e];if(!nA(l))return this._$Cwt=e,l;e<r&&l===o[e]||(this._$Cwt=0x3fffffff,r=0,Promise.resolve(l).then(async e=>{for(;a.get();)await a.get();let t=n.deref();if(void 0!==t){let o=t._$Cbt.indexOf(l);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}}))}return tm}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let nE=oY(until_c);function nP(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let nR=nP(),nT={exec:()=>null};function nO(e,t=""){let o="string"==typeof e?e:e.source,r={replace:(e,t)=>{let n="string"==typeof t?t:t.source;return n=n.replace(nD.caret,"$1"),o=o.replace(e,n),r},getRegex:()=>new RegExp(o,t)};return r}let nD={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},nL=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,nM=/(?:[*+-]|\d{1,9}[.)])/,nz=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,nI=nO(nz).replace(/bull/g,nM).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),nB=nO(nz).replace(/bull/g,nM).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),nN=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,nj=/(?!\s*\])(?:\\.|[^\[\]\\])+/,nU=nO(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",nj).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),nF=nO(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,nM).getRegex(),nH="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",nq=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,nV=nO("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",nq).replace("tag",nH).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),nW=nO(nN).replace("hr",nL).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nH).getRegex(),nG={blockquote:nO(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",nW).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:nU,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:nL,html:nV,lheading:nI,list:nF,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:nW,table:nT,text:/^[^\n]+/},nK=nO("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",nL).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nH).getRegex(),nZ={...nG,lheading:nB,table:nK,paragraph:nO(nN).replace("hr",nL).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nK).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nH).getRegex()},nY={...nG,html:nO("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",nq).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nT,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:nO(nN).replace("hr",nL).replace("heading"," *#{1,6} *[^\n]").replace("lheading",nI).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},nJ=/^( {2,}|\\)\n(?!\s*$)/,nX=/[\p{P}\p{S}]/u,nQ=/[\s\p{P}\p{S}]/u,n0=/[^\s\p{P}\p{S}]/u,n1=nO(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,nQ).getRegex(),n2=/(?!~)[\p{P}\p{S}]/u,n5=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,n3=nO(n5,"u").replace(/punct/g,nX).getRegex(),n6=nO(n5,"u").replace(/punct/g,n2).getRegex(),n9="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",n7=nO(n9,"gu").replace(/notPunctSpace/g,n0).replace(/punctSpace/g,nQ).replace(/punct/g,nX).getRegex(),n8=nO(n9,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,n2).getRegex(),n4=nO("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,n0).replace(/punctSpace/g,nQ).replace(/punct/g,nX).getRegex(),se=nO(/\\(punct)/,"gu").replace(/punct/g,nX).getRegex(),si=nO(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),so=nO(nq).replace("(?:--\x3e|$)","--\x3e").getRegex(),sr=nO("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",so).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),sn=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ss=nO(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",sn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),sa=nO(/^!?\[(label)\]\[(ref)\]/).replace("label",sn).replace("ref",nj).getRegex(),sl=nO(/^!?\[(ref)\](?:\[\])?/).replace("ref",nj).getRegex(),sc=nO("reflink|nolink(?!\\()","g").replace("reflink",sa).replace("nolink",sl).getRegex(),sd={_backpedal:nT,anyPunctuation:se,autolink:si,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:nJ,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:nT,emStrongLDelim:n3,emStrongRDelimAst:n7,emStrongRDelimUnd:n4,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:ss,nolink:sl,punctuation:n1,reflink:sa,reflinkSearch:sc,tag:sr,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:nT},sh={...sd,link:nO(/^!?\[(label)\]\((.*?)\)/).replace("label",sn).getRegex(),reflink:nO(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",sn).getRegex()},sp={...sd,emStrongRDelimAst:n8,emStrongLDelim:n6,url:nO(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},su={...sp,br:nO(nJ).replace("{2,}","*").getRegex(),text:nO(sp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},sg={normal:nG,gfm:nZ,pedantic:nY},sf={normal:sd,gfm:sp,breaks:su,pedantic:sh},sm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sb=e=>sm[e];function sv(e,t){if(t){if(nD.escapeTest.test(e))return e.replace(nD.escapeReplace,sb)}else if(nD.escapeTestNoEncode.test(e))return e.replace(nD.escapeReplaceNoEncode,sb);return e}function sy(e){try{e=encodeURI(e).replace(nD.percentDecode,"%")}catch{return null}return e}function sw(e,t){let o=e.replace(nD.findPipe,(e,t,o)=>{let r=!1,n=t;for(;--n>=0&&"\\"===o[n];)r=!r;return r?"|":" |"}).split(nD.splitPipe),r=0;if(o[0].trim()||o.shift(),o.length>0&&!o.at(-1)?.trim()&&o.pop(),t)if(o.length>t)o.splice(t);else for(;o.length<t;)o.push("");for(;r<o.length;r++)o[r]=o[r].trim().replace(nD.slashPipe,"|");return o}function sk(e,t,o){let r=e.length;if(0===r)return"";let n=0;for(;n<r;)if(e.charAt(r-n-1)===t)n++;else break;return e.slice(0,r-n)}function sx(e,t,o,r,n){let a=t.href,l=t.title||null,c=e[1].replace(n.other.outputLinkReplace,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;let e={type:"link",raw:o,href:a,title:l,text:c,tokens:r.inlineTokens(c)};return r.state.inLink=!1,e}return{type:"image",raw:o,href:a,title:l,text:c}}let _Tokenizer=class _Tokenizer{options;rules;lexer;constructor(e){this.options=e||nR}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:sk(e,"\n")}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],o=function(e,t,o){let r=e.match(o.other.indentCodeCompensation);if(null===r)return t;let n=r[1];return t.split("\n").map(e=>{let t=e.match(o.other.beginningSpace);if(null===t)return e;let[r]=t;return r.length>=n.length?e.slice(n.length):e}).join("\n")}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=sk(e,"#");this.options.pedantic?e=t.trim():(!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:sk(t[0],"\n")}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=sk(t[0],"\n").split("\n"),o="",r="",n=[];for(;e.length>0;){let t,a=!1,l=[];for(t=0;t<e.length;t++)if(this.rules.other.blockquoteStart.test(e[t]))l.push(e[t]),a=!0;else if(a)break;else l.push(e[t]);e=e.slice(t);let c=l.join("\n"),d=c.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${c}`:c,r=r?`${r}
${d}`:d;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,n,!0),this.lexer.state.top=h,0===e.length)break;let p=n.at(-1);if(p?.type==="code")break;if(p?.type==="blockquote"){let t=p.raw+"\n"+e.join("\n"),a=this.blockquote(t);n[n.length-1]=a,o=o.substring(0,o.length-p.raw.length)+a.raw,r=r.substring(0,r.length-p.text.length)+a.text;break}if(p?.type==="list"){let t=p.raw+"\n"+e.join("\n"),a=this.list(t);n[n.length-1]=a,o=o.substring(0,o.length-p.raw.length)+a.raw,r=r.substring(0,r.length-p.raw.length)+a.raw,e=t.substring(n.at(-1).raw.length).split("\n");continue}}return{type:"blockquote",raw:o,tokens:n,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let o=t[1].trim(),r=o.length>1,n={type:"list",raw:"",ordered:r,start:r?+o.slice(0,-1):"",loose:!1,items:[]};o=r?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=r?o:"[*+-]");let a=this.rules.other.listItemRegex(o),l=!1;for(;e;){let o,r=!1,c="",d="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;c=t[0],e=e.substring(c.length);let h=t[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),p=e.split("\n",1)[0],u=!h.trim(),g=0;if(this.options.pedantic?(g=2,d=h.trimStart()):u?g=t[1].length+1:(g=(g=t[2].search(this.rules.other.nonSpaceChar))>4?1:g,d=h.slice(g),g+=t[1].length),u&&this.rules.other.blankLine.test(p)&&(c+=p+"\n",e=e.substring(p.length+1),r=!0),!r){let t=this.rules.other.nextBulletRegex(g),o=this.rules.other.hrRegex(g),r=this.rules.other.fencesBeginRegex(g),n=this.rules.other.headingBeginRegex(g),a=this.rules.other.htmlBeginRegex(g);for(;e;){let l,f=e.split("\n",1)[0];if(p=f,l=this.options.pedantic?p=p.replace(this.rules.other.listReplaceNesting,"  "):p.replace(this.rules.other.tabCharGlobal,"    "),r.test(p)||n.test(p)||a.test(p)||t.test(p)||o.test(p))break;if(l.search(this.rules.other.nonSpaceChar)>=g||!p.trim())d+="\n"+l.slice(g);else{if(u||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||r.test(h)||n.test(h)||o.test(h))break;d+="\n"+p}u||p.trim()||(u=!0),c+=f+"\n",e=e.substring(f.length+1),h=l.slice(g)}}!n.loose&&(l?n.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(l=!0));let f=null;this.options.gfm&&(f=this.rules.other.listIsTask.exec(d))&&(o="[ ] "!==f[0],d=d.replace(this.rules.other.listReplaceTask,"")),n.items.push({type:"list_item",raw:c,task:!!f,checked:o,loose:!1,text:d,tokens:[]}),n.raw+=c}let c=n.items.at(-1);if(!c)return;c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),n.raw=n.raw.trimEnd();for(let e=0;e<n.items.length;e++)if(this.lexer.state.top=!1,n.items[e].tokens=this.lexer.blockTokens(n.items[e].text,[]),!n.loose){let t=n.items[e].tokens.filter(e=>"space"===e.type);n.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}if(n.loose)for(let e=0;e<n.items.length;e++)n.items[e].loose=!0;return n}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:o,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let o=sw(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(o.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push("right"):this.rules.other.tableAlignCenter.test(e)?a.align.push("center"):this.rules.other.tableAlignLeft.test(e)?a.align.push("left"):a.align.push(null);for(let e=0;e<o.length;e++)a.header.push({text:o[e],tokens:this.lexer.inline(o[e]),header:!0,align:a.align[e]});for(let e of n)a.rows.push(sw(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=sk(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(")"))return -1;let o=0;for(let r=0;r<e.length;r++)if("\\"===e[r])r++;else if("("===e[r])o++;else if(e[r]===t[1]&&--o<0)return r;return -1}(t[2],"()");if(e>-1){let o=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let o=t[2],r="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(o);e&&(o=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(o=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?o.slice(1):o.slice(1,-1)),sx(t,{href:o?o.replace(this.rules.inline.anyPunctuation,"$1"):o,title:r?r.replace(this.rules.inline.anyPunctuation,"$1"):r},t[0],this.lexer,this.rules)}}reflink(e,t){let o;if((o=this.rules.inline.reflink.exec(e))||(o=this.rules.inline.nolink.exec(e))){let e=t[(o[2]||o[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=o[0].charAt(0);return{type:"text",raw:e,text:e}}return sx(o,e,o[0],this.lexer,this.rules)}}emStrong(e,t,o=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&o.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!o||this.rules.inline.punctuation.exec(o))){let o=[...r[0]].length-1,n,a,l=o,c=0,d="*"===r[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+o);null!=(r=d.exec(t));){if(!(n=r[1]||r[2]||r[3]||r[4]||r[5]||r[6]))continue;if(a=[...n].length,r[3]||r[4]){l+=a;continue}if((r[5]||r[6])&&o%3&&!((o+a)%3)){c+=a;continue}if((l-=a)>0)continue;a=Math.min(a,a+l+c);let t=[...r[0]][0].length,d=e.slice(0,o+r.index+t+a);if(Math.min(o,a)%2){let e=d.slice(1,-1);return{type:"em",raw:d,text:e,tokens:this.lexer.inlineTokens(e)}}let h=d.slice(2,-2);return{type:"strong",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return o&&r&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,o;return o="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,o;if("@"===t[2])o="mailto:"+(e=t[0]);else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0])e=t[0],o="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}};let _Lexer=class _Lexer{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nR,this.options.tokenizer=this.options.tokenizer||new _Tokenizer,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:nD,block:sg.normal,inline:sf.normal};this.options.pedantic?(t.block=sg.pedantic,t.inline=sf.pedantic):this.options.gfm&&(t.block=sg.gfm,this.options.breaks?t.inline=sf.breaks:t.inline=sf.gfm),this.tokenizer.rules=t}static get rules(){return{block:sg,inline:sf}}static lex(e,t){return new _Lexer(t).lex(e)}static lexInline(e,t){return new _Lexer(t).inlineTokens(e)}lex(e){e=e.replace(nD.carriageReturn,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],o=!1){for(this.options.pedantic&&(e=e.replace(nD.tabCharGlobal,"    ").replace(nD.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(o=>!!(r=o.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let o=t.at(-1);1===r.raw.length&&void 0!==o?o.raw+="\n":t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+="\n"+r.raw,o.text+="\n"+r.text,this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if((r=this.tokenizer.fences(e))||(r=this.tokenizer.heading(e))||(r=this.tokenizer.hr(e))||(r=this.tokenizer.blockquote(e))||(r=this.tokenizer.list(e))||(r=this.tokenizer.html(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+="\n"+r.raw,o.text+="\n"+r.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if((r=this.tokenizer.table(e))||(r=this.tokenizer.lheading(e))){e=e.substring(r.raw.length),t.push(r);continue}let n=e;if(this.options.extensions?.startBlock){let t,o=1/0,r=e.slice(1);this.options.extensions.startBlock.forEach(e=>{"number"==typeof(t=e.call({lexer:this},r))&&t>=0&&(o=Math.min(o,t))}),o<1/0&&o>=0&&(n=e.substring(0,o+1))}if(this.state.top&&(r=this.tokenizer.paragraph(n))){let a=t.at(-1);o&&a?.type==="paragraph"?(a.raw+="\n"+r.raw,a.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),o=n.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+="\n"+r.raw,o.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let o=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(o));)e.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.anyPunctuation.exec(o));)o=o.slice(0,r.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let n=!1,a="";for(;e;){let r;if(n||(a=""),n=!1,this.options.extensions?.inline?.some(o=>!!(r=o.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if((r=this.tokenizer.escape(e))||(r=this.tokenizer.tag(e))||(r=this.tokenizer.link(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let o=t.at(-1);"text"===r.type&&o?.type==="text"?(o.raw+=r.raw,o.text+=r.text):t.push(r);continue}if((r=this.tokenizer.emStrong(e,o,a))||(r=this.tokenizer.codespan(e))||(r=this.tokenizer.br(e))||(r=this.tokenizer.del(e))||(r=this.tokenizer.autolink(e))||!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let l=e;if(this.options.extensions?.startInline){let t,o=1/0,r=e.slice(1);this.options.extensions.startInline.forEach(e=>{"number"==typeof(t=e.call({lexer:this},r))&&t>=0&&(o=Math.min(o,t))}),o<1/0&&o>=0&&(l=e.substring(0,o+1))}if(r=this.tokenizer.inlineText(l)){e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(a=r.raw.slice(-1)),n=!0;let o=t.at(-1);o?.type==="text"?(o.raw+=r.raw,o.text+=r.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return t}};let _Renderer=class _Renderer{options;parser;constructor(e){this.options=e||nR}space(e){return""}code({text:e,lang:t,escaped:o}){let r=(t||"").match(nD.notSpaceStart)?.[0],n=e.replace(nD.endingNewline,"")+"\n";return r?'<pre><code class="language-'+sv(r)+'">'+(o?n:sv(n,!0))+"</code></pre>\n":"<pre><code>"+(o?n:sv(n,!0))+"</code></pre>\n"}blockquote({tokens:e}){let t=this.parser.parse(e);return`<blockquote>
${t}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return"<hr>\n"}list(e){let t=e.ordered,o=e.start,r="";for(let t=0;t<e.items.length;t++){let o=e.items[t];r+=this.listitem(o)}let n=t?"ol":"ul";return"<"+n+(t&&1!==o?' start="'+o+'"':"")+">\n"+r+"</"+n+">\n"}listitem(e){let t="";if(e.task){let o=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=o+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=o+" "+sv(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:o+" ",text:o+" ",escaped:!0}):t+=o+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",o="";for(let t=0;t<e.header.length;t++)o+=this.tablecell(e.header[t]);t+=this.tablerow({text:o});let r="";for(let t=0;t<e.rows.length;t++){let n=e.rows[t];o="";for(let e=0;e<n.length;e++)o+=this.tablecell(n[e]);r+=this.tablerow({text:o})}return r&&(r=`<tbody>${r}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+r+"</table>\n"}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),o=e.header?"th":"td";return(e.align?`<${o} align="${e.align}">`:`<${o}>`)+t+`</${o}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${sv(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:o}){let r=this.parser.parseInline(o),n=sy(e);if(null===n)return r;let a='<a href="'+(e=n)+'"';return t&&(a+=' title="'+sv(t)+'"'),a+=">"+r+"</a>"}image({href:e,title:t,text:o}){let r=sy(e);if(null===r)return sv(o);e=r;let n=`<img src="${e}" alt="${o}"`;return t&&(n+=` title="${sv(t)}"`),n+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:sv(e.text)}};let _TextRenderer=class _TextRenderer{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}};let _Parser=class _Parser{options;renderer;textRenderer;constructor(e){this.options=e||nR,this.options.renderer=this.options.renderer||new _Renderer,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new _TextRenderer}static parse(e,t){return new _Parser(t).parse(e)}static parseInline(e,t){return new _Parser(t).parseInline(e)}parse(e,t=!0){let o="";for(let r=0;r<e.length;r++){let n=e[r];if(this.options.extensions?.renderers?.[n.type]){let e=this.options.extensions.renderers[n.type].call({parser:this},n);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(n.type)){o+=e||"";continue}}switch(n.type){case"space":o+=this.renderer.space(n);continue;case"hr":o+=this.renderer.hr(n);continue;case"heading":o+=this.renderer.heading(n);continue;case"code":o+=this.renderer.code(n);continue;case"table":o+=this.renderer.table(n);continue;case"blockquote":o+=this.renderer.blockquote(n);continue;case"list":o+=this.renderer.list(n);continue;case"html":o+=this.renderer.html(n);continue;case"paragraph":o+=this.renderer.paragraph(n);continue;case"text":{let a=n,l=this.renderer.text(a);for(;r+1<e.length&&"text"===e[r+1].type;)a=e[++r],l+="\n"+this.renderer.text(a);t?o+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):o+=l;continue}default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return o}parseInline(e,t=this.renderer){let o="";for(let r=0;r<e.length;r++){let n=e[r];if(this.options.extensions?.renderers?.[n.type]){let e=this.options.extensions.renderers[n.type].call({parser:this},n);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){o+=e||"";continue}}switch(n.type){case"escape":case"text":o+=t.text(n);break;case"html":o+=t.html(n);break;case"link":o+=t.link(n);break;case"image":o+=t.image(n);break;case"strong":o+=t.strong(n);break;case"em":o+=t.em(n);break;case"codespan":o+=t.codespan(n);break;case"br":o+=t.br(n);break;case"del":o+=t.del(n);break;default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return o}};let _Hooks=class _Hooks{options;block;constructor(e){this.options=e||nR}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?_Lexer.lex:_Lexer.lexInline}provideParser(){return this.block?_Parser.parse:_Parser.parseInline}};let Marked=class Marked{defaults=nP();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=_Parser;Renderer=_Renderer;TextRenderer=_TextRenderer;Lexer=_Lexer;Tokenizer=_Tokenizer;Hooks=_Hooks;constructor(...e){this.use(...e)}walkTokens(e,t){let o=[];for(let r of e)switch(o=o.concat(t.call(this,r)),r.type){case"table":for(let e of r.header)o=o.concat(this.walkTokens(e.tokens,t));for(let e of r.rows)for(let r of e)o=o.concat(this.walkTokens(r.tokens,t));break;case"list":o=o.concat(this.walkTokens(r.items,t));break;default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let n=e[r].flat(1/0);o=o.concat(this.walkTokens(n,t))}):e.tokens&&(o=o.concat(this.walkTokens(e.tokens,t)))}}return o}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let o={...e};if(o.async=this.defaults.async||o.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let o=t.renderers[e.name];o?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=o.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let o=t[e.level];o?o.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),o.extensions=t),e.renderer){let t=this.defaults.renderer||new _Renderer(this.defaults);for(let o in e.renderer){if(!(o in t))throw Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let r=e.renderer[o],n=t[o];t[o]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=n.apply(t,e)),o||""}}o.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new _Tokenizer(this.defaults);for(let o in e.tokenizer){if(!(o in t))throw Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let r=e.tokenizer[o],n=t[o];t[o]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=n.apply(t,e)),o}}o.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new _Hooks;for(let o in e.hooks){if(!(o in t))throw Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let r=e.hooks[o],n=t[o];_Hooks.passThroughHooks.has(o)?t[o]=e=>{if(this.defaults.async)return Promise.resolve(r.call(t,e)).then(e=>n.call(t,e));let o=r.call(t,e);return n.call(t,o)}:t[o]=(...e)=>{let o=r.apply(t,e);return!1===o&&(o=n.apply(t,e)),o}}o.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;o.walkTokens=function(e){let o=[];return o.push(r.call(this,e)),t&&(o=o.concat(t.call(this,e))),o}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return _Lexer.lex(e,t??this.defaults)}parser(e,t){return _Parser.parse(e,t??this.defaults)}parseMarkdown(e){return(t,o)=>{let r={...o},n={...this.defaults,...r},a=this.onError(!!n.silent,!!n.async);if(!0===this.defaults.async&&!1===r.async)return a(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(null==t)return a(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return a(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));n.hooks&&(n.hooks.options=n,n.hooks.block=e);let l=n.hooks?n.hooks.provideLexer():e?_Lexer.lex:_Lexer.lexInline,c=n.hooks?n.hooks.provideParser():e?_Parser.parse:_Parser.parseInline;if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(t):t).then(e=>l(e,n)).then(e=>n.hooks?n.hooks.processAllTokens(e):e).then(e=>n.walkTokens?Promise.all(this.walkTokens(e,n.walkTokens)).then(()=>e):e).then(e=>c(e,n)).then(e=>n.hooks?n.hooks.postprocess(e):e).catch(a);try{n.hooks&&(t=n.hooks.preprocess(t));let e=l(t,n);n.hooks&&(e=n.hooks.processAllTokens(e)),n.walkTokens&&this.walkTokens(e,n.walkTokens);let o=c(e,n);return n.hooks&&(o=n.hooks.postprocess(o)),o}catch(e){return a(e)}}}onError(e,t){return o=>{if(o.message+="\nPlease report this to https://github.com/markedjs/marked.",e){let e="<p>An error occurred:</p><pre>"+sv(o.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(o);throw o}}};let s$=new Marked;function s_(e,t){return s$.parse(e,t)}s_.options=s_.setOptions=function(e){return s$.setOptions(e),s_.defaults=s$.defaults,nR=s_.defaults,s_},s_.getDefaults=nP,s_.defaults=nR,s_.use=function(...e){return s$.use(...e),s_.defaults=s$.defaults,nR=s_.defaults,s_},s_.walkTokens=function(e,t){return s$.walkTokens(e,t)},s_.parseInline=s$.parseInline,s_.Parser=_Parser,s_.parser=_Parser.parse,s_.Renderer=_Renderer,s_.TextRenderer=_TextRenderer,s_.Lexer=_Lexer,s_.lexer=_Lexer.lex,s_.Tokenizer=_Tokenizer,s_.Hooks=_Hooks,s_.parse=s_,s_.options,s_.setOptions,s_.use,s_.walkTokens,s_.parseInline,_Parser.parse,_Lexer.lex;var sC=Object.defineProperty,sS=Object.getOwnPropertyDescriptor,sA=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sS(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sC(t,o,a),a};let sE=class extends lit_element_r{constructor(){super(...arguments),this.markdown=""}render(){return tf`${this.markdown?nE(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){s_.setOptions({gfm:!0}),s_.use({renderer:{image:function({href:e,title:t,text:o}){let r=[],n=[];return e&&({href:e,dimensions:r}=function(e){let t=[],o=e.split("|").map(e=>e.trim());e=o[0];let r=o[1];if(r){let e=/height=(\d+)/.exec(r),o=/width=(\d+)/.exec(r),n=e?e[1]:"",a=o?o[1]:"",l=isFinite(parseInt(a)),c=isFinite(parseInt(n));l&&t.push(`width="${a}"`),c&&t.push(`height="${n}"`)}return{href:e,dimensions:t}}(e),n.push(`src="${sM(e)}"`)),o&&n.push(`alt="${sM(o)}"`),t&&n.push(`title="${sM(t)}"`),r.length&&(n=n.concat(r)),`<img ${n.join(" ")}>`},paragraph:function({tokens:e}){let t=this.parser.parseInline(e);return`<p>${t}</p>`},link:function({href:e,title:t,tokens:o}){if("string"!=typeof e)return"";let r=this.parser.parseInline(o);return e===r&&(r=sz(r)),t="string"==typeof t?sM(sz(t)):"",e=sz(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),`<a href="${e}" title="${t||e}" draggable="false">${r}</a>`},code:function({text:e,lang:t}){return e=e.replace(/</g,"&lt;"),`<pre class="language-${t}"><code>${e}</code></pre>`},codespan:function({text:e}){return e=e.replace(/</g,"&lt;"),`<code>${e}</code>`}}});let t=await s_.parse(e.replace(sD,e=>`\\${e}`));return ra(t=function(e){let t,o=[],r=0,n=0;for(;null!==(t=sL.exec(e));){r<(n=t.index||0)&&o.push(e.substring(r,n)),r=(t.index||0)+t[0].length;let[,a,l]=t;o.push(a?`$(${l})`:function(e){let[,t,o]=sT.exec(e.id)??[void 0,"error",void 0];return t.startsWith("gitlens-")&&(t=`gl-${t.substring(8)}`),`<code-icon icon="${t}"${o?` modifier="${o}"`:""}></code-icon>`}({id:l}))}return r<e.length&&o.push(e.substring(r)),o.join("")}(t))}};sE.styles=eU`
		a,
		a code {
			text-decoration: none;
			color: var(--vscode-textLink-foreground);
		}

		a:hover,
		a:hover code {
			color: var(--vscode-textLink-activeForeground);
		}

		a:hover:not(.disabled) {
			cursor: pointer;
		}

		p,
		.code,
		ul,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 8px 0;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			line-height: 1.1;
		}

		code {
			background: var(--vscode-textCodeBlock-background);
			border-radius: 3px;
			padding: 0px 4px 2px 4px;
			font-family: var(--vscode-editor-font-family);
		}

		code code-icon {
			color: inherit;
			font-size: inherit;
			vertical-align: middle;
		}

		hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}

		p:first-child,
		.code:first-child,
		ul:first-child {
			margin-top: 0;
		}

		p:last-child,
		.code:last-child,
		ul:last-child {
			margin-bottom: 0;
		}

		/* MarkupContent Layout */
		ul {
			padding-left: 20px;
		}
		ol {
			padding-left: 20px;
		}

		li > p {
			margin-bottom: 0;
		}

		li > ul {
			margin-top: 0;
		}
	`,sA([tP({type:String})],sE.prototype,"markdown",2),sE=sA([tS("gl-markdown")],sE);let sP="[A-Za-z0-9-]+",sR="~[A-Za-z]+",sT=RegExp(`^(${sP})(${sR})?$`),sO=RegExp(`\\$\\(${sP}(?:${sR})?\\)`,"g"),sD=RegExp(`\\\\${sO.source}`,"g"),sL=RegExp(`(\\\\)?\\$\\((${sP}(?:${sR})?)\\)`,"g");function sM(e){return e.replace(/"/g,"&quot;")}function sz(e){return e?e.replace(/\\([\\`*_{}[\]()#+\-.!~])/g,"$1"):e}o0.define("sl-popup");var sI=Object.defineProperty,sB=Object.getOwnPropertyDescriptor,sN=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sB(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sI(t,o,a),a};let sj=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=ec(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let o=ec(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of sj.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),sj.openPopovers.delete(this),super.disconnectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return tf`<sl-popup
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
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body scrollable"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return sj.closeOthers(this),this.open=!0,sj.openPopovers.add(this),ed(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,sj.openPopovers.delete(this),ed(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};sj.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},sj.openPopovers=new Set,sj.styles=[rg,eU`
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
				clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
			}

			.popover[data-current-placement^='bottom']::part(arrow) {
				border-bottom-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
			}

			.popover[data-current-placement^='left']::part(arrow) {
				border-bottom-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
			}

			.popover[data-current-placement^='right']::part(arrow) {
				border-top-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
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
		`],sN([tO("#popover")],sj.prototype,"body",2),sN([tO("sl-popup")],sj.prototype,"popup",2),sN([tP({reflect:!0})],sj.prototype,"placement",2),sN([tP({type:Object})],sj.prototype,"anchor",2),sN([tP({reflect:!0,type:Boolean})],sj.prototype,"disabled",2),sN([tP({type:Number})],sj.prototype,"distance",2),sN([tP({reflect:!0,type:Boolean})],sj.prototype,"open",2),sN([tP({reflect:!0,type:Boolean})],sj.prototype,"arrow",2),sN([tP({type:Number})],sj.prototype,"skidding",2),sN([tP()],sj.prototype,"trigger",2),sN([tP({type:Boolean})],sj.prototype,"hoist",2),sN([rO("open",{afterFirstUpdate:!0})],sj.prototype,"handleOpenChange",1),sN([rO(["distance","hoist","placement","skidding"])],sj.prototype,"handleOptionsChange",1),sN([rO("disabled")],sj.prototype,"handleDisabledChange",1),sj=sN([tS("gl-popover")],sj);var sU=Object.defineProperty,sF=Object.getOwnPropertyDescriptor,sH=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sF(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sU(t,o,a),a};let sq=class extends GlElement{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}renderDate(){return this.date?tf`<formatted-date
			.date=${new Date(this.date)}
			.format=${this.dateFormat}
			.dateStyle=${this.dateStyle}
		></formatted-date>`:tb}render(){let e,t;switch(this.type){case"issue":t="closed"===this.status?"merged":"opened",e="closed"===this.status?"pass":"issues";break;case"pr":switch(t=this.status,this.status){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed";break;default:e="git-pull-request"}break;default:t="opened",e="link"}return this.compact?tf`
				<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
				<p class="title">${this.identifier}</p>
			`:tf`
			<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.identifier} ${this.status?this.status:tb} ${this.renderDate()}</p>
			${tL(!0===this.details,()=>tf`
					<p class="details">
						<gl-button appearance="toolbar" tooltip="Open Details" @click=${()=>this.onDetailsClicked()}
							><code-icon icon="eye"></code-icon
						></gl-button>
					</p>
				`)}
		`}onDetailsClicked(){this.emit("gl-issue-pull-request-details")}};sq.styles=eU`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
			font-size: 1.3rem;
			grid-template-columns: min-content 1fr min-content;
		}

		:host([compact]) {
			grid-template-columns: min-content 1fr;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			text-align: center;
			padding-top: 0.1rem;
		}

		.icon--opened {
			color: var(--vscode-gitlens-openPullRequestIconColor);
		}
		.icon--closed {
			color: var(--vscode-gitlens-closedPullRequestIconColor);
		}
		.icon--merged {
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
		}

		.details {
			grid-column: 3;
			grid-row: 1 / 3;
			margin: 0;
		}
	`,sH([tP()],sq.prototype,"url",2),sH([tP()],sq.prototype,"name",2),sH([tP()],sq.prototype,"date",2),sH([tP()],sq.prototype,"dateFormat",2),sH([tP()],sq.prototype,"dateStyle",2),sH([tP()],sq.prototype,"status",2),sH([tP()],sq.prototype,"type",2),sH([tP()],sq.prototype,"identifier",2),sH([tP({type:Boolean,reflect:!0})],sq.prototype,"compact",2),sH([tP({type:Boolean})],sq.prototype,"details",2),sq=sH([tS("issue-pull-request")],sq);var sV=Object.defineProperty,sW=Object.getOwnPropertyDescriptor,sG=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sW(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sV(t,o,a),a};let sK=class extends lit_element_r{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return tf`<div class="skeleton" style=${e}></div>`}};sK.styles=eU`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,sG([tP({type:Number})],sK.prototype,"lines",2),sK=sG([tS("skeleton-loader")],sK);var sZ=Object.defineProperty,sY=Object.getOwnPropertyDescriptor,sJ=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?sY(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&sZ(t,o,a),a};let sX=class extends GlDetailsBase{constructor(){super(...arguments),this.tab="commit",this.explainBusy=!1}get isStash(){return this.state?.commit?.stashNumber!=null}get shortSha(){return this.state?.commit?.shortSha??""}get navigation(){if(this.state?.navigationStack==null)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return tf`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="wip">Overview</gl-button>
					</span>
				</p>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="pick-commit">Choose Commit...</gl-button>
						<gl-button density="compact" data-action="search-commit" tooltip="Search for Commit"
							><code-icon icon="search"></code-icon
						></gl-button>
					</span>
				</p>
			</div>
		`}renderCommitMessage(){let e=this.state?.commit;if(null==e)return;let t=e.message,o=t.indexOf("\0\n\0");return tf`
			<div class="section section--message">
				${tL(!this.isStash,()=>tf`
						<commit-identity
							class="mb-1"
							name="${e.author.name}"
							url="${e.author.email?`mailto:${e.author.email}`:void 0}"
							date=${e.author.date}
							.dateFormat="${this.preferences?.dateFormat}"
							.avatarUrl="${e.author.avatar??""}"
							.showAvatar="${this.preferences?.avatars??!0}"
							.actionLabel="${e.sha===aw?"modified":"committed"}"
						></commit-identity>
					`)}
				<div class="message-block">
					${tL(-1===o,()=>tf`<p class="message-block__text scrollable" data-region="message">
								<strong>${ra(t)}</strong>
							</p>`,()=>tf`<p class="message-block__text scrollable" data-region="message">
								<strong>${ra(t.substring(0,o))}</strong><br /><span
									>${ra(t.substring(o+3))}</span
								>
							</p>`)}
				</div>
			</div>
		`}renderJiraLink(){if(null==this.state)return"Jira issues";let{hasAccount:e,hasConnectedJira:t}=this.state,o=tf`<a
				href="${rl("gitlens.plus.cloudIntegrations.connect",{integrationIds:["jira"],source:{source:"inspect",detail:{action:"connect",integration:"jira"}}})}"
				>Connect to Jira Cloud</a
			>
			&mdash; ${e?"":"sign up and "}get access to automatic rich Jira autolinks`;return e&&t&&(o=tf`<i class="codicon codicon-check" style="vertical-align: text-bottom"></i> Jira connected
				&mdash; automatic rich Jira autolinks are enabled`),tf`<gl-popover hoist class="inline-popover">
			<span class="tooltip-hint" slot="anchor"
				>Jira issues <code-icon icon="${t?"check":"gl-unplug"}"></code-icon
			></span>
			<span slot="content">${o}</span>
		</gl-popover>`}renderAutoLinks(){if(!this.state?.autolinksEnabled||this.isUncommitted)return;let e=new Map,t=new Map;if(this.state?.commit?.autolinks!=null)for(let o of this.state.commit.autolinks)e.set(o.id,{type:"autolink",value:o}),t.set(o.url,o.id);if(this.state?.autolinkedIssues!=null)for(let o of this.state.autolinkedIssues){if(null!=o.url){let r=t.get(o.url);null!=r&&e.delete(r)}e.set(o.id,{type:"issue",value:o})}if(this.state?.pullRequest!=null){if(null!=this.state.pullRequest.url){let o=t.get(this.state.pullRequest.url);null!=o&&e.delete(o)}e.set(this.state.pullRequest.id,{type:"pr",value:this.state.pullRequest})}let o=[],r=[],n=[];for(let t of e.values())switch(t.type){case"autolink":o.push(t.value);break;case"issue":r.push(t.value);break;case"pr":n.push(t.value)}let{hasAccount:a,hasConnectedJira:l}=this.state??{},c=l?rl("gitlens.plus.cloudIntegrations.manage",{source:{source:"inspect",detail:{action:"connect",integration:"jira"}}}):rl("gitlens.plus.cloudIntegrations.connect",{integrationIds:["jira"],source:{source:"inspect",detail:{action:"connect",integration:"jira"}}});return tf`
			<webview-pane
				collapsable
				?expanded=${this.state?.preferences?.autolinksExpanded??!0}
				?loading=${!this.state?.includeRichContent}
				data-region="rich-pane"
			>
				<span slot="title">Autolinks</span>
				<span slot="subtitle" data-region="autolink-count"
					>${this.state?.includeRichContent||e.size?`${e.size} found `:""}${this.state?.includeRichContent?"":"…"}</span
				>
				<action-nav slot="actions">
					<action-item
						label="${a&&l?"Manage Jira":"Connect to Jira Cloud"}"
						icon="gl-provider-jira"
						href="${c}"
					></action-item>
					<action-item
						data-action="autolinks-settings"
						label="Autolinks Settings"
						icon="gear"
						href="command:gitlens.showSettingsPage!autolinks"
					></action-item>
				</action-nav>
				${tL(null==this.state,()=>tf`
						<div class="section" data-region="autolinks">
							<section class="auto-link" aria-label="Custom Autolinks" data-region="custom-autolinks">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="pull-request" aria-label="Pull request" data-region="pull-request">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="issue" aria-label="Issue" data-region="issue">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
						</div>
					`,()=>0===e.size?tf`
								<div class="section" data-region="rich-info">
									<p>
										<code-icon icon="info"></code-icon>&nbsp;Use
										<gl-tooltip hoist>
											<a
												href="command:gitlens.showSettingsPage!autolinks"
												data-action="autolink-settings"
												>autolinks</a
											>
											<span slot="content">Configure autolinks</span>
										</gl-tooltip>
										to linkify external references, like ${this.renderJiraLink()} or Zendesk
										tickets, in commit messages.
									</p>
								</div>
							`:tf`
							<div class="section" data-region="autolinks">
								${o.length?tf`
											<section
												class="auto-link"
												aria-label="Custom Autolinks"
												data-region="custom-autolinks"
											>
												${o.map(e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),tf`
														<issue-pull-request
															type="autolink"
															name="${t}"
															url="${e.url}"
															identifier="${e.prefix}${e.id}"
															status=""
														></issue-pull-request>
													`})}
											</section>
									  `:void 0}
								${n.length?tf`
											<section
												class="pull-request"
												aria-label="Pull request"
												data-region="pull-request"
											>
												${n.map(e=>tf`
														<issue-pull-request
																type="pr"
																name="${e.title}"
																url="${e.url}"
																identifier="#${e.id}"
																status="${e.state}"
																.date=${e.updatedDate}
																.dateFormat="${this.state.preferences.dateFormat}"
																.dateStyle="${this.state.preferences.dateStyle}"
															></issue-pull-request>
														</section>
									  				`)}
											</section>
									  `:void 0}
								${r.length?tf`
											<section class="issue" aria-label="Issue" data-region="issue">
												${r.map(e=>tf`
														<issue-pull-request
															type="issue"
															name="${e.title}"
															url="${e.url}"
															identifier="${e.id}"
															status="${e.state}"
															.date=${e.closed?e.closedDate:e.createdDate}
															.dateFormat="${this.state.preferences.dateFormat}"
															.dateStyle="${this.state.preferences.dateStyle}"
														></issue-pull-request>
													`)}
											</section>
									  `:void 0}
							</div>
						`)}
			</webview-pane>
		`}renderExplainAi(){if(this.state?.orgSettings.ai===!1)return;let e=this.explain?.result!=null?`${this.explain.result.summary}

${this.explain.result.body}`:void 0;return tf`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<action-nav slot="actions">
					<action-item
						data-action="switch-ai"
						label="Switch AI Provider/Model"
						icon="arrow-swap"
					></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this commit.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="explain-commit"
								aria-busy="${this.explainBusy?"true":tb}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin" slot="prefix"></code-icon>Explain
								Changes</gl-button
							>
						</span>
					</p>
					${e?tf`<div class="ai-content" data-region="commit-explanation">
								<gl-markdown
									class="ai-content__summary scrollable"
									markdown="${e}"
								></gl-markdown>
						  </div>`:this.explain?.error?tf`<div class="ai-content has-error" data-region="commit-explanation">
									<p class="ai-content__summary scrollable">
										${this.explain.error.message??"Error retrieving content"}
									</p>
						    </div>`:void 0}
				</div>
			</webview-pane>
		`}render(){return this.state?.commit==null?this.renderEmptyContent():tf`
			${this.renderCommitMessage()}
			<webview-pane-group flexible>
				${this.renderAutoLinks()}
				${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(this.state.commit.stats))}
				${this.renderExplainAi()}
			</webview-pane-group>
		`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key){e.preventDefault(),e.stopPropagation();return}this.explainBusy=!0}renderCommitStats(e){if(e?.files==null)return;if("number"==typeof e.files)return tf`<commit-stats added="?" modified="${e.files}" removed="?"></commit-stats>`;let{added:t,deleted:o,changed:r}=e.files;return tf`<commit-stats added="${t}" modified="${r}" removed="${o}"></commit-stats>`}getFileActions(e,t){let o=[{icon:"go-to-file",label:"Open file",action:"file-open"}];return this.isUncommitted||(o.push({icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}),this.isStash||o.push({icon:"globe",label:"Open on remote",action:"file-open-on-remote"}),o.push({icon:"ellipsis",label:"Show more actions",action:"file-more-actions"})),o}};sJ([tP({type:Object})],sX.prototype,"state",2),sJ([tR()],sX.prototype,"isStash",1),sJ([tR()],sX.prototype,"shortSha",1),sJ([tR()],sX.prototype,"explainBusy",2),sJ([tP({type:Object})],sX.prototype,"explain",2),sX=sJ([tS("gl-commit-details")],sX);let sQ=(e,t,o)=>{let r=new Map;for(let n=t;n<=o;n++)r.set(e[n],n);return r},s0=oY(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let r;void 0===o?o=t:void 0!==t&&(r=t);let n=[],a=[],l=0;for(let t of e)n[l]=r?r(t,l):l,a[l]=o(t,l),l++;return{values:a,keys:n}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,r]){let n=ny(e),{values:a,keys:l}=this.dt(t,o,r);if(!Array.isArray(n))return this.ut=l,a;let c=this.ut??=[],d=[],h,p,u=0,g=n.length-1,f=0,m=a.length-1;for(;u<=g&&f<=m;)if(null===n[u])u++;else if(null===n[g])g--;else if(c[u]===l[f])d[f]=nm(n[u],a[f]),u++,f++;else if(c[g]===l[m])d[m]=nm(n[g],a[m]),g--,m--;else if(c[u]===l[m])d[m]=nm(n[u],a[m]),nf(e,d[m+1],n[u]),u++,m--;else if(c[g]===l[f])d[f]=nm(n[g],a[f]),nf(e,n[u],n[g]),g--,f++;else if(void 0===h&&(h=sQ(l,f,m),p=sQ(c,u,g)),h.has(c[u]))if(h.has(c[g])){let t=p.get(l[f]),o=void 0!==t?n[t]:null;if(null===o){let t=nf(e,n[u]);nm(t,a[f]),d[f]=t}else d[f]=nm(o,a[f]),nf(e,n[u],o),n[t]=null;f++}else nw(n[g]),g--;else nw(n[u]),u++;for(;f<=m;){let t=nf(e,d[m+1]);nm(t,a[f]),d[f++]=t}for(;u<=g;){let e=n[u++];null!==e&&nw(e)}return this.ut=l,nv(e,d),tm}});var s1=Object.defineProperty,s2=Object.getOwnPropertyDescriptor;let s5=class extends lit_element_r{render(){return tf`<slot></slot>`}};s5.styles=eU`
		:host {
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
		}

		::slotted(webview-pane) {
			flex: none;
		}

		:host([flexible]) ::slotted(webview-pane[flexible][expanded]) {
			flex: 1;
		}
	`,s5=((e,t,o,r)=>{for(var n,a=r>1?void 0:r?s2(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&s1(t,o,a),a})([tS("webview-pane-group")],s5);let s3=eU`
	.button-container {
		margin: 1rem auto 0;
		text-align: left;
		max-width: 30rem;
		transition: max-width 0.2s ease-out;
	}

	@media (min-width: 640px) {
		.button-container {
			max-width: 100%;
		}
	}

	.button-group {
		display: inline-flex;
		gap: 0.1rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}

	.button-group > *:not(:first-child),
	.button-group > *:not(:first-child) gl-button {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.button-group > *:not(:last-child),
	.button-group > *:not(:last-child) gl-button {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;let GlTreeBase=class GlTreeBase extends GlElement{renderLoading(){return tf`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return tb;let t="tree",o="list-tree",r="View as Tree";switch(e){case"auto":t="list",o="gl-list-auto",r="View as List";break;case"list":t="tree",o="list-flat",r="View as Tree";break;case"tree":t="auto",o="list-tree",r="View as Auto"}return tf`<action-item data-switch-value="${t}" label="${r}" icon="${o}"></action-item>`}renderTreeView(e,t="none"){return tf`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,o=!1,r=2){let n=[];if(t){let t=rc(e,e=>e.path.split("/"),(...e)=>e.join("/"),o);if(null!=t.children)for(let e of t.children.values()){let t=this.walkFileTree(e,{level:r});n.push(t)}}else for(let t of e){let e=this.fileToTreeModel(t,{level:r,branch:!1},!0);n.push(e)}return n}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){let r=[];for(let o of e.children.values()){let e=this.walkFileTree(o,{...t,level:t.level+1});r.push(e)}r.length>0&&(o.branch=!0,o.children=r)}return o}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,o){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,o,r){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"repo",label:e,description:r,context:[t],actions:this.getRepoActions(e,t,o),...o}}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,r="/"){let n=e.path.lastIndexOf(r),a=-1!==n?e.path.substring(n+1):e.path,l=o&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:a,description:!0===o?l:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}};var s6=Object.defineProperty,s9=Object.getOwnPropertyDescriptor,s7=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?s9(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&s6(t,o,a),a};let s8=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.creationBusy=!1,this.onDebounceTitleInput=y(this.onTitleInput,500),this.onDebounceDescriptionInput=y(this.onDescriptionInput,500),eM(eP,eT,eO,eD,eL)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some(e=>e?.type==="wip")}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter(([,e])=>!1!==e.checked)}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return function(e,t){if(null==e)return 0;let o=0;for(let r of e)o+=t(r);return o}(this.createChanges,e=>e.files?.length??0)}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("state")&&(this.creationBusy=!1),e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame(()=>{this.titleInput.focus()})}renderUserSelection(e){let t=e.pendingRole,o=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),r=o.get(t);return tf`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member.name??e.member.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					<gk-popover>
						<gk-button slot="trigger">${r} <code-icon icon="chevron-down"></code-icon></gk-button>
						<gk-menu>
							${function*(e,t){if(void 0!==e){let o=0;for(let r of e)yield t(r,o++)}}(o,([o,r])=>tf`<gk-menu-item
										@click=${t=>this.onChangeSelectionRole(t,e,o)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${t===o?"is-active":""}"
										></code-icon>
										${r}
									</gk-menu-item>`)}
						</gk-menu>
					</gk-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(this.state?.create?.userSelections!=null&&this.state?.create?.userSelections.length!==0)return tf`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${s0(this.state.create.userSelections,e=>e.member.id,e=>this.renderUserSelection(e))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}let t=this.review?"Code Suggestion":"Cloud Patch",o=this.review?"Code Suggestions":"Cloud Patches";return tf`
			<div class="section section--action">
				${tL(this.state?.create?.creationError!=null,()=>tf` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`)}
				${tL(!1===this.review,()=>tf`
						<div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${e}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===this.draftVisibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===this.draftVisibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===this.draftVisibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>
						${this.renderUserSelectionList()}
					`)}
				<div class="message-input message-input--with-menu">
					<input
						id="title"
						type="text"
						class="message-input__control"
						placeholder="Title (required)"
						maxlength="100"
						.value=${this.create.title??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceTitleInput(e)}
					/>
					${tL(this.state?.orgSettings.ai===!0,()=>tf`<div class="message-input__menu">
								<gl-button
									id="generate-ai"
									appearance="toolbar"
									density="compact"
									tooltip="Generate Title and Description..."
									@click=${e=>this.onGenerateTitleClick(e)}
									?disabled=${this.generateBusy}
									><code-icon
										icon=${this.generateBusy?"loading":"sparkle"}
										modifier="${this.generateBusy?"spin":""}"
									></code-icon
								></gl-button>
							</div>`)}
				</div>

				${tL(this.generate?.error!=null,()=>tf`
						<div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.generate.error.message??"Error retrieving content"}</p>
						</div>
					`)}
				<div class="message-input">
					<textarea
						id="desc"
						class="message-input__control"
						placeholder="Description (optional)"
						maxlength="10000"
						.value=${this.create.description??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceDescriptionInput(e)}
					></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button ?disabled=${this.creationBusy} full @click=${e=>this.onCreateAll(e)}
							>Create ${t}</gl-button
						>
					</span>
				</p>
				${tL(!0===this.review,()=>tf`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`)}
				${tL(this.state?.orgSettings.byob===!1,()=>tf`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${H.cloudPatches}"
								title="Learn more about ${o}"
								aria-label="Learn more about ${o}"
								>${o}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`,()=>tf`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${H.cloudPatches}"
								title="Learn more about ${o}"
								aria-label="Learn more about ${o}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`)}
			</div>
		`}render(){return tf`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return tf`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${tL(null!=this.validityMessage,()=>tf`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`)}
				<div class="change-list" data-region="files">
					${tL(null==this.create.changes,()=>this.renderLoading(),()=>this.renderTreeViewWithModel())}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;let[t,o]=e.detail.context,r=e.detail.checked;"unstaged"===o&&(r=!!e.detail.checked||"staged");let n=this.getChangeForRepo(t);null!=n&&n.checked!==r&&(n.checked=r,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:r}))}onTreeItemSelected(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);let e=[],t=this.createChanges.length>1,o=this.isTree(this.filesModified??0),r=this.isCompact;if(t)for(let t of this.createChanges){let n=this.getTreeForChange(t,!0,o,r);null!=n&&e.push(...n)}else{let t=this.createChanges[0],n=this.getTreeForChange(t,!1,o,r);null!=n&&e.push(...n)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,o=!1,r=!0){if(null==e.files||0===e.files.length)return;let n=[];if("wip"===e.type){let a=[],l=[];for(let t of e.files)t.staged?a.push(t):l.push(t);0===a.length||0===l.length?n.push(...this.renderFiles(e.files,o,r,t?2:1)):(l.length&&n.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(l,o,r,t?3:2)}),a.length&&n.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(a,o,r,t?3:2)}))}else n.push(...this.renderFiles(e.files,o,r));if(!t)return n;let a=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return a.children=n,[a]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit){0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0;return}this.validityMessage=void 0,this.titleInput.setCustomValidity("");let e=this.selectedChanges.reduce((e,[t,o])=>(e[t]=o,e),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch(),this.state?.create&&(this.creationBusy=!0)}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,o){this.emit("gl-patch-create-update-selection",{selection:t,role:o});let r=e.target?.closest("gk-popover");r?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){let o={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[o]:!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,o){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};s7([tP({type:Object})],s8.prototype,"state",2),s7([tP({type:Boolean})],s8.prototype,"review",2),s7([tP({type:Object})],s8.prototype,"generate",2),s7([tR()],s8.prototype,"generateBusy",2),s7([tR()],s8.prototype,"creationBusy",2),s7([tO("#title")],s8.prototype,"titleInput",2),s7([tO("#desc")],s8.prototype,"descInput",2),s7([tO("#generate-ai")],s8.prototype,"generateAiButton",2),s7([tR()],s8.prototype,"validityMessage",2),s8=s7([tS("gl-patch-create")],s8);var s4=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,ai=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?ae(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&s4(t,o,a),a};let ao=class extends GlElement{get patchCreateState(){return{preferences:this.preferences,orgSettings:this.orgSettings,create:this.createState}}render(){return tf`<gl-patch-create
			.state=${this.patchCreateState}
			.generate=${this.generate}
			review
			@gl-patch-file-compare-working=${e=>{}}
			@gl-patch-create-update-metadata=${e=>{}}
		></gl-patch-create>`}};ao.styles=[s3,eU`
			:host {
				flex: 1;
			}

			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}

			gl-patch-create {
				height: 100%;
				display: block;
			}

			.pane-groups {
				display: flex;
				flex-direction: column;
				height: 100%;
			}
			.pane-groups__group {
				min-height: 0;
				flex: 1 1 auto;
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}
			.pane-groups__group webview-pane {
				flex: none;
			}
			.pane-groups__group webview-pane[expanded] {
				min-height: 0;
				flex: 1;
			}

			.pane-groups__group-fixed {
				flex: none;
			}
			.pane-groups__group-fixed webview-pane::part(content) {
				overflow: visible;
			}

			.section {
				padding: 0 var(--gitlens-scrollbar-gutter-width) 1.5rem var(--gitlens-gutter-width);
			}
			.section > :first-child {
				margin-top: 0;
			}
			.section > :last-child {
				margin-bottom: 0;
			}

			.section--action {
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
			}
			.section--action > :first-child {
				padding-top: 0;
			}

			/* TODO: these form styles should be moved to a common location */
			.message-input {
				padding-top: 0.8rem;
			}

			.message-input__control {
				flex: 1;
				border: 1px solid var(--vscode-input-border);
				background: var(--vscode-input-background);
				padding: 0.5rem;
				font-size: 1.3rem;
				line-height: 1.4;
				width: 100%;
				border-radius: 0.2rem;
				color: var(--vscode-input-foreground);
				font-family: inherit;
			}

			.message-input__control::placeholder {
				color: var(--vscode-input-placeholderForeground);
			}

			.message-input__control:invalid {
				border-color: var(--vscode-inputValidation-errorBorder);
				background-color: var(--vscode-inputValidation-errorBackground);
			}

			.message-input__control:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.message-input__control:disabled {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			.message-input__control--text {
				overflow: hidden;
				white-space: nowrap;
				opacity: 0.7;
			}

			.message-input__action {
				flex: none;
			}

			.message-input__select {
				flex: 1;
				position: relative;
				display: flex;
				align-items: stretch;
			}
			.message-input__select-icon {
				position: absolute;
				left: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}
			.message-input__select-caret {
				position: absolute;
				right: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}

			.message-input__select .message-input__control {
				box-sizing: border-box;
				appearance: none;
				padding-left: 2.4rem;
				padding-right: 2.4rem;
			}

			.message-input__menu {
				position: absolute;
				top: 0.8rem;
				right: 0;
			}

			.section--action > :first-child .message-input__menu {
				top: 0;
			}

			.message-input--group {
				display: flex;
				flex-direction: row;
				align-items: stretch;
				gap: 0.6rem;
			}

			.message-input--with-menu {
				position: relative;
			}

			textarea.message-input__control {
				resize: vertical;
				min-height: 4rem;
				max-height: 40rem;
			}

			.user-selection-container {
				max-height: (2.4rem * 4);
				overflow: auto;
			}

			.user-selection {
				--gk-avatar-size: 2rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				height: 2.4rem;
			}
			.user-selection__avatar {
				flex: none;
			}

			.user-selection__info {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
			}

			.user-selection__name {
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.user-selection__actions {
				flex: none;
				color: var(--gk-button-ghost-color);
			}
			.user-selection__actions gk-button::part(base) {
				padding-right: 0;
				padding-block: 0.4rem;
			}

			.user-selection__actions gk-button code-icon {
				pointer-events: none;
			}

			.user-selection__check:not(.is-active) {
				opacity: 0;
			}

			.alert {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0.8rem 1.2rem;
				line-height: 1.2;
				background-color: var(--color-alert-errorBackground);
				border-left: 0.3rem solid var(--color-alert-errorBorder);
				color: var(--color-alert-foreground);
			}

			.alert code-icon {
				margin-right: 0.4rem;
				vertical-align: baseline;
			}

			.alert__content {
				font-size: 1.2rem;
				line-height: 1.2;
				text-align: left;
				margin: 0;
			}
		`],ai([tP({type:Object})],ao.prototype,"orgSettings",2),ai([tP({type:Object})],ao.prototype,"preferences",2),ai([tP({type:Object})],ao.prototype,"generate",2),ai([tP({type:Object})],ao.prototype,"createState",2),ao=ai([tS("gl-inspect-patch")],ao);var ar=Object.defineProperty,an=Object.getOwnPropertyDescriptor,as=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?an(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ar(t,o,a),a};let aa=class extends GlDetailsBase{constructor(){super(),this.tab="wip",this.patchCreateMetadata={title:void 0,description:void 0},eM(eP)}get inReview(){return this.draftState?.inReview??!1}get isUnpublished(){let e=this.wip?.branch;return e?.upstream==null||!0===e.upstream.missing}get draftsEnabled(){return this.orgSettings?.drafts===!0}get filesCount(){return this.files?.length??0}get branchState(){let e=this.wip?.branch;if(null!=e)return{ahead:e.tracking?.ahead??0,behind:e.tracking?.behind??0}}get patchCreateState(){let e=this.wip,t=e.repo.uri,o={type:"wip",repository:{name:e.repo.name,path:e.repo.path,uri:e.repo.uri},files:e.changes?.files??[],checked:!0};return{...this.patchCreateMetadata,changes:{[t]:o},creationError:void 0,visibility:"public",userSelections:void 0}}get codeSuggestions(){return this.wip?.codeSuggestions??[]}updated(e){super.updated(e),e.has("generate")&&(this.patchCreateMetadata={title:this.generate?.title??this.patchCreateMetadata.title,description:this.generate?.description??this.patchCreateMetadata.description})}get filesChangedPaneLabel(){return"Working Changes"}renderSecondaryAction(){var e,t;if(!this.draftsEnabled||this.inReview)return;let r="Share as Cloud Patch",n="create-patch",a=this.wip?.pullRequest;return null!=a&&"opened"===a.state&&(e=a.provider.domain,t="github.com",null!=e&&0===function(e,t){null==o&&(o=new Intl.Collator(void 0,{sensitivity:"accent"}));let r=o.compare(e,t);return 0===r?0:r>0?1:-1}(e,t))?(this.inReview?(r="Close Suggestion for PR",n="end-patch-review"):(r="Suggest Changes for PR",n="start-patch-review"),tf`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button
						appearance="secondary"
						full
						data-action="${n}"
						@click=${()=>this.onToggleReviewMode(!this.inReview)}
					>
						<code-icon icon="gl-code-suggestion" slot="prefix"></code-icon>${r}
					</gl-button>
					<gl-button
						appearance="secondary"
						density="compact"
						data-action="create-patch"
						tooltip="Share as Cloud Patch"
						@click=${()=>this.onDataActionClick("create-patch")}
					>
						<code-icon icon="gl-cloud-patch-share"></code-icon>
					</gl-button>
				</span>
			</p>`):tf`<p class="button-container">
			<span class="button-group button-group--single">
				<gl-button
					appearance="secondary"
					full
					data-action="${n}"
					@click=${()=>this.onDataActionClick(n)}
				>
					<code-icon icon="gl-cloud-patch-share" slot="prefix"></code-icon>${r}
				</gl-button>
			</span>
		</p>`}renderPrimaryAction(){let e=this.draftsEnabled;if(this.isUnpublished&&e)return tf`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button
						full
						data-action="publish-branch"
						@click=${()=>this.onDataActionClick("publish-branch")}
					>
						<code-icon icon="cloud-upload" slot="prefix"></code-icon> Publish Branch
					</gl-button>
				</span>
			</p>`;if(!this.isUnpublished&&!e||null==this.branchState)return;let{ahead:t,behind:o}=this.branchState;if(0===t&&0===o)return;let r=o>0?"Pull":t>0?"Push":"Fetch";return tf`<p class="button-container">
			<span class="button-group button-group--single">
				<gl-button
					full
					data-action="${r.toLowerCase()}"
					@click=${()=>this.onDataActionClick(r.toLowerCase())}
				>
					<code-icon icon="${o>0?"repo-pull":t>0?"repo-push":"repo-fetch"}" slot="prefix"></code-icon> ${r}
					<gl-tracking-pill .ahead=${t} .behind=${o} slot="suffix"></gl-tracking-pill>
				</gl-button>
			</span>
		</p>`}renderActions(){let e=this.renderPrimaryAction(),t=this.renderSecondaryAction();return null==e&&null==t?tb:tf`<div class="section section--actions">${e}${t}</div>`}renderSuggestedChanges(){return 0===this.codeSuggestions.length?tb:tf`
			<gl-tree>
				<gl-tree-item branch .expanded=${!0} .level=${0}>
					<code-icon slot="icon" icon="gl-code-suggestion"></code-icon>
					Code Suggestions
				</gl-tree-item>
				${s0(this.codeSuggestions,e=>e.id,e=>tf`
						<gl-tree-item
							.expanded=${!0}
							.level=${1}
							@gl-tree-item-selected=${()=>this.onShowCodeSuggestion(e.id)}
						>
							<gk-avatar
								class="author-icon"
								src="${e.author.avatarUri}"
								title="${e.author.name} (author)"
							></gk-avatar>
							${e.title}
							<span slot="description"
								><formatted-date .date=${new Date(e.updatedAt)}></formatted-date
							></span>
						</gl-tree-item>
					`)}
			</gl-tree>
		`}renderPullRequest(){return this.wip?.pullRequest==null?tb:tf`
			<webview-pane
				collapsable
				flexible
				?expanded=${this.preferences?.pullRequestExpanded??!0}
				data-region="pullrequest-pane"
			>
				<span slot="title">Pull Request #${this.wip?.pullRequest?.id}</span>
				<action-nav slot="actions">
					<action-item
						label="Open Pull Request Changes"
						icon="diff-multiple"
						@click=${()=>this.onDataActionClick("open-pr-changes")}
					></action-item>
					<action-item
						label="Compare Pull Request"
						icon="compare-changes"
						@click=${()=>this.onDataActionClick("open-pr-compare")}
					></action-item>
					<action-item
						label="Open Pull Request on Remote"
						icon="globe"
						@click=${()=>this.onDataActionClick("open-pr-remote")}
					></action-item>
				</action-nav>
				<div class="section">
					<issue-pull-request
						type="pr"
						name="${this.wip.pullRequest.title}"
						url="${this.wip.pullRequest.url}"
						identifier="#${this.wip.pullRequest.id}"
						status="${this.wip.pullRequest.state}"
						.date=${this.wip.pullRequest.updatedDate}
						.dateFormat="${this.preferences?.dateFormat}"
						.dateStyle="${this.preferences?.dateStyle}"
						details
					></issue-pull-request>
				</div>
				${this.renderSuggestedChanges()}
			</webview-pane>
		`}renderIncomingOutgoing(){return null==this.branchState||0===this.branchState.ahead&&0===this.branchState.behind?tb:tf`
			<webview-pane collapsable>
				<span slot="title">Incoming / Outgoing</span>
				<gl-tree>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-down"></code-icon>
						Incoming Changes
						<span slot="decorations">${this.branchState.behind??0}</span>
					</gl-tree-item>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-up"></code-icon>
						Outgoing Changes
						<span slot="decorations">${this.branchState.ahead??0}</span>
					</gl-tree-item>
				</gl-tree>
			</webview-pane>
		`}renderPatchCreation(){return this.inReview?tf`<gl-inspect-patch
			.orgSettings=${this.orgSettings}
			.preferences=${this.preferences}
			.generate=${this.generate}
			.createState=${this.patchCreateState}
			@gl-patch-create-patch=${e=>{this.dispatchEvent(new CustomEvent("gl-inspect-create-suggestions",{detail:e.detail}))}}
		></gl-inspect-patch>`:tb}render(){return null==this.wip?tb:tf`
			${this.renderActions()}
			<webview-pane-group flexible>
				${this.renderPullRequest()}
				${tL(!1===this.inReview,()=>this.renderChangedFiles("wip"))}${this.renderPatchCreation()}
			</webview-pane-group>
		`}getFileActions(e,t){let o={icon:"go-to-file",label:"Open file",action:"file-open"};return!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}onDataActionClick(e){this.dispatchEvent(new CustomEvent("data-action",{detail:{name:e}}))}onToggleReviewMode(e){this.dispatchEvent(new CustomEvent("draft-state-changed",{detail:{inReview:e}}))}onShowCodeSuggestion(e){this.dispatchEvent(new CustomEvent("gl-show-code-suggestion",{detail:{id:e}}))}};aa.styles=[eU`
			:host {
				--gk-avatar-size: 1.6rem;
			}
		`],as([tP({type:Object})],aa.prototype,"wip",2),as([tP({type:Object})],aa.prototype,"orgSettings",2),as([tP({type:Object})],aa.prototype,"draftState",2),as([tP({type:Object})],aa.prototype,"generate",2),as([tR()],aa.prototype,"inReview",1),as([tR()],aa.prototype,"patchCreateMetadata",2),aa=as([tS("gl-wip-details")],aa);let al=eU`
	.commit-action {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 21px;
		border-radius: 0.25em;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		gap: 0.2rem;
	}

	.commit-action > * {
		pointer-events: none;
	}

	.commit-action:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.commit-action:hover {
		color: var(--vscode-foreground);
		text-decoration: none;
	}

	:host-context(.vscode-dark) .commit-action:hover,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .commit-action:hover {
		background-color: var(--color-background--lighten-15);
	}
	:host-context(.vscode-light) .commit-action:hover,
	:host-context(.vscode-high-contrast-light) .commit-action:hover {
		background-color: var(--color-background--darken-15);
	}

	:host-context(.vscode-dark) .commit-action.is-active,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .commit-action.is-active {
		background-color: var(--color-background--lighten-10);
	}
	:host-context(.vscode-light) .commit-action.is-active,
	:host-context(.vscode-high-contrast-light) .commit-action.is-active {
		background-color: var(--color-background--darken-10);
	}

	.commit-action.is-disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.commit-action.is-hidden {
		display: none;
	}

	.commit-action--emphasis-low:not(:hover, :focus, :active) {
		opacity: 0.5;
	}

	.pr--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var ac=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,ah=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?ad(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ac(t,o,a),a};let ap=class extends lit_element_r{constructor(){super(...arguments),this.pinned=!1,this.uncommitted=!1,this.shortSha=""}get navigationState(){if(null==this.navigation)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.navigation.count<=1?(e.back=!1,e.forward=!1):0===this.navigation.position?(e.back=!0,e.forward=!1):this.navigation.position===this.navigation.count-1&&(e.back=!1,e.forward=!0),e}handleAction(e){let t=e.target,o=t.dataset.action;if(null!=o)if("commit-actions"===o){let o=e instanceof MouseEvent&&e.altKey;this.fireEvent("commit-actions",{action:t.dataset.actionType,alt:o})}else this.fireEvent(o)}fireEvent(e,t){this.dispatchEvent(new CustomEvent(`gl-${e}`,{detail:t}))}render(){let e=this.pinned?tf`Unpin this Commit<br />Restores Automatic Following`:tf`Pin this Commit<br />Suspends Automatic Following`,t="Forward",o="Back";return this.navigation?.hint&&(this.pinned?o+=` - ${this.navigation.hint}`:t+=` - ${this.navigation.hint}`),tf`
			<div class="group">
				${tL(!this.uncommitted,()=>tf`
						<gl-tooltip hoist>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="sha"
								@click=${this.handleAction}
							>
								<code-icon
									icon="${null!=this.stashNumber?"gl-stashes-view":"git-commit"}"
								></code-icon>
								<span class="sha" data-region="shortsha"
									>${null!=this.stashNumber?`#${this.stashNumber}`:this.shortSha}</span
								>
							</a>
							<span slot="content"
								>Copy ${null!=this.stashNumber?"Stash Name":"SHA"}<br />[⌥] Copy Message</span
							>
						</gl-tooltip>
					`)}
			</div>
			<div class="group">
				<gl-tooltip hoist
					><a
						class="commit-action${this.pinned?" is-active":""}"
						href="#"
						data-action="pin"
						@click=${this.handleAction}
						><code-icon
							icon="${this.pinned?"gl-pinned-filled":"pin"}"
							data-region="commit-pin"
						></code-icon></a
					><span slot="content">${e}</span></gl-tooltip
				>
				<gl-tooltip hoist content="${o}"
					><a
						class="commit-action${this.navigationState.back?"":" is-disabled"}"
						aria-disabled="${this.navigationState.back?"false":"true"}"
						href="#"
						data-action="back"
						@click=${this.handleAction}
						><code-icon icon="arrow-left" data-region="commit-back"></code-icon></a
				></gl-tooltip>
				${tL(this.navigationState.forward,()=>tf`
						<gl-tooltip hoist content="${t}"
							><a class="commit-action" href="#" data-action="forward" @click=${this.handleAction}
								><code-icon icon="arrow-right" data-region="commit-forward"></code-icon></a
						></gl-tooltip>
					`)}
				<!-- TODO: add a spacer -->
				${tL(this.uncommitted,()=>tf`
						<gl-tooltip hoist content="Open SCM view"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="scm"
								@click=${this.handleAction}
								><code-icon icon="source-control"></code-icon></a
						></gl-tooltip>
					`)}
				<gl-tooltip hoist content="Open in Commit Graph"
					><a
						class="commit-action"
						href="#"
						data-action="commit-actions"
						data-action-type="graph"
						@click=${this.handleAction}
						><code-icon icon="gl-graph"></code-icon></a
				></gl-tooltip>
				${tL(!this.uncommitted,()=>tf`
						<gl-tooltip hoist content="Show Commit Actions"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="more"
								@click=${this.handleAction}
								><code-icon icon="kebab-vertical"></code-icon></a
						></gl-tooltip>
					`)}
			</div>
		`}};ap.styles=[al,eU`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			:host([pinned]) {
				background-color: var(--color-alert-warningBackground);
				box-shadow: 0 0 0 0.1rem var(--color-alert-warningBorder);
				border-radius: 0.3rem;
			}

			:host([pinned]) .commit-action:hover,
			:host([pinned]) .commit-action.is-active {
				background-color: var(--color-alert-warningHoverBackground);
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				max-width: 100%;
			}

			.sha {
				margin: 0 0.5rem 0 0.25rem;
			}
		`],ah([tP({type:Boolean,reflect:!0})],ap.prototype,"pinned",2),ah([tP({type:Boolean})],ap.prototype,"uncommitted",2),ah([tP({type:Object})],ap.prototype,"navigation",2),ah([tP()],ap.prototype,"shortSha",2),ah([tP()],ap.prototype,"stashNumber",2),ap=ah([tS("gl-inspect-nav")],ap);var au=Object.defineProperty,ag=Object.getOwnPropertyDescriptor,af=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?ag(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&au(t,o,a),a};let am=class extends lit_element_r{render(){if(null==this.wip)return tb;let e=this.wip.changes,t=this.wip.branch;if(null==e||null==t)return tb;let o="git-pull-request";if(this.wip.pullRequest?.state)switch(this.wip.pullRequest?.state){case"merged":o="git-merge";break;case"closed":o="git-pull-request-closed"}return tf`
			<div class="group">
				${tL(null!=this.wip.pullRequest,()=>tf`<gl-popover hoist>
							<a href="#" class="commit-action" slot="anchor"
								><code-icon icon=${o} class="pr pr--${this.wip.pullRequest.state}"></code-icon
								><span>#${this.wip.pullRequest.id}</span></a
							>
							<div slot="content">
								<issue-pull-request
									type="pr"
									name="${this.wip.pullRequest.title}"
									url="${this.wip.pullRequest.url}"
									identifier="#${this.wip.pullRequest.id}"
									status="${this.wip.pullRequest.state}"
									.date=${this.wip.pullRequest.updatedDate}
									.dateFormat="${this.preferences?.dateFormat}"
									.dateStyle="${this.preferences?.dateStyle}"
									details
								></issue-pull-request>
							</div>
						</gl-popover>`)}
				<gl-tooltip hoist class="tooltip--overflowed">
					<a
						href="#"
						class="commit-action commit-action--overflowed"
						@click=${e=>this.handleAction(e,"switch")}
					>
						${tL(null==this.wip.pullRequest,()=>tf`<code-icon icon="git-branch"></code-icon>`)}<span class="branch">${t.name}</span><code-icon icon="chevron-down" size="10"></code-icon
					></a>
					<div slot="content">
						Switch to Another Branch...
						<hr />
						<code-icon icon="git-branch"></code-icon><span class="md-code">${this.wip.branch?.name}</span>
					</div>
				</gl-tooltip>
			</div>
			<div class="group">
				<gl-tooltip hoist content="Fetch">
					<a href="#" class="commit-action" @click=${e=>this.handleAction(e,"fetch")}
						><code-icon icon="repo-fetch"></code-icon></a
				></gl-tooltip>
			</div>
		`}handleAction(e,t){let o=e instanceof MouseEvent&&e.altKey;this.dispatchEvent(new CustomEvent("gl-branch-action",{detail:{action:t,alt:o}}))}};am.styles=[al,eU`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				/* flex-wrap: wrap; */
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			.tooltip--overflowed {
				min-width: 0;
			}

			.commit-action--overflowed {
				width: 100%;
			}

			.branch {
				min-width: 0;
				max-width: fit-content;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				min-width: 0;
				max-width: 100%;
			}

			.group:first-child {
				min-width: 0;
				flex: 0 1 auto;
			}

			hr {
				border: none;
				border-top: 1px solid var(--color-foreground--25);
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],af([tP({type:Object})],am.prototype,"wip",2),af([tP({type:Object})],am.prototype,"preferences",2),am=af([tS("gl-status-nav")],am);var ab=Object.defineProperty,av=Object.getOwnPropertyDescriptor,ay=(e,t,o,r)=>{for(var n,a=r>1?void 0:r?av(t,o):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r?n(t,o,a):n(a))||a);return r&&a&&ab(t,o,a),a};let aw="0000000000000000000000000000000000000000",ak=class extends lit_element_r{constructor(){super(),this.draftState={inReview:!1},this._disposables=[],this.indentPreference=16,eM(eR)}get isUncommitted(){return this.state?.commit?.sha===aw}get hasCommit(){return this.state?.commit!=null}get isStash(){return this.state?.commit?.stashNumber!=null}get wipStatus(){let e=this.state?.wip;if(null==e)return;let t=e.branch;if(null==t)return;let o=e.changes,r=o?.files.length??0,n=t.tracking?.ahead??0,a=t.tracking?.behind??0;return{branch:e.repositoryCount>1?`${e.repo.name}:${t.name}`:t.name,upstream:t.upstream?.name,ahead:n,behind:a,working:e.changes?.files.length??0,status:a>0&&n>0?"both":a>0?"behind":n>0?"ahead":r>0?"working":void 0}}get navigation(){if(this.state?.navigationStack==null)return{back:!1,forward:!1};let e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updateDocumentProperties(){let e=this.state?.preferences?.indent;e!==this.indentPreference&&(this.indentPreference=e??16,document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`))}updated(e){e.has("state")&&(this.updateDocumentProperties(),this.state?.inReview!=null&&this.state.inReview!==this.draftState.inReview&&(this.draftState.inReview=this.state.inReview))}connectedCallback(){super.connectedCallback(),this._hostIpc=new ev("commit-details"),this._disposables=[this._hostIpc.onReceiveMessage(e=>this.onMessageReceived(e)),this._hostIpc,u.on("gl-inspect-nav","gl-commit-actions",e=>this.onCommitActions(e)),u.on("gl-status-nav","gl-branch-action",e=>this.onBranchAction(e.detail.action)),u.on('[data-action="pick-commit"]',"click",e=>this.onPickCommit(e)),u.on('[data-action="wip"]',"click",e=>this.onSwitchMode(e,"wip")),u.on('[data-action="details"]',"click",e=>this.onSwitchMode(e,"commit")),u.on('[data-action="search-commit"]',"click",e=>this.onSearchCommit(e)),u.on('[data-action="files-layout"]',"click",e=>this.onToggleFilesLayout(e)),u.on("gl-inspect-nav","gl-pin",()=>this.onTogglePin()),u.on("gl-inspect-nav","gl-back",()=>this.onNavigate("back")),u.on("gl-inspect-nav","gl-forward",()=>this.onNavigate("forward")),u.on('[data-action="create-patch"]',"click",e=>this.onCreatePatchFromWip(!0)),u.on('[data-region="rich-pane"]',"expanded-change",e=>this.onExpandedChange(e.detail,"autolinks")),u.on('[data-region="pullrequest-pane"]',"expanded-change",e=>this.onExpandedChange(e.detail,"pullrequest")),u.on('[data-action="explain-commit"]',"click",e=>this.onExplainCommit(e)),u.on('[data-action="switch-ai"]',"click",e=>this.onSwitchAiModel(e)),u.on("gl-wip-details","create-patch",e=>this.onCreatePatchFromWip(e.detail.checked)),u.on("gl-commit-details","file-open-on-remote",e=>this.onOpenFileOnRemote(e.detail)),u.on("gl-commit-details,gl-wip-details","file-open",e=>this.onOpenFile(e.detail)),u.on("gl-commit-details","file-compare-working",e=>this.onCompareFileWithWorking(e.detail)),u.on("gl-commit-details,gl-wip-details","file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),u.on("gl-commit-details","file-more-actions",e=>this.onFileMoreActions(e.detail)),u.on("gl-wip-details","file-stage",e=>this.onStageFile(e.detail)),u.on("gl-wip-details","file-unstage",e=>this.onUnstageFile(e.detail)),u.on("gl-wip-details","data-action",e=>this.onBranchAction(e.detail.name)),u.on("gl-wip-details","gl-inspect-create-suggestions",e=>this.onSuggestChanges(e.detail)),u.on("gl-wip-details","gl-patch-generate-title",e=>this.onCreateGenerateTitle(e.detail)),u.on("gl-wip-details","gl-show-code-suggestion",e=>this.onShowCodeSuggestion(e.detail)),u.on("gl-wip-details","gl-patch-file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),u.on("gl-wip-details","gl-patch-file-open",e=>this.onOpenFile(e.detail)),u.on("gl-wip-details","gl-patch-file-stage",e=>this.onStageFile(e.detail)),u.on("gl-wip-details","gl-patch-file-unstage",e=>this.onUnstageFile(e.detail)),u.on("gl-wip-details","gl-patch-create-cancelled",()=>this.onDraftStateChanged(!1)),u.on("gl-status-nav,issue-pull-request","gl-issue-pull-request-details",()=>this.onBranchAction("open-pr-details"))]}onSuggestChanges(e){this._hostIpc.sendCommand(tz,e)}onShowCodeSuggestion(e){this._hostIpc.sendCommand(tQ,e)}onMessageReceived(e){switch(!0){case ii.is(e):var t;e.params.state,this.state=e.params.state,this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case io.is(e):this.state={...this.state,wip:e.params.wip,inReview:e.params.inReview},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case ia.is(e):this.onDraftStateChanged(e.params.inReview,!0);break;case ir.is(e):this.state={...this.state,hasConnectedJira:e.params.hasConnectedJira},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case is.is(e):this.state={...this.state,hasAccount:e.params.hasAccount},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}))}}disconnectedCallback(){this._disposables.forEach(e=>e.dispose()),this._disposables=[],super.disconnectedCallback()}renderTopInspect(){return this.state?.commit==null?tb:tf`<gl-inspect-nav
			?uncommitted=${this.isUncommitted}
			?pinned=${this.state?.pinned}
			.navigation=${this.state?.navigationStack}
			.shortSha=${this.state?.commit.shortSha??""}
			.stashNumber=${this.state?.commit.stashNumber}
		></gl-inspect-nav>`}renderTopWip(){return this.state?.wip==null?tb:tf`<gl-status-nav .wip=${this.state.wip} .preferences=${this.state.preferences}></gl-status-nav>`}renderRepoStatusContent(e){let t=this.wipStatus?.status;return tf`
			<code-icon icon="gl-repository-filled"></code-icon>
			${tL(this.wipStatus?.status!=null,()=>tf`<gl-tracking-pill
						class="inspect-header__tab-tracking"
						.ahead=${this.wipStatus.ahead}
						.behind=${this.wipStatus.behind}
						.working=${this.wipStatus.working}
						outlined
					></gl-tracking-pill>`)}
			${tL(null!=t,()=>tf`<gl-indicator
						class="inspect-header__tab-indicator inspect-header__tab-indicator--${t}"
					></gl-indicator>`)}
		`}renderWipTooltipContent(){return null==this.wipStatus?"Overview":tf`
			Overview of &nbsp;<code-icon icon="git-branch" size="12"></code-icon
			><span class="md-code">${this.wipStatus.branch}</span>
			${tL("both"===this.wipStatus.status,()=>tf`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${ee("commit",this.wipStatus.behind)} behind and
						${ee("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`)}
			${tL("behind"===this.wipStatus.status,()=>tf`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${ee("commit",this.wipStatus.behind)} behind
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`)}
			${tL("ahead"===this.wipStatus.status,()=>tf`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${ee("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code"> ${this.wipStatus.upstream??"origin"}</span>`)}
			${tL(this.wipStatus.working>0,()=>tf`<hr />
						${ee("working change",this.wipStatus.working)}`)}
		`}renderTopSection(){let e=this.state?.mode==="wip";return tf`
			<div class="inspect-header">
				<nav class="inspect-header__tabs">
					<gl-tooltip hoist>
						<button class="inspect-header__tab${!e?" is-active":""}" data-action="details">
							<code-icon icon="gl-inspect"></code-icon>
						</button>
						<span slot="content"
							>${this.state?.commit!=null?!this.isStash?tf`Inspect Commit
											<span class="md-code"
												><code-icon icon="git-commit"></code-icon> ${this.state.commit.shortSha}</span
											>`:tf`Inspect Stash
											<span class="md-code"
												><code-icon icon="gl-stashes-view"></code-icon> #${this.state.commit.stashNumber}</span
											>`:"Inspect"}${this.state?.pinned?tf`(pinned)
										<hr />
										Automatic following is suspended while pinned`:""}</span
						>
					</gl-tooltip>
					<gl-tooltip hoist>
						<button class="inspect-header__tab${e?" is-active":""}" data-action="wip">
							${this.renderRepoStatusContent(e)}
						</button>
						<span slot="content">${this.renderWipTooltipContent()}</span>
					</gl-tooltip>
				</nav>
				<div class="inspect-header__content">
					${tL(this.state?.mode!=="wip",()=>this.renderTopInspect(),()=>this.renderTopWip())}
				</div>
			</div>
		`}render(){let e=this.state?.wip;return tf`
			<div class="commit-detail-panel scrollable">
				${this.renderTopSection()}
				<main id="main" tabindex="-1">
					${tL(this.state?.mode==="commit",()=>tf`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.isUncommitted=${this.isUncommitted}
							></gl-commit-details>`,()=>tf`<gl-wip-details
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.generate=${this.generate}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
								.draftState=${this.draftState}
								@draft-state-changed=${e=>this.onDraftStateChanged(e.detail.inReview)}
							></gl-wip-details>`)}
				</main>
			</div>
		`}createRenderRoot(){return this}onDraftStateChanged(e,t=!1){e!==this.draftState.inReview&&(this.draftState={...this.draftState,inReview:e},this.requestUpdate("draftState"),t||this._hostIpc.sendCommand(tX,{inReview:e}))}onBranchAction(e){switch(e){case"pull":this._hostIpc.sendCommand(t5,void 0);break;case"push":this._hostIpc.sendCommand(t2,void 0);break;case"fetch":this._hostIpc.sendCommand(t0,void 0);break;case"publish-branch":this._hostIpc.sendCommand(t1,void 0);break;case"switch":this._hostIpc.sendCommand(t3,void 0);break;case"open-pr-changes":this._hostIpc.sendCommand(t6,void 0);break;case"open-pr-compare":this._hostIpc.sendCommand(t9,void 0);break;case"open-pr-remote":this._hostIpc.sendCommand(t7,void 0);break;case"open-pr-details":this._hostIpc.sendCommand(t8,void 0)}}onCreatePatchFromWip(e=!0){this.state?.wip?.changes!=null&&this._hostIpc.sendCommand(tJ,{changes:this.state.wip.changes,checked:e})}onCommandClickedCore(e){let t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this._hostIpc.sendCommand(x,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onExplainCommit(e){try{let e=await this._hostIpc.sendRequest(t4,void 0);e.error?this.explain={error:{message:e.error.message??"Error retrieving content"}}:this.explain=e}catch(e){this.explain={error:{message:"Error retrieving content"}}}}async onCreateGenerateTitle(e){try{let e=await this._hostIpc.sendRequest(ie,void 0);e.error?this.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?this.generate={title:e.title,description:e.description}:this.generate=void 0}catch(e){this.generate={error:{message:"Error retrieving content"}}}this.requestUpdate("generate")}onToggleFilesLayout(e){let t=e.target?.dataset.filesLayout??void 0;if(t===this.state?.preferences?.files?.layout)return;let o={...this.state.preferences?.files,layout:t??"auto"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this._hostIpc.sendCommand(tY,{files:o})}onExpandedChange(e,t){let o;"autolinks"===t?o={autolinksExpanded:e.expanded}:"pullrequest"===t&&(o={pullRequestExpanded:e.expanded}),null!=o&&(this.state={...this.state,preferences:{...this.state.preferences,...o}},this._hostIpc.sendCommand(tY,o))}onNavigate(e){this._hostIpc.sendCommand(tZ,{direction:e})}onTogglePin(){this._hostIpc.sendCommand(tK,{pin:!this.state.pinned})}onPickCommit(e){this._hostIpc.sendCommand(tV,void 0)}onSearchCommit(e){this._hostIpc.sendCommand(tW,void 0)}onSwitchMode(e,t){this.state={...this.state,mode:t},this._hostIpc.sendCommand(tG,{mode:t,repoPath:this.state.commit?.repoPath})}onOpenFileOnRemote(e){this._hostIpc.sendCommand(tj,e)}onOpenFile(e){this._hostIpc.sendCommand(tN,e)}onCompareFileWithWorking(e){this._hostIpc.sendCommand(tU,e)}onCompareFileWithPrevious(e){this._hostIpc.sendCommand(tF,e)}onFileMoreActions(e){this._hostIpc.sendCommand(tB,e)}onStageFile(e){this._hostIpc.sendCommand(tH,e)}onUnstageFile(e){this._hostIpc.sendCommand(tq,e)}onCommitActions(e){this.state?.commit!==void 0&&this._hostIpc.sendCommand(tI,{action:e.detail.action,alt:e.detail.alt})}};ay([tP({type:Object})],ak.prototype,"state",2),ay([tP({type:Object})],ak.prototype,"explain",2),ay([tP({type:Object})],ak.prototype,"generate",2),ay([tR()],ak.prototype,"draftState",2),ay([tR()],ak.prototype,"isUncommitted",1),ay([tR()],ak.prototype,"isStash",1),ak=ay([tS("gl-commit-details-app")],ak);let CommitDetailsApp=class CommitDetailsApp extends App{constructor(){super("CommitDetailsApp")}onInitialize(){let e=document.getElementById("app");e.state=this.state,u.on(e,"state-changed",e=>{this.state=e.detail,this.setState(this.state)})}};new CommitDetailsApp;var ax=v.L;export{ax as CommitDetailsApp};