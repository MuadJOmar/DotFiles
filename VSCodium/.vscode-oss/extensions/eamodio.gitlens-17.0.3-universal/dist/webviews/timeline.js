let e,t,i,o,r;var s,a,l,c,d,h,p,u,f,g,m,v={602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},6047:(e,t,i)=>{i(602)}},y={};function w(e){var t=y[e];if(void 0!==t)return t.exports;var i=y[e]={exports:{}};return v[e](i,i.exports,w),i.exports}w.m=v,w.d=(e,t)=>{for(var i in t)w.o(t,i)&&!w.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce((t,i)=>(w.f[i](e,t),t),[])),w.u=e=>39===e?"lib-billboard-39.js":"lib-billboard.js",w.miniCssF=e=>{},w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),w.p="#{root}/dist/webviews/",Object.defineProperty(w,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}}),s={122:0},a=e=>{var t,i,{__webpack_ids__:o,__webpack_modules__:r,__webpack_runtime__:a}=e,l=0;for(t in r)w.o(r,t)&&(w.m[t]=r[t]);for(a&&a(w);l<o.length;l++)i=o[l],w.o(s,i)&&s[i]&&s[i][0](),s[o[l]]=0},w.f.j=(e,t)=>{var i=w.o(s,e)?s[e]:void 0;if(0!==i)if(i)t.push(i[1]);else{var o=import("./"+w.u(e)).then(a,t=>{throw 0!==s[e]&&(s[e]=void 0),t}),o=Promise.race([o,new Promise(t=>i=s[e]=[t])]);t.push(i[1]=o)}};var _={};w.d(_,{A:()=>r$});let x=globalThis,$=x.ShadowRoot&&(void 0===x.ShadyCSS||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),C=new WeakMap;let n=class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if($&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=C.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&C.set(t,e))}return e}toString(){return this.cssText}};let A=e=>new n("string"==typeof e?e:e+"",void 0,P),S=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]),e,P),E=(e,t)=>{if($)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),o=x.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}},O=$?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return A(t)})(e):e,{is:T,defineProperty:D,getOwnPropertyDescriptor:B,getOwnPropertyNames:U,getOwnPropertySymbols:j,getPrototypeOf:F}=Object,q=globalThis,W=q.trustedTypes,G=W?W.emptyScript:"",V=q.reactiveElementPolyfillSupport,Y=(e,t)=>e,K={toAttribute(e,t){switch(t){case Boolean:e=e?G:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Z=(e,t)=>!T(e,t),X={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Z};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;let b=class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&D(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){let{get:o,set:r}=B(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){let s=o?.call(this);r.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??X}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let e=F(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let e=this.properties;for(let t of[...U(e),...j(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(O(i));else void 0!==e&&t.push(O(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return E(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:K).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:K;this._$Em=o,this[o]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(!((i??=this.constructor.getPropertyOptions(e)).hasChanged??Z)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[Y("elementProperties")]=new Map,b[Y("finalized")]=new Map,V?.({ReactiveElement:b}),(q.reactiveElementVersions??=[]).push("2.0.4");let Q=globalThis,J=Q.trustedTypes,ee=J?J.createPolicy("lit-html",{createHTML:e=>e}):void 0,et="$lit$",ei=`lit$${Math.random().toFixed(9).slice(2)}$`,eo="?"+ei,er=`<${eo}>`,es=document,en=()=>es.createComment(""),ea=e=>null===e||"object"!=typeof e&&"function"!=typeof e,el=Array.isArray,ec=e=>el(e)||"function"==typeof e?.[Symbol.iterator],ed="[ 	\n\f\r]",eh=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ep=/-->/g,eu=/>/g,eb=RegExp(`>|${ed}(?:([^\\s"'>=/]+)(${ed}*=${ed}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ef=/'/g,eg=/"/g,em=/^(?:script|style|textarea|title)$/i,ev=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ey=ev(1),ew=(ev(2),ev(3),Symbol.for("lit-noChange")),e_=Symbol.for("lit-nothing"),ex=new WeakMap,e$=es.createTreeWalker(es,129);function ek(e,t){if(!el(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ee?ee.createHTML(t):t}let eP=(e,t)=>{let i=e.length-1,o=[],r,s=2===t?"<svg>":3===t?"<math>":"",a=eh;for(let t=0;t<i;t++){let i=e[t],l,c,d=-1,h=0;for(;h<i.length&&(a.lastIndex=h,null!==(c=a.exec(i)));)h=a.lastIndex,a===eh?"!--"===c[1]?a=ep:void 0!==c[1]?a=eu:void 0!==c[2]?(em.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=eb):void 0!==c[3]&&(a=eb):a===eb?">"===c[0]?(a=r??eh,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?eb:'"'===c[3]?eg:ef):a===eg||a===ef?a=eb:a===ep||a===eu?a=eh:(a=eb,r=void 0);let p=a===eb&&e[t+1].startsWith("/>")?" ":"";s+=a===eh?i+er:d>=0?(o.push(l),i.slice(0,d)+et+i.slice(d)+ei+p):i+ei+(-2===d?t:p)}return[ek(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let N=class N{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[c,d]=eP(e,t);if(this.el=N.createElement(c,i),e$.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=e$.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(et)){let t=d[s++],i=o.getAttribute(e).split(ei),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),o.removeAttribute(e)}else e.startsWith(ei)&&(l.push({type:6,index:r}),o.removeAttribute(e));if(em.test(o.tagName)){let e=o.textContent.split(ei),t=e.length-1;if(t>0){o.textContent=J?J.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],en()),e$.nextNode(),l.push({type:2,index:++r});o.append(e[t],en())}}}else if(8===o.nodeType)if(o.data===eo)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(ei,e+1));)l.push({type:7,index:r}),e+=ei.length-1}r++}}static createElement(e,t){let i=es.createElement("template");return i.innerHTML=e,i}};function eC(e,t,i=e,o){if(t===ew)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl,s=ea(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e))._$AT(e,i,o),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=eC(e,r._$AS(e,t.values),r,o)),t}let M=class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??es).importNode(t,!0);e$.currentNode=o;let r=e$.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new R(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new z(r,this,e)),this._$AV.push(t),l=i[++a]}s!==l?.index&&(r=e$.nextNode(),s++)}return e$.currentNode=es,o}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=e_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){ea(e=eC(this,e,t))?e===e_||null==e||""===e?(this._$AH!==e_&&this._$AR(),this._$AH=e_):e!==this._$AH&&e!==ew&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ec(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==e_&&ea(this._$AH)?this._$AA.nextSibling.data=e:this.T(es.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=N.createElement(ek(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new M(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=ex.get(e.strings);return void 0===t&&ex.set(e.strings,t=new N(e)),t}k(e){el(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let r of e)o===t.length?t.push(i=new R(this.O(en()),this.O(en()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=e_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=e_}_$AI(e,t=this,i,o){let r=this.strings,s=!1;if(void 0===r)(s=!ea(e=eC(this,e,t,0))||e!==this._$AH&&e!==ew)&&(this._$AH=e);else{let o,a,l=e;for(e=r[0],o=0;o<r.length-1;o++)(a=eC(this,l[i+o],t,o))===ew&&(a=this._$AH[o]),s||=!ea(a)||a!==this._$AH[o],a===e_?e=e_:e!==e_&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!o&&this.j(e)}j(e){e===e_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===e_?void 0:e}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==e_)}};let L=class L extends k{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=eC(this,e,t,0)??e_)===ew)return;let i=this._$AH,o=e===e_&&i!==e_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==e_&&(i===e_||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){eC(this,e)}};let eA=Q.litHtmlPolyfillSupport;eA?.(N,R),(Q.litHtmlVersions??=[]).push("3.2.1");let eS=(e,t,i)=>{let o=i?.renderBefore??t,r=o._$litPart$;if(void 0===r){let e=i?.renderBefore??null;o._$litPart$=r=new R(t.insertBefore(en(),e),e,void 0,i??{})}return r._$AI(e),r};let lit_element_r=class lit_element_r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eS(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ew}};lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});let eE=globalThis.litElementPolyfillSupport;eE?.({LitElement:lit_element_r}),(globalThis.litElementVersions??=[]).push("4.1.1");let ez=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eO={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Z},eT=(e=eO,t,i)=>{let{kind:o,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,e),"accessor"===o){let{name:o}=i;return{set(i){let r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){let{name:o}=i;return function(i){let r=this[o];t.call(this,i),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)};function eD(e){return(t,i)=>"object"==typeof i?eT(e,t,i):((e,t,i)=>{let o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function eL(e){return eD({...e,state:!0,attribute:!1})}let eR=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function eM(e,t){return(i,o,r)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof o?i:r??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eR(i,o,{get(){let i=e.call(this);return void 0===i&&(null!==(i=s(this))||this.hasUpdated)&&t.call(this,i),i}})}return eR(i,o,{get(){return s(this)}})}}var eB=((l=eB||{}).Community="community",l.CommunityWithAccount="community-with-account",l.Pro="pro",l.Advanced="advanced",l.Business="teams",l.Enterprise="enterprise",l),eN=((c=eN||{})[c.VerificationRequired=-1]="VerificationRequired",c[c.Community=0]="Community",c[c.ProPreview=1]="ProPreview",c[c.ProPreviewExpired=2]="ProPreviewExpired",c[c.ProTrial=3]="ProTrial",c[c.ProTrialExpired=4]="ProTrialExpired",c[c.ProTrialReactivationEligible=5]="ProTrialReactivationEligible",c[c.Paid=6]="Paid",c);let eU=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,ej=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,eF=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],eI=new Map,eH=new Map;function eq(t,i,o,r=!0){i=i??void 0;let s=`${o??""}:${i}`,a=eI.get(s);if(null==a){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=ej.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:i||void 0}}let i={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(eU))if(null!=t){for(let[e,o]of Object.entries(t))if(null!=o)switch(e){case"year":i.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":"DD"===o?i.day="2-digit":i.day="numeric";break;case"weekday":switch(o.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===o.length?"2-digit":"numeric",i.hour12="hh"===o||"h"===o;break;case"minute":i.minute=2===o.length?"2-digit":"numeric";break;case"second":i.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===o.length?"long":"short"}}return i}(i);a=new Intl.DateTimeFormat(null==o?e:"system"===o?void 0:[o],t),r&&eI.set(s,a)}if(null==i||ej.test(i))return a.format(t);let l=a.formatToParts(t);return i.replace(eU,(i,s,a,c,d,h,p,u,f,g,m,v,y,w,_)=>{if(null!=s)return s.substring(1,s.length-1);for(let[i,s]of Object.entries(_)){if(null==s)continue;let a=l.find(e=>e.type===i);if("Do"===s&&a?.type==="day"){var x=Number(a.value);let e=x%100;return`${x}${eW[(e-20)%10]??eW[e]??eW[0]}`}if("a"===s&&a?.type==="dayPeriod"){let i=(function(t){let i=`${o??""}:time:${t}`,s=eI.get(i);if(null==s){let a;a=null==o?e:"system"===o?void 0:[o],s=new Intl.DateTimeFormat(a,{localeMatcher:"best fit",timeStyle:t}),r&&eI.set(i,s)}return s})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(i??a)?.value??""}`}return a?.value??""}return""})}let eW=["th","st","nd","rd"];function eG(t,i){null==t&&(t="decimal");let o=`${i??""}:${t}`,r=eH.get(o);if(null==r){let s={localeMatcher:"best fit",style:t};r=new Intl.NumberFormat(null==i?e:"system"===i?void 0:[i],s),eH.set(o,r)}return r.format}function eV(e){var t;return(t=e.plan.actual.id)!==eB.Community&&t!==eB.CommunityWithAccount}eB.Community,eB.CommunityWithAccount,eB.Pro,eB.Advanced,eB.Business,eB.Enterprise;let IpcCall=class IpcCall{constructor(e,t,i=!1,o=!1){this.scope=e,this.reset=i,this.pack=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,i,o){super(e,t,i,o),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let eY=new IpcCommand("core","webview/ready"),eK=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let eZ=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let eX=new IpcCommand("core","telemetry/sendEvent"),eQ=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let eJ=new IpcCommand("core","webview/focus/didChange");new IpcNotification("core","configuration/didChange");let e0="timeline",e1=new IpcCommand(e0,"point/open"),e2=new IpcCommand(e0,"period/update"),e8=new IpcNotification(e0,"didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,i,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=i,this.subscribe=o??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,i,o){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=i,this.subscribe=o??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:i}]of this.subscriptions)t.has(e)||(t.add(e),i.dispatchEvent(new context_request_event_s(this.context,i,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function e5({context:e}){return(t,i)=>{let o=new WeakMap;if("object"==typeof i)return i.addInitializer(function(){o.set(this,new context_provider_i(this,{context:e}))}),{get(){return t.get.call(this)},set(e){return o.get(this)?.setValue(e),t.set.call(this,e)},init(e){return o.get(this)?.setValue(e),e}};{let r;t.constructor.addInitializer(t=>{o.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){let e=new WeakMap;r={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;r={...s,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,i,r)}}}function e9({context:e,subscribe:t}){return(i,o)=>{"object"==typeof o?o.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{i.set.call(this,e)},subscribe:t})}):i.constructor.addInitializer(i=>{new context_consumer_s(i,{context:e,callback:e=>{i[o]=e},subscribe:t})})}}let e3=new WeakMap;function e6(e,t){return function(i,o,r){let s=e3.get(i.constructor);null==s&&e3.set(i.constructor,s=[]),s.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_r{emit(e,t,i){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){let t=e3.get(this.constructor);if(null!=t)for(let{keys:i,method:o,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;let t=i.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};function e7(e){let t=.001*performance.now(),i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],(o-=e[1])<0&&(i--,o+=1e9)),[i,o]}let e4=/\(([\s\S]*)\)/,te=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,tt=/\s?=.*$/,ti=0x40000000-1;function to(){let e=0;return{get current(){return e},next:function(){return e===ti&&(e=0),++e}}}let tr=to(),ts=new Map;function tn(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function ta(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let i=t?tr.current:void 0,o=tr.next();return{scopeId:o,prevScopeId:i,prefix:`${tn(o,i)} ${e}`}}w(6047);var tl=((d=tl||{})[d.Hash=35]="Hash",d[d.Slash=47]="Slash",d[d.Digit0=48]="Digit0",d[d.Digit1=49]="Digit1",d[d.Digit2=50]="Digit2",d[d.Digit3=51]="Digit3",d[d.Digit4=52]="Digit4",d[d.Digit5=53]="Digit5",d[d.Digit6=54]="Digit6",d[d.Digit7=55]="Digit7",d[d.Digit8=56]="Digit8",d[d.Digit9=57]="Digit9",d[d.Backslash=92]="Backslash",d[d.A=65]="A",d[d.B=66]="B",d[d.C=67]="C",d[d.D=68]="D",d[d.E=69]="E",d[d.F=70]="F",d[d.Z=90]="Z",d[d.a=97]="a",d[d.b=98]="b",d[d.c=99]="c",d[d.d=100]="d",d[d.e=101]="e",d[d.f=102]="f",d[d.z=122]="z",d),tc=((h=tc||{}).AngleBracketLeftHeavy="❰",h.AngleBracketRightHeavy="❱",h.ArrowBack="↩",h.ArrowDown="↓",h.ArrowDownUp="⇵",h.ArrowDropRight="⤷",h.ArrowHeadRight="➤",h.ArrowLeft="←",h.ArrowLeftDouble="⇐",h.ArrowLeftRight="↔",h.ArrowLeftRightDouble="⇔",h.ArrowLeftRightDoubleStrike="⇎",h.ArrowLeftRightLong="⟷",h.ArrowRight="→",h.ArrowRightDouble="⇒",h.ArrowRightHollow="⇨",h.ArrowUp="↑",h.ArrowUpDown="⇅",h.ArrowUpRight="↗",h.ArrowsHalfLeftRight="⇋",h.ArrowsHalfRightLeft="⇌",h.ArrowsLeftRight="⇆",h.ArrowsRightLeft="⇄",h.Asterisk="∗",h.Bullseye="◎",h.Check="✔",h.Dash="—",h.Dot="•",h.Ellipsis="…",h.EnDash="–",h.Envelope="✉",h.EqualsTriple="≡",h.Flag="⚑",h.FlagHollow="⚐",h.MiddleEllipsis="⋯",h.MuchLessThan="≪",h.MuchGreaterThan="≫",h.Pencil="✎",h.Space=" ",h.SpaceThin=" ",h.SpaceThinnest=" ",h.SquareWithBottomShadow="❏",h.SquareWithTopShadow="❐",h.Warning="⚠",h.ZeroWidthSpace="​",h);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var td=((p=td||{}).File="file",p.Git="git",p.GitHub="github",p.GitLens="gitlens",p.PRs="pr",p.Remote="vscode-remote",p.Vsls="vsls",p.VslsScc="vsls-scc",p.Virtual="vscode-vfs",p);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let th="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",tp=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${th}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${th}`,graph:`https://gitkraken.com/solutions/commit-graph?${th}`,launchpad:`https://gitkraken.com/solutions/launchpad?${th}`,platform:`https://gitkraken.com/devex?${th}`,pricing:`https://gitkraken.com/gitlens/pricing?${th}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${th}`,security:`https://help.gitkraken.com/gitlens/security?${th}`,workspaces:`https://gitkraken.com/solutions/workspaces?${th}`,cli:`https://gitkraken.com/cli?${th}`,browserExtension:`https://gitkraken.com/browser-extension?${th}`,desktop:`https://gitkraken.com/git-client?${th}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${th}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${th}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${th}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${th}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${th}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${th}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${th}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${th}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${th}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${th}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${th}#streamline-collaboration`}),{fromCharCode:tu}=String;function tb(e){let[t,i]=e7(e);return 1e3*t+Math.floor(i/1e6)}function tf(e,t,o){let r;if(null==o)return i??=eG(),`${i(t)} ${e}${1===t?"":"s"}`;let s=1===t?e:o.plural??`${e}s`;return o.only?s:(0===t?r=o.zero??t:!1===o.format?r=t:null!=o.format?r=o.format(t):(i??=eG(),r=i(t)),`${r}${o.infix??" "}${s}`)}new TextEncoder,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let tg=Symbol("logInstanceNameFn");function tm(e,t=!1){let i,o,r,s,a,l=0,c=!1,d=!1,h=!0;null!=e&&({args:i,if:o,enter:r,exit:s,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:h=!0}=e),l>0&&(d=!0,h=!0),h&&(c=!0);let p=tw.isDebugging,u=t?tw.debug:tw.log,f=p?"debug":"info";return(e,t,g)=>{let m,v;if("function"==typeof g.value?(m=g.value,v="value"):"function"==typeof g.get&&(m=g.get,v="get"),null==m||null==v)throw Error("Not supported");let y=!1!==i?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),i=(t=(t=t.replace(te,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");i=i>=0?i+1:0,o=o>0?o:t.indexOf("="),t=t.slice(i,o),t=`(${t})`;let r=e4.exec(t);return null!=r?r[1].split(",").map(e=>e.trim().replace(tt,"")):[]}(m):[];g[v]=function(...e){var g,v;let w,_;if(!p&&!tw.enabled(f)||null!=o&&!o.apply(this,e))return m.apply(this,e);let x=tr.current,$=tr.next(),P=this!=null?function(e){let t;if("function"==typeof e){if(e.prototype?.constructor==null)return e.name;t=e.prototype.constructor}else t=e.constructor;let i=t?.name??"",o=i.indexOf("_");return i=-1===o?i:i.substring(o+1),t?.[tg]!=null&&(i=t[tg](e,i)),i}(this):void 0,C=P?c?`${tn($,x)} ${P}.${t}`:`${P}.${t}`:t;null!=a&&(C=a({id:$,instance:this,instanceName:P??"",name:t,prefix:C},...e)),c&&(g={scopeId:$,prevScopeId:x,prefix:C},g={prevScopeId:tr.current,...g},ts.set($,g),w=g);let A=null!=r?r(...e):"";if(!1===i||0===e.length)_="",d||u.call(tw,`${C}${A}`);else{let t,o,r,s;_="";let a=-1;for(s of e){if(o=y[++a],null!=(t=i?.[a])){if("boolean"==typeof t)continue;if(_.length>0&&(_+=", "),"string"==typeof t){_+=t;continue}r=String(t(s))}else _.length>0&&(_+=", "),r=tw.toLoggable(s);_+=o?`${o}=${r}`:r}d||u.call(tw,_?`${C}${A}(${_})`:`${C}${A}`)}if(d||h||null!=s){let t,i=h?e7():void 0,o=e=>{let t=void 0!==i?` [${tb(i)}ms]`:"";if(d?tw.error(e,_?`${C}${A}(${_})`:`${C}${A}`,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`):tw.error(e,C,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`),c)ts.delete($)};try{t=m.apply(this,e)}catch(e){throw o(e),e}let r=e=>{let t,o,r,a;if(null!=i?(t=tb(i))>500?(o=tw.warn,r=` [*${t}ms] (slow)`):(o=u,r=` [${t}ms]`):(r="",o=u),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${tw.toLoggable(e)}`);else w?.exitFailed?(a=w.exitFailed,o=(e,...t)=>tw.error(null,e,...t)):a="completed";if(d?(0===l||t>l)&&o.call(tw,_?`${C}${A}(${_}) ${a}${w?.exitDetails||""}${r}`:`${C}${A} ${a}${w?.exitDetails||""}${r}`):o.call(tw,_?`${C}(${_}) ${a}${w?.exitDetails||""}${r}`:`${C} ${a}${w?.exitDetails||""}${r}`),c)ts.delete($)};return null!=t&&null!=(v=t)&&(v instanceof Promise||"function"==typeof v?.then)?t.then(r,o):r(t),t}return m.apply(this,e)}}}var tv=((u=tv||{})[u.Off=0]="Off",u[u.Error=1]="Error",u[u.Warn=2]="Warn",u[u.Info=3]="Info",u[u.Debug=4]="Debug",u);let ty=["accessToken","password","token"],tw=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,i=!1){if(null!=e.sanitizeKeys)for(let t of ty)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(ty);this.provider=e,this._isDebugging=i,this.logLevel=t}enabled(e){return this.level>=t_(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=t_(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let i;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...i){let o;if(!(this.level<1)||this.isDebugging){if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,i)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let i;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let i;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,(e,i)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(i=t(e,i)),this.provider?.sanitizer!=null&&(i=this.provider.sanitizer(e,i)),i))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let i=t.map(e=>this.toLoggable(e)).join(", ");return 0!==i.length?` \u2014 ${i}`:""}};function t_(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tx={enabled:e=>tw.enabled(e)||tw.isDebugging,log:(e,t,i,...o)=>{switch(e){case"error":tw.error(void 0,t,i,...o);break;case"warn":tw.warn(t,i,...o);break;case"info":tw.log(t,i,...o);break;default:tw.debug(t,i,...o)}}};let LoggerContext=class LoggerContext{constructor(e){this.scope=ta(e,void 0),tw.configure({name:e,createChannel:function(e){return{name:e,appendLine:tw.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?tw.log(this.scope,e,...t):tw.log(e,t.shift(),...t)}};let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e}async getApplicablePromo(e){let t=this._promos.get(e);return null==t&&(t=this.ipc.sendRequest(eZ,{location:e}).then(e=>e.promo,()=>void 0),this._promos.set(e,t)),await t}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(eX,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...i){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:ta(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??tx,this._time=e7(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=e7(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=e7(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t){this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);return}let[i,o]=e7(this._time),r=1e3*i+Math.floor(o/1e6),s=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${r}ms]${e?.suffix??""}`)}};function t$(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function tk(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}(g||(g={})).on=function(e,t,i,o){let r=!1;if("string"==typeof e){let s=function(t){let o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,s,o??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,s,o??!0))}}}let s=function(e){i(e,this)};return e.addEventListener(t,s,o??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,s,o??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,i)=>{null==this.listeners&&(this.listeners=new LinkedList);let o=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let tP={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let i=new events_Node(e);if(this._first===events_Node.Undefined)this._first=i,this._last=i;else if(t){let e=this._last;this._last=i,i.prev=e,e.next=i}else{let e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?tP:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var tC=Object.defineProperty,tA=Object.getOwnPropertyDescriptor,tS=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?tA(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&tC(t,i,s),s};let tE=to();function tz(){return`webview:${tE.next()}`}let tO=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=o??=acquireVsCodeApi(),this._disposable=g.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=ts.get(tr.current),i=e.data;if(i.packed&&i.params instanceof Uint8Array){let o=function(e,t,...i){return(t?.provider??tx).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...i):void 0}(ta(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,i.params=JSON.parse(this._textDecoder.decode(i.params)),o?.stop()}if(this.replaceIpcPromisesWithPromises(i.params),null!=i.completionId){var o,r;let e=(o=i.method,r=i.completionId,`${o}|${r}`);this._pendingHandlers.get(e)?.(i);return}this._onReceiveMessage.fire(i)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let i=e[t];null!=i&&"object"==typeof i&&"__ipc"in i&&"promise"===i.__ipc&&"id"in i&&"string"==typeof i.id&&"method"in i&&"string"==typeof i.method?e[t]=this.getResponsePromise(i.method,i.id):this.replaceIpcPromisesWithPromises(i)}}sendCommand(e,t){let i=tz();this.postMessage({id:i,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let i=tz(),o=this.getResponsePromise(e.response.method,i);return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,completionId:i}),o}getResponsePromise(e,t){return new Promise((i,o)=>{var r,s;let a,l=(r=e,s=t,`${r}|${s}`);function c(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(l)}a=setTimeout(()=>{c.call(this),o(Error(`Timed out waiting for completion of ${l}`))},(tw.isDebugging?60:5)*6e4),this._pendingHandlers.set(l,e=>{if(c.call(this),e.method===eQ.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>i(t.value))}else queueMicrotask(()=>i(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function tT(e,t){let i=Math.pow(10,t);return Math.round(e*i)/i}tS([tm({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],tO.prototype,"onMessageReceived",1),tS([tm({args:{0:e=>e.method,1:!1}},!0)],tO.prototype,"sendCommand",1),tS([tm({args:{0:e=>e.method,1:!1,2:!1}},!0)],tO.prototype,"sendRequest",1),tS([tm({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],tO.prototype,"postMessage",1),tO=tS([(f=(e,t)=>`${e.appName}(${t})`,e=>{e[tg]=f})],tO);let RGBA=class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=tT(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=tT(Math.max(Math.min(1,t),0),3),this.l=tT(Math.max(Math.min(1,i),0),3),this.a=tT(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,o=e.b/255,r=e.a,s=Math.max(t,i,o),a=Math.min(t,i,o),l=0,c=0,d=(a+s)/2,h=s-a;if(h>0){switch(c=Math.min(d<=.5?h/(2*d):h/(2-2*d),1),s){case t:l=(i-o)/h+6*(i<o);break;case i:l=(o-t)/h+2;break;case o:l=(t-i)/h+4}l*=60,l=Math.round(l)}return new HSLA(l,c,d,r)}static _hue2rgb(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){let t,i,o,r=e.h/360,{s,l:a,a:l}=e;if(0===s)t=i=o=a;else{let e=a<.5?a*(1+s):a+s-a*s,l=2*a-e;t=HSLA._hue2rgb(l,e,r+1/3),i=HSLA._hue2rgb(l,e,r),o=HSLA._hue2rgb(l,e,r-1/3)}return new RGBA(Math.round(255*t),Math.round(255*i),Math.round(255*o),l)}};let HSVA=class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=tT(Math.max(Math.min(1,t),0),3),this.v=tT(Math.max(Math.min(1,i),0),3),this.a=tT(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t,i=e.r/255,o=e.g/255,r=e.b/255,s=Math.max(i,o,r),a=s-Math.min(i,o,r);return new HSVA(Math.round(60*(0===a?0:s===i?((o-r)/a%6+6)%6:s===o?(r-i)/a+2:(i-o)/a+4)),0===s?0:a/s,s,e.a)}static toRGBA(e){let{h:t,s:i,v:o,a:r}=e,s=o*i,a=s*(1-Math.abs(t/60%2-1)),l=o-s,[c,d,h]=[0,0,0];return t<60?(c=s,d=a):t<120?(c=a,d=s):t<180?(d=s,h=a):t<240?(d=a,h=s):t<300?(c=a,h=s):t<=360&&(c=s,h=a),new RGBA(c=Math.round((c+l)*255),d=Math.round((d+l)*255),h=Math.round((h+l)*255),r)}};function tD(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(tD(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return tT(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(t,i,o,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,i=this.rgba.a,o=t.a,r=i+o*(1-i);if(r<1e-6)return Color.transparent;let s=this.rgba.r*i/r+t.r*o*(1-i)/r;return new Color(new RGBA(s,this.rgba.g*i/r+t.g*o*(1-i)/r,this.rgba.b*i/r+t.b*o*(1-i)/r,r))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-i),e.rgba.b-r*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let i=1-e.rgba.a;return new Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${tL(e.rgba.r)}${tL(e.rgba.g)}${tL(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(r-o)/r,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(o-r)/o,e.darken(i)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function tL(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let tR=new Emitter,tM=tR.event;function tB(e){let t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,r=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),s=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=tD("--vscode-editor-background",i),l=tD("--vscode-editor-foreground",i);return l||(l=tD("--vscode-foreground",i)),{colors:{background:a,foreground:l},computedStyle:i,isLightTheme:r,isHighContrastTheme:s,isInitializing:null==e}}var tN=Object.defineProperty,tU=Object.getOwnPropertyDescriptor,tj=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?tU(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&tN(t,i,s),s};let GlApp=class GlApp extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}onPersistState(e){}connectedCallback(){super.connectedCallback(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new tO(this.name);let e=this.bootstrap;this.bootstrap=void 0,this._ipc.replaceIpcPromisesWithPromises(e),this.onPersistState(e);let t=tB();null!=this.onThemeUpdated&&(this.onThemeUpdated(t),this.disposables.push(function(){let e=new MutationObserver(e=>{tR.fire(tB(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),this.disposables.push(tM(this.onThemeUpdated,this))),this.disposables.push(this._stateProvider=this.createStateProvider(e,this._ipc),this._ipc.onReceiveMessage(e=>{!0===eJ.is(e)&&window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"))}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._ipc.sendCommand(eY,void 0),this._sendWebviewFocusChangedCommandDebounced=function(e,t,i){let o,r,s,a,l,c,d,h,p,u,f=0,g="leading"===(c??="trailing")||"both"===c,m="trailing"===c||"both"===c;function v(){if(null!=o){f=Date.now();let t=o,i=u;return u=void 0,o=void 0,s=e.apply(i,t)}}function y(){null!=a&&(clearTimeout(a),a=void 0)}function w(){null!=l&&(clearTimeout(l),l=void 0)}function _(){y(),w(),u=void 0,o=void 0,r=void 0,f=0}function x(...e){if(h?.aborted)return;let t=Date.now();null!=p&&null!=o?o=p(o,e):(u=this,o=e);let i=null==a&&null==l;r=t,y();let c=Date.now();if(r=c,a=setTimeout(()=>{a=void 0,function(e){let t=e-(r??0),i=e-f;return null==r||t>=150||t<0||null!=d&&i>=d}(Date.now())&&m&&v(),_()},150),null!=d&&!l){let e=d-(c-f);e>0?l=setTimeout(()=>{l=void 0,m&&null!=o&&v(),f=Date.now()},e):(m&&null!=o&&v(),_())}return g&&i?v():s}return x.cancel=_,x.flush=function(){return y(),w(),v()},x.pending=function(){return null!=a||null!=l},h?.addEventListener("abort",_,{once:!0}),x}(e=>{this._ipc.sendCommand(eK,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ey`<slot></slot>`}};tj([eD({type:String})],GlApp.prototype,"name",2),tj([eD({type:String})],GlApp.prototype,"placement",2),tj([e5({context:"ipc"})],GlApp.prototype,"_ipc",2),tj([e5({context:"logger"})],GlApp.prototype,"_logger",2),tj([e5({context:"promos"})],GlApp.prototype,"_promos",2),tj([e5({context:"telemetry"})],GlApp.prototype,"_telemetry",2),tj([eD({type:Object,noAccessor:!0})],GlApp.prototype,"bootstrap",2);let TimelineStateProvider=class TimelineStateProvider{constructor(e,t,i){this._ipc=i,this._state=t,this.provider=new context_provider_i(e,{context:"state",initialValue:t}),this.disposable=this._ipc.onReceiveMessage(t=>{!0===e8.is(t)&&(this._state={...t.params.state,timestamp:Date.now()},this.provider.setValue(this._state,!0),e.requestUpdate())})}get state(){return this._state}dispose(){this.disposable.dispose()}};let tF=S`
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
`,tI=S`
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
`,tH=S`
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
`;var tq=Object.defineProperty,tW=Object.getOwnPropertyDescriptor,tG=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?tW(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&tq(t,i,s),s};let tV=class extends GlElement{constructor(){super(...arguments),this._authors=new Map,this._authorsByIndex=new Map,this._commitsByTimestamp=new Map,this.placement="editor",this._data=null,this.zoomed=!1,this.onDataPointClicked=(e,t)=>{let i=this._commitsByTimestamp.get(new Date(e.x).toISOString());null!=i&&this.emit("gl-data-point-click",{data:{id:i.commit,selected:!0}})},this.onResize=e=>{this._chart?.resize({width:e[0].contentRect.width,height:e[0].contentRect.height})}}get compact(){return"editor"!==this.placement}get data(){return this._data}get dataPromise(){return this._dataPromise}set dataPromise(e){this._dataPromise!==e&&(this._dataPromise=e,this._dataPromise?.then(e=>this._data=e,()=>this._data=void 0))}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(this.onResize),this._resizeObserver?.observe(this,{box:"border-box"})}disconnectedCallback(){this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._loading?.cancel(),this._chart?.destroy(),this._chart=void 0,super.disconnectedCallback()}update(e){e.has("zoomed")&&this.emit("gl-zoomed",this.zoomed),e.has("dataPromise")&&(this._abortController?.abort(),this._abortController=new AbortController,this._loading?.cancel(),this.updateChart(this.dataPromise)),super.update(e)}render(){return null===this.data?e_:this.data?.length?ey`<div id="chart"></div>`:ey`<div class="empty"><p>No commits found for the specified time period.</p></div>`}reset(){this._chart?.unzoom(),this.zoomed=!1}zoom(e){if(!this._chart)return;let t=this._chart.zoom(),i=[new Date(t[0]),new Date(t[1])],o=i[1].getTime()-i[0].getTime(),r=new Date((i[1].getTime()+i[0].getTime())/2),s=new Date(r.getTime()-o*(1-e)/2),a=new Date(r.getTime()+o*(1-e)/2),l=this._chart.zoom([s,a]);e<0&&l[0]===t[0]&&l[1]===t[1]&&(this._chart.unzoom(),this.zoomed=!1)}async updateChart(i){if(this._loading?.pending)return;let o=this._abortController,r=function(){let e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0};return e.promise=new Promise((t,i)=>{e.fulfill=function(i){e.pending=!1,t(i)},e.cancel=function(t){e.pending=!1,null!=t?i(t):i()}}),e}();this._loading=r,r.promise.then(()=>this.emit("gl-load"),()=>{});let s=await i;if(o?.signal.aborted){r?.cancel();return}if(!s?.length){this._chart?.destroy(),this._chart=void 0,r?.fulfill();return}this._authors.clear(),this._authorsByIndex.clear(),this._commitsByTimestamp.clear();let a={minRadius:6,maxRadius:50,...this.calculateChangeMetrics(s)},{bb:l,bar:c,scatter:d,selection:h,zoom:p}=await Promise.all([w.e(39),w.e(162)]).then(w.bind(w,3039));if(o?.signal.aborted){r?.cancel();return}this._originalDomain=[new Date(s[s.length-1].date),new Date(s[0].date)],c(),d();let u=this.prepareChartData(s,a);try{let i=-(this._authors.size+1),o=[...this._authorsByIndex.keys()];if(null==this._chart){let s={bindto:this.chartContainer,onafterinit:()=>setTimeout(()=>r?.fulfill(),250),onrendered:this.compact?this.getOnRenderedCallback(this):void 0,onresized:()=>{null!=this._chart&&null!=this._zoomedDomain&&this._chart.zoom(this._zoomedDomain)},clipPath:!0,data:{...u,colors:{additions:"rgba(73, 190, 71, 1)",deletions:"rgba(195, 32, 45, 1)"},groups:[["additions","deletions"]],selection:{enabled:h(),draggable:!1,grouped:!0,multiple:!1,isselectable:()=>!1},onclick:this.onDataPointClicked},axis:{x:{type:"timeseries",localtime:!0,height:this.compact?28:void 0,forceAsSingle:!0,tick:{fit:!1,format:e=>"number"==typeof e?e:eq(e,this.shortDateFormat??"short"),outer:!0}},y:{max:0,min:i,padding:{top:75,bottom:75},tick:{format:e=>this.compact?"":this._authorsByIndex.get(e)??"",outer:!0,values:o}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:e=>this.compact?"":e,outer:!0}}},bar:{width:2,sensitivity:4,padding:2},scatter:{zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!0,hide:["additions","deletions"],padding:4,item:{tile:{type:"circle",r:4},interaction:{dblclick:!0}},tooltip:!0},point:{r:e=>null==e||"function"==typeof e.data&&(e=e.data()[0],null==e)?0:null!=e.r?e.r:Math.max(6,this._authors.get(e.id)?.z.get(e.x.toISOString())??6),focus:{expand:{enabled:!0}},select:{r:6}},resize:{auto:!1},tooltip:{contents:(i,o,r,s)=>{var a;let l=i[0],c=new Date(l.x),d=this._commitsByTimestamp.get(c.toISOString());if(null==d)return"";let h=d.additions,p=d.deletions,u=null==h?"":`<span class="additions">+${tf("line",h)}</span>`,f=null==p?"":`<span class="deletions">-${tf("line",p)}</span>`;return u&&(f=`, ${f}`),`<div class="bb-tooltip">
								<section class="author">${d.author}</section>
								<section>
									<span class="sha"><code-icon icon="git-commit"></code-icon> ${d.commit.slice(0,8)}</span>
									<span class="changes">${u}${f}</span>
								</section>
								<section class="date">
									<code-icon icon="history"></code-icon><span class="date--relative">${(a=function(i,o){let r=("number"==typeof i?i:i.getTime())-new Date().getTime();for(let[i,o,s,a]of eF)if(Math.abs(r)>=o||1e3===o)return null==t&&(t=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})),t.format(Math.round(r/s),i);return""}(c)).charAt(0).toUpperCase()+a.slice(1)}</span><span class="date--absolute">(${eq(c,this.dateFormat)})</span>
								</section>
								<section class="message"><span class="message__content">${d.message}</span></section>
							</div>`},show:!0},zoom:{enabled:p(),type:"wheel",extent:[1,.01],onzoom:e=>{new Date(e[0])<=this._originalDomain[0]&&new Date(e[1])>=this._originalDomain[1]?(this._zoomedDomain=void 0,this.zoomed=!1):(this._zoomedDomain=e,this.zoomed=!0)},onzoomend:e=>{new Date(e[0])<=this._originalDomain[0]&&new Date(e[1])>=this._originalDomain[1]?(this._zoomedDomain=void 0,this.zoomed=!1):(this._zoomedDomain=e,this.zoomed=!0)}}};this._chart=l.generate(s)}else this._chart.config("axis.y.tick.values",o,!1),this._chart.config("axis.y.min",i,!1),this._chart.load({...u,resizeAfter:!0,unload:!0,done:()=>setTimeout(()=>r?.fulfill(),250)});return void await r.promise.catch(()=>{})}catch(e){r?.cancel()}}prepareChartData(e,t){let i=e.length+1,o=Array(i);o[0]="time";let r=Array(i);r[0]="additions";let s=Array(i);s[0]="deletions";let a={time:"x",additions:"y2",deletions:"y2"},l={additions:"bar",deletions:"bar"},c={additions:"time",deletions:"time"},d=0,h=0;for(let i of e){let{author:e,date:p,additions:u=0,deletions:f=0}=i;this._commitsByTimestamp.set(p,i),o[++h]=p,r[h]=u,s[h]=f;let g=this.calculateBubbleSize(u+f,t),m=this._authors.get(e);null==m?(m={x:[`time.${e}`,p],y:d,z:new Map([[p,g]])},this._authors.set(e,m),this._authorsByIndex.set(d,e),a[e]="y",l[e]="scatter",c[e]=`time.${e}`,d--):(m.x.push(p),m.z.set(p,g))}let p=[o,r,s];for(let[e,t]of this._authors){p.push(t.x);let i=Array(t.x.length).fill(t.y);i[0]=e,p.push(i)}return{axes:a,columns:p,names:{additions:"Additions",deletions:"Deletions"},types:l,xs:c}}calculateChangeMetrics(e){let t=e.map(e=>(e.additions??0)+(e.deletions??0)).sort((e,t)=>e-t);return{maxChanges:t[t.length-1],q1:t[Math.floor(.25*t.length)],q3:t[Math.floor(.75*t.length)]}}calculateBubbleSize(e,{minRadius:t,maxRadius:i,q1:o,q3:r,maxChanges:s}){let a;return 0===e?t:(a=e<=o?t+e/o*10:e<=r?t+10+(e-o)/(r-o)*15:t+25+Math.log(e-r+1)/Math.log(s-r+1)*15,Math.max(t,Math.min(i,a)))}getOnRenderedCallback(e){return function(){let t=this;null!=t&&t.$.main.selectAll(".bb-axis-y .tick text tspan").each(function(i){if(this==null)return;let o=e._authorsByIndex.get(-i.index),r=t.color(o);this.setAttribute("fill",r);let s=document.createElementNS("http://www.w3.org/2000/svg","title");s.textContent=o,this.appendChild(s)})}}};tV.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},tV.styles=[tH],tG([eM("#chart")],tV.prototype,"chartContainer",2),tG([eD()],tV.prototype,"placement",2),tG([eD()],tV.prototype,"dateFormat",2),tG([eD()],tV.prototype,"shortDateFormat",2),tG([eL()],tV.prototype,"_data",2),tG([eD({type:Boolean,reflect:!0})],tV.prototype,"zoomed",2),tG([eD({type:Object})],tV.prototype,"dataPromise",1),tG([tm({args:!1})],tV.prototype,"updateChart",1),tG([tm({args:{0:e=>e?.length}})],tV.prototype,"prepareChartData",1),tV=tG([ez("gl-timeline-chart")],tV);let tY=e=>e??e_;function tK(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}let tZ=S`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}

	a:focus-visible {
		outline: 1px solid var(--color-focus-border);
		border-radius: 0.2rem;
	}

	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`,tX=S`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;S`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${tX}
	}
`;let tQ=S`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,tJ=S`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;S`
	:focus-visible {
		${tQ}
	}
`;let t0=S`
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
`,t1=S`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${tQ}
	}
	a:hover {
		text-decoration: underline;
	}
`,t2=S`
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
`;S`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;var t8=Object.defineProperty,t5=Object.defineProperties,t9=Object.getOwnPropertyDescriptor,t3=Object.getOwnPropertyDescriptors,t6=Object.getOwnPropertySymbols,t7=Object.prototype.hasOwnProperty,t4=Object.prototype.propertyIsEnumerable,ie=e=>{throw TypeError(e)},it=(e,t,i)=>t in e?t8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ii=(e,t)=>{for(var i in t||(t={}))t7.call(t,i)&&it(e,i,t[i]);if(t6)for(var i of t6(t))t4.call(t,i)&&it(e,i,t[i]);return e},io=(e,t)=>t5(e,t3(t)),ir=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?t9(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&t8(t,i,s),s},is=(e,t,i)=>t.has(e)||ie("Cannot "+i),ia=(e,t,i)=>(is(e,t,"read from private field"),i?i.call(e):t.get(e)),il=(e,t,i)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ic=(e,t,i,o)=>(is(e,t,"write to private field"),o?o.call(e,i):t.set(e,i),i),id=new Map,ih=new WeakMap;function ip(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function iu(e,t){id.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function ib(e,t,i){let o=ih.get(e);if(null==o?void 0:o[t])return ip(o[t],i.dir);let r=id.get(t);return r?ip(r,i.dir):{keyframes:[],options:{duration:0}}}var ig=S`
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
`,im=S`
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
`;let iv=new Set,iy=new Map,iw="ltr",i_="en",ix="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(ix){let e=new MutationObserver(ik);iw=document.documentElement.dir||"ltr",i_=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function i$(...e){e.map(e=>{let t=e.$code.toLowerCase();iy.has(t)?iy.set(t,Object.assign(Object.assign({},iy.get(t)),e)):iy.set(t,e),r||(r=e)}),ik()}function ik(){ix&&(iw=document.documentElement.dir||"ltr",i_=document.documentElement.lang||navigator.language),[...iv.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){iv.add(this.host)}hostDisconnected(){iv.delete(this.host)}dir(){return`${this.host.dir||iw}`.toLowerCase()}lang(){return`${this.host.lang||i_}`.toLowerCase()}getTranslationData(e){var t,i;let o=new Intl.Locale(e.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),s=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"",a=iy.get(`${r}-${s}`),l=iy.get(r);return{locale:o,language:r,region:s,primary:a,secondary:l}}exists(e,t){var i;let{primary:o,secondary:s}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!o&&!!o[e]||!!s&&!!s[e]||!!t.includeFallback&&!!r&&!!r[e]}term(e,...t){let i,{primary:o,secondary:s}=this.getTranslationData(this.lang());if(o&&o[e])i=o[e];else if(s&&s[e])i=s[e];else{if(!r||!r[e])return String(e);i=r[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}};var iP={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};i$(iP);var iC=class extends LocalizeController{};i$(iP);var iA=S`
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
`,iS=class extends lit_element_r{constructor(){super(),il(this,m,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let i=new CustomEvent(e,ii({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){let o=customElements.get(e);if(!o){try{customElements.define(e,t,i)}catch(o){customElements.define(e,class extends t{},i)}return}let r=" (unknown version)",s=r;if("version"in t&&t.version&&(r=" v"+t.version),"version"in o&&o.version&&(s=" v"+o.version),r&&s&&r===s)return}attributeChangedCallback(e,t,i){ia(this,m)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),ic(this,m,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}};m=new WeakMap,iS.version="2.20.0",iS.dependencies={},ir([eD()],iS.prototype,"dir",2),ir([eD()],iS.prototype,"lang",2);let iE=Math.min,iz=Math.max,iO=Math.round,iT=Math.floor,iD=e=>({x:e,y:e}),iL={left:"right",right:"left",bottom:"top",top:"bottom"},iR={start:"end",end:"start"};function iM(e,t){return"function"==typeof e?e(t):e}function iB(e){return e.split("-")[0]}function iN(e){return e.split("-")[1]}function iU(e){return"x"===e?"y":"x"}function ij(e){return"y"===e?"height":"width"}function iF(e){return["top","bottom"].includes(iB(e))?"y":"x"}function iI(e){return e.replace(/start|end/g,e=>iR[e])}function iH(e){return e.replace(/left|right|bottom|top/g,e=>iL[e])}function iq(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function iW(e){let{x:t,y:i,width:o,height:r}=e;return{width:o,height:r,top:i,left:t,right:t+o,bottom:i+r,x:t,y:i}}function iG(e,t,i){let o,{reference:r,floating:s}=e,a=iF(t),l=iU(iF(t)),c=ij(l),d=iB(t),h="y"===a,p=r.x+r.width/2-s.width/2,u=r.y+r.height/2-s.height/2,f=r[c]/2-s[c]/2;switch(d){case"top":o={x:p,y:r.y-s.height};break;case"bottom":o={x:p,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:u};break;case"left":o={x:r.x-s.width,y:u};break;default:o={x:r.x,y:r.y}}switch(iN(t)){case"start":o[l]-=f*(i&&h?-1:1);break;case"end":o[l]+=f*(i&&h?-1:1)}return o}let iV=async(e,t,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:a}=i,l=s.filter(Boolean),c=await (null==a.isRTL?void 0:a.isRTL(t)),d=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:p}=iG(d,o,c),u=o,f={},g=0;for(let i=0;i<l.length;i++){let{name:s,fn:m}=l[i],{x:v,y:y,data:w,reset:_}=await m({x:h,y:p,initialPlacement:o,placement:u,strategy:r,middlewareData:f,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=v?v:h,p=null!=y?y:p,f={...f,[s]:{...f[s],...w}},_&&g<=50&&(g++,"object"==typeof _&&(_.placement&&(u=_.placement),_.rects&&(d=!0===_.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):_.rects),{x:h,y:p}=iG(d,u,c)),i=-1)}return{x:h,y:p,placement:u,strategy:r,middlewareData:f}};async function iY(e,t){var i;void 0===t&&(t={});let{x:o,y:r,platform:s,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:u=!1,padding:f=0}=iM(t,e),g=iq(f),m=l[u?"floating"===p?"reference":"floating":p],v=iW(await s.getClippingRect({element:null==(i=await (null==s.isElement?void 0:s.isElement(m)))||i?m:m.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),y="floating"===p?{x:o,y:r,width:a.floating.width,height:a.floating.height}:a.reference,w=await (null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),_=await (null==s.isElement?void 0:s.isElement(w))&&await (null==s.getScale?void 0:s.getScale(w))||{x:1,y:1},x=iW(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-x.top+g.top)/_.y,bottom:(x.bottom-v.bottom+g.bottom)/_.y,left:(v.left-x.left+g.left)/_.x,right:(x.right-v.right+g.right)/_.x}}async function iK(e,t){let{placement:i,platform:o,elements:r}=e,s=await (null==o.isRTL?void 0:o.isRTL(r.floating)),a=iB(i),l=iN(i),c="y"===iF(i),d=["left","top"].includes(a)?-1:1,h=s&&c?-1:1,p=iM(t,e),{mainAxis:u,crossAxis:f,alignmentAxis:g}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&"number"==typeof g&&(f="end"===l?-1*g:g),c?{x:f*h,y:u*d}:{x:u*d,y:f*h}}function iZ(){return"undefined"!=typeof window}function iX(e){return i0(e)?(e.nodeName||"").toLowerCase():"#document"}function iQ(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function iJ(e){var t;return null==(t=(i0(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function i0(e){return!!iZ()&&(e instanceof Node||e instanceof iQ(e).Node)}function i1(e){return!!iZ()&&(e instanceof Element||e instanceof iQ(e).Element)}function i2(e){return!!iZ()&&(e instanceof HTMLElement||e instanceof iQ(e).HTMLElement)}function i8(e){return!!iZ()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof iQ(e).ShadowRoot)}function i5(e){let{overflow:t,overflowX:i,overflowY:o,display:r}=i4(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(r)}function i9(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function i3(e){let t=i6(),i=i1(e)?i4(e):e;return["transform","translate","scale","rotate","perspective"].some(e=>!!i[e]&&"none"!==i[e])||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","translate","scale","rotate","perspective","filter"].some(e=>(i.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(i.contain||"").includes(e))}function i6(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function i7(e){return["html","body","#document"].includes(iX(e))}function i4(e){return iQ(e).getComputedStyle(e)}function oe(e){return i1(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ot(e){if("html"===iX(e))return e;let t=e.assignedSlot||e.parentNode||i8(e)&&e.host||iJ(e);return i8(t)?t.host:t}function oi(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);let r=function e(t){let i=ot(t);return i7(i)?t.ownerDocument?t.ownerDocument.body:t.body:i2(i)&&i5(i)?i:e(i)}(e),s=r===(null==(o=e.ownerDocument)?void 0:o.body),a=iQ(r);if(s){let e=oo(a);return t.concat(a,a.visualViewport||[],i5(r)?r:[],e&&i?oi(e):[])}return t.concat(r,oi(r,[],i))}function oo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function or(e){let t=i4(e),i=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=i2(e),s=r?e.offsetWidth:i,a=r?e.offsetHeight:o,l=iO(i)!==s||iO(o)!==a;return l&&(i=s,o=a),{width:i,height:o,$:l}}function os(e){return i1(e)?e:e.contextElement}function on(e){let t=os(e);if(!i2(t))return iD(1);let i=t.getBoundingClientRect(),{width:o,height:r,$:s}=or(t),a=(s?iO(i.width):i.width)/o,l=(s?iO(i.height):i.height)/r;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}let oa=iD(0);function ol(e){let t=iQ(e);return i6()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:oa}function oc(e,t,i,o){var r;void 0===t&&(t=!1),void 0===i&&(i=!1);let s=e.getBoundingClientRect(),a=os(e),l=iD(1);t&&(o?i1(o)&&(l=on(o)):l=on(e));let c=(void 0===(r=i)&&(r=!1),o&&(!r||o===iQ(a))&&r)?ol(a):iD(0),d=(s.left+c.x)/l.x,h=(s.top+c.y)/l.y,p=s.width/l.x,u=s.height/l.y;if(a){let e=iQ(a),t=o&&i1(o)?iQ(o):o,i=e,r=oo(i);for(;r&&o&&t!==i;){let e=on(r),t=r.getBoundingClientRect(),o=i4(r),s=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;d*=e.x,h*=e.y,p*=e.x,u*=e.y,d+=s,h+=a,r=oo(i=iQ(r))}}return iW({width:p,height:u,x:d,y:h})}function od(e,t){let i=oe(e).scrollLeft;return t?t.left+i:oc(iJ(e)).left+i}function oh(e,t,i){void 0===i&&(i=!1);let o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(i?0:od(e,o)),y:o.top+t.scrollTop}}function op(e,t,i){let o;if("viewport"===t)o=function(e,t){let i=iQ(e),o=iJ(e),r=i.visualViewport,s=o.clientWidth,a=o.clientHeight,l=0,c=0;if(r){s=r.width,a=r.height;let e=i6();(!e||e&&"fixed"===t)&&(l=r.offsetLeft,c=r.offsetTop)}return{width:s,height:a,x:l,y:c}}(e,i);else if("document"===t)o=function(e){let t=iJ(e),i=oe(e),o=e.ownerDocument.body,r=iz(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),s=iz(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),a=-i.scrollLeft+od(e),l=-i.scrollTop;return"rtl"===i4(o).direction&&(a+=iz(t.clientWidth,o.clientWidth)-r),{width:r,height:s,x:a,y:l}}(iJ(e));else if(i1(t))o=function(e,t){let i=oc(e,!0,"fixed"===t),o=i.top+e.clientTop,r=i.left+e.clientLeft,s=i2(e)?on(e):iD(1),a=e.clientWidth*s.x,l=e.clientHeight*s.y;return{width:a,height:l,x:r*s.x,y:o*s.y}}(t,i);else{let i=ol(e);o={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return iW(o)}function ou(e){return"static"===i4(e).position}function ob(e,t){if(!i2(e)||"fixed"===i4(e).position)return null;if(t)return t(e);let i=e.offsetParent;return iJ(e)===i&&(i=i.ownerDocument.body),i}function of(e,t){let i=iQ(e);if(i9(e))return i;if(!i2(e)){let t=ot(e);for(;t&&!i7(t);){if(i1(t)&&!ou(t))return t;t=ot(t)}return i}let o=ob(e,t);for(;o&&["table","td","th"].includes(iX(o))&&ou(o);)o=ob(o,t);return o&&i7(o)&&ou(o)&&!i3(o)?i:o||function(e){let t=ot(e);for(;i2(t)&&!i7(t);){if(i3(t))return t;if(i9(t))break;t=ot(t)}return null}(e)||i}let og=async function(e){let t=this.getOffsetParent||of,i=this.getDimensions,o=await i(e.floating);return{reference:function(e,t,i){let o=i2(t),r=iJ(t),s="fixed"===i,a=oc(e,!0,s,t),l={scrollLeft:0,scrollTop:0},c=iD(0);if(o||!o&&!s)if(("body"!==iX(t)||i5(r))&&(l=oe(t)),o){let e=oc(t,!0,s,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else r&&(c.x=od(r));let d=!r||o||s?iD(0):oh(r,l);return{x:a.left+l.scrollLeft-c.x-d.x,y:a.top+l.scrollTop-c.y-d.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},om={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:r}=e,s="fixed"===r,a=iJ(o),l=!!t&&i9(t.floating);if(o===a||l&&s)return i;let c={scrollLeft:0,scrollTop:0},d=iD(1),h=iD(0),p=i2(o);if((p||!p&&!s)&&(("body"!==iX(o)||i5(a))&&(c=oe(o)),i2(o))){let e=oc(o);d=on(o),h.x=e.x+o.clientLeft,h.y=e.y+o.clientTop}let u=!a||p||s?iD(0):oh(a,c,!0);return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-c.scrollLeft*d.x+h.x+u.x,y:i.y*d.y-c.scrollTop*d.y+h.y+u.y}},getDocumentElement:iJ,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e,s=[..."clippingAncestors"===i?i9(t)?[]:function(e,t){let i=t.get(e);if(i)return i;let o=oi(e,[],!1).filter(e=>i1(e)&&"body"!==iX(e)),r=null,s="fixed"===i4(e).position,a=s?ot(e):e;for(;i1(a)&&!i7(a);){let t=i4(a),i=i3(a);i||"fixed"!==t.position||(r=null),(s?!i&&!r:!i&&"static"===t.position&&!!r&&["absolute","fixed"].includes(r.position)||i5(a)&&!i&&function e(t,i){let o=ot(t);return!(o===i||!i1(o)||i7(o))&&("fixed"===i4(o).position||e(o,i))}(e,a))?o=o.filter(e=>e!==a):r=t,a=ot(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=s[0],l=s.reduce((e,i)=>{let o=op(t,i,r);return e.top=iz(o.top,e.top),e.right=iE(o.right,e.right),e.bottom=iE(o.bottom,e.bottom),e.left=iz(o.left,e.left),e},op(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:of,getElementRects:og,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:i}=or(e);return{width:t,height:i}},getScale:on,isElement:i1,isRTL:function(e){return"rtl"===i4(e).direction}};function ov(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let oy=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var i,o;let r,s,{placement:a,rects:l,platform:c,elements:d}=t,{apply:h=()=>{},...p}=iM(e,t),u=await iY(t,p),f=iB(a),g=iN(a),m="y"===iF(a),{width:v,height:y}=l.floating;"top"===f||"bottom"===f?(r=f,s=g===(await (null==c.isRTL?void 0:c.isRTL(d.floating))?"start":"end")?"left":"right"):(s=f,r="end"===g?"top":"bottom");let w=y-u.top-u.bottom,_=v-u.left-u.right,x=iE(y-u[r],w),$=iE(v-u[s],_),P=!t.middlewareData.shift,C=x,A=$;if(null!=(i=t.middlewareData.shift)&&i.enabled.x&&(A=_),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(C=w),P&&!g){let e=iz(u.left,0),t=iz(u.right,0),i=iz(u.top,0),o=iz(u.bottom,0);m?A=v-2*(0!==e||0!==t?e+t:iz(u.left,u.right)):C=y-2*(0!==i||0!==o?i+o:iz(u.top,u.bottom))}await h({...t,availableWidth:A,availableHeight:C});let S=await c.getDimensions(d.floating);return v!==S.width||y!==S.height?{reset:{rects:!0}}:{}}}},ow=e=>({name:"arrow",options:e,async fn(t){let{x:i,y:o,placement:r,rects:s,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=iM(e,t)||{};if(null==d)return{};let p=iq(h),u={x:i,y:o},f=iU(iF(r)),g=ij(f),m=await a.getDimensions(d),v="y"===f,y=v?"clientHeight":"clientWidth",w=s.reference[g]+s.reference[f]-u[f]-s.floating[g],_=u[f]-s.reference[f],x=await (null==a.getOffsetParent?void 0:a.getOffsetParent(d)),$=x?x[y]:0;$&&await (null==a.isElement?void 0:a.isElement(x))||($=l.floating[y]||s.floating[g]);let P=$/2-m[g]/2-1,C=iE(p[v?"top":"left"],P),A=iE(p[v?"bottom":"right"],P),S=$-m[g]-A,E=$/2-m[g]/2+(w/2-_/2),O=iz(C,iE(E,S)),T=!c.arrow&&null!=iN(r)&&E!==O&&s.reference[g]/2-(E<C?C:A)-m[g]/2<0,D=T?E<C?E-C:E-S:0;return{[f]:u[f]+D,data:{[f]:O,centerOffset:E-O-D,...T&&{alignmentOffset:D}},reset:T}}}),o_=(e,t,i)=>{let o=new Map,r={platform:om,...i},s={...r.platform,_c:o};return iV(e,t,{...r,platform:s})},ox=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let o$=ox(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return ew}});function ok(e){var t=e;for(let e=t;e;e=oP(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=oP(t);e;e=oP(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||i3(t)||"BODY"===e.tagName))return e}return null}function oP(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var oC=class extends iS{constructor(){super(...arguments),this.localize=new iC(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),o=0,r=0,s=0,a=0,l=0,c=0,d=0,h=0;i?e.top<t.top?(o=e.left,r=e.bottom,s=e.right,a=e.bottom,l=t.left,c=t.top,d=t.right,h=t.top):(o=t.left,r=t.bottom,s=t.right,a=t.bottom,l=e.left,c=e.top,d=e.right,h=e.top):e.left<t.left?(o=e.right,r=e.top,s=t.left,a=t.top,l=e.right,c=e.bottom,d=t.left,h=t.bottom):(o=t.right,r=t.top,s=e.left,a=e.top,l=t.right,c=t.bottom,d=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,i,o){let r;void 0===o&&(o={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:d=!1}=o,h=os(e),p=s||a?[...h?oi(h):[],...oi(t)]:[];p.forEach(e=>{s&&e.addEventListener("scroll",i,{passive:!0}),a&&e.addEventListener("resize",i)});let u=h&&c?function(e,t){let i,o=null,r=iJ(e);function s(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return!function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),s();let d=e.getBoundingClientRect(),{left:h,top:p,width:u,height:f}=d;if(l||t(),!u||!f)return;let g=iT(p),m=iT(r.clientWidth-(h+u)),v={rootMargin:-g+"px "+-m+"px "+-iT(r.clientHeight-(p+f))+"px "+-iT(h)+"px",threshold:iz(0,iE(1,c))||1},y=!0;function w(t){let o=t[0].intersectionRatio;if(o!==c){if(!y)return a();o?a(!1,o):i=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||ov(d,e.getBoundingClientRect())||a(),y=!1}try{o=new IntersectionObserver(w,{...v,root:r.ownerDocument})}catch{o=new IntersectionObserver(w,v)}o.observe(e)}(!0),s}(h,i):null,f=-1,g=null;l&&(g=new ResizeObserver(e=>{let[o]=e;o&&o.target===h&&g&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),i()}),h&&!d&&g.observe(h),g.observe(t));let m=d?oc(e):null;return d&&function t(){let o=oc(e);m&&!ov(m,o)&&i(),m=o,r=requestAnimationFrame(t)}(),i(),()=>{var e;p.forEach(e=>{s&&e.removeEventListener("scroll",i),a&&e.removeEventListener("resize",i)}),null==u||u(),null==(e=g)||e.disconnect(),g=null,d&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,i;if(!this.active||!this.anchorEl)return;let o=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var i,o;let{x:r,y:s,placement:a,middlewareData:l}=t,c=await iK(t,e);return a===(null==(i=l.offset)?void 0:i.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:a}}}}];this.sync?o.push(oy({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&o.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var i,o,r,s,a;let{placement:l,middlewareData:c,rects:d,initialPlacement:h,platform:p,elements:u}=e,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:m,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,..._}=iM(t,e);if(null!=(i=c.arrow)&&i.alignmentOffset)return{};let x=iB(l),$=iF(h),P=iB(h)===h,C=await (null==p.isRTL?void 0:p.isRTL(u.floating)),A=m||(P||!w?[iH(h)]:function(e){let t=iH(e);return[iI(e),t,iI(t)]}(h)),S="none"!==y;!m&&S&&A.push(...function(e,t,i,o){let r=iN(e),s=function(e,t,i){let o=["left","right"],r=["right","left"];switch(e){case"top":case"bottom":if(i)return t?r:o;return t?o:r;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(iB(e),"start"===i,o);return r&&(s=s.map(e=>e+"-"+r),t&&(s=s.concat(s.map(iI)))),s}(h,w,y,C));let E=[h,...A],O=await iY(e,_),T=[],D=(null==(o=c.flip)?void 0:o.overflows)||[];if(f&&T.push(O[x]),g){let e=function(e,t,i){void 0===i&&(i=!1);let o=iN(e),r=iU(iF(e)),s=ij(r),a="x"===r?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=iH(a)),[a,iH(a)]}(l,d,C);T.push(O[e[0]],O[e[1]])}if(D=[...D,{placement:l,overflows:T}],!T.every(e=>e<=0)){let e=((null==(r=c.flip)?void 0:r.index)||0)+1,t=E[e];if(t)return{data:{index:e,overflows:D},reset:{placement:t}};let i=null==(s=D.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!i)switch(v){case"bestFit":{let e=null==(a=D.filter(e=>{if(S){let t=iF(e.placement);return t===$||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(i=e);break}case"initialPlacement":i=h}if(l!==i)return{reset:{placement:i}}}return{}}}),this.shift&&o.push({name:"shift",options:i={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:r}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...c}=iM(i,e),d={x:t,y:o},h=await iY(e,c),p=iF(iB(r)),u=iU(p),f=d[u],g=d[p];if(s){let e="y"===u?"top":"left",t="y"===u?"bottom":"right",i=f+h[e],o=f-h[t];f=iz(i,iE(f,o))}if(a){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",i=g+h[e],o=g-h[t];g=iz(i,iE(g,o))}let m=l.fn({...e,[u]:f,[p]:g});return{...m,data:{x:m.x-t,y:m.y-o,enabled:{[u]:s,[p]:a}}}}}),this.autoSize?o.push(oy({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&o.push(ow({element:this.arrowEl,padding:this.arrowPadding}));let r="absolute"===this.strategy?e=>om.getOffsetParent(e,ok):om.getOffsetParent;o_(this.anchorEl,this.popup,{placement:this.placement,middleware:o,strategy:this.strategy,platform:io(ii({},om),{getOffsetParent:r})}).then(({x:e,y:t,middlewareData:i,placement:o})=>{let r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=i.arrow.x,t=i.arrow.y,o="",a="",l="",c="";if("start"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?i:"",c=r?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":i,c=r?i:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:l,left:c,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ey`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${o$({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${o$({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ey`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function oA(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}function oS(e,t,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=e.animate(t,io(ii({},i),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function oE(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function oz(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function oO(e,t){let i=ii({waitUntilFirstUpdate:!1},t);return(t,o)=>{let{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach(t=>{if(e.has(t)){let r=e.get(t),s=this[t];r!==s&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](r,s)}}),r.call(this,e)}}}oC.styles=[iA,im],ir([eM(".popup")],oC.prototype,"popup",2),ir([eM(".popup__arrow")],oC.prototype,"arrowEl",2),ir([eD()],oC.prototype,"anchor",2),ir([eD({type:Boolean,reflect:!0})],oC.prototype,"active",2),ir([eD({reflect:!0})],oC.prototype,"placement",2),ir([eD({reflect:!0})],oC.prototype,"strategy",2),ir([eD({type:Number})],oC.prototype,"distance",2),ir([eD({type:Number})],oC.prototype,"skidding",2),ir([eD({type:Boolean})],oC.prototype,"arrow",2),ir([eD({attribute:"arrow-placement"})],oC.prototype,"arrowPlacement",2),ir([eD({attribute:"arrow-padding",type:Number})],oC.prototype,"arrowPadding",2),ir([eD({type:Boolean})],oC.prototype,"flip",2),ir([eD({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],oC.prototype,"flipFallbackPlacements",2),ir([eD({attribute:"flip-fallback-strategy"})],oC.prototype,"flipFallbackStrategy",2),ir([eD({type:Object})],oC.prototype,"flipBoundary",2),ir([eD({attribute:"flip-padding",type:Number})],oC.prototype,"flipPadding",2),ir([eD({type:Boolean})],oC.prototype,"shift",2),ir([eD({type:Object})],oC.prototype,"shiftBoundary",2),ir([eD({attribute:"shift-padding",type:Number})],oC.prototype,"shiftPadding",2),ir([eD({attribute:"auto-size"})],oC.prototype,"autoSize",2),ir([eD()],oC.prototype,"sync",2),ir([eD({type:Object})],oC.prototype,"autoSizeBoundary",2),ir([eD({attribute:"auto-size-padding",type:Number})],oC.prototype,"autoSizePadding",2),ir([eD({attribute:"hover-bridge",type:Boolean})],oC.prototype,"hoverBridge",2);var oT=class extends iS{constructor(){super(),this.localize=new iC(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=oE(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=oE(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await oz(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:i}=ib(this,"tooltip.show",{dir:this.localize.dir()});await oS(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await oz(this.body);let{keyframes:e,options:i}=ib(this,"tooltip.hide",{dir:this.localize.dir()});await oS(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,oA(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,oA(this,"sl-after-hide")}render(){return ey`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${o$({tooltip:!0,"tooltip--open":this.open})}
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
    `}};oT.styles=[iA,ig],oT.dependencies={"sl-popup":oC},ir([eM("slot:not([name])")],oT.prototype,"defaultSlot",2),ir([eM(".tooltip__body")],oT.prototype,"body",2),ir([eM("sl-popup")],oT.prototype,"popup",2),ir([eD()],oT.prototype,"content",2),ir([eD()],oT.prototype,"placement",2),ir([eD({type:Boolean,reflect:!0})],oT.prototype,"disabled",2),ir([eD({type:Number})],oT.prototype,"distance",2),ir([eD({type:Boolean,reflect:!0})],oT.prototype,"open",2),ir([eD({type:Number})],oT.prototype,"skidding",2),ir([eD()],oT.prototype,"trigger",2),ir([eD({type:Boolean})],oT.prototype,"hoist",2),ir([oO("open",{waitUntilFirstUpdate:!0})],oT.prototype,"handleOpenChange",1),ir([oO(["content","distance","hoist","placement","skidding"])],oT.prototype,"handleOptionsChange",1),ir([oO("disabled")],oT.prototype,"handleDisabledChange",1),iu("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),iu("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),oT.define("sl-tooltip");var oD=Object.defineProperty,oL=Object.getOwnPropertyDescriptor,oR=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?oL(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&oD(t,i,s),s};iu("tooltip.show",null),iu("tooltip.hide",null);let oM=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback()}render(){return ey`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??e_}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};oM.styles=S`
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
	`,oR([eD()],oM.prototype,"content",2),oR([eD({reflect:!0})],oM.prototype,"placement",2),oR([eD({type:Boolean})],oM.prototype,"disabled",2),oR([eD({type:Number})],oM.prototype,"distance",2),oR([eD({type:Boolean})],oM.prototype,"hoist",2),oM=oR([ez("gl-tooltip")],oM);var oB=Object.defineProperty,oN=Object.getOwnPropertyDescriptor,oU=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?oN(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&oB(t,i,s),s};let oj=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom"}connectedCallback(){super.connectedCallback(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ey`<gl-tooltip .content=${this.tooltip} placement=${tY(this.tooltipPlacement)}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ey`<gl-tooltip placement=${tY(this.tooltipPlacement)}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ey`<a
				class="control"
				tabindex="${tY(!1===this.disabled?void 0:-1)}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ey`<button
			class="control"
			role=${tY(this.role)}
			aria-checked=${tY(this.ariaChecked)}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};oj.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},oj.styles=[t0,S`
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
				${tJ}
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
		`],oU([eM(".control")],oj.prototype,"control",2),oU([eD({reflect:!0})],oj.prototype,"appearance",2),oU([eD({type:Boolean,reflect:!0})],oj.prototype,"disabled",2),oU([eD({reflect:!0})],oj.prototype,"density",2),oU([eD({type:Boolean,reflect:!0})],oj.prototype,"full",2),oU([eD()],oj.prototype,"href",2),oU([eD()],oj.prototype,"tooltip",2),oU([eD()],oj.prototype,"tooltipPlacement",2),oj=oU([ez("gl-button")],oj);let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=e_,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===e_||null==e)return this._t=void 0,this.it=e;if(e===ew)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let oF=ox(unsafe_html_e),{I:oI}={M:et,P:ei,A:eo,C:1,L:eP,R:M,D:ec,V:eC,I:R,H:k,N:I,U:L,B:H,F:z},oH=e=>null===e||"object"!=typeof e&&"function"!=typeof e,oq=e=>void 0===e.strings,oW=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),oW(e,t);return!0},oG=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},oV=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),oZ(t)}};function oY(e){void 0!==this._$AN?(oG(this),this._$AM=e,oV(this)):this._$AM=e}function oK(e,t=!1,i=0){let o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)oW(o[e],!1),oG(o[e]);else null!=o&&(oW(o,!1),oG(o));else oW(this,e)}let oZ=e=>{2==e.type&&(e._$AP??=oK,e._$AQ??=oY)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),oV(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(oW(this,e),oG(this))}setValue(e){if(oq(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(e=>this.q=e)}resume(){this.q?.(),this.Z=this.q=void 0}};let oX=e=>!oH(e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!oX(e))??ew}update(e,t){let i=this._$Cbt,o=i.length;this._$Cbt=t;let r=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!oX(a))return this._$Cwt=e,a;e<o&&a===i[e]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(a).then(async e=>{for(;s.get();)await s.get();let t=r.deref();if(void 0!==t){let i=t._$Cbt.indexOf(a);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return ew}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let oQ=ox(until_c);var oJ=Object.defineProperty,o0=Object.getOwnPropertyDescriptor,o1=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?o0(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&oJ(t,i,s),s};let o2=class extends lit_element_r{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ey`${oQ(this.promoPromise.then(e=>this.renderPromo(e)),e_)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"info":if(t.info)return this.hasPromo=!0,ey`<p class="promo" part="text">${oF(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ey`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${tY(t.link.title)}"
						>${oF(t.link.html)}</a
					>`}return this.hasPromo=!1,e_}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),tK(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};o2.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},o2.styles=[S`
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

			.link:focus-visible {
				${tQ}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],o1([eM('a,button,[tabindex="0"]')],o2.prototype,"_focusable",2),o1([eD({type:Object})],o2.prototype,"promoPromise",2),o1([eD({type:Object})],o2.prototype,"source",2),o1([eD({reflect:!0,type:String})],o2.prototype,"type",2),o1([eD({type:Boolean,reflect:!0,attribute:"has-promo"})],o2.prototype,"hasPromo",1),o2=o1([ez("gl-promo")],o2);var o8=Object.defineProperty,o5=Object.getOwnPropertyDescriptor,o9=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?o5(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&o8(t,i,s),s};let o3=class extends lit_element_r{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,e)return;let t=(this.appearance??"alert")==="alert"?"alert":void 0;switch(this.state){case eN.VerificationRequired:return ey`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${tY(t)}"
							href="${tK("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${tY(t)}"
							href="${tK("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case eN.Community:case eN.ProPreviewExpired:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let i=(new Date(t[t.length-1].expiresOn).getTime()-new Date().getTime())/36e5;return t.length<=3&&i>0&&i<24?"active":"expired"}(this.featurePreview))return ey`${this.renderFeaturePreview(this.featurePreview)}`;return ey`<slot name="feature"></slot>
					<p>
						Use on privately-hosted repos requires
						<a href="${tp.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${tY(t)}"
							href="${tK("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${tK("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${tf("day",14)} of
						<a href="${tp.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case eN.ProTrialExpired:return ey`<slot name="feature"></slot>
					<p>Use on privately-hosted repos requires <a href="${tp.communityVsPro}">GitLens Pro</a>.</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${tY(t)}"
							href="${tK("gitlens.plus.upgrade",{plan:eB.Pro,...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						><span
							>or
							<a href="${tK("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>${this.renderPromo()}</p>`;case eN.ProTrialReactivationEligible:return ey`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${tY(t)}"
							href="${tK("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						><span
							>or
							<a href="${tK("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${tf("day",14)}!
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,i=e.usages.length;return 0===i?ey`<slot name="feature"></slot>
				<gl-button appearance="${tY(t)}" href="${tY(this.featurePreviewCommandLink)}"
					>Continue</gl-button
				>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
					repos, or
					<a href="${tK("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?ey`<br />`:""} For full access to all GitLens Pro features,
					<a href="${tK("gitlens.plus.signUp",this.source)}"
						>start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ey`
			${this.renderFeaturePreviewStep(e,i)}
			<p class="actions-row">
				<gl-button
					class="inline"
					appearance="${tY(t)}"
					href="${tY(this.featurePreviewCommandLink)}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${tK("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<p>
				After continuing, you will have ${tf("day",3-i,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
				repos.<br />
				${"alert"!==t?ey`<br />`:""} For full access to all GitLens Pro features,
				<a href="${tK("gitlens.plus.signUp",this.source)}"
					>start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"===e.feature)switch(t){case 1:return ey`<p>Try Commit Search</p>
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
							</p> `;case 2:return ey`
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
						`}return ey`<slot name="feature"></slot>`}renderPromo(){return ey`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo("gate")}
			.source=${this.source}
		></gl-promo>`}};o3.styles=[tZ,S`
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
		`],o9([eM("gl-button")],o3.prototype,"button",2),o9([eD({type:Object})],o3.prototype,"featurePreview",2),o9([eD({type:String})],o3.prototype,"featurePreviewCommandLink",2),o9([eD({type:String})],o3.prototype,"appearance",2),o9([eD()],o3.prototype,"featureWithArticleIfNeeded",2),o9([e9({context:"promos"})],o3.prototype,"promos",2),o9([eD({type:Object})],o3.prototype,"source",2),o9([eD({attribute:!1,type:Number})],o3.prototype,"state",2),o9([eD({type:String})],o3.prototype,"webroot",2),o3=o9([ez("gl-feature-gate-plus-state")],o3);var o6=Object.defineProperty,o7=Object.getOwnPropertyDescriptor,o4=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?o7(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&o6(t,i,s),s};let re=class extends lit_element_r{render(){var e;let t=!this.visible||null!=this.state&&null!=(e=this.state)&&(e===eN.Paid||e===eN.ProPreview||e===eN.ProTrial);if(this.hidden=t,t)return;let i=this.appearance??(document.body.getAttribute("data-placement")??"editor")==="editor"?"alert":"welcome";return ey`
			<section>
				<slot></slot>
				<gl-feature-gate-plus-state
					appearance=${i}
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
		`}};re.styles=[tZ,S`
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
		`],o4([eD({reflect:!0})],re.prototype,"appearance",2),o4([eD({type:Object})],re.prototype,"featurePreview",2),o4([eD({type:String})],re.prototype,"featurePreviewCommandLink",2),o4([eD()],re.prototype,"featureWithArticleIfNeeded",2),o4([eD({type:Object})],re.prototype,"source",2),o4([eD({attribute:!1,type:Number})],re.prototype,"state",2),o4([eD({type:Boolean})],re.prototype,"visible",2),o4([eD({type:String})],re.prototype,"webroot",2),re=o4([ez("gl-feature-gate")],re),oC.define("sl-popup");var rt=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,ro=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?ri(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rt(t,i,s),s};let rr=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=t$(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let i=t$(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),i)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of rr.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),rr.openPopovers.delete(this),super.disconnectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ey`<sl-popup
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
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return rr.closeOthers(this),this.open=!0,rr.openPopovers.add(this),tk(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,rr.openPopovers.delete(this),tk(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};rr.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},rr.openPopovers=new Set,rr.styles=[t2,S`
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
		`],ro([eM("#popover")],rr.prototype,"body",2),ro([eM("sl-popup")],rr.prototype,"popup",2),ro([eD({reflect:!0})],rr.prototype,"placement",2),ro([eD({type:Object})],rr.prototype,"anchor",2),ro([eD({reflect:!0,type:Boolean})],rr.prototype,"disabled",2),ro([eD({type:Number})],rr.prototype,"distance",2),ro([eD({reflect:!0,type:Boolean})],rr.prototype,"open",2),ro([eD({reflect:!0,type:Boolean})],rr.prototype,"arrow",2),ro([eD({type:Number})],rr.prototype,"skidding",2),ro([eD()],rr.prototype,"trigger",2),ro([eD({type:Boolean})],rr.prototype,"hoist",2),ro([e6("open",{afterFirstUpdate:!0})],rr.prototype,"handleOpenChange",1),ro([e6(["distance","hoist","placement","skidding"])],rr.prototype,"handleOptionsChange",1),ro([e6("disabled")],rr.prototype,"handleDisabledChange",1),rr=ro([ez("gl-popover")],rr);var rs=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,ra=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rn(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rs(t,i,s),s};let rl=class extends lit_element_r{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var e,t,i,o;if(null==this.subscription)return 0;return e=this.subscription,t="days",i=e.plan.effective.expiresOn,o=t,(null!=i?function(e,t,i,o){let r=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=o??Math.floor;switch(i){case"days":return s(r/864e5);case"hours":return s(r/36e5);case"minutes":return s(r/6e4);case"seconds":return s(r/1e3);default:return r}}(Date.now(),new Date(i),o,Math.round):void 0)??0}get state(){return this.subscription?.state}render(){return ey`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===eN.VerificationRequired)return ey`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var t;if(eV(this.subscription)||this.cloud&&null!=this.subscription.account)return ey`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(t===eN.ProPreview||t===eN.ProTrial))return ey`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=ey`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===eN.Paid?ey`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ey`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:ey`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?ey`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:ey`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return e_;switch(this.state){case eN.Paid:var t;e=ey`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${tK("gitlens.showAccountView")}"
							>${t=this.subscription?.plan.actual.id??eB.Pro,`GitLens ${function(e){switch(e){case eB.Pro:return"Pro";case eB.Advanced:return"Advanced";case eB.Business:return"Business";case eB.Enterprise:return"Enterprise";default:return"Community"}}(t)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case eN.VerificationRequired:e=ey`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${tK("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${tK("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case eN.ProTrial:{let t=this.daysRemaining;e=ey`<p>
						You have
						<strong>${t<1?"<1 day":tf("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case eN.ProTrialExpired:e=ey`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ey`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case eN.ProTrialReactivationEligible:e=ey`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${tf("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${tK("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${tf("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===eN.ProPreview){let t=this.daysRemaining;e=ey`<p>
							You have
							<strong>${t<1?"<1 day":tf("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=ey`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ey`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return ey`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${tK("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${tK("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return ey`<div class="actions">
			${e??e_}
			<gl-button
				density="tight"
				href="${tK("gitlens.plus.upgrade",{plan:eB.Pro,...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return ey`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo("badge")}
			.source=${this.source}
		></gl-promo>`}};rl.styles=[t0,t1,S`
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

			.badge:focus-visible {
				${A(tQ)}
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
		`],ra([eD({type:Boolean})],rl.prototype,"cloud",2),ra([eD({reflect:!0})],rl.prototype,"placement",2),ra([eD({type:Boolean})],rl.prototype,"preview",2),ra([e9({context:"promos"})],rl.prototype,"promos",2),ra([eD({type:Object})],rl.prototype,"source",2),ra([eD({attribute:!1})],rl.prototype,"subscription",2),rl=ra([ez("gl-feature-badge")],rl);let rc=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),rd=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141"});var rh=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,ru=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rp(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rh(t,i,s),s};function rb(e,t=""){return A(Object.entries(e).map(([e,i])=>(function(e,t,i=""){return`:host([icon='${i}${e}'])::before { content: '${t}'; }`})(e,i,t)).join(""))}let rf=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};rf.styles=S`
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

		${rb(rc)}
		${rb(rd,"gl-")}

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
	`,ru([eD({reflect:!0})],rf.prototype,"icon",2),ru([eD({reflect:!0})],rf.prototype,"modifier",2),ru([eD({type:Number})],rf.prototype,"size",2),ru([eD({reflect:!0})],rf.prototype,"flip",2),ru([eD({reflect:!0})],rf.prototype,"rotate",2),rf=ru([ez("code-icon")],rf);var rg=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,rv=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rm(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rg(t,i,s),s};let ry=class extends lit_element_r{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return ey`<div class="progress-bar"></div>`}};ry.styles=S`
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
	`,rv([eD({reflect:!0})],ry.prototype,"mode",2),rv([eD({type:Boolean})],ry.prototype,"active",2),rv([eD()],ry.prototype,"position",2),ry=rv([ez("progress-indicator")],ry);var rw=Object.defineProperty,r_=Object.getOwnPropertyDescriptor,rx=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?r_(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rw(t,i,s),s};let r$=class extends GlApp{constructor(){super(...arguments),this._loading=!0,this._zoomed=!1,this.onDocumentKeyDown=e=>{("Escape"===e.key||"Esc"===e.key)&&this._chart?.reset()}}createStateProvider(e,t){return new TimelineStateProvider(this,e,t)}onPersistState(e){this._ipc.setPersistedState({period:e.period,uri:e.uri})}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.onDocumentKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.onDocumentKeyDown),super.disconnectedCallback()}get allowed(){return this.state.access?.allowed??!1}get header(){let e,t=this.state.title;if(null!=t){let i=t.lastIndexOf("/");if(i>=0){let o=t.substring(i+1);e=t.substring(0,i),t=o}}return{title:t??"",description:e??""}}get loading(){return null!=this.state.dataset&&null!=this.uri&&this._loading}get period(){return this.state.period}get subscription(){return this.state.access?.subscription?.current}get sha(){return this.state.sha}get uri(){return this.state.uri}get uriType(){return this.state.uriType}get zoomed(){return this._zoomed}willUpdate(e){e.has("_loading")||e.has("_zoomed")||(this._loading=!!(this.state.dataset&&this.uri)),super.willUpdate(e)}render(){return ey`
			${this.allowed?ey`<gl-feature-gate
						.source=${{source:"timeline",detail:"gate"}}
						.state=${this.subscription?.state}
				  ></gl-feature-gate>`:e_}
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
							${this.sha?ey`<code-icon icon="git-commit" size="16"></code-icon
										><span class="sha">${this.sha}</span>`:e_}
						</span>
					</span>
					<span class="toolbox">
						${this.zoomed?ey`<gl-button
									appearance="toolbar"
									@click=${e=>e.shiftKey||e.altKey?this._chart?.reset():this._chart?.zoom(-1)}
									aria-label="Zoom Out"
							  >
									<code-icon icon="zoom-out"></code-icon>
									<span slot="tooltip">Zoom Out<br />[Alt] Reset Zoom</span>
							  </gl-button>`:e_}
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
						${"view"===this.placement?ey`<gl-button
									appearance="toolbar"
									href="command:gitlens.views.timeline.openInTab"
									tooltip="Open in Editor"
									aria-label="Open in Editor"
							  >
									<code-icon icon="link-external"></code-icon>
							  </gl-button>`:e_}
						${null==this.subscription||!eV(this.subscription)?ey`<gl-feature-badge
									placement="bottom"
									.source=${{source:"timeline",detail:"badge"}}
									.subscription=${this.subscription}
							  ></gl-feature-badge>`:e_}
					</span>
				</header>

				<main class="timeline">${this.renderChart()}</main>
			</div>
		`}renderChart(){return this.uri&&this.state.dataset?ey`<gl-timeline-chart
			id="chart"
			placement="${this.placement}"
			dateFormat="${this.state.dateFormat}"
			shortDateFormat="${this.state.shortDateFormat}"
			.dataPromise=${this.state.dataset}
			@gl-data-point-click=${this.onChartDataPointClicked}
			@gl-load=${()=>this._loading=!1}
			@gl-zoomed=${e=>this._zoomed=e.detail}
		>
		</gl-timeline-chart>`:ey`<div class="timeline__empty">
				<p>There are no editors open that can provide file history information.</p>
			</div>`}onChartDataPointClicked(e){this._ipc.sendCommand(e1,e.detail)}onPeriodChanged(e){let t=e.target,i=t.options[t.selectedIndex].value;(function(e){if("all"===e)return;let[t,i]=e.split("|");if(isNaN(Number(t))||"D"!==i&&"M"!==i&&"Y"!==i)throw Error(`Invalid period: ${e}`)})(i),this._ipc.sendCommand(e2,{period:i})}};r$.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},r$.styles=[tF,tI],rx([eM("#chart")],r$.prototype,"_chart",2),rx([eL()],r$.prototype,"_loading",2),rx([eL()],r$.prototype,"_zoomed",2),r$=rx([ez("gl-timeline-app")],r$);var rk=_.A;export{rk as GlTimelineApp};