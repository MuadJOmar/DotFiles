var e,t={},o={};function s(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,s),r.exports}s.m=t,s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,o)=>(s.f[o](e,t),t)),[])),s.u=e=>"lib-billboard.js",s.miniCssF=e=>{},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},s.l=(t,o,n,r)=>{if(e[t])e[t].push(o);else{var a,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),h=0;h<c.length;h++){var d=c[h];if(d.getAttribute("src")==t){a=d;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=t),e[t]=[o];var u=(o,s)=>{a.onerror=a.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(s))),o)return o(s)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),l&&document.head.appendChild(a)}},s.p="#{root}/dist/webviews/",void 0!==s&&Object.defineProperty(s,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),(()=>{var e={122:0};s.f.j=(t,o)=>{var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise(((o,s)=>n=e[t]=[o,s]));o.push(n[2]=r);var a=s.p+s.u(t),l=new Error;s.l(a,(o=>{if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}}),"chunk-"+t,t)}};var t=(t,o)=>{var n,r,[a,l,c]=o,h=0;if(a.some((t=>0!==e[t]))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(c)c(s)}for(t&&t(o);h<a.length;h++)r=a[h],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n={};s.d(n,{h:()=>TimelineApp});const r=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===r.trustedTypes&&(r.trustedTypes={createPolicy:(e,t)=>t});const a={configurable:!1,enumerable:!1,writable:!1};void 0===r.FAST&&Reflect.defineProperty(r,"FAST",Object.assign({value:Object.create(null)},a));const l=r.FAST;if(void 0===l.getById){const e=Object.create(null);Reflect.defineProperty(l,"getById",Object.assign({value(t,o){let s=e[t];return void 0===s&&(s=o?e[t]=o():null),s}},a))}const c=Object.freeze([]);function h(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let s=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==s;)o=e.get(s),s=Reflect.getPrototypeOf(s);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const d=r.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function s(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function n(){let t=0;for(;t<e.length;)if(s(e[t]),t++,t>1024){for(let o=0,s=e.length-t;o<s;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&r.requestAnimationFrame(n),e.push(t)},process:n})})),u=r.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let p=u;const g=`fast-${Math.random().toString(36).substring(2,8)}`,f=`${g}{`,m=`}${g}`,v=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(p!==u)throw new Error("The HTML policy can only be set once.");p=e},createHTML:e=>p.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(g),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${g}:`,"")),createInterpolationPlaceholder:e=>`${f}${e}${m}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${g}:${e}--\x3e`,queueUpdate:d.enqueue,processUpdates:d.process,nextUpdate:()=>new Promise(d.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class SubscriberSet{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,s=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==s&&s.handleChange(o,e)}else for(let s=0,n=t.length;s<n;++s)t[s].handleChange(o,e)}}class PropertyChangeNotifier{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new SubscriberSet(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new SubscriberSet(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const y=l.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=v.queueUpdate;let s,n=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=n(e):t.set(e,o=new PropertyChangeNotifier(e))),o}const a=h();class DefaultObservableAccessor{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==s&&s.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,s=e[o];if(s!==t){e[o]=t;const n=e[this.callback];"function"==typeof n&&n.call(e,s,t),r(e).notify(this.name)}}}class BindingObserverImplementation extends SubscriberSet{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const n=this.binding(e,t);return s=o,n}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,n=r(e),a=null===o?this.first:{};if(a.propertySource=e,a.propertyName=t,a.notifier=n,n.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;s=void 0,t=o.propertySource[o.propertyName],s=this,e===t&&(this.needsRefresh=!0)}o.next=a}this.last=a}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){n=e},getNotifier:r,track(e,t){void 0!==s&&s.watch(e,t)},trackVolatile(){void 0!==s&&(s.needsRefresh=!0)},notify(e,t){r(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new DefaultObservableAccessor(t)),a(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:a,binding(e,t,o=this.isVolatileBinding(e)){return new BindingObserverImplementation(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function w(e,t){y.defineProperty(e,t)}const x=l.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class ExecutionContext{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return x.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){x.set(e)}}y.defineProperty(ExecutionContext.prototype,"index"),y.defineProperty(ExecutionContext.prototype,"length");const S=Object.seal(new ExecutionContext);class ElementStyles{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function C(e){return e.map((e=>e instanceof ElementStyles?C(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function $(e){return e.map((e=>e instanceof ElementStyles?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}ElementStyles.create=(()=>{if(v.supportsAdoptedStyleSheets){const e=new Map;return t=>new AdoptedStyleSheetsStyles(t,e)}return e=>new StyleElementStyles(e)})();const A=Symbol("prependToAdoptedStyleSheets");function P(e){const t=[],o=[];return e.forEach((e=>(e[A]?t:o).push(e))),{prepend:t,append:o}}let T=(e,t)=>{const{prepend:o,append:s}=P(t);e.adoptedStyleSheets=[...o,...e.adoptedStyleSheets,...s]},_=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(v.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),T=(e,t)=>{const{prepend:o,append:s}=P(t);e.adoptedStyleSheets.splice(0,0,...o),e.adoptedStyleSheets.push(...s)},_=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class AdoptedStyleSheetsStyles extends ElementStyles{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=$(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=C(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){T(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){_(e,this.styleSheets),super.removeStylesFrom(e)}}let O=0;class StyleElementStyles extends ElementStyles{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=$(e),this.styleSheets=C(e),this.styleClass="fast-style-class-"+ ++O}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<t.length;s++){const n=document.createElement("style");n.innerHTML=t[s],n.className=o,e.append(n)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,s=t.length;o<s;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const D=Object.freeze({locate:h()}),E={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},F={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class AttributeDefinition{constructor(e,t,o=t.toLowerCase(),s="reflect",n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=s,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===s&&void 0===n&&(this.converter=E)}setValue(e,t){const o=e[this.fieldName],s=this.converter;void 0!==s&&(t=s.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return y.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||v.queueUpdate((()=>{o.add(e);const s=e[this.fieldName];switch(t){case"reflect":const t=this.converter;v.setAttribute(e,this.attribute,void 0!==t?t.toView(s):s);break;case"boolean":v.setBooleanAttribute(e,this.attribute,s)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(D.locate(e));for(let s=0,n=t.length;s<n;++s){const n=t[s];if(void 0!==n)for(let t=0,s=n.length;t<s;++t){const s=n[t];"string"==typeof s?o.push(new AttributeDefinition(e,s)):o.push(new AttributeDefinition(e,s.property,s.attribute,s.mode,s.converter))}}return o}}function B(e,t){let o;function s(e,t){arguments.length>1&&(o.property=t),D.locate(e.constructor).push(o)}return arguments.length>1?(o={},void s(e,t)):(o=void 0===e?{}:e,s)}const N={mode:"open"},z={},U=l.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class fast_definitions_FASTElementDefinition{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=AttributeDefinition.collect(e,t.attributes),s=new Array(o.length),n={},r={};for(let e=0,t=o.length;e<t;++e){const t=o[e];s[e]=t.attribute,n[t.name]=t,r[t.attribute]=t}this.attributes=o,this.observedAttributes=s,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?N:null===t.shadowOptions?void 0:Object.assign(Object.assign({},N),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?z:Object.assign(Object.assign({},z),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?ElementStyles.create(t.styles):t.styles instanceof ElementStyles?t.styles:ElementStyles.create([t.styles])}get isDefined(){return!!U.getByType(this.type)}define(e=customElements){const t=this.type;if(U.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,s=e.length;t<s;++t)y.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}fast_definitions_FASTElementDefinition.forType=U.getByType;function W(e,t,o,s){var n,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const j=new WeakMap,q={bubbles:!0,composed:!0,cancelable:!0};function G(e){return e.shadowRoot||j.get(e)||null}class Controller extends PropertyChangeNotifier{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&j.set(e,t)}const s=y.getAccessors(e);if(s.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,n=s.length;o<n;++o){const n=s[o].name,r=e[n];void 0!==r&&(delete e[n],t[n]=r)}}}get isConnected(){return y.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,y.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=G(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=G(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,s=[];for(let n=0;n<o;++n){const o=e[n];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),s.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].bind(e,S)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const s=e.length,n=[];for(let r=0;r<s;++r){const s=e[r];if(o.has(s)){const e=o.get(s)-1;0===e||t?o.delete(s)&&n.push(s):o.set(s,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,S);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,S);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const s=this.definition.attributeLookup[e];void 0!==s&&s.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},q),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let s=0,n=o.length;s<n;++s){const n=o[s];e[n]=t[n]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=G(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||v.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=fast_definitions_FASTElementDefinition.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new Controller(e,o)}}function Q(e){return class extends e{constructor(){super(),Controller.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const K=Object.assign(Q(HTMLElement),{from:e=>Q(e),define:(e,t)=>new fast_definitions_FASTElementDefinition(e,t).define().type});const Y=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(o){Reflect.defineMetadata(e,t,o)}},Reflect.defineMetadata=function(e,t,o){let s=Y.get(o);void 0===s&&Y.set(o,s=new Map),s.set(e,t)},Reflect.getOwnMetadata=function(e,t){const o=Y.get(t);if(void 0!==o)return o.get(e)});class ResolverBuilder{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,ye(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:o,key:s}=this;return this.container=this.key=void 0,o.registerResolver(s,new ResolverImpl(s,e,t))}}function J(e){const t=e.slice(),o=Object.keys(e),s=o.length;let n;for(let r=0;r<s;++r)n=o[r],Pe(n)||(t[n]=e[n]);return t}const Z=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new ResolverImpl(e,1,e),transient:e=>new ResolverImpl(e,2,e)}),X=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Z.singleton})}),ee=new Map;function te(e){return t=>Reflect.getOwnMetadata(e,t)}let ie=null;const oe=Object.freeze({createContainer:e=>new ContainerImpl(null,Object.assign({},X.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:oe.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(me,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||oe.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new ContainerImpl(e,Object.assign({},X.default,t,{parentLocator:oe.findParentContainer})):ie||(ie=new ContainerImpl(null,Object.assign({},X.default,t,{parentLocator:()=>null}))),getDesignParamtypes:te("design:paramtypes"),getAnnotationParamtypes:te("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=ee.get(e);if(void 0===t){const o=e.inject;if(void 0===o){const o=oe.getDesignParamtypes(e),s=oe.getAnnotationParamtypes(e);if(void 0===o)if(void 0===s){const o=Object.getPrototypeOf(e);t="function"==typeof o&&o!==Function.prototype?J(oe.getDependencies(o)):[]}else t=J(s);else if(void 0===s)t=J(o);else{t=J(o);let e,n=s.length;for(let o=0;o<n;++o)e=s[o],void 0!==e&&(t[o]=e);const r=Object.keys(s);let a;n=r.length;for(let e=0;e<n;++e)a=r[e],Pe(a)||(t[a]=s[a])}}else t=J(o);ee.set(e,t)}return t},defineProperty(e,t,o,s=!1){const n=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[n];if(void 0===e){const r=this instanceof HTMLElement?oe.findResponsibleContainer(this):oe.getOrCreateDOMContainer();if(e=r.get(o),this[n]=e,s&&this instanceof K){const s=this.$fastController,r=()=>{oe.findResponsibleContainer(this).get(o)!==this[n]&&(this[n]=e,s.notify(t))};s.subscribe({handleChange:r},"isConnected")}}return e}})},createInterface(e,t){const o="function"==typeof e?e:t,s="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Ce,n="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),r=function(e,t,o){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${r.friendlyName}'`);if(t)oe.defineProperty(e,t,r,n);else{oe.getOrCreateAnnotationParamTypes(e)[o]=r}};return r.$isInterface=!0,r.friendlyName=s??"(anonymous)",null!=o&&(r.register=function(e,t){return o(new ResolverBuilder(e,null!=t?t:r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject:(...e)=>function(t,o,s){if("number"==typeof s){const o=oe.getOrCreateAnnotationParamTypes(t),n=e[0];void 0!==n&&(o[s]=n)}else if(o)oe.defineProperty(t,o,e[0]);else{const o=s?oe.getOrCreateAnnotationParamTypes(s.value):oe.getOrCreateAnnotationParamTypes(t);let n;for(let t=0;t<e.length;++t)n=e[t],void 0!==n&&(o[t]=n)}},transient:e=>(e.register=function(t){return we.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=re)=>(e.register=function(t){return we.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),se=oe.createInterface("Container");function ne(e){return function(t){const o=function(e,t,s){oe.inject(o)(e,t,s)};return o.$isResolver=!0,o.resolve=function(o,s){return e(t,o,s)},o}}oe.inject;const re={scoped:!1};ae=(e,t,o,s)=>o.getAll(e,s);var ae;ne(((e,t,o)=>()=>o.get(e))),ne(((e,t,o)=>o.has(e,!0)?o.get(e):void 0));function le(e,t,o){oe.inject(le)(e,t,o)}le.$isResolver=!0,le.resolve=()=>{};ne(((e,t,o)=>{const s=ce(e,t),n=new ResolverImpl(e,0,s);return o.registerResolver(e,n),s})),ne(((e,t,o)=>ce(e,t)));function ce(e,t){return t.getFactory(e).construct(t)}class ResolverImpl{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const o=e.getFactory(this.state);if(null===o)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(s=null===(o=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===o?void 0:o.call(t,e))&&void 0!==s?s:null;default:return null}}}function he(e){return this.get(e)}function de(e,t){return t(e)}class FactoryImpl{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return o=void 0===t?new this.Type(...this.dependencies.map(he,e)):new this.Type(...this.dependencies.map(he,e),...t),null==this.transformers?o:this.transformers.reduce(de,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const ue={$isResolver:!0,resolve:(e,t)=>t};function pe(e){return"function"==typeof e.register}function ge(e){return function(e){return pe(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const fe=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),me="__DI_LOCATE_PARENT__",be=new Map;class ContainerImpl{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(se,ue),e instanceof Node&&e.addEventListener(me,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,o,s,n,r;const a=this.context;for(let l=0,c=e.length;l<c;++l)if(t=e[l],ke(t))if(pe(t))t.register(this,a);else if(void 0!==t.prototype)we.singleton(t,t).register(this);else for(o=Object.keys(t),n=0,r=o.length;n<r;++n)s=t[o[n]],ke(s)&&(pe(s)?s.register(this,a):this.register(s));return--this.registerDepth,this}registerResolver(e,t){xe(e);const o=this.resolvers,s=o.get(e);return null==s?o.set(e,t):s instanceof ResolverImpl&&4===s.strategy?s.state.push(t):o.set(e,new ResolverImpl(e,4,[s,t])),t}registerTransformer(e,t){const o=this.getResolver(e);if(null==o)return!1;if(o.getFactory){const e=o.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(xe(e),void 0!==e.resolve)return e;let o,s=this;for(;null!=s;){if(o=s.resolvers.get(e),null!=o)return o;if(null==s.parent){const o=ge(e)?this:s;return t?this.jitRegister(e,o):null}s=s.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(xe(e),e.$isResolver)return e.resolve(this,this);let t,o=this;for(;null!=o;){if(t=o.resolvers.get(e),null!=t)return t.resolve(o,this);if(null==o.parent){const s=ge(e)?this:o;return t=this.jitRegister(e,s),t.resolve(o,this)}o=o.parent}throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){xe(e);const o=this;let s,n=o;if(t){let t=c;for(;null!=n;)s=n.resolvers.get(e),null!=s&&(t=t.concat(Se(s,n,o))),n=n.parent;return t}for(;null!=n;){if(s=n.resolvers.get(e),null!=s)return Se(s,n,o);if(n=n.parent,null==n)return c}return c}getFactory(e){let t=be.get(e);if(void 0===t){if($e(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);be.set(e,t=new FactoryImpl(e,oe.getDependencies(e)))}return t}registerFactory(e,t){be.set(e,t)}createChild(e){return new ContainerImpl(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(fe.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(pe(e)){const o=e.register(t);if(!(o instanceof Object)||null==o.resolve){const o=t.resolvers.get(e);if(null!=o)return o;throw new Error("A valid resolver was not returned from the static register method")}return o}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}const ve=new WeakMap;function ye(e){return function(t,o,s){if(ve.has(s))return ve.get(s);const n=e(t,o,s);return ve.set(s,n),n}}const we=Object.freeze({instance:(e,t)=>new ResolverImpl(e,0,t),singleton:(e,t)=>new ResolverImpl(e,1,t),transient:(e,t)=>new ResolverImpl(e,2,t),callback:(e,t)=>new ResolverImpl(e,3,t),cachedCallback:(e,t)=>new ResolverImpl(e,3,ye(t)),aliasTo:(e,t)=>new ResolverImpl(t,5,e)});function xe(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Se(e,t,o){if(e instanceof ResolverImpl&&4===e.strategy){const s=e.state;let n=s.length;const r=new Array(n);for(;n--;)r[n]=s[n].resolve(t,o);return r}return[e.resolve(t,o)]}const Ce="(anonymous)";function ke(e){return"object"==typeof e&&null!==e||"function"==typeof e}const $e=function(){const e=new WeakMap;let t=!1,o="",s=0;return function(n){return t=e.get(n),void 0===t&&(o=n.toString(),s=o.length,t=s>=29&&s<=100&&125===o.charCodeAt(s-1)&&o.charCodeAt(s-2)<=32&&93===o.charCodeAt(s-3)&&101===o.charCodeAt(s-4)&&100===o.charCodeAt(s-5)&&111===o.charCodeAt(s-6)&&99===o.charCodeAt(s-7)&&32===o.charCodeAt(s-8)&&101===o.charCodeAt(s-9)&&118===o.charCodeAt(s-10)&&105===o.charCodeAt(s-11)&&116===o.charCodeAt(s-12)&&97===o.charCodeAt(s-13)&&110===o.charCodeAt(s-14)&&88===o.charCodeAt(s-15),e.set(n,t)),t}}(),Ae={};function Pe(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ae[e];if(void 0!==t)return t;const o=e.length;if(0===o)return Ae[e]=!1;let s=0;for(let t=0;t<o;++t)if(s=e.charCodeAt(t),0===t&&48===s&&o>1||s<48||s>57)return Ae[e]=!1;return Ae[e]=!0}default:return!1}}function Re(e){return`${e.toLowerCase()}:presentation`}const Te=new Map,_e=Object.freeze({define(e,t,o){const s=Re(e);void 0===Te.get(s)?Te.set(s,t):Te.set(s,!1),o.register(we.instance(s,t))},forTag(e,t){const o=Re(e),s=Te.get(o);if(!1===s){return oe.findResponsibleContainer(t).get(o)}return s||null}});class DefaultComponentPresentation{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?ElementStyles.create(t):t instanceof ElementStyles?t:ElementStyles.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class FoundationElement extends K{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=_e.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new FoundationElementRegistry(this===FoundationElement?class extends FoundationElement{}:this,e,t)}}function Oe(e,t,o){return"function"==typeof e?e(t,o):e}W([w],FoundationElement.prototype,"template",void 0),W([w],FoundationElement.prototype,"styles",void 0);class FoundationElementRegistry{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const o=this.definition,s=this.overrideDefinition,n=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new DefaultComponentPresentation(Oe(o.template,e,o),Oe(o.styles,e,o));e.definePresentation(t);let n=Oe(o.shadowOptions,e,o);e.shadowRootMode&&(n?s.shadowOptions||(n.mode=e.shadowRootMode):null!==n&&(n={mode:e.shadowRootMode})),e.defineElement({elementOptions:Oe(o.elementOptions,e,o),shadowOptions:n,attributes:Oe(o.attributes,e,o)})}})}}class CSSDirective{createCSS(){return""}createBehavior(){}}function De(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Ee=document.createElement("div");class QueuedStyleSheetTarget{setProperty(e,t){v.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){v.queueUpdate((()=>this.target.removeProperty(e)))}}class DocumentStyleSheetTarget extends QueuedStyleSheetTarget{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class HeadStyleElementStyleSheetTarget extends QueuedStyleSheetTarget{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class StyleElementStyleSheetTarget{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),y.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),v.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),v.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:o}=this.style;if(o){const e=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[e].style}else this.target=null}}W([w],StyleElementStyleSheetTarget.prototype,"target",void 0);class ElementStyleSheetTarget{constructor(e){this.target=e.style}setProperty(e,t){v.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){v.queueUpdate((()=>this.target.removeProperty(e)))}}class RootStyleSheetTarget{setProperty(e,t){RootStyleSheetTarget.properties[e]=t;for(const o of RootStyleSheetTarget.roots.values())Fe.getOrCreate(RootStyleSheetTarget.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete RootStyleSheetTarget.properties[e];for(const t of RootStyleSheetTarget.roots.values())Fe.getOrCreate(RootStyleSheetTarget.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=RootStyleSheetTarget;if(!t.has(e)){t.add(e);const o=Fe.getOrCreate(this.normalizeRoot(e));for(const e in RootStyleSheetTarget.properties)o.setProperty(e,RootStyleSheetTarget.properties[e])}}static unregisterRoot(e){const{roots:t}=RootStyleSheetTarget;if(t.has(e)){t.delete(e);const o=Fe.getOrCreate(RootStyleSheetTarget.normalizeRoot(e));for(const e in RootStyleSheetTarget.properties)o.removeProperty(e)}}static normalizeRoot(e){return e===Ee?document:e}}RootStyleSheetTarget.roots=new Set,RootStyleSheetTarget.properties={};const Ie=new WeakMap,Le=v.supportsAdoptedStyleSheets?class ConstructableStyleSheetTarget extends QueuedStyleSheetTarget{constructor(e){super();const t=new CSSStyleSheet;t[A]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(ElementStyles.create([t]))}}:StyleElementStyleSheetTarget,Fe=Object.freeze({getOrCreate(e){if(Ie.has(e))return Ie.get(e);let t;return e===Ee?t=new RootStyleSheetTarget:e instanceof Document?t=v.supportsAdoptedStyleSheets?new DocumentStyleSheetTarget:new HeadStyleElementStyleSheetTarget:t=e instanceof K?new Le(e):new ElementStyleSheetTarget(e),Ie.set(e,t),t}});class DesignTokenImpl extends CSSDirective{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=DesignTokenImpl.uniqueId(),DesignTokenImpl.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new DesignTokenImpl({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return DesignTokenImpl.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=DesignTokenNode.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof DesignTokenImpl&&(t=this.alias(t)),DesignTokenNode.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),DesignTokenNode.existsFor(e)&&DesignTokenNode.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Ee,e),this}subscribe(e,t){const o=this.getOrCreateSubscriberSet(t);t&&!DesignTokenNode.existsFor(t)&&DesignTokenNode.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){const o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}DesignTokenImpl.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),DesignTokenImpl.tokensById=new Map;class DesignTokenBindingObserver{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=y.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,S))}}class Store{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),y.getNotifier(this).notify(e.id))}get(e){return y.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Be=new WeakMap,Me=new WeakMap;class DesignTokenNode{constructor(e){this.target=e,this.store=new Store,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const o=DesignTokenImpl.getTokenById(t);o&&(o.notify(this.target),this.updateCSSTokenReflection(e,o))}},Be.set(e,this),y.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof K?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Be.get(e)||new DesignTokenNode(e)}static existsFor(e){return Be.has(e)}static findParent(e){if(Ee!==e.target){let t=De(e.target);for(;null!==t;){if(Be.has(t))return Be.get(t);t=De(t)}return DesignTokenNode.getOrCreate(Ee)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==Ee?DesignTokenNode.getOrCreate(Ee):null}while(null!==o);return null}get parent(){return Me.get(this)||null}updateCSSTokenReflection(e,t){if(DesignTokenImpl.isCSSDesignToken(t)){const o=this.parent,s=this.isReflecting(t);if(o){const n=o.get(t),r=e.get(t);n===r||s?n===r&&s&&this.stopReflectToCSS(t):this.reflectToCSS(t)}else s||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const o=this.getRaw(e);return void 0!==o?(this.hydrate(e,o),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=DesignTokenNode.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){DesignTokenImpl.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),DesignTokenImpl.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=DesignTokenNode.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){Me.get(this).removeChild(this)}}appendChild(e){e.parent&&Me.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Me.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),y.getNotifier(this.store).subscribe(e);for(const[t,o]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):o)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),y.getNotifier(this.store).unsubscribe(e),e.parent===this&&Me.delete(e)}contains(e){return function(e,t){let o=t;for(;null!==o;){if(o===e)return!0;o=De(o)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),DesignTokenNode.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),DesignTokenNode.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const o=DesignTokenImpl.getTokenById(t);o&&(this.hydrate(o,this.getRaw(o)),this.updateCSSTokenReflection(this.store,o))}hydrate(e,t){if(!this.has(e)){const o=this.bindingObservers.get(e);DesignTokenImpl.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const o=new DesignTokenBindingObserver(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}DesignTokenNode.cssCustomPropertyReflector=new class CustomPropertyReflector{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:o}=e;this.add(t,o)}add(e,t){Fe.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(DesignTokenNode.getOrCreate(t).get(e)))}remove(e,t){Fe.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},W([w],DesignTokenNode.prototype,"children",void 0);const Ve=Object.freeze({create:function(e){return DesignTokenImpl.from(e)},notifyConnection:e=>!(!e.isConnected||!DesignTokenNode.existsFor(e))&&(DesignTokenNode.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!DesignTokenNode.existsFor(e))&&(DesignTokenNode.getOrCreate(e).unbind(),!0),registerRoot(e=Ee){RootStyleSheetTarget.registerRoot(e)},unregisterRoot(e=Ee){RootStyleSheetTarget.unregisterRoot(e)}}),Ne=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ze=new Map,He=new Map;let Ue=null;const We=oe.createInterface((e=>e.cachedCallback((e=>(null===Ue&&(Ue=new DefaultDesignSystem(null,e)),Ue))))),je=Object.freeze({tagFor:e=>He.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return oe.findResponsibleContainer(e).get(We)},getOrCreate(e){if(!e)return null===Ue&&(Ue=oe.getOrCreateDOMContainer().get(We)),Ue;const t=e.$$designSystem$$;if(t)return t;const o=oe.getOrCreateDOMContainer(e);if(o.has(We,!1))return o.get(We);{const t=new DefaultDesignSystem(e,o);return o.register(we.instance(We,t)),t}}});class DefaultDesignSystem{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ne.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,o=[],s=this.disambiguate,n=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(e,r,a){const l=function(e,t,o){return"string"==typeof e?{name:e,type:t,callback:o}:e}(e,r,a),{name:c,callback:h,baseClass:d}=l;let{type:u}=l,p=c,g=ze.get(p),f=!0;for(;g;){const e=s(p,u,g);switch(e){case Ne.ignoreDuplicate:return;case Ne.definitionCallbackOnly:f=!1,g=void 0;break;default:p=e,g=ze.get(p)}}f&&((He.has(u)||u===FoundationElement)&&(u=class extends u{}),ze.set(p,u),He.set(u,p),d&&He.set(d,p)),o.push(new ElementDefinitionEntry(t,p,u,n,h,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&Ve.registerRoot(this.designTokenRoot)),t.registerWithContext(r,...e);for(const e of o)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class ElementDefinitionEntry{constructor(e,t,o,s,n,r){this.container=e,this.name=t,this.type=o,this.shadowRootMode=s,this.callback=n,this.willDefine=r,this.definition=null}definePresentation(e){_e.define(this.name,e,this.container)}defineElement(e){this.definition=new fast_definitions_FASTElementDefinition(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return je.tagFor(e)}}let qe=0;function Ge(e=""){return`${e}${qe++}`}var Qe;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Qe||(Qe={}));const Ke="ArrowDown",Ye="ArrowUp",Je="Enter",Ze="Escape",Xe="Home",et="End",tt="Tab";function it(...e){return e.every((e=>e instanceof HTMLElement))}let ot;class ARIAGlobalStatesAndProperties{}W([B({attribute:"aria-atomic"})],ARIAGlobalStatesAndProperties.prototype,"ariaAtomic",void 0),W([B({attribute:"aria-busy"})],ARIAGlobalStatesAndProperties.prototype,"ariaBusy",void 0),W([B({attribute:"aria-controls"})],ARIAGlobalStatesAndProperties.prototype,"ariaControls",void 0),W([B({attribute:"aria-current"})],ARIAGlobalStatesAndProperties.prototype,"ariaCurrent",void 0),W([B({attribute:"aria-describedby"})],ARIAGlobalStatesAndProperties.prototype,"ariaDescribedby",void 0),W([B({attribute:"aria-details"})],ARIAGlobalStatesAndProperties.prototype,"ariaDetails",void 0),W([B({attribute:"aria-disabled"})],ARIAGlobalStatesAndProperties.prototype,"ariaDisabled",void 0),W([B({attribute:"aria-errormessage"})],ARIAGlobalStatesAndProperties.prototype,"ariaErrormessage",void 0),W([B({attribute:"aria-flowto"})],ARIAGlobalStatesAndProperties.prototype,"ariaFlowto",void 0),W([B({attribute:"aria-haspopup"})],ARIAGlobalStatesAndProperties.prototype,"ariaHaspopup",void 0),W([B({attribute:"aria-hidden"})],ARIAGlobalStatesAndProperties.prototype,"ariaHidden",void 0),W([B({attribute:"aria-invalid"})],ARIAGlobalStatesAndProperties.prototype,"ariaInvalid",void 0),W([B({attribute:"aria-keyshortcuts"})],ARIAGlobalStatesAndProperties.prototype,"ariaKeyshortcuts",void 0),W([B({attribute:"aria-label"})],ARIAGlobalStatesAndProperties.prototype,"ariaLabel",void 0),W([B({attribute:"aria-labelledby"})],ARIAGlobalStatesAndProperties.prototype,"ariaLabelledby",void 0),W([B({attribute:"aria-live"})],ARIAGlobalStatesAndProperties.prototype,"ariaLive",void 0),W([B({attribute:"aria-owns"})],ARIAGlobalStatesAndProperties.prototype,"ariaOwns",void 0),W([B({attribute:"aria-relevant"})],ARIAGlobalStatesAndProperties.prototype,"ariaRelevant",void 0),W([B({attribute:"aria-roledescription"})],ARIAGlobalStatesAndProperties.prototype,"ariaRoledescription",void 0);class HTMLDirective{constructor(){this.targetIndex=0}}class TargetedHTMLDirective extends HTMLDirective{constructor(){super(...arguments),this.createPlaceholder=v.createInterpolationPlaceholder}}class AttachedBehaviorHTMLDirective extends HTMLDirective{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return v.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function st(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=y.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function nt(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function rt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function at(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function lt(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function ct(e){v.setAttribute(this.target,this.targetName,e)}function ht(e){v.setBooleanAttribute(this.target,this.targetName,e)}function dt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function ut(e){this.target[this.targetName]=e}function pt(e){const t=this.classVersions||Object.create(null),o=this.target;let s=this.version||0;if(null!=e&&e.length){const n=e.split(/\s+/);for(let e=0,r=n.length;e<r;++e){const r=n[e];""!==r&&(t[r]=s,o.classList.add(r))}}if(this.classVersions=t,this.version=s+1,0!==s){s-=1;for(const e in t)t[e]===s&&o.classList.remove(e)}}class HTMLBindingDirective extends TargetedHTMLDirective{constructor(e){super(),this.binding=e,this.bind=st,this.unbind=rt,this.updateTarget=ct,this.isBindingVolatile=y.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=ut,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>v.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=ht;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=nt,this.unbind=lt;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=pt)}}targetAtContent(){this.updateTarget=dt,this.unbind=at}createBehavior(e){return new BindingBehavior(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class BindingBehavior{constructor(e,t,o,s,n,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=s,this.unbind=n,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){ExecutionContext.setEvent(e);const t=this.binding(this.source,this.context);ExecutionContext.setEvent(null),!0!==t&&e.preventDefault()}}let gt=null;class CompilationContext{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){gt=this}static borrow(e){const t=gt||new CompilationContext;return t.directives=e,t.reset(),gt=null,t}}function ft(e){if(1===e.length)return e[0];let t;const o=e.length,s=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),n=new HTMLBindingDirective(((e,t)=>{let n="";for(let r=0;r<o;++r)n+=s[r](e,t);return n}));return n.targetName=t,n}const mt=m.length;function bt(e,t){const o=t.split(f);if(1===o.length)return null;const s=[];for(let t=0,n=o.length;t<n;++t){const n=o[t],r=n.indexOf(m);let a;if(-1===r)a=n;else{const t=parseInt(n.substring(0,r));s.push(e.directives[t]),a=n.substring(r+mt)}""!==a&&s.push(a)}return s}function vt(e,t,o=!1){const s=t.attributes;for(let n=0,r=s.length;n<r;++n){const a=s[n],l=a.value,c=bt(e,l);let h=null;null===c?o&&(h=new HTMLBindingDirective((()=>l)),h.targetName=a.name):h=ft(c),null!==h&&(t.removeAttributeNode(a),n--,r--,e.addFactory(h))}}function yt(e,t,o){const s=bt(e,t.textContent);if(null!==s){let n=t;for(let r=0,a=s.length;r<a;++r){const a=s[r],l=0===r?t:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);"string"==typeof a?l.textContent=a:(l.textContent=" ",e.captureContentBinding(a)),n=l,e.targetIndex++,l!==t&&o.nextNode()}e.targetIndex--}}const wt=document.createRange();class HTMLView{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let s,n=this.firstChild;for(;n!==t;)s=n.nextSibling,o.insertBefore(n,e),n=s;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,s=this.firstChild;for(;s!==t;)o=s.nextSibling,e.appendChild(s),s=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,s=this.firstChild;for(;s!==t;)o=s.nextSibling,e.removeChild(s),s=o;e.removeChild(t);const n=this.behaviors,r=this.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(r)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const s=this.source;this.source=e,this.context=t;for(let n=0,r=o.length;n<r;++n){const r=o[n];r.unbind(s),r.bind(e,t)}}else{this.source=e,this.context=t;for(let s=0,n=o.length;s<n;++s)o[s].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,s=e.length;o<s;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){wt.setStartBefore(e[0].firstChild),wt.setEndAfter(e[e.length-1].lastChild),wt.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],s=o.behaviors,n=o.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(n)}}}}class ViewTemplate{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=v.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const s=CompilationContext.borrow(t);vt(s,e,!0);const n=s.behaviorFactories;s.reset();const r=v.createTemplateWalker(o);let a;for(;a=r.nextNode();)switch(s.targetIndex++,a.nodeType){case 1:vt(s,a);break;case 3:yt(s,a,r);break;case 8:v.isMarker(a)&&s.addFactory(t[v.extractDirectiveIndexFromMarker(a)])}let l=0;(v.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),l=-1);const c=s.behaviorFactories;return s.release(),{fragment:o,viewBehaviorFactories:c,hostBehaviorFactories:n,targetOffset:l}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,s=new Array(this.behaviorCount),n=v.createTemplateWalker(t);let r=0,a=this.targetOffset,l=n.nextNode();for(let e=o.length;r<e;++r){const e=o[r],t=e.targetIndex;for(;null!==l;){if(a===t){s[r]=e.createBehavior(l);break}l=n.nextNode(),a++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,n=t.length;o<n;++o,++r)s[r]=t[o].createBehavior(e)}return new HTMLView(t,s)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const s=this.create(o);return s.bind(e,S),s.appendTo(t),s}}const xt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function St(e,...t){const o=[];let s="";for(let n=0,r=e.length-1;n<r;++n){const r=e[n];let a=t[n];if(s+=r,a instanceof ViewTemplate){const e=a;a=()=>e}if("function"==typeof a&&(a=new HTMLBindingDirective(a)),a instanceof TargetedHTMLDirective){const e=xt.exec(r);null!==e&&(a.targetName=e[2])}a instanceof HTMLDirective?(s+=a.createPlaceholder(o.length),o.push(a)):s+=a}return s+=e[e.length-1],new ViewTemplate(s,o)}class RefBehavior{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Ct(e){return new AttachedBehaviorHTMLDirective("fast-ref",RefBehavior,e)}class StartEnd{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const kt=(e,t)=>St`
    <span
        part="end"
        ${Ct("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Ct("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,$t=(e,t)=>St`
    <span
        part="start"
        ${Ct("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ct("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;St`
    <span part="end" ${Ct("endContainer")}>
        <slot
            name="end"
            ${Ct("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,St`
    <span part="start" ${Ct("startContainer")}>
        <slot
            name="start"
            ${Ct("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function At(e,...t){const o=D.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((o=>{"constructor"!==o&&Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t.prototype,o))}));D.locate(t).forEach((e=>o.push(e)))}))}function Pt(e){return it(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class ListboxOption extends FoundationElement{constructor(e,t,o,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),y.notify(this,"value")}get value(){var e;return y.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}W([w],ListboxOption.prototype,"checked",void 0),W([w],ListboxOption.prototype,"content",void 0),W([w],ListboxOption.prototype,"defaultSelected",void 0),W([B({mode:"boolean"})],ListboxOption.prototype,"disabled",void 0),W([B({attribute:"selected",mode:"boolean"})],ListboxOption.prototype,"selectedAttribute",void 0),W([w],ListboxOption.prototype,"selected",void 0),W([B({attribute:"value",mode:"fromView"})],ListboxOption.prototype,"initialValue",void 0);class DelegatesARIAListboxOption{}W([w],DelegatesARIAListboxOption.prototype,"ariaChecked",void 0),W([w],DelegatesARIAListboxOption.prototype,"ariaPosInSet",void 0),W([w],DelegatesARIAListboxOption.prototype,"ariaSelected",void 0),W([w],DelegatesARIAListboxOption.prototype,"ariaSetSize",void 0),At(DelegatesARIAListboxOption,ARIAGlobalStatesAndProperties),At(ListboxOption,StartEnd,DelegatesARIAListboxOption);class Listbox extends FoundationElement{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return y.track(this,"options"),this._options}set options(e){this._options=e,y.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const o=e>t?-1:e<t?1:0,s=e+o;let n=null;switch(o){case-1:n=this.options.reduceRight(((e,t,o)=>!e&&!t.disabled&&o<s?t:e),n);break;case 1:n=this.options.reduce(((e,t,o)=>!e&&!t.disabled&&o>s?t:e),n)}return this.options.indexOf(n)}handleChange(e,t){if("selected"===t)Listbox.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Listbox.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case Xe:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case Ke:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case Ye:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case et:e.preventDefault(),this.selectLastOption();break;case tt:return this.focusAndScrollOptionIntoView(),!0;case Je:case Ze:return!0;case" ":if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(this.hasSelectableOptions){if((null===(o=this.options[this.selectedIndex])||void 0===o?void 0:o.disabled)&&"number"==typeof e){const o=this.getSelectableIndex(e,t),s=o>-1?o:e;return this.selectedIndex=s,void(t===s&&this.selectedIndexChanged(t,s))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var o;const s=t.filter(Listbox.slottedOptionFilter);null===(o=this.options)||void 0===o||o.forEach((e=>{const t=y.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=s.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let o=e.length;for(;o--;)if(t(e[o],o,e))return o;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,o;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(o=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Pt(t)&&e.push(t),e)),[]);const o=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=Ge("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=o})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Listbox.slottedOptionFilter=e=>Pt(e)&&!e.hidden,Listbox.TYPE_AHEAD_TIMEOUT_MS=1e3,W([B({mode:"boolean"})],Listbox.prototype,"disabled",void 0),W([w],Listbox.prototype,"selectedIndex",void 0),W([w],Listbox.prototype,"selectedOptions",void 0),W([w],Listbox.prototype,"slottedOptions",void 0),W([w],Listbox.prototype,"typeaheadBuffer",void 0);class DelegatesARIAListbox{}function Rt(e,t,o=0){return[t,o]=[t,o].sort(((e,t)=>e-t)),t<=e&&e<o}W([w],DelegatesARIAListbox.prototype,"ariaActiveDescendant",void 0),W([w],DelegatesARIAListbox.prototype,"ariaDisabled",void 0),W([w],DelegatesARIAListbox.prototype,"ariaExpanded",void 0),W([w],DelegatesARIAListbox.prototype,"ariaMultiSelectable",void 0),At(DelegatesARIAListbox,ARIAGlobalStatesAndProperties),At(Listbox,DelegatesARIAListbox);class ListboxElement extends Listbox{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,s;this.ariaActiveDescendant=null!==(s=null===(o=this.options[t])||void 0===o?void 0:o.id)&&void 0!==s?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=Rt(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Rt(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Rt(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=Rt(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const o=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return o&&!o.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case Xe:return void this.checkFirstOption(o);case Ke:return void this.checkNextOption(o);case Ye:return void this.checkPreviousOption(o);case et:return void this.checkLastOption(o);case tt:return this.focusAndScrollOptionIntoView(),!0;case Ze:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case" ":if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,null===(o=this.options)||void 0===o||o.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var o;const s=Math.max(0,parseInt(null!==(o=null==t?void 0:t.toFixed())&&void 0!==o?o:"",10));s!==t&&v.queueUpdate((()=>{this.size=s}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}W([w],ListboxElement.prototype,"activeIndex",void 0),W([B({mode:"boolean"})],ListboxElement.prototype,"multiple",void 0),W([B({converter:F})],ListboxElement.prototype,"size",void 0);const Tt="form-associated-proxy",_t="ElementInternals",Ot=_t in window&&"setFormValue"in window[_t].prototype,Dt=new WeakMap;function Et(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Ot}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?t.concat(Array.from(e)):t;return Object.freeze(o)}return c}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),v.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),v.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Ot)return null;let e=Dt.get(this);return e||(e=this.attachInternals(),Dt.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,o){this.elementInternals?this.elementInternals.setValidity(e,t,o):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Tt),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Tt)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===Je)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return B({mode:"boolean"})(t.prototype,"disabled"),B({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),B({attribute:"current-value"})(t.prototype,"currentValue"),B(t.prototype,"name"),B({mode:"boolean"})(t.prototype,"required"),w(t.prototype,"value"),t}class _Select extends ListboxElement{}class FormAssociatedSelect extends(Et(_Select)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const It="above",Lt="below";class Select extends FormAssociatedSelect{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ge("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void v.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return y.track(this,"value"),this._value}set value(e){var t,o,s,n,r,a,l;const c=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),c=null!==(s=null===(o=this._options[this.selectedIndex])||void 0===o?void 0:o.value)&&void 0!==s?s:null,h=null!==(r=null===(n=this._options[t])||void 0===n?void 0:n.value)&&void 0!==r?r:null;-1!==t&&c===h||(e="",this.selectedIndex=t),e=null!==(l=null===(a=this.firstSelectedOption)||void 0===a?void 0:a.value)&&void 0!==l?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),y.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=null!==(o=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==o?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?It:Lt,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===It?~~e.top:~~t}get displayValue(){var e,t;return y.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const o=e.relatedTarget;this.isSameNode(o)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(o))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{y.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{y.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),null===(o=this.options)||void 0===o||o.forEach(((e,t)=>{var o;const s=null===(o=this.proxy)||void 0===o?void 0:o.options.item(t);s&&(s.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Listbox.slottedOptionFilter),o=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===o?0:o}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case" ":e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case Xe:case et:e.preventDefault();break;case Je:e.preventDefault(),this.open=!this.open;break;case Ze:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case tt:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Ke||t===Ye)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&y.notify(this,"displayValue")}}W([B({attribute:"open",mode:"boolean"})],Select.prototype,"open",void 0),W([function(e,t,o){return Object.assign({},o,{get:function(){return y.trackVolatile(),o.get.apply(this)}})}],Select.prototype,"collapsible",null),W([w],Select.prototype,"control",void 0),W([B({attribute:"position"})],Select.prototype,"positionAttribute",void 0),W([w],Select.prototype,"position",void 0),W([w],Select.prototype,"maxHeight",void 0);class DelegatesARIASelect{}W([w],DelegatesARIASelect.prototype,"ariaControls",void 0),At(DelegatesARIASelect,DelegatesARIAListbox),At(Select,StartEnd,DelegatesARIASelect);const Ft=e=>"function"==typeof e,Bt=()=>null;function Mt(e){return void 0===e?Bt:Ft(e)?e:()=>e}class NodeObservationBehavior{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=y.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(c),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class SlottedBehavior extends NodeObservationBehavior{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Vt(e){return"string"==typeof e&&(e={property:e}),new AttachedBehaviorHTMLDirective("fast-slotted",SlottedBehavior,e)}function Nt(e,t){const o=[];let s="";const n=[];for(let r=0,a=e.length-1;r<a;++r){s+=e[r];let a=t[r];if(a instanceof CSSDirective){const e=a.createBehavior();a=a.createCSS(),e&&n.push(e)}a instanceof ElementStyles||a instanceof CSSStyleSheet?(""!==s.trim()&&(o.push(s),s=""),o.push(a)):s+=a}return s+=e[e.length-1],""!==s.trim()&&o.push(s),{styles:o,behaviors:n}}function zt(e,...t){const{styles:o,behaviors:s}=Nt(e,t),n=ElementStyles.create(o);return s.length&&n.withBehaviors(...s),n}function Ht(e){return`:host([hidden]){display:none}:host{display:${e}}`}const Ut=function(){if("boolean"==typeof ot)return ot;if("undefined"==typeof window||!window.document||!window.document.createElement)return ot=!1,ot;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),ot=!0}catch(e){ot=!1}finally{document.head.removeChild(e)}return ot}()?"focus-visible":"focus",Wt="not-allowed";function jt(e){const t=getComputedStyle(document.body),o=document.querySelector("body");if(o){const s=o.getAttribute("data-vscode-theme-kind");for(const[n,r]of e){let e=t.getPropertyValue(n).toString();if("vscode-high-contrast"===s)0===e.length&&r.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===r.name&&(e="transparent");else if("vscode-high-contrast-light"===s){if(0===e.length&&r.name.includes("background"))switch(r.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===r.name&&(e="transparent");r.setValueFor(o,e)}}}const qt=new Map;let Gt=!1;function Qt(e,t){const o=Ve.create(e);if(t){if(t.includes("--fake-vscode-token")){t=`${t}-${"id"+Math.random().toString(16).slice(2)}`}qt.set(t,o)}return Gt||(!function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{jt(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),jt(e)}))}(qt),Gt=!0),o}Qt("background","--vscode-editor-background").withDefault("#1e1e1e");const Kt=Qt("border-width").withDefault(1),Yt=(Qt("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),Qt("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),Qt("corner-radius").withDefault(0)),Jt=Qt("corner-radius-round").withDefault(2),Zt=Qt("design-unit").withDefault(4),Xt=Qt("disabled-opacity").withDefault(.4),ei=Qt("focus-border","--vscode-focusBorder").withDefault("#007fd4"),ti=Qt("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),ii=(Qt("font-weight","--vscode-font-weight").withDefault("400"),Qt("foreground","--vscode-foreground").withDefault("#cccccc")),oi=Qt("input-height").withDefault("26"),si=Qt("input-min-width").withDefault("100px"),ni=Qt("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),ri=Qt("type-ramp-base-line-height").withDefault("normal"),ai=(Qt("type-ramp-minus1-font-size").withDefault("11px"),Qt("type-ramp-minus1-line-height").withDefault("16px"),Qt("type-ramp-minus2-font-size").withDefault("9px"),Qt("type-ramp-minus2-line-height").withDefault("16px"),Qt("type-ramp-plus1-font-size").withDefault("16px"),Qt("type-ramp-plus1-line-height").withDefault("24px"),Qt("scrollbarWidth").withDefault("10px"),Qt("scrollbarHeight").withDefault("10px"),Qt("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Qt("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Qt("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Qt("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Qt("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Qt("button-border","--vscode-button-border").withDefault("transparent"),Qt("button-icon-background").withDefault("transparent"),Qt("button-icon-corner-radius").withDefault("5px"),Qt("button-icon-outline-offset").withDefault(0),Qt("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Qt("button-icon-padding").withDefault("3px"),Qt("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Qt("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Qt("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Qt("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Qt("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Qt("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Qt("button-padding-horizontal").withDefault("11px"),Qt("button-padding-vertical").withDefault("4px"),Qt("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Qt("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Qt("checkbox-corner-radius").withDefault(3),Qt("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),Qt("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),li=Qt("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),ci=(Qt("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Qt("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Qt("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c")),hi=Qt("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),di=(Qt("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),Qt("dropdown-list-max-height").withDefault("200px"));Qt("input-background","--vscode-input-background").withDefault("#3c3c3c"),Qt("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),Qt("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Qt("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Qt("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Qt("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Qt("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Qt("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Qt("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),Qt("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),Qt("panel-view-border","--vscode-panel-border").withDefault("#80808059"),Qt("tag-corner-radius").withDefault("2px");const ui=class Dropdown extends Select{}.compose({baseName:"dropdown",template:(e,t)=>St`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${function(e,t,o){const s=Ft(e)?e:()=>e,n=Mt(t),r=Mt(o);return(e,t)=>s(e,t)?n(e,t):r(e,t)}((e=>e.collapsible),St`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Ct("control")}
                >
                    ${$t(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${kt(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Ct("listbox")}
        >
            <slot
                ${Vt({filter:Listbox.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>zt`
	${Ht("inline-flex")} :host {
		background: ${ci};
		border-radius: calc(${Jt} * 1px);
		box-sizing: border-box;
		color: ${ii};
		contain: contents;
		font-family: ${ti};
		height: calc(${oi} * 1px);
		position: relative;
		user-select: none;
		min-width: ${si};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${Kt} * 1px) solid ${hi};
		border-radius: calc(${Jt} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${ni};
		line-height: ${ri};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${ci};
		border: calc(${Kt} * 1px) solid ${ei};
		border-radius: calc(${Jt} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${di};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${Ut}) .control {
		border-color: ${ei};
	}
	:host(:not([disabled]):hover) {
		background: ${ci};
		border-color: ${hi};
	}
	:host(:${Ut}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${ai};
		border: calc(${Kt} * 1px) solid transparent;
		color: ${li};
	}
	:host([disabled]) {
		cursor: ${Wt};
		opacity: ${Xt};
	}
	:host([disabled]) .control {
		cursor: ${Wt};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${ci};
		color: ${ii};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${ei};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${ei};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${oi} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${oi} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${Zt} * 4px);
		min-width: calc(${Zt} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});const pi=class option_Option extends ListboxOption{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}.compose({baseName:"option",template:(e,t)=>St`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${$t(0,t)}
        <span class="content" part="content">
            <slot ${Vt("content")}></slot>
        </span>
        ${kt(0,t)}
    </template>
`,styles:(e,t)=>zt`
	${Ht("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Yt};
		border: calc(${Kt} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${ii};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${ni};
		line-height: ${ri};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${Zt} / 2) * 1px)
			calc((${Zt} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${Ut}) {
		border-color: ${ei};
		background: ${ai};
		color: ${ii};
	}
	:host([aria-selected='true']) {
		background: ${ai};
		border: calc(${Kt} * 1px) solid transparent;
		color: ${li};
	}
	:host(:active) {
		background: ${ai};
		color: ${li};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${ai};
		border: calc(${Kt} * 1px) solid transparent;
		color: ${li};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${ai};
		color: ${ii};
	}
	:host([disabled]) {
		cursor: ${Wt};
		opacity: ${Xt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`}),gi=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,fi=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,mi=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let bi;const vi=new Map;let yi,wi,xi;function Si(e,t,o,s=!0){const n=`${o??""}:${t=t??void 0}`;let r=vi.get(n);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=fi.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(gi))if(null!=t)for(const[e,s]of Object.entries(t))if(null!=s)switch(e){case"year":o.year=4===s.length?"numeric":"2-digit";break;case"month":switch(s.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===s?"2-digit":"numeric";break;case"weekday":switch(s.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===s.length?"2-digit":"numeric",o.hour12="hh"===s||"h"===s;break;case"minute":o.minute=2===s.length?"2-digit":"numeric";break;case"second":o.second=2===s.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===s.length?"long":"short"}return o}(t);let a;a=null==o?yi:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,e),s&&vi.set(n,r)}if(null==t||fi.test(t))return r.format(e);function a(e){const t=`${o??""}:time:${e}`;let n=vi.get(t);if(null==n){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?yi:"system"===o?void 0:[o],n=new Intl.DateTimeFormat(a,r),s&&vi.set(t,n)}return n}const l=r.formatToParts(e);return t.replace(gi,((t,o,s,n,r,c,h,d,u,p,g,f,m,v,y)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(y)){if(null==o)continue;const s=l.find((e=>e.type===t));if("Do"===o&&"day"===s?.type)return ki(Number(s.value));if("a"===o&&"dayPeriod"===s?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??s)?.value??""}`}return s?.value??""}return""}))}const Ci=["th","st","nd","rd"];function ki(e){const t=e%100;return`${e}${Ci[(t-20)%10]??Ci[t]??Ci[0]}`}var $i=(e=>(e.Free="free",e.FreePlus="free+",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))($i||{}),Ai=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",e[e.Paid=6]="Paid",e))(Ai||{});function Pi(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function Ri(e,t){return Ti(e.plan.effective.expiresOn,t)}function Ti(e,t){return null!=e?function(e,t,o,s){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),r=s??Math.floor;switch(o){case"days":return r(n/864e5);case"hours":return r(n/36e5);case"minutes":return r(n/6e4);case"seconds":return r(n/1e3);default:return n}}(Date.now(),new Date(e),t,Math.round):void 0}function _i(e){return"free"!==(t=e.plan.actual.id)&&"free+"!==t;var t}class IpcCall{constructor(e,t,o=!1,s=!1){this.scope=e,this.reset=o,this.pack=s,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const Oi=new IpcCommand("core","webview/ready"),Di=new IpcCommand("core","webview/focus/changed"),Ei=(new IpcCommand("core","command/execute"),new IpcCommand("core","configuration/update"),new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const Ii="timeline",Li=new IpcCommand(Ii,"point/open"),Fi=new IpcCommand(Ii,"period/update"),Bi=new IpcNotification(Ii,"didChange");class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function Mi(e,t,o){let s,n,r,a,l;function c(e){const o=e-(n??0);return null==n||o>=t||o<0}function h(){const e=Date.now();if(c(e))d();else{l=setTimeout(h,t-(e-(n??0)))}}function d(){return l=void 0,s?function(){const t=s,o=r;return s=r=void 0,a=e.apply(o,t),a}():(s=void 0,r=void 0,a)}function u(...e){const d=Date.now(),u=c(d);return s=null!=o&&s?o(s,e):e,r=this,n=d,u&&null==l?(l=setTimeout(h,t),a):(null==l&&(l=setTimeout(h,t)),a)}return u.cancel=function(){null!=l&&clearTimeout(l),s=void 0,n=void 0,r=void 0,l=void 0},u.flush=function(){return null==l?a:(clearTimeout(l),d())},u.pending=function(){return null!=l},u}const Vi=",",Ni="=",zi="{",Hi="(",Ui=")",Wi=/\(([\s\S]*)\)/,ji=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,qi=/\s?=.*$/;function Gi(e){const t=.001*performance.now();let o=Math.floor(t),s=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],s-=e[1],s<0&&(o--,s+=1e9)),[o,s]}const Qi=500;function Ki(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const Yi=Ki(),Ji=new Map;function Zi(e){Ji.delete(e)}function Xi(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function eo(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?Yi.current:void 0,s=Yi.next();return{scopeId:s,prevScopeId:o,prefix:`${Xi(s)} ${e}`}}Error;function to(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;var io=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(io||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const oo="utm_source=gitlens-extension&utm_medium=in-app-links",{fromCharCode:so}=(Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${oo}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${oo}`,graph:`https://gitkraken.com/solutions/commit-graph?${oo}`,launchpad:`https://gitkraken.com/solutions/launchpad?${oo}`,platform:`https://gitkraken.com/devex?${oo}`,pricing:`https://gitkraken.com/gitlens/pricing?${oo}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${oo}`,security:`https://help.gitkraken.com/gitlens/security?${oo}`,workspaces:`https://gitkraken.com/solutions/workspaces?${oo}`,cli:`https://gitkraken.com/cli?${oo}`,browserExtension:`https://gitkraken.com/browser-extension?${oo}`,desktop:`https://gitkraken.com/git-client?${oo}`,releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:`https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?${oo}`}),String);new TextEncoder;function no(e){const[t,o]=Gi(e);return 1e3*t+Math.floor(o/1e6)}function ro(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const s=1===t?e:o.plural??`${e}s`;return o.only?s:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${s}`}const ao=Symbol("logInstanceNameFn");function lo(e){return function(e,t=!1){let o,s,n,r,a,l=0,c=!1,h=!1,d=!0;null!=e&&({args:o,if:s,enter:n,exit:r,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:d=!0}=e);l>0&&(h=!0,d=!0);d&&(c=!0);const u=uo.isDebugging,p=t?uo.debug:uo.log,g=u?"debug":"info";return(e,t,f)=>{let m,v;if("function"==typeof f.value?(m=f.value,v="value"):"function"==typeof f.get&&(m=f.get,v="get"),null==m||null==v)throw new Error("Not supported");const y=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(ji,"")||t,t=t.slice(0,t.indexOf(zi));let o=t.indexOf(Hi),s=t.indexOf(Ui);o=o>=0?o+1:0,s=s>0?s:t.indexOf(Ni),t=t.slice(o,s),t=`(${t})`;const n=Wi.exec(t);return null!=n?n[1].split(Vi).map((e=>e.trim().replace(qi,""))):[]}(m):[];f[v]=function(...e){if(!u&&!uo.enabled(g)||null!=s&&!s.apply(this,e))return m.apply(this,e);const f=Yi.current,v=Yi.next(),w=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const s=o.indexOf("_");o=-1===s?o:o.substr(s+1),null!=t?.[ao]&&(o=t[ao](e,o));return o}(this):void 0;let x,S=w?c?`${Xi(v,f)} ${w}.${t}`:`${w}.${t}`:t;null!=a&&(S=a({id:v,instance:this,instanceName:w??"",name:t,prefix:S},...e)),c&&(x=function(e,t){return t={prevScopeId:Yi.current,...t},Ji.set(e,t),t}(v,{scopeId:v,prevScopeId:f,prefix:S}));const C=null!=n?n(...e):"";let $;if(!1===o||0===e.length)$="",h||p.call(uo,`${S}${C}`);else{let t;$="";let s,n,r,a=-1;for(r of e){if(s=y[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if($.length>0&&($+=", "),"string"==typeof t){$+=t;continue}n=String(t(r))}else $.length>0&&($+=", "),n=uo.toLoggable(r);$+=s?`${s}=${n}`:n}h||p.call(uo,$?`${S}${C}(${$})`:`${S}${C}`)}if(h||d||null!=r){const t=d?Gi():void 0,o=e=>{const o=void 0!==t?` [${no(t)}ms]`:"";h?uo.error(e,$?`${S}${C}(${$})`:`${S}${C}`,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`):uo.error(e,S,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`),c&&Zi(v)};let s;try{s=m.apply(this,e)}catch(e){throw o(e),e}const n=e=>{let o,s,n,a;if(null!=t?(o=no(t),o>Qi?(s=uo.warn,n=` [*${o}ms] (slow)`):(s=p,n=` [${o}ms]`)):(n="",s=p),null!=r)if("function"==typeof r)try{a=r(e)}catch(e){a=`@log.exit error: ${e}`}else!0===r&&(a=`returned ${uo.toLoggable(e)}`);else x?.exitFailed?(a=x.exitFailed,s=uo.error):a="completed";h?(0===l||o>l)&&s.call(uo,$?`${S}${C}(${$}) ${a}${x?.exitDetails||""}${n}`:`${S}${C} ${a}${x?.exitDetails||""}${n}`):s.call(uo,$?`${S}(${$}) ${a}${x?.exitDetails||""}${n}`:`${S} ${a}${x?.exitDetails||""}${n}`),c&&Zi(v)};return null!=s&&to(s)?s.then(n,o):n(s),s}return m.apply(this,e)}}}(e,!0)}const co=new Set(["accessToken","password","token"]),ho=function(e,t){return co.has(e)?`<${t}>`:t},uo=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=po(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=po(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let s;if(s=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==s){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(s=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${s??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(t??=this.provider.sanitize??ho,Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function po(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const go={enabled:e=>uo.enabled(e)||uo.isDebugging,log:(e,t,o,...s)=>{switch(e){case"error":uo.error("",t,o,...s);break;case"warn":uo.warn(t,o,...s);break;case"info":uo.log(t,o,...s);break;default:uo.debug(t,o,...s)}}};class LoggerContext{constructor(e){this.scope=eo(e,void 0),uo.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off")}log(e,...t){"string"==typeof e?uo.log(this.scope,e,...t):uo.log(e,t.shift(),...t)}}var fo;function mo(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function bo(e,t){return new Promise((o=>{e.addEventListener(t,(function s(n){n.target===e&&(e.removeEventListener(t,s),o())}))}))}(fo||(fo={})).on=function(e,t,o,s){let n=!1;if("string"==typeof e){const r=function(t){const s=t?.target?.closest(e);null!=s&&o(t,s)};return document.addEventListener(t,r,s??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,r,s??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,s??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,r,s??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let s;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:eo(e??"",!1),s="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??go,this._time=Gi(),null!=s){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${s.message??""}${s.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${s.message??""}${s.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=Gi(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=Gi(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,s]=Gi(this._time),n=1e3*o+Math.floor(s/1e6),r=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${n}ms]${e?.suffix??""}`)}}const vo=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const s=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=_Emitter._noop,this._disposed||s()}};return Array.isArray(o)&&o.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};vo._noop=function(){};let yo=vo;const wo={done:!0,value:void 0},xo=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};xo.Undefined=new xo(void 0);let So=xo;class LinkedList{constructor(){this._first=So.Undefined,this._last=So.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===So.Undefined}clear(){this._first=So.Undefined,this._last=So.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new So(e);if(this._first===So.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let s=!1;return()=>{s||(s=!0,this._remove(o))}}shift(){if(this._first===So.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===So.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==So.Undefined&&e.next!==So.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===So.Undefined&&e.next===So.Undefined?(this._first=So.Undefined,this._last=So.Undefined):e.next===So.Undefined?(this._last=this._last.prev,this._last.next=So.Undefined):e.prev===So.Undefined&&(this._first=this._first.next,this._first.prev=So.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===So.Undefined?wo:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==So.Undefined;t=t.next)e.push(t.element);return e}}var Co=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,$o=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?ko(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&Co(t,o,r),r};let Ao;function Po(){return Ao??=acquireVsCodeApi()}const Ro=Ki();function To(){return`webview:${Ro.next()}`}let _o=class{constructor(e){this.appName=e,this._onReceiveMessage=new yo,this._pendingHandlers=new Map,this._api=Po(),this._disposable=fo.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=Ji.get(Yi.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const s=function(e,t,...o){return(t?.provider??go).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(eo(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),s?.stop()}if(null==o.completionId)this._onReceiveMessage.fire(o);else{const e=Do(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}sendCommand(e,t){const o=To();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=To(),s=new Promise(((t,s)=>{const n=Do(e.response.method,o);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(n)}r=setTimeout((()=>{a.call(this),s(new Error(`Timed out waiting for completion of ${n}`))}),6e4),this._pendingHandlers.set(n,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),s}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var Oo;function Do(e,t){return`${e}|${t}`}$o([lo({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],_o.prototype,"onMessageReceived",1),$o([lo({args:{0:e=>e.method,1:!1}})],_o.prototype,"sendCommand",1),$o([lo({args:{0:e=>e.method,1:!1,2:!1}})],_o.prototype,"sendRequest",1),$o([lo({args:{0:e=>`${e.id}, method=${e.method}`}})],_o.prototype,"postMessage",1),_o=$o([(Oo=(e,t)=>`${e.appName}(${t})`,e=>{e[ao]=Oo})],_o);function Eo(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,s=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=Eo(Math.max(Math.min(1,s),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,s){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Eo(Math.max(Math.min(1,t),0),3),this.l=Eo(Math.max(Math.min(1,o),0),3),this.a=Eo(Math.max(Math.min(1,s),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,s=e.b/255,n=e.a,r=Math.max(t,o,s),a=Math.min(t,o,s);let l=0,c=0;const h=(a+r)/2,d=r-a;if(d>0){switch(c=Math.min(h<=.5?d/(2*h):d/(2-2*h),1),r){case t:l=(o-s)/d+(o<s?6:0);break;case o:l=(s-t)/d+2;break;case s:l=(t-o)/d+4}l*=60,l=Math.round(l)}return new HSLA(l,c,h,n)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:s,a:n}=e;let r,a,l;if(0===o)r=a=l=s;else{const e=s<.5?s*(1+o):s+o-s*o,n=2*s-e;r=HSLA._hue2rgb(n,e,t+1/3),a=HSLA._hue2rgb(n,e,t),l=HSLA._hue2rgb(n,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),n)}}class HSVA{constructor(e,t,o,s){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Eo(Math.max(Math.min(1,t),0),3),this.v=Eo(Math.max(Math.min(1,o),0),3),this.a=Eo(Math.max(Math.min(1,s),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,s=e.b/255,n=Math.max(t,o,s),r=n-Math.min(t,o,s),a=0===n?0:r/n;let l;return l=0===r?0:n===t?((o-s)/r%6+6)%6:n===o?(s-t)/r+2:(t-o)/r+4,new HSVA(Math.round(60*l),a,n,e.a)}static toRGBA(e){const{h:t,s:o,v:s,a:n}=e,r=s*o,a=r*(1-Math.abs(t/60%2-1)),l=s-r;let[c,h,d]=[0,0,0];return t<60?(c=r,h=a):t<120?(c=a,h=r):t<180?(h=r,d=a):t<240?(h=a,d=r):t<300?(c=a,d=r):t<=360&&(c=r,d=a),c=Math.round(255*(c+l)),h=Math.round(255*(h+l)),d=Math.round(255*(d+l)),new RGBA(c,h,d,n)}}function Io(e,t){return t.getPropertyValue(e).trim()}const Lo=class _Color{static from(e){return e instanceof _Color?e:zo(e)||_Color.red}static fromCssVariable(e,t){return zo(Io(e,t))||_Color.red}static fromHex(e){return Ho(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return Eo(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new Fo(new RGBA(0,0,0,e.rgba.a));if(1===t)return new Fo(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let s=20;const n=(e,o)=>{const r=e.mix(o,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!s--?r:a>t?n(e,r):n(r,o)},r=(o>t?n(Fo.black,e):n(e,Fo.white)).rgba;return new Fo(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:s,a:n}=this.rgba;return new _Color(new RGBA(t,o,s,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,s=t.a,n=o+s*(1-o);if(n<1e-6)return _Color.transparent;const r=this.rgba.r*o/n+t.r*s*(1-o)/n,a=this.rgba.g*o/n+t.g*s*(1-o)/n,l=this.rgba.b*o/n+t.b*s*(1-o)/n;return new _Color(new RGBA(r,a,l,n))}mix(e,t){return function(e,t,o){const s=e.rgba,n=t.rgba;return new Fo(new RGBA(s.r+o*(n.r-s.r),s.g+o*(n.g-s.g),s.b+o*(n.b-s.b),s.a+o*(n.a-s.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:s,a:n}=this.rgba;return new _Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-o),e.rgba.b-n*(e.rgba.b-s),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return Vo(e);return Bo(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const s=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(n-s)/n,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const s=e.getRelativeLuminance();return o=o*(s-t.getRelativeLuminance())/s,e.darken(o)}};Lo.white=new Lo(new RGBA(255,255,255,1)),Lo.black=new Lo(new RGBA(0,0,0,1)),Lo.red=new Lo(new RGBA(255,0,0,1)),Lo.blue=new Lo(new RGBA(0,0,255,1)),Lo.green=new Lo(new RGBA(0,255,0,1)),Lo.cyan=new Lo(new RGBA(0,255,255,1)),Lo.lightgrey=new Lo(new RGBA(211,211,211,1)),Lo.transparent=new Lo(new RGBA(0,0,0,0));let Fo=Lo;function Bo(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function Mo(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function Vo(e){return`#${Mo(e.rgba.r)}${Mo(e.rgba.g)}${Mo(e.rgba.b)}`}const No=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function zo(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===io.Hash)return Ho(e);const t=No.exec(e);if(null==t)return null;const o=t[1];let s;switch(o){case"rgb":case"hsl":s=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":s=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new Fo(new RGBA(s[0],s[1],s[2],s[3]));case"hsl":case"hsla":return new Fo(new HSLA(s[0],s[1],s[2],s[3]))}return Fo.red}function Ho(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==io.Hash)return null;switch(t){case 7:{const t=16*Uo(e.charCodeAt(1))+Uo(e.charCodeAt(2)),o=16*Uo(e.charCodeAt(3))+Uo(e.charCodeAt(4)),s=16*Uo(e.charCodeAt(5))+Uo(e.charCodeAt(6));return new Fo(new RGBA(t,o,s,1))}case 9:{const t=16*Uo(e.charCodeAt(1))+Uo(e.charCodeAt(2)),o=16*Uo(e.charCodeAt(3))+Uo(e.charCodeAt(4)),s=16*Uo(e.charCodeAt(5))+Uo(e.charCodeAt(6)),n=16*Uo(e.charCodeAt(7))+Uo(e.charCodeAt(8));return new Fo(new RGBA(t,o,s,n/255))}case 4:{const t=Uo(e.charCodeAt(1)),o=Uo(e.charCodeAt(2)),s=Uo(e.charCodeAt(3));return new Fo(new RGBA(16*t+t,16*o+o,16*s+s))}case 5:{const t=Uo(e.charCodeAt(1)),o=Uo(e.charCodeAt(2)),s=Uo(e.charCodeAt(3)),n=Uo(e.charCodeAt(4));return new Fo(new RGBA(16*t+t,16*o+o,16*s+s,(16*n+n)/255))}default:return null}}function Uo(e){switch(e){case io.Digit0:return 0;case io.Digit1:return 1;case io.Digit2:return 2;case io.Digit3:return 3;case io.Digit4:return 4;case io.Digit5:return 5;case io.Digit6:return 6;case io.Digit7:return 7;case io.Digit8:return 8;case io.Digit9:return 9;case io.a:case io.A:return 10;case io.b:case io.B:return 11;case io.c:case io.C:return 12;case io.d:case io.D:return 13;case io.e:case io.E:return 14;case io.f:case io.F:return 15}return 0}const Wo=new yo,jo=Wo.event;function qo(e){const t=document.documentElement,o=window.getComputedStyle(t),s=document.body.classList,n=s.contains("vscode-light")||s.contains("vscode-high-contrast-light"),r=s.contains("vscode-high-contrast")||s.contains("vscode-high-contrast-light"),a=Io("--vscode-editor-background",o);let l=Io("--vscode-editor-foreground",o);return l||(l=Io("--vscode-foreground",o)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:n,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],o=qo();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(jo(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=Po(),this._hostIpc=new _o(this.appName),t.push(this._hostIpc),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Wo.fire(qo(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===Ei.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(Oi,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(fo.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0}))),this.log("opened")}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=Mi((e=>{this.sendCommand(Di,e)}),150);this.bindDisposables.push(fo.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),fo.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}class TimelineChart{constructor(e,t){this.placement=t,this._onDidClickDataPoint=new yo,this._commitsByTimestamp=new Map,this._authorsByIndex=new Map,this._indexByAuthors=new Map,this._dateFormat=void 0,this._shortDateFormat=void 0,this._selector=e;const o=()=>{const e=this._size;this._chart?.resize({width:e.width,height:e.height})},s=this.compact?32:0,n=this.compact?16:0;this.$container=document.querySelector(e).parentElement,this._resizeObserver=new ResizeObserver((e=>{const t=e[0].borderBoxSize[0],r={width:Math.floor(t.inlineSize)+s,height:Math.floor(t.blockSize)+n};this._size=r,requestAnimationFrame(o)}));const r=this.$container.getBoundingClientRect();this._size={height:Math.floor(r.height)+s,width:Math.floor(r.width)+n},this._resizeObserver.observe(this.$container,{box:"border-box"})}get onDidClickDataPoint(){return this._onDidClickDataPoint.event}get compact(){return"editor"!==this.placement}dispose(){this._resizeObserver.disconnect(),this._chart?.destroy()}reset(){this._chart?.unselect(),this._chart?.unzoom()}setEmptyState(e,t){const o=document.getElementById("empty"),s=document.getElementById("header");null!=t.uri?(0===e?.length?(o.innerHTML="<p>No commits found for the specified time period.</p>",o.removeAttribute("hidden")):o.setAttribute("hidden",""),s.removeAttribute("hidden")):null==e?(o.innerHTML="<p>There are no editors open that can provide file history information.</p>",o.removeAttribute("hidden"),s.setAttribute("hidden","")):(o.setAttribute("hidden",""),s.removeAttribute("hidden"))}async updateChart(e){this._dateFormat=e.dateFormat,this._shortDateFormat=e.shortDateFormat,this._commitsByTimestamp.clear(),this._authorsByIndex.clear(),this._indexByAuthors.clear();let t=e?.dataset;if(null!=t||e.access.allowed||"editor"!==this.placement||(t=function(){const e=[],t=["Eric Amodio","Justin Roberts","Keith Daulton","Ramin Tadayon","Ada Lovelace","Grace Hopper"],o=10;for(let s=0;s<o;s++){const n=new Date((new Date).getTime()-Math.floor(7776e6*Math.random()));e.push({commit:String(s),author:t[Math.floor(Math.random()*t.length)],date:n.toISOString(),message:"",additions:0===s?2:s===o-1?50:Math.floor(20*Math.random())+1,deletions:0===s?1:s===o-1?25:Math.floor(20*Math.random())+1,sort:n.getTime()})}return e.sort(((e,t)=>t.sort-e.sort))}()),this.setEmptyState(t,e),null==t||0===t.length)return this._chart?.destroy(),void(this._chart=void 0);const o={},n={},r={},a={},l={},c=[],h={},d=[];let u,p,g,f,m,v=0;const{bb:y,bar:w,bubble:x,zoom:S}=await s.e(162).then(s.bind(s,86));for(u of t){({author:p,date:g,additions:f,deletions:m}=u),this._indexByAuthors.has(p)||(this._indexByAuthors.set(p,v),this._authorsByIndex.set(v,p),v--);const e="time";null==h[e]&&(h[e]=[],h.additions=[],h.deletions=[],o.additions=e,o.deletions=e,a.additions="y2",a.deletions="y2",r.additions="Additions",r.deletions="Deletions",n.additions="rgba(73, 190, 71, 1)",n.deletions="rgba(195, 32, 45, 1)",l.additions=w(),l.deletions=w(),d.push(e),c.push(["additions","deletions"]));const t=`${e}.${p}`;null==h[t]&&(h[t]=[],h[p]=[],o[p]=t,a[p]="y",r[p]=p,l[p]=x(),d.push(t)),h[e].push(g),h.additions.push(f??0),h.deletions.push(m??0),h[t].push(g);const s=null==f&&null==m?6:(f??0)+(m??0);h[p].push({y:this._indexByAuthors.get(p),z:s}),this._commitsByTimestamp.set(g,u)}c.push(d);const C=Object.entries(h).map((([e,t])=>[e,...t]));null!=this._chart&&null!=this._loading&&(this._loading.cancel(),this._loading=void 0,this._chart?.destroy(),this._chart=void 0),this._loading=function(){const e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0};return e.promise=new Promise(((t,o)=>{e.fulfill=function(o){e.pending=!1,t(o)},e.cancel=function(t){e.pending=!1,null!=t?o(t):o()}})),e}();try{if(null==this._chart){const e=this.getChartOptions(S);null==e.axis&&(e.axis={y:{tick:{}}}),null==e.axis.y&&(e.axis.y={tick:{}}),null==e.axis.y.tick&&(e.axis.y.tick={}),e.axis.y.min=v-2,e.axis.y.tick.values=[...this._authorsByIndex.keys()],e.data={...e.data,axes:a,colors:n,columns:C,groups:c,names:r,types:l,xs:o},e.onafterinit=()=>setTimeout((()=>{this._loading?.fulfill(),this._loading=void 0}),250),this._chart=y.generate(e)}else this._chart.config("axis.y.tick.values",[...this._authorsByIndex.keys()],!1),this._chart.config("axis.y.min",v-2,!1),this._chart.groups(c),this._chart.load({axes:a,colors:n,columns:C,names:r,types:l,xs:o,unload:!0,done:()=>{setTimeout((()=>{this._loading?.fulfill(),this._loading=void 0}),250)}});return this._loading.promise}catch(e){}}getChartOptions(e){const t={bindto:this._selector,data:{xFormat:"%Y-%m-%dT%H:%M:%S.%LZ",xLocaltime:!1,onclick:this.onDataPointClicked.bind(this)},axis:{x:{type:"timeseries",clipPath:!1,localtime:!0,show:!0,tick:{centered:!0,culling:!1,fit:!1,format:e=>this.compact?"":"number"==typeof e?e:Si(e,this._shortDateFormat??"short"),multiline:!1,show:!1,outer:!this.compact}},y:{max:0,padding:{top:75,bottom:100},show:!0,tick:{format:e=>this.compact?"":this._authorsByIndex.get(e)??"",outer:!this.compact,show:this.compact}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:e=>this.compact?"":e,outer:!this.compact}}},bar:{width:2,sensitivity:4,padding:2},bubble:{maxR:100,zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!this.compact,padding:10},point:{sensitivity:"radius"},resize:{auto:!1},size:this._size,tooltip:{grouped:!0,format:{title:this.getTooltipTitle.bind(this),name:this.getTooltipName.bind(this),value:this.getTooltipValue.bind(this)},show:!0,order:"desc"},zoom:{enabled:e(),type:"drag",rescale:!0,resetButton:!0,extent:[1,.01],x:{min:100}}};return t}getTooltipName(e,t,o,s){if("additions"===o||"deletions"===o)return e;const n=new Date(this._chart.data(o)[0].values[s].x),r=this._commitsByTimestamp.get(n.toISOString());return r?.commit.slice(0,8)??"00000000"}getTooltipTitle(e){const t=new Date(e),o=`${function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,s,n,r]of mi){const a=Math.abs(o);if(a>=s||1e3===s)return t?(null==bi&&(null!=xi?bi=xi.resolvedOptions().locale:null!=wi?bi=wi.resolvedOptions().locale:(xi=new Intl.RelativeTimeFormat(yi,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),bi=xi.resolvedOptions().locale)),"en"===bi||bi?.startsWith("en-")?`${Math.round(a/n)}${r}`:(null==xi&&(xi=new Intl.RelativeTimeFormat(yi,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),xi.format(Math.round(o/n),e))):(null==wi&&(wi=new Intl.RelativeTimeFormat(yi,{localeMatcher:"best fit",numeric:"auto",style:"long"})),wi.format(Math.round(o/n),e))}return""}(t))}   (${Si(t,this._dateFormat)})`,s=this._commitsByTimestamp.get(t.toISOString());return null==s?o:`${s.author}, ${o}`}getTooltipValue(e,t,o,s){if("additions"===o||"deletions"===o)return 0===e?void 0:e;const n=new Date(this._chart.data(o)[0].values[s].x),r=this._commitsByTimestamp.get(n.toISOString());return r?.message??"???"}onDataPointClicked(e,t){const o=this._commitsByTimestamp.get(new Date(e.x).toISOString());null!=o&&this._onDidClickDataPoint.fire({data:{id:o.commit,selected:!0}})}}const Go=globalThis,Qo=Go.ShadowRoot&&(void 0===Go.ShadyCSS||Go.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ko=Symbol(),Yo=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ko)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Qo&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Yo.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Yo.set(t,e))}return e}toString(){return this.cssText}}const Jo=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,Ko),Zo=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1]),e[0]);return new css_tag_n(o,e,Ko)},Xo=Qo?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Jo(t)})(e):e,{is:es,defineProperty:ts,getOwnPropertyDescriptor:is,getOwnPropertyNames:os,getOwnPropertySymbols:ss,getPrototypeOf:ns}=Object,rs=globalThis,as=rs.trustedTypes,ls=as?as.emptyScript:"",cs=rs.reactiveElementPolyfillSupport,hs=(e,t)=>e,ds={toAttribute(e,t){switch(t){case Boolean:e=e?ls:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},us=(e,t)=>!es(e,t),ps={attribute:!0,type:String,converter:ds,reflect:!1,hasChanged:us};Symbol.metadata??=Symbol("metadata"),rs.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ps){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);void 0!==s&&ts(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:n}=is(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const r=s?.call(this);n.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ps}static _$Ei(){if(this.hasOwnProperty(hs("elementProperties")))return;const e=ns(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(hs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hs("properties"))){const e=this.properties,t=[...os(e),...ss(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Xo(e))}else void 0!==e&&t.push(Xo(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Qo)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),s=Go.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(void 0!==s&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:ds).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,s=o._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=o.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:ds;this._$Em=s,this[s]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??us)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[hs("elementProperties")]=new Map,b[hs("finalized")]=new Map,cs?.({ReactiveElement:b}),(rs.reactiveElementVersions??=[]).push("2.0.4");const gs=globalThis,fs=gs.trustedTypes,ms=fs?fs.createPolicy("lit-html",{createHTML:e=>e}):void 0,bs="$lit$",vs=`lit$${Math.random().toFixed(9).slice(2)}$`,ys="?"+vs,ws=`<${ys}>`,xs=document,Ss=()=>xs.createComment(""),Cs=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ks=Array.isArray,$s=e=>ks(e)||"function"==typeof e?.[Symbol.iterator],As="[ \t\n\f\r]",Ps=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rs=/-->/g,Ts=/>/g,_s=RegExp(`>|${As}(?:([^\\s"'>=/]+)(${As}*=${As}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Os=/'/g,Ds=/"/g,Es=/^(?:script|style|textarea|title)$/i,Is=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Ls=Is(1),Fs=(Is(2),Symbol.for("lit-noChange")),Bs=Symbol.for("lit-nothing"),Ms=new WeakMap,Vs=xs.createTreeWalker(xs,129);function Ns(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ms?ms.createHTML(t):t}const zs=(e,t)=>{const o=e.length-1,s=[];let n,r=2===t?"<svg>":"",a=Ps;for(let t=0;t<o;t++){const o=e[t];let l,c,h=-1,d=0;for(;d<o.length&&(a.lastIndex=d,c=a.exec(o),null!==c);)d=a.lastIndex,a===Ps?"!--"===c[1]?a=Rs:void 0!==c[1]?a=Ts:void 0!==c[2]?(Es.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=_s):void 0!==c[3]&&(a=_s):a===_s?">"===c[0]?(a=n??Ps,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?_s:'"'===c[3]?Ds:Os):a===Ds||a===Os?a=_s:a===Rs||a===Ts?a=Ps:(a=_s,n=void 0);const u=a===_s&&e[t+1].startsWith("/>")?" ":"";r+=a===Ps?o+ws:h>=0?(s.push(l),o.slice(0,h)+bs+o.slice(h)+vs+u):o+vs+(-2===h?t:u)}return[Ns(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),s]};class V{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,h]=zs(e,t);if(this.el=V.createElement(c,o),Vs.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=Vs.nextNode())&&l.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(bs)){const t=h[r++],o=s.getAttribute(e).split(vs),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?k:"?"===a[1]?H:"@"===a[1]?I:R}),s.removeAttribute(e)}else e.startsWith(vs)&&(l.push({type:6,index:n}),s.removeAttribute(e));if(Es.test(s.tagName)){const e=s.textContent.split(vs),t=e.length-1;if(t>0){s.textContent=fs?fs.emptyScript:"";for(let o=0;o<t;o++)s.append(e[o],Ss()),Vs.nextNode(),l.push({type:2,index:++n});s.append(e[t],Ss())}}}else if(8===s.nodeType)if(s.data===ys)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(vs,e+1));)l.push({type:7,index:n}),e+=vs.length-1}n++}}static createElement(e,t){const o=xs.createElement("template");return o.innerHTML=e,o}}function Hs(e,t,o=e,s){if(t===Fs)return t;let n=void 0!==s?o._$Co?.[s]:o._$Cl;const r=Cs(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,s)),void 0!==s?(o._$Co??=[])[s]=n:o._$Cl=n),void 0!==n&&(t=Hs(e,n._$AS(e,t.values),n,s)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??xs).importNode(t,!0);Vs.currentNode=s;let n=Vs.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new M(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new L(n,this,e)),this._$AV.push(t),l=o[++a]}r!==l?.index&&(n=Vs.nextNode(),r++)}return Vs.currentNode=xs,s}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=Bs,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Hs(this,e,t),Cs(e)?e===Bs||null==e||""===e?(this._$AH!==Bs&&this._$AR(),this._$AH=Bs):e!==this._$AH&&e!==Fs&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):$s(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Bs&&Cs(this._$AH)?this._$AA.nextSibling.data=e:this.T(xs.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,s="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(Ns(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new lit_html_S(s,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Ms.get(e.strings);return void 0===t&&Ms.set(e.strings,t=new V(e)),t}k(e){ks(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const n of e)s===t.length?t.push(o=new M(this.S(Ss()),this.S(Ss()),this,this.options)):o=t[s],o._$AI(n),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,n){this.type=1,this._$AH=Bs,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Bs}_$AI(e,t=this,o,s){const n=this.strings;let r=!1;if(void 0===n)e=Hs(this,e,t,0),r=!Cs(e)||e!==this._$AH&&e!==Fs,r&&(this._$AH=e);else{const s=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=Hs(this,s[o+a],t,a),l===Fs&&(l=this._$AH[a]),r||=!Cs(l)||l!==this._$AH[a],l===Bs?e=Bs:e!==Bs&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!s&&this.j(e)}j(e){e===Bs?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Bs?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Bs)}}class I extends R{constructor(e,t,o,s,n){super(e,t,o,s,n),this.type=5}_$AI(e,t=this){if((e=Hs(this,e,t,0)??Bs)===Fs)return;const o=this._$AH,s=e===Bs&&o!==Bs||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==Bs&&(o===Bs||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Hs(this,e)}}const Us=gs.litHtmlPolyfillSupport;Us?.(V,M),(gs.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const s=o?.renderBefore??t;let n=s._$litPart$;if(void 0===n){const e=o?.renderBefore??null;s._$litPart$=n=new M(t.insertBefore(Ss(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fs}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const Ws=globalThis.litElementPolyfillSupport;Ws?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const js=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},qs={attribute:!0,type:String,converter:ds,reflect:!1,hasChanged:us},Gs=(e=qs,t,o)=>{const{kind:s,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(o.name,e),"accessor"===s){const{name:s}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(s,n,e)},init(t){return void 0!==t&&this.P(s,void 0,e),t}}}if("setter"===s){const{name:s}=o;return function(o){const n=this[s];t.call(this,o),this.requestUpdate(s,n,e)}}throw Error("Unsupported decorator location: "+s)};function Qs(e){return(t,o)=>"object"==typeof o?Gs(e,t,o):((e,t,o)=>{const s=t.hasOwnProperty(o);return t.constructor.createProperty(o,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const Ks=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function Ys(e,t){return(o,s,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof s?o:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ks(o,s,{get(){let o=e.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return Ks(o,s,{get(){return r(this)}})}}var Js=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,Xs=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?Zs(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&Js(t,o,r),r};const en=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let tn=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};tn.styles=Zo`
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

		${Jo(Object.entries(en).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

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
	`,Xs([Qs({reflect:!0})],tn.prototype,"icon",2),Xs([Qs({reflect:!0})],tn.prototype,"modifier",2),Xs([Qs({type:Number})],tn.prototype,"size",2),Xs([Qs({reflect:!0})],tn.prototype,"flip",2),Xs([Qs({reflect:!0})],tn.prototype,"rotate",2),tn=Xs([js("code-icon")],tn);var on=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,nn=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?sn(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&on(t,o,r),r};let rn=class extends lit_element_s{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Ls`<div class="progress-bar"></div>`}};rn.styles=Zo`
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
	`,nn([Qs({reflect:!0})],rn.prototype,"mode",2),nn([Qs({type:Boolean})],rn.prototype,"active",2),nn([Qs()],rn.prototype,"position",2),rn=nn([js("progress-indicator")],rn);Zo`
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
`;const an=Zo`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,ln=Zo`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,cn=Zo`
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
`,hn=Zo`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${an}
	}
	a:hover {
		text-decoration: underline;
	}
`;Zo`
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
`;var dn=Object.defineProperty,un=Object.defineProperties,pn=Object.getOwnPropertyDescriptor,gn=Object.getOwnPropertyDescriptors,fn=Object.getOwnPropertySymbols,mn=Object.prototype.hasOwnProperty,bn=Object.prototype.propertyIsEnumerable,vn=(e,t,o)=>t in e?dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,yn=(e,t)=>{for(var o in t||(t={}))mn.call(t,o)&&vn(e,o,t[o]);if(fn)for(var o of fn(t))bn.call(t,o)&&vn(e,o,t[o]);return e},wn=(e,t)=>un(e,gn(t)),xn=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?pn(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&dn(t,o,r),r},Sn=new Map,Cn=new WeakMap;function kn(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function $n(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function An(e,t){Sn.set(e,kn(t))}function Pn(e,t,o){const s=Cn.get(e);if(null==s?void 0:s[t])return $n(s[t],o.dir);const n=Sn.get(t);return n?$n(n,o.dir):{keyframes:[],options:{duration:0}}}var Rn=Zo`
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
`,Tn=Zo`
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
`,_n=Zo`
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
`,On=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,yn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const s=customElements.get(e);if(!s)return void customElements.define(e,class extends t{},o);let n=" (unknown version)",r=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in s&&s.version&&(r=" v"+s.version)}};On.version="2.15.1",On.dependencies={},xn([Qs()],On.prototype,"dir",2),xn([Qs()],On.prototype,"lang",2);const Dn=Math.min,En=Math.max,In=Math.round,Ln=Math.floor,Fn=e=>({x:e,y:e}),Bn={left:"right",right:"left",bottom:"top",top:"bottom"},Mn={start:"end",end:"start"};function Vn(e,t,o){return En(e,Dn(t,o))}function Nn(e,t){return"function"==typeof e?e(t):e}function zn(e){return e.split("-")[0]}function Hn(e){return e.split("-")[1]}function Un(e){return"x"===e?"y":"x"}function Wn(e){return"y"===e?"height":"width"}function jn(e){return["top","bottom"].includes(zn(e))?"y":"x"}function qn(e){return Un(jn(e))}function Gn(e){return e.replace(/start|end/g,(e=>Mn[e]))}function Qn(e){return e.replace(/left|right|bottom|top/g,(e=>Bn[e]))}function Kn(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Yn(e){const{x:t,y:o,width:s,height:n}=e;return{width:s,height:n,top:o,left:t,right:t+s,bottom:o+n,x:t,y:o}}function Jn(e,t,o){let{reference:s,floating:n}=e;const r=jn(t),a=qn(t),l=Wn(a),c=zn(t),h="y"===r,d=s.x+s.width/2-n.width/2,u=s.y+s.height/2-n.height/2,p=s[l]/2-n[l]/2;let g;switch(c){case"top":g={x:d,y:s.y-n.height};break;case"bottom":g={x:d,y:s.y+s.height};break;case"right":g={x:s.x+s.width,y:u};break;case"left":g={x:s.x-n.width,y:u};break;default:g={x:s.x,y:s.y}}switch(Hn(t)){case"start":g[a]-=p*(o&&h?-1:1);break;case"end":g[a]+=p*(o&&h?-1:1)}return g}async function Zn(e,t){var o;void 0===t&&(t={});const{x:s,y:n,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=Nn(t,e),f=Kn(g),m=l[p?"floating"===u?"reference":"floating":u],v=Yn(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(m)))||o?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:h,rootBoundary:d,strategy:c})),y="floating"===u?{x:s,y:n,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),x=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},S=Yn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-S.top+f.top)/x.y,bottom:(S.bottom-v.bottom+f.bottom)/x.y,left:(v.left-S.left+f.left)/x.x,right:(S.right-v.right+f.right)/x.x}}function Xn(e){return ir(e)?(e.nodeName||"").toLowerCase():"#document"}function er(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function tr(e){var t;return null==(t=(ir(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ir(e){return e instanceof Node||e instanceof er(e).Node}function or(e){return e instanceof Element||e instanceof er(e).Element}function sr(e){return e instanceof HTMLElement||e instanceof er(e).HTMLElement}function nr(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof er(e).ShadowRoot)}function rr(e){const{overflow:t,overflowX:o,overflowY:s,display:n}=ur(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+o)&&!["inline","contents"].includes(n)}function ar(e){return["table","td","th"].includes(Xn(e))}function lr(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function cr(e){const t=hr(),o=or(e)?ur(e):e;return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function hr(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function dr(e){return["html","body","#document"].includes(Xn(e))}function ur(e){return er(e).getComputedStyle(e)}function pr(e){return or(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function gr(e){if("html"===Xn(e))return e;const t=e.assignedSlot||e.parentNode||nr(e)&&e.host||tr(e);return nr(t)?t.host:t}function fr(e){const t=gr(e);return dr(t)?e.ownerDocument?e.ownerDocument.body:e.body:sr(t)&&rr(t)?t:fr(t)}function mr(e,t,o){var s;void 0===t&&(t=[]),void 0===o&&(o=!0);const n=fr(e),r=n===(null==(s=e.ownerDocument)?void 0:s.body),a=er(n);return r?t.concat(a,a.visualViewport||[],rr(n)?n:[],a.frameElement&&o?mr(a.frameElement):[]):t.concat(n,mr(n,[],o))}function br(e){const t=ur(e);let o=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=sr(e),r=n?e.offsetWidth:o,a=n?e.offsetHeight:s,l=In(o)!==r||In(s)!==a;return l&&(o=r,s=a),{width:o,height:s,$:l}}function vr(e){return or(e)?e:e.contextElement}function yr(e){const t=vr(e);if(!sr(t))return Fn(1);const o=t.getBoundingClientRect(),{width:s,height:n,$:r}=br(t);let a=(r?In(o.width):o.width)/s,l=(r?In(o.height):o.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const wr=Fn(0);function xr(e){const t=er(e);return hr()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:wr}function Sr(e,t,o,s){void 0===t&&(t=!1),void 0===o&&(o=!1);const n=e.getBoundingClientRect(),r=vr(e);let a=Fn(1);t&&(s?or(s)&&(a=yr(s)):a=yr(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==er(e))&&t}(r,o,s)?xr(r):Fn(0);let c=(n.left+l.x)/a.x,h=(n.top+l.y)/a.y,d=n.width/a.x,u=n.height/a.y;if(r){const e=er(r),t=s&&or(s)?er(s):s;let o=e,n=o.frameElement;for(;n&&s&&t!==o;){const e=yr(n),t=n.getBoundingClientRect(),s=ur(n),r=t.left+(n.clientLeft+parseFloat(s.paddingLeft))*e.x,a=t.top+(n.clientTop+parseFloat(s.paddingTop))*e.y;c*=e.x,h*=e.y,d*=e.x,u*=e.y,c+=r,h+=a,o=er(n),n=o.frameElement}}return Yn({width:d,height:u,x:c,y:h})}function Cr(e){return Sr(tr(e)).left+pr(e).scrollLeft}function kr(e,t,o){let s;if("viewport"===t)s=function(e,t){const o=er(e),s=tr(e),n=o.visualViewport;let r=s.clientWidth,a=s.clientHeight,l=0,c=0;if(n){r=n.width,a=n.height;const e=hr();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,o);else if("document"===t)s=function(e){const t=tr(e),o=pr(e),s=e.ownerDocument.body,n=En(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),r=En(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let a=-o.scrollLeft+Cr(e);const l=-o.scrollTop;return"rtl"===ur(s).direction&&(a+=En(t.clientWidth,s.clientWidth)-n),{width:n,height:r,x:a,y:l}}(tr(e));else if(or(t))s=function(e,t){const o=Sr(e,!0,"fixed"===t),s=o.top+e.clientTop,n=o.left+e.clientLeft,r=sr(e)?yr(e):Fn(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:s*r.y}}(t,o);else{const o=xr(e);s={...t,x:t.x-o.x,y:t.y-o.y}}return Yn(s)}function $r(e,t){const o=gr(e);return!(o===t||!or(o)||dr(o))&&("fixed"===ur(o).position||$r(o,t))}function Ar(e,t,o){const s=sr(t),n=tr(t),r="fixed"===o,a=Sr(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=Fn(0);if(s||!s&&!r)if(("body"!==Xn(t)||rr(n))&&(l=pr(t)),s){const e=Sr(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=Cr(n));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function Pr(e){return"static"===ur(e).position}function Rr(e,t){return sr(e)&&"fixed"!==ur(e).position?t?t(e):e.offsetParent:null}function Tr(e,t){const o=er(e);if(lr(e))return o;if(!sr(e)){let t=gr(e);for(;t&&!dr(t);){if(or(t)&&!Pr(t))return t;t=gr(t)}return o}let s=Rr(e,t);for(;s&&ar(s)&&Pr(s);)s=Rr(s,t);return s&&dr(s)&&Pr(s)&&!cr(s)?o:s||function(e){let t=gr(e);for(;sr(t)&&!dr(t);){if(cr(t))return t;if(lr(t))return null;t=gr(t)}return null}(e)||o}const _r={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:s,strategy:n}=e;const r="fixed"===n,a=tr(s),l=!!t&&lr(t.floating);if(s===a||l&&r)return o;let c={scrollLeft:0,scrollTop:0},h=Fn(1);const d=Fn(0),u=sr(s);if((u||!u&&!r)&&(("body"!==Xn(s)||rr(a))&&(c=pr(s)),sr(s))){const e=Sr(s);h=yr(s),d.x=e.x+s.clientLeft,d.y=e.y+s.clientTop}return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-c.scrollLeft*h.x+d.x,y:o.y*h.y-c.scrollTop*h.y+d.y}},getDocumentElement:tr,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:s,strategy:n}=e;const r="clippingAncestors"===o?lr(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let s=mr(e,[],!1).filter((e=>or(e)&&"body"!==Xn(e))),n=null;const r="fixed"===ur(e).position;let a=r?gr(e):e;for(;or(a)&&!dr(a);){const t=ur(a),o=cr(a);o||"fixed"!==t.position||(n=null),(r?!o&&!n:!o&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||rr(a)&&!o&&$r(e,a))?s=s.filter((e=>e!==a)):n=t,a=gr(a)}return t.set(e,s),s}(t,this._c):[].concat(o),a=[...r,s],l=a[0],c=a.reduce(((e,o)=>{const s=kr(t,o,n);return e.top=En(s.top,e.top),e.right=Dn(s.right,e.right),e.bottom=Dn(s.bottom,e.bottom),e.left=En(s.left,e.left),e}),kr(t,l,n));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:Tr,getElementRects:async function(e){const t=this.getOffsetParent||Tr,o=this.getDimensions,s=await o(e.floating);return{reference:Ar(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=br(e);return{width:t,height:o}},getScale:yr,isElement:or,isRTL:function(e){return"rtl"===ur(e).direction}};function Or(e,t,o,s){void 0===s&&(s={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=s,h=vr(e),d=n||r?[...h?mr(h):[],...mr(t)]:[];d.forEach((e=>{n&&e.addEventListener("scroll",o,{passive:!0}),r&&e.addEventListener("resize",o)}));const u=h&&l?function(e,t){let o,s=null;const n=tr(e);function r(){var e;clearTimeout(o),null==(e=s)||e.disconnect(),s=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:h,top:d,width:u,height:p}=e.getBoundingClientRect();if(l||t(),!u||!p)return;const g={rootMargin:-Ln(d)+"px "+-Ln(n.clientWidth-(h+u))+"px "+-Ln(n.clientHeight-(d+p))+"px "+-Ln(h)+"px",threshold:En(0,Dn(1,c))||1};let f=!0;function m(e){const t=e[0].intersectionRatio;if(t!==c){if(!f)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}f=!1}try{s=new IntersectionObserver(m,{...g,root:n.ownerDocument})}catch(e){s=new IntersectionObserver(m,g)}s.observe(e)}(!0),r}(h,o):null;let p,g=-1,f=null;a&&(f=new ResizeObserver((e=>{let[s]=e;s&&s.target===h&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=f)||e.observe(t)}))),o()})),h&&!c&&f.observe(h),f.observe(t));let m=c?Sr(e):null;return c&&function t(){const s=Sr(e);!m||s.x===m.x&&s.y===m.y&&s.width===m.width&&s.height===m.height||o();m=s,p=requestAnimationFrame(t)}(),o(),()=>{var e;d.forEach((e=>{n&&e.removeEventListener("scroll",o),r&&e.removeEventListener("resize",o)})),null==u||u(),null==(e=f)||e.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const Dr=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,s;const{x:n,y:r,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:o,platform:s,elements:n}=e,r=await(null==s.isRTL?void 0:s.isRTL(n.floating)),a=zn(o),l=Hn(o),c="y"===jn(o),h=["left","top"].includes(a)?-1:1,d=r&&c?-1:1,u=Nn(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:f}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&"number"==typeof f&&(g="end"===l?-1*f:f),c?{x:g*d,y:p*h}:{x:p*h,y:g*d}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(s=l.arrow)&&s.alignmentOffset?{}:{x:n+c.x,y:r+c.y,data:{...c,placement:a}}}}},Er=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:s,placement:n}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=Nn(e,t),h={x:o,y:s},d=await Zn(t,c),u=jn(zn(n)),p=Un(u);let g=h[p],f=h[u];if(r){const e="y"===p?"bottom":"right";g=Vn(g+d["y"===p?"top":"left"],g,g-d[e])}if(a){const e="y"===u?"bottom":"right";f=Vn(f+d["y"===u?"top":"left"],f,f-d[e])}const m=l.fn({...t,[p]:g,[u]:f});return{...m,data:{x:m.x-o,y:m.y-s}}}}},Ir=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,s;const{placement:n,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:h}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...v}=Nn(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const y=zn(n),w=jn(l),x=zn(l)===l,S=await(null==c.isRTL?void 0:c.isRTL(h.floating)),C=p||(x||!m?[Qn(l)]:function(e){const t=Qn(e);return[Gn(e),t,Gn(t)]}(l)),$="none"!==f;!p&&$&&C.push(...function(e,t,o,s){const n=Hn(e);let r=function(e,t,o){const s=["left","right"],n=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?n:s:t?s:n;case"left":case"right":return t?r:a;default:return[]}}(zn(e),"start"===o,s);return n&&(r=r.map((e=>e+"-"+n)),t&&(r=r.concat(r.map(Gn)))),r}(l,m,f,S));const A=[l,...C],P=await Zn(t,v),T=[];let _=(null==(s=r.flip)?void 0:s.overflows)||[];if(d&&T.push(P[y]),u){const e=function(e,t,o){void 0===o&&(o=!1);const s=Hn(e),n=qn(e),r=Wn(n);let a="x"===n?s===(o?"end":"start")?"right":"left":"start"===s?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Qn(a)),[a,Qn(a)]}(n,a,S);T.push(P[e[0]],P[e[1]])}if(_=[..._,{placement:n,overflows:T}],!T.every((e=>e<=0))){var O,D;const e=((null==(O=r.flip)?void 0:O.index)||0)+1,t=A[e];if(t)return{data:{index:e,overflows:_},reset:{placement:t}};let o=null==(D=_.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:D.placement;if(!o)switch(g){case"bestFit":{var E;const e=null==(E=_.filter((e=>{if($){const t=jn(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(o=e);break}case"initialPlacement":o=l}if(n!==o)return{reset:{placement:o}}}return{}}}},Lr=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:s,platform:n,elements:r}=t,{apply:a=()=>{},...l}=Nn(e,t),c=await Zn(t,l),h=zn(o),d=Hn(o),u="y"===jn(o),{width:p,height:g}=s.floating;let f,m;"top"===h||"bottom"===h?(f=h,m=d===(await(null==n.isRTL?void 0:n.isRTL(r.floating))?"start":"end")?"left":"right"):(m=h,f="end"===d?"top":"bottom");const v=g-c.top-c.bottom,y=p-c.left-c.right,w=Dn(g-c[f],v),x=Dn(p-c[m],y),S=!t.middlewareData.shift;let C=w,$=x;if(u?$=d||S?Dn(x,y):y:C=d||S?Dn(w,v):v,S&&!d){const e=En(c.left,0),t=En(c.right,0),o=En(c.top,0),s=En(c.bottom,0);u?$=p-2*(0!==e||0!==t?e+t:En(c.left,c.right)):C=g-2*(0!==o||0!==s?o+s:En(c.top,c.bottom))}await a({...t,availableWidth:$,availableHeight:C});const A=await n.getDimensions(r.floating);return p!==A.width||g!==A.height?{reset:{rects:!0}}:{}}}},Fr=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:s,placement:n,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:h,padding:d=0}=Nn(e,t)||{};if(null==h)return{};const u=Kn(d),p={x:o,y:s},g=qn(n),f=Wn(g),m=await a.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",x=v?"clientHeight":"clientWidth",S=r.reference[f]+r.reference[g]-p[g]-r.floating[f],C=p[g]-r.reference[g],$=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let A=$?$[x]:0;A&&await(null==a.isElement?void 0:a.isElement($))||(A=l.floating[x]||r.floating[f]);const P=S/2-C/2,T=A/2-m[f]/2-1,_=Dn(u[y],T),O=Dn(u[w],T),D=_,E=A-m[f]-O,F=A/2-m[f]/2+P,B=Vn(D,F,E),N=!c.arrow&&null!=Hn(n)&&F!==B&&r.reference[f]/2-(F<D?_:O)-m[f]/2<0,z=N?F<D?F-D:F-E:0;return{[g]:p[g]+z,data:{[g]:B,centerOffset:F-B-z,...N&&{alignmentOffset:z}},reset:N}}}),Br=(e,t,o)=>{const s=new Map,n={platform:_r,...o},r={...n.platform,_c:s};return(async(e,t,o)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:a}=o,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:d,y:u}=Jn(h,s,c),p=s,g={},f=0;for(let o=0;o<l.length;o++){const{name:r,fn:m}=l[o],{x:v,y,data:w,reset:x}=await m({x:d,y:u,initialPlacement:s,placement:p,strategy:n,middlewareData:g,rects:h,platform:a,elements:{reference:e,floating:t}});d=null!=v?v:d,u=null!=y?y:u,g={...g,[r]:{...g[r],...w}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(h=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):x.rects),({x:d,y:u}=Jn(h,p,c))),o=-1)}return{x:d,y:u,placement:p,strategy:n,middlewareData:g}})(e,t,{...n,platform:r})},Mr=1;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Vr=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==Mr||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const s=!!t[e];s===this.st.has(e)||this.nt?.has(e)||(s?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return Fs}});function Nr(e){return Hr(e)}function zr(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Hr(e){for(let t=e;t;t=zr(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=zr(e);t;t=zr(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var Ur=class extends On{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,s=0,n=0,r=0,a=0,l=0,c=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,s=e.bottom,n=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(o=t.left,s=t.bottom,n=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(o=e.right,s=e.top,n=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(o=t.right,s=t.top,n=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Or(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[Dr({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Lr({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ir({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Er({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Lr({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Fr({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>_r.getOffsetParent(e,Nr):_r.getOffsetParent;Br(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:wn(yn({},_r),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:s})=>{const n="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let s="",a="",l="",c="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=n?o:"",c=n?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=n?"":o,c=n?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",s="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",s="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:s,right:a,bottom:l,left:c,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return Ls`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Vr({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Vr({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Ls`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function Wr(e,t){return new Promise((o=>{e.addEventListener(t,(function s(n){n.target===e&&(e.removeEventListener(t,s),o())}))}))}function jr(e,t,o){return new Promise((s=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,wn(yn({},o),{duration:Gr()?0:o.duration}));n.addEventListener("cancel",s,{once:!0}),n.addEventListener("finish",s,{once:!0})}))}function qr(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Gr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Qr(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}Ur.styles=[_n,Tn],xn([Ys(".popup")],Ur.prototype,"popup",2),xn([Ys(".popup__arrow")],Ur.prototype,"arrowEl",2),xn([Qs()],Ur.prototype,"anchor",2),xn([Qs({type:Boolean,reflect:!0})],Ur.prototype,"active",2),xn([Qs({reflect:!0})],Ur.prototype,"placement",2),xn([Qs({reflect:!0})],Ur.prototype,"strategy",2),xn([Qs({type:Number})],Ur.prototype,"distance",2),xn([Qs({type:Number})],Ur.prototype,"skidding",2),xn([Qs({type:Boolean})],Ur.prototype,"arrow",2),xn([Qs({attribute:"arrow-placement"})],Ur.prototype,"arrowPlacement",2),xn([Qs({attribute:"arrow-padding",type:Number})],Ur.prototype,"arrowPadding",2),xn([Qs({type:Boolean})],Ur.prototype,"flip",2),xn([Qs({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],Ur.prototype,"flipFallbackPlacements",2),xn([Qs({attribute:"flip-fallback-strategy"})],Ur.prototype,"flipFallbackStrategy",2),xn([Qs({type:Object})],Ur.prototype,"flipBoundary",2),xn([Qs({attribute:"flip-padding",type:Number})],Ur.prototype,"flipPadding",2),xn([Qs({type:Boolean})],Ur.prototype,"shift",2),xn([Qs({type:Object})],Ur.prototype,"shiftBoundary",2),xn([Qs({attribute:"shift-padding",type:Number})],Ur.prototype,"shiftPadding",2),xn([Qs({attribute:"auto-size"})],Ur.prototype,"autoSize",2),xn([Qs()],Ur.prototype,"sync",2),xn([Qs({type:Object})],Ur.prototype,"autoSizeBoundary",2),xn([Qs({attribute:"auto-size-padding",type:Number})],Ur.prototype,"autoSizePadding",2),xn([Qs({attribute:"hover-bridge",type:Boolean})],Ur.prototype,"hoverBridge",2);const Kr=new Set,Yr=new Map;let Jr,Zr="ltr",Xr="en";const ea="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(ea){const e=new MutationObserver(ia);Zr=document.documentElement.dir||"ltr",Xr=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ta(...e){e.map((e=>{const t=e.$code.toLowerCase();Yr.has(t)?Yr.set(t,Object.assign(Object.assign({},Yr.get(t)),e)):Yr.set(t,e),Jr||(Jr=e)})),ia()}function ia(){ea&&(Zr=document.documentElement.dir||"ltr",Xr=document.documentElement.lang||navigator.language),[...Kr.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Kr.add(this.host)}hostDisconnected(){Kr.delete(this.host)}dir(){return`${this.host.dir||Zr}`.toLowerCase()}lang(){return`${this.host.lang||Xr}`.toLowerCase()}getTranslationData(e){var t,o;const s=new Intl.Locale(e.replace(/_/g,"-")),n=null==s?void 0:s.language.toLowerCase(),r=null!==(o=null===(t=null==s?void 0:s.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:s,language:n,region:r,primary:Yr.get(`${n}-${r}`),secondary:Yr.get(n)}}exists(e,t){var o;const{primary:s,secondary:n}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(s&&s[e]||n&&n[e]||t.includeFallback&&Jr&&Jr[e])}term(e,...t){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(s&&s[e])n=s[e];else{if(!Jr||!Jr[e])return String(e);n=Jr[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var oa={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};ta(oa);var sa=oa,na=class extends LocalizeController{};function ra(e,t){const o=yn({waitUntilFirstUpdate:!1},t);return(t,s)=>{const{update:n}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),r=this[n];t!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[s](t,r))}})),n.call(this,e)}}}ta(sa);var aa=class extends On{constructor(){super(),this.localize=new na(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=qr(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=qr(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Qr(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=Pn(this,"tooltip.show",{dir:this.localize.dir()});await jr(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Qr(this.body);const{keyframes:e,options:o}=Pn(this,"tooltip.hide",{dir:this.localize.dir()});await jr(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Wr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Wr(this,"sl-after-hide")}render(){return Ls`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Vr({tooltip:!0,"tooltip--open":this.open})}
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
    `}};aa.styles=[_n,Rn],aa.dependencies={"sl-popup":Ur},xn([Ys("slot:not([name])")],aa.prototype,"defaultSlot",2),xn([Ys(".tooltip__body")],aa.prototype,"body",2),xn([Ys("sl-popup")],aa.prototype,"popup",2),xn([Qs()],aa.prototype,"content",2),xn([Qs()],aa.prototype,"placement",2),xn([Qs({type:Boolean,reflect:!0})],aa.prototype,"disabled",2),xn([Qs({type:Number})],aa.prototype,"distance",2),xn([Qs({type:Boolean,reflect:!0})],aa.prototype,"open",2),xn([Qs({type:Number})],aa.prototype,"skidding",2),xn([Qs()],aa.prototype,"trigger",2),xn([Qs({type:Boolean})],aa.prototype,"hoist",2),xn([ra("open",{waitUntilFirstUpdate:!0})],aa.prototype,"handleOpenChange",1),xn([ra(["content","distance","hoist","placement","skidding"])],aa.prototype,"handleOptionsChange",1),xn([ra("disabled")],aa.prototype,"handleDisabledChange",1),An("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),An("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});aa.define("sl-tooltip");var la=Object.defineProperty,ca=Object.getOwnPropertyDescriptor,ha=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?ca(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&la(t,o,r),r};An("tooltip.show",null),An("tooltip.hide",null);let da=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return Ls`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??Bs}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};da.styles=Zo`
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
	`,ha([Qs()],da.prototype,"content",2),ha([Qs({reflect:!0})],da.prototype,"placement",2),ha([Qs({type:Boolean})],da.prototype,"disabled",2),ha([Qs({type:Number})],da.prototype,"distance",2),ha([Qs({type:Boolean})],da.prototype,"hoist",2),da=ha([js("gl-tooltip")],da);var ua=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,ga=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?pa(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&ua(t,o,r),r};let fa=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?Ls`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?Ls`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?Ls`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:Ls`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};fa.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},fa.styles=[cn,Zo`
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
				${ln}
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
		`],ga([Ys(".control")],fa.prototype,"control",2),ga([Qs({reflect:!0})],fa.prototype,"appearance",2),ga([Qs({type:Boolean,reflect:!0})],fa.prototype,"disabled",2),ga([Qs({reflect:!0})],fa.prototype,"density",2),ga([Qs({type:Boolean,reflect:!0})],fa.prototype,"full",2),ga([Qs()],fa.prototype,"href",2),ga([Qs({reflect:!0})],fa.prototype,"role",1),ga([Qs()],fa.prototype,"tooltip",2),fa=ga([js("gl-button")],fa);var ma=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.PastePatchFromClipboard="gitlens.pastePatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusConnectCloudIntegrations="gitlens.plus.cloudIntegrations.connect",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowFocusPage="gitlens.showFocusPage",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLaunchpadView="gitlens.showLaunchpadView",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWelcomePage="gitlens.showWelcomePage",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(ma||{});const ba=[{key:"launchpad",code:"GLLAUNCHPAD24",states:[Ai.Free,Ai.FreeInPreviewTrial,Ai.FreePreviewTrialExpired,Ai.FreePlusInTrial,Ai.FreePlusTrialExpired,Ai.FreePlusTrialReactivationEligible],expiresOn:new Date("2024-09-27T06:59:00.000Z").getTime(),commandTooltip:"Launchpad Sale: Save 75% or more on GitLens Pro"},{key:"launchpad-extended",code:"GLLAUNCHPAD24",states:[Ai.Free,Ai.FreeInPreviewTrial,Ai.FreePreviewTrialExpired,Ai.FreePlusInTrial,Ai.FreePlusTrialExpired,Ai.FreePlusTrialReactivationEligible],startsOn:new Date("2024-09-27T06:59:00.000Z").getTime(),expiresOn:new Date("2024-10-14T06:59:00.000Z").getTime(),commandTooltip:"Launchpad Sale: Save 75% or more on GitLens Pro"},{key:"pro50",states:[Ai.Free,Ai.FreeInPreviewTrial,Ai.FreePreviewTrialExpired,Ai.FreePlusInTrial,Ai.FreePlusTrialExpired,Ai.FreePlusTrialReactivationEligible],commandTooltip:"Limited-Time Sale: Save 33% or more on your 1st seat of Pro. See your special price"}];function va(e,t){if(null!=e)for(const o of ba)if((null==t||t===o.key)&&ya(o,e))return o}function ya(e,t){const o=Date.now();return(null==e.states||e.states.includes(t))&&(null==e.expiresOn||e.expiresOn>o)&&(null==e.startsOn||e.startsOn<o)}const wa=Zo`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var xa=Object.defineProperty,Sa=Object.getOwnPropertyDescriptor,Ca=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?Sa(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&xa(t,o,r),r};let ka=class extends lit_element_s{constructor(){super(...arguments),this.type="info"}render(){if(!this.promo)return;const e=this.renderPromo(this.promo);return e?"link"===this.type?Ls`<a
				class="link"
				href="${this.promo.command??"command:gitlens.plus.upgrade"}"
				title="${this.promo.commandTooltip}"
				>${e}</a
			>`:Ls`<p class="promo">${e}</p>`:void 0}renderPromo(e){switch(e.key){case"pro50":return Ls`<span class="content${"link"===this.type?Bs:" muted"}"
					>Limited-Time Sale: <b>Save 33% or more on your 1st seat of Pro.</b></span
				>`;case"launchpad":case"launchpad-extended":return Ls`<span class="content${"link"===this.type?Bs:" muted"}"
					>Launchpad Sale: <b>Save 75% or more on GitLens Pro.</b></span
				>`}}};ka.styles=[Zo`
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
		`],Ca([Qs({type:Object})],ka.prototype,"promo",2),Ca([Qs({reflect:!0,type:String})],ka.prototype,"type",2),ka=Ca([js("gl-promo")],ka);var $a=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,Pa=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?Aa(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&$a(t,o,r),r};let Ra=class extends lit_element_s{firstUpdated(){"alert"===this.appearance&&queueMicrotask((()=>this.button.focus()))}render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":Bs,t=this.state?va(this.state):void 0;switch(this.state){case Ai.VerificationRequired:return Ls`
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Ta(ma.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Ta(ma.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case Ai.Free:return Ls`
					<gl-button
						appearance="${e}"
						href="${Ta(ma.PlusStartPreviewTrial,this.source)}"
						>Continue</gl-button
					>
					<p>
						Continuing gives you 3 days to preview
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded}  and other `:""}local
						Pro features.<br />
						${"alert"!==e?Ls`<br />`:""} For full access to Pro features
						<a href="${Ta(ma.PlusSignUp,this.source)}"
							>start your free 7-day Pro trial</a
						>
						or
						<a href="${Ta(ma.PlusLogin,this.source)}" title="Sign In">sign in</a>.
					</p>
				`;case Ai.FreePreviewTrialExpired:return Ls`
					<gl-button
						appearance="${e}"
						href="${Ta(ma.PlusSignUp,this.source)}"
						>Start Pro Trial</gl-button
					>
					<p>
						Start your free 7-day Pro trial to try
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and other `:""}Pro
						features, or
						<a href="${Ta(ma.PlusLogin,this.source)}" title="Sign In">sign in</a>.
					</p>
				`;case Ai.FreePlusTrialExpired:return Ls` <gl-button
						appearance="${e}"
						href="${Ta(ma.PlusUpgrade,this.source)}"
						>Upgrade to Pro</gl-button
					>
					${this.renderPromo(t)}
					<p>
						Your Pro trial has ended. Please upgrade for full access to
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and other `:""}Pro
						features.
					</p>`;case Ai.FreePlusTrialReactivationEligible:return Ls`
					<gl-button
						appearance="${e}"
						href="${Ta(ma.PlusReactivateProTrial,this.source)}"
						>Continue</gl-button
					>
					<p>
						Reactivate your Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another 7 days!
					</p>
				`}}renderPromo(e){return Ls`<gl-promo .promo=${e}></gl-promo>`}};function Ta(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}Ra.styles=[wa,Zo`
			:host {
				--gk-action-radius: 0.3rem;
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
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

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],Pa([Ys("gl-button")],Ra.prototype,"button",2),Pa([Qs({type:String})],Ra.prototype,"appearance",2),Pa([Qs()],Ra.prototype,"featureWithArticleIfNeeded",2),Pa([Qs({type:Object})],Ra.prototype,"source",2),Pa([Qs({attribute:!1,type:Number})],Ra.prototype,"state",2),Ra=Pa([js("gl-feature-gate-plus-state")],Ra);var _a=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,Da=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?Oa(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&_a(t,o,r),r};let Ea=class extends lit_element_s{render(){if(!this.visible||null!=this.state&&(null!=(e=this.state)&&(6===e||1===e||3===e)))return void(this.hidden=!0);var e;const t=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,Ls`
			<section>
				<slot></slot>
				<slot name="feature"></slot>
				<gl-feature-gate-plus-state
					appearance=${t}
					.featureWithArticleIfNeeded=${this.featureWithArticleIfNeeded}
					.source=${this.source}
					.state=${this.state}
				></gl-feature-gate-plus-state>
			</section>
		`}};Ea.styles=Zo`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

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
			--link-foreground-active: var(--vscode-foreground);

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
	`,Da([Qs({reflect:!0})],Ea.prototype,"appearance",2),Da([Qs()],Ea.prototype,"featureWithArticleIfNeeded",2),Da([Qs({type:Object})],Ea.prototype,"source",2),Da([Qs({attribute:!1,type:Number})],Ea.prototype,"state",2),Da([Qs({type:Boolean})],Ea.prototype,"visible",2),Ea=Da([js("gl-feature-gate")],Ea);Ur.define("sl-popup");const Ia=new WeakMap;function La(e,t){return function(o,s,n){let r=Ia.get(o.constructor);null==r&&Ia.set(o.constructor,r=[]),r.push({method:n.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_s{emit(e,t,o){const s=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(s),s}update(e){const t=Ia.get(this.constructor);if(null!=t)for(const{keys:o,method:s,afterFirstUpdate:n}of t){if(n&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&s.call(this,t)}super.update(e)}}var Fa=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,Ma=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?Ba(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&Fa(t,o,r),r};let Va=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=mo(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const o=mo(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,bo(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,bo(this,"gl-popover-after-hide")}render(){return Ls`<sl-popup
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
		</sl-popup>`}};Va.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},Va.styles=Zo`
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
	`,Ma([Ys("#popover")],Va.prototype,"body",2),Ma([Ys("sl-popup")],Va.prototype,"popup",2),Ma([Qs({reflect:!0})],Va.prototype,"placement",2),Ma([Qs({type:Object})],Va.prototype,"anchor",2),Ma([Qs({reflect:!0,type:Boolean})],Va.prototype,"disabled",2),Ma([Qs({type:Number})],Va.prototype,"distance",2),Ma([Qs({reflect:!0,type:Boolean})],Va.prototype,"open",2),Ma([Qs({type:Number})],Va.prototype,"skidding",2),Ma([Qs()],Va.prototype,"trigger",2),Ma([Qs({type:Boolean})],Va.prototype,"hoist",2),Ma([La("open",{afterFirstUpdate:!0})],Va.prototype,"handleOpenChange",1),Ma([La(["distance","hoist","placement","skidding"])],Va.prototype,"handleOptionsChange",1),Ma([La("disabled")],Va.prototype,"handleDisabledChange",1),Va=Ma([js("gl-popover")],Va);var Na=Object.defineProperty,za=Object.getOwnPropertyDescriptor,Ha=(e,t,o,s)=>{for(var n,r=s>1?void 0:s?za(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&Na(t,o,r),r};let Ua=class extends lit_element_s{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:Ri(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return Ls`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===Ai.VerificationRequired)return Ls`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(_i(this.subscription)||this.cloud&&null!=this.subscription.account)return Ls`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(1===t||3===t))return Ls`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t;return this.cloud?Ls`${e}<span class="badge-icon">☁️</span>`:e}renderPopoverHeader(){const e=Ls`<span class="popup-title"
			>${this.preview?"Preview feature":"Pro feature"}${this.cloud?" ☁️":""}</span
		>`;return this.state===Ai.Paid?Ls`<div class="popup-header">${e}</div>`:this.cloud?this.preview?Ls`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require a paid plan in the future</span
					>
				</div>`:Ls`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires a paid plan</span>
			</div>`:this.preview?Ls`<div class="popup-header">
				${e}<span class="popup-subtitle">May require a paid plan in the future</span>
			</div>`:Ls`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires a paid plan for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return Bs;let e;switch(this.state){case Ai.Paid:e=Ls`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${Wa(ma.ShowAccountView,void 0)}"
							>${Pi(this.subscription?.plan.actual.id??$i.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case Ai.VerificationRequired:e=Ls`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Wa(ma.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${Wa(ma.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case Ai.FreePlusInTrial:{const t=this.daysRemaining;e=Ls`<p>
						You have
						<strong>${t<1?"<1 day":ro("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case Ai.FreePlusTrialExpired:e=Ls`<p>
						Your Pro trial as ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(Ls`<p>Please upgrade for full access to Pro features:</p>`)}`;break;case Ai.FreePlusTrialReactivationEligible:e=Ls`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another 7 days!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Wa(ma.PlusReactivateProTrial,this.source)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===Ai.FreeInPreviewTrial){const t=this.daysRemaining;e=Ls`<p>
							You have
							<strong>${t<1?"<1 day":ro("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=Ls`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return Ls`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return Ls`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${Wa(ma.PlusSignUp,this.source)}"
				>Start 7-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${Wa(ma.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){const t=va(this.state);return Ls`<div class="actions">
			${e??Bs}
			<gl-button
				appearance="primary"
				density="tight"
				href="${Wa(ma.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo(t)}
		</div>`}renderPromo(e){return Ls`<gl-promo .promo=${e}></gl-promo>`}};function Wa(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}Ua.styles=[cn,hn,Zo`
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
				${Jo(an)}
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
		`],Ha([Qs({type:Boolean})],Ua.prototype,"cloud",2),Ha([Qs({reflect:!0})],Ua.prototype,"placement",2),Ha([Qs({type:Boolean})],Ua.prototype,"preview",2),Ha([Qs({type:Object})],Ua.prototype,"source",2),Ha([Qs({attribute:!1})],Ua.prototype,"subscription",2),Ua=Ha([js("gl-feature-badge")],Ua);class TimelineApp extends App{constructor(){super("TimelineApp")}onInitialize(){var e;je.getOrCreate(e).withPrefix("vscode").register(ui(),pi()),this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(fo.on(document,"keydown",(e=>this.onKeyDown(e))),fo.on(document.getElementById("periods"),"change",((e,t)=>this.onPeriodChanged(e,t))),{dispose:()=>this._chart?.dispose()}),e}onMessageReceived(e){if(!0===Bi.is(e))this.state=e.params.state,this.setState(this.state),this.updateState();else super.onMessageReceived?.(e)}onChartDataPointClicked(e){this.sendCommand(Li,e)}onKeyDown(e){"Escape"!==e.key&&"Esc"!==e.key||this._chart?.reset()}onPeriodChanged(e,t){const o=t.options[t.selectedIndex].value;!function(e){if("all"===e)return;const[t,o]=e.split("|");if(isNaN(Number(t))||"D"!==o&&"M"!==o&&"Y"!==o)throw new Error(`Invalid period: ${e}`)}(o),this.log(`onPeriodChanged(): name=${t.name}, value=${o}`),this.updateLoading(!0),this.sendCommand(Fi,{period:o})}updateState(){const e=document.getElementById("subscription-gate");null!=e&&(e.source={source:"timeline",detail:"gate"},e.state=this.state.access.subscription.current.state,e.visible=!0!==this.state.access.allowed);const t=null==this.state.access.subscription?.current||!_i(this.state.access.subscription?.current),o=document.querySelectorAll("gl-feature-badge");for(const e of o)e.source={source:"timeline",detail:"badge"},e.subscription=this.state.access.subscription.current,e.hidden=!t;null==this._chart&&(this._chart=new TimelineChart("#chart",this.placement),this._chart.onDidClickDataPoint(this.onChartDataPointClicked,this));let{title:s,sha:n}=this.state,r="";if(null!=s){const e=s.lastIndexOf("/");if(e>=0){const t=s.substring(e+1);r=s.substring(0,e),s=t}}else"editor"!==this.placement||null!=this.state.dataset||this.state.access.allowed||(s="index.ts",r="src/app");function a(e,t,o){const s=document.querySelector(`[data-bind="${e}"]`);null!=s&&(o?.html?s.innerHTML=t??"":s.textContent=t??"")}a("title",s),a("description",r),a("sha",n?`<code-icon icon="git-commit" size="16"></code-icon><span class="sha">${n}</span>`:void 0,{html:!0});const l=document.getElementById("periods");if(null!=l){const e=this.state?.period,t=l.getElementsByTagName("vscode-option");for(const o of t)e===o.getAttribute("value")?o.setAttribute("selected",""):o.removeAttribute("selected")}this._chart.updateChart(this.state).finally((()=>this.updateLoading(!1)))}updateLoading(e){document.getElementById("spinner")?.setAttribute("active",e?"true":"false")}}new TimelineApp;var ja=n.h;export{ja as TimelineApp};