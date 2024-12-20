var e={47:(e,t,o)=>{const i=o(602),r=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,n=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,a=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/uy,l=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,c=/\p{M}+/gu,d={limit:1/0,ellipsis:""},h=(e,t={},o={})=>{const p=t.limit??1/0,u=t.ellipsis??"",g=t?.ellipsisWidth??(u?h(u,d,o).width:0),m=o.ansiWidth??0,f=o.controlWidth??0,v=o.ambiguousWidth??1,y=o.emojiWidth??2,w=o.fullWidthWidth??2,_=o.regularWidth??1,$=o.wideWidth??2;let x=0,C=0,S=e.length,P=0,O=!1,A=S,E=Math.max(0,p-g),T=0,D=0,F=0,W=0;e:for(;;){if(D>T||C>=S&&C>x){const t=e.slice(T,D)||e.slice(x,C);P=0;for(const e of t.replaceAll(c,"")){const t=e.codePointAt(0)||0;if(W=(0,i.isFullWidth)(t)?w:(0,i.isWide)(t)?$:v!==_&&(0,i.isAmbiguous)(t)?v:_,F+W>E&&(A=Math.min(A,Math.max(T,x)+P)),F+W>p){O=!0;break e}P+=e.length,F+=W}T=D=0}if(C>=S)break;if(l.lastIndex=C,l.test(e)){if(P=l.lastIndex-C,W=P*_,F+W>E&&(A=Math.min(A,C+Math.floor((E-F)/_))),F+W>p){O=!0;break}F+=W,T=x,D=C,C=x=l.lastIndex}else if(r.lastIndex=C,r.test(e)){if(F+m>E&&(A=Math.min(A,C)),F+m>p){O=!0;break}F+=m,T=x,D=C,C=x=r.lastIndex}else if(n.lastIndex=C,n.test(e)){if(P=n.lastIndex-C,W=P*f,F+W>E&&(A=Math.min(A,C+Math.floor((E-F)/f))),F+W>p){O=!0;break}F+=W,T=x,D=C,C=x=n.lastIndex}else if(a.lastIndex=C,a.test(e)){if(F+y>E&&(A=Math.min(A,C)),F+y>p){O=!0;break}F+=y,T=x,D=C,C=x=a.lastIndex}else C+=1}return{width:O?E:F,index:O?A:S,truncated:O,ellipsed:O&&p>=g}}},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0;t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109;t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510;t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var i={};o.d(i,{K:()=>vl});class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class s{constructor(e,t,o,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context){const e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.t,this.subscribe))}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class context_provider_i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function r({context:e}){return(t,o)=>{const i=new WeakMap;if("object"==typeof o)return o.addInitializer((function(){i.set(this,new context_provider_i(this,{context:e}))})),{get(){return t.get.call(this)},set(e){return i.get(this)?.setValue(e),t.set.call(this,e)},init(e){return i.get(this)?.setValue(e),e}};{t.constructor.addInitializer((t=>{i.set(t,new context_provider_i(t,{context:e}))}));const r=Object.getOwnPropertyDescriptor(t,o);let n;if(void 0===r){const e=new WeakMap;n={get(){return e.get(this)},set(t){i.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{const e=r.set;n={...r,set(t){i.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,o,n)}}}function n({context:e,subscribe:t}){return(o,i)=>{"object"==typeof i?i.addInitializer((function(){new s(this,{context:e,callback:e=>{o.set.call(this,e)},subscribe:t})})):o.constructor.addInitializer((o=>{new s(o,{context:e,callback:e=>{o[i]=e},subscribe:t})}))}}const a=globalThis,l=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),d=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(l&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=d.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&d.set(t,e))}return e}toString(){return this.cssText}}const h=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,c),p=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new css_tag_n(o,e,c)},u=l?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return h(t)})(e):e,{is:g,defineProperty:m,getOwnPropertyDescriptor:f,getOwnPropertyNames:v,getOwnPropertySymbols:y,getPrototypeOf:w}=Object,_=globalThis,$=_.trustedTypes,x=$?$.emptyScript:"",C=_.reactiveElementPolyfillSupport,S=(e,t)=>e,P={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},O=(e,t)=>!g(e,t),A={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:O};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&m(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:r}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const n=i?.call(this);r.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??A}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,t=[...v(e),...y(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(l)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=a.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:P).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:P;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??O)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[S("elementProperties")]=new Map,b[S("finalized")]=new Map,C?.({ReactiveElement:b}),(_.reactiveElementVersions??=[]).push("2.0.4");const E=globalThis,T=E.trustedTypes,D=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,F="$lit$",W=`lit$${Math.random().toFixed(9).slice(2)}$`,B="?"+W,j=`<${B}>`,U=document,G=()=>U.createComment(""),V=e=>null===e||"object"!=typeof e&&"function"!=typeof e,q=Array.isArray,K=e=>q(e)||"function"==typeof e?.[Symbol.iterator],Q="[ \t\n\f\r]",J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,Z=/>/g,X=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,oe=/^(?:script|style|textarea|title)$/i,ie=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),re=ie(1),ne=ie(2),se=(ie(3),Symbol.for("lit-noChange")),ae=Symbol.for("lit-nothing"),le=new WeakMap,ce=U.createTreeWalker(U,129);function de(e,t){if(!q(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==D?D.createHTML(t):t}const he=(e,t)=>{const o=e.length-1,i=[];let r,n=2===t?"<svg>":3===t?"<math>":"",a=J;for(let t=0;t<o;t++){const o=e[t];let l,c,d=-1,h=0;for(;h<o.length&&(a.lastIndex=h,c=a.exec(o),null!==c);)h=a.lastIndex,a===J?"!--"===c[1]?a=Y:void 0!==c[1]?a=Z:void 0!==c[2]?(oe.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=X):void 0!==c[3]&&(a=X):a===X?">"===c[0]?(a=r??J,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?X:'"'===c[3]?te:ee):a===te||a===ee?a=X:a===Y||a===Z?a=J:(a=X,r=void 0);const p=a===X&&e[t+1].startsWith("/>")?" ":"";n+=a===J?o+j:d>=0?(i.push(l),o.slice(0,d)+F+o.slice(d)+W+p):o+W+(-2===d?t:p)}return[de(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class N{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,n=0;const a=e.length-1,l=this.parts,[c,d]=he(e,t);if(this.el=N.createElement(c,o),ce.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ce.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(F)){const t=d[n++],o=i.getAttribute(e).split(W),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:a[2],strings:o,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),i.removeAttribute(e)}else e.startsWith(W)&&(l.push({type:6,index:r}),i.removeAttribute(e));if(oe.test(i.tagName)){const e=i.textContent.split(W),t=e.length-1;if(t>0){i.textContent=T?T.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],G()),ce.nextNode(),l.push({type:2,index:++r});i.append(e[t],G())}}}else if(8===i.nodeType)if(i.data===B)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(W,e+1));)l.push({type:7,index:r}),e+=W.length-1}r++}}static createElement(e,t){const o=U.createElement("template");return o.innerHTML=e,o}}function pe(e,t,o=e,i){if(t===se)return t;let r=void 0!==i?o._$Co?.[i]:o._$Cl;const n=V(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(t=pe(e,r._$AS(e,t.values),r,i)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??U).importNode(t,!0);ce.currentNode=i;let r=ce.nextNode(),n=0,a=0,l=o[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new R(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new z(r,this,e)),this._$AV.push(t),l=o[++a]}n!==l?.index&&(r=ce.nextNode(),n++)}return ce.currentNode=U,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),V(e)?e===ae||null==e||""===e?(this._$AH!==ae&&this._$AR(),this._$AH=ae):e!==this._$AH&&e!==se&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):K(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ae&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(de(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new M(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=le.get(e.strings);return void 0===t&&le.set(e.strings,t=new N(e)),t}k(e){q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new R(this.O(G()),this.O(G()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ae}_$AI(e,t=this,o,i){const r=this.strings;let n=!1;if(void 0===r)e=pe(this,e,t,0),n=!V(e)||e!==this._$AH&&e!==se,n&&(this._$AH=e);else{const i=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=pe(this,i[o+a],t,a),l===se&&(l=this._$AH[a]),n||=!V(l)||l!==this._$AH[a],l===ae?e=ae:e!==ae&&(e+=(l??"")+r[a+1]),this._$AH[a]=l}n&&!i&&this.j(e)}j(e){e===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ae?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ae)}}class L extends k{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??ae)===se)return;const o=this._$AH,i=e===ae&&o!==ae||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==ae&&(o===ae||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}}const ue={M:F,P:W,A:B,C:1,L:he,R:M,D:K,V:pe,I:R,H:k,N:I,U:L,B:H,F:z},ge=E.litHtmlPolyfillSupport;ge?.(N,R),(E.litHtmlVersions??=[]).push("3.2.1");class lit_element_r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let r=i._$litPart$;if(void 0===r){const e=o?.renderBefore??null;i._$litPart$=r=new R(t.insertBefore(G(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return se}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const me=globalThis.litElementPolyfillSupport;me?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const fe=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},be={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:O},ve=(e=be,t,o)=>{const{kind:i,metadata:r}=o;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];t.call(this,o),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function ye(e){return(t,o)=>"object"==typeof o?ve(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function we(e){return ye({...e,state:!0,attribute:!1})}const _e=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ke(e,t){return(o,i,r)=>{const n=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return _e(o,i,{get(){let o=e.call(this);return void 0===o&&(o=n(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return _e(o,i,{get(){return n(this)}})}}function $e(e,t,o){return e?t(e):o?.(e)}class IpcCall{constructor(e,t,o=!1,i=!1){this.scope=e,this.reset=o,this.pack=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcRequest extends IpcCall{constructor(e,t,o,i){super(e,t,o,i),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}}class IpcNotification extends IpcCall{}const xe=new IpcCommand("core","webview/ready"),Ce=new IpcCommand("core","webview/focus/changed"),Se=(new IpcCommand("core","command/execute"),new IpcCommand("core","configuration/update"),new IpcCommand("core","telemetry/sendEvent")),Pe=(new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const Oe="home",Re=new IpcRequest(Oe,"launchpad/summary"),Ae=new IpcRequest(Oe,"overview"),Ee=new IpcRequest(Oe,"overviewFilter"),Te=new IpcRequest(Oe,"overview/repository/change"),De=new IpcCommand(Oe,"previewEnabled/toggle"),Ie=new IpcCommand(Oe,"section/collapse"),Le=new IpcCommand(Oe,"walkthrough/dismiss"),Fe=new IpcCommand(Oe,"overview/filter/set"),We=(new IpcCommand(Oe,"openInGraph"),new IpcNotification(Oe,"repositories/didCompleteDiscovering")),Be=new IpcNotification(Oe,"previewEnabled/didChange"),ze=new IpcNotification(Oe,"repository/wip/didChange"),Ne=new IpcNotification(Oe,"repositories/didChange"),je=new IpcNotification(Oe,"walkthroughProgress/didChange"),Me=new IpcNotification(Oe,"integrations/didChange"),Ue=new IpcNotification(Oe,"subscription/didChange"),Ge=new IpcNotification(Oe,"org/settings/didChange"),Ve=new IpcNotification(Oe,"home/ownerFilter/didChange"),qe=new IpcNotification(Oe,"account/didFocus");var He=Object.defineProperty,Ke=(e,t,o)=>(((e,t,o)=>{t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o})(e,"symbol"!=typeof t?t+"":t,o),o),Qe=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},Je=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},Ye=(e,t,o)=>(((e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)})(e,t,"access private method"),o);function Ze(e,t){return Object.is(e,t)}let Xe=null,et=!1,tt=1;const ot=Symbol("SIGNAL");function it(e){const t=Xe;return Xe=e,t}const rt={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function nt(e){if(et)throw new Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===Xe)return;Xe.consumerOnSignalRead(e);const t=Xe.nextProducerIndex++;if(pt(Xe),t<Xe.producerNode.length&&Xe.producerNode[t]!==e&&ht(Xe)){dt(Xe.producerNode[t],Xe.producerIndexOfThis[t])}Xe.producerNode[t]!==e&&(Xe.producerNode[t]=e,Xe.producerIndexOfThis[t]=ht(Xe)?ct(e,Xe,t):0),Xe.producerLastReadVersion[t]=e.version}function st(e){if(e.dirty||e.lastCleanEpoch!==tt){if(!e.producerMustRecompute(e)&&!function(e){pt(e);for(let t=0;t<e.producerNode.length;t++){const o=e.producerNode[t],i=e.producerLastReadVersion[t];if(i!==o.version)return!0;if(st(o),i!==o.version)return!0}return!1}(e))return e.dirty=!1,void(e.lastCleanEpoch=tt);e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=tt}}function at(e){if(void 0===e.liveConsumerNode)return;const t=et;et=!0;try{for(const t of e.liveConsumerNode)t.dirty||lt(t)}finally{et=t}}function lt(e){var t;e.dirty=!0,at(e),null==(t=e.consumerMarkedDirty)||t.call(e.wrapper??e)}function ct(e,t,o){var i;if(ut(e),pt(e),0===e.liveConsumerNode.length){null==(i=e.watched)||i.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)e.producerIndexOfThis[t]=ct(e.producerNode[t],e,t)}return e.liveConsumerIndexOfThis.push(o),e.liveConsumerNode.push(t)-1}function dt(e,t){var o;if(ut(e),pt(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(o=e.unwatched)||o.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)dt(e.producerNode[t],e.producerIndexOfThis[t])}const i=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[i],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[i],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const o=e.liveConsumerIndexOfThis[t],i=e.liveConsumerNode[t];pt(i),i.producerIndexOfThis[o]=t}}function ht(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function pt(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function ut(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function gt(e){if(st(e),nt(e),e.value===bt)throw e.error;return e.value}const mt=Symbol("UNSET"),ft=Symbol("COMPUTING"),bt=Symbol("ERRORED"),vt=(()=>({...rt,value:mt,dirty:!0,error:null,equal:Ze,producerMustRecompute:e=>e.value===mt||e.value===ft,producerRecomputeValue(e){if(e.value===ft)throw new Error("Detected cycle in computations.");const t=e.value;e.value=ft;const o=function(e){return e&&(e.nextProducerIndex=0),it(e)}(e);let i,r=!1;try{i=e.computation.call(e.wrapper);r=t!==mt&&t!==bt&&e.equal.call(e.wrapper,t,i)}catch(t){i=bt,e.error=t}finally{!function(e,t){if(it(t),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(ht(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)dt(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}(e,o)}r?e.value=t:(e.value=i,e.version++)}}))();let yt=function(){throw new Error};function wt(){return nt(this),this.value}function _t(e,t){!1===(null==Xe?void 0:Xe.consumerAllowSignalWrites)&&yt(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,function(e){e.version++,tt++,at(e)}(e))}const kt=(()=>({...rt,equal:Ze,value:void 0}))();const $t=Symbol("node");var xt;(e=>{var t,o,i,r;t=$t,o=new WeakSet,e.isState=e=>Qe(o,e),e.State=class State{constructor(i,r={}){Je(this,o),Ke(this,t);const n=function(e){const t=Object.create(kt);t.value=e;const o=()=>(nt(t),t.value);return o[ot]=t,o}(i),a=n[ot];if(this[$t]=a,a.wrapper=this,r){const t=r.equals;t&&(a.equal=t),a.watched=r[e.subtle.watched],a.unwatched=r[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return wt.call(this[$t])}set(t){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(et)throw new Error("Writes to signals not permitted during Watcher callback");_t(this[$t],t)}};i=$t,r=new WeakSet,e.isComputed=e=>Qe(r,e),e.Computed=class Computed{constructor(t,o){Je(this,r),Ke(this,i);const n=function(e){const t=Object.create(vt);t.computation=e;const o=()=>gt(t);return o[ot]=t,o}(t),a=n[ot];if(a.consumerAllowSignalWrites=!0,this[$t]=a,a.wrapper=this,o){const t=o.equals;t&&(a.equal=t),a.watched=o[e.subtle.watched],a.unwatched=o[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return gt(this[$t])}},(t=>{var o,i,r,n;t.untrack=function(e){let t,o=null;try{o=it(null),t=e()}finally{it(o)}return t},t.introspectSources=function(t){var o;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(o=t[$t].producerNode)?void 0:o.map((e=>e.wrapper)))??[]},t.introspectSinks=function(t){var o;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called introspectSinks without a Signal argument");return(null==(o=t[$t].liveConsumerNode)?void 0:o.map((e=>e.wrapper)))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called hasSinks without a Signal argument");const o=t[$t].liveConsumerNode;return!!o&&o.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called hasSources without a Computed or Watcher argument");const o=t[$t].producerNode;return!!o&&o.length>0};o=$t,i=new WeakSet,r=new WeakSet,n=function(t){for(const o of t)if(!(0,e.isComputed)(o)&&!(0,e.isState)(o))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>Qe(i,e),t.Watcher=class Watcher{constructor(e){Je(this,i),Je(this,r),Ke(this,o);let t=Object.create(rt);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[$t]=t}watch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Ye(this,r,n).call(this,t);const o=this[$t];o.dirty=!1;const i=it(o);for(const e of t)nt(e[$t]);it(i)}unwatch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Ye(this,r,n).call(this,t);const o=this[$t];pt(o);for(let e=o.producerNode.length-1;e>=0;e--)if(t.includes(o.producerNode[e].wrapper)){dt(o.producerNode[e],o.producerIndexOfThis[e]);const t=o.producerNode.length-1;if(o.producerNode[e]=o.producerNode[t],o.producerIndexOfThis[e]=o.producerIndexOfThis[t],o.producerNode.length--,o.producerIndexOfThis.length--,o.nextProducerIndex--,e<o.producerNode.length){const t=o.producerIndexOfThis[e],i=o.producerNode[e];ut(i),i.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[$t].producerNode.filter((e=>e.dirty)).map((e=>e.wrapper))}},t.currentComputed=function(){var e;return null==(e=Xe)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(xt||(xt={}));const Ct=(e=null)=>new xt.State(e,{equals:()=>!1});new WeakMap;class SignalObjectImpl{static fromEntries(e){return new SignalObjectImpl(Object.fromEntries(e))}#e=new Map;#t=Ct();constructor(e={}){let t=Object.getPrototypeOf(e),o=Object.getOwnPropertyDescriptors(e),i=Object.create(t);for(let e in o)Object.defineProperty(i,e,o[e]);let r=this;return new Proxy(i,{get:(e,t,o)=>(r.#o(t),Reflect.get(e,t,o)),has:(e,t)=>(r.#o(t),t in e),ownKeys:e=>(r.#t.get(),Reflect.ownKeys(e)),set(e,t,o,i){let n=Reflect.set(e,t,o,i);return r.#i(t),r.#r(),n},deleteProperty:(e,t)=>(t in e&&(delete e[t],r.#i(t),r.#r()),!0),getPrototypeOf:()=>SignalObjectImpl.prototype})}#o(e){let t=this.#e.get(e);void 0===t&&(t=Ct(),this.#e.set(e,t)),t.get()}#i(e){const t=this.#e.get(e);t&&t.set(null)}#r(){this.#t.set(null)}}const St=SignalObjectImpl;const Pt=Symbol("SignalWatcherBrand"),Ot=new FinalizationRegistry((({watcher:e,signal:t})=>{e.unwatch(t)})),Rt=new WeakMap;function At(e){return!0===e[Pt]?e:class extends e{constructor(){super(...arguments),this._$St=new xt.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new xt.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new xt.subtle.Watcher((function(){const e=Rt.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())}));Rt.set(e,this),Ot.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((e=>e.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,o){this._$So=!0,super.requestUpdate(e,t,o)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{!1===this.isConnected&&this._$Sp()}))}_(e){this._$Sh.add(e);const t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}const Et=1,Tt=2,Dt=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:It}=ue,Lt=()=>document.createComment(""),Ft=(e,t,o)=>{const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(Lt(),r),n=i.insertBefore(Lt(),r);o=new It(t,n,e,e.options)}else{const t=o._$AB.nextSibling,n=o._$AM,a=n!==e;if(a){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==n._$AU&&o._$AP(t)}if(t!==r||a){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,r),e=t}}}return o},Wt=(e,t,o=e)=>(e._$AI(t,o),e),Bt={},zt=e=>{e._$AP?.(!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const e=t.nextSibling;t.remove(),t=e}},Nt=(e,t)=>{const o=e._$AN;if(void 0===o)return!1;for(const e of o)e._$AO?.(t,!1),Nt(e,t);return!0},jt=e=>{let t,o;do{if(void 0===(t=e._$AM))break;o=t._$AN,o.delete(e),e=t}while(0===o?.size)},Mt=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),Vt(t)}};function Ut(e){void 0!==this._$AN?(jt(this),this._$AM=e,Mt(this)):this._$AM=e}function Gt(e,t=!1,o=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(i))for(let e=o;e<i.length;e++)Nt(i[e],!1),jt(i[e]);else null!=i&&(Nt(i,!1),jt(i));else Nt(this,e)}const Vt=e=>{e.type==Tt&&(e._$AP??=Gt,e._$AQ??=Ut)};class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Mt(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Nt(this,e),jt(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const qt=Dt(class watch_h extends async_directive_f{_$Sl(){if(void 0!==this._$Su)return;this._$SW=new xt.Computed((()=>{var e;return null===(e=this._$Sj)||void 0===e?void 0:e.get()}));const e=this._$Su=new xt.subtle.Watcher((()=>{var t;null===(t=this._$SO)||void 0===t||t._(this),e.watch()}));e.watch(this._$SW)}_$Sp(){var e;void 0!==this._$Su&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,null===(e=this._$SO)||void 0===e||e.m(this))}commit(){this.setValue(xt.subtle.untrack((()=>{var e;return null===(e=this._$SW)||void 0===e?void 0:e.get()})))}render(e){return xt.subtle.untrack((()=>e.get()))}update(e,[t]){var o,i;return null!==(o=this._$SO)&&void 0!==o||(this._$SO=null===(i=e.options)||void 0===i?void 0:i.host),t!==this._$Sj&&void 0!==this._$Sj&&this._$Sp(),this._$Sj=t,this._$Sl(),xt.subtle.untrack((()=>this._$SW.get()))}disconnected(){this._$Sp()}reconnected(){this._$Sl()}}),Ht=e=>(t,...o)=>e(t,...o.map((e=>e instanceof xt.State||e instanceof xt.Computed?qt(e):e))),Kt=(Ht(re),Ht(ne),xt.State,xt.Computed,(e,t)=>new xt.State(e,t));class AsyncComputed{#n=!1;#s=new xt.State("initial");get status(){const e=this.#s.get();return this.#n?"pending":e}#a;get value(){return this.run(),this.#a.get()}#l=new xt.State(void 0);get error(){return this.run(),this.#l.get()}#c=new xt.State(void 0);get complete(){return this.run(),this.#c.get().promise}#d;#h;#p=0;#u;constructor(e,t){this.#a=new xt.State(t?.initialValue),this.#d=new xt.Computed((()=>{const t=++this.#p;"pending"!==xt.subtle.untrack((()=>this.#s.get()))&&this.#c.set(Promise.withResolvers()),this.#n=!1,this.#s.set("pending"),this.#u?.abort(),this.#u=new AbortController,e(this.#u.signal).then((e=>{t===this.#p&&(this.#s.set("complete"),this.#a.set(e),this.#l.set(void 0),this.#c.get().resolve(e))}),(e=>{t===this.#p&&(this.#s.set("error"),this.#l.set(e),this.#a.set(void 0),this.#c.get().reject(e))}))})),this.#h=new xt.subtle.Watcher((async()=>{this.#n=!0,this.#h.watch()})),this.#h.watch(this.#d)}get(){const e=this.status;if("error"===e||"pending"===e&&void 0!==this.error)throw this.error;return this.value}run(){this.#d.get()}}function Qt(e,t,o){let i,r,n,a,l;function c(){const e=Date.now();if(function(e){const o=e-(r??0);return null==r||o>=t||o<0}(e))d();else{l=setTimeout(c,t-(e-(r??0)))}}function d(){return l=void 0,i?function(){const t=i,o=n;return i=n=void 0,a=e.apply(o,t),a}():(i=void 0,n=void 0,a)}function h(...e){const d=Date.now();return i=null!=o&&i?o(i,e):e,n=this,r=d,null==l&&(l=setTimeout(c,t)),a}return h.cancel=function(){null!=l&&clearTimeout(l),i=void 0,r=void 0,n=void 0,l=void 0},h.flush=function(){return null==l?a:(clearTimeout(l),d())},h.pending=function(){return null!=l},h}const Jt=/\(([\s\S]*)\)/,Yt=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,Zt=/\s?=.*$/;class AsyncComputedState{constructor(e,t){this._fetch=e,this._debounce=500,this._invalidate=Kt(0),this._state=Kt(void 0),null!=t&&(this._state.set(t.initial),null!=t.debounce&&(this._debounce=t.debounce),!0===t.autoRun&&this.run())}get state(){return this._run(),this._state.get()}get computed(){if(null==this._computed){const e=this._state.get();this._computed=new AsyncComputed((async e=>{this._invalidate.get();const t=await this._fetch(e);return this._state.set(t),t}),e?{initialValue:e}:void 0)}return this._computed}_runCore(){this.computed.run()}_run(e=!1){e?this._runCore():(null==this._runDebounced&&(this._runDebounced=Qt(this._runCore.bind(this),this._debounce)),this._runDebounced())}run(e=!1){e&&this.invalidate(),this._run()}invalidate(){this._invalidate.set(Date.now())}render(e){return((e,{initial:t,pending:o,complete:i,error:r})=>{switch(e.status){case"initial":return t?.();case"pending":return o?.();case"complete":return i?.(e.value);case"error":return r?.(e.error)}})(this.computed,e)}}class OverviewState extends AsyncComputedState{constructor(e,t){super((async e=>await this._ipc.sendRequest(Ae,{})),t),this._ipc=e,this.filter=new St({}),this._disposable=this._ipc.onReceiveMessage((e=>{switch(!0){case We.is(e):e.params.repositories.openCount>0&&this.run(!0);break;case Ne.is(e):case ze.is(e):this.run(!0);break;case Ve.is(e):this.filter.recent=e.params.filter.recent,this.filter.stale=e.params.filter.stale,this.run(!0)}})),this._ipc.sendRequest(Ee,void 0).then((e=>{this.filter.recent=e.recent,this.filter.stale=e.stale}))}dispose(){this._disposable?.dispose()}async changeRepository(){await this._ipc.sendRequest(Te,void 0),this.run(!0)}}const Xt="overviewState",eo=new WeakMap;function to(e,t){return function(o,i,r){let n=eo.get(o.constructor);null==n&&eo.set(o.constructor,n=[]),n.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_r{emit(e,t,o){const i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(i),i}update(e){const t=eo.get(this.constructor);if(null!=t)for(const{keys:o,method:i,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&i.call(this,t)}super.update(e)}}function oo(e){const t=.001*performance.now();let o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],i-=e[1],i<0&&(o--,i+=1e9)),[o,i]}function io(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const ro=io(),no=new Map;function so(e){no.delete(e)}function ao(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function lo(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?ro.current:void 0,i=ro.next();return{scopeId:i,prevScopeId:o,prefix:`${ao(i,o)} ${e}`}}Error;function co(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;o(47);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const ho="utm_source=gitlens-extension&utm_medium=in-app-links",po=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${ho}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${ho}`,graph:`https://gitkraken.com/solutions/commit-graph?${ho}`,launchpad:`https://gitkraken.com/solutions/launchpad?${ho}`,platform:`https://gitkraken.com/devex?${ho}`,pricing:`https://gitkraken.com/gitlens/pricing?${ho}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${ho}`,security:`https://help.gitkraken.com/gitlens/security?${ho}`,workspaces:`https://gitkraken.com/solutions/workspaces?${ho}`,cli:`https://gitkraken.com/cli?${ho}`,browserExtension:`https://gitkraken.com/browser-extension?${ho}`,desktop:`https://gitkraken.com/git-client?${ho}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${ho}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${ho}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ho}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${ho}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ho}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${ho}`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ho}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ho}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ho}#streamline-collaboration`}),{fromCharCode:uo}=String;new TextEncoder;function go(e){const[t,o]=oo(e);return 1e3*t+Math.floor(o/1e6)}function mo(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const i=1===t?e:o.plural??`${e}s`;return o.only?i:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${i}`}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);const fo=Symbol("logInstanceNameFn");function bo(e){return function(e,t=!1){let o,i,r,n,a,l=0,c=!1,d=!1,h=!0;null!=e&&({args:o,if:i,enter:r,exit:n,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:h=!0}=e);l>0&&(d=!0,h=!0);h&&(c=!0);const p=wo.isDebugging,u=t?wo.debug:wo.log,g=p?"debug":"info";return(e,t,m)=>{let f,v;if("function"==typeof m.value?(f=m.value,v="value"):"function"==typeof m.get&&(f=m.get,v="get"),null==f||null==v)throw new Error("Not supported");const y=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(Yt,"")||t,t=t.slice(0,t.indexOf("{"));let o=t.indexOf("("),i=t.indexOf(")");o=o>=0?o+1:0,i=i>0?i:t.indexOf("="),t=t.slice(o,i),t=`(${t})`;const r=Jt.exec(t);return null!=r?r[1].split(",").map((e=>e.trim().replace(Zt,""))):[]}(f):[];m[v]=function(...e){if(!p&&!wo.enabled(g)||null!=i&&!i.apply(this,e))return f.apply(this,e);const m=ro.current,v=ro.next(),w=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const i=o.indexOf("_");o=-1===i?o:o.substring(i+1),null!=t?.[fo]&&(o=t[fo](e,o));return o}(this):void 0;let _,$=w?c?`${ao(v,m)} ${w}.${t}`:`${w}.${t}`:t;null!=a&&($=a({id:v,instance:this,instanceName:w??"",name:t,prefix:$},...e)),c&&(_=function(e,t){return t={prevScopeId:ro.current,...t},no.set(e,t),t}(v,{scopeId:v,prevScopeId:m,prefix:$}));const x=null!=r?r(...e):"";let C;if(!1===o||0===e.length)C="",d||u.call(wo,`${$}${x}`);else{let t;C="";let i,r,n,a=-1;for(n of e){if(i=y[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(C.length>0&&(C+=", "),"string"==typeof t){C+=t;continue}r=String(t(n))}else C.length>0&&(C+=", "),r=wo.toLoggable(n);C+=i?`${i}=${r}`:r}d||u.call(wo,C?`${$}${x}(${C})`:`${$}${x}`)}if(d||h||null!=n){const t=h?oo():void 0,o=e=>{const o=void 0!==t?` [${go(t)}ms]`:"";d?wo.error(e,C?`${$}${x}(${C})`:`${$}${x}`,_?.exitDetails?`failed${_.exitDetails}${o}`:`failed${o}`):wo.error(e,$,_?.exitDetails?`failed${_.exitDetails}${o}`:`failed${o}`),c&&so(v)};let i;try{i=f.apply(this,e)}catch(e){throw o(e),e}const r=e=>{let o,i,r,a;if(null!=t?(o=go(t),o>500?(i=wo.warn,r=` [*${o}ms] (slow)`):(i=u,r=` [${o}ms]`)):(r="",i=u),null!=n)if("function"==typeof n)try{a=n(e)}catch(e){a=`@log.exit error: ${e}`}else!0===n&&(a=`returned ${wo.toLoggable(e)}`);else _?.exitFailed?(a=_.exitFailed,i=(e,...t)=>wo.error(null,e,...t)):a="completed";d?(0===l||o>l)&&i.call(wo,C?`${$}${x}(${C}) ${a}${_?.exitDetails||""}${r}`:`${$}${x} ${a}${_?.exitDetails||""}${r}`):i.call(wo,C?`${$}(${C}) ${a}${_?.exitDetails||""}${r}`:`${$} ${a}${_?.exitDetails||""}${r}`),c&&so(v)};return null!=i&&co(i)?i.then(r,o):r(i),i}return f.apply(this,e)}}}(e,!0)}const vo=new Set(["accessToken","password","token"]),yo=function(e,t){return vo.has(e)?`<${t}>`:t},wo=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=_o(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=_o(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==i){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(t??=this.provider.sanitize??yo,Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function _o(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const ko={enabled:e=>wo.enabled(e)||wo.isDebugging,log:(e,t,o,...i)=>{switch(e){case"error":wo.error(void 0,t,o,...i);break;case"warn":wo.warn(t,o,...i);break;case"info":wo.log(t,o,...i);break;default:wo.debug(t,o,...i)}}};class LoggerContext{constructor(e){this.scope=lo(e,void 0),wo.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off")}log(e,...t){"string"==typeof e?wo.log(this.scope,e,...t):wo.log(e,t.shift(),...t)}}class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(Se,e)}dispose(){this.disposables.forEach((e=>e.dispose()))}}const $o="ipc";Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:lo(e??"",!1),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??ko,this._time=oo(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=oo(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=oo(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,i]=oo(this._time),r=1e3*o+Math.floor(i/1e6),n=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${n?`${n} `:""}[${r}ms]${e?.suffix??""}`)}}var xo;function Co(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function So(e,t){return new Promise((o=>{e.addEventListener(t,(function i(r){r.target===e&&(e.removeEventListener(t,i),o())}))}))}(xo||(xo={})).on=function(e,t,o,i){let r=!1;if("string"==typeof e){const n=function(t){const i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,n,i??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,n,i??!0))}}}const n=function(e){o(e,this)};return e.addEventListener(t,n,i??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,n,i??!1))}}};const Po=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const i=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=_Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};Po._noop=function(){};let Oo=Po;const Ro={done:!0,value:void 0},Ao=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};Ao.Undefined=new Ao(void 0);let Eo=Ao;class LinkedList{constructor(){this._first=Eo.Undefined,this._last=Eo.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Eo.Undefined}clear(){this._first=Eo.Undefined,this._last=Eo.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new Eo(e);if(this._first===Eo.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===Eo.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Eo.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Eo.Undefined&&e.next!==Eo.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Eo.Undefined&&e.next===Eo.Undefined?(this._first=Eo.Undefined,this._last=Eo.Undefined):e.next===Eo.Undefined?(this._last=this._last.prev,this._last.next=Eo.Undefined):e.prev===Eo.Undefined&&(this._first=this._first.next,this._first.prev=Eo.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Eo.Undefined?Ro:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Eo.Undefined;t=t.next)e.push(t.element);return e}}var To=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,Io=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Do(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&To(t,o,n),n};let Lo;const Fo=io();function Wo(){return`webview:${Fo.next()}`}let Bo=class{constructor(e){this.appName=e,this._onReceiveMessage=new Oo,this._pendingHandlers=new Map,this._api=Lo??=acquireVsCodeApi(),this._disposable=xo.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=no.get(ro.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const i=function(e,t,...o){return(t?.provider??ko).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(lo(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),i?.stop()}if(null==o.completionId)this._onReceiveMessage.fire(o);else{const e=No(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}sendCommand(e,t){const o=Wo();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=Wo(),i=new Promise(((t,i)=>{const r=No(e.response.method,o);let n;function a(){clearTimeout(n),n=void 0,this._pendingHandlers.delete(r)}n=setTimeout((()=>{a.call(this),i(new Error(`Timed out waiting for completion of ${r}`))}),6e4),this._pendingHandlers.set(r,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var zo;function No(e,t){return`${e}|${t}`}Io([bo({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],Bo.prototype,"onMessageReceived",1),Io([bo({args:{0:e=>e.method,1:!1}})],Bo.prototype,"sendCommand",1),Io([bo({args:{0:e=>e.method,1:!1,2:!1}})],Bo.prototype,"sendRequest",1),Io([bo({args:{0:e=>`${e.id}, method=${e.method}`}})],Bo.prototype,"postMessage",1),Bo=Io([(zo=(e,t)=>`${e.appName}(${t})`,e=>{e[fo]=zo})],Bo);var jo=Object.defineProperty,Mo=Object.getOwnPropertyDescriptor,Uo=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Mo(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&jo(t,o,n),n};class GlApp extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{const t=e.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===t||(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}connectedCallback(){super.connectedCallback(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new Bo(this.name),this.disposables.push(this._stateProvider=this.createStateProvider(this.state,this._ipc),this._ipc.onReceiveMessage((e=>{if(!0===Pe.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"))})),this._ipc,this._telemetry=new TelemetryContext(this._ipc)),this._ipc.sendCommand(xe,void 0),this._sendWebviewFocusChangedCommandDebounced=Qt((e=>{this._ipc.sendCommand(Ce,e)}),150),document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}disconnectedCallback(){super.disconnectedCallback(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach((e=>e.dispose()))}render(){return re`<slot></slot>`}}GlApp.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Uo([ye({type:String})],GlApp.prototype,"name",2),Uo([ye({type:String})],GlApp.prototype,"placement",2),Uo([r({context:$o})],GlApp.prototype,"_ipc",2),Uo([r({context:"logger"})],GlApp.prototype,"_logger",2),Uo([r({context:"telemetry"})],GlApp.prototype,"_telemetry",2),Uo([ye({type:Object})],GlApp.prototype,"state",2);const Go=p`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`,Vo=(p`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus):not(:focus-within) {
		${Go}
	}
`,p`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),qo=p`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,Ho=p`
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
`,Ko=p`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Vo}
	}
	a:hover {
		text-decoration: underline;
	}
`,Qo=p`
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
`,Jo=p`
	* {
		box-sizing: border-box;
	}

	:not(:defined) {
		visibility: hidden;
	}

	[hidden] {
		display: none !important;
	}

	/* roll into shared focus style */
	:focus-visible {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	b {
		font-weight: 600;
	}

	p {
		margin-top: 0;
	}

	ul {
		margin-top: 0;
		padding-left: 1.2em;
	}
`,Yo=p`
	.home {
		padding: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		overflow: hidden;
	}

	.home__alerts {
		flex: none;
		padding: 0 2rem;
		position: relative;
	}
	.home__alerts:not([has-alerts]) {
		display: none;
	}

	.home__main {
		flex: 1;
		overflow: auto;
		padding: 0.8rem 2rem;
	}
	.home__main > *:last-child {
		margin-bottom: 0;
	}

	.home__aux,
	.home__footer {
		flex: none;
	}

	.home__aux:has(gl-promo-banner:not([has-promo]):only-child) {
		display: none;
	}

	summary {
		font-size: 1.3rem;
		font-weight: normal;
		text-transform: uppercase;
		color: var(--vscode-foreground);
		cursor: pointer;
	}

	details[open] summary {
		margin-block-end: 0.8rem;
	}

	gl-home-account-content {
		margin-bottom: 0;
	}

	gl-repo-alerts:not([has-alerts]) {
		display: none;
	}
`,Zo=(p`
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
	.button-container--trio > gl-button:first-child {
		margin-bottom: 0.4rem;
	}

	.button-group {
		display: inline-flex;
		gap: 0.4rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}
	.button-group gl-button {
		margin-top: 0;
	}
	.button-group gl-button:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.button-group gl-button:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`,p`
	.alert {
		position: relative;
		padding: 0.8rem 1.2rem;
		line-height: 1.2;
		margin-bottom: 1.2rem;
		background-color: var(--color-alert-neutralBackground);
		border-left: 0.3rem solid var(--color-alert-neutralBorder);
		color: var(--color-alert-foreground);
	}
	.alert__title {
		font-size: 1.4rem;
		margin: 0;
	}
	.alert__description {
		font-size: 1.2rem;
		margin: 0.4rem 0 0;
	}
	.alert__description > :first-child {
		margin-top: 0;
	}
	.alert__description > :last-child {
		margin-bottom: 0;
	}
	.alert__close {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		color: inherit;
		opacity: 0.64;
	}
	.alert__close:hover {
		color: inherit;
		opacity: 1;
	}
	.alert.is-collapsed {
		cursor: pointer;
	}
	.alert.is-collapsed:hover {
		background-color: var(--color-alert-neutralHoverBackground);
	}
	.alert.is-collapsed .alert__description,
	.alert.is-collapsed .alert__close gl-tooltip:first-child,
	.alert:not(.is-collapsed) .alert__close gl-tooltip:last-child {
		display: none;
	}
	.alert--info {
		background-color: var(--color-alert-infoBackground);
		border-left-color: var(--color-alert-infoBorder);
	}
	.alert--warning {
		background-color: var(--color-alert-warningBackground);
		border-left-color: var(--color-alert-warningBorder);
	}
	.alert--danger {
		background-color: var(--color-alert-errorBackground);
		border-left-color: var(--color-alert-errorBorder);
	}
`),Xo=p`
	.nav-list {
		margin-left: -2rem;
		margin-right: -2rem;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		align-items: stretch;
		margin-bottom: 1.6rem;
	}
	.nav-list__item {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		padding: 0.4rem 2rem;
	}
	.nav-list__item:hover,
	.nav-list__item:focus-within {
		background-color: var(--vscode-list-hoverBackground);
		color: var(--vscode-list-hoverForeground);
	}
	.nav-list__item:has(:first-child:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.nav-list__item:has(:active) {
		background-color: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-list-activeSelectionForeground);
	}
	.nav-list__item:has(.is-disabled) {
		cursor: not-allowed;
	}
	.nav-list__link {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: inherit;
	}
	.nav-list__link:hover,
	.nav-list__link:focus {
		color: inherit;
		text-decoration: none;
	}
	.nav-list__link:focus {
		outline: none;
	}
	.nav-list__link.is-disabled,
	.nav-list__link.is-disabled:hover {
		opacity: 0.5;
		pointer-events: none;
		text-decoration: none;
	}
	.nav-list__icon {
		flex: none;
		opacity: 0.5;
	}
	.nav-list__label {
		flex: 1;
		font-weight: 600;
	}
	.nav-list__desc {
		color: var(--color-foreground--65);
		font-variant: all-small-caps;
		margin-left: 1rem;
	}
	.nav-list__group {
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.nav-list__group .nav-list__label {
		width: auto;
	}
	.nav-list__access {
		flex: none;
		position: relative;
		left: 1.5rem;
		font-size: x-small;
		outline: none;
		white-space: nowrap;
		--gl-feature-badge-color: color-mix(in srgb, transparent 40%, currentColor);
		--gl-feature-badge-border-color: color-mix(in srgb, transparent 40%, var(--color-foreground--50));
	}
	.nav-list__item:hover .nav-list__label {
		text-decoration: underline;
	}
	.nav-list__item:hover .is-disabled .nav-list__label {
		text-decoration: none;
	}
	.nav-list__item:hover .nav-list__desc {
		color: var(--color-foreground);
	}
	.nav-list__item:focus-within .nav-list__access,
	.nav-list__item:hover .nav-list__access {
		--gl-feature-badge-color: currentColor;
		--gl-feature-badge-border-color: var(--color-foreground--50);
	}
	.nav-list__title {
		padding: 0 2rem;
	}

	.t-eyebrow {
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-foreground--50);
		margin: 0;
	}
	.t-eyebrow.sticky {
		top: -8px;
	}
`,ei=p`
	.walkthrough-progress {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 4px 8px 6px;
		margin-inline: -8px;
		margin-bottom: 16px;
		align-items: stretch;
		cursor: pointer;
		border-radius: 4px;
	}
	.walkthrough-progress:focus-within,
	.walkthrough-progress:hover {
		background-color: var(--gl-walkthrough-hover-background);
	}

	.walkthrough-progress__title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.walkthrough-progress__button {
		--button-padding: 1px 2px 0px 2px;
	}
	.walkthrough-progress__bar::-webkit-progress-bar {
		border-radius: 2px;
		background: var(--color-alert-neutralBackground);
	}
	.walkthrough-progress__bar::-webkit-progress-value {
		background: var(--vscode-progressBar-background, blue);
		transition: 0.1s ease-in;
		border-radius: 2px;
	}
	.walkthrough-progress__bar {
		pointer-events: none;
		border-radius: 2px;
		width: 100%;
		background: unset;
		height: 4px;
		flex-shrink: 0;
		z-index: 2;
	}
`,ti="state";class HomeStateProvider{constructor(e,t,o){this._ipc=o,this.state=t,this.provider=new context_provider_i(e,{context:ti,initialValue:t}),this.disposable=this._ipc.onReceiveMessage((t=>{switch(!0){case Ne.is(t):this.state.repositories=t.params,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0);break;case We.is(t):this.state.repositories=t.params.repositories,this.state.discovering=t.params.discovering,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0);break;case je.is(t):this.state.walkthroughProgress=t.params,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0);break;case Ue.is(t):this.state.subscription=t.params.subscription,this.state.avatar=t.params.avatar,this.state.organizationsCount=t.params.organizationsCount,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0);break;case Ge.is(t):this.state.orgSettings=t.params.orgSettings,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0);break;case Me.is(t):this.state.hasAnyIntegrationConnected=t.params.hasAnyIntegrationConnected,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0);break;case Be.is(t):this.state.previewEnabled=t.params.previewEnabled,this.state.previewCollapsed=t.params.previewCollapsed,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0),e.requestUpdate?.()}}))}dispose(){this.disposable.dispose()}}const oi=14;var ii=(e=>(e.Community="community",e.CommunityWithAccount="community-with-account",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(ii||{}),ri=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Community=0]="Community",e[e.ProPreview=1]="ProPreview",e[e.ProPreviewExpired=2]="ProPreviewExpired",e[e.ProTrial=3]="ProTrial",e[e.ProTrialExpired=4]="ProTrialExpired",e[e.ProTrialReactivationEligible=5]="ProTrialReactivationEligible",e[e.Paid=6]="Paid",e))(ri||{});const ni=[{key:"gkholiday",code:"GKHOLIDAY",states:[ri.Community,ri.ProPreview,ri.ProPreviewExpired,ri.ProTrial,ri.ProTrialExpired,ri.ProTrialReactivationEligible],startsOn:new Date("2024-12-09T06:59:00.000Z").getTime(),expiresOn:new Date("2025-01-07T06:59:00.000Z").getTime(),command:{tooltip:"Get the gift of a better DevEx in 2025! Save up to 80% now"},quickpick:{detail:"$(star-full) Get the gift of a better DevEx in 2025! Save up to 80% now"}},{key:"gitlens16",code:"GITLENS16",states:[ri.Community,ri.ProPreview,ri.ProPreviewExpired,ri.ProTrial,ri.ProTrialExpired,ri.ProTrialReactivationEligible],startsOn:new Date("2024-11-11T06:59:00.000Z").getTime(),expiresOn:new Date("2024-11-24T06:59:00.000Z").getTime(),command:{tooltip:"Save more than 55% during our GitLens 16 sale!"},locations:["account","badge","gate"],quickpick:{detail:"$(star-full) Save more than 55% during our GitLens 16 sale!"}},{key:"cybersale24",code:"CYBERSALE24",states:[ri.Community,ri.ProPreview,ri.ProPreviewExpired,ri.ProTrial,ri.ProTrialExpired,ri.ProTrialReactivationEligible],startsOn:new Date("2024-11-25T06:59:00.000Z").getTime(),expiresOn:new Date("2024-12-06T06:59:00.000Z").getTime(),command:{tooltip:"Cyber Sale: Save up to 85% on GitLens Pro — our best deal of the year!"},quickpick:{detail:"$(star-full) Cyber Sale: Save up to 85% on GitLens Pro — our best deal of the year!"}},{key:"pro50",states:[ri.Community,ri.ProPreview,ri.ProPreviewExpired,ri.ProTrial,ri.ProTrialExpired,ri.ProTrialReactivationEligible],command:{tooltip:"Save 33% or more on your 1st seat of Pro."},locations:["account","badge","gate"],quickpick:{detail:"$(star-full) Save 33% or more on your 1st seat of Pro"}}];function si(e,t,o){if(null!=e)for(const i of ni)if((null==o||o===i.key)&&ai(i,e)){if(null==t||null==i.locations||i.locations.includes(t))return i;break}}function ai(e,t){const o=Date.now();return(null==e.states||e.states.includes(t))&&(null==e.expiresOn||e.expiresOn>o)&&(null==e.startsOn||e.startsOn<o)}const li=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,ci=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,di=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let hi;const pi=new Map;let ui,gi,mi;function fi(e,t,o,i=!0){const r=`${o??""}:${t=t??void 0}`;let n=pi.get(r);if(null==n){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=ci.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(li))if(null!=t)for(const[e,i]of Object.entries(t))if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===i?"2-digit":"numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}return o}(t);let a;a=null==o?ui:"system"===o?void 0:[o],n=new Intl.DateTimeFormat(a,e),i&&pi.set(r,n)}if(null==t||ci.test(t))return n.format(e);function a(e){const t=`${o??""}:time:${e}`;let r=pi.get(t);if(null==r){const n={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?ui:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,n),i&&pi.set(t,r)}return r}const l=n.formatToParts(e);return t.replace(li,((t,o,i,r,n,c,d,h,p,u,g,m,f,v,y)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(y)){if(null==o)continue;const i=l.find((e=>e.type===t));if("Do"===o&&"day"===i?.type)return vi(Number(i.value));if("a"===o&&"dayPeriod"===i?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??i)?.value??""}`}return i?.value??""}return""}))}const bi=["th","st","nd","rd"];function vi(e){const t=e%100;return`${e}${bi[(t-20)%10]??bi[t]??bi[0]}`}function yi(e){switch(e){case ii.CommunityWithAccount:return"GitLens Community";case ii.Pro:return"GitLens Pro";case ii.Teams:return"GitLens Teams";case ii.Enterprise:return"GitLens Enterprise";case ii.Community:default:return"GitLens"}}ii.Community,ii.CommunityWithAccount,ii.Pro,ii.Teams,ii.Enterprise;function wi(e,t){return _i(e.plan.effective.expiresOn,t)}function _i(e,t){return null!=e?function(e,t,o,i){const r=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),n=i??Math.floor;switch(o){case"days":return n(r/864e5);case"hours":return n(r/36e5);case"minutes":return n(r/6e4);case"seconds":return n(r/1e3);default:return r}}(Date.now(),new Date(e),t,Math.round):void 0}function ki(e){return(t=e.plan.actual.id)!==ii.Community&&t!==ii.CommunityWithAccount;var t}var $i=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,Ci=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?xi(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&$i(t,o,n),n};let Si=class extends lit_element_r{constructor(){super(...arguments),this.open=!1}get headerId(){return`gl-accordion-header-${this.id??Math.random().toString(36).substring(2,9)}`}render(){return re`
			<details ?open=${this.open} @toggle=${this._handleToggle} role="region" aria-labelledby=${this.headerId}>
				<summary part="header" class="header" id=${this.headerId} role="button" aria-expanded=${this.open}>
					<slot class="label" name="header"></slot>
					<code-icon class="icon" icon=${this.open?"chevron-down":"chevron-right"}></code-icon>
				</summary>
				<div part="content" class="content">
					<slot></slot>
				</div>
			</details>
		`}_handleToggle(e){const t=e.target;this.open=t.open,this.dispatchEvent(new CustomEvent("gl-toggle",{detail:{open:this.open},bubbles:!0,composed:!0}))}};Si.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Si.styles=p`
		:host {
			display: block;
			font-family: var(--vscode-font-family);
			font-size: var(--vscode-font-size);
			font-weight: var(--vscode-font-weight);
			background-color: var(--gl-accordion-content-background, var(--vscode-editor-background));
			color: var(--vscode-foreground);
		}

		/*
		details {
			border: 1px solid var(--vscode-panel-border);
			border-radius: 4px;
			overflow: hidden;
		}
		*/

		.header {
			padding: 8px 12px;
			background-color: var(--gl-accordion-header-background, var(--vscode-sideBar-background));
			cursor: pointer;
			user-select: none;
			list-style: none;
			outline: none;
			display: flex;
			align-items: center;
			gap: 0.6rem;
		}

		.header::-webkit-details-marker {
			display: none;
		}

		.label {
			flex: 1;
			display: block;
		}

		.icon {
			flex: none;
			width: 20px;
			color: var(--vscode-foreground);
			opacity: 0.6;
		}

		.header:hover {
			background-color: var(--vscode-list-hoverBackground);
		}

		.header:focus {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		.content {
			padding: 12px;
			background-color: var(--gl-accordion-content-background, var(--vscode-editor-background));
		}
	`,Ci([ye({type:Boolean})],Si.prototype,"open",2),Si=Ci([fe("gl-accordion")],Si);var Pi=Object.defineProperty,Oi=Object.defineProperties,Ri=Object.getOwnPropertyDescriptor,Ai=Object.getOwnPropertyDescriptors,Ei=Object.getOwnPropertySymbols,Ti=Object.prototype.hasOwnProperty,Di=Object.prototype.propertyIsEnumerable,Ii=(e,t,o)=>t in e?Pi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Li=(e,t)=>{for(var o in t||(t={}))Ti.call(t,o)&&Ii(e,o,t[o]);if(Ei)for(var o of Ei(t))Di.call(t,o)&&Ii(e,o,t[o]);return e},Fi=(e,t)=>Oi(e,Ai(t)),Wi=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Ri(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Pi(t,o,n),n},Bi=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)},zi=new Map,Ni=new WeakMap;function ji(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function Mi(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ui(e,t){zi.set(e,ji(t))}function Gi(e,t,o){const i=Ni.get(e);if(null==i?void 0:i[t])return Mi(i[t],o.dir);const r=zi.get(t);return r?Mi(r,o.dir):{keyframes:[],options:{duration:0}}}var Vi=p`
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
`,qi=p`
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
`;const Hi=new Set,Ki=new Map;let Qi,Ji="ltr",Yi="en";const Zi="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Zi){const e=new MutationObserver(er);Ji=document.documentElement.dir||"ltr",Yi=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Xi(...e){e.map((e=>{const t=e.$code.toLowerCase();Ki.has(t)?Ki.set(t,Object.assign(Object.assign({},Ki.get(t)),e)):Ki.set(t,e),Qi||(Qi=e)})),er()}function er(){Zi&&(Ji=document.documentElement.dir||"ltr",Yi=document.documentElement.lang||navigator.language),[...Hi.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Hi.add(this.host)}hostDisconnected(){Hi.delete(this.host)}dir(){return`${this.host.dir||Ji}`.toLowerCase()}lang(){return`${this.host.lang||Yi}`.toLowerCase()}getTranslationData(e){var t,o;const i=new Intl.Locale(e.replace(/_/g,"-")),r=null==i?void 0:i.language.toLowerCase(),n=null!==(o=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:r,region:n,primary:Ki.get(`${r}-${n}`),secondary:Ki.get(r)}}exists(e,t){var o;const{primary:i,secondary:r}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||r&&r[e]||t.includeFallback&&Qi&&Qi[e])}term(e,...t){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let r;if(o&&o[e])r=o[e];else if(i&&i[e])r=i[e];else{if(!Qi||!Qi[e])return String(e);r=Qi[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var tr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Xi(tr);var or=tr,ir=class extends LocalizeController{};Xi(or);var rr,nr=p`
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
`,sr=class extends lit_element_r{constructor(){super(),((e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)})(this,rr,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,Li({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const i=customElements.get(e);if(!i){try{customElements.define(e,t,o)}catch(i){customElements.define(e,class extends t{},o)}return}let r=" (unknown version)",n=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in i&&i.version&&(n=" v"+i.version)}attributeChangedCallback(e,t,o){var i,r,n;Bi(i=this,r=rr,"read from private field"),(n?n.call(i):r.get(i))||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,o,i)=>{Bi(e,t,"write to private field"),i?i.call(e,o):t.set(e,o)})(this,rr,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)}))}};rr=new WeakMap,sr.version="2.18.0",sr.dependencies={},Wi([ye()],sr.prototype,"dir",2),Wi([ye()],sr.prototype,"lang",2);const ar=Math.min,lr=Math.max,cr=Math.round,dr=Math.floor,hr=e=>({x:e,y:e}),pr={left:"right",right:"left",bottom:"top",top:"bottom"},ur={start:"end",end:"start"};function gr(e,t,o){return lr(e,ar(t,o))}function mr(e,t){return"function"==typeof e?e(t):e}function fr(e){return e.split("-")[0]}function br(e){return e.split("-")[1]}function vr(e){return"x"===e?"y":"x"}function yr(e){return"y"===e?"height":"width"}function wr(e){return["top","bottom"].includes(fr(e))?"y":"x"}function _r(e){return vr(wr(e))}function kr(e){return e.replace(/start|end/g,(e=>ur[e]))}function $r(e){return e.replace(/left|right|bottom|top/g,(e=>pr[e]))}function xr(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Cr(e){const{x:t,y:o,width:i,height:r}=e;return{width:i,height:r,top:o,left:t,right:t+i,bottom:o+r,x:t,y:o}}function Sr(e,t,o){let{reference:i,floating:r}=e;const n=wr(t),a=_r(t),l=yr(a),c=fr(t),d="y"===n,h=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,u=i[l]/2-r[l]/2;let g;switch(c){case"top":g={x:h,y:i.y-r.height};break;case"bottom":g={x:h,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:p};break;case"left":g={x:i.x-r.width,y:p};break;default:g={x:i.x,y:i.y}}switch(br(t)){case"start":g[a]-=u*(o&&d?-1:1);break;case"end":g[a]+=u*(o&&d?-1:1)}return g}async function Pr(e,t){var o;void 0===t&&(t={});const{x:i,y:r,platform:n,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=mr(t,e),m=xr(g),f=l[u?"floating"===p?"reference":"floating":p],v=Cr(await n.getClippingRect({element:null==(o=await(null==n.isElement?void 0:n.isElement(f)))||o?f:f.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),y="floating"===p?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==n.getOffsetParent?void 0:n.getOffsetParent(l.floating)),_=await(null==n.isElement?void 0:n.isElement(w))&&await(null==n.getScale?void 0:n.getScale(w))||{x:1,y:1},$=Cr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-$.top+m.top)/_.y,bottom:($.bottom-v.bottom+m.bottom)/_.y,left:(v.left-$.left+m.left)/_.x,right:($.right-v.right+m.right)/_.x}}function Or(){return"undefined"!=typeof window}function Rr(e){return Tr(e)?(e.nodeName||"").toLowerCase():"#document"}function Ar(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Er(e){var t;return null==(t=(Tr(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Tr(e){return!!Or()&&(e instanceof Node||e instanceof Ar(e).Node)}function Dr(e){return!!Or()&&(e instanceof Element||e instanceof Ar(e).Element)}function Ir(e){return!!Or()&&(e instanceof HTMLElement||e instanceof Ar(e).HTMLElement)}function Lr(e){return!(!Or()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof Ar(e).ShadowRoot)}function Fr(e){const{overflow:t,overflowX:o,overflowY:i,display:r}=Mr(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(r)}function Wr(e){return["table","td","th"].includes(Rr(e))}function Br(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function zr(e){const t=Nr(),o=Dr(e)?Mr(e):e;return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Nr(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function jr(e){return["html","body","#document"].includes(Rr(e))}function Mr(e){return Ar(e).getComputedStyle(e)}function Ur(e){return Dr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if("html"===Rr(e))return e;const t=e.assignedSlot||e.parentNode||Lr(e)&&e.host||Er(e);return Lr(t)?t.host:t}function Vr(e){const t=Gr(e);return jr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ir(t)&&Fr(t)?t:Vr(t)}function qr(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=Vr(e),n=r===(null==(i=e.ownerDocument)?void 0:i.body),a=Ar(r);if(n){const e=Hr(a);return t.concat(a,a.visualViewport||[],Fr(r)?r:[],e&&o?qr(e):[])}return t.concat(r,qr(r,[],o))}function Hr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Kr(e){const t=Mr(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Ir(e),n=r?e.offsetWidth:o,a=r?e.offsetHeight:i,l=cr(o)!==n||cr(i)!==a;return l&&(o=n,i=a),{width:o,height:i,$:l}}function Qr(e){return Dr(e)?e:e.contextElement}function Jr(e){const t=Qr(e);if(!Ir(t))return hr(1);const o=t.getBoundingClientRect(),{width:i,height:r,$:n}=Kr(t);let a=(n?cr(o.width):o.width)/i,l=(n?cr(o.height):o.height)/r;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Yr=hr(0);function Zr(e){const t=Ar(e);return Nr()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Yr}function Xr(e,t,o,i){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),n=Qr(e);let a=hr(1);t&&(i?Dr(i)&&(a=Jr(i)):a=Jr(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Ar(e))&&t}(n,o,i)?Zr(n):hr(0);let c=(r.left+l.x)/a.x,d=(r.top+l.y)/a.y,h=r.width/a.x,p=r.height/a.y;if(n){const e=Ar(n),t=i&&Dr(i)?Ar(i):i;let o=e,r=Hr(o);for(;r&&i&&t!==o;){const e=Jr(r),t=r.getBoundingClientRect(),i=Mr(r),n=t.left+(r.clientLeft+parseFloat(i.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(i.paddingTop))*e.y;c*=e.x,d*=e.y,h*=e.x,p*=e.y,c+=n,d+=a,o=Ar(r),r=Hr(o)}}return Cr({width:h,height:p,x:c,y:d})}function en(e,t){const o=Ur(e).scrollLeft;return t?t.left+o:Xr(Er(e)).left+o}function tn(e,t,o){void 0===o&&(o=!1);const i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-(o?0:en(e,i)),y:i.top+t.scrollTop}}function on(e,t,o){let i;if("viewport"===t)i=function(e,t){const o=Ar(e),i=Er(e),r=o.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,c=0;if(r){n=r.width,a=r.height;const e=Nr();(!e||e&&"fixed"===t)&&(l=r.offsetLeft,c=r.offsetTop)}return{width:n,height:a,x:l,y:c}}(e,o);else if("document"===t)i=function(e){const t=Er(e),o=Ur(e),i=e.ownerDocument.body,r=lr(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=lr(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+en(e);const l=-o.scrollTop;return"rtl"===Mr(i).direction&&(a+=lr(t.clientWidth,i.clientWidth)-r),{width:r,height:n,x:a,y:l}}(Er(e));else if(Dr(t))i=function(e,t){const o=Xr(e,!0,"fixed"===t),i=o.top+e.clientTop,r=o.left+e.clientLeft,n=Ir(e)?Jr(e):hr(1);return{width:e.clientWidth*n.x,height:e.clientHeight*n.y,x:r*n.x,y:i*n.y}}(t,o);else{const o=Zr(e);i={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return Cr(i)}function rn(e,t){const o=Gr(e);return!(o===t||!Dr(o)||jr(o))&&("fixed"===Mr(o).position||rn(o,t))}function nn(e,t,o){const i=Ir(t),r=Er(t),n="fixed"===o,a=Xr(e,!0,n,t);let l={scrollLeft:0,scrollTop:0};const c=hr(0);if(i||!i&&!n)if(("body"!==Rr(t)||Fr(r))&&(l=Ur(t)),i){const e=Xr(t,!0,n,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else r&&(c.x=en(r));const d=!r||i||n?hr(0):tn(r,l);return{x:a.left+l.scrollLeft-c.x-d.x,y:a.top+l.scrollTop-c.y-d.y,width:a.width,height:a.height}}function sn(e){return"static"===Mr(e).position}function an(e,t){if(!Ir(e)||"fixed"===Mr(e).position)return null;if(t)return t(e);let o=e.offsetParent;return Er(e)===o&&(o=o.ownerDocument.body),o}function ln(e,t){const o=Ar(e);if(Br(e))return o;if(!Ir(e)){let t=Gr(e);for(;t&&!jr(t);){if(Dr(t)&&!sn(t))return t;t=Gr(t)}return o}let i=an(e,t);for(;i&&Wr(i)&&sn(i);)i=an(i,t);return i&&jr(i)&&sn(i)&&!zr(i)?o:i||function(e){let t=Gr(e);for(;Ir(t)&&!jr(t);){if(zr(t))return t;if(Br(t))return null;t=Gr(t)}return null}(e)||o}const cn={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:i,strategy:r}=e;const n="fixed"===r,a=Er(i),l=!!t&&Br(t.floating);if(i===a||l&&n)return o;let c={scrollLeft:0,scrollTop:0},d=hr(1);const h=hr(0),p=Ir(i);if((p||!p&&!n)&&(("body"!==Rr(i)||Fr(a))&&(c=Ur(i)),Ir(i))){const e=Xr(i);d=Jr(i),h.x=e.x+i.clientLeft,h.y=e.y+i.clientTop}const u=!a||p||n?hr(0):tn(a,c,!0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-c.scrollLeft*d.x+h.x+u.x,y:o.y*d.y-c.scrollTop*d.y+h.y+u.y}},getDocumentElement:Er,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:r}=e;const n=[..."clippingAncestors"===o?Br(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let i=qr(e,[],!1).filter((e=>Dr(e)&&"body"!==Rr(e))),r=null;const n="fixed"===Mr(e).position;let a=n?Gr(e):e;for(;Dr(a)&&!jr(a);){const t=Mr(a),o=zr(a);o||"fixed"!==t.position||(r=null),(n?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||Fr(a)&&!o&&rn(e,a))?i=i.filter((e=>e!==a)):r=t,a=Gr(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=n[0],l=n.reduce(((e,o)=>{const i=on(t,o,r);return e.top=lr(i.top,e.top),e.right=ar(i.right,e.right),e.bottom=ar(i.bottom,e.bottom),e.left=lr(i.left,e.left),e}),on(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:ln,getElementRects:async function(e){const t=this.getOffsetParent||ln,o=this.getDimensions,i=await o(e.floating);return{reference:nn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=Kr(e);return{width:t,height:o}},getScale:Jr,isElement:Dr,isRTL:function(e){return"rtl"===Mr(e).direction}};function dn(e,t,o,i){void 0===i&&(i={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=i,d=Qr(e),h=r||n?[...d?qr(d):[],...qr(t)]:[];h.forEach((e=>{r&&e.addEventListener("scroll",o,{passive:!0}),n&&e.addEventListener("resize",o)}));const p=d&&l?function(e,t){let o,i=null;const r=Er(e);function n(){var e;clearTimeout(o),null==(e=i)||e.disconnect(),i=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),n();const{left:d,top:h,width:p,height:u}=e.getBoundingClientRect();if(l||t(),!p||!u)return;const g={rootMargin:-dr(h)+"px "+-dr(r.clientWidth-(d+p))+"px "+-dr(r.clientHeight-(h+u))+"px "+-dr(d)+"px",threshold:lr(0,ar(1,c))||1};let m=!0;function f(e){const t=e[0].intersectionRatio;if(t!==c){if(!m)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}m=!1}try{i=new IntersectionObserver(f,{...g,root:r.ownerDocument})}catch(e){i=new IntersectionObserver(f,g)}i.observe(e)}(!0),n}(d,o):null;let u,g=-1,m=null;a&&(m=new ResizeObserver((e=>{let[i]=e;i&&i.target===d&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),o()})),d&&!c&&m.observe(d),m.observe(t));let f=c?Xr(e):null;return c&&function t(){const i=Xr(e);!f||i.x===f.x&&i.y===f.y&&i.width===f.width&&i.height===f.height||o();f=i,u=requestAnimationFrame(t)}(),o(),()=>{var e;h.forEach((e=>{r&&e.removeEventListener("scroll",o),n&&e.removeEventListener("resize",o)})),null==p||p(),null==(e=m)||e.disconnect(),m=null,c&&cancelAnimationFrame(u)}}const hn=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:r,y:n,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:o,platform:i,elements:r}=e,n=await(null==i.isRTL?void 0:i.isRTL(r.floating)),a=fr(o),l=br(o),c="y"===wr(o),d=["left","top"].includes(a)?-1:1,h=n&&c?-1:1,p=mr(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*h,y:u*d}:{x:u*d,y:g*h}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:r+c.x,y:n+c.y,data:{...c,placement:a}}}}},pn=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:r}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=mr(e,t),d={x:o,y:i},h=await Pr(t,c),p=wr(fr(r)),u=vr(p);let g=d[u],m=d[p];if(n){const e="y"===u?"bottom":"right";g=gr(g+h["y"===u?"top":"left"],g,g-h[e])}if(a){const e="y"===p?"bottom":"right";m=gr(m+h["y"===p?"top":"left"],m,m-h[e])}const f=l.fn({...t,[u]:g,[p]:m});return{...f,data:{x:f.x-o,y:f.y-i,enabled:{[u]:n,[p]:a}}}}}},un=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:r,middlewareData:n,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...v}=mr(e,t);if(null!=(o=n.arrow)&&o.alignmentOffset)return{};const y=fr(r),w=wr(l),_=fr(l)===l,$=await(null==c.isRTL?void 0:c.isRTL(d.floating)),x=u||(_||!f?[$r(l)]:function(e){const t=$r(e);return[kr(e),t,kr(t)]}(l)),C="none"!==m;!u&&C&&x.push(...function(e,t,o,i){const r=br(e);let n=function(e,t,o){const i=["left","right"],r=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:i:t?i:r;case"left":case"right":return t?n:a;default:return[]}}(fr(e),"start"===o,i);return r&&(n=n.map((e=>e+"-"+r)),t&&(n=n.concat(n.map(kr)))),n}(l,f,m,$));const S=[l,...x],P=await Pr(t,v),O=[];let A=(null==(i=n.flip)?void 0:i.overflows)||[];if(h&&O.push(P[y]),p){const e=function(e,t,o){void 0===o&&(o=!1);const i=br(e),r=_r(e),n=yr(r);let a="x"===r?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[n]>t.floating[n]&&(a=$r(a)),[a,$r(a)]}(r,a,$);O.push(P[e[0]],P[e[1]])}if(A=[...A,{placement:r,overflows:O}],!O.every((e=>e<=0))){var E,T;const e=((null==(E=n.flip)?void 0:E.index)||0)+1,t=S[e];if(t)return{data:{index:e,overflows:A},reset:{placement:t}};let o=null==(T=A.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:T.placement;if(!o)switch(g){case"bestFit":{var D;const e=null==(D=A.filter((e=>{if(C){const t=wr(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:D[0];e&&(o=e);break}case"initialPlacement":o=l}if(r!==o)return{reset:{placement:o}}}return{}}}},gn=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,i;const{placement:r,rects:n,platform:a,elements:l}=t,{apply:c=()=>{},...d}=mr(e,t),h=await Pr(t,d),p=fr(r),u=br(r),g="y"===wr(r),{width:m,height:f}=n.floating;let v,y;"top"===p||"bottom"===p?(v=p,y=u===(await(null==a.isRTL?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(y=p,v="end"===u?"top":"bottom");const w=f-h.top-h.bottom,_=m-h.left-h.right,$=ar(f-h[v],w),x=ar(m-h[y],_),C=!t.middlewareData.shift;let S=$,P=x;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(P=_),null!=(i=t.middlewareData.shift)&&i.enabled.y&&(S=w),C&&!u){const e=lr(h.left,0),t=lr(h.right,0),o=lr(h.top,0),i=lr(h.bottom,0);g?P=m-2*(0!==e||0!==t?e+t:lr(h.left,h.right)):S=f-2*(0!==o||0!==i?o+i:lr(h.top,h.bottom))}await c({...t,availableWidth:P,availableHeight:S});const O=await a.getDimensions(l.floating);return m!==O.width||f!==O.height?{reset:{rects:!0}}:{}}}},mn=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:r,rects:n,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=mr(e,t)||{};if(null==d)return{};const p=xr(h),u={x:o,y:i},g=_r(r),m=yr(g),f=await a.getDimensions(d),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",_=v?"clientHeight":"clientWidth",$=n.reference[m]+n.reference[g]-u[g]-n.floating[m],x=u[g]-n.reference[g],C=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let S=C?C[_]:0;S&&await(null==a.isElement?void 0:a.isElement(C))||(S=l.floating[_]||n.floating[m]);const P=$/2-x/2,O=S/2-f[m]/2-1,A=ar(p[y],O),E=ar(p[w],O),T=A,D=S-f[m]-E,F=S/2-f[m]/2+P,W=gr(T,F,D),B=!c.arrow&&null!=br(r)&&F!==W&&n.reference[m]/2-(F<T?A:E)-f[m]/2<0,j=B?F<T?F-T:F-D:0;return{[g]:u[g]+j,data:{[g]:W,centerOffset:F-W-j,...B&&{alignmentOffset:j}},reset:B}}}),fn=(e,t,o)=>{const i=new Map,r={platform:cn,...o},n={...r.platform,_c:i};return(async(e,t,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:n=[],platform:a}=o,l=n.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:p}=Sr(d,i,c),u=i,g={},m=0;for(let o=0;o<l.length;o++){const{name:n,fn:f}=l[o],{x:v,y,data:w,reset:_}=await f({x:h,y:p,initialPlacement:i,placement:u,strategy:r,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=v?v:h,p=null!=y?y:p,g={...g,[n]:{...g[n],...w}},_&&m<=50&&(m++,"object"==typeof _&&(_.placement&&(u=_.placement),_.rects&&(d=!0===_.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):_.rects),({x:h,y:p}=Sr(d,u,c))),o=-1)}return{x:h,y:p,placement:u,strategy:r,middlewareData:g}})(e,t,{...r,platform:n})},bn=Dt(class extends directive_i{constructor(e){if(super(e),e.type!==Et||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return se}});function vn(e){return wn(e)}function yn(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function wn(e){for(let t=e;t;t=yn(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=yn(e);t;t=yn(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var _n=class extends sr{constructor(){super(...arguments),this.localize=new ir(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,i=0,r=0,n=0,a=0,l=0,c=0,d=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,i=e.bottom,r=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):(o=t.left,i=t.bottom,r=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):e.left<t.left?(o=e.right,i=e.top,r=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom):(o=t.right,i=t.top,r=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=dn(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[hn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(gn({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(un({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(pn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(gn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(mn({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>cn.getOffsetParent(e,vn):cn.getOffsetParent;fn(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Fi(Li({},cn),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:i})=>{const r="rtl"===this.localize.dir(),n={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let i="",a="",l="",c="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?o:"",c=r?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":o,c=r?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",i="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:l,left:c,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return re`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${bn({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${bn({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?re`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function kn(e,t){return new Promise((o=>{e.addEventListener(t,(function i(r){r.target===e&&(e.removeEventListener(t,i),o())}))}))}function $n(e,t,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,Fi(Li({},o),{duration:Cn()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})}))}function xn(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Cn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Sn(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}function Pn(e,t){const o=Li({waitUntilFirstUpdate:!1},t);return(t,i)=>{const{update:r}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),n=this[r];t!==n&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](t,n))}})),r.call(this,e)}}}_n.styles=[nr,qi],Wi([ke(".popup")],_n.prototype,"popup",2),Wi([ke(".popup__arrow")],_n.prototype,"arrowEl",2),Wi([ye()],_n.prototype,"anchor",2),Wi([ye({type:Boolean,reflect:!0})],_n.prototype,"active",2),Wi([ye({reflect:!0})],_n.prototype,"placement",2),Wi([ye({reflect:!0})],_n.prototype,"strategy",2),Wi([ye({type:Number})],_n.prototype,"distance",2),Wi([ye({type:Number})],_n.prototype,"skidding",2),Wi([ye({type:Boolean})],_n.prototype,"arrow",2),Wi([ye({attribute:"arrow-placement"})],_n.prototype,"arrowPlacement",2),Wi([ye({attribute:"arrow-padding",type:Number})],_n.prototype,"arrowPadding",2),Wi([ye({type:Boolean})],_n.prototype,"flip",2),Wi([ye({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],_n.prototype,"flipFallbackPlacements",2),Wi([ye({attribute:"flip-fallback-strategy"})],_n.prototype,"flipFallbackStrategy",2),Wi([ye({type:Object})],_n.prototype,"flipBoundary",2),Wi([ye({attribute:"flip-padding",type:Number})],_n.prototype,"flipPadding",2),Wi([ye({type:Boolean})],_n.prototype,"shift",2),Wi([ye({type:Object})],_n.prototype,"shiftBoundary",2),Wi([ye({attribute:"shift-padding",type:Number})],_n.prototype,"shiftPadding",2),Wi([ye({attribute:"auto-size"})],_n.prototype,"autoSize",2),Wi([ye()],_n.prototype,"sync",2),Wi([ye({type:Object})],_n.prototype,"autoSizeBoundary",2),Wi([ye({attribute:"auto-size-padding",type:Number})],_n.prototype,"autoSizePadding",2),Wi([ye({attribute:"hover-bridge",type:Boolean})],_n.prototype,"hoverBridge",2);var On=class extends sr{constructor(){super(),this.localize=new ir(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=xn(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=xn(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Sn(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=Gi(this,"tooltip.show",{dir:this.localize.dir()});await $n(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Sn(this.body);const{keyframes:e,options:o}=Gi(this,"tooltip.hide",{dir:this.localize.dir()});await $n(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,kn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,kn(this,"sl-after-hide")}render(){return re`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${bn({tooltip:!0,"tooltip--open":this.open})}
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
    `}};On.styles=[nr,Vi],On.dependencies={"sl-popup":_n},Wi([ke("slot:not([name])")],On.prototype,"defaultSlot",2),Wi([ke(".tooltip__body")],On.prototype,"body",2),Wi([ke("sl-popup")],On.prototype,"popup",2),Wi([ye()],On.prototype,"content",2),Wi([ye()],On.prototype,"placement",2),Wi([ye({type:Boolean,reflect:!0})],On.prototype,"disabled",2),Wi([ye({type:Number})],On.prototype,"distance",2),Wi([ye({type:Boolean,reflect:!0})],On.prototype,"open",2),Wi([ye({type:Number})],On.prototype,"skidding",2),Wi([ye()],On.prototype,"trigger",2),Wi([ye({type:Boolean})],On.prototype,"hoist",2),Wi([Pn("open",{waitUntilFirstUpdate:!0})],On.prototype,"handleOpenChange",1),Wi([Pn(["content","distance","hoist","placement","skidding"])],On.prototype,"handleOptionsChange",1),Wi([Pn("disabled")],On.prototype,"handleDisabledChange",1),Ui("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Ui("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});On.define("sl-tooltip");var Rn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,En=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?An(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Rn(t,o,n),n};Ui("tooltip.show",null),Ui("tooltip.hide",null);let Tn=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return re`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ae}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};Tn.styles=p`
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
	`,En([ye()],Tn.prototype,"content",2),En([ye({reflect:!0})],Tn.prototype,"placement",2),En([ye({type:Boolean})],Tn.prototype,"disabled",2),En([ye({type:Number})],Tn.prototype,"distance",2),En([ye({type:Boolean})],Tn.prototype,"hoist",2),Tn=En([fe("gl-tooltip")],Tn);var Dn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Ln=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?In(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Dn(t,o,n),n};let Fn=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?re`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?re`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?re`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:re`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};Fn.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Fn.styles=[Ho,p`
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
				box-sizing: border-box;
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
				${qo}
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
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],Ln([ke(".control")],Fn.prototype,"control",2),Ln([ye({reflect:!0})],Fn.prototype,"appearance",2),Ln([ye({type:Boolean,reflect:!0})],Fn.prototype,"disabled",2),Ln([ye({reflect:!0})],Fn.prototype,"density",2),Ln([ye({type:Boolean,reflect:!0})],Fn.prototype,"full",2),Ln([ye()],Fn.prototype,"href",2),Ln([ye({reflect:!0})],Fn.prototype,"role",1),Ln([ye()],Fn.prototype,"tooltip",2),Fn=Ln([fe("gl-button")],Fn);var Wn=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,zn=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Bn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Wn(t,o,n),n};let Nn=class extends lit_element_r{constructor(){super(...arguments),this.editor=!1}render(){return re`<div class="group"><slot></slot></div>`}};Nn.styles=[Ho,p`
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
		`],zn([ye({type:Boolean})],Nn.prototype,"editor",2),Nn=zn([fe("button-container")],Nn);var jn=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,Un=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Mn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&jn(t,o,n),n};const Gn=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133","gl-play-button":"\\f134","rocket-filled":"\\f135"});let Vn=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Vn.styles=p`
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

		${h(Object.entries(Gn).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

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
	`,Un([ye({reflect:!0})],Vn.prototype,"icon",2),Un([ye({reflect:!0})],Vn.prototype,"modifier",2),Un([ye({type:Number})],Vn.prototype,"size",2),Un([ye({reflect:!0})],Vn.prototype,"flip",2),Un([ye({reflect:!0})],Vn.prototype,"rotate",2),Vn=Un([fe("code-icon")],Vn);const qn=e=>e??ae;var Hn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Qn=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Kn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Hn(t,o,n),n};let Jn=class extends lit_element_r{constructor(){super(...arguments),this.type="info"}get hasPromo(){return null!=this.promo}render(){if(!this.promo)return;const e=this.renderPromo(this.promo);return e?"link"===this.type?re`<a
				class="link"
				href="${this.promo.command?.command??"command:gitlens.plus.upgrade"}"
				title="${qn(this.promo.command?.tooltip)}"
				>${e}</a
			>`:re`<p class="promo">${e}</p>`:void 0}renderPromo(e){switch(e.key){case"gkholiday":return re`<span class="content${"link"===this.type?ae:" muted"}"
					>Get the gift of a better DevEx in 2025! <b>Save up to 80% now</b></span
				>`;case"cybersale24":return re`<span class="content${"link"===this.type?ae:" muted"}"
					>Cyber Sale: <b>Save up to 85%</b> on GitLens Pro — our best deal of the year!</span
				>`;case"gitlens16":return re`<span class="content${"link"===this.type?ae:" muted"}"
					><b>Save more than 55%</b> during our GitLens 16 sale!</span
				>`;case"pro50":return re`<span class="content${"link"===this.type?ae:" muted"}"
					><b>Save 33% or more</b> on your 1st seat of Pro</span
				>`;default:return e.key,ae}}};Jn.styles=[p`
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
		`],Qn([ye({type:Object})],Jn.prototype,"promo",2),Qn([ye({reflect:!0,type:String})],Jn.prototype,"type",2),Qn([ye({reflect:!0,type:Boolean,attribute:"has-promo"})],Jn.prototype,"hasPromo",1),Jn=Qn([fe("gl-promo")],Jn);var Yn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Xn=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Zn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Yn(t,o,n),n};let es=class extends lit_element_r{get daysRemaining(){return null==this._state.subscription?0:wi(this._state.subscription,"days")??0}get hasAccount(){return null!=(e=this.state)&&e!==ri.Community&&e!==ri.ProPreviewExpired&&e!==ri.ProPreview;var e}get isReactivatedTrial(){return this.state===ri.ProTrial&&(this._state.subscription?.plan.effective.trialReactivationCount??0)>0}get planId(){return this._state.subscription?.plan.actual.id??ii.Pro}get planName(){return function(e,t){switch(e){case ri.Community:case ri.ProPreviewExpired:return yi(ii.Community);case ri.ProPreview:return`${yi(ii.Pro)} (Preview)`;case ri.ProTrial:return`${yi(ii.Pro)} (Trial)`;case ri.ProTrialExpired:case ri.ProTrialReactivationEligible:return yi(ii.CommunityWithAccount);case ri.VerificationRequired:return`${yi(t??ii.Pro)} (Unverified)`;default:return yi(t??ii.Pro)}}(this.state,this.planId)}get state(){return this._state.subscription?.state}render(){return re`<gl-accordion id="accordion">
			<div class="header" slot="header">
				${this.hasAccount&&this._state.avatar?re`<img class="header__media" src=${this._state.avatar} />`:re`<code-icon class="header__media" icon="gl-gitlens" size="30"></code-icon>`}
				<span class="header__title">${this.planName}</span>
				${$e(this.state===ri.ProTrialReactivationEligible,(()=>re`
						<gl-button
							appearance="secondary"
							tight
							href="command:gitlens.plus.reactivateProTrial"
							tooltip="Reactivate your Pro trial for another ${mo("day",oi)}"
							>Reactivate Pro Trial</gl-button
						>
					`))}
				${$e(this.hasAccount,(()=>re`
						<span class="header__actions">
							${$e(!this._state.hasAnyIntegrationConnected,(()=>re`
									<gl-button
										appearance="toolbar"
										href="command:gitlens.plus.cloudIntegrations.connect?%7B%22source%22%3A%22home%22%7D"
										tooltip="Connect an Integration"
										aria-label="Connect an Integration on GitKraken.dev"
										><code-icon icon="plug"></code-icon
									></gl-button>
								`))}
							<gl-button
								appearance="toolbar"
								href="command:gitlens.views.home.account.resync"
								tooltip="Synchronize Account Status"
								aria-label="Synchronize Account Status"
								><code-icon icon="sync"></code-icon
							></gl-button>
							<gl-button
								appearance="toolbar"
								href="command:gitlens.plus.logout"
								tooltip="Sign Out"
								aria-label="Sign Out"
								><code-icon icon="sign-out"></code-icon
							></gl-button>
						</span>
					`))}
			</div>
			${this.renderOrganization()}${this.renderAccountState()}
			<slot></slot>
		</gl-accordion>`}renderOrganization(){const e=this._state.subscription?.activeOrganization?.name??"";return this.hasAccount&&e?re`
			<div class="org">
				<div class="org__media">
					<code-icon icon="organization" size="22"></code-icon>
				</div>
				<div class="org__details">
					<p class="org__title">${e}</p>
				</div>
				${$e(this._state.organizationsCount>1,(()=>re`<div class="org__signout">
							<gl-button
								appearance="toolbar"
								href="command:gitlens.gk.switchOrganization"
								aria-label="Switch Active Organization"
								><span class="org__badge">+${this._state.organizationsCount-1}</span
								><code-icon icon="arrow-swap"></code-icon
								><span slot="tooltip"
									>Switch Active Organization
									<hr />
									You are in
									${mo("organization",this._state.organizationsCount-1,{infix:" other "})}</span
								></gl-button
							>
						</div>`))}
			</div>
		`:ae}renderAccountState(){const e=si(this.state,"account");switch(this.state){case ri.Paid:return re`
					<div class="account">
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
							Your ${yi(this.planId)} plan provides full access to all GitLens Pro
							features and the <a href="${po.platform}">GitKraken DevEx platform</a>, unleashing
							powerful Git visualization &amp; productivity capabilities everywhere you work: IDE,
							desktop, browser, and terminal.
						</p>
					</div>
				`;case ri.VerificationRequired:return re`
					<div class="account">
						<p>You must verify your email before you can access Pro features.</p>
						<button-container>
							<gl-button full href="command:gitlens.plus.resendVerification">Resend Email</gl-button>
							<gl-button appearance="secondary" href="command:gitlens.plus.validate"
								><code-icon size="20" icon="refresh"></code-icon>
							</gl-button>
						</button-container>
					</div>
				`;case ri.ProTrial:{const t=this.daysRemaining;return re`
					<div class="account">
						${this.isReactivatedTrial?re`<p>
									<code-icon icon="megaphone"></code-icon>
									See
									<a href="${po.releaseNotes}">what's new</a>
									in GitLens.
							  </p>`:ae}
						<p>
							You have
							<strong>${t<1?"<1 day":mo("day",t,{infix:" more "})} left</strong>
							in your Pro trial. Once your trial ends, you will only be able to use Pro features on
							publicly-hosted repos.
						</p>
						<button-container>
							<gl-button full href="command:gitlens.plus.upgrade">Upgrade to Pro</gl-button>
						</button-container>
						${this.renderPromo(e)} ${this.renderIncludesDevEx()}
					</div>
				`}case ri.ProTrialExpired:return re`
					<div class="account">
						<p>Thank you for trying <a href="${po.communityVsPro}">GitLens Pro</a>.</p>
						<p>
							Continue leveraging Pro features and workflows on privately-hosted repos by upgrading today.
						</p>
						<button-container>
							<gl-button full href="command:gitlens.plus.upgrade">Upgrade to Pro</gl-button>
						</button-container>
						${this.renderPromo(e)} ${this.renderIncludesDevEx()}
					</div>
				`;case ri.ProTrialReactivationEligible:return re`
					<div class="account">
						<p>
							Reactivate your GitLens Pro trial and experience all the new Pro features — free for another
							${mo("day",oi)}.
						</p>
						<button-container>
							<gl-button
								full
								href="command:gitlens.plus.reactivateProTrial"
								tooltip="Reactivate your Pro trial for another ${mo("day",oi)}"
								>Reactivate GitLens Pro Trial</gl-button
							>
						</button-container>
					</div>
				`;default:return re`
					<div class="account">
						<p>
							Unlock advanced features and workflows on private repos, accelerate reviews, and streamline
							collaboration with
							<a href="${po.communityVsPro}">GitLens Pro</a>.
						</p>
						<button-container>
							<gl-button full href="command:gitlens.plus.signUp">Try GitLens Pro</gl-button>
							<span class="button-suffix">or <a href="command:gitlens.plus.login">sign in</a></span>
						</button-container>
						<p>Get ${oi} days of GitLens Pro for free — no credit card required.</p>
					</div>
				`}}renderIncludesDevEx(){return re`
			<p>
				Includes access to the <a href="${po.platform}">GitKraken DevEx platform</a>, unleashing powerful Git
				visualization &amp; productivity capabilities everywhere you work: IDE, desktop, browser, and terminal.
			</p>
		`}renderPromo(e){return re`<gl-promo .promo=${e}></gl-promo>`}focus(){this.accordionEl.focus()}show(){this.accordionEl.open=!0,this.accordionEl.focus()}};function ts(e,t,o,i){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:o,...i}))}`}es.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},es.styles=[Ho,Ko,p`
			:host {
				display: block;
				margin-bottom: 1.3rem;
				--gl-accordion-content-background: var(--vscode-sideBar-background);
				--gl-accordion-header-background: var(--vscode-sideBarSectionHeader-background);
			}

			:host > * {
				margin-bottom: 0;
			}

			button-container {
				margin-bottom: 1.3rem;
			}

			button-container .button-suffix {
				display: inline-flex;
				align-items: center;
				white-space: nowrap;
				gap: 0.2em;
				margin-left: 0.4rem;
			}

			gl-accordion {
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
			}

			.header {
				display: flex;
				align-items: center;
				gap: 0.6rem;
			}

			.header__media {
				flex: none;
			}

			.header__actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			img.header__media {
				width: 3rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
			}

			.header__title {
				flex: 1;
				font-size: 1.5rem;
				font-weight: 600;
				margin: 0;
			}

			.org {
				position: relative;
				display: flex;
				flex-direction: row;
				gap: 0 0.8rem;
				align-items: center;
				margin-bottom: 1.3rem;
			}

			.org__media {
				flex: none;
				width: 3.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
				color: var(--color-foreground--65);
			}

			.org__image {
				width: 100%;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
			}

			.org__details {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.org__title {
				font-size: 1.3rem;
				font-weight: 600;
				margin: 0;
			}

			.org__access {
				position: relative;
				margin: 0;
				color: var(--color-foreground--65);
			}

			.org__signout {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			.org__badge {
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
				margin-right: 0.6rem;
			}

			.account > :first-child {
				margin-block-start: 0;
			}
			.account > :last-child {
				margin-block-end: 0;
			}

			hr {
				border: none;
				border-top: 1px solid var(--color-foreground--25);
			}
		`],Xn([ke("#accordion")],es.prototype,"accordionEl",2),Xn([n({context:ti,subscribe:!0}),we()],es.prototype,"_state",2),es=Xn([fe("gl-home-account-content")],es);const os=p`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus,
	a:focus-visible {
		outline-color: var(--color-focus-border);
		outline-style: solid;
		outline-width: 1px;
		border-radius: 0.2rem;
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var is=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,ns=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?rs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&is(t,o,n),n};let ss=class extends lit_element_r{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return re`<div class="progress-bar"></div>`}};ss.styles=p`
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
	`,ns([ye({reflect:!0})],ss.prototype,"mode",2),ns([ye({type:Boolean})],ss.prototype,"active",2),ns([ye()],ss.prototype,"position",2),ss=ns([fe("progress-indicator")],ss);var as=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,cs=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ls(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&as(t,o,n),n};let ds=class extends lit_element_r{render(){return this.name?re`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?re`<a href=${this.href} class="avatar">${this.renderContent()}</a>`:re`<span class="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?re`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:re`<slot class="thumb thumb--text"></slot>`}};ds.styles=[p`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			.avatar {
				display: inline-flex;
				width: var(--gl-avatar-size, 1.6rem);
				aspect-ratio: 1;
				vertical-align: middle;
				border-radius: 100%;
			}

			.thumb {
				border-radius: 50%;
			}

			.thumb--text {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 0.8rem;
				line-height: 1;
				text-transform: uppercase;
				cursor: default;
			}

			.thumb--media {
				display: block;
				width: 100%;
				height: auto;
				object-fit: cover;
				object-position: 50% 50%;
			}
		`],cs([ye()],ds.prototype,"src",2),cs([ye()],ds.prototype,"name",2),cs([ye()],ds.prototype,"href",2),ds=cs([fe("gl-avatar")],ds);_n.define("sl-popup");var hs=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,us=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ps(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&hs(t,o,n),n};let gs=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=Co(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const o=Co(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,So(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,So(this,"gl-popover-after-hide")}render(){return re`<sl-popup
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
				class="popover__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}};gs.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},gs.styles=p`
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
	`,us([ke("#popover")],gs.prototype,"body",2),us([ke("sl-popup")],gs.prototype,"popup",2),us([ye({reflect:!0})],gs.prototype,"placement",2),us([ye({type:Object})],gs.prototype,"anchor",2),us([ye({reflect:!0,type:Boolean})],gs.prototype,"disabled",2),us([ye({type:Number})],gs.prototype,"distance",2),us([ye({reflect:!0,type:Boolean})],gs.prototype,"open",2),us([ye({reflect:!0,type:Boolean})],gs.prototype,"arrow",2),us([ye({type:Number})],gs.prototype,"skidding",2),us([ye()],gs.prototype,"trigger",2),us([ye({type:Boolean})],gs.prototype,"hoist",2),us([to("open",{afterFirstUpdate:!0})],gs.prototype,"handleOpenChange",1),us([to(["distance","hoist","placement","skidding"])],gs.prototype,"handleOptionsChange",1),us([to("disabled")],gs.prototype,"handleDisabledChange",1),gs=us([fe("gl-popover")],gs);var ms=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,bs=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?fs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&ms(t,o,n),n};let vs=class extends lit_element_r{constructor(){super(...arguments),this.max=3,this.avatars=[]}render(){return re`<gl-avatar-group>${this.renderList()}</gl-avatar-group>`}renderList(){const e=this.avatars.slice(0,this.max),t=this.avatars.slice(this.max);return re`
			${e.map((e=>re`<gl-avatar .src=${e.src} .name=${e.name} .href=${e.href}></gl-avatar>`))}
			${$e(t.length>0,(()=>re`<gl-popover>
						<gl-avatar slot="anchor" class="overflow">+${t.length}</gl-avatar>
						<div slot="content" class="overflow-list">
							${t.map((e=>re`<gl-avatar
										.src=${e.src}
										.name=${e.name}
										.href=${e.href}
									></gl-avatar>`))}
						</div>
					</gl-popover>`))}
		`}};bs([ye({type:Number})],vs.prototype,"max",2),bs([ye({type:Array})],vs.prototype,"avatars",2),vs=bs([fe("gl-avatar-list")],vs);let ys=class extends lit_element_r{render(){return re`<slot class="avatar-group" part="base"></slot>`}};ys.styles=[p`
			.avatar-group {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}

			.avatar-group::slotted(*:not(:first-child)) {
				margin-left: calc(var(--gl-avatar-size, 1.6rem) * -0.2);
			}

			.avatar-group:focus-within::slotted(*),
			.avatar-group:hover::slotted(*) {
				opacity: 0.5;
			}

			.avatar-group:focus-within::slotted(*:focus),
			.avatar-group:hover::slotted(*:hover) {
				opacity: 1;
				z-index: var(--gl-avatar-selected-zindex, 1) !important;
			}
		`],ys=bs([fe("gl-avatar-group")],ys);const ws=p`
	.card {
		display: block;
		flex-direction: column;
		gap: 0.8rem;
		padding: 0.8rem 1.2rem;
		border-radius: 0.4rem;
		border-inline-start: 0.3rem solid transparent;
		background-color: var(--gl-card-background, color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 5%));
		margin-block-end: 0.6rem;
		position: relative;
	}

	.card.is-active {
		border-inline-start-color: var(--gl-card-active-border, var(--vscode-gitDecoration-addedResourceForeground));
	}

	.card:focus-within,
	.card:hover {
		background-color: var(
			--gl-card-hover-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 8%)
		);
	}

	.card__actions {
		position: absolute;
		top: 0.4rem;
		right: 0.4rem;
		display: block;
	}

	.card__content {
		display: block;
	}

	.card__content::slotted(:first-child) {
		margin-block-start: 0;
	}

	.card__content::slotted(:last-child) {
		margin-block-end: 0;
	}
`;var _s=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,$s=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ks(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&_s(t,o,n),n};let xs=class extends lit_element_r{constructor(){super(...arguments),this.active=!1}render(){return null!=this.href?re`<a part="base" class="card${this.active?" is-active":""}" href=${this.href}
				>${this.renderContent()}</a
			>`:re`<div part="base" class="card${this.active?" is-active":""}">${this.renderContent()}</div>`}renderContent(){return re`
			<slot class="card__content"></slot>
			<slot name="actions" class="card__actions"></slot>
		`}focus(e){null!=this.href?this.shadowRoot?.querySelector("a")?.focus(e):super.focus(e)}};xs.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},xs.styles=[ws],$s([ye({type:Boolean,reflect:!0})],xs.prototype,"active",2),$s([ye()],xs.prototype,"href",2),xs=$s([fe("gl-card")],xs);var Cs=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Ps=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Ss(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Cs(t,o,n),n};const Os=Object.freeze({added:["+","add"],modified:["~","edit"],removed:["-","trash"]});let Rs=class extends lit_element_r{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return Object.entries(Os).map((([e,t])=>this.renderStat(e,t)))}renderStat(e,t){const o=this[e];return null==o?ae:re`<span class="stat ${e}" title="${o} ${e}" aria-label="${o} ${e}"
			><span class="label">${this.renderSymbol(t)}${o}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?re`<code-icon class="icon" icon="${t}"></code-icon>`:re`<span>${e}</span>`}};Rs.styles=p`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
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
		}

		.icon {
			--code-icon-size: 0.94017em;
			margin-inline-end: 0.2rem;
		}
	`,Ps([ye({type:Number})],Rs.prototype,"added",2),Ps([ye({type:Number})],Rs.prototype,"modified",2),Ps([ye({type:Number})],Rs.prototype,"removed",2),Ps([ye()],Rs.prototype,"symbol",2),Rs=Ps([fe("commit-stats")],Rs);var As=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,Ts=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Es(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&As(t,o,n),n};let Ds=class extends lit_element_r{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date}render(){const e=fi(this.date,this.format??"MMMM Do, YYYY h:mma");return re`<gl-tooltip content="${e}"
			><time datetime="${this.date.toISOString()}"
				>${"relative"===this.dateStyle?function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,i,r,n]of di){const a=Math.abs(o);if(a>=i||1e3===i)return t?(null==hi&&(null!=mi?hi=mi.resolvedOptions().locale:null!=gi?hi=gi.resolvedOptions().locale:(mi=new Intl.RelativeTimeFormat(ui,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),hi=mi.resolvedOptions().locale)),"en"===hi||hi?.startsWith("en-")?`${Math.round(a/r)}${n}`:(null==mi&&(mi=new Intl.RelativeTimeFormat(ui,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),mi.format(Math.round(o/r),e))):(null==gi&&(gi=new Intl.RelativeTimeFormat(ui,{localeMatcher:"best fit",numeric:"auto",style:"long"})),gi.format(Math.round(o/r),e))}return""}(this.date):e}</time
			></gl-tooltip
		>`}};Ts([ye()],Ds.prototype,"format",2),Ts([ye({attribute:"date-style"})],Ds.prototype,"dateStyle",2),Ts([ye({converter:{toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))},reflect:!0})],Ds.prototype,"date",2),Ds=Ts([fe("formatted-date")],Ds);const Is=p`
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
`;var Ls=Object.defineProperty,Fs=Object.getOwnPropertyDescriptor,Ws=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Fs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ls(t,o,n),n};let Bs=class extends lit_element_r{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.outlined=!1,this.colorized=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?ae:re`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${$e(this.behind>0,(()=>re`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`))}${$e(this.ahead>0,(()=>re`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`))}${$e(this.working>0,(()=>re`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`))}</span
		>`}};Bs.styles=[Is,p`
			.pill {
				gap: 0.1rem;
				text-transform: none;
			}

			.state {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
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
		`],Ws([ye({type:Number})],Bs.prototype,"ahead",2),Ws([ye({type:Number})],Bs.prototype,"behind",2),Ws([ye({type:Number})],Bs.prototype,"working",2),Ws([ye({type:Boolean})],Bs.prototype,"outlined",2),Ws([ye({type:Boolean})],Bs.prototype,"colorized",2),Bs=Ws([fe("gl-tracking-pill")],Bs);const zs=p`
	.pr-icon--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr-icon--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr-icon--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var Ns=Object.defineProperty,js=Object.getOwnPropertyDescriptor,Ms=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?js(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ns(t,o,n),n};let Us=class extends lit_element_r{get icon(){let e="git-pull-request";if(this.state)switch(this.state){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed"}return e}get classes(){return this.state?`pr-icon pr-icon--${this.state}`:"pr-icon"}get label(){return this.state?`Pull request ${this.prId?`#${this.prId}`:""} is ${this.state}`:"Pull request"}render(){return this.state?re`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${qn(this.state)}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:re`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${qn(this.state)}
			></code-icon>`}};Us.styles=[zs],Ms([ye()],Us.prototype,"state",2),Ms([ye({attribute:"pr-id"})],Us.prototype,"prId",2),Us=Ms([fe("pr-icon")],Us);var Gs=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,qs=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Vs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Gs(t,o,n),n};let Hs=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.disabled=!1}render(){return re`
			<gl-tooltip hoist content="${this.label??ae}">
				<a
					role="${this.href?ae:"button"}"
					type="${this.href?ae:"button"}"
					aria-label="${this.label??ae}"
					?disabled=${this.disabled}
					href=${this.href??ae}
				>
					<code-icon icon="${this.icon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};Hs.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Hs.styles=p`
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
			${Vo}
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
	`,qs([ye()],Hs.prototype,"href",2),qs([ye()],Hs.prototype,"label",2),qs([ye()],Hs.prototype,"icon",2),qs([ye({type:Boolean})],Hs.prototype,"disabled",2),qs([ke("a")],Hs.prototype,"defaultFocusEl",2),Hs=qs([fe("action-item")],Hs);var Ks=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,Js=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Qs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ks(t,o,n),n};let Ys=class extends lit_element_r{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return re`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,i=this.actionNodes.map(((e,i)=>(e.setAttribute("aria-posinset",`${i+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===i?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{i?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10);let i=null;if("ArrowLeft"===e.key){const e=1===o?this.actionNodes.length-1:o-2;i=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=o===this.actionNodes.length?0:o;i=this.actionNodes[e]}null!=i&&i!==t&&(t.setAttribute("tabindex","-1"),i.setAttribute("tabindex","0"),i.focus())}};Ys.styles=p`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,Js([function(e){return(t,o)=>{const{slot:i,selector:r}=e??{},n="slot"+(i?`[name=${i}]`:":not([name])");return _e(t,o,{get(){const t=this.renderRoot?.querySelector(n),o=t?.assignedElements(e)??[];return void 0===r?o:o.filter((e=>e.matches(r)))}})}}({flatten:!0})],Ys.prototype,"actionNodes",2),Ys=Js([fe("action-nav")],Ys);var Zs=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,ea=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Xs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Zs(t,o,n),n};let ta=class extends lit_element_r{constructor(){super(...arguments),this.loading=!1,this.headingLevel="3"}render(){return re`
			<div class="section">
				<header class="section__header">
					<div class="section__heading" role="heading" aria-level=${this.headingLevel}>
						<slot name="heading" class="section__headline"></slot>
					</div>
					<slot name="heading-actions" class="section__actions"></slot>
					<progress-indicator class="section__loader" ?active="${this.loading}"></progress-indicator>
				</header>
				<slot></slot>
			</div>
		`}};ta.styles=[p`
			.section {
				margin-bottom: 1.2rem;
			}
			.section__header {
				position: relative;
				display: flex;
				justify-content: space-between;
				gap: 8px;
				margin-block: 0 0.8rem;
			}
			.section__heading {
				flex: 1;
				font-size: 1.3rem;
			}
			.section__headline {
				font-weight: normal;
				text-transform: uppercase;
			}

			.section__actions {
				margin-inline-start: auto;
			}

			.section__loader {
				position: absolute;
				left: 0;
				bottom: 0;
			}
		`],ea([ye({type:Boolean})],ta.prototype,"loading",2),ea([ye({attribute:"heading-level"})],ta.prototype,"headingLevel",2),ta=ea([fe("gl-section")],ta);let oa=class extends lit_element_r{constructor(){super(...arguments),this.isFetching=!1}renderSectionLabel(){return this.isFetching||0===this.branches.length?this.label:`${this.label} (${this.branches.length})`}render(){return re`
			<gl-section ?loading=${this.isFetching}>
				<span slot="heading">${this.renderSectionLabel()}</span>
				<span slot="heading-actions"><slot name="heading-actions"></slot></span>
				${$e(this.branches.length>0,(()=>this.branches.map((e=>re`<gl-branch-card .repo=${this.repo} .branch=${e}></gl-branch-card>`))),(()=>re`<p>No ${this.label} branches</p>`))}
			</gl-section>
		`}};ea([ye({type:String})],oa.prototype,"label",2),ea([ye()],oa.prototype,"repo",2),ea([ye({type:Array})],oa.prototype,"branches",2),ea([ye({type:Boolean})],oa.prototype,"isFetching",2),oa=ea([fe("gl-branch-section")],oa);p`
	.heading-loader {
		flex: 1;
	}
`;const ia=p`
	.branch-item {
		position: relative;
	}

	.branch-item__container {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}
	.branch-item__container > * {
		margin-block: 0;
	}

	.branch-item__section {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.branch-item__section > * {
		margin-block: 0;
	}

	.branch-item__section--details {
		font-size: 0.9em;
		color: var(--vscode-descriptionForeground);
	}

	.branch-item__icon {
		color: var(--vscode-descriptionForeground);
	}

	.branch-item__name {
		flex-grow: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
	}

	.branch-item__identifier {
		color: var(--vscode-descriptionForeground);
		text-decoration: none;
	}

	.branch-item__identifier:hover {
		text-decoration: underline;
	}

	.branch-item__grouping {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		max-width: 100%;
		margin-block: 0;
	}

	.branch-item__grouping--secondary {
		gap: 0.3rem;
		font-size: 0.9em;
		color: var(--vscode-descriptionForeground);
	}
	.branch-item__grouping--secondary .branch-item__name {
		font-weight: normal;
	}

	.branch-item__changes {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.branch-item__actions {
		position: absolute;
		right: 0.4rem;
		bottom: 0.4rem;
		padding: 0.2rem 0.4rem;
		background-color: var(--gl-card-hover-background);
	}

	.branch-item:not(:focus-within):not(:hover) .branch-item__actions {
		${Go}
	}

	.pill {
		--gl-pill-border: color-mix(in srgb, transparent 80%, var(--color-foreground));
	}
`;let ra=class extends lit_element_r{get branchRefs(){return{repoPath:this.repo,branchId:this.branch.id}}render(){const{name:e,pr:t,opened:o,timestamp:i}=this.branch;return re`
			<gl-card class="branch-item" .active=${o}>
				<div class="branch-item__container">
					<div class="branch-item__section">
						<p class="branch-item__grouping">
							<span class="branch-item__icon">${this.renderIcon(this.branch)}</span>
							${$e(t,(e=>re`<span class="branch-item__name">${e.title} </span
										><a href=${e.url} class="branch-item__identifier">#${e.id}</a>`),(()=>re`<span class="branch-item__name">${e}</span>`))}
						</p>
						${this.renderPrBranch(this.branch)}
					</div>
					<div class="branch-item__section branch-item__section--details">
						${this.renderChanges(this.branch)}
						${$e(i,(()=>re`<p>
									<formatted-date .date=${new Date(i)} class="branch-item__date"></formatted-date>
								</p>`))}
					</div>
				</div>
				${this.renderActions()}
			</gl-card>
		`}renderPrBranch(e){return e.pr?re`
			<p class="branch-item__grouping branch-item__grouping--secondary">
				<span class="branch-item__icon">${this.renderIcon(e,!0)}</span
				><span class="branch-item__name">${e.name}</span>
			</p>
		`:ae}renderChanges(e){const{state:t,workingTreeState:o}=e,i=this.renderWip(o),r=this.renderTracking(t),n=this.renderAvatars(e);return i||r||n?re`<p class="branch-item__changes">${i}${r}${n}</p>`:ae}renderIcon(e,t){return e.pr&&!t?re`<pr-icon state=${e.pr.state} pr-id=${e.pr.id}></pr-icon>`:e.worktree?re`<code-icon icon="gl-worktrees-view"></code-icon>`:re`<code-icon icon="git-branch"></code-icon>`}renderAvatars(e){const t=[];if(e.owner&&t.push(e.owner),e.contributors&&t.push(...e.contributors),0!==t.length)return re`<gl-avatar-list
			.avatars=${t.map((e=>({name:e.name,src:e.avatarUrl})))}
		></gl-avatar-list>`}renderWip(e){if(e?.added||e?.changed||e?.deleted)return re`<commit-stats
				added=${e.added}
				modified=${e.changed}
				removed=${e.deleted}
				symbol="icons"
			></commit-stats>`}renderTracking(e){if(e?.ahead||e?.behind)return re`<gl-tracking-pill
				class="pill"
				colorized
				outlined
				ahead=${e.ahead}
				behind=${e.behind}
			></gl-tracking-pill>`}renderActions(){const e=[];return this.branch.pr?(e.push(re`<action-item
					label="Open Pull Request Changes"
					icon="request-changes"
					href=${this.createCommandLink("gitlens.home.openPullRequestChanges")}
				></action-item>`),e.push(re`<action-item
					label="Open Pull Request on Remote"
					icon="globe"
					href=${this.createCommandLink("gitlens.home.openPullRequestOnRemote")}
				></action-item>`)):!1===this.branch.upstream?.missing&&e.push(re`<action-item
					label="Create Pull Request..."
					icon="git-pull-request-create"
					href=${this.createCommandLink("gitlens.home.createPullRequest")}
				></action-item>`),this.branch.worktree?e.push(re`<action-item
					label="Open Worktree"
					icon="browser"
					href=${this.createCommandLink("gitlens.home.openWorktree")}
				></action-item>`):e.push(re`<action-item
					label="Switch to Branch..."
					icon="gl-switch"
					href=${this.createCommandLink("gitlens.home.switchToBranch")}
				></action-item>`),e.push(re`<action-item
				label="Fetch"
				icon="gl-repo-fetch"
				href=${this.createCommandLink("gitlens.home.fetch")}
			></action-item>`),e.push(re`<action-item
				label="Open in Commit Graph"
				icon="gl-graph"
				href=${na("gitlens.home.openInGraph",{...this.branchRefs,type:"branch"})}
			></action-item>`),e.length?re`<action-nav class="branch-item__actions">${e}</action-nav>`:ae}createCommandLink(e){return na(e,this.branchRefs)}};function na(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}ra.styles=[os,ia],ea([ye()],ra.prototype,"repo",2),ea([ye({type:Object})],ra.prototype,"branch",2),ra=ea([fe("gl-branch-card")],ra);var sa=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,la=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?aa(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&sa(t,o,n),n};let ca=class extends lit_element_r{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return re`<div class="skeleton" style=${e}></div>`}};ca.styles=p`
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
	`,la([ye({type:Number})],ca.prototype,"lines",2),ca=la([fe("skeleton-loader")],ca);var da=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,pa=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ha(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&da(t,o,n),n};let ua=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.role="option"}updateInteractiveState(){this.tabIndex=this.disabled?-1:"option"===this.role?0:-1}updated(e){(e.has("disabled")||e.has("role"))&&this.updateInteractiveState()}render(){return this.href?re`<a href=${this.href}><slot></slot></a>`:re`<slot></slot>`}};ua.styles=[Ho,p`
			:host {
				display: block;
				font-family: inherit;
				border: none;
				padding: 0 0.6rem;
				cursor: pointer;
				color: var(--vscode-menu-foreground);
				background-color: var(--vscode-menu-background);
				text-align: left;
				height: auto;
				line-height: 2.2rem;
			}

			:host([role='option']:hover) {
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-selectionBackground);
			}

			:host([disabled]) {
				pointer-events: none;
				cursor: default;
				opacity: 0.5;
			}

			:host([aria-selected='true']) {
				opacity: 1;
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-background);
			}

			:host([href]) {
				padding-inline: 0;
			}

			a {
				display: block;
				color: inherit;
				text-decoration: none;
				padding: 0 0.6rem;
			}
		`],pa([ye({type:Boolean,reflect:!0})],ua.prototype,"disabled",2),pa([ye({reflect:!0})],ua.prototype,"href",2),pa([ye({reflect:!0})],ua.prototype,"role",2),ua=pa([fe("menu-item")],ua);var ga=Object.defineProperty,ma=Object.getOwnPropertyDescriptor,fa=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ma(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&ga(t,o,n),n};let ba=class extends(At(lit_element_r)){connectedCallback(){super.connectedCallback(),this._homeState.repositories.openCount>0&&this._overviewState.run()}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?ae:this._overviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>re`<span>Error</span>`})}renderLoader(){return re`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._overviewState.state?this.renderLoader():this.renderComplete(this._overviewState.state,!0)}renderComplete(e,t=!1){const o=e?.repository,i=o?.branches?.active;return i?re`
			<gl-section ?loading=${t}>
				<span slot="heading">${this.renderRepositoryIcon(o.provider)} ${o.name}</span>
				<span slot="heading-actions"
					><gl-button
						aria-busy="${qn(t)}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Open in Commit Graph"
						href=${na("gitlens.home.openInGraph",{type:"repo",repoPath:this._overviewState.state.repository.path})}
						><code-icon icon="gl-graph"></code-icon
					></gl-button>
					<gl-button
						aria-busy="${qn(t)}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Fetch"
						href=${na("gitlens.home.fetch",void 0)}
						><code-icon icon="gl-repo-fetch"></code-icon
					></gl-button>
					${$e(this._homeState.repositories.openCount>1,(()=>re`<gl-button
								aria-busy="${qn(t)}"
								?disabled=${t}
								class="section-heading-action"
								appearance="toolbar"
								tooltip="Change Repository"
								@click=${e=>this.onChange(e)}
								><code-icon icon="chevron-down"></code-icon
							></gl-button>`))}</span
				>
				${i.map((e=>this.renderRepoBranchCard(e,o.path,t)))}
			</gl-section>
		`:re`<span>None</span>`}renderRepositoryIcon(e){if(!e)return re`<code-icon icon="repo" class="heading-icon"></code-icon>`;let t="repo";return null!=e.icon&&(t="cloud"===e.icon?"cloud":`gl-provider-${e.icon}`),re`<gl-tooltip>
			${$e(null!=e.url,(()=>re`<a href=${e.url} class="section-heading-provider"
						><code-icon icon=${t} class="heading-icon"></code-icon
					></a>`),(()=>re`<code-icon icon=${t} class="heading-icon"></code-icon>`))}
			<span slot="content" class="tooltip">Open repository on ${e.name}</span>
		</gl-tooltip>`}renderRepoBranchCard(e,t,o){const{name:i,pr:r,state:n,workingTreeState:a,upstream:l}=e;return re`
			<gl-card class="branch-item" active>
				<div class="branch-item__container">
					<div class="branch-item__section">
						<p class="branch-item__grouping">
							<span class="branch-item__icon">
								<code-icon icon=${e.worktree?"gl-worktrees-view":"git-branch"}></code-icon>
							</span>
							<span class="branch-item__name">${i}</span>
						</p>
					</div>
					${$e(n,(()=>this.renderBranchStateActions(n,l,o)))}
					${$e(r,(e=>re`<div class="branch-item__section">
							<p class="branch-item__grouping">
								<span class="branch-item__icon">
									<pr-icon state=${e.state} pr-id=${e.id}></pr-icon>
								</span>
								<span class="branch-item__name">${e.title}</span>
								<a href=${e.url} class="branch-item__identifier">#${e.id}</a>
							</p>
						</div>`))}
					${$e(a,(()=>this.renderStatus(a,n)))}
				</div>
				${this.renderActions(e,t)}
			</gl-card>
		`}renderActions(e,t){const o={repoPath:t,branchId:e.id},i=[];return e.pr?(i.push(re`<action-item
					label="Open Pull Request Changes"
					icon="request-changes"
					href=${na("gitlens.home.openPullRequestChanges",o)}
				></action-item>`),i.push(re`<action-item
					label="Open Pull Request on Remote"
					icon="globe"
					href=${na("gitlens.home.openPullRequestOnRemote",o)}
				></action-item>`)):!1===e.upstream?.missing&&i.push(re`<action-item
					label="Create Pull Request..."
					icon="git-pull-request-create"
					href=${na("gitlens.home.createPullRequest",o)}
				></action-item>`),i.length?re`<action-nav class="branch-item__actions">${i}</action-nav>`:ae}renderBranchStateActions(e,t,o){if(!1!==t?.missing){const e=t?.name?`Publish branch to ${t.name}`:"Publish branch";return re`<div>
				<button-container>
					<gl-button
						aria-busy=${qn(o)}
						?disabled=${o}
						href=${ts("gitlens.views.home.publishBranch","gitlens.views.home","")}
						full
						appearance="secondary"
						tooltip="${e}"
						><code-icon icon="cloud-upload" slot="prefix"></code-icon> Publish Branch</gl-button
					></button-container
				>
			</div>`}if(e?.ahead||e?.behind){const i=e.ahead>0,r=e.behind>0;if(i&&r){const i=t?.name?`Pull from ${t.name}`:"Pull",r=t?.name?`Force Push to ${t.name}`:"Force Push";return re`<div>
					<button-container>
						<gl-button
							aria-busy=${qn(o)}
							?disabled=${o}
							href=${ts("gitlens.views.home.pull","gitlens.views.home","")}
							full
							appearance="secondary"
							tooltip=${i}
							><code-icon icon="gl-repo-pull" slot="prefix"></code-icon> Pull
							<gl-tracking-pill
								.ahead=${e.ahead}
								.behind=${e.behind}
								slot="suffix"
							></gl-tracking-pill
						></gl-button>
						<gl-button
							aria-busy=${qn(o)}
							?disabled=${o}
							href=${ts("gitlens.views.home.push","gitlens.views.home","",{force:!0})}
							appearance="secondary"
							density="compact"
							tooltip=${r}
							><code-icon icon="repo-force-push"></code-icon
						></gl-button>
					</button-container>
				</div>`}if(r){const i=t?.name?`Pull from ${t.name}`:"Pull";return re`<div>
					<button-container>
						<gl-button
							aria-busy=${qn(o)}
							?disabled=${o}
							href=${ts("gitlens.views.home.pull","gitlens.views.home","")}
							full
							appearance="secondary"
							tooltip=${i}
							><code-icon icon="gl-repo-pull" slot="prefix"></code-icon> Pull
							<gl-tracking-pill
								.ahead=${e.ahead}
								.behind=${e.behind}
								slot="suffix"
							></gl-tracking-pill></gl-button
					></button-container>
				</div>`}if(i){const i=t?.name?`Push to ${t.name}`:"Push";return re`<div>
					<button-container>
						<gl-button
							aria-busy=${qn(o)}
							?disabled=${o}
							href=${ts("gitlens.views.home.push","gitlens.views.home","")}
							full
							appearance="secondary"
							tooltip=${i}
							><code-icon icon="repo-push" slot="prefix"></code-icon> Push
							<gl-tracking-pill
								.ahead=${e.ahead}
								.behind=${e.behind}
								slot="suffix"
							></gl-tracking-pill>
						</gl-button>
					</button-container>
				</div>`}}return ae}renderStatus(e,t){const o=[];return(e?.added||e?.changed||e?.deleted)&&o.push(re`<commit-stats
					added=${e.added}
					modified=${e.changed}
					removed=${e.deleted}
					symbol="icons"
				></commit-stats>`),o.length?re`<p class="branch-item__section branch-item__section--details">${o}</p>`:ae}onChange(e){this._overviewState.changeRepository()}};ba.styles=[os,ia,p`
			[hidden] {
				display: none;
			}
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
			.section-heading-action {
				--button-padding: 0.1rem 0.2rem 0;
				margin-block: -1rem;
			}
			.section-heading-provider {
				color: inherit;
			}
			.tooltip {
				text-transform: none;
			}
		`],fa([n({context:ti,subscribe:!0}),we()],ba.prototype,"_homeState",2),fa([n({context:Xt})],ba.prototype,"_overviewState",2),fa([n({context:$o})],ba.prototype,"_ipc",2),ba=fa([fe("gl-active-work")],ba);var va=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.PastePatchFromClipboard="gitlens.pastePatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GenerateCommitMessageScm="gitlens.scm.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusConnectCloudIntegrations="gitlens.plus.cloudIntegrations.connect",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusContinueFeaturePreview="gitlens.plus.continueFeaturePreview",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.PlusSimulateSubscription="gitlens.plus.simulateSubscription",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLaunchpadView="gitlens.showLaunchpadView",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StartWork="gitlens.startWork",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenAllChangedFileDiffs="gitlens.views.openChangedFileDiffs",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.WalkthroughConnectIntegrations="gitlens.walkthrough.connectIntegrations",e.WalkthroughGitLensInspect="gitlens.walkthrough.gitlensInspect",e.WalkthroughOpenAcceleratePrReviews="gitlens.walkthrough.openAcceleratePrReviews",e.WalkthroughOpenCommunityVsPro="gitlens.walkthrough.openCommunityVsPro",e.WalkthroughOpenHelpCenter="gitlens.walkthrough.openHelpCenter",e.WalkthroughOpenInteractiveCodeHistory="gitlens.walkthrough.openInteractiveCodeHistory",e.WalkthroughOpenStartIntegrations="gitlens.walkthrough.openStartIntegrations",e.WalkthroughOpenStreamlineCollaboration="gitlens.walkthrough.openStreamlineCollaboration",e.WalkthroughOpenWalkthrough="gitlens.walkthrough.openWalkthrough",e.WalkthroughPlusSignUp="gitlens.walkthrough.plus.signUp",e.WalkthroughPlusUpgrade="gitlens.walkthrough.plus.upgrade",e.WalkthroughPlusReactivate="gitlens.walkthrough.plus.reactivate",e.WalkthroughShowAutolinks="gitlens.walkthrough.showAutolinks",e.WalkthroughShowDraftsView="gitlens.walkthrough.showDraftsView",e.WalkthroughShowGraph="gitlens.walkthrough.showGraph",e.WalkthroughShowLaunchpad="gitlens.walkthrough.showLaunchpad",e.WalkthroughWorktreeCreate="gitlens.walkthrough.worktree.create",e.WalkthoughOpenDevExPlatform="gitlens.walkthrough.openDevExPlatform",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(va||{});function ya(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}var wa=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,ka=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?_a(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&wa(t,o,n),n};let $a=class extends(At(lit_element_r)){constructor(){super(...arguments),this._summaryState=new AsyncComputedState((async e=>await this._ipc.sendRequest(Re,{})))}get startWorkCommand(){return ya(va.StartWork,{command:"startWork"})}connectedCallback(){super.connectedCallback(),this._summaryState.run()}disconnectedCallback(){super.disconnectedCallback(),this._disposable?.dispose()}render(){return re`
			<gl-section>
				<span slot="heading">GitLens Launchpad</span>
				<div class="summary">${this.renderSummaryResult()}</div>
				<button-container>
					<gl-button full class="start-work" href=${this.startWorkCommand}
						><code-icon icon="custom-start-work" slot="prefix"></code-icon> Start Work</gl-button
					>
				</button-container>
			</gl-section>
		`}renderSummaryResult(){return!1===this._homeState.hasAnyIntegrationConnected?re`<ul class="menu">
				<li>
					<a
						class="launchpad-action"
						href="command:gitlens.plus.cloudIntegrations.connect?%7B%22source%22%3A%22home%22%7D"
					>
						<code-icon class="launchpad-action__icon" icon="plug"></code-icon>
						<span>Connect to see PRs and Issue here</span>
					</a>
				</li>
			</ul>`:this._summaryState.render({pending:()=>this.renderPending(),complete:e=>this.renderSummary(e),error:()=>re`<ul class="menu">
					<li>Error loading summary</li>
				</ul>`})}renderPending(){return null==this._summaryState.state?re`
				<div class="loader">
					<skeleton-loader lines="1"></skeleton-loader>
					<skeleton-loader lines="1"></skeleton-loader>
				</div>
			`:this.renderSummary(this._summaryState.state)}renderSummary(e){if(null==e)return ae;if(0===e.total)return re`<ul class="menu">
				<li>You are all caught up!</li>
			</ul>`;if(!e.hasGroupedItems)return re`<ul class="menu">
				<li>No pull requests need your attention</li>
				<li>(${e.total} other pull requests)</li>
			</ul>`;const t=[];for(const o of e.groups){let i;switch(o){case"mergeable":{if(i=e.mergeable?.total??0,0===i)continue;const o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"mergeable"}}))}`;t.push(re`<li>
							<a href=${o} class="launchpad-action launchpad-action--mergable">
								<code-icon class="launchpad-action__icon" icon="rocket"></code-icon>
								<span>${mo("pull request",i)} can be merged</span>
							</a>
						</li>`);break}case"blocked":{if(i=e.blocked?.total??0,0===i)continue;const o=[];e.blocked.unassignedReviewers&&o.push({count:e.blocked.unassignedReviewers,message:(e.blocked.unassignedReviewers>1?"need":"needs")+" reviewers"}),e.blocked.failedChecks&&o.push({count:e.blocked.failedChecks,message:(e.blocked.failedChecks>1?"have":"has")+" failed CI checks"}),e.blocked.conflicts&&o.push({count:e.blocked.conflicts,message:(e.blocked.conflicts>1?"have":"has")+" conflicts"});const r=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"blocked"}}))}`;1===o.length?t.push(re`<li>
								<a href=${r} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span>${mo("pull request",i)} ${o[0].message}</span>
								</a>
							</li>`):t.push(re`<li>
								<a href=${r} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span
										>${mo("pull request",i)} ${i>1?"are":"is"} blocked
										(${o.map((e=>`${e.count} ${e.message}`)).join(", ")})</span
									>
								</a>
							</li>`);break}case"follow-up":{if(i=e.followUp?.total??0,0===i)continue;const o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"follow-up"}}))}`;t.push(re`<li>
							<a href=${o} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="report"></code-icon>
								<span
									>${mo("pull request",i)} ${i>1?"require":"requires"}
									follow-up</span
								>
							</a>
						</li>`);break}case"needs-review":{if(i=e.needsReview?.total??0,0===i)continue;const o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"needs-review"}}))}`;t.push(re`<li>
							<a href=${o} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="comment-unresolved"></code-icon>
								<span
									>${mo("pull request",i)} ${i>1?"need":"needs"} your
									review</span
								>
							</a>
						</li>`);break}}}return re`<menu class="menu">${t}</menu>`}};$a.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},$a.styles=[os,p`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
			.summary {
				margin-bottom: 1rem;
			}

			.menu {
				list-style: none;
				padding-inline-start: 0;
				margin-block-start: 0;
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
			}

			.launchpad-action {
				display: flex;
				align-items: center;
				gap: 0.6rem;
				color: inherit;
				text-decoration: none;
			}
			.launchpad-action:hover {
				text-decoration: none;
			}

			.launchpad-action:hover span {
				text-decoration: underline;
			}

			.launchpad-action__icon {
				color: var(--gl-launchpad-action-color, inherit);
			}

			.launchpad-action:hover .launchpad-action__icon {
				color: var(--gl-launchpad-action-hover-color, inherit);
			}

			.launchpad-action--mergable {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorMergeableColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorMergeableHoverColor);
			}

			.launchpad-action--blocked {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorBlockedColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorBlockedHoverColor);
			}

			.launchpad-action--attention {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorAttentionColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorAttentionHoverColor);
			}

			.loader {
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
			}
		`],ka([n({context:ti,subscribe:!0}),we()],$a.prototype,"_homeState",2),ka([n({context:$o})],$a.prototype,"_ipc",2),$a=ka([fe("gl-launchpad")],$a);const xa=(e,t,o)=>{const i=new Map;for(let r=t;r<=o;r++)i.set(e[r],r);return i},Ca=Dt(class extends directive_i{constructor(e){if(super(e),e.type!==Tt)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let i;void 0===o?o=t:void 0!==t&&(i=t);const r=[],n=[];let a=0;for(const t of e)r[a]=i?i(t,a):a,n[a]=o(t,a),a++;return{values:n,keys:r}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,i]){const r=(e=>e._$AH)(e),{values:n,keys:a}=this.dt(t,o,i);if(!Array.isArray(r))return this.ut=a,n;const l=this.ut??=[],c=[];let d,h,p=0,u=r.length-1,g=0,m=n.length-1;for(;p<=u&&g<=m;)if(null===r[p])p++;else if(null===r[u])u--;else if(l[p]===a[g])c[g]=Wt(r[p],n[g]),p++,g++;else if(l[u]===a[m])c[m]=Wt(r[u],n[m]),u--,m--;else if(l[p]===a[m])c[m]=Wt(r[p],n[m]),Ft(e,c[m+1],r[p]),p++,m--;else if(l[u]===a[g])c[g]=Wt(r[u],n[g]),Ft(e,r[p],r[u]),u--,g++;else if(void 0===d&&(d=xa(a,g,m),h=xa(l,p,u)),d.has(l[p]))if(d.has(l[u])){const t=h.get(a[g]),o=void 0!==t?r[t]:null;if(null===o){const t=Ft(e,r[p]);Wt(t,n[g]),c[g]=t}else c[g]=Wt(o,n[g]),Ft(e,r[p],o),r[t]=null;g++}else zt(r[u]),u--;else zt(r[p]),p++;for(;g<=m;){const t=Ft(e,c[m+1]);Wt(t,n[g]),c[g++]=t}for(;p<=u;){const e=r[p++];null!==e&&zt(e)}return this.ut=a,((e,t=Bt)=>{e._$AH=t})(e,c),se}}),Sa=p`
	:host {
		--checkbox-foreground: var(--vscode-checkbox-foreground);
		--checkbox-background: var(--vscode-checkbox-background);
		--checkbox-border: var(--vscode-checkbox-border);
		--checkbox-checked-foreground: var(--vscode-inputOption-activeForeground);
		--checkbox-checked-background: var(--vscode-inputOption-activeBackground);
		--checkbox-checked-border: var(--vscode-inputOption-activeBorder);
		--checkbox-active-background: var(--vscode-checkbox-selectBackground);
		--checkbox-active-border: var(--vscode-checkbox-selectBorder);
		--checkbox-hover-background: var(--vscode-inputOption-hoverBackground);
		--checkbox-radius: 3px;
		--checkbox-border-width: 1px;
		--checkbox-size: 1.6rem;
		--checkbox-spacing: 1rem;

		display: block;
		margin-block: 0.8rem;
	}

	label {
		display: flex;
		gap: var(--checkbox-spacing);
		align-items: center;
		user-select: none;
		white-space: nowrap;
		cursor: pointer;
		color: var(--checkbox-foreground);
	}

	:host([disabled]) label {
		cursor: default;
		opacity: 0.5;
	}

	.label-text {
		display: block;
		line-height: normal;
		margin-inline-end: var(--checkbox-spacing);
	}

	.input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
	.control {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		box-sizing: border-box;
		border-radius: var(--checkbox-radius);
		color: var(--checkbox-foreground);
		background: var(--checkbox-background);
		border: var(--checkbox-border-width, 1px) solid var(--vscode-checkbox-border);
	}

	.input:hover + .control {
		background-color: var(--checkbox-hover-background);
	}

	.input:focus-visible + .control,
	.input:focus + .control {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.input:active + .control {
		background-color: var(--checkbox-active-background);
		border-color: var(--checkbox-active-border);
	}

	:host([checked]) .control {
		color: var(--checkbox-checked-foreground);
		background-color: var(--checkbox-checked-background);
		border-color: var(--checkbox-checked-border);
	}

	code-icon {
		pointer-events: none;
	}
`;var Pa=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,Ra=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Oa(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Pa(t,o,n),n};let Aa=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;const t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return re` <code-icon icon="check"></code-icon> `}render(){return re`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};Aa.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},Aa.styles=[Sa],Ra([ye({type:Boolean,reflect:!0})],Aa.prototype,"disabled",2),Ra([ye({type:String})],Aa.prototype,"value",2),Ra([ye({type:Boolean})],Aa.prototype,"defaultChecked",1),Ra([ye({type:Boolean,reflect:!0})],Aa.prototype,"checked",2),Aa=Ra([fe("gl-checkbox")],Aa);var Ea=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,Da=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Ta(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ea(t,o,n),n};const Ia=p`
	.select {
		background: none;
		outline: none;
		border: none;
		text-decoration: none !important;
		font-weight: 500;
		color: var(--color-foreground--25);
	}
	.select option {
		color: var(--vscode-foreground);
		background-color: var(--vscode-dropdown-background);
	}
	.select:not(:disabled) {
		cursor: pointer;
		color: var(--color-foreground--50);
	}
	.select:not(:disabled):focus {
		outline: 1px solid var(--color-focus-border);
	}
	.select:not(:disabled):hover {
		color: var(--vscode-foreground);
		text-decoration: underline !important;
	}
`;class GlObjectSelect extends GlElement{constructor(){super(...arguments),this.disabled=!1}render(){if(this.options)return re`
			<select .disabled=${this.disabled} class="select" @change=${e=>this.onChange?.(e)}>
				${Ca(this.options,(e=>{const t=this.getValue(e),o=this.getLabel(e);return re`<option .value="${t}" ?selected=${this.value===t}>${o}</option>`}))}
			</select>
		`}}GlObjectSelect.styles=[Ia],Da([ye({type:Boolean})],GlObjectSelect.prototype,"disabled",2),Da([ye({type:String})],GlObjectSelect.prototype,"value",2),Da([ye({type:Array})],GlObjectSelect.prototype,"options",2);let La=class extends GlObjectSelect{getValue(e){return e.value}getLabel(e){return e.label}onChange(e){const t=new CustomEvent("gl-change",{detail:{threshold:e.target.value}});this.dispatchEvent(t)}};La=Da([fe("gl-branch-threshold-filter")],La);var Fa=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,Ba=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Wa(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Fa(t,o,n),n};let za=class extends(At(lit_element_r)){connectedCallback(){super.connectedCallback(),this._homeState.repositories.openCount>0&&this._overviewState.run()}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?ae:this._overviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>re`<span>Error</span>`})}renderLoader(){return re`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._overviewState.state?this.renderLoader():this.renderComplete(this._overviewState.state,!0)}onChangeRecentThresholdFilter(e){this._overviewState.filter.stale&&this._overviewState.filter.recent&&this._ipc.sendCommand(Fe,{stale:this._overviewState.filter.stale,recent:{...this._overviewState.filter.recent,threshold:e.detail.threshold}})}renderComplete(e,t=!1){if(null==e)return ae;const{repository:o}=e;return re`
			<gl-branch-section
				label="recent"
				.isFetching=${t}
				.repo=${o.path}
				.branches=${o.branches.recent}
			>
				<gl-branch-threshold-filter
					slot="heading-actions"
					@gl-change=${this.onChangeRecentThresholdFilter.bind(this)}
					.options=${[{value:"OneDay",label:"1 day"},{value:"OneWeek",label:"1 week"},{value:"OneMonth",label:"1 month"}]}
					.disabled=${t}
					.value=${this._overviewState.filter.recent?.threshold}
				></gl-branch-threshold-filter>
			</gl-branch-section>
			${$e(!0===this._overviewState.filter.stale?.show,(()=>re`
					<gl-branch-section
						label="stale"
						.repo=${o.path}
						.branches=${o.branches.stale}
					></gl-branch-section>
				`))}
		`}};za.styles=[os,p`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
		`],Ba([n({context:ti,subscribe:!0}),we()],za.prototype,"_homeState",2),Ba([n({context:Xt})],za.prototype,"_overviewState",2),Ba([n({context:$o})],za.prototype,"_ipc",2),za=Ba([fe("gl-overview")],za);var Na=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Ma=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ja(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Na(t,o,n),n};let Ua=class extends lit_element_r{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:wi(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return re`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===ri.VerificationRequired)return re`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(ki(this.subscription)||this.cloud&&null!=this.subscription.account)return re`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(t===ri.ProPreview||t===ri.ProTrial))return re`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t;return e}renderPopoverHeader(){const e=re`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===ri.Paid?re`<div class="popup-header">${e}</div>`:this.cloud?this.preview?re`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:re`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?re`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:re`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return ae;let e;switch(this.state){case ri.Paid:e=re`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${Ga(va.ShowAccountView,void 0)}"
							>${yi(this.subscription?.plan.actual.id??ii.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case ri.VerificationRequired:e=re`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Ga(va.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${Ga(va.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case ri.ProTrial:{const t=this.daysRemaining;e=re`<p>
						You have
						<strong>${t<1?"<1 day":mo("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case ri.ProTrialExpired:e=re`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(re`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case ri.ProTrialReactivationEligible:e=re`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${mo("day",oi)}!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Ga(va.PlusReactivateProTrial,this.source)}"
							tooltip="Reactivate your Pro trial for another ${mo("day",oi)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===ri.ProPreview){const t=this.daysRemaining;e=re`<p>
							You have
							<strong>${t<1?"<1 day":mo("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=re`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return re`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return re`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${Ga(va.PlusSignUp,this.source)}"
				>Start ${oi}-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${Ga(va.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){const t=si(this.state,"badge");return re`<div class="actions">
			${e??ae}
			<gl-button
				appearance="primary"
				density="tight"
				href="${Ga(va.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo(t)}
		</div>`}renderPromo(e){return re`<gl-promo .promo=${e}></gl-promo>`}};function Ga(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}Ua.styles=[Ho,Ko,p`
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
				${h(Vo)}
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
		`],Ma([ye({type:Boolean})],Ua.prototype,"cloud",2),Ma([ye({reflect:!0})],Ua.prototype,"placement",2),Ma([ye({type:Boolean})],Ua.prototype,"preview",2),Ma([ye({type:Object})],Ua.prototype,"source",2),Ma([ye({attribute:!1})],Ua.prototype,"subscription",2),Ua=Ma([fe("gl-feature-badge")],Ua);var Va=Object.defineProperty,qa=Object.getOwnPropertyDescriptor,Ha=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?qa(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Va(t,o,n),n};let Ka=class extends GlElement{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}get orgAllowsDrafts(){return this._state.orgSettings.drafts}get blockRepoFeatures(){if(!this._state)return!0;const{repositories:{openCount:e,hasUnsafe:t,trusted:o}}=this._state;return!o||0===e||t}onRepoFeatureClicked(e){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}render(){return re`
			${$e(this.blockRepoFeatures,(()=>re`
					<p>
						<code-icon icon="question"></code-icon> Features which need a repository are currently
						unavailable
					</p>
				`))}
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Setup</h2>
				<div class="nav-list__item">
					<a class="nav-list__link" href="command:gitlens.showSettingsPage" aria-label="Open GitLens Settings"
						><code-icon class="nav-list__icon" icon="gear"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open GitLens Settings">
							<span>Open GitLens Settings</span></gl-tooltip
						>
					</a>
				</div>
				${$e(!this._state.hasAnyIntegrationConnected,(()=>re`
						<div class="nav-list__item" data-integrations="none">
							<a
								class="nav-list__link"
								href="command:gitlens.plus.cloudIntegrations.connect?%7B%22source%22%3A%22home%22%7D"
								aria-label="Connect an Integration on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="gl-unplug"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Connect an Integration on GitKraken.dev"
									><span>Connect an Integration</span></gl-tooltip
								>
							</a>
						</div>
					`),(()=>re`
						<div class="nav-list__item" data-integrations="connected">
							<a
								class="nav-list__link"
								href="command:gitlens.plus.cloudIntegrations.manage?%7B%22source%22%3A%22home%22%7D"
								aria-label="Manage Integrations on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="settings"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Manage Integrations on GitKraken.dev"
									><span>Manage Integrations</span></gl-tooltip
								>
							</a>
						</div>
					`))}
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showSettingsPage!autolinks"
						aria-label="Open Autolinks Settings"
						><code-icon class="nav-list__icon" icon="link"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Autolinks Settings"
							><span>Configure Autolinks</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Popular</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showGraph"
						aria-label="Show Commit Graph"
						data-requires="repo"
						@click=${e=>this.onRepoFeatureClicked(e)}
					>
						<code-icon class="nav-list__icon" icon="gl-graph"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commit Graph">
							<span>Commit Graph</span>
						</gl-tooltip>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showLaunchpad?%7B%22source%22%3A%22home%22%7D"
						aria-label="Open Launchpad"
						><code-icon class="nav-list__icon" icon="rocket"></code-icon
						><gl-tooltip hoist class="nav-list__group" content="Open Launchpad"
							><span class="nav-list__label">Launchpad</span
							><span class="nav-list__desc">New!</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitsView"
						aria-label="Show Commits view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commits-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commits view">
							<span>Commits</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitDetailsView"
						aria-label="Show Inspect view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commit-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Inspect view">
							<span>Inspect</span></gl-tooltip
						>
					</a>
				</div>
				${$e(this.orgAllowsDrafts,(()=>re`
						<div class="nav-list__item">
							<a
								class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
								href="command:gitlens.openWalkthrough?%7B%22step%22%3A%22code-collab%22,%22source%22%3A%22home%22%7D"
								data-requires="repo"
								data-org-requires="drafts"
								aria-label="Open Code Suggest walkthrough"
								><code-icon class="nav-list__icon" icon="gl-code-suggestion"></code-icon
								><gl-tooltip hoist class="nav-list__group" content="Open Code Suggest walkthrough"
									><span class="nav-list__label">Code Suggest</span
									><span class="nav-list__desc">New!</span></gl-tooltip
								>
							</a>
							<gl-feature-badge
								.source=${this.badgeSource}
								.subscription=${this._state.subscription}
								placement="left"
								class="nav-list__access"
								preview
							></gl-feature-badge>
						</div>
						<div class="nav-list__item">
							<a
								class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
								href="command:gitlens.showDraftsView"
								data-requires="repo"
								data-org-requires="drafts"
								aria-label="Show Cloud Patches view"
								><code-icon class="nav-list__icon" icon="gl-cloud-patch"></code-icon
								><gl-tooltip hoist class="nav-list__group" content="Show Cloud Patches view"
									><span class="nav-list__label">Cloud Patches</span
									><span class="nav-list__desc">New!</span></gl-tooltip
								>
							</a>
							<gl-feature-badge
								placement="left"
								class="nav-list__access"
								cloud
								preview
							></gl-feature-badge>
						</div>
					`))}
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showFileHistoryView"
						aria-label="Show File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-history-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show File History view">
							<span>File History</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showTimelineView"
						aria-label="Show Visual File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="graph-scatter"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Visual File History view">
							<span>Visual File History</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showStashesView"
						aria-label="Show Stashes view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-stashes-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Stashes view">
							<span>Stashes</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showSearchAndCompareView"
						aria-label="Show Search &amp; Compare view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-search-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Search &amp; Compare view">
							<span>Search &amp; Compare</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorkspacesView"
						aria-label="Show Cloud Workspaces view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-workspaces-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Cloud Workspaces view">
							<span>Cloud Workspaces</span></gl-tooltip
						>
					</a>
					<gl-feature-badge placement="left" class="nav-list__access" cloud preview></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorktreesView"
						aria-label="Show Worktrees view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-worktrees-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Worktrees view">
							<span>Worktrees</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Activity Bar</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:workbench.view.extension.gitlens"
						aria-label="Show GitLens Side Bar"
						><code-icon class="nav-list__icon" icon="gl-gitlens"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Side Bar"
							><span>GitLens</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.extension.gitlensInspect"
						aria-label="Show GitLens Inspect Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-gitlens-inspect"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Inspect Side Bar"
							><span>GitLens Inspect</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.scm"
						aria-label="Show GitLens Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="source-control"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Source Control Side Bar"
							><span>Source Control</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h3 class="nav-list__title t-eyebrow sticky">Commands</h3>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"command:workbench.action.quickOpen?%22>GitLens%3A%22"}
						aria-label="Show GitLens Commands"
						><code-icon class="nav-list__icon" icon="symbol-event"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Commands"
							><span>Commands</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.gitCommands"
						aria-label="Open Git Command Palette"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="symbol-color"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Git Command Palette"
							><span>Git Command Palette</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Companion Tools</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken Browser Extension"
						><code-icon class="nav-list__icon" icon="extensions"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken Browser Extension"
							><span>GitKraken Browser Extension</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken CLI"
						><code-icon class="nav-list__icon" icon="terminal"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken CLI"
							><span>GitKraken CLI</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.dev?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try GitKraken.dev"
						><code-icon class="nav-list__icon" icon="globe"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try GitKraken.dev"
							><span>GitKraken.dev</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
		`}};Ka.styles=[Ko,Jo,Xo,p``],Ha([ye({type:Object})],Ka.prototype,"badgeSource",2),Ha([n({context:ti,subscribe:!0}),we()],Ka.prototype,"_state",2),Ka=Ha([fe("gl-feature-nav")],Ka);var Qa=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,Ya=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Ja(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Qa(t,o,n),n};let Za=class extends lit_element_r{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||this._state.hasAnyIntegrationConnected||this._state.integrationBannerCollapsed?ae:re`
			<gl-card>
				<p><strong>GitLens is better with integrations!</strong></p>
				<p>
					Connect hosting services like GitHub and issue trackers like Jira to track progress and take action
					on PRs and issues related to your branches.
				</p>
				<button-container>
					<gl-button
						appearance="secondary"
						href="command:gitlens.plus.cloudIntegrations.connect?%7B%22source%22%3A%22home%22%7D"
						full
						><code-icon icon="plug"></code-icon> Connect Integrations</gl-button
					>
				</button-container>
				<gl-button slot="actions" appearance="toolbar" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}onClose(){this.closed=!0,this._ipc.sendCommand(Ie,{section:"integrationBanner",collapsed:!0})}focus(){this._button.focus()}};Za.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Za.styles=[p`
			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}
		`],Ya([n({context:ti,subscribe:!0}),we()],Za.prototype,"_state",2),Ya([n({context:$o,subscribe:!0}),we()],Za.prototype,"_ipc",2),Ya([we()],Za.prototype,"closed",2),Ya([ke("gl-button")],Za.prototype,"_button",2),Za=Ya([fe("gl-integration-banner")],Za);var Xa=Object.defineProperty,el=Object.getOwnPropertyDescriptor,tl=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?el(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Xa(t,o,n),n};let ol=class extends lit_element_r{render(){if(this._state.showWalkthroughProgress)return re`
			<section class="walkthrough-progress" @click=${e=>this.onFallthroughClick(e)}>
				<header class="walkthrough-progress__title">
					<span
						>GitLens Walkthrough
						(${this._state.walkthroughProgress.doneCount}/${this._state.walkthroughProgress.allCount})</span
					>
					<nav>
						<gl-button
							id="open-walkthrough"
							href=${ya(va.OpenWalkthrough,{})}
							class="walkthrough-progress__button"
							appearance="toolbar"
							><code-icon icon="play"></code-icon
						></gl-button>
						<gl-button
							@click=${this.onDismissWalkthrough.bind(this)}
							class="walkthrough-progress__button"
							appearance="toolbar"
							><code-icon icon="x"></code-icon
						></gl-button>
					</nav>
				</header>
				<progress
					class="walkthrough-progress__bar"
					value=${this._state.walkthroughProgress.progress}
				></progress>
			</section>
		`}onDismissWalkthrough(){this._state.showWalkthroughProgress=!1,this.requestUpdate(),this._ipc.sendCommand(Le)}onFallthroughClick(e){e.target?.closest("gl-button")||this._openWalkthroughButton.click()}};ol.styles=[Jo,ei],tl([n({context:ti,subscribe:!0}),we()],ol.prototype,"_state",2),tl([n({context:$o,subscribe:!0}),we()],ol.prototype,"_ipc",2),tl([ke("#open-walkthrough")],ol.prototype,"_openWalkthroughButton",2),ol=tl([fe("gl-onboarding")],ol);var il=Object.defineProperty,rl=Object.getOwnPropertyDescriptor,nl=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?rl(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&il(t,o,n),n};let sl=class extends lit_element_r{constructor(){super(...arguments),this.closed=!1}get isNewInstall(){return this._state.newInstall}render(){return!0!==this._state.previewEnabled?re`
				<gl-tooltip placement="bottom">
					<button class="text-button text-button--end" @click=${()=>this.togglePreview()}>
						New Home View <code-icon icon="arrow-right"></code-icon>
					</button>
					<p slot="content">
						<strong>Switch to the new Home View!</strong><br />
						We've reimagined GitLens' Home to be a more helpful daily workflow tool. We're continuing to
						refine this experience and welcome your feedback.
					</p>
				</gl-tooltip>
			`:this.closed||!0===this._state.previewCollapsed?ae:re`
			<gl-card>
				<p><strong>Welcome to the ${this.isNewInstall?"GitLens ":"new "}Home View!</strong></p>
				<p>
					${this.isNewInstall?re`This is a hub for your current, future, and recent work. `:re`We've reimagined GitLens' Home to be a more helpful daily workflow tool. `}We're
					continuing to refine this experience and welcome your
					<a class="feedback" href="https://github.com/gitkraken/vscode-gitlens/discussions/3721"
						><code-icon icon="feedback"></code-icon> feedback</a
					>.
				</p>
				${$e(!this.isNewInstall,(()=>re`
						<button-container>
							<gl-button appearance="secondary" @click=${()=>this.togglePreview(!0)} full
								><code-icon icon="arrow-left"></code-icon> Revert to Old Home View</gl-button
							>
						</button-container>
					`))}
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss Welcome" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}togglePreview(e=!1){this._ipc.sendCommand(De),e&&(this.closed=!0)}onClose(){this.closed=!0,this._ipc.sendCommand(Ie,{section:"newHomePreview",collapsed:!0})}focus(){this._button?.focus()}};sl.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},sl.styles=[Ko,p`
			.text-button {
				padding: 0.4rem 0.8rem;
			}

			.text-button {
				appearance: none;
				background: none;
				border: none;
				color: inherit;
				text-align: end;
				cursor: pointer;
				width: 100%;
			}
			.text-button:hover,
			.text-button:focus-within {
				background-color: var(--gl-card-background);
			}
			.text-button:focus-visible {
				${Vo}
			}

			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}

			.feedback {
				white-space: nowrap;
			}
		`],nl([n({context:ti,subscribe:!0}),we()],sl.prototype,"_state",2),nl([n({context:$o,subscribe:!0}),we()],sl.prototype,"_ipc",2),nl([we()],sl.prototype,"closed",2),nl([ke("button")],sl.prototype,"_button",2),sl=nl([fe("gl-preview-banner")],sl);var al=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,cl=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ll(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&al(t,o,n),n};let dl=class extends lit_element_r{get hasPromos(){return null!=this.promo||void 0}get promo(){return si(this._state.subscription.state,"home")}render(){return this.promo?re`
			<gl-promo .promo=${this.promo} class="promo-banner promo-banner--eyebrow" id="promo" type="link"></gl-promo>
		`:ae}};dl.styles=[p`
			:host {
				display: block;
			}
			.promo-banner {
				text-align: center;
				margin-bottom: 1rem;
			}
			.promo-banner--eyebrow {
				color: var(--color-foreground--50);
				margin-bottom: 0.2rem;
			}
			.promo-banner:not([has-promo]) {
				display: none;
			}
		`],cl([n({context:ti,subscribe:!0}),we()],dl.prototype,"_state",2),cl([ye({type:Boolean,reflect:!0,attribute:"has-promo"})],dl.prototype,"hasPromos",1),dl=cl([fe("gl-promo-banner")],dl);var hl=Object.defineProperty,pl=Object.getOwnPropertyDescriptor,ul=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?pl(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&hl(t,o,n),n};let gl=class extends GlElement{get hasAlerts(){return!0===this.alertVisibility.header||void 0}get alertVisibility(){const e={header:!1,untrusted:!1,noRepo:!1,unsafeRepo:!1};return null==this._state||this._state.discovering||(this._state.repositories.trusted?0===this._state.repositories.openCount?(e.header=!0,e.noRepo=!0):this._state.repositories.hasUnsafe&&(e.header=!0,e.unsafeRepo=!0):(e.header=!0,e.untrusted=!0)),e}render(){if(null!=this._state&&this.alertVisibility.header)return re`
			${$e(this.alertVisibility.noRepo,(()=>re`
					<div id="no-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">No repository detected</h1>
						<div class="alert__description">
							<p>
								To use GitLens, open a folder containing a git repository or clone from a URL from the
								Explorer.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Open a Folder or Repository</gl-button
								>
							</p>
							<p class="mb-0">
								If you have opened a folder with a repository, please let us know by
								<a class="one-line" href="https://github.com/gitkraken/vscode-gitlens/issues/new/choose"
									>creating an Issue</a
								>.
							</p>
						</div>
					</div>
				`))}
			${$e(this.alertVisibility.unsafeRepo,(()=>re`
					<div id="unsafe-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">Unsafe repository</h1>
						<div class="alert__description">
							<p>
								Unable to open any repositories as Git blocked them as potentially unsafe, due to the
								folder(s) not being owned by the current user.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Manage in Source Control</gl-button
								>
							</p>
						</div>
					</div>
				`))}
			${$e(this.alertVisibility.untrusted,(()=>re`
					<div id="untrusted-alert" class="alert alert--info mb-0" aria-hidden="true">
						<h1 class="alert__title">Untrusted workspace</h1>
						<div class="alert__description">
							<p>Unable to open repositories in Restricted Mode.</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.trust.manage"
									>Manage Workspace Trust</gl-button
								>
							</p>
						</div>
					</div>
				`))}
		`}};gl.styles=[Ko,Jo,Zo,p`
			.alert {
				margin-bottom: 0;
			}

			.centered {
				text-align: center;
			}

			.one-line {
				white-space: nowrap;
			}

			gl-button.is-basic {
				max-width: 300px;
				width: 100%;
			}
			gl-button.is-basic + gl-button.is-basic {
				margin-top: 1rem;
			}
		`],ul([ye({type:Boolean,reflect:!0,attribute:"has-alerts"})],gl.prototype,"hasAlerts",1),ul([n({context:ti,subscribe:!0}),we()],gl.prototype,"_state",2),gl=ul([fe("gl-repo-alerts")],gl);var ml=Object.defineProperty,fl=Object.getOwnPropertyDescriptor,bl=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?fl(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&ml(t,o,n),n};let vl=class extends GlApp{constructor(){super(...arguments),this.disposable=[],this.badgeSource={source:"home",detail:"badge"}}createStateProvider(e,t){return this.disposable.push(this._overviewState=new OverviewState(t)),new HomeStateProvider(this,e,t)}connectedCallback(){super.connectedCallback(),this.disposable.push(this._ipc.onReceiveMessage((e=>{if(!0===qe.is(e))this.accountContentEl.show()})))}disconnectedCallback(){super.disconnectedCallback(),this.disposable.forEach((e=>e.dispose()))}render(){return re`
			<div class="home scrollable">
				<aside class="home__aux">
					<gl-promo-banner></gl-promo-banner>
					${$e(!this.state.previewEnabled,(()=>re`<gl-preview-banner></gl-preview-banner>`))}
				</aside>
				<gl-repo-alerts class="home__alerts"></gl-repo-alerts>
				<main class="home__main scrollable" id="main">
					<gl-onboarding></gl-onboarding>
					${$e(!0===this.state?.previewEnabled,(()=>re`
							<gl-preview-banner></gl-preview-banner>
							<gl-integration-banner></gl-integration-banner>
							<gl-active-work></gl-active-work>
							<gl-launchpad></gl-launchpad>
							<gl-overview></gl-overview>
						`),(()=>re`<gl-feature-nav .badgeSource=${this.badgeSource}></gl-feature-nav>`))}
				</main>

				<footer class="home__footer">
					<gl-home-account-content id="account-content"> </gl-home-account-content>
				</footer>
			</div>
		`}};vl.styles=[Jo,Qo,Yo],bl([r({context:Xt})],vl.prototype,"_overviewState",2),bl([ke("#account-content")],vl.prototype,"accountContentEl",2),vl=bl([fe("gl-home-app")],vl);var yl=i.K;export{yl as GlHomeApp};