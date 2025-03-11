var e={47:(e,t,o)=>{const i=o(602),r=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,n=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,a=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/uy,l=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,c=/\p{M}+/gu,d={limit:1/0,ellipsis:""},h=(e,t={},o={})=>{const p=t.limit??1/0,u=t.ellipsis??"",g=t?.ellipsisWidth??(u?h(u,d,o).width:0),m=o.ansiWidth??0,f=o.controlWidth??0,v=o.ambiguousWidth??1,w=o.emojiWidth??2,y=o.fullWidthWidth??2,_=o.regularWidth??1,$=o.wideWidth??2;let x=0,C=0,S=e.length,P=0,O=!1,A=S,T=Math.max(0,p-g),D=0,E=0,B=0,F=0;e:for(;;){if(E>D||C>=S&&C>x){const t=e.slice(D,E)||e.slice(x,C);P=0;for(const e of t.replaceAll(c,"")){const t=e.codePointAt(0)||0;if(F=(0,i.isFullWidth)(t)?y:(0,i.isWide)(t)?$:v!==_&&(0,i.isAmbiguous)(t)?v:_,B+F>T&&(A=Math.min(A,Math.max(D,x)+P)),B+F>p){O=!0;break e}P+=e.length,B+=F}D=E=0}if(C>=S)break;if(l.lastIndex=C,l.test(e)){if(P=l.lastIndex-C,F=P*_,B+F>T&&(A=Math.min(A,C+Math.floor((T-B)/_))),B+F>p){O=!0;break}B+=F,D=x,E=C,C=x=l.lastIndex}else if(r.lastIndex=C,r.test(e)){if(B+m>T&&(A=Math.min(A,C)),B+m>p){O=!0;break}B+=m,D=x,E=C,C=x=r.lastIndex}else if(n.lastIndex=C,n.test(e)){if(P=n.lastIndex-C,F=P*f,B+F>T&&(A=Math.min(A,C+Math.floor((T-B)/f))),B+F>p){O=!0;break}B+=F,D=x,E=C,C=x=n.lastIndex}else if(a.lastIndex=C,a.test(e)){if(B+w>T&&(A=Math.min(A,C)),B+w>p){O=!0;break}B+=w,D=x,E=C,C=x=a.lastIndex}else C+=1}return{width:O?T:B,index:O?A:S,truncated:O,ellipsed:O&&p>=g}}},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0;t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109;t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510;t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var i={};o.d(i,{K:()=>zc});class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class s{constructor(e,t,o,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context){const e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.t,this.subscribe))}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class context_provider_i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function r({context:e}){return(t,o)=>{const i=new WeakMap;if("object"==typeof o)return o.addInitializer((function(){i.set(this,new context_provider_i(this,{context:e}))})),{get(){return t.get.call(this)},set(e){return i.get(this)?.setValue(e),t.set.call(this,e)},init(e){return i.get(this)?.setValue(e),e}};{t.constructor.addInitializer((t=>{i.set(t,new context_provider_i(t,{context:e}))}));const r=Object.getOwnPropertyDescriptor(t,o);let n;if(void 0===r){const e=new WeakMap;n={get(){return e.get(this)},set(t){i.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{const e=r.set;n={...r,set(t){i.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,o,n)}}}function n({context:e,subscribe:t}){return(o,i)=>{"object"==typeof i?i.addInitializer((function(){new s(this,{context:e,callback:e=>{o.set.call(this,e)},subscribe:t})})):o.constructor.addInitializer((o=>{new s(o,{context:e,callback:e=>{o[i]=e},subscribe:t})}))}}const a=globalThis,l=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),d=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(l&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=d.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&d.set(t,e))}return e}toString(){return this.cssText}}const h=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,c),p=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new css_tag_n(o,e,c)},u=l?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return h(t)})(e):e,{is:g,defineProperty:m,getOwnPropertyDescriptor:f,getOwnPropertyNames:v,getOwnPropertySymbols:w,getPrototypeOf:y}=Object,_=globalThis,$=_.trustedTypes,x=$?$.emptyScript:"",C=_.reactiveElementPolyfillSupport,S=(e,t)=>e,P={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},O=(e,t)=>!g(e,t),A={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:O};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&m(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:r}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const n=i?.call(this);r.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??A}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,t=[...v(e),...w(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(l)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=a.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:P).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:P;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??O)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[S("elementProperties")]=new Map,b[S("finalized")]=new Map,C?.({ReactiveElement:b}),(_.reactiveElementVersions??=[]).push("2.0.4");const T=globalThis,D=T.trustedTypes,E=D?D.createPolicy("lit-html",{createHTML:e=>e}):void 0,B="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,W="?"+F,j=`<${W}>`,U=document,q=()=>U.createComment(""),G=e=>null===e||"object"!=typeof e&&"function"!=typeof e,V=Array.isArray,K=e=>V(e)||"function"==typeof e?.[Symbol.iterator],Y="[ \t\n\f\r]",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,Z=/>/g,X=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,oe=/^(?:script|style|textarea|title)$/i,ie=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),re=ie(1),ne=ie(2),se=(ie(3),Symbol.for("lit-noChange")),ae=Symbol.for("lit-nothing"),le=new WeakMap,ce=U.createTreeWalker(U,129);function de(e,t){if(!V(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const he=(e,t)=>{const o=e.length-1,i=[];let r,n=2===t?"<svg>":3===t?"<math>":"",a=Q;for(let t=0;t<o;t++){const o=e[t];let l,c,d=-1,h=0;for(;h<o.length&&(a.lastIndex=h,c=a.exec(o),null!==c);)h=a.lastIndex,a===Q?"!--"===c[1]?a=J:void 0!==c[1]?a=Z:void 0!==c[2]?(oe.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=X):void 0!==c[3]&&(a=X):a===X?">"===c[0]?(a=r??Q,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?X:'"'===c[3]?te:ee):a===te||a===ee?a=X:a===J||a===Z?a=Q:(a=X,r=void 0);const p=a===X&&e[t+1].startsWith("/>")?" ":"";n+=a===Q?o+j:d>=0?(i.push(l),o.slice(0,d)+B+o.slice(d)+F+p):o+F+(-2===d?t:p)}return[de(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class N{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,n=0;const a=e.length-1,l=this.parts,[c,d]=he(e,t);if(this.el=N.createElement(c,o),ce.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ce.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(B)){const t=d[n++],o=i.getAttribute(e).split(F),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:a[2],strings:o,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),i.removeAttribute(e)}else e.startsWith(F)&&(l.push({type:6,index:r}),i.removeAttribute(e));if(oe.test(i.tagName)){const e=i.textContent.split(F),t=e.length-1;if(t>0){i.textContent=D?D.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],q()),ce.nextNode(),l.push({type:2,index:++r});i.append(e[t],q())}}}else if(8===i.nodeType)if(i.data===W)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(F,e+1));)l.push({type:7,index:r}),e+=F.length-1}r++}}static createElement(e,t){const o=U.createElement("template");return o.innerHTML=e,o}}function pe(e,t,o=e,i){if(t===se)return t;let r=void 0!==i?o._$Co?.[i]:o._$Cl;const n=G(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(t=pe(e,r._$AS(e,t.values),r,i)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??U).importNode(t,!0);ce.currentNode=i;let r=ce.nextNode(),n=0,a=0,l=o[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new R(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new z(r,this,e)),this._$AV.push(t),l=o[++a]}n!==l?.index&&(r=ce.nextNode(),n++)}return ce.currentNode=U,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),G(e)?e===ae||null==e||""===e?(this._$AH!==ae&&this._$AR(),this._$AH=ae):e!==this._$AH&&e!==se&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):K(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ae&&G(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(de(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new M(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=le.get(e.strings);return void 0===t&&le.set(e.strings,t=new N(e)),t}k(e){V(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new R(this.O(q()),this.O(q()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ae}_$AI(e,t=this,o,i){const r=this.strings;let n=!1;if(void 0===r)e=pe(this,e,t,0),n=!G(e)||e!==this._$AH&&e!==se,n&&(this._$AH=e);else{const i=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=pe(this,i[o+a],t,a),l===se&&(l=this._$AH[a]),n||=!G(l)||l!==this._$AH[a],l===ae?e=ae:e!==ae&&(e+=(l??"")+r[a+1]),this._$AH[a]=l}n&&!i&&this.j(e)}j(e){e===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ae?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ae)}}class L extends k{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??ae)===se)return;const o=this._$AH,i=e===ae&&o!==ae||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==ae&&(o===ae||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}}const ue={M:B,P:F,A:W,C:1,L:he,R:M,D:K,V:pe,I:R,H:k,N:I,U:L,B:H,F:z},ge=T.litHtmlPolyfillSupport;ge?.(N,R),(T.litHtmlVersions??=[]).push("3.2.1");class lit_element_r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let r=i._$litPart$;if(void 0===r){const e=o?.renderBefore??null;i._$litPart$=r=new R(t.insertBefore(q(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return se}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const me=globalThis.litElementPolyfillSupport;me?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const be=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},fe={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:O},ve=(e=fe,t,o)=>{const{kind:i,metadata:r}=o;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];t.call(this,o),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function we(e){return(t,o)=>"object"==typeof o?ve(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function ye(e){return we({...e,state:!0,attribute:!1})}const _e=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ke(e,t){return(o,i,r)=>{const n=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return _e(o,i,{get(){let o=e.call(this);return void 0===o&&(o=n(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return _e(o,i,{get(){return n(this)}})}}let $e;function xe(e,t,o){return e?t(e):o?.(e)}class IpcCall{constructor(e,t,o=!1,i=!1){this.scope=e,this.reset=o,this.pack=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcRequest extends IpcCall{constructor(e,t,o,i){super(e,t,o,i),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}}class IpcNotification extends IpcCall{}const Ce=new IpcCommand("core","webview/ready"),Se=new IpcCommand("core","webview/focus/changed"),Pe=(new IpcCommand("core","command/execute"),new IpcRequest("core","promos/applicable")),Oe=(new IpcCommand("core","configuration/update"),new IpcCommand("core","telemetry/sendEvent"));function Re(e){return null!=e&&"object"==typeof e&&"__ipc"in e&&"promise"===e.__ipc&&"id"in e&&"string"==typeof e.id&&"method"in e&&"string"==typeof e.method}const Ae=new IpcNotification("core","ipc/promise/settled"),Ie=(new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const Te="home",De=new IpcRequest(Te,"launchpad/summary"),Ee=new IpcRequest(Te,"overview/active"),Le=new IpcRequest(Te,"overview/inactive"),Be=new IpcRequest(Te,"overviewFilter"),Fe=new IpcCommand(Te,"overview/repository/change"),We=new IpcNotification(Te,"overview/repository/didChange"),ze=new IpcCommand(Te,"previewEnabled/toggle"),Me=new IpcCommand(Te,"section/collapse"),je=new IpcCommand(Te,"walkthrough/dismiss"),Ne=new IpcCommand(Te,"overview/filter/set"),Ue=(new IpcCommand(Te,"openInGraph"),new IpcNotification(Te,"repositories/didCompleteDiscovering")),qe=new IpcNotification(Te,"previewEnabled/didChange"),Ge=new IpcNotification(Te,"repository/wip/didChange"),Ve=new IpcNotification(Te,"repositories/didChange"),He=new IpcNotification(Te,"walkthroughProgress/didChange"),Ke=new IpcNotification(Te,"integrations/didChange"),Ye=new IpcNotification(Te,"launchpad/didChange"),Qe=new IpcNotification(Te,"subscription/didChange"),Je=new IpcNotification(Te,"org/settings/didChange"),Ze=new IpcNotification(Te,"home/ownerFilter/didChange"),Xe=new IpcNotification(Te,"account/didFocus");var et=Object.defineProperty,tt=(e,t,o)=>(((e,t,o)=>{t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o})(e,"symbol"!=typeof t?t+"":t,o),o),ot=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},it=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},rt=(e,t,o)=>(((e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)})(e,t,"access private method"),o);function nt(e,t){return Object.is(e,t)}let st=null,at=!1,lt=1;const ct=Symbol("SIGNAL");function dt(e){const t=st;return st=e,t}const ht={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function pt(e){if(at)throw new Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===st)return;st.consumerOnSignalRead(e);const t=st.nextProducerIndex++;if(wt(st),t<st.producerNode.length&&st.producerNode[t]!==e&&vt(st)){ft(st.producerNode[t],st.producerIndexOfThis[t])}st.producerNode[t]!==e&&(st.producerNode[t]=e,st.producerIndexOfThis[t]=vt(st)?bt(e,st,t):0),st.producerLastReadVersion[t]=e.version}function ut(e){if(e.dirty||e.lastCleanEpoch!==lt){if(!e.producerMustRecompute(e)&&!function(e){wt(e);for(let t=0;t<e.producerNode.length;t++){const o=e.producerNode[t],i=e.producerLastReadVersion[t];if(i!==o.version)return!0;if(ut(o),i!==o.version)return!0}return!1}(e))return e.dirty=!1,void(e.lastCleanEpoch=lt);e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=lt}}function gt(e){if(void 0===e.liveConsumerNode)return;const t=at;at=!0;try{for(const t of e.liveConsumerNode)t.dirty||mt(t)}finally{at=t}}function mt(e){var t;e.dirty=!0,gt(e),null==(t=e.consumerMarkedDirty)||t.call(e.wrapper??e)}function bt(e,t,o){var i;if(yt(e),wt(e),0===e.liveConsumerNode.length){null==(i=e.watched)||i.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)e.producerIndexOfThis[t]=bt(e.producerNode[t],e,t)}return e.liveConsumerIndexOfThis.push(o),e.liveConsumerNode.push(t)-1}function ft(e,t){var o;if(yt(e),wt(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(o=e.unwatched)||o.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)ft(e.producerNode[t],e.producerIndexOfThis[t])}const i=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[i],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[i],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const o=e.liveConsumerIndexOfThis[t],i=e.liveConsumerNode[t];wt(i),i.producerIndexOfThis[o]=t}}function vt(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function wt(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function yt(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function _t(e){if(ut(e),pt(e),e.value===xt)throw e.error;return e.value}const kt=Symbol("UNSET"),$t=Symbol("COMPUTING"),xt=Symbol("ERRORED"),Ct=(()=>({...ht,value:kt,dirty:!0,error:null,equal:nt,producerMustRecompute:e=>e.value===kt||e.value===$t,producerRecomputeValue(e){if(e.value===$t)throw new Error("Detected cycle in computations.");const t=e.value;e.value=$t;const o=function(e){return e&&(e.nextProducerIndex=0),dt(e)}(e);let i,r=!1;try{i=e.computation.call(e.wrapper);r=t!==kt&&t!==xt&&e.equal.call(e.wrapper,t,i)}catch(t){i=xt,e.error=t}finally{!function(e,t){if(dt(t),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(vt(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)ft(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}(e,o)}r?e.value=t:(e.value=i,e.version++)}}))();let St=function(){throw new Error};function Pt(){return pt(this),this.value}function Ot(e,t){!1===(null==st?void 0:st.consumerAllowSignalWrites)&&St(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,function(e){e.version++,lt++,gt(e)}(e))}const Rt=(()=>({...ht,equal:nt,value:void 0}))();const At=Symbol("node");var It;(e=>{var t,o,i,r;t=At,o=new WeakSet,e.isState=e=>"object"==typeof e&&ot(o,e),e.State=class State{constructor(i,r={}){it(this,o),tt(this,t);const n=function(e){const t=Object.create(Rt);t.value=e;const o=()=>(pt(t),t.value);return o[ct]=t,o}(i),a=n[ct];if(this[At]=a,a.wrapper=this,r){const t=r.equals;t&&(a.equal=t),a.watched=r[e.subtle.watched],a.unwatched=r[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Pt.call(this[At])}set(t){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(at)throw new Error("Writes to signals not permitted during Watcher callback");Ot(this[At],t)}};i=At,r=new WeakSet,e.isComputed=e=>"object"==typeof e&&ot(r,e),e.Computed=class Computed{constructor(t,o){it(this,r),tt(this,i);const n=function(e){const t=Object.create(Ct);t.computation=e;const o=()=>_t(t);return o[ct]=t,o}(t),a=n[ct];if(a.consumerAllowSignalWrites=!0,this[At]=a,a.wrapper=this,o){const t=o.equals;t&&(a.equal=t),a.watched=o[e.subtle.watched],a.unwatched=o[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return _t(this[At])}},(t=>{var o,i,r,n;t.untrack=function(e){let t,o=null;try{o=dt(null),t=e()}finally{dt(o)}return t},t.introspectSources=function(t){var o;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(o=t[At].producerNode)?void 0:o.map((e=>e.wrapper)))??[]},t.introspectSinks=function(t){var o;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called introspectSinks without a Signal argument");return(null==(o=t[At].liveConsumerNode)?void 0:o.map((e=>e.wrapper)))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called hasSinks without a Signal argument");const o=t[At].liveConsumerNode;return!!o&&o.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called hasSources without a Computed or Watcher argument");const o=t[At].producerNode;return!!o&&o.length>0};o=At,i=new WeakSet,r=new WeakSet,n=function(t){for(const o of t)if(!(0,e.isComputed)(o)&&!(0,e.isState)(o))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>ot(i,e),t.Watcher=class Watcher{constructor(e){it(this,i),it(this,r),tt(this,o);let t=Object.create(ht);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[At]=t}watch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");rt(this,r,n).call(this,t);const o=this[At];o.dirty=!1;const i=dt(o);for(const e of t)pt(e[At]);dt(i)}unwatch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");rt(this,r,n).call(this,t);const o=this[At];wt(o);for(let e=o.producerNode.length-1;e>=0;e--)if(t.includes(o.producerNode[e].wrapper)){ft(o.producerNode[e],o.producerIndexOfThis[e]);const t=o.producerNode.length-1;if(o.producerNode[e]=o.producerNode[t],o.producerIndexOfThis[e]=o.producerIndexOfThis[t],o.producerNode.length--,o.producerIndexOfThis.length--,o.nextProducerIndex--,e<o.producerNode.length){const t=o.producerIndexOfThis[e],i=o.producerNode[e];yt(i),i.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[At].producerNode.filter((e=>e.dirty)).map((e=>e.wrapper))}},t.currentComputed=function(){var e;return null==(e=st)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(It||(It={}));const Tt=(e=null)=>new It.State(e,{equals:()=>!1});new WeakMap;class SignalObjectImpl{static fromEntries(e){return new SignalObjectImpl(Object.fromEntries(e))}#e=new Map;#t=Tt();constructor(e={}){let t=Object.getPrototypeOf(e),o=Object.getOwnPropertyDescriptors(e),i=Object.create(t);for(let e in o)Object.defineProperty(i,e,o[e]);let r=this;return new Proxy(i,{get:(e,t,o)=>(r.#o(t),Reflect.get(e,t,o)),has:(e,t)=>(r.#o(t),t in e),ownKeys:e=>(r.#t.get(),Reflect.ownKeys(e)),set(e,t,o,i){let n=Reflect.set(e,t,o,i);return r.#i(t),r.#r(),n},deleteProperty:(e,t)=>(t in e&&(delete e[t],r.#i(t),r.#r()),!0),getPrototypeOf:()=>SignalObjectImpl.prototype})}#o(e){let t=this.#e.get(e);void 0===t&&(t=Tt(),this.#e.set(e,t)),t.get()}#i(e){const t=this.#e.get(e);t&&t.set(null)}#r(){this.#t.set(null)}}const Dt=SignalObjectImpl;const Et=Symbol("SignalWatcherBrand"),Lt=new FinalizationRegistry((({watcher:e,signal:t})=>{e.unwatch(t)})),Bt=new WeakMap;function Ft(e){return!0===e[Et]?e:class extends e{constructor(){super(...arguments),this._$St=new It.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new It.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new It.subtle.Watcher((function(){const e=Bt.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())}));Bt.set(e,this),Lt.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((e=>e.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,o){this._$So=!0,super.requestUpdate(e,t,o)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{!1===this.isConnected&&this._$Sp()}))}_(e){this._$Sh.add(e);const t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}const Wt=1,zt=2,Mt=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:jt}=ue,Nt=()=>document.createComment(""),Ut=(e,t,o)=>{const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(Nt(),r),n=i.insertBefore(Nt(),r);o=new jt(t,n,e,e.options)}else{const t=o._$AB.nextSibling,n=o._$AM,a=n!==e;if(a){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==n._$AU&&o._$AP(t)}if(t!==r||a){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,r),e=t}}}return o},qt=(e,t,o=e)=>(e._$AI(t,o),e),Gt={},Vt=e=>{e._$AP?.(!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const e=t.nextSibling;t.remove(),t=e}},Ht=(e,t)=>{const o=e._$AN;if(void 0===o)return!1;for(const e of o)e._$AO?.(t,!1),Ht(e,t);return!0},Kt=e=>{let t,o;do{if(void 0===(t=e._$AM))break;o=t._$AN,o.delete(e),e=t}while(0===o?.size)},Yt=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),Zt(t)}};function Qt(e){void 0!==this._$AN?(Kt(this),this._$AM=e,Yt(this)):this._$AM=e}function Jt(e,t=!1,o=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(i))for(let e=o;e<i.length;e++)Ht(i[e],!1),Kt(i[e]);else null!=i&&(Ht(i,!1),Kt(i));else Ht(this,e)}const Zt=e=>{e.type==zt&&(e._$AP??=Jt,e._$AQ??=Qt)};class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Yt(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ht(this,e),Kt(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Xt=Mt(class watch_h extends async_directive_f{_$Sl(){if(void 0!==this._$Su)return;this._$SW=new It.Computed((()=>{var e;return null===(e=this._$Sj)||void 0===e?void 0:e.get()}));const e=this._$Su=new It.subtle.Watcher((()=>{var t;null===(t=this._$SO)||void 0===t||t._(this),e.watch()}));e.watch(this._$SW)}_$Sp(){var e;void 0!==this._$Su&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,null===(e=this._$SO)||void 0===e||e.m(this))}commit(){this.setValue(It.subtle.untrack((()=>{var e;return null===(e=this._$SW)||void 0===e?void 0:e.get()})))}render(e){return It.subtle.untrack((()=>e.get()))}update(e,[t]){var o,i;return null!==(o=this._$SO)&&void 0!==o||(this._$SO=null===(i=e.options)||void 0===i?void 0:i.host),t!==this._$Sj&&void 0!==this._$Sj&&this._$Sp(),this._$Sj=t,this._$Sl(),It.subtle.untrack((()=>this._$SW.get()))}disconnected(){this._$Sp()}reconnected(){this._$Sl()}}),eo=e=>(t,...o)=>e(t,...o.map((e=>e instanceof It.State||e instanceof It.Computed?Xt(e):e))),to=(eo(re),eo(ne),It.State,It.Computed,(e,t)=>new It.State(e,t));class AsyncComputed{#n=!1;#s=new It.State("initial");get status(){this.run();const e=this.#s.get();return this.#n?"pending":e}#a;get value(){return this.run(),this.#a.get()}#l=new It.State(void 0);get error(){return this.run(),this.#l.get()}#c=new It.State(void 0);get complete(){return this.run(),this.#c.get().promise}#d;#h;#p=0;#u;constructor(e,t){this.#a=new It.State(t?.initialValue),this.#d=new It.Computed((()=>{const t=++this.#p;"pending"!==It.subtle.untrack((()=>this.#s.get()))&&this.#c.set(Promise.withResolvers()),this.#n=!1,this.#s.set("pending"),this.#u?.abort(),this.#u=new AbortController,e(this.#u.signal).then((e=>{t===this.#p&&(this.#s.set("complete"),this.#a.set(e),this.#l.set(void 0),this.#c.get().resolve(e))}),(e=>{t===this.#p&&(this.#s.set("error"),this.#l.set(e),this.#a.set(void 0),this.#c.get().reject(e))}))})),this.#h=new It.subtle.Watcher((async()=>{this.#n=!0,this.#h.watch()})),this.#h.watch(this.#d)}get(){const e=this.status;if("error"===e||"pending"===e&&void 0!==this.error)throw this.error;return this.value}run(){this.#d.get()}}function oo(e,t,o){let i,r,n,a,l;function c(){const e=Date.now();if(function(e){const o=e-(r??0);return null==r||o>=t||o<0}(e))d();else{l=setTimeout(c,t-(e-(r??0)))}}function d(){return l=void 0,i?function(){const t=i,o=n;return i=n=void 0,a=e.apply(o,t),a}():(i=void 0,n=void 0,a)}function h(...e){const d=Date.now();return i=null!=o&&i?o(i,e):e,n=this,r=d,null==l&&(l=setTimeout(c,t)),a}return h.cancel=function(){null!=l&&clearTimeout(l),i=void 0,r=void 0,n=void 0,l=void 0},h.flush=function(){return null==l?a:(clearTimeout(l),d())},h.pending=function(){return null!=l},h}const io=/\(([\s\S]*)\)/,ro=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,no=/\s?=.*$/;class AsyncComputedState{constructor(e,t){this._fetch=e,this._debounce=500,this._invalidate=to(0),this._state=to(void 0),null!=t&&(this._state.set(t.initial),null!=t.debounce&&(this._debounce=t.debounce),!0===t.autoRun&&this.run())}get state(){return this._run(),this._state.get()}get computed(){if(null==this._computed){const e=this._state.get();this._computed=new AsyncComputed((async e=>{this._invalidate.get();const t=await this._fetch(e);return this._state.set(t),t}),e?{initialValue:e}:void 0)}return this._computed}_runCore(){this.computed.run()}_run(e=!1){e?this._runCore():(null==this._runDebounced&&(this._runDebounced=oo(this._runCore.bind(this),this._debounce)),this._runDebounced())}run(e=!1){e&&this.invalidate(),this._run()}invalidate(){this._invalidate.set(Date.now())}render(e){return((e,{initial:t,pending:o,complete:i,error:r})=>{switch(e.status){case"initial":return t?.();case"pending":return o?.();case"complete":return i?.(e.value);case"error":return r?.(e.error)}})(this.computed,e)}}class ActiveOverviewState extends AsyncComputedState{constructor(e,t){super((async e=>await this._ipc.sendRequest(Ee,void 0)),t),this._ipc=e,this._disposable=this._ipc.onReceiveMessage((e=>{switch(!0){case Ve.is(e):case Ge.is(e):case We.is(e):this.run(!0)}}))}dispose(){this._disposable?.dispose()}changeRepository(){this._ipc.sendCommand(Fe,void 0)}}class InactiveOverviewState extends AsyncComputedState{constructor(e,t){super((async e=>await this._ipc.sendRequest(Le,void 0)),t),this._ipc=e,this.filter=new Dt({}),this._disposable=this._ipc.onReceiveMessage((e=>{switch(!0){case Ve.is(e):this.run(!0);break;case Ze.is(e):this.filter.recent=e.params.filter.recent,this.filter.stale=e.params.filter.stale,this.run(!0);break;case We.is(e):this.run(!0)}})),this._ipc.sendRequest(Be,void 0).then((e=>{this.filter.recent=e.recent,this.filter.stale=e.stale}))}dispose(){this._disposable?.dispose()}}const so="activeOverviewState",ao="inactiveOverviewState",lo=new WeakMap;function co(e,t){return function(o,i,r){let n=lo.get(o.constructor);null==n&&lo.set(o.constructor,n=[]),n.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_r{emit(e,t,o){const i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(i),i}update(e){const t=lo.get(this.constructor);if(null!=t)for(const{keys:o,method:i,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&i.call(this,t)}super.update(e)}}const ho="ipc";function po(e){const t=.001*performance.now();let o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],i-=e[1],i<0&&(o--,i+=1e9)),[o,i]}function uo(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const go=uo(),mo=new Map;function bo(e){mo.delete(e)}function fo(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function vo(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?go.current:void 0,i=go.next();return{scopeId:i,prevScopeId:o,prefix:`${fo(i,o)} ${e}`}}Error;function wo(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;o(47);var yo=(e=>(e.AngleBracketLeftHeavy="❰",e.AngleBracketRightHeavy="❱",e.ArrowBack="↩",e.ArrowDown="↓",e.ArrowDownUp="⇵",e.ArrowDropRight="⤷",e.ArrowHeadRight="➤",e.ArrowLeft="←",e.ArrowLeftDouble="⇐",e.ArrowLeftRight="↔",e.ArrowLeftRightDouble="⇔",e.ArrowLeftRightDoubleStrike="⇎",e.ArrowLeftRightLong="⟷",e.ArrowRight="→",e.ArrowRightDouble="⇒",e.ArrowRightHollow="⇨",e.ArrowUp="↑",e.ArrowUpDown="⇅",e.ArrowUpRight="↗",e.ArrowsHalfLeftRight="⇋",e.ArrowsHalfRightLeft="⇌",e.ArrowsLeftRight="⇆",e.ArrowsRightLeft="⇄",e.Asterisk="∗",e.Bullseye="◎",e.Check="✔",e.Dash="—",e.Dot="•",e.Ellipsis="…",e.EnDash="–",e.Envelope="✉",e.EqualsTriple="≡",e.Flag="⚑",e.FlagHollow="⚐",e.MiddleEllipsis="⋯",e.MuchLessThan="≪",e.MuchGreaterThan="≫",e.Pencil="✎",e.Space=" ",e.SpaceThin=" ",e.SpaceThinnest=" ",e.SquareWithBottomShadow="❏",e.SquareWithTopShadow="❐",e.Warning="⚠",e.ZeroWidthSpace="​",e))(yo||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const _o="utm_source=gitlens-extension&utm_medium=in-app-links",ko=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${_o}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${_o}`,graph:`https://gitkraken.com/solutions/commit-graph?${_o}`,launchpad:`https://gitkraken.com/solutions/launchpad?${_o}`,platform:`https://gitkraken.com/devex?${_o}`,pricing:`https://gitkraken.com/gitlens/pricing?${_o}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${_o}`,security:`https://help.gitkraken.com/gitlens/security?${_o}`,workspaces:`https://gitkraken.com/solutions/workspaces?${_o}`,cli:`https://gitkraken.com/cli?${_o}`,browserExtension:`https://gitkraken.com/browser-extension?${_o}`,desktop:`https://gitkraken.com/git-client?${_o}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${_o}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${_o}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${_o}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${_o}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${_o}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${_o}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${_o}`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${_o}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${_o}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${_o}#streamline-collaboration`}),$o=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,xo=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Co=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let So;const Po=new Map;let Oo,Ro,Ao;const Io=new Map;function To(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,i,r,n]of Co){const a=Math.abs(o);if(a>=i||1e3===i){if(t){if(null==So&&(null!=Ao?So=Ao.resolvedOptions().locale:null!=Ro?So=Ro.resolvedOptions().locale:(Ao=new Intl.RelativeTimeFormat(Oo,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),So=Ao.resolvedOptions().locale)),"en"===So||So?.startsWith("en-")){return`${Math.round(a/r)}${n}`}return null==Ao&&(Ao=new Intl.RelativeTimeFormat(Oo,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Ao.format(Math.round(o/r),e)}return null==Ro&&(Ro=new Intl.RelativeTimeFormat(Oo,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Ro.format(Math.round(o/r),e)}}return""}function Do(e,t,o,i=!0){const r=`${o??""}:${t=t??void 0}`;let n=Po.get(r);if(null==n){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=xo.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll($o))if(null!=t)for(const[e,i]of Object.entries(t))if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===i?"2-digit":"numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}return o}(t);let a;a=null==o?Oo:"system"===o?void 0:[o],n=new Intl.DateTimeFormat(a,e),i&&Po.set(r,n)}if(null==t||xo.test(t))return n.format(e);function a(e){const t=`${o??""}:time:${e}`;let r=Po.get(t);if(null==r){const n={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?Oo:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,n),i&&Po.set(t,r)}return r}const l=n.formatToParts(e);return t.replace($o,((t,o,i,r,n,c,d,h,p,u,g,m,f,v,w)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(w)){if(null==o)continue;const i=l.find((e=>e.type===t));if("Do"===o&&"day"===i?.type)return Lo(Number(i.value));if("a"===o&&"dayPeriod"===i?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??i)?.value??""}`}return i?.value??""}return""}))}const Eo=["th","st","nd","rd"];function Lo(e){const t=e%100;return`${e}${Eo[(t-20)%10]??Eo[t]??Eo[0]}`}function Bo(e,t){null==e&&(e="decimal");const o=`${t??""}:${e}`;let i=Io.get(o);if(null==i){const r={localeMatcher:"best fit",style:e};let n;n=null==t?Oo:"system"===t?void 0:[t],i=new Intl.NumberFormat(n,r),Io.set(o,i)}return i.format}const{fromCharCode:Fo}=String;new TextEncoder;function Wo(e){const[t,o]=po(e);return 1e3*t+Math.floor(o/1e6)}const zo=/\$\{(?:'.*?[^\\]'|\W*)?(\w*?)(?:'.*?[^\\]'|[\W\d]*)\}/g,Mo=new Map;function jo(e){return 95===e||e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57}function No(e){let t=Mo.get(e);if(null!=t)return t;t=[];const o=e.length;let i=0;for(;i<o;){const o=e.indexOf("${",i);if(-1===o)break;const r=e.indexOf("}",o);if(-1===r)break;let n=o+2,a="",l="",c="",d=!1,h="right",p="";if("'"===e[n]){const t=++n;if(n=e.indexOf("'",n),-1===n)break;t!==n&&(l=e.slice(t,n)),n++}else if(!jo(e.charCodeAt(n))){const t=n++;for(;n<r&&!jo(e.charCodeAt(n));)n++;t!==n&&(l=e.slice(t,n))}for(;n<r;){let t=e.charCodeAt(n);if(jo(t))a+=e[n++];else{if(124!==t)break;for(;n<r;){if(t=e.charCodeAt(++n),!(t>=48&&t<=57)){63===t?(d=!0,n++):45===t&&(h="left",n++);break}c+=e[n]}}}if(n<r)if("'"===e[n]){const t=++n;if(n=e.indexOf("'",n),-1===n)break;t!==n&&(p=e.slice(t,n)),n++}else if(!jo(e.charCodeAt(n))){const t=n++;for(;n<r&&!jo(e.charCodeAt(n));)n++;t!==n&&(p=e.slice(t,n))}i=r+1,t.push({key:a,start:o,end:i,options:{prefix:l||void 0,suffix:p||void 0,truncateTo:c?parseInt(c,10):void 0,collapseWhitespace:d,padDirection:h}})}return Mo.set(e,t),t}let Uo;function qo(e,t,o){if(null==o)return Uo??=Bo(),`${Uo(t)} ${e}${1===t?"":"s"}`;const i=1===t?e:o.plural??`${e}s`;if(o.only)return i;let r;return 0===t?r=o.zero??t:!1===o.format?r=t:null!=o.format?r=o.format(t):(Uo??=Bo(),r=Uo(t)),`${r}${o.infix??" "}${i}`}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);const Go=Symbol("logInstanceNameFn");function Vo(e){return function(e,t=!1){let o,i,r,n,a,l=0,c=!1,d=!1,h=!0;null!=e&&({args:o,if:i,enter:r,exit:n,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:h=!0}=e);l>0&&(d=!0,h=!0);h&&(c=!0);const p=Ko.isDebugging,u=t?Ko.debug:Ko.log,g=p?"debug":"info";return(e,t,m)=>{let f,v;if("function"==typeof m.value?(f=m.value,v="value"):"function"==typeof m.get&&(f=m.get,v="get"),null==f||null==v)throw new Error("Not supported");const w=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(ro,"")||t,t=t.slice(0,t.indexOf("{"));let o=t.indexOf("("),i=t.indexOf(")");o=o>=0?o+1:0,i=i>0?i:t.indexOf("="),t=t.slice(o,i),t=`(${t})`;const r=io.exec(t);return null!=r?r[1].split(",").map((e=>e.trim().replace(no,""))):[]}(f):[];m[v]=function(...e){if(!p&&!Ko.enabled(g)||null!=i&&!i.apply(this,e))return f.apply(this,e);const m=go.current,v=go.next(),y=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const i=o.indexOf("_");o=-1===i?o:o.substring(i+1),null!=t?.[Go]&&(o=t[Go](e,o));return o}(this):void 0;let _,$=y?c?`${fo(v,m)} ${y}.${t}`:`${y}.${t}`:t;null!=a&&($=a({id:v,instance:this,instanceName:y??"",name:t,prefix:$},...e)),c&&(_=function(e,t){return t={prevScopeId:go.current,...t},mo.set(e,t),t}(v,{scopeId:v,prevScopeId:m,prefix:$}));const x=null!=r?r(...e):"";let C;if(!1===o||0===e.length)C="",d||u.call(Ko,`${$}${x}`);else{let t;C="";let i,r,n,a=-1;for(n of e){if(i=w[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(C.length>0&&(C+=", "),"string"==typeof t){C+=t;continue}r=String(t(n))}else C.length>0&&(C+=", "),r=Ko.toLoggable(n);C+=i?`${i}=${r}`:r}d||u.call(Ko,C?`${$}${x}(${C})`:`${$}${x}`)}if(d||h||null!=n){const t=h?po():void 0,o=e=>{const o=void 0!==t?` [${Wo(t)}ms]`:"";d?Ko.error(e,C?`${$}${x}(${C})`:`${$}${x}`,_?.exitDetails?`failed${_.exitDetails}${o}`:`failed${o}`):Ko.error(e,$,_?.exitDetails?`failed${_.exitDetails}${o}`:`failed${o}`),c&&bo(v)};let i;try{i=f.apply(this,e)}catch(e){throw o(e),e}const r=e=>{let o,i,r,a;if(null!=t?(o=Wo(t),o>500?(i=Ko.warn,r=` [*${o}ms] (slow)`):(i=u,r=` [${o}ms]`)):(r="",i=u),null!=n)if("function"==typeof n)try{a=n(e)}catch(e){a=`@log.exit error: ${e}`}else!0===n&&(a=`returned ${Ko.toLoggable(e)}`);else _?.exitFailed?(a=_.exitFailed,i=(e,...t)=>Ko.error(null,e,...t)):a="completed";d?(0===l||o>l)&&i.call(Ko,C?`${$}${x}(${C}) ${a}${_?.exitDetails||""}${r}`:`${$}${x} ${a}${_?.exitDetails||""}${r}`):i.call(Ko,C?`${$}(${C}) ${a}${_?.exitDetails||""}${r}`:`${$} ${a}${_?.exitDetails||""}${r}`),c&&bo(v)};return null!=i&&wo(i)?i.then(r,o):r(i),i}return f.apply(this,e)}}}(e,!0)}const Ho=["accessToken","password","token"],Ko=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){if(null!=e.sanitizeKeys)for(const t of Ho)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(Ho);this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=Yo(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=Yo(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==i){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,((e,o)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(o=t(e,o)),null!=this.provider?.sanitizer&&(o=this.provider.sanitizer(e,o)),o)))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function Yo(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const Qo={enabled:e=>Ko.enabled(e)||Ko.isDebugging,log:(e,t,o,...i)=>{switch(e){case"error":Ko.error(void 0,t,o,...i);break;case"warn":Ko.warn(t,o,...i);break;case"info":Ko.log(t,o,...i);break;default:Ko.debug(t,o,...i)}}};class LoggerContext{constructor(e){this.scope=vo(e,void 0),Ko.configure({name:e,createChannel:function(e){return{name:e,appendLine:Ko.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?Ko.log(this.scope,e,...t):Ko.log(e,t.shift(),...t)}}class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e}async getApplicablePromo(e){let t=this._promos.get(e);null==t&&(t=this.ipc.sendRequest(Pe,{location:e}).then((e=>e.promo),(()=>{})),this._promos.set(e,t));return await t}dispose(){this.disposables.forEach((e=>e.dispose()))}}const Jo="promos";class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(Oe,e)}dispose(){this.disposables.forEach((e=>e.dispose()))}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:vo(e??"",!1),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??Qo,this._time=po(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=po(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=po(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,i]=po(this._time),r=1e3*o+Math.floor(i/1e6),n=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${n?`${n} `:""}[${r}ms]${e?.suffix??""}`)}}var Zo;function Xo(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function ei(e,t){return new Promise((o=>{e.addEventListener(t,(function i(r){r.target===e&&(e.removeEventListener(t,i),o())}))}))}(Zo||(Zo={})).on=function(e,t,o,i){let r=!1;if("string"==typeof e){const n=function(t){const i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,n,i??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,n,i??!0))}}}const n=function(e){o(e,this)};return e.addEventListener(t,n,i??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,n,i??!1))}}};const ti=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const i=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=_Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};ti._noop=function(){};let oi=ti;const ii={done:!0,value:void 0},ri=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};ri.Undefined=new ri(void 0);let ni=ri;class LinkedList{constructor(){this._first=ni.Undefined,this._last=ni.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ni.Undefined}clear(){this._first=ni.Undefined,this._last=ni.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new ni(e);if(this._first===ni.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===ni.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ni.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ni.Undefined&&e.next!==ni.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ni.Undefined&&e.next===ni.Undefined?(this._first=ni.Undefined,this._last=ni.Undefined):e.next===ni.Undefined?(this._last=this._last.prev,this._last.next=ni.Undefined):e.prev===ni.Undefined&&(this._first=this._first.next,this._first.prev=ni.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ni.Undefined?ii:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ni.Undefined;t=t.next)e.push(t.element);return e}}var si=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,li=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ai(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&si(t,o,n),n};let ci;const di=uo();function hi(){return`webview:${di.next()}`}let pi=class{constructor(e){this.appName=e,this._onReceiveMessage=new oi,this._pendingHandlers=new Map,this._api=ci??=acquireVsCodeApi(),this._disposable=Zo.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=mo.get(go.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const i=function(e,t,...o){return(t?.provider??Qo).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(vo(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),i?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null==o.completionId)this._onReceiveMessage.fire(o);else{const e=gi(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(const t in e){const o=e[t];Re(o)?e[t]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(e,t){const o=hi();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=hi(),i=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),i}getResponsePromise(e,t){return new Promise(((o,i)=>{const r=gi(e,t);let n;function a(){clearTimeout(n),n=void 0,this._pendingHandlers.delete(r)}n=setTimeout((()=>{a.call(this),i(new Error(`Timed out waiting for completion of ${r}`))}),60*(Ko.isDebugging?60:5)*1e3),this._pendingHandlers.set(r,(e=>{if(a.call(this),e.method===Ae.method){const t=e.params;"rejected"===t.status?queueMicrotask((()=>i(new Error(t.reason)))):queueMicrotask((()=>o(t.value)))}else queueMicrotask((()=>o(e.params)))}))}))}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var ui;function gi(e,t){return`${e}|${t}`}li([Vo({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],pi.prototype,"onMessageReceived",1),li([Vo({args:{0:e=>e.method,1:!1}})],pi.prototype,"sendCommand",1),li([Vo({args:{0:e=>e.method,1:!1,2:!1}})],pi.prototype,"sendRequest",1),li([Vo({args:{0:e=>`${e.id}, method=${e.method}`}})],pi.prototype,"postMessage",1),pi=li([(ui=(e,t)=>`${e.appName}(${t})`,e=>{e[Go]=ui})],pi);var mi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,fi=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?bi(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&mi(t,o,n),n};class GlApp extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{const t=e.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===t||(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}get state(){return this._stateProvider.state}onPersistState(e){}connectedCallback(){super.connectedCallback(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new pi(this.name);const e=this.bootstrap;this.bootstrap=void 0,this._ipc.replaceIpcPromisesWithPromises(e),this.onPersistState(e),this.disposables.push(this._stateProvider=this.createStateProvider(e,this._ipc),this._ipc.onReceiveMessage((e=>{if(!0===Ie.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"))})),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._ipc.sendCommand(Ce,void 0),this._sendWebviewFocusChangedCommandDebounced=oo((e=>{this._ipc.sendCommand(Se,e)}),150),document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}disconnectedCallback(){super.disconnectedCallback(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach((e=>e.dispose()))}render(){return re`<slot></slot>`}}GlApp.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},fi([we({type:String})],GlApp.prototype,"name",2),fi([we({type:String})],GlApp.prototype,"placement",2),fi([r({context:ho})],GlApp.prototype,"_ipc",2),fi([r({context:"logger"})],GlApp.prototype,"_logger",2),fi([r({context:Jo})],GlApp.prototype,"_promos",2),fi([r({context:"telemetry"})],GlApp.prototype,"_telemetry",2),fi([we({type:Object,noAccessor:!0})],GlApp.prototype,"bootstrap",2);const vi=p`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`,wi=(p`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus):not(:focus-within) {
		${vi}
	}
`,p`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),yi=p`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,_i=p`
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
`,ki=p`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${wi}
	}
	a:hover {
		text-decoration: underline;
	}
`,$i=p`
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
`,xi=p`
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
`,Ci=p`
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
		padding: 0.8rem 1.2rem;
	}
	.home__main > *:last-child {
		margin-bottom: 0;
	}

	.home__aux,
	.home__header {
		flex: none;
	}

	.home__header {
		border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
		border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
		padding: 0.4rem;
	}

	.home__aux:has(gl-promo-banner:has(gl-promo:not([has-promo])):only-child) {
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

	gl-home-header {
		margin: 0;
	}

	gl-repo-alerts:not([has-alerts]) {
		display: none;
	}
`,Si=(p`
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
`),Pi=p`
	.nav-list {
		margin-left: -1.2rem;
		margin-right: -1.2rem;
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
		left: 1.2rem;
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
`,Oi=p`
	a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
	}

	.walkthrough-progress {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 2px 4px 4px;
		margin-top: 4px;
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
		color: var(--color-foreground--85);
	}
	.walkthrough-progress__button {
		--button-padding: 1px 2px 0px 2px;
		position: absolute;
		right: 0.4rem;
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
`,Ri="state";class HomeStateProvider{constructor(e,t,o){this._ipc=o,this._state=t,this.provider=new context_provider_i(e,{context:Ri,initialValue:t}),this.disposable=this._ipc.onReceiveMessage((t=>{switch(!0){case Ve.is(t):this._state.repositories=t.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case Ue.is(t):this._state.repositories=t.params.repositories,this._state.discovering=t.params.discovering,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case He.is(t):this._state.walkthroughProgress=t.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case Qe.is(t):this._state.subscription=t.params.subscription,this._state.avatar=t.params.avatar,this._state.organizationsCount=t.params.organizationsCount,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case Je.is(t):this._state.orgSettings=t.params.orgSettings,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case Ke.is(t):this._state.hasAnyIntegrationConnected=t.params.hasAnyIntegrationConnected,this._state.integrations=t.params.integrations,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case qe.is(t):this._state.previewEnabled=t.params.previewEnabled,this._state.previewCollapsed=t.params.previewCollapsed,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),e.requestUpdate?.()}}))}get state(){return this._state}dispose(){this.disposable.dispose()}}const Ai=14;var Ii=(e=>(e.Community="community",e.CommunityWithAccount="community-with-account",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(Ii||{}),Ti=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Community=0]="Community",e[e.ProPreview=1]="ProPreview",e[e.ProPreviewExpired=2]="ProPreviewExpired",e[e.ProTrial=3]="ProTrial",e[e.ProTrialExpired=4]="ProTrialExpired",e[e.ProTrialReactivationEligible=5]="ProTrialReactivationEligible",e[e.Paid=6]="Paid",e))(Ti||{});function Di(e){return`GitLens ${Ei(e)}`}function Ei(e){switch(e){case Ii.CommunityWithAccount:return"Community";case Ii.Pro:return"Pro";case Ii.Teams:return"Teams";case Ii.Enterprise:return"Enterprise";case Ii.Community:default:return"Community"}}Ii.Community,Ii.CommunityWithAccount,Ii.Pro,Ii.Teams,Ii.Enterprise;function Li(e,t){return Bi(e.plan.effective.expiresOn,t)}function Bi(e,t){return null!=e?function(e,t,o,i){const r=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),n=i??Math.floor;switch(o){case"days":return n(r/864e5);case"hours":return n(r/36e5);case"minutes":return n(r/6e4);case"seconds":return n(r/1e3);default:return r}}(Date.now(),new Date(e),t,Math.round):void 0}function Fi(e){return(t=e.plan.actual.id)!==Ii.Community&&t!==Ii.CommunityWithAccount;var t}function Wi(e){return null!=e&&(e!==Ti.Community&&e!==Ti.ProPreviewExpired&&e!==Ti.ProPreview)}function zi(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}const Mi=p`
	:host {
		display: flex;
	}

	.chip {
		display: flex;
		gap: 0.6rem;
		align-items: center;

		border-radius: 0.3rem;
		padding: 0.2rem 0.4rem;
		cursor: pointer;
	}

	.chip:focus,
	.chip:focus-within {
		outline: 1px solid var(--vscode-focusBorder);
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-bottom: 0.4rem;
	}

	.header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		width: 100%;
		padding-bottom: 0.4rem;
	}

	.header__actions {
		flex: none;
		display: flex;
		gap: 0.2rem;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.header__title {
		flex: 1;
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`,ji=e=>e??ae;var Ni=Object.defineProperty,Ui=Object.defineProperties,qi=Object.getOwnPropertyDescriptor,Gi=Object.getOwnPropertyDescriptors,Vi=Object.getOwnPropertySymbols,Hi=Object.prototype.hasOwnProperty,Ki=Object.prototype.propertyIsEnumerable,Yi=e=>{throw TypeError(e)},Qi=(e,t,o)=>t in e?Ni(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Ji=(e,t)=>{for(var o in t||(t={}))Hi.call(t,o)&&Qi(e,o,t[o]);if(Vi)for(var o of Vi(t))Ki.call(t,o)&&Qi(e,o,t[o]);return e},Zi=(e,t)=>Ui(e,Gi(t)),Xi=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?qi(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ni(t,o,n),n},er=(e,t,o)=>t.has(e)||Yi("Cannot "+o),tr=new Map,or=new WeakMap;function ir(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function rr(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function nr(e,t){tr.set(e,ir(t))}function sr(e,t,o){const i=or.get(e);if(null==i?void 0:i[t])return rr(i[t],o.dir);const r=tr.get(t);return r?rr(r,o.dir):{keyframes:[],options:{duration:0}}}var ar=p`
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
`,lr=p`
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
`;const cr=new Set,dr=new Map;let hr,pr="ltr",ur="en";const gr="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(gr){const e=new MutationObserver(br);pr=document.documentElement.dir||"ltr",ur=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function mr(...e){e.map((e=>{const t=e.$code.toLowerCase();dr.has(t)?dr.set(t,Object.assign(Object.assign({},dr.get(t)),e)):dr.set(t,e),hr||(hr=e)})),br()}function br(){gr&&(pr=document.documentElement.dir||"ltr",ur=document.documentElement.lang||navigator.language),[...cr.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){cr.add(this.host)}hostDisconnected(){cr.delete(this.host)}dir(){return`${this.host.dir||pr}`.toLowerCase()}lang(){return`${this.host.lang||ur}`.toLowerCase()}getTranslationData(e){var t,o;const i=new Intl.Locale(e.replace(/_/g,"-")),r=null==i?void 0:i.language.toLowerCase(),n=null!==(o=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:r,region:n,primary:dr.get(`${r}-${n}`),secondary:dr.get(r)}}exists(e,t){var o;const{primary:i,secondary:r}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||r&&r[e]||t.includeFallback&&hr&&hr[e])}term(e,...t){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let r;if(o&&o[e])r=o[e];else if(i&&i[e])r=i[e];else{if(!hr||!hr[e])return String(e);r=hr[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var fr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};mr(fr);var vr=fr,wr=class extends LocalizeController{};mr(vr);var yr,_r=p`
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
`,kr=class extends lit_element_r{constructor(){var e,t,o;super(),e=this,o=!1,(t=yr).has(e)?Yi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,Ji({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const i=customElements.get(e);if(!i){try{customElements.define(e,t,o)}catch(i){customElements.define(e,class extends t{},o)}return}let r=" (unknown version)",n=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in i&&i.version&&(n=" v"+i.version)}attributeChangedCallback(e,t,o){var i,r,n;er(i=this,r=yr,"read from private field"),(n?n.call(i):r.get(i))||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,o,i)=>{er(e,t,"write to private field"),i?i.call(e,o):t.set(e,o)})(this,yr,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)}))}};yr=new WeakMap,kr.version="2.19.1",kr.dependencies={},Xi([we()],kr.prototype,"dir",2),Xi([we()],kr.prototype,"lang",2);const $r=Math.min,xr=Math.max,Cr=Math.round,Sr=Math.floor,Pr=e=>({x:e,y:e}),Or={left:"right",right:"left",bottom:"top",top:"bottom"},Rr={start:"end",end:"start"};function Ar(e,t,o){return xr(e,$r(t,o))}function Ir(e,t){return"function"==typeof e?e(t):e}function Tr(e){return e.split("-")[0]}function Dr(e){return e.split("-")[1]}function Er(e){return"x"===e?"y":"x"}function Lr(e){return"y"===e?"height":"width"}function Br(e){return["top","bottom"].includes(Tr(e))?"y":"x"}function Fr(e){return Er(Br(e))}function Wr(e){return e.replace(/start|end/g,(e=>Rr[e]))}function zr(e){return e.replace(/left|right|bottom|top/g,(e=>Or[e]))}function Mr(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function jr(e){const{x:t,y:o,width:i,height:r}=e;return{width:i,height:r,top:o,left:t,right:t+i,bottom:o+r,x:t,y:o}}function Nr(e,t,o){let{reference:i,floating:r}=e;const n=Br(t),a=Fr(t),l=Lr(a),c=Tr(t),d="y"===n,h=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,u=i[l]/2-r[l]/2;let g;switch(c){case"top":g={x:h,y:i.y-r.height};break;case"bottom":g={x:h,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:p};break;case"left":g={x:i.x-r.width,y:p};break;default:g={x:i.x,y:i.y}}switch(Dr(t)){case"start":g[a]-=u*(o&&d?-1:1);break;case"end":g[a]+=u*(o&&d?-1:1)}return g}async function Ur(e,t){var o;void 0===t&&(t={});const{x:i,y:r,platform:n,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=Ir(t,e),m=Mr(g),f=l[u?"floating"===p?"reference":"floating":p],v=jr(await n.getClippingRect({element:null==(o=await(null==n.isElement?void 0:n.isElement(f)))||o?f:f.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),w="floating"===p?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==n.getOffsetParent?void 0:n.getOffsetParent(l.floating)),_=await(null==n.isElement?void 0:n.isElement(y))&&await(null==n.getScale?void 0:n.getScale(y))||{x:1,y:1},$=jr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:y,strategy:c}):w);return{top:(v.top-$.top+m.top)/_.y,bottom:($.bottom-v.bottom+m.bottom)/_.y,left:(v.left-$.left+m.left)/_.x,right:($.right-v.right+m.right)/_.x}}function qr(){return"undefined"!=typeof window}function Gr(e){return Kr(e)?(e.nodeName||"").toLowerCase():"#document"}function Vr(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Hr(e){var t;return null==(t=(Kr(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Kr(e){return!!qr()&&(e instanceof Node||e instanceof Vr(e).Node)}function Yr(e){return!!qr()&&(e instanceof Element||e instanceof Vr(e).Element)}function Qr(e){return!!qr()&&(e instanceof HTMLElement||e instanceof Vr(e).HTMLElement)}function Jr(e){return!(!qr()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof Vr(e).ShadowRoot)}function Zr(e){const{overflow:t,overflowX:o,overflowY:i,display:r}=nn(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(r)}function Xr(e){return["table","td","th"].includes(Gr(e))}function en(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function tn(e){const t=on(),o=Yr(e)?nn(e):e;return["transform","translate","scale","rotate","perspective"].some((e=>!!o[e]&&"none"!==o[e]))||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","translate","scale","rotate","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function on(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function rn(e){return["html","body","#document"].includes(Gr(e))}function nn(e){return Vr(e).getComputedStyle(e)}function sn(e){return Yr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function an(e){if("html"===Gr(e))return e;const t=e.assignedSlot||e.parentNode||Jr(e)&&e.host||Hr(e);return Jr(t)?t.host:t}function ln(e){const t=an(e);return rn(t)?e.ownerDocument?e.ownerDocument.body:e.body:Qr(t)&&Zr(t)?t:ln(t)}function cn(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=ln(e),n=r===(null==(i=e.ownerDocument)?void 0:i.body),a=Vr(r);if(n){const e=dn(a);return t.concat(a,a.visualViewport||[],Zr(r)?r:[],e&&o?cn(e):[])}return t.concat(r,cn(r,[],o))}function dn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function hn(e){const t=nn(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Qr(e),n=r?e.offsetWidth:o,a=r?e.offsetHeight:i,l=Cr(o)!==n||Cr(i)!==a;return l&&(o=n,i=a),{width:o,height:i,$:l}}function pn(e){return Yr(e)?e:e.contextElement}function un(e){const t=pn(e);if(!Qr(t))return Pr(1);const o=t.getBoundingClientRect(),{width:i,height:r,$:n}=hn(t);let a=(n?Cr(o.width):o.width)/i,l=(n?Cr(o.height):o.height)/r;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const gn=Pr(0);function mn(e){const t=Vr(e);return on()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:gn}function bn(e,t,o,i){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),n=pn(e);let a=Pr(1);t&&(i?Yr(i)&&(a=un(i)):a=un(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Vr(e))&&t}(n,o,i)?mn(n):Pr(0);let c=(r.left+l.x)/a.x,d=(r.top+l.y)/a.y,h=r.width/a.x,p=r.height/a.y;if(n){const e=Vr(n),t=i&&Yr(i)?Vr(i):i;let o=e,r=dn(o);for(;r&&i&&t!==o;){const e=un(r),t=r.getBoundingClientRect(),i=nn(r),n=t.left+(r.clientLeft+parseFloat(i.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(i.paddingTop))*e.y;c*=e.x,d*=e.y,h*=e.x,p*=e.y,c+=n,d+=a,o=Vr(r),r=dn(o)}}return jr({width:h,height:p,x:c,y:d})}function fn(e,t){const o=sn(e).scrollLeft;return t?t.left+o:bn(Hr(e)).left+o}function vn(e,t,o){void 0===o&&(o=!1);const i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-(o?0:fn(e,i)),y:i.top+t.scrollTop}}function wn(e,t,o){let i;if("viewport"===t)i=function(e,t){const o=Vr(e),i=Hr(e),r=o.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,c=0;if(r){n=r.width,a=r.height;const e=on();(!e||e&&"fixed"===t)&&(l=r.offsetLeft,c=r.offsetTop)}return{width:n,height:a,x:l,y:c}}(e,o);else if("document"===t)i=function(e){const t=Hr(e),o=sn(e),i=e.ownerDocument.body,r=xr(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=xr(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+fn(e);const l=-o.scrollTop;return"rtl"===nn(i).direction&&(a+=xr(t.clientWidth,i.clientWidth)-r),{width:r,height:n,x:a,y:l}}(Hr(e));else if(Yr(t))i=function(e,t){const o=bn(e,!0,"fixed"===t),i=o.top+e.clientTop,r=o.left+e.clientLeft,n=Qr(e)?un(e):Pr(1);return{width:e.clientWidth*n.x,height:e.clientHeight*n.y,x:r*n.x,y:i*n.y}}(t,o);else{const o=mn(e);i={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return jr(i)}function yn(e,t){const o=an(e);return!(o===t||!Yr(o)||rn(o))&&("fixed"===nn(o).position||yn(o,t))}function _n(e,t,o){const i=Qr(t),r=Hr(t),n="fixed"===o,a=bn(e,!0,n,t);let l={scrollLeft:0,scrollTop:0};const c=Pr(0);if(i||!i&&!n)if(("body"!==Gr(t)||Zr(r))&&(l=sn(t)),i){const e=bn(t,!0,n,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else r&&(c.x=fn(r));const d=!r||i||n?Pr(0):vn(r,l);return{x:a.left+l.scrollLeft-c.x-d.x,y:a.top+l.scrollTop-c.y-d.y,width:a.width,height:a.height}}function kn(e){return"static"===nn(e).position}function $n(e,t){if(!Qr(e)||"fixed"===nn(e).position)return null;if(t)return t(e);let o=e.offsetParent;return Hr(e)===o&&(o=o.ownerDocument.body),o}function xn(e,t){const o=Vr(e);if(en(e))return o;if(!Qr(e)){let t=an(e);for(;t&&!rn(t);){if(Yr(t)&&!kn(t))return t;t=an(t)}return o}let i=$n(e,t);for(;i&&Xr(i)&&kn(i);)i=$n(i,t);return i&&rn(i)&&kn(i)&&!tn(i)?o:i||function(e){let t=an(e);for(;Qr(t)&&!rn(t);){if(tn(t))return t;if(en(t))return null;t=an(t)}return null}(e)||o}const Cn={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:i,strategy:r}=e;const n="fixed"===r,a=Hr(i),l=!!t&&en(t.floating);if(i===a||l&&n)return o;let c={scrollLeft:0,scrollTop:0},d=Pr(1);const h=Pr(0),p=Qr(i);if((p||!p&&!n)&&(("body"!==Gr(i)||Zr(a))&&(c=sn(i)),Qr(i))){const e=bn(i);d=un(i),h.x=e.x+i.clientLeft,h.y=e.y+i.clientTop}const u=!a||p||n?Pr(0):vn(a,c,!0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-c.scrollLeft*d.x+h.x+u.x,y:o.y*d.y-c.scrollTop*d.y+h.y+u.y}},getDocumentElement:Hr,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:r}=e;const n=[..."clippingAncestors"===o?en(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let i=cn(e,[],!1).filter((e=>Yr(e)&&"body"!==Gr(e))),r=null;const n="fixed"===nn(e).position;let a=n?an(e):e;for(;Yr(a)&&!rn(a);){const t=nn(a),o=tn(a);o||"fixed"!==t.position||(r=null),(n?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||Zr(a)&&!o&&yn(e,a))?i=i.filter((e=>e!==a)):r=t,a=an(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=n[0],l=n.reduce(((e,o)=>{const i=wn(t,o,r);return e.top=xr(i.top,e.top),e.right=$r(i.right,e.right),e.bottom=$r(i.bottom,e.bottom),e.left=xr(i.left,e.left),e}),wn(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:xn,getElementRects:async function(e){const t=this.getOffsetParent||xn,o=this.getDimensions,i=await o(e.floating);return{reference:_n(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=hn(e);return{width:t,height:o}},getScale:un,isElement:Yr,isRTL:function(e){return"rtl"===nn(e).direction}};function Sn(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Pn(e,t,o,i){void 0===i&&(i={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=i,d=pn(e),h=r||n?[...d?cn(d):[],...cn(t)]:[];h.forEach((e=>{r&&e.addEventListener("scroll",o,{passive:!0}),n&&e.addEventListener("resize",o)}));const p=d&&l?function(e,t){let o,i=null;const r=Hr(e);function n(){var e;clearTimeout(o),null==(e=i)||e.disconnect(),i=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),n();const d=e.getBoundingClientRect(),{left:h,top:p,width:u,height:g}=d;if(l||t(),!u||!g)return;const m={rootMargin:-Sr(p)+"px "+-Sr(r.clientWidth-(h+u))+"px "+-Sr(r.clientHeight-(p+g))+"px "+-Sr(h)+"px",threshold:xr(0,$r(1,c))||1};let f=!0;function v(t){const i=t[0].intersectionRatio;if(i!==c){if(!f)return a();i?a(!1,i):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}1!==i||Sn(d,e.getBoundingClientRect())||a(),f=!1}try{i=new IntersectionObserver(v,{...m,root:r.ownerDocument})}catch(e){i=new IntersectionObserver(v,m)}i.observe(e)}(!0),n}(d,o):null;let u,g=-1,m=null;a&&(m=new ResizeObserver((e=>{let[i]=e;i&&i.target===d&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),o()})),d&&!c&&m.observe(d),m.observe(t));let f=c?bn(e):null;return c&&function t(){const i=bn(e);f&&!Sn(f,i)&&o();f=i,u=requestAnimationFrame(t)}(),o(),()=>{var e;h.forEach((e=>{r&&e.removeEventListener("scroll",o),n&&e.removeEventListener("resize",o)})),null==p||p(),null==(e=m)||e.disconnect(),m=null,c&&cancelAnimationFrame(u)}}const On=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:r,y:n,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:o,platform:i,elements:r}=e,n=await(null==i.isRTL?void 0:i.isRTL(r.floating)),a=Tr(o),l=Dr(o),c="y"===Br(o),d=["left","top"].includes(a)?-1:1,h=n&&c?-1:1,p=Ir(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*h,y:u*d}:{x:u*d,y:g*h}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:r+c.x,y:n+c.y,data:{...c,placement:a}}}}},Rn=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:r}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=Ir(e,t),d={x:o,y:i},h=await Ur(t,c),p=Br(Tr(r)),u=Er(p);let g=d[u],m=d[p];if(n){const e="y"===u?"bottom":"right";g=Ar(g+h["y"===u?"top":"left"],g,g-h[e])}if(a){const e="y"===p?"bottom":"right";m=Ar(m+h["y"===p?"top":"left"],m,m-h[e])}const f=l.fn({...t,[u]:g,[p]:m});return{...f,data:{x:f.x-o,y:f.y-i,enabled:{[u]:n,[p]:a}}}}}},An=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:r,middlewareData:n,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...v}=Ir(e,t);if(null!=(o=n.arrow)&&o.alignmentOffset)return{};const w=Tr(r),y=Br(l),_=Tr(l)===l,$=await(null==c.isRTL?void 0:c.isRTL(d.floating)),x=u||(_||!f?[zr(l)]:function(e){const t=zr(e);return[Wr(e),t,Wr(t)]}(l)),C="none"!==m;!u&&C&&x.push(...function(e,t,o,i){const r=Dr(e);let n=function(e,t,o){const i=["left","right"],r=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:i:t?i:r;case"left":case"right":return t?n:a;default:return[]}}(Tr(e),"start"===o,i);return r&&(n=n.map((e=>e+"-"+r)),t&&(n=n.concat(n.map(Wr)))),n}(l,f,m,$));const S=[l,...x],P=await Ur(t,v),O=[];let A=(null==(i=n.flip)?void 0:i.overflows)||[];if(h&&O.push(P[w]),p){const e=function(e,t,o){void 0===o&&(o=!1);const i=Dr(e),r=Fr(e),n=Lr(r);let a="x"===r?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[n]>t.floating[n]&&(a=zr(a)),[a,zr(a)]}(r,a,$);O.push(P[e[0]],P[e[1]])}if(A=[...A,{placement:r,overflows:O}],!O.every((e=>e<=0))){var T,D;const e=((null==(T=n.flip)?void 0:T.index)||0)+1,t=S[e];if(t)return{data:{index:e,overflows:A},reset:{placement:t}};let o=null==(D=A.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:D.placement;if(!o)switch(g){case"bestFit":{var E;const e=null==(E=A.filter((e=>{if(C){const t=Br(e.placement);return t===y||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(o=e);break}case"initialPlacement":o=l}if(r!==o)return{reset:{placement:o}}}return{}}}},In=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,i;const{placement:r,rects:n,platform:a,elements:l}=t,{apply:c=()=>{},...d}=Ir(e,t),h=await Ur(t,d),p=Tr(r),u=Dr(r),g="y"===Br(r),{width:m,height:f}=n.floating;let v,w;"top"===p||"bottom"===p?(v=p,w=u===(await(null==a.isRTL?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(w=p,v="end"===u?"top":"bottom");const y=f-h.top-h.bottom,_=m-h.left-h.right,$=$r(f-h[v],y),x=$r(m-h[w],_),C=!t.middlewareData.shift;let S=$,P=x;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(P=_),null!=(i=t.middlewareData.shift)&&i.enabled.y&&(S=y),C&&!u){const e=xr(h.left,0),t=xr(h.right,0),o=xr(h.top,0),i=xr(h.bottom,0);g?P=m-2*(0!==e||0!==t?e+t:xr(h.left,h.right)):S=f-2*(0!==o||0!==i?o+i:xr(h.top,h.bottom))}await c({...t,availableWidth:P,availableHeight:S});const O=await a.getDimensions(l.floating);return m!==O.width||f!==O.height?{reset:{rects:!0}}:{}}}},Tn=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:r,rects:n,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=Ir(e,t)||{};if(null==d)return{};const p=Mr(h),u={x:o,y:i},g=Fr(r),m=Lr(g),f=await a.getDimensions(d),v="y"===g,w=v?"top":"left",y=v?"bottom":"right",_=v?"clientHeight":"clientWidth",$=n.reference[m]+n.reference[g]-u[g]-n.floating[m],x=u[g]-n.reference[g],C=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let S=C?C[_]:0;S&&await(null==a.isElement?void 0:a.isElement(C))||(S=l.floating[_]||n.floating[m]);const P=$/2-x/2,O=S/2-f[m]/2-1,A=$r(p[w],O),T=$r(p[y],O),D=A,E=S-f[m]-T,B=S/2-f[m]/2+P,F=Ar(D,B,E),W=!c.arrow&&null!=Dr(r)&&B!==F&&n.reference[m]/2-(B<D?A:T)-f[m]/2<0,j=W?B<D?B-D:B-E:0;return{[g]:u[g]+j,data:{[g]:F,centerOffset:B-F-j,...W&&{alignmentOffset:j}},reset:W}}}),Dn=(e,t,o)=>{const i=new Map,r={platform:Cn,...o},n={...r.platform,_c:i};return(async(e,t,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:n=[],platform:a}=o,l=n.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:p}=Nr(d,i,c),u=i,g={},m=0;for(let o=0;o<l.length;o++){const{name:n,fn:f}=l[o],{x:v,y:w,data:y,reset:_}=await f({x:h,y:p,initialPlacement:i,placement:u,strategy:r,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=v?v:h,p=null!=w?w:p,g={...g,[n]:{...g[n],...y}},_&&m<=50&&(m++,"object"==typeof _&&(_.placement&&(u=_.placement),_.rects&&(d=!0===_.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):_.rects),({x:h,y:p}=Nr(d,u,c))),o=-1)}return{x:h,y:p,placement:u,strategy:r,middlewareData:g}})(e,t,{...r,platform:n})},En=Mt(class extends directive_i{constructor(e){if(super(e),e.type!==Wt||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return se}});function Ln(e){return Fn(e)}function Bn(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Fn(e){for(let t=e;t;t=Bn(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Bn(e);t;t=Bn(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||tn(e))return t;if("BODY"===t.tagName)return t}}return null}var Wn=class extends kr{constructor(){super(...arguments),this.localize=new wr(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,i=0,r=0,n=0,a=0,l=0,c=0,d=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,i=e.bottom,r=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):(o=t.left,i=t.bottom,r=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):e.left<t.left?(o=e.right,i=e.top,r=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom):(o=t.right,i=t.top,r=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=Pn(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[On({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(In({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(An({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Rn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(In({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Tn({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>Cn.getOffsetParent(e,Ln):Cn.getOffsetParent;Dn(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Zi(Ji({},Cn),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:i})=>{const r="rtl"===this.localize.dir(),n={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let i="",a="",l="",c="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?o:"",c=r?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":o,c=r?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",i="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:l,left:c,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return re`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${En({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${En({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?re`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function zn(e,t){return new Promise((o=>{e.addEventListener(t,(function i(r){r.target===e&&(e.removeEventListener(t,i),o())}))}))}function Mn(e,t,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,Zi(Ji({},o),{duration:Nn()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})}))}function jn(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Nn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Un(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}function qn(e,t){const o=Ji({waitUntilFirstUpdate:!1},t);return(t,i)=>{const{update:r}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),n=this[r];t!==n&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](t,n))}})),r.call(this,e)}}}Wn.styles=[_r,lr],Xi([ke(".popup")],Wn.prototype,"popup",2),Xi([ke(".popup__arrow")],Wn.prototype,"arrowEl",2),Xi([we()],Wn.prototype,"anchor",2),Xi([we({type:Boolean,reflect:!0})],Wn.prototype,"active",2),Xi([we({reflect:!0})],Wn.prototype,"placement",2),Xi([we({reflect:!0})],Wn.prototype,"strategy",2),Xi([we({type:Number})],Wn.prototype,"distance",2),Xi([we({type:Number})],Wn.prototype,"skidding",2),Xi([we({type:Boolean})],Wn.prototype,"arrow",2),Xi([we({attribute:"arrow-placement"})],Wn.prototype,"arrowPlacement",2),Xi([we({attribute:"arrow-padding",type:Number})],Wn.prototype,"arrowPadding",2),Xi([we({type:Boolean})],Wn.prototype,"flip",2),Xi([we({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],Wn.prototype,"flipFallbackPlacements",2),Xi([we({attribute:"flip-fallback-strategy"})],Wn.prototype,"flipFallbackStrategy",2),Xi([we({type:Object})],Wn.prototype,"flipBoundary",2),Xi([we({attribute:"flip-padding",type:Number})],Wn.prototype,"flipPadding",2),Xi([we({type:Boolean})],Wn.prototype,"shift",2),Xi([we({type:Object})],Wn.prototype,"shiftBoundary",2),Xi([we({attribute:"shift-padding",type:Number})],Wn.prototype,"shiftPadding",2),Xi([we({attribute:"auto-size"})],Wn.prototype,"autoSize",2),Xi([we()],Wn.prototype,"sync",2),Xi([we({type:Object})],Wn.prototype,"autoSizeBoundary",2),Xi([we({attribute:"auto-size-padding",type:Number})],Wn.prototype,"autoSizePadding",2),Xi([we({attribute:"hover-bridge",type:Boolean})],Wn.prototype,"hoverBridge",2);var Gn=class extends kr{constructor(){super(),this.localize=new wr(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=jn(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=jn(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Un(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=sr(this,"tooltip.show",{dir:this.localize.dir()});await Mn(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Un(this.body);const{keyframes:e,options:o}=sr(this,"tooltip.hide",{dir:this.localize.dir()});await Mn(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,zn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,zn(this,"sl-after-hide")}render(){return re`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${En({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Gn.styles=[_r,ar],Gn.dependencies={"sl-popup":Wn},Xi([ke("slot:not([name])")],Gn.prototype,"defaultSlot",2),Xi([ke(".tooltip__body")],Gn.prototype,"body",2),Xi([ke("sl-popup")],Gn.prototype,"popup",2),Xi([we()],Gn.prototype,"content",2),Xi([we()],Gn.prototype,"placement",2),Xi([we({type:Boolean,reflect:!0})],Gn.prototype,"disabled",2),Xi([we({type:Number})],Gn.prototype,"distance",2),Xi([we({type:Boolean,reflect:!0})],Gn.prototype,"open",2),Xi([we({type:Number})],Gn.prototype,"skidding",2),Xi([we()],Gn.prototype,"trigger",2),Xi([we({type:Boolean})],Gn.prototype,"hoist",2),Xi([qn("open",{waitUntilFirstUpdate:!0})],Gn.prototype,"handleOpenChange",1),Xi([qn(["content","distance","hoist","placement","skidding"])],Gn.prototype,"handleOptionsChange",1),Xi([qn("disabled")],Gn.prototype,"handleDisabledChange",1),nr("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),nr("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Gn.define("sl-tooltip");var Vn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,Kn=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Hn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Vn(t,o,n),n};nr("tooltip.show",null),nr("tooltip.hide",null);let Yn=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback()}render(){return re`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ae}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};Yn.styles=p`
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
	`,Kn([we()],Yn.prototype,"content",2),Kn([we({reflect:!0})],Yn.prototype,"placement",2),Kn([we({type:Boolean})],Yn.prototype,"disabled",2),Kn([we({type:Number})],Yn.prototype,"distance",2),Kn([we({type:Boolean})],Yn.prototype,"hoist",2),Yn=Kn([be("gl-tooltip")],Yn);var Qn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,Zn=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Jn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Qn(t,o,n),n};let Xn=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom"}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?re`<gl-tooltip .content=${this.tooltip} placement=${ji(this.tooltipPlacement)}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?re`<gl-tooltip placement=${ji(this.tooltipPlacement)}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?re`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:re`<button
			class="control"
			role=${ji(this.role)}
			aria-checked=${ji(this.ariaChecked)}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};Xn.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Xn.styles=[_i,p`
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
				${yi}
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
		`],Zn([ke(".control")],Xn.prototype,"control",2),Zn([we({reflect:!0})],Xn.prototype,"appearance",2),Zn([we({type:Boolean,reflect:!0})],Xn.prototype,"disabled",2),Zn([we({reflect:!0})],Xn.prototype,"density",2),Zn([we({type:Boolean,reflect:!0})],Xn.prototype,"full",2),Zn([we()],Xn.prototype,"href",2),Zn([we({reflect:!0})],Xn.prototype,"role",1),Zn([we()],Xn.prototype,"tooltip",2),Zn([we()],Xn.prototype,"tooltipPlacement",2),Xn=Zn([be("gl-button")],Xn);var es=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,os=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ts(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&es(t,o,n),n};let is=class extends lit_element_r{constructor(){super(...arguments),this.editor=!1}render(){return re`<div class="group"><slot></slot></div>`}};is.styles=[_i,p`
			:host {
				--button-group-gap: 0.4rem;
				--button-group-wide-gap: 1rem;
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
				gap: var(--button-group-gap);
				width: 100%;
				max-width: 30rem;
			}

			:host([gap='wide']) .group {
				gap: var(--button-group-wide-gap);
			}
		`],os([we({type:Boolean})],is.prototype,"editor",2),os([we({reflect:!0})],is.prototype,"gap",2),is=os([be("button-container")],is);const rs=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),ns=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141"});var ss=Object.defineProperty,as=Object.getOwnPropertyDescriptor,ls=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?as(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&ss(t,o,n),n};function cs(e,t=""){return h(Object.entries(e).map((([e,o])=>function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`}(e,o,t))).join(""))}let ds=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};ds.styles=p`
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

		${cs(rs)}
		${cs(ns,"gl-")}

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
	`,ls([we({reflect:!0})],ds.prototype,"icon",2),ls([we({reflect:!0})],ds.prototype,"modifier",2),ls([we({type:Number})],ds.prototype,"size",2),ls([we({reflect:!0})],ds.prototype,"flip",2),ls([we({reflect:!0})],ds.prototype,"rotate",2),ds=ls([be("code-icon")],ds);Wn.define("sl-popup");var hs=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,us=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ps(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&hs(t,o,n),n};let gs=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.relatedTarget&&this.contains(e.relatedTarget))return;this.hide()}},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick)return void(this._skipHideOnClick=!1);if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{const t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{const t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=Xo(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show("hover")),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus()||"hover"!==this._triggeredBy)return;const o=Xo(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),super.disconnectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return re`<sl-popup
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
		</sl-popup>`}async show(e){if(null!=this._triggeredBy&&"hover"===e||(this._triggeredBy=e),!this.open)return this.open=!0,ei(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,ei(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};gs.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},gs.styles=p`
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
	`,us([ke("#popover")],gs.prototype,"body",2),us([ke("sl-popup")],gs.prototype,"popup",2),us([we({reflect:!0})],gs.prototype,"placement",2),us([we({type:Object})],gs.prototype,"anchor",2),us([we({reflect:!0,type:Boolean})],gs.prototype,"disabled",2),us([we({type:Number})],gs.prototype,"distance",2),us([we({reflect:!0,type:Boolean})],gs.prototype,"open",2),us([we({reflect:!0,type:Boolean})],gs.prototype,"arrow",2),us([we({type:Number})],gs.prototype,"skidding",2),us([we()],gs.prototype,"trigger",2),us([we({type:Boolean})],gs.prototype,"hoist",2),us([co("open",{afterFirstUpdate:!0})],gs.prototype,"handleOpenChange",1),us([co(["distance","hoist","placement","skidding"])],gs.prototype,"handleOptionsChange",1),us([co("disabled")],gs.prototype,"handleDisabledChange",1),gs=us([be("gl-popover")],gs);var ms=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,fs=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?bs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&ms(t,o,n),n};let vs=class extends lit_element_r{get accountAvatar(){return this.hasAccount&&this._state.avatar}get accountName(){return this.subscription?.account?.name??""}get accountEmail(){return this.subscription?.account?.email??""}get hasAccount(){return Wi(this.subscriptionState)}get isReactivatedTrial(){return this.subscriptionState===Ti.ProTrial&&(this.subscription?.plan.effective.trialReactivationCount??0)>0}get planId(){return this._state.subscription?.plan.actual.id??Ii.Pro}get planName(){return function(e,t){switch(e){case Ti.Community:case Ti.ProPreviewExpired:return Di(Ii.Community);case Ti.ProPreview:return`${Di(Ii.Pro)} (Preview)`;case Ti.ProTrial:return`${Di(Ii.Pro)} (Trial)`;case Ti.ProTrialExpired:case Ti.ProTrialReactivationEligible:return Di(Ii.CommunityWithAccount);case Ti.VerificationRequired:return`${Di(t??Ii.Pro)} (Unverified)`;default:return Di(t??Ii.Pro)}}(this.subscriptionState,this.planId)}get planTier(){return Ei(this.planId)}get subscription(){return this._state.subscription}get subscriptionState(){return this.subscription?.state}get trialDaysRemaining(){return null==this.subscription?0:Li(this.subscription,"days")??0}focus(){this._chip.focus()}render(){return re`<gl-popover placement="bottom" trigger="hover focus click" hoist>
			<span id="chip" slot="anchor" class="chip" tabindex="0">
				${this.accountAvatar?re`<img class="chip__media" src=${this.accountAvatar} />`:re`<code-icon class="chip__media" icon="gl-gitlens" size="16"></code-icon>`}
				<span>${this.planTier}</span>
			</span>
			<div slot="content" class="content" tabindex="-1">
				<div class="header">
					<span class="header__title">${this.planName}</span>
					<span class="header__actions">
						${this.hasAccount?re`<gl-button
										appearance="toolbar"
										href="${zi("gitlens.views.home.account.resync",{source:"account"})}"
										tooltip="Synchronize Status"
										aria-label="Synchronize Status"
										><code-icon icon="sync"></code-icon
									></gl-button>
									<gl-button
										appearance="toolbar"
										href="${zi("gitlens.plus.manage",{source:"account"})}"
										tooltip="Manage Account"
										aria-label="Manage Account"
										><code-icon icon="gear"></code-icon
									></gl-button>
									<gl-button
										appearance="toolbar"
										href="${zi("gitlens.plus.logout",{source:"account"})}"
										tooltip="Sign Out"
										aria-label="Sign Out"
										><code-icon icon="sign-out"></code-icon
									></gl-button>`:re`<gl-button
									appearance="toolbar"
									href="${zi("gitlens.plus.login",{source:"account"})}"
									tooltip="Sign In"
									aria-label="Sign In"
									><code-icon icon="sign-in"></code-icon
							  ></gl-button>`}
					</span>
				</div>
				${this.renderOrganization()} ${this.renderAccountState()}
			</div>
		</gl-popover>`}show(){this._popover.show(),this.focus()}renderOrganization(){const e=this._state.subscription?.activeOrganization?.name??"";return this.hasAccount&&e?re`<div class="account-org">
			<span class="account">
				<span class="account__media"
					>${this._state.avatar?re`<img class="account__media" src=${this._state.avatar} />`:re`<code-icon class="account__media" icon="gl-gitlens" size="20"></code-icon>`}</span
				>
				<span class="account__details"
					><p class="account__title">${this.accountName}</p>
					<p class="account__email">${this.accountEmail}</p></span
				>
			</span>
			<span class="org">
				<span class="org__media"><code-icon icon="organization" size="20"></code-icon></span>
				<span class="org__details"><p class="org__title">${e}</p></span>
				${xe(this._state.organizationsCount>1,(()=>re`<div class="org__signout">
							<gl-button
								appearance="toolbar"
								href="${zi("gitlens.gk.switchOrganization",{source:"account",detail:{organization:this._state.subscription?.activeOrganization?.id}})}"
								aria-label="Switch Active Organization"
								><span class="org__badge">+${this._state.organizationsCount-1}</span
								><code-icon icon="arrow-swap"></code-icon
								><span slot="tooltip"
									>Switch Active Organization
									<hr />
									You are in
									${qo("organization",this._state.organizationsCount-1,{infix:" other "})}</span
								></gl-button
							>
						</div>`))}
			</span>
		</div>`:ae}renderAccountState(){switch(this.subscriptionState){case Ti.Paid:return re`<div class="account-status">${this.renderIncludesDevEx()}</div> `;case Ti.VerificationRequired:return re`<div class="account-status">
					<p>You must verify your email before you can access Pro features.</p>
					<button-container>
						<gl-button
							full
							href="${zi("gitlens.plus.resendVerification",{source:"account"})}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							href="${zi("gitlens.plus.validate",{source:"account"})}"
							><code-icon size="20" icon="refresh"></code-icon>
						</gl-button>
					</button-container>
				</div>`;case Ti.ProTrial:{const e=this.trialDaysRemaining;return re`<div class="account-status">
					${this.isReactivatedTrial?re`<p>
								<code-icon icon="megaphone"></code-icon>
								See
								<a href="${ko.releaseNotes}">what's new</a>
								in GitLens.
						  </p>`:ae}
					<p>
						You have
						<strong>${e<1?"<1 day":qo("day",e,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					<button-container>
						<gl-button
							full
							href="${zi("gitlens.plus.upgrade",{source:"account"})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo()} ${this.renderIncludesDevEx()}
				</div>`}case Ti.ProTrialExpired:return re`<div class="account-status">
					<p>Thank you for trying <a href="${ko.communityVsPro}">GitLens Pro</a>.</p>
					<p>Continue leveraging Pro features and workflows on privately-hosted repos by upgrading today.</p>
					<button-container>
						<gl-button
							full
							href="${zi("gitlens.plus.upgrade",{source:"account"})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo()} ${this.renderIncludesDevEx()}
				</div>`;case Ti.ProTrialReactivationEligible:return re`<div class="account-status">
					<p>
						Reactivate your GitLens Pro trial and experience all the new Pro features — free for another
						${qo("day",Ai)}.
					</p>
					<button-container>
						<gl-button
							full
							href="${zi("gitlens.plus.reactivateProTrial",{source:"account"})}"
							tooltip="Reactivate your Pro trial for another ${qo("day",Ai)}"
							>Reactivate GitLens Pro Trial</gl-button
						>
					</button-container>
				</div>`;default:return re`<div class="account-status">
					<p>
						Unlock advanced features and workflows on private repos, accelerate reviews, and streamline
						collaboration with
						<a href="${ko.communityVsPro}">GitLens Pro</a>.
					</p>
					<button-container>
						<gl-button
							full
							href="${zi("gitlens.plus.signUp",{source:"account"})}"
							>Try GitLens Pro</gl-button
						>
						<span class="button-suffix"
							>or
							<a
								href="${zi("gitlens.plus.login",{source:"account"})}"
								>sign in</a
							></span
						>
					</button-container>
					<p>Get ${Ai} days of GitLens Pro for free — no credit card required.</p>
				</div>`}}renderIncludesDevEx(){return re`<p>Includes access to <a href="${ko.platform}">GitKraken's DevEx platform</a></p>`}renderPromo(){return re`<gl-promo .promoPromise=${this.promos.getApplicablePromo("account")} source="account"></gl-promo>`}};vs.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},vs.styles=[_i,ki,Mi,p`
			.chip {
				padding-right: 0.6rem;

				font-size: 1.1rem;
				font-weight: 400;
				text-transform: uppercase;
			}

			:host-context(.vscode-dark) .chip,
			:host-context(.vscode-high-contrast) .chip {
				background-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 10%);
			}

			:host-context(.vscode-light) .chip,
			:host-context(.vscode-high-contrast-light) .chip {
				background-color: color-mix(in lab, var(--vscode-sideBar-background), #000 7%);
			}

			.chip__media {
				flex: 0 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.2rem;
			}

			img.chip__media {
				width: 1.6rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
			}

			:host-context(.vscode-dark) img.chip__media,
			:host-context(.vscode-high-contrast) img.chip__media {
				background-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 25%);
			}

			:host-context(.vscode-light) img.chip__media,
			:host-context(.vscode-high-contrast-light) img.chip__media {
				background-color: color-mix(in lab, var(--vscode-sideBar-background), #000 18%);
			}

			.account-org {
				display: flex;
				flex-direction: column;
				gap: 0.2rem;
			}

			.account {
				position: relative;
				display: flex;
				flex-direction: row;
				gap: 0 0.6rem;
				align-items: center;
			}

			.account__media {
				flex: 0 0 auto;
				width: 3.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			img.account__media {
				width: 2rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
			}

			:host-context(.vscode-dark) img.account__media,
			:host-context(.vscode-high-contrast) img.account__media {
				background-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 20%);
			}

			:host-context(.vscode-light) img.account__media,
			:host-context(.vscode-high-contrast-light) img.account__media {
				background-color: color-mix(in lab, var(--vscode-sideBar-background), #000 15%);
			}

			.account__details {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.account__title {
				font-size: 1.3rem;
				font-weight: 600;
				margin: 0;
			}

			.account__email {
				font-size: 1.1rem;
				font-weight: 400;
				margin: 0;
				color: var(--color-foreground--65);
			}

			.org {
				position: relative;
				display: flex;
				flex-direction: row;
				gap: 0 0.6rem;
				align-items: center;
				margin-bottom: 0.6rem;
			}

			.org__media {
				flex: none;
				width: 3.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
				color: var(--color-foreground--65);
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

			.account-status > :first-child {
				margin-block-start: 0;
			}
			.account-status > :last-child {
				margin-block-end: 0;
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

			hr {
				border: none;
				border-top: 1px solid var(--color-foreground--25);
			}
		`],fs([ke("#chip")],vs.prototype,"_chip",2),fs([ke("gl-popover")],vs.prototype,"_popover",2),fs([n({context:Ri,subscribe:!0}),ye()],vs.prototype,"_state",2),fs([n({context:Jo})],vs.prototype,"promos",2),vs=fs([be("gl-account-chip")],vs);var ws=(e=>(e.AddAuthors="gitlens.addAuthors",e.AssociateIssueWithBranch="gitlens.associateIssueWithBranch",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.PastePatchFromClipboard="gitlens.pastePatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GenerateCommitMessageScm="gitlens.scm.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusConnectCloudIntegrations="gitlens.plus.cloudIntegrations.connect",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusContinueFeaturePreview="gitlens.plus.continueFeaturePreview",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.PlusSimulateSubscription="gitlens.plus.simulateSubscription",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowFileInTimeline="gitlens.showFileInTimeline",e.ShowFolderInTimeline="gitlens.showFolderInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLaunchpadView="gitlens.showLaunchpadView",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StartWork="gitlens.startWork",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.WalkthroughConnectIntegrations="gitlens.walkthrough.connectIntegrations",e.WalkthroughGitLensInspect="gitlens.walkthrough.gitlensInspect",e.WalkthroughOpenAcceleratePrReviews="gitlens.walkthrough.openAcceleratePrReviews",e.WalkthroughOpenCommunityVsPro="gitlens.walkthrough.openCommunityVsPro",e.WalkthroughOpenHelpCenter="gitlens.walkthrough.openHelpCenter",e.WalkthroughOpenInteractiveCodeHistory="gitlens.walkthrough.openInteractiveCodeHistory",e.WalkthroughOpenStartIntegrations="gitlens.walkthrough.openStartIntegrations",e.WalkthroughOpenStreamlineCollaboration="gitlens.walkthrough.openStreamlineCollaboration",e.WalkthroughOpenWalkthrough="gitlens.walkthrough.openWalkthrough",e.WalkthroughPlusSignUp="gitlens.walkthrough.plus.signUp",e.WalkthroughPlusUpgrade="gitlens.walkthrough.plus.upgrade",e.WalkthroughPlusReactivate="gitlens.walkthrough.plus.reactivate",e.WalkthroughShowAutolinks="gitlens.walkthrough.showAutolinks",e.WalkthroughShowDraftsView="gitlens.walkthrough.showDraftsView",e.WalkthroughShowGraph="gitlens.walkthrough.showGraph",e.WalkthroughShowLaunchpad="gitlens.walkthrough.showLaunchpad",e.WalkthroughWorktreeCreate="gitlens.walkthrough.worktree.create",e.WalkthoughOpenDevExPlatform="gitlens.walkthrough.openDevExPlatform",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(ws||{});class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ae,e.type!==zt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ae||null==e)return this._t=void 0,this.it=e;if(e===se)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const ys=Mt(unsafe_html_e);class private_async_helpers_s{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class private_async_helpers_i{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((e=>this.q=e))}resume(){this.q?.(),this.Z=this.q=void 0}}const _s=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,ks=1073741823;const $s=Mt(class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=ks,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find((e=>!_s(e)))??se}update(e,t){const o=this._$Cbt;let i=o.length;this._$Cbt=t;const r=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const a=t[e];if(!_s(a))return this._$Cwt=e,a;e<i&&a===o[e]||(this._$Cwt=ks,i=0,Promise.resolve(a).then((async e=>{for(;n.get();)await n.get();const t=r.deref();if(void 0!==t){const o=t._$Cbt.indexOf(a);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}})))}return se}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});var xs=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,Ss=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Cs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&xs(t,o,n),n};let Ps=class extends lit_element_r{constructor(){super(...arguments),this.type="info"}render(){return re`${$s(this.promoPromise.then((e=>this.renderPromo(e))),ae)}`}renderPromo(e){if(!e?.content?.webview)return;const t=e.content.webview;switch(this.type){case"info":if(t.info)return this.setAttribute("has-promo",""),re`<p class="promo">${ys(t.info.html)}</p>`;break;case"link":if(t.link)return this.setAttribute("has-promo",""),re`<a
						class="link"
						href="${this.getCommandUrl(e)}"
						title="${ji(t.link.title)}"
						>${ys(t.link.html)}</a
					>`}return this.removeAttribute("has-promo"),ae}getCommandUrl(e){const t=e?.content?.webview?.link?.command??"command:gitlens.plus.upgrade";return null==this.source?t:`${t}?${encodeURIComponent(JSON.stringify({source:this.source}))}`}};Ps.styles=[p`
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
		`],Ss([we({type:Object})],Ps.prototype,"promoPromise",2),Ss([we({type:String})],Ps.prototype,"source",2),Ss([we({reflect:!0,type:String})],Ps.prototype,"type",2),Ps=Ss([be("gl-promo")],Ps);var Os=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,As=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Rs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Os(t,o,n),n};let Is=class extends lit_element_r{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:Li(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return re`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===Ti.VerificationRequired)return re`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(Fi(this.subscription)||this.cloud&&null!=this.subscription.account)return re`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(t===Ti.ProPreview||t===Ti.ProTrial))return re`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t;return e}renderPopoverHeader(){const e=re`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===Ti.Paid?re`<div class="popup-header">${e}</div>`:this.cloud?this.preview?re`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:re`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?re`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:re`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return ae;let e;switch(this.state){case Ti.Paid:e=re`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${Ts(ws.ShowAccountView,void 0)}"
							>${Di(this.subscription?.plan.actual.id??Ii.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case Ti.VerificationRequired:e=re`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Ts(ws.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${Ts(ws.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case Ti.ProTrial:{const t=this.daysRemaining;e=re`<p>
						You have
						<strong>${t<1?"<1 day":qo("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case Ti.ProTrialExpired:e=re`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(re`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case Ti.ProTrialReactivationEligible:e=re`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${qo("day",Ai)}!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Ts(ws.PlusReactivateProTrial,this.source)}"
							tooltip="Reactivate your Pro trial for another ${qo("day",Ai)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===Ti.ProPreview){const t=this.daysRemaining;e=re`<p>
							You have
							<strong>${t<1?"<1 day":qo("day",t,{infix:" more "})} left</strong>
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
				href="${Ts(ws.PlusSignUp,this.source)}"
				>Start ${Ai}-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${Ts(ws.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return re`<div class="actions">
			${e??ae}
			<gl-button
				appearance="primary"
				density="tight"
				href="${Ts(ws.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return re`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo("badge")}
			.source=${this.source}
		></gl-promo>`}};function Ts(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}Is.styles=[_i,ki,p`
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
				${h(wi)}
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
		`],As([we({type:Boolean})],Is.prototype,"cloud",2),As([we({reflect:!0})],Is.prototype,"placement",2),As([we({type:Boolean})],Is.prototype,"preview",2),As([n({context:Jo})],Is.prototype,"promos",2),As([we({type:Object})],Is.prototype,"source",2),As([we({attribute:!1})],Is.prototype,"subscription",2),Is=As([be("gl-feature-badge")],Is);var Ds=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,Ls=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Es(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ds(t,o,n),n};let Bs=class extends lit_element_r{get hasAccount(){return Wi(this._state.subscription?.state)}get isPaidAccount(){return this._state.subscription?.state===Ti.Paid}get isProAccount(){return e=this._state.subscription?.state,null!=e&&(e===Ti.Paid||e===Ti.ProPreview||e===Ti.ProTrial);var e}get hasConnectedIntegrations(){return this.hasAccount&&this.integrations.some((e=>e.connected))}get integrations(){return this._state.integrations}focus(){this._chip.focus()}render(){const e=this.hasConnectedIntegrations,t=function(e){const t=-1,o=e.reduce(((e,o,i)=>{const r=e[o.icon];return r?o.connected&&r.connectedIndex===t&&(r.connectedIndex=i):e[o.icon]={connectedIndex:o.connected?i:t,firstIndex:i},e}),{});return function(e,i){const r=o[e.icon];return void 0===r||(r.connectedIndex!==t?r.connectedIndex===i:r.firstIndex===i)}}(this.integrations);return re`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip" tabindex="0"
				>${e?"":re`<span class="chip__label">Connect</span>`}${this.integrations.filter(t).map((t=>this.renderIntegrationStatus(t,e)))}</span
			>
			<div slot="content" class="content">
				<div class="header">
					<span class="header__title">Integrations</span>
					<span class="header__actions"></span>
						<gl-button
							appearance="toolbar"
							href="${zi("gitlens.views.home.account.resync",{source:"home",detail:"integrations"})}"
							tooltip="Synchronize Status"
							aria-label="Synchronize Status"
							><code-icon icon="sync"></code-icon
						></gl-button>
						<gl-button
							appearance="toolbar"
							href="${zi("gitlens.plus.cloudIntegrations.manage",{source:"home"})}"
							tooltip="Manage Integrations"
							aria-label="Manage Integrations"
							><code-icon icon="gear"></code-icon></gl-button
					></span>
				</div>
				<div class="integrations">${e?this.integrations.map((e=>this.renderIntegrationRow(e))):re`<p>
									Connect hosting services like <strong>GitHub</strong> and issue trackers like
									<strong>Jira</strong> to track progress and take action on PRs and issues related to
									your branches.
								</p>
								<button-container>
									<gl-button
										full
										href="${zi("gitlens.plus.cloudIntegrations.connect",{integrationIds:this.integrations.map((e=>e.id)),source:"home"})}"
										>Connect Integrations</gl-button
									>
								</button-container>`}</div>
			</div>
		</gl-popover>`}renderIntegrationStatus(e,t){return e.requiresPro&&!this.isProAccount?re`<span
				class="integration status--${e.connected?"connected":"disconnected"} is-locked"
				slot="anchor"
				><code-icon icon="${e.icon}"></code-icon
				><code-icon class="status-indicator" icon="lock" size="12"></code-icon
			></span>`:re`<span
			class="integration status--${e.connected?"connected":"disconnected"}"
			slot="anchor"
			><code-icon icon="${e.icon}"></code-icon>${t?re`<code-icon
						class="status-indicator"
						icon="${e.connected?"check":"gl-unplug"}"
						size="12"
				  ></code-icon>`:ae}</span
		>`}renderIntegrationRow(e){const t=e.requiresPro&&!this.isProAccount,o=e.requiresPro&&!this.isPaidAccount;return re`<div
			class="integration-row status--${e.connected?"connected":"disconnected"}${t?" is-locked":""}"
		>
			<span class="integration__icon"><code-icon icon="${e.icon}"></code-icon></span>
			<span class="integration__content">
				<span class="integration__title">
					<span>${e.name}</span>
					${o?re` <gl-feature-badge
								placement="right"
								.source=${{source:"account",detail:"integrations"}}
								cloud
						  ></gl-feature-badge>`:ae}
				</span>
				<span class="integration__details">${function(e){const t=e.supports.map((e=>Fs.get(e)));if(0===t.length)return"";if(1===t.length)return`Supports ${t[0]}`;const o=t.pop();return`Supports ${t.join(", ")} and ${o}`}(e)}</span>
			</span>
			<span class="integration__actions">
				${t?re`<gl-button
							appearance="toolbar"
							href="${zi("gitlens.plus.upgrade",{source:"account"})}"
							tooltip="Unlock ${e.name} features with GitLens Pro"
							aria-label="Unlock ${e.name} features with GitLens Pro"
							><code-icon class="status-indicator" icon="lock"></code-icon
					  ></gl-button>`:e.connected?re`<gl-tooltip
								class="status-indicator status--connected"
								placement="bottom"
								content="Connected"
								><code-icon class="status-indicator" icon="check"></code-icon
					    ></gl-tooltip>`:re`<gl-button
								appearance="toolbar"
								href="${zi("gitlens.plus.cloudIntegrations.connect",{integrationIds:[e.id],source:"account"})}"
								tooltip="Connect ${e.name}"
								aria-label="Connect ${e.name}"
								><code-icon icon="plug"></code-icon
					    ></gl-button>`}
			</span>
		</div>`}};Bs.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Bs.styles=[_i,ki,Mi,p`
			.chip {
				gap: 0.8rem;
				padding: 0.2rem 0.4rem 0.4rem 0.4rem;
				align-items: baseline;
			}

			.chip__label {
				font-size: 1.1rem;
				font-weight: 400;
				text-transform: uppercase;
				color: var(--color-foreground--75);
				margin-right: 0.4rem;
			}

			.integration {
				white-space: nowrap;
			}

			.content {
				gap: 0.6rem;
			}

			:host-context(.vscode-dark),
			:host-context(.vscode-high-contrast) {
				--status-color--connected: #00dd00;
			}

			:host-context(.vscode-light),
			:host-context(.vscode-high-contrast-light) {
				--status-color--connected: #00aa00;
			}

			.status--disconnected.integration {
				color: var(--color-foreground--25);
			}

			.status--connected:not(.is-locked) .status-indicator {
				color: var(--status-color--connected);
			}

			gl-tooltip.status-indicator {
				margin-right: 0.4rem;
			}

			.integrations {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				width: 100%;
			}

			.integration-row {
				display: flex;
				gap: 1rem;
				align-items: center;
			}

			.status--disconnected .integration__icon {
				color: var(--color-foreground--25);
			}

			.integration__content {
				flex: 1 1 auto;
				display: block;
			}

			.integration__title {
				display: flex;
				justify-content: space-between;
			}

			.integration__title gl-feature-badge {
				vertical-align: super;
			}

			.integration__details {
				display: block;
				color: var(--color-foreground--75);
				font-size: 1rem;
			}

			.status--disconnected .integration__title,
			.status--disconnected .integration__details {
				color: var(--color-foreground--50);
			}

			.integration__actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: flex-start;
				justify-content: flex-end;
			}

			button-container {
				margin-bottom: 0.4rem;
				width: 100%;
			}

			p {
				margin: 0;
			}
		`],Ls([ke("#chip")],Bs.prototype,"_chip",2),Ls([n({context:Ri,subscribe:!0}),ye()],Bs.prototype,"_state",2),Bs=Ls([be("gl-integrations-chip")],Bs);const Fs=new Map([["prs","Pull Requests"],["issues","Issues"]]);var Ws=Object.defineProperty,zs=Object.getOwnPropertyDescriptor,Ms=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?zs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ws(t,o,n),n};let js=class extends lit_element_r{constructor(){super(...arguments),this.onDismissWalkthrough=()=>{this._state.walkthroughProgress=void 0,this._ipc.sendCommand(je),this.requestUpdate()}}render(){if(null!=this._state.walkthroughProgress)return re`<gl-button
				@click=${this.onDismissWalkthrough}
				class="walkthrough-progress__button"
				appearance="toolbar"
				tooltip="Dismiss"
				aria-label="Dismiss"
				><code-icon icon="x"></code-icon
			></gl-button>
			<gl-tooltip placement="bottom" content="Open Walkthrough">
				<a
					class="walkthrough-progress"
					href=${zi("gitlens.openWalkthrough",{source:{source:"home",detail:"onboarding"}})}
				>
					<header class="walkthrough-progress__title">
						<span
							>GitLens Walkthrough
							(${this._state.walkthroughProgress.doneCount}/${this._state.walkthroughProgress.allCount})</span
						>
					</header>
					<progress
						class="walkthrough-progress__bar"
						value=${this._state.walkthroughProgress.progress}
					></progress>
				</a>
			</gl-tooltip>`}};js.styles=[xi,Oi],Ms([n({context:Ri,subscribe:!0}),ye()],js.prototype,"_state",2),Ms([n({context:ho,subscribe:!0}),ye()],js.prototype,"_ipc",2),js=Ms([be("gl-onboarding")],js);var Ns=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,qs=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Us(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ns(t,o,n),n};let Gs=class extends lit_element_r{render(){return re`<gl-promo-banner></gl-promo-banner>
			<div class="container" tabindex="-1">
				<span class="group"><gl-account-chip></gl-account-chip></span>
				<gl-integrations-chip></gl-integrations-chip>
			</div>
			<gl-onboarding></gl-onboarding>`}show(){this.accountChip.show()}};function Vs(e,t,o,i){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:o,...i}))}`}Gs.styles=[_i,ki,p`
			:host {
				display: block;
			}

			.container {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 0.6rem;
			}

			.container:focus,
			.container:focus-within {
				outline: none;
			}

			/* .actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			} */

			gl-promo-banner {
				margin: 0 0.2rem 0.6rem;
			}

			gl-promo-banner:has(gl-promo:not([has-promo])) {
				display: none;
			}

			.group {
				display: flex;
				align-items: center;
				gap: 0.4rem;
			}
		`],qs([ke("gl-account-chip")],Gs.prototype,"accountChip",2),Gs=qs([be("gl-home-header")],Gs);const Hs=p`
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
`,Ks=new Map([["current-branch","$(git-branch)"],["pinned","$(pinned)"],["mergeable","$(rocket)"],["blocked","$(error)"],["follow-up","$(report)"],["needs-review","$(comment-unresolved)"],["waiting-for-review","$(gitlens-clock)"],["draft","$(git-pull-request-draft)"],["other","$(ellipsis)"],["snoozed","$(bell-slash)"]]),Ys=new Map([["current-branch","Current Branch"],["pinned","Pinned"],["mergeable","Ready to Merge"],["blocked","Blocked"],["follow-up","Requires Follow-up"],["needs-review","Needs Your Review"],["waiting-for-review","Waiting for Review"],["draft","Draft"],["other","Other"],["snoozed","Snoozed"]]),Qs=new Map([["mergeable","mergeable"],["conflicts","blocked"],["failed-checks","blocked"],["unassigned-reviewers","blocked"],["needs-my-review","needs-review"],["code-suggestions","follow-up"],["changes-requested","follow-up"],["reviewer-commented","follow-up"],["waiting-for-review","waiting-for-review"],["draft","draft"],["other","other"]]),Js=new Map([["mergeable",["Ready to Merge","Ready to merge"]],["unassigned-reviewers",["Unassigned Reviewers","You need to assign reviewers"]],["failed-checks",["Failed Checks","You need to resolve the failing checks"]],["conflicts",["Resolve Conflicts","You need to resolve merge conflicts"]],["needs-my-review",["Needs Your Review","${author} requested your review"]],["code-suggestions",["Code Suggestions","Code suggestions have been made on this pull request"]],["changes-requested",["Changes Requested","Reviewers requested changes before this can be merged"]],["reviewer-commented",["Reviewers Commented","Reviewers have commented on this pull request"]],["waiting-for-review",["Waiting for Review","Waiting for reviewers to approve this pull request"]],["draft",["Draft","Continue working on your draft"]],["other",["Other","Opened by ${author} ${createdDateRelative}"]]]);var Zs=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,ea=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Xs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Zs(t,o,n),n};let ta=class extends lit_element_r{constructor(){super(...arguments),this.size=12,this.worktree=!1}render(){return re`<span class="${this.worktree?"worktree":"branch"}"
			><code-icon
				class="icon"
				icon="${this.worktree?"gl-worktrees-view":"git-branch"}"
				size="${this.size}"
			></code-icon
			><span class="label">${this.name??"<missing>"}</span></span
		>`}};function oa(e,t){return re`<gl-branch-name .name=${e} .size=${12} ?worktree=${t??!1}></gl-branch-name>`}ta.styles=p`
		:host {
			display: inline-block;
			max-width: 100%;
			align-content: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			vertical-align: middle;
			margin-top: -3px;
		}

		.icon {
			margin: 0 0.3rem 0.1rem 0.2rem;
		}

		.worktree .icon {
			margin-right: 0.4rem;
		}

		.label {
			font-weight: bold;
		}
	`,ea([we({type:String})],ta.prototype,"name",2),ea([we({type:Number})],ta.prototype,"size",2),ea([we({type:Boolean})],ta.prototype,"worktree",2),ta=ea([be("gl-branch-name")],ta);var ia=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,na=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ra(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&ia(t,o,n),n};let sa=class extends lit_element_r{render(){return this.name?re`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?re`<a href=${this.href} class="avatar">${this.renderContent()}</a>`:re`<span class="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?re`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:re`<slot class="thumb thumb--text"></slot>`}};sa.styles=[p`
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
				justify-content: center;
			}

			.thumb {
				border-radius: 50%;
			}

			.thumb--text {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: clamp(0.8rem, calc(var(--gl-avatar-size, 1.6rem) * 0.5), 1.1rem);
				line-height: 1;
				text-transform: uppercase;
				cursor: default;
				color: var(--vscode-descriptionForeground);
			}

			.thumb--media {
				display: block;
				width: 100%;
				height: auto;
				object-fit: cover;
				object-position: 50% 50%;
			}
		`],na([we()],sa.prototype,"src",2),na([we()],sa.prototype,"name",2),na([we()],sa.prototype,"href",2),sa=na([be("gl-avatar")],sa);var aa=Object.defineProperty,la=Object.getOwnPropertyDescriptor,ca=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?la(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&aa(t,o,n),n};let da=class extends lit_element_r{constructor(){super(...arguments),this.max=3,this.avatars=[]}render(){return re`<gl-avatar-group>${this.renderList()}</gl-avatar-group>`}renderList(){const e=this.avatars.slice(0,this.max),t=this.avatars.slice(this.max);return re`
			${e.map((e=>re`<gl-avatar .src=${e.src} .name=${e.name} .href=${e.href}></gl-avatar>`))}
			${xe(t.length>0,(()=>re`<gl-popover>
						<gl-avatar slot="anchor" class="overflow">+${t.length}</gl-avatar>
						<div slot="content" class="overflow-list">
							${t.map((e=>re`<gl-avatar
										.src=${e.src}
										.name=${e.name}
										.href=${e.href}
									></gl-avatar>`))}
						</div>
					</gl-popover>`))}
		`}};ca([we({type:Number})],da.prototype,"max",2),ca([we({type:Array})],da.prototype,"avatars",2),da=ca([be("gl-avatar-list")],da);let ha=class extends lit_element_r{render(){return re`<slot class="avatar-group" part="base"></slot>`}};ha.styles=[p`
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
		`],ha=ca([be("gl-avatar-group")],ha);var pa=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,ga=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ua(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&pa(t,o,n),n};const ma=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","trash"]]]);let ba=class extends lit_element_r{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return ma.map((([e,t])=>this.renderStat(e,t)))}renderStat(e,t){const o=this[e];return null==o?ae:re`<span class="stat ${e}" aria-label="${o} ${e}"
			><span class="label">${this.renderSymbol(t)}${o}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?re`<code-icon class="icon" icon="${t}"></code-icon>`:re`<span>${e}</span>`}};ba.styles=p`
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
	`,ga([we({type:Number})],ba.prototype,"added",2),ga([we({type:Number})],ba.prototype,"modified",2),ga([we({type:Number})],ba.prototype,"removed",2),ga([we()],ba.prototype,"symbol",2),ba=ga([be("commit-stats")],ba);var fa=Object.defineProperty,va=Object.getOwnPropertyDescriptor,wa=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?va(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&fa(t,o,n),n};let ya=class extends lit_element_r{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}render(){const e=Do(this.date,this.format??"MMMM Do, YYYY h:mma");return re`<gl-tooltip content="${this.tooltip} ${e}"
			><time datetime="${this.date.toISOString()}"
				>${"relative"===this.dateStyle?To(this.date):e}</time
			></gl-tooltip
		>`}};wa([we()],ya.prototype,"format",2),wa([we({attribute:"date-style"})],ya.prototype,"dateStyle",2),wa([we({converter:{toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))},reflect:!0})],ya.prototype,"date",2),wa([we()],ya.prototype,"tooltip",2),ya=wa([be("formatted-date")],ya);const _a=p`
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
`;var ka=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,xa=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?$a(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&ka(t,o,n),n};let Ca=class extends lit_element_r{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?re`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:re`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="check"></code-icon></span>
			</span>`:ae:re`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${xe(this.behind>0,(()=>re`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`))}${xe(this.ahead>0,(()=>re`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`))}${xe(this.working>0,(()=>re`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`))}</span
		>`}};Ca.styles=[_a,p`
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
		`],xa([we({type:Number})],Ca.prototype,"ahead",2),xa([we({type:Number})],Ca.prototype,"behind",2),xa([we({type:Number})],Ca.prototype,"working",2),xa([we({type:Boolean,attribute:"always-show"})],Ca.prototype,"alwaysShow",2),xa([we({type:Boolean})],Ca.prototype,"outlined",2),xa([we({type:Boolean})],Ca.prototype,"colorized",2),xa([we({type:Boolean})],Ca.prototype,"missingUpstream",2),Ca=xa([be("gl-tracking-pill")],Ca);const Sa=p`
	.issue-icon--opened {
		color: var(--vscode-gitlens-openAutolinkedIssueIconColor);
	}
	.issue-icon--closed {
		color: var(--vscode-gitlens-closedAutolinkedIssueIconColor);
	}
`;var Pa=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,Ra=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Oa(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Pa(t,o,n),n};let Aa=class extends lit_element_r{get icon(){let e="issues";if(this.state)switch(this.state){case"opened":e="issues";break;case"closed":e="pass"}return e}get classes(){return this.state?`issue-icon issue-icon--${this.state}`:"issue-icon"}get label(){return this.state?`Issue ${this.issueId?`#${this.issueId}`:""} is ${this.state}`:"Issue"}render(){return this.state?re`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${ji(this.state)}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:re`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${ji(this.state)}
			></code-icon>`}};Aa.styles=[Sa],Ra([we()],Aa.prototype,"state",2),Ra([we({attribute:"issue-id"})],Aa.prototype,"issueId",2),Aa=Ra([be("issue-icon")],Aa);const Ia=p`
	.pr-icon--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr-icon--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr-icon--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var Ta=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,Ea=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Da(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ta(t,o,n),n};let La=class extends lit_element_r{constructor(){super(...arguments),this.draft=!1}get icon(){let e=this.draft?"git-pull-request-draft":"git-pull-request";if(this.state)switch(this.state){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed"}return e}get classes(){return!this.state||this.draft&&"opened"===this.state?"pr-icon":`pr-icon pr-icon--${this.state}`}get label(){const e=this.draft?"Draft pull request":"Pull request";return this.state?`${e} ${this.prId?`#${this.prId}`:""} is ${this.state}`:e}render(){return this.state?re`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${ji(this.state)}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:re`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${ji(this.state)}
			></code-icon>`}};La.styles=[Ia],Ea([we()],La.prototype,"state",2),Ea([we({type:Boolean})],La.prototype,"draft",2),Ea([we({attribute:"pr-id"})],La.prototype,"prId",2),La=Ea([be("pr-icon")],La);var Ba=Object.defineProperty,Fa=Object.getOwnPropertyDescriptor,Wa=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Fa(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ba(t,o,n),n};let za=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.disabled=!1}render(){return re`
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
		`}focus(e){this.defaultFocusEl.focus(e)}};za.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},za.styles=p`
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
			${wi}
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
	`,Wa([we()],za.prototype,"href",2),Wa([we()],za.prototype,"label",2),Wa([we()],za.prototype,"icon",2),Wa([we({type:Boolean})],za.prototype,"disabled",2),Wa([ke("a")],za.prototype,"defaultFocusEl",2),za=Wa([be("action-item")],za);var Ma=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Na=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ja(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ma(t,o,n),n};let Ua=class extends lit_element_r{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return re`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,i=this.actionNodes.map(((e,i)=>(e.setAttribute("aria-posinset",`${i+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===i?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{i?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10);let i=null;if("ArrowLeft"===e.key){const e=1===o?this.actionNodes.length-1:o-2;i=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=o===this.actionNodes.length?0:o;i=this.actionNodes[e]}null!=i&&i!==t&&(t.setAttribute("tabindex","-1"),i.setAttribute("tabindex","0"),i.focus())}};Ua.styles=p`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,Na([function(e){return(t,o)=>{const{slot:i,selector:r}=e??{},n="slot"+(i?`[name=${i}]`:":not([name])");return _e(t,o,{get(){const t=this.renderRoot?.querySelector(n),o=t?.assignedElements(e)??[];return void 0===r?o:o.filter((e=>e.matches(r)))}})}}({flatten:!0})],Ua.prototype,"actionNodes",2),Ua=Na([be("action-nav")],Ua);var qa=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,Va=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Ga(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&qa(t,o,n),n};let Ha=class extends lit_element_r{constructor(){super(...arguments),this.hasChanges=!1,this.worktree=!1}render(){return re`<gl-tooltip placement="bottom"
			>${this.renderIcon()}<span slot="content">${this.renderTooltipContent()}</span></gl-tooltip
		>`}renderIcon(){if(!(this.worktree||this.status&&"local"!==this.status))return re`<code-icon icon="git-branch"></code-icon>`;if("detached"===this.status)return re`<code-icon icon="git-commit"></code-icon>`;let e,t="0.5";switch(this.status){case"diverged":e="var(--gl-icon-color-status-diverged)";break;case"behind":e="var(--gl-icon-color-status-behind)";break;case"ahead":e="var(--gl-icon-color-status-ahead)";break;case"missingUpstream":e="var(--gl-icon-color-status-missingUpstream)";break;case"upToDate":e=`var(--gl-icon-color-status-${this.hasChanges?"changes":"synced"})`;break;default:this.hasChanges?e="var(--gl-icon-color-status-changes)":(e="transparent",t="1")}return this.worktree?ne`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="var(--gl-icon-color-foreground, #c5c5c5)"
					d="M13.5 4h.501v1.003h-.2a5.5 5.5 0 0 1 1.2.755V3.5l-.5-.5H13.5v1zm-4 0V3H7.713l-.852-.854L6.507 2H1.511l-.5.5v3.996L1 6.507v6.995l.5.5h6.227a5.528 5.528 0 0 1-.836-1H2V7.496h.01v-.489h4.486l.354-.146.858-.858h.014a5.51 5.51 0 0 1 1.477-1H7.5l-.353.147-.858.857H2.011V3H6.3l.853.853.353.146H9.5z"
				/>
				<path
					fill="${e}"
					stroke="var(--gl-icon-color-foreground, #c5c5c5)"
					stroke-width="${t}"
					d="M11.5 6.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5z"
				/>
				<path stroke="var(--gl-icon-color-foreground, #c5c5c5)" d="M11.5 13v3M11.5 1v6" />
			</svg>`:ne`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="${e}"
				stroke="var(--gl-icon-color-foreground, #c5c5c5)"
				stroke-width="${t}"
				d="M12 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"
			/>
			<path
				fill="var(--gl-icon-color-foreground, #c5c5c5)"
				d="M6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM5 5.95a2.5 2.5 0 1 0-1 0v4.1a2.5 2.5 0 1 0 1.165.04c.168-.38.383-.622.61-.78.327-.227.738-.32 1.214-.31H7c.387 0 .76.03 1.124.059l.026.002c.343.027.694.055 1.003.046.313-.01.661-.06.954-.248.29-.185.466-.466.544-.812a.756.756 0 0 1 .046-.055 2.5 2.5 0 1 0-1.03-.134c-.028.108-.07.14-.1.16-.063.04-.191.08-.446.089a8.783 8.783 0 0 1-.917-.045A14.886 14.886 0 0 0 7.005 8c-.61-.013-1.249.105-1.8.488-.07.05-.14.102-.205.159V5.95zm7-.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-9 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
			/>
		</svg>`}renderTooltipContent(){const e=this.branch?oa(this.branch):"Branch";let t;const o=this.upstream?oa(this.upstream):"its upstream";switch(this.status){case"diverged":t=re`${e} has diverged from ${o}`;break;case"behind":t=re`${e} is behind ${o}`;break;case"ahead":t=re`${e} is ahead of ${o}`;break;case"missingUpstream":t=re`${e} is missing its upstream ${o}`;break;case"upToDate":t=re`${e} is up to date with ${o}`;break;case"local":t=re`${e} is a local branch which has't been published`;break;case"remote":t=re`${e} is a remote branch`;break;case"detached":t=re`${e} is in a detached state, i.e. checked out to a commit or tag`;break;default:t=re`${e} is in an unknown state`}return t=re`<p>${t}</p>`,this.worktree?t=this.hasChanges?re`${t}
					<p>Checked out in a worktree and has working (uncommitted) changes</p>`:re`${t}
					<p>Checked out in a worktree</p>`:this.hasChanges&&(t=re`${t}
				<p>Has working (uncommitted) changes</p>`),t}};Ha.styles=p`
		:host {
			display: inline-flex;
			width: 16px;
			height: 16px;

			--gl-icon-color-foreground: var(--vscode-foreground, #c5c5c5);

			--gl-icon-color-status-synced: var(
				--gl-icon-color-foreground,
				var(--vscode-gitlens-decoration\\.branchUpToDateForegroundColor)
			);
			--gl-icon-color-status-diverged: var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor, #ff5);
			--gl-icon-color-status-behind: var(--vscode-gitlens-decorations\\.branchBehindForegroundColor, #f05);
			--gl-icon-color-status-ahead: var(--vscode-gitlens-decorations\\.branchAheadForegroundColor, #0f5);
			--gl-icon-color-status-missingUpstream: var(
				--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor,
				#c74e39
			);
			--gl-icon-color-status-changes: #1a79ff;
		}

		:host-context(.vscode-dark),
		:host-context(.vscode-high-contrast) {
			--gl-icon-color-foreground: #c5c5c5;
		}

		:host-context(.vscode-light),
		:host-context(.vscode-high-contrast-light) {
			--gl-icon-color-foreground: #424242;
		}

		p {
			margin: 0;
		}

		p + p {
			margin-top: 0.4rem;
		}

		svg {
			width: 100%;
			height: 100%;
			margin-top: -0.2rem;
			vertical-align: middle;
		}
	`,Va([we({type:String})],Ha.prototype,"branch",2),Va([we({type:String})],Ha.prototype,"status",2),Va([we({type:Boolean})],Ha.prototype,"hasChanges",2),Va([we({type:String})],Ha.prototype,"upstream",2),Va([we({type:Boolean})],Ha.prototype,"worktree",2),Ha=Va([be("gl-branch-icon")],Ha);var Ka=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,Qa=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Ya(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ka(t,o,n),n};let Ja=class extends lit_element_r{get target(){return this._target}get targetPromise(){return this._targetPromise}set targetPromise(e){this._targetPromise!==e&&(this._targetPromise=e,this._targetPromise?.then((e=>this._target=e),(()=>this._target=void 0)))}get conflicts(){return this.target?.potentialConflicts}get mergedStatus(){return this.target?.mergedStatus}get status(){return this.target?.status}get branchRef(){if(null!=this.branch)return{repoPath:this.branch.repoPath,branchId:this.branch.id,branchName:this.branch.name}}get targetBranchRef(){if(null!=this.target)return{repoPath:this.target.repoPath,branchId:this.target.id,branchName:this.target.name}}render(){if(!this.status&&!this.conflicts)return ae;let e,t;return this.mergedStatus?.merged?(e="git-merge",t="merged"):this.conflicts?(e="warning",t="conflict"):(this.status?.behind??0)>0?(e="arrow-down",t="behind"):(e="check",t="in-sync"),re`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip status--${t}" tabindex="0"
				><code-icon class="icon" icon="gl-merge-target" size="18"></code-icon
				></code-icon><code-icon class="status-indicator icon--${t}" icon="${e}" size="12"></code-icon>
			</span>
			<div slot="content" class="content">${this.renderContent()}</div>
		</gl-popover>`}renderContent(){const e=oa(this.target?.name);return this.mergedStatus?.merged?this.mergedStatus.localBranchOnly?re`<div class="header">
						<span class="header__title"
							><code-icon icon="git-merge"></code-icon> Branch
							${"highest"!==this.mergedStatus.confidence?"Likely ":""}Merged Locally into Merge
							Target&nbsp;${this.renderInfo()}${this.renderCurrentTarget()}</span
						>
						${this.renderActions()}
					</div>
					<div class="body">
						<p>
							Your current branch ${oa(this.branch.name)} has
							${"highest"!==this.mergedStatus.confidence?"likely ":""}been merged into its merge
							target's local branch ${oa(this.mergedStatus.localBranchOnly.name)}.
						</p>
					</div>`:re`<div class="header">
					<span class="header__title"
						><code-icon icon="git-merge"></code-icon> Branch
						${"highest"!==this.mergedStatus.confidence?"Likely ":""}Merged into Merge
						Target&nbsp;${this.renderInfo()}${this.renderCurrentTarget()}</span
					>
					${this.renderActions()}
				</div>
				<div class="body">
					<p>
						Your current branch ${oa(this.branch.name)} has
						${"highest"!==this.mergedStatus.confidence?"likely ":""}been merged into its merge target
						${e}.
					</p>
				</div>`:this.conflicts?re`
				<div class="header">
					<span class="header__title"
						><code-icon class="status--warning" icon="warning"></code-icon> Potential Conflicts with Merge
						Target&nbsp;${this.renderInfo()}${this.renderCurrentTarget()}</span
					>
					${this.renderActions()}
				</div>
				<div class="body">
					${this.status?re`<p>
								Your current branch ${oa(this.branch.name)} is
								${qo("commit",this.status.behind)} behind its merge target ${e}.
						  </p>`:ae}
					<div class="button-container">
						<gl-button
							full
							href="${zi("gitlens.home.rebaseCurrentOnto",this.targetBranchRef)}"
							>Rebase ${oa(this.conflicts.branch)} onto ${e}</gl-button
						>
						<gl-button
							full
							appearance="secondary"
							href="${zi("gitlens.home.mergeIntoCurrent",this.targetBranchRef)}"
							>Merge ${e} into ${oa(this.conflicts.branch)}</gl-button
						>
					</div>
					<p class="status--merge-conflict">
						<code-icon icon="warning"></code-icon> Merging will cause conflicts in
						${qo("file",this.conflicts.files.length)} that will need to be resolved.
					</p>
					${this.renderFiles(this.conflicts.files)}
				</div>
			`:null!=this.status?this.status.behind>0?re`<div class="header">
						<span class="header__title"
							><code-icon class="status--warning" icon="arrow-down"></code-icon> ${qo("Commit",this.status.behind)}
							Behind Merge Target&nbsp;${this.renderInfo()}${this.renderCurrentTarget()}</span
						>
						${this.renderActions()}
					</div>
					<div class="body">
						<p>
							Your current branch ${oa(this.branch.name)} is
							${qo("commit",this.status.behind)} behind its merge target ${e}.
						</p>
						<div class="button-container">
							<gl-button
								full
								href="${zi("gitlens.home.rebaseCurrentOnto",this.targetBranchRef)}"
								>Rebase ${oa(this.branch.name)} onto ${e}</gl-button
							>
							<gl-button
								full
								appearance="secondary"
								href="${zi("gitlens.home.mergeIntoCurrent",this.targetBranchRef)}"
								>Merge ${e} into ${oa(this.branch.name)}</gl-button
							>
						</div>
						<p class="status--merge-clean">
							<code-icon icon="check"></code-icon> Merging will not cause conflicts.
						</p>
					</div>`:re`<div class="header">
					<span class="header__title"
						><code-icon icon="check"></code-icon> Up to Date with Merge
						Target&nbsp;${this.renderInfo()}${this.renderCurrentTarget()}</span
					>
					${this.renderActions()}
				</div>
				<div class="body">
					<p>
						Your current branch ${oa(this.branch.name)} is up to date with its merge target
						${e}.
					</p>
				</div>`:ae}renderActions(){const e=this.branchRef,t=this.targetBranchRef;return re`<span class="header__actions"
			>${e&&t?re`<gl-button
						href="${zi("gitlens.home.openMergeTargetComparison",{...e,mergeTargetId:t.branchId,mergeTargetName:t.branchName})}"
						appearance="toolbar"
						><code-icon icon="git-compare"></code-icon>
						<span slot="tooltip"
							>Compare Branch with Merge Target<br />${oa(this.branch.name)}
							&leftrightarrow; ${oa(this.target?.name)}</span
						>
				  </gl-button>`:ae}<gl-button
				href="${zi("gitlens.home.fetch",this.targetBranchRef)}"
				appearance="toolbar"
				><code-icon icon="repo-fetch"></code-icon>
				<span slot="tooltip">Fetch Merge Target<br />${oa(this.target?.name)}</span>
			</gl-button></span
		>`}renderCurrentTarget(){return ae}renderInfo(){return re`<gl-tooltip class="info" position="bottom">
			<code-icon icon="question" size="16"></code-icon>
			<span slot="content"
				>The "merge target" is the branch that ${oa(this.branch.name)} is most likely to be merged
				into.</span
			>
		</gl-tooltip>`}renderFiles(e){return re`
			<details>
				<summary>
					<code-icon icon="chevron-right"></code-icon>
					Show ${e.length} conflicting files
				</summary>
				<div class="files scrollable">${e.map((e=>this.renderFile(e.path)))}</div>
			</details>
		`}renderFile(e){return re`<span class="files__item"><code-icon icon="file"></code-icon> ${e}</span>`}};Ja.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Ja.styles=[_i,ki,Mi,$i,p`
			.header__actions {
				margin-top: 0.4rem;
			}

			.content {
				gap: 0.6rem;
			}

			:host-context(.vscode-dark),
			:host-context(.vscode-high-contrast) {
				--color-status--in-sync: #00bb00;
				--color-merge--clean: #00bb00;
				--color-merge--conflict: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
			}

			:host-context(.vscode-light),
			:host-context(.vscode-high-contrast-light) {
				--color-status--in-sync: #00aa00;
				--color-merge--clean: #00aa00;
				--color-merge--conflict: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
			}

			.header__title code-icon {
				margin-bottom: 0.1rem;
			}

			.header__title code-icon.status--warning {
				color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
			}

			.header__subtitle {
				font-size: 1.3rem;
				margin: 0.2rem 0 0 0;
			}

			.status--conflict .icon,
			.status--conflict .status-indicator {
				color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
			}

			.status--behind .icon,
			.status--behind .status-indicator {
				color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
			}

			.status--merged .icon,
			.status--merged .status-indicator {
				color: var(--vscode-gitlens-mergedPullRequestIconColor);
			}

			.status--merged .icon {
				transform: rotateY(180deg);
			}

			.status--in-sync .status-indicator {
				color: var(--color-status--in-sync);
			}

			.status--merge-conflict {
				color: var(--color-merge--conflict);
			}

			.status--merge-clean {
				color: var(--color-merge--clean);
			}

			.status-indicator {
				margin-left: -0.5rem;
				margin-top: 0.8rem;
			}

			.body {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				width: 100%;
			}

			.button-container {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				margin-top: 0.4rem;
				margin-bottom: 0.4rem;
				align-items: center;
				justify-content: center;
				width: 100%;
			}

			.button-container gl-button {
				max-width: 30rem;
			}

			p {
				margin: 0 0.4rem;
			}

			p code-icon,
			gl-button code-icon {
				margin-bottom: 0.1rem;
			}

			details {
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
				padding: 0;
				position: relative;
				margin: 0 0.2rem 0.4rem;
				overflow: hidden;
				border: 1px solid transparent;
				color: var(--color-foreground--85);
			}

			details[open] {
				border-radius: 0.3rem;
				border: 1px solid var(--vscode-sideBar-border);
			}

			summary {
				position: sticky;
				top: 0;
				color: var(--color-foreground);
				cursor: pointer;
				list-style: none;
				transition: transform ease-in-out 0.1s;
				padding: 0.4rem 0.6rem 0.4rem 0.6rem;
				z-index: 1;
			}

			summary:hover {
				color: var(--vscode-textLink-activeForeground);
			}

			details[open] > summary {
				color: var(--vscode-textLink-foreground);
				border-radius: 0.3rem 0.3rem 0 0;
				margin-left: 0;
				background: var(--vscode-sideBar-background);
			}

			details[open] > summary code-icon {
				transform: rotate(90deg);
			}

			summary code-icon {
				transition: transform 0.2s;
			}

			.files {
				display: flex;
				flex-direction: column;
				gap: 0.4rem;

				max-height: 8rem;
				overflow-y: auto;
				padding: 0.4rem 0.8rem;

				background: var(--vscode-sideBar-background);
			}

			gl-popover {
				--max-width: 80vw;
			}

			.info {
				cursor: help;
				display: inline-flex;
				vertical-align: middle;
			}
		`],Qa([we({type:Object})],Ja.prototype,"branch",2),Qa([ye()],Ja.prototype,"_target",2),Qa([we({type:Object})],Ja.prototype,"targetPromise",1),Ja=Qa([be("gl-merge-target-status")],Ja);var Za=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,el=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Xa(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Za(t,o,n),n};const tl=p`
	gl-avatar-list {
		--gl-avatar-size: 2.4rem;
		margin-block: -0.4rem;
	}

	.branch-item {
		position: relative;
	}

	.branch-item__container {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
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

	.branch-item__actions {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		flex-direction: row;
		justify-content: flex-end;
		font-size: 0.9em;
	}

	/* :empty selector doesn't work with lit */
	.branch-item__actions:not(:has(*)) {
		display: none;
	}

	.branch-item__icon {
		color: var(--vscode-descriptionForeground);
		flex: none;
	}

	.branch-item__name {
		flex-grow: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
	}

	.branch-item__name--secondary {
		font-weight: normal;
	}

	.branch-item__identifier {
		color: var(--vscode-descriptionForeground);
		text-decoration: none;
	}

	.branch-item__grouping {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		max-width: 100%;
		margin-block: 0;
	}

	.branch-item__changes {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: flex-end;
		flex-wrap: wrap;
		white-space: nowrap;
	}

	.branch-item__changes formatted-date {
		margin-inline-end: auto;
	}

	.branch-item__summary {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	/*
	.branch-item__actions {
		position: absolute;
		right: 0.4rem;
		bottom: 0.4rem;
		padding: 0.2rem 0.4rem;
		background-color: var(--gl-card-hover-background);
	}

	.branch-item:not(:focus-within):not(:hover) .branch-item__actions {
		${vi}
	}
	*/

	.pill {
		--gl-pill-border: color-mix(in srgb, transparent 80%, var(--color-foreground));
	}

	.work-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
	}
	.work-item::part(base) {
		margin-block-end: 0;
	}

	.branch-item__section.mb-1 {
		margin-block: 0.4rem;
	}

	.branch-item__merge-target {
		margin-inline-end: auto;
	}

	.branch-item__missing {
		--button-foreground: inherit;
	}

	:host-context(.vscode-dark) .branch-item__missing,
	:host-context(.vscode-high-contrast) .branch-item__missing {
		--button-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--button-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
		--button-border: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 12%);
	}

	:host-context(.vscode-light) .branch-item__missing,
	:host-context(.vscode-high-contrast-light) .branch-item__missing {
		--button-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 8%);
		--button-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 10%);
		--button-border: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 14%);
	}

	.branch-item__category {
		margin-inline-start: 0.6rem;
	}

	.launchpad-grouping--mergeable {
		color: var(--vscode-gitlens-launchpadIndicatorMergeableColor);
	}

	.launchpad-grouping--blocked {
		color: var(--vscode-gitlens-launchpadIndicatorBlockedColor);
	}

	.launchpad-grouping--attention {
		color: var(--vscode-gitlens-launchpadIndicatorAttentionColor);
	}

	.tracking__pill,
	.wip__pill {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.tracking__tooltip,
	.wip__tooltip {
		display: contents;
		vertical-align: middle;
	}

	.tracking__tooltip p,
	.wip__tooltip p {
		margin-block: 0;
	}

	p.tracking__tooltip--wip {
		margin-block-start: 1rem;
	}
`;class GlBranchCardBase extends GlElement{constructor(){super(...arguments),this.busy=!1,this.expanded=!1,this.expandable=!1}get branch(){return this._branch}set branch(e){this._branch=e,this.autolinksPromise=e?.autolinks,this.contributorsPromise=e?.contributors,this.issuesPromise=e?.issues,this.prPromise=e?.pr,this.mergeTargetPromise=e?.mergeTarget,this.wipPromise=e?.wip}get autolinks(){return this._autolinks}get autolinksPromise(){return this._autolinksPromise}set autolinksPromise(e){this._autolinksPromise!==e&&(this._autolinksPromise=e,this._autolinksPromise?.then((e=>this._autolinks=e),(()=>this._autolinks=void 0)))}get contributors(){return this._contributors}get contributorsPromise(){return this._contributorsPromise}set contributorsPromise(e){this._contributorsPromise!==e&&(this._contributorsPromise=e,this._contributorsPromise?.then((e=>this._contributors=e),(()=>this._contributors=void 0)))}get issues(){return this._issues}get issuesPromise(){return this._issuesPromise}set issuesPromise(e){this._issuesPromise!==e&&(this._issuesPromise=e,this._issuesPromise?.then((e=>this._issues=e),(()=>this._issues=void 0)))}get pr(){return this._pr}get prPromise(){return this._prPromise}set prPromise(e){this._prPromise!==e&&(this._prPromise=e,this._prPromise?.then((e=>{this._pr=e,this.launchpadItemPromise=e?.launchpad}),(()=>{this._pr=void 0,this.launchpadItemPromise=void 0})))}get launchpadItem(){return this._launchpadItem}get launchpadItemPromise(){return this._launchpadItemPromise}set launchpadItemPromise(e){this._launchpadItemPromise!==e&&(this._launchpadItemPromise=e,this._launchpadItemPromise?.then((e=>this._launchpadItem=e),(()=>this._launchpadItem=void 0)))}get mergeTarget(){return this._mergeTarget}get mergeTargetPromise(){return this._mergeTargetPromise}set mergeTargetPromise(e){this._mergeTargetPromise!==e&&(this._mergeTargetPromise=e,this._mergeTargetPromise?.then((e=>this._mergeTarget=e),(()=>this._mergeTarget=void 0)))}get wip(){return this._wip}get wipPromise(){return this._wipPromise}set wipPromise(e){this._wipPromise!==e&&(this._wipPromise=e,this._wipPromise?.then((e=>this._wip=e),(()=>this._wip=void 0)))}onExpandableChanged(){this.attachFocusListener()}get branchRef(){return{repoPath:this.repo,branchId:this.branch.id,branchName:this.branch.name}}get isWorktree(){return null!=this.branch.worktree}get cardIndicator(){return nl(rl(this.pr,this.launchpadItem))??"base"}get branchCardIndicator(){if(!this.branch.opened)return;if(null!=this.wip?.pausedOpStatus){if(this.wip?.hasConflicts)return"conflict";switch(this.wip.pausedOpStatus.type){case"cherry-pick":return"cherry-picking";case"merge":return"merging";case"rebase":return"rebasing";case"revert":return"reverting"}}if(null!=this.wip?.workingTreeState&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0)return"branch-changes";if(this.mergeTarget?.mergedStatus?.merged)return"branch-merged";switch(this.branch.status){case"ahead":return"branch-ahead";case"behind":return"branch-behind";case"diverged":return"branch-diverged";case"upToDate":return"branch-synced";case"missingUpstream":return"branch-missingUpstream";default:return}}connectedCallback(){super.connectedCallback(),this.attachFocusListener()}disconnectedCallback(){super.disconnectedCallback(),this.eventController?.abort()}attachFocusListener(){this.eventController?.abort(),this.eventController=void 0,this.expandable&&(null==this.eventController&&(this.eventController=new AbortController),this.addEventListener("focusin",this.onFocus.bind(this),{signal:this.eventController.signal}))}onFocus(){this.expanded||this.toggleExpanded(!0)}renderIssues(){const{autolinks:e,issues:t}=this,o=t?.length?t:e;return o?.length?re`
			${o.map((e=>re`
					<p class="branch-item__grouping">
						<span class="branch-item__icon">
							<issue-icon state=${e.state} issue-id=${e.id}></issue-icon>
						</span>
						<a href=${e.url} class="branch-item__name branch-item__name--secondary">${e.title}</a>
						<span class="branch-item__identifier">#${e.id}</span>
					</p>
				`))}
		`:ae}renderWip(){const e=this.wip?.workingTreeState;if(null==e)return ae;const t=sl(e);return re`<gl-tooltip class="wip__pill" placement="bottom"
			><commit-stats
				added=${e.added}
				modified=${e.changed}
				removed=${e.deleted}
				symbol="icons"
			></commit-stats>
			<span class="wip__tooltip" slot="content">
				<p>${t.length?`${t.join(", ")} in the working tree`:"No working tree changes"}</p>
			</span>
		</gl-tooltip>`}renderAvatars(){const{contributors:e}=this;return e?.length?re`<gl-avatar-list
			.avatars=${e.map((e=>({name:e.name,src:e.avatarUrl})))}
			max="1"
		></gl-avatar-list>`:ae}renderTracking(e=!1){if(null==this.branch.upstream)return ae;const t=this.branch.state.ahead??0,o=this.branch.state.behind??0;let i,r,n=0;if(e){const e=this.wip?.workingTreeState;if(null!=e){n=e.added+e.changed+e.deleted;const t=sl(e);t.length&&(i=re`<p class="tracking__tooltip--wip">${t.join(", ")} in the working tree</p>`)}}if(this.branch.upstream?.missing)r=re`${oa(this.branch.name)} is missing its upstream
			${oa(this.branch.upstream.name)}`;else{let e=!1;const t=[];this.branch.state.behind&&t.push(`${qo("commit",this.branch.state.behind)} behind`),this.branch.state.ahead&&(e=!0,t.push(`${qo("commit",this.branch.state.ahead)} ahead`)),r=t.length?re`${oa(this.branch.name)} is ${t.join(", ")}${e?" of":""}
				${oa(this.branch.upstream?.name)}`:re`${oa(this.branch.name)} is up to date with
				${oa(this.branch.upstream?.name)}`}return re`<gl-tooltip class="tracking__pill" placement="bottom"
			><gl-tracking-pill
				class="pill"
				colorized
				outlined
				always-show
				ahead=${t}
				behind=${o}
				working=${n}
				?missingUpstream=${this.branch.upstream?.missing??!1}
			></gl-tracking-pill>
			<span class="tracking__tooltip" slot="content">${r}${i}</span></gl-tooltip
		>`}renderBranchActions(){const e=this.getBranchActions?.();return e?.length?re`<action-nav>${e}</action-nav>`:ae}renderPrActions(){const e=this.getPrActions?.();return e?.length?re`<action-nav>${e}</action-nav>`:ae}createCommandLink(e,t){return zi(e,t??this.branchRef)}renderTimestamp(){const{timestamp:e}=this.branch;return null==e?ae:re`<formatted-date
			tooltip="Last commit on "
			.date=${new Date(e)}
			class="branch-item__date"
		></formatted-date>`}renderBranchItem(e){const t=this.renderWip(),o=this.renderTracking(),i=this.renderAvatars(),r=this.branch.opened?void 0:this.renderBranchIndicator?.(),n=this.renderMergeTargetStatus(),a=this.renderTimestamp();return re`
			<gl-work-item
				?primary=${!this.branch.opened}
				?nested=${!this.branch.opened}
				.indicator=${this.branchCardIndicator}
				?expanded=${this.expanded}
			>
				<div class="branch-item__section">
					<p class="branch-item__grouping">
						<span class="branch-item__icon"> ${this.renderBranchIcon()} </span>
						<span class="branch-item__name">${this.branch.name}</span>
					</p>
				</div>
				${xe(a||r||t||o||i,(()=>re`
						<div class="branch-item__section branch-item__section--details" slot="context">
							<p class="branch-item__changes">${a}${r}${t}${o}${i}</p>
						</div>
					`))}
				${xe(e||n,(()=>re`<div class="branch-item__actions" slot="actions">
							${n??ae}${e??ae}
						</div>`))}
				<span class="branch-item__summary" slot="summary">${this.renderTracking(!0)} ${i}</span>
			</gl-work-item>
		`}renderBranchIcon(){const e=null!=this.wip?.workingTreeState&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0;return re`<gl-branch-icon
			branch="${this.branch.name}"
			status="${this.branch.status}"
			?hasChanges=${e}
			upstream=${this.branch.upstream?.name}
			?worktree=${null!=this.branch.worktree}
		></gl-branch-icon>`}renderPrItem(){if(!this.pr)return!1===this.branch.upstream?.missing&&this.expanded?re`
					<gl-button
						class="branch-item__missing"
						appearance="secondary"
						full
						href="${this.createCommandLink("gitlens.home.createPullRequest")}"
						>Create a Pull Request</gl-button
					>
				`:ae;const e=this.branch.opened?nl(rl(this.pr,this.launchpadItem))??"base":void 0,t=this.renderPrActions();return re`
			<gl-work-item ?expanded=${this.expanded} ?nested=${!this.branch.opened} .indicator=${e}>
				<div class="branch-item__section">
					<p class="branch-item__grouping">
						<span class="branch-item__icon">
							<pr-icon ?draft=${this.pr.draft} state=${this.pr.state} pr-id=${this.pr.id}></pr-icon>
						</span>
						<a href=${this.pr.url} class="branch-item__name branch-item__name--secondary"
							>${this.pr.title}</a
						>
						<span class="branch-item__identifier">#${this.pr.id}</span>
					</p>
				</div>
				${this.renderLaunchpadItem()}
				${xe(null!=t,(()=>re`<div class="branch-item__actions" slot="actions">${t}</div>`))}
			</gl-work-item>
		`}renderLaunchpadItem(){if(null==this.launchpadItem)return ae;const e=rl(this.pr,this.launchpadItem);if(null==e)return ae;const t=Ys.get(e),o=Ks.get(e);if(null==t||null==o)return ae;const i=o.match(/\$\((.*?)\)/)[1].replace("gitlens","gl"),r=function(e,t){if(null==e||0===e.length)return e;if(null==t)return e.replace(zo,"");const o=No(e);if(0===o.length)return e;let i=0,r="";for(const n of o)r+=e.slice(i,n.start)+(t[n.key]??""),i=n.end;return i<e.length&&(r+=e.slice(i)),r}(Js.get(this.launchpadItem.category)[1],{author:this.launchpadItem.author?.username??"unknown",createdDateRelative:To(new Date(this.launchpadItem.createdDate))});return re`<div class="branch-item__section branch-item__section--details" slot="context">
				<p class="launchpad-grouping--${nl(e)}">
					<gl-tooltip content="${r}">
						<a
							href=${zi("gitlens.showLaunchpad",{source:"home",state:{id:{uuid:this.launchpadItem.uuid,group:e}}})}
							class="launchpad__grouping"
						>
							<code-icon icon="${i}"></code-icon
							><span class="branch-item__category">${t.toUpperCase()}</span></a
						>
					</gl-tooltip>
				</p>
			</div>
			${i?re`<span
						class="branch-item__summary launchpad-grouping--${nl(e)}"
						slot="summary"
						><gl-tooltip placement="bottom" content="${t}"
							><code-icon icon="${i}"></code-icon></gl-tooltip
				  ></span>`:ae}`}renderMergeTargetStatus(){return this.branch.mergeTarget?re`<gl-merge-target-status
			class="branch-item__merge-target"
			.branch=${this.branch}
			.targetPromise=${this.branch.mergeTarget}
		></gl-merge-target-status>`:ae}renderIssuesItem(){if(![...this.issues??[],...this.autolinks??[]].length)return this.expanded?re`<gl-button
				class="branch-item__missing"
				appearance="secondary"
				full
				href=${this.createCommandLink("gitlens.associateIssueWithBranch",{branch:this.branch.reference,source:"home"})}
				>Associate an Issue</gl-button
			>`:ae;const e=this.branch.opened?"base":void 0;return re`
			<gl-work-item ?expanded=${this.expanded} ?nested=${!this.branch.opened} .indicator=${e}>
				<div class="branch-item__section">${this.renderIssues()}</div>
			</gl-work-item>
		`}toggleExpanded(e=!this.expanded){this.expanded=e,queueMicrotask((()=>{this.emit("gl-branch-card-expand-toggled",{expanded:e})}))}}GlBranchCardBase.styles=[Hs,tl],el([we()],GlBranchCardBase.prototype,"repo",2),el([we({type:Object})],GlBranchCardBase.prototype,"branch",1),el([ye()],GlBranchCardBase.prototype,"_autolinks",2),el([ye()],GlBranchCardBase.prototype,"_contributors",2),el([ye()],GlBranchCardBase.prototype,"_issues",2),el([ye()],GlBranchCardBase.prototype,"_pr",2),el([ye()],GlBranchCardBase.prototype,"_launchpadItem",2),el([ye()],GlBranchCardBase.prototype,"_mergeTarget",2),el([ye()],GlBranchCardBase.prototype,"_wip",2),el([we({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"busy",2),el([we({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"expanded",2),el([we({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"expandable",2),el([co("expandable")],GlBranchCardBase.prototype,"onExpandableChanged",1);let ol=class extends GlBranchCardBase{render(){return re`
			<gl-card class="branch-item" focusable .indicator=${this.cardIndicator}>
				<div class="branch-item__container">
					${this.renderBranchItem(this.renderBranchActions())}${this.renderPrItem()}${this.renderIssuesItem()}
				</div>
			</gl-card>
		`}getBranchActions(){const e=[];return this.branch.worktree?e.push(re`<action-item
					label="Open Worktree"
					icon="browser"
					href=${this.createCommandLink("gitlens.home.openWorktree")}
				></action-item>`):e.push(re`<action-item
					label="Switch to Branch..."
					icon="gl-switch"
					href=${this.createCommandLink("gitlens.home.switchToBranch")}
				></action-item>`),e.push(re`<action-item
				label="Fetch"
				icon="repo-fetch"
				href=${this.createCommandLink("gitlens.home.fetch")}
			></action-item>`),e.push(re`<action-item
				label="Open in Commit Graph"
				icon="gl-graph"
				href=${zi("gitlens.home.openInGraph",{...this.branchRef,type:"branch"})}
			></action-item>`),e}getPrActions(){return[re`<action-item
				label="Open Pull Request Changes"
				icon="request-changes"
				href=${this.createCommandLink("gitlens.home.openPullRequestChanges")}
			></action-item>`,re`<action-item
				label="Compare Pull Request"
				icon="git-compare"
				href=${this.createCommandLink("gitlens.home.openPullRequestComparison")}
			></action-item>`,re`<action-item
				label="Open Pull Request Details"
				icon="eye"
				href=${this.createCommandLink("gitlens.home.openPullRequestDetails")}
			></action-item>`]}renderBranchIndicator(){}};ol=el([be("gl-branch-card")],ol);let il=class extends lit_element_r{constructor(){super(...arguments),this.primary=!1,this.nested=!1,this.expanded=!1}render(){return re`<gl-card
			.density=${this.primary?"tight":void 0}
			.grouping=${!1===this.nested?void 0:this.primary?"item-primary":"item"}
			.indicator=${this.indicator}
			>${this.renderContent()}</gl-card
		>`}renderContent(){const e=this.querySelectorAll('[slot="context"]').length>0||this.querySelectorAll('[slot="actions"]').length>0;return re`
			<div class=${En({"work-item":!0,"work-item_content-empty":!e})}>
				<header class="work-item__header">
					<slot class="work-item__main"></slot>
					${this.renderSummary()}
				</header>
				<div class="work-item__content">
					<slot class="work-item__context" name="context"></slot>
					<slot class="work-item__actions" name="actions"></slot>
				</div>
			</div>
		`}renderSummary(){return this.expanded?ae:re`<slot class="work-item__summary" name="summary"></slot>`}};function rl(e,t){if(null==t||"opened"!==e?.state)return;if(e.draft&&"unassigned-reviewers"===t.category)return;const o=Qs.get(t.category);return null!=o&&"other"!==o&&"draft"!==o&&"current-branch"!==o?o:void 0}function nl(e){switch(e){case"mergeable":return"mergeable";case"blocked":return"blocked";case"follow-up":case"needs-review":return"attention"}}function sl(e){const t=[];return e.added&&t.push(`${qo("file",e.added??0)} added`),e.changed&&t.push(`${qo("file",e.changed??0)} changed`),e.deleted&&t.push(`${qo("file",e.deleted??0)} deleted`),t}il.styles=[p`
			.work-item {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			.work-item_content-empty {
				gap: 0;
			}

			.work-item__header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: 0.8rem;
			}

			.work-item__main {
				display: block;
				flex: 1;
				min-width: 0;
			}

			.work-item__summary {
				display: block;
				flex: none;
			}

			.work-item__content {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				max-height: 100px;

				transition-property: opacity, max-height, display;
				transition-duration: 0.2s;
				transition-behavior: allow-discrete;
			}

			:host(:not([expanded])) .work-item__content {
				display: none;
				opacity: 0;
				max-height: 0;
			}

			gl-card::part(base) {
				margin-block-end: 0;
			}
		`],el([we({type:Boolean,reflect:!0})],il.prototype,"primary",2),el([we({type:Boolean,reflect:!0})],il.prototype,"nested",2),el([we({reflect:!0})],il.prototype,"indicator",2),el([we({type:Boolean,reflect:!0})],il.prototype,"expanded",2),il=el([be("gl-work-item")],il);var al=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,cl=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ll(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&al(t,o,n),n};let dl=class extends lit_element_r{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return re`<div class="skeleton" style=${e}></div>`}};dl.styles=p`
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
	`,cl([we({type:Number})],dl.prototype,"lines",2),dl=cl([be("skeleton-loader")],dl);const hl=p`
	:host {
		--gl-color-mix-base: var(
			--gl-card-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%)
		);
	}

	.card {
		display: block;
		flex-direction: column;
		gap: 0.8rem;
		padding: 0.8rem 1.2rem;
		border-radius: 0.4rem;
		border-inline-start: 0.3rem solid transparent;
		/* border-inline-end: 0.3rem solid transparent; */
		background-color: var(--gl-card-background, color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%));
		margin-block-end: 0.6rem;
		position: relative;
	}

	:host-context(.vscode-dark) .card.is-base,
	:host-context(.vscode-high-contrast) .card.is-base {
		border-inline-start-color: color-mix(in lab, var(--gl-color-mix-base) 100%, #fff 7%);
	}

	:host-context(.vscode-light) .card.is-base,
	:host-context(.vscode-high-contrast-light) .card.is-base {
		border-inline-start-color: color-mix(in lab, var(--gl-color-mix-base) 100%, #000 5%);
	}

	.card.is-active {
		border-inline-start-color: var(--gl-card-indicator-border, var(--vscode-gitDecoration-addedResourceForeground));
	}

	.card.is-cherry-picking,
	.card.is-merging,
	.card.is-rebasing,
	.card.is-reverting {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor)
		);
	}

	.card.is-conflict {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor)
		);
	}

	.card.is-issue-open {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-openAutolinkedIssueIconColor) 0%, transparent)
		);
	}

	.card.is-issue-closed {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-closedAutolinkedIssueIconColor) 0%, transparent)
		);
	}

	.card.is-pr-open {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-openPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-pr-closed {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-closedPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-pr-merged {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-mergedPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-mergeable {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(var(--vscode-gitlens-launchpadIndicatorMergeableColor))
		);
	}

	.card.is-blocked {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-launchpadIndicatorBlockedColor)
		);
	}

	.card.is-attention {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-launchpadIndicatorAttentionColor)
		);
	}

	.card.is-branch-merged {
		border-inline-start-color: var(--gl-card-indicator-border, var(--vscode-gitlens-mergedPullRequestIconColor));
	}

	.card.is-branch-synced {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-decorations\\.branchUpToDateForegroundColor) 20%, transparent)
		);
	}

	.card.is-branch-diverged {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor) 70%, transparent)
		);
	}

	.card.is-branch-behind {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchBehindForegroundColor)
		);
	}

	.card.is-branch-ahead {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchBehindForegroundColor)
		);
	}

	.card.is-info,
	.card.is-branch-changes {
		border-inline-start-color: var(--gl-card-indicator-border, color-mix(in lab, #1a79ff 80%, transparent));
	}

	.card.is-branch-missingUpstream {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor)
		);
	}

	.card--focusable {
		cursor: pointer;
	}

	.card--focusable:focus,
	.card:focus-within,
	.card:hover {
		background-color: var(
			--gl-card-hover-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 8%)
		);
	}

	.card--focusable:focus-visible {
		outline: 0.1rem solid var(--vscode-focusBorder);
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

	:host-context(.vscode-dark) .card--grouping-item,
	:host-context(.vscode-high-contrast) .card--grouping-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
	}

	:host-context(.vscode-light) .card--grouping-item,
	:host-context(.vscode-high-contrast-light) .card--grouping-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 8%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 10%);
	}

	.card--grouping-item-primary {
		--gl-card-background: transparent;
		--gl-card-hover-background: transparent;
	}

	.card--density-tight {
		padding: 0;
	}
`;var pl=Object.defineProperty,ul=Object.getOwnPropertyDescriptor,gl=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ul(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&pl(t,o,n),n};let ml=class extends lit_element_r{constructor(){super(...arguments),this._focusable=!1}get focusable(){return null!=this.href||this._focusable}set focusable(e){const t=this._focusable;this._focusable=e,this.requestUpdate("focusable",t)}get classNames(){return{card:!0,"card--focusable":this.focusable,[`card--grouping-${this.grouping}`]:null!=this.grouping,[`card--density-${this.density}`]:null!=this.density,[`is-${this.indicator}`]:null!=this.indicator}}render(){return null!=this.href?re`<a part="base" class=${En(this.classNames)} href=${this.href}
				>${this.renderContent()}</a
			>`:re`<div part="base" tabindex=${this.focusable?0:-1} class=${En(this.classNames)}>
			${this.renderContent()}
		</div>`}renderContent(){return re`
			<slot class="card__content"></slot>
			<slot name="actions" class="card__actions"></slot>
		`}focus(e){null!=this.href?this.shadowRoot?.querySelector("a")?.focus(e):super.focus(e)}};ml.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},ml.styles=[hl],gl([we({reflect:!0})],ml.prototype,"indicator",2),gl([we({reflect:!0})],ml.prototype,"grouping",2),gl([we({reflect:!0})],ml.prototype,"density",2),gl([we()],ml.prototype,"href",2),gl([we({type:Boolean,reflect:!0})],ml.prototype,"focusable",1),ml=gl([be("gl-card")],ml);var bl=Object.defineProperty,fl=Object.getOwnPropertyDescriptor,vl=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?fl(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&bl(t,o,n),n};let wl=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.role="option"}updateInteractiveState(){this.tabIndex=this.disabled?-1:"option"===this.role?0:-1}updated(e){(e.has("disabled")||e.has("role"))&&this.updateInteractiveState()}render(){return this.href?re`<a href=${this.href}><slot></slot></a>`:re`<slot></slot>`}};wl.styles=[_i,p`
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
		`],vl([we({type:Boolean,reflect:!0})],wl.prototype,"disabled",2),vl([we({reflect:!0})],wl.prototype,"href",2),vl([we({reflect:!0})],wl.prototype,"role",2),wl=vl([be("menu-item")],wl);const yl={"cherry-pick":{label:"Cherry picking",conflicts:"Resolve conflicts to continue cherry picking",directionality:"into"},merge:{label:"Merging",conflicts:"Resolve conflicts to continue merging",directionality:"into"},rebase:{label:"Rebasing",conflicts:"Resolve conflicts to continue rebasing",directionality:"onto",pending:"Pending rebase of"},revert:{label:"Reverting",conflicts:"Resolve conflicts to continue reverting",directionality:"in"}};function _l(e){return e.startsWith("remotes/")?e.indexOf("/",8):e.indexOf("/")}const kl=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,$l=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,xl=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,Cl=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,Sl=/(^[0-9a-f]{40})\^[0-3]?$/;function Pl(e,t){if(null==e)return"";let o;t=!1===t?{}:{expand:!0,icon:!0,label:t?.label??t?.expand??!0,...t};const i=e;let r=t?.quoted?`'${i.name}'`:i.name;switch(i.refType){case"branch":{let e;i.remote&&(r=`${n=r,n.substring(0,_l(n))}: ${function(e){return e.substring(_l(e)+1)}(r)}`,r=t?.quoted?`'${r}'`:r),e=t.label?t.capitalize&&t.expand?(i.remote?"Remote ":"")+"Branch ":(i.remote?"remote ":"")+"branch ":"",o=`${e}${t.icon?`$(git-branch)${yo.Space}${r}`:r}`;break}case"tag":o=`${t.label?"tag ":""}${t.icon?`$(tag)${yo.Space}${r}`:r}`;break;default:if(function(e){return"stash"===e?.refType||"revision"===e?.refType&&Boolean(e?.stashName)}(i)){let e;t.expand&&i.message&&(e=`${null!=i.number?`#${i.number}: `:""}${i.message.length>20?`${i.message.substring(0,20).trimEnd()}${yo.Ellipsis}`:i.message}`),o=`${t.label?"stash ":""}${t.icon?`$(archive)${yo.Space}${e??i.name}`:e??(i.number?`#${i.number}`:i.name)}`}else if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return $l.test(e);case"qualified-double-dot":return xl.test(e);case"qualified-triple-dot":return Cl.test(e);default:return kl.test(e)}}(i.ref))o=r;else{let e,n;t.expand&&i.message&&(e=i.message.length>20?` (${i.message.substring(0,20).trimEnd()}${yo.Ellipsis})`:` (${i.message})`),t.expand&&t.label&&function(e){return function(e,t){return!!t&&Sl.test(t)}(0,e)}(i.ref)?(r=i.name.endsWith("^")?i.name.substring(0,i.name.length-1):i.name,t?.quoted&&(r=`'${r}'`),n="before "):n="",o=`${t.label?`${n}commit `:""}${t.icon?`$(git-commit)${yo.Space}${r}${e??""}`:`${r}${e??""}`}`}}var n;return t.capitalize&&t.expand&&!1!==t.label?function(e){return`${e[0].toLocaleUpperCase()}${e.slice(1)}`}(o):o}var Ol=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,Al=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Rl(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Ol(t,o,n),n};let Il=class extends lit_element_r{constructor(){super(...arguments),this.conflicts=!1,this.skipCommand="gitlens.home.skipPausedOperation",this.continueCommand="gitlens.home.continuePausedOperation",this.abortCommand="gitlens.home.abortPausedOperation",this.openEditorCommand="gitlens.home.openRebaseEditor"}get onSkipUrl(){return this.createCommandLink(this.skipCommand,this.pausedOpStatus)}get onContinueUrl(){return this.createCommandLink(this.continueCommand,this.pausedOpStatus)}get onAbortUrl(){return this.createCommandLink(this.abortCommand,this.pausedOpStatus)}get onOpenEditorUrl(){return this.createCommandLink(this.openEditorCommand,this.pausedOpStatus)}createCommandLink(e,t){return null!=this.webviewCommandContext&&(t=null==t?this.webviewCommandContext:{...t,...this.webviewCommandContext}),zi(e,t)}render(){return null==this.pausedOpStatus?ae:re`
			<span class="status" part="base">
				<code-icon icon="warning" class="icon"></code-icon>
				${this.renderStatus(this.pausedOpStatus)}${this.renderActions()}
			</span>
		`}renderStatus(e){if("rebase"!==e.type){const t=yl[e.type];return re`<span class="label"
				>${this.conflicts?t.conflicts:t.label}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${Pl(e.incoming,{expand:!1,icon:!1})} ${t.directionality}
				${Pl(e.current,{expand:!1,icon:!1})}</span
			>`}const t=e.steps.total>0,o=yl[e.type];return re`<span class="label"
				>${this.conflicts?o.conflicts:t?o.label:o.pending}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${Pl(e.incoming,{expand:!1,icon:!1})} ${o.directionality}
				${Pl(e.current??e.onto,{expand:!1,icon:!1})}</span
			>${t?re`<span class="steps"
						>(${e.steps.current.number}/${e.steps.total})</span
				  >`:ae}`}renderActions(){if(null==this.pausedOpStatus)return ae;const e=this.pausedOpStatus.type;return re`<action-nav class="actions">
			${xe("revert"!==e&&!("rebase"===e&&this.conflicts),(()=>re`
					<action-item label="Continue" icon="debug-continue" href=${this.onContinueUrl}></action-item>
				`))}
			${xe("merge"!==e,(()=>re`<action-item label="Skip" icon="debug-step-over" href=${this.onSkipUrl}></action-item>`))}
			<action-item label="Abort" href=${this.onAbortUrl} icon="circle-slash"></action-item>
			${xe("rebase"===e,(()=>re`<action-item
						label="Open in Rebase Editor"
						href=${this.onOpenEditorUrl}
						icon="edit"
					></action-item>`))}
		</action-nav>`}};Il.styles=[p`
			.status {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				gap: 0.6rem;
				width: 100%;
				max-width: 100%;
				margin-block: 0;
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
				color: #000;
				border-radius: 0.3rem;
				padding: 0.1rem 0.4rem;
			}

			:host([conflicts]) .status {
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor);
				color: #fff;
			}

			.label {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.icon,
			.steps,
			.actions {
				flex: none;
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],Al([we({type:Boolean,reflect:!0})],Il.prototype,"conflicts",2),Al([we({type:Object})],Il.prototype,"pausedOpStatus",2),Al([we()],Il.prototype,"skipCommand",2),Al([we()],Il.prototype,"continueCommand",2),Al([we()],Il.prototype,"abortCommand",2),Al([we()],Il.prototype,"openEditorCommand",2),Al([we({type:Object})],Il.prototype,"webviewCommandContext",2),Il=Al([be("gl-merge-rebase-status")],Il);var Tl=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,El=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Dl(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Tl(t,o,n),n};let Ll=class extends(Ft(lit_element_r)){connectedCallback(){super.connectedCallback(),this._homeState.repositories.openCount>0&&this._activeOverviewState.run()}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?ae:this._activeOverviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>re`<span>Error</span>`})}renderLoader(){return re`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._activeOverviewState.state?this.renderLoader():this.renderComplete(this._activeOverviewState.state,!0)}renderComplete(e,t=!1){const o=e?.repository,i=e?.active;return o&&i?re`
			<gl-section ?loading=${t}>
				<span slot="heading">
					${this.renderRepositoryIcon(o.provider)}
					${xe(this._homeState.repositories.openCount>1,(()=>re`<gl-button
								aria-busy="${ji(t)}"
								?disabled=${t}
								class="section-heading-action"
								appearance="toolbar"
								tooltip="Change Repository"
								@click=${e=>this.onChange(e)}
								><span class="uppercase">${o.name}</span><code-icon icon="chevron-down"></code-icon
							></gl-button>`),(()=>re`${o.name}`))}
				</span>
				<span slot="heading-actions"
					><gl-button
						aria-busy="${ji(t)}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Open in Commit Graph"
						href=${zi("gitlens.home.openInGraph",{type:"repo",repoPath:this._activeOverviewState.state.repository.path})}
						><code-icon icon="gl-graph"></code-icon
					></gl-button>
					<gl-button
						aria-busy="${ji(t)}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Fetch All"
						href=${zi("gitlens.home.fetch",void 0)}
						><code-icon icon="repo-fetch"></code-icon
					></gl-button>
				</span>
				${this.renderRepoBranchCard(i,o.path,t)}
			</gl-section>
		`:re`<span>None</span>`}renderRepositoryIcon(e){if(!e)return re`<code-icon icon="repo" class="heading-icon"></code-icon>`;let t="repo";return null!=e.icon&&(t="cloud"===e.icon?"cloud":`gl-provider-${e.icon}`),re`<gl-tooltip>
			${xe(null!=e.url,(()=>re`<a href=${e.url} class="section-heading-provider"
						><code-icon icon=${t} class="heading-icon"></code-icon
					></a>`),(()=>re`<code-icon icon=${t} class="heading-icon"></code-icon>`))}
			<span slot="content" class="tooltip">Open Repository on ${e.name}</span>
		</gl-tooltip>`}renderRepoBranchCard(e,t,o){return re`<gl-active-branch-card
			.branch=${e}
			.repo=${t}
			?busy=${o}
		></gl-active-branch-card>`}onChange(e){this._activeOverviewState.changeRepository()}};Ll.styles=[Hs,tl,p`
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
			.uppercase {
				text-transform: uppercase;
			}
		`],El([n({context:Ri,subscribe:!0}),ye()],Ll.prototype,"_homeState",2),El([n({context:so})],Ll.prototype,"_activeOverviewState",2),Ll=El([be("gl-active-work")],Ll);let Bl=class extends GlBranchCardBase{connectedCallback(){super.connectedCallback(),this.toggleExpanded(!0)}render(){return re`
			${this.renderBranchIndicator()}${this.renderBranchItem(re`${this.renderBranchStateActions()}${this.renderBranchActions()}`)}${this.renderPrItem()}${this.renderIssuesItem()}
		`}renderBranchStateActions(){const{name:e,state:t,upstream:o}=this.branch,i=[],r=()=>{if(0!==i.length)return re`<div><button-container>${i}</button-container></div>`},n=this.busy,a=this.wip?.workingTreeState;if(null!=a&&a.added+a.changed+a.deleted>0&&i.push(re`
				<gl-button
					aria-busy=${ji(n)}
					?disabled=${n}
					href=${this.createCommandLink("gitlens.generateCommitMessage",{repoPath:this.repo,source:"home"})}
					appearance="secondary"
					tooltip="Generate Message &amp; Commit..."
					><code-icon icon="sparkle" slot="prefix"></code-icon>Commit
				</gl-button>
				<gl-button
					aria-busy=${ji(n)}
					?disabled=${n}
					href=${this.createCommandLink("gitlens.home.createCloudPatch")}
					appearance="secondary"
					tooltip="Share as Cloud Patch"
					><code-icon icon="gl-cloud-patch-share"></code-icon>
				</gl-button>
			`),null!=this.wip?.pausedOpStatus)return r();if(!1!==o?.missing)return i.push(re`
				<gl-button
					aria-busy=${ji(n)}
					?disabled=${n}
					href=${Vs("gitlens.views.home.publishBranch","gitlens.views.home","")}
					full
					appearance="secondary"
					><code-icon icon="cloud-upload" slot="prefix"></code-icon> Publish Branch<span slot="tooltip"
						>Publish (push) <strong>${e}</strong> to ${o?.name??"a remote"}</span
					></gl-button
				>
			`),r();if(t?.ahead||t?.behind){const e=t.ahead>0,a=t.behind>0;if(e&&a){const e=o?.name?`Pull from ${o.name}`:"Pull",a=o?.name?`Force Push to ${o.name}`:"Force Push";return i.push(re`
					<gl-button
						aria-busy=${ji(n)}
						?disabled=${n}
						href=${Vs("gitlens.views.home.pull","gitlens.views.home","")}
						full
						appearance="secondary"
						tooltip=${e}
						><code-icon icon="repo-pull" slot="prefix"></code-icon> Pull
						<gl-tracking-pill .ahead=${t.ahead} .behind=${t.behind} slot="suffix"></gl-tracking-pill
					></gl-button>
					<gl-button
						aria-busy=${ji(n)}
						?disabled=${n}
						href=${Vs("gitlens.views.home.push","gitlens.views.home","",{force:!0})}
						appearance="secondary"
						density="compact"
						tooltip=${a}
						><code-icon icon="repo-force-push"></code-icon
					></gl-button>
				`),r()}if(a){const e=o?.name?`Pull from ${o.name}`:"Pull";return i.push(re`
					<gl-button
						aria-busy=${ji(n)}
						?disabled=${n}
						href=${Vs("gitlens.views.home.pull","gitlens.views.home","")}
						full
						appearance="secondary"
						tooltip=${e}
						><code-icon icon="repo-pull" slot="prefix"></code-icon> Pull
						<gl-tracking-pill .ahead=${t.ahead} .behind=${t.behind} slot="suffix"></gl-tracking-pill
					></gl-button>
				`),r()}if(e){const e=o?.name?`Push to ${o.name}`:"Push";return i.push(re`
					<gl-button
						aria-busy=${ji(n)}
						?disabled=${n}
						href=${Vs("gitlens.views.home.push","gitlens.views.home","")}
						full
						appearance="secondary"
						tooltip=${e}
						><code-icon icon="repo-push" slot="prefix"></code-icon> Push
						<gl-tracking-pill
							.ahead=${t.ahead}
							.behind=${t.behind}
							slot="suffix"
						></gl-tracking-pill>
					</gl-button>
				`),r()}}return r()}renderBranchIndicator(){const e=this.wip;if(null!=e?.pausedOpStatus)return re`<gl-merge-rebase-status
			?conflicts=${e.hasConflicts}
			.pausedOpStatus=${e.pausedOpStatus}
		></gl-merge-rebase-status>`}getBranchActions(){return[]}getPrActions(){return[re`<action-item
				label="Open Pull Request Changes"
				icon="request-changes"
				href=${this.createCommandLink("gitlens.home.openPullRequestChanges")}
			></action-item>`,re`<action-item
				label="Compare Pull Request"
				icon="git-compare"
				href=${this.createCommandLink("gitlens.home.openPullRequestComparison")}
			></action-item>`,re`<action-item
				label="Open Pull Request Details"
				icon="eye"
				href=${this.createCommandLink("gitlens.home.openPullRequestDetails")}
			></action-item>`]}};Bl.styles=[Hs,tl,p`
			:host {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}
		`],Bl=El([be("gl-active-branch-card")],Bl);var Fl=Object.defineProperty,Wl=Object.getOwnPropertyDescriptor,zl=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Wl(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Fl(t,o,n),n};let Ml=class extends lit_element_r{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return re`<div class="progress-bar"></div>`}};Ml.styles=p`
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
	`,zl([we({reflect:!0})],Ml.prototype,"mode",2),zl([we({type:Boolean})],Ml.prototype,"active",2),zl([we()],Ml.prototype,"position",2),Ml=zl([be("progress-indicator")],Ml);var jl=Object.defineProperty,Nl=Object.getOwnPropertyDescriptor,Ul=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Nl(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&jl(t,o,n),n};let ql=class extends lit_element_r{constructor(){super(...arguments),this.loading=!1,this.headingLevel="3"}render(){return re`
			<div class="section">
				<header class="section__header">
					<div
						class="section__heading"
						role="heading"
						aria-level=${ji(this.headingLevel?this.headingLevel:void 0)}
					>
						<slot name="heading" class="section__headline"></slot>
					</div>
					<slot name="heading-actions" class="section__actions"></slot>
					<progress-indicator class="section__loader" ?active="${this.loading}"></progress-indicator>
				</header>
				<slot></slot>
			</div>
		`}};ql.styles=[p`
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
		`],Ul([we({type:Boolean})],ql.prototype,"loading",2),Ul([we({attribute:"heading-level"})],ql.prototype,"headingLevel",2),ql=Ul([be("gl-section")],ql);let Gl=class extends lit_element_r{constructor(){super(...arguments),this.isFetching=!1,this.toggleSiblingCardsDebounced=oo(this.toggleSiblingCards.bind(this),100)}connectedCallback(){super.connectedCallback(),this.addEventListener("gl-branch-card-expand-toggled",this.onCardExpanded.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("gl-branch-card-expand-toggled",this.onCardExpanded.bind(this))}onCardExpanded(e){const t=e.composedPath().find((e=>e.matches("gl-branch-card")));this.toggleSiblingCardsDebounced(t)}toggleSiblingCards(e){!0===e?.expanded&&this.branchCards.forEach((t=>{t!==e&&(t.expanded=!1)}))}renderSectionLabel(){return this.isFetching||0===this.branches.length?this.label:`${this.label} (${this.branches.length})`}render(){return re`
			<gl-section ?loading=${this.isFetching}>
				<span slot="heading">${this.renderSectionLabel()}</span>
				<span slot="heading-actions"><slot name="heading-actions"></slot></span>
				${xe(this.branches.length>0,(()=>this.branches.map((e=>re`<gl-branch-card expandable .repo=${this.repo} .branch=${e}></gl-branch-card>`))),(()=>re`<p>No ${this.label} branches</p>`))}
			</gl-section>
		`}};Ul([we({type:String})],Gl.prototype,"label",2),Ul([we()],Gl.prototype,"repo",2),Ul([we({type:Array})],Gl.prototype,"branches",2),Ul([we({type:Boolean})],Gl.prototype,"isFetching",2),Ul([function(e){return(t,o)=>_e(t,o,{get(){return(this.renderRoot??($e??=document.createDocumentFragment())).querySelectorAll(e)}})}("gl-branch-card")],Gl.prototype,"branchCards",2),Gl=Ul([be("gl-branch-section")],Gl);var Vl=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,Kl=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Hl(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Vl(t,o,n),n};let Yl=class extends(Ft(lit_element_r)){constructor(){super(...arguments),this._disposable=[],this._summary=to(void 0),this._summaryState=new AsyncComputedState((async e=>await this._ipc.sendRequest(De,{})))}get startWorkCommand(){return zi("gitlens.home.startWork",void 0)}get createBranchCommand(){return zi("gitlens.home.createBranch",void 0)}connectedCallback(){super.connectedCallback(),this._disposable.push(this._ipc.onReceiveMessage((e=>{if(!0===Ye.is(e))this._summaryState.run(!0)}))),this._summaryState.run()}disconnectedCallback(){super.disconnectedCallback(),this._disposable.forEach((e=>e.dispose()))}render(){return re`
			<gl-section ?loading=${"pending"===this._summaryState.computed.status}>
				<span slot="heading">Launchpad</span>
				<div class="summary">${this.renderSummaryResult()}</div>
				<button-container gap="wide">
					<gl-button full class="start-work" href=${this.startWorkCommand}>Start Work on an Issue</gl-button>
					<gl-button
						appearance="secondary"
						density="compact"
						class="start-work"
						href=${this.createBranchCommand}
						tooltip="Create New Branch"
						><code-icon icon="custom-start-work"></code-icon
					></gl-button>
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
			`:this.renderSummary(this._summaryState.state)}renderSummary(e){if(null==e)return ae;if("error"in e)return re`<ul class="menu">
				<li>Unable to load items</li>
			</ul>`;if(0===e.total)return re`<ul class="menu">
				<li>You are all caught up!</li>
			</ul>`;if(!e.hasGroupedItems)return re`<ul class="menu">
				<li>No pull requests need your attention</li>
				<li>(${e.total} other pull requests)</li>
			</ul>`;const t=[];for(const o of e.groups){let i;switch(o){case"mergeable":{if(i=e.mergeable?.total??0,0===i)continue;const o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"mergeable"}}))}`;t.push(re`<li>
							<a href=${o} class="launchpad-action launchpad-action--mergable">
								<code-icon class="launchpad-action__icon" icon="rocket"></code-icon>
								<span>${qo("pull request",i)} can be merged</span>
							</a>
						</li>`);break}case"blocked":{if(i=e.blocked?.total??0,0===i)continue;const o=[];e.blocked.unassignedReviewers&&o.push({count:e.blocked.unassignedReviewers,message:(e.blocked.unassignedReviewers>1?"need":"needs")+" reviewers"}),e.blocked.failedChecks&&o.push({count:e.blocked.failedChecks,message:(e.blocked.failedChecks>1?"have":"has")+" failed CI checks"}),e.blocked.conflicts&&o.push({count:e.blocked.conflicts,message:(e.blocked.conflicts>1?"have":"has")+" conflicts"});const r=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"blocked"}}))}`;1===o.length?t.push(re`<li>
								<a href=${r} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span>${qo("pull request",i)} ${o[0].message}</span>
								</a>
							</li>`):t.push(re`<li>
								<a href=${r} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span
										>${qo("pull request",i)} ${i>1?"are":"is"} blocked
										(${o.map((e=>`${e.count} ${e.message}`)).join(", ")})</span
									>
								</a>
							</li>`);break}case"follow-up":{if(i=e.followUp?.total??0,0===i)continue;const o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"follow-up"}}))}`;t.push(re`<li>
							<a href=${o} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="report"></code-icon>
								<span
									>${qo("pull request",i)} ${i>1?"require":"requires"}
									follow-up</span
								>
							</a>
						</li>`);break}case"needs-review":{if(i=e.needsReview?.total??0,0===i)continue;const o=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"needs-review"}}))}`;t.push(re`<li>
							<a href=${o} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="comment-unresolved"></code-icon>
								<span
									>${qo("pull request",i)} ${i>1?"need":"needs"} your
									review</span
								>
							</a>
						</li>`);break}}}return re`<menu class="menu">${t}</menu>`}};Yl.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Yl.styles=[Hs,p`
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
		`],Kl([n({context:Ri,subscribe:!0}),ye()],Yl.prototype,"_homeState",2),Kl([n({context:ho})],Yl.prototype,"_ipc",2),Yl=Kl([be("gl-launchpad")],Yl);const Ql=(e,t,o)=>{const i=new Map;for(let r=t;r<=o;r++)i.set(e[r],r);return i},Jl=Mt(class extends directive_i{constructor(e){if(super(e),e.type!==zt)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let i;void 0===o?o=t:void 0!==t&&(i=t);const r=[],n=[];let a=0;for(const t of e)r[a]=i?i(t,a):a,n[a]=o(t,a),a++;return{values:n,keys:r}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,i]){const r=(e=>e._$AH)(e),{values:n,keys:a}=this.dt(t,o,i);if(!Array.isArray(r))return this.ut=a,n;const l=this.ut??=[],c=[];let d,h,p=0,u=r.length-1,g=0,m=n.length-1;for(;p<=u&&g<=m;)if(null===r[p])p++;else if(null===r[u])u--;else if(l[p]===a[g])c[g]=qt(r[p],n[g]),p++,g++;else if(l[u]===a[m])c[m]=qt(r[u],n[m]),u--,m--;else if(l[p]===a[m])c[m]=qt(r[p],n[m]),Ut(e,c[m+1],r[p]),p++,m--;else if(l[u]===a[g])c[g]=qt(r[u],n[g]),Ut(e,r[p],r[u]),u--,g++;else if(void 0===d&&(d=Ql(a,g,m),h=Ql(l,p,u)),d.has(l[p]))if(d.has(l[u])){const t=h.get(a[g]),o=void 0!==t?r[t]:null;if(null===o){const t=Ut(e,r[p]);qt(t,n[g]),c[g]=t}else c[g]=qt(o,n[g]),Ut(e,r[p],o),r[t]=null;g++}else Vt(r[u]),u--;else Vt(r[p]),p++;for(;g<=m;){const t=Ut(e,c[m+1]);qt(t,n[g]),c[g++]=t}for(;p<=u;){const e=r[p++];null!==e&&Vt(e)}return this.ut=a,((e,t=Gt)=>{e._$AH=t})(e,c),se}}),Zl=p`
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
`;var Xl=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,tc=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?ec(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Xl(t,o,n),n};let oc=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;const t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return re` <code-icon icon="check"></code-icon> `}render(){return re`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};oc.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},oc.styles=[Zl],tc([we({type:Boolean,reflect:!0})],oc.prototype,"disabled",2),tc([we({type:String})],oc.prototype,"value",2),tc([we({type:Boolean})],oc.prototype,"defaultChecked",1),tc([we({type:Boolean,reflect:!0})],oc.prototype,"checked",2),oc=tc([be("gl-checkbox")],oc);var ic=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,nc=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?rc(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&ic(t,o,n),n};const sc=p`
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
				${Jl(this.options,(e=>{const t=this.getValue(e),o=this.getLabel(e);return re`<option .value="${t}" ?selected=${this.value===t}>${o}</option>`}))}
			</select>
		`}}GlObjectSelect.styles=[sc],nc([we({type:Boolean})],GlObjectSelect.prototype,"disabled",2),nc([we({type:String})],GlObjectSelect.prototype,"value",2),nc([we({type:Array})],GlObjectSelect.prototype,"options",2);let ac=class extends GlObjectSelect{getValue(e){return e.value}getLabel(e){return e.label}onChange(e){const t=new CustomEvent("gl-change",{detail:{threshold:e.target.value}});this.dispatchEvent(t)}};ac=nc([be("gl-branch-threshold-filter")],ac);var lc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,dc=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?cc(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&lc(t,o,n),n};let hc=class extends(Ft(lit_element_r)){connectedCallback(){super.connectedCallback(),this._homeState.repositories.openCount>0&&this._inactiveOverviewState.run()}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?ae:this._inactiveOverviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>re`<span>Error</span>`})}renderLoader(){return re`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._inactiveOverviewState.state?this.renderLoader():this.renderComplete(this._inactiveOverviewState.state,!0)}onChangeRecentThresholdFilter(e){this._inactiveOverviewState.filter.stale&&this._inactiveOverviewState.filter.recent&&this._ipc.sendCommand(Ne,{stale:this._inactiveOverviewState.filter.stale,recent:{...this._inactiveOverviewState.filter.recent,threshold:e.detail.threshold}})}renderComplete(e,t=!1){if(null==e)return ae;const{repository:o}=e;return re`
			<gl-branch-section
				label="recent"
				.isFetching=${t}
				.repo=${o.path}
				.branches=${e.recent}
			>
				<gl-branch-threshold-filter
					slot="heading-actions"
					@gl-change=${this.onChangeRecentThresholdFilter.bind(this)}
					.options=${[{value:"OneDay",label:"1 day"},{value:"OneWeek",label:"1 week"},{value:"OneMonth",label:"1 month"}]}
					.disabled=${t}
					.value=${this._inactiveOverviewState.filter.recent?.threshold}
				></gl-branch-threshold-filter>
			</gl-branch-section>
			${xe(!0===this._inactiveOverviewState.filter.stale?.show&&e.stale,(()=>re`
					<gl-branch-section
						label="stale"
						.repo=${o.path}
						.branches=${e.stale}
					></gl-branch-section>
				`))}
		`}};hc.styles=[Hs,p`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
		`],dc([n({context:Ri,subscribe:!0}),ye()],hc.prototype,"_homeState",2),dc([n({context:ao})],hc.prototype,"_inactiveOverviewState",2),dc([n({context:ho})],hc.prototype,"_ipc",2),hc=dc([be("gl-overview")],hc);var pc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,gc=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?uc(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&pc(t,o,n),n};let mc=class extends GlElement{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}get orgAllowsDrafts(){return this._state.orgSettings.drafts}get blockRepoFeatures(){if(!this._state)return!0;const{repositories:{openCount:e,hasUnsafe:t,trusted:o}}=this._state;return!o||0===e||t}onRepoFeatureClicked(e){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}render(){return re`
			${xe(this.blockRepoFeatures,(()=>re`
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
				${xe(!this._state.hasAnyIntegrationConnected,(()=>re`
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
				${xe(this.orgAllowsDrafts,(()=>re`
						<div class="nav-list__item">
							<a
								class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
								href="${zi("gitlens.openWalkthrough",{step:"streamline-collaboration",source:{source:"home"}})}"
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
		`}};mc.styles=[ki,xi,Pi,p``],gc([we({type:Object})],mc.prototype,"badgeSource",2),gc([n({context:Ri,subscribe:!0}),ye()],mc.prototype,"_state",2),mc=gc([be("gl-feature-nav")],mc);var bc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,vc=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?fc(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&bc(t,o,n),n};let wc=class extends lit_element_r{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||!0===this._state.amaBannerCollapsed?ae:re`
			<gl-card indicator="info">
				<h4>Live AMA w/ the creator of GitLens</h4>
				<p>
					Feb 13 @ 1pm EST &mdash;
					<a
						href="https://www.gitkraken.com/lp/gitlensama?utm_source=githubdisucssion&utm_medium=hyperlink&utm_campaign=GLAMA&utm_id=GLAMA"
						>Register now</a
					>
				</p>
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}onClose(){this.closed=!0,this._state.amaBannerCollapsed=!0,this._ipc.sendCommand(Me,{section:"feb2025AmaBanner",collapsed:!0})}};wc.styles=[ki,p`
			:host {
				margin-inline: 1.2rem;
			}
			h4 {
				font-weight: normal;
				margin-block-end: 0.4em;
			}

			p {
				margin-block: 0;
				color: var(--vscode-descriptionForeground);
			}
		`],vc([n({context:Ri,subscribe:!0}),ye()],wc.prototype,"_state",2),vc([n({context:ho,subscribe:!0}),ye()],wc.prototype,"_ipc",2),vc([ye()],wc.prototype,"closed",2),wc=vc([be("gl-ama-banner")],wc);var yc=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,kc=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?_c(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&yc(t,o,n),n};let $c=class extends lit_element_r{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||this._state.hasAnyIntegrationConnected||this._state.integrationBannerCollapsed?ae:re`
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
		`}onClose(){this.closed=!0,this._ipc.sendCommand(Me,{section:"integrationBanner",collapsed:!0})}focus(){this._button.focus()}};$c.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},$c.styles=[p`
			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}
		`],kc([n({context:Ri,subscribe:!0}),ye()],$c.prototype,"_state",2),kc([n({context:ho,subscribe:!0}),ye()],$c.prototype,"_ipc",2),kc([ye()],$c.prototype,"closed",2),kc([ke("gl-button")],$c.prototype,"_button",2),$c=kc([be("gl-integration-banner")],$c);var xc=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,Sc=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Cc(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&xc(t,o,n),n};let Pc=class extends lit_element_r{constructor(){super(...arguments),this.closed=!1}get isNewInstall(){return this._state.newInstall}render(){return!0!==this._state.previewEnabled?re`
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
				<h4 class="title">Welcome to the GitLens Home View</h4>
				<p>
					Streamline your workflow — effortlessly track, manage, and collaborate on your branches and pull
					requests, all in one intuitive hub.
					<a class="feedback" href="https://help.gitkraken.com/gitlens/home-view/">Learn more</a>
				</p>
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss Welcome" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}togglePreview(e=!1){this._ipc.sendCommand(ze),e&&(this.closed=!0)}onClose(){this.closed=!0,this._ipc.sendCommand(Me,{section:"newHomePreview",collapsed:!0})}focus(){this._button?.focus()}};Pc.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Pc.styles=[ki,p`
			.title {
				margin-block-end: 0.4em;
			}

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
				${wi}
			}

			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}

			.feedback {
				white-space: nowrap;
			}

			p {
				margin-block: 0;
			}
		`],Sc([n({context:Ri,subscribe:!0}),ye()],Pc.prototype,"_state",2),Sc([n({context:ho,subscribe:!0}),ye()],Pc.prototype,"_ipc",2),Sc([ye()],Pc.prototype,"closed",2),Sc([ke("button")],Pc.prototype,"_button",2),Pc=Sc([be("gl-preview-banner")],Pc);var Oc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,Ac=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Rc(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Oc(t,o,n),n};let Ic=class extends lit_element_r{render(){return re`
			<gl-promo
				.promoPromise=${this.promos.getApplicablePromo("home")}
				source="home"
				class="promo-banner promo-banner--eyebrow"
				id="promo"
				type="link"
			></gl-promo>
		`}};Ic.styles=[p`
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
			.promo-banner:has(gl-promo:not([has-promo])) {
				display: none;
			}
		`],Ac([n({context:Jo})],Ic.prototype,"promos",2),Ic=Ac([be("gl-promo-banner")],Ic);var Tc=Object.defineProperty,Dc=Object.getOwnPropertyDescriptor,Ec=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Dc(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Tc(t,o,n),n};let Lc=class extends GlElement{get hasAlerts(){return!0===this.alertVisibility.header||void 0}get alertVisibility(){const e={header:!1,untrusted:!1,noRepo:!1,unsafeRepo:!1};return null==this._state||this._state.discovering||(this._state.repositories.trusted?0===this._state.repositories.openCount?(e.header=!0,e.noRepo=!0):this._state.repositories.hasUnsafe&&(e.header=!0,e.unsafeRepo=!0):(e.header=!0,e.untrusted=!0)),e}render(){if(null!=this._state&&this.alertVisibility.header)return re`
			${xe(this.alertVisibility.noRepo,(()=>re`
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
			${xe(this.alertVisibility.unsafeRepo,(()=>re`
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
			${xe(this.alertVisibility.untrusted,(()=>re`
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
		`}};Lc.styles=[ki,xi,Si,p`
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
		`],Ec([we({type:Boolean,reflect:!0,attribute:"has-alerts"})],Lc.prototype,"hasAlerts",1),Ec([n({context:Ri,subscribe:!0}),ye()],Lc.prototype,"_state",2),Lc=Ec([be("gl-repo-alerts")],Lc);var Bc=Object.defineProperty,Fc=Object.getOwnPropertyDescriptor,Wc=(e,t,o,i)=>{for(var r,n=i>1?void 0:i?Fc(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&Bc(t,o,n),n};let zc=class extends GlApp{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}createStateProvider(e,t){return this.disposables.push(this._activeOverviewState=new ActiveOverviewState(t)),this.disposables.push(this._inactiveOverviewState=new InactiveOverviewState(t)),new HomeStateProvider(this,e,t)}connectedCallback(){super.connectedCallback(),this.disposables.push(this._ipc.onReceiveMessage((e=>{if(!0===Xe.is(e))this._header.show()})))}render(){return re`
			<div class="home scrollable">
				<gl-home-header class="home__header"></gl-home-header>
				${xe(!1===this.state?.amaBannerCollapsed,(()=>re`<gl-ama-banner></gl-ama-banner>`))}
				${xe(!this.state?.previewEnabled,(()=>re`<gl-preview-banner></gl-preview-banner>`))}
				<gl-repo-alerts class="home__alerts"></gl-repo-alerts>
				<main class="home__main scrollable" id="main">
					${xe(!0===this.state?.previewEnabled,(()=>re`
							<gl-preview-banner></gl-preview-banner>
							<gl-active-work></gl-active-work>
							<gl-launchpad></gl-launchpad>
							<gl-overview></gl-overview>
						`),(()=>re`<gl-feature-nav .badgeSource=${this.badgeSource}></gl-feature-nav>`))}
				</main>
			</div>
		`}};zc.styles=[xi,$i,Ci],Wc([r({context:so})],zc.prototype,"_activeOverviewState",2),Wc([r({context:ao})],zc.prototype,"_inactiveOverviewState",2),Wc([ke("gl-home-header")],zc.prototype,"_header",2),zc=Wc([be("gl-home-app")],zc);var Mc=i.K;export{Mc as GlHomeApp};