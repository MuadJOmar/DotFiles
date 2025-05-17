let e,t,i,o,r;var s,a,l,c,h,d,p,u,b,g,f,m,v={47:(e,t,i)=>{let o=i(602),r=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,s=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,a=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/yu,l=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,c=/\p{M}+/gu,h={limit:1/0,ellipsis:""},d=(e,t={},i={})=>{let p=t.limit??1/0,u=t.ellipsis??"",b=t?.ellipsisWidth??(u?d(u,h,i).width:0),g=i.ansiWidth??0,f=i.controlWidth??0,m=i.ambiguousWidth??1,v=i.emojiWidth??2,w=i.fullWidthWidth??2,x=i.regularWidth??1,_=i.wideWidth??2,$=0,C=0,P=e.length,A=0,S=!1,E=P,T=Math.max(0,p-b),O=0,D=0,B=0,F=0;e:for(;;){if(D>O||C>=P&&C>$){for(let t of(A=0,(e.slice(O,D)||e.slice($,C)).replaceAll(c,""))){let e=t.codePointAt(0)||0;if(B+(F=(0,o.isFullWidth)(e)?w:(0,o.isWide)(e)?_:m!==x&&(0,o.isAmbiguous)(e)?m:x)>T&&(E=Math.min(E,Math.max(O,$)+A)),B+F>p){S=!0;break e}A+=t.length,B+=F}O=D=0}if(C>=P)break;if(l.lastIndex=C,l.test(e)){if(B+(F=(A=l.lastIndex-C)*x)>T&&(E=Math.min(E,C+Math.floor((T-B)/x))),B+F>p){S=!0;break}B+=F,O=$,D=C,C=$=l.lastIndex;continue}if(r.lastIndex=C,r.test(e)){if(B+g>T&&(E=Math.min(E,C)),B+g>p){S=!0;break}B+=g,O=$,D=C,C=$=r.lastIndex;continue}if(s.lastIndex=C,s.test(e)){if(B+(F=(A=s.lastIndex-C)*f)>T&&(E=Math.min(E,C+Math.floor((T-B)/f))),B+F>p){S=!0;break}B+=F,O=$,D=C,C=$=s.lastIndex;continue}if(a.lastIndex=C,a.test(e)){if(B+v>T&&(E=Math.min(E,C)),B+v>p){S=!0;break}B+=v,O=$,D=C,C=$=a.lastIndex;continue}C+=1}return{width:S?T:B,index:S?E:P,truncated:S,ellipsed:S&&p>=b}};t.A=d},379:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var i,o="",r=0,s=-1,a=0,l=0;l<=e.length;++l){if(l<e.length)i=e.charCodeAt(l);else if(47===i)break;else i=47;if(47===i){if(s===l-1||1===a);else if(s!==l-1&&2===a){if(o.length<2||2!==r||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var c=o.lastIndexOf("/");if(c!==o.length-1){-1===c?(o="",r=0):r=(o=o.slice(0,c)).length-1-o.lastIndexOf("/"),s=l,a=0;continue}}else if(2===o.length||1===o.length){o="",r=0,s=l,a=0;continue}}t&&(o.length>0?o+="/..":o="..",r=2)}else o.length>0?o+="/"+e.slice(s+1,l):o=e.slice(s+1,l),r=l-s-1;s=l,a=0}else 46===i&&-1!==a?++a:a=-1}return o}var o={resolve:function(){for(var e,o,r="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?o=arguments[a]:(void 0===e&&(e=process.cwd()),o=e),t(o),0!==o.length&&(r=o+"/"+r,s=47===o.charCodeAt(0));if(r=i(r,!s),s)if(r.length>0)return"/"+r;else return"/";return r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var o=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return(0!==(e=i(e,!o)).length||o||(e="."),e.length>0&&r&&(e+="/"),o)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,i=0;i<arguments.length;++i){var r=arguments[i];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":o.normalize(e)},relative:function(e,i){if(t(e),t(i),e===i||(e=o.resolve(e))===(i=o.resolve(i)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var s=e.length,a=s-r,l=1;l<i.length&&47===i.charCodeAt(l);++l);for(var c=i.length-l,h=a<c?a:c,d=-1,p=0;p<=h;++p){if(p===h){if(c>h){if(47===i.charCodeAt(l+p))return i.slice(l+p+1);else if(0===p)return i.slice(l+p)}else a>h&&(47===e.charCodeAt(r+p)?d=p:0===p&&(d=0));break}var u=e.charCodeAt(r+p);if(u!==i.charCodeAt(l+p))break;47===u&&(d=p)}var b="";for(p=r+d+1;p<=s;++p)(p===s||47===e.charCodeAt(p))&&(0===b.length?b+="..":b+="/..");return b.length>0?b+i.slice(l+d):(l+=d,47===i.charCodeAt(l)&&++l,i.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var i=e.charCodeAt(0),o=47===i,r=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(i=e.charCodeAt(a))){if(!s){r=a;break}}else s=!1;return -1===r?o?"/":".":o&&1===r?"//":e.slice(0,r)},basename:function(e,i){if(void 0!==i&&"string"!=typeof i)throw TypeError('"ext" argument must be a string');t(e);var o,r=0,s=-1,a=!0;if(void 0!==i&&i.length>0&&i.length<=e.length){if(i.length===e.length&&i===e)return"";var l=i.length-1,c=-1;for(o=e.length-1;o>=0;--o){var h=e.charCodeAt(o);if(47===h){if(!a){r=o+1;break}}else -1===c&&(a=!1,c=o+1),l>=0&&(h===i.charCodeAt(l)?-1==--l&&(s=o):(l=-1,s=c))}return r===s?s=c:-1===s&&(s=e.length),e.slice(r,s)}for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!a){r=o+1;break}}else -1===s&&(a=!1,s=o+1);return -1===s?"":e.slice(r,s)},extname:function(e){t(e);for(var i=-1,o=0,r=-1,s=!0,a=0,l=e.length-1;l>=0;--l){var c=e.charCodeAt(l);if(47===c){if(!s){o=l+1;break}continue}-1===r&&(s=!1,r=l+1),46===c?-1===i?i=l:1!==a&&(a=1):-1!==i&&(a=-1)}return -1===i||-1===r||0===a||1===a&&i===r-1&&i===o+1?"":e.slice(i,r)},format:function(e){var t,i;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+i:t+"/"+i:i},parse:function(e){t(e);var i,o={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return o;var r=e.charCodeAt(0),s=47===r;s?(o.root="/",i=1):i=0;for(var a=-1,l=0,c=-1,h=!0,d=e.length-1,p=0;d>=i;--d){if(47===(r=e.charCodeAt(d))){if(!h){l=d+1;break}continue}-1===c&&(h=!1,c=d+1),46===r?-1===a?a=d:1!==p&&(p=1):-1!==a&&(p=-1)}return -1===a||-1===c||0===p||1===p&&a===c-1&&a===l+1?-1!==c&&(0===l&&s?o.base=o.name=e.slice(1,c):o.base=o.name=e.slice(l,c)):(0===l&&s?(o.name=e.slice(1,a),o.base=e.slice(1,c)):(o.name=e.slice(l,a),o.base=e.slice(l,c)),o.ext=e.slice(a,c)),l>0?o.dir=e.slice(0,l-1):s&&(o.dir="/"),o},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},w={};function x(e){var t=w[e];if(void 0!==t)return t.exports;var i=w[e]={exports:{}};return v[e](i,i.exports,x),i.exports}x.m=v,x.d=(e,t)=>{for(var i in t)x.o(t,i)&&!x.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},x.f={},x.e=e=>Promise.all(Object.keys(x.f).reduce((t,i)=>(x.f[i](e,t),t),[])),x.u=e=>"lib-billboard.js",x.miniCssF=e=>{},x.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),x.p="#{root}/dist/webviews/",Object.defineProperty(x,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}}),s={122:0},a=e=>{var t,i,{__webpack_ids__:o,__webpack_modules__:r,__webpack_runtime__:a}=e,l=0;for(t in r)x.o(r,t)&&(x.m[t]=r[t]);for(a&&a(x);l<o.length;l++)i=o[l],x.o(s,i)&&s[i]&&s[i][0](),s[o[l]]=0},x.f.j=(e,t)=>{var i=x.o(s,e)?s[e]:void 0;if(0!==i)if(i)t.push(i[1]);else{var o=import(x.p+"./"+x.u(e)).then(a,t=>{throw 0!==s[e]&&(s[e]=void 0),t}),o=Promise.race([o,new Promise(t=>i=s[e]=[t])]);t.push(i[1]=o)}};let _=globalThis,$=_.ShadowRoot&&(void 0===_.ShadyCSS||_.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,C=Symbol(),P=new WeakMap;let n=class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==C)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if($&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=P.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&P.set(t,e))}return e}toString(){return this.cssText}};let A=e=>new n("string"==typeof e?e:e+"",void 0,C),S=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]),e,C),E=(e,t)=>{if($)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),o=_.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}},T=$?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return A(t)})(e):e,{is:O,defineProperty:D,getOwnPropertyDescriptor:B,getOwnPropertyNames:F,getOwnPropertySymbols:j,getPrototypeOf:U}=Object,q=globalThis,V=q.trustedTypes,W=V?V.emptyScript:"",G=q.reactiveElementPolyfillSupport,K=(e,t)=>e,Y={toAttribute(e,t){switch(t){case Boolean:e=e?W:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Z=(e,t)=>!O(e,t),X={attribute:!0,type:String,converter:Y,reflect:!1,useDefault:!1,hasChanged:Z};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&D(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){let{get:o,set:r}=B(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let s=o?.call(this);r?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??X}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;let e=U(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){let e=this.properties;for(let t of[...F(e),...j(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(T(i));else void 0!==e&&t.push(T(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return E(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:Y).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Y;this._$Em=o,this[o]=r.fromAttribute(t,e.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){let o=this.constructor,r=this[e];if(!(((i??=o.getPropertyOptions(e)).hasChanged??Z)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==r||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[K("elementProperties")]=new Map,y[K("finalized")]=new Map,G?.({ReactiveElement:y}),(q.reactiveElementVersions??=[]).push("2.1.0");let Q=globalThis,J=Q.trustedTypes,ee=J?J.createPolicy("lit-html",{createHTML:e=>e}):void 0,et="$lit$",ei=`lit$${Math.random().toFixed(9).slice(2)}$`,eo="?"+ei,er=`<${eo}>`,es=document,en=()=>es.createComment(""),ea=e=>null===e||"object"!=typeof e&&"function"!=typeof e,el=Array.isArray,ec=e=>el(e)||"function"==typeof e?.[Symbol.iterator],eh=`[ 	
\f\r]`,ed=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ep=/-->/g,eu=/>/g,eb=RegExp(`>|${eh}(?:([^\\s"'>=/]+)(${eh}*=${eh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eg=/'/g,ef=/"/g,em=/^(?:script|style|textarea|title)$/i,ev=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ey=ev(1),ew=(ev(2),ev(3),Symbol.for("lit-noChange")),ex=Symbol.for("lit-nothing"),e_=new WeakMap,ek=es.createTreeWalker(es,129);function e$(e,t){if(!el(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ee?ee.createHTML(t):t}let eC=(e,t)=>{let i=e.length-1,o=[],r,s=2===t?"<svg>":3===t?"<math>":"",a=ed;for(let t=0;t<i;t++){let i=e[t],l,c,h=-1,d=0;for(;d<i.length&&(a.lastIndex=d,null!==(c=a.exec(i)));)d=a.lastIndex,a===ed?"!--"===c[1]?a=ep:void 0!==c[1]?a=eu:void 0!==c[2]?(em.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=eb):void 0!==c[3]&&(a=eb):a===eb?">"===c[0]?(a=r??ed,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?eb:'"'===c[3]?ef:eg):a===ef||a===eg?a=eb:a===ep||a===eu?a=ed:(a=eb,r=void 0);let p=a===eb&&e[t+1].startsWith("/>")?" ":"";s+=a===ed?i+er:h>=0?(o.push(l),i.slice(0,h)+et+i.slice(h)+ei+p):i+ei+(-2===h?t:p)}return[e$(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let N=class N{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[c,h]=eC(e,t);if(this.el=N.createElement(c,i),ek.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ek.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(et)){let t=h[s++],i=o.getAttribute(e).split(ei),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),o.removeAttribute(e)}else e.startsWith(ei)&&(l.push({type:6,index:r}),o.removeAttribute(e));if(em.test(o.tagName)){let e=o.textContent.split(ei),t=e.length-1;if(t>0){o.textContent=J?J.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],en()),ek.nextNode(),l.push({type:2,index:++r});o.append(e[t],en())}}}else if(8===o.nodeType)if(o.data===eo)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(ei,e+1));)l.push({type:7,index:r}),e+=ei.length-1}r++}}static createElement(e,t){let i=es.createElement("template");return i.innerHTML=e,i}};function eP(e,t,i=e,o){if(t===ew)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl,s=ea(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e))._$AT(e,i,o),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=eP(e,r._$AS(e,t.values),r,o)),t}let M=class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??es).importNode(t,!0);ek.currentNode=o;let r=ek.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new R(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new z(r,this,e)),this._$AV.push(t),l=i[++a]}s!==l?.index&&(r=ek.nextNode(),s++)}return ek.currentNode=es,o}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=ex,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){ea(e=eP(this,e,t))?e===ex||null==e||""===e?(this._$AH!==ex&&this._$AR(),this._$AH=ex):e!==this._$AH&&e!==ew&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ec(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ex&&ea(this._$AH)?this._$AA.nextSibling.data=e:this.T(es.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=N.createElement(e$(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new M(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=e_.get(e.strings);return void 0===t&&e_.set(e.strings,t=new N(e)),t}k(e){el(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let r of e)o===t.length?t.push(i=new R(this.O(en()),this.O(en()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=ex,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ex}_$AI(e,t=this,i,o){let r=this.strings,s=!1;if(void 0===r)(s=!ea(e=eP(this,e,t,0))||e!==this._$AH&&e!==ew)&&(this._$AH=e);else{let o,a,l=e;for(e=r[0],o=0;o<r.length-1;o++)(a=eP(this,l[i+o],t,o))===ew&&(a=this._$AH[o]),s||=!ea(a)||a!==this._$AH[o],a===ex?e=ex:e!==ex&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!o&&this.j(e)}j(e){e===ex?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ex?void 0:e}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ex)}};let L=class L extends k{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=eP(this,e,t,0)??ex)===ew)return;let i=this._$AH,o=e===ex&&i!==ex||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==ex&&(i===ex||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){eP(this,e)}};let eA=Q.litHtmlPolyfillSupport;eA?.(N,R),(Q.litHtmlVersions??=[]).push("3.3.0");let eS=(e,t,i)=>{let o=i?.renderBefore??t,r=o._$litPart$;if(void 0===r){let e=i?.renderBefore??null;o._$litPart$=r=new R(t.insertBefore(en(),e),e,void 0,i??{})}return r._$AI(e),r},ez=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eS(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ew}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,ez.litElementHydrateSupport?.({LitElement:lit_element_i});let eE=ez.litElementPolyfillSupport;eE?.({LitElement:lit_element_i}),(ez.litElementVersions??=[]).push("4.2.0");let eT=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eO={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:Z},eD=(e=eO,t,i)=>{let{kind:o,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===o){let{name:o}=i;return{set(i){let r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=i;return function(i){let r=this[o];t.call(this,i),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)};function eR(e){return(t,i)=>"object"==typeof i?eD(e,t,i):((e,t,i)=>{let o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function eL(e){return eR({...e,state:!0,attribute:!1})}let eB=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function eM(e,t){return(i,o,r)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof o?i:r??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eB(i,o,{get(){let i=e.call(this);return void 0===i&&(null!==(i=s(this))||this.hasUpdated)&&t.call(this,i),i}})}return eB(i,o,{get(){return s(this)}})}}let eI=e=>e??ex,eF="0000000000000000000000000000000000000000:",eN=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,ej=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,eU=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,eH=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,eq=/(^[0-9a-f]{40}([\^@~:]\S*)?$)|(^[0]{40}(:|-)$)/,eV=/^(.*?)([\^@~:].*)?$/,eW=/^[0]{40}(?:[\^@~:]\S*)?:?$/,eG=/^[0]{40}([\^@~]\S*)?:$/;function eK(e,t){return!!t&&e.test(t)}function eY(e,t=!1){return"0000000000000000000000000000000000000000"===e||e===eF||!t&&eK(eW,e)}function eZ(e,t=!1){return e===eF||!t&&eK(eG,e)}let eX=7;function eQ(e,t){if("0000000000000000000000000000000000000000-"===e)return"(deleted)";if(!e)return t?.strings?.working??"";if(eY(e))return eZ(e)?t?.strings?.uncommittedStaged??"Index":t?.strings?.uncommitted??"Working Tree";if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return ej.test(e);case"qualified-double-dot":return eU.test(e);case"qualified-triple-dot":return eH.test(e);default:return eN.test(e)}}(e)||!eK(eq,e))return e;let i=Math.max(5,eX),o=eV.exec(e);if(null!=o){let[,e,t]=o;if(null!=t)return`${e.substring(0,i)}${t}`}return e.substring(0,i)}var eJ=((l=eJ||{}).Community="community",l.CommunityWithAccount="community-with-account",l.Pro="pro",l.Advanced="advanced",l.Business="teams",l.Enterprise="enterprise",l),e0=((c=e0||{})[c.VerificationRequired=-1]="VerificationRequired",c[c.Community=0]="Community",c[c.ProPreview=1]="ProPreview",c[c.ProPreviewExpired=2]="ProPreviewExpired",c[c.ProTrial=3]="ProTrial",c[c.ProTrialExpired=4]="ProTrialExpired",c[c.ProTrialReactivationEligible=5]="ProTrialReactivationEligible",c[c.Paid=6]="Paid",c);let e1=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,e2=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,e5=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],e8=new Map,e6=new Map;function e3(e,t){let i=new Date(e.getTime());for(let[e,o]of Object.entries(t))if(o)switch(e){case"years":i.setFullYear(i.getFullYear()+o);break;case"months":i.setMonth(i.getMonth()+o);break;case"days":i.setDate(i.getDate()+o);break;case"hours":i.setHours(i.getHours()+o);break;case"minutes":i.setMinutes(i.getMinutes()+o);break;case"seconds":i.setSeconds(i.getSeconds()+o)}return i}function e4(t,i,o,r=!0){i=i??void 0;let s=`${o??""}:${i}`,a=e8.get(s);if(null==a){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=e2.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:i||void 0}}let i={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(e1))if(null!=t){for(let[e,o]of Object.entries(t))if(null!=o)switch(e){case"year":i.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":"DD"===o?i.day="2-digit":i.day="numeric";break;case"weekday":switch(o.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===o.length?"2-digit":"numeric",i.hour12="hh"===o||"h"===o;break;case"minute":i.minute=2===o.length?"2-digit":"numeric";break;case"second":i.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===o.length?"long":"short"}}return i}(i);a=new Intl.DateTimeFormat(null==o?e:"system"===o?void 0:[o],t),r&&e8.set(s,a)}if(null==i||e2.test(i))return a.format(t);let l=a.formatToParts(t);return i.replace(e1,(i,s,a,c,h,d,p,u,b,g,f,m,v,w,x)=>{if(null!=s)return s.substring(1,s.length-1);for(let[i,s]of Object.entries(x)){if(null==s)continue;let a=l.find(e=>e.type===i);if("Do"===s&&a?.type==="day"){var _=Number(a.value);let e=_%100;return`${_}${e9[(e-20)%10]??e9[e]??e9[0]}`}if("a"===s&&a?.type==="dayPeriod"){let i=(function(t){let i=`${o??""}:time:${t}`,s=e8.get(i);if(null==s){let a;a=null==o?e:"system"===o?void 0:[o],s=new Intl.DateTimeFormat(a,{localeMatcher:"best fit",timeStyle:t}),r&&e8.set(i,s)}return s})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(i??a)?.value??""}`}return a?.value??""}return""})}let e9=["th","st","nd","rd"];function e7(t,i){null==t&&(t="decimal");let o=`${i??""}:${t}`,r=e6.get(o);if(null==r){let s={localeMatcher:"best fit",style:t};r=new Intl.NumberFormat(null==i?e:"system"===i?void 0:[i],s),e6.set(o,r)}return r.format}function te(e){var t;return(t=e.plan.actual.id)!==eJ.Community&&t!==eJ.CommunityWithAccount}function tt(e,t,i){let o,r,s,a,l,c,h,d,p,u,b=0;null!=i&&({edges:c,maxWait:h,signal:d,aggregator:p}=i);let g="leading"===(c??="trailing")||"both"===c,f="trailing"===c||"both"===c;function m(){if(null!=o){b=Date.now();let t=o,i=u;return u=void 0,o=void 0,s=e.apply(i,t)}}function v(){null!=a&&(clearTimeout(a),a=void 0)}function w(){null!=l&&(clearTimeout(l),l=void 0)}function x(){v(),w(),u=void 0,o=void 0,r=void 0,b=0}function _(...e){if(d?.aborted)return;let i=Date.now();null!=p&&null!=o?o=p(o,e):(u=this,o=e);let c=null==a&&null==l;r=i,v();let w=Date.now();if(r=w,a=setTimeout(()=>{a=void 0,function(e){let i=e-(r??0),o=e-b;return null==r||i>=t||i<0||null!=h&&o>=h}(Date.now())&&f&&m(),x()},t),null!=h&&!l){let e=h-(w-b);e>0?l=setTimeout(()=>{l=void 0,f&&null!=o&&m(),b=Date.now()},e):(f&&null!=o&&m(),x())}return g&&c?m():s}return _.cancel=x,_.flush=function(){return v(),w(),m()},_.pending=function(){return null!=a||null!=l},d?.addEventListener("abort",x,{once:!0}),_}eJ.Community,eJ.CommunityWithAccount,eJ.Pro,eJ.Advanced,eJ.Business,eJ.Enterprise;var ti=x(379);let to=navigator?.userAgentData?.platform,tr=navigator.userAgent;"Linux"===to||tr.includes("Linux"),"macOS"===to||tr.includes("Macintosh"),"Windows"===to||tr.includes("Windows");let IpcCall=class IpcCall{constructor(e,t,i=!1,o=!1){this.scope=e,this.reset=i,this.pack=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,i,o){super(e,t,i,o),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let ts=new IpcCommand("core","webview/ready"),tn=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let ta=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let tl=new IpcCommand("core","telemetry/sendEvent"),tc=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let th=new IpcCommand("core","webview/focus/didChange"),td=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let tp="timeline",tu=new IpcRequest(tp,"ref/choose"),tb=new IpcRequest(tp,"path/choose"),tg=new IpcCommand(tp,"point/open"),tf=new IpcCommand(tp,"config/update"),tm=new IpcCommand(tp,"scope/update"),tv=new IpcNotification(tp,"didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,i,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=i,this.subscribe=o??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,i,o){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=i,this.subscribe=o??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:i}]of this.subscriptions)t.has(e)||(t.add(e),i.dispatchEvent(new context_request_event_s(this.context,i,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function ty({context:e}){return(t,i)=>{let o=new WeakMap;if("object"==typeof i)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let r;t.constructor.addInitializer(t=>{o.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){let e=new WeakMap;r={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;r={...s,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,i,r)}}}function tw({context:e,subscribe:t}){return(i,o)=>{"object"==typeof o?o.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{i.set.call(this,e)},subscribe:t})}):i.constructor.addInitializer(i=>{new context_consumer_s(i,{context:e,callback:e=>{i[o]=e},subscribe:t})})}}let tx=new WeakMap;function t_(e,t){return function(i,o,r){let s=tx.get(i.constructor);null==s&&tx.set(i.constructor,s=[]),s.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,i){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){let t=tx.get(this.constructor);if(null!=t)for(let{keys:i,method:o,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;let t=i.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};var tk=x(47);function t$(e){let t=.001*performance.now(),i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],(o-=e[1])<0&&(i--,o+=1e9)),[i,o]}var tC=((h=tC||{})[h.Hash=35]="Hash",h[h.Slash=47]="Slash",h[h.Digit0=48]="Digit0",h[h.Digit1=49]="Digit1",h[h.Digit2=50]="Digit2",h[h.Digit3=51]="Digit3",h[h.Digit4=52]="Digit4",h[h.Digit5=53]="Digit5",h[h.Digit6=54]="Digit6",h[h.Digit7=55]="Digit7",h[h.Digit8=56]="Digit8",h[h.Digit9=57]="Digit9",h[h.Backslash=92]="Backslash",h[h.A=65]="A",h[h.B=66]="B",h[h.C=67]="C",h[h.D=68]="D",h[h.E=69]="E",h[h.F=70]="F",h[h.Z=90]="Z",h[h.a=97]="a",h[h.b=98]="b",h[h.c=99]="c",h[h.d=100]="d",h[h.e=101]="e",h[h.f=102]="f",h[h.z=122]="z",h),tP=((d=tP||{}).AngleBracketLeftHeavy="❰",d.AngleBracketRightHeavy="❱",d.ArrowBack="↩",d.ArrowDown="↓",d.ArrowDownUp="⇵",d.ArrowDropRight="⤷",d.ArrowHeadRight="➤",d.ArrowLeft="←",d.ArrowLeftDouble="⇐",d.ArrowLeftRight="↔",d.ArrowLeftRightDouble="⇔",d.ArrowLeftRightDoubleStrike="⇎",d.ArrowLeftRightLong="⟷",d.ArrowRight="→",d.ArrowRightDouble="⇒",d.ArrowRightHollow="⇨",d.ArrowUp="↑",d.ArrowUpDown="⇅",d.ArrowUpRight="↗",d.ArrowsHalfLeftRight="⇋",d.ArrowsHalfRightLeft="⇌",d.ArrowsLeftRight="⇆",d.ArrowsRightLeft="⇄",d.Asterisk="∗",d.Bullseye="◎",d.Check="✔",d.Dash="—",d.Dot="•",d.Ellipsis="…",d.EnDash="–",d.Envelope="✉",d.EqualsTriple="≡",d.Flag="⚑",d.FlagHollow="⚐",d.MiddleEllipsis="⋯",d.MuchLessThan="≪",d.MuchGreaterThan="≫",d.Pencil="✎",d.Space=" ",d.SpaceThin=" ",d.SpaceThinnest=" ",d.SquareWithBottomShadow="❏",d.SquareWithTopShadow="❐",d.Warning="⚠",d.ZeroWidthSpace="​",d);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var tA=((p=tA||{}).File="file",p.Git="git",p.GitHub="github",p.GitLens="gitlens",p.PRs="pr",p.Remote="vscode-remote",p.Vsls="vsls",p.VslsScc="vsls-scc",p.Virtual="vscode-vfs",p);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let tS="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",tz=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${tS}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${tS}`,graph:`https://gitkraken.com/solutions/commit-graph?${tS}`,launchpad:`https://gitkraken.com/solutions/launchpad?${tS}`,platform:`https://gitkraken.com/devex?${tS}`,pricing:`https://gitkraken.com/gitlens/pricing?${tS}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${tS}`,security:`https://help.gitkraken.com/gitlens/security?${tS}`,workspaces:`https://gitkraken.com/solutions/workspaces?${tS}`,cli:`https://gitkraken.com/cli?${tS}`,browserExtension:`https://gitkraken.com/browser-extension?${tS}`,desktop:`https://gitkraken.com/git-client?${tS}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${tS}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${tS}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tS}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${tS}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${tS}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tS}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${tS}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${tS}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tS}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tS}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tS}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${tS}`}),{fromCharCode:tE}=String;function tT(e){let[t,i]=t$(e);return 1e3*t+Math.floor(i/1e6)}new TextEncoder;let tO={ellipsisWidth:0,limit:0x40000000-1},tD={ansiWidth:0,controlWidth:0,ambiguousWidth:1,emojiWidth:2,fullWidthWidth:2,regularWidth:1,wideWidth:2};function tR(e,t,o){let r;if(null==o)return i??=e7(),`${i(t)} ${e}${1===t?"":"s"}`;let s=1===t?e:o.plural??`${e}s`;return o.only?s:(0===t?r=o.zero??t:!1===o.format?r=t:null!=o.format?r=o.format(t):(i??=e7(),r=i(t)),`${r}${o.infix??" "}${s}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var tL=((u=tL||{})[u.Off=0]="Off",u[u.Error=1]="Error",u[u.Warn=2]="Warn",u[u.Info=3]="Info",u[u.Debug=4]="Debug",u);let tB=["accessToken","password","token"],tM=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,i=!1){if(null!=e.sanitizeKeys)for(let t of tB)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(tB);this.provider=e,this._isDebugging=i,this.logLevel=t}enabled(e){return this.level>=tI(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=tI(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let i;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...i){let o;if(!(this.level<1)||this.isDebugging){if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,i)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let i;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let i;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,(e,i)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(i=t(e,i)),this.provider?.sanitizer!=null&&(i=this.provider.sanitizer(e,i)),i))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let i=t.map(e=>this.toLoggable(e)).join(", ");return 0!==i.length?` \u2014 ${i}`:""}};function tI(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tF=new WeakMap,tN={enabled:e=>tM.enabled(e)||tM.isDebugging,log:(e,t,i,...o)=>{switch(e){case"error":tM.error(void 0,t,i,...o);break;case"warn":tM.warn(t,i,...o);break;case"info":tM.log(t,i,...o);break;default:tM.debug(t,i,...o)}}},tj=0x40000000-1;function tU(){let e=0;return{get current(){return e},next:function(){return e===tj&&(e=0),++e},reset:function(){e=0}}}let tH=tU(),tq=new Map;function tV(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function tW(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let i=t?tH.current:void 0,o=tH.next();return{scopeId:o,prevScopeId:i,prefix:`${tV(o,i)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=tW(e,void 0),tM.configure({name:e,createChannel:function(e){return{name:e,appendLine:tM.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?tM.log(this.scope,e,...t):tM.log(e,t.shift(),...t)}};let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e}async getApplicablePromo(e){let t=this._promos.get(e);return null==t&&(t=this.ipc.sendRequest(ta,{location:e}).then(e=>e.promo,()=>void 0),this._promos.set(e,t)),await t}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(tl,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};let tG=/\(([\s\S]*)\)/,tK=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,tY=/\s?=.*$/;function tZ(e,t=!1){let i,o,r,s,a,l=0,c=!1,h=!1,d=!0;null!=e&&({args:i,if:o,enter:r,exit:s,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:d=!0}=e),l>0&&(h=!0,d=!0),d&&(c=!0);let p=tM.isDebugging,u=t?tM.debug:tM.log,b=p?"debug":"info";return(e,t,g)=>{let f,m;if("function"==typeof g.value?(f=g.value,m="value"):"function"==typeof g.get&&(f=g.get,m="get"),null==f||null==m)throw Error("Not supported");let v=!1!==i?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),i=(t=(t=t.replace(tK,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");i=i>=0?i+1:0,o=o>0?o:t.indexOf("="),t=t.slice(i,o),t=`(${t})`;let r=tG.exec(t);return null!=r?r[1].split(",").map(e=>e.trim().replace(tY,"")):[]}(f):[];g[m]=function(...e){var g,m;let w,x;if(!p&&!tM.enabled(b)||null!=o&&!o.apply(this,e))return f.apply(this,e);let _=tH.current,$=tH.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let i=t?.name??"",o=i.indexOf("_");-1!==o&&(i=i.substring(o+1));let r=tF.get(t);return r?.(e,i)??i}(this):void 0,P=C?c?`${tV($,_)} ${C}.${t}`:`${C}.${t}`:t;null!=a&&(P=a({id:$,instance:this,instanceName:C??"",name:t,prefix:P},...e)),c&&(g={scopeId:$,prevScopeId:_,prefix:P},g={prevScopeId:tH.current,...g},tq.set($,g),w=g);let A=null!=r?r(...e):"";if(!1===i||0===e.length)x="",h||u.call(tM,`${P}${A}`);else{let t,o,r,s;x="";let a=-1;for(s of e){if(o=v[++a],null!=(t=i?.[a])){if("boolean"==typeof t)continue;if(x.length>0&&(x+=", "),"string"==typeof t){x+=t;continue}r=String(t(s))}else x.length>0&&(x+=", "),r=tM.toLoggable(s);x+=o?`${o}=${r}`:r}h||u.call(tM,x?`${P}${A}(${x})`:`${P}${A}`)}if(h||d||null!=s){let t,i=d?t$():void 0,o=e=>{let t=void 0!==i?` [${tT(i)}ms]`:"";h?tM.error(e,x?`${P}${A}(${x})`:`${P}${A}`,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`):tM.error(e,P,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`),c&&tq.delete($)};try{t=f.apply(this,e)}catch(e){throw o(e),e}let r=e=>{let t,o,r,a;if(null!=i?(t=tT(i))>500?(o=tM.warn,r=` [*${t}ms] (slow)`):(o=u,r=` [${t}ms]`):(r="",o=u),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${tM.toLoggable(e)}`);else w?.exitFailed?(a=w.exitFailed,o=(e,...t)=>tM.error(null,e,...t)):a="completed";h?(0===l||t>l)&&o.call(tM,x?`${P}${A}(${x}) ${a}${w?.exitDetails||""}${r}`:`${P}${A} ${a}${w?.exitDetails||""}${r}`):o.call(tM,x?`${P}(${x}) ${a}${w?.exitDetails||""}${r}`:`${P} ${a}${w?.exitDetails||""}${r}`),c&&tq.delete($)};return null!=t&&null!=(m=t)&&(m instanceof Promise||"function"==typeof m?.then)?t.then(r,o):r(t),t}return f.apply(this,e)}}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...i){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:tW(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??tN,this._time=t$(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=t$(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=t$(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[i,o]=t$(this._time),r=1e3*i+Math.floor(o/1e6),s=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${r}ms]${e?.suffix??""}`)}};function tX(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function tQ(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}(f||(f={})).on=function(e,t,i,o){let r=!1;if("string"==typeof e){let s=function(t){let o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,s,o??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,s,o??!0))}}}let s=function(e){i(e,this)};return e.addEventListener(t,s,o??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,s,o??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,i)=>{null==this.listeners&&(this.listeners=new LinkedList);let o=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let tJ={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let i=new events_Node(e);if(this._first===events_Node.Undefined)this._first=i,this._last=i;else if(t){let e=this._last;this._last=i,i.prev=e,e.next=i}else{let e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?tJ:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var t0=Object.defineProperty,t1=Object.getOwnPropertyDescriptor,t2=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?t1(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&t0(t,i,s),s};let t5=tU();function t8(){return`webview:${t5.next()}`}let t6=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=o??=acquireVsCodeApi(),this._disposable=f.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=tq.get(tH.current),i=e.data;if(i.packed&&i.params instanceof Uint8Array){let o=function(e,t,...i){return(t?.provider??tN).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...i):void 0}(tW(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,i.params=JSON.parse(this._textDecoder.decode(i.params)),o?.stop()}if(this.replaceIpcPromisesWithPromises(i.params),null!=i.completionId){var o,r;let e=(o=i.method,r=i.completionId,`${o}|${r}`);this._pendingHandlers.get(e)?.(i);return}this._onReceiveMessage.fire(i)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let i=e[t];null!=i&&"object"==typeof i&&"__ipc"in i&&"promise"===i.__ipc&&"id"in i&&"string"==typeof i.id&&"method"in i&&"string"==typeof i.method?e[t]=this.getResponsePromise(i.method,i.id):this.replaceIpcPromisesWithPromises(i)}}sendCommand(e,t){let i=t8();this.postMessage({id:i,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let i=t8(),o=this.getResponsePromise(e.response.method,i);return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,completionId:i}),o}getResponsePromise(e,t){return new Promise((i,o)=>{var r,s;let a,l=(r=e,s=t,`${r}|${s}`);function c(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(l)}a=setTimeout(()=>{c.call(this),o(Error(`Timed out waiting for completion of ${l}`))},(tM.isDebugging?60:5)*6e4),this._pendingHandlers.set(l,e=>{if(c.call(this),e.method===tc.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>i(t.value))}else queueMicrotask(()=>i(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function t3(e,t){let i=Math.pow(10,t);return Math.round(e*i)/i}t2([tZ({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],t6.prototype,"onMessageReceived",1),t2([tZ({args:{0:e=>e.method,1:!1}},!0)],t6.prototype,"sendCommand",1),t2([tZ({args:{0:e=>e.method,1:!1,2:!1}},!0)],t6.prototype,"sendRequest",1),t2([tZ({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],t6.prototype,"postMessage",1),t6=t2([(b=e=>`${e.appName}(HostIpc)`,e=>void tF.set(e,b))],t6);let RGBA=class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=t3(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=t3(Math.max(Math.min(1,t),0),3),this.l=t3(Math.max(Math.min(1,i),0),3),this.a=t3(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,o=e.b/255,r=e.a,s=Math.max(t,i,o),a=Math.min(t,i,o),l=0,c=0,h=(a+s)/2,d=s-a;if(d>0){switch(c=Math.min(h<=.5?d/(2*h):d/(2-2*h),1),s){case t:l=(i-o)/d+6*(i<o);break;case i:l=(o-t)/d+2;break;case o:l=(t-i)/d+4}l*=60,l=Math.round(l)}return new HSLA(l,c,h,r)}static _hue2rgb(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){let t,i,o,r=e.h/360,{s,l:a,a:l}=e;if(0===s)t=i=o=a;else{let e=a<.5?a*(1+s):a+s-a*s,l=2*a-e;t=HSLA._hue2rgb(l,e,r+1/3),i=HSLA._hue2rgb(l,e,r),o=HSLA._hue2rgb(l,e,r-1/3)}return new RGBA(Math.round(255*t),Math.round(255*i),Math.round(255*o),l)}};let HSVA=class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=t3(Math.max(Math.min(1,t),0),3),this.v=t3(Math.max(Math.min(1,i),0),3),this.a=t3(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t,i=e.r/255,o=e.g/255,r=e.b/255,s=Math.max(i,o,r),a=s-Math.min(i,o,r);return new HSVA(Math.round(60*(0===a?0:s===i?((o-r)/a%6+6)%6:s===o?(r-i)/a+2:(i-o)/a+4)),0===s?0:a/s,s,e.a)}static toRGBA(e){let{h:t,s:i,v:o,a:r}=e,s=o*i,a=s*(1-Math.abs(t/60%2-1)),l=o-s,[c,h,d]=[0,0,0];return t<60?(c=s,h=a):t<120?(c=a,h=s):t<180?(h=s,d=a):t<240?(h=a,d=s):t<300?(c=a,d=s):t<=360&&(c=s,d=a),new RGBA(c=Math.round((c+l)*255),h=Math.round((h+l)*255),d=Math.round((d+l)*255),r)}};function t4(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(t4(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return t3(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(t,i,o,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,i=this.rgba.a,o=t.a,r=i+o*(1-i);if(r<1e-6)return Color.transparent;let s=this.rgba.r*i/r+t.r*o*(1-i)/r;return new Color(new RGBA(s,this.rgba.g*i/r+t.g*o*(1-i)/r,this.rgba.b*i/r+t.b*o*(1-i)/r,r))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-i),e.rgba.b-r*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let i=1-e.rgba.a;return new Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${t9(e.rgba.r)}${t9(e.rgba.g)}${t9(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(r-o)/r,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(o-r)/o,e.darken(i)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function t9(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let t7=new Emitter,ie=t7.event;function it(e){let t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,r=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),s=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=t4("--vscode-editor-background",i),l=t4("--vscode-editor-foreground",i);return l||(l=t4("--vscode-foreground",i)),{colors:{background:a,foreground:l},computedStyle:i,isLightTheme:r,isHighContrastTheme:s,isInitializing:null==e}}var ii=Object.defineProperty,io=Object.getOwnPropertyDescriptor,ir=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?io(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&ii(t,i,s),s};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new t6(this.name),this._ipc.sendCommand(ts,void 0);let e=this.bootstrap;this.bootstrap=void 0,this._ipc.replaceIpcPromisesWithPromises(e),this.onPersistState?.(e);let t=it();null!=this.onThemeUpdated&&(this.onThemeUpdated(t),this.disposables.push(function(){let e=new MutationObserver(e=>{t7.fire(it(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),this.disposables.push(ie(this.onThemeUpdated,this))),this.disposables.push(this._stateProvider=this.createStateProvider(e,this._ipc),this._ipc.onReceiveMessage(e=>{switch(!0){case th.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case td.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=tt(e=>{this._ipc.sendCommand(tn,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ey`<slot></slot>`}};ir([eR({type:String})],GlAppHost.prototype,"name",2),ir([eR({type:String})],GlAppHost.prototype,"placement",2),ir([ty({context:"ipc"})],GlAppHost.prototype,"_ipc",2),ir([ty({context:"logger"})],GlAppHost.prototype,"_logger",2),ir([ty({context:"promos"})],GlAppHost.prototype,"_promos",2),ir([ty({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),ir([eR({type:Object,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let is=S`
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
`;S`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;let TimelineStateProvider=class TimelineStateProvider{constructor(e,t,i){this._ipc=i,this._state=t,this.provider=new context_provider_i(e,{context:"state",initialValue:t}),this.disposable=this._ipc.onReceiveMessage(t=>{!0===tv.is(t)&&(this._state={...t.params.state,timestamp:Date.now()},this.provider.setValue(this._state,!0),e.requestUpdate())})}get state(){return this._state}dispose(){this.disposable.dispose()}};let ia=S`
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
`,il=S`
	:host {
		display: block;
		color: var(--color-view-foreground);
		font-family: var(--font-family);
		font-size: var(--font-size);
		margin: 0;
		padding: 0;
		height: 100vh;
		overflow: hidden;
	}

	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.header {
		flex: none;
		display: grid;
		grid-template-columns: 1fr min-content;
		align-items: center;
		grid-template-areas: 'details toolbox';
		margin: 0.5rem 1rem;
	}

	:host-context(body[data-placement='editor']) .header {
		margin-top: 1rem;
		margin-right: 1.5rem;
	}

	.details {
		grid-area: details;
		display: flex;
		gap: 1rem;
		align-items: center;
		font-size: var(--font-size);
		min-width: 0;
		margin-right: 1rem;
	}

	.details gl-breadcrumbs {
		flex: 1;
		min-width: 0;
		padding: 0.1rem 0;
		overflow: hidden;
	}

	.details .details__ref,
	.details .details__timeframe {
		min-width: 0;
		margin: 0;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.details .details__ref {
		flex: 0 100000000 auto;
		color: var(--color-foreground--75);
		font-size: 1.2rem;
		margin-left: auto;
	}

	.details .details__ref .ref {
		margin-left: 0.25rem;
	}

	.details .details__timeframe {
		flex: 0 0 auto;
		color: var(--color-foreground--75);
		margin-right: 0.6rem;
		user-select: none;
		white-space: nowrap;
		font-size: 1.2rem;
		margin-left: auto;
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
		justify-content: space-between;
		flex: 100% 0 1;
		position: relative;
	}

	.select-container label {
		margin: 0 1rem 0 0;
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

	.select {
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
		flex: 1;
		min-height: 0;
	}

	.timeline__empty {
		padding: 0.4rem 2rem 1.3rem 2rem;
		font-size: var(--font-size);
	}

	.timeline__empty p {
		margin-top: 0;
	}

	:host-context(body[data-placement='view']) gl-feature-gate {
		background-color: var(--vscode-sideBar-background);
	}

	gl-feature-gate gl-feature-badge {
		vertical-align: super;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
	}

	label {
		min-width: fit-content;
	}

	label[disabled] {
		opacity: 0.5;
	}

	.config__content {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		max-width: 30rem;
		min-width: 20rem;

		margin-bottom: 0.4rem;
	}

	.config__content menu-label {
		padding: 0;
		margin-bottom: -0.4rem;
	}

	.config__content section {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.breadcrumb-item-children {
		display: flex;
	}

	.breadcrumb-folder {
		cursor: pointer;
	}
`,ic=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33"}),ih=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142"});var id=Object.defineProperty,ip=Object.getOwnPropertyDescriptor,iu=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?ip(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&id(t,i,s),s};function ib(e,t=""){return A(Object.entries(e).map(([e,i])=>(function(e,t,i=""){return`:host([icon='${i}${e}'])::before { content: '${t}'; }`})(e,i,t)).join(""))}let ig=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};ig.styles=S`
		:host {
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
			vertical-align: var(--code-icon-v-align, text-bottom);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${ib(ic)}
		${ib(ih,"gl-")}

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
	`,iu([eR({reflect:!0})],ig.prototype,"icon",2),iu([eR({reflect:!0})],ig.prototype,"modifier",2),iu([eR({type:Number})],ig.prototype,"size",2),iu([eR({reflect:!0})],ig.prototype,"flip",2),iu([eR({reflect:!0})],ig.prototype,"rotate",2),ig=iu([eT("code-icon")],ig);var im=Object.defineProperty,iv=Object.defineProperties,iy=Object.getOwnPropertyDescriptor,iw=Object.getOwnPropertyDescriptors,ix=Object.getOwnPropertySymbols,i_=Object.prototype.hasOwnProperty,ik=Object.prototype.propertyIsEnumerable,i$=e=>{throw TypeError(e)},iC=(e,t,i)=>t in e?im(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,iP=(e,t)=>{for(var i in t||(t={}))i_.call(t,i)&&iC(e,i,t[i]);if(ix)for(var i of ix(t))ik.call(t,i)&&iC(e,i,t[i]);return e},iA=(e,t)=>iv(e,iw(t)),iS=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?iy(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&im(t,i,s),s},iz=(e,t,i)=>t.has(e)||i$("Cannot "+i),iE=(e,t,i)=>(iz(e,t,"read from private field"),i?i.call(e):t.get(e)),iT=(e,t,i)=>t.has(e)?i$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),iO=(e,t,i,o)=>(iz(e,t,"write to private field"),o?o.call(e,i):t.set(e,i),i),iD=new Map,iR=new WeakMap;function iL(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function iB(e,t){iD.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function iM(e,t,i){let o=iR.get(e);if(null==o?void 0:o[t])return iL(o[t],i.dir);let r=iD.get(t);return r?iL(r,i.dir):{keyframes:[],options:{duration:0}}}let iI={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},iF=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ex,e.type!==iI.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ex||null==e)return this._t=void 0,this.it=e;if(e===ew)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let iN=iF(unsafe_html_e);var ij=S`
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
`,iU=S`
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
`;let iH=new Set,iq=new Map,iV="ltr",iW="en",iG="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(iG){let e=new MutationObserver(iY);iV=document.documentElement.dir||"ltr",iW=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function iK(...e){e.map(e=>{let t=e.$code.toLowerCase();iq.has(t)?iq.set(t,Object.assign(Object.assign({},iq.get(t)),e)):iq.set(t,e),r||(r=e)}),iY()}function iY(){iG&&(iV=document.documentElement.dir||"ltr",iW=document.documentElement.lang||navigator.language),[...iH.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){iH.add(this.host)}hostDisconnected(){iH.delete(this.host)}dir(){return`${this.host.dir||iV}`.toLowerCase()}lang(){return`${this.host.lang||iW}`.toLowerCase()}getTranslationData(e){var t,i;let o=new Intl.Locale(e.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),s=null!=(i=null==(t=null==o?void 0:o.region)?void 0:t.toLowerCase())?i:"",a=iq.get(`${r}-${s}`),l=iq.get(r);return{locale:o,language:r,region:s,primary:a,secondary:l}}exists(e,t){var i;let{primary:o,secondary:s}=this.getTranslationData(null!=(i=t.lang)?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!o&&!!o[e]||!!s&&!!s[e]||!!t.includeFallback&&!!r&&!!r[e]}term(e,...t){let i,{primary:o,secondary:s}=this.getTranslationData(this.lang());if(o&&o[e])i=o[e];else if(s&&s[e])i=s[e];else{if(!r||!r[e])return String(e);i=r[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}};var iZ={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};iK(iZ);var iX=class extends LocalizeController{};iK(iZ);var iQ=S`
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
`,iJ=class extends lit_element_i{constructor(){super(),iT(this,m,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let i=new CustomEvent(e,iP({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){let o=customElements.get(e);if(!o){try{customElements.define(e,t,i)}catch(o){customElements.define(e,class extends t{},i)}return}let r=" (unknown version)",s=r;if("version"in t&&t.version&&(r=" v"+t.version),"version"in o&&o.version&&(s=" v"+o.version),r&&s&&r===s)return}attributeChangedCallback(e,t,i){iE(this,m)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),iO(this,m,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}};m=new WeakMap,iJ.version="2.20.1",iJ.dependencies={},iS([eR()],iJ.prototype,"dir",2),iS([eR()],iJ.prototype,"lang",2);let i0=Math.min,i1=Math.max,i2=Math.round,i5=Math.floor,i8=e=>({x:e,y:e}),i6={left:"right",right:"left",bottom:"top",top:"bottom"},i3={start:"end",end:"start"};function i4(e,t){return"function"==typeof e?e(t):e}function i9(e){return e.split("-")[0]}function i7(e){return e.split("-")[1]}function oe(e){return"x"===e?"y":"x"}function ot(e){return"y"===e?"height":"width"}function oi(e){return["top","bottom"].includes(i9(e))?"y":"x"}function oo(e){return e.replace(/start|end/g,e=>i3[e])}function or(e){return e.replace(/left|right|bottom|top/g,e=>i6[e])}function os(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function on(e){let{x:t,y:i,width:o,height:r}=e;return{width:o,height:r,top:i,left:t,right:t+o,bottom:i+r,x:t,y:i}}function oa(e,t,i){let o,{reference:r,floating:s}=e,a=oi(t),l=oe(oi(t)),c=ot(l),h=i9(t),d="y"===a,p=r.x+r.width/2-s.width/2,u=r.y+r.height/2-s.height/2,b=r[c]/2-s[c]/2;switch(h){case"top":o={x:p,y:r.y-s.height};break;case"bottom":o={x:p,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:u};break;case"left":o={x:r.x-s.width,y:u};break;default:o={x:r.x,y:r.y}}switch(i7(t)){case"start":o[l]-=b*(i&&d?-1:1);break;case"end":o[l]+=b*(i&&d?-1:1)}return o}let ol=async(e,t,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:a}=i,l=s.filter(Boolean),c=await (null==a.isRTL?void 0:a.isRTL(t)),h=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:p}=oa(h,o,c),u=o,b={},g=0;for(let i=0;i<l.length;i++){let{name:s,fn:f}=l[i],{x:m,y:v,data:w,reset:x}=await f({x:d,y:p,initialPlacement:o,placement:u,strategy:r,middlewareData:b,rects:h,platform:a,elements:{reference:e,floating:t}});d=null!=m?m:d,p=null!=v?v:p,b={...b,[s]:{...b[s],...w}},x&&g<=50&&(g++,"object"==typeof x&&(x.placement&&(u=x.placement),x.rects&&(h=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):x.rects),{x:d,y:p}=oa(h,u,c)),i=-1)}return{x:d,y:p,placement:u,strategy:r,middlewareData:b}};async function oc(e,t){var i;void 0===t&&(t={});let{x:o,y:r,platform:s,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:u=!1,padding:b=0}=i4(t,e),g=os(b),f=l[u?"floating"===p?"reference":"floating":p],m=on(await s.getClippingRect({element:null==(i=await (null==s.isElement?void 0:s.isElement(f)))||i?f:f.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:h,rootBoundary:d,strategy:c})),v="floating"===p?{x:o,y:r,width:a.floating.width,height:a.floating.height}:a.reference,w=await (null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),x=await (null==s.isElement?void 0:s.isElement(w))&&await (null==s.getScale?void 0:s.getScale(w))||{x:1,y:1},_=on(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:w,strategy:c}):v);return{top:(m.top-_.top+g.top)/x.y,bottom:(_.bottom-m.bottom+g.bottom)/x.y,left:(m.left-_.left+g.left)/x.x,right:(_.right-m.right+g.right)/x.x}}async function oh(e,t){let{placement:i,platform:o,elements:r}=e,s=await (null==o.isRTL?void 0:o.isRTL(r.floating)),a=i9(i),l=i7(i),c="y"===oi(i),h=["left","top"].includes(a)?-1:1,d=s&&c?-1:1,p=i4(t,e),{mainAxis:u,crossAxis:b,alignmentAxis:g}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&"number"==typeof g&&(b="end"===l?-1*g:g),c?{x:b*d,y:u*h}:{x:u*h,y:b*d}}function od(){return"undefined"!=typeof window}function op(e){return og(e)?(e.nodeName||"").toLowerCase():"#document"}function ou(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ob(e){var t;return null==(t=(og(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function og(e){return!!od()&&(e instanceof Node||e instanceof ou(e).Node)}function of(e){return!!od()&&(e instanceof Element||e instanceof ou(e).Element)}function om(e){return!!od()&&(e instanceof HTMLElement||e instanceof ou(e).HTMLElement)}function ov(e){return!!od()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ou(e).ShadowRoot)}function oy(e){let{overflow:t,overflowX:i,overflowY:o,display:r}=o$(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(r)}function ow(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function ox(e){let t=o_(),i=of(e)?o$(e):e;return["transform","translate","scale","rotate","perspective"].some(e=>!!i[e]&&"none"!==i[e])||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","translate","scale","rotate","perspective","filter"].some(e=>(i.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(i.contain||"").includes(e))}function o_(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function ok(e){return["html","body","#document"].includes(op(e))}function o$(e){return ou(e).getComputedStyle(e)}function oC(e){return of(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oP(e){if("html"===op(e))return e;let t=e.assignedSlot||e.parentNode||ov(e)&&e.host||ob(e);return ov(t)?t.host:t}function oA(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);let r=function e(t){let i=oP(t);return ok(i)?t.ownerDocument?t.ownerDocument.body:t.body:om(i)&&oy(i)?i:e(i)}(e),s=r===(null==(o=e.ownerDocument)?void 0:o.body),a=ou(r);if(s){let e=oS(a);return t.concat(a,a.visualViewport||[],oy(r)?r:[],e&&i?oA(e):[])}return t.concat(r,oA(r,[],i))}function oS(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function oz(e){let t=o$(e),i=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=om(e),s=r?e.offsetWidth:i,a=r?e.offsetHeight:o,l=i2(i)!==s||i2(o)!==a;return l&&(i=s,o=a),{width:i,height:o,$:l}}function oE(e){return of(e)?e:e.contextElement}function oT(e){let t=oE(e);if(!om(t))return i8(1);let i=t.getBoundingClientRect(),{width:o,height:r,$:s}=oz(t),a=(s?i2(i.width):i.width)/o,l=(s?i2(i.height):i.height)/r;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}let oO=i8(0);function oD(e){let t=ou(e);return o_()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:oO}function oR(e,t,i,o){var r;void 0===t&&(t=!1),void 0===i&&(i=!1);let s=e.getBoundingClientRect(),a=oE(e),l=i8(1);t&&(o?of(o)&&(l=oT(o)):l=oT(e));let c=(void 0===(r=i)&&(r=!1),o&&(!r||o===ou(a))&&r)?oD(a):i8(0),h=(s.left+c.x)/l.x,d=(s.top+c.y)/l.y,p=s.width/l.x,u=s.height/l.y;if(a){let e=ou(a),t=o&&of(o)?ou(o):o,i=e,r=oS(i);for(;r&&o&&t!==i;){let e=oT(r),t=r.getBoundingClientRect(),o=o$(r),s=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;h*=e.x,d*=e.y,p*=e.x,u*=e.y,h+=s,d+=a,r=oS(i=ou(r))}}return on({width:p,height:u,x:h,y:d})}function oL(e,t){let i=oC(e).scrollLeft;return t?t.left+i:oR(ob(e)).left+i}function oB(e,t,i){void 0===i&&(i=!1);let o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-(i?0:oL(e,o)),y:o.top+t.scrollTop}}function oM(e,t,i){let o;if("viewport"===t)o=function(e,t){let i=ou(e),o=ob(e),r=i.visualViewport,s=o.clientWidth,a=o.clientHeight,l=0,c=0;if(r){s=r.width,a=r.height;let e=o_();(!e||e&&"fixed"===t)&&(l=r.offsetLeft,c=r.offsetTop)}return{width:s,height:a,x:l,y:c}}(e,i);else if("document"===t)o=function(e){let t=ob(e),i=oC(e),o=e.ownerDocument.body,r=i1(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),s=i1(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),a=-i.scrollLeft+oL(e),l=-i.scrollTop;return"rtl"===o$(o).direction&&(a+=i1(t.clientWidth,o.clientWidth)-r),{width:r,height:s,x:a,y:l}}(ob(e));else if(of(t))o=function(e,t){let i=oR(e,!0,"fixed"===t),o=i.top+e.clientTop,r=i.left+e.clientLeft,s=om(e)?oT(e):i8(1),a=e.clientWidth*s.x,l=e.clientHeight*s.y;return{width:a,height:l,x:r*s.x,y:o*s.y}}(t,i);else{let i=oD(e);o={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return on(o)}function oI(e){return"static"===o$(e).position}function oF(e,t){if(!om(e)||"fixed"===o$(e).position)return null;if(t)return t(e);let i=e.offsetParent;return ob(e)===i&&(i=i.ownerDocument.body),i}function oN(e,t){let i=ou(e);if(ow(e))return i;if(!om(e)){let t=oP(e);for(;t&&!ok(t);){if(of(t)&&!oI(t))return t;t=oP(t)}return i}let o=oF(e,t);for(;o&&["table","td","th"].includes(op(o))&&oI(o);)o=oF(o,t);return o&&ok(o)&&oI(o)&&!ox(o)?i:o||function(e){let t=oP(e);for(;om(t)&&!ok(t);){if(ox(t))return t;if(ow(t))break;t=oP(t)}return null}(e)||i}let oj=async function(e){let t=this.getOffsetParent||oN,i=this.getDimensions,o=await i(e.floating);return{reference:function(e,t,i){let o=om(t),r=ob(t),s="fixed"===i,a=oR(e,!0,s,t),l={scrollLeft:0,scrollTop:0},c=i8(0);if(o||!o&&!s)if(("body"!==op(t)||oy(r))&&(l=oC(t)),o){let e=oR(t,!0,s,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else r&&(c.x=oL(r));s&&!o&&r&&(c.x=oL(r));let h=!r||o||s?i8(0):oB(r,l);return{x:a.left+l.scrollLeft-c.x-h.x,y:a.top+l.scrollTop-c.y-h.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},oU={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:r}=e,s="fixed"===r,a=ob(o),l=!!t&&ow(t.floating);if(o===a||l&&s)return i;let c={scrollLeft:0,scrollTop:0},h=i8(1),d=i8(0),p=om(o);if((p||!p&&!s)&&(("body"!==op(o)||oy(a))&&(c=oC(o)),om(o))){let e=oR(o);h=oT(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}let u=!a||p||s?i8(0):oB(a,c,!0);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-c.scrollLeft*h.x+d.x+u.x,y:i.y*h.y-c.scrollTop*h.y+d.y+u.y}},getDocumentElement:ob,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e,s=[..."clippingAncestors"===i?ow(t)?[]:function(e,t){let i=t.get(e);if(i)return i;let o=oA(e,[],!1).filter(e=>of(e)&&"body"!==op(e)),r=null,s="fixed"===o$(e).position,a=s?oP(e):e;for(;of(a)&&!ok(a);){let t=o$(a),i=ox(a);i||"fixed"!==t.position||(r=null),(s?!i&&!r:!i&&"static"===t.position&&!!r&&["absolute","fixed"].includes(r.position)||oy(a)&&!i&&function e(t,i){let o=oP(t);return!(o===i||!of(o)||ok(o))&&("fixed"===o$(o).position||e(o,i))}(e,a))?o=o.filter(e=>e!==a):r=t,a=oP(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=s[0],l=s.reduce((e,i)=>{let o=oM(t,i,r);return e.top=i1(o.top,e.top),e.right=i0(o.right,e.right),e.bottom=i0(o.bottom,e.bottom),e.left=i1(o.left,e.left),e},oM(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:oN,getElementRects:oj,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:i}=oz(e);return{width:t,height:i}},getScale:oT,isElement:of,isRTL:function(e){return"rtl"===o$(e).direction}};function oH(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let oq=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var i,o;let r,s,{placement:a,rects:l,platform:c,elements:h}=t,{apply:d=()=>{},...p}=i4(e,t),u=await oc(t,p),b=i9(a),g=i7(a),f="y"===oi(a),{width:m,height:v}=l.floating;"top"===b||"bottom"===b?(r=b,s=g===(await (null==c.isRTL?void 0:c.isRTL(h.floating))?"start":"end")?"left":"right"):(s=b,r="end"===g?"top":"bottom");let w=v-u.top-u.bottom,x=m-u.left-u.right,_=i0(v-u[r],w),$=i0(m-u[s],x),C=!t.middlewareData.shift,P=_,A=$;if(null!=(i=t.middlewareData.shift)&&i.enabled.x&&(A=x),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(P=w),C&&!g){let e=i1(u.left,0),t=i1(u.right,0),i=i1(u.top,0),o=i1(u.bottom,0);f?A=m-2*(0!==e||0!==t?e+t:i1(u.left,u.right)):P=v-2*(0!==i||0!==o?i+o:i1(u.top,u.bottom))}await d({...t,availableWidth:A,availableHeight:P});let S=await c.getDimensions(h.floating);return m!==S.width||v!==S.height?{reset:{rects:!0}}:{}}}},oV=e=>({name:"arrow",options:e,async fn(t){let{x:i,y:o,placement:r,rects:s,platform:a,elements:l,middlewareData:c}=t,{element:h,padding:d=0}=i4(e,t)||{};if(null==h)return{};let p=os(d),u={x:i,y:o},b=oe(oi(r)),g=ot(b),f=await a.getDimensions(h),m="y"===b,v=m?"clientHeight":"clientWidth",w=s.reference[g]+s.reference[b]-u[b]-s.floating[g],x=u[b]-s.reference[b],_=await (null==a.getOffsetParent?void 0:a.getOffsetParent(h)),$=_?_[v]:0;$&&await (null==a.isElement?void 0:a.isElement(_))||($=l.floating[v]||s.floating[g]);let C=$/2-f[g]/2-1,P=i0(p[m?"top":"left"],C),A=i0(p[m?"bottom":"right"],C),S=$-f[g]-A,E=$/2-f[g]/2+(w/2-x/2),T=i1(P,i0(E,S)),O=!c.arrow&&null!=i7(r)&&E!==T&&s.reference[g]/2-(E<P?P:A)-f[g]/2<0,D=O?E<P?E-P:E-S:0;return{[b]:u[b]+D,data:{[b]:T,centerOffset:E-T-D,...O&&{alignmentOffset:D}},reset:O}}}),oW=(e,t,i)=>{let o=new Map,r={platform:oU,...i},s={...r.platform,_c:o};return ol(e,t,{...r,platform:s})},oG=iF(class extends directive_i{constructor(e){if(super(e),e.type!==iI.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return ew}});function oK(e){var t=e;for(let e=t;e;e=oY(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=oY(t);e;e=oY(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||ox(t)||"BODY"===e.tagName))return e}return null}function oY(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var oZ=class extends iJ{constructor(){super(...arguments),this.localize=new iX(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),o=0,r=0,s=0,a=0,l=0,c=0,h=0,d=0;i?e.top<t.top?(o=e.left,r=e.bottom,s=e.right,a=e.bottom,l=t.left,c=t.top,h=t.right,d=t.top):(o=t.left,r=t.bottom,s=t.right,a=t.bottom,l=e.left,c=e.top,h=e.right,d=e.top):e.left<t.left?(o=e.right,r=e.top,s=t.left,a=t.top,l=e.right,c=e.bottom,h=t.left,d=t.bottom):(o=t.right,r=t.top,s=e.left,a=e.top,l=t.right,c=t.bottom,h=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,i,o){let r;void 0===o&&(o={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:h=!1}=o,d=oE(e),p=s||a?[...d?oA(d):[],...oA(t)]:[];p.forEach(e=>{s&&e.addEventListener("scroll",i,{passive:!0}),a&&e.addEventListener("resize",i)});let u=d&&c?function(e,t){let i,o=null,r=ob(e);function s(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return!function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),s();let h=e.getBoundingClientRect(),{left:d,top:p,width:u,height:b}=h;if(l||t(),!u||!b)return;let g=i5(p),f=i5(r.clientWidth-(d+u)),m={rootMargin:-g+"px "+-f+"px "+-i5(r.clientHeight-(p+b))+"px "+-i5(d)+"px",threshold:i1(0,i0(1,c))||1},v=!0;function w(t){let o=t[0].intersectionRatio;if(o!==c){if(!v)return a();o?a(!1,o):i=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||oH(h,e.getBoundingClientRect())||a(),v=!1}try{o=new IntersectionObserver(w,{...m,root:r.ownerDocument})}catch{o=new IntersectionObserver(w,m)}o.observe(e)}(!0),s}(d,i):null,b=-1,g=null;l&&(g=new ResizeObserver(e=>{let[o]=e;o&&o.target===d&&g&&(g.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),i()}),d&&!h&&g.observe(d),g.observe(t));let f=h?oR(e):null;return h&&function t(){let o=oR(e);f&&!oH(f,o)&&i(),f=o,r=requestAnimationFrame(t)}(),i(),()=>{var e;p.forEach(e=>{s&&e.removeEventListener("scroll",i),a&&e.removeEventListener("resize",i)}),null==u||u(),null==(e=g)||e.disconnect(),g=null,h&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,i;if(!this.active||!this.anchorEl)return;let o=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var i,o;let{x:r,y:s,placement:a,middlewareData:l}=t,c=await oh(t,e);return a===(null==(i=l.offset)?void 0:i.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:a}}}}];this.sync?o.push(oq({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&o.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var i,o,r,s,a,l;let{placement:c,middlewareData:h,rects:d,initialPlacement:p,platform:u,elements:b}=e,{mainAxis:g=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:x=!0,..._}=i4(t,e);if(null!=(i=h.arrow)&&i.alignmentOffset)return{};let $=i9(c),C=oi(p),P=i9(p)===p,A=await (null==u.isRTL?void 0:u.isRTL(b.floating)),S=m||(P||!x?[or(p)]:function(e){let t=or(e);return[oo(e),t,oo(t)]}(p)),E="none"!==w;!m&&E&&S.push(...function(e,t,i,o){let r=i7(e),s=function(e,t,i){let o=["left","right"],r=["right","left"];switch(e){case"top":case"bottom":if(i)return t?r:o;return t?o:r;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(i9(e),"start"===i,o);return r&&(s=s.map(e=>e+"-"+r),t&&(s=s.concat(s.map(oo)))),s}(p,x,w,A));let T=[p,...S],O=await oc(e,_),D=[],B=(null==(o=h.flip)?void 0:o.overflows)||[];if(g&&D.push(O[$]),f){let e=function(e,t,i){void 0===i&&(i=!1);let o=i7(e),r=oe(oi(e)),s=ot(r),a="x"===r?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=or(a)),[a,or(a)]}(c,d,A);D.push(O[e[0]],O[e[1]])}if(B=[...B,{placement:c,overflows:D}],!D.every(e=>e<=0)){let e=((null==(r=h.flip)?void 0:r.index)||0)+1,t=T[e];if(t){let i="alignment"===f&&C!==oi(t),o=(null==(a=B[0])?void 0:a.overflows[0])>0;if(!i||o)return{data:{index:e,overflows:B},reset:{placement:t}}}let i=null==(s=B.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!i)switch(v){case"bestFit":{let e=null==(l=B.filter(e=>{if(E){let t=oi(e.placement);return t===C||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(i=e);break}case"initialPlacement":i=p}if(c!==i)return{reset:{placement:i}}}return{}}}),this.shift&&o.push({name:"shift",options:i={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:r}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...c}=i4(i,e),h={x:t,y:o},d=await oc(e,c),p=oi(i9(r)),u=oe(p),b=h[u],g=h[p];if(s){let e="y"===u?"top":"left",t="y"===u?"bottom":"right",i=b+d[e],o=b-d[t];b=i1(i,i0(b,o))}if(a){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",i=g+d[e],o=g-d[t];g=i1(i,i0(g,o))}let f=l.fn({...e,[u]:b,[p]:g});return{...f,data:{x:f.x-t,y:f.y-o,enabled:{[u]:s,[p]:a}}}}}),this.autoSize?o.push(oq({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&o.push(oV({element:this.arrowEl,padding:this.arrowPadding}));let r="absolute"===this.strategy?e=>oU.getOffsetParent(e,oK):oU.getOffsetParent;oW(this.anchorEl,this.popup,{placement:this.placement,middleware:o,strategy:this.strategy,platform:iA(iP({},oU),{getOffsetParent:r})}).then(({x:e,y:t,middlewareData:i,placement:o})=>{let r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=i.arrow.x,t=i.arrow.y,o="",a="",l="",c="";if("start"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?i:"",c=r?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":i,c=r?i:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:l,left:c,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ey`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${oG({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${oG({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ey`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function oX(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}function oQ(e,t,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=e.animate(t,iA(iP({},i),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function oJ(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function o0(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function o1(e,t){let i=iP({waitUntilFirstUpdate:!1},t);return(t,o)=>{let{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach(t=>{if(e.has(t)){let r=e.get(t),s=this[t];r!==s&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](r,s)}}),r.call(this,e)}}}oZ.styles=[iQ,iU],iS([eM(".popup")],oZ.prototype,"popup",2),iS([eM(".popup__arrow")],oZ.prototype,"arrowEl",2),iS([eR()],oZ.prototype,"anchor",2),iS([eR({type:Boolean,reflect:!0})],oZ.prototype,"active",2),iS([eR({reflect:!0})],oZ.prototype,"placement",2),iS([eR({reflect:!0})],oZ.prototype,"strategy",2),iS([eR({type:Number})],oZ.prototype,"distance",2),iS([eR({type:Number})],oZ.prototype,"skidding",2),iS([eR({type:Boolean})],oZ.prototype,"arrow",2),iS([eR({attribute:"arrow-placement"})],oZ.prototype,"arrowPlacement",2),iS([eR({attribute:"arrow-padding",type:Number})],oZ.prototype,"arrowPadding",2),iS([eR({type:Boolean})],oZ.prototype,"flip",2),iS([eR({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],oZ.prototype,"flipFallbackPlacements",2),iS([eR({attribute:"flip-fallback-strategy"})],oZ.prototype,"flipFallbackStrategy",2),iS([eR({type:Object})],oZ.prototype,"flipBoundary",2),iS([eR({attribute:"flip-padding",type:Number})],oZ.prototype,"flipPadding",2),iS([eR({type:Boolean})],oZ.prototype,"shift",2),iS([eR({type:Object})],oZ.prototype,"shiftBoundary",2),iS([eR({attribute:"shift-padding",type:Number})],oZ.prototype,"shiftPadding",2),iS([eR({attribute:"auto-size"})],oZ.prototype,"autoSize",2),iS([eR()],oZ.prototype,"sync",2),iS([eR({type:Object})],oZ.prototype,"autoSizeBoundary",2),iS([eR({attribute:"auto-size-padding",type:Number})],oZ.prototype,"autoSizePadding",2),iS([eR({attribute:"hover-bridge",type:Boolean})],oZ.prototype,"hoverBridge",2);var o2=class extends iJ{constructor(){super(),this.localize=new iX(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=oJ(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=oJ(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await o0(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:i}=iM(this,"tooltip.show",{dir:this.localize.dir()});await oQ(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await o0(this.body);let{keyframes:e,options:i}=iM(this,"tooltip.hide",{dir:this.localize.dir()});await oQ(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,oX(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,oX(this,"sl-after-hide")}render(){return ey`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${oG({tooltip:!0,"tooltip--open":this.open})}
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
    `}};o2.styles=[iQ,ij],o2.dependencies={"sl-popup":oZ},iS([eM("slot:not([name])")],o2.prototype,"defaultSlot",2),iS([eM(".tooltip__body")],o2.prototype,"body",2),iS([eM("sl-popup")],o2.prototype,"popup",2),iS([eR()],o2.prototype,"content",2),iS([eR()],o2.prototype,"placement",2),iS([eR({type:Boolean,reflect:!0})],o2.prototype,"disabled",2),iS([eR({type:Number})],o2.prototype,"distance",2),iS([eR({type:Boolean,reflect:!0})],o2.prototype,"open",2),iS([eR({type:Number})],o2.prototype,"skidding",2),iS([eR()],o2.prototype,"trigger",2),iS([eR({type:Boolean})],o2.prototype,"hoist",2),iS([o1("open",{waitUntilFirstUpdate:!0})],o2.prototype,"handleOpenChange",1),iS([o1(["content","distance","hoist","placement","skidding"])],o2.prototype,"handleOptionsChange",1),iS([o1("disabled")],o2.prototype,"handleDisabledChange",1),iB("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),iB("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),o2.define("sl-tooltip");var o5=Object.defineProperty,o8=Object.getOwnPropertyDescriptor,o6=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?o8(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&o5(t,i,s),s};iB("tooltip.show",null),iB("tooltip.hide",null);let o3=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback()}render(){var e;return ey`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ex}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?iN(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};o3.styles=S`
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

		[slot='content'] hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}
	`,o6([eR()],o3.prototype,"content",2),o6([eR({reflect:!0})],o3.prototype,"placement",2),o6([eR({type:Boolean})],o3.prototype,"disabled",2),o6([eR({type:Number})],o3.prototype,"distance",2),o6([eR({type:Boolean})],o3.prototype,"hoist",2),o3=o6([eT("gl-tooltip")],o3);var o4=Object.defineProperty,o9=Object.getOwnPropertyDescriptor,o7=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?o9(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&o4(t,i,s),s};let re="gl-copy-container",rt=class extends lit_element_i{constructor(){super(...arguments),this.copyLabel="Copy",this.copiedLabel="Copied",this.placement="top",this.timeout=1e3}disconnectedCallback(){this.cancelResetTimer(),super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this.label=this.copyLabel}render(){return this.content?ey`<gl-tooltip .content="${this.label}" placement="${this.placement}" @click=${this.onClick}>
			<slot></slot>
		</gl-tooltip>`:ex}async onClick(e){if(this.cancelResetTimer(),this.content)try{await navigator.clipboard.writeText(this.content),this.label=this.copiedLabel}catch{this.label="Unable to Copy"}else this.label="Nothing to Copy";this.createResetTimer()}cancelResetTimer(){null!=this._resetTimer&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}createResetTimer(){this._resetTimer=setTimeout(()=>{this._resetTimer=void 0,this.label=this.copyLabel},this.timeout)}};rt.tagName=re,rt.styles=S`
		:host {
			display: inline-block;
		}

		gl-tooltip {
			cursor: pointer;
		}
	`,o7([eR({reflect:!1})],rt.prototype,"content",2),o7([eR()],rt.prototype,"copyLabel",2),o7([eR()],rt.prototype,"copiedLabel",2),o7([eR()],rt.prototype,"placement",2),o7([eR({type:Number})],rt.prototype,"timeout",2),o7([eL()],rt.prototype,"label",2),rt=o7([eT(re)],rt);var ri=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,rr=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?ro(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&ri(t,i,s),s};let rs=class extends lit_element_i{constructor(){super(...arguments),this.size=12}get label(){return eQ(this.sha,{strings:{uncommitted:"Working",uncommittedStaged:"Staged",working:"Working"}})}render(){return null==this.sha?ex:!this.sha||eY(this.sha)?ey`<span style="cursor:default;">${this.label}</span>`:ey`<gl-copy-container .content=${this.sha} placement="top">
			<span><code-icon class="icon" icon="git-commit" size="${this.size}"></code-icon>${this.label}</span>
		</gl-copy-container>`}};rs.styles=S`
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
	`,rr([eR({type:String})],rs.prototype,"sha",2),rr([eR({type:Number})],rs.prototype,"size",2),rs=rr([eT("gl-commit-sha")],rs);let rn=S`
	:host {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		position: relative;

		--scroller-track-top: unset;
		--scroller-track-left: 0;
		--scroller-track-width: 100%;
		--scroller-thumb-height: 0.6rem;
		--scroller-track-height: 1.2rem;
	}

	gl-chart-scroller {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		min-height: 0;
	}

	gl-chart-scroller::part(track) {
		--track-top: var(--scroller-track-top);
		--track-left: var(--scroller-track-left);
		--track-width: var(--scroller-track-width);
		--track-height: var(--scroller-track-height);
		--thumb-height: var(--scroller-thumb-height);
	}

	#chart {
		flex: 1;
		width: 100%;
		height: 100%;
		min-height: 0;
	}

	footer {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		margin: 0 1rem 0.4rem 1rem;
		gap: 0.8rem;
	}

	gl-chart-slider {
		flex: 1 0 auto;
		margin-left: 1.4rem;
	}

	gl-commit-sha {
		color: var(--color-foreground--75);
		text-align: right;
		min-width: 7.5rem; /* Ugly but stops the text from jumping around */
	}

	.bb svg {
		font: 10px var(--font-family);
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

	.bb .bb-legend-item text {
		fill: var(--color-foreground--85);
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
		font: 14px var(--font-family);
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

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.notice {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10% 2rem 30% 2rem;
		font-size: var(--font-size);

		z-index: 1;
	}

	.notice--blur {
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);

		animation: fadeIn 0.2s ease-in;
		animation-fill-mode: forwards;
		opacity: 0;
	}

	:host-context(:host[placement='view']) .notice--blur {
		animation-delay: 0.5s;
	}

	.notice p {
		margin: 0;
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

	.bb-tooltip .branches {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		/* font-family: var(--vscode-editor-font-family); */
	}

	.bb-tooltip .sha {
		/* background: var(--vscode-textCodeBlock-background);
		border-radius: 0.3rem; */
		/* padding: 0.1rem 0.4rem 0.2rem 0.4rem; */
		font-family: var(--vscode-editor-font-family);
		margin-right: 0.4rem;
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
		margin-left: 0rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		max-height: 50vh;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.bb-tooltip .message__content {
		white-space: pre-line;
	}

	:host-context(:host[placement='editor']) .bb-axis-y .tick text {
		fill: var(--color-foreground--85);
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
`;var ra=S`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,rl=S`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,rc=new WeakMap,rh=new WeakMap,rd=new WeakMap,rp=new WeakSet,ru=new WeakMap,rb=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!r&&"string"==typeof i&&i.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach(t=>{e.formData.append(i,t.toString())}):e.formData.append(i,o.toString()))},this.handleFormSubmit=e=>{var t;let i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=rc.get(this.form))||t.forEach(e=>{this.setUserInteracted(e,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ru.set(this.host,[])},this.handleInteraction=e=>{let t=ru.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=iP({form:e=>{let t=e.form;if(t){let i=e.getRootNode().querySelector(`#${t}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),ru.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ru.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,rc.has(this.form)?rc.get(this.form).add(this.host):rc.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),rh.has(this.form)||(rh.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),rd.has(this.form)||(rd.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=rc.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),rh.has(this.form)&&(this.form.reportValidity=rh.get(this.form),rh.delete(this.form)),rd.has(this.form)&&(this.form.checkValidity=rd.get(this.form),rd.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?rp.add(e):rp.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{t.hasAttribute(e)&&i.setAttribute(e,t.getAttribute(e))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){let t=this.host,i=!!rp.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},rg=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(iA(iP({},rg),{valid:!1,valueMissing:!0})),Object.freeze(iA(iP({},rg),{valid:!1,customError:!0}));var rf=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};let{I:rm}={M:et,P:ei,A:eo,C:1,L:eC,R:M,D:ec,V:eP,I:R,H:k,N:I,U:L,B:H,F:z},rv=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ry=e=>void 0===e.strings,rw={},rx=(e,t=rw)=>e._$AH=t,r_=iF(class extends directive_i{constructor(e){if(super(e),e.type!==iI.PROPERTY&&e.type!==iI.ATTRIBUTE&&e.type!==iI.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ry(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ew||t===ex)return t;let i=e.element,o=e.name;if(e.type===iI.PROPERTY){if(t===i[o])return ew}else if(e.type===iI.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(o))return ew}else if(e.type===iI.ATTRIBUTE&&i.getAttribute(o)===t+"")return ew;return rx(e),t}});var rk=class extends iJ{constructor(){super(...arguments),this.formControlController=new rb(this),this.hasSlotController=new rf(this,"help-text","label"),this.localize=new iX(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.resizeObserver)||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${100*e}%`)}syncTooltip(e){if(null!==this.output){let t=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r="rtl"===this.localize.dir(),s=t*e;if(r){let r=`${t-s}px + ${e} * ${o}`;this.output.style.translate=`calc((${r} - ${i/2}px - ${o} / 2))`}else{let t=`${s}px - ${e} * ${o}`;this.output.style.translate=`calc(${t} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,o=!!this.helpText||!!t;return ey`
      <div
        part="form-control"
        class=${oG({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${oG({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${eI(this.name)}
              ?disabled=${this.disabled}
              min=${eI(this.min)}
              max=${eI(this.max)}
              step=${eI(this.step)}
              .value=${r_(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"!==this.tooltip&&!this.disabled?ey`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};rk.styles=[iQ,rl,ra],iS([eM(".range__control")],rk.prototype,"input",2),iS([eM(".range__tooltip")],rk.prototype,"output",2),iS([eL()],rk.prototype,"hasFocus",2),iS([eL()],rk.prototype,"hasTooltip",2),iS([eR()],rk.prototype,"title",2),iS([eR()],rk.prototype,"name",2),iS([eR({type:Number})],rk.prototype,"value",2),iS([eR()],rk.prototype,"label",2),iS([eR({attribute:"help-text"})],rk.prototype,"helpText",2),iS([eR({type:Boolean,reflect:!0})],rk.prototype,"disabled",2),iS([eR({type:Number})],rk.prototype,"min",2),iS([eR({type:Number})],rk.prototype,"max",2),iS([eR({type:Number})],rk.prototype,"step",2),iS([eR()],rk.prototype,"tooltip",2),iS([eR({attribute:!1})],rk.prototype,"tooltipFormatter",2),iS([eR({reflect:!0})],rk.prototype,"form",2),iS([((e="value")=>(t,i)=>{let o=t.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(t,s,a){var l;let c=o.getPropertyOptions(e);if(t===("string"==typeof c.attribute?c.attribute:e)){let t=c.converter||Y,o=("function"==typeof t?t:null!=(l=null==t?void 0:t.fromAttribute)?l:Y.fromAttribute)(a,c.type);this[e]!==o&&(this[i]=o)}r.call(this,t,s,a)}})()],rk.prototype,"defaultValue",2),iS([(g={passive:!0},(e,t)=>{Object.assign("function"==typeof e?e:e[t],g)})],rk.prototype,"handleThumbDragStart",1),iS([o1("value",{waitUntilFirstUpdate:!0})],rk.prototype,"handleValueChange",1),iS([o1("disabled",{waitUntilFirstUpdate:!0})],rk.prototype,"handleDisabledChange",1),iS([o1("hasTooltip",{waitUntilFirstUpdate:!0})],rk.prototype,"syncRange",1),rk.define("sl-range");var r$=Object.defineProperty,rC=Object.getOwnPropertyDescriptor,rP=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rC(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&r$(t,i,s),s};let rA="gl-chart-slider",rS=class extends GlElement{constructor(){super(...arguments),this._value=0,this._max=0,this._min=0,this._shift=!1}get data(){return this._data}set data(e){this._data!==e&&(this._data=e,this._min=0,this._max=(e?.length??1)-1)}get shift(){return this._shift}set shift(e){this._shift=e,e?this.style.setProperty("--gl-track-color-active","var(--sl-color-primary-600"):this.style.removeProperty("--gl-track-color-active")}firstUpdated(e){this.slider.tooltipFormatter=e=>{let t=this.data?.[e]?.sha;return null==t?"":t?eY(t)?eZ(t)?"Staged Changes":"Working Changes":`Commit ${eQ(t)}`:"Working Changes"}}render(){return ey`<div class="slider-container">
			<sl-range
				id="slider"
				.min=${this._min}
				.max=${this._max}
				.value=${this._value}
				@sl-change=${this.handleSliderInput}
				@sl-input=${this.handleSliderInput}
			></sl-range>
		</div>`}select(e){let t;if("string"==typeof e)t=this.data?.findIndex(t=>t.sha===e);else{let i=e.toISOString();t=this.data?.findIndex(e=>e.date===i)}null!=t&&-1!==t&&(this._value=t)}handleSliderInput(e){if(!this.data?.length)return;let t=parseInt(e.target.value),i=new Date(this.data[t].date);this.emit("gl-slider-change",{date:i,shift:this.shift})}};rS.tagName=rA,rS.styles=S`
		:host {
			display: block;
		}

		.slider-container {
			width: 100%;
			position: relative;
			padding-bottom: 0.4rem;
		}

		sl-range::part(input) {
			--track-height: 3px;
			--thumb-size: 16px;
			--track-active-offset: 100%;
			--track-color-active: var(--gl-track-color-active, var(--sl-color-neutral-200));
		}
	`,rP([eM("#slider")],rS.prototype,"slider",2),rP([eL()],rS.prototype,"_value",2),rP([eR({type:Array})],rS.prototype,"data",1),rP([eR({type:Boolean})],rS.prototype,"shift",1),rS=rP([eT(rA)],rS);var rz=S`
  :host {
    display: contents;
  }
`,rE=class extends iJ{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let e=this.shadowRoot.querySelector("slot");if(null!==e){let t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return ey` <slot @slotchange=${this.handleSlotChange}></slot> `}};rE.styles=[iQ,rz],iS([eR({type:Boolean,reflect:!0})],rE.prototype,"disabled",2),iS([o1("disabled",{waitUntilFirstUpdate:!0})],rE.prototype,"handleDisabledChange",1),rE.define("sl-resize-observer");var rT=Object.defineProperty,rO=Object.getOwnPropertyDescriptor,rD=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rO(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rT(t,i,s),s};let rR="gl-chart-scroller",rL=class extends GlElement{constructor(){super(...arguments),this.position=0,this.size=100,this.onDragStart=e=>{if(!this.isScrollable())return;e.preventDefault(),e.stopPropagation();let t=e.currentTarget,i=t.parentElement;if(!i)return;t.setPointerCapture(e.pointerId);let[o,r]=this.range,s=this.visibleRange[1]-this.visibleRange[0];this._dragInfo={startX:e.clientX,startPosition:this.position,trackWidth:i.offsetWidth,viewRange:r-o,zoomRange:s,viewStart:o,maxPosition:100-this.size,pointerId:e.pointerId},this.emit("gl-scroll-start")},this.onDragMove=e=>{if(!this._dragInfo||e.pointerId!==this._dragInfo.pointerId)return;e.preventDefault(),e.stopPropagation();let t=(e.clientX-this._dragInfo.startX)/this._dragInfo.trackWidth*100,i=Math.max(0,Math.min(this._dragInfo.maxPosition,this._dragInfo.startPosition+t))/(100-this.size)*(this._dragInfo.viewRange-this._dragInfo.zoomRange),o=this._dragInfo.viewStart+i,r=o+this._dragInfo.zoomRange;this.emitScrollEvent(o,r)},this.onDragEnd=e=>{if(!this._dragInfo||e&&e.pointerId!==this._dragInfo.pointerId)return;let t=this.renderRoot.querySelector(".thumb");t&&this._dragInfo.pointerId&&t.releasePointerCapture(this._dragInfo.pointerId),this._dragInfo=void 0,this.requestUpdate(),this.emit("gl-scroll-end")},this.onTrackClick=e=>{if(!this.isScrollable()||e.target!==e.currentTarget)return;let t=e.currentTarget.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,[o,r]=this.range,s=this.visibleRange[1]-this.visibleRange[0],a=r-o,l=o+a*i,c=Math.max(o,Math.min(r-s,l-s/2));this.emitScrollEvent(c,c+s)},this.onWheel=e=>{if(e.ctrlKey)return void Object.defineProperty(e,"ctrlKey",{value:!1});if(e.stopPropagation(),e.stopImmediatePropagation(),!this.isScrollable())return;let t=null!=this._wheelTimer;t&&clearTimeout(this._wheelTimer),this._wheelTimer=setTimeout(()=>{this._wheelTimer=void 0,this.emit("gl-scroll-end")},150),t||this.emit("gl-scroll-start");let[i,o]=this.range,[r,s]=this.visibleRange,a=s-r,l=e.deltaY*a*.001,c=Math.max(i,Math.min(o-a,r+l));this.emitScrollEvent(c,c+a)}}isScrollable(){return null!=this.range&&null!=this.visibleRange&&this.size<100}connectedCallback(){super.connectedCallback(),this.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0})}disconnectedCallback(){this.onDragEnd(),this.removeEventListener("wheel",this.onWheel),super.disconnectedCallback()}willUpdate(e){({size:this.size,position:this.position}=this.calculateScrollState()),this.style.setProperty("--thumb-width",`${this.size}%`),this.style.setProperty("--thumb-left",`${this.position}%`)}render(){return ey`<slot></slot>
			<div class="track" part="track" ?scrollable="${this.isScrollable()}" @pointerdown="${this.onTrackClick}">
				<div
					class="thumb"
					@pointerdown="${this.onDragStart}"
					@pointermove="${this.onDragMove}"
					@pointerup="${this.onDragEnd}"
					@pointercancel="${this.onDragEnd}"
					@lostpointercapture="${this.onDragEnd}"
				></div>
			</div>`}calculateScrollState(){if(null==this.range||null==this.visibleRange)return{position:0,size:100};let[e,t]=this.range,[i,o]=this.visibleRange,r=t-e,s=o-i;if(r<=1||s<=1)return{position:0,size:100};let a=Math.max(20,Math.min(100,s/r*100)),l=r-s;return l<=0?{position:0,size:a}:{position:Math.max(0,Math.min(100-a,(i-e)/l*(100-a))),size:a}}emitScrollEvent(e,t){this.visibleRange&&e===this.visibleRange[0]&&t===this.visibleRange[1]||this.emit("gl-scroll",{range:[e,t]})}};rL.tagName=rR,rL.styles=S`
		:host {
			--track-top: unset;
			--track-left: 0;
			--track-width: 100%;
			--track-height: 1.2rem;

			--thumb-height: 0.6rem;
			--thumb-width: 2rem;
			--thumb-left: 0;
		}

		.track {
			visibility: hidden;
			position: absolute;
			background: transparent;
			top: var(--track-top);
			left: var(--track-left);
			width: var(--track-width, 100%);
			height: var(--track-height, 1rem);
			z-index: 1;
		}

		.track[scrollable] {
			visibility: visible;
		}

		.thumb {
			position: absolute;
			top: 0;
			left: var(--thumb-left);
			height: var(--thumb-height);
			width: var(--thumb-width);
			min-width: 2rem;
			background: transparent;
			transition: background 1s linear;
			cursor: default;
		}

		/* :host(:focus-within) .thumb, */
		:host(:hover) .thumb {
			background: var(--vscode-scrollbarSlider-background);
			transition: none;
		}

		.thumb:hover {
			background: var(--vscode-scrollbarSlider-hoverBackground) !important;
		}

		.thumb:active {
			background: var(--vscode-scrollbarSlider-activeBackground) !important;
		}
	`,rD([eR({type:Array})],rL.prototype,"range",2),rD([eR({type:Array})],rL.prototype,"visibleRange",2),rD([eL()],rL.prototype,"position",2),rD([eL()],rL.prototype,"size",2),rL=rD([eT(rR)],rL);let rB=S`
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: auto;
		position: absolute;
		top: 5%;
		bottom: 45%;
		left: 0;
		right: 0;
	}

	::slotted(p) {
		padding-top: 1rem;
		color: var(--color-foreground--75);
		font-size: 1.4rem;
	}

	.watermark {
		width: 12rem;
		height: 12rem;
		fill: color-mix(in srgb, var(--color-foreground) 15%, var(--color-background));
		transform-origin: center;
	}
`,rM=S`
	@keyframes pulse {
		0% {
			transform: scale(0.9);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(0.9);
		}
	}

	.watermark--pulse .watermark-path {
		transform: scale(0.9);
		animation: pulse 1.8s ease-in-out infinite;
		transform-origin: center;
	}

	/* Stagger the pulse animation for a wave effect on all paths */
	/* Targeting all paths using their order within the SVG */
	.watermark-path:nth-of-type(1) {
		/* Target the outer circle path */
		animation-delay: 0.2s;
	}

	.watermark-path:nth-of-type(2) {
		/* Target the connection path */
		animation-delay: 0.4s;
	}

	.watermark-path:nth-of-type(3) {
		/* Target the first dot path */
		animation-delay: 0.1s;
	}

	.watermark-path:nth-of-type(4) {
		/* Target the second dot path */
		animation-delay: 0.1s;
	}

	.watermark-path:nth-of-type(5) {
		/* Target the third dot path */
		animation-delay: 0.1s;
	}
`;var rI=Object.defineProperty,rF=Object.getOwnPropertyDescriptor,rN=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rF(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rI(t,i,s),s};let rj=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ey`<div class="container">
			<svg
				class="watermark${this.pulse?" watermark--pulse":""}"
				viewBox="0 0 28 28"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					class="watermark-path"
					d="M14 3.25C12.5883 3.25 11.1904 3.52806 9.88615 4.0683C8.5819 4.60853 7.39683 5.40037 6.3986 6.3986C5.40037 7.39683 4.60853 8.5819 4.06829 9.88615C3.52806 11.1904 3.25 12.5883 3.25 14C3.25 15.4117 3.52806 16.8096 4.06829 18.1138C4.60853 19.4181 5.40037 20.6032 6.3986 21.6014C7.39683 22.5996 8.5819 23.3915 9.88615 23.9317C11.1904 24.4719 12.5883 24.75 14 24.75C16.8511 24.75 19.5854 23.6174 21.6014 21.6014C23.6174 19.5854 24.75 16.8511 24.75 14C24.75 11.1489 23.6174 8.41462 21.6014 6.3986C19.5854 4.38259 16.8511 3.25 14 3.25ZM2 14C2 10.8174 3.26428 7.76516 5.51472 5.51472C7.76516 3.26428 10.8174 2 14 2C17.1826 2 20.2348 3.26428 22.4853 5.51472C24.7357 7.76516 26 10.8174 26 14C26 17.1826 24.7357 20.2348 22.4853 22.4853C20.2348 24.7357 17.1826 26 14 26C10.8174 26 7.76516 24.7357 5.51472 22.4853C3.26428 20.2348 2 17.1826 2 14Z"
				/>
				<path class="watermark-path" d="M18 15L11.5 8.5L12.5 7.5L19 14L18 15ZM11.5 20V8H13V20H11.5Z" />
				<path
					class="watermark-path"
					d="M12.25 10.5C12.8467 10.5 13.419 10.2629 13.841 9.84099C14.2629 9.41903 14.5 8.84674 14.5 8.25C14.5 7.65326 14.2629 7.08097 13.841 6.65901C13.419 6.23705 12.8467 6 12.25 6C11.6533 6 11.081 6.23705 10.659 6.65901C10.2371 7.08097 10 7.65326 10 8.25C10 8.84674 10.2371 9.41903 10.659 9.84099C11.081 10.2629 11.6533 10.5 12.25 10.5Z"
				/>
				<path
					class="watermark-path"
					d="M18.25 16.5C18.5455 16.5 18.8381 16.4418 19.111 16.3287C19.384 16.2157 19.6321 16.0499 19.841 15.841C20.0499 15.6321 20.2157 15.384 20.3287 15.111C20.4418 14.8381 20.5 14.5455 20.5 14.25C20.5 13.9545 20.4418 13.6619 20.3287 13.389C20.2157 13.116 20.0499 12.8679 19.841 12.659C19.6321 12.4501 19.384 12.2843 19.111 12.1713C18.8381 12.0582 18.5455 12 18.25 12C17.6533 12 17.081 12.2371 16.659 12.659C16.2371 13.081 16 13.6533 16 14.25C16 14.8467 16.2371 15.419 16.659 15.841C17.081 16.2629 17.6533 16.5 18.25 16.5Z"
				/>
				<path
					class="watermark-path"
					d="M12.25 22C12.8467 22 13.419 21.7629 13.841 21.341C14.2629 20.919 14.5 20.3467 14.5 19.75C14.5 19.1533 14.2629 18.581 13.841 18.159C13.419 17.7371 12.8467 17.5 12.25 17.5C11.6533 17.5 11.081 17.7371 10.659 18.159C10.2371 18.581 10 19.1533 10 19.75C10 20.3467 10.2371 20.919 10.659 21.341C11.081 21.7629 11.6533 22 12.25 22Z"
				/>
			</svg>
			<slot></slot>
		</div>`}};rj.styles=[rB,rM],rN([eR({type:Boolean})],rj.prototype,"pulse",2),rj=rN([eT("gl-watermark-loader")],rj);var rU=Object.defineProperty,rH=Object.getOwnPropertyDescriptor,rq=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rH(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rU(t,i,s),s};let rV="gl-timeline-chart",rW=class extends GlElement{constructor(){super(...arguments),this._slices=new Map,this._slicesByIndex=new Map,this._commitsByTimestamp=new Map,this.placement="editor",this.sliceBy="author",this._data=null,this._shiftKeyPressed=!1,this.onDataPointClicked=tt((e,t)=>{let i=e.x,o=i instanceof Date?i:new Date(i),r=this._commitsByTimestamp.get(o.getTime())?.sha;null!=r&&(this._shaHovered=void 0,this._shaSelected=r,this.slider?.select(r),this.emit("gl-commit-select",{id:r,shift:this._shiftKeyPressed}))},50),this.onDataPointHovered=(e,t)=>{let i=e.x,o=i instanceof Date?i:new Date(i),r=this._commitsByTimestamp.get(o.getTime())?.sha;this._shaHovered=r},this.onDataPointUnhovered=(e,t)=>{if(this._shaHovered=void 0,this._shaSelected){let e=this._data?.find(e=>e.sha===this._shaSelected)?.date;null!=e&&this.selectDataPoint(new Date(e))}},this.onDocumentKeyDown=e=>{this._shiftKeyPressed=e.shiftKey,("Escape"===e.key||"Esc"===e.key)&&this.resetZoom()},this.onDocumentKeyUp=e=>{this._shiftKeyPressed=e.shiftKey},this.onResize=e=>{this._chart&&this.updateChartSize(e.detail.entries[0].contentRect)},this.onZoom=e=>{this.zoomedRange=e[0]<=this.range[0]&&e[1]>=this.range[1]?void 0:e}}get compact(){return"editor"!==this.placement}get data(){return this._data}get dataPromise(){return this._dataPromise}set dataPromise(e){this._dataPromise!==e&&(this._dataPromise=e,this._dataPromise?.then(e=>{this._data=e,this._dataReversed=e.toReversed()},()=>this._data=void 0))}get range(){return this._range}set range(e){this._range=e,this._rangeScrollable=[e[0].getTime()-144e5,e[1].getTime()+432e5],this.resetZoom()}get zoomedRange(){return this._zoomedRange}set zoomedRange(e){this._zoomedRange=e,this._zoomedRangeScrollable=e?[e[0].getTime(),e[1].getTime()]:void 0}get zoomed(){return null!=this._zoomedRange}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.onDocumentKeyDown),document.addEventListener("keyup",this.onDocumentKeyUp)}disconnectedCallback(){document.removeEventListener("keydown",this.onDocumentKeyDown),document.removeEventListener("keyup",this.onDocumentKeyUp),this._loading?.cancel(),this._chart?.destroy(),this._chart=void 0,super.disconnectedCallback()}update(e){(e.has("dataPromise")||null==this.dataPromise)&&this.updateChart(),super.update(e)}updateChart(){this._loading?.pending||(this._loading=function(){let e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0};return e.promise=new Promise((t,i)=>{e.fulfill=function(i){e.pending=!1,t(i)},e.cancel=function(t){e.pending=!1,null!=t?i(t):i()}}),e}(),this._loading.promise.finally(()=>this._loading=void 0),this.emit("gl-loading",this._loading.promise)),null!=this.dataPromise&&(this._chartAborter?.abort(),this._chartAborter=new AbortController,this.renderChart(this.dataPromise,this._loading,this._chartAborter.signal))}render(){return ey`${this.renderNotice()}
			<gl-chart-scroller
				.range=${this._rangeScrollable}
				.visibleRange=${this._zoomedRangeScrollable}
				@gl-scroll=${this.onScroll}
				@gl-scroll-start=${this.onScrollStart}
				@gl-scroll-end=${this.onScrollEnd}
			>
				<sl-resize-observer @sl-resize=${this.onResize}>
					<div id="chart" tabindex="-1"></div>
				</sl-resize-observer>
				${this.data?.length?this.renderFooter():ex}
			</gl-chart-scroller>`}renderNotice(){return this._loading?.pending||null==this.data?ey`<div class="notice notice--blur">
				<gl-watermark-loader pulse><p>Loading...</p></gl-watermark-loader>
			</div>`:this.data.length?ex:ey`<div class="notice">
				<gl-watermark-loader><slot name="empty"></slot></gl-watermark-loader>
			</div>`}renderFooter(){return ey`<footer>
			<gl-chart-slider
				.data=${this._dataReversed}
				?shift=${this._shiftKeyPressed}
				@gl-slider-change=${this.onSliderChanged}
			></gl-chart-slider>
			${function(e,t=12){return ey`<gl-commit-sha .sha=${e} .size=${t}></gl-commit-sha>`}(this._shaHovered??this._shaSelected,16)}${this.renderActions()}
		</footer>`}renderActions(){return ey`<div class="actions">
			${this.zoomed?ey`<gl-button
						appearance="toolbar"
						@click=${e=>e.shiftKey||e.altKey?this.resetZoom():this.zoom(-1)}
						aria-label="Zoom Out"
				  >
						<code-icon icon="zoom-out"></code-icon>
						<span slot="tooltip">Zoom Out<br />[Alt] Reset Zoom</span>
				  </gl-button>`:ex}
			<gl-button appearance="toolbar" @click=${()=>this.zoom(.5)} tooltip="Zoom In" aria-label="Zoom In">
				<code-icon icon="zoom-in"></code-icon>
			</gl-button>
		</div>`}onScrollStart(){this._chart&&this.zoomed&&(this._transitionDuration=this._chart?.config("transition.duration"),this._chart?.config("transition.duration",0))}onScrollEnd(){this._chart&&this.zoomed&&this._chart?.config("transition.duration",this._transitionDuration)}onScroll(e){if(!this._chart||!this.zoomed)return;let t=[new Date(e.detail.range[0]),new Date(e.detail.range[1])];this._chart.zoom(t)}onSliderChanged(e){this.revealDate(e.detail.date,{focus:!0,select:!0});let t=this._commitsByTimestamp.get(e.detail.date.getTime())?.sha;this._shaHovered=void 0,this._shaSelected=t,null!=t&&this.emit("gl-commit-select",{id:t,shift:e.detail.shift})}resetZoom(){this.zoomedRange=void 0,this._chart?.unzoom()}revealDate(e,t){let i,o;if(!this._chart||(this.selectDataPoint(e,t),!this.zoomedRange))return;let r=this.zoomedRange,s=r[1].getTime()-r[0].getTime();if(e<r[0])o=new Date((i=new Date(e.getTime()-.2*s)).getTime()+s),i<=this.range[0]&&(o=new Date((i=e3(this.range[0],{hours:-12})).getTime()+s));else{if(!(e>r[1]))return;i=new Date((o=new Date(e.getTime()+.2*s)).getTime()-s),o>=this.range[1]&&(i=new Date((o=e3(this.range[1],{hours:12})).getTime()-s))}this._chart.zoom([i,o])}selectDataPoint(e,t){let i=this.getInternalChart();if(null==i)return;let o=this.getDataPoint(e);if(null==o)return;t?.focus&&i.showGridFocus([o]);let{index:r}=o;if(null!=r&&(this._chart?.$.main.selectAll(`.bb-chart-circles .bb-shape-${r}`).each(()=>i.setExpand?.(r,null,!0)),t?.select)){let t=this._commitsByTimestamp.get(e.getTime())?.sha;this._shaHovered=void 0,this._shaSelected=t,null!=t&&this.slider?.select(t)}}zoom(e){if(0===e)return void this.resetZoom();if(!this._chart)return;let t=this._chart.zoom(),i=[t[0].getTime(),t[1].getTime()],o=i[1]-i[0],r=new Date((i[1]+i[0])/2),s=r.getTime()-o*(1-e)/2,a=r.getTime()+o*(1-e)/2;if(a-s<(this.range[1].getTime()-this.range[0].getTime())/40)return;let l=this._chart.zoom([new Date(s),new Date(a)]);e<0&&l[0].getTime()===i[0]&&l[1].getTime()===i[1]&&this.resetZoom()}calculateBubbleSize(e,{minRadius:t,maxRadius:i,q1:o,q3:r,maxChanges:s}){let a;return 0===e?t:(a=e<=o?t+e/o*10:e<=r?t+10+(e-o)/(r-o)*15:t+25+Math.log(e-r+1)/Math.log(s-r+1)*15,Math.max(t,Math.min(i,a)))}calculateChangeMetrics(e){let t=e.map(e=>(e.additions??0)+(e.deletions??0)).sort((e,t)=>e-t);return{maxChanges:t[t.length-1],q1:t[Math.floor(.25*t.length)],q3:t[Math.floor(.75*t.length)]}}getDataPoint(e){let t=e instanceof Date?e.getTime():new Date(e).getTime();return this._chart?.data()[0]?.values.find(e=>("number"==typeof e.x?e.x:e.x.getTime())===t)}getInternalChart(){try{let e=this._chart?.internal;return this._chart,e}catch{return}}getOnRenderedCallback(e){return function(){let t=this;null!=t&&t.$.main.selectAll(".bb-axis-y .tick text tspan").each(function(i){if(this==null)return;let o=e._slicesByIndex.get(-i.index),r=t.color(o);e.compact&&this.setAttribute("fill",r);let s=document.createElementNS("http://www.w3.org/2000/svg","title");s.textContent=o,this.appendChild(s)})}}prepareChartData(e,t){let i=e.length+1,o=Array(i);o[0]="time";let r=Array(i);r[0]="additions";let s=Array(i);s[0]="deletions";let a={time:"x",additions:"y2",deletions:"y2"},l={additions:"bar",deletions:"bar"},c={additions:"time",deletions:"time"};this._slices.clear(),this._slicesByIndex.clear();let h=0,d=(e,t,i)=>{let o=this._slices.get(e);null==o?(o={x:[`time.${e}`,t],y:h,z:new Map([[t,i]])},this._slices.set(e,o),this._slicesByIndex.set(h,e),a[e]="y",l[e]="scatter",c[e]=`time.${e}`,h--):(o.x.push(t),o.z.set(t,i))},p=0;for(let i of e){let{author:e,date:a,additions:l=0,deletions:c=0,branches:h}=i;this._commitsByTimestamp.set(new Date(a).getTime(),i),o[++p]=a,r[p]=l,s[p]=c;let u=this.calculateBubbleSize(l+c,t);if("branch"===this.sliceBy)for(let e of h?.length?h:[this.head??"HEAD"])d(e,a,u);else d(e,a,u)}let u=[o,r,s];for(let[e,t]of this._slices){u.push(t.x);let i=Array(t.x.length).fill(t.y);i[0]=e,u.push(i)}return{axes:a,columns:u,names:{additions:"Additions",deletions:"Deletions"},types:l,xs:c}}async renderChart(i,o,r){let s=await i;if(r.aborted)return void o?.cancel();this._slices.clear(),this._slicesByIndex.clear(),this._commitsByTimestamp.clear();let a={minRadius:6,maxRadius:50,...this.calculateChangeMetrics(s)},{bb:l,bar:c,scatter:h,selection:d,zoom:p}=await x.e(162).then(x.bind(x,644));if(r.aborted)return void o?.cancel();this.range=s.length?[new Date(s[s.length-1].date),new Date(s[0].date)]:[new Date,new Date],c(),h();let u=this.prepareChartData(s,a);try{let i=-(this._slices.size+1),r=[...this._slicesByIndex.keys()];if(null==this._chart){let a={bindto:this.chartContainer,onafterinit:()=>{this.updateChartSize(),setTimeout(()=>o?.fulfill(),0)},onrendered:this.getOnRenderedCallback(this),onresized:()=>{null!=this._chart&&null!=this.zoomedRange&&this._chart.zoom(this.zoomedRange)},clipPath:!0,data:{...u,colors:{additions:"rgba(73, 190, 71, 1)",deletions:"rgba(195, 32, 45, 1)"},groups:[["additions","deletions"]],selection:{enabled:d(),draggable:!1,grouped:!0,multiple:!1,isselectable:()=>!1},onclick:this.onDataPointClicked,onover:this.onDataPointHovered,onout:this.onDataPointUnhovered},axis:{x:{type:"timeseries",localtime:!0,height:this.compact?28:void 0,forceAsSingle:!0,tick:{fit:!1,format:e=>"number"==typeof e?e:e4(e,this.shortDateFormat??"short"),outer:!0}},y:{max:0,min:i,padding:{top:75,bottom:75},tick:{format:e=>this.compact?"branch"===this.sliceBy?"":"":function(e,t,i="…"){if(!e)return e;let o=null==e||0===e.length?0:(0,tk.A)(e,tO,tD).width;return o<=30?e:`${e.slice(0,Math.floor(t/2)-1)}${i}${e.slice(o-Math.ceil(t/2))}`}(this._slicesByIndex.get(e)??"",30),outer:!0,values:r}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:e=>this.compact?"":e,outer:!0}}},bar:{width:2,sensitivity:4,padding:2},scatter:{zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!0,hide:["additions","deletions"],padding:4,item:{tile:{type:"circle",r:5},interaction:{dblclick:!0}},tooltip:!0},point:{r:e=>null==e||"function"==typeof e.data&&(e=e.data()[0],null==e)?0:null!=e.r?e.r:Math.max(6,this._slices.get(e.id)?.z.get(e.x.toISOString())??6),focus:{expand:{enabled:!0}},select:{r:6}},resize:{auto:!1},tooltip:{contents:(i,o,r,s)=>{var a;let l=i[0],c=new Date(l.x),h=this._commitsByTimestamp.get(c.getTime());if(null==h)return"";if(""===h.sha)return`<div class="bb-tooltip">
									<section class="author">Working Tree</section>
									<section class="message"><span class="message__content">No uncommitted changes</span></section>
								</div>`;let d=h.additions,p=h.deletions,u=null==d?"":`<span class="additions">+${tR("line",d)}</span>`,b=null==p?"":`<span class="deletions">-${tR("line",p)}</span>`;u&&(b=`, ${b}`);let g=h.branches?.length?`<section class="branches"><code-icon icon="git-branch"></code-icon> ${h.branches.join(", ")}</section>`:"";return`<div class="bb-tooltip">
									<section class="author">${h.author}</section>
									<section>
										<span class="sha"><code-icon icon="git-commit"></code-icon> ${eQ(h.sha)}</span>
										<span class="changes">${u}${b}</span>
									</section>
									<section class="date">
										<code-icon icon="history"></code-icon><span class="date--relative">${(a=function(i,o){let r=("number"==typeof i?i:i.getTime())-new Date().getTime();for(let[i,o,s,a]of e5)if(Math.abs(r)>=o||1e3===o)return null==t&&(t=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})),t.format(Math.round(r/s),i);return""}(c)).charAt(0).toUpperCase()+a.slice(1)}</span><span class="date--absolute">(${e4(c,this.dateFormat)})</span>
									</section>
									${g}
									<section class="message"><span class="message__content">${h.message}</span></section>
								</div>`},show:!0},zoom:{enabled:p(),type:"wheel",extent:[1,40],onzoom:this.onZoom,onzoomend:this.onZoom}};this._chart=l.generate(a);let c=s[0];this._shaHovered=void 0,this._shaSelected=c?.sha,null!=c&&this.selectDataPoint(new Date(c.date),{select:!0})}else this._chart.config("axis.y.tick.values",r,!1),this._chart.config("axis.y.min",i,!1),this._chart.load({...u,resizeAfter:!0,unload:!0,done:()=>{let e;null!=this._shaSelected&&(e=s.find(e=>e.sha===this._shaSelected)),null==e&&(e=s[0],this._shaHovered=void 0,this._shaSelected=e?.sha),null!=e&&this.selectDataPoint(new Date(e.date),{select:!0}),setTimeout(()=>o?.fulfill(),0)}});return void await o.promise.catch(()=>{})}catch(e){o?.cancel()}}updateChartSize(e){(e??=this.chartContainer.getBoundingClientRect()).width>0&&e.height>0&&requestAnimationFrame(()=>{this._chart.resize({width:e.width,height:e.height}),this.updateScrollerTrackPosition()})}updateScrollerTrackPosition(){let e=this.shadowRoot?.querySelector(".bb-axis.bb-axis-x");if(null==e)return;let t=e.getBoundingClientRect(),i=this.chartContainer.getBoundingClientRect();this.style.setProperty("--scroller-track-top",`${t.top-(i.top-1)}px`),this.style.setProperty("--scroller-track-left",`${t.left+2}px`),this.style.setProperty("--scroller-track-width",`${t.width-2}px`)}};rW.tagName=rV,rW.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},rW.styles=[rn],rq([eM("#chart")],rW.prototype,"chartContainer",2),rq([eM(rS.tagName)],rW.prototype,"slider",2),rq([eL()],rW.prototype,"_loading",2),rq([eR()],rW.prototype,"placement",2),rq([eR()],rW.prototype,"dateFormat",2),rq([eR({type:String})],rW.prototype,"head",2),rq([eR({type:Object})],rW.prototype,"scope",2),rq([eR()],rW.prototype,"shortDateFormat",2),rq([eR()],rW.prototype,"sliceBy",2),rq([eL()],rW.prototype,"_data",2),rq([eR({type:Object})],rW.prototype,"dataPromise",1),rq([eL()],rW.prototype,"_shaHovered",2),rq([eL()],rW.prototype,"_shaSelected",2),rq([eL()],rW.prototype,"_shiftKeyPressed",2),rq([eL()],rW.prototype,"_zoomedRange",2),rq([eR({type:Boolean,reflect:!0})],rW.prototype,"zoomed",1),rq([tZ({args:{0:e=>e?.length}})],rW.prototype,"prepareChartData",1),rq([tZ({args:!1})],rW.prototype,"renderChart",1),rW=rq([eT(rV)],rW);let rG=S`
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
		${rG}
	}
`;let rK=S`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,rY=S`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,rZ=S`
	:focus-visible {
		${rK}
	}
`;var rX=Object.defineProperty,rQ=Object.getOwnPropertyDescriptor,rJ=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rQ(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rX(t,i,s),s};let r0=class extends lit_element_i{render(){return ey`<slot></slot>`}};r0.styles=S`
		* {
			box-sizing: border-box;
		}

		:host {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			gap: 0.4rem;
			overflow: hidden;
			font-size: var(--vscode-font-size);
			color: var(--vscode-foreground);
			width: 100%;
		}

		::slotted(gl-breadcrumb-item:not(:last-of-type))::after {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
			position: relative;
			left: -0.6rem;
			margin-right: -0.6rem;
			transition:
				left 0.3s cubic-bezier(0.25, 1, 0.5, 1),
				margin-right 0.3s cubic-bezier(0.25, 1, 0.5, 1);
		}

		::slotted(gl-breadcrumb-item[collapsed]:not(:hover):not(:last-of-type))::after {
			left: -1.2rem;
			margin-right: -1.2rem;
		}

		::slotted(:last-child:not(gl-breadcrumb-item:last-of-type)) {
			margin-left: 1rem;
		}
	`,r0=rJ([eT("gl-breadcrumbs")],r0);let r1=class extends lit_element_i{constructor(){super(...arguments),this.collapsibleState="none",this._shrink=1,this.onToggleCollapse=e=>{e.preventDefault(),e.stopPropagation(),e instanceof KeyboardEvent&&"Enter"!==e.key&&" "!==e.key||(this.collapsed=!this.collapsed)}}get collapsed(){return this._collapsed??"collapsed"===this.collapsibleState}set collapsed(e){this._collapsed=e}get collapsible(){return"none"!==this.collapsibleState}get shrink(){return this._shrink}set shrink(e){let t=this._shrink;this._shrink=e,this.style.setProperty("--gl-breadcrumb-item-shrink",String(e)),this.requestUpdate("shrink",t)}render(){let{collapsed:e,collapsible:t}=this;return ey`<div class=${oG({"breadcrumb-item":!0,collapsible:t})}>
			<span class="breadcrumb-content">
				${this.renderIcon(t,e)}
				<slot class="breadcrumb-label"></slot>
			</span>
			<slot name="children"></slot>
		</div>`}renderIcon(e,t){return this.icon?e||this.iconTooltip?ey`<gl-tooltip
			content="${e?t?"Click to Expand":"Click to Collapse":this.iconTooltip}"
			placement="bottom"
		>
			<code-icon
				class="breadcrumb-icon"
				icon="${this.icon}"
				tabindex="0"
				@click=${e?this.onToggleCollapse:void 0}
				@keyup=${e?this.onToggleCollapse:void 0}
			></code-icon>
		</gl-tooltip>`:ey`<code-icon class="breadcrumb-icon" icon="${this.icon}"></code-icon>`:ex}};r1.styles=[rZ,S`
			* {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				flex-shrink: var(--gl-breadcrumb-item-shrink, 1);
			}

			:host([icon]) {
				min-width: calc(24px + 0.6rem);
			}

			:host(:hover),
			:host(:focus-within) {
				flex-shrink: 0;
			}

			.breadcrumb-item {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				width: 100%;
				cursor: default;
			}

			.breadcrumb-content {
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				vertical-align: middle;
			}

			.breadcrumb-icon {
				flex-shrink: 0;
				z-index: 2;
			}

			.collapsible .breadcrumb-icon {
				cursor: pointer;
			}

			.breadcrumb-label {
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			.breadcrumb-tooltip {
				display: inline-flex;
				align-items: center;
				vertical-align: middle;
			}

			slot[name='children'] {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				overflow: hidden;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) .breadcrumb-label,
			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) slot[name='children'] {
				max-width: 0;
			}
		`],rJ([eL()],r1.prototype,"_collapsed",2),rJ([eR({type:Boolean,reflect:!0})],r1.prototype,"collapsed",1),rJ([eR({type:String})],r1.prototype,"collapsibleState",2),rJ([eR()],r1.prototype,"icon",2),rJ([eR()],r1.prototype,"iconTooltip",2),rJ([eR({type:Number})],r1.prototype,"shrink",1),r1=rJ([eT("gl-breadcrumb-item")],r1);let r2=class extends lit_element_i{render(){return ey`<slot></slot>`}};r2.styles=S`
		:host {
			display: flex;
			flex-direction: row;
			align-items: center;
			white-space: nowrap;
			overflow: hidden;
			margin-right: 0.6rem;
		}

		:host::before {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			margin-right: 0.4rem;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
		}

		.breadcrumb-label {
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,r2=rJ([eT("gl-breadcrumb-item-child")],r2);let r5=S`
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
`,r8=S`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${rK}
	}
	a:hover {
		text-decoration: underline;
	}
`,r6=S`
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
`;var r3=Object.defineProperty,r4=Object.getOwnPropertyDescriptor,r9=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?r4(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&r3(t,i,s),s};let r7=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom"}connectedCallback(){super.connectedCallback(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ey`<gl-tooltip .content=${this.tooltip} placement=${eI(this.tooltipPlacement)}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ey`<gl-tooltip placement=${eI(this.tooltipPlacement)}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ey`<a
				class="control"
				tabindex="${eI(!1===this.disabled?void 0:-1)}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ey`<button
			class="control"
			role=${eI(this.role)}
			aria-checked=${eI(this.ariaChecked)}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};r7.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},r7.styles=[r5,S`
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
				max-width: 100%;
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
				${rY}
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
		`],r9([eM(".control")],r7.prototype,"control",2),r9([eR({reflect:!0})],r7.prototype,"appearance",2),r9([eR({type:Boolean,reflect:!0})],r7.prototype,"disabled",2),r9([eR({reflect:!0})],r7.prototype,"density",2),r9([eR({type:Boolean,reflect:!0})],r7.prototype,"full",2),r9([eR()],r7.prototype,"href",2),r9([eR()],r7.prototype,"tooltip",2),r9([eR()],r7.prototype,"tooltipPlacement",2),r7=r9([eT("gl-button")],r7);let se=S`
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
`;var st=Object.defineProperty,si=Object.getOwnPropertyDescriptor,so=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?si(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&st(t,i,s),s};let sr=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return ey` <code-icon icon="check"></code-icon> `}render(){return ey`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};function ss(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}sr.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},sr.styles=[se],so([eR({type:Boolean,reflect:!0})],sr.prototype,"disabled",2),so([eR({type:String})],sr.prototype,"value",2),so([eR({type:Boolean})],sr.prototype,"defaultChecked",1),so([eR({type:Boolean,reflect:!0})],sr.prototype,"checked",2),sr=so([eT("gl-checkbox")],sr),oZ.define("sl-popup");var sn=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,sl=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sa(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sn(t,i,s),s};let sc=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=tX(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let i=tX(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),i)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of sc.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),sc.openPopovers.delete(this),super.disconnectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ey`<sl-popup
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
				class="popover__body scrollable ${"menu"===this.appearance?"is-menu":""}"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return sc.closeOthers(this),this.open=!0,sc.openPopovers.add(this),tQ(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,sc.openPopovers.delete(this),tQ(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};sc.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sc.openPopovers=new Set,sc.styles=[r6,S`
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

			:host([appearance='menu']) {
				--sl-tooltip-padding: 0 var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
				--sl-tooltip-font-size: var(--vscode-font-size);
				--sl-tooltip-background-color: var(--vscode-menu-background);
				--arrow-color: var(--vscode-menu-background);
			}

			/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
		`],sl([eM("#popover")],sc.prototype,"body",2),sl([eM("sl-popup")],sc.prototype,"popup",2),sl([eR({reflect:!0})],sc.prototype,"placement",2),sl([eR({type:Object})],sc.prototype,"anchor",2),sl([eR({reflect:!0,type:Boolean})],sc.prototype,"disabled",2),sl([eR({type:Number})],sc.prototype,"distance",2),sl([eR({reflect:!0,type:Boolean})],sc.prototype,"open",2),sl([eR({reflect:!0,type:Boolean})],sc.prototype,"arrow",2),sl([eR({type:Number})],sc.prototype,"skidding",2),sl([eR()],sc.prototype,"trigger",2),sl([eR({type:Boolean})],sc.prototype,"hoist",2),sl([eR({reflect:!0})],sc.prototype,"appearance",2),sl([t_("open",{afterFirstUpdate:!0})],sc.prototype,"handleOpenChange",1),sl([t_(["distance","hoist","placement","skidding"])],sc.prototype,"handleOptionsChange",1),sl([t_("disabled")],sc.prototype,"handleDisabledChange",1),sc=sl([eT("gl-popover")],sc);let sh=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),sh(e,t);return!0},sd=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},sp=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),sg(t)}};function su(e){void 0!==this._$AN?(sd(this),this._$AM=e,sp(this)):this._$AM=e}function sb(e,t=!1,i=0){let o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)sh(o[e],!1),sd(o[e]);else null!=o&&(sh(o,!1),sd(o));else sh(this,e)}let sg=e=>{e.type==iI.CHILD&&(e._$AP??=sb,e._$AQ??=su)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),sp(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(sh(this,e),sd(this))}setValue(e){if(ry(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let sf=e=>!rv(e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!sf(e))??ew}update(e,t){let i=this._$Cbt,o=i.length;this._$Cbt=t;let r=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!sf(a))return this._$Cwt=e,a;e<o&&a===i[e]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(a).then(async e=>{for(;s.get();)await s.get();let t=r.deref();if(void 0!==t){let i=t._$Cbt.indexOf(a);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return ew}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let sm=iF(until_c);var sv=Object.defineProperty,sy=Object.getOwnPropertyDescriptor,sw=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sy(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sv(t,i,s),s};let sx=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ey`${sm(this.promoPromise?.then(e=>this.renderPromo(e)),ex)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"info":if(t.info)return this.hasPromo=!0,ey`<p class="promo" part="text">${iN(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ey`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${eI(t.link.title)}"
						>${iN(t.link.html)}</a
					>`}return this.hasPromo=!1,ex}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),ss(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};sx.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sx.styles=[S`
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
				${rK}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],sw([eM('a,button,[tabindex="0"]')],sx.prototype,"_focusable",2),sw([eR({type:Object})],sx.prototype,"promoPromise",2),sw([eR({type:Object})],sx.prototype,"source",2),sw([eR({reflect:!0,type:String})],sx.prototype,"type",2),sw([eR({type:Boolean,reflect:!0,attribute:"has-promo"})],sx.prototype,"hasPromo",1),sx=sw([eT("gl-promo")],sx);var s_=Object.defineProperty,sk=Object.getOwnPropertyDescriptor,s$=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sk(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&s_(t,i,s),s};let sC=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var e,t,i,o;if(null==this.subscription)return 0;return e=this.subscription,t="days",i=e.plan.effective.expiresOn,o=t,(null!=i?function(e,t,i,o){let r=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=o??Math.floor;switch(i){case"days":return s(r/864e5);case"hours":return s(r/36e5);case"minutes":return s(r/6e4);case"seconds":return s(r/1e3);default:return r}}(Date.now(),new Date(i),o,Math.round):void 0)??0}get state(){return this.subscription?.state}render(){return ey`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===e0.VerificationRequired)return ey`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var t;if(te(this.subscription)||this.cloud&&null!=this.subscription.account)return ey`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(t===e0.ProPreview||t===e0.ProTrial))return ey`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=ey`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===e0.Paid?ey`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ey`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:ey`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?ey`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:ey`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return ex;switch(this.state){case e0.Paid:var t;e=ey`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${ss("gitlens.showAccountView")}"
							>${t=this.subscription?.plan.actual.id??eJ.Pro,`GitLens ${function(e){switch(e){case eJ.Pro:return"Pro";case eJ.Advanced:return"Advanced";case eJ.Business:return"Business";case eJ.Enterprise:return"Enterprise";default:return"Community"}}(t)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case e0.VerificationRequired:e=ey`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${ss("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${ss("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case e0.ProTrial:{let t=this.daysRemaining;e=ey`<p>
						You have
						<strong>${t<1?"<1 day":tR("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case e0.ProTrialExpired:e=ey`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ey`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case e0.ProTrialReactivationEligible:e=ey`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${tR("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${ss("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${tR("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===e0.ProPreview){let t=this.daysRemaining;e=ey`<p>
							You have
							<strong>${t<1?"<1 day":tR("day",t,{infix:" more "})} left</strong>
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
			<gl-button density="tight" href="${ss("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${ss("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return ey`<div class="actions">
			${e??ex}
			<gl-button
				density="tight"
				href="${ss("gitlens.plus.upgrade",{plan:eJ.Pro,...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return ey`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo("badge")}
			.source=${this.source}
		></gl-promo>`}};sC.styles=[r5,r8,S`
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
				${A(rK)}
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
		`],s$([eR({type:Boolean})],sC.prototype,"cloud",2),s$([eR({reflect:!0})],sC.prototype,"placement",2),s$([eR({type:Boolean})],sC.prototype,"preview",2),s$([tw({context:"promos"})],sC.prototype,"promos",2),s$([eR({type:Object})],sC.prototype,"source",2),s$([eR({attribute:!1})],sC.prototype,"subscription",2),sC=s$([eT("gl-feature-badge")],sC);var sP=Object.defineProperty,sA=Object.getOwnPropertyDescriptor,sS=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sA(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sP(t,i,s),s};let sz=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,e)return;let t=(this.appearance??"alert")==="alert"?"alert":void 0;switch(this.state){case e0.VerificationRequired:return ey`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${eI(t)}"
							href="${ss("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${eI(t)}"
							href="${ss("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case e0.Community:case e0.ProPreviewExpired:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let i=(new Date(t[t.length-1].expiresOn).getTime()-new Date().getTime())/36e5;return t.length<=3&&i>0&&i<24?"active":"expired"}(this.featurePreview))return ey`${this.renderFeaturePreview(this.featurePreview)}`;return ey`<slot name="feature"></slot>
					<p>
						Use on privately-hosted repos requires
						<a href="${tz.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${eI(t)}"
							href="${ss("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${ss("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${tR("day",14)} of
						<a href="${tz.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case e0.ProTrialExpired:return ey`<slot name="feature"></slot>
					<p>Use on privately-hosted repos requires <a href="${tz.communityVsPro}">GitLens Pro</a>.</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${eI(t)}"
							href="${ss("gitlens.plus.upgrade",{plan:eJ.Pro,...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<p>${this.renderPromo()}</p>`;case e0.ProTrialReactivationEligible:return ey`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${eI(t)}"
							href="${ss("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${tR("day",14)}!
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,i=e.usages.length;return 0===i?ey`<slot name="feature"></slot>
				<gl-button appearance="${eI(t)}" href="${eI(this.featurePreviewCommandLink)}"
					>Continue</gl-button
				>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
					repos, or
					<a href="${ss("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?ey`<br />`:""} For full access to all GitLens Pro features,
					<a href="${ss("gitlens.plus.signUp",this.source)}"
						>start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ey`
			${this.renderFeaturePreviewStep(e,i)}
			<p class="actions-row">
				<gl-button
					class="inline"
					appearance="${eI(t)}"
					href="${eI(this.featurePreviewCommandLink)}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${ss("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<p>
				After continuing, you will have ${tR("day",3-i,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
				repos.<br />
				${"alert"!==t?ey`<br />`:""} For full access to all GitLens Pro features,
				<a href="${ss("gitlens.plus.signUp",this.source)}"
					>start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"!==e.feature)return ey`<slot name="feature"></slot>`;switch(t){case 1:return ey`<p>Try Commit Search</p>
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
						`;default:return ey`<slot name="feature"></slot>`}}renderPromo(){return ey`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo("gate")}
			.source=${this.source}
		></gl-promo>`}};sz.styles=[is,S`
			:host {
				--gk-action-radius: 0.3rem;
			}

			:host([appearance='welcome']) gl-button:only-child {
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
		`],sS([eM("gl-button")],sz.prototype,"button",2),sS([eR({type:Object})],sz.prototype,"featurePreview",2),sS([eR({type:String})],sz.prototype,"featurePreviewCommandLink",2),sS([eR({type:String})],sz.prototype,"appearance",2),sS([eR()],sz.prototype,"featureWithArticleIfNeeded",2),sS([tw({context:"promos"})],sz.prototype,"promos",2),sS([eR({type:Object})],sz.prototype,"source",2),sS([eR({attribute:!1,type:Number})],sz.prototype,"state",2),sS([eR({type:String})],sz.prototype,"webroot",2),sz=sS([eT("gl-feature-gate-plus-state")],sz);var sE=Object.defineProperty,sT=Object.getOwnPropertyDescriptor,sO=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sT(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sE(t,i,s),s};let sD=class extends lit_element_i{render(){var e;if(this.hidden||null!=(e=this.state)&&(e===e0.Paid||e===e0.ProPreview||e===e0.ProTrial))return;let t=this.appearance??(document.body.getAttribute("data-placement")??"editor")==="editor"?"alert":"welcome";return ey`
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
		`}};sD.styles=[is,S`
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
		`],sO([eR({reflect:!0})],sD.prototype,"appearance",2),sO([eR({type:Object})],sD.prototype,"featurePreview",2),sO([eR({type:String})],sD.prototype,"featurePreviewCommandLink",2),sO([eR()],sD.prototype,"featureWithArticleIfNeeded",2),sO([eR({type:Object})],sD.prototype,"source",2),sO([eR({attribute:!1,type:Number})],sD.prototype,"state",2),sO([eR({type:String})],sD.prototype,"webroot",2),sD=sO([eT("gl-feature-gate")],sD);var sR=Object.defineProperty,sL=Object.getOwnPropertyDescriptor;let sB=class extends lit_element_i{render(){return ey`<slot></slot>`}};sB.styles=[r5,S`
			:host {
				display: block;
				text-transform: uppercase;
				font-size: 0.84em;
				line-height: 2.2rem;
				padding-left: 0.6rem;
				padding-right: 0.6rem;
				margin: 0px;
				color: var(--vscode-menu-foreground);
				opacity: 0.6;
				user-select: none;
				-webkit-font-smoothing: auto;
			}
		`],sB=((e,t,i,o)=>{for(var r,s=o>1?void 0:o?sL(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sR(t,i,s),s})([eT("menu-label")],sB);var sM=Object.defineProperty,sI=Object.getOwnPropertyDescriptor,sF=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sI(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sM(t,i,s),s};let sN=class extends lit_element_i{constructor(){super(...arguments),this.icon=!1,this.size=12,this.worktree=!1}render(){let e,t;if(null==this.ref)return ex;switch(this.ref.refType){case"branch":e=this.worktree?"worktree":"branch",t=this.worktree?"gl-worktrees-view":"git-branch";break;case"tag":e="tag",t="tag";break;default:e="revision",t="git-commit"}return ey`<span class="${e}"
			>${this.icon?ey`<code-icon class="icon" icon="${t}" size="${this.size}"></code-icon>`:ex}<span
				class="label"
				>${this.ref.name}</span
			></span
		>`}};sN.styles=S`
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
			margin: 0 0.3rem 0.2rem 0.2rem;
		}

		.tag .icon,
		.worktree .icon {
			margin-right: 0.4rem;
		}

		.label {
			font-weight: var(--font-weight, bold);
		}
	`,sF([eR({type:Boolean,reflect:!0})],sN.prototype,"icon",2),sF([eR({type:Object})],sN.prototype,"ref",2),sF([eR({type:Number})],sN.prototype,"size",2),sF([eR({type:Boolean})],sN.prototype,"worktree",2),sN=sF([eT("gl-ref-name")],sN);var sj=Object.defineProperty,sU=Object.getOwnPropertyDescriptor,sH=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sU(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sj(t,i,s),s};let sq=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.icon=!1,this.size=12,this.worktree=!1}render(){return ey`<gl-button
			appearance="toolbar"
			density="compact"
			?disabled=${this.disabled}
			tooltip="${eI(this.tooltip)}"
			aria-label="${eI(this.tooltip)}"
			><span class="label"
				>${null==this.ref?ey`<slot name="empty">&lt;missing&gt;</slot>`:ey`<gl-ref-name
							?icon=${this.icon}
							.ref=${this.ref}
							.size=${this.size}
							?worktree=${this.worktree}
					  ></gl-ref-name>`}<code-icon class="chevron" icon="chevron-down" size="10"></code-icon></span
		></gl-button>`}};sq.styles=S`
		:host {
			display: inline-block;
			vertical-align: middle;
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;

			--font-weight: normal;
		}

		gl-button {
			max-width: 100%;
		}

		.label {
			display: inline-flex;
			flex-direction: row;
			gap: 0.2rem;
			max-width: 100%;
		}

		gl-ref-name {
			text-decoration: underline;
			text-underline-offset: 2px;
		}

		gl-ref-name:not([icon]) {
			padding-left: 0.2rem;
		}

		.chevron {
			align-self: center;
		}
	`,sH([eR({type:Boolean,reflect:!0})],sq.prototype,"disabled",2),sH([eR({type:Boolean,reflect:!0})],sq.prototype,"icon",2),sH([eR({type:Object})],sq.prototype,"ref",2),sH([eR({type:Number})],sq.prototype,"size",2),sH([eR()],sq.prototype,"tooltip",2),sH([eR({type:Boolean})],sq.prototype,"worktree",2),sq=sH([eT("gl-ref-button")],sq);var sV=Object.defineProperty,sW=Object.getOwnPropertyDescriptor,sG=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sW(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sV(t,i,s),s};let sK=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return ey`<div class="progress-bar"></div>`}};sK.styles=S`
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
	`,sG([eR({reflect:!0})],sK.prototype,"mode",2),sG([eR({type:Boolean})],sK.prototype,"active",2),sG([eR()],sK.prototype,"position",2),sK=sG([eT("progress-indicator")],sK);var sY=Object.defineProperty,sZ=Object.getOwnPropertyDescriptor,sX=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sZ(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sY(t,i,s),s};let sQ=class extends GlAppHost{constructor(){super(...arguments),this._loading=!1,this.onChooseBaseRef=async e=>{if(e.target.disabled)return;let t=await this._ipc.sendRequest(tu,{scope:this.scope,type:"base"});t?.ref!=null&&this._ipc.sendCommand(tm,{scope:this.scope,changes:{base:t.ref}})},this.onChooseHeadRef=async e=>{if(e.target.disabled)return;let t=e.target.getAttribute("location"),i=await this._ipc.sendRequest(tu,{scope:this.scope,type:"head"});if(i?.ref===null){this.config.showAllBranches||this._ipc.sendCommand(tf,{changes:{showAllBranches:!0}});return}if(i?.ref!=null){if("config"===t)return void this._ipc.sendCommand(tm,{scope:this.scope,changes:{head:i.ref,base:this.config.showAllBranches?null:void 0}});this._ipc.sendCommand(tm,{scope:this.scope,changes:{head:i.ref,base:null}}),this.config.showAllBranches&&this._ipc.sendCommand(tf,{changes:{showAllBranches:!1}})}},this.onChoosePath=async e=>{if(e.stopImmediatePropagation(),null==this.repository||null==this.scope)return;let t=await this._ipc.sendRequest(tb,{repoUri:this.repository.uri,ref:this.head,title:"Select a File or Folder to Visualize",initialPath:"file"===this.scope.type?(0,ti.dirname)(this.scope.relativePath):this.scope.relativePath});t?.picked!=null&&this._ipc.sendCommand(tm,{scope:this.scope,changes:{type:t.picked.type,relativePath:t.picked.relativePath},altOrShift:e.altKey||e.shiftKey})},this.onChangeScope=e=>{let t=e.target?.closest("gl-breadcrumb-item-child")??e.target?.closest("gl-breadcrumb-item"),i=t?.getAttribute("type");if(null==i)return;if("repo"===i)return void this._ipc.sendCommand(tm,{scope:this.scope,changes:{type:"repo"},altOrShift:e.altKey||e.shiftKey});let o=t?.getAttribute("value");null!=o&&this._ipc.sendCommand(tm,{scope:this.scope,changes:{type:i,relativePath:o},altOrShift:e.altKey||e.shiftKey})}}createStateProvider(e,t){return new TimelineStateProvider(this,e,t)}onPersistState(e){this._ipc.setPersistedState({config:e.config,scope:e.scope})}connectedCallback(){super.connectedCallback(),eX=this.state.config.abbreviatedShaLength}get allowed(){return this.state.access?.allowed??!1}get base(){return this.scope?.base??this.repository?.ref}get config(){return this.state.config}get head(){return this.scope?.head??this.repository?.ref}get repository(){return this.state.repository}get scope(){return this.state.scope}get isShowAllBranchesSupported(){return!this.repository?.virtual}get isSliceByAllowed(){return this.config.showAllBranches&&this.isSliceBySupported}get isSliceBySupported(){return!this.repository?.virtual&&(this.scope?.type==="file"||this.scope?.type==="folder")}get sliceBy(){return this.isSliceByAllowed?this.config.sliceBy:"author"}get subscription(){return this.state.access?.subscription?.current}renderGate(){return"editor"===this.placement?ey`<gl-feature-gate
				?hidden=${!1!==this.allowed}
				.source=${{source:"timeline",detail:"gate"}}
				.state=${this.subscription?.state}
				><p slot="feature">
					<a href="https://help.gitkraken.com/gitlens/gitlens-features/#visual-file-history-pro"
						>Visual History</a
					>
					<gl-feature-badge></gl-feature-badge>
					&mdash; visualize the evolution of a repository, branch, folder, or file and identify when the most
					impactful changes were made and by whom. Quickly see unmerged changes in files or folders, when
					slicing by branch.
				</p></gl-feature-gate
			>`:ey`<gl-feature-gate
			?hidden=${!1!==this.allowed}
			.source=${{source:"timeline",detail:"gate"}}
			.state=${this.subscription?.state}
			><p slot="feature">
				<a href="https://help.gitkraken.com/gitlens/gitlens-features/#visual-file-history-pro"
					>Visual File History</a
				>
				<gl-feature-badge></gl-feature-badge>
				&mdash; visualize the evolution of a file and quickly identify when the most impactful changes were made
				and by whom. Quickly see unmerged changes in files or folders, when slicing by branch.
			</p></gl-feature-gate
		>`}render(){return ey`${this.renderGate()}
			<div class="container">
				<progress-indicator ?active=${this._loading}></progress-indicator>
				<header class="header" ?hidden=${!this.scope}>
					<span class="details">${this.renderBreadcrumbs()} ${this.renderTimeframe()}</span>
					<span class="toolbox">
						${this.renderConfigPopover()}
						${"view"===this.placement?ey`<gl-button
									appearance="toolbar"
									href="command:gitlens.views.timeline.openInTab"
									tooltip="Open in Editor"
									aria-label="Open in Editor"
							  >
									<code-icon icon="link-external"></code-icon>
							  </gl-button>`:ex}
						${null==this.subscription||!te(this.subscription)?ey`<gl-feature-badge
									placement="bottom"
									.source=${{source:"timeline",detail:"badge"}}
									.subscription=${this.subscription}
							  ></gl-feature-badge>`:ex}
					</span>
				</header>

				<main class="timeline">${this.renderChart()}</main>
			</div> `}renderBreadcrumbs(){return ey`<gl-breadcrumbs>
			${this.renderRepositoryBreadcrumbItem()}
			${this.renderBranchBreadcrumbItem()}${this.renderBreadcrumbPathItems()}
			${"editor"===this.placement?ey` <gl-button
						appearance="toolbar"
						density="compact"
						@click=${this.onChoosePath}
						tooltip="Choose File or Folder to Visualize..."
						aria-label="Choose File or Folder to Visualize..."
						><code-icon slot="prefix" icon="folder-opened"></code-icon>Choose File / Folder...</gl-button
				  >`:ex}
		</gl-breadcrumbs>`}renderRepositoryBreadcrumbItem(){let e=this.state.repository;return null==e?ex:ey`<gl-breadcrumb-item
			collapsibleState="${this.state.scope?.relativePath?"collapsed":"expanded"}"
			icon="repo"
			shrink="10000000"
			type="repo"
		>
			<gl-button
				appearance="toolbar"
				density="compact"
				@click=${this.onChangeScope}
				tooltip="Visualize Repository History&#10;&#10;${e.name}"
				aria-label="Visualize Repository History&#10;&#10;${e.name}"
				>${e.name}</gl-button
			>
		</gl-breadcrumb-item>`}renderBranchBreadcrumbItem(){let{head:e,config:{showAllBranches:t}}=this;return ey`<gl-breadcrumb-item
			collapsibleState="expanded"
			icon="${t?"git-branch":function(e){switch(e?.refType){case"branch":return"git-branch";case"tag":return"tag";default:return"git-commit"}}(e)}"
			shrink="100000"
			type="ref"
		>
			<gl-ref-button
				.ref=${t?void 0:e}
				tooltip="Choose Branch&#10;&#10;${t?"Showing All Branches":e?.name||"HEAD"}"
				aria-label="Choose Branch&#10;&#10;${t?"Showing All Branches":e?.name||"HEAD"}"
				@click=${this.onChooseHeadRef}
				><span slot="empty">All Branches</span></gl-ref-button
			>
		</gl-breadcrumb-item>`}renderBreadcrumbPathItems(){let e=this.state.scope?.relativePath;if(!e)return ex;let t=[],i=e.split("/"),o=i.pop()||"",r=i.length;if(r){let e=i.shift(),o=e,r=ey`
				<gl-breadcrumb-item
					collapsibleState="expanded"
					icon="folder"
					type="${"folder"}"
					value="${e}"
				>
					<gl-button
						appearance="toolbar"
						@click=${this.onChangeScope}
						tooltip="Visualize Folder History&#10;&#10;${e}"
						aria-label="Visualize Folder History &#10;&#10;${e}"
						>${e}</gl-button
					>

					${i.length?ey`<span slot="children" class="breadcrumb-item-children">
								${i.map(e=>(o=`${o}/${e}`,ey`<gl-breadcrumb-item-child
										type="${"folder"}"
										value="${o}"
									>
										<gl-button
											appearance="toolbar"
											@click=${this.onChangeScope}
											tooltip="Visualize Folder History&#10;&#10;${o}"
											aria-label="Visualize Folder History&#10;&#10;${o}"
											>${e}</gl-button
										>
									</gl-breadcrumb-item-child>`))}
						  </span>`:ex}
				</gl-breadcrumb-item>
			`;t.push(r)}return t.push(ey`
			<gl-breadcrumb-item
				collapsibleState="none"
				icon="${eI(this.scope?.type==="folder"?r?void 0:"folder":"file")}"
				shrink="0"
				tooltip="${e}"
				type="${this.scope?.type==="folder"?"folder":"file"}"
				value="${e}"
			>
				<gl-copy-container
					tabindex="0"
					copyLabel="Copy Path&#10;&#10;${e}"
					.content=${e}
					placement="bottom"
				>
					<span>${o}</span>
				</gl-copy-container>
			</gl-breadcrumb-item>
		`),t}renderChart(){return this.scope||"view"!==this.placement?ey`<gl-timeline-chart
			id="chart"
			placement="${this.placement}"
			dateFormat="${this.state.config.dateFormat}"
			.dataPromise=${this.state.dataset}
			head="${this.head?.ref??"HEAD"}"
			.scope=${this.scope}
			shortDateFormat="${this.state.config.shortDateFormat}"
			sliceBy="${this.sliceBy}"
			@gl-commit-select=${this.onChartCommitSelected}
			@gl-loading=${e=>{this._loading=!0,e.detail.finally(()=>this._loading=!1)}}
		>
			<div slot="empty">
				${null==this.scope?ey`<p>Something went wrong</p>
							<p>Please close this tab and try again</p>`:ey`<p>No commits found for the specified time period</p>
							${this.renderPeriodSelect(this.state.config.period)}`}
			</div>
		</gl-timeline-chart>`:ey`<div class="timeline__empty">
				<p>There are no editors open that can provide file history information.</p>
			</div>`}renderConfigPopover(){let{config:{period:e}}=this;return ey`<gl-popover class="config" placement="bottom" trigger="hover focus click" hoist>
			<gl-button slot="anchor" appearance="toolbar">
				<code-icon icon="settings"></code-icon>
			</gl-button>
			<div slot="content" class="config__content">
				<menu-label>View Options</menu-label>
				${this.renderConfigHead()} ${this.renderConfigBase()} ${this.renderConfigShowAllBranches()}
				${this.renderPeriodSelect(e)} ${this.renderConfigSliceBy()}
			</div>
		</gl-popover>`}renderConfigHead(){let{head:e}=this,t=this.config.showAllBranches&&"branch"!==this.sliceBy;return ey`<section>
			<label for="head" ?disabled=${t}>Branch</label>
			<gl-ref-button
				name="head"
				?disabled=${t}
				icon
				tooltip="Change Reference"
				.ref=${e}
				location="config"
				@click=${this.onChooseHeadRef}
			></gl-ref-button>
		</section>`}renderConfigBase(){return ex}renderConfigShowAllBranches(){if(this.repository?.virtual)return ex;let{config:{showAllBranches:e}}=this;return ey`<section>
			<gl-checkbox
				value="all"
				.checked=${e}
				@gl-change-value=${e=>{this._ipc.sendCommand(tf,{changes:{showAllBranches:e.target.checked}})}}
				>View All Branches</gl-checkbox
			>
		</section>`}renderPeriodSelect(e){return ey`<section>
			<span class="select-container">
				<label for="periods">Timeframe</label>
				<select class="select" name="periods" position="below" .value=${e} @change=${this.onPeriodChanged}>
					<option value="7|D" ?selected=${"7|D"===e}>1 week</option>
					<option value="1|M" ?selected=${"1|M"===e}>1 month</option>
					<option value="3|M" ?selected=${"3|M"===e}>3 months</option>
					<option value="6|M" ?selected=${"6|M"===e}>6 months</option>
					<option value="9|M" ?selected=${"9|M"===e}>9 months</option>
					<option value="1|Y" ?selected=${"1|Y"===e}>1 year</option>
					<option value="2|Y" ?selected=${"2|Y"===e}>2 years</option>
					<option value="4|Y" ?selected=${"4|Y"===e}>4 years</option>
					<option value="all" ?selected=${"all"===e}>Full history</option>
				</select>
			</span>
		</section>`}renderConfigSliceBy(){if(!this.isSliceBySupported)return ex;let{sliceBy:e,isSliceByAllowed:t}=this,i=ey`<label for="sliceBy" ?disabled=${!t}>Slice By</label>
			<select
				class="select"
				name="sliceBy"
				position="below"
				.value=${e}
				?disabled=${!t}
				@change=${this.onSliceByChanged}
			>
				<option value="author" ?selected=${"author"===e}>Author</option>
				<option value="branch" ?selected=${"branch"===e}>Branch</option>
			</select>`;return t?ey`<section><span class="select-container">${i}</span></section>`:ey`<section>
			<gl-tooltip style="width: 100%" content="Slicing by branches is only available when viewing all branches">
				<span class="select-container">${i}</span>
			</gl-tooltip>
		</section>`}renderTimeframe(){let e;switch(this.config.period){case"7|D":e="Up to 1wk ago";break;case"1|M":e="Up to 1mo ago";break;case"3|M":e="Up to 3mo ago";break;case"6|M":e="Up to 6mo ago";break;case"9|M":e="Up to 9mo ago";break;case"1|Y":e="Up to 1yr ago";break;case"2|Y":e="Up to 2yr ago";break;case"4|Y":e="Up to 4yr ago";break;case"all":e="All time";break;default:return ex}return ey`<span class="details__timeframe" tabindex="0">${e}</span>`}onChartCommitSelected(e){null!=e.detail.id&&this.fireSelectDataPoint(e.detail)}onPeriodChanged(e){let t=e.target,i=t.options[t.selectedIndex].value;(function(e){if("all"===e)return;let[t,i]=e.split("|");if(isNaN(Number(t))||"D"!==i&&"M"!==i&&"Y"!==i)throw Error(`Invalid period: ${e}`)})(i),this._ipc.sendCommand(tf,{changes:{period:i}})}onSliceByChanged(e){let t=e.target,i=t.options[t.selectedIndex].value;(function(e){if("author"!==e&&"branch"!==e)throw Error(`Invalid slice by: ${e}`)})(i),this._ipc.sendCommand(tf,{changes:{sliceBy:i}})}fireSelectDataPoint(e){let{scope:t}=this;null!=t&&(this._fireSelectDataPointDebounced??=tt(e=>this._ipc.sendCommand(tg,{scope:t,...e}),250,{maxWait:"file"===t.type?500:void 0}),this._fireSelectDataPointDebounced(e))}};sQ.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sQ.styles=[is,ia,il],sX([eM("#chart")],sQ.prototype,"_chart",2),sX([eL()],sQ.prototype,"_loading",2),sQ=sX([eT("gl-timeline-app")],sQ);export{sQ as GlTimelineApp};