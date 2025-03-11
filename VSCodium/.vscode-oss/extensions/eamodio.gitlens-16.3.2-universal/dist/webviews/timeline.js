var e,t,o={47:(e,t,o)=>{const i=o(602),r=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,s=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,a=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/uy,l=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,c=/\p{M}+/gu,h={limit:1/0,ellipsis:""},d=(e,t={},o={})=>{const p=t.limit??1/0,u=t.ellipsis??"",g=t?.ellipsisWidth??(u?d(u,h,o).width:0),m=o.ansiWidth??0,f=o.controlWidth??0,v=o.ambiguousWidth??1,y=o.emojiWidth??2,w=o.fullWidthWidth??2,x=o.regularWidth??1,_=o.wideWidth??2;let $=0,C=0,P=e.length,S=0,A=!1,O=P,D=Math.max(0,p-g),T=0,E=0,F=0,W=0;e:for(;;){if(E>T||C>=P&&C>$){const t=e.slice(T,E)||e.slice($,C);S=0;for(const e of t.replaceAll(c,"")){const t=e.codePointAt(0)||0;if(W=(0,i.isFullWidth)(t)?w:(0,i.isWide)(t)?_:v!==x&&(0,i.isAmbiguous)(t)?v:x,F+W>D&&(O=Math.min(O,Math.max(T,$)+S)),F+W>p){A=!0;break e}S+=e.length,F+=W}T=E=0}if(C>=P)break;if(l.lastIndex=C,l.test(e)){if(S=l.lastIndex-C,W=S*x,F+W>D&&(O=Math.min(O,C+Math.floor((D-F)/x))),F+W>p){A=!0;break}F+=W,T=$,E=C,C=$=l.lastIndex}else if(r.lastIndex=C,r.test(e)){if(F+m>D&&(O=Math.min(O,C)),F+m>p){A=!0;break}F+=m,T=$,E=C,C=$=r.lastIndex}else if(s.lastIndex=C,s.test(e)){if(S=s.lastIndex-C,W=S*f,F+W>D&&(O=Math.min(O,C+Math.floor((D-F)/f))),F+W>p){A=!0;break}F+=W,T=$,E=C,C=$=s.lastIndex}else if(a.lastIndex=C,a.test(e)){if(F+y>D&&(O=Math.min(O,C)),F+y>p){A=!0;break}F+=y,T=$,E=C,C=$=a.lastIndex}else C+=1}return{width:A?D:F,index:A?O:P,truncated:A,ellipsed:A&&p>=g}}},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0;t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109;t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510;t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var s=i[e]={exports:{}};return o[e](s,s.exports,r),s.exports}r.m=o,r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[])),r.u=e=>"lib-billboard.js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="#{root}/dist/webviews/",void 0!==r&&Object.defineProperty(r,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),e={122:0},t=t=>{var o,i,{__webpack_ids__:s,__webpack_modules__:a,__webpack_runtime__:l}=t,c=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);for(l&&l(r);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[s[c]]=0},r.f.j=(o,i)=>{var s=r.o(e,o)?e[o]:void 0;if(0!==s)if(s)i.push(s[1]);else{var a=import("./"+r.u(o)).then(t,(t=>{throw 0!==e[o]&&(e[o]=void 0),t}));a=Promise.race([a,new Promise((t=>s=e[o]=[t]))]),i.push(s[1]=a)}};var s={};r.d(s,{A:()=>vs});const a=globalThis,l=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),h=new WeakMap;class n{constructor(e,t,o){if(this._$cssResult$=!0,o!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(l&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=h.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&h.set(t,e))}return e}toString(){return this.cssText}}const d=e=>new n("string"==typeof e?e:e+"",void 0,c),p=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new n(o,e,c)},u=(e,t)=>{if(l)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=a.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}},g=l?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return d(t)})(e):e,{is:m,defineProperty:f,getOwnPropertyDescriptor:v,getOwnPropertyNames:y,getOwnPropertySymbols:w,getPrototypeOf:x}=Object,_=globalThis,$=_.trustedTypes,C=$?$.emptyScript:"",P=_.reactiveElementPolyfillSupport,S=(e,t)=>e,A={toAttribute(e,t){switch(t){case Boolean:e=e?C:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},O=(e,t)=>!m(e,t),D={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:O};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=D){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&f(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:r}=v(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const s=i?.call(this);r.call(this,t),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??D}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const e=x(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,t=[...y(e),...w(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(g(e))}else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:A).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:A;this._$Em=i,this[i]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??O)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[S("elementProperties")]=new Map,b[S("finalized")]=new Map,P?.({ReactiveElement:b}),(_.reactiveElementVersions??=[]).push("2.0.4");const T=globalThis,E=T.trustedTypes,F=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,W="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+B,j=`<${U}>`,V=document,q=()=>V.createComment(""),G=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Q=Array.isArray,Y=e=>Q(e)||"function"==typeof e?.[Symbol.iterator],K="[ \t\n\f\r]",J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,X=/>/g,ee=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,oe=/"/g,ie=/^(?:script|style|textarea|title)$/i,re=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),se=re(1),ne=(re(2),re(3),Symbol.for("lit-noChange")),ae=Symbol.for("lit-nothing"),le=new WeakMap,ce=V.createTreeWalker(V,129);function he(e,t){if(!Q(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==F?F.createHTML(t):t}const de=(e,t)=>{const o=e.length-1,i=[];let r,s=2===t?"<svg>":3===t?"<math>":"",a=J;for(let t=0;t<o;t++){const o=e[t];let l,c,h=-1,d=0;for(;d<o.length&&(a.lastIndex=d,c=a.exec(o),null!==c);)d=a.lastIndex,a===J?"!--"===c[1]?a=Z:void 0!==c[1]?a=X:void 0!==c[2]?(ie.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=ee):void 0!==c[3]&&(a=ee):a===ee?">"===c[0]?(a=r??J,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?ee:'"'===c[3]?oe:te):a===oe||a===te?a=ee:a===Z||a===X?a=J:(a=ee,r=void 0);const p=a===ee&&e[t+1].startsWith("/>")?" ":"";s+=a===J?o+j:h>=0?(i.push(l),o.slice(0,h)+W+o.slice(h)+B+p):o+B+(-2===h?t:p)}return[he(e,s+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class N{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,s=0;const a=e.length-1,l=this.parts,[c,h]=de(e,t);if(this.el=N.createElement(c,o),ce.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ce.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(W)){const t=h[s++],o=i.getAttribute(e).split(B),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:a[2],strings:o,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),i.removeAttribute(e)}else e.startsWith(B)&&(l.push({type:6,index:r}),i.removeAttribute(e));if(ie.test(i.tagName)){const e=i.textContent.split(B),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],q()),ce.nextNode(),l.push({type:2,index:++r});i.append(e[t],q())}}}else if(8===i.nodeType)if(i.data===U)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(B,e+1));)l.push({type:7,index:r}),e+=B.length-1}r++}}static createElement(e,t){const o=V.createElement("template");return o.innerHTML=e,o}}function pe(e,t,o=e,i){if(t===ne)return t;let r=void 0!==i?o._$Co?.[i]:o._$Cl;const s=G(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e),r._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(t=pe(e,r._$AS(e,t.values),r,i)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??V).importNode(t,!0);ce.currentNode=i;let r=ce.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new R(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new z(r,this,e)),this._$AV.push(t),l=o[++a]}s!==l?.index&&(r=ce.nextNode(),s++)}return ce.currentNode=V,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),G(e)?e===ae||null==e||""===e?(this._$AH!==ae&&this._$AR(),this._$AH=ae):e!==this._$AH&&e!==ne&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Y(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ae&&G(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(he(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new M(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=le.get(e.strings);return void 0===t&&le.set(e.strings,t=new N(e)),t}k(e){Q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new R(this.O(q()),this.O(q()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ae}_$AI(e,t=this,o,i){const r=this.strings;let s=!1;if(void 0===r)e=pe(this,e,t,0),s=!G(e)||e!==this._$AH&&e!==ne,s&&(this._$AH=e);else{const i=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=pe(this,i[o+a],t,a),l===ne&&(l=this._$AH[a]),s||=!G(l)||l!==this._$AH[a],l===ae?e=ae:e!==ae&&(e+=(l??"")+r[a+1]),this._$AH[a]=l}s&&!i&&this.j(e)}j(e){e===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ae?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ae)}}class L extends k{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??ae)===ne)return;const o=this._$AH,i=e===ae&&o!==ae||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==ae&&(o===ae||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}}const ue={M:W,P:B,A:U,C:1,L:de,R:M,D:Y,V:pe,I:R,H:k,N:I,U:L,B:H,F:z},ge=T.litHtmlPolyfillSupport;ge?.(N,R),(T.litHtmlVersions??=[]).push("3.2.1");class lit_element_r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let r=i._$litPart$;if(void 0===r){const e=o?.renderBefore??null;i._$litPart$=r=new R(t.insertBefore(q(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ne}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const me=globalThis.litElementPolyfillSupport;me?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const fe=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},be={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:O},ve=(e=be,t,o)=>{const{kind:i,metadata:r}=o;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];t.call(this,o),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function ye(e){return(t,o)=>"object"==typeof o?ve(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function we(e){return ye({...e,state:!0,attribute:!1})}const xe=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ke(e,t){return(o,i,r)=>{const s=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return xe(o,i,{get(){let o=e.call(this);return void 0===o&&(o=s(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return xe(o,i,{get(){return s(this)}})}}const _e=14;var $e=(e=>(e.Community="community",e.CommunityWithAccount="community-with-account",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))($e||{}),Ce=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Community=0]="Community",e[e.ProPreview=1]="ProPreview",e[e.ProPreviewExpired=2]="ProPreviewExpired",e[e.ProTrial=3]="ProTrial",e[e.ProTrialExpired=4]="ProTrialExpired",e[e.ProTrialReactivationEligible=5]="ProTrialReactivationEligible",e[e.Paid=6]="Paid",e))(Ce||{});const Pe=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Se=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Re=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Ae;const Oe=new Map;let De,Te,Ee;const ze=new Map;function Le(e,t,o,i=!0){const r=`${o??""}:${t=t??void 0}`;let s=Oe.get(r);if(null==s){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Se.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Pe))if(null!=t)for(const[e,i]of Object.entries(t))if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===i?"2-digit":"numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}return o}(t);let a;a=null==o?De:"system"===o?void 0:[o],s=new Intl.DateTimeFormat(a,e),i&&Oe.set(r,s)}if(null==t||Se.test(t))return s.format(e);function a(e){const t=`${o??""}:time:${e}`;let r=Oe.get(t);if(null==r){const s={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?De:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,s),i&&Oe.set(t,r)}return r}const l=s.formatToParts(e);return t.replace(Pe,((t,o,i,r,s,c,h,d,p,u,g,m,f,v,y)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(y)){if(null==o)continue;const i=l.find((e=>e.type===t));if("Do"===o&&"day"===i?.type)return Ie(Number(i.value));if("a"===o&&"dayPeriod"===i?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??i)?.value??""}`}return i?.value??""}return""}))}const Fe=["th","st","nd","rd"];function Ie(e){const t=e%100;return`${e}${Fe[(t-20)%10]??Fe[t]??Fe[0]}`}function We(e,t){null==e&&(e="decimal");const o=`${t??""}:${e}`;let i=ze.get(o);if(null==i){const r={localeMatcher:"best fit",style:e};let s;s=null==t?De:"system"===t?void 0:[t],i=new Intl.NumberFormat(s,r),ze.set(o,i)}return i.format}function Me(e){return`GitLens ${function(e){switch(e){case $e.CommunityWithAccount:return"Community";case $e.Pro:return"Pro";case $e.Teams:return"Teams";case $e.Enterprise:return"Enterprise";case $e.Community:default:return"Community"}}(e)}`}$e.Community,$e.CommunityWithAccount,$e.Pro,$e.Teams,$e.Enterprise;function Be(e,t){return Ue(e.plan.effective.expiresOn,t)}function Ue(e,t){return null!=e?function(e,t,o,i){const r=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=i??Math.floor;switch(o){case"days":return s(r/864e5);case"hours":return s(r/36e5);case"minutes":return s(r/6e4);case"seconds":return s(r/1e3);default:return r}}(Date.now(),new Date(e),t,Math.round):void 0}function Ne(e){return(t=e.plan.actual.id)!==$e.Community&&t!==$e.CommunityWithAccount;var t}class IpcCall{constructor(e,t,o=!1,i=!1){this.scope=e,this.reset=o,this.pack=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const je=new IpcCommand("core","webview/ready"),Ve=new IpcCommand("core","webview/focus/changed"),He=(new IpcCommand("core","command/execute"),new class IpcRequest extends IpcCall{constructor(e,t,o,i){super(e,t,o,i),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}}("core","promos/applicable")),qe=(new IpcCommand("core","configuration/update"),new IpcCommand("core","telemetry/sendEvent"));function Ge(e){return null!=e&&"object"==typeof e&&"__ipc"in e&&"promise"===e.__ipc&&"id"in e&&"string"==typeof e.id&&"method"in e&&"string"==typeof e.method}const Qe=new IpcNotification("core","ipc/promise/settled"),Ye=(new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const Ke="timeline",Je=new IpcCommand(Ke,"point/open"),Ze=new IpcCommand(Ke,"period/update"),Xe=new IpcNotification(Ke,"didChange");class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class context_consumer_s{constructor(e,t,o,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context){const e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.t,this.subscribe))}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class context_provider_i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function et({context:e}){return(t,o)=>{const i=new WeakMap;if("object"==typeof o)return o.addInitializer((function(){i.set(this,new context_provider_i(this,{context:e}))})),{get(){return t.get.call(this)},set(e){return i.get(this)?.setValue(e),t.set.call(this,e)},init(e){return i.get(this)?.setValue(e),e}};{t.constructor.addInitializer((t=>{i.set(t,new context_provider_i(t,{context:e}))}));const r=Object.getOwnPropertyDescriptor(t,o);let s;if(void 0===r){const e=new WeakMap;s={get(){return e.get(this)},set(t){i.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{const e=r.set;s={...r,set(t){i.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,o,s)}}}function tt({context:e,subscribe:t}){return(o,i)=>{"object"==typeof i?i.addInitializer((function(){new context_consumer_s(this,{context:e,callback:e=>{o.set.call(this,e)},subscribe:t})})):o.constructor.addInitializer((o=>{new context_consumer_s(o,{context:e,callback:e=>{o[i]=e},subscribe:t})}))}}function ot(e,t,o){let i,r,s,a,l;function c(){const e=Date.now();if(function(e){const o=e-(r??0);return null==r||o>=t||o<0}(e))h();else{l=setTimeout(c,t-(e-(r??0)))}}function h(){return l=void 0,i?function(){const t=i,o=s;return i=s=void 0,a=e.apply(o,t),a}():(i=void 0,s=void 0,a)}function d(...e){const h=Date.now();return i=null!=o&&i?o(i,e):e,s=this,r=h,null==l&&(l=setTimeout(c,t)),a}return d.cancel=function(){null!=l&&clearTimeout(l),i=void 0,r=void 0,s=void 0,l=void 0},d.flush=function(){return null==l?a:(clearTimeout(l),h())},d.pending=function(){return null!=l},d}const it=/\(([\s\S]*)\)/,rt=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,st=/\s?=.*$/;const nt=new WeakMap;function at(e,t){return function(o,i,r){let s=nt.get(o.constructor);null==s&&nt.set(o.constructor,s=[]),s.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_r{emit(e,t,o){const i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(i),i}update(e){const t=nt.get(this.constructor);if(null!=t)for(const{keys:o,method:i,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&i.call(this,t)}super.update(e)}}function lt(e){const t=.001*performance.now();let o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],i-=e[1],i<0&&(o--,i+=1e9)),[o,i]}function ct(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const ht=ct(),dt=new Map;function pt(e){dt.delete(e)}function ut(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function gt(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?ht.current:void 0,i=ht.next();return{scopeId:i,prevScopeId:o,prefix:`${ut(i,o)} ${e}`}}Error;function mt(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;r(47);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const ft="utm_source=gitlens-extension&utm_medium=in-app-links",bt=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${ft}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${ft}`,graph:`https://gitkraken.com/solutions/commit-graph?${ft}`,launchpad:`https://gitkraken.com/solutions/launchpad?${ft}`,platform:`https://gitkraken.com/devex?${ft}`,pricing:`https://gitkraken.com/gitlens/pricing?${ft}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${ft}`,security:`https://help.gitkraken.com/gitlens/security?${ft}`,workspaces:`https://gitkraken.com/solutions/workspaces?${ft}`,cli:`https://gitkraken.com/cli?${ft}`,browserExtension:`https://gitkraken.com/browser-extension?${ft}`,desktop:`https://gitkraken.com/git-client?${ft}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${ft}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${ft}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ft}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${ft}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${ft}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ft}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${ft}`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ft}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ft}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ft}#streamline-collaboration`}),{fromCharCode:vt}=String;new TextEncoder;function yt(e){const[t,o]=lt(e);return 1e3*t+Math.floor(o/1e6)}let wt;function xt(e,t,o){if(null==o)return wt??=We(),`${wt(t)} ${e}${1===t?"":"s"}`;const i=1===t?e:o.plural??`${e}s`;if(o.only)return i;let r;return 0===t?r=o.zero??t:!1===o.format?r=t:null!=o.format?r=o.format(t):(wt??=We(),r=wt(t)),`${r}${o.infix??" "}${i}`}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);const kt=Symbol("logInstanceNameFn");function _t(e){return $t(e,!0)}function $t(e,t=!1){let o,i,r,s,a,l=0,c=!1,h=!1,d=!0;null!=e&&({args:o,if:i,enter:r,exit:s,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:d=!0}=e),l>0&&(h=!0,d=!0),d&&(c=!0);const p=Pt.isDebugging,u=t?Pt.debug:Pt.log,g=p?"debug":"info";return(e,t,m)=>{let f,v;if("function"==typeof m.value?(f=m.value,v="value"):"function"==typeof m.get&&(f=m.get,v="get"),null==f||null==v)throw new Error("Not supported");const y=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(rt,"")||t,t=t.slice(0,t.indexOf("{"));let o=t.indexOf("("),i=t.indexOf(")");o=o>=0?o+1:0,i=i>0?i:t.indexOf("="),t=t.slice(o,i),t=`(${t})`;const r=it.exec(t);return null!=r?r[1].split(",").map((e=>e.trim().replace(st,""))):[]}(f):[];m[v]=function(...e){if(!p&&!Pt.enabled(g)||null!=i&&!i.apply(this,e))return f.apply(this,e);const m=ht.current,v=ht.next(),w=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const i=o.indexOf("_");o=-1===i?o:o.substring(i+1),null!=t?.[kt]&&(o=t[kt](e,o));return o}(this):void 0;let x,_=w?c?`${ut(v,m)} ${w}.${t}`:`${w}.${t}`:t;null!=a&&(_=a({id:v,instance:this,instanceName:w??"",name:t,prefix:_},...e)),c&&(x=function(e,t){return t={prevScopeId:ht.current,...t},dt.set(e,t),t}(v,{scopeId:v,prevScopeId:m,prefix:_}));const $=null!=r?r(...e):"";let C;if(!1===o||0===e.length)C="",h||u.call(Pt,`${_}${$}`);else{let t;C="";let i,r,s,a=-1;for(s of e){if(i=y[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(C.length>0&&(C+=", "),"string"==typeof t){C+=t;continue}r=String(t(s))}else C.length>0&&(C+=", "),r=Pt.toLoggable(s);C+=i?`${i}=${r}`:r}h||u.call(Pt,C?`${_}${$}(${C})`:`${_}${$}`)}if(h||d||null!=s){const t=d?lt():void 0,o=e=>{const o=void 0!==t?` [${yt(t)}ms]`:"";h?Pt.error(e,C?`${_}${$}(${C})`:`${_}${$}`,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`):Pt.error(e,_,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`),c&&pt(v)};let i;try{i=f.apply(this,e)}catch(e){throw o(e),e}const r=e=>{let o,i,r,a;if(null!=t?(o=yt(t),o>500?(i=Pt.warn,r=` [*${o}ms] (slow)`):(i=u,r=` [${o}ms]`)):(r="",i=u),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${Pt.toLoggable(e)}`);else x?.exitFailed?(a=x.exitFailed,i=(e,...t)=>Pt.error(null,e,...t)):a="completed";h?(0===l||o>l)&&i.call(Pt,C?`${_}${$}(${C}) ${a}${x?.exitDetails||""}${r}`:`${_}${$} ${a}${x?.exitDetails||""}${r}`):i.call(Pt,C?`${_}(${C}) ${a}${x?.exitDetails||""}${r}`:`${_} ${a}${x?.exitDetails||""}${r}`),c&&pt(v)};return null!=i&&mt(i)?i.then(r,o):r(i),i}return f.apply(this,e)}}}const Ct=["accessToken","password","token"],Pt=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){if(null!=e.sanitizeKeys)for(const t of Ct)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(Ct);this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=St(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=St(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==i){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,((e,o)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(o=t(e,o)),null!=this.provider?.sanitizer&&(o=this.provider.sanitizer(e,o)),o)))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function St(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const Rt={enabled:e=>Pt.enabled(e)||Pt.isDebugging,log:(e,t,o,...i)=>{switch(e){case"error":Pt.error(void 0,t,o,...i);break;case"warn":Pt.warn(t,o,...i);break;case"info":Pt.log(t,o,...i);break;default:Pt.debug(t,o,...i)}}};class LoggerContext{constructor(e){this.scope=gt(e,void 0),Pt.configure({name:e,createChannel:function(e){return{name:e,appendLine:Pt.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?Pt.log(this.scope,e,...t):Pt.log(e,t.shift(),...t)}}class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e}async getApplicablePromo(e){let t=this._promos.get(e);null==t&&(t=this.ipc.sendRequest(He,{location:e}).then((e=>e.promo),(()=>{})),this._promos.set(e,t));return await t}dispose(){this.disposables.forEach((e=>e.dispose()))}}const At="promos";class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(qe,e)}dispose(){this.disposables.forEach((e=>e.dispose()))}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:gt(e??"",!1),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??Rt,this._time=lt(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=lt(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=lt(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,i]=lt(this._time),r=1e3*o+Math.floor(i/1e6),s=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${r}ms]${e?.suffix??""}`)}}var Ot;function Dt(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function Tt(e,t){return new Promise((o=>{e.addEventListener(t,(function i(r){r.target===e&&(e.removeEventListener(t,i),o())}))}))}(Ot||(Ot={})).on=function(e,t,o,i){let r=!1;if("string"==typeof e){const s=function(t){const i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,s,i??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,s,i??!0))}}}const s=function(e){o(e,this)};return e.addEventListener(t,s,i??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,s,i??!1))}}};const Et=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const i=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=_Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};Et._noop=function(){};let zt=Et;const Lt={done:!0,value:void 0},Ft=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};Ft.Undefined=new Ft(void 0);let It=Ft;class LinkedList{constructor(){this._first=It.Undefined,this._last=It.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===It.Undefined}clear(){this._first=It.Undefined,this._last=It.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new It(e);if(this._first===It.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===It.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===It.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==It.Undefined&&e.next!==It.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===It.Undefined&&e.next===It.Undefined?(this._first=It.Undefined,this._last=It.Undefined):e.next===It.Undefined?(this._last=this._last.prev,this._last.next=It.Undefined):e.prev===It.Undefined&&(this._first=this._first.next,this._first.prev=It.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===It.Undefined?Lt:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==It.Undefined;t=t.next)e.push(t.element);return e}}var Wt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,Bt=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?Mt(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Wt(t,o,s),s};let Ut;const Nt=ct();function jt(){return`webview:${Nt.next()}`}let Vt=class{constructor(e){this.appName=e,this._onReceiveMessage=new zt,this._pendingHandlers=new Map,this._api=Ut??=acquireVsCodeApi(),this._disposable=Ot.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=dt.get(ht.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const i=function(e,t,...o){return(t?.provider??Rt).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(gt(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),i?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null==o.completionId)this._onReceiveMessage.fire(o);else{const e=qt(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(const t in e){const o=e[t];Ge(o)?e[t]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(e,t){const o=jt();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=jt(),i=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),i}getResponsePromise(e,t){return new Promise(((o,i)=>{const r=qt(e,t);let s;function a(){clearTimeout(s),s=void 0,this._pendingHandlers.delete(r)}s=setTimeout((()=>{a.call(this),i(new Error(`Timed out waiting for completion of ${r}`))}),60*(Pt.isDebugging?60:5)*1e3),this._pendingHandlers.set(r,(e=>{if(a.call(this),e.method===Qe.method){const t=e.params;"rejected"===t.status?queueMicrotask((()=>i(new Error(t.reason)))):queueMicrotask((()=>o(t.value)))}else queueMicrotask((()=>o(e.params)))}))}))}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var Ht;function qt(e,t){return`${e}|${t}`}Bt([_t({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],Vt.prototype,"onMessageReceived",1),Bt([_t({args:{0:e=>e.method,1:!1}})],Vt.prototype,"sendCommand",1),Bt([_t({args:{0:e=>e.method,1:!1,2:!1}})],Vt.prototype,"sendRequest",1),Bt([_t({args:{0:e=>`${e.id}, method=${e.method}`}})],Vt.prototype,"postMessage",1),Vt=Bt([(Ht=(e,t)=>`${e.appName}(${t})`,e=>{e[kt]=Ht})],Vt);var Gt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Yt=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?Qt(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Gt(t,o,s),s};class GlApp extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{const t=e.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===t||(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}get state(){return this._stateProvider.state}onPersistState(e){}connectedCallback(){super.connectedCallback(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new Vt(this.name);const e=this.bootstrap;this.bootstrap=void 0,this._ipc.replaceIpcPromisesWithPromises(e),this.onPersistState(e),this.disposables.push(this._stateProvider=this.createStateProvider(e,this._ipc),this._ipc.onReceiveMessage((e=>{if(!0===Ye.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"))})),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._ipc.sendCommand(je,void 0),this._sendWebviewFocusChangedCommandDebounced=ot((e=>{this._ipc.sendCommand(Ve,e)}),150),document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}disconnectedCallback(){super.disconnectedCallback(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach((e=>e.dispose()))}render(){return se`<slot></slot>`}}GlApp.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Yt([ye({type:String})],GlApp.prototype,"name",2),Yt([ye({type:String})],GlApp.prototype,"placement",2),Yt([et({context:"ipc"})],GlApp.prototype,"_ipc",2),Yt([et({context:"logger"})],GlApp.prototype,"_logger",2),Yt([et({context:At})],GlApp.prototype,"_promos",2),Yt([et({context:"telemetry"})],GlApp.prototype,"_telemetry",2),Yt([ye({type:Object,noAccessor:!0})],GlApp.prototype,"bootstrap",2);class TimelineStateProvider{constructor(e,t,o){this._ipc=o,this._state=t,this.provider=new context_provider_i(e,{context:"state",initialValue:t}),this.disposable=this._ipc.onReceiveMessage((t=>{if(!0===Xe.is(t))this._state={...t.params.state,timestamp:Date.now()},this.provider.setValue(this._state,!0),e.requestUpdate()}))}get state(){return this._state}dispose(){this.disposable.dispose()}}const Kt=p`
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

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
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

	section,
	header {
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	h2 {
		font-weight: 400;
	}

	h3 {
		border: none;
		color: var(--color-view-header-foreground);
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 0;
		white-space: nowrap;
	}

	h4 {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 0.5rem 0 1rem 0;
	}
`,Jt=p`
	:host {
		display: block;
		color: var(--color-view-foreground);
		font-family: var(--font-family);
		font-size: var(--font-size);
		margin: 0;
		padding: 0;
		height: 100%;
	}

	.container {
		display: grid;
		grid-template-rows: min-content 1fr min-content;
		min-height: 100%;
		overflow: hidden;
	}

	.header {
		display: grid;
		grid-template-columns: 1fr min-content;
		align-items: baseline;
		grid-template-areas: 'details toolbox';
		margin: 0.5rem 1rem 0.5rem 2rem;
	}

	:host-context(body[data-placement='editor']) .header {
		margin-top: 1rem;
		margin-right: 1.5rem;
	}

	.details {
		grid-area: details;
		display: flex;
		gap: 1rem;
		align-items: baseline;
		font-size: var(--font-size);
		min-width: 0;
		margin-right: 1rem;
	}

	.details span {
		min-width: 0;
		margin: 0;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.details__title {
		flex: 0 1 auto;
	}

	.details__description {
		flex: 0 1000000000 auto;
		opacity: 0.7;
		font-size: 1.1rem;
	}

	.details__sha {
		flex: 0 100000 auto;
		opacity: 0.7;
		font-size: 1.1rem;
	}

	.details__sha .sha {
		margin-left: 0.25rem;
	}

	.toolbox {
		grid-area: toolbox;
		align-items: center;
		display: flex;
		gap: 0.3rem;
	}

	.toolbox gl-feature-badge {
		padding-bottom: 0.4rem;
	}

	:host-context(body[data-placement='editor']) .toolbox gl-feature-badge {
		padding-left: 0.4rem;
	}

	.select-container {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex: 100% 0 1;
		position: relative;
	}

	.select-container label {
		margin: 0 1em 0 0.5rem;
		font-size: var(--font-size);
		user-select: none;
	}

	.select-container::after {
		font-family: codicon;
		content: '\\eab4';
		font-size: 1.4rem;
		pointer-events: none;
		top: 50%;
		right: 8px;
		transform: translateY(-50%);
		position: absolute;
		color: var(--vscode-foreground);
	}

	.period {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		border: 1px solid var(--vscode-dropdown-border);
		cursor: pointer;
		font-family: inherit;
		min-height: 100%;
		padding: 2px 26px 2px 8px;
		background-color: var(--vscode-dropdown-background);
		border-radius: 0.3rem;
		box-sizing: border-box;
		color: var(--vscode-foreground);
		font-family: var(--font-family);
		height: 26px;
		user-select: none;
	}

	.timeline {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.timeline__empty {
		padding: 0.4rem 2rem 1.3rem 2rem;
		font-size: var(--font-size);
	}

	.timeline__empty p {
		margin-top: 0;
	}

	gl-feature-gate gl-feature-badge {
		vertical-align: super;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
	}
`,Zt=p`
	:host {
		display: block;
		position: relative;
		width: 100%;
		height: 100%;
	}

	#chart {
		position: absolute !important;
		height: 100%;
		width: 100%;
	}

	/* :host-context(:host[placement='view']) #chart {
		height: calc(100% - 0.4rem);
		width: calc(100% + 6.9rem);
		left: -3.5rem;
		bottom: 0.3rem;
	} */

	.bb svg {
		font: 10px sans-serif;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.bb path,
	.bb line {
		fill: none;
	}

	:host-context(.vscode-dark) .bb path.domain,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb path.domain {
		stroke: var(--color-background--lighten-15);
	}

	:host-context(.vscode-light) .bb path.domain,
	:host-context(.vscode-high-contrast-light) .bb path.domain {
		stroke: var(--color-background--darken-15);
	}

	.bb text,
	.bb .bb-button {
		user-select: none;
		fill: var(--color-view-foreground);
		font-size: 11px;
	}

	.bb .bb-event-rects,
	.bb .bb-event-rect {
		cursor: pointer !important;
	}

	.bb .bb-event-rects:active,
	.bb .bb-event-rect:active {
		cursor: ew-resize !important;
	}

	.bb .bb-xgrid-focus,
	.bb .bb-ygrid-focus,
	.bb .bb-ygrid,
	.bb .bb-event-rect,
	.bb .bb-bars path {
		shape-rendering: crispEdges;
	}

	.bb .bb-legend-item-tile {
		stroke-width: 2px;
		transform: translate(0, 1px);
	}

	.bb .bb-chart-arc .bb-gauge-value {
		fill: #000;
	}

	.bb .bb-chart-arc path {
		stroke: #fff;
	}

	.bb .bb-chart-arc rect {
		stroke: #fff;
		stroke-width: 1;
	}

	.bb .bb-chart-arc text {
		fill: #fff;
		font-size: 13px;
	}

	.bb .bb-axis {
		shape-rendering: crispEdges;
	}

	.bb .bb-grid {
		pointer-events: none;
	}

	:host-context(.vscode-dark) .bb .bb-grid line,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-grid line {
		stroke: var(--color-background--lighten-05);
	}

	:host-context(.vscode-dark) .bb .bb-grid line.bb-ygrid,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-grid line.bb-ygrid {
		stroke: var(--color-background--lighten-05);
	}

	:host-context(.vscode-light) .bb .bb-grid line,
	:host-context(.vscode-high-contrast-light) .bb .bb-grid line {
		stroke: var(--color-background--darken-05);
	}

	:host-context(.vscode-light) .bb .bb-grid line.bb-ygrid,
	:host-context(.vscode-high-contrast-light) .bb .bb-grid line.bb-ygrid {
		stroke: var(--color-background--darken-05);
	}

	.bb .bb-grid text {
		fill: var(--color-view-foreground);
	}

	:host-context(.vscode-dark) .bb .bb-xgrid-focus line,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-xgrid-focus line {
		stroke: var(--color-background--lighten-30);
	}

	:host-context(.vscode-light) .bb .bb-xgrid-focus line,
	:host-context(.vscode-high-contrast-light) .bb .bb-xgrid-focus line {
		stroke: var(--color-background--darken-30);
	}

	.bb .bb-text.bb-empty {
		fill: #808080;
		font-size: 2em;
	}

	.bb .bb-line {
		stroke-width: 1px;
	}

	.bb .bb-circle._expanded_ {
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 3px;
	}

	.bb .bb-selected-circle {
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 3px;
	}

	.bb .bb-bar {
		stroke-width: 0;
		opacity: 0.9 !important;
		fill-opacity: 0.9 !important;
	}

	.bb .bb-bar._expanded_ {
		opacity: 1 !important;
		fill-opacity: 1 !important;
	}

	.bb .bb-candlestick {
		stroke-width: 1px;
	}

	.bb .bb-candlestick._expanded_ {
		fill-opacity: 0.75;
	}

	.bb .bb-target.bb-focused,
	.bb .bb-circles.bb-focused {
		opacity: 1;
	}

	.bb .bb-target.bb-focused path.bb-line,
	.bb .bb-target.bb-focused path.bb-step,
	.bb .bb-circles.bb-focused path.bb-line,
	.bb .bb-circles.bb-focused path.bb-step {
		stroke-width: 2px;
	}

	.bb .bb-target.bb-defocused,
	.bb .bb-circles.bb-defocused {
		opacity: 0.2 !important;
	}

	.bb .bb-target.bb-defocused .text-overlapping,
	.bb .bb-circles.bb-defocused .text-overlapping {
		opacity: 0.05 !important;
	}

	.bb .bb-region {
		fill: steelblue;
		fill-opacity: 0.1;
	}

	:host-context(.vscode-dark) .bb .bb-zoom-brush,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-zoom-brush {
		fill: white;
		fill-opacity: 0.2;
	}

	:host-context(.vscode-light) .bb .bb-zoom-brush,
	:host-context(.vscode-high-contrast-light) .bb .bb-zoom-brush {
		fill: black;
		fill-opacity: 0.1;
	}

	.bb .bb-brush .extent {
		fill-opacity: 0.1;
	}

	.bb .bb-legend-item {
		font-size: 12px;
		user-select: none;
	}

	.bb .bb-legend-item-hidden {
		opacity: 0.15;
	}

	.bb .bb-legend-background {
		opacity: 0.75;
		fill: white;
		stroke: lightgray;
		stroke-width: 1;
	}

	.bb .bb-title {
		font: 14px sans-serif;
	}

	.bb .bb-tooltip-container {
		z-index: 10;
		user-select: none;
	}

	.bb .bb-area {
		stroke-width: 0;
		opacity: 0.2;
	}

	.bb .bb-chart-arcs-title {
		dominant-baseline: middle;
		font-size: 1.3em;
	}

	.bb text.bb-chart-arcs-gauge-title {
		dominant-baseline: middle;
		font-size: 2.7em;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-background {
		fill: #e0e0e0;
		stroke: #fff;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-gauge-unit {
		fill: #000;
		font-size: 16px;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-gauge-max {
		fill: #777;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-gauge-min {
		fill: #777;
	}

	.bb .bb-chart-radars .bb-levels polygon {
		fill: none;
		stroke: #848282;
		stroke-width: 0.5px;
	}

	.bb .bb-chart-radars .bb-levels text {
		fill: #848282;
	}

	.bb .bb-chart-radars .bb-axis line {
		stroke: #848282;
		stroke-width: 0.5px;
	}

	.bb .bb-chart-radars .bb-axis text {
		font-size: 1.15em;
		cursor: default;
	}

	.bb .bb-chart-radars .bb-shapes polygon {
		fill-opacity: 0.2;
		stroke-width: 1px;
	}

	.bb .bb-button {
		position: absolute;
		top: 0.4rem;
		right: -1.4rem;
		background-color: var(--color-button-background);
		color: var(--color-button-foreground);
		font-size: var(--font-size);
		font-family: var(--font-family);
	}

	:host-context(:host[placement='view']) .bb .bb-button {
		margin-right: 2.8rem;
	}

	.bb .bb-zoom-reset {
		display: inline-block;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	.empty {
		padding: 0.4rem 2rem 1.3rem 2rem;
		font-size: var(--font-size);
	}

	.empty p {
		margin-top: 0;
	}

	.bb-tooltip {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: var(--color-hover-background);
		color: var(--color-hover-foreground);
		border: 1px solid var(--color-hover-border);
		box-shadow: 0 2px 8px var(--vscode-widget-shadow);
		font-size: var(--font-size);
		opacity: 1;
		white-space: nowrap;
		min-width: 0;
		max-width: 360px;
		overflow: hidden;
	}

	.bb-tooltip .author {
		font-weight: 600;
	}

	.bb-tooltip .additions {
		color: var(--vscode-gitDecoration-addedResourceForeground);
	}

	.bb-tooltip .deletions {
		color: var(--vscode-gitDecoration-deletedResourceForeground);
	}

	.bb-tooltip .date {
		flex: 1 1 auto;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		font-weight: normal;
		gap: 0.5rem;
		min-width: 0;
	}

	.bb-tooltip .date--relative {
		flex: 0 1 auto;
	}

	.bb-tooltip .date--absolute {
		flex: 0 100000 auto;
		font-style: italic;
	}

	.bb-tooltip .message {
		margin-left: 2rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		max-height: 12rem;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.bb-tooltip .message__content {
		white-space: pre-line;
	}

	:host-context(:host[placement='view']) .bb-axis-y .tick text {
		transform: translate(0, 0.4rem);
		font-family: codicon;
		font-size: 1.5rem;
	}

	@media (max-height: 275px) {
		:host-context(:host[placement='view']) .bb-axis-y .tick text {
			transform: none;
			font-size: 1rem;
		}
	}

	@media (max-height: 225px) {
		:host-context(:host[placement='view']) .bb-axis-y .tick text {
			display: none;
		}
	}
`;var Xt=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,to=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?eo(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Xt(t,o,s),s};let oo=class extends GlElement{constructor(){super(...arguments),this._authors=new Map,this._authorsByIndex=new Map,this._commitsByTimestamp=new Map,this.placement="editor",this._data=null,this.zoomed=!1,this.onDataPointClicked=(e,t)=>{const o=this._commitsByTimestamp.get(new Date(e.x).toISOString());null!=o&&this.emit("gl-data-point-click",{data:{id:o.commit,selected:!0}})},this.onResize=e=>{this._chart?.resize({width:e[0].contentRect.width,height:e[0].contentRect.height})}}get compact(){return"editor"!==this.placement}get data(){return this._data}get dataPromise(){return this._dataPromise}set dataPromise(e){this._dataPromise!==e&&(this._dataPromise=e,this._dataPromise?.then((e=>this._data=e),(()=>this._data=void 0)))}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(this.onResize),this._resizeObserver?.observe(this,{box:"border-box"})}disconnectedCallback(){this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._loading?.cancel(),this._chart?.destroy(),this._chart=void 0,super.disconnectedCallback()}update(e){e.has("zoomed")&&this.emit("gl-zoomed",this.zoomed),e.has("dataPromise")&&(this._abortController?.abort(),this._abortController=new AbortController,this._loading?.cancel(),this.updateChart(this.dataPromise)),super.update(e)}render(){return null===this.data?ae:this.data?.length?se`<div id="chart"></div>`:se`<div class="empty"><p>No commits found for the specified time period.</p></div>`}reset(){this._chart?.unzoom(),this.zoomed=!1}zoom(e){if(!this._chart)return;const t=this._chart.zoom(),o=[new Date(t[0]),new Date(t[1])],i=o[1].getTime()-o[0].getTime(),r=new Date((o[1].getTime()+o[0].getTime())/2),s=new Date(r.getTime()-i*(1-e)/2),a=new Date(r.getTime()+i*(1-e)/2),l=this._chart.zoom([s,a]);e<0&&l[0]===t[0]&&l[1]===t[1]&&(this._chart.unzoom(),this.zoomed=!1)}async updateChart(e){if(this._loading?.pending)return;const t=this._abortController,o=function(){const e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0};return e.promise=new Promise(((t,o)=>{e.fulfill=function(o){e.pending=!1,t(o)},e.cancel=function(t){e.pending=!1,null!=t?o(t):o()}})),e}();this._loading=o,o.promise.then((()=>this.emit("gl-load")),(()=>{}));const i=await e;if(t?.signal.aborted)return void o?.cancel();if(!i?.length)return this._chart?.destroy(),this._chart=void 0,void o?.fulfill();this._authors.clear(),this._authorsByIndex.clear(),this._commitsByTimestamp.clear();const s={minRadius:6,maxRadius:50,...this.calculateChangeMetrics(i)},{bb:a,bar:l,scatter:c,selection:h,zoom:d}=await r.e(162).then(r.bind(r,294));if(t?.signal.aborted)return void o?.cancel();this._originalDomain=[new Date(i[i.length-1].date),new Date(i[0].date)],l(),c();const p=this.prepareChartData(i,s);try{const e=-(this._authors.size+1),t=[...this._authorsByIndex.keys()];if(null==this._chart){const i={bindto:this.chartContainer,onafterinit:()=>setTimeout((()=>o?.fulfill()),250),onrendered:this.compact?this.getOnRenderedCallback(this):void 0,onresized:()=>{null!=this._chart&&null!=this._zoomedDomain&&this._chart.zoom(this._zoomedDomain)},clipPath:!0,data:{...p,colors:{additions:"rgba(73, 190, 71, 1)",deletions:"rgba(195, 32, 45, 1)"},groups:[["additions","deletions"]],selection:{enabled:h(),draggable:!1,grouped:!0,multiple:!1,isselectable:()=>!1},onclick:this.onDataPointClicked},axis:{x:{type:"timeseries",localtime:!0,height:this.compact?28:void 0,forceAsSingle:!0,tick:{fit:!1,format:e=>"number"==typeof e?e:Le(e,this.shortDateFormat??"short"),outer:!0}},y:{max:0,min:e,padding:{top:75,bottom:75},tick:{format:e=>this.compact?"":this._authorsByIndex.get(e)??"",outer:!0,values:t}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:e=>this.compact?"":e,outer:!0}}},bar:{width:2,sensitivity:4,padding:2},scatter:{zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!0,hide:["additions","deletions"],padding:4,item:{tile:{type:"circle",r:4},interaction:{dblclick:!0}},tooltip:!0},point:{r:e=>{if(null==e)return 0;if("function"==typeof e.data&&null==(e=e.data()[0]))return 0;if(null!=e.r)return e.r;return Math.max(6,this._authors.get(e.id)?.z.get(e.x.toISOString())??6)},focus:{expand:{enabled:!0}},select:{r:6}},resize:{auto:!1},tooltip:{contents:(e,t,o,i)=>{const r=e[0],s=new Date(r.x),a=this._commitsByTimestamp.get(s.toISOString());if(null==a)return"";const l=a.additions,c=a.deletions,h=null==l?"":`<span class="additions">+${xt("line",l)}</span>`;let d=null==c?"":`<span class="deletions">-${xt("line",c)}</span>`;return h&&(d=`, ${d}`),`<div class="bb-tooltip">\n\t\t\t\t\t\t\t\t<section class="author">${a.author}</section>\n\t\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t\t<span class="sha"><code-icon icon="git-commit"></code-icon> ${a.commit.slice(0,8)}</span>\n\t\t\t\t\t\t\t\t\t<span class="changes">${h}${d}</span>\n\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t<section class="date">\n\t\t\t\t\t\t\t\t\t<code-icon icon="history"></code-icon><span class="date--relative">${function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,i,r,s]of Re){const a=Math.abs(o);if(a>=i||1e3===i)return t?(null==Ae&&(null!=Ee?Ae=Ee.resolvedOptions().locale:null!=Te?Ae=Te.resolvedOptions().locale:(Ee=new Intl.RelativeTimeFormat(De,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Ae=Ee.resolvedOptions().locale)),"en"===Ae||Ae?.startsWith("en-")?`${Math.round(a/r)}${s}`:(null==Ee&&(Ee=new Intl.RelativeTimeFormat(De,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Ee.format(Math.round(o/r),e))):(null==Te&&(Te=new Intl.RelativeTimeFormat(De,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Te.format(Math.round(o/r),e))}return""}(s))}</span><span class="date--absolute">(${Le(s,this.dateFormat)})</span>\n\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t<section class="message"><span class="message__content">${a.message}</span></section>\n\t\t\t\t\t\t\t</div>`},show:!0},zoom:{enabled:d(),type:"wheel",extent:[1,.01],onzoom:e=>{new Date(e[0])<=this._originalDomain[0]&&new Date(e[1])>=this._originalDomain[1]?(this._zoomedDomain=void 0,this.zoomed=!1):(this._zoomedDomain=e,this.zoomed=!0)},onzoomend:e=>{new Date(e[0])<=this._originalDomain[0]&&new Date(e[1])>=this._originalDomain[1]?(this._zoomedDomain=void 0,this.zoomed=!1):(this._zoomedDomain=e,this.zoomed=!0)}}};this._chart=a.generate(i)}else this._chart.config("axis.y.tick.values",t,!1),this._chart.config("axis.y.min",e,!1),this._chart.load({...p,resizeAfter:!0,unload:!0,done:()=>setTimeout((()=>o?.fulfill()),250)});return void await o.promise.catch((()=>{}))}catch(e){o?.cancel()}}prepareChartData(e,t){const o=e.length+1,i=new Array(o);i[0]="time";const r=new Array(o);r[0]="additions";const s=new Array(o);s[0]="deletions";const a={time:"x",additions:"y2",deletions:"y2"},l={additions:"bar",deletions:"bar"},c={additions:"time",deletions:"time"};let h=0,d=0;for(const o of e){const{author:e,date:p,additions:u=0,deletions:g=0}=o;this._commitsByTimestamp.set(p,o),d++,i[d]=p,r[d]=u,s[d]=g;const m=this.calculateBubbleSize(u+g,t);let f=this._authors.get(e);null==f?(f={x:[`time.${e}`,p],y:h,z:new Map([[p,m]])},this._authors.set(e,f),this._authorsByIndex.set(h,e),a[e]="y",l[e]="scatter",c[e]=`time.${e}`,h--):(f.x.push(p),f.z.set(p,m))}const p=[i,r,s];for(const[e,t]of this._authors){p.push(t.x);const o=Array(t.x.length).fill(t.y);o[0]=e,p.push(o)}return{axes:a,columns:p,names:{additions:"Additions",deletions:"Deletions"},types:l,xs:c}}calculateChangeMetrics(e){const t=e.map((e=>(e.additions??0)+(e.deletions??0))).sort(((e,t)=>e-t));return{maxChanges:t[t.length-1],q1:t[Math.floor(.25*t.length)],q3:t[Math.floor(.75*t.length)]}}calculateBubbleSize(e,{minRadius:t,maxRadius:o,q1:i,q3:r,maxChanges:s}){if(0===e)return t;let a;if(e<=i)a=t+e/i*10;else if(e<=r){a=t+10+15*((e-i)/(r-i))}else{a=t+25+15*(Math.log(e-r+1)/Math.log(s-r+1))}return Math.max(t,Math.min(o,a))}getOnRenderedCallback(e){return function(){const t=this;null!=t&&t.$.main.selectAll(".bb-axis-y .tick text tspan").each((function(o){if(null==this)return;const i=e._authorsByIndex.get(-o.index),r=t.color(i);this.setAttribute("fill",r);const s=document.createElementNS("http://www.w3.org/2000/svg","title");s.textContent=i,this.appendChild(s)}))}}};oo.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},oo.styles=[Zt],to([ke("#chart")],oo.prototype,"chartContainer",2),to([ye()],oo.prototype,"placement",2),to([ye()],oo.prototype,"dateFormat",2),to([ye()],oo.prototype,"shortDateFormat",2),to([we()],oo.prototype,"_data",2),to([ye({type:Boolean,reflect:!0})],oo.prototype,"zoomed",2),to([ye({type:Object})],oo.prototype,"dataPromise",1),to([$t({args:!1})],oo.prototype,"updateChart",1),to([$t({args:{0:e=>e?.length}})],oo.prototype,"prepareChartData",1),oo=to([fe("gl-timeline-chart")],oo);var io=(e=>(e.AddAuthors="gitlens.addAuthors",e.AssociateIssueWithBranch="gitlens.associateIssueWithBranch",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.PastePatchFromClipboard="gitlens.pastePatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GenerateCommitMessageScm="gitlens.scm.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusConnectCloudIntegrations="gitlens.plus.cloudIntegrations.connect",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusContinueFeaturePreview="gitlens.plus.continueFeaturePreview",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.PlusSimulateSubscription="gitlens.plus.simulateSubscription",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowFileInTimeline="gitlens.showFileInTimeline",e.ShowFolderInTimeline="gitlens.showFolderInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLaunchpadView="gitlens.showLaunchpadView",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StartWork="gitlens.startWork",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.WalkthroughConnectIntegrations="gitlens.walkthrough.connectIntegrations",e.WalkthroughGitLensInspect="gitlens.walkthrough.gitlensInspect",e.WalkthroughOpenAcceleratePrReviews="gitlens.walkthrough.openAcceleratePrReviews",e.WalkthroughOpenCommunityVsPro="gitlens.walkthrough.openCommunityVsPro",e.WalkthroughOpenHelpCenter="gitlens.walkthrough.openHelpCenter",e.WalkthroughOpenInteractiveCodeHistory="gitlens.walkthrough.openInteractiveCodeHistory",e.WalkthroughOpenStartIntegrations="gitlens.walkthrough.openStartIntegrations",e.WalkthroughOpenStreamlineCollaboration="gitlens.walkthrough.openStreamlineCollaboration",e.WalkthroughOpenWalkthrough="gitlens.walkthrough.openWalkthrough",e.WalkthroughPlusSignUp="gitlens.walkthrough.plus.signUp",e.WalkthroughPlusUpgrade="gitlens.walkthrough.plus.upgrade",e.WalkthroughPlusReactivate="gitlens.walkthrough.plus.reactivate",e.WalkthroughShowAutolinks="gitlens.walkthrough.showAutolinks",e.WalkthroughShowDraftsView="gitlens.walkthrough.showDraftsView",e.WalkthroughShowGraph="gitlens.walkthrough.showGraph",e.WalkthroughShowLaunchpad="gitlens.walkthrough.showLaunchpad",e.WalkthroughWorktreeCreate="gitlens.walkthrough.worktree.create",e.WalkthoughOpenDevExPlatform="gitlens.walkthrough.openDevExPlatform",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(io||{});const ro=p`
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
`,so=e=>e??ae,no=(p`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus):not(:focus-within) {
		${p`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`}
	}
`,p`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),ao=p`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,lo=p`
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
`,co=p`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${no}
	}
	a:hover {
		text-decoration: underline;
	}
`;p`
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
`;var ho=Object.defineProperty,po=Object.defineProperties,uo=Object.getOwnPropertyDescriptor,go=Object.getOwnPropertyDescriptors,mo=Object.getOwnPropertySymbols,fo=Object.prototype.hasOwnProperty,bo=Object.prototype.propertyIsEnumerable,vo=e=>{throw TypeError(e)},yo=(e,t,o)=>t in e?ho(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,wo=(e,t)=>{for(var o in t||(t={}))fo.call(t,o)&&yo(e,o,t[o]);if(mo)for(var o of mo(t))bo.call(t,o)&&yo(e,o,t[o]);return e},xo=(e,t)=>po(e,go(t)),ko=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?uo(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ho(t,o,s),s},_o=(e,t,o)=>t.has(e)||vo("Cannot "+o),$o=new Map,Co=new WeakMap;function Po(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function So(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ro(e,t){$o.set(e,Po(t))}function Ao(e,t,o){const i=Co.get(e);if(null==i?void 0:i[t])return So(i[t],o.dir);const r=$o.get(t);return r?So(r,o.dir):{keyframes:[],options:{duration:0}}}var Oo=p`
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
`,Do=p`
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
`;const To=new Set,Eo=new Map;let zo,Lo="ltr",Fo="en";const Io="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Io){const e=new MutationObserver(Mo);Lo=document.documentElement.dir||"ltr",Fo=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Wo(...e){e.map((e=>{const t=e.$code.toLowerCase();Eo.has(t)?Eo.set(t,Object.assign(Object.assign({},Eo.get(t)),e)):Eo.set(t,e),zo||(zo=e)})),Mo()}function Mo(){Io&&(Lo=document.documentElement.dir||"ltr",Fo=document.documentElement.lang||navigator.language),[...To.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){To.add(this.host)}hostDisconnected(){To.delete(this.host)}dir(){return`${this.host.dir||Lo}`.toLowerCase()}lang(){return`${this.host.lang||Fo}`.toLowerCase()}getTranslationData(e){var t,o;const i=new Intl.Locale(e.replace(/_/g,"-")),r=null==i?void 0:i.language.toLowerCase(),s=null!==(o=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:r,region:s,primary:Eo.get(`${r}-${s}`),secondary:Eo.get(r)}}exists(e,t){var o;const{primary:i,secondary:r}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||r&&r[e]||t.includeFallback&&zo&&zo[e])}term(e,...t){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let r;if(o&&o[e])r=o[e];else if(i&&i[e])r=i[e];else{if(!zo||!zo[e])return String(e);r=zo[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var Bo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Wo(Bo);var Uo=Bo,No=class extends LocalizeController{};Wo(Uo);var jo,Vo=p`
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
`,Ho=class extends lit_element_r{constructor(){var e,t,o;super(),e=this,o=!1,(t=jo).has(e)?vo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,wo({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const i=customElements.get(e);if(!i){try{customElements.define(e,t,o)}catch(i){customElements.define(e,class extends t{},o)}return}let r=" (unknown version)",s=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in i&&i.version&&(s=" v"+i.version)}attributeChangedCallback(e,t,o){var i,r,s;_o(i=this,r=jo,"read from private field"),(s?s.call(i):r.get(i))||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,o,i)=>{_o(e,t,"write to private field"),i?i.call(e,o):t.set(e,o)})(this,jo,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)}))}};jo=new WeakMap,Ho.version="2.19.1",Ho.dependencies={},ko([ye()],Ho.prototype,"dir",2),ko([ye()],Ho.prototype,"lang",2);const qo=Math.min,Go=Math.max,Qo=Math.round,Yo=Math.floor,Ko=e=>({x:e,y:e}),Jo={left:"right",right:"left",bottom:"top",top:"bottom"},Zo={start:"end",end:"start"};function Xo(e,t,o){return Go(e,qo(t,o))}function ei(e,t){return"function"==typeof e?e(t):e}function ti(e){return e.split("-")[0]}function oi(e){return e.split("-")[1]}function ii(e){return"x"===e?"y":"x"}function ri(e){return"y"===e?"height":"width"}function si(e){return["top","bottom"].includes(ti(e))?"y":"x"}function ni(e){return ii(si(e))}function ai(e){return e.replace(/start|end/g,(e=>Zo[e]))}function li(e){return e.replace(/left|right|bottom|top/g,(e=>Jo[e]))}function ci(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function hi(e){const{x:t,y:o,width:i,height:r}=e;return{width:i,height:r,top:o,left:t,right:t+i,bottom:o+r,x:t,y:o}}function di(e,t,o){let{reference:i,floating:r}=e;const s=si(t),a=ni(t),l=ri(a),c=ti(t),h="y"===s,d=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,u=i[l]/2-r[l]/2;let g;switch(c){case"top":g={x:d,y:i.y-r.height};break;case"bottom":g={x:d,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:p};break;case"left":g={x:i.x-r.width,y:p};break;default:g={x:i.x,y:i.y}}switch(oi(t)){case"start":g[a]-=u*(o&&h?-1:1);break;case"end":g[a]+=u*(o&&h?-1:1)}return g}async function pi(e,t){var o;void 0===t&&(t={});const{x:i,y:r,platform:s,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=ei(t,e),m=ci(g),f=l[u?"floating"===p?"reference":"floating":p],v=hi(await s.getClippingRect({element:null==(o=await(null==s.isElement?void 0:s.isElement(f)))||o?f:f.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:h,rootBoundary:d,strategy:c})),y="floating"===p?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),x=await(null==s.isElement?void 0:s.isElement(w))&&await(null==s.getScale?void 0:s.getScale(w))||{x:1,y:1},_=hi(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-_.top+m.top)/x.y,bottom:(_.bottom-v.bottom+m.bottom)/x.y,left:(v.left-_.left+m.left)/x.x,right:(_.right-v.right+m.right)/x.x}}function ui(){return"undefined"!=typeof window}function gi(e){return bi(e)?(e.nodeName||"").toLowerCase():"#document"}function mi(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function fi(e){var t;return null==(t=(bi(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function bi(e){return!!ui()&&(e instanceof Node||e instanceof mi(e).Node)}function vi(e){return!!ui()&&(e instanceof Element||e instanceof mi(e).Element)}function yi(e){return!!ui()&&(e instanceof HTMLElement||e instanceof mi(e).HTMLElement)}function wi(e){return!(!ui()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof mi(e).ShadowRoot)}function xi(e){const{overflow:t,overflowX:o,overflowY:i,display:r}=Si(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(r)}function ki(e){return["table","td","th"].includes(gi(e))}function _i(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function $i(e){const t=Ci(),o=vi(e)?Si(e):e;return["transform","translate","scale","rotate","perspective"].some((e=>!!o[e]&&"none"!==o[e]))||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","translate","scale","rotate","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ci(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Pi(e){return["html","body","#document"].includes(gi(e))}function Si(e){return mi(e).getComputedStyle(e)}function Ri(e){return vi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ai(e){if("html"===gi(e))return e;const t=e.assignedSlot||e.parentNode||wi(e)&&e.host||fi(e);return wi(t)?t.host:t}function Oi(e){const t=Ai(e);return Pi(t)?e.ownerDocument?e.ownerDocument.body:e.body:yi(t)&&xi(t)?t:Oi(t)}function Di(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=Oi(e),s=r===(null==(i=e.ownerDocument)?void 0:i.body),a=mi(r);if(s){const e=Ti(a);return t.concat(a,a.visualViewport||[],xi(r)?r:[],e&&o?Di(e):[])}return t.concat(r,Di(r,[],o))}function Ti(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ei(e){const t=Si(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=yi(e),s=r?e.offsetWidth:o,a=r?e.offsetHeight:i,l=Qo(o)!==s||Qo(i)!==a;return l&&(o=s,i=a),{width:o,height:i,$:l}}function zi(e){return vi(e)?e:e.contextElement}function Li(e){const t=zi(e);if(!yi(t))return Ko(1);const o=t.getBoundingClientRect(),{width:i,height:r,$:s}=Ei(t);let a=(s?Qo(o.width):o.width)/i,l=(s?Qo(o.height):o.height)/r;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Fi=Ko(0);function Ii(e){const t=mi(e);return Ci()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Fi}function Wi(e,t,o,i){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),s=zi(e);let a=Ko(1);t&&(i?vi(i)&&(a=Li(i)):a=Li(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==mi(e))&&t}(s,o,i)?Ii(s):Ko(0);let c=(r.left+l.x)/a.x,h=(r.top+l.y)/a.y,d=r.width/a.x,p=r.height/a.y;if(s){const e=mi(s),t=i&&vi(i)?mi(i):i;let o=e,r=Ti(o);for(;r&&i&&t!==o;){const e=Li(r),t=r.getBoundingClientRect(),i=Si(r),s=t.left+(r.clientLeft+parseFloat(i.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(i.paddingTop))*e.y;c*=e.x,h*=e.y,d*=e.x,p*=e.y,c+=s,h+=a,o=mi(r),r=Ti(o)}}return hi({width:d,height:p,x:c,y:h})}function Mi(e,t){const o=Ri(e).scrollLeft;return t?t.left+o:Wi(fi(e)).left+o}function Bi(e,t,o){void 0===o&&(o=!1);const i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-(o?0:Mi(e,i)),y:i.top+t.scrollTop}}function Ui(e,t,o){let i;if("viewport"===t)i=function(e,t){const o=mi(e),i=fi(e),r=o.visualViewport;let s=i.clientWidth,a=i.clientHeight,l=0,c=0;if(r){s=r.width,a=r.height;const e=Ci();(!e||e&&"fixed"===t)&&(l=r.offsetLeft,c=r.offsetTop)}return{width:s,height:a,x:l,y:c}}(e,o);else if("document"===t)i=function(e){const t=fi(e),o=Ri(e),i=e.ownerDocument.body,r=Go(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),s=Go(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+Mi(e);const l=-o.scrollTop;return"rtl"===Si(i).direction&&(a+=Go(t.clientWidth,i.clientWidth)-r),{width:r,height:s,x:a,y:l}}(fi(e));else if(vi(t))i=function(e,t){const o=Wi(e,!0,"fixed"===t),i=o.top+e.clientTop,r=o.left+e.clientLeft,s=yi(e)?Li(e):Ko(1);return{width:e.clientWidth*s.x,height:e.clientHeight*s.y,x:r*s.x,y:i*s.y}}(t,o);else{const o=Ii(e);i={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return hi(i)}function Ni(e,t){const o=Ai(e);return!(o===t||!vi(o)||Pi(o))&&("fixed"===Si(o).position||Ni(o,t))}function ji(e,t,o){const i=yi(t),r=fi(t),s="fixed"===o,a=Wi(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=Ko(0);if(i||!i&&!s)if(("body"!==gi(t)||xi(r))&&(l=Ri(t)),i){const e=Wi(t,!0,s,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else r&&(c.x=Mi(r));const h=!r||i||s?Ko(0):Bi(r,l);return{x:a.left+l.scrollLeft-c.x-h.x,y:a.top+l.scrollTop-c.y-h.y,width:a.width,height:a.height}}function Vi(e){return"static"===Si(e).position}function Hi(e,t){if(!yi(e)||"fixed"===Si(e).position)return null;if(t)return t(e);let o=e.offsetParent;return fi(e)===o&&(o=o.ownerDocument.body),o}function qi(e,t){const o=mi(e);if(_i(e))return o;if(!yi(e)){let t=Ai(e);for(;t&&!Pi(t);){if(vi(t)&&!Vi(t))return t;t=Ai(t)}return o}let i=Hi(e,t);for(;i&&ki(i)&&Vi(i);)i=Hi(i,t);return i&&Pi(i)&&Vi(i)&&!$i(i)?o:i||function(e){let t=Ai(e);for(;yi(t)&&!Pi(t);){if($i(t))return t;if(_i(t))return null;t=Ai(t)}return null}(e)||o}const Gi={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:i,strategy:r}=e;const s="fixed"===r,a=fi(i),l=!!t&&_i(t.floating);if(i===a||l&&s)return o;let c={scrollLeft:0,scrollTop:0},h=Ko(1);const d=Ko(0),p=yi(i);if((p||!p&&!s)&&(("body"!==gi(i)||xi(a))&&(c=Ri(i)),yi(i))){const e=Wi(i);h=Li(i),d.x=e.x+i.clientLeft,d.y=e.y+i.clientTop}const u=!a||p||s?Ko(0):Bi(a,c,!0);return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-c.scrollLeft*h.x+d.x+u.x,y:o.y*h.y-c.scrollTop*h.y+d.y+u.y}},getDocumentElement:fi,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:r}=e;const s=[..."clippingAncestors"===o?_i(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let i=Di(e,[],!1).filter((e=>vi(e)&&"body"!==gi(e))),r=null;const s="fixed"===Si(e).position;let a=s?Ai(e):e;for(;vi(a)&&!Pi(a);){const t=Si(a),o=$i(a);o||"fixed"!==t.position||(r=null),(s?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||xi(a)&&!o&&Ni(e,a))?i=i.filter((e=>e!==a)):r=t,a=Ai(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=s[0],l=s.reduce(((e,o)=>{const i=Ui(t,o,r);return e.top=Go(i.top,e.top),e.right=qo(i.right,e.right),e.bottom=qo(i.bottom,e.bottom),e.left=Go(i.left,e.left),e}),Ui(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:qi,getElementRects:async function(e){const t=this.getOffsetParent||qi,o=this.getDimensions,i=await o(e.floating);return{reference:ji(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=Ei(e);return{width:t,height:o}},getScale:Li,isElement:vi,isRTL:function(e){return"rtl"===Si(e).direction}};function Qi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Yi(e,t,o,i){void 0===i&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=i,h=zi(e),d=r||s?[...h?Di(h):[],...Di(t)]:[];d.forEach((e=>{r&&e.addEventListener("scroll",o,{passive:!0}),s&&e.addEventListener("resize",o)}));const p=h&&l?function(e,t){let o,i=null;const r=fi(e);function s(){var e;clearTimeout(o),null==(e=i)||e.disconnect(),i=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),s();const h=e.getBoundingClientRect(),{left:d,top:p,width:u,height:g}=h;if(l||t(),!u||!g)return;const m={rootMargin:-Yo(p)+"px "+-Yo(r.clientWidth-(d+u))+"px "+-Yo(r.clientHeight-(p+g))+"px "+-Yo(d)+"px",threshold:Go(0,qo(1,c))||1};let f=!0;function v(t){const i=t[0].intersectionRatio;if(i!==c){if(!f)return a();i?a(!1,i):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}1!==i||Qi(h,e.getBoundingClientRect())||a(),f=!1}try{i=new IntersectionObserver(v,{...m,root:r.ownerDocument})}catch(e){i=new IntersectionObserver(v,m)}i.observe(e)}(!0),s}(h,o):null;let u,g=-1,m=null;a&&(m=new ResizeObserver((e=>{let[i]=e;i&&i.target===h&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),o()})),h&&!c&&m.observe(h),m.observe(t));let f=c?Wi(e):null;return c&&function t(){const i=Wi(e);f&&!Qi(f,i)&&o();f=i,u=requestAnimationFrame(t)}(),o(),()=>{var e;d.forEach((e=>{r&&e.removeEventListener("scroll",o),s&&e.removeEventListener("resize",o)})),null==p||p(),null==(e=m)||e.disconnect(),m=null,c&&cancelAnimationFrame(u)}}const Ki=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:r,y:s,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:o,platform:i,elements:r}=e,s=await(null==i.isRTL?void 0:i.isRTL(r.floating)),a=ti(o),l=oi(o),c="y"===si(o),h=["left","top"].includes(a)?-1:1,d=s&&c?-1:1,p=ei(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*d,y:u*h}:{x:u*h,y:g*d}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:a}}}}},Ji=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:r}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=ei(e,t),h={x:o,y:i},d=await pi(t,c),p=si(ti(r)),u=ii(p);let g=h[u],m=h[p];if(s){const e="y"===u?"bottom":"right";g=Xo(g+d["y"===u?"top":"left"],g,g-d[e])}if(a){const e="y"===p?"bottom":"right";m=Xo(m+d["y"===p?"top":"left"],m,m-d[e])}const f=l.fn({...t,[u]:g,[p]:m});return{...f,data:{x:f.x-o,y:f.y-i,enabled:{[u]:s,[p]:a}}}}}},Zi=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:r,middlewareData:s,rects:a,initialPlacement:l,platform:c,elements:h}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...v}=ei(e,t);if(null!=(o=s.arrow)&&o.alignmentOffset)return{};const y=ti(r),w=si(l),x=ti(l)===l,_=await(null==c.isRTL?void 0:c.isRTL(h.floating)),$=u||(x||!f?[li(l)]:function(e){const t=li(e);return[ai(e),t,ai(t)]}(l)),C="none"!==m;!u&&C&&$.push(...function(e,t,o,i){const r=oi(e);let s=function(e,t,o){const i=["left","right"],r=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:i:t?i:r;case"left":case"right":return t?s:a;default:return[]}}(ti(e),"start"===o,i);return r&&(s=s.map((e=>e+"-"+r)),t&&(s=s.concat(s.map(ai)))),s}(l,f,m,_));const P=[l,...$],S=await pi(t,v),A=[];let O=(null==(i=s.flip)?void 0:i.overflows)||[];if(d&&A.push(S[y]),p){const e=function(e,t,o){void 0===o&&(o=!1);const i=oi(e),r=ni(e),s=ri(r);let a="x"===r?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=li(a)),[a,li(a)]}(r,a,_);A.push(S[e[0]],S[e[1]])}if(O=[...O,{placement:r,overflows:A}],!A.every((e=>e<=0))){var D,T;const e=((null==(D=s.flip)?void 0:D.index)||0)+1,t=P[e];if(t)return{data:{index:e,overflows:O},reset:{placement:t}};let o=null==(T=O.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:T.placement;if(!o)switch(g){case"bestFit":{var E;const e=null==(E=O.filter((e=>{if(C){const t=si(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(o=e);break}case"initialPlacement":o=l}if(r!==o)return{reset:{placement:o}}}return{}}}},Xi=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,i;const{placement:r,rects:s,platform:a,elements:l}=t,{apply:c=()=>{},...h}=ei(e,t),d=await pi(t,h),p=ti(r),u=oi(r),g="y"===si(r),{width:m,height:f}=s.floating;let v,y;"top"===p||"bottom"===p?(v=p,y=u===(await(null==a.isRTL?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(y=p,v="end"===u?"top":"bottom");const w=f-d.top-d.bottom,x=m-d.left-d.right,_=qo(f-d[v],w),$=qo(m-d[y],x),C=!t.middlewareData.shift;let P=_,S=$;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(S=x),null!=(i=t.middlewareData.shift)&&i.enabled.y&&(P=w),C&&!u){const e=Go(d.left,0),t=Go(d.right,0),o=Go(d.top,0),i=Go(d.bottom,0);g?S=m-2*(0!==e||0!==t?e+t:Go(d.left,d.right)):P=f-2*(0!==o||0!==i?o+i:Go(d.top,d.bottom))}await c({...t,availableWidth:S,availableHeight:P});const A=await a.getDimensions(l.floating);return m!==A.width||f!==A.height?{reset:{rects:!0}}:{}}}},er=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:r,rects:s,platform:a,elements:l,middlewareData:c}=t,{element:h,padding:d=0}=ei(e,t)||{};if(null==h)return{};const p=ci(d),u={x:o,y:i},g=ni(r),m=ri(g),f=await a.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",x=v?"clientHeight":"clientWidth",_=s.reference[m]+s.reference[g]-u[g]-s.floating[m],$=u[g]-s.reference[g],C=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let P=C?C[x]:0;P&&await(null==a.isElement?void 0:a.isElement(C))||(P=l.floating[x]||s.floating[m]);const S=_/2-$/2,A=P/2-f[m]/2-1,O=qo(p[y],A),D=qo(p[w],A),T=O,E=P-f[m]-D,F=P/2-f[m]/2+S,W=Xo(T,F,E),B=!c.arrow&&null!=oi(r)&&F!==W&&s.reference[m]/2-(F<T?O:D)-f[m]/2<0,U=B?F<T?F-T:F-E:0;return{[g]:u[g]+U,data:{[g]:W,centerOffset:F-W-U,...B&&{alignmentOffset:U}},reset:B}}}),tr=(e,t,o)=>{const i=new Map,r={platform:Gi,...o},s={...r.platform,_c:i};return(async(e,t,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:a}=o,l=s.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:p}=di(h,i,c),u=i,g={},m=0;for(let o=0;o<l.length;o++){const{name:s,fn:f}=l[o],{x:v,y,data:w,reset:x}=await f({x:d,y:p,initialPlacement:i,placement:u,strategy:r,middlewareData:g,rects:h,platform:a,elements:{reference:e,floating:t}});d=null!=v?v:d,p=null!=y?y:p,g={...g,[s]:{...g[s],...w}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(u=x.placement),x.rects&&(h=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):x.rects),({x:d,y:p}=di(h,u,c))),o=-1)}return{x:d,y:p,placement:u,strategy:r,middlewareData:g}})(e,t,{...r,platform:s})},or=1,ir=2,rr=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const sr=rr(class extends directive_i{constructor(e){if(super(e),e.type!==or||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return ne}});function nr(e){return lr(e)}function ar(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function lr(e){for(let t=e;t;t=ar(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=ar(e);t;t=ar(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||$i(e))return t;if("BODY"===t.tagName)return t}}return null}var cr=class extends Ho{constructor(){super(...arguments),this.localize=new No(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,i=0,r=0,s=0,a=0,l=0,c=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,i=e.bottom,r=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(o=t.left,i=t.bottom,r=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(o=e.right,i=e.top,r=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(o=t.right,i=t.top,r=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=Yi(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[Ki({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Xi({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Zi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ji({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Xi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(er({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>Gi.getOffsetParent(e,nr):Gi.getOffsetParent;tr(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:xo(wo({},Gi),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:i})=>{const r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let i="",a="",l="",c="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?o:"",c=r?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":o,c=r?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",i="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:l,left:c,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return se`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${sr({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${sr({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?se`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function hr(e,t){return new Promise((o=>{e.addEventListener(t,(function i(r){r.target===e&&(e.removeEventListener(t,i),o())}))}))}function dr(e,t,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,xo(wo({},o),{duration:ur()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})}))}function pr(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function ur(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function gr(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}function mr(e,t){const o=wo({waitUntilFirstUpdate:!1},t);return(t,i)=>{const{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),s=this[r];t!==s&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](t,s))}})),r.call(this,e)}}}cr.styles=[Vo,Do],ko([ke(".popup")],cr.prototype,"popup",2),ko([ke(".popup__arrow")],cr.prototype,"arrowEl",2),ko([ye()],cr.prototype,"anchor",2),ko([ye({type:Boolean,reflect:!0})],cr.prototype,"active",2),ko([ye({reflect:!0})],cr.prototype,"placement",2),ko([ye({reflect:!0})],cr.prototype,"strategy",2),ko([ye({type:Number})],cr.prototype,"distance",2),ko([ye({type:Number})],cr.prototype,"skidding",2),ko([ye({type:Boolean})],cr.prototype,"arrow",2),ko([ye({attribute:"arrow-placement"})],cr.prototype,"arrowPlacement",2),ko([ye({attribute:"arrow-padding",type:Number})],cr.prototype,"arrowPadding",2),ko([ye({type:Boolean})],cr.prototype,"flip",2),ko([ye({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],cr.prototype,"flipFallbackPlacements",2),ko([ye({attribute:"flip-fallback-strategy"})],cr.prototype,"flipFallbackStrategy",2),ko([ye({type:Object})],cr.prototype,"flipBoundary",2),ko([ye({attribute:"flip-padding",type:Number})],cr.prototype,"flipPadding",2),ko([ye({type:Boolean})],cr.prototype,"shift",2),ko([ye({type:Object})],cr.prototype,"shiftBoundary",2),ko([ye({attribute:"shift-padding",type:Number})],cr.prototype,"shiftPadding",2),ko([ye({attribute:"auto-size"})],cr.prototype,"autoSize",2),ko([ye()],cr.prototype,"sync",2),ko([ye({type:Object})],cr.prototype,"autoSizeBoundary",2),ko([ye({attribute:"auto-size-padding",type:Number})],cr.prototype,"autoSizePadding",2),ko([ye({attribute:"hover-bridge",type:Boolean})],cr.prototype,"hoverBridge",2);var fr=class extends Ho{constructor(){super(),this.localize=new No(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=pr(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=pr(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await gr(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=Ao(this,"tooltip.show",{dir:this.localize.dir()});await dr(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await gr(this.body);const{keyframes:e,options:o}=Ao(this,"tooltip.hide",{dir:this.localize.dir()});await dr(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,hr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,hr(this,"sl-after-hide")}render(){return se`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${sr({tooltip:!0,"tooltip--open":this.open})}
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
    `}};fr.styles=[Vo,Oo],fr.dependencies={"sl-popup":cr},ko([ke("slot:not([name])")],fr.prototype,"defaultSlot",2),ko([ke(".tooltip__body")],fr.prototype,"body",2),ko([ke("sl-popup")],fr.prototype,"popup",2),ko([ye()],fr.prototype,"content",2),ko([ye()],fr.prototype,"placement",2),ko([ye({type:Boolean,reflect:!0})],fr.prototype,"disabled",2),ko([ye({type:Number})],fr.prototype,"distance",2),ko([ye({type:Boolean,reflect:!0})],fr.prototype,"open",2),ko([ye({type:Number})],fr.prototype,"skidding",2),ko([ye()],fr.prototype,"trigger",2),ko([ye({type:Boolean})],fr.prototype,"hoist",2),ko([mr("open",{waitUntilFirstUpdate:!0})],fr.prototype,"handleOpenChange",1),ko([mr(["content","distance","hoist","placement","skidding"])],fr.prototype,"handleOptionsChange",1),ko([mr("disabled")],fr.prototype,"handleDisabledChange",1),Ro("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Ro("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});fr.define("sl-tooltip");var br=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,yr=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?vr(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&br(t,o,s),s};Ro("tooltip.show",null),Ro("tooltip.hide",null);let wr=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback()}render(){return se`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ae}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};wr.styles=p`
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
	`,yr([ye()],wr.prototype,"content",2),yr([ye({reflect:!0})],wr.prototype,"placement",2),yr([ye({type:Boolean})],wr.prototype,"disabled",2),yr([ye({type:Number})],wr.prototype,"distance",2),yr([ye({type:Boolean})],wr.prototype,"hoist",2),wr=yr([fe("gl-tooltip")],wr);var xr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,_r=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?kr(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&xr(t,o,s),s};let $r=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom"}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?se`<gl-tooltip .content=${this.tooltip} placement=${so(this.tooltipPlacement)}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?se`<gl-tooltip placement=${so(this.tooltipPlacement)}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?se`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:se`<button
			class="control"
			role=${so(this.role)}
			aria-checked=${so(this.ariaChecked)}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};$r.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},$r.styles=[lo,p`
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
				${ao}
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
		`],_r([ke(".control")],$r.prototype,"control",2),_r([ye({reflect:!0})],$r.prototype,"appearance",2),_r([ye({type:Boolean,reflect:!0})],$r.prototype,"disabled",2),_r([ye({reflect:!0})],$r.prototype,"density",2),_r([ye({type:Boolean,reflect:!0})],$r.prototype,"full",2),_r([ye()],$r.prototype,"href",2),_r([ye({reflect:!0})],$r.prototype,"role",1),_r([ye()],$r.prototype,"tooltip",2),_r([ye()],$r.prototype,"tooltipPlacement",2),$r=_r([fe("gl-button")],$r);class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ae,e.type!==ir)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ae||null==e)return this._t=void 0,this.it=e;if(e===ne)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const Cr=rr(unsafe_html_e),{I:Pr}=ue,Sr=(e,t)=>{const o=e._$AN;if(void 0===o)return!1;for(const e of o)e._$AO?.(t,!1),Sr(e,t);return!0},Rr=e=>{let t,o;do{if(void 0===(t=e._$AM))break;o=t._$AN,o.delete(e),e=t}while(0===o?.size)},Ar=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),Tr(t)}};function Or(e){void 0!==this._$AN?(Rr(this),this._$AM=e,Ar(this)):this._$AM=e}function Dr(e,t=!1,o=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(i))for(let e=o;e<i.length;e++)Sr(i[e],!1),Rr(i[e]);else null!=i&&(Sr(i,!1),Rr(i));else Sr(this,e)}const Tr=e=>{e.type==ir&&(e._$AP??=Dr,e._$AQ??=Or)};class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Ar(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Sr(this,e),Rr(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class private_async_helpers_s{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class private_async_helpers_i{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((e=>this.q=e))}resume(){this.q?.(),this.Z=this.q=void 0}}const Er=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,zr=1073741823;const Lr=rr(class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=zr,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find((e=>!Er(e)))??ne}update(e,t){const o=this._$Cbt;let i=o.length;this._$Cbt=t;const r=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const a=t[e];if(!Er(a))return this._$Cwt=e,a;e<i&&a===o[e]||(this._$Cwt=zr,i=0,Promise.resolve(a).then((async e=>{for(;s.get();)await s.get();const t=r.deref();if(void 0!==t){const o=t._$Cbt.indexOf(a);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}})))}return ne}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});var Fr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,Wr=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?Ir(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Fr(t,o,s),s};let Mr=class extends lit_element_r{constructor(){super(...arguments),this.type="info"}render(){return se`${Lr(this.promoPromise.then((e=>this.renderPromo(e))),ae)}`}renderPromo(e){if(!e?.content?.webview)return;const t=e.content.webview;switch(this.type){case"info":if(t.info)return this.setAttribute("has-promo",""),se`<p class="promo">${Cr(t.info.html)}</p>`;break;case"link":if(t.link)return this.setAttribute("has-promo",""),se`<a
						class="link"
						href="${this.getCommandUrl(e)}"
						title="${so(t.link.title)}"
						>${Cr(t.link.html)}</a
					>`}return this.removeAttribute("has-promo"),ae}getCommandUrl(e){const t=e?.content?.webview?.link?.command??"command:gitlens.plus.upgrade";return null==this.source?t:`${t}?${encodeURIComponent(JSON.stringify({source:this.source}))}`}};Mr.styles=[p`
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
		`],Wr([ye({type:Object})],Mr.prototype,"promoPromise",2),Wr([ye({type:String})],Mr.prototype,"source",2),Wr([ye({reflect:!0,type:String})],Mr.prototype,"type",2),Mr=Wr([fe("gl-promo")],Mr);var Br=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Nr=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?Ur(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Br(t,o,s),s};let jr=class extends lit_element_r{firstUpdated(){"alert"===this.appearance&&queueMicrotask((()=>this.button.focus()))}render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":ae;switch(this.state){case Ce.VerificationRequired:return se`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Vr(io.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Vr(io.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case Ce.Community:case Ce.ProPreviewExpired:return this.featurePreview&&"expired"!==function(e){const t=e?.usages;if(!t?.length)return"eligible";const o=(new Date(t[t.length-1].expiresOn).getTime()-(new Date).getTime())/36e5;return t.length<=3&&o>0&&o<24?"active":"expired"}(this.featurePreview)?se`${this.renderFeaturePreview(this.featurePreview)}`:se`<slot name="feature"></slot>
					<p>
						Use on privately-hosted repos requires
						<a href="${bt.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Vr(io.PlusSignUp,this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${Vr(io.PlusLogin,this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${xt("day",_e)} of
						<a href="${bt.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case Ce.ProTrialExpired:return se`<slot name="feature"></slot>
					<p>Use on privately-hosted repos requires <a href="${bt.communityVsPro}">GitLens Pro</a>.</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Vr(io.PlusUpgrade,this.source)}"
							>Upgrade to Pro</gl-button
						><span
							>or
							<a href="${Vr(io.PlusLogin,this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>${this.renderPromo()}</p>`;case Ce.ProTrialReactivationEligible:return se`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Vr(io.PlusReactivateProTrial,this.source)}"
							>Continue</gl-button
						><span
							>or
							<a href="${Vr(io.PlusLogin,this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${xt("day",_e)}!
					</p> `}}renderFeaturePreview(e){const t="alert"===(this.appearance??"alert")?"alert":ae,o=e.usages.length;if(0===o)return se`<slot name="feature"></slot>
				<gl-button appearance="${t}" href="${this.featurePreviewCommandLink}">Continue</gl-button>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
					repos, or
					<a href="${Vr(io.PlusLogin,this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?se`<br />`:""} For full access to all GitLens Pro features,
					<a href="${Vr(io.PlusSignUp,this.source)}"
						>start your free ${_e}-day Pro trial</a
					>
					— no credit card required.
				</p> `;const i=3-o;return se`
			${this.renderFeaturePreviewStep(e,o)}
			<p class="actions-row">
				<gl-button class="inline" appearance="${t}" href="${this.featurePreviewCommandLink}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${Vr(io.PlusLogin,this.source)}" title="Sign In">sign in</a></span
				>
			</p>
			<p>
				After continuing, you will have ${xt("day",i,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
				repos.<br />
				${"alert"!==t?se`<br />`:""} For full access to all GitLens Pro features,
				<a href="${Vr(io.PlusSignUp,this.source)}"
					>start your free ${_e}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"===e.feature)switch(t){case 1:return se`<p>Try Commit Search</p>
							<p>
								Search for commits in your repo by author, commit message, SHA, file, change, or type.
								Turn on the commit filter to show only commits that match your query.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-commit-search.webp"
									style="width:100%"
									alt="Graph Commit Search"
								/>
							</p> `;case 2:return se`
							<p>Try the Graph Minimap</p>
							<p>
								Visualize the amount of changes to a repository over time, and inspect specific points
								in the history to locate branches, stashes, tags and pull requests.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-minimap.webp"
									style="width:100%"
									alt="Graph Minimap"
								/>
							</p>
						`;default:return se`<slot name="feature"></slot>`}return se`<slot name="feature"></slot>`}renderPromo(){return se`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo("gate")}
			.source=${this.source}
		></gl-promo>`}};function Vr(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}jr.styles=[ro,p`
			:host {
				--gk-action-radius: 0.3rem;
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button:not(.inline) {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button:not(.inline) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}

			.actions {
				text-align: center;
			}

			.actions-row {
				display: flex;
				gap: 0.6em;
				align-items: baseline;
				justify-content: center;
				white-space: nowrap;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],Nr([ke("gl-button")],jr.prototype,"button",2),Nr([ye({type:Object})],jr.prototype,"featurePreview",2),Nr([ye({type:String})],jr.prototype,"featurePreviewCommandLink",2),Nr([ye({type:String})],jr.prototype,"appearance",2),Nr([ye()],jr.prototype,"featureWithArticleIfNeeded",2),Nr([tt({context:At})],jr.prototype,"promos",2),Nr([ye({type:Object})],jr.prototype,"source",2),Nr([ye({attribute:!1,type:Number})],jr.prototype,"state",2),Nr([ye({type:String})],jr.prototype,"webroot",2),jr=Nr([fe("gl-feature-gate-plus-state")],jr);var Hr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Gr=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?qr(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Hr(t,o,s),s};let Qr=class extends lit_element_r{render(){if(!this.visible||null!=this.state&&(null!=(e=this.state)&&(e===Ce.Paid||e===Ce.ProPreview||e===Ce.ProTrial)))return void(this.hidden=!0);var e;const t=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,se`
			<section>
				<slot></slot>
				<gl-feature-gate-plus-state
					appearance=${t}
					.featurePreview=${this.featurePreview}
					.featurePreviewCommandLink=${this.featurePreviewCommandLink}
					.featureWithArticleIfNeeded=${this.featureWithArticleIfNeeded}
					.source=${this.source}
					.state=${this.state}
					.webroot=${this.webroot}
				>
					<slot name="feature" slot="feature"></slot>
				</gl-feature-gate-plus-state>
			</section>
		`}};Qr.styles=[ro,p`
			:host {
				--background: var(--vscode-sideBar-background);
				--foreground: var(--vscode-sideBar-foreground);

				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				overflow: auto;
				z-index: 100;

				box-sizing: border-box;
			}

			:host-context(body[data-placement='editor']),
			:host([appearance='alert']) {
				--background: transparent;
				--foreground: var(--vscode-editor-foreground);

				backdrop-filter: blur(3px) saturate(0.8);
				padding: 0 2rem;
			}

			::slotted(p) {
				margin: revert !important;
			}

			::slotted(p:first-child) {
				margin-top: 0 !important;
			}

			section {
				--section-foreground: var(--foreground);
				--section-background: var(--background);
				--section-border-color: transparent;

				display: flex;
				flex-direction: column;
				padding: 0 2rem 1.3rem 2rem;
				background: var(--section-background);
				color: var(--section-foreground);
				border: 1px solid var(--section-border-color);

				height: min-content;
			}

			:host-context(body[data-placement='editor']) section,
			:host([appearance='alert']) section {
				--section-foreground: var(--color-alert-foreground);
				--section-background: var(--color-alert-infoBackground);
				--section-border-color: var(--color-alert-infoBorder);

				--link-decoration-default: underline;
				--link-foreground: var(--vscode-foreground);
				/* --link-foreground-active: var(--vscode-foreground); */

				/* --link-foreground: var(--vscode-textLink-foreground); */
				--link-foreground-active: var(--vscode-textLink-activeForeground);

				border-radius: 0.3rem;
				max-width: 600px;
				max-height: min-content;
				margin: 0.2rem auto;
				padding: 1.3rem;
			}

			:host-context(body[data-placement='editor']) section ::slotted(gl-button),
			:host([appearance='alert']) section ::slotted(gl-button) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
		`],Gr([ye({reflect:!0})],Qr.prototype,"appearance",2),Gr([ye({type:Object})],Qr.prototype,"featurePreview",2),Gr([ye({type:String})],Qr.prototype,"featurePreviewCommandLink",2),Gr([ye()],Qr.prototype,"featureWithArticleIfNeeded",2),Gr([ye({type:Object})],Qr.prototype,"source",2),Gr([ye({attribute:!1,type:Number})],Qr.prototype,"state",2),Gr([ye({type:Boolean})],Qr.prototype,"visible",2),Gr([ye({type:String})],Qr.prototype,"webroot",2),Qr=Gr([fe("gl-feature-gate")],Qr);cr.define("sl-popup");var Yr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Jr=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?Kr(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Yr(t,o,s),s};let Zr=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.relatedTarget&&this.contains(e.relatedTarget))return;this.hide()}},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick)return void(this._skipHideOnClick=!1);if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{const t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{const t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=Dt(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show("hover")),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus()||"hover"!==this._triggeredBy)return;const o=Dt(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),super.disconnectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return se`<sl-popup
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
		</sl-popup>`}async show(e){if(null!=this._triggeredBy&&"hover"===e||(this._triggeredBy=e),!this.open)return this.open=!0,Tt(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,Tt(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};Zr.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Zr.styles=p`
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
	`,Jr([ke("#popover")],Zr.prototype,"body",2),Jr([ke("sl-popup")],Zr.prototype,"popup",2),Jr([ye({reflect:!0})],Zr.prototype,"placement",2),Jr([ye({type:Object})],Zr.prototype,"anchor",2),Jr([ye({reflect:!0,type:Boolean})],Zr.prototype,"disabled",2),Jr([ye({type:Number})],Zr.prototype,"distance",2),Jr([ye({reflect:!0,type:Boolean})],Zr.prototype,"open",2),Jr([ye({reflect:!0,type:Boolean})],Zr.prototype,"arrow",2),Jr([ye({type:Number})],Zr.prototype,"skidding",2),Jr([ye()],Zr.prototype,"trigger",2),Jr([ye({type:Boolean})],Zr.prototype,"hoist",2),Jr([at("open",{afterFirstUpdate:!0})],Zr.prototype,"handleOpenChange",1),Jr([at(["distance","hoist","placement","skidding"])],Zr.prototype,"handleOptionsChange",1),Jr([at("disabled")],Zr.prototype,"handleDisabledChange",1),Zr=Jr([fe("gl-popover")],Zr);var Xr=Object.defineProperty,es=Object.getOwnPropertyDescriptor,ts=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?es(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Xr(t,o,s),s};let os=class extends lit_element_r{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:Be(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return se`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===Ce.VerificationRequired)return se`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(Ne(this.subscription)||this.cloud&&null!=this.subscription.account)return se`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(t===Ce.ProPreview||t===Ce.ProTrial))return se`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t;return e}renderPopoverHeader(){const e=se`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===Ce.Paid?se`<div class="popup-header">${e}</div>`:this.cloud?this.preview?se`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:se`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?se`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:se`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return ae;let e;switch(this.state){case Ce.Paid:e=se`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${is(io.ShowAccountView,void 0)}"
							>${Me(this.subscription?.plan.actual.id??$e.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case Ce.VerificationRequired:e=se`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${is(io.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${is(io.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case Ce.ProTrial:{const t=this.daysRemaining;e=se`<p>
						You have
						<strong>${t<1?"<1 day":xt("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case Ce.ProTrialExpired:e=se`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(se`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case Ce.ProTrialReactivationEligible:e=se`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${xt("day",_e)}!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${is(io.PlusReactivateProTrial,this.source)}"
							tooltip="Reactivate your Pro trial for another ${xt("day",_e)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===Ce.ProPreview){const t=this.daysRemaining;e=se`<p>
							You have
							<strong>${t<1?"<1 day":xt("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=se`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return se`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return se`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${is(io.PlusSignUp,this.source)}"
				>Start ${_e}-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${is(io.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return se`<div class="actions">
			${e??ae}
			<gl-button
				appearance="primary"
				density="tight"
				href="${is(io.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return se`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo("badge")}
			.source=${this.source}
		></gl-promo>`}};function is(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}os.styles=[lo,co,p`
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
				${d(no)}
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
		`],ts([ye({type:Boolean})],os.prototype,"cloud",2),ts([ye({reflect:!0})],os.prototype,"placement",2),ts([ye({type:Boolean})],os.prototype,"preview",2),ts([tt({context:At})],os.prototype,"promos",2),ts([ye({type:Object})],os.prototype,"source",2),ts([ye({attribute:!1})],os.prototype,"subscription",2),os=ts([fe("gl-feature-badge")],os);const rs=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),ss=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141"});var ns=Object.defineProperty,as=Object.getOwnPropertyDescriptor,ls=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?as(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ns(t,o,s),s};function cs(e,t=""){return d(Object.entries(e).map((([e,o])=>function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`}(e,o,t))).join(""))}let hs=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};hs.styles=p`
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
		${cs(ss,"gl-")}

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
	`,ls([ye({reflect:!0})],hs.prototype,"icon",2),ls([ye({reflect:!0})],hs.prototype,"modifier",2),ls([ye({type:Number})],hs.prototype,"size",2),ls([ye({reflect:!0})],hs.prototype,"flip",2),ls([ye({reflect:!0})],hs.prototype,"rotate",2),hs=ls([fe("code-icon")],hs);var ds=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,us=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?ps(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ds(t,o,s),s};let gs=class extends lit_element_r{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return se`<div class="progress-bar"></div>`}};gs.styles=p`
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
	`,us([ye({reflect:!0})],gs.prototype,"mode",2),us([ye({type:Boolean})],gs.prototype,"active",2),us([ye()],gs.prototype,"position",2),gs=us([fe("progress-indicator")],gs);var ms=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,bs=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?fs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ms(t,o,s),s};let vs=class extends GlApp{constructor(){super(...arguments),this._loading=!0,this._zoomed=!1,this.onDocumentKeyDown=e=>{"Escape"!==e.key&&"Esc"!==e.key||this._chart?.reset()}}createStateProvider(e,t){return new TimelineStateProvider(this,e,t)}onPersistState(e){this._ipc.setState({period:e.period,uri:e.uri})}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.onDocumentKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.onDocumentKeyDown),super.disconnectedCallback()}get allowed(){return this.state.access?.allowed??!1}get header(){let e,t=this.state.title;if(null!=t){const o=t.lastIndexOf("/");if(o>=0){const i=t.substring(o+1);e=t.substring(0,o),t=i}}return{title:t??"",description:e??""}}get loading(){return null!=this.state.dataset&&null!=this.uri&&this._loading}get period(){return this.state.period}get subscription(){return this.state.access?.subscription?.current}get sha(){return this.state.sha}get uri(){return this.state.uri}get uriType(){return this.state.uriType}get zoomed(){return this._zoomed}willUpdate(e){e.has("_loading")||e.has("_zoomed")||(this._loading=Boolean(this.state.dataset&&this.uri)),super.willUpdate(e)}render(){return se`
			${this.allowed?se`<gl-feature-gate
						.source=${{source:"timeline",detail:"gate"}}
						.state=${this.subscription?.state}
				  ></gl-feature-gate>`:ae}
			<div class="container">
				<progress-indicator ?active=${this.loading}></progress-indicator>
				<header class="header" ?hidden=${!this.uri}>
					<span class="details">
						<span class="details__title"
							><code-icon icon="${"folder"===this.uriType?"folder":"file"}"></code-icon
							>&nbsp;&nbsp;${this.header.title}</span
						>
						<span class="details__description">${this.header.description}</span>
						<span class="details__sha">
							${this.sha?se`<code-icon icon="git-commit" size="16"></code-icon
										><span class="sha">${this.sha}</span>`:ae}
						</span>
					</span>
					<span class="toolbox">
						${this.zoomed?se`<gl-button
									appearance="toolbar"
									@click=${e=>e.shiftKey||e.altKey?this._chart?.reset():this._chart?.zoom(-1)}
									aria-label="Zoom Out"
							  >
									<code-icon icon="zoom-out"></code-icon>
									<span slot="tooltip">Zoom Out<br />[Alt] Reset Zoom</span>
							  </gl-button>`:ae}
						<gl-button
							appearance="toolbar"
							@click=${()=>this._chart?.zoom(.5)}
							tooltip="Zoom In"
							aria-label="Zoom In"
						>
							<code-icon icon="zoom-in"></code-icon>
						</gl-button>
						<span class="select-container">
							<label for="periods">Timeframe</label>
							<select
								class="period"
								name="periods"
								position="below"
								.value=${this.period}
								@change=${this.onPeriodChanged}
							>
								<option value="7|D" ?selected=${"7|D"===this.period}>1 week</option>
								<option value="1|M" ?selected=${"1|M"===this.period}>1 month</option>
								<option value="3|M" ?selected=${"3|M"===this.period}>3 months</option>
								<option value="6|M" ?selected=${"6|M"===this.period}>6 months</option>
								<option value="9|M" ?selected=${"9|M"===this.period}>9 months</option>
								<option value="1|Y" ?selected=${"1|Y"===this.period}>1 year</option>
								<option value="2|Y" ?selected=${"2|Y"===this.period}>2 years</option>
								<option value="4|Y" ?selected=${"4|Y"===this.period}>4 years</option>
								<option value="all" ?selected=${"all"===this.period}>Full history</option>
							</select>
						</span>
						${"view"===this.placement?se`<gl-button
									appearance="toolbar"
									href="command:gitlens.views.timeline.openInTab"
									tooltip="Open in Editor"
									aria-label="Open in Editor"
							  >
									<code-icon icon="link-external"></code-icon>
							  </gl-button>`:ae}
						${null!=this.subscription&&Ne(this.subscription)?ae:se`<gl-feature-badge
									placement="bottom"
									.source=${{source:"timeline",detail:"badge"}}
									.subscription=${this.subscription}
							  ></gl-feature-badge>`}
					</span>
				</header>

				<main class="timeline">${this.renderChart()}</main>
			</div>
		`}renderChart(){return this.uri&&this.state.dataset?se`<gl-timeline-chart
			id="chart"
			placement="${this.placement}"
			dateFormat="${this.state.dateFormat}"
			shortDateFormat="${this.state.shortDateFormat}"
			.dataPromise=${this.state.dataset}
			@gl-data-point-click=${this.onChartDataPointClicked}
			@gl-load=${()=>this._loading=!1}
			@gl-zoomed=${e=>this._zoomed=e.detail}
		>
		</gl-timeline-chart>`:se`<div class="timeline__empty">
				<p>There are no editors open that can provide file history information.</p>
			</div>`}onChartDataPointClicked(e){this._ipc.sendCommand(Je,e.detail)}onPeriodChanged(e){const t=e.target,o=t.options[t.selectedIndex].value;!function(e){if("all"===e)return;const[t,o]=e.split("|");if(isNaN(Number(t))||"D"!==o&&"M"!==o&&"Y"!==o)throw new Error(`Invalid period: ${e}`)}(o),this._ipc.sendCommand(Ze,{period:o})}};vs.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},vs.styles=[Kt,Jt],bs([ke("#chart")],vs.prototype,"_chart",2),bs([we()],vs.prototype,"_loading",2),bs([we()],vs.prototype,"_zoomed",2),vs=bs([fe("gl-timeline-app")],vs);var ys=s.A;export{ys as GlTimelineApp};